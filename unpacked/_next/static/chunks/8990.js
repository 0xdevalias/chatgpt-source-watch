"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8990, 7178],
  {
    18990: function (e, t, r) {
      r.r(t),
        r.d(t, {
          InternalDevToolsEntryPoint: function () {
            return T;
          },
        });
      var s,
        l,
        n = r(99945),
        a = r(21643),
        o = r(85452),
        i = r(67217),
        c = r(47712),
        u = r(81643),
        x = r(34594),
        d = r(39882),
        m = r(70079),
        f = r(1454),
        h = r(6020),
        p = r(21389),
        g = r(27724),
        j = r(17178),
        v = r(35250),
        y =
          (((s = y || {}).StatsigUser = "Statsig User"),
          (s.FeatureGates = "Feature Gates"),
          (s.Features = "Features"),
          (s.DynamicConfigs = "Dynamic Configs"),
          (s.ExperimentalFeatureGates = "Experimental Gates"),
          (s.ExperimentalExperiments = "Experimental Experiments"),
          s);
      function N(e) {
        var t;
        let { onClose: r, isWidgetVisible: s } = e,
          l = (0, c.hz)();
        if (!(0, g.j)() || !h.Statsig.initializeCalled()) return null;
        let n = h.Statsig.getCurrentUser();
        return (0, v.jsx)(i.Z, {
          isOpen: s,
          onClose: r,
          size: "custom",
          className:
            "flex h-[600px] max-h-[60vh] max-w-2xl flex-col [&>div:nth-child(2)]:overflow-y-hidden",
          type: "success",
          title: "Experimentation DevTools",
          noPadding: !0,
          showCloseButton: !0,
          children: (0, v.jsxs)(u.fC, {
            defaultValue: y.StatsigUser,
            className: "flex h-full flex-row gap-6 p-4",
            orientation: "vertical",
            children: [
              (0, v.jsx)(u.aV, {
                className:
                  "flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2",
                children: Object.values(y).map((e) =>
                  (0, v.jsx)(
                    u.xz,
                    {
                      className:
                        "flex rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-white dark:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:text-token-text-primary",
                      value: e,
                      children: e,
                    },
                    e
                  )
                ),
              }),
              (0, v.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: y.StatsigUser,
                children: (0, v.jsx)("pre", {
                  className: "text-sm",
                  children: JSON.stringify(n, null, 2),
                }),
              }),
              (0, v.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: y.Features,
                children:
                  null !==
                    (t =
                      null == l
                        ? void 0
                        : l.map((e) =>
                            (0, v.jsx)(
                              E,
                              {
                                children: (0, v.jsx)("p", {
                                  children: String(e),
                                }),
                              },
                              e
                            )
                          )) && void 0 !== t
                    ? t
                    : null,
              }),
              (0, v.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: y.FeatureGates,
                children: Object.entries(x.tz).map((e) => {
                  let [t, r] = e;
                  return (0, v.jsx)(b, { codeName: t, statsigName: r }, t);
                }),
              }),
              (0, v.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: y.DynamicConfigs,
                children: Object.entries(x.RJ).map((e) => {
                  let [t, r] = e;
                  return (0, v.jsx)(w, { codeName: t, statsigName: r }, t);
                }),
              }),
              (0, v.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: y.ExperimentalFeatureGates,
                children: Object.entries(d.SP).map((e) => {
                  let [t, r] = e;
                  return (0, v.jsx)(O, { codeName: t, statsigName: r }, t);
                }),
              }),
              (0, v.jsx)(u.VY, {
                className: "w-full overflow-y-scroll scroll-smooth",
                value: y.ExperimentalExperiments,
                children: Object.entries(d.LA).map((e) => {
                  let [t, r] = e;
                  return (0, v.jsx)(k, { codeName: t, statsigName: r }, t);
                }),
              }),
            ],
          }),
        });
      }
      function b(e) {
        let { codeName: t, statsigName: r } = e,
          s =
            "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(
              r
            ),
          { isLoading: l, value: n } = (0, x.sB)(r);
        return (0, v.jsxs)(E, {
          children: [
            (0, v.jsx)("a", {
              href: s,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, v.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                l ? (0, v.jsx)(o.Z, {}) : null,
                (0, v.jsx)("p", {
                  className: "font-mono",
                  children: String(n),
                }),
              ],
            }),
          ],
        });
      }
      function w(e) {
        let { codeName: t, statsigName: r } = e,
          s =
            "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(
              r
            ),
          { isLoading: l, config: n } = (0, x.xb)(r),
          { 0: a, 1: o } = (0, m.useState)(!1);
        return (0, v.jsxs)(E, {
          children: [
            (0, v.jsx)("a", {
              href: s,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, v.jsx)("a", {
              href: "#",
              className: "underline",
              onClick: () => o(!0),
              children: "Show config",
            }),
            (0, v.jsx)(i.Z, {
              size: "custom",
              className: "flex h-[600px] max-h-[60vh] max-w-2xl flex-col",
              type: "success",
              title: "Dynamic Config",
              noPadding: !0,
              showCloseButton: !0,
              isOpen: !l && a,
              onClose: () => o(!1),
              children: (0, v.jsx)(j.default, { json: n.value }),
            }),
          ],
        });
      }
      function O(e) {
        let { codeName: t, statsigName: r } = e,
          s =
            "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(
              r
            ),
          { isLoading: l, value: n } = (0, d.fW)(r),
          { 0: i, 1: c } = (0, m.useState)(""),
          { gates: u } = h.Statsig.getAllOverrides(),
          x = null != u[r];
        return (0, v.jsxs)(E, {
          children: [
            (0, v.jsx)("a", {
              href: s,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, v.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                l ? (0, v.jsx)(o.Z, {}) : null,
                x
                  ? (0, v.jsx)(f.Hov, {
                      className: "text-red-500",
                      title: "Local override",
                    })
                  : null,
                (0, v.jsx)("p", {
                  className: "font-mono",
                  children: String(n),
                }),
                (0, v.jsx)(a.Z, {
                  name: "override",
                  type: "text",
                  color: "neutral",
                  placeholder: "Override",
                  value: i,
                  onChange: (e) => {
                    c(e.currentTarget.value);
                  },
                  className: "mr-px w-20",
                  onPressEnter: (e) => {
                    (0, d.Gh)(r, "true" === e || ("false" !== e && null));
                  },
                }),
              ],
            }),
          ],
        });
      }
      function k(e) {
        let { codeName: t, statsigName: r } = e,
          s =
            "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/experiments/".concat(
              r
            ),
          { isLoading: l, config: n } = (0, d.mK)(r),
          i = n.get(x.Hy.TREATMENT, x.wA.CONTROL),
          { 0: c, 1: u } = (0, m.useState)(""),
          { configs: p } = h.Statsig.getAllOverrides(),
          g = null != p[r];
        return (0, v.jsxs)(E, {
          children: [
            (0, v.jsx)("a", {
              href: s,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline",
              children: t,
            }),
            (0, v.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                l ? (0, v.jsx)(o.Z, {}) : null,
                g
                  ? (0, v.jsx)(f.Hov, {
                      className: "text-red-500",
                      title: "Local override",
                    })
                  : null,
                (0, v.jsx)("p", {
                  className: "font-mono",
                  children: String(i),
                }),
                (0, v.jsx)(a.Z, {
                  name: "override",
                  type: "text",
                  color: "neutral",
                  placeholder: "Override",
                  value: c,
                  onChange: (e) => {
                    u(e.currentTarget.value);
                  },
                  className: "mr-px w-20",
                  onPressEnter: (e) => {
                    (0, d.mY)(r, e ? { [x.Hy.TREATMENT]: e } : null);
                  },
                }),
              ],
            }),
          ],
        });
      }
      let E = p.Z.div(
        l ||
          (l = (0, n.Z)([
            "flex items-center justify-between border-b border-token-border-light py-3 text-sm text-token-text-primary last-of-type:border-b-0",
          ]))
      );
      var S = r(54225),
        C = r(70853),
        D = r(70187),
        L = r(66128);
      function P() {
        let e = (0, g.j)(),
          t = d.VG.AnonChatLayer,
          r = d.yp.ANON_COMPOSER_DISPLAY_VARIANT,
          { layer: s } = (0, d.U3)(t),
          l = s.get(r, L.tg.Default),
          { layer: n } = (0, d.U3)(d.VG.AnonLocalizationLayer),
          a = n.get(d.yp.IS_L10N_ENABLED, !1);
        return (
          (0, m.useEffect)(() => {
            let s = [
                {
                  isShortcut: (e) => e.ctrlKey && "2" === e.key,
                  toggle: () => {
                    let e = l === L.tg.Default ? L.tg.Hedgehog : L.tg.Default;
                    (0, d.H9)(t, { [r]: e });
                  },
                },
                {
                  isShortcut: (e) => e.ctrlKey && "3" === e.key,
                  toggle: () => {
                    (0, d.H9)(d.VG.AnonLocalizationLayer, {
                      [d.yp.IS_L10N_ENABLED]: !a,
                    });
                  },
                },
              ],
              n = (t) => {
                if (e) for (let e of s) e.isShortcut(t) && e.toggle();
              };
            return (
              window.addEventListener("keydown", n),
              () => {
                window.removeEventListener("keydown", n);
              }
            );
          }, [e, t, l, r, a]),
          null
        );
      }
      var V = r(13106),
        A = r(13968);
      function T() {
        let e = (0, g.j)(),
          { 0: t, 1: r } = (0, m.useState)(!1);
        return e
          ? (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsxs)(A.v, {
                  as: "div",
                  className: "group relative",
                  children: [
                    (0, v.jsx)(A.v.Button, {
                      className:
                        "flex items-center justify-center rounded-full border border-token-border-light text-token-text-secondary",
                      children: (0, v.jsx)("div", {
                        className:
                          "flex h-6 w-6 items-center justify-center text-xs",
                        children: (0, v.jsx)(f.NNy, { className: "icon-sm" }),
                      }),
                    }),
                    (0, v.jsx)(C.m, {
                      children: (0, v.jsxs)(A.v.Items, {
                        className:
                          "popover absolute bottom-full right-0 z-20 mb-2 w-full min-w-[200px] overflow-hidden rounded-md border border-token-border-light bg-token-main-surface-primary p-1.5 shadow-lg outline-none",
                        children: [
                          (0, v.jsx)(S.s, {
                            children: (0, v.jsx)("span", {
                              className: "truncate text-xs text-[#FF00FF]",
                              children: "Internal only",
                            }),
                          }),
                          (0, v.jsxs)(S.s, {
                            onClick: () => {
                              r((e) => !e);
                            },
                            children: [
                              (0, v.jsx)(D.Gi, { className: "icon-md" }),
                              "Experimentation",
                            ],
                          }),
                          (0, v.jsxs)(S.s, {
                            onClick: () => {
                              V.vm.showLatencyDevTools();
                            },
                            children: [
                              (0, v.jsx)(f.DKx, { className: "icon-md" }),
                              "Latency",
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, v.jsx)(P, {}),
                (0, v.jsx)(N, {
                  isWidgetVisible: t,
                  onClose: () => {
                    r(!1);
                  },
                }),
              ],
            })
          : null;
      }
    },
    17178: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return u;
          },
        });
      var s = r(18450),
        l = r(69920),
        n = r(51315),
        a = r(66693),
        o = r(10031),
        i = r(35250);
      function c(e, t) {
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
      function u(e) {
        let { json: t, jsonViewProps: r } = e,
          u = (0, l.Gv)();
        return (0, i.jsx)(
          n.ZP,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? c(Object(r), !0).forEach(function (t) {
                    (0, s.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : c(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
            }
            return e;
          })(
            {
              enableClipboard: !0,
              displayDataTypes: !1,
              displayObjectSize: !1,
              value: t,
              style: u ? a.$ : o.W,
              shortenTextAfterLength: 120,
            },
            r
          )
        );
      }
    },
  },
]);
//# sourceMappingURL=8990.2a89f3d48f88a6fc.js.map
