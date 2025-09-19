export const GoogleIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
)

export const MetaIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.00977 6.04102C3.00977 6.04102 3 7.76424 3 12.0308C3 16.2974 3.00977 18.0206 3.00977 18.0206C3.00977 18.0206 3.76424 18 8.03076 18C12.2973 18 14.0205 18.0098 14.0205 18.0098C14.0205 18.0098 14 16.2866 14 12.0201C14 7.75348 14.0205 6.03027 14.0205 6.03027C14.0205 6.03027 12.2973 6.04102 8.03076 6.04102C3.76424 6.04102 3.00977 6.04102 3.00977 6.04102ZM12.9795 12.0201C12.9795 15.2861 12.5811 17.0195 11.9951 17.0195C11.409 17.0195 10.6579 16.7656 9.39014 15.4844C7.75269 13.8291 7.10889 13.0322 7.10889 12.0201C7.10889 11.008 7.75391 10.2109 9.39258 8.55566C10.6604 7.27441 11.4102 7.02051 11.9963 7.02051C12.5811 7.02051 12.9795 8.75391 12.9795 12.0201ZM15.9697 6.02051C15.3838 6.02051 14.6326 6.2749 13.3652 7.55615C11.7266 9.21143 11.0815 10.0083 11.0815 11.0205C11.0815 12.0327 11.7278 12.8296 13.3652 14.4849C14.6338 15.7661 15.3838 16.02 15.9697 16.02C16.5557 16.02 16.9541 14.2871 16.9541 11.0205C16.9541 7.75391 16.5557 6.02051 15.9697 6.02051ZM17.9746 11.0205C17.9746 14.2871 17.9844 16.0103 17.9844 16.0103C17.9844 16.0103 19.2334 16.02 20.4858 16.02C20.7817 16.02 21 15.7598 21 15.4248V6.61572C21 6.28076 20.7817 6.02051 20.4858 6.02051C19.2334 6.02051 17.9844 6.01074 17.9844 6.01074C17.9844 6.01074 17.9746 7.75391 17.9746 11.0205Z"
      fill="#0866FF"
    />
  </svg>
)

export const MicrosoftIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.4 11.4H4V4h7.4v7.4z" fill="#F25022" />
    <path d="M20 11.4h-7.4V4H20v7.4z" fill="#7FBA00" />
    <path d="M11.4 20H4v-7.4h7.4V20z" fill="#00A4EF" />
    <path d="M20 20h-7.4v-7.4H20V20z" fill="#FFB900" />
  </svg>
)

export const CovariantIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 6 L18 12 L12 18 L6 12 Z" fill="currentColor" opacity="0.2" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
)

type CompanyName = 'google' | 'meta' | 'microsoft' | 'covariant'

export const getCompanyIcon = (company: string) => {
  const normalizedCompany = company.toLowerCase() as CompanyName

  const icons = {
    google: GoogleIcon,
    meta: MetaIcon,
    microsoft: MicrosoftIcon,
    covariant: CovariantIcon,
  }

  return icons[normalizedCompany] || null
}
