import {Menu, Transition} from "@headlessui/react";
import Profile from "./profile";
import {Fragment} from "react";
import {classNames} from "../../common/helpers";
import {useAuth0} from "@auth0/auth0-react";

export default function ProfileButton() {
    const userNavigation = [
        { name: 'Settings', href: '/settings' },
        { name: 'Sign out', onClick: onLogout },
    ];
    const { logout } = useAuth0();
    function onLogout() {
        logout({ returnTo: window.location.origin });
    }
    return (
        <Menu as="div" className="ml-3 relative">
            <div>
                <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    <span className="sr-only">Open user menu</span>
                    <Profile />
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
                    {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                            {({ active }) =>
                                item.href ? (
                                    <a
                                        href={item.href}
                                        className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <button
                                        onClick={item.onClick}
                                        className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700 text-left',
                                            'w-full',
                                        )}
                                    >
                                        {item.name}
                                    </button>
                                )
                            }
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}