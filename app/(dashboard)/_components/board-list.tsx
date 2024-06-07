"use client";

import EmptyBoard from "./empty-board";
import EmptyFavorite from "./empty-favotite";
import EmptySearch from "./empty-search";

type Props = {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
};

function BoardList({ orgId, query }: Props) {
  const data = []; //TODO

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorite />;
  }

  if (!data?.length) {
    return <EmptyBoard />;
  }

  return <div>{JSON.stringify(query)}</div>;
}

export default BoardList;
