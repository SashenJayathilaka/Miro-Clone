import Image from "next/image";
import React from "react";

type Props = {};

function EmptyFavorite({}: Props) {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/noresultfound.webp" height={250} width={250} alt="empty" />
      <h2 className="text-2xl font-semibold mt-6">No Favorite Found!</h2>
      <p className="text-muted-foreground text-sm mt-2">Try Favorite Miro</p>
    </div>
  );
}

export default EmptyFavorite;
