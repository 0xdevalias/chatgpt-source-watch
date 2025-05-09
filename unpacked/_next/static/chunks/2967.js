"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2967],
  {
    93062: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return X;
          },
        });
      var l = a(18450),
        r = a(49305),
        s = a(96388),
        n = a(53362),
        o = a(99715),
        i = a(38801),
        d = a(67852),
        c = a(66315),
        u = a(19841),
        m = a(24343),
        p = a(83737),
        x = a(70079),
        f = a(84692),
        g = a(9063),
        h = a(85452),
        b = a(282),
        y = a(88342),
        j = a(11335),
        v = a(66452),
        w = a(44151),
        k = a(26524),
        C = a(59669),
        N = a(65998),
        M = a(25771),
        z = a(35250);
      let O = (0, x.forwardRef)((e, t) => {
        let { chart: a } = e,
          l = a.datasets.map((e) => {
            let t = e.data.map((e) => e);
            return {
              label: e.label,
              data: t,
              backgroundColor: e.colors,
              borderColor: e.colors,
              borderRadius: 4,
            };
          });
        return (0, z.jsx)(M.$Q, {
          ref: t,
          options: {
            responsive: !0,
            maintainAspectRatio: !1,
            plugins: {
              legend: { display: !1 },
              title: { display: !1, text: a.title },
              tooltip: {
                enabled: !0,
                mode: "point",
                position: "nearest",
                backgroundColor: "rgba(0, 0, 0, 1)",
                titleColor: "white",
                titleFont: { family: "S\xf6hne", size: 16, weight: "bold" },
                bodyFont: { family: "S\xf6hne", size: 12 },
                displayColors: !1,
                bodyColor: "rgba(255, 255, 255, 0.7)",
                cornerRadius: 8,
                caretSize: 6,
                padding: { top: 8, bottom: 4, left: 12, right: 12 },
                yAlign: "bottom",
                callbacks: {
                  title: function (e) {
                    return e[0].formattedValue;
                  },
                  label: () => "",
                },
              },
            },
            scales: {
              x: { title: { display: !1 }, grid: { display: !1 } },
              y: {
                title: { display: !1 },
                grid: { lineWidth: (e) => (0 === e.tick.value ? 0 : 1) },
                border: { dash: [3, 3] },
              },
            },
          },
          data: { labels: a.labels, datasets: l },
        });
      });
      O.displayName = "BarChart";
      let F = (0, x.forwardRef)((e, t) => {
        let { chart: a } = e,
          l = a.datasets.map((e) => {
            let t = e.data.map((e) => e);
            return {
              label: e.label,
              data: t,
              backgroundColor: e.colors,
              borderColor: e.colors,
              pointRadius: 0,
              pointHoverRadius: 5,
              pointHitRadius: 10,
              tension: 0.2,
              pointBackgroundColor: ["rgba(255, 255, 255, 1)"],
              pointBorderWidth: 3,
              pointHoverBorderWidth: 3,
            };
          });
        return (0, z.jsx)(M.x1, {
          ref: t,
          options: {
            scales: {
              x: {
                title: { display: !1, text: a.x_label },
                grid: { display: !1 },
              },
              y: {
                title: { display: !1, text: a.y_label },
                grid: { lineWidth: (e) => (0 === e.tick.value ? 0 : 1) },
                border: { dash: [3, 3] },
              },
            },
            plugins: {
              legend: { display: !1 },
              title: { display: !1, text: a.title },
              tooltip: {
                enabled: !0,
                mode: "point",
                position: "nearest",
                backgroundColor: "rgba(0, 0, 0, 1)",
                titleColor: "white",
                titleFont: { family: "S\xf6hne", size: 16, weight: "bold" },
                bodyFont: { family: "S\xf6hne", size: 12 },
                displayColors: !1,
                bodyColor: "rgba(255, 255, 255, 0.7)",
                cornerRadius: 8,
                caretSize: 6,
                padding: { top: 16, bottom: 16, left: 12, right: 12 },
                callbacks: {
                  title: function (e) {
                    return e[0].formattedValue;
                  },
                },
              },
            },
          },
          data: { labels: a.labels, datasets: l },
        });
      });
      F.displayName = "LineChart";
      var S = a(36241);
      let E = (0, x.forwardRef)((e, t) => {
        let { chart: a } = e,
          l = a.datasets.map((e) => {
            let t = e.data.map((e) => e);
            return {
              label: e.label,
              data: t,
              backgroundColor: e.colors,
              borderWidth: 2,
              borderColor: ["white"],
            };
          });
        return (0, z.jsx)(M.by, {
          ref: t,
          options: {
            responsive: !0,
            plugins: {
              legend: { display: !1 },
              title: { display: !1 },
              tooltip: {
                enabled: !0,
                mode: "index",
                position: "nearest",
                backgroundColor: "rgba(0, 0, 0, 1)",
                titleColor: "white",
                titleFont: { family: "S\xf6hne", size: 16, weight: "bold" },
                bodyFont: { family: "S\xf6hne", size: 12 },
                displayColors: !1,
                bodyColor: "rgba(255, 255, 255, 0.7)",
                cornerRadius: 8,
                caretSize: 6,
                padding: { top: 12, bottom: 12, left: 16, right: 16 },
                callbacks: {
                  title: (e) => e[0].formattedValue,
                  label: function (e) {
                    let t = l[0],
                      a = parseFloat(
                        (
                          (t.data[e.dataIndex] /
                            Number(
                              t.data.reduce((e, t) => Number(e) + Number(t), 0)
                            )) *
                          100
                        ).toFixed(2)
                      );
                    return "".concat(a, "% of total");
                  },
                },
              },
              datalabels: {
                color: "#fff",
                textAlign: "center",
                font: { family: "S\xf6hne", weight: "bold", size: 16 },
                backgroundColor: function (e) {
                  return (e.dataset.data[e.dataIndex] /
                    Number(
                      e.dataset.data.reduce((e, t) => Number(e) + Number(t), 0)
                    )) *
                    100 >=
                    15
                    ? "rgba(0, 0, 0, 0.1)"
                    : "transparent";
                },
                borderRadius: 15,
                padding: { top: 5, bottom: 5, left: 10, right: 10 },
                formatter: (e, t) =>
                  (e /
                    Number(
                      t.dataset.data.reduce((e, t) => Number(e) + Number(t), 0)
                    )) *
                    100 >=
                  15
                    ? e
                    : "",
              },
            },
          },
          plugins: [S.Z],
          data: { labels: a.labels, datasets: l },
        });
      });
      E.displayName = "PieChart";
      let A = (0, x.forwardRef)((e, t) => {
        let { chart: a } = e,
          l = a.datasets.reduce((e, t) => e + t.data.length, 0),
          r = a.datasets.map((e) => {
            let t = e.data.map((e) => e);
            return {
              label: e.label,
              data: t,
              backgroundColor: e.colors,
              borderColor: e.colors,
              pointRadius: l > 50 ? (l > 200 ? 2 : 4) : 8,
              pointHoverRadius: l > 50 ? 4 : 8,
            };
          });
        return (0, z.jsx)(M.bp, {
          ref: t,
          options: {
            scales: {
              x: { title: { display: !1 }, grid: { display: !1 } },
              y: {
                title: { display: !1 },
                grid: { lineWidth: (e) => (0 === e.tick.value ? 0 : 1) },
                border: { dash: [3, 3] },
              },
            },
            plugins: {
              legend: { display: !1 },
              title: { display: !1, text: a.title },
              tooltip: {
                enabled: !0,
                mode: "point",
                position: "nearest",
                backgroundColor: "rgba(0, 0, 0, 1)",
                titleColor: "white",
                titleFont: { family: "S\xf6hne", size: 16, weight: "bold" },
                bodyFont: { family: "S\xf6hne", size: 12 },
                displayColors: !1,
                bodyColor: "rgba(255, 255, 255, 0.7)",
                cornerRadius: 8,
                caretSize: 6,
                padding: { top: 16, bottom: 16, left: 12, right: 12 },
                callbacks: {
                  title: function (e) {
                    return e[0].parsed.y.toFixed(2);
                  },
                  label: function (e) {
                    return "x = ".concat(e.parsed.x.toFixed(2));
                  },
                },
              },
            },
          },
          data: { labels: a.labels, datasets: r },
        });
      });
      (A.displayName = "ScatterChart"),
        N.kL.register(
          N.qi,
          N.uw,
          N.f$,
          N.ZL,
          N.Dx,
          N.u,
          N.De,
          N.ST,
          N.od,
          N.jn
        );
      let _ = { bar: O, pie: E, line: F, scatter: A };
      function P(e) {
        let { item: t } = e;
        return (0, z.jsxs)("div", {
          className: "inline-flex items-center gap-1",
          children: [
            (0, z.jsx)("div", {
              className: "h-3 w-3 rounded-sm",
              style: { backgroundColor: t.color },
            }),
            t.name,
          ],
        });
      }
      function V(e) {
        let {
          items: t,
          hideAxisLabels: a = !1,
          xLabel: l = "",
          yLabel: r = "",
        } = e;
        return (0, z.jsxs)("div", {
          className:
            "flex w-full flex-wrap items-center gap-1 px-4 text-xs text-token-text-primary",
          children: [
            !a &&
              (0, z.jsx)(f.Z, {
                id: "Wn04Wd",
                defaultMessage: "{yLabel} by {xLabel}",
                values: {
                  xLabel: (0, z.jsxs)("div", {
                    className: "inline-flex items-center gap-1",
                    children: [
                      (0, z.jsx)(s.tZW, {
                        className: "text-token-text-secondary",
                      }),
                      l,
                    ],
                  }),
                  yLabel: (0, z.jsxs)("div", {
                    className: "inline-flex items-center gap-1",
                    children: [
                      (0, z.jsx)(s.ucG, {
                        className: "text-token-text-secondary",
                      }),
                      r,
                    ],
                  }),
                },
              }),
            t.length > 1 &&
              (0, z.jsx)(f.Z, {
                id: "Isulib",
                defaultMessage: "for {legendItems}",
                values: {
                  legendItems: t.map((e, t) => (0, z.jsx)(P, { item: e }, t)),
                },
              }),
          ],
        });
      }
      let D = (0, x.forwardRef)((e, t) => {
        let { chart: a } = e,
          l = (0, x.useRef)(null);
        (0, x.useImperativeHandle)(t, () => ({
          getBase64Image: () => {
            if (!l.current) {
              c.U.addError("Chart instance is not yet available.");
              return;
            }
            return l.current.toBase64Image();
          },
        }));
        let r = (0, x.useCallback)(() => {
          if ("pie" != a.chart_type)
            return a.datasets.map((e) => ({
              name: e.label,
              color: Array.isArray(e.colors) ? e.colors[0] : e.colors,
            }));
          {
            let e = a.datasets[0].colors;
            if (e && Array.isArray(e))
              return a.labels.map((t, a) => {
                var l;
                return {
                  name: t,
                  color: null !== (l = e[a]) && void 0 !== l ? l : "",
                };
              });
          }
          return [];
        }, [a]);
        if (a.chart_type in _ == !1)
          return (0, z.jsx)(f.Z, {
            id: "Chart.invalidChartType",
            defaultMessage: "Invalid chart type",
          });
        let s = _[a.chart_type];
        return (0, z.jsxs)("div", {
          className: "flex h-full w-full flex-col items-center",
          children: [
            (0, z.jsx)("div", {
              className: "w-full flex-initial",
              style: { flexBasis: "28px" },
              children: (0, z.jsx)(V, {
                xLabel: a.x_label,
                yLabel: a.y_label,
                items: r(),
                hideAxisLabels: "pie" === a.chart_type,
              }),
            }),
            (0, z.jsx)("div", {
              className: (0, u.default)(
                "flex w-full flex-grow items-center justify-center px-4 pb-3"
              ),
              style: { minHeight: "0" },
              children: (0, z.jsx)(s, { chart: a, ref: l }),
            }),
          ],
        });
      });
      D.displayName = "Chart";
      var Z = a(35595),
        R = a(15777),
        I = a(72003);
      a(7235);
      var L = a(41105);
      function T(e, t) {
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
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(a), !0).forEach(function (t) {
                (0, l.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : T(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
        }
        return e;
      }
      function H(e) {
        let {
            table: t,
            height: a,
            width: l,
            isInFocusedView: r = !1,
            className: s = "",
          } = e,
          { targetedContent: n, setTargetedContent: o } = (0, L.Q)(),
          { 0: c, 1: u } = (0, x.useState)([]),
          m = getComputedStyle(document.documentElement),
          p = (0, g.Z)();
        (0, x.useEffect)(() => {
          t.columnNames.length > 0 &&
            u(
              t.columnNames.map((e, t) => ({
                id: "id:".concat(t),
                title: e,
                maxWidth: 500,
              }))
            );
        }, [t.columnNames]);
        let { 0: f, 1: h } = (0, x.useState)({
            columns: R.EV.empty(),
            rows: R.EV.empty(),
          }),
          b = (0, x.useCallback)(
            function (e) {
              let [a, l] = e,
                r = t.rows[l];
              return {
                kind: (function (e) {
                  switch (e) {
                    case "number":
                      return R.p6.Number;
                    case "imageUrl":
                      return R.p6.Image;
                    default:
                      return R.p6.Text;
                  }
                })(t.columnTypes[a]),
                data: r[a],
                allowOverlay: !0,
                readonly: !0,
                displayData: String(r[a]),
                allowWrapping: !0,
                contentAlignment: "left",
              };
            },
            [t.columnTypes, t.rows]
          ),
          y = (0, x.useCallback)(
            (e) => {
              if (e.columns.length > 0) {
                let a = e.columns.items.flatMap((e) =>
                  t.columnNames.slice(e[0], e[1])
                );
                i.A.logEvent(d.M.adaColumnTargeted);
                let l =
                  a.length > 1
                    ? p.formatMessage(
                        {
                          id: "B+HlXu",
                          defaultMessage: "{totalColumns} columns",
                        },
                        { totalColumns: a.length }
                      )
                    : p.formatMessage(
                        {
                          id: "KnFSJb",
                          defaultMessage: '"{columnName}" column',
                        },
                        { columnName: a[0] }
                      );
                o({
                  label: (0, z.jsx)("div", {
                    className: "text-sm font-medium",
                    children: l,
                  }),
                  isFocusedViewContent: r,
                  createNewCompletionParams: (e) =>
                    U(
                      e,
                      "The user has selected the columns:  "
                        .concat(
                          a.map((e) => '"'.concat(e, '"')).join(", "),
                          " in the "
                        )
                        .concat(t.name, " table ")
                        .concat(
                          t.sheetName
                            ? " in the ".concat(t.sheetName, " sheet")
                            : ""
                        ),
                      l
                    ),
                });
              } else if (e.rows.length > 0) {
                let a = e.rows.items.flatMap((e) => {
                    let [t, a] = e,
                      l = [];
                    for (let e = t; e < a; e++) l.push(e);
                    return l;
                  }),
                  l =
                    a.length > 1
                      ? p.formatMessage(
                          { id: "vFstNk", defaultMessage: "{totalRows} rows" },
                          { totalRows: a.length }
                        )
                      : p.formatMessage(
                          { id: "43/z2q", defaultMessage: "#{rowIndex} row" },
                          { rowIndex: a[0] + 1 }
                        );
                i.A.logEvent(d.M.adaRowTargeted),
                  o({
                    label: (0, z.jsx)("div", {
                      className: "text-sm font-medium",
                      children: l,
                    }),
                    isFocusedViewContent: r,
                    createNewCompletionParams: (e) =>
                      U(
                        e,
                        "The user has selected rows at the following indices: "
                          .concat(
                            a.map((e) => '"'.concat(e, '"')).join(", "),
                            " in the "
                          )
                          .concat(t.name, " table ")
                          .concat(
                            t.sheetName
                              ? " in the ".concat(t.sheetName, " sheet")
                              : ""
                          ),
                        l
                      ),
                  });
              } else if (e.current) {
                let a = e.current.range.x,
                  l = e.current.range.y,
                  s = e.current.range.x + e.current.range.width,
                  n = e.current.range.y + e.current.range.height,
                  c = (s - a) * (n - l),
                  u = "";
                1 === c && (u = t.rows[e.current.cell[1]][e.current.cell[0]]),
                  i.A.logEvent(d.M.adaRangeTargeted);
                let m =
                  c > 1
                    ? p.formatMessage(
                        { id: "Ia9GsC", defaultMessage: "{totalCells} cells" },
                        { totalCells: c }
                      )
                    : p.formatMessage(
                        {
                          id: "MEl4hN",
                          defaultMessage: '"{cellContent}" cell',
                        },
                        { cellContent: u }
                      );
                o({
                  isFocusedViewContent: r,
                  label: (0, z.jsx)("div", {
                    className: "flex items-center gap-2 text-sm font-medium",
                    children: m,
                  }),
                  createNewCompletionParams: (e) =>
                    U(
                      e,
                      "The user has selected a range at the iloc: "
                        .concat(l, ":")
                        .concat(n, ", ")
                        .concat(a, ":")
                        .concat(s, " in the ")
                        .concat(t.name, " table ")
                        .concat(
                          t.sheetName
                            ? " in the ".concat(t.sheetName, " sheet")
                            : ""
                        ),
                      m
                    ),
                });
              }
              0 === e.columns.length &&
                0 === e.rows.length &&
                void 0 === e.current &&
                o(void 0),
                h(e);
            },
            [t.columnNames, o, r, t.rows, p, t.name, t.sheetName]
          );
        (0, x.useEffect)(() => {
          void 0 === n && h({ columns: R.EV.empty(), rows: R.EV.empty() });
        }, [n]);
        let j = (0, x.useCallback)(
          (e) => {
            let a = t.rows[e];
            if (!a) return 44;
            let l = a.reduce((e, t) =>
                ((null == e ? void 0 : e.length) || 0) >
                ((null == t ? void 0 : t.length) || 0)
                  ? e
                  : t
              ),
              r = c[a.indexOf(l)],
              s = (null == r ? void 0 : r.width) || 150,
              n = Math.ceil(l.length / (s / 8));
            return 24 + (n < 4 ? n : 4) * 20;
          },
          [t.rows, c]
        );
        (0, x.useEffect)(() => {
          if (!document.getElementById("portal")) {
            let e = document.createElement("div");
            (e.id = "portal"),
              (e.style.position = "fixed"),
              (e.style.left = "0"),
              (e.style.top = "0"),
              (e.style.zIndex = "9999"),
              document.body.appendChild(e);
          }
          return () => {
            let e = document.getElementById("portal");
            e && document.body.removeChild(e);
          };
        }, []);
        let v = (0, x.useCallback)(
          () =>
            t.rows && t.rows.length > 999
              ? 10 + 10 * String(t.rows.length).length
              : 30,
          [t.rows]
        );
        return (0, z.jsx)(I.F, {
          getCellContent: b,
          columns: c,
          rows: t.rows.length,
          gridSelection: f,
          onGridSelectionChange: y,
          smoothScrollX: !0,
          smoothScrollY: !0,
          overscrollX: 50,
          className: s,
          rowMarkers: "clickable-number",
          height: a,
          width: l,
          rowMarkerTheme: {
            bgCell: m.getPropertyValue("--main-surface-secondary").trim(),
            textLight: m.getPropertyValue("--text-primary").trim(),
          },
          theme: {
            textDark: r
              ? m.getPropertyValue("--text-secondary").trim()
              : m.getPropertyValue("--text-primary").trim(),
            textMedium: m.getPropertyValue("--text-primary").trim(),
            textLight: m.getPropertyValue("--text-primary").trim(),
            textHeader: m.getPropertyValue("--text-primary").trim(),
            bgHeader: m.getPropertyValue("--main-surface-secondary").trim(),
            bgCell: m.getPropertyValue("--main-surface-primary").trim(),
            bgBubbleSelected: m
              .getPropertyValue("--main-surface-tertiary")
              .trim(),
            bgHeaderHovered: m
              .getPropertyValue("--main-surface-tertiary")
              .trim(),
            bgHeaderHasFocus: m
              .getPropertyValue("--main-surface-tertiary")
              .trim(),
            accentColor: m.getPropertyValue("--selection").trim(),
            drilldownBorder: m.getPropertyValue("--selection").trim(),
            editorFontSize: "400 14px",
            baseFontStyle: "400 14px",
            markerFontStyle: "400 14px",
            headerFontStyle: "500 14px",
            fontFamily: "S\xf6hne",
            cellHorizontalPadding: 12,
            cellVerticalPadding: 10,
          },
          rowMarkerWidth: v(),
          rowHeight: j,
          verticalBorder: !0,
          minColumnWidth: 10,
          maxColumnWidth: 500,
          onColumnResize: (e, t, a) => {
            u((l) => {
              let r = [...l];
              return (r[a] = B(B({}, e), {}, { width: t })), r;
            });
          },
        });
      }
      function U(e, t, a) {
        let l = (0, Z.bm)(t);
        return B(
          B({}, e),
          {},
          {
            messageMetadata: B(
              B({}, e.messageMetadata),
              {},
              { targeted_reply: t, targeted_reply_label: a }
            ),
            appendMessages:
              null == e.appendMessages ? [l] : [...e.appendMessages, l],
          }
        );
      }
      let W = [
        "#FFAF00",
        "#F46920",
        "#F53255",
        "#F857C1",
        "#29BDFD",
        "#00CBBF",
        "#01C159",
        "#9DCA1C",
      ];
      var G = a(33271);
      function q(e, t) {
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
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(a), !0).forEach(function (t) {
                (0, l.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : q(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
        }
        return e;
      }
      function X(e) {
        let { visualization: t, expanded: a = !1 } = e;
        return "chart" === t.type
          ? void 0 == t.fallback_image
            ? (c.U.addError(
                "Chart visualizations require a fallback image message"
              ),
              null)
            : t.fallback_to_image
              ? void 0 == t.fallback_image
                ? (c.U.addError(
                    "No fallback image message provided for fallback chart"
                  ),
                  null)
                : (0, z.jsx)(es, { visualization: t, expanded: a })
              : (0, z.jsx)(er, { visualization: t, expanded: a })
          : "table" === t.type
            ? (0, z.jsx)(Y, { visualization: t, expanded: a })
            : (c.U.addError("Unsupported visualization type", t.type), null);
      }
      let J = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            a = document.createElement("a");
          (a.href = e), t && (a.download = t), a.click();
        },
        K = async (e) => {
          if (null == e.image_url) {
            c.U.addError("No image url provided for download");
            return;
          }
          let t = (0, v.Iy)(e.image_url),
            a = await n.Z.getFileDownloadLink(t);
          if (a.status === r.KF.Success) {
            let e = await fetch(a.download_url),
              t = await e.blob();
            J(URL.createObjectURL(t), "output.png");
          }
        };
      function Y(e) {
        let t,
          { visualization: a, expanded: l } = e,
          r = (0, w.Ex)(),
          s = r && !l,
          { isLoading: n, data: o, isError: i } = (0, G.CJ)(a),
          { 0: d, 1: c } = (0, x.useState)(),
          u = (0, x.useCallback)(() => {
            o && J(o.download_url);
          }, [o]),
          { 0: m, 1: p } = (0, x.useState)(0),
          { 0: f, 1: g } = (0, x.useState)(0),
          b = (0, x.useRef)(null);
        if (o) {
          if (Array.isArray(o.content)) {
            var j;
            t =
              null !== (j = o.content.find((e) => e.name == d)) && void 0 !== j
                ? j
                : o.content[0];
          } else t = o.content;
        }
        let v = () => {
          b.current && g(b.current.offsetWidth);
        };
        return ((0, x.useEffect)(
          () => (
            v(),
            window.addEventListener("resize", v),
            () => window.removeEventListener("resize", v)
          ),
          []
        ),
        (0, x.useEffect)(() => {
          let e = () => {
            p(window.innerHeight - 48);
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []),
        i)
          ? (0, z.jsx)($, { fileName: a.title })
          : (0, z.jsx)("div", {
              ref: b,
              children: (0, z.jsx)(en, {
                focusObject: { type: k.zG.ADAVisualization, visualization: a },
                title: (0, z.jsxs)(z.Fragment, {
                  children: [
                    a.title,
                    !s &&
                      Array.isArray(null == o ? void 0 : o.content) &&
                      (0, z.jsxs)(y.Z.Root, {
                        defaultValue: d,
                        onValueChange: (e) => {
                          c(e);
                        },
                        children: [
                          (0, z.jsxs)(y.Z.Trigger, {
                            className:
                              "m-0 h-6 bg-transparent p-1 text-xs font-medium",
                            children: [
                              null != d ? d : o.content[0].name,
                              (0, z.jsx)(y.Z.Icon, {}),
                            ],
                          }),
                          (0, z.jsx)(y.Z.Portal, {
                            children: (0, z.jsx)(y.Z.Content, {
                              children: o.content.map((e) => {
                                var t;
                                return (0, z.jsx)(
                                  y.Z.Item,
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
                  n || void 0 == t
                    ? (0, z.jsx)(h.Z, {})
                    : (0, z.jsx)("div", {
                        className: "border-t border-token-border-light",
                        children: (0, z.jsx)(H, {
                          table: Q(
                            Q({}, t),
                            {},
                            { name: a.title, sheetName: d }
                          ),
                          height: l ? m : 300,
                          width: f,
                          isInFocusedView: r,
                        }),
                      }),
              }),
            });
      }
      function $(e) {
        let { fileName: t = "" } = e;
        return (0, z.jsx)("div", {
          className: "w-full rounded-xl border border-red-600 p-3",
          children: (0, z.jsxs)("div", {
            className: "my-0 flex items-center justify-between font-light",
            children: [
              (0, z.jsx)("div", {
                className: "flex items-center gap-2",
                children: (0, z.jsx)("p", {
                  className: "m-0 p-0 text-lg font-medium capitalize",
                  children: t,
                }),
              }),
              (0, z.jsx)("span", {
                className: "text-sm text-red-600",
                children: (0, z.jsx)(f.Z, {
                  id: "ADAVisualzationComponent.unableToLoadOutput",
                  defaultMessage: "Unable to display visualization",
                }),
              }),
            ],
          }),
        });
      }
      function ee(e) {
        let { currentColor: t, onUpdate: a } = e,
          { 0: l, 1: r } = (0, x.useState)(null != t ? t : ""),
          n = (0, g.Z)();
        return (0, z.jsxs)(z.Fragment, {
          children: [
            (0, z.jsx)("div", {
              className: "flex w-[120px] flex-wrap gap-2",
              children: W.map((e, l) =>
                (0, z.jsx)(
                  "button",
                  {
                    onClick: () => {
                      r(e), a(e);
                    },
                    className: (0, u.default)(
                      "flex h-6 w-6 items-center justify-center rounded-md"
                    ),
                    style: { backgroundColor: e },
                    children:
                      t === e && (0, z.jsx)(s.$As, { className: "text-white" }),
                  },
                  l
                )
              ),
            }),
            (0, z.jsxs)("div", {
              className: "flex h-6 rounded-md border border-token-border-light",
              children: [
                (0, z.jsx)("div", {
                  className:
                    "flex w-6 items-center justify-center bg-gray-200 px-2 py-1 text-sm text-gray-500",
                  children: "#",
                }),
                (0, z.jsx)("input", {
                  className: (0, u.default)(
                    "w-16 flex-1 rounded-r-md  border-0 p-2 text-xs uppercase leading-6 outline-none"
                  ),
                  placeholder: n.formatMessage({
                    id: "3xKVHs",
                    defaultMessage: "F1B023",
                  }),
                  value: l.slice(1),
                  onChange: (e) => {
                    let t = "#".concat(e.target.value);
                    r(t), /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(t) && a(t);
                  },
                }),
              ],
            }),
          ],
        });
      }
      function et(e) {
        let { label: t, color: a, onColorUpdate: l } = e;
        return (0, z.jsxs)(o.fC, {
          children: [
            (0, z.jsx)(o.xz, {
              asChild: !0,
              children: (0, z.jsxs)("div", {
                className:
                  "flex w-full items-center justify-between py-2 pl-4 pr-3.5 hover:bg-token-main-surface-secondary",
                children: [
                  (0, z.jsx)("span", {
                    className: "text-sm",
                    children:
                      t ||
                      (0, z.jsx)(f.Z, {
                        id: "Tgu2IU",
                        defaultMessage: "Dataset",
                      }),
                  }),
                  (0, z.jsxs)("div", {
                    className: "flex gap-1",
                    children: [
                      (0, z.jsx)("div", {
                        className: "h-4 w-4 rounded-sm",
                        style: { backgroundColor: a },
                      }),
                      (0, z.jsx)(s.ob9, { className: "icon-sm" }),
                    ],
                  }),
                ],
              }),
            }),
            (0, z.jsx)(o.Uv, {
              children: (0, z.jsx)(o.VY, {
                className:
                  "flex flex-col gap-4 rounded-xl border border-token-border-medium bg-token-main-surface-primary p-4 align-middle shadow-md",
                sideOffset: 7,
                side: "right",
                children: (0, z.jsx)(ee, { currentColor: a, onUpdate: l }),
              }),
            }),
          ],
        });
      }
      function ea(e) {
        let { chartData: t, setChartData: a } = e,
          l = t.datasets[0].colors ? [...t.datasets[0].colors] : [...W];
        return (0, z.jsx)(z.Fragment, {
          children: t.labels.map((e, r) =>
            (0, z.jsx)(
              et,
              {
                label: e,
                color: l[r],
                onColorUpdate: (e) => {
                  Array.isArray(l) ? (l[r] = e) : (l = [e]),
                    (t.datasets[0].colors = l),
                    a(Q({}, t));
                },
              },
              r
            )
          ),
        });
      }
      function el(e) {
        let { chartData: t, setChartData: a } = e;
        return (0, z.jsx)(z.Fragment, {
          children: t.datasets.map((e, l) =>
            (0, z.jsx)(
              et,
              {
                label: e.label,
                color: e.colors
                  ? Array.isArray(e.colors)
                    ? e.colors[0]
                    : e.colors
                  : "",
                onColorUpdate: (l) => {
                  (e.colors = [l]), a(Q({}, t));
                },
              },
              l
            )
          ),
        });
      }
      function er(e) {
        let { visualization: t, expanded: a } = e,
          { isLoading: l, data: r, isError: n } = (0, G.VX)(t),
          o = (0, x.useRef)(null),
          { 0: i, 1: d } = (0, x.useState)(!1),
          c = (0, x.useCallback)(async () => {
            if (i && t.fallback_image) await K(t.fallback_image);
            else if (o.current) {
              let e = o.current.getBase64Image();
              e && J(e, "".concat(t.title, ".png"));
            }
          }, [t.fallback_image, i, o, t.title]),
          { 0: u, 1: m } = (0, x.useState)(void 0),
          p = (0, g.Z)();
        return ((0, x.useEffect)(() => {
          if (r && r.content != u) {
            let e = r.content;
            (e.datasets = r.content.datasets.map((e, t) => {
              let a = [];
              return (
                (a =
                  "pie" === r.content.chart_type
                    ? e.colors && e.colors.length > 0
                      ? Array.isArray(e.colors)
                        ? e.colors
                        : [e.colors]
                      : [...W]
                    : e.colors && e.colors.length > 0
                      ? Array.isArray(e.colors)
                        ? e.colors
                        : [e.colors]
                      : [W[t % W.length]]),
                (e.colors = a),
                e
              );
            })),
              m(e);
          }
        }, [u, r]),
        n)
          ? (0, z.jsx)($, { fileName: t.title })
          : (0, z.jsx)(en, {
              focusObject: { type: k.zG.ADAVisualization, visualization: t },
              title: t.title,
              onDownload: c,
              settingsDropdownContent: (0, z.jsxs)(z.Fragment, {
                children: [
                  (0, z.jsx)("span", {
                    className:
                      "py-2 pl-4 pr-3.5 text-xs font-medium text-token-text-quaternary",
                    children: (0, z.jsx)(f.Z, {
                      id: "yYiKvS",
                      defaultMessage: "Colors",
                    }),
                  }),
                  u &&
                    ("pie" === u.chart_type
                      ? (0, z.jsx)(ea, { chartData: u, setChartData: m })
                      : (0, z.jsx)(el, { chartData: u, setChartData: m })),
                  (0, z.jsx)("span", {
                    className:
                      "py-2 pl-4 pr-3.5 text-xs font-medium text-token-text-quaternary",
                    children: (0, z.jsx)(f.Z, {
                      id: "fHx6dk",
                      defaultMessage: "Type",
                    }),
                  }),
                  (0, z.jsxs)("div", {
                    className:
                      "flex w-full items-center justify-between py-2 pl-4 pr-3.5 hover:bg-token-main-surface-secondary",
                    children: [
                      (0, z.jsx)("span", {
                        className: "text-sm",
                        children: i
                          ? (0, z.jsx)(f.Z, {
                              id: "NoxJhh",
                              defaultMessage: "Legacy (static)",
                            })
                          : (0, z.jsx)(f.Z, {
                              id: "UbQJxs",
                              defaultMessage: "Interactive",
                            }),
                      }),
                      (0, z.jsx)(b.Z, {
                        onChange: () => {
                          d(!i);
                        },
                        enabled: !i,
                        label: p.formatMessage({
                          id: "UbQJxs",
                          defaultMessage: "Interactive",
                        }),
                        withLockIcon: !0,
                        lockIconOverride: i
                          ? (0, z.jsx)(s.ets, {
                              className: "icon-xs text-token-text-tertiary",
                            })
                          : (0, z.jsx)(s.D2w, {
                              className: "icon-xs text-brand-green-800",
                            }),
                      }),
                    ],
                  }),
                ],
              }),
              expanded: a,
              children:
                l || void 0 == u
                  ? (0, z.jsx)(h.Z, {})
                  : i && t.fallback_image
                    ? (0, z.jsx)(C.Z, { jupyterMessage: t.fallback_image })
                    : (0, z.jsx)(D, { ref: o, chart: u }),
            });
      }
      function es(e) {
        let { visualization: t, expanded: a } = e,
          { 0: l, 1: r } = (0, x.useState)(!1),
          n = (0, x.useCallback)(async () => {
            t.fallback_image && (await K(t.fallback_image));
          }, [t.fallback_image]);
        return void 0 == t.fallback_image
          ? null
          : (0, z.jsx)(en, {
              focusObject: { type: k.zG.ADAVisualization, visualization: t },
              title: t.title,
              onDownload: n,
              expanded: a,
              children: (0, z.jsxs)("div", {
                className: (0, u.default)(
                  "relative flex cursor-pointer items-center justify-center",
                  !a && "h-full w-full"
                ),
                onMouseEnter: () => r(!0),
                onMouseLeave: () => r(!1),
                children: [
                  (0, z.jsx)(C.Z, { jupyterMessage: t.fallback_image }),
                  (0, z.jsx)(m.M, {
                    children:
                      l &&
                      (0, z.jsxs)(p.E.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.2 },
                        className:
                          "absolute bottom-2 right-2 flex items-center justify-center rounded-md border border-token-border-light bg-token-main-surface-primary px-3 py-2  text-token-text-secondary",
                        children: [
                          (0, z.jsx)(s.D2w, { className: "icon-md mr-2" }),
                          (0, z.jsx)(f.Z, {
                            id: "ILz2tL",
                            defaultMessage:
                              "Interactive charts of this type not yet supported",
                          }),
                        ],
                      }),
                  }),
                ],
              }),
            });
      }
      function en(e) {
        let {
            focusObject: t,
            title: a = "",
            onDownload: l,
            settingsDropdownContent: r,
            expanded: n = !1,
            children: c,
          } = e,
          m = (0, w.Ex)() && !n,
          g = (0, k.rE)(),
          h =
            g &&
            g.type == k.zG.ADAVisualization &&
            g.type == t.type &&
            g.visualization.file_id == t.visualization.file_id,
          { 0: b, 1: y } = (0, x.useState)(!1),
          v = (0, x.useCallback)(() => {
            i.A.logEvent(d.M.adaFocusModeToggled),
              h ? k.RT.close() : k.RT.setFocusedObject(t);
          }, [h, t]),
          C = t.visualization.type,
          N = "chart" === C ? s.X5Q : s.tXQ;
        return (0, z.jsxs)(
          p.E.div,
          Q(
            Q(
              {
                className: (0, u.default)(
                  "relative overflow-hidden text-token-text-primary",
                  !n && "rounded-xl border",
                  m ? "w-56 cursor-pointer" : "w-full",
                  m &&
                    (h
                      ? "border-blue-selection/[.3]"
                      : "text-token-text-secondary")
                ),
                onMouseEnter: () => {
                  y(!0);
                },
                onMouseLeave: () => {
                  y(!1);
                },
                onClick: () => {
                  m && v();
                },
              },
              w.ee
            ),
            {},
            {
              children: [
                (0, z.jsxs)("div", {
                  className: (0, u.default)(
                    "flex justify-between bg-token-main-surface-primary px-4 py-3"
                  ),
                  children: [
                    (0, z.jsxs)("div", {
                      className: (0, u.default)(
                        "my-0 flex w-full items-center gap-2 font-medium capitalize",
                        m ? "overflow-hidden text-sm" : ""
                      ),
                      children: [
                        m &&
                          (0, z.jsx)(N, {
                            className: (0, u.default)(
                              "icon-lg flex-shrink-0",
                              h
                                ? "text-brand-green-800"
                                : "text-token-text-quaternary"
                            ),
                          }),
                        (0, z.jsx)("span", {
                          className: (0, u.default)(
                            "truncate",
                            m ? "flex-grow" : ""
                          ),
                          children: a,
                        }),
                      ],
                    }),
                    (0, z.jsxs)("div", {
                      className: (0, u.default)("flex items-center gap-3"),
                      children: [
                        !m &&
                          l &&
                          (0, z.jsx)(j.u, {
                            side: "top",
                            sideOffset: 4,
                            label: (0, z.jsx)(f.Z, {
                              id: "X0SJIT",
                              defaultMessage: "Download {type}",
                              values: { type: C },
                            }),
                            children: (0, z.jsx)("button", {
                              onClick: l,
                              className: "flex items-center text-xs",
                              children: (0, z.jsx)(s._8t, {
                                className: (0, u.default)(
                                  "text-token-text-tertiary hover:text-token-text-primary",
                                  h ? "icon-lg" : "icon-md"
                                ),
                              }),
                            }),
                          }),
                        !m &&
                          r &&
                          (0, z.jsxs)(o.fC, {
                            children: [
                              (0, z.jsx)(o.xz, {
                                asChild: !0,
                                children: (0, z.jsx)("button", {
                                  children: (0, z.jsx)(s.KAl, {
                                    className: (0, u.default)(
                                      "text-token-text-tertiary hover:text-token-text-primary",
                                      h ? "icon-lg" : "icon-md"
                                    ),
                                  }),
                                }),
                              }),
                              (0, z.jsx)(o.Uv, {
                                children: (0, z.jsx)(o.VY, {
                                  className:
                                    "flex min-w-48 max-w-xs flex-col rounded-xl border border-token-border-medium bg-token-main-surface-primary px-0 py-1 shadow-md",
                                  sideOffset: 7,
                                  children: r,
                                }),
                              }),
                            ],
                          }),
                        (0, z.jsx)(j.u, {
                          side: "top",
                          sideOffset: 4,
                          label:
                            m && h
                              ? (0, z.jsx)(f.Z, {
                                  id: "vilGuu",
                                  defaultMessage: "Collapse {type}",
                                  values: { type: C },
                                })
                              : (0, z.jsx)(f.Z, {
                                  id: "7kLyF5",
                                  defaultMessage: "Expand {type}",
                                  values: { type: C },
                                }),
                          children: (0, z.jsx)("button", {
                            onClick: v,
                            className: "flex items-center text-xs",
                            children: h
                              ? (0, z.jsx)(s.W5x, {
                                  className: (0, u.default)(
                                    "icon-md hover:text-token-text-primary",
                                    m && h
                                      ? b
                                        ? "icon-md text-blue-selection hover:text-blue-selection"
                                        : "icon-md text-blue-selection/[.5]"
                                      : "icon-lg text-token-text-tertiary"
                                  ),
                                })
                              : (0, z.jsx)(s.Qq, {
                                  className: (0, u.default)(
                                    "icon-md hover:text-token-text-primary",
                                    b && m
                                      ? "text-token-text-primary"
                                      : "text-token-text-tertiary"
                                  ),
                                }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                !m &&
                  (0, z.jsx)("div", {
                    className: (0, u.default)(
                      "flex items-center justify-center bg-token-main-surface-primary"
                    ),
                    style: {
                      height: n
                        ? "calc(100vh - 48px)"
                        : "".concat("table" == C ? 300 : 350, "px"),
                    },
                    children: c,
                  }),
              ],
            }
          )
        );
      }
    },
  },
]);
//# sourceMappingURL=2967.8427613a97e63243.js.map
