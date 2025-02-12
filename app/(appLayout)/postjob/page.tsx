'use client'

// import requireUser from "@/app/utils/requireuser"
import CreateJobForm from "@/components/form/createJobForm"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

export default function PostJob() {
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
                companyAbout="Company name"
                companyLocation="Company name"
                companyLogo="Company name"
                companyName="Company name"
                companyXAccount="Company name"
                companyWebsite="Company name"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}