export const __rspack_esm_id = 5672;
export const __rspack_esm_ids = [5672];
export const __webpack_modules__ = {
54107(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ PipelineDetailRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useParams.js
var useParams = __webpack_require__(22679);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./src/components/common/error-state.tsx
var error_state = __webpack_require__(46128);
// EXTERNAL MODULE: ./src/components/common/loading-state.tsx
var loading_state = __webpack_require__(74430);
// EXTERNAL MODULE: ./src/components/layout/page-shell.tsx
var page_shell = __webpack_require__(63571);
// EXTERNAL MODULE: ./src/components/common/button.tsx
var common_button = __webpack_require__(37208);
;// CONCATENATED MODULE: ./src/components/pipelines/pipeline-editor.tsx



const LANGUAGES = [
    "TypeScript",
    "JavaScript",
    "Python",
    "Rust"
];
function PipelineEditor({ initialSource = "", onSave, onValidate, onCompile, isSaving = false }) {
    const [source, setSource] = (0,react.useState)(initialSource);
    const [language, setLanguage] = (0,react.useState)("TypeScript");
    const handleSave = (e)=>{
        e.preventDefault();
        onSave?.(source);
    };
    const handleValidate = ()=>{
        onValidate?.(source);
    };
    const handleCompile = ()=>{
        onCompile?.(source);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "pipeline-editor",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pipeline-editor-toolbar",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        className: "pipeline-editor-label",
                        htmlFor: "pipeline-language",
                        children: "Language"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("select", {
                        id: "pipeline-language",
                        className: "pipeline-editor-select",
                        value: language,
                        onChange: (e)=>setLanguage(e.target.value),
                        children: LANGUAGES.map((lang)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("option", {
                                value: lang,
                                children: lang
                            }, lang))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "pipeline-editor-actions",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(common_button/* .Button */.$, {
                                variant: "secondary",
                                size: "sm",
                                onClick: handleValidate,
                                children: "Validate"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(common_button/* .Button */.$, {
                                variant: "secondary",
                                size: "sm",
                                onClick: handleCompile,
                                children: "Compile"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(common_button/* .Button */.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: handleSave,
                                disabled: isSaving,
                                children: isSaving ? "Saving..." : "Save"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                className: "pipeline-editor-textarea",
                value: source,
                onChange: (e)=>setSource(e.target.value),
                placeholder: "# Pipeline definition\\nstages:\\n  - name: build\\n    jobs:\\n      - name: compile\\n        run: echo compile",
                spellCheck: false,
                rows: 20
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/pipelines/pipeline-graph.tsx

function statusColor(status) {
    switch(status){
        case "completed":
            return "#16a34a";
        case "running":
            return "#2563eb";
        case "pending":
            return "#a3a3a3";
        case "failed":
            return "#dc2626";
        default:
            return "#e5e5e5";
    }
}
function PipelineGraph({ nodes, edges }) {
    if (nodes.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "pipeline-graph pipeline-graph-empty",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: "No execution plan available. Compile the pipeline to view the graph."
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "pipeline-graph",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "pipeline-graph-nodes",
                children: nodes.map((node)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "pipeline-graph-node",
                        style: {
                            borderColor: statusColor(node.status)
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "pipeline-graph-node-name",
                                children: node.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "pipeline-graph-node-type",
                                children: node.type
                            }),
                            node.status && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "pipeline-graph-node-status",
                                style: {
                                    color: statusColor(node.status)
                                },
                                children: node.status
                            })
                        ]
                    }, node.id))
            }),
            edges.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "pipeline-graph-edges",
                children: edges.map((edge, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "pipeline-graph-edge",
                        children: [
                            edge.from,
                            " → ",
                            edge.to
                        ]
                    }, i))
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/hooks/use-pipelines.ts + 4 modules
var use_pipelines = __webpack_require__(5252);
;// CONCATENATED MODULE: ./src/components/pipelines/pipeline-run-button.tsx



function PipelineRunButton({ pipelineId }) {
    const { mutateAsync: runPipeline, isPending, isSuccess, error } = (0,use_pipelines/* .useRunPipeline */.tp)();
    const handleRun = async ()=>{
        try {
            await runPipeline(pipelineId);
        } catch  {
        // error captured in mutation
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "pipeline-run-button",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(common_button/* .Button */.$, {
                variant: "primary",
                onClick: handleRun,
                disabled: isPending,
                children: isPending ? "Starting..." : "Run Pipeline"
            }),
            isSuccess && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "pipeline-run-success",
                children: "Build started"
            }),
            error && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "pipeline-run-error",
                children: error.message
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/common/badge.tsx
var badge = __webpack_require__(4763);
;// CONCATENATED MODULE: ./src/components/pipelines/pipeline-validation-panel.tsx


function PipelineValidationPanel({ isValidating, errors, isValid }) {
    if (isValidating) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "validation-panel",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "validation-panel-status",
                children: "Validating..."
            })
        });
    }
    if (isValid === null) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "validation-panel",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "validation-panel-status",
                children: "Click Validate to check your pipeline."
            })
        });
    }
    if (isValid && errors.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "validation-panel",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                    variant: "success",
                    children: "Valid"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "validation-panel-status",
                    children: "Pipeline definition is valid."
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "validation-panel",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                variant: isValid ? "success" : "error",
                children: isValid ? "Valid" : "Invalid"
            }),
            errors.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                className: "validation-panel-errors",
                children: errors.map((err, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        className: "validation-panel-error",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                variant: err.level === "error" ? "error" : "warning",
                                children: err.level
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "validation-panel-message",
                                children: err.message
                            }),
                            err.line !== undefined && /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "validation-panel-location",
                                children: [
                                    "Line ",
                                    err.line,
                                    err.column !== undefined ? `:${err.column}` : ""
                                ]
                            })
                        ]
                    }, i))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/routes/pipelines.$pipelineId.tsx?tsr-split=component











function PipelineDetailRoute() {
    const { pipelineId } = (0,useParams/* .useParams */.g)({
        from: "/pipelines/$pipelineId"
    });
    const { data: pipeline, isLoading, error } = (0,use_pipelines/* .usePipeline */.IM)(pipelineId);
    const { mutateAsync: validate, isPending: isValidating } = (0,use_pipelines/* .useValidatePipeline */.mu)();
    const { mutateAsync: compile, isPending: isCompiling } = (0,use_pipelines/* .useCompilePipeline */.fm)();
    const [validationResult, setValidationResult] = (0,react.useState)({
        isValid: null,
        errors: []
    });
    const handleValidate = async (source)=>{
        try {
            const result = await validate({
                file: source
            });
            setValidationResult({
                isValid: result.valid,
                errors: result.errors.map((msg)=>({
                        level: "error",
                        message: msg
                    }))
            });
        } catch (err) {
            setValidationResult({
                isValid: false,
                errors: [
                    {
                        level: "error",
                        message: err instanceof Error ? err.message : "Validation failed"
                    }
                ]
            });
        }
    };
    const handleCompile = async (_source)=>{
        try {
            await compile(pipelineId);
        // On success, re-fetch pipeline to get updated graph
        } catch  {
        // error handled by mutation
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(page_shell/* .PageShell */.q, {
            title: "Pipeline",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(loading_state/* .LoadingState */.G, {
                message: "Loading pipeline..."
            })
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(page_shell/* .PageShell */.q, {
            title: "Pipeline",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(error_state/* .ErrorState */.W, {
                message: error.message
            })
        });
    }
    if (!pipeline) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(page_shell/* .PageShell */.q, {
            title: "Pipeline",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(error_state/* .ErrorState */.W, {
                message: "Pipeline not found"
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(page_shell/* .PageShell */.q, {
        title: pipeline.name,
        subtitle: `Project: ${pipeline.projectId}`,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "pipeline-detail",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "pipeline-detail-main",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PipelineEditor, {
                            initialSource: "",
                            onValidate: handleValidate,
                            onCompile: handleCompile
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PipelineValidationPanel, {
                            isValidating: isValidating || isCompiling,
                            errors: validationResult.errors,
                            isValid: validationResult.isValid
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "pipeline-detail-sidebar",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PipelineGraph, {
                            nodes: [],
                            edges: []
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PipelineRunButton, {
                            pipelineId: pipelineId
                        })
                    ]
                })
            ]
        })
    });
}



},

};
