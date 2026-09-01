export const __rspack_esm_id = 9067;
export const __rspack_esm_ids = [9067];
export const __webpack_modules__ = {
9638(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  component: () => (/* binding */ LoginRoute)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(95170);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/flower.mjs
var flower = __webpack_require__(17982);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.mjs
var loader_circle = __webpack_require__(67255);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/key-round.mjs
var key_round = __webpack_require__(71571);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(58186);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var useNavigate = __webpack_require__(45178);
// EXTERNAL MODULE: ./src/lib/auth-client.ts
var auth_client = __webpack_require__(82915);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(39839);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(16479);
// EXTERNAL MODULE: ./src/hooks/use-auth.ts + 1 modules
var use_auth = __webpack_require__(72646);
;// CONCATENATED MODULE: ./src/components/auth/login-form.tsx








function LoginForm({ redirectTo }) {
    const { login, isLoggingIn, loginError } = (0,use_auth/* .useAuth */.A)();
    const navigate = (0,useNavigate/* .useNavigate */.Z)();
    const [mode, setMode] = (0,react.useState)("signin");
    const [name, setName] = (0,react.useState)("");
    const [email, setEmail] = (0,react.useState)("");
    const [password, setPassword] = (0,react.useState)("");
    const [validationError, setValidationError] = (0,react.useState)(null);
    const [signupError, setSignupError] = (0,react.useState)(null);
    const [isSigningUp, setIsSigningUp] = (0,react.useState)(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setValidationError(null);
        if (!email.trim() || !password || mode === "signup" && !name.trim()) {
            setValidationError(mode === "signup" ? "Name, email and password are required" : "Email and password are required");
            return;
        }
        if (mode === "signup") {
            setIsSigningUp(true);
            setSignupError(null);
            try {
                // better-auth creates a session on signup; normalize app state by
                // running the standard sign-in flow right after.
                const { error } = await auth_client/* .authClient.signUp.email */.y.signUp.email({
                    name: name.trim(),
                    email: email.trim(),
                    password
                });
                if (error) {
                    setSignupError(error.message ?? "Signup failed");
                    return;
                }
                await login({
                    email: email.trim(),
                    password
                });
                if (redirectTo?.startsWith("/") && !redirectTo.startsWith("//")) {
                    navigate({
                        to: redirectTo,
                        replace: true
                    });
                }
            } catch  {
                setSignupError("Signup failed");
            } finally{
                setIsSigningUp(false);
            }
            return;
        }
        try {
            await login({
                email: email.trim(),
                password
            });
            if (redirectTo?.startsWith("/") && !redirectTo.startsWith("//")) {
                navigate({
                    to: redirectTo,
                    replace: true
                });
            }
        } catch  {
        // error is captured in loginError
        }
    };
    const isBusy = isLoggingIn || isSigningUp;
    const error = validationError ?? (mode === "signup" ? signupError : loginError?.message) ?? null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex flex-col gap-6",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "rounded-xl border bg-card text-card-foreground shadow-sm",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col gap-1 p-6 pb-0 text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "text-xl font-semibold whitespace-nowrap",
                            children: mode === "signup" ? "Create your account" : "Sign in to Maple"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-sm text-muted-foreground",
                            children: mode === "signup" ? "Access is limited to allowlisted emails" : "Enter your credentials to continue"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "p-6",
                    children: isBusy ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "flex items-center justify-center py-8",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* ["default"] */.A, {
                            className: "size-6 animate-spin text-muted-foreground"
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                        onSubmit: handleSubmit,
                        noValidate: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                error && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive",
                                    role: "alert",
                                    children: error
                                }),
                                mode === "signup" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                                            htmlFor: "name-input",
                                            children: "Name"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                            id: "name-input",
                                            type: "text",
                                            placeholder: "Your name",
                                            value: name,
                                            onChange: (e)=>setName(e.target.value),
                                            autoComplete: "name",
                                            disabled: isBusy
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                                            htmlFor: "email-input",
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                            id: "email-input",
                                            type: "email",
                                            placeholder: "you@example.com",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            autoComplete: "email",
                                            disabled: isBusy
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                            className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                                            htmlFor: "password-input",
                                            children: "Password"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* .Input */.p, {
                                            id: "password-input",
                                            type: "password",
                                            placeholder: "Enter your password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            autoComplete: mode === "signup" ? "new-password" : "current-password",
                                            disabled: isBusy
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* .Button */.$, {
                                    type: "submit",
                                    disabled: isBusy,
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(key_round/* ["default"] */.A, {
                                            className: "size-4"
                                        }),
                                        mode === "signup" ? "Create Account" : "Sign In"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                    type: "button",
                                    className: "text-sm text-muted-foreground underline-offset-4 hover:underline",
                                    onClick: ()=>{
                                        setMode(mode === "signup" ? "signin" : "signup");
                                        setValidationError(null);
                                        setSignupError(null);
                                    },
                                    children: mode === "signup" ? "Have an account? Sign in" : "Need an account? Sign up"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/routes/login.tsx
var routes_login = __webpack_require__(97647);
;// CONCATENATED MODULE: ./src/routes/login.tsx?tsr-split=component



function LoginRoute() {
    const { redirect } = routes_login/* .Route.useSearch */.q.useSearch();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex w-full max-w-sm flex-col gap-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-2 self-center font-medium",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(flower/* ["default"] */.A, {
                                className: "size-4"
                            })
                        }),
                        "Maple"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(LoginForm, {
                    redirectTo: redirect
                })
            ]
        })
    });
}




},

};
