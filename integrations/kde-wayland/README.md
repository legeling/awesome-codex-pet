# KDE Wayland pet compatibility patch (experimental)

这是从 Rem v2 实际使用中整理的可选 Linux 桌面修复，与宠物素材安装互相独立。**普通用户安装 Rem 不需要运行这里的脚本。**

## 适用范围

- 已验证的原始应用：Codex/ChatGPT Linux `26.908.40834`，安装目录 `/usr/lib/chatgpt`。
- 实际桌面：KDE Plasma/KWin 6.6.6、Wayland、外接显示器。
- 必需组件：Python 3、`dbus-python`、PyGObject，`qdbus6`、`kreadconfig6`、`kwriteconfig6`、用户 systemd。
- 这不是官方修复，也不是适用于所有 Electron 版本的通用补丁。补丁器会核对原始 main bundle 的 SHA-256 和精确代码片段，不匹配即拒绝生成。

## 修复内容

- KWin 识别宠物的独立透明窗口，设置置顶并从任务栏和切换列表隐藏。
- 将 KDE 的实际鼠标和窗口坐标传给应用，支持普通鼠标注视。
- 离开宠物后给按钮约 0.9 秒过渡时间。
- 普通拖动统一使用 KDE 坐标，关闭松手惯性，保存宠物本体位置并在同一显示器唤醒时恢复。
- 普通拖动期间不再切换左右奔跑动画，并暂停注视更新；松手后恢复鼠标追踪。
- 保持原生 Wayland 和 `--enable-wayland-ime`；不通过切换 X11 绕过问题。

## 安装

先在下载的本目录中检查应用是否受支持（不改变系统配置）：

```bash
python3 install.py --check --app-dir /usr/lib/chatgpt
```

完整退出 ChatGPT/Codex 后，在 KDE Wayland 会话中运行：

```bash
python3 install.py --app-dir /usr/lib/chatgpt
```

脚本将约 650 MB 的本地应用副本及桥接代码安装到 `~/.local/lib/codex-rem-fix/`。原应用不改动。它会备份并更新用户 ChatGPT 启动入口、KWin 宠物规则、坐标服务和 D-Bus 入口。如果目标目录已经存在，拒绝覆盖；不要用它直接覆盖之前手工安装的版本。

从应用菜单重新打开 ChatGPT。拖动宠物到目标位置后，测试隐藏/唤醒、鼠标注视、按钮点击和中文输入。原程序更新后启动器自动使用原版，届时补丁需要重新适配。

## 回滚

```bash
python3 ~/.local/lib/codex-rem-fix/rollback.py
```

完整退出并重开应用。恢复前配置后保留本地副本，方便检查；可在确认原版正常后自行删除该副本。

## 验证与限制

源码回归检查和只构建检查：

```bash
node test_bridge.cjs
python3 install.py --check
```

原用户已确认位置恢复、普通拖动、追踪和悬停正常。最后的“拖动时左右快速转向”修正通过了交替坐标模拟、拖动事件、松手恢复追踪及归档校验，尚未收到最后一次实际界面确认。通用安装器是本次发布时整理的新入口，已检查构建路径，尚未在另一台干净桌面验证完整安装/回滚。

当前窗口匹配依赖该版本的 class 和透明窗口尺寸；普通拖动中取消左右奔跑和惯性是有意的行为变化。跨显示器布局变化、不同缩放以及其他桌面环境未验证。运行目录只交换本机坐标，不发送网络请求。此目录不包含应用二进制、运行状态、个人绝对路径或宠物制作中间文件。

代码遵循仓库 MIT 许可证；应用本身的版权不随补丁转移。
