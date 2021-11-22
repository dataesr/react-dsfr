import * as React from 'react';

export type ConsentManagerChildren = React.ReactNode[] | React.ReactElement<any>;

export interface ConsentManagerBannerButtons {
    refuse?: {
        label: string;
    };
    accept?: {
        label: string;
    };
    customize?: {
        label: string;
    };
}

export interface ConsentManagerProps {
    children: ConsentManagerChildren;
    isModalOpen: boolean;
    isBannerOpen?: boolean;
    confirmButtonLabel?: string;
    confirmButtonTitle?: string;
    bannerDescription: string;
    modalTitle: string;
    modalCloseLabel: string;
    modalCloseTitle: string;
    bannerTitle?: string;
    setIsModalOpen: (...args: any[])=>any;
    confirmConsent: (...args: any[])=>any;
    refuseBannerButton: (...args: any[])=>any;
    acceptBannerButton: (...args: any[])=>any;
    bannerButtons: ConsentManagerBannerButtons;
}

declare const ConsentManager: React.FC<ConsentManagerProps>;

export default ConsentManager;

