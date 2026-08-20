//Server Component

import BlogClient from "./blogClient";

// Metadata for search results(Technical SEO)
export const metadata = {
    title: "Blogs",
    description: "Read articles about web development, SEO, digital marketing, content creation and technology by Lebo Madikane.",

    alternates: {
        canonical: "/blog",
    },
};

export default function BlogPage() {
    return <BlogClient />;
}