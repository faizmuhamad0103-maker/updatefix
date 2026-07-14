module.exports = [
"[project]/Desktop/moneyKu/lib/db.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db,
    "seedDatabase",
    ()=>seedDatabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/dexie/import-wrapper.mjs [app-ssr] (ecmascript)");
;
const db = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2f$import$2d$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]("moneyKu");
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
}),
"[project]/Desktop/moneyKu/lib/wishlistService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/lib/db.js [app-ssr] (ecmascript)");
;
async function getWishlists() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].wishlist.orderBy("createdAt").reverse().toArray();
}
async function addWishlist(item) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].wishlist.add({
        ...item,
        achieved: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    });
}
async function updateWishlist(id, item) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].wishlist.update(id, {
        ...item,
        updatedAt: new Date().toISOString()
    });
}
async function toggleAchieved(id, currentStatus) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].wishlist.update(id, {
        achieved: !currentStatus,
        updatedAt: new Date().toISOString()
    });
}
async function deleteWishlist(id) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$db$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].wishlist.delete(id);
}
}),
"[project]/Desktop/moneyKu/app/wishlist/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Wishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/dexie-react-hooks/dist/dexie-react-hooks.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$wishlistService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/lib/wishlistService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/moneyKu/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
"use client";
;
;
;
;
;
function Wishlist() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        targetPrice: ""
    });
    const wishlists = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$dexie$2d$react$2d$hooks$2f$dist$2f$dexie$2d$react$2d$hooks$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLiveQuery"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$wishlistService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWishlists"])(), []) || [];
    async function saveItem() {
        if (!form.name || !form.targetPrice) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$wishlistService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addWishlist"])({
            ...form,
            targetPrice: Number(form.targetPrice)
        });
        setForm({
            name: "",
            targetPrice: ""
        });
    }
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "main-content",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "header-title",
                        children: "Wishlist"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "header-subtitle",
                        children: "Daftar impian yang ingin kamu capai."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    marginBottom: '32px',
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        onClick: saveItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                lineNumber: 47,
                                columnNumber: 60
                            }, this),
                            " Tambah"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '20px'
                },
                children: [
                    wishlists.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card",
                            style: {
                                position: 'relative',
                                opacity: item.achieved ? 0.7 : 1
                            },
                            children: [
                                item.achieved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: '1.2rem',
                                        marginBottom: '8px',
                                        textDecoration: item.achieved ? 'line-through' : 'none'
                                    },
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: 'var(--primary)',
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                        marginBottom: '20px'
                                    },
                                    children: [
                                        "Rp ",
                                        item.targetPrice.toLocaleString("id-ID")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '10px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$wishlistService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleAchieved"])(item.id, item.achieved),
                                            style: {
                                                flex: 1,
                                                background: item.achieved ? 'var(--border)' : 'var(--green)',
                                                color: item.achieved ? 'var(--text)' : 'white',
                                                padding: '10px',
                                                borderRadius: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                item.achieved ? 'Batal' : 'Tandai Tercapai'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$lib$2f$wishlistService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteWishlist"])(item.id),
                                            style: {
                                                background: 'var(--red)',
                                                color: 'white',
                                                padding: '10px',
                                                borderRadius: '12px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)),
                    wishlists.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$moneyKu$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            gridColumn: '1 / -1',
                            textAlign: 'center',
                            padding: '40px',
                            color: 'var(--muted)'
                        },
                        children: "Belum ada barang di wishlist kamu. Yuk mulai bermimpi!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/moneyKu/app/wishlist/page.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_moneyKu_a6e166ab._.js.map