import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function LoginForm(){
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
                        <form>
                            <Button className="w-full" >
                                Login
                            </Button>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}