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
"[project]/Desktop/moneyKu/components/SummaryCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SummaryCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
;
;
const icons = {
    Saldo: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
    Pemasukan: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
    Pengeluaran: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"],
    Transaksi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"]
};
function SummaryCard({ title, amount, color }) {
    const Icon = icons[title];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card",
        style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            textTransform: 'uppercase',
                            fontSize: '0.75rem',
                            letterSpacing: '2px',
                            color: 'var(--muted)'
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/moneyKu/components/SummaryCard.jsx",
                        lineNumber: 40,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '1.75rem',
                            fontWeight: '800',
                            marginTop: '12px',
                            color: color
                        },
                        children: amount
                    }, void 0, false, {
                        fileName: "[project]/Desktop/moneyKu/components/SummaryCard.jsx",
                        lineNumber: 43,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/moneyKu/components/SummaryCard.jsx",
                lineNumber: 39,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '48px',
                    height: '48px',
                    borderRadius: '16px',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 24,
                    color: "var(--primary)"
                }, void 0, false, {
                    fileName: "[project]/Desktop/moneyKu/components/SummaryCard.jsx",
                    lineNumber: 48,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/moneyKu/components/SummaryCard.jsx",
                lineNumber: 47,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/moneyKu/components/SummaryCard.jsx",
        lineNumber: 38,
        columnNumber: 3
    }, this);
}
_c = SummaryCard;
var _c;
__turbopack_context__.k.register(_c, "SummaryCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/moneyKu/app/tabungan/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tabungan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/dexie-react-hooks/dist/dexie-react-hooks.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$savingsService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/lib/savingsService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$components$2f$SummaryCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/components/SummaryCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Tabungan() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tabungan.useEffect": ()=>{
            setMounted(true);
        }
    }["Tabungan.useEffect"], []);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        date: new Date().toISOString().split('T')[0],
        description: "",
        type: "deposit",
        amount: ""
    });
    const savings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"])({
        "Tabungan.useLiveQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$savingsService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSavings"])()
    }["Tabungan.useLiveQuery"], []) || [];
    const currentTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"])({
        "Tabungan.useLiveQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$savingsService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["totalSavings"])()
    }["Tabungan.useLiveQuery"], []) || 0;
    async function saveTransaction() {
        if (!form.date || !form.description || !form.amount) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$savingsService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addSaving"])({
            ...form,
            amount: Number(form.amount)
        });
        setForm({
            date: new Date().toISOString().split('T')[0],
            description: "",
            type: "deposit",
            amount: ""
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
                        children: "Tabungan"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "header-subtitle",
                        children: "Kelola dan pantau target tabunganmu."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    marginBottom: '32px',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, var(--accent), var(--primary))',
                    color: 'white'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '1.2rem',
                            fontWeight: '500',
                            opacity: 0.9
                        },
                        children: "Total Tabungan Saat Ini"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '2.5rem',
                            fontWeight: '800',
                            margin: '10px 0'
                        },
                        children: [
                            "Rp ",
                            currentTotal.toLocaleString("id-ID")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    overflowY: 'auto',
                    maxHeight: '450px',
                    marginBottom: '15px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: '20px'
                            },
                            children: "Catat Tabungan"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: form.date,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            date: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Keterangan",
                                    value: form.description,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            description: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: form.type,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            type: e.target.value
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "deposit",
                                            children: "Menabung (Masuk)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "withdraw",
                                            children: "Penarikan (Keluar)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    placeholder: "Jumlah",
                                    value: form.amount,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            amount: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-primary",
                                    onClick: saveTransaction,
                                    children: "Simpan"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card",
                    style: {
                        overflowY: 'auto',
                        maxHeight: '450px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: '20px'
                            },
                            children: "Riwayat Tabungan"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        savings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: 'var(--muted)',
                                textAlign: 'center',
                                marginTop: '40px'
                            },
                            children: "Belum ada riwayat tabungan."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px'
                            },
                            children: savings.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass",
                                    style: {
                                        padding: '16px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontWeight: '600'
                                                    },
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: '0.85rem',
                                                        color: 'var(--muted)'
                                                    },
                                                    children: new Date(item.date).toLocaleDateString("id-ID")
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '15px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontWeight: 'bold',
                                                        color: item.type === "deposit" ? 'var(--green)' : 'var(--red)'
                                                    },
                                                    children: [
                                                        item.type === "deposit" ? '+' : '-',
                                                        " Rp ",
                                                        item.amount.toLocaleString("id-ID")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                                                    lineNumber: 85,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$savingsService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSaving"])(item.id),
                                                    style: {
                                                        background: 'transparent',
                                                        color: 'var(--red)',
                                                        fontSize: '0.9rem',
                                                        padding: '5px'
                                                    },
                                                    children: "Hapus"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                                            lineNumber: 84,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                    lineNumber: 72,
                    columnNumber: 2
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/moneyKu/app/tabungan/page.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(Tabungan, "Ymj/dzDoGPRJ7o3ygWQ4MlNZoQk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLiveQuery"]
    ];
});
_c = Tabungan;
var _c;
__turbopack_context__.k.register(_c, "Tabungan");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_moneyKu_b81db797._.js.map