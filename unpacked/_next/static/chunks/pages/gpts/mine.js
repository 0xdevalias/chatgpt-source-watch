(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1530],
  {
    92072: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSP: function () {
            return C;
          },
          default: function () {
            return z;
          },
        });
      var s,
        n,
        i = r(18450),
        l = r(99945),
        a = r(47712),
        c = r(33028),
        o = r(41409),
        d = r(70079),
        u = r(9063),
        x = r(84692),
        h = r(68498),
        f = r(21389),
        j = r(29287),
        m = r(85452),
        p = r(9182),
        b = r(69466),
        g = r(35250);
      function v(e, t) {
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
      let y = f.Z.div(
          s ||
            (s = (0, l.Z)([
              "border-b-2 border-b-black pb-3 dark:border-b-white",
            ]))
        ),
        w = f.Z.div(
          n ||
            (n = (0, l.Z)([
              "cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary",
            ]))
        );
      function P() {
        let e = (0, a.t)(),
          t = (0, o.useRouter)(),
          r = null == e ? void 0 : e.isWorkspaceAccount(),
          { 0: s, 1: n } = (0, d.useState)("mine");
        (0, c.yx)({
          resetThreadAction: () => {
            t.push("/");
          },
        });
        let i = (0, u.Z)();
        if (null == e) return null;
        let l = (0, g.jsx)(x.Z, {
            id: "1pqG1A",
            defaultMessage: "Created by me",
          }),
          h = (0, g.jsx)(x.Z, {
            id: "2oQjZs",
            defaultMessage: "Shared with me",
          });
        return (0, g.jsxs)("div", {
          className: "mx-auto max-w-3xl px-4 py-12",
          children: [
            (0, g.jsx)("h1", {
              className: "mb-8 text-xl font-medium md:text-2xl",
              children: (0, g.jsx)(x.Z, {
                id: "dgQTc/",
                defaultMessage: "My GPTs",
              }),
            }),
            r &&
              ("mine" === s
                ? (0, g.jsxs)("div", {
                    className: "mb-4 flex flex-row space-x-4",
                    children: [
                      (0, g.jsx)(y, { children: l }),
                      (0, g.jsx)(w, {
                        onClick: () => n("shared_with_me"),
                        children: h,
                      }),
                    ],
                  })
                : (0, g.jsxs)("div", {
                    className: "mb-4 flex flex-row space-x-4",
                    children: [
                      (0, g.jsx)(w, { onClick: () => n("mine"), children: l }),
                      (0, g.jsx)(y, { children: h }),
                    ],
                  })),
            "mine" === s && (0, g.jsx)(b.at, { type: b.a7.Enabled }),
            (0, g.jsx)(
              Z,
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
      function Z(e) {
        var t;
        let { cutId: r, emptyMessage: s } = e,
          { 0: n, 1: l } = (0, d.useState)(!0),
          {
            data: a,
            hasNextPage: c,
            fetchNextPage: o,
            isLoading: u,
          } = (0, p.Fi)({ cutId: r, limit: 8, enabled: n });
        return u && (null == a || 0 === a.pages.length)
          ? (0, g.jsx)("div", {
              className: "my-8 flex justify-center",
              children: (0, g.jsx)(m.Z, {}),
            })
          : u ||
              (null == a || null === (t = a.pages) || void 0 === t
                ? void 0
                : t[0].list.items.length) !== 0
            ? (0, g.jsxs)("div", {
                children: [
                  (0, g.jsx)("div", {
                    children:
                      null == a
                        ? void 0
                        : a.pages.flatMap((e) =>
                            e.list.items.map((e) => {
                              let { resource: t } = e;
                              return (0, g.jsx)(
                                b.r1,
                                { gizmoResource: t },
                                t.gizmo.id
                              );
                            })
                          ),
                  }),
                  !n || c || u
                    ? (0, g.jsx)(j.z, {
                        color: "neutral",
                        onClick: () => {
                          n ? o() : l(!0);
                        },
                        loading: u,
                        className: "w-full",
                        children: (0, g.jsx)(
                          x.Z,
                          (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {};
                              t % 2
                                ? v(Object(r), !0).forEach(function (t) {
                                    (0, i.Z)(e, t, r[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(
                                      e,
                                      Object.getOwnPropertyDescriptors(r)
                                    )
                                  : v(Object(r)).forEach(function (t) {
                                      Object.defineProperty(
                                        e,
                                        t,
                                        Object.getOwnPropertyDescriptor(r, t)
                                      );
                                    });
                            }
                            return e;
                          })({}, O.discoveryLoadMore)
                        ),
                      })
                    : null,
                ],
              })
            : (0, g.jsx)("span", { children: s });
      }
      let O = (0, h.vU)({
        discoveryLoadMore: {
          id: "gizmo.mygpts.loadMore",
          defaultMessage: "Load more",
        },
      });
      var N = r(54225),
        _ = r(52671);
      function M(e) {
        let { children: t } = e,
          r = (0, a.t)();
        return null == r
          ? null
          : r.canInteractWithGizmos()
            ? (0, g.jsxs)("div", {
                children: [
                  t,
                  (0, g.jsx)("div", {
                    className: "fixed bottom-3 right-3",
                    children: (0, g.jsx)(N.Z, {}),
                  }),
                ],
              })
            : r.hasPaidSubscription()
              ? null
              : (0, g.jsx)(k, {
                  button: (0, g.jsx)(j.z, {
                    onClick: () => (0, _.MG)(),
                    children: (0, g.jsx)(x.Z, {
                      id: "gizmosLanding.upgradeToChatGPTPlus",
                      defaultMessage: "Upgrade to ChatGPT Plus",
                    }),
                  }),
                  children: (0, g.jsx)(x.Z, {
                    id: "gizmosLanding.gptsRollingOut",
                    defaultMessage:
                      "GPTs are gradually rolling out to Plus users",
                  }),
                });
      }
      function k(e) {
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
      var T = r(1277),
        C = !0;
      function z() {
        return (0, g.jsx)(T.Z, {
          children: (0, g.jsx)(M, { children: (0, g.jsx)(P, {}) }),
        });
      }
    },
    1277: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var s = r(55837),
        n = r(64349),
        i = r(3042),
        l = r(41409),
        a = r(81264),
        c = r(74346),
        o = r(35250);
      function d(e) {
        let { children: t } = e,
          r = (0, l.useRouter)();
        return (0, o.jsx)(n.Z, {
          mobileHeaderRightContent: null,
          sidebar: (0, o.jsxs)(i.ZP, {
            onNewThread: () => {
              r.push("/");
            },
            children: [
              (0, o.jsx)(c.Dy, {}),
              (0, o.jsx)(s.Z, { activeId: void 0 }),
            ],
          }),
          children: (0, o.jsx)(a.Z, { children: t }),
        });
      }
    },
    17837: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/gpts/mine",
        function () {
          return r(92072);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 17837));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=mine-62c56a06e1ab5995.js.map
