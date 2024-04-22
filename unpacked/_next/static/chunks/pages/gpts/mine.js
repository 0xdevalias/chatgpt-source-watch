(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1530],
  {
    1705: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return G;
          },
          default: function () {
            return S;
          },
        });
      var s,
        n,
        i = r(39827),
        l = r(73017),
        c = r(24668),
        o = r(84126),
        a = r(10518),
        d = r(12366),
        u = r(70079),
        x = r(9063),
        h = r(84692),
        f = r(68498),
        j = r(21389),
        m = r(7557),
        p = r(42005),
        b = r(89691),
        v = r(81595),
        g = r(35250);
      function y(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, s);
        }
        return r;
      }
      let w = j.Z.div(
          s ||
            (s = (0, l.Z)([
              "border-b-2 border-b-black pb-3 dark:border-b-white",
            ]))
        ),
        N = j.Z.div(
          n ||
            (n = (0, l.Z)([
              "cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary",
            ]))
        );
      function O() {
        let e = (0, c.t)(),
          t = (0, d.useRouter)(),
          r =
            (0, a.sB)(a.tz.UpdatedGizmoShare) &&
            (null == e ? void 0 : e.isWorkspaceAccount()),
          { 0: s, 1: n } = (0, u.useState)("mine");
        (0, o.yx)({
          resetThreadAction: () => {
            t.push("/");
          },
        });
        let i = (0, x.Z)();
        if (null == e) return null;
        let l = (0, g.jsx)(h.Z, {
            id: "1pqG1A",
            defaultMessage: "Created by me",
          }),
          f = (0, g.jsx)(h.Z, {
            id: "2oQjZs",
            defaultMessage: "Shared with me",
          });
        return (0, g.jsxs)("div", {
          className: "mx-auto max-w-3xl px-4 py-12",
          children: [
            (0, g.jsx)("h1", {
              className: "mb-8 text-xl font-medium md:text-2xl",
              children: (0, g.jsx)(h.Z, {
                id: "dgQTc/",
                defaultMessage: "My GPTs",
              }),
            }),
            r &&
              ("mine" === s
                ? (0, g.jsxs)("div", {
                    className: "mb-4 flex flex-row space-x-4",
                    children: [
                      (0, g.jsx)(w, { children: l }),
                      (0, g.jsx)(N, {
                        onClick: () => n("shared_with_me"),
                        children: f,
                      }),
                    ],
                  })
                : (0, g.jsxs)("div", {
                    className: "mb-4 flex flex-row space-x-4",
                    children: [
                      (0, g.jsx)(N, { onClick: () => n("mine"), children: l }),
                      (0, g.jsx)(w, { children: f }),
                    ],
                  })),
            "mine" === s && (0, g.jsx)(v.at, { type: v.a7.Enabled }),
            (0, g.jsx)(
              P,
              {
                emptyMessage:
                  "shared_with_me" === s
                    ? i.formatMessage({
                        id: "zG4NW2",
                        defaultMessage: "No GPTs have been shared with you yet",
                      })
                    : void 0,
                cutId: s,
              },
              s
            ),
          ],
        });
      }
      function P(e) {
        var t;
        let { cutId: r, emptyMessage: s } = e,
          { 0: n, 1: l } = (0, u.useState)(!0),
          {
            data: c,
            hasNextPage: o,
            fetchNextPage: a,
            isLoading: d,
          } = (0, b.Fi)({ cutId: r, limit: 8, enabled: n });
        return d && (null == c || 0 === c.pages.length)
          ? (0, g.jsx)("div", {
              className: "my-8 flex justify-center",
              children: (0, g.jsx)(p.Z, {}),
            })
          : d ||
              (null == c || null === (t = c.pages) || void 0 === t
                ? void 0
                : t[0].list.items.length) !== 0
            ? (0, g.jsxs)("div", {
                children: [
                  (0, g.jsx)("div", {
                    children:
                      null == c
                        ? void 0
                        : c.pages.flatMap((e) =>
                            e.list.items.map((e) => {
                              let { resource: t } = e;
                              return (0, g.jsx)(
                                v.r1,
                                { gizmoResource: t },
                                t.gizmo.id
                              );
                            })
                          ),
                  }),
                  !n || o || d
                    ? (0, g.jsx)(m.z, {
                        color: "neutral",
                        onClick: () => {
                          n ? a() : l(!0);
                        },
                        loading: d,
                        className: "w-full",
                        children: (0, g.jsx)(
                          h.Z,
                          (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {};
                              t % 2
                                ? y(Object(r), !0).forEach(function (t) {
                                    (0, i.Z)(e, t, r[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(
                                      e,
                                      Object.getOwnPropertyDescriptors(r)
                                    )
                                  : y(Object(r)).forEach(function (t) {
                                      Object.defineProperty(
                                        e,
                                        t,
                                        Object.getOwnPropertyDescriptor(r, t)
                                      );
                                    });
                            }
                            return e;
                          })({}, Z.discoveryLoadMore)
                        ),
                      })
                    : null,
                ],
              })
            : (0, g.jsx)("span", { children: s });
      }
      let Z = (0, f.vU)({
        discoveryLoadMore: {
          id: "gizmo.mygpts.loadMore",
          defaultMessage: "Load more",
        },
      });
      var _ = r(55289),
        k = r(93496);
      function M(e) {
        let { children: t } = e,
          r = (0, c.t)();
        return null == r
          ? null
          : r.canInteractWithGizmos()
            ? (0, g.jsxs)("div", {
                children: [
                  t,
                  (0, g.jsx)("div", {
                    className: "fixed bottom-3 right-3",
                    children: (0, g.jsx)(_.Z, {}),
                  }),
                ],
              })
            : r.hasPaidSubscription()
              ? null
              : (0, g.jsx)(z, {
                  button: (0, g.jsx)(m.z, {
                    onClick: () => (0, k.MG)(),
                    children: "Upgrade to ChatGPT Plus",
                  }),
                  children: "GPTs are gradually rolling out to Plus users",
                });
      }
      function z(e) {
        let { children: t, button: r } = e;
        return (0, g.jsx)("div", {
          className: "flex h-full w-full items-center justify-center",
          children: (0, g.jsxs)("div", {
            className: "flex max-w-sm flex-col gap-4 p-6 text-center",
            children: [
              (0, g.jsx)("h2", { children: t }),
              (0, g.jsx)("div", { className: "m-auto", children: r }),
            ],
          }),
        });
      }
      var C = r(90775),
        G = !0;
      function S() {
        return (0, g.jsx)(C.Z, {
          children: (0, g.jsx)(M, { children: (0, g.jsx)(O, {}) }),
        });
      }
    },
    90775: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var s = r(7679),
        n = r(24605),
        i = r(95482),
        l = r(12366),
        c = r(81056),
        o = r(56532),
        a = r(35250);
      function d(e) {
        let { children: t } = e,
          r = (0, l.useRouter)();
        return (0, a.jsx)(n.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, a.jsxs)(i.ZP, {
            onNewThread: () => {
              r.push("/");
            },
            children: [
              (0, a.jsx)(o.Dy, {}),
              (0, a.jsx)(s.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, a.jsx)(c.Z, { children: t }),
        });
      }
    },
    16189: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/gpts/mine",
        function () {
          return r(1705);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 16189));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=mine-6a18b35f08b6f9f7.js.map
