import { notFound } from "next/navigation";

// Components
import DynamicPage from "@/components/DynamicPage/DynamicPage";
import StructurePage from "@/components/StructurePage/StructurePage";


import { dgcaPariksha } from "@/data/dgcaPariksha";
import { eGCALogin } from "@/data/eGCALogin";

// -------- FULL FORM PAGES --------
import { cbseFullForm } from "@/data/pages/cbse-full-form";
import { dgcaFullForm } from "@/data/pages/dgca-full-form";
import { cplEligibility } from "@/data/pages/cpl-eligibility";
import { icseFullForm } from "@/data/pages/icse-full-form";
import { pplFullForm } from "@/data/pages/ppl-full-form";
import { rtrFullForm } from "@/data/pages/rtr-full-form";

// -------- STATE / CITY DATA --------
import { indiaData } from "@/data/states/india";
import { hyderabadData } from "@/data/states/hyderabad";
import { mumbaiData } from "@/data/states/mumbai";
import { chennaiData } from "@/data/states/chennai";
import { bangaloreData } from "@/data/states/bangalore";
import { keralaData } from "@/data/states/kerala";
import { delhiData } from "@/data/states/delhi";
import { puneData } from "@/data/states/pune";
import { kolkataData } from "@/data/states/kolkata";
import { coimbatoreData } from "@/data/states/coimbatore";
import { gujaratData } from "@/data/states/gujarat";
import { goaData } from "@/data/states/goa";
import { gurugramData } from "@/data/states/gurugram";
import { tamilNaduData } from "@/data/states/tamilNadu";
import { rajasthanData } from "@/data/states/rajasthan";
import { haryanaData } from "@/data/states/haryana";
import { punjabData } from "@/data/states/punjab";
import { andhraPradeshData } from "@/data/states/andhraPradesh";
import { arunachalPradeshData } from "@/data/states/arunachalPradesh";
import { assamData } from "@/data/states/assam";
import { biharData } from "@/data/states/bihar";
import { chhattisgarhData } from "@/data/states/chhattisgarh";
import { himachalPradeshData } from "@/data/states/himachalPradesh";
import { noidaData } from "@/data/states/noida";
import { ghaziabadData } from "@/data/states/ghaziabad";
import { nagpurData } from "@/data/states/nagpur";
import { maharashtraData } from "@/data/states/maharashtra";
import { jaipurData } from "@/data/states/jaipur";

// --------------------------------------------------
// ✅ CENTRAL ROUTE REGISTRY
// --------------------------------------------------
const ROUTES = {



    "dgca-pariksha": { component: DynamicPage, data: dgcaPariksha },
    "egca-login": { component: DynamicPage, data: eGCALogin },


    // Full Forms → DynamicPage
    "cbse-full-form": { component: DynamicPage, data: cbseFullForm },
    "dgca-full-form": { component: DynamicPage, data: dgcaFullForm },
    "cpl-full-form": { component: DynamicPage, data: cplEligibility },
    "icse-full-form": { component: DynamicPage, data: icseFullForm },
    "ppl-full-form": { component: DynamicPage, data: pplFullForm },
    "rtr-full-form": { component: DynamicPage, data: rtrFullForm },

    // Pilot Training Pages → StructurePage
    "pilot-training-in-india": { component: StructurePage, data: indiaData },
    "pilot-training-in-hyderabad": { component: StructurePage, data: hyderabadData },
    "pilot-training-in-mumbai": { component: StructurePage, data: mumbaiData },
    "pilot-training-in-chennai": { component: StructurePage, data: chennaiData },
    "pilot-training-in-bangalore": { component: StructurePage, data: bangaloreData },
    "pilot-training-in-kerala": { component: StructurePage, data: keralaData },
    "pilot-training-in-delhi": { component: StructurePage, data: delhiData },
    "pilot-training-in-pune": { component: StructurePage, data: puneData },
    "pilot-training-in-kolkata": { component: StructurePage, data: kolkataData },
    "pilot-training-in-coimbatore": { component: StructurePage, data: coimbatoreData },
    "pilot-training-in-gujarat": { component: StructurePage, data: gujaratData },
    "pilot-training-in-goa": { component: StructurePage, data: goaData },
    "pilot-training-in-gurugram": { component: StructurePage, data: gurugramData },
    "pilot-training-in-tamil-nadu": { component: StructurePage, data: tamilNaduData },
    "pilot-training-in-rajasthan": { component: StructurePage, data: rajasthanData },
    "pilot-training-in-haryana": { component: StructurePage, data: haryanaData },
    "pilot-training-in-punjab": { component: StructurePage, data: punjabData },
    "pilot-training-in-andhra-pradesh": { component: StructurePage, data: andhraPradeshData },
    "pilot-training-in-arunachal-pradesh": { component: StructurePage, data: arunachalPradeshData },
    "pilot-training-in-assam": { component: StructurePage, data: assamData },
    "pilot-training-in-bihar": { component: StructurePage, data: biharData },
    "pilot-training-in-chhattisgarh": { component: StructurePage, data: chhattisgarhData },
    "pilot-training-in-himachal-pradesh": { component: StructurePage, data: himachalPradeshData },
    "pilot-training-in-noida": { component: StructurePage, data: noidaData },
    "pilot-training-in-ghaziabad": { component: StructurePage, data: ghaziabadData },
    "pilot-training-in-nagpur": { component: StructurePage, data: nagpurData },
    "pilot-training-in-maharashtra": { component: StructurePage, data: maharashtraData },
    "pilot-training-in-jaipur": { component: StructurePage, data: jaipurData },
};

// --------------------------------------------------
const SITE_URL = "https://weoneaviation.com";

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const route = ROUTES[slug];
    if (!route || !route.data?.seo) {
        return {
            title: "WeOne Aviation",
            description: "India’s leading aviation training institute",
        };
    }

    const { title, description, keywords } = route.data.seo;

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `${SITE_URL}/${slug}`,
        },
    };
}



// --------------------------------------------------
export default async function Page({ params }) {
    const { slug } = await params;

    const route = ROUTES[slug];
    if (!route) notFound();

    const Component = route.component;
    return <Component data={route.data} />;
}
