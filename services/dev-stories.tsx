import { iDevStory } from "@/components/dev-story-card"

export const DISCOVERY_LOCATION: string[] = [
    'telegram_bot',
    'twitter',
    'friends_family',
    'linkedin'
]
export const DEV_STORIES: iDevStory[] = [
    {
        id: "lockedin",
        title: "LockedIn",
        tag: "habit-tracking",
        description: "LockedIn is a habit-tracking app that enables users to set habit-forming tasks and track their progress in real-time as they strive to build lasting habits. It allows them to invite accountability partners for support, fostering a community-driven approach to personal growth and habit development.",
        open_source_url: "https://lockedin-app.vercel.app/", // "https://github/olaniyigeorge77/lockedin.com",
        product_url: "https://lockedin-seven.vercel.app/", // "https://lockedin_api.com https://lockedin-api.onrender.com",
        status: "live",
        inspirations: [
            {
                tweetId: "1844763363533820066",
                note: undefined
            },
            {
                tweetId: "1844778183024889857",
                note: undefined
            },
            {
                tweetId: "1845054193783984432",
                note: undefined
            },
            {
                tweetId: null,
                note:     {
                    _id: "6",
                    author: {
                      _id: "user4",
                      username: "olaniyigeorge",
                      email: "olaniyigeorge77@gamil.com",
                      image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
                    },
                    title: "Clean Typescript Code",
                    body: "I should refactor my code as a part of a new habit task to write clean code.",
                    tags: ["clean-code", "refactor", "habit"],
                    privacy_level: "public",
                    written_at: new Date("2025-01-11T03:55:00Z")
                  },
            },
        ],
        image: "/assets/images/lockedin.png"
    },
    {
        id: "marketplace",
        title: "MarketPlace",
        tag: "e-commerce",
        description: "An e-commerce market for products ranging from physical products, food, digital products and services. Sellers and service providers track their orders and receive payments.",
        open_source_url: "/i/market",
        product_url: "/i/market",
        status: "dev",
        inspirations: [],
        image: "/assets/images/marketplace.png"
    },
    {
        id: "respace",
        title: "ReSpace",
        tag: "real-estate",
        description: "ReSpace aims to eliminate the challenges of house hunting by providing a smooth, personalized real estate experience. We want to empower users to effortlessly search for and rent apartments or spaces online while managing their utilities—such as cleaning, waste disposal, and internet bills—through our app",
        open_source_url: "https://github.com/olaniyigeorge/raspa-client",
        product_url: "https://raspa-client.onrender.com/",
        status: "old",
        inspirations: [],
        image: "/assets/images/respace.png"
    },        
    {
        id: "bellz-mini",
        title: "Bellz Mini",
        tag: "super-apps",
        description: "Bellz Mini is all about creating mini apps within the Telegram ecosystem. With this initiative, I’m looking to explore the upsides and downsides of super apps while evaluating the best platforms for building these mini applications on existing frameworks.",
        open_source_url: "https://github.com/olaniyigeorge/bellz-tg-mini",
        product_url: "https://github.com/olaniyigeorge/bellz-tg-mini",
        status: "old",
        inspirations: [],
        image: "/assets/images/bellz-mini.png"
    },
    {
        id: "promptopia",
        title: "Promptopia",
        tag: "llm-prompts",
        description: " Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
        open_source_url: "https://github.com/olaniyigeorge/",
        product_url: "/i/promptopia",
        status: "live",
        inspirations: [],
        image: "/assets/images/promptopia.png"
    },   
    {
        id: "i-scheduler",
        title: "iScheduler",
        tag: "tasks-scheduler",
        description: " Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
        open_source_url: "https://github.com/olaniyigeorge/iScheduler",
        product_url: "/ischeduler",
        status: "dev",
        inspirations: [],
        image: "/assets/images/1c44f8914b9f20e13b6168a2c2be3586.jpg"
    },   
    {
        id: "i-hr-manager",
        title: "iHR",
        tag: "interviews",
        description: "An AI-powered platform designed to revolutionize interview preparation and feedback",
        open_source_url: "https://github.com/olaniyigeorge/iHR",
        product_url: "https://ihr-mfh9.onrender.com/",
        status: "live",
        inspirations: [],
        image: "/assets/images/ihr.png"
    },   
]