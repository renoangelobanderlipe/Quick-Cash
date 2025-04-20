import { CaseSensitive } from 'lucide-react';
import CardFont from './CardFont';

const SettingsFont = () => {
    return (
        <>
            <CardFont title="Public Sans" icon={<CaseSensitive />} />
            <CardFont title="Inter" icon={<CaseSensitive />} />
            <CardFont title="DM Sans" icon={<CaseSensitive />} />
            <CardFont title="Nunito Sans" icon={<CaseSensitive />} />
        </>
    );
};

export default SettingsFont;
