import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-indigo-500">Discord Clone</h1>
      <Button>Test</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
