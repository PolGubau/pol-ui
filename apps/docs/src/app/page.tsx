"use server"

import fs from "fs"
import path from "path"
import React from "react"
import { Metadata } from "next"
import dynamic from "next/dynamic"

const rootDir = process.cwd()
const polUiDir = path.join(rootDir, "../../packages/ui/src")
const componentsUrl = path.join(polUiDir, "components")

// Function to fetch component data server-side
async function getComponentData(componentName: string) {
  const componentDirUrl = path.join(componentsUrl, componentName)

  const componentUrl = path.join(componentDirUrl, `${componentName}.tsx`)
  const storybookUrl = path.join(
    componentDirUrl,
    `${componentName}.stories.tsx`
  )

  const componentCode = fs.existsSync(componentUrl)
    ? fs.readFileSync(componentUrl, "utf8")
    : ""
  const storybookCode = fs.existsSync(storybookUrl)
    ? fs.readFileSync(storybookUrl, "utf8")
    : ""

  return {
    name: componentName,
    component: {
      url: componentUrl,
      code: componentCode,
    },
    storybook: {
      url: storybookUrl,
      code: storybookCode,
    },
  }
}

// Function to get metadata (optional)
export async function generateMetadata({
  params,
}: {
  params: { componentName: string }
}): Promise<Metadata> {
  return {
    title: `${params.componentName} Documentation`,
  }
}

// Page component
export default async function ComponentPage({
  params,
}: {
  params: { componentName: string }
}) {
  const { componentName } = params
  const componentData = await getComponentData(componentName)

  const DynamicComponent = dynamic(() => import(componentData.component.url), {
    loading: () => (
      <div className="grid h-full min-h-[400px] place-items-center">
        Loading...
      </div>
    ),
    ssr: false,
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div key={componentData.name} className="grid grid-cols-2 gap-4">
        <h2 className="text-xl">{componentData.name}</h2>
        <pre>{componentData.component.url}</pre>
        <pre>{componentData.storybook.url}</pre>
        <div className="bg-blue-100 w-96 h-48">
          <DynamicComponent />
        </div>
      </div>
    </main>
  )
}
