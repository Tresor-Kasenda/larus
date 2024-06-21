import { InputHTMLAttributes } from 'react';

export default function Checkbox({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 size-5 text-gray-600 shadow-sm focus:ring-indigo-500 ' +
                className
            }
        />
    );
}
