import type { Meta } from "@storybook/react"

import { CodeComparison } from "./CodeComparison"

export default {
  title: "Components/CodeComparison",
  component: CodeComparison,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="pt-8">
        <Story />
      </div>
    ),
  ],
} as Meta

const beforeCode = `import { NextRequest } from 'next/server';

export const middleware = async (req: NextRequest) => {
  let user = undefined;
  let team = undefined;
  const token = req.headers.get('token');

  if(req.nextUrl.pathname.startsWith('/auth')) {
    user = await getUserByToken(token);

    if(!user) {
      return NextResponse.redirect('/login');
    }
  }

  if(req.nextUrl.pathname.startsWith('/team')) {
    user = await getUserByToken(token);

    if(!user) {
      return NextResponse.redirect('/login');
    }

    const slug = req.nextUrl.query.slug;
    team = await getTeamBySlug(slug);

    if(!team) {
      return NextResponse.redirect('/');
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
};`

const afterCode = `import { createMiddleware, type MiddlewareFunctionProps } from '@app/(auth)/auth/_middleware';
import { auth } from '@app/(auth)/auth/_middleware';
import { team } from '@app/(team)/team/_middleware';

const middlewares = {
  '/auth{/:path?}': auth,
  '/team{/:slug?}': [ auth, team ],
};

export const middleware = createMiddleware(middlewares);

export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
};`

export function Default() {
  return (
    <CodeComparison
      sides={[
        {
          code: beforeCode,
          label: "Before",
          filename: "Middleware.js",
          language: "javascript",
        },
        {
          code: afterCode,
          label: "After",
          filename: "Middleware.ts",
          language: "typescript",
        },
      ]}
    />
  )
}
export function MoreSides() {
  return (
    <CodeComparison
      sides={[
        {
          code: beforeCode,
          label: "Before",
          filename: "Middleware.js",
          language: "javascript",
        },
        {
          code: afterCode,
          label: "After",
          filename: "Middleware.ts",
          language: "typescript",
        },
        {
          code: beforeCode,
          label: "",
          filename: "Button.tsx",
          language: "typescript",
        },
        {
          code: afterCode,
          label: "",
          filename: "Imagine its sql",
          language: "sql",
        },
      ]}
    />
  )
}
