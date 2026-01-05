(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/weoneaviation/app/commercial-pilot-license/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "styles-module__atp01a__active",
  "container": "styles-module__atp01a__container",
  "contentColumn": "styles-module__atp01a__contentColumn",
  "heroContent": "styles-module__atp01a__heroContent",
  "heroOverlay": "styles-module__atp01a__heroOverlay",
  "heroSection": "styles-module__atp01a__heroSection",
  "leftMenu": "styles-module__atp01a__leftMenu",
  "manuContainer": "styles-module__atp01a__manuContainer",
  "menuLink": "styles-module__atp01a__menuLink",
  "sideMenu": "styles-module__atp01a__sideMenu",
});
}),
"[project]/weoneaviation/components/SideMenu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SideMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/weoneaviation/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/weoneaviation/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/weoneaviation/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$app$2f$commercial$2d$pilot$2d$license$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/weoneaviation/app/commercial-pilot-license/styles.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SideMenu({ items, data }) {
    _s();
    const menu = items ?? data ?? [];
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$app$2f$commercial$2d$pilot$2d$license$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftMenu,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$app$2f$commercial$2d$pilot$2d$license$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sideMenu,
            children: menu.map((item, i)=>{
                const isActive = pathname === item.path;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.path,
                        className: isActive ? `${__TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$app$2f$commercial$2d$pilot$2d$license$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuLink} ${__TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$app$2f$commercial$2d$pilot$2d$license$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active}` : __TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$app$2f$commercial$2d$pilot$2d$license$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuLink,
                        children: item.name
                    }, void 0, false, {
                        fileName: "[project]/weoneaviation/components/SideMenu.jsx",
                        lineNumber: 18,
                        columnNumber: 29
                    }, this)
                }, i, false, {
                    fileName: "[project]/weoneaviation/components/SideMenu.jsx",
                    lineNumber: 17,
                    columnNumber: 25
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/weoneaviation/components/SideMenu.jsx",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/weoneaviation/components/SideMenu.jsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_s(SideMenu, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$weoneaviation$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SideMenu;
var _c;
__turbopack_context__.k.register(_c, "SideMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=weoneaviation_be1d7887._.js.map