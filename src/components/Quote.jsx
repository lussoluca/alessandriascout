export function Quote() {
    return (
      <section className="hidden lg:block relative isolate overflow-hidden bg-white px-6 lg:px-8">
       <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-sm font-semibold leading-8 text-gray-900 sm:text-xl sm:leading-9">
              <p>
              &quot;Il vero modo di essere felici è quello di procurare la felicità agli altri.
                <br/>Preoccupatevi di lasciare questo mondo un po&apos; migliore di come lo avete trovato. 
                <br/>Mantenete la vostra promessa di esploratori anche quando non sarete più ragazzi e Dio vi aiuti in questo.&quot;
              </p>
            </blockquote>
            <figcaption className="mt-5">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Robert Baden-Powel</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Fondatore dello scoutismo</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
  