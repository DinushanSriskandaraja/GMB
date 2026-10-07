export type CategoryItem = {
    title: string;
    slug: string;
    description: string;
    image: string;
    isNew?: boolean;
    subCategories?: string[];
};

export type CategoryGroup = {
    title: string;
    items: CategoryItem[];
};
export const PRODUCT_CATEGORIES: CategoryGroup[] = [
    {
        title: "Curtains",
        items: [
            {
                title: "Blockout Curtains",
                slug: "BlockoutCurtains",
                description: "Timeless elegance and privacy with premium fabric.",
                image: "/images/curtain1.png",
                subCategories: [
                    "Wave Fold Curtain",
                    "S-Fold Curtain",
                    "Pinched Pleats Curtain",
                    "Pocket Curtain"
                ]
            },
            {
                title: "Sheer Curtains",
                slug: "SheerCurtains",
                description: "Soft, diffused natural light with a delicate touch.",
                image: "/images/curtain2.png",
                subCategories: [
                    "Wave Fold Sheer",
                    "S-Fold Sheer",
                    "Pinched Pleats Sheer",
                    "Pencil Pleats Sheer",
                    "Pocket Sheer"
                ]
            }
        ]
    },
    {
        title: "Blinds",
        items: [
            {
                title: "Blinds",
                slug: "Blinds",
                description: "Modern and versatile styles for every space.",
                image: "/images/curtain3.png",
                subCategories: [
                    "Roman Blind",
                    "Vertical Blind",
                    "Panel Blind",
                    "Zebra Blind",
                    "Venetian Blind",
                    "Honeycomb Blind"
                ]
            },
            {
                title: "Roller Blinds",
                slug: "RollerBlinds",
                description: "Elegant and functional roller blinds for complete privacy, UV reduction, or soft diffused glow.",
                image: "/images/curtain4.png",
                subCategories: [
                    "Blockout",
                    "See-Through",
                    "Light Filtering"
                ]
            }
        ]
    },
    {
        title: "Shutters",
        items: [
            {
                title: "Plantation Shutters",
                slug: "PlantationShutters",
                description: "Premium wooden aesthetics with timeless appeal.",
                image: "/images/curtain5.png",
                subCategories: [
                    "PVC Shutters",
                    "MDF Shutters",
                    "MDF + ABS Shutters",
                    "Waterproof Shutters",
                    "Stain Shutters",
                    "Painted Shutters"
                ]
            }
        ]
    },
    {
        title: "Smart Curtains & Styles",
        items: [
            {
                title: "Swags & Tails",
                slug: "SwagsTails",
                description: "Classic and luxurious draping valances.",
                image: "/images/curtain6.png",
                subCategories: []
            },
            {
                title: "Motorised Curtains",
                slug: "MotorisedCurtains",
                description: "Fully automated curtains operable via app, remote, or voice.",
                image: "/images/curtain7.png",
                isNew: true,
                subCategories: [
                    "Wi-Fi Smart Curtains",
                    "Remote Control Curtains",
                    "Voice Control Curtains",
                    "Timer Scheduled Curtains"
                ]
            },
            {
                title: "Smart Sheers",
                slug: "SmartSheers",
                description: "Automated light diffusion for effortless ambiance control.",
                image: "/images/curtain8.png",
                isNew: true,
                subCategories: [
                    "Motorised Sheer",
                    "App-Controlled Sheer",
                    "Sensor-Based Sheer"
                ]
            },
            {
                title: "Day & Night Curtains",
                slug: "DayNightCurtains",
                description: "Dual-layer fabric for seamless light control day and night.",
                image: "/images/curtain1.png",
                subCategories: [
                    "Blackout Layer",
                    "Sheer Layer",
                    "Combined Track System"
                ]
            },
            {
                title: "Special Tracks & Systems",
                slug: "SpecialTracks",
                description: "Custom track solutions for curved, bay, or skylight windows.",
                image: "/images/curtain2.png",
                subCategories: [
                    "Curved Tracks",
                    "Bay Window Tracks",
                    "Ceiling-Mounted Tracks",
                    "Fully Wrapped System"
                ]
            },
            {
                title: "Motor",
                slug: "Motor",
                description: "Reliable motorised systems for smart homes.",
                image: "/images/curtain5.png",
                subCategories: [
                    "DC Motors",
                    "AC Motors",
                    "Smart Hub"
                ]
            },
            {
                title: "Fully Wrapped System",
                slug: "FullyWrappedSystem",
                description: "Complete framing integrations for a seamless finish.",
                image: "/images/curtain1.png",
                subCategories: []
            },
            {
                title: "Films",
                slug: "Films",
                description: "Protective window films for UV control and privacy.",
                image: "/images/curtain3.png",
                subCategories: [
                    "Solar Control Films",
                    "UV Protection Films",
                    "Privacy Films (One-way Tint)",
                    "Frosted & Decorative Films",
                    "Low-E (Low Emissivity) Films",
                    "Safety & Security Films"
                ]
            },
            {
                title: "Pelmets",
                slug: "Pelmets",
                description: "Structured finish for a polished window look.",
                image: "/images/curtain3.png",
                subCategories: [
                    "Standard Pelmets",
                    "Plain Boxed Pelmets",
                    "Designer Boxed Pelmets",
                    "Plain Padded Pelmets",
                    "Designer Padded Pelmets",
                    "Plain Double Padded Pelmets",
                    "Designer Double Padded Pelmets"
                ]
            }
        ]
    }
];

export const ALL_PRODUCTS: CategoryItem[] = PRODUCT_CATEGORIES.flatMap(group => group.items);
