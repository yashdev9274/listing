"use server"

import { z } from "zod";
import { companySchema } from "./utils/zodschema";
import { prisma } from "./utils/db";
import { auth } from "./utils/auth";
import requireUser from "./utils/requireuser";
import { redirect } from "next/navigation";

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
}