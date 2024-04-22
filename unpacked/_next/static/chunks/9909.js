"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9909],
  {
    35562: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return T;
          },
        });
      var l = a(49305),
        n = a(20236),
        s = a(53362),
        i = a(38801),
        r = a(67852),
        o = a(66315),
        c = a(19841),
        d = a(70079),
        u = a(84692),
        m = a(85452),
        x = a(88342),
        p = a(66452),
        f = a(44151),
        g = a(26524),
        h = a(59669),
        b = a(65998),
        y = a(25771),
        j = a(35250);
      b.kL.register(
        b.qi,
        b.uw,
        b.f$,
        b.ZL,
        b.Dx,
        b.u,
        b.De,
        b.ST,
        b.od,
        b.jn,
        b.wL
      );
      let v = (0, d.forwardRef)((e, t) => {
        let { chart: a } = e,
          l = (0, d.useRef)(null);
        (0, d.useImperativeHandle)(t, () => ({
          getBase64Image: () => {
            if (!l.current) {
              o.U.addError("Chart instance is not yet available.");
              return;
            }
            return l.current.toBase64Image();
          },
        }));
        let n = a.datasets.map((e) => {
          let t = { label: e.label, data: e.data };
          return (
            e.colors &&
              e.colors.length > 0 &&
              ((t.backgroundColor = e.colors), (t.borderColor = e.colors)),
            t
          );
        });
        return "bar" === a.chart_type
          ? (0, j.jsx)(y.$Q, {
              ref: l,
              options: {
                responsive: !0,
                maintainAspectRatio: !1,
                plugins: {
                  legend: { display: (null != n ? n : []).length > 1 },
                  title: { display: !1, text: a.title },
                },
                scales: {
                  x: { title: { display: !0, text: a.x_label } },
                  y: { title: { display: !0, text: a.y_label } },
                },
              },
              data: { labels: a.labels, datasets: null != n ? n : [] },
            })
          : "pie" === a.chart_type
            ? (0, j.jsx)(y.by, {
                ref: l,
                options: {
                  responsive: !0,
                  plugins: {
                    legend: { position: "bottom" },
                    title: { display: !1, text: a.title },
                  },
                },
                data: { labels: a.labels, datasets: null != n ? n : [] },
              })
            : "line" === a.chart_type
              ? (0, j.jsx)(y.x1, {
                  ref: l,
                  options: {
                    scales: {
                      x: { title: { display: !0, text: a.x_label } },
                      y: { title: { display: !0, text: a.y_label } },
                    },
                    plugins: {
                      legend: { display: (null != n ? n : []).length > 1 },
                      title: { display: !1, text: a.title },
                    },
                  },
                  data: { labels: a.labels, datasets: null != n ? n : [] },
                })
              : "scatter" === a.chart_type
                ? (0, j.jsx)(y.bp, {
                    ref: l,
                    options: {
                      scales: {
                        x: { title: { display: !0, text: a.x_label } },
                        y: { title: { display: !0, text: a.y_label } },
                      },
                      plugins: {
                        legend: { display: (null != n ? n : []).length > 1 },
                        title: { display: !1, text: a.title },
                      },
                    },
                    data: { labels: a.labels, datasets: null != n ? n : [] },
                  })
                : (0, j.jsx)(u.Z, {
                    id: "Chart.invalidChartType",
                    defaultMessage: "Invalid chart type",
                  });
      });
      v.displayName = "Chart";
      var w = a(18450),
        k = a(35595),
        N = a(15777),
        C = a(72003);
      a(7235);
      var _ = a(47249),
        z = a(41105);
      function E(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          t &&
            (l = l.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, l);
        }
        return a;
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(a), !0).forEach(function (t) {
                (0, w.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : E(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
        }
        return e;
      }
      function O(e) {
        let {
            table: t,
            height: a,
            width: l,
            isInFocusedView: n = !1,
            className: s = "",
          } = e,
          { targetedContent: o, setTargetedContent: c } = (0, z.Q)(),
          { 0: u, 1: m } = (0, d.useState)([]);
        (0, d.useEffect)(() => {
          t.columnNames.length > 0 &&
            m(
              t.columnNames.map((e, t) => ({
                id: "id:".concat(t),
                title: e,
                maxWidth: 500,
              }))
            );
        }, [t.columnNames]);
        let { 0: x, 1: p } = (0, d.useState)({
            columns: N.EV.empty(),
            rows: N.EV.empty(),
          }),
          f = (0, d.useCallback)(
            function (e) {
              let [a, l] = e,
                n = t.rows[l];
              return {
                kind: (function (e) {
                  switch (e) {
                    case "number":
                      return N.p6.Number;
                    case "imageUrl":
                      return N.p6.Image;
                    default:
                      return N.p6.Text;
                  }
                })(t.columnTypes[a]),
                data: n[a],
                allowOverlay: !1,
                displayData: String(n[a]),
              };
            },
            [t.columnTypes, t.rows]
          ),
          g = (0, d.useCallback)(
            (e) => {
              if (e.columns.length > 0) {
                let a = e.columns.items.flatMap((e) =>
                  t.columnNames.slice(e[0], e[1])
                );
                i.A.logEvent(r.M.adaColumnTargeted),
                  c({
                    label: (0, j.jsx)("div", {
                      children: (0, j.jsxs)("div", {
                        className: "text-token-text-tertiary",
                        children: [
                          (0, j.jsxs)("div", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                              (0, j.jsx)(_.Mie, { size: 20 }),
                              " ",
                              a.length,
                              " ",
                              1 === a.length ? "Column" : "Columns",
                            ],
                          }),
                          (0, j.jsx)("div", {
                            className: "mt-3 flex gap-3",
                            children: a.map((e) =>
                              (0, j.jsx)(
                                "div",
                                {
                                  className:
                                    "line-clamp-2 rounded-md bg-token-main-surface-secondary px-2 py-1 text-token-text-primary",
                                  title: e,
                                  children: e,
                                },
                                e
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                    isFocusedViewContent: n,
                    createNewCompletionParams: (e) =>
                      D(
                        e,
                        "The user has selected the columns:  ".concat(
                          a.map((e) => '"'.concat(e, '"')).join(", ")
                        )
                      ),
                  });
              } else if (e.rows.length > 0) {
                let t = e.rows.items.flatMap((e) => {
                  let [t, a] = e,
                    l = [];
                  for (let e = t; e < a; e++) l.push(e);
                  return l;
                });
                i.A.logEvent(r.M.adaRowTargeted),
                  c({
                    label: (0, j.jsx)("div", {
                      children: (0, j.jsx)("div", {
                        className: "text-token-text-tertiary",
                        children: (0, j.jsxs)("div", {
                          className: "flex items-center gap-2 text-sm",
                          children: [
                            (0, j.jsx)(_.Mie, { size: 20 }),
                            " ",
                            t.length,
                            " ",
                            1 === t.length ? "Row" : "Rows",
                            " (",
                            t.map((e) => "".concat(e + 1)).join(", "),
                            ")",
                          ],
                        }),
                      }),
                    }),
                    isFocusedViewContent: n,
                    createNewCompletionParams: (e) =>
                      D(
                        e,
                        "The user has selected rows at the following indices: ".concat(
                          t.map((e) => '"'.concat(e, '"')).join(", ")
                        )
                      ),
                  });
              } else if (e.current) {
                let t = e.current.range.x,
                  a = e.current.range.y,
                  l = e.current.range.x + e.current.range.width,
                  s = e.current.range.y + e.current.range.height,
                  o = (l - t) * (s - a);
                i.A.logEvent(r.M.adaRangeTargeted),
                  c({
                    label: (0, j.jsx)("div", {
                      children: (0, j.jsx)("div", {
                        className: "text-token-text-tertiary",
                        children: (0, j.jsxs)("div", {
                          className: "flex items-center gap-2 text-sm",
                          children: [
                            (0, j.jsx)(_.Mie, { size: 20 }),
                            " ",
                            o,
                            " ",
                            1 === o ? "Cell" : "Cells",
                          ],
                        }),
                      }),
                    }),
                    isFocusedViewContent: n,
                    createNewCompletionParams: (e) =>
                      D(
                        e,
                        "The user has selected a range at the iloc: "
                          .concat(a, ":")
                          .concat(s, ", ")
                          .concat(t, ":")
                          .concat(l, " in the current data")
                      ),
                  });
              }
              p(e);
            },
            [t.columnNames, c, n]
          );
        return (
          (0, d.useEffect)(() => {
            void 0 === o && p({ columns: N.EV.empty(), rows: N.EV.empty() });
          }, [o]),
          (0, j.jsx)(j.Fragment, {
            children: (0, j.jsx)(C.F, {
              getCellContent: f,
              columns: u,
              rows: t.rows.length,
              gridSelection: x,
              onGridSelectionChange: g,
              smoothScrollX: !0,
              smoothScrollY: !0,
              className: s,
              rowMarkers: "clickable-number",
              height: a,
              width: l,
              rowMarkerTheme: { bgCell: "#F7F7F8", textLight: "#0D0D0D" },
              theme: { textHeader: "#0D0D0D", textDark: "#676767" },
              rowMarkerWidth: 30,
              rowHeight: 48,
              verticalBorder: !0,
              minColumnWidth: 10,
              maxColumnWidth: 500,
              onColumnResize: (e, t, a) => {
                m((l) => {
                  let n = [...l];
                  return (n[a] = M(M({}, e), {}, { width: t })), n;
                });
              },
            }),
          })
        );
      }
      function D(e, t) {
        let a = (0, k.bm)(t);
        return M(
          M({}, e),
          {},
          {
            messageMetadata: M(
              M({}, e.messageMetadata),
              {},
              { targeted_reply: t }
            ),
            appendMessages:
              null == e.appendMessages ? [a] : [...e.appendMessages, a],
          }
        );
      }
      var A = a(33271);
      function T(e) {
        let { visualization: t, expanded: a = !1 } = e;
        return "chart" === t.type
          ? void 0 == t.fallback_image
            ? (o.U.addError(
                "Chart visualizations require a fallback image message"
              ),
              null)
            : t.fallback_to_image
              ? void 0 == t.fallback_image
                ? (o.U.addError(
                    "No fallback image message provided for fallback chart"
                  ),
                  null)
                : (0, j.jsx)(L, { visualization: t, expanded: a })
              : (0, j.jsx)(Z, { visualization: t, expanded: a })
          : "table" === t.type
            ? (0, j.jsx)(F, { visualization: t, expanded: a })
            : (o.U.addError("Unsupported visualization type", t.type), null);
      }
      let S = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            a = document.createElement("a");
          (a.href = e), t && (a.download = t), a.click();
        },
        V = async (e) => {
          if (null == e.image_url) {
            o.U.addError("No image url provided for download");
            return;
          }
          let t = (0, p.Iy)(e.image_url),
            a = await s.Z.getFileDownloadLink(t);
          if (a.status === l.KF.Success) {
            let e = await fetch(a.download_url),
              t = await e.blob();
            S(URL.createObjectURL(t), "output.png");
          }
        };
      function F(e) {
        let t,
          { visualization: a, expanded: l } = e,
          n = (0, f.Ex)() && !l,
          { isLoading: s, data: i, isError: r } = (0, A.CJ)(a),
          { 0: o, 1: c } = (0, d.useState)(),
          u = (0, d.useCallback)(() => {
            i && S(i.download_url);
          }, [i]),
          { 0: p, 1: h } = (0, d.useState)(0),
          { 0: b, 1: y } = (0, d.useState)(0),
          v = (0, d.useRef)(null);
        if (i) {
          if (Array.isArray(i.content)) {
            var w;
            t =
              null !== (w = i.content.find((e) => e.name == o)) && void 0 !== w
                ? w
                : i.content[0];
          } else t = i.content;
        }
        let k = () => {
          v.current && y(v.current.offsetWidth);
        };
        return ((0, d.useEffect)(
          () => (
            k(),
            window.addEventListener("resize", k),
            () => window.removeEventListener("resize", k)
          ),
          []
        ),
        (0, d.useEffect)(() => {
          let e = () => {
            h(window.innerHeight - 48);
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []),
        r)
          ? (0, j.jsx)(R, { fileName: a.title })
          : (0, j.jsx)("div", {
              ref: v,
              children: (0, j.jsx)(P, {
                focusObject: { type: g.zG.ADAVisualization, visualization: a },
                title: (0, j.jsxs)(j.Fragment, {
                  children: [
                    a.title,
                    !n &&
                      Array.isArray(null == i ? void 0 : i.content) &&
                      (0, j.jsxs)(x.Z.Root, {
                        defaultValue: o,
                        onValueChange: (e) => {
                          c(e);
                        },
                        children: [
                          (0, j.jsxs)(x.Z.Trigger, {
                            className:
                              "m-0 h-6 bg-transparent p-1 text-xs font-medium",
                            children: [
                              null != o ? o : i.content[0].name,
                              (0, j.jsx)(x.Z.Icon, {}),
                            ],
                          }),
                          (0, j.jsx)(x.Z.Portal, {
                            children: (0, j.jsx)(x.Z.Content, {
                              children: i.content.map((e) => {
                                var t;
                                return (0, j.jsx)(
                                  x.Z.Item,
                                  {
                                    className: "text-xs font-medium",
                                    value:
                                      null !== (t = e.name) && void 0 !== t
                                        ? t
                                        : "",
                                    children: e.name,
                                  },
                                  e.name
                                );
                              }),
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
                onDownload: u,
                expanded: l,
                children:
                  s || void 0 == t
                    ? (0, j.jsx)(m.Z, {})
                    : (0, j.jsx)(O, {
                        table: t,
                        height: l ? p : 400,
                        width: b,
                      }),
              }),
            });
      }
      function R(e) {
        let { fileName: t = "" } = e;
        return (0, j.jsx)("div", {
          className: "w-full rounded-xl border border-red-600 p-3",
          children: (0, j.jsxs)("div", {
            className: "my-0 flex items-center justify-between font-light",
            children: [
              (0, j.jsx)("div", {
                className: "flex items-center gap-2",
                children: (0, j.jsx)("p", {
                  className: "m-0 p-0 text-lg font-medium capitalize",
                  children: t,
                }),
              }),
              (0, j.jsx)("span", {
                className: "text-sm text-red-600",
                children: (0, j.jsx)(u.Z, {
                  id: "ADAVisualzationComponent.unableToLoadOutput",
                  defaultMessage: "Unable to display visualization",
                }),
              }),
            ],
          }),
        });
      }
      function Z(e) {
        let { visualization: t, expanded: a } = e,
          { isLoading: l, data: n, isError: s } = (0, A.VX)(t),
          i = (0, d.useRef)(null),
          { 0: r, 1: o } = (0, d.useState)(!1),
          c = (0, d.useCallback)(async () => {
            if (r && t.fallback_image) await V(t.fallback_image);
            else if (i.current) {
              let e = i.current.getBase64Image();
              e && S(e, "".concat(t.title, ".png"));
            }
          }, [t.fallback_image, r, i, t.title]);
        return s
          ? (0, j.jsx)(R, { fileName: t.title })
          : (0, j.jsx)(P, {
              focusObject: { type: g.zG.ADAVisualization, visualization: t },
              title: t.title,
              onDownload: c,
              onToggleView: () => {
                o(!r);
              },
              expanded: a,
              children:
                l || void 0 == n
                  ? (0, j.jsx)(m.Z, {})
                  : r && t.fallback_image
                    ? (0, j.jsx)(h.Z, { jupyterMessage: t.fallback_image })
                    : (0, j.jsx)(v, { ref: i, chart: n.content }),
            });
      }
      function L(e) {
        let { visualization: t, expanded: a } = e,
          l = (0, d.useCallback)(async () => {
            t.fallback_image && (await V(t.fallback_image));
          }, [t.fallback_image]);
        return void 0 == t.fallback_image
          ? null
          : (0, j.jsx)(P, {
              focusObject: { type: g.zG.ADAVisualization, visualization: t },
              title: t.title,
              onDownload: l,
              expanded: a,
              children: (0, j.jsx)(h.Z, { jupyterMessage: t.fallback_image }),
            });
      }
      function P(e) {
        let {
            focusObject: t,
            title: a = "",
            onDownload: l,
            onToggleView: s,
            expanded: o = !1,
            children: u,
          } = e,
          m = (0, f.Ex)() && !o,
          x = (0, g.rE)(),
          p =
            x &&
            x.type == g.zG.ADAVisualization &&
            x.type == t.type &&
            x.visualization.file_id == t.visualization.file_id,
          { 0: h, 1: b } = (0, d.useState)(!1),
          y = (0, d.useCallback)(() => {
            i.A.logEvent(r.M.adaFocusModeToggled),
              p ? g.RT.close() : g.RT.setFocusedObject(t);
          }, [p, t]),
          v = (m && h) || !m,
          w = "chart" === t.visualization.type ? n.X5Q : n.tXQ;
        return (0, j.jsxs)("div", {
          className: (0, c.default)(
            "relative overflow-hidden text-token-text-primary",
            !o && "rounded-xl border",
            m ? "w-56 cursor-pointer" : "w-full",
            m &&
              (p
                ? "border-blue-selection"
                : "border-token-border-light  text-token-text-secondary")
          ),
          onMouseEnter: () => {
            b(!0);
          },
          onMouseLeave: () => {
            b(!1);
          },
          onClick: () => {
            m && y();
          },
          children: [
            (0, j.jsxs)("div", {
              className: (0, c.default)(
                "flex justify-between bg-token-main-surface-primary px-4 py-3"
              ),
              children: [
                (0, j.jsx)("div", {
                  className: (0, c.default)(
                    "my-0 items-center font-medium capitalize",
                    m
                      ? "overflow-hidden overflow-ellipsis whitespace-nowrap text-sm"
                      : "flex"
                  ),
                  children: a,
                }),
                (0, j.jsxs)("div", {
                  className: (0, c.default)("flex items-center gap-3"),
                  children: [
                    !m &&
                      s &&
                      (0, j.jsx)("button", {
                        onClick: s,
                        className: "flex items-center text-xs",
                        children: (0, j.jsx)(n.q$4, {
                          className:
                            "icon-md text-token-text-tertiary hover:text-token-text-primary",
                        }),
                      }),
                    !m &&
                      l &&
                      (0, j.jsx)("button", {
                        onClick: l,
                        className: "flex items-center text-xs",
                        children: (0, j.jsx)(n._8t, {
                          className:
                            "icon-md text-token-text-tertiary hover:text-token-text-primary",
                        }),
                      }),
                    v &&
                      (0, j.jsx)("button", {
                        onClick: y,
                        className: "flex items-center text-xs",
                        children: p
                          ? (0, j.jsx)(j.Fragment, {
                              children: (0, j.jsx)(n.W5x, {
                                className:
                                  "icon-md text-token-text-tertiary hover:text-token-text-primary",
                              }),
                            })
                          : (0, j.jsx)(j.Fragment, {
                              children: (0, j.jsx)(n.Qq, {
                                className:
                                  "icon-md text-token-text-tertiary hover:text-token-text-primary",
                              }),
                            }),
                      }),
                    m &&
                      !h &&
                      (0, j.jsx)(w, {
                        className: (0, c.default)(
                          "icon-sm",
                          p
                            ? "text-blue-selection"
                            : "text-token-text-quaternary"
                        ),
                      }),
                  ],
                }),
              ],
            }),
            !m &&
              (0, j.jsx)("div", {
                className: (0, c.default)(
                  "flex items-center justify-center border-t border-token-border-light bg-token-main-surface-primary"
                ),
                style: o ? { height: "calc(100vh - 48px)" } : {},
                children: u,
              }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=9909.16f784aef7eadc71.js.map
