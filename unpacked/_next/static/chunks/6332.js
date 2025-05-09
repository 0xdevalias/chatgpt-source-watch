"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6332],
  {
    37267: function (e, t, l) {
      l.r(t),
        l.d(t, {
          ADATableFileComponent: function () {
            return P;
          },
          VisualizationContent: function () {
            return F;
          },
          default: function () {
            return z;
          },
        });
      var a = l(25660),
        s = l(31828),
        n = l(13038),
        r = l(28354),
        i = l(53197),
        o = l(19841),
        c = l(70079),
        d = l(84692),
        u = l(42005),
        m = l(87106),
        p = l(94365),
        x = l(7283),
        h = l(47294),
        g = l(85548),
        f = l(65998),
        b = l(25771),
        y = l(35250);
      f.kL.register(
        f.qi,
        f.uw,
        f.f$,
        f.ZL,
        f.Dx,
        f.u,
        f.De,
        f.ST,
        f.od,
        f.jn,
        f.wL
      );
      let j = (0, c.forwardRef)((e, t) => {
        let { chart: l } = e,
          a = (0, c.useRef)(null);
        (0, c.useImperativeHandle)(t, () => ({
          getBase64Image: () => {
            if (!a.current) {
              g.U.addError("Chart instance is not yet available.");
              return;
            }
            return a.current.toBase64Image();
          },
        }));
        let s = l.datasets.map((e) => {
          let t = { label: e.label, data: e.data };
          return (
            e.colors &&
              e.colors.length > 0 &&
              ((t.backgroundColor = e.colors), (t.borderColor = e.colors)),
            t
          );
        });
        return "bar" === l.chart_type
          ? (0, y.jsx)(b.$Q, {
              ref: a,
              options: {
                responsive: !0,
                maintainAspectRatio: !1,
                plugins: {
                  legend: { display: (null != s ? s : []).length > 1 },
                  title: { display: !1, text: l.title },
                },
                scales: {
                  x: { title: { display: !0, text: l.x_label } },
                  y: { title: { display: !0, text: l.y_label } },
                },
              },
              data: { labels: l.labels, datasets: null != s ? s : [] },
            })
          : "pie" === l.chart_type
            ? (0, y.jsx)(b.by, {
                ref: a,
                options: {
                  responsive: !0,
                  plugins: {
                    legend: { position: "bottom" },
                    title: { display: !1, text: l.title },
                  },
                },
                data: { labels: l.labels, datasets: null != s ? s : [] },
              })
            : "line" === l.chart_type
              ? (0, y.jsx)(b.x1, {
                  ref: a,
                  options: {
                    scales: {
                      x: { title: { display: !0, text: l.x_label } },
                      y: { title: { display: !0, text: l.y_label } },
                    },
                    plugins: {
                      legend: { display: (null != s ? s : []).length > 1 },
                      title: { display: !1, text: l.title },
                    },
                  },
                  data: { labels: l.labels, datasets: null != s ? s : [] },
                })
              : "scatter" === l.chart_type
                ? (0, y.jsx)(b.bp, {
                    ref: a,
                    options: {
                      scales: {
                        x: { title: { display: !0, text: l.x_label } },
                        y: { title: { display: !0, text: l.y_label } },
                      },
                      plugins: {
                        legend: { display: (null != s ? s : []).length > 1 },
                        title: { display: !1, text: l.title },
                      },
                    },
                    data: { labels: l.labels, datasets: null != s ? s : [] },
                  })
                : (0, y.jsx)(d.Z, {
                    id: "Chart.invalidChartType",
                    defaultMessage: "Invalid chart type",
                  });
      });
      j.displayName = "Chart";
      var v = l(39827),
        w = l(16887),
        C = l(15777),
        N = l(72003);
      l(54232);
      var k = l(47249),
        _ = l(63006);
      function M(e, t) {
        var l = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            l.push.apply(l, a);
        }
        return l;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var l = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(Object(l), !0).forEach(function (t) {
                (0, v.Z)(e, t, l[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
              : M(Object(l)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(l, t)
                  );
                });
        }
        return e;
      }
      function D(e) {
        let { table: t, isInFocusedView: l = !1, className: a = "" } = e,
          { targetedContent: s, setTargetedContent: n } = (0, _.Q)(),
          { 0: o, 1: d } = (0, c.useState)([]);
        (0, c.useEffect)(() => {
          t.columnNames.length > 0 &&
            d(
              t.columnNames.map((e, t) => ({
                id: "id:".concat(t),
                title: e,
                maxWidth: 500,
              }))
            );
        }, [t.columnNames]);
        let { 0: u, 1: m } = (0, c.useState)({
            columns: C.EV.empty(),
            rows: C.EV.empty(),
          }),
          p = (0, c.useCallback)(
            function (e) {
              let [l, a] = e,
                s = t.rows[a];
              return {
                kind: (function (e) {
                  switch (e) {
                    case "number":
                      return C.p6.Number;
                    case "imageUrl":
                      return C.p6.Image;
                    default:
                      return C.p6.Text;
                  }
                })(t.columnTypes[l]),
                data: s[l],
                allowOverlay: !1,
                displayData: String(s[l]),
              };
            },
            [t.columnTypes, t.rows]
          ),
          x = (0, c.useCallback)(
            (e) => {
              if (e.columns.length > 0) {
                let a = e.columns.items.flatMap((e) =>
                  t.columnNames.slice(e[0], e[1])
                );
                r.A.logEvent(i.M.adaColumnTargeted),
                  n({
                    label: (0, y.jsx)("div", {
                      children: (0, y.jsxs)("div", {
                        className: "text-token-text-tertiary",
                        children: [
                          (0, y.jsxs)("div", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                              (0, y.jsx)(k.Mie, { size: 20 }),
                              " ",
                              a.length,
                              " ",
                              1 === a.length ? "Column" : "Columns",
                            ],
                          }),
                          (0, y.jsx)("div", {
                            className: "mt-3 flex gap-3",
                            children: a.map((e) =>
                              (0, y.jsx)(
                                "div",
                                {
                                  className:
                                    "rounded-md bg-token-main-surface-secondary px-2 py-1 text-token-text-primary line-clamp-2",
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
                    isFocusedViewContent: l,
                    createNewCompletionParams: (e) =>
                      T(
                        e,
                        "The user has selected the columns:  ".concat(
                          a.map((e) => '"'.concat(e, '"')).join(", ")
                        )
                      ),
                  });
              } else if (e.rows.length > 0) {
                let t = e.rows.items.flatMap((e) => {
                  let [t, l] = e,
                    a = [];
                  for (let e = t; e < l; e++) a.push(e);
                  return a;
                });
                r.A.logEvent(i.M.adaRowTargeted),
                  n({
                    label: (0, y.jsx)("div", {
                      children: (0, y.jsx)("div", {
                        className: "text-token-text-tertiary",
                        children: (0, y.jsxs)("div", {
                          className: "flex items-center gap-2 text-sm",
                          children: [
                            (0, y.jsx)(k.Mie, { size: 20 }),
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
                    isFocusedViewContent: l,
                    createNewCompletionParams: (e) =>
                      T(
                        e,
                        "The user has selected rows at the following indices: ".concat(
                          t.map((e) => '"'.concat(e, '"')).join(", ")
                        )
                      ),
                  });
              } else if (e.current) {
                let t = e.current.range.x,
                  a = e.current.range.y,
                  s = e.current.range.x + e.current.range.width,
                  o = e.current.range.y + e.current.range.height,
                  c = (s - t) * (o - a);
                r.A.logEvent(i.M.adaRangeTargeted),
                  n({
                    label: (0, y.jsx)("div", {
                      children: (0, y.jsx)("div", {
                        className: "text-token-text-tertiary",
                        children: (0, y.jsxs)("div", {
                          className: "flex items-center gap-2 text-sm",
                          children: [
                            (0, y.jsx)(k.Mie, { size: 20 }),
                            " ",
                            c,
                            " ",
                            1 === c ? "Cell" : "Cells",
                          ],
                        }),
                      }),
                    }),
                    isFocusedViewContent: l,
                    createNewCompletionParams: (e) =>
                      T(
                        e,
                        "The user has selected a range at the iloc: "
                          .concat(a, ":")
                          .concat(o, ", ")
                          .concat(t, ":")
                          .concat(s, " in the current data")
                      ),
                  });
              }
              m(e);
            },
            [t.columnNames, n, l]
          );
        return (
          (0, c.useEffect)(() => {
            void 0 === s && m({ columns: C.EV.empty(), rows: C.EV.empty() });
          }, [s]),
          (0, y.jsx)(y.Fragment, {
            children: (0, y.jsx)(N.F, {
              getCellContent: p,
              columns: o,
              rows: t.rows.length,
              gridSelection: u,
              onGridSelectionChange: x,
              smoothScrollX: !0,
              smoothScrollY: !0,
              className: a,
              rowMarkers: "clickable-number",
              rowMarkerTheme: { bgCell: "#F7F7F8", textLight: "#0D0D0D" },
              theme: { textHeader: "#0D0D0D", textDark: "#676767" },
              rowMarkerWidth: 30,
              rowHeight: 48,
              verticalBorder: !0,
              minColumnWidth: 10,
              maxColumnWidth: 500,
              onColumnResize: (e, t, l) => {
                d((a) => {
                  let s = [...a];
                  return (s[l] = O(O({}, e), {}, { width: t })), s;
                });
              },
            }),
          })
        );
      }
      function T(e, t) {
        let l = (0, w.bm)(t);
        return O(
          O({}, e),
          {},
          {
            messageMetadata: O(
              O({}, e.messageMetadata),
              {},
              { targeted_reply: t }
            ),
            appendMessages:
              null == e.appendMessages ? [l] : [...e.appendMessages, l],
          }
        );
      }
      var E = l(45611);
      function F(e) {
        let {
            isLoading: t,
            hasFailed: l,
            filePath: g,
            type: f,
            fallbackToImage: b = !1,
            content: v,
            fallbackImageMessage: w,
            expanded: C = !1,
          } = e,
          N = (0, c.useRef)(null),
          k = g.split("/"),
          _ = (0, x.rE)(),
          { 0: M, 1: O } = (0, c.useState)(!1),
          T = k[k.length - 1];
        T = T.split("__")[0].replace(/[-_]/g, " ").split(".")[0];
        let E = (0, p.Ex)(),
          F =
            (null == _ ? void 0 : _.type) === x.zG.ADAVisualization
              ? _.filePath
              : null,
          z = F && F == g,
          P = (0, c.useCallback)(() => {
            r.A.logEvent(i.M.adaFocusModeToggled),
              z
                ? x.RT.close()
                : x.RT.setFocusedObject({
                    type: x.zG.ADAVisualization,
                    visualizationContent: v,
                    filePath: g,
                    visualizationType: f,
                  });
          }, [v, z, g, f]),
          A = (0, c.useCallback)(() => {
            let e = function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                l = document.createElement("a");
              (l.href = e), t && (l.download = t), l.click();
            };
            if ("table" === f && v) e(v.download_url);
            else if ("chart" === f) {
              if ((b || M) && (null == w ? void 0 : w.image_url) != null) {
                let t = (0, m.Iy)(w.image_url);
                n.Z.getFileDownloadLink(t).then((t) => {
                  t.status === a.KF.Success &&
                    fetch(t.download_url)
                      .then((e) => e.blob())
                      .then((t) => {
                        e(URL.createObjectURL(t), "output.png");
                      });
                });
              } else if (N.current) {
                let t = N.current.getBase64Image();
                t && e(t, "".concat(T, ".png"));
              }
            }
          }, [f, v, T, b, M, w]);
        return l
          ? (0, y.jsx)("div", {
              className: "max-w-full rounded-lg border border-red-600 p-3",
              children: (0, y.jsxs)("div", {
                className: "my-0 flex items-center justify-between font-light",
                children: [
                  (0, y.jsx)("div", {
                    className: "flex items-center gap-2",
                    children: (0, y.jsx)("p", {
                      className: "m-0 p-0 text-lg font-medium capitalize",
                      children: T,
                    }),
                  }),
                  (0, y.jsx)("span", {
                    className: "text-sm text-red-600",
                    children: (0, y.jsx)(d.Z, {
                      id: "ADAVisualzationComponent.unableToLoadOutput",
                      defaultMessage: "Unable to load visualization",
                    }),
                  }),
                ],
              }),
            })
          : (0, y.jsx)("div", {
              className: "max-w-full py-2",
              children: (0, y.jsxs)("div", {
                className:
                  "relative overflow-hidden rounded-lg border border-token-border-medium",
                children: [
                  (0, y.jsx)("div", {
                    className: "flex flex-col",
                    children: (0, y.jsxs)("div", {
                      className: (0, o.default)(
                        "flex justify-between p-3",
                        z && !C
                          ? "bg-token-main-surface-secondary"
                          : "bg-token-main-surface-primary"
                      ),
                      children: [
                        (0, y.jsx)("div", {
                          className:
                            "my-0 flex min-h-[28px] items-center gap-2 font-light",
                          children: (0, y.jsx)("p", {
                            className: "m-0 p-0 text-lg font-medium capitalize",
                            children: T,
                          }),
                        }),
                        (0, y.jsxs)("div", {
                          className: (0, o.default)("flex items-center gap-3"),
                          children: [
                            "chart" == f &&
                              !b &&
                              !C &&
                              (0, y.jsx)("button", {
                                onClick: () => {
                                  O(!M);
                                },
                                className: "flex items-center text-xs",
                                children: (0, y.jsx)(s.q$4, {}),
                              }),
                            (0, y.jsx)("button", {
                              onClick: A,
                              className: "flex items-center text-xs",
                              children: (0, y.jsx)(s._8t, {}),
                            }),
                            !b &&
                              (0, y.jsx)("button", {
                                onClick: P,
                                className: "flex items-center text-sm",
                                children: z
                                  ? (0, y.jsx)(y.Fragment, {
                                      children: (0, y.jsx)(s.W5x, {}),
                                    })
                                  : (0, y.jsx)(y.Fragment, {
                                      children: (0, y.jsx)(s.Qq, {}),
                                    }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  !(E && !C) &&
                    (0, y.jsx)("div", {
                      className: (0, o.default)(
                        "flex items-center overflow-x-auto border-t border-token-border-light align-middle",
                        C ? "h-[80vh]" : "h-[400px]",
                        t ? "justify-center" : "justify-start",
                        "table" == f ? "justify-start" : "justify-center"
                      ),
                      children: t
                        ? (0, y.jsx)(u.Z, {})
                        : "table" == f
                          ? (0, y.jsx)(D, { table: v })
                          : (M || b) && void 0 !== w
                            ? (0, y.jsx)(h.Z, { jupyterMessage: w })
                            : (0, y.jsx)(j, { ref: N, chart: v }),
                    }),
                ],
              }),
            });
      }
      function z(e) {
        let {
            messageId: t,
            serverThreadId: l,
            visualization: a,
            fallbackImageMessage: s,
            expanded: n = !1,
          } = e,
          { isLoading: r, outputContent: i, hasFailed: o } = (0, E.sM)(t, l, a);
        return (0, y.jsx)(F, {
          isLoading: r,
          hasFailed: o,
          filePath: a.file_path,
          type: a.type,
          fallbackToImage: a.fallback_to_image,
          content: i,
          fallbackImageMessage: s,
          expanded: n,
        });
      }
      function P(e) {
        let { file: t, expanded: l = !1 } = e,
          { isLoading: a, outputContent: s, hasFailed: n } = (0, E.xZ)(t);
        return (0, y.jsx)(F, {
          isLoading: a,
          hasFailed: n,
          filePath: t.name,
          type: "table",
          content: s,
          expanded: l,
        });
      }
    },
  },
]);
//# sourceMappingURL=6332.bc1528e88bdb3ce6.js.map
