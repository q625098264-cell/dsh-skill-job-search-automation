/**
 * Bundled skill provider for `job-search-automation`.
 * Registers one skill whose body and resources ship inside this package.
 */
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const PROVIDER_NAME = 'job-search-automation'
const SKILL_URL = new URL('./skill/SKILL.md', import.meta.url)
const RESOURCE_BASE = {
  kind: 'directory',
  path: fileURLToPath(new URL('./skill/', import.meta.url)),
}
const INVOCATION = { modelInvocable: true, userInvocable: true }
const DESCRIPTION =
  'Use when helping someone find a job end to end on Chinese recruiting platforms (BOSS直聘 / 猎聘 / 智联招聘 / 51job) — intake and resume rewriting, job sourcing and screening, company due diligence, outreach scripts, chat progression to interview plus WeChat, human-like pacing that avoids anti-bot bans, and the tracking artifacts (candidate profile, sell sheet, case index, ledger, daily report).'

const CANDIDATE = {
  name: 'job-search-automation',
  description: DESCRIPTION,
  invocation: INVOCATION,
  provider: PROVIDER_NAME,
  source: 'bundled',
  resourceBase: RESOURCE_BASE,
  rank: 600,
  locator: SKILL_URL,
}

const provider = {
  name: PROVIDER_NAME,
  list: () => Promise.resolve([CANDIDATE]),
  async get() {
    return {
      name: CANDIDATE.name,
      description: CANDIDATE.description,
      invocation: CANDIDATE.invocation,
      provider: CANDIDATE.provider,
      source: CANDIDATE.source,
      resourceBase: RESOURCE_BASE,
      content: await readFile(SKILL_URL, 'utf8'),
    }
  },
}

export const name = 'job-search-automation-skill'
export const inject = ['skills']

export function apply(ctx) {
  ctx.skills.registerProvider(() => provider)
}
