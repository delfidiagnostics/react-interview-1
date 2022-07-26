import {UserIcon} from "@heroicons/react/outline";
import {QuestionMarkCircleIcon} from "@heroicons/react/solid";
import {PrimaryButton} from "../../common/elements/button";

const comments = [
    {
        id: 1,
        name: 'Leslie Marquez',
        date: '4d ago',
        imageId: '1494790108377-be9c29b29330',
        body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
    },
    {
        id: 2,
        name: 'Mike Konwiak',
        date: '4d ago',
        imageId: '1519244703995-f4e0f30006d5',
        body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
    },
    {
        id: 3,
        name: 'Sumant Turlapati',
        date: '4d ago',
        imageId: '1506794778202-cad84cf45f1d',
        body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
    },
]
export default function Comments(){
    return (
        <section aria-labelledby="comments-title">
            <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                <div className="divide-y divide-gray-200">
                    {/*<div className="px-4 py-5 sm:px-6">*/}
                    {/*    <h2 id="comments-title" className="text-lg font-medium text-gray-900">*/}
                    {/*        Comments*/}
                    {/*    </h2>*/}
                    {/*</div>*/}
                    <div className="px-4 py-6 sm:px-6">
                        <ul role="list" className="space-y-8">
                            {comments.map((comment) => (
                                <li key={comment.id}>
                                    <div className="flex space-x-3">
                                        <div className="flex-shrink-0">
                                            <UserIcon
                                                className="h-6 w-6 rounded-full"

                                            />
                                        </div>
                                        <div>
                                            <div className="text-sm">
                                                <a href="src/patients/components/patient#"
                                                   className="font-medium text-gray-900">
                                                    {comment.name}
                                                </a>
                                            </div>
                                            <div className="mt-1 text-sm text-gray-700">
                                                <p>{comment.body}</p>
                                            </div>
                                            <div className="mt-2 text-sm space-x-2">
                                                            <span
                                                                className="text-gray-500 font-medium">{comment.date}</span>{' '}
                                                <span
                                                    className="text-gray-500 font-medium">&middot;</span>{' '}
                                                <button type="button" className="text-gray-900 font-medium">
                                                    Reply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-6 sm:px-6">
                    <div className="flex space-x-3">
                        <div className="min-w-0 flex-1">
                            <form action="src/patients/components/patient#">
                                <div>
                                    <label htmlFor="comment" className="sr-only">
                                        About
                                    </label>
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        rows={3}
                                        className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
                                        placeholder="Add a comment"
                                        defaultValue={''}
                                    />
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <a
                                        href="src/patients/components/patient#"
                                        className="group inline-flex items-start text-sm space-x-2 text-gray-500 hover:text-gray-900"
                                    >
                                        <QuestionMarkCircleIcon
                                            className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                        <span>Some HTML is okay.</span>
                                    </a>
                                    <PrimaryButton>Comment</PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}