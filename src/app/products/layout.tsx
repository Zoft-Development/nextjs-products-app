// import RouteGuard from "@/components/RouteGuard";
// import ProductsHeader from "@/features/products/components/ProductsHeader";

// export default function ProductsLayout({ children }: LayoutProps<"/">) {
//   return (
//     <RouteGuard mode="private">
//       <div className="flex grow flex-col bg-neutral-50 text-neutral-900">
//         <ProductsHeader />
//         <main className="grow">
//           <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
//         </main>
//       </div>
//     </RouteGuard>
//   );
// }
import { requireUser } from "@/features/auth/session";
import ProductsHeader from "@/features/products/components/ProductsHeader";

export const instant = false;

export default async function ProductsLayout({
  children,
}: LayoutProps<"/">) {
  await requireUser();

  return (
    <div className="flex grow flex-col bg-neutral-50 text-neutral-900">
      <ProductsHeader />
      <main className="grow">
        <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
      </main>
    </div>
  );
}