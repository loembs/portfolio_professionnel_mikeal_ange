import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteNav } from "@/components/site-nav";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono-label text-muted-foreground">404</p>
        <h1 className="mt-6 font-display text-6xl">Lost in the dark.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The frame you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="font-mono-label border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
          >
            Back to index →
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Noir — Filmmaker & Director of Photography" },
      { name: "description", content: "A black and white portfolio of cinematic work. Short films, fashion films, music videos and documentary by Noir Studio." },
      { name: "author", content: "Noir Studio" },
      { property: "og:title", content: "Noir — Filmmaker & Director of Photography" },
      { property: "og:description", content: "A black and white portfolio of cinematic work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="grain">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteNav />
      <Outlet />
    </>
  );
}
