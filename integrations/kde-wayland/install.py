"""Build an optional, version-locked KDE Wayland integration in the user's home."""
import argparse
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
from patch_asar import patch

HERE = Path(__file__).resolve().parent

def run(*args):
    return subprocess.check_output(args, text=True).strip()

def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--app-dir', type=Path, default=Path('/usr/lib/chatgpt'))
    p.add_argument('--check', action='store_true', help='Build and verify without installing')
    args = p.parse_args()
    home = Path.home()
    root = home / '.local/lib/codex-rem-fix'
    source = args.app_dir.resolve()
    with tempfile.TemporaryDirectory(prefix='codex-pet-check-') as temporary:
        archive = Path(temporary) / 'app.asar'
        patch(source / 'resources/app.asar', archive, root / 'bridge.cjs')
        if args.check:
            print('Supported archive; main and renderer patch successfully. No configuration changed.')
            return
        if root.exists():
            raise SystemExit(f'{root} already exists. Roll back the existing installation first; refusing overwrite.')
        if os.environ.get('XDG_SESSION_TYPE') != 'wayland':
            raise SystemExit('Run from your KDE Wayland desktop session.')
        for command in ('qdbus6', 'systemctl', 'kwriteconfig6', 'kreadconfig6'):
            if not shutil.which(command):
                raise SystemExit(f'Missing dependency: {command}')
        subprocess.run(['/usr/bin/python3', '-c', 'import dbus, gi'], check=True)
        root.mkdir(parents=True)
        backup = root / 'backup'
        backup.mkdir()
        tracked = []
        def write(relative, text):
            dest = home / relative
            saved = backup / str(len(tracked))
            exists = dest.exists()
            if exists:
                shutil.copy2(dest, saved)
            tracked.append({'path': relative, 'backup': str(saved) if exists else None})
            (root / 'rollback-files.json').write_text(json.dumps(tracked))
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_text(text)
        for name in ('bridge.cjs', 'bridge.py', 'rollback.py'):
            shutil.copy2(HERE / name, root / name)
        app = root / 'app'
        app.mkdir()
        for entry in source.iterdir():
            if entry.name not in ('resources', 'ChatGPT'):
                (app / entry.name).symlink_to(entry)
        shutil.copy2(source / 'ChatGPT', app / 'ChatGPT')
        resources = app / 'resources'
        resources.mkdir()
        for entry in (source / 'resources').iterdir():
            if entry.name != 'app.asar':
                (resources / entry.name).symlink_to(entry)
        shutil.copy2(archive, resources / 'app.asar')
        stat = (source / 'resources/app.asar').stat()
        (root / 'source-version.json').write_text(json.dumps({'source': str(source), 'size': stat.st_size, 'mtime_ns': stat.st_mtime_ns}))
        shutil.copy2(HERE / 'launch.py', root / 'launch.py')
        # Desktop/service files quote paths independently of shell syntax.
        def quote(path):
            return '"' + str(path).replace('\\', '\\\\').replace('"', '\\"').replace('`', '\\`').replace('$', '\\$') + '"'
        write('.local/share/applications/chatgpt.desktop',
              '[Desktop Entry]\nName=ChatGPT\nType=Application\nIcon=chatgpt\nExec=/usr/bin/python3 ' + quote(root / 'launch.py') + ' %U\nCategories=Utility;Development;\nMimeType=x-scheme-handler/codex;\n')
        write('.config/systemd/user/codex-rem-bridge.service',
              '[Unit]\nDescription=Codex pet KDE coordinates\nAfter=graphical-session.target\nPartOf=graphical-session.target\n[Service]\nType=dbus\nBusName=local.CodexRemBridge\nExecStart=/usr/bin/python3 %h/.local/lib/codex-rem-fix/bridge.py\nRestart=on-failure\nRestartSec=2\n[Install]\nWantedBy=graphical-session.target\n')
        write('.local/share/dbus-1/services/local.CodexRemBridge.service',
              '[D-BUS Service]\nName=local.CodexRemBridge\nExec=/usr/bin/python3 ' + quote(root / 'bridge.py') + '\nSystemdService=codex-rem-bridge.service\n')
        for name, relative in [('kwin.js', 'contents/code/main.js'), ('metadata.json', 'metadata.json')]:
            write('.local/share/kwin/scripts/codex-pet-window/' + relative, (HERE / name).read_text())
        (root / 'old-kwin-enabled.txt').write_text(run('kreadconfig6', '--file', 'kwinrc', '--group', 'Plugins', '--key', 'codex-pet-windowEnabled', '--default', 'false'))
        run('systemctl', '--user', 'daemon-reload')
        run('systemctl', '--user', 'enable', '--now', 'codex-rem-bridge.service')
        run('kwriteconfig6', '--file', 'kwinrc', '--group', 'Plugins', '--key', 'codex-pet-windowEnabled', 'true')
        run('qdbus6', 'org.kde.KWin', '/Scripting', 'org.kde.kwin.Scripting.unloadScript', 'codex-pet-window')
        script = home / '.local/share/kwin/scripts/codex-pet-window/contents/code/main.js'
        ident = run('qdbus6', 'org.kde.KWin', '/Scripting', 'org.kde.kwin.Scripting.loadScript', str(script), 'codex-pet-window')
        run('qdbus6', 'org.kde.KWin', '/Scripting/Script' + ident, 'org.kde.kwin.Script.run')
        print('Installed. Fully quit ChatGPT, then launch it from the application menu. Rollback:', root / 'rollback.py')

if __name__ == '__main__':
    main()
