import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

function EmptyBoard({}: Props) {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/noresultfound.webp" height={250} width={250} alt="empty" />
      <h2 className="text-2xl font-semibold mt-6">Create your first Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button size="lg">Create Board</Button>
      </div>
    </div>
  );
}

export default EmptyBoard;
