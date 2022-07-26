import {InboxIcon} from "@heroicons/react/solid";
import {FlatButton, PrimaryButton, SecondaryButton} from "../../common/elements/button";
import TimeLine, {TimeLineItem} from "../../common/components/timeline";
import {CommentsTab} from "../../patients/components/patient";
import {classNames} from "../../common/helpers";
import {ExclamationCircleIcon, ExternalLinkIcon, LockOpenIcon} from "@heroicons/react/outline";

const tabs = [
    { name: 'Patient', href: '#', current: false },
    { name: 'Provider', href: '#', current: true },
    { name: 'Specimen', href: '#', current: false },
    { name: 'Report', href: '#', current: false },
]
function Tabs() {
    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                    defaultValue={tabs.find((tab) => tab.current)?.name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                    {tabs.map((tab, tabIdx) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                                tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                tabIdx === 0 ? 'rounded-tl' : '',
                                tabIdx === tabs.length - 1 ? 'rounded-tr' : '',
                                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            <span>{tab.name}</span>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                    tab.current ? 'bg-primary-500' : 'bg-transparent',
                                    'absolute inset-x-0 bottom-0 h-0.5'
                                )}
                            />
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    )
}
const timeline = [
    {
        name: 'Created',
        content: 'Ivin Baker on Sep 20',
        href: '#',
        status: 'complete'
    },
    {
        name: 'Intake',
        content: 'Sarah Chalke on Sep 22',
        href: '#',
        status: 'current'

    },
    {
        name: 'Sequenced',
        content: 'waiting',
        href: '#',
        status: 'upcoming'
    },
    {
        name: 'Reported',
        content: 'waiting',
        href: '#',
        status: 'upcoming'
    }
] as TimeLineItem[];

export default function Order() {
    return (
        <div
            className="mt-6 max-w-3xl mx-auto grid grid-cols-1 gap-3 sm:px-6 lg:max-w-screen-2xl lg:grid-flow-col-dense lg:grid-cols-3 xl:max-w-screen-5xl xl:grid-cols-6">
            <div className="lg:col-start-1 lg:col-span-2 xl:col-start-1 xl:col-span-4">

                <div className="flex items-start justify-between space-x-4">
                    <div className='flex space-x-2'>
                        <div className="flex-shrink-0 pt-1 hidden lg:block">

                            <InboxIcon
                                className="h-16 w-16 rounded-full"
                            />
                            {/*<span className="flex items-center px-2.5 py-0.5 rounded-md text-xs md:text-sm font-medium bg-blue-100 text-blue-800">*/}
                            {/*    Pending*/}
                            {/*  </span>*/}
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs text-gray-400'>Patient</span>
                            <h1 className="text-sm md:text-2xl font-bold text-gray-900">Geralt Rivia</h1>
                            <p className="text-xs md:text-sm font-medium text-gray-500">
                                DOB: {' '}
                                <time dateTime="2020-08-25">August 25, 2020</time>
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xs text-gray-400'>Provider</span>
                        <h1 className="text-sm md:text-2xl font-bold text-gray-900 inline-flex items-center">Dr. Acula
                            <a href='#'>
                                <ExternalLinkIcon className='h-5 w-5 text-gray-600 ml-2'></ExternalLinkIcon>
                            </a>
                        </h1>
                        <p className="text-xs md:text-sm font-medium text-gray-500">
                            Kaiser Tempermente
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xs text-gray-400'>Order</span>
                        <h2 className='text-sm md:text-2xl font-bold text-gray-900'>SDTYER89</h2>
                        <p className="text-xs md:text-sm font-medium text-gray-500">
                            <time dateTime="2020-08-25">August 25, 2020</time>
                        </p>
                    </div>
                    {/*<div className='flex flex-col hidden items-center justify-center lg:block'>*/}
                    {/*    <span className="flex items-center px-2.5 py-0.5 rounded-md text-xs md:text-sm font-medium bg-blue-100 text-blue-800">*/}
                    {/*        Pending*/}
                    {/*      </span>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className='lg:col-start-3 lg:col-span-1  xl:col-start-5 xl:col-span-2'>
                <div className='flex flex-col space-y-2 justify-between'>
                    <div
                        className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
                        <PrimaryButton>Intake Complete</PrimaryButton>
                        <SecondaryButton>Cancel</SecondaryButton>
                    </div>
                    <div className='flex space-x-1 justify-end'>

                        <span className='hidden sm:block text-yellow-600'>Possible duplicates found</span>
                        <ExclamationCircleIcon
                            className="h-6 w-6 text-yellow-500 "
                        />
                        <LockOpenIcon className="h-6 w-6 text-gray-500"/>
                    </div>
                </div>
            </div>
            <div className="lg:col-start-1 lg:col-span-2 xl:col-start-1 xl:col-span-4">
                <Tabs/>
                <section>
                    <form action="#" method="POST">
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                                <div className='flex justify-between' >
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Provider</h3>
                                        <p className="mt-1 text-sm text-gray-500">Provider and ICD codes.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name"
                                               className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                        />
                                    </div>


                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="dob"
                                               className="block text-sm font-medium text-gray-700">
                                            NPI
                                        </label>
                                        <input
                                            type="text"
                                            name="dob"
                                            id="dob"
                                            autoComplete="dob"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className='bg-white py-6 px-4 space-y-6 sm:p-6'>
                                <h3 className='text-gray-400'>Account</h3>
                                <a className='inline-flex items-center' href='#'>
                                    <span className='text-gray-900'>Kaiser Tempermente, Palo Alto, CA</span>
                                    <ExternalLinkIcon className='h-5 w-5 text-gray-600 ml-2'></ExternalLinkIcon>
                                </a>
                            </div>
                            <div
                                className="flex items-center justify-between bg-gray-50 ">
                                <div className="flex items-start justify-start space-x-3 px-4 py-3 text-right sm:px-6 text-sm text-gray-500">
                                    <p>Created: Jan 1, 2022</p>
                                    <p>Modified: 1 day ago</p>
                                </div>
                                <div
                                    className="flex items-end justify-end space-x-3 px-4 py-3 text-right sm:px-6">
                                    <SecondaryButton>Edit</SecondaryButton>
                                    <PrimaryButton>Save</PrimaryButton>
                                    <FlatButton>Cancel</FlatButton>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>

            <div className="lg:col-start-1 lg:col-span-2 xl:col-start-1 xl:col-span-4">
                <CommentsTab></CommentsTab>
            </div>
            <div className='lg:col-start-3 lg:col-span-1  xl:col-start-5 xl:col-span-2 flex pt-4 lg:justify-end lg:items-center'>
                <TimeLine timeline={timeline}/>
            </div>
        </div>

    )
}