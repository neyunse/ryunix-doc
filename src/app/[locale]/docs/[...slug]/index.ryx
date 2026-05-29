import { docSlugs } from "@/i18n/docSlugs";
import DocMdxCatchAll from "@/features/docs/DocMdxCatchAll";

export const generateStaticParams = () =>
  docSlugs.map((slug) => ({
    slug: slug.split("/"),
  }));

const LocalizedDocPage = ({ params }) => <DocMdxCatchAll params={params} />;

export default LocalizedDocPage;
