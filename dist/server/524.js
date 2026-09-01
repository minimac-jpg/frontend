export const __rspack_esm_id = 524;
export const __rspack_esm_ids = [524];
export const __webpack_modules__ = {
73735(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _tanstack_react_router__rspack_import_8 = __webpack_require__(22679);
/* import */ var _tanstack_react_router__rspack_import_9 = __webpack_require__(45178);
/* import */ var react__rspack_import_1 = __webpack_require__(58186);
/* import */ var _components_common_button__rspack_import_2 = __webpack_require__(37208);
/* import */ var _components_common_error_state__rspack_import_3 = __webpack_require__(46128);
/* import */ var _components_common_loading_state__rspack_import_4 = __webpack_require__(74430);
/* import */ var _components_layout_page_shell__rspack_import_5 = __webpack_require__(63571);
/* import */ var _components_secrets_secret_edit_form__rspack_import_6 = __webpack_require__(29658);
/* import */ var _hooks_use_secrets__rspack_import_7 = __webpack_require__(72566);









function statusColor(status) {
    switch(status){
        case "active":
            return "badge-success";
        case "disabled":
            return "badge-warning";
        case "expired":
            return "badge-danger";
        case "revoked":
            return "badge-neutral";
        case "rotating":
            return "badge-info";
        default:
            return "badge-neutral";
    }
}
function kindLabel(kind) {
    const labels = {
        token: "Token",
        password: "Password",
        ssh_key: "SSH Key",
        oidc: "OIDC",
        cloud_credentials: "Cloud Credentials",
        database_connection_string: "Database Connection",
        docker_registry: "Docker Registry",
        kubernetes_service_account: "K8s Service Account",
        certificate: "Certificate",
        generic: "Generic"
    };
    return labels[kind] ?? kind;
}
function SecretDetailRoute() {
    const { secretId } = (0,_tanstack_react_router__rspack_import_8/* .useParams */.g)({
        from: "/secrets/$secretId"
    });
    const navigate = (0,_tanstack_react_router__rspack_import_9/* .useNavigate */.Z)();
    const { data: secret, isLoading, error } = (0,_hooks_use_secrets__rspack_import_7/* .useSecret */.SY)(secretId);
    const { data: usage } = (0,_hooks_use_secrets__rspack_import_7/* .useSecretUsage */.r6)(secretId);
    const { mutateAsync: deleteSecret, isPending: isDeleting } = (0,_hooks_use_secrets__rspack_import_7/* .useDeleteSecret */.jQ)();
    const { mutateAsync: rotateSecret, isPending: isRotating } = (0,_hooks_use_secrets__rspack_import_7/* .useRotateSecret */.tj)();
    const [showEditForm, setShowEditForm] = (0,react__rspack_import_1.useState)(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = (0,react__rspack_import_1.useState)(false);
    const [rotateReason, setRotateReason] = (0,react__rspack_import_1.useState)("");
    if (isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_layout_page_shell__rspack_import_5/* .PageShell */.q, {
            title: "Secret",
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_common_loading_state__rspack_import_4/* .LoadingState */.G, {
                message: "Loading secret..."
            })
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_layout_page_shell__rspack_import_5/* .PageShell */.q, {
            title: "Secret",
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_common_error_state__rspack_import_3/* .ErrorState */.W, {
                message: error.message
            })
        });
    }
    if (!secret) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_layout_page_shell__rspack_import_5/* .PageShell */.q, {
            title: "Secret",
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_common_error_state__rspack_import_3/* .ErrorState */.W, {
                message: "Secret not found"
            })
        });
    }
    const handleDelete = async ()=>{
        try {
            console.log("[SecretDetail] Deleting secret:", secret.id);
            await deleteSecret(secret.id);
            console.log("[SecretDetail] Delete succeeded");
            navigate({
                to: "/secrets"
            });
        } catch (err) {
            console.error("[SecretDetail] Delete failed:", err);
        // error handled by mutation
        }
    };
    const handleRotate = async ()=>{
        try {
            console.log("[SecretDetail] Rotating secret:", secret.id);
            await rotateSecret({
                id: secret.id,
                reason: rotateReason || undefined
            });
            console.log("[SecretDetail] Rotate succeeded");
            setRotateReason("");
        } catch (err) {
            console.error("[SecretDetail] Rotate failed:", err);
        // error handled by mutation
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_components_layout_page_shell__rspack_import_5/* .PageShell */.q, {
        title: secret.name,
        subtitle: `Kind: ${kindLabel(secret.kind)}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: `badge ${statusColor(secret.status)}`,
                        children: secret.status
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: "badge badge-outline",
                        children: kindLabel(secret.kind)
                    }),
                    secret.is_rotating && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: "badge badge-info",
                        children: "rotating"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "card",
                style: {
                    marginBottom: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                        className: "card-title",
                        children: "Details"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "card-meta",
                        style: {
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "0.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                        children: "Provider:"
                                    }),
                                    " ",
                                    secret.provider
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                        children: "Version:"
                                    }),
                                    " ",
                                    secret.current_version
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                        children: "Scope:"
                                    }),
                                    " ",
                                    secret.scope
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                        children: "Owner:"
                                    }),
                                    " ",
                                    secret.owner
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                        children: "Created:"
                                    }),
                                    " ",
                                    new Date(secret.created_at).toLocaleString()
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                        children: "Updated:"
                                    }),
                                    " ",
                                    new Date(secret.updated_at).toLocaleString()
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                style: {
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_common_button__rspack_import_2/* .Button */.$, {
                        variant: "secondary",
                        size: "sm",
                        onClick: ()=>setShowEditForm(!showEditForm),
                        children: showEditForm ? "Cancel Edit" : "Edit"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_common_button__rspack_import_2/* .Button */.$, {
                        variant: "secondary",
                        size: "sm",
                        onClick: handleRotate,
                        disabled: isRotating,
                        children: isRotating ? "Rotating..." : "Rotate"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_common_button__rspack_import_2/* .Button */.$, {
                        variant: "danger",
                        size: "sm",
                        onClick: ()=>setShowDeleteConfirm(true),
                        children: "Delete"
                    })
                ]
            }),
            isRotating && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "card",
                style: {
                    marginBottom: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                        className: "project-form-label",
                        htmlFor: "rotate-reason",
                        children: "Rotation Reason"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                        id: "rotate-reason",
                        className: "project-form-input",
                        type: "text",
                        placeholder: "Optional reason for rotation",
                        value: rotateReason,
                        onChange: (e)=>setRotateReason(e.target.value)
                    })
                ]
            }),
            showDeleteConfirm && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "card",
                style: {
                    marginBottom: "1.5rem",
                    border: "1px solid #dc2626"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                        className: "project-form-title",
                        style: {
                            color: "#dc2626"
                        },
                        children: "Confirm Delete"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                        style: {
                            fontSize: "0.875rem",
                            color: "#6b7280",
                            marginBottom: "0.75rem"
                        },
                        children: [
                            'Permanently delete secret "',
                            secret.name,
                            '". This action cannot be undone.'
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: "0.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_common_button__rspack_import_2/* .Button */.$, {
                                variant: "danger",
                                size: "sm",
                                onClick: handleDelete,
                                disabled: isDeleting,
                                children: isDeleting ? "Deleting..." : "Yes, delete"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_common_button__rspack_import_2/* .Button */.$, {
                                variant: "secondary",
                                size: "sm",
                                onClick: ()=>setShowDeleteConfirm(false),
                                children: "Cancel"
                            })
                        ]
                    })
                ]
            }),
            showEditForm && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                style: {
                    marginBottom: "1.5rem"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_secrets_secret_edit_form__rspack_import_6/* .SecretEditForm */.x, {
                    secret: secret,
                    onSuccess: ()=>setShowEditForm(false)
                })
            }),
            usage && usage.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                        className: "card-title",
                        children: "Usage History"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("table", {
                        style: {
                            width: "100%",
                            fontSize: "0.875rem"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("thead", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                            style: {
                                                textAlign: "left",
                                                padding: "0.5rem"
                                            },
                                            children: "Used By"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                            style: {
                                                textAlign: "left",
                                                padding: "0.5rem"
                                            },
                                            children: "Purpose"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                            style: {
                                                textAlign: "left",
                                                padding: "0.5rem"
                                            },
                                            children: "When"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("tbody", {
                                children: usage.map((record, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                        style: {
                                            borderTop: "1px solid #e5e7eb"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                style: {
                                                    padding: "0.5rem"
                                                },
                                                children: record.used_by
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                style: {
                                                    padding: "0.5rem"
                                                },
                                                children: record.used_for
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                style: {
                                                    padding: "0.5rem"
                                                },
                                                children: new Date(record.used_at).toLocaleString()
                                            })
                                        ]
                                    }, idx))
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


__webpack_require__.d(__webpack_exports__, {
  component: () => (SecretDetailRoute)
});


},

};
