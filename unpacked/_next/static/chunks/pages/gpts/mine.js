(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1530],
  {
    1705: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return N;
          },
          default: function () {
            return I;
          },
        });
      var n = r(39827),
        i = r(24668),
        s = r(84126),
        c = r(12366),
        l = r(70079),
        u = r(84692),
        o = r(68498),
        a = r(7557),
        d = r(42005),
        f = r(81595),
        m = r(89691),
        j = r(7180),
        x = r(35250);
      function h(e, t) {
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
      function p() {
        var e;
        let t = (0, i.t)(),
          r = (0, c.useRouter)(),
          { data: n, isLoading: l } = (0, m.Yp)();
        if (
          ((0, s.yx)({
            resetThreadAction: () => {
              r.push("/");
            },
          }),
          null == t)
        )
          return null;
        let u =
          null !==
            (e =
              null == n
                ? void 0
                : n.cuts.map((e) => ({
                    cutId: e.info.id,
                    title: e.info.title,
                    items: e.list.items,
                    cursor: e.list.cursor,
                  }))) && void 0 !== e
            ? e
            : [];
        return (
          (u = u.filter((e) => "mine" === e.cutId)).some(
            (e) => "mine" === e.cutId
          ) ||
            u.unshift({
              cutId: "mine",
              title: "My GPTs",
              items: [],
              cursor: null,
            }),
          (0, x.jsx)("div", {
            className: "mx-auto max-w-3xl px-4 py-12",
            children: l
              ? (0, x.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, x.jsx)(d.Z, {}),
                })
              : u.map((e) =>
                  (0, x.jsx)(
                    v,
                    {
                      cutId: e.cutId,
                      title: e.title,
                      items: e.items,
                      cursor: e.cursor,
                      createRowType:
                        "mine" == e.cutId
                          ? t.canCreateGizmos()
                            ? f.a7.Enabled
                            : f.a7.ComingSoon
                          : void 0,
                      canRemoveRecent: "recent" === e.cutId,
                    },
                    e.cutId
                  )
                ),
          })
        );
      }
      function v(e) {
        let {
          cutId: t,
          title: r,
          items: n,
          cursor: i,
          canRemoveRecent: s,
          createRowType: c,
        } = e;
        return (0, x.jsxs)(j.b1, {
          title: r,
          children: [
            null != c && (0, x.jsx)(f.at, { type: c }),
            n.map((e) =>
              (0, x.jsx)(
                f.r1,
                { gizmoResource: e.resource, canRemoveRecent: s },
                e.resource.gizmo.id
              )
            ),
            null != i &&
              (0, x.jsx)(g, {
                cutId: t,
                cursor: i,
                fetchOnMount: 0 === n.length,
              }),
          ],
        });
      }
      function g(e) {
        let { cutId: t, cursor: r, fetchOnMount: i } = e,
          { 0: s, 1: c } = (0, l.useState)(i),
          {
            data: o,
            hasNextPage: d,
            fetchNextPage: j,
            isLoading: p,
          } = (0, m.Fi)({ cutId: t, limit: 8, cursor: r, enabled: s });
        return (0, x.jsxs)("div", {
          children: [
            (0, x.jsx)("div", {
              children:
                null == o
                  ? void 0
                  : o.pages.flatMap((e) =>
                      e.list.items.map((e) => {
                        let { resource: t } = e;
                        return (0, x.jsx)(
                          f.r1,
                          { gizmoResource: t },
                          t.gizmo.id
                        );
                      })
                    ),
            }),
            !s || d || p
              ? (0, x.jsx)(a.z, {
                  color: "neutral",
                  onClick: () => {
                    s ? j() : c(!0);
                  },
                  loading: p,
                  className: "w-full",
                  children: (0, x.jsx)(
                    u.Z,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? h(Object(r), !0).forEach(function (t) {
                              (0, n.Z)(e, t, r[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(r)
                              )
                            : h(Object(r)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                                );
                              });
                      }
                      return e;
                    })({}, b.discoveryLoadMore)
                  ),
                })
              : null,
          ],
        });
      }
      let b = (0, o.vU)({
        discoveryLoadMore: {
          id: "gizmo.mygpts.loadMore",
          defaultMessage: "Load more",
        },
      });
      var y = r(55289),
        O = r(93496);
      function w(e) {
        let { children: t } = e,
          r = (0, i.t)();
        return null == r
          ? null
          : r.canInteractWithGizmos()
            ? (0, x.jsxs)("div", {
                children: [
                  t,
                  (0, x.jsx)("div", {
                    className: "fixed bottom-3 right-3",
                    children: (0, x.jsx)(y.Z, {}),
                  }),
                ],
              })
            : r.hasPaidSubscription()
              ? null
              : (0, x.jsx)(P, {
                  button: (0, x.jsx)(a.z, {
                    onClick: () => (0, O.MG)(),
                    children: "Upgrade to ChatGPT Plus",
                  }),
                  children: "GPTs are gradually rolling out to Plus users",
                });
      }
      function P(e) {
        let { children: t, button: r } = e;
        return (0, x.jsx)("div", {
          className: "flex h-full w-full items-center justify-center",
          children: (0, x.jsxs)("div", {
            className: "flex max-w-sm flex-col gap-4 p-6 text-center",
            children: [
              (0, x.jsx)("h2", { children: t }),
              (0, x.jsx)("div", { className: "m-auto", children: r }),
            ],
          }),
        });
      }
      var _ = r(90775),
        N = !0;
      function I() {
        return (0, x.jsx)(_.Z, {
          children: (0, x.jsx)(w, { children: (0, x.jsx)(p, {}) }),
        });
      }
    },
    90775: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(7679),
        i = r(24605),
        s = r(95482),
        c = r(12366),
        l = r(81056),
        u = r(56532),
        o = r(35250);
      function a(e) {
        let { children: t } = e,
          r = (0, c.useRouter)();
        return (0, o.jsx)(i.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, o.jsxs)(s.ZP, {
            onNewThread: () => {
              r.push("/");
            },
            children: [
              (0, o.jsx)(u.Dy, {}),
              (0, o.jsx)(n.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, o.jsx)(l.Z, { children: t }),
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
//# sourceMappingURL=mine-dcccd1718c2aad32.js.map
