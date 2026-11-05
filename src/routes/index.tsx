import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Copy, Download, Search } from "lucide-react";
import { ARCHIVE_BYTES, PLACES, formatBytes, type PlaceExt } from "@/data/places";

export const Route = createFileRoute("/")({ component: Home });

type Filter = "all" | PlaceExt;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Tümü" },
  { id: "rbxl", label: "Yer .rbxl" },
  { id: "rbxm", label: "Model .rbxm" },
];

function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const files = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PLACES.filter((file) => {
      if (filter !== "all" && file.ext !== filter) return false;
      if (!q) return true;
      return (
        file.name.toLowerCase().includes(q) ||
        file.kind.toLowerCase().includes(q) ||
        file.ext.includes(q)
      );
    });
  }, [query, filter]);

  async function copyLink(id: string, href: string) {
    const absolute = new URL(href, window.location.href).toString();
    try {
      await navigator.clipboard.writeText(absolute);
    } catch {
      const input = document.createElement("input");
      input.value = absolute;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopiedId(id);
    window.setTimeout(() => {
      setCopiedId((current) => (current === id ? null : current));
    }, 1600);
  }

  return (
    <div className="min-h-screen w-full bg-background font-sans text-foreground selection:bg-primary/30">
      <div className="vertex-grid" aria-hidden="true" />
      <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-border/50 bg-background/80 px-6 py-4 backdrop-blur-md">
        <a href="#dosyalar" className="flex items-center gap-3">
          <img src="/vertex-logo.png" alt="" className="size-8 object-contain mix-blend-screen" />
          <span className="text-xl font-bold tracking-tight">Vertex Hub</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#dosyalar" className="text-sm font-medium text-muted transition-colors hover:text-foreground">
            Dosyalar
          </a>
          <a href="#acilis" className="text-sm font-medium text-muted transition-colors hover:text-foreground">
            Nasıl açılır
          </a>
        </div>
        <a
          href="#dosyalar"
          className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-on-primary"
        >
          İndir
        </a>
      </nav>

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 pb-24 sm:px-6">
        <div className="mb-16 flex max-w-3xl flex-col items-center text-center">
          <img
            src="/vertex-logo.png"
            alt=""
            className="mb-8 size-32 object-contain mix-blend-screen"
          />
          <h1 className="mb-6 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Vertex Hub
          </h1>
          <p className="mb-4 max-w-2xl text-lg text-muted sm:text-xl">
            Uygulama değil. Roblox yer ve model dosyaları. İndir, Studio'da aç.
          </p>
          <p className="mb-10 font-mono text-sm text-foreground">
            {PLACES.length} dosya · {formatBytes(ARCHIVE_BYTES)}
          </p>
          <a
            href="#dosyalar"
            className="inline-flex h-12 items-center rounded-lg bg-primary px-8 text-lg font-semibold text-on-primary"
          >
            Dosyalara git
          </a>
        </div>

        <section id="dosyalar" className="mb-20 w-full max-w-5xl scroll-mt-24">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Dosyalar</h2>
            <p className="text-muted">Verdiğin .rbxl ve .rbxm dosyaları.</p>
          </div>

          <div className="mx-auto mb-4 flex max-w-xl items-center gap-2 rounded-xl border border-border/50 bg-card/50 px-4">
            <Search className="size-4 shrink-0 text-muted" aria-hidden="true" />
            <label className="sr-only" htmlFor="file-search">
              Dosya ara
            </label>
            <input
              id="file-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ada göre ara"
              suppressHydrationWarning
              className="h-12 w-full bg-transparent text-foreground outline-none placeholder:text-muted"
            />
          </div>

          <div className="mb-6 flex flex-wrap justify-center gap-2" role="group" aria-label="Dosya türü">
            {FILTERS.map((item) => {
              const active = filter === item.id;
              const count =
                item.id === "all"
                  ? PLACES.length
                  : PLACES.filter((file) => file.ext === item.id).length;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(item.id)}
                  className={
                    active
                      ? "h-11 rounded-lg bg-primary px-4 text-sm font-semibold text-on-primary"
                      : "h-11 rounded-lg border border-border/50 bg-card/50 px-4 text-sm font-medium text-foreground"
                  }
                >
                  {item.label}
                  <span className="ml-2 font-mono">{count}</span>
                </button>
              );
            })}
          </div>

          {files.length === 0 ? (
            <p className="rounded-xl border border-border/50 bg-card/50 px-4 py-10 text-center text-muted">
              Bu aramaya uyan dosya yok.
            </p>
          ) : (
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {files.map((file) => {
                const href = `/files/${file.file}`;
                return (
                  <li
                    key={file.id}
                    className="flex flex-col gap-4 rounded-xl border border-border/50 bg-card/50 p-6 transition-colors hover:border-border hover:bg-card"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-lg font-semibold">{file.name}</h3>
                        <p className="mt-1 font-mono text-sm text-muted">
                          .{file.ext} · {file.kind} · {formatBytes(file.bytes)}
                        </p>
                      </div>
                      <span className="rounded-lg border border-border/50 bg-background px-2 py-1 font-mono text-xs text-accent">
                        {file.ext.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">{file.note}</p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      <a
                        href={href}
                        download={file.downloadName}
                        className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-on-primary"
                      >
                        <Download className="size-4" aria-hidden="true" />
                        İndir
                      </a>
                      <button
                        type="button"
                        onClick={() => copyLink(file.id, href)}
                        className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-transparent px-4 text-sm font-semibold text-foreground hover:bg-card"
                      >
                        <Copy className="size-4" aria-hidden="true" />
                        {copiedId === file.id ? "Kopyalandı" : "Bağlantı"}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        <section id="acilis" className="w-full max-w-5xl scroll-mt-24">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Nasıl açılır</h2>
            <p className="text-muted">Studio'da iki farklı dosya türü.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-border/50 bg-card/50 p-6">
              <p className="font-mono text-xs text-accent">.RBXL</p>
              <h3 className="mt-3 text-lg font-semibold">Yer dosyası</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Roblox Studio → Dosya → Dosyadan aç. Harita ve ACS yerleri bu şekilde açılır.
              </p>
            </article>
            <article className="rounded-xl border border-border/50 bg-card/50 p-6">
              <p className="font-mono text-xs text-accent">.RBXM</p>
              <h3 className="mt-3 text-lg font-semibold">Model</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Bir yer açıkken dosyayı Explorer paneline sürükle. nuycs ACS v2 bir modeldir.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border/50 py-12 text-center text-sm text-muted">
        <p>© {new Date().getFullYear()} Vertex Hub. Yer dosyaları.</p>
      </footer>
    </div>
  );
}
