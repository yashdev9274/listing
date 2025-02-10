import { auth, signIn } from "@/app/utils/auth";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { redirect } from "next/navigation";

export async function LoginForm(){
    const session = await auth()

    if(session?.user){
        return redirect("/")
    }

    return (
        <div className="flex w-full max-w-sm flex-col gap-6">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome to Listing!</CardTitle>
                    <CardDescription>
                        Login into your Account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <form action = {async()=>{
                            "use server"
                            await signIn("github",{
                                redirectTo: "/",
                            })
                        }}>
                            <Button className="w-full" >
                                Login with Github
                            </Button>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}