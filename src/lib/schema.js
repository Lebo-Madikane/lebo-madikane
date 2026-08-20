
// giving Google extra information about the person
export const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Lebo Madikane",

    url: "https://lebo-madikane-seven.vercel.app",

    image: "https://lebo-madikane-seven.vercel.app/images/profile.jpg",

    jobTitle: "Software Developer, Content Creator, and Digital Marketer",

    description: "Software Developer specializing in Next.js, React, JavaScript and Digital Marketing to build modern software applications.",

    //email: "madikanelebohang@gmail.com",

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
    },

    sameAs: [
        "https://www.linkedin.com/in/lebo-madikane/",
        "https://github.com/Lebo-Madikane",
        "https://www.instagram.com/lebo_madikane/",
    ],
};

// giving Google extra information about the website
export const websiteSchema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: "Lebo Madikane",

    url: "https://lebo-madikane-seven.vercel.app",

    description: "Portfolio of a Software Developer, Content Creator, and Digital Marketer | Lebo Madikane.",

    publisher: {
        "@type": "Person",
        name: "Lebo Madikane",
        url: "https://lebo-madikane-seven.vercel.app/",
    },
};