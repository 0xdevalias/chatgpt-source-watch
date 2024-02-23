(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4820],
  {
    25200: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let o = r(27597),
        n = r(35250),
        i = o._(r(70079)),
        l = o._(r(95975)),
        s = {
          400: "Bad Request",
          404: "This page could not be found",
          405: "Method Not Allowed",
          500: "Internal Server Error",
        };
      function d(e) {
        let { res: t, err: r } = e;
        return {
          statusCode: t && t.statusCode ? t.statusCode : r ? r.statusCode : 404,
        };
      }
      let a = {
        error: {
          fontFamily:
            'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        desc: { lineHeight: "48px" },
        h1: {
          display: "inline-block",
          margin: "0 20px 0 0",
          paddingRight: 23,
          fontSize: 24,
          fontWeight: 500,
          verticalAlign: "top",
        },
        h2: { fontSize: 14, fontWeight: 400, lineHeight: "28px" },
        wrap: { display: "inline-block" },
      };
      class c extends i.default.Component {
        render() {
          let { statusCode: e, withDarkMode: t = !0 } = this.props,
            r = this.props.title || s[e] || "An unexpected error has occurred";
          return (0, n.jsxs)("div", {
            style: a.error,
            children: [
              (0, n.jsx)(l.default, {
                children: (0, n.jsx)("title", {
                  children: e
                    ? e + ": " + r
                    : "Application error: a client-side exception has occurred",
                }),
              }),
              (0, n.jsxs)("div", {
                style: a.desc,
                children: [
                  (0, n.jsx)("style", {
                    dangerouslySetInnerHTML: {
                      __html:
                        "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" +
                        (t
                          ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
                          : ""),
                    },
                  }),
                  e
                    ? (0, n.jsx)("h1", {
                        className: "next-error-h1",
                        style: a.h1,
                        children: e,
                      })
                    : null,
                  (0, n.jsx)("div", {
                    style: a.wrap,
                    children: (0, n.jsxs)("h2", {
                      style: a.h2,
                      children: [
                        this.props.title || e
                          ? r
                          : (0, n.jsx)(n.Fragment, {
                              children:
                                "Application error: a client-side exception has occurred (see the browser console for more information)",
                            }),
                        ".",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
      }
      (c.displayName = "ErrorPage"),
        (c.getInitialProps = d),
        (c.origGetInitialProps = d),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    35596: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_error",
        function () {
          return r(25200);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2888, 9774, 179], function () {
      return e((e.s = 35596));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=_error-efdd213627fef025.js.map
