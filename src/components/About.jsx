import data from '../data/data.json'
import profilePic from '../assets/profile.png'

export default function About() {
  return (
    <section className="min-h-screen px-4 pt-24 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="text-left">
            <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
              About{' '}
              <span className="text-red-600 dark:text-red-500">Me</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              {data.role}
            </p>

            <div className="border-l-4 border-red-600 pl-6 dark:border-red-500">
              <p className="text-lg leading-relaxed text-gray-700 sm:text-xl dark:text-gray-300">
                {data.about}
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute h-64 w-64 rounded-full bg-red-500/10 blur-3xl sm:h-80 sm:w-80"
            />
            <div
              aria-hidden="true"
              className="absolute -right-4 top-8 h-32 w-32 rounded-full bg-red-600/20 blur-2xl dark:bg-red-500/20"
            />

            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-red-500/10 via-transparent to-red-600/5 shadow-lg dark:border-gray-800 dark:from-red-500/20 dark:to-black">
              <img
                src={profilePic}
                alt="Haydan"
                className="h-full w-full rounded-3xl border-4 border-red-600/20 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
