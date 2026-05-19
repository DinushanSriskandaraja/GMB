// ─── Store Product Data ────────────────────────────────────────────────────────
// Sourced from 5minuteblinds.com.au — measurements in mm

export type ProductCategory = 'blinds' | 'curtains';
export type ControlSide = 'Left Side' | 'Right Side';
export type FitType = 'Face Fit' | 'Recess Fit';
export type RollDirection = 'Front Roll' | 'Back Roll';
export type ChainColor = 'White' | 'Black' | 'Grey' | 'Sandstone' | 'Silver';
export type BracketColor = 'White' | 'Black' | 'Grey' | 'Sandstone';
export type BaseRailShape = 'Oval' | 'Flat';
export type BaseRailColor = 'Silver' | 'Black' | 'White' | 'Bone' | 'Sandstone';
export type CleatStyle = 'Clean Standard' | 'Chrome' | 'Brass';
export type BattenAlignment = 'Uniform' | 'Not Uniform';
export type TrackColor = 'Anodised Silver' | 'White' | 'Black' | 'Birch White';
export type WeightType = 'Chained Weights' | 'Chainless Weights';
export type CurtainFit = 'Top Fit' | 'Face Fit';
export type CurtainPosition = 'Standard/Normal' | 'Wall to Wall';
export type CurtainStack = 'Left Stack' | 'Right Stack' | 'Centre Opening';
export type CurtainStyle = 'S Fold' | 'Triple Pinch Pleat' | 'Pencil Pleat';
export type CurtainHem = 'Lead weight' | '70mm hem';
export type CurtainTrackType = 'Designer' | 'Residential';
export type WandLength = '910mm' | '1220mm' | '1520mm';
export type CurtainTrackColor = 'White' | 'Black';
export type BracketStyle = 'Standard' | 'Extension';
export type DoubleBlindSetup = 'Blockout in Front' | 'Sunscreen or Light Filtering in Front';
export type DoubleCurtainSetup = 'Blockout in Front' | 'Sheer in Front';
export type VerticalControlSide = 'Left Hand Stack' | 'Right Hand Stack' | 'Centre Opening';

export interface RollerBlindConfig {
  type: 'roller';
  widthMin: number; widthMax: number;
  dropMin: number; dropMax: number;
  controls: ControlSide[];
  fitTypes: FitType[];
  rollDirections: RollDirection[];
  chainColors: ChainColor[];
  bracketColors: BracketColor[];
  baseRailShapes: BaseRailShape[];
  baseRailColors: BaseRailColor[];
}

export interface RomanBlindConfig {
  type: 'roman';
  widthMin: number; widthMax: number;
  dropMin: number; dropMax: number;
  controls: ControlSide[];
  cleatStyles: CleatStyle[];
  battenAlignments: BattenAlignment[];
}

export interface VerticalBlindConfig {
  type: 'vertical';
  widthMin: number; widthMax: number;
  dropMin: number; dropMax: number;
  controls: VerticalControlSide[];
  fitTypes: FitType[];
  trackColors: TrackColor[];
  weightTypes: WeightType[];
}

export interface DoubleBlindConfig {
  type: 'double-blind';
  widthMin: number; widthMax: number;
  dropMin: number; dropMax: number;
  setups: DoubleBlindSetup[];
  controls: ControlSide[];
}

export interface CurtainConfig {
  type: 'curtain';
  widthMin: number; widthMax: number;
  dropMin: number; dropMax: number;
  fitTypes: CurtainFit[];
  positions: CurtainPosition[];
  stacks: CurtainStack[];
  styles: CurtainStyle[];
  hems: CurtainHem[];
  trackTypes: CurtainTrackType[];
  wandLengths: WandLength[];
  trackColors: CurtainTrackColor[];
  bracketStyles: BracketStyle[];
}

export interface DoubleCurtainConfig {
  type: 'double-curtain';
  widthMin: number; widthMax: number;
  dropMin: number; dropMax: number;
  setups: DoubleCurtainSetup[];
  stacks: CurtainStack[];
  styles: CurtainStyle[];
  trackColors: CurtainTrackColor[];
}

export type ProductConfig =
  | RollerBlindConfig
  | RomanBlindConfig
  | VerticalBlindConfig
  | DoubleBlindConfig
  | CurtainConfig
  | DoubleCurtainConfig;

export interface StoreProduct {
  id: string;
  name: string;
  tagline: string;
  image: string;
  price: number;
  colors: number;
  leadTime: string;
  category: ProductCategory;
  subCategory: string;
  badge: string; // e.g. "Blockout" | "Light Filtering" | "Sunscreen" | "Sheer"
  config: ProductConfig;
}

// ─── ROLLER BLIND BASE CONFIG ──────────────────────────────────────────────────
const rollerBase: Omit<RollerBlindConfig, 'type'> = {
  widthMin: 300, widthMax: 3010,
  dropMin: 200, dropMax: 3300,
  controls: ['Left Side', 'Right Side'],
  fitTypes: ['Face Fit', 'Recess Fit'],
  rollDirections: ['Front Roll', 'Back Roll'],
  chainColors: ['White', 'Black', 'Grey', 'Sandstone', 'Silver'],
  bracketColors: ['White', 'Black', 'Grey', 'Sandstone'],
  baseRailShapes: ['Oval', 'Flat'],
  baseRailColors: ['Silver', 'Black', 'White', 'Bone', 'Sandstone'],
};

// ─── ROMAN BLIND BASE CONFIG ───────────────────────────────────────────────────
const romanBase: Omit<RomanBlindConfig, 'type'> = {
  widthMin: 600, widthMax: 2950,
  dropMin: 800, dropMax: 3000,
  controls: ['Left Side', 'Right Side'],
  cleatStyles: ['Clean Standard', 'Chrome', 'Brass'],
  battenAlignments: ['Uniform', 'Not Uniform'],
};

// ─── CURTAIN BASE CONFIG ───────────────────────────────────────────────────────
const curtainBase: Omit<CurtainConfig, 'type' | 'dropMax'> = {
  widthMin: 300, widthMax: 15000,
  dropMin: 300,
  fitTypes: ['Top Fit', 'Face Fit'],
  positions: ['Standard/Normal', 'Wall to Wall'],
  stacks: ['Left Stack', 'Right Stack', 'Centre Opening'],
  styles: ['S Fold', 'Triple Pinch Pleat', 'Pencil Pleat'],
  hems: ['Lead weight', '70mm hem'],
  trackTypes: ['Designer', 'Residential'],
  wandLengths: ['910mm', '1220mm', '1520mm'],
  trackColors: ['White', 'Black'],
  bracketStyles: ['Standard', 'Extension'],
};

// ─── PRODUCTS ──────────────────────────────────────────────────────────────────
export const PRODUCTS: StoreProduct[] = [
  // ── BLINDS ────────────────────────────────────────────────────────────────────
  {
    id: 'breeze-sunscreen',
    name: 'See Through',
    tagline: 'Antimicrobial fabric that filters light while preserving your view',
    image: '/images/curtain1.png',
    price: 123,
    colors: 8,
    leadTime: 'Ready in 2–3 weeks',
    category: 'blinds',
    subCategory: 'Roller Blind',
    badge: 'Sunscreen',
    config: { type: 'roller', ...rollerBase },
  },
  {
    id: 'haven-light-filtering',
    name: 'Light Filtering',
    tagline: 'Linen-look roller blind with colours that match the Haven Blockout range',
    image: '/images/curtain2.png',
    price: 136,
    colors: 7,
    leadTime: 'Ready in 2–3 weeks',
    category: 'blinds',
    subCategory: 'Roller Blind',
    badge: 'Light Filtering',
    config: { type: 'roller', ...rollerBase },
  },
  {
    id: 'tranquil-blockout',
    name: 'Blockout Roller Blinds',
    tagline: 'Durable blockout with the widest colour range in the collection',
    image: '/images/curtain3.png',
    price: 105,
    colors: 17,
    leadTime: 'Ready in 2–3 weeks',
    category: 'blinds',
    subCategory: 'Roller Blind',
    badge: 'Blockout',
    config: { type: 'roller', ...rollerBase },
  },
  // {
  //   id: 'seclusion-light-filtering',
  //   name: 'Light Filtering',
  //   tagline: 'Subtle textured weave with a light pattern, matching the Haven Blockout palette',
  //   image: '/images/curtain4.png',
  //   price: 273,
  //   colors: 11,
  //   leadTime: 'Ready in 3–4 weeks',
  //   category: 'blinds',
  //   subCategory: 'Roman Blind',
  //   badge: 'Light Filtering',
  //   config: { type: 'roman', ...romanBase },
  // },
  {
    id: 'haven-blockout-roman',
    name: 'Roman Blinds',
    tagline: 'Premium linen-look Roman blind with full blockout performance',
    image: '/images/curtain5.png',
    price: 325,
    colors: 7,
    leadTime: 'Ready in 3–4 weeks',
    category: 'blinds',
    subCategory: 'Roman Blind',
    badge: 'Blockout',
    config: { type: 'roman', ...romanBase },
  },
  {
    id: 'double-roller-blinds',
    name: 'Double Roller Blinds',
    tagline: 'Cost-effective privacy, light control and insulation combined in one system',
    image: '/images/curtain1.png',
    price: 299,
    colors: 17,
    leadTime: 'Ready in 2–3 weeks',
    category: 'blinds',
    subCategory: 'Double Roller',
    badge: 'Combo',
    config: {
      type: 'double-blind',
      widthMin: 300, widthMax: 3010,
      dropMin: 200, dropMax: 3300,
      setups: ['Blockout in Front', 'Sunscreen or Light Filtering in Front'],
      controls: ['Left Side', 'Right Side'],
    },
  },
  {
    id: 'ora-blockout-vertical',
    name: ' Vertical Blinds',
    tagline: 'Premium textured vertical blind with full blockout for large windows & sliding doors',
    image: '/images/curtain2.png',
    price: 138,
    colors: 13,
    leadTime: 'Ready in 2–3 weeks',
    category: 'blinds',
    subCategory: 'Vertical Blind',
    badge: 'Blockout',
    config: {
      type: 'vertical',
      widthMin: 945, widthMax: 2900,
      dropMin: 950, dropMax: 3650,
      controls: ['Left Hand Stack', 'Right Hand Stack', 'Centre Opening'],
      fitTypes: ['Face Fit', 'Recess Fit'],
      trackColors: ['Anodised Silver', 'White', 'Black', 'Birch White'],
      weightTypes: ['Chained Weights', 'Chainless Weights'],
    },
  },

  // ── CURTAINS ──────────────────────────────────────────────────────────────────
  {
    id: 'catalina-sheer',
    name: ' Sheer Curtains',
    tagline: 'Lightweight elegance with a smooth finish that softens natural light beautifully',
    image: '/images/curtain3.png',
    price: 287,
    colors: 10,
    leadTime: 'Ready in 3–4 weeks',
    category: 'curtains',
    subCategory: 'Sheer Curtain',
    badge: 'Sheer',
    config: { type: 'curtain', ...curtainBase, dropMax: 15000 },
  },
  {
    id: 'eclipse-blockout',
    name: ' Blockout Curtains',
    tagline: 'Luxurious thick-weave fabric delivering complete darkness and insulation',
    image: '/images/curtain4.png',
    price: 357,
    colors: 14,
    leadTime: 'Ready in 3–4 weeks',
    category: 'curtains',
    subCategory: 'Blockout Curtain',
    badge: 'Blockout',
    config: { type: 'curtain', ...curtainBase, dropMax: 5500 },
  },
  {
    id: 'double-curtains',
    name: 'Double Curtains',
    tagline: 'Premium privacy, light control and insulation — sheer and blockout in one elegant system',
    image: '/images/curtain5.png',
    price: 480,
    colors: 14,
    leadTime: 'Ready in 3–4 weeks',
    category: 'curtains',
    subCategory: 'Double Curtain',
    badge: 'Combo',
    config: {
      type: 'double-curtain',
      widthMin: 300, widthMax: 15000,
      dropMin: 300, dropMax: 15000,
      setups: ['Blockout in Front', 'Sheer in Front'],
      stacks: ['Left Stack', 'Right Stack', 'Centre Opening'],
      styles: ['S Fold', 'Triple Pinch Pleat', 'Pencil Pleat'],
      trackColors: ['White', 'Black'],
    },
  },
];

// ─── Legacy shape for store listing page ─────────────────────────────────────
export const STORE_DATA = {
  blinds: PRODUCTS.filter(p => p.category === 'blinds'),
  curtains: PRODUCTS.filter(p => p.category === 'curtains'),
};

export function getProductBySlug(slug: string): StoreProduct | undefined {
  return PRODUCTS.find(p => p.id === slug);
}
