# dsh-skill-job-search-automation

A **DeepSeek Harness (DSH) bundle** that ships the `job-search-automation` agent skill:
求职自动化 —— 从建档、简历优化、岗位筛选、公司尽调、打招呼、对话推进到约面试，并含拟人化节奏与反爬止损。

装好后新开一个会话，说「帮我找工作」，技能就会出现在可用清单里。

---

## 安装（三种方式，任选）

### ① npm / 任意 registry（推荐）

```bash
dsh plugin --profile <profile> install dsh-skill-job-search-automation
```

或在 Plugins 面板 → **Add plugin** → 填入包名。

### ② 本地 tarball

```bash
npm pack                      # 生成 dsh-skill-job-search-automation-1.0.0.tgz
dsh plugin --profile <profile> install ./dsh-skill-job-search-automation-1.0.0.tgz
```

或在 Plugins 面板 → **Add plugin** → 选择该 `.tgz`。

### ③ 纯文件方式（不用插件系统）

把 `skill/` 目录复制到 `~/.dsh/skills/job-search-automation/`（Windows：`%USERPROFILE%\.dsh\skills\`）。
DSH 会自动发现，无需重启。

---

## 它做什么

| 模块 | 内容 |
|---|---|
| `skill/SKILL.md` | 主入口：何时用、**六条铁律**、主流程、目标终点、快速判断、操作纪律、常见误区 |
| `skill/references/00-intake.md` | 开工前五步 + 候选人档案模板 + 卖点卡口径 |
| `skill/references/01-channels-and-ops.md` | BOSS直聘/猎聘/智联地图与登录、检索三路径、反爬参数、坐标换算、前台锁、安全底线 |
| `skill/references/02-screening-and-dd.md` | 五维匹配、红线、8 类排除（含**平台错配判据**）、两级背调判级 |
| `skill/references/03-scripts-and-conversation.md` | 三版招呼、三分支、谈薪四场景、学历/离职怎么答、追问阶梯、30 分钟接管 |
| `skill/references/04-deliverables.md` | 六份交付物（档案/卖点卡/案例索引/台账/面试包/日报）+ 日志规范 + 闭环 |

## 六条铁律（摘自 SKILL.md）

1. **联系方式只走平台按钮** —— 聊天文字里绝不写手机号/微信号，否则平台打码+警告，多次违规封号
2. **先聊后判** —— 问过、对方明确答了，才婉拒；不能只凭 JD 上的薪资/城市拒人
3. **不群发模板** —— 每条按 JD 重写 2–3 处
4. **不虚构** —— 学历/任职时间/业绩一律按事实，无法核实的标「待核实」
5. **不抢用户的鼠标** —— 用户在用电脑时（前台锁）只做后台读取与起草
6. **不越权** —— 薪资/城市底线、要不要入职，必须回问本人

## 技术实现

一个 **bundled skill provider**：`index.js` 在 `ctx.skills` 上注册一个 provider，
技能正文与 `references/` 一起打进包里（`skill/`），因此不依赖用户本地技能目录。

```js
export const inject = ['skills']
export function apply(ctx) {
  ctx.skills.registerProvider(() => provider)   // provider: { name, list, get }
}
```

`cordis.patch.yml` 只插入一行：

```yaml
- insert:
    - id: job-search-automation-skill
      name: 'dsh-skill-job-search-automation'
```

## 踩过的坑（打包前必看）

| 坑 | 现象 | 正解 |
|---|---|---|
| **JSON 带 BOM** | 安装报 `SyntaxError: Unexpected token '\ufeff'` | 所有 `.json` 必须 **UTF-8 无 BOM** 写入（PowerShell: `[System.Text.UTF8Encoding]::new($false)`） |
| **符号链接目录** | `cannot resolve profile bundle ... from the dsh installation or profile` | 用 **tarball 或 npm 包**安装，不要直接装一个被 junction 的目录 |
| **frontmatter 冒号** | 技能被静默丢弃，`skill` 报 unknown 且无诊断 | `description` 等字段**用双引号包住**（内容里的 `): ` 会打断 YAML 纯量） |
| **exports 缺 package.json** | 解析器读不到清单 | `exports` 里加 `"./package.json": "./package.json"` |

## 已知限制

- 平台界面会变，`01-channels-and-ops.md` 的按钮位置与 URL 需按实际版本校准
- 外部尽调（社保/官司/口碑）依赖联网检索；不可用时技能要求**如实说明未做**
- 各平台反爬策略不同，风控触发必须停下交给人处理，**不要靠加重试解决**
- 本包**不含任何真实候选人数据**（姓名/电话/公司/业绩）

## 许可

MIT
