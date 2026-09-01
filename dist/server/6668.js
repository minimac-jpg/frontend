export const __rspack_esm_id = 6668;
export const __rspack_esm_ids = [6668];
export const __webpack_modules__ = {
42583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var lucide_react__rspack_import_1 = __webpack_require__(95153);
/* import */ var lucide_react__rspack_import_2 = __webpack_require__(16184);
/* import */ var lucide_react__rspack_import_3 = __webpack_require__(69313);
/* import */ var lucide_react__rspack_import_4 = __webpack_require__(70455);
/* import */ var lucide_react__rspack_import_5 = __webpack_require__(64366);
/* import */ var lucide_react__rspack_import_6 = __webpack_require__(95188);
/* import */ var _lib_utils__rspack_import_7 = __webpack_require__(80828);



const statusConfig = {
    success: {
        label: "Success",
        bg: "bg-emerald-500/10",
        text: "text-emerald-600 dark:text-emerald-400",
        dot: "bg-emerald-500",
        icon: lucide_react__rspack_import_1/* ["default"] */.A
    },
    failed: {
        label: "Failed",
        bg: "bg-red-500/10",
        text: "text-red-600 dark:text-red-400",
        dot: "bg-red-500",
        icon: lucide_react__rspack_import_2/* ["default"] */.A
    },
    running: {
        label: "Running",
        bg: "bg-blue-500/10",
        text: "text-blue-600 dark:text-blue-400",
        dot: "bg-blue-500 animate-pulse",
        icon: lucide_react__rspack_import_3/* ["default"] */.A
    },
    queued: {
        label: "Queued",
        bg: "bg-muted",
        text: "text-muted-foreground",
        dot: "bg-muted-foreground",
        icon: lucide_react__rspack_import_4/* ["default"] */.A
    },
    unstable: {
        label: "Unstable",
        bg: "bg-amber-500/10",
        text: "text-amber-600 dark:text-amber-400",
        dot: "bg-amber-500",
        icon: lucide_react__rspack_import_5/* ["default"] */.A
    },
    aborted: {
        label: "Aborted",
        bg: "bg-gray-500/10",
        text: "text-gray-500 dark:text-gray-400",
        dot: "bg-gray-400",
        icon: lucide_react__rspack_import_6/* ["default"] */.A
    },
    cancelled: {
        label: "Cancelled",
        bg: "bg-orange-500/10",
        text: "text-orange-600 dark:text-orange-400",
        dot: "bg-orange-400",
        icon: lucide_react__rspack_import_6/* ["default"] */.A
    },
    draft: {
        label: "Draft",
        bg: "bg-muted",
        text: "text-muted-foreground",
        dot: "bg-muted-foreground/50",
        icon: lucide_react__rspack_import_4/* ["default"] */.A
    },
    active: {
        label: "Active",
        bg: "bg-blue-500/10",
        text: "text-blue-600 dark:text-blue-400",
        dot: "bg-blue-500",
        icon: lucide_react__rspack_import_1/* ["default"] */.A
    },
    disabled: {
        label: "Disabled",
        bg: "bg-muted",
        text: "text-muted-foreground",
        dot: "bg-muted-foreground",
        icon: lucide_react__rspack_import_6/* ["default"] */.A
    },
    archived: {
        label: "Archived",
        bg: "bg-gray-500/10",
        text: "text-gray-500 dark:text-gray-400",
        dot: "bg-gray-400",
        icon: lucide_react__rspack_import_6/* ["default"] */.A
    }
};
function BuildStatusBadge({ status, className }) {
    const cfg = statusConfig[status];
    const Icon = cfg.icon;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
        className: (0,_lib_utils__rspack_import_7.cn)("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium", cfg.bg, cfg.text, className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                className: (0,_lib_utils__rspack_import_7.cn)("size-1.5 rounded-full", cfg.dot)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Icon, {
                className: "size-3"
            }),
            cfg.label
        ]
    });
}
function BuildStatusDot({ status }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        className: (0,_lib_utils__rspack_import_7.cn)("size-2 rounded-full", statusConfig[status].dot)
    });
}
function formatDuration(ms) {
    if (ms === null) return "—";
    const seconds = Math.floor(ms / 1000);
    if (seconds < 60) return `${seconds}s`;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (minutes < 60) return `${minutes}m ${secs}s`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
}

__webpack_require__.d(__webpack_exports__, {
  _c: () => (BuildStatusDot),
  a3: () => (formatDuration),
  cj: () => (BuildStatusBadge)
});


},

};
