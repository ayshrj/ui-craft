# Installation

For npm installation without GitHub access after publication, see [npm installation](npm.md).

## Skills CLI

Install Node.js/npm, then use the CLI documented at https://github.com/vercel-labs/skills. From the target project:

```sh
npx skills add ayshrj/ui-craft --skill premium-ui-ux
```

For global installation, append `-g`. Use `-a claude-code`, `-a codex`, or `-a cursor` to target an agent. Check `npx skills add --help` for the installed CLI version's options. These commands are documented integration paths, not repository-specific smoke-test results.

## Private repository or manual installation

Authenticate GitHub using your normal authorized Git credentials (for example, GitHub CLI browser login), then clone:

```sh
git clone https://github.com/ayshrj/ui-craft.git
```

If remote CLI installation cannot access the private repository, run `npx skills add ./ui-craft --skill premium-ui-ux` from the directory containing the clone, or use manual installation.

Copy the entire `skills/premium-ui-ux` folder **inside the clone**, including references, into your target project's appropriate skill directory:

| Agent | Project directory |
| --- | --- |
| Claude Code | .claude/skills/ |
| Codex | .agents/skills/ |
| Cursor | .agents/skills/ |

For global discovery consult your agent's current documentation or choose global scope in the CLI. Restart or reload the agent if needed. Never paste passwords or access tokens into prompts or repository files.

## Verify

Check that the installed folder contains SKILL.md and references. Ask your agent to list available skills or explicitly use premium-ui-ux to audit a menu. Verify it actually reads the skill and relevant reference.

## Update and uninstall

For CLI-managed installations, consult `npx skills --help`, `npx skills update --help` and `npx skills remove --help` before updating or removing the named skill; confirm the intended scope. For manual installs, pull the latest clone and replace only the installed premium-ui-ux directory, or remove that directory to uninstall. Do not remove unrelated skills.

