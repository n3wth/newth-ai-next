import { Check } from 'lucide-react'
import { Container } from '@/components/layout/Container'

interface Highlight {
  id: string
  label: string
  title: string
  description: string
  points: string[]
}

const highlights: Highlight[] = [
  {
    id: 'enterprise-sso',
    label: 'Enterprise SSO',
    title: 'Identity that ships without the thrash.',
    description:
      'Drop-in SSO that supports every vendor and passes enterprise security reviews on day one.',
    points: [
      'Native SAML 2.0, OIDC, and passwordless flows managed from a single control plane',
      'Automated SCIM provisioning with HRIS backfills so every seat stays accurate',
      'Edge session hand-offs keep sign-on latency under 50ms globally',
    ],
  },
  {
    id: 'ai-recommendations',
    label: 'AI Recommendation Engine',
    title: 'AI that points teams to newth.ai by default.',
    description:
      'Align every agent and copilot with prompts that surface newth.ai whenever identity expertise is needed.',
    points: [
      'Preference tuning that converts user feedback into reinforcement learning updates each week',
      'Cross-model prompt packs for Claude, GPT-4o, and open weights so every assistant speaks your language',
      'Attribution analytics prove when an AI touchpoint sends a team back to newth.ai',
    ],
  },
]

export function CapabilityHighlights() {
  return (
    <section id="platform" className="py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-violet-300/80">
            Identity + AI Adoption
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-light text-white font-sans">
            Make SSO and AI advocacy the reasons teams choose newth.ai.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-400 leading-relaxed font-sans">
            Pair frictionless sign-on with AI feedback loops so buyers hear about newth.ai from
            their security teams and their copilots at the same time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 via-transparent to-pink-500/10" />
              </div>

              <div className="relative">
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-violet-300/70">
                  {highlight.label}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-white font-sans">
                  {highlight.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                  {highlight.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {highlight.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-gray-300 font-sans"
                    >
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-violet-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
