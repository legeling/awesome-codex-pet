"""Patch a user-owned copy of Codex 26.908.40834; never edit the source archive."""
import argparse
import hashlib
import json
from pathlib import Path
import struct

MAIN_HASH = '0765260be74e8843630d5a92e30bca574783892688e67180c119a5c58679bb61'

def replace_once(text, old, new):
    if text.count(old) != 1:
        raise ValueError('Unsupported application code; refusing partial patch')
    return text.replace(old, new)

def patch(source, destination, bridge):
    if source.resolve() == destination.resolve():
        raise ValueError('Source and destination must differ')
    with source.open('rb') as f:
        header = struct.unpack('<4I', f.read(16))
        tree = json.loads(f.read(header[3]))
        base = 8 + header[1]
        entries = []
        def walk(node, prefix=''):
            for name, value in node.get('files', {}).items():
                path = prefix + name
                if 'files' in value:
                    walk(value, path + '/')
                elif 'offset' in value:
                    entries.append((int(value['offset']), path, value))
        walk(tree)
        entries.sort()
        changes = {}
        for offset, name, value in entries:
            if not (name == '.vite/build/main-DaMR-wdT.js' or
                    name.startswith('webview/assets/avatar-overlay-native-page-') and name.endswith('.js')):
                continue
            f.seek(base + offset)
            content = f.read(value['size'])
            text = content.decode()
            if name.startswith('.vite/'):
                if hashlib.sha256(content).hexdigest() != MAIN_HASH:
                    raise ValueError('Unsupported app version or already patched archive')
                text = replace_once(text,
                    'return this.window=e,this.nativeWindowDragTargetRegistered=Gs(e)',
                    'return this.window=e,(()=>{try{require(' + json.dumps(str(bridge.resolve())) +
                    ').bind(this,e)}catch(err){console.error(`Pet bridge unavailable`,err)}})(),this.nativeWindowDragTargetRegistered=Gs(e)')
                start = text.index('wle=')
                end = text.index('function Yu(e,t)', start)
                chunk = text[start:end].replace('l.screen.getCursorScreenPoint()',
                    '(this.__remCursor?.()??l.screen.getCursorScreenPoint())')
                chunk = replace_once(chunk,
                    'point:this.computerUseCursorPoint==null?null:{x:this.computerUseCursorPoint.x-t.x,y:this.computerUseCursorPoint.y-t.y}',
                    'point:(this.computerUseCursorPoint??this.__remPointer)==null?null:{x:(this.computerUseCursorPoint??this.__remPointer).x-t.x,y:(this.computerUseCursorPoint??this.__remPointer).y-t.y}')
                chunk = replace_once(chunk,
                    'this.presentationMotionTarget!=null||this.isQuickChatPresentation&&this.isSettingWindowBounds',
                    'this.presentationMotionTarget!=null||this.isSettingWindowBounds||e.__remProgrammaticMove?.()')
                text = text[:start] + chunk + text[end:]
            else:
                text = replace_once(text,
                    't.usesOrbPhysics||(r>=4?Tn(`running-right`):r<=-4&&Tn(`running-left`))',
                    'void 0')
            changes[name] = text.encode()
        if len(changes) != 2:
            raise ValueError('Expected exactly one main and one renderer bundle')
        cursor = 0
        sizes = {name: value['size'] for _, name, value in entries}
        for _, name, value in entries:
            value['offset'] = str(cursor)
            if name in changes:
                data = changes[name]
                value['size'] = len(data)
                integrity = value['integrity']
                integrity['hash'] = hashlib.sha256(data).hexdigest()
                block = integrity['blockSize']
                integrity['blocks'] = [hashlib.sha256(data[i:i+block]).hexdigest()
                                       for i in range(0, len(data), block)]
            cursor += value['size']
        raw = json.dumps(tree, separators=(',', ':'), ensure_ascii=False).encode()
        size = (len(raw) + 7) // 4 * 4
        temporary = destination.with_name(destination.name + '.tmp')
        with temporary.open('wb') as out:
            out.write(struct.pack('<4I', 4, size + 4, size, len(raw)))
            out.write(raw)
            out.write(b'\0' * (size - len(raw) - 4))
            for offset, name, value in entries:
                if name in changes:
                    out.write(changes[name])
                else:
                    f.seek(base + offset)
                    remaining = sizes[name]
                    while remaining:
                        data = f.read(min(remaining, 4 * 1024 * 1024))
                        if not data:
                            raise ValueError('Truncated source archive')
                        out.write(data)
                        remaining -= len(data)
        temporary.replace(destination)
    return changes

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source', type=Path)
    parser.add_argument('destination', type=Path)
    parser.add_argument('--bridge', type=Path, required=True)
    args = parser.parse_args()
    print('Patched:', ', '.join(patch(args.source, args.destination, args.bridge)))
