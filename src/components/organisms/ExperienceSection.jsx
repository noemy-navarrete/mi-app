import React from 'react';
import { Card, Space, Typography, Button, Empty, Row, Col, Flex } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { mockProjects as defaultProjects } from '../../data/portfolioData';

const { Paragraph, Text } = Typography;

const cardPinkStyle = {
  borderRadius: 12,
  border: '8px solid #ffb6c1',
  boxShadow: '0 4px 12px rgba(255, 182, 193, 0.35)',
};

export const ExperienceSection = ({ projects = defaultProjects }) => {
  const currentProjects = projects || defaultProjects;

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex', width: '100%' }}>
      <Card title="Experiencia Laboral" size="default" style={cardPinkStyle}>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <div style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}>
              <Text strong style={{ color: '#5c061c', fontSize: 16, display: 'block', marginBottom: 8 }}>
                En búsqueda de mi primera oportunidad laboral
              </Text>
            </div>
          }
        />
      </Card>
      <Card title="Proyectos" size="default" style={cardPinkStyle}>
        <Paragraph style={{ fontSize: 15, marginBottom: 20 }}>
          Aquí puedes explorar los repositorios de los proyectos en los que he trabajado:
        </Paragraph>

        <Row gutter={[16, 16]}>
          {currentProjects.map((project) => (
            <Col xs={24} md={Flex} key={project.id}>
              <Card
                cover={
                <div
                style={{
                    padding: 12,
                    display: 'flex',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                }}
                >
                <img
                    src={project.image}
                    alt={`Vista previa de ${project.title}`}
                    style={{
                    width: '100%',
                    maxWidth: 1000,
                    height: 350,
                    objectFit: 'contain',
                    display: 'block',
                    borderRadius: 8,
                    }}
                />
                </div>
            }
            title={project.title}
            >
            <p>{project.description}</p>

                <Button
                  type="primary"
                  icon={<GithubOutlined />}
                  href={project.githubUrl}
                  target="_blank"
                  style={{
                    backgroundColor: '#fd7ab1',
                    borderColor: '#5c061c',
                    borderRadius: 10,
                    fontWeight: '700',
                  }}
                >
                  Ver Código en GitHub
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </Space>
  );
};