'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, dark = false, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
  'relative w-full px-4 sm:px-6 lg:px-8',
  dark ? 'bg-gray-900 text-white' : 'bg-white',
  className
)}
      {...props}
    >
      {children}
    </section>
  )
)

Section.displayName = 'Section'
