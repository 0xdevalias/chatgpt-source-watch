(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5796],
  {
    26169: function (n, e, t) {
      var i = t(57398),
        o = t(2428),
        r = t(89109);
      n.exports = function (n) {
        return (
          "string" == typeof n || (!o(n) && r(n) && "[object String]" == i(n))
        );
      };
    },
    79679: function (n, e, t) {
      "use strict";
      t.d(e, {
        R: function () {
          return r;
        },
      });
      let i = ["moz", "ms", "o", "webkit"];
      function o(n) {
        return n ? n + "Hidden" : "hidden";
      }
      function r(n) {
        let e = (function () {
            for (let n = 0; n < i.length; n++)
              if (o(i[n]) in document) return i[n];
            return null;
          })(),
          t = (e || "") + "visibilitychange";
        function r(t) {
          return "boolean" == typeof t
            ? t
              ? n.onVisible()
              : n.onHidden()
            : document[o(e)]
              ? n.onHidden()
              : n.onVisible();
        }
        return (
          document.addEventListener(t, r, !1),
          document.addEventListener("focus", n.onVisible, !1),
          document.addEventListener("blur", n.onHidden, !1),
          window.addEventListener("focus", n.onVisible, !1),
          window.addEventListener("blur", n.onHidden, !1),
          () => {
            document.removeEventListener(t, r, !1),
              document.removeEventListener("focus", n.onVisible, !1),
              document.removeEventListener("blur", n.onHidden, !1),
              window.removeEventListener("focus", n.onVisible, !1),
              window.removeEventListener("blur", n.onHidden, !1);
          }
        );
      }
    },
    26371: function (n, e, t) {
      "use strict";
      t.d(e, {
        f: function () {
          return r;
        },
      });
      var i = t(61888),
        o = t(70079);
      function r(n) {
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
//# sourceMappingURL=5796.057f0d72f4fea451.js.map
