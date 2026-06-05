'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, size = 'lg', ...props }, ref) => {
    const sizes = {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-7xl',
      xl: 'max-w-full',
    }

    return (
      <div
        ref={ref}
        className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'
