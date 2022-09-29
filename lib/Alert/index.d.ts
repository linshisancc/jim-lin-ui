import React from 'react';
import './style';
export interface IAlertProps extends React.PropsWithChildren {
    /**
     * @description      Alert 的类型
     * @default          'info'
     */
    type?: 'info' | 'positive' | 'negative' | 'warning';
}
export declare type typeColorMap = Record<Required<IAlertProps>['type'], string>;
declare const Alert: React.FC<IAlertProps>;
export default Alert;
