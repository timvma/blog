import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Link from "next/link";
export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Page() {
  const client = createClient();
  const articles = await client.getAllByType("article");
  return (
    <>
      Articles
      <Link href={"/articles/life/test"}>Life / Test</Link>
      {articles.map((article) => (
        <li key={article.uid}>
          <Link href={`/articles/life/${article.uid}`}>
            /{article.data.title}
          </Link>
        </li>
      ))}
    </>
  );
}
