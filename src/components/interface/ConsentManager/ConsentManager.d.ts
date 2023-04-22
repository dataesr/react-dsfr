import * as React from 'react';

export type ConsentManagerChildren =
  | React.ReactNode[]
  | React.ReactElement<any>;

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
  acceptBannerButton: (...args: any[]) => any;
  bannerButtons: ConsentManagerBannerButtons;
  bannerDescription: string;
  bannerTitle?: string;
  children: ConsentManagerChildren;
  confirmButtonLabel?: string;
  confirmButtonTitle?: string;
  confirmConsent: (...args: any[]) => any;
  isBannerOpen?: boolean;
  isModalOpen: boolean;
  modalCloseLabel: string;
  modalCloseTitle: string;
  modalTitle: string;
  refuseBannerButton: (...args: any[]) => any;
  setIsModalOpen: (...args: any[]) => any;
}

declare const ConsentManager: React.FC<ConsentManagerProps>;

export default ConsentManager;
