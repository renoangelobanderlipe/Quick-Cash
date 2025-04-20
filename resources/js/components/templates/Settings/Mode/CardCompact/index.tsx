import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useCompactMode } from '@/hooks/use-compact-mode';
import { ChevronsLeftRightEllipsis } from 'lucide-react';
import { memo } from 'react';

const CardCompact = () => {
    const { toggleCompact, isCompact, setCompact } = useCompactMode();
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
