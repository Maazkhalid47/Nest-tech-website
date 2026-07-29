export type WorkItem = {
  slug: string;
  num: string;
  name: string;
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
};

export const workItems: WorkItem[] = [
  {
    slug: "momflex",
    num: "01",
    name: "MomFlex",
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
  },
  {
    slug: "my-trade-pal",
    num: "02",
    name: "My Trade Pal",
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
  },
  {
    slug: "mealmakers",
    num: "03",
    name: "Mealmakers",
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
  },
];

export type Article = {
  slug: string;
  date: string;
  readTime: string;
  category: string;
  title: string;
  excerpt: string;
  content: { type: "p" | "h2" | "quote"; text: string }[];
};

export const articles: Article[] = [
  {
    slug: "why-most-mvps-fail-before-launch",
    date: "March 2026",
    readTime: "9 min read",
    category: "Product Strategy",
    title: "Why Most MVPs Fail Before Launch",
    excerpt:
      "Building an MVP isn't about building less—it's about validating the right assumptions. Learn why many MVPs fail before reaching users and how a product-first approach can reduce risk.",
    content: [
      {
        type: "p",
        text: "Most founders treat an MVP as a smaller version of their final product — trim the feature list, ship what's left, and call it minimal. That framing is where things start to go wrong.",
      },
      {
        type: "quote",
        text: "An MVP isn't a smaller product. It's the fastest, cheapest way to test whether your riskiest assumption is actually true.",
      },
      { type: "h2", text: "The Assumption Problem" },
      {
        type: "p",
        text: "Every product idea rests on a stack of assumptions — that people have the problem you think they have, that they'd pay to solve it, that your approach is the right one. Most MVPs fail not because the engineering was weak, but because they were built to prove the product could exist, not that it should.",
      },
      {
        type: "p",
        text: "Before a single screen gets designed, it's worth writing down the two or three assumptions that would sink the entire idea if they turned out to be false. Those are the ones the MVP needs to test — everything else can wait.",
      },
      { type: "h2", text: "Scope Is a Strategy Decision, Not an Engineering One" },
      {
        type: "p",
        text: "Teams often let scope get decided by what's technically easy to build first, rather than what's most informative to learn first. The result is an MVP that's genuinely minimal, but tests nothing of consequence.",
      },
      {
        type: "p",
        text: "A product-first approach flips this: define what you need to learn, then figure out the smallest, fastest thing that gets you a real answer — even if that means building the 'hard' part first because that's where the actual risk lives.",
      },
      { type: "h2", text: "Launch Is the Start of Validation, Not the Finish Line" },
      {
        type: "p",
        text: "The MVPs that succeed treat launch as day one of a feedback loop, not a finish line. They're instrumented to tell the team something, and the team is set up to act on what they learn quickly.",
      },
      {
        type: "p",
        text: "At Nest, this is where we spend the most time with founders before any code gets written — getting clear on what the MVP actually needs to prove, so the build effort goes toward reducing real risk instead of just shipping something.",
      },
    ],
  },
  {
    slug: "flutterflow-for-startups",
    date: "February 2026",
    readTime: "8 min read",
    category: "Engineering",
    title: "FlutterFlow for Startups: When It Works and When It Doesn't",
    excerpt:
      "FlutterFlow can dramatically accelerate product development, but understanding where it fits—and where custom engineering becomes necessary—is key to building scalable software.",
    content: [
      {
        type: "p",
        text: "FlutterFlow has become a serious tool for startups that need to move fast — a visual builder on top of Flutter that can take a product from idea to a working cross-platform app far quicker than starting from scratch.",
      },
      { type: "h2", text: "Where It Genuinely Wins" },
      {
        type: "p",
        text: "For early-stage products, internal tools, and MVPs where speed and iteration matter more than deep customization, FlutterFlow removes a huge amount of boilerplate. Teams can wire up UI, navigation, and backend connections — often to Supabase or Firebase — in a fraction of the time a fully custom build would take.",
      },
      {
        type: "p",
        text: "It also keeps a single codebase shipping to iOS, Android, and web at once, which matters a lot for startups that can't afford separate native teams.",
      },
      { type: "h2", text: "Where It Starts to Strain" },
      {
        type: "p",
        text: "The friction shows up as products mature — highly custom interactions, complex state management, or deep platform-specific integrations can push against what the visual builder comfortably handles. Performance-critical features and unusual architectural requirements are where hand-written code still has the edge.",
      },
      {
        type: "p",
        text: "This isn't a flaw in the tool — it's a scope mismatch. FlutterFlow is built to optimize for speed on the 80% of a product that's fairly standard, not to be the right tool for every edge case.",
      },
      { type: "h2", text: "The Hybrid Approach" },
      {
        type: "p",
        text: "The teams that get the most out of FlutterFlow don't treat it as all-or-nothing. They build the majority of the product visually, and drop into custom Flutter code exactly where the requirements demand it — keeping velocity high without giving up control where it matters.",
      },
      {
        type: "p",
        text: "That's the model we lean on at Nest: FlutterFlow to move fast where speed is the priority, and custom engineering where the product genuinely needs it.",
      },
    ],
  },
  {
    slug: "building-scalable-products-with-flutterflow-and-supabase",
    date: "January 2026",
    readTime: "8 min read",
    category: "Architecture",
    title: "Building Scalable Products with FlutterFlow & Supabase",
    excerpt:
      "Discover how combining FlutterFlow with Supabase creates a powerful foundation for startups while maintaining flexibility for long-term growth.",
    content: [
      {
        type: "p",
        text: "FlutterFlow gets a product's front end moving fast. Supabase gives it a backend that doesn't box the team in later. Together, they form a foundation that a lot of startups underestimate.",
      },
      { type: "h2", text: "Why This Pairing Works" },
      {
        type: "p",
        text: "Supabase is built on Postgres — a proven, relational database that scales well and doesn't lock a team into a proprietary query model. Paired with FlutterFlow's native Supabase integration, teams get real-time data, authentication, and storage wired into their UI without writing custom backend glue code for every screen.",
      },
      {
        type: "p",
        text: "Because it's Postgres underneath, the data layer stays flexible — teams can write raw SQL, add complex relations, or set up row-level security policies as the product's needs grow more sophisticated.",
      },
      { type: "h2", text: "Designing for Growth From Day One" },
      {
        type: "p",
        text: "The mistake we see most often is treating the database schema as an afterthought because the front end is moving so fast. A few hours spent designing the data model properly — clear relationships, sensible indexing, row-level security from the start — saves weeks of migration pain later.",
      },
      {
        type: "p",
        text: "The same applies to authentication and permissions: setting these up correctly early means the product can add new user types or features without re-architecting how access control works.",
      },
      { type: "h2", text: "Knowing When to Extend Beyond the Stack" },
      {
        type: "p",
        text: "This foundation takes a startup remarkably far, but it's not meant to be the ceiling. As products scale, teams often add custom backend services, edge functions, or additional infrastructure alongside Supabase — and because the core is standard Postgres and Flutter, that extension path stays open rather than requiring a rewrite.",
      },
      {
        type: "p",
        text: "That flexibility is the real value: a fast starting point that doesn't force a painful migration once the product finds traction.",
      },
    ],
  },
];
