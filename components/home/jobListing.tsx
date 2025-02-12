
import { prisma } from "@/app/utils/db"
import { Card, CardHeader } from "../ui/card"

async function getData(){
    const data = await prisma.jobPost.findMany({
        where:{
            status: "ACTIVE",
        },
        select:{
            jobTitle: true,
            id: true,
            salaryFrom: true,
            salaryTo: true,
            employmentType: true,
            location: true,
            createdAt: true,
            company: {
              select: {
                name: true,
                logo: true,
                location: true,
                about: true,
              },
            },
        },
        orderBy: {
            createdAt: "desc",
          },
        
    });
    return data;
    
}

export default async function JobListing() {
    const data = await getData();



    return(
        <Card className="space-y-4">
            <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">

                    {data.length>0?(
                        <div className="space-y-4">
                            {data.map((job)=>(
                                <p key = {job.id}>{job.jobTitle}</p>
                            ))}
                        </div>
                    ):(
                        <p>No jobs found</p>
                    )}
                </div>
            </CardHeader>

        </Card>
    )
}