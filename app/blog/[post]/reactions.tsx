"use client";

import useSWR, { BareFetcher } from "swr";
import { HeartsButton } from "../../../components/hearts-button";
import { StarsButton } from "../../../components/stars-button";

import type { Reactions } from "../../../lib/db";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export function Reactions({ post }) {
  const { data } = useSWR<Reactions>(`/api/reactions/${post}`, fetcher);

  return (
    <>
      <HeartsButton count={data?.hearts} post={post} />
      <StarsButton count={data?.stars} post={post} />
    </>
  );
}
