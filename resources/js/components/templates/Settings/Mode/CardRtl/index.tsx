import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { AlignEndVertical } from 'lucide-react';
import { memo } from 'react';
import { useHooks } from './hooks';

const CardRightToLeft = () => {
    const { toggleRtl, isRtl, setIsRtl } = useHooks();
    return (
        <Card onClick={toggleRtl} className="w-full cursor-pointer">
            <CardContent className="flex items-center justify-between">
                <AlignEndVertical />
                <Switch id="dark-mode" checked={isRtl} onCheckedChange={setIsRtl} onClick={(e) => e.stopPropagation()} />
            </CardContent>
            <CardFooter className="text-sm font-bold">Right to left</CardFooter>
        </Card>
    );
};

export default memo(CardRightToLeft);
