import { JobFilter } from "@/components/home/jobFilter";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <JobFilter/>
      <Card className="col-span-2"></Card>
    </div>
  );
}
