'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export const ResponsiveImage = ({
  src,
  alt,
  width = 600,
  height = 400,
  className,
  priority = false,
}: ResponsiveImageProps) => {
  return (
    <div className={cn('relative w-full overflow-hidden rounded-2xl', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </div>
  )
}
