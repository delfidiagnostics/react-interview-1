import {DotsVerticalIcon} from "@heroicons/react/solid";
import {classNames} from "../../common/helpers";
import Order from "./order";
import Empty from "../../common/components/empty";

export interface Order {
    id: string;
    date: string;
    datetime: string;
    patient: {name: string, dob: string};
    provider: {name: string};
    product: {name: string};

}
const orders = [
    {
        id: 'SXD3GHI',
        date: '1d ago',
        datetime: '2021-01-27T16:35',
        patient: {
            name: 'Gloria Roberston',
            dob: '01/01/2020'
        },
        provider: {
            name: 'John Dorian'
        },
        product: {
            name: 'Lung Cancer Screening'
        }
    },
    {
        id: 'FGH891',
        date: '2d ago',
        datetime: '2021-01-27T16:35',
        patient: {
            name: 'Leslie Abbott',
            dob: '01/01/2020'
        },
        provider: {
            name: 'Carla Espinosa'
        },
        product: {
            name: 'Lung Cancer Screening'
        }
    },
    {
        id: 'YUTRZX5',
        date: '5d ago',
        datetime: '2021-01-27T16:35',
        patient: {
            name: 'Hector Adams',
            dob: '01/01/2020'
        },
        provider: {
            name: 'Elliot Reid'
        },
        product: {
            name: 'Lung Cancer Screening'
        }
    },
    {
        id: 'W234TYO',
        date: '6d ago',
        datetime: '2021-01-27T16:35',
        patient: {
            name: 'Blake Alexander',
            dob: '01/01/2020'
        },
        provider: {
            name: 'Laverne Roberts'
        },
        product: {
            name: 'Lung Cancer Screening'
        }
    },
    {
        id: 'CFGH567',
        date: '8d ago',
        datetime: '2021-01-27T16:35',
        patient: {
            name: 'Fabricio Andrews',
            dob: '01/01/2020'
        },
        provider: {
            name: 'John J Synth'
        },
        product: {
            name: 'Lung Cancer Screening'
        }
    },
    {
        id: '7YTGH56',
        date: '9d ago',
        datetime: '2021-01-27T16:35',
        patient: {
            name: 'Angela Beaver',
            dob: '01/01/2020'
        },
        provider: {
            name: 'John J Synth'
        },
        product: {
            name: 'Lung Cancer Screening'
        },
        dupes: {
            count: 0
        },
        discrepancies: {
            count: 0
        }
    },
    {
        id: 'PO98UI9',
        date: '10d ago',
        datetime: '2021-01-27T16:35',
        patient: {
            name: 'Yvette Blanchard',
            dob: '01/01/2020'
        },
        provider: {
            name: 'John J Synth'
        },
        product: {
            name: 'Lung Cancer Screening'
        }
    }
] as Order[];

const tabs = [
    { name: 'New', href: '#', count: '52', current: true },
    { name: 'Intake', href: '#', count: '6', current: false },
    { name: 'Reported', href: '#', count: 5, current: false },
    { name: 'All', icon: DotsVerticalIcon, href: '#', current: false },
]
function defaultTab(){
    return tabs.find(tab => tab.current)?.name;
}
function InboxTabs() {
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
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    defaultValue={defaultTab()}
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
                                'group relative min-w-0 flex-1 overflow-hidden bg-white py-3 px-1.5 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            <span>{tab.name}</span>
                            {tab.count ? (
                                <span
                                    className={classNames(
                                        tab.current ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900',
                                        'hidden ml-0.5 py-0.5 px-1.5 rounded-full text-xs font-medium md:inline-block'
                                    )}
                                >
                                        {tab.count}
                                    </span>
                            ) : null}
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
function Pagination() {
    return (
        <nav
            className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
            aria-label="Pagination"
        >
            <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                    <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                    <span className="font-medium">20</span> orders
                </p>
            </div>
            <div className="flex-1 flex justify-between sm:justify-end">
                <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
        </nav>
    )
}
interface OrderItemProps {
    order: Order

}
function OrderItem({order}: OrderItemProps ) {
    return (
        <div className={'flex flex-col space-y-1'}>
            <div className='flex justify-between'>
                <p className="flex flex-col text-xs text-gray-600">
                    {order.id}
                    {/*<span className='text-gray-400'>Order</span>*/}
                </p>
                <time
                    dateTime={order.datetime}
                    className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                >
                    {order.date}
                </time>
            </div>


            <div className="min-w-0 flex flex-1 space-x-1">
                <a className="block focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true"/>
                    <p className="line-clamp-2 text-sm font-medium text-gray-900 truncate">{order.patient.name}</p>
                </a>
            </div>

            <div>
                <p className="line-clamp-2 text-sm text-gray-600">Provider: {order.provider.name}</p>
            </div>

        </div>);
}
export default function OrderInbox() {
    return (
        <main className="min-w-0 flex-1 border-t border-gray-200 xl:flex">
            <section
                aria-labelledby="order-heading"
                className="min-w-0 flex-1 h-full flex flex-col overflow-hidden xl:order-last"
            >
                <Order/>
            </section>

            {/* Message list*/}
            <aside className="hidden xl:block xl:flex-shrink-0 xl:order-first">
                <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100">
                    <div className="flex flex-shrink-0 justify-between items-center bg-white border-t border-b border">
                        <div className="h-12 px-6 flex flex-col justify-center">
                            <div className="flex items-baseline space-x-3">
                                <h2 className="text-lg font-medium text-gray-900">Orders</h2>
                            </div>
                        </div>
                        <div
                            className="px-2 text-sm font-medium text-gray-500">
                            Sorted by date
                        </div>
                    </div>
                    <InboxTabs/>
                    <nav aria-label="Message list" className="min-h-0 flex-1 overflow-y-auto">
                        <ul role="list" className="border border-gray-200 divide-y divide-gray-200">
                            {orders.map((order) => (
                                <li
                                    key={order.id}
                                    className="relative bg-white py-5 px-6 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600"
                                >
                                        <OrderItem order={order}/>

                                </li>
                            ))}
                            <li
                                className="relative px-6"
                            >
                                <Empty message='Yay! you got everything' className='h-24'/>
                            </li>
                        </ul>
                    </nav>
                    <Pagination/>
                </div>
            </aside>
        </main>);
}