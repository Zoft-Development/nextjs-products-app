"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "../schemas/login.schema";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { useState } from "react";
import loginAction from "../action/login.action";


export default function LoginForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    console.log(values);
    // if (
    //   values.email === "sreekanth@gmail.com" &&
    //   values.password === "123123123"
    // ) {
    //   localStorage.setItem("isAuth", "true");
    //   router.replace("/products");
    // }
    const result = await loginAction(values);
    if (!result.success) {
      setServerError(result.error);
      return;
    }
    router.replace("/products");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-5"
      noValidate
    >
      {serverError && (
        <p className="text-sm text-red-600">{serverError}</p>
      )}
      <div>
        <h2 className="text-3xl font-medium">Sign in</h2>
        <p className="mt-1 text-sm text-neutral-500">
          Enter your email and password to continue.
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="rounded-md border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-800"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          className="rounded-md border border-neutral-300 px-3 py-2 outline-none focus:border-neutral-800"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        loading={isSubmitting}
        className="justify-center rounded-md px-4 py-2 text-white"
      >
        Sign in
      </Button>
    </form>
  );
}
