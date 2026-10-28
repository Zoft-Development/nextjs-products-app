"use client";

import { useCartCount } from "@/stores/cart.hooks";
import Link from "next/link";
import { logoutAction } from "@/features/auth/action/logout.action";
import { Button } from "@/components/ui";


export default function ProductsHeader() {
  const cartCount = useCartCount();

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/products" className="text-xl font-semibold tracking-tight">
          MyApp
        </Link>
        <Link
          href="/cart"
          aria-label={`Cart with ${cartCount} items`}
          className="relative rounded-md p-2 hover:bg-neutral-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
          <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#29292f] px-1 text-xs text-white">
            {cartCount}
          </span>
        </Link>
        <Button
    onClick={async () => await logoutAction()}
    className="rounded-md px-3 py-1.5 text-sm text-white"
  >
    Logout
  </Button>
      </div>
    </header>
  );
}
