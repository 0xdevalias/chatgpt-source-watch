"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9679],
  {
    79679: function (e, n, t) {
      t.d(n, {
        R: function () {
          return d;
        },
      });
      let i = ["moz", "ms", "o", "webkit"];
      function o(e) {
        return e ? e + "Hidden" : "hidden";
      }
      function d(e) {
        let n = (function () {
            for (let e = 0; e < i.length; e++)
              if (o(i[e]) in document) return i[e];
            return null;
          })(),
          t = (n || "") + "visibilitychange";
        function d(t) {
          return "boolean" == typeof t
            ? t
              ? e.onVisible()
              : e.onHidden()
            : document[o(n)]
              ? e.onHidden()
              : e.onVisible();
        }
        return (
          document.addEventListener(t, d, !1),
          document.addEventListener("focus", e.onVisible, !1),
          document.addEventListener("blur", e.onHidden, !1),
          window.addEventListener("focus", e.onVisible, !1),
          window.addEventListener("blur", e.onHidden, !1),
          () => {
            document.removeEventListener(t, d, !1),
              document.removeEventListener("focus", e.onVisible, !1),
              document.removeEventListener("blur", e.onHidden, !1),
              window.removeEventListener("focus", e.onVisible, !1),
              window.removeEventListener("blur", e.onHidden, !1);
          }
        );
      }
    },
  },
]);
//# sourceMappingURL=9679.d9cd8bc88bf780e8.js.map
