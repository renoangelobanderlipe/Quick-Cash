import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { memo } from 'react';

type CardFontProps = {
    className?: string;
    icon: React.ReactNode;
    title: string;
};

const CardFont = (props: CardFontProps) => {
    const { className, icon, title } = props;
    return (
        <Card className={cn('flex w-full cursor-pointer items-center py-4', className)}>
            <CardContent className="flex items-center justify-between">{icon}</CardContent>
            <CardFooter className="text-xs font-bold">{title}</CardFooter>
        </Card>
    );
};

export default memo(CardFont);
