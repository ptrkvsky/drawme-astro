export const querySanityProjects = `query ProjectPageQuery {
  allProject {
    _id
      slug{current}
      drawMeA
      color1
      color2
      color3
      mainImages{
        asset{
          url
          altText
          metadata {
            dimensions{
              height
              width
              aspectRatio
            }
          }
        }
      }
      excerptRaw
      quote{
        _key
        text
        image{
          asset {
            altText
            url
          }
        }
      }
      typographie { 
        asset { 
          url
          altText
        }
      }
      categories { 
        title
      }
  }
}
`;
