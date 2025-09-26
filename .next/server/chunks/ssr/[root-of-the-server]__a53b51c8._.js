module.exports = [
"[externals]/next-seo [external] (next-seo, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next-seo", () => require("next-seo"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[externals]/framer-motion [external] (framer-motion, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("framer-motion");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/clsx [external] (clsx, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("clsx");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/tailwind-merge [external] (tailwind-merge, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("tailwind-merge");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/utils.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/tailwind-merge [external] (tailwind-merge, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["clsx"])(inputs));
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ui/card.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-card text-card-foreground shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 6,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 30,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 38,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.jsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/@radix-ui/react-slot [external] (@radix-ui/react-slot, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@radix-ui/react-slot");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/class-variance-authority [external] (class-variance-authority, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("class-variance-authority");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/components/ui/button.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$radix$2d$ui$2f$react$2d$slot__$5b$external$5d$__$2840$radix$2d$ui$2f$react$2d$slot$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@radix-ui/react-slot [external] (@radix-ui/react-slot, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/class-variance-authority [external] (class-variance-authority, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$radix$2d$ui$2f$react$2d$slot__$5b$external$5d$__$2840$radix$2d$ui$2f$react$2d$slot$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$radix$2d$ui$2f$react$2d$slot__$5b$external$5d$__$2840$radix$2d$ui$2f$react$2d$slot$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$class$2d$variance$2d$authority__$5b$external$5d$__$28$class$2d$variance$2d$authority$2c$__esm_import$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            // New Glassy Variants
            glassyPrimary: [
                "relative text-slate-700 border border-white/30 rounded-full font-semibold",
                "backdrop-blur-[20px] bg-white/15",
                "shadow-[0_15px_30px_-8px_rgba(6,182,212,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
                "hover:bg-white/25 hover:shadow-[0_20px_40px_-8px_rgba(6,182,212,0.4),inset_0_1px_0_rgba(255,255,255,0.4)]",
                "hover:scale-105 hover:-translate-y-0.5 transition-all duration-500"
            ],
            glassySecondary: [
                "relative text-slate-700 border border-blue-300/30 rounded-full font-semibold",
                "backdrop-blur-[20px] bg-blue-500/15",
                "shadow-[0_15px_30px_-8px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
                "hover:bg-blue-500/25 hover:shadow-[0_20px_40px_-8px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.4)]",
                "hover:scale-105 hover:-translate-y-0.5 transition-all duration-500"
            ],
            glassyCyber: [
                "relative text-white border border-cyan-300 rounded-full font-semibold",
                "backdrop-blur-[20px]",
                "shadow-[0_15px_30px_-8px_rgba(103,232,249,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
                "hover:shadow-[0_20px_40px_-8px_rgba(103,232,249,0.4),inset_0_1px_0_rgba(255,255,255,0.4)]",
                "hover:scale-105 hover:-translate-y-0.5 transition-all duration-500"
            ]
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9",
            // Glassy sizes
            glassySm: "h-12 px-8 text-sm min-w-[280px]",
            glassyDefault: "h-16 px-12 text-base min-w-[320px]",
            glassyLg: "h-18 px-14 text-lg min-w-[384px]"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$externals$5d2f40$radix$2d$ui$2f$react$2d$slot__$5b$external$5d$__$2840$radix$2d$ui$2f$react$2d$slot$2c$__esm_import$29$__["Slot"] : "button";
    // Check if it's a glassy variant to apply special effects
    const isGlassy = variant && variant.startsWith('glassy');
    if (isGlassy) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(GlassyButton, {
            ref: ref,
            className: className,
            variant: variant,
            size: size,
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/button.jsx",
            lineNumber: 70,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.jsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
// Enhanced Glassy Button Component
const GlassyButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](({ className, variant = "glassyPrimary", size = "glassyDefault", children, disabled = false, onClick, ...props }, ref)=>{
    // Variant configurations for dynamic effects
    const variantConfig = {
        glassyPrimary: {
            background: 'rgba(255, 255, 255, 0.15)',
            hoverBackground: 'rgba(255, 255, 255, 0.25)',
            glowColor: '#06b6d4'
        },
        glassySecondary: {
            background: 'rgba(59, 130, 246, 0.15)',
            hoverBackground: 'rgba(59, 130, 246, 0.25)',
            glowColor: '#3b82f6'
        },
        glassyCyber: {
            background: '#083344',
            hoverBackground: 'rgba(24, 24, 24, 0.8)',
            glowColor: '#67e8f9'
        }
    };
    const config = variantConfig[variant] || variantConfig.glassyPrimary;
    const handleMouseEnter = (e)=>{
        if (disabled) return;
        const container = e.currentTarget;
        const elements = {
            backgroundGlow: container.querySelector('.bg-glow'),
            button: container.querySelector('.glass-btn'),
            topGlow: container.querySelector('.top-glow'),
            bottomGlow: container.querySelector('.bottom-glow')
        };
        if (elements.backgroundGlow) {
            elements.backgroundGlow.style.width = '120%';
            elements.backgroundGlow.style.height = '32px';
            elements.backgroundGlow.style.opacity = '0.9';
        }
        if (elements.button) {
            elements.button.style.background = config.hoverBackground;
        }
        if (elements.topGlow) {
            elements.topGlow.style.width = '40%';
            elements.topGlow.style.height = '3px';
            elements.topGlow.style.opacity = '1';
        }
        if (elements.bottomGlow) {
            elements.bottomGlow.style.width = '100%';
            elements.bottomGlow.style.height = '3px';
            elements.bottomGlow.style.opacity = '0.9';
        }
    };
    const handleMouseLeave = (e)=>{
        if (disabled) return;
        const container = e.currentTarget;
        const elements = {
            backgroundGlow: container.querySelector('.bg-glow'),
            button: container.querySelector('.glass-btn'),
            topGlow: container.querySelector('.top-glow'),
            bottomGlow: container.querySelector('.bottom-glow')
        };
        if (elements.backgroundGlow) {
            elements.backgroundGlow.style.width = '0';
            elements.backgroundGlow.style.height = '0';
            elements.backgroundGlow.style.opacity = '0.8';
        }
        if (elements.button) {
            elements.button.style.background = config.background;
        }
        if (elements.topGlow) {
            elements.topGlow.style.width = '0';
            elements.topGlow.style.height = '0';
            elements.topGlow.style.opacity = '0';
        }
        if (elements.bottomGlow) {
            elements.bottomGlow.style.width = '0';
            elements.bottomGlow.style.height = '0';
            elements.bottomGlow.style.opacity = '0';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("relative", disabled && "opacity-50 cursor-not-allowed"),
        style: {
            width: 'fit-content',
            height: 'fit-content'
        },
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onClick: disabled ? undefined : onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-glow absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700 ease-out",
                style: {
                    width: '0',
                    height: '0',
                    background: config.glowColor,
                    filter: 'blur(25px)',
                    opacity: '0.8',
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/components/ui/button.jsx",
                lineNumber: 195,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
                    variant,
                    size
                }), "glass-btn", className),
                style: {
                    background: config.background,
                    zIndex: 1
                },
                disabled: disabled,
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "top-glow absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full transition-all duration-600",
                        style: {
                            width: '0',
                            height: '0',
                            background: `radial-gradient(ellipse, ${config.glowColor}80 0%, transparent 70%)`,
                            opacity: '0',
                            zIndex: 2
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ui/button.jsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bottom-glow absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-600",
                        style: {
                            width: '0',
                            height: '0',
                            background: `linear-gradient(90deg, transparent 0%, ${config.glowColor}40 25%, ${config.glowColor}80 50%, ${config.glowColor}40 75%, transparent 100%)`,
                            borderRadius: '50px',
                            opacity: '0',
                            filter: `drop-shadow(0 0 20px ${config.glowColor})`,
                            zIndex: 2
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ui/button.jsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "relative z-10 flex items-center gap-3",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/ui/button.jsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/button.jsx",
                lineNumber: 208,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/button.jsx",
        lineNumber: 187,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
GlassyButton.displayName = "GlassyButton";
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ui/input.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/uuid [external] (uuid, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("uuid");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/data/mock.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock data for quiz questions and answers
__turbopack_context__.s([
    "INDUSTRY_KEYS",
    ()=>INDUSTRY_KEYS,
    "QUIZ_QUESTION_LABELS",
    ()=>QUIZ_QUESTION_LABELS,
    "clearQuizProgress",
    ()=>clearQuizProgress,
    "droneCourseCatalog",
    ()=>droneCourseCatalog,
    "generatePersonalizedPlan",
    ()=>generatePersonalizedPlan,
    "getIndustryContent",
    ()=>getIndustryContent,
    "getQuizProgress",
    ()=>getQuizProgress,
    "getSelectedIndustryContents",
    ()=>getSelectedIndustryContents,
    "industryContentDatabase",
    ()=>industryContentDatabase,
    "mockQuizQuestions",
    ()=>mockQuizQuestions,
    "saveQuizProgress",
    ()=>saveQuizProgress
]);
const mockQuizQuestions = [
    {
        id: 1,
        question: "What attracted you to the drone industry?",
        options: [
            {
                id: 'a',
                text: "I'm excited about the future of technology and innovation",
                value: 'technology'
            },
            {
                id: 'b',
                text: 'I see strong career and business opportunities in this space',
                value: 'career'
            },
            {
                id: 'c',
                text: 'I want to use drones in photography, film, or creative storytelling',
                value: 'creative'
            },
            {
                id: 'd',
                text: 'I care about the environment and want to support sustainability (e.g. precision ag, land care)',
                value: 'environmental'
            },
            {
                id: 'e',
                text: "Other - my path is unique, and I'll explain it later",
                value: 'other'
            }
        ]
    },
    {
        id: 2,
        question: "What is your main goal for drone training?",
        options: [
            {
                id: 'a',
                text: 'Career change into the drone industry',
                value: 'career_change'
            },
            {
                id: 'b',
                text: 'Add drones to an existing business/service',
                value: 'business_expansion'
            },
            {
                id: 'c',
                text: 'Personal interest/hobby',
                value: 'personal'
            },
            {
                id: 'd',
                text: 'Not sure yet',
                value: 'unsure'
            }
        ]
    },
    {
        id: 3,
        question: "Which industries are you most interested in applying drones to?",
        options: [
            {
                id: 'a',
                text: 'Agriculture & farming',
                value: 'agriculture'
            },
            {
                id: 'b',
                text: 'Construction & infrastructure',
                value: 'construction'
            },
            {
                id: 'c',
                text: 'Mining & resources',
                value: 'mining'
            },
            {
                id: 'd',
                text: 'Surveying & mapping',
                value: 'surveying'
            },
            {
                id: 'e',
                text: 'Public safety & emergency services',
                value: 'safety'
            },
            {
                id: 'f',
                text: 'Media & filmmaking',
                value: 'media'
            },
            {
                id: 'g',
                text: 'Delivery & logistics',
                value: 'delivery'
            },
            {
                id: 'h',
                text: "I'm not sure yet",
                value: 'unsure'
            }
        ]
    },
    {
        id: 4,
        question: "What is your current level of drone experience?",
        options: [
            {
                id: 'a',
                text: 'Beginner (never flown)',
                value: 'beginner'
            },
            {
                id: 'b',
                text: 'Hobbyist (recreational flights)',
                value: 'hobbyist'
            },
            {
                id: 'c',
                text: 'Experienced (self-taught, no licence)',
                value: 'experienced'
            },
            {
                id: 'd',
                text: 'Licensed pilot',
                value: 'licensed'
            }
        ]
    },
    {
        id: 5,
        question: "How confident are you with digital/technical tools?",
        options: [
            {
                id: 'a',
                text: 'Not confident (need support)',
                value: 'low_confidence'
            },
            {
                id: 'b',
                text: 'Somewhat confident (comfortable with basics)',
                value: 'medium_confidence'
            },
            {
                id: 'c',
                text: 'Very confident (pick up tech easily)',
                value: 'high_confidence'
            }
        ]
    }
];
const droneCourseCatalog = {
    repl_online: {
        name: "Remote Pilot Licence",
        price: 3000,
        category: "Professional Certification",
        weight: "Under 25kg",
        description: "Comprehensive training for commercial drone operations with flexible scheduling.",
        benefits: [
            "Study at your own pace with expert instructors",
            "Complete theory modules online with practical assessments",
            "Access to industry-standard flight planning software",
            "Lifetime certification with no renewal required"
        ],
        image: "https://images.unsplash.com/photo-1617427326325-69301e746cc2?w=800&q=80"
    },
    repl_classroom: {
        name: "Remote Pilot Licence (Classroom)",
        price: 3000,
        category: "Professional Certification",
        weight: "Under 25kg",
        description: "Intensive classroom-based training with hands-on practical experience and expert mentorship.",
        benefits: [
            "Face-to-face instruction with industry professionals",
            "Extensive hands-on flying experience",
            "Immediate feedback and personalized guidance",
            "Networking opportunities with other drone professionals"
        ],
        image: "https://images.unsplash.com/photo-1666315915304-6561a573f61f?w=800&q=80"
    },
    multi_rotor_7_25: {
        name: "Multi-Rotor 7-25kg Operations",
        price: 600,
        category: "Advanced Operations",
        weight: "7-25kg",
        description: "Specialized training for heavier drone operations requiring enhanced safety protocols.",
        benefits: [
            "Master operations of professional-grade equipment",
            "Advanced flight planning for complex missions",
            "Safety protocols for heavier aircraft operations",
            "Access to higher-paying commercial opportunities"
        ],
        image: "https://images.unsplash.com/photo-1663298277980-66a7eaa8f467?w=800&q=80"
    },
    aroc: {
        name: "AROC (Aircraft Radio Operator Certificate)",
        price: 400,
        category: "Supporting Certification",
        weight: "All Categories",
        description: "Essential radio communication certification for professional drone operations.",
        benefits: [
            "Legal requirement for certain commercial operations",
            "Enhanced communication capabilities with air traffic control",
            "Professional credibility and compliance",
            "Opens doors to restricted airspace operations"
        ],
        image: "https://images.unsplash.com/photo-1738748140319-b07cd28c41d2?w=800&q=80"
    }
};
const industryContentDatabase = {
    agriculture: {
        title: 'AGRICULTURE & FARMING',
        emoji: '🌾',
        description: "In the fields of tomorrow, farmers wield drones like digital farmhands. High-tech sensors reveal plant stress before it's visible to the naked eye, precision sprayers deliver nutrients exactly where they're needed, and autonomous seeders blanket fields with cover crops in minutes. Livestock herding and pest control become smarter, safer and more humane. By tapping into these tools, you'll help farmers grow healthier crops using fewer resources—and you'll be in high demand as agriculture continues its digital transformation.",
        opportunities: [
            {
                task: "Monitor plant health with multispectral imaging",
                benefit: "Spot disease and nutrient deficiencies early to boost yields"
            },
            {
                task: "Fly precision spraying missions",
                benefit: "Reduce chemical use while ensuring crops get exactly what they need"
            },
            {
                task: "Map soil and moisture",
                benefit: "Make irrigation smarter and more sustainable"
            },
            {
                task: "Control pests and weeds",
                benefit: "Target interventions for maximum impact and minimal environmental footprint"
            },
            {
                task: "Assist with livestock management",
                benefit: "Keep animals safe and farmers stress-free"
            }
        ],
        callToAction: "Ready to cultivate your place in smart farming? Let's get your training airborne."
    },
    construction: {
        title: 'CONSTRUCTION & INFRASTRUCTURE',
        emoji: '🏗️',
        description: "From skyscraper foundations to massive infrastructure projects, drones turn construction sites into dynamic digital twins. What used to require days of surveying and an army of engineers can now be done in hours with a single drone. Project managers track progress in real time, calculate earthwork volumes instantly, inspect bridges and rooftops without scaffolding, and capture eye-catching visuals for investors. If you thrive on building things and solving problems, this is where technology meets the hard hat.",
        opportunities: [
            {
                task: "Create detailed site maps and 3D models",
                benefit: "Get up-to-the-minute data that keeps projects on schedule"
            },
            {
                task: "Monitor progress and safety",
                benefit: "Spot issues before they become expensive headaches"
            },
            {
                task: "Perform volumetric analysis",
                benefit: "Accurately measure stockpiles and cut/fill operations"
            },
            {
                task: "Inspect hard-to-reach structures",
                benefit: "Ensure integrity without risking workers"
            },
            {
                task: "Deliver stunning visuals",
                benefit: "Showcase projects and win new business"
            }
        ],
        callToAction: "Want to transform construction from the sky? Join us and build your future."
    },
    mining: {
        title: 'MINING & RESOURCES',
        emoji: '⛏️',
        description: "Mining is tough, remote and risky—but drones make it smarter and safer. Picture scanning an entire open-pit mine with high-resolution cameras and LiDAR to create 3D models for engineers. Imagine using hyperspectral imaging to reveal hidden mineral deposits and sending agile RPAS (remotely piloted aircraft systems) down tunnels to map underground passages. With drones, stockpile volumes are tallied in minutes and emergency response becomes faster and safer. For those drawn to adventure with a scientific twist, the mining sector offers a rewarding path.",
        opportunities: [
            {
                task: "Build 3D models of pits and quarries",
                benefit: "Provide data that guides safe and efficient extraction"
            },
            {
                task: "Conduct spectral surveys",
                benefit: "Discover new resources and monitor environmental impact"
            },
            {
                task: "Measure stockpiles",
                benefit: "Manage inventory accurately without climbing mountains of material"
            },
            {
                task: "Map underground tunnels",
                benefit: "Explore and survey without exposing people to danger"
            },
            {
                task: "Inspect pipelines and conveyors",
                benefit: "Prevent leaks and downtime with proactive maintenance"
            }
        ],
        callToAction: "Ready to make mining safer and more precise? Our courses will prepare you to unearth success."
    },
    surveying: {
        title: 'SURVEYING & MAPPING',
        emoji: '🗺️',
        description: "Every successful project, from protecting rainforests to designing smart cities, starts with accurate maps. Drones excel at capturing geospatial data quickly and affordably. Environmental scientists map wildlife habitats and monitor forests, hydrologists examine watersheds and erosion, urban planners design infrastructure with centimetre-level accuracy, and disaster teams create real-time maps that save lives. If your heart is in exploring and documenting the world, drone mapping is a gateway to countless sectors.",
        opportunities: [
            {
                task: "Create land cover and environmental maps",
                benefit: "Help manage natural resources and protect ecosystems"
            },
            {
                task: "Survey hydrology and geology",
                benefit: "Support sustainable water use and study earth processes"
            },
            {
                task: "Assess agricultural and forest health",
                benefit: "Drive data-driven decisions in food production and conservation"
            },
            {
                task: "Map cities and infrastructure",
                benefit: "Influence the design of tomorrow's smart communities"
            },
            {
                task: "Provide disaster response mapping",
                benefit: "Equip emergency teams with the information they need to act quickly"
            }
        ],
        callToAction: "Want to turn data into decisions? Enrol now to chart a new course in mapping."
    },
    safety: {
        title: 'PUBLIC SAFETY & EMERGENCY SERVICES',
        emoji: '🚨',
        description: "When seconds count, drones bring eyes and aid where humans can't go. First responders use them to locate missing people with thermal cameras, deliver flotation devices to swimmers in distress, map burning buildings, and transport medical supplies to inaccessible sites. They inspect hazardous material spills from a safe distance and document accident scenes for reconstruction. By training as a public safety pilot, you'll be on the front lines—protecting communities and saving lives.",
        opportunities: [
            {
                task: "Conduct search & rescue operations",
                benefit: "Find lost or injured individuals faster and safer"
            },
            {
                task: "Provide disaster assessment",
                benefit: "Deliver up-to-date maps for wildfire, flood and storm response"
            },
            {
                task: "Fly medical & supply missions",
                benefit: "Get critical supplies to those in need quickly"
            },
            {
                task: "Inspect hazardous sites",
                benefit: "Keep responders safe while maintaining situational awareness"
            },
            {
                task: "Support crowd safety and lifesaving",
                benefit: "Monitor events and deploy life-saving gear over water"
            }
        ],
        callToAction: "If helping others drives you, our training will equip you to be a hero from above."
    },
    media: {
        title: 'MEDIA & FILMMAKING',
        emoji: '🎬',
        description: "Drones have democratised aerial cinematography. Gone are the days when only blockbusters could afford helicopter shots. Now, real estate agents, tourism boards and indie filmmakers capture sweeping vistas and dynamic event footage with drones. Whether you're shooting a wedding, a nature documentary or a music video, drones offer creative freedom, safety and cost savings. Learn to fly like a cinematographer and watch your storytelling reach new heights.",
        opportunities: [
            {
                task: "Capture cinematic aerial footage",
                benefit: "Bring breathtaking perspectives to film and TV productions"
            },
            {
                task: "Showcase real estate and architecture",
                benefit: "Highlight properties with dynamic fly-throughs and panoramas"
            },
            {
                task: "Cover events and sports",
                benefit: "Deliver dramatic live feeds and action replays from above"
            },
            {
                task: "Tell environmental and wildlife stories",
                benefit: "Film nature with minimal disturbance to animals"
            },
            {
                task: "Produce marketing and tourism content",
                benefit: "Create engaging visuals that drive engagement and bookings"
            }
        ],
        callToAction: "Ready to elevate your creative vision? Let us teach you to turn the sky into your studio."
    },
    delivery: {
        title: 'DELIVERY & LOGISTICS',
        emoji: '📦',
        description: "The future of shopping and healthcare is airborne. Drones are already zipping parcels, groceries, medicines and urgent care items to customers in under 30 minutes. Logistics giants and retailers are investing heavily in drone delivery fleets to reach remote areas and cut down on emissions. By mastering drone delivery operations, you'll be on the cutting edge of e-commerce and supply chain innovation.",
        opportunities: [
            {
                task: "Operate last-mile delivery drones",
                benefit: "Delight customers with fast, contactless delivery"
            },
            {
                task: "Transport medical and emergency supplies",
                benefit: "Ensure life-saving medicines arrive on time, every time"
            },
            {
                task: "Support e-commerce giants",
                benefit: "Work with leading retailers as they expand drone fleets"
            },
            {
                task: "Reduce carbon and costs",
                benefit: "Help companies shrink their environmental footprint"
            },
            {
                task: "Reach remote communities",
                benefit: "Connect underserved areas with essential goods"
            }
        ],
        callToAction: "Excited about pioneering new logistics models? Join our course and become a delivery innovator."
    }
};
const saveQuizProgress = (answers)=>{
    sessionStorage.setItem('droneQuizAnswers', JSON.stringify(answers));
};
const getQuizProgress = ()=>{
    const saved = sessionStorage.getItem('droneQuizAnswers');
    console.log('saved :>> ', saved);
    return saved ? JSON.parse(saved) : {};
};
const clearQuizProgress = ()=>{
    sessionStorage.removeItem('droneQuizAnswers');
};
const generatePersonalizedPlan = (answers)=>{
    const attraction = answers[1] || '';
    const goal = answers[2] || '';
    const industry = answers[3] || '';
    const experience = answers[4] || '';
    let careerTitle = "Professional Drone Specialist";
    let focusIndustry = "Multi-Industry";
    let recommendedCourses = [];
    let industryApplications = [];
    let whatToDo = [];
    let marketData = {};
    if (attraction === 'creative' || industry === 'media') {
        careerTitle = "Media & Filmmaking Specialist";
        focusIndustry = "Media & Filmmaking";
        recommendedCourses = [
            'repl_online',
            'aroc'
        ];
        industryApplications = [
            "Film and TV commercial production",
            "Corporate video and promotional content",
            "Event coverage (festivals, corporate events, weddings)",
            "Real estate marketing (residential & commercial)",
            "Small business promotional content for websites and social media",
            "Aerial cinematography for blockbuster films",
            "Documentary filmmaking with unique aerial perspectives"
        ];
        whatToDo = [
            "Build a strong portfolio showcasing diverse aerial shots and creative angles",
            "Develop proficiency with professional cameras and gimbals (DJI Inspire 2, etc.)",
            "Learn video editing and post-production skills",
            "Network with local production companies, real estate agents, and event planners",
            "Obtain AROC certification for enhanced communication capabilities",
            "Practice advanced flight techniques for smooth cinematic movements",
            "Consider specializing in specific niches like weddings or real estate"
        ];
        marketData = {
            hourlyRate: "$150-$400",
            demandLevel: "High",
            keyClients: "Production companies, real estate agents, event planners"
        };
    } else if (industry === 'agriculture' || attraction === 'environmental') {
        careerTitle = "Precision Agriculture Specialist";
        focusIndustry = "Agriculture & Farming";
        recommendedCourses = [
            'repl_classroom',
            'multi_rotor_7_25'
        ];
        industryApplications = [
            "Crop health monitoring and NDVI mapping",
            "Precision spraying of chemicals, granules, and beneficial insects",
            "Field mapping and surveying for precision farming",
            "Plant health monitoring and disease detection",
            "Variable rate application planning",
            "Irrigation management and optimization",
            "Livestock monitoring and head counting",
            "Weed identification and targeted treatment"
        ];
        whatToDo = [
            "Master DJI Terra app for comprehensive agricultural analysis",
            "Learn to interpret NDVI maps and multispectral data",
            "Obtain spray drone certification (DJI Agras T40/T50 training)",
            "Build relationships with local farmers, agronomists, and agricultural consultants",
            "Understand different crop types and their specific monitoring needs",
            "Learn about chemical application rates and agricultural regulations",
            "Consider partnering with established agricultural service providers",
            "Develop expertise in soil analysis and crop health assessment"
        ];
        marketData = {
            hourlyRate: "$175-$250",
            demandLevel: "Very High",
            keyClients: "Farmers, agricultural consultants, crop advisors"
        };
    } else if (industry === 'construction') {
        careerTitle = "Construction & Infrastructure Specialist";
        focusIndustry = "Construction & Infrastructure";
        recommendedCourses = [
            'repl_classroom',
            'multi_rotor_7_25',
            'aroc'
        ];
        industryApplications = [
            "Construction site progress monitoring and reporting",
            "3D modeling and photogrammetry for project tracking",
            "Safety inspections and site surveillance",
            "Volume calculations and material tracking",
            "Quality control and deviation detection",
            "Infrastructure inspection (bridges, towers, buildings)",
            "Project documentation and client reporting",
            "Site planning and logistics optimization"
        ];
        whatToDo = [
            "Learn 3D modeling software and photogrammetry techniques",
            "Develop expertise in construction project management workflows",
            "Build relationships with construction companies and project managers",
            "Understand building codes and safety regulations",
            "Master flight planning for consistent progress reporting",
            "Learn to create detailed site maps and elevation models",
            "Develop skills in data analysis and reporting",
            "Consider specializing in specific construction types (residential, commercial, infrastructure)"
        ];
        marketData = {
            hourlyRate: "$175-$285",
            demandLevel: "High",
            keyClients: "Construction companies, architects, project managers"
        };
    } else if (industry === 'mining') {
        careerTitle = "Mining & Resources Specialist";
        focusIndustry = "Mining & Resources";
        recommendedCourses = [
            'repl_classroom',
            'multi_rotor_7_25',
            'aroc'
        ];
        industryApplications = [
            "Stockpile volume calculations and inventory management",
            "Pit surveying and progress monitoring",
            "Blast planning and optimization",
            "Site safety inspections and hazard identification",
            "Environmental compliance monitoring",
            "Quarry volume calculations and planning",
            "Landfill site surveying and airspace calculations",
            "Equipment tracking and site logistics"
        ];
        whatToDo = [
            "Develop expertise in surveying and volume calculation software",
            "Learn mining safety protocols and regulations",
            "Build relationships with mining companies and contractors",
            "Master GPS and RTK positioning for accurate measurements",
            "Understand blast planning and mining operations",
            "Learn environmental monitoring and compliance requirements",
            "Develop skills in data analysis and reporting for mining operations",
            "Consider specializing in specific mining sectors (coal, gold, iron ore)"
        ];
        marketData = {
            hourlyRate: "$200-$300",
            demandLevel: "High",
            keyClients: "Mining companies, quarry operators, environmental consultants"
        };
    } else if (industry === 'surveying') {
        careerTitle = "Surveying & Mapping Specialist";
        focusIndustry = "Surveying & Mapping";
        recommendedCourses = [
            'repl_online',
            'multi_rotor_7_25',
            'aroc'
        ];
        industryApplications = [
            "Precision mapping and photogrammetry",
            "Topographic surveying and elevation modeling",
            "Land boundary and property surveying",
            "Environmental area mapping",
            "Infrastructure and utility mapping",
            "Digital terrain model creation",
            "GIS data collection and analysis",
            "Cadastral surveying support"
        ];
        whatToDo = [
            "Master professional surveying software and GIS applications",
            "Obtain RTK positioning equipment for centimeter-level accuracy",
            "Build relationships with surveying firms and engineering companies",
            "Learn traditional surveying principles and regulations",
            "Develop expertise in data processing and CAD software",
            "Understand legal requirements for surveying and mapping",
            "Consider partnering with licensed surveyors",
            "Specialize in specific surveying applications (boundary, topographic, utility)"
        ];
        marketData = {
            hourlyRate: "$175-$285",
            demandLevel: "High",
            keyClients: "Surveying firms, engineering companies, government agencies"
        };
    } else if (industry === 'safety') {
        careerTitle = "Public Safety & Emergency Services Specialist";
        focusIndustry = "Public Safety & Emergency Services";
        recommendedCourses = [
            'repl_online',
            'aroc'
        ];
        industryApplications = [
            "Search and rescue operations",
            "Emergency response and disaster assessment",
            "Fire monitoring and suppression support",
            "Crowd monitoring and event security",
            "Traffic accident investigation",
            "Border patrol and surveillance",
            "Emergency evacuation planning",
            "First responder training and support"
        ];
        whatToDo = [
            "Develop expertise in thermal imaging and night vision operations",
            "Build relationships with emergency services and government agencies",
            "Learn emergency response protocols and procedures",
            "Obtain security clearances where necessary",
            "Master live streaming and real-time data transmission",
            "Develop skills in crisis communication and coordination",
            "Consider specialized training in hazardous environment operations",
            "Build expertise in multiple drone platforms for different mission types"
        ];
        marketData = {
            hourlyRate: "$200-$350",
            demandLevel: "Growing",
            keyClients: "Police departments, fire services, emergency management agencies"
        };
    } else if (industry === 'delivery') {
        careerTitle = "Delivery & Logistics Specialist";
        focusIndustry = "Delivery & Logistics";
        recommendedCourses = [
            'repl_online',
            'aroc'
        ];
        industryApplications = [
            "Last-mile delivery operations",
            "Medical supply and pharmaceutical delivery",
            "Remote area supply logistics",
            "Emergency supply delivery",
            "Warehouse inventory management",
            "Supply chain optimization",
            "Agricultural input delivery",
            "Research and development for delivery systems"
        ];
        whatToDo = [
            "Stay updated on evolving delivery drone regulations",
            "Develop expertise in autonomous flight systems",
            "Build relationships with logistics companies and retailers",
            "Learn supply chain management principles",
            "Master route planning and optimization software",
            "Understand payload management and weight distribution",
            "Consider specializing in specific delivery applications (medical, retail)",
            "Develop expertise in battery management and flight range optimization"
        ];
        marketData = {
            hourlyRate: "$150-$250",
            demandLevel: "Emerging",
            keyClients: "Logistics companies, retailers, medical facilities"
        };
    } else if (industry === 'unsure' || goal === 'unsure') {
        careerTitle = "Multi-Industry Drone Specialist";
        focusIndustry = "Diverse Applications";
        recommendedCourses = [
            'repl_online',
            'aroc'
        ];
        industryApplications = [
            "Explore multiple industry applications to find your niche",
            "Aerial photography and videography across various sectors",
            "Basic inspection and survey services",
            "Event documentation and promotional content",
            "Real estate and property marketing",
            "Small business promotional services",
            "Training and education support",
            "Consultation services for drone adoption"
        ];
        whatToDo = [
            "Complete foundational training to explore different applications",
            "Build a diverse portfolio showcasing various industry uses",
            "Network across multiple industries to identify opportunities",
            "Attend industry events and drone demonstrations",
            "Consider internships or partnerships with established operators",
            "Research local market demands and opportunities",
            "Start with simpler applications before specializing",
            "Keep learning about emerging applications and technologies"
        ];
        marketData = {
            hourlyRate: "$100-$200",
            demandLevel: "Moderate",
            keyClients: "Diverse - explore to find your fit"
        };
    } else if (goal === 'business_expansion') {
        careerTitle = "Drone Business Operator";
        focusIndustry = "Commercial Services";
        recommendedCourses = [
            'repl_online',
            'aroc'
        ];
        industryApplications = [
            "Multi-industry service provision",
            "Aerial photography and videography services",
            "Inspection and survey services",
            "Agricultural support services",
            "Real estate marketing services",
            "Event documentation services",
            "Training and consultation services",
            "Equipment rental and leasing"
        ];
        whatToDo = [
            "Develop a comprehensive business plan targeting multiple industries",
            "Build a diverse portfolio showcasing various applications",
            "Invest in multiple drone platforms for different service offerings",
            "Develop strong marketing and client acquisition strategies",
            "Build partnerships with complementary service providers",
            "Understand business regulations and insurance requirements",
            "Consider franchise or partnership opportunities",
            "Develop expertise in multiple specialized areas"
        ];
        marketData = {
            hourlyRate: "$150-$300",
            demandLevel: "High",
            keyClients: "Diverse across multiple industries"
        };
    }
    return {
        title: careerTitle,
        industry: focusIndustry,
        description: `Specialized pathway designed for your interests in ${focusIndustry.toLowerCase()} applications`,
        recommendedCourses: recommendedCourses,
        industryApplications: industryApplications,
        whatToDo: whatToDo,
        marketData: marketData,
        answers: answers,
        marketOpportunities: [
            "Australia's drone industry expects to increase GDP by $14.5 billion and create 5,500 full-time jobs every year for the next 20 years",
            "Global drone market expects to double to $40 billion by 2025",
            "High demand across construction, agriculture, mining, and media industries",
            "Experienced operators earn $175-$285 per hour with established client bases"
        ],
        whyNow: [
            "Industry is in rapid growth phase with increasing opportunities across all sectors",
            "Early movers gain competitive advantage in emerging markets",
            "Government regulations are stabilizing, creating clearer business pathways",
            "Technology is becoming more accessible with comprehensive training programs available"
        ]
    };
};
const getIndustryContent = (industryKey)=>{
    return industryContentDatabase[industryKey] || null;
};
const getSelectedIndustryContents = (industryKeys)=>{
    return industryKeys.map((key)=>industryContentDatabase[key]).filter(Boolean);
};
const INDUSTRY_KEYS = {
    AGRICULTURE: 'agriculture',
    CONSTRUCTION: 'construction',
    MINING: 'mining',
    SURVEYING: 'surveying',
    SAFETY: 'safety',
    MEDIA: 'media',
    DELIVERY: 'delivery'
};
const QUIZ_QUESTION_LABELS = {
    1: "Industry Attraction",
    2: "Training Goal",
    3: "Industry Interest",
    4: "Experience Level",
    5: "Technical Confidence"
};
}),
"[project]/components/pages/Plan.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/pages/Plan.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$uuid__$5b$external$5d$__$28$uuid$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/uuid [external] (uuid, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [ssr] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/mock.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$uuid__$5b$external$5d$__$28$uuid$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$uuid__$5b$external$5d$__$28$uuid$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Course Images Mapping - Update paths to public folder
const COURSE_IMAGES = {
    'remote-pilot-licence': '/images/drone-certification-exam-preparation.jpg',
    'aroc-aircraft-radio-operator-certificate': '/images/aircraft-radio-operator-certificate-training.jpg',
    'commercial-operations': '/images/civil-engineering-drone-surveying-training.jpg',
    'advanced-training': '/images/real-estate-aerial-photography-drone-course.jpg',
    'basic-training': '/images/basic-drone-pilot-training-australia.jpg',
    'professional-certification': '/images/professional-drone-pilot-certification-australia.jpg',
    'supporting-certification': '/images/basic-drone-pilot-training-australia.jpg',
    'specialized-training': '/images/specialized-drone-operations-training-course.jpg',
    'inspection-services': '/images/construction-drone-inspection-course.jpg',
    'mapping-surveying': '/images/specialized-drone-operations-training-course.jpg',
    'photography': '/images/aerial-photography-drone-training-australia.jpg',
    'agriculture': '/images/precision-agriculture-drone-course-australia.jpg'
};
// StatCard Component
const StatCard = ({ icon: Icon, label, value, color, delay })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            delay
        },
        viewport: {
            once: true
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: "border-0 shadow-lg hover:shadow-xl transition-all duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: `inline-flex p-3 rounded-lg bg-gradient-to-r ${color} mb-4`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                            className: "w-6 h-6 text-white"
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-600 mb-1",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-bold text-slate-900",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/pages/Plan.jsx",
            lineNumber: 57,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/pages/Plan.jsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// CourseCard Component
const CourseCard = ({ course, index, isRecommended })=>{
    const courseImage = COURSE_IMAGES[course.id] || '/images/specialized-drone-operations-training-course.jpg';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            delay: index * 0.1
        },
        viewport: {
            once: true
        },
        className: `h-full ${isRecommended ? 'ring-2 ring-blue-500 rounded-2xl' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: "h-full hover:shadow-xl transition-all duration-300 overflow-hidden",
            children: [
                isRecommended && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold",
                        children: "RECOMMENDED FOR YOU"
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "relative h-48 overflow-hidden bg-slate-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: courseImage,
                            alt: `${course.name} - Drone training course Australia`,
                            fill: true,
                            className: "object-cover hover:scale-105 transition-transform duration-500",
                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        course.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold",
                            children: course.badge
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-xl",
                            children: course.name
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-600 mt-2",
                            children: course.description
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-4 h-4 text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: course.duration
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                            className: "w-4 h-4 text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: course.price
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                course.delivery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                            className: "w-4 h-4 text-slate-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: course.delivery
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        course.benefits && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-2 pt-2 border-t",
                            children: course.benefits.slice(0, 3).map((benefit, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "w-4 h-4 text-green-600 mt-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-slate-700",
                                            children: benefit
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            className: "w-full bg-blue-600 hover:bg-blue-700 text-white",
                            children: [
                                "Learn More",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "ml-2 w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/pages/Plan.jsx",
            lineNumber: 81,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/pages/Plan.jsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Plan = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [planData, setPlanData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [enhancedCourses, setEnhancedCourses] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [showCasaForm, setShowCasaForm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [casaFormData, setCasaFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        name: '',
        email: ''
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        console.log('Plan component loading...');
        try {
            // Get quiz ID from URL or localStorage
            const { quizId } = router.query;
            const storedQuizId = localStorage.getItem('quizId');
            const currentQuizId = quizId || storedQuizId;
            if (!currentQuizId) {
                // No quiz ID, redirect to quiz
                toast({
                    title: "No quiz results found",
                    description: "Please complete the quiz first to see your personalized plan.",
                    variant: "destructive"
                });
                router.push('/quiz');
                return;
            }
            // Get quiz answers
            const quizAnswers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getQuizProgress"])();
            if (!quizAnswers || Object.keys(quizAnswers).length === 0) {
                // No quiz answers, redirect to quiz
                toast({
                    title: "Incomplete quiz",
                    description: "Please complete the quiz to see your personalized plan.",
                    variant: "destructive"
                });
                router.push('/quiz');
                return;
            }
            // Generate personalized plan
            const plan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["generatePersonalizedPlan"])(quizAnswers);
            setPlanData(plan);
            // Get recommended courses
            const allCourses = [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["droneCourseCatalog"]
            ];
            // For demo, select 3-4 courses based on plan
            const recommendedCourses = allCourses.slice(0, 4).map((course, index)=>({
                    ...course,
                    id: course.id || `course-${index}`,
                    isRecommended: index === 0 // Mark first course as recommended
                }));
            setEnhancedCourses(recommendedCourses);
        } catch (err) {
            console.error('Error loading plan:', err);
            setError('Failed to load your personalized plan');
            toast({
                title: "Error",
                description: "Failed to load your plan. Please try again.",
                variant: "destructive"
            });
        }
    }, [
        router,
        toast
    ]);
    const handleCasaDownload = async (e)=>{
        e.preventDefault();
        if (!casaFormData.name || !casaFormData.email) {
            toast({
                title: "Please fill all fields",
                description: "Name and email are required.",
                variant: "destructive"
            });
            return;
        }
        setIsDownloading(true);
        try {
            // In a real app, you would generate or fetch the PDF here
            // For now, we'll simulate a download
            // Create a download link for the PDF (PDF should be in public folder)
            const link = document.createElement('a');
            link.href = '/pdfs/Future.pdf'; // Make sure to move PDF to public/pdfs/
            link.download = 'CASA-Drone-Future-Report.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            toast({
                title: "Download started!",
                description: "Your CASA report is downloading."
            });
            setShowCasaForm(false);
            setCasaFormData({
                name: '',
                email: ''
            });
        } catch (error) {
            console.error('Download error:', error);
            toast({
                title: "Download failed",
                description: "Please try again later.",
                variant: "destructive"
            });
        } finally{
            setIsDownloading(false);
        }
    };
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-full max-w-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-red-600 mb-4",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/quiz",
                            legacyBehavior: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "bg-blue-600 hover:bg-blue-700 text-white",
                                    children: "Back to Quiz"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 281,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 280,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 279,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 277,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 276,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/pages/Plan.jsx",
            lineNumber: 275,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!planData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-full max-w-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-8 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-slate-600",
                        children: "Loading your personalized plan..."
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 297,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 296,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 295,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/pages/Plan.jsx",
            lineNumber: 294,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-slate-50 to-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "relative py-20 bg-gradient-to-r from-blue-600 to-purple-600",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "text-center text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl font-bold mb-4",
                                children: "Your Personalized Drone Career Plan"
                            }, void 0, false, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-xl opacity-90 max-w-3xl mx-auto",
                                children: "Based on your assessment, we've created a customized training pathway to launch your drone career"
                            }, void 0, false, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 307,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-r from-slate-800 to-slate-900 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold mb-2",
                                        children: '📊 Free CASA Report: "The Future of Drones in Australia"'
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 330,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300",
                                        children: "Get exclusive insights into drone industry growth and opportunities"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 329,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setShowCasaForm(true),
                                className: "bg-white text-slate-900 hover:bg-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "mr-2 w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Download Free Report"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 326,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatCard, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                                    label: "Focus Industry",
                                    value: planData?.industry || "Commercial Operations",
                                    color: "from-blue-400 to-blue-500",
                                    delay: 0
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatCard, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
                                    label: "Earning Potential",
                                    value: "$75-$400/hour",
                                    color: "from-green-400 to-green-500",
                                    delay: 0.1
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatCard, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                    label: "Time to Certification",
                                    value: "3 - 5 Days",
                                    color: "from-purple-400 to-purple-500",
                                    delay: 0.2
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatCard, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                    label: "Career Growth",
                                    value: "77% Industry Growth",
                                    color: "from-orange-400 to-orange-500",
                                    delay: 0.3
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            viewport: {
                                once: true
                            },
                            className: "mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-slate-900 mb-8 text-center",
                                    children: "Your Recommended Training Path"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8",
                                    children: enhancedCourses.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(CourseCard, {
                                            course: course,
                                            index: index,
                                            isRecommended: course.isRecommended
                                        }, course.id, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 396,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 383,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 350,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 349,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showCasaForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    className: "w-full max-w-md bg-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCasaForm(false),
                                    className: "absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 417,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 413,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "Download CASA Report"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 412,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                onSubmit: handleCasaDownload,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-700 mb-1",
                                                children: "Name *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Plan.jsx",
                                                lineNumber: 424,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "text",
                                                value: casaFormData.name,
                                                onChange: (e)=>setCasaFormData({
                                                        ...casaFormData,
                                                        name: e.target.value
                                                    }),
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Plan.jsx",
                                                lineNumber: 427,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 423,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-slate-700 mb-1",
                                                children: "Email *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Plan.jsx",
                                                lineNumber: 435,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "email",
                                                value: casaFormData.email,
                                                onChange: (e)=>setCasaFormData({
                                                        ...casaFormData,
                                                        email: e.target.value
                                                    }),
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Plan.jsx",
                                                lineNumber: 438,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 434,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        disabled: isDownloading,
                                        className: "w-full bg-blue-600 hover:bg-blue-700 text-white",
                                        children: isDownloading ? 'Processing...' : 'Download PDF'
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 445,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 422,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 421,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 411,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 410,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/pages/Plan.jsx",
        lineNumber: 305,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Plan;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/plan.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// pages/plan.js
__turbopack_context__.s([
    "default",
    ()=>PlanPage,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$seo__$5b$external$5d$__$28$next$2d$seo$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next-seo [external] (next-seo, cjs)");
//import Layout from '../components/Layout/Layout';
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$Plan$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/pages/Plan.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$Plan$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$Plan$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function PlanPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$seo__$5b$external$5d$__$28$next$2d$seo$2c$__cjs$29$__["NextSeo"], {
                title: "Your Personalized Drone Career Plan | Drone Career Pro",
                description: "View your customized drone training pathway and recommended courses based on your career assessment results.",
                canonical: "https://dronecareerpro.au/plan",
                noindex: true,
                openGraph: {
                    url: 'https://dronecareerpro.au/plan',
                    title: 'Your Personalized Drone Career Plan',
                    description: 'Your customized training pathway to launch your drone career.',
                    site_name: 'Drone Career Pro',
                    locale: 'en_AU',
                    type: 'website'
                }
            }, void 0, false, {
                fileName: "[project]/pages/plan.js",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$Plan$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/plan.js",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
async function getServerSideProps(context) {
    const { query } = context;
    // You can fetch user-specific data here if needed
    // For now, we'll just pass the quiz ID from the query
    return {
        props: {
            quizId: query.quizId || null
        }
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a53b51c8._.js.map