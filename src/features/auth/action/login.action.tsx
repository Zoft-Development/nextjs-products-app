"use server";

import { cookies } from "next/headers";
import { loginSchema } from "../schemas/login.schema";

type LoginActionState = { success: true } | { success: false; error: string };

export default async function loginAction(
  values: unknown,
): Promise<LoginActionState> {
  const parsed = loginSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      error: "Please enter valid email and password.",
    };
  }

  const { email, password } = parsed.data;

  const isValidUser = email === "sreekanth@gmail.com" && password === "123123123";

  if (!isValidUser) {
    return { success: false, error: "Invalid email or password." };
  }

  const cookiestore = await cookies();

  cookiestore.set({
    name: "ecom-auth",
    value: "123123123",
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return { success: true };
}