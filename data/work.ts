export type WorkItem = {
    slug: string;
    num: string;
    name: string;
    tagline: string;
    description: string;
    tags: string[];
    status: "production" | "beta" | "development";
    statusLabel: string;
    category: string;
    problem: string;
    approachTitle: string;
    approach: string[];
    outcomeTitle: string;
    outcome: string;
    gallery: { src: string; title: string; desc: string }[];
};

export const techIcons: Record<string, string> = {
    "FinTech": "$",
    "Community Platform": "◎",
    "FlutterFlow": "⚡",
    "Flutter": "◇",
    "Supabase": "◆",
    "Firebase": "◆",
    "PostgreSQL": "🐘",
    "Stripe": "▰",
    "Google Cloud": "☁",
    "OneSignal": "◉",
};

export const workItems: WorkItem[] = [
    {
        slug: "momflex",
        num: "01",
        name: "MomFlex",
        tagline: "Financial support and wellness, built for parents.",
        description:
            "A comprehensive digital platform empowering parents through financial assistance, wellness tools, community engagement, and essential digital services.",
        tags: ["FinTech", "Community Platform", "FlutterFlow", "Flutter", "Supabase", "Firebase", "PostgreSQL", "Stripe", "Google Cloud", "OneSignal"],
        status: "production",
        statusLabel: "Production",
        category: "FinTech / Community Platform",
        problem:
            "MomFlex set out to give parents a single place to manage financial assistance, wellness, and community support — but as the platform grew, the underlying architecture needed to scale with it. Nest Technologies was brought in to strengthen the foundation without slowing down the product's momentum.",
        approachTitle: "What We Did",
        approach: [
            "We led product architecture improvements and backend modernization across the platform, refining financial assistance workflows and building out FitMind, the platform's dedicated wellness experience, alongside community engagement features.",
            "On the infrastructure side, we implemented secure authentication, integrated Stripe for payments, and optimized the database and system architecture for long-term scalability — all built on FlutterFlow, Flutter, Supabase, Firebase, PostgreSQL, and Google Cloud, with OneSignal handling notifications.",
        ],
        outcomeTitle: "Outcomes",
        outcome:
            "MomFlex now runs on a more scalable, maintainable foundation — with improved performance, a modernized backend, and infrastructure built to support the platform's long-term growth.",
        gallery: [
            {
                src: "/work/momflex/01.jpeg",
                title: "Financial Assistance, Made Simple",
                desc: "A guided flow — from choosing assistance type to submitting documentation.",
            },
            {
                src: "/work/momflex/02.jpeg",
                title: "Savings & Spending Insights",
                desc: "Track income, outcome, and savings goals with clear visual breakdowns.",
            },
            {
                src: "/work/momflex/03.jpeg",
                title: "Expense Breakdown",
                desc: "A category-by-category view of where assistance funds are going.",
            },
            {
                src: "/work/momflex/04.jpeg",
                title: "Assistance Card & Transactions",
                desc: "A dedicated card with a running history of assistance and repayments.",
            },
            {
                src: "/work/momflex/05.png",
                title: "The Ultimate Village App",
                desc: "A warm, welcoming first touchpoint for every new parent.",
            },
            {
                src: "/work/momflex/06.png",
                title: "Find a Therapist",
                desc: "Search and connect with vetted mental health professionals.",
            },
            {
                src: "/work/momflex/07.png",
                title: "Guided Application Form",
                desc: "Step-by-step assistance requests with clear, simple fields.",
            },
        ],
    },
    {
        slug: "my-trade-pal",
        num: "02",
        name: "My Trade Pal",
        tagline: "Trusted trades, matched to the job.",
        description:
            "A modern marketplace platform on mobile and web, connecting buyers and sellers through a streamlined, cross-platform experience.",
        tags: ["Marketplace Platform", "FlutterFlow", "Flutter", "Supabase", "PostgreSQL"],
        status: "production",
        statusLabel: "Production",
        category: "Marketplace Platform",
        problem:
            "My Trade Pal needed a marketplace experience that felt consistent and fast whether buyers and sellers were on mobile or web — with listings, navigation, and infrastructure built to scale as the marketplace grew.",
        approachTitle: "What We Did",
        approach: [
            "We built the platform cross-platform from the ground up — a native mobile application paired with a responsive web experience, sharing the same backend integration, authentication, and marketplace workflows underneath.",
            "The stack combines FlutterFlow and Flutter for the front end with Supabase and PostgreSQL on the backend, with user management and performance optimization built in to keep the experience smooth as listings and traffic scale.",
        ],
        outcomeTitle: "Outcomes",
        outcome:
            "My Trade Pal now offers a seamless marketplace experience across both mobile and web, with an infrastructure designed to handle growing listings, users, and transactions reliably.",
        gallery: [
            {
                src: "/work/my-trade-pal/hero.jpeg",
                title: "Trusted Trades, Matched to the Job",
                desc: "Verified professionals, simple job tracking, and secure payments in one app.",
            },
            {
                src: "/work/my-trade-pal/01.jpeg",
                title: "Dashboard, Payments & Profile",
                desc: "Track earnings, manage saved cards, and update your profile at a glance.",
            },
            {
                src: "/work/my-trade-pal/02.jpeg",
                title: "Choose Your Path",
                desc: "Sign up as a customer looking for work, or a tradesperson offering it.",
            },
            {
                src: "/work/my-trade-pal/03.jpeg",
                title: "Post a Job",
                desc: "Describe the work you need done and get matched with local tradespeople.",
            },
            {
                src: "/work/my-trade-pal/04.jpeg",
                title: "Job Dashboard",
                desc: "Track active jobs, responses, and recent activity in one view.",
            },
            {
                src: "/work/my-trade-pal/05.jpeg",
                title: "My Jobs",
                desc: "Browse and manage every job you've posted or taken on.",
            },
        ],
    },
    {
        slug: "mealmakers",
        num: "03",
        name: "Mealmakers",
        tagline: "Home-cooked meals, a tap away.",
        description:
            "A digital platform that simplifies meal planning and food-related services through an intuitive experience and modern application architecture.",
        tags: ["Food & Lifestyle", "FlutterFlow", "Supabase", "PostgreSQL"],
        status: "production",
        statusLabel: "Production",
        category: "Food & Lifestyle",
        problem:
            "Meal planning tools often feel clunky and disconnected from how people actually cook and shop. Mealmakers needed an application that made the experience intuitive from day one, backed by an architecture that could support new features as the product matured.",
        approachTitle: "What We Did",
        approach: [
            "We handled mobile application development and UI implementation end-to-end, working from design through to a polished, intuitive user experience for meal planning and food-related services.",
            "On the backend, we built out the database architecture, backend integration, and authentication using Supabase and PostgreSQL — with FlutterFlow powering the front end for fast iteration without compromising on quality.",
        ],
        outcomeTitle: "Outcomes",
        outcome:
            "Mealmakers now runs on a clean, modern architecture with an intuitive user experience — giving the team a solid foundation to keep building new features on top of.",
        gallery: [
            {
                src: "/work/mealmakers/hero.jpeg",
                title: "Home-Cooked Meals, A Tap Away",
                desc: "Discover new flavors, share your cooking, and enjoy a unique culinary experience.",
            },
            {
                src: "/work/mealmakers/01.jpeg",
                title: "Choose Your Role",
                desc: "Sign up as a home cook sharing dishes, or a foodie discovering them.",
            },
            {
                src: "/work/mealmakers/02.jpeg",
                title: "Personalized Preferences",
                desc: "Set dietary preferences so recommendations always fit your taste.",
            },
            {
                src: "/work/mealmakers/03.jpeg",
                title: "Maker Earnings Dashboard",
                desc: "Track total sales, average ratings, and manage availability.",
            },
            {
                src: "/work/mealmakers/04.jpeg",
                title: "Order Management",
                desc: "Accept or decline new orders and track them through to completion.",
            },
            {
                src: "/work/mealmakers/05.jpeg",
                title: "A Marketplace for Both Sides",
                desc: "One app connecting home cooks with people craving homemade meals.",
            },
            {
                src: "/work/mealmakers/06.jpeg",
                title: "Maker Profiles",
                desc: "Browse a maker's dishes, ratings, and specialties before ordering.",
            },
        ],
    },
];