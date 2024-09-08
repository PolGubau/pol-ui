import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Download the UI</h2>
        </main>
      </div>

      <footer className="w-full border-t gap-4 border-t-secondary/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://ui.polgubau.com/"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Pol-ui
          </a>
        </p>
        |
        <p>
          Made by{" "}
          <a
            href="https://polgubau.com/"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Pol Gubau Amores
          </a>
        </p>
      </footer>
    </div>
  );
}
