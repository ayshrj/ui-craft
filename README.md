# Skills

Reusable, standards-based agent skills and their supporting references.

## Premium UI/UX Craft

**[Open the skill](.agents/skills/premium-ui-ux/SKILL.md)** — an actionable workflow for auditing, designing, and implementing premium-feeling interfaces, including pointer intent and safe triangles, keyboard/focus, forms, animations, responsive behavior, performance, recovery, and QA.

**[Read the original playbook](premium_ui_ux_craft_playbook.md)** — the unmodified, long-form source reference.

### Directory structure

```text
.
├── premium_ui_ux_craft_playbook.md      # Original reference; preserved unchanged
└── .agents/
    └── skills/
        └── premium-ui-ux/
            ├── SKILL.md                 # Agent Skills instructions
            └── references/
                └── premium-ui-ux-craft-playbook.md  # Full bundled reference
```

### Use the skill

- **In this repository:** Open it in a Codex-compatible environment that discovers skills under `.agents/skills/`. Select or invoke **premium-ui-ux** when designing or auditing a UI.
- **In another repository:** Copy the entire `.agents/skills/premium-ui-ux` directory into that repository's `.agents/skills/` directory. Its bundled reference makes it self-contained.
- **In other Agent Skills-compatible systems:** Install or point the system to the `premium-ui-ux` directory according to its skill-discovery rules. Not all agents discover the same local paths.

For the format, see [Agent Skills](https://agentskills.io/specification) and [Codex skill authoring](https://learn.chatgpt.com/docs/build-skills).

The root playbook and the bundled reference are identical on creation. If you edit the source, update both copies to keep them in sync.
