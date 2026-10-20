import React, { useState } from 'react';
import { Spin } from 'antd';
import { MainTemplate } from '../templates/MainTemplate';
import { ProfileSection } from '../components/organisms/ProfileSection';
import { EducationSection } from '../components/organisms/EducationSection';
import { ExperienceSection } from '../components/organisms/ExperienceSection';
import { ContactFormSection } from '../components/organisms/ContactFormSection';
import { usePortfolio } from '../hooks/usePortfolio';

export const PortfolioPage = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  const { profile, skills, education, projects, loading } = usePortfolio();

  const renderContent = () => {
    if (loading) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 0' }}>
          <Spin size="large" tip="Cargando portafolio..." />
        </div>
      );
    }

    switch (selectedKey) {
      case '1':
        return <ProfileSection profile={profile} skills={skills} />;
      case '2':
        return <EducationSection education={education} />;
      case '3':
        return <ExperienceSection projects={projects} />;
      case '4':
        return <ContactFormSection profile={profile} />;
      default:
        return <ProfileSection profile={profile} skills={skills} />;
    }
  };

  return (
    <MainTemplate selectedKey={selectedKey} onSelectKey={setSelectedKey}>
      {renderContent()}
    </MainTemplate>
  );
};