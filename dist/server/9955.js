export const __rspack_esm_id = 9955;
export const __rspack_esm_ids = [9955];
export const __webpack_modules__ = {
87966(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ SettingsOrganizationRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var useNavigate = __webpack_require__(45178);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.mjs
var loader_circle = __webpack_require__(67255);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/building-2.mjs
var building_2 = __webpack_require__(94614);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user-round-plus.mjs
var user_round_plus = __webpack_require__(82506);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user-round.mjs
var user_round = __webpack_require__(36661);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/log-out.mjs
var log_out = __webpack_require__(30240);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield-check.mjs
var shield_check = __webpack_require__(90551);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/copy.mjs
var copy = __webpack_require__(41084);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/mail.mjs
var mail = __webpack_require__(90494);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./src/components/ui/badge.tsx
var badge = __webpack_require__(79318);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./src/components/ui/dialog.tsx
var dialog = __webpack_require__(70355);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(16479);
// EXTERNAL MODULE: ./src/components/ui/label.tsx
var label = __webpack_require__(16533);
// EXTERNAL MODULE: ./src/components/ui/select.tsx
var ui_select = __webpack_require__(24219);
// EXTERNAL MODULE: ./src/components/ui/toast.tsx
var toast = __webpack_require__(87202);
// EXTERNAL MODULE: ./src/hooks/use-workspace.ts
var use_workspace = __webpack_require__(20221);
// EXTERNAL MODULE: ./src/lib/auth-client.ts
var auth_client = __webpack_require__(82915);
;// CONCATENATED MODULE: ./src/components/settings/organization-settings.tsx
"use client";













function roleBadgeVariant(role) {
    if (role === "owner") return "default";
    if (role === "admin") return "secondary";
    return "outline";
}
function OrganizationSettings() {
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const { user, activeOrganization, isPersonal, isLoading, setActiveOrganization } = (0,use_workspace/* .useWorkspace */.h)();
    const { data: fullOrganization, isPending: fullOrgPending, refetch: refetchActiveOrganization } = auth_client/* .authClient.useActiveOrganization */.y.useActiveOrganization();
    const [inviteOpen, setInviteOpen] = (0,react.useState)(false);
    const [inviteEmail, setInviteEmail] = (0,react.useState)("");
    const [inviteRole, setInviteRole] = (0,react.useState)("member");
    const [inviting, setInviting] = (0,react.useState)(false);
    const [invitationLink, setInvitationLink] = (0,react.useState)(null);
    const [busyMemberId, setBusyMemberId] = (0,react.useState)(null);
    const [leaving, setLeaving] = (0,react.useState)(false);
    if (isLoading || fullOrgPending) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex items-center justify-center p-16 text-muted-foreground",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* ["default"] */.A, {
                className: "size-5 animate-spin"
            })
        });
    }
    if (isPersonal || !activeOrganization || !fullOrganization) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col items-center gap-3 rounded-xl border border-dashed p-12 text-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(building_2/* ["default"] */.A, {
                    className: "size-8 text-muted-foreground"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                    className: "text-lg font-semibold",
                    children: "No organization selected"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "max-w-sm text-sm text-muted-foreground",
                    children: "You're currently in your personal workspace. Switch to an organization using the workspace switcher in the sidebar, or create one."
                })
            ]
        });
    }
    const organizationId = activeOrganization.id;
    const members = fullOrganization.members ?? [];
    const currentMember = user != null ? members.find((member)=>member.userId === user.id) ?? null : null;
    const myRole = currentMember?.role ?? "member";
    const isOwner = myRole === "owner";
    const canManage = isOwner || myRole === "admin";
    const handleInvite = async ()=>{
        if (!inviteEmail.trim()) return;
        try {
            setInviting(true);
            const { data, error } = await auth_client/* .authClient.organization.inviteMember */.y.organization.inviteMember({
                email: inviteEmail.trim(),
                role: inviteRole,
                organizationId,
                resend: true
            });
            if (error) throw error;
            const id = data?.id ?? null;
            setInvitationLink(id ? `${window.location.origin}/invite/${id}` : null);
            toast/* .toast.success */.oR.success(`Invitation created for ${inviteEmail.trim()}`);
            setInviteEmail("");
        } catch (err) {
            toast/* .toast.error */.oR.error((0,toast/* .errorToMessage */.lV)(err));
        } finally{
            setInviting(false);
        }
    };
    const handleRoleChange = async (memberId, role)=>{
        try {
            setBusyMemberId(memberId);
            const { error } = await auth_client/* .authClient.organization.updateMemberRole */.y.organization.updateMemberRole({
                memberId,
                role,
                organizationId
            });
            if (error) throw error;
            toast/* .toast.success */.oR.success("Member role updated");
            await refetchActiveOrganization();
        } catch (err) {
            toast/* .toast.error */.oR.error((0,toast/* .errorToMessage */.lV)(err));
        } finally{
            setBusyMemberId(null);
        }
    };
    const handleRemoveMember = async (memberId, email)=>{
        try {
            setBusyMemberId(memberId);
            const { error } = await auth_client/* .authClient.organization.removeMember */.y.organization.removeMember({
                memberIdOrEmail: memberId,
                organizationId
            });
            if (error) throw error;
            toast/* .toast.success */.oR.success(`Removed ${email}`);
            await refetchActiveOrganization();
        } catch (err) {
            toast/* .toast.error */.oR.error((0,toast/* .errorToMessage */.lV)(err));
        } finally{
            setBusyMemberId(null);
        }
    };
    const handleLeave = async ()=>{
        try {
            setLeaving(true);
            const { error } = await auth_client/* .authClient.organization.leave */.y.organization.leave({
                organizationId
            });
            if (error) throw error;
            await setActiveOrganization(null);
            toast/* .toast.success */.oR.success(`Left ${activeOrganization.name}`);
            await refetchActiveOrganization();
        } catch (err) {
            toast/* .toast.error */.oR.error((0,toast/* .errorToMessage */.lV)(err));
        } finally{
            setLeaving(false);
        }
    };
    const copyInvitationLink = async ()=>{
        if (!invitationLink) return;
        await navigator.clipboard.writeText(invitationLink);
        toast/* .toast.success */.oR.success("Invitation link copied");
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(toast/* .Toaster */.l$, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "rounded-xl border bg-card text-card-foreground shadow-sm",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-center justify-between gap-4 border-b p-6",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(building_2/* ["default"] */.A, {
                                                    className: "size-5"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                                        className: "text-lg font-semibold leading-tight",
                                                        children: activeOrganization.name
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: [
                                                            "@",
                                                            activeOrganization.slug
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    canManage && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                        onClick: ()=>{
                                            setInvitationLink(null);
                                            setInviteOpen(true);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(user_round_plus/* ["default"] */.A, {
                                                className: "size-4"
                                            }),
                                            "Invite member"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "divide-y",
                                children: members.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "p-6 text-sm text-muted-foreground",
                                    children: "No members found."
                                }) : members.map((member)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-3 p-4 px-6",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(user_round/* ["default"] */.A, {
                                                    className: "size-4 text-muted-foreground"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "grid flex-1 min-w-0 text-left text-sm leading-tight",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "truncate font-medium",
                                                        children: [
                                                            member.user?.name ?? member.userId,
                                                            member.userId === user?.id && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                className: "ml-1.5 text-xs text-muted-foreground",
                                                                children: "(you)"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "truncate text-xs text-muted-foreground",
                                                        children: member.user?.email ?? ""
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* .Badge */.E, {
                                                variant: roleBadgeVariant(member.role),
                                                children: member.role
                                            }),
                                            canManage && member.role !== "owner" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* .Select */.l6, {
                                                        value: member.role,
                                                        onValueChange: (value)=>handleRoleChange(member.id, value),
                                                        disabled: busyMemberId === member.id,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectTrigger */.bq, {
                                                                className: "h-8 w-28",
                                                                "aria-label": "Change role",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectValue */.yv, {
                                                                    placeholder: "Role"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* .SelectContent */.gC, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                                                        value: "admin",
                                                                        children: "Admin"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                                                        value: "member",
                                                                        children: "Member"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                                        variant: "outline",
                                                        size: "sm",
                                                        onClick: ()=>handleRemoveMember(member.id, member.user?.email ?? member.userId),
                                                        disabled: busyMemberId === member.id,
                                                        children: [
                                                            busyMemberId === member.id && /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* ["default"] */.A, {
                                                                className: "size-4 animate-spin"
                                                            }),
                                                            "Remove"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, member.id))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "rounded-xl border bg-card text-card-foreground shadow-sm",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center justify-between gap-4 p-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: "flex size-10 items-center justify-center rounded-lg bg-muted",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(log_out/* ["default"] */.A, {
                                                className: "size-5 text-muted-foreground"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                    className: "text-sm font-semibold leading-tight",
                                                    children: "Leave organization"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: isOwner ? "You are the owner — transfer ownership to another member before leaving." : "You will lose access to this workspace's projects and builds."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                    variant: "destructive",
                                    onClick: handleLeave,
                                    disabled: isOwner || leaving,
                                    children: [
                                        leaving && /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* ["default"] */.A, {
                                            className: "size-4 animate-spin"
                                        }),
                                        "Leave"
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .Dialog */.lG, {
                open: inviteOpen,
                onOpenChange: setInviteOpen,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogContent */.Cf, {
                    className: "sm:max-w-md",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogHeader */.c7, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogTitle */.L3, {
                                    children: "Invite member"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* .DialogDescription */.rr, {
                                    children: [
                                        "Inviting to ",
                                        activeOrganization.name,
                                        ". Share the generated link with the invitee."
                                    ]
                                })
                            ]
                        }),
                        invitationLink ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid gap-3 py-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shield_check/* ["default"] */.A, {
                                            className: "size-5 shrink-0 text-green-600"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-sm",
                                            children: "Invitation created. Share this link with the invitee:"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                            className: "flex-1 truncate rounded-md border bg-muted px-3 py-2 text-xs",
                                            children: invitationLink
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: copyInvitationLink,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(copy/* ["default"] */.A, {
                                                    className: "size-4"
                                                }),
                                                "Copy"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid gap-4 py-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(label/* .Label */.J, {
                                            htmlFor: "invite-email-input",
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                            id: "invite-email-input",
                                            type: "email",
                                            placeholder: "teammate@example.com",
                                            value: inviteEmail,
                                            onChange: (e)=>setInviteEmail(e.target.value),
                                            disabled: inviting
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(label/* .Label */.J, {
                                            htmlFor: "invite-role-select",
                                            children: "Role"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* .Select */.l6, {
                                            value: inviteRole,
                                            onValueChange: (value)=>setInviteRole(value),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectTrigger */.bq, {
                                                    id: "invite-role-select",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectValue */.yv, {
                                                        placeholder: "Role"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* .SelectContent */.gC, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                                            value: "member",
                                                            children: "Member"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* .SelectItem */.eb, {
                                                            value: "admin",
                                                            children: "Admin"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* .DialogFooter */.Es, {
                            children: invitationLink ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                        variant: "outline",
                                        onClick: ()=>navigate({
                                                to: "/settings/organization"
                                            }),
                                        children: "Done"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                        onClick: ()=>{
                                            setInvitationLink(null);
                                            setInviteEmail("");
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(mail/* ["default"] */.A, {
                                                className: "size-4"
                                            }),
                                            "Invite another"
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* .Button */.$, {
                                        variant: "outline",
                                        onClick: ()=>setInviteOpen(false),
                                        disabled: inviting,
                                        children: "Cancel"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                        onClick: handleInvite,
                                        disabled: inviting || !inviteEmail.trim(),
                                        children: [
                                            inviting && /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* ["default"] */.A, {
                                                className: "size-4 animate-spin"
                                            }),
                                            "Send invitation"
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/routes/settings.organization.tsx?tsr-split=component


function SettingsOrganizationRoute() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col gap-6 p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "text-2xl font-semibold tracking-tight",
                        children: "Organization"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "mt-1 text-sm text-muted-foreground",
                        children: "Manage members, roles, and invitations for your workspace"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(OrganizationSettings, {})
        ]
    });
}



},

};
