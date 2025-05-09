"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8799],
  {
    18799: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return W;
          },
        });
      var l = s(18405),
        i = s(39827),
        n = s(19841),
        a = s(84261),
        r = s.n(a),
        o = s(70079),
        d = s(35236),
        c = s(84589),
        u = s.n(c),
        x = s(83737),
        m = s(1454),
        h = s(84692),
        p = s(9063),
        f = s(68498),
        g = s(7557),
        j = s(68832),
        w = s(51590),
        y = s(60666),
        b = s(35250);
      function v(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          t &&
            (l = l.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, l);
        }
        return s;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(s), !0).forEach(function (t) {
                (0, i.Z)(e, t, s[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
              : v(Object(s)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(s, t)
                  );
                });
        }
        return e;
      }
      let z = {
          padding: 20,
          zIndex: 1e3,
          xOffset: 300,
          yOffset: 200,
          normal: { width: 600, height: 585 },
          small: { width: 600, height: 335 },
        },
        k = r()(
          () => Promise.all([s.e(5823), s.e(469)]).then(s.bind(s, 80469)),
          {
            ssr: !1,
            loading: () =>
              (0, b.jsx)("div", {
                className: "p-3",
                children: (0, b.jsx)("p", {
                  className:
                    "flex items-center justify-center text-center font-mono text-sm uppercase text-token-text-primary",
                  style: { height: 200 },
                  children: (0, b.jsx)(h.Z, N({}, P.loading)),
                }),
              }),
            loadableGenerated: { webpack: () => [80469] },
          }
        );
      function C() {
        let e = (0, o.useRef)(null),
          [{ width: t, height: s }, i] = u()(),
          { targetLatencyData: a } = (0, w.gj)(),
          r = (0, l.tN)(l.bM.isLatencyDevtoolsVisible);
        (0, o.useEffect)(() => {
          if (e.current) {
            let t = window.innerWidth,
              s = window.innerHeight;
            e.current.updatePosition({
              x: t - (z.normal.width + z.xOffset) - z.padding,
              y: s - (z.normal.height + z.yOffset) - z.padding,
            }),
              e.current.updateSize({
                width: z.normal.width,
                height: z.normal.height,
              });
          }
        }, []);
        let { 0: c, 1: p } = (0, o.useState)(!1),
          f = () => {
            c || p(!0);
          },
          j = () => {
            c && p(!1);
          },
          v = (0, y.AA)(),
          C = (0, y.JP)(),
          { 0: M, 1: W } = (0, o.useState)(!1),
          B = (0, o.useMemo)(() => (v ? (0, y.j7)(v) + 1 : 0), [v]),
          Z = (0, o.useMemo)(() => (v ? (0, y.BC)() : 0), [v]);
        (0, o.useEffect)(() => {
          W(!1);
        }, [v, W]);
        let L = () => {
          r ? l.vm.hideLatencyDevTools() : l.vm.showLatencyDevTools();
        };
        if (!r) return null;
        let R = Object.keys(C).length > 1;
        return (0, b.jsx)(x.E.div, {
          initial: { opacity: 0 },
          transition: { delay: 1, duration: 0.2 },
          animate: {
            opacity: 1,
            transition: { duration: 0.2, ease: "easeIn" },
          },
          exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
          children: (0, b.jsx)(d.s, {
            disableDragging: c,
            ref: e,
            style: {
              zIndex: z.zIndex,
              width: z.normal.width,
              height: z.normal.height,
            },
            className: (0, n.default)(
              "transition-delay popover group relative flex h-full flex-col overflow-hidden rounded-md border-2 border-gray-500 bg-token-main-surface-primary opacity-80 shadow-md transition-opacity delay-100 hover:opacity-100 hover:delay-0 dark:border-white"
            ),
            children: v
              ? (0, b.jsxs)(b.Fragment, {
                  children: [
                    (0, b.jsx)("div", {
                      className:
                        "flex flex-row items-center border-b border-gray-700 py-1 dark:border-gray-300",
                      children: (0, b.jsxs)("div", {
                        className:
                          "flex w-full flex-row items-center justify-end",
                        children: [
                          (0, b.jsxs)("div", {
                            className:
                              "flex w-full flex-row items-center justify-between px-3 ",
                            children: [
                              (0, b.jsx)(g.z, {
                                disabled: !R,
                                className:
                                  "whitespace-nowrap !px-1.5 !py-0.5 text-xs",
                                loading: M,
                                color: "neutral",
                                size: "small",
                                as: "button",
                                onClick: () => {
                                  W(!0), (0, y.WD)((0, y.iZ)(v));
                                },
                                children: (0, b.jsx)(m.YFh, {
                                  className: "icon-sm",
                                }),
                              }),
                              (0, b.jsxs)("span", {
                                className:
                                  "flex flex-row items-center justify-center space-x-2 truncate whitespace-nowrap text-xs font-medium uppercase text-token-text-secondary",
                                children: [
                                  (0, b.jsxs)("span", {
                                    className:
                                      "inline-flex items-center gap-x-1.5 rounded-full bg-yellow-100 px-1.5 py-0.5 text-xs font-medium text-yellow-800",
                                    children: [
                                      (0, b.jsx)("svg", {
                                        className:
                                          "h-1.5 w-1.5 fill-yellow-500",
                                        viewBox: "0 0 6 6",
                                        "aria-hidden": "true",
                                        children: (0, b.jsx)("circle", {
                                          cx: 3,
                                          cy: 3,
                                          r: 3,
                                        }),
                                      }),
                                      "".concat(B, " / ").concat(Z),
                                    ],
                                  }),
                                  (0, b.jsx)(
                                    h.Z,
                                    N(
                                      N({}, P.node),
                                      {},
                                      { values: { focusedNodeId: v } }
                                    )
                                  ),
                                ],
                              }),
                              (0, b.jsx)(g.z, {
                                disabled: !R,
                                className:
                                  "whitespace-nowrap !px-1.5 !py-0.5 text-xs",
                                loading: M,
                                color: "neutral",
                                size: "small",
                                as: "button",
                                onClick: () => {
                                  W(!0), (0, y.WD)((0, y.Q7)(v));
                                },
                                children: (0, b.jsx)(m.Tfp, {
                                  className: "icon-sm",
                                }),
                              }),
                            ],
                          }),
                          (0, b.jsx)(g.z, {
                            color: "none",
                            size: "small",
                            as: "button",
                            onClick: () => L(),
                            className: "whitespace-nowrap !pr-2",
                            children: (0, b.jsx)(m.q5L, {
                              className: "icon-sm",
                            }),
                          }),
                        ],
                      }),
                    }),
                    a &&
                      (0, b.jsxs)(b.Fragment, {
                        children: [
                          (0, b.jsx)("div", {
                            ref: i,
                            className:
                              "min-w-20 h-full w-full space-y-2 overflow-scroll p-1 pb-12",
                            children: (0, b.jsxs)("div", {
                              className: (0, n.default)(
                                "col-span-1 grid gap-1"
                              ),
                              children: [
                                (0, b.jsx)("div", {
                                  onMouseMove: f,
                                  onMouseEnter: f,
                                  onMouseLeave: j,
                                  onMouseOut: j,
                                  onMouseUp: j,
                                  children: (0, b.jsx)(k, {
                                    parentDimensions: { width: t, height: s },
                                    targetLatencyData: a,
                                  }),
                                }),
                                (0, b.jsx)(D, {}),
                                (0, b.jsx)(O, {}),
                              ],
                            }),
                          }),
                          (0, b.jsx)(T, { resizableRef: e }),
                        ],
                      }),
                  ],
                })
              : (0, b.jsxs)(b.Fragment, {
                  children: [
                    (0, b.jsx)("div", {
                      className:
                        "font-lg flex h-full flex-col items-center justify-center text-lg",
                      children: (0, b.jsx)(
                        h.Z,
                        N({}, P.initiateCompletionRequest)
                      ),
                    }),
                    (0, b.jsx)(T, { resizableRef: e }),
                  ],
                }),
          }),
        });
      }
      let O = () => (0, b.jsx)("div", {}),
        D = () => {
          let { stats: e } = (0, w.gj)();
          return (0, b.jsxs)("div", {
            className: "space-y-3 overflow-scroll px-3",
            children: [
              (0, b.jsx)("div", {
                className: "border-b pb-3",
                children: (0, b.jsx)(M, {
                  size: "large",
                  stats: e.filter((e) => "summary" == e.category),
                }),
              }),
              (0, b.jsx)(M, { stats: e.filter((e) => "token" == e.category) }),
              (0, b.jsx)(M, {
                stats: e.filter((e) => "aggregate" == e.category),
              }),
            ],
          });
        },
        M = (e) => {
          let { stats: t, size: s = "normal" } = e;
          return (0, b.jsx)("div", {
            className: "flex flex-wrap gap-3",
            children: t.map(
              (e) =>
                e.stat &&
                (0, b.jsx)(
                  "div",
                  {
                    className: "col-span-1",
                    children: (0, b.jsxs)("div", {
                      className: (0, n.default)(
                        "overflow-hidden bg-token-main-surface-primary shadow",
                        {
                          "rounded px-2 py-1 sm:p-2": "normal" == s,
                          "rounded-lg px-2 py-3 sm:p-3": "large" == s,
                        }
                      ),
                      children: [
                        (0, b.jsx)("dt", {
                          className: (0, n.default)(
                            "truncate text-token-text-tertiary",
                            {
                              "text-xs font-medium": "normal" == s,
                              "text-sm font-medium": "large" == s,
                            }
                          ),
                          children: e.name,
                        }),
                        (0, b.jsx)("dd", {
                          className: (0, n.default)(
                            "mt-1 font-semibold text-token-text-primary",
                            {
                              "text-base tracking-tight": "normal" == s,
                              "text-xl tracking-tight": "large" == s,
                            }
                          ),
                          children: e.stat,
                        }),
                      ],
                    }),
                  },
                  e.name
                )
            ),
          });
        },
        T = (e) => {
          let { resizableRef: t } = e,
            s = (0, p.Z)(),
            i = (e) => {
              let s = window.innerWidth,
                l = window.innerHeight,
                i = {
                  "up-left": { x: 0, y: 0 },
                  "down-right": {
                    x: s - z.normal.width - z.padding,
                    y: l - z.normal.height - z.padding,
                  },
                  "down-left": { x: 0, y: l - z.normal.height - z.padding },
                  "up-right": { x: s - z.normal.width - z.padding, y: 0 },
                };
              t.current &&
                (t.current.updatePosition({ x: i[e].x, y: i[e].y }),
                t.current.updateSize({
                  width: z.normal.width,
                  height: z.normal.height,
                }));
            },
            n = () => {
              l.vm.hideLatencyDevTools();
            };
          return (0, b.jsxs)("div", {
            className:
              "popover sticky bottom-0 z-50 flex w-full flex-row justify-between border-t border-gray-400 bg-token-main-surface-primary p-2",
            children: [
              (0, b.jsxs)("div", {
                className: "flex flex-row gap-3",
                children: [
                  (0, b.jsx)(j.u, {
                    label: s.formatMessage(P.dragAndResizeTooltip),
                    className:
                      "item-center flex flex-col justify-center pl-2 pr-1",
                    children: (0, b.jsx)(m.uWH, { className: "icon-sm" }),
                  }),
                  (0, b.jsxs)("div", {
                    className: "flex flex-row space-x-1",
                    children: [
                      (0, b.jsx)(g.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: () => i("down-left"),
                        children: (0, b.jsx)(m.hr3, { className: "icon-sm" }),
                      }),
                      (0, b.jsx)(g.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: () => i("up-left"),
                        children: (0, b.jsx)(m.Zuc, { className: "icon-sm" }),
                      }),
                      (0, b.jsx)(g.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: () => i("up-right"),
                        children: (0, b.jsx)(m.TKU, { className: "icon-sm" }),
                      }),
                      (0, b.jsx)(g.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: () => i("down-right"),
                        children: (0, b.jsx)(m.Gx, { className: "icon-sm" }),
                      }),
                    ],
                  }),
                  (0, b.jsxs)("div", {
                    className: "flex flex-row space-x-1",
                    children: [
                      (0, b.jsx)(g.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: () => {
                          var e;
                          null === (e = t.current) ||
                            void 0 === e ||
                            e.updateSize({
                              width: z.small.width,
                              height: z.small.height,
                            });
                        },
                        children: (0, b.jsx)(h.Z, N({}, P.shrinkButton)),
                      }),
                      (0, b.jsx)(g.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: () => {
                          var e;
                          null === (e = t.current) ||
                            void 0 === e ||
                            e.updateSize({
                              width: z.normal.width,
                              height: z.normal.height,
                            });
                        },
                        children: (0, b.jsx)(h.Z, N({}, P.growButton)),
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsx)("div", {
                className: "flex flex-row justify-end gap-3",
                children: (0, b.jsx)(g.z, {
                  color: "none",
                  size: "small",
                  as: "button",
                  onClick: () => n(),
                  className: "whitespace-nowrap !pr-2",
                  children: (0, b.jsx)(h.Z, N({}, P.closeButton)),
                }),
              }),
            ],
          });
        },
        P = (0, f.vU)({
          loading: {
            id: "CompletionDevToolsWidget.loading",
            defaultMessage: "Loading...",
          },
          node: {
            id: "CompletionDevToolsWidget.node",
            defaultMessage: "Node: {focusedNodeId}",
          },
          initiateCompletionRequest: {
            id: "CompletionDevToolsWidget.initiateCompletionRequest",
            defaultMessage: "Initiate a completion request to use this feature",
          },
          shrinkButton: {
            id: "CompletionDevToolsWidget.shrinkButton",
            defaultMessage: "Shrink",
          },
          growButton: {
            id: "CompletionDevToolsWidget.growButton",
            defaultMessage: "Grow",
          },
          closeButton: {
            id: "CompletionDevToolsWidget.closeButton",
            defaultMessage: "Close",
          },
          dragAndResizeTooltip: {
            id: "CompletionDevToolsWidget.dragAndResizeTooltip",
            defaultMessage: "This widget can be dragged and resized",
          },
        });
      var W = () =>
        (0, l.tN)(l.bM.isLatencyDevtoolsVisible) ? (0, b.jsx)(C, {}) : null;
    },
  },
]);
//# sourceMappingURL=8799.db2d1ede483486a5.js.map
