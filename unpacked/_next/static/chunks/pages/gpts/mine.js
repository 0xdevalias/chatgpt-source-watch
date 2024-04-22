(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1530],
  {
    1705: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return C;
          },
          default: function () {
            return G;
          },
        });
      var s,
        n,
        i = r(39827),
        l = r(73017),
        a = r(24668),
        o = r(84126),
        c = r(10518),
        d = r(12366),
        u = r(70079),
        x = r(9063),
        h = r(84692),
        f = r(68498),
        j = r(21389),
        m = r(7557),
        p = r(42005),
        b = r(89691),
        g = r(81595),
        v = r(35250);
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
        P = j.Z.div(
          n ||
            (n = (0, l.Z)([
              "cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary",
            ]))
        );
      function Z() {
        let e = (0, a.t)(),
          t = (0, d.useRouter)(),
          r =
            (0, c.sB)(c.tz.UpdatedGizmoShare) &&
            (null == e ? void 0 : e.isWorkspaceAccount()),
          { 0: s, 1: n } = (0, u.useState)("mine");
        (0, o.yx)({
          resetThreadAction: () => {
            t.push("/");
          },
        });
        let i = (0, x.Z)();
        if (null == e) return null;
        let l = (0, v.jsx)(h.Z, {
            id: "1pqG1A",
            defaultMessage: "Created by me",
          }),
          f = (0, v.jsx)(h.Z, {
            id: "2oQjZs",
            defaultMessage: "Shared with me",
          });
        return (0, v.jsxs)("div", {
          className: "mx-auto max-w-3xl px-4 py-12",
          children: [
            (0, v.jsx)("h1", {
              className: "mb-8 text-xl font-medium md:text-2xl",
              children: (0, v.jsx)(h.Z, {
                id: "dgQTc/",
                defaultMessage: "My GPTs",
              }),
            }),
            r &&
              ("mine" === s
                ? (0, v.jsxs)("div", {
                    className: "mb-4 flex flex-row space-x-4",
                    children: [
                      (0, v.jsx)(w, { children: l }),
                      (0, v.jsx)(P, {
                        onClick: () => n("shared_with_me"),
                        children: f,
                      }),
                    ],
                  })
                : (0, v.jsxs)("div", {
                    className: "mb-4 flex flex-row space-x-4",
                    children: [
                      (0, v.jsx)(P, { onClick: () => n("mine"), children: l }),
                      (0, v.jsx)(w, { children: f }),
                    ],
                  })),
            "mine" === s && (0, v.jsx)(g.at, { type: g.a7.Enabled }),
            (0, v.jsx)(
              O,
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
      function O(e) {
        var t;
        let { cutId: r, emptyMessage: s } = e,
          { 0: n, 1: l } = (0, u.useState)(!0),
          {
            data: a,
            hasNextPage: o,
            fetchNextPage: c,
            isLoading: d,
          } = (0, b.Fi)({ cutId: r, limit: 8, enabled: n });
        return d && (null == a || 0 === a.pages.length)
          ? (0, v.jsx)("div", {
              className: "my-8 flex justify-center",
              children: (0, v.jsx)(p.Z, {}),
            })
          : d ||
              (null == a || null === (t = a.pages) || void 0 === t
                ? void 0
                : t[0].list.items.length) !== 0
            ? (0, v.jsxs)("div", {
                children: [
                  (0, v.jsx)("div", {
                    children:
                      null == a
                        ? void 0
                        : a.pages.flatMap((e) =>
                            e.list.items.map((e) => {
                              let { resource: t } = e;
                              return (0, v.jsx)(
                                g.r1,
                                { gizmoResource: t },
                                t.gizmo.id
                              );
                            })
                          ),
                  }),
                  !n || o || d
                    ? (0, v.jsx)(m.z, {
                        color: "neutral",
                        onClick: () => {
                          n ? c() : l(!0);
                        },
                        loading: d,
                        className: "w-full",
                        children: (0, v.jsx)(
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
                          })({}, N.discoveryLoadMore)
                        ),
                      })
                    : null,
                ],
              })
            : (0, v.jsx)("span", { children: s });
      }
      let N = (0, f.vU)({
        discoveryLoadMore: {
          id: "gizmo.mygpts.loadMore",
          defaultMessage: "Load more",
        },
      });
      var _ = r(55289),
        M = r(93496);
      function k(e) {
        let { children: t } = e,
          r = (0, a.t)();
        return null == r
          ? null
          : r.canInteractWithGizmos()
            ? (0, v.jsxs)("div", {
                children: [
                  t,
                  (0, v.jsx)("div", {
                    className: "fixed bottom-3 right-3",
                    children: (0, v.jsx)(_.Z, {}),
                  }),
                ],
              })
            : r.hasPaidSubscription()
              ? null
              : (0, v.jsx)(z, {
                  button: (0, v.jsx)(m.z, {
                    onClick: () => (0, M.MG)(),
                    children: (0, v.jsx)(h.Z, {
                      id: "gizmosLanding.upgradeToChatGPTPlus",
                      defaultMessage: "Upgrade to ChatGPT Plus",
                    }),
                  }),
                  children: (0, v.jsx)(h.Z, {
                    id: "gizmosLanding.gptsRollingOut",
                    defaultMessage:
                      "GPTs are gradually rolling out to Plus users",
                  }),
                });
      }
      function z(e) {
        let { children: t, button: r } = e;
        return (0, v.jsx)("div", {
          className: "flex h-full w-full items-center justify-center",
          children: (0, v.jsxs)("div", {
            className: "flex max-w-sm flex-col gap-4 p-6 text-center",
            children: [
              (0, v.jsx)("h2", { children: t }),
              (0, v.jsx)("div", { className: "m-auto", children: r }),
            ],
          }),
        });
      }
      var T = r(90775),
        C = !0;
      function G() {
        return (0, v.jsx)(T.Z, {
          children: (0, v.jsx)(k, { children: (0, v.jsx)(Z, {}) }),
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
        a = r(81056),
        o = r(56532),
        c = r(35250);
      function d(e) {
        let { children: t } = e,
          r = (0, l.useRouter)();
        return (0, c.jsx)(n.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, c.jsxs)(i.ZP, {
            onNewThread: () => {
              r.push("/");
            },
            children: [
              (0, c.jsx)(o.Dy, {}),
              (0, c.jsx)(s.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, c.jsx)(a.Z, { children: t }),
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
//# sourceMappingURL=mine-9cfbf62f26a8804a.js.map
