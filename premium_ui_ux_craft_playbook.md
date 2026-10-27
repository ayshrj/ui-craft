# The Premium UI/UX Craft Playbook

**A field manual of interaction design, visual polish, feedback, accessibility, motion, and implementation details that make digital products feel considered.**

**Edition:** 2026-10-27  
**Scope:** Web apps, desktop interfaces, mobile apps, creative tools, SaaS dashboards, commerce, media, and games.  
**Audience:** Product designers, frontend/mobile engineers, design-system authors, QA engineers, and AI coding agents.  
**Use:** As a design reference, implementation spec, code-review checklist, and acceptance-test catalog.

> **Central thesis:** Premium quality is not a gradient, expensive font, glass effect, or a set of 200 ms animations. It is the repeated experience that an interface understands the user's intent, makes the right thing easy, reacts promptly, behaves consistently, preserves work, and handles edge cases with care.

This guide is deliberately extensive, but no guide can enumerate literally every good practice for every domain. Treat its values as **starting hypotheses**, not as universal laws. Test on actual hardware, with assistive technology, real data, varied content lengths, network failures, and people outside the team.

## Contents

- [Part I — The design philosophy](#part-i-the-design-philosophy)
- [Part II — Layout, hierarchy, density, and visual precision](#part-ii-layout-hierarchy-density-and-visual-precision)
- [Part III — Input intention, pointer behavior, and hover craft](#part-iii-input-intention-pointer-behavior-and-hover-craft)
- [Part IV — Interactive controls and state completeness](#part-iv-interactive-controls-and-state-completeness)
- [Part V — Menus, command interfaces, and navigation](#part-v-menus-command-interfaces-and-navigation)
- [Part VI — Dialogs, popovers, sheets, and overlays](#part-vi-dialogs-popovers-sheets-and-overlays)
- [Part VII — Forms, editing, and user-generated content](#part-vii-forms-editing-and-user-generated-content)
- [Part VIII — Search, filtering, sorting, and data-dense UI](#part-viii-search-filtering-sorting-and-data-dense-ui)
- [Part IX — Scrolling, dragging, gestures, and touch](#part-ix-scrolling-dragging-gestures-and-touch)
- [Part X — Motion, animation, and tactile causality](#part-x-motion-animation-and-tactile-causality)
- [Part XI — Speed, async operations, reliability, and trust](#part-xi-speed-async-operations-reliability-and-trust)
- [Part XII — Responsive, platform, device, and content adaptability](#part-xii-responsive-platform-device-and-content-adaptability)
- [Part XIII — Accessibility as interaction quality](#part-xiii-accessibility-as-interaction-quality)
- [Part XIV — Content design, onboarding, discoverability, and emotional tone](#part-xiv-content-design-onboarding-discoverability-and-emotional-tone)
- [Part XV — Platform trust, privacy, account, and sensitive operations](#part-xv-platform-trust-privacy-account-and-sensitive-operations)
- [Part XVI — Media, creative tools, and games](#part-xvi-media-creative-tools-and-games)
- [Part XVII — Engineering the polish rather than approximating it](#part-xvii-engineering-the-polish-rather-than-approximating-it)
- [Part XVIII — The invisible polish: advanced edge cases](#part-xviii-the-invisible-polish-advanced-edge-cases)
- [Part XIX — 12 concrete interaction recipes](#part-xix-12-concrete-interaction-recipes)
- [Part XX — Anti-pattern blacklist](#part-xx-anti-pattern-blacklist)
- [Part XXI — Component audit checklist (copy into issues/PRs)](#part-xxi-component-audit-checklist-copy-into-issuesprs)
- [Part XXII — Audit rubric, priorities, and release gates](#part-xxii-audit-rubric-priorities-and-release-gates)
- [Part XXIII — Authoritative references and further reading](#part-xxiii-authoritative-references-and-further-reading)

---

## How to read the recommendations

- **MUST:** Functional, safety, platform, or accessibility requirement for the stated pattern; some are backed by standards.
- **SHOULD:** Strong design recommendation, subject to product context and user testing.
- **MAY:** Optional craft/detail that adds value when appropriately applied.
- **Heuristic:** Useful default, **not** a WCAG requirement or a proven ideal timing.
- **Anti-pattern:** A frequent way otherwise attractive UI becomes frustrating or fragile.

When a requirement depends on platform conventions, follow the platform and assistive-technology behavior before inventing a custom one. A desktop hover interaction and a phone touch interaction are not interchangeable.

---

# Part I — The design philosophy

## 1. The eight dimensions of premium feel

1. **Clarity:** The next appropriate action is visible, or easily discoverable, at the moment it matters.
2. **Intent recognition:** The interface responds to what a person was trying to do, not just the pixel accidentally under a pointer.
3. **Predictability:** An action's result, location, and meaning stay stable across the experience.
4. **Responsiveness:** Actions generate immediate acknowledgment; long work is explained without blocking unrelated work.
5. **Forgiveness:** Mistakes are easy to prevent, reverse, or recover from.
6. **Craft:** Typography, spacing, optical alignment, shapes, timing, and language follow a coherent system.
7. **Accessibility:** The same task is possible with keyboard, touch, assistive tech, zoom, reduced motion, and varied motor abilities.
8. **Trust:** The interface never hides consequences, invents success, loses data silently, or manipulates the user into a choice.

**The premium test:** When a user moves quickly, misses slightly, changes their mind mid-animation, loses connection, returns after a week, or uses an unfamiliar device, does the experience still feel intentional?

## 2. Good friction versus bad friction

- Remove **bad friction**: unnecessary confirmations, forced tutorials, repetitive form entry, jumpy layout, tiny click targets, ambiguous labels, and loading screens where local response was possible.
- Keep **necessary friction**: confirmation for irreversible, unusually destructive operations; authentication around sensitive account changes; deliberate review before a financial transaction; disclosure before sending data externally.
- Friction must match **consequence**, not visual drama. A simple preference toggle should not open a confirmation dialog. Deleting a workspace may warrant typing its name.
- Never make a harmful action easier than a protective alternative through deceptive layout.
- Measure both **time-to-success** and **cost-of-error**. A fast action that frequently causes mistakes is not efficient.

## 3. Interaction design principles to enforce everywhere

- **Direct manipulation:** When possible, operate on the object itself rather than routing every action through a distant control panel.
- **Locality:** Place controls near the item or region they affect; use labels to make scope unmistakable.
- **Progressive disclosure:** Show the essential path first; expose advanced actions at the point of need without making frequent actions hard to find.
- **Recognition over recall:** Show recent items, choices, examples, and contextual actions rather than requiring exact memory.
- **Strong defaults:** Preselect safe, likely options; never preselect consent the user has not given.
- **Visibility of state:** Make selection, edit mode, unsaved state, background activity, permissions, and system status understandable.
- **Consistency with context:** Use one conceptual vocabulary, but adapt interaction for pointer, touch, keyboard, and platform norms.
- **No surprise navigation:** A tap on a control should not unexpectedly jump the page, open an unrelated route, or scroll the user away.
- **No accidental punishment:** A missed tap should not delete content, lose focus unexpectedly, or collapse an open menu while traversing it.
- **Respect pace:** Enable fast expert workflows without making novices guess.

## 4. Prioritization: the craft pyramid

Do the following **in order** before spending time on decorative animation:

1. Functionality and data integrity.
2. Accessibility and input coverage.
3. Clear layout, information architecture, and copy.
4. Responsive interaction, loading, failure, and recovery.
5. Coherent visual system.
6. Microinteractions, optical polish, and delight.

A gorgeous component that breaks keyboard focus or loses edits is unfinished.

---

# Part II — Layout, hierarchy, density, and visual precision

## 5. Information hierarchy

### 5.1 One dominant job per screen

- Define the screen's **primary task** in one sentence. Every visible element should support that task, orientation, or necessary secondary action.
- Use a dominant content region, supporting regions, and quiet metadata. Avoid five equally emphasized panels.
- The primary action should be apparent through language, position, and visual weight, not color alone.
- Distinguish **primary**, **secondary**, **tertiary**, and **destructive** actions. A screen should rarely contain multiple competing primary buttons.
- Use the order **what is this → why it matters → what can I do next** where applicable.
- Keep item-specific actions next to the item. Do not require the user to trace an unrelated toolbar.
- Hide nonessential controls until hover/focus if the action remains discoverable and works on touch and keyboard.
- Let content be the hero in image, document, game, and media experiences; chrome should support the content instead of boxing it in.

**Failure test:** Blur your eyes or shrink a screenshot to 25%. If the most important area disappears into equal-weight cards, hierarchy needs work.

### 5.2 Alignment as a system

- Establish vertical anchors for titles, field labels, content columns, controls, and metadata.
- Align **baselines** for text, not merely bounding-box tops.
- Align icon + label compositions optically; a geometrically centered triangular play icon may look left-shifted.
- Keep related content on the same axis unless asymmetry has a functional purpose.
- Avoid near-misses: 1–3 px misalignments repeated across a screen can look worse than obvious, intentional asymmetry.
- Keep edge spacing predictable as panels grow or collapse.
- Use CSS grid/flex intrinsic layout instead of manually matching every coordinate.

### 5.3 Spacing and rhythm

- Adopt a **small token scale**, for example `2, 4, 8, 12, 16, 24, 32, 48, 64` CSS px, with selective optical exceptions.
- Prefer spacing that expresses grouping: within an item < between items < between sections.
- Use whitespace to organize **information**, not to artificially make a sparse screen feel expensive.
- Minimize dead space below important content on short mobile viewports; preserve comfortable separation around primary controls.
- Use consistent insets within peer components, including cards, fields, menus, and tooltips.
- Do not force symmetric padding when visually heavier content needs a small optical correction.
- Prefer `gap`, logical margins/paddings, and reusable layout primitives over arbitrary child margins.
- Let component content determine height where possible; use min-height only to preserve needed touch target or rhythm.

**Acceptance:** All major boundaries correspond to tokens or documented optical adjustments; no arbitrary 17/19/21 px drift spread through otherwise identical components.

### 5.4 Density modes

- Allow more information density where scanning, comparison, or expert work benefits from it.
- Compact desktop data tables can be excellent; crammed mobile touch controls are not.
- Preserve target sizes even when visible glyphs are small by extending their interactive hit boxes.
- Define density variants intentionally (`comfortable`, `compact`), not via global CSS that shrinks everything.
- Make dense interfaces keyboard-friendly and easy to scan with row hover, clear grouping, and stable headers.

### 5.5 Content width and line length

- Keep long-form text in a comfortably readable measure; as a **heuristic**, aim around 45–80 characters per line for body copy, adjusted for script, size, and device.
- Use wider layouts for tables, timelines, dashboards, and canvases where horizontal comparison requires it.
- Do not stretch a two-column form across a huge monitor solely to fill space.
- Use responsive max-widths for text regions and fluid widths for operational surfaces.
- Avoid centering long paragraphs or large bodies of data; reserve centered text for small, intentional moments.

## 6. Typography that feels engineered

### 6.1 Type scale and role

- Define tokens for display, page title, section heading, body, label, helper, metadata, numeric metric, and code.
- Prefer a small, consistent number of text styles to endlessly improvised font sizes.
- Typography should map to semantic structure: the biggest text is not automatically the most important if it is just decoration.
- Choose weights with purpose; use contrast between weight and size rather than maxing out both.
- Tune line height based on type size: tighter for short display text, more open for multi-line reading.
- Check optical letter spacing; large type may benefit from modest tighter tracking, all-caps small labels often need more tracking.
- Use tabular numerals for constantly changing values and columns: timers, prices, counters, tables, scoreboards.
- Use monospaced text for code and exact tokens, not as a general shortcut to a technical aesthetic.

### 6.2 Legibility and truncation

- Text MUST remain usable with system text enlargement / browser zoom, and at narrow widths.
- Never convey essential meaning through placeholder text alone.
- Do not truncate important unique identifiers without exposing the full value through click, accessible label, copy, or expandable display.
- Use single-line truncation for known-short labels; multi-line wrapping for titles where the full meaning matters.
- Avoid `text-overflow: ellipsis` as a blanket fix for poorly allocated space.
- Handle long names, untranslated words, emojis, mixed scripts, numbers, and URL strings.
- Prevent large layout shifts when fonts load; preload critical fonts or use compatible fallback metrics where feasible.

### 6.3 Micro-typography

- Use sentence case for most action labels unless the product language system specifies otherwise.
- Use correct punctuation, apostrophes, en dashes, and localized number/date formatting.
- Avoid orphaned one-word headline tails where a small change in width or copy can fix them.
- Format error text for scanning: say what happened, what stays safe, and the next step.
- Use short labels over clever metaphors. A command named “New board” is clearer than “Manifest another universe.”

## 7. Color and surface hierarchy

### 7.1 Semantic color tokens

Create **semantic roles** rather than scattering hex codes:

- `background`, `surface`, `surface-raised`, `surface-overlay`.
- `text-primary`, `text-secondary`, `text-muted`, `text-inverse`.
- `border-subtle`, `border-strong`, `focus-ring`.
- `accent`, `accent-hover`, `accent-active`, `on-accent`.
- `success`, `warning`, `danger`, `info`, with matched backgrounds and foregrounds.
- `selection`, `disabled`, `scrim`, `chart-*`.

A status color must mean the same thing across alerts, forms, chips, icons, and charts.

### 7.2 Contrast and clarity

- Verify contrast for normal and large text using WCAG; do not assume a modern low-contrast palette is readable.
- WCAG AA generally requires at least **4.5:1 for normal text** and **3:1 for qualifying large text**, subject to standard exceptions.
- Ensure important graphical objects and component state boundaries meet relevant non-text contrast requirements (often **3:1**, subject to the criterion's conditions).
- Color MUST NOT be the only carrier of status. Pair it with labels, shapes, icons, patterns, or position.
- Test bright sunlight, dim environments, dark mode, and common color-vision differences.
- Disabled text can be visually muted, but never use 'disabled' styling on content that a person still needs to read or act upon.

### 7.3 Premium surfaces without visual noise

- Define a clear elevation hierarchy: page < card (if needed) < floating menu < modal/dialog.
- Elevation may use shadow, border, tonal contrast, blur, or overlap. Do not pile all of them on every component.
- Prefer subtle borders to huge shadows on dense interfaces.
- Keep dark-mode elevation distinct; shadows often matter less than surface tint and border contrast.
- Avoid blur/glass when it obscures content, tanks performance, or creates unreadable surfaces.
- Make overlays opaque enough to maintain legibility over unknown underlying content.
- Design real pressed, selected, focused, hovered, and disabled surfaces; not just default surfaces.

## 8. Corners, borders, shadows, and icons

### 8.1 Shape language

- Choose a cohesive radius family: small control, medium card, large container, and pill where semantically useful.
- Preserve **nested-radius logic**: inner radius typically decreases as inner inset decreases; avoid cartoonishly mismatched corners.
- Rounded rectangles should not unintentionally create slivers of mismatched backgrounds at corners.
- Never give everything the same radius by accident; different scales have different visual needs.
- Use separator lines when proximity alone cannot distinguish groups, not between every single row indiscriminately.

### 8.2 Shadow craft

- Use shadows to communicate elevation, separation, or draggable state, not because cards “must have shadows.”
- Watch clipping within scroll containers and portals.
- Shadows should fade naturally; multiple subtle layers can be more convincing than one large dark blur.
- Use a suitable background and border for menus even if shadows fail or high-contrast mode changes rendering.
- Never rely on a shadow alone for important boundaries.

### 8.3 Icon precision

- Choose a consistent icon family or deliberately compatible families.
- Keep stroke weight, corner style, and optical size coherent.
- Normalize icon bounding boxes; one icon should not appear huge next to another despite identical CSS dimensions.
- Match icon meaning to label; do not use ambiguous icons without text where ambiguity hurts discoverability.
- Ensure hit area is larger than visual glyph.
- Support decorative-icon hiding and meaningful-icon text alternatives for assistive technology.
- Mirror **directional** icons appropriately in right-to-left layouts; do not mirror brand marks or icons whose meaning is not directional.

### 8.4 Pixel-level finishing

- Audit for blur caused by fractional transforms, non-integer canvas scaling, and low-resolution assets.
- Check 1×, 1.25×, 1.5×, 2× scale factors if desktop and browser zoom are supported.
- Avoid animated borders that cause layout reflow; use inset box-shadow/outline/transform where suitable.
- Inspect 1 px seams at sticky elements and nested scroll surfaces.
- Test clipping of focus rings, shadows, selection highlights, and animated content.

---

# Part III — Input intention, pointer behavior, and hover craft

## 9. Pointer targeting and intent

### 9.1 Interactive hit area ≠ visible glyph

- A 16 px icon may live inside a 36–48 px clickable region depending on context.
- Make the clickable region match the perceived affordance: if a row looks like one action, the row should usually activate it.
- Avoid overlapping hit targets and invisible overlays that steal clicks.
- Keep context-menu triggers sufficiently separated from destructive adjacent actions.
- Hover reveals must also become available on **focus** and **touch**.
- The cursor should advertise actual interaction; avoid `cursor: pointer` on inert decorative elements.

### 9.2 Safe triangle / safe polygon / menu aim — **essential premium behavior**

**Problem:** A user moves diagonally from a parent menu item toward a submenu. Their pointer crosses a sibling row, which instantly switches menus and breaks intent.

**Behavior:**

1. When a submenu opens, identify the parent trigger and submenu rectangle.
2. Track recent pointer coordinates and velocity/direction.
3. When the pointer leaves the parent item while traveling toward the submenu, define a **temporary polygon corridor** between the exit point and the nearer side/corners of the submenu.
4. While pointer movement remains inside that corridor, **defer activating sibling items** even if their DOM hover state changes.
5. If the pointer enters the submenu, hand interaction control to the submenu immediately; cancel the grace corridor.
6. If movement clearly heads away or crosses outside the corridor, allow a different item to activate promptly.
7. Expire any grace state after a short bounded time; do not leave the UI 'stuck' on an old submenu.
8. Recompute geometry if menu placement flips, content scrolls, browser resizes, or the submenu changes size.
9. Use a suitable rectangular bridge for any visual gap between trigger and submenu.
10. Do not apply a mouse-only heuristic to touch as if hover existed on touch.

**Implementation approaches:** For Floating UI React, `useHover(context, { handleClose: safePolygon() })` implements a safe travel area for reference-to-floating interactions. Nested command menus may also need parent-list **active-item suppression** while a child submenu is being approached; a polygon used only to delay `mouseleave` is not always enough to prevent sibling activation. Use existing accessible menu primitives when they cover the intended behavior.

**Edge cases:** submenu opens left; opens above; near-screen-edge collision/flip; pointer teleports; slow deliberate movement; users with tremor; scrolling parent; overlapping adjacent hover targets; pen input; submenu opened by keyboard; viewport moved after opening.

**Anti-patterns:**

- A universal 500 ms delay for **all** menu changes (feels unresponsive).
- A polygon so large it blocks the user's intentional switch to another item.
- Capturing pointer events over unrelated content and breaking scroll/wheel gestures.
- Dismissing an entire multi-level menu the instant the pointer touches the 1–4 px gap.

**QA test:** Open a submenu, sweep diagonally through the neighboring parent rows into the child; the first submenu must remain stable. Then move *deliberately* to another parent; the menu must switch promptly. Repeat for left-opening and viewport-constrained menus.

### 9.3 Hover intent without submenu

- Use hover for **preview** or emphasis, not as a prerequisite for core functionality.
- If a hover action is expensive or disruptive, consider a brief dwell or movement-stability test.
- Pure cosmetic hover (color/tint) should respond immediately; there is no benefit to delaying a tiny highlight.
- Hover-only expanding cards can make neighboring cards jump; instead layer expanded content or reserve space.
- A tooltip should not appear on every accidental pass over a dense toolbar instantly.
- Don't attach tooltips to inactive decoration or create tooltips that obscure the controls being used.

### 9.4 Hover, active, selected, and focus are **different states**

- **Hover:** Pointer is over an item.
- **Pressed/active:** Input is being actuated.
- **Focus:** Keyboard/programmatic navigation target.
- **Selected:** Persistent chosen item/value.
- **Current:** The item representing current route, step, or location.
- **Disabled:** Unavailable action, with reason where practical.

These MUST NOT share one undifferentiated fill style. A selected tab stays selected after pointer movement, and a keyboard-focused option remains discernible from the selected option.

### 9.5 Pointer-down, pointer-up, and cancellation

- Design behavior intentionally around when an action commits. For normal buttons, activation should follow platform semantics (typically a completed click/press), not destructive side effects on pointer-down.
- Allow users to move off a pressed control to cancel before release when supported by platform semantics.
- Provide pressed feedback instantly even if a long operation begins afterward.
- Track `pointerId` for multi-pointer gestures; ignore unrelated second touches when appropriate.
- Handle `pointercancel` and lost pointer capture without leaving controls permanently pressed or dragged.
- Avoid global `preventDefault()` that breaks native scrolling, text selection, pinch zoom, or accessibility gestures.

### 9.6 Cursor and pointer affordance

- Distinguish drag handle, resize handle, text, link, busy region, and disabled action as the platform allows.
- Prefer native cursor semantics and avoid custom cursors that lag or obscure content.
- Resize handles should indicate direction (`ew-resize`, `ns-resize`, diagonal equivalents) accurately.
- If a draggable surface includes clickable children, define clear separation between drag initiation and click activation.

---

# Part IV — Interactive controls and state completeness

## 10. Every interactive component needs a state contract

For each component, specify:

| State | Expected treatment | Behavioral requirement |
|---|---|---|
| Default | Legible, recognizable affordance | Can act if enabled |
| Hover | Subtle local emphasis | Never changes selected value by itself |
| Focus-visible | Strong focus indication | Keyboard users can track position |
| Pressed | Tactile change in depth/tint/scale | Starts promptly; can cancel when appropriate |
| Selected / checked | Persistent and distinct | Reflected in semantics and data |
| Disabled | Visually distinct, explanation if needed | Cannot submit or mutate state |
| Loading | Progress or busy treatment | No double-submit, no false success |
| Success | Appropriate confirmation | State/result actually committed |
| Error | Clear cause and recovery | Retry/modify without losing data |
| Read-only | Select/copy where appropriate | Not misleadingly styled as unavailable data |
| Empty | Context and useful next action | No broken blank frame |
| Offline / stale | Data currency clear | No silent data loss |

**Anti-pattern:** Engineering only the default and hover styles, then treating the other states as afterthoughts.

## 11. Buttons and action controls

- Button labels should describe the result: `Create project`, `Save changes`, `Export CSV`, not vague `Continue` where meaning is unclear.
- Use a real `button` for actions; use a real `a` for navigation. Don't reinvent semantics with clickable `div`s.
- One clearly dominant action per logical region; secondary actions must remain accessible.
- Don't let a button change width drastically from `Save` to `Saving…`; reserve width or use icon/progress without movement.
- On press, show immediate local feedback (color/scale/elevation depending on platform).
- Avoid animated bounce on every mundane click; reserve expressive movement for meaningful events.
- Prevent duplicate submits with idempotent backend design plus UI pending state; disabling UI alone is not sufficient.
- Only show success when the operation succeeded or when the interface explicitly communicates optimistic/pending status.
- Let users activate buttons with keyboard, game controller, or accessibility switch where supported.
- Destructive buttons should be visually distinguishable, but don't use warning red for harmless cancellation.
- A disabled button should have an understandable reason; prefer validation explanations over a mysterious inert control.
- Ensure labels don't wrap awkwardly or clip on narrow screens and large text settings.

## 12. Toggles, checkboxes, radio buttons, segmented controls

- Use a **switch** for an immediate on/off preference, when it genuinely changes state without separate submission.
- Use a **checkbox** for independent choices; use **radio** for mutually exclusive choices within one named group.
- Use **segmented controls** for a small number of peer views/modes with short labels, not ten items or long phrases.
- Keep state transitions visually obvious; differentiate focus from checked/selected.
- Avoid making a switch appear instantly successful when server persistence failed; roll back or show clear pending/error state.
- Never toggle a preference when the person merely scrolls past its control.
- Label text should normally be part of the interactive target, respecting semantics.

## 13. Sliders, steppers, and precision controls

- For approximate continuous values, sliders work well; for exact values, pair them with a numeric input.
- Support keyboard arrows and larger/smaller steps; make min/max/value discoverable.
- Show the current value during manipulation without covering the thumb or finger.
- Snap to meaningful intervals when appropriate; don't introduce hidden steps that feel broken.
- Keep drag smooth even if expensive downstream rendering needs to be throttled/debounced.
- Distinguish **visual feedback** while scrubbing from **committed update** when necessary.
- For volume/brightness-like controls, respond continuously; for expensive remote filtering, consider commit-on-release while previewing locally.

## 14. Tooltips and hints

- Use tooltip for concise supplemental explanation, not essential instructions or lengthy documents.
- Make tooltips appear on keyboard focus as well as pointer hover.
- Position them to avoid covering the trigger, nearby data, or the pointer's path.
- Use sensible dwell/dismiss behavior: pointer traversal across a toolbar should not explode into a field of tooltips.
- Ensure tooltips remain accessible as appropriate when content needs to be hovered, dismissed, or persisted.
- Never bury mandatory error recovery instructions exclusively in a tooltip.
- Keyboard shortcut hints are excellent secondary tooltip content, such as `Search  ⌘K` or `Ctrl+K`.

# Part V — Menus, command interfaces, and navigation

## 15. Dropdown menus and nested menus

### 15.1 Open and close semantics

- Desktop menus may open on click, keyboard activation, or hover where appropriate for hierarchical menus. Mobile menu behavior should use touch rather than hypothetical hover.
- Menu trigger MUST indicate open state when practical (`aria-expanded`, direction chevron, visual pressed state).
- Preserve menu position relative to trigger while it is open, within viewport constraints.
- Close on Escape, outside activation where appropriate, successful command invocation, and explicit dismissal.
- Don't close just because the pointer momentarily crosses a decorative boundary.
- Return focus to the invoking control when the menu closes via Escape or when that is the logically appropriate destination.
- If an action changes route or removes the trigger, move focus to a sensible new location instead of trying to focus a deleted node.
- Nested menus should support arrow-key navigation, including left/right submenu traversal consistent with orientation and writing direction.
- Avoid mixing semantic `menu` widgets with ordinary link lists when their interaction models differ. A visual dropdown is not automatically an ARIA menu.

### 15.2 Placement and collision management

- Position using available space: flip from right to left or bottom to top when needed.
- Shift within viewport bounds without obscuring the trigger or disconnecting the menu visually.
- Respect safe areas, on-screen keyboard, zoom, scrollbar presence, and nested scrolling containers.
- Update anchoring on scroll, resize, content expansion, and zoom; position fixed/sticky containers need special testing.
- Avoid placing a child submenu directly over the parent rows required to access siblings unless design explicitly handles it.
- Shadows, borders, and pointer corridors must survive when floating content is portaled outside a parent stacking context.
- Use scrollable menu lists for constrained screens; a submenu must not extend inaccessible below the viewport.

### 15.3 Menu item anatomy

- Consistent row height, insets, icon slot, label, shortcut slot, optional badge, and child chevron.
- Separate groups of commands by meaning, not arbitrary aesthetics.
- Put destructive actions near the bottom or in a clearly differentiated group, not next to frequently selected harmless commands.
- Show keyboard shortcut hints in muted but legible text, and use platform conventions.
- If item titles truncate, provide access to full text; avoid truncating two distinct items to identical prefixes.
- Items that are disabled should reveal why when useful, or describe prerequisites outside the menu.
- Radio/checkbox menu items MUST expose checked state semantically.

### 15.4 Menu interaction QA matrix

| Scenario | Expected result |
|---|---|
| Mouse moves diagonally toward child | Open submenu stays stable |
| Mouse deliberately moves to sibling | Sibling activates quickly |
| Submenu flips to left | Safe corridor follows actual geometry |
| Arrow keys traverse items | Predictable focus without accidental invocation |
| Enter/Space on item | Executes one action, closes as appropriate |
| Escape in nested submenu | Closes current level before entire menu, according to pattern |
| User scrolls inside long menu | Scroll works; hover state doesn't hijack scroll |
| Menu opens near bottom-right | Entire reachable action area remains in view |
| Trigger unmounts | Focus recovery has a fallback |
| Touch or pen | No dependence on simulated hover |

## 16. Command palettes and universal search (`⌘K` / `Ctrl+K`)

### 16.1 Invocation and accessibility

- Offer a clearly discoverable entry point (search icon, labeled trigger, shortcut hint), not only a secret shortcut.
- When invoked, focus the query field and make typing immediately possible.
- Escape should be predictable: close a nested subview or clear a transient state first only if clearly conveyed, then dismiss.
- Use proper combobox/listbox/dialog semantics depending on actual behavior, not arbitrary roles.
- If a command opens a submenu/workflow, show a breadcrumb or contextual back path.
- Preserve the query after temporary loss of focus where practical; avoid discarding typed text on unintended close.
- Mobile command palettes should adapt to keyboard position, safe areas, and available height.

### 16.2 Ranking and matching

- Prefer exact matches, prefix matches, recent actions, and context-relevant actions above noisy fuzzy matches.
- Fuzzy matching must not make a command vanish when a simple spelling variation is entered.
- Show useful grouping such as `Recent`, `Actions`, `Pages`, `People`, `Files` only when it improves scanning.
- Highlight matching substrings subtly; don't make every character colored and bold.
- Handle diacritics, case, punctuation, aliases, synonyms, and localized labels where relevant.
- When async results arrive out of order, ignore stale responses and preserve the current query's results.
- If no results, offer recovery: different query, filters, or a useful alternative action.
- Avoid silently executing dangerous actions from an ambiguous search result; demand an explicit confirmation where warranted.

### 16.3 Selection and virtualization

- Keep active item visible during arrow navigation, scrolling its container only as needed.
- Active item should be distinct from pointer-hovered item and persisted selection.
- Support Home/End/PageUp/PageDown when a long result list warrants them and the pattern supports the behavior.
- Preserve stable result keys and avoid selection jumping as ranking or results update.
- Ensure virtualized results remain correctly announced to assistive tech and keyboard focus does not fall into unmounted nodes.
- Show shortcut keys on the right with fixed/aligned columns; vary Mac/Windows symbols appropriately.
- Pressing Enter should execute exactly the item the UI says is active—not the first search match if that differs.

### 16.4 Loading, speed, and follow-through

- Open the palette immediately, before network results load.
- Filter local commands synchronously and search remote objects asynchronously where useful.
- Debounce remote queries responsibly without delaying local text echo.
- Show lightweight loading only if latency is noticeable; avoid flashing skeletons for every keystroke.
- On success, move focus into the destination UI or present action feedback.
- On failure, retain query and selection state where safe.

## 17. Tabs, sidebars, breadcrumbs, and navigation

### 17.1 Tabs versus navigation

- Tabs are for switching closely related peer panels, not general site navigation disguised as a tab strip.
- Selected tab should remain clear after pointer leaves.
- Focused tab should be visually distinct from selected tab.
- Follow platform-appropriate keyboard semantics; tablist arrow keys commonly switch focus among tabs, with activation behavior deliberately chosen.
- When switching tabs, decide whether to preserve panel scroll and filter state. For workspaces, state preservation often feels more professional.
- Avoid expensive loading and page flash when tabs swap relatively small content.

### 17.2 Sidebar behavior

- Indicate current route and expandable hierarchy independently.
- Collapsed icon-only sidebars require accessible names and usable tooltips/focus labels.
- Save sidebar width/collapsed preference when appropriate; don't persist an unusable size across dramatically different screens.
- Resizable sidebars need drag handles and keyboard-compatible alternatives where appropriate.
- During resizing, prevent selection, preserve pointer capture, clamp sensible min/max widths, and avoid layout thrash.
- Do not animate enormous page reflow slowly when the user wants to operate quickly.

### 17.3 Breadcrumbs and location

- Breadcrumbs communicate hierarchy, not a random history trail; use Back separately for history.
- Truncate middle segments if necessary while preserving the current page and a way to access obscured ancestors.
- Make labels match actual objects; if something has been renamed, update its breadcrumb.
- Allow users to navigate to ancestors without losing unsaved work unexpectedly.

### 17.4 Browser history and deep links

- Back/forward should behave like navigation, not destroy app state arbitrarily.
- Preserve meaningful route state in the URL where shareability matters (filters, search query, selection, page, view).
- Don't put transient secrets in URLs.
- Deep links should open the expected screen and handle expired or missing objects gracefully.
- Restoring an app tab should not strand focus or scroll at an unrelated prior position.

## 18. Context menus and right-click

- Context menus should be relevant to the object and selection under the pointer.
- Do not override standard OS/browser context menus without substantial value and accessible alternatives.
- Provide a visible overflow menu for touch and novice discovery.
- For multi-select objects, distinguish actions applied to one item from actions applied to the whole selection.
- Keep item naming consistent between toolbar, overflow, shortcuts, and context menu.
- Support the keyboard context-menu key or Shift+F10 where appropriate for custom contexts.
- A context menu near an edge must flip/shift to remain visible.
- Confirm or offer undo for dangerous batch operations.

---

# Part VI — Dialogs, popovers, sheets, and overlays

## 19. Modal dialogs

### 19.1 The modal contract

- A modal interrupts the underlying task; use it only when interruption is justified.
- On open, move focus into an appropriate initial control, according to dialog semantics and content.
- Keep keyboard focus within the modal while it is open; underlying content should not be interactive by keyboard or pointer.
- Provide Escape/cancel behavior when dismissing is safe, but do not allow accidental dismissal that silently loses important edits.
- Restore focus to the opener on close when it still exists and that location makes sense.
- Use an accessible label/title and description where useful.
- Ensure scrolling inside long dialogs works without trapping the user in a non-scrollable bottom area.
- When the on-screen keyboard opens, avoid hiding the active field or buttons.
- Use a clear visual scrim but maintain sufficient contrast within the modal.
- Do not nest modals casually. Prefer a step, inline subview, or separate route if workflows become complex.

### 19.2 Closing policies

- For lightweight read-only dialogs: Escape, close button, and often backdrop click can dismiss.
- For editing dialogs: preserve drafts or warn only if meaningful unsaved changes would be lost.
- For destructive confirmation: backdrop dismissal should not accidentally count as confirmation.
- Clicking *inside* a modal must never close it due to event bubbling.
- If closing animates, input handling must reflect the closing state; don't allow double activation during exit.

### 19.3 Layer and stacking discipline

- Establish shared overlay levels (e.g. base, sticky, dropdown, popover, tooltip, modal, modal-tooltip, toast) instead of ad-hoc `z-index: 999999`.
- A tooltip inside a modal must display above the modal and remain within focus semantics.
- Opening a popover from a dialog should not re-enable the page behind it.
- Portal content still needs logical event and accessibility relationships.
- Scroll locking must not jump page position or shift content horizontally when the scrollbar disappears.

## 20. Popovers, non-modal panels, and hovercards

- Popovers should anchor clearly to the relevant object, flip/shift inside viewport, and remain readable while interacted with.
- Decide whether the content is **informational** (tooltip/hovercard) or **interactive** (popover); their focus behavior differs.
- Interactive popovers need reliable keyboard access, a dismissal path, and a coherent focus-return policy.
- Avoid opening content under a user's pointer when it creates accidental selection.
- Reposition intelligently during scroll; don't detach visually from the trigger.
- Closing outside-click handlers should ignore the initial opening click and nested interactive portals.
- When a selection inside a popover updates a parent control, communicate the new value explicitly.

## 21. Bottom sheets and mobile surfaces

- Use sheets when the mobile pattern improves ergonomics and context preservation.
- Respect top/bottom safe areas, gesture navigation regions, keyboard, screen reader focus, and orientation changes.
- Provide a visible drag indicator only if dragging is genuinely supported.
- Coordinate nested sheet-scroll gestures: swiping a list should scroll it before dismissing the sheet, according to platform expectations.
- Offer a close/cancel control for users who cannot perform dragging gestures.
- Set sensible detents and ensure critical content isn't clipped when the sheet is partly open.
- For large complex forms, prefer a full-screen route over an awkward tiny sheet.

## 22. Toasts, snackbars, banners, and alerts

- Match the medium to urgency: nonblocking toast for minor information, inline message for field error, banner for persistent page-level status, alert/dialog for decisions needing interruption.
- Keep toasts concise, legible, and available long enough to read; avoid vanishing before action can be taken.
- For important asynchronous outcomes, maintain an accessible status or activity history if a fleeting toast would be insufficient.
- Never rely on toast alone for critical errors or the only way to recover.
- Place `Undo` on a toast when an action genuinely supports undo; don't offer a fake affordance.
- Announce status appropriately to assistive tech (`role=status`/live region or platform equivalent); don't generate a flood of announcements.
- Avoid stacking ten success toasts during batch operations.
- Position toasts away from key buttons, game controls, keyboard, and safe-area overlays.

---

# Part VII — Forms, editing, and user-generated content

## 23. Form anatomy and hierarchy

- Each field needs a visible label, appropriate control, optional concise hint, and a reserved or predictable error treatment.
- Group related fields using headings or fieldsets and clear spacing.
- Ask only for information necessary for the task; clearly mark optional fields where ambiguity exists.
- Use appropriate native input types, autocomplete tokens, and virtual keyboard types.
- Put validation near the relevant field, but show an overall error summary for long forms where needed.
- Do not use placeholder as the sole label: it disappears during input and weakens error recovery.
- The form action should explain its effect. `Create account` is clearer than `Submit`.
- Avoid splitting a task into multiple screens when one short form would be simpler; use steps only where they reduce cognitive load.

## 24. Focus, typing, and cursor preservation

- Input should never lose focus just because a React component re-rendered or an async validation response arrived.
- Preserve caret position during formatters, collaborative updates, and validation, unless a deliberate transform justifies moving it.
- Do not reset partially typed values to stale server data.
- Avoid auto-capitalization on email addresses, usernames, or code tokens where inappropriate.
- Support pasted content, autofill, password managers, dictation, and IME composition; don't validate or mutate mid-composition unsafely.
- Auto-focus a field only when that helps the current flow without unexpectedly summoning the mobile keyboard.
- When adding/removing fields dynamically, preserve input focus logically and announce structure changes if needed.

## 25. Validation that teaches, not scolds

- Validate constraints at a useful time: avoid flashing `invalid` while a person is midway through typing a valid value.
- Prefer validating on blur or after attempted submit for incomplete structured inputs, with real-time help for requirements like password strength where useful.
- Show a **specific** error: `Password must be at least 12 characters`, not `Invalid input`.
- Display the correction path and retain the original input.
- Never erase a form after a network or server validation error.
- Mark required fields semantically, not solely with a red asterisk.
- Avoid turning a normal optional field into an error until the user commits an incompatible value.
- Ensure validation errors are programmatically associated with relevant fields and announced accessibly.
- Place focus at an error summary or the first invalid field after submit as appropriate; do not jerk scroll for each character typed.

## 26. Autosave, dirty state, and recovery

### 26.1 A clear save state machine

Track at least: `clean → dirty → saving → saved` with branches to `error`, `offline`, and `conflict` where relevant.

- **Clean:** Matches last persisted version.
- **Dirty:** Local edits exist but are not yet persisted.
- **Saving:** Persistence has been requested; local editing may continue.
- **Saved:** The backend or authoritative storage confirmed the relevant version.
- **Error:** Save failed; retain unsaved edits and show retry path.
- **Offline:** Changes may be stored locally/pending sync; never label them `Saved to cloud` without evidence.
- **Conflict:** A remote version changed; preserve both versions and offer reconciliation rather than overwriting silently.

### 26.2 Autosave craft

- Debounce network writes as appropriate, but update the edited field visually immediately.
- Do not show an anxious flashing `Saving…` indicator on every keystroke; use quiet persistent status.
- Ensure older in-flight saves cannot overwrite newer edits (versioning, request ordering, conflict detection).
- Persist pending changes through route changes/refresh where practical; for critical workflows warn about unsaved work.
- Allow explicit save/export where user expectation or risk requires it.
- If autosave fails, expose the error and offer retry/copy/download before any destructive navigation.

## 27. Undo, redo, cancel, and destructive actions

- Prefer **undo** over repetitive confirmation when reversibility is safe and clear.
- Undo scopes must be obvious: last text edit, list reorder, delete, or workspace operation.
- Keep history boundaries intentional; switching documents should not make Undo corrupt a different document.
- Don't call an action undoable if the reversal cannot restore all important details.
- Undo should restore selection, location, and state where feasible, not just recreate an object in a distant place.
- For irreversible operations, provide a clear confirmation stating the consequence and affected scope.
- Batch delete/reorder must respect selection and provide a review path where valuable.
- Users should be able to cancel file uploads, exports, search, and long-running work when technically safe.
- Ensure cancellation actually stops or detaches the operation appropriately; do not merely hide progress while continuing an expensive destructive task.

## 28. Editing affordances

- Make editable vs read-only state obvious via pencil affordance, input shape, or direct-manipulation cues.
- Double-click-to-edit is useful on desktop but should never be the only entry path.
- On entering edit mode, preserve original content and offer save/cancel semantics if autosave is not used.
- Avoid resetting text selection on keypress or snapping caret back to end.
- Keep inline editing stable when rows sort, filter, or receive live data.
- Provide keyboard shortcuts for power users without breaking native text-edit shortcuts.
- Support select-all, copy, cut, paste, and drag selection in text-rich apps.

## 29. Date, time, number, and locale entry

- Use localized display for dates, numbers, currencies, measurement units, and time zones.
- Never assume `MM/DD/YYYY` or `DD/MM/YYYY` from the user's language alone without disambiguation.
- Preserve exact numeric value separate from formatted text; avoid floating-point rounding surprises in financial input.
- For times, explain whether values refer to user-local, event-local, or UTC zones.
- Calendar pickers need clear keyboard navigation, valid/invalid date semantics, and visible range boundaries.
- Use sensible min/max and disabled-date explanations; avoid silently shifting a user's chosen date.
- Let people paste properly formatted values and edit with native keyboard behavior.

---

# Part VIII — Search, filtering, sorting, and data-dense UI

## 30. Search interactions

- Typing should update the input immediately, even if results are network-bound.
- Use request IDs / abortable fetch to prevent a stale response replacing newer results.
- Highlight matching terms where useful but don't visually over-emphasize every match.
- Preserve the user's query across navigation when they return to results.
- Make clear whether search is global, within a page, within a folder, or within selected filters.
- Provide meaningful empty results; avoid claiming there are zero records when filters are simply too restrictive.
- Keyboard navigation must keep active result visible and predictable.
- Show recent queries only where privacy/security context allows; do not expose sensitive search history by accident.

## 31. Filters and chips

- Selected filters must be visible and removable without reopening a complex panel.
- Use `Clear all` only when multiple filters exist and clearing is safe/understandable.
- Keep clear semantics between `Apply`, `Cancel`, and live preview. Don't silently commit a draft filter from a canceled drawer.
- Indicate the number of active filters but don't replace actual names with an opaque count when space allows.
- Support keyboard removal and clear accessible names for compact filter chips.
- Preserve filters when paging/sorting unless the user expects a reset.
- Loading a filtered result must not make the entire screen unusable when stale results can remain visibly marked pending.

## 32. Sorting and data tables

### 32.1 Table readability

- Align text labels by reading direction, and numbers by decimal/right alignment according to locale and format.
- Use tabular numerals for changing metrics; provide stable unit/precision.
- Clearly distinguish column headers, grouped rows, summary rows, and data rows.
- Use subtle row hover and selected-row treatment without relying on zebra striping alone.
- Sticky headers must not cover focused or scrolled-to rows.
- Long content needs wrapping, truncation with retrieval, or purposeful overflow—never clipped unpredictably.
- Provide empty and error states inside the table area with contextual next action.

### 32.2 Sorting behavior

- Indicate active sort field and direction; make the entire column header target usable where applicable.
- Use stable sorting so equal values do not randomly reorder on each rerender.
- Preserve row selection and keyboard focus when sorting.
- Define treatment of null values, mixed units, dates, and text localization.
- Update sort indicators and data together; don't leave the arrow announcing an obsolete order.
- Sorting must not silently clear filters or selected objects.

### 32.3 Tables with actions

- Bulk toolbar appears when selection exists, without causing surprising content jumps.
- Keep row action affordance visible on keyboard focus and touch, even if hidden until hover on desktop.
- Avoid accidentally activating a row navigation when selecting text, clicking its checkbox, or opening an action menu.
- Support shift-range select where user expectations justify it; clearly show the resulting count.
- For virtualized large data, keep selection model independent of currently mounted rows.

## 33. Charts and dashboards

- A chart should answer a question, not just decorate a KPI card.
- Pick visualization encoding based on comparison, trend, distribution, composition, or relationship.
- Axes need units, sensible bounds, and tick formatting; avoid misleading scales.
- Hover tooltips must not flicker as the pointer moves across dense points.
- Provide keyboard and touch access to data values where practical, plus a table alternative for accessibility or precision.
- Color palettes must be distinguishable and consistent between legend, tooltip, and marks.
- Show empty/missing intervals honestly, not as zero values unless zero is true.
- Distinguish forecast, estimate, and observed data visually and textually.
- Keep annotation density low enough that the chart remains readable.
- Animating bars should not distract from or change interpretation of the data; honor reduced motion.
- Updates to dashboard metrics should not shift their labels or cause repeated flashy counter animations.

# Part IX — Scrolling, dragging, gestures, and touch

## 34. Scrolling feels premium when it remains yours

### 34.1 Avoid scroll hijacking

- Preserve native wheel, touch, trackpad, page-up/down, spacebar, and scrollbar interactions except in carefully scoped custom canvases.
- Do not substitute one scroll gesture with a long forced animation through multiple viewport heights.
- Smooth-scroll to a target only for a clear reason (in-page anchor, newly created item, keyboard-focused result), and honor reduced-motion settings.
- Clicking controls should not reset an unrelated scroll container to zero.
- Preserve relevant scroll position when returning from details to a list.
- Don't restore stale scroll position when the list or context changed so much that the position no longer makes sense.
- Prevent sticky headers from covering scroll-to targets using `scroll-margin`/`scroll-padding` as appropriate.

### 34.2 Scroll boundaries and nested regions

- Clearly communicate which region scrolls when a sidebar, list, editor, and page coexist.
- Prefer one main vertical scroll region on mobile unless multiple regions are truly necessary.
- Use `overscroll-behavior` intentionally to prevent nested scroll chaining, especially in dialogs or editors, but don't disable legitimate page scrolling globally.
- If a long menu scrolls, wheel input inside it should scroll that menu while it can, not the background canvas.
- Preserve a visible scrollbar or clear scroll affordance where content could otherwise look abruptly cut off.
- Avoid accidental pull-to-refresh activation in a gameplay/canvas gesture region if it interferes with intentional interaction.

### 34.3 Sticky headers, toolbars, and footers

- Sticky chrome should be compact enough that it doesn't steal the screen on small devices.
- Apply safe-area insets, adequate contrast, and sensible boundaries over content.
- Ensure focused controls are not hidden behind sticky overlays.
- Don't make a fixed bottom CTA obscure the form's last field or the on-screen keyboard.
- If a header collapses on scroll, avoid jitter at the transition threshold; use hysteresis or stable threshold handling where needed.
- Bottom bars should not jump in response to browser toolbar expansion/collapse.

## 35. Touch targets and gestures

### 35.1 Actual standards versus product defaults

- **WCAG 2.2 AA 2.5.8** specifies a **24 × 24 CSS px** target size with important exceptions, including spacing/equivalent/inline cases. This is a **minimum standard**, not an ideal phone target.
- Apple design tips recommend **at least 44 × 44 points** for touch controls. Other platforms may prescribe different dimensions.
- For custom touch-first components, target roughly 44–48 platform points/dp as a **design heuristic**, increasing for high-stakes or motor-demanding actions, while following platform guidance.
- A 24 px icon can sit in a 44 px hit region; visible size and interactive size are distinct.
- Avoid tiny close icons pinned to screen edges, where safe areas and finger occlusion make them hard to hit.

### 35.2 Gesture arbitration

- Decide whether a region means **tap**, **long press**, **drag**, **swipe**, **pinch**, **scroll**, or **text selection**.
- Delay commitment to a gesture until movement passes an intentional threshold; avoid treating tiny finger jitter as drag.
- Consider direction locking: mostly horizontal movement moves carousel; mostly vertical movement scrolls page.
- Do not lock gesture to the wrong axis after a slight initial tremor.
- Handle canceled touches, app backgrounding, incoming calls, and orientation changes without leaving the surface in drag state.
- Provide non-gesture alternatives to swipe-only functions and drag-only reordering.
- Don't put important actions behind an undiscoverable long-press alone.
- Avoid claiming the whole screen as a pan handler when ordinary scrolling, tapping, or assistive gestures should work.

### 35.3 `touch-action` and gesture behavior on web

- Apply `touch-action` only to the interactive region that genuinely needs custom pointer behavior.
- For an exclusive joystick/drawing surface, `touch-action: none` may be appropriate **on that surface only**; ensure other navigation remains possible.
- For a horizontally swipeable region inside a vertically scrollable page, choose axis behavior carefully (often allow vertical browser panning with `touch-action: pan-y`) and test with real fingers.
- `pointercancel` can fire when the browser takes over scrolling; reset transient movement state gracefully.
- Avoid blanket `user-select: none` on whole apps: it breaks normal copy/select behavior. Scope non-selection to genuine controls/canvases.
- Preserve browser pinch zoom and text scaling where accessibility requires them; do not disable them for cosmetic reasons.

## 36. Drag-and-drop, reordering, and spatial manipulation

### 36.1 Initiation and feedback

- Distinguish drag intent from click intent with a suitable movement threshold or explicit handle.
- A drag handle must be visibly or contextually discoverable; reveal on focus/touch as necessary.
- On successful grab, show a picked-up treatment: lift, shadow, slight scale, or placeholder.
- Keep the drag preview anchored naturally to the pointer/finger without surprising offsets.
- Show clear insertion marker/drop target before the item is released.
- Avoid reflow so aggressive that the target outruns the pointer.
- Auto-scroll near container edges with predictable speed and stop immediately when no longer needed.

### 36.2 Dropping, snapping, rollback

- Valid targets should highlight; invalid targets should visibly refuse without implying success.
- Commit once on valid drop; if unsuccessful, return the item to its origin with restrained motion.
- Snap behavior should be predictable and proportional to movement rather than random magnetism.
- Preserve row/object identity and selection after reorder.
- Support undo for reordering when meaningful.
- Provide an accessible non-drag alternative such as move-up/down, select-destination, or editable position.

### 36.3 Canvas and editor detail

- Hit testing must use world coordinates/zoom transforms correctly.
- Cursor feedback should indicate hoverable handles, selectable objects, rotate, resize, and panning modes.
- Moving one object should not accidentally pan the canvas.
- Multi-select, shift constrain, snapping, alignment guides, and nudging should have stable predictable rules.
- Preserve object alignment when resizing containers or zooming.
- Give a way to reset viewport/zoom and find the active selection again.

## 37. Carousels and horizontal swipe surfaces

- Make adjacent content or pagination/navigation indicate that more items exist.
- Allow buttons, indicators, keyboard, and accessible navigation—not swipe alone.
- Limit auto-play, provide pause controls where applicable, and avoid moving content while someone is trying to read/interact.
- Snap to full logical items rather than leaving a half-misaligned state unless a deliberate peeking layout is used.
- Maintain item identity when content changes or images load.
- Avoid swipe capturing vertical page scroll at a diagonal angle.
- Consider RTL direction conventions.

---

# Part X — Motion, animation, and tactile causality

## 38. Motion has a job

Every animation should do at least one of these:

1. **Show cause/effect**: the clicked thing changes state in a visible, local way.
2. **Maintain continuity**: the object appears to move between logical positions rather than teleport.
3. **Explain hierarchy**: a sheet emerges from the control or edge associated with it.
4. **Communicate state**: saving, selection, progress, completion, error.
5. **Guide attention**: call attention to what changed, without fighting user intent.
6. **Express character**: add small moments of delight where they don't slow repeated workflows.

If it performs none of these, remove it.

## 39. Timing, curves, and distance — **heuristics, not laws**

A useful starting palette for normal-density interfaces:

| Interaction | Starting duration | Notes |
|---|---:|---|
| Press/hover visual feedback | ~60–140 ms | Can be near-instant; don't slow direct input |
| Small tooltip/menu reveal | ~100–180 ms | Often favor opacity/short translation |
| Local toggle/selection state | ~120–220 ms | Maintain immediate perceived feedback |
| Popover/small dialog | ~150–250 ms | Opening faster than large scene transitions |
| Sheet/panel movement | ~200–350 ms | Depends strongly on size/distance/platform |
| Complex page-level shared transition | ~250–450 ms | Avoid if repeated navigation feels blocked |

These are **design starting points**, not research-backed universal optima, and not accessibility requirements. Test real device refresh rates, workload, and interaction frequency. At 60 Hz one frame is about 16.7 ms; at 120 Hz one frame is about 8.3 ms. A blocked main thread ruins even a perfect easing curve.

### 39.1 Easing vocabulary

- **Ease-out / deceleration:** Good default for something entering and coming to rest; perceived response is prompt.
- **Ease-in / acceleration:** Appropriate for something leaving the user's attention, but avoid sluggish starts on direct action.
- **Ease-in-out:** Useful for larger symmetrical spatial moves; can feel slow on tiny repeated controls.
- **Spring:** Useful when physical continuity or direct manipulation matters; tune stiffness/damping to avoid comedic overshoot.
- **Linear:** Good for steady progress/spinners only when physically meaningful; usually poor for UI positioning.

### 39.2 Distance should affect motion

- A panel moving 600 px may need a different timing curve than a 6 px tooltip shift.
- Keep motion spatially plausible: a dialog should not fly across the entire screen if it's meant to be local.
- Use scale carefully. Strong pop/bounce on routine actions can look cheap and tiring.
- Don't animate from `scale(0)` for every popover; it may imply an undesired theatrical origin.

## 40. Interruptible and reversible animation

- New input should win over decorative animation: if the user closes a dialog mid-open, reverse or settle naturally, don't wait for the entrance to finish.
- Avoid temporary locks where the user cannot interact during a trivial transition.
- If the user rapidly toggles a setting, the displayed state should track the latest intent without queueing every transition.
- Spring systems should update targets rather than restarting from unrelated canned keyframes.
- Don't allow `onAnimationEnd` race conditions to set stale state after a newer interaction.
- For a component that unmounts after an exit animation, maintain accessible/focus behavior throughout closing.

## 41. Shared element and layout transitions

- Preserve object identity visually when opening details from a card, expanding a section, or rearranging a grid.
- Transitions should reinforce which object moved where.
- Avoid morphing between visually unrelated objects solely to show technical skill.
- Do not animate layout if it causes text/content jumping during reading or active selection.
- Use transform/opacity for high-frequency animation when possible; be aware that layout animations may be necessary but more expensive.
- Large view transitions should be skipped/reduced for reduced-motion users and on hardware where they cannot remain smooth.

## 42. State-specific microinteractions

### 42.1 Buttons

- Press: slight inward feedback, tint shift, or platform-native press effect.
- Success: perhaps a short check or label update for meaningful operation.
- Error: clear inline message; an optional tiny restrained shake must not be the sole error indicator.

### 42.2 Checkboxes and radio controls

- The check/selection should appear at the moment of successful activation.
- Match the transition direction to state change; avoid long ornamental line drawings for every list checkbox.

### 42.3 Tabs and segmented controls

- Shared selection pill or underline can move between positions to preserve continuity.
- The content update should not lag so far behind the indicator that state feels inconsistent.

### 42.4 Expand/collapse

- Use smooth height/opacity only when measured correctly; avoid `max-height: 9999px` hacks that produce unpredictable timing.
- The trigger's icon should reflect open state and remain reachable after layout change.
- Don't animate large sections that force the entire document to reflow slowly.

### 42.5 Reorder and removal

- Maintain positional continuity; displaced neighbors should settle without teleporting.
- For deletions, use brief removal and undo while preserving surrounding orientation.
- In virtualized lists, avoid animated insertion that fights measurement or shifts focus unpredictably.

## 43. Reduced motion and sensory preferences

- Honor OS/browser reduced-motion settings (`prefers-reduced-motion` on the web, equivalent platform APIs elsewhere).
- **Reduce** nonessential scale, parallax, auto-motion, and large spatial travel; replace with immediate updates or short fades where appropriate.
- Don't interpret reduced motion as "turn every animation into 0.01 ms" without considering essential orientation and platform semantics.
- Avoid flashing/flickering effects that risk photosensitive reactions and respect applicable WCAG criteria.
- Offer pause/stop for auto-moving content when required; never force endless celebration animations.
- Ensure information remains accessible with animation disabled.

## 44. Haptics and sound design

- Haptics should reinforce a clear physical or semantic event: a snap point, completed move, successful selection, boundary, or important warning.
- Distinguish subtle selection ticks from strong error/confirmation patterns according to platform vocabulary.
- A haptic is **supplementary**; success/error must not depend on feeling it.
- Do not vibrate for each keystroke, hover, scroll increment, or high-frequency animation frame unless platform-standard and wanted.
- Respect device settings and provide an app-level off/mute option when appropriate.
- Sound is most useful for causality, delight, and feedback in games or media-rich apps; avoid surprise volume and auto-play.
- Use short, coherent audio assets and control their mixing; do not layer multiple SFX so they clip or overwhelm narration.
- Match haptic and sound timing to the actual committed event—not a guessed timer.

---

# Part XI — Speed, async operations, reliability, and trust

## 45. Perceived responsiveness

- Give feedback immediately for input (pressed state, local edit), even when completion takes longer.
- Keep visible UI interactive during unrelated background work.
- Avoid an unnecessary spinner between every tap and every view: if cached data is usable, display it with a freshness cue if needed.
- Use optimistic UI only when rollback/reconciliation is reliable and users understand pending state when it matters.
- Prevent double submission and duplicate side effects at both interface and backend levels.
- Prefer progressive rendering for content-heavy screens rather than waiting for every peripheral asset.

### 45.1 Understanding response thresholds

Classic usability literature describes ~0.1 s as feeling instantaneous, ~1 s as often preserving the train of thought, and ~10 s as a limit for keeping attention on the task. These are **human-factors reference points**, not promises, hard product SLAs, or a substitute for real-world measurement.

- Short operations: immediate pressed feedback and result may be enough.
- Noticeable operations: local busy state is useful, but avoid rapid flashing.
- Longer operations: progress, cancellation, partial work, or alternate actions become more important.
- Very long operations: allow the person to leave and return if task architecture supports it; never trap them staring at a spinner.

## 46. Skeletons, spinners, and progress bars

- **Skeleton:** best when a view's structural content is genuinely loading and its final layout is predictable.
- **Spinner:** best for a small local wait when exact amount of work is unknown.
- **Determinate progress bar:** best when progress can be reliably measured.
- **Inline text:** best for noncritical background states (`Syncing changes…`).
- Don't use skeletons for quick loads that flash and disappear; they can make the UI feel slower.
- Skeleton geometry should match the final content's hierarchy and dimensions; otherwise the layout will jump.
- If a process has real stages, show honest stage status (uploading → processing → saving) instead of fake percentage.
- Avoid progress that races to 99% then stalls indefinitely.
- Allow cancellation when feasible and safe; clearly distinguish `Cancel` from `Dismiss` if closing does not stop work.
- Prevent page content from jumping when loading indicators appear/disappear.

## 47. Network error and retry behavior

- Distinguish offline, timeout, permission denied, missing resource, validation error, rate limit, and server failure when they have different recovery routes.
- Retry transient requests with bounded exponential backoff and jitter when appropriate; do not spam servers or re-run unsafe non-idempotent actions blindly.
- Expose a manual retry where automatic retry is insufficient.
- Preserve local input and user selections when a request fails.
- When showing cached/stale information, label freshness honestly.
- Provide actionable error copy: what failed, what did not happen, and what to do.
- Handle expired sessions by saving local drafts where feasible and restoring the flow after authentication.
- Never show `Success` merely because a request was sent.

## 48. Optimistic updates without lying

- Safe candidates: liking an item, rearranging local preference order, toggling reversible state.
- Riskier candidates: payments, deleting shared data, transferring ownership, permission changes.
- For optimistic changes, identify a rollback plan, network confirmation event, and conflict policy.
- If an update rolls back, make the reason visible without punishing the user or scattering data unexpectedly.
- Prefer pending indicators for actions where finality matters; don't imply irreversible success during an uncertain network request.

## 49. Caching, stale state, and realtime updates

- Cache data to keep interfaces fast while exposing appropriate freshness and refresh controls.
- Do not let background refresh override text being actively edited.
- Preserve selection by stable ID instead of array index during inserts, sorting, and live updates.
- For collaboration, show who edited/locked an object when relevant and avoid sudden unexpected overwrite.
- Use conflict resolution, server revisions, or operational transforms/CRDTs where justified by collaborative complexity.
- If remote state invalidates a visible action, explain it and offer a recovery path.
- Reconnect gracefully after sleep/offline; avoid duplicate notifications and actions.

## 50. Web performance targets and metrics

For web experiences, Google's documented **Core Web Vitals** 'good' thresholds are:

| Metric | Good threshold | Measures |
|---|---:|---|
| LCP | ≤ 2.5 s | Loading of main visible content |
| INP | ≤ 200 ms | Responsiveness to interactions |
| CLS | ≤ 0.1 | Visual stability |

These are assessed at the **75th percentile**, segmented appropriately (for example mobile and desktop). They are not blanket guarantees that every interaction is good, and native app metrics differ.

### 50.1 Practical engineering work

- Minimize main-thread blocking and expensive React component trees on each keystroke.
- Virtualize genuinely large lists, but preserve focus, screen-reader usefulness, height measurements, and scroll.
- Defer nonessential analytics, decorative animations, and below-fold content when they compete with primary UI.
- Preload truly critical assets, not every image and every icon.
- Reserve aspect ratios/dimensions for images and ads to reduce layout shift.
- Avoid huge translucent blur regions when scrolling or animating.
- Precompute expensive derived data and memoize only after profiling shows value.
- Separate high-frequency pointer/scroll updates from expensive application-wide state updates.
- Test low-end phones and high refresh rate displays; a 120 Hz device is not permission to double work per frame.
- Measure in production with real-user monitoring; dev desktop results alone are misleading.

---

# Part XII — Responsive, platform, device, and content adaptability

## 51. Responsive is not merely breakpoints

- Design behavior around available **space**, content density, input method, and posture, not only device labels.
- Use fluid layout, min/max constraints, intrinsic sizing, container queries where useful, and meaningful breakpoints driven by content.
- Do not hardcode a fixed board/media/canvas size that overflows on smaller screens.
- Distinguish narrow-but-tall and wide-but-short windows; keyboard presence reduces available height dramatically.
- A tablet does not automatically warrant a permanent side rail; add secondary columns only when they help the main task.
- Prevent horizontal scrolling except for surfaces that intentionally need it (tables, timeline, canvas).
- Switch complex menus to touch-friendly panels or sheets when hover is unavailable.
- Keep primary content proportionally dominant as screen size changes.

## 52. Safe areas, browser chrome, and orientation

- Honor notches, rounded corners, home indicators, system bars, and display cutouts.
- Use dynamic viewport sizing (`dvh`/platform-safe APIs) when the virtual keyboard and browser UI change available space.
- Avoid putting controls under gesture navigation areas or behind system bars.
- On orientation change, preserve work, scroll context, and selection while recomputing layout.
- Avoid assumptions that a screen is full-screen merely because its width is large.

## 53. Multi-input environments

- Hybrid devices may have **touch plus mouse plus keyboard**. Do not infer exclusively touch or exclusively pointer from screen width.
- Use hover media queries for *enhancement*, not as the sole route to a feature.
- Adapt precise cursor hover effects for fine pointers while preserving large targets for coarse pointers.
- Keyboard focus and pointer hover must coexist without fighting over selection.
- Stylus input may require precision and palm rejection in drawing contexts.
- External gamepads can provide navigation on tablets/desktop when relevant.

## 54. Localization, RTL, and dynamic content

- Leave enough space for translations that are significantly longer than English.
- Use CSS logical properties to support writing directions and avoid hardcoded left/right where possible.
- Directional navigation and icons must follow locale expectations, while non-directional shapes should remain unchanged.
- Dates, phone numbers, currency, addresses, and sorting rules are locale-sensitive.
- Dynamic labels should wrap gracefully without covering nearby buttons.
- Test mixed RTL/LTR text, emojis, multi-codepoint characters, and accessibility font scaling.

---

# Part XIII — Accessibility as interaction quality

## 55. Keyboard-first completeness

- All core actions MUST be operable without a mouse unless their essential nature requires a special input and standards permit it.
- Use semantic HTML/native elements when possible: they already provide activation, focus, and assistive-technology semantics.
- Define a logical Tab order matching the reading and visual flow.
- Use arrow keys within composite widgets such as menus, listboxes, grids, and tablists according to the appropriate ARIA pattern.
- Never trap focus except intentionally within a correctly implemented modal dialog.
- Escape should close temporary surfaces without unexpected data loss.
- When a menu/dialog closes, return focus to a logical location; when the opener disappears, pick a safe fallback.
- Ensure keyboard users can reach actions hidden on hover.
- Don't bind single-letter global shortcuts that trigger while the user types in editable fields.
- Let native text editing shortcuts work unless a deliberate editor mode clearly overrides them.

## 56. Focus-visible as a first-class design element

- Use a clearly visible focus ring, inset highlight, underline, or equivalent with adequate contrast.
- Do not remove native outlines without replacing them.
- Prefer `:focus-visible` for keyboard emphasis where supported, while maintaining usable focus presentation for other modalities as required.
- Ensure the focus indicator is not clipped by overflow-hidden parents.
- Focused controls must not be fully hidden under sticky content; stronger designs keep them entirely visible.
- The focused option, selected option, and hovered option must remain distinguishable.
- On dynamic inserts/removals, move focus intentionally rather than letting it vanish to document body.

## 57. Screen-reader semantics and announcements

- Use headings, labels, fieldsets, landmarks, buttons, links, and list/table semantics appropriately.
- Give icon-only buttons accessible names that express actions (`Close dialog`, `More actions for Project X`).
- Mark purely decorative icons appropriately so they are not read out as noise.
- Associate form errors with fields and announce updates as needed.
- Use live regions sparingly for meaningful asynchronous status, not every animation frame or hover change.
- Use `aria-expanded`, `aria-pressed`, `aria-selected`, `aria-checked`, `aria-current`, `aria-busy` only when they accurately describe behavior/state and belong to the chosen pattern.
- Do not add `role=menu` to arbitrary lists unless you implement the keyboard interaction contract.
- Don't mark a non-modal visual popup `aria-modal=true`.
- Read complex dialog content logically rather than dumping every paragraph into one inaccessible announcement.

## 58. Accessibility-specific motion, input, and reading quality

- Reduced-motion users must not be forced through large parallax or zoom sequences.
- Large text/zoom must not make buttons unreachable or text overlap.
- Provide a non-drag pointer alternative to drag operations where required by WCAG 2.2 AA 2.5.7.
- Respect pointer target minimums and spacing rules; use larger practical targets on touch.
- Avoid color-only status differentiation.
- Support text selection and magnification except on deliberately interactive non-text surfaces.
- Verify meaningful controls work in high-contrast/forced-colors modes where applicable.
- Provide visible text or captions for sound-only information; haptics alone are insufficient.
- Manage timeout warnings and extendability where needed for time-limited tasks.

## 59. Accessibility audit flows

1. Unplug the mouse: use Tab, Shift+Tab, Enter, Space, arrows, Escape, Home/End.
2. Test modal open, nested menu navigation, form errors, autosave errors, and return focus.
3. Zoom browser to 200% and 400% where the relevant criteria apply; inspect reflow and control reachability.
4. Test keyboard focus under sticky headers/footers.
5. Test screen reader labels and announcements on the actual platform (e.g. VoiceOver, TalkBack, NVDA).
6. Enable reduced motion and high contrast/forced colors; check status remains understandable.
7. Test with one finger, imprecise taps, and unable-to-drag interaction alternatives.
8. Verify orientation and text enlargement without clipped content.
9. Re-test accessibility after portaling, virtualization, animation, and custom gesture work.

# Part XIV — Content design, onboarding, discoverability, and emotional tone

## 60. Microcopy is an interface component

- Prefer verbs that identify outcomes: `Share link`, `Move to archive`, `Reset puzzle`.
- State consequences before a high-impact action: `Delete 18 selected files` is better than `OK`.
- Avoid emotional overperformance for routine actions. A small confirmation beats a full-screen celebration after changing a setting.
- Write empty-state copy that tells the user what is absent and what they can do next.
- Error text should say what happened, whether their data is safe, and the next step.
- Tone must adjust to severity: playful for optional delight, calm for failure, sober for financial/security consequences.
- Avoid software-internal jargon where the user's mental model has a simpler word.
- Keep the same term for the same entity across nav, buttons, dialog titles, and settings.
- For irreversible operations, use specific nouns and counts instead of generic warnings.

### 60.1 State-specific copy examples

| Situation | Weak | Better |
|---|---|---|
| Empty project list | `No data` | `No projects yet. Create one to organize your work.` |
| Save failed | `Something went wrong` | `Couldn't save changes. Your edits are still here. Retry.` |
| Action successful | `Success!` | `Link copied` |
| Search empty | `0 results` | `No matching files. Try a different keyword or clear filters.` |
| Destructive confirmation | `Are you sure?` | `Delete 18 selected files? This cannot be undone.` |
| Permission blocked | `Access denied` | `Camera access is off. Enable it in settings to scan documents.` |
| Pending state | `Done` (before commit) | `Uploading… You can keep working.` |

## 61. Progressive disclosure and discoverability

- Hide **complexity**, not **capability**. Users must still know advanced actions exist.
- Use familiar entry points: `More`, overflow menu, settings, keyboard-shortcuts reference, contextual toolbar.
- Avoid burying daily-use actions three menu levels down in the name of minimalism.
- Surface relevant features after a related task begins, not as an unrelated interruption.
- Expose contextual affordances on pointer hover **and** keyboard focus; touch needs a durable action route.
- Provide a discoverable way to learn shortcuts (menu hints, shortcut overlay, `?` where appropriate).
- Don't build a 'clean' UI so empty that people must reverse-engineer it.

## 62. Onboarding and first-run experiences

- Show the core value quickly. Avoid forced seven-step tours before the first useful action.
- Ask for permissions only at the moment their value is understandable.
- Provide safe sample data only when it helps users grasp an otherwise empty tool, and label it unmistakably as sample data.
- Allow tutorials/help to be skipped and reopened.
- Progressive guidance should disappear when mastered and never cover the object the user needs.
- Offer contextual hints for complex gestures, but also provide alternatives.
- Remember onboarding progress where reasonable; don't restart the walkthrough every session.
- Respect experienced users: imports, templates, keyboard shortcuts, and bulk actions should be available early.

## 63. Empty, zero, and edge-case states

A UI must intentionally distinguish:

1. **No objects exist.** Offer creation/import/start.
2. **Objects exist, but filters remove all.** Offer clear/adjust filters.
3. **The user has no permission.** Explain access requirements.
4. **Network failed.** Retry and show any safe cached content.
5. **Data is loading.** Show progress, not a false empty state.
6. **An object was deleted or moved.** Explain and navigate safely.
7. **There is nothing left to do.** Celebrate appropriately or provide next meaningful action.

Never reuse `No items found` for all seven.

## 64. Help and contextual education

- Put explanations near confusing decisions, not solely in external docs.
- Build short examples into advanced forms and filters.
- Offer a searchable shortcut/help panel for complex applications.
- Link to full documentation for deep work without forcing it into tiny tooltips.
- Ensure help reflects the current version of the interface.
- Prefer a short understandable sentence to dense jargon or oversized illustrations.

---

# Part XV — Platform trust, privacy, account, and sensitive operations

## 65. Permissions and sensitive access

- Request camera, microphone, location, notifications, file access, or contacts **contextually**, immediately before value is delivered.
- Explain why permission is needed using the user's task language.
- A refusal should preserve access to unrelated features.
- Avoid repeating OS permission prompts that can no longer appear; provide a settings path when permission has been permanently denied.
- Make ongoing recording or location usage visible where platform conventions require it.
- Don't collect more information than necessary or hide data sharing behind vague consent.

## 66. Account, sign-in, and security UX

- Support password managers, paste, autofill, and passkeys where appropriate; don't create artificial barriers to secure credentials.
- Avoid unnecessary re-authentication; require it where risk warrants, while preserving the operation in progress.
- Explicitly label sign-out, delete account, revoke sessions, and export data; do not hide consequences.
- Communicate whether an action affects one device, account, shared workspace, or all collaborators.
- Do not leak private content through notification previews, URLs, recent search suggestions, or visible locked-screen widgets.
- Display clear session-expired state and recovery rather than silently returning to an empty home screen.
- Provide a reliable `Cancel` for sensitive flows before the irreversible commit.

## 67. Commerce, payments, and high-consequence actions

- Make total price, recurring nature, taxes/fees, delivery terms, and cancellation conditions visible **before** commitment.
- Never use deceptive visual hierarchy to push a more expensive or less safe choice.
- For payments, distinguish **payment initiated**, **processing**, **completed**, and **failed**. Do not invent completion because a loading screen ended.
- Avoid allowing accidental duplicate payment through retries or double tap; use backend idempotency.
- Confirm successful transactions with a persistent receipt or retrievable history, not only a transient toast.
- Keep previous form values on recoverable error but never expose sensitive credentials or payment details unintentionally.

## 68. Notifications and interruption budget

- Notifications should carry actionable, meaningful updates, not constant prompts to reopen the app.
- Group repeated updates; let users configure frequency and channels where useful.
- Don’t request notification permission at first launch without demonstrating why it helps.
- Use quiet inline indicators for low-priority state; disruptive alerts only for decisions or threats that warrant interruption.
- Avoid red badges that imply urgency for ordinary marketing content.

---

# Part XVI — Media, creative tools, and games

## 69. Images, galleries, and media surfaces

- Honor original aspect ratio unless cropping is a deliberate art-direction choice; make crop predictable.
- Reserve image dimensions to prevent content shift; load correct-resolution variants for screen density.
- Handle failed/slow image loads gracefully without broken layout.
- Zoomable galleries need visible exit/back, accessible navigation, and natural pinch or wheel behaviors.
- Use an appropriate loading indicator for high-resolution zoom transitions, rather than replacing an image with blank space.
- Don't steal text selection or page gestures for an unrelated image interaction.
- For auto-playing videos, respect user expectations, muted-play policies, captions, and pause controls.

## 70. Canvas, creative editor, and professional tools

- The canvas should be the hero; utility UI should retract or compress as task focus deepens.
- Keep tool palette position, zoom, snapping, and grid preferences consistent.
- Cursor mode must match current action: select, draw, pan, crop, resize, erase.
- A user should never wonder whether an action applies to the current layer, selection, or entire document.
- Add non-destructive editing where feasible and keep history reliable.
- Use visible affordances for alignment, snapping, handles, rotation, and bounding boxes.
- Preserve selection when switching non-destructive tools, unless the tool intentionally resets it.
- Zoom around the pointer or selected object when that is the user expectation, rather than jumping to the wrong origin.
- Provide keyboard nudge and explicit numeric property entry for precision work.
- Avoid frame-by-frame full-page rerenders for pointer movement; isolate high-frequency updates.

## 71. Games: premium interaction is different from a generic dashboard

### 71.1 Board/gameplay hierarchy

- The game board or playfield is the dominant visual surface.
- Keep game-specific status (turn, timer, score, objective) readable but compact.
- Place move-assisting controls near the board; session management belongs in predictable settings or pause areas unless immediate replay is part of the game flow.
- Prefer a consistent shared visual language without forcing all genres to look or behave identically.
- Do not fill available screen space with ornamental headers while shrinking the playable area.
- Board geometry must adapt to phone/tablet/landscape without cropped cells or stretched grids.

### 71.2 Input integrity

- Touch gestures should never unintentionally scroll the entire page while drawing or manipulating a board.
- Scope `touch-action` and selection suppression to the gameplay surface/control regions, not the whole document.
- Virtual D-pads/joysticks need proper down/move/up/cancel state, continuous response when desired, and no stuck directions after pointer release.
- A directional control should respond to repeated presses and held input according to the game mechanic; avoid dropping inputs because animation hasn't ended when queueing is intended.
- Disable impossible moves with correct feedback, not silent no-ops that look broken.
- If undo is a supported mechanic, make availability and consequences clear.

### 71.3 Game feedback and pacing

- Input response is immediate even if the game logic later animates the result.
- Move animations should clarify the changed cells/pieces, not obstruct the next turn unnecessarily.
- Use restrained success/haptic/audio cues according to event significance: small for placing piece, larger for win.
- Ensure animation locks cannot trap gameplay after reset, pause, background/foreground, or rapid repeated taps.
- On completion, reveal result clearly and provide a sensible route to retry/new game without obscuring the final board instantly.
- Preserve score/timer semantics through pause/resume and device sleep.
- Difficulty/setup changes should not silently restart ongoing play without appropriate explanation.

### 71.4 Game visual precision

- Pieces align to cells regardless of scale; fractional widths should not generate accumulating drift.
- Icons and number glyphs are optically centered and remain readable at smallest cells.
- Selected/possible/invalid/last-move cells use distinguishable, consistent states.
- Avoid unnecessary board shadow/border layers that reduce playfield size.
- Check short phone, large tablet, reduced motion, touch accuracy, and one-hand use.

---

# Part XVII — Engineering the polish rather than approximating it

## 72. Design tokens as executable contracts

Use semantic tokens for all shared visual decisions, for example:

```css
:root {
  /* Illustrative starter values; review per product and platform. */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;

  --radius-control: 0.625rem;
  --radius-card: 0.875rem;
  --radius-dialog: 1.125rem;

  --duration-feedback: 110ms;
  --duration-small: 170ms;
  --duration-panel: 260ms;
  --ease-out-ui: cubic-bezier(.2, .8, .2, 1);

  --surface-page: #f8f9fa;
  --surface-card: #ffffff;
  --text-primary: #17191d;
  --text-secondary: #4b5563;
  --border-subtle: #d5d9df;
  --accent: #2859bd;
  --focus-ring: #2254c5;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-feedback: 0ms;
    --duration-small: 0ms;
    --duration-panel: 0ms;
  }
}
```

**Important:** Hex tokens above are schematic, not certified contrast pairs. Validate every role against its foreground/background combinations and states. A real design system should separate primitive palette tokens, semantic role tokens, component tokens, typography, elevation, density, motion, and platform adaptations.

## 73. Focus-visible and hit-target starter pattern

```css
.icon-button {
  appearance: none;
  display: inline-grid;
  place-items: center;
  min-inline-size: 44px; /* product target, not WCAG universal minimum */
  min-block-size: 44px;
  border: 0;
  border-radius: var(--radius-control);
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
}

@media (hover: hover) and (pointer: fine) {
  .icon-button:hover {
    background: rgba(0, 0, 0, .06);
  }
}

.icon-button:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

.icon-button:active {
  transform: scale(.97);
}

@media (prefers-reduced-motion: reduce) {
  .icon-button:active { transform: none; }
}
```

The design should not depend solely on `:active` for state (touch and keyboard timing differ). Real designs need light/dark themes, forced-colors testing, disabled state, and platform adaptation.

## 74. Safe polygon implementation starter (React)

For a floating hover card or submenu where leaving the parent shouldn't immediately close the child:

```tsx
import { safePolygon, useHover } from '@floating-ui/react';

// Inside your floating component, after you obtain `context`:
const hover = useHover(context, {
  handleClose: safePolygon({
    requireIntent: true,
    buffer: 1,
  }),
});
```

**Crucial integration caveat:** This handles travel between a reference trigger and its floating child, but a fully polished **nested command menu** must additionally ensure that crossing a sibling parent row during the intended travel does not prematurely make it the new active parent. Coordinate hover intention with **menu selection state** and the actual pointer geometry. Never paste the snippet and assume that all nested-menu race conditions are solved.

**Test:** right-facing and left-facing children; viewport flip; nested scroll; moving at different speeds; moving away to a new parent; mouse vs pen; keyboard-opened submenu.

## 75. Component-level interaction specs (recommended format)

For every reusable component, write an explicit contract:

```md
### Component: [Name]
**Purpose:** What user task it supports.
**Anatomy:** Trigger, icon, label, body, hint, close, etc.
**States:** default / hover / focus / pressed / selected / disabled /
          loading / success / error / empty.
**Inputs:** mouse / touch / pen / keyboard / switch / screen reader.
**Activation:** event, timing, whether effect commits on up or down.
**Dismissal:** Escape, outside click, navigation, timeout, cancellation.
**Focus:** initial, contained/roving, return/fallback.
**Layout:** min/max, collision, safe areas, zoom, RTL, overflow.
**Motion:** causal purpose, duration hypothesis, interruption, reduced motion.
**Data:** optimistic/pending/confirmed/error/conflict behavior.
**A11y:** semantic roles, accessible name, state, announcements.
**Failure cases:** no network, rapid repeat, resize, unmount, stale request.
**Acceptance tests:** observable Given/When/Then scenarios.
**Design tokens:** role colors, spacing, type, shape, elevation, motion.
```

## 76. Prefer state machines to scattered booleans

A menu with booleans like `isOpen`, `isClosing`, `hasHover`, `isDelayed`, `isSubmenuOpen`, `isKeyboardMode`, and `isAnimating` can enter contradictory combinations. Model meaningful states/transitions explicitly.

**Example nested menu states:** `closed`, `open-pointer`, `open-keyboard`, `subnav-traversing`, `closing`; with events `OPEN`, `HOVER_PARENT`, `LEAVE_PARENT`, `ENTER_SUBMENU`, `HOVER_SIBLING`, `ESCAPE`, `CLOSE`, `LAYOUT_CHANGE`.

**Example async save states:** `clean`, `dirty`, `saving`, `saved`, `offline`, `error`, `conflict`.

- Ensure each event has defined outcomes for each state.
- Discard stale async completion events using version/request identity.
- Explicitly reset ephemeral state on unmount, route change, cancellation, and app background.
- Separate visual animation completion from business-operation completion.

## 77. Focus and layer orchestration architecture

- Centralize overlay stacking rules and focus-management primitives.
- Create reusable dismissal behavior that handles pointer-down outside, Escape, nested portals, and returning focus.
- Avoid writing a fresh half-working focus trap for every dialog.
- Provide a global keyboard shortcut registry with scope/priority to prevent conflicts.
- Avoid styling fixes that rely on broad `pointer-events: none` on ancestors without testing keyboard and scroll.
- Use component boundaries that isolate frequent animation updates from unrelated page content.

## 78. Design-system documentation must include behavior

Document more than static screenshots:

- Anatomy, variants, props, and design tokens.
- Interaction state table and input modalities.
- Keyboard maps and focus management.
- Overlay placement and collision examples.
- Error, offline, empty, and loading variants.
- Motion curves, interruptibility, reduced-motion mode.
- Accessibility expectations and automated/manual tests.
- Forbidden patterns and known caveats.
- Small-screen and RTL examples.

A component library with 100 beautiful default-state screenshots but no focus or error behavior is not a mature design system.

# Part XVIII — The invisible polish: advanced edge cases

## 79. Stable geometry and avoiding accidental movement

- **No hover-induced reflow:** Hover emphasis should not change button dimensions or shift adjacent controls unless expansion is an explicit feature.
- **No loading-induced reflow:** Reserve icon/progress width to prevent a button or toolbar from jumping.
- **No font-swap surprise:** Ensure fallback font proportions don't substantially move critical content after load.
- **No late banner occlusion:** Cookie/session banners shouldn't cover an active CTA without allowing dismissal or repositioning.
- **No cursor-chasing menus:** Position menus from a stable anchor, not on every pointer move unless a specific menu behavior demands it.
- **No stale overlay coordinates:** Reposition after layout changes and virtual keyboard movement.
- **No floating-point layout drift:** Grids and boards need deterministic sizing so the last column isn't clipped or offset.
- **No endless resize feedback loop:** Observers should not trigger layouts that alternate between two dimensions.

## 80. Hysteresis and debouncing user intent

Hysteresis means requiring a meaningfully different threshold to enter and leave a mode, so a UI does not chatter at a boundary.

- Collapse a sticky header after a meaningful scroll distance; expand after a different reversal threshold rather than twitching on every 1 px scroll.
- Use separate drag-start and drag-end rules, not one ambiguous motion condition.
- Avoid changing an active navigation target based on one tiny pointer movement at a diagonal menu crossing.
- For hover previews that are expensive, consider velocity and dwell instead of delay only.
- Debounce **side effects** (network search, autosave); do **not** debounce the text or pointer feedback itself.
- Use throttle/coalescing for continuous expensive rendering, but keep the latest position rather than processing an obsolete queue.
- Timers must be canceled/reset when related context changes or components unmount.

## 81. Input modality transitions

- A keyboard-opened menu should not instantly jump selection due to an old mouse position already over a row.
- When the pointer **actually moves** after keyboard navigation, intentionally decide when pointer-based active selection resumes.
- Opening a dialog with a mouse doesn't remove the need for keyboard focus handling.
- Switching from stylus to finger should not leave the app in an incompatible precision-only mode.
- Touch-generated synthetic mouse events must not trigger duplicate actions.
- Gamepad focus and touch selection need one coherent notion of current action without simultaneous competing visual markers.

## 82. Dynamic item lists and selection preservation

- Use stable IDs for rows, cards, menu items, and command results; never rely on rendered index after sorting/filtering.
- After deletion, choose next or previous logical focus/selection; do not leave focus on a removed element.
- After creating an object, reveal it and give suitable focus without surprising page-wide scroll.
- After filtering, don't pretend a selected hidden item has been deleted; indicate hidden selection when bulk actions could still affect it.
- During live updates, avoid auto-sorting rows while the user is clicking or editing them if it could cause misclicks.
- If a list's contents change drastically, show an update indicator and offer to apply new ordering when appropriate.

## 83. Timing races in overlays

- Opening a popup via pointer-down then detecting outside-click on pointer-up must not close it instantly.
- Opening multiple nested layers needs one **topmost dismissible layer** policy.
- Escape should close the correct layer before affecting the page below it.
- A backdrop click must not pass through to an underlying destructive button when the top dialog disappears.
- Closing an overlay during a route transition must not restore focus to a DOM node from the old route.
- Error/success callbacks from an unmounted dialog must not reopen it unexpectedly.
- Animation-completion callbacks must verify that the state they are completing is still current.

## 84. Text measurement and content surprises

- Test one-letter titles, very long titles, paragraphs without spaces, combined emoji, and languages with different line breaking.
- Buttons with long translated labels should wrap thoughtfully or change layout; they should not overlap other controls.
- Avatar fallback initials must remain aligned across font families.
- Numeric counters should avoid jitter when digits increase from 9→10 or 99→100; use tabular figures and reserve space when sensible.
- Long accessible names should remain useful without making visual tooltips gigantic.
- Line clamps require full-content access where the hidden text matters to decisions.

## 85. Dark mode as its own design, not color inversion

- Use surface and border separation instead of relying on nearly invisible dark shadows.
- Control saturation and luminance so accent colors don't vibrate against dark backgrounds.
- Verify hover/pressed/focus/selection contrasts separately in both modes.
- Ensure charts use dark-mode appropriate strokes, gridlines, and tooltips.
- Avoid pure-black everything when it loses hierarchy; however don't assume OLED pure black is always wrong—context matters.
- Test images with transparent backgrounds and dark-on-transparent logos.
- Honor system appearance preference where relevant, with explicit override when offered.
- Avoid white flashes during route/loading transitions in dark mode.

## 86. Precise visual affordances

- If text looks clickable, it should behave like a link/button or not look clickable.
- If a row is selectable, provide a visible selected state and appropriate click target.
- If a panel is resizable, the handle should respond at its edge and show the right cursor.
- If content is draggable, make its movement threshold predictable and show a landing indicator.
- If an action is unavailable, explain why at the moment of intent when practical.
- Icons should not be overloaded with contradictory meanings across the app.

## 87. Native behavior is often premium behavior

- Use native input and selection behavior unless replacement adds demonstrable value.
- Respect platform back gestures unless the screen is a dedicated canvas/gesture interaction and conflict is deliberately resolved.
- Let iOS/Android handle system permission prompts and keyboard affordances through their APIs.
- Preserve link semantics such as opening in a new tab when appropriate on web.
- Don't make custom components worse than native controls for accessibility solely to achieve a screenshot-perfect style.

## 88. Preferences and continuity

- Remember meaningful preferences: theme, density, sidebar size, last workspace, recent document, relevant filtering choice, sound/haptics options.
- Avoid remembering temporary state that creates confusion next session (e.g. an old hover-open menu).
- Keep preferences synchronized across devices when user expectation and data model warrant it.
- Offer Reset to defaults for complex personalization while making consequences clear.
- Don't presume preference history from inferred behavior when explicit user choice would be more respectful.

---

# Part XIX — 12 concrete interaction recipes

Each recipe captures the pieces that distinguish a merely functional component from a polished one.

## Recipe A — A nested command menu that feels effortless

**Default:** Parent row shows label, optional icon, shortcut, child chevron; focus is visible.  
**Open:** Hover may open under precise pointer rules; click/keyboard provides deterministic route.  
**Travel:** Safe polygon protects diagonal motion toward child.  
**Selection:** Parent hover state is held during intended child travel; moving away switches promptly.  
**Keyboard:** Arrow navigation, submenu open/close, Escape and focus restoration.  
**Geometry:** Flip/shift and corridor update on actual side.  
**Touch:** A tap opens child as a next-level sheet/list or equivalent.  
**Stress QA:** diagonal fast/slow, short gaps, small pointer jitter, near corners, submenu left-flip, wheel/scroll while open.

## Recipe B — A primary button with honest async status

**Default:** Verb-specific label and visible affordance.  
**Press:** Immediate local feedback.  
**Pending:** Stable width, clear busy state, protection against duplicate commit.  
**Success:** State changes only when confirmed; optional concise confirmation.  
**Failure:** Button becomes actionable again; input preserved; error describes next step.  
**Cancel:** Available if process supports safe cancellation.  
**Stress QA:** rapid taps, slow network, offline, request timeout, route change, duplicate response, double-submit server protection.

## Recipe C — A modal edit form with no data loss

**Open:** Focus set to sensible place; title/description announced; background inert.  
**Editing:** Cursor remains stable; errors contextual; input remains on rerender.  
**Dismiss:** Escape/backdrop policy based on dirty state.  
**Save:** Confirmed persistence, handle failure without clearing fields.  
**Close:** Focus to opener or newly created object; exit animation doesn't allow click-through.  
**Stress QA:** keyboard only, zoom, on-screen keyboard, nested combobox, save failure, close during saving, opener unmounts.

## Recipe D — A search-as-you-type panel

**Open:** Input focused, prior recent items available if appropriate.  
**Typing:** Input echoes immediately; local matches instantaneous.  
**Remote:** Requests abort/ignore stale responses; quiet loading; no result flicker.  
**Active result:** Arrow navigation clearly visible and scrolled into view.  
**Commit:** Enter activates highlighted item; navigation/feedback occurs.  
**Stress QA:** very fast typing, slow queries, results reordered, IME, no results, RTL, screen reader, virtualization.

## Recipe E — A dismissible toast with Undo

**Trigger:** Destructive-ish but reversible local action occurs.  
**Toast:** Brief concise description and `Undo`; accessible announcement.  
**Undo:** Restores data and logical focus/selection.  
**Expiration:** Determined by task needs; shouldn't vanish during interaction.  
**Stacking:** Doesn't overlap keyboard/sheet/critical controls.  
**Stress QA:** repeated actions, multiple toasts, undo after network pending, route change, accessibility reading time.

## Recipe F — A draggable Kanban card

**Start:** Handle or unambiguous drag threshold; click not stolen.  
**Move:** Lift visual, accurate preview, auto-scroll near edges, target highlight.  
**Drop:** Reorders once, retains item identity, supports undo.  
**Alternative:** Move-to-column menu + keyboard route.  
**Stress QA:** touch page scroll, pen, trackpad, failed network commit, scroll while dragging, offscreen columns, cancel.

## Recipe G — An expandable accordion

**Default:** Title, state chevron, comfortable target.  
**Open:** Controlled height behavior; focus remains on trigger; content becomes available.  
**Close:** Hidden content removed from tab sequence; focus not lost if close initiated within content (move logically).  
**Motion:** Brief, interruptible, reduced-motion alternative.  
**Stress QA:** long content, multiple panels, dynamically loaded content, repeated rapid toggle.

## Recipe H — A resizable desktop sidebar

**Default:** Stable width, discoverable handle, logical minimum/maximum.  
**Drag:** Correct cursor, selection suppressed only while dragging, main content renders smoothly.  
**Keyboard alternative:** Adjustable via controls/keyboard where required.  
**Persist:** Reasonable across sessions, clamped on changed viewport.  
**Stress QA:** touch/stylus, pointercancel, window resizing during drag, 200% zoom, tight laptop screen.

## Recipe I — A responsive interactive board

**Layout:** Board fills logical main content width while fitting vertical usable space; no distortion.  
**Input:** Tap/swipe/drag only as game requires; no page scroll hijacking.  
**Feedback:** Immediate input acknowledgment, valid/invalid move states, concise animation.  
**State:** Turn/score remain readable without overshadowing board.  
**Recovery:** Undo/new game/reset live in appropriate controls with consistent consequences.  
**Stress QA:** tiny phone, landscape, tablet, 120 Hz device, app background/restore, double touch, win while animation running.

## Recipe J — A dashboard filter panel

**Open:** Current committed filters are visible.  
**Edit:** Controls update a draft or live preview according to explicit model.  
**Apply:** Results update and show active filters; URL reflects shareable scope when appropriate.  
**Cancel:** Returns to previously committed values if draft mode.  
**Stress QA:** network failure, stale count, multi-select, no-result state, keyboard, narrow sheet layout.

## Recipe K — An offline-capable editor

**Editing:** Local changes always remain visible.  
**Persistence:** Clean/dirty/saving/saved/offline/error/conflict states.  
**Offline:** Honest local-only label, pending queue, no fictional cloud success.  
**Reconnect:** Retry with version protection; visible conflict resolution if needed.  
**Stress QA:** refresh, app sleep, multiple tabs, simultaneous collaborator edits, storage pressure, request out of order.

## Recipe L — A media gallery overlay

**Open:** Preserve origin/context; transition only if fast and accessible.  
**Browse:** Mouse buttons, arrow keys, swipe where appropriate, screen reader names.  
**Zoom:** Pointer-centered if useful; gesture conflicts handled.  
**Close:** Backdrop/Escape and focus restore; original scroll position preserved.  
**Stress QA:** slow high-res image, orientation change, first/last item, keyboard zoom, reduced motion.

---

# Part XX — Anti-pattern blacklist

These are common reasons a polished-looking UI feels unfinished:

1. A hover submenu closes while the pointer moves diagonally into it.
2. A tooltip appears so fast and large that it covers the next control.
3. A modal closes with unsaved edits and no warning or recovery.
4. A button animates beautifully but doesn't show whether its network request failed.
5. The entire application rerenders during every pointer movement.
6. All button labels become `Loading…`, changing widths and misaligning the toolbar.
7. A global `user-select: none` prevents copying text everywhere.
8. A global `touch-action: none` prevents normal scrolling or pinch zoom.
9. Fixed-width boards/canvases overflow mobile rather than scaling thoughtfully.
10. Hover-only actions don't appear for keyboard or touch users.
11. The focus ring is removed for a cleaner screenshot.
12. A dialog's background remains keyboard-interactive.
13. Escape closes the entire app view instead of the active nested menu.
14. Active selection changes just because a stale pointer is sitting over an option.
15. A skeleton flashes during a 100 ms cached transition.
16. A success toast claims data is saved before persistence is confirmed.
17. An optimistic destructive update silently disappears after rollback.
18. Form inputs lose focus after each keystroke because their key/identity changes.
19. Autosave sends out-of-order writes that overwrite a newer draft.
20. Sorting a table clears selected rows without explanation.
21. Scroll position resets when navigating back to a list.
22. Fixed bottom controls cover the active input above the mobile keyboard.
23. Tooltips/popovers escape beyond a viewport edge.
24. Menus use giant z-index values with no shared layering model.
25. A custom context menu steals the native right-click path without equivalent options.
26. Deleting a row leaves focus nowhere useful.
27. A swipe-only destructive action has no alternative or clear recovery.
28. A drag gesture fights with the page's scroll gesture.
29. A carousel forcibly advances while the user is reading/interacting.
30. An interface uses color alone to communicate a critical state.
31. Dark mode is implemented by globally inverting colors.
32. Every object is a bordered, shadowed, rounded card, destroying hierarchy.
33. Large empty margins shrink important workspace content without benefit.
34. An animation must finish before the user can initiate the next normal action.
35. Dramatic parallax remains active despite reduced-motion preference.
36. Every small action triggers a modal confirmation.
37. A truly irreversible action looks identical to an ordinary action.
38. Password manager paste/autofill is blocked for an imagined security benefit.
39. Network retries duplicate non-idempotent transactions.
40. Keyboard shortcuts fire while typing in text fields.
41. Live result lists reorder under an active click target.
42. A tiny close icon is visually attractive but impossible to tap accurately.
43. A chart shows missing data as zero without indicating absence.
44. Microcopy alternates between `workspace`, `board`, and `project` for one object.
45. Feedback is only audio/haptic, leaving users without another channel.
46. Disabled controls have no explanation or alternate path.
47. Form validation shames the user on the first character typed.
48. The `aria` label says `button` or the raw icon name instead of the action.
49. A beautiful custom combobox lacks normal arrow-key semantics.
50. A product measures screenshot aesthetics but not task completion, failure rates, or accessibility.

---

# Part XXI — Component audit checklist (copy into issues/PRs)

> The checkboxes below are designed for manual verification; they are not a claim that any specific app already meets them.

## A. Global design system

- [ ] There is a documented type scale, color roles, spacing scale, radius/elevation system, and motion system.
- [ ] The same semantic state uses the same visual meaning throughout the app.
- [ ] Primary tasks dominate each screen; decoration doesn't crowd the task.
- [ ] Button sizes/insets/labels are visually coherent across peers.
- [ ] Nested shape radii and surface elevation are consistent.
- [ ] Icons align optically and communicate coherent meanings.
- [ ] Light/dark modes have verified contrast and distinct surface layers.
- [ ] There are no accidental 1 px seams, clipping issues, or fuzzy scaled icons.
- [ ] Real names, long translations, and very short strings fit without breaking layout.
- [ ] Motion has a purpose and respects reduced-motion settings.

## B. Pointer and touch interaction

- [ ] Fine-pointer hover styling is immediate and subtle.
- [ ] Essential actions are available without hover.
- [ ] Nested menus support diagonal safe-pointer travel.
- [ ] Sibling menu activation resumes promptly when pointer intent changes.
- [ ] Open menus track collision/flip geometry correctly.
- [ ] No invisible hit box overlaps an unrelated control.
- [ ] Hit targets are usable on touch and meet applicable standards.
- [ ] Pointer down/up/cancel and lost capture are handled.
- [ ] Multi-touch does not create duplicate interactions or stuck pressed state.
- [ ] Drag/scroll/swipe gestures are arbitrated correctly.
- [ ] Non-drag alternatives exist where required.
- [ ] Text remains selectable/copyable where appropriate.
- [ ] Browser/system back and scroll gestures are not unintentionally blocked.

## C. Keyboard and accessibility

- [ ] Every core task works without a mouse.
- [ ] Focus indication is visible, unclipped, and distinguishable from selection.
- [ ] Tab order is logical and doesn't jump to hidden controls.
- [ ] Menus/tablists/comboboxes follow their appropriate key contracts.
- [ ] Escape closes the correct temporary surface.
- [ ] Opening a dialog moves focus inside; closing returns it logically.
- [ ] Background behind modal dialogs is inert.
- [ ] Icon-only controls have accessible names.
- [ ] Status, checkbox/selection/expanded states are exposed semantically.
- [ ] Important async status is announced without announcement spam.
- [ ] Zoom and larger text do not hide content or controls.
- [ ] Screen-reader smoke tests cover core workflows.
- [ ] Color/contrast, reduced motion, and touch alternatives are verified.

## D. Menus, popovers, and overlays

- [ ] Menus open predictably by mouse, keyboard, and touch.
- [ ] Menu action vs navigation semantics are correct.
- [ ] Menu collision handling keeps all actionable content reachable.
- [ ] Tooltips don't cover triggers or force unwanted cursor detours.
- [ ] Popup dismissal doesn't accidentally click content underneath.
- [ ] Modal scroll locking doesn't shift page width/scroll position.
- [ ] Outside click handlers don't close a popup on its opening event.
- [ ] Nested overlay stack and Escape priority are deterministic.
- [ ] Focus return remains safe after an opener is removed.
- [ ] Virtual keyboards and safe areas don't hide essential sheet controls.

## E. Buttons and inputs

- [ ] Every button has default/hover/focus/pressed/disabled/pending/error behavior.
- [ ] Button labels name the intended result.
- [ ] Loading indicators don't cause distracting layout shifts.
- [ ] Double submission is prevented at UI and backend layers.
- [ ] Inputs retain focus and caret across rerenders.
- [ ] Paste/autofill/IME and native keyboard input work.
- [ ] Fields use visible labels and error association.
- [ ] Validation is specific and timed appropriately.
- [ ] Errors never silently erase user-entered content.
- [ ] Safe actions can be undone where practical.
- [ ] Destructive actions show exact scope and consequence.

## F. Loading and data integrity

- [ ] The user's action receives prompt local feedback.
- [ ] Cached/previous content is used honestly when helpful.
- [ ] Skeletons match actual layout and do not flash unnecessarily.
- [ ] Progress indicators are truthful and appropriate to operation type.
- [ ] Stale network responses cannot overwrite newer queries/edits.
- [ ] Save states distinguish dirty/saving/saved/offline/error/conflict.
- [ ] Offline changes are not mislabeled saved to remote storage.
- [ ] Error handling has retry/recovery and preserves drafts.
- [ ] Batch actions do not produce endless notification spam.
- [ ] User can cancel meaningful long work where feasible.
- [ ] Duplicate server effects are prevented for sensitive operations.

## G. Responsive and performance

- [ ] Narrow, wide, short, tall, and split-view screens have been tested.
- [ ] Tablet layout uses extra space purposefully instead of forcing side panels.
- [ ] Mobile keyboard/safe areas/orientation changes don't hide controls.
- [ ] No unintentional horizontal overflow or clipped board.
- [ ] Active scroll position and selection remain stable on reflow.
- [ ] Images have reserved layout geometry.
- [ ] High-frequency interactions don't rerender the full application.
- [ ] Low-end hardware remains usable under animation and data load.
- [ ] Web Core Web Vitals and real-user performance have been monitored where applicable.
- [ ] Performance remains acceptable in dark mode, blur-heavy overlays, and reduced-motion modes.

## H. Content, trust, and edge states

- [ ] Empty, loading, filtered-empty, no-permission, offline, and error are distinct states.
- [ ] Labels and terminology remain consistent across screens.
- [ ] Permissions are requested in context, not reflexively at first launch.
- [ ] Important outcomes are persistent or retrievable beyond a toast.
- [ ] Account/payment/delete flows honestly communicate consequences.
- [ ] No confusing hidden auto-commits or deceptive defaults.
- [ ] User preferences are respected and retained where meaningful.
- [ ] Important text can be copied, expanded, or otherwise accessed when truncated.
- [ ] Accessibility feedback works in multiple sensory channels.
- [ ] No known silent data-loss scenarios remain.

# Part XXII — Audit rubric, priorities, and release gates

## 89. Grade a screen on observable behavior

Score each dimension from **0 to 4**, with evidence:

| Score | Interpretation |
|---|---|
| 0 | Broken, absent, inaccessible, or regularly loses user work |
| 1 | Works only in the happy path; frequent friction or confusing states |
| 2 | Competent baseline; some missing states, keyboard gaps, or polish issues |
| 3 | Strong quality with complete common paths and tested edge cases |
| 4 | Exceptional; coherent, accessible, resilient, fast, and refined under stress |

Rate these dimensions separately, not as one subjective "looks premium" score:

1. **Task clarity and hierarchy.** Can a first-time user identify the next action?
2. **Interaction intent.** Does the UI handle diagonal hover, cancellation, gestures, and rapid changes correctly?
3. **Control/state completeness.** Are all interaction and async states defined?
4. **Keyboard/accessibility.** Can users accomplish the task via alternate input and assistive technology?
5. **Layout precision.** Is content aligned, sized, and optically polished?
6. **Motion quality.** Does motion explain state, remain interruptible, and respect settings?
7. **Feedback and error recovery.** Do users know what happened and how to recover?
8. **Responsiveness/performance.** Does it stay stable under load and on modest hardware?
9. **Adaptive behavior.** Does it work on mobile/tablet/desktop, zoom, dark mode, and variable content?
10. **Trust and data integrity.** Does the system protect work and communicate consequences honestly?

### 89.1 Weighted scoring option

A reasonable product-specific starting point is:

| Dimension | Weight |
|---|---:|
| Task clarity | 14% |
| Interaction intent | 12% |
| Accessibility/input | 14% |
| Feedback/recovery | 14% |
| Trust/data integrity | 12% |
| Performance | 12% |
| Adaptive layout | 8% |
| Visual precision | 7% |
| State completeness | 5% |
| Motion quality | 2% |
| **Total** | **100%** |

These are **illustrative weights**, not an industry standard. A game may put more weight on input/animation; a financial app on correctness/trust; a creative editor on spatial manipulation, history, and performance. **Any critical accessibility failure, dangerous misinformation, or data-loss defect is a release blocker irrespective of a high average score.**

## 90. Prioritize fixes by severity and frequency

Use the following triage:

| Priority | Typical issue | Action |
|---|---|---|
| P0: Blocker | Data loss, wrong financial action, core flow impossible for keyboard, crash, misleading save confirmation | Block release and fix |
| P1: Severe | Frequent submenu flicker, major viewport clipping, broken cancellation, controls unusable on common device | Fix before polished launch |
| P2: Important | Repeated layout shifts, inconsistent focus return, missing offline explanation, slow keyboard palette | Schedule in near-term release |
| P3: Polish | Small optical misalignments, mildly inconsistent shadow, optional easing refinement | Bundle in craft pass |
| P4: Optional delight | Extra character animation, sound accent, decorative transition | Only if basics already strong |

**Frequency matters:** A 100 ms hesitation experienced 50 times each session can hurt perceived quality more than a one-time 500 ms splash transition.

## 91. Repeatable test matrix

For each core component, test combinations of:

- **Input:** mouse, trackpad, finger, pen, physical keyboard, screen reader, gamepad where supported.
- **Viewport:** small phone portrait, short landscape, tablet split view, laptop, ultra-wide desktop.
- **Theme:** light, dark, high contrast/forced colors where relevant.
- **Motion:** standard, reduced motion.
- **Text:** default, enlarged, translated, very long/very short labels.
- **Data:** empty, normal, very large, stale, loading, invalid, concurrent changes.
- **Network:** fast, slow, intermittent, offline, timeout, unauthorized, server error.
- **Pace:** slow and deliberate, rapid repeated interactions, interruption mid-transition.
- **State:** before open, during open animation, fully open, during close animation, after unmount.

You need not brute-force every combination for every component. Select risk-based pairings plus focused tests for critical paths; document what was tested and what is still unverified.

## 92. Example automated acceptance cases

### 92.1 Nested menu pointer intent

```gherkin
Feature: Nested menu navigation
  Scenario: Diagonal pointer travel keeps the intended submenu
    Given the menu is open and "Share" submenu is visible
    When the pointer moves diagonally from "Share" toward its child
    And the pointer trajectory crosses the region of a sibling item
    Then the "Share" submenu remains visible
    And the sibling submenu does not replace it

  Scenario: Deliberate sibling selection still works
    Given the "Share" submenu is open
    When the pointer moves deliberately away from the submenu into "Export"
    Then "Export" becomes active without an excessive delay

  Scenario: Submenu flips to the left near viewport edge
    Given the menu is near the right viewport boundary
    When the child submenu opens on the left
    Then the safe pointer corridor follows the left-facing geometry
```

### 92.2 Autosave doesn't lie

```gherkin
Feature: Autosave integrity
  Scenario: Latest edit wins after out-of-order requests
    Given the user changes a title from "One" to "Two"
    And two save requests are started in order
    When the newer save finishes before the older save
    Then the persisted and displayed title is "Two"
    And the UI does not revert to "One"

  Scenario: Offline draft remains safe
    Given the network disconnects during editing
    When the user types additional changes
    Then those changes remain visible
    And the app does not claim they are saved to the server
    And an offline or pending state is apparent
```

### 92.3 Dialog focus and reentry

```gherkin
Feature: Dialog focus lifecycle
  Scenario: Keyboard-only modal edit
    Given a keyboard user focuses "Edit profile"
    When they activate the control
    Then focus moves into the dialog
    And Tab does not focus underlying page content
    When they press Escape without unsaved edits
    Then the dialog closes
    And focus returns to "Edit profile"
```

### 92.4 Joystick/drag cancellation

```gherkin
Feature: Gesture control
  Scenario: Releasing joystick always stops movement
    Given a player presses and drags the virtual joystick
    When the pointer is released outside the joystick bounds
    Then the joystick returns to neutral
    And no held direction persists

  Scenario: Browser takes over the gesture
    Given a custom pointer gesture is active
    When pointercancel occurs
    Then all transient gesture state is reset
```

## 93. A practical four-pass implementation order

### Pass 1 — Structural correctness

- Define screen hierarchy, responsive constraints, component anatomy, action semantics, and data ownership.
- Eliminate dead zones, overflow, unintentional navigation, and unsafe state transitions.
- Build correct empty/error/loading and focus behavior.

### Pass 2 — Interaction quality

- Add full state contracts, safe pointer intent, keyboard maps, gesture arbitration, input preservation, and undo/retry semantics.
- Test interruption paths, async races, rapid input, and focus restoration.

### Pass 3 — Visual and motion refinement

- Consolidate tokens, tune optical alignment, refine density, set surface hierarchy, correct icon/text balance.
- Add purposeful, brief, interruptible animation and sensory feedback where useful.

### Pass 4 — Stress and validation

- Test real devices, accessibility, dynamic content, large text, slow/offline networks, reduced motion, and production performance.
- Use a defect inventory with severity, owner, reproducible steps, screenshots/video, and acceptance criteria.

## 94. When to stop polishing

Stop adding effects when they stop improving:

- Speed to complete the user's actual task.
- Accuracy / error rate.
- Confidence that an action did what it claimed.
- Comprehension of state and consequence.
- Recovery from interruption.
- Accessibility and ease of use.
- Coherent product identity.

**Taste is restraint.** A perfect confirmation is sometimes no toast at all because the result is already obvious. A perfect transition is sometimes an immediate state change. A perfect control is sometimes a plain, native button that works everywhere.

---

# Part XXIII — Authoritative references and further reading

References below informed specific **standards, official platform advice, or library APIs** in this playbook. The rest is synthesized practical engineering/design guidance; timing and token recommendations are labeled as heuristics. Source pages may evolve—re-check live versions when implementing against a platform revision.

## Standards and accessibility

1. [WCAG 2.2 — W3C Recommendation](https://www.w3.org/TR/WCAG22/) — normative success criteria, including target size, dragging alternatives, focus, navigation, and contrast.
2. [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/understanding/) — guidance and rationale for interpreting success criteria.
3. [Target Size (Minimum), 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) — 24 × 24 CSS px criterion and documented exceptions.
4. [Dragging Movements, 2.5.7](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) — single-pointer non-drag alternatives and exceptions.
5. [Focus Not Obscured (Minimum), 2.4.11](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) — focused components should not be entirely hidden by author content.
6. [Contrast (Minimum), 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — text contrast levels and exceptions.
7. [ARIA APG Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) — menu-button activation and semantics.
8. [ARIA APG Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/) — editable and select-only comboboxes and popup interactions.
9. [ARIA APG Modal Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) — focus trapping, dialog opening and closing, semantics, focus return.

## Platform interface guidance

10. [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines) — platform foundations, patterns, components and inputs.
11. [Apple UI Design Dos and Don'ts](https://developer.apple.com/design/tips/) — includes 44 × 44 pt touch-target advice.
12. [Apple Design Principles](https://developer.apple.com/design/human-interface-guidelines/design-principles) — simplicity, craft, agency, consistency and purpose.
13. [Apple Motion](https://developer.apple.com/design/human-interface-guidelines/motion) — purposeful motion and optional/reduced motion.
14. [Apple Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback) — matching interruption/feedback to importance.
15. [Apple Loading](https://developer.apple.com/design/human-interface-guidelines/loading) — placeholder, progress, and nonblocking loading experiences.
16. [Apple Playing Haptics](https://developer.apple.com/design/human-interface-guidelines/playing-haptics) — meaningful, consistent and optional haptic feedback.

## Implementation, interaction, and performance

17. [Floating UI React `useHover` and `safePolygon`](https://floating-ui.com/docs/usehover) — documented safe area and options for hovering between reference/floating elements.
18. [MDN `touch-action`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/touch-action) — browser gesture arbitration and `pointercancel`.
19. [MDN `overscroll-behavior`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overscroll-behavior) — controlling scroll chaining.
20. [MDN `pointer` media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/pointer) — coarse/fine pointer detection.
21. [MDN `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion) — respecting user motion preferences.
22. [web.dev Web Vitals](https://web.dev/articles/vitals) — Core Web Vitals definitions and good thresholds.
23. [web.dev Optimize INP](https://web.dev/articles/optimize-inp) — reducing input-to-paint delays.
24. [Nielsen Norman Group Response Times](https://www.nngroup.com/articles/response-times-3-important-limits/) — classic 0.1 / 1 / 10 second attention model.
25. [Nielsen Norman Group Skeleton Screens](https://www.nngroup.com/articles/skeleton-screens/) — when skeletons help and when they distract.

---

# Final operating rule

> **Don't ask, "How can this UI look expensive?" Ask, "At every small moment—hovering, typing, scrolling, opening, waiting, correcting, canceling, and recovering—does this UI behave exactly as a thoughtful person would expect?"**

That is what cumulative craft feels like.