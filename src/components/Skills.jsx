import data from '../data/data.json'

const pillClass =
  'rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-black transition-all duration-300 hover:border-red-600 hover:shadow-[0_0_12px_rgba(220,38,38,0.5)] dark:border-gray-600 dark:text-white dark:hover:border-red-500 dark:hover:shadow-[0_0_12px_rgba(239,68,68,0.5)]'

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-4 py-20 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Skills &amp;{' '}
          <span className="text-red-600 dark:text-red-500">Technologies</span>
        </h2>
        <p className="mb-12 text-center text-gray-600 dark:text-gray-400">
          Tools and frameworks I work with daily
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {Object.entries(data.skills).map(([category, skillList]) => (
            <article
              key={category}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-900"
            >
              <h3 className="mb-5 text-lg font-bold text-red-600 dark:text-red-500">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span key={skill} className={pillClass}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
