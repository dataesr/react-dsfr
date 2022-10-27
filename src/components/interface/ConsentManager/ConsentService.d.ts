import * as React from 'react';

export type ConsentServiceDefaultConsent = 'accept' | 'refuse';

export interface ConsentServiceProps {
  className?: string;
  title: string;
  defaultConsent: ConsentServiceDefaultConsent;
  description?: string;
  acceptLabel: string;
  refuseLabel: string;
}

declare const ConsentService: React.FC<ConsentServiceProps>;

export default ConsentService;
