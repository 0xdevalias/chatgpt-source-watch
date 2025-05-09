(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8492],
  {
    54111: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return b;
          },
        });
      var r = n(18450),
        i = n(64833),
        s = n(53362),
        c = n(70079),
        a = n(68498),
        l = n(84692),
        o = n(35250);
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
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
      let p = (0, a.vU)({
        title: {
          id: "EnableInternal.title",
          defaultMessage: "Enable internal features",
        },
        loading: {
          id: "EnableInternal.loading",
          defaultMessage: "Please wait...",
        },
        enabled: { id: "EnableInternal.enabled", defaultMessage: "Enabled!" },
      });
      function d() {
        let { 0: e, 1: t } = (0, c.useState)(!1);
        (0, c.useEffect)(() => {
          s.Z.getInternalEnableURL().then(() => t(!0));
        }, []);
        let n = e ? p.enabled : p.loading;
        return (0, o.jsx)(i.Wk, {
          isStorageComplianceEnabled: !1,
          children: (0, o.jsxs)(i.xh, {
            children: [
              (0, o.jsx)(i.jI, {}),
              (0, o.jsx)("div", {
                className: "mb-2 text-center text-lg",
                children: (0, o.jsx)(l.Z, f({}, p.title)),
              }),
              (0, o.jsx)("div", {
                className: "mb-5 text-center",
                children: (0, o.jsx)(l.Z, f({}, n)),
              }),
            ],
          }),
        });
      }
      function b() {
        return (0, o.jsx)(d, {});
      }
    },
    64833: function (e, t, n) {
      "use strict";
      n.d(t, {
        VL: function () {
          return y;
        },
        Wk: function () {
          return x;
        },
        jI: function () {
          return O;
        },
        xh: function () {
          return j;
        },
      });
      var r,
        i = n(18450),
        s = n(99945),
        c = n(13106),
        a = n(84692),
        l = n(68498),
        o = n(21389),
        u = n(73606),
        f = n(88303),
        p = n(35250);
      function d(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                (0, i.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : d(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let j = o.Z.div(
        r ||
          (r = (0, s.Z)([
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
          children: [t, n && (0, p.jsx)(y, { isStorageComplianceEnabled: r })],
        });
      }
      function y(e) {
        let { isStorageComplianceEnabled: t } = e;
        return (0, p.jsxs)("div", {
          className: "flex gap-3 py-3 text-xs text-token-text-tertiary",
          children: [
            (0, p.jsx)(f.Z, {
              href: "https://openai.com/policies/terms-of-use",
              type: "neutral",
              openNewTab: !0,
              children: (0, p.jsx)(a.Z, b({}, g.terms)),
            }),
            (0, p.jsx)(h, {}),
            (0, p.jsx)(f.Z, {
              href: "https://openai.com/policies/privacy-policy",
              openNewTab: !0,
              type: "neutral",
              children: (0, p.jsx)(a.Z, b({}, g.privacy)),
            }),
            t &&
              (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsx)(h, {}),
                  (0, p.jsx)("button", {
                    className: "underline",
                    onClick: () => c.vm.openModal(c.B.CookieManagement),
                    children: (0, p.jsx)(a.Z, b({}, g.cookies)),
                  }),
                ],
              }),
          ],
        });
      }
      let h = () =>
        (0, p.jsx)("span", {
          className: "text-token-text-tertiary",
          children: "|",
        });
      function O() {
        return (0, p.jsx)("div", {
          className: "mb-5",
          children: (0, p.jsx)(u.nI, {}),
        });
      }
      let g = (0, l.vU)({
        terms: { id: "AuthPage.terms", defaultMessage: "Terms of use" },
        privacy: { id: "AuthPage.privacy", defaultMessage: "Privacy policy" },
        cookies: { id: "AuthPage.cookies", defaultMessage: "Manage cookies" },
      });
    },
    81743: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/enable/internal",
        function () {
          return n(54111);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 81743));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=internal-a6d07f189eb2445a.js.map
