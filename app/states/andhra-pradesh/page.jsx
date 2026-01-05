import { notFound } from "next/navigation";
import StructurePage from "../../../components/StateStructur/page";
import { andhraPradeshData } from "../../../data/states/andhra-pradesh";

/* ✅ Dynamic SEO */
export async function generateMetadata({ params }) {
    const data = andhraPradeshData[params.state];

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
export async function generateStaticParams() {
    return Object.keys(andhraPradeshData).map((state) => ({
        state,
    }));
}

/* ✅ Page */
export default function StatePage({ params }) {
    const data = andhraPradeshData[params.state];

    if (!data) {
        notFound();
    }

    return <StructurePage data={data} />;
}
