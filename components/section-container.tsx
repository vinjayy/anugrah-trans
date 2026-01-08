import { cn } from "@/lib/utils"

export function SectionContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 md:px-6", className)}>
      {children}
    </div>
  )
}
