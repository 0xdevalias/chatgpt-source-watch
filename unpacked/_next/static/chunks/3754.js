"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3754],
  {
    63754: function (e, t, n) {
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return A;
          },
          default: function () {
            return _;
          },
          messages: function () {
            return T;
          },
        });
      var r = n(36112),
        i = n(13975),
        a = n(77634),
        o = n(26565);
      n(73040);
      var l = n(10721),
        s = n(70079),
        c = n(92804),
        u = n(12457),
        d = n(14972),
        p = n(15136),
        g = n(1755),
        f = n(99893),
        h = n(14765),
        m = n(19841),
        x = n(70671),
        v = n(32004),
        b = n(94968),
        j = n(62906),
        y = n(35250);
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : w(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function k(e) {
        var t = e.auth0Provider,
          n = e.enableNewAuthFlow,
          r = e.nextUrl,
          i = e.isStorageComplianceEnabled,
          a = (0, x.Z)();
        return (0, y.jsx)(y.Fragment, {
          children: (0, y.jsxs)("div", {
            className:
              "relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",
            children: [
              (0, y.jsx)("nav", {
                className:
                  "flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",
                children: (0, y.jsx)("h1", {
                  "aria-label": a.formatMessage(E.ariaLabel),
                  children: (0, y.jsx)("div", {
                    className:
                      "flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",
                    children: (0, y.jsx)("div", { children: j.L }),
                  }),
                }),
              }),
              (0, y.jsxs)("div", {
                className:
                  "relative flex w-full grow flex-col items-center justify-center",
                children: [
                  (0, y.jsx)("h2", {
                    className:
                      "text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",
                    children: (0, y.jsx)(v.Z, O({}, E.pageTitle)),
                  }),
                  (0, y.jsx)("div", {
                    className: "mt-5 w-full max-w-[440px]",
                    children: n
                      ? (0, y.jsx)(y.Fragment, {
                          children: (0, y.jsxs)("div", {
                            className: "flex w-full flex-col gap-3",
                            children: [
                              (0, y.jsx)(C, {
                                icon: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 48 48'%3E%3Cdefs%3E%3Cpath id='a' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath clip-path='url(%23b)' fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E\")",
                                onClick: function () {
                                  h.m9.logEvent("chatgpt_auth_log_in", null, {
                                    provider: "google",
                                  }),
                                    g.A.logEvent(f.M.authLogin, {
                                      provider: "google",
                                    }),
                                    (0, o.signIn)(
                                      "openai",
                                      { callbackUrl: r },
                                      {
                                        prompt: "login",
                                        login_hint: (0, p.W_)({
                                          idp: "google",
                                        }),
                                      }
                                    );
                                },
                                children: (0, y.jsx)(
                                  v.Z,
                                  O({}, E.continueWithGoogle)
                                ),
                              }),
                              (0, y.jsx)(C, {
                                icon: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21'%3E%3Cpath fill='%23f25022' d='M1 1h9v9H1z'/%3E%3Cpath fill='%2300a4ef' d='M1 11h9v9H1z'/%3E%3Cpath fill='%237fba00' d='M11 1h9v9h-9z'/%3E%3Cpath fill='%23ffb900' d='M11 11h9v9h-9z'/%3E%3C/svg%3E\")",
                                onClick: function () {
                                  h.m9.logEvent("chatgpt_auth_log_in", null, {
                                    provider: "microsoft",
                                  }),
                                    g.A.logEvent(f.M.authLogin, {
                                      provider: "microsoft",
                                    }),
                                    (0, o.signIn)(
                                      "openai",
                                      { callbackUrl: r },
                                      {
                                        prompt: "login",
                                        login_hint: (0, p.W_)({
                                          idp: "microsoft",
                                        }),
                                      }
                                    );
                                },
                                children: (0, y.jsx)(
                                  v.Z,
                                  O({}, E.continueWithMicrosoft)
                                ),
                              }),
                              (0, y.jsx)("div", {
                                className:
                                  "my-2 w-full border-t border-black/5",
                              }),
                              (0, y.jsxs)("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                  (0, y.jsx)(C, {
                                    primary: !0,
                                    className: "justify-center",
                                    onClick: function () {
                                      h.m9.logEvent(
                                        "chatgpt_auth_log_in",
                                        null,
                                        { provider: "openai" }
                                      ),
                                        g.A.logEvent(f.M.authLogin, {
                                          provider: "openai",
                                        }),
                                        (0, o.signIn)(
                                          "openai",
                                          { callbackUrl: r },
                                          {
                                            prompt: "login",
                                            login_hint: (0, p.W_)({
                                              idp: "openai",
                                            }),
                                          }
                                        );
                                    },
                                    children: (0, y.jsx)(v.Z, O({}, E.logIn)),
                                  }),
                                  (0, y.jsx)(C, {
                                    primary: !0,
                                    className: "justify-center",
                                    onClick: function () {
                                      h.m9.logEvent(
                                        "chatgpt_auth_sign_up",
                                        null,
                                        { provider: "openai" }
                                      ),
                                        g.A.logEvent(f.M.authSignup, {
                                          provider: "openai",
                                        }),
                                        (0, o.signIn)(
                                          "openai",
                                          { callbackUrl: r },
                                          {
                                            prompt: "login",
                                            login_hint: (0, p.W_)({
                                              idp: "openai",
                                              screen: "signup",
                                            }),
                                          }
                                        );
                                    },
                                    children: (0, y.jsx)(v.Z, O({}, E.signUp)),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        })
                      : (0, y.jsx)(y.Fragment, {
                          children: (0, y.jsxs)("div", {
                            className:
                              "grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0",
                            children: [
                              (0, y.jsx)(C, {
                                primary: !0,
                                testid: "login-button",
                                onClick: function () {
                                  h.m9.logEvent("chatgpt_auth_log_in", null, {
                                    provider: "auth0",
                                  }),
                                    g.A.logEvent(f.M.authLogin, {
                                      provider: "auth0",
                                    }),
                                    (0, o.signIn)(
                                      t,
                                      { callbackUrl: r },
                                      { prompt: "login" }
                                    );
                                },
                                children: (0, y.jsx)(v.Z, O({}, E.logIn)),
                              }),
                              (0, y.jsx)(C, {
                                primary: !0,
                                as: "button",
                                onClick: function () {
                                  h.m9.logEvent("chatgpt_auth_sign_up", null, {
                                    provider: "auth0",
                                  }),
                                    g.A.logEvent(f.M.authSignup, {
                                      provider: "auth0",
                                    }),
                                    (0, o.signIn)(
                                      t,
                                      { callbackUrl: r },
                                      { prompt: "login", screen_hint: "signup" }
                                    );
                                },
                                children: (0, y.jsx)(v.Z, O({}, E.signUp)),
                              }),
                            ],
                          }),
                        }),
                  }),
                ],
              }),
              (0, y.jsxs)("div", {
                className: "mt-10 flex flex-col justify-center ",
                children: [
                  (0, y.jsx)("div", {
                    className: "flex justify-center text-gray-300 md:mb-3",
                    children: (0, y.jsx)(d.nV, {
                      className: "h-[22px] w-auto",
                    }),
                  }),
                  (0, y.jsx)(u.VL, { isStorageComplianceEnabled: i }),
                ],
              }),
            ],
          }),
        });
      }
      function C(e) {
        var t = e.icon,
          n = e.children,
          r = e.className,
          i = e.onClick,
          a = e.testid,
          o = e.style,
          l = void 0 === o ? "new" : o,
          s = e.primary,
          c = void 0 !== s && s;
        return (0, y.jsxs)("button", {
          className: (0, m.default)("relative", r, {
            "btn-neutral flex items-center justify-center gap-3 rounded p-3 text-center text-base":
              "legacy" === l,
            "flex h-12 items-center justify-center rounded-md text-center text-base font-medium":
              "new" === l,
            "bg-black/5 hover:bg-black/10 dark:bg-[rgba(255,255,255,0.15)] dark:hover:bg-white/20":
              "new" === l && !c,
            "bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]": "new" === l && c,
          }),
          "data-testid": a,
          onClick: i,
          children: [
            t
              ? (0, y.jsx)("div", {
                  className: (0, m.default)("h-5 w-5 justify-self-start", {
                    "absolute left-5 top-1/2 -translate-y-1/2": "new" === l,
                  }),
                  style: { backgroundImage: t },
                })
              : null,
            (0, y.jsx)("div", {
              className: (0, m.default)({ "relative -top-[1px]": "new" === l }),
              children: n,
            }),
          ],
        });
      }
      var E = (0, b.vU)({
          pageTitle: { id: "Login.pageTitle", defaultMessage: "Get started" },
          ariaLabel: {
            id: "Login.ariaLabel",
            defaultMessage: "ChatGPT by OpenAI",
          },
          welcome: {
            id: "Login.welcome",
            defaultMessage: "Welcome to ChatGPT",
          },
          logIn: { id: "Login.logIn", defaultMessage: "Log in" },
          signUp: { id: "Login.signUp", defaultMessage: "Sign up" },
          continueWithGoogle: {
            id: "Login.continueWithGoogle",
            defaultMessage: "Continue with Google",
          },
          continueWithMicrosoft: {
            id: "Login.continueWithMicrosoft",
            defaultMessage: "Continue with Microsoft",
          },
          useDevAuth: {
            id: "Login.useDevAuth",
            defaultMessage: "Use dev auth",
          },
          useProdAuth: {
            id: "Login.useProdAuth",
            defaultMessage: "Use prod auth",
          },
          orTryAnotherWay: {
            id: "Login.orTryAnotherWay",
            defaultMessage: "Or try another way",
          },
          logInWithOpenAI: {
            id: "Login.logInWithOpenAI",
            defaultMessage: "Log in with your OpenAI account to continue",
          },
        }),
        M = n(4748),
        I = n(26822),
        P = n(77997);
      function L(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : L(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var A = !0;
      function _(e) {
        var t,
          n = e.serviceStatus,
          r = e.examples,
          c = e.auth0Provider,
          u = e.enableNewAuthFlow,
          d = e.cfConnectingIp,
          p = e.isStorageComplianceEnabled,
          h = e.statsigShowCapacityGate,
          m = (0, l.useRouter)(),
          v = m.query.next,
          b = "string" == typeof v && v.startsWith("/") ? v : "/";
        m.asPath.includes("#") && (b += "#" + m.asPath.split("#")[1]);
        var j = (0, x.Z)(),
          w = !!(null == n ? void 0 : n.oof) || !0 === h,
          O = (0, s.useRef)(!1),
          k =
            "sso" in m.query &&
            (null === (t = m.query.sso) || void 0 === t || t),
          C = k ? m.query.connection : void 0;
        return ((0, s.useEffect)(
          function () {
            if (k && !w) {
              var e,
                t =
                  null === (e = I.bX.getCookie(I.cn.DeviceId)) || void 0 === e
                    ? void 0
                    : e.toString();
              (0, o.signIn)(
                "openai" === k ? "openai" : "auth0",
                { callbackUrl: b },
                N(N({}, t ? { device_id: t } : {}), C ? { connection: C } : {})
              );
            }
          },
          [b, k, C, w]
        ),
        (0, s.useEffect)(
          function () {
            g.A.logEvent(f.M.loggedOutOpenedAuthLogin, { cfConnectingIp: d });
          },
          [d]
        ),
        (0, s.useEffect)(function () {
          "#pricing" === window.location.hash &&
            I.bX.setCookie(I.cn.ShowPaymentModal, !0, { maxAge: 21600 });
        }, []),
        (0, s.useEffect)(
          function () {
            if (!O.current) {
              O.current = !0;
              var e = m.query,
                t = e.inv_ws_name,
                n = e.inv_email;
              (t = Array.isArray(t) ? t[0] : t),
                (n = Array.isArray(n) ? n[0] : n),
                t &&
                  n &&
                  M.m.success(
                    j.formatMessage(T.invitedToastMessage, {
                      workspace_name: t,
                      email: n,
                    }),
                    { hasCloseButton: !0, duration: 600 }
                  );
            }
          },
          [m.query, j]
        ),
        w)
          ? (0, y.jsx)(i.Z, {})
          : k
            ? null
            : (0, y.jsxs)(y.Fragment, {
                children: [
                  (0, y.jsx)(a.Z, {}),
                  (0, y.jsx)(S, {
                    auth0Provider: c,
                    enableNewAuthFlow: u,
                    examples: void 0 === r ? [] : r,
                    nextUrl: b,
                    isStorageComplianceEnabled: p,
                  }),
                ],
              });
      }
      var S = function (e) {
        var t = e.auth0Provider,
          n = e.enableNewAuthFlow,
          r = e.examples,
          i = e.nextUrl,
          a = e.isStorageComplianceEnabled;
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(F, {
              auth0Provider: t,
              enableNewAuthFlow: n,
              nextUrl: i,
              examples: void 0 === r ? [] : r,
              isStorageComplianceEnabled: a,
            }),
            !1,
          ],
        });
      };
      function F(e) {
        var t = e.auth0Provider,
          n = e.enableNewAuthFlow,
          r = e.nextUrl,
          i = e.examples,
          a = e.isStorageComplianceEnabled,
          o = "dark" === (0, P.F)().resolvedTheme,
          l = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(
            function () {
              return (
                null === l.current &&
                  (l.current = document.body.style.backgroundColor),
                (document.body.style.backgroundColor = o
                  ? "#00002E"
                  : "#FFFFDB"),
                function () {
                  null !== l.current &&
                    (document.body.style.backgroundColor = l.current);
                }
              );
            },
            [o]
          ),
          (0, y.jsxs)("div", {
            className:
              "flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]",
            children: [
              (0, y.jsx)(c.O, { examples: void 0 === i ? [] : i }),
              (0, y.jsx)(k, {
                auth0Provider: t,
                enableNewAuthFlow: n,
                nextUrl: r,
                isStorageComplianceEnabled: a,
              }),
            ],
          })
        );
      }
      var T = (0, b.vU)({
        pageTitle: { id: "Login.pageTitle", defaultMessage: "Get started" },
        ariaLabel: {
          id: "Login.ariaLabel",
          defaultMessage: "ChatGPT by OpenAI",
        },
        welcome: { id: "Login.welcome", defaultMessage: "Welcome to ChatGPT" },
        logIn: { id: "Login.logIn", defaultMessage: "Log in" },
        signUp: { id: "Login.signUp", defaultMessage: "Sign up" },
        continueWithGoogle: {
          id: "Login.continueWithGoogle",
          defaultMessage: "Continue with Google",
        },
        continueWithMicrosoft: {
          id: "Login.continueWithMicrosoft",
          defaultMessage: "Continue with Microsoft",
        },
        useDevAuth: { id: "Login.useDevAuth", defaultMessage: "Use dev auth" },
        useProdAuth: {
          id: "Login.useProdAuth",
          defaultMessage: "Use prod auth",
        },
        orTryAnotherWay: {
          id: "Login.orTryAnotherWay",
          defaultMessage: "Or try another way",
        },
        logInWithOpenAI: {
          id: "Login.logInWithOpenAI",
          defaultMessage: "Log in with your OpenAI account to continue",
        },
        invitedToastMessage: {
          id: "Login.invitedToastMessage",
          defaultMessage:
            "You have been invited to the {workspace_name} workspace! Login or sign up with {email} to accept the invitation.",
        },
      });
    },
    12457: function (e, t, n) {
      n.d(t, {
        VL: function () {
          return x;
        },
        Wk: function () {
          return m;
        },
        jI: function () {
          return b;
        },
        xh: function () {
          return h;
        },
      });
      var r,
        i = n(36112),
        a = n(90038),
        o = n(18008),
        l = n(32004),
        s = n(94968),
        c = n(21389),
        u = n(14972),
        d = n(60493),
        p = n(35250);
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : g(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var h = c.Z.div(
        r ||
          (r = (0, a.Z)([
            "w-96 flex flex-col flex-auto justify-center items-center",
          ]))
      );
      function m(e) {
        var t = e.children,
          n = e.showTerms,
          r = e.isStorageComplianceEnabled;
        return (0, p.jsxs)("div", {
          className:
            "flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary",
          children: [
            t,
            (void 0 === n || n) &&
              (0, p.jsx)(x, { isStorageComplianceEnabled: r }),
          ],
        });
      }
      function x(e) {
        var t = e.isStorageComplianceEnabled;
        return (0, p.jsxs)("div", {
          className: "flex gap-3 py-3 text-xs text-token-text-tertiary",
          children: [
            (0, p.jsx)(d.Z, {
              href: "https://openai.com/policies/terms-of-use",
              type: "neutral",
              openNewTab: !0,
              children: (0, p.jsx)(l.Z, f({}, j.terms)),
            }),
            (0, p.jsx)(v, {}),
            (0, p.jsx)(d.Z, {
              href: "https://openai.com/policies/privacy-policy",
              openNewTab: !0,
              type: "neutral",
              children: (0, p.jsx)(l.Z, f({}, j.privacy)),
            }),
            t &&
              (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsx)(v, {}),
                  (0, p.jsx)("button", {
                    className: "underline",
                    onClick: function () {
                      return o.vm.openModal(o.B.CookieManagement);
                    },
                    children: (0, p.jsx)(l.Z, f({}, j.cookies)),
                  }),
                ],
              }),
          ],
        });
      }
      var v = function () {
        return (0, p.jsx)("span", {
          className: "text-token-text-tertiary",
          children: "|",
        });
      };
      function b() {
        return (0, p.jsx)("div", {
          className: "mb-5",
          children: (0, p.jsx)(u.nI, {}),
        });
      }
      var j = (0, s.vU)({
        terms: { id: "AuthPage.terms", defaultMessage: "Terms of use" },
        privacy: { id: "AuthPage.privacy", defaultMessage: "Privacy policy" },
        cookies: { id: "AuthPage.cookies", defaultMessage: "Manage cookies" },
      });
    },
    92804: function (e, t, n) {
      n.d(t, {
        O: function () {
          return g;
        },
      });
      var r = n(70671),
        i = n(94968),
        a = n(62906),
        o = n(36112),
        l = n(19841),
        s = n(70079),
        c = n(35250);
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : u(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function p(e) {
        var t = e.examples,
          n = (0, s.useState)({
            promptIndex: 0,
            answerIndex: 0,
            tokenStreamIndexes: Array(t.length).fill(0),
          }),
          r = n[0],
          i = n[1],
          a = (0, s.useRef)(null),
          u = (0, s.useRef)(r),
          p = function e() {
            if (document.hidden) {
              a.current = setTimeout(e, 1e3);
              return;
            }
            var n = u.current,
              r = n.promptIndex,
              l = n.answerIndex,
              s = n.tokenStreamIndexes,
              c = t[r].answerTokens[l],
              p = s[r] + 1,
              g = 90;
            if (p === c.length)
              (u.current = d(
                d({}, u.current),
                {},
                { tokenStreamIndexes: d(d({}, s), {}, (0, o.Z)({}, r, p)) }
              )),
                (g = 2500);
            else if (p > c.length) {
              var f = l + 1;
              if (f >= t[r].answerTokens.length) {
                var h = (r + 1) % t.length;
                (u.current = {
                  promptIndex: h,
                  answerIndex: 0,
                  tokenStreamIndexes: d(d({}, s), {}, (0, o.Z)({}, h, 0)),
                }),
                  (g = 900);
              } else
                (u.current = d(
                  d({}, u.current),
                  {},
                  {
                    answerIndex: f,
                    tokenStreamIndexes: d(d({}, s), {}, (0, o.Z)({}, r, 0)),
                  }
                )),
                  (g = 500);
            } else
              u.current = d(
                d({}, u.current),
                {},
                { tokenStreamIndexes: d(d({}, s), {}, (0, o.Z)({}, r, p)) }
              );
            i(u.current), (a.current = setTimeout(e, g));
          };
        return (
          (0, s.useEffect)(function () {
            return (
              p(),
              function () {
                a.current && clearTimeout(a.current);
              }
            );
          }, []),
          (0, c.jsx)(c.Fragment, {
            children: t.map(function (e, n) {
              var i = (r.promptIndex + 1) % t.length,
                a = (n + 1) % t.length === r.promptIndex;
              return (0, c.jsxs)(
                "div",
                {
                  className: (0, l.default)(
                    "absolute left-0 top-1/2 flex w-full flex-col px-5 transition-[transform,opacity] duration-500 md:pl-6 md:pr-8 lg:pl-8 lg:pr-10",
                    {
                      "opacity-100": r.promptIndex === n,
                      "opacity-0": r.promptIndex !== n,
                      "translate-y-[calc(-50%-1em+16px)]": a,
                      "translate-y-[calc(-50%-1em)] delay-[500ms]":
                        r.promptIndex === n,
                      "translate-y-[calc(-50%-1em-16px)]": i === n,
                    }
                  ),
                  children: [
                    (0, c.jsx)("div", {
                      className: "relative font-bold",
                      children: e.prompt,
                    }),
                    (0, c.jsx)("div", {
                      className: "relative",
                      children: e.answerTokens.map(function (e, t) {
                        return (0, c.jsxs)(
                          "div",
                          {
                            className:
                              "absolute left-0 top-0 max-w-[650px] transition-opacity duration-300",
                            children: [
                              e.map(function (e, n) {
                                return (0, c.jsx)(
                                  "span",
                                  {
                                    className: (0, l.default)(
                                      "inline transition-opacity duration-300",
                                      {
                                        hidden:
                                          t === r.answerIndex &&
                                          n >=
                                            r.tokenStreamIndexes[r.promptIndex],
                                        "opacity-0": t !== r.answerIndex,
                                      }
                                    ),
                                    children: e,
                                  },
                                  n
                                );
                              }),
                              (0, c.jsxs)("span", {
                                className: (0, l.default)(
                                  "inline-block font-circle delay-[300ms]",
                                  {
                                    "scale-0 transition-transform duration-300":
                                      a ||
                                      t !== r.answerIndex ||
                                      r.tokenStreamIndexes[r.promptIndex] ===
                                        e.length,
                                  }
                                ),
                                children: [
                                  r.tokenStreamIndexes[r.promptIndex] > 0
                                    ? (0, c.jsx)("span", { children: " " })
                                    : null,
                                  "●",
                                ],
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                  ],
                },
                n
              );
            }),
          })
        );
      }
      function g(e) {
        var t = e.examples,
          n = (0, r.Z)();
        return (0, c.jsxs)("div", {
          className:
            "relative hidden flex-1 flex-col justify-center px-5 pt-8 text-[#FE7600] dark:text-[#D292FF] md:flex md:px-6 md:py-[22px] lg:px-8",
          children: [
            (0, c.jsx)("nav", {
              className:
                "left-0 top-8 flex w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8",
              children: (0, c.jsx)("h1", {
                "aria-label": n.formatMessage(f.ariaLabel),
                children: (0, c.jsx)("div", {
                  className:
                    "flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",
                  children: (0, c.jsx)("div", { children: a.L }),
                }),
              }),
            }),
            (0, c.jsx)("div", {
              className:
                "flex flex-col text-[32px] leading-[1.2] md:text-[40px]",
              "aria-hidden": "true",
              children: t.length > 0 && (0, c.jsx)(p, { examples: t }),
            }),
          ],
        });
      }
      var f = (0, i.vU)({
        ariaLabel: {
          id: "Login.ariaLabel",
          defaultMessage: "ChatGPT by OpenAI",
        },
      });
    },
    62906: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(35250),
        i = (0, r.jsxs)(r.Fragment, {
          children: [
            "ChatGPT ",
            (0, r.jsx)("span", { className: "font-circle", children: "●" }),
          ],
        });
    },
  },
]);
//# sourceMappingURL=3754-6dd4d99b259b6acc.js.map
