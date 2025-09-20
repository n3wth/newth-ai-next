import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Building2, Calendar } from 'lucide-react'
import { getCompanyIcon } from '@/components/CompanyIcons'
import { generateSEO } from '@/lib/metadata'

export const metadata = generateSEO({
  title: 'Work Experience',
  description:
    'Product management and engineering leadership at scale. From Google to startups, building AI products that impact billions.',
  path: '/work',
})

interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
  tech: string[]
  logo?: string
}

const experiences: Experience[] = [
  {
    id: 'google',
    company: 'Google',
    role: 'Senior Product Manager, ML Infrastructure',
    period: '2024 - Present',
    description:
      'Leading ML platform development supporting billions of daily predictions across 30+ product teams.',
    achievements: [
      'Reduced model deployment time by 78% across the organization',
      'Achieved 99.99% platform reliability (zero downtime in 2 years)',
      'Integrated DeepMind models into production surfaces',
      'Built infrastructure supporting 30+ product teams',
    ],
    tech: ['Python', 'TensorFlow', 'Kubernetes', 'GCP', 'ML Ops'],
  },
  {
    id: 'covariant',
    company: 'Covariant',
    role: 'Senior Product Manager, Vision AI',
    period: '2022 - 2024',
    description:
      'Built enterprise vision AI solutions for robotics, driving significant revenue before acquisition by Amazon.',
    achievements: [
      'Developed vision AI achieving 85% accuracy in complex environments',
      'Generated $100M+ projected revenue pipeline',
      'Led product through Amazon acquisition',
      'Scaled AI safety protocols increasing product safety by 20%',
    ],
    tech: ['Computer Vision', 'Robotics', 'Enterprise AI', 'ML Safety'],
  },
  {
    id: 'meta',
    company: 'Meta',
    role: 'Product Manager, Calling & Metaverse',
    period: '2017 - 2022',
    description:
      'Led development of Instagram Calling and AR/VR voice assistant, serving billions of users globally.',
    achievements: [
      'Launched Instagram Calling with 75% engagement increase',
      'Led cross-functional team of 60+ engineers',
      'Reduced harmful interactions by 25% through AI monitoring',
      'Increased MAU by 2M through AI-driven recommendations',
    ],
    tech: ['React', 'WebRTC', 'AR/VR', 'Real-time Systems', 'Trust & Safety'],
  },
  {
    id: 'microsoft',
    company: 'Microsoft',
    role: 'Program Manager II, Azure Cognitive Services',
    period: '2014 - 2017',
    description: 'Expanded Azure Cognitive Services language capabilities for enterprise clients.',
    achievements: [
      'Scaled NLP services to 25 languages',
      'Achieved 99.9% service reliability',
      'Increased enterprise adoption by 52%',
      'Led API development for AI-based language services',
    ],
    tech: ['Azure', 'NLP', 'API Design', 'Enterprise Sales', 'Cloud Computing'],
  },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-950 to-black text-white">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/10 rounded-full filter blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full filter blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to projects
            </Link>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6 leading-[1.15]">
                A decade of
                <span className="block">shipping at scale.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                From Azure to Google, I&apos;ve built AI products that serve billions. Here&apos;s
                the full story.
              </p>

              {/* Quick stats */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl font-light text-white">10+</div>
                  <div className="text-sm text-gray-400">Years in tech</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-white">4</div>
                  <div className="text-sm text-gray-400">FAANG companies</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-white">$100M+</div>
                  <div className="text-sm text-gray-400">Revenue impact</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-white">Billions</div>
                  <div className="text-sm text-gray-400">Users served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline connector */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-gray-700 to-transparent" />
                  )}

                  <div className="flex gap-8">
                    {/* Company icon */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center">
                      {(() => {
                        const Icon = getCompanyIcon(exp.company)
                        return Icon ? (
                          <Icon className="w-8 h-8" />
                        ) : (
                          <Building2 className="w-6 h-6 text-gray-400" />
                        )
                      })()}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="mb-4">
                        <h3 className="text-2xl font-semibold text-white mb-1">{exp.company}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                          <span className="text-gray-300 font-medium">{exp.role}</span>
                          <span className="text-gray-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-6">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-400 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                              <span className="text-violet-400 mt-1">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Section */}
            <div className="mt-24 pt-24 border-t border-gray-800">
              <h2 className="text-3xl font-normal text-white mb-8">Education</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Massachusetts Institute of Technology
                  </h3>
                  <p className="text-gray-400">MEng in High Performance Structures • 2013 - 2014</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Thesis: Predicting extreme events - the role of big data in quantifying risk
                  </p>
                  <p className="text-sm text-violet-400 mt-1">Kennedy Scholar</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">University of Warwick</h3>
                  <p className="text-gray-400">BEng in Civil Engineering • 2009 - 2012</p>
                  <p className="text-sm text-gray-500 mt-2">GPA: 4.0</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-normal mb-6 text-white">
              Want to build something together?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              I&apos;m always interested in ambitious projects that push boundaries.
            </p>
            <Link
              href="mailto:oliver@newth.ai"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-xl border border-gray-800 transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
