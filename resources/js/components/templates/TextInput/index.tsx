import { cn } from '@/lib/utils';
import { memo } from 'react';
import { Input } from '../../ui/input';

type TextInputProps = {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    autoComplete: string;
    placeholder: string;
    label?: React.ReactNode;
    error?: React.ReactNode;
    sx?: string;
};

const TextInput = (props: TextInputProps) => {
    const { id, value, onChange, autoComplete, placeholder, label, error, sx } = props;
    return (
        <>
            {label}
            <Input
                id={id}
                type="text"
                className={cn('mt-1 block w-full', sx)}
                value={value}
                onChange={onChange}
                required
                autoComplete={autoComplete}
                placeholder={placeholder}
            />
            {error}
        </>
    );
};

export default memo(TextInput);
