"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4435],
  {
    23260: function (e, r, a) {
      a.d(r, {
        ZP: function () {
          return rV;
        },
      });
      var t = a(30204);
      function l(e, r) {
        if (null == e) return {};
        var a,
          t,
          l = {},
          n = Object.keys(e);
        for (t = 0; t < n.length; t++)
          (a = n[t]), r.indexOf(a) >= 0 || (l[a] = e[a]);
        return l;
      }
      var n = a(70079),
        s = a(35250),
        o = {},
        i = (0, n.createContext)(o),
        c = (e, r) => (0, t.Z)({}, e, r),
        v = () => (0, n.useContext)(i),
        u = (0, n.createContext)(() => {});
      function y() {
        return (0, n.useContext)(u);
      }
      u.displayName = "JVR.DispatchShowTools";
      var p = (e) => {
        var { initial: r, dispatch: a, children: t } = e;
        return (0, s.jsx)(i.Provider, {
          value: r,
          children: (0, s.jsx)(u.Provider, { value: a, children: t }),
        });
      };
      p.displayName = "JVR.ShowTools";
      var d = {},
        j = (0, n.createContext)(d),
        f = (e, r) => (0, t.Z)({}, e, r),
        m = () => (0, n.useContext)(j),
        N = (0, n.createContext)(() => {});
      N.displayName = "JVR.DispatchExpands";
      var w = (e) => {
        var { initial: r, dispatch: a, children: t } = e;
        return (0, s.jsx)(j.Provider, {
          value: r,
          children: (0, s.jsx)(N.Provider, { value: a, children: t }),
        });
      };
      w.displayName = "JVR.Expands";
      var x = {
          Str: {
            as: "span",
            "data-type": "string",
            style: { color: "var(--w-rjv-type-string-color, #cb4b16)" },
            className: "w-rjv-type",
            children: "string",
          },
          Url: {
            as: "a",
            style: { color: "var(--w-rjv-type-url-color, #0969da)" },
            "data-type": "url",
            className: "w-rjv-type",
            children: "url",
          },
          Undefined: {
            style: { color: "var(--w-rjv-type-undefined-color, #586e75)" },
            as: "span",
            "data-type": "undefined",
            className: "w-rjv-type",
            children: "undefined",
          },
          Null: {
            style: { color: "var(--w-rjv-type-null-color, #d33682)" },
            as: "span",
            "data-type": "null",
            className: "w-rjv-type",
            children: "null",
          },
          Map: {
            style: {
              color: "var(--w-rjv-type-map-color, #268bd2)",
              marginRight: 3,
            },
            as: "span",
            "data-type": "map",
            className: "w-rjv-type",
            children: "Map",
          },
          Nan: {
            style: { color: "var(--w-rjv-type-nan-color, #859900)" },
            as: "span",
            "data-type": "nan",
            className: "w-rjv-type",
            children: "NaN",
          },
          Bigint: {
            style: { color: "var(--w-rjv-type-bigint-color, #268bd2)" },
            as: "span",
            "data-type": "bigint",
            className: "w-rjv-type",
            children: "bigint",
          },
          Int: {
            style: { color: "var(--w-rjv-type-int-color, #268bd2)" },
            as: "span",
            "data-type": "int",
            className: "w-rjv-type",
            children: "int",
          },
          Set: {
            style: {
              color: "var(--w-rjv-type-set-color, #268bd2)",
              marginRight: 3,
            },
            as: "span",
            "data-type": "set",
            className: "w-rjv-type",
            children: "Set",
          },
          Float: {
            style: { color: "var(--w-rjv-type-float-color, #859900)" },
            as: "span",
            "data-type": "float",
            className: "w-rjv-type",
            children: "float",
          },
          True: {
            style: { color: "var(--w-rjv-type-boolean-color, #2aa198)" },
            as: "span",
            "data-type": "bool",
            className: "w-rjv-type",
            children: "bool",
          },
          False: {
            style: { color: "var(--w-rjv-type-boolean-color, #2aa198)" },
            as: "span",
            "data-type": "bool",
            className: "w-rjv-type",
            children: "bool",
          },
          Date: {
            style: { color: "var(--w-rjv-type-date-color, #268bd2)" },
            as: "span",
            "data-type": "date",
            className: "w-rjv-type",
            children: "date",
          },
        },
        h = (0, n.createContext)(x),
        Z = (e, r) => (0, t.Z)({}, e, r),
        b = () => (0, n.useContext)(h),
        g = (0, n.createContext)(() => {});
      function R(e) {
        var { initial: r, dispatch: a, children: t } = e;
        return (0, s.jsx)(h.Provider, {
          value: r,
          children: (0, s.jsx)(g.Provider, { value: a, children: t }),
        });
      }
      (g.displayName = "JVR.DispatchTypes"), (R.displayName = "JVR.Types");
      var C = ["style"];
      function V(e) {
        var { style: r } = e,
          a = l(e, C),
          n = (0, t.Z)(
            {
              cursor: "pointer",
              height: "1em",
              width: "1em",
              userSelect: "none",
              display: "inline-flex",
            },
            r
          );
        return (0, s.jsx)(
          "svg",
          (0, t.Z)(
            {
              viewBox: "0 0 24 24",
              fill: "var(--w-rjv-arrow-color, currentColor)",
              style: n,
            },
            a,
            {
              children: (0, s.jsx)("path", {
                d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z",
              }),
            }
          )
        );
      }
      V.displayName = "JVR.TriangleArrow";
      var L = {
          Arrow: {
            as: "span",
            className: "w-rjv-arrow",
            style: { transform: "rotate(0deg)", transition: "all 0.3s" },
            children: (0, s.jsx)(V, {}),
          },
          Colon: {
            as: "span",
            style: {
              color: "var(--w-rjv-colon-color, var(--w-rjv-color))",
              marginLeft: 0,
              marginRight: 2,
            },
            className: "w-rjv-colon",
            children: ":",
          },
          Quote: {
            as: "span",
            style: { color: "var(--w-rjv-quotes-color, #236a7c)" },
            className: "w-rjv-quotes",
            children: '"',
          },
          ValueQuote: {
            as: "span",
            style: { color: "var(--w-rjv-quotes-string-color, #cb4b16)" },
            className: "w-rjv-quotes",
            children: '"',
          },
          BracketsLeft: {
            as: "span",
            style: { color: "var(--w-rjv-brackets-color, #236a7c)" },
            className: "w-rjv-brackets-start",
            children: "[",
          },
          BracketsRight: {
            as: "span",
            style: { color: "var(--w-rjv-brackets-color, #236a7c)" },
            className: "w-rjv-brackets-end",
            children: "]",
          },
          BraceLeft: {
            as: "span",
            style: { color: "var(--w-rjv-curlybraces-color, #236a7c)" },
            className: "w-rjv-curlybraces-start",
            children: "{",
          },
          BraceRight: {
            as: "span",
            style: { color: "var(--w-rjv-curlybraces-color, #236a7c)" },
            className: "w-rjv-curlybraces-end",
            children: "}",
          },
        },
        k = (0, n.createContext)(L),
        J = (e, r) => (0, t.Z)({}, e, r),
        S = () => (0, n.useContext)(k),
        B = (0, n.createContext)(() => {});
      B.displayName = "JVR.DispatchSymbols";
      var E = (e) => {
        var { initial: r, dispatch: a, children: t } = e;
        return (0, s.jsx)(k.Provider, {
          value: r,
          children: (0, s.jsx)(B.Provider, { value: a, children: t }),
        });
      };
      E.displayName = "JVR.Symbols";
      var T = {
          Copied: {
            className: "w-rjv-copied",
            style: {
              height: "1em",
              width: "1em",
              cursor: "pointer",
              verticalAlign: "middle",
              marginLeft: 5,
            },
          },
          CountInfo: {
            as: "span",
            className: "w-rjv-object-size",
            style: {
              color: "var(--w-rjv-info-color, #0000004d)",
              paddingLeft: 8,
              fontStyle: "italic",
            },
          },
          CountInfoExtra: {
            as: "span",
            className: "w-rjv-object-extra",
            style: { paddingLeft: 8 },
          },
          Ellipsis: {
            as: "span",
            style: {
              cursor: "pointer",
              color: "var(--w-rjv-ellipsis-color, #cb4b16)",
              userSelect: "none",
            },
            className: "w-rjv-ellipsis",
            children: "...",
          },
          Row: { as: "div", className: "w-rjv-line" },
          KeyName: { as: "span", className: "w-rjv-object-key" },
        },
        M = (0, n.createContext)(T),
        F = (e, r) => (0, t.Z)({}, e, r),
        I = () => (0, n.useContext)(M),
        A = (0, n.createContext)(() => {});
      A.displayName = "JVR.DispatchSection";
      var K = (e) => {
        var { initial: r, dispatch: a, children: t } = e;
        return (0, s.jsx)(M.Provider, {
          value: r,
          children: (0, s.jsx)(A.Provider, { value: a, children: t }),
        });
      };
      K.displayName = "JVR.Section";
      var D = { objectSortKeys: !1, indentWidth: 15 },
        P = (0, n.createContext)(D);
      P.displayName = "JVR.Context";
      var U = (0, n.createContext)(() => {});
      function Q(e, r) {
        return (0, t.Z)({}, e, r);
      }
      U.displayName = "JVR.DispatchContext";
      var O = () => (0, n.useContext)(P),
        q = (e) => {
          var { children: r, initialState: a, initialTypes: l } = e,
            [i, v] = (0, n.useReducer)(Q, Object.assign({}, D, a)),
            [u, y] = (0, n.useReducer)(c, o),
            [j, m] = (0, n.useReducer)(f, d),
            [N, h] = (0, n.useReducer)(Z, x),
            [b, g] = (0, n.useReducer)(J, L),
            [C, V] = (0, n.useReducer)(F, T);
          return (
            (0, n.useEffect)(() => v((0, t.Z)({}, a)), [a]),
            (0, s.jsx)(P.Provider, {
              value: i,
              children: (0, s.jsx)(U.Provider, {
                value: v,
                children: (0, s.jsx)(p, {
                  initial: u,
                  dispatch: y,
                  children: (0, s.jsx)(w, {
                    initial: j,
                    dispatch: m,
                    children: (0, s.jsx)(R, {
                      initial: (0, t.Z)({}, N, l),
                      dispatch: h,
                      children: (0, s.jsx)(E, {
                        initial: b,
                        dispatch: g,
                        children: (0, s.jsx)(K, {
                          initial: C,
                          dispatch: V,
                          children: r,
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            })
          );
        };
      q.displayName = "JVR.Provider";
      var _ = ["isNumber"],
        z = ["as", "render"],
        W = ["as", "render"],
        H = ["as", "render"],
        $ = ["as", "style", "render"],
        G = ["as", "render"],
        X = ["as", "render"],
        Y = ["as", "render"],
        ee = ["as", "render"],
        er = (e) => {
          var { Quote: r = {} } = S(),
            { isNumber: a } = e,
            n = l(e, _);
          if (a) return null;
          var { as: o, render: i } = r,
            c = l(r, z),
            v = (0, t.Z)({}, n, c);
          return (
            (i && "function" == typeof i && i(v)) ||
            (0, s.jsx)(o || "span", (0, t.Z)({}, v))
          );
        };
      er.displayName = "JVR.Quote";
      var ea = (e) => {
        var { ValueQuote: r = {} } = S(),
          a = (0, t.Z)(
            {},
            ((function (e) {
              if (null == e) throw TypeError("Cannot destructure " + e);
            })(e),
            e)
          ),
          { as: n, render: o } = r,
          i = l(r, W),
          c = (0, t.Z)({}, a, i);
        return (
          (o && "function" == typeof o && o(c)) ||
          (0, s.jsx)(n || "span", (0, t.Z)({}, c))
        );
      };
      ea.displayName = "JVR.ValueQuote";
      var et = () => {
        var { Colon: e = {} } = S(),
          { as: r, render: a } = e,
          n = l(e, H);
        return (
          (a && "function" == typeof a && a(n)) ||
          (0, s.jsx)(r || "span", (0, t.Z)({}, n))
        );
      };
      et.displayName = "JVR.Colon";
      var el = (e) => {
        var { Arrow: r = {} } = S(),
          a = m(),
          { expandKey: n } = e,
          o = !!a[n],
          { as: i, style: c, render: v } = r,
          u = l(r, $);
        return (
          (v &&
            "function" == typeof v &&
            v(
              (0, t.Z)({}, u, {
                "data-expanded": o,
                style: (0, t.Z)({}, c, e.style),
              })
            )) ||
          (0, s.jsx)(
            i || "span",
            (0, t.Z)({}, u, { style: (0, t.Z)({}, c, e.style) })
          )
        );
      };
      el.displayName = "JVR.Arrow";
      var en = (e) => {
        var { isBrackets: r } = e,
          { BracketsLeft: a = {}, BraceLeft: n = {} } = S();
        if (r) {
          var { as: o, render: i } = a,
            c = l(a, G);
          return (
            (i && "function" == typeof i && i(c)) ||
            (0, s.jsx)(o || "span", (0, t.Z)({}, c))
          );
        }
        var { as: v, render: u } = n,
          y = l(n, X);
        return (
          (u && "function" == typeof u && u(y)) ||
          (0, s.jsx)(v || "span", (0, t.Z)({}, y))
        );
      };
      en.displayName = "JVR.BracketsOpen";
      var es = (e) => {
        var { isBrackets: r, isVisiable: a } = e;
        if (!a) return null;
        var { BracketsRight: n = {}, BraceRight: o = {} } = S();
        if (r) {
          var { as: i, render: c } = n,
            v = l(n, Y);
          return (
            (c && "function" == typeof c && c(v)) ||
            (0, s.jsx)(i || "span", (0, t.Z)({}, v))
          );
        }
        var { as: u, render: y } = o,
          p = l(o, ee);
        return (
          (y && "function" == typeof y && y(p)) ||
          (0, s.jsx)(u || "span", (0, t.Z)({}, p))
        );
      };
      es.displayName = "JVR.BracketsClose";
      var eo = (e) => {
        var r,
          { value: a, expandKey: t, level: l } = e,
          n = m(),
          o = Array.isArray(a),
          { collapsed: i } = O(),
          c = a instanceof Set,
          v =
            null != (r = n[t])
              ? r
              : "boolean" == typeof i
                ? i
                : "number" == typeof i && l > i,
          u = Object.keys(a).length;
        return v || 0 === u
          ? null
          : (0, s.jsx)("div", {
              style: { paddingLeft: 4 },
              children: (0, s.jsx)(es, { isBrackets: o || c, isVisiable: !0 }),
            });
      };
      eo.displayName = "JVR.NestedClose";
      var ei = ["as", "render"],
        ec = ["as", "render"],
        ev = ["as", "render"],
        eu = ["as", "render"],
        ey = ["as", "render"],
        ep = ["as", "render"],
        ed = ["as", "render"],
        ej = ["as", "render"],
        ef = ["as", "render"],
        em = ["as", "render"],
        eN = ["as", "render"],
        ew = ["as", "render"],
        ex = ["as", "render"],
        eh = (e) => {
          var { value: r, keyName: a } = e,
            { Set: n = {}, displayDataTypes: o } = b();
          if (!(r instanceof Set) || !o) return null;
          var { as: i, render: c } = n,
            v = l(n, ei);
          return (
            (c &&
              "function" == typeof c &&
              c(v, { type: "type", value: r, keyName: a })) ||
            (0, s.jsx)(i || "span", (0, t.Z)({}, v))
          );
        };
      eh.displayName = "JVR.SetComp";
      var eZ = (e) => {
        var { value: r, keyName: a } = e,
          { Map: n = {}, displayDataTypes: o } = b();
        if (!(r instanceof Map) || !o) return null;
        var { as: i, render: c } = n,
          v = l(n, ec);
        return (
          (c &&
            "function" == typeof c &&
            c(v, { type: "type", value: r, keyName: a })) ||
          (0, s.jsx)(i || "span", (0, t.Z)({}, v))
        );
      };
      eZ.displayName = "JVR.MapComp";
      var eb = { opacity: 0.75, paddingRight: 4 },
        eg = (e) => {
          var { children: r = "", keyName: a } = e,
            { Str: o = {}, displayDataTypes: i } = b(),
            { shortenTextAfterLength: c = 30 } = O(),
            { as: v, render: u } = o,
            y = l(o, ev),
            [p, d] = (0, n.useState)(c && r.length >= c);
          (0, n.useEffect)(() => d(c && r.length >= c), [c]);
          var j = v || "span",
            f = (0, t.Z)({}, eb, o.style || {});
          c > 0 &&
            ((y.style = (0, t.Z)({}, y.style, {
              cursor: r.length <= c ? "initial" : "pointer",
            })),
            r.length > c &&
              (y.onClick = () => {
                d(!p);
              }));
          var m = p ? r.slice(0, c) + "..." : r,
            N = u && "function" == typeof u,
            w =
              N &&
              u((0, t.Z)({}, y, { style: f }), {
                type: "type",
                value: r,
                keyName: a,
              }),
            x =
              N &&
              u((0, t.Z)({}, y, { children: m, className: "w-rjv-value" }), {
                type: "value",
                value: r,
                keyName: a,
              });
          return (0, s.jsxs)(n.Fragment, {
            children: [
              i && (w || (0, s.jsx)(j, (0, t.Z)({}, y, { style: f }))),
              x ||
                (0, s.jsxs)(n.Fragment, {
                  children: [
                    (0, s.jsx)(ea, {}),
                    (0, s.jsx)(
                      j,
                      (0, t.Z)({}, y, { className: "w-rjv-value", children: m })
                    ),
                    (0, s.jsx)(ea, {}),
                  ],
                }),
            ],
          });
        };
      eg.displayName = "JVR.TypeString";
      var eR = (e) => {
        var { children: r, keyName: a } = e,
          { True: o = {}, displayDataTypes: i } = b(),
          { as: c, render: v } = o,
          u = l(o, eu),
          y = c || "span",
          p = (0, t.Z)({}, eb, o.style || {}),
          d = v && "function" == typeof v,
          j =
            d &&
            v((0, t.Z)({}, u, { style: p }), {
              type: "type",
              value: r,
              keyName: a,
            }),
          f =
            d &&
            v((0, t.Z)({}, u, { children: r, className: "w-rjv-value" }), {
              type: "value",
              value: r,
              keyName: a,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            i && (j || (0, s.jsx)(y, (0, t.Z)({}, u, { style: p }))),
            f ||
              (0, s.jsx)(
                y,
                (0, t.Z)({}, u, {
                  className: "w-rjv-value",
                  children: null == r ? void 0 : r.toString(),
                })
              ),
          ],
        });
      };
      eR.displayName = "JVR.TypeTrue";
      var eC = (e) => {
        var { children: r, keyName: a } = e,
          { False: o = {}, displayDataTypes: i } = b(),
          { as: c, render: v } = o,
          u = l(o, ey),
          y = c || "span",
          p = (0, t.Z)({}, eb, o.style || {}),
          d = v && "function" == typeof v,
          j =
            d &&
            v((0, t.Z)({}, u, { style: p }), {
              type: "type",
              value: r,
              keyName: a,
            }),
          f =
            d &&
            v((0, t.Z)({}, u, { children: r, className: "w-rjv-value" }), {
              type: "value",
              value: r,
              keyName: a,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            i && (j || (0, s.jsx)(y, (0, t.Z)({}, u, { style: p }))),
            f ||
              (0, s.jsx)(
                y,
                (0, t.Z)({}, u, {
                  className: "w-rjv-value",
                  children: null == r ? void 0 : r.toString(),
                })
              ),
          ],
        });
      };
      eC.displayName = "JVR.TypeFalse";
      var eV = (e) => {
        var { children: r, keyName: a } = e,
          { Float: o = {}, displayDataTypes: i } = b(),
          { as: c, render: v } = o,
          u = l(o, ep),
          y = c || "span",
          p = (0, t.Z)({}, eb, o.style || {}),
          d = v && "function" == typeof v,
          j =
            d &&
            v((0, t.Z)({}, u, { style: p }), {
              type: "type",
              value: r,
              keyName: a,
            }),
          f =
            d &&
            v((0, t.Z)({}, u, { children: r, className: "w-rjv-value" }), {
              type: "value",
              value: r,
              keyName: a,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            i && (j || (0, s.jsx)(y, (0, t.Z)({}, u, { style: p }))),
            f ||
              (0, s.jsx)(
                y,
                (0, t.Z)({}, u, {
                  className: "w-rjv-value",
                  children: null == r ? void 0 : r.toString(),
                })
              ),
          ],
        });
      };
      eV.displayName = "JVR.TypeFloat";
      var eL = (e) => {
        var { children: r, keyName: a } = e,
          { Int: o = {}, displayDataTypes: i } = b(),
          { as: c, render: v } = o,
          u = l(o, ed),
          y = c || "span",
          p = (0, t.Z)({}, eb, o.style || {}),
          d = v && "function" == typeof v,
          j =
            d &&
            v((0, t.Z)({}, u, { style: p }), {
              type: "type",
              value: r,
              keyName: a,
            }),
          f =
            d &&
            v((0, t.Z)({}, u, { children: r, className: "w-rjv-value" }), {
              type: "value",
              value: r,
              keyName: a,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            i && (j || (0, s.jsx)(y, (0, t.Z)({}, u, { style: p }))),
            f ||
              (0, s.jsx)(
                y,
                (0, t.Z)({}, u, {
                  className: "w-rjv-value",
                  children: null == r ? void 0 : r.toString(),
                })
              ),
          ],
        });
      };
      eL.displayName = "JVR.TypeInt";
      var ek = (e) => {
        var { children: r, keyName: a } = e,
          { Bigint: o = {}, displayDataTypes: i } = b(),
          { as: c, render: v } = o,
          u = l(o, ej),
          y = c || "span",
          p = (0, t.Z)({}, eb, o.style || {}),
          d = v && "function" == typeof v,
          j =
            d &&
            v((0, t.Z)({}, u, { style: p }), {
              type: "type",
              value: r,
              keyName: a,
            }),
          f =
            d &&
            v((0, t.Z)({}, u, { children: r, className: "w-rjv-value" }), {
              type: "value",
              value: r,
              keyName: a,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            i && (j || (0, s.jsx)(y, (0, t.Z)({}, u, { style: p }))),
            f ||
              (0, s.jsx)(
                y,
                (0, t.Z)({}, u, {
                  className: "w-rjv-value",
                  children: (null == r ? void 0 : r.toString()) + "n",
                })
              ),
          ],
        });
      };
      ek.displayName = "JVR.TypeFloat";
      var eJ = (e) => {
        var { children: r, keyName: a } = e,
          { Url: o = {}, displayDataTypes: i } = b(),
          { as: c, render: v } = o,
          u = l(o, ef),
          y = (0, t.Z)({}, eb, o.style),
          p = v && "function" == typeof v,
          d =
            p &&
            v((0, t.Z)({}, u, { style: y }), {
              type: "type",
              value: r,
              keyName: a,
            }),
          j =
            p &&
            v(
              (0, t.Z)({}, u, {
                children: null == r ? void 0 : r.href,
                className: "w-rjv-value",
              }),
              { type: "value", value: r, keyName: a }
            );
        return (0, s.jsxs)(n.Fragment, {
          children: [
            i && (d || (0, s.jsx)(c || "span", (0, t.Z)({}, u, { style: y }))),
            j ||
              (0, s.jsxs)(
                "a",
                (0, t.Z)(
                  { href: null == r ? void 0 : r.href, target: "_blank" },
                  u,
                  {
                    className: "w-rjv-value",
                    children: [
                      (0, s.jsx)(ea, {}),
                      null == r ? void 0 : r.href,
                      (0, s.jsx)(ea, {}),
                    ],
                  }
                )
              ),
          ],
        });
      };
      eJ.displayName = "JVR.TypeUrl";
      var eS = (e) => {
        var { children: r, keyName: a } = e,
          { Date: o = {}, displayDataTypes: i } = b(),
          { as: c, render: v } = o,
          u = l(o, em),
          y = c || "span",
          p = (0, t.Z)({}, eb, o.style || {}),
          d = v && "function" == typeof v,
          j =
            d &&
            v((0, t.Z)({}, u, { style: p }), {
              type: "type",
              value: r,
              keyName: a,
            }),
          f = r instanceof Date ? r.toLocaleString() : r,
          m =
            d &&
            v((0, t.Z)({}, u, { children: f, className: "w-rjv-value" }), {
              type: "value",
              value: r,
              keyName: a,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            i && (j || (0, s.jsx)(y, (0, t.Z)({}, u, { style: p }))),
            m ||
              (0, s.jsx)(
                y,
                (0, t.Z)({}, u, { className: "w-rjv-value", children: f })
              ),
          ],
        });
      };
      eS.displayName = "JVR.TypeDate";
      var eB = (e) => {
        var { children: r, keyName: a } = e,
          { Undefined: o = {}, displayDataTypes: i } = b(),
          { as: c, render: v } = o,
          u = l(o, eN),
          y = (0, t.Z)({}, eb, o.style || {}),
          p = v && "function" == typeof v,
          d =
            p &&
            v((0, t.Z)({}, u, { style: y }), {
              type: "type",
              value: r,
              keyName: a,
            }),
          j =
            p &&
            v((0, t.Z)({}, u, { children: r, className: "w-rjv-value" }), {
              type: "value",
              value: r,
              keyName: a,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            i && (d || (0, s.jsx)(c || "span", (0, t.Z)({}, u, { style: y }))),
            j,
          ],
        });
      };
      eB.displayName = "JVR.TypeUndefined";
      var eE = (e) => {
        var { children: r, keyName: a } = e,
          { Null: o = {}, displayDataTypes: i } = b(),
          { as: c, render: v } = o,
          u = l(o, ew),
          y = (0, t.Z)({}, eb, o.style || {}),
          p = v && "function" == typeof v,
          d =
            p &&
            v((0, t.Z)({}, u, { style: y }), {
              type: "type",
              value: r,
              keyName: a,
            }),
          j =
            p &&
            v((0, t.Z)({}, u, { children: r, className: "w-rjv-value" }), {
              type: "value",
              value: r,
              keyName: a,
            });
        return (0, s.jsxs)(n.Fragment, {
          children: [
            i && (d || (0, s.jsx)(c || "span", (0, t.Z)({}, u, { style: y }))),
            j,
          ],
        });
      };
      eE.displayName = "JVR.TypeNull";
      var eT = (e) => {
        var { children: r, keyName: a } = e,
          { Nan: o = {}, displayDataTypes: i } = b(),
          { as: c, render: v } = o,
          u = l(o, ex),
          y = (0, t.Z)({}, eb, o.style || {}),
          p = v && "function" == typeof v,
          d =
            p &&
            v((0, t.Z)({}, u, { style: y }), {
              type: "type",
              value: r,
              keyName: a,
            }),
          j =
            p &&
            v(
              (0, t.Z)({}, u, {
                children: null == r ? void 0 : r.toString(),
                className: "w-rjv-value",
              }),
              { type: "value", value: r, keyName: a }
            );
        return (0, s.jsxs)(n.Fragment, {
          children: [
            i && (d || (0, s.jsx)(c || "span", (0, t.Z)({}, u, { style: y }))),
            j,
          ],
        });
      };
      eT.displayName = "JVR.TypeNan";
      var eM = (e) => (Number(e) === e && e % 1 != 0) || isNaN(e),
        eF = (e) => {
          var { value: r, keyName: a } = e,
            l = { keyName: a };
          return r instanceof URL
            ? (0, s.jsx)(eJ, (0, t.Z)({}, l, { children: r }))
            : "string" == typeof r
              ? (0, s.jsx)(eg, (0, t.Z)({}, l, { children: r }))
              : !0 === r
                ? (0, s.jsx)(eR, (0, t.Z)({}, l, { children: r }))
                : !1 === r
                  ? (0, s.jsx)(eC, (0, t.Z)({}, l, { children: r }))
                  : null === r
                    ? (0, s.jsx)(eE, (0, t.Z)({}, l, { children: r }))
                    : void 0 === r
                      ? (0, s.jsx)(eB, (0, t.Z)({}, l, { children: r }))
                      : r instanceof Date
                        ? (0, s.jsx)(eS, (0, t.Z)({}, l, { children: r }))
                        : "number" == typeof r && isNaN(r)
                          ? (0, s.jsx)(eT, (0, t.Z)({}, l, { children: r }))
                          : "number" == typeof r && eM(r)
                            ? (0, s.jsx)(eV, (0, t.Z)({}, l, { children: r }))
                            : "bigint" == typeof r
                              ? (0, s.jsx)(ek, (0, t.Z)({}, l, { children: r }))
                              : "number" == typeof r
                                ? (0, s.jsx)(
                                    eL,
                                    (0, t.Z)({}, l, { children: r })
                                  )
                                : null;
        };
      function eI(e, r, a) {
        var l = (0, n.useContext)(B),
          s = [e.className, r.className].filter(Boolean).join(" "),
          o = (0, t.Z)({}, e, r, {
            className: s,
            style: (0, t.Z)({}, e.style, r.style),
            children: r.children || e.children,
          });
        (0, n.useEffect)(() => l({ [a]: o }), [r]);
      }
      function eA(e, r, a) {
        var l = (0, n.useContext)(g),
          s = [e.className, r.className].filter(Boolean).join(" "),
          o = (0, t.Z)({}, e, r, {
            className: s,
            style: (0, t.Z)({}, e.style, r.style),
            children: r.children || e.children,
          });
        (0, n.useEffect)(() => l({ [a]: o }), [r]);
      }
      function eK(e, r, a) {
        var l = (0, n.useContext)(A),
          s = [e.className, r.className].filter(Boolean).join(" "),
          o = (0, t.Z)({}, e, r, {
            className: s,
            style: (0, t.Z)({}, e.style, r.style),
            children: r.children || e.children,
          });
        (0, n.useEffect)(() => l({ [a]: o }), [r]);
      }
      eF.displayName = "JVR.Value";
      var eD = ["as", "render"],
        eP = (e) => {
          var { KeyName: r = {} } = I();
          return eK(r, e, "KeyName"), null;
        };
      eP.displayName = "JVR.KeyName";
      var eU = (e) => {
        var { children: r, value: a, parentValue: n, keyName: o, keys: i } = e,
          c = "number" == typeof r,
          { KeyName: v = {} } = I(),
          { as: u, render: y } = v,
          p = l(v, eD);
        return (
          (p.style = (0, t.Z)({}, p.style, {
            color: c
              ? "var(--w-rjv-key-number, #268bd2)"
              : "var(--w-rjv-key-string, #002b36)",
          })),
          (y &&
            "function" == typeof y &&
            y((0, t.Z)({}, p, { children: r }), {
              value: a,
              parentValue: n,
              keyName: o,
              keys: i,
            })) ||
            (0, s.jsx)(u || "span", (0, t.Z)({}, p, { children: r }))
        );
      };
      eU.displayName = "JVR.KeyNameComp";
      var eQ = ["children", "value", "parentValue", "keyName", "keys"],
        eO = ["as", "render", "children"],
        eq = (e) => {
          var { Row: r = {} } = I();
          return eK(r, e, "Row"), null;
        };
      eq.displayName = "JVR.Row";
      var e_ = (e) => {
        var { children: r, value: a, parentValue: n, keyName: o, keys: i } = e,
          c = l(e, eQ),
          { Row: v = {} } = I(),
          { as: u, render: y } = v,
          p = l(v, eO);
        return (
          (y &&
            "function" == typeof y &&
            y((0, t.Z)({}, c, p, { children: r }), {
              value: a,
              keyName: o,
              parentValue: n,
              keys: i,
            })) ||
          (0, s.jsx)(u || "div", (0, t.Z)({}, c, p, { children: r }))
        );
      };
      e_.displayName = "JVR.RowComp";
      var ez = ["keyName", "value", "parentValue", "expandKey", "keys"],
        eW = ["as", "render"],
        eH = (e) => {
          var {
              keyName: r,
              value: a,
              parentValue: o,
              expandKey: i,
              keys: c,
            } = e,
            u = l(e, ez),
            { onCopied: y, enableClipboard: p } = O(),
            d = v()[i],
            [j, f] = (0, n.useState)(!1),
            { Copied: m = {} } = I();
          if (!1 === p || !d) return null;
          var N = {
              style: { display: "inline-flex" },
              fill: j
                ? "var(--w-rjv-copied-success-color, #28a745)"
                : "var(--w-rjv-copied-color, currentColor)",
              onClick: (e) => {
                e.stopPropagation();
                var r = "";
                (r =
                  "number" == typeof a && a === 1 / 0
                    ? "Infinity"
                    : "number" == typeof a && isNaN(a)
                      ? "NaN"
                      : "bigint" == typeof a
                        ? a + "n"
                        : a instanceof Date
                          ? a.toLocaleString()
                          : JSON.stringify(a, null, 2)),
                  y && y(r, a),
                  f(!0),
                  navigator.clipboard
                    .writeText(r)
                    .then(() => {
                      var e = setTimeout(() => {
                        f(!1), clearTimeout(e);
                      }, 3e3);
                    })
                    .catch((e) => {});
              },
            },
            { render: w } = m,
            x = l(m, eW),
            h = (0, t.Z)({}, x, u, N, {
              style: (0, t.Z)({}, x.style, u.style, N.style),
            });
          return (
            (w &&
              "function" == typeof w &&
              w((0, t.Z)({}, h, { "data-copied": j }), {
                value: a,
                keyName: r,
                keys: c,
                parentValue: o,
              })) ||
            (j
              ? (0, s.jsx)(
                  "svg",
                  (0, t.Z)({ viewBox: "0 0 32 36" }, h, {
                    children: (0, s.jsx)("path", {
                      d: "M27.5,33 L2.5,33 L2.5,12.5 L27.5,12.5 L27.5,15.2249049 C29.1403264,13.8627542 29.9736597,13.1778155 30,13.1700887 C30,11.9705278 30,10.0804982 30,7.5 C30,6.1 28.9,5 27.5,5 L20,5 C20,2.2 17.8,0 15,0 C12.2,0 10,2.2 10,5 L2.5,5 C1.1,5 0,6.1 0,7.5 L0,33 C0,34.4 1.1,36 2.5,36 L27.5,36 C28.9,36 30,34.4 30,33 L30,26.1114493 L27.5,28.4926435 L27.5,33 Z M7.5,7.5 L10,7.5 C10,7.5 12.5,6.4 12.5,5 C12.5,3.6 13.6,2.5 15,2.5 C16.4,2.5 17.5,3.6 17.5,5 C17.5,6.4 18.8,7.5 20,7.5 L22.5,7.5 C22.5,7.5 25,8.6 25,10 L5,10 C5,8.5 6.1,7.5 7.5,7.5 Z M5,27.5 L10,27.5 L10,25 L5,25 L5,27.5 Z M28.5589286,16 L32,19.6 L21.0160714,30.5382252 L13.5303571,24.2571429 L17.1303571,20.6571429 L21.0160714,24.5428571 L28.5589286,16 Z M17.5,15 L5,15 L5,17.5 L17.5,17.5 L17.5,15 Z M10,20 L5,20 L5,22.5 L10,22.5 L10,20 Z",
                    }),
                  })
                )
              : (0, s.jsx)(
                  "svg",
                  (0, t.Z)({ viewBox: "0 0 32 36" }, h, {
                    children: (0, s.jsx)("path", {
                      d: "M27.5,33 L2.5,33 L2.5,12.5 L27.5,12.5 L27.5,20 L30,20 L30,7.5 C30,6.1 28.9,5 27.5,5 L20,5 C20,2.2 17.8,0 15,0 C12.2,0 10,2.2 10,5 L2.5,5 C1.1,5 0,6.1 0,7.5 L0,33 C0,34.4 1.1,36 2.5,36 L27.5,36 C28.9,36 30,34.4 30,33 L30,29 L27.5,29 L27.5,33 Z M7.5,7.5 L10,7.5 C10,7.5 12.5,6.4 12.5,5 C12.5,3.6 13.6,2.5 15,2.5 C16.4,2.5 17.5,3.6 17.5,5 C17.5,6.4 18.8,7.5 20,7.5 L22.5,7.5 C22.5,7.5 25,8.6 25,10 L5,10 C5,8.5 6.1,7.5 7.5,7.5 Z M5,27.5 L10,27.5 L10,25 L5,25 L5,27.5 Z M22.5,21.5 L22.5,16.5 L12.5,24 L22.5,31.5 L22.5,26.5 L32,26.5 L32,21.5 L22.5,21.5 Z M17.5,15 L5,15 L5,17.5 L17.5,17.5 L17.5,15 Z M10,20 L5,20 L5,22.5 L10,22.5 L10,20 Z",
                    }),
                  })
                ))
          );
        };
      eH.displayName = "JVR.Copied";
      var e$ = (e) => {
        var r,
          { value: a, expandKey: t = "", level: l, keys: n = [] } = e,
          o = m(),
          { objectSortKeys: i, indentWidth: c, collapsed: v } = O(),
          u = Array.isArray(a);
        if (
          null != (r = o[t])
            ? r
            : "boolean" == typeof v
              ? v
              : "number" == typeof v && l > v
        )
          return null;
        var y = u
          ? Object.entries(a).map((e) => [Number(e[0]), e[1]])
          : Object.entries(a);
        return (
          i &&
            (y =
              !0 === i
                ? y.sort((e, r) => {
                    var [a] = e,
                      [t] = r;
                    return "string" == typeof a && "string" == typeof t
                      ? a.localeCompare(t)
                      : 0;
                  })
                : y.sort((e, r) => {
                    var [a, t] = e,
                      [l, n] = r;
                    return "string" == typeof a && "string" == typeof l
                      ? i(a, l, t, n)
                      : 0;
                  })),
          (0, s.jsx)("div", {
            className: "w-rjv-wrap",
            style: {
              borderLeft:
                "var(--w-rjv-border-left-width, 1px) var(--w-rjv-line-style, solid) var(--w-rjv-line-color, #ebebeb)",
              paddingLeft: c,
              marginLeft: 6,
            },
            children: y.map((e, r) => {
              var [t, o] = e;
              return (0, s.jsx)(
                eX,
                {
                  parentValue: a,
                  keyName: t,
                  keys: [...n, t],
                  value: o,
                  level: l,
                },
                r
              );
            }),
          })
        );
      };
      e$.displayName = "JVR.KeyValues";
      var eG = (e) => {
        var { keyName: r, parentValue: a, keys: t, value: l } = e,
          { highlightUpdates: o } = O(),
          i = "number" == typeof r,
          c = (0, n.useRef)(null);
        return (
          !(function (e) {
            var r,
              { value: a, highlightUpdates: t, highlightContainer: l } = e,
              s =
                ((r = (0, n.useRef)()),
                (0, n.useEffect)(() => {
                  r.current = a;
                }),
                r.current),
              o = (0, n.useMemo)(
                () =>
                  !!t &&
                  void 0 !== s &&
                  (typeof a != typeof s ||
                    ("number" == typeof a
                      ? !(isNaN(a) && isNaN(s)) && a !== s
                      : Array.isArray(a) !== Array.isArray(s) ||
                        ("object" != typeof a &&
                          "function" != typeof a &&
                          (a !== s || void 0)))),
                [t, a]
              );
            (0, n.useEffect)(() => {
              l &&
                l.current &&
                o &&
                "animate" in l.current &&
                l.current.animate(
                  [
                    { backgroundColor: "var(--w-rjv-update-color, #ebcb8b)" },
                    { backgroundColor: "" },
                  ],
                  { duration: 1e3, easing: "ease-in" }
                );
            }, [o, a, l]);
          })({ value: l, highlightUpdates: o, highlightContainer: c }),
          (0, s.jsxs)(n.Fragment, {
            children: [
              (0, s.jsxs)("span", {
                ref: c,
                children: [
                  (0, s.jsx)(er, { isNumber: i, "data-placement": "left" }),
                  (0, s.jsx)(eU, {
                    keyName: r,
                    value: l,
                    keys: t,
                    parentValue: a,
                    children: r,
                  }),
                  (0, s.jsx)(er, { isNumber: i, "data-placement": "right" }),
                ],
              }),
              (0, s.jsx)(et, {}),
            ],
          })
        );
      };
      eG.displayName = "JVR.KayName";
      var eX = (e) => {
        var {
            keyName: r,
            value: a,
            parentValue: l,
            level: o = 0,
            keys: i = [],
          } = e,
          c = y(),
          v = (0, n.useId)(),
          u = Array.isArray(a),
          p = a instanceof Set,
          d = a instanceof Map,
          j = a instanceof Date,
          f = a instanceof URL;
        if (
          (a && "object" == typeof a && !u && !p && !d && !j && !f) ||
          u ||
          p ||
          d
        ) {
          var m = p ? Array.from(a) : d ? Object.fromEntries(a) : a;
          return (0, s.jsx)(ra, {
            keyName: r,
            value: m,
            parentValue: l,
            initialValue: a,
            keys: i,
            level: o + 1,
          });
        }
        return (0, s.jsxs)(
          e_,
          (0, t.Z)(
            {
              className: "w-rjv-line",
              value: a,
              keyName: r,
              keys: i,
              parentValue: l,
            },
            {
              onMouseEnter: () => c({ [v]: !0 }),
              onMouseLeave: () => c({ [v]: !1 }),
            },
            {
              children: [
                (0, s.jsx)(eG, {
                  keyName: r,
                  value: a,
                  keys: i,
                  parentValue: l,
                }),
                (0, s.jsx)(eF, { keyName: r, value: a }),
                (0, s.jsx)(eH, {
                  keyName: r,
                  value: a,
                  keys: i,
                  parentValue: l,
                  expandKey: v,
                }),
              ],
            }
          )
        );
      };
      eX.displayName = "JVR.KeyValuesItem";
      var eY = ["value", "keyName"],
        e0 = ["as", "render"],
        e5 = (e) => {
          var { CountInfoExtra: r = {} } = I();
          return eK(r, e, "CountInfoExtra"), null;
        };
      e5.displayName = "JVR.CountInfoExtra";
      var e2 = (e) => {
        var { value: r = {}, keyName: a } = e,
          n = l(e, eY),
          { CountInfoExtra: o = {} } = I(),
          { as: i, render: c } = o,
          v = l(o, e0);
        if (!c && !v.children) return null;
        var u = (0, t.Z)({}, v, n);
        return (
          (c && "function" == typeof c && c(u, { value: r, keyName: a })) ||
          (0, s.jsx)(i || "span", (0, t.Z)({}, u))
        );
      };
      e2.displayName = "JVR.CountInfoExtraComps";
      var e1 = ["value", "keyName"],
        e3 = ["as", "render"],
        e6 = (e) => {
          var { CountInfo: r = {} } = I();
          return eK(r, e, "CountInfo"), null;
        };
      e6.displayName = "JVR.CountInfo";
      var e7 = (e) => {
        var { value: r = {}, keyName: a } = e,
          n = l(e, e1),
          { displayObjectSize: o } = O(),
          { CountInfo: i = {} } = I();
        if (!o) return null;
        var { as: c, render: v } = i,
          u = l(i, e3);
        u.style = (0, t.Z)({}, u.style, e.style);
        var y = Object.keys(r).length;
        u.children || (u.children = y + " items");
        var p = (0, t.Z)({}, u, n);
        return (
          (v &&
            "function" == typeof v &&
            v((0, t.Z)({}, p, { "data-length": y }), {
              value: r,
              keyName: a,
            })) ||
          (0, s.jsx)(c || "span", (0, t.Z)({}, p))
        );
      };
      e7.displayName = "JVR.CountInfoComp";
      var e8 = ["as", "render"],
        e4 = (e) => {
          var { Ellipsis: r = {} } = I();
          return eK(r, e, "Ellipsis"), null;
        };
      e4.displayName = "JVR.Ellipsis";
      var e9 = (e) => {
        var { isExpanded: r, value: a, keyName: n } = e,
          { Ellipsis: o = {} } = I(),
          { as: i, render: c } = o,
          v = l(o, e8);
        return (
          (c &&
            "function" == typeof c &&
            c((0, t.Z)({}, v, { "data-expanded": r }), {
              value: a,
              keyName: n,
            })) ||
          (r ? (0, s.jsx)(i || "span", (0, t.Z)({}, v)) : null)
        );
      };
      e9.displayName = "JVR.EllipsisComp";
      var re = (e) => {
        var r,
          {
            keyName: a,
            expandKey: l,
            keys: o,
            initialValue: i,
            value: c,
            parentValue: v,
            level: u,
          } = e,
          y = m(),
          p = (0, n.useContext)(N),
          { onExpand: d, collapsed: j } = O(),
          f = Array.isArray(c),
          w = c instanceof Set,
          x =
            null != (r = y[l])
              ? r
              : "boolean" == typeof j
                ? j
                : "number" == typeof j && u > j,
          h = "object" == typeof c,
          Z = 0 !== Object.keys(c).length && (f || w || h),
          b = { style: { display: "inline-flex", alignItems: "center" } };
        return (
          Z &&
            (b.onClick = () => {
              var e = { expand: !x, value: c, keyid: l, keyName: a };
              d && d(e), p({ [l]: e.expand });
            }),
          (0, s.jsxs)(
            "span",
            (0, t.Z)({}, b, {
              children: [
                Z &&
                  (0, s.jsx)(el, {
                    style: {
                      transform: "rotate(" + (x ? "-90" : "0") + "deg)",
                      transition: "all 0.3s",
                    },
                    expandKey: l,
                  }),
                (a || "number" == typeof a) && (0, s.jsx)(eG, { keyName: a }),
                (0, s.jsx)(eh, { value: i, keyName: a }),
                (0, s.jsx)(eZ, { value: i, keyName: a }),
                (0, s.jsx)(en, { isBrackets: f || w }),
                (0, s.jsx)(e9, { keyName: a, value: c, isExpanded: x }),
                (0, s.jsx)(es, { isVisiable: x || !Z, isBrackets: f || w }),
                (0, s.jsx)(e7, { value: c, keyName: a }),
                (0, s.jsx)(e2, { value: c, keyName: a }),
                (0, s.jsx)(eH, {
                  keyName: a,
                  value: c,
                  expandKey: l,
                  parentValue: v,
                  keys: o,
                }),
              ],
            })
          )
        );
      };
      re.displayName = "JVR.NestedOpen";
      var rr = [
          "className",
          "children",
          "parentValue",
          "keyid",
          "level",
          "value",
          "initialValue",
          "keys",
          "keyName",
        ],
        ra = (0, n.forwardRef)((e, r) => {
          var {
              className: a = "",
              parentValue: o,
              level: i = 1,
              value: c,
              initialValue: v,
              keys: u,
              keyName: p,
            } = e,
            d = l(e, rr),
            j = y(),
            f = (0, n.useId)(),
            m = [a, "w-rjv-inner"].filter(Boolean).join(" ");
          return (0, s.jsxs)(
            "div",
            (0, t.Z)(
              { className: m, ref: r },
              d,
              {
                onMouseEnter: () => j({ [f]: !0 }),
                onMouseLeave: () => j({ [f]: !1 }),
              },
              {
                children: [
                  (0, s.jsx)(re, {
                    expandKey: f,
                    value: c,
                    level: i,
                    keys: u,
                    parentValue: o,
                    keyName: p,
                    initialValue: v,
                  }),
                  (0, s.jsx)(e$, {
                    expandKey: f,
                    value: c,
                    level: i,
                    keys: u,
                    parentValue: o,
                    keyName: p,
                  }),
                  (0, s.jsx)(eo, { expandKey: f, value: c, level: i }),
                ],
              }
            )
          );
        });
      ra.displayName = "JVR.Container";
      var rt = (e) => {
        var { BraceLeft: r = {} } = S();
        return eI(r, e, "BraceLeft"), null;
      };
      rt.displayName = "JVR.BraceLeft";
      var rl = (e) => {
        var { BraceRight: r = {} } = S();
        return eI(r, e, "BraceRight"), null;
      };
      rl.displayName = "JVR.BraceRight";
      var rn = (e) => {
        var { BracketsLeft: r = {} } = S();
        return eI(r, e, "BracketsLeft"), null;
      };
      rn.displayName = "JVR.BracketsLeft";
      var rs = (e) => {
        var { BracketsRight: r = {} } = S();
        return eI(r, e, "BracketsRight"), null;
      };
      rs.displayName = "JVR.BracketsRight";
      var ro = (e) => {
        var { Arrow: r = {} } = S();
        return eI(r, e, "Arrow"), null;
      };
      ro.displayName = "JVR.Arrow";
      var ri = (e) => {
        var { Colon: r = {} } = S();
        return eI(r, e, "Colon"), null;
      };
      ri.displayName = "JVR.Colon";
      var rc = (e) => {
        var { Quote: r = {} } = S();
        return eI(r, e, "Quote"), null;
      };
      rc.displayName = "JVR.Quote";
      var rv = (e) => {
        var { ValueQuote: r = {} } = S();
        return eI(r, e, "ValueQuote"), null;
      };
      rv.displayName = "JVR.ValueQuote";
      var ru = (e) => {
        var { Bigint: r = {} } = b();
        return eA(r, e, "Bigint"), null;
      };
      ru.displayName = "JVR.Bigint";
      var ry = (e) => {
        var { Date: r = {} } = b();
        return eA(r, e, "Date"), null;
      };
      ry.displayName = "JVR.Date";
      var rp = (e) => {
        var { False: r = {} } = b();
        return eA(r, e, "False"), null;
      };
      rp.displayName = "JVR.False";
      var rd = (e) => {
        var { Float: r = {} } = b();
        return eA(r, e, "Float"), null;
      };
      rd.displayName = "JVR.Float";
      var rj = (e) => {
        var { Int: r = {} } = b();
        return eA(r, e, "Int"), null;
      };
      rj.displayName = "JVR.Int";
      var rf = (e) => {
        var { Map: r = {} } = b();
        return eA(r, e, "Map"), null;
      };
      rf.displayName = "JVR.Map";
      var rm = (e) => {
        var { Nan: r = {} } = b();
        return eA(r, e, "Nan"), null;
      };
      rm.displayName = "JVR.Nan";
      var rN = (e) => {
        var { Null: r = {} } = b();
        return eA(r, e, "Null"), null;
      };
      rN.displayName = "JVR.Null";
      var rw = (e) => {
        var { Set: r = {} } = b();
        return eA(r, e, "Set"), null;
      };
      rw.displayName = "JVR.Set";
      var rx = (e) => {
        var { Str: r = {} } = b();
        return eA(r, e, "Str"), null;
      };
      rx.displayName = "JVR.StringText";
      var rh = (e) => {
        var { True: r = {} } = b();
        return eA(r, e, "True"), null;
      };
      rh.displayName = "JVR.True";
      var rZ = (e) => {
        var { Undefined: r = {} } = b();
        return eA(r, e, "Undefined"), null;
      };
      rZ.displayName = "JVR.Undefined";
      var rb = (e) => {
        var { Url: r = {} } = b();
        return eA(r, e, "Url"), null;
      };
      rb.displayName = "JVR.Url";
      var rg = (e) => {
        var { Copied: r = {} } = I();
        return eK(r, e, "Copied"), null;
      };
      rg.displayName = "JVR.Copied";
      var rR = [
          "className",
          "style",
          "value",
          "children",
          "collapsed",
          "indentWidth",
          "displayObjectSize",
          "shortenTextAfterLength",
          "highlightUpdates",
          "enableClipboard",
          "displayDataTypes",
          "objectSortKeys",
          "onExpand",
          "onCopied",
        ],
        rC = (0, n.forwardRef)((e, r) => {
          var {
              className: a = "",
              style: n,
              value: o,
              children: i,
              collapsed: c,
              indentWidth: v = 15,
              displayObjectSize: u = !0,
              shortenTextAfterLength: y = 30,
              highlightUpdates: p = !0,
              enableClipboard: d = !0,
              displayDataTypes: j = !0,
              objectSortKeys: f = !1,
              onExpand: m,
              onCopied: N,
            } = e,
            w = l(e, rR),
            x = (0, t.Z)(
              {
                lineHeight: 1.4,
                fontFamily: "var(--w-rjv-font-family, Menlo, monospace)",
                color: "var(--w-rjv-color, #002b36)",
                backgroundColor: "var(--w-rjv-background-color, #00000000)",
                fontSize: 13,
              },
              n
            ),
            h = ["w-json-view-container", "w-rjv", a].filter(Boolean).join(" ");
          return (0, s.jsxs)(q, {
            initialState: {
              value: o,
              objectSortKeys: f,
              indentWidth: v,
              displayObjectSize: u,
              collapsed: c,
              enableClipboard: d,
              shortenTextAfterLength: y,
              highlightUpdates: p,
              onCopied: N,
              onExpand: m,
            },
            initialTypes: { displayDataTypes: j },
            children: [
              (0, s.jsx)(
                ra,
                (0, t.Z)({ value: o }, w, { ref: r, className: h, style: x })
              ),
              i,
            ],
          });
        });
      (rC.Bigint = ru),
        (rC.Date = ry),
        (rC.False = rp),
        (rC.Float = rd),
        (rC.Int = rj),
        (rC.Map = rf),
        (rC.Nan = rm),
        (rC.Null = rN),
        (rC.Set = rw),
        (rC.String = rx),
        (rC.True = rh),
        (rC.Undefined = rZ),
        (rC.Url = rb),
        (rC.ValueQuote = rv),
        (rC.Arrow = ro),
        (rC.Colon = ri),
        (rC.Quote = rc),
        (rC.Ellipsis = e4),
        (rC.BraceLeft = rt),
        (rC.BraceRight = rl),
        (rC.BracketsLeft = rn),
        (rC.BracketsRight = rs),
        (rC.Copied = rg),
        (rC.CountInfo = e6),
        (rC.CountInfoExtra = e5),
        (rC.KeyName = eP),
        (rC.Row = eq),
        (rC.displayName = "JVR.JsonView");
      var rV = rC;
    },
    37074: function (e, r, a) {
      a.d(r, {
        $: function () {
          return t;
        },
      });
      var t = {
        "--w-rjv-font-family": "monospace",
        "--w-rjv-color": "#0184a6",
        "--w-rjv-key-string": "#0184a6",
        "--w-rjv-background-color": "#202020",
        "--w-rjv-line-color": "#323232",
        "--w-rjv-arrow-color": "var(--w-rjv-color)",
        "--w-rjv-edit-color": "var(--w-rjv-color)",
        "--w-rjv-info-color": "#656565",
        "--w-rjv-update-color": "#ebcb8b",
        "--w-rjv-copied-color": "#0184a6",
        "--w-rjv-copied-success-color": "#28a745",
        "--w-rjv-curlybraces-color": "#1896b6",
        "--w-rjv-brackets-color": "#1896b6",
        "--w-rjv-quotes-color": "var(--w-rjv-key-string)",
        "--w-rjv-quotes-string-color": "var(--w-rjv-type-string-color)",
        "--w-rjv-type-string-color": "#cb4b16",
        "--w-rjv-type-int-color": "#268bd2",
        "--w-rjv-type-float-color": "#859900",
        "--w-rjv-type-bigint-color": "#268bd2",
        "--w-rjv-type-boolean-color": "#2aa198",
        "--w-rjv-type-date-color": "#586e75",
        "--w-rjv-type-url-color": "#649bd8",
        "--w-rjv-type-null-color": "#d33682",
        "--w-rjv-type-nan-color": "#076678",
        "--w-rjv-type-undefined-color": "#586e75",
      };
    },
    66983: function (e, r, a) {
      a.d(r, {
        W: function () {
          return t;
        },
      });
      var t = {
        "--w-rjv-font-family": "monospace",
        "--w-rjv-color": "#002b36",
        "--w-rjv-key-string": "#002b36",
        "--w-rjv-background-color": "#ffffff",
        "--w-rjv-line-color": "#ebebeb",
        "--w-rjv-arrow-color": "var(--w-rjv-color)",
        "--w-rjv-edit-color": "var(--w-rjv-color)",
        "--w-rjv-info-color": "#0000004d",
        "--w-rjv-update-color": "#ebcb8b",
        "--w-rjv-copied-color": "#002b36",
        "--w-rjv-copied-success-color": "#28a745",
        "--w-rjv-curlybraces-color": "#236a7c",
        "--w-rjv-colon-color": "#002b36",
        "--w-rjv-brackets-color": "#236a7c",
        "--w-rjv-quotes-color": "var(--w-rjv-key-string)",
        "--w-rjv-quotes-string-color": "var(--w-rjv-type-string-color)",
        "--w-rjv-type-string-color": "#cb4b16",
        "--w-rjv-type-int-color": "#268bd2",
        "--w-rjv-type-float-color": "#859900",
        "--w-rjv-type-bigint-color": "#268bd2",
        "--w-rjv-type-boolean-color": "#2aa198",
        "--w-rjv-type-date-color": "#586e75",
        "--w-rjv-type-url-color": "#0969da",
        "--w-rjv-type-null-color": "#d33682",
        "--w-rjv-type-nan-color": "#859900",
        "--w-rjv-type-undefined-color": "#586e75",
      };
    },
  },
]);
//# sourceMappingURL=4435.aecc778428f459a9.js.map
