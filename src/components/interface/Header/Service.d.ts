import * as React from 'react';

export interface ServiceProps {
  __TYPE?: any;
  description?: React.ReactNode;
  title: React.ReactNode;
  link?: string;
  className?: string;
  asLink?: React.ReactElement<any>;
}

declare const Service: React.FC<ServiceProps>;

export default Service;
