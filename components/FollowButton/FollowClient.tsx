"use client";

import { useRouter } from "next/router";
import { useState, useTransition } from "react";

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

export default function FollowClient({ targetUserId, isFollowing }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const isMutating = isFetching || isPending;

  const follow = async () => {
    setIsFetching(true);

    const res = await fetch("/api/foolow", {
      method: "POST",
      body: JSON.stringify({ targetUserId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsFetching(false);

    console.log(res);
  };

  if (isFollowing) {
    return <button onClick={unfollow}>{"Unfollow"}</button>;
  } else {
    return <button onClick={follow}>{"Follow"}</button>;
  }
}
