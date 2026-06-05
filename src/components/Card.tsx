'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl bg-white border border-gray-100 p-6 shadow-sm',
        hover && 'transition-all duration-300 hover:shadow-lg hover:border-green-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)

Card.displayName = 'Card'
