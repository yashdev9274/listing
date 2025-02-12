import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ModeToggle } from "./ThemeToggle";
import { auth, signOut } from "@/app/utils/auth";
import { UserDropdown } from "./profileDropdown";

export async function Navbar(){

    const session = await auth()
    return(
        <nav className="flex justify-between items-center py-4">
            <Link href="/">
                <h1 className="text-2xl font-bold">Listing</h1>
            </Link>
            {/* <div className="flex items-center space-x-4">
                <ModeToggle />
                {session?.user ? (<form action = {async()=>{
                    "use server"
                    await signOut({
                        redirectTo: "/",
                    })
                }}>
                    <Button>
                        Logout
                    </Button>
                </form>):(
                    <Link href="/login" className={buttonVariants({variant: "outline"})}>
                        Login
                    </Link>
                )}
            
            </div> */}

<div className="hidden md:flex items-center gap-5">
        <ModeToggle />
        <Link href="/postjob" className={buttonVariants({ size: "lg" })}>
          Post Job
        </Link>
        {session?.user ? (
          <UserDropdown
            email={session.user.email as string}
            name={session.user.name as string}
            image={session.user.image as string}
          />
        ) : (
          <Link
            href="/login"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Login
          </Link>
        )}
      </div>
        </nav>
    );
}