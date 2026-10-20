import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { mockProfile } from '../data/portfolioData';

const { Header, Content, Footer } = Layout;

export const MainTemplate = ({ selectedKey, onSelectKey, children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const currentYear = new Date().getFullYear();

  const menuItems = [
    { key: '1', label: 'Perfil' },
    { key: '2', label: 'Educación' },
    { key: '3', label: 'Experiencia & Proyectos' },
    { key: '4', label: 'Contacto' },
  ];

  const getBreadcrumbTitle = (key) => {
    switch (key) {
      case '1':
        return 'Perfil';
      case '2':
        return 'Educación';
      case '3':
        return 'Experiencia & Proyectos';
      case '4':
        return 'Contacto';
      default:
        return 'Perfil';
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#ffb6c1',
          borderBottom: '2px solid #e891a2',
        }}
      >
        <div style={{ color: '#000000', fontWeight: 'bold', fontSize: 18, marginRight: 24 }}>
          Portafolio
        </div>

        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          onClick={(e) => onSelectKey(e.key)}
          items={menuItems}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: 'transparent',
            borderBottom: 'none',
            fontWeight: '600',
          }}
        />
      </Header>

      <Content style={{ padding: '0 48px', marginTop: 16 }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[
            {
              title: (
                <a onClick={() => onSelectKey('1')} 
                style={{ 
                  cursor: 'pointer',
                  color: '#000000',
                  }}>
                  Inicio
                </a>
              ),
            },
            {
              title: getBreadcrumbTitle(selectedKey),
            },
          ]}
        />
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', color: '#8b263e', padding: '24px 50px' }}>
        <div>© {currentYear} {mockProfile.name}. Todos los derechos reservados.</div>
        <div style={{ fontSize: 13, marginTop: 4 }}>Contacto: {mockProfile.email}</div>
      </Footer>
    </Layout>
  );
};