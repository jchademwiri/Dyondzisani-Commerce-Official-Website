import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-2xl font-semibold tracking-tight text-destructive">
          Error 404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-foreground/50">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-2">
          <Link href={"/"}>
            <Button>Go back home</Button>
          </Link>
          <Link href={"/contact"}>
            <Button variant={"link"} className="flex gap-2 text-foreground">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default NotFound;
