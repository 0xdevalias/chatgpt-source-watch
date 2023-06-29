"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [167],
  {
    69403: function (e, t, n) {
      var r, a, i, s, o, l, u, d, c, f, h, g, m, p, v;
      n.d(t, {
        Jq: function () {
          return d;
        },
        Os: function () {
          return i;
        },
        PX: function () {
          return o;
        },
        uU: function () {
          return s;
        },
      }),
        ((c = r || (r = {})).Default = "default"),
        (c.Dark = "dark"),
        ((a || (a = {})).Retrieval = "retrieval"),
        ((f = i || (i = {})).Next = "next"),
        (f.Variant = "variant"),
        (f.Continue = "continue"),
        ((h = s || (s = {})).Unknown = "unknown"),
        (h.User = "user"),
        (h.Assistant = "assistant"),
        (h.System = "system"),
        (h.Critic = "critic"),
        (h.Tool = "tool"),
        ((g = o || (o = {})).Text = "text"),
        (g.MultimodalText = "multimodal_text"),
        (g.TetherBrowsingCode = "tether_browsing_code"),
        (g.Code = "code"),
        (g.ExecutionOutput = "execution_output"),
        (g.SystemError = "system_error"),
        (g.SystemMessage = "system_message"),
        (g.TetherBrowsingDisplay = "tether_browsing_display"),
        (g.TetherQuote = "tether_quote"),
        ((m = l || (l = {})).Search = "search"),
        (m.Click = "click"),
        (m.OpenUrl = "open_url"),
        (m.Quote = "quote"),
        (m.QuoteFull = "quote_full"),
        (m.Back = "back"),
        (m.Scroll = "scroll"),
        ((p = u || (u = {})).Running = "running"),
        (p.Finished = "finished"),
        ((v = d || (d = {})).Root = "root"),
        (v.System = "system"),
        (v.Prompt = "prompt"),
        (v.Completion = "completion");
    },
    75515: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(35250),
        a = n(19841);
      function i(e) {
        var t = e.url,
          n = e.name,
          i = e.size,
          s = e.large,
          o = e.className;
        return (0, r.jsxs)("div", {
          className: (0, a.Z)("relative", o),
          style: { width: i, height: i },
          children: [
            (0, r.jsx)("img", {
              src: t,
              alt: "".concat(n, " logo"),
              className: (0, a.Z)(
                "h-full w-full bg-white",
                s ? "rounded-[5px]" : "rounded-sm"
              ),
            }),
            (0, r.jsx)("div", {
              className: (0, a.Z)(
                "absolute inset-0 ring-1 ring-inset ring-black/10",
                s ? "rounded-[5px]" : "rounded-sm"
              ),
            }),
          ],
        });
      }
    },
    46110: function (e, t, n) {
      n.d(t, {
        Ph: function () {
          return w;
        },
        Yt: function () {
          return k;
        },
        k$: function () {
          return j;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(19841),
        s = n(54887),
        o = n.n(s),
        l = n(1454),
        u = n(13002),
        d = n(34303),
        c = n(64135),
        f = n(88038),
        h = n(75515),
        g = n(38317);
      function m() {
        var e = (0, r._)([
          "relative p-1 ",
          " text-white flex items-center justify-center",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = (0, r._)([
          "\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = (0, r._)([
          "text-white flex justify-center items-center relative tracking-widest",
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = (0, r._)(["relative flex"]);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      var b = d.Z.div(m(), function (e) {
          return e.$isMessageRedesign
            ? "rounded-full h-7 w-7"
            : "rounded-sm h-[30px] w-[30px]";
        }),
        y = d.Z.span(
          p(),
          function (e) {
            return "warning" === e.$type && "bg-orange-500 text-white";
          },
          function (e) {
            return "danger" === e.$type && "bg-red-500 text-white";
          }
        ),
        j = function (e) {
          var t = e.iconName,
            n = e.background,
            r = e.notice,
            i = (0, c.hz)().has(f.FZ),
            s = g.nI;
          switch (t) {
            case "globe":
              s = l.RsK;
              break;
            case "terminal":
              s = l.cDN;
              break;
            case "text":
              s = l.RUS;
              break;
            case "browsing":
              s = l.jRj;
              break;
            case "code":
              s = u.oT$;
              break;
            case "plugin":
              s = l.yG;
              break;
            case "user":
              s = l.fzv;
          }
          return (0, a.jsxs)(b, {
            $isMessageRedesign: i,
            style: { backgroundColor: n },
            children: [
              (0, a.jsx)(g.ZP, {
                icon: s,
                size: "medium",
                className: i ? "!h-5 !w-5" : "",
              }),
              r && (0, a.jsx)(y, { $type: r, children: "!" }),
            ],
          });
        },
        w = function (e) {
          var t = e.plugin,
            n = e.notice,
            r = (0, c.hz)().has(f.FZ);
          return (0, a.jsxs)(b, {
            $isMessageRedesign: r,
            className: "p-0",
            children: [
              (0, a.jsx)(h.Z, {
                url: t.manifest.logo_url,
                name: t.manifest.name_for_human,
                size: "100%",
              }),
              n && (0, a.jsx)(y, { $type: n, children: "!" }),
            ],
          });
        },
        _ = d.Z.div(v()),
        C = d.Z.div(x()),
        M = { small: 20, redesign: 28, medium: 38 },
        k = function (e) {
          var t,
            n = e.user,
            r = e.size,
            s = e.notice,
            u = e.rounded,
            d = s && (0, a.jsx)(y, { $type: s, children: "!" }),
            h = (0, c.hz)().has(f.FZ);
          if ((null == n ? void 0 : n.picture) != null)
            return (0, a.jsxs)(C, {
              children: [
                (0, a.jsx)(o(), {
                  src: n.picture,
                  alt: "User",
                  width: M[r],
                  height: M[r],
                  className:
                    h || (void 0 !== u && u) ? "rounded-full" : "rounded-sm",
                }),
                d,
              ],
            });
          var m = (
            null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : ""
          )
            .split(" ")
            .map(function (e) {
              return e[0];
            })
            .join("");
          return (0, a.jsxs)(_, {
            className: (0, i.Z)(
              "redesign" === r
                ? "h-7 w-7 text-xs"
                : "small" === r
                ? "h-5 w-5 text-xs"
                : "h-[30px] w-[30px] text-lg",
              h ? "rounded-full" : "rounded-sm"
            ),
            children: [
              m ||
                (0, a.jsx)(g.ZP, {
                  icon: l.fzv,
                  size: "redesign" === r ? "small" : r,
                }),
              d,
            ],
          });
        };
    },
    2368: function (e, t, n) {
      n.d(t, {
        $: function () {
          return b;
        },
        Z: function () {
          return x;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(70079),
        s = n(34303),
        o = n(64135),
        l = n(88038),
        u = n(13282);
      function d() {
        var e = (0, r._)(["bg-black rounded-md"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = (0, r._)([
          "flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md ",
          "",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, r._)(["p-4 overflow-y-auto"]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = (0, r._)(["", ""]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      var g = s.Z.div(d()),
        m = s.Z.div(c(), function (e) {
          return e.$isMessageRedesign && "dark:bg-gray-900";
        }),
        p = s.Z.div(f()),
        v = s.Z.code(h(), function (e) {
          return e.$shouldWrap ? "!whitespace-pre-wrap" : "!whitespace-pre";
        });
      function x(e) {
        var t = e.children,
          n = e.className,
          r = e.language,
          s = e.content,
          o = (0, i.useCallback)(
            function () {
              navigator.clipboard.writeText(s);
            },
            [s]
          );
        return (0, a.jsx)(b, {
          title: r,
          headerDecoration: (0, a.jsx)(u.Z, {
            buttonText: "Copy code",
            onCopy: o,
          }),
          className: "mb-4",
          codeClassName: n,
          children: t,
        });
      }
      function b(e) {
        var t = e.children,
          n = e.title,
          r = e.headerDecoration,
          i = e.shouldWrapCode,
          s = e.className,
          u = e.codeClassName,
          d = (0, o.hz)().has(l.FZ);
        return (0, a.jsxs)(g, {
          className: s,
          children: [
            (0, a.jsxs)(m, {
              $isMessageRedesign: d,
              children: [n && (0, a.jsx)("span", { children: n }), r],
            }),
            (0, a.jsx)(p, {
              children: (0, a.jsx)(v, {
                $shouldWrap: void 0 !== i && i,
                className: u,
                children: t,
              }),
            }),
          ],
        });
      }
    },
    13282: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = n(22830),
        a = n(4337),
        i = n(35250),
        s = n(70079),
        o = n(1454),
        l = n(34303),
        u = n(86526),
        d = n(38317);
      function c() {
        var e = (0, a._)(["flex ml-auto gap-2"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function f(e) {
        var t = e.buttonText,
          n = e.onCopy,
          a = e.className,
          l = (0, r._)((0, s.useState)(!1), 2),
          c = l[0],
          f = l[1],
          g = (0, u.Z)(),
          m = (0, s.useCallback)(
            function () {
              n(),
                f(!0),
                setTimeout(function () {
                  g() && f(!1);
                }, 2e3);
            },
            [g, n]
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            !c &&
              (0, i.jsxs)(h, {
                onClick: m,
                className: a,
                children: [(0, i.jsx)(d.ZP, { icon: o.j4u }), t],
              }),
            c &&
              (0, i.jsxs)(h, {
                className: a,
                children: [(0, i.jsx)(d.ZP, { icon: o.UgA }), t && "Copied!"],
              }),
          ],
        });
      }
      var h = l.Z.button(c());
    },
    180: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(35250);
      function a(e) {
        var t,
          n = e.url,
          a = e.size,
          i = void 0 === a ? 16 : a,
          s = e.className;
        try {
          t = new URL(n);
        } catch (e) {
          return console.error(e), null;
        }
        return (0, r.jsx)("img", {
          src: "https://icons.duckduckgo.com/ip3/".concat(t.hostname, ".ico"),
          alt: "Favicon",
          width: i,
          height: i,
          className: s,
        });
      }
    },
    30931: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var r = n(22830),
        a = n(35250),
        i = n(39217),
        s = n(19841),
        o = n(70079),
        l = n(1454),
        u = n(75908),
        d = n(3001),
        c = n(38317);
      function f(e) {
        var t = e.percentage,
          n = e.className,
          r = 2 * Math.PI * 45;
        return (0, a.jsxs)("svg", {
          width: "120",
          height: "120",
          viewBox: "0 0 120 120",
          className: n,
          children: [
            (0, a.jsx)("circle", {
              className:
                "origin-[50%_50%] -rotate-90 stroke-gray-200 transition-[stroke-dashoffset] duration-1000 ease-in-out",
              strokeWidth: "20",
              fill: "transparent",
              r: 45,
              cx: "60",
              cy: "60",
            }),
            (0, a.jsx)("circle", {
              className:
                "origin-[50%_50%] -rotate-90 transition-[stroke-dashoffset]",
              stroke: "currentColor",
              strokeWidth: "20",
              strokeDashoffset: r - (t / 100) * r,
              strokeDasharray: "".concat(r, " ").concat(r),
              fill: "transparent",
              r: 45,
              cx: "60",
              cy: "60",
            }),
          ],
        });
      }
      var h = n(57924);
      function g(e) {
        return e instanceof File;
      }
      function m(e) {
        var t,
          n,
          d,
          m,
          v = e.onRemoveFileClick,
          x = e.file,
          b = e.loadingPercentage,
          y = e.onDownloadClick,
          j = (0, u.Z)(),
          w = null != y,
          _ = g(x) ? x.name : x,
          C = !!g(x) && x.type.startsWith("image/"),
          M =
            ((t = g(x) ? x : null),
            (d = (n = (0, r._)((0, o.useState)(void 0), 2))[0]),
            (m = n[1]),
            (0, o.useEffect)(
              function () {
                if (t && t.type.startsWith("image/")) {
                  var e = new FileReader();
                  e.addEventListener("load", function () {
                    var t = e.result;
                    m("string" == typeof t ? t : void 0);
                  }),
                    e.readAsDataURL(t);
                } else m(void 0);
              },
              [t]
            ),
            d);
        return (0, a.jsxs)("div", {
          className: "group relative inline-block text-xs text-gray-900",
          children: [
            (0, a.jsx)(w ? "button" : "span", {
              className: "flex items-stretch justify-center",
              onClick: function () {
                return w && (null == y ? void 0 : y());
              },
              children:
                C && null != M
                  ? (0, a.jsx)("span", {
                      className: (0, s.Z)(
                        "h-10 w-10 rounded-md bg-gray-500 bg-cover bg-center dark:bg-gray-500",
                        w && "group-hover:bg-black"
                      ),
                      style: {
                        backgroundImage:
                          void 0 !== M ? "url(".concat(M, ")") : "none",
                      },
                      children:
                        w &&
                        (0, a.jsx)(c.ZP, {
                          icon: l._hL,
                          className: (0, s.Z)(
                            "h-5 w-5",
                            "hidden group-hover:block"
                          ),
                        }),
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsxs)("span", {
                          className: (0, s.Z)(
                            "rounded-l-md bg-gray-500 px-2 py-2 text-white transition-colors dark:bg-gray-500",
                            w && "group-hover:bg-black"
                          ),
                          children: [
                            (0, a.jsx)(c.ZP, {
                              icon: i.Z,
                              className: (0, s.Z)(
                                "h-5 w-5",
                                w && "group-hover:hidden"
                              ),
                            }),
                            w &&
                              (0, a.jsx)(c.ZP, {
                                icon: l._hL,
                                className: (0, s.Z)(
                                  "h-5 w-5",
                                  "hidden group-hover:block"
                                ),
                              }),
                          ],
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "flex max-w-xs items-center truncate rounded-r-md bg-gray-50 px-3 py-2 font-medium",
                          children: (0, a.jsx)("span", {
                            className: "truncate",
                            children: _,
                          }),
                        }),
                      ],
                    }),
            }),
            void 0 !== b &&
              b < 100 &&
              (0, a.jsx)("div", {
                className:
                  "absolute right-1 top-1 -translate-y-1/2 translate-x-1/2 rounded-full border border-white bg-white p-0.5 text-blue-700 dark:border-gray-700",
                children: (0, a.jsx)(f, {
                  percentage: b,
                  className: "h-4 w-4",
                }),
              }),
            null != v &&
              (0, a.jsx)("button", {
                onClick: v,
                className:
                  "absolute right-1 top-1 -translate-y-1/2 translate-x-1/2 rounded-full border border-white bg-gray-500 p-0.5 text-white transition-colors hover:bg-black hover:opacity-100 group-hover:opacity-100 md:opacity-0",
                children: (0, a.jsx)(h.u, {
                  label: j.formatMessage(p.removeFile),
                  side: "top",
                  sideOffset: 4,
                  children: (0, a.jsx)(c.ZP, { icon: l.q5L }),
                }),
              }),
          ],
        });
      }
      var p = (0, d.vU)({
        removeFile: {
          id: "FileTile.removeFile",
          defaultMessage: "Remove file",
          description: "Tooltip label for removing a file from the textarea",
        },
      });
    },
    10604: function (e, t, n) {
      var r = n(39324),
        a = n(22830),
        i = n(4337),
        s = n(35250),
        o = n(19841),
        l = n(70079),
        u = n(34303),
        d = n(38317);
      function c() {
        var e = (0, i._)(["absolute right-0 top-1/2 -translate-y-1/2"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      t.Z = l.forwardRef(function (e, t) {
        var n = e.name,
          i = e.placeholder,
          u = e.type,
          c = e.displayName,
          h = e.onChange,
          g = e.onBlur,
          m = e.value,
          p = e.saveOnBlur,
          v = e.icon,
          x = e.onInputIconClick,
          b = e.className,
          y = e.autoComplete,
          j = e.autoFocus,
          w = e.onPressEnter,
          _ = (0, a._)((0, l.useState)(m), 2),
          C = _[0],
          M = _[1],
          k = (0, l.useCallback)(
            function (e) {
              null == g || g(e), p && M(e.target.value);
            },
            [g, p]
          ),
          T = (0, l.useCallback)(
            function (e) {
              null == h || h(e), p && M(e.target.value);
            },
            [h, p]
          ),
          N = (0, l.useCallback)(
            function (e) {
              "Enter" === e.key && w && (e.preventDefault(), w());
            },
            [w]
          );
        (0, l.useEffect)(
          function () {
            M(m);
          },
          [m]
        );
        var P = (0, r._)({}, p ? {} : { value: m }, p ? { value: C } : {});
        return (0,
        s.jsxs)("div", { className: (0, o.Z)("rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:bg-gray-700", b), children: [(0, s.jsx)("label", { htmlFor: n, className: "block text-xs font-medium text-gray-900 dark:text-gray-100", children: c }), (0, s.jsxs)("div", { className: (0, o.Z)(c && "mt-1", "relative"), children: [(0, s.jsx)("input", (0, r._)({ ref: t, type: u, name: n, id: n, className: (0, o.Z)("block w-full border-0 p-0 text-gray-900 placeholder-gray-500 outline-none focus:ring-0 dark:bg-gray-700 dark:text-gray-100 sm:text-sm", v && "pr-6"), placeholder: i, onBlur: k, onChange: T, onKeyDown: N, autoComplete: y, autoFocus: j }, P)), v && (0, s.jsx)(f, { onClick: x, children: (0, s.jsx)(d.ZP, { icon: v }) })] })] });
      });
      var f = u.Z.button(c());
    },
    37541: function (e, t, n) {
      var r = n(35250),
        a = n(70060),
        i = n.n(a);
      n(70079);
      var s = function (e) {
        var t = e.children;
        return (0, r.jsx)(r.Fragment, { children: t });
      };
      t.Z = i()(
        function () {
          return Promise.resolve(s);
        },
        { ssr: !1 }
      );
    },
    85449: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(95182),
        s = n.n(i),
        o = n(1454),
        l = n(34303),
        u = n(38317);
      function d() {
        var e = (0, r._)(["text-xs flex items-center justify-center gap-1"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = (0, r._)([
          "dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400",
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, r._)(["flex-grow flex-shrink-0"]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h(e) {
        var t = e.currentPage,
          n = e.onChangeIndex,
          r = e.length,
          i = e.className,
          l = function (e) {
            n(s()(t + e, 0, r - 1));
          };
        return (0, a.jsxs)(g, {
          className: i,
          children: [
            (0, a.jsx)(m, {
              onClick: function () {
                return l(-1);
              },
              disabled: 0 === t,
              children: (0, a.jsx)(u.ZP, { size: "xsmall", icon: o.YFh }),
            }),
            (0, a.jsx)(p, { children: "".concat(t + 1, " / ").concat(r) }),
            (0, a.jsx)(m, {
              onClick: function () {
                return l(1);
              },
              disabled: t === r - 1,
              children: (0, a.jsx)(u.ZP, { size: "xsmall", icon: o.Tfp }),
            }),
          ],
        });
      }
      var g = l.Z.div(d()),
        m = l.Z.button(c()),
        p = l.Z.span(f());
    },
    4935: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return tB;
        },
      });
      var r,
        a,
        i,
        s,
        o = n(4337),
        l = n(35250),
        u = n(70079),
        d = n(34303),
        c = n(32689),
        f = n(77442),
        h = n(39324),
        g = n(40638),
        m = n(24760),
        p = n(70575),
        v = n(68555),
        x = n(1454),
        b = n(35290),
        y = n(3001),
        j = n(24274),
        w = n(38317),
        _ = n(36112),
        C = n(71209),
        M = n(70216),
        k = n(22830),
        T = n(37812),
        N = n(19841),
        P = n(75908),
        Z = n(82841),
        S = n(36218),
        I = n(64135),
        F = n(88038),
        E = n(87316),
        D = n(32983),
        L = n(21722),
        A = n(39889),
        R = n(33733),
        U = n(25260),
        B = n(44544),
        O = n(91530),
        q = n.n(O),
        z = n(19208),
        H = n.n(z),
        W = n(81292),
        V = n(32787),
        J = n(46110),
        G = n(59114),
        $ = n(48727),
        Q = n(35448),
        Y = n(11626),
        K = (0, W.ZP)(function () {
          return { isModalOpen: !1 };
        }),
        X = {
          setIsModalOpen: function (e) {
            K.setState({ isModalOpen: e });
          },
        };
      function ee(e) {
        var t = e.className,
          n = e.iconSize,
          r = (0, Y.sN)().currentWorkspace,
          a = (0, Y.sN)(Y.F_.isPersonalWorkspace),
          i = (0, V.kP)().session;
        return !r || (a && (null == i ? void 0 : i.user) !== void 0)
          ? (0, l.jsx)(J.Yt, {
              user: null == i ? void 0 : i.user,
              size: "redesign",
              rounded: !0,
            })
          : (0, l.jsx)("div", {
              className:
                "flex items-center justify-center rounded-full bg-blue-100 " +
                t,
              children: (0, l.jsx)(w.ZP, {
                icon: R.Z,
                size: void 0 === n ? "small" : n,
                className: "text-blue-400",
              }),
            });
      }
      function et(e) {
        var t,
          n,
          r = e.workspace,
          a = e.onResetThread,
          i = (0, V.kP)().session,
          s = (0, Y.sN)().currentWorkspace,
          o = (null == s ? void 0 : s.id) === r.id,
          d =
            ((t = (0, Q.NL)()),
            (n = (0, u.useContext)(D.QL).onEnableHistory),
            (0, u.useCallback)(
              (0, L._)(function () {
                return (0, A.Jh)(this, function (e) {
                  return t.invalidateQueries(), n(), a && a(), [2];
                });
              }),
              [n, a, t]
            )),
          c = (0, v.useRouter)(),
          f = (0, u.useCallback)(
            (0, L._)(function () {
              return (0, A.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (
                      ("workspace" === r.structure
                        ? (0, B.setCookie)(Y.Yl, r.id)
                        : (0, B.setCookie)(Y.Yl, ""),
                      Y.w_.setCurrentWorkspace(r),
                      !("/" !== c.asPath))
                    )
                      return [3, 2];
                    return [4, c.push("/")];
                  case 1:
                    e.sent(), (e.label = 2);
                  case 2:
                    return [4, d()];
                  case 3:
                    return e.sent(), X.setIsModalOpen(!1), [2];
                }
              });
            }),
            [r, c, d]
          ),
          h = (0, Y.Ix)(r),
          g = (0, Y.qH)(r),
          m = (0, l.jsx)("div", {
            className:
              "flex h-10 w-10 items-center justify-center rounded-full bg-blue-100",
            children: (0, l.jsx)(w.ZP, {
              icon: R.Z,
              size: "small",
              className: "text-blue-400",
            }),
          });
        if ("personal" === r.structure) {
          if (!(null == i ? void 0 : i.user)) return null;
          m = (0, l.jsx)("div", {
            className: "flex h-10 w-10 items-center justify-center",
            children: (0, l.jsx)(H(), {
              alt: "Profile",
              src: i.user.picture,
              width: 32,
              height: 32,
              className:
                "flex h-10 w-10 items-center justify-center rounded-full",
            }),
          });
        }
        return (0, l.jsxs)(o ? "div" : "button", {
          onClick: o ? q() : f,
          className: (0, N.Z)({
            "flex w-full items-center gap-2 rounded-lg  p-4 hover:bg-gray-50 focus:bg-gray-50 dark:hover:bg-gray-800 dark:focus:bg-gray-800":
              !0,
            "bg-gray-50 dark:bg-gray-800": o,
          }),
          children: [
            (0, l.jsxs)("div", {
              className: "flex w-full gap-4",
              children: [
                m,
                (0, l.jsxs)("div", {
                  className:
                    "flex w-full flex-1 flex-col items-start justify-start gap-2",
                  children: [
                    (0, l.jsx)("div", {
                      className: "inline align-top font-medium capitalize",
                      children: h,
                    }),
                    (0, l.jsx)("div", {
                      className: "text-sm text-gray-500",
                      children: g,
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: "flex h-full items-center p-1",
              children:
                o &&
                (0, l.jsx)("div", {
                  className: "",
                  children: (0, l.jsx)(w.ZP, { icon: U.Z, size: "medium" }),
                }),
            }),
          ],
        });
      }
      function en(e) {
        var t = e.data,
          n = e.onResetThread,
          r = t.map(function (e) {
            return (0, l.jsx)(et, { workspace: e, onResetThread: n }, e.id);
          });
        return (0, l.jsx)("div", {
          className: "flex w-full flex-col gap-2",
          children: r,
        });
      }
      function er(e) {
        var t = e.onResetThread,
          n = K().isModalOpen,
          r = (0, Y._O)(),
          a = r.data,
          i = r.isLoading,
          s = (0, P.Z)(),
          o = (0, u.useCallback)(function () {
            X.setIsModalOpen(!1);
          }, []);
        return i || 0 === a.length
          ? null
          : (0, l.jsx)($.Z, {
              onClose: o,
              closeButton: (0, l.jsx)(G.ZP.CloseButton, { onClose: o }),
              type: "success",
              isOpen: n,
              size: "normal",
              title: s.formatMessage(ea.workspaceSwitcherTitle),
              children: (0, l.jsx)("div", {
                className: "flex w-full items-center justify-between",
                children: (0, l.jsx)(en, { data: a, onResetThread: t }),
              }),
            });
      }
      var ea = (0, y.vU)({
          workspaceSwitcherTitle: {
            id: "workspaceSwitcher.title",
            defaultMessage: "Choose Account",
            description: "title for account switcher modal",
          },
        }),
        ei = n(66958),
        es = n(81949),
        eo = n(13451),
        el = n(56115),
        eu = n(32402),
        ed = n(19051),
        ec = n(870),
        ef = n(25345),
        eh = n(19265);
      function eg(e) {
        var t = e.accept,
          n = e.onFilePicked,
          r = e.loading,
          a = e.disabled,
          i = e.className,
          s = e.text,
          o = (0, u.useRef)(null),
          d = (0, u.useCallback)(function () {
            var e;
            null === (e = o.current) || void 0 === e || e.click();
          }, []),
          c = (0, u.useCallback)(
            function (e) {
              var t,
                r =
                  null === (t = e.target.files) || void 0 === t ? void 0 : t[0];
              r && (n(r), (e.target.value = ""));
            },
            [n]
          );
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(ei.z, {
              onClick: d,
              disabled: a || r,
              color: "none",
              className: i,
              children: (0, l.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  r
                    ? (0, l.jsx)(eh.Z, { className: "h-4 w-4" })
                    : (0, l.jsx)(w.ZP, { icon: x.OvN, size: "small" }),
                  s && (0, l.jsx)("span", { children: s }),
                ],
              }),
            }),
            (0, l.jsx)("input", {
              type: "file",
              accept: t,
              ref: o,
              className: "hidden",
              onChange: c,
            }),
          ],
        });
      }
      var em = n(97688),
        ep = n(57924),
        ev = n(24396),
        ex = (0, y.vU)({
          errorLoadingFiles: {
            id: "filesModal.errorLoadingFiles",
            defaultMessage: "Failed to load files",
            description: "Error message when loading files fails",
          },
        }),
        eb = [
          "application/pdf",
          "text/plain",
          "text/markdown",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          "text/csv",
        ],
        ey = (0, y.vU)({
          myFiles: {
            id: "filesModal.myFiles",
            defaultMessage: "My Files",
            description: "Title for the files modal",
          },
          noFilesFound: {
            id: "filesModal.noFilesFound",
            defaultMessage: "No files found.",
            description: "Message displayed when no files are found",
          },
          uploadFile: {
            id: "filesModal.uploadFile",
            defaultMessage: "Upload File",
            description: "Label for the upload file button",
          },
          fileDownloadFailed: {
            id: "filesModal.fileDownloadFailed",
            defaultMessage: "File download failed. Please try again.",
            description: "Error message when file download fails",
          },
          fileDeleteFailed: {
            id: "filesModal.fileDeleteFailed",
            defaultMessage: "File delete failed. Please try again.",
            description: "Error message when file delete fails",
          },
          fileUploadFailed: {
            id: "filesModal.fileUploadFailed",
            defaultMessage: "File upload failed. Please try again.",
            description: "Error message when file upload fails",
          },
          fileUploaded: {
            id: "filesModal.fileUploaded",
            defaultMessage: "Uploaded file",
            description: "Success message when file is uploaded",
          },
          fileDeleted: {
            id: "filesModal.fileDeleted",
            defaultMessage: "File deleted",
            description: "Success message when file is deleted",
          },
          allFilesDeleted: {
            id: "filesModal.allFilesDeleted",
            defaultMessage: "All files deleted",
            description: "Success message when all files are deleted",
          },
          allFilesDeleteFailed: {
            id: "filesModal.allFilesDeletedFailed",
            defaultMessage: "All files delete failed. Please try again.",
            description: "Error message when all files delete fails",
          },
          fileAlreadyExists: {
            id: "filesModal.fileAlreadyExists",
            defaultMessage:
              "A file with the same name already exists. Please delete the existing file before uploading.",
            description:
              "Warning message when a file with the same name already exists",
          },
          confirmDeleteAll: {
            id: "filesModal.confirmDeleteAll",
            defaultMessage: "Are you sure you want to delete all files?",
            description: "Confirmation message for deleting all files",
          },
          downloadAll: {
            id: "filesModal.downloadAll",
            defaultMessage: "Download All",
            description: "Label for the download all button",
          },
          deleteAll: {
            id: "filesModal.deleteAll",
            defaultMessage: "Delete All",
            description: "Label for the delete all button",
          },
          name: {
            id: "filesModal.name",
            defaultMessage: "Name",
            description: "Label for the name column",
          },
          date: {
            id: "filesModal.date",
            defaultMessage: "Date",
            description: "Label for the date column",
          },
          size: {
            id: "filesModal.size",
            defaultMessage: "Size",
            description: "Label for the size column",
          },
          successfullyEmbeddedFileTooltip: {
            id: "filesModal.successfullyEmbeddedFileTooltip",
            defaultMessage: "Successfully processed file for searching",
            description: "Tooltip for the successfully embedded file icon",
          },
          failedToEmbedFileTooltip: {
            id: "filesModal.failedToEmbedFileTooltip",
            defaultMessage:
              "Failed to process file for searching,\nplease try deleting and re-uploading",
            description: "Tooltip for the failed to embed file icon",
          },
          embeddingFileTooltip: {
            id: "filesModal.embeddingFileTooltip",
            defaultMessage: "Processing file for searching...",
            description: "Tooltip for the embedding file icon",
          },
        });
      function ej(e, t, n) {
        return ew.apply(this, arguments);
      }
      function ew() {
        return (ew = (0, L._)(function (e, t, n) {
          var r, a, i, s, o;
          return (0, A.Jh)(this, function (l) {
            switch (l.label) {
              case 0:
                return (
                  l.trys.push([0, 3, , 4]),
                  [4, j.ZP.getFileDownloadLink(t.id, e)]
                );
              case 1:
                if (!(r = l.sent()).download_url)
                  throw Error(
                    "File is not ready to download: " + JSON.stringify(r)
                  );
                return [
                  4,
                  fetch(r.download_url).then(function (e) {
                    return e.blob();
                  }),
                ];
              case 2:
                return (
                  (a = l.sent()),
                  (i = URL.createObjectURL(a)),
                  (s = window.open(i, "_blank")) &&
                    s.addEventListener("beforeunload", function () {
                      URL.revokeObjectURL(i);
                    }),
                  ((o = document.createElement("a")).href = i),
                  (o.download = t.name),
                  (o.style.display = "none"),
                  o.click(),
                  URL.revokeObjectURL(i),
                  [3, 4]
                );
              case 3:
                return (
                  l.sent(),
                  em.m.danger(n.formatMessage(ey.fileDownloadFailed)),
                  [3, 4]
                );
              case 4:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function e_() {
        return (e_ = (0, L._)(function (e, t, n, r) {
          var a;
          return (0, A.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                if (!n) return [2];
                (a = 0), (i.label = 1);
              case 1:
                if (!(a < e.length)) return [3, 4];
                return [
                  4,
                  Promise.all(
                    e.slice(a, a + t).map(function (e) {
                      return ej(n.accessToken, e, r);
                    })
                  ),
                ];
              case 2:
                i.sent(), (i.label = 3);
              case 3:
                return (a += t), [3, 1];
              case 4:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function eC(e) {
        var t = e.label,
          n = e.children;
        return (0, l.jsx)(ep.u, {
          side: "top",
          size: "xsmall",
          sideOffset: 4,
          label: t,
          children: n,
        });
      }
      function eM(e) {
        var t = e.file,
          n = e.refetch,
          r = e.handleFileDelete,
          a = e.handleFileDeleteFailed,
          s = e.session,
          o = e.downloadedFiles,
          d = e.setDownloadedFiles,
          c = (0, u.useMemo)(
            function () {
              return (0, el.Z)(new Date(t.ready_time), "MMM d, yyyy");
            },
            [t.ready_time]
          ),
          f = (0, u.useMemo)(
            function () {
              var e;
              return (e = t.size) < 1048576
                ? "".concat((e / 1024).toFixed(0), " KB")
                : "".concat((e / 1048576).toFixed(1), " MB");
            },
            [t.size]
          ),
          h = (0, P.Z)(),
          g = (0, u.useCallback)(
            (0, L._)(function () {
              return (0, A.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (!s) return [2];
                    return [4, ej(s.accessToken, t, h)];
                  case 1:
                    return e.sent(), d((0, es._)(o).concat([t.id])), [2];
                }
              });
            }),
            [s, t, h, o, d]
          ),
          m = (0, u.useCallback)(
            (0, L._)(function () {
              return (0, A.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (!s) return [2];
                    r(t), (e.label = 1);
                  case 1:
                    return (
                      e.trys.push([1, 4, , 5]),
                      [4, j.ZP.deleteFileFromFileService(t.id, s.accessToken)]
                    );
                  case 2:
                    return (
                      e.sent(),
                      em.m.success(h.formatMessage(ey.fileDeleted)),
                      [4, n()]
                    );
                  case 3:
                    return e.sent(), [3, 5];
                  case 4:
                    return (
                      e.sent(),
                      a(t),
                      em.m.danger(h.formatMessage(ey.fileDeleteFailed)),
                      [3, 5]
                    );
                  case 5:
                    return [2];
                }
              });
            }),
            [r, a, s, t, n, h]
          );
        return (0, l.jsxs)(ef.Z.Row, {
          disabled: t.state === i.Uploading,
          children: [
            (0, l.jsx)(ef.Z.Cell, {
              children: (0, l.jsxs)("div", {
                className: "flex w-full items-center space-x-2",
                children: [
                  t.retrieval_index_status === eu.Xf.Success
                    ? (0, l.jsx)(eC, {
                        label: h.formatMessage(
                          ey.successfullyEmbeddedFileTooltip
                        ),
                        children: (0, l.jsx)(w.ZP, {
                          icon: x._rq,
                          size: "xsmall",
                          className: "text-green-600",
                        }),
                      })
                    : t.retrieval_index_status === eu.Xf.Failed
                    ? (0, l.jsx)(eC, {
                        label: h.formatMessage(ey.failedToEmbedFileTooltip),
                        children: (0, l.jsx)(w.ZP, {
                          icon: x.$Rx,
                          size: "xsmall",
                          className: "text-red-500",
                        }),
                      })
                    : (0, l.jsx)(eC, {
                        label: h.formatMessage(ey.embeddingFileTooltip),
                        children: (0, l.jsx)(eh.Z, {
                          className: "text-gray-500",
                        }),
                      }),
                  (0, l.jsx)("button", {
                    className: (0, N.Z)(
                      o.includes(t.id) && "text-[#800080]",
                      "focus:outline-none"
                    ),
                    onClick: g,
                    children: (0, l.jsx)("span", { children: t.name }),
                  }),
                ],
              }),
            }),
            (0, l.jsx)(ef.Z.Cell, { children: t.state !== i.Uploading && c }),
            (0, l.jsx)(ef.Z.Cell, { children: t.state !== i.Uploading && f }),
            (0, l.jsx)(ef.Z.Cell, {
              textAlign: "right",
              children: (0, l.jsx)("div", {
                className: "flex justify-end space-x-2",
                children:
                  t.state !== i.Uploading &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("button", {
                        className: "text-gray-500 hover:text-gray-600",
                        onClick: g,
                        children: (0, l.jsx)(w.ZP, {
                          icon: x._hL,
                          size: "small",
                        }),
                      }),
                      (0, l.jsx)("button", {
                        className: "text-gray-500 hover:text-gray-600",
                        onClick: m,
                        children: (0, l.jsx)(w.ZP, {
                          icon: x.Ybf,
                          size: "small",
                        }),
                      }),
                    ],
                  }),
              }),
            }),
          ],
        });
      }
      function ek() {
        var e,
          t,
          n,
          r,
          a,
          s,
          o,
          d,
          f,
          g,
          m = (0, P.Z)(),
          p =
            ((t = (e = (0, V.kP)()).session),
            (n = e.loading),
            (r = (0, I.hz)()),
            (a = (0, P.Z)()),
            (0, ev.a)(
              ["files"],
              (0, L._)(function () {
                return (0, A.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        j.ZP.listFiles(t.accessToken).catch(function () {
                          return (
                            em.m.danger(a.formatMessage(ex.errorLoadingFiles)),
                            { files: [] }
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
              {
                enabled:
                  !n &&
                  (null == t ? void 0 : t.accessToken) != null &&
                  r.has("files_list_ui"),
              }
            )),
          v = p.data,
          b = p.isLoading,
          y = p.refetch,
          _ = (0, k._)((0, u.useState)([]), 2),
          M = _[0],
          T = _[1],
          N = (0, u.useRef)([]),
          Z = (0, ed.Z)(),
          S = (0, V.kP)().session,
          F = (0, u.useMemo)(
            function () {
              return null !== (g = null == v ? void 0 : v.files) && void 0 !== g
                ? g
                : [];
            },
            [v]
          ),
          E = (0, k._)((0, u.useState)([]), 2),
          D = E[0],
          R = E[1],
          U = (0, u.useCallback)(
            function () {
              c.vm.closeFilesModal(), M.length > 0 && y();
            },
            [y, M]
          ),
          B = (0, eo.D)({
            mutationFn: function (e) {
              return j.ZP.uploadFileUsingFileService(
                e,
                eu.Ei.MyFiles,
                S.accessToken
              );
            },
            onMutate:
              ((s = (0, L._)(function (e) {
                return (0, A.Jh)(this, function (t) {
                  return [2, e];
                });
              })),
              function (e) {
                return s.apply(this, arguments);
              }),
            onSuccess:
              ((o = (0, L._)(function (e) {
                return (0, A.Jh)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, y()];
                    case 1:
                      return (
                        t.sent(),
                        em.m.success(m.formatMessage(ey.fileUploaded)),
                        N.current.push(e.file_id),
                        [2]
                      );
                  }
                });
              })),
              function (e) {
                return o.apply(this, arguments);
              }),
            onError: function (e, t) {
              T(function (e) {
                return e.filter(function (e) {
                  return e.name !== t.name;
                });
              }),
                em.m.danger(m.formatMessage(ey.fileUploadFailed));
            },
          }),
          O = (0, u.useCallback)(
            ((d = (0, L._)(function (e) {
              var t;
              return (0, A.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (!S) return [2];
                    n.label = 1;
                  case 1:
                    return (
                      n.trys.push([1, 6, , 7]),
                      [4, j.ZP.getFileInfo(e, S.accessToken)]
                    );
                  case 2:
                    if (
                      !(
                        (t = n.sent()).retrieval_index_status ===
                          eu.Xf.Success ||
                        t.retrieval_index_status === eu.Xf.Failed
                      )
                    )
                      return [3, 4];
                    return (
                      (N.current = N.current.filter(function (t) {
                        return t !== e;
                      })),
                      [4, y()]
                    );
                  case 3:
                    return n.sent(), [3, 5];
                  case 4:
                    Z(function () {
                      return O(e);
                    }, 500),
                      (n.label = 5);
                  case 5:
                    return [3, 7];
                  case 6:
                    return (
                      n.sent(),
                      (N.current = N.current.filter(function (t) {
                        return t !== e;
                      })),
                      [3, 7]
                    );
                  case 7:
                    return [2];
                }
              });
            })),
            function (e) {
              return d.apply(this, arguments);
            }),
            [y, S, Z]
          );
        (0, u.useEffect)(
          function () {
            N.current.length > 0 && O(N.current[N.current.length - 1]);
          },
          [N, O]
        );
        var q = (0, u.useCallback)(
            ((f = (0, L._)(function (e) {
              var t;
              return (0, A.Jh)(this, function (n) {
                return F.filter(function (e) {
                  return e.use_case === eu.Ei.MyFiles;
                }).find(function (t) {
                  return t.name === e.name;
                })
                  ? (em.m.warning(m.formatMessage(ey.fileAlreadyExists)), [2])
                  : ((t = {
                      id: "",
                      name: e.name,
                      ready_time: new Date().toISOString(),
                      use_case: eu.Ei.MyFiles,
                      size: e.size,
                      state: i.Uploading,
                    }),
                    T(function (e) {
                      return (0, es._)(e).concat([t]);
                    }),
                    B.mutate(e),
                    [2]);
              });
            })),
            function (e) {
              return f.apply(this, arguments);
            }),
            [F, m, B]
          ),
          z = (0, u.useCallback)(
            (0, L._)(function () {
              var e;
              return (0, A.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (!S) return [2];
                    t.label = 1;
                  case 1:
                    return (
                      t.trys.push([1, 3, , 4]),
                      [
                        4,
                        (function (e, t, n, r) {
                          return e_.apply(this, arguments);
                        })(
                          (e = F.filter(function (e) {
                            return e.use_case === eu.Ei.MyFiles;
                          })),
                          30,
                          S,
                          m
                        ),
                      ]
                    );
                  case 2:
                    return (
                      t.sent(),
                      R(
                        (0, es._)(D).concat(
                          (0, es._)(
                            e.map(function (e) {
                              return e.id;
                            })
                          )
                        )
                      ),
                      [3, 4]
                    );
                  case 3:
                    return (
                      t.sent(),
                      em.m.danger(m.formatMessage(ey.fileDownloadFailed)),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            }),
            [S, F, m, D, R]
          ),
          H = (0, u.useCallback)(
            (0, L._)(function () {
              var e;
              return (0, A.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (
                      !window.confirm(m.formatMessage(ey.confirmDeleteAll)) ||
                      ((e = F.map(function (e) {
                        return (0, C._)((0, h._)({}, e), { state: i.Deleting });
                      })),
                      !S)
                    )
                      return [2];
                    T((0, es._)(M).concat((0, es._)(e))), (t.label = 1);
                  case 1:
                    return (
                      t.trys.push([1, 4, , 5]),
                      [
                        4,
                        Promise.all(
                          e
                            .filter(function (e) {
                              return e.use_case === eu.Ei.MyFiles;
                            })
                            .map(function (e) {
                              return j.ZP.deleteFileFromFileService(
                                e.id,
                                S.accessToken
                              );
                            })
                        ),
                      ]
                    );
                  case 2:
                    return (
                      t.sent(),
                      em.m.success(m.formatMessage(ey.allFilesDeleted)),
                      [4, y()]
                    );
                  case 3:
                    return t.sent(), [3, 5];
                  case 4:
                    return (
                      t.sent(),
                      T([]),
                      em.m.danger(m.formatMessage(ey.allFilesDeleteFailed)),
                      [3, 5]
                    );
                  case 5:
                    return [2];
                }
              });
            }),
            [F, M, S, m, y]
          ),
          W = (0, u.useCallback)(function (e, t) {
            return e.findIndex(function (e) {
              return e.name === t.name && e.state !== i.Uploading;
            });
          }, []),
          J = (0, u.useCallback)(function (e) {
            var t = (0, C._)((0, h._)({}, e), { state: i.Deleting });
            T(function (e) {
              return (0, es._)(e).concat([t]);
            });
          }, []),
          Q = (0, u.useCallback)(function (e) {
            T(function (t) {
              return t.filter(function (t) {
                return t.name !== e.name;
              });
            });
          }, []),
          Y = (0, u.useMemo)(
            function () {
              return (0, es._)(F)
                .concat((0, es._)(M))
                .filter(function (e, t, n) {
                  if (e.use_case !== eu.Ei.MyFiles) return !1;
                  e.retrieval_index_status === eu.Xf.Success ||
                    e.retrieval_index_status === eu.Xf.Failed ||
                    N.current.includes(e.id) ||
                    N.current.push(e.id);
                  var r = W(n, e);
                  return e.state === i.Uploading && -1 !== r
                    ? (T(function (t) {
                        return t.filter(function (t) {
                          return t.name !== e.name || t.state !== i.Uploading;
                        });
                      }),
                      !1)
                    : e.state === i.Deleting &&
                      -1 ===
                        n.findIndex(function (t) {
                          return t.name === e.name && t.state !== i.Deleting;
                        })
                    ? (T(function (t) {
                        return t.filter(function (t) {
                          return t.name !== e.name;
                        });
                      }),
                      !1)
                    : -1 ===
                      n.findIndex(function (t) {
                        return t.name === e.name && t.state === i.Deleting;
                      });
                })
                .sort(function (e, t) {
                  return (
                    new Date(t.ready_time).getTime() -
                    new Date(e.ready_time).getTime()
                  );
                });
            },
            [F, W, M]
          );
        return (0, l.jsxs)($.Z, {
          isOpen: !0,
          onClose: U,
          size: "custom",
          className: "max-w-5xl",
          type: "success",
          title: m.formatMessage(ey.myFiles),
          closeButton: (0, l.jsx)(G.ZP.CloseButton, { onClose: U }),
          children: [
            b
              ? (0, l.jsx)("div", {
                  className: "flex h-64 items-center justify-center",
                  children: (0, l.jsx)(eh.Z, { className: "text-gray-500" }),
                })
              : Y.length > 0
              ? (0, l.jsxs)(ef.Z.Root, {
                  className: "max-h-[28rem] w-full",
                  size: "compact",
                  children: [
                    (0, l.jsxs)(ef.Z.Header, {
                      children: [
                        (0, l.jsx)(ef.Z.HeaderCell, {
                          className: "w-8/12",
                          children: m.formatMessage(ey.name),
                        }),
                        (0, l.jsx)(ef.Z.HeaderCell, {
                          children: m.formatMessage(ey.date),
                        }),
                        (0, l.jsx)(ef.Z.HeaderCell, {
                          children: m.formatMessage(ey.size),
                        }),
                        (0, l.jsx)(ef.Z.HeaderCell, {
                          textAlign: "right",
                          children: (0, l.jsxs)(ec.Z.Root, {
                            children: [
                              (0, l.jsx)(ec.Z.Trigger, {
                                children: (0, l.jsx)(w.ZP, { icon: x.K9M }),
                              }),
                              (0, l.jsx)(ec.Z.Portal, {
                                children: (0, l.jsxs)(ec.Z.Content, {
                                  children: [
                                    (0, l.jsxs)(ec.Z.Item, {
                                      onClick: z,
                                      className: "flex gap-2",
                                      children: [
                                        (0, l.jsx)(w.ZP, {
                                          icon: x._hL,
                                          size: "small",
                                        }),
                                        (0, l.jsx)("span", {
                                          children: m.formatMessage(
                                            ey.downloadAll
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)(ec.Z.Item, {
                                      onClick: H,
                                      className: "flex gap-2",
                                      children: [
                                        (0, l.jsx)(w.ZP, {
                                          icon: x.Ybf,
                                          size: "small",
                                        }),
                                        (0, l.jsx)("span", {
                                          children: m.formatMessage(
                                            ey.deleteAll
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)(ef.Z.Body, {
                      children: Y.map(function (e, t) {
                        return (0,
                        l.jsx)(eM, { file: e, refetch: y, handleFileDelete: J, handleFileDeleteFailed: Q, session: S, downloadedFiles: D, setDownloadedFiles: R }, t);
                      }),
                    }),
                  ],
                })
              : (0, l.jsx)("p", { children: m.formatMessage(ey.noFilesFound) }),
            (0, l.jsx)(eg, {
              accept: eb.join(","),
              onFilePicked: q,
              loading: B.isLoading,
              disabled: B.isLoading,
              className:
                "mt-4 flex items-center space-x-2 rounded bg-green-600 px-4 py-2 text-white",
              text: m.formatMessage(ey.uploadFile),
            }),
          ],
        });
      }
      ((r = i || (i = {})).Uploading = "uploading"), (r.Deleting = "deleting");
      var eT = n(181),
        eN = n(86546),
        eP = n(13002),
        eZ = n(21437),
        eS = n(86433),
        eI = n(25422),
        eF = n(10604),
        eE = n(61119),
        eD = n(44925),
        eL = n(68789),
        eA = ["sharedConversations"],
        eR = (0, y.vU)({
          name: {
            id: "sharedConversationModal.name",
            defaultMessage: "Name",
            description: "Table column header",
          },
          dateShared: {
            id: "sharedConversationModal.dateShared",
            defaultMessage: "Date shared",
            description: "Table column header",
          },
          loading: {
            id: "sharedConversationModal.loading",
            defaultMessage: "Loading...",
            description: "Loading message",
          },
          somethingWentWrong: {
            id: "sharedConversationModal.somethingWentWrong",
            defaultMessage: "Something went wrong...",
            description: "Error message",
          },
          retry: {
            id: "sharedConversationModal.retry",
            defaultMessage: "Retry",
            description: "Retry button text",
          },
          noSharedConversations: {
            id: "sharedConversationModal.noSharedConversations",
            defaultMessage: "You have no shared links.",
            description: "No shared links message",
          },
          title: {
            id: "sharedConversationModal.title",
            defaultMessage: "Shared Links",
            description: "Shared links modal title",
          },
          goToOriginConversation: {
            id: "sharedConversationModal.goToOriginConversation",
            defaultMessage: "View source chat",
            description: "Label for conversation icon",
          },
          deleteSharedLink: {
            id: "sharedConversationModal.deleteSharedLink",
            defaultMessage: "Delete shared link",
            description: "Label for delete shared link icon",
          },
          deleteSharedLinkFailed: {
            id: "sharedConversationModal.deleteSharedLinkFailed",
            defaultMessage: "Deleting shared link failed",
            description: "Toaster message when deleting share link fails",
          },
          deleteAllSharedLinks: {
            id: "sharedConversationModal.deleteSharedAllConversations",
            defaultMessage: "Delete all shared links",
            description: "Menu item for deleting all shared links",
          },
          deleteAllSharedLinksConfirm: {
            id: "sharedConversationModal.deleteSharedAllConversationsConfirm",
            defaultMessage:
              "Are you sure you want to delete all your shared links?",
            description: "Confirmation message for deleting share links",
          },
          deleteAllSharedLinksFailed: {
            id: "sharedConversationModal.deleteSharedAllConversationsFailed",
            defaultMessage: "Deleting shared links failed",
            description: "Toaster message when deleting all share links fails",
          },
        });
      function eU() {
        var e = (0, Q.NL)(),
          t = (0, P.Z)(),
          n = (0, eo.D)({
            mutationFn: function () {
              return j.ZP.deleteAllSharedConversations();
            },
            onSettled: function () {
              e.invalidateQueries(eA);
            },
            onError: function () {
              em.m.danger(t.formatMessage(eR.deleteAllSharedLinksFailed));
            },
          }).mutate;
        return (0, l.jsxs)(eL.fC, {
          children: [
            (0, l.jsx)(eL.xz, {
              asChild: !0,
              children: (0, l.jsx)("button", {
                className:
                  "text-gray-500 hover:text-gray-600 radix-state-open:text-gray-600 dark:hover:text-gray-400 dark:radix-state-open:text-gray-400",
                children: (0, l.jsx)(w.ZP, { icon: x.K9M }),
              }),
            }),
            (0, l.jsx)(eL.Uv, {
              children: (0, l.jsx)(eL.VY, {
                className:
                  "min-w-[8rem] rounded-md bg-white py-1 shadow-lg dark:bg-gray-800",
                side: "bottom",
                sideOffset: 4,
                children: (0, l.jsx)(eL.ck, {
                  onClick: function () {
                    window.confirm(
                      t.formatMessage(eR.deleteAllSharedLinksConfirm)
                    ) && n();
                  },
                  className:
                    "cursor-pointer select-none px-2 py-1 text-red-500 radix-highlighted:bg-gray-50 dark:radix-highlighted:bg-gray-700",
                  children: (0, l.jsx)(
                    b.Z,
                    (0, h._)({}, eR.deleteAllSharedLinks)
                  ),
                }),
              }),
            }),
          ],
        });
      }
      function eB() {
        return j.ZP.getSharedConversations();
      }
      function eO(e) {
        var t,
          n = e.sharedConversation,
          r = (0, P.Z)(),
          a = (0, Q.NL)(),
          i = (0, eo.D)({
            mutationFn:
              ((t = (0, L._)(function (e) {
                var t;
                return (0, A.Jh)(this, function (n) {
                  return (
                    (t = e.sharedConversationId),
                    [2, j.ZP.deleteShareLink({ share_id: t })]
                  );
                });
              })),
              function (e) {
                return t.apply(this, arguments);
              }),
            onSettled: function () {
              a.invalidateQueries(eA);
            },
            onError: function () {
              em.m.danger(r.formatMessage(eR.deleteSharedLinkFailed));
            },
          }),
          s = i.mutate,
          o = i.isLoading;
        return (0, l.jsxs)(ef.Z.Row, {
          disabled: o,
          children: [
            (0, l.jsx)(ef.Z.Cell, {
              children: (0, l.jsxs)("a", {
                href: "/share/".concat(n.id),
                target: "_blank",
                rel: "noreferrer",
                className:
                  "inline-flex items-center gap-2 align-top text-blue-500 dark:text-blue-400",
                children: [
                  (0, l.jsx)(w.ZP, { icon: x.XKb, className: "flex-shrink-0" }),
                  n.title,
                ],
              }),
            }),
            (0, l.jsx)(ef.Z.Cell, {
              children:
                null != n.create_time
                  ? (0, l.jsx)(y.Ji, {
                      value: n.create_time,
                      month: "long",
                      year: "numeric",
                      day: "numeric",
                    })
                  : null,
            }),
            (0, l.jsx)(ef.Z.Cell, {
              children: (0, l.jsxs)(ef.Z.Actions, {
                children: [
                  (0, l.jsx)(ep.u, {
                    label: r.formatMessage(eR.goToOriginConversation),
                    sideOffset: 4,
                    side: "top",
                    children: (0, l.jsx)("a", {
                      href: "/c/".concat(n.conversation_id),
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": r.formatMessage(eR.goToOriginConversation),
                      className:
                        "cursor-pointer text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                      children: (0, l.jsx)(w.ZP, { icon: x.IC0 }),
                    }),
                  }),
                  (0, l.jsx)(ep.u, {
                    label: r.formatMessage(eR.deleteSharedLink),
                    sideOffset: 4,
                    side: "top",
                    children: (0, l.jsx)("button", {
                      onClick: function () {
                        s({ sharedConversationId: n.id });
                      },
                      "aria-label": r.formatMessage(eR.deleteSharedLink),
                      className:
                        "text-gray-500 hover:text-gray-600 dark:hover:text-gray-400",
                      children: (0, l.jsx)(w.ZP, { icon: x.Ybf }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function eq(e) {
        var t,
          n = e.onClose,
          r = (0, ev.a)({
            queryKey: eA,
            queryFn: eB,
            refetchOnMount: "always",
          }),
          a = r.data,
          i = r.isLoading,
          s = r.isError,
          o = r.refetch,
          u = (0, P.Z)();
        return (
          (t = i
            ? (0, l.jsx)("div", {
                className: "pb-8 text-gray-400 dark:text-gray-600",
                children: (0, l.jsx)(b.Z, (0, h._)({}, eR.loading)),
              })
            : s
            ? (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("div", {
                    className: "mb-4 text-red-500",
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, eR.somethingWentWrong)
                    ),
                  }),
                  (0, l.jsx)("div", {
                    children: (0, l.jsx)(ei.z, {
                      color: "neutral",
                      onClick: function () {
                        o();
                      },
                      children: (0, l.jsx)(b.Z, (0, h._)({}, eR.retry)),
                    }),
                  }),
                ],
              })
            : 0 === a.total
            ? (0, l.jsx)("div", {
                className: "pb-8 text-gray-600 dark:text-gray-400",
                children: (0, l.jsx)(
                  b.Z,
                  (0, h._)({}, eR.noSharedConversations)
                ),
              })
            : (0, l.jsxs)(ef.Z.Root, {
                className: "max-h-[28rem]",
                size: "compact",
                children: [
                  (0, l.jsxs)(ef.Z.Header, {
                    children: [
                      (0, l.jsx)(ef.Z.HeaderCell, {
                        children: (0, l.jsx)(b.Z, (0, h._)({}, eR.name)),
                      }),
                      (0, l.jsx)(ef.Z.HeaderCell, {
                        children: (0, l.jsx)(b.Z, (0, h._)({}, eR.dateShared)),
                      }),
                      (0, l.jsx)(ef.Z.HeaderCell, {
                        textAlign: "right",
                        children: (0, l.jsx)(eU, {}),
                      }),
                    ],
                  }),
                  (0, l.jsx)(ef.Z.Body, {
                    children: a.items.map(function (e) {
                      return (0, l.jsx)(eO, { sharedConversation: e }, e.id);
                    }),
                  }),
                ],
              })),
          (0, l.jsx)($.Z, {
            isOpen: !0,
            onClose: n,
            size: "custom",
            className: "max-w-5xl",
            type: "success",
            title: u.formatMessage(eR.title),
            closeButton: (0, l.jsx)(G.ZP.CloseButton, { onClose: n }),
            children: t,
          })
        );
      }
      var ez = n(16681);
      function eH(e) {
        var t = e.onChange,
          n = e.enabled,
          r = e.label,
          a = e.disabled,
          i = (0, u.useCallback)(
            function () {
              t(!n);
            },
            [n, t]
          );
        return (0, l.jsx)(ez.fC, {
          checked: n,
          disabled: a,
          onCheckedChange: i,
          "aria-label": r,
          className: (0, N.Z)(
            a && "cursor-not-allowed opacity-30",
            "bg-gray-200 radix-state-checked:bg-green-600",
            "relative h-[25px] w-[42px] cursor-pointer rounded-full"
          ),
          children: (0, l.jsx)(ez.bU, {
            className: (0, N.Z)(
              "block h-[21px] w-[21px] rounded-full",
              "translate-x-0.5 transition-transform duration-100 will-change-transform radix-state-checked:translate-x-[19px]",
              "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
            ),
          }),
        });
      }
      function eW() {
        var e = (0, o._)(["block text-sm font-medium mb-1"]);
        return (
          (eW = function () {
            return e;
          }),
          e
        );
      }
      function eV(e) {
        var t,
          n,
          r = e.onClose,
          a = e.onToggleHistoryDisabled,
          i = e.onDeleteHistory,
          o = (0, P.Z)(),
          d = (0, _.LC)(),
          c = (0, f.w$)(),
          g = (0, k._)((0, u.useState)(!1), 2),
          m = g[0],
          p = g[1],
          v = (0, k._)((0, u.useState)(!1), 2),
          x = v[0],
          y = v[1],
          j = (0, k._)((0, u.useState)(!1), 2),
          w = j[0],
          M = j[1],
          T = (0, k._)((0, u.useState)(!1), 2),
          Z = T[0],
          S = T[1],
          E = (0, k._)((0, u.useState)(s.General), 2),
          L = E[0],
          A = E[1],
          R = (0, u.useContext)(D.QL),
          U = R.historyDisabled,
          B = R.toggleHistoryDisabled,
          O = (0, eE.OS)(function (e) {
            return e.isOpen;
          }),
          q = (0, I.hz)(),
          z = (0, Y.sN)(Y.F_.isBusinessWorkspace),
          H = !z && q.has(F.RJ),
          W = (0, V.kP)().session,
          J = (0, eZ.Fl)(),
          Q = J.isBetaFeaturesUiEnabled,
          K = J.isPluginsAvailable,
          X = J.isBrowsingAvailable,
          ee = J.isCodeInterpreterAvailable,
          et = (0, u.useCallback)(function () {
            p(!1);
          }, []),
          en = (0, u.useCallback)(function () {
            y(!1);
          }, []),
          er = (0, u.useCallback)(function () {
            M(!1);
          }, []),
          ea = (0, u.useCallback)(function () {
            p(!0);
          }, []),
          ei = (0, u.useCallback)(function () {
            y(!0);
          }, []),
          es = (0, u.useCallback)(function () {
            M(!0);
          }, []),
          eo = (0, u.useCallback)(
            function () {
              null == a || a(), B();
            },
            [a, B]
          ),
          el = (0, eS.S)(),
          eu = el.setupMfa,
          ed = el.isUsernamePassword,
          ec = el.removeMfa;
        return m
          ? (0, l.jsx)(eK, { onClose: et })
          : x
          ? (0, l.jsx)(eY, { onClose: en, onDeleteHistory: i })
          : w
          ? (0, l.jsx)(e2, { onClose: er })
          : Z
          ? (0, l.jsx)(eq, {
              onClose: function () {
                S(!1);
              },
            })
          : (0, l.jsx)($.Z, {
              isOpen: !0,
              onClose: r,
              size: "custom",
              className: "md:max-w-[680px]",
              type: "success",
              title: o.formatMessage(e4.settings),
              closeButton: (0, l.jsx)(G.ZP.CloseButton, { onClose: r }),
              children: (0, l.jsxs)(eT.fC, {
                className: "flex flex-col gap-6 md:flex-row",
                defaultValue: L,
                orientation: c ? "vertical" : void 0,
                onValueChange: function (e) {
                  A(e);
                },
                children: [
                  (0, l.jsxs)(eT.aV, {
                    className: (0, N.Z)(
                      "-ml-[8px] flex min-w-[180px] flex-shrink-0",
                      c
                        ? "flex-col"
                        : "flex-row rounded-lg bg-gray-100 p-1 dark:bg-gray-800/30"
                    ),
                    children: [
                      (0, l.jsx)(eX, {
                        value: s.General,
                        icon: eP.oq2,
                        label: (0, l.jsx)(b.Z, (0, h._)({}, e4.generalTab)),
                      }),
                      Q &&
                        (X || K || ee) &&
                        (0, l.jsx)(eX, {
                          value: s.BetaFeatures,
                          icon: eP.rTN,
                          label: (0, l.jsx)(b.Z, (0, h._)({}, e4.betaTab)),
                        }),
                      (0, l.jsx)(eX, {
                        value: s.DataControls,
                        icon: eP.tQn,
                        label: (0, l.jsx)(
                          b.Z,
                          (0, h._)({}, e4.dataControlsTab)
                        ),
                      }),
                    ],
                  }),
                  (0, l.jsxs)(e0, {
                    value: s.General,
                    children: [
                      (0, l.jsx)(e1, { children: (0, l.jsx)(eQ, {}) }),
                      q.has("tools3_dev") &&
                        (0, l.jsx)(e1, {
                          children: (0, l.jsx)(eG, {
                            label: o.formatMessage(e4.openPluginDevtools),
                            enabled: O,
                            onChange: eE.Ds.setIsOpen,
                          }),
                        }),
                      (0, l.jsx)(e1, {
                        children: (0, l.jsx)(e$, {
                          color: "danger",
                          disabled: !d,
                          label: o.formatMessage(e4.clearChatLabel),
                          buttonLabel: o.formatMessage(e4.clearChatButton),
                          onClick: ei,
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)(e0, {
                    value: s.BetaFeatures,
                    children: (0, l.jsx)(eJ, {}),
                  }),
                  (0, l.jsxs)(e0, {
                    value: s.DataControls,
                    children: [
                      !z &&
                        (0, l.jsx)(e1, {
                          children: (0, l.jsx)(eG, {
                            label: o.formatMessage(e4.chatHistoryToggleLabel),
                            enabled: !U,
                            onChange: eo,
                            description: (0, l.jsx)(
                              b.Z,
                              (0, C._)(
                                (0, h._)({}, e4.chatHistoryDescription),
                                {
                                  values: {
                                    link: function (e) {
                                      return (0, l.jsx)("a", {
                                        href: "https://help.openai.com/en/articles/7730893 ",
                                        target: "_blank",
                                        className: "underline",
                                        rel: "noreferrer",
                                        children: e,
                                      });
                                    },
                                  },
                                }
                              )
                            ),
                          }),
                        }),
                      H &&
                        (0, l.jsx)(e1, {
                          children: (0, l.jsx)(e$, {
                            label: o.formatMessage(e4.sharedConversations),
                            buttonLabel: o.formatMessage(
                              e4.sharedConversationsButton
                            ),
                            onClick: function () {
                              S(!0);
                            },
                          }),
                        }),
                      (0, l.jsx)(e1, {
                        children: (0, l.jsx)(e$, {
                          label: o.formatMessage(e4.exportData),
                          buttonLabel: o.formatMessage(e4.exportButton),
                          onClick: ea,
                        }),
                      }),
                      (0, l.jsx)(e1, {
                        children: (0, l.jsx)(e$, {
                          label: o.formatMessage(e4.deleteAccount),
                          buttonLabel: o.formatMessage(e4.deleteAccountButton),
                          color: "danger",
                          onClick: es,
                        }),
                      }),
                      q.has(F.i) &&
                        !(null == W
                          ? void 0
                          : null === (t = W.user) || void 0 === t
                          ? void 0
                          : t.mfa) &&
                        ed &&
                        (0, l.jsx)(e1, {
                          children: (0, l.jsx)(e$, {
                            label: o.formatMessage(e4.enable2fa),
                            buttonLabel: o.formatMessage(e4.enable),
                            onClick: eu,
                          }),
                        }),
                      (null == W
                        ? void 0
                        : null === (n = W.user) || void 0 === n
                        ? void 0
                        : n.mfa) &&
                        ed &&
                        (0, l.jsx)(e1, {
                          children: (0, l.jsx)(e$, {
                            label: o.formatMessage(e4.disable2fa),
                            buttonLabel: o.formatMessage(e4.disable),
                            onClick: ec,
                            color: "danger",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            });
      }
      function eJ() {
        var e,
          t = (0, P.Z)(),
          n = (0, V.kP)().session,
          r = (0, eZ.N2)(),
          a = (0, eZ.Fl)(),
          i = a.isBrowsingAvailable,
          s = a.isBrowsingEnabled,
          o = a.isPluginsAvailable,
          u = a.isPluginsEnabled,
          d = a.isCodeInterpreterAvailable,
          c = a.isCodeInterpreterEnabled,
          f = (0, eo.D)({
            mutationFn: function (t) {
              var r = t.feature,
                a = t.enabled;
              return j.ZP.setUserSettingsBetaFeature(
                null !== (e = null == n ? void 0 : n.accessToken) &&
                  void 0 !== e
                  ? e
                  : "",
                r,
                a
              );
            },
            onSettled: r,
            onError: function () {
              em.m.danger(t.formatMessage(e4.betaSettingsUpdateFailed));
            },
          }),
          g = f.isLoading,
          m = f.variables,
          p = f.mutate,
          v = g && (null == m ? void 0 : m.feature) === eZ.tr.BROWSING,
          x = g && (null == m ? void 0 : m.feature) === eZ.tr.CODE_INTERPRETER,
          y = g && (null == m ? void 0 : m.feature) === eZ.tr.PLUGINS;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(e1, {
              children: (0, l.jsx)("p", {
                children: (0, l.jsx)(b.Z, (0, h._)({}, e4.betaIntro)),
              }),
            }),
            i &&
              (0, l.jsx)(e1, {
                children: (0, l.jsx)(eG, {
                  label: t.formatMessage(e4.betaBrowsingToggleLabel),
                  disabled: v,
                  enabled: v ? (null == m ? void 0 : m.enabled) : s,
                  onChange: function (e) {
                    p({ feature: eZ.tr.BROWSING, enabled: e });
                  },
                  description: (0, l.jsx)(
                    b.Z,
                    (0, h._)({}, e4.betaBrowsingToggleDescription)
                  ),
                }),
              }),
            o &&
              (0, l.jsx)(e1, {
                children: (0, l.jsx)(eG, {
                  label: t.formatMessage(e4.betaPluginToggleLabel),
                  disabled: y,
                  enabled: y ? (null == m ? void 0 : m.enabled) : u,
                  onChange: function (e) {
                    p({ feature: eZ.tr.PLUGINS, enabled: e });
                  },
                  description: (0, l.jsx)(
                    b.Z,
                    (0, h._)({}, e4.betaPluginToggleDescription)
                  ),
                }),
              }),
            d &&
              (0, l.jsx)(e1, {
                children: (0, l.jsx)(eG, {
                  label: t.formatMessage(e4.betaCodeInterpreterToggleLabel),
                  disabled: x,
                  enabled: x ? (null == m ? void 0 : m.enabled) : c,
                  onChange: function (e) {
                    p({ feature: eZ.tr.CODE_INTERPRETER, enabled: e });
                  },
                  description: (0, l.jsx)(
                    b.Z,
                    (0, h._)({}, e4.betaCodeInterpreterToggleDescription)
                  ),
                }),
              }),
          ],
        });
      }
      function eG(e) {
        var t = e.label,
          n = e.disabled,
          r = e.enabled,
          a = e.onChange,
          i = e.description;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, l.jsx)("div", { children: t }),
                (0, l.jsx)(eH, {
                  disabled: n,
                  enabled: r,
                  onChange: a,
                  label: t,
                }),
              ],
            }),
            null != i &&
              (0, l.jsx)("div", {
                className: "mt-2 text-xs text-gray-500 dark:text-gray-600",
                children: i,
              }),
          ],
        });
      }
      function e$(e) {
        var t = e.color,
          n = e.disabled,
          r = e.label,
          a = e.buttonLabel,
          i = e.onClick;
        return (0, l.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            (0, l.jsx)("div", { children: r }),
            (0, l.jsx)(ei.z, {
              color: void 0 === t ? "neutral" : t,
              disabled: !!n,
              onClick: i,
              children: a,
            }),
          ],
        });
      }
      function eQ() {
        var e = (0, eN.F)(),
          t = e.theme,
          n = e.setTheme;
        return (0, l.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            (0, l.jsx)("div", {
              children: (0, l.jsx)(b.Z, (0, h._)({}, e4.theme)),
            }),
            (0, l.jsxs)(eI.Z.Root, {
              value: t,
              onValueChange: function (e) {
                return n(e);
              },
              children: [
                (0, l.jsxs)(eI.Z.Trigger, {
                  children: [
                    (0, l.jsx)(eI.Z.Value, {}),
                    (0, l.jsx)(eI.Z.Icon, {}),
                  ],
                }),
                (0, l.jsx)(eI.Z.Portal, {
                  children: (0, l.jsxs)(eI.Z.Content, {
                    children: [
                      (0, l.jsx)(eI.Z.Item, {
                        value: "system",
                        children: (0, l.jsx)(b.Z, (0, h._)({}, e4.system)),
                      }),
                      (0, l.jsx)(eI.Z.Item, {
                        value: "dark",
                        children: (0, l.jsx)(b.Z, (0, h._)({}, e4.dark)),
                      }),
                      (0, l.jsx)(eI.Z.Item, {
                        value: "light",
                        children: (0, l.jsx)(b.Z, (0, h._)({}, e4.light)),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function eY(e) {
        var t = e.onClose,
          n = e.onDeleteHistory,
          r = (0, P.Z)();
        return (0, l.jsx)($.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: r.formatMessage(e4.deleteHistoryModalTitle),
          primaryButton: (0, l.jsx)(G.ZP.Button, {
            title: r.formatMessage(e4.deleteHistoryModalConfirm),
            color: "primary",
            onClick: function () {
              n(), t();
            },
          }),
          secondaryButton: (0, l.jsx)(G.ZP.Button, {
            title: r.formatMessage(e4.deleteHistoryModalCancel),
            color: "neutral",
            onClick: t,
          }),
        });
      }
      function eK(e) {
        var t = e.onClose,
          n = (0, P.Z)(),
          r = (0, V.kP)().session,
          a = null == r ? void 0 : r.accessToken,
          i = (0, u.useCallback)(
            function () {
              try {
                j.ZP.submitDataExport(a).then(function () {
                  em.m.success(n.formatMessage(e4.dataExportRequested)), t();
                });
              } catch (e) {
                em.m.warning(n.formatMessage(e4.dataExportFailed), {
                  hasCloseButton: !0,
                });
              }
            },
            [a, n, t]
          );
        return (0, l.jsx)($.Z, {
          isOpen: !0,
          onClose: t,
          type: "success",
          title: n.formatMessage(e4.dataExportModalTitle),
          primaryButton: (0, l.jsx)(G.ZP.Button, {
            title: n.formatMessage(e4.dataExportModalConfirm),
            color: "primary",
            onClick: i,
          }),
          secondaryButton: (0, l.jsx)(G.ZP.Button, {
            title: n.formatMessage(e4.dataExportModalCancel),
            color: "neutral",
            onClick: t,
          }),
          children: (0, l.jsxs)("div", {
            className: "text-sm",
            children: [
              (0, l.jsxs)("ul", {
                className: "my-3 flex list-disc flex-col gap-1 pl-3",
                children: [
                  (0, l.jsx)("li", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, e4.dataExportModalDescription1)
                    ),
                  }),
                  (0, l.jsx)("li", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, e4.dataExportModalDescription2)
                    ),
                  }),
                  (0, l.jsx)("li", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, e4.dataExportModalDescription3)
                    ),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                children: (0, l.jsx)(
                  b.Z,
                  (0, h._)({}, e4.dataExportModalDescription4)
                ),
              }),
            ],
          }),
        });
      }
      function eX(e) {
        var t = e.value,
          n = e.icon,
          r = e.label,
          a = (0, f.w$)();
        return (0, l.jsxs)(eT.xz, {
          className: (0, N.Z)(
            "group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm radix-state-active:bg-gray-800 radix-state-active:text-white dark:text-gray-500 dark:radix-state-active:text-white",
            { "flex-1 items-center justify-center": !a }
          ),
          value: t,
          children: [
            (0, l.jsx)(w.ZP, {
              icon: n,
              strokeWidth: 0,
              className:
                "h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500",
            }),
            (0, l.jsx)("div", { children: r }),
          ],
        });
      }
      function e0(e) {
        var t = e.value,
          n = e.children;
        return (0, l.jsx)(eT.VY, {
          className: "w-full md:min-h-[300px]",
          value: t,
          children: (0, l.jsx)("div", {
            className:
              "flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300",
            children: n,
          }),
        });
      }
      function e1(e) {
        var t = e.children;
        return (0, l.jsx)("div", {
          className:
            "border-b pb-3 last-of-type:border-b-0 dark:border-gray-700",
          children: t,
        });
      }
      function e2(e) {
        var t,
          n = e.onClose,
          r = (0, P.Z)(),
          a = (0, V.kP)().session,
          i = null == a ? void 0 : a.accessToken,
          s =
            null == a
              ? void 0
              : null === (t = a.user) || void 0 === t
              ? void 0
              : t.email,
          o = (0, k._)((0, u.useState)(""), 2),
          d = o[0],
          c = o[1],
          f = (0, k._)((0, u.useState)(""), 2),
          g = f[0],
          m = f[1],
          p = (0, u.useCallback)(
            function () {
              var e,
                t =
                  null == a
                    ? void 0
                    : null === (e = a.user) || void 0 === e
                    ? void 0
                    : e.iat;
              return void 0 === t || Date.now() / 1e3 - t < 600;
            },
            [a]
          ),
          v = (0, u.useCallback)(
            function () {
              try {
                p()
                  ? j.ZP.deactivateAccount(i).then(function () {
                      (0, V.w7)();
                    })
                  : em.m.warning(
                      r.formatMessage(e4.deleteAccountSessionTooOld),
                      { hasCloseButton: !0 }
                    );
              } catch (e) {
                em.m.warning(r.formatMessage(e4.deleteAccountFailed), {
                  hasCloseButton: !0,
                });
              }
            },
            [i, r, p]
          ),
          y = (0, u.useCallback)(function () {
            (0, V.w7)();
          }, []),
          _ = "DELETE" === g && (void 0 === s || d === s),
          C = (0, k._)(
            (0, u.useState)(function () {
              return p();
            }),
            1
          )[0],
          M = (0, I.e2)();
        return (0, l.jsx)($.Z, {
          isOpen: !0,
          onClose: n,
          type: "success",
          title: r.formatMessage(e4.deleteAccountTitle),
          closeButton: (0, l.jsx)(G.ZP.CloseButton, { onClose: n }),
          children: (0, l.jsxs)("div", {
            className: "text-sm",
            children: [
              (0, l.jsxs)("ul", {
                className: "mb-6 mt-4 flex list-disc flex-col gap-1 pl-3",
                children: [
                  (0, l.jsx)("li", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, e4.deleteAccountWarning)
                    ),
                  }),
                  (0, l.jsx)("li", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, e4.reuseEmailPhoneWarning)
                    ),
                  }),
                  (0, l.jsx)("li", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, e4.dataRemovalWarning)
                    ),
                  }),
                  (0, l.jsx)("li", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, e4.apiAccessDeletionWarning)
                    ),
                  }),
                  (null == M ? void 0 : M.purchase_origin_platform) ===
                    eD._4.MOBILE_IOS &&
                    (0, l.jsx)("li", {
                      children: (0, l.jsx)(
                        b.Z,
                        (0, h._)({}, e4.iapSubscriptionWarning)
                      ),
                    }),
                ],
              }),
              C
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      void 0 !== s
                        ? (0, l.jsxs)("div", {
                            className: "mb-4",
                            children: [
                              (0, l.jsx)(e3, {
                                children: (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e4.typeEmailLabel)
                                ),
                              }),
                              (0, l.jsx)(eF.Z, {
                                value: d,
                                placeholder: s,
                                name: "email",
                                onChange: function (e) {
                                  c(e.target.value);
                                },
                              }),
                            ],
                          })
                        : null,
                      (0, l.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          (0, l.jsx)(e3, {
                            children: (0, l.jsx)(
                              b.Z,
                              (0, h._)({}, e4.typeDeleteInputLabel)
                            ),
                          }),
                          (0, l.jsx)(eF.Z, {
                            value: g,
                            onChange: function (e) {
                              m(e.target.value);
                            },
                            name: "delete",
                            className: "mb-4",
                          }),
                        ],
                      }),
                      (0, l.jsx)(ei.z, {
                        color: _ ? "danger" : "disabled",
                        onClick: v,
                        disabled: !_,
                        className: "w-full",
                        children: _
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)(w.ZP, { icon: x.BJv }),
                                " ",
                                (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e4.deleteAccountButtonLabel)
                                ),
                              ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)(w.ZP, { icon: x.UIZ }),
                                " ",
                                (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e4.lockedButtonLabel)
                                ),
                              ],
                            }),
                      }),
                    ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("p", {
                        className: "pb-4 text-xs text-gray-500",
                        children: (0, l.jsx)(
                          b.Z,
                          (0, h._)({}, e4.recentLoginMessage)
                        ),
                      }),
                      (0, l.jsx)(ei.z, {
                        color: "primary",
                        onClick: y,
                        className: "w-full",
                        children: (0, l.jsx)(
                          b.Z,
                          (0, h._)({}, e4.refreshLoginButtonLabel)
                        ),
                      }),
                    ],
                  }),
            ],
          }),
        });
      }
      ((a = s || (s = {})).General = "General"),
        (a.BetaFeatures = "BetaFeatures"),
        (a.DataControls = "DataControls");
      var e3 = d.Z.label(eW()),
        e4 = (0, y.vU)({
          settings: {
            id: "settingsModal.settings",
            defaultMessage: "Settings",
            description: "Title for the settings modal",
          },
          theme: {
            id: "settingsModal.theme",
            defaultMessage: "Theme",
            description: "Label for the theme setting",
          },
          system: {
            id: "settingsModal.system",
            defaultMessage: "System",
            description: "Option for the system theme",
          },
          dark: {
            id: "settingsModal.dark",
            defaultMessage: "Dark",
            description: "Option for the dark theme",
          },
          light: {
            id: "settingsModal.light",
            defaultMessage: "Light",
            description: "Option for the light theme",
          },
          sharedConversations: {
            id: "settingsModal.sharedConversations",
            defaultMessage: "Shared links",
            description: "Label for the shared chat/link button",
          },
          sharedConversationsButton: {
            id: "settingsModal.sharedConversationsButton",
            defaultMessage: "Manage",
            description: "Manage shared links/conversations button",
          },
          exportData: {
            id: "settingsModal.exportData",
            defaultMessage: "Export data",
            description: "Label for the export data button",
          },
          exportButton: {
            id: "settingsModal.exportButton",
            defaultMessage: "Export",
            description: "Export data button",
          },
          deleteAccount: {
            id: "settingsModal.deleteAccount",
            defaultMessage: "Delete account",
            description: "Label for the delete account button",
          },
          deleteAccountButton: {
            id: "settingsModal.deleteButton",
            defaultMessage: "Delete",
            description: "Delete account button",
          },
          openPluginDevtools: {
            id: "settingsModal.openPluginDevtools",
            defaultMessage: "Open plugin devtools",
            description: "Label for the open plugin devtools setting",
          },
          enable2fa: {
            id: "settingsModal.enable2fa",
            defaultMessage: "Enable two-factor authentication",
            description: "Label for the enable 2FA button",
          },
          enable: {
            id: "settingsModal.enable",
            defaultMessage: "Enable",
            description: "Enable 2FA button",
          },
          disable: {
            id: "settingsModal.disable",
            defaultMessage: "Disable",
            description: "Disable 2FA button",
          },
          disable2fa: {
            id: "settingsModal.disable2fa",
            defaultMessage: "Disable two factor authentication",
            description: "Label for the mfa remove button.",
          },
          chatHistoryDescription: {
            id: "settingsModal.chatHistoryDescription",
            defaultMessage:
              "Save new chats on this browser to your history and allow them to be used to improve our models. Unsaved chats will be deleted from our systems within 30 days. This setting does not sync across browsers or devices. <link>Learn more</link>",
            description: "Description for the chat history setting",
          },
          deleteHistoryModalTitle: {
            id: "settingsModal.deleteHistoryModalTitle",
            defaultMessage: "Clear your conversation history - are you sure?",
            description: "Title for the delete history modal",
          },
          deleteHistoryModalConfirm: {
            id: "settingsModal.deleteHistoryModalConfirm",
            defaultMessage: "Confirm deletion",
            description: "Confirm button for the delete history modal",
          },
          deleteHistoryModalCancel: {
            id: "settingsModal.deleteHistoryModalCancel",
            defaultMessage: "Cancel",
            description: "Cancel button for the delete history modal",
          },
          dataExportRequested: {
            id: "settingsModal.dataExportRequested",
            defaultMessage:
              "Successfully exported data. You should receive an email shortly with your data.",
            description: "Message shown when a data export request is received",
          },
          dataExportFailed: {
            id: "settingsModal.dataExportFailed",
            defaultMessage:
              "We were unable to process your export at this time. Please try again later.",
            description: "Message shown when a data export request fails",
          },
          dataExportModalTitle: {
            id: "settingsModal.dataExportModalTitle",
            defaultMessage: "Request data export - are you sure?",
            description: "Title for the data export modal",
          },
          dataExportModalConfirm: {
            id: "settingsModal.dataExportModalConfirm",
            defaultMessage: "Confirm export",
            description: "Confirm button for the data export modal",
          },
          dataExportModalCancel: {
            id: "settingsModal.dataExportModalCancel",
            defaultMessage: "Cancel",
            description: "Cancel button for the data export modal",
          },
          dataExportModalDescription1: {
            id: "settingsModal.dataExportModalDescription1",
            defaultMessage:
              "Your account details and conversations will be included in the export.",
            description: "Description for the data export modal",
          },
          dataExportModalDescription2: {
            id: "settingsModal.dataExportModalDescription2",
            defaultMessage:
              "The data will be sent to your registered email in a downloadable file.",
            description: "Description for the data export modal",
          },
          dataExportModalDescription3: {
            id: "settingsModal.dataExportModalDescription3",
            defaultMessage:
              "Processing may take some time. You'll be notified when it's ready.",
            description: "Description for the data export modal",
          },
          dataExportModalDescription4: {
            id: "settingsModal.dataExportModalDescription4",
            defaultMessage: 'To proceed, click "Confirm export" below.',
            description: "Description for the data export modal",
          },
          deleteAccountSessionTooOld: {
            id: "settingsModal.deleteAccountSessionTooOld",
            defaultMessage:
              "Your login session is too old. Please log in again before deleting your account.",
            description:
              "Message shown when the user's login session is too old to delete their account.",
          },
          deleteAccountFailed: {
            id: "settingsModal.deleteAccountFailed",
            defaultMessage: "Failed to delete account. Please try again later.",
            description:
              "Message shown when there's an error deleting the user's account.",
          },
          deleteAccountTitle: {
            id: "settingsModal.deleteAccountTitle",
            defaultMessage: "Delete account - are you sure?",
            description: "Title for the delete account confirmation modal.",
          },
          deleteAccountWarning: {
            id: "settingsModal.deleteAccountWarning",
            defaultMessage:
              "Deleting your account is permanent and cannot be undone.",
            description:
              "Warning message about account deletion being permanent.",
          },
          reuseEmailPhoneWarning: {
            id: "settingsModal.reuseEmailPhoneWarning",
            defaultMessage:
              "For security reasons, you cannot reuse the same email or phone number for a new account.",
            description:
              "Warning message about not being able to reuse email or phone number for a new account.",
          },
          dataRemovalWarning: {
            id: "settingsModal.dataRemovalWarning",
            defaultMessage:
              "All your data, including profile, conversations, and API usage, will be removed.",
            description:
              "Warning message about data removal after account deletion.",
          },
          apiAccessDeletionWarning: {
            id: "settingsModal.apiAccessDeletionWarning",
            defaultMessage:
              "If you've been using ChatGPT with the API, this access will also be deleted.",
            description: "Warning message about API access being deleted.",
          },
          iapSubscriptionWarning: {
            id: "settingsModal.iapSubscriptionWarning",
            defaultMessage:
              "You will need to cancel your in-app purchase subscription in the Apple App Store. We cannot cancel your subscription for you.",
            description:
              "Warning message about cancelling in-app subscriptions.",
          },
          typeEmailLabel: {
            id: "settingsModal.typeEmailLabel",
            defaultMessage: "Please type your account email.",
            description:
              "Label for email input field when deleting an account.",
          },
          typeDeleteInputLabel: {
            id: "settingsModal.typeDeleteInputLabel",
            defaultMessage:
              'To proceed, type "DELETE" in the input field below.',
            description:
              "Label for DELETE input field when deleting an account.",
          },
          lockedButtonLabel: {
            id: "settingsModal.lockedButtonLabel",
            defaultMessage: "Locked",
            description:
              "Label for the locked button when deleting an account.",
          },
          deleteAccountButtonLabel: {
            id: "settingsModal.deleteAccountButtonLabel",
            defaultMessage: "Permanently delete my account",
            description: "Label for the button to confirm account deletion.",
          },
          recentLoginMessage: {
            id: "settingsModal.recentLoginMessage",
            defaultMessage:
              "You may only delete your account if you have logged in within the last 10 minutes. Please log in again, then return here to continue.",
            description:
              "Message shown when the user needs to log in again to delete their account.",
          },
          refreshLoginButtonLabel: {
            id: "settingsModal.refreshLoginButtonLabel",
            defaultMessage: "Refresh login",
            description: "Label for the button to refresh login.",
          },
          chatHistoryToggleLabel: {
            id: "settingsModal.chatHistoryToggleLabel",
            defaultMessage: "Chat history & training",
            description: "Label for the chat history toggle.",
          },
          dataControlsTab: {
            id: "settingsModal.dataControls",
            defaultMessage: "Data controls",
            description: "Label for the data controls tab",
          },
          betaIntro: {
            id: "settingsModal.betaIntro",
            defaultMessage:
              "As a Plus user, enjoy early access to experimental new features, which may change during development.",
            description: "Introduction for the beta features tab",
          },
          betaSettingsUpdateFailed: {
            id: "settingsModal.betaSettingsUpdateFailed",
            defaultMessage: "Failed to update your beta setting",
            description:
              "Message shown when there's an error updating beta settings",
          },
          betaPluginToggleLabel: {
            id: "settingsModal.betaPluginToggleLabel",
            defaultMessage: "Plugins",
            description: "Label for the Plugins beta toggle.",
          },
          betaPluginToggleDescription: {
            id: "settingsModal.betaPluginToggleDescription",
            defaultMessage:
              "Try a version of ChatGPT that knows when and how to use third-party plugins that you enable.",
            description: "Description for the Plugins beta toggle.",
          },
          betaBrowsingToggleLabel: {
            id: "settingsModal.betaBrowsingToggleLabel",
            defaultMessage: "Browse with Bing",
            description: "Label for the Browse with Bing beta toggle.",
          },
          betaBrowsingToggleDescription: {
            id: "settingsModal.betaBrowsingToggleDescription",
            defaultMessage:
              "Try a version of ChatGPT that knows when and how to browse the internet to answer questions about recent topics and events.",
            description: "Description for the Browsing beta toggle.",
          },
          betaCodeInterpreterToggleLabel: {
            id: "settingsModal.betaCodeInterpreterToggleLabel",
            defaultMessage: "Code interpreter",
            description: "Label for the Code interpreter beta toggle.",
          },
          betaCodeInterpreterToggleDescription: {
            id: "settingsModal.betaCodeInterpreterToggleDescription",
            defaultMessage:
              "Try a version of ChatGPT that knows how to write and execute python code, and can work with file uploads. Try asking for help with data analysis, image conversions, or editing a code file. Note: files will not persist beyond a single session.",
            description: "Description for the Code interpreter beta toggle.",
          },
          generalTab: {
            id: "settingsModal.generalTab",
            defaultMessage: "General",
            description: "Label for the general tab",
          },
          betaTab: {
            id: "settingsModal.betaTab",
            defaultMessage: "Beta features",
            description: "Label for the Beta Features tab",
          },
          clearChatLabel: {
            id: "settingsModal.clearChatLabel",
            defaultMessage: "Clear all chats",
            description: "Label for the clear chat button",
          },
          clearChatButton: {
            id: "settingsModal.clearChatButton",
            defaultMessage: "Clear",
            description: "Clear chat button",
          },
        }),
        e5 = n(24148),
        e7 = n(56060),
        e8 = n(75861),
        e9 = (0, y.vU)({
          tipsHeader: {
            id: "userContextModal.tipsHeader",
            defaultMessage: "Thought starters",
            description: "header for chat preferences tips",
          },
          aboutUserTip1: {
            id: "userContextModal.aboutUserTip1",
            defaultMessage: "Where are you based?",
            description: "tips for chat preferences about you",
          },
          aboutUserTip2: {
            id: "userContextModal.aboutUserTip2",
            defaultMessage: "What do you do for work?",
            description: "tips for chat preferences about you",
          },
          aboutUserTip3: {
            id: "userContextModal.aboutUserTip3",
            defaultMessage: "What are your hobbies and interests?",
            description: "tips for chat preferences about you",
          },
          aboutUserTip4: {
            id: "userContextModal.aboutUserTip4",
            defaultMessage: "What subjects can you talk about for hours?",
            description: "tips for chat preferences about you",
          },
          aboutUserTip5: {
            id: "userContextModal.aboutUserTip5",
            defaultMessage: "What are some goals you have?",
            description: "tips for chat preferences about you",
          },
          modelTip1: {
            id: "userContextModal.modelTip1",
            defaultMessage: "How formal or casual should ChatGPT be?",
            description: "tips for chat preferences about model",
          },
          modelTip2: {
            id: "userContextModal.modelTip2",
            defaultMessage: "How long or short should responses generally be?",
            description: "tips for chat preferences about model",
          },
          modelTip3: {
            id: "userContextModal.modelTip3",
            defaultMessage: "How do you want to be addressed?",
            description: "tips for chat preferences about model",
          },
          modelTip4: {
            id: "userContextModal.modelTip4",
            defaultMessage:
              "Should ChatGPT have opinions on topics or remain neutral?",
            description: "tips for chat preferences about model",
          },
          save: {
            id: "userContextModal.save",
            defaultMessage: "Save",
            description: "save button for my profile modal",
          },
          cancel: {
            id: "userContextModal.cancel",
            defaultMessage: "Cancel",
            description: "Cancel button for chat preferences modal",
          },
          ok: {
            id: "userContextModal.ok",
            defaultMessage: "OK",
            description: "OK button for chat preferences modal",
          },
          aboutYouHelpText: {
            id: "userContextModal.aboutYouHelpText",
            defaultMessage:
              "What would you like ChatGPT to know about you to provide better responses?",
            description: "help text for about you section of chat preferences",
          },
          modelHelpText: {
            id: "userContextModal.modelHelpText",
            defaultMessage: "How would you like ChatGPT to respond?",
            description: "help text for about you section of chat preferences",
          },
          profileTitle: {
            id: "userContextModal.title",
            defaultMessage: "Chat preferences",
            description: "title for chat preferences modal",
          },
          messageLimitError: {
            id: "userContextModal.messageLimitError",
            defaultMessage:
              "Please limit your responses to {limit} characters or less.",
            description: "error message for chat preferences modal",
          },
          showTips: {
            id: "userContextModal.showTips",
            defaultMessage: "Show tips",
            description: "show tips button for chat preferences modal",
          },
          hideTips: {
            id: "userContextModal.hideTips",
            defaultMessage: "Hide tips",
            description: "hide tips button for chat preferences modal",
          },
          confirmCloseTitle: {
            id: "userContextModal.confirmCloseTitle",
            defaultMessage: "You have unsaved changes.",
            description: "title for confirm close modal",
          },
          confirmCloseBody: {
            id: "userContextModal.confirmCloseBody",
            defaultMessage:
              "Are you sure you want to exit? Any changes you made will be permanently lost.",
            description: "confirm close modal",
          },
          confirmCloseCancel: {
            id: "userContextModal.confirmCloseCancel",
            defaultMessage: "Back",
            description: "cancel button for confirm close modal",
          },
          confirmCloseOk: {
            id: "userContextModal.confirmCloseOk",
            defaultMessage: "Exit",
            description: "ok button for confirm close modal",
          },
        }),
        e6 = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return ["userContext", e];
        },
        te = { aboutUserMessage: void 0, aboutModelMessage: void 0 };
      function tt() {
        var e,
          t,
          n,
          r,
          a,
          i,
          s,
          o,
          d,
          f,
          g,
          m,
          p = (0, P.Z)(),
          v = (0, V.kP)().loading,
          x = (0, c.tN)(function (e) {
            return e.activeModals.has(c.B.UserContext);
          }),
          y =
            ((e = (0, I.hz)()),
            (t = (0, V.kP)().session),
            (0, ev.a)(
              e6(null == t ? void 0 : t.accessToken),
              function () {
                return j.ZP.getUserSystemMessage(
                  (null == t ? void 0 : t.accessToken) || ""
                ).catch(function () {
                  em.m.danger("Failed to get your chat preferences");
                });
              },
              {
                enabled: !!(
                  x &&
                  !v &&
                  (null == t ? void 0 : t.accessToken) &&
                  e.has("system_message2")
                ),
                select: function (e) {
                  var t, n;
                  return {
                    aboutUserMessage:
                      null !==
                        (t = null == e ? void 0 : e.about_user_message) &&
                      void 0 !== t
                        ? t
                        : "",
                    aboutModelMessage:
                      null !==
                        (n = null == e ? void 0 : e.about_model_message) &&
                      void 0 !== n
                        ? n
                        : "",
                  };
                },
              }
            )),
          w = y.isLoading,
          _ = y.data,
          C = null != _ ? _ : {},
          M = C.aboutUserMessage,
          T = void 0 === M ? "" : M,
          N = C.aboutModelMessage,
          Z = void 0 === N ? "" : N,
          S = (0, k._)((0, u.useState)(te), 2),
          F = S[0],
          E = S[1],
          D = (0, k._)((0, u.useState)(null), 2),
          R = D[0],
          U = D[1],
          B = (0, u.useCallback)(function () {
            c.vm.closeModal(c.B.UserContext), E(te), U(null);
          }, []),
          O =
            ((r = (n = {
              onSuccess: function () {
                B();
              },
              onError: function (e) {
                var t, n, r, a;
                return (
                  (null === (t = e.response) || void 0 === t
                    ? void 0
                    : t.reason) === "content_policy" &&
                  (null === (n = e.response) || void 0 === n ? void 0 : n.field)
                    ? U(
                        null === (r = e.response) || void 0 === r
                          ? void 0
                          : r.field
                      )
                    : em.m.danger(
                        null !== (a = e.message) && void 0 !== a
                          ? a
                          : "Failed to update chat preferences."
                      ),
                  e
                );
              },
            }).onSuccess),
            (a = n.onError),
            (i = (0, V.kP)().session),
            (s = (0, V.kP)().session),
            (o = (0, Q.NL)()),
            (0, eo.D)({
              mutationFn: function (e) {
                var t = e.userContext;
                return j.ZP.createOrUpdateUserSystemMessage(
                  (null == i ? void 0 : i.accessToken) || "",
                  t
                );
              },
              onSettled: function () {
                o.invalidateQueries({
                  queryKey: e6(null == s ? void 0 : s.accessToken),
                });
              },
              onSuccess: r,
              onError: a,
            })),
          q = O.isLoading,
          z = O.mutate,
          H = (0, k._)((0, u.useState)(!1), 2),
          W = H[0],
          J = H[1],
          Y = ta(T) || ta(Z),
          K =
            (void 0 !== F.aboutModelMessage && F.aboutModelMessage !== Z) ||
            (void 0 !== F.aboutUserMessage && F.aboutUserMessage !== T),
          X = (0, u.useCallback)(
            function () {
              K ? J(!0) : B();
            },
            [B, K]
          ),
          ee = (0, u.useCallback)(
            (0, L._)(function () {
              var e, t;
              return (0, A.Jh)(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (q) return [3, 2];
                    return (
                      U(null),
                      [
                        4,
                        z({
                          userContext: {
                            aboutUserMessage:
                              null !== (e = F.aboutUserMessage) && void 0 !== e
                                ? e
                                : "",
                            aboutModelMessage:
                              null !== (t = F.aboutModelMessage) && void 0 !== t
                                ? t
                                : "",
                          },
                        }),
                      ]
                    );
                  case 1:
                    n.sent(), (n.label = 2);
                  case 2:
                    return [2];
                }
              });
            }),
            [q, F, z]
          ),
          et = (0, u.useCallback)(
            function () {
              if (Y) {
                em.m.danger(
                  p.formatMessage(e9.messageLimitError, { limit: tr }),
                  { duration: 4, hasCloseButton: !0 }
                );
                return;
              }
              ee();
            },
            [p, Y, ee]
          );
        if (x && W) {
          var en = function () {
            J(!1);
          };
          return (0, l.jsx)(
            $.Z,
            {
              isOpen: !0,
              onClose: en,
              type: "success",
              title: p.formatMessage(e9.confirmCloseTitle),
              primaryButton: (0, l.jsx)(G.ZP.Button, {
                title: p.formatMessage(e9.confirmCloseOk),
                color: "danger",
                onClick: function () {
                  B(), en();
                },
              }),
              secondaryButton: (0, l.jsx)(G.ZP.Button, {
                title: p.formatMessage(e9.confirmCloseCancel),
                color: "neutral",
                onClick: en,
              }),
              children: (0, l.jsx)("div", {
                className: "text-sm",
                children: (0, l.jsx)(b.Z, (0, h._)({}, e9.confirmCloseBody)),
              }),
            },
            "confirm-close"
          );
        }
        return (0, l.jsx)(
          $.Z,
          {
            isOpen: x,
            onClose: X,
            type: "success",
            size: "custom",
            className: "max-w-lg xl:max-w-xl",
            title: p.formatMessage(e9.profileTitle),
            closeButton: (0, l.jsx)(G.ZP.CloseButton, { onClose: X }),
            secondaryButton: (0, l.jsxs)("div", {
              className: "flex flex-grow items-center justify-between gap-3",
              children: [
                R
                  ? (0, l.jsx)("div", {
                      className: "text-xs text-orange-400",
                      children: "Your input violates our content guidelines.",
                    })
                  : (0, l.jsx)("div", {}),
                (0, l.jsx)(G.ZP.Button, {
                  onClick: X,
                  children: (0, l.jsx)(b.Z, (0, h._)({}, e9.cancel)),
                }),
              ],
            }),
            primaryButton: (0, l.jsx)(G.ZP.Button, {
              loading: q,
              onClick: et,
              color: "primary",
              visuallyDisabled: Y,
              disabled: !K,
              children: (0, l.jsx)(b.Z, (0, h._)({}, e9.save)),
            }),
            children:
              v || w
                ? (0, l.jsx)("div", {
                    className: "flex h-14 items-center justify-center",
                    children: (0, l.jsx)(eh.Z, {}),
                  })
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("p", {
                        className: "text-muted pb-3 pt-2 text-sm text-gray-600",
                        children: (0, l.jsx)(
                          b.Z,
                          (0, h._)({}, e9.aboutYouHelpText)
                        ),
                      }),
                      (0, l.jsx)(ti, {
                        className: "mb-3",
                        onSubmit: et,
                        tip: (0, l.jsx)(tn, {
                          children: (0, l.jsxs)("ul", {
                            className: "list-disc pl-5",
                            children: [
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e9.aboutUserTip1)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e9.aboutUserTip2)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e9.aboutUserTip3)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e9.aboutUserTip4)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e9.aboutUserTip5)
                                ),
                              }),
                            ],
                          }),
                        }),
                        hasError: "about_user_message" === R,
                        value:
                          null !== (d = F.aboutUserMessage) && void 0 !== d
                            ? d
                            : T,
                        onChange: function (e) {
                          return E(function (t) {
                            return {
                              aboutModelMessage:
                                null !== (f = t.aboutModelMessage) &&
                                void 0 !== f
                                  ? f
                                  : Z,
                              aboutUserMessage: e.target.value,
                            };
                          });
                        },
                      }),
                      (0, l.jsx)("p", {
                        className: "text-muted py-3 text-sm text-gray-600",
                        children: (0, l.jsx)(
                          b.Z,
                          (0, h._)({}, e9.modelHelpText)
                        ),
                      }),
                      (0, l.jsx)(ti, {
                        onSubmit: et,
                        tip: (0, l.jsx)(tn, {
                          children: (0, l.jsxs)("ul", {
                            className: "list-disc pl-5",
                            children: [
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e9.modelTip1)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e9.modelTip2)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e9.modelTip3)
                                ),
                              }),
                              (0, l.jsx)("li", {
                                children: (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, e9.modelTip4)
                                ),
                              }),
                            ],
                          }),
                        }),
                        hasError: "about_model_message" === R,
                        value:
                          null !== (g = F.aboutModelMessage) && void 0 !== g
                            ? g
                            : Z,
                        onChange: function (e) {
                          return E(function (t) {
                            return {
                              aboutUserMessage:
                                null !== (m = t.aboutUserMessage) &&
                                void 0 !== m
                                  ? m
                                  : T,
                              aboutModelMessage: e.target.value,
                            };
                          });
                        },
                      }),
                    ],
                  }),
          },
          "user-context"
        );
      }
      var tn = function (e) {
          var t = e.children;
          return (0, l.jsx)("div", {
            className: "whitespace-pre-line",
            children: t,
          });
        },
        tr = 1500,
        ta = function (e) {
          return e.length > tr;
        },
        ti = function (e) {
          var t = e.onChange,
            n = e.onSubmit,
            r = e.placeholder,
            a = e.value,
            i = e.tip,
            s = e.hasError,
            o = e.className,
            d = (0, P.Z)(),
            c = (0, u.useRef)(null),
            g = !(0, f.x_)(),
            m = (0, k._)((0, u.useState)(!1), 2),
            v = m[0],
            y = m[1],
            j = (0, k._)((0, u.useState)(g), 2),
            _ = j[0],
            C = j[1],
            M = ta(a);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)($.Z, {
                isOpen: g && !_,
                type: "success",
                size: "custom",
                className: "max-w-lg",
                title: d.formatMessage(e9.tipsHeader),
                closeButton: (0, l.jsx)(G.ZP.CloseButton, {
                  onClose: function () {
                    C(!0);
                  },
                }),
                onClose: function () {
                  C(!0);
                },
                primaryButton: (0, l.jsx)(G.ZP.Button, {
                  color: "primary",
                  onClick: function () {
                    return C(!0);
                  },
                  children: (0, l.jsx)(b.Z, (0, h._)({}, e9.ok)),
                }),
                children: i,
              }),
              (0, l.jsxs)(e7.fC, {
                open: !g && v && !_,
                children: [
                  (0, l.jsxs)("div", {
                    className: o,
                    children: [
                      (0, l.jsx)(e7.xz, {
                        asChild: !0,
                        children: (0, l.jsx)("textarea", {
                          ref: c,
                          className: (0, N.Z)(
                            "w-full	resize-none rounded p-4 placeholder:text-gray-300 dark:bg-gray-800",
                            {
                              "border-orange-400 focus:border-orange-400": s,
                              "border-red-500 focus:border-red-500": M && !s,
                              "border-gray-100 focus:border-brand-green":
                                !M && !s,
                            }
                          ),
                          placeholder: r,
                          onKeyDown: function (e) {
                            "Enter" !== e.key ||
                              !e.metaKey ||
                              e.shiftKey ||
                              e.nativeEvent.isComposing ||
                              (e.preventDefault(), n());
                          },
                          rows: 6,
                          value: a,
                          onChange: t,
                          onBlur: function () {
                            y(!1);
                          },
                          onFocus: function () {
                            y(!0);
                          },
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: (0, N.Z)(
                          "flex items-center justify-between px-1 text-xs",
                          M ? "text-red-600" : "text-gray-400"
                        ),
                        children: [
                          (0, l.jsxs)("div", { children: [a.length, "/", tr] }),
                          (0, l.jsx)("button", {
                            className: (0, N.Z)(
                              "flex items-center gap-1",
                              v ? "text-gray-400" : "text-gray-200"
                            ),
                            onClick: function () {
                              var e;
                              null === (e = c.current) ||
                                void 0 === e ||
                                e.focus(),
                                C(!_);
                            },
                            tabIndex: -1,
                            children: (0, l.jsx)(e8.M, {
                              initial: !1,
                              children:
                                v &&
                                (0, l.jsx)(
                                  p.E.div,
                                  {
                                    className: "flex items-center gap-1",
                                    initial: { opacity: 0 },
                                    animate: {
                                      opacity: 1,
                                      transition: {
                                        duration: 0.2,
                                        ease: "easeIn",
                                      },
                                    },
                                    exit: {
                                      opacity: 0,
                                      transition: {
                                        duration: 0.2,
                                        ease: "easeIn",
                                      },
                                    },
                                    children: _
                                      ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                            (0, l.jsx)(
                                              b.Z,
                                              (0, h._)({}, e9.showTips)
                                            ),
                                            (0, l.jsx)(w.ZP, {
                                              size: "xsmall",
                                              icon: x.rDJ,
                                            }),
                                          ],
                                        })
                                      : (0, l.jsxs)(l.Fragment, {
                                          children: [
                                            (0, l.jsx)(
                                              b.Z,
                                              (0, h._)({}, e9.hideTips)
                                            ),
                                            (0, l.jsx)(w.ZP, {
                                              size: "xsmall",
                                              icon: x.rzC,
                                            }),
                                          ],
                                        }),
                                  },
                                  "show-hide"
                                ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)(e7.h_, {
                    children: (0, l.jsx)(e7.VY, {
                      side: "right",
                      align: "start",
                      sideOffset: 12,
                      className:
                        "relative max-w-[220px] animate-slideLeftAndFade select-none rounded-xl border-gray-100 bg-white p-4 text-sm text-gray-600 shadow-[0px_4px_14px_rgba(0,0,0,0.06)] dark:bg-gray-900 dark:text-white xl:max-w-xs",
                      onOpenAutoFocus: function (e) {
                        e.preventDefault();
                      },
                      onCloseAutoFocus: function (e) {
                        e.preventDefault();
                      },
                      children: (0, l.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [
                          (0, l.jsx)("strong", {
                            children: (0, l.jsx)(
                              b.Z,
                              (0, h._)({}, e9.tipsHeader)
                            ),
                          }),
                          i,
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ts = new Set(["/admin"]),
        to = n(94860),
        tl = n(9849),
        tu = n(70788),
        td = n(85023);
      function tc(e) {
        var t = e.children;
        return (0, l.jsx)(g.u, {
          as: u.Fragment,
          enter: "transition ease-out duration-200",
          enterFrom: "opacity-0 translate-y-1",
          enterTo: "opacity-100 translate-y-0",
          leave: "transition ease-in duration-150",
          leaveFrom: "opacity-100 translate-y-0",
          leaveTo: "opacity-0 translate-y-1",
          children: t,
        });
      }
      function tf(e) {
        var t = e.onDeleteHistory,
          n = e.isConfirmingDeleteHistory,
          r = (0, Z.WS)(),
          a = (0, I.nR)(),
          i = (0, I.hz)(),
          s = (0, Y._O)().data,
          o = i.has("business_seats") && s.length > 1,
          d = (0, u.useCallback)(
            function () {
              r(S.s6.clickSidebarAccountPortalMenuItem),
                c.vm.openModal(c.B.AccountPortal);
            },
            [r]
          ),
          f = (0, eZ.Fl)().isPluginsAvailable;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            o && (0, l.jsx)(to.R, {}),
            (0, l.jsx)(to.DM, {
              onDeleteHistory: t,
              isConfirmingDeleteHistory: n,
            }),
            !0 === a &&
              (0, l.jsxs)(to.ZP, {
                onClick: d,
                children: [
                  (0, l.jsx)(w.ZP, { icon: x.fzv }),
                  (0, l.jsx)(b.Z, (0, h._)({}, th.myPlan)),
                ],
              }),
            i.has("system_message2") &&
              (0, l.jsxs)(to.ZP, {
                onClick: function () {
                  return c.vm.openModal(c.B.UserContext);
                },
                children: [
                  (0, l.jsx)(w.ZP, { icon: x.yK7 }),
                  (0, l.jsx)(b.Z, (0, h._)({}, th.chatPreferences)),
                ],
              }),
            i.has("files_list_ui") &&
              f &&
              (0, l.jsxs)(to.ZP, {
                onClick: function () {
                  return c.vm.openFilesModal();
                },
                children: [
                  (0, l.jsx)(w.ZP, { icon: x.NOg }),
                  (0, l.jsx)(b.Z, (0, h._)({}, th.myFiles)),
                ],
              }),
          ],
        });
      }
      var th = (0, y.vU)({
          myPlan: {
            id: "popoverNavigation.myPlan",
            defaultMessage: "My plan",
            description: "My plan menu item",
          },
          chatPreferences: {
            id: "popoverNavigation.chatPreferences",
            defaultMessage: "Chat Preferences",
            description: "Chat preferences menu item",
          },
          myFiles: {
            id: "popoverNavigation.myFiles",
            defaultMessage: "My files",
            description: "Files menu item",
          },
        }),
        tg = n(57101),
        tm = n(16578),
        tp = n.n(tm);
      function tv(e) {
        var t = e.onDeleteHistory,
          n = e.isConfirmingDeleteHistory,
          r = (0, I.hz)(),
          a = (0, Y._O)().data,
          i = (0, Y.sN)(Y.F_.workspaceId),
          s = r.has("business_seats") && a.length > 1;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(tx, {
              href: "/admin?workspaceId=".concat(i),
              children: [
                (0, l.jsx)(w.ZP, { icon: tg.Z }),
                (0, l.jsx)(b.Z, (0, h._)({}, tb.myWorkspaceSettings)),
              ],
            }),
            s && (0, l.jsx)(to.R, {}),
            (0, l.jsx)(to.DM, {
              onDeleteHistory: t,
              isConfirmingDeleteHistory: n,
            }),
          ],
        });
      }
      function tx(e) {
        var t = e.href,
          n = e.children;
        return (0, l.jsx)(tl.v.Item, {
          children: function (e) {
            var r = e.active;
            return (0, l.jsx)(tp(), {
              href: t,
              legacyBehavior: !0,
              children: (0, l.jsx)(to.ZB, {
                className: (0, N.Z)(r ? "bg-gray-700" : "hover:bg-gray-700"),
                children: n,
              }),
            });
          },
        });
      }
      var tb = (0, y.vU)({
        myWorkspaceSettings: {
          id: "workspacePopoverNavigation.myWorkspaceSettings",
          defaultMessage: "Workspace settings",
          description: "Workspace settings menu item",
        },
      });
      function ty(e) {
        var t = e.onClickSettings,
          n = e.onDeleteHistory;
        return (0, l.jsxs)(tl.v, {
          as: "div",
          className: "group relative",
          children: [
            (0, l.jsx)(tM, {}),
            (0, l.jsx)(tc, {
              children: (0, l.jsx)(tl.v.Items, {
                className:
                  "absolute bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md bg-gray-950 pb-1.5 pt-1 outline-none",
                children: (0, l.jsx)(tC, {
                  onClickSettings: t,
                  onDeleteHistory: n,
                }),
              }),
            }),
          ],
        });
      }
      function tj() {
        var e = (0, V.kP)().session,
          t = null == e ? void 0 : e.user,
          n = (0, Y.Ix)();
        return t
          ? (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)(to.ZP, {
                onClick: function () {
                  X.setIsModalOpen(!0);
                },
                children: (0, l.jsxs)("div", {
                  className: "flex w-full flex-col gap-2",
                  children: [
                    (0, l.jsx)(ee, { className: "h-10 w-10" }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex w-full items-center justify-between gap-2",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "flex flex-col items-start gap-1",
                          children: [
                            (0, l.jsx)("div", {
                              className: "text-base capitalize text-white",
                              children: n,
                            }),
                            (0, l.jsx)("div", {
                              className: "text-sm text-gray-500",
                              children: null == t ? void 0 : t.email,
                            }),
                          ],
                        }),
                        (0, l.jsx)("div", {
                          children: (0, l.jsx)(w.ZP, {
                            icon: tu.Z,
                            size: "small",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
      var tw = "oai/apps/hasSeenUserSurvey6_23";
      function t_() {
        var e = (0, P.Z)(),
          t = (0, f.w$)(),
          n = (0, k._)((0, u.useState)(!1), 2),
          r = n[0],
          a = n[1],
          i = td.m.getItem(tw);
        return r || i
          ? null
          : (0, l.jsx)("div", {
              className: "mx-1 mb-1 rounded-sm bg-[#0077FF]",
              children: (0, l.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-stretch gap-3 p-3 text-sm text-white",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex w-full items-start",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex-grow",
                        children: [
                          (0, l.jsx)("div", {
                            className: "font-bold",
                            children: (0, l.jsx)(
                              b.Z,
                              (0, h._)({}, tT.surveyTitle)
                            ),
                          }),
                          (0, l.jsx)("div", {
                            children: (0, l.jsx)(
                              b.Z,
                              (0, h._)({}, tT.surveyDescription)
                            ),
                          }),
                        ],
                      }),
                      (0, l.jsx)("button", {
                        className: "text-white/25 hover:text-white/40",
                        onClick: function () {
                          a(!0), td.m.setItem(tw, !0);
                        },
                        "aria-label": e.formatMessage(tT.surveyDismiss),
                        children: (0, l.jsx)(w.QF, {
                          width: t ? "20px" : "24px",
                          height: t ? "20px" : "24px",
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("a", {
                    href: "https://openai.qualtrics.com/jfe/form/SV_7QmSGWHymCCmIxE",
                    target: "_blank",
                    className:
                      "flex w-full flex-row items-center justify-center gap-2 rounded-[4px] bg-white/25 p-2 hover:bg-white/40",
                    rel: "noreferrer",
                    onClick: function () {
                      td.m.setItem(tw, !0), a(!0);
                    },
                    children: [
                      (0, l.jsx)(w.ZP, { size: "small", icon: x.AlO }),
                      (0, l.jsx)(b.Z, (0, h._)({}, tT.takeSurveyButton)),
                    ],
                  }),
                ],
              }),
            });
      }
      function tC(e) {
        var t = e.onClickSettings,
          n = e.onDeleteHistory,
          r = (0, Z.WS)(),
          a = (0, k._)((0, u.useState)(!1), 2),
          i = a[0],
          s = a[1],
          o = (0, u.useCallback)(
            function (e) {
              i ? (n(), s(!1)) : (s(!0), e.preventDefault());
            },
            [i, n]
          ),
          d = (0, Y.sN)(Y.F_.isBusinessWorkspace),
          c = (0, I.hz)(),
          f = c.has(F.G_),
          g = (0, Y._O)().data,
          m = c.has("business_seats") && g.length > 1;
        return (0, l.jsxs)("nav", {
          children: [
            f && (0, l.jsx)(t_, {}),
            m && (0, l.jsx)(tj, {}),
            d
              ? (0, l.jsx)(tv, {
                  onDeleteHistory: o,
                  isConfirmingDeleteHistory: i,
                })
              : (0, l.jsx)(tf, {
                  onDeleteHistory: o,
                  isConfirmingDeleteHistory: i,
                }),
            (0, l.jsxs)(to.ZP, {
              as: "a",
              href: "https://help.openai.com/en/collections/3742473-chatgpt",
              target: "_blank",
              onClick: function () {
                r(S.s6.clickFaqLink);
              },
              children: [
                (0, l.jsx)(w.ZP, { icon: x.AlO }),
                (0, l.jsx)(b.Z, (0, h._)({}, tT.helpAndFaq)),
              ],
            }),
            (0, l.jsxs)(to.ZP, {
              onClick: t,
              children: [
                (0, l.jsx)(w.ZP, { icon: x.nbt }),
                (0, l.jsx)(b.Z, (0, h._)({}, tT.settings)),
              ],
            }),
            (0, l.jsx)(to.R, {}),
            (0, l.jsxs)(to.ZP, {
              onClick: function () {
                r(S.s6.clickLogOut, { eventSource: "mouse" }), (0, V.w7)();
              },
              children: [
                (0, l.jsx)(w.ZP, { icon: x.xqh }),
                (0, l.jsx)(b.Z, (0, h._)({}, tT.logOut)),
              ],
            }),
          ],
        });
      }
      function tM() {
        var e = (0, V.kP)().session;
        return (0, I.hz)().has("business_seats")
          ? (0, l.jsx)(tk, {})
          : (null == e ? void 0 : e.user)
          ? (0, l.jsxs)(tl.v.Button, {
              className:
                "flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800",
              children: [
                (0, l.jsx)("div", {
                  className: "-ml-0.5 w-5 flex-shrink-0",
                  children: (0, l.jsx)(J.Yt, { user: e.user, size: "small" }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white",
                  children: e.user.name,
                }),
                (0, l.jsx)(w.ZP, {
                  icon: x.K9M,
                  size: "small",
                  className: "flex-shrink-0 text-gray-500",
                }),
              ],
            })
          : null;
      }
      function tk() {
        var e = (0, Y.Ix)();
        return (0, l.jsxs)(tl.v.Button, {
          className:
            "flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-800",
          children: [
            (0, l.jsx)("div", {
              className: "-ml-0.5 w-5 flex-shrink-0",
              children: (0, l.jsx)(ee, {
                className: "flex h-5 w-5",
                iconSize: "xsmall",
              }),
            }),
            (0, l.jsx)("div", {
              className:
                "grow overflow-hidden text-ellipsis whitespace-nowrap text-left capitalize text-white",
              children: e,
            }),
            (0, l.jsx)(w.ZP, {
              icon: x.K9M,
              size: "small",
              className: "flex-shrink-0 text-gray-500",
            }),
          ],
        });
      }
      var tT = (0, y.vU)({
        helpAndFaq: {
          id: "navigation.helpAndFaq",
          defaultMessage: "Help & FAQ",
          description: "Help & FAQ menu item",
        },
        settings: {
          id: "navigation.settings",
          defaultMessage: "Settings",
          description: "Settings menu item",
        },
        logOut: {
          id: "navigation.logOut",
          defaultMessage: "Log out",
          description: "Log out menu item",
        },
        takeSurveyButton: {
          id: "navigation.survey.takeSurveyButton",
          defaultMessage: "Take survey",
          description: "Survey offer call to action",
        },
        surveyDismiss: {
          id: "navigation.surveyDismiss",
          defaultMessage: "Dismiss survey",
          description: "Survey offer dismiss button",
        },
        surveyDescription: {
          id: "navigation.surveyDescription",
          defaultMessage: "Shape the future of ChatGPT.",
          description: "Survey offer description",
        },
        surveyTitle: {
          id: "navigation.surveyTitle",
          defaultMessage: "We’d love to hear from you!",
          description: "Survey offer title",
        },
      });
      function tN() {
        var e = (0, o._)([
          "flex-col flex-1 transition-opacity duration-500\n  ",
          "\n  ",
          "",
        ]);
        return (
          (tN = function () {
            return e;
          }),
          e
        );
      }
      function tP(e) {
        var t = e.onDeleteHistory,
          n = e.onNewThread,
          r = e.children,
          a = (0, P.Z)(),
          i = (0, I.hz)(),
          s = (0, Z.WS)(),
          o = i.has(F.Ue),
          d = (0, f.w$)(),
          g = (0, v.useRouter)(),
          m = (0, I.nR)(),
          p = (0, E.g)(function (e) {
            return e.flags.isUserInCanPayGroup;
          }),
          y = (0, e5.t)(function (e) {
            return { setShowAccountPaymentModal: e.setShowAccountPaymentModal };
          }).setShowAccountPaymentModal,
          j = (0, u.useCallback)(
            function () {
              y(!0, function () {
                s(S.s6.clickSidebarAccountPaymentMenuItem);
              });
            },
            [s, y]
          ),
          _ = (0, u.useRef)(null),
          M = (0, k._)((0, u.useState)(!1), 2),
          L = M[0],
          A = M[1],
          R = (0, u.useContext)(D.QL),
          U = R.historyDisabled,
          B = R.toggleHistoryDisabled,
          O = R.getModifiedSettings,
          q = R.unsetModifiedSettings,
          z = O(),
          H = (0, k._)((0, u.useState)(z), 2),
          W = H[0],
          V = H[1],
          J = (0, u.useCallback)(function () {
            V(!0);
          }, []),
          G = (0, u.useCallback)(
            function () {
              V(!1), q();
            },
            [q]
          ),
          $ = (0, u.useCallback)(
            function () {
              null == n || n(), B();
            },
            [n, B]
          ),
          Q = (0, u.useMemo)(
            function () {
              return (0, l.jsxs)("div", {
                className: (0, N.Z)(
                  "absolute left-0 top-14 z-20 overflow-hidden transition-all duration-500",
                  U ? "visible max-h-72" : "invisible max-h-0"
                ),
                children: [
                  (0, l.jsxs)("div", {
                    className: "bg-gray-900 px-4 py-3",
                    children: [
                      (0, l.jsx)("div", {
                        className: "p-1 text-sm text-gray-100",
                        children: (0, l.jsx)(
                          b.Z,
                          (0, h._)({}, tS.chatHistoryOff)
                        ),
                      }),
                      (0, l.jsx)("div", {
                        className: "p-1 text-xs text-gray-500",
                        children: (0, l.jsx)(
                          b.Z,
                          (0, C._)((0, h._)({}, tS.chatHistoryOffDescription), {
                            values: {
                              learnMore: (0, l.jsx)("a", {
                                href: "https://help.openai.com/en/articles/7730893",
                                target: "_blank",
                                className: "underline",
                                rel: "noreferrer",
                                children: (0, l.jsx)(
                                  b.Z,
                                  (0, h._)({}, tS.learnMore)
                                ),
                              }),
                              b: function (e) {
                                return (0, l.jsx)("strong", { children: e });
                              },
                            },
                          })
                        ),
                      }),
                      (0, l.jsxs)(ei.z, {
                        className: "mt-4 w-full",
                        onClick: $,
                        color: "primary",
                        size: "medium",
                        children: [
                          (0, l.jsx)(w.ZP, { icon: x.$IY }),
                          (0, l.jsx)(b.Z, (0, h._)({}, tS.enableChatHistory)),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "h-24 bg-gradient-to-t from-gray-900/0 to-gray-900",
                  }),
                ],
              });
            },
            [U, $]
          ),
          Y = (0, u.useMemo)(
            function () {
              var e = [],
                t = null;
              return (
                u.Children.forEach(r, function (n) {
                  u.isValidElement(n) &&
                    (n.type === tP.PrimaryActionDesktop ? (t = n) : e.push(n));
                }),
                { primaryActionButton: t, navigationContent: e }
              );
            },
            [r]
          ),
          K = Y.primaryActionButton,
          X = Y.navigationContent;
        (0, u.useEffect)(
          function () {
            var e;
            _.current &&
              A(
                (e = _.current).scrollHeight > e.clientHeight ||
                  e.scrollWidth > e.clientWidth
              );
          },
          [r]
        );
        var ee = !(0, I.nR)() && !i.has("disable_upgrade_ui"),
          et = (0, I.KQ)(),
          en = (0, c.tN)(function (e) {
            return e.isFilesModalOpen;
          }),
          ea = (0, u.useMemo)(
            function () {
              var e = g.route;
              return !ts.has(e);
            },
            [g.route]
          );
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className:
                "scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20",
              children: [
                (0, l.jsx)(T.f, {
                  asChild: !0,
                  children: (0, l.jsx)("h2", {
                    children: (0, l.jsx)(
                      b.Z,
                      (0, h._)({}, tS.chatHistoryLabel)
                    ),
                  }),
                }),
                (0, l.jsxs)("nav", {
                  className: "flex h-full w-full flex-col p-2",
                  "aria-label": a.formatMessage(tS.chatHistoryLabel),
                  children: [
                    (0, l.jsxs)("div", {
                      className: "mb-1 flex flex-row gap-2",
                      children: [
                        K,
                        o &&
                          d &&
                          (0, l.jsx)(ep.u, {
                            side: "right",
                            label: a.formatMessage(tS.closeSidebar),
                            children: (0, l.jsxs)(to.zV, {
                              onClick: c.vm.toggleDesktopNavCollapsed,
                              className:
                                "w-11 flex-shrink-0 items-center justify-center",
                              children: [
                                (0, l.jsx)(w.ZP, { icon: x.iYc }),
                                (0, l.jsx)(T.f, {
                                  children: (0, l.jsx)(
                                    b.Z,
                                    (0, h._)({}, tS.closeSidebar)
                                  ),
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                    Q,
                    (0, l.jsx)(tZ, {
                      ref: _,
                      $offsetScrollbar: L,
                      $disableScroll: U,
                      children: X,
                    }),
                    (0, l.jsxs)("div", {
                      className: "border-t border-white/20 pt-2 empty:hidden",
                      children: [
                        !1 === m &&
                          p &&
                          (0, l.jsx)(to.Vq, {
                            onClick: j,
                            className: "rounded-md",
                            children: (0, l.jsxs)("span", {
                              className: "flex w-full flex-row justify-between",
                              children: [
                                (0, l.jsxs)("span", {
                                  className:
                                    "gold-new-button flex items-center gap-3",
                                  children: [
                                    (0, l.jsx)(w.ZP, { icon: x.fzv }),
                                    et
                                      ? (0, l.jsx)(
                                          b.Z,
                                          (0, h._)({}, tS.renewPlus)
                                        )
                                      : (0, l.jsx)(
                                          b.Z,
                                          (0, h._)({}, tS.upgradeToPlus)
                                        ),
                                  ],
                                }),
                                ee &&
                                  !et &&
                                  (0, l.jsx)("span", {
                                    className:
                                      "rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800",
                                    children: (0, l.jsx)(
                                      b.Z,
                                      (0, h._)({}, tS.newLabel)
                                    ),
                                  }),
                              ],
                            }),
                          }),
                        ea &&
                          (0, l.jsx)(ty, {
                            onClickSettings: J,
                            onDeleteHistory: t,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            W &&
              (0, l.jsx)(eV, {
                onClose: G,
                onToggleHistoryDisabled: n,
                onDeleteHistory: t,
              }),
            i.has("files_list_ui") && en && (0, l.jsx)(ek, {}),
            i.has("system_message2") && (0, l.jsx)(tt, {}),
            i.has("business_seats") && (0, l.jsx)(er, { onResetThread: n }),
          ],
        });
      }
      (tP.PrimaryActionDesktop = function (e) {
        var t = e.onClick,
          n = (0, M._)(e, ["onClick"]);
        return (0, l.jsx)(
          to.zV,
          (0, h._)({ onClick: t, className: "flex-shrink-0 flex-grow" }, n)
        );
      }),
        (tP.PrimaryButtonMobile = function (e) {
          var t = e.onClick,
            n = (0, M._)(e, ["onClick"]);
          return (0, l.jsx)(
            "button",
            (0, h._)({ type: "button", className: "px-3", onClick: t }, n)
          );
        });
      var tZ = d.Z.div(
          tN(),
          function (e) {
            return e.$disableScroll
              ? "overflow-y-hidden opacity-20 pointer-events-none"
              : "overflow-y-auto";
          },
          function (e) {
            return e.$offsetScrollbar && "-mr-2";
          }
        ),
        tS = (0, y.vU)({
          upgradeToPlus: {
            id: "navigation.upgradeToPlus",
            defaultMessage: "Upgrade to Plus",
            description: "Upgrade to Plus menu item",
          },
          renewPlus: {
            id: "navigation.renewPlus",
            defaultMessage: "Renew Plus",
            description: "Renew Plus menu item",
          },
          closeSidebar: {
            id: "navigation.closeSidebar",
            defaultMessage: "Hide sidebar",
            description: "Hide sidebar button label",
          },
          chatHistoryLabel: {
            id: "navigation.chatHistoryLabel",
            defaultMessage: "Chat history",
            description: "Chat history label heading",
          },
          chatHistoryOff: {
            id: "navigation.chatHistoryOff",
            defaultMessage: "Chat History is off for this browser.",
            description: "Text indicating that chat history is turned off",
          },
          chatHistoryOffDescription: {
            id: "navigation.chatHistoryOffDescription",
            defaultMessage:
              "When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}",
            description: "Description for chat history being off",
          },
          learnMore: {
            id: "navigation.learnMore",
            defaultMessage: "Learn more",
            description: "Learn more link text",
          },
          enableChatHistory: {
            id: "navigation.enableChatHistory",
            defaultMessage: "Enable chat history",
            description: "Enable chat history button label",
          },
          newLabel: {
            id: "navigation.newLabel",
            defaultMessage: "NEW",
            description: "Label for new features or items",
          },
        }),
        tI = function (e) {
          var t = e.onDeleteHistory,
            n = e.onNewThread,
            r = e.children;
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("div", {
              className: "flex h-full min-h-0 flex-col ",
              children: (0, l.jsx)(tP, {
                onDeleteHistory: t,
                onNewThread: n,
                children: r,
              }),
            }),
          });
        },
        tF = function (e) {
          var t = e.onDeleteHistory,
            n = e.onClose,
            r = e.sidebarOpen,
            a = e.onNewThread,
            i = e.children;
          return (0, l.jsx)(g.u.Root, {
            show: r,
            as: u.Fragment,
            children: (0, l.jsxs)(m.V, {
              as: "div",
              className: "relative",
              onClose: n,
              children: [
                (0, l.jsx)(g.u.Child, {
                  as: u.Fragment,
                  enter: "transition-opacity ease-linear duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "transition-opacity ease-linear duration-300",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, l.jsx)("div", {
                    className: "fixed inset-0 bg-gray-600 bg-opacity-75",
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: "fixed inset-0 flex",
                  children: [
                    (0, l.jsx)(g.u.Child, {
                      as: u.Fragment,
                      enter: "transition ease-in-out duration-300 transform",
                      enterFrom: "-translate-x-full",
                      enterTo: "translate-x-0",
                      leave: "transition ease-in-out duration-300 transform",
                      leaveFrom: "translate-x-0",
                      leaveTo: "-translate-x-full",
                      children: (0, l.jsxs)(m.V.Panel, {
                        className:
                          "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                        children: [
                          (0, l.jsx)(g.u.Child, {
                            as: u.Fragment,
                            enter: "ease-in-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in-out duration-300",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, l.jsx)("div", {
                              className: "absolute right-0 top-0 -mr-12 pt-2",
                              children: (0, l.jsxs)("button", {
                                type: "button",
                                className:
                                  "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                onClick: n,
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "sr-only",
                                    children: (0, l.jsx)(
                                      b.Z,
                                      (0, h._)({}, tL.closeSidebar)
                                    ),
                                  }),
                                  (0, l.jsx)(w.ZP, {
                                    icon: x.q5L,
                                    size: "medium",
                                    className: "text-white",
                                    "aria-hidden": "true",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, l.jsx)(tP, {
                            onDeleteHistory: t,
                            onNewThread: a,
                            children: i,
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", { className: "w-14 flex-shrink-0" }),
                  ],
                }),
              ],
            }),
          });
        },
        tE = function (e) {
          var t = e.onClickOpenSidebar,
            n = e.renderTitle,
            r = e.children;
          return (0, l.jsxs)("div", {
            className:
              "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
            children: [
              (0, l.jsxs)("button", {
                type: "button",
                className:
                  "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                onClick: t,
                children: [
                  (0, l.jsx)("span", {
                    className: "sr-only",
                    children: (0, l.jsx)(b.Z, (0, h._)({}, tL.openSidebar)),
                  }),
                  (0, l.jsx)(w.ZP, {
                    icon: x.cur,
                    "aria-hidden": "true",
                    size: "medium",
                  }),
                ],
              }),
              (0, l.jsx)("h1", {
                className: "flex-1 text-center text-base font-normal",
                children: n,
              }),
              r,
            ],
          });
        };
      function tD(e) {
        var t = e.onResetThread,
          n = e.children,
          r = (0, v.useRouter)(),
          a = (0, u.useRef)(null),
          i = (0, f.w$)(),
          s = (0, _.iF)(),
          o = (0, c.tN)(function (e) {
            return {
              activeSidebar: e.activeSidebar,
              isDesktopNavCollapsed: e.isDesktopNavCollapsed,
            };
          }),
          d = o.isDesktopNavCollapsed,
          h = o.activeSidebar,
          g = (0, u.useCallback)(
            function () {
              j.ZP.deleteConversations().then(function () {
                s();
              }),
                null == t || t(),
                "/" !== r.asPath && r.replace({ pathname: "/" });
            },
            [t, s, r]
          );
        return i
          ? (0, l.jsx)(p.E.div, {
              className: "dark flex-shrink-0 overflow-x-hidden bg-gray-900",
              ref: a,
              initial: !1,
              animate: {
                width: d ? 0 : "260px",
                transition: { duration: 0.165, ease: "easeOut" },
              },
              onAnimationStart: function () {
                a.current && (a.current.style.visibility = "visible");
              },
              onAnimationComplete: function () {
                a.current && d && (a.current.style.visibility = "hidden");
              },
              children: (0, l.jsx)("div", {
                className: "h-full w-[260px]",
                children: (0, l.jsx)(tI, {
                  onDeleteHistory: g,
                  onNewThread: t,
                  children: n,
                }),
              }),
            })
          : (0, l.jsx)(tF, {
              onClose: function () {
                return c.vm.toggleActiveSidebar("mobile-nav");
              },
              sidebarOpen: "mobile-nav" === h,
              onDeleteHistory: g,
              onNewThread: t,
              children: n,
            });
      }
      var tL = (0, y.vU)({
          closeSidebar: {
            id: "navigation.closeSidebar",
            defaultMessage: "Close sidebar",
            description: "Close sidebar button label",
          },
          openSidebar: {
            id: "navigation.openSidebar",
            defaultMessage: "Open sidebar",
            description: "Open sidebar button label",
          },
        }),
        tA = n(37541);
      function tR() {
        var e = (0, o._)(["overflow-hidden w-full h-full relative flex z-0"]);
        return (
          (tR = function () {
            return e;
          }),
          e
        );
      }
      function tU() {
        var e = (0, o._)([
          "relative h-full w-full transition-width flex flex-col overflow-auto items-stretch",
        ]);
        return (
          (tU = function () {
            return e;
          }),
          e
        );
      }
      function tB(e) {
        var t = e.onResetThread,
          n = e.children,
          r = e.showNavigation,
          a = e.renderTitle,
          i = (0, f.w$)(),
          s = (0, u.useMemo)(
            function () {
              var e = [],
                t = null,
                r = null,
                a = null,
                i = null;
              return (
                u.Children.forEach(n, function (n) {
                  u.isValidElement(n) &&
                    (n.type === tB.NavigationContent
                      ? (t = n)
                      : n.type === tB.Sidebars
                      ? (r = n)
                      : n.type === tB.NavigationPrimaryActionDesktop
                      ? (a = n)
                      : n.type === tB.NavigationPrimaryActionMobile
                      ? (i = n)
                      : e.push(n));
                }),
                {
                  pageContent: e,
                  navigationContent: t,
                  sidebars: r,
                  primaryAction: a,
                  primaryActionMobile: i,
                }
              );
            },
            [n]
          ),
          o = s.pageContent,
          d = s.navigationContent,
          h = s.sidebars,
          g = s.primaryAction,
          m = s.primaryActionMobile;
        return (0, l.jsxs)(tO, {
          children: [
            r &&
              (0, l.jsx)(tA.Z, {
                children: (0, l.jsxs)(tD, {
                  onResetThread: t,
                  children: [g, d],
                }),
              }),
            (0, l.jsxs)("div", {
              className:
                "relative flex h-full max-w-full flex-1 overflow-hidden",
              children: [
                (0, l.jsxs)("div", {
                  className: "flex h-full max-w-full flex-1 flex-col",
                  children: [
                    !i &&
                      r &&
                      (0, l.jsx)(tA.Z, {
                        children: (0, l.jsx)(tE, {
                          onClickOpenSidebar: function () {
                            return c.vm.toggleActiveSidebar("mobile-nav");
                          },
                          renderTitle: a,
                          children: m,
                        }),
                      }),
                    (0, l.jsx)(tq, { className: "flex-1", children: o }),
                  ],
                }),
                h,
              ],
            }),
          ],
        });
      }
      var tO = d.Z.div(tR()),
        tq = d.Z.main(tU());
      (tB.NavigationContent = function (e) {
        var t = e.children;
        return (0, l.jsx)(l.Fragment, { children: t });
      }),
        (tB.Sidebars = function (e) {
          var t = e.children;
          return (0, l.jsx)(l.Fragment, { children: t });
        }),
        (tB.NavigationPrimaryActionDesktop = tP.PrimaryActionDesktop),
        (tB.NavigationPrimaryActionMobile = tP.PrimaryButtonMobile);
    },
    57924: function (e, t, n) {
      n.d(t, {
        u: function () {
          return u;
        },
      });
      var r = n(4337),
        a = n(35250),
        i = n(15838),
        s = n(19841);
      n(70079);
      var o = n(34303);
      function l() {
        var e = (0, r._)([
          "relative top-[-3px] h-2 w-2 rotate-45 transform border-r border-b border-black/10 bg-black shadow-xs",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      var u = function (e) {
          var t = e.label,
            n = e.side,
            r = e.sideOffset,
            o = e.withArrow,
            l = e.wide,
            u = e.size,
            c = void 0 === u ? "small" : u,
            f = e.interactive,
            h = e.usePortal,
            g = e.className,
            m = e.children,
            p = e.delayDuration,
            v = e.closeOnOutsideClick,
            x = e.open,
            b = (0, a.jsxs)(i.VY, {
              onPointerDownOutside:
                void 0 === v || v
                  ? void 0
                  : function (e) {
                      return e.preventDefault();
                    },
              side: void 0 === n ? "bottom" : n,
              sideOffset: void 0 === r ? 14 : r,
              className: (0, s.Z)(
                "relative rounded-lg border border-black/10 bg-black p-1 shadow-xs transition-opacity",
                void 0 !== l && l ? "max-w-sm" : "max-w-xs",
                g
              ),
              children: [
                (0, a.jsx)("span", {
                  className: (0, s.Z)(
                    "flex items-center whitespace-pre-wrap px-2 py-1 text-center font-medium normal-case text-white",
                    { "text-xs": "xsmall" === c, "text-sm": "small" === c }
                  ),
                  children: t,
                }),
                (void 0 === o || o) &&
                  (0, a.jsx)(i.Eh, {
                    asChild: !0,
                    children: (0, a.jsx)(d, {}),
                  }),
              ],
            });
          return (0, a.jsxs)(i.fC, {
            delayDuration: void 0 === p ? 300 : p,
            disableHoverableContent: !(void 0 !== f && f),
            open: x,
            children: [
              (0, a.jsx)(i.xz, {
                asChild: !0,
                children: (0, a.jsx)("span", { className: g, children: m }),
              }),
              void 0 === h || h ? (0, a.jsx)(i.h_, { children: b }) : b,
            ],
          });
        },
        d = o.Z.div(l());
    },
    11626: function (e, t, n) {
      n.d(t, {
        IS: function () {
          return S;
        },
        Yl: function () {
          return k;
        },
        w_: function () {
          return N;
        },
        F_: function () {
          return P;
        },
        Ap: function () {
          return I;
        },
        bE: function () {
          return L;
        },
        Ix: function () {
          return E;
        },
        sN: function () {
          return T;
        },
        qH: function () {
          return F;
        },
        _O: function () {
          return D;
        },
        Hj: function () {
          return Z;
        },
      });
      var r = n(21722),
        a = n(96237),
        i = n(39324),
        s = n(39889),
        o = n(35250),
        l = n(24396),
        u = n(44544),
        d = n(70079),
        c = n(35290),
        f = n(75908),
        h = n(3001),
        g = n(81292),
        m = n(32787),
        p = n(32402),
        v = n(24274),
        x = n(64135),
        b = n(4337),
        y = n(34303);
      function j() {
        var e = (0, b._)([
          "bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = (0, b._)(["bg-blue-200 text-blue-700"]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      var _ = y.Z.span(j()),
        C = (0, y.Z)(_)(w()),
        M = n(97688),
        k = "_account",
        T = (0, g.ZP)(function () {
          return { currentWorkspace: null };
        }),
        N = {
          setCurrentWorkspace: function (e) {
            T.setState({ currentWorkspace: e });
          },
        },
        P = {
          isPersonalWorkspace: function (e) {
            var t = e.currentWorkspace;
            return null != t && "personal" === t.structure;
          },
          isBusinessWorkspace: function (e) {
            var t = e.currentWorkspace;
            return null != t && "workspace" === t.structure;
          },
          isAdmin: function (e) {
            var t = e.currentWorkspace;
            return null != t && t.current_user_role === p.r3.ADMIN;
          },
          workspaceId: function (e) {
            var t = e.currentWorkspace;
            return null != t ? t.id : null;
          },
        };
      function Z(e) {
        var t = (0, m.kP)().session,
          n = (0, x.hz)();
        return (0, l.a)({
          queryFn: (0, r._)(function () {
            return (0, s.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    v.ZP.getAccounts(null == t ? void 0 : t.accessToken).catch(
                      function (e) {
                        return M.m.danger("Failed to get workspaces"), e;
                      }
                    ),
                  ];
                case 1:
                  return [2, e.sent()];
              }
            });
          }),
          queryKey: ["workspaces"],
          enabled: !!(
            (null == t ? void 0 : t.accessToken) && n.has("business_seats")
          ),
          select: e,
        });
      }
      var S = function () {
        var e = T().currentWorkspace,
          t = (0, x.nR)();
        return (0, x.hz)().has("business_seats")
          ? (null == e ? void 0 : e.structure) === "personal" && t
            ? (0, o.jsx)(_, { children: "Plus" })
            : (null == e ? void 0 : e.structure) === "workspace"
            ? (0, o.jsx)(C, {
                children: (0, o.jsx)(c.Z, (0, i._)({}, A.businessPlanName)),
              })
            : null
          : t
          ? (0, o.jsx)(_, { children: "Plus" })
          : null;
      };
      function I() {
        var e = (0, f.Z)(),
          t = e.formatMessage(A.adminRoleName),
          n = e.formatMessage(A.standardRoleName);
        return (0, d.useMemo)(
          function () {
            var e;
            return (
              (e = {}),
              (0, a._)(e, p.r3.ADMIN, t),
              (0, a._)(e, p.r3.STANDARD, n),
              e
            );
          },
          [t, n]
        );
      }
      function F(e) {
        var t = (0, f.Z)();
        return e
          ? "personal" === e.structure
            ? t.formatMessage(A.personalPlanName)
            : t.formatMessage(A.businessPlanName)
          : t.formatMessage(A.personalPlanName);
      }
      function E(e) {
        var t,
          n,
          r,
          a,
          i,
          s,
          o = (0, m.kP)().session,
          l = T().currentWorkspace,
          u = T(P.isPersonalWorkspace),
          d =
            ((n = (0, f.Z)()),
            null !== (t = null == l ? void 0 : l.name) && void 0 !== t
              ? t
              : n.formatMessage(A.defaultWorkspaceTitle)),
          c = (0, x.hz)(),
          h =
            null !==
              (s =
                null !==
                  (i =
                    null == o
                      ? void 0
                      : null === (r = o.user) || void 0 === r
                      ? void 0
                      : r.name) && void 0 !== i
                  ? i
                  : null == o
                  ? void 0
                  : null === (a = o.user) || void 0 === a
                  ? void 0
                  : a.email) && void 0 !== s
              ? s
              : null;
        return c.has("business_seats")
          ? e
            ? "personal" === e.structure
              ? h
              : e.name
            : l
            ? u
              ? h
              : d
            : h
          : h;
      }
      function D() {
        var e = Z(function (e) {
            return e.items;
          }),
          t = e.data,
          n = void 0 === t ? [] : t,
          r = e.isLoading,
          a = e.isError;
        return (
          (0, d.useEffect)(
            function () {
              if (!r && !a) {
                var e = (0, u.getCookie)(k),
                  t = null;
                if ("string" == typeof e && "" !== e) {
                  var i = n.find(function (t) {
                    return t.id === e;
                  });
                  i && (t = i);
                }
                if (null === t) {
                  var s,
                    o = n.find(function (e) {
                      return "personal" === e.structure;
                    });
                  o
                    ? (t = o)
                    : (null === (s = n[0]) || void 0 === s ? void 0 : s.id) &&
                      (t = n[0]);
                }
                null !== t
                  ? (N.setCurrentWorkspace(t),
                    (0, u.setCookie)(k, "personal" === t.structure ? "" : t.id))
                  : (0, u.setCookie)(k, "");
              }
            },
            [n, a, r]
          ),
          (0, d.useMemo)(
            function () {
              return { data: n, isLoading: r };
            },
            [n, r]
          )
        );
      }
      function L(e) {
        var t = Z(function (t) {
            return t.items.find(function (t) {
              return t.id === e;
            });
          }),
          n = t.data,
          r = t.isLoading;
        return !!n && !r && n.current_user_role === p.r3.ADMIN;
      }
      var A = (0, h.vU)({
        defaultWorkspaceTitle: {
          id: "useWorkspaces.defaultWorkspaceTitle",
          defaultMessage: "Untitled Workspace",
          description: "title for workspace without a name",
        },
        personalPlanName: {
          id: "useWorkspaces.personalPlanName",
          defaultMessage: "Personal",
          description: "label for personal tier account",
        },
        businessPlanName: {
          id: "useWorkspaces.businessPlanName",
          defaultMessage: "Business",
          description: "label for business tier account",
        },
        adminRoleName: {
          id: "useWorkspaces.adminRoleName",
          defaultMessage: "Admin",
          description: "Role name for an admin user",
        },
        standardRoleName: {
          id: "useWorkspacews.standardRoleName",
          defaultMessage: "Member",
          description: "Role name for a standard user",
        },
      });
    },
    870: function (e, t, n) {
      var r = n(39324),
        a = n(71209),
        i = n(70216),
        s = n(35250),
        o = n(68789),
        l = n(70079),
        u = n(62440),
        d = {
          Root: o.fC,
          Trigger: function (e) {
            return (0, s.jsx)(u.J7, (0, r._)({ $as: o.xz }, e));
          },
          Portal: o.Uv,
          Content: function (e) {
            return (0, s.jsx)(
              u.ay,
              (0, r._)({ $as: o.VY, sideOffset: 4, align: "start" }, e)
            );
          },
          Item: l.forwardRef(function (e, t) {
            var n = e.children,
              l = e.onSelect,
              d = (0, i._)(e, ["children", "onSelect"]);
            return (0,
            s.jsx)(u.mS, (0, a._)((0, r._)({ $as: o.ck, ref: t, onSelect: l }, d), { children: n }));
          }),
        };
      t.Z = d;
    },
    25422: function (e, t, n) {
      var r = n(39324),
        a = n(71209),
        i = n(70216),
        s = n(35250),
        o = n(26828),
        l = n(70079),
        u = n(1454),
        d = n(38317),
        c = n(62440),
        f = {
          Root: o.fC,
          Trigger: function (e) {
            return (0, s.jsx)(c.J7, (0, r._)({ $as: o.xz }, e));
          },
          Value: o.B4,
          Icon: function () {
            return (0, s.jsx)(o.JO, {
              children: (0, s.jsx)(d.ZP, { icon: u.bTu, size: "small" }),
            });
          },
          Portal: o.h_,
          Content: function (e) {
            var t = e.children,
              n = (0, i._)(e, ["children"]);
            return (0, s.jsxs)(
              c.ay,
              (0, a._)(
                (0, r._)(
                  {
                    $as: o.VY,
                    side: "bottom",
                    sideOffset: 4,
                    position: "popper",
                  },
                  n
                ),
                {
                  children: [
                    (0, s.jsx)(o.u_, {
                      className:
                        "flex h-8 cursor-default items-center justify-center bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200",
                      children: (0, s.jsx)(d.ZP, { icon: u.rH8 }),
                    }),
                    (0, s.jsx)(o.l_, { children: t }),
                    (0, s.jsx)(o.$G, {
                      className:
                        "flex h-8 cursor-default items-center justify-center bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200",
                      children: (0, s.jsx)(d.ZP, { icon: u.bTu }),
                    }),
                  ],
                }
              )
            );
          },
          Item: l.forwardRef(function (e, t) {
            var n = e.children,
              l = (0, i._)(e, ["children"]);
            return (0,
            s.jsx)(c.mS, (0, a._)((0, r._)({ $as: o.ck, ref: t }, l), { children: (0, s.jsx)(o.eT, { children: n }) }));
          }),
        };
      t.Z = f;
    },
    25345: function (e, t, n) {
      var r = n(39324),
        a = n(71209),
        i = n(22830),
        s = n(35250),
        o = n(19841),
        l = n(70079);
      t.Z = {
        Root: function (e) {
          var t = e.children,
            n = e.fixed,
            r = e.className,
            a = e.size,
            u = (0, l.useRef)(null),
            d = (0, l.useRef)(null),
            c = (0, i._)((0, l.useState)(!1), 2),
            f = c[0],
            h = c[1];
          return (
            (0, l.useEffect)(function () {
              var e = u.current,
                t = d.current;
              if (e && t) {
                var n = new ResizeObserver(function () {
                  h(t.scrollHeight > e.clientHeight);
                });
                return (
                  n.observe(e),
                  function () {
                    return n.disconnect();
                  }
                );
              }
            }, []),
            (0, s.jsx)("div", {
              className: (0, o.Z)(
                "overflow-y-auto text-gray-600 dark:text-gray-300",
                "normal" === (void 0 === a ? "normal" : a)
                  ? "text-base"
                  : "text-sm",
                f && "pr-1",
                r
              ),
              ref: u,
              children: (0, s.jsx)("table", {
                className: (0, o.Z)(
                  "w-full border-separate border-spacing-0",
                  void 0 !== n && n && "table-fixed"
                ),
                ref: d,
                children: t,
              }),
            })
          );
        },
        Header: function (e) {
          var t = e.children;
          return (0, s.jsx)("thead", {
            children: (0, s.jsx)("tr", { children: t }),
          });
        },
        HeaderCell: function (e) {
          var t = e.textAlign,
            n = e.children,
            r = e.className;
          return (0, s.jsx)("th", {
            className: (0, o.Z)(
              "sticky top-0 z-10 border-b border-black/10 bg-white py-2 pr-4 font-medium last:pr-0 dark:border-white/10",
              "left" === (void 0 === t ? "left" : t)
                ? "text-left"
                : "text-right",
              void 0 === r ? "dark:bg-gray-900" : r
            ),
            children: n,
          });
        },
        Body: function (e) {
          var t = e.children;
          return (0, s.jsx)("tbody", { children: t });
        },
        Row: function (e) {
          var t = e.children,
            n = e.disabled,
            i = void 0 !== n && n;
          return (0, s.jsx)(
            "tr",
            (0, a._)((0, r._)({}, i ? { "data-disabled": !0 } : {}), {
              className: (0, o.Z)(i ? "pointer-events-none" : ""),
              children: t,
            })
          );
        },
        Cell: function (e) {
          var t = e.textAlign,
            n = e.children,
            r = e.className;
          return (0, s.jsx)("td", {
            className: (0, o.Z)(
              "border-b border-black/10  pr-4 last:pr-0 dark:border-white/10 [tr:last-child_&]:border-b-0",
              "left" === (void 0 === t ? "left" : t)
                ? "text-left"
                : "text-right",
              r
            ),
            children: (0, s.jsx)("div", {
              className: "py-2 [tr[data-disabled=true]_&]:opacity-50",
              children: n,
            }),
          });
        },
        Actions: function (e) {
          var t = e.children;
          return (0, s.jsx)("div", {
            className: "text-md flex items-center justify-end gap-2",
            children: t,
          });
        },
      };
    },
    62440: function (e, t, n) {
      n.d(t, {
        J7: function () {
          return l;
        },
        ay: function () {
          return d;
        },
        mS: function () {
          return u;
        },
      });
      var r = n(4337),
        a = n(34303);
      function i() {
        var e = (0, r._)([
          "\ntext-gray-700 border border-transparent inline-flex h-9 items-center justify-center gap-4 rounded-md bg-white px-3 text-sm\ndark:text-gray-200 dark:transparent dark:bg-transparent\nleading-none outline-none cursor-pointer\nhover:bg-gray-50 dark:hover:bg-[#494A54]\nfocus-visible:border-blue-500 dark:focus-visible:border-blue-500\nradix-state-active:text-gray-600 dark:radix-state-active::text-gray-400\nradix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-gray-500 dark:radix-disabled:bg-transparent dark:radix-disabled:text-gray-500\n",
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = (0, r._)([
          "\nrelative flex h-8 cursor-pointer select-none items-center rounded-md pl-3 pr-7 text-sm leading-none text-gray-700 hover:bg-gray-50 radix-disabled:pointer-events-none radix-highlighted:bg-gray-50 radix-disabled:text-gray-300 radix-highlighted:outline-none dark:text-gray-200 dark:hover:bg-[#2E2F33] dark:radix-highlighted:bg-[#2E2F33] dark:radix-disabled:text-gray-600 dark:radix-highlighted:hover:bg-[#2E2F33]\n",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function o() {
        var e = (0, r._)([
          "\nmin-w-[220px] rounded-lg bg-white dark:bg-gray-900 p-[5px] shadow-xs will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade\n",
        ]);
        return (
          (o = function () {
            return e;
          }),
          e
        );
      }
      var l = a.Z.button(i()),
        u = a.Z.div(s()),
        d = a.Z.div(o());
    },
    25094: function (e, t, n) {
      n.d(t, {
        $H: function () {
          return o;
        },
        Iy: function () {
          return i;
        },
        L8: function () {
          return s;
        },
        VF: function () {
          return l;
        },
      });
      var r = n(70079),
        a = n(75908);
      function i(e) {
        return e.replace("file-service://", "");
      }
      function s(e) {
        return "file-service://" + e;
      }
      function o(e) {
        return e.startsWith("file-service://");
      }
      function l() {
        var e = (0, a.Z)();
        return (0, r.useCallback)(
          function (t, n) {
            switch (t) {
              case "file_too_large":
                return e.formatMessage(u.fileTooLarge, n);
              case "over_user_quota":
                return e.formatMessage(u.overUserQuota, n);
              case "file_not_found":
                return e.formatMessage(u.fileNotFound, n);
              case "file_timed_out":
                return e.formatMessage(u.fileTimedOut, n);
              case "ace_pod_expired":
                return e.formatMessage(u.codeInterpreterSessionTimeout, n);
              case "default_create_entry_error":
                return e.formatMessage(u.defaultCreateEntryError, n);
              case "default_download_link_error":
                return e.formatMessage(u.defaultDownloadLinkError, n);
              default:
                return e.formatMessage(u.unknownError);
            }
          },
          [e]
        );
      }
      var u = (0, n(3001).vU)({
        defaultCreateEntryError: {
          id: "fileUpload.defaultCreateEntryError",
          defaultMessage: "Unable to upload file",
          description: "Error message when file upload fails",
        },
        defaultDownloadLinkError: {
          id: "fileUpload.defaultDownloadLinkError",
          defaultMessage: "Failed to get upload status for {fileName}",
          description: "Error message when file download link fails",
        },
        unknownError: {
          id: "fileUpload.unknownError",
          defaultMessage: "Unknown error occurred",
          description: "Error message when file upload fails",
        },
        fileTooLarge: {
          id: "fileUpload.fileTooLarge",
          defaultMessage: "File is too large",
          description: "Error message when file is too large to upload",
        },
        overUserQuota: {
          id: "fileUpload.overUserQuota",
          defaultMessage: "User quota exceeded",
          description:
            "Error message when user storage space (quote) has been exceeded",
        },
        fileNotFound: {
          id: "fileUpload.fileNotFound",
          defaultMessage: "File not found",
          description: "Error message when file was not found",
        },
        fileTimedOut: {
          id: "fileUpload.fileTimedOut",
          defaultMessage: "File upload timed out. Please try again.",
          description: "Error message when file upload timed out",
        },
        codeInterpreterSessionTimeout: {
          id: "fileUpload.codeInterpreterSessionTimeout",
          defaultMessage: "Code interpreter session expired",
          description: "Error message when code interpreter session expired",
        },
      });
    },
    87105: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return el;
        },
      });
      var r = n(39324),
        a = n(71209),
        i = n(70216),
        s = n(35250),
        o = n(7718),
        l = n(19841),
        u = n(86546),
        d = n(70079),
        c = n(21811),
        f = n(64135),
        h = n(32983),
        g = n(61110),
        m = n(55975),
        p = n(46050),
        v = n(29874),
        x = n(8449),
        b = n(15472);
      let y = {
          tokenize: function (e, t, n) {
            let r = this,
              a = this.events[this.events.length - 1],
              i =
                a && a[1].type === b.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              s = [];
            return function (t) {
              return (
                m.q.backslash,
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function t(r) {
                  return r === m.q.backslash ||
                    (r === m.q.leftSquareBracket && s[0] === m.q.backslash)
                    ? (e.consume(r), s.push(r), t)
                    : (e.exit("mathFlowFenceSequence"),
                      s.length < 2 ? n(r) : (0, p.f)(e, o, b.V.whitespace)(r));
                })(t)
              );
            };
            function o(t) {
              return t === m.q.eof || (0, v.Ch)(t)
                ? l(t)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter(b.V.chunkString, {
                    contentType: x._.contentTypeString,
                  }),
                  (function t(r) {
                    return r === m.q.eof || (0, v.Ch)(r)
                      ? (e.exit(b.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r))
                      : r === m.q.rightSquareBracket
                      ? n(r)
                      : (e.consume(r), t);
                  })(t));
            }
            function l(n) {
              return (
                e.exit("mathFlowFence"),
                r.interrupt
                  ? t(n)
                  : (function t(n) {
                      return n === m.q.eof
                        ? u(n)
                        : (0, v.Ch)(n)
                        ? e.attempt(
                            j,
                            e.attempt(
                              { tokenize: d, partial: !0 },
                              u,
                              i ? (0, p.f)(e, t, b.V.linePrefix, i + 1) : t
                            ),
                            u
                          )(n)
                        : (e.enter("mathFlowValue"),
                          (function n(r) {
                            return r === m.q.eof || (0, v.Ch)(r)
                              ? (e.exit("mathFlowValue"), t(r))
                              : (e.consume(r), n);
                          })(n));
                    })(n)
              );
            }
            function u(n) {
              return e.exit("mathFlow"), t(n);
            }
            function d(e, t, n) {
              let r = [];
              return (0, p.f)(
                e,
                function (t) {
                  return (
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function t(i) {
                      return (i === m.q.backslash && 0 === r.length) ||
                        (i === m.q.rightSquareBracket && r[0] === m.q.backslash)
                        ? (e.consume(i), r.push(i), t)
                        : r < s
                        ? n(i)
                        : (e.exit("mathFlowFenceSequence"),
                          (0, p.f)(e, a, b.V.whitespace)(i));
                    })(t)
                  );
                },
                b.V.linePrefix,
                x._.tabSize
              );
              function a(r) {
                return r === m.q.eof || (0, v.Ch)(r)
                  ? (e.exit("mathFlowFence"), t(r))
                  : n(r);
              }
            }
          },
          concrete: !0,
        },
        j = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter(b.V.lineEnding), e.consume(t), e.exit(b.V.lineEnding), a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        w = {
          tokenize: function (e, t, n) {
            let r = this,
              a = r.events[r.events.length - 1],
              i =
                a && a[1].type === b.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              s = 0;
            return function (t) {
              return (
                m.q.dollarSign,
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function t(r) {
                  return r === m.q.dollarSign
                    ? (e.consume(r), s++, t)
                    : (e.exit("mathFlowFenceSequence"),
                      s < 2 ? n(r) : (0, p.f)(e, o, b.V.whitespace)(r));
                })(t)
              );
            };
            function o(t) {
              return t === m.q.eof || (0, v.Ch)(t)
                ? l(t)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter(b.V.chunkString, {
                    contentType: x._.contentTypeString,
                  }),
                  (function t(r) {
                    return r === m.q.eof || (0, v.Ch)(r)
                      ? (e.exit(b.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r))
                      : r === m.q.dollarSign
                      ? n(r)
                      : (e.consume(r), t);
                  })(t));
            }
            function l(n) {
              return (
                e.exit("mathFlowFence"),
                r.interrupt
                  ? t(n)
                  : (function t(n) {
                      return n === m.q.eof
                        ? u(n)
                        : (0, v.Ch)(n)
                        ? e.attempt(
                            _,
                            e.attempt(
                              { tokenize: d, partial: !0 },
                              u,
                              i ? (0, p.f)(e, t, b.V.linePrefix, i + 1) : t
                            ),
                            u
                          )(n)
                        : (e.enter("mathFlowValue"),
                          (function n(r) {
                            return r === m.q.eof || (0, v.Ch)(r)
                              ? (e.exit("mathFlowValue"), t(r))
                              : (e.consume(r), n);
                          })(n));
                    })(n)
              );
            }
            function u(n) {
              return e.exit("mathFlow"), t(n);
            }
            function d(e, t, n) {
              let r = 0;
              return (0, p.f)(
                e,
                function (t) {
                  return (
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function t(i) {
                      return i === m.q.dollarSign
                        ? (e.consume(i), r++, t)
                        : r < s
                        ? n(i)
                        : (e.exit("mathFlowFenceSequence"),
                          (0, p.f)(e, a, b.V.whitespace)(i));
                    })(t)
                  );
                },
                b.V.linePrefix,
                x._.tabSize
              );
              function a(r) {
                return r === m.q.eof || (0, v.Ch)(r)
                  ? (e.exit("mathFlowFence"), t(r))
                  : n(r);
              }
            }
          },
          concrete: !0,
        },
        _ = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                (0, v.Ch)(t),
                e.enter(b.V.lineEnding),
                e.consume(t),
                e.exit(b.V.lineEnding),
                a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        };
      function C(e) {
        let t,
          n,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === b.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === b.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (t = a; ++t < r; )
            if ("mathTextData" === e[t][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (t = a - 1, r++; ++t <= r; )
          void 0 === n
            ? t !== r && e[t][1].type !== b.V.lineEnding && (n = t)
            : (t === r || e[t][1].type === b.V.lineEnding) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function M(e) {
        return (
          e !== m.q.backslash ||
          this.events[this.events.length - 1][1].type === b.V.characterEscape
        );
      }
      function k(e) {
        let t,
          n,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === b.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === b.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (t = a; ++t < r; )
            if ("mathTextData" === e[t][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (t = a - 1, r++; ++t <= r; )
          void 0 === n
            ? t !== r && e[t][1].type !== b.V.lineEnding && (n = t)
            : (t === r || e[t][1].type === b.V.lineEnding) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function T(e) {
        return (
          e !== m.q.dollarSign ||
          this.events[this.events.length - 1][1].type === b.V.characterEscape
        );
      }
      function N(e) {
        let t,
          n,
          r = e.length - 4,
          a = 3;
        if (
          (e[3][1].type === b.V.lineEnding || "space" === e[a][1].type) &&
          (e[r][1].type === b.V.lineEnding || "space" === e[r][1].type)
        ) {
          for (t = a; ++t < r; )
            if ("mathTextData" === e[t][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[a][1].type = "mathTextPadding"),
                (a += 2),
                (r -= 2);
              break;
            }
        }
        for (t = a - 1, r++; ++t <= r; )
          void 0 === n
            ? t !== r && e[t][1].type !== b.V.lineEnding && (n = t)
            : (t === r || e[t][1].type === b.V.lineEnding) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function P(e) {
        return (
          e !== m.q.backslash ||
          this.events[this.events.length - 1][1].type === b.V.characterEscape
        );
      }
      var Z = n(67726),
        S = n(9871),
        I = n(93362),
        F = n(45369),
        E = n(42426),
        D = n(65028),
        L = n(88366),
        A = n(36716),
        R = n(2368),
        U = n(21722),
        B = n(22830),
        O = n(39889),
        q = n(35448),
        z = n(24396),
        H = n(75908),
        W = n(35290),
        V = n(3001),
        J = n(24274),
        G = n(75527),
        $ = n(25094),
        Q = n(19265),
        Y = n(97688),
        K = n(57924),
        X = "sandbox:";
      function ee(e) {
        var t,
          n,
          o,
          l = e.messageId,
          u = e.clientThreadId,
          c = e.href,
          f = (0, i._)(e, ["messageId", "clientThreadId", "href"]),
          g = (0, d.useContext)(h.gB),
          m = (0, q.NL)(),
          p = (0, B._)((0, d.useState)(!1), 2),
          v = p[0],
          x = p[1],
          b = c.substring(X.length),
          y = G.tQ.getServerThreadId(u),
          j = (0, H.Z)(),
          w = (0, d.useCallback)(function (e) {
            var t = document.createElement("a");
            (t.href = e), t.click(), x(!1);
          }, []),
          _ = ((t = (0, d.useCallback)(function (e) {
            x(!1), Y.m.danger(e);
          }, [])),
          (n = (0, $.VF)()),
          (0, z.a)({
            queryKey: en(l, b),
            queryFn: function () {
              return J.ZP.downloadFromInterpreter(l, y, b)
                .then(function (e) {
                  return (
                    (null == e ? void 0 : e.status) === "success" &&
                      w(e.download_url),
                    e
                  );
                })
                .catch(function (e) {
                  var r = n("default_download_link_error", { fileName: b });
                  throw (
                    (void 0 !== e.code && (r = n(e.code)), null == t || t(r), e)
                  );
                });
            },
            enabled: !!(v && !g && l && y && b),
          })).data,
          C = (0, d.useCallback)(
            ((o = (0, U._)(function (e) {
              return (0, O.Jh)(this, function (t) {
                return (
                  void 0 !== u &&
                    (e.preventDefault(),
                    (void 0 === _ ||
                      (null == _ ? void 0 : _.status) === "error") &&
                      m.invalidateQueries({ queryKey: en(l, b) }),
                    (null == _ ? void 0 : _.status) == "success" &&
                    (null == _ ? void 0 : _.download_url)
                      ? w(_.download_url)
                      : x(!0)),
                  [2]
                );
              });
            })),
            function (e) {
              return o.apply(this, arguments);
            }),
            [u, _, b, w, l, m]
          );
        return (0, s.jsx)(K.u, {
          closeOnOutsideClick: !1,
          delayDuration: 0,
          label: (0, s.jsxs)("span", {
            className: "flex items-center gap-1",
            children: [
              v
                ? j.formatMessage(er.startingDownload)
                : j.formatMessage(er.downloadFile),
              v && (0, s.jsx)(Q.Z, {}),
            ],
          }),
          side: "top",
          sideOffset: 4,
          children: (0, s.jsx)(
            "a",
            (0, a._)((0, r._)({}, f), {
              className: "cursor-pointer",
              onClick: function (e) {
                return !v && C(e);
              },
            })
          ),
        });
      }
      function et(e) {
        return (0, s.jsx)(K.u, {
          closeOnOutsideClick: !1,
          delayDuration: 0,
          label: (0, s.jsx)("span", {
            className: "flex items-center gap-1",
            children: (0, s.jsx)(W.Z, (0, r._)({}, er.downloadUnavailable)),
          }),
          side: "top",
          sideOffset: 4,
          children: (0, s.jsx)(
            "span",
            (0, a._)((0, r._)({}, e), {
              className:
                "font-semibold text-gray-500 underline dark:text-gray-300",
            })
          ),
        });
      }
      function en(e, t) {
        return ["downloadSandboxLink", e, t];
      }
      var er = (0, V.vU)({
          downloadFile: {
            id: "SandboxDownload.downloadFile",
            defaultMessage: "Download file",
            description: "Tooltip label for downloading a file button",
          },
          startingDownload: {
            id: "SandboxDownload.startingDownload",
            defaultMessage: "Starting download",
            description:
              "Tooltip label for downloading started for file button",
          },
          downloadUnavailable: {
            id: "SandboxDownload.downloadUnavailable",
            defaultMessage: "File download not supported in a shared chat",
            description:
              "Tooltip label indicating file is unavailable to download for shared conversations",
          },
        }),
        ea = function (e) {
          return e.startsWith(X) ? e : (0, S.A)(e);
        },
        ei = [
          D.Z,
          [
            function () {
              let e = this.data();
              function t(t, n) {
                let r = e[t] ? e[t] : (e[t] = []);
                r.push(n);
              }
              t("micromarkExtensions", {
                flow: { [m.q.dollarSign]: w, [m.q.backslash]: y },
                text: {
                  [m.q.dollarSign]: {
                    tokenize: function (e, t, n) {
                      let r,
                        a,
                        i = 0;
                      return function (t) {
                        return (
                          e.enter("mathText"),
                          e.enter("mathTextSequence"),
                          (function t(r) {
                            return r === m.q.dollarSign
                              ? (e.consume(r), i++, t)
                              : i < 2
                              ? n(r)
                              : (e.exit("mathTextSequence"), s(r));
                          })(t)
                        );
                      };
                      function s(l) {
                        return l === m.q.eof
                          ? n(l)
                          : l === m.q.dollarSign
                          ? ((a = e.enter("mathTextSequence")),
                            (r = 0),
                            (function n(s) {
                              return s === m.q.dollarSign
                                ? (e.consume(s), r++, n)
                                : r === i
                                ? (e.exit("mathTextSequence"),
                                  e.exit("mathText"),
                                  t(s))
                                : ((a.type = "mathTextData"), o(s));
                            })(l))
                          : l === m.q.space
                          ? (e.enter("space"), e.consume(l), e.exit("space"), s)
                          : (0, v.Ch)(l)
                          ? (e.enter(b.V.lineEnding),
                            e.consume(l),
                            e.exit(b.V.lineEnding),
                            s)
                          : (e.enter("mathTextData"), o(l));
                      }
                      function o(t) {
                        return t === m.q.eof ||
                          t === m.q.space ||
                          t === m.q.dollarSign ||
                          (0, v.Ch)(t)
                          ? (e.exit("mathTextData"), s(t))
                          : (e.consume(t), o);
                      }
                    },
                    resolve: k,
                    previous: T,
                  },
                  [m.q.backslash]: [
                    {
                      tokenize: function (e, t, n) {
                        let r;
                        let a = [],
                          i = [],
                          s = this;
                        return function (t) {
                          return (
                            m.q.backslash,
                            M.call(s, s.previous) && s.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            (function t(r) {
                              return (a.join(","),
                              (r === m.q.backslash && 0 === a.length) ||
                                (r === m.q.leftParenthesis && 1 === a.length))
                                ? (e.consume(r), a.push(r), t)
                                : a.length < 2
                                ? n(r)
                                : (e.exit("mathTextSequence"), o(r));
                            })(t)
                          );
                        };
                        function o(s) {
                          return s === m.q.eof
                            ? n(s)
                            : s === m.q.backslash
                            ? ((r = e.enter("mathTextSequence")),
                              (i = []),
                              (function n(s) {
                                return (a.join(","),
                                (s === m.q.backslash && 0 === i.length) ||
                                  (s === m.q.rightParenthesis &&
                                    1 === i.length))
                                  ? (e.consume(s), i.push(s), n)
                                  : i.length === a.length
                                  ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    t(s))
                                  : ((r.type = "mathTextData"), l(s));
                              })(s))
                            : s === m.q.space
                            ? (e.enter("space"),
                              e.consume(s),
                              e.exit("space"),
                              o)
                            : (0, v.Ch)(s)
                            ? (e.enter(b.V.lineEnding),
                              e.consume(s),
                              e.exit(b.V.lineEnding),
                              o)
                            : (e.enter("mathTextData"), l(s));
                        }
                        function l(t) {
                          return t === m.q.eof ||
                            t === m.q.space ||
                            t === m.q.backslash ||
                            (0, v.Ch)(t)
                            ? (e.exit("mathTextData"), o(t))
                            : (e.consume(t), l);
                        }
                      },
                      resolve: C,
                      previous: M,
                    },
                    {
                      tokenize: function (e, t, n) {
                        let r;
                        let a = [],
                          i = [],
                          s = this;
                        return function (t) {
                          return (
                            m.q.backslash,
                            P.call(s, s.previous) && s.previous,
                            e.enter("mathText"),
                            e.enter("mathTextSequence"),
                            (function t(r) {
                              return (a.join(","),
                              (r === m.q.backslash && 0 === a.length) ||
                                (r === m.q.leftSquareBracket && 1 === a.length))
                                ? (e.consume(r), a.push(r), t)
                                : a.length < 2
                                ? n(r)
                                : (e.exit("mathTextSequence"), o(r));
                            })(t)
                          );
                        };
                        function o(s) {
                          return s === m.q.eof
                            ? n(s)
                            : s === m.q.backslash
                            ? ((r = e.enter("mathTextSequence")),
                              (i = []),
                              (function n(s) {
                                return (a.join(","),
                                (s === m.q.backslash && 0 === i.length) ||
                                  (s === m.q.rightSquareBracket &&
                                    1 === i.length))
                                  ? (e.consume(s), i.push(s), n)
                                  : i.length === a.length
                                  ? (e.exit("mathTextSequence"),
                                    e.exit("mathText"),
                                    t(s))
                                  : ((r.type = "mathTextData"), l(s));
                              })(s))
                            : s === m.q.space
                            ? (e.enter("space"),
                              e.consume(s),
                              e.exit("space"),
                              o)
                            : (0, v.Ch)(s)
                            ? (e.enter(b.V.lineEnding),
                              e.consume(s),
                              e.exit(b.V.lineEnding),
                              o)
                            : (e.enter("mathTextData"), l(s));
                        }
                        function l(t) {
                          return t === m.q.eof ||
                            t === m.q.space ||
                            t === m.q.backslash ||
                            (0, v.Ch)(t)
                            ? (e.exit("mathTextData"), o(t))
                            : (e.consume(t), l);
                        }
                      },
                      resolve: N,
                      previous: P,
                    },
                  ],
                },
              }),
                t("fromMarkdownExtensions", (0, g.N)()),
                t("toMarkdownExtensions", (0, g.O)());
            },
            { singleDollarTextMath: !1 },
          ],
        ],
        es = [
          [
            I.Z,
            {
              languages: { mathematica: Z.Z },
              detect: !0,
              subset: [
                "arduino",
                "bash",
                "c",
                "cpp",
                "csharp",
                "css",
                "diff",
                "go",
                "graphql",
                "java",
                "javascript",
                "json",
                "kotlin",
                "latex",
                "less",
                "lua",
                "makefile",
                "makefile",
                "markdown",
                "matlab",
                "mathematica",
                "nginx",
                "objectivec",
                "perl",
                "pgsql",
                "php-template",
                "php",
                "plaintext",
                "python-repl",
                "python",
                "r",
                "ruby",
                "rust",
                "scss",
                "shell",
                "sql",
                "swift",
                "typescript",
                "vbnet",
                "wasm",
                "xml",
                "yaml",
              ],
              ignoreMissing: !0,
              aliases: { mathematica: "wolfram" },
            },
          ],
          F.Z,
          [E.Z, { newlines: !0 }],
        ],
        eo = {
          code: function (e) {
            var t = e.inline,
              n = e.node,
              o = e.className,
              l = e.children,
              u = (0, i._)(e, ["inline", "node", "className", "children"]);
            if (t) {
              var d = (0, L.B)(n),
                c = (0, A.T$)(d);
              return c
                ? (0, s.jsx)(A.s8, { displayInfo: c })
                : (0, s.jsx)(
                    "code",
                    (0, a._)((0, r._)({ className: o }, u), { children: l })
                  );
            }
            var f,
              h =
                null ===
                  (f =
                    null == o
                      ? void 0
                      : o.split(" ").filter(function (e) {
                          return e.startsWith("language-");
                        })) || void 0 === f
                  ? void 0
                  : f[0],
              g = h ? h.split("-")[1] : "";
            return (0, s.jsx)(R.Z, {
              language: g,
              className: o,
              content: (0, L.B)(n),
              children: l,
            });
          },
        };
      function el(e) {
        var t = e.size,
          n = e.children,
          g = e.className,
          m = e.clientThreadId,
          p = e.messageId,
          v = (0, u.F)().theme,
          x = (0, f.hz)().has("tools2"),
          b = (0, d.useContext)(h.gB),
          y = (0, d.useMemo)(
            function () {
              return (0, a._)((0, r._)({}, eo), {
                a: function (e) {
                  var t = e.node,
                    n = (0, i._)(e, ["node"]),
                    a = t.properties.href;
                  return b && a.startsWith(X)
                    ? (0, s.jsx)(et, (0, r._)({}, n))
                    : x && a.startsWith(X)
                    ? (0, s.jsx)(
                        ee,
                        (0, r._)({ clientThreadId: m, messageId: p }, n)
                      )
                    : (0, s.jsx)("a", (0, r._)({}, n));
                },
                img: function (e) {
                  var t = e.node,
                    n = (0, i._)(e, ["node"]),
                    a = t.properties.src;
                  return a.startsWith(X) || a.startsWith("attachment:")
                    ? null
                    : (0, s.jsx)("img", (0, r._)({}, n));
                },
              });
            },
            [x, m, b, p]
          );
        return (0, s.jsx)(o.SV, {
          fallback: function () {
            return (0, s.jsx)(s.Fragment, { children: n });
          },
          children: (0, s.jsx)(c.D, {
            rehypePlugins: es,
            remarkPlugins: ei,
            linkTarget: "_new",
            className: (0, l.Z)(
              g,
              "markdown prose w-full break-words dark:prose-invert",
              "dark" === v ? "dark" : "light",
              "small" === (void 0 === t ? "medium" : t) && "prose-xs"
            ),
            transformLinkUri: ea,
            components: y,
            children: n,
          }),
        });
      }
    },
    63390: function (e, t, n) {
      n.d(t, {
        Cf: function () {
          return ek;
        },
        ZP: function () {
          return eM;
        },
        xz: function () {
          return eT;
        },
      });
      var r,
        a = n(39324),
        i = n(70216),
        s = n(4337),
        o = n(35250),
        l = n(19841),
        u = n(68555),
        d = n(70079),
        c = n(34303),
        f = n(75179),
        h = n(64135),
        g = n(88038),
        m = n(75527),
        p = n(36716),
        v = n(59710),
        x = n(56244),
        b = n(66958),
        y = n(30931),
        j = n(87105),
        w = n(22830),
        _ = n(2827),
        C = n(82841),
        M = n(36218),
        k = n(69403);
      function T() {
        var e = (0, s._)(["text-center mt-2 flex justify-center"]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = (0, s._)(["flex gap-2 flex-wrap mt-2"]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      var P = c.Z.div(T());
      function Z(e) {
        var t = e.initialText,
          n = e.role,
          r = e.clientThreadId,
          a = e.currentLeaf,
          i = e.onUpdateNode,
          s = e.onChangeItemInView,
          l = e.onExitEdit,
          u = e.onDeleteNode,
          c = e.onRequestCompletion,
          f = e.onCreateEditNode,
          h = e.disabled,
          g = e.attachments,
          p = (0, C.WS)(),
          v = (0, d.useId)(),
          x = "".concat(a, "-").concat(v),
          j = (0, w._)((0, d.useState)(null != t ? t : ""), 2),
          T = j[0],
          N = j[1],
          Z = (0, d.useRef)(null);
        (0, d.useEffect)(function () {
          f(a, x, null != t ? t : "", g ? { attachments: g } : void 0);
        }, []);
        var I = (0, d.useCallback)(function (e) {
            N(e.currentTarget.value);
          }, []),
          F = (0, d.useCallback)(
            function () {
              i(x, T), s(x), c(k.Os.Next, x, { eventSource: "mouse" }, !0), l();
            },
            [i, x, T, s, c, l]
          ),
          E = (0, d.useCallback)(
            function () {
              u(x),
                s(a),
                l(),
                p(
                  n === k.uU.User
                    ? M.s6.cancelEditPrompt
                    : M.s6.cancelEditCompletion,
                  { threadId: m.tQ.getServerThreadId(r) }
                );
            },
            [x, a, p, s, u, l, n, r]
          );
        (0, d.useEffect)(
          function () {
            var e = Z.current,
              t = function (e) {
                "Enter" === e.key && e.metaKey
                  ? F()
                  : "Escape" === e.key && E();
              };
            return (
              e && e.addEventListener("keydown", t),
              function () {
                e && e.removeEventListener("keydown", t);
              }
            );
          },
          [E, F]
        );
        var D = g && g.length > 0;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(_.ZP, {
              ref: Z,
              value: T,
              onChange: I,
              className:
                "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0",
            }),
            D &&
              (0, o.jsx)(S, {
                children: g.map(function (e) {
                  return (0, o.jsx)(y.Z, { file: e.name }, e.url);
                }),
              }),
            (0, o.jsxs)(P, {
              children: [
                (0, o.jsx)(b.z, {
                  as: "button",
                  onClick: F,
                  className: "mr-2",
                  disabled: h,
                  children: "Save & Submit",
                }),
                (0, o.jsx)(b.z, {
                  as: "button",
                  color: "neutral",
                  onClick: E,
                  children: "Cancel",
                }),
              ],
            }),
          ],
        });
      }
      var S = c.Z.div(N()),
        I = n(21722),
        F = n(39889),
        E = n(10642),
        D = n(47635),
        L = n(32787),
        A = n(24274),
        R = n(75515),
        U = n(180);
      function B() {
        var e = (0, s._)(["text-xs text-black\n", ""]);
        return (
          (B = function () {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = (0, s._)(["relative w-full overflow-hidden pt-[67%]"]);
        return (
          (O = function () {
            return e;
          }),
          e
        );
      }
      function q(e) {
        var t,
          n = e.title,
          r = e.url,
          a = e.imageUrl,
          i = e.logoUrl,
          s = e.className,
          u = e.mini,
          c = !!a,
          f = (0, C.WS)(),
          h = (0, d.useCallback)(
            function () {
              f(M.s6.carouselCardClick, { content: r });
            },
            [f, r]
          );
        try {
          t = D.get(new URL(r).hostname);
        } catch (e) {
          return console.error("Invalid card url: ", e), null;
        }
        return (0, o.jsxs)(r ? "a" : "div", {
          className: (0, l.Z)(
            "flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]",
            s
          ),
          href: r,
          target: r ? "_blank" : "",
          onClick: h,
          children: [
            c &&
              (0, o.jsx)(H, {
                children: (0, o.jsx)("div", {
                  className: "absolute inset-0",
                  children: (0, o.jsx)("img", {
                    src: a,
                    alt: "image of ".concat(n),
                    className:
                      "h-full w-full border-b border-black/10 object-cover",
                  }),
                }),
              }),
            (0, o.jsxs)("div", {
              className: "flex flex-1 flex-col justify-between gap-1.5 p-3",
              children: [
                (0, o.jsx)(z, {
                  $clamp: (void 0 !== u && u) || c,
                  children: n,
                }),
                (0, o.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    i
                      ? (0, o.jsx)(R.Z, { url: i, name: t, size: 13 })
                      : (0, o.jsx)(U.Z, { url: r, size: 13 }),
                    (0, o.jsx)("div", {
                      className:
                        "text-[10px] leading-3 text-gray-500 line-clamp-1",
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var z = c.Z.div(B(), function (e) {
          return e.$clamp && "line-clamp-2";
        }),
        H = c.Z.div(O()),
        W = n(96237),
        V = n(21260),
        J = n(52422),
        G = n(95182),
        $ = n.n(G),
        Q = n(1454),
        Y = n(77442),
        K = n(38317);
      function X(e) {
        var t = e.disabled,
          n = e.onClick,
          r = e.left,
          a = e.children;
        return (0, o.jsx)("button", {
          disabled: t,
          onClick: n,
          "aria-disabled": t,
          className: (0, l.Z)(
            "flex h-6 w-[30px] items-center justify-center rounded-full",
            "bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white",
            "transition-opacity disabled:opacity-20",
            "cursor-pointer disabled:cursor-auto",
            "absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2",
            void 0 !== r && r
              ? "left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full"
              : "left-1/2 translate-x-1 lg:-right-3 lg:left-auto lg:translate-x-full",
            t && "lg:hidden"
          ),
          children: a,
        });
      }
      var ee = n(70575),
        et = function (e) {
          var t = e.x,
            n = e.children,
            r = e.className;
          return (0, o.jsx)(ee.E.div, {
            className: (0, l.Z)(
              "mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]",
              r
            ),
            style: { x: t },
            children: n,
          });
        },
        en = { type: "spring", bounce: 0 },
        er = (0, d.forwardRef)(function (e, t) {
          return (0,
          o.jsx)("div", { ref: t, className: (0, l.Z)("relative flex h-full w-full overflow-hidden", e.className), children: e.children });
        });
      er.displayName = "CarouselContainer";
      var ea =
        ((r = {}),
        (0, W._)(r, Y._G.Mobile, 1),
        (0, W._)(r, Y._G.Small, 2),
        (0, W._)(r, Y._G.Medium, 2),
        (0, W._)(r, Y._G.Large, 3),
        (0, W._)(r, Y._G.XLarge, 3),
        r);
      function ei(e) {
        var t = e.children,
          n = e.loop,
          r = void 0 === n || n,
          a = e.className,
          i = (0, V.c)(0),
          s = (0, d.useRef)(null),
          u = (0, w._)((0, d.useState)(0), 2),
          c = u[0],
          f = u[1],
          h = ea[(0, Y.dQ)()] || 1,
          g = d.Children.count(t) > h,
          m = d.Children.toArray(t),
          p = (0, d.useCallback)(
            function () {
              var e,
                t =
                  null === (e = s.current) || void 0 === e
                    ? void 0
                    : e.clientWidth;
              return t ? -Math.floor(c / h) * (t + 12) : 0;
            },
            [h, c]
          ),
          v = (0, d.useCallback)(
            function (e) {
              var t = h * e;
              r
                ? f(function (e) {
                    return ((e + t) % m.length) - 1;
                  })
                : f(function (e) {
                    return $()(e + t, 0, m.length - 1);
                  });
            },
            [m.length, r, h]
          ),
          x = (0, d.useCallback)(
            function () {
              v(1);
            },
            [v]
          ),
          b = (0, d.useCallback)(
            function () {
              v(-1);
            },
            [v]
          ),
          y = (0, w._)(
            (0, d.useMemo)(
              function () {
                if (r) return [!0, !0];
                var e = c < m.length - h;
                return [c > 0, e];
              },
              [m.length, c, r, h]
            ),
            2
          ),
          j = y[0],
          _ = y[1];
        return (
          (0, d.useEffect)(
            function () {
              return (0, J.j)(i, p(), en).stop;
            },
            [p, c, i]
          ),
          (0, o.jsxs)("div", {
            className: (0, l.Z)(
              "relative h-full w-full",
              a,
              g && "mb-12 lg:mb-0"
            ),
            children: [
              (0, o.jsx)(er, {
                ref: s,
                children: m.map(function (e, t) {
                  return (0, o.jsx)(et, { x: i, children: e }, t);
                }),
              }),
              g &&
                (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(X, {
                      onClick: b,
                      left: !0,
                      disabled: !j,
                      children: (0, o.jsx)(K.ZP, { icon: Q.YFh }),
                    }),
                    (0, o.jsx)(X, {
                      onClick: x,
                      disabled: !_,
                      children: (0, o.jsx)(K.ZP, { icon: Q.Tfp }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      var es = n(31721),
        eo = new Set([
          "og:site_name",
          "og:title",
          "og:description",
          "og:image",
          "og:url",
        ]),
        el = {
          "og:site_name": "metadataTitle",
          "og:title": "title",
          "og:description": "description",
          "og:image": "imageUrl",
          "og:url": "url",
        },
        eu =
          /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        ed = d.memo(function (e) {
          var t,
            n,
            r = e.urls,
            a = (0, es.v)(),
            i =
              ((t = (0, L.kP)().session),
              (n = (0, E.h)({
                queries: r.map(function (e) {
                  return {
                    queryKey: ["opengraph", e],
                    queryFn: (0, I._)(function () {
                      return (0, F.Jh)(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return [4, A.ZP.getPageMetadata({ url: e })];
                          case 1:
                            return [2, t.sent()];
                        }
                      });
                    }),
                    enabled: !!(e && (null == t ? void 0 : t.accessToken)),
                    retry: !1,
                  };
                }),
              })),
              (0, d.useMemo)(
                function () {
                  return n
                    .map(function (e, t) {
                      var n = e.data,
                        a = e.isError,
                        i = e.isLoading,
                        s = r[t];
                      if (a || i) return null;
                      var o = n.tags.reduce(function (e, t) {
                        return eo.has(t.type) && (e[el[t.type]] = t.value), e;
                      }, {});
                      try {
                        var l,
                          u = s.split(/[#?]/)[0],
                          d =
                            null === (l = o.url) || void 0 === l
                              ? void 0
                              : l.endsWith("/login"),
                          c = o.url && "/" === new URL(o.url || "").pathname;
                        if (u !== o.url && (d || c)) return null;
                      } catch (e) {
                        return null;
                      }
                      return (o.url = s), o;
                    })
                    .filter(Boolean);
                },
                [n, r]
              )),
            s = (0, d.useMemo)(
              function () {
                return !i.some(function (e) {
                  return !!(null == e ? void 0 : e.imageUrl);
                });
              },
              [i]
            ),
            l = (0, d.useMemo)(
              function () {
                return a.reduce(function (e, t) {
                  return (e[D.get(t.domain)] = t.manifest.logo_url), e;
                }, {});
              },
              [a]
            ),
            u = (0, d.useMemo)(
              function () {
                return i.map(function (e) {
                  var t, n;
                  if (!e) return null;
                  try {
                    t = D.get(new URL(e.url).hostname);
                  } catch (e) {
                    return console.error("Invalid card url: ", e), null;
                  }
                  return (
                    t in l && (n = l[t]),
                    (0, o.jsx)(
                      q,
                      {
                        title: e.title || "",
                        url: e.url,
                        imageUrl: e.imageUrl,
                        logoUrl: n,
                        mini: s,
                      },
                      e.url
                    )
                  );
                });
              },
              [i, s, l]
            );
          return 0 === i.length
            ? null
            : (0, o.jsx)(ei, { loop: !1, children: u });
        }),
        ec = n(5046),
        ef = n(24396),
        eh = n(19208),
        eg = n.n(eh),
        em = n(75908),
        ep = n(3001),
        ev = n(25094),
        ex = n(19265);
      function eb() {
        var e = (0, s._)([
          "max-w-lg dark:bg-gray-700 dark:text-gray-400 bg-gray-100 text-gray-500 h-auto rounded-md overflow-hidden flex items-center justify-center",
        ]);
        return (
          (eb = function () {
            return e;
          }),
          e
        );
      }
      function ey(e) {
        var t,
          n = e.asset,
          r = n.asset_pointer,
          a = n.width,
          i = n.height,
          s = (0, em.Z)(),
          u =
            ((t = (0, ev.Iy)(r)),
            (0, ef.a)({
              queryKey: ["getFileDownloadLink", t],
              queryFn: (0, I._)(function () {
                return (0, F.Jh)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        A.ZP.getFileDownloadLink(t).catch(function (e) {
                          throw (
                            (console.error(
                              "Could not fetch file with ID ".concat(
                                t,
                                " from file service"
                              ),
                              e.message
                            ),
                            e)
                          );
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              }),
            })),
          c = u.data,
          f = u.isLoading,
          h = null == c ? void 0 : c.download_url,
          g = (0, d.useRef)(null),
          m = (0, w._)((0, d.useState)(!1), 2),
          p = m[0],
          v = m[1];
        (0, d.useEffect)(
          function () {
            var e;
            (null === (e = g.current) || void 0 === e ? void 0 : e.complete) ||
              v(!1);
          },
          [r]
        );
        var x = f || !p;
        return "string" == typeof h
          ? (0, o.jsx)(ej, {
              children: (0, o.jsx)(eg(), {
                alt: s.formatMessage(ew.alt),
                src: h,
                width: a,
                height: i,
                unoptimized: !0,
                ref: g,
                onLoadingComplete: function () {
                  return v(!0);
                },
                className: (0, l.Z)(
                  "max-w-lg rounded-md transition-opacity duration-300",
                  p ? "opacity-100" : "opacity-0"
                ),
              }),
            })
          : (0, o.jsx)(ej, {
              style: { aspectRatio: "".concat(a, " / ").concat(i), width: a },
              title: x
                ? s.formatMessage(ew.loading)
                : s.formatMessage(ew.error),
              children: x ? (0, o.jsx)(ex.Z, {}) : (0, o.jsx)(Q.BJv, {}),
            });
      }
      var ej = c.Z.div(eb()),
        ew = (0, ep.vU)({
          loading: {
            id: "imageAsset.loading",
            defaultMessage: "Loading...",
            description: "Text that describes a loading image",
          },
          error: {
            id: "imageAsset.error",
            defaultMessage: "Could not load image",
            description: "Text that describes an image that failed to load",
          },
          alt: {
            id: "imageAsset.alt",
            defaultMessage: "Uploaded image",
            description: "Alt text for image asset",
          },
        });
      function e_() {
        var e = (0, s._)(["flex gap-2 flex-wrap"]);
        return (
          (e_ = function () {
            return e;
          }),
          e
        );
      }
      function eC() {
        var e = (0, s._)([
          "\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n",
          "\n",
          "\n",
          "\n",
        ]);
        return (
          (eC = function () {
            return e;
          }),
          e
        );
      }
      var eM = d.memo(function (e) {
        var t,
          n,
          r,
          s = e.message,
          l = e.isEditing,
          u = e.format,
          c = e.isCompletionInProgress,
          f = e.className,
          h = e.isCompletion,
          g = e.isResponseToPluginMessage,
          m = (0, i._)(e, [
            "message",
            "isEditing",
            "format",
            "isCompletionInProgress",
            "className",
            "isCompletion",
            "isResponseToPluginMessage",
          ]),
          p = (0, d.useMemo)(
            function () {
              return "parts" in s.message.content
                ? s.message.content.parts
                : [(0, x.RR)(s.message)];
            },
            [s]
          );
        return l
          ? (0, o.jsx)(
              Z,
              (0, a._)(
                {
                  currentLeaf: s.nodeId,
                  initialText: (0, x.RR)(s.message),
                  role: s.message.author.role,
                  attachments:
                    null === (r = s.message.metadata) || void 0 === r
                      ? void 0
                      : r.attachments,
                },
                m
              )
            )
          : (0, o.jsx)(ek, {
              parts: p,
              errCode: s.errCode,
              err: s.err,
              flag: s.errType,
              isCompletionInProgress: c,
              format: u,
              className: f,
              citations:
                null === (t = s.message.metadata) || void 0 === t
                  ? void 0
                  : t.citations,
              attachments:
                null === (n = s.message.metadata) || void 0 === n
                  ? void 0
                  : n.attachments,
              isCompletion: h,
              id: s.nodeId,
              onRequestMoreCompletions: m.onRequestMoreCompletions,
              clientThreadId: m.clientThreadId,
              showExtractedLinkCards: g,
            });
      });
      function ek(e) {
        var t,
          n,
          r,
          a = e.attachments,
          i = e.citations,
          s = e.className,
          u = e.err,
          c = e.errCode,
          m = e.flag,
          x = e.format,
          b = e.isCompletionInProgress,
          w = e.size,
          _ = void 0 === w ? "medium" : w,
          C = e.parts,
          M = e.isCompletion,
          k = e.id,
          T = e.onRequestMoreCompletions,
          N = e.clientThreadId,
          P = e.showExtractedLinkCards,
          Z = !C.some(function (e) {
            return "" !== e;
          }),
          S = u && Z,
          I = c === f.Dd,
          F = (0, h.hz)(),
          E =
            ((n = (t = {
              text: C.map(function (e) {
                return "string" == typeof e ? e : "";
              }).join(""),
              isCompletionInProgress: b,
            }).text),
            (r = t.isCompletionInProgress),
            (0, d.useMemo)(
              function () {
                if (r) return [];
                var e = n.match(eu);
                return Array.from(new Set(e));
              },
              [r, n]
            )),
          D = (0, d.useMemo)(
            function () {
              switch (c) {
                case f.Dd:
                  return (0, o.jsx)(eS, {
                    $flag: m,
                    children: (0, o.jsx)(eP, {}),
                  });
                case ec.uU:
                  if (F.has("model_preview"))
                    return (0, o.jsx)(eN, {
                      id: k,
                      onRequestMoreCompletions: T,
                      flag: m,
                      clientThreadId: N,
                    });
                  return (0, o.jsx)(eS, { $flag: m, children: u });
                case v.wp:
                  return (0, o.jsx)(eS, {
                    $flag: m,
                    children:
                      "Sorry, conversations created when Chat History is off expire after 6 hours of inactivity. Please start a new conversation to continue using ChatGPT.",
                  });
                default:
                  return (0, o.jsx)(eS, { $flag: m, children: u });
              }
            },
            [u, c, F, m, k, T, N]
          ),
          L = (0, h.hz)().has(g.FZ),
          A = a && a.length > 0 && !M;
        return (0, o.jsxs)("div", {
          className: (0, l.Z)(
            s,
            "flex items-start overflow-x-auto whitespace-pre-wrap break-words",
            "danger" === m ? "flex-row gap-2 text-red-500" : "flex-col gap-4",
            "warning" === m && "text-orange-500",
            L && "text-base"
          ),
          children: [
            C.map(function (e, t) {
              return "string" == typeof e
                ? S || I || !x
                  ? (0, o.jsx)(
                      "div",
                      {
                        className: "empty:hidden",
                        children: "danger" === m && I ? null : e,
                      },
                      t
                    )
                  : (0, o.jsx)(
                      j.Z,
                      {
                        clientThreadId: N,
                        messageId: k,
                        size: _,
                        className: (0, l.Z)(
                          "danger" !== m && b && "result-streaming",
                          "danger" === m && "text-red-500",
                          "warning" === m && "text-orange-500"
                        ),
                        children: "" === e ? "&#8203;" : (0, p.Qd)(e, i),
                      },
                      t
                    )
                : (0, o.jsx)(ey, { asset: e }, t);
            }),
            A &&
              (0, o.jsx)(eZ, {
                children: a.map(function (e) {
                  return (0, o.jsx)(y.Z, { file: e.name }, e.url);
                }),
              }),
            M && P && E.length > 0 && (0, o.jsx)(ed, { urls: E }),
            m && D,
          ],
        });
      }
      function eT(e) {
        var t = e && new Date(e),
          n = t && new Date(t);
        return n
          ? "after "
              .concat(n.getHours() % 12 || 12, ":")
              .concat(10 > n.getMinutes() ? "0" : "")
              .concat(n.getMinutes(), " ")
              .concat(n.getHours() >= 12 ? "PM" : "AM")
          : "later";
      }
      function eN(e) {
        var t = e.id,
          n = e.onRequestMoreCompletions,
          r = e.flag,
          a = e.clientThreadId,
          i = (0, u.useRouter)(),
          s = (0, ec.Y8)(function (e) {
            return e.isoDate;
          }),
          l = eT(s),
          c = (0, d.useCallback)(
            function () {
              n(t, { eventSource: "mouse" }, !0, "none", !1);
            },
            [t, n]
          ),
          f = (0, d.useCallback)(
            function () {
              var e = void 0 !== a ? m.tQ.getServerThreadId(a) : void 0;
              void 0 === e
                ? i.replace("/", void 0, { shallow: !0 })
                : (0, ec.m0)(e),
                n(t, { eventSource: "mouse" }, !0, "none", !0);
            },
            [t, n, i, a]
          ),
          h = s
            ? (0, o.jsxs)("span", {
                children: [
                  "You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again ".concat(
                    l,
                    "."
                  ),
                  " ",
                  (0, o.jsx)("a", {
                    href: "https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "underline",
                    children: "Learn more",
                  }),
                ],
              })
            : "You previously reached your usage cap for GPT-4, but you can now try sending your message again";
        return (0, o.jsx)(eS, {
          $flag: !!s && r,
          children: (0, o.jsxs)("div", {
            className: "flex items-center gap-6",
            children: [
              h,
              !s &&
                (0, o.jsx)(b.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: c,
                  children: "Try again",
                }),
              s &&
                (0, o.jsx)(b.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: f,
                  children: "Use default model",
                }),
            ],
          }),
        });
      }
      function eP() {
        return (0, o.jsxs)(o.Fragment, {
          children: [
            "This content may violate our",
            " ",
            (0, o.jsx)("a", {
              target: "_blank",
              href: "https://platform.openai.com/docs/usage-policies/content-policy",
              rel: "noreferrer",
              className: "bold underline",
              children: "content policy",
            }),
            ". If you believe this to be in error, please",
            " ",
            (0, o.jsx)("a", {
              target: "_blank",
              href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
              rel: "noreferrer",
              className: "bold underline",
              children: "submit your feedback",
            }),
            " ",
            "— your input will aid our research in this area.",
          ],
        });
      }
      var eZ = c.Z.div(e_()),
        eS = c.Z.div(
          eC(),
          function (e) {
            return (
              "warning" === e.$flag && "border-orange-500 bg-orange-500/10"
            );
          },
          function (e) {
            return "danger" === e.$flag && "border-red-500 bg-red-500/10";
          },
          function (e) {
            return !e.$flag && "border-green-500 bg-green-500/10";
          }
        );
    },
    94860: function (e, t, n) {
      n.d(t, {
        DM: function () {
          return y;
        },
        R: function () {
          return _;
        },
        Vq: function () {
          return C;
        },
        ZB: function () {
          return j;
        },
        ZP: function () {
          return b;
        },
        zV: function () {
          return w;
        },
      });
      var r = n(39324),
        a = n(4337),
        i = n(35250),
        s = n(9849),
        o = n(19841),
        l = n(1454),
        u = n(35290),
        d = n(3001),
        c = n(34303),
        f = n(38317),
        h = n(36112);
      function g() {
        var e = (0, a._)([
          "p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = (0, a._)([
          "flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = (0, a._)([
          "rounded-md border border-white/20 hover:bg-gray-500/10 h-11",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = (0, a._)(["my-1.5 h-px bg-white/20"]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = (0, a._)(["", ""]);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      function b(e) {
        var t = e.onClick,
          n = e.href,
          r = e.target,
          a = e.children;
        return (0, i.jsx)(s.v.Item, {
          children: function (e) {
            var s = e.active;
            return (0, i.jsx)(j, {
              as: void 0 !== n ? "a" : "button",
              onClick: t,
              href: n,
              target: r,
              className: (0, o.Z)(s ? "bg-gray-700" : "hover:bg-gray-700"),
              children: a,
            });
          },
        });
      }
      function y(e) {
        var t = e.onDeleteHistory,
          n = e.isConfirmingDeleteHistory,
          a = (0, h.LC)();
        return (0, i.jsx)(i.Fragment, {
          children:
            a &&
            (0, i.jsxs)(b, {
              onClick: t,
              children: [
                (0, i.jsx)(f.ZP, { icon: n ? l.UgA : l.Ybf }),
                n
                  ? (0, i.jsx)(u.Z, (0, r._)({}, M.confirmClearConversations))
                  : (0, i.jsx)(u.Z, (0, r._)({}, M.clearConversations)),
              ],
            }),
        });
      }
      c.Z.a(g());
      var j = c.Z.a(m()),
        w = (0, c.Z)(j)(p()),
        _ = c.Z.div(v()),
        C = (0, c.Z)(j)(x(), function (e) {
          return e.$active ? "bg-gray-800" : "hover:bg-gray-800";
        }),
        M = (0, d.vU)({
          confirmClearConversations: {
            id: "workspacePopoverNavigation.confirmClearConversations",
            defaultMessage: "Confirm clear conversations",
            description: "Confirmation text for clearing conversations",
          },
          clearConversations: {
            id: "workspacePopoverNavigation.clearConversations",
            defaultMessage: "Clear conversations",
            description: "Clear conversations menu item",
          },
        });
    },
    61119: function (e, t, n) {
      n.d(t, {
        Ds: function () {
          return C;
        },
        OS: function () {
          return _;
        },
        ZP: function () {
          return M;
        },
      });
      var r = n(21722),
        a = n(22830),
        i = n(39889),
        s = n(35250),
        o = n(35448),
        l = n(70079),
        u = n(1454),
        d = n(81292),
        c = n(32787),
        f = n(64135),
        h = n(88038),
        g = n(66958),
        m = n(48101),
        p = n(19265),
        v = n(97688),
        x = n(17915),
        b = n(86573),
        y = n(38631),
        j = n(49910),
        w = n(697),
        _ = (0, d.ZP)(function () {
          return { isOpen: !1 };
        }),
        C = {
          close: function () {
            _.setState({ isOpen: !1 });
          },
          setIsOpen: function (e) {
            _.setState({ isOpen: e });
          },
        };
      function M(e) {
        var t = e.slideOver,
          n = (0, a._)((0, l.useState)(), 2),
          d = n[0],
          M = n[1],
          k = (0, a._)((0, l.useState)(!1), 2),
          T = k[0],
          N = k[1],
          P = (0, a._)((0, l.useState)(!1), 2),
          Z = P[0],
          S = P[1],
          I = (0, a._)((0, l.useState)(!1), 2),
          F = I[0],
          E = I[1],
          D = (0, c.kP)().session,
          L = (0, f.hz)(),
          A =
            ((null == D ? void 0 : D.user) != null && (0, c.yl)(D.user)) ||
            L.has(h.YI),
          R = (0, o.NL)(),
          U = _(function (e) {
            return e.isOpen;
          }),
          B = (0, w.p0)(),
          O = (0, x.sd)().fetchManifestAndSpec,
          q = (0, l.useMemo)(
            function () {
              return A ? B[0] : B.find(b.cf);
            },
            [B, A]
          ),
          z = (0, l.useCallback)(
            (0, r._)(function () {
              return (0, i.Jh)(this, function (e) {
                return (
                  q &&
                    (M(void 0),
                    O({
                      domain: q.domain,
                      onSuccess: function (e) {
                        M({
                          manifestValidationInfo:
                            e.scrapeManifestResponse.manifest_validation_info,
                          apiValidationInfo: e.apiValidationInfo,
                        }),
                          null != e.scrapeManifestResponse.plugin &&
                            (0, x.aU)(e.scrapeManifestResponse.plugin, R, [
                              "installedAip",
                            ]);
                      },
                      onError: function (e) {
                        v.m.danger(
                          (null == e ? void 0 : e.message) ||
                            "Error refreshing plugin."
                        );
                      },
                    })),
                  [2]
                );
              });
            }),
            [q, R, O]
          );
        return ((0, l.useEffect)(
          function () {
            U && z();
          },
          [U, z]
        ),
        L.has(h.Wk))
          ? (0, s.jsx)(m.ZP, {
              icon: u.V7f,
              title: "Plugin devtools",
              isOpen: U,
              slideOver: t,
              onClose: C.close,
              children: (0, s.jsx)("div", {
                className:
                  "border-t border-gray-100 p-2 text-sm dark:border-gray-700",
                children:
                  null != q
                    ? (0, s.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, s.jsx)("div", {
                            children: (0, s.jsx)(g.z, {
                              size: "small",
                              color: "neutral",
                              onClick: z,
                              children: "Refresh plugin",
                            }),
                          }),
                          d
                            ? (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)(y.Z, { plugin: q }),
                                  (0, s.jsxs)("div", {
                                    children: ["Plugin id: ", q.id],
                                  }),
                                  (0, s.jsx)(j.rC, {
                                    manifestValidationInfo:
                                      d.manifestValidationInfo,
                                    expanded: T,
                                    onChangeExpanded: N,
                                  }),
                                  null != d.apiValidationInfo &&
                                    (0, s.jsxs)(s.Fragment, {
                                      children: [
                                        (0, s.jsx)(j.q6, {
                                          apiValidationInfo:
                                            d.apiValidationInfo,
                                          expanded: Z,
                                          onChangeExpanded: S,
                                        }),
                                        (0, s.jsx)(j.bf, {
                                          apiValidationInfo:
                                            d.apiValidationInfo,
                                          expanded: F,
                                          onChangeExpanded: E,
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : (0, s.jsx)("div", {
                                className: "self-center",
                                children: (0, s.jsx)(p.Z, {}),
                              }),
                        ],
                      })
                    : (0, s.jsxs)("div", {
                        className: "mt-4 text-center",
                        children: [
                          "Please enable a localhost plugin",
                          " ",
                          A && " (or any plugin if you're a plugin reviewer) ",
                          "to use devtools.",
                        ],
                      }),
              }),
            })
          : null;
      }
    },
    38631: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(35250),
        a = n(75515);
      function i(e) {
        var t = e.plugin,
          n = t.manifest.name_for_human;
        return (0, r.jsxs)("div", {
          className: "flex gap-4 rounded bg-gray-50 px-4 py-2 dark:bg-gray-800",
          children: [
            (0, r.jsx)(a.Z, {
              url: t.manifest.logo_url,
              name: n,
              size: 32,
              className: "flex-shrink-0",
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col gap-1",
              children: [
                (0, r.jsx)("h2", {
                  className: "align-top text-base font-medium",
                  children: n,
                }),
                (0, r.jsx)("div", {
                  className: "text-sm",
                  children: t.manifest.description_for_human,
                }),
              ],
            }),
          ],
        });
      }
    },
    49910: function (e, t, n) {
      n.d(t, {
        bf: function () {
          return f;
        },
        q6: function () {
          return c;
        },
        rC: function () {
          return d;
        },
      });
      var r = n(39324),
        a = n(70216),
        i = n(22830),
        s = n(35250),
        o = n(70079),
        l = n(1454),
        u = n(38317);
      function d(e) {
        var t = e.manifestValidationInfo,
          n = (0, a._)(e, ["manifestValidationInfo"]),
          i = t.manifest_dict,
          o = t.warnings,
          l = t.errors;
        return (0, s.jsx)(
          h,
          (0, r._)({ name: "manifest", content: i, warnings: o, errors: l }, n)
        );
      }
      function c(e) {
        var t = e.apiValidationInfo,
          n = (0, a._)(e, ["apiValidationInfo"]),
          i = t.openapi_spec_dict,
          o = t.warnings,
          l = t.errors;
        return (0, s.jsx)(
          h,
          (0, r._)(
            { name: "OpenAPI spec", content: i, warnings: o, errors: l },
            n
          )
        );
      }
      function f(e) {
        var t = e.apiValidationInfo,
          n = (0, a._)(e, ["apiValidationInfo"]),
          i = t.api_typescript;
        return i
          ? (0, s.jsx)(
              g,
              (0, r._)({ text: "Prompt for ChatGPT", content: i }, n)
            )
          : null;
      }
      function h(e) {
        var t = e.name,
          n = e.content,
          i = e.warnings,
          o = e.errors,
          d = (0, a._)(e, ["name", "content", "warnings", "errors"]),
          c = i && i.length > 0,
          f = o && o.length > 0,
          h = "Validated ".concat(t),
          m = (0, s.jsx)(u.ZP, { icon: l.UgA, className: "text-green-500" });
        return (
          f
            ? ((h = "Errors in ".concat(t)),
              (m = (0, s.jsx)(u.ZP, {
                icon: l.q5L,
                className: "text-red-500",
              })))
            : c &&
              ((h = "Warnings in ".concat(t)),
              (m = (0, s.jsx)(u.ZP, {
                icon: l.bcx,
                className: "text-yellow-500",
              }))),
          (0, s.jsx)(
            g,
            (0, r._)(
              { icon: m, text: h, content: n, warnings: i, errors: o },
              d
            )
          )
        );
      }
      function g(e) {
        var t = e.icon,
          n = e.text,
          r = e.content,
          a = e.warnings,
          d = e.errors,
          c = e.expanded,
          f = e.onChangeExpanded,
          h = (0, i._)((0, o.useState)(!1), 2),
          g = h[0],
          m = h[1],
          p = null != c ? c : g,
          v = (0, o.useCallback)(
            function () {
              f
                ? f(!p)
                : m(function (e) {
                    return !e;
                  });
            },
            [p, f]
          );
        return (0, s.jsxs)("div", {
          className: "flex flex-col gap-2 text-sm",
          children: [
            (0, s.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                t && (0, s.jsx)("div", { children: t }),
                (0, s.jsx)("div", { children: n }),
                (0, s.jsx)("div", {
                  role: "button",
                  className: "cursor-pointer text-gray-500 hover:text-gray-700",
                  onClick: v,
                  children: (0, s.jsx)(u.ZP, { icon: p ? l.rH8 : l.bTu }),
                }),
              ],
            }),
            p &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-2 font-semibold",
                    children: [
                      d &&
                        d.map(function (e, t) {
                          return (0,
                          s.jsx)("div", { className: "text-red-500", children: e }, t);
                        }),
                      a &&
                        a.map(function (e, t) {
                          return (0,
                          s.jsx)("div", { className: "text-yellow-500", children: e }, t);
                        }),
                    ],
                  }),
                  r &&
                    (0, s.jsx)("pre", {
                      className: "overflow-auto whitespace-pre-wrap text-xs",
                      children:
                        "string" == typeof r ? r : JSON.stringify(r, null, 2),
                    }),
                ],
              }),
          ],
        });
      }
    },
    17915: function (e, t, n) {
      n.d(t, {
        GI: function () {
          return g;
        },
        U$: function () {
          return f;
        },
        Up: function () {
          return p;
        },
        aU: function () {
          return m;
        },
        nT: function () {
          return x;
        },
        qo: function () {
          return h;
        },
        sd: function () {
          return b;
        },
      });
      var r = n(21722),
        a = n(22830),
        i = n(81949),
        s = n(39889),
        o = n(35448),
        l = n(13451),
        u = n(70079),
        d = n(24274),
        c = n(86573);
      function f(e) {
        var t = e.onSuccess,
          n = e.onError,
          r = e.onSettled,
          a = (0, o.NL)(),
          i = (0, l.D)(d.ZP.updatePluginUserSettings.bind(d.ZP), {
            onSuccess: function (e) {
              g(e, a, ["installedAip"]), m(e, a, ["approvedAip"]), t(e);
            },
            onError: n,
            onSettled: r,
          }).mutate;
        return (0, u.useCallback)(
          function (e) {
            i({ pluginId: e, isInstalled: !0 });
          },
          [i]
        );
      }
      function h(e) {
        var t = e.onSuccess,
          n = e.onError,
          r = e.onSettled,
          a = (0, o.NL)(),
          s = (0, l.D)(d.ZP.updatePluginUserSettings.bind(d.ZP), {
            onSuccess: function (e) {
              (function (e, t, n) {
                t.setQueryData(n, function (t) {
                  var n = (0, i._)((null == t ? void 0 : t.items) || []),
                    r = n.findIndex(function (t) {
                      return t.id === e.id;
                    });
                  return (
                    -1 !== r && n.splice(r, 1), { count: n.length, items: n }
                  );
                });
              })(e, a, ["installedAip"]),
                m(e, a, ["approvedAip"]),
                t(e);
            },
            onError: n,
            onSettled: r,
          }).mutate;
        return (0, u.useCallback)(
          function (e) {
            s({ pluginId: e, isInstalled: !1 });
          },
          [s]
        );
      }
      function g(e, t, n) {
        t.setQueryData(n, function (t) {
          var n = (0, i._)((null == t ? void 0 : t.items) || []),
            r = n.findIndex(function (t) {
              return t.id === e.id;
            });
          return (
            -1 !== r ? (n[r] = e) : n.push(e), { count: n.length, items: n }
          );
        });
      }
      function m(e, t, n) {
        t.setQueryData(n, function (t) {
          var n = (0, i._)((null == t ? void 0 : t.items) || []),
            r = n.findIndex(function (t) {
              return t.id === e.id;
            });
          return -1 !== r && (n[r] = e), { count: n.length, items: n };
        });
      }
      function p(e, t) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = (0, r._)(function (e, t) {
          var n, r;
          return (0, s.Jh)(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (n = ""
                    .concat(window.location.origin, "/aip/")
                    .concat(e.id, "/oauth/callback")),
                  [4, d.ZP.pluginOauthRedirect(e.id, n, t)]
                );
              case 1:
                return (
                  (r = a.sent()), (window.location.href = r.redirect_uri), [2]
                );
            }
          });
        })).apply(this, arguments);
      }
      function x(e) {
        var t = e.manifest.auth;
        if ("oauth" !== t.type || !e.oauth_client_id) return null;
        var n = new URLSearchParams({
          response_type: "code",
          client_id: e.oauth_client_id,
          redirect_uri: ""
            .concat(window.location.origin, "/aip/")
            .concat(e.id, "/oauth/callback"),
          scope: t.scope,
        });
        return (
          t.client_url.includes("slack.com") &&
            (n.delete("scope"), n.append("user_scope", t.scope)),
          "".concat(t.client_url, "?").concat(n)
        );
      }
      function b() {
        var e,
          t = (0, a._)((0, u.useState)(!1), 2),
          n = t[0],
          i = t[1];
        return {
          fetchManifestAndSpec: (0, u.useCallback)(
            ((e = (0, r._)(function (e) {
              var t, n, r, a, o, l, u, f, h;
              return (0, s.Jh)(this, function (s) {
                switch (s.label) {
                  case 0:
                    (t = e.domain),
                      (n = e.manifestAccessToken),
                      (r = e.onSuccess),
                      (a = e.onError),
                      (o = (0, c.NB)(t)),
                      (s.label = 1);
                  case 1:
                    if ((s.trys.push([1, 10, 11, 12]), i(!0), !(null != o)))
                      return [3, 3];
                    return [4, (0, c.Zb)(o)];
                  case 2:
                    if (void 0 === (l = s.sent())) return [2];
                    return (
                      r({
                        domain: o,
                        scrapeManifestResponse: {
                          plugin: l.plugin,
                          manifest_validation_info: l.manifest_validation_info,
                        },
                        apiValidationInfo: l.api_validation_info,
                      }),
                      [3, 9]
                    );
                  case 3:
                    return [
                      4,
                      d.ZP.scrapePluginManifest({
                        domain: t,
                        manifestAccessToken: n,
                      }),
                    ];
                  case 4:
                    if (!(u = s.sent()).plugin) return [3, 8];
                    s.label = 5;
                  case 5:
                    return (
                      s.trys.push([5, 7, , 8]),
                      [4, d.ZP.getPluginApi({ id: u.plugin.id })]
                    );
                  case 6:
                    return (f = s.sent().api_validation_info), [3, 8];
                  case 7:
                    return s.sent(), [3, 8];
                  case 8:
                    r({
                      domain: t,
                      scrapeManifestResponse: u,
                      apiValidationInfo: f,
                      manifestAccessToken: n,
                    }),
                      (s.label = 9);
                  case 9:
                    return [3, 12];
                  case 10:
                    return (h = s.sent()), a(null != o ? h : void 0), [3, 12];
                  case 11:
                    return i(!1), [7];
                  case 12:
                    return [2];
                }
              });
            })),
            function (t) {
              return e.apply(this, arguments);
            }),
            []
          ),
          isLoading: n,
        };
      }
    },
    86573: function (e, t, n) {
      n.d(t, {
        NB: function () {
          return p;
        },
        Zb: function () {
          return v;
        },
        cf: function () {
          return m;
        },
        qZ: function () {
          return f;
        },
        wR: function () {
          return c;
        },
      });
      var r = n(21722),
        a = n(39324),
        i = n(39889),
        s = n(8844),
        o = n(22121),
        l = n(69403),
        u = n(24274),
        d = n(97688);
      function c(e) {
        var t,
          n,
          r,
          a,
          i =
            null !==
              (a =
                null === (t = e.metadata) || void 0 === t
                  ? void 0
                  : null === (n = t.invoked_plugin) || void 0 === n
                  ? void 0
                  : n.http_api_call_data) && void 0 !== a
              ? a
              : null === (r = e.metadata) || void 0 === r
              ? void 0
              : r.http_api_call_data;
        if (void 0 !== i) {
          if (e.author.role !== l.uU.Assistant) {
            console.error(
              "Refusing to make localhost plugin HTTP call from non-assistant message",
              e
            );
            return;
          }
          if (
            "object" != typeof i ||
            "string" != typeof i.namespace ||
            0 === i.namespace.length ||
            "string" != typeof i.function_name ||
            0 === i.function_name.length ||
            "string" != typeof i.parent_message_id ||
            0 === i.parent_message_id.length ||
            "string" != typeof i.url ||
            0 === i.url.length ||
            "string" != typeof i.method ||
            !["get", "post", "put", "delete", "patch"].includes(i.method) ||
            !Array.isArray(i.qs_params) ||
            i.qs_params.some(function (e) {
              return (
                !Array.isArray(e) ||
                2 !== e.length ||
                "string" != typeof e[0] ||
                "string" != typeof e[1]
              );
            }) ||
            "object" != typeof i.headers ||
            Object.keys(i.headers).some(function (e) {
              return "string" != typeof e;
            }) ||
            Object.values(i.headers).some(function (e) {
              return "string" != typeof e;
            }) ||
            !(
              null === i.body ||
              ("object" == typeof i.body &&
                Object.keys(i.body).every(function (e) {
                  return "string" == typeof e;
                }))
            ) ||
            "string" != typeof i.api_function_type ||
            !["kwargs", "chat"].includes(i.api_function_type)
          ) {
            console.error(
              "Refusing to make localhost plugin HTTP call with invalid metadata",
              e
            );
            return;
          }
          if (!/^https?:\/\/localhost:/.test(i.url)) {
            console.error(
              "Refusing to make localhost plugin HTTP call with non-localhost URL",
              e
            );
            return;
          }
          return i;
        }
      }
      function f(e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = (0, r._)(function (e) {
          var t;
          return (0, i.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  n.trys.push([0, 2, , 3]),
                  [
                    4,
                    (function (e) {
                      return g.apply(this, arguments);
                    })(e),
                  ]
                );
              case 1:
                return [2, n.sent()];
              case 2:
                return (
                  console.error(
                    "Error making localhost plugin HTTP call",
                    (t = n.sent())
                  ),
                  [
                    2,
                    [
                      {
                        id: (0, s.Z)(),
                        author: { role: l.uU.Tool, name: "plugin_service" },
                        content: {
                          content_type: l.PX.Text,
                          parts: [
                            "Error making localhost plugin HTTP call: ".concat(
                              t
                            ),
                          ],
                        },
                        recipient: "all",
                      },
                    ],
                  ]
                );
              case 3:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      function g() {
        return (g = (0, r._)(function (e) {
          var t, n, r, o;
          function u(e) {
            return Object.keys(e).map(function (e) {
              return e.toLowerCase();
            });
          }
          return (0, i.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                var d;
                if (
                  ((t = { "content-type": "application/json" }),
                  (d = [u(e.headers), u(t)].flat()),
                  new Set(d).size !== d.length)
                )
                  throw Error(
                    "Refusing to make localhost plugin HTTP call with duplicate header keys"
                  );
                return (
                  (n = e.url),
                  e.qs_params.length > 0 &&
                    (n = n + "?" + new URLSearchParams(e.qs_params)),
                  (r = void 0),
                  null !== e.body && (r = JSON.stringify(e.body)),
                  [
                    4,
                    fetch(n, {
                      method: e.method,
                      headers: (0, a._)({}, t, e.headers),
                      body: r,
                    }),
                  ]
                );
              case 1:
                return [4, i.sent().text()];
              case 2:
                if (((o = i.sent()), "chat" === e.api_function_type))
                  return [2, [JSON.parse(o)]];
                if ("kwargs" === e.api_function_type)
                  return [
                    2,
                    [
                      {
                        id: (0, s.Z)(),
                        author: {
                          role: l.uU.Tool,
                          name: ""
                            .concat(e.namespace, ".")
                            .concat(e.function_name),
                        },
                        content: { content_type: l.PX.Text, parts: [o] },
                        recipient: "all",
                      },
                    ],
                  ];
                throw Error("Not implemented");
            }
          });
        })).apply(this, arguments);
      }
      function m(e) {
        return !!p(e.domain);
      }
      function p(e) {
        return /^localhost:\d+$/.test(e)
          ? "http://".concat(e)
          : /^https?:\/\/localhost:\d+$/.test(e)
          ? e
          : null;
      }
      function v(e) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = (0, r._)(function (e) {
          var t, n, r, a, s, l;
          return (0, i.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  i.trys.push([0, 3, , 4]),
                  [4, fetch(e + "/.well-known/ai-plugin.json")]
                );
              case 1:
                return [4, i.sent().json()];
              case 2:
                return (n = i.sent()), [3, 4];
              case 3:
                return (
                  i.sent(),
                  d.m.danger(
                    "Failed to fetch localhost manifest. Check to ensure your localhost is running and your localhost server has CORS enabled."
                  ),
                  [2]
                );
              case 4:
                if (
                  null ==
                  (r =
                    null == n
                      ? void 0
                      : null === (t = n.api) || void 0 === t
                      ? void 0
                      : t.url)
                )
                  return (
                    d.m.danger(
                      "Localhost manifest is missing OpenAPI spec URL."
                    ),
                    [2]
                  );
                if (
                  "pathname" ===
                  (a = (function (e) {
                    try {
                      return new URL(e), "full url";
                    } catch (t) {
                      if (e.startsWith("/")) return "pathname";
                      return "neither";
                    }
                  })(r))
                )
                  r = e + r;
                else if ("neither" === a)
                  return (
                    d.m.danger(
                      "Localhost manifest OpenAPI spec URL is not a valid URL or path."
                    ),
                    [2]
                  );
                i.label = 5;
              case 5:
                return i.trys.push([5, 8, , 9]), [4, fetch(r)];
              case 6:
                return [4, i.sent().text()];
              case 7:
                return (s = i.sent()), [3, 9];
              case 8:
                return (
                  i.sent(),
                  d.m.danger("Failed to fetch localhost OpenAPI spec."),
                  [2]
                );
              case 9:
                try {
                  l = o.ZP.parse(s);
                } catch (e) {}
                try {
                  l = JSON.parse(s);
                } catch (e) {}
                if (null == l)
                  return (
                    d.m.danger(
                      "Failed to parse localhost OpenAPI spec as JSON or YAML."
                    ),
                    [2]
                  );
                i.label = 10;
              case 10:
                return (
                  i.trys.push([10, 12, , 13]),
                  [
                    4,
                    u.ZP.createOrUpdateLocalhostPlugin({
                      localhost: e,
                      manifest: n,
                      openapiSpec: l,
                    }),
                  ]
                );
              case 11:
                return [2, i.sent()];
              case 12:
                return (
                  i.sent(),
                  d.m.danger(
                    "Failed to create or update localhost plugin at ".concat(e)
                  ),
                  [3, 13]
                );
              case 13:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
    },
    76559: function (e, t, n) {
      n.d(t, {
        V: function () {
          return l;
        },
        Z: function () {
          return u;
        },
      });
      var r = n(24396),
        a = n(70079),
        i = n(32787),
        s = n(24274),
        o = n(21437),
        l = ["approvedAip"];
      function u() {
        var e = (0, i.kP)().session,
          t = (0, o.Fl)().isPluginsAvailable,
          n = (0, r.a)(
            l,
            function () {
              return s.ZP.getPlugins({
                offset: 0,
                limit: 250,
                statuses: ["approved"],
                accessToken: null == e ? void 0 : e.accessToken,
              });
            },
            {
              enabled: t && (null == e ? void 0 : e.accessToken) != null,
              onError: function (e) {
                console.error(e);
              },
            }
          ),
          u = n.data,
          d = n.isLoading;
        return (0, a.useMemo)(
          function () {
            var e = u
              ? u.items.reduce(function (e, t) {
                  var n = !0,
                    r = !1,
                    a = void 0;
                  try {
                    for (
                      var i,
                        s,
                        o = (
                          null !== (i = t.categories) && void 0 !== i ? i : []
                        )[Symbol.iterator]();
                      !(n = (s = o.next()).done);
                      n = !0
                    ) {
                      var l = s.value;
                      null == e[l.id] &&
                        (e[l.id] = { id: l.id, title: l.title, items: [] }),
                        e[l.id].items.push(t);
                    }
                  } catch (e) {
                    (r = !0), (a = e);
                  } finally {
                    try {
                      n || null == o.return || o.return();
                    } finally {
                      if (r) throw a;
                    }
                  }
                  return e;
                }, {})
              : {};
            return {
              approvedPlugins: u ? u.items : [],
              approvedPluginsByCategory: e,
              isLoading: d,
            };
          },
          [u, d]
        );
      }
    },
    31721: function (e, t, n) {
      n.d(t, {
        v: function () {
          return m;
        },
      });
      var r = n(21722),
        a = n(20485),
        i = n(39889),
        s = n(35448),
        o = n(24396),
        l = n(70079),
        u = n(24274),
        d = n(32983),
        c = n(76559),
        f = n(74437);
      function h(e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = (0, r._)(function (e) {
          var t;
          return (0, i.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (t = e.queryKey), [4, u.ZP.publicGetPluginsById({ ids: t })]
                );
              case 1:
                return [2, n.sent().items];
            }
          });
        })).apply(this, arguments);
      }
      function m() {
        var e, t, n;
        return null !==
          (e = ((t = (0, l.useContext)(d.XA)),
          (n = (0, s.NL)()),
          (0, o.a)({
            queryKey: t,
            queryFn: h,
            select: void 0,
            initialData: function () {
              var e =
                  null === (u = n.getQueryData(f.Z)) || void 0 === u
                    ? void 0
                    : u.items,
                r =
                  null === (d = n.getQueryData(c.V)) || void 0 === d
                    ? void 0
                    : d.items,
                i = [],
                s = !0,
                o = !1,
                l = void 0;
              try {
                for (
                  var u, d, h, g = t[Symbol.iterator]();
                  !(s = (h = g.next()).done);
                  s = !0
                ) {
                  var m = (function () {
                    var t,
                      n = h.value,
                      a =
                        null !==
                          (t =
                            null == e
                              ? void 0
                              : e.find(function (e) {
                                  return e.id === n;
                                })) && void 0 !== t
                          ? t
                          : null == r
                          ? void 0
                          : r.find(function (e) {
                              return e.id === n;
                            });
                    if (null == a) return { v: void 0 };
                    i.push(a);
                  })();
                  if ("object" === (0, a._)(m)) return m.v;
                }
              } catch (e) {
                (o = !0), (l = e);
              } finally {
                try {
                  s || null == g.return || g.return();
                } finally {
                  if (o) throw l;
                }
              }
              return i;
            },
          })).data) && void 0 !== e
          ? e
          : [];
      }
    },
    697: function (e, t, n) {
      n.d(t, {
        dT: function () {
          return h;
        },
        hZ: function () {
          return l;
        },
        iO: function () {
          return u;
        },
        p0: function () {
          return f;
        },
        wu: function () {
          return g;
        },
      });
      var r = n(81949),
        a = n(70079),
        i = n(81292),
        s = n(85023),
        o = n(74437),
        l = 3,
        u = [
          ["www.klarna.com", "server.shop.app"],
          ["apim.expedia.com", "kayak.com"],
          ["www.redfin.com", "plugins.zillow.com"],
          ["instacart.com", "api.tasty.co"],
        ],
        d = "oai/enabledPluginIds",
        c = (0, i.ZP)(function () {
          var e = Array.from(new Set(s.m.getItem(d)));
          return { enabledPluginIds: new Set(e.splice(0, l)) };
        });
      function f() {
        var e = (0, o.C)().installedPlugins,
          t = c().enabledPluginIds;
        return (0, a.useMemo)(
          function () {
            return e.filter(function (e) {
              return t.has(e.id);
            });
          },
          [t, e]
        );
      }
      function h(e) {
        e.length > l ||
          c.setState(function () {
            return s.m.setItem(d, e), { enabledPluginIds: new Set(e) };
          });
      }
      function g(e) {
        c.setState(function (t) {
          if (t.enabledPluginIds.size >= l) return t;
          var n = (0, r._)(t.enabledPluginIds).concat([e]);
          return s.m.setItem(d, n), { enabledPluginIds: new Set(n) };
        });
      }
    },
    74437: function (e, t, n) {
      n.d(t, {
        C: function () {
          return u;
        },
        Z: function () {
          return l;
        },
      });
      var r = n(24396),
        a = n(70079),
        i = n(32787),
        s = n(24274),
        o = n(21437),
        l = ["installedAip"];
      function u() {
        var e = (0, i.kP)().session,
          t = (0, o.Fl)().isPluginsAvailable,
          n = (0, r.a)(
            l,
            function () {
              return s.ZP.getPlugins({
                offset: 0,
                limit: 250,
                isInstalled: !0,
                accessToken: null == e ? void 0 : e.accessToken,
              });
            },
            {
              enabled: t && !!(null == e ? void 0 : e.accessToken),
              onError: function (e) {
                console.error(e);
              },
            }
          ),
          u = n.data,
          d = n.isLoading;
        return (0, a.useMemo)(
          function () {
            return { installedPlugins: u ? u.items : [], isLoading: d };
          },
          [u, d]
        );
      }
    },
    44925: function (e, t, n) {
      n.d(t, {
        _4: function () {
          return i;
        },
        m1: function () {
          return a;
        },
        ti: function () {
          return r;
        },
      });
      var r = "https://help.openai.com/en/collections/3943089-billing",
        a =
          "https://help.openai.com/en/articles/7905690-how-do-i-cancel-my-apple-subscription-for-chatgpt-plus-in-the-chatgpt-ios-app",
        i = {
          WEBAPP: "chatgpt_web",
          MOBILE_IOS: "chatgpt_mobile_ios",
          GRANTED: "chatgpt_gratis_recepient",
          NOT_PURCHASED: "chatgpt_not_purchased",
        };
    },
    24148: function (e, t, n) {
      n.d(t, {
        t: function () {
          return u;
        },
      });
      var r = n(39324),
        a = n(71209),
        i = n(91530),
        s = n.n(i),
        o = n(81292),
        l = { showAccountPaymentModal: !1 },
        u = (0, o.ZP)()(function (e) {
          return (0, a._)((0, r._)({}, l), {
            setShowAccountPaymentModal: function (t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : s();
              e({ showAccountPaymentModal: t }), n && n();
            },
          });
        });
    },
    48101: function (e, t, n) {
      n.d(t, {
        fv: function () {
          return _;
        },
        ZP: function () {
          return w;
        },
        Ub: function () {
          return C;
        },
      });
      var r = n(22830),
        a = n(4337),
        i = n(35250),
        s = n(70079),
        o = n(1454),
        l = n(34303),
        u = n(64135),
        d = n(75527),
        c = n(56244),
        f = n(66958),
        h = n(13282),
        g = n(48727),
        m = n(38317),
        p = n(40638),
        v = n(24760);
      function x(e) {
        var t = e.children,
          n = e.sidebarOpen,
          r = e.onClose;
        return (0, i.jsx)(p.u.Root, {
          show: n,
          as: s.Fragment,
          children: (0, i.jsxs)(v.V, {
            as: "div",
            className: "relative z-10",
            onClose: r,
            children: [
              (0, i.jsx)("div", { className: "fixed inset-0" }),
              (0, i.jsx)("div", {
                className: "fixed inset-0 overflow-hidden",
                children: (0, i.jsx)("div", {
                  className: "absolute inset-0 overflow-hidden",
                  children: (0, i.jsx)("div", {
                    className:
                      "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                    children: (0, i.jsx)(p.u.Child, {
                      as: s.Fragment,
                      enter:
                        "transform transition ease-in-out duration-100 sm:duration-300",
                      enterFrom: "translate-x-full",
                      enterTo: "translate-x-0",
                      leave:
                        "transform transition ease-in-out duration-300 sm:duration-500",
                      leaveFrom: "translate-x-0",
                      leaveTo: "translate-x-full",
                      children: (0, i.jsx)(v.V.Panel, {
                        className:
                          "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                        children: (0, i.jsx)("div", {
                          className:
                            "h-full overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                          children: t,
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function b() {
        var e = (0, a._)([
          "overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 bg-white dark:bg-gray-900",
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = (0, a._)(["whitespace-pre-wrap text-sm"]);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = (0, a._)([
          "px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function w(e) {
        var t = e.children,
          n = e.title,
          r = e.icon,
          a = e.isOpen,
          s = e.slideOver,
          l = e.onClose,
          u = (0, i.jsxs)(k, {
            children: [
              (0, i.jsxs)("div", {
                className: "flex items-start justify-between",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                    children: [(0, i.jsx)(m.ZP, { icon: r }), n],
                  }),
                  (0, i.jsx)("div", {
                    className: "mr-2 mt-2 flex h-7 items-center",
                    children: (0, i.jsxs)("button", {
                      type: "button",
                      className:
                        "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                      onClick: l,
                      children: [
                        (0, i.jsx)("span", {
                          className: "sr-only",
                          children: "Close sidebar",
                        }),
                        (0, i.jsx)(m.ZP, {
                          icon: o.q5L,
                          size: "medium",
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              t,
            ],
          });
        return s
          ? (0, i.jsx)(x, { sidebarOpen: a, onClose: l, children: u })
          : a
          ? u
          : null;
      }
      function _(e) {
        var t = e.clientThreadId,
          n = e.isOpen,
          a = e.slideOver,
          l = e.onClose,
          f = d.tQ.getThreadCurrentLeafId(t),
          m = (0, d.u9)(t, f),
          p = (0, r._)((0, s.useState)(), 2),
          v = p[0],
          x = p[1],
          b = (0, u.hz)(),
          y = (0, s.useCallback)(function () {
            x(void 0);
          }, []),
          j = (0, s.useCallback)(
            function () {
              var e = d.tQ.getTree(t);
              navigator.clipboard.writeText(e.getTextFromThread(f));
            },
            [f, t]
          );
        if (!b.has("debug")) return null;
        var _ = m.map(function (e, t) {
          var n = e.author,
            r = n.role,
            a = n.name;
          return (0, i.jsxs)(
            N,
            {
              role: "button",
              onClick: function () {
                return x(t);
              },
              children: [
                (0, i.jsxs)("div", {
                  className: "text-xs font-medium uppercase text-gray-400",
                  children: [
                    r,
                    a && a !== r && " (".concat(a, ")"),
                    " -> ",
                    (0, c.Ej)(e),
                  ],
                }),
                (0, i.jsx)("div", { children: (0, c.RR)(e) }),
              ],
            },
            e.id
          );
        });
        return (0, i.jsxs)(w, {
          icon: o.cDN,
          title: "Debug",
          isOpen: n,
          slideOver: a,
          onClose: l,
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex items-center justify-around gap-2 px-4 py-1 text-xs font-medium uppercase ",
              children: [
                (0, i.jsx)(M, { clientThreadId: t, messages: m }),
                (0, i.jsx)("div", {
                  children: (0, i.jsx)(h.Z, {
                    onCopy: j,
                    buttonText: "Copy text",
                  }),
                }),
              ],
            }),
            (0, i.jsx)(T, { children: _ }),
            void 0 !== v &&
              (0, i.jsx)(
                g.Z,
                {
                  isOpen: !0,
                  onClose: y,
                  type: "success",
                  children: (0, i.jsx)("pre", {
                    className:
                      "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                    children: JSON.stringify(m[v], null, 2),
                  }),
                },
                "DebugMessageModal-".concat(v)
              ),
          ],
        });
      }
      function C(e, t) {
        var n = JSON.stringify(t) + "\n",
          r = new Blob([n], { type: "application/json" }),
          a = URL.createObjectURL(r),
          i = document.createElement("a");
        (i.href = a),
          (i.download = "messages-".concat(
            d.tQ.getServerThreadId(e),
            ".jsonl"
          )),
          i.click(),
          URL.revokeObjectURL(a);
      }
      function M(e) {
        var t = e.clientThreadId,
          n = e.messages,
          r = (0, s.useCallback)(
            function () {
              C(t, n);
            },
            [t, n]
          );
        return (0, i.jsxs)(f.z, {
          onClick: r,
          color: "dark",
          size: "small",
          children: [
            (0, i.jsx)(m.ZP, { icon: o._hL }),
            "Download raw conversation",
          ],
        });
      }
      var k = l.Z.div(b()),
        T = l.Z.pre(y()),
        N = l.Z.div(j());
    },
    36112: function (e, t, n) {
      n.d(t, {
        LC: function () {
          return g;
        },
        MO: function () {
          return h;
        },
        Od: function () {
          return p;
        },
        iF: function () {
          return m;
        },
      });
      var r = n(38675),
        a = n(35448),
        i = n(70079),
        s = n(32787),
        o = n(85023),
        l = n(24274),
        u = n(64135),
        d = n(88038),
        c = "oai/apps/hasSeenHistoryFilteredDisclosure/".concat("2023-03-21"),
        f = "conversationHistory";
      function h() {
        var e,
          t = (0, u.hz)().has(d.Ud),
          n = (0, u.Xj)().isLoading,
          a = (0, s.kP)().session,
          o = null == a ? void 0 : a.accessToken,
          c = !t && !!o && !n,
          h = (0, r.N)({
            queryKey: [f],
            queryFn: function (e) {
              var t = e.pageParam;
              return l.ZP.getConversations(
                t || 0,
                28,
                null == a ? void 0 : a.accessToken
              );
            },
            getNextPageParam: function (e) {
              var t = e.offset + e.limit;
              return t < e.total ? t : void 0;
            },
            enabled: c,
          }),
          g = h.data,
          m = h.fetchNextPage,
          p = h.hasNextPage,
          v = h.isInitialLoading,
          x = h.isFetchingNextPage,
          b = h.isError,
          y = (0, i.useMemo)(
            function () {
              return null !==
                (e =
                  null == g
                    ? void 0
                    : g.pages.flatMap(function (e) {
                        return e.items;
                      })) && void 0 !== e
                ? e
                : [];
            },
            [g]
          );
        return {
          data: g,
          conversations: y,
          fetchNextPage: m,
          hasNextPage: p,
          isLoading: v,
          isFetchingNextPage: x,
          isError: c && b,
        };
      }
      function g() {
        var e = h().conversations;
        return (0, i.useMemo)(
          function () {
            return e.length > 0;
          },
          [e]
        );
      }
      function m() {
        var e = (0, a.NL)();
        return (0, i.useCallback)(
          function () {
            e.invalidateQueries([f]);
          },
          [e]
        );
      }
      function p() {
        (0, i.useEffect)(function () {
          o.m.removeItem(c);
        }, []);
      }
    },
    5046: function (e, t, n) {
      n.d(t, {
        BT: function () {
          return u;
        },
        Y8: function () {
          return d;
        },
        kc: function () {
          return o;
        },
        m0: function () {
          return l;
        },
        uU: function () {
          return s;
        },
      });
      var r = n(81949),
        a = n(81292),
        i = n(51132),
        s = "model_cap_exceeded",
        o = (0, a.ZP)(function () {
          return { serverThreadIds: new Set() };
        });
      function l(e) {
        o.setState(function (t) {
          return {
            serverThreadIds: new Set((0, r._)(t.serverThreadIds).concat([e])),
          };
        });
      }
      function u() {
        var e = d(function (e) {
            return e.isoDate;
          }),
          t = d(function (e) {
            return e.clearCapTimeout;
          }),
          n = Date.now(),
          r = e && new Date(e).getTime();
        return e && r && r <= n ? (t(), null) : e ? "gpt-4" : null;
      }
      var d = (0, a.ZP)()(
        (0, i.tJ)(
          function (e) {
            return {
              isoDate: "",
              setCapTimeout: function (t) {
                e(function () {
                  return { isoDate: t };
                });
              },
              clearCapTimeout: function () {
                e(function () {
                  return { isoDate: "" };
                });
              },
            };
          },
          { name: "oai/apps/capExpiresAt" }
        )
      );
    },
    66523: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(24396),
        a = n(70079),
        i = n(32787),
        s = n(24274),
        o = n(64135),
        l = n(63390),
        u = n(5046),
        d = { textarea: "", "model-switcher": "" };
      function c() {
        var e = (0, i.kP)().session,
          t = (0, o.hz)(),
          n = (0, u.Y8)(function (e) {
            return e.isoDate;
          }),
          c = (0, l.xz)(n),
          f = (0, r.a)(
            ["modelMessageCap"],
            function () {
              return s.ZP.getModelMessageCap();
            },
            {
              enabled:
                (null == e ? void 0 : e.accessToken) != null &&
                t.has("model_preview"),
            }
          ).data;
        return (0, a.useMemo)(
          function () {
            var e = (null == f ? void 0 : f.message_cap) || 0,
              t = (null == f ? void 0 : f.message_cap_window) || 1,
              n = (function (e) {
                if (e < 60) return e < 2 ? "minute" : "".concat(e, " minutes");
                var t = Math.floor(e / 60);
                if (t < 24) return t < 2 ? "hour" : "".concat(t, " hours");
                var n = Math.floor(t / 24);
                if (n < 7) return n < 2 ? "day" : "".concat(n, " days");
              })(t),
              r = (null == f ? void 0 : f.message_disclaimer) || d;
            return n
              ? f && t && e
                ? {
                    textareaDisclaimer: r.textarea
                      .replaceAll("%FORMATTED_TIME%", c)
                      .replaceAll("%NUMERATOR%", "".concat(e))
                      .replaceAll("%DENOMINATOR%", n),
                    modelSwitcherDisclaimer: r["model-switcher"]
                      .replaceAll("%FORMATTED_TIME%", c)
                      .replaceAll("%NUMERATOR%", "".concat(e))
                      .replaceAll("%DENOMINATOR%", n),
                  }
                : {
                    textareaDisclaimer: d.textarea,
                    modelSwitcherDisclaimer: d["model-switcher"],
                  }
              : {
                  textareaDisclaimer: r.textarea,
                  modelSwitcherDisclaimer: r["model-switcher"],
                };
          },
          [f, c]
        );
      }
    },
    97732: function (e, t, n) {
      n.d(t, {
        Ri: function () {
          return T;
        },
        ZP: function () {
          return P;
        },
        dN: function () {
          return a;
        },
        i0: function () {
          return N;
        },
      });
      var r,
        a,
        i,
        s,
        o,
        l,
        u,
        d,
        c,
        f,
        h = n(96237),
        g = n(39324),
        m = n(81949),
        p = n(35250),
        v = n(41170),
        x = n(70079),
        b = n(64135),
        y = n(21437),
        j = n(38317),
        w = n(5046),
        _ = n(66523),
        C = n(90076);
      ((r = a || (a = {})).BROWSING = "browsing_model"),
        (r.CODE_INTERPRETER = "code_interpreter_model"),
        (r.PLUGINS = "plugins_model");
      var M =
          ((i = {}),
          (0, h._)(i, "gpt_3.5", {
            icon: j.jr,
            activeIcon: j.jr,
            backgroundColor: "#19c37d",
            buttonActiveClass: "text-brand-green",
            buttonHoverClass: "group-hover/button:text-brand-green",
            iconClass:
              "group-hover/option:!text-brand-green group-hover/options:text-gray-500",
            disclaimer: "Available to Free and Plus users",
            showSelectedValueBelow: !1,
          }),
          (0, h._)(i, "gpt_4", {
            icon: j.Bj,
            activeIcon: j.MP,
            backgroundColor: "#AB68FF",
            buttonActiveClass: "text-brand-purple",
            buttonHoverClass: "group-hover/button:text-brand-purple",
            iconClass:
              "group-hover/option:!text-brand-purple group-hover/options:text-gray-500",
            disclaimer: "Available exclusively to Plus users",
            showSelectedValueBelow: !1,
          }),
          (0, h._)(i, "other", {
            icon: v.Z,
            activeIcon: v.Z,
            backgroundColor: "#E06C2B",
            buttonActiveClass: "text-orange-500",
            buttonHoverClass: "group-hover/button:text-orange-500",
            showSelectedValueBelow: !0,
          }),
          i),
        k =
          ((f = {}),
          (0, h._)(f, a.BROWSING, {
            iconByCategory:
              ((s = {}),
              (0, h._)(s, "gpt_3.5", j.O1),
              (0, h._)(s, "gpt_4", j.Fz),
              s),
            activeIconByCategory:
              ((o = {}),
              (0, h._)(o, "gpt_3.5", j.X7),
              (0, h._)(o, "gpt_4", j.Ae),
              o),
            name: (0, p.jsxs)("span", {
              children: [
                "Browse with",
                " ",
                (0, p.jsx)(j.ZP, {
                  icon: j.jE,
                  className: "-mt-[3px] inline-block",
                }),
                " ",
                "Bing",
              ],
            }),
          }),
          (0, h._)(f, a.CODE_INTERPRETER, {
            iconByCategory:
              ((l = {}),
              (0, h._)(l, "gpt_3.5", j.lv),
              (0, h._)(l, "gpt_4", j.Q$),
              l),
            activeIconByCategory:
              ((u = {}),
              (0, h._)(u, "gpt_3.5", j.vy),
              (0, h._)(u, "gpt_4", j.$V),
              u),
            name: "Code Interpreter",
          }),
          (0, h._)(f, a.PLUGINS, {
            iconByCategory:
              ((d = {}),
              (0, h._)(d, "gpt_3.5", j.AQ),
              (0, h._)(d, "gpt_4", j.IT),
              d),
            activeIconByCategory:
              ((c = {}),
              (0, h._)(c, "gpt_3.5", j.Np),
              (0, h._)(c, "gpt_4", j.j3),
              c),
            name: "Plugins",
          }),
          f);
      function T(e) {
        var t = P();
        return (0, x.useMemo)(
          function () {
            return (function (e, t) {
              if (t)
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  if (r.options.length > 0) {
                    var a,
                      i,
                      s = r.options.find(function (e) {
                        return e.value === t;
                      });
                    if (s)
                      return {
                        item: s,
                        categoryId: r.categoryId,
                        backgroundColor: M[r.categoryId].backgroundColor,
                        icon:
                          null !==
                            (i =
                              null !== (a = s.icon) && void 0 !== a
                                ? a
                                : r.icon) && void 0 !== i
                            ? i
                            : M[r.categoryId].icon,
                      };
                  }
                }
            })(t, e);
          },
          [t, e]
        );
      }
      function N(e, t) {
        return (0, C.OX)().some(function (n) {
          return n[t] === e;
        });
      }
      function P() {
        var e = (0, C.OX)(),
          t = (0, C.B9)(),
          n = (0, w.BT)(),
          r = (0, y.Fl)(),
          i = (0, _.Z)().modelSwitcherDisclaimer,
          s = (0, b.hz)(),
          o = (0, C.B8)(),
          l = o.enabledModelsInCategoriesById,
          u = o.enabledModelsNotInCategoriesById;
        return (0, x.useMemo)(
          function () {
            var o = [],
              d = !0,
              c = !1,
              f = void 0;
            try {
              for (
                var h, g = e[Symbol.iterator]();
                !(d = (h = g.next()).done);
                d = !0
              ) {
                var p = h.value;
                if (l.has(p.default_model)) {
                  var v = M[p.category] || {},
                    x = n === p.default_model,
                    b = t.get(p.default_model),
                    y = x
                      ? []
                      : (function (e, t, n, r, i) {
                          var s = e.isBrowsingEnabled,
                            o = e.isPluginsEnabled,
                            l = e.isCodeInterpreterEnabled,
                            u = [];
                          if (
                            s &&
                            null != n[a.BROWSING] &&
                            r.has(n[a.BROWSING])
                          ) {
                            var d = k[a.BROWSING];
                            u.push(
                              Z(i.get(n[a.BROWSING]), {
                                icon: d.iconByCategory[n.category],
                                name: d.name,
                                activeIcon: d.activeIconByCategory[n.category],
                                disabled: t.has("browsing_disabled"),
                              })
                            );
                          }
                          if (
                            l &&
                            null != n[a.CODE_INTERPRETER] &&
                            r.has(n[a.CODE_INTERPRETER])
                          ) {
                            var c = k[a.CODE_INTERPRETER];
                            u.push(
                              Z(i.get(n[a.CODE_INTERPRETER]), {
                                icon: c.iconByCategory[n.category],
                                name: c.name,
                                activeIcon: c.activeIconByCategory[n.category],
                                disabled: t.has("code_interpreter_disabled"),
                              })
                            );
                          }
                          if (
                            o &&
                            null != n[a.PLUGINS] &&
                            r.has(n[a.PLUGINS])
                          ) {
                            var f = k[a.PLUGINS];
                            u.push(
                              Z(i.get(n[a.PLUGINS]), {
                                icon: f.iconByCategory[n.category],
                                name: f.name,
                                activeIcon: f.activeIconByCategory[n.category],
                                disabled: t.has("plugins_disabled"),
                              })
                            );
                          }
                          return u;
                        })(r, s, p, l, t);
                  o.push({
                    categoryId: p.category,
                    value: b.id,
                    name: p.human_category_name,
                    description: x ? i : b.description,
                    disclaimer: v.disclaimer,
                    buttonActiveClass: v.buttonActiveClass,
                    buttonHoverClass: v.buttonHoverClass,
                    iconClass: v.iconClass,
                    icon: v.icon,
                    activeIcon: v.activeIcon,
                    options: [
                      Z(b, {
                        icon: v.icon,
                        activeIcon: v.activeIcon,
                        name: "Default",
                      }),
                    ].concat((0, m._)(y)),
                    disabled: x,
                    showSelectedValueBelow: !1,
                  });
                }
              }
            } catch (e) {
              (c = !0), (f = e);
            } finally {
              try {
                d || null == g.return || g.return();
              } finally {
                if (c) throw f;
              }
            }
            var j = Array.from(u).map(function (e) {
              return t.get(e);
            });
            if (j.length > 0) {
              var w = j[0],
                _ = M.other;
              o.push({
                categoryId: "other",
                value: null == w ? void 0 : w.id,
                name: "Alpha",
                buttonActiveClass: _.buttonActiveClass,
                buttonHoverClass: _.buttonHoverClass,
                options: j.map(function (e) {
                  return Z(e);
                }),
                showSelectedValueBelow: !0,
                icon: _.icon,
                activeIcon: _.activeIcon,
                alwaysShowOptions: !0,
              });
            }
            return o;
          },
          [u, e, l, n, t, r, s, i]
        );
      }
      function Z(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, g._)({ value: e.id, name: e.title, tags: e.tags }, t);
      }
    },
    90076: function (e, t, n) {
      n.d(t, {
        B8: function () {
          return F;
        },
        B9: function () {
          return N;
        },
        Bv: function () {
          return S;
        },
        Gg: function () {
          return P;
        },
        H6: function () {
          return E;
        },
        OX: function () {
          return k;
        },
        S: function () {
          return a;
        },
        Xy: function () {
          return I;
        },
        ZL: function () {
          return M;
        },
        fm: function () {
          return Z;
        },
        iu: function () {
          return T;
        },
        n2: function () {
          return _;
        },
      });
      var r,
        a,
        i = n(21722),
        s = n(39324),
        o = n(71209),
        l = n(81949),
        u = n(39889),
        d = n(24396),
        c = n(68555),
        f = n(70079),
        h = n(32787),
        g = n(24274),
        m = n(64135),
        p = n(75527),
        v = n(21437),
        x = n(32983),
        b = n(5046),
        y = n(97732),
        j = "text-davinci-002-render-sha";
      ((r = a || (a = {})).GPT_3_5 = "gpt3.5"),
        (r.GPT_4 = "gpt4"),
        (r.MOBILE = "mobile");
      var w = E({
          slug: j,
          max_tokens: 4097,
          title: "Default",
          description: "",
          tags: [a.GPT_3_5],
          capabilities: {},
        }),
        _ = new Set(["text-davinci-002-render-paid"]);
      function C(e) {
        var t = (0, f.useContext)(x.QL).historyDisabled,
          n = (0, h.kP)(),
          r = n.session,
          a = n.loading,
          s = null == r ? void 0 : r.accessToken;
        return (0, d.a)({
          queryKey: ["models", { isHistoryDisabled: !t }],
          queryFn: (0, i._)(function () {
            return (0, u.Jh)(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, g.ZP.getModels(s, t)];
                case 1:
                  return [2, e.sent()];
              }
            });
          }),
          enabled: !a && null != s,
          select: e,
        });
      }
      function M() {
        return C().isLoading;
      }
      function k() {
        var e = C(function (e) {
          return e.categories;
        }).data;
        return null != e ? e : [];
      }
      function T() {
        var e = C(function (e) {
          return e.models;
        }).data;
        return (0, f.useMemo)(
          function () {
            return new Set(
              e
                ? e.map(function (e) {
                    return e.slug;
                  })
                : [j]
            );
          },
          [e]
        );
      }
      function N() {
        var e = C(function (e) {
          return e.models;
        }).data;
        return (0, f.useMemo)(
          function () {
            return new Map(
              e
                ? e.map(function (e) {
                    return [e.slug, E(e)];
                  })
                : [[j, w]]
            );
          },
          [e]
        );
      }
      function P(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = function (e) {
            var t,
              n,
              r = s.get(e);
            return (
              null !==
                (n =
                  null == r
                    ? void 0
                    : null === (t = r.tags) || void 0 === t
                    ? void 0
                    : t.includes(a.GPT_3_5)) &&
              void 0 !== n &&
              n
            );
          },
          r = (0, m.hz)(),
          i = (0, l._)(e),
          s = N();
        if (!t && r.has("priority_driven_models_list")) return i[0];
        var o = (0, l._)(i).find(function (e) {
          return n(e);
        });
        return null != o ? o : i[0];
      }
      function Z() {
        var e = (0, c.useRouter)(),
          t = e.query;
        return (0, f.useCallback)(
          function (n) {
            e.replace(
              {
                pathname: e.basePath,
                query: (0, o._)((0, s._)({}, t), {
                  model: encodeURIComponent(n),
                }),
              },
              void 0,
              { shallow: !0 }
            );
          },
          [t, e]
        );
      }
      function S(e, t) {
        var n,
          r = decodeURIComponent(
            null !== (n = (0, c.useRouter)().query.model) && void 0 !== n
              ? n
              : ""
          ),
          a = (0, p.XK)(t),
          i = F().enabledModelsById,
          s = (0, v.Fl)().isBetaFeaturesUiEnabled,
          o = (0, b.kc)().serverThreadIds,
          l = T(),
          u = s ? i : l,
          d = P(u);
        return (0, f.useMemo)(
          function () {
            if (0 !== u.size) {
              var t = void 0 !== a && o.has(a);
              return !t && null != e && l.has(e)
                ? null != e
                  ? e
                  : void 0
                : !t && r && u.has(r)
                ? null != r
                  ? r
                  : void 0
                : null != d
                ? d
                : void 0;
            }
          },
          [l, d, e, r, u, a, o]
        );
      }
      function I(e, t) {
        var n = S(e, t),
          r = N();
        return (0, f.useMemo)(
          function () {
            var e;
            return null == n
              ? w
              : null !== (e = r.get(n)) && void 0 !== e
              ? e
              : w;
          },
          [n, r]
        );
      }
      function F() {
        var e = k(),
          t = T(),
          n = N(),
          r = (0, v.Fl)();
        return (0, f.useMemo)(
          function () {
            var i,
              s = e.reduce(
                function (e, a) {
                  var i,
                    s,
                    o,
                    l,
                    u,
                    d,
                    c = e.enabledModelsInCategoriesById,
                    f = e.availableModelsInCategoriesById,
                    h = t.has(a.default_model) ? a.default_model : null;
                  null != h && (f.add(h), c.add(h));
                  var g = t.has(
                    null !== (i = a[y.dN.BROWSING]) && void 0 !== i ? i : ""
                  )
                    ? n.get(
                        null !== (s = a[y.dN.BROWSING]) && void 0 !== s ? s : ""
                      )
                    : null;
                  g && (f.add(g.id), r.isBrowsingEnabled && c.add(g.id));
                  var m = t.has(
                    null !== (o = a[y.dN.CODE_INTERPRETER]) && void 0 !== o
                      ? o
                      : ""
                  )
                    ? n.get(
                        null !== (l = a[y.dN.CODE_INTERPRETER]) && void 0 !== l
                          ? l
                          : ""
                      )
                    : null;
                  m && (f.add(m.id), r.isCodeInterpreterEnabled && c.add(m.id));
                  var p = t.has(
                    null !== (u = a[y.dN.PLUGINS]) && void 0 !== u ? u : ""
                  )
                    ? n.get(
                        null !== (d = a[y.dN.PLUGINS]) && void 0 !== d ? d : ""
                      )
                    : null;
                  return (
                    p && (f.add(p.id), r.isPluginsEnabled && c.add(p.id)), e
                  );
                },
                {
                  enabledModelsInCategoriesById: new Set(),
                  availableModelsInCategoriesById: new Set(),
                }
              ),
              o = s.enabledModelsInCategoriesById,
              u = s.availableModelsInCategoriesById,
              d = new Set(
                Array.from(t).filter(function (e) {
                  return !u.has(e);
                })
              ),
              c = new Set(
                Array.from(d).filter(function (e) {
                  var t;
                  return !(null === (t = n.get(e)) || void 0 === t
                    ? void 0
                    : t.tags.includes(a.MOBILE));
                })
              );
            return {
              enabledModelsInCategoriesById: o,
              availableModelsInCategoriesById: u,
              enabledModelsNotInCategoriesById: c,
              enabledModelsById: new Set((0, l._)(o).concat((0, l._)(c))),
            };
          },
          [e, t, r, n]
        );
      }
      function E(e) {
        return {
          id: e.slug,
          maxTokens: e.max_tokens,
          title: e.title,
          description: e.description,
          tags: e.tags,
          enabledTools: e.enabled_tools,
          capabilities: e.capabilities,
        };
      }
    },
    87316: function (e, t, n) {
      n.d(t, {
        g: function () {
          return l;
        },
      });
      var r = n(96237),
        a = n(39324),
        i = n(71209),
        s = n(81292),
        o = {
          flags: {
            isUserInCanPayGroup: !1,
            failwhaleBypassEnabled: !1,
            sharingEnabled: !1,
            messageRedesign: !1,
          },
        },
        l = (0, s.ZP)()(function (e, t) {
          return (0, i._)((0, a._)({}, o), {
            updateFlagValue: function (n, s) {
              var o = t().flags;
              e({ flags: (0, i._)((0, a._)({}, o), (0, r._)({}, n, s)) });
            },
          });
        });
    },
    75527: function (e, t, n) {
      n.d(t, {
        tQ: function () {
          return I;
        },
        iN: function () {
          return S;
        },
        _L: function () {
          return a;
        },
        OX: function () {
          return M;
        },
        Zz: function () {
          return k;
        },
        aS: function () {
          return X;
        },
        ax: function () {
          return F;
        },
        r7: function () {
          return ee;
        },
        XK: function () {
          return E;
        },
        je: function () {
          return J;
        },
        Uy: function () {
          return V;
        },
        GD: function () {
          return q;
        },
        JI: function () {
          return O;
        },
        U0: function () {
          return B;
        },
        oq: function () {
          return R;
        },
        Hk: function () {
          return z;
        },
        UL: function () {
          return D;
        },
        Kt: function () {
          return L;
        },
        cj: function () {
          return et;
        },
        Ro: function () {
          return U;
        },
        GR: function () {
          return A;
        },
        qA: function () {
          return H;
        },
        XL: function () {
          return W;
        },
        u9: function () {
          return Y;
        },
        nh: function () {
          return G;
        },
        lA: function () {
          return $;
        },
        dz: function () {
          return Q;
        },
        Qi: function () {
          return K;
        },
        qN: function () {
          return N;
        },
      });
      var r,
        a,
        i = n(39324),
        s = n(71209),
        o = n(24396),
        l = n(61888),
        u = n(68555),
        d = n(70079),
        c = n(81292),
        f = n(58392),
        h = n(32787),
        g = n(70216);
      n(59710);
      var m = n(57311),
        p = n(75179);
      n(44675).env.INTERNAL_API_URL;
      var v = n(69403),
        x = n(97688),
        b = n(90076),
        y = n(24274),
        j = n(32983),
        w = n(56244),
        _ = "NEW:",
        C = 0;
      function M() {
        return "".concat(_).concat(C++);
      }
      function k(e) {
        return e.startsWith(_);
      }
      ((r = a || (a = {})).NewChat = "NewChat"),
        (r.Server = "Server"),
        (r.User = "User"),
        (r.Generated = "Generated"),
        (r.Unknown = "Unknown");
      var T = {},
        N = (0, c.ZP)(
          (0, f.n)(function () {
            return {
              threads: {},
              clientNewThreadIdToServerIdMapping: {},
              threadRetainCounts: {},
            };
          })
        ),
        P = N.getState,
        Z = N.setState,
        S = {
          resolveThreadId: function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : P();
            return null !== (t = n.clientNewThreadIdToServerIdMapping[e]) &&
              void 0 !== t
              ? t
              : e;
          },
          getThreadCustomTitle: function (e) {
            var t,
              n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : P(),
              a = S.resolveThreadId(e, r);
            return null !==
              (n =
                null === (t = r.threads[a]) || void 0 === t
                  ? void 0
                  : t.title) && void 0 !== n
              ? n
              : void 0;
          },
          getThreadDataTitle: function (e) {
            var t,
              n,
              r,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : P(),
              i = S.resolveThreadId(e, a);
            return null !==
              (r =
                null === (t = a.threads[i]) || void 0 === t
                  ? void 0
                  : null === (n = t.initialThreadData) || void 0 === n
                  ? void 0
                  : n.title) && void 0 !== r
              ? r
              : void 0;
          },
          getThreadTitleSource: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : P(),
              n = S.resolveThreadId(e, t);
            return null != t.threads[n] ? t.threads[n].titleSource : a.Unknown;
          },
          getThreadCreateTime: function (e) {
            var t,
              n,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : P(),
              a = S.resolveThreadId(e, r);
            return null === (t = r.threads[a]) || void 0 === t
              ? void 0
              : null === (n = t.initialThreadData) || void 0 === n
              ? void 0
              : n.createTime;
          },
        },
        I = {
          getOrInitThread: function (e) {
            var t = I.resolveThreadId(e);
            return null != P().threads[t]
              ? P().threads[t]
              : (I.resetThread(e), P().threads[e]);
          },
          getServerThreadId: function (e) {
            return k(e) ? P().clientNewThreadIdToServerIdMapping[e] : e;
          },
          setServerIdForNewThread: function (e, t) {
            void 0 === P().clientNewThreadIdToServerIdMapping[e] &&
              Z(function (n) {
                (n.threads[t] = n.threads[e]),
                  delete n.threads[e],
                  (n.clientNewThreadIdToServerIdMapping[e] = t);
              });
          },
          initThreadFromServerData: function (e, t) {
            var n,
              r,
              o,
              l,
              u,
              d,
              c,
              f,
              h,
              v,
              x,
              y =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              j =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : void 0,
              w = I.resolveThreadId(e);
            if (null != P().threads[w] || y) {
              var _ =
                ((r =
                  null ===
                    (n = Object.values(t.mapping).find(function (e) {
                      return null === e.parent;
                    })) || void 0 === n
                    ? void 0
                    : n.id),
                (o = new Set()),
                (l = new Set()),
                (t.moderation_results || []).forEach(function (e) {
                  e.blocked
                    ? l.add(e.message_id)
                    : e.flagged && o.add(e.message_id);
                }),
                {
                  rootId: r,
                  mapping: Object.keys(t.mapping).reduce(function (e, n) {
                    var r,
                      a = t.mapping[n],
                      u = a.parent,
                      d = a.children,
                      c = (0, g._)(a, ["parent", "children"]),
                      f = t.mapping[n].message || m.Cv.createRootMessage();
                    return (
                      l.has(f.id) ? (r = p.sK) : o.has(f.id) && (r = p.Mf),
                      (e[n] = (0, i._)(
                        (0, s._)((0, i._)({}, c), {
                          message: f,
                          children: d || [],
                          parentId: u || "",
                          type: m.uV[f.author.role],
                        }),
                        r && { metadata: r }
                      )),
                      e
                    );
                  }, {}),
                  initialCurrentLeafId: t.current_node,
                  authorName: t.author_name,
                });
              if (
                (null === (u = P().threads[w]) || void 0 === u
                  ? void 0
                  : u.isLoading) !== !1
              ) {
                var C =
                    null !== (d = _.mapping) && void 0 !== d
                      ? d
                      : m.Cv.createTree(),
                  M = {
                    thread: C,
                    initialCurrentLeafId:
                      null !==
                        (f =
                          null !== (c = _.initialCurrentLeafId) && void 0 !== c
                            ? c
                            : _.rootId) && void 0 !== f
                        ? f
                        : "root",
                    threadId: w,
                    title: null !== (h = t.title) && void 0 !== h ? h : null,
                    lastModelUsed: (function e(t, n) {
                      var r,
                        a,
                        i = t[n];
                      return (
                        null == i
                          ? void 0
                          : null === (r = i.message) || void 0 === r
                          ? void 0
                          : null === (a = r.metadata) || void 0 === a
                          ? void 0
                          : a.model_slug
                      )
                        ? i.message.metadata.model_slug
                        : (null == i ? void 0 : i.parentId)
                        ? e(t, i.parentId)
                        : null;
                    })(_.mapping, _.initialCurrentLeafId),
                    hasUserEditableContextFlag:
                      null !== (v = t.has_user_editable_context) &&
                      void 0 !== v &&
                      v,
                    pluginIds:
                      null !== (x = t.plugin_ids) && void 0 !== x ? x : [],
                    authorName: _.authorName,
                    model:
                      "model" in t && null != t.model
                        ? (0, b.H6)(t.model)
                        : void 0,
                    createTime:
                      "create_time" in t
                        ? new Date(1e3 * t.create_time)
                        : void 0,
                  },
                  k = new m.Cv(C),
                  T = M.initialCurrentLeafId;
                Z(function (e) {
                  var t;
                  e.threads[w] = (0, s._)(
                    (0, i._)(
                      {},
                      null !== (t = e.threads[w]) && void 0 !== t ? t : {}
                    ),
                    {
                      initialThreadData: M,
                      title: M.title,
                      titleSource: a.Server,
                      tree: k,
                      currentLeafId: T,
                      isLoading: !1,
                      continuingFromSharedConversationId: j,
                    }
                  );
                }),
                  I.recomputeConversationTurns(
                    w,
                    P().threads[w].currentLeafId,
                    []
                  );
              }
            }
          },
          resetThread: function (e) {
            var t = {
              thread: m.Cv.createTree(),
              initialCurrentLeafId: "root",
              threadId: null,
              title: null,
              lastModelUsed: null,
              pluginIds: [],
              authorName: void 0,
            };
            I.deleteThread(e),
              Z(function (n) {
                n.threads[e] = {
                  initialThreadData: t,
                  tree: new m.Cv(t.thread),
                  title: t.title,
                  titleSource: a.NewChat,
                  currentLeafId: t.initialCurrentLeafId,
                  conversationTurns: [],
                  isLoading: !k(e),
                };
              });
          },
          updateInitialThreadDataForNewThread: function (e, t, n) {
            Z(function (r) {
              (r.threads[e].initialThreadData.lastModelUsed = t),
                (r.threads[e].initialThreadData.pluginIds = n);
            });
          },
          getThreadCurrentLeafId: function (e) {
            var t,
              n,
              r = I.resolveThreadId(e);
            return null !==
              (n =
                null === (t = P().threads[r]) || void 0 === t
                  ? void 0
                  : t.currentLeafId) && void 0 !== n
              ? n
              : "root";
          },
          setThreadCurrentLeafId: function (e, t) {
            var n,
              r,
              a = I.resolveThreadId(e);
            if (null != P().threads[a]) {
              Z(function (e) {
                e.threads[a].currentLeafId = t;
              });
              var i = P();
              I.recomputeConversationTurns(
                a,
                t,
                null !==
                  (r =
                    null === (n = i.threads[a]) || void 0 === n
                      ? void 0
                      : n.conversationTurns) && void 0 !== r
                  ? r
                  : []
              );
            }
          },
          setTitle: function (e, t, n) {
            var r = I.resolveThreadId(e);
            null != P().threads[r] &&
              Z(function (e) {
                (e.threads[r].title = t), (e.threads[r].titleSource = n);
              });
          },
          getTitle: function (e) {
            var t;
            return null !== (t = S.getThreadCustomTitle(e)) && void 0 !== t
              ? t
              : S.getThreadDataTitle(e);
          },
          getTitleAndSource: function (e) {
            var t;
            return {
              title:
                null !== (t = S.getThreadCustomTitle(e)) && void 0 !== t
                  ? t
                  : S.getThreadDataTitle(e),
              titleSource: S.getThreadTitleSource(e),
            };
          },
          updateTree: function (e, t) {
            var n,
              r,
              a,
              i,
              s = I.resolveThreadId(e);
            if (!(null != P().threads[s])) {
              console.warn("Thread does not exist, cannot update tree: ", s);
              return;
            }
            t(I.getTree(e));
            var o = P(),
              l =
                null !==
                  (a =
                    null === (n = o.threads[s]) || void 0 === n
                      ? void 0
                      : n.currentLeafId) && void 0 !== a
                  ? a
                  : "root",
              u =
                null !==
                  (i =
                    null === (r = o.threads[s]) || void 0 === r
                      ? void 0
                      : r.conversationTurns) && void 0 !== i
                  ? i
                  : [];
            I.recomputeConversationTurns(s, l, u);
          },
          getTree: function (e) {
            var t,
              n,
              r = I.resolveThreadId(e);
            return null !==
              (n =
                null === (t = P().threads[r]) || void 0 === t
                  ? void 0
                  : t.tree) && void 0 !== n
              ? n
              : new m.Cv();
          },
          resolveThreadId: function (e) {
            return S.resolveThreadId(e);
          },
          recomputeConversationTurns: function (e, t, n) {
            var r = I.resolveThreadId(e);
            Z(function (e) {
              e.threads[r] &&
                (e.threads[r].conversationTurns =
                  I.computeThreadConversationTurns(r, t, n));
            });
          },
          computeThreadConversationTurns: function (e, t, n) {
            var r = I.resolveThreadId(e);
            return I.getTree(r)
              .getConversationTurns(t)
              .map(function (e, t) {
                var r = null == n ? void 0 : n[t];
                return (0, l.isEqual)(r, e) ? r : e;
              });
          },
          getThreadConversationTurns: function (e, t, n) {
            var r,
              a,
              i,
              s,
              o = I.resolveThreadId(e),
              l =
                null !==
                  (i =
                    null === (r = P().threads[o]) || void 0 === r
                      ? void 0
                      : r.currentLeafId) && void 0 !== i
                  ? i
                  : "root";
            return null != t && t !== l
              ? I.computeThreadConversationTurns(o, t, null != n ? n : [])
              : null !==
                  (s =
                    null === (a = P().threads[o]) || void 0 === a
                      ? void 0
                      : a.conversationTurns) && void 0 !== s
              ? s
              : [];
          },
          getThreadModel: function (e) {
            var t,
              n = I.resolveThreadId(e);
            return null === (t = P().threads[n]) || void 0 === t
              ? void 0
              : t.initialThreadData.model;
          },
          removeContinuingFromSharedConversationId: function (e) {
            var t = I.resolveThreadId(e);
            Z(function (e) {
              var n;
              (null === (n = e.threads[t]) || void 0 === n
                ? void 0
                : n.continuingFromSharedConversationId) != null &&
                delete e.threads[t].continuingFromSharedConversationId;
            });
          },
          deleteThread: function (e) {
            Z(function (t) {
              delete t.threads[e],
                delete t.clientNewThreadIdToServerIdMapping[e];
            });
          },
          retainThread: function (e) {
            Z(function (t) {
              var n;
              t.threadRetainCounts[e] =
                (null !== (n = t.threadRetainCounts[e]) && void 0 !== n
                  ? n
                  : 0) + 1;
            }),
              clearTimeout(T[e]);
          },
          releaseThread: function (e) {
            null != P().threads[e] &&
              (Z(function (t) {
                var n;
                t.threadRetainCounts[e] = Math.max(
                  (null !== (n = t.threadRetainCounts[e]) && void 0 !== n
                    ? n
                    : 0) - 1,
                  0
                );
              }),
              P().threadRetainCounts[e] > 0 ||
                (clearTimeout(T[e]),
                (T[e] = setTimeout(function () {
                  null == P().threads[e] ||
                    P().threadRetainCounts[e] > 0 ||
                    I.deleteThread(e);
                }, 3e4))));
          },
        },
        F = function (e) {
          var t = (0, u.useRouter)(),
            n = (0, h.kP)().session,
            r = (0, d.useContext)(j.QL).historyDisabled,
            a = (0, d.useContext)(j.gB);
          (0, o.a)(
            ["conversation", e],
            function () {
              return y.ZP.getConversation(
                e,
                null == n ? void 0 : n.accessToken
              );
            },
            {
              enabled:
                !k(e) &&
                (null == n ? void 0 : n.accessToken) !== void 0 &&
                !r &&
                !a,
              onError: function () {
                t.replace("/"),
                  x.m.danger("Unable to load conversation ".concat(e));
              },
              onSuccess: function (t) {
                t && I.initThreadFromServerData(e, t);
              },
            }
          ),
            (0, d.useEffect)(
              function () {
                I.getOrInitThread(e);
              },
              [e, t]
            );
        },
        E = function (e) {
          return N(function (t) {
            return k(e) ? t.clientNewThreadIdToServerIdMapping[e] : e;
          });
        },
        D = function (e) {
          return N(function (t) {
            var n,
              r,
              a = I.resolveThreadId(e);
            return null !==
              (r =
                null === (n = t.threads[a]) || void 0 === n
                  ? void 0
                  : n.initialThreadData) && void 0 !== r
              ? r
              : Object.freeze({
                  thread: m.Cv.createTree(),
                  threadId: null,
                  initialCurrentLeafId: "root",
                  title: null,
                  lastModelUsed: null,
                });
          });
        },
        L = function (e) {
          return N(function (t) {
            var n,
              r,
              a = I.resolveThreadId(e);
            return (
              null !==
                (r =
                  null === (n = t.threads[a]) || void 0 === n
                    ? void 0
                    : n.isLoading) &&
              void 0 !== r &&
              r
            );
          });
        },
        A = function (e) {
          var t = N(function (t) {
            var n,
              r,
              a = I.resolveThreadId(e);
            return null === (n = t.threads[a]) || void 0 === n
              ? void 0
              : null === (r = n.initialThreadData) || void 0 === r
              ? void 0
              : r.pluginIds;
          });
          return (0, d.useMemo)(
            function () {
              return null != t ? t : [];
            },
            [t]
          );
        },
        R = function (e) {
          return N(function () {
            return I.getThreadCurrentLeafId(e);
          });
        },
        U = function (e) {
          return N(function () {
            return I.getThreadModel(e);
          });
        },
        B = function (e, t) {
          var n = (0, d.useRef)([]);
          return N(function () {
            var r,
              a = I.getThreadConversationTurns(e, t, n.current);
            return (
              (n.current = a),
              null !== (r = null == a ? void 0 : a.length) && void 0 !== r
                ? r
                : 0
            );
          });
        },
        O = function (e, t) {
          var n = (0, d.useRef)([]);
          return N(function () {
            var r = I.getThreadConversationTurns(e, t, n.current);
            return (n.current = r), r;
          });
        },
        q = function (e, t, n) {
          var r = (0, d.useRef)([]);
          return N(function () {
            var a = I.getThreadConversationTurns(e, n, r.current);
            return (r.current = a), a[t];
          });
        },
        z = function (e) {
          var t = R(e);
          return (0, d.useMemo)(
            function () {
              var n,
                r,
                a = I.getThreadConversationTurns(e, t, []),
                i =
                  null !== (n = null == a ? void 0 : a.length) && void 0 !== n
                    ? n
                    : 0,
                s =
                  null !== (r = null == a ? void 0 : a[i - 1]) && void 0 !== r
                    ? r
                    : null;
              return 0 === i ? t : m.Cv.getRequestIdFromConversationTurn(s);
            },
            [t, e]
          );
        },
        H = function (e) {
          return N(function () {
            return I.getTitle(e);
          });
        },
        W = function (e) {
          return N(function () {
            return I.getTitleAndSource(e);
          });
        },
        V = function (e) {
          return N(function () {
            var t,
              n = I.resolveThreadId(e);
            return null === (t = P().threads[n]) || void 0 === t
              ? void 0
              : t.continuingFromSharedConversationId;
          });
        },
        J = function (e) {
          return N(function () {
            var t,
              n,
              r = I.resolveThreadId(e);
            return null === (t = P().threads[r]) || void 0 === t
              ? void 0
              : null === (n = t.initialThreadData) || void 0 === n
              ? void 0
              : n.authorName;
          });
        },
        G = function (e, t) {
          return N(function () {
            return I.getTree(e).getNode(t);
          });
        },
        $ = function (e, t) {
          return N(function () {
            var n, r;
            return (
              null !==
                (r =
                  null === (n = I.getTree(e)) || void 0 === n
                    ? void 0
                    : n.getHasErrorFromNode(t)) &&
              void 0 !== r &&
              r
            );
          });
        },
        Q = function (e, t) {
          return N(function () {
            var n, r;
            return (
              null !==
                (r =
                  null === (n = I.getTree(e)) || void 0 === n
                    ? void 0
                    : n.isMessageIncomplete(t)) &&
              void 0 !== r &&
              r
            );
          });
        },
        Y = function (e, t) {
          return N(function () {
            var n = I.getTree(e);
            return null == n
              ? []
              : n
                  .getBranchFromLeaf(t)
                  .filter(function (e) {
                    return e.type !== v.Jq.Root;
                  })
                  .map(function (e) {
                    return e.message;
                  });
          });
        },
        K = function (e) {
          var t,
            n = I.getTree(e).getUserContext();
          if (null == n) return null;
          var r = n.message;
          return (null === (t = r.metadata) || void 0 === t
            ? void 0
            : t.user_context_message_parts) &&
            r.metadata.user_context_message_parts.length > 0
            ? r.metadata.user_context_message_parts.join("\n")
            : (0, w.RR)(r);
        },
        X = function (e) {
          var t = N(function (t) {
            var n,
              r,
              a = I.resolveThreadId(e);
            return null === (n = t.threads[a]) || void 0 === n
              ? void 0
              : null === (r = n.initialThreadData) || void 0 === r
              ? void 0
              : r.hasUserEditableContextFlag;
          });
          return null != K(e) || !!t;
        },
        ee = function (e) {
          return N(function () {
            var t,
              n = I.resolveThreadId(e);
            return (
              (null === (t = P().threads[n]) || void 0 === t
                ? void 0
                : t.continuingFromSharedConversationId) != null
            );
          });
        },
        et = function (e) {
          var t,
            n,
            r,
            a = D(e),
            i =
              null !==
                (r =
                  null == a
                    ? void 0
                    : null === (t = a.model) || void 0 === t
                    ? void 0
                    : t.id) && void 0 !== r
                ? r
                : null == a
                ? void 0
                : a.lastModelUsed,
            s = (0, b.B9)(),
            o = void 0 != i ? s.get(i) : void 0;
          return (
            (null == o
              ? void 0
              : null === (n = o.capabilities) || void 0 === n
              ? void 0
              : n.multimodal) !== void 0
          );
        };
    },
    32689: function (e, t, n) {
      n.d(t, {
        B: function () {
          return a;
        },
        tN: function () {
          return c;
        },
        vm: function () {
          return f;
        },
      });
      var r,
        a,
        i,
        s = n(39324),
        o = n(81292),
        l = n(85023);
      ((r = a || (a = {})).AccountPortal = "account-portal"),
        (r.UserContext = "user-context"),
        (r.DownloadMessages = "download-messages"),
        (r.InviteUsersToWorkspace = "invite-users-to-workspace");
      var u = "UiState.isNavigationCollapsed.1",
        d = {
          isDesktopNavCollapsed:
            null !== (i = l.m.getItem(u)) && void 0 !== i && i,
          sharingModalThreadId: void 0,
          isFilesModalOpen: !1,
          activeSidebar: !1,
          activeModals: new Set(),
        },
        c = (0, o.ZP)()(function () {
          return (0, s._)({}, d);
        }),
        f = {
          toggleDesktopNavCollapsed: function () {
            c.setState(function (e) {
              var t = !e.isDesktopNavCollapsed;
              return l.m.setItem(u, t), { isDesktopNavCollapsed: t };
            });
          },
          openSharingModal: function (e) {
            c.setState({ sharingModalThreadId: e });
          },
          closeSharingModal: function () {
            c.setState({ sharingModalThreadId: void 0 });
          },
          openFilesModal: function () {
            c.setState({ isFilesModalOpen: !0 });
          },
          closeFilesModal: function () {
            c.setState({ isFilesModalOpen: !1 });
          },
          setActiveSidebar: function (e) {
            c.setState({ activeSidebar: e });
          },
          toggleActiveSidebar: function (e) {
            c.setState(function (t) {
              return { activeSidebar: t.activeSidebar !== e && e };
            });
          },
          openModal: function (e) {
            c.setState(function (t) {
              var n = new Set(t.activeModals);
              return n.add(e), { activeModals: n };
            });
          },
          closeModal: function (e) {
            c.setState(function (t) {
              var n = new Set(t.activeModals);
              return n.delete(e), { activeModals: n };
            });
          },
        };
    },
    21437: function (e, t, n) {
      n.d(t, {
        Fl: function () {
          return _;
        },
        N2: function () {
          return w;
        },
        tr: function () {
          return a;
        },
      });
      var r,
        a,
        i,
        s = n(96237),
        o = n(39324),
        l = n(71209),
        u = n(22830),
        d = n(35448),
        c = n(24396),
        f = n(70079),
        h = n(81292),
        g = n(32787),
        m = n(24274),
        p = n(64135),
        v = {
          isBetaFeaturesUiEnabled: !1,
          isBrowsingAvailable: !1,
          isBrowsingEnabled: !1,
          isPluginsAvailable: !1,
          isPluginsEnabled: !1,
          isCodeInterpreterAvailable: !1,
          isCodeInterpreterEnabled: !1,
        };
      ((r = a || (a = {})).BROWSING = "browsing"),
        (r.CODE_INTERPRETER = "code_interpreter"),
        (r.PLUGINS = "plugins");
      var x =
          ((i = {}),
          (0, s._)(i, a.BROWSING, "isBrowsingEnabled"),
          (0, s._)(i, a.CODE_INTERPRETER, "isCodeInterpreterEnabled"),
          (0, s._)(i, a.PLUGINS, "isPluginsEnabled"),
          i),
        b = (0, h.ZP)()(function () {
          return v;
        }),
        y = {
          updateUserSettings: function (e) {
            b.setState(function (t) {
              return (0, o._)({}, t, e);
            });
          },
          updateUserSettingsFromFeatures: function (e) {
            b.setState(function (t) {
              var n = y.getUserSettingsFromFeatures(e, t);
              return (0, o._)({}, t, n);
            });
          },
          getUserSettingsFromFeatures: function (e, t) {
            return Object.entries(e).reduce(function (e, n) {
              var r = (0, u._)(n, 2),
                a = r[0],
                i = r[1],
                d = x[a],
                c = !1;
              return ((("isBrowsingEnabled" === d && t.isBrowsingAvailable) ||
                ("isCodeInterpreterEnabled" === d &&
                  t.isCodeInterpreterAvailable) ||
                ("isPluginsEnabled" === d && t.isPluginsAvailable)) &&
                (c = i),
              d)
                ? (0, l._)((0, o._)({}, e), (0, s._)({}, d, c))
                : e;
            }, {});
          },
        },
        j = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return ["userSettings", e];
        };
      function w() {
        var e = (0, g.kP)().session,
          t = (0, d.NL)();
        return function () {
          return t.invalidateQueries({
            queryKey: j(null == e ? void 0 : e.accessToken),
          });
        };
      }
      function _() {
        var e = (0, g.kP)().session,
          t = (0, p.hz)(),
          n = t.has("beta_features");
        return (
          (0, c.a)(
            j(null == e ? void 0 : e.accessToken),
            function () {
              return m.ZP.getUserSettingBetaFeatures(e.accessToken).then(
                function (e) {
                  return null != e && y.updateUserSettingsFromFeatures(e), e;
                }
              );
            },
            { enabled: n && (null == e ? void 0 : e.accessToken) != null }
          ),
          (0, f.useEffect)(
            function () {
              y.updateUserSettings({
                isBetaFeaturesUiEnabled: n,
                isBrowsingAvailable:
                  t.has("browsing_available") || t.has("tools"),
                isCodeInterpreterAvailable:
                  t.has("code_interpreter_available") || t.has("tools2"),
                isPluginsAvailable:
                  t.has("plugins_available") || t.has("tools3"),
              });
            },
            [t, n]
          ),
          b(function (e) {
            return e;
          })
        );
      }
    },
    36716: function (e, t, n) {
      n.d(t, {
        Op: function () {
          return h;
        },
        Qd: function () {
          return d;
        },
        T$: function () {
          return c;
        },
        s8: function () {
          return f;
        },
      });
      var r = n(35250),
        a = n(1454),
        i = n(180),
        s = n(38317),
        o = n(57924),
        l = "&#8203;",
        u = "oaicite:";
      function d(e, t) {
        if (!t) return e;
        for (var n = [], r = 1, a = {}, i = 0; i < t.length; i++) {
          var s = t[i],
            o = s.metadata,
            d = s.invalid_reason;
          if (o) {
            var c = o.url;
            null == a[c] && ((a[c] = r), r++), n.push(a[c]);
          } else null != d && (n.push(r), r++);
        }
        for (var f = t.length - 1; f >= 0; f--) {
          var h = t[f],
            g = h.start_ix,
            m = h.end_ix,
            p = h.metadata,
            v = h.invalid_reason,
            x = { number: n[f] };
          p ? (x.metadata = p) : null != v && (x.invalid_reason = v);
          var b = !1;
          if (f > 0) {
            var y,
              j,
              w = t[f - 1];
            (null === (y = w.metadata) || void 0 === y ? void 0 : y.url) ===
              (null === (j = h.metadata) || void 0 === j ? void 0 : j.url) &&
              0 === e.slice(w.end_ix, h.start_ix).trim().length &&
              ((e = e.slice(0, w.end_ix) + e.slice(h.end_ix)), (b = !0));
          }
          b ||
            (e =
              e.slice(0, g) +
              ""
                .concat(l, "``")
                .concat(u)
                .concat(JSON.stringify(x), "``")
                .concat(l) +
              e.slice(m));
        }
        return e;
      }
      function c(e) {
        if (!e.startsWith(u)) return null;
        try {
          return JSON.parse(e.slice(u.length));
        } catch (e) {
          return { number: -1 };
        }
      }
      function f(e) {
        var t,
          n = e.displayInfo;
        return (0, r.jsx)(o.u, {
          label: (0, r.jsx)(h, {
            pageInfo: n.metadata,
            invalidReason: n.invalid_reason,
          }),
          side: "top",
          sideOffset: 4,
          withArrow: !1,
          interactive: !0,
          wide: !0,
          children: (0, r.jsx)("a", {
            href: null === (t = n.metadata) || void 0 === t ? void 0 : t.url,
            target: "_blank",
            rel: "noreferrer",
            className: "px-0.5 text-green-600 !no-underline",
            children: (0, r.jsx)("sup", { children: n.number }),
          }),
        });
      }
      function h(e) {
        var t = e.pageInfo,
          n = e.invalidReason,
          o = e.onClick;
        return (0, r.jsx)("a", {
          href: null == t ? void 0 : t.url,
          target: "_blank",
          rel: "noreferrer",
          className: "text-xs !no-underline",
          onClick: o,
          children: t
            ? (0, r.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, r.jsx)("div", {
                    className: "flex shrink-0 items-center justify-center",
                    children: (0, r.jsx)(i.Z, {
                      url: t.url,
                      className: "my-0",
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "max-w-xs truncate",
                    children: t.title,
                  }),
                  (0, r.jsx)("div", {
                    className: "shrink-0",
                    children: (0, r.jsx)(s.ZP, { icon: a.AlO, size: "xsmall" }),
                  }),
                ],
              })
            : (0, r.jsx)("div", {
                className: "text-red-500",
                children: null != n ? n : "Invalid citation",
              }),
        });
      }
    },
    77442: function (e, t, n) {
      n.d(t, {
        _G: function () {
          return a;
        },
        dQ: function () {
          return g;
        },
        oc: function () {
          return c;
        },
        w$: function () {
          return f;
        },
        x_: function () {
          return h;
        },
      });
      var r,
        a,
        i,
        s = n(96237),
        o = n(22830),
        l = n(70079);
      ((r = a || (a = {})).Mobile = "mobile"),
        (r.Small = "small"),
        (r.Medium = "medium"),
        (r.Large = "large"),
        (r.XLarge = "xlarge");
      var u =
        ((i = {}),
        (0, s._)(i, a.Small, 640),
        (0, s._)(i, a.Medium, 768),
        (0, s._)(i, a.Large, 1024),
        (0, s._)(i, a.XLarge, 1280),
        i);
      function d(e) {
        var t = function () {
            i(n(e));
          },
          n = function (e) {
            return window.matchMedia(e).matches;
          },
          r = (0, o._)((0, l.useState)(n(e)), 2),
          a = r[0],
          i = r[1];
        return (
          (0, l.useEffect)(
            function () {
              var n = window.matchMedia(e);
              return (
                t(),
                n.addListener
                  ? n.addListener(t)
                  : n.addEventListener("change", t),
                function () {
                  n.removeListener
                    ? n.removeListener(t)
                    : n.removeEventListener("change", t);
                }
              );
            },
            [e]
          ),
          a
        );
      }
      function c() {
        return d("(min-width: ".concat(u[a.Small], "px)"));
      }
      function f() {
        return d("(min-width: ".concat(u[a.Medium], "px)"));
      }
      function h() {
        return d("(min-width: ".concat(u[a.Large], "px)"));
      }
      function g() {
        var e = c(),
          t = f(),
          n = h();
        return d("(min-width: ".concat(u[a.XLarge], "px)"))
          ? a.XLarge
          : n
          ? a.Large
          : t
          ? a.Medium
          : e
          ? a.Small
          : a.Mobile;
      }
    },
    56244: function (e, t, n) {
      n.d(t, {
        Cs: function () {
          return a;
        },
        Ej: function () {
          return p;
        },
        JD: function () {
          return f;
        },
        RR: function () {
          return m;
        },
        Rc: function () {
          return g;
        },
        fj: function () {
          return v;
        },
        lD: function () {
          return c;
        },
        oH: function () {
          return d;
        },
        qi: function () {
          return u;
        },
        qs: function () {
          return h;
        },
        rH: function () {
          return l;
        },
      });
      var r,
        a,
        i = n(22830),
        s = n(69403);
      ((r = a || (a = {}))[(r.Text = 0)] = "Text"),
        (r[(r.Browsing = 1)] = "Browsing"),
        (r[(r.BrowseTool = 2)] = "BrowseTool"),
        (r[(r.Code = 3)] = "Code"),
        (r[(r.CodeExecutionOutput = 4)] = "CodeExecutionOutput"),
        (r[(r.MultimodalText = 5)] = "MultimodalText"),
        (r[(r.Plugin = 6)] = "Plugin"),
        (r[(r.PluginTool = 7)] = "PluginTool"),
        (r[(r.Unknown = 8)] = "Unknown");
      var o = [];
      function l(e) {
        if (e.author.role === s.uU.Assistant) {
          var t = v(e.recipient);
          if (
            "browser" === e.recipient ||
            "browser_one_box" === e.recipient ||
            (null != t && o.includes(t.pluginNamespace))
          )
            return a.Browsing;
          if ("python" === e.recipient) return a.Code;
          if (null != t) return a.Plugin;
          if ("browsing_team" === e.recipient) return a.Text;
        } else if (e.author.role === s.uU.Tool) {
          var n = v(e.author.name);
          if (
            "browser" === e.author.name ||
            "browser_one_box" === e.author.name ||
            "browsing_team" === e.author.name ||
            (null != n && o.includes(n.pluginNamespace))
          )
            return a.BrowseTool;
          if (e.content.content_type === s.PX.ExecutionOutput)
            return a.CodeExecutionOutput;
          if (null != n || "plugin_service" === e.author.name)
            return a.PluginTool;
        }
        return e.content.content_type === s.PX.Text ||
          e.content.content_type === s.PX.MultimodalText
          ? a.Text
          : a.Unknown;
      }
      function u(e) {
        var t;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : t.finish_details) != null
        );
      }
      function d(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : null === (n = t.finish_details) || void 0 === n
            ? void 0
            : n.type) === "stop"
        );
      }
      function c(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : null === (n = t.finish_details) || void 0 === n
            ? void 0
            : n.type) === "max_tokens"
        );
      }
      function f(e) {
        var t, n;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : null === (n = t.finish_details) || void 0 === n
            ? void 0
            : n.type) === "interrupted"
        );
      }
      function h(e) {
        var t;
        return (
          (null === (t = e.metadata) || void 0 === t
            ? void 0
            : t.message_type) === "continue"
        );
      }
      function g(e) {
        var t;
        return null === (t = e.metadata) || void 0 === t
          ? void 0
          : t.model_slug;
      }
      function m(e) {
        switch (e.content.content_type) {
          case "text":
            return e.content.parts.join("");
          case "multimodal_text":
            return e.content.parts
              .map(function (e) {
                return "string" == typeof e
                  ? e
                  : '[media pointer="'.concat(e.asset_pointer, '"]');
              })
              .join("\n");
          case "tether_browsing_display":
            return e.content.result;
          case "tether_quote":
          case "tether_browsing_code":
          case "code":
          case "execution_output":
          case "system_error":
            return e.content.text;
          case "system_message":
            var t = e.content.text,
              n = !0,
              r = !1,
              a = void 0;
            try {
              for (
                var i,
                  s = Object.values(e.content.tools_section)[Symbol.iterator]();
                !(n = (i = s.next()).done);
                n = !0
              ) {
                var o = i.value;
                t += "\n\n".concat(o);
              }
            } catch (e) {
              (r = !0), (a = e);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (r) throw a;
              }
            }
            return t;
          default:
            return "";
        }
      }
      function p(e) {
        var t;
        return null !== (t = e.recipient) && void 0 !== t ? t : "";
      }
      function v(e) {
        if (null == e || !e.includes(".")) return null;
        var t = (0, i._)(e.split("."), 2);
        return { pluginNamespace: t[0], pluginFunctionName: t[1] };
      }
    },
    57311: function (e, t, n) {
      n.d(t, {
        Cv: function () {
          return T;
        },
        Vh: function () {
          return j;
        },
        uV: function () {
          return _;
        },
      });
      var r,
        a,
        i = n(51217),
        s = n(53596),
        o = n(66816),
        l = n(49406),
        u = n(31819),
        d = n(96237),
        c = n(39324),
        f = n(70216),
        h = n(81949),
        g = n(74050),
        m = n(84251),
        p = n.n(m),
        v = n(8844),
        x = n(75179),
        b = n(69403),
        y = n(56244),
        j = "request-",
        w =
          ((r = {}),
          (0, d._)(r, b.Jq.Root, b.uU.Unknown),
          (0, d._)(r, b.Jq.Prompt, b.uU.User),
          (0, d._)(r, b.Jq.Completion, b.uU.Assistant),
          (0, d._)(r, b.Jq.System, b.uU.System),
          r),
        _ =
          ((a = {}),
          (0, d._)(a, b.uU.Unknown, b.Jq.Root),
          (0, d._)(a, b.uU.System, b.Jq.System),
          (0, d._)(a, b.uU.User, b.Jq.Prompt),
          (0, d._)(a, b.uU.Assistant, b.Jq.Completion),
          (0, d._)(a, b.uU.Critic, b.Jq.Completion),
          (0, d._)(a, b.uU.Tool, b.Jq.Completion),
          a);
      function C(e) {
        var t = (0, v.Z)();
        return "".concat(e).concat(t.substring(e.length));
      }
      var M = new WeakMap(),
        k = new WeakMap(),
        T = (function () {
          function e(t) {
            (0, i._)(this, e),
              (0, o._)(this, M, { writable: !0, value: void 0 }),
              (0, o._)(this, k, { writable: !0, value: void 0 }),
              (0, l._)(this, M, null != t ? t : e.createTree());
            var n,
              r = Object.values((0, s._)(this, M)).find(function (e) {
                return e.type === b.Jq.Root;
              });
            (0, l._)(
              this,
              k,
              null !== (n = null == r ? void 0 : r.id) && void 0 !== n
                ? n
                : "root"
            );
          }
          var t = e.prototype;
          return (
            (t.getNode = function (e) {
              return (0, s._)(this, M)[e];
            }),
            (t.getMessage = function (e) {
              return (0, s._)(this, M)[e].message;
            }),
            (t.getMessageId = function (e) {
              try {
                return (0, s._)(this, M)[e].message.id;
              } catch (t) {
                throw (
                  (console.error(
                    "Tree: Unable to getMessageId for node ".concat(e)
                  ),
                  t)
                );
              }
            }),
            (t.getMetadata = function (e) {
              return (0, s._)(this, M)[e].metadata;
            }),
            (t.getLeafFromNode = function (e) {
              for (var t = (0, s._)(this, M)[e]; ; ) {
                if (0 === t.children.length) return t;
                t = (0, s._)(this, M)[t.children.values().next().value];
              }
            }),
            (t.getParent = function (e) {
              var t = (0, s._)(this, M)[e].parentId;
              return (0, s._)(this, M)[t];
            }),
            (t.getParentId = function (e) {
              var t;
              return (
                (null === (t = this.getParent(e)) || void 0 === t
                  ? void 0
                  : t.id) || "root"
              );
            }),
            (t.getNodeByMessageId = function (e) {
              var t = !0,
                n = !1,
                r = void 0;
              try {
                for (
                  var a,
                    i = Object.values((0, s._)(this, M))[Symbol.iterator]();
                  !(t = (a = i.next()).done);
                  t = !0
                ) {
                  var o = a.value;
                  if (o.message.id === e) return o;
                }
              } catch (e) {
                (n = !0), (r = e);
              } finally {
                try {
                  t || null == i.return || i.return();
                } finally {
                  if (n) throw r;
                }
              }
            }),
            (t.getBranchFromLeaf = function (e) {
              for (
                var t,
                  n = [],
                  r =
                    null !== (t = (0, s._)(this, M)[e]) && void 0 !== t
                      ? t
                      : this.getNodeByMessageId(e);
                null != r;

              ) {
                if (n.includes(r)) {
                  console.error("Infinite loop detected in getBranchFromLeaf.");
                  break;
                }
                if ((n.push(r), "root" === r.type)) break;
                r = (0, s._)(this, M)[r.parentId];
              }
              return n.reverse();
            }),
            (t.getChildrenFromNode = function (e) {
              var t = this,
                n = (0, s._)(this, M)[e];
              return null == n
                ? []
                : Array.from(n.children).map(function (e) {
                    return (0, s._)(t, M)[e];
                  });
            }),
            (t.getFirstPrompt = function () {
              for (var e, t, n = this.getNode((0, s._)(this, k)); ; ) {
                if (null == n) return;
                if (
                  n.type === b.Jq.Prompt ||
                  (n.type === b.Jq.System &&
                    (null === (e = n.message.metadata) || void 0 === e
                      ? void 0
                      : e.upload_filename))
                )
                  return n;
                n = (0, s._)(this, M)[
                  null === (t = n.children) || void 0 === t ? void 0 : t[0]
                ];
              }
            }),
            (t.getUserContext = function () {
              for (var e, t, n = this.getNode((0, s._)(this, k)); ; ) {
                if (null == n) return;
                if (
                  (n.type === b.Jq.System ||
                    n.message.author.role === b.uU.System) &&
                  (null === (e = n.message.metadata) || void 0 === e
                    ? void 0
                    : e.is_user_system_message)
                )
                  return n;
                if (n.type === b.Jq.Prompt) return null;
                n = (0, s._)(this, M)[
                  null === (t = n.children) || void 0 === t ? void 0 : t[0]
                ];
              }
            }),
            (t.isMessageIncomplete = function (e) {
              var t = this.getMessage(e);
              return (0, y.lD)(t);
            }),
            (t.addNodeToEnd = function (e, t) {
              if (null == (0, s._)(this, M)[e]) return (0, d._)({}, t.id, t);
              (0, l._)(
                this,
                M,
                p()(
                  (0, s._)(this, M),
                  (0, d._)({ $merge: (0, d._)({}, t.id, t) }, e, {
                    children: {
                      $apply: function (e) {
                        return Array.from(new Set((0, h._)(e).concat([t.id])));
                      },
                    },
                  })
                )
              );
            }),
            (t.appendSystemMessageToRoot = function (e) {
              var t,
                n,
                r =
                  null === (t = this.getFirstPrompt()) || void 0 === t
                    ? void 0
                    : t.parentId;
              if (null != r) {
                var a = this.getNode(r),
                  i = this.getNode(a.children[0]),
                  o = {
                    id: e.id,
                    children: a.children,
                    parentId: a.id,
                    message: e,
                  };
                (0, l._)(
                  this,
                  M,
                  p()(
                    (0, s._)(this, M),
                    ((n = { $merge: (0, d._)({}, o.id, o) }),
                    (0, d._)(n, a.id, { children: { $set: [o.id] } }),
                    (0, d._)(n, i.id, { parentId: { $set: o.id } }),
                    n)
                  )
                );
              }
            }),
            (t.addNode = function (t, n, r, a, i, s) {
              var o =
                  "string" == typeof n
                    ? e.getTextAsMessage(n, a, s)
                    : "content_type" in n
                    ? e.getContentAsMessage(n, a, s)
                    : n,
                l = (0, c._)(
                  { id: t, children: [], parentId: r, type: a, message: o },
                  i ? { nodeMetadata: i } : {}
                );
              this.addNodeToEnd(r, l);
            }),
            (t.updateNode = function (e, t) {
              (0, l._)(this, M, p()((0, s._)(this, M), (0, d._)({}, e, t)));
            }),
            (t.updateNodeMessage = function (e, t) {
              (0, l._)(
                this,
                M,
                p()(
                  (0, s._)(this, M),
                  (0, d._)({}, e, { message: { $set: t } })
                )
              );
            }),
            (t.updateNodeMessageMetadata = function (e, t) {
              (0, l._)(
                this,
                M,
                p()(
                  (0, s._)(this, M),
                  (0, d._)({}, e, { message: { metadata: { $merge: t } } })
                )
              );
            }),
            (t.updateNodeText = function (e, t) {
              (0, l._)(
                this,
                M,
                p()(
                  (0, s._)(this, M),
                  (0, d._)({}, e, {
                    message: { content: { parts: { $set: [t] } } },
                  })
                )
              );
            }),
            (t.deleteNode = function (e) {
              var t = (0, s._)(this, M),
                n = t[e],
                r = (0, f._)(t, [e].map(g._)),
                a = n.parentId;
              (0, l._)(
                this,
                M,
                p()(
                  r,
                  (0, d._)({}, a, {
                    children: {
                      $apply: function (t) {
                        return t.filter(function (t) {
                          return t !== e;
                        });
                      },
                    },
                  })
                )
              );
            }),
            (t.getTextFromNode = function (e) {
              return (0, y.RR)(this.getMessage(e));
            }),
            (t.getHasErrorFromNode = function (e) {
              var t,
                n,
                r = this.getNode(e);
              return (
                (null == r
                  ? void 0
                  : null === (t = r.metadata) || void 0 === t
                  ? void 0
                  : t.errType) === "danger" ||
                (null == r
                  ? void 0
                  : null === (n = r.metadata) || void 0 === n
                  ? void 0
                  : n.errType) === "warning"
              );
            }),
            (t.getIsBlockedFromNode = function (e) {
              var t,
                n,
                r = this.getNode(e);
              return (
                (null == r
                  ? void 0
                  : null === (t = r.metadata) || void 0 === t
                  ? void 0
                  : t.errCode) === x.Dd &&
                (null == r
                  ? void 0
                  : null === (n = r.metadata) || void 0 === n
                  ? void 0
                  : n.errType) === "danger"
              );
            }),
            (t.getTextFromThread = function (e) {
              return this.getBranchFromLeaf(e)
                .filter(function (e) {
                  return e.type !== b.Jq.Root && e.type !== b.Jq.System;
                })
                .map(function (e) {
                  return (0, y.RR)(e.message);
                })
                .join("\n\n");
            }),
            (t.shouldFilterNode = function (e) {
              var t = e.message,
                n = t.content.content_type,
                r = e.message.author.role === b.uU.System,
                a = e.message.author.role === b.uU.Tool,
                i = void 0 !== t.recipient && "all" !== t.recipient;
              return (
                r ||
                i ||
                (a &&
                  !(
                    "code" === n ||
                    "execution_output" === n ||
                    "system_error" === n ||
                    "tether_browsing_display" === n ||
                    "tether_quote" === n
                  ))
              );
            }),
            (t.getTextFromTurnsById = function (e) {
              var t = this;
              return e
                .map(function (e) {
                  return t.getNode(e);
                })
                .filter(function (e) {
                  return !t.shouldFilterNode(e);
                })
                .map(function (e) {
                  return t.getTextFromNode(e.id);
                })
                .join("\n\n");
            }),
            (t.getTextFromLastNTurns = function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return this.getConversationTurns(e, this.shouldFilterNode)
                .slice(-t)
                .map(function (e) {
                  var t = e.messages
                    .map(function (e) {
                      return (0, y.RR)(e.message);
                    })
                    .filter(function (e) {
                      return "" !== e;
                    })
                    .join("\n");
                  return n ? "[".concat(e.role, "]\n").concat(t) : t;
                })
                .join("\n");
            }),
            (t.getConversationTurns = function (e, t) {
              var n = this,
                r = [];
              return (
                this.getBranchFromLeaf(e).forEach(function (e) {
                  var a = e.id,
                    i = e.parentId,
                    o = e.message,
                    l = e.metadata;
                  if (null == t || !t(e)) {
                    var u = r[r.length - 1];
                    (null == u ? void 0 : u.role) === o.author.role ||
                    o.author.role === b.uU.Tool
                      ? r[r.length - 1].messages.push(
                          (0, c._)({ nodeId: a, parentId: i, message: o }, l)
                        )
                      : r.push({
                          role: o.author.role,
                          messages: [
                            (0, c._)({ nodeId: a, parentId: i, message: o }, l),
                          ],
                          variantIds: i
                            ? Array.from((0, s._)(n, M)[i].children)
                            : [a],
                        });
                  }
                }),
                r
              );
            }),
            (t.getLastValidNode = function (e) {
              for (
                var t, n = this.getNode(e);
                null != n &&
                null != n &&
                (null === (t = n.metadata) || void 0 === t ? void 0 : t.err) !=
                  null;

              )
                n = this.getNode(n.parentId);
              return n;
            }),
            (t.getParentPromptNode = function (e) {
              for (
                var t, n = this.getNode(e);
                null != n &&
                null != n &&
                (null === (t = n.message) || void 0 === t
                  ? void 0
                  : t.author.role) !== b.uU.User;

              )
                n = this.getNode(n.parentId);
              return n;
            }),
            (t.messageIdToNodeId = function (e) {
              if (null != (0, s._)(this, M)[e]) return e;
              var t = !0,
                n = !1,
                r = void 0;
              try {
                for (
                  var a,
                    i = Object.values((0, s._)(this, M))[Symbol.iterator]();
                  !(t = (a = i.next()).done);
                  t = !0
                ) {
                  var o,
                    l = a.value;
                  if (
                    (null === (o = l.message) || void 0 === o
                      ? void 0
                      : o.id) === e
                  )
                    return l.id;
                }
              } catch (e) {
                (n = !0), (r = e);
              } finally {
                try {
                  t || null == i.return || i.return();
                } finally {
                  if (n) throw r;
                }
              }
              return e;
            }),
            (t.unstable_getMapping = function () {
              return (0, s._)(this, M);
            }),
            (e.createTree = function () {
              return {
                root: {
                  id: "root",
                  children: [],
                  parentId: "",
                  type: b.Jq.Root,
                  message: e.createRootMessage(),
                },
              };
            }),
            (e.createRootMessage = function () {
              return {
                id: C("aaa1"),
                author: { role: w[b.Jq.Root] },
                content: { content_type: b.PX.Text, parts: [] },
              };
            }),
            (e.getRequestIdFromConversationTurn = function (e) {
              for (var t = e.messages.length - 1; t >= 0; t--) {
                var n = e.messages[t];
                if (n.nodeId.startsWith(j)) return n.nodeId;
              }
              return e.messages[0].nodeId;
            }),
            (e.getTextAsMessage = function (e, t, n) {
              var r = { content_type: b.PX.Text, parts: [e] };
              return this.getContentAsMessage(r, t, n);
            }),
            (e.getContentAsMessage = function (e, t, n) {
              return {
                id: C("aaa2"),
                author: { role: w[t] },
                content: e,
                metadata: n,
              };
            }),
            (0, u._)(e, [
              {
                key: "isFirstCompletion",
                get: function () {
                  var e = this.getFirstPrompt();
                  if (e) {
                    var t = (0, s._)(this, M)[e.children[0]];
                    if ((null == t ? void 0 : t.children.length) === 0)
                      return !0;
                  }
                  return !1;
                },
              },
            ]),
            e
          );
        })();
    },
    86526: function (e, t, n) {
      var r = n(70079);
      t.Z = function () {
        var e = (0, r.useRef)(!1);
        return (
          (0, r.useEffect)(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          (0, r.useCallback)(function () {
            return e.current;
          }, [])
        );
      };
    },
    86433: function (e, t, n) {
      n.d(t, {
        S: function () {
          return f;
        },
      });
      var r = n(21722),
        a = n(39324),
        i = n(22830),
        s = n(39889),
        o = n(14412),
        l = n(68555),
        u = n(70079),
        d = n(32787),
        c = n(24274);
      function f() {
        var e,
          t,
          n = (0, l.useRouter)(),
          f = (0, d.kP)().session,
          h =
            (null == f
              ? void 0
              : null === (e = f.user) || void 0 === e
              ? void 0
              : e.idp) === "auth0",
          g = !!(null == f
            ? void 0
            : null === (t = f.user) || void 0 === t
            ? void 0
            : t.mfa),
          m = (0, i._)((0, u.useState)(!1), 2),
          p = m[0],
          v = m[1],
          x = (0, u.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, s.Jh)(this, function (t) {
                if (
                  ((e = new URL(n.asPath, window.location.origin).toString()),
                  !h)
                )
                  throw Error("Only username/password users can enable MFA");
                if (!f) throw Error("No session found, cannot enable MFA");
                if ("mocked" === f.authProvider)
                  throw Error(
                    "Mock users can't enable MFA! Please setup Auth0 following the instructions in the README"
                  );
                return (
                  (0, o.signIn)(
                    f.authProvider,
                    { callbackUrl: e },
                    (0, a._)(
                      { prompt: "login" },
                      f.authProvider === d.Ho.OpenAI
                        ? {
                            login_hint: (0, d.W_)({
                              oai_enforce_mfa: !0,
                              idp: "openai",
                            }),
                          }
                        : { oai_enforce_mfa: "true" }
                    )
                  ),
                  [2]
                );
              });
            }),
            [n.asPath, f, h]
          ),
          b = (0, u.useCallback)(
            (0, r._)(function () {
              var e;
              return (0, s.Jh)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (!h)
                      throw Error(
                        "Only username/password users can disable MFA"
                      );
                    if (!f) throw Error("No session found, cannot enable MFA");
                    if ("mocked" === f.authProvider)
                      throw Error(
                        "Mock users can't enable MFA! Please setup Auth0 following the instructions in the README"
                      );
                    return v(!0), [4, c.ZP.deleteMfa()];
                  case 1:
                    return (
                      t.sent(),
                      [
                        4,
                        (0, o.signOut)({
                          redirect: !1,
                          callbackUrl: "/auth/login?next=".concat(
                            encodeURIComponent(n.asPath)
                          ),
                        }),
                      ]
                    );
                  case 2:
                    return (e = t.sent()), v(!1), n.push(e.url), [2];
                }
              });
            }),
            [h, n, f]
          );
        return {
          setupMfa: x,
          isUsernamePassword: h,
          isLoggedInWithMfa: g,
          removeMfa: b,
          isLoading: p,
        };
      }
    },
    19051: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(70079);
      function a() {
        var e = (0, r.useRef)([]),
          t = (0, r.useRef)(function (t, n) {
            var r = setTimeout(t, n);
            return e.current.push(r), r;
          });
        return (
          (0, r.useEffect)(function () {
            var t = e.current;
            return function () {
              t.forEach(function (e) {
                clearTimeout(e);
              });
            };
          }, []),
          t.current
        );
      }
    },
    75179: function (e, t, n) {
      n.d(t, {
        Dd: function () {
          return s;
        },
        Mf: function () {
          return o;
        },
        _I: function () {
          return u;
        },
        sK: function () {
          return l;
        },
      });
      var r = n(95182),
        a = n.n(r),
        i = n(24274),
        s = "content_policy",
        o = { errType: "warning", errCode: s },
        l = {
          err: "Contents may violate our content policy",
          errType: "danger",
          errCode: s,
        };
      function u(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          s = a()(e.length, 0, 4e3),
          o = a()(e.length - s, 0, e.length - 1),
          l = t ? e.substring(o, e.length) : e;
        return l
          ? i.ZP.runModerationApi(l, n, r)
              .then(function (e) {
                return { isBlocked: !!e.blocked, isFlagged: !!e.flagged };
              })
              .catch(function (e) {
                return (
                  console.error(e), { isBlocked: !1, isFlagged: !1, error: e }
                );
              })
          : Promise.resolve({ isBlocked: !1, isFlagged: !1 });
      }
    },
  },
]);
