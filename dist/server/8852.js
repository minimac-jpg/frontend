export const __rspack_esm_id = 8852;
export const __rspack_esm_ids = [8852];
export const __webpack_modules__ = {
95759(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ ReleasesRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/Match.js + 6 modules
var Match = __webpack_require__(71667);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/git-branch.mjs
var git_branch = __webpack_require__(43534);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar.mjs
var calendar = __webpack_require__(21953);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/package.mjs
var icons_package = __webpack_require__(94505);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useRouterState.js
var useRouterState = __webpack_require__(84011);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/link.js + 1 modules
var esm_link = __webpack_require__(38639);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(80828);
;// CONCATENATED MODULE: ./src/components/layout/sidebar-layout.tsx
"use client";



function SidebarLayout({ navItems, children }) {
    const pathname = (0,useRouterState/* .useRouterState */.k)({
        select: (state)=>state.location.pathname
    });
    const bestMatch = navItems.reduce((best, item)=>{
        const matches = pathname === item.to || pathname.startsWith(`${item.to}/`);
        if (matches && (!best || item.to.length > best.to.length)) return item;
        return best;
    }, undefined);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex w-44 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border max-md:hidden",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex-1 overflow-hidden p-2",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                        className: "flex w-full min-w-0 flex-col gap-1",
                        children: navItems.map((item)=>{
                            const isActive = bestMatch === item;
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                className: "relative",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm_link/* .Link */.N_, {
                                    to: item.to,
                                    className: (0,utils.cn)("flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground", isActive ? "bg-sidebar-active font-medium text-sidebar-active-foreground hover:bg-sidebar-active hover:text-sidebar-active-foreground" : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"),
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(item.icon, {
                                            className: "size-4 shrink-0"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "truncate",
                                            children: item.label
                                        })
                                    ]
                                })
                            }, item.to);
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex min-w-0 flex-1 flex-col p-6",
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/routes/releases.tsx?tsr-split=component




const releasesNavItems = [
    {
        label: "Releases",
        to: "/releases",
        icon: git_branch/* ["default"] */.A
    },
    {
        label: "Calendar",
        to: "/releases/calendar",
        icon: calendar/* ["default"] */.A
    },
    {
        label: "Artifacts",
        to: "/releases/artifacts",
        icon: icons_package/* ["default"] */.A
    }
];
function ReleasesRoute() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SidebarLayout, {
        navItems: releasesNavItems,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Match/* .Outlet */.sv, {})
    });
}



},

};
