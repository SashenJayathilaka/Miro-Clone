"use client";

import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";
import Footer from "./footer";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  id: string;
  tittle: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
};

export function BoardCard({
  id,
  tittle,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  orgId,
  isFavorite,
}: Props) {
  const { userId } = useAuth();
  const authorLabel = userId == authorId ? "you" : authorName;
  const createAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-100">
          <Image src={imageUrl} alt={tittle} fill className="object-fit" />
          <Overlay />
        </div>
        <Footer
          tittle={tittle}
          authorLabel={authorLabel}
          createdAtLabel={createAtLabel}
          isFavorite={isFavorite}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
}

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
