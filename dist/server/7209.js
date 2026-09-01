export const __rspack_esm_id = 7209;
export const __rspack_esm_ids = [7209];
export const __webpack_modules__ = {
7040(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _tanstack_react_router__rspack_import_3 = __webpack_require__(22679);
/* import */ var _tanstack_react_router__rspack_import_4 = __webpack_require__(38639);
/* import */ var lucide_react__rspack_import_5 = __webpack_require__(36632);
/* import */ var lucide_react__rspack_import_6 = __webpack_require__(73619);
/* import */ var lucide_react__rspack_import_7 = __webpack_require__(71438);
/* import */ var lucide_react__rspack_import_8 = __webpack_require__(70455);
/* import */ var react__rspack_import_1 = __webpack_require__(58186);
/* import */ var _components_ui_input__rspack_import_2 = __webpack_require__(16479);





const tags = [
    {
        name: "v2.0.0",
        commit: "a1b2c3d",
        date: "2025-06-15"
    },
    {
        name: "v1.5.0",
        commit: "e4f5g6h",
        date: "2025-05-01"
    },
    {
        name: "v1.4.2",
        commit: "i7j8k9l",
        date: "2025-04-10"
    },
    {
        name: "v1.4.1",
        commit: "m0n1o2p",
        date: "2025-03-28"
    },
    {
        name: "v1.3.0",
        commit: "q3r4s5t",
        date: "2025-03-01"
    },
    {
        name: "v1.2.0",
        commit: "u6v7w8x",
        date: "2025-02-10"
    },
    {
        name: "v1.1.0",
        commit: "y9z0a1b",
        date: "2025-01-20"
    },
    {
        name: "v1.0.0",
        commit: "c2d3e4f",
        date: "2025-01-01"
    },
    {
        name: "v0.9.0",
        commit: "g5h6i7j",
        date: "2024-12-15"
    },
    {
        name: "v0.8.0",
        commit: "k8l9m0n",
        date: "2024-11-20"
    }
];
function ProjectTagsRoute() {
    const { projectName } = (0,_tanstack_react_router__rspack_import_3/* .useParams */.g)({
        from: "/projects/$projectName/tags"
    });
    const [searchQuery, setSearchQuery] = (0,react__rspack_import_1.useState)("");
    const filtered = searchQuery.trim() ? tags.filter((t)=>t.name.toLowerCase().includes(searchQuery.toLowerCase())) : tags;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "border-b",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "flex items-center gap-2 text-sm text-muted-foreground mb-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_tanstack_react_router__rspack_import_4/* .Link */.N_, {
                                to: "/projects",
                                className: "hover:text-foreground transition-colors",
                                children: "Projects"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                children: "/"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_tanstack_react_router__rspack_import_4/* .Link */.N_, {
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
                                children: "Tags"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "flex size-10 items-center justify-center rounded-lg border bg-muted",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_5/* ["default"] */.A, {
                                    className: "size-5 text-muted-foreground"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                                        className: "text-xl font-semibold tracking-tight",
                                        children: "Tags"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            tags.length,
                                            " tags"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "relative max-w-sm",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_6/* ["default"] */.A, {
                        className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_input__rspack_import_2/* .Input */.p, {
                        placeholder: "Find a tag...",
                        className: "pl-9",
                        value: searchQuery,
                        onChange: (e)=>setSearchQuery(e.target.value)
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
                                        children: "Tag"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                        className: "px-4 py-3 text-left font-medium",
                                        children: "Commit"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                        className: "px-4 py-3 text-right font-medium",
                                        children: "Date"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tbody", {
                            children: [
                                filtered.map((tag)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                        className: "border-b last:border-0 hover:bg-gray-200/90",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                className: "px-4 py-3",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_5/* ["default"] */.A, {
                                                            className: "size-4 text-muted-foreground shrink-0"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                            className: "font-medium text-primary",
                                                            children: tag.name
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                className: "px-4 py-3",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "flex items-center gap-2 text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_7/* ["default"] */.A, {
                                                            className: "size-3.5 shrink-0"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                                            className: "text-xs",
                                                            children: tag.commit
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                className: "px-4 py-3 text-right text-muted-foreground whitespace-nowrap",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                    className: "flex items-center gap-1.5 justify-end",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_8/* ["default"] */.A, {
                                                            className: "size-3.5"
                                                        }),
                                                        tag.date
                                                    ]
                                                })
                                            })
                                        ]
                                    }, tag.name)),
                                filtered.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("tr", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("td", {
                                        colSpan: 3,
                                        className: "px-4 py-12 text-center text-sm text-muted-foreground",
                                        children: [
                                            "No tags found matching “",
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
  component: () => (ProjectTagsRoute)
});


},

};
