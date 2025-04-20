import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Contrast } from 'lucide-react';
import { memo } from 'react';
import { useHooks } from './hooks';

const CardContrast = () => {
    const { toggleContrast, isContrast, setIsContrast } = useHooks();
    return (
        <Card onClick={toggleContrast} className="w-full cursor-pointer">
            <CardContent className="flex items-center justify-between">
                <Contrast />
                <Switch id="contrast" checked={isContrast} onCheckedChange={setIsContrast} onClick={(e) => e.stopPropagation()} />
            </CardContent>
            <CardFooter className="text-sm font-bold">Contrast</CardFooter>
        </Card>
    );
};

export default memo(CardContrast);
