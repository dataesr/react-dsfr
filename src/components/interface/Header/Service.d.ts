import * as React from 'react';

export type ServiceClassName = string | Object | any[];

export interface ServiceProps {
    __TYPE?: any;
    description?: React.ReactNode;
    title: React.ReactNode;
    link?: string;
    className?: ServiceClassName;
    asLink?: React.ReactElement<any>;
}

declare const Service: React.FC<ServiceProps>;

export default Service;

