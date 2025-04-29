import Breadcrumb from "@/components/Breadcrumb";

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full bg-blue-100 dark:bg-blue-900 py-18">
        <Breadcrumb />
      </div>
      {children}
    </>
  );
}
