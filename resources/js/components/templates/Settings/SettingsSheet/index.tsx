import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useFullscreen } from '@/hooks/use-fullscreen';
import { Maximize, Minimize, SettingsIcon } from 'lucide-react';
import { memo } from 'react';
import SettingsFont from '../Font/SettingsFont';
import CardCompact from '../Mode/CardCompact';
import CardContrast from '../Mode/CardContrast';
import CardDarkMode from '../Mode/CardDarkMode';
import CardRtl from '../Mode/CardRtl';

const SettingsSheet = () => {
    const { isFullscreen, toggleFullscreen } = useFullscreen();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" className="rounder-lg">
                    <SettingsIcon />
                </Button>
            </SheetTrigger>

            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="flex items-center justify-between pr-6">
                        Settings
                        <Button onClick={toggleFullscreen} variant="ghost">
                            {isFullscreen ? <Maximize /> : <Minimize />}
                        </Button>
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-8 p-4">
                    <div className="grid grid-cols-2 gap-4">
                        <CardDarkMode />
                        <CardContrast />
                        <CardRtl />
                        <CardCompact />
                    </div>

                    <Card className="py-2">
                        <CardHeader className="py-2 text-xs font-bold">Font Family</CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4 pb-4">
                            <SettingsFont />
                        </CardContent>
                    </Card>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default memo(SettingsSheet);
