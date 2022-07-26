import {Menu, Transition} from "@headlessui/react";
import {InboxInIcon, PlusSmIcon, UserAddIcon} from "@heroicons/react/solid";
import {Fragment} from "react";
import {classNames} from "../helpers";

export default function NewItem(){

    const newItems = [
        { name: 'Order', href: '/order', icon: InboxInIcon },
        { name: 'Patient', href: '/patient', icon: UserAddIcon },
    ];

    return (
        <Menu as="div" className="ml-3 relative">
            <div>
                <Menu.Button className='inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'>
                    <span className="sr-only">Open create new menu</span>
                    <PlusSmIcon className="h-6 w-6" aria-hidden="true" />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {newItems.map((item) => (
                        <Menu.Item key={item.name}>
                            {({ active }) =>
                                (
                                    <a
                                        href={item.href}
                                        className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700 flex items-center',
                                        )}
                                    >
                                        <item.icon className={'h-5 w-5 mr-2'}></item.icon>
                                        {item.name}
                                    </a>
                                )
                            }
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>

        </Menu>
    )
}