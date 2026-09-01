export const __rspack_esm_id = 6010;
export const __rspack_esm_ids = [6010];
export const __webpack_modules__ = {
71313(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
/**
 * Maps each repository format to a consistent set of CSS classes.
 * Uses Tailwind theme tokens so dark mode is handled automatically.
 *
 * Import this map everywhere a format colour appears — never redefine
 * per component.
 */ const formatColorMap = {
    maven: "text-sky-600 dark:text-sky-400",
    npm: "text-emerald-600 dark:text-emerald-400",
    docker: "text-blue-600 dark:text-blue-400",
    pypi: "text-amber-600 dark:text-amber-400",
    nuget: "text-violet-600 dark:text-violet-400",
    generic: "text-muted-foreground"
};
const formatBadgeColorMap = {
    maven: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
    npm: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    docker: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    pypi: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    nuget: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
    generic: "bg-muted text-muted-foreground border-border"
};
const formatAccentColorMap = {
    maven: "bg-sky-500",
    npm: "bg-emerald-500",
    docker: "bg-blue-500",
    pypi: "bg-amber-500",
    nuget: "bg-violet-500",
    generic: "bg-muted-foreground"
};

__webpack_require__.d(__webpack_exports__, {
}, {
  PF: formatColorMap,
  US: formatBadgeColorMap,
  pJ: formatAccentColorMap
});


},

};
