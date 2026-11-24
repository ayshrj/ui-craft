---
name: premium-ui-ux
description: Design, audit, build, or refine premium-feeling interfaces with precise microinteractions, hover intent, safe polygon submenus, visual hierarchy, animation, keyboard and touch behavior, focus management, loading, reliability, and accessibility. Use for UI/UX polish, frontend implementation, design-system reviews, command palettes, menus, dialogs, forms, data-heavy apps, creative editors, responsive layouts, or games. Not for unrelated backend-only tasks.
---

# Premium UI/UX Craft

Improve an interface's *observable behavior*, not merely its appearance. Treat speed, predictability, stable layout, recoverability, accessible input, and visual consistency as part of the design.

This skill is **actionable guidance for design review and implementation**, not an instruction to gratuitously animate or redesign every component.

## Canonical reference

- Read [the complete Premium UI/UX Craft Playbook](references/premium-ui-ux-craft-playbook.md) **selectively**, using the topic map below.
- The source document is preserved in the repository root as `premium_ui_ux_craft_playbook.md` for maintainers. The bundled reference intentionally contains the **same full text**, making this skill self-contained if copied to another repository.
- Treat timings, sizes, easing curves, and scoring weights in the playbook as **heuristics**, not universal platform standards. Follow explicit accessibility requirements and product constraints instead.
- Prefer platform-native behavior over custom gesture or focus machinery when native behavior already satisfies the contract.

## When to activate

Use this skill when the user asks to:

- Make a screen, component, web app, mobile app, editor, or game feel **premium, polished, elegant, responsive, delightful, smooth, or professional**.
- Audit screenshots, code, interaction flows, or a running interface for design quality and usability defects.
- Implement menus, nested flyouts, command palettes, autocomplete, dialogs, popovers, sliders, drag/drop, canvas tools, toasts, autosave, undo, loading states, or meaningful motion.
- Resolve awkward hover movement, diagonal submenu crossing, premature dismissals, focus loss, keyboard navigation defects, gesture conflicts, jitter, layout shifts, or perceived slowness.
- Build or refine a design system, frontend interaction specification, or UI acceptance checklist.

Do not invoke solely because a task mentions "React", "CSS", or "UI" incidentally. Stay on the user's requested scope.

## Operating workflow

### 1. Understand before changing

1. Inspect the actual screen, source code, and user journey available. Distinguish observed problems from hypotheses.
2. Read repository rules (including `AGENTS.md` if present), existing components, design tokens, accessibility patterns, and tests.
3. Identify primary user task, input modes (mouse, trackpad, keyboard, touch, pen, assistive tech), viewport ranges, platform conventions, performance constraints, and async/failure cases.
4. Preserve established product architecture and user-specified constraints. Avoid introducing a dependency, gesture, or animation system without a clear benefit.
5. Select the relevant playbook sections rather than loading the whole reference by default.

### 2. Pick the right mode

**Audit/review mode**

- State what is visibly or reproducibly wrong; distinguish confirmed defects from potential issues.
- Organize findings by affected component/flow; describe **trigger → expected → actual → consequence → fix**.
- Prioritize: **P0** data loss, security, blocked task, severe access barrier; **P1** wrong actions, focus traps, unreliable gestures, major responsiveness; **P2** confusion, inconsistency, weak feedback; **P3** optional aesthetic finishing.
- Include concrete suggestions with interaction rules and measurable acceptance tests. Do not invent testing outcomes or runtime behavior.
- Evaluate normal, loading, empty, error, success, disabled, touch, keyboard, reduced-motion, and narrow-viewport states.

**Design/spec mode**

- Explain the user intent and target experience.
- Specify **component anatomy, states, transitions, pointer behavior, keyboard behavior, touch behavior, focus placement/return, async outcomes, responsive behavior, accessibility, and tests**.
- Where appropriate, provide a compact state diagram or transition table. No decorative animation without functional purpose.

**Implementation mode**

- Apply the smallest coherent set of changes in the user's codebase.
- Reuse tokens, existing component primitives, and platform APIs; keep focus and event ownership explicit.
- Add or update representative unit/integration/e2e tests where the toolchain permits.
- Run the available formatting, typecheck, lint, and tests when feasible; report what was actually executed.
- Review edge cases and regressions before declaring the work complete.

### 3. Apply the craft hierarchy

Prioritize improvements in this order unless user intent or severity says otherwise:

1. **Correctness and trust:** no unexpected actions, lost work, misleading save states, broken retry, focus traps, or silent errors.
2. **Interaction intention:** accurate pointer paths, predictable dismissal, proper keyboard/touch semantics, meaningful undo, reversible interactions.
3. **Usability and speed:** stable geometry, quick feedback, robust loading, good content hierarchy, responsive layouts.
4. **Visual coherence:** typography, spacing, density, alignment, color roles, borders, icons, hierarchy, dark mode.
5. **Purposeful motion:** causality, interruption, subtle transitions, consistent easing, reduced motion.
6. **Finishing passes:** optical alignment, edge cases, skeleton details, high-DPI and zoom testing, precise copy.

Do not mask functional defects with visual treatments.

## Topic map into the reference

| For this problem | Read these playbook sections |
| --- | --- |
| Layout, typography, tokens, color, icons | Parts I–II; §§5–8 and §72 |
| Safe triangles, pointer corridors, hover intent | Part III; §§9.1–9.6, §74, Recipe A |
| Buttons, controls, selected/disabled/focus states | Part IV; §§10–14 |
| Dropdowns, nested menus, command palette, context menus | Part V; §§15–18 |
| Modal, popover, hovercard, sheet, toast | Part VI; §§19–22 |
| Forms, input composition, validation, autosave, undo | Part VII; §§23–29 |
| Search, filtering, sorting, tables, dashboards | Part VIII; §§30–33 |
| Scroll, gesture arbitration, drag and drop, canvas | Part IX; §§34–37 |
| Animations, interruptibility, easing, haptics | Part X; §§38–44 |
| Async reliability, optimistic UI, perceived speed | Part XI; §§45–50 |
| Responsive, safe areas, multi-input, localization | Part XII; §§51–54 |
| Keyboard, screen reader, focus, reduced motion | Part XIII; §§55–59 |
| Copy, onboarding, empty states, discoverability | Part XIV; §§60–64 |
| Sensitive actions, payments, account, permissions | Part XV; §§65–68 |
| Media viewers, creative editors, games | Part XVI; §§69–71 |
| Tokens, component contracts, state machines, overlays | Part XVII; §§72–78 |
| Hysteresis, changing input modality, timing races | Part XVIII; §§79–88 |
| Ready-made component interaction recipes | Part XIX; Recipes A–L |
| Common failure modes | Part XX (anti-patterns) |
| Ready-to-copy acceptance checklists | Part XXI |
| Scoring, QA matrix, test examples, finishing passes | Part XXII; §§89–94 |

## Non-negotiable interaction contracts

### Pointer, hover, and menus

- Differentiate **hover**, **pressed**, **focused**, **selected**, **expanded**, and **disabled** states. These are not interchangeable.
- Make interactive hit areas forgiving without making neighboring controls accidentally overlap or capture input.
- For a submenu reached diagonally: preserve the active parent while the pointer travels inside a **direction-aware safe triangle/polygon** toward the child. Measure pointer position and movement direction; allow a brief grace interval only while trajectory supports submenu intent. Cancel grace when pointer clearly changes direction. See §9.2 and Recipe A.
- Do not globally delay all hovering to compensate for one nested menu.
- Ensure submenus work by **keyboard and touch** without relying on a hover corridor.
- Portals, scroll containers, resizing, moving menus, touch emulation, and right-to-left opening directions must not break pointer intent or dismissal.
- Escape closes the appropriate layer; clicking outside follows an explicit policy; activation does not accidentally trigger controls underneath.

### Keyboard and focus

- Define a visible focus indicator and predictable tab/arrow behavior.
- Put initial focus in the right place when opening an overlay; restore it appropriately after close unless the initiating element no longer exists.
- Use documented patterns for dialog focus trapping and menu/listbox navigation; avoid creating traps in ordinary non-modal content.
- Preserve composition input, typed text, caret, and selection when state updates or network results arrive.
- Honor screen-reader names, roles, states, live announcements, and reduced-motion preferences.

### Touch, gestures, and layout

- Never require hover to discover a critical action on touch.
- Disambiguate tap, pan, scroll, drag, pinch, long-press, and cancellation. Use pointer capture and CSS `touch-action` only when appropriate.
- Provide a usable hit target even if the visible icon is small; do not claim a specific number is universally mandated.
- Keep controls stable during loading, keyboard opening, safe-area changes, orientation changes, zoom, and text scaling.
- Prefer content-driven breakpoints and test genuinely narrow widths instead of shrinking a desktop mockup.

### Async, destructive actions, and resilience

- Show prompt and truthful feedback for actions; distinguish **saving, saved, retrying, error, offline, and unsaved**.
- Prevent accidental double submission without blocking legitimate repeated work.
- Make optimistic updates recoverable; restore previous state on failure or explain pending synchronization.
- Make destructive actions proportionate and offer undo where feasible.
- Preserve user data and position across interruption, route changes, search result updates, and transient network errors.

### Visual polish and motion

- Use semantic type, spacing, color, elevation, shape, icon, and motion tokens.
- Prefer clear hierarchy and strong alignment to decorative noise or gratuitous gradients.
- Animate causes and relationships (open, close, insert, reorder, state change), not merely movement for its own sake.
- Make motion **interruptible and reversible**. Avoid transitions that block rapid input.
- Prefer transform/opacity for compositor-friendly animation when appropriate, but never at the expense of semantic correctness.
- Test dark mode, high contrast, zoom, text expansion, reduced motion, and content in other languages where applicable.

## Required component state matrix

Before calling a component complete, consider each applicable condition:

| Axis | Minimum cases to exercise |
| --- | --- |
| Interaction | Idle, hover, focus-visible, active/pressed, selected, disabled, dismiss |
| Task lifecycle | Empty, loading, ready, success, error, retry, offline, stale |
| Input | Pointer, keyboard, touch, screen reader, mixed input |
| Layout | Narrow, wide, zoomed, long content, scrolling, safe areas |
| User preference | Reduced motion, high contrast, light/dark, text scaling |
| Concurrency | Double click, rapid navigation, reopen during close, stale async response |

Mark "not applicable" explicitly instead of implementing meaningless states.

## Examples of acceptance criteria

Use the items relevant to the task, not necessarily every item:

- A mouse can move diagonally across sibling menu rows into an open child menu without unintentionally switching parents.
- Intent protection stops when the pointer reverses toward a different menu row; keyboard and touch navigation remain correct.
- A menu or dialog can be opened, navigated, activated, and dismissed with the keyboard alone; focus ends in a sensible location.
- A form supports validation, async pending state, error recovery, and unsaved-change protection without losing the caret or input.
- A toast's Undo reverses the relevant operation; stale async work cannot overwrite more recent user intent.
- Long labels, text scaling, narrow screens, browser zoom, and translation do not clip the primary action.
- Repeated rapid interaction does not create stuck animations, ghost overlays, duplicate requests, or lost state.
- Reduced-motion mode preserves comprehension and navigation while removing unnecessary motion.
- Browser and device performance checks measure actual regressions; do not report invented metrics.

## Output expectations

For **audits**, provide an evidence-backed, prioritized issue list and an actionable component checklist. Include file references/locations if code is available.

For **implementations**, summarize changed files and decisions, state which tests or checks were run (and any failures or omissions), and identify any trade-offs or remaining risks.

For **new designs**, provide enough state, keyboard, pointer, responsive, accessibility, and recovery detail that another engineer can implement the component without guessing.

## Final rule

A UI feels premium when it behaves as a thoughtful person would expect even during awkward pointer paths, fast input, slow networks, interruptions, and mistakes. Optimize for that reliability before decorative flourish.
