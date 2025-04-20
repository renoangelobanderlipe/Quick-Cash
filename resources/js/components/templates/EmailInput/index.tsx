import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { memo } from 'react';

type EmailInputProps = {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    autoComplete: string;
    placeholder: string;
    label?: React.ReactNode;
    error?: React.ReactNode;
    sx?: string;
};

const EmailInput = (props: EmailInputProps) => {
    const { id, value, onChange, autoComplete, placeholder, label, error, sx } = props;
    return (
        <>
            {label}
            <Input
                id={id}
                type="email"
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

export default memo(EmailInput);
