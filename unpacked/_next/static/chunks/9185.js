"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9185],
  {
    68952: function (n, e, t) {
      t.d(e, {
        R: function () {
          return u;
        },
      });
      let i = ["moz", "ms", "o", "webkit"];
      function o(n) {
        return n ? n + "Hidden" : "hidden";
      }
      function u(n) {
        let e = (function () {
            for (let n = 0; n < i.length; n++)
              if (o(i[n]) in document) return i[n];
            return null;
          })(),
          t = (e || "") + "visibilitychange";
        function u(t) {
          return "boolean" == typeof t
            ? t
              ? n.onVisible()
              : n.onHidden()
            : document[o(e)]
              ? n.onHidden()
              : n.onVisible();
        }
        return (
          document.addEventListener(t, u, !1),
          document.addEventListener("focus", n.onVisible, !1),
          document.addEventListener("blur", n.onHidden, !1),
          window.addEventListener("focus", n.onVisible, !1),
          window.addEventListener("blur", n.onHidden, !1),
          () => {
            document.removeEventListener(t, u, !1),
              document.removeEventListener("focus", n.onVisible, !1),
              document.removeEventListener("blur", n.onHidden, !1),
              window.removeEventListener("focus", n.onVisible, !1),
              window.removeEventListener("blur", n.onHidden, !1);
          }
        );
      }
    },
    8143: function (n, e, t) {
      t.d(e, {
        f: function () {
          return u;
        },
      });
      var i = t(61888),
        o = t(70079);
      function u(n) {
        let { 0: e, 1: t } = (0, o.useState)(null);
        return "function" == typeof n
          ? [
              e,
              (n) => {
                n && t(n);
              },
            ]
          : [n.current, i.noop];
      }
    },
  },
]);
//# sourceMappingURL=9185.8cdc74642d17ec5b.js.map
