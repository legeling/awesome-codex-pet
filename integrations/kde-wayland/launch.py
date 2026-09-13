import json
import os
from pathlib import Path
import sys

root = Path(__file__).resolve().parent
record = json.loads((root / 'source-version.json').read_text())
source = Path(record['source'])
stat = (source / 'resources/app.asar').stat()
unchanged = stat.st_size == record['size'] and stat.st_mtime_ns == record['mtime_ns']
executable = str((root / 'app' if unchanged else source) / 'ChatGPT')
os.execv(executable, [executable, '--ozone-platform=wayland', '--enable-wayland-ime', *sys.argv[1:]])
