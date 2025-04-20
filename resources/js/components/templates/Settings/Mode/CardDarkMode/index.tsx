import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { CloudSun } from 'lucide-react';
import { memo } from 'react';
import { useHooks } from './hooks';

const CardDarkMode = () => {
    const { appearance, updateAppearance } = useHooks();
    return (
        <Card onClick={() => updateAppearance(appearance === 'dark' ? 'light' : 'dark')} className="w-full cursor-pointer">
            <CardContent className="flex items-center justify-between">
                <CloudSun />
                <Switch
                    id="dark-mode"
                    checked={appearance === 'dark'}
                    onCheckedChange={(checked) => updateAppearance(checked ? 'dark' : 'light')}
                    onClick={(e) => e.stopPropagation()}
                />
            </CardContent>
            <CardFooter className="text-sm font-bold">Dark Mode</CardFooter>
        </Card>
    );
};

export default memo(CardDarkMode);
