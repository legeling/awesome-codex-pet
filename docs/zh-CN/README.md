<div align="center">

# Awesome Codex Pet

[English](../../README.md) | 简体中文 | [한국어](../ko/README.md) | [日本語](../ja/README.md) | [Español](../es/README.md)

<h2><a href="https://codexpet.top">免费浏览并安装 Codex 小宠物：codexpet.top →</a></h2>

<p><strong>Awesome Codex Pet 是免费的社区小宠物画廊。</strong>像逛宠物商店一样查看完整动画并一键安装；没有喜欢的角色时，还可以免费提交申请，社区贡献者可能会志愿制作。</p>

<p><a href="https://codexpet.top"><strong>挑选宠物</strong></a> · <a href="https://codexpet.top/zh/install"><strong>安装宠物</strong></a> · <a href="https://codexpet.top/zh/request"><strong>申请喜欢的角色</strong></a></p>

<a href="https://codexpet.top"><img src="../../assets/cover/awesome-codex-pet-cover.png" alt="进入 Awesome Codex Pet 精品画廊"></a>

![pets: 239](https://img.shields.io/badge/pets-239-2ea44f) ![categories: 11](https://img.shields.io/badge/categories-11-0969da) ![languages: en | zh--CN | ko | ja | es](https://img.shields.io/badge/languages-en%20%7C%20zh--CN%20%7C%20ko%20%7C%20ja%20%7C%20es-8250df) ![code: MIT](https://img.shields.io/badge/code-MIT-111111) ![assets: CC BY--NC 4.0](https://img.shields.io/badge/assets-CC%20BY--NC%204.0-f97316) ![install: one command](https://img.shields.io/badge/install-one%20command-111111) [![Pet previews](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml/badge.svg)](https://github.com/legeling/awesome-codex-pet/actions/workflows/pet-previews.yml)

</div>

本仓库是 [codexpet.top](https://codexpet.top) 背后的宠物目录，负责保存可安装成品、作者与来源信息、合集元数据、校验工具和贡献记录。挑选与安装宠物时，请优先使用网站。

## 亮点

- **一条命令安装** — 不需要克隆仓库，macOS / Linux / Windows 全平台支持
- **免费社区画廊** — [codexpet.top](https://codexpet.top) 提供完整动作预览、合集、作者主页、基于安装与点赞的每周榜单、便捷分享和社区统计
- **免费角色申请** — 不需要自己制作 spritesheet；提交角色和参考资料后，社区贡献者可能会志愿制作，但不承诺交付
- **AI 优先投稿** — 贡献者可在 Codex 中制作、修复并提交自己的宠物，熟悉 Git 的用户也可以直接提交 PR
- **非商用原则** — 正式许可证可选；没有正式许可证时必须明确禁止商用

每只宠物都是一个很小的可分享包：

```text
pets/<pet-slug>--<author-slug>/
├── submission.json
├── pet.json
└── spritesheet.webp
```

预览图会作为本地或 CI 构建产物生成到 `assets/previews/<pet-id>/`，不会塞进宠物目录。

仓库级作品系列与主题系列统一维护在 `collections.json`：`kind: franchise` 表示来自同一原作的作品系列，`kind: theme` 表示按题材、风格或伙伴类型组织的跨作品主题系列。宠物通过 `submission.json.collections` 声明归属，目录与网站都会从这些元数据自动生成。归属信息会立即记录，但只有达到至少 3 只宠物的合集才会在网站公开展示。

`submission.json.name` 是必填的默认名称。投稿者可以省略 `localized_names`，只使用一种语言；也可以选择双语，并同时填写 `localized_names.en` 与 `localized_names.zh`。网站会跟随访客选择的语言展示，不会擅自生成翻译。

## Pet 版本

| 版本 | 图集                      | 运行时元数据                          | 用途                           |
| ---- | ------------------------- | ------------------------------------- | ------------------------------ |
| v1   | `1536x1872`，8 列 × 9 行  | 省略 `spriteVersionNumber` 或设为 `1` | 已有的标准动作宠物             |
| v2   | `1536x2288`，8 列 × 11 行 | 设置 `spriteVersionNumber: 2`         | 标准动作加 16 个顺时针环视方向 |

两个版本都可以安装。维护已有九行动画时使用 v1；需要环视动作的新宠物或升级宠物使用 v2。

## 快速安装

无需 clone，按你的系统选一条命令：

```bash
# macOS / Linux
curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main firefly--lingxiaotian
```

```powershell
# Windows PowerShell
powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr -UseB -MaximumRedirection 5 -TimeoutSec 120 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.ps1 | iex; Install-CodexPet firefly--lingxiaotian -RawBase 'https://raw.githubusercontent.com/legeling/awesome-codex-pet/main'"
```

```bash
# 在本地仓库中使用 Node.js
npm run install:pet -- firefly--lingxiaotian
```

列出可安装的宠物：

```bash
curl -fsSL --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/scripts/install-pet.sh | bash -s -- --raw-base https://raw.githubusercontent.com/legeling/awesome-codex-pet/main --list
```

默认安装位置：

- macOS / Linux：`~/.codex/pets/<pet-id>/`
- Windows：`%USERPROFILE%\.codex\pets\<pet-id>\`

可通过 `CODEX_HOME` 自定义安装路径，或者设置 `AWESOME_CODEX_PET_NO_STATS=1` 关闭匿名安装计数。安装器会校验仓库清单与 SHA-256，先在临时目录准备完整文件再切换；替换已有宠物时需要显式添加 `--force`。如需可复现安装，请把两处 URL 中的 `main` 替换为不可变的 commit 或 tag。

## 升级已有 v1 宠物

1. 打开 Codex 的**设置 → 宠物**。
2. 找到已安装的自定义宠物，点击**更新**。
3. Codex 会打开 Hatch Pet 任务。当前 v2 流程会校验并保留原有九行动画，只生成四个方向锚点和 16 个环视方向，然后写出带 `spriteVersionNumber: 2` 的十一行图集。
4. 接受替换前，检查生成的 contact sheet 和方向预览。

这里的**更新**是 AI 辅助的 v1 → v2 转换，不是本仓库发出了新版下载通知。它只更新 `~/.codex/pets/` 下的本地包，不会自动修改或提交 GitHub 仓库里的版本。

## 宠物收录

**[浏览全部宠物和动作 →](https://codexpet.top/zh)**

<table width="100%">
<tr><td align="center" width="20%"><a href="https://codexpet.top/pets/firefly--lingxiaotian"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/firefly--lingxiaotian.gif" alt="流萤" width="160" height="173"><br>流萤</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/kid-goku--julianhuang"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/kid-goku--julianhuang.gif" alt="小悟空" width="160" height="173"><br>小悟空</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/rem--l1"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/rem--l1.gif" alt="蕾姆" width="160" height="173"><br>蕾姆</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/happynailong--aquaxyy"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/happynailong--aquaxyy.gif" alt="大笑奶龙" width="160" height="173"><br>大笑奶龙</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/shinchan--chenxin-dlut"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/shinchan--chenxin-dlut.gif" alt="野原新之助" width="160" height="173"><br>野原新之助</a></td></tr>
<tr><td align="center" width="20%"><a href="https://codexpet.top/pets/frieren--lingxiaotian"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/frieren--lingxiaotian.gif" alt="芙莉莲" width="160" height="173"><br>芙莉莲</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/buba--yurcek"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/buba--yurcek.gif" alt="Buba" width="160" height="173"><br>Buba</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/paimon--lingxiaotian"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/paimon--lingxiaotian.gif" alt="派蒙" width="160" height="173"><br>派蒙</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/usachi--jack"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/usachi--jack.gif" alt="乌萨奇" width="160" height="173"><br>乌萨奇</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/conan--chenxin-dlut"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/conan--chenxin-dlut.gif" alt="江户川柯南" width="160" height="173"><br>江户川柯南</a></td></tr>
<tr><td align="center" width="20%"><a href="https://codexpet.top/pets/furina--lingxiaotian"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/furina--lingxiaotian.gif" alt="芙宁娜" width="160" height="173"><br>芙宁娜</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/doraemon--xueshi"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/doraemon--xueshi.gif" alt="哆啦A梦" width="160" height="173"><br>哆啦A梦</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/jiji--yena"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/jiji--yena.gif" alt="Jiji" width="160" height="173"><br>Jiji</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/citlali--zaytsevzy"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/citlali--zaytsevzy.gif" alt="茜特菈莉" width="160" height="173"><br>茜特菈莉</a></td><td align="center" width="20%"><a href="https://codexpet.top/pets/miku--lingxiaotian"><img src="https://raw.githubusercontent.com/legeling/awesome-codex-pet/main/assets/readme/miku--lingxiaotian.gif" alt="初音未来" width="160" height="173"><br>初音未来</a></td></tr>
</table>

<details>
<summary>完整宠物索引（纯文字） · 239</summary>

### 游戏角色

<ul>
<li><a href="../../pets/firefly--lingxiaotian">流萤</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/acheron--lingxiaotian">黄泉</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/arlecchino--lingxiaotian">阿蕾奇诺</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/black-swan--lingxiaotian">黑天鹅</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/blazer-god--sou2c1">煌炎战神</a> · 作者 <a href="https://github.com/SOU2C1">@SOU2C1</a> · v1</li>
<li><a href="../../pets/buba--yurcek">Buba</a> · 作者 @yurcek · v1</li>
<li><a href="../../pets/castorice--lingxiaotian">遐蝶</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/chen--chenxin-dlut">陈</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/citlali--zaytsevzy">茜特菈莉</a> · 作者 <a href="https://github.com/ZaytsevZY">@ZaytsevZY</a> · v2</li>
<li><a href="../../pets/cyrene--lingxiaotian">昔涟</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/dimo-stand--god-wu">Dimo</a> · 作者 @god-wu · v1</li>
<li><a href="../../pets/doro--lingxiaotian">桃乐丝（Doro）</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/doro--vaevie">桃乐丝（Doro）</a> · 作者 <a href="https://github.com/vaevie">@vaevie</a> · v2</li>
<li><a href="../../pets/feixiao--lingxiaotian">飞霄</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/furina--lingxiaotian">芙宁娜</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/ganyu--chenxin-dlut">甘雨</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/hu-tao--lingxiaotian">胡桃</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/hyacine--kurisu">风堇</a> · 作者 <a href="https://github.com/kurisu994">@kurisu994</a> · v2</li>
<li><a href="../../pets/isaac--foggy-whale">Isaac</a> · 作者 <a href="https://github.com/Foggy-whale">@Foggy-whale</a> · v2</li>
<li><a href="../../pets/kamisato-ayaka--lingxiaotian">神里绫华</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/klee--chenxin-dlut">可莉</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/klee-desk--ayanxu56-boop">可莉·书桌版</a> · 作者 <a href="https://github.com/ayanxu56-boop">@ayanxu56-boop</a> · v2</li>
<li><a href="../../pets/kuro-chibi--kuroneko-night">Kuro Q版</a> · 作者 <a href="https://github.com/KuroNeko-night">@KuroNeko-night</a> · v2</li>
<li><a href="../../pets/lappland--chenxin-dlut">拉普兰德</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/little-black-mage--libertis">Little Black Mage</a> · 作者 @libertis · v1</li>
<li><a href="../../pets/march-7th--chenxin-dlut">三月七</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/marisa-kirisame--eigentom">雾雨魔理沙</a> · 作者 <a href="https://github.com/EigenTom">@eigentom</a> · v2</li>
<li><a href="../../pets/missile--zpzjzj">Missile</a> · 作者 <a href="https://github.com/zpzjzj">@zpzjzj</a> · v2</li>
<li><a href="../../pets/miyabi--eric-terminal">星见雅</a> · 作者 <a href="https://codex-pets.net/users/eric-terminal">@eric-terminal</a> · v1</li>
<li><a href="../../pets/nahida--lingxiaotian">纳西妲</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/navia--lingxiaotian">娜维娅</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/om-nom--kasyan1337">Om Nom</a> · 作者 <a href="https://github.com/kasyan1337">@kasyan1337</a> · v2</li>
<li><a href="../../pets/paimon--lingxiaotian">派蒙</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/phoebe--chenxin-dlut">菲比</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/raiden-shogun--lingxiaotian">雷电将军</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/reimu--lingxiaotian">博丽灵梦</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/remielle-dan--erlla">蕾米埃尔·丹 / 蕾米</a> · 作者 <a href="https://github.com/Erlla">@Erlla</a> · v2</li>
<li><a href="../../pets/robin--lingxiaotian">知更鸟</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/rosmontis--flovst">迷迭香</a> · 作者 @flovst · v2</li>
<li><a href="../../pets/ruan-mei--lingxiaotian">阮·梅</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/silver-wolf--lingxiaotian">银狼</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/sonetto--chenxin-dlut">十四行诗</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/sparkle--lingxiaotian">花火</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/susuta--xiangzi529">羞羞獭</a> · 作者 <a href="https://github.com/Xiangzi529">@Xiangzi529</a> · v2</li>
<li><a href="../../pets/tingyun--lingxiaotian">停云</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/vertin--chenxin-dlut">维尔汀</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/yoimiya--chenxin-dlut">宵宫</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/zani--chenxin-dlut">赞妮</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/yae-miko--legeling">八重神子</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/dnf-female-ammo--qunboo">女弹药Q</a> · 作者 <a href="https://github.com/QunBoo">@QunBoo</a> · v1</li>
<li><a href="../../pets/wukong--jorge-cuevas90003">悟空</a> · 作者 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="../../pets/doudizhu-laonongmin--chenyijing131-art">斗地主老农民</a> · 作者 <a href="https://github.com/chenyijing131-art">@chenyijing131-art</a> · v2</li>
<li><a href="../../pets/new-covenant-exusiai--chenxin-dlut">新约能天使</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/regulus-star-antimony--chenxin-dlut">星锑</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/lin-pianpian-first-meeting--legeling">林翩翩（初遇）</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/lin-pianpian-date--legeling">林翩翩（约会）</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/lin-pianpian-flower-street--legeling">林翩翩（花街）</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/lin-pianpian-courtesan--legeling">林翩翩（花魁）</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/shen-xinghui--legeling">沈星回</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/chillet--legeling">疾旋鼬</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/arona--legeling">阿罗那</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/youmu--ai-generated">魂魄妖梦</a> · 作者 @ai-generated · v2</li>
</ul>

### 动漫角色

<ul>
<li><a href="../../pets/zero-two--mingqingmozhao">02</a> · 作者 @mingqingmozhao · v1</li>
<li><a href="../../pets/anya--chenxin-dlut">阿尼亚</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/asuka--maxg24">明日香</a> · 作者 <a href="https://codex-pets.net/users/maxg24">@maxg24</a> · v1</li>
<li><a href="../../pets/chibi-rei-pet--bendy">绫波丽</a> · 作者 @Bendy · v1</li>
<li><a href="../../pets/chotu--makriman">Chotu</a> · 作者 <a href="https://github.com/makriman">@makriman</a> · v2</li>
<li><a href="../../pets/conan--chenxin-dlut">江户川柯南</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/doraemon--xueshi">哆啦A梦</a> · 作者 <a href="https://codex-pets.net/users/xueshi">@xueshi</a> · v1</li>
<li><a href="../../pets/elaina--nyakku-shigure">伊蕾娜</a> · 作者 <a href="https://codex-pets.net/users/nyakku-shigure">@nyakku-shigure</a> · v1</li>
<li><a href="../../pets/eren--ash-sw">艾伦</a> · 作者 <a href="https://codex-pets.net/users/ash-sw">@ash-sw</a> · v1</li>
<li><a href="../../pets/fang-yuan--kelleszzz">方源</a> · 作者 <a href="https://github.com/kelleszzz">@kelleszzz</a> · v2</li>
<li><a href="../../pets/frieren--lingxiaotian">芙莉莲</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/zhuzhuxia--ryde-play">猪猪侠</a> · 作者 <a href="https://github.com/RYDE-PLAY">@RYDE-PLAY</a> · v2</li>
<li><a href="../../pets/gojo--lilokhalikfa">五条悟</a> · 作者 <a href="https://codex-pets.net/users/lilokhalikfa">@lilokhalikfa</a> · v1</li>
<li><a href="../../pets/han-li--metro186">韩立·结婴</a> · 作者 <a href="https://github.com/metro186">@metro186</a> · v2</li>
<li><a href="../../pets/ikaros--icarus-alpha">伊卡洛斯</a> · 作者 <a href="https://codex-pets.net/users/icarus-alpha">@icarus-alpha</a> · v1</li>
<li><a href="../../pets/isekaijoucho--siiverash">Isekaijoucho</a> · 作者 <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · v1</li>
<li><a href="../../pets/jolyne-cujoh--d2682787206-sys">徐伦</a> · 作者 <a href="https://github.com/d2682787206-sys">@d2682787206-sys</a> · v2</li>
<li><a href="../../pets/kaguya-luna--enclairfarron">辉夜姬</a> · 作者 <a href="https://github.com/enclairfarron">@enclairfarron</a> · v2</li>
<li><a href="../../pets/kaiju-no-8--terry878">怪獸8號</a> · 作者 @TERRY878 · v2</li>
<li><a href="../../pets/kid--chenxin-dlut">怪盗基德</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/kid-goku--julianhuang">小悟空</a> · 作者 <a href="https://codex-pets.net/users/julianhuang">@julianhuang</a> · v1</li>
<li><a href="../../pets/levi--emrecb">利威尔</a> · 作者 <a href="https://codex-pets.net/users/emrecb">@emrecb</a> · v1</li>
<li><a href="../../pets/light-fury--legeling">Light Fury</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/luffy-gear-5--jordsshmords1">五档路飞</a> · 作者 <a href="https://codex-pets.net/users/jordsshmords1">@jordsshmords1</a> · v1</li>
<li><a href="../../pets/mahiro--lingxiaotian">绪山真寻</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/makima-coat--yuyuabc1">玛奇玛（外套）</a> · 作者 <a href="https://github.com/yuyuabc1">@yuyuabc1</a> · v2</li>
<li><a href="../../pets/makimamini--1sh1ro">玛奇玛</a> · 作者 @1sh1ro · v1</li>
<li><a href="../../pets/makisekurisu--m1gr4ine">牧濑红莉栖</a> · 作者 @m1gr4ine · v1</li>
<li><a href="../../pets/mihari--hyoni1129">Mihari</a> · 作者 <a href="https://github.com/Hyoni1129">@Hyoni1129</a> · v1</li>
<li><a href="../../pets/mikoto--lingxiaotian">御坂美琴</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/miku--lingxiaotian">初音未来</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
<li><a href="../../pets/misaka-network--ldl1234">御坂网络</a> · 作者 <a href="https://github.com/ldl1234">@ldl1234</a> · v2</li>
<li><a href="../../pets/nimbus--soraberu">筋斗云悟空</a> · 作者 <a href="https://codex-pets.net/users/soraberu">@soraberu</a> · v1</li>
<li><a href="../../pets/rem--l1">蕾姆</a> · 作者 <a href="https://codex-pets.net/users/l1">@l1</a> · v1</li>
<li><a href="../../pets/rinami--siiverash">Rinami Himesaki</a> · 作者 <a href="https://github.com/SiIverAsh">@SiIverAsh</a> · v1</li>
<li><a href="../../pets/roxy-pixel--gravity">Roxy Pixel</a> · 作者 @gravity · v1</li>
<li><a href="../../pets/saber--petdex-zhenyou-ling">阿尔托莉雅</a> · 作者 @真宵 绫. · v1</li>
<li><a href="../../pets/saiki-kusuo--yjt0416">齐木楠雄</a> · 作者 <a href="https://github.com/yjt0416">@yjt0416</a> · v1</li>
<li><a href="../../pets/sakamoto--zpzjzj">阪本</a> · 作者 <a href="https://github.com/zpzjzj">@zpzjzj</a> · v2</li>
<li><a href="../../pets/gintoki-pixel--yuu-m">坂田银时</a> · 作者 @Yuu M. · v1</li>
<li><a href="../../pets/shinchan--chenxin-dlut">野原新之助</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/takamatsu-tomori--a1wace-dev">高松灯</a> · 作者 @A1wace-dev · v2</li>
<li><a href="../../pets/togawa-sakiko--enclairfarron">丰川祥子</a> · 作者 <a href="https://github.com/enclairfarron">@enclairfarron</a> · v2</li>
<li><a href="../../pets/toothless--legeling">Toothless</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/toyama-kasumi--lsmd23">户山香澄</a> · 作者 <a href="https://github.com/lsmd23">@lsmd23</a> · v2</li>
<li><a href="../../pets/violet--lazenca">薇尔莉特</a> · 作者 <a href="https://codex-pets.net/users/lazenca">@lazenca</a> · v1</li>
<li><a href="../../pets/wakaba-mutsumi--carambola">若叶睦</a> · 作者 @Carambola · v2</li>
<li><a href="../../pets/inosuke-hashibira--wangfan002">嘴平伊之助</a> · 作者 @wangfan002 · v1</li>
<li><a href="../../pets/nangong-wan--bpup">南宫婉</a> · 作者 <a href="https://github.com/bpup">@bpup</a> · v2</li>
<li><a href="../../pets/zenitsu-agatsuma--wangfan002">我妻善逸</a> · 作者 @wangfan002 · v1</li>
<li><a href="../../pets/giyu-tomioka--wangfan002">富冈义勇</a> · 作者 @wangfan002 · v1</li>
<li><a href="../../pets/muichiro-tokito--wangfan002">时透无一郎</a> · 作者 @wangfan002 · v1</li>
<li><a href="../../pets/tanjiro-kamado--wangfan002">灶门炭治郎</a> · 作者 @wangfan002 · v1</li>
<li><a href="../../pets/nezuko-kamado--wangfan002">灶门祢豆子</a> · 作者 @wangfan002 · v1</li>
<li><a href="../../pets/luo-xiaohei--legeling">罗小黑</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/fujiwara-chika--klmklmnb">藤原千花</a> · 作者 <a href="https://github.com/klmklmnb">@klmklmnb</a> · v2</li>
<li><a href="../../pets/shinobu-kocho--wangfan002">蝴蝶忍</a> · 作者 @wangfan002 · v1</li>
<li><a href="../../pets/han-li--legeling">韩立</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/bocchi--lingxiaotian">后藤独</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v1</li>
</ul>

### 原创角色

<ul>
<li><a href="../../pets/aiko--chenxin-dlut">爱子</a> · 作者 <a href="https://github.com/chenxin-dlut">@chenxin-dlut</a> · v1</li>
<li><a href="../../pets/chud-codex--jorge-cuevas90003">Chud Codex</a> · 作者 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="../../pets/codexy--z19t">码灵</a> · 作者 <a href="https://github.com/z19t">@z19t</a> · v2</li>
<li><a href="../../pets/diana--am">Diana</a> · 作者 @am · v1</li>
<li><a href="../../pets/hajimi--zeyuwang1999">Hajimi</a> · 作者 <a href="https://github.com/zeyuwang1999">@zeyuwang1999</a> · v1</li>
<li><a href="../../pets/hamo--haipengzzz">Hamo</a> · 作者 <a href="https://github.com/haipengzzz">@haipengzzz</a> · v2</li>
<li><a href="../../pets/hana2--initiatione">Hana2</a> · 作者 <a href="https://github.com/initiatione">@initiatione</a> · v1</li>
<li><a href="../../pets/iris--yau-427">Iris</a> · 作者 <a href="https://github.com/Yau-427">@Yau-427</a> · v2</li>
<li><a href="../../pets/jesse-the-fox--itjesse">阿博</a> · 作者 <a href="https://github.com/ITJesse">@ITJesse</a> · v2</li>
<li><a href="../../pets/joker--oytyo">Joker</a> · 作者 @oytyo · v2</li>
<li><a href="../../pets/linnea--nyakku-shigure">Linnea</a> · 作者 @nyakku-shigure · v1</li>
<li><a href="../../pets/lumei--dagwbl">噜妹</a> · 作者 <a href="https://github.com/Dagwbl">@Dagwbl</a> · v2</li>
<li><a href="../../pets/mika--rotl24">Mika</a> · 作者 <a href="https://github.com/ROTl24">@ROTl24</a> · v1</li>
<li><a href="../../pets/minty--somnusochi">Minty</a> · 作者 <a href="https://github.com/Somnusochi">@Somnusochi</a> · v2</li>
<li><a href="../../pets/ruruka--ltmcliao-cmyk">RuRuKa</a> · 作者 <a href="https://github.com/ltmcliao-cmyk">@ltmcliao-cmyk</a> · v1</li>
<li><a href="../../pets/shian-helper--mistyshen">Shian</a> · 作者 <a href="https://github.com/mistyShen">@mistyShen</a> · v1</li>
<li><a href="../../pets/warden-codex--jorge-cuevas90003">Warden Codex</a> · 作者 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="../../pets/yier--gbn666">Yi Er</a> · 作者 <a href="https://github.com/gbn666">@gbn666</a> · v1</li>
<li><a href="../../pets/yume-boundary--andy-meow">Yume</a> · 作者 @andy-meow · v1</li>
<li><a href="../../pets/yuzubou--keseras34938976">Yuzubou</a> · 作者 <a href="https://github.com/Keseras34938976">@Keseras34938976</a> · v1</li>
<li><a href="../../pets/gudong--rank">咕咚</a> · 作者 @Rank · v2</li>
<li><a href="../../pets/liubao--killyer">榴宝</a> · 作者 @killyer · v2</li>
<li><a href="../../pets/feibi--vanfff">菲比</a> · 作者 @vanfff · v1</li>
</ul>

### 吉祥物

<ul>
<li><a href="../../pets/aemeath-mini--cunuo">Aemeath Mini</a> · 作者 <a href="https://github.com/cuNuo">@cuNuo</a> · v1</li>
<li><a href="../../pets/apu--xchangee">Apu</a> · 作者 <a href="https://github.com/xchangee">@xchangee</a> · v1</li>
<li><a href="../../pets/claude--xiangking">Claude</a> · 作者 <a href="https://github.com/xiangking">@xiangking</a> · v1</li>
<li><a href="../../pets/twinkle-twinkle--twinkletwinkle">Dashun&#39;s Twinkle Twinkle</a> · 作者 @twinkletwinkle · v1</li>
<li><a href="../../pets/diaoyi-baobao--d1a0y1bb">Diaoyi Baobao</a> · 作者 <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · v1</li>
<li><a href="../../pets/gpt-muse--opask">GPT-muse</a> · 作者 @opask · v1</li>
<li><a href="../../pets/lulu--yogazz">Lulu</a> · 作者 <a href="https://github.com/YoGazz">@YoGazz</a> · v1</li>
<li><a href="../../pets/saki--rookie-09">Saki</a> · 作者 <a href="https://github.com/rookie-09">@rookie-09</a> · v1</li>
<li><a href="../../pets/serge-le-lapin--legeling">Serge le Lapin</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/sleepwing--lttxzmj">眠翼鸟</a> · 作者 <a href="https://github.com/lttxzmj">@lttxzmj</a> · v2</li>
<li><a href="../../pets/wally--wally025">Wally</a> · 作者 <a href="https://github.com/wally025">@wally025</a> · v1</li>
<li><a href="../../pets/zhengyin--noonwake">正音</a> · 作者 <a href="https://pets.usefulmint.com/?utm_source=awesome_codex_pet&utm_medium=directory&utm_campaign=founding_five&utm_content=zhengyin_listing">@noonwake-ai</a> · v2</li>
<li><a href="../../pets/happynailong--aquaxyy">大笑奶龙</a> · 作者 @aquaxyy · v1</li>
<li><a href="../../pets/bubu-codebrew-bear--xxhh0822">布布</a> · 作者 <a href="https://github.com/xxhh0822">@xxhh0822</a> · v2</li>
</ul>

### 动物伙伴

<ul>
<li><a href="../../pets/becky--natewanggg">Becky</a> · 作者 <a href="https://github.com/NateWanggg">@NateWanggg</a> · v1</li>
<li><a href="../../pets/bubu--gbn666">Bubu</a> · 作者 <a href="https://github.com/gbn666">@gbn666</a> · v1</li>
<li><a href="../../pets/corgi-companion--cxian0928-afk">Corgi Companion</a> · 作者 <a href="https://github.com/cxian0928-afk">@cxian0928-afk</a> · v1</li>
<li><a href="../../pets/desk-otter--zihualiu1997">Desk Otter</a> · 作者 <a href="https://github.com/zihualiu1997">@zihualiu1997</a> · v1</li>
<li><a href="../../pets/diandian--lllucasxu">Diandian</a> · 作者 <a href="https://github.com/LLLucasXU">@LLLucasXU</a> · v1</li>
<li><a href="../../pets/dudu-bubu--clembuilds">Dudu &amp; Bubu</a> · 作者 @clembuilds · v1</li>
<li><a href="../../pets/ella-wave--sehjk">Ella Wave</a> · 作者 @sehjk · v1</li>
<li><a href="../../pets/fleta--natewanggg">Fleta</a> · 作者 <a href="https://github.com/NateWanggg">@NateWanggg</a> · v1</li>
<li><a href="../../pets/frankie--aygunvarol">Frankie</a> · 作者 <a href="https://github.com/AygunVarol">@AygunVarol</a> · v1</li>
<li><a href="../../pets/jiji--yena">Jiji</a> · 作者 @yena · v1</li>
<li><a href="../../pets/kiko--untko">Kiko</a> · 作者 <a href="https://github.com/untko">@untko</a> · v2</li>
<li><a href="../../pets/kimoju--andiac">Kimoju</a> · 作者 @andiac · v2</li>
<li><a href="../../pets/lil-swole--gg0805">Lil Swole</a> · 作者 <a href="https://github.com/gg0805">@gg0805</a> · v2</li>
<li><a href="../../pets/little-sheep--mingdong">Little Sheep</a> · 作者 @MingDong · v1</li>
<li><a href="../../pets/mai--dwdestiny">Mai</a> · 作者 <a href="https://github.com/DwDestiny">@DwDestiny</a> · v1</li>
<li><a href="../../pets/mellow-duck--sally-entr">Mellow Duck</a> · 作者 @sally-entr · v1</li>
<li><a href="../../pets/mimi--spacebody">Mimi</a> · 作者 <a href="https://github.com/Spacebody">@Spacebody</a> · v1</li>
<li><a href="../../pets/moomew-coder-cat--ping">MooMew Coder</a> · 作者 @ping · v1</li>
<li><a href="../../pets/panda--jason-bai">Panda</a> · 作者 <a href="https://github.com/Jason-Bai">@Jason-Bai</a> · v1</li>
<li><a href="../../pets/pixel-duck--flamurmaliqi">Pixel Duck</a> · 作者 <a href="https://github.com/FlamurMaliqi">@FlamurMaliqi</a> · v1</li>
<li><a href="../../pets/rook--klubbyte">Rook</a> · 作者 @klubbyte · v1</li>
<li><a href="../../pets/miu-meo--lemon-z">月薪喵</a> · 作者 @lemon-z · v2</li>
<li><a href="../../pets/salary-cat--zuochunjie">月薪喵</a> · 作者 <a href="https://github.com/Zuochunjie">@Zuochunjie</a> · v2</li>
<li><a href="../../pets/shaun--ryde-play">小羊肖恩</a> · 作者 <a href="https://github.com/RYDE-PLAY">@RYDE-PLAY</a> · v2</li>
<li><a href="../../pets/sunny-retriever--legeling">暖阳金毛</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/teddy--danieloleary">Teddy</a> · 作者 <a href="https://github.com/danieloleary">@danieloleary</a> · v1</li>
<li><a href="../../pets/tian-hua-hua--d1a0y1bb">Tian Hua Hua</a> · 作者 <a href="https://github.com/D1a0y1bb">@D1a0y1bb</a> · v1</li>
<li><a href="../../pets/usachi--jack">乌萨奇</a> · 作者 @jack · v1</li>
<li><a href="../../pets/yuanbao--legeling">元宝</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/dai-dai-nai-you--1wphantom">呆呆奶油</a> · 作者 @1wphantom · v2</li>
<li><a href="../../pets/tuantuan--jbbom">团团</a> · 作者 <a href="https://github.com/JbBom">@JbBom</a> · v1</li>
<li><a href="../../pets/duodong--froggie">多栋</a> · 作者 @froggie · v1</li>
<li><a href="../../pets/naiwa--sandytruant">奶蛙</a> · 作者 <a href="https://github.com/sandytruant">@sandytruant</a> · v2</li>
<li><a href="../../pets/xiaoba-cat--jack">小八猫</a> · 作者 @jack · v1</li>
<li><a href="../../pets/xiaomai--brian-3">小麦 XiaoMai</a> · 作者 @brian-3 · v2</li>
<li><a href="../../pets/koukou-penguin--hoody">扣扣企鹅</a> · 作者 @hoody · v2</li>
<li><a href="../../pets/capybara-lulu--jiushu">水豚噜噜</a> · 作者 @jiushu · v1</li>
<li><a href="../../pets/niumou--jarvis-2">牛哞</a> · 作者 @jarvis-2 · v2</li>
<li><a href="../../pets/zichao-xiong--z-kzhang">自嘲熊</a> · 作者 @z-kzhang · v1</li>
<li><a href="../../pets/jinmao--legeling">金毛</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/wucanrou--ch">金渐层（午餐肉）</a> · 作者 <a href="https://github.com/huanchu0213-ui">@huanchu0213-ui</a> · v2</li>
</ul>

### 幻想生物

<ul>
<li><a href="../../pets/behemoth--kajdrak2">Behemoth</a> · 作者 <a href="https://github.com/Kajdrak2">@Kajdrak2</a> · v2</li>
<li><a href="../../pets/goblin--rkwap">Goblin</a> · 作者 @rkwap · v1</li>
<li><a href="../../pets/luna-angel-cat--neve">luna_angel cat</a> · 作者 @neve · v2</li>
<li><a href="../../pets/night-neko--netizenxuan">Night Neko</a> · 作者 <a href="https://github.com/netizenXuan">@netizenXuan</a> · v1</li>
<li><a href="../../pets/starcorn--alterhq">Starcorn</a> · 作者 <a href="https://github.com/alterhq">@alterhq</a> · v1</li>
<li><a href="../../pets/xian-xiao-lu--qingyunagi">Xian Xiao Lu</a> · 作者 <a href="https://github.com/qingyunAGI">@qingyunAGI</a> · v1</li>
<li><a href="../../pets/yuanzai--gaming33">Yuanzai</a> · 作者 <a href="https://github.com/Gaming33">@Gaming33</a> · v1</li>
</ul>

### 机器人

<ul>
<li><a href="../../pets/chispa--giiilberto-nm">Chispa</a> · 作者 @giiilberto-nm · v1</li>
<li><a href="../../pets/codenono--dq02">CodeNoNo</a> · 作者 <a href="https://github.com/Dqd02">@Dqd02</a> · v1</li>
<li><a href="../../pets/crt-monitor--wxy">CRT 显示器</a> · 作者 @wxy · v2</li>
<li><a href="../../pets/xiaoda--legeling">小达</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
</ul>

### 人物头像

<ul>
<li><a href="../../pets/azuma--tairazuma">Azuma</a> · 作者 @tairazuma · v1</li>
<li><a href="../../pets/tangdouren--carl312">Tangdouren</a> · 作者 <a href="https://github.com/Carl-312">@Carl-312</a> · v1</li>
<li><a href="../../pets/guga--circus">咕嘎</a> · 作者 @circus · v1</li>
<li><a href="../../pets/fengge--qzl1-stack">峰哥</a> · 作者 <a href="https://github.com/qzl1-stack">@qzl1-stack</a> · v1</li>
<li><a href="../../pets/xiang-an--legeling">翔安</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
</ul>

### 网络梗图

<ul>
<li><a href="../../pets/drill-cat--qimi">电钻咪</a> · 作者 <a href="https://github.com/qishichuan">@qishichuan</a> · v2</li>
<li><a href="../../pets/hami--tat">哈基米</a> · 作者 <a href="https://github.com/TATcc">@TATcc</a> · v2</li>
<li><a href="../../pets/katana-cheems--thankyou-cheems">Katana Cheems</a> · 作者 <a href="https://github.com/Thankyou-Cheems">@Thankyou-Cheems</a> · v1</li>
<li><a href="../../pets/pickle-rick--ryde-play">Pickle Rick</a> · 作者 <a href="https://github.com/RYDE-PLAY">@RYDE-PLAY</a> · v2</li>
<li><a href="../../pets/hance-woniu--korn">旱厕蜗牛</a> · 作者 @korn · v2</li>
<li><a href="../../pets/niulai--legeling">牛来</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/niulaima--ryde-play">牛来妈</a> · 作者 <a href="https://github.com/RYDE-PLAY">@RYDE-PLAY</a> · v2</li>
<li><a href="../../pets/maodie--octane0411">耄耋</a> · 作者 <a href="https://github.com/Octane0411">@Octane0411</a> · v2</li>
</ul>

### 物件与道具

<ul>
<li><a href="../../pets/spellbook--seymour">Spellbook</a> · 作者 @seymour · v1</li>
<li><a href="../../pets/tiny-crt--chochou">Tiny CRT</a> · 作者 @chochou · v1</li>
</ul>

### 其他

<ul>
<li><a href="../../pets/agamemnon--kazecreator">Agamemnon</a> · 作者 <a href="https://github.com/kazecreator">@kazecreator</a> · v2</li>
<li><a href="../../pets/deepseek-girl--legeling">DeepSeek 娘</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/sylas-ravenshade--legeling">Sylas Ravenshade</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/templar-knight--jorge-cuevas90003">圣殿骑士</a> · 作者 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="../../pets/march-7th--legeling">三月七</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/kuromi--legeling">库洛米</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/wo-de-dao-dun--legeling">我的刀盾</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/xingxingren--legeling">星星人</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/izumi-konata--legeling">泉此方</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/yanlingji--jorge-cuevas90003">焰灵姬</a> · 作者 <a href="https://github.com/Jorge-Cuevas90003">@Jorge-Cuevas90003</a> · v2</li>
<li><a href="../../pets/yao-true-self-hertz--legeling">瑶-真我赫兹</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/twilight-sparkle--wuye3790">紫悦</a> · 作者 <a href="https://github.com/WuYe3790">@WuYe3790</a> · v2</li>
<li><a href="../../pets/longying--legeling">胧萤</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
<li><a href="../../pets/bond-forger--legeling">邦德·福杰</a> · 作者 <a href="https://github.com/legeling">@legeling</a> · v2</li>
</ul>

</details>

## 申请或投稿

没有喜欢的角色时，请打开[免费社区制作申请页](https://codexpet.top/zh/request)。提交申请不收费，不需要自己准备 spritesheet，社区贡献者可能会志愿认领并制作；申请不代表承诺收录或交付。

贡献者可以从[网站上的制作与投稿指南](https://codexpet.top/guide)开始。为了避免每位投稿者都下载体积较大的素材仓库，我们提供三条路径：

1. **请求制作宠物** — Codex 先检查重复项、收集参考和制作要求，再创建带标签的请求 Issue。
2. **制作或提交自己的宠物** — Codex 可以从参考图现场制作，也可以接收现成文件；完成三件套制作与校验后，通过 GitHub API 创建专用分支和 PR，无需完整克隆。
3. **高级 PR** — 熟悉 Git 的贡献者可以使用 GitHub Codespaces、部分克隆或自己的 Git 工作流。

仓库内的 [`.agents/skills/submit-codex-pet`](../../.agents/skills/submit-codex-pet) 会指导兼容的 AI 选择正确路径。若缺少凭据或仓库写入权限，它会退回到带标签的成品投稿 Issue，不会让投稿内容丢失。

高级贡献者只需添加一个最终成品包：

```text
pets/
└── pet-slug--author-slug/
    ├── submission.json
    ├── pet.json
    └── spritesheet.webp
```

目录名使用 `pet-slug--author-slug`，这样同一个角色的不同作者版本可以并存。v1 投稿可以省略 `spriteVersionNumber`，WebP 必须是 `1536x1872`；v2 投稿必须设置 `spriteVersionNumber: 2`，WebP 必须是 `1536x2288`。

v2 的运行时清单示例：

```json
{
  "id": "pet-slug--author-slug",
  "displayName": "Pet 名称",
  "description": "一句简短描述。",
  "spriteVersionNumber": 2,
  "spritesheetPath": "spritesheet.webp"
}
```

预览图和 README 收录表都由 CI 自动生成：

```bash
python -m pip install -r requirements.txt
npm run validate:pr
npm run lint
```

贡献者 PR 只需提交 `submission.json`、`pet.json` 和 `spritesheet.webp`。不要提交 prompts、参考图、QA 目录、contact sheet、视频、解码帧或 Hatch Pet 运行目录。预览图、README 收录和 `pets.json` 由维护者或 CI 在合并后统一生成，但预览二进制不会长期作为 Git 跟踪文件保留。

## 制作 Pet

- [.agents/skills/submit-codex-pet](../../.agents/skills/submit-codex-pet) — 请求社区制作、通过 GitHub API 制作或提交自己的宠物，或准备高级 PR
- [.agents/skills/hatch-pet-v1](../../.agents/skills/hatch-pet-v1) — 保留或修复旧版 8x9 v1 宠物
- [.agents/skills/hatch-pet-v2](../../.agents/skills/hatch-pet-v2) — 创建或升级带 16 个环视方向的 8x11 v2 宠物

调用时要显式选择 skill。升级已有宠物时，把现有的 `pet.json` 和 `spritesheet.webp` 交给 `$hatch-pet-v2`；通过审核的第 0–8 行会被保留，不会重新生成。

## 文档

- English: [docs/en](../en)
- 简体中文: [docs/zh-CN](./)
- 한국어: [docs/ko](../ko)
- 日本語: [docs/ja](../ja)
- Español: [docs/es](../es)
- 在线画廊源码: [web/](../../web)
- 统计 Worker: [worker/](../../worker)
- 贡献指南: [CONTRIBUTING.md](./CONTRIBUTING.md)

## 星标历史

[![Awesome Codex Pet 的 GitHub 星标历史](../../assets/community/star-history.svg)](https://github.com/legeling/awesome-codex-pet/stargazers)

图表每天根据 GitHub 星标数据自动更新。欢迎[为仓库点亮 Star](https://github.com/legeling/awesome-codex-pet)，让更多人发现这些精品宠物。

## 贡献者

<a href="https://github.com/legeling/awesome-codex-pet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=legeling/awesome-codex-pet" alt="Awesome Codex Pet 贡献者">
</a>

感谢每一位贡献宠物、代码、文档、审核与创意的朋友。

## 许可说明

- 代码和脚本：[MIT](../../LICENSE)
- 宠物资产和自动生成预览：[CC BY-NC 4.0](../../ASSETS-LICENSE.md)，除非具体宠物目录另有说明
