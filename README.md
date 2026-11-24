# UI Craft

A reusable agent skill for designing, auditing and building premium interfaces — with particular attention to microinteractions, accessibility, responsive behavior and reliability.

## npm quick start

After publication, run `npx @ayshrj/ui-craft` for interactive installation. See [npm installation and release](docs/npm.md) for explicit commands.

## GitHub quick start

With Node.js and npm installed, and access to this repository:

```sh
npx skills add ayshrj/ui-craft --skill premium-ui-ux
```

Select your agent and installation scope when prompted. See [installation](docs/installation.md) for manual setup, private repository access, updates and removal. CLI installation has not yet been smoke-tested against this repository.

## Use it

Ask your coding agent to use the `premium-ui-ux` skill, for example:

> Audit this interface for interaction quality, accessibility, responsive behavior and reliability. Prioritize reproducible issues and provide acceptance criteria.

The skill covers pointer intent and safe polygons, keyboard/focus, visual hierarchy, motion, gestures, forms, async feedback, recovery, performance and QA. It prioritizes observable behavior over decorative polish.

- [Skill instructions](skills/premium-ui-ux/SKILL.md)
- [Full reference](skills/premium-ui-ux/references/premium-ui-ux-craft-playbook.md)
- [Original playbook](premium_ui_ux_craft_playbook.md)
- [Example prompts](examples/prompts.md)
- [Compatibility](docs/compatibility.md)

## Maintenance

The distributable skill lives in `skills/premium-ui-ux/`. The original playbook is preserved unchanged at the root. The bundled reference must match it; run `python3 scripts/validate-skills.py` to check.

See [contributing](CONTRIBUTING.md) and [changelog](CHANGELOG.md). No license has been granted by this repository yet; access does not imply permission to redistribute.

