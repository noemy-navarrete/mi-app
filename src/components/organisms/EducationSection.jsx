import React from 'react';
import { Card, Space } from 'antd';
import { mockEducation } from '../../data/portfolioData';

export const EducationSection = () => {
  return (
    <Space direction="vertical" size="large" style={{ display: 'flex', width: '100%' }}>
      <Card title="Educación y Formación" size="default" 
      style={{
        borderRadius: 12,
        borderRadius: 12,
        border: '8px solid #ffb6c1',
        boxShadow: '0 13px 12px rgba(255, 182, 193, 0.35)'
        }}>
        <Space direction="vertical" size="medium" style={{ display: 'flex' }}>
          {mockEducation && mockEducation.map((edu) => (
            <Card key={edu.id} title={edu.degree} size="default" type="inner" style={{ borderRadius: 4 }}>
              <p style={{ margin: '4px 0', fontSize: 15 }}>
                <strong>Institución:</strong> {edu.institution}
              </p>
              <p style={{ margin: '25px 0', fontSize: 15 }}>
                <strong>Periodo:</strong> {edu.period}
              </p>
            </Card>
          ))}
        </Space>
      </Card>
    </Space>
  );
};