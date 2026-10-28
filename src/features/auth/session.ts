import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getSession() {
  const token = (await cookies()).get("ecom-auth")?.value;
  if (token !== "123123123") return null;
  return { userId: "student" };
}

export async function requireUser() {
  const session = await getSession();
  if (!session) redirect("/login");
  return session;
}