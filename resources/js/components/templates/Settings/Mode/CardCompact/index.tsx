import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { ChevronsLeftRightEllipsis } from 'lucide-react';
import { memo } from 'react';
import { useHooks } from './hooks';

const CardCompact = () => {
    const { toggleCompact, isCompact, setCompact } = useHooks();
    return (
        <Card onClick={toggleCompact} className="w-full cursor-pointer">
            <CardContent className="flex items-center justify-between">
                <ChevronsLeftRightEllipsis />
                <Switch id="dark-mode" checked={isCompact} onCheckedChange={setCompact} onClick={(e) => e.stopPropagation()} />
            </CardContent>
            <CardFooter className="text-sm font-bold">Compact</CardFooter>
        </Card>
    );
};

export default memo(CardCompact);
