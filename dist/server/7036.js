export const __rspack_esm_id = 7036;
export const __rspack_esm_ids = [7036];
export const __webpack_modules__ = {
76407(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _tanstack_react_router__rspack_import_4 = __webpack_require__(22679);
/* import */ var _tanstack_react_router__rspack_import_5 = __webpack_require__(38639);
/* import */ var lucide_react__rspack_import_6 = __webpack_require__(43534);
/* import */ var lucide_react__rspack_import_7 = __webpack_require__(73619);
/* import */ var lucide_react__rspack_import_8 = __webpack_require__(23489);
/* import */ var lucide_react__rspack_import_9 = __webpack_require__(71438);
/* import */ var react__rspack_import_1 = __webpack_require__(58186);
/* import */ var _components_ui_button__rspack_import_2 = __webpack_require__(39839);
/* import */ var _components_ui_input__rspack_import_3 = __webpack_require__(16479);






const branches = [
    {
        name: "main",
        isDefault: true,
        lastCommit: "Merge pull request #42 from feature/new-ui",
        updated: "2 hours ago"
    },
    {
        name: "develop",
        isDefault: false,
        lastCommit: "Update API endpoints",
        updated: "1 day ago"
    },
    {
        name: "feature/new-ui",
        isDefault: false,
        lastCommit: "Add dashboard layout",
        updated: "3 days ago"
    },
    {
        name: "feature/auth-flow",
        isDefault: false,
        lastCommit: "Implement OAuth flow",
        updated: "5 days ago"
    },
    {
        name: "fix/header-styles",
        isDefault: false,
        lastCommit: "Fix nav spacing on mobile",
        updated: "1 week ago"
    },
    {
        name: "chore/deps-update",
        isDefault: false,
        lastCommit: "Bump dependencies",
        updated: "1 week ago"
    },
    {
        name: "refactor/api-layer",
        isDefault: false,
        lastCommit: "Extract API client",
        updated: "2 weeks ago"
    },
    {
        name: "docs/readme-update",
        isDefault: false,
        lastCommit: "Update README with setup guide",
        updated: "2 weeks ago"
    },
    {
        name: "feature/notifications",
        isDefault: false,
        lastCommit: "Add in-app notification system",
        updated: "3 weeks ago"
    },
    {
        name: "fix/mobile-nav",
        isDefault: false,
        lastCommit: "Fix hamburger menu toggle",
        updated: "3 weeks ago"
    }
];
function ProjectBranchesRoute() {
    const { projectName } = (0,_tanstack_react_router__rspack_import_4/* .useParams */.g)({
        from: "/projects/$projectName/branches"
    });
    const [searchQuery, setSearchQuery] = (0,react__rspack_import_1.useState)("");
    const filtered = searchQuery.trim() ? branches.filter((b)=>b.name.toLowerCase().includes(searchQuery.toLowerCase())) : branches;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "border-b",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "flex items-center gap-2 text-sm text-muted-foreground mb-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_tanstack_react_router__rspack_import_5/* .Link */.N_, {
                                to: "/projects",
                                className: "hover:text-foreground transition-colors",
                                children: "Projects"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                children: "/"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_tanstack_react_router__rspack_import_5/* .Link */.N_, {
                                to: "/projects/$projectName",
                                params: {
                                    projectName
                                },
                                className: "hover:text-foreground transition-colors",
                                children: projectName
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                children: "/"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: "text-foreground font-medium",
                                children: "Branches"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "flex size-10 items-center justify-center rounded-lg border bg-muted",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_6/* ["default"] */.A, {
                                    className: "size-5 text-muted-foreground"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                                        className: "text-xl font-semibold tracking-tight",
                                        children: "Branches"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            branches.length,
                                            " branches"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "relative flex-1 max-w-sm",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_7/* ["default"] */.A, {
                                className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_input__rspack_import_3/* .Input */.p, {
                                placeholder: "Find a branch...",
                                className: "pl-9",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_button__rspack_import_2/* .Button */.$, {
                        variant: "outline",
                        size: "sm",
                        className: "gap-1.5",
                        children: [
                            "New branch",
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_8/* ["default"] */.A, {
                                className: "size-3"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "rounded-xl border bg-card",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("table", {
                    className: "w-full text-sm",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("thead", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                className: "border-b text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                        className: "px-4 py-3 text-left font-medium",
                                        children: "Branch"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                        className: "px-4 py-3 text-left font-medium",
                                        children: "Last commit"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                        className: "px-4 py-3 text-right font-medium",
                                        children: "Updated"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tbody", {
                            children: [
                                filtered.map((branch)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                        className: "border-b last:border-0 hover:bg-gray-200/90",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                className: "px-4 py-3",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_6/* ["default"] */.A, {
                                                            className: "size-4 text-muted-foreground shrink-0"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                    className: "font-medium text-primary",
                                                                    children: branch.name
                                                                }),
                                                                branch.isDefault && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                                    className: "inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary",
                                                                    children: "default"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                className: "px-4 py-3",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "flex items-center gap-2 text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_9/* ["default"] */.A, {
                                                            className: "size-3.5 shrink-0"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "truncate max-w-md",
                                                            children: branch.lastCommit
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                className: "px-4 py-3 text-right text-muted-foreground whitespace-nowrap",
                                                children: branch.updated
                                            })
                                        ]
                                    }, branch.name)),
                                filtered.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("tr", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("td", {
                                        colSpan: 3,
                                        className: "px-4 py-12 text-center text-sm text-muted-foreground",
                                        children: [
                                            "No branches found matching “",
                                            searchQuery,
                                            "”"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


__webpack_require__.d(__webpack_exports__, {
  component: () => (ProjectBranchesRoute)
});


},

};
