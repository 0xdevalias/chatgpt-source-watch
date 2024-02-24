(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3842],
  {
    90228: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return L;
          },
        });
      var n = a(25660),
        l = a(22433),
        s = a(2723),
        r = a(68832),
        o = a(48927),
        i = a(39827),
        c = a(47527),
        d = a(65608),
        u = a(15777),
        m = a(72003);
      a(54232);
      var f = a(74099),
        h = a(91128),
        x = a(53197),
        g = a(70079),
        p = a(47249),
        v = a(35250);
      function b(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(a), !0).forEach(function (t) {
                (0, i.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : b(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
        }
        return e;
      }
      function w(e) {
        let {
            columnNames: t,
            columnTypes: a,
            rows: n,
            className: l = "",
            tableMetadata: s = {},
          } = e,
          { targetedReply: o, setTargetedReply: i } = (0, d.Bs)(),
          { 0: b, 1: w } = (0, g.useState)({
            bgCell: "#DFD7FF",
            bgHeader: "#DFD7FF",
            bgHeaderHovered: "#DFD7FF",
            borderColor: "#5700E5",
          }),
          y = (0, g.useRef)(null),
          { 0: N, 1: k } = (0, g.useState)(void 0),
          { 0: C, 1: T } = (0, g.useState)([]);
        (0, g.useEffect)(() => {
          t.length > 0 &&
            T(
              t.map((e, t) => {
                let a = s && s.columns && s.columns[e];
                return {
                  id: "id:".concat(t),
                  title: e,
                  maxWidth: 500,
                  themeOverride: a ? b : {},
                };
              })
            );
        }, [t, s, b]),
          (0, g.useEffect)(() => {
            let e = setTimeout(() => {
              w({});
            }, 5e3);
            return () => clearTimeout(e);
          }, [w]);
        let E = t.reduce(
            (e, t, a) => (
              s && s.columns && s.columns[t] && (e[a] = s.columns[t]), e
            ),
            {}
          ),
          { 0: O, 1: F } = (0, g.useState)({
            columns: u.EV.empty(),
            rows: u.EV.empty(),
          });
        (0, g.useEffect)(() => {
          if (
            null != y &&
            s &&
            s.columns &&
            Object.keys(s.columns).length > 0
          ) {
            let e = Object.keys(s.columns)[0],
              a = t.indexOf(e);
            setTimeout(() => {
              var e;
              null === (e = y.current) || void 0 === e || e.scrollTo(a, 0);
            }, 500);
          }
        }, [y, s, t]);
        let S = (0, g.useCallback)(
            function (e) {
              let [l, r] = e,
                o = n[r],
                i = s && s.rows && s.rows[r],
                c = s && s.columns && s.columns[t[l]];
              return {
                kind: (function (e) {
                  switch (e) {
                    case "number":
                      return u.p6.Number;
                    case "imageUrl":
                      return u.p6.Image;
                    default:
                      return u.p6.Text;
                  }
                })(a[l]),
                data: o[l],
                allowOverlay: !1,
                displayData: String(o[l]),
                themeOverride: c || i ? b : {},
              };
            },
            [t, a, n, s, b]
          ),
          M = (0, g.useCallback)(
            (e) => {
              if (e.columns.length > 0) {
                let a = e.columns.items.flatMap((e) => t.slice(e[0], e[1]));
                h.A.logEvent(x.M.adaColumnTargeted),
                  i({
                    message: "The user has selected the columns:  ".concat(
                      a.map((e) => '"'.concat(e, '"')).join(", ")
                    ),
                    label: (0, v.jsx)("div", {
                      children: (0, v.jsxs)("div", {
                        className: "text-token-text-tertiary",
                        children: [
                          (0, v.jsxs)("div", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                              (0, v.jsx)(p.Mie, { size: 20 }),
                              " ",
                              a.length,
                              " ",
                              1 === a.length ? "Column" : "Columns",
                            ],
                          }),
                          (0, v.jsx)("div", {
                            className: "mt-3 flex gap-3",
                            children: a.map((e) =>
                              (0, v.jsx)(
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
                  });
              } else if (e.rows.length > 0) {
                let t = e.rows.items.flatMap((e) => {
                  let [t, a] = e,
                    n = [];
                  for (let e = t; e < a; e++) n.push(e);
                  return n;
                });
                h.A.logEvent(x.M.adaRowTargeted),
                  i({
                    message:
                      "The user has selected rows at the following indices: ".concat(
                        t.map((e) => '"'.concat(e, '"')).join(", ")
                      ),
                    label: (0, v.jsx)("div", {
                      children: (0, v.jsx)("div", {
                        className: "text-token-text-tertiary",
                        children: (0, v.jsxs)("div", {
                          className: "flex items-center gap-2 text-sm",
                          children: [
                            (0, v.jsx)(p.Mie, { size: 20 }),
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
                  });
              } else if (e.current) {
                let t = e.current.range.x,
                  a = e.current.range.y,
                  n = e.current.range.x + e.current.range.width,
                  l = e.current.range.y + e.current.range.height,
                  s = (n - t) * (l - a);
                h.A.logEvent(x.M.adaRangeTargeted),
                  i({
                    message: "The user has selected a range at the iloc: "
                      .concat(a, ":")
                      .concat(l, ", ")
                      .concat(t, ":")
                      .concat(n, " in the current data"),
                    label: (0, v.jsx)("div", {
                      children: (0, v.jsx)("div", {
                        className: "text-token-text-tertiary",
                        children: (0, v.jsxs)("div", {
                          className: "flex items-center gap-2 text-sm",
                          children: [
                            (0, v.jsx)(p.Mie, { size: 20 }),
                            " ",
                            s,
                            " ",
                            1 === s ? "Cell" : "Cells",
                          ],
                        }),
                      }),
                    }),
                  });
              }
              F(e);
            },
            [t, i]
          ),
          D = (0, g.useCallback)(
            (e) => {
              "header" === e.kind
                ? E[e.location[0]] &&
                  (h.A.logEvent(x.M.adaColumnAnnotationViewed),
                  k({
                    bounds: {
                      top: e.bounds.y,
                      left: e.bounds.x,
                      width: e.bounds.width,
                      height: e.bounds.height,
                    },
                    text: E[e.location[0]],
                  }))
                : "cell" === e.kind &&
                  s &&
                  s.rows &&
                  s.rows[e.location[1]] &&
                  (h.A.logEvent(x.M.adaRowAnnotationViewed),
                  k({
                    bounds: {
                      top: e.bounds.y,
                      left: e.bounds.x,
                      width: e.bounds.width,
                      height: e.bounds.height,
                    },
                    text: s.rows[e.location[1]],
                  }));
            },
            [s, E]
          );
        return (
          (0, g.useEffect)(() => {
            void 0 === o && F({ columns: u.EV.empty(), rows: u.EV.empty() });
          }, [o]),
          (0, v.jsxs)(v.Fragment, {
            children: [
              (0, v.jsx)(m.F, {
                getCellContent: S,
                columns: C,
                rows: n.length,
                gridSelection: O,
                onGridSelectionChange: M,
                smoothScrollX: !0,
                smoothScrollY: !0,
                className: l,
                onItemHovered: D,
                ref: y,
                rowMarkers: "clickable-number",
                rowMarkerTheme: { bgCell: "#F7F7F8", textLight: "#0D0D0D" },
                theme: { textHeader: "#0D0D0D", textDark: "#676767" },
                rowMarkerWidth: 30,
                rowHeight: 48,
                verticalBorder: !0,
                minColumnWidth: 10,
                maxColumnWidth: 500,
                onColumnResize: (e, t, a) => {
                  T((n) => {
                    let l = [...n];
                    return (l[a] = j(j({}, e), {}, { width: t })), l;
                  });
                },
              }),
              N &&
                (0, v.jsx)(f.f, {
                  children: (0, v.jsx)("div", {
                    className: "absolute z-20",
                    style: {
                      top: N.bounds.top,
                      left: N.bounds.left,
                      width: N.bounds.width,
                      height: N.bounds.height,
                    },
                    children: (0, v.jsx)(r.u, {
                      label: (0, v.jsxs)("div", {
                        className:
                          "max-w-36 flex flex-col justify-start gap-2 p-0",
                        children: [
                          (0, v.jsxs)("div", {
                            className: "flex items-center justify-start gap-2",
                            children: [
                              (0, v.jsx)(c.Zo, {}),
                              (0, v.jsx)("p", {
                                className: "font-bold",
                                children: "Created by ChatGPT",
                              }),
                            ],
                          }),
                          (0, v.jsxs)("p", {
                            className: "text-left font-light",
                            children: [N.text.trim(), " "],
                          }),
                        ],
                      }),
                      className: "z-20",
                      side: "top",
                      align: "start",
                      onOpenChange: (e) => {
                        e || k(void 0);
                      },
                      children: (0, v.jsx)("div", {
                        className: "h-full w-full",
                      }),
                    }),
                  }),
                }),
            ],
          })
        );
      }
      var y = a(48290),
        N = a(13285),
        k = a(42005),
        C = a(33782),
        T = a(23340),
        E = a(13038),
        O = a(24668),
        F = a(45772),
        S = a(91786),
        M = a(91225),
        D = a(19841),
        P = a(90896),
        R = a(61888),
        I = a(8844),
        A = a(38800);
      function L(e) {
        var t, a, i, d, u;
        let { file: m, clientThreadId: f, expanded: p = !1 } = e,
          {
            adaFrame: b,
            isLoading: j,
            hasFailed: L,
          } = (function (e) {
            let { 0: t, 1: a } = (0, g.useState)(!1),
              { 0: l, 1: s } = (0, g.useState)(void 0),
              { 0: r, 1: o } = (0, g.useState)(!1);
            return (
              (0, g.useEffect)(() => {
                (async function (e) {
                  let t = _[z(e)];
                  if ("fetching" !== t) {
                    if (void 0 != t) {
                      s(t);
                      return;
                    }
                    (_[z(e)] = "fetching"), s(void 0), a(!0);
                    try {
                      let t =
                        "interpreter" === e.type
                          ? await E.Z.downloadFromInterpreter(
                              e.messageId,
                              e.serverThreadId,
                              e.fileName
                            )
                          : await E.Z.getFileDownloadLink(e.fileId);
                      if (t.status === n.KF.Success) {
                        if (e.fileName.endsWith(".json")) {
                          var l, r, i;
                          let a = await fetch(t.download_url),
                            n = await a.text(),
                            o = JSON.parse(n),
                            c = {
                              data: new P.DataFrame(o.data),
                              metadata: {
                                columns:
                                  null !== (l = o.metadata.columns) &&
                                  void 0 !== l
                                    ? l
                                    : [],
                                rows:
                                  null !== (r = o.metadata.rows) && void 0 !== r
                                    ? r
                                    : [],
                              },
                              suggestions:
                                null !== (i = o.suggestions) && void 0 !== i
                                  ? i
                                  : [],
                            };
                          s(c), (_[z(e)] = c);
                        } else if (
                          e.fileName.endsWith("xlsx") ||
                          e.fileName.endsWith("xls")
                        ) {
                          let a = {
                            data: await (0, P.readExcel)(t.download_url, {
                              parsingOptions: { dense: !1 },
                              frameConfig: { type: 4 },
                            }),
                          };
                          s(a), (_[z(e)] = a);
                        } else {
                          let a = {
                            data: await (0, P.readCSV)(t.download_url),
                          };
                          s(a), (_[z(e)] = a);
                        }
                      } else
                        o(!0),
                          console.error(
                            "Error fetching URL for file "
                              .concat(e.fileName, ": ")
                              .concat(t.status)
                          );
                    } catch (t) {
                      o(!0),
                        console.error(
                          "Error fetching URL for file "
                            .concat(e.fileName, ": ")
                            .concat(t)
                        );
                    } finally {
                      a(!1);
                    }
                  }
                })(e);
              }, [e]),
              { adaFrame: l, isLoading: t, hasFailed: r }
            );
          })(m),
          Z = (0, O.hz)(),
          V = null === (t = (0, O.t)()) || void 0 === t ? void 0 : t.isFree(),
          W = (0, o.Ex)(),
          U = (0, A.ER)((e) => e.spreadsheetFile),
          H = U && U.fileName == m.fileName,
          Q = W && !p,
          { 0: B, 1: q } = (0, g.useState)(!1),
          { data: G } = (0, T.Y7)(),
          K = (0, O.t)(),
          X = (0, N.N)(),
          Y = null === (a = (0, T.BC)(G, K)) || void 0 === a ? void 0 : a.id,
          J = null !== (i = (0, T.Bv)(f)) && void 0 !== i ? i : Y,
          $ = (0, C.Z)(f, void 0, R.noop, void 0),
          ee = (0, g.useCallback)(() => {
            let e = F.tQ.getThreadCurrentLeafId(f);
            if (null == e) return;
            let t = F.tQ.getTree(f).getBranchFromLeaf(e);
            s.hx.abortRequests(t.map((e) => e.id));
          }, [f]),
          et = (0, g.useCallback)(
            async (e) => {
              var t, a, n;
              let l, s;
              let {
                type: r,
                promptId: o,
                eventMetadata: i,
                cancelActiveRequests: c,
                focusOnNewCompletion: d = !0,
                useDefaultModel: u,
                completionMetadata: m,
                appendMessages: f,
              } = e;
              c && ee();
              let h = performance.now(),
                x = u ? Y : J,
                g =
                  null === (t = (0, T.P6)(x)) || void 0 === t ? void 0 : t.tags,
                { conversationMode: p } = m,
                v = await (0, S.Ob)(V);
              (0, S.Rr)(Z, v, p.kind) &&
                (l = await S.ZP.getEnforcementToken(v)),
                (0, M.u7)(Z, null != g ? g : []) &&
                  (s = await M.ZP.getEnforcementToken(null != g ? g : [])),
                $({
                  model: x,
                  completionType: r,
                  parentNodeId: o,
                  metadata: i,
                  focusOnNewCompletion: d,
                  completionMetadata: m,
                  arkoseToken: null !== (a = l) && void 0 !== a ? a : null,
                  turnstileToken: null !== (n = s) && void 0 !== n ? n : null,
                  preflightTime: performance.now() - h,
                  extraStreamParams: {
                    forceParagen: X.forceParagen,
                    forceRateLimit: X.forceRateLimit,
                    disableSystemContentToggling:
                      !!X.rebaseSystemMessageContent || void 0,
                  },
                  appendMessages: f,
                });
            },
            [
              Y,
              J,
              Z,
              $,
              X.forceParagen,
              X.forceRateLimit,
              X.rebaseSystemMessageContent,
              ee,
              V,
            ]
          ),
          ea = m.fileName.split("/"),
          en = "interpreter" === m.type ? ea[ea.length - 1] : m.fileName;
        en = en.replace(/[-_]/g, " ").substring(0, en.indexOf("."));
        let el = (0, g.useCallback)(() => {
            b &&
              ((0, P.toCSV)(b.data, { download: !0, fileName: en }),
              h.A.logEvent(x.M.adaSheetDownloaded));
          }, [b, en]),
          es = (e) => {
            let t = {
                id: (0, I.Z)(),
                author: { role: l.uU.User },
                content: { content_type: l.PX.Text, parts: [e.justification] },
                recipient: "all",
              },
              a = F.iN.getConversationMode(f),
              n = F.tQ.getThreadCurrentLeafId(f);
            F.tQ.updateTree(f, (e) => {
              e.addNode(t.id, t, n, l.uU.Tool, {
                completionSampleFinishTime: Date.now(),
              });
            }),
              F.tQ.setThreadCurrentLeafId(f, t.id),
              et({
                type: l.Os.Next,
                promptId: t.id,
                eventMetadata: { eventSource: "mouse" },
                cancelActiveRequests: !1,
                completionMetadata: { conversationMode: a },
              });
          },
          er = [],
          eo = [],
          ei = [],
          ec = {},
          ed = [];
        if (!j && b)
          try {
            (er = b.data.columns),
              (eo = b.data.dtypes),
              (ei = b.data.values),
              (ec = null !== (d = b.metadata) && void 0 !== d ? d : {}),
              (ed = null !== (u = b.suggestions) && void 0 !== u ? u : []);
          } catch (e) {}
        let eu = (0, g.useCallback)(() => {
          h.A.logEvent(x.M.adaFocusModeToggled),
            A.hm.setSpreadsheetFile(H ? null : m);
        }, [m, H]);
        return L
          ? (0, v.jsx)("div", {
              className: "max-w-full rounded-lg border border-red-600 p-3",
              children: (0, v.jsxs)("div", {
                className: "my-0 flex items-center justify-between font-light",
                children: [
                  (0, v.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, v.jsx)(c.oP, { className: "text-[#10A37F]" }),
                      (0, v.jsx)("p", {
                        className: "m-0 p-0 text-lg font-medium capitalize",
                        children: en,
                      }),
                    ],
                  }),
                  (0, v.jsx)("span", {
                    className: "text-sm text-red-600",
                    children: "Unable to load sheet",
                  }),
                ],
              }),
            })
          : (0, v.jsxs)("div", {
              className: "max-w-full",
              children: [
                (0, v.jsxs)("div", {
                  className:
                    "relative overflow-hidden rounded-lg border border-token-border-medium",
                  onMouseEnter: () => {
                    q(!0);
                  },
                  onMouseLeave: () => {
                    q(!1);
                  },
                  children: [
                    (0, v.jsx)("div", {
                      className: "flex flex-col",
                      children: (0, v.jsxs)("div", {
                        className: (0, D.default)(
                          "flex justify-between p-3",
                          H && !p
                            ? "bg-token-main-surface-secondary"
                            : "bg-token-main-surface-primary"
                        ),
                        children: [
                          (0, v.jsxs)("div", {
                            className:
                              "my-0 flex items-center gap-2 font-light",
                            children: [
                              (0, v.jsx)(c.oP, { className: "text-[#10A37F]" }),
                              (0, v.jsx)("p", {
                                className:
                                  "m-0 p-0 text-lg font-medium capitalize",
                                children: en,
                              }),
                            ],
                          }),
                          (0, v.jsxs)("div", {
                            className: (0, D.default)(
                              "flex items-center gap-3",
                              B ? "" : "hidden"
                            ),
                            children: [
                              (0, v.jsx)("button", {
                                onClick: el,
                                className:
                                  "flex items-center text-xs text-token-text-primary",
                                children: (0, v.jsx)(c._8, {}),
                              }),
                              (0, v.jsx)("button", {
                                onClick: eu,
                                className:
                                  "flex items-center text-sm text-token-main-surface-primary",
                                children: H
                                  ? (0, v.jsx)(v.Fragment, {
                                      children: (0, v.jsx)(c.W5, {}),
                                    })
                                  : (0, v.jsx)(v.Fragment, {
                                      children: (0, v.jsx)(c.Qq, {}),
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    !Q &&
                      (0, v.jsx)("div", {
                        className: (0, D.default)(
                          "flex items-center overflow-x-auto border-t border-token-border-light align-middle",
                          p ? "h-[80vh]" : "h-[400px]",
                          j ? "justify-center" : "justify-start"
                        ),
                        children: j
                          ? (0, v.jsx)(k.Z, {})
                          : (0, v.jsx)(w, {
                              columnNames: er,
                              columnTypes: eo,
                              rows: ei,
                              tableMetadata: ec,
                            }),
                      }),
                  ],
                }),
                !Q &&
                  ed &&
                  ed.length > 0 &&
                  (0, v.jsxs)("div", {
                    className: "flex items-center justify-center gap-2 p-2",
                    children: [
                      (0, v.jsx)("div", {
                        className: "text-xs font-bold",
                        children: "Suggestions",
                      }),
                      ed.map((e, t) =>
                        (0, v.jsx)(
                          r.u,
                          {
                            label: e.justification,
                            children: (0, v.jsxs)("button", {
                              onClick: () => es(e),
                              className:
                                "bg-token-background-light flex items-center gap-1.5 rounded-2xl border border-token-border-heavy bg-token-main-surface-primary px-3 py-0.5 text-sm hover:bg-token-main-surface-secondary",
                              children: [
                                (0, v.jsx)(y.Kd, { className: "icon-xs" }),
                                e.title,
                              ],
                            }),
                          },
                          t
                        )
                      ),
                    ],
                  }),
              ],
            });
      }
      let _ = {};
      function z(e) {
        return ""
          .concat(e.fileName, "-")
          .concat("interpreter" === e.type ? e.messageId : e.fileId);
      }
    },
    57553: function () {},
    66486: function () {},
    92418: function () {},
    93577: function () {},
    43480: function () {},
    52725: function () {},
    58642: function () {},
    32713: function () {},
    99851: function () {},
    63934: function () {},
    65240: function () {},
  },
]);
//# sourceMappingURL=3842.2fad09c9cd727ecc.js.map
