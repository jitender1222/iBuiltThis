import { Home, Map, SparkleIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex justify-between p-4 border-b-2 items-center">
      <div className="flex font-bold md:text-xl cursor-pointer items-center">
        <SparkleIcon className="bg-primary md:size-10 p-2 mr-2 rounded-xl text-white" />
        i<span className="text-ring">Built</span>
        This
      </div>
      <div className="gap-2 hidden md:flex">
        <Link href="/">
          <span className="flex gap-2 p-2 hover:bg-muted/20 cursor-pointer">
            <Home /> Home{" "}
          </span>
        </Link>

        <Link href="/explore">
          <span className="flex gap-2 p-2 hover:bg-muted/20 cursor-pointer">
            <Map /> Explore{" "}
          </span>
        </Link>
      </div>
      <div className="flex gap-2 ">
        <SignedIn>
          <Button className="cursor-pointer">
            <SparkleIcon /> Submit Project
          </Button>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <Button className="cursor-pointer" variant="outline">
              Signin
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className="cursor-pointer">Signup</Button>
          </SignUpButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default Header;
