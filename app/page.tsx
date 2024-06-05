import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>http://localhost:3000/</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
