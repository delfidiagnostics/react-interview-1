import {classNames} from "../../common/helpers";
import {Fragment, SVGProps, useState} from "react";
import {CreditCardIcon, OfficeBuildingIcon, UserIcon} from "@heroicons/react/solid";
import {Tab} from "@headlessui/react";
import Empty from "../../common/components/empty";
import {UsersIcon} from "@heroicons/react/outline";
import {FlatButton, PrimaryButton, SecondaryButton} from "../../common/elements/button";

interface TabItem {
    name: string;
    href: string;
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    content?: () => JSX.Element;
    current?: boolean;
    count?: number;
}

const tabs: TabItem[] = [
    {
        name: 'Clinical', href: 'clinical-history', icon: UserIcon, current: true
        // content: ClinicalHistory
    },
    {
        name: 'Addresses',
        href: 'patient-address-history',
        icon: OfficeBuildingIcon,
        // content: PatientAddressHistory
    },
    {
        name: 'Billing', href: 'patient-billing', icon: CreditCardIcon,
        // content: Loading
    },
    {
        name: 'Duplicates ', href: 'duplicate-patients', icon: UsersIcon, count: 3
        // content: Loading
    },
]
export function ClinicalHistory(){
    console.log('clinical history');
    return (
        <Empty message={'No Clinical information yet'}/>
    )
}
export function PatientAddressHistory(){
    console.log('pah');
    return (
        <section>
            <form action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Address</h3>
                            <p className="mt-1 text-sm text-gray-500">Current and past
                                addresses.</p>
                        </div>

                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="phone"
                                       className="block text-sm font-medium text-gray-700">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    autoComplete="phone"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                />
                            </div>


                            <div className="col-span-6">
                                <label htmlFor="street-address"
                                       className="block text-sm font-medium text-gray-700">
                                    Street address
                                </label>
                                <input
                                    type="text"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label htmlFor="city"
                                       className="block text-sm font-medium text-gray-700">
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label htmlFor="region"
                                       className="block text-sm font-medium text-gray-700">
                                    State / Province
                                </label>
                                <input
                                    type="text"
                                    name="region"
                                    id="region"
                                    autoComplete="address-level1"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label htmlFor="postal-code"
                                       className="block text-sm font-medium text-gray-700">
                                    ZIP / Postal code
                                </label>
                                <input
                                    type="text"
                                    name="postal-code"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="country"
                                       className="block text-sm font-medium text-gray-700">
                                    Country
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
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
    )
}

export default function PatientDetails() {
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
                                                'bg-yellow-300 text-gray-800',
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
                    <Tab.Panel><ClinicalHistory/></Tab.Panel>
                    <Tab.Panel><PatientAddressHistory/></Tab.Panel>
                    <Tab.Panel><Empty message={'No Billing information yet'}/></Tab.Panel>
                    <Tab.Panel><Empty message={'3 duplicates found'}/></Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
        // <>
        //     <Routes>
        //         <Route path="/" element={(<div>
        //             <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
        //                  aria-label="Tabs">
        //                 {tabs.map((tab, tabIdx) => (
        //                     <a
        //                         key={tab.name}
        //                         href={'/patient/'+tab.href}
        //                         className={classNames(
        //                             tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
        //                             tabIdx === 0 ? 'rounded-l-lg' : '',
        //                             tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
        //                             'group inline-flex relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
        //                         )}
        //                         aria-current={tab.current ? 'page' : undefined}
        //                     >
        //                         <tab.icon
        //                             className={classNames(
        //                                 tab.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
        //                                 '-ml-0.5 mr-2 h-5 w-5'
        //                             )}
        //                             aria-hidden="true"
        //                         />
        //                         <span>{tab.name}</span>
        //                         <span
        //                             aria-hidden="true"
        //                             className={classNames(
        //                                 tab.current ? 'bg-indigo-500' : 'bg-transparent',
        //                                 'absolute inset-x-0 bottom-0 h-0.5'
        //                             )}
        //                         />
        //                     </a>
        //                 ))}
        //             </nav>
        //             <Outlet/>
        //         </div>)}>
        //             <Route path='clinical-history' element={<ClinicalHistory/>}/>
        //             <Route path='patient-address-history' element={<PatientAddressHistory/>}/>
        //             <Route path='patient-billing' element={<Loading/>}/>
        //             <Route path='patient-attachments' element={<Loading/>}/>
        //         </Route>
        //     </Routes>
        //
        // </>

    )
}