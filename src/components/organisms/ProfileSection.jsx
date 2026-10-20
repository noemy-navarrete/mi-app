import React from 'react';
import { Card, Space, Typography, Image, Row, Col } from 'antd';
import { mockProfile as defaultProfile, mockSkills as defaultSkills } from '../../data/portfolioData';
import { SkillBadge } from '../molecules/SkillBadge';

const { Title, Paragraph } = Typography;

const cardPinkStyle = {
  borderRadius: 12,
  border: '8px solid #ffb6c1',
  boxShadow: '0 4px 12px rgba(255, 182, 193, 0.35)',
};

export const ProfileSection = ({ profile = defaultProfile, skills = defaultSkills }) => {
  const currentProfile = profile || defaultProfile;
  const currentSkills = skills || defaultSkills;

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex', width: '100%' }}>
      <Card title="Información Personal" size="default" style={cardPinkStyle}>
        <Row gutter={[24, 24]} align="middle">
          <Col
            xs={24}
            sm={8}
            md={6}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              width={160}
              height={160}
              style={{ objectFit: 'cover', borderRadius: '50%' }}
              alt="Foto de perfil"
              src="/noenoe.png"
            />
          </Col>
          <Col xs={24} sm={16} md={18}>
            <Title level={2} style={{ marginTop: 0, marginBottom: 4, color: '#5c061c' }}>
              {currentProfile.name}
            </Title>
            <Title level={4} type="secondary" style={{ marginTop: 0, marginBottom: 16 }}>
              {currentProfile.title}
            </Title>
            <Paragraph style={{ fontSize: 15, lineHeight: 1.6 }}>
              {currentProfile.summary}
            </Paragraph>
            <div style={{ fontSize: 14, lineHeight: 1.8 }}>
              <p style={{ margin: '4px 0' }}>
                <strong>Ubicación:</strong> {currentProfile.location}
              </p>
              <p style={{ margin: '4px 0' }}>
                <strong>Correo Electrónico:</strong> {currentProfile.email}
              </p>
              <p style={{ margin: '4px 0' }}>
                <strong>Teléfono:</strong> {currentProfile.phone}
              </p>
            </div>
          </Col>
        </Row>
      </Card>

      <Card title="Mis Habilidades" size="default" style={cardPinkStyle}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {currentSkills &&
            currentSkills.map((skill) => (
              <SkillBadge key={skill.id} name={skill.name} type={skill.type} />
            ))}
        </div>
      </Card>
    </Space>
  );
};