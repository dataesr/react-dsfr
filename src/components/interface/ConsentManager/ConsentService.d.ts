import * as React from 'react';

export type ConsentServiceDefaultConsent = 'accept' | 'refuse';

export interface ConsentServiceProps {
  acceptLabel: string;
  className?: string;
  defaultConsent: ConsentServiceDefaultConsent;
  description?: string;
  disabled?: boolean;
  name?: string;
  onChange?: (...args: any[]) => any;
  refuseLabel: string;
  title: string;
}

declare const ConsentService: React.FC<ConsentServiceProps>;

export default ConsentService;
