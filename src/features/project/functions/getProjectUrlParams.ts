import { SanityProjects } from "../interfaces/SanityProjects";

/**
 * Extracts URL parameters for each project from a SanityProjects object.
 *
 * @param sanityProjects - The SanityProjects, Result of the graphQl query
 * @returns An array of objects, with the slug, the project, and the nextProject.
 */
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
