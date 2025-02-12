import { Navbar } from "@/components/home/navbar";
import { ModeToggle } from "@/components/home/ThemeToggle";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            {/* <ModeToggle /> */}
            {children} 
        </div>
    );
}