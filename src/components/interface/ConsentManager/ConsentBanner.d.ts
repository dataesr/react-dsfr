import * as React from 'react';

export interface ConsentBannerBannerButtons {
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

export interface ConsentBannerProps {
  className?: string;
  openConsentModal: (...args: any[])=>any;
  title?: string;
  description: string;
  refuseBannerButton: (...args: any[])=>any;
  acceptBannerButton: (...args: any[])=>any;
  bannerButtons: ConsentBannerBannerButtons;
}

declare const ConsentBanner: React.FC<ConsentBannerProps>;

export default ConsentBanner;
