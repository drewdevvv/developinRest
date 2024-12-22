import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative w-[120px] h-[80px]">
        <Image
          src="/logo.svg"
          alt="develop in Rest logo"
          fill
          className="object-contain"
          priority
          sizes="120px"
        />
      </div>
    </Link>
  )
}

