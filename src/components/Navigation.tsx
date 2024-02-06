'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { mainMenu } from '@/data/mainMenu'
import { Dialog } from '@headlessui/react'
import Logo from '@/components/Logo'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="absolute top-0 z-10 w-full">
      <nav
        className="container relative mx-auto flex flex-wrap items-center justify-between px-6 py-8 lg:px-8"
        aria-label="Global"
      >
        <div className="ml-auto lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Apri il menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Link href={'/'} className="hidden lg:block">
          <Logo className="h-12 w-12" />
        </Link>
        <div className="hidden lg:flex lg:gap-x-12">
          {mainMenu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'text-sm leading-6 text-gray-900',
                pathname === item.href ? 'font-bold' : '',
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/*Mobile version*/}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={'/'} className="-m-1.5 p-1.5">
              <span className="sr-only">AlessandriaScout</span>
              <Logo className="h-10 w-auto" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {mainMenu.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      '-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50',
                      pathname === item.href ? 'font-bold' : '',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Navigation
