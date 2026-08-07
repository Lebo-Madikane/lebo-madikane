
// giving Google extra information about the person
export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Lebo Madikane",

    url: "https://lebo-madikane-seven.vercel.app",

    image: "https://lebo-madikane-seven.vercel.app/images/profile.jpg",

    jobTitle: "Software Developer and Content Creator",

    description: "Junior Web Developer specializing in Next.js, React, JavaScript and Digital Marketing.",

    email: "your-email@example.com",

    knowsAbout: [
        "Next.js",
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Sass",
        "SEO",
        "Digital Marketing",
        "UI Design",
    ],

    worksFor: {
        "@type": "Organization",
        name: "Atum",
        jobTitle: "Freelancing Web Developer and Content Creator"
    },
};

// giving Google extra information about the website
export const websiteSchema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: "Lebo Madikane",

    url: "https://lebo-madikane-seven.vercel.app",

    description: "Portfolio of Junior Web Developer and Content Creator Lebo Madikane.",

    publisher: {
        "@type": "Organization",
        name: "Atum",
    },
};