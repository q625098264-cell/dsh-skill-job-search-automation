---
name: job-search-automation
description: "Use when helping someone find a job end to end on Chinese recruiting platforms (BOSS直聘 / 猎聘 / 智联招聘 / 51job) — intake and resume rewriting, job sourcing and screening, company due diligence, outreach scripts, chat progression to interview plus WeChat, human-like pacing that avoids anti-bot bans, and the tracking artifacts (candidate profile, sell sheet, case index, ledger, daily report). Also use when a user asks to automate or systematize job hunting, or to review an existing job-search workflow."
whenToUse: "The user wants to find or switch jobs with an assistant doing the legwork; asks how to screen jobs, write outreach, handle HR replies, or prepare interviews; wants to avoid platform bans; or wants this playbook applied, adapted, or audited."
metadata:
  version: 1.0.0
  domain: job-search
  locale: zh-CN
---

# 求职自动化（Job Search Automation）

端到端把"找工作"变成一条可复用的流水线：**建档 → 尽调 → 推荐 → 打招呼 → 对话 → 面试 → Offer → 入职**，
并且在真实浏览器里操作时**像人而不像脚本**。

## 何时用

- 用户让你"帮我找工作 / 投简历 / 跟 HR 聊 / 约面试"
- 用户已有目标但没系统：需要筛选规则、话术、背调、节奏
- 用户想把这套流程变成可复用的 skill / SOP / 自动化

## 铁律（先读，违反会毁掉整个进程）

1. **联系方式只走平台按钮**。「换微信」「换电话」「发简历」——**聊天文字里绝不写手机号/微信号/邮箱/二维码/外链**。平台会打码并警告，多次违规封号，一封号前面所有沟通记录全丢。
2. **先聊后判，确认不合适再婉拒**。不能只凭 JD 上的薪资/城市就拒人；先答能力、再问决定性条件（底薪能不能谈、是否必须坐班），**问过了、对方明确答了**才婉拒。
3. **不群发模板**。每条消息按对方 JD 重写 2–3 处；同一句话发给 20 个人等于没发。
4. **不虚构**。学历、任职时间、业绩数字一律按事实；无法核实的标"待核实"。包装是表达的优化，不是事实的改写。
5. **不抢用户的鼠标**。用户在用电脑时（前台锁）停止输入类操作，只做后台读取与起草。
6. **不越权**。一句话只能由用户决定的事（接不接受某个薪资/城市、要不要入职）必须回问本人。

## 主流程

| 阶段 | 做什么 | 加载 |
|---|---|---|
| 0 开工前 | 要简历、要案例/流水路径、问清意向与红线、迷茫时给 2–3 个方向、优化包装、一岗一版 | `references/00-intake.md` |
| 1 渠道与操作 | 打开渠道、用户自己登录、逐渠道截图确认、反爬止损、坐标与前台锁 | `references/01-channels-and-ops.md` |
| 2 检索与尽调 | 多路径找岗、五维匹配、红线排查、平台错配判据、两级背调判级 | `references/02-screening-and-dd.md` |
| 3 打招呼与对话 | 三版话术、谈薪、三分支、追问阶梯、30 分钟接管 | `references/03-scripts-and-conversation.md` |
| 4 交付物与闭环 | 卖点卡、候选人档案、案例索引、投递台账、日报、面试包 | `references/04-deliverables.md` |

## 目标终点（定义"这一轮算成功"）

> **加到微信 + 定下具体面试时间（线上/线下），并同步候选人。**

只"投出去"不算进展；只"发了招呼"也不算。没有回复的投递只是待办。

## 快速判断：这个岗值不值得聊

**值得聊**：城市对 + 职责重合 ≥70% + 岗位写的薪资上限 ≥ 你的底线 + 主体是企业（非个体户）
**要问穿**：发布薪资低但类目对口（先问底薪能不能谈）、公司过小/过新（问合同主体与社保基数）
**直接放掉**：平台错配（淘天岗 vs 抖音岗）、学历硬卡、主播/销售/文员等岗位性质不同、收费押金强制入股

## 操作纪律（真实环境里最常踩）

- 动手前 `activate_window` 目标窗口，**再点、再粘贴**；两个浏览器窗口重叠时尤其要确认焦点
- 截图换算坐标：`screen = 窗口原点 + 图内px / imageScale`
- 消息列表会随新消息重排：点之前截图确认行坐标，点之后确认头部姓名
- 页面空白先 F5，不要慌也不要重复操作
- 遇到验证码/风控/频繁弹窗：**立即停下，截图说明，请用户处理**，不反复重试加码封控

## 常见误区

| 误区 | 正解 |
|---|---|
| 一轮投 50 家 = 努力 | 33 家 0 回复说明路子错了，先看平台活跃时间与话术长度 |
| 长文显得专业 | 300+ 字在手机上会被划走，短句 + 一个封闭式提问回复率更高 |
| 猎聘不回就是没戏 | 猎头集中在 9–11 点、17–19 点处理，其余时间多为"未读" |
| 发布薪资低就拒 | 先问无责任底薪能不能谈 |
| 聊完就等 | 每个节点都要向候选人要反馈，否则会重复聊同一家企业 |

## 资源

| 文件 | 内容 |
|---|---|
| `references/00-intake.md` | 开工前五步、候选人档案模板、卖点卡口径 |
| `references/01-channels-and-ops.md` | 三大平台界面与按钮地图、登录、反爬、坐标与前台锁 |
| `references/02-screening-and-dd.md` | 五维匹配、红线、平台错配判据、两级背调与判级 |
| `references/03-scripts-and-conversation.md` | 全套话术、三分支、追问阶梯、30 分钟接管与代答禁忌 |
| `references/04-deliverables.md` | 六份交付物的结构与写法 |
