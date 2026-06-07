import data from '../data/data.json'
import resumePdf from '../assets/resume.pdf'

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-4 pt-16 text-center sm:px-6 lg:px-8"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-red-600 dark:text-red-500">
        {data.role}
      </p>

      <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Hi, I&apos;m{' '}
        <span className="text-red-600 dark:text-red-500">{data.name}</span>
      </h1>

      <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
        {data.bio}
      </p>

      <a
        href={resumePdf}
        download="Haydan_Resume.pdf"
        className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-red-600/25 active:scale-95 dark:bg-red-500 dark:hover:bg-red-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
        </svg>
        Download Resume
      </a>
    </section>
  )
}
