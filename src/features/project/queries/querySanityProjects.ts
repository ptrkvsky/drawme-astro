export const querySanityProjects = `query ProjectPageQuery {
  allProject {
    _id
      slug{current}
      drawMeA
      color1
      color2
      color3
      hue
      saturation
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
      imagesFooter {
        asset{
          altText
          url
          size
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
        text
        image{
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
      }
      typographie { 
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
      categories { 
        title
      }
  }
}
`;
