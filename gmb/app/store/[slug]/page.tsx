'use client';

import { useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import {
  getProductBySlug,
  type RollerBlindConfig,
  type RomanBlindConfig,
  type VerticalBlindConfig,
  type DoubleBlindConfig,
  type CurtainConfig,
  type DoubleCurtainConfig,
} from '@/lib/data/store';

// ─── Components ───────────────────────────────────────────────────────────────
import ProductHeader from '@/components/store/ProductHeader';
import ProductSummary from '@/components/store/ProductSummary';
import {
  RollerCfg,
  RomanCfg,
  VerticalCfg,
  DoubleBlindCfg,
  CurtainCfg,
  DoubleCurtainCfg,
} from '@/components/store/Configurators';

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function StoreProductPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const initialStyle = searchParams?.get('style');
  const router = useRouter();
  const { addToCart } = useCart();

  const product = getProductBySlug(slug);

  const [currentCfg, setCfg] = useState<Record<string, unknown>>({});
  const [basePrice, setBasePrice] = useState(product?.price ?? 0);
  const [valid, setValid] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [adding, setAdding] = useState(false);
  const [remeasure, setRemeasure] = useState(false);
  const [install, setInstall] = useState(false);

  // Total = base product price + optional GMB service add-ons
  const price = basePrice + (remeasure ? 100 : 0) + (install ? 100 : 0);

  const handleCfg = (c: Record<string, unknown>, p: number, v: boolean) => {
    setCfg(c);
    setBasePrice(p);
    setValid(v);
  };

  const canSubmit = valid && confirmed;

  const handleAdd = () => {
    if (!canSubmit || !product) return;
    setAdding(true);
    setTimeout(() => {
      addToCart({
        id: `${product.id}-${Date.now()}`,
        name: product.name,
        price,
        image: product.image,
        category: product.subCategory.toUpperCase(),
        cartType: 'buy',
        configuration: {
          ...currentCfg,
          roomName: roomName || 'Not specified',
          ...(remeasure && { 'GMB Re-measure': '+$100' }),
          ...(install  && { 'GMB Installation': '+$100' }),
        },
      });
      setAdding(false);
    }, 600);
  };

  // ─── 404 state ──────────────────────────────────────────────────────────────
  if (!product) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center gap-3">
        <p className="text-slate-400">Product not found.</p>
        <button
          onClick={() => router.push('/store')}
          className="text-[#1756a0] font-bold text-sm underline underline-offset-4"
        >
          Back to Store
        </button>
      </div>
    );
  }

  const { config } = product;

  return (
    <div className="bg-[#f8fafc] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ProductHeader product={product} />

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-start">

          {/* LEFT — Configurator steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full lg:w-[58%] xl:w-[60%]"
          >
            {config.type === 'roller'         && <RollerCfg       cfg={config as RollerBlindConfig}    base={product.price} onCfg={handleCfg} />}
            {config.type === 'roman'          && <RomanCfg        cfg={config as RomanBlindConfig}     base={product.price} onCfg={handleCfg} />}
            {config.type === 'vertical'       && <VerticalCfg     cfg={config as VerticalBlindConfig}  base={product.price} onCfg={handleCfg} />}
            {config.type === 'double-blind'   && <DoubleBlindCfg  cfg={config as DoubleBlindConfig}    base={product.price} onCfg={handleCfg} />}
            {config.type === 'curtain'        && <CurtainCfg      cfg={config as CurtainConfig}        base={product.price} onCfg={handleCfg} initialStyle={initialStyle} />}
            {config.type === 'double-curtain' && <DoubleCurtainCfg cfg={config as DoubleCurtainConfig} base={product.price} onCfg={handleCfg} initialStyle={initialStyle} />}
          </motion.div>

          {/* RIGHT — Sticky summary panel */}
          <ProductSummary
            product={product}
            currentCfg={currentCfg}
            price={price}
            valid={valid}
            confirmed={confirmed}
            setConfirmed={setConfirmed}
            roomName={roomName}
            setRoomName={setRoomName}
            adding={adding}
            canSubmit={canSubmit}
            onAddToCart={handleAdd}
            remeasure={remeasure}
            setRemeasure={setRemeasure}
            install={install}
            setInstall={setInstall}
          />
        </div>
      </div>
    </div>
  );
}
