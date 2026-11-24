# npm installation and publishing

Requires Node.js 20 or later. After the first successful publication:

```sh
npx @ayshrj/ui-craft
npx @ayshrj/ui-craft install --agent codex
npx @ayshrj/ui-craft install --agent claude-code --global
npx @ayshrj/ui-craft install --agent cursor
npx @ayshrj/ui-craft install --agent all
npx @ayshrj/ui-craft@latest update --agent all
npx @ayshrj/ui-craft uninstall --agent all
```

Use the same scope and agent when updating or uninstalling. The installer copies the complete skill, including references; it refuses to overwrite unmanaged or modified copies. It has no third-party runtime dependencies. Agent runtime discovery has not been independently smoke-tested.

## Maintainer release

The package is public on npm even when the source repository is private. No redistribution license is granted at present. The package allowlist includes only the installer and distributable skill (plus npm's standard metadata files).

1. Ensure the npm scope is owned by the maintainer and NPM_TOKEN is configured in GitHub Actions secrets with permission to publish.
2. Merge the PR and verify the validation workflow passes.
3. On GitHub Actions select Publish npm, Run workflow, main.
4. Confirm the version is visible at https://www.npmjs.com/package/@ayshrj/ui-craft.
5. Revoke the bootstrap token after configuring npm Trusted Publishing for future versions. See https://docs.npmjs.com/trusted-publishers/.

Never commit or paste the token. Subsequent releases require a new package version. The publication workflow is manually triggered and only publishes from main.
