export const __rspack_esm_id = 4838;
export const __rspack_esm_ids = [4838];
export const __webpack_modules__ = {
23189(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var react__rspack_import_1 = __webpack_require__(58186);


function formatYaml(obj, indent = 0) {
    const prefix = "  ".repeat(indent);
    const lines = [];
    for (const [key, value] of Object.entries(obj)){
        if (value === null || value === undefined) {
            lines.push(`${prefix}${key}: null`);
        } else if (typeof value === "string") {
            if (value.includes("\n") || value.length > 80) {
                lines.push(`${prefix}${key}: |`);
                for (const line of value.split("\n")){
                    lines.push(`${prefix}  ${line}`);
                }
            } else {
                lines.push(`${prefix}${key}: ${value}`);
            }
        } else if (typeof value === "number" || typeof value === "boolean") {
            lines.push(`${prefix}${key}: ${value}`);
        } else if (Array.isArray(value)) {
            lines.push(`${prefix}${key}:`);
            for (const item of value){
                if (typeof item === "object" && item !== null) {
                    lines.push(`${prefix}-`);
                    for (const [k, v] of Object.entries(item)){
                        lines.push(formatYaml({
                            [k]: v
                        }, indent + 2));
                    }
                } else {
                    lines.push(`${prefix}- ${String(item)}`);
                }
            }
        } else if (typeof value === "object") {
            lines.push(`${prefix}${key}:`);
            lines.push(formatYaml(value, indent + 1));
        }
    }
    return lines.join("\n");
}
function YamlViewer({ obj, className }) {
    const yaml = (0,react__rspack_import_1.useMemo)(()=>formatYaml(obj), [
        obj
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("pre", {
        className: `overflow-auto rounded-md bg-muted p-4 text-xs leading-relaxed ${className ?? ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
            children: yaml
        })
    });
}

__webpack_require__.d(__webpack_exports__, {
  G: () => (YamlViewer)
});


},

};
