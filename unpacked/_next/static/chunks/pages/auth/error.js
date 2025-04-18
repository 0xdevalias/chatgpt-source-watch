(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4933],
  {
    85752: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return g;
          },
        });
      var n = r(18450),
        o = r(64833),
        s = r(29287),
        i = r(93380),
        a = r(41409),
        u = r(68498),
        c = r(84692),
        l = r(35250);
      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : d(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let f = (0, u.vU)({
          oops: { id: "AuthError.oops", defaultMessage: "Oops!" },
          goBack: { id: "AuthError.goBack", defaultMessage: "Go back" },
          systemBusyError: {
            id: "AuthError.systemBusyError",
            defaultMessage:
              "Our systems are a bit busy at the moment, please take a break and try again soon.",
          },
          identityProviderMismatch: {
            id: "AuthError.identityProviderMismatch",
            defaultMessage:
              "You tried signing in with a different authentication method than the one you used during signup. Please try again using your original authentication method.",
          },
          accountDeactivated: {
            id: "AuthError.accountDeactivated",
            defaultMessage:
              "You do not have an account because it has been deleted or deactivated. If you believe this was an error, please contact us through our help center at help.openai.com.",
          },
          unsupportedCountry: {
            id: "AuthError.unsupportedCountry",
            defaultMessage:
              "OpenAI's services are not available in your country.",
          },
          unsupportedRegion: {
            id: "AuthError.unsupportedRegion",
            defaultMessage:
              "OpenAI's services are not available in your region.",
          },
          unknownCountry: {
            id: "AuthError.unknownCountry",
            defaultMessage:
              "We were unable to determine your country of origin to enforce geographical restrictions. Please use a different network, or contact us at help.openai.com if the issue persists.",
          },
          ssoRequired: {
            id: "AuthError.ssoRequired",
            defaultMessage:
              "Please use your organization's SSO to access your account.",
          },
          mfaBypass: {
            id: "AuthError.mfaBypass",
            defaultMessage:
              "Your account is protected with multi-factor authentication. Please log in again using the method you set that up with.",
          },
          defaultError: {
            id: "AuthError.defaultError",
            defaultMessage:
              "We ran into an issue while signing you in, please take a break and try again soon.",
          },
        }),
        h = (0, l.jsx)(c.Z, p({}, f.systemBusyError)),
        y = {
          RequestTimeout: h,
          AuthRateLimit: h,
          identity_provider_mismatch: (0, l.jsx)(
            c.Z,
            p({}, f.identityProviderMismatch)
          ),
          account_deactivated: (0, l.jsx)(c.Z, p({}, f.accountDeactivated)),
          unsupported_country: (0, l.jsx)(c.Z, p({}, f.unsupportedCountry)),
          unsupported_region: (0, l.jsx)(c.Z, p({}, f.unsupportedRegion)),
          unknown_country: (0, l.jsx)(c.Z, p({}, f.unknownCountry)),
          sso_required: (0, l.jsx)(c.Z, p({}, f.ssoRequired)),
          default: (0, l.jsx)(c.Z, p({}, f.defaultError)),
        };
      function g() {
        return (0, l.jsx)(j, {});
      }
      function j() {
        let e = (0, a.useRouter)(),
          { error: t } = e.query,
          r = (function (e) {
            if (e in y) return y[e];
            if (!e.startsWith("mfa_bypass")) return y.default;
            {
              var t;
              let r = (function (e) {
                  let t = e.split("|");
                  return t.length > 1 ? t[1] : void 0;
                })(e),
                n =
                  null !== (t = void 0 === r ? void 0 : i.w[r]) && void 0 !== t
                    ? t
                    : "your other account you set that up with";
              return (0, l.jsx)(c.Z, {
                id: "AuthError.mfaBypass2",
                defaultMessage:
                  "Your account is protected with multi-factor authentication. Please log in with {providerLabel} to provide the verification code.",
                values: { providerLabel: n },
              });
            }
          })(String(t));
        return (0, l.jsx)(o.Wk, {
          isStorageComplianceEnabled: !1,
          children: (0, l.jsxs)(o.xh, {
            children: [
              (0, l.jsx)(o.jI, {}),
              (0, l.jsx)("div", {
                className: "mb-2 text-center text-lg",
                children: (0, l.jsx)(c.Z, p({}, f.oops)),
              }),
              (0, l.jsx)("div", { className: "mb-5 text-center", children: r }),
              (0, l.jsx)(s.z, {
                as: "button",
                color: "neutral",
                onClick: () => e.replace("/auth/login"),
                children: (0, l.jsx)(c.Z, p({}, f.goBack)),
              }),
            ],
          }),
        });
      }
    },
    64833: function (e, t, r) {
      "use strict";
      r.d(t, {
        VL: function () {
          return j;
        },
        Wk: function () {
          return g;
        },
        jI: function () {
          return b;
        },
        xh: function () {
          return y;
        },
      });
      var n,
        o = r(18450),
        s = r(99945),
        i = r(13106),
        a = r(84692),
        u = r(68498),
        c = r(21389),
        l = r(73606),
        d = r(88303),
        p = r(35250);
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                (0, o.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let y = c.Z.div(
        n ||
          (n = (0, s.Z)([
            "w-96 flex flex-col flex-auto justify-center items-center",
          ]))
      );
      function g(e) {
        let {
          children: t,
          showTerms: r = !0,
          isStorageComplianceEnabled: n,
        } = e;
        return (0, p.jsxs)("div", {
          className:
            "flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary",
          children: [t, r && (0, p.jsx)(j, { isStorageComplianceEnabled: n })],
        });
      }
      function j(e) {
        let { isStorageComplianceEnabled: t } = e;
        return (0, p.jsxs)("div", {
          className: "flex gap-3 py-3 text-xs text-token-text-tertiary",
          children: [
            (0, p.jsx)(d.Z, {
              href: "https://openai.com/policies/terms-of-use",
              type: "neutral",
              openNewTab: !0,
              children: (0, p.jsx)(a.Z, h({}, x.terms)),
            }),
            (0, p.jsx)(m, {}),
            (0, p.jsx)(d.Z, {
              href: "https://openai.com/policies/privacy-policy",
              openNewTab: !0,
              type: "neutral",
              children: (0, p.jsx)(a.Z, h({}, x.privacy)),
            }),
            t &&
              (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsx)(m, {}),
                  (0, p.jsx)("button", {
                    className: "underline",
                    onClick: () => i.vm.openModal(i.B.CookieManagement),
                    children: (0, p.jsx)(a.Z, h({}, x.cookies)),
                  }),
                ],
              }),
          ],
        });
      }
      let m = () =>
        (0, p.jsx)("span", {
          className: "text-token-text-tertiary",
          children: "|",
        });
      function b() {
        return (0, p.jsx)("div", {
          className: "mb-5",
          children: (0, p.jsx)(l.nI, {}),
        });
      }
      let x = (0, u.vU)({
        terms: { id: "AuthPage.terms", defaultMessage: "Terms of use" },
        privacy: { id: "AuthPage.privacy", defaultMessage: "Privacy policy" },
        cookies: { id: "AuthPage.cookies", defaultMessage: "Manage cookies" },
      });
    },
    35146: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/auth/error",
        function () {
          return r(85752);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 35146));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=error-a70e7abe434c96a8.js.map
