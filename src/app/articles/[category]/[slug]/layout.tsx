export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-[92vw] max-w-[1200px] mx-auto xl:grid xl:grid-cols-[1fr_400px] ">
      <div>{children}</div>
      <aside>
        <div className="sticky top-0 p-5 bg-white"></div>
      </aside>
    </main>
  );
}
