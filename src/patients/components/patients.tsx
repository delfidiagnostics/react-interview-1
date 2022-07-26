import {Permissions} from '../../common/constants/permissions';
import {useDocumentTitle} from "../../common/hooks/useDocumentTitle";
import {ChevronDownIcon} from "@heroicons/react/solid";
import Pagination from "../../common/components/pagination";

const RequiredPermissions = [Permissions.PATIENT_READ];
const people = [
    {id: 1, firstName: 'Tina', lastName: 'Fey', dob: '01/01/2020', sex: 'Female'},
    {id: 2, firstName: 'Geralt', lastName: 'Rivia', dob: '01/01/2020', sex: 'Male'},
    {id: 3, firstName: 'Triss', lastName: 'Merrigold', dob: '01/01/2020', sex: 'Female'},
    {id: 4, firstName: 'Jean Luc', lastName: 'Picard', dob: '01/01/2020', sex: 'Male'},
    // More people...
]
export default function Patients() {
    useDocumentTitle('Patients');
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">Patients</h1>
                    </div>
                    {/*<div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">*/}
                    {/*    <PrimaryButton>*/}
                    {/*    <span className={'flex items-center space-x-1'}>*/}
                    {/*        <PlusCircleIcon className={'h-6 w-6'}/>*/}
                    {/*        <span>Add New Patient</span>*/}
                    {/*    </span>*/}
                    {/*    </PrimaryButton>*/}
                    {/*</div>*/}
                </div>
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            <a href="#" className="group inline-flex">
                                                First Name
                                                <span
                                                    className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                                  <ChevronDownIcon className="h-5 w-5" aria-hidden="true"/>
                                                </span>
                                            </a>
                                        </th>
                                        <th scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <a href="#" className="group inline-flex">
                                                Last Name
                                                <span
                                                    className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                                                  <ChevronDownIcon className="h-5 w-5" aria-hidden="true"/>
                                                </span>
                                            </a>
                                        </th>
                                        <th scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <a href="#" className="group inline-flex">
                                                Date of Birth
                                                <span
                                                    className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                                  <ChevronDownIcon
                                                      className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                                                      aria-hidden="true"
                                                  />
                                                </span>
                                            </a>
                                        </th>
                                        <th scope="col"
                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            <a href="#" className="group inline-flex">
                                                Sex
                                                <span
                                                    className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                                  <ChevronDownIcon
                                                      className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                                                      aria-hidden="true"
                                                  />
                                                </span>
                                            </a>
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                    {people.map((person, personIdx) => (
                                        <tr key={person.id}  className={personIdx % 2 === 0 ? undefined : 'bg-gray-50'}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                <a href={'/patient'}>{person.firstName}</a>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <a href={'/patient'}>{person.lastName}</a>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <a href={'/patient'}>{person.dob}</a>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <a href={'/patient'}>{person.sex}</a>
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a href="/patient" className="text-primary-600 hover:text-primary-900">
                                                    Edit<span className="sr-only">, {person.firstName}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            <Pagination/>
            </div>
        </>
    );
}
export {RequiredPermissions as PatientsPagePermissions};
