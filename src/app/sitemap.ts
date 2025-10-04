import type { MetadataRoute } from "next";
import { createClient } from "@/prismicio";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.DOMAIN_NAME;
  const client = createClient();
  // Fetch all posts from Prismic
  const posts = await client.getAllByType("article"); // <- your custom type
  // Static pages
  const pages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
  ];

  // Articles
  const articles = posts.map((post) => ({
    url: `${baseUrl}/articles/${post.uid}`,
    lastModified: post.last_publication_date
      ? new Date(post.last_publication_date)
      : new Date(),
  }));

  return [...pages, ...articles];
}
