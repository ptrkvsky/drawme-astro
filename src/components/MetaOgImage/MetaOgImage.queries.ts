export const queryOgImage = `query IndexPageQuery {
  SiteSettings(id: "siteSettings") {
    imageSN {
      asset{
        url
      }
    }
  }
}
`;
