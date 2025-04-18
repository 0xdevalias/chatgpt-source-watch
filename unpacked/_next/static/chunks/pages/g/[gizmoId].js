(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [43],
  {
    67241: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          GizmoChatWithRedirect: function () {
            return y;
          },
          __N_SSP: function () {
            return v;
          },
          default: function () {
            return _;
          },
        });
      var n = r(18450),
        i = r(5586),
        s = r(40784),
        o = r(63476),
        l = r(9182),
        c = r(11650),
        u = r(1277),
        a = r(52671),
        d = r(33471),
        f = r(47712),
        h = r(34594),
        g = r(41409),
        j = r.n(g),
        m = r(70079),
        p = r(84692),
        x = r(35250);
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
      function O(e) {
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
      var v = !0;
      function _(e) {
        let t = (0, g.useRouter)().query.gizmoId;
        switch (e.kind) {
          case "anon_gizmo":
            return (0, x.jsx)(o.X, { gizmo: e.gizmo }, t);
          case "chat_page":
            return (0, m.createElement)(
              y,
              O(O({}, e), {}, { key: t, gizmoId: t })
            );
        }
      }
      function y(e) {
        var t;
        let { data: r, error: n } = (0, l.b9)(e.gizmoId),
          s = (0, f.t)(),
          o =
            null === (t = (0, h.sB)(h.tz.GizmoAllowUnpaidUsersToInteract)) ||
            void 0 === t
              ? void 0
              : t.value,
          c = (null == s ? void 0 : s.canInteractWithGizmos()) || o;
        return ((0, m.useEffect)(() => {
          null == r && null != n && j().push((0, d.M5)(d.LT.GIZMO_NOT_FOUND));
        }, [r, n]),
        null != n && c)
          ? (0, x.jsx)(z, {})
          : !1 === c
            ? (0, x.jsx)(P, { gizmo: r })
            : (0, m.createElement)(i.ZP, O(O({}, e), {}, { key: e.gizmoId }));
      }
      function z() {
        return (0, x.jsx)(u.Z, {
          children: (0, x.jsxs)("div", {
            className:
              "flex h-full w-full flex-col items-center justify-center",
            children: [
              (0, x.jsx)("div", {
                className: "font-bold",
                children: (0, x.jsx)(p.Z, {
                  id: "gizmo.loadError",
                  defaultMessage: "We're having trouble loading this GPT.",
                }),
              }),
              (0, x.jsx)(p.Z, {
                id: "gizmo.loadErrorRefresh",
                defaultMessage: "Please refresh the page, or try again later",
              }),
            ],
          }),
        });
      }
      function P(e) {
        let { gizmo: t } = e;
        return (0, x.jsx)(u.Z, {
          children: (0, x.jsx)(c.r, {
            gizmo: t,
            children: (0, x.jsxs)("div", {
              className: "mt-7 flex flex-col gap-4",
              children: [
                (0, x.jsx)(s.p, {
                  onClick: () => (0, a.MG)(),
                  children: (0, x.jsx)(p.Z, {
                    id: "gizmo.upsell",
                    defaultMessage: "Sign up to chat",
                  }),
                }),
                (0, x.jsx)("div", {
                  className: "text-sm text-token-text-tertiary",
                  children: (0, x.jsx)(p.Z, {
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
        s = r(3042),
        o = r(41409),
        l = r(81264),
        c = r(74346),
        u = r(35250);
      function a(e) {
        let { children: t } = e,
          r = (0, o.useRouter)();
        return (0, u.jsx)(i.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, u.jsxs)(s.ZP, {
            onNewThread: () => {
              r.push("/");
            },
            children: [
              (0, u.jsx)(c.Dy, {}),
              (0, u.jsx)(n.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, u.jsx)(l.Z, { children: t }),
        });
      }
    },
    31641: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/g/[gizmoId]",
        function () {
          return r(67241);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 31641));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[gizmoId]-94968178f7a6fd9a.js.map
