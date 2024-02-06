"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9387],
  {
    39387: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return B;
          },
        });
      var s = n(18008),
        i = n(3125),
        r = n(36112),
        o = n(19841),
        a = n(5397),
        l = n.n(a),
        c = n(70079),
        d = n(35236),
        u = n(84589),
        f = n.n(u),
        x = n(97296),
        m = n(1454),
        h = n(32004),
        p = n(70671),
        g = n(94968),
        j = n(91559),
        w = n(90166),
        y = n(10936),
        v = n(68113),
        b = n(35250);
      function N(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : N(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var k = {
          padding: 20,
          zIndex: 1e3,
          xOffset: 300,
          yOffset: 200,
          normal: { width: 600, height: 585 },
          small: { width: 600, height: 335 },
        },
        C = l()(
          function () {
            return Promise.all([n.e(5823), n.e(1994)]).then(n.bind(n, 1994));
          },
          {
            ssr: !1,
            loading: function () {
              return (0, b.jsx)("div", {
                className: "p-3",
                children: (0, b.jsx)("p", {
                  className:
                    "flex items-center justify-center text-center font-mono text-sm uppercase text-token-text-primary",
                  style: { height: 200 },
                  children: (0, b.jsx)(h.Z, z({}, W.loading)),
                }),
              });
            },
            loadableGenerated: {
              webpack: function () {
                return [1994];
              },
            },
          }
        );
      function O() {
        var e = (0, c.useRef)(null),
          t = f()(),
          n = (0, i.Z)(t, 2),
          r = n[0],
          a = r.width,
          l = r.height,
          u = n[1],
          p = (0, y.gj)().targetLatencyData,
          g = (0, s.tN)(s.bM.isLatencyDevtoolsVisible);
        (0, c.useEffect)(function () {
          if (e.current) {
            var t = window.innerWidth,
              n = window.innerHeight;
            e.current.updatePosition({
              x: t - (k.normal.width + k.xOffset) - k.padding,
              y: n - (k.normal.height + k.yOffset) - k.padding,
            }),
              e.current.updateSize({
                width: k.normal.width,
                height: k.normal.height,
              });
          }
        }, []);
        var w = (0, c.useState)(!1),
          N = w[0],
          O = w[1],
          T = function () {
            N || O(!0);
          },
          B = function () {
            N && O(!1);
          },
          Z = (0, v.AA)(),
          L = (0, v.JP)(),
          R = (0, c.useState)(!1),
          S = R[0],
          E = R[1],
          I = (0, c.useMemo)(
            function () {
              return Z ? (0, v.j7)(Z) + 1 : 0;
            },
            [Z]
          ),
          q = (0, c.useMemo)(
            function () {
              return Z ? (0, v.BC)() : 0;
            },
            [Z]
          );
        (0, c.useEffect)(
          function () {
            E(!1);
          },
          [Z, E]
        );
        var A = function () {
          g ? s.vm.hideLatencyDevTools() : s.vm.showLatencyDevTools();
        };
        if (!g) return null;
        var F = Object.keys(L).length > 1;
        return (0, b.jsx)(x.E.div, {
          initial: { opacity: 0 },
          transition: { delay: 1, duration: 0.2 },
          animate: {
            opacity: 1,
            transition: { duration: 0.2, ease: "easeIn" },
          },
          exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
          children: (0, b.jsx)(d.s, {
            disableDragging: N,
            ref: e,
            style: {
              zIndex: k.zIndex,
              width: k.normal.width,
              height: k.normal.height,
            },
            className: (0, o.default)(
              "transition-delay group relative flex h-full flex-col overflow-hidden rounded-md border-2 border-gray-500 bg-token-popover-surface-primary opacity-80 shadow-md transition-opacity delay-100 hover:opacity-100 hover:delay-0 dark:border-white"
            ),
            children: Z
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
                              (0, b.jsx)(j.z, {
                                disabled: !F,
                                className:
                                  "whitespace-nowrap !px-1.5 !py-0.5 text-xs",
                                loading: S,
                                color: "neutral",
                                size: "small",
                                as: "button",
                                onClick: function () {
                                  E(!0), (0, v.WD)((0, v.iZ)(Z));
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
                                      "".concat(I, " / ").concat(q),
                                    ],
                                  }),
                                  (0, b.jsx)(
                                    h.Z,
                                    z(
                                      z({}, W.node),
                                      {},
                                      { values: { focusedNodeId: Z } }
                                    )
                                  ),
                                ],
                              }),
                              (0, b.jsx)(j.z, {
                                disabled: !F,
                                className:
                                  "whitespace-nowrap !px-1.5 !py-0.5 text-xs",
                                loading: S,
                                color: "neutral",
                                size: "small",
                                as: "button",
                                onClick: function () {
                                  E(!0), (0, v.WD)((0, v.Q7)(Z));
                                },
                                children: (0, b.jsx)(m.Tfp, {
                                  className: "icon-sm",
                                }),
                              }),
                            ],
                          }),
                          (0, b.jsx)(j.z, {
                            color: "none",
                            size: "small",
                            as: "button",
                            onClick: function () {
                              return A();
                            },
                            className: "whitespace-nowrap !pr-2",
                            children: (0, b.jsx)(m.q5L, {
                              className: "icon-sm",
                            }),
                          }),
                        ],
                      }),
                    }),
                    p &&
                      (0, b.jsxs)(b.Fragment, {
                        children: [
                          (0, b.jsx)("div", {
                            ref: u,
                            className:
                              "min-w-20 h-full w-full space-y-2 overflow-scroll p-1 pb-12",
                            children: (0, b.jsxs)("div", {
                              className: (0, o.default)(
                                "col-span-1 grid gap-1"
                              ),
                              children: [
                                (0, b.jsx)("div", {
                                  onMouseMove: T,
                                  onMouseEnter: T,
                                  onMouseLeave: B,
                                  onMouseOut: B,
                                  onMouseUp: B,
                                  children: (0, b.jsx)(C, {
                                    parentDimensions: { width: a, height: l },
                                    targetLatencyData: p,
                                  }),
                                }),
                                (0, b.jsx)(M, {}),
                                (0, b.jsx)(D, {}),
                              ],
                            }),
                          }),
                          (0, b.jsx)(P, { resizableRef: e }),
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
                        z({}, W.initiateCompletionRequest)
                      ),
                    }),
                    (0, b.jsx)(P, { resizableRef: e }),
                  ],
                }),
          }),
        });
      }
      var D = function () {
          return (0, b.jsx)("div", {});
        },
        M = function () {
          var e = (0, y.gj)().stats;
          return (0, b.jsxs)("div", {
            className: "space-y-3 overflow-scroll px-3",
            children: [
              (0, b.jsx)("div", {
                className: "border-b pb-3",
                children: (0, b.jsx)(T, {
                  size: "large",
                  stats: e.filter(function (e) {
                    return "summary" == e.category;
                  }),
                }),
              }),
              (0, b.jsx)(T, {
                stats: e.filter(function (e) {
                  return "token" == e.category;
                }),
              }),
              (0, b.jsx)(T, {
                stats: e.filter(function (e) {
                  return "aggregate" == e.category;
                }),
              }),
            ],
          });
        },
        T = function (e) {
          var t = e.stats,
            n = e.size,
            s = void 0 === n ? "normal" : n;
          return (0, b.jsx)("div", {
            className: "flex flex-wrap gap-3",
            children: t.map(function (e) {
              return (
                e.stat &&
                (0, b.jsx)(
                  "div",
                  {
                    className: "col-span-1",
                    children: (0, b.jsxs)("div", {
                      className: (0, o.default)(
                        "overflow-hidden bg-token-main-surface-primary shadow",
                        {
                          "rounded px-2 py-1 sm:p-2": "normal" == s,
                          "rounded-lg px-2 py-3 sm:p-3": "large" == s,
                        }
                      ),
                      children: [
                        (0, b.jsx)("dt", {
                          className: (0, o.default)(
                            "truncate text-token-text-tertiary",
                            {
                              "text-xs font-medium": "normal" == s,
                              "text-sm font-medium": "large" == s,
                            }
                          ),
                          children: e.name,
                        }),
                        (0, b.jsx)("dd", {
                          className: (0, o.default)(
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
              );
            }),
          });
        },
        P = function (e) {
          var t = e.resizableRef,
            n = (0, p.Z)(),
            i = function (e) {
              var n = window.innerWidth,
                s = window.innerHeight,
                i = {
                  "up-left": { x: 0, y: 0 },
                  "down-right": {
                    x: n - k.normal.width - k.padding,
                    y: s - k.normal.height - k.padding,
                  },
                  "down-left": { x: 0, y: s - k.normal.height - k.padding },
                  "up-right": { x: n - k.normal.width - k.padding, y: 0 },
                };
              t.current &&
                (t.current.updatePosition({ x: i[e].x, y: i[e].y }),
                t.current.updateSize({
                  width: k.normal.width,
                  height: k.normal.height,
                }));
            },
            r = function () {
              s.vm.hideLatencyDevTools();
            };
          return (0, b.jsxs)("div", {
            className:
              "sticky bottom-0 z-50 flex w-full flex-row justify-between border-t border-gray-400 bg-token-popover-surface-primary p-2",
            children: [
              (0, b.jsxs)("div", {
                className: "flex flex-row gap-3",
                children: [
                  (0, b.jsx)(w.u, {
                    label: n.formatMessage(W.dragAndResizeTooltip),
                    className:
                      "item-center flex flex-col justify-center pl-2 pr-1",
                    children: (0, b.jsx)(m.uWH, { className: "icon-sm" }),
                  }),
                  (0, b.jsxs)("div", {
                    className: "flex flex-row space-x-1",
                    children: [
                      (0, b.jsx)(j.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: function () {
                          return i("down-left");
                        },
                        children: (0, b.jsx)(m.hr3, { className: "icon-sm" }),
                      }),
                      (0, b.jsx)(j.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: function () {
                          return i("up-left");
                        },
                        children: (0, b.jsx)(m.Zuc, { className: "icon-sm" }),
                      }),
                      (0, b.jsx)(j.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: function () {
                          return i("up-right");
                        },
                        children: (0, b.jsx)(m.TKU, { className: "icon-sm" }),
                      }),
                      (0, b.jsx)(j.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: function () {
                          return i("down-right");
                        },
                        children: (0, b.jsx)(m.Gx, { className: "icon-sm" }),
                      }),
                    ],
                  }),
                  (0, b.jsxs)("div", {
                    className: "flex flex-row space-x-1",
                    children: [
                      (0, b.jsx)(j.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: function () {
                          var e;
                          null === (e = t.current) ||
                            void 0 === e ||
                            e.updateSize({
                              width: k.small.width,
                              height: k.small.height,
                            });
                        },
                        children: (0, b.jsx)(h.Z, z({}, W.shrinkButton)),
                      }),
                      (0, b.jsx)(j.z, {
                        color: "neutral",
                        size: "small",
                        as: "button",
                        onClick: function () {
                          var e;
                          null === (e = t.current) ||
                            void 0 === e ||
                            e.updateSize({
                              width: k.normal.width,
                              height: k.normal.height,
                            });
                        },
                        children: (0, b.jsx)(h.Z, z({}, W.growButton)),
                      }),
                    ],
                  }),
                ],
              }),
              (0, b.jsx)("div", {
                className: "flex flex-row justify-end gap-3",
                children: (0, b.jsx)(j.z, {
                  color: "none",
                  size: "small",
                  as: "button",
                  onClick: function () {
                    return r();
                  },
                  className: "whitespace-nowrap !pr-2",
                  children: (0, b.jsx)(h.Z, z({}, W.closeButton)),
                }),
              }),
            ],
          });
        },
        W = (0, g.vU)({
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
        }),
        B = function () {
          return (0, s.tN)(s.bM.isLatencyDevtoolsVisible)
            ? (0, b.jsx)(O, {})
            : null;
        };
    },
  },
]);
//# sourceMappingURL=9387.4d07776b2bcf19aa.js.map
