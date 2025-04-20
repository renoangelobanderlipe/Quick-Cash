import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { memo } from 'react';

type PasswordInput = {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    autoComplete: string;
    placeholder: string;
    label?: React.ReactNode;
    error?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    ref?: React.Ref<HTMLInputElement> | undefined;
};

const sizeClasses: Record<NonNullable<PasswordInput['size']>, string> = {
    sm: 'h-8 text-sm px-2',
    md: 'h-10 text-base px-3',
    lg: 'h-12 text-lg px-4',
};

const PasswordInput = ({ id, value, onChange, autoComplete, placeholder, label, error, size = 'md', className, ref }: PasswordInput) => {
    return (
        <div className="grid gap-2">
            {label}

            <Input
                id={id}
                ref={ref}
                value={value}
                onChange={onChange}
                type="password"
                className={cn('mt-1 block w-full', sizeClasses[size], className)}
                autoComplete={autoComplete}
                placeholder={placeholder}
            />

            {error}
        </div>
    );
};

export default memo(PasswordInput);
