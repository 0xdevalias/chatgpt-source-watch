"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2510],
  {
    32510: function (e, t, n) {
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return _;
          },
          default: function () {
            return T;
          },
          messages: function () {
            return W;
          },
        });
      var r = n(18450),
        i = n(82802),
        l = n(1129),
        a = n(2932),
        o = n(73606),
        s = n(64833),
        c = n(96056),
        d = n(38801),
        u = n(67852),
        p = n(43041),
        g = n(34594),
        f = n(39882),
        h = n(19841),
        x = n(69096),
        m = n(41409),
        b = n.n(m),
        y = n(9063),
        j = n(84692),
        v = n(68498),
        w = n(27740),
        O = n(35250);
      function k(e, t) {
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : k(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function I(e) {
        let {
            auth0Provider: t,
            enableNewAuthFlow: n,
            nextUrl: r,
            isStorageComplianceEnabled: i,
          } = e,
          l = (0, y.Z)(),
          { layer: a } = (0, f.U3)(f.VG.AnonChatLayer),
          h = a.get(f.yp.ANON_IS_TRY_IT_FIRST_ON_LOGIN_PAGE_ENABLED, !1);
        return (0, O.jsx)(O.Fragment, {
          children: (0, O.jsxs)("div", {
            className:
              "relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",
            children: [
              (0, O.jsx)("nav", {
                className:
                  "flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",
                children: (0, O.jsx)("h1", {
                  "aria-label": l.formatMessage(M.ariaLabel),
                  children: (0, O.jsx)("div", {
                    className:
                      "flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",
                    children: (0, O.jsx)("div", { children: w.L }),
                  }),
                }),
              }),
              (0, O.jsxs)("div", {
                className:
                  "relative flex w-full grow flex-col items-center justify-center",
                children: [
                  (0, O.jsx)("h2", {
                    className:
                      "text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",
                    children: (0, O.jsx)(j.Z, L({}, M.pageTitle)),
                  }),
                  (0, O.jsx)("div", {
                    className: "mt-5 w-full max-w-[440px]",
                    children: n
                      ? (0, O.jsx)(O.Fragment, {
                          children: (0, O.jsxs)("div", {
                            className: "flex w-full flex-col gap-3",
                            children: [
                              (0, O.jsx)(C, {
                                icon: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 48 48'%3E%3Cdefs%3E%3Cpath id='a' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/defs%3E%3CclipPath id='b'%3E%3Cuse xlink:href='%23a' overflow='visible'/%3E%3C/clipPath%3E%3Cpath clip-path='url(%23b)' fill='%23FBBC05' d='M0 37V11l17 13z'/%3E%3Cpath clip-path='url(%23b)' fill='%23EA4335' d='M0 11l17 13 7-6.1L48 14V0H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%2334A853' d='M0 37l30-23 7.9 1L48 0v48H0z'/%3E%3Cpath clip-path='url(%23b)' fill='%234285F4' d='M48 48L17 24l-4-3 35-10z'/%3E%3C/svg%3E\")",
                                onClick: () => {
                                  d.A.logLogInButtonClicked({
                                    provider: "google",
                                    location: "Login page",
                                  }),
                                    (0, x.signIn)(
                                      "openai",
                                      { callbackUrl: r },
                                      {
                                        prompt: "login",
                                        login_hint: (0, c.W_)({
                                          idp: "google",
                                        }),
                                      }
                                    );
                                },
                                children: (0, O.jsx)(
                                  j.Z,
                                  L({}, M.continueWithGoogle)
                                ),
                              }),
                              (0, O.jsx)(C, {
                                icon: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21'%3E%3Cpath fill='%23f25022' d='M1 1h9v9H1z'/%3E%3Cpath fill='%2300a4ef' d='M1 11h9v9H1z'/%3E%3Cpath fill='%237fba00' d='M11 1h9v9h-9z'/%3E%3Cpath fill='%23ffb900' d='M11 11h9v9h-9z'/%3E%3C/svg%3E\")",
                                onClick: () => {
                                  d.A.logLogInButtonClicked({
                                    provider: "microsoft",
                                    location: "Login page",
                                  }),
                                    (0, x.signIn)(
                                      "openai",
                                      { callbackUrl: r },
                                      {
                                        prompt: "login",
                                        login_hint: (0, c.W_)({
                                          idp: "microsoft",
                                        }),
                                      }
                                    );
                                },
                                children: (0, O.jsx)(
                                  j.Z,
                                  L({}, M.continueWithMicrosoft)
                                ),
                              }),
                              (0, O.jsx)("div", {
                                className:
                                  "my-2 w-full border-t border-black/5",
                              }),
                              (0, O.jsxs)("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                  (0, O.jsx)(C, {
                                    primary: !0,
                                    className: "justify-center",
                                    onClick: () => {
                                      d.A.logLogInButtonClicked({
                                        provider: "openai",
                                        location: "Login page",
                                      }),
                                        (0, x.signIn)(
                                          "openai",
                                          { callbackUrl: r },
                                          {
                                            prompt: "login",
                                            login_hint: (0, c.W_)({
                                              idp: "openai",
                                            }),
                                          }
                                        );
                                    },
                                    children: (0, O.jsx)(j.Z, L({}, M.logIn)),
                                  }),
                                  (0, O.jsx)(C, {
                                    primary: !0,
                                    className: "justify-center",
                                    onClick: () => {
                                      d.A.logSignUpButtonClicked({
                                        provider: "openai",
                                        location: "Login page",
                                      }),
                                        (0, x.signIn)(
                                          "openai",
                                          { callbackUrl: r },
                                          {
                                            prompt: "login",
                                            login_hint: (0, c.W_)({
                                              idp: "openai",
                                              screen: "signup",
                                            }),
                                          }
                                        );
                                    },
                                    children: (0, O.jsx)(j.Z, L({}, M.signUp)),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        })
                      : (0, O.jsx)(O.Fragment, {
                          children: (0, O.jsxs)("div", {
                            className:
                              "grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0",
                            children: [
                              (0, O.jsx)(C, {
                                primary: !0,
                                testid: "login-button",
                                onClick: () => {
                                  d.A.logLogInButtonClicked({
                                    provider: "auth0",
                                    location: "Login page",
                                  }),
                                    (0, x.signIn)(
                                      t,
                                      { callbackUrl: r },
                                      { prompt: "login" }
                                    );
                                },
                                children: (0, O.jsx)(j.Z, L({}, M.logIn)),
                              }),
                              (0, O.jsx)(C, {
                                primary: !0,
                                as: "button",
                                onClick: () => {
                                  d.A.logSignUpButtonClicked({
                                    provider: "auth0",
                                    location: "Login page",
                                  }),
                                    p.bX.setCookie(p.cn.SignupRedirectUrl, r, {
                                      maxAge: 10800,
                                    }),
                                    (0, x.signIn)(
                                      t,
                                      { callbackUrl: r },
                                      { prompt: "login", screen_hint: "signup" }
                                    );
                                },
                                children: (0, O.jsx)(j.Z, L({}, M.signUp)),
                              }),
                            ],
                          }),
                        }),
                  }),
                  h
                    ? (0, O.jsx)("a", {
                        href: "#",
                        className: "mt-12 text-token-text-secondary underline",
                        onClick: (e) => {
                          e.preventDefault(),
                            d.A.logEvent(u.M.authTryItFirstLinkClicked),
                            g.m9.logEvent(
                              "chatgpt_auth_try_it_first_link_clicked"
                            ),
                            p.bX.setCookie(
                              p.cn.HasClickedOnTryItFirstLink,
                              !0,
                              { maxAge: 43200 }
                            ),
                            b().push("/");
                        },
                        children: (0, O.jsx)(j.Z, L({}, M.tryItFirst)),
                      })
                    : null,
                ],
              }),
              (0, O.jsxs)("div", {
                className: "mt-10 flex flex-col justify-center ",
                children: [
                  (0, O.jsx)("div", {
                    className: "flex justify-center text-gray-300 md:mb-3",
                    children: (0, O.jsx)(o.nV, {
                      className: "h-[22px] w-auto",
                    }),
                  }),
                  (0, O.jsx)(s.VL, { isStorageComplianceEnabled: i }),
                ],
              }),
            ],
          }),
        });
      }
      function C(e) {
        let {
          icon: t,
          children: n,
          className: r,
          onClick: i,
          testid: l,
          style: a = "new",
          primary: o = !1,
        } = e;
        return (0, O.jsxs)("button", {
          className: (0, h.default)("relative", r, {
            "btn-neutral flex items-center justify-center gap-3 rounded p-3 text-center text-base":
              "legacy" === a,
            "flex h-12 items-center justify-center rounded-md text-center text-base font-medium":
              "new" === a,
            "bg-black/5 hover:bg-black/10 dark:bg-[rgba(255,255,255,0.15)] dark:hover:bg-white/20":
              "new" === a && !o,
            "bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]": "new" === a && o,
          }),
          "data-testid": l,
          onClick: i,
          children: [
            t
              ? (0, O.jsx)("div", {
                  className: (0, h.default)("h-5 w-5 justify-self-start", {
                    "absolute left-5 top-1/2 -translate-y-1/2": "new" === a,
                  }),
                  style: { backgroundImage: t },
                })
              : null,
            (0, O.jsx)("div", {
              className: (0, h.default)({ "relative -top-[1px]": "new" === a }),
              children: n,
            }),
          ],
        });
      }
      let M = (0, v.vU)({
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
        tryItFirst: { id: "Login.tryItFirst", defaultMessage: "Try it first" },
      });
      var P = n(95407),
        A = n(85252);
      n(7610);
      var N = n(70079);
      function E(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : E(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var _ = !0;
      function T(e) {
        var t;
        let {
            serviceStatus: n,
            examples: r,
            auth0Provider: a,
            enableNewAuthFlow: o,
            cfConnectingIp: s,
            isStorageComplianceEnabled: c,
            statsigShowCapacityGate: g,
          } = e,
          f = (0, m.useRouter)(),
          { next: h } = f.query,
          b = "string" == typeof h && h.startsWith("/") ? h : "/";
        f.asPath.includes("#") && (b += "#" + f.asPath.split("#")[1]);
        let j = (0, y.Z)(),
          v = !!(null == n ? void 0 : n.oof) || !0 === g,
          w = (0, N.useRef)(!1),
          k =
            "sso" in f.query &&
            (null === (t = f.query.sso) || void 0 === t || t),
          L = k ? f.query.connection : void 0;
        return ((0, N.useEffect)(() => {
          if (k && !v) {
            var e;
            let t =
              null === (e = p.bX.getCookie(p.cn.DeviceId)) || void 0 === e
                ? void 0
                : e.toString();
            (0, x.signIn)(
              "openai" === k ? "openai" : "auth0",
              { callbackUrl: b },
              S(S({}, t ? { device_id: t } : {}), L ? { connection: L } : {})
            );
          }
        }, [b, k, L, v]),
        (0, N.useEffect)(() => {
          d.A.logEvent(u.M.loggedOutOpenedAuthLogin, { cfConnectingIp: s });
        }, [s]),
        (0, N.useEffect)(() => {
          "#pricing" === window.location.hash &&
            p.bX.setCookie(p.cn.ShowPaymentModal, !0, { maxAge: 21600 });
        }, []),
        (0, N.useEffect)(() => {
          if (w.current) return;
          w.current = !0;
          let { inv_ws_name: e, inv_email: t } = f.query;
          (e = Array.isArray(e) ? e[0] : e),
            (t = Array.isArray(t) ? t[0] : t),
            e &&
              t &&
              P.m.success(
                j.formatMessage(W.invitedToastMessage, {
                  workspace_name: e,
                  email: t,
                }),
                { hasCloseButton: !0, duration: 600 }
              );
        }, [f.query, j]),
        v)
          ? (0, O.jsx)(i.Z, {})
          : k
            ? null
            : (0, O.jsxs)(O.Fragment, {
                children: [
                  (0, O.jsx)(l.Z, {}),
                  (0, O.jsx)(
                    F,
                    {
                      auth0Provider: a,
                      enableNewAuthFlow: o,
                      examples: r["en-US"],
                      nextUrl: b,
                      isStorageComplianceEnabled: c,
                    },
                    "en-US"
                  ),
                ],
              });
      }
      let F = (e) => {
        let {
          auth0Provider: t,
          enableNewAuthFlow: n,
          examples: r = [],
          nextUrl: i,
          isStorageComplianceEnabled: l,
        } = e;
        return (0, O.jsxs)(O.Fragment, {
          children: [
            (0, O.jsx)(U, {
              auth0Provider: t,
              enableNewAuthFlow: n,
              nextUrl: i,
              examples: r,
              isStorageComplianceEnabled: l,
            }),
            !1,
          ],
        });
      };
      function U(e) {
        let {
            auth0Provider: t,
            enableNewAuthFlow: n,
            nextUrl: r,
            examples: i = [],
            isStorageComplianceEnabled: l,
          } = e,
          { resolvedTheme: o } = (0, A.F)(),
          s = "dark" === o,
          c = (0, N.useRef)(null);
        return (
          (0, N.useEffect)(() => {
            null === c.current &&
              (c.current = document.body.style.backgroundColor);
            let e = s ? "#00002E" : "#FFFFDB";
            return (
              (document.body.style.backgroundColor = e),
              () => {
                null !== c.current &&
                  (document.body.style.backgroundColor = c.current);
              }
            );
          }, [s]),
          (0, O.jsxs)("div", {
            className:
              "flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]",
            children: [
              (0, O.jsx)(a.O, { examples: i }),
              (0, O.jsx)(I, {
                auth0Provider: t,
                enableNewAuthFlow: n,
                nextUrl: r,
                isStorageComplianceEnabled: l,
              }),
            ],
          })
        );
      }
      let W = (0, v.vU)({
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
    64833: function (e, t, n) {
      n.d(t, {
        VL: function () {
          return m;
        },
        Wk: function () {
          return x;
        },
        jI: function () {
          return y;
        },
        xh: function () {
          return h;
        },
      });
      var r,
        i = n(18450),
        l = n(99945),
        a = n(13106),
        o = n(84692),
        s = n(68498),
        c = n(21389),
        d = n(73606),
        u = n(88303),
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
      let h = c.Z.div(
        r ||
          (r = (0, l.Z)([
            "w-96 flex flex-col flex-auto justify-center items-center",
          ]))
      );
      function x(e) {
        let {
          children: t,
          showTerms: n = !0,
          isStorageComplianceEnabled: r,
        } = e;
        return (0, p.jsxs)("div", {
          className:
            "flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary",
          children: [t, n && (0, p.jsx)(m, { isStorageComplianceEnabled: r })],
        });
      }
      function m(e) {
        let { isStorageComplianceEnabled: t } = e;
        return (0, p.jsxs)("div", {
          className: "flex gap-3 py-3 text-xs text-token-text-tertiary",
          children: [
            (0, p.jsx)(u.Z, {
              href: "https://openai.com/policies/terms-of-use",
              type: "neutral",
              openNewTab: !0,
              children: (0, p.jsx)(o.Z, f({}, j.terms)),
            }),
            (0, p.jsx)(b, {}),
            (0, p.jsx)(u.Z, {
              href: "https://openai.com/policies/privacy-policy",
              openNewTab: !0,
              type: "neutral",
              children: (0, p.jsx)(o.Z, f({}, j.privacy)),
            }),
            t &&
              (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsx)(b, {}),
                  (0, p.jsx)("button", {
                    className: "underline",
                    onClick: () => a.vm.openModal(a.B.CookieManagement),
                    children: (0, p.jsx)(o.Z, f({}, j.cookies)),
                  }),
                ],
              }),
          ],
        });
      }
      let b = () =>
        (0, p.jsx)("span", {
          className: "text-token-text-tertiary",
          children: "|",
        });
      function y() {
        return (0, p.jsx)("div", {
          className: "mb-5",
          children: (0, p.jsx)(d.nI, {}),
        });
      }
      let j = (0, s.vU)({
        terms: { id: "AuthPage.terms", defaultMessage: "Terms of use" },
        privacy: { id: "AuthPage.privacy", defaultMessage: "Privacy policy" },
        cookies: { id: "AuthPage.cookies", defaultMessage: "Manage cookies" },
      });
    },
    2932: function (e, t, n) {
      n.d(t, {
        O: function () {
          return g;
        },
      });
      var r = n(9063),
        i = n(68498),
        l = n(18450),
        a = n(19841),
        o = n(70079),
        s = n(35250);
      function c(e, t) {
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
            ? c(Object(n), !0).forEach(function (t) {
                (0, l.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function u(e) {
        let { examples: t } = e,
          { 0: n, 1: r } = (0, o.useState)({
            promptIndex: 0,
            answerIndex: 0,
            tokenStreamIndexList: Array.from({ length: t.length }, () => 0),
          }),
          i = (0, o.useRef)(null),
          l = (0, o.useRef)(n),
          c = () => {
            if (document.hidden) {
              i.current = setTimeout(c, 1e3);
              return;
            }
            let {
                promptIndex: e,
                answerIndex: n,
                tokenStreamIndexList: a,
              } = l.current,
              o = t[e].answerTokens[n],
              s = a[e] + 1,
              u = 90;
            if (s === o.length) {
              let t = [...a];
              (t[e] = s),
                (l.current = d(
                  d({}, l.current),
                  {},
                  { tokenStreamIndexList: t }
                )),
                (u = 2500);
            } else if (s > o.length) {
              let r = n + 1;
              if (r >= t[e].answerTokens.length) {
                let n = (e + 1) % t.length,
                  r = [...a];
                (r[n] = 0),
                  (l.current = {
                    promptIndex: n,
                    answerIndex: 0,
                    tokenStreamIndexList: r,
                  }),
                  (u = 900);
              } else {
                let t = [...a];
                (t[e] = 0),
                  (l.current = d(
                    d({}, l.current),
                    {},
                    { answerIndex: r, tokenStreamIndexList: t }
                  )),
                  (u = 500);
              }
            } else {
              let t = [...a];
              (t[e] = s),
                (l.current = d(
                  d({}, l.current),
                  {},
                  { tokenStreamIndexList: t }
                ));
            }
            r(l.current), (i.current = setTimeout(c, u));
          };
        return (
          (0, o.useEffect)(
            () => (
              c(),
              () => {
                i.current && clearTimeout(i.current);
              }
            ),
            []
          ),
          (0, s.jsx)(s.Fragment, {
            children: t.map((e, r) => {
              let i = (n.promptIndex + 1) % t.length,
                l = (r + 1) % t.length === n.promptIndex;
              return (0, s.jsxs)(
                "div",
                {
                  className: (0, a.default)(
                    "absolute left-0 top-1/2 flex w-full flex-col px-5 transition-[transform,opacity] duration-500 md:pl-6 md:pr-8 lg:pl-8 lg:pr-10",
                    {
                      "opacity-100": n.promptIndex === r,
                      "opacity-0": n.promptIndex !== r,
                      "translate-y-[calc(-50%-1em+16px)]": l,
                      "translate-y-[calc(-50%-1em)] delay-[500ms]":
                        n.promptIndex === r,
                      "translate-y-[calc(-50%-1em-16px)]": i === r,
                    }
                  ),
                  children: [
                    (0, s.jsx)("div", {
                      className: "relative font-bold",
                      children: e.prompt,
                    }),
                    (0, s.jsx)("div", {
                      className: "relative",
                      children: e.answerTokens.map((e, t) =>
                        (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "absolute left-0 top-0 max-w-[650px] transition-opacity duration-300",
                            children: [
                              e.map((e, r) =>
                                (0, s.jsx)(
                                  "span",
                                  {
                                    className: (0, a.default)(
                                      "inline transition-opacity duration-300",
                                      {
                                        hidden:
                                          t === n.answerIndex &&
                                          r >=
                                            n.tokenStreamIndexList[
                                              n.promptIndex
                                            ],
                                        "opacity-0": t !== n.answerIndex,
                                      }
                                    ),
                                    children: e,
                                  },
                                  r
                                )
                              ),
                              (0, s.jsxs)("span", {
                                className: (0, a.default)(
                                  "inline-block font-circle delay-[300ms]",
                                  {
                                    "scale-0 transition-transform duration-300":
                                      l ||
                                      t !== n.answerIndex ||
                                      n.tokenStreamIndexList[n.promptIndex] ===
                                        e.length,
                                  }
                                ),
                                children: [
                                  n.tokenStreamIndexList[n.promptIndex] > 0
                                    ? (0, s.jsx)("span", { children: " " })
                                    : null,
                                  "●",
                                ],
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  ],
                },
                r
              );
            }),
          })
        );
      }
      var p = n(27740);
      function g(e) {
        let { examples: t } = e,
          n = (0, r.Z)();
        return (0, s.jsxs)("div", {
          className:
            "relative hidden flex-1 flex-col justify-center px-5 pt-8 text-[#FE7600] dark:text-[#D292FF] md:flex md:px-6 md:py-[22px] lg:px-8",
          children: [
            (0, s.jsx)("nav", {
              className:
                "left-0 top-8 flex w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8",
              children: (0, s.jsx)("h1", {
                "aria-label": n.formatMessage(f.ariaLabel),
                children: (0, s.jsx)("div", {
                  className:
                    "flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",
                  children: (0, s.jsx)("div", { children: p.L }),
                }),
              }),
            }),
            (0, s.jsx)("div", {
              className:
                "flex flex-col text-[32px] leading-[1.2] md:text-[40px]",
              "aria-hidden": "true",
              children: t.length > 0 && (0, s.jsx)(u, { examples: t }),
            }),
          ],
        });
      }
      let f = (0, i.vU)({
        ariaLabel: {
          id: "Login.ariaLabel",
          defaultMessage: "ChatGPT by OpenAI",
        },
      });
    },
    27740: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(35250);
      let i = (0, r.jsxs)(r.Fragment, {
        children: [
          "ChatGPT ",
          (0, r.jsx)("span", { className: "font-circle", children: "●" }),
        ],
      });
    },
  },
]);
//# sourceMappingURL=2510-9c7797724fbc6f96.js.map
