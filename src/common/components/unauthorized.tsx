/* This example requires Tailwind CSS v2.0+ */
export default function NotFound() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="bg-white min-h-full flex flex-col lg:relative h-screen">
        <div className="flex-grow flex flex-col">
          <main className="flex-grow flex flex-col bg-white">
            <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 pt-10 sm:pt-16">
                <a href="/" className="inline-flex">
                  <span className="sr-only">Limon Logo</span>
                  <img className="h-12 w-auto" src="/images/logo-2.png" alt="" />
                </a>
              </div>
              <div className="flex-shrink-0 my-auto py-16 sm:py-32">
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                  403 error
                </p>
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Unauthorized
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Sorry, you are not authorized to view this page
                </p>
                <div className="mt-6">
                  <a
                    href="/"
                    className="text-base font-medium text-primary-600 hover:text-primary-500"
                  >
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-center object-contain"
            src="/images/uuundulate.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
