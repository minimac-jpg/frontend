export const __rspack_esm_id = 9932;
export const __rspack_esm_ids = [9932];
export const __webpack_modules__ = {
43815(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ SettingsIndexRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.mjs
var user = __webpack_require__(25546);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/key-round.mjs
var key_round = __webpack_require__(71571);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/credit-card.mjs
var credit_card = __webpack_require__(73143);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trash-2.mjs
var trash_2 = __webpack_require__(66838);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./src/components/ui/dialog.tsx
var dialog = __webpack_require__(70355);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(16479);
// EXTERNAL MODULE: ./src/components/ui/separator.tsx
var separator = __webpack_require__(73594);
;// CONCATENATED MODULE: ./src/components/settings/account-section.tsx
"use client";






function AccountSection() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "rounded-xl border bg-card shadow-sm",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "px-6 py-4 border-b",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                        className: "text-base font-semibold",
                        children: "Account Security"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-sm text-muted-foreground mt-0.5",
                        children: "Manage your password and authentication"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "p-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm font-medium",
                                        children: "Password"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Last changed 3 months ago"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .Dialog */.lG, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTrigger */.zM, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                            variant: "outline",
                                            size: "sm",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(key_round/* ["default"] */.A, {
                                                    className: "size-4"
                                                }),
                                                "Reset Password"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogContent */.Cf, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogHeader */.c7, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTitle */.L3, {
                                                        children: "Reset Password"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogDescription */.rr, {
                                                        children: "Enter your current password and a new password."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "grid gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                className: "text-sm font-medium",
                                                                htmlFor: "current-pw",
                                                                children: "Current Password"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                                id: "current-pw",
                                                                type: "password"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                className: "text-sm font-medium",
                                                                htmlFor: "new-pw",
                                                                children: "New Password"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                                id: "new-pw",
                                                                type: "password"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "grid gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                className: "text-sm font-medium",
                                                                htmlFor: "confirm-pw",
                                                                children: "Confirm Password"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                                id: "confirm-pw",
                                                                type: "password"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogFooter */.Es, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogClose */.HM, {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                            variant: "outline",
                                                            children: "Cancel"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                        children: "Update Password"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(separator/* .Separator */.w, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-sm font-medium",
                                        children: "Two-factor Authentication"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Add an extra layer of security to your account"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                variant: "outline",
                                size: "sm",
                                children: "Enable"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/crown.mjs
var crown = __webpack_require__(89168);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/ban.mjs
var ban = __webpack_require__(44818);
;// CONCATENATED MODULE: ./src/components/settings/billing-section.tsx
"use client";





function BillingSection() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "rounded-xl border bg-card shadow-sm",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "px-6 py-4 border-b",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "text-base font-semibold",
                                children: "Plan"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-sm text-muted-foreground mt-0.5",
                                children: "Your current subscription plan"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "p-6 space-y-4",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between rounded-lg border bg-muted/30 p-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "flex size-10 items-center justify-center rounded-lg bg-amber-500/10",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(crown/* ["default"] */.A, {
                                                className: "size-5 text-amber-500"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-sm font-semibold",
                                                    children: "Pro Plan"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "$29 / month \xb7 Renews on Jul 15, 2026"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .Dialog */.lG, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTrigger */.zM, {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                variant: "outline",
                                                size: "sm",
                                                children: "Manage"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogContent */.Cf, {
                                            className: "sm:max-w-2xl",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogHeader */.c7, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTitle */.L3, {
                                                            children: "Subscription"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogDescription */.rr, {
                                                            children: "Choose the plan that fits your needs"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "grid gap-4 sm:grid-cols-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative flex flex-col rounded-xl border bg-card p-5 shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "text-sm font-semibold",
                                                                            children: "Free"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "mt-1 text-2xl font-bold",
                                                                            children: "$0"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "text-xs text-muted-foreground",
                                                                            children: "/month"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                    className: "mb-6 space-y-2 text-xs text-muted-foreground",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "size-1.5 rounded-full bg-muted-foreground"
                                                                                }),
                                                                                "Up to 3 projects"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "size-1.5 rounded-full bg-muted-foreground"
                                                                                }),
                                                                                "5 builds per day"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "size-1.5 rounded-full bg-muted-foreground"
                                                                                }),
                                                                                "1 concurrent worker"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "size-1.5 rounded-full bg-muted-foreground"
                                                                                }),
                                                                                "7-day history"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "mt-auto",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                                        variant: "outline",
                                                                        className: "w-full",
                                                                        size: "sm",
                                                                        disabled: true,
                                                                        children: "Current"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative flex flex-col rounded-xl border-2 border-primary bg-card p-5 shadow-md",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-semibold text-primary-foreground",
                                                                    children: "Current Plan"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "text-sm font-semibold",
                                                                            children: "Pro"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "mt-1 text-2xl font-bold",
                                                                            children: "$29"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "text-xs text-muted-foreground",
                                                                            children: "/month"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                    className: "mb-6 space-y-2 text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "size-1.5 rounded-full bg-primary"
                                                                                }),
                                                                                "Unlimited projects"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "size-1.5 rounded-full bg-primary"
                                                                                }),
                                                                                "Unlimited builds"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "size-1.5 rounded-full bg-primary"
                                                                                }),
                                                                                "10 concurrent workers"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "size-1.5 rounded-full bg-primary"
                                                                                }),
                                                                                "90-day history"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "size-1.5 rounded-full bg-primary"
                                                                                }),
                                                                                "Priority support"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "mt-auto",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                                                        className: "w-full",
                                                                        size: "sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(crown/* ["default"] */.A, {
                                                                                className: "size-3"
                                                                            }),
                                                                            "Active"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "relative flex flex-col rounded-xl border bg-card p-5 shadow-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "text-sm font-semibold",
                                                                            children: "Enterprise"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "mt-1 text-2xl font-bold",
                                                                            children: "$99"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "text-xs text-muted-foreground",
                                                                            children: "/month"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                    className: "mb-6 space-y-2 text-xs text-muted-foreground",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "size-1.5 rounded-full bg-muted-foreground"
                                                                                }),
                                                                                "Everything in Pro"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "size-1.5 rounded-full bg-muted-foreground"
                                                                                }),
                                                                                "Unlimited workers"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "size-1.5 rounded-full bg-muted-foreground"
                                                                                }),
                                                                                "Unlimited history"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "size-1.5 rounded-full bg-muted-foreground"
                                                                                }),
                                                                                "SSO & SAML"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                    className: "size-1.5 rounded-full bg-muted-foreground"
                                                                                }),
                                                                                "Dedicated support"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "mt-auto",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                                        variant: "outline",
                                                                        className: "w-full",
                                                                        size: "sm",
                                                                        children: "Upgrade"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between rounded-lg border bg-muted/30 px-4 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center gap-2 text-xs text-muted-foreground",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ban/* ["default"] */.A, {
                                                                    className: "size-3"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    children: "Cancel anytime — no lock-in contracts"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            className: "text-red-600 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ban/* ["default"] */.A, {
                                                                    className: "size-3"
                                                                }),
                                                                "Cancel Subscription"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogFooter */.Es, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogClose */.HM, {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                            variant: "outline",
                                                            className: "w-full sm:w-auto",
                                                            children: "Close"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "rounded-xl border bg-card shadow-sm",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "px-6 py-4 border-b",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "text-base font-semibold",
                                children: "Payment Method"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-sm text-muted-foreground mt-0.5",
                                children: "Your default payment method"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "p-6 space-y-4",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between rounded-lg border p-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "flex size-10 items-center justify-center rounded-lg bg-muted",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(credit_card/* ["default"] */.A, {
                                                className: "size-5 text-muted-foreground"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-sm font-medium",
                                                    children: "Visa ending in 4242"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Expires 12/2028"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .Dialog */.lG, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTrigger */.zM, {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                variant: "outline",
                                                size: "sm",
                                                children: "Change"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogContent */.Cf, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogHeader */.c7, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTitle */.L3, {
                                                            children: "Change Payment Method"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogDescription */.rr, {
                                                            children: "Update your default payment method."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "grid gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "grid gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                    className: "text-sm font-medium",
                                                                    htmlFor: "card-number",
                                                                    children: "Card Number"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                                    id: "card-number",
                                                                    placeholder: "0000 0000 0000 0000"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "grid gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                            className: "text-sm font-medium",
                                                                            htmlFor: "expiry",
                                                                            children: "Expiry"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                                            id: "expiry",
                                                                            placeholder: "MM/YY"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "grid gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                                            className: "text-sm font-medium",
                                                                            htmlFor: "cvc",
                                                                            children: "CVC"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                                            id: "cvc",
                                                                            placeholder: "123"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogFooter */.Es, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogClose */.HM, {
                                                            asChild: true,
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                                variant: "outline",
                                                                children: "Cancel"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                            children: "Save"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/settings/danger-section.tsx
"use client";





function DangerSection() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "rounded-xl border border-red-200 bg-card shadow-sm dark:border-red-900/50",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "px-6 py-4 border-b border-red-200 dark:border-red-900/50",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                        className: "text-base font-semibold text-red-600 dark:text-red-400",
                        children: "Danger Zone"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-sm text-muted-foreground mt-0.5",
                        children: "Irreversible account actions"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "p-6 space-y-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center justify-between rounded-lg border border-red-200 dark:border-red-900/50 p-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-sm font-medium text-red-600 dark:text-red-400",
                                    children: "Delete Account"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "Permanently delete your account and all associated data"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .Dialog */.lG, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTrigger */.zM, {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(trash_2/* ["default"] */.A, {
                                                className: "size-4"
                                            }),
                                            "Delete"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogContent */.Cf, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogHeader */.c7, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTitle */.L3, {
                                                    children: "Delete Account"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogDescription */.rr, {
                                                    children: "This action cannot be undone. All your projects, builds, and data will be permanently removed."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                    className: "text-sm font-medium",
                                                    htmlFor: "confirm-delete",
                                                    children: [
                                                        "Type ",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "font-semibold",
                                                            children: "delete my account"
                                                        }),
                                                        " to confirm"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                    id: "confirm-delete",
                                                    placeholder: "delete my account"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogFooter */.Es, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogClose */.HM, {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                                        variant: "outline",
                                                        children: "Cancel"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                                    className: "bg-red-600 hover:bg-red-700 text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(trash_2/* ["default"] */.A, {
                                                            className: "size-4"
                                                        }),
                                                        "Delete Account"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/camera.mjs
var camera = __webpack_require__(47174);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/check.mjs
var check = __webpack_require__(23853);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/code.mjs
var code = __webpack_require__(36908);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/mail.mjs
var mail = __webpack_require__(90494);
// EXTERNAL MODULE: ./src/components/ui/avatar.tsx
var avatar = __webpack_require__(97984);
;// CONCATENATED MODULE: ./src/components/settings/profile-section.tsx
"use client";







function ProfileSection() {
    const [displayName, setDisplayName] = (0,react.useState)("Alex Morgan");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "rounded-xl border bg-card shadow-sm",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "px-6 py-4 border-b",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "text-base font-semibold",
                                children: "Profile"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-sm text-muted-foreground mt-0.5",
                                children: "Your public profile information"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "p-6 space-y-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(avatar/* .Avatar */.eu, {
                                                className: "size-16",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(avatar/* .AvatarImage */.BK, {
                                                        src: "",
                                                        alt: "Avatar"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(avatar/* .AvatarFallback */.q5, {
                                                        className: "text-base bg-muted",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(user/* ["default"] */.A, {
                                                            className: "size-6 text-muted-foreground"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                                type: "button",
                                                className: "absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full border bg-background shadow-sm hover:bg-gray-200/90 transition-colors",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(camera/* ["default"] */.A, {
                                                    className: "size-3"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-sm font-medium",
                                                children: displayName
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-xs text-muted-foreground",
                                                children: "JPG, GIF or PNG. Max 2MB."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(separator/* .Separator */.w, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid gap-4 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                className: "text-sm font-medium",
                                                htmlFor: "display-name",
                                                children: "Display Name"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                id: "display-name",
                                                value: displayName,
                                                onChange: (e)=>setDisplayName(e.target.value)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                className: "text-sm font-medium",
                                                htmlFor: "email",
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                                id: "email",
                                                value: "alex@example.com",
                                                readOnly: true,
                                                className: "bg-muted/50"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(check/* ["default"] */.A, {
                                            className: "size-4"
                                        }),
                                        "Save Changes"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "rounded-xl border bg-card shadow-sm",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "px-6 py-4 border-b",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: "text-base font-semibold",
                                children: "Connected Accounts"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-sm text-muted-foreground mt-0.5",
                                children: "Link your accounts for single sign-on"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-between rounded-lg border p-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(code/* ["default"] */.A, {
                                                className: "size-5 text-muted-foreground"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "text-sm font-medium",
                                                        children: "GitHub"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "alexmorgan"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                        variant: "outline",
                                        size: "sm",
                                        children: "Connected"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-between rounded-lg border p-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(mail/* ["default"] */.A, {
                                                className: "size-5 text-muted-foreground"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "text-sm font-medium",
                                                        children: "Google"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "Not connected"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                        variant: "outline",
                                        size: "sm",
                                        children: "Connect"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/settings/settings-page.tsx
"use client";







const sections = [
    {
        id: "profile",
        label: "Profile",
        icon: user/* ["default"] */.A
    },
    {
        id: "account",
        label: "Account",
        icon: key_round/* ["default"] */.A
    },
    {
        id: "billing",
        label: "Billing",
        icon: credit_card/* ["default"] */.A
    },
    {
        id: "danger",
        label: "Danger Zone",
        icon: trash_2/* ["default"] */.A
    }
];
function SettingsPage() {
    const [activeSection, setActiveSection] = (0,react.useState)("profile");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "text-2xl font-semibold tracking-tight",
                        children: "Settings"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: "Manage your account and workspace settings"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col gap-8 lg:flex-row lg:gap-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                        className: "flex shrink-0 gap-1 overflow-x-auto lg:w-48 lg:flex-col",
                        children: sections.map(({ id, label, icon: Icon })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                type: "button",
                                onClick: ()=>setActiveSection(id),
                                className: `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-left whitespace-nowrap transition-colors ${activeSection === id ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-gray-200/90"}`,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Icon, {
                                        className: "size-4 shrink-0"
                                    }),
                                    label
                                ]
                            }, id))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex-1 space-y-8",
                        children: [
                            activeSection === "profile" && /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileSection, {}),
                            activeSection === "account" && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountSection, {}),
                            activeSection === "billing" && /*#__PURE__*/ (0,jsx_runtime.jsx)(BillingSection, {}),
                            activeSection === "danger" && /*#__PURE__*/ (0,jsx_runtime.jsx)(DangerSection, {})
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/routes/settings.index.tsx?tsr-split=component


function SettingsIndexRoute() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsPage, {});
}



},

};
