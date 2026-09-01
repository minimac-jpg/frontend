export const __rspack_esm_id = 8753;
export const __rspack_esm_ids = [8753];
export const __webpack_modules__ = {
9176(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(95170);
/* import */ var _tanstack_react_router__rspack_import_7 = __webpack_require__(38639);
/* import */ var lucide_react__rspack_import_8 = __webpack_require__(67255);
/* import */ var lucide_react__rspack_import_9 = __webpack_require__(34252);
/* import */ var lucide_react__rspack_import_10 = __webpack_require__(16184);
/* import */ var react__rspack_import_1 = __webpack_require__(58186);
/* import */ var _components_ui_button__rspack_import_2 = __webpack_require__(39839);
/* import */ var _components_ui_toast__rspack_import_3 = __webpack_require__(87202);
/* import */ var _state_auth_store__rspack_import_4 = __webpack_require__(2639);
/* import */ var _lib_auth_client__rspack_import_5 = __webpack_require__(82915);
/* import */ var _Users_mark_Maple_frontend_src_routes_invite_$invitationId_tsx__rspack_import_6 = __webpack_require__(76129);








function InviteRoute() {
    const { invitationId } = _Users_mark_Maple_frontend_src_routes_invite_$invitationId_tsx__rspack_import_6/* .Route.useParams */.q.useParams();
    const { isAuthenticated } = (0,_state_auth_store__rspack_import_4/* .useAuthStore */.n)();
    const [status, setStatus] = (0,react__rspack_import_1.useState)("pending");
    const [message, setMessage] = (0,react__rspack_import_1.useState)(null);
    const attempted = (0,react__rspack_import_1.useRef)(false);
    (0,react__rspack_import_1.useEffect)(()=>{
        if (!isAuthenticated || attempted.current) return;
        attempted.current = true;
        (async ()=>{
            try {
                const { data, error } = await _lib_auth_client__rspack_import_5/* .authClient.organization.acceptInvitation */.y.organization.acceptInvitation({
                    invitationId
                });
                if (error) throw error;
                const organizationId = data?.member?.organizationId;
                if (organizationId) {
                    const setActive = await _lib_auth_client__rspack_import_5/* .authClient.organization.setActive */.y.organization.setActive({
                        organizationId
                    });
                    if (setActive.error) throw setActive.error;
                }
                setStatus("accepted");
                _components_ui_toast__rspack_import_3/* .toast.success */.oR.success("Invitation accepted");
            } catch (err) {
                setStatus("error");
                setMessage((0,_components_ui_toast__rspack_import_3/* .errorToMessage */.lV)(err));
            }
        })();
    }, [
        isAuthenticated,
        invitationId
    ]);
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: "flex min-h-svh flex-col items-center justify-center gap-4 bg-muted p-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                    className: "text-xl font-semibold",
                    children: "Sign in to accept invitation"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                    className: "max-w-sm text-center text-sm text-muted-foreground",
                    children: "You need to sign in with the invited email address before accepting this invitation."
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_button__rspack_import_2/* .Button */.$, {
                    asChild: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_tanstack_react_router__rspack_import_7/* .Link */.N_, {
                        to: "/login",
                        search: {
                            redirect: `/invite/${invitationId}`
                        },
                        children: "Sign in"
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "flex min-h-svh flex-col items-center justify-center gap-4 bg-muted p-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_toast__rspack_import_3/* .Toaster */.l$, {}),
            status === "pending" && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_8/* ["default"] */.A, {
                        className: "size-8 animate-spin text-muted-foreground"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Accepting invitation…"
                    })
                ]
            }),
            status === "accepted" && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_9/* ["default"] */.A, {
                        className: "size-8 text-green-600"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                        className: "text-xl font-semibold",
                        children: "Invitation accepted"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "text-sm text-muted-foreground",
                        children: "You've joined the organization."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_button__rspack_import_2/* .Button */.$, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_tanstack_react_router__rspack_import_7/* .Link */.N_, {
                            to: "/settings/organization",
                            children: "Go to organization settings"
                        })
                    })
                ]
            }),
            status === "error" && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(lucide_react__rspack_import_10/* ["default"] */.A, {
                        className: "size-8 text-destructive"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                        className: "text-xl font-semibold",
                        children: "Invitation failed"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "max-w-sm text-center text-sm text-muted-foreground",
                        children: message ?? "This invitation may have expired, been canceled, or was issued for a different email address."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_ui_button__rspack_import_2/* .Button */.$, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_tanstack_react_router__rspack_import_7/* .Link */.N_, {
                            to: "/",
                            children: "Back to dashboard"
                        })
                    })
                ]
            })
        ]
    });
}



__webpack_require__.d(__webpack_exports__, {
  component: () => (InviteRoute)
});


},

};
