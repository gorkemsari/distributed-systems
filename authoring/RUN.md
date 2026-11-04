# Scheduled Generation Run

This file is the complete procedure for one unattended generation run. Each run
produces exactly one EN/TR page pair, validates it, and pushes it to the
`content-gen` branch. Nobody is watching the run: never ask questions, never wait
for input, make the most reasonable decision and record it in the log.

## 1. Set up the workspace

1. Clone `gorkemsari/distributed-systems`. If the repository is not available in the
   session, attach it with push access first.
2. Check out `content-gen`. If it does not exist on the remote, create it from `main`
   and push it.
3. Pull the latest `content-gen` so the run starts from the newest queue.

## 2. Pick the work item

1. Open `authoring/queue.md` and take the first row whose status is `todo`.
2. If there is no `todo` row, append `- <date> queue empty, nothing to do` to
   `authoring/log.md`, commit, push, and stop.
3. Note the row's `Type` (`topic`, `chapter-overview`, `part-overview`), `Slug`, and
   `Title`. Find the row's part and chapter in the sidebar of `astro.config.mjs`.

## 3. Load the rules and the context

1. Read `authoring/project-instruction.md` in full. It is the binding specification.
2. Read both files in `authoring/examples/` (EN and TR).
3. Read the sidebar in `astro.config.mjs`: it defines every valid slug, the canonical
   owner of every topic, and the Turkish terminology (`translations.tr`).
4. Gather the context the page needs, without copying from it:
   - Topic page: list the other topics in the same chapter and the topics the page
     will likely link to. For any of them that already has status `done`, read its EN
     page so this page links to it instead of re-explaining it, and stays consistent
     with what it says. Do not read pages whose status is `todo`; they are stale.
   - Chapter Overview: read the EN pages of every topic in the chapter (all are `done`
     by construction of the queue order).
   - Part Overview: read the EN Chapter Overviews of the part.
5. The previous version of the page, if any, was written under an older specification.
   Do not use it as a source or a model. Write the page from scratch.

## 4. Verify before writing

For facts that are version-dependent, recent, or that you are not certain of
(config keys, defaults, release behavior, incident details, paper titles, years),
check them with web search before using them. If a fact cannot be confirmed, omit it
or phrase it as uncertain. Never invent numbers, incidents, config keys, or citations.
Label every illustrative number as illustrative.

## 5. Choose the depth tier, then write the pages

1. Topic pages only: before writing, outline what the page must contain to satisfy the
   depth standard (mechanism steps, correctness argument, worked example, real-system
   variants, failure modes, decision guidance). From that outline, choose the tier as
   defined in section 2.1 of the instruction: `standard` (3,000-4,500 EN prose words) or
   `deep` (4,500-7,000). Decide from the content, not from how famous the topic is.
   Overview pages have no tier.
2. Write the complete English page, then the Turkish page, exactly as the instruction
   specifies. `lastUpdated` is today's date in `yyyy-mm-dd`, unquoted.
3. If the finished English page falls outside its tier, re-decide honestly. A page that
   needs 5,000 words to reach professional depth becomes `deep`; it is never cut down to
   4,500. A page that reached 5,000 through repetition or framing is trimmed in the order
   the instruction gives, never by removing mechanism, correctness, the worked example,
   failure modes, decision guidance, or warning asides. Above 7,000, refocus on the
   page's own topic and record a split proposal in the log.
4. Paths: if a file for the slug exists at `<slug>.mdx` or `<slug>/index.mdx` under
   `src/content/docs/{en,tr}/`, overwrite that exact path. Otherwise topics go to
   `<slug>.mdx` and overviews go to `<slug>/index.mdx`.
5. Remove any `sidebar:` block from the frontmatter; navigation is defined in
   `astro.config.mjs`.

## 6. Validate and self-review

1. Run `python3 authoring/check.py <slug> --type <type> --depth <tier>` from the
   repository root (`--depth` only for topic pages).
2. Build the site: `pnpm install --frozen-lockfile` (install pnpm with `npm i -g pnpm`
   if it is missing), then `pnpm build`. A failed build is an error, the same as a
   `check.py` error: read the build log, find the page that broke, and fix it.
   `astro build` compiles MDX but does not render Mermaid, so keep diagram syntax
   conservative: quote labels with special characters and use only syntax shown in
   the instruction and examples.
3. Fix every `ERROR` and re-run until it prints `PASS`. Read every `WARN` and fix it
   when it points at a real problem (for example a low TR/EN word ratio usually means
   the translation dropped content).
4. Then review the English page against the pre-delivery self-check and the depth
   standard in the instruction, and fix what falls short. For a `deep` page, also run
   the padding check from section 2.1: every section adds new information, no paragraph
   restates another, and no adjacent topic is re-explained instead of linked. If it
   fails, the page is `standard` with filler: remove the filler and re-classify. Check the Turkish page for
   natural phrasing, terminology that matches the sidebar, and nothing omitted.
5. If after three fix rounds `check.py` or the build still fails, do not commit the pages. Set the
   queue row to `failed` with a one-line reason in `Note`, log it, commit the queue and
   log only, push, and stop.

## 7. Record and push

1. In `authoring/queue.md`, set the row's status to `done`, set `Depth` to the chosen
   tier (`standard` or `deep`; `-` for overviews), and put `<date>, <EN words> words`
   in `Note`. Re-run
   `python3 authoring/build_queue.py astro.config.mjs authoring/queue.md` to refresh
   the progress line (it preserves statuses).
2. Append one line to `authoring/log.md`:
   `- <date> <time> <slug>: done, <tier>, EN <n> words, <diagrams> diagrams` plus any
   decision worth knowing (an omitted unverifiable fact, a scope choice).
   For a `deep` page, add `Deep because:` and one or two sentences naming which parts of
   the depth standard needed the room (for example: three-phase protocol with separate
   correctness arguments, four production implementations with different failure
   behavior). For a page above 6,000 words or one that hit 7,000, add the split proposal
   or state why the topic cannot be split.
3. Commit only the two page files, `authoring/queue.md`, and `authoring/log.md`, with
   the message `docs(<slug>): generate EN/TR`.
4. Push to `content-gen`. If the push is rejected because the branch moved, pull with
   rebase and push again. Never force-push, never push to `main`.

## Boundaries

- One page pair per run. Do not continue to the next row.
- Never edit `astro.config.mjs`, the instruction, the examples, the scripts, or any
  page other than the one being generated.
- Never merge into `main` and never open pull requests; the owner reviews and merges.
- Finish with a two-line summary: the slug and result, and anything the owner should
  look at when reviewing.
