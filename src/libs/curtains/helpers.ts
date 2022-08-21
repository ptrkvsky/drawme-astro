import { format, isFuture } from "date-fns";

export function cn(...args: any) {
  return args.filter(Boolean).join(" ");
}

export function mapEdgesToNodes(data: any) {
  if (!data.edges) return [];
  return data.edges.map((edge: any) => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }: any) {
  return (slug || {}).current;
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }: any) {
  return !isFuture(publishedAt);
}

export function getBlogUrl(publishedAt: any, slug: any) {
  return `/blog/${format(publishedAt, "yyyy/MM")}/${slug.current || slug}/`;
}

export function buildImageObj(source: any) {
  const imageObj: any = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}
