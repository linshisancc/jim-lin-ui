import pt from 'prop-types';
import React from 'react';
export interface IAlertProps extends React.PropsWithChildren {
  /**
   * @description      Alert 的类型
   * @default          'info'
   */
  type?: 'info' | 'positive' | 'negative' | 'warning';
}

export type typeColorMap = Record<Required<IAlertProps>['type'], string>;

const prefixCls = 'common-alert';

const colors: typeColorMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<IAlertProps> = ({ children, type = 'info', ...others }) => (
  <div className={prefixCls} style={{ background: colors[type] }} {...others}>
    {children}
  </div>
);

Alert.propTypes = {
  type: pt.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;
