import { PropsWithChildren } from "react"

import ComponentFrame from "./ComponentFrame"

export interface ComponentPreviewProps {
  title: string
  description: string
  reactComponent: React.ComponentType<{}>
}
const ComponentPreview = ({
  title,
  description,
  reactComponent: Component,
}: ComponentPreviewProps) => {
  return (
    <article className="border-secondary-2 rounded-3xl w-full px-10 p-4 grid lg:grid-cols-[1fr,3fr] max-w-[1400px] gap-20 ">
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-xl">{title}</h2>
        <p>{description}</p>
      </div>

      <div className="flex h-[400px] w-full items-center justify-center rounded-lg border border-secondary-800/50 dark:border-dark-border md:h-[640px] md:flex-1 overflow-hidden">
        <ComponentFrame>
          <Component />
        </ComponentFrame>
      </div>
    </article>
  )
}

export default ComponentPreview
