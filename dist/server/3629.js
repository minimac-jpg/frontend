export const __rspack_esm_id = 3629;
export const __rspack_esm_ids = [3629];
export const __webpack_modules__ = {
10188(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ PipelinesRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./src/components/layout/page-shell.tsx
var page_shell = __webpack_require__(63571);
// EXTERNAL MODULE: ./src/hooks/use-pipelines.ts + 4 modules
var use_pipelines = __webpack_require__(5252);
// EXTERNAL MODULE: ./src/components/common/empty-state.tsx
var empty_state = __webpack_require__(28425);
// EXTERNAL MODULE: ./src/components/common/error-state.tsx
var error_state = __webpack_require__(46128);
// EXTERNAL MODULE: ./src/components/common/loading-state.tsx
var loading_state = __webpack_require__(74430);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/link.js + 1 modules
var esm_link = __webpack_require__(38639);
// EXTERNAL MODULE: ./src/components/common/badge.tsx
var badge = __webpack_require__(4763);
;// CONCATENATED MODULE: ./src/components/pipelines/pipeline-card.tsx



function statusVariant(status) {
    switch(status){
        case "active":
        case "ready":
            return "success";
        case "compiling":
        case "validating":
            return "warning";
        case "failed":
        case "error":
            return "error";
        default:
            return "default";
    }
}
function formatDate(iso) {
    try {
        return new Date(iso).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
    } catch  {
        return iso;
    }
}
function PipelineCard({ pipeline }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(esm_link/* .Link */.N_, {
        to: "/pipelines/$pipelineId",
        params: {
            pipelineId: pipeline.id
        },
        className: "pipeline-card",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pipeline-card-header",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                        className: "pipeline-card-name",
                        children: pipeline.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                        variant: statusVariant(pipeline.status),
                        children: pipeline.status
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pipeline-card-meta",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "pipeline-card-project",
                        children: [
                            "Project: ",
                            pipeline.projectId.slice(0, 8)
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "pipeline-card-date",
                        children: [
                            "Updated ",
                            formatDate(pipeline.updatedAt)
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/pipelines/pipeline-list.tsx






function PipelineList() {
    const { data, isLoading, error } = (0,use_pipelines/* .usePipelines */.be)();
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(loading_state/* .LoadingState */.G, {
            message: "Loading pipelines..."
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(error_state/* .ErrorState */.W, {
            message: error.message
        });
    }
    if (!data || data.items.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(empty_state/* .EmptyState */.p, {
            title: "No pipelines",
            description: "Create a pipeline to start building."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "pipeline-list",
        children: data.items.map((pipeline)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PipelineCard, {
                pipeline: pipeline
            }, pipeline.id))
    });
}

;// CONCATENATED MODULE: ./src/routes/pipelines.tsx?tsr-split=component



function PipelinesRoute() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(page_shell/* .PageShell */.q, {
        title: "Pipelines",
        subtitle: "Manage your CI/CD pipelines",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PipelineList, {})
    });
}



},

};
