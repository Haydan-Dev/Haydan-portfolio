import data from '../data/data.json'

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3H9a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-4 py-20 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Featured{' '}
          <span className="text-red-600 dark:text-red-500">Projects</span>
        </h2>
        <p className="mb-12 text-center text-gray-600 dark:text-gray-400">
          A selection of work I&apos;m proud of
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {data.projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-black"
            >
              <div
                aria-hidden="true"
                className="h-40 w-full bg-gradient-to-r from-red-500/20 to-transparent dark:from-red-500/30"
              />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-bold text-black transition-colors group-hover:text-red-600 dark:text-white dark:group-hover:text-red-500">
                  {project.title}
                </h3>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {(project.techStack || []).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-red-600/10 px-2.5 py-0.5 text-xs font-medium text-red-600 dark:bg-red-500/10 dark:text-red-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-black transition-all hover:border-red-600 hover:text-red-600 dark:border-gray-700 dark:text-white dark:hover:border-red-500 dark:hover:text-red-500"
                  >
                    <GitHubIcon />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-black transition-all hover:border-red-600 hover:text-red-600 dark:border-gray-700 dark:text-white dark:hover:border-red-500 dark:hover:text-red-500"
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
