import { notFound } from "next/navigation";
import StructurePage from "../../../components/StateStructur/page";
import { statesData } from "../../../data/states/andhra-pradesh";

/* ✅ SEO */
export function generateMetadata({ params }) {
    const data = statesData[params.state];

    if (!data) return {};

    return {
        title: data.seo.title,
        description: data.seo.description,
        alternates: {
            canonical: data.seo.canonical,
        },
    };
}

/* ✅ Static Generation */
export function generateStaticParams() {
    return Object.keys(statesData).map((state) => ({
        state,
    }));
}

/* ✅ Page */
export default function StatePage({ params }) {
    const data = statesData[params.state];

    if (!data) notFound();

    return <StructurePage data={data} />;
}
