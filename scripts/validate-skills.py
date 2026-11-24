"""Validate the repository's intentionally simple Agent Skills packaging."""
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
folder = root / "skills" / "premium-ui-ux"
skill = (folder / "SKILL.md").read_text(encoding="utf-8")
front = re.match(r"\A---\n(.*?)\n---\n", skill, re.S)
assert front, "Missing frontmatter"
fields = dict(line.split(": ", 1) for line in front.group(1).splitlines())
assert fields["name"] == folder.name
assert re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", fields["name"])
assert len(fields["name"]) <= 64
assert 0 < len(fields["description"]) <= 1024
reference = folder / "references" / "premium-ui-ux-craft-playbook.md"
assert reference.read_bytes() == (root / "premium_ui_ux_craft_playbook.md").read_bytes(), "Reference differs from source"
for path in [root / "README.md", folder / "SKILL.md"]:
    for link in re.findall(r"\]\(([^)]+)\)", path.read_text(encoding="utf-8")):
        if not link.startswith(("https:", "http:", "#")):
            assert (path.parent / link.split("#")[0]).exists(), f"Broken link in {path}: {link}"
print("Skill packaging checks passed.")
