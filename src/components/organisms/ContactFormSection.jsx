import React from 'react';
import { Card, Form, Input, Button, message, Space, Typography } from 'antd';
import { GithubOutlined, LinkedinOutlined, SendOutlined } from '@ant-design/icons';
import { mockProfile as defaultProfile } from '../../data/portfolioData';

const { Title, Paragraph } = Typography;

const cardPinkStyle = {
  borderRadius: 12,
  border: '8px solid #ffb6c1',
  boxShadow: '0 4px 12px rgba(255, 182, 193, 0.35)',
};

export const ContactFormSection = ({ profile }) => {
  const [form] = Form.useForm();
  const githubUrl = profile?.githubUrl || defaultProfile?.githubUrl || 'https://github.com/noemy-navarrete';
  const linkedinUrl = profile?.linkedinUrl || defaultProfile?.linkedinUrl || 'https://www.linkedin.com/in/noemy-navarrete-125b42384/?isSelfProfile=true';
  const onFinish = () => {
    message.success('Formulario validado correctamente. Este envío es de demostración.');
    form.resetFields();
  };

  return (
    <Space direction="vertical" size="large" style={{ display: 'flex', width: '100%' }}>
      <Card title="Formulario de Contacto" style={cardPinkStyle}>

        <Form form={form} layout="vertical" onFinish={onFinish} requiredMark="optional">
          <Form.Item
            label="Nombre completo"
            name="name"
            rules={[{ required: true, message: 'Por favor ingresa tu nombre completo' }]}
          >
            <Input placeholder="Ej. Wang Nicholas" />
          </Form.Item>

          <Form.Item
            label="Correo electrónico"
            name="email"
            rules={[
              { required: true, message: 'Por favor ingresa tu correo electrónico' },
              { type: 'email', message: 'Ingresa un correo electrónico válido' },
            ]}
          >
            <Input placeholder="ejemplo@correo.com" />
          </Form.Item>

          <Form.Item
            label="Mensaje"
            name="message"
            rules={[{ required: true, message: 'Por favor escribe un mensaje' }]}
          >
            <Input.TextArea rows={4} placeholder="Escribe tu mensaje aquí..." />
          </Form.Item>

          <Form.Item style={{ marginBottom: 12, textAlign: 'center' }}>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SendOutlined />}
              style={{
                backgroundColor: '#5c061c',
                borderColor: '#5c061c',
                borderRadius: 8,
                height: 40,
                fontWeight: '600',
              }}
            >
              Enviar Mensaje
            </Button>
          </Form.Item>
        </Form>

        <div style={{ marginTop: 32, paddingTop: 16, borderTop: '1px solid #ffe4e8', textAlign: 'center' }}>
          <Title level={5} style={{ color: '#5c061c', marginBottom: 12 }}>
            Redes Profesionales
          </Title>
          <Space size="middle" style={{ justifyContent: 'center', width: '100%' }}>
            <Button
              icon={<GithubOutlined />}
              href={githubUrl}
              target="_blank"
              style={{ borderColor: '#5c061c', color: '#5c061c', borderRadius: 8 }}
            >
              GitHub
            </Button>
            <Button
              icon={<LinkedinOutlined />}
              href={linkedinUrl}
              target="_blank"
              style={{ borderColor: '#5c061c', color: '#5c061c', borderRadius: 8 }}
            >
              LinkedIn
            </Button>
          </Space>
        </div>
      </Card>
    </Space>
  );
};