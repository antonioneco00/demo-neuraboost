import Breadcrumb from "@/components/Breadcrumb";

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full bg-linear-120 from-background to-blue-50 dark:to-blue-950 py-18">
        <Breadcrumb />
      </div>
      {children}
    </>
  );
}
