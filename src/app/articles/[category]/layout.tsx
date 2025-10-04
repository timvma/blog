export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-[92vw] max-w-[1200px] mx-auto">
      <div>bread crumbs</div>
      <h1>Category</h1>
      <p>date created upddated</p>
      {children}
      <div>bread crumbs</div>
      <div>related posts</div>
    </main>
  );
}
