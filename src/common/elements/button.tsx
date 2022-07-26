import {twMerge} from "tailwind-merge";

type ButtonProps = JSX.IntrinsicElements["button"];
export function Button({type='button', children, className, ...props}: ButtonProps) {
    className =  twMerge('bg-gray-100 hover:bg-700 border border-transparent  rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2', className);
    return (
        <button
            {...props}
            type={type}
            className={className}
        >
            {children}
        </button>
    )
}
export function PrimaryButton({children, className, ...props}: ButtonProps) {
    className =  twMerge('bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 text-white', className);
    return <Button className={className} {...props}>{children}</Button>
}
export function SecondaryButton({className, children, ...props}: ButtonProps) {
    className = twMerge('bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500 text-white', className);
    return <Button className={className} {...props}>{children}</Button>
}
export function FlatButton({className, children, ...props}: ButtonProps) {
    className = twMerge('bg-transparent shadow-none text-gray-600 focus:ring-gray-200', className);
    return <Button className={className} {...props}>{children}</Button>
}