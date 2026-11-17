"use client";

import { useState } from "react";
import { AnimatePresence, EASE_EDITORIAL, motion } from "@/components/motion";
import { SITE } from "@/lib/site";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqGroup = {
  id: string;
  title: string;
  items: FaqItem[];
};

export function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  const [query, setQuery] = useState("");
  const [openByGroup, setOpenByGroup] = useState<Record<string, string | null>>(
    {}
  );

  const normalizedQuery = query.trim().toLowerCase();

  const filteredGroups = groups
    .map((group) => ({
      ...group,
      items: normalizedQuery
        ? group.items.filter(
            (item) =>
              item.question.toLowerCase().includes(normalizedQuery) ||
              item.answer.toLowerCase().includes(normalizedQuery)
          )
        : group.items,
    }))
    .filter((group) => group.items.length > 0);

  const firstMatchId =
    normalizedQuery && filteredGroups.length > 0
      ? filteredGroups[0].items[0]?.id ?? null
      : null;

  const isItemOpen = (groupId: string, itemId: string) => {
    const explicit = openByGroup[groupId];
    if (explicit !== undefined) {
      return explicit === itemId;
    }
    return normalizedQuery !== "" && itemId === firstMatchId;
  };

  const toggleItem = (groupId: string, itemId: string) => {
    setOpenByGroup((prev) => {
      const currentlyOpen =
        prev[groupId] !== undefined
          ? prev[groupId] === itemId
          : normalizedQuery !== "" && itemId === firstMatchId;

      return {
        ...prev,
        [groupId]: currentlyOpen ? null : itemId,
      };
    });
  };

  return (
    <div>
      {/* Search & Category Navigation */}
      <div className="flex flex-col gap-6 border-y border-maroon/14 py-6 md:flex-row md:items-center md:justify-between">
        <nav
          aria-label="FAQ categories"
          className="flex gap-5 overflow-x-auto pb-1 text-sm font-medium md:pb-0"
        >
          {groups.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="shrink-0 text-charcoal/80 underline decoration-maroon/25 underline-offset-8 transition-colors hover:text-maroon hover:decoration-maroon"
            >
              {group.title}
            </a>
          ))}
        </nav>

        <div className="relative w-full md:max-w-xs">
          <label htmlFor="faq-search" className="sr-only">
            Search FAQs
          </label>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpenByGroup({});
            }}
            placeholder="Search questions..."
            className="w-full border border-maroon/22 bg-ivory px-4 py-2.5 text-sm text-charcoal placeholder:text-muted/70 focus:border-maroon focus:outline-none"
          />
        </div>
      </div>

      {/* Question Groups */}
      {filteredGroups.length === 0 ? (
        <div className="py-14">
          <p className="font-serif text-2xl text-maroon">
            No answer found for that search. Try a different word, or contact
            our store.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setOpenByGroup({});
            }}
            className="mt-4 text-sm font-medium text-maroon underline underline-offset-4 hover:text-accent"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="mt-12 space-y-14">
          {filteredGroups.map((group) => (
            <section
              key={group.id}
              id={group.id}
              className="scroll-mt-28"
              aria-labelledby={`${group.id}-heading`}
            >
              <h2
                id={`${group.id}-heading`}
                className="font-serif text-2xl font-semibold text-maroon sm:text-3xl"
              >
                {group.title}
              </h2>

              <div className="mt-5 space-y-3">
                {group.items.map((item) => {
                  const open = isItemOpen(group.id, item.id);
                  const panelId = `${item.id}-panel`;
                  const buttonId = `${item.id}-button`;

                  return (
                    <div
                      key={item.id}
                      className="border border-maroon/14 bg-mist/60 transition-colors hover:border-maroon/28"
                    >
                      <h3>
                        <button
                          id={buttonId}
                          type="button"
                          aria-expanded={open}
                          aria-controls={panelId}
                          onClick={() => toggleItem(group.id, item.id)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-charcoal focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-maroon sm:px-6 sm:py-5"
                        >
                          <span>{item.question}</span>
                          <motion.span
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ duration: 0.25, ease: EASE_EDITORIAL }}
                            className="shrink-0 text-maroon"
                            aria-hidden="true"
                          >
                            <svg
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.75"
                              className="h-5 w-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 7.5L10 12.5L15 7.5"
                              />
                            </svg>
                          </motion.span>
                        </button>
                      </h3>

                      <AnimatePresence initial={false}>
                        {open ? (
                          <motion.div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: EASE_EDITORIAL }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-maroon/10 px-5 py-4 text-sm leading-relaxed text-muted sm:px-6 sm:py-5 sm:text-base">
                              {item.answer}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Still need help */}
      <div className="mt-16 border-t border-maroon/15 pt-12">
        <h2 className="font-serif text-3xl font-semibold text-maroon">
          Still need help?
        </h2>
        <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
          Speak directly with our Virugambakkam team on phone or WhatsApp at{" "}
          {SITE.phoneRaw}.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-maroon px-6 py-3.5 text-sm font-medium tracking-wide text-ivory transition-colors hover:bg-accent"
          >
            Chat on WhatsApp
          </a>
          <a
            href={SITE.telHref}
            className="inline-flex items-center justify-center border border-maroon/35 px-6 py-3.5 text-sm font-medium tracking-wide text-maroon transition-colors hover:border-maroon hover:bg-mist"
          >
            Call {SITE.phoneRaw}
          </a>
        </div>
      </div>
    </div>
  );
}
