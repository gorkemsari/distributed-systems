# Authoring Pipeline

Pages are generated one EN/TR pair per scheduled run, on the `content-gen` branch.

| File | Purpose |
|---|---|
| `project-instruction.md` | Binding writing specification for every page |
| `examples/{en,tr}/` | Quality reference pages |
| `RUN.md` | Step-by-step procedure each scheduled run follows |
| `queue.md` | Generation order and status, built from the sidebar |
| `log.md` | One line per run |
| `check.py` | Validator: `python3 authoring/check.py <slug> --type <type> --depth <tier>` |
| `build_queue.py` | Rebuilds `queue.md` from `astro.config.mjs`, keeping statuses |

Operating it:

- Regenerate a page: set its row in `queue.md` back to `todo`. Rows are taken from the top.
- Depth: each run picks `standard` (3,000-4,500 words) or `deep` (4,500-7,000) per topic page and records it in the `Depth` column; `deep` pages carry a `Deep because:` justification in `log.md`. Review those justifications, and treat any split proposal in the log as a sidebar decision for you.
- Skip a page: set it to `done` (or move it lower by editing the file).
- After changing the sidebar: run `python3 authoring/build_queue.py` and commit.
- Change how runs behave: edit `RUN.md`; the scheduled task only points to it.
- Review: compare `content-gen` with `main` chapter by chapter and merge via pull request.
