import {WithChildren} from "../types";
import {twMerge} from "tailwind-merge";

type EmptyProps = WithChildren<{
    message?: string;
    className?: string;
}>
export default function Empty({message = 'It is empty in here', ...props}: EmptyProps) {
    const className = twMerge('border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center', props.className);
    return (
        <div className="py-4">
            <div className={className} >
                <h2 className={'text-gray-400 font-bold text-xl'}>{message}</h2>
            </div>
        </div>
    )
}