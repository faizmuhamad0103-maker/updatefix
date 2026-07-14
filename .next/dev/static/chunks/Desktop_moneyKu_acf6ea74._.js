(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/moneyKu/lib/db.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db,
    "seedDatabase",
    ()=>seedDatabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/dexie/import-wrapper.mjs [app-client] (ecmascript)");
;
const db = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]("moneyKu");
db.version(1).stores({
    transactions: `
    ++id,
    date,
    description,
    category,
    type,
    amount,
    createdAt,
    updatedAt
  `
});
db.version(2).stores({
    transactions: `
    ++id,
    date,
    description,
    category,
    type,
    amount,
    createdAt,
    updatedAt
  `,
    savings: `
    ++id,
    date,
    description,
    type,
    amount,
    createdAt,
    updatedAt
  `,
    wishlist: `
    ++id,
    name,
    targetPrice,
    achieved,
    createdAt,
    updatedAt
  `
});
db.open();
async function seedDatabase() {
    const total = await db.transactions.count();
    if (total > 0) return;
    await db.transactions.bulkAdd([
        {
            date: "2026-07-01",
            description: "Gaji Bulanan",
            category: "Gaji",
            type: "income",
            amount: 8000000,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            date: "2026-07-02",
            description: "Makan Siang",
            category: "Makanan",
            type: "expense",
            amount: 45000,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            date: "2026-07-03",
            description: "Bensin",
            category: "Transport",
            type: "expense",
            amount: 100000,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    ]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/moneyKu/lib/wishlistService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addWishlist",
    ()=>addWishlist,
    "deleteWishlist",
    ()=>deleteWishlist,
    "getWishlists",
    ()=>getWishlists,
    "toggleAchieved",
    ()=>toggleAchieved,
    "updateWishlist",
    ()=>updateWishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/lib/db.js [app-client] (ecmascript)");
;
async function getWishlists() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].wishlist.orderBy("createdAt").reverse().toArray();
}
async function addWishlist(item) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].wishlist.add({
        ...item,
        achieved: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    });
}
async function updateWishlist(id, item) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].wishlist.update(id, {
        ...item,
        updatedAt: new Date().toISOString()
    });
}
async function toggleAchieved(id, currentStatus) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].wishlist.update(id, {
        achieved: !currentStatus,
        updatedAt: new Date().toISOString()
    });
}
async function deleteWishlist(id) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].wishlist.delete(id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/moneyKu/lib/savingsService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addSaving",
    ()=>addSaving,
    "deleteSaving",
    ()=>deleteSaving,
    "getSavings",
    ()=>getSavings,
    "totalSavings",
    ()=>totalSavings,
    "updateSaving",
    ()=>updateSaving
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/lib/db.js [app-client] (ecmascript)");
;
async function getSavings() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].savings.orderBy("date").reverse().toArray();
}
async function addSaving(saving) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].savings.add({
        ...saving,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    });
}
async function updateSaving(id, saving) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].savings.update(id, {
        ...saving,
        updatedAt: new Date().toISOString()
    });
}
async function deleteSaving(id) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].savings.delete(id);
}
async function totalSavings() {
    const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].savings.toArray();
    return data.reduce((sum, item)=>item.type === "deposit" ? sum + item.amount : sum - item.amount, 0);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/moneyKu/app/wishlist/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Wishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/dexie-react-hooks/dist/dexie-react-hooks.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$wishlistService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/lib/wishlistService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$savingsService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/lib/savingsService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Wishlist() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Wishlist.useEffect": ()=>{
            setMounted(true);
        }
    }["Wishlist.useEffect"], []);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        targetPrice: ""
    });
    const wishlists = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"])({
        "Wishlist.useLiveQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$wishlistService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWishlists"])()
    }["Wishlist.useLiveQuery"], []) || [];
    const currentTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"])({
        "Wishlist.useLiveQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$savingsService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["totalSavings"])()
    }["Wishlist.useLiveQuery"], []) || 0;
    async function saveItem() {
        if (!form.name || !form.targetPrice) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$wishlistService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addWishlist"])({
            ...form,
            targetPrice: Number(form.targetPrice)
        });
        setForm({
            name: "",
            targetPrice: ""
        });
    }
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "main-content",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "header-title",
                        children: "Wishlist"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "header-subtitle",
                        children: "Daftar impian yang ingin kamu capai."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    marginBottom: '32px',
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        style: {
                            flex: 2
                        },
                        type: "text",
                        placeholder: "Nama Barang/Impian",
                        value: form.name,
                        onChange: (e)=>setForm({
                                ...form,
                                name: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        style: {
                            flex: 1
                        },
                        type: "number",
                        placeholder: "Target Harga (Rp)",
                        value: form.targetPrice,
                        onChange: (e)=>setForm({
                                ...form,
                                targetPrice: e.target.value
                            })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        onClick: saveItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                lineNumber: 49,
                                columnNumber: 60
                            }, this),
                            " Tambah"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '20px'
                },
                children: [
                    wishlists.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card",
                            style: {
                                position: 'relative',
                                opacity: item.achieved ? 0.7 : 1
                            },
                            children: [
                                item.achieved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        top: 15,
                                        right: 15,
                                        background: 'var(--green)',
                                        color: 'white',
                                        padding: '4px 8px',
                                        borderRadius: '12px',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold'
                                    },
                                    children: "Tercapai!"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: '1.2rem',
                                        marginBottom: '8px',
                                        textDecoration: item.achieved ? 'line-through' : 'none'
                                    },
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: 'var(--primary)',
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                        marginBottom: '10px'
                                    },
                                    children: [
                                        "Rp ",
                                        item.targetPrice.toLocaleString("id-ID")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                !item.achieved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: '0.85rem',
                                                marginBottom: '6px',
                                                color: 'var(--text-light)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Terkumpul: Rp ",
                                                        Math.min(currentTotal, item.targetPrice).toLocaleString("id-ID")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        Math.min(100, Math.round(currentTotal / item.targetPrice * 100)),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '100%',
                                                height: '8px',
                                                background: 'var(--border)',
                                                borderRadius: '4px',
                                                overflow: 'hidden'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: '100%',
                                                    width: `${Math.min(100, Math.round(currentTotal / item.targetPrice * 100))}%`,
                                                    background: 'var(--green)',
                                                    transition: 'width 0.5s ease'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '10px',
                                        marginTop: item.achieved ? '20px' : '0'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$wishlistService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleAchieved"])(item.id, item.achieved),
                                            style: {
                                                flex: 1,
                                                background: item.achieved ? 'var(--border)' : 'var(--green)',
                                                color: item.achieved ? 'var(--text)' : 'white',
                                                padding: '10px',
                                                borderRadius: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                item.achieved ? 'Batal' : 'Tandai Tercapai'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$wishlistService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteWishlist"])(item.id),
                                            style: {
                                                background: 'var(--red)',
                                                color: 'white',
                                                padding: '10px',
                                                borderRadius: '12px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)),
                    wishlists.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            gridColumn: '1 / -1',
                            textAlign: 'center',
                            padding: '40px',
                            color: 'var(--muted)'
                        },
                        children: "Belum ada barang di wishlist kamu. Yuk mulai bermimpi!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(Wishlist, "roNoqBgypK+JI+3QhQGZtFjtPhg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"]
    ];
});
_c = Wishlist;
var _c;
__turbopack_context__.k.register(_c, "Wishlist");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_moneyKu_acf6ea74._.js.map