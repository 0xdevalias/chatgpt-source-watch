(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [401],
  {
    44911: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return k;
          },
          default: function () {
            return C;
          },
        });
      var o = n(39827),
        r = n(7557),
        s = n(16244),
        l = n(93760),
        i = n(37482),
        c = n(28354),
        a = n(53197),
        u = n(10518),
        p = n(61888),
        d = n(70079),
        f = n(84692),
        g = n(68498),
        m = n(35250);
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let b = (e) => {
          let { onClose: t } = e,
            { navigateToAuth: n } = (0, l.E)(),
            o = (0, i.oc)();
          return (
            (0, d.useEffect)(() => {
              c.A.logEvent(a.M.noAuthWelcomeModalShown),
                u.m9.logEvent("chatgpt_no_auth_welcome_modal_shown");
            }, []),
            (0, m.jsx)(s.Z, {
              isOpen: !0,
              onClose: p.noop,
              shouldIgnoreClickOutside: !0,
              showCloseButton: !1,
              type: "success",
              noPadding: !0,
              position: o ? "center" : "bottom",
              children: (0, m.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-center px-6 py-8 sm:px-10 sm:pb-10 sm:pt-12",
                children: [
                  (0, m.jsx)("p", {
                    className: "mb-1 text-center text-3xl font-medium",
                    children: (0, m.jsx)(f.Z, O({}, j.title)),
                  }),
                  (0, m.jsx)("p", {
                    className:
                      "mb-6 text-center text-lg text-token-text-secondary",
                    children: (0, m.jsx)(f.Z, O({}, j.subtitle)),
                  }),
                  (0, m.jsx)(r.z, {
                    as: "button",
                    size: "large",
                    color: "primary",
                    className: "mb-2 w-full sm:mb-2.5",
                    onClick: () => {
                      let e = n({ authType: "signup" });
                      c.A.logSignUpButtonClicked({
                        provider: e,
                        location: "No Auth Welcome Modal",
                      });
                    },
                    children: (0, m.jsx)(f.Z, O({}, j.signUpCta)),
                  }),
                  (0, m.jsx)(r.z, {
                    as: "button",
                    size: "large",
                    color: "neutral",
                    className: "mb-5 w-full",
                    onClick: () => {
                      let e = n({ authType: "login" });
                      c.A.logLogInButtonClicked({
                        provider: e,
                        location: "No Auth Welcome Modal",
                      });
                    },
                    children: (0, m.jsx)(f.Z, O({}, j.logInCta)),
                  }),
                  (0, m.jsx)("a", {
                    href: "#",
                    className:
                      "cursor-pointer text-sm font-medium text-token-text-secondary underline",
                    onClick: (e) => {
                      e.preventDefault(),
                        c.A.logEvent(
                          a.M.noAuthWelcomeModalTryItFirstLinkClicked
                        ),
                        u.m9.logEvent(
                          "chatgpt_no_auth_welcome_modal_try_it_first_link_clicked"
                        ),
                        t();
                    },
                    children: (0, m.jsx)(f.Z, O({}, j.tryItFirstLink)),
                  }),
                ],
              }),
            })
          );
        },
        j = (0, g.vU)({
          title: { id: "NoAuthWelcomeModal.title", defaultMessage: "ChatGPT" },
          subtitle: {
            id: "NoAuthWelcomeModal.subtitle",
            defaultMessage:
              "Get instant answers, find creative inspiration, learn something new.",
          },
          signUpCta: {
            id: "NoAuthWelcomeModal.signUpCta",
            defaultMessage: "Sign up",
          },
          logInCta: {
            id: "NoAuthWelcomeModal.logInCta",
            defaultMessage: "Log in",
          },
          tryItFirstLink: {
            id: "NoAuthWelcomeModal.tryItFirstLink",
            defaultMessage: "Try it first",
          },
        });
      var y = n(93723),
        _ = n(34777);
      let w = "has-dismissed-welcome-modal",
        x = () => {
          let { 0: e, 1: t } = (0, d.useState)(!0),
            { isUserUnauthenticated: n } = (0, l.E)(),
            { layer: o } = (0, _.U3)(_.VG.AnonChatLayer),
            r = o.get(_.yp.ANON_IS_NO_AUTH_WELCOME_MODAL_ENABLED, !1);
          return (
            (0, d.useEffect)(() => {
              t(null != sessionStorage.getItem(w));
            }, []),
            {
              isOpen: n && r && !e,
              close: () => {
                t(!0), sessionStorage.setItem(w, "true");
              },
            }
          );
        };
      var N = n(12366),
        P = n(54717);
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                (0, o.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : v(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var k = !0;
      function C(e) {
        let t = (0, N.useRouter)(),
          n = (0, P.wS)(t.asPath),
          o = (0, P.p9)(n),
          { isOpen: r, close: s } = x(),
          { shouldShowHardRateLimitModal: l, shouldShowSoftRateLimitModal: i } =
            (0, y.o)();
        return ((0, d.useEffect)(() => {
          o && t.replace("/", void 0, { shallow: !0 });
        }, [o, t]),
        o)
          ? null
          : (0, m.jsxs)(m.Fragment, {
              children: [
                r && !(l || i) ? (0, m.jsx)(b, { onClose: s }) : null,
                (0, m.jsx)(P.ZP, E(E({}, e), {}, { urlThreadId: n })),
              ],
            });
      }
    },
    42342: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return r;
          },
        });
      let o = n(44911).default;
      var r = !0;
      t.default = o;
    },
    28868: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/g/[gizmoId]/c/[convId]",
        function () {
          return n(42342);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 28868));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[convId]-92210d3f21d107bf.js.map
