import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export const SectionTitle = ({ level = 3, children }) => {
  return <Title level={level} 
  style={{ 
    margin: 20,
     marginBottom: 16 
    }}>{children}</Title>;
};