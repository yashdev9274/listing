import { JobFilter } from "@/components/home/jobFilter";
import JobListing from "@/components/home/jobListing";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <JobFilter/>
      <div className="col-span-2">
        <JobListing />
      </div>
    </div>
  );
}
