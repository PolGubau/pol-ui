import { readFileSync, readdirSync } from "fs"
import path from "path"
import { ComponentType, FC } from "react"
import dynamic from "next/dynamic"

import ComponentPreview from "@/components/component-preview/ComponentPreview"
import Header from "@/components/header/header"
import StoryPreview from "@/components/string-preview"
import RenderFromString from "@/components/string-preview"

type UIComponent = {
  /**
   * hand entered name of the component
   */
  name: string
  /**
   * The name of the component as the file name
   */
  shortcut: string
  description: string
  component: string
  path: string
  reactComponent: React.ComponentType<{}>
  storybook: {
    code?: string
    url?: string
    allHistoryNames?: string[]
  }
}
const BASE_PATH = path.join("../../packages/ui/src")
const COMPONENTS_PATH = path.join(BASE_PATH, "components")

const getFiles = (url: string) => {
  return readdirSync(url)
}
const getStorybookFromComponent = (
  component: string
): UIComponent["storybook"] => {
  const url = path.join(COMPONENTS_PATH, component, `${component}.stories.tsx`)
  const code = readFileSync(
    path.join(COMPONENTS_PATH, component, `${component}.stories.tsx`),
    "utf-8"
  )

  // get all not default exports from the storybook
  const allHistoryNames = code.match(/export const (.*) =/g)?.map((name) => {
    const n = name.match(/export const (.*) =/)?.[1]

    return n ?? ""
  })

  return {
    code,
    url,
    allHistoryNames,
  }
}

const getFirstExportFromStorybook = (storybookUrl: string) => {
  const storybook = readFileSync(storybookUrl, "utf-8")
  const firstExport = storybook.match(/export default {(.*)}/)?.[1]
  return firstExport
}

export default async function Index() {
  const folders = getFiles(BASE_PATH)

  const exclude = ["types.ts", "index.ts", "types.tsx", "PoluiProvider"]
  const allComponents = getFiles(COMPONENTS_PATH).filter(
    (component) =>
      component != component.toLowerCase() && !exclude.includes(component)
  )

  const getOneComponent = (componentName: string) => {
    return readFileSync(
      path.join(COMPONENTS_PATH, componentName, `${componentName}.tsx`),
      "utf-8"
    )
  }
  const getAllComponents = (): UIComponent[] => {
    return allComponents.map((componentName) => {
      const component = getOneComponent(componentName)
      const name = component.match(/@name (.*)/)?.[1]!
      const shortcut = componentName
      const description = component.match(/@description (.*)/)?.[1]!
      const dir = `@/components/ui/${componentName}/${componentName}`
      const reactComponent = dynamic(
        () => import(`@/components/ui/${componentName}/example`),
        {
          loading: () => (
            <div className="grid h-full min-h-[400px] place-items-center">
              Loading...
            </div>
          ),
          ssr: false,
        }
      )

      const storybook = getStorybookFromComponent(componentName)

      return {
        name,
        description,
        component,
        path: dir,
        reactComponent,
        shortcut,
        storybook,
      }
    })
  }
  const components = getAllComponents()
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <section
        id="hero"
        className="min-h-[700px] w-screen flex flex-col md:pt-36"
      >
        <Header />
        <article className="flex flex-col gap-36 py-48 justify-center w-full items-center">
          {components.map((component, idx) => {
            return (
              <div
                key={idx}
                className="w-full flex flex-col gap-4 items-center"
              >
                <RenderFromString code={component.component} props={{}} />
                <ComponentPreview
                  title={component.name || component.shortcut}
                  description={component.description}
                  reactComponent={dynamic(
                    () =>
                      import(
                        getFirstExportFromStorybook(component.shortcut) ?? ""
                      ),
                    {
                      loading: () => (
                        <div className="grid h-full min-h-[400px] place-items-center">
                          Loading...
                        </div>
                      ),
                      ssr: false,
                    }
                  )}
                />
              </div>
            )
          })}
        </article>
      </section>
    </div>
  )
}
