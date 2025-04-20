import { cn } from '@/lib/utils';
import { memo } from 'react';
import { Input } from '../../../ui/input';

type TextInputProps = {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    autoComplete: string;
    placeholder: string;
    label?: React.ReactNode;
    error?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
};

const sizeClasses: Record<NonNullable<TextInputProps['size']>, string> = {
    sm: 'h-8 text-sm px-2',
    md: 'h-10 text-base px-3',
    lg: 'h-12 text-lg px-4',
};

const TextInput = ({ id, value, onChange, autoComplete, placeholder, label, error, size = 'md', className }: TextInputProps) => {
    return (
        <div>
            {label}
            <Input
                id={id}
                type="text"
                className={cn('mt-1 block w-full', sizeClasses[size], className)}
                value={value}
                onChange={onChange}
                required
                autoComplete={autoComplete}
                placeholder={placeholder}
            />
            {error}
        </div>
    );
};

export default memo(TextInput);
