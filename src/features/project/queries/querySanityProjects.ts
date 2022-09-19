export const querySanityProjects = `query ProjectPageQuery {
  allProject {
    _id
      slug{current}
      drawMeA
      mainColor
      color1{
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
      color2{
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
      color3{
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
