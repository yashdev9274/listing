import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./ThemeToggle";

export function Navbar(){
    return(
        <nav className="flex justify-between items-center py-4">
            <Link href="/">
                <h1 className="text-2xl font-bold">Listing</h1>
            </Link>
            <div className="flex items-center space-x-4">
                <ModeToggle />
            <Button>
                Login
            </Button>
            </div>
        </nav>
    );
}