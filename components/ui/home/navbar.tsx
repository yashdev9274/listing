import Link from "next/link";

export function Navbar(){
    return(
        <nav className="flex justify-between items-center py-4">
            <Link href="/">
                <h1 className="text-2xl font-bold">Listing</h1>
            </Link>
        </nav>
    );
}