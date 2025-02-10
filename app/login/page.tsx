import Link from "next/link";

export default function Login() {
    return(

        <div className="min-h-screen w-screen flex items-center justify-center">
             <div className="flex w-full max-w-sm flex-col gap-6">
                <Link href="/" className="text-2xl font-bold">
                    <h1 className="text-2xl font-bold">
                        Listing
                    </h1>
                </Link>
      </div>
        </div>
    )
}