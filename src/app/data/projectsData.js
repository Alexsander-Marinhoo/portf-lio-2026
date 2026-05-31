import projectsData from '../../../public/imgsProjects/projects.json';

export const projects = projectsData;

export function getProjectBySlug(slug) {
  return projects.find(item => item.slug === slug) ?? null;
}
