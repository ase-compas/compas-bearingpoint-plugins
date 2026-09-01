# Running Plugins in the Background — How CompAS/OpenSCD Works Today

## Overview

CompAS (built on OpenSCD) only knows **three kinds of plugins**: `menu`,
`editor`, and `validator`. There is no dedicated "background plugin" type.
However, **two of the three kinds — `menu` and `validator` — are already
permanently loaded into the page**, whether or not a user has opened them.
This document explains why that is, what plugins can already do with it, and
what would be needed to make "background plugin" an official, first-class
concept.

---

## TL;DR

`menu` and `validator` plugins are both kept alive in the page at all times
once switched on — not just while a user has them open. That means both
kinds are technically capable of running background logic today. `editor`
plugins are the exception: they only exist in the page while their tab is
the one currently selected. To make background plugins an official, clearly
supported feature, CompAS/OpenSCD would need a few small, deliberate
extensions.

---

## 1. The Three Plugin Kinds Today

| Kind | Purpose | Is it kept in the page? |
|------|---------|--------------------------|
| `menu` | Interactive tool opened from the app's menu | **Yes — always**, once active |
| `validator` | Passive rule checker | **Yes — always**, once active |
| `editor` | Interactive tool shown as a document tab | **No** — only while its tab is selected |

## 2. Why `menu` and `validator` Plugins Can Run in the Background

This is the key architectural insight:

> Every active `menu` or `validator` plugin is built into the page as soon as
> the app starts, in a container that is always present — **not just while a
> user has it open**. It sits there, quietly able to keep listening to the
> document.

Concretely:
1. When CompAS starts, it loads the code for every active `menu`/`validator`
   plugin and registers it as a custom HTML element (comparable to teaching
   the browser a new type of building block).
2. It then places one instance of that element into a permanent container
   in the page, regardless of whether a user has ever clicked on it.
3. Because that instance is *alive* in the page, it keeps receiving updates:
   every time the document is loaded, replaced, or edited, the app hands the
   plugin the new document and a running "edit counter."
4. On top of that:
   - Every `validator` plugin additionally gets its dedicated `validate()`
     function called automatically whenever the app runs its validation step.
   - A `menu` plugin's dedicated `run()` function, by contrast, is only
     called when a user explicitly clicks that menu entry.

`editor` plugins don't get this "always present" treatment. Only the single
editor tab a user currently has selected is placed in the page; all other
editor plugins simply don't exist in the page until selected, so they cannot
run in the background at all.

## 3. What This Means in Practice

Because a `menu` or `validator` plugin is always present once active, it can
add its own independent listeners for the app's signals and effectively
behave like a background service — regardless of whether users ever interact
with its visible UI (if any). Signals a plugin can listen for include:

- **A document was edited** — react immediately to every single change.
- **A document was opened or switched** — react the moment a user loads a
  new file.
- **Validation was triggered** — respond to manual or automatic validation
  runs, even without being registered as a `validator`.
- **Report progress** — plug into the app's global "loading…" indicator so
  long-running background work stays visible to users.
- **Write to the history/issues log** — surface findings or warnings in the
  same panel used for edit history.

The only structural difference between the two kinds is *how* their primary
action gets triggered: a `validator`'s `validate()` is called automatically;
a `menu` plugin's `run()` requires a user click. Both are equally capable of
adding their own background logic on top of that.

## 4. What Would Be Needed for a "Proper" Background Plugin Type

Today, background behavior is a side effect of how `menu`/`validator`
plugins happen to be mounted — it isn't an officially documented or
supported feature. To make it one, a dedicated plugin kind (e.g. `service`)
would need:

1. **A new plugin kind** added to the list of recognized kinds.
2. **The same "always mounted" treatment** `menu`/`validator` already get
   (no real change needed here — the existing mounting mechanism doesn't
   care about the specific kind).
3. **Plugin Manager UI support**, so users can register this new kind
   (currently the "add a plugin" screen only offers `editor`, `menu`, and
   `validator` as choices).
4. *(Optional)* **A dedicated heartbeat signal** (e.g. a periodic "tick" or
   "on idle" event), so background plugins have a natural trigger instead of
   only reacting to edits/opens/validation.

## 5. Summary

| Question | Answer |
|----------|--------|
| Is there an official "background plugin" type? | No |
| Which plugin kinds are always present in the page? | `menu` and `validator` — `editor` is not |
| Which plugin kinds can therefore run background logic? | `menu` and `validator` |
| What differs between `menu` and `validator`? | Only how their primary action is triggered (auto vs. click) — both can add their own background listeners |
| What would core need for a real background-plugin type? | A new plugin kind, UI support, and optionally a dedicated heartbeat signal |

The technical foundation for background plugins already exists today. What's
missing is making it an intentional, documented, and supported part of the
plugin system rather than an implementation detail.
