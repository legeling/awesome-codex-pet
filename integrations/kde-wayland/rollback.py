"""Restore configuration; keep the local app copy as a reversible backup."""
import json
from pathlib import Path
import shutil
import subprocess

root = Path(__file__).resolve().parent
home = Path.home()
def run(*args):
    subprocess.run(args, check=False)

run('qdbus6', 'org.kde.KWin', '/Scripting', 'org.kde.kwin.Scripting.unloadScript', 'codex-pet-window')
run('systemctl', '--user', 'disable', '--now', 'codex-rem-bridge.service')
for entry in json.loads((root / 'rollback-files.json').read_text()):
    target = home / entry['path']
    if entry['backup']:
        shutil.copy2(entry['backup'], target)
    else:
        target.unlink(missing_ok=True)
old = root / 'old-kwin-enabled.txt'
enabled = old.read_text().strip() if old.exists() else 'false'
run('kwriteconfig6', '--file', 'kwinrc', '--group', 'Plugins', '--key', 'codex-pet-windowEnabled', enabled)
run('systemctl', '--user', 'daemon-reload')
run('qdbus6', 'org.kde.KWin', '/KWin', 'org.kde.KWin.reconfigure')
print('Configuration restored. Fully quit and reopen ChatGPT. Local app copy retained at', root)
