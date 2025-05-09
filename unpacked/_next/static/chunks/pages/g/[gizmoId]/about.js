(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [290],
  {
    87752: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return m;
          },
          default: function () {
            return j;
          },
        });
      var n = r(18450),
        i = r(64298),
        o = r(9182),
        c = r(38801),
        s = r(67852),
        u = r(41409),
        l = r(70079),
        a = r(67241),
        d = r(35250);
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
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
      function h(e) {
        let { data: t } = (0, o.b9)(e.gizmoId),
          { 0: r, 1: n } = (0, l.useState)(!0);
        return (0, d.jsxs)(d.Fragment, {
          children: [
            t &&
              r &&
              (0, d.jsx)(i.Eu, {
                onClose: () => n(!1),
                gizmoId: e.gizmoId,
                creatorId: t.gizmo.author.user_id,
                children: (0, d.jsx)(i.Bo, {
                  onClick: () => {
                    c.A.logEvent(s.M.detailClickChat, { gizmo_id: e.gizmoId }),
                      n(!1),
                      window.history.pushState({}, "", (0, o.m_)(t));
                  },
                }),
              }),
            (0, l.createElement)(
              a.GizmoChatWithRedirect,
              g(g({}, e), {}, { key: e.gizmoId })
            ),
          ],
        });
      }
      var m = !0;
      function j(e) {
        let t = (0, u.useRouter)().query.gizmoId;
        return "chat_page" === e.kind
          ? (0, l.createElement)(h, g(g({}, e), {}, { key: t, gizmoId: t }))
          : (0, a.default)(e);
      }
    },
    67241: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          GizmoChatWithRedirect: function () {
            return v;
          },
          __N_SSP: function () {
            return x;
          },
          default: function () {
            return z;
          },
        });
      var n = r(18450),
        i = r(5586),
        o = r(40784),
        c = r(63476),
        s = r(9182),
        u = r(11650),
        l = r(1277),
        a = r(52671),
        d = r(33471),
        f = r(47712),
        g = r(34594),
        h = r(41409),
        m = r.n(h),
        j = r(70079),
        p = r(84692),
        O = r(35250);
      function b(e, t) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : b(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      var x = !0;
      function z(e) {
        let t = (0, h.useRouter)().query.gizmoId;
        switch (e.kind) {
          case "anon_gizmo":
            return (0, O.jsx)(c.X, { gizmo: e.gizmo }, t);
          case "chat_page":
            return (0, j.createElement)(
              v,
              y(y({}, e), {}, { key: t, gizmoId: t })
            );
        }
      }
      function v(e) {
        var t;
        let { data: r, error: n } = (0, s.b9)(e.gizmoId),
          o = (0, f.t)(),
          c =
            null === (t = (0, g.sB)(g.tz.GizmoAllowUnpaidUsersToInteract)) ||
            void 0 === t
              ? void 0
              : t.value,
          u = (null == o ? void 0 : o.canInteractWithGizmos()) || c;
        return ((0, j.useEffect)(() => {
          null == r && null != n && m().push((0, d.M5)(d.LT.GIZMO_NOT_FOUND));
        }, [r, n]),
        null != n && u)
          ? (0, O.jsx)(P, {})
          : !1 === u
            ? (0, O.jsx)(_, { gizmo: r })
            : (0, j.createElement)(i.ZP, y(y({}, e), {}, { key: e.gizmoId }));
      }
      function P() {
        return (0, O.jsx)(l.Z, {
          children: (0, O.jsxs)("div", {
            className:
              "flex h-full w-full flex-col items-center justify-center",
            children: [
              (0, O.jsx)("div", {
                className: "font-bold",
                children: (0, O.jsx)(p.Z, {
                  id: "gizmo.loadError",
                  defaultMessage: "We're having trouble loading this GPT.",
                }),
              }),
              (0, O.jsx)(p.Z, {
                id: "gizmo.loadErrorRefresh",
                defaultMessage: "Please refresh the page, or try again later",
              }),
            ],
          }),
        });
      }
      function _(e) {
        let { gizmo: t } = e;
        return (0, O.jsx)(l.Z, {
          children: (0, O.jsx)(u.r, {
            gizmo: t,
            children: (0, O.jsxs)("div", {
              className: "mt-7 flex flex-col gap-4",
              children: [
                (0, O.jsx)(o.p, {
                  onClick: () => (0, a.MG)(),
                  children: (0, O.jsx)(p.Z, {
                    id: "gizmo.upsell",
                    defaultMessage: "Sign up to chat",
                  }),
                }),
                (0, O.jsx)("div", {
                  className: "text-sm text-token-text-tertiary",
                  children: (0, O.jsx)(p.Z, {
                    id: "gizmo.upsellSubtext",
                    defaultMessage: "Requires ChatGPT Plus",
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
    1277: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(55837),
        i = r(64349),
        o = r(3042),
        c = r(41409),
        s = r(81264),
        u = r(74346),
        l = r(35250);
      function a(e) {
        let { children: t } = e,
          r = (0, c.useRouter)();
        return (0, l.jsx)(i.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, l.jsxs)(o.ZP, {
            onNewThread: () => {
              r.push("/");
            },
            children: [
              (0, l.jsx)(u.Dy, {}),
              (0, l.jsx)(n.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, l.jsx)(s.Z, { children: t }),
        });
      }
    },
    50160: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/g/[gizmoId]/about",
        function () {
          return r(87752);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 50160));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=about-24e603fa816e2997.js.map
