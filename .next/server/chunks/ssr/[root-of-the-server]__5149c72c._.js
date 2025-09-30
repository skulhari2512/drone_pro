module.exports = [
"[externals]/next-seo [external] (next-seo, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next-seo", () => require("next-seo"));

module.exports = mod;
}),
"[project]/components/Layout/Header.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [ssr] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const Header = ()=>{
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const navigation = [
        {
            name: 'How It Works',
            href: '/how-it-works'
        },
        {
            name: 'Industries',
            href: '/industry-uses'
        },
        {
            name: 'Training',
            href: '/training'
        },
        {
            name: 'FAQ',
            href: '/faq'
        },
        {
            name: 'Contact',
            href: '/contact'
        }
    ];
    const isActive = (path)=>router.pathname === path;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center space-x-2 group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    !imageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "relative h-8 w-8 transition-transform duration-200 group-hover:scale-105",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/dronelogo.png",
                                            alt: "Drone Career Pro Logo",
                                            fill: true,
                                            className: "object-contain",
                                            sizes: "32px",
                                            priority: true,
                                            onError: ()=>setImageError(true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Layout/Header.jsx",
                                            lineNumber: 32,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Layout/Header.jsx",
                                        lineNumber: 31,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "p-1.5 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors duration-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Layout/Header.jsx",
                                            lineNumber: 44,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Layout/Header.jsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-semibold text-slate-900",
                                        children: "Drone Career Pro"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Layout/Header.jsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Layout/Header.jsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Layout/Header.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-8",
                            children: navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `text-sm font-medium transition-colors duration-200 relative ${isActive(item.href) ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`,
                                    children: [
                                        item.name,
                                        isActive(item.href) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Layout/Header.jsx",
                                            lineNumber: 66,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/components/Layout/Header.jsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/Layout/Header.jsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                href: "/quiz",
                                className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/components/Layout/Header.jsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Layout/Header.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                className: "p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200",
                                children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/Layout/Header.jsx",
                                    lineNumber: 83,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/Layout/Header.jsx",
                                    lineNumber: 83,
                                    columnNumber: 57
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Layout/Header.jsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Layout/Header.jsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Layout/Header.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["AnimatePresence"], {
                    children: isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            height: 0
                        },
                        animate: {
                            opacity: 1,
                            height: 'auto'
                        },
                        exit: {
                            opacity: 0,
                            height: 0
                        },
                        transition: {
                            duration: 0.3
                        },
                        className: "md:hidden overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "py-4 space-y-1 border-t border-slate-200",
                            children: [
                                navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: `block px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${isActive(item.href) ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`,
                                        children: item.name
                                    }, item.name, false, {
                                        fileName: "[project]/components/Layout/Header.jsx",
                                        lineNumber: 99,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "pt-3 border-t border-slate-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        href: "/quiz",
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: "w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium",
                                        children: "Get Started"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Layout/Header.jsx",
                                        lineNumber: 113,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Layout/Header.jsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Layout/Header.jsx",
                            lineNumber: 97,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Layout/Header.jsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Layout/Header.jsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Layout/Header.jsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Layout/Header.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Header;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/Layout/Footer.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        className: "bg-slate-900 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "col-span-1 md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "flex items-center space-x-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "relative w-10 h-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/dronelogo.png",
                                                    alt: "Drone Career Pro Logo",
                                                    fill: true,
                                                    className: "object-contain",
                                                    sizes: "40px",
                                                    priority: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Layout/Footer.jsx",
                                                    lineNumber: 15,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Layout/Footer.jsx",
                                                lineNumber: 14,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-bold",
                                                children: "Drone Career Pro"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Layout/Footer.jsx",
                                                lineNumber: 24,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Layout/Footer.jsx",
                                        lineNumber: 13,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300 mb-6 max-w-md",
                                        children: "Australia's premier drone training platform. Transform your career with professional drone certification and industry expertise."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Layout/Footer.jsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2 text-slate-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Layout/Footer.jsx",
                                                        lineNumber: 31,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        children: "cooper@dronecareerpro.au"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Layout/Footer.jsx",
                                                        lineNumber: 32,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Layout/Footer.jsx",
                                                lineNumber: 30,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2 text-slate-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Layout/Footer.jsx",
                                                    lineNumber: 35,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Layout/Footer.jsx",
                                                lineNumber: 34,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2 text-slate-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Layout/Footer.jsx",
                                                        lineNumber: 38,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        children: "Nationwide Training Network"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Layout/Footer.jsx",
                                                        lineNumber: 39,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Layout/Footer.jsx",
                                                lineNumber: 37,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Layout/Footer.jsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Layout/Footer.jsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-4",
                                        children: "Quick Links"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Layout/Footer.jsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/how-it-works",
                                                    className: "text-slate-300 hover:text-white transition-colors duration-200",
                                                    children: "How It Works"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Layout/Footer.jsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Layout/Footer.jsx",
                                                lineNumber: 47,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/industry-uses",
                                                    className: "text-slate-300 hover:text-white transition-colors duration-200",
                                                    children: "Industries"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Layout/Footer.jsx",
                                                    lineNumber: 53,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Layout/Footer.jsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/training",
                                                    className: "text-slate-300 hover:text-white transition-colors duration-200",
                                                    children: "Training"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Layout/Footer.jsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Layout/Footer.jsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/faq",
                                                    className: "text-slate-300 hover:text-white transition-colors duration-200",
                                                    children: "FAQ"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Layout/Footer.jsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Layout/Footer.jsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Layout/Footer.jsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Layout/Footer.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-4",
                                        children: "Training"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Layout/Footer.jsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/quiz",
                                                    className: "text-slate-300 hover:text-white transition-colors duration-200",
                                                    children: "Career Assessment"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Layout/Footer.jsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Layout/Footer.jsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300",
                                                    children: "RePL Certification"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Layout/Footer.jsx",
                                                    lineNumber: 79,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Layout/Footer.jsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300",
                                                    children: "ReOC Business"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Layout/Footer.jsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Layout/Footer.jsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300",
                                                    children: "Industry Specialization"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Layout/Footer.jsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Layout/Footer.jsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Layout/Footer.jsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Layout/Footer.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Layout/Footer.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "border-t border-slate-800 mt-8 pt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-slate-400 text-sm mb-4 md:mb-0",
                                    children: "© 2025 Drone Career Pro. All rights reserved."
                                }, void 0, false, {
                                    fileName: "[project]/components/Layout/Footer.jsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-6 text-sm text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white transition-colors duration-200",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Layout/Footer.jsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white transition-colors duration-200",
                                            children: "Terms of Service"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Layout/Footer.jsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white transition-colors duration-200",
                                            children: "CASA Compliance"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Layout/Footer.jsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Layout/Footer.jsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Layout/Footer.jsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Layout/Footer.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Layout/Footer.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500/90 to-purple-900/90 backdrop-blur-md border-t border-white/30 py-3 z-50 shadow-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "text-center md:text-left mb-2 md:mb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white",
                                        children: "Stop dreaming, start earning"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Layout/Footer.jsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-blue-100/95 text-sm",
                                        children: "While others wait, you fly. Get your licence now and lead in Australia's next wave of drone innovation"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Layout/Footer.jsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Layout/Footer.jsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                href: "/quiz",
                                className: "bg-white text-blue-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg",
                                children: "Start Your Journey →"
                            }, void 0, false, {
                                fileName: "[project]/components/Layout/Footer.jsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Layout/Footer.jsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Layout/Footer.jsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Layout/Footer.jsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Layout/Footer.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/Layout/Layout.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Header$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Layout/Header.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Layout/Footer.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Header$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Header$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const Layout = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "App min-h-screen bg-slate-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Header$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Layout/Layout.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/Layout/Layout.jsx",
                lineNumber: 9,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Layout/Layout.jsx",
                lineNumber: 12,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Layout/Layout.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Layout;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
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
"[project]/components/ui/progress.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"](({ className, value, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "h-full w-full flex-1 bg-primary transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/components/ui/progress.jsx",
            lineNumber: 15,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/progress.jsx",
        lineNumber: 7,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Progress.displayName = "Progress";
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
"[project]/hooks/use-toast.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
"use client";
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
;
 // import { useState, useEffect, useCallback } from 'react';
 // const TOAST_TIMEOUT = 5000;
 // export function useToast() {
 //   const [toasts, setToasts] = useState([]);
 //   const toast = useCallback(({ title, description, variant = 'default', duration = TOAST_TIMEOUT }) => {
 //     const id = Date.now().toString();
 //     const newToast = { id, title, description, variant };
 //     setToasts(current => [...current, newToast]);
 //     setTimeout(() => {
 //       setToasts(current => current.filter(t => t.id !== id));
 //     }, duration);
 //     return id;
 //   }, []);
 //   const dismiss = useCallback((id) => {
 //     setToasts(current => current.filter(t => t.id !== id));
 //   }, []);
 //   return {
 //     toast,
 //     dismiss,
 //     toasts
 //   };
 // }
}),
"[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@supabase/supabase-js", () => require("@supabase/supabase-js"));

module.exports = mod;
}),
"[project]/lib/supabase.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/supabase.js
__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, cjs)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://ymrtlcyafzuotngltgcb.supabase.co") || 'https://ymrtlcyafzuotngltgcb.supabase.co';
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltcnRsY3lhZnp1b3RuZ2x0Z2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMjU4MjAsImV4cCI6MjA3MjkwMTgyMH0.-BgOxU6DJe8wF0N_tbBeNpVmHtvfv0BG6YcuzPLK1Gc") || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltcnRsY3lhZnp1b3RuZ2x0Z2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMjU4MjAsImV4cCI6MjA3MjkwMTgyMH0.-BgOxU6DJe8wF0N_tbBeNpVmHtvfv0BG6YcuzPLK1Gc';
const supabase = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__cjs$29$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[externals]/axios [external] (axios, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("axios");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/services/api.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "apiService",
    ()=>apiService,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAllIndustries",
    ()=>getAllIndustries,
    "getIndustryData",
    ()=>getIndustryData,
    "industryRequirements",
    ()=>industryRequirements
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const SUPABASE_URL = ("TURBOPACK compile-time value", "https://ymrtlcyafzuotngltgcb.supabase.co") || 'https://ymrtlcyafzuotngltgcb.supabase.co';
const SUPABASE_ANON_KEY = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltcnRsY3lhZnp1b3RuZ2x0Z2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMjU4MjAsImV4cCI6MjA3MjkwMTgyMH0.-BgOxU6DJe8wF0N_tbBeNpVmHtvfv0BG6YcuzPLK1Gc") || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltcnRsY3lhZnp1b3RuZ2x0Z2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMjU4MjAsImV4cCI6MjA3MjkwMTgyMH0.-BgOxU6DJe8wF0N_tbBeNpVmHtvfv0BG6YcuzPLK1Gc';
const api = __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].create({
    baseURL: `${SUPABASE_URL}/functions/v1`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
    }
});
const industryRequirements = {
    "Construction": {
        title: "Construction & Infrastructure Drone Services",
        earningPotential: "$160-$250/hour",
        marketSize: "$1.8 billion by 2025",
        description: "High-demand opportunities for site surveying, progress monitoring, and safety inspections in the construction industry.",
        licenses: [
            "CAA A2 CofC (Certificate of Competency) - Essential for commercial operations",
            "GVC (General VLOS Certificate) for beyond visual line of sight operations",
            "Construction Industry Scheme (CIS) registration may be required",
            "Public Liability Insurance minimum £2 million coverage",
            "Professional Indemnity Insurance recommended"
        ],
        training: [
            "CAA A2 CofC Ground School (In-class preferred) - 5 days intensive",
            "Practical Flight Training (In-class only) - 3 days hands-on",
            "Construction Site Safety Course (In-class/Online) - 2 days",
            "Surveying & Mapping Fundamentals (In-class preferred) - 3 days",
            "Health & Safety in Construction (Online available) - 1 day",
            "Thermal Imaging Certification (In-class preferred) - 2 days"
        ],
        services: [
            {
                name: "Site Surveying & Mapping",
                rate: "$200-$300/hour",
                description: "Topographical surveys and volumetric calculations"
            },
            {
                name: "Progress Monitoring",
                rate: "$150-$250/hour",
                description: "Regular aerial documentation of construction progress"
            },
            {
                name: "Safety Inspections",
                rate: "$180-$280/hour",
                description: "High-altitude inspections of cranes and scaffolding"
            },
            {
                name: "Thermal Building Inspections",
                rate: "$200-$350/hour",
                description: "Energy efficiency and building defect identification"
            }
        ],
        compliance: [
            "CAA regulations for commercial drone operations",
            "Construction Design and Management (CDM) regulations 2015",
            "Health and Safety at Work Act 1974 compliance",
            "Data protection regulations for site imagery"
        ],
        marketInsights: [
            "£150 billion annual construction market in UK",
            "Growing adoption of digital construction technologies",
            "Government infrastructure investment programs",
            "Increasing focus on safety and efficiency"
        ]
    },
    "Asset Inspection": {
        title: "Infrastructure & Asset Inspection Services",
        earningPotential: "$200-$400/hour",
        marketSize: "$2.3 billion by 2025",
        description: "High-value inspections of critical infrastructure including bridges, power lines, wind turbines, and industrial facilities.",
        licenses: [
            "CAA A2 CofC with additional endorsements for specific operations",
            "Restricted airspace permissions for infrastructure sites",
            "Industry-specific certifications (e.g., wind turbine inspection)",
            "Professional Indemnity Insurance minimum £5 million"
        ],
        training: [
            "Advanced CAA Certification (In-class preferred) - 7 days",
            "Thermal Imaging Specialist Course (In-class only) - 4 days",
            "Infrastructure Inspection Techniques (In-class preferred) - 5 days",
            "Structural Engineering Basics (In-class/Online) - 3 days",
            "Risk Assessment & Safety Management (Online available) - 2 days",
            "Power Line Safety Training (In-class only) - 2 days"
        ],
        services: [
            {
                name: "Bridge & Structure Inspection",
                rate: "$300-$450/hour",
                description: "Detailed structural assessments and defect identification"
            },
            {
                name: "Power Line & Utility Inspection",
                rate: "$250-$400/hour",
                description: "Electrical infrastructure monitoring and maintenance"
            },
            {
                name: "Wind Turbine Inspection",
                rate: "$350-$500/hour",
                description: "Blade damage assessment and maintenance scheduling"
            },
            {
                name: "Industrial Facility Inspection",
                rate: "$280-$420/hour",
                description: "Storage tanks, pipelines, and processing equipment"
            }
        ],
        compliance: [
            "CAA commercial operations regulations",
            "Industry-specific safety standards",
            "Environmental protection requirements",
            "Utility company access and safety protocols"
        ],
        marketInsights: [
            "£50 billion annual infrastructure maintenance market",
            "Aging infrastructure requiring increased monitoring",
            "Predictive maintenance adoption growing rapidly",
            "Safety regulations driving demand for remote inspections"
        ]
    },
    "Agriculture": {
        title: "Precision Agriculture & Crop Management",
        earningPotential: "$120-$200/hour",
        marketSize: "$8.4 billion by 2025",
        description: "Agricultural drone services supporting modern farming with crop monitoring, precision spraying, and yield optimization.",
        licenses: [
            "CAA A2 CofC for agricultural operations",
            "Pesticide Application License (if offering spraying services)",
            "BASIS qualification for crop advisory services",
            "Rural land access permissions and agreements"
        ],
        training: [
            "Agricultural Drone Operations (In-class preferred) - 4 days",
            "Crop Science & Agronomy (In-class/Online) - 5 days",
            "Precision Agriculture Technology (In-class preferred) - 3 days",
            "Pesticide Application Training (In-class only) - 3 days",
            "Soil Science Fundamentals (Online available) - 2 days",
            "Farm Business Management (In-class/Online) - 2 days"
        ],
        services: [
            {
                name: "Crop Health Monitoring",
                rate: "$8-$15/acre",
                description: "NDVI analysis, disease detection, and growth assessment"
            },
            {
                name: "Precision Spraying Services",
                rate: "$15-$25/acre",
                description: "Targeted application of pesticides and nutrients"
            },
            {
                name: "Yield Estimation & Mapping",
                rate: "$120-$200/hour",
                description: "Pre-harvest yield predictions and planning"
            },
            {
                name: "Livestock Monitoring",
                rate: "$150-$250/hour",
                description: "Pasture management and animal welfare"
            }
        ],
        compliance: [
            "CAA regulations for agricultural drone operations",
            "Pesticide application regulations and record-keeping",
            "Environmental protection requirements",
            "Data privacy for farm operations"
        ],
        marketInsights: [
            "£25 billion annual UK agriculture market",
            "Growing demand for sustainable farming practices",
            "Labor shortage driving automation adoption",
            "Government subsidies for precision agriculture"
        ]
    },
    "Environmental Mapping": {
        title: "Environmental Monitoring & Conservation",
        earningPotential: "$150-$250/hour",
        marketSize: "$1.2 billion by 2025",
        description: "Environmental drone services supporting conservation, research, and regulatory compliance across diverse ecosystems.",
        licenses: [
            "CAA A2 CofC with environmental operation endorsements",
            "Research permits for protected areas",
            "Environmental consultant certification (desirable)",
            "Scientific research collaboration agreements"
        ],
        training: [
            "Environmental Science & Ecology (In-class preferred) - 6 days",
            "GIS & Remote Sensing (In-class/Online) - 5 days",
            "Wildlife Survey Techniques (In-class only) - 4 days",
            "Environmental Law & Regulations (Online available) - 2 days",
            "Conservation Biology (In-class/Online) - 3 days",
            "Scientific Data Analysis (In-class preferred) - 3 days"
        ],
        services: [
            {
                name: "Wildlife Population Surveys",
                rate: "$180-$280/hour",
                description: "Species counting, migration tracking, habitat assessment"
            },
            {
                name: "Habitat Mapping & Analysis",
                rate: "$150-$230/hour",
                description: "Ecosystem health evaluation and conservation planning"
            },
            {
                name: "Environmental Impact Assessment",
                rate: "$200-$300/hour",
                description: "Development impact studies and mitigation planning"
            },
            {
                name: "Water Quality Monitoring",
                rate: "$160-$250/hour",
                description: "Aquatic ecosystem health and pollution detection"
            }
        ],
        compliance: [
            "CAA environmental operation regulations",
            "Wildlife protection laws and permits",
            "Research ethics and data sharing protocols",
            "Environmental impact assessment requirements"
        ],
        marketInsights: [
            "Growing environmental compliance requirements",
            "Increased funding for conservation projects",
            "Climate change research driving demand",
            "Corporate sustainability initiatives expanding"
        ]
    },
    "Mining and Quarry": {
        title: "Mining & Quarry Operations Support",
        earningPotential: "$180-$300/hour",
        marketSize: "$900 million by 2025",
        description: "Specialized drone services for mining operations including surveying, safety monitoring, and resource management.",
        licenses: [
            "CAA A2 CofC with mining operation endorsements",
            "Mining site access certifications and safety training",
            "Explosives area operation permissions",
            "Specialized insurance for hazardous environments"
        ],
        training: [
            "Mining Operations & Safety (In-class only) - 6 days",
            "Industrial Surveying Techniques (In-class preferred) - 4 days",
            "Hazardous Environment Operations (In-class only) - 3 days",
            "Geology & Resource Assessment (In-class/Online) - 4 days",
            "Occupational Health & Safety (Online available) - 2 days",
            "Heavy Industry Regulations (In-class/Online) - 2 days"
        ],
        services: [
            {
                name: "Stockpile Volume Measurement",
                rate: "$200-$350/hour",
                description: "Accurate inventory management and resource tracking"
            },
            {
                name: "Mine Site Surveying",
                rate: "$250-$400/hour",
                description: "Topographical mapping and progress monitoring"
            },
            {
                name: "Equipment & Safety Inspection",
                rate: "$180-$280/hour",
                description: "Machinery monitoring and hazard identification"
            },
            {
                name: "Environmental Compliance Monitoring",
                rate: "$220-$320/hour",
                description: "Dust, water quality, and restoration monitoring"
            }
        ],
        compliance: [
            "CAA mining operation regulations",
            "Mining safety regulations and protocols",
            "Environmental monitoring requirements",
            "Explosives area operation restrictions"
        ],
        marketInsights: [
            "£3 billion annual UK mining and quarrying market",
            "Increasing automation and digitization",
            "Strict safety regulations driving remote monitoring",
            "Environmental restoration requirements growing"
        ]
    },
    "Film and TV": {
        title: "Aerial Cinematography & Media Production",
        earningPotential: "$100-$300/hour",
        marketSize: "$2.8 billion by 2025",
        description: "Creative drone services for film, television, advertising, and media production with emphasis on artistic and technical excellence.",
        licenses: [
            "CAA A2 CofC with specific permissions for populated areas",
            "Permission for Commercial Operation (PfCO) for complex shoots",
            "Film location permits and insurance requirements",
            "Equipment operator certifications for advanced systems"
        ],
        training: [
            "Cinematography & Visual Storytelling (In-class preferred) - 5 days",
            "Camera Operation & Settings (In-class only) - 3 days",
            "Film Production Workflows (In-class/Online) - 4 days",
            "Post-Production & Editing (In-class preferred) - 4 days",
            "Creative Direction & Composition (In-class only) - 3 days",
            "Client Relations & Project Management (Online available) - 2 days"
        ],
        services: [
            {
                name: "Commercial & Advertising Shoots",
                rate: "$150-$400/hour",
                description: "High-end commercial productions and marketing content"
            },
            {
                name: "Film & Television Production",
                rate: "$200-$500/day",
                description: "Narrative film support and documentary production"
            },
            {
                name: "Event & Wedding Coverage",
                rate: "$100-$250/hour",
                description: "Special event aerial cinematography and photography"
            },
            {
                name: "Real Estate & Property Marketing",
                rate: "$80-$180/hour",
                description: "Property showcase and marketing material production"
            }
        ],
        compliance: [
            "CAA regulations for urban and populated area operations",
            "Film location permits and local authority approvals",
            "Privacy and data protection requirements",
            "Insurance requirements for high-value productions"
        ],
        marketInsights: [
            "£7.9 billion annual UK film and TV production market",
            "Streaming platforms driving content demand",
            "Growing corporate video production market",
            "Virtual events creating new opportunities"
        ]
    }
};
const apiService = {
    createStatusCheck: (clientName)=>api.post('/status', {
            client_name: clientName
        }),
    getStatusChecks: ()=>api.get('/status'),
    downloadPDF: (data)=>api.post('/download-pdf', {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            planTitle: data.planTitle || 'Drone Career Plan',
            quizData: data.quizData || {},
            planData: data.planData || {}
        }),
    downloadCasaPDF: (data)=>api.post('/casa-pdf', {
            name: data.name,
            email: data.email
        }),
    downloadIndustryPDF: (data)=>api.post('/download-pdf', {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            planTitle: `${data.industry} Industry Career Guide`,
            industry: data.industry,
            experience: data.experience,
            interests: data.interests,
            background: data.background,
            preferredTraining: data.preferredTraining,
            businessGoals: data.businessGoals,
            timeline: data.timeline,
            industryData: data.industryData,
            planData: {
                title: `${data.industry} Drone Career Pathway`,
                description: data.industryData?.description || `Comprehensive guide for starting your drone career in ${data.industry.toLowerCase()}.`,
                marketOpportunities: data.industryData?.marketInsights || [
                    `${data.industryData?.earningPotential || 'High'} earning potential`,
                    `${data.industryData?.marketSize || 'Growing'} market size`,
                    "Multiple service opportunities available"
                ],
                whyNow: [
                    "Industry is in rapid growth phase with increasing opportunities",
                    "Early movers gain competitive advantage in the market",
                    "Government regulations are stabilizing, creating clearer pathways"
                ],
                licenses: data.industryData?.licenses || [],
                training: data.industryData?.training || [],
                services: data.industryData?.services || [],
                compliance: data.industryData?.compliance || []
            },
            quizData: {}
        })
};
const getIndustryData = (industryName)=>{
    return industryRequirements[industryName] || null;
};
const getAllIndustries = ()=>{
    return Object.keys(industryRequirements);
};
const __TURBOPACK__default__export__ = api;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
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
"[project]/components/pages/Quiz.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/pages/Quiz.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/progress.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$uuid__$5b$external$5d$__$28$uuid$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/uuid [external] (uuid, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/api.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/mock.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$uuid__$5b$external$5d$__$28$uuid$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$uuid__$5b$external$5d$__$28$uuid$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
const Quiz = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [showCongratulationsPopup, setShowCongratulationsPopup] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        name: '',
        email: '',
        phone: ''
    });
    const [agreeToShare, setAgreeToShare] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const saved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getQuizProgress"])();
        if (Object.keys(saved).length > 0) {
            setAnswers(saved);
        }
    }, []);
    const progress = (currentQuestion + 1) / __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockQuizQuestions"].length * 100;
    const isLastQuestion = currentQuestion === __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockQuizQuestions"].length - 1;
    const handleAnswerSelect = (optionValue)=>{
        setSelectedOption(optionValue);
    };
    const handleNext = ()=>{
        if (!selectedOption) return;
        const newAnswers = {
            ...answers,
            [__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockQuizQuestions"][currentQuestion].id]: selectedOption
        };
        setAnswers(newAnswers);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["saveQuizProgress"])(newAnswers);
        if (isLastQuestion) {
            setShowCongratulationsPopup(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption('');
        }
    };
    const handlePrevious = ()=>{
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedOption(answers[__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockQuizQuestions"][currentQuestion - 1].id] || '');
        }
    };
    const handleStartOver = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["clearQuizProgress"])();
        setAnswers({});
        setCurrentQuestion(0);
        setSelectedOption('');
        setShowCongratulationsPopup(false);
        setFormData({
            name: '',
            email: '',
            phone: ''
        });
        setAgreeToShare(true);
    };
    const handleFormChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const validateEmail = (email)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone)=>{
        const cleanPhone = phone.replace(/\D/g, '');
        if (/^04\d{8}$/.test(cleanPhone)) return true;
        if (/^0[2378]\d{8}$/.test(cleanPhone)) return true;
        if (phone.startsWith('+61')) {
            const intlPhone = cleanPhone.substring(2);
            if (/^4\d{8}$/.test(intlPhone)) return true;
            if (/^[2378]\d{8}$/.test(intlPhone)) return true;
        }
        return false;
    };
    const handleDownloadPDF = async ()=>{
        if (!formData.name || !formData.email || !formData.phone) {
            toast({
                title: "Please fill all fields",
                description: "All fields are required to download your plan.",
                variant: "destructive"
            });
            return;
        }
        if (!validateEmail(formData.email)) {
            toast({
                title: "Invalid email",
                description: "Please enter a valid email address.",
                variant: "destructive"
            });
            return;
        }
        if (!validatePhone(formData.phone)) {
            toast({
                title: "Invalid Phone Number",
                description: "Please enter a valid Australian phone number.",
                variant: "destructive"
            });
            return;
        }
        if (!agreeToShare) {
            toast({
                title: "Agreement Required",
                description: "Please agree to share your contact information to proceed.",
                variant: "destructive"
            });
            return;
        }
        setIsDownloading(true);
        try {
            const uniqueId = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$uuid__$5b$external$5d$__$28$uuid$2c$__esm_import$29$__["v4"])();
            const generatedPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["generatePersonalizedPlan"])(answers);
            const recommendedCourseDetails = generatedPlan.recommendedCourses.map((key)=>__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["droneCourseCatalog"][key]);
            const selectedTexts = Object.entries(answers).reduce((acc, [questionId, answerValue])=>{
                const question = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockQuizQuestions"].find((q)=>q.id === Number(questionId));
                if (!question) return acc;
                const option = question.options.find((opt)=>opt.value === answerValue);
                if (option) {
                    acc[questionId] = option.text;
                }
                return acc;
            }, {});
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('status_checks').insert([
                {
                    id: uniqueId,
                    client_name: formData.name,
                    timestamp: new Date().toISOString()
                }
            ]);
            if (error) throw error;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["apiService"].downloadPDF({
                fullName: formData.name,
                email: formData.email,
                phone: formData.phone,
                planTitle: generatedPlan.title,
                quizData: selectedTexts,
                planData: {
                    title: generatedPlan.title,
                    industry: generatedPlan.industry,
                    description: generatedPlan.description,
                    recommendedCourses: recommendedCourseDetails,
                    marketOpportunities: generatedPlan.marketOpportunities,
                    whyNow: generatedPlan.whyNow
                }
            });
            toast({
                title: "Success!",
                description: "Redirecting to your personalized plan..."
            });
            localStorage.setItem('quizId', uniqueId);
            setShowCongratulationsPopup(false);
            setTimeout(()=>{
                router.push(`/plan?quizId=${uniqueId}`);
            }, 1000);
        } catch (error) {
            console.error('Download error:', error);
            toast({
                title: "Download Failed",
                description: error.response?.data?.detail || "Unable to process your request. Please try again.",
                variant: "destructive"
            });
        } finally{
            setIsDownloading(false);
        }
    };
    const handleClosePopup = ()=>{
        setShowCongratulationsPopup(false);
        handleStartOver();
    };
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockQuizQuestions"] || __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockQuizQuestions"].length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-full max-w-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-8 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-slate-600",
                        children: "Loading quiz questions..."
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Quiz.jsx",
                        lineNumber: 228,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/pages/Quiz.jsx",
                    lineNumber: 227,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/pages/Quiz.jsx",
                lineNumber: 226,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/pages/Quiz.jsx",
            lineNumber: 225,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const question = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockQuizQuestions"][currentQuestion];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "jsx-67d15b4016373a2c" + " " + "min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "67d15b4016373a2c",
                children: ".custom-button.jsx-67d15b4016373a2c{white-space:nowrap;cursor:pointer;border:none;outline:none;justify-content:center;align-items:center;font-weight:700;transition:all .3s;display:inline-flex}.custom-button.jsx-67d15b4016373a2c:focus{outline-offset:2px;outline:2px solid #3b82f6}.custom-button.jsx-67d15b4016373a2c:disabled{pointer-events:none;opacity:.5}.btn-outline.jsx-67d15b4016373a2c{color:#475569;background-color:#fff;border:2px solid #e2e8f0}.btn-outline.jsx-67d15b4016373a2c:hover:not(:disabled){background-color:#f8fafc;border-color:#94a3b8}.btn-primary.jsx-67d15b4016373a2c{color:#fff;background:linear-gradient(90deg,#2563eb,#1d4ed8,#1e40af);border:none}.btn-primary.jsx-67d15b4016373a2c:hover:not(:disabled){background:linear-gradient(90deg,#1d4ed8,#1e40af,#1e3a8a);box-shadow:0 25px 50px -12px #00000040}.btn-primary.jsx-67d15b4016373a2c:disabled{background:linear-gradient(90deg,#94a3b8,#64748b)}.btn-ghost.jsx-67d15b4016373a2c{color:#b45309;background:linear-gradient(90deg,#fffbeb,#ffedd5);border:2px solid #fcd34d}.btn-ghost.jsx-67d15b4016373a2c:hover:not(:disabled){color:#92400e;background:linear-gradient(90deg,#fef3c7,#fed7aa);border-color:#f59e0b}.btn-success.jsx-67d15b4016373a2c{color:#fff;background:linear-gradient(90deg,#059669,#047857);border:none}.btn-success.jsx-67d15b4016373a2c:hover:not(:disabled){background:linear-gradient(90deg,#047857,#065f46);box-shadow:0 20px 25px -5px #0000001a}.btn-success.jsx-67d15b4016373a2c:disabled{background:linear-gradient(90deg,#94a3b8,#64748b)}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-67d15b4016373a2c" + " " + "w-full max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "mb-8 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-67d15b4016373a2c" + " " + "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        className: "jsx-67d15b4016373a2c" + " " + "text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent",
                                        children: "Career Assessment Quiz"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Quiz.jsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-67d15b4016373a2c" + " " + "flex items-center gap-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "jsx-67d15b4016373a2c" + " " + "text-sm font-semibold text-slate-600 bg-white px-5 py-2.5 rounded-full shadow-md border border-slate-200",
                                            children: [
                                                "Question ",
                                                currentQuestion + 1,
                                                " of ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockQuizQuestions"].length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/Quiz.jsx",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Quiz.jsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/Quiz.jsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-67d15b4016373a2c" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-67d15b4016373a2c" + " " + "h-4 bg-slate-200 rounded-full overflow-hidden shadow-inner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                                            className: "h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full relative",
                                            initial: {
                                                width: 0
                                            },
                                            animate: {
                                                width: `${progress}%`
                                            },
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeOut"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-67d15b4016373a2c" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Quiz.jsx",
                                                lineNumber: 342,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Quiz.jsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Quiz.jsx",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                                        className: "absolute -top-1 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border-2 border-blue-200",
                                        style: {
                                            left: `calc(${progress}% - 30px)`
                                        },
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: 0.3
                                        },
                                        children: [
                                            Math.round(progress),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pages/Quiz.jsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/Quiz.jsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/Quiz.jsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.3
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-white shadow-2xl rounded-3xl border border-slate-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-67d15b4016373a2c" + " " + "inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Quiz.jsx",
                                                lineNumber: 366,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Question ",
                                            currentQuestion + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pages/Quiz.jsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        className: "jsx-67d15b4016373a2c" + " " + "text-3xl font-bold text-slate-900 mb-4 leading-tight",
                                        children: question.question
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Quiz.jsx",
                                        lineNumber: 370,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    question.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "jsx-67d15b4016373a2c" + " " + "text-slate-600 mb-8 text-lg",
                                        children: question.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Quiz.jsx",
                                        lineNumber: 375,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-67d15b4016373a2c" + " " + "space-y-4",
                                        children: question.options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                onClick: ()=>handleAnswerSelect(option.value),
                                                style: {
                                                    backgroundColor: selectedOption === option.value ? '#eff6ff' : '#ffffff',
                                                    border: selectedOption === option.value ? '2px solid #3b82f6' : '2px solid #e2e8f0',
                                                    borderRadius: '16px',
                                                    padding: '24px',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s',
                                                    boxShadow: selectedOption === option.value ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : 'none'
                                                },
                                                onMouseEnter: (e)=>{
                                                    if (selectedOption !== option.value) {
                                                        e.currentTarget.style.borderColor = '#93c5fd';
                                                        e.currentTarget.style.backgroundColor = '#f8fafc';
                                                    }
                                                },
                                                onMouseLeave: (e)=>{
                                                    if (selectedOption !== option.value) {
                                                        e.currentTarget.style.borderColor = '#e2e8f0';
                                                        e.currentTarget.style.backgroundColor = '#ffffff';
                                                    }
                                                },
                                                className: "jsx-67d15b4016373a2c" + " " + "quiz-option",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: '16px'
                                                    },
                                                    className: "jsx-67d15b4016373a2c",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: '28px',
                                                                height: '28px',
                                                                borderRadius: '50%',
                                                                border: selectedOption === option.value ? '2px solid #3b82f6' : '2px solid #cbd5e1',
                                                                backgroundColor: selectedOption === option.value ? '#3b82f6' : 'transparent',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                flexShrink: 0
                                                            },
                                                            className: "jsx-67d15b4016373a2c",
                                                            children: selectedOption === option.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: '12px',
                                                                    height: '12px',
                                                                    borderRadius: '50%',
                                                                    backgroundColor: '#ffffff'
                                                                },
                                                                className: "jsx-67d15b4016373a2c"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/pages/Quiz.jsx",
                                                                lineNumber: 419,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Quiz.jsx",
                                                            lineNumber: 407,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            className: "jsx-67d15b4016373a2c",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontWeight: 'bold',
                                                                        fontSize: '20px',
                                                                        marginBottom: '4px',
                                                                        color: '#0f172a',
                                                                        lineHeight: '1.4'
                                                                    },
                                                                    className: "jsx-67d15b4016373a2c",
                                                                    children: option.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/pages/Quiz.jsx",
                                                                    lineNumber: 424,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                option.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontSize: '14px',
                                                                        marginTop: '8px',
                                                                        color: '#64748b',
                                                                        lineHeight: '1.5'
                                                                    },
                                                                    className: "jsx-67d15b4016373a2c",
                                                                    children: option.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/pages/Quiz.jsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/pages/Quiz.jsx",
                                                            lineNumber: 423,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        selectedOption === option.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            style: {
                                                                width: '24px',
                                                                height: '24px',
                                                                color: '#3b82f6',
                                                                flexShrink: 0
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Quiz.jsx",
                                                            lineNumber: 446,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/pages/Quiz.jsx",
                                                    lineNumber: 406,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, option.value, false, {
                                                fileName: "[project]/components/pages/Quiz.jsx",
                                                lineNumber: 380,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Quiz.jsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/Quiz.jsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Quiz.jsx",
                            lineNumber: 363,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, currentQuestion, false, {
                        fileName: "[project]/components/pages/Quiz.jsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.3
                        },
                        className: "flex items-center justify-between gap-4 mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: handlePrevious,
                                disabled: currentQuestion === 0,
                                className: "jsx-67d15b4016373a2c" + " " + "custom-button btn-outline px-8 py-4 rounded-2xl text-base shadow-md hover:shadow-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "mr-2 w-5 h-5",
                                        style: {
                                            transition: 'transform 0.3s'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Quiz.jsx",
                                        lineNumber: 467,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Previous"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/Quiz.jsx",
                                lineNumber: 462,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-67d15b4016373a2c" + " " + "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-67d15b4016373a2c" + " " + "flex items-center gap-2 bg-white px-6 py-4 rounded-2xl shadow-md border border-slate-200",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockQuizQuestions"].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "jsx-67d15b4016373a2c" + " " + `transition-all duration-500 rounded-full ${index < currentQuestion ? 'w-3 h-3 bg-green-500 shadow-md' : index === currentQuestion ? 'w-4 h-4 bg-blue-600 shadow-lg ring-2 ring-blue-200' : 'w-2 h-2 bg-slate-300'}`
                                            }, index, false, {
                                                fileName: "[project]/components/pages/Quiz.jsx",
                                                lineNumber: 474,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Quiz.jsx",
                                        lineNumber: 472,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    currentQuestion > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: handleStartOver,
                                        className: "jsx-67d15b4016373a2c" + " " + "custom-button btn-ghost px-6 py-4 rounded-2xl text-base shadow-md hover:shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                className: "mr-2 w-5 h-5",
                                                style: {
                                                    transition: 'transform 0.5s'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Quiz.jsx",
                                                lineNumber: 492,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Restart"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pages/Quiz.jsx",
                                        lineNumber: 488,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/Quiz.jsx",
                                lineNumber: 471,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: handleNext,
                                disabled: !selectedOption,
                                className: "jsx-67d15b4016373a2c" + " " + "custom-button btn-primary px-8 py-4 rounded-2xl text-base shadow-xl hover:shadow-2xl relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            pointerEvents: 'none'
                                        },
                                        className: "jsx-67d15b4016373a2c" + " " + "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Quiz.jsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isLastQuestion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "mr-2 w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Quiz.jsx",
                                                lineNumber: 506,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "View My Plan"
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                        children: [
                                            "Continue",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "ml-2 w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Quiz.jsx",
                                                lineNumber: 512,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/Quiz.jsx",
                                lineNumber: 498,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/Quiz.jsx",
                        lineNumber: 456,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.5
                        },
                        className: "mt-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "jsx-67d15b4016373a2c" + " " + "text-sm text-slate-500",
                            children: "Your progress is automatically saved • Takes approximately 2-3 minutes"
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Quiz.jsx",
                            lineNumber: 524,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Quiz.jsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/Quiz.jsx",
                lineNumber: 316,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["AnimatePresence"], {
                children: showCongratulationsPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50",
                            onClick: ()=>setShowCongratulationsPopup(false)
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Quiz.jsx",
                            lineNumber: 533,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.9,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.9,
                                y: 20
                            },
                            transition: {
                                duration: 0.3,
                                type: "spring"
                            },
                            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "w-full max-w-lg bg-white rounded-3xl shadow-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-10 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: handleClosePopup,
                                            className: "jsx-67d15b4016373a2c" + " " + "absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-6 h-6 text-slate-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Quiz.jsx",
                                                lineNumber: 554,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Quiz.jsx",
                                            lineNumber: 550,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-67d15b4016373a2c" + " " + "text-center mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                                                    initial: {
                                                        scale: 0
                                                    },
                                                    animate: {
                                                        scale: 1
                                                    },
                                                    transition: {
                                                        delay: 0.2,
                                                        type: "spring",
                                                        stiffness: 200
                                                    },
                                                    className: "inline-flex p-5 rounded-full bg-gradient-to-br from-green-50 to-green-100 mb-6 border-2 border-green-200",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-12 h-12 text-green-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/pages/Quiz.jsx",
                                                        lineNumber: 564,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/Quiz.jsx",
                                                    lineNumber: 558,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                    className: "jsx-67d15b4016373a2c" + " " + "text-3xl font-bold text-slate-900 mb-3",
                                                    children: "Congratulations!"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/Quiz.jsx",
                                                    lineNumber: 566,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "jsx-67d15b4016373a2c" + " " + "text-slate-600 text-lg",
                                                    children: "You've completed the career assessment. Get your personalized drone career plan now!"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/pages/Quiz.jsx",
                                                    lineNumber: 569,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/Quiz.jsx",
                                            lineNumber: 557,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "jsx-67d15b4016373a2c" + " " + "space-y-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-67d15b4016373a2c",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "jsx-67d15b4016373a2c" + " " + "block text-sm font-semibold text-slate-700 mb-2",
                                                            children: "Full Name *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Quiz.jsx",
                                                            lineNumber: 576,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: "text",
                                                            value: formData.name,
                                                            onChange: (e)=>handleFormChange('name', e.target.value),
                                                            placeholder: "John Smith",
                                                            className: "w-full h-12 text-base rounded-xl border-2 focus:border-blue-500 transition-colors",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Quiz.jsx",
                                                            lineNumber: 579,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/pages/Quiz.jsx",
                                                    lineNumber: 575,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-67d15b4016373a2c",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "jsx-67d15b4016373a2c" + " " + "block text-sm font-semibold text-slate-700 mb-2",
                                                            children: "Email Address *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Quiz.jsx",
                                                            lineNumber: 590,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: "email",
                                                            value: formData.email,
                                                            onChange: (e)=>handleFormChange('email', e.target.value),
                                                            placeholder: "john@example.com",
                                                            className: "w-full h-12 text-base rounded-xl border-2 focus:border-blue-500 transition-colors",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Quiz.jsx",
                                                            lineNumber: 593,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/pages/Quiz.jsx",
                                                    lineNumber: 589,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-67d15b4016373a2c",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            className: "jsx-67d15b4016373a2c" + " " + "block text-sm font-semibold text-slate-700 mb-2",
                                                            children: "Phone Number *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Quiz.jsx",
                                                            lineNumber: 604,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: "tel",
                                                            value: formData.phone,
                                                            onChange: (e)=>handleFormChange('phone', e.target.value),
                                                            placeholder: "0400 000 000",
                                                            className: "w-full h-12 text-base rounded-xl border-2 focus:border-blue-500 transition-colors",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Quiz.jsx",
                                                            lineNumber: 607,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/pages/Quiz.jsx",
                                                    lineNumber: 603,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-67d15b4016373a2c" + " " + "flex items-start pt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            id: "agreeToShare",
                                                            checked: agreeToShare,
                                                            onChange: (e)=>setAgreeToShare(e.target.checked),
                                                            className: "jsx-67d15b4016373a2c" + " " + "h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-0.5 cursor-pointer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Quiz.jsx",
                                                            lineNumber: 618,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                            htmlFor: "agreeToShare",
                                                            className: "jsx-67d15b4016373a2c" + " " + "ml-3 block text-sm text-slate-700 leading-relaxed cursor-pointer",
                                                            children: "I agree to receive my personalized career plan and training information"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Quiz.jsx",
                                                            lineNumber: 625,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/pages/Quiz.jsx",
                                                    lineNumber: 617,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "jsx-67d15b4016373a2c" + " " + "flex gap-4 mt-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                            onClick: handleClosePopup,
                                                            className: "jsx-67d15b4016373a2c" + " " + "custom-button btn-outline flex-1 h-14 text-base rounded-xl shadow-md hover:shadow-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "mr-2 w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/pages/Quiz.jsx",
                                                                    lineNumber: 635,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Go Back"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/pages/Quiz.jsx",
                                                            lineNumber: 631,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                            onClick: handleDownloadPDF,
                                                            disabled: isDownloading,
                                                            className: "jsx-67d15b4016373a2c" + " " + "custom-button btn-success flex-1 h-14 text-base rounded-xl shadow-lg hover:shadow-xl",
                                                            children: isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-67d15b4016373a2c" + " " + "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        className: "jsx-67d15b4016373a2c" + " " + "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                                                                                cx: "12",
                                                                                cy: "12",
                                                                                r: "10",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "4",
                                                                                className: "jsx-67d15b4016373a2c" + " " + "opacity-25"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/pages/Quiz.jsx",
                                                                                lineNumber: 646,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                                fill: "currentColor",
                                                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                                                className: "jsx-67d15b4016373a2c" + " " + "opacity-75"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/pages/Quiz.jsx",
                                                                                lineNumber: 647,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/pages/Quiz.jsx",
                                                                        lineNumber: 645,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Generating..."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/pages/Quiz.jsx",
                                                                lineNumber: 644,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                        className: "mr-2 w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/pages/Quiz.jsx",
                                                                        lineNumber: 653,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Get My Plan",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                        className: "ml-2 w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/pages/Quiz.jsx",
                                                                        lineNumber: 655,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Quiz.jsx",
                                                            lineNumber: 638,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/pages/Quiz.jsx",
                                                    lineNumber: 630,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/Quiz.jsx",
                                            lineNumber: 574,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/Quiz.jsx",
                                    lineNumber: 549,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/pages/Quiz.jsx",
                                lineNumber: 548,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Quiz.jsx",
                            lineNumber: 541,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/pages/Quiz.jsx",
                lineNumber: 530,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/pages/Quiz.jsx",
        lineNumber: 238,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Quiz;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/quiz.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// pages/quiz.js
__turbopack_context__.s([
    "default",
    ()=>QuizPage,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$seo__$5b$external$5d$__$28$next$2d$seo$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next-seo [external] (next-seo, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Layout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Layout/Layout.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$Quiz$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/pages/Quiz.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Layout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$Quiz$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Layout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$Quiz$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
function QuizPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$seo__$5b$external$5d$__$28$next$2d$seo$2c$__cjs$29$__["NextSeo"], {
                title: "Career Assessment Quiz | Drone Career Pro",
                description: "Take our free career assessment quiz to discover your ideal drone career path and get a personalized training plan.",
                canonical: "https://dronecareerpro.au/quiz",
                noindex: true,
                openGraph: {
                    url: 'https://dronecareerpro.au/quiz',
                    title: 'Drone Career Assessment Quiz',
                    description: 'Discover your ideal drone career path with our free assessment quiz.',
                    site_name: 'Drone Career Pro',
                    locale: 'en_AU',
                    type: 'website'
                }
            }, void 0, false, {
                fileName: "[project]/pages/quiz.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$pages$2f$Quiz$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/quiz.js",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
// Apply layout to this page
QuizPage.getLayout = function getLayout(page) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Layout$2f$Layout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: page
    }, void 0, false, {
        fileName: "[project]/pages/quiz.js",
        lineNumber: 30,
        columnNumber: 10
    }, this);
};
async function getStaticProps() {
    return {
        props: {}
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5149c72c._.js.map