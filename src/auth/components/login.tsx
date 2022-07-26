/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')

  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          primary: colors.rose,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { ChevronRightIcon } from '@heroicons/react/solid';
import LoginButton from './login-button';
import {buildInfo} from "../../about/components/about";

export default function Login() {
  const {version} = buildInfo;
  return (
    <div className="bg-white h-screen">
      <main>
        {/* Hero section */}
        <div className="pt-8 overflow-hidden sm:pt-12 lg:py-48">
          <div className="mx-auto max-w-lg px-2 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="flex space-x-4">
                <img className="h-11 w-auto" src="/images/logo-2.png" alt="logo" />
                <img
                  className="h-11 w-auto"
                  src="/images/limon-logo-4.svg"
                  alt="limon logo"
                />
              </div>
              <div className="mt-20">
                <div>
                  <a href="/about" className="inline-flex space-x-4">
                    <span className="rounded bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-500 tracking-wide uppercase">
                      What&apos;s new
                    </span>
                    <span className="inline-flex items-center text-sm font-medium text-primary-500 space-x-1">
                      <span>Just shipped version {version}</span>
                      <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </a>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl tracking-tight font-bold text-gray-800 sm:text-5xl hero-text">
                    Order management for commercial diagnostic tests
                  </h1>
                  <p className="mt-6 text-lg text-gray-500">
                    Manage the lifecycle of commercial orders and patients.
                  </p>
                </div>
                <div className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                  <LoginButton />
                </div>
                <div className="mt-2">
                  <div className="inline-flex items-center divide-x divide-gray-300">
                    <div className="min-w-0 flex-1 py-1 text-sm text-gray-500 sm:py-3">
                      Use your{' '}
                      <span className="font-medium text-gray-900">
                        @delfidiagnostics.com
                      </span>{' '}
                      email to login
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="sm:relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="relative sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full">
                <img
                  className="w-full lg:h-full lg:max-w-none object-center object-cover"
                  src="/images/illustration-1.jpg"
                  alt="illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
// attribution for
// illustration 1: <a href='https://www.freepik.com/vectors/women-equality'>Women equality vector created by pikisuperstar - www.freepik.com</a>
// illustration 2: <a href='https://www.freepik.com/vectors/hand-drawn-people'>Hand drawn people vector created by pikisuperstar - www.freepik.com</a>
