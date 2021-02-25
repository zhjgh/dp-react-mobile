import React from 'react';
import './index.css';

interface IProps {
  type?: 'single' | 'multiple';
  rows?: number;
  children?: React.ReactNode;
}

const Ellipsis: React.FC<IProps> = props => {

  const { type, rows, children } = props;

  const styles: React.CSSProperties = {
    WebkitLineClamp: rows
  }

  return (
    <div className={`${type}-ellipsis`} style={styles}>{children}</div>
  )
}

Ellipsis.defaultProps = {
  type: 'single',
  rows: 3,
}

export default Ellipsis;
