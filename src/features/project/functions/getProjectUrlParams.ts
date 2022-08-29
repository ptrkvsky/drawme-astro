import { SanityProjects } from '../interfaces/SanityProjects';

const getProjectUrlParams = (sanityProjects: SanityProjects) => {
  return sanityProjects.allProject.map((project) => {
    const param = {
      params: {
        slug: project.slug.current,
      },
      props: {
        project,
      },
    };
    return param;
  });
};

export default getProjectUrlParams;
