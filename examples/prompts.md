# Example prompts

- Use premium-ui-ux to audit this application and prioritize reproducible issues by severity.
- Polish this screen without changing its visual identity or product architecture.
- Implement a nested menu with direction-aware safe polygon behavior, keyboard navigation and touch support.
- Review this pull request for focus management, reduced motion, responsive states and race conditions.
- Improve loading, optimistic updates, retry and undo without losing user data.
- Specify a component state matrix and acceptance tests for this dialog.

## Illustrative audit

Scenario: a nested menu switches parents when a pointer crosses a sibling row diagonally.

Expected: maintain the open submenu while the pointer trajectory approaches it; release protection when direction reverses. Preserve keyboard and touch navigation.

Suggested fix: use a bounded, direction-aware pointer corridor, cancel on changed intent, and test diagonal travel, rapid reversal, Escape, touch and viewport collisions.

This is a hypothetical example, not a measured audit or benchmark.
