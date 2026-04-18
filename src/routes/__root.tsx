import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <SiteNav />
      <Outlet />
    </>
  );
}
