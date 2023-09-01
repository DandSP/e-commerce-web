import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image src="/assets/logo.png" alt="Logo X Side Games" width={220} height={40} />
    </Link>
  )
}

export default Logo;
