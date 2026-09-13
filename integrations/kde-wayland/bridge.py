#!/usr/bin/python3
import json, os, time, math
from pathlib import Path
import dbus, dbus.service, dbus.mainloop.glib
from gi.repository import GLib
ROOT=Path(os.environ['XDG_RUNTIME_DIR'])/'codex-rem-bridge'
ROOT.mkdir(mode=0o700,exist_ok=True)
os.chmod(ROOT,0o700)
def write(name,value):
    p=ROOT/(name+'.tmp'); p.write_text(json.dumps(value)); os.chmod(p,0o600); p.replace(ROOT/name)
dbus.mainloop.glib.DBusGMainLoop(set_as_default=True)
class Bridge(dbus.service.Object):
    def __init__(self):
        self.name=dbus.service.BusName('local.CodexRemBridge',bus=dbus.SessionBus())
        super().__init__(self.name,'/Bridge'); self.waiter=None; self.last=None
    @dbus.service.method('local.CodexRemBridge',in_signature='s',out_signature='')
    def Update(self,data):
        value=json.loads(str(data)); value['time']=time.time()*1000
        write('state.json',value)
    @dbus.service.method('local.CodexRemBridge',in_signature='',out_signature='s',async_callbacks=('reply','error'))
    def Next(self,reply,error):
        if self.waiter: self.waiter('{}')
        self.waiter=reply; self.deadline=time.monotonic()+1
    def tick(self):
        if self.waiter and time.monotonic()>self.deadline:
            reply=self.waiter; self.waiter=None; reply('{}')
        try:
            data=(ROOT/'request.json').read_text()
            if data!=self.last and self.waiter:
                v=json.loads(data)
                if time.time()*1000-v['time']<3000 and all(isinstance(v[k],(int,float)) and math.isfinite(v[k]) for k in ('x','y','width','height')) and 0<v['width']<10000 and 0<v['height']<20000:
                    reply=self.waiter; self.waiter=None; self.last=data; reply(data)
                else: self.last=data
        except (OSError,ValueError,KeyError): pass
        return True
bridge=Bridge(); GLib.timeout_add(33,bridge.tick); GLib.MainLoop().run()
