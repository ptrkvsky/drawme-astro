export const querySanityHome = `query IndexPageQuery {
  SiteSettings(id: "siteSettings") {
    title
    description
    keywords
  }
  Home(id: "bd7e9f75-2800-4d97-82cf-0a174ed9a36f"){
    _id
    title
    introPresentationRaw
    introPresentationMobileRaw
    introDetail
    sectionProjectsTitleRaw
    sectionProjectsDescriptionRaw
  }
  allProject {
    title
    excerptRaw
    slug {current}
    mainImages {
      asset{
        altText
        url
      }
    }
  }
}
`;
