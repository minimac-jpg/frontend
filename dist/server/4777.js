export const __rspack_esm_id = 4777;
export const __rspack_esm_ids = [4777];
export const __webpack_modules__ = {
58032(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var react__rspack_import_1 = __webpack_require__(58186);
/* import */ var _tanstack_react_router__rspack_import_4 = __webpack_require__(45178);
/* import */ var _tanstack_react_table__rspack_import_5 = __webpack_require__(46390);
/* import */ var _tanstack_react_table__rspack_import_6 = __webpack_require__(44228);
/* import */ var _components_ui_table__rspack_import_2 = __webpack_require__(21999);
/* import */ var _components_ui_skeleton__rspack_import_3 = __webpack_require__(50186);
/* import */ var lucide_react__rspack_import_8 = __webpack_require__(53540);
/* import */ var lucide_react__rspack_import_9 = __webpack_require__(6611);
/* import */ var lucide_react__rspack_import_10 = __webpack_require__(2282);
/* import */ var _lib_utils__rspack_import_7 = __webpack_require__(80828);








function ResourceListTable({ data, isLoading, columns, getDetailUrl }) {
    const [sorting, setSorting] = (0,react__rspack_import_1.useState)([]);
    const navigate = (0,_tanstack_react_router__rspack_import_4/* .useNavigate */.Z)();
    const table = (0,_tanstack_react_table__rspack_import_5/* .useReactTable */.N4)({
        data: data ?? [],
        columns,
        state: {
            sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: (0,_tanstack_react_table__rspack_import_6/* .getCoreRowModel */.HT)(),
        getSortedRowModel: (0,_tanstack_react_table__rspack_import_6/* .getSortedRowModel */.h5)()
    });
    if (isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "space-y-2",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_skeleton__rspack_import_3/* .Skeleton */.E, {
                    className: "h-10 w-full"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_skeleton__rspack_import_3/* .Skeleton */.E, {
                    className: "h-10 w-full"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_skeleton__rspack_import_3/* .Skeleton */.E, {
                    className: "h-10 w-full"
                })
            ]
        });
    }
    if (!data || data.length === 0) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
            className: "py-12 text-center text-sm text-muted-foreground",
            children: "No resources found"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: "rounded-md border",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_ui_table__rspack_import_2/* .Table */.XI, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_table__rspack_import_2/* .TableHeader */.A0, {
                    children: table.getHeaderGroups().map((hg)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_table__rspack_import_2/* .TableRow */.Hj, {
                            children: hg.headers.map((header)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_table__rspack_import_2/* .TableHead */.nd, {
                                    className: (0,_lib_utils__rspack_import_7.cn)(header.column.getCanSort() && "cursor-pointer select-none"),
                                    onClick: header.column.getToggleSortingHandler(),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            (0,_tanstack_react_table__rspack_import_5/* .flexRender */.Kv)(header.column.columnDef.header, header.getContext()),
                                            header.column.getCanSort() && (({
                                                asc: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_8/* ["default"] */.A, {
                                                    className: "size-3.5 text-muted-foreground"
                                                }),
                                                desc: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_9/* ["default"] */.A, {
                                                    className: "size-3.5 text-muted-foreground"
                                                })
                                            })[header.column.getIsSorted()] ?? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_10/* ["default"] */.A, {
                                                className: "size-3.5 text-muted-foreground/40"
                                            }))
                                        ]
                                    })
                                }, header.id))
                        }, hg.id))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_table__rspack_import_2/* .TableBody */.BF, {
                    children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_table__rspack_import_2/* .TableRow */.Hj, {
                            className: "cursor-pointer",
                            onClick: ()=>navigate({
                                    to: getDetailUrl(row.original)
                                }),
                            children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_table__rspack_import_2/* .TableCell */.nA, {
                                    children: (0,_tanstack_react_table__rspack_import_5/* .flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext())
                                }, cell.id))
                        }, row.id))
                })
            ]
        })
    });
}

__webpack_require__.d(__webpack_exports__, {
  r: () => (ResourceListTable)
});


},

};
