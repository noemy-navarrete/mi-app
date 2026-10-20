import React from 'react';
import { Tag } from 'antd';

export const SkillBadge = ({ name, type }) => {
  return (
    <Tag color={type === 'Technical' ? '#8b263e' : '#5c061c'} 
    style={{ 
      fontSize: 14, 
      padding: '4px 8px', 
      margin: 10 }}>
      {name}
    </Tag>
  );
};