# Lavorama.ch — Full Developer Prompt
## "The Wash Cycle" — Award-Winning Website Rebuild

---

## PROJECT OVERVIEW

Build a complete, award-worthy website for **Lavorama** — a modern self-service laundromat and laundry pickup service in Geneva, Switzerland (Rue des Pâquis 43). The site must be a strong candidate for **Awwwards Site of the Day**, **CSS Design Awards**, or **Webby Awards**.

The concept is **"The Wash Cycle"** — the entire homepage is a cinematic scroll journey through the stages of doing laundry:

> Pre-wash → Wash → Rinse → Spin → Dry → Fresh & Delivered

Each stage is a full-viewport scroll section with its own color palette, animation, and narrative. The user doesn't just read about Lavorama — they *feel* the experience of fresh, clean laundry.

---

## TECH STACK

```
Framework:        Next.js 14 (App Router)
Language:         TypeScript
Styling:          Tailwind CSS v3 + CSS Modules for complex animations
Animation:        GSAP 3 + ScrollTrigger plugin (scroll-driven)
                  Framer Motion v11 (page transitions, micro-interactions)
                  Lenis v1.x (smooth scroll)
3D / Particles:   Three.js r160 (hero bubble/water particle system)
Lottie:           @lottiefiles/react-lottie-player (service icons)
Fonts:            Google Fonts — "Playfair Display" (headings) + "DM Sans" (body)
Icons:            Lucide React
Deployment:       Vercel (already live at lavorama-react.vercel.app)
i18n:             next-intl (French primary, English secondary)
Performance:      next/image, WebP, lazy loading, 95+ Lighthouse target
```

---

## INSTALL DEPENDENCIES

```bash
npx create-next-app@latest lavorama --typescript --tailwind --app
cd lavorama

npm install gsap @gsap/react
npm install framer-motion
npm install @studio-freight/lenis
npm install three @types/three
npm install @lottiefiles/react-lottie-player
npm install lucide-react
npm install next-intl
npm install clsx tailwind-merge
```

---

## DESIGN SYSTEM

### Color Palette — "The Wash Cycle"

```css
:root {
  /* Brand Colors */
  --color-foam:       #F0F7FF;   /* Off-white, clean, fresh */
  --color-bubble:     #D6EEFF;   /* Light blue — soapy water */
  --color-wash:       #3B8BD4;   /* Primary blue — mid-cycle */
  --color-deep:       #1A4F7A;   /* Deep water — trustworthy */
  --color-spin:       #0D2B45;   /* Almost black-blue — dramatic */
  --color-fresh:      #E8F9F0;   /* Mint fresh — post-wash */
  --color-clean:      #FFFFFF;   /* Pure white — delivered */

  /* Typography */
  --font-display:     'Playfair Display', Georgia, serif;
  --font-body:        'DM Sans', system-ui, sans-serif;

  /* Spacing */
  --section-pad:      clamp(80px, 12vw, 160px);

  /* Easing */
  --ease-spring:      cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth:      cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Typography Scale

```css
.display-xl  { font: 700 clamp(56px, 8vw, 120px) / 1.0 var(--font-display); letter-spacing: -0.03em; }
.display-lg  { font: 700 clamp(40px, 5vw, 72px)  / 1.1 var(--font-display); letter-spacing: -0.02em; }
.heading-md  { font: 500 clamp(24px, 3vw, 40px)  / 1.2 var(--font-body);    letter-spacing: -0.01em; }
.body-lg     { font: 400 clamp(16px, 1.5vw, 20px)/ 1.7 var(--font-body); }
.body-sm     { font: 400 14px / 1.6 var(--font-body); color: rgba(255,255,255,0.65); }
.label       { font: 500 12px / 1 var(--font-body); letter-spacing: 0.12em; text-transform: uppercase; }
```

---

## FILE STRUCTURE

```
/app
  layout.tsx              ← Root layout, Lenis init, font load
  page.tsx                ← Homepage — assembles all sections
  /booking
    page.tsx              ← Booking form page
  /services
    page.tsx              ← Services detail page
  globals.css             ← CSS variables, resets, keyframes

/components
  /hero
    HeroScene.tsx         ← Three.js bubble particle system
    HeroText.tsx          ← Animated headline split-text
  /wash-cycle
    WashCycleSection.tsx  ← GSAP ScrollTrigger pinned journey
    StagePrewash.tsx
    StageWash.tsx
    StageRinse.tsx
    StageSpin.tsx
    StageDry.tsx
    StageFresh.tsx
  /sections
    Pricing.tsx           ← Interactive pricing calculator
    Testimonials.tsx      ← Swipeable testimonial cards
    Services.tsx          ← Lottie icon cards
    Pickup.tsx            ← Pickup service section
    Contact.tsx           ← Map + contact form
  /ui
    NavBar.tsx            ← Transparent → frosted glass on scroll
    WashButton.tsx        ← Animated CTA button with water effect
    LottieIcon.tsx        ← Reusable Lottie wrapper
    CountUp.tsx           ← Animated number counter
    FloatingWhatsApp.tsx  ← Pulsing WhatsApp button

/lib
  gsap.ts                 ← GSAP + ScrollTrigger registration
  lenis.ts                ← Lenis smooth scroll setup
  three-scene.ts          ← Three.js bubble system

/public
  /lottie
    washing-machine.json  ← From LottieFiles
    hanger.json
    delivery.json
    checkmark.json
    bubbles.json
```

---

## SECTION 1 — NAVBAR

```tsx
// components/ui/NavBar.tsx
"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function NavBar() {
  const { scrollY } = useScroll();
  // Becomes frosted glass after 80px scroll
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const blurVal   = useTransform(scrollY, [0, 80], [0, 16]);

  return (
    <motion.nav
      style={{
        backgroundColor: `rgba(255,255,255,${bgOpacity})`,
        backdropFilter: `blur(${blurVal}px)`,
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="font-display text-2xl font-bold tracking-tight text-white mix-blend-difference">
          Lavorama
        </span>
      </motion.div>

      {/* Nav links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="hidden md:flex items-center gap-8"
      >
        {["Services", "Tarifs", "Ramassage", "Contact"].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-white mix-blend-difference hover:opacity-60 transition-opacity"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {item}
          </motion.a>
        ))}
        <WashButton href="https://wa.me/41795654142" label="Réserver" />
      </motion.div>
    </motion.nav>
  );
}
```

---

## SECTION 2 — HERO WITH THREE.JS BUBBLES

```tsx
// components/hero/HeroScene.tsx
"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const W = mount.clientWidth, H = mount.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
    camera.position.z = 5;

    // Create 120 bubble spheres
    const bubbles: THREE.Mesh[] = [];
    const geometry = new THREE.SphereGeometry(1, 16, 16);

    for (let i = 0; i < 120; i++) {
      const size = Math.random() * 0.12 + 0.03;
      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color().setHSL(0.58, 0.7, 0.7 + Math.random() * 0.2),
        transparent: true,
        opacity: Math.random() * 0.4 + 0.1,
        roughness: 0,
        metalness: 0,
        transmission: 0.9,
        thickness: 0.5,
      });
      const mesh = new THREE.Mesh(geometry, mat);
      mesh.scale.setScalar(size);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4
      );
      // Store velocity in userData
      mesh.userData.vel = {
        x: (Math.random() - 0.5) * 0.003,
        y: Math.random() * 0.005 + 0.002,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
      };
      scene.add(mesh);
      bubbles.push(mesh);
    }

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const point = new THREE.PointLight(0x88ccff, 2, 20);
    point.position.set(3, 3, 3);
    scene.add(point);

    // Animation loop
    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      bubbles.forEach((b) => {
        b.userData.vel.wobble += b.userData.vel.wobbleSpeed;
        b.position.x += b.userData.vel.x + Math.sin(b.userData.vel.wobble) * 0.002;
        b.position.y += b.userData.vel.y;
        if (b.position.y > 5) b.position.y = -5; // loop
      });
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const onResize = () => {
      const W2 = mount.clientWidth, H2 = mount.clientHeight;
      camera.aspect = W2 / H2;
      camera.updateProjectionMatrix();
      renderer.setSize(W2, H2);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
}
```

```tsx
// components/hero/HeroText.tsx — Split-text headline
"use client";
import { motion } from "framer-motion";

const words = ["Laverie", "moderne.", "Genève."];

export default function HeroText() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6">
      <motion.p
        className="label text-bubble mb-6 tracking-widest"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Rue des Pâquis, Genève
      </motion.p>

      <h1 className="display-xl text-white mb-8 overflow-hidden">
        {words.map((word, i) => (
          <motion.span
            key={word}
            className="inline-block mr-[0.2em]"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4 + i * 0.12,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      <motion.p
        className="body-lg text-white/70 max-w-xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Machines industrielles 7–20 kg. Lessive incluse. Ramassage gratuit.
      </motion.p>

      {/* Animated stats row */}
      <motion.div
        className="flex gap-12 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        {[
          { num: "500+", label: "clients satisfaits" },
          { num: "20kg", label: "machine max" },
          { num: "6CHF", label: "à partir de" },
        ].map(({ num, label }) => (
          <div key={label} className="text-center">
            <div className="display-lg text-white">{num}</div>
            <div className="body-sm">{label}</div>
          </div>
        ))}
      </motion.div>

      <WashButton href="#services" label="Découvrir nos services" large />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto" />
      </motion.div>
    </div>
  );
}
```

---

## SECTION 3 — THE WASH CYCLE (GSAP ScrollTrigger)

This is the **centerpiece** of the site. Six pinned sections that play like a film as the user scrolls.

```tsx
// components/wash-cycle/WashCycleSection.tsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  {
    id: "prewash",
    bg: "#2C3E50",
    accent: "#95A5A6",
    label: "01 — Pré-lavage",
    title: "Déposez votre linge.",
    body: "Apportez vos vêtements ou réservez un ramassage. Nos machines font le reste.",
    icon: "🧺",
    particles: "dust",
  },
  {
    id: "wash",
    bg: "#1A4F7A",
    accent: "#3B8BD4",
    label: "02 — Lavage",
    title: "Immersion totale.",
    body: "Machines industrielles de 7 à 20 kg. Eau chaude, détergents premium écologiques.",
    icon: "💧",
    particles: "water",
  },
  {
    id: "rinse",
    bg: "#1B6CA8",
    accent: "#D6EEFF",
    label: "03 — Rinçage",
    title: "Eau pure. Deux fois.",
    body: "Double rinçage automatique. Résidus de détergent éliminés. Peaux sensibles bienvenues.",
    icon: "🫧",
    particles: "bubbles",
  },
  {
    id: "spin",
    bg: "#0D2B45",
    accent: "#F39C12",
    label: "04 — Essorage",
    title: "1400 tours/min.",
    body: "L'essorage haute vitesse retire 60% de l'eau. Séchage deux fois plus rapide.",
    icon: "🌀",
    particles: "spin",
  },
  {
    id: "dry",
    bg: "#7D3C98",
    accent: "#F8C471",
    label: "05 — Séchage",
    title: "Chaud. Doux. Parfait.",
    body: "Sèche-linge professionnel. 10 minutes = 1.50 CHF. Linge prêt en 30 minutes.",
    icon: "☀️",
    particles: "warm",
  },
  {
    id: "fresh",
    bg: "#1A5C38",
    accent: "#A9DFBF",
    label: "06 — Livré frais",
    title: "Propre. Livré chez vous.",
    body: "Service de ramassage et livraison gratuit. Plié, emballé, souriant.",
    icon: "✨",
    particles: "stars",
  },
];

export default function WashCycleSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the container and scroll horizontally through stages
      gsap.to(trackRef.current, {
        x: () => -(trackRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${trackRef.current!.scrollWidth - window.innerWidth}`,
        },
      });

      // Animate each stage's content on entry
      STAGES.forEach((stage, i) => {
        const el = document.getElementById(`stage-${stage.id}`);
        if (!el) return;

        gsap.fromTo(
          el.querySelectorAll(".stage-label, .stage-title, .stage-body, .stage-cta"),
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              containerAnimation: ScrollTrigger.getById("wash-cycle-scroll"),
              start: "left center",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden h-screen">
      {/* Stage indicator dots */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {STAGES.map((s) => (
          <div key={s.id} className={`stage-dot w-2 h-2 rounded-full bg-white/30`} data-stage={s.id} />
        ))}
      </div>

      {/* Horizontal track */}
      <div ref={trackRef} className="flex h-full" style={{ width: `${STAGES.length * 100}vw` }}>
        {STAGES.map((stage) => (
          <div
            key={stage.id}
            id={`stage-${stage.id}`}
            className="relative flex items-center justify-center w-screen h-screen flex-shrink-0 overflow-hidden"
            style={{ backgroundColor: stage.bg }}
          >
            {/* Background particle canvas per stage */}
            <StageParticles type={stage.particles} accent={stage.accent} />

            {/* Content */}
            <div className="relative z-10 max-w-2xl px-12 text-white">
              <p className="stage-label label mb-4 opacity-60" style={{ color: stage.accent }}>
                {stage.label}
              </p>
              <div className="stage-title display-lg mb-6">
                <span style={{ fontSize: "4rem" }}>{stage.icon}</span>
                <br />
                {stage.title}
              </div>
              <p className="stage-body body-lg text-white/70 mb-10">{stage.body}</p>
              <div className="stage-cta">
                <WashButton href="#booking" label="Réserver maintenant" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## SECTION 4 — ANIMATED CTA BUTTON (Water Effect)

```tsx
// components/ui/WashButton.tsx
"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

interface WashButtonProps {
  href: string;
  label: string;
  large?: boolean;
}

export default function WashButton({ href, label, large }: WashButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rippleX = useTransform(x, (v) => `${v}%`);
  const rippleY = useTransform(y, (v) => `${v}%`);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width) * 100);
    y.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/30 px-8 py-4 text-white font-medium text-sm tracking-wide"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      style={{ fontSize: large ? "1rem" : "0.875rem" }}
    >
      {/* Water ripple fill on hover */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle at var(--rx) var(--ry), rgba(59,139,212,0.6) 0%, transparent 70%)",
          "--rx": rippleX,
          "--ry": rippleY,
        } as any}
        variants={{ hover: { scale: 3, opacity: 1 }, initial: { scale: 0, opacity: 0 } }}
        transition={{ duration: 0.4 }}
      />
      <span className="relative z-10">{label}</span>
      <motion.span
        className="relative z-10"
        variants={{ hover: { x: 4 } }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        →
      </motion.span>
    </motion.a>
  );
}
```

---

## SECTION 5 — INTERACTIVE PRICING CALCULATOR

```tsx
// components/sections/Pricing.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MACHINES = [
  { kg: 7,  price: 6,  label: "Petit chargement",  note: "Chemises, sous-vêtements, T-shirts" },
  { kg: 15, price: 12, label: "Chargement familial", note: "Draps, serviettes, vêtements mixtes" },
  { kg: 20, price: 16, label: "Grand chargement",   note: "Couettes, oreillers, doudounes" },
];

export default function Pricing() {
  const [selected, setSelected] = useState(1);
  const [dryMinutes, setDryMinutes] = useState(30);
  const dryPrice = (dryMinutes / 10) * 1.5;
  const total = MACHINES[selected].price + dryPrice;

  return (
    <section className="py-32 bg-foam px-6" id="tarifs">
      <div className="max-w-4xl mx-auto">
        <p className="label text-wash mb-4">Tarification</p>
        <h2 className="display-lg text-spin mb-4">Calculez votre lavage.</h2>
        <p className="body-lg text-spin/60 mb-16">Lessive incluse dans tous les programmes.</p>

        {/* Machine selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {MACHINES.map((m, i) => (
            <motion.button
              key={m.kg}
              onClick={() => setSelected(i)}
              className={`relative p-6 rounded-2xl border text-left transition-all ${
                selected === i
                  ? "bg-wash text-white border-wash"
                  : "bg-white text-spin border-bubble hover:border-wash/50"
              }`}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="text-3xl font-display font-bold mb-1">{m.kg}kg</div>
              <div className="text-sm font-medium mb-1">{m.label}</div>
              <div className={`text-xs ${selected === i ? "text-white/70" : "text-spin/50"}`}>
                {m.note}
              </div>
              <div className="mt-4 text-2xl font-bold font-display">{m.price}.— CHF</div>
              {selected === i && (
                <motion.div
                  layoutId="selected-ring"
                  className="absolute inset-0 rounded-2xl border-2 border-white/40"
                  transition={{ type: "spring", stiffness: 300 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Dryer slider */}
        <div className="bg-white rounded-2xl p-8 border border-bubble mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium text-spin">Séchage (optionnel)</span>
            <span className="font-display text-2xl text-wash">{dryMinutes} min</span>
          </div>
          <input
            type="range" min="0" max="60" step="10"
            value={dryMinutes}
            onChange={(e) => setDryMinutes(Number(e.target.value))}
            className="w-full accent-wash cursor-pointer"
          />
          <div className="flex justify-between text-xs text-spin/40 mt-2">
            <span>Pas de séchage</span>
            <span>60 min</span>
          </div>
        </div>

        {/* Total */}
        <AnimatePresence mode="wait">
          <motion.div
            key={total}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            className="bg-spin text-white rounded-2xl p-8 flex items-center justify-between"
          >
            <div>
              <div className="label text-white/40 mb-2">Total estimé</div>
              <div className="display-lg">{total.toFixed(2)} CHF</div>
            </div>
            <WashButton href="https://wa.me/41795654142" label="Réserver ce créneau" />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
```

---

## SECTION 6 — LOTTIE SERVICE ICONS

```tsx
// components/sections/Services.tsx
"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

const SERVICES = [
  {
    lottie: "/lottie/washing-machine.json",
    title: "Libre-service",
    body: "Machines 7–20 kg, interface tactile, lessive incluse. De 6h à 22h.",
  },
  {
    lottie: "/lottie/delivery.json",
    title: "Ramassage & livraison",
    body: "Réservez sur WhatsApp. On vient chercher, on livre propre.",
  },
  {
    lottie: "/lottie/hanger.json",
    title: "Traitement spécial",
    body: "Couettes, doudounes, articles délicats. Soin personnalisé.",
  },
  {
    lottie: "/lottie/bubbles.json",
    title: "Éco-responsable",
    body: "Détergents biodégradables. Machines économes en eau et énergie.",
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-spin px-6" id="services">
      <div className="max-w-5xl mx-auto">
        <p className="label text-bubble mb-4">Nos services</p>
        <h2 className="display-lg text-white mb-16">Ce que nous faisons pour vous.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              className="group bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-wash/50 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 mb-6">
                <Player
                  autoplay
                  loop
                  src={s.lottie}
                  style={{ width: 64, height: 64 }}
                />
              </div>
              <h3 className="heading-md text-white mb-3">{s.title}</h3>
              <p className="body-lg text-white/60">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## SECTION 7 — FLOATING WHATSAPP BUTTON

```tsx
// components/ui/FloatingWhatsApp.tsx
"use client";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/41795654142"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-900/30"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08, paddingRight: "1.5rem" }}
      style={{ padding: "14px" }}
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 animation-delay-300" />

      {/* WhatsApp SVG icon */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.847L0 24l6.338-1.499A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.375l-.36-.213-3.732.882.949-3.636-.234-.374A9.818 9.818 0 0112 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
      </svg>

      <motion.span
        className="text-sm font-medium overflow-hidden whitespace-nowrap"
        initial={{ width: 0, opacity: 0 }}
        whileHover={{ width: "auto", opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        Réserver
      </motion.span>
    </motion.a>
  );
}
```

---

## SECTION 8 — SMOOTH SCROLL SETUP (Lenis)

```tsx
// app/layout.tsx
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

---

## SECTION 9 — VIEW TRANSITIONS (Page-to-page)

```css
/* app/globals.css */

/* Enable View Transitions API */
@view-transition {
  navigation: auto;
}

/* Cross-fade + slight upward slide on page transition */
::view-transition-old(root) {
  animation: 300ms ease both fade-and-slide-out;
}
::view-transition-new(root) {
  animation: 400ms ease both fade-and-slide-in;
}

@keyframes fade-and-slide-out {
  to { opacity: 0; transform: translateY(-20px) scale(0.98); }
}
@keyframes fade-and-slide-in {
  from { opacity: 0; transform: translateY(20px) scale(0.98); }
}

/* Shared element — washing machine image transitions */
.hero-machine-img {
  view-transition-name: machine-img;
}
```

---

## SECTION 10 — PERFORMANCE CHECKLIST

```tsx
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],   // Auto-convert to modern formats
    deviceSizes: [640, 750, 828, 1080, 1200],
  },
  experimental: {
    optimizePackageImports: ["gsap", "framer-motion", "lucide-react"],
  },
};

// Always use next/image for all images:
import Image from "next/image";
<Image
  src="/laundromat-exterior.jpg"
  alt="Lavorama exterior"
  width={1200}
  height={800}
  priority           // for above-fold images
  className="hero-machine-img"   // for View Transitions
/>

// Lazy load Three.js hero (heavy) — only loads after page interactive
import dynamic from "next/dynamic";
const HeroScene = dynamic(() => import("@/components/hero/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-spin" />,
});
```

---

## SECTION 11 — LOTTIE ANIMATIONS TO DOWNLOAD

Go to **lottiefiles.com** and download these free animations as `.json`:

| File | Search query on LottieFiles | Usage |
|------|-----------------------------|-------|
| `washing-machine.json` | "washing machine spin" | Hero + Services |
| `bubbles.json` | "soap bubbles floating" | Rinse section |
| `hanger.json` | "clothes hanger swing" | Services section |
| `delivery.json` | "delivery scooter" | Pickup section |
| `checkmark.json` | "success checkmark" | Booking confirmation |
| `stars.json` | "sparkle stars" | Testimonials |

Place all `.json` files in `/public/lottie/`.

---

## SECTION 12 — DEPLOYMENT

```bash
# Build and test
npm run build
npm run start

# Deploy to Vercel (auto-deploys on git push)
git add .
git commit -m "feat: wash cycle experience + GSAP animations"
git push origin main

# Vercel environment variables (if needed)
NEXT_PUBLIC_SITE_URL=https://lavorama.ch
```

---

## AWARD SUBMISSION CHECKLIST

Before submitting to Awwwards or CSS Design Awards:

- [ ] Lighthouse score 95+ on Performance, Accessibility, SEO
- [ ] Three.js hero scene runs at 60fps on mobile (reduce particles to 60 on mobile)
- [ ] All animations respect `prefers-reduced-motion` media query
- [ ] `<html lang="fr">` set in layout
- [ ] Open Graph meta tags with a stunning OG image
- [ ] Scroll journey completes without layout shifts (CLS < 0.1)
- [ ] Booking via WhatsApp works perfectly on mobile
- [ ] Site live at lavorama.ch (not just on Vercel preview)
- [ ] Add a `/colophon` page describing your tech stack (judges love this)

---

## ESTIMATED BUILD TIME

| Section | Time |
|---------|------|
| Setup + design system | 2h |
| Navbar + Hero + Three.js | 4h |
| Wash Cycle GSAP ScrollTrigger | 6h |
| Services + Pricing Calculator | 3h |
| Testimonials + Contact | 2h |
| WhatsApp button + micro-interactions | 1h |
| Performance + Lighthouse tuning | 2h |
| **Total** | **~20 hours** |

---

*Built with love for clean laundry. Bonne chance for the award! 🧺✨*
