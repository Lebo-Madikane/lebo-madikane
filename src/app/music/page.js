//Server Component

import MusicClient from "./musicClient";

// Metadata for search results(Technical SEO)
export const metadata = {
    title: "Music Curation",
    description: "Follow the musical journey of Lebo Madikane as a professional house music dj and musical curator",
};

export default function MusicPage() {
    return <MusicClient />;
}