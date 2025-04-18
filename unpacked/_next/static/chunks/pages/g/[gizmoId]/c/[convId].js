(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [401],
  {
    12075: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          __N_SSP: function () {
            return v;
          },
          default: function () {
            return C;
          },
        });
      var n = o(18450),
        r = o(29287),
        c = o(67217),
        s = o(21869),
        l = o(69920),
        a = o(38801),
        i = o(67852),
        u = o(34594),
        d = o(61888),
        g = o(70079),
        p = o(84692),
        f = o(68498),
        m = o(35250);
      function h(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(o), !0).forEach(function (t) {
                (0, n.Z)(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : h(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t)
                  );
                });
        }
        return e;
      }
      let b = (e) => {
          let { onClose: t } = e,
            { navigateToAuth: o } = (0, s.E)(),
            n = (0, l.oc)();
          return (
            (0, g.useEffect)(() => {
              a.A.logEvent(i.M.noAuthWelcomeBackModalShown),
                u.m9.logEvent("chatgpt_no_auth_welcome_back_modal_shown");
            }, []),
            (0, m.jsx)(c.Z, {
              isOpen: !0,
              onClose: d.noop,
              shouldIgnoreClickOutside: !0,
              showCloseButton: !1,
              type: "success",
              noPadding: !0,
              size: "custom",
              className: "max-w-[373px] sm:max-w-[400px]",
              position: n ? "center" : "bottom",
              children: (0, m.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-center px-6 py-8 sm:p-10",
                children: [
                  (0, m.jsx)("p", {
                    className: "mb-1 text-center text-2xl font-medium",
                    children: (0, m.jsx)(p.Z, O({}, _.title)),
                  }),
                  (0, m.jsx)("p", {
                    className:
                      "mb-6 text-center text-lg text-token-text-secondary",
                    children: (0, m.jsx)(p.Z, O({}, _.subtitle)),
                  }),
                  (0, m.jsx)(r.z, {
                    as: "button",
                    size: "large",
                    color: "primary",
                    className: "mb-2 w-full sm:mb-3",
                    onClick: () => {
                      let e = o({ authType: "login" });
                      a.A.logLogInButtonClicked({
                        provider: e,
                        location: "No Auth Welcome Back Modal",
                      });
                    },
                    children: (0, m.jsx)(p.Z, O({}, _.logInCta)),
                  }),
                  (0, m.jsx)(r.z, {
                    as: "button",
                    size: "large",
                    color: "neutral",
                    className: "mb-5 w-full",
                    onClick: () => {
                      let e = o({ authType: "signup" });
                      a.A.logSignUpButtonClicked({
                        provider: e,
                        location: "No Auth Welcome Back Modal",
                      });
                    },
                    children: (0, m.jsx)(p.Z, O({}, _.signUpCta)),
                  }),
                  (0, m.jsx)("a", {
                    href: "#",
                    className:
                      "cursor-pointer font-medium text-token-text-secondary underline sm:text-sm",
                    onClick: (e) => {
                      e.preventDefault(),
                        a.A.logEvent(
                          i.M.noAuthWelcomeBackModalStayLoggedOutLinkClicked
                        ),
                        u.m9.logEvent(
                          "chatgpt_no_auth_welcome_back_modal_stay_logged_out_link_clicked"
                        ),
                        t();
                    },
                    children: (0, m.jsx)(p.Z, O({}, _.stayLoggedOutLink)),
                  }),
                ],
              }),
            })
          );
        },
        _ = (0, f.vU)({
          title: {
            id: "NoAuthWelcomeBackModal.title",
            defaultMessage: "Welcome back",
          },
          subtitle: {
            id: "NoAuthWelcomeBackModal.subtitle",
            defaultMessage:
              "Log in or sign up to access your chat history, share chats, and more.",
          },
          signUpCta: {
            id: "NoAuthWelcomeBackModal.signUpCta",
            defaultMessage: "Sign up",
          },
          logInCta: {
            id: "NoAuthWelcomeBackModal.logInCta",
            defaultMessage: "Log in",
          },
          stayLoggedOutLink: {
            id: "NoAuthWelcomeBackModal.stayLoggedOut",
            defaultMessage: "Stay logged out",
          },
        });
      var y = o(39882);
      let j = "has-dismissed-welcome-back-modal",
        k = () => {
          let { 0: e, 1: t } = (0, g.useState)(!0),
            { layer: o } = (0, y.AH)(y.VG.AnonChatLayer),
            n = o.get(y.yp.ANON_IS_NO_AUTH_WELCOME_BACK_MODAL_ENABLED, !1);
          return (
            (0, g.useEffect)(() => {
              t(null != sessionStorage.getItem(j));
            }, []),
            {
              isOpen: n && !e,
              close: () => {
                t(!0), sessionStorage.setItem(j, "true");
              },
            }
          );
        };
      var x = o(41409),
        w = o(5586);
      function N(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(o), !0).forEach(function (t) {
                (0, n.Z)(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : N(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t)
                  );
                });
        }
        return e;
      }
      var v = !0;
      function C(e) {
        let t = (0, x.useRouter)(),
          o = (0, w.wS)(t.asPath),
          n = (0, w.p9)(o),
          { isOpen: r, close: c } = k();
        return ((0, g.useEffect)(() => {
          n && t.replace("/", void 0, { shallow: !0 });
        }, [n, t]),
        n)
          ? null
          : (0, m.jsxs)(m.Fragment, {
              children: [
                r ? (0, m.jsx)(b, { onClose: c }) : null,
                (0, m.jsx)(w.ZP, P(P({}, e), {}, { urlThreadId: o })),
              ],
            });
      }
    },
    81765: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          __N_SSP: function () {
            return r;
          },
        });
      let n = o(12075).default;
      var r = !0;
      t.default = n;
    },
    66695: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/g/[gizmoId]/c/[convId]",
        function () {
          return o(81765);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 66695));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[convId]-8f7af219e69f5e12.js.map
