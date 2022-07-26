import {UserCircleIcon} from "@heroicons/react/solid";
import {useDocumentTitle} from "../../common/hooks/useDocumentTitle";
import Comments from "../../comments/components/comments";
import PatientDetails from "./patient-details";
import {FlatButton, PrimaryButton, SecondaryButton} from "../../common/elements/button";
import {AnnotationIcon, ExclamationCircleIcon, FlagIcon, LockClosedIcon, PaperClipIcon} from "@heroicons/react/outline";
import {classNames} from "../../common/helpers";
import {Fragment, useState} from "react";
import {Tab} from "@headlessui/react";
import Empty from "../../common/components/empty";

const tabs = [
    { name: 'Discrepancies', href: '#', count: 10, icon: FlagIcon, current: false, bgColor: 'bg-yellow-300 text-gray-800' },
    { name: 'Comments', href: '#', count: 10, icon: AnnotationIcon, current: false, bgColor: 'bg-gray-300 text-gray-800' },
    { name: 'Attachments', href: '#', count: 2, icon: PaperClipIcon, current: false, bgColor: 'bg-gray-300 text-gray-800' },
]
export function CommentsTab() {
    const defaultTabIndex = 1;
    const [selectedTabIndex, setSelectedTabIndex] = useState(defaultTabIndex);
    return (
        <div>

            <Tab.Group selectedIndex={selectedTabIndex} onChange={setSelectedTabIndex}>
                <Tab.List className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                    {tabs.map((tab, tabIndex) => (
                        <Tab as={Fragment} key={tab.name}>
                            {({selected}) => (
                                <button onClick={() => setSelectedTabIndex(tabIndex)}
                                        className={classNames(
                                            selected ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                            tabIndex === 0 ? 'rounded-tl-lg' : '',
                                            tabIndex === tabs.length - 1 ? 'rounded-tr-lg' : '',
                                            'group inline-flex relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10 focus:outline-none'
                                        )}
                                        aria-current={selected ? 'page' : undefined}
                                >
                                    <tab.icon
                                        className={classNames(
                                            selected ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500',
                                            '-ml-0.5 mr-2 h-5 w-5 hidden md:inline-block'
                                        )}
                                        aria-hidden="true"
                                    />
                                    <span>{tab.name}</span>
                                    {tab.count ? (
                                        <span
                                            className={classNames(
                                                (tab.bgColor),
                                                'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block'
                                            )}
                                        >
                                        {tab.count}
                                      </span>
                                    ) : null}
                                    <span
                                        aria-hidden="true"
                                        className={classNames(
                                            selected ? 'bg-primary-500' : 'bg-transparent',
                                            'absolute inset-x-0 bottom-0 h-0.5'
                                        )}
                                    />
                                </button>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel><Empty message={'No discrepancies yet'}/></Tab.Panel>
                    <Tab.Panel><Comments/></Tab.Panel>
                    <Tab.Panel><Empty message={'No attachments yet'}/></Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>

    )
}
export default function Patient() {
    useDocumentTitle(['Patient', 'ST']);
    return (
        <>
            <div
                className="mt-8 max-w-3xl mx-auto flex flex-col gap-6 sm:px-6 lg:max-w-4xl">

                <div
                    className="flex justify-between">

                    <div className="flex items-center space-x-5">
                        <div className="flex-shrink-0">
                            <div className="relative">
                                <UserCircleIcon
                                    className="h-16 w-16 rounded-full"
                                />
                                <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true"/>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Geralt Rivia</h1>
                            <p className="text-sm font-medium text-gray-500">
                                Date of Birth: {' '}
                                <time dateTime="2020-08-25">August 25, 2020</time>
                            </p>
                        </div>

                    </div>


                    <div
                        className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">

                        <div className='flex sm:space-x-1'>

                            <span className='hidden sm:block text-yellow-600'>Possible duplicates found</span>
                            <ExclamationCircleIcon
                                className="h-6 w-6 text-yellow-500 "
                            />
                        </div>
                        <LockClosedIcon className="h-6 w-6 text-gray-500"/>
                    </div>

                </div>

                <div className="space-y-12">
                    <section>
                        <form action="#" method="POST">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                                    <div className='flex justify-between' >
                                        <div>
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Demographics</h3>
                                            <p className="mt-1 text-sm text-gray-500">Basic demographic information of
                                                the
                                                patient.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">SXD34GH</h3>
                                            <p className="mt-1 text-sm text-gray-500">
                                                Patient ID
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name"
                                                   className="block text-sm font-medium text-gray-700">
                                                First name
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
                                            <label htmlFor="last-name"
                                                   className="block text-sm font-medium text-gray-700">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="dob"
                                                   className="block text-sm font-medium text-gray-700">
                                                Date of Birth
                                            </label>
                                            <input
                                                type="text"
                                                name="dob"
                                                id="dob"
                                                autoComplete="dob"
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="sex"
                                                   className="block text-sm font-medium text-gray-700">
                                                Sex
                                            </label>
                                            <select
                                                id="sex"
                                                name="sex"
                                                autoComplete="sex"
                                                className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                            >
                                                <option>Female</option>
                                                <option>Male</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-between bg-gray-50 ">
                                    <div className="flex items-start justify-start space-x-3 px-4 py-3 text-right sm:px-6 text-sm text-gray-500">
                                        <p>Created: Jan 01, 2022</p>
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
                    <PatientDetails/>
                    <CommentsTab></CommentsTab>

                </div>
            </div>
        </>
    )
}