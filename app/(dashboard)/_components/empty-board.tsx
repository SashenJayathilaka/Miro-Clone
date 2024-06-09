"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutations";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {};

function EmptyBoard({}: Props) {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);
  /*  const create = useMutation(api.board.create); */

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board Created");
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Something Went Wrong"));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/noresultfound.webp" height={250} width={250} alt="empty" />
      <h2 className="text-2xl font-semibold mt-6">Create your first Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button onClick={onClick} size="lg" disabled={pending}>
          Create Board
        </Button>
      </div>
    </div>
  );
}

export default EmptyBoard;
