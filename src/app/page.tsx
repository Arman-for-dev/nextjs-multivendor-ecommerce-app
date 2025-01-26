import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end">
        <UserButton/>
        <ThemeToggle/>
      </div>
      <h1 className="text-blue-500">Hello Multivendor</h1>
      <h1 className="font-bold text-blue-500 font-barlow">Hello Multivendor</h1>
      <Button variant="destructive">Click Me</Button>
    </div>
  );
}
