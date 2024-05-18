import Link from "next/link"

import { Icons } from "@/components/icons"

export function Logo() {
  return (
    <div className="  ml-4 flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-20 w-36 fill-black dark:fill-white xl:h-24 xl:w-24 2xl:h-36 2xl:w-36" />
      </Link>
    </div>
  )
}
