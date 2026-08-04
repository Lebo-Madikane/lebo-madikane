
export default function sitemap() {
    return [
        {
            url: "https://lebo-madikane-seven.vercel.app",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: "https://lebo-madikane-seven.vercel.app/blog",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}