"use server"

import { z } from "zod";
import { companySchema, jobSchema, jobSeekerSchema } from "./utils/zodschema";
import { prisma } from "./utils/db";
import { auth } from "./utils/auth";
import requireUser from "./utils/requireuser";
import { redirect } from "next/navigation";
import { User } from "lucide-react";

export async function createCompany(data: z.infer<typeof companySchema>){

    const session = await requireUser()

    const validatedData = companySchema.parse(data);

  console.log(validatedData);

  await prisma.user.update({
    where: {
      id: session.id,
    },
    data: {
      onboardingCompleted: true,
      userType: "COMPANY",
      Company: {
        create: {
          ...validatedData,
        },
      },
    },
  });

  return redirect("/");
};

export async function createJobSeeker(data: z.infer<typeof jobSeekerSchema>) {

  const user = await requireUser();

  const validatedData = jobSeekerSchema.parse(data);
  
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      onboardingCompleted: true,
      userType: "JOB_SEEKER",
      JobSeeker: {
        create: {
          ...validatedData,
        },
      },
    },
  });

  return redirect("/");

};

export async function createJob(data: z.infer<typeof jobSchema>) {
  try {
    const user = await requireUser();
    const validatedData = jobSchema.parse(data);
    console.log("Validated data:", validatedData); // Debug log

    const company = await prisma.company.findUnique({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
      }
    });

    if (!company?.id) {
      throw new Error("Company not found");
    }

    const jobPost = await prisma.jobPost.create({
      data: {
        companyId: company.id,
        jobDescription: validatedData.jobDescription,
        jobTitle: validatedData.jobTitle,
        employmentType: validatedData.employmentType,
        location: validatedData.location,
        salaryFrom: validatedData.salaryFrom,
        salaryTo: validatedData.salaryTo,
      }
    });

    return redirect("/");
  } catch (error) {
    console.error("Error creating job:", error);    throw error;  }}