export const __rspack_esm_id = 8521;
export const __rspack_esm_ids = [8521];
export const __webpack_modules__ = {
46224(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ WorkersRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/Match.js + 6 modules
var Match = __webpack_require__(71667);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useRouterState.js
var useRouterState = __webpack_require__(84011);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/link.js + 1 modules
var esm_link = __webpack_require__(38639);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs
var layout_dashboard = __webpack_require__(61626);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/box.mjs
var box = __webpack_require__(8022);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/container.mjs
var container = __webpack_require__(81040);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/blocks.mjs
var blocks = __webpack_require__(46165);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/rocket.mjs
var rocket = __webpack_require__(19571);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/route.mjs
var route = __webpack_require__(89922);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/cable.mjs
var cable = __webpack_require__(25994);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/hard-drive.mjs
var hard_drive = __webpack_require__(78971);
// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__(80828);
;// CONCATENATED MODULE: ./src/features/console/components/ConsoleSidebar.tsx




const navGroups = [
    {
        label: "Home",
        items: [
            {
                label: "Overview",
                to: "/workers/overview",
                icon: layout_dashboard/* ["default"] */.A
            }
        ]
    },
    {
        label: "Workloads",
        items: [
            {
                label: "Projects",
                to: "/workers/projects",
                icon: box/* ["default"] */.A
            },
            {
                label: "Pods",
                to: "/workers/pods",
                icon: container/* ["default"] */.A
            },
            {
                label: "Deployments",
                to: "/workers/deployments",
                icon: blocks/* ["default"] */.A
            },
            {
                label: "Builds",
                to: "/workers/builds",
                icon: rocket/* ["default"] */.A
            }
        ]
    },
    {
        label: "Networking",
        items: [
            {
                label: "Routes",
                to: "/workers/routes",
                icon: route/* ["default"] */.A
            },
            {
                label: "Services",
                to: "/workers/services",
                icon: cable/* ["default"] */.A
            }
        ]
    },
    {
        label: "Storage",
        items: [
            {
                label: "PersistentVolumeClaims",
                to: "/workers/persistentvolumeclaims",
                icon: hard_drive/* ["default"] */.A
            }
        ]
    }
];
function ConsoleSidebar() {
    const pathname = (0,useRouterState/* .useRouterState */.k)({
        select: (s)=>s.location.pathname
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex w-56 flex-col border-r bg-sidebar text-sidebar-foreground max-md:hidden",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex-1 overflow-y-auto p-3",
            children: navGroups.map((group)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "mb-1 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
                            children: group.label
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                            className: "flex flex-col gap-0.5",
                            children: group.items.map((item)=>{
                                const isActive = pathname === item.to || pathname.startsWith(item.to + "/");
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm_link/* .Link */.N_, {
                                        to: item.to,
                                        className: (0,utils.cn)("flex items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none transition-colors", isActive ? "bg-sidebar-active font-medium text-sidebar-active-foreground" : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"),
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
                    ]
                }, group.label))
        })
    });
}

;// CONCATENATED MODULE: ./src/routes/workers.tsx?tsr-split=component



function WorkersRoute() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-1",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ConsoleSidebar, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Match/* .Outlet */.sv, {})
            })
        ]
    });
}



},

};
