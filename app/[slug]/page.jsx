import { notFound } from "next/navigation";
import DynamicPage from "@/components/DynamicPage/DynamicPage";

import { cbseFullForm } from "@/data/pages/cbse-full-form";
import { dgcaFullForm } from "@/data/pages/dgca-full-form";
import { cplEligibility } from "@/data/pages/cpl-eligibility";

const PAGES = {
    "cbse-full-form": cbseFullForm,
    "dgca-full-form": dgcaFullForm,
    "cpl-eligibility": cplEligibility,
};

export default async function Page({ params }) {
    const { slug } = await params;   // ✅ THIS IS THE FI

    console.log("SLUG:", slug);

    const pageData = PAGES[slug];

    if (!pageData) notFound();

    return <DynamicPage data={pageData} />;
}
