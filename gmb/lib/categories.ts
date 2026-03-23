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
        title: "Soft Treatments",
        items: [
            {
                title: "Curtains",
                slug: "Curtains",
                description: "Timeless elegance and privacy.",
                image: "/images/curtain1.png",
                subCategories: [
                    "Wave Fold Curtain",
                    "S-Fold Curtain",
                    "Pinched Pleats Curtain",
                    "Pocket Curtain"
                ]
            },
            {
                title: "Sheers",
                slug: "Sheers",
                description: "Soft, diffused natural light.",
                image: "/images/curtain2.png",
                subCategories: [
                    "Wave Fold Sheer",
                    "S-Fold Sheer",
                    "Pinched Pleats Sheer",
                    "Pencil Pleats Sheer",
                    "Pocket Sheer"
                ]
            },
            {
                title: "Pelmets",
                slug: "Pelmets",
                description: "Structured finish for windows.",
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
            },
            {
                title: "Swags & tails",
                slug: "SwagsTails",
                description: "Classic and luxurious valances.",
                image: "/images/curtain4.png",
                subCategories: []
            }
        ]
    },
    {
        title: "Blinds & Hard Covers",
        items: [
            {
                title: "Blinds",
                slug: "Blinds",
                description: "Modern and versatile styles.",
                image: "/images/curtain5.png",
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
                description: "Sleek, practical light control.",
                image: "/images/curtain1.png",
                subCategories: [
                    "Blackout Roller Blind / Holland Blind",
                    "See-Through Roller Blind / Screen Blind",
                    "Light Filtering Blind / Translucent Blind"
                ]
            },
            {
                title: "Plantation Shutters",
                slug: "PlantationShutters",
                description: "Premium wooden aesthetics.",
                image: "/images/curtain2.png",
                subCategories: [
                    "PVC Shutters",
                    "MDF Shutters",
                    "MDF + ABS Shutters",
                    "Waterproof Shutters",
                    "Stain Shutters",
                    "Painted Shutters"
                ]
            },
            {
                title: "Films",
                slug: "Films",
                description: "Protective window films.",
                image: "/images/curtain3.png",
                subCategories: [
                    "Solar Control Films",
                    "UV Protection Films",
                    "Privacy Films (One-way Tint)",
                    "Frosted & Decorative Films",
                    "Low-E (Low Emissivity) Films",
                    "Safety & Security Films"
                ]
            }
        ]
    },
    {
        title: "Systems & Smart Tech",
        items: [
            {
                title: "Smart Sheers",
                slug: "SmartSheers",
                description: "Automated light diffusion.",
                image: "/images/curtain4.png",
                isNew: true,
                subCategories: []
            },
            {
                title: "Motor",
                slug: "Motor",
                description: "Reliable motors for smart homes.",
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
                description: "Complete framing integrations.",
                image: "/images/curtain1.png",
                subCategories: []
            },
            {
                title: "Special Tracks",
                slug: "SpecialTracks",
                description: "Custom hardware solutions.",
                image: "/images/curtain2.png",
                subCategories: []
            }
        ]
    }
];

export const ALL_PRODUCTS: CategoryItem[] = PRODUCT_CATEGORIES.flatMap(group => group.items);
