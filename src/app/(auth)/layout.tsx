// import RouteGuard from "@/components/RouteGuard";

// export default function AuthLayout({ children }: LayoutProps<"/">) {
//   return (
//     <RouteGuard mode="public">
//       <main className="grow flex flex-col">
//         <div className="grid grid-cols-2 grow">
//           <section className="bg-red-500 h-full grid place-items-center">
//             <div>
//               <h1 className="text-center text-5xl">Move fast when you</h1>
//               <h1 className="text-center text-5xl">break things</h1>
//             </div>
//           </section>
//           <section className="h-full grid place-items-center bg-white text-neutral-900">
//             {children}
//           </section>
//         </div>
//       </main>
//     </RouteGuard>
//   );
// }
import { getSession } from "@/features/auth/session";
import { redirect } from "next/navigation";

export const instant = false;

export default async function AuthLayout({ children }: LayoutProps<"/">) {
  const session = await getSession();
  if (session) redirect("/products");

  return (
    <main className="grow flex flex-col">
      <div className="grid grid-cols-2 grow">
        <section className="bg-red-500 h-full grid place-items-center">
          <div>
            <h1 className="text-center text-5xl">Move fast when you</h1>
            <h1 className="text-center text-5xl">break things</h1>
          </div>
        </section>
        <section className="h-full grid place-items-center bg-white text-neutral-900">
          {children}
        </section>
      </div>
    </main>
  );
}