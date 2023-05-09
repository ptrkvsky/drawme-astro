import { SanityProjects } from '../interfaces/SanityProjects';

const getProjectUrlParams = (sanityProjects: SanityProjects) => {
  return sanityProjects.allProject.map((project, i) => {
    let nextProject = null;
    const allProjects = sanityProjects.allProject;
    if (i === allProjects.length - 1) {
      nextProject = allProjects[0];
    } else {
      nextProject = allProjects[i + 1];
    }

    const param = {
      params: {
        slug: project.slug.current,
      },
      props: {
        project,
        nextProject,
      },
    };
    return param;
  });
};

export default getProjectUrlParams;
