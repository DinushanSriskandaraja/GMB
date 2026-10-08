'use client';

import { useState, useMemo, useEffect } from 'react';
import { FABRIC_TIERS, calcPrice, type FabricTier, type FabricColor } from './FabricData';
import StepCard from './StepCard';
import OptionGroup from './OptionGroup';
import MeasureAndFabricStep from './MeasureAndFabricStep';
import type {
  RollerBlindConfig, RomanBlindConfig, VerticalBlindConfig,
  DoubleBlindConfig, CurtainConfig, DoubleCurtainConfig,
} from '@/lib/data/store';

type CfgCallback = (c: Record<string, unknown>, p: number, v: boolean) => void;

// ─── Shared hook for measurement + fabric state ───────────────────────────────
function useMeasureFabric() {
  const [w, setW] = useState<number | ''>('');
  const [d, setD] = useState<number | ''>('');
  const [tier, setTier] = useState<FabricTier>(FABRIC_TIERS[0]);
  const [color, setColor] = useState<FabricColor>(FABRIC_TIERS[0].colors[0]);
  return { w, setW, d, setD, tier, setTier, color, setColor };
}

// ─── Roller Blind ─────────────────────────────────────────────────────────────
export function RollerCfg({ cfg, base, onCfg }: { cfg: RollerBlindConfig; base: number; onCfg: CfgCallback }) {
  const { w, setW, d, setD, tier, setTier, color, setColor } = useMeasureFabric();
  const [ctrl, setCtrl] = useState<string>(cfg.controls[0]);
  const [fit, setFit] = useState<string>(cfg.fitTypes[0]);
  const [roll, setRoll] = useState<string>(cfg.rollDirections[1]);
  const [chain, setChain] = useState<string>(cfg.chainColors[0]);
  const [bracket, setBracket] = useState<string>(cfg.bracketColors[0]);
  const [railShape, setRailShape] = useState<string>(cfg.baseRailShapes[0]);
  const [railColor, setRailColor] = useState<string>(cfg.baseRailColors[0]);

  const valid = w !== '' && d !== ''
    && !(typeof w === 'number' && (w < cfg.widthMin || w > cfg.widthMax))
    && !(typeof d === 'number' && (d < cfg.dropMin || d > cfg.dropMax));

  const price = useMemo(() => calcPrice(base, w, d, 40, tier.multiplier, valid), [w, d, base, valid, tier.multiplier]);

  useEffect(() => {
    onCfg({ fabric: tier.name, fabricColor: color.name, ctrl, fit, roll, chain, bracket, railShape, railColor, width: w, drop: d }, price, valid);
  }, [tier, color, ctrl, fit, roll, chain, bracket, railShape, railColor, w, d, price, valid]); // eslint-disable-line

  return (
    <div className="space-y-4">
      <MeasureAndFabricStep step={1} wMin={cfg.widthMin} wMax={cfg.widthMax} dMin={cfg.dropMin} dMax={cfg.dropMax} w={w} d={d} setW={setW} setD={setD} tier={tier} color={color} onTierChange={setTier} onColorChange={setColor} />
      <StepCard step={2} title="Fit Type" desc="Face Fit mounts outside the recess; Recess Fit fits inside."><OptionGroup options={cfg.fitTypes} value={fit} onChange={setFit} /></StepCard>
      <StepCard step={3} title="Roll Direction" desc="Back Roll minimises light gaps."><OptionGroup options={cfg.rollDirections} value={roll} onChange={setRoll} /></StepCard>
      <StepCard step={4} title="Control Side"><OptionGroup options={cfg.controls} value={ctrl} onChange={setCtrl} /></StepCard>
      <StepCard step={5} title="Chain Colour"><OptionGroup options={cfg.chainColors} value={chain} onChange={setChain} /></StepCard>
      <StepCard step={6} title="Bracket Colour"><OptionGroup options={cfg.bracketColors} value={bracket} onChange={setBracket} /></StepCard>
      <StepCard step={7} title="Base Rail Shape"><OptionGroup options={cfg.baseRailShapes} value={railShape} onChange={setRailShape} /></StepCard>
      <StepCard step={8} title="Base Rail Colour"><OptionGroup options={cfg.baseRailColors} value={railColor} onChange={setRailColor} /></StepCard>
    </div>
  );
}

// ─── Roman Blind ──────────────────────────────────────────────────────────────
export function RomanCfg({ cfg, base, onCfg }: { cfg: RomanBlindConfig; base: number; onCfg: CfgCallback }) {
  const { w, setW, d, setD, tier, setTier, color, setColor } = useMeasureFabric();
  const [ctrl, setCtrl] = useState<string>(cfg.controls[0]);
  const [cleat, setCleat] = useState<string>(cfg.cleatStyles[0]);
  const [batten, setBatten] = useState<string>(cfg.battenAlignments[0]);

  const valid = w !== '' && d !== ''
    && !(typeof w === 'number' && (w < cfg.widthMin || w > cfg.widthMax))
    && !(typeof d === 'number' && (d < cfg.dropMin || d > cfg.dropMax));

  const price = useMemo(() => calcPrice(base, w, d, 60, tier.multiplier, valid), [w, d, base, valid, tier.multiplier]);

  useEffect(() => {
    onCfg({ fabric: tier.name, fabricColor: color.name, ctrl, cleat, batten, width: w, drop: d }, price, valid);
  }, [tier, color, ctrl, cleat, batten, w, d, price, valid]); // eslint-disable-line

  return (
    <div className="space-y-4">
      <MeasureAndFabricStep step={1} wMin={cfg.widthMin} wMax={cfg.widthMax} dMin={cfg.dropMin} dMax={cfg.dropMax} w={w} d={d} setW={setW} setD={setD} tier={tier} color={color} onTierChange={setTier} onColorChange={setColor} />
      <StepCard step={2} title="Control Side"><OptionGroup options={cfg.controls} value={ctrl} onChange={setCtrl} /></StepCard>
      <StepCard step={3} title="Cleat & Acorn Style"><OptionGroup options={cfg.cleatStyles} value={cleat} onChange={setCleat} /></StepCard>
      <StepCard step={4} title="Batten Alignment" desc="'Uniform' aligns battens across blinds of different drops."><OptionGroup options={cfg.battenAlignments} value={batten} onChange={setBatten} /></StepCard>
    </div>
  );
}

// ─── Vertical Blind ───────────────────────────────────────────────────────────
export function VerticalCfg({ cfg, base, onCfg }: { cfg: VerticalBlindConfig; base: number; onCfg: CfgCallback }) {
  const { w, setW, d, setD, tier, setTier, color, setColor } = useMeasureFabric();
  const [ctrl, setCtrl] = useState<string>(cfg.controls[0]);
  const [fit, setFit] = useState<string>(cfg.fitTypes[0]);
  const [track, setTrack] = useState<string>(cfg.trackColors[0]);
  const [weight, setWeight] = useState<string>(cfg.weightTypes[0]);

  const valid = w !== '' && d !== ''
    && !(typeof w === 'number' && (w < cfg.widthMin || w > cfg.widthMax))
    && !(typeof d === 'number' && (d < cfg.dropMin || d > cfg.dropMax));

  const price = useMemo(() => calcPrice(base, w, d, 35, tier.multiplier, valid), [w, d, base, valid, tier.multiplier]);

  useEffect(() => {
    onCfg({ fabric: tier.name, fabricColor: color.name, ctrl, fit, track, weight, width: w, drop: d }, price, valid);
  }, [tier, color, ctrl, fit, track, weight, w, d, price, valid]); // eslint-disable-line

  return (
    <div className="space-y-4">
      <MeasureAndFabricStep step={1} wMin={cfg.widthMin} wMax={cfg.widthMax} dMin={cfg.dropMin} dMax={cfg.dropMax} w={w} d={d} setW={setW} setD={setD} tier={tier} color={color} onTierChange={setTier} onColorChange={setColor} />
      <StepCard step={2} title="Fitting Type"><OptionGroup options={cfg.fitTypes} value={fit} onChange={setFit} /></StepCard>
      <StepCard step={3} title="Control Stack"><OptionGroup options={cfg.controls} value={ctrl} onChange={setCtrl} /></StepCard>
      <StepCard step={4} title="Track Colour"><OptionGroup options={cfg.trackColors} value={track} onChange={setTrack} /></StepCard>
      <StepCard step={5} title="Weight Type"><OptionGroup options={cfg.weightTypes} value={weight} onChange={setWeight} /></StepCard>
    </div>
  );
}

// ─── Double Blind ─────────────────────────────────────────────────────────────
export function DoubleBlindCfg({ cfg, base, onCfg }: { cfg: DoubleBlindConfig; base: number; onCfg: CfgCallback }) {
  const { w, setW, d, setD, tier, setTier, color, setColor } = useMeasureFabric();
  const [setup, setSetup] = useState<string>(cfg.setups[0]);
  const [ctrl, setCtrl] = useState<string>(cfg.controls[0]);

  const valid = w !== '' && d !== ''
    && !(typeof w === 'number' && (w < cfg.widthMin || w > cfg.widthMax))
    && !(typeof d === 'number' && (d < cfg.dropMin || d > cfg.dropMax));

  const price = useMemo(() => calcPrice(base, w, d, 75, tier.multiplier, valid), [w, d, base, valid, tier.multiplier]);

  useEffect(() => {
    onCfg({ fabric: tier.name, fabricColor: color.name, setup, ctrl, width: w, drop: d }, price, valid);
  }, [tier, color, setup, ctrl, w, d, price, valid]); // eslint-disable-line

  return (
    <div className="space-y-4">
      <StepCard step={1} title="Choose Set-Up" desc="Which fabric do you want at the front of the window?"><OptionGroup options={cfg.setups} value={setup} onChange={setSetup} /></StepCard>
      <MeasureAndFabricStep step={2} wMin={cfg.widthMin} wMax={cfg.widthMax} dMin={cfg.dropMin} dMax={cfg.dropMax} w={w} d={d} setW={setW} setD={setD} tier={tier} color={color} onTierChange={setTier} onColorChange={setColor} />
      <StepCard step={3} title="Control Side"><OptionGroup options={cfg.controls} value={ctrl} onChange={setCtrl} /></StepCard>
    </div>
  );
}

// ─── Curtain ──────────────────────────────────────────────────────────────────
export function CurtainCfg({ cfg, base, onCfg, initialStyle }: { cfg: CurtainConfig; base: number; onCfg: CfgCallback; initialStyle?: string | null }) {
  const { w, setW, d, setD, tier, setTier, color, setColor } = useMeasureFabric();
  const [fit, setFit] = useState<string>(cfg.fitTypes[0]);
  const [pos, setPos] = useState<string>(cfg.positions[0]);
  const [stack, setStack] = useState<string>(cfg.stacks[2]);
  
  const initStyle = (initialStyle && (cfg.styles as readonly string[]).includes(initialStyle)) ? initialStyle : cfg.styles[0];
  const [style, setStyle] = useState<string>(initStyle);
  
  const [hem, setHem] = useState<string>(cfg.hems[0]);
  const [track, setTrack] = useState<string>(cfg.trackTypes[0]);
  const [wand, setWand] = useState<string>(cfg.wandLengths[0]);
  const [tColor, setTColor] = useState<string>(cfg.trackColors[0]);
  const [bracket, setBracket] = useState<string>(cfg.bracketStyles[0]);

  const valid = w !== '' && d !== ''
    && !(typeof w === 'number' && (w < cfg.widthMin || w > cfg.widthMax))
    && !(typeof d === 'number' && (d < cfg.dropMin || d > cfg.dropMax));

  const price = useMemo(() => calcPrice(base, w, d, 50, tier.multiplier, valid), [w, d, base, valid, tier.multiplier]);

  useEffect(() => {
    onCfg({ fabric: tier.name, fabricColor: color.name, fit, pos, stack, style, hem, track, wand, tColor, bracket, width: w, drop: d }, price, valid);
  }, [tier, color, fit, pos, stack, style, hem, track, wand, tColor, bracket, w, d, price, valid]); // eslint-disable-line

  return (
    <div className="space-y-4">
      <MeasureAndFabricStep step={1} wLbl="Space Width (mm)" dLbl="Space Drop (mm)" wMin={cfg.widthMin} wMax={cfg.widthMax} dMin={cfg.dropMin} dMax={cfg.dropMax} w={w} d={d} setW={setW} setD={setD} tier={tier} color={color} onTierChange={setTier} onColorChange={setColor} />
      <StepCard step={2} title="Fitting Type" desc="'Top Fit' for ceiling. 'Face Fit' for wall or architrave."><OptionGroup options={cfg.fitTypes} value={fit} onChange={setFit} /></StepCard>
      <StepCard step={3} title="Position" desc="'Standard' includes wall returns. 'Wall to Wall' extends fully between walls."><OptionGroup options={cfg.positions} value={pos} onChange={setPos} /></StepCard>
      <StepCard step={4} title="Curtain Stack"><OptionGroup options={cfg.stacks} value={stack} onChange={setStack} /></StepCard>
      <StepCard step={5} title="Curtain Style"><OptionGroup options={cfg.styles} value={style} onChange={setStyle} /></StepCard>
      <StepCard step={6} title="Curtain Hem"><OptionGroup options={cfg.hems} value={hem} onChange={setHem} /></StepCard>
      <StepCard step={7} title="Track Type" desc="'Designer' for flush ceiling. 'Residential' for face-fit."><OptionGroup options={cfg.trackTypes} value={track} onChange={setTrack} /></StepCard>
      <StepCard step={8} title="Wand Length"><OptionGroup options={cfg.wandLengths} value={wand} onChange={setWand} /></StepCard>
      <StepCard step={9} title="Track Colour"><OptionGroup options={cfg.trackColors} value={tColor} onChange={setTColor} /></StepCard>
      <StepCard step={10} title="Bracket Style" desc="'Extension' protrudes further from the wall."><OptionGroup options={cfg.bracketStyles} value={bracket} onChange={setBracket} /></StepCard>
    </div>
  );
}

// ─── Double Curtain ───────────────────────────────────────────────────────────
export function DoubleCurtainCfg({ cfg, base, onCfg, initialStyle }: { cfg: DoubleCurtainConfig; base: number; onCfg: CfgCallback; initialStyle?: string | null }) {
  const { w, setW, d, setD, tier, setTier, color, setColor } = useMeasureFabric();
  const [setup, setSetup] = useState<string>(cfg.setups[0]);
  const [stack, setStack] = useState<string>(cfg.stacks[2]);
  
  const initStyle = (initialStyle && (cfg.styles as readonly string[]).includes(initialStyle)) ? initialStyle : cfg.styles[0];
  const [style, setStyle] = useState<string>(initStyle);
  
  const [tColor, setTColor] = useState<string>(cfg.trackColors[0]);

  const valid = w !== '' && d !== ''
    && !(typeof w === 'number' && (w < cfg.widthMin || w > cfg.widthMax))
    && !(typeof d === 'number' && (d < cfg.dropMin || d > cfg.dropMax));

  const price = useMemo(() => calcPrice(base, w, d, 90, tier.multiplier, valid), [w, d, base, valid, tier.multiplier]);

  useEffect(() => {
    onCfg({ fabric: tier.name, fabricColor: color.name, setup, stack, style, tColor, width: w, drop: d }, price, valid);
  }, [tier, color, setup, stack, style, tColor, w, d, price, valid]); // eslint-disable-line

  return (
    <div className="space-y-4">
      <StepCard step={1} title="Choose Set-Up" desc="Which fabric sits at the front of the window?"><OptionGroup options={cfg.setups} value={setup} onChange={setSetup} /></StepCard>
      <MeasureAndFabricStep step={2} wLbl="Space Width (mm)" dLbl="Space Drop (mm)" wMin={cfg.widthMin} wMax={cfg.widthMax} dMin={cfg.dropMin} dMax={cfg.dropMax} w={w} d={d} setW={setW} setD={setD} tier={tier} color={color} onTierChange={setTier} onColorChange={setColor} />
      <StepCard step={3} title="Curtain Stack"><OptionGroup options={cfg.stacks} value={stack} onChange={setStack} /></StepCard>
      <StepCard step={4} title="Curtain Style"><OptionGroup options={cfg.styles} value={style} onChange={setStyle} /></StepCard>
      <StepCard step={5} title="Track Colour"><OptionGroup options={cfg.trackColors} value={tColor} onChange={setTColor} /></StepCard>
    </div>
  );
}
