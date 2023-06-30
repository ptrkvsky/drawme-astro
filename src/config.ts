const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const version = import.meta.env.PUBLIC_SANITY_API_VERSION;
const dataSet = import.meta.env.PUBLIC_SANITY_DATASET;

const config = {
  // mode: import.meta.env.MODE,
  mode: 'production',
  sanityGraphqlEndpoint: `https://${projectId}.api.sanity.io/${version}/graphql/${dataSet}/default`,
};

export default config;
