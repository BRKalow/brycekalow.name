"use client";

import useSWR, { BareFetcher } from "swr";
import { HeartsButton } from "../../../components/hearts-button";
import { StarsButton } from "../../../components/stars-button";

import type { Reactions } from "../../../lib/db";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export function Reactions({ post }) {
  return (
    <>
      <HeartsButton post={post} />
      <StarsButton post={post} />
    </>
  );
}
