module.exports = [
"[externals]/next-seo [external] (next-seo, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next-seo", () => require("next-seo"));

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

// pages/plan.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor.js [ssr] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mountain.js [ssr] (ecmascript) <export default as Mountain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [ssr] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sprout.js [ssr] (ecmascript) <export default as Sprout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [ssr] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/mock.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
'use client';
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
const getCourseImage = (courseName, category)=>{
    const courseKey = courseName?.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '').replace(/,/g, '');
    return COURSE_IMAGES[courseKey] || COURSE_IMAGES[category?.toLowerCase().replace(/\s+/g, '-')] || COURSE_IMAGES['default'];
};
const industryCareerData = [
    {
        title: 'Agriculture & Farming',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"],
        color: 'from-emerald-50 to-teal-50',
        iconColor: 'text-emerald-600',
        borderColor: 'border-emerald-200',
        accentColor: 'bg-emerald-100',
        description: 'Transform farming with precision drone technology. High-tech sensors reveal plant stress before it\'s visible, precision sprayers deliver nutrients exactly where needed, and autonomous operations make agriculture smarter, safer and more sustainable.',
        opportunities: [
            'Monitor plant health with multispectral imaging',
            'Execute precision spraying missions',
            'Map soil conditions and moisture levels',
            'Control pests with targeted interventions',
            'Assist with livestock management'
        ]
    },
    {
        title: 'Construction & Infrastructure',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"],
        color: 'from-orange-50 to-amber-50',
        iconColor: 'text-orange-600',
        borderColor: 'border-orange-200',
        accentColor: 'bg-orange-100',
        description: 'Turn construction sites into dynamic digital twins. Complete in hours what used to take days of surveying. Track progress in real time, calculate volumes instantly, and inspect structures without scaffolding.',
        opportunities: [
            'Create detailed site maps and 3D models',
            'Monitor progress and safety compliance',
            'Perform accurate volumetric analysis',
            'Inspect hard-to-reach structures safely',
            'Capture stunning project visuals'
        ]
    },
    {
        title: 'Mining & Resources',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mountain$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mountain$3e$__["Mountain"],
        color: 'from-amber-50 to-yellow-50',
        iconColor: 'text-amber-700',
        borderColor: 'border-amber-200',
        accentColor: 'bg-amber-100',
        description: 'Make mining smarter and safer. Scan entire open-pit mines with high-resolution cameras and LiDAR, use hyperspectral imaging to reveal mineral deposits, and map underground passages without human risk.',
        opportunities: [
            'Build comprehensive 3D pit models',
            'Conduct detailed spectral surveys',
            'Measure stockpiles accurately',
            'Map underground tunnel systems',
            'Inspect pipelines and conveyors'
        ]
    },
    {
        title: 'Surveying & Mapping',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"],
        color: 'from-blue-50 to-cyan-50',
        iconColor: 'text-blue-600',
        borderColor: 'border-blue-200',
        accentColor: 'bg-blue-100',
        description: 'Capture geospatial data quickly and affordably. From protecting ecosystems to designing smart cities, create accurate maps that support environmental science, urban planning, and disaster response.',
        opportunities: [
            'Create environmental and land cover maps',
            'Survey hydrology and geological features',
            'Assess agricultural and forest health',
            'Map urban infrastructure precisely',
            'Provide rapid disaster response mapping'
        ]
    },
    {
        title: 'Public Safety & Emergency',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        color: 'from-rose-50 to-pink-50',
        iconColor: 'text-rose-600',
        borderColor: 'border-rose-200',
        accentColor: 'bg-rose-100',
        description: 'Bring critical support where humans can\'t safely go. Use thermal cameras for search and rescue, deliver emergency supplies, map disaster zones, and inspect hazardous sites from a safe distance.',
        opportunities: [
            'Conduct search and rescue operations',
            'Provide disaster assessment and mapping',
            'Execute medical supply delivery missions',
            'Inspect hazardous sites safely',
            'Support crowd safety and water rescue'
        ]
    },
    {
        title: 'Media & Filmmaking',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
        color: 'from-purple-50 to-violet-50',
        iconColor: 'text-purple-600',
        borderColor: 'border-purple-200',
        accentColor: 'bg-purple-100',
        description: 'Democratize aerial cinematography. Capture sweeping vistas and dynamic footage for weddings, documentaries, music videos, and commercial productions with creative freedom and cost savings.',
        opportunities: [
            'Capture cinematic aerial footage',
            'Showcase real estate with dynamic tours',
            'Cover live events and sports',
            'Create environmental documentaries',
            'Produce engaging marketing content'
        ]
    },
    {
        title: 'Delivery & Logistics',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        color: 'from-indigo-50 to-blue-50',
        iconColor: 'text-indigo-600',
        borderColor: 'border-indigo-200',
        accentColor: 'bg-indigo-100',
        description: 'Pioneer the future of delivery. Transport parcels, groceries, medicines and emergency supplies in under 30 minutes. Help build sustainable delivery networks that connect remote communities.',
        opportunities: [
            'Operate last-mile delivery systems',
            'Transport medical and emergency supplies',
            'Support major e-commerce operations',
            'Develop sustainable logistics solutions',
            'Connect underserved remote areas'
        ]
    }
];
const determineDeliveryMethod = (quizAnswers)=>{
    if (!quizAnswers) return 'both';
    const values = Object.values(quizAnswers);
    const hasHandsOn = values.some((v)=>typeof v === 'string' && v.includes('hands-on'));
    const hasOnline = values.some((v)=>typeof v === 'string' && v.includes('online'));
    if (hasHandsOn && !hasOnline) return 'classroom';
    if (hasOnline && !hasHandsOn) return 'online';
    return 'both';
};
const enhanceCourseWithDelivery = (course, deliveryMethod)=>{
    if (!course) return null;
    const deliveryOptions = {
        classroom: {
            type: 'In-Person Classroom',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            description: 'Hands-on training with instructor guidance',
            features: [
                'Face-to-face instruction',
                'Hands-on practice with equipment'
            ],
            duration: course.duration || '3-5 days',
            price: course.price || 1500,
            locations: [
                'Sydney',
                'Melbourne',
                'Brisbane'
            ]
        },
        online: {
            type: 'Online Learning',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"],
            description: 'Flexible online training at your own pace',
            features: [
                'Self-paced learning modules',
                'Interactive online simulations'
            ],
            duration: `${course.duration || '3-5 days'} (Self-paced)`,
            price: Math.floor((course.price || 1500) * 0.45),
            locations: [
                'Australia-wide'
            ]
        }
    };
    if (course.name && course.name.includes('AROC')) {
        return {
            ...course,
            deliveryOptions: [
                deliveryOptions.classroom
            ]
        };
    }
    return {
        ...course,
        deliveryOptions: deliveryMethod === 'both' ? [
            deliveryOptions.classroom,
            deliveryOptions.online
        ] : [
            deliveryOptions[deliveryMethod] || deliveryOptions.classroom
        ]
    };
};
const CyberButton = ({ onClick, children, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `relative px-12 py-5 text-white font-bold border-none rounded-full transition-all duration-300 hover:shadow-2xl ${className}`,
        style: {
            backgroundColor: '#ff6b35',
            minWidth: '320px',
            height: '64px',
            cursor: 'pointer'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center relative z-10",
            children: children
        }, void 0, false, {
            fileName: "[project]/components/pages/Plan.jsx",
            lineNumber: 241,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/pages/Plan.jsx",
        lineNumber: 231,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const FormModal = ({ isOpen, onClose, title, description, onSubmit, fields, submitText, isLoading })=>{
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "max-w-md mx-auto relative overflow-hidden rounded-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute right-4 top-4 p-2 h-10 w-10 rounded-full hover:bg-slate-100 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "text-xl font-bold",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-sm mt-2 text-slate-600",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 258,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 253,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                    onSubmit: onSubmit,
                    className: "space-y-4",
                    children: [
                        fields.map((field, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                ...field,
                                className: "w-full"
                            }, index, false, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "flex-1 px-4 py-2 border-2 border-slate-300 rounded-lg hover:bg-slate-50 font-medium transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isLoading,
                                    className: "flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: isLoading ? 'Processing...' : submitText
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 260,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/pages/Plan.jsx",
        lineNumber: 252,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const StatCard = ({ icon: Icon, label, value, color, delay = 0 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
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
            className: `border-0 shadow-lg rounded-2xl bg-gradient-to-br ${color} text-white`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                        className: "w-10 h-10 mb-4"
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-sm mb-2",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-bold",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 290,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/pages/Plan.jsx",
            lineNumber: 289,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/pages/Plan.jsx",
        lineNumber: 288,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const DeliveryOptionCard = ({ option })=>{
    if (!option) return null;
    const IconComponent = option.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-2 rounded-xl hover:border-blue-400 transition-colors",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "p-2 rounded-lg bg-blue-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(IconComponent, {
                            className: "w-5 h-5 text-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 308,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-slate-900",
                                        children: option.type
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-bold text-blue-600",
                                        children: [
                                            "$",
                                            option.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 313,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-600 mb-3",
                                children: option.description
                            }, void 0, false, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            option.features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "w-3 h-3 text-green-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-700",
                                            children: feature
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mt-3 pt-3 border-t",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs text-slate-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Plan.jsx",
                                                lineNumber: 324,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: option.duration
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Plan.jsx",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs mt-1 text-slate-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Plan.jsx",
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: option.locations.join(', ')
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Plan.jsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 310,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 306,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/pages/Plan.jsx",
            lineNumber: 305,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/pages/Plan.jsx",
        lineNumber: 304,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const EnhancedCourseCard = ({ course })=>{
    if (!course) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-0 shadow-lg rounded-2xl group hover:shadow-xl transition-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "aspect-video overflow-hidden rounded-t-2xl relative bg-slate-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: getCourseImage(course.name, course.category),
                    alt: course.name || 'Course',
                    fill: true,
                    className: "object-cover group-hover:scale-105 transition-transform duration-300"
                }, void 0, false, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 345,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 344,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full",
                        children: course.category || 'Training'
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-slate-900 my-3",
                        children: course.name
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 356,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-slate-600 mb-4 text-sm",
                        children: course.description
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "space-y-2 mb-6",
                        children: (course.benefits || []).slice(0, 3).map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 362,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-slate-700",
                                        children: benefit
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 361,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    course.deliveryOptions && course.deliveryOptions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                className: "font-semibold text-sm text-slate-900",
                                children: "Choose Your Learning Style:"
                            }, void 0, false, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 370,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            course.deliveryOptions.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DeliveryOptionCard, {
                                    option: option
                                }, index, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 372,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 369,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 352,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/pages/Plan.jsx",
        lineNumber: 343,
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
    const [casaFormData, setCasaFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        name: '',
        email: ''
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        console.log('Starting plan load...');
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, []);
    const handleCasaDownload = async (e)=>{
        e.preventDefault();
        if (!casaFormData.name || !casaFormData.email) {
            toast({
                title: "Please fill all fields",
                variant: "destructive"
            });
            return;
        }
        setIsDownloading(true);
        const link = document.createElement('a');
        link.href = '/pdfs/CASA-Drone-Safety-Rules.pdf';
        link.download = 'CASA-Drone-Safety-Rules.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast({
            title: "Success!",
            description: "Download started"
        });
        setCasaFormData({
            name: '',
            email: ''
        });
        setShowCasaForm(false);
        setIsDownloading(false);
    };
    if (!planData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-4",
                    children: "Loading your plan..."
                }, void 0, false, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 466,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 465,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/pages/Plan.jsx",
            lineNumber: 464,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const casaFields = [
        {
            type: "text",
            name: "name",
            placeholder: "Full Name *",
            value: casaFormData.name,
            onChange: (e)=>setCasaFormData({
                    ...casaFormData,
                    name: e.target.value
                }),
            required: true
        },
        {
            type: "email",
            name: "email",
            placeholder: "Email *",
            value: casaFormData.email,
            onChange: (e)=>setCasaFormData({
                    ...casaFormData,
                    email: e.target.value
                }),
            required: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "py-20 bg-gradient-to-r from-slate-800 via-slate-900 to-blue-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "inline-flex p-3 rounded-full bg-blue-600/20 mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                    className: "w-8 h-8 text-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 483,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 482,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-bold text-white mb-6",
                                children: "Your Personalized Career Plan"
                            }, void 0, false, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 485,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-2xl text-blue-200 font-semibold mb-4",
                                children: planData.title
                            }, void 0, false, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 486,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-xl text-slate-300 max-w-3xl mx-auto mb-8",
                                children: planData.description
                            }, void 0, false, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 487,
                                columnNumber: 13
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
                                    duration: 0.8,
                                    delay: 0.3
                                },
                                className: "mt-8",
                                children: !showCasaForm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(CyberButton, {
                                    onClick: ()=>setShowCasaForm(true),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "mr-3 w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 492,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: "Free Marketing Information"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 493,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 491,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FormModal, {
                                        isOpen: showCasaForm,
                                        onClose: ()=>setShowCasaForm(false),
                                        title: "Download Marketing Information",
                                        description: "Please provide your details",
                                        onSubmit: handleCasaDownload,
                                        fields: casaFields,
                                        submitText: "Download PDF",
                                        isLoading: isDownloading
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 497,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 496,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 489,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/pages/Plan.jsx",
                        lineNumber: 481,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 480,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 479,
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
                                    value: planData.industry,
                                    color: "from-blue-400 to-blue-500",
                                    delay: 0
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 517,
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
                                    lineNumber: 518,
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
                                    lineNumber: 519,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatCard, {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                    label: "Total Investment",
                                    value: "$1,300 - $3,000+",
                                    color: "from-orange-400 to-orange-500",
                                    delay: 0.3
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 520,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 516,
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
                                    lineNumber: 524,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                                    children: enhancedCourses.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(EnhancedCourseCard, {
                                            course: course
                                        }, index, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 528,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 523,
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "border-0 shadow-xl rounded-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-2xl font-bold",
                                            children: [
                                                "Market Opportunities in ",
                                                planData.industry
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 536,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 535,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: planData.marketOpportunities.map((opportunity, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Plan.jsx",
                                                            lineNumber: 542,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-700",
                                                            children: opportunity
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Plan.jsx",
                                                            lineNumber: 543,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/components/pages/Plan.jsx",
                                                    lineNumber: 541,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 539,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/pages/Plan.jsx",
                                        lineNumber: 538,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/pages/Plan.jsx",
                                lineNumber: 534,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 533,
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold text-slate-900 mb-6",
                                            children: "Discover the Future of Drone Careers"
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 553,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "text-xl text-slate-600 max-w-4xl mx-auto",
                                            children: "Imagine piloting cutting-edge technology that changes how entire industries operate."
                                        }, void 0, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 554,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 552,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                                    children: industryCareerData.map((industry, index)=>{
                                        const IconComponent = industry.icon;
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
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                                className: `border-2 ${industry.borderColor} shadow-lg hover:shadow-2xl rounded-3xl h-full bg-gradient-to-br ${industry.color} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "p-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: `inline-flex p-4 rounded-2xl ${industry.accentColor} mb-5`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(IconComponent, {
                                                                className: `w-8 h-8 ${industry.iconColor}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/pages/Plan.jsx",
                                                                lineNumber: 565,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Plan.jsx",
                                                            lineNumber: 564,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-bold mb-3 text-slate-900",
                                                            children: industry.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Plan.jsx",
                                                            lineNumber: 567,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-sm mb-6 text-slate-600 leading-relaxed",
                                                            children: industry.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/pages/Plan.jsx",
                                                            lineNumber: 568,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                                    className: "text-xs font-bold uppercase tracking-wider text-slate-500 mb-3",
                                                                    children: "What You'll Do"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/pages/Plan.jsx",
                                                                    lineNumber: 570,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                industry.opportunities.map((opp, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-3 group/item",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                className: `w-1.5 h-1.5 rounded-full ${industry.iconColor.replace('text-', 'bg-')} mt-2 flex-shrink-0`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/pages/Plan.jsx",
                                                                                lineNumber: 573,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-slate-700 leading-relaxed",
                                                                                children: opp
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/pages/Plan.jsx",
                                                                                lineNumber: 574,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/components/pages/Plan.jsx",
                                                                        lineNumber: 572,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/pages/Plan.jsx",
                                                            lineNumber: 569,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/pages/Plan.jsx",
                                                    lineNumber: 563,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/pages/Plan.jsx",
                                                lineNumber: 562,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, industry.title, false, {
                                            fileName: "[project]/components/pages/Plan.jsx",
                                            lineNumber: 561,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/pages/Plan.jsx",
                                    lineNumber: 557,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/pages/Plan.jsx",
                            lineNumber: 551,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/pages/Plan.jsx",
                    lineNumber: 515,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/pages/Plan.jsx",
                lineNumber: 514,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/pages/Plan.jsx",
        lineNumber: 478,
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
// Apply layout to this page
PlanPage.getLayout = function getLayout(page) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Layout, {
        children: page
    }, void 0, false, {
        fileName: "[project]/pages/plan.js",
        lineNumber: 30,
        columnNumber: 12
    }, this);
};
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1391a2e2._.js.map