'use client'

import { prisma } from "@/app/utils/db"
import requireUser from "@/app/utils/requireuser"
// import requireUser from "@/app/utils/requireuser"
import CreateJobForm from "@/components/form/createJobForm"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { User } from "lucide-react"
import { redirect } from "next/navigation"

async function getCompany(userId: string) {
  const data = await prisma.company.findUnique({
    where: {
      userId: userId,
    },
    select: {
      name: true,
      location: true,
      about: true,
      logo: true,
      xAccount: true,
      website: true,
    },
  });

  if (!data) {
    return redirect("/");
  }
  return data;
}


export default async function PostJob() {
  const session = await requireUser();
  const data = await getCompany(session.id as string);
  
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Post a New Job</CardTitle>
            </CardHeader>
            <div className="p-6">
              <CreateJobForm 
                companyAbout={data.about}
                companyLocation={data.location}
                companyLogo={data.logo}
                companyName={data.name}
                companyXAccount={data.xAccount}
                companyWebsite={data.website}
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}