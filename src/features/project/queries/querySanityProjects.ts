export const querySanityProjects = `query ProjectPageQuery {
  allProject {
    _id
    title
    tagline
    drawMeA
    slug{
      current
    }
    mainColor {
      hex
    }
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
    thumbnails {
      alt
      asset{
        url
        metadata {
          dimensions{
            height
            width
            aspectRatio
          }
        }
      }
    }
    imageWebsite {
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
    colorExcerpt {
      hex
    }
    startedAt
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
    positionMainImageMobile
    mainImageMobile{
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
    imagesDecale{
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
    imageSN {
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
}
`;
