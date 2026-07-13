"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";

const links = [
  { label: "GitHub", href: "https://github.com/oluwalonimioyepariola/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oluwalonimi-oyepariola-115343273/",
  },
  { label: "X", href: "https://x.com/oluwalonimi_oye" },
  { label: "Email", href: "mailto:oluwalonimioyepariola@gmail.com" },
];

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border border-line bg-tagbg px-1.5 py-0.5 font-sans text-[10px] text-soft">
      {children}
    </kbd>
  );
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    // Reveal once the "About" title has been scrolled past. Anchoring to
    // content instead of a vh threshold keeps the moment consistent across
    // devices, where viewport height varies wildly.
    const about = document.querySelector("#about h2");
    if (!about) {
      const onScroll = () => setRevealed(window.scrollY > 400);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    const observer = new IntersectionObserver(([entry]) => {
      setRevealed(
        !entry.isIntersecting && entry.boundingClientRect.bottom < 0
      );
    });
    observer.observe(about);
    return () => observer.disconnect();
  }, []);

  const revealClass = revealed
    ? "opacity-100"
    : "pointer-events-none translate-y-2 opacity-0";

  return (
    <>
      {/* Fixed footer hint (desktop) — revealed after scrolling past 100vh */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 hidden border-t border-line bg-white/90 py-2 text-center backdrop-blur transition-all duration-300 sm:block print:hidden ${revealClass}`}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-xs text-faint"
        >
          Press <Kbd>Cmd</Kbd> + <Kbd>K</Kbd> or <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>{" "}
          to open the command palette.
        </button>
      </div>

      {/* Floating button (mobile) — revealed after scrolling past 100vh */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className={`fixed bottom-4 right-4 z-40 rounded-full border border-line bg-white p-3 shadow-sm transition-all duration-300 sm:hidden print:hidden ${revealClass}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-soft"
          aria-hidden="true"
        >
          <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 sm:pt-32 print:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <div
            className="absolute inset-0 bg-ink/20"
            onClick={() => setOpen(false)}
          />
          <Command
            className="relative w-full max-w-md rounded-lg border border-line bg-white shadow-lg"
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
            }}
          >
            {/* text-base (16px) on mobile: iOS Safari auto-zooms the page when
                focusing an input with a font smaller than 16px. No autofocus on
                touch devices so the keyboard doesn't cover the actions. */}
            <Command.Input
              autoFocus={!isTouch}
              placeholder="Search command"
              className="w-full border-b border-line bg-transparent px-4 py-3 text-base text-ink outline-none placeholder:text-faint sm:text-sm"
            />
            <Command.List className="max-h-72 overflow-y-auto p-2">
              <Command.Empty className="px-3 py-6 text-center text-sm text-faint">
                No results found.
              </Command.Empty>
              <Command.Group
                heading="Actions"
                className="text-xs text-faint [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5"
              >
                <Command.Item
                  // Synchronous inside the tap gesture — mobile Safari drops
                  // window.print() after a setTimeout. The palette overlay has
                  // print:hidden, so it never shows up in the printout.
                  onSelect={() => {
                    setOpen(false);
                    window.print();
                  }}
                  className="cursor-pointer rounded px-2 py-2 text-sm text-soft data-[selected=true]:bg-tagbg data-[selected=true]:text-ink"
                >
                  Print
                </Command.Item>
                {links.map((l) => (
                  <Command.Item
                    key={l.label}
                    // Links must open synchronously inside the tap gesture:
                    // mobile Safari blocks window.open after a setTimeout.
                    onSelect={() => {
                      if (l.href.startsWith("mailto")) {
                        window.location.href = l.href;
                      } else {
                        window.open(l.href, "_blank", "noopener,noreferrer");
                      }
                      setOpen(false);
                    }}
                    className="cursor-pointer rounded px-2 py-2 text-sm text-soft data-[selected=true]:bg-tagbg data-[selected=true]:text-ink"
                  >
                    {l.label}
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
            <div className="flex flex-wrap items-center gap-3 border-t border-line px-4 py-2 text-[10px] text-faint">
              <span className="flex items-center gap-1">
                <Kbd>↩</Kbd> to select
              </span>
              <span className="flex items-center gap-1">
                <Kbd>↑</Kbd>
                <Kbd>↓</Kbd> to navigate
              </span>
              <span className="flex items-center gap-1">
                <Kbd>Esc</Kbd> to close
              </span>
            </div>
          </Command>
        </div>
      )}
    </>
  );
}
