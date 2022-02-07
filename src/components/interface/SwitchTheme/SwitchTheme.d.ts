import * as React from 'react';

export interface SwitchThemeProps {
    title?: string;
    legend?: string;
    darkLabel?: string;
    lightLabel?: string;
    isOpen: boolean;
    setIsOpen: (...args: any[])=>any;
}

declare const SwitchTheme: React.FC<SwitchThemeProps>;

export default SwitchTheme;

