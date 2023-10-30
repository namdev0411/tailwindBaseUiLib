import { ComponentProps, forwardRef } from 'react';

type CheckboxProps = Omit<ComponentProps<'input'>, 'size'> & {
    size?: 'sm' | 'md' | 'lg';
    isError?: boolean;
};

const checkboxBaseStyle = 'rounded border-gray-300 bg-gray-100 focus:ring-2';

const checkboxSizeStyle = {
    sm: 'h-4 w-4 ',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
};

const labelSizeStyle = {
    sm: 'text-sm font-medium',
    md: 'text-md font-medium',
    lg: 'text-lg font-medium',
};

const errorStyle = 'focus:ring-red-500 accent-red-600';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
    const { size = 'md', isError, className, id, value, children, ...rest } = props;

    return (
        <label htmlFor={id} className={`flex items-center ${className ?? ''}`}>
            <input
                {...rest}
                ref={ref}
                id={id}
                type="checkbox"
                className={`
                    ${isError ? errorStyle : 'focus:ring-blue-500'}
                    ${checkboxBaseStyle} 
                    ${checkboxSizeStyle[size]}
                `}
            />
            <span
                className={`
                    ml-2
                    ${isError ? 'text-red-600' : 'text-gray-900 '} 
                    ${labelSizeStyle[size]}
                `}
            >
                {children}
            </span>
        </label>
    );
});
