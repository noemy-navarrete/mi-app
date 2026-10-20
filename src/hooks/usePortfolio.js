import { useState, useEffect } from 'react';
import { mockProfile, mockSkills, mockEducation, mockProjects } from '../data/portfolioData';

export const usePortfolio = () => {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProfile(mockProfile);
      setSkills(mockSkills);
      setEducation(mockEducation);
      setProjects(mockProjects);
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return {
    profile,
    skills,
    education,
    projects,
    loading,
  };
};