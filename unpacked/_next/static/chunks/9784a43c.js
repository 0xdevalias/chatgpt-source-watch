(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1122],
  {
    78230: function (e, t, r) {
      var n = r(58642).Buffer,
        a = r(63934);
      !(function (t) {
        t.version = "0.17.2";
        var s,
          i,
          o,
          c,
          l,
          f,
          h,
          u,
          d,
          p,
          m,
          g,
          v,
          b,
          E,
          S,
          w,
          C,
          B,
          T,
          x,
          _,
          k,
          A,
          I,
          y,
          R,
          F,
          D,
          O,
          P,
          N,
          M,
          L,
          U,
          H,
          W,
          V,
          X,
          G,
          z = 1200,
          j = 1252;
        "undefined" == typeof cptable &&
          (void 0 !== r.g
            ? (r.g.cptable = r(90102))
            : "undefined" != typeof window && (window.cptable = r(90102)));
        for (var K = [874, 932, 936, 949, 950], Y = 0; Y <= 8; ++Y)
          K.push(1250 + Y);
        var Q = {
            0: 1252,
            1: 65001,
            2: 65001,
            77: 1e4,
            128: 932,
            129: 949,
            130: 1361,
            134: 936,
            136: 950,
            161: 1253,
            162: 1254,
            163: 1258,
            177: 1255,
            178: 1256,
            186: 1257,
            204: 1251,
            222: 874,
            238: 1250,
            255: 1252,
            69: 6969,
          },
          J = function (e) {
            -1 != K.indexOf(e) && (j = Q[0] = e);
          },
          Z = function (e) {
            (z = e), J(e);
          };
        function q() {
          Z(1200), J(1252);
        }
        function ee(e) {
          for (var t = [], r = 0, n = e.length; r < n; ++r)
            t[r] = e.charCodeAt(r);
          return t;
        }
        var et = function (e) {
            var t = e.charCodeAt(0),
              r = e.charCodeAt(1);
            return 255 == t && 254 == r
              ? (function (e) {
                  for (var t = [], r = 0; r < e.length >> 1; ++r)
                    t[r] = String.fromCharCode(
                      e.charCodeAt(2 * r) + (e.charCodeAt(2 * r + 1) << 8)
                    );
                  return t.join("");
                })(e.slice(2))
              : 254 == t && 255 == r
                ? (function (e) {
                    for (var t = [], r = 0; r < e.length >> 1; ++r)
                      t[r] = String.fromCharCode(
                        e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8)
                      );
                    return t.join("");
                  })(e.slice(2))
                : 65279 == t
                  ? e.slice(1)
                  : e;
          },
          er = function (e) {
            return String.fromCharCode(e);
          },
          en = function (e) {
            return String.fromCharCode(e);
          };
        "undefined" != typeof cptable &&
          ((Z = function (e) {
            (z = e), J(e);
          }),
          (et = function (e) {
            return 255 === e.charCodeAt(0) && 254 === e.charCodeAt(1)
              ? cptable.utils.decode(1200, ee(e.slice(2)))
              : e;
          }),
          (er = function (e) {
            return 1200 === z
              ? String.fromCharCode(e)
              : cptable.utils.decode(z, [255 & e, e >> 8])[0];
          }),
          (en = function (e) {
            return cptable.utils.decode(j, [e])[0];
          }));
        var ea =
            ((o =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
            {
              encode: function (e) {
                for (
                  var t = "",
                    r = 0,
                    n = 0,
                    a = 0,
                    s = 0,
                    i = 0,
                    c = 0,
                    l = 0,
                    f = 0;
                  f < e.length;
                )
                  (s = (r = e.charCodeAt(f++)) >> 2),
                    (i = ((3 & r) << 4) | ((n = e.charCodeAt(f++)) >> 4)),
                    (c = ((15 & n) << 2) | ((a = e.charCodeAt(f++)) >> 6)),
                    (l = 63 & a),
                    isNaN(n) ? (c = l = 64) : isNaN(a) && (l = 64),
                    (t +=
                      o.charAt(s) + o.charAt(i) + o.charAt(c) + o.charAt(l));
                return t;
              },
              decode: function (e) {
                var t = "",
                  r = 0,
                  n = 0,
                  a = 0,
                  s = 0,
                  i = 0,
                  c = 0;
                e = e.replace(/[^\w\+\/\=]/g, "");
                for (var l = 0; l < e.length; )
                  (t += String.fromCharCode(
                    (o.indexOf(e.charAt(l++)) << 2) |
                      ((s = o.indexOf(e.charAt(l++))) >> 4)
                  )),
                    (r =
                      ((15 & s) << 4) | ((i = o.indexOf(e.charAt(l++))) >> 2)),
                    64 !== i && (t += String.fromCharCode(r)),
                    (n = ((3 & i) << 6) | (c = o.indexOf(e.charAt(l++)))),
                    64 !== c && (t += String.fromCharCode(n));
                return t;
              },
            }),
          es =
            void 0 !== n &&
            void 0 !== a &&
            void 0 !== a.versions &&
            !!a.versions.node,
          ei = function () {};
        if (void 0 !== n) {
          var eo = !n.from;
          if (!eo)
            try {
              n.from("foo", "utf8");
            } catch (e) {
              eo = !0;
            }
          (ei = eo
            ? function (e, t) {
                return t ? new n(e, t) : new n(e);
              }
            : n.from.bind(n)),
            n.alloc ||
              (n.alloc = function (e) {
                return new n(e);
              }),
            n.allocUnsafe ||
              (n.allocUnsafe = function (e) {
                return new n(e);
              });
        }
        function ec(e) {
          return es ? n.alloc(e) : Array(e);
        }
        function el(e) {
          return es ? n.allocUnsafe(e) : Array(e);
        }
        var ef = function (e) {
          return es
            ? ei(e, "binary")
            : e.split("").map(function (e) {
                return 255 & e.charCodeAt(0);
              });
        };
        function eh(e) {
          if ("undefined" == typeof ArrayBuffer) return ef(e);
          for (
            var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0;
            n != e.length;
            ++n
          )
            r[n] = 255 & e.charCodeAt(n);
          return t;
        }
        function eu(e) {
          if (Array.isArray(e))
            return e
              .map(function (e) {
                return String.fromCharCode(e);
              })
              .join("");
          for (var t = [], r = 0; r < e.length; ++r)
            t[r] = String.fromCharCode(e[r]);
          return t.join("");
        }
        function ed(e) {
          if ("undefined" == typeof ArrayBuffer) throw Error("Unsupported");
          if (e instanceof ArrayBuffer) return ed(new Uint8Array(e));
          for (var t = Array(e.length), r = 0; r < e.length; ++r) t[r] = e[r];
          return t;
        }
        var ep = function (e) {
            return [].concat.apply([], e);
          },
          em = /\u0000/g,
          eg = /[\u0001-\u0006]/g,
          ev = {},
          eb = function (e) {
            function t(e) {
              for (var t = "", r = e.length - 1; r >= 0; ) t += e.charAt(r--);
              return t;
            }
            function r(e, t) {
              for (var r = ""; r.length < t; ) r += e;
              return r;
            }
            function n(e, t) {
              var n = "" + e;
              return n.length >= t ? n : r("0", t - n.length) + n;
            }
            function a(e, t) {
              var n = "" + e;
              return n.length >= t ? n : r(" ", t - n.length) + n;
            }
            function s(e, t) {
              var n = "" + e;
              return n.length >= t ? n : n + r(" ", t - n.length);
            }
            function i(e, t) {
              var n, a;
              return e > 4294967296 || e < -4294967296
                ? (n = "" + Math.round(e)).length >= t
                  ? n
                  : r("0", t - n.length) + n
                : (a = "" + Math.round(e)).length >= t
                  ? a
                  : r("0", t - a.length) + a;
            }
            function o(e, t) {
              return (
                (t = t || 0),
                e.length >= 7 + t &&
                  (32 | e.charCodeAt(t)) == 103 &&
                  (32 | e.charCodeAt(t + 1)) == 101 &&
                  (32 | e.charCodeAt(t + 2)) == 110 &&
                  (32 | e.charCodeAt(t + 3)) == 101 &&
                  (32 | e.charCodeAt(t + 4)) == 114 &&
                  (32 | e.charCodeAt(t + 5)) == 97 &&
                  (32 | e.charCodeAt(t + 6)) == 108
              );
            }
            e.version = "0.11.2";
            var c = [
                ["Sun", "Sunday"],
                ["Mon", "Monday"],
                ["Tue", "Tuesday"],
                ["Wed", "Wednesday"],
                ["Thu", "Thursday"],
                ["Fri", "Friday"],
                ["Sat", "Saturday"],
              ],
              l = [
                ["J", "Jan", "January"],
                ["F", "Feb", "February"],
                ["M", "Mar", "March"],
                ["A", "Apr", "April"],
                ["M", "May", "May"],
                ["J", "Jun", "June"],
                ["J", "Jul", "July"],
                ["A", "Aug", "August"],
                ["S", "Sep", "September"],
                ["O", "Oct", "October"],
                ["N", "Nov", "November"],
                ["D", "Dec", "December"],
              ];
            function f(e) {
              (e[0] = "General"),
                (e[1] = "0"),
                (e[2] = "0.00"),
                (e[3] = "#,##0"),
                (e[4] = "#,##0.00"),
                (e[9] = "0%"),
                (e[10] = "0.00%"),
                (e[11] = "0.00E+00"),
                (e[12] = "# ?/?"),
                (e[13] = "# ??/??"),
                (e[14] = "m/d/yy"),
                (e[15] = "d-mmm-yy"),
                (e[16] = "d-mmm"),
                (e[17] = "mmm-yy"),
                (e[18] = "h:mm AM/PM"),
                (e[19] = "h:mm:ss AM/PM"),
                (e[20] = "h:mm"),
                (e[21] = "h:mm:ss"),
                (e[22] = "m/d/yy h:mm"),
                (e[37] = "#,##0 ;(#,##0)"),
                (e[38] = "#,##0 ;[Red](#,##0)"),
                (e[39] = "#,##0.00;(#,##0.00)"),
                (e[40] = "#,##0.00;[Red](#,##0.00)"),
                (e[45] = "mm:ss"),
                (e[46] = "[h]:mm:ss"),
                (e[47] = "mmss.0"),
                (e[48] = "##0.0E+0"),
                (e[49] = "@"),
                (e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "');
            }
            var h = {};
            f(h);
            var u = [],
              d = 0;
            for (d = 5; d <= 8; ++d) u[d] = 32 + d;
            for (d = 23; d <= 26; ++d) u[d] = 0;
            for (d = 27; d <= 31; ++d) u[d] = 14;
            for (d = 50; d <= 58; ++d) u[d] = 14;
            for (d = 59; d <= 62; ++d) u[d] = d - 58;
            for (d = 67; d <= 68; ++d) u[d] = d - 58;
            for (d = 72; d <= 75; ++d) u[d] = d - 58;
            for (d = 67; d <= 68; ++d) u[d] = d - 57;
            for (d = 76; d <= 78; ++d) u[d] = d - 56;
            for (d = 79; d <= 81; ++d) u[d] = d - 34;
            var p = [];
            function m(e, t, r) {
              for (
                var n = e < 0 ? -1 : 1,
                  a = e * n,
                  s = 0,
                  i = 1,
                  o = 0,
                  c = 1,
                  l = 0,
                  f = 0,
                  h = Math.floor(a);
                l < t &&
                ((o = (h = Math.floor(a)) * i + s),
                (f = h * l + c),
                !(a - h < 5e-8));
              )
                (a = 1 / (a - h)), (s = i), (i = o), (c = l), (l = f);
              if (
                (f > t && (l > t ? ((f = c), (o = s)) : ((f = l), (o = i))), !r)
              )
                return [0, n * o, f];
              var u = Math.floor((n * o) / f);
              return [u, n * o - u * f, f];
            }
            function g(e, t, r) {
              if (e > 2958465 || e < 0) return null;
              var n = 0 | e,
                a = Math.floor(86400 * (e - n)),
                s = 0,
                i = [],
                o = {
                  D: n,
                  T: a,
                  u: 86400 * (e - n) - a,
                  y: 0,
                  m: 0,
                  d: 0,
                  H: 0,
                  M: 0,
                  S: 0,
                  q: 0,
                };
              if (
                (1e-6 > Math.abs(o.u) && (o.u = 0),
                t && t.date1904 && (n += 1462),
                o.u > 0.9999 &&
                  ((o.u = 0), 86400 == ++a && ((o.T = a = 0), ++n, ++o.D)),
                60 === n)
              )
                (i = r ? [1317, 10, 29] : [1900, 2, 29]), (s = 3);
              else if (0 === n) (i = r ? [1317, 8, 29] : [1900, 1, 0]), (s = 6);
              else {
                n > 60 && --n;
                var c,
                  l,
                  f = new Date(1900, 0, 1);
                f.setDate(f.getDate() + n - 1),
                  (i = [f.getFullYear(), f.getMonth() + 1, f.getDate()]),
                  (s = f.getDay()),
                  n < 60 && (s = (s + 6) % 7),
                  r &&
                    ((c = i),
                    (c[0] -= 581),
                    (l = f.getDay()),
                    f < 60 && (l = (l + 6) % 7),
                    (s = l));
              }
              return (
                (o.y = i[0]),
                (o.m = i[1]),
                (o.d = i[2]),
                (o.S = a % 60),
                (a = Math.floor(a / 60)),
                (o.M = a % 60),
                (a = Math.floor(a / 60)),
                (o.H = a),
                (o.q = s),
                o
              );
            }
            (p[5] = p[63] = '"$"#,##0_);\\("$"#,##0\\)'),
              (p[6] = p[64] = '"$"#,##0_);[Red]\\("$"#,##0\\)'),
              (p[7] = p[65] = '"$"#,##0.00_);\\("$"#,##0.00\\)'),
              (p[8] = p[66] = '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)'),
              (p[41] = '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)'),
              (p[42] = '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)'),
              (p[43] = '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)'),
              (p[44] =
                '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'),
              (e.parse_date_code = g);
            var v = new Date(1899, 11, 31, 0, 0, 0),
              b = v.getTime(),
              E = new Date(1900, 2, 1, 0, 0, 0);
            function S(e, t) {
              var r = e.getTime();
              return (
                t ? (r -= 1262304e5) : e >= E && (r += 864e5),
                (r -
                  (b + (e.getTimezoneOffset() - v.getTimezoneOffset()) * 6e4)) /
                  864e5
              );
            }
            e._general_int = function (e) {
              return e.toString(10);
            };
            var w = (function () {
              var e = /(?:\.0*|(\.\d*[1-9])0+)$/;
              function t(t) {
                return -1 == t.indexOf(".") ? t : t.replace(e, "$1");
              }
              var r = /(?:\.0*|(\.\d*[1-9])0+)[Ee]/,
                n = /(E[+-])(\d)$/;
              return function (e) {
                var a,
                  s,
                  i,
                  o,
                  c,
                  l = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E);
                return (
                  l >= -4 && l <= -1
                    ? (c = e.toPrecision(10 + l))
                    : 9 >= Math.abs(l)
                      ? ((a = e < 0 ? 12 : 11),
                        (c =
                          (s = t(e.toFixed(12))).length <= a ||
                          (s = e.toPrecision(10)).length <= a
                            ? s
                            : e.toExponential(5)))
                      : (c =
                          10 === l
                            ? e.toFixed(10).substr(0, 12)
                            : (i = t(e.toFixed(11))).length >
                                  (e < 0 ? 12 : 11) ||
                                "0" === i ||
                                "-0" === i
                              ? e.toPrecision(6)
                              : i),
                  t(
                    -1 == (o = c.toUpperCase()).indexOf("E")
                      ? o
                      : o.replace(r, "$1E").replace(n, "$10$2")
                  )
                );
              };
            })();
            function C(e, t) {
              switch (typeof e) {
                case "string":
                  return e;
                case "boolean":
                  return e ? "TRUE" : "FALSE";
                case "number":
                  return (0 | e) === e ? e.toString(10) : w(e);
                case "undefined":
                  return "";
                case "object":
                  if (null == e) return "";
                  if (e instanceof Date) return F(14, S(e, t && t.date1904), t);
              }
              throw Error("unsupported value in General format: " + e);
            }
            function B(e) {
              if (e.length <= 3) return e;
              for (
                var t = e.length % 3, r = e.substr(0, t);
                t != e.length;
                t += 3
              )
                r += (r.length > 0 ? "," : "") + e.substr(t, 3);
              return r;
            }
            (e._general_num = w), (e._general = C);
            var T = (function () {
              var e = /%/g,
                o = /# (\?+)( ?)\/( ?)(\d+)/,
                c = /^#*0*\.([0#]+)/,
                l = /\).*[0#]/,
                f = /\(###\) ###\\?-####/;
              function h(e) {
                for (var t, r = "", n = 0; n != e.length; ++n)
                  switch ((t = e.charCodeAt(n))) {
                    case 35:
                      break;
                    case 63:
                      r += " ";
                      break;
                    case 48:
                      r += "0";
                      break;
                    default:
                      r += String.fromCharCode(t);
                  }
                return r;
              }
              function u(e, t) {
                var r = Math.pow(10, t);
                return "" + Math.round(e * r) / r;
              }
              function d(e, t) {
                var r = e - Math.floor(e),
                  n = Math.pow(10, t);
                return t < ("" + Math.round(r * n)).length
                  ? 0
                  : Math.round(r * n);
              }
              return function (p, g, v) {
                return (0 | v) === v
                  ? (function i(u, d, p) {
                      if (40 === u.charCodeAt(0) && !d.match(l)) {
                        var g,
                          v = d
                            .replace(/\( */, "")
                            .replace(/ \)/, "")
                            .replace(/\)/, "");
                        return p >= 0
                          ? i("n", v, p)
                          : "(" + i("n", v, -p) + ")";
                      }
                      if (44 === d.charCodeAt(d.length - 1))
                        return (function (e, t, r) {
                          for (
                            var n = t.length - 1;
                            44 === t.charCodeAt(n - 1);
                          )
                            --n;
                          return T(
                            e,
                            t.substr(0, n),
                            r / Math.pow(10, 3 * (t.length - n))
                          );
                        })(u, d, p);
                      if (-1 !== d.indexOf("%"))
                        return (
                          (E = (b = d).replace(e, "")),
                          (S = b.length - E.length),
                          T(u, E, p * Math.pow(10, 2 * S)) + r("%", S)
                        );
                      if (-1 !== d.indexOf("E"))
                        return (function e(t, r) {
                          var n,
                            a = t.indexOf("E") - t.indexOf(".") - 1;
                          if (t.match(/^#+0.0E\+0$/)) {
                            if (0 == r) return "0.0E+0";
                            if (r < 0) return "-" + e(t, -r);
                            var s = t.indexOf(".");
                            -1 === s && (s = t.indexOf("E"));
                            var i = Math.floor(Math.log(r) * Math.LOG10E) % s;
                            if (
                              (i < 0 && (i += s),
                              !(n = (r / Math.pow(10, i)).toPrecision(
                                a + 1 + ((s + i) % s)
                              )).match(/[Ee]/))
                            ) {
                              var o = Math.floor(Math.log(r) * Math.LOG10E);
                              -1 === n.indexOf(".")
                                ? (n =
                                    n.charAt(0) +
                                    "." +
                                    n.substr(1) +
                                    "E+" +
                                    (o - n.length + i))
                                : (n += "E+" + (o - i)),
                                (n = n.replace(/\+-/, "-"));
                            }
                            n = n.replace(
                              /^([+-]?)(\d*)\.(\d*)[Ee]/,
                              function (e, t, r, n) {
                                return (
                                  t +
                                  r +
                                  n.substr(0, (s + i) % s) +
                                  "." +
                                  n.substr(i) +
                                  "E"
                                );
                              }
                            );
                          } else n = r.toExponential(a);
                          return (
                            t.match(/E\+00$/) &&
                              n.match(/e[+-]\d$/) &&
                              (n =
                                n.substr(0, n.length - 1) +
                                "0" +
                                n.charAt(n.length - 1)),
                            t.match(/E\-/) &&
                              n.match(/e\+/) &&
                              (n = n.replace(/e\+/, "e")),
                            n.replace("e", "E")
                          );
                        })(d, p);
                      if (36 === d.charCodeAt(0))
                        return (
                          "$" + i(u, d.substr(" " == d.charAt(1) ? 2 : 1), p)
                        );
                      var b,
                        E,
                        S,
                        w,
                        C,
                        x,
                        _,
                        k = Math.abs(p),
                        A = p < 0 ? "-" : "";
                      if (d.match(/^00+$/)) return A + n(k, d.length);
                      if (d.match(/^[#?]+$/))
                        return (
                          (w = "" + p),
                          0 === p && (w = ""),
                          w.length > d.length
                            ? w
                            : h(d.substr(0, d.length - w.length)) + w
                        );
                      if ((C = d.match(o)))
                        return (
                          A +
                          (0 === k ? "" : "" + k) +
                          r(" ", (g = C)[1].length + 2 + g[4].length)
                        );
                      if (d.match(/^#+0+$/))
                        return A + n(k, d.length - d.indexOf("0"));
                      if ((C = d.match(c)))
                        return (
                          (w = (w = ("" + p)
                            .replace(/^([^\.]+)$/, "$1." + h(C[1]))
                            .replace(/\.$/, "." + h(C[1]))).replace(
                            /\.(\d*)$/,
                            function (e, t) {
                              return (
                                "." + t + r("0", h(C[1]).length - t.length)
                              );
                            }
                          )),
                          -1 !== d.indexOf("0.") ? w : w.replace(/^0\./, ".")
                        );
                      if (
                        (C = (d = d.replace(/^#+([0.])/, "$1")).match(
                          /^(0*)\.(#*)$/
                        ))
                      )
                        return (
                          A +
                          ("" + k)
                            .replace(/\.(\d*[1-9])0*$/, ".$1")
                            .replace(/^(-?\d*)$/, "$1.")
                            .replace(/^0\./, C[1].length ? "0." : ".")
                        );
                      if ((C = d.match(/^#{1,3},##0(\.?)$/)))
                        return A + B("" + k);
                      if ((C = d.match(/^#,##0\.([#0]*0)$/)))
                        return p < 0
                          ? "-" + i(u, d, -p)
                          : B("" + p) + "." + r("0", C[1].length);
                      if ((C = d.match(/^#,#*,#0/)))
                        return i(u, d.replace(/^#,#*,/, ""), p);
                      if ((C = d.match(/^([0#]+)(\\?-([0#]+))+$/)))
                        return (
                          (w = t(i(u, d.replace(/[\\-]/g, ""), p))),
                          (x = 0),
                          t(
                            t(d.replace(/\\/g, "")).replace(
                              /[0#]/g,
                              function (e) {
                                return x < w.length
                                  ? w.charAt(x++)
                                  : "0" === e
                                    ? "0"
                                    : "";
                              }
                            )
                          )
                        );
                      if (d.match(f))
                        return (
                          "(" +
                          (w = i(u, "##########", p)).substr(0, 3) +
                          ") " +
                          w.substr(3, 3) +
                          "-" +
                          w.substr(6)
                        );
                      var I = "";
                      if ((C = d.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
                        return (
                          (_ = m(
                            k,
                            Math.pow(10, (x = Math.min(C[4].length, 7))) - 1,
                            !1
                          )),
                          (w = "" + A),
                          " " ==
                            (I = T("n", C[1], _[1])).charAt(I.length - 1) &&
                            (I = I.substr(0, I.length - 1) + "0"),
                          (w += I + C[2] + "/" + C[3]),
                          (I = s(_[2], x)).length < C[4].length &&
                            (I = h(C[4].substr(C[4].length - I.length)) + I),
                          (w += I)
                        );
                      if ((C = d.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
                        return (
                          A +
                          ((_ = m(
                            k,
                            Math.pow(
                              10,
                              (x = Math.min(
                                Math.max(C[1].length, C[4].length),
                                7
                              ))
                            ) - 1,
                            !0
                          ))[0] || (_[1] ? "" : "0")) +
                          " " +
                          (_[1]
                            ? a(_[1], x) + C[2] + "/" + C[3] + s(_[2], x)
                            : r(" ", 2 * x + 1 + C[2].length + C[3].length))
                        );
                      if ((C = d.match(/^[#0?]+$/)))
                        return ((w = "" + p), d.length <= w.length)
                          ? w
                          : h(d.substr(0, d.length - w.length)) + w;
                      if ((C = d.match(/^([#0]+)\.([#0]+)$/))) {
                        x = (w =
                          "" +
                          p
                            .toFixed(Math.min(C[2].length, 10))
                            .replace(/([^0])0+$/, "$1")).indexOf(".");
                        var y = d.indexOf(".") - x,
                          R = d.length - w.length - y;
                        return h(d.substr(0, y) + w + d.substr(d.length - R));
                      }
                      if ((C = d.match(/^00,000\.([#0]*0)$/)))
                        return p < 0
                          ? "-" + i(u, d, -p)
                          : B("" + p)
                              .replace(/^\d,\d{3}$/, "0$&")
                              .replace(/^\d*$/, function (e) {
                                return (
                                  "00," +
                                  (e.length < 3 ? n(0, 3 - e.length) : "") +
                                  e
                                );
                              }) +
                              "." +
                              n(0, C[1].length);
                      switch (d) {
                        case "###,###":
                        case "##,###":
                        case "#,###":
                          var F = B("" + k);
                          return "0" !== F ? A + F : "";
                        default:
                          if (d.match(/\.[0#?]*$/))
                            return (
                              i(u, d.slice(0, d.lastIndexOf(".")), p) +
                              h(d.slice(d.lastIndexOf(".")))
                            );
                      }
                      throw Error("unsupported format |" + d + "|");
                    })(p, g, v)
                  : (function p(g, v, b) {
                      if (40 === g.charCodeAt(0) && !v.match(l)) {
                        var E,
                          S,
                          w,
                          C,
                          x,
                          _,
                          k = v
                            .replace(/\( */, "")
                            .replace(/ \)/, "")
                            .replace(/\)/, "");
                        return b >= 0
                          ? p("n", k, b)
                          : "(" + p("n", k, -b) + ")";
                      }
                      if (44 === v.charCodeAt(v.length - 1))
                        return (function (e, t, r) {
                          for (
                            var n = t.length - 1;
                            44 === t.charCodeAt(n - 1);
                          )
                            --n;
                          return T(
                            e,
                            t.substr(0, n),
                            r / Math.pow(10, 3 * (t.length - n))
                          );
                        })(g, v, b);
                      if (-1 !== v.indexOf("%"))
                        return (
                          (I = (A = v).replace(e, "")),
                          (y = A.length - I.length),
                          T(g, I, b * Math.pow(10, 2 * y)) + r("%", y)
                        );
                      if (-1 !== v.indexOf("E"))
                        return (function e(t, r) {
                          var n,
                            a = t.indexOf("E") - t.indexOf(".") - 1;
                          if (t.match(/^#+0.0E\+0$/)) {
                            if (0 == r) return "0.0E+0";
                            if (r < 0) return "-" + e(t, -r);
                            var s = t.indexOf(".");
                            -1 === s && (s = t.indexOf("E"));
                            var i = Math.floor(Math.log(r) * Math.LOG10E) % s;
                            if (
                              (i < 0 && (i += s),
                              -1 ===
                                (n = (r / Math.pow(10, i)).toPrecision(
                                  a + 1 + ((s + i) % s)
                                )).indexOf("e"))
                            ) {
                              var o = Math.floor(Math.log(r) * Math.LOG10E);
                              for (
                                -1 === n.indexOf(".")
                                  ? (n =
                                      n.charAt(0) +
                                      "." +
                                      n.substr(1) +
                                      "E+" +
                                      (o - n.length + i))
                                  : (n += "E+" + (o - i));
                                "0." === n.substr(0, 2);
                              )
                                n = (n =
                                  n.charAt(0) +
                                  n.substr(2, s) +
                                  "." +
                                  n.substr(2 + s))
                                  .replace(/^0+([1-9])/, "$1")
                                  .replace(/^0+\./, "0.");
                              n = n.replace(/\+-/, "-");
                            }
                            n = n.replace(
                              /^([+-]?)(\d*)\.(\d*)[Ee]/,
                              function (e, t, r, n) {
                                return (
                                  t +
                                  r +
                                  n.substr(0, (s + i) % s) +
                                  "." +
                                  n.substr(i) +
                                  "E"
                                );
                              }
                            );
                          } else n = r.toExponential(a);
                          return (
                            t.match(/E\+00$/) &&
                              n.match(/e[+-]\d$/) &&
                              (n =
                                n.substr(0, n.length - 1) +
                                "0" +
                                n.charAt(n.length - 1)),
                            t.match(/E\-/) &&
                              n.match(/e\+/) &&
                              (n = n.replace(/e\+/, "e")),
                            n.replace("e", "E")
                          );
                        })(v, b);
                      if (36 === v.charCodeAt(0))
                        return (
                          "$" + p(g, v.substr(" " == v.charAt(1) ? 2 : 1), b)
                        );
                      var A,
                        I,
                        y,
                        R,
                        F,
                        D,
                        O,
                        P = Math.abs(b),
                        N = b < 0 ? "-" : "";
                      if (v.match(/^00+$/)) return N + i(P, v.length);
                      if (v.match(/^[#?]+$/))
                        return (
                          "0" === (R = i(b, 0)) && (R = ""),
                          R.length > v.length
                            ? R
                            : h(v.substr(0, v.length - R.length)) + R
                        );
                      if ((F = v.match(o)))
                        return (
                          (C = Math.floor(
                            (w = Math.round(
                              P * (S = parseInt((E = F)[4], 10))
                            )) / S
                          )),
                          (x = w - C * S),
                          N +
                            (0 === C ? "" : "" + C) +
                            " " +
                            (0 === x
                              ? r(" ", E[1].length + 1 + E[4].length)
                              : a(x, E[1].length) +
                                E[2] +
                                "/" +
                                E[3] +
                                n(S, E[4].length))
                        );
                      if (v.match(/^#+0+$/))
                        return N + i(P, v.length - v.indexOf("0"));
                      if ((F = v.match(c)))
                        return (
                          (R = u(b, F[1].length)
                            .replace(/^([^\.]+)$/, "$1." + h(F[1]))
                            .replace(/\.$/, "." + h(F[1]))
                            .replace(/\.(\d*)$/, function (e, t) {
                              return (
                                "." + t + r("0", h(F[1]).length - t.length)
                              );
                            })),
                          -1 !== v.indexOf("0.") ? R : R.replace(/^0\./, ".")
                        );
                      if (
                        (F = (v = v.replace(/^#+([0.])/, "$1")).match(
                          /^(0*)\.(#*)$/
                        ))
                      )
                        return (
                          N +
                          u(P, F[2].length)
                            .replace(/\.(\d*[1-9])0*$/, ".$1")
                            .replace(/^(-?\d*)$/, "$1.")
                            .replace(/^0\./, F[1].length ? "0." : ".")
                        );
                      if ((F = v.match(/^#{1,3},##0(\.?)$/)))
                        return N + B(i(P, 0));
                      if ((F = v.match(/^#,##0\.([#0]*0)$/)))
                        return b < 0
                          ? "-" + p(g, v, -b)
                          : B(
                              "" +
                                (Math.floor(b) +
                                  ((_ = F[1].length) <
                                  (
                                    "" +
                                    Math.round(
                                      (b - Math.floor(b)) * Math.pow(10, _)
                                    )
                                  ).length
                                    ? 1
                                    : 0))
                            ) +
                              "." +
                              n(d(b, F[1].length), F[1].length);
                      if ((F = v.match(/^#,#*,#0/)))
                        return p(g, v.replace(/^#,#*,/, ""), b);
                      if ((F = v.match(/^([0#]+)(\\?-([0#]+))+$/)))
                        return (
                          (R = t(p(g, v.replace(/[\\-]/g, ""), b))),
                          (D = 0),
                          t(
                            t(v.replace(/\\/g, "")).replace(
                              /[0#]/g,
                              function (e) {
                                return D < R.length
                                  ? R.charAt(D++)
                                  : "0" === e
                                    ? "0"
                                    : "";
                              }
                            )
                          )
                        );
                      if (v.match(f))
                        return (
                          "(" +
                          (R = p(g, "##########", b)).substr(0, 3) +
                          ") " +
                          R.substr(3, 3) +
                          "-" +
                          R.substr(6)
                        );
                      var M = "";
                      if ((F = v.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
                        return (
                          (O = m(
                            P,
                            Math.pow(10, (D = Math.min(F[4].length, 7))) - 1,
                            !1
                          )),
                          (R = "" + N),
                          " " ==
                            (M = T("n", F[1], O[1])).charAt(M.length - 1) &&
                            (M = M.substr(0, M.length - 1) + "0"),
                          (R += M + F[2] + "/" + F[3]),
                          (M = s(O[2], D)).length < F[4].length &&
                            (M = h(F[4].substr(F[4].length - M.length)) + M),
                          (R += M)
                        );
                      if ((F = v.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
                        return (
                          N +
                          ((O = m(
                            P,
                            Math.pow(
                              10,
                              (D = Math.min(
                                Math.max(F[1].length, F[4].length),
                                7
                              ))
                            ) - 1,
                            !0
                          ))[0] || (O[1] ? "" : "0")) +
                          " " +
                          (O[1]
                            ? a(O[1], D) + F[2] + "/" + F[3] + s(O[2], D)
                            : r(" ", 2 * D + 1 + F[2].length + F[3].length))
                        );
                      if ((F = v.match(/^[#0?]+$/)))
                        return ((R = i(b, 0)), v.length <= R.length)
                          ? R
                          : h(v.substr(0, v.length - R.length)) + R;
                      if ((F = v.match(/^([#0?]+)\.([#0]+)$/))) {
                        D = (R =
                          "" +
                          b
                            .toFixed(Math.min(F[2].length, 10))
                            .replace(/([^0])0+$/, "$1")).indexOf(".");
                        var L = v.indexOf(".") - D,
                          U = v.length - R.length - L;
                        return h(v.substr(0, L) + R + v.substr(v.length - U));
                      }
                      if ((F = v.match(/^00,000\.([#0]*0)$/)))
                        return (
                          (D = d(b, F[1].length)),
                          b < 0
                            ? "-" + p(g, v, -b)
                            : B(
                                b < 2147483647 && b > -2147483648
                                  ? "" + (b >= 0 ? 0 | b : (b - 1) | 0)
                                  : "" + Math.floor(b)
                              )
                                .replace(/^\d,\d{3}$/, "0$&")
                                .replace(/^\d*$/, function (e) {
                                  return (
                                    "00," +
                                    (e.length < 3 ? n(0, 3 - e.length) : "") +
                                    e
                                  );
                                }) +
                              "." +
                              n(D, F[1].length)
                        );
                      switch (v) {
                        case "###,##0.00":
                          return p(g, "#,##0.00", b);
                        case "###,###":
                        case "##,###":
                        case "#,###":
                          var H = B(i(P, 0));
                          return "0" !== H ? N + H : "";
                        case "###,###.00":
                          return p(g, "###,##0.00", b).replace(/^0\./, ".");
                        case "#,###.00":
                          return p(g, "#,##0.00", b).replace(/^0\./, ".");
                      }
                      throw Error("unsupported format |" + v + "|");
                    })(p, g, v);
              };
            })();
            function x(e) {
              for (var t = [], r = !1, n = 0, a = 0; n < e.length; ++n)
                switch (e.charCodeAt(n)) {
                  case 34:
                    r = !r;
                    break;
                  case 95:
                  case 42:
                  case 92:
                    ++n;
                    break;
                  case 59:
                    (t[t.length] = e.substr(a, n - a)), (a = n + 1);
                }
              if (((t[t.length] = e.substr(a)), !0 === r))
                throw Error("Format |" + e + "| unterminated string ");
              return t;
            }
            e._split = x;
            var _ = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
            function k(e) {
              for (var t = 0, r = "", n = ""; t < e.length; )
                switch ((r = e.charAt(t))) {
                  case "G":
                    o(e, t) && (t += 6), t++;
                    break;
                  case '"':
                    for (; 34 !== e.charCodeAt(++t) && t < e.length; );
                    ++t;
                    break;
                  case "\\":
                  case "_":
                    t += 2;
                    break;
                  case "@":
                    ++t;
                    break;
                  case "B":
                  case "b":
                    if ("1" === e.charAt(t + 1) || "2" === e.charAt(t + 1))
                      return !0;
                  case "M":
                  case "D":
                  case "Y":
                  case "H":
                  case "S":
                  case "E":
                  case "m":
                  case "d":
                  case "y":
                  case "h":
                  case "s":
                  case "e":
                  case "g":
                    return !0;
                  case "A":
                  case "a":
                  case "上":
                    if (
                      "A/P" === e.substr(t, 3).toUpperCase() ||
                      "AM/PM" === e.substr(t, 5).toUpperCase() ||
                      "上午/下午" === e.substr(t, 5).toUpperCase()
                    )
                      return !0;
                    ++t;
                    break;
                  case "[":
                    for (n = r; "]" !== e.charAt(t++) && t < e.length; )
                      n += e.charAt(t);
                    if (n.match(_)) return !0;
                    break;
                  case ".":
                  case "0":
                  case "#":
                    for (
                      ;
                      t < e.length &&
                      ("0#?.,E+-%".indexOf((r = e.charAt(++t))) > -1 ||
                        ("\\" == r &&
                          "-" == e.charAt(t + 1) &&
                          "0#".indexOf(e.charAt(t + 2)) > -1));
                    );
                    break;
                  case "?":
                    for (; e.charAt(++t) === r; );
                    break;
                  case "*":
                    ++t, (" " == e.charAt(t) || "*" == e.charAt(t)) && ++t;
                    break;
                  case "(":
                  case ")":
                  case " ":
                  default:
                    ++t;
                    break;
                  case "1":
                  case "2":
                  case "3":
                  case "4":
                  case "5":
                  case "6":
                  case "7":
                  case "8":
                  case "9":
                    for (
                      ;
                      t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1;
                    );
                }
              return !1;
            }
            function A(e, t, r, a) {
              for (
                var s, i, f, h = [], u = "", d = 0, p = "", m = "t", v = "H";
                d < e.length;
              )
                switch ((p = e.charAt(d))) {
                  case "G":
                    if (!o(e, d))
                      throw Error("unrecognized character " + p + " in " + e);
                    (h[h.length] = { t: "G", v: "General" }), (d += 7);
                    break;
                  case '"':
                    for (
                      u = "";
                      34 !== (f = e.charCodeAt(++d)) && d < e.length;
                    )
                      u += String.fromCharCode(f);
                    (h[h.length] = { t: "t", v: u }), ++d;
                    break;
                  case "\\":
                    var b = e.charAt(++d),
                      E = "(" === b || ")" === b ? b : "t";
                    (h[h.length] = { t: E, v: b }), ++d;
                    break;
                  case "_":
                    (h[h.length] = { t: "t", v: " " }), (d += 2);
                    break;
                  case "@":
                    (h[h.length] = { t: "T", v: t }), ++d;
                    break;
                  case "B":
                  case "b":
                    if ("1" === e.charAt(d + 1) || "2" === e.charAt(d + 1)) {
                      if (
                        null == s &&
                        null == (s = g(t, r, "2" === e.charAt(d + 1)))
                      )
                        return "";
                      (h[h.length] = { t: "X", v: e.substr(d, 2) }),
                        (m = p),
                        (d += 2);
                      break;
                    }
                  case "M":
                  case "D":
                  case "Y":
                  case "H":
                  case "S":
                  case "E":
                    p = p.toLowerCase();
                  case "m":
                  case "d":
                  case "y":
                  case "h":
                  case "s":
                  case "e":
                  case "g":
                    if (t < 0 || (null == s && null == (s = g(t, r))))
                      return "";
                    for (
                      u = p;
                      ++d < e.length && e.charAt(d).toLowerCase() === p;
                    )
                      u += p;
                    "m" === p && "h" === m.toLowerCase() && (p = "M"),
                      "h" === p && (p = v),
                      (h[h.length] = { t: p, v: u }),
                      (m = p);
                    break;
                  case "A":
                  case "a":
                  case "上":
                    var S = { t: p, v: p };
                    if (
                      (null == s && (s = g(t, r)),
                      "A/P" === e.substr(d, 3).toUpperCase()
                        ? (null != s && (S.v = s.H >= 12 ? "P" : "A"),
                          (S.t = "T"),
                          (v = "h"),
                          (d += 3))
                        : "AM/PM" === e.substr(d, 5).toUpperCase()
                          ? (null != s && (S.v = s.H >= 12 ? "PM" : "AM"),
                            (S.t = "T"),
                            (d += 5),
                            (v = "h"))
                          : "上午/下午" === e.substr(d, 5).toUpperCase()
                            ? (null != s && (S.v = s.H >= 12 ? "下午" : "上午"),
                              (S.t = "T"),
                              (d += 5),
                              (v = "h"))
                            : ((S.t = "t"), ++d),
                      null == s && "T" === S.t)
                    )
                      return "";
                    (h[h.length] = S), (m = p);
                    break;
                  case "[":
                    for (u = p; "]" !== e.charAt(d++) && d < e.length; )
                      u += e.charAt(d);
                    if ("]" !== u.slice(-1))
                      throw 'unterminated "[" block: |' + u + "|";
                    if (u.match(_)) {
                      if (null == s && null == (s = g(t, r))) return "";
                      (h[h.length] = { t: "Z", v: u.toLowerCase() }),
                        (m = u.charAt(1));
                    } else
                      u.indexOf("$") > -1 &&
                        ((u = (u.match(/\$([^-\[\]]*)/) || [])[1] || "$"),
                        k(e) || (h[h.length] = { t: "t", v: u }));
                    break;
                  case ".":
                    if (null != s) {
                      for (u = p; ++d < e.length && "0" === (p = e.charAt(d)); )
                        u += p;
                      h[h.length] = { t: "s", v: u };
                      break;
                    }
                  case "0":
                  case "#":
                    for (
                      u = p;
                      ++d < e.length &&
                      "0#?.,E+-%".indexOf((p = e.charAt(d))) > -1;
                    )
                      u += p;
                    h[h.length] = { t: "n", v: u };
                    break;
                  case "?":
                    for (u = p; e.charAt(++d) === p; ) u += p;
                    (h[h.length] = { t: p, v: u }), (m = p);
                    break;
                  case "*":
                    ++d, (" " == e.charAt(d) || "*" == e.charAt(d)) && ++d;
                    break;
                  case "(":
                  case ")":
                    (h[h.length] = { t: 1 === a ? "t" : p, v: p }), ++d;
                    break;
                  case "1":
                  case "2":
                  case "3":
                  case "4":
                  case "5":
                  case "6":
                  case "7":
                  case "8":
                  case "9":
                    for (
                      u = p;
                      d < e.length && "0123456789".indexOf(e.charAt(++d)) > -1;
                    )
                      u += e.charAt(d);
                    h[h.length] = { t: "D", v: u };
                    break;
                  case " ":
                    (h[h.length] = { t: p, v: p }), ++d;
                    break;
                  case "$":
                    (h[h.length] = { t: "t", v: "$" }), ++d;
                    break;
                  default:
                    if (
                      -1 === ",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(p)
                    )
                      throw Error("unrecognized character " + p + " in " + e);
                    (h[h.length] = { t: "t", v: p }), ++d;
                }
              var w,
                B = 0,
                x = 0;
              for (d = h.length - 1, m = "t"; d >= 0; --d)
                switch (h[d].t) {
                  case "h":
                  case "H":
                    (h[d].t = v), (m = "h"), B < 1 && (B = 1);
                    break;
                  case "s":
                    (w = h[d].v.match(/\.0+$/)) &&
                      (x = Math.max(x, w[0].length - 1)),
                      B < 3 && (B = 3);
                  case "d":
                  case "y":
                  case "M":
                  case "e":
                    m = h[d].t;
                    break;
                  case "m":
                    "s" === m && ((h[d].t = "M"), B < 2 && (B = 2));
                    break;
                  case "X":
                    break;
                  case "Z":
                    B < 1 && h[d].v.match(/[Hh]/) && (B = 1),
                      B < 2 && h[d].v.match(/[Mm]/) && (B = 2),
                      B < 3 && h[d].v.match(/[Ss]/) && (B = 3);
                }
              switch (B) {
                case 0:
                  break;
                case 1:
                  s.u >= 0.5 && ((s.u = 0), ++s.S),
                    s.S >= 60 && ((s.S = 0), ++s.M),
                    s.M >= 60 && ((s.M = 0), ++s.H);
                  break;
                case 2:
                  s.u >= 0.5 && ((s.u = 0), ++s.S),
                    s.S >= 60 && ((s.S = 0), ++s.M);
              }
              var A,
                I = "";
              for (d = 0; d < h.length; ++d)
                switch (h[d].t) {
                  case "t":
                  case "T":
                  case " ":
                  case "D":
                    break;
                  case "X":
                    (h[d].v = ""), (h[d].t = ";");
                    break;
                  case "d":
                  case "m":
                  case "y":
                  case "h":
                  case "H":
                  case "M":
                  case "s":
                  case "e":
                  case "b":
                  case "Z":
                    (h[d].v = (function (e, t, r, a) {
                      var s,
                        i = "",
                        o = 0,
                        f = 0,
                        h = r.y,
                        u = 0;
                      switch (e) {
                        case 98:
                          h = r.y + 543;
                        case 121:
                          switch (t.length) {
                            case 1:
                            case 2:
                              (s = h % 100), (u = 2);
                              break;
                            default:
                              (s = h % 1e4), (u = 4);
                          }
                          break;
                        case 109:
                          switch (t.length) {
                            case 1:
                            case 2:
                              (s = r.m), (u = t.length);
                              break;
                            case 3:
                              return l[r.m - 1][1];
                            case 5:
                              return l[r.m - 1][0];
                            default:
                              return l[r.m - 1][2];
                          }
                          break;
                        case 100:
                          switch (t.length) {
                            case 1:
                            case 2:
                              (s = r.d), (u = t.length);
                              break;
                            case 3:
                              return c[r.q][0];
                            default:
                              return c[r.q][1];
                          }
                          break;
                        case 104:
                          switch (t.length) {
                            case 1:
                            case 2:
                              (s = 1 + ((r.H + 11) % 12)), (u = t.length);
                              break;
                            default:
                              throw "bad hour format: " + t;
                          }
                          break;
                        case 72:
                          switch (t.length) {
                            case 1:
                            case 2:
                              (s = r.H), (u = t.length);
                              break;
                            default:
                              throw "bad hour format: " + t;
                          }
                          break;
                        case 77:
                          switch (t.length) {
                            case 1:
                            case 2:
                              (s = r.M), (u = t.length);
                              break;
                            default:
                              throw "bad minute format: " + t;
                          }
                          break;
                        case 115:
                          if (
                            "s" != t &&
                            "ss" != t &&
                            ".0" != t &&
                            ".00" != t &&
                            ".000" != t
                          )
                            throw "bad second format: " + t;
                          if (0 === r.u && ("s" == t || "ss" == t))
                            return n(r.S, t.length);
                          if (
                            ((o = Math.round(
                              (f =
                                a >= 2
                                  ? 3 === a
                                    ? 1e3
                                    : 100
                                  : 1 === a
                                    ? 10
                                    : 1) *
                                (r.S + r.u)
                            )) >=
                              60 * f && (o = 0),
                            "s" === t)
                          )
                            return 0 === o ? "0" : "" + o / f;
                          if (((i = n(o, 2 + a)), "ss" === t))
                            return i.substr(0, 2);
                          return "." + i.substr(2, t.length - 1);
                        case 90:
                          switch (t) {
                            case "[h]":
                            case "[hh]":
                              s = 24 * r.D + r.H;
                              break;
                            case "[m]":
                            case "[mm]":
                              s = (24 * r.D + r.H) * 60 + r.M;
                              break;
                            case "[s]":
                            case "[ss]":
                              s =
                                ((24 * r.D + r.H) * 60 + r.M) * 60 +
                                Math.round(r.S + r.u);
                              break;
                            default:
                              throw "bad abstime format: " + t;
                          }
                          u = 3 === t.length ? 1 : 2;
                          break;
                        case 101:
                          (s = h), (u = 1);
                      }
                      return u > 0 ? n(s, u) : "";
                    })(h[d].t.charCodeAt(0), h[d].v, s, x)),
                      (h[d].t = "t");
                    break;
                  case "n":
                  case "?":
                    for (
                      A = d + 1;
                      null != h[A] &&
                      ("?" === (p = h[A].t) ||
                        "D" === p ||
                        ((" " === p || "t" === p) &&
                          null != h[A + 1] &&
                          ("?" === h[A + 1].t ||
                            ("t" === h[A + 1].t && "/" === h[A + 1].v))) ||
                        ("(" === h[d].t &&
                          (" " === p || "n" === p || ")" === p)) ||
                        ("t" === p &&
                          ("/" === h[A].v ||
                            (" " === h[A].v &&
                              null != h[A + 1] &&
                              "?" == h[A + 1].t))));
                    )
                      (h[d].v += h[A].v), (h[A] = { v: "", t: ";" }), ++A;
                    (I += h[d].v), (d = A - 1);
                    break;
                  case "G":
                    (h[d].t = "t"), (h[d].v = C(t, r));
                }
              var y,
                R,
                F = "";
              if (I.length > 0) {
                40 == I.charCodeAt(0)
                  ? ((y = t < 0 && 45 === I.charCodeAt(0) ? -t : t),
                    (R = T("n", I, y)))
                  : ((R = T("n", I, (y = t < 0 && a > 1 ? -t : t))),
                    y < 0 &&
                      h[0] &&
                      "t" == h[0].t &&
                      ((R = R.substr(1)), (h[0].v = "-" + h[0].v))),
                  (A = R.length - 1);
                var D = h.length;
                for (d = 0; d < h.length; ++d)
                  if (
                    null != h[d] &&
                    "t" != h[d].t &&
                    h[d].v.indexOf(".") > -1
                  ) {
                    D = d;
                    break;
                  }
                var O = h.length;
                if (D === h.length && -1 === R.indexOf("E")) {
                  for (d = h.length - 1; d >= 0; --d)
                    null != h[d] &&
                      -1 !== "n?".indexOf(h[d].t) &&
                      (A >= h[d].v.length - 1
                        ? ((A -= h[d].v.length),
                          (h[d].v = R.substr(A + 1, h[d].v.length)))
                        : A < 0
                          ? (h[d].v = "")
                          : ((h[d].v = R.substr(0, A + 1)), (A = -1)),
                      (h[d].t = "t"),
                      (O = d));
                  A >= 0 &&
                    O < h.length &&
                    (h[O].v = R.substr(0, A + 1) + h[O].v);
                } else if (D !== h.length && -1 === R.indexOf("E")) {
                  for (A = R.indexOf(".") - 1, d = D; d >= 0; --d)
                    if (null != h[d] && -1 !== "n?".indexOf(h[d].t)) {
                      for (
                        i =
                          h[d].v.indexOf(".") > -1 && d === D
                            ? h[d].v.indexOf(".") - 1
                            : h[d].v.length - 1,
                          F = h[d].v.substr(i + 1);
                        i >= 0;
                        --i
                      )
                        A >= 0 &&
                          ("0" === h[d].v.charAt(i) ||
                            "#" === h[d].v.charAt(i)) &&
                          (F = R.charAt(A--) + F);
                      (h[d].v = F), (h[d].t = "t"), (O = d);
                    }
                  for (
                    A >= 0 &&
                      O < h.length &&
                      (h[O].v = R.substr(0, A + 1) + h[O].v),
                      A = R.indexOf(".") + 1,
                      d = D;
                    d < h.length;
                    ++d
                  )
                    if (
                      null != h[d] &&
                      (-1 !== "n?(".indexOf(h[d].t) || d === D)
                    ) {
                      for (
                        i =
                          h[d].v.indexOf(".") > -1 && d === D
                            ? h[d].v.indexOf(".") + 1
                            : 0,
                          F = h[d].v.substr(0, i);
                        i < h[d].v.length;
                        ++i
                      )
                        A < R.length && (F += R.charAt(A++));
                      (h[d].v = F), (h[d].t = "t"), (O = d);
                    }
                }
              }
              for (d = 0; d < h.length; ++d)
                null != h[d] &&
                  "n?".indexOf(h[d].t) > -1 &&
                  ((y = a > 1 && t < 0 && d > 0 && "-" === h[d - 1].v ? -t : t),
                  (h[d].v = T(h[d].t, h[d].v, y)),
                  (h[d].t = "t"));
              var P = "";
              for (d = 0; d !== h.length; ++d) null != h[d] && (P += h[d].v);
              return P;
            }
            (e.is_date = k), (e._eval = A);
            var I = /\[[=<>]/,
              y = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
            function R(e, t) {
              if (null == t) return !1;
              var r = parseFloat(t[2]);
              switch (t[1]) {
                case "=":
                  if (e == r) return !0;
                  break;
                case ">":
                  if (e > r) return !0;
                  break;
                case "<":
                  if (e < r) return !0;
                  break;
                case "<>":
                  if (e != r) return !0;
                  break;
                case ">=":
                  if (e >= r) return !0;
                  break;
                case "<=":
                  if (e <= r) return !0;
              }
              return !1;
            }
            function F(e, t, r) {
              null == r && (r = {});
              var n = "";
              switch (typeof e) {
                case "string":
                  n = "m/d/yy" == e && r.dateNF ? r.dateNF : e;
                  break;
                case "number":
                  null ==
                    (n =
                      14 == e && r.dateNF
                        ? r.dateNF
                        : (null != r.table ? r.table : h)[e]) &&
                    (n = (r.table && r.table[u[e]]) || h[u[e]]),
                    null == n && (n = p[e] || "General");
              }
              if (o(n, 0)) return C(t, r);
              t instanceof Date && (t = S(t, r.date1904));
              var a = (function (e, t) {
                var r = x(e),
                  n = r.length,
                  a = r[n - 1].indexOf("@");
                if ((n < 4 && a > -1 && --n, r.length > 4))
                  throw Error(
                    "cannot find right format for |" + r.join("|") + "|"
                  );
                if ("number" != typeof t)
                  return [4, 4 === r.length || a > -1 ? r[r.length - 1] : "@"];
                switch (r.length) {
                  case 1:
                    r =
                      a > -1
                        ? ["General", "General", "General", r[0]]
                        : [r[0], r[0], r[0], "@"];
                    break;
                  case 2:
                    r =
                      a > -1
                        ? [r[0], r[0], r[0], r[1]]
                        : [r[0], r[1], r[0], "@"];
                    break;
                  case 3:
                    r =
                      a > -1
                        ? [r[0], r[1], r[0], r[2]]
                        : [r[0], r[1], r[2], "@"];
                }
                var s = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
                if (-1 === r[0].indexOf("[") && -1 === r[1].indexOf("["))
                  return [n, s];
                if (null != r[0].match(I) || null != r[1].match(I)) {
                  var i = r[0].match(y),
                    o = r[1].match(y);
                  return R(t, i)
                    ? [n, r[0]]
                    : R(t, o)
                      ? [n, r[1]]
                      : [n, r[null != i && null != o ? 2 : 1]];
                }
                return [n, s];
              })(n, t);
              if (o(a[1])) return C(t, r);
              if (!0 === t) t = "TRUE";
              else if (!1 === t) t = "FALSE";
              else if ("" === t || null == t) return "";
              return A(a[1], t, r, a[0]);
            }
            function D(e, t) {
              if ("number" != typeof t) {
                t = +t || -1;
                for (var r = 0; r < 392; ++r) {
                  if (void 0 == h[r]) {
                    t < 0 && (t = r);
                    continue;
                  }
                  if (h[r] == e) {
                    t = r;
                    break;
                  }
                }
                t < 0 && (t = 391);
              }
              return (h[t] = e), t;
            }
            (e.load = D),
              (e._table = h),
              (e.get_table = function () {
                return h;
              }),
              (e.load_table = function (e) {
                for (var t = 0; 392 != t; ++t) void 0 !== e[t] && D(e[t], t);
              }),
              (e.init_table = f),
              (e.format = F);
          };
        eb(ev);
        var eE = {
            "General Number": "General",
            "General Date": ev._table[22],
            "Long Date": "dddd, mmmm dd, yyyy",
            "Medium Date": ev._table[15],
            "Short Date": ev._table[14],
            "Long Time": ev._table[19],
            "Medium Time": ev._table[18],
            "Short Time": ev._table[20],
            Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
            Fixed: ev._table[2],
            Standard: ev._table[4],
            Percent: ev._table[10],
            Scientific: ev._table[11],
            "Yes/No": '"Yes";"Yes";"No";@',
            "True/False": '"True";"True";"False";@',
            "On/Off": '"Yes";"Yes";"No";@',
          },
          eS = {
            5: '"$"#,##0_);\\("$"#,##0\\)',
            6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
            7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
            8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
            23: "General",
            24: "General",
            25: "General",
            26: "General",
            27: "m/d/yy",
            28: "m/d/yy",
            29: "m/d/yy",
            30: "m/d/yy",
            31: "m/d/yy",
            32: "h:mm:ss",
            33: "h:mm:ss",
            34: "h:mm:ss",
            35: "h:mm:ss",
            36: "m/d/yy",
            41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
            42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
            43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
            44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
            50: "m/d/yy",
            51: "m/d/yy",
            52: "m/d/yy",
            53: "m/d/yy",
            54: "m/d/yy",
            55: "m/d/yy",
            56: "m/d/yy",
            57: "m/d/yy",
            58: "m/d/yy",
            59: "0",
            60: "0.00",
            61: "#,##0",
            62: "#,##0.00",
            63: '"$"#,##0_);\\("$"#,##0\\)',
            64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
            65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
            66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
            67: "0%",
            68: "0.00%",
            69: "# ?/?",
            70: "# ??/??",
            71: "m/d/yy",
            72: "m/d/yy",
            73: "d-mmm-yy",
            74: "d-mmm",
            75: "mmm-yy",
            76: "h:mm",
            77: "h:mm:ss",
            78: "m/d/yy h:mm",
            79: "mm:ss",
            80: "[h]:mm:ss",
            81: "mmss.0",
          },
          ew = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
        ((s = L = {}).version = "1.2.0"),
          (i = (function () {
            for (var e = 0, t = Array(256), r = 0; 256 != r; ++r)
              (e =
                1 &
                (e =
                  1 &
                  (e =
                    1 &
                    (e =
                      1 &
                      (e =
                        1 &
                        (e =
                          1 &
                          (e =
                            1 &
                            (e = 1 & (e = r) ? -306674912 ^ (e >>> 1) : e >>> 1)
                              ? -306674912 ^ (e >>> 1)
                              : e >>> 1)
                            ? -306674912 ^ (e >>> 1)
                            : e >>> 1)
                          ? -306674912 ^ (e >>> 1)
                          : e >>> 1)
                        ? -306674912 ^ (e >>> 1)
                        : e >>> 1)
                      ? -306674912 ^ (e >>> 1)
                      : e >>> 1)
                    ? -306674912 ^ (e >>> 1)
                    : e >>> 1)
                  ? -306674912 ^ (e >>> 1)
                  : e >>> 1),
                (t[r] = e);
            return "undefined" != typeof Int32Array ? new Int32Array(t) : t;
          })()),
          (s.table = i),
          (s.bstr = function (e, t) {
            for (var r = -1 ^ t, n = e.length - 1, a = 0; a < n; )
              r =
                ((r = (r >>> 8) ^ i[(r ^ e.charCodeAt(a++)) & 255]) >>> 8) ^
                i[(r ^ e.charCodeAt(a++)) & 255];
            return (
              a === n && (r = (r >>> 8) ^ i[(r ^ e.charCodeAt(a)) & 255]),
              -1 ^ r
            );
          }),
          (s.buf = function (e, t) {
            if (e.length > 1e4)
              return (function (e, t) {
                for (var r = -1 ^ t, n = e.length - 7, a = 0; a < n; )
                  r =
                    ((r =
                      ((r =
                        ((r =
                          ((r =
                            ((r =
                              ((r =
                                ((r = (r >>> 8) ^ i[(r ^ e[a++]) & 255]) >>>
                                  8) ^
                                i[(r ^ e[a++]) & 255]) >>>
                                8) ^
                              i[(r ^ e[a++]) & 255]) >>>
                              8) ^
                            i[(r ^ e[a++]) & 255]) >>>
                            8) ^
                          i[(r ^ e[a++]) & 255]) >>>
                          8) ^
                        i[(r ^ e[a++]) & 255]) >>>
                        8) ^
                      i[(r ^ e[a++]) & 255]) >>>
                      8) ^
                    i[(r ^ e[a++]) & 255];
                for (; a < n + 7; ) r = (r >>> 8) ^ i[(r ^ e[a++]) & 255];
                return -1 ^ r;
              })(e, t);
            for (var r = -1 ^ t, n = e.length - 3, a = 0; a < n; )
              r =
                ((r =
                  ((r =
                    ((r = (r >>> 8) ^ i[(r ^ e[a++]) & 255]) >>> 8) ^
                    i[(r ^ e[a++]) & 255]) >>>
                    8) ^
                  i[(r ^ e[a++]) & 255]) >>>
                  8) ^
                i[(r ^ e[a++]) & 255];
            for (; a < n + 3; ) r = (r >>> 8) ^ i[(r ^ e[a++]) & 255];
            return -1 ^ r;
          }),
          (s.str = function (e, t) {
            for (var r, n, a = -1 ^ t, s = 0, o = e.length; s < o; )
              (r = e.charCodeAt(s++)) < 128
                ? (a = (a >>> 8) ^ i[(a ^ r) & 255])
                : r < 2048
                  ? (a =
                      ((a =
                        (a >>> 8) ^ i[(a ^ (192 | ((r >> 6) & 31))) & 255]) >>>
                        8) ^
                      i[(a ^ (128 | (63 & r))) & 255])
                  : r >= 55296 && r < 57344
                    ? ((r = (1023 & r) + 64),
                      (n = 1023 & e.charCodeAt(s++)),
                      (a =
                        ((a =
                          ((a =
                            ((a =
                              (a >>> 8) ^
                              i[(a ^ (240 | ((r >> 8) & 7))) & 255]) >>>
                              8) ^
                            i[(a ^ (128 | ((r >> 2) & 63))) & 255]) >>>
                            8) ^
                          i[
                            (a ^ (128 | ((n >> 6) & 15) | ((3 & r) << 4))) & 255
                          ]) >>>
                          8) ^
                        i[(a ^ (128 | (63 & n))) & 255]))
                    : (a =
                        ((a =
                          ((a =
                            (a >>> 8) ^
                            i[(a ^ (224 | ((r >> 12) & 15))) & 255]) >>>
                            8) ^
                          i[(a ^ (128 | ((r >> 6) & 63))) & 255]) >>>
                          8) ^
                        i[(a ^ (128 | (63 & r))) & 255]);
            return -1 ^ a;
          });
        var eC = (function () {
          var e,
            t,
            n,
            a = {};
          function s(e) {
            if ("/" == e.charAt(e.length - 1))
              return -1 === e.slice(0, -1).indexOf("/") ? e : s(e.slice(0, -1));
            var t = e.lastIndexOf("/");
            return -1 === t ? e : e.slice(0, t + 1);
          }
          function i(e) {
            if ("/" == e.charAt(e.length - 1)) return i(e.slice(0, -1));
            var t = e.lastIndexOf("/");
            return -1 === t ? e : e.slice(t + 1);
          }
          function o(e) {
            tZ(e, 0);
            for (var t = {}, r = 0; e.l <= e.length - 4; ) {
              var n = e.read_shift(2),
                a = e.read_shift(2),
                s = e.l + a,
                i = {};
              21589 === n &&
                (1 & (r = e.read_shift(1)) && (i.mtime = e.read_shift(4)),
                a > 5 &&
                  (2 & r && (i.atime = e.read_shift(4)),
                  4 & r && (i.ctime = e.read_shift(4))),
                i.mtime && (i.mt = new Date(1e3 * i.mtime))),
                (e.l = s),
                (t[n] = i);
            }
            return t;
          }
          function c() {
            return t || (t = r(99851));
          }
          function l(e, t) {
            if (80 == e[0] && 75 == e[1]) return j(e, t);
            if (e.length < 512)
              throw Error("CFB file size " + e.length + " < 512");
            var r = 3,
              n = 512,
              a = 0,
              s = 0,
              i = 0,
              o = 0,
              c = 0,
              l = [],
              h = e.slice(0, 512);
            tZ(h, 0);
            var u = (function (e) {
              if (80 == e[e.l] && 75 == e[e.l + 1]) return [0, 0];
              e.chk(g, "Header Signature: "), (e.l += 16);
              var t = e.read_shift(2, "u");
              return [e.read_shift(2, "u"), t];
            })(h);
            switch ((r = u[0])) {
              case 3:
                n = 512;
                break;
              case 4:
                n = 4096;
                break;
              case 0:
                if (0 == u[1]) return j(e, t);
              default:
                throw Error("Major Version: Expected 3 or 4 saw " + r);
            }
            512 !== n && tZ((h = e.slice(0, n)), 28);
            var d = e.slice(0, n);
            !(function (e, t) {
              var r = 9;
              switch (((e.l += 2), (r = e.read_shift(2)))) {
                case 9:
                  if (3 != t) throw Error("Sector Shift: Expected 9 saw " + r);
                  break;
                case 12:
                  if (4 != t) throw Error("Sector Shift: Expected 12 saw " + r);
                  break;
                default:
                  throw Error("Sector Shift: Expected 9 or 12 saw " + r);
              }
              e.chk("0600", "Mini Sector Shift: "),
                e.chk("000000000000", "Reserved: ");
            })(h, r);
            var v = h.read_shift(4, "i");
            if (3 === r && 0 !== v)
              throw Error("# Directory Sectors: Expected 0 saw " + v);
            (h.l += 4),
              (i = h.read_shift(4, "i")),
              (h.l += 4),
              h.chk("00100000", "Mini Stream Cutoff Size: "),
              (o = h.read_shift(4, "i")),
              (a = h.read_shift(4, "i")),
              (c = h.read_shift(4, "i")),
              (s = h.read_shift(4, "i"));
            for (
              var b = -1, E = 0;
              E < 109 && !((b = h.read_shift(4, "i")) < 0);
              ++E
            )
              l[E] = b;
            var S = (function (e, t) {
              for (
                var r = Math.ceil(e.length / t) - 1, n = [], a = 1;
                a < r;
                ++a
              )
                n[a - 1] = e.slice(a * t, (a + 1) * t);
              return (n[r - 1] = e.slice(r * t)), n;
            })(e, n);
            !(function e(t, r, n, a, s) {
              var i = m;
              if (t === m) {
                if (0 !== r) throw Error("DIFAT chain shorter than expected");
              } else if (-1 !== t) {
                var o = n[t],
                  c = (a >>> 2) - 1;
                if (!o) return;
                for (var l = 0; l < c && (i = tG(o, 4 * l)) !== m; ++l)
                  s.push(i);
                e(tG(o, a - 4), r - 1, n, a, s);
              }
            })(c, s, S, n, l);
            var w = (function (e, t, r, n) {
              var a = e.length,
                s = [],
                i = [],
                o = [],
                c = [],
                l = n - 1,
                f = 0,
                h = 0,
                u = 0,
                d = 0;
              for (f = 0; f < a; ++f)
                if (((o = []), (u = f + t) >= a && (u -= a), !i[u])) {
                  c = [];
                  var p = [];
                  for (h = u; h >= 0; ) {
                    (p[h] = !0), (i[h] = !0), (o[o.length] = h), c.push(e[h]);
                    var m = r[Math.floor((4 * h) / n)];
                    if (n < 4 + (d = (4 * h) & l))
                      throw Error("FAT boundary crossed: " + h + " 4 " + n);
                    if (!e[m] || p[(h = tG(e[m], d))]) break;
                  }
                  s[u] = { nodes: o, data: tB([c]) };
                }
              return s;
            })(S, i, l, n);
            (w[i].name = "!Directory"),
              a > 0 && o !== m && (w[o].name = "!MiniFAT"),
              (w[l[0]].name = "!FAT"),
              (w.fat_addrs = l),
              (w.ssz = n);
            var C = [],
              B = [],
              T = [];
            (function (e, t, r, n, a, s, i, o) {
              for (
                var c, l = 0, h = n.length ? 2 : 0, u = t[e].data, d = 0, g = 0;
                d < u.length;
                d += 128
              ) {
                var v = u.slice(d, d + 128);
                tZ(v, 64),
                  (g = v.read_shift(2)),
                  (c = tx(v, 0, g - h)),
                  n.push(c);
                var b = {
                  name: c,
                  type: v.read_shift(1),
                  color: v.read_shift(1),
                  L: v.read_shift(4, "i"),
                  R: v.read_shift(4, "i"),
                  C: v.read_shift(4, "i"),
                  clsid: v.read_shift(16),
                  state: v.read_shift(4, "i"),
                  start: 0,
                  size: 0,
                };
                0 !==
                  v.read_shift(2) +
                    v.read_shift(2) +
                    v.read_shift(2) +
                    v.read_shift(2) && (b.ct = f(v, v.l - 8)),
                  0 !==
                    v.read_shift(2) +
                      v.read_shift(2) +
                      v.read_shift(2) +
                      v.read_shift(2) && (b.mt = f(v, v.l - 8)),
                  (b.start = v.read_shift(4, "i")),
                  (b.size = v.read_shift(4, "i")),
                  b.size < 0 &&
                    b.start < 0 &&
                    ((b.size = b.type = 0), (b.start = m), (b.name = "")),
                  5 === b.type
                    ? ((l = b.start),
                      a > 0 && l !== m && (t[l].name = "!StreamData"))
                    : b.size >= 4096
                      ? ((b.storage = "fat"),
                        void 0 === t[b.start] &&
                          (t[b.start] = (function (e, t, r, n, a) {
                            var s = [],
                              i = [];
                            a || (a = []);
                            var o = n - 1,
                              c = 0,
                              l = 0;
                            for (c = t; c >= 0; ) {
                              (a[c] = !0), (s[s.length] = c), i.push(e[c]);
                              var f = r[Math.floor((4 * c) / n)];
                              if (n < 4 + (l = (4 * c) & o))
                                throw Error(
                                  "FAT boundary crossed: " + c + " 4 " + n
                                );
                              if (!e[f]) break;
                              c = tG(e[f], l);
                            }
                            return { nodes: s, data: tB([i]) };
                          })(r, b.start, t.fat_addrs, t.ssz)),
                        (t[b.start].name = b.name),
                        (b.content = t[b.start].data.slice(0, b.size)))
                      : ((b.storage = "minifat"),
                        b.size < 0
                          ? (b.size = 0)
                          : l !== m &&
                            b.start !== m &&
                            t[l] &&
                            (b.content = (function (e, t, r) {
                              for (
                                var n = e.start, a = e.size, s = [], i = n;
                                r && a > 0 && i >= 0;
                              )
                                s.push(t.slice(i * p, i * p + p)),
                                  (a -= p),
                                  (i = tG(r, 4 * i));
                              return 0 === s.length
                                ? t1(0)
                                : ep(s).slice(0, e.size);
                            })(b, t[l].data, (t[o] || {}).data))),
                  b.content && tZ(b.content, 0),
                  (s[c] = b),
                  i.push(b);
              }
            })(i, w, S, C, a, {}, B, o),
              (function (e, t, r) {
                for (
                  var n = 0,
                    a = 0,
                    s = 0,
                    i = 0,
                    o = 0,
                    c = r.length,
                    l = [],
                    f = [];
                  n < c;
                  ++n
                )
                  (l[n] = f[n] = n), (t[n] = r[n]);
                for (; o < f.length; ++o)
                  (a = e[(n = f[o])].L),
                    (s = e[n].R),
                    (i = e[n].C),
                    l[n] === n &&
                      (-1 !== a && l[a] !== a && (l[n] = l[a]),
                      -1 !== s && l[s] !== s && (l[n] = l[s])),
                    -1 !== i && (l[i] = n),
                    -1 !== a &&
                      n != l[n] &&
                      ((l[a] = l[n]), f.lastIndexOf(a) < o && f.push(a)),
                    -1 !== s &&
                      n != l[n] &&
                      ((l[s] = l[n]), f.lastIndexOf(s) < o && f.push(s));
                for (n = 1; n < c; ++n)
                  l[n] === n &&
                    (-1 !== s && l[s] !== s
                      ? (l[n] = l[s])
                      : -1 !== a && l[a] !== a && (l[n] = l[a]));
                for (n = 1; n < c; ++n)
                  if (0 !== e[n].type) {
                    if ((o = n) != l[o])
                      do (o = l[o]), (t[n] = t[o] + "/" + t[n]);
                      while (0 !== o && -1 !== l[o] && o != l[o]);
                    l[n] = -1;
                  }
                for (t[0] += "/", n = 1; n < c; ++n)
                  2 !== e[n].type && (t[n] += "/");
              })(B, T, C),
              C.shift();
            var x = { FileIndex: B, FullPaths: T };
            return t && t.raw && (x.raw = { header: d, sectors: S }), x;
          }
          function f(e, t) {
            return new Date(
              ((tX(e, t + 4) / 1e7) * 4294967296 +
                tX(e, t) / 1e7 -
                11644473600) *
                1e3
            );
          }
          function h(e, t) {
            var r = t || {},
              n = r.root || "Root Entry";
            if (
              (e.FullPaths || (e.FullPaths = []),
              e.FileIndex || (e.FileIndex = []),
              e.FullPaths.length !== e.FileIndex.length)
            )
              throw Error("inconsistent CFB structure");
            0 === e.FullPaths.length &&
              ((e.FullPaths[0] = n + "/"),
              (e.FileIndex[0] = { name: n, type: 5 })),
              r.CLSID && (e.FileIndex[0].clsid = r.CLSID),
              (function (e) {
                var t = "\x01Sh33tJ5";
                if (!eC.find(e, "/" + t)) {
                  var r = t1(4);
                  (r[0] = 55),
                    (r[1] = r[3] = 50),
                    (r[2] = 54),
                    e.FileIndex.push({
                      name: t,
                      type: 2,
                      content: r,
                      size: 4,
                      L: 69,
                      R: 69,
                      C: 69,
                    }),
                    e.FullPaths.push(e.FullPaths[0] + t),
                    u(e);
                }
              })(e);
          }
          function u(e, t) {
            h(e);
            for (var r = !1, n = !1, a = e.FullPaths.length - 1; a >= 0; --a) {
              var o = e.FileIndex[a];
              switch (o.type) {
                case 0:
                  n ? (r = !0) : (e.FileIndex.pop(), e.FullPaths.pop());
                  break;
                case 1:
                case 2:
                case 5:
                  (n = !0),
                    isNaN(o.R * o.L * o.C) && (r = !0),
                    o.R > -1 && o.L > -1 && o.R == o.L && (r = !0);
                  break;
                default:
                  r = !0;
              }
            }
            if (r || t) {
              var c = new Date(1987, 1, 19),
                l = 0,
                f = [];
              for (a = 0; a < e.FullPaths.length; ++a)
                0 !== e.FileIndex[a].type &&
                  f.push([e.FullPaths[a], e.FileIndex[a]]);
              for (a = 0; a < f.length; ++a) {
                var u = s(f[a][0]);
                for (l = 0, n = !1; l < f.length; ++l)
                  f[l][0] === u && (n = !0);
                n ||
                  f.push([
                    u,
                    {
                      name: i(u).replace("/", ""),
                      type: 1,
                      clsid: b,
                      ct: c,
                      mt: c,
                      content: null,
                    },
                  ]);
              }
              for (
                f.sort(function (e, t) {
                  return (function (e, t) {
                    for (
                      var r = e.split("/"),
                        n = t.split("/"),
                        a = 0,
                        s = 0,
                        i = Math.min(r.length, n.length);
                      a < i;
                      ++a
                    ) {
                      if ((s = r[a].length - n[a].length)) return s;
                      if (r[a] != n[a]) return r[a] < n[a] ? -1 : 1;
                    }
                    return r.length - n.length;
                  })(e[0], t[0]);
                }),
                  e.FullPaths = [],
                  e.FileIndex = [],
                  a = 0;
                a < f.length;
                ++a
              )
                (e.FullPaths[a] = f[a][0]), (e.FileIndex[a] = f[a][1]);
              for (a = 0; a < f.length; ++a) {
                var d = e.FileIndex[a],
                  p = e.FullPaths[a];
                if (
                  ((d.name = i(p).replace("/", "")),
                  (d.L = d.R = d.C = -(d.color = 1)),
                  (d.size = d.content ? d.content.length : 0),
                  (d.start = 0),
                  (d.clsid = d.clsid || b),
                  0 === a)
                )
                  (d.C = f.length > 1 ? 1 : -1), (d.size = 0), (d.type = 5);
                else if ("/" == p.slice(-1)) {
                  for (l = a + 1; l < f.length && s(e.FullPaths[l]) != p; ++l);
                  for (
                    d.C = l >= f.length ? -1 : l, l = a + 1;
                    l < f.length && s(e.FullPaths[l]) != s(p);
                    ++l
                  );
                  (d.R = l >= f.length ? -1 : l), (d.type = 1);
                } else
                  s(e.FullPaths[a + 1] || "") == s(p) && (d.R = a + 1),
                    (d.type = 2);
              }
            }
          }
          function d(e, t) {
            var r = t || {};
            if ((u(e), "zip" == r.fileType))
              return (function (e, t) {
                var r = [],
                  a = [],
                  s = t1(1),
                  i = (t || {}).compression ? 8 : 0,
                  o = 0,
                  c = 0,
                  l = 0,
                  f = 0,
                  h = e.FullPaths[0],
                  u = h,
                  d = e.FileIndex[0],
                  p = [],
                  m = 0;
                for (o = 1; o < e.FullPaths.length; ++o)
                  if (
                    ((u = e.FullPaths[o].slice(h.length)),
                    (d = e.FileIndex[o]).size &&
                      d.content &&
                      "\x01Sh33tJ5" != u)
                  ) {
                    var g,
                      v = l,
                      b = t1(u.length);
                    for (c = 0; c < u.length; ++c)
                      b.write_shift(1, 127 & u.charCodeAt(c));
                    (b = b.slice(0, b.l)), (p[f] = L.buf(d.content, 0));
                    var E = d.content;
                    8 == i && ((g = E), (E = n ? n.deflateRawSync(g) : D(g))),
                      (s = t1(30)).write_shift(4, 67324752),
                      s.write_shift(2, 20),
                      s.write_shift(2, 0),
                      s.write_shift(2, i),
                      d.mt
                        ? (function (e, t) {
                            "string" == typeof t && (t = new Date(t));
                            var r = t.getHours();
                            (r =
                              ((r = (r << 6) | t.getMinutes()) << 5) |
                              (t.getSeconds() >>> 1)),
                              e.write_shift(2, r);
                            var n = t.getFullYear() - 1980;
                            (n =
                              ((n = (n << 4) | (t.getMonth() + 1)) << 5) |
                              t.getDate()),
                              e.write_shift(2, n);
                          })(s, d.mt)
                        : s.write_shift(4, 0),
                      s.write_shift(-4, p[f]),
                      s.write_shift(4, E.length),
                      s.write_shift(4, d.content.length),
                      s.write_shift(2, b.length),
                      s.write_shift(2, 0),
                      (l += s.length),
                      r.push(s),
                      (l += b.length),
                      r.push(b),
                      (l += E.length),
                      r.push(E),
                      (s = t1(46)).write_shift(4, 33639248),
                      s.write_shift(2, 0),
                      s.write_shift(2, 20),
                      s.write_shift(2, 0),
                      s.write_shift(2, i),
                      s.write_shift(4, 0),
                      s.write_shift(-4, p[f]),
                      s.write_shift(4, E.length),
                      s.write_shift(4, d.content.length),
                      s.write_shift(2, b.length),
                      s.write_shift(2, 0),
                      s.write_shift(2, 0),
                      s.write_shift(2, 0),
                      s.write_shift(2, 0),
                      s.write_shift(4, 0),
                      s.write_shift(4, v),
                      (m += s.l),
                      a.push(s),
                      (m += b.length),
                      a.push(b),
                      ++f;
                  }
                return (
                  (s = t1(22)).write_shift(4, 101010256),
                  s.write_shift(2, 0),
                  s.write_shift(2, 0),
                  s.write_shift(2, f),
                  s.write_shift(2, f),
                  s.write_shift(4, m),
                  s.write_shift(4, l),
                  s.write_shift(2, 0),
                  ep([ep(r), ep(a), s])
                );
              })(e, r);
            var a = (function (e) {
                for (var t = 0, r = 0, n = 0; n < e.FileIndex.length; ++n) {
                  var a = e.FileIndex[n];
                  if (a.content) {
                    var s = a.content.length;
                    s > 0 &&
                      (s < 4096 ? (t += (s + 63) >> 6) : (r += (s + 511) >> 9));
                  }
                }
                for (
                  var i = (e.FullPaths.length + 3) >> 2,
                    o = (t + 7) >> 3,
                    c = (t + 127) >> 7,
                    l = o + r + i + c,
                    f = (l + 127) >> 7,
                    h = f <= 109 ? 0 : Math.ceil((f - 109) / 127);
                  (l + f + h + 127) >> 7 > f;
                )
                  h = ++f <= 109 ? 0 : Math.ceil((f - 109) / 127);
                var u = [1, h, f, c, i, r, t, 0];
                return (
                  (e.FileIndex[0].size = t << 6),
                  (u[7] =
                    (e.FileIndex[0].start =
                      u[0] + u[1] + u[2] + u[3] + u[4] + u[5]) +
                    ((u[6] + 7) >> 3)),
                  u
                );
              })(e),
              s = t1(a[7] << 9),
              i = 0,
              o = 0;
            for (i = 0; i < 8; ++i) s.write_shift(1, v[i]);
            for (i = 0; i < 8; ++i) s.write_shift(2, 0);
            for (
              s.write_shift(2, 62),
                s.write_shift(2, 3),
                s.write_shift(2, 65534),
                s.write_shift(2, 9),
                s.write_shift(2, 6),
                i = 0;
              i < 3;
              ++i
            )
              s.write_shift(2, 0);
            for (
              s.write_shift(4, 0),
                s.write_shift(4, a[2]),
                s.write_shift(4, a[0] + a[1] + a[2] + a[3] - 1),
                s.write_shift(4, 0),
                s.write_shift(4, 4096),
                s.write_shift(4, a[3] ? a[0] + a[1] + a[2] - 1 : m),
                s.write_shift(4, a[3]),
                s.write_shift(-4, a[1] ? a[0] - 1 : m),
                s.write_shift(4, a[1]),
                i = 0;
              i < 109;
              ++i
            )
              s.write_shift(-4, i < a[2] ? a[1] + i : -1);
            if (a[1])
              for (o = 0; o < a[1]; ++o) {
                for (; i < 236 + 127 * o; ++i)
                  s.write_shift(-4, i < a[2] ? a[1] + i : -1);
                s.write_shift(-4, o === a[1] - 1 ? m : o + 1);
              }
            var c = function (e) {
              for (o += e; i < o - 1; ++i) s.write_shift(-4, i + 1);
              e && (++i, s.write_shift(-4, m));
            };
            for (o = (i = 0) + a[1]; i < o; ++i) s.write_shift(-4, E.DIFSECT);
            for (o += a[2]; i < o; ++i) s.write_shift(-4, E.FATSECT);
            c(a[3]), c(a[4]);
            for (
              var l = 0, f = 0, h = e.FileIndex[0];
              l < e.FileIndex.length;
              ++l
            )
              (h = e.FileIndex[l]).content &&
                ((f = h.content.length) < 4096 ||
                  ((h.start = o), c((f + 511) >> 9)));
            for (c((a[6] + 7) >> 3); 511 & s.l; )
              s.write_shift(-4, E.ENDOFCHAIN);
            for (l = 0, o = i = 0; l < e.FileIndex.length; ++l)
              (h = e.FileIndex[l]).content &&
                (f = h.content.length) &&
                !(f >= 4096) &&
                ((h.start = o), c((f + 63) >> 6));
            for (; 511 & s.l; ) s.write_shift(-4, E.ENDOFCHAIN);
            for (i = 0; i < a[4] << 2; ++i) {
              var d = e.FullPaths[i];
              if (!d || 0 === d.length) {
                for (l = 0; l < 17; ++l) s.write_shift(4, 0);
                for (l = 0; l < 3; ++l) s.write_shift(4, -1);
                for (l = 0; l < 12; ++l) s.write_shift(4, 0);
                continue;
              }
              (h = e.FileIndex[i]),
                0 === i && (h.start = h.size ? h.start - 1 : m);
              var p = (0 === i && r.root) || h.name;
              if (
                ((f = 2 * (p.length + 1)),
                s.write_shift(64, p, "utf16le"),
                s.write_shift(2, f),
                s.write_shift(1, h.type),
                s.write_shift(1, h.color),
                s.write_shift(-4, h.L),
                s.write_shift(-4, h.R),
                s.write_shift(-4, h.C),
                h.clsid)
              )
                s.write_shift(16, h.clsid, "hex");
              else for (l = 0; l < 4; ++l) s.write_shift(4, 0);
              s.write_shift(4, h.state || 0),
                s.write_shift(4, 0),
                s.write_shift(4, 0),
                s.write_shift(4, 0),
                s.write_shift(4, 0),
                s.write_shift(4, h.start),
                s.write_shift(4, h.size),
                s.write_shift(4, 0);
            }
            for (i = 1; i < e.FileIndex.length; ++i)
              if ((h = e.FileIndex[i]).size >= 4096) {
                for (l = 0, s.l = (h.start + 1) << 9; l < h.size; ++l)
                  s.write_shift(1, h.content[l]);
                for (; 511 & l; ++l) s.write_shift(1, 0);
              }
            for (i = 1; i < e.FileIndex.length; ++i)
              if ((h = e.FileIndex[i]).size > 0 && h.size < 4096) {
                for (l = 0; l < h.size; ++l) s.write_shift(1, h.content[l]);
                for (; 63 & l; ++l) s.write_shift(1, 0);
              }
            for (; s.l < s.length; ) s.write_shift(1, 0);
            return s;
          }
          a.version = "1.1.4";
          var p = 64,
            m = -2,
            g = "d0cf11e0a1b11ae1",
            v = [208, 207, 17, 224, 161, 177, 26, 225],
            b = "00000000000000000000000000000000",
            E = {
              MAXREGSECT: -6,
              DIFSECT: -4,
              FATSECT: -3,
              ENDOFCHAIN: -2,
              FREESECT: -1,
              HEADER_SIGNATURE: g,
              HEADER_MINOR_VERSION: "3e00",
              MAXREGSID: -6,
              NOSTREAM: -1,
              HEADER_CLSID: b,
              EntryTypes: [
                "unknown",
                "storage",
                "stream",
                "lockbytes",
                "property",
                "root",
              ],
            };
          function S(e) {
            for (var t = Array(e.length), r = 0; r < e.length; ++r)
              t[r] = String.fromCharCode(e[r]);
            return t.join("");
          }
          for (
            var w = [
                16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                15,
              ],
              C = [
                3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43,
                51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258,
              ],
              B = [
                1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257,
                385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289,
                16385, 24577,
              ],
              T = "undefined" != typeof Uint8Array,
              x = T ? new Uint8Array(256) : [],
              _ = 0;
            _ < 256;
            ++_
          )
            x[_] = (function (e) {
              var t =
                (((e << 1) | (e << 11)) & 139536) |
                (((e << 5) | (e << 15)) & 558144);
              return ((t >> 16) | (t >> 8) | t) & 255;
            })(_);
          function k(e, t) {
            var r = 7 & t,
              n = t >>> 3;
            return ((e[n] | (r <= 5 ? 0 : e[n + 1] << 8)) >>> r) & 7;
          }
          function A(e, t) {
            var r = 7 & t,
              n = t >>> 3;
            return ((e[n] | (r <= 3 ? 0 : e[n + 1] << 8)) >>> r) & 31;
          }
          function I(e, t) {
            var r = 7 & t,
              n = t >>> 3;
            return ((e[n] | (r <= 1 ? 0 : e[n + 1] << 8)) >>> r) & 127;
          }
          function y(e, t, r) {
            var n = 7 & t,
              a = t >>> 3,
              s = (1 << r) - 1,
              i = e[a] >>> n;
            return r < 8 - n
              ? i & s
              : ((i |= e[a + 1] << (8 - n)), r < 16 - n)
                ? i & s
                : ((i |= e[a + 2] << (16 - n)), r < 24 - n)
                  ? i & s
                  : (i |= e[a + 3] << (24 - n)) & s;
          }
          function R(e, t) {
            var r = e.length,
              n = 2 * r > t ? 2 * r : t + 5,
              a = 0;
            if (r >= t) return e;
            if (es) {
              var s = el(n);
              if (e.copy) e.copy(s);
              else for (; a < e.length; ++a) s[a] = e[a];
              return s;
            }
            if (T) {
              var i = new Uint8Array(n);
              if (i.set) i.set(e);
              else for (; a < e.length; ++a) i[a] = e[a];
              return i;
            }
            return (e.length = n), e;
          }
          function F(e) {
            for (var t = Array(e), r = 0; r < e; ++r) t[r] = 0;
            return t;
          }
          var D =
            ((e = function (e, t) {
              for (var r = 0; r < e.length; ) {
                var n = Math.min(65535, e.length - r),
                  a = r + n == e.length;
                for (
                  t.write_shift(1, +a),
                    t.write_shift(2, n),
                    t.write_shift(2, 65535 & ~n);
                  n-- > 0;
                )
                  t[t.l++] = e[r++];
              }
              return t.l;
            }),
            function (t) {
              var r = t1(50 + Math.floor(1.1 * t.length)),
                n = e(t, r);
              return r.slice(0, n);
            });
          function O(e, t, r) {
            var n = 1,
              a = 0,
              s = 0,
              i = 0,
              o = 0,
              c = e.length,
              l = T ? new Uint16Array(32) : F(32);
            for (s = 0; s < 32; ++s) l[s] = 0;
            for (s = c; s < r; ++s) e[s] = 0;
            c = e.length;
            var f = T ? new Uint16Array(c) : F(c);
            for (s = 0; s < c; ++s)
              l[(a = e[s])]++, n < a && (n = a), (f[s] = 0);
            for (s = 1, l[0] = 0; s <= n; ++s)
              l[s + 16] = o = (o + l[s - 1]) << 1;
            for (s = 0; s < c; ++s) 0 != (o = e[s]) && (f[s] = l[o + 16]++);
            var h = 0;
            for (s = 0; s < c; ++s)
              if (0 != (h = e[s]))
                for (
                  o =
                    (function (e, t) {
                      var r = x[255 & e];
                      return t <= 8
                        ? r >>> (8 - t)
                        : ((r = (r << 8) | x[(e >> 8) & 255]), t <= 16)
                          ? r >>> (16 - t)
                          : (r = (r << 8) | x[(e >> 16) & 255]) >>> (24 - t);
                    })(f[s], n) >>
                    (n - h),
                    i = (1 << (n + 4 - h)) - 1;
                  i >= 0;
                  --i
                )
                  t[o | (i << h)] = (15 & h) | (s << 4);
            return n;
          }
          var P = T ? new Uint16Array(512) : F(512),
            N = T ? new Uint16Array(32) : F(32);
          if (!T) {
            for (var M = 0; M < 512; ++M) P[M] = 0;
            for (M = 0; M < 32; ++M) N[M] = 0;
          }
          !(function () {
            for (var e = [], t = 0; t < 32; t++) e.push(5);
            O(e, N, 32);
            var r = [];
            for (t = 0; t <= 143; t++) r.push(8);
            for (; t <= 255; t++) r.push(9);
            for (; t <= 279; t++) r.push(7);
            for (; t <= 287; t++) r.push(8);
            O(r, P, 288);
          })();
          var U = T ? new Uint16Array(32768) : F(32768),
            H = T ? new Uint16Array(32768) : F(32768),
            W = T ? new Uint16Array(128) : F(128),
            V = 1,
            X = 1;
          function G(e, t) {
            var r = (function (e, t) {
              if (3 == e[0] && !(3 & e[1])) return [ec(t), 2];
              for (
                var r = 0,
                  n = 0,
                  a = el(t || 262144),
                  s = 0,
                  i = a.length >>> 0,
                  o = 0,
                  c = 0;
                (1 & n) == 0;
              ) {
                if (((n = k(e, r)), (r += 3), n >>> 1 == 0)) {
                  7 & r && (r += 8 - (7 & r));
                  var l = e[r >>> 3] | (e[(r >>> 3) + 1] << 8);
                  if (
                    ((r += 32),
                    !t && i < s + l && (i = (a = R(a, s + l)).length),
                    "function" == typeof e.copy)
                  )
                    e.copy(a, s, r >>> 3, (r >>> 3) + l),
                      (s += l),
                      (r += 8 * l);
                  else for (; l-- > 0; ) (a[s++] = e[r >>> 3]), (r += 8);
                  continue;
                }
                for (
                  n >>> 1 == 1
                    ? ((o = 9), (c = 5))
                    : ((r = (function (e, t) {
                        var r,
                          n,
                          a,
                          s = A(e, t) + 257,
                          i = A(e, (t += 5)) + 1;
                        t += 5;
                        var o =
                          ((n = 7 & (r = t)),
                          (((e[(a = r >>> 3)] |
                            (n <= 4 ? 0 : e[a + 1] << 8)) >>>
                            n) &
                            15) +
                            4);
                        t += 4;
                        for (
                          var c = 0,
                            l = T ? new Uint8Array(19) : F(19),
                            f = [
                              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                              0, 0,
                            ],
                            h = 1,
                            u = T ? new Uint8Array(8) : F(8),
                            d = T ? new Uint8Array(8) : F(8),
                            p = l.length,
                            m = 0;
                          m < o;
                          ++m
                        )
                          (l[w[m]] = c = k(e, t)),
                            h < c && (h = c),
                            u[c]++,
                            (t += 3);
                        var g = 0;
                        for (m = 1, u[0] = 0; m <= h; ++m)
                          d[m] = g = (g + u[m - 1]) << 1;
                        for (m = 0; m < p; ++m)
                          0 != (g = l[m]) && (f[m] = d[g]++);
                        var v = 0;
                        for (m = 0; m < p; ++m)
                          if (0 != (v = l[m])) {
                            g = x[f[m]] >> (8 - v);
                            for (var b = (1 << (7 - v)) - 1; b >= 0; --b)
                              W[g | (b << v)] = (7 & v) | (m << 3);
                          }
                        var E = [];
                        for (h = 1; E.length < s + i; )
                          switch (
                            ((g = W[I(e, t)]), (t += 7 & g), (g >>>= 3))
                          ) {
                            case 16:
                              for (
                                c =
                                  3 +
                                  (function (e, t) {
                                    var r = 7 & t,
                                      n = t >>> 3;
                                    return (
                                      ((e[n] | (r <= 6 ? 0 : e[n + 1] << 8)) >>>
                                        r) &
                                      3
                                    );
                                  })(e, t),
                                  t += 2,
                                  g = E[E.length - 1];
                                c-- > 0;
                              )
                                E.push(g);
                              break;
                            case 17:
                              for (c = 3 + k(e, t), t += 3; c-- > 0; )
                                E.push(0);
                              break;
                            case 18:
                              for (c = 11 + I(e, t), t += 7; c-- > 0; )
                                E.push(0);
                              break;
                            default:
                              E.push(g), h < g && (h = g);
                          }
                        var S = E.slice(0, s),
                          C = E.slice(s);
                        for (m = s; m < 286; ++m) S[m] = 0;
                        for (m = i; m < 30; ++m) C[m] = 0;
                        return (V = O(S, U, 286)), (X = O(C, H, 30)), t;
                      })(e, r)),
                      (o = V),
                      (c = X)),
                    !t && i < s + 32767 && (i = (a = R(a, s + 32767)).length);
                  ;
                ) {
                  var f = y(e, r, o),
                    h = n >>> 1 == 1 ? P[f] : U[f];
                  if (((r += 15 & h), (((h >>>= 4) >>> 8) & 255) == 0))
                    a[s++] = h;
                  else if (256 == h) break;
                  else {
                    var u = (h -= 257) < 8 ? 0 : (h - 4) >> 2;
                    u > 5 && (u = 0);
                    var d = s + C[h];
                    u > 0 && ((d += y(e, r, u)), (r += u)),
                      (f = y(e, r, c)),
                      (h = n >>> 1 == 1 ? N[f] : H[f]),
                      (r += 15 & h);
                    var p = (h >>>= 4) < 4 ? 0 : (h - 2) >> 1,
                      m = B[h];
                    for (
                      p > 0 && ((m += y(e, r, p)), (r += p)),
                        !t && i < d && (i = (a = R(a, d)).length);
                      s < d;
                    )
                      (a[s] = a[s - m]), ++s;
                  }
                }
              }
              return [t ? a : a.slice(0, s), (r + 7) >>> 3];
            })(e.slice(e.l || 0), t);
            return (e.l += r[1]), r[0];
          }
          function z(e, t) {
            if (e) "undefined" != typeof console && console.error(t);
            else throw Error(t);
          }
          function j(e, t) {
            var r = e;
            tZ(r, 0);
            var a = { FileIndex: [], FullPaths: [] };
            h(a, { root: t.root });
            for (
              var s = r.length - 4;
              (80 != r[s] ||
                75 != r[s + 1] ||
                5 != r[s + 2] ||
                6 != r[s + 3]) &&
              s >= 0;
            )
              --s;
            (r.l = s + 4), (r.l += 4);
            var i = r.read_shift(2);
            r.l += 6;
            var c = r.read_shift(4);
            for (s = 0, r.l = c; s < i; ++s) {
              r.l += 20;
              var l = r.read_shift(4),
                f = r.read_shift(4),
                u = r.read_shift(2),
                d = r.read_shift(2),
                p = r.read_shift(2);
              r.l += 8;
              var m = r.read_shift(4),
                g = o(r.slice(r.l + u, r.l + u + d));
              r.l += u + d + p;
              var v = r.l;
              (r.l = m + 4),
                (function (e, t, r, a, s) {
                  e.l += 2;
                  var i,
                    c,
                    l,
                    f,
                    h,
                    u,
                    d,
                    p = e.read_shift(2),
                    m = e.read_shift(2),
                    g =
                      ((i = 65535 & e.read_shift(2)),
                      (c = 65535 & e.read_shift(2)),
                      (l = new Date()),
                      (f = 31 & c),
                      (h = 15 & (c >>>= 5)),
                      (c >>>= 4),
                      l.setMilliseconds(0),
                      l.setFullYear(c + 1980),
                      l.setMonth(h - 1),
                      l.setDate(f),
                      (u = 31 & i),
                      (d = 63 & (i >>>= 5)),
                      (i >>>= 6),
                      l.setHours(i),
                      l.setMinutes(d),
                      l.setSeconds(u << 1),
                      l);
                  if (8257 & p) throw Error("Unsupported ZIP encryption");
                  for (
                    var v = e.read_shift(4),
                      b = e.read_shift(4),
                      E = e.read_shift(4),
                      S = e.read_shift(2),
                      w = e.read_shift(2),
                      C = "",
                      B = 0;
                    B < S;
                    ++B
                  )
                    C += String.fromCharCode(e[e.l++]);
                  if (w) {
                    var T = o(e.slice(e.l, e.l + w));
                    (T[21589] || {}).mt && (g = T[21589].mt),
                      ((s || {})[21589] || {}).mt && (g = s[21589].mt);
                  }
                  e.l += w;
                  var x = e.slice(e.l, e.l + b);
                  switch (m) {
                    case 8:
                      x = (function (e, t) {
                        if (!n) return G(e, t);
                        var r = new n.InflateRaw(),
                          a = r._processChunk(e.slice(e.l), r._finishFlushFlag);
                        return (e.l += r.bytesRead), a;
                      })(e, E);
                      break;
                    case 0:
                      break;
                    default:
                      throw Error("Unsupported ZIP Compression method " + m);
                  }
                  var _ = !1;
                  8 & p &&
                    (134695760 == (v = e.read_shift(4)) &&
                      ((v = e.read_shift(4)), (_ = !0)),
                    (b = e.read_shift(4)),
                    (E = e.read_shift(4))),
                    b != t && z(_, "Bad compressed size: " + t + " != " + b),
                    E != r && z(_, "Bad uncompressed size: " + r + " != " + E);
                  var k = L.buf(x, 0);
                  v >> 0 != k >> 0 &&
                    z(_, "Bad CRC32 checksum: " + v + " != " + k),
                    K(a, C, x, { unsafe: !0, mt: g });
                })(r, l, f, a, g),
                (r.l = v);
            }
            return a;
          }
          function K(e, t, r, n) {
            var a = n && n.unsafe;
            a || h(e);
            var s = !a && eC.find(e, t);
            if (!s) {
              var o = e.FullPaths[0];
              t.slice(0, o.length) == o
                ? (o = t)
                : ("/" != o.slice(-1) && (o += "/"),
                  (o = (o + t).replace("//", "/"))),
                (s = { name: i(t), type: 2 }),
                e.FileIndex.push(s),
                e.FullPaths.push(o),
                a || eC.utils.cfb_gc(e);
            }
            return (
              (s.content = r),
              (s.size = r ? r.length : 0),
              n &&
                (n.CLSID && (s.clsid = n.CLSID),
                n.mt && (s.mt = n.mt),
                n.ct && (s.ct = n.ct)),
              s
            );
          }
          return (
            (a.find = function (e, t) {
              var r = e.FullPaths.map(function (e) {
                  return e.toUpperCase();
                }),
                n = r.map(function (e) {
                  var t = e.split("/");
                  return t[t.length - ("/" == e.slice(-1) ? 2 : 1)];
                }),
                a = !1;
              47 === t.charCodeAt(0)
                ? ((a = !0), (t = r[0].slice(0, -1) + t))
                : (a = -1 !== t.indexOf("/"));
              var s = t.toUpperCase(),
                i = !0 === a ? r.indexOf(s) : n.indexOf(s);
              if (-1 !== i) return e.FileIndex[i];
              var o = !s.match(eg);
              for (
                s = s.replace(em, ""), o && (s = s.replace(eg, "!")), i = 0;
                i < r.length;
                ++i
              )
                if (
                  (o ? r[i].replace(eg, "!") : r[i]).replace(em, "") == s ||
                  (o ? n[i].replace(eg, "!") : n[i]).replace(em, "") == s
                )
                  return e.FileIndex[i];
              return null;
            }),
            (a.read = function (e, r) {
              switch ((r && r.type) || "base64") {
                case "file":
                  return c(), l(t.readFileSync(e), r);
                case "base64":
                  return l(ef(ea.decode(e)), r);
                case "binary":
                  return l(ef(e), r);
              }
              return l(e, r);
            }),
            (a.parse = l),
            (a.write = function (e, r) {
              var n = d(e, r);
              switch (r && r.type) {
                case "file":
                  c(), t.writeFileSync(r.filename, n);
                  break;
                case "binary":
                  return S(n);
                case "base64":
                  return ea.encode(S(n));
              }
              return n;
            }),
            (a.writeFile = function (e, r, n) {
              c();
              var a = d(e, n);
              t.writeFileSync(r, a);
            }),
            (a.utils = {
              cfb_new: function (e) {
                var t = {};
                return h(t, e), t;
              },
              cfb_add: K,
              cfb_del: function (e, t) {
                h(e);
                var r = eC.find(e, t);
                if (r) {
                  for (var n = 0; n < e.FileIndex.length; ++n)
                    if (e.FileIndex[n] == r)
                      return (
                        e.FileIndex.splice(n, 1), e.FullPaths.splice(n, 1), !0
                      );
                }
                return !1;
              },
              cfb_mov: function (e, t, r) {
                h(e);
                var n = eC.find(e, t);
                if (n) {
                  for (var a = 0; a < e.FileIndex.length; ++a)
                    if (e.FileIndex[a] == n)
                      return (
                        (e.FileIndex[a].name = i(r)), (e.FullPaths[a] = r), !0
                      );
                }
                return !1;
              },
              cfb_gc: function (e) {
                u(e, !0);
              },
              ReadShift: tj,
              CheckField: tJ,
              prep_blob: tZ,
              bconcat: ep,
              use_zlib: function (e) {
                try {
                  var t = new e.InflateRaw();
                  if (
                    (t._processChunk(
                      new Uint8Array([3, 0]),
                      t._finishFlushFlag
                    ),
                    t.bytesRead)
                  )
                    n = e;
                  else throw Error("zlib does not expose bytesRead");
                } catch (e) {
                  console.error("cannot use native zlib: " + (e.message || e));
                }
              },
              _deflateRaw: D,
              _inflateRaw: G,
              consts: E,
            }),
            a
          );
        })();
        try {
          U = r(99851);
        } catch (e) {}
        function eB(e, t, r) {
          if (void 0 !== U && U.writeFileSync)
            return r ? U.writeFileSync(e, t, r) : U.writeFileSync(e, t);
          var n = "utf8" == r ? ti(t) : t;
          if ("undefined" != typeof IE_SaveFile) return IE_SaveFile(n, e);
          if ("undefined" != typeof Blob) {
            var a = new Blob(
              [
                "string" == typeof n
                  ? eh(n)
                  : Array.isArray(n)
                    ? (function (e) {
                        if ("undefined" == typeof Uint8Array)
                          throw Error("Unsupported");
                        return new Uint8Array(e);
                      })(n)
                    : n,
              ],
              { type: "application/octet-stream" }
            );
            if ("undefined" != typeof navigator && navigator.msSaveBlob)
              return navigator.msSaveBlob(a, e);
            if ("undefined" != typeof saveAs) return saveAs(a, e);
            if (
              "undefined" != typeof URL &&
              "undefined" != typeof document &&
              document.createElement &&
              URL.createObjectURL
            ) {
              var s = URL.createObjectURL(a);
              if (
                "object" == typeof chrome &&
                "function" == typeof (chrome.downloads || {}).download
              )
                return (
                  URL.revokeObjectURL &&
                    "undefined" != typeof setTimeout &&
                    setTimeout(function () {
                      URL.revokeObjectURL(s);
                    }, 6e4),
                  chrome.downloads.download({ url: s, filename: e, saveAs: !0 })
                );
              var i = document.createElement("a");
              if (null != i.download)
                return (
                  (i.download = e),
                  (i.href = s),
                  document.body.appendChild(i),
                  i.click(),
                  document.body.removeChild(i),
                  URL.revokeObjectURL &&
                    "undefined" != typeof setTimeout &&
                    setTimeout(function () {
                      URL.revokeObjectURL(s);
                    }, 6e4),
                  s
                );
            }
          }
          if (
            "undefined" != typeof $ &&
            "undefined" != typeof File &&
            "undefined" != typeof Folder
          )
            try {
              var o = File(e);
              return (
                o.open("w"),
                (o.encoding = "binary"),
                Array.isArray(t) && (t = eu(t)),
                o.write(t),
                o.close(),
                t
              );
            } catch (e) {
              if (!e.message || !e.message.match(/onstruct/)) throw e;
            }
          throw Error("cannot save file " + e);
        }
        function eT(e) {
          for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n)
            Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n]);
          return r;
        }
        function ex(e, t) {
          for (var r = [], n = eT(e), a = 0; a !== n.length; ++a)
            null == r[e[n[a]][t]] && (r[e[n[a]][t]] = n[a]);
          return r;
        }
        function e_(e) {
          for (var t = [], r = eT(e), n = 0; n !== r.length; ++n)
            t[e[r[n]]] = r[n];
          return t;
        }
        function ek(e) {
          for (var t = [], r = eT(e), n = 0; n !== r.length; ++n)
            t[e[r[n]]] = parseInt(r[n], 10);
          return t;
        }
        var eA = new Date(1899, 11, 30, 0, 0, 0);
        function eI(e, t) {
          var r = e.getTime();
          return (
            t && (r -= 1263168e5),
            (r -
              (eA.getTime() +
                (e.getTimezoneOffset() - eA.getTimezoneOffset()) * 6e4)) /
              864e5
          );
        }
        var ey = new Date(),
          eR =
            eA.getTime() +
            (ey.getTimezoneOffset() - eA.getTimezoneOffset()) * 6e4,
          eF = ey.getTimezoneOffset();
        function eD(e) {
          var t = new Date();
          return (
            t.setTime(864e5 * e + eR),
            t.getTimezoneOffset() !== eF &&
              t.setTime(t.getTime() + (t.getTimezoneOffset() - eF) * 6e4),
            t
          );
        }
        var eO = new Date("2017-02-19T19:06:09.000Z");
        isNaN(eO.getFullYear()) && (eO = new Date("2/19/17"));
        var eP = 2017 == eO.getFullYear();
        function eN(e, t) {
          var r = new Date(e);
          if (eP)
            return (
              t > 0
                ? r.setTime(r.getTime() + 6e4 * r.getTimezoneOffset())
                : t < 0 && r.setTime(r.getTime() - 6e4 * r.getTimezoneOffset()),
              r
            );
          if (e instanceof Date) return e;
          if (1917 == eO.getFullYear() && !isNaN(r.getFullYear())) {
            var n = r.getFullYear();
            return (
              e.indexOf("" + n) > -1 || r.setFullYear(r.getFullYear() + 100), r
            );
          }
          var a = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"],
            s = new Date(
              +a[0],
              +a[1] - 1,
              +a[2],
              +a[3] || 0,
              +a[4] || 0,
              +a[5] || 0
            );
          return (
            e.indexOf("Z") > -1 &&
              (s = new Date(s.getTime() - 6e4 * s.getTimezoneOffset())),
            s
          );
        }
        function eM(e) {
          for (var t = "", r = 0; r != e.length; ++r)
            t += String.fromCharCode(e[r]);
          return t;
        }
        function eL(e) {
          if ("undefined" != typeof JSON && !Array.isArray(e))
            return JSON.parse(JSON.stringify(e));
          if ("object" != typeof e || null == e) return e;
          if (e instanceof Date) return new Date(e.getTime());
          var t = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = eL(e[r]));
          return t;
        }
        function eU(e, t) {
          for (var r = ""; r.length < t; ) r += e;
          return r;
        }
        function eH(e) {
          var t = Number(e);
          if (isFinite(t)) return t;
          if (!isNaN(t)) return NaN;
          if (!/\d/.test(e)) return t;
          var r = 1,
            n = e
              .replace(/([\d]),([\d])/g, "$1$2")
              .replace(/[$]/g, "")
              .replace(/[%]/g, function () {
                return (r *= 100), "";
              });
          return isNaN((t = Number(n))) &&
            isNaN(
              (t = Number(
                (n = n.replace(/[(](.*)[)]/, function (e, t) {
                  return (r = -r), t;
                }))
              ))
            )
            ? t
            : t / r;
        }
        function eW(e) {
          var t = new Date(e),
            r = new Date(NaN),
            n = t.getYear(),
            a = t.getMonth(),
            s = t.getDate();
          return isNaN(s) || n < 0 || n > 8099
            ? r
            : ((a > 0 || s > 1) && 101 != n) ||
                e
                  .toLowerCase()
                  .match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)
              ? t
              : e.match(/[^-0-9:,\/\\]/)
                ? r
                : t;
        }
        var eV = 5 == "abacaba".split(/(:?b)/i).length;
        function eX(e) {
          return e
            ? e.data
              ? et(e.data)
              : e.asNodeBuffer && es
                ? et(e.asNodeBuffer().toString("binary"))
                : e.asBinary
                  ? et(e.asBinary())
                  : e._data && e._data.getContent
                    ? et(
                        eM(Array.prototype.slice.call(e._data.getContent(), 0))
                      )
                    : e.content && e.type
                      ? et(eM(e.content))
                      : null
            : null;
        }
        function eG(e, t) {
          for (
            var r = e.FullPaths || eT(e.files),
              n = t.toLowerCase(),
              a = n.replace(/\//g, "\\"),
              s = 0;
            s < r.length;
            ++s
          ) {
            var i = r[s].toLowerCase();
            if (n == i || a == i) return e.files[r[s]];
          }
          return null;
        }
        function ez(e, t) {
          var r = eG(e, t);
          if (null == r) throw Error("Cannot find file " + t + " in zip");
          return r;
        }
        function ej(e, t, r) {
          if (!r) {
            var n;
            return (n = ez(e, t)) && ".bin" === n.name.slice(-4)
              ? (function (e) {
                  if (!e) return null;
                  if (e.data) return ee(e.data);
                  if (e.asNodeBuffer && es) return e.asNodeBuffer();
                  if (e._data && e._data.getContent) {
                    var t = e._data.getContent();
                    return "string" == typeof t
                      ? ee(t)
                      : Array.prototype.slice.call(t);
                  }
                  return e.content && e.type ? e.content : null;
                })(n)
              : eX(n);
          }
          if (!t) return null;
          try {
            return ej(e, t);
          } catch (e) {
            return null;
          }
        }
        function e$(e, t, r) {
          if (!r) return eX(ez(e, t));
          if (!t) return null;
          try {
            return e$(e, t);
          } catch (e) {
            return null;
          }
        }
        function eK(e, t, r) {
          e.FullPaths ? eC.utils.cfb_add(e, t, r) : e.file(t, r);
        }
        function eY() {
          return H ? new H() : eC.utils.cfb_new();
        }
        function eQ(e, t) {
          if ("/" == e.charAt(0)) return e.slice(1);
          var r = t.split("/");
          "/" != t.slice(-1) && r.pop();
          for (var n = e.split("/"); 0 !== n.length; ) {
            var a = n.shift();
            ".." === a ? r.pop() : "." !== a && r.push(a);
          }
          return r.join("/");
        }
        "undefined" != typeof JSZipSync && (H = JSZipSync),
          e.exports && void 0 === H && (H = r(55275));
        var eJ = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n',
          eZ =
            /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,
          eq =
            /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/gm;
        eJ.match(eq) || (eq = /<[^>]*>/g);
        var e1 = /<\w*:/,
          e0 = /<(\/?)\w+:/;
        function e2(e, t, r) {
          for (
            var n = {}, a = 0, s = 0;
            a !== e.length &&
            32 !== (s = e.charCodeAt(a)) &&
            10 !== s &&
            13 !== s;
            ++a
          );
          if ((t || (n[0] = e.slice(0, a)), a === e.length)) return n;
          var i = e.match(eZ),
            o = 0,
            c = "",
            l = 0,
            f = "",
            h = "",
            u = 1;
          if (i)
            for (l = 0; l != i.length; ++l) {
              for (
                s = 0, h = i[l];
                s != h.length && 61 !== h.charCodeAt(s);
                ++s
              );
              for (f = h.slice(0, s).trim(); 32 == h.charCodeAt(s + 1); ) ++s;
              for (
                o = 0,
                  u = 34 == (a = h.charCodeAt(s + 1)) || 39 == a ? 1 : 0,
                  c = h.slice(s + 1 + u, h.length - u);
                o != f.length && 58 !== f.charCodeAt(o);
                ++o
              );
              if (o === f.length)
                f.indexOf("_") > 0 && (f = f.slice(0, f.indexOf("_"))),
                  (n[f] = c),
                  r || (n[f.toLowerCase()] = c);
              else {
                var d =
                  (5 === o && "xmlns" === f.slice(0, 5) ? "xmlns" : "") +
                  f.slice(o + 1);
                if (n[d] && "ext" == f.slice(o - 3, o)) continue;
                (n[d] = c), r || (n[d.toLowerCase()] = c);
              }
            }
          return n;
        }
        function e4(e) {
          return e.replace(e0, "<$1");
        }
        var e3 = {
            "&quot;": '"',
            "&apos;": "'",
            "&gt;": ">",
            "&lt;": "<",
            "&amp;": "&",
          },
          e5 = e_(e3),
          e6 =
            ((c = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/gi),
            (l = /_x([\da-fA-F]{4})_/gi),
            function e(t) {
              var r = t + "",
                n = r.indexOf("<![CDATA[");
              if (-1 == n)
                return r
                  .replace(c, function (e, t) {
                    return (
                      e3[e] ||
                      String.fromCharCode(
                        parseInt(t, e.indexOf("x") > -1 ? 16 : 10)
                      ) ||
                      e
                    );
                  })
                  .replace(l, function (e, t) {
                    return String.fromCharCode(parseInt(t, 16));
                  });
              var a = r.indexOf("]]>");
              return e(r.slice(0, n)) + r.slice(n + 9, a) + e(r.slice(a + 3));
            }),
          e8 = /[&<>'"]/g,
          e7 = /[\u0000-\u0008\u000b-\u001f]/g;
        function e9(e) {
          return (e + "")
            .replace(e8, function (e) {
              return e5[e];
            })
            .replace(e7, function (e) {
              return (
                "_x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + "_"
              );
            });
        }
        function te(e) {
          return e9(e).replace(/ /g, "_x0020_");
        }
        var tt = /[\u0000-\u001f]/g;
        function tr(e) {
          return (e + "")
            .replace(e8, function (e) {
              return e5[e];
            })
            .replace(/\n/g, "<br/>")
            .replace(tt, function (e) {
              return (
                "&#x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + ";"
              );
            });
        }
        var tn = (function () {
          var e = /&#(\d+);/g;
          function t(e, t) {
            return String.fromCharCode(parseInt(t, 10));
          }
          return function (r) {
            return r.replace(e, t);
          };
        })();
        function ta(e) {
          switch (e) {
            case 1:
            case !0:
            case "1":
            case "true":
            case "TRUE":
              return !0;
            default:
              return !1;
          }
        }
        var ts = function (e) {
            for (
              var t = "", r = 0, n = 0, a = 0, s = 0, i = 0;
              r < e.length;
            ) {
              if ((n = e.charCodeAt(r++)) < 128) {
                t += String.fromCharCode(n);
                continue;
              }
              if (((a = e.charCodeAt(r++)), n > 191 && n < 224)) {
                t += String.fromCharCode(((31 & n) << 6) | (63 & a));
                continue;
              }
              if (((s = e.charCodeAt(r++)), n < 240)) {
                t += String.fromCharCode(
                  ((15 & n) << 12) | ((63 & a) << 6) | (63 & s)
                );
                continue;
              }
              t +=
                String.fromCharCode(
                  55296 +
                    (((i =
                      (((7 & n) << 18) |
                        ((63 & a) << 12) |
                        ((63 & s) << 6) |
                        (63 & e.charCodeAt(r++))) -
                      65536) >>>
                      10) &
                      1023)
                ) + String.fromCharCode(56320 + (1023 & i));
            }
            return t;
          },
          ti = function (e) {
            for (var t = [], r = 0, n = 0, a = 0; r < e.length; )
              switch (((n = e.charCodeAt(r++)), !0)) {
                case n < 128:
                  t.push(String.fromCharCode(n));
                  break;
                case n < 2048:
                  t.push(String.fromCharCode(192 + (n >> 6))),
                    t.push(String.fromCharCode(128 + (63 & n)));
                  break;
                case n >= 55296 && n < 57344:
                  (n -= 55296),
                    t.push(
                      String.fromCharCode(
                        240 +
                          (((a = e.charCodeAt(r++) - 56320 + (n << 10)) >> 18) &
                            7)
                      )
                    ),
                    t.push(String.fromCharCode(144 + ((a >> 12) & 63))),
                    t.push(String.fromCharCode(128 + ((a >> 6) & 63))),
                    t.push(String.fromCharCode(128 + (63 & a)));
                  break;
                default:
                  t.push(String.fromCharCode(224 + (n >> 12))),
                    t.push(String.fromCharCode(128 + ((n >> 6) & 63))),
                    t.push(String.fromCharCode(128 + (63 & n)));
              }
            return t.join("");
          };
        if (es) {
          var to = function (e) {
              var t,
                r,
                a,
                s = n.alloc(2 * e.length),
                i = 1,
                o = 0,
                c = 0;
              for (r = 0; r < e.length; r += i)
                (i = 1),
                  (a = e.charCodeAt(r)) < 128
                    ? (t = a)
                    : a < 224
                      ? ((t = (31 & a) * 64 + (63 & e.charCodeAt(r + 1))),
                        (i = 2))
                      : a < 240
                        ? ((t =
                            (15 & a) * 4096 +
                            (63 & e.charCodeAt(r + 1)) * 64 +
                            (63 & e.charCodeAt(r + 2))),
                          (i = 3))
                        : ((i = 4),
                          (c =
                            55296 +
                            (((t =
                              (7 & a) * 262144 +
                              (63 & e.charCodeAt(r + 1)) * 4096 +
                              (63 & e.charCodeAt(r + 2)) * 64 +
                              (63 & e.charCodeAt(r + 3)) -
                              65536) >>>
                              10) &
                              1023)),
                          (t = 56320 + (1023 & t))),
                  0 !== c && ((s[o++] = 255 & c), (s[o++] = c >>> 8), (c = 0)),
                  (s[o++] = t % 256),
                  (s[o++] = t >>> 8);
              return s.slice(0, o).toString("ucs2");
            },
            tc = "foo bar baz\xe2\x98\x83\xf0\x9f\x8d\xa3";
          ts(tc) == to(tc) && (ts = to);
          var tl = function (e) {
            return ei(e, "binary").toString("utf8");
          };
          ts(tc) == tl(tc) && (ts = tl),
            (ti = function (e) {
              return ei(e, "utf8").toString("binary");
            });
        }
        var tf =
            ((f = {}),
            function (e, t) {
              var r = e + "|" + (t || "");
              return f[r]
                ? f[r]
                : (f[r] = RegExp(
                    "<(?:\\w+:)?" +
                      e +
                      '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' +
                      e +
                      ">",
                    t || ""
                  ));
            }),
          th =
            ((h = [
              ["nbsp", " "],
              ["middot", "\xb7"],
              ["quot", '"'],
              ["apos", "'"],
              ["gt", ">"],
              ["lt", "<"],
              ["amp", "&"],
            ].map(function (e) {
              return [RegExp("&" + e[0] + ";", "ig"), e[1]];
            })),
            function (e) {
              for (
                var t = e
                    .replace(/^[\t\n\r ]+/, "")
                    .replace(/[\t\n\r ]+$/, "")
                    .replace(/>\s+/g, ">")
                    .replace(/\s+</g, "<")
                    .replace(/[\t\n\r ]+/g, " ")
                    .replace(/<\s*[bB][rR]\s*\/?>/g, "\n")
                    .replace(/<[^>]*>/g, ""),
                  r = 0;
                r < h.length;
                ++r
              )
                t = t.replace(h[r][0], h[r][1]);
              return t;
            }),
          tu =
            ((u = {}),
            function (e) {
              return void 0 !== u[e]
                ? u[e]
                : (u[e] = RegExp(
                    "<(?:vt:)?" + e + ">([\\s\\S]*?)</(?:vt:)?" + e + ">",
                    "g"
                  ));
            }),
          td = /<\/?(?:vt:)?variant>/g,
          tp = /<(?:vt:)([^>]*)>([\s\S]*)</;
        function tm(e, t) {
          var r = e2(e),
            n = e.match(tu(r.baseType)) || [],
            a = [];
          if (n.length != r.size) {
            if (t.WTF)
              throw Error(
                "unexpected vector length " + n.length + " != " + r.size
              );
            return a;
          }
          return (
            n.forEach(function (e) {
              var t = e.replace(td, "").match(tp);
              t && a.push({ v: ts(t[2]), t: t[1] });
            }),
            a
          );
        }
        var tg = /(^\s|\s$|\n)/;
        function tv(e, t) {
          return (
            "<" +
            e +
            (t.match(tg) ? ' xml:space="preserve"' : "") +
            ">" +
            t +
            "</" +
            e +
            ">"
          );
        }
        function tb(e) {
          return eT(e)
            .map(function (t) {
              return " " + t + '="' + e[t] + '"';
            })
            .join("");
        }
        function tE(e, t, r) {
          return (
            "<" +
            e +
            (null != r ? tb(r) : "") +
            (null != t
              ? (t.match(tg) ? ' xml:space="preserve"' : "") +
                ">" +
                t +
                "</" +
                e
              : "/") +
            ">"
          );
        }
        function tS(e, t) {
          try {
            return e.toISOString().replace(/\.\d*/, "");
          } catch (e) {
            if (t) throw e;
          }
          return "";
        }
        var tw = {
          dc: "http://purl.org/dc/elements/1.1/",
          dcterms: "http://purl.org/dc/terms/",
          dcmitype: "http://purl.org/dc/dcmitype/",
          mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
          r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
          sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
          vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
          xsi: "http://www.w3.org/2001/XMLSchema-instance",
          xsd: "http://www.w3.org/2001/XMLSchema",
        };
        tw.main = [
          "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
          "http://purl.oclc.org/ooxml/spreadsheetml/main",
          "http://schemas.microsoft.com/office/excel/2006/main",
          "http://schemas.microsoft.com/office/excel/2006/2",
        ];
        var tC = {
            o: "urn:schemas-microsoft-com:office:office",
            x: "urn:schemas-microsoft-com:office:excel",
            ss: "urn:schemas-microsoft-com:office:spreadsheet",
            dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
            mv: "http://macVmlSchemaUri",
            v: "urn:schemas-microsoft-com:vml",
            html: "http://www.w3.org/TR/REC-html40",
          },
          tB = function (e) {
            for (var t = [], r = 0; r < e[0].length; ++r)
              if (e[0][r])
                for (var n = 0, a = e[0][r].length; n < a; n += 10240)
                  t.push.apply(t, e[0][r].slice(n, n + 10240));
            return t;
          },
          tT = tB,
          tx = function (e, t, r) {
            for (var n = [], a = t; a < r; a += 2)
              n.push(String.fromCharCode(tW(e, a)));
            return n.join("").replace(em, "");
          },
          t_ = tx,
          tk = function (e, t, r) {
            for (var n = [], a = t; a < t + r; ++a)
              n.push(("0" + e[a].toString(16)).slice(-2));
            return n.join("");
          },
          tA = tk,
          tI = function (e, t, r) {
            for (var n = [], a = t; a < r; a++)
              n.push(String.fromCharCode(tH(e, a)));
            return n.join("");
          },
          ty = tI,
          tR = function (e, t) {
            var r = tX(e, t);
            return r > 0 ? tI(e, t + 4, t + 4 + r - 1) : "";
          },
          tF = tR,
          tD = function (e, t) {
            var r = tX(e, t);
            return r > 0 ? tI(e, t + 4, t + 4 + r - 1) : "";
          },
          tO = tD,
          tP = function (e, t) {
            var r = 2 * tX(e, t);
            return r > 0 ? tI(e, t + 4, t + 4 + r - 1) : "";
          },
          tN = tP;
        W = V = function (e, t) {
          var r = tX(e, t);
          return r > 0 ? tx(e, t + 4, t + 4 + r) : "";
        };
        var tM = function (e, t) {
            var r = tX(e, t);
            return r > 0 ? tI(e, t + 4, t + 4 + r) : "";
          },
          tL = tM;
        X = G = function (e, t) {
          return (function (e, t) {
            for (
              var r = 1 - 2 * (e[t + 7] >>> 7),
                n = ((127 & e[t + 7]) << 4) + ((e[t + 6] >>> 4) & 15),
                a = 15 & e[t + 6],
                s = 5;
              s >= 0;
              --s
            )
              a = 256 * a + e[t + s];
            return 2047 == n
              ? 0 == a
                ? r * (1 / 0)
                : NaN
              : (0 == n ? (n = -1022) : ((n -= 1023), (a += 4503599627370496)),
                r * Math.pow(2, n - 52) * a);
          })(e, t);
        };
        var tU = function (e) {
          return Array.isArray(e);
        };
        es &&
          ((tx = function (e, t, r) {
            return n.isBuffer(e)
              ? e.toString("utf16le", t, r).replace(em, "")
              : t_(e, t, r);
          }),
          (tk = function (e, t, r) {
            return n.isBuffer(e) ? e.toString("hex", t, t + r) : tA(e, t, r);
          }),
          (tR = function (e, t) {
            if (!n.isBuffer(e)) return tF(e, t);
            var r = e.readUInt32LE(t);
            return r > 0 ? e.toString("utf8", t + 4, t + 4 + r - 1) : "";
          }),
          (tD = function (e, t) {
            if (!n.isBuffer(e)) return tO(e, t);
            var r = e.readUInt32LE(t);
            return r > 0 ? e.toString("utf8", t + 4, t + 4 + r - 1) : "";
          }),
          (tP = function (e, t) {
            if (!n.isBuffer(e)) return tN(e, t);
            var r = 2 * e.readUInt32LE(t);
            return e.toString("utf16le", t + 4, t + 4 + r - 1);
          }),
          (W = function (e, t) {
            if (!n.isBuffer(e)) return V(e, t);
            var r = e.readUInt32LE(t);
            return e.toString("utf16le", t + 4, t + 4 + r);
          }),
          (tM = function (e, t) {
            if (!n.isBuffer(e)) return tL(e, t);
            var r = e.readUInt32LE(t);
            return e.toString("utf8", t + 4, t + 4 + r);
          }),
          (tI = function (e, t, r) {
            return n.isBuffer(e) ? e.toString("utf8", t, r) : ty(e, t, r);
          }),
          (tB = function (e) {
            return e[0].length > 0 && n.isBuffer(e[0][0])
              ? n.concat(e[0])
              : tT(e);
          }),
          (ep = function (e) {
            return n.isBuffer(e[0]) ? n.concat(e) : [].concat.apply([], e);
          }),
          (X = function (e, t) {
            return n.isBuffer(e) ? e.readDoubleLE(t) : G(e, t);
          }),
          (tU = function (e) {
            return n.isBuffer(e) || Array.isArray(e);
          })),
          "undefined" != typeof cptable &&
            ((tx = function (e, t, r) {
              return cptable.utils.decode(1200, e.slice(t, r)).replace(em, "");
            }),
            (tI = function (e, t, r) {
              return cptable.utils.decode(65001, e.slice(t, r));
            }),
            (tR = function (e, t) {
              var r = tX(e, t);
              return r > 0
                ? cptable.utils.decode(j, e.slice(t + 4, t + 4 + r - 1))
                : "";
            }),
            (tD = function (e, t) {
              var r = tX(e, t);
              return r > 0
                ? cptable.utils.decode(z, e.slice(t + 4, t + 4 + r - 1))
                : "";
            }),
            (tP = function (e, t) {
              var r = 2 * tX(e, t);
              return r > 0
                ? cptable.utils.decode(1200, e.slice(t + 4, t + 4 + r - 1))
                : "";
            }),
            (W = function (e, t) {
              var r = tX(e, t);
              return r > 0
                ? cptable.utils.decode(1200, e.slice(t + 4, t + 4 + r))
                : "";
            }),
            (tM = function (e, t) {
              var r = tX(e, t);
              return r > 0
                ? cptable.utils.decode(65001, e.slice(t + 4, t + 4 + r))
                : "";
            }));
        var tH = function (e, t) {
            return e[t];
          },
          tW = function (e, t) {
            return 256 * e[t + 1] + e[t];
          },
          tV = function (e, t) {
            var r = 256 * e[t + 1] + e[t];
            return r < 32768 ? r : -((65535 - r + 1) * 1);
          },
          tX = function (e, t) {
            return (
              16777216 * e[t + 3] + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t]
            );
          },
          tG = function (e, t) {
            return (e[t + 3] << 24) | (e[t + 2] << 16) | (e[t + 1] << 8) | e[t];
          },
          tz = function (e, t) {
            return (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3];
          };
        function tj(e, t) {
          var r,
            a,
            s,
            i,
            o,
            c,
            l = "",
            f = [];
          switch (t) {
            case "dbcs":
              if (((c = this.l), es && n.isBuffer(this)))
                l = this.slice(this.l, this.l + 2 * e).toString("utf16le");
              else
                for (o = 0; o < e; ++o)
                  (l += String.fromCharCode(tW(this, c))), (c += 2);
              e *= 2;
              break;
            case "utf8":
              l = tI(this, this.l, this.l + e);
              break;
            case "utf16le":
              (e *= 2), (l = tx(this, this.l, this.l + e));
              break;
            case "wstr":
              if ("undefined" == typeof cptable)
                return tj.call(this, e, "dbcs");
              (l = cptable.utils.decode(z, this.slice(this.l, this.l + 2 * e))),
                (e *= 2);
              break;
            case "lpstr-ansi":
              (l = tR(this, this.l)), (e = 4 + tX(this, this.l));
              break;
            case "lpstr-cp":
              (l = tD(this, this.l)), (e = 4 + tX(this, this.l));
              break;
            case "lpwstr":
              (l = tP(this, this.l)), (e = 4 + 2 * tX(this, this.l));
              break;
            case "lpp4":
              (e = 4 + tX(this, this.l)),
                (l = W(this, this.l)),
                2 & e && (e += 2);
              break;
            case "8lpp4":
              (e = 4 + tX(this, this.l)),
                (l = tM(this, this.l)),
                3 & e && (e += 4 - (3 & e));
              break;
            case "cstr":
              for (e = 0, l = ""; 0 !== (s = tH(this, this.l + e++)); )
                f.push(er(s));
              l = f.join("");
              break;
            case "_wstr":
              for (e = 0, l = ""; 0 !== (s = tW(this, this.l + e)); )
                f.push(er(s)), (e += 2);
              (e += 2), (l = f.join(""));
              break;
            case "dbcs-cont":
              for (o = 0, l = "", c = this.l; o < e; ++o) {
                if (this.lens && -1 !== this.lens.indexOf(c))
                  return (
                    (s = tH(this, c)),
                    (this.l = c + 1),
                    (i = tj.call(this, e - o, s ? "dbcs-cont" : "sbcs-cont")),
                    f.join("") + i
                  );
                f.push(er(tW(this, c))), (c += 2);
              }
              (l = f.join("")), (e *= 2);
              break;
            case "cpstr":
              if ("undefined" != typeof cptable) {
                l = cptable.utils.decode(z, this.slice(this.l, this.l + e));
                break;
              }
            case "sbcs-cont":
              for (o = 0, l = "", c = this.l; o != e; ++o) {
                if (this.lens && -1 !== this.lens.indexOf(c))
                  return (
                    (s = tH(this, c)),
                    (this.l = c + 1),
                    (i = tj.call(this, e - o, s ? "dbcs-cont" : "sbcs-cont")),
                    f.join("") + i
                  );
                f.push(er(tH(this, c))), (c += 1);
              }
              l = f.join("");
              break;
            default:
              switch (e) {
                case 1:
                  return (r = tH(this, this.l)), this.l++, r;
                case 2:
                  return (
                    (r = ("i" === t ? tV : tW)(this, this.l)), (this.l += 2), r
                  );
                case 4:
                case -4:
                  if ("i" === t || (128 & this[this.l + 3]) == 0)
                    return (
                      (r = (e > 0 ? tG : tz)(this, this.l)), (this.l += 4), r
                    );
                  return (a = tX(this, this.l)), (this.l += 4), a;
                case 8:
                case -8:
                  if ("f" === t)
                    return (
                      (a =
                        8 == e
                          ? X(this, this.l)
                          : X(
                              [
                                this[this.l + 7],
                                this[this.l + 6],
                                this[this.l + 5],
                                this[this.l + 4],
                                this[this.l + 3],
                                this[this.l + 2],
                                this[this.l + 1],
                                this[this.l + 0],
                              ],
                              0
                            )),
                      (this.l += 8),
                      a
                    );
                  e = 8;
                case 16:
                  l = tk(this, this.l, e);
              }
          }
          return (this.l += e), l;
        }
        var t$ = function (e, t, r) {
            (e[r] = 255 & t),
              (e[r + 1] = (t >>> 8) & 255),
              (e[r + 2] = (t >>> 16) & 255),
              (e[r + 3] = (t >>> 24) & 255);
          },
          tK = function (e, t, r) {
            (e[r] = 255 & t),
              (e[r + 1] = (t >> 8) & 255),
              (e[r + 2] = (t >> 16) & 255),
              (e[r + 3] = (t >> 24) & 255);
          },
          tY = function (e, t, r) {
            (e[r] = 255 & t), (e[r + 1] = (t >>> 8) & 255);
          };
        function tQ(e, t, r) {
          var n = 0,
            a = 0;
          if ("dbcs" === r) {
            for (a = 0; a != t.length; ++a)
              tY(this, t.charCodeAt(a), this.l + 2 * a);
            n = 2 * t.length;
          } else if ("sbcs" === r) {
            if ("undefined" != typeof cptable && 874 == j)
              for (a = 0; a != t.length; ++a) {
                var s = cptable.utils.encode(j, t.charAt(a));
                this[this.l + a] = s[0];
              }
            else
              for (
                a = 0, t = t.replace(/[^\x00-\x7F]/g, "_");
                a != t.length;
                ++a
              )
                this[this.l + a] = 255 & t.charCodeAt(a);
            n = t.length;
          } else if ("hex" === r) {
            for (; a < e; ++a)
              this[this.l++] = parseInt(t.slice(2 * a, 2 * a + 2), 16) || 0;
            return this;
          } else if ("utf16le" === r) {
            var i = Math.min(this.l + e, this.length);
            for (a = 0; a < Math.min(t.length, e); ++a) {
              var o = t.charCodeAt(a);
              (this[this.l++] = 255 & o), (this[this.l++] = o >> 8);
            }
            for (; this.l < i; ) this[this.l++] = 0;
            return this;
          } else
            switch (e) {
              case 1:
                (n = 1), (this[this.l] = 255 & t);
                break;
              case 2:
                (n = 2),
                  (this[this.l] = 255 & t),
                  (t >>>= 8),
                  (this[this.l + 1] = 255 & t);
                break;
              case 3:
                (n = 3),
                  (this[this.l] = 255 & t),
                  (t >>>= 8),
                  (this[this.l + 1] = 255 & t),
                  (t >>>= 8),
                  (this[this.l + 2] = 255 & t);
                break;
              case 4:
                (n = 4), t$(this, t, this.l);
                break;
              case 8:
                if (((n = 8), "f" === r)) {
                  !(function (e, t, r) {
                    var n = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7,
                      a = 0,
                      s = 0,
                      i = n ? -t : t;
                    isFinite(i)
                      ? 0 == i
                        ? (a = s = 0)
                        : ((a = Math.floor(Math.log(i) / Math.LN2)),
                          (s = i * Math.pow(2, 52 - a)),
                          a <= -1023 && (!isFinite(s) || s < 4503599627370496)
                            ? (a = -1022)
                            : ((s -= 4503599627370496), (a += 1023)))
                      : ((a = 2047), (s = isNaN(t) ? 26985 : 0));
                    for (var o = 0; o <= 5; ++o, s /= 256) e[r + o] = 255 & s;
                    (e[r + 6] = ((15 & a) << 4) | (15 & s)),
                      (e[r + 7] = (a >> 4) | n);
                  })(this, t, this.l);
                  break;
                }
              case 16:
                break;
              case -4:
                (n = 4), tK(this, t, this.l);
            }
          return (this.l += n), this;
        }
        function tJ(e, t) {
          var r = tk(this, this.l, e.length >> 1);
          if (r !== e) throw Error(t + "Expected " + e + " saw " + r);
          this.l += e.length >> 1;
        }
        function tZ(e, t) {
          (e.l = t), (e.read_shift = tj), (e.chk = tJ), (e.write_shift = tQ);
        }
        function tq(e, t) {
          e.l += t;
        }
        function t1(e) {
          var t = ec(e);
          return tZ(t, 0), t;
        }
        function t0(e, t, r) {
          if (e) {
            tZ(e, e.l || 0);
            for (var n, a, s, i = e.length, o = 0, c = 0; e.l < i; ) {
              128 & (o = e.read_shift(1)) &&
                (o = (127 & o) + ((127 & e.read_shift(1)) << 7));
              var l = iv[o] || iv[65535];
              for (
                a = 1, s = 127 & (n = e.read_shift(1));
                a < 4 && 128 & n;
                ++a
              )
                s += (127 & (n = e.read_shift(1))) << (7 * a);
              c = e.l + s;
              var f = (l.f || tq)(e, s, r);
              if (((e.l = c), t(f, l.n, o))) return;
            }
          }
        }
        function t2() {
          var e = [],
            t = es ? 256 : 2048,
            r = function (e) {
              var t = t1(e);
              return tZ(t, 0), t;
            },
            n = r(t),
            a = function () {
              n &&
                (n.length > n.l && ((n = n.slice(0, n.l)).l = n.length),
                n.length > 0 && e.push(n),
                (n = null));
            },
            s = function (e) {
              return n && e < n.length - n.l
                ? n
                : (a(), (n = r(Math.max(e + 1, t))));
            };
          return {
            next: s,
            push: function (e) {
              a(), null == (n = e).l && (n.l = n.length), s(t);
            },
            end: function () {
              return a(), tB([e]);
            },
            _bufs: e,
          };
        }
        function t4(e, t, r, n) {
          var a,
            s = +ib[t];
          if (!isNaN(s)) {
            n || (n = iv[s].p || (r || []).length || 0),
              (a = 1 + (s >= 128 ? 1 : 0) + 1),
              n >= 128 && ++a,
              n >= 16384 && ++a,
              n >= 2097152 && ++a;
            var i = e.next(a);
            s <= 127
              ? i.write_shift(1, s)
              : (i.write_shift(1, (127 & s) + 128), i.write_shift(1, s >> 7));
            for (var o = 0; 4 != o; ++o)
              if (n >= 128) i.write_shift(1, (127 & n) + 128), (n >>= 7);
              else {
                i.write_shift(1, n);
                break;
              }
            n > 0 && tU(r) && e.push(r);
          }
        }
        function t3(e, t, r) {
          var n = eL(e);
          if (
            (t.s
              ? (n.cRel && (n.c += t.s.c), n.rRel && (n.r += t.s.r))
              : (n.cRel && (n.c += t.c), n.rRel && (n.r += t.r)),
            !r || r.biff < 12)
          ) {
            for (; n.c >= 256; ) n.c -= 256;
            for (; n.r >= 65536; ) n.r -= 65536;
          }
          return n;
        }
        function t5(e, t, r) {
          var n = eL(e);
          return (n.s = t3(n.s, t.s, r)), (n.e = t3(n.e, t.s, r)), n;
        }
        function t6(e, t) {
          if (e.cRel && e.c < 0)
            for (e = eL(e); e.c < 0; ) e.c += t > 8 ? 16384 : 256;
          if (e.rRel && e.r < 0)
            for (e = eL(e); e.r < 0; )
              e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
          var r = rn(e);
          return (
            e.cRel || null == e.cRel || (r = r.replace(/^([A-Z])/, "$$$1")),
            e.rRel ||
              null == e.rRel ||
              (r = r.replace(/([A-Z]|^)(\d+)$/, "$1$$$2")),
            r
          );
        }
        function t8(e, t) {
          return 0 != e.s.r ||
            e.s.rRel ||
            e.e.r != (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) ||
            e.e.rRel
            ? 0 != e.s.c ||
              e.s.cRel ||
              e.e.c != (t.biff >= 12 ? 16383 : 255) ||
              e.e.cRel
              ? t6(e.s, t.biff) + ":" + t6(e.e, t.biff)
              : (e.s.rRel ? "" : "$") +
                t9(e.s.r) +
                ":" +
                (e.e.rRel ? "" : "$") +
                t9(e.e.r)
            : (e.s.cRel ? "" : "$") +
                rt(e.s.c) +
                ":" +
                (e.e.cRel ? "" : "$") +
                rt(e.e.c);
        }
        function t7(e) {
          return parseInt(e.replace(/\$(\d+)$/, "$1"), 10) - 1;
        }
        function t9(e) {
          return "" + (e + 1);
        }
        function re(e) {
          for (
            var t = e.replace(/^\$([A-Z])/, "$1"), r = 0, n = 0;
            n !== t.length;
            ++n
          )
            r = 26 * r + t.charCodeAt(n) - 64;
          return r - 1;
        }
        function rt(e) {
          if (e < 0) throw Error("invalid column " + e);
          var t = "";
          for (++e; e; e = Math.floor((e - 1) / 26))
            t = String.fromCharCode(((e - 1) % 26) + 65) + t;
          return t;
        }
        function rr(e) {
          for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
            var a = e.charCodeAt(n);
            a >= 48 && a <= 57
              ? (t = 10 * t + (a - 48))
              : a >= 65 && a <= 90 && (r = 26 * r + (a - 64));
          }
          return { c: r - 1, r: t - 1 };
        }
        function rn(e) {
          for (var t = e.c + 1, r = ""; t; t = ((t - 1) / 26) | 0)
            r = String.fromCharCode(((t - 1) % 26) + 65) + r;
          return r + (e.r + 1);
        }
        function ra(e) {
          var t = e.indexOf(":");
          return -1 == t
            ? { s: rr(e), e: rr(e) }
            : { s: rr(e.slice(0, t)), e: rr(e.slice(t + 1)) };
        }
        function rs(e, t) {
          return void 0 === t || "number" == typeof t
            ? rs(e.s, e.e)
            : ("string" != typeof e && (e = rn(e)),
              "string" != typeof t && (t = rn(t)),
              e == t ? e : e + ":" + t);
        }
        function ri(e) {
          var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
            r = 0,
            n = 0,
            a = 0,
            s = e.length;
          for (
            r = 0;
            n < s && !((a = e.charCodeAt(n) - 64) < 1) && !(a > 26);
            ++n
          )
            r = 26 * r + a;
          for (
            t.s.c = --r, r = 0;
            n < s && !((a = e.charCodeAt(n) - 48) < 0) && !(a > 9);
            ++n
          )
            r = 10 * r + a;
          if (((t.s.r = --r), n === s || 58 === e.charCodeAt(++n)))
            return (t.e.c = t.s.c), (t.e.r = t.s.r), t;
          for (
            r = 0;
            n != s && !((a = e.charCodeAt(n) - 64) < 1) && !(a > 26);
            ++n
          )
            r = 26 * r + a;
          for (
            t.e.c = --r, r = 0;
            n != s && !((a = e.charCodeAt(n) - 48) < 0) && !(a > 9);
            ++n
          )
            r = 10 * r + a;
          return (t.e.r = --r), t;
        }
        function ro(e, t) {
          var r = "d" == e.t && t instanceof Date;
          if (null != e.z)
            try {
              return (e.w = ev.format(e.z, r ? eI(t) : t));
            } catch (e) {}
          try {
            return (e.w = ev.format(
              (e.XF || {}).numFmtId || (r ? 14 : 0),
              r ? eI(t) : t
            ));
          } catch (e) {
            return "" + t;
          }
        }
        function rc(e, t, r) {
          return null == e || null == e.t || "z" == e.t
            ? ""
            : void 0 !== e.w
              ? e.w
              : ("d" == e.t && !e.z && r && r.dateNF && (e.z = r.dateNF),
                  void 0 == t)
                ? ro(e, e.v)
                : ro(e, t);
        }
        function rl(e, t) {
          var r = t && t.sheet ? t.sheet : "Sheet1",
            n = {};
          return (n[r] = e), { SheetNames: [r], Sheets: n };
        }
        function rf(e, t, r) {
          var n = r || {},
            a = e ? Array.isArray(e) : n.dense,
            s = e || (a ? [] : {}),
            i = 0,
            o = 0;
          if (s && null != n.origin) {
            if ("number" == typeof n.origin) i = n.origin;
            else {
              var c = "string" == typeof n.origin ? rr(n.origin) : n.origin;
              (i = c.r), (o = c.c);
            }
            s["!ref"] || (s["!ref"] = "A1:A1");
          }
          var l = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
          if (s["!ref"]) {
            var f = ri(s["!ref"]);
            (l.s.c = f.s.c),
              (l.s.r = f.s.r),
              (l.e.c = Math.max(l.e.c, f.e.c)),
              (l.e.r = Math.max(l.e.r, f.e.r)),
              -1 == i && (l.e.r = i = f.e.r + 1);
          }
          for (var h = 0; h != t.length; ++h)
            if (t[h]) {
              if (!Array.isArray(t[h]))
                throw Error("aoa_to_sheet expects an array of arrays");
              for (var u = 0; u != t[h].length; ++u)
                if (void 0 !== t[h][u]) {
                  var d = { v: t[h][u] },
                    p = i + h,
                    m = o + u;
                  if (
                    (l.s.r > p && (l.s.r = p),
                    l.s.c > m && (l.s.c = m),
                    l.e.r < p && (l.e.r = p),
                    l.e.c < m && (l.e.c = m),
                    !t[h][u] ||
                      "object" != typeof t[h][u] ||
                      Array.isArray(t[h][u]) ||
                      t[h][u] instanceof Date)
                  ) {
                    if (
                      (Array.isArray(d.v) &&
                        ((d.f = t[h][u][1]), (d.v = d.v[0])),
                      null === d.v)
                    ) {
                      if (d.f) d.t = "n";
                      else {
                        if (!n.sheetStubs) continue;
                        d.t = "z";
                      }
                    } else
                      "number" == typeof d.v
                        ? (d.t = "n")
                        : "boolean" == typeof d.v
                          ? (d.t = "b")
                          : d.v instanceof Date
                            ? ((d.z = n.dateNF || ev._table[14]),
                              n.cellDates
                                ? ((d.t = "d"), (d.w = ev.format(d.z, eI(d.v))))
                                : ((d.t = "n"),
                                  (d.v = eI(d.v)),
                                  (d.w = ev.format(d.z, d.v))))
                            : (d.t = "s");
                  } else d = t[h][u];
                  if (a)
                    s[p] || (s[p] = []),
                      s[p][m] && s[p][m].z && (d.z = s[p][m].z),
                      (s[p][m] = d);
                  else {
                    var g = rn({ c: m, r: p });
                    s[g] && s[g].z && (d.z = s[g].z), (s[g] = d);
                  }
                }
            }
          return l.s.c < 1e7 && (s["!ref"] = rs(l)), s;
        }
        function rh(e, t) {
          return rf(null, e, t);
        }
        function ru(e, t) {
          return t || (t = t1(4)), t.write_shift(4, e), t;
        }
        function rd(e) {
          var t = e.read_shift(4);
          return 0 === t ? "" : e.read_shift(t, "dbcs");
        }
        function rp(e, t) {
          var r = !1;
          return (
            null == t && ((r = !0), (t = t1(4 + 2 * e.length))),
            t.write_shift(4, e.length),
            e.length > 0 && t.write_shift(0, e, "dbcs"),
            r ? t.slice(0, t.l) : t
          );
        }
        function rm(e, t) {
          var r = e.l,
            n = e.read_shift(1),
            a = rd(e),
            s = [],
            i = { t: a, h: a };
          if ((1 & n) != 0) {
            for (var o = e.read_shift(4), c = 0; c != o; ++c)
              s.push({ ich: e.read_shift(2), ifnt: e.read_shift(2) });
            i.r = s;
          } else i.r = [{ ich: 0, ifnt: 0 }];
          return (e.l = r + t), i;
        }
        function rg(e) {
          var t = e.read_shift(4),
            r = e.read_shift(2);
          return (r += e.read_shift(1) << 16), e.l++, { c: t, iStyleRef: r };
        }
        function rv(e, t) {
          return (
            null == t && (t = t1(8)),
            t.write_shift(-4, e.c),
            t.write_shift(3, e.iStyleRef || e.s),
            t.write_shift(1, 0),
            t
          );
        }
        function rb(e) {
          var t = e.read_shift(2);
          return (t += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: t };
        }
        function rE(e, t) {
          return (
            null == t && (t = t1(4)),
            t.write_shift(3, e.iStyleRef || e.s),
            t.write_shift(1, 0),
            t
          );
        }
        function rS(e) {
          var t = e.read_shift(4);
          return 0 === t || 4294967295 === t ? "" : e.read_shift(t, "dbcs");
        }
        function rw(e, t) {
          var r = !1;
          return (
            null == t && ((r = !0), (t = t1(127))),
            t.write_shift(4, e.length > 0 ? e.length : 4294967295),
            e.length > 0 && t.write_shift(0, e, "dbcs"),
            r ? t.slice(0, t.l) : t
          );
        }
        function rC(e) {
          var t = e.slice(e.l, e.l + 4),
            r = 1 & t[0],
            n = 2 & t[0];
          (e.l += 4), (t[0] &= 252);
          var a =
            0 === n
              ? X([0, 0, 0, 0, t[0], t[1], t[2], t[3]], 0)
              : tG(t, 0) >> 2;
          return r ? a / 100 : a;
        }
        function rB(e, t) {
          null == t && (t = t1(4));
          var r = 0,
            n = 0,
            a = 100 * e;
          if (
            (e == (0 | e) && e >= -536870912 && e < 536870912
              ? (n = 1)
              : a == (0 | a) &&
                a >= -536870912 &&
                a < 536870912 &&
                ((n = 1), (r = 1)),
            n)
          )
            t.write_shift(-4, ((r ? a : e) << 2) + (r + 2));
          else throw Error("unsupported RkNumber " + e);
        }
        function rT(e) {
          var t = { s: {}, e: {} };
          return (
            (t.s.r = e.read_shift(4)),
            (t.e.r = e.read_shift(4)),
            (t.s.c = e.read_shift(4)),
            (t.e.c = e.read_shift(4)),
            t
          );
        }
        !(function (e, t) {
          var n;
          if (void 0 !== t) n = t;
          else
            try {
              n = r(32713);
            } catch (e) {
              n = null;
            }
          (e.rc4 = function (e, t) {
            var r = Array(256),
              n = 0,
              a = 0,
              s = 0,
              i = 0;
            for (a = 0; 256 != a; ++a) r[a] = a;
            for (a = 0; 256 != a; ++a)
              (s = (s + r[a] + e[a % e.length].charCodeAt(0)) & 255),
                (i = r[a]),
                (r[a] = r[s]),
                (r[s] = i);
            a = s = 0;
            var o = ec(t.length);
            for (n = 0; n != t.length; ++n)
              (s = (s + r[(a = (a + 1) & 255)]) % 256),
                (i = r[a]),
                (r[a] = r[s]),
                (r[s] = i),
                (o[n] = t[n] ^ r[(r[a] + r[s]) & 255]);
            return o;
          }),
            (e.md5 = function (e) {
              if (!n) throw Error("Unsupported crypto");
              return n.createHash("md5").update(e).digest("hex");
            });
        })({}, "undefined" != typeof crypto ? crypto : void 0);
        var rx = function (e, t) {
          return (
            t || (t = t1(16)),
            t.write_shift(4, e.s.r),
            t.write_shift(4, e.e.r),
            t.write_shift(4, e.s.c),
            t.write_shift(4, e.e.c),
            t
          );
        };
        function r_(e) {
          if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
          return e.read_shift(8, "f");
        }
        function rk(e, t) {
          return (t || t1(8)).write_shift(8, e, "f");
        }
        function rA(e, t) {
          if ((t || (t = t1(8)), !e || e.auto))
            return t.write_shift(4, 0), t.write_shift(4, 0), t;
          null != e.index
            ? (t.write_shift(1, 2), t.write_shift(1, e.index))
            : null != e.theme
              ? (t.write_shift(1, 6), t.write_shift(1, e.theme))
              : (t.write_shift(1, 5), t.write_shift(1, 0));
          var r = e.tint || 0;
          if (
            (r > 0 ? (r *= 32767) : r < 0 && (r *= 32768),
            t.write_shift(2, r),
            e.rgb && null == e.theme)
          ) {
            var n = e.rgb || "FFFFFF";
            "number" == typeof n && (n = ("000000" + n.toString(16)).slice(-6)),
              t.write_shift(1, parseInt(n.slice(0, 2), 16)),
              t.write_shift(1, parseInt(n.slice(2, 4), 16)),
              t.write_shift(1, parseInt(n.slice(4, 6), 16)),
              t.write_shift(1, 255);
          } else t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
          return t;
        }
        function rI(e, t) {
          var r = e.read_shift(4);
          switch (r) {
            case 0:
              return "";
            case 4294967295:
            case 4294967294:
              return (
                { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" }[
                  e.read_shift(4)
                ] || ""
              );
          }
          if (r > 400) throw Error("Unsupported Clipboard: " + r.toString(16));
          return (e.l -= 4), e.read_shift(0, 1 == t ? "lpstr" : "lpwstr");
        }
        var ry = [80, 81],
          rR = {
            1: { n: "CodePage", t: 2 },
            2: { n: "Category", t: 80 },
            3: { n: "PresentationFormat", t: 80 },
            4: { n: "ByteCount", t: 3 },
            5: { n: "LineCount", t: 3 },
            6: { n: "ParagraphCount", t: 3 },
            7: { n: "SlideCount", t: 3 },
            8: { n: "NoteCount", t: 3 },
            9: { n: "HiddenCount", t: 3 },
            10: { n: "MultimediaClipCount", t: 3 },
            11: { n: "ScaleCrop", t: 11 },
            12: { n: "HeadingPairs", t: 4108 },
            13: { n: "TitlesOfParts", t: 4126 },
            14: { n: "Manager", t: 80 },
            15: { n: "Company", t: 80 },
            16: { n: "LinksUpToDate", t: 11 },
            17: { n: "CharacterCount", t: 3 },
            19: { n: "SharedDoc", t: 11 },
            22: { n: "HyperlinksChanged", t: 11 },
            23: { n: "AppVersion", t: 3, p: "version" },
            24: { n: "DigSig", t: 65 },
            26: { n: "ContentType", t: 80 },
            27: { n: "ContentStatus", t: 80 },
            28: { n: "Language", t: 80 },
            29: { n: "Version", t: 80 },
            255: {},
          },
          rF = {
            1: { n: "CodePage", t: 2 },
            2: { n: "Title", t: 80 },
            3: { n: "Subject", t: 80 },
            4: { n: "Author", t: 80 },
            5: { n: "Keywords", t: 80 },
            6: { n: "Comments", t: 80 },
            7: { n: "Template", t: 80 },
            8: { n: "LastAuthor", t: 80 },
            9: { n: "RevNumber", t: 80 },
            10: { n: "EditTime", t: 64 },
            11: { n: "LastPrinted", t: 64 },
            12: { n: "CreatedDate", t: 64 },
            13: { n: "ModifiedDate", t: 64 },
            14: { n: "PageCount", t: 3 },
            15: { n: "WordCount", t: 3 },
            16: { n: "CharCount", t: 3 },
            17: { n: "Thumbnail", t: 71 },
            18: { n: "Application", t: 80 },
            19: { n: "DocSecurity", t: 3 },
            255: {},
          },
          rD = {
            2147483648: { n: "Locale", t: 19 },
            2147483651: { n: "Behavior", t: 19 },
            1919054434: {},
          };
        !(function () {
          for (var e in rD)
            Object.prototype.hasOwnProperty.call(rD, e) &&
              (rR[e] = rF[e] = rD[e]);
        })();
        var rO = ex(rR, "n"),
          rP = ex(rF, "n"),
          rN = {
            1: "US",
            2: "CA",
            3: "",
            7: "RU",
            20: "EG",
            30: "GR",
            31: "NL",
            32: "BE",
            33: "FR",
            34: "ES",
            36: "HU",
            39: "IT",
            41: "CH",
            43: "AT",
            44: "GB",
            45: "DK",
            46: "SE",
            47: "NO",
            48: "PL",
            49: "DE",
            52: "MX",
            55: "BR",
            61: "AU",
            64: "NZ",
            66: "TH",
            81: "JP",
            82: "KR",
            84: "VN",
            86: "CN",
            90: "TR",
            105: "JS",
            213: "DZ",
            216: "MA",
            218: "LY",
            351: "PT",
            354: "IS",
            358: "FI",
            420: "CZ",
            886: "TW",
            961: "LB",
            962: "JO",
            963: "SY",
            964: "IQ",
            965: "KW",
            966: "SA",
            971: "AE",
            972: "IL",
            974: "QA",
            981: "IR",
            65535: "US",
          },
          rM = [
            null,
            "solid",
            "mediumGray",
            "darkGray",
            "lightGray",
            "darkHorizontal",
            "darkVertical",
            "darkDown",
            "darkUp",
            "darkGrid",
            "darkTrellis",
            "lightHorizontal",
            "lightVertical",
            "lightDown",
            "lightUp",
            "lightGrid",
            "lightTrellis",
            "gray125",
            "gray0625",
          ],
          rL = eL(
            [
              0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0,
              16777215, 16711680, 65280, 255, 16776960, 16711935, 65535,
              8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504,
              10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316,
              13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896,
              255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052,
              13408767, 16764057, 3368703, 3394764, 10079232, 16763904,
              16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056,
              3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ].map(function (e) {
              return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
            })
          ),
          rU = {
            0: "#NULL!",
            7: "#DIV/0!",
            15: "#VALUE!",
            23: "#REF!",
            29: "#NAME?",
            36: "#NUM!",
            42: "#N/A",
            43: "#GETTING_DATA",
            255: "#WTF?",
          },
          rH = ek(rU),
          rW = {
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":
              "workbooks",
            "application/vnd.ms-excel.binIndexWs": "TODO",
            "application/vnd.ms-excel.intlmacrosheet": "TODO",
            "application/vnd.ms-excel.binIndexMs": "TODO",
            "application/vnd.openxmlformats-package.core-properties+xml":
              "coreprops",
            "application/vnd.openxmlformats-officedocument.custom-properties+xml":
              "custprops",
            "application/vnd.openxmlformats-officedocument.extended-properties+xml":
              "extprops",
            "application/vnd.openxmlformats-officedocument.customXmlProperties+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":
              "TODO",
            "application/vnd.ms-excel.pivotTable": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.drawingml.chart+xml":
              "TODO",
            "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
            "application/vnd.ms-office.chartstyle+xml": "TODO",
            "application/vnd.ms-office.chartex+xml": "TODO",
            "application/vnd.ms-excel.calcChain": "calcchains",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":
              "calcchains",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":
              "TODO",
            "application/vnd.ms-office.activeX": "TODO",
            "application/vnd.ms-office.activeX+xml": "TODO",
            "application/vnd.ms-excel.attachedToolbars": "TODO",
            "application/vnd.ms-excel.connections": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":
              "TODO",
            "application/vnd.ms-excel.externalLink": "links",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":
              "links",
            "application/vnd.ms-excel.sheetMetadata": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":
              "TODO",
            "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
            "application/vnd.ms-excel.pivotCacheRecords": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":
              "TODO",
            "application/vnd.ms-excel.queryTable": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":
              "TODO",
            "application/vnd.ms-excel.userNames": "TODO",
            "application/vnd.ms-excel.revisionHeaders": "TODO",
            "application/vnd.ms-excel.revisionLog": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":
              "TODO",
            "application/vnd.ms-excel.tableSingleCells": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":
              "TODO",
            "application/vnd.ms-excel.slicer": "TODO",
            "application/vnd.ms-excel.slicerCache": "TODO",
            "application/vnd.ms-excel.slicer+xml": "TODO",
            "application/vnd.ms-excel.slicerCache+xml": "TODO",
            "application/vnd.ms-excel.wsSortMap": "TODO",
            "application/vnd.ms-excel.table": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
            "application/vnd.openxmlformats-officedocument.themeOverride+xml":
              "TODO",
            "application/vnd.ms-excel.Timeline+xml": "TODO",
            "application/vnd.ms-excel.TimelineCache+xml": "TODO",
            "application/vnd.ms-office.vbaProject": "vba",
            "application/vnd.ms-office.vbaProjectSignature": "vba",
            "application/vnd.ms-office.volatileDependencies": "TODO",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":
              "TODO",
            "application/vnd.ms-excel.controlproperties+xml": "TODO",
            "application/vnd.openxmlformats-officedocument.model+data": "TODO",
            "application/vnd.ms-excel.Survey+xml": "TODO",
            "application/vnd.openxmlformats-officedocument.drawing+xml":
              "drawings",
            "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":
              "TODO",
            "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
            "application/vnd.openxmlformats-package.relationships+xml": "rels",
            "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
            "image/png": "TODO",
            sheet: "js",
          },
          rV =
            (eT(
              (d = {
                workbooks: {
                  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
                  xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
                  xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
                  xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
                  xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml",
                },
                strs: {
                  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
                  xlsb: "application/vnd.ms-excel.sharedStrings",
                },
                comments: {
                  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
                  xlsb: "application/vnd.ms-excel.comments",
                },
                sheets: {
                  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
                  xlsb: "application/vnd.ms-excel.worksheet",
                },
                charts: {
                  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
                  xlsb: "application/vnd.ms-excel.chartsheet",
                },
                dialogs: {
                  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
                  xlsb: "application/vnd.ms-excel.dialogsheet",
                },
                macros: {
                  xlsx: "application/vnd.ms-excel.macrosheet+xml",
                  xlsb: "application/vnd.ms-excel.macrosheet",
                },
                styles: {
                  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
                  xlsb: "application/vnd.ms-excel.styles",
                },
              })
            ).forEach(function (e) {
              ["xlsm", "xlam"].forEach(function (t) {
                d[e][t] || (d[e][t] = d[e].xlsx);
              });
            }),
            eT(d).forEach(function (e) {
              eT(d[e]).forEach(function (t) {
                rW[d[e][t]] = e;
              });
            }),
            d),
          rX = (function (e) {
            for (var t = [], r = eT(e), n = 0; n !== r.length; ++n)
              null == t[e[r[n]]] && (t[e[r[n]]] = []), t[e[r[n]]].push(r[n]);
            return t;
          })(rW);
        function rG() {
          return {
            workbooks: [],
            sheets: [],
            charts: [],
            dialogs: [],
            macros: [],
            rels: [],
            strs: [],
            comments: [],
            links: [],
            coreprops: [],
            extprops: [],
            custprops: [],
            themes: [],
            styles: [],
            calcchains: [],
            vba: [],
            drawings: [],
            TODO: [],
            xmlns: "",
          };
        }
        tw.CT = "http://schemas.openxmlformats.org/package/2006/content-types";
        var rz = tE("Types", null, {
            xmlns: tw.CT,
            "xmlns:xsd": tw.xsd,
            "xmlns:xsi": tw.xsi,
          }),
          rj = [
            ["xml", "application/xml"],
            ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
            ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
            [
              "data",
              "application/vnd.openxmlformats-officedocument.model+data",
            ],
            ["bmp", "image/bmp"],
            ["png", "image/png"],
            ["gif", "image/gif"],
            ["emf", "image/x-emf"],
            ["wmf", "image/x-wmf"],
            ["jpg", "image/jpeg"],
            ["jpeg", "image/jpeg"],
            ["tif", "image/tiff"],
            ["tiff", "image/tiff"],
            ["pdf", "application/pdf"],
            ["rels", rX.rels[0]],
          ].map(function (e) {
            return tE("Default", null, { Extension: e[0], ContentType: e[1] });
          }),
          r$ = {
            WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
            SHEET:
              "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
            HLINK:
              "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
            VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
            XPATH:
              "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
            XMISS:
              "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
            XLINK:
              "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
            CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
            CXMLP:
              "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
            VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject",
          };
        function rK(e) {
          var t = e.lastIndexOf("/");
          return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels";
        }
        function rY(e, t) {
          var r = { "!id": {} };
          if (!e) return r;
          "/" !== t.charAt(0) && (t = "/" + t);
          var n = {};
          return (
            (e.match(eq) || []).forEach(function (e) {
              var a = e2(e);
              if ("<Relationship" === a[0]) {
                var s = {};
                (s.Type = a.Type),
                  (s.Target = a.Target),
                  (s.Id = a.Id),
                  (s.TargetMode = a.TargetMode),
                  (r["External" === a.TargetMode ? a.Target : eQ(a.Target, t)] =
                    s),
                  (n[a.Id] = s);
              }
            }),
            (r["!id"] = n),
            r
          );
        }
        tw.RELS =
          "http://schemas.openxmlformats.org/package/2006/relationships";
        var rQ = tE("Relationships", null, { xmlns: tw.RELS });
        function rJ(e) {
          var t = [eJ, rQ];
          return (
            eT(e["!id"]).forEach(function (r) {
              t[t.length] = tE("Relationship", null, e["!id"][r]);
            }),
            t.length > 2 &&
              ((t[t.length] = "</Relationships>"),
              (t[1] = t[1].replace("/>", ">"))),
            t.join("")
          );
        }
        var rZ = [r$.HLINK, r$.XPATH, r$.XMISS];
        function rq(e, t, r, n, a, s) {
          if ((a || (a = {}), e["!id"] || (e["!id"] = {}), t < 0))
            for (t = 1; e["!id"]["rId" + t]; ++t);
          if (
            ((a.Id = "rId" + t),
            (a.Type = n),
            (a.Target = r),
            s
              ? (a.TargetMode = s)
              : rZ.indexOf(a.Type) > -1 && (a.TargetMode = "External"),
            e["!id"][a.Id])
          )
            throw Error("Cannot rewrite rId " + t);
          return (
            (e["!id"][a.Id] = a),
            (e[("/" + a.Target).replace("//", "/")] = a),
            t
          );
        }
        function r1(e, t, r) {
          return [
            '  <rdf:Description rdf:about="' + e + '">\n',
            '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' +
              (r || "odf") +
              "#" +
              t +
              '"/>\n',
            "  </rdf:Description>\n",
          ].join("");
        }
        var r0 =
            ((p =
              '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' +
              t.version +
              "</meta:generator></office:meta></office:document-meta>"),
            function () {
              return p;
            }),
          r2 = [
            ["cp:category", "Category"],
            ["cp:contentStatus", "ContentStatus"],
            ["cp:keywords", "Keywords"],
            ["cp:lastModifiedBy", "LastAuthor"],
            ["cp:lastPrinted", "LastPrinted"],
            ["cp:revision", "RevNumber"],
            ["cp:version", "Version"],
            ["dc:creator", "Author"],
            ["dc:description", "Comments"],
            ["dc:identifier", "Identifier"],
            ["dc:language", "Language"],
            ["dc:subject", "Subject"],
            ["dc:title", "Title"],
            ["dcterms:created", "CreatedDate", "date"],
            ["dcterms:modified", "ModifiedDate", "date"],
          ];
        (tw.CORE_PROPS =
          "http://schemas.openxmlformats.org/package/2006/metadata/core-properties"),
          (r$.CORE_PROPS =
            "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties");
        var r4 = (function () {
          for (var e = Array(r2.length), t = 0; t < r2.length; ++t) {
            var r = r2[t],
              n =
                "(?:" +
                r[0].slice(0, r[0].indexOf(":")) +
                ":)" +
                r[0].slice(r[0].indexOf(":") + 1);
            e[t] = RegExp("<" + n + "[^>]*>([\\s\\S]*?)</" + n + ">");
          }
          return e;
        })();
        function r3(e) {
          var t = {};
          e = ts(e);
          for (var r = 0; r < r2.length; ++r) {
            var n = r2[r],
              a = e.match(r4[r]);
            null != a && a.length > 0 && (t[n[1]] = e6(a[1])),
              "date" === n[2] && t[n[1]] && (t[n[1]] = eN(t[n[1]]));
          }
          return t;
        }
        var r5 = tE("cp:coreProperties", null, {
          "xmlns:cp": tw.CORE_PROPS,
          "xmlns:dc": tw.dc,
          "xmlns:dcterms": tw.dcterms,
          "xmlns:dcmitype": tw.dcmitype,
          "xmlns:xsi": tw.xsi,
        });
        function r6(e, t, r, n, a) {
          null == a[e] &&
            null != t &&
            "" !== t &&
            ((a[e] = t),
            (t = e9(t)),
            (n[n.length] = r ? tE(e, t, r) : tv(e, t)));
        }
        var r8 = [
          ["Application", "Application", "string"],
          ["AppVersion", "AppVersion", "string"],
          ["Company", "Company", "string"],
          ["DocSecurity", "DocSecurity", "string"],
          ["Manager", "Manager", "string"],
          ["HyperlinksChanged", "HyperlinksChanged", "bool"],
          ["SharedDoc", "SharedDoc", "bool"],
          ["LinksUpToDate", "LinksUpToDate", "bool"],
          ["ScaleCrop", "ScaleCrop", "bool"],
          ["HeadingPairs", "HeadingPairs", "raw"],
          ["TitlesOfParts", "TitlesOfParts", "raw"],
        ];
        function r7(e, t, r, n) {
          var a = [];
          if ("string" == typeof e) a = tm(e, n);
          else
            for (var s = 0; s < e.length; ++s)
              a = a.concat(
                e[s].map(function (e) {
                  return { v: e };
                })
              );
          var i =
              "string" == typeof t
                ? tm(t, n).map(function (e) {
                    return e.v;
                  })
                : t,
            o = 0,
            c = 0;
          if (i.length > 0)
            for (var l = 0; l !== a.length; l += 2) {
              switch (((c = +a[l + 1].v), a[l].v)) {
                case "Worksheets":
                case "工作表":
                case "Листы":
                case "أوراق العمل":
                case "ワークシート":
                case "גליונות עבודה":
                case "Arbeitsbl\xe4tter":
                case "\xc7alışma Sayfaları":
                case "Feuilles de calcul":
                case "Fogli di lavoro":
                case "Folhas de c\xe1lculo":
                case "Planilhas":
                case "Regneark":
                case "Hojas de c\xe1lculo":
                case "Werkbladen":
                  (r.Worksheets = c), (r.SheetNames = i.slice(o, o + c));
                  break;
                case "Named Ranges":
                case "Rangos con nombre":
                case "名前付き一覧":
                case "Benannte Bereiche":
                case "Navngivne omr\xe5der":
                  (r.NamedRanges = c), (r.DefinedNames = i.slice(o, o + c));
                  break;
                case "Charts":
                case "Diagramme":
                  (r.Chartsheets = c), (r.ChartNames = i.slice(o, o + c));
              }
              o += c;
            }
        }
        (tw.EXT_PROPS =
          "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"),
          (r$.EXT_PROPS =
            "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties");
        var r9 = tE("Properties", null, {
          xmlns: tw.EXT_PROPS,
          "xmlns:vt": tw.vt,
        });
        (tw.CUST_PROPS =
          "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties"),
          (r$.CUST_PROPS =
            "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties");
        var ne = /<[^>]+>[^<]*/g,
          nt = tE("Properties", null, {
            xmlns: tw.CUST_PROPS,
            "xmlns:vt": tw.vt,
          }),
          nr = {
            Title: "Title",
            Subject: "Subject",
            Author: "Author",
            Keywords: "Keywords",
            Comments: "Description",
            LastAuthor: "LastAuthor",
            RevNumber: "Revision",
            Application: "AppName",
            LastPrinted: "LastPrinted",
            CreatedDate: "Created",
            ModifiedDate: "LastSaved",
            Category: "Category",
            Manager: "Manager",
            Company: "Company",
            AppVersion: "Version",
            ContentStatus: "ContentStatus",
            Identifier: "Identifier",
            Language: "Language",
          },
          nn = e_(nr);
        function na(e) {
          var t = e.read_shift(4),
            r = e.read_shift(4);
          return new Date(
            ((r / 1e7) * 4294967296 + t / 1e7 - 11644473600) * 1e3
          )
            .toISOString()
            .replace(/\.000/, "");
        }
        function ns(e, t, r) {
          var n = e.l,
            a = e.read_shift(0, "lpstr-cp");
          if (r) for (; (e.l - n) & 3; ) ++e.l;
          return a;
        }
        function ni(e, t, r) {
          var n = e.read_shift(0, "lpwstr");
          return r && (e.l += (4 - ((n.length + 1) & 3)) & 3), n;
        }
        function no(e, t, r) {
          return 31 === t ? ni(e) : ns(e, t, r);
        }
        function nc(e, t, r) {
          return no(e, t, !1 === r ? 0 : 4);
        }
        function nl(e, t) {
          for (var r = e.read_shift(4), n = {}, a = 0; a != r; ++a) {
            var s = e.read_shift(4),
              i = e.read_shift(4);
            (n[s] = e
              .read_shift(i, 1200 === t ? "utf16le" : "utf8")
              .replace(em, "")
              .replace(eg, "!")),
              1200 === t && i % 2 && (e.l += 2);
          }
          return 3 & e.l && (e.l = (e.l >> 3) << 2), n;
        }
        function nf(e) {
          var t = e.read_shift(4),
            r = e.slice(e.l, e.l + t);
          return (e.l += t), (3 & t) > 0 && (e.l += (4 - (3 & t)) & 3), r;
        }
        function nh(e, t, r) {
          var n,
            a,
            s,
            i = e.read_shift(2),
            o = r || {};
          if (((e.l += 2), 12 !== t && i !== t && -1 === ry.indexOf(t)))
            throw Error("Expected type " + t + " saw " + i);
          switch (12 === t ? i : t) {
            case 2:
              return (s = e.read_shift(2, "i")), o.raw || (e.l += 2), s;
            case 3:
              return e.read_shift(4, "i");
            case 11:
              return 0 !== e.read_shift(4);
            case 19:
              return e.read_shift(4);
            case 30:
              return ns(e, i, 4).replace(em, "");
            case 31:
              return ni(e);
            case 64:
              return na(e);
            case 65:
              return nf(e);
            case 71:
              return (
                (n = e),
                ((a = {}).Size = n.read_shift(4)),
                (n.l += a.Size + 3 - ((a.Size - 1) % 4)),
                a
              );
            case 80:
              return nc(e, i, !o.raw).replace(em, "");
            case 81:
              return (function (e, t) {
                if (!t)
                  throw Error("VtUnalignedString must have positive length");
                return no(e, t, 0);
              })(e, i).replace(em, "");
            case 4108:
              return (function (e) {
                for (var t = e.read_shift(4), r = [], n = 0; n != t / 2; ++n)
                  r.push([nh(e, 81), nh(e, 3)]);
                return r;
              })(e);
            case 4126:
              return (function (e) {
                for (var t = e.read_shift(4), r = [], n = 0; n != t; ++n)
                  r[n] = e.read_shift(0, "lpstr-cp").replace(em, "");
                return r;
              })(e);
            default:
              throw Error(
                "TypedPropertyValue unrecognized type " + t + " " + i
              );
          }
        }
        function nu(e, t) {
          var r,
            n,
            a,
            s,
            i,
            o = t1(4),
            c = t1(4);
          switch ((o.write_shift(4, 80 == e ? 31 : e), e)) {
            case 3:
              c.write_shift(-4, t);
              break;
            case 5:
              (c = t1(8)).write_shift(8, t, "f");
              break;
            case 11:
              c.write_shift(4, t ? 1 : 0);
              break;
            case 64:
              (n =
                (r =
                  ("string" == typeof t
                    ? new Date(Date.parse(t))
                    : t
                  ).getTime() /
                    1e3 +
                  11644473600) % 4294967296),
                (a = ((r - n) / 4294967296) * 1e7),
                (s = ((n *= 1e7) / 4294967296) | 0) > 0 &&
                  ((n %= 4294967296), (a += s)),
                (i = t1(8)).write_shift(4, n),
                i.write_shift(4, a),
                (c = i);
              break;
            case 31:
            case 80:
              for (
                (c = t1(
                  4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)
                )).write_shift(4, t.length + 1),
                  c.write_shift(0, t, "dbcs");
                c.l != c.length;
              )
                c.write_shift(1, 0);
              break;
            default:
              throw Error(
                "TypedPropertyValue unrecognized type " + e + " " + t
              );
          }
          return ep([o, c]);
        }
        function nd(e, t) {
          var r = e.l,
            n = e.read_shift(4),
            a = e.read_shift(4),
            s = [],
            i = 0,
            o = 0,
            c = -1,
            l = {};
          for (i = 0; i != a; ++i) {
            var f = e.read_shift(4),
              h = e.read_shift(4);
            s[i] = [f, h + r];
          }
          s.sort(function (e, t) {
            return e[1] - t[1];
          });
          var u = {};
          for (i = 0; i != a; ++i) {
            if (e.l !== s[i][1]) {
              var d = !0;
              if (i > 0 && t)
                switch (t[s[i - 1][0]].t) {
                  case 2:
                    e.l + 2 === s[i][1] && ((e.l += 2), (d = !1));
                    break;
                  case 80:
                  case 4108:
                    e.l <= s[i][1] && ((e.l = s[i][1]), (d = !1));
                }
              if (
                ((!t || 0 == i) &&
                  e.l <= s[i][1] &&
                  ((d = !1), (e.l = s[i][1])),
                d)
              )
                throw Error(
                  "Read Error: Expected address " +
                    s[i][1] +
                    " at " +
                    e.l +
                    " :" +
                    i
                );
            }
            if (t) {
              var p = t[s[i][0]];
              if (
                ((u[p.n] = nh(e, p.t, { raw: !0 })),
                "version" === p.p &&
                  (u[p.n] =
                    String(u[p.n] >> 16) +
                    "." +
                    ("0000" + String(65535 & u[p.n])).slice(-4)),
                "CodePage" == p.n)
              )
                switch (u[p.n]) {
                  case 0:
                    u[p.n] = 1252;
                  case 874:
                  case 932:
                  case 936:
                  case 949:
                  case 950:
                  case 1250:
                  case 1251:
                  case 1253:
                  case 1254:
                  case 1255:
                  case 1256:
                  case 1257:
                  case 1258:
                  case 1e4:
                  case 1200:
                  case 1201:
                  case 1252:
                  case 65e3:
                  case -536:
                  case 65001:
                  case -535:
                    Z((o = (u[p.n] >>> 0) & 65535));
                    break;
                  default:
                    throw Error("Unsupported CodePage: " + u[p.n]);
                }
            } else if (1 === s[i][0]) {
              if ((Z((o = u.CodePage = nh(e, 2))), -1 !== c)) {
                var m = e.l;
                (e.l = s[c][1]), (l = nl(e, o)), (e.l = m);
              }
            } else if (0 === s[i][0]) {
              if (0 === o) {
                (c = i), (e.l = s[i + 1][1]);
                continue;
              }
              l = nl(e, o);
            } else {
              var g,
                v = l[s[i][0]];
              switch (e[e.l]) {
                case 65:
                  (e.l += 4), (g = nf(e));
                  break;
                case 30:
                case 31:
                  (e.l += 4), (g = nc(e, e[e.l - 4]).replace(/\u0000+$/, ""));
                  break;
                case 3:
                  (e.l += 4), (g = e.read_shift(4, "i"));
                  break;
                case 19:
                  (e.l += 4), (g = e.read_shift(4));
                  break;
                case 5:
                  (e.l += 4), (g = e.read_shift(8, "f"));
                  break;
                case 11:
                  (e.l += 4), (g = nE(e, 4));
                  break;
                case 64:
                  (e.l += 4), (g = eN(na(e)));
                  break;
                default:
                  throw Error("unparsed value: " + e[e.l]);
              }
              u[v] = g;
            }
          }
          return (e.l = r + n), u;
        }
        var np = [
          "CodePage",
          "Thumbnail",
          "_PID_LINKBASE",
          "_PID_HLINKS",
          "SystemIdentifier",
          "FMTID",
        ].concat([
          "Worksheets",
          "SheetNames",
          "NamedRanges",
          "DefinedNames",
          "Chartsheets",
          "ChartNames",
        ]);
        function nm(e, t, r) {
          var n = t1(8),
            a = [],
            s = [],
            i = 8,
            o = 0,
            c = t1(8),
            l = t1(8);
          if (
            (c.write_shift(4, 2),
            c.write_shift(4, 1200),
            l.write_shift(4, 1),
            s.push(c),
            a.push(l),
            (i += 8 + c.length),
            !t)
          ) {
            (l = t1(8)).write_shift(4, 0), a.unshift(l);
            var f = [t1(4)];
            for (f[0].write_shift(4, e.length), o = 0; o < e.length; ++o) {
              var h = e[o][0];
              for (
                (c = t1(
                  8 + 2 * (h.length + 1) + (h.length % 2 ? 0 : 2)
                )).write_shift(4, o + 2),
                  c.write_shift(4, h.length + 1),
                  c.write_shift(0, h, "dbcs");
                c.l != c.length;
              )
                c.write_shift(1, 0);
              f.push(c);
            }
            (c = ep(f)), s.unshift(c), (i += 8 + c.length);
          }
          for (o = 0; o < e.length; ++o)
            if (
              !((t && !t[e[o][0]]) || np.indexOf(e[o][0]) > -1) &&
              null != e[o][1]
            ) {
              var u = e[o][1],
                d = 0;
              if (t) {
                var p = r[(d = +t[e[o][0]])];
                if ("version" == p.p && "string" == typeof u) {
                  var m = u.split(".");
                  u = (+m[0] << 16) + (+m[1] || 0);
                }
                c = nu(p.t, u);
              } else {
                var g = (function (e) {
                  switch (typeof e) {
                    case "boolean":
                      return 11;
                    case "number":
                      return (0 | e) == e ? 3 : 5;
                    case "string":
                      return 31;
                    case "object":
                      if (e instanceof Date) return 64;
                  }
                  return -1;
                })(u);
                -1 == g && ((g = 31), (u = String(u))), (c = nu(g, u));
              }
              s.push(c),
                (l = t1(8)).write_shift(4, t ? d : 2 + o),
                a.push(l),
                (i += 8 + c.length);
            }
          var v = 8 * (s.length + 1);
          for (o = 0; o < s.length; ++o)
            a[o].write_shift(4, v), (v += s[o].length);
          return (
            n.write_shift(4, i),
            n.write_shift(4, s.length),
            ep([n].concat(a).concat(s))
          );
        }
        function ng(e, t, r) {
          var n,
            a = e.content;
          if (!a) return {};
          tZ(a, 0);
          var s,
            i,
            o,
            c,
            l = 0;
          a.chk("feff", "Byte Order: "), a.read_shift(2);
          var f = a.read_shift(4),
            h = a.read_shift(16);
          if (h !== eC.utils.consts.HEADER_CLSID && h !== r)
            throw Error("Bad PropertySet CLSID " + h);
          if (1 !== (s = a.read_shift(4)) && 2 !== s)
            throw Error("Unrecognized #Sets: " + s);
          if (
            ((i = a.read_shift(16)),
            (c = a.read_shift(4)),
            1 === s && c !== a.l)
          )
            throw Error("Length mismatch: " + c + " !== " + a.l);
          2 === s && ((o = a.read_shift(16)), (l = a.read_shift(4)));
          var u = nd(a, t),
            d = { SystemIdentifier: f };
          for (var p in u) d[p] = u[p];
          if (((d.FMTID = i), 1 === s)) return d;
          if ((l - a.l == 2 && (a.l += 2), a.l !== l))
            throw Error("Length mismatch 2: " + a.l + " !== " + l);
          try {
            n = nd(a, null);
          } catch (e) {}
          for (p in n) d[p] = n[p];
          return (d.FMTID = [i, o]), d;
        }
        function nv(e, t, r, n, a, s) {
          var i = t1(a ? 68 : 48),
            o = [i];
          i.write_shift(2, 65534),
            i.write_shift(2, 0),
            i.write_shift(4, 842412599),
            i.write_shift(16, eC.utils.consts.HEADER_CLSID, "hex"),
            i.write_shift(4, a ? 2 : 1),
            i.write_shift(16, t, "hex"),
            i.write_shift(4, a ? 68 : 48);
          var c = nm(e, r, n);
          if ((o.push(c), a)) {
            var l = nm(a, null, null);
            i.write_shift(16, s, "hex"),
              i.write_shift(4, 68 + c.length),
              o.push(l);
          }
          return ep(o);
        }
        function nb(e, t) {
          return e.read_shift(t), null;
        }
        function nE(e, t) {
          return 1 === e.read_shift(t);
        }
        function nS(e, t) {
          return t || (t = t1(2)), t.write_shift(2, +!!e), t;
        }
        function nw(e) {
          return e.read_shift(2, "u");
        }
        function nC(e, t) {
          return t || (t = t1(2)), t.write_shift(2, e), t;
        }
        function nB(e, t) {
          return (function (e, t, r) {
            for (var n = [], a = e.l + t; e.l < a; ) n.push(r(e, a - e.l));
            if (a !== e.l) throw Error("Slurp error");
            return n;
          })(e, t, nw);
        }
        function nT(e, t, r) {
          var n = e.read_shift(r && r.biff >= 12 ? 2 : 1),
            a = "sbcs-cont",
            s = z;
          r && r.biff >= 8 && (z = 1200),
            r && 8 != r.biff
              ? 12 == r.biff && (a = "wstr")
              : e.read_shift(1) && (a = "dbcs-cont"),
            r.biff >= 2 && r.biff <= 5 && (a = "cpstr");
          var i = n ? e.read_shift(n, a) : "";
          return (z = s), i;
        }
        function nx(e, t, r) {
          if (r) {
            if (r.biff >= 2 && r.biff <= 5) return e.read_shift(t, "cpstr");
            if (r.biff >= 12) return e.read_shift(t, "dbcs-cont");
          }
          return 0 === e.read_shift(1)
            ? e.read_shift(t, "sbcs-cont")
            : e.read_shift(t, "dbcs-cont");
        }
        function n_(e, t, r) {
          var n = e.read_shift(r && 2 == r.biff ? 1 : 2);
          return 0 === n ? (e.l++, "") : nx(e, n, r);
        }
        function nk(e, t, r) {
          if (r.biff > 5) return n_(e, t, r);
          var n = e.read_shift(1);
          return 0 === n
            ? (e.l++, "")
            : e.read_shift(n, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
        }
        function nA(e, t, r) {
          return (
            r || (r = t1(3 + 2 * e.length)),
            r.write_shift(2, e.length),
            r.write_shift(1, 1),
            r.write_shift(31, e, "utf16le"),
            r
          );
        }
        function nI(e) {
          var t = e.read_shift(4);
          return t > 0 ? e.read_shift(t, "utf16le").replace(em, "") : "";
        }
        function ny(e) {
          return [
            e.read_shift(1),
            e.read_shift(1),
            e.read_shift(1),
            e.read_shift(1),
          ];
        }
        function nR(e, t) {
          var r = ny(e, t);
          return (r[3] = 0), r;
        }
        function nF(e) {
          return {
            r: e.read_shift(2),
            c: e.read_shift(2),
            ixfe: e.read_shift(2),
          };
        }
        function nD(e, t, r, n) {
          return (
            n || (n = t1(6)),
            n.write_shift(2, e),
            n.write_shift(2, t),
            n.write_shift(2, r || 0),
            n
          );
        }
        function nO(e) {
          return [e.read_shift(2), rC(e)];
        }
        function nP(e) {
          var t = e.read_shift(2),
            r = e.read_shift(2);
          return {
            s: { c: e.read_shift(2), r: t },
            e: { c: e.read_shift(2), r: r },
          };
        }
        function nN(e, t) {
          return (
            t || (t = t1(8)),
            t.write_shift(2, e.s.r),
            t.write_shift(2, e.e.r),
            t.write_shift(2, e.s.c),
            t.write_shift(2, e.e.c),
            t
          );
        }
        function nM(e) {
          var t = e.read_shift(2),
            r = e.read_shift(2);
          return {
            s: { c: e.read_shift(1), r: t },
            e: { c: e.read_shift(1), r: r },
          };
        }
        function nL(e) {
          e.l += 4;
          var t = e.read_shift(2),
            r = e.read_shift(2),
            n = e.read_shift(2);
          return (e.l += 12), [r, t, n];
        }
        function nU(e) {
          (e.l += 2), (e.l += e.read_shift(2));
        }
        var nH = {
          0: nU,
          4: nU,
          5: nU,
          6: nU,
          7: function (e) {
            return (e.l += 4), (e.cf = e.read_shift(2)), {};
          },
          8: nU,
          9: nU,
          10: nU,
          11: nU,
          12: nU,
          13: function (e) {
            var t = {};
            return (
              (e.l += 4),
              (e.l += 16),
              (t.fSharedNote = e.read_shift(2)),
              (e.l += 4),
              t
            );
          },
          14: nU,
          15: nU,
          16: nU,
          17: nU,
          18: nU,
          19: nU,
          20: nU,
          21: nL,
        };
        function nW(e, t) {
          var r = { BIFFVer: 0, dt: 0 };
          switch (
            ((r.BIFFVer = e.read_shift(2)),
            (t -= 2) >= 2 && ((r.dt = e.read_shift(2)), (e.l -= 2)),
            r.BIFFVer)
          ) {
            case 1536:
            case 1280:
            case 1024:
            case 768:
            case 512:
            case 2:
            case 7:
              break;
            default:
              if (t > 6) throw Error("Unexpected BIFF Ver " + r.BIFFVer);
          }
          return e.read_shift(t), r;
        }
        function nV(e, t, r) {
          var n = 1536,
            a = 16;
          switch (r.bookType) {
            case "biff8":
            case "xla":
              break;
            case "biff5":
              (n = 1280), (a = 8);
              break;
            case "biff4":
              (n = 4), (a = 6);
              break;
            case "biff3":
              (n = 3), (a = 6);
              break;
            case "biff2":
              (n = 2), (a = 4);
              break;
            default:
              throw Error("unsupported BIFF version");
          }
          var s = t1(a);
          return (
            s.write_shift(2, n),
            s.write_shift(2, t),
            a > 4 && s.write_shift(2, 29282),
            a > 6 && s.write_shift(2, 1997),
            a > 8 &&
              (s.write_shift(2, 49161),
              s.write_shift(2, 1),
              s.write_shift(2, 1798),
              s.write_shift(2, 0)),
            s
          );
        }
        function nX(e, t, r) {
          var n = 0;
          (r && 2 == r.biff) || (n = e.read_shift(2));
          var a = e.read_shift(2);
          return (
            r && 2 == r.biff && ((n = 1 - (a >> 15)), (a &= 32767)),
            [
              {
                Unsynced: 1 & n,
                DyZero: (2 & n) >> 1,
                ExAsc: (4 & n) >> 2,
                ExDsc: (8 & n) >> 3,
              },
              a,
            ]
          );
        }
        function nG(e, t, r) {
          var n = e.l + t,
            a = 8 != r.biff && r.biff ? 2 : 4,
            s = e.read_shift(a),
            i = e.read_shift(a),
            o = e.read_shift(2),
            c = e.read_shift(2);
          return (e.l = n), { s: { r: s, c: o }, e: { r: i, c: c } };
        }
        function nz(e, t, r, n) {
          var a = r && 5 == r.biff;
          return (
            n || (n = t1(a ? 16 : 20)),
            n.write_shift(2, 0),
            e.style
              ? (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, 65524))
              : (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, t << 4)),
            n.write_shift(4, 0),
            n.write_shift(4, 0),
            a || n.write_shift(4, 0),
            n.write_shift(2, 0),
            n
          );
        }
        function nj(e, t, r) {
          var n,
            a = nF(e, 6);
          2 == r.biff && ++e.l;
          var s = ((n = e.read_shift(1)), 1 === e.read_shift(1) ? n : 1 === n);
          return (a.val = s), (a.t = !0 === s || !1 === s ? "b" : "e"), a;
        }
        var n$ = function (e, t, r) {
          return 0 === t ? "" : nk(e, t, r);
        };
        function nK(e, t, r) {
          var n,
            a = e.read_shift(2),
            s = {
              fBuiltIn: 1 & a,
              fWantAdvise: (a >>> 1) & 1,
              fWantPict: (a >>> 2) & 1,
              fOle: (a >>> 3) & 1,
              fOleLink: (a >>> 4) & 1,
              cf: (a >>> 5) & 1023,
              fIcon: (a >>> 15) & 1,
            };
          return (
            14849 === r.sbcch &&
              (n = (function (e, t, r) {
                (e.l += 4), (t -= 4);
                var n = e.l + t,
                  a = nT(e, t, r),
                  s = e.read_shift(2);
                if (s !== (n -= e.l))
                  throw Error(
                    "Malformed AddinUdf: padding = " + n + " != " + s
                  );
                return (e.l += s), a;
              })(e, t - 2, r)),
            (s.body = n || e.read_shift(t - 2)),
            "string" == typeof n && (s.Name = n),
            s
          );
        }
        var nY = [
          "_xlnm.Consolidate_Area",
          "_xlnm.Auto_Open",
          "_xlnm.Auto_Close",
          "_xlnm.Extract",
          "_xlnm.Database",
          "_xlnm.Criteria",
          "_xlnm.Print_Area",
          "_xlnm.Print_Titles",
          "_xlnm.Recorder",
          "_xlnm.Data_Form",
          "_xlnm.Auto_Activate",
          "_xlnm.Auto_Deactivate",
          "_xlnm.Sheet_Title",
          "_xlnm._FilterDatabase",
        ];
        function nQ(e, t, r) {
          var n,
            a,
            s,
            i,
            o = e.l + t,
            c = e.read_shift(2),
            l = e.read_shift(1),
            f = e.read_shift(1),
            h = e.read_shift(r && 2 == r.biff ? 1 : 2),
            u = 0;
          (!r || r.biff >= 5) &&
            (5 != r.biff && (e.l += 2),
            (u = e.read_shift(2)),
            5 == r.biff && (e.l += 2),
            (e.l += 4));
          var d = nx(e, f, r);
          32 & c && (d = nY[d.charCodeAt(0)]);
          var p = o - e.l;
          return (
            r && 2 == r.biff && --p,
            {
              chKey: l,
              Name: d,
              itab: u,
              rgce:
                o != e.l && 0 !== h && p > 0
                  ? ((n = p),
                    (s = e.l + n),
                    (i = su(e, h, r)),
                    s !== e.l && (a = sh(e, s - e.l, i, r)),
                    [i, a])
                  : [],
            }
          );
        }
        function nJ(e, t, r) {
          if (r.biff < 8) {
            var n;
            return (
              3 == e[e.l + 1] && e[e.l]++,
              3 == (n = nT(e, t, r)).charCodeAt(0) ? n.slice(1) : n
            );
          }
          for (
            var a = [], s = e.l + t, i = e.read_shift(r.biff > 8 ? 4 : 2);
            0 != i--;
          )
            a.push(
              (function (e, t, r) {
                var n = r.biff > 8 ? 4 : 2;
                return [
                  e.read_shift(n),
                  e.read_shift(n, "i"),
                  e.read_shift(n, "i"),
                ];
              })(e, r.biff, r)
            );
          if (e.l != s) throw Error("Bad ExternSheet: " + e.l + " != " + s);
          return a;
        }
        function nZ(e, t, r) {
          var n = nM(e, 6);
          switch (r.biff) {
            case 2:
              e.l++, (t -= 7);
              break;
            case 3:
            case 4:
              (e.l += 2), (t -= 8);
              break;
            default:
              (e.l += 6), (t -= 12);
          }
          return [
            n,
            (function (e, t, r) {
              var n,
                a,
                s = e.l + t,
                i = 2 == r.biff ? 1 : 2,
                o = e.read_shift(i);
              if (65535 == o) return [[], ((n = e), void (n.l += t - 2))];
              var c = su(e, o, r);
              return (
                t !== o + i && (a = sh(e, t - o - i, c, r)), (e.l = s), [c, a]
              );
            })(e, t, r, n),
          ];
        }
        var nq = [];
        function n1(e, t, r) {
          if (!r.cellStyles) {
            var n;
            return (n = e), void (n.l += t);
          }
          var a = r && r.biff >= 12 ? 4 : 2,
            s = e.read_shift(a),
            i = e.read_shift(a),
            o = e.read_shift(a),
            c = e.read_shift(a),
            l = e.read_shift(2);
          2 == a && (e.l += 2);
          var f = { s: s, e: i, w: o, ixfe: c, flags: l };
          return (r.biff >= 5 || !r.biff) && (f.level = (l >> 8) & 7), f;
        }
        nq[8] = function (e, t) {
          var r = e.l + t;
          e.l += 10;
          var n = e.read_shift(2);
          (e.l += 4), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 4);
          var a = e.read_shift(1);
          return (e.l += a), (e.l = r), { fmt: n };
        };
        var n0 = (function () {
            var e = {
                1: 437,
                2: 850,
                3: 1252,
                4: 1e4,
                100: 852,
                101: 866,
                102: 865,
                103: 861,
                104: 895,
                105: 620,
                106: 737,
                107: 857,
                120: 950,
                121: 949,
                122: 936,
                123: 932,
                124: 874,
                125: 1255,
                126: 1256,
                150: 10007,
                151: 10029,
                152: 10006,
                200: 1250,
                201: 1251,
                202: 1254,
                203: 1253,
                0: 20127,
                8: 865,
                9: 437,
                10: 850,
                11: 437,
                13: 437,
                14: 850,
                15: 437,
                16: 850,
                17: 437,
                18: 850,
                19: 932,
                20: 850,
                21: 437,
                22: 850,
                23: 865,
                24: 437,
                25: 437,
                26: 850,
                27: 437,
                28: 863,
                29: 850,
                31: 852,
                34: 852,
                35: 852,
                36: 860,
                37: 850,
                38: 866,
                55: 850,
                64: 852,
                77: 936,
                78: 949,
                79: 950,
                80: 874,
                87: 1252,
                88: 1252,
                89: 1252,
                108: 863,
                134: 737,
                135: 852,
                136: 857,
                204: 1257,
                255: 16969,
              },
              t = e_({
                1: 437,
                2: 850,
                3: 1252,
                4: 1e4,
                100: 852,
                101: 866,
                102: 865,
                103: 861,
                104: 895,
                105: 620,
                106: 737,
                107: 857,
                120: 950,
                121: 949,
                122: 936,
                123: 932,
                124: 874,
                125: 1255,
                126: 1256,
                150: 10007,
                151: 10029,
                152: 10006,
                200: 1250,
                201: 1251,
                202: 1254,
                203: 1253,
                0: 20127,
              });
            function r(t, r) {
              var n = r || {};
              return (
                n.dateNF || (n.dateNF = "yyyymmdd"),
                rh(
                  (function (t, r) {
                    var n = [],
                      a = ec(1);
                    switch (r.type) {
                      case "base64":
                        a = ef(ea.decode(t));
                        break;
                      case "binary":
                        a = ef(t);
                        break;
                      case "buffer":
                      case "array":
                        a = t;
                    }
                    tZ(a, 0);
                    var s = a.read_shift(1),
                      i = !!(136 & s),
                      o = !1,
                      c = !1;
                    switch (s) {
                      case 2:
                      case 3:
                      case 131:
                      case 139:
                      case 245:
                        break;
                      case 48:
                      case 49:
                        (o = !0), (i = !0);
                        break;
                      case 140:
                        c = !0;
                        break;
                      default:
                        throw Error(
                          "DBF Unsupported Version: " + s.toString(16)
                        );
                    }
                    var l = 0,
                      f = 521;
                    2 == s && (l = a.read_shift(2)),
                      (a.l += 3),
                      2 != s && (l = a.read_shift(4)),
                      l > 1048576 && (l = 1e6),
                      2 != s && (f = a.read_shift(2));
                    var h = a.read_shift(2),
                      u = r.codepage || 1252;
                    2 != s &&
                      ((a.l += 16),
                      a.read_shift(1),
                      0 !== a[a.l] && (u = e[a[a.l]]),
                      (a.l += 1),
                      (a.l += 2)),
                      c && (a.l += 36);
                    for (
                      var d = [],
                        p = {},
                        m = Math.min(
                          a.length,
                          2 == s ? 521 : f - 10 - (o ? 264 : 0)
                        ),
                        g = c ? 32 : 11;
                      a.l < m && 13 != a[a.l];
                    )
                      switch (
                        (((p = {}).name = cptable.utils
                          .decode(u, a.slice(a.l, a.l + g))
                          .replace(/[\u0000\r\n].*$/g, "")),
                        (a.l += g),
                        (p.type = String.fromCharCode(a.read_shift(1))),
                        2 == s || c || (p.offset = a.read_shift(4)),
                        (p.len = a.read_shift(1)),
                        2 == s && (p.offset = a.read_shift(2)),
                        (p.dec = a.read_shift(1)),
                        p.name.length && d.push(p),
                        2 != s && (a.l += c ? 13 : 14),
                        p.type)
                      ) {
                        case "B":
                          (!o || 8 != p.len) &&
                            r.WTF &&
                            console.log("Skipping " + p.name + ":" + p.type);
                          break;
                        case "G":
                        case "P":
                          r.WTF &&
                            console.log("Skipping " + p.name + ":" + p.type);
                          break;
                        case "+":
                        case "0":
                        case "@":
                        case "C":
                        case "D":
                        case "F":
                        case "I":
                        case "L":
                        case "M":
                        case "N":
                        case "O":
                        case "T":
                        case "Y":
                          break;
                        default:
                          throw Error("Unknown Field Type: " + p.type);
                      }
                    if (
                      (13 !== a[a.l] && (a.l = f - 1), 13 !== a.read_shift(1))
                    )
                      throw Error(
                        "DBF Terminator not found " + a.l + " " + a[a.l]
                      );
                    a.l = f;
                    var v = 0,
                      b = 0;
                    for (b = 0, n[0] = []; b != d.length; ++b)
                      n[0][b] = d[b].name;
                    for (; l-- > 0; ) {
                      if (42 === a[a.l]) {
                        a.l += h;
                        continue;
                      }
                      for (
                        ++a.l, n[++v] = [], b = 0, b = 0;
                        b != d.length;
                        ++b
                      ) {
                        var E = a.slice(a.l, a.l + d[b].len);
                        (a.l += d[b].len), tZ(E, 0);
                        var S = cptable.utils.decode(u, E);
                        switch (d[b].type) {
                          case "C":
                            S.trim().length &&
                              (n[v][b] = S.replace(/\s+$/, ""));
                            break;
                          case "D":
                            8 === S.length
                              ? (n[v][b] = new Date(
                                  +S.slice(0, 4),
                                  +S.slice(4, 6) - 1,
                                  +S.slice(6, 8)
                                ))
                              : (n[v][b] = S);
                            break;
                          case "F":
                            n[v][b] = parseFloat(S.trim());
                            break;
                          case "+":
                          case "I":
                            n[v][b] = c
                              ? 2147483648 ^ E.read_shift(-4, "i")
                              : E.read_shift(4, "i");
                            break;
                          case "L":
                            switch (S.trim().toUpperCase()) {
                              case "Y":
                              case "T":
                                n[v][b] = !0;
                                break;
                              case "N":
                              case "F":
                                n[v][b] = !1;
                                break;
                              case "":
                              case "?":
                                break;
                              default:
                                throw Error("DBF Unrecognized L:|" + S + "|");
                            }
                            break;
                          case "M":
                            if (!i)
                              throw Error(
                                "DBF Unexpected MEMO for type " + s.toString(16)
                              );
                            n[v][b] =
                              "##MEMO##" +
                              (c ? parseInt(S.trim(), 10) : E.read_shift(4));
                            break;
                          case "N":
                            (S = S.replace(/\u0000/g, "").trim()) &&
                              "." != S &&
                              (n[v][b] = +S || 0);
                            break;
                          case "@":
                            n[v][b] = new Date(
                              E.read_shift(-8, "f") - 621356832e5
                            );
                            break;
                          case "T":
                            n[v][b] = new Date(
                              (E.read_shift(4) - 2440588) * 864e5 +
                                E.read_shift(4)
                            );
                            break;
                          case "Y":
                            n[v][b] = E.read_shift(4, "i") / 1e4;
                            break;
                          case "O":
                            n[v][b] = -E.read_shift(-8, "f");
                            break;
                          case "B":
                            if (o && 8 == d[b].len) {
                              n[v][b] = E.read_shift(8, "f");
                              break;
                            }
                          case "G":
                          case "P":
                            E.l += d[b].len;
                            break;
                          case "0":
                            if ("_NullFlags" === d[b].name) break;
                          default:
                            throw Error(
                              "DBF Unsupported data type " + d[b].type
                            );
                        }
                      }
                    }
                    if (2 != s && a.l < a.length && 26 != a[a.l++])
                      throw Error(
                        "DBF EOF Marker missing " +
                          (a.l - 1) +
                          " of " +
                          a.length +
                          " " +
                          a[a.l - 1].toString(16)
                      );
                    return r && r.sheetRows && (n = n.slice(0, r.sheetRows)), n;
                  })(t, n),
                  n
                )
              );
            }
            var n = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
            return {
              versions: [2, 3, 48, 49, 131, 139, 140, 245],
              to_workbook: function (e, t) {
                try {
                  return rl(r(e, t), t);
                } catch (e) {
                  if (t && t.WTF) throw e;
                }
                return { SheetNames: [], Sheets: {} };
              },
              to_sheet: r,
              from_sheet: function (e, r) {
                var a = r || {};
                if ((+a.codepage >= 0 && Z(+a.codepage), "string" == a.type))
                  throw Error("Cannot write DBF to JS string");
                var s = t2(),
                  i = i5(e, { header: 1, raw: !0, cellDates: !0 }),
                  o = i[0],
                  c = i.slice(1),
                  l = 0,
                  f = 0,
                  h = 0,
                  u = 1;
                for (l = 0; l < o.length; ++l)
                  if (null != l) {
                    if (
                      (++h,
                      "number" == typeof o[l] && (o[l] = o[l].toString(10)),
                      "string" != typeof o[l])
                    )
                      throw Error(
                        "DBF Invalid column name " +
                          o[l] +
                          " |" +
                          typeof o[l] +
                          "|"
                      );
                    if (o.indexOf(o[l]) !== l) {
                      for (f = 0; f < 1024; ++f)
                        if (-1 == o.indexOf(o[l] + "_" + f)) {
                          o[l] += "_" + f;
                          break;
                        }
                    }
                  }
                var d = ri(e["!ref"]),
                  p = [];
                for (l = 0; l <= d.e.c - d.s.c; ++l) {
                  var m = [];
                  for (f = 0; f < c.length; ++f)
                    null != c[f][l] && m.push(c[f][l]);
                  if (0 == m.length || null == o[l]) {
                    p[l] = "?";
                    continue;
                  }
                  var g = "",
                    v = "";
                  for (f = 0; f < m.length; ++f) {
                    switch (typeof m[f]) {
                      case "number":
                        v = "B";
                        break;
                      case "string":
                      default:
                        v = "C";
                        break;
                      case "boolean":
                        v = "L";
                        break;
                      case "object":
                        v = m[f] instanceof Date ? "D" : "C";
                    }
                    if ("C" == (g = g && g != v ? "C" : v)) break;
                  }
                  (u += n[g] || 0), (p[l] = g);
                }
                var b = s.next(32);
                for (
                  b.write_shift(4, 318902576),
                    b.write_shift(4, c.length),
                    b.write_shift(2, 296 + 32 * h),
                    b.write_shift(2, u),
                    l = 0;
                  l < 4;
                  ++l
                )
                  b.write_shift(4, 0);
                for (
                  b.write_shift(4, 0 | ((+t[j] || 3) << 8)), l = 0, f = 0;
                  l < o.length;
                  ++l
                )
                  if (null != o[l]) {
                    var E = s.next(32),
                      S = (
                        o[l].slice(-10) +
                        "\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00"
                      ).slice(0, 11);
                    E.write_shift(1, S, "sbcs"),
                      E.write_shift(1, "?" == p[l] ? "C" : p[l], "sbcs"),
                      E.write_shift(4, f),
                      E.write_shift(1, n[p[l]] || 0),
                      E.write_shift(1, 0),
                      E.write_shift(1, 2),
                      E.write_shift(4, 0),
                      E.write_shift(1, 0),
                      E.write_shift(4, 0),
                      E.write_shift(4, 0),
                      (f += n[p[l]] || 0);
                  }
                var w = s.next(264);
                for (w.write_shift(4, 13), l = 0; l < 65; ++l)
                  w.write_shift(4, 0);
                for (l = 0; l < c.length; ++l) {
                  var C = s.next(u);
                  for (C.write_shift(1, 0), f = 0; f < o.length; ++f)
                    if (null != o[f])
                      switch (p[f]) {
                        case "L":
                          C.write_shift(
                            1,
                            null == c[l][f] ? 63 : c[l][f] ? 84 : 70
                          );
                          break;
                        case "B":
                          C.write_shift(8, c[l][f] || 0, "f");
                          break;
                        case "D":
                          c[l][f]
                            ? (C.write_shift(
                                4,
                                ("0000" + c[l][f].getFullYear()).slice(-4),
                                "sbcs"
                              ),
                              C.write_shift(
                                2,
                                ("00" + (c[l][f].getMonth() + 1)).slice(-2),
                                "sbcs"
                              ),
                              C.write_shift(
                                2,
                                ("00" + c[l][f].getDate()).slice(-2),
                                "sbcs"
                              ))
                            : C.write_shift(8, "00000000", "sbcs");
                          break;
                        case "C":
                          var B = String(c[l][f] || "");
                          for (
                            C.write_shift(1, B, "sbcs"), h = 0;
                            h < 250 - B.length;
                            ++h
                          )
                            C.write_shift(1, 32);
                      }
                }
                return s.next(1).write_shift(1, 26), s.end();
              },
            };
          })(),
          n2 = (function () {
            var e = {
                AA: "\xc0",
                BA: "\xc1",
                CA: "\xc2",
                DA: 195,
                HA: "\xc4",
                JA: 197,
                AE: "\xc8",
                BE: "\xc9",
                CE: "\xca",
                HE: "\xcb",
                AI: "\xcc",
                BI: "\xcd",
                CI: "\xce",
                HI: "\xcf",
                AO: "\xd2",
                BO: "\xd3",
                CO: "\xd4",
                DO: 213,
                HO: "\xd6",
                AU: "\xd9",
                BU: "\xda",
                CU: "\xdb",
                HU: "\xdc",
                Aa: "\xe0",
                Ba: "\xe1",
                Ca: "\xe2",
                Da: 227,
                Ha: "\xe4",
                Ja: 229,
                Ae: "\xe8",
                Be: "\xe9",
                Ce: "\xea",
                He: "\xeb",
                Ai: "\xec",
                Bi: "\xed",
                Ci: "\xee",
                Hi: "\xef",
                Ao: "\xf2",
                Bo: "\xf3",
                Co: "\xf4",
                Do: 245,
                Ho: "\xf6",
                Au: "\xf9",
                Bu: "\xfa",
                Cu: "\xfb",
                Hu: "\xfc",
                KC: "\xc7",
                Kc: "\xe7",
                q: "\xe6",
                z: "œ",
                a: "\xc6",
                j: "Œ",
                DN: 209,
                Dn: 241,
                Hy: 255,
                S: 169,
                c: 170,
                R: 174,
                B: 180,
                0: 176,
                1: 177,
                2: 178,
                3: 179,
                5: 181,
                6: 182,
                7: 183,
                Q: 185,
                k: 186,
                b: 208,
                i: 216,
                l: 222,
                s: 240,
                y: 248,
                "!": 161,
                '"': 162,
                "#": 163,
                "(": 164,
                "%": 165,
                "'": 167,
                "H ": 168,
                "+": 171,
                ";": 187,
                "<": 188,
                "=": 189,
                ">": 190,
                "?": 191,
                "{": 223,
              },
              t = RegExp(
                "\x1bN(" +
                  eT(e)
                    .join("|")
                    .replace(/\|\|\|/, "|\\||")
                    .replace(/([?()+])/g, "\\$1") +
                  "|\\|)",
                "gm"
              ),
              r = function (t, r) {
                var n = e[r];
                return "number" == typeof n ? en(n) : n;
              },
              n = function (e, t, r) {
                var n = ((t.charCodeAt(0) - 32) << 4) | (r.charCodeAt(0) - 48);
                return 59 == n ? e : en(n);
              };
            function a(e, a) {
              var s,
                i = e.split(/[\n\r]+/),
                o = -1,
                c = -1,
                l = 0,
                f = 0,
                h = [],
                u = [],
                d = null,
                p = {},
                m = [],
                g = [],
                v = [],
                b = 0;
              for (+a.codepage >= 0 && Z(+a.codepage); l !== i.length; ++l) {
                b = 0;
                var E,
                  S = i[l]
                    .trim()
                    .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n)
                    .replace(t, r),
                  w = S.replace(/;;/g, "\x00")
                    .split(";")
                    .map(function (e) {
                      return e.replace(/\u0000/g, ";");
                    }),
                  C = w[0];
                if (S.length > 0)
                  switch (C) {
                    case "ID":
                    case "E":
                    case "B":
                    case "O":
                      break;
                    case "P":
                      "P" == w[1].charAt(0) &&
                        u.push(S.slice(3).replace(/;;/g, ";"));
                      break;
                    case "C":
                      var B = !1,
                        T = !1,
                        x = !1,
                        _ = !1,
                        k = -1,
                        A = -1;
                      for (f = 1; f < w.length; ++f)
                        switch (w[f].charAt(0)) {
                          case "A":
                          case "G":
                            break;
                          case "X":
                            (c = parseInt(w[f].slice(1)) - 1), (T = !0);
                            break;
                          case "Y":
                            for (
                              o = parseInt(w[f].slice(1)) - 1,
                                T || (c = 0),
                                s = h.length;
                              s <= o;
                              ++s
                            )
                              h[s] = [];
                            break;
                          case "K":
                            '"' === (E = w[f].slice(1)).charAt(0)
                              ? (E = E.slice(1, E.length - 1))
                              : "TRUE" === E
                                ? (E = !0)
                                : "FALSE" === E
                                  ? (E = !1)
                                  : isNaN(eH(E))
                                    ? isNaN(eW(E).getDate()) || (E = eN(E))
                                    : ((E = eH(E)),
                                      null !== d &&
                                        ev.is_date(d) &&
                                        (E = eD(E))),
                              "undefined" != typeof cptable &&
                                "string" == typeof E &&
                                "string" != (a || {}).type &&
                                (a || {}).codepage &&
                                (E = cptable.utils.decode(a.codepage, E)),
                              (B = !0);
                            break;
                          case "E":
                            _ = !0;
                            var I = a2(w[f].slice(1), { r: o, c: c });
                            h[o][c] = [h[o][c], I];
                            break;
                          case "S":
                            (x = !0), (h[o][c] = [h[o][c], "S5S"]);
                            break;
                          case "R":
                            k = parseInt(w[f].slice(1)) - 1;
                            break;
                          case "C":
                            A = parseInt(w[f].slice(1)) - 1;
                            break;
                          default:
                            if (a && a.WTF) throw Error("SYLK bad record " + S);
                        }
                      if (
                        (B &&
                          (h[o][c] && 2 == h[o][c].length
                            ? (h[o][c][0] = E)
                            : (h[o][c] = E),
                          (d = null)),
                        x)
                      ) {
                        if (_)
                          throw Error(
                            "SYLK shared formula cannot have own formula"
                          );
                        var y = k > -1 && h[k][A];
                        if (!y || !y[1])
                          throw Error("SYLK shared formula cannot find base");
                        h[o][c][1] = a5(y[1], { r: o - k, c: c - A });
                      }
                      break;
                    case "F":
                      var R = 0;
                      for (f = 1; f < w.length; ++f)
                        switch (w[f].charAt(0)) {
                          case "X":
                            (c = parseInt(w[f].slice(1)) - 1), ++R;
                            break;
                          case "Y":
                            for (
                              o = parseInt(w[f].slice(1)) - 1, s = h.length;
                              s <= o;
                              ++s
                            )
                              h[s] = [];
                            break;
                          case "M":
                            b = parseInt(w[f].slice(1)) / 20;
                            break;
                          case "F":
                          case "G":
                          case "S":
                          case "D":
                          case "N":
                            break;
                          case "P":
                            d = u[parseInt(w[f].slice(1))];
                            break;
                          case "W":
                            for (
                              s = parseInt(
                                (v = w[f].slice(1).split(" "))[0],
                                10
                              );
                              s <= parseInt(v[1], 10);
                              ++s
                            )
                              (b = parseInt(v[2], 10)),
                                (g[s - 1] =
                                  0 === b ? { hidden: !0 } : { wch: b }),
                                ak(g[s - 1]);
                            break;
                          case "C":
                            g[(c = parseInt(w[f].slice(1)) - 1)] || (g[c] = {});
                            break;
                          case "R":
                            m[(o = parseInt(w[f].slice(1)) - 1)] || (m[o] = {}),
                              b > 0
                                ? ((m[o].hpt = b), (m[o].hpx = aI(b)))
                                : 0 === b && (m[o].hidden = !0);
                            break;
                          default:
                            if (a && a.WTF) throw Error("SYLK bad record " + S);
                        }
                      R < 1 && (d = null);
                      break;
                    default:
                      if (a && a.WTF) throw Error("SYLK bad record " + S);
                  }
              }
              return (
                m.length > 0 && (p["!rows"] = m),
                g.length > 0 && (p["!cols"] = g),
                a && a.sheetRows && (h = h.slice(0, a.sheetRows)),
                [h, p]
              );
            }
            function s(e, t) {
              var r = (function (e, t) {
                  switch (t.type) {
                    case "base64":
                      return a(ea.decode(e), t);
                    case "binary":
                      return a(e, t);
                    case "buffer":
                      return a(e.toString("binary"), t);
                    case "array":
                      return a(eM(e), t);
                  }
                  throw Error("Unrecognized type " + t.type);
                })(e, t),
                n = r[0],
                s = r[1],
                i = rh(n, t);
              return (
                eT(s).forEach(function (e) {
                  i[e] = s[e];
                }),
                i
              );
            }
            return (
              (e["|"] = 254),
              {
                to_workbook: function (e, t) {
                  return rl(s(e, t), t);
                },
                to_sheet: s,
                from_sheet: function (e, t) {
                  var r,
                    n = ["ID;PWXL;N;E"],
                    a = [],
                    s = ri(e["!ref"]),
                    i = Array.isArray(e);
                  n.push("P;PGeneral"),
                    n.push("F;P0;DG0G8;M255"),
                    e["!cols"] &&
                      (function (e, t) {
                        t.forEach(function (t, r) {
                          var n = "F;W" + (r + 1) + " " + (r + 1) + " ";
                          t.hidden
                            ? (n += "0")
                            : ("number" == typeof t.width &&
                                (t.wpx = aC(t.width)),
                              "number" == typeof t.wpx && (t.wch = aB(t.wpx)),
                              "number" == typeof t.wch &&
                                (n += Math.round(t.wch))),
                            " " != n.charAt(n.length - 1) && e.push(n);
                        });
                      })(n, e["!cols"]),
                    e["!rows"] &&
                      (function (e, t) {
                        t.forEach(function (t, r) {
                          var n = "F;";
                          t.hidden
                            ? (n += "M0;")
                            : t.hpt
                              ? (n += "M" + 20 * t.hpt + ";")
                              : t.hpx && (n += "M" + 20 * aA(t.hpx) + ";"),
                            n.length > 2 && e.push(n + "R" + (r + 1));
                        });
                      })(n, e["!rows"]),
                    n.push(
                      "B;Y" +
                        (s.e.r - s.s.r + 1) +
                        ";X" +
                        (s.e.c - s.s.c + 1) +
                        ";D" +
                        [s.s.c, s.s.r, s.e.c, s.e.r].join(" ")
                    );
                  for (var o = s.s.r; o <= s.e.r; ++o)
                    for (var c = s.s.c; c <= s.e.c; ++c) {
                      var l = rn({ r: o, c: c });
                      (r = i ? (e[o] || [])[c] : e[l]) &&
                        (null != r.v || (r.f && !r.F)) &&
                        a.push(
                          (function (e, t, r, n) {
                            var a = "C;Y" + (r + 1) + ";X" + (n + 1) + ";K";
                            switch (e.t) {
                              case "n":
                                (a += e.v || 0),
                                  e.f &&
                                    !e.F &&
                                    (a += ";E" + a3(e.f, { r: r, c: n }));
                                break;
                              case "b":
                                a += e.v ? "TRUE" : "FALSE";
                                break;
                              case "e":
                                a += e.w || e.v;
                                break;
                              case "d":
                                a += '"' + (e.w || e.v) + '"';
                                break;
                              case "s":
                                a += '"' + e.v.replace(/"/g, "") + '"';
                            }
                            return a;
                          })(r, 0, o, c, t)
                        );
                    }
                  return n.join("\r\n") + "\r\n" + a.join("\r\n") + "\r\nE\r\n";
                },
              }
            );
          })(),
          n4 = (function () {
            var e, t;
            function r(e, t) {
              for (
                var r = e.split("\n"), n = -1, a = -1, s = 0, i = [];
                s !== r.length;
                ++s
              ) {
                if ("BOT" === r[s].trim()) {
                  (i[++n] = []), (a = 0);
                  continue;
                }
                if (!(n < 0)) {
                  var o = r[s].trim().split(","),
                    c = o[0],
                    l = o[1],
                    f = r[++s].trim();
                  switch (+c) {
                    case -1:
                      if ("BOT" === f) {
                        (i[++n] = []), (a = 0);
                        continue;
                      }
                      if ("EOD" !== f)
                        throw Error("Unrecognized DIF special command " + f);
                      break;
                    case 0:
                      "TRUE" === f
                        ? (i[n][a] = !0)
                        : "FALSE" === f
                          ? (i[n][a] = !1)
                          : isNaN(eH(l))
                            ? isNaN(eW(l).getDate())
                              ? (i[n][a] = l)
                              : (i[n][a] = eN(l))
                            : (i[n][a] = eH(l)),
                        ++a;
                      break;
                    case 1:
                      (f = f.slice(1, f.length - 1)),
                        (i[n][a++] = "" !== f ? f : null);
                  }
                  if ("EOD" === f) break;
                }
              }
              return t && t.sheetRows && (i = i.slice(0, t.sheetRows)), i;
            }
            function n(e, t) {
              return rh(
                (function (e, t) {
                  switch (t.type) {
                    case "base64":
                      return r(ea.decode(e), t);
                    case "binary":
                      return r(e, t);
                    case "buffer":
                      return r(e.toString("binary"), t);
                    case "array":
                      return r(eM(e), t);
                  }
                  throw Error("Unrecognized type " + t.type);
                })(e, t),
                t
              );
            }
            return {
              to_workbook: function (e, t) {
                return rl(n(e, t), t);
              },
              to_sheet: n,
              from_sheet:
                ((e = function (e, t, r, n, a) {
                  e.push(t),
                    e.push(r + "," + n),
                    e.push('"' + a.replace(/"/g, '""') + '"');
                }),
                (t = function (e, t, r, n) {
                  e.push(t + "," + r),
                    e.push(1 == t ? '"' + n.replace(/"/g, '""') + '"' : n);
                }),
                function (r) {
                  var n,
                    a = [],
                    s = ri(r["!ref"]),
                    i = Array.isArray(r);
                  e(a, "TABLE", 0, 1, "sheetjs"),
                    e(a, "VECTORS", 0, s.e.r - s.s.r + 1, ""),
                    e(a, "TUPLES", 0, s.e.c - s.s.c + 1, ""),
                    e(a, "DATA", 0, 0, "");
                  for (var o = s.s.r; o <= s.e.r; ++o) {
                    t(a, -1, 0, "BOT");
                    for (var c = s.s.c; c <= s.e.c; ++c) {
                      var l = rn({ r: o, c: c });
                      if (!(n = i ? (r[o] || [])[c] : r[l])) {
                        t(a, 1, 0, "");
                        continue;
                      }
                      switch (n.t) {
                        case "n":
                          var f = n.w;
                          f || null == n.v || (f = n.v),
                            null == f
                              ? !n.f || n.F
                                ? t(a, 1, 0, "")
                                : t(a, 1, 0, "=" + n.f)
                              : t(a, 0, f, "V");
                          break;
                        case "b":
                          t(a, 0, n.v ? 1 : 0, n.v ? "TRUE" : "FALSE");
                          break;
                        case "s":
                          t(a, 1, 0, isNaN(n.v) ? n.v : '="' + n.v + '"');
                          break;
                        case "d":
                          n.w ||
                            (n.w = ev.format(
                              n.z || ev._table[14],
                              eI(eN(n.v))
                            )),
                            t(a, 0, n.w, "V");
                          break;
                        default:
                          t(a, 1, 0, "");
                      }
                    }
                  }
                  return t(a, -1, 0, "EOD"), a.join("\r\n");
                }),
            };
          })(),
          n3 = (function () {
            function e(e) {
              return e
                .replace(/\\/g, "\\b")
                .replace(/:/g, "\\c")
                .replace(/\n/g, "\\n");
            }
            function t(e, t) {
              return rh(
                (function (e, t) {
                  for (
                    var r = e.split("\n"), n = -1, a = -1, s = 0, i = [];
                    s !== r.length;
                    ++s
                  ) {
                    var o = r[s].trim().split(":");
                    if ("cell" === o[0]) {
                      var c = rr(o[1]);
                      if (i.length <= c.r)
                        for (n = i.length; n <= c.r; ++n) i[n] || (i[n] = []);
                      switch (((n = c.r), (a = c.c), o[2])) {
                        case "t":
                          i[n][a] = o[3]
                            .replace(/\\b/g, "\\")
                            .replace(/\\c/g, ":")
                            .replace(/\\n/g, "\n");
                          break;
                        case "v":
                          i[n][a] = +o[3];
                          break;
                        case "vtf":
                          var l = o[o.length - 1];
                        case "vtc":
                          "nl" === o[3]
                            ? (i[n][a] = !!+o[4])
                            : (i[n][a] = +o[4]),
                            "vtf" == o[2] && (i[n][a] = [i[n][a], l]);
                      }
                    }
                  }
                  return t && t.sheetRows && (i = i.slice(0, t.sheetRows)), i;
                })(e, t),
                t
              );
            }
            var r =
              "--SocialCalcSpreadsheetControlSave\nContent-type: text/plain; charset=UTF-8\n";
            return {
              to_workbook: function (e, r) {
                return rl(t(e, r), r);
              },
              to_sheet: t,
              from_sheet: function (t) {
                return [
                  "socialcalc:version:1.5\nMIME-Version: 1.0\nContent-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave",
                  r,
                  "# SocialCalc Spreadsheet Control Save\npart:sheet",
                  r,
                  (function (t) {
                    if (!t || !t["!ref"]) return "";
                    for (
                      var r,
                        n = [],
                        a = [],
                        s = "",
                        i = ra(t["!ref"]),
                        o = Array.isArray(t),
                        c = i.s.r;
                      c <= i.e.r;
                      ++c
                    )
                      for (var l = i.s.c; l <= i.e.c; ++l)
                        if (
                          ((s = rn({ r: c, c: l })),
                          (r = o ? (t[c] || [])[l] : t[s]) &&
                            null != r.v &&
                            "z" !== r.t)
                        ) {
                          switch (((a = ["cell", s, "t"]), r.t)) {
                            case "s":
                            case "str":
                              a.push(e(r.v));
                              break;
                            case "n":
                              r.f
                                ? ((a[2] = "vtf"),
                                  (a[3] = "n"),
                                  (a[4] = r.v),
                                  (a[5] = e(r.f)))
                                : ((a[2] = "v"), (a[3] = r.v));
                              break;
                            case "b":
                              (a[2] = "vt" + (r.f ? "f" : "c")),
                                (a[3] = "nl"),
                                (a[4] = r.v ? "1" : "0"),
                                (a[5] = e(r.f || (r.v ? "TRUE" : "FALSE")));
                              break;
                            case "d":
                              var f = eI(eN(r.v));
                              (a[2] = "vtc"),
                                (a[3] = "nd"),
                                (a[4] = "" + f),
                                (a[5] =
                                  r.w || ev.format(r.z || ev._table[14], f));
                              break;
                            case "e":
                              continue;
                          }
                          n.push(a.join(":"));
                        }
                    return (
                      n.push(
                        "sheet:c:" +
                          (i.e.c - i.s.c + 1) +
                          ":r:" +
                          (i.e.r - i.s.r + 1) +
                          ":tvf:1"
                      ),
                      n.push("valueformat:1:text-wiki"),
                      n.join("\n")
                    );
                  })(t),
                  "--SocialCalcSpreadsheetControlSave--",
                ].join("\n");
              },
            };
          })(),
          n5 = (function () {
            function e(e, t, r, n, a) {
              a.raw
                ? (t[r][n] = e)
                : "" === e ||
                  ("TRUE" === e
                    ? (t[r][n] = !0)
                    : "FALSE" === e
                      ? (t[r][n] = !1)
                      : isNaN(eH(e))
                        ? isNaN(eW(e).getDate())
                          ? (t[r][n] = e)
                          : (t[r][n] = eN(e))
                        : (t[r][n] = eH(e)));
            }
            var t = { 44: ",", 9: "	", 59: ";" },
              r = { 44: 3, 9: 2, 59: 1 };
            function n(e) {
              for (var n = {}, a = !1, s = 0, i = 0; s < e.length; ++s)
                34 == (i = e.charCodeAt(s))
                  ? (a = !a)
                  : !a && i in t && (n[i] = (n[i] || 0) + 1);
              for (s in ((i = []), n))
                Object.prototype.hasOwnProperty.call(n, s) && i.push([n[s], s]);
              if (!i.length)
                for (s in (n = r))
                  Object.prototype.hasOwnProperty.call(n, s) &&
                    i.push([n[s], s]);
              return (
                i.sort(function (e, t) {
                  return e[0] - t[0] || r[e[1]] - r[t[1]];
                }),
                t[i.pop()[1]]
              );
            }
            function a(t, r) {
              var a,
                s = "",
                i = "string" == r.type ? [0, 0, 0, 0] : i$(t, r);
              switch (r.type) {
                case "base64":
                  s = ea.decode(t);
                  break;
                case "binary":
                case "string":
                  s = t;
                  break;
                case "buffer":
                  s =
                    65001 == r.codepage
                      ? t.toString("utf8")
                      : r.codepage && "undefined" != typeof cptable
                        ? cptable.utils.decode(r.codepage, t)
                        : t.toString("binary");
                  break;
                case "array":
                  s = eM(t);
                  break;
                default:
                  throw Error("Unrecognized type " + r.type);
              }
              return (239 == i[0] && 187 == i[1] && 191 == i[2]
                ? (s = ts(s.slice(3)))
                : "binary" == r.type &&
                  "undefined" != typeof cptable &&
                  r.codepage &&
                  (s = cptable.utils.decode(
                    r.codepage,
                    cptable.utils.encode(28591, s)
                  )),
              "socialcalc:version:" == s.slice(0, 19))
                ? n3.to_sheet("string" == r.type ? s : ts(s), r)
                : ((a = s),
                  !(r && r.PRN) ||
                  "sep=" == a.slice(0, 4) ||
                  a.indexOf("	") >= 0 ||
                  a.indexOf(",") >= 0 ||
                  a.indexOf(";") >= 0
                    ? (function (e, t) {
                        var r,
                          a = t || {},
                          s = "",
                          i = a.dense ? [] : {},
                          o = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
                        "sep=" == e.slice(0, 4)
                          ? 13 == e.charCodeAt(5) && 10 == e.charCodeAt(6)
                            ? ((s = e.charAt(4)), (e = e.slice(7)))
                            : 13 == e.charCodeAt(5) || 10 == e.charCodeAt(5)
                              ? ((s = e.charAt(4)), (e = e.slice(6)))
                              : (s = n(e.slice(0, 1024)))
                          : (s = n(e.slice(0, 1024)));
                        var c = 0,
                          l = 0,
                          f = 0,
                          h = 0,
                          u = 0,
                          d = s.charCodeAt(0),
                          p = !1,
                          m = 0,
                          g = e.charCodeAt(0);
                        e = e.replace(/\r\n/gm, "\n");
                        var v =
                          null != a.dateNF
                            ? RegExp(
                                "^" +
                                  ("number" == typeof (r = a.dateNF)
                                    ? ev._table[r]
                                    : r
                                  ).replace(ew, "(\\d+)") +
                                  "$"
                              )
                            : null;
                        function b() {
                          var t = e.slice(h, u),
                            r = {};
                          if (
                            ('"' == t.charAt(0) &&
                              '"' == t.charAt(t.length - 1) &&
                              (t = t.slice(1, -1).replace(/""/g, '"')),
                            0 === t.length)
                          )
                            r.t = "z";
                          else if (a.raw) (r.t = "s"), (r.v = t);
                          else if (0 === t.trim().length)
                            (r.t = "s"), (r.v = t);
                          else if (61 == t.charCodeAt(0))
                            34 == t.charCodeAt(1) &&
                            34 == t.charCodeAt(t.length - 1)
                              ? ((r.t = "s"),
                                (r.v = t.slice(2, -1).replace(/""/g, '"')))
                              : 1 != t.length
                                ? ((r.t = "n"), (r.f = t.slice(1)))
                                : ((r.t = "s"), (r.v = t));
                          else if ("TRUE" == t) (r.t = "b"), (r.v = !0);
                          else if ("FALSE" == t) (r.t = "b"), (r.v = !1);
                          else if (isNaN((f = eH(t)))) {
                            if (!isNaN(eW(t).getDate()) || (v && t.match(v))) {
                              r.z = a.dateNF || ev._table[14];
                              var n,
                                s,
                                p,
                                b,
                                E,
                                S,
                                w,
                                C,
                                B,
                                T,
                                x = 0;
                              v &&
                                t.match(v) &&
                                ((n = a.dateNF),
                                (s = t.match(v) || []),
                                (p = -1),
                                (b = -1),
                                (E = -1),
                                (S = -1),
                                (w = -1),
                                (C = -1),
                                (n.match(ew) || []).forEach(function (e, t) {
                                  var r = parseInt(s[t + 1], 10);
                                  switch (e.toLowerCase().charAt(0)) {
                                    case "y":
                                      p = r;
                                      break;
                                    case "d":
                                      E = r;
                                      break;
                                    case "h":
                                      S = r;
                                      break;
                                    case "s":
                                      C = r;
                                      break;
                                    case "m":
                                      S >= 0 ? (w = r) : (b = r);
                                  }
                                }),
                                C >= 0 &&
                                  -1 == w &&
                                  b >= 0 &&
                                  ((w = b), (b = -1)),
                                7 ==
                                  (B =
                                    (
                                      "" +
                                      (p >= 0 ? p : new Date().getFullYear())
                                    ).slice(-4) +
                                    "-" +
                                    ("00" + (b >= 1 ? b : 1)).slice(-2) +
                                    "-" +
                                    ("00" + (E >= 1 ? E : 1)).slice(-2))
                                    .length && (B = "0" + B),
                                8 == B.length && (B = "20" + B),
                                (T =
                                  ("00" + (S >= 0 ? S : 0)).slice(-2) +
                                  ":" +
                                  ("00" + (w >= 0 ? w : 0)).slice(-2) +
                                  ":" +
                                  ("00" + (C >= 0 ? C : 0)).slice(-2)),
                                (t =
                                  -1 == S && -1 == w && -1 == C
                                    ? B
                                    : -1 == p && -1 == b && -1 == E
                                      ? T
                                      : B + "T" + T),
                                (x = 1)),
                                a.cellDates
                                  ? ((r.t = "d"), (r.v = eN(t, x)))
                                  : ((r.t = "n"), (r.v = eI(eN(t, x)))),
                                !1 !== a.cellText &&
                                  (r.w = ev.format(
                                    r.z,
                                    r.v instanceof Date ? eI(r.v) : r.v
                                  )),
                                a.cellNF || delete r.z;
                            } else (r.t = "s"), (r.v = t);
                          } else
                            (r.t = "n"),
                              !1 !== a.cellText && (r.w = t),
                              (r.v = f);
                          if (
                            ("z" == r.t ||
                              (a.dense
                                ? (i[c] || (i[c] = []), (i[c][l] = r))
                                : (i[rn({ c: l, r: c })] = r)),
                            (h = u + 1),
                            (g = e.charCodeAt(h)),
                            o.e.c < l && (o.e.c = l),
                            o.e.r < c && (o.e.r = c),
                            m == d)
                          )
                            ++l;
                          else if (
                            ((l = 0), ++c, a.sheetRows && a.sheetRows <= c)
                          )
                            return !0;
                        }
                        e: for (; u < e.length; ++u)
                          switch ((m = e.charCodeAt(u))) {
                            case 34:
                              34 === g && (p = !p);
                              break;
                            case d:
                            case 10:
                            case 13:
                              if (!p && b()) break e;
                          }
                        return u - h > 0 && b(), (i["!ref"] = rs(o)), i;
                      })(a, r)
                    : rh(
                        (function (t, r) {
                          var n = r || {},
                            a = [];
                          if (!t || 0 === t.length) return a;
                          for (
                            var s = t.split(/[\r\n]/), i = s.length - 1;
                            i >= 0 && 0 === s[i].length;
                          )
                            --i;
                          for (var o = 10, c = 0, l = 0; l <= i; ++l)
                            -1 == (c = s[l].indexOf(" "))
                              ? (c = s[l].length)
                              : c++,
                              (o = Math.max(o, c));
                          for (l = 0; l <= i; ++l) {
                            a[l] = [];
                            var f = 0;
                            for (
                              e(s[l].slice(0, o).trim(), a, l, f, n), f = 1;
                              f <= (s[l].length - o) / 10 + 1;
                              ++f
                            )
                              e(
                                s[l].slice(o + (f - 1) * 10, o + 10 * f).trim(),
                                a,
                                l,
                                f,
                                n
                              );
                          }
                          return (
                            n.sheetRows && (a = a.slice(0, n.sheetRows)), a
                          );
                        })(a, r),
                        r
                      ));
            }
            return {
              to_workbook: function (e, t) {
                return rl(a(e, t), t);
              },
              to_sheet: a,
              from_sheet: function (e) {
                for (
                  var t,
                    r = [],
                    n = ri(e["!ref"]),
                    a = Array.isArray(e),
                    s = n.s.r;
                  s <= n.e.r;
                  ++s
                ) {
                  for (var i = [], o = n.s.c; o <= n.e.c; ++o) {
                    var c = rn({ r: s, c: o });
                    if (!(t = a ? (e[s] || [])[o] : e[c]) || null == t.v) {
                      i.push("          ");
                      continue;
                    }
                    for (
                      var l = (t.w || (rc(t), t.w) || "").slice(0, 10);
                      l.length < 10;
                    )
                      l += " ";
                    i.push(l + (0 === o ? " " : ""));
                  }
                  r.push(i.join(""));
                }
                return r.join("\n");
              },
            };
          })(),
          n6 = (function () {
            function e(e, t) {
              if (!e) return e;
              var r = t || {},
                n = r.dense ? [] : {},
                a = "Sheet1",
                s = 0,
                c = {},
                l = [a],
                f = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
                h = r.sheetRows || 0;
              if (2 == e[2]) r.Enum = i;
              else if (26 == e[2]) r.Enum = o;
              else if (14 == e[2]) (r.Enum = o), (r.qpro = !0), (e.l = 0);
              else throw Error("Unrecognized LOTUS BOF " + e[2]);
              return (
                !(function (e, t, r) {
                  if (e) {
                    tZ(e, e.l || 0);
                    for (var n = r.Enum || i; e.l < e.length; ) {
                      var a = e.read_shift(2),
                        s = n[a] || n[255],
                        o = e.read_shift(2),
                        c = e.l + o,
                        l = (s.f || tq)(e, o, r);
                      if (((e.l = c), t(l, s.n, a))) return;
                    }
                  }
                })(
                  e,
                  function (t, i, o) {
                    if (2 == e[2])
                      switch (o) {
                        case 0:
                          (r.vers = t), t >= 4096 && (r.qpro = !0);
                          break;
                        case 6:
                          f = t;
                          break;
                        case 15:
                          r.qpro || (t[1].v = t[1].v.slice(1));
                        case 13:
                        case 14:
                        case 16:
                        case 51:
                          14 == o &&
                            (112 & t[2]) == 112 &&
                            (15 & t[2]) > 1 &&
                            (15 & t[2]) < 15 &&
                            ((t[1].z = r.dateNF || ev._table[14]),
                            r.cellDates &&
                              ((t[1].t = "d"), (t[1].v = eD(t[1].v)))),
                            r.dense
                              ? (n[t[0].r] || (n[t[0].r] = []),
                                (n[t[0].r][t[0].c] = t[1]))
                              : (n[rn(t[0])] = t[1]);
                      }
                    else
                      switch (o) {
                        case 22:
                          t[1].v = t[1].v.slice(1);
                        case 23:
                        case 24:
                        case 25:
                        case 37:
                        case 39:
                        case 40:
                          if (
                            (t[3] > s &&
                              ((n["!ref"] = rs(f)),
                              (c[a] = n),
                              (n = r.dense ? [] : {}),
                              (f = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                              (a = "Sheet" + ((s = t[3]) + 1)),
                              l.push(a)),
                            h > 0 && t[0].r >= h)
                          )
                            break;
                          r.dense
                            ? (n[t[0].r] || (n[t[0].r] = []),
                              (n[t[0].r][t[0].c] = t[1]))
                            : (n[rn(t[0])] = t[1]),
                            f.e.c < t[0].c && (f.e.c = t[0].c),
                            f.e.r < t[0].r && (f.e.r = t[0].r);
                      }
                  },
                  r
                ),
                (n["!ref"] = rs(f)),
                (c[a] = n),
                { SheetNames: l, Sheets: c }
              );
            }
            function t(e, t, r) {
              var n = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
              return (
                r.qpro && 20768 != r.vers
                  ? ((n[0].c = e.read_shift(1)),
                    e.l++,
                    (n[0].r = e.read_shift(2)),
                    (e.l += 2))
                  : ((n[2] = e.read_shift(1)),
                    (n[0].c = e.read_shift(2)),
                    (n[0].r = e.read_shift(2))),
                n
              );
            }
            function r(e, r, n) {
              var a = e.l + r,
                s = t(e, r, n);
              if (((s[1].t = "s"), 20768 == n.vers)) {
                e.l++;
                var i = e.read_shift(1);
                return (s[1].v = e.read_shift(i, "utf8")), s;
              }
              return (
                n.qpro && e.l++, (s[1].v = e.read_shift(a - e.l, "cstr")), s
              );
            }
            function n(e) {
              var t = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
              return (
                (t[0].r = e.read_shift(2)),
                (t[3] = e[e.l++]),
                (t[0].c = e[e.l++]),
                t
              );
            }
            function a(e, t) {
              var r = n(e, t),
                a = e.read_shift(4),
                s = e.read_shift(4),
                i = e.read_shift(2);
              if (65535 == i) return (r[1].v = 0), r;
              var o = 32768 & i;
              return (
                (i = (32767 & i) - 16446),
                (r[1].v =
                  (2 * o - 1) *
                  ((i > 0 ? s << i : s >>> -i) +
                    (i > -32 ? a << (i + 32) : a >>> -(i + 32)))),
                r
              );
            }
            function s(e, t) {
              var r = n(e, t),
                a = e.read_shift(8, "f");
              return (r[1].v = a), r;
            }
            var i = {
                0: { n: "BOF", f: nw },
                1: { n: "EOF" },
                2: { n: "CALCMODE" },
                3: { n: "CALCORDER" },
                4: { n: "SPLIT" },
                5: { n: "SYNC" },
                6: {
                  n: "RANGE",
                  f: function (e) {
                    var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
                    return (
                      (t.s.c = e.read_shift(2)),
                      (t.s.r = e.read_shift(2)),
                      (t.e.c = e.read_shift(2)),
                      (t.e.r = e.read_shift(2)),
                      65535 == t.s.c && (t.s.c = t.e.c = t.s.r = t.e.r = 0),
                      t
                    );
                  },
                },
                7: { n: "WINDOW1" },
                8: { n: "COLW1" },
                9: { n: "WINTWO" },
                10: { n: "COLW2" },
                11: { n: "NAME" },
                12: { n: "BLANK" },
                13: {
                  n: "INTEGER",
                  f: function (e, r, n) {
                    var a = t(e, r, n);
                    return (a[1].v = e.read_shift(2, "i")), a;
                  },
                },
                14: {
                  n: "NUMBER",
                  f: function (e, r, n) {
                    var a = t(e, r, n);
                    return (a[1].v = e.read_shift(8, "f")), a;
                  },
                },
                15: { n: "LABEL", f: r },
                16: {
                  n: "FORMULA",
                  f: function (e, r, n) {
                    var a = e.l + r,
                      s = t(e, r, n);
                    if (((s[1].v = e.read_shift(8, "f")), n.qpro)) e.l = a;
                    else {
                      var i = e.read_shift(2);
                      e.l += i;
                    }
                    return s;
                  },
                },
                24: { n: "TABLE" },
                25: { n: "ORANGE" },
                26: { n: "PRANGE" },
                27: { n: "SRANGE" },
                28: { n: "FRANGE" },
                29: { n: "KRANGE1" },
                32: { n: "HRANGE" },
                35: { n: "KRANGE2" },
                36: { n: "PROTEC" },
                37: { n: "FOOTER" },
                38: { n: "HEADER" },
                39: { n: "SETUP" },
                40: { n: "MARGINS" },
                41: { n: "LABELFMT" },
                42: { n: "TITLES" },
                43: { n: "SHEETJS" },
                45: { n: "GRAPH" },
                46: { n: "NGRAPH" },
                47: { n: "CALCCOUNT" },
                48: { n: "UNFORMATTED" },
                49: { n: "CURSORW12" },
                50: { n: "WINDOW" },
                51: { n: "STRING", f: r },
                55: { n: "PASSWORD" },
                56: { n: "LOCKED" },
                60: { n: "QUERY" },
                61: { n: "QUERYNAME" },
                62: { n: "PRINT" },
                63: { n: "PRINTNAME" },
                64: { n: "GRAPH2" },
                65: { n: "GRAPHNAME" },
                66: { n: "ZOOM" },
                67: { n: "SYMSPLIT" },
                68: { n: "NSROWS" },
                69: { n: "NSCOLS" },
                70: { n: "RULER" },
                71: { n: "NNAME" },
                72: { n: "ACOMM" },
                73: { n: "AMACRO" },
                74: { n: "PARSE" },
                255: { n: "", f: tq },
              },
              o = {
                0: { n: "BOF" },
                1: { n: "EOF" },
                3: { n: "??" },
                4: { n: "??" },
                5: { n: "??" },
                6: { n: "??" },
                7: { n: "??" },
                9: { n: "??" },
                10: { n: "??" },
                11: { n: "??" },
                12: { n: "??" },
                14: { n: "??" },
                15: { n: "??" },
                16: { n: "??" },
                17: { n: "??" },
                18: { n: "??" },
                19: { n: "??" },
                21: { n: "??" },
                22: {
                  n: "LABEL16",
                  f: function (e, t) {
                    var r = n(e, t);
                    return (
                      (r[1].t = "s"), (r[1].v = e.read_shift(t - 4, "cstr")), r
                    );
                  },
                },
                23: { n: "NUMBER17", f: a },
                24: {
                  n: "NUMBER18",
                  f: function (e, t) {
                    var r = n(e, t);
                    r[1].v = e.read_shift(2);
                    var a = r[1].v >> 1;
                    if (1 & r[1].v)
                      switch (7 & a) {
                        case 1:
                          a = (a >> 3) * 500;
                          break;
                        case 2:
                          a = (a >> 3) / 20;
                          break;
                        case 4:
                          a = (a >> 3) / 2e3;
                          break;
                        case 6:
                          a = (a >> 3) / 16;
                          break;
                        case 7:
                          a = (a >> 3) / 64;
                          break;
                        default:
                          throw "unknown NUMBER_18 encoding " + (7 & a);
                      }
                    return (r[1].v = a), r;
                  },
                },
                25: {
                  n: "FORMULA19",
                  f: function (e, t) {
                    var r = a(e, 14);
                    return (e.l += t - 14), r;
                  },
                },
                26: { n: "??" },
                27: { n: "??" },
                28: { n: "??" },
                29: { n: "??" },
                30: { n: "??" },
                31: { n: "??" },
                33: { n: "??" },
                37: {
                  n: "NUMBER25",
                  f: function (e, t) {
                    var r = n(e, t),
                      a = e.read_shift(4);
                    return (r[1].v = a >> 6), r;
                  },
                },
                39: { n: "NUMBER27", f: s },
                40: {
                  n: "FORMULA28",
                  f: function (e, t) {
                    var r = s(e, 14);
                    return (e.l += t - 10), r;
                  },
                },
                255: { n: "", f: tq },
              };
            return {
              to_workbook: function (t, r) {
                switch (r.type) {
                  case "base64":
                    return e(ef(ea.decode(t)), r);
                  case "binary":
                    return e(ef(t), r);
                  case "buffer":
                  case "array":
                    return e(t, r);
                }
                throw "Unsupported type " + r.type;
              },
            };
          })(),
          n8 = (function () {
            var e = tf("t"),
              t = tf("rPr");
            function r(r) {
              var n = r.match(e);
              if (!n) return { t: "s", v: "" };
              var a = { t: "s", v: e6(n[1]) },
                s = r.match(t);
              return (
                s &&
                  (a.s = (function (e) {
                    var t = {},
                      r = e.match(eq),
                      n = 0,
                      a = !1;
                    if (r)
                      for (; n != r.length; ++n) {
                        var s = e2(r[n]);
                        switch (s[0].replace(/\w*:/g, "")) {
                          case "<condense":
                          case "<extend":
                            break;
                          case "<shadow":
                            if (!s.val) break;
                          case "<shadow>":
                          case "<shadow/>":
                            t.shadow = 1;
                            break;
                          case "</shadow>":
                            break;
                          case "<charset":
                            if ("1" == s.val) break;
                            t.cp = Q[parseInt(s.val, 10)];
                            break;
                          case "<outline":
                            if (!s.val) break;
                          case "<outline>":
                          case "<outline/>":
                            t.outline = 1;
                            break;
                          case "</outline>":
                            break;
                          case "<rFont":
                            t.name = s.val;
                            break;
                          case "<sz":
                            t.sz = s.val;
                            break;
                          case "<strike":
                            if (!s.val) break;
                          case "<strike>":
                          case "<strike/>":
                            t.strike = 1;
                            break;
                          case "</strike>":
                            break;
                          case "<u":
                            if (!s.val) break;
                            switch (s.val) {
                              case "double":
                                t.uval = "double";
                                break;
                              case "singleAccounting":
                                t.uval = "single-accounting";
                                break;
                              case "doubleAccounting":
                                t.uval = "double-accounting";
                            }
                          case "<u>":
                          case "<u/>":
                            t.u = 1;
                            break;
                          case "</u>":
                            break;
                          case "<b":
                            if ("0" == s.val) break;
                          case "<b>":
                          case "<b/>":
                            t.b = 1;
                            break;
                          case "</b>":
                            break;
                          case "<i":
                            if ("0" == s.val) break;
                          case "<i>":
                          case "<i/>":
                            t.i = 1;
                            break;
                          case "</i>":
                          case "<scheme":
                          case "<extLst":
                          case "<extLst>":
                          case "</extLst>":
                            break;
                          case "<color":
                            s.rgb && (t.color = s.rgb.slice(2, 8));
                            break;
                          case "<family":
                            t.family = s.val;
                            break;
                          case "<vertAlign":
                            t.valign = s.val;
                            break;
                          case "<ext":
                            a = !0;
                            break;
                          case "</ext>":
                            a = !1;
                            break;
                          default:
                            if (47 !== s[0].charCodeAt(1) && !a)
                              throw Error("Unrecognized rich format " + s[0]);
                        }
                      }
                    return t;
                  })(s[1])),
                a
              );
            }
            var n = /<(?:\w+:)?r>/g,
              a = /<\/(?:\w+:)?r>/;
            return function (e) {
              return e
                .replace(n, "")
                .split(a)
                .map(r)
                .filter(function (e) {
                  return e.v;
                });
            };
          })(),
          n7 = (function () {
            var e = /(\r\n|\n)/g;
            function t(t) {
              var r,
                n,
                a,
                s,
                i,
                o = [[], t.v, []];
              return t.v
                ? (t.s &&
                    ((r = t.s),
                    (n = o[0]),
                    (a = o[2]),
                    (s = []),
                    r.u && s.push("text-decoration: underline;"),
                    r.uval && s.push("text-underline-style:" + r.uval + ";"),
                    r.sz && s.push("font-size:" + r.sz + "pt;"),
                    r.outline && s.push("text-effect: outline;"),
                    r.shadow && s.push("text-shadow: auto;"),
                    n.push('<span style="' + s.join("") + '">'),
                    r.b && (n.push("<b>"), a.push("</b>")),
                    r.i && (n.push("<i>"), a.push("</i>")),
                    r.strike && (n.push("<s>"), a.push("</s>")),
                    "superscript" == (i = r.valign || "") || "super" == i
                      ? (i = "sup")
                      : "subscript" == i && (i = "sub"),
                    "" != i && (n.push("<" + i + ">"), a.push("</" + i + ">")),
                    a.push("</span>")),
                  o[0].join("") + o[1].replace(e, "<br/>") + o[2].join(""))
                : "";
            }
            return function (e) {
              return e.map(t).join("");
            };
          })(),
          n9 = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,
          ae = /<(?:\w+:)?r>/,
          at = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
        function ar(e, t) {
          var r = !t || t.cellHTML,
            n = {};
          return e
            ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/)
                ? ((n.t = e6(
                    ts(
                      e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] ||
                        ""
                    )
                  )),
                  (n.r = ts(e)),
                  r && (n.h = tr(n.t)))
                : e.match(ae) &&
                  ((n.r = ts(e)),
                  (n.t = e6(
                    ts(
                      (e.replace(at, "").match(n9) || [])
                        .join("")
                        .replace(eq, "")
                    )
                  )),
                  r && (n.h = n7(n8(n.r)))),
              n)
            : { t: "" };
        }
        var an = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,
          aa = /<(?:\w+:)?(?:si|sstItem)>/g,
          as = /<\/(?:\w+:)?(?:si|sstItem)>/;
        r$.SST =
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
        var ai = /^\s|\s$|[\t\n\r]/;
        function ao(e, t) {
          if (!t.bookSST) return "";
          var r = [eJ];
          r[r.length] = tE("sst", null, {
            xmlns: tw.main[0],
            count: e.Count,
            uniqueCount: e.Unique,
          });
          for (var n = 0; n != e.length; ++n)
            if (null != e[n]) {
              var a = e[n],
                s = "<si>";
              a.r
                ? (s += a.r)
                : ((s += "<t"),
                  a.t || (a.t = ""),
                  a.t.match(ai) && (s += ' xml:space="preserve"'),
                  (s += ">" + e9(a.t) + "</t>")),
                (s += "</si>"),
                (r[r.length] = s);
            }
          return (
            r.length > 2 &&
              ((r[r.length] = "</sst>"), (r[1] = r[1].replace("/>", ">"))),
            r.join("")
          );
        }
        var ac = function (e, t) {
          var r = !1;
          return (
            null == t && ((r = !0), (t = t1(15 + 4 * e.t.length))),
            t.write_shift(1, 0),
            rp(e.t, t),
            r ? t.slice(0, t.l) : t
          );
        };
        function al(e) {
          var t,
            r = t2();
          t4(
            r,
            "BrtBeginSst",
            (t || (t = t1(8)),
            t.write_shift(4, e.Count),
            t.write_shift(4, e.Unique),
            t)
          );
          for (var n = 0; n < e.length; ++n) t4(r, "BrtSSTItem", ac(e[n]));
          return t4(r, "BrtEndSst"), r.end();
        }
        function af(e) {
          if ("undefined" != typeof cptable) return cptable.utils.encode(j, e);
          for (var t = [], r = e.split(""), n = 0; n < r.length; ++n)
            t[n] = r[n].charCodeAt(0);
          return t;
        }
        function ah(e, t) {
          var r = {};
          return (
            (r.Major = e.read_shift(2)),
            (r.Minor = e.read_shift(2)),
            t >= 4 && (e.l += t - 4),
            r
          );
        }
        function au(e, t) {
          var r = e.l + t,
            n = {};
          (n.Flags = 63 & e.read_shift(4)),
            (e.l += 4),
            (n.AlgID = e.read_shift(4));
          var a = !1;
          switch (n.AlgID) {
            case 26126:
            case 26127:
            case 26128:
              a = 36 == n.Flags;
              break;
            case 26625:
              a = 4 == n.Flags;
              break;
            case 0:
              a = 16 == n.Flags || 4 == n.Flags || 36 == n.Flags;
              break;
            default:
              throw "Unrecognized encryption algorithm: " + n.AlgID;
          }
          if (!a) throw Error("Encryption Flags/AlgID mismatch");
          return (
            (n.AlgIDHash = e.read_shift(4)),
            (n.KeySize = e.read_shift(4)),
            (n.ProviderType = e.read_shift(4)),
            (e.l += 8),
            (n.CSPName = e.read_shift((r - e.l) >> 1, "utf16le")),
            (e.l = r),
            n
          );
        }
        function ad(e, t) {
          var r = {},
            n = e.l + t;
          return (
            (e.l += 4),
            (r.Salt = e.slice(e.l, e.l + 16)),
            (e.l += 16),
            (r.Verifier = e.slice(e.l, e.l + 16)),
            (e.l += 16),
            e.read_shift(4),
            (r.VerifierHash = e.slice(e.l, n)),
            (e.l = n),
            r
          );
        }
        function ap(e) {
          var t,
            r,
            n = 0,
            a = af(e),
            s = a.length + 1;
          for (r = 1, (t = ec(s))[0] = a.length; r != s; ++r) t[r] = a[r - 1];
          for (r = s - 1; r >= 0; --r)
            n = (((16384 & n) == 0 ? 0 : 1) | ((n << 1) & 32767)) ^ t[r];
          return 52811 ^ n;
        }
        var am =
            ((m = [
              187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0,
            ]),
            (g = [
              57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657,
              54287, 34041, 10252, 43370, 20163,
            ]),
            (v = [
              44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170,
              64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812,
              11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369,
              41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341,
              19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502,
              43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184,
              47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648,
              1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114,
              2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128,
              28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420,
              35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314,
              18628,
            ]),
            (b = function (e, t) {
              var r;
              return (((r = e ^ t) / 2) | (128 * r)) & 255;
            }),
            (E = function (e) {
              for (
                var t = g[e.length - 1], r = 104, n = e.length - 1;
                n >= 0;
                --n
              )
                for (var a = e[n], s = 0; 7 != s; ++s)
                  64 & a && (t ^= v[r]), (a *= 2), --r;
              return t;
            }),
            function (e) {
              for (
                var t,
                  r,
                  n,
                  a = af(e),
                  s = E(a),
                  i = a.length,
                  o = ec(16),
                  c = 0;
                16 != c;
                ++c
              )
                o[c] = 0;
              for (
                (1 & i) == 1 &&
                ((t = s >> 8),
                (o[i] = b(187, t)),
                --i,
                (t = 255 & s),
                (r = a[a.length - 1]),
                (o[i] = b(r, t)));
                i > 0;
              )
                --i,
                  (t = s >> 8),
                  (o[i] = b(a[i], t)),
                  --i,
                  (t = 255 & s),
                  (o[i] = b(a[i], t));
              for (i = 15, n = 15 - a.length; n > 0; )
                (t = s >> 8),
                  (o[i] = b(m[n], t)),
                  --i,
                  --n,
                  (t = 255 & s),
                  (o[i] = b(a[i], t)),
                  --i,
                  --n;
              return o;
            }),
          ag = function (e, t, r, n, a) {
            var s, i;
            for (a || (a = t), n || (n = am(e)), s = 0; s != t.length; ++s)
              (i = (((i = t[s] ^ n[r]) >> 5) | (i << 3)) & 255),
                (a[s] = i),
                ++r;
            return [a, r, n];
          },
          av = function (e) {
            var t = 0,
              r = am(e);
            return function (e) {
              var n = ag("", e, t, r);
              return (t = n[1]), n[0];
            };
          },
          ab = (function () {
            function e(e, r) {
              switch (r.type) {
                case "base64":
                  return t(ea.decode(e), r);
                case "binary":
                  return t(e, r);
                case "buffer":
                  return t(e.toString("binary"), r);
                case "array":
                  return t(eM(e), r);
              }
              throw Error("Unrecognized type " + r.type);
            }
            function t(e, t) {
              var r = (t || {}).dense ? [] : {};
              if (!e.match(/\\trowd/)) throw Error("RTF missing table");
              return (
                (r["!ref"] = rs({ s: { c: 0, r: 0 }, e: { c: 0, r: 0 } })), r
              );
            }
            return {
              to_workbook: function (t, r) {
                return rl(e(t, r), r);
              },
              to_sheet: e,
              from_sheet: function (e) {
                for (
                  var t,
                    r = ["{\\rtf1\\ansi"],
                    n = ri(e["!ref"]),
                    a = Array.isArray(e),
                    s = n.s.r;
                  s <= n.e.r;
                  ++s
                ) {
                  r.push("\\trowd\\trautofit1");
                  for (var i = n.s.c; i <= n.e.c; ++i)
                    r.push("\\cellx" + (i + 1));
                  for (r.push("\\pard\\intbl"), i = n.s.c; i <= n.e.c; ++i) {
                    var o = rn({ r: s, c: i });
                    (t = a ? (e[s] || [])[i] : e[o]) &&
                      (null != t.v || (t.f && !t.F)) &&
                      (r.push(" " + (t.w || (rc(t), t.w))), r.push("\\cell"));
                  }
                  r.push("\\pard\\intbl\\row");
                }
                return r.join("") + "}";
              },
            };
          })();
        function aE(e) {
          for (var t = 0, r = 1; 3 != t; ++t)
            r = 256 * r + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
          return r.toString(16).toUpperCase().slice(1);
        }
        function aS(e, t) {
          if (0 === t) return e;
          var r,
            n = (function (e) {
              var t = e[0] / 255,
                r = e[1] / 255,
                n = e[2] / 255,
                a = Math.max(t, r, n),
                s = Math.min(t, r, n),
                i = a - s;
              if (0 === i) return [0, 0, t];
              var o = 0,
                c = 0,
                l = a + s;
              switch (((c = i / (l > 1 ? 2 - l : l)), a)) {
                case t:
                  o = ((r - n) / i + 6) % 6;
                  break;
                case r:
                  o = (n - t) / i + 2;
                  break;
                case n:
                  o = (t - r) / i + 4;
              }
              return [o / 6, c, l / 2];
            })([
              parseInt(
                (r = e.slice("#" === e[0] ? 1 : 0).slice(0, 6)).slice(0, 2),
                16
              ),
              parseInt(r.slice(2, 4), 16),
              parseInt(r.slice(4, 6), 16),
            ]);
          return (
            t < 0 ? (n[2] = n[2] * (1 + t)) : (n[2] = 1 - (1 - n[2]) * (1 - t)),
            aE(
              (function (e) {
                var t,
                  r = e[0],
                  n = e[1],
                  a = e[2],
                  s = 2 * n * (a < 0.5 ? a : 1 - a),
                  i = a - s / 2,
                  o = [i, i, i],
                  c = 6 * r;
                if (0 !== n)
                  switch (0 | c) {
                    case 0:
                    case 6:
                      (t = s * c), (o[0] += s), (o[1] += t);
                      break;
                    case 1:
                      (t = s * (2 - c)), (o[0] += t), (o[1] += s);
                      break;
                    case 2:
                      (t = s * (c - 2)), (o[1] += s), (o[2] += t);
                      break;
                    case 3:
                      (t = s * (4 - c)), (o[1] += t), (o[2] += s);
                      break;
                    case 4:
                      (t = s * (c - 4)), (o[2] += s), (o[0] += t);
                      break;
                    case 5:
                      (t = s * (6 - c)), (o[2] += t), (o[0] += s);
                  }
                for (var l = 0; 3 != l; ++l) o[l] = Math.round(255 * o[l]);
                return o;
              })(n)
            )
          );
        }
        var aw = 6;
        function aC(e) {
          return Math.floor((e + Math.round(128 / aw) / 256) * aw);
        }
        function aB(e) {
          return Math.floor(((e - 5) / aw) * 100 + 0.5) / 100;
        }
        function aT(e) {
          return Math.round(((e * aw + 5) / aw) * 256) / 256;
        }
        function ax(e) {
          return aT(aB(aC(e)));
        }
        function a_(e) {
          var t = Math.abs(e - ax(e)),
            r = aw;
          if (t > 0.005)
            for (aw = 1; aw < 15; ++aw)
              Math.abs(e - ax(e)) <= t && ((t = Math.abs(e - ax(e))), (r = aw));
          aw = r;
        }
        function ak(e) {
          e.width
            ? ((e.wpx = aC(e.width)), (e.wch = aB(e.wpx)), (e.MDW = aw))
            : e.wpx
              ? ((e.wch = aB(e.wpx)), (e.width = aT(e.wch)), (e.MDW = aw))
              : "number" == typeof e.wch &&
                ((e.width = aT(e.wch)), (e.wpx = aC(e.width)), (e.MDW = aw)),
            e.customWidth && delete e.customWidth;
        }
        function aA(e) {
          return (96 * e) / 96;
        }
        function aI(e) {
          return (96 * e) / 96;
        }
        var ay = {
            None: "none",
            Solid: "solid",
            Gray50: "mediumGray",
            Gray75: "darkGray",
            Gray25: "lightGray",
            HorzStripe: "darkHorizontal",
            VertStripe: "darkVertical",
            ReverseDiagStripe: "darkDown",
            DiagStripe: "darkUp",
            DiagCross: "darkGrid",
            ThickDiagCross: "darkTrellis",
            ThinHorzStripe: "lightHorizontal",
            ThinVertStripe: "lightVertical",
            ThinReverseDiagStripe: "lightDown",
            ThinHorzCross: "lightGrid",
          },
          aR = ["numFmtId", "fillId", "fontId", "borderId", "xfId"],
          aF = [
            "applyAlignment",
            "applyBorder",
            "applyFill",
            "applyFont",
            "applyNumberFormat",
            "applyProtection",
            "pivotButton",
            "quotePrefix",
          ],
          aD =
            ((S = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/),
            (w = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/),
            (C = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/),
            (B = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/),
            (T = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/),
            function (e, t, r) {
              var n,
                a = {};
              return (
                e &&
                  ((n = (e = e
                    .replace(/<!--([\s\S]*?)-->/gm, "")
                    .replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "")).match(S)) &&
                    (function (e, t, r) {
                      t.NumberFmt = [];
                      for (var n = eT(ev._table), a = 0; a < n.length; ++a)
                        t.NumberFmt[n[a]] = ev._table[n[a]];
                      var s = e[0].match(eq);
                      if (s)
                        for (a = 0; a < s.length; ++a) {
                          var i = e2(s[a]);
                          switch (e4(i[0])) {
                            case "<numFmts":
                            case "</numFmts>":
                            case "<numFmts/>":
                            case "<numFmts>":
                            case "</numFmt>":
                              break;
                            case "<numFmt":
                              var o = e6(ts(i.formatCode)),
                                c = parseInt(i.numFmtId, 10);
                              if (((t.NumberFmt[c] = o), c > 0)) {
                                if (c > 392) {
                                  for (
                                    c = 392;
                                    c > 60 && null != t.NumberFmt[c];
                                    --c
                                  );
                                  t.NumberFmt[c] = o;
                                }
                                ev.load(o, c);
                              }
                              break;
                            default:
                              if (r.WTF)
                                throw Error(
                                  "unrecognized " + i[0] + " in numFmts"
                                );
                          }
                        }
                    })(n, a, r),
                  (n = e.match(B)) &&
                    (function (e, t, r, n) {
                      t.Fonts = [];
                      var a = {},
                        s = !1;
                      (e[0].match(eq) || []).forEach(function (e) {
                        var i = e2(e);
                        switch (e4(i[0])) {
                          case "<fonts":
                          case "<fonts>":
                          case "</fonts>":
                          case "<font":
                          case "<font>":
                          case "<name/>":
                          case "</name>":
                          case "<sz/>":
                          case "</sz>":
                          case "<vertAlign/>":
                          case "</vertAlign>":
                          case "<family/>":
                          case "</family>":
                          case "<scheme/>":
                          case "</scheme>":
                          case "<color/>":
                          case "</color>":
                          case "<extLst":
                          case "<extLst>":
                          case "</extLst>":
                            break;
                          case "</font>":
                          case "<font/>":
                            t.Fonts.push(a), (a = {});
                            break;
                          case "<name":
                            i.val && (a.name = ts(i.val));
                            break;
                          case "<b":
                            a.bold = i.val ? ta(i.val) : 1;
                            break;
                          case "<b/>":
                            a.bold = 1;
                            break;
                          case "<i":
                            a.italic = i.val ? ta(i.val) : 1;
                            break;
                          case "<i/>":
                            a.italic = 1;
                            break;
                          case "<u":
                            switch (i.val) {
                              case "none":
                                a.underline = 0;
                                break;
                              case "single":
                                a.underline = 1;
                                break;
                              case "double":
                                a.underline = 2;
                                break;
                              case "singleAccounting":
                                a.underline = 33;
                                break;
                              case "doubleAccounting":
                                a.underline = 34;
                            }
                            break;
                          case "<u/>":
                            a.underline = 1;
                            break;
                          case "<strike":
                            a.strike = i.val ? ta(i.val) : 1;
                            break;
                          case "<strike/>":
                            a.strike = 1;
                            break;
                          case "<outline":
                            a.outline = i.val ? ta(i.val) : 1;
                            break;
                          case "<outline/>":
                            a.outline = 1;
                            break;
                          case "<shadow":
                            a.shadow = i.val ? ta(i.val) : 1;
                            break;
                          case "<shadow/>":
                            a.shadow = 1;
                            break;
                          case "<condense":
                            a.condense = i.val ? ta(i.val) : 1;
                            break;
                          case "<condense/>":
                            a.condense = 1;
                            break;
                          case "<extend":
                            a.extend = i.val ? ta(i.val) : 1;
                            break;
                          case "<extend/>":
                            a.extend = 1;
                            break;
                          case "<sz":
                            i.val && (a.sz = +i.val);
                            break;
                          case "<vertAlign":
                            i.val && (a.vertAlign = i.val);
                            break;
                          case "<family":
                            i.val && (a.family = parseInt(i.val, 10));
                            break;
                          case "<scheme":
                            i.val && (a.scheme = i.val);
                            break;
                          case "<charset":
                            if ("1" == i.val) break;
                            i.codepage = Q[parseInt(i.val, 10)];
                            break;
                          case "<color":
                            if (
                              (a.color || (a.color = {}),
                              i.auto && (a.color.auto = ta(i.auto)),
                              i.rgb)
                            )
                              a.color.rgb = i.rgb.slice(-6);
                            else if (i.indexed) {
                              a.color.index = parseInt(i.indexed, 10);
                              var o = rL[a.color.index];
                              if ((81 == a.color.index && (o = rL[1]), !o))
                                throw Error(e);
                              a.color.rgb =
                                o[0].toString(16) +
                                o[1].toString(16) +
                                o[2].toString(16);
                            } else
                              i.theme &&
                                ((a.color.theme = parseInt(i.theme, 10)),
                                i.tint && (a.color.tint = parseFloat(i.tint)),
                                i.theme &&
                                  r.themeElements &&
                                  r.themeElements.clrScheme &&
                                  (a.color.rgb = aS(
                                    r.themeElements.clrScheme[a.color.theme]
                                      .rgb,
                                    a.color.tint || 0
                                  )));
                            break;
                          case "<AlternateContent":
                          case "<ext":
                            s = !0;
                            break;
                          case "</AlternateContent>":
                          case "</ext>":
                            s = !1;
                            break;
                          default:
                            if (n && n.WTF && !s)
                              throw Error("unrecognized " + i[0] + " in fonts");
                        }
                      });
                    })(n, a, t, r),
                  (n = e.match(C)) &&
                    (function (e, t, r, n) {
                      t.Fills = [];
                      var a = {},
                        s = !1;
                      (e[0].match(eq) || []).forEach(function (e) {
                        var r = e2(e);
                        switch (e4(r[0])) {
                          case "<fills":
                          case "<fills>":
                          case "</fills>":
                          case "</fill>":
                          case "<gradientFill>":
                          case "<patternFill/>":
                          case "</patternFill>":
                          case "<bgColor/>":
                          case "</bgColor>":
                          case "<fgColor/>":
                          case "</fgColor>":
                          case "<stop":
                          case "<stop/>":
                          case "</stop>":
                          case "<color":
                          case "<color/>":
                          case "</color>":
                          case "<extLst":
                          case "<extLst>":
                          case "</extLst>":
                            break;
                          case "<fill>":
                          case "<fill":
                          case "<fill/>":
                            (a = {}), t.Fills.push(a);
                            break;
                          case "<gradientFill":
                          case "</gradientFill>":
                            t.Fills.push(a), (a = {});
                            break;
                          case "<patternFill":
                          case "<patternFill>":
                            r.patternType && (a.patternType = r.patternType);
                            break;
                          case "<bgColor":
                            a.bgColor || (a.bgColor = {}),
                              r.indexed &&
                                (a.bgColor.indexed = parseInt(r.indexed, 10)),
                              r.theme &&
                                (a.bgColor.theme = parseInt(r.theme, 10)),
                              r.tint && (a.bgColor.tint = parseFloat(r.tint)),
                              r.rgb && (a.bgColor.rgb = r.rgb.slice(-6));
                            break;
                          case "<fgColor":
                            a.fgColor || (a.fgColor = {}),
                              r.theme &&
                                (a.fgColor.theme = parseInt(r.theme, 10)),
                              r.tint && (a.fgColor.tint = parseFloat(r.tint)),
                              null != r.rgb &&
                                (a.fgColor.rgb = r.rgb.slice(-6));
                            break;
                          case "<ext":
                            s = !0;
                            break;
                          case "</ext>":
                            s = !1;
                            break;
                          default:
                            if (n && n.WTF && !s)
                              throw Error("unrecognized " + r[0] + " in fills");
                        }
                      });
                    })(n, a, 0, r),
                  (n = e.match(T)) &&
                    (function (e, t, r, n) {
                      t.Borders = [];
                      var a = {},
                        s = !1;
                      (e[0].match(eq) || []).forEach(function (e) {
                        var r = e2(e);
                        switch (e4(r[0])) {
                          case "<borders":
                          case "<borders>":
                          case "</borders>":
                          case "</border>":
                          case "<left/>":
                          case "<left":
                          case "<left>":
                          case "</left>":
                          case "<right/>":
                          case "<right":
                          case "<right>":
                          case "</right>":
                          case "<top/>":
                          case "<top":
                          case "<top>":
                          case "</top>":
                          case "<bottom/>":
                          case "<bottom":
                          case "<bottom>":
                          case "</bottom>":
                          case "<diagonal":
                          case "<diagonal>":
                          case "<diagonal/>":
                          case "</diagonal>":
                          case "<horizontal":
                          case "<horizontal>":
                          case "<horizontal/>":
                          case "</horizontal>":
                          case "<vertical":
                          case "<vertical>":
                          case "<vertical/>":
                          case "</vertical>":
                          case "<start":
                          case "<start>":
                          case "<start/>":
                          case "</start>":
                          case "<end":
                          case "<end>":
                          case "<end/>":
                          case "</end>":
                          case "<color":
                          case "<color>":
                          case "<color/>":
                          case "</color>":
                          case "<extLst":
                          case "<extLst>":
                          case "</extLst>":
                            break;
                          case "<border":
                          case "<border>":
                          case "<border/>":
                            (a = {}),
                              r.diagonalUp && (a.diagonalUp = ta(r.diagonalUp)),
                              r.diagonalDown &&
                                (a.diagonalDown = ta(r.diagonalDown)),
                              t.Borders.push(a);
                            break;
                          case "<ext":
                            s = !0;
                            break;
                          case "</ext>":
                            s = !1;
                            break;
                          default:
                            if (n && n.WTF && !s)
                              throw Error(
                                "unrecognized " + r[0] + " in borders"
                              );
                        }
                      });
                    })(n, a, 0, r),
                  (n = e.match(w)) &&
                    (function (e, t, r) {
                      t.CellXf = [];
                      var n,
                        a = !1;
                      (e[0].match(eq) || []).forEach(function (e) {
                        var s = e2(e),
                          i = 0;
                        switch (e4(s[0])) {
                          case "<cellXfs":
                          case "<cellXfs>":
                          case "<cellXfs/>":
                          case "</cellXfs>":
                          case "</xf>":
                          case "</alignment>":
                          case "<protection":
                          case "</protection>":
                          case "<protection/>":
                          case "<extLst":
                          case "<extLst>":
                          case "</extLst>":
                            break;
                          case "<xf":
                          case "<xf/>":
                            for (n = s, delete n[0], i = 0; i < aR.length; ++i)
                              n[aR[i]] && (n[aR[i]] = parseInt(n[aR[i]], 10));
                            for (i = 0; i < aF.length; ++i)
                              n[aF[i]] && (n[aF[i]] = ta(n[aF[i]]));
                            if (t.NumberFmt && n.numFmtId > 392) {
                              for (i = 392; i > 60; --i)
                                if (t.NumberFmt[n.numFmtId] == t.NumberFmt[i]) {
                                  n.numFmtId = i;
                                  break;
                                }
                            }
                            t.CellXf.push(n);
                            break;
                          case "<alignment":
                          case "<alignment/>":
                            var o = {};
                            s.vertical && (o.vertical = s.vertical),
                              s.horizontal && (o.horizontal = s.horizontal),
                              null != s.textRotation &&
                                (o.textRotation = s.textRotation),
                              s.indent && (o.indent = s.indent),
                              s.wrapText && (o.wrapText = ta(s.wrapText)),
                              (n.alignment = o);
                            break;
                          case "<AlternateContent":
                          case "<ext":
                            a = !0;
                            break;
                          case "</AlternateContent>":
                          case "</ext>":
                            a = !1;
                            break;
                          default:
                            if (r && r.WTF && !a)
                              throw Error(
                                "unrecognized " + s[0] + " in cellXfs"
                              );
                        }
                      });
                    })(n, a, r)),
                a
              );
            }),
          aO = tE("styleSheet", null, { xmlns: tw.main[0], "xmlns:vt": tw.vt });
        function aP(e, t) {
          var r,
            n,
            a,
            s,
            i,
            o = [eJ, aO];
          return (
            e.SSF &&
              null !=
                ((r = e.SSF),
                (n = ["<numFmts>"]),
                [
                  [5, 8],
                  [23, 26],
                  [41, 44],
                  [50, 392],
                ].forEach(function (e) {
                  for (var t = e[0]; t <= e[1]; ++t)
                    null != r[t] &&
                      (n[n.length] = tE("numFmt", null, {
                        numFmtId: t,
                        formatCode: e9(r[t]),
                      }));
                }),
                (i =
                  1 === n.length
                    ? ""
                    : ((n[n.length] = "</numFmts>"),
                      (n[0] = tE("numFmts", null, {
                        count: n.length - 2,
                      }).replace("/>", ">")),
                      n.join("")))) &&
              (o[o.length] = i),
            (o[o.length] =
              '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>'),
            (o[o.length] =
              '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>'),
            (o[o.length] =
              '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>'),
            (o[o.length] =
              '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'),
            (a = t.cellXfs),
            ((s = [])[s.length] = tE("cellXfs", null)),
            a.forEach(function (e) {
              s[s.length] = tE("xf", null, e);
            }),
            (s[s.length] = "</cellXfs>"),
            (i =
              2 === s.length
                ? ""
                : ((s[0] = tE("cellXfs", null, { count: s.length - 2 }).replace(
                    "/>",
                    ">"
                  )),
                  s.join(""))) && (o[o.length] = i),
            (o[o.length] =
              '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>'),
            (o[o.length] = '<dxfs count="0"/>'),
            (o[o.length] =
              '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>'),
            o.length > 2 &&
              ((o[o.length] = "</styleSheet>"),
              (o[1] = o[1].replace("/>", ">"))),
            o.join("")
          );
        }
        r$.STY =
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
        var aN = e_([
          "none",
          "solid",
          "mediumGray",
          "darkGray",
          "lightGray",
          "darkHorizontal",
          "darkVertical",
          "darkDown",
          "darkUp",
          "darkGrid",
          "darkTrellis",
          "lightHorizontal",
          "lightVertical",
          "lightDown",
          "lightUp",
          "lightGrid",
          "lightTrellis",
          "gray125",
          "gray0625",
        ]);
        function aM(e, t) {
          t || (t = t1(84));
          var r = aN[e.patternType];
          null == r && (r = 40), t.write_shift(4, r);
          var n = 0;
          if (40 != r)
            for (rA({ auto: 1 }, t), rA({ auto: 1 }, t); n < 12; ++n)
              t.write_shift(4, 0);
          else {
            for (; n < 4; ++n) t.write_shift(4, 0);
            for (; n < 12; ++n) t.write_shift(4, 0);
          }
          return t.length > t.l ? t.slice(0, t.l) : t;
        }
        function aL(e, t, r) {
          return (
            r || (r = t1(16)),
            r.write_shift(2, t || 0),
            r.write_shift(2, e.numFmtId || 0),
            r.write_shift(2, 0),
            r.write_shift(2, 0),
            r.write_shift(2, 0),
            r.write_shift(1, 0),
            r.write_shift(1, 0),
            r.write_shift(1, 0),
            r.write_shift(1, 0),
            r.write_shift(1, 0),
            r.write_shift(1, 0),
            r
          );
        }
        function aU(e, t) {
          return (
            t || (t = t1(10)),
            t.write_shift(1, 0),
            t.write_shift(1, 0),
            t.write_shift(4, 0),
            t.write_shift(4, 0),
            t
          );
        }
        function aH(e, t) {
          var r,
            n,
            a,
            s,
            i,
            o,
            c,
            l,
            f,
            h,
            u,
            d,
            p,
            m = t2();
          return (
            t4(m, "BrtBeginStyleSheet"),
            !(function (e, t) {
              if (t) {
                var r = 0;
                [
                  [5, 8],
                  [23, 26],
                  [41, 44],
                  [50, 392],
                ].forEach(function (e) {
                  for (var n = e[0]; n <= e[1]; ++n) null != t[n] && ++r;
                }),
                  0 != r &&
                    (t4(e, "BrtBeginFmts", ru(r)),
                    [
                      [5, 8],
                      [23, 26],
                      [41, 44],
                      [50, 392],
                    ].forEach(function (r) {
                      for (var n = r[0]; n <= r[1]; ++n)
                        null != t[n] &&
                          t4(
                            e,
                            "BrtFmt",
                            (function (e, t, r) {
                              r || (r = t1(6 + 4 * t.length)),
                                r.write_shift(2, e),
                                rp(t, r);
                              var n = r.length > r.l ? r.slice(0, r.l) : r;
                              return null == r.l && (r.l = r.length), n;
                            })(n, t[n])
                          );
                    }),
                    t4(e, "BrtEndFmts"));
              }
            })(m, e.SSF),
            t4((r = m), "BrtBeginFonts", ru(1)),
            t4(
              r,
              "BrtFont",
              ((n = {
                sz: 12,
                color: { theme: 1 },
                name: "Calibri",
                family: 2,
                scheme: "minor",
              }),
              a || (a = t1(153)),
              a.write_shift(2, 20 * n.sz),
              (s = a) || (s = t1(2)),
              (i =
                (n.italic ? 2 : 0) |
                (n.strike ? 8 : 0) |
                (n.outline ? 16 : 0) |
                (n.shadow ? 32 : 0) |
                (n.condense ? 64 : 0) |
                (n.extend ? 128 : 0)),
              s.write_shift(1, i),
              s.write_shift(1, 0),
              a.write_shift(2, n.bold ? 700 : 400),
              (o = 0),
              "superscript" == n.vertAlign
                ? (o = 1)
                : "subscript" == n.vertAlign && (o = 2),
              a.write_shift(2, o),
              a.write_shift(1, n.underline || 0),
              a.write_shift(1, n.family || 0),
              a.write_shift(1, n.charset || 0),
              a.write_shift(1, 0),
              rA(n.color, a),
              (c = 0),
              "major" == n.scheme && (c = 1),
              "minor" == n.scheme && (c = 2),
              a.write_shift(1, c),
              rp(n.name, a),
              a.length > a.l ? a.slice(0, a.l) : a)
            ),
            t4(r, "BrtEndFonts"),
            t4(m, "BrtBeginFills", ru(2)),
            t4(m, "BrtFill", aM({ patternType: "none" })),
            t4(m, "BrtFill", aM({ patternType: "gray125" })),
            t4(m, "BrtEndFills"),
            t4((l = m), "BrtBeginBorders", ru(1)),
            t4(
              l,
              "BrtBorder",
              (f || (f = t1(51)),
              f.write_shift(1, 0),
              aU(null, f),
              aU(null, f),
              aU(null, f),
              aU(null, f),
              aU(null, f),
              f.length > f.l ? f.slice(0, f.l) : f)
            ),
            t4(l, "BrtEndBorders"),
            t4(m, "BrtBeginCellStyleXFs", ru(1)),
            t4(
              m,
              "BrtXF",
              aL({ numFmtId: 0, fontId: 0, fillId: 0, borderId: 0 }, 65535)
            ),
            t4(m, "BrtEndCellStyleXFs"),
            t4(m, "BrtBeginCellXFs", ru((h = t.cellXfs).length)),
            h.forEach(function (e) {
              t4(m, "BrtXF", aL(e, 0));
            }),
            t4(m, "BrtEndCellXFs"),
            t4(m, "BrtBeginStyles", ru(1)),
            t4(
              m,
              "BrtStyle",
              ((u = { xfId: 0, builtinId: 0, name: "Normal" }),
              d || (d = t1(52)),
              d.write_shift(4, u.xfId),
              d.write_shift(2, 1),
              d.write_shift(1, +u.builtinId),
              d.write_shift(1, 0),
              rw(u.name || "", d),
              d.length > d.l ? d.slice(0, d.l) : d)
            ),
            t4(m, "BrtEndStyles"),
            t4(m, "BrtBeginDXFs", ru(0)),
            t4(m, "BrtEndDXFs"),
            t4(
              m,
              "BrtBeginTableStyles",
              ((p = t1(2052)).write_shift(4, 0),
              rw("TableStyleMedium9", p),
              rw("PivotStyleMedium4", p),
              p.length > p.l ? p.slice(0, p.l) : p)
            ),
            t4(m, "BrtEndTableStyles"),
            t4(m, "BrtEndStyleSheet"),
            m.end()
          );
        }
        r$.THEME =
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
        var aW = [
          "</a:lt1>",
          "</a:dk1>",
          "</a:lt2>",
          "</a:dk2>",
          "</a:accent1>",
          "</a:accent2>",
          "</a:accent3>",
          "</a:accent4>",
          "</a:accent5>",
          "</a:accent6>",
          "</a:hlink>",
          "</a:folHlink>",
        ];
        function aV(e, t, r) {
          t.themeElements.clrScheme = [];
          var n = {};
          (e[0].match(eq) || []).forEach(function (e) {
            var a = e2(e);
            switch (a[0]) {
              case "<a:clrScheme":
              case "</a:clrScheme>":
                break;
              case "<a:srgbClr":
                n.rgb = a.val;
                break;
              case "<a:sysClr":
                n.rgb = a.lastClr;
                break;
              case "<a:dk1>":
              case "</a:dk1>":
              case "<a:lt1>":
              case "</a:lt1>":
              case "<a:dk2>":
              case "</a:dk2>":
              case "<a:lt2>":
              case "</a:lt2>":
              case "<a:accent1>":
              case "</a:accent1>":
              case "<a:accent2>":
              case "</a:accent2>":
              case "<a:accent3>":
              case "</a:accent3>":
              case "<a:accent4>":
              case "</a:accent4>":
              case "<a:accent5>":
              case "</a:accent5>":
              case "<a:accent6>":
              case "</a:accent6>":
              case "<a:hlink>":
              case "</a:hlink>":
              case "<a:folHlink>":
              case "</a:folHlink>":
                "/" === a[0].charAt(1)
                  ? ((t.themeElements.clrScheme[aW.indexOf(a[0])] = n),
                    (n = {}))
                  : (n.name = a[0].slice(3, a[0].length - 1));
                break;
              default:
                if (r && r.WTF)
                  throw Error("Unrecognized " + a[0] + " in clrScheme");
            }
          });
        }
        function aX() {}
        function aG() {}
        var az = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,
          aj = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,
          a$ = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/,
          aK = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
        function aY(e, t) {
          if (!e || 0 === e.length) return aY(aQ());
          var r,
            n,
            a,
            s = {};
          if (!(a = e.match(aK)))
            throw Error("themeElements not found in theme");
          return (
            (r = a[0]),
            (s.themeElements = {}),
            [
              ["clrScheme", az, aV],
              ["fontScheme", aj, aX],
              ["fmtScheme", a$, aG],
            ].forEach(function (e) {
              if (!(n = r.match(e[1])))
                throw Error(e[0] + " not found in themeElements");
              e[2](n, s, t);
            }),
            (s.raw = e),
            s
          );
        }
        function aQ(e, t) {
          if (t && t.themeXLSX) return t.themeXLSX;
          if (e && "string" == typeof e.raw) return e.raw;
          var r = [eJ];
          return (
            (r[r.length] =
              '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">'),
            (r[r.length] = "<a:themeElements>"),
            (r[r.length] = '<a:clrScheme name="Office">'),
            (r[r.length] =
              '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>'),
            (r[r.length] =
              '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>'),
            (r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>'),
            (r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>'),
            (r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>'),
            (r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>'),
            (r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>'),
            (r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>'),
            (r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>'),
            (r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>'),
            (r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>'),
            (r[r.length] =
              '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>'),
            (r[r.length] = "</a:clrScheme>"),
            (r[r.length] = '<a:fontScheme name="Office">'),
            (r[r.length] = "<a:majorFont>"),
            (r[r.length] = '<a:latin typeface="Cambria"/>'),
            (r[r.length] = '<a:ea typeface=""/>'),
            (r[r.length] = '<a:cs typeface=""/>'),
            (r[r.length] =
              '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
            (r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
            (r[r.length] = '<a:font script="Hans" typeface="宋体"/>'),
            (r[r.length] = '<a:font script="Hant" typeface="新細明體"/>'),
            (r[r.length] =
              '<a:font script="Arab" typeface="Times New Roman"/>'),
            (r[r.length] =
              '<a:font script="Hebr" typeface="Times New Roman"/>'),
            (r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
            (r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
            (r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
            (r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
            (r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>'),
            (r[r.length] = '<a:font script="Knda" typeface="Tunga"/>'),
            (r[r.length] = '<a:font script="Guru" typeface="Raavi"/>'),
            (r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
            (r[r.length] =
              '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
            (r[r.length] =
              '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
            (r[r.length] =
              '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
            (r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
            (r[r.length] = '<a:font script="Deva" typeface="Mangal"/>'),
            (r[r.length] = '<a:font script="Telu" typeface="Gautami"/>'),
            (r[r.length] = '<a:font script="Taml" typeface="Latha"/>'),
            (r[r.length] =
              '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
            (r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
            (r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
            (r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
            (r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
            (r[r.length] =
              '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
            (r[r.length] =
              '<a:font script="Viet" typeface="Times New Roman"/>'),
            (r[r.length] =
              '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
            (r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
            (r[r.length] = "</a:majorFont>"),
            (r[r.length] = "<a:minorFont>"),
            (r[r.length] = '<a:latin typeface="Calibri"/>'),
            (r[r.length] = '<a:ea typeface=""/>'),
            (r[r.length] = '<a:cs typeface=""/>'),
            (r[r.length] =
              '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
            (r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
            (r[r.length] = '<a:font script="Hans" typeface="宋体"/>'),
            (r[r.length] = '<a:font script="Hant" typeface="新細明體"/>'),
            (r[r.length] = '<a:font script="Arab" typeface="Arial"/>'),
            (r[r.length] = '<a:font script="Hebr" typeface="Arial"/>'),
            (r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
            (r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
            (r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
            (r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
            (r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>'),
            (r[r.length] = '<a:font script="Knda" typeface="Tunga"/>'),
            (r[r.length] = '<a:font script="Guru" typeface="Raavi"/>'),
            (r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
            (r[r.length] =
              '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
            (r[r.length] =
              '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
            (r[r.length] =
              '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
            (r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
            (r[r.length] = '<a:font script="Deva" typeface="Mangal"/>'),
            (r[r.length] = '<a:font script="Telu" typeface="Gautami"/>'),
            (r[r.length] = '<a:font script="Taml" typeface="Latha"/>'),
            (r[r.length] =
              '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
            (r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
            (r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
            (r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
            (r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
            (r[r.length] =
              '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
            (r[r.length] = '<a:font script="Viet" typeface="Arial"/>'),
            (r[r.length] =
              '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
            (r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
            (r[r.length] = "</a:minorFont>"),
            (r[r.length] = "</a:fontScheme>"),
            (r[r.length] = '<a:fmtScheme name="Office">'),
            (r[r.length] = "<a:fillStyleLst>"),
            (r[r.length] =
              '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
            (r[r.length] = '<a:gradFill rotWithShape="1">'),
            (r[r.length] = "<a:gsLst>"),
            (r[r.length] =
              '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
            (r[r.length] =
              '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
            (r[r.length] =
              '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
            (r[r.length] = "</a:gsLst>"),
            (r[r.length] = '<a:lin ang="16200000" scaled="1"/>'),
            (r[r.length] = "</a:gradFill>"),
            (r[r.length] = '<a:gradFill rotWithShape="1">'),
            (r[r.length] = "<a:gsLst>"),
            (r[r.length] =
              '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>'),
            (r[r.length] =
              '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
            (r[r.length] = "</a:gsLst>"),
            (r[r.length] = '<a:lin ang="16200000" scaled="0"/>'),
            (r[r.length] = "</a:gradFill>"),
            (r[r.length] = "</a:fillStyleLst>"),
            (r[r.length] = "<a:lnStyleLst>"),
            (r[r.length] =
              '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>'),
            (r[r.length] =
              '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
            (r[r.length] =
              '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
            (r[r.length] = "</a:lnStyleLst>"),
            (r[r.length] = "<a:effectStyleLst>"),
            (r[r.length] = "<a:effectStyle>"),
            (r[r.length] = "<a:effectLst>"),
            (r[r.length] =
              '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>'),
            (r[r.length] = "</a:effectLst>"),
            (r[r.length] = "</a:effectStyle>"),
            (r[r.length] = "<a:effectStyle>"),
            (r[r.length] = "<a:effectLst>"),
            (r[r.length] =
              '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
            (r[r.length] = "</a:effectLst>"),
            (r[r.length] = "</a:effectStyle>"),
            (r[r.length] = "<a:effectStyle>"),
            (r[r.length] = "<a:effectLst>"),
            (r[r.length] =
              '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
            (r[r.length] = "</a:effectLst>"),
            (r[r.length] =
              '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>'),
            (r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>'),
            (r[r.length] = "</a:effectStyle>"),
            (r[r.length] = "</a:effectStyleLst>"),
            (r[r.length] = "<a:bgFillStyleLst>"),
            (r[r.length] =
              '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
            (r[r.length] = '<a:gradFill rotWithShape="1">'),
            (r[r.length] = "<a:gsLst>"),
            (r[r.length] =
              '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
            (r[r.length] =
              '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
            (r[r.length] =
              '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>'),
            (r[r.length] = "</a:gsLst>"),
            (r[r.length] =
              '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>'),
            (r[r.length] = "</a:gradFill>"),
            (r[r.length] = '<a:gradFill rotWithShape="1">'),
            (r[r.length] = "<a:gsLst>"),
            (r[r.length] =
              '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
            (r[r.length] =
              '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>'),
            (r[r.length] = "</a:gsLst>"),
            (r[r.length] =
              '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>'),
            (r[r.length] = "</a:gradFill>"),
            (r[r.length] = "</a:bgFillStyleLst>"),
            (r[r.length] = "</a:fmtScheme>"),
            (r[r.length] = "</a:themeElements>"),
            (r[r.length] = "<a:objectDefaults>"),
            (r[r.length] = "<a:spDef>"),
            (r[r.length] =
              '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>'),
            (r[r.length] = "</a:spDef>"),
            (r[r.length] = "<a:lnDef>"),
            (r[r.length] =
              '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>'),
            (r[r.length] = "</a:lnDef>"),
            (r[r.length] = "</a:objectDefaults>"),
            (r[r.length] = "<a:extraClrSchemeLst/>"),
            (r[r.length] = "</a:theme>"),
            r.join("")
          );
        }
        (r$.IMG =
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image"),
          (r$.DRAW =
            "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing");
        var aJ = 1024;
        r$.CMNT =
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";
        var aZ = tE("comments", null, { xmlns: tw.main[0] });
        function aq(e) {
          var t = [eJ, aZ],
            r = [];
          return (
            t.push("<authors>"),
            e.forEach(function (e) {
              e[1].forEach(function (e) {
                var n = e9(e.a);
                r.indexOf(n) > -1 ||
                  (r.push(n), t.push("<author>" + n + "</author>"));
              });
            }),
            t.push("</authors>"),
            t.push("<commentList>"),
            e.forEach(function (e) {
              e[1].forEach(function (n) {
                t.push(
                  '<comment ref="' +
                    e[0] +
                    '" authorId="' +
                    r.indexOf(e9(n.a)) +
                    '"><text>'
                ),
                  t.push(tv("t", null == n.t ? "" : e9(n.t))),
                  t.push("</text></comment>");
              });
            }),
            t.push("</commentList>"),
            t.length > 2 &&
              ((t[t.length] = "</comments>"), (t[1] = t[1].replace("/>", ">"))),
            t.join("")
          );
        }
        function a1(e) {
          var t = t2(),
            r = [];
          return (
            t4(t, "BrtBeginComments"),
            t4(t, "BrtBeginCommentAuthors"),
            e.forEach(function (e) {
              e[1].forEach(function (e) {
                r.indexOf(e.a) > -1 ||
                  (r.push(e.a.slice(0, 54)),
                  t4(t, "BrtCommentAuthor", rp(e.a.slice(0, 54))));
              });
            }),
            t4(t, "BrtEndCommentAuthors"),
            t4(t, "BrtBeginCommentList"),
            e.forEach(function (e) {
              e[1].forEach(function (n) {
                var a, s, i, o, c, l;
                (n.iauthor = r.indexOf(n.a)),
                  t4(
                    t,
                    "BrtBeginComment",
                    ((a = [{ s: rr(e[0]), e: rr(e[0]) }, n]),
                    null == s && (s = t1(36)),
                    s.write_shift(4, a[1].iauthor),
                    rx(a[0], s),
                    s.write_shift(4, 0),
                    s.write_shift(4, 0),
                    s.write_shift(4, 0),
                    s.write_shift(4, 0),
                    s)
                  ),
                  n.t &&
                    n.t.length > 0 &&
                    t4(
                      t,
                      "BrtCommentText",
                      ((o = !1),
                      null == i && ((o = !0), (i = t1(23 + 4 * n.t.length))),
                      i.write_shift(1, 1),
                      rp(n.t, i),
                      i.write_shift(4, 1),
                      (c = { ich: 0, ifnt: 0 }),
                      (l = i) || (l = t1(4)),
                      l.write_shift(2, c.ich || 0),
                      l.write_shift(2, c.ifnt || 0),
                      o ? i.slice(0, i.l) : i)
                    ),
                  t4(t, "BrtEndComment"),
                  delete n.iauthor;
              });
            }),
            t4(t, "BrtEndCommentList"),
            t4(t, "BrtEndComments"),
            t.end()
          );
        }
        var a0 = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
        (r$.DS =
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet"),
          (r$.MS =
            "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet");
        var a2 = (function () {
            var e =
                /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
              t = { r: 0, c: 0 };
            function r(e, r, n, a) {
              var s = !1,
                i = !1;
              0 == n.length
                ? (i = !0)
                : "[" == n.charAt(0) && ((i = !0), (n = n.slice(1, -1))),
                0 == a.length
                  ? (s = !0)
                  : "[" == a.charAt(0) && ((s = !0), (a = a.slice(1, -1)));
              var o = n.length > 0 ? 0 | parseInt(n, 10) : 0,
                c = a.length > 0 ? 0 | parseInt(a, 10) : 0;
              return (
                s ? (c += t.c) : --c,
                i ? (o += t.r) : --o,
                r + (s ? "" : "$") + rt(c) + (i ? "" : "$") + t9(o)
              );
            }
            return function (n, a) {
              return (t = a), n.replace(e, r);
            };
          })(),
          a4 =
            /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
          a3 = function (e, t) {
            return e.replace(a4, function (e, r, n, a, s, i) {
              var o = re(a) - (n ? 0 : t.c),
                c = t7(i) - (s ? 0 : t.r);
              return (
                r +
                "R" +
                (0 == c ? "" : s ? c + 1 : "[" + c + "]") +
                "C" +
                (0 == o ? "" : n ? o + 1 : "[" + o + "]")
              );
            });
          };
        function a5(e, t) {
          return e.replace(a4, function (e, r, n, a, s, i) {
            return (
              r +
              ("$" == n ? n + a : rt(re(a) + t.c)) +
              ("$" == s ? s + i : t9(t7(i) + t.r))
            );
          });
        }
        function a6(e) {
          return e.replace(/_xlfn\./g, "");
        }
        function a8(e) {
          e.l += 1;
        }
        function a7(e, t) {
          var r = e.read_shift(1 == t ? 1 : 2);
          return [16383 & r, (r >> 14) & 1, (r >> 15) & 1];
        }
        function a9(e, t, r) {
          var n = 2;
          if (r) {
            if (r.biff >= 2 && r.biff <= 5) return se(e, t, r);
            12 == r.biff && (n = 4);
          }
          var a = e.read_shift(n),
            s = e.read_shift(n),
            i = a7(e, 2),
            o = a7(e, 2);
          return {
            s: { r: a, c: i[0], cRel: i[1], rRel: i[2] },
            e: { r: s, c: o[0], cRel: o[1], rRel: o[2] },
          };
        }
        function se(e) {
          var t = a7(e, 2),
            r = a7(e, 2),
            n = e.read_shift(1),
            a = e.read_shift(1);
          return {
            s: { r: t[0], c: n, cRel: t[1], rRel: t[2] },
            e: { r: r[0], c: a, cRel: r[1], rRel: r[2] },
          };
        }
        function st(e, t, r) {
          if (r && r.biff >= 2 && r.biff <= 5) {
            var n, a;
            return (
              (n = a7(e, 2)),
              (a = e.read_shift(1)),
              { r: n[0], c: a, cRel: n[1], rRel: n[2] }
            );
          }
          var s = e.read_shift(r && 12 == r.biff ? 4 : 2),
            i = a7(e, 2);
          return { r: s, c: i[0], cRel: i[1], rRel: i[2] };
        }
        function sr(e) {
          return [e.read_shift(1), e.read_shift(1)];
        }
        function sn(e, t, r) {
          var n;
          return (
            (e.l += 2),
            [
              {
                r: e.read_shift(2),
                c: 255 & (n = e.read_shift(2)),
                fQuoted: !!(16384 & n),
                cRel: n >> 15,
                rRel: n >> 15,
              },
            ]
          );
        }
        function sa(e) {
          return (e.l += 6), [];
        }
        function ss(e) {
          return (e.l += 2), [nw(e), 1 & e.read_shift(2)];
        }
        var si = [
            "Data",
            "All",
            "Headers",
            "??",
            "?Data2",
            "??",
            "?DataHeaders",
            "??",
            "Totals",
            "??",
            "??",
            "??",
            "?DataTotals",
            "??",
            "??",
            "??",
            "?Current",
          ],
          so = {
            1: {
              n: "PtgExp",
              f: function (e, t, r) {
                return (e.l++, r && 12 == r.biff)
                  ? [e.read_shift(4, "i"), 0]
                  : [e.read_shift(2), e.read_shift(r && 2 == r.biff ? 1 : 2)];
              },
            },
            2: { n: "PtgTbl", f: tq },
            3: { n: "PtgAdd", f: a8 },
            4: { n: "PtgSub", f: a8 },
            5: { n: "PtgMul", f: a8 },
            6: { n: "PtgDiv", f: a8 },
            7: { n: "PtgPower", f: a8 },
            8: { n: "PtgConcat", f: a8 },
            9: { n: "PtgLt", f: a8 },
            10: { n: "PtgLe", f: a8 },
            11: { n: "PtgEq", f: a8 },
            12: { n: "PtgGe", f: a8 },
            13: { n: "PtgGt", f: a8 },
            14: { n: "PtgNe", f: a8 },
            15: { n: "PtgIsect", f: a8 },
            16: { n: "PtgUnion", f: a8 },
            17: { n: "PtgRange", f: a8 },
            18: { n: "PtgUplus", f: a8 },
            19: { n: "PtgUminus", f: a8 },
            20: { n: "PtgPercent", f: a8 },
            21: { n: "PtgParen", f: a8 },
            22: { n: "PtgMissArg", f: a8 },
            23: {
              n: "PtgStr",
              f: function (e, t, r) {
                return e.l++, nT(e, t - 1, r);
              },
            },
            26: {
              n: "PtgSheet",
              f: function (e, t, r) {
                return (
                  (e.l += 5),
                  (e.l += 2),
                  (e.l += 2 == r.biff ? 1 : 4),
                  ["PTGSHEET"]
                );
              },
            },
            27: {
              n: "PtgEndSheet",
              f: function (e, t, r) {
                return (e.l += 2 == r.biff ? 4 : 5), ["PTGENDSHEET"];
              },
            },
            28: {
              n: "PtgErr",
              f: function (e) {
                return e.l++, rU[e.read_shift(1)];
              },
            },
            29: {
              n: "PtgBool",
              f: function (e) {
                return e.l++, 0 !== e.read_shift(1);
              },
            },
            30: {
              n: "PtgInt",
              f: function (e) {
                return e.l++, e.read_shift(2);
              },
            },
            31: {
              n: "PtgNum",
              f: function (e) {
                return e.l++, r_(e, 8);
              },
            },
            32: {
              n: "PtgArray",
              f: function (e, t, r) {
                var n = (96 & e[e.l++]) >> 5;
                return (e.l += 2 == r.biff ? 6 : 12 == r.biff ? 14 : 7), [n];
              },
            },
            33: {
              n: "PtgFunc",
              f: function (e, t, r) {
                var n = (96 & e[e.l]) >> 5;
                e.l += 1;
                var a = e.read_shift(r && r.biff <= 3 ? 1 : 2);
                return [sC[a], sw[a], n];
              },
            },
            34: {
              n: "PtgFuncVar",
              f: function (e, t, r) {
                var n = e[e.l++],
                  a = e.read_shift(1),
                  s =
                    r && r.biff <= 3
                      ? [88 == n ? -1 : 0, e.read_shift(1)]
                      : [e[e.l + 1] >> 7, 32767 & e.read_shift(2)];
                return [a, (0 === s[0] ? sw : sS)[s[1]]];
              },
            },
            35: {
              n: "PtgName",
              f: function (e, t, r) {
                var n = (e.read_shift(1) >>> 5) & 3,
                  a = !r || r.biff >= 8 ? 4 : 2,
                  s = e.read_shift(a);
                switch (r.biff) {
                  case 2:
                    e.l += 5;
                    break;
                  case 3:
                  case 4:
                    e.l += 8;
                    break;
                  case 5:
                    e.l += 12;
                }
                return [n, 0, s];
              },
            },
            36: {
              n: "PtgRef",
              f: function (e, t, r) {
                var n = (96 & e[e.l]) >> 5;
                return (e.l += 1), [n, st(e, 0, r)];
              },
            },
            37: {
              n: "PtgArea",
              f: function (e, t, r) {
                return [
                  (96 & e[e.l++]) >> 5,
                  a9(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r),
                ];
              },
            },
            38: {
              n: "PtgMemArea",
              f: function (e, t, r) {
                var n = (e.read_shift(1) >>> 5) & 3;
                return (
                  (e.l += r && 2 == r.biff ? 3 : 4),
                  [n, e.read_shift(r && 2 == r.biff ? 1 : 2)]
                );
              },
            },
            39: { n: "PtgMemErr", f: tq },
            40: { n: "PtgMemNoMem", f: tq },
            41: {
              n: "PtgMemFunc",
              f: function (e, t, r) {
                return [
                  (e.read_shift(1) >>> 5) & 3,
                  e.read_shift(r && 2 == r.biff ? 1 : 2),
                ];
              },
            },
            42: {
              n: "PtgRefErr",
              f: function (e, t, r) {
                var n = (e.read_shift(1) >>> 5) & 3;
                return (
                  (e.l += 4),
                  r.biff < 8 && e.l--,
                  12 == r.biff && (e.l += 2),
                  [n]
                );
              },
            },
            43: {
              n: "PtgAreaErr",
              f: function (e, t, r) {
                var n = (96 & e[e.l++]) >> 5;
                return (e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8), [n];
              },
            },
            44: {
              n: "PtgRefN",
              f: function (e, t, r) {
                var n = (96 & e[e.l]) >> 5;
                return (
                  (e.l += 1),
                  [
                    n,
                    (function (e, t, r) {
                      var n,
                        a,
                        s,
                        i,
                        o = r && r.biff ? r.biff : 8;
                      if (o >= 2 && o <= 5)
                        return (
                          (n = e.read_shift(2)),
                          (a = e.read_shift(1)),
                          (s = (32768 & n) >> 15),
                          (i = (16384 & n) >> 14),
                          (n &= 16383),
                          1 == s && n >= 8192 && (n -= 16384),
                          1 == i && a >= 128 && (a -= 256),
                          { r: n, c: a, cRel: i, rRel: s }
                        );
                      var c = e.read_shift(o >= 12 ? 4 : 2),
                        l = e.read_shift(2),
                        f = (16384 & l) >> 14,
                        h = (32768 & l) >> 15;
                      if (((l &= 16383), 1 == h))
                        for (; c > 524287; ) c -= 1048576;
                      if (1 == f) for (; l > 8191; ) l -= 16384;
                      return { r: c, c: l, cRel: f, rRel: h };
                    })(e, 0, r),
                  ]
                );
              },
            },
            45: {
              n: "PtgAreaN",
              f: function (e, t, r) {
                return [
                  (96 & e[e.l++]) >> 5,
                  (function (e, t, r) {
                    if (r.biff < 8) return se(e, t, r);
                    var n = e.read_shift(12 == r.biff ? 4 : 2),
                      a = e.read_shift(12 == r.biff ? 4 : 2),
                      s = a7(e, 2),
                      i = a7(e, 2);
                    return {
                      s: { r: n, c: s[0], cRel: s[1], rRel: s[2] },
                      e: { r: a, c: i[0], cRel: i[1], rRel: i[2] },
                    };
                  })(e, t - 1, r),
                ];
              },
            },
            46: {
              n: "PtgMemAreaN",
              f: function (e) {
                return [(e.read_shift(1) >>> 5) & 3, e.read_shift(2)];
              },
            },
            47: {
              n: "PtgMemNoMemN",
              f: function (e) {
                return [(e.read_shift(1) >>> 5) & 3, e.read_shift(2)];
              },
            },
            57: {
              n: "PtgNameX",
              f: function (e, t, r) {
                var n, a, s, i;
                return 5 == r.biff
                  ? ((a = ((n = e).read_shift(1) >>> 5) & 3),
                    (s = n.read_shift(2, "i")),
                    (n.l += 8),
                    (i = n.read_shift(2)),
                    (n.l += 12),
                    [a, s, i])
                  : [
                      (e.read_shift(1) >>> 5) & 3,
                      e.read_shift(2),
                      e.read_shift(4),
                    ];
              },
            },
            58: {
              n: "PtgRef3d",
              f: function (e, t, r) {
                var n = (96 & e[e.l]) >> 5;
                e.l += 1;
                var a = e.read_shift(2);
                return r && 5 == r.biff && (e.l += 12), [n, a, st(e, 0, r)];
              },
            },
            59: {
              n: "PtgArea3d",
              f: function (e, t, r) {
                var n = (96 & e[e.l++]) >> 5,
                  a = e.read_shift(2, "i"),
                  s = 8;
                if (r)
                  switch (r.biff) {
                    case 5:
                      (e.l += 12), (s = 6);
                      break;
                    case 12:
                      s = 12;
                  }
                return [n, a, a9(e, s, r)];
              },
            },
            60: {
              n: "PtgRefErr3d",
              f: function (e, t, r) {
                var n = (96 & e[e.l++]) >> 5,
                  a = e.read_shift(2),
                  s = 4;
                if (r)
                  switch (r.biff) {
                    case 5:
                      s = 15;
                      break;
                    case 12:
                      s = 6;
                  }
                return (e.l += s), [n, a];
              },
            },
            61: {
              n: "PtgAreaErr3d",
              f: function (e, t, r) {
                var n = (96 & e[e.l++]) >> 5,
                  a = e.read_shift(2),
                  s = 8;
                if (r)
                  switch (r.biff) {
                    case 5:
                      (e.l += 12), (s = 6);
                      break;
                    case 12:
                      s = 12;
                  }
                return (e.l += s), [n, a];
              },
            },
            255: {},
          },
          sc = {
            64: 32,
            96: 32,
            65: 33,
            97: 33,
            66: 34,
            98: 34,
            67: 35,
            99: 35,
            68: 36,
            100: 36,
            69: 37,
            101: 37,
            70: 38,
            102: 38,
            71: 39,
            103: 39,
            72: 40,
            104: 40,
            73: 41,
            105: 41,
            74: 42,
            106: 42,
            75: 43,
            107: 43,
            76: 44,
            108: 44,
            77: 45,
            109: 45,
            78: 46,
            110: 46,
            79: 47,
            111: 47,
            88: 34,
            120: 34,
            89: 57,
            121: 57,
            90: 58,
            122: 58,
            91: 59,
            123: 59,
            92: 60,
            124: 60,
            93: 61,
            125: 61,
          };
        !(function () {
          for (var e in sc) so[e] = so[sc[e]];
        })();
        var sl = {
            1: { n: "PtgElfLel", f: ss },
            2: { n: "PtgElfRw", f: sn },
            3: { n: "PtgElfCol", f: sn },
            6: { n: "PtgElfRwV", f: sn },
            7: { n: "PtgElfColV", f: sn },
            10: { n: "PtgElfRadical", f: sn },
            11: { n: "PtgElfRadicalS", f: sa },
            13: { n: "PtgElfColS", f: sa },
            15: { n: "PtgElfColSV", f: sa },
            16: { n: "PtgElfRadicalLel", f: ss },
            25: {
              n: "PtgList",
              f: function (e) {
                e.l += 2;
                var t = e.read_shift(2),
                  r = e.read_shift(2),
                  n = e.read_shift(4),
                  a = e.read_shift(2),
                  s = e.read_shift(2),
                  i = si[(r >> 2) & 31];
                return { ixti: t, coltype: 3 & r, rt: i, idx: n, c: a, C: s };
              },
            },
            29: {
              n: "PtgSxName",
              f: function (e) {
                return (e.l += 2), [e.read_shift(4)];
              },
            },
            255: {},
          },
          sf = {
            0: {
              n: "PtgAttrNoop",
              f: function (e) {
                return (e.l += 4), [0, 0];
              },
            },
            1: {
              n: "PtgAttrSemi",
              f: function (e, t, r) {
                var n = 255 & e[e.l + 1] ? 1 : 0;
                return (e.l += r && 2 == r.biff ? 3 : 4), [n];
              },
            },
            2: {
              n: "PtgAttrIf",
              f: function (e, t, r) {
                var n = 255 & e[e.l + 1] ? 1 : 0;
                return (e.l += 2), [n, e.read_shift(r && 2 == r.biff ? 1 : 2)];
              },
            },
            4: {
              n: "PtgAttrChoose",
              f: function (e, t, r) {
                e.l += 2;
                for (
                  var n = e.read_shift(r && 2 == r.biff ? 1 : 2), a = [], s = 0;
                  s <= n;
                  ++s
                )
                  a.push(e.read_shift(r && 2 == r.biff ? 1 : 2));
                return a;
              },
            },
            8: {
              n: "PtgAttrGoto",
              f: function (e, t, r) {
                var n = 255 & e[e.l + 1] ? 1 : 0;
                return (e.l += 2), [n, e.read_shift(r && 2 == r.biff ? 1 : 2)];
              },
            },
            16: {
              n: "PtgAttrSum",
              f: function (e, t, r) {
                e.l += r && 2 == r.biff ? 3 : 4;
              },
            },
            32: {
              n: "PtgAttrBaxcel",
              f: function (e) {
                var t = 1 & e[e.l + 1];
                return (e.l += 4), [t, 1];
              },
            },
            64: {
              n: "PtgAttrSpace",
              f: function (e) {
                return e.read_shift(2), sr(e, 2);
              },
            },
            65: {
              n: "PtgAttrSpaceSemi",
              f: function (e) {
                return e.read_shift(2), sr(e, 2);
              },
            },
            128: {
              n: "PtgAttrIfError",
              f: function (e) {
                var t = 255 & e[e.l + 1] ? 1 : 0;
                return (e.l += 2), [t, e.read_shift(2)];
              },
            },
            255: {},
          };
        function sh(e, t, r, n) {
          if (n.biff < 8) return (a = e), (s = t), void (a.l += s);
          for (var a, s, i, o, c = e.l + t, l = [], f = 0; f !== r.length; ++f)
            switch (r[f][0]) {
              case "PtgArray":
                (r[f][1] = (function (e, t, r) {
                  var n = 0,
                    a = 0;
                  12 == r.biff
                    ? ((n = e.read_shift(4)), (a = e.read_shift(4)))
                    : ((a = 1 + e.read_shift(1)), (n = 1 + e.read_shift(2))),
                    r.biff >= 2 && r.biff < 8 && (--n, 0 == --a && (a = 256));
                  for (var s = 0, i = []; s != n && (i[s] = []); ++s)
                    for (var o = 0; o != a; ++o)
                      i[s][o] = (function (e, t) {
                        var r = [e.read_shift(1)];
                        if (12 == t)
                          switch (r[0]) {
                            case 2:
                              r[0] = 4;
                              break;
                            case 4:
                              r[0] = 16;
                              break;
                            case 0:
                              r[0] = 1;
                              break;
                            case 1:
                              r[0] = 2;
                          }
                        switch (r[0]) {
                          case 4:
                            (r[1] = nE(e, 1) ? "TRUE" : "FALSE"),
                              12 != t && (e.l += 7);
                            break;
                          case 37:
                          case 16:
                            (r[1] = rU[e[e.l]]), (e.l += 12 == t ? 4 : 8);
                            break;
                          case 0:
                            e.l += 8;
                            break;
                          case 1:
                            r[1] = r_(e, 8);
                            break;
                          case 2:
                            r[1] = nk(e, 0, { biff: t > 0 && t < 8 ? 2 : t });
                            break;
                          default:
                            throw Error("Bad SerAr: " + r[0]);
                        }
                        return r;
                      })(e, r.biff);
                  return i;
                })(e, 0, n)),
                  l.push(r[f][1]);
                break;
              case "PtgMemArea":
                (r[f][2] = (function (e, t, r) {
                  for (
                    var n = e.read_shift(12 == r.biff ? 4 : 2), a = [], s = 0;
                    s != n;
                    ++s
                  )
                    a.push((12 == r.biff ? rT : nP)(e, 8));
                  return a;
                })(e, r[f][1], n)),
                  l.push(r[f][2]);
                break;
              case "PtgExp":
                n &&
                  12 == n.biff &&
                  ((r[f][1][1] = e.read_shift(4)), l.push(r[f][1]));
                break;
              case "PtgList":
              case "PtgElfRadicalS":
              case "PtgElfColS":
              case "PtgElfColSV":
                throw "Unsupported " + r[f][0];
            }
          return (
            0 != (t = c - e.l) && l.push(((i = e), (o = t), void (i.l += o))), l
          );
        }
        function su(e, t, r) {
          for (var n, a, s, i, o = e.l + t, c = []; o != e.l; )
            ((t = o - e.l),
            (s = so[(i = e[e.l])]),
            (24 === i || 25 === i) && (s = (24 === i ? sl : sf)[e[e.l + 1]]),
            s && s.f)
              ? c.push([s.n, s.f(e, t, r)])
              : ((n = e), (a = t), (n.l += a));
          return c;
        }
        sf[33] = sf[32];
        var sd = {
            PtgAdd: "+",
            PtgConcat: "&",
            PtgDiv: "/",
            PtgEq: "=",
            PtgGe: ">=",
            PtgGt: ">",
            PtgLe: "<=",
            PtgLt: "<",
            PtgMul: "*",
            PtgNe: "<>",
            PtgPower: "^",
            PtgSub: "-",
          },
          sp = new RegExp(/[^\w\u4E00-\u9FFF\u3040-\u30FF]/);
        function sm(e, t, r) {
          if (!e) return "SH33TJSERR0";
          if (r.biff > 8 && (!e.XTI || !e.XTI[t])) return e.SheetNames[t];
          if (!e.XTI) return "SH33TJSERR6";
          var n = e.XTI[t];
          if (r.biff < 8)
            return (
              t > 1e4 && (t -= 65536),
              t < 0 && (t = -t),
              0 == t ? "" : e.XTI[t - 1]
            );
          if (!n) return "SH33TJSERR1";
          var a = "";
          if (r.biff > 8)
            switch (e[n[0]][0]) {
              case 357:
                return (
                  (a = -1 == n[1] ? "#REF" : e.SheetNames[n[1]]),
                  n[1] == n[2] ? a : a + ":" + e.SheetNames[n[2]]
                );
              case 358:
                if (null != r.SID) return e.SheetNames[r.SID];
                return "SH33TJSSAME" + e[n[0]][0];
              default:
                return "SH33TJSSRC" + e[n[0]][0];
            }
          switch (e[n[0]][0][0]) {
            case 1025:
              return (
                (a = -1 == n[1] ? "#REF" : e.SheetNames[n[1]] || "SH33TJSERR3"),
                n[1] == n[2] ? a : a + ":" + e.SheetNames[n[2]]
              );
            case 14849:
              return e[n[0]]
                .slice(1)
                .map(function (e) {
                  return e.Name;
                })
                .join(";;");
            default:
              if (!e[n[0]][0][3]) return "SH33TJSERR2";
              return (
                (a =
                  -1 == n[1] ? "#REF" : e[n[0]][0][3][n[1]] || "SH33TJSERR4"),
                n[1] == n[2] ? a : a + ":" + e[n[0]][0][3][n[2]]
              );
          }
        }
        function sg(e, t, r) {
          return (function (e, t) {
            if (!e && !(t && t.biff <= 5 && t.biff >= 2))
              throw Error("empty sheet name");
            return sp.test(e) ? "'" + e + "'" : e;
          })(sm(e, t, r), r);
        }
        function sv(e, t, r, n, a) {
          var s,
            i,
            o,
            c,
            l = (a && a.biff) || 8,
            f = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
            h = [],
            u = 0,
            d = 0,
            p = "";
          if (!e[0] || !e[0][0]) return "";
          for (var m = -1, g = "", v = 0, b = e[0].length; v < b; ++v) {
            var E = e[0][v];
            switch (E[0]) {
              case "PtgUminus":
                h.push("-" + h.pop());
                break;
              case "PtgUplus":
                h.push("+" + h.pop());
                break;
              case "PtgPercent":
                h.push(h.pop() + "%");
                break;
              case "PtgAdd":
              case "PtgConcat":
              case "PtgDiv":
              case "PtgEq":
              case "PtgGe":
              case "PtgGt":
              case "PtgLe":
              case "PtgLt":
              case "PtgMul":
              case "PtgNe":
              case "PtgPower":
              case "PtgSub":
                if (((s = h.pop()), (i = h.pop()), m >= 0)) {
                  switch (e[0][m][1][0]) {
                    case 0:
                      g = eU(" ", e[0][m][1][1]);
                      break;
                    case 1:
                      g = eU("\r", e[0][m][1][1]);
                      break;
                    default:
                      if (((g = ""), a.WTF))
                        throw Error(
                          "Unexpected PtgAttrSpaceType " + e[0][m][1][0]
                        );
                  }
                  (i += g), (m = -1);
                }
                h.push(i + sd[E[0]] + s);
                break;
              case "PtgIsect":
                (s = h.pop()), (i = h.pop()), h.push(i + " " + s);
                break;
              case "PtgUnion":
                (s = h.pop()), (i = h.pop()), h.push(i + "," + s);
                break;
              case "PtgRange":
                (s = h.pop()), (i = h.pop()), h.push(i + ":" + s);
                break;
              case "PtgAttrChoose":
              case "PtgAttrGoto":
              case "PtgAttrIf":
              case "PtgAttrIfError":
              case "PtgAttrBaxcel":
              case "PtgAttrSemi":
              case "PtgMemArea":
              case "PtgTbl":
              case "PtgMemErr":
              case "PtgMemAreaN":
              case "PtgMemNoMemN":
              case "PtgAttrNoop":
              case "PtgSheet":
              case "PtgEndSheet":
              case "PtgMemFunc":
              case "PtgMemNoMem":
                break;
              case "PtgRef":
                (o = t3(E[1][1], f, a)), h.push(t6(o, l));
                break;
              case "PtgRefN":
                (o = r ? t3(E[1][1], r, a) : E[1][1]), h.push(t6(o, l));
                break;
              case "PtgRef3d":
                (u = E[1][1]),
                  (o = t3(E[1][2], f, a)),
                  (p = sg(n, u, a)),
                  h.push(p + "!" + t6(o, l));
                break;
              case "PtgFunc":
              case "PtgFuncVar":
                var S = E[1][0],
                  w = E[1][1];
                S || (S = 0);
                var C = 0 == (S &= 127) ? [] : h.slice(-S);
                (h.length -= S),
                  "User" === w && (w = C.shift()),
                  h.push(w + "(" + C.join(",") + ")");
                break;
              case "PtgBool":
                h.push(E[1] ? "TRUE" : "FALSE");
                break;
              case "PtgInt":
              case "PtgErr":
                h.push(E[1]);
                break;
              case "PtgNum":
                h.push(String(E[1]));
                break;
              case "PtgStr":
                h.push('"' + E[1].replace(/"/g, '""') + '"');
                break;
              case "PtgAreaN":
                (c = t5(E[1][1], r ? { s: r } : f, a)), h.push(t8(c, a));
                break;
              case "PtgArea":
                (c = t5(E[1][1], f, a)), h.push(t8(c, a));
                break;
              case "PtgArea3d":
                (u = E[1][1]),
                  (c = E[1][2]),
                  (p = sg(n, u, a)),
                  h.push(p + "!" + t8(c, a));
                break;
              case "PtgAttrSum":
                h.push("SUM(" + h.pop() + ")");
                break;
              case "PtgName":
                d = E[1][2];
                var B = (n.names || [])[d - 1] || (n[0] || [])[d],
                  T = B ? B.Name : "SH33TJSNAME" + String(d);
                T in sB && (T = sB[T]), h.push(T);
                break;
              case "PtgNameX":
                var x,
                  _ = E[1][1];
                if (((d = E[1][2]), a.biff <= 5))
                  _ < 0 && (_ = -_), n[_] && (x = n[_][d]);
                else {
                  var k = "";
                  if (
                    (14849 == ((n[_] || [])[0] || [])[0] ||
                      (1025 == ((n[_] || [])[0] || [])[0]
                        ? n[_][d] &&
                          n[_][d].itab > 0 &&
                          (k = n.SheetNames[n[_][d].itab - 1] + "!")
                        : (k = n.SheetNames[d - 1] + "!")),
                    n[_] && n[_][d])
                  )
                    k += n[_][d].Name;
                  else if (n[0] && n[0][d]) k += n[0][d].Name;
                  else {
                    var A = (sm(n, _, a) || "").split(";;");
                    A[d - 1] ? (k = A[d - 1]) : (k += "SH33TJSERRX");
                  }
                  h.push(k);
                  break;
                }
                x || (x = { Name: "SH33TJSERRY" }), h.push(x.Name);
                break;
              case "PtgParen":
                var I = "(",
                  y = ")";
                if (m >= 0) {
                  switch (((g = ""), e[0][m][1][0])) {
                    case 2:
                      I = eU(" ", e[0][m][1][1]) + I;
                      break;
                    case 3:
                      I = eU("\r", e[0][m][1][1]) + I;
                      break;
                    case 4:
                      y = eU(" ", e[0][m][1][1]) + y;
                      break;
                    case 5:
                      y = eU("\r", e[0][m][1][1]) + y;
                      break;
                    default:
                      if (a.WTF)
                        throw Error(
                          "Unexpected PtgAttrSpaceType " + e[0][m][1][0]
                        );
                  }
                  m = -1;
                }
                h.push(I + h.pop() + y);
                break;
              case "PtgRefErr":
              case "PtgRefErr3d":
              case "PtgAreaErr":
              case "PtgAreaErr3d":
                h.push("#REF!");
                break;
              case "PtgExp":
                o = { c: E[1][1], r: E[1][0] };
                var R = { c: r.c, r: r.r };
                if (n.sharedf[rn(o)]) {
                  var F = n.sharedf[rn(o)];
                  h.push(sv(F, f, R, n, a));
                } else {
                  var D = !1;
                  for (s = 0; s != n.arrayf.length; ++s)
                    if (
                      ((i = n.arrayf[s]),
                      !(o.c < i[0].s.c) &&
                        !(o.c > i[0].e.c) &&
                        !(o.r < i[0].s.r) &&
                        !(o.r > i[0].e.r))
                    ) {
                      h.push(sv(i[1], f, R, n, a)), (D = !0);
                      break;
                    }
                  D || h.push(E[1]);
                }
                break;
              case "PtgArray":
                h.push(
                  "{" +
                    (function (e) {
                      for (var t = [], r = 0; r < e.length; ++r) {
                        for (var n = e[r], a = [], s = 0; s < n.length; ++s) {
                          var i = n[s];
                          i
                            ? 2 === i[0]
                              ? a.push('"' + i[1].replace(/"/g, '""') + '"')
                              : a.push(i[1])
                            : a.push("");
                        }
                        t.push(a.join(","));
                      }
                      return t.join(";");
                    })(E[1]) +
                    "}"
                );
                break;
              case "PtgAttrSpace":
              case "PtgAttrSpaceSemi":
                m = v;
                break;
              case "PtgMissArg":
                h.push("");
                break;
              case "PtgList":
                h.push("Table" + E[1].idx + "[#" + E[1].rt + "]");
                break;
              case "PtgElfCol":
              case "PtgElfColS":
              case "PtgElfColSV":
              case "PtgElfColV":
              case "PtgElfLel":
              case "PtgElfRadical":
              case "PtgElfRadicalLel":
              case "PtgElfRadicalS":
              case "PtgElfRw":
              case "PtgElfRwV":
                throw Error("Unsupported ELFs");
              default:
                throw Error("Unrecognized Formula Token: " + String(E));
            }
            var O = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
            if (3 != a.biff && m >= 0 && -1 == O.indexOf(e[0][v][0])) {
              E = e[0][m];
              var P = !0;
              switch (E[1][0]) {
                case 4:
                  P = !1;
                case 0:
                  g = eU(" ", E[1][1]);
                  break;
                case 5:
                  P = !1;
                case 1:
                  g = eU("\r", E[1][1]);
                  break;
                default:
                  if (((g = ""), a.WTF))
                    throw Error("Unexpected PtgAttrSpaceType " + E[1][0]);
              }
              h.push((P ? g : "") + h.pop() + (P ? "" : g)), (m = -1);
            }
          }
          if (h.length > 1 && a.WTF) throw Error("bad formula stack");
          return h[0];
        }
        function sb(e, t, r) {
          var n = e.l + t,
            a = nF(e, 6);
          2 == r.biff && ++e.l;
          var s = (function (e) {
              var t;
              if (65535 !== tW(e, e.l + 6)) return [r_(e), "n"];
              switch (e[e.l]) {
                case 0:
                  return (e.l += 8), ["String", "s"];
                case 1:
                  return (t = 1 === e[e.l + 2]), (e.l += 8), [t, "b"];
                case 2:
                  return (t = e[e.l + 2]), (e.l += 8), [t, "e"];
                case 3:
                  return (e.l += 8), ["", "s"];
              }
              return [];
            })(e, 8),
            i = e.read_shift(1);
          2 != r.biff && (e.read_shift(1), r.biff >= 5 && e.read_shift(4));
          var o = (function (e, t, r) {
            var n,
              a,
              s = e.l + t,
              i = 2 == r.biff ? 1 : 2,
              o = e.read_shift(i);
            if (65535 == o) return [[], ((n = e), void (n.l += t - 2))];
            var c = su(e, o, r);
            return (
              t !== o + i && (a = sh(e, t - o - i, c, r)), (e.l = s), [c, a]
            );
          })(e, n - e.l, r);
          return {
            cell: a,
            val: s[0],
            formula: o,
            shared: (i >> 3) & 1,
            tt: s[1],
          };
        }
        function sE(e, t, r) {
          var n = e.read_shift(4),
            a = su(e, n, r),
            s = e.read_shift(4),
            i = s > 0 ? sh(e, s, a, r) : null;
          return [a, i];
        }
        var sS = {
            0: "BEEP",
            1: "OPEN",
            2: "OPEN.LINKS",
            3: "CLOSE.ALL",
            4: "SAVE",
            5: "SAVE.AS",
            6: "FILE.DELETE",
            7: "PAGE.SETUP",
            8: "PRINT",
            9: "PRINTER.SETUP",
            10: "QUIT",
            11: "NEW.WINDOW",
            12: "ARRANGE.ALL",
            13: "WINDOW.SIZE",
            14: "WINDOW.MOVE",
            15: "FULL",
            16: "CLOSE",
            17: "RUN",
            22: "SET.PRINT.AREA",
            23: "SET.PRINT.TITLES",
            24: "SET.PAGE.BREAK",
            25: "REMOVE.PAGE.BREAK",
            26: "FONT",
            27: "DISPLAY",
            28: "PROTECT.DOCUMENT",
            29: "PRECISION",
            30: "A1.R1C1",
            31: "CALCULATE.NOW",
            32: "CALCULATION",
            34: "DATA.FIND",
            35: "EXTRACT",
            36: "DATA.DELETE",
            37: "SET.DATABASE",
            38: "SET.CRITERIA",
            39: "SORT",
            40: "DATA.SERIES",
            41: "TABLE",
            42: "FORMAT.NUMBER",
            43: "ALIGNMENT",
            44: "STYLE",
            45: "BORDER",
            46: "CELL.PROTECTION",
            47: "COLUMN.WIDTH",
            48: "UNDO",
            49: "CUT",
            50: "COPY",
            51: "PASTE",
            52: "CLEAR",
            53: "PASTE.SPECIAL",
            54: "EDIT.DELETE",
            55: "INSERT",
            56: "FILL.RIGHT",
            57: "FILL.DOWN",
            61: "DEFINE.NAME",
            62: "CREATE.NAMES",
            63: "FORMULA.GOTO",
            64: "FORMULA.FIND",
            65: "SELECT.LAST.CELL",
            66: "SHOW.ACTIVE.CELL",
            67: "GALLERY.AREA",
            68: "GALLERY.BAR",
            69: "GALLERY.COLUMN",
            70: "GALLERY.LINE",
            71: "GALLERY.PIE",
            72: "GALLERY.SCATTER",
            73: "COMBINATION",
            74: "PREFERRED",
            75: "ADD.OVERLAY",
            76: "GRIDLINES",
            77: "SET.PREFERRED",
            78: "AXES",
            79: "LEGEND",
            80: "ATTACH.TEXT",
            81: "ADD.ARROW",
            82: "SELECT.CHART",
            83: "SELECT.PLOT.AREA",
            84: "PATTERNS",
            85: "MAIN.CHART",
            86: "OVERLAY",
            87: "SCALE",
            88: "FORMAT.LEGEND",
            89: "FORMAT.TEXT",
            90: "EDIT.REPEAT",
            91: "PARSE",
            92: "JUSTIFY",
            93: "HIDE",
            94: "UNHIDE",
            95: "WORKSPACE",
            96: "FORMULA",
            97: "FORMULA.FILL",
            98: "FORMULA.ARRAY",
            99: "DATA.FIND.NEXT",
            100: "DATA.FIND.PREV",
            101: "FORMULA.FIND.NEXT",
            102: "FORMULA.FIND.PREV",
            103: "ACTIVATE",
            104: "ACTIVATE.NEXT",
            105: "ACTIVATE.PREV",
            106: "UNLOCKED.NEXT",
            107: "UNLOCKED.PREV",
            108: "COPY.PICTURE",
            109: "SELECT",
            110: "DELETE.NAME",
            111: "DELETE.FORMAT",
            112: "VLINE",
            113: "HLINE",
            114: "VPAGE",
            115: "HPAGE",
            116: "VSCROLL",
            117: "HSCROLL",
            118: "ALERT",
            119: "NEW",
            120: "CANCEL.COPY",
            121: "SHOW.CLIPBOARD",
            122: "MESSAGE",
            124: "PASTE.LINK",
            125: "APP.ACTIVATE",
            126: "DELETE.ARROW",
            127: "ROW.HEIGHT",
            128: "FORMAT.MOVE",
            129: "FORMAT.SIZE",
            130: "FORMULA.REPLACE",
            131: "SEND.KEYS",
            132: "SELECT.SPECIAL",
            133: "APPLY.NAMES",
            134: "REPLACE.FONT",
            135: "FREEZE.PANES",
            136: "SHOW.INFO",
            137: "SPLIT",
            138: "ON.WINDOW",
            139: "ON.DATA",
            140: "DISABLE.INPUT",
            142: "OUTLINE",
            143: "LIST.NAMES",
            144: "FILE.CLOSE",
            145: "SAVE.WORKBOOK",
            146: "DATA.FORM",
            147: "COPY.CHART",
            148: "ON.TIME",
            149: "WAIT",
            150: "FORMAT.FONT",
            151: "FILL.UP",
            152: "FILL.LEFT",
            153: "DELETE.OVERLAY",
            155: "SHORT.MENUS",
            159: "SET.UPDATE.STATUS",
            161: "COLOR.PALETTE",
            162: "DELETE.STYLE",
            163: "WINDOW.RESTORE",
            164: "WINDOW.MAXIMIZE",
            166: "CHANGE.LINK",
            167: "CALCULATE.DOCUMENT",
            168: "ON.KEY",
            169: "APP.RESTORE",
            170: "APP.MOVE",
            171: "APP.SIZE",
            172: "APP.MINIMIZE",
            173: "APP.MAXIMIZE",
            174: "BRING.TO.FRONT",
            175: "SEND.TO.BACK",
            185: "MAIN.CHART.TYPE",
            186: "OVERLAY.CHART.TYPE",
            187: "SELECT.END",
            188: "OPEN.MAIL",
            189: "SEND.MAIL",
            190: "STANDARD.FONT",
            191: "CONSOLIDATE",
            192: "SORT.SPECIAL",
            193: "GALLERY.3D.AREA",
            194: "GALLERY.3D.COLUMN",
            195: "GALLERY.3D.LINE",
            196: "GALLERY.3D.PIE",
            197: "VIEW.3D",
            198: "GOAL.SEEK",
            199: "WORKGROUP",
            200: "FILL.GROUP",
            201: "UPDATE.LINK",
            202: "PROMOTE",
            203: "DEMOTE",
            204: "SHOW.DETAIL",
            206: "UNGROUP",
            207: "OBJECT.PROPERTIES",
            208: "SAVE.NEW.OBJECT",
            209: "SHARE",
            210: "SHARE.NAME",
            211: "DUPLICATE",
            212: "APPLY.STYLE",
            213: "ASSIGN.TO.OBJECT",
            214: "OBJECT.PROTECTION",
            215: "HIDE.OBJECT",
            216: "SET.EXTRACT",
            217: "CREATE.PUBLISHER",
            218: "SUBSCRIBE.TO",
            219: "ATTRIBUTES",
            220: "SHOW.TOOLBAR",
            222: "PRINT.PREVIEW",
            223: "EDIT.COLOR",
            224: "SHOW.LEVELS",
            225: "FORMAT.MAIN",
            226: "FORMAT.OVERLAY",
            227: "ON.RECALC",
            228: "EDIT.SERIES",
            229: "DEFINE.STYLE",
            240: "LINE.PRINT",
            243: "ENTER.DATA",
            249: "GALLERY.RADAR",
            250: "MERGE.STYLES",
            251: "EDITION.OPTIONS",
            252: "PASTE.PICTURE",
            253: "PASTE.PICTURE.LINK",
            254: "SPELLING",
            256: "ZOOM",
            259: "INSERT.OBJECT",
            260: "WINDOW.MINIMIZE",
            265: "SOUND.NOTE",
            266: "SOUND.PLAY",
            267: "FORMAT.SHAPE",
            268: "EXTEND.POLYGON",
            269: "FORMAT.AUTO",
            272: "GALLERY.3D.BAR",
            273: "GALLERY.3D.SURFACE",
            274: "FILL.AUTO",
            276: "CUSTOMIZE.TOOLBAR",
            277: "ADD.TOOL",
            278: "EDIT.OBJECT",
            279: "ON.DOUBLECLICK",
            280: "ON.ENTRY",
            281: "WORKBOOK.ADD",
            282: "WORKBOOK.MOVE",
            283: "WORKBOOK.COPY",
            284: "WORKBOOK.OPTIONS",
            285: "SAVE.WORKSPACE",
            288: "CHART.WIZARD",
            289: "DELETE.TOOL",
            290: "MOVE.TOOL",
            291: "WORKBOOK.SELECT",
            292: "WORKBOOK.ACTIVATE",
            293: "ASSIGN.TO.TOOL",
            295: "COPY.TOOL",
            296: "RESET.TOOL",
            297: "CONSTRAIN.NUMERIC",
            298: "PASTE.TOOL",
            302: "WORKBOOK.NEW",
            305: "SCENARIO.CELLS",
            306: "SCENARIO.DELETE",
            307: "SCENARIO.ADD",
            308: "SCENARIO.EDIT",
            309: "SCENARIO.SHOW",
            310: "SCENARIO.SHOW.NEXT",
            311: "SCENARIO.SUMMARY",
            312: "PIVOT.TABLE.WIZARD",
            313: "PIVOT.FIELD.PROPERTIES",
            314: "PIVOT.FIELD",
            315: "PIVOT.ITEM",
            316: "PIVOT.ADD.FIELDS",
            318: "OPTIONS.CALCULATION",
            319: "OPTIONS.EDIT",
            320: "OPTIONS.VIEW",
            321: "ADDIN.MANAGER",
            322: "MENU.EDITOR",
            323: "ATTACH.TOOLBARS",
            324: "VBAActivate",
            325: "OPTIONS.CHART",
            328: "VBA.INSERT.FILE",
            330: "VBA.PROCEDURE.DEFINITION",
            336: "ROUTING.SLIP",
            338: "ROUTE.DOCUMENT",
            339: "MAIL.LOGON",
            342: "INSERT.PICTURE",
            343: "EDIT.TOOL",
            344: "GALLERY.DOUGHNUT",
            350: "CHART.TREND",
            352: "PIVOT.ITEM.PROPERTIES",
            354: "WORKBOOK.INSERT",
            355: "OPTIONS.TRANSITION",
            356: "OPTIONS.GENERAL",
            370: "FILTER.ADVANCED",
            373: "MAIL.ADD.MAILER",
            374: "MAIL.DELETE.MAILER",
            375: "MAIL.REPLY",
            376: "MAIL.REPLY.ALL",
            377: "MAIL.FORWARD",
            378: "MAIL.NEXT.LETTER",
            379: "DATA.LABEL",
            380: "INSERT.TITLE",
            381: "FONT.PROPERTIES",
            382: "MACRO.OPTIONS",
            383: "WORKBOOK.HIDE",
            384: "WORKBOOK.UNHIDE",
            385: "WORKBOOK.DELETE",
            386: "WORKBOOK.NAME",
            388: "GALLERY.CUSTOM",
            390: "ADD.CHART.AUTOFORMAT",
            391: "DELETE.CHART.AUTOFORMAT",
            392: "CHART.ADD.DATA",
            393: "AUTO.OUTLINE",
            394: "TAB.ORDER",
            395: "SHOW.DIALOG",
            396: "SELECT.ALL",
            397: "UNGROUP.SHEETS",
            398: "SUBTOTAL.CREATE",
            399: "SUBTOTAL.REMOVE",
            400: "RENAME.OBJECT",
            412: "WORKBOOK.SCROLL",
            413: "WORKBOOK.NEXT",
            414: "WORKBOOK.PREV",
            415: "WORKBOOK.TAB.SPLIT",
            416: "FULL.SCREEN",
            417: "WORKBOOK.PROTECT",
            420: "SCROLLBAR.PROPERTIES",
            421: "PIVOT.SHOW.PAGES",
            422: "TEXT.TO.COLUMNS",
            423: "FORMAT.CHARTTYPE",
            424: "LINK.FORMAT",
            425: "TRACER.DISPLAY",
            430: "TRACER.NAVIGATE",
            431: "TRACER.CLEAR",
            432: "TRACER.ERROR",
            433: "PIVOT.FIELD.GROUP",
            434: "PIVOT.FIELD.UNGROUP",
            435: "CHECKBOX.PROPERTIES",
            436: "LABEL.PROPERTIES",
            437: "LISTBOX.PROPERTIES",
            438: "EDITBOX.PROPERTIES",
            439: "PIVOT.REFRESH",
            440: "LINK.COMBO",
            441: "OPEN.TEXT",
            442: "HIDE.DIALOG",
            443: "SET.DIALOG.FOCUS",
            444: "ENABLE.OBJECT",
            445: "PUSHBUTTON.PROPERTIES",
            446: "SET.DIALOG.DEFAULT",
            447: "FILTER",
            448: "FILTER.SHOW.ALL",
            449: "CLEAR.OUTLINE",
            450: "FUNCTION.WIZARD",
            451: "ADD.LIST.ITEM",
            452: "SET.LIST.ITEM",
            453: "REMOVE.LIST.ITEM",
            454: "SELECT.LIST.ITEM",
            455: "SET.CONTROL.VALUE",
            456: "SAVE.COPY.AS",
            458: "OPTIONS.LISTS.ADD",
            459: "OPTIONS.LISTS.DELETE",
            460: "SERIES.AXES",
            461: "SERIES.X",
            462: "SERIES.Y",
            463: "ERRORBAR.X",
            464: "ERRORBAR.Y",
            465: "FORMAT.CHART",
            466: "SERIES.ORDER",
            467: "MAIL.LOGOFF",
            468: "CLEAR.ROUTING.SLIP",
            469: "APP.ACTIVATE.MICROSOFT",
            470: "MAIL.EDIT.MAILER",
            471: "ON.SHEET",
            472: "STANDARD.WIDTH",
            473: "SCENARIO.MERGE",
            474: "SUMMARY.INFO",
            475: "FIND.FILE",
            476: "ACTIVE.CELL.FONT",
            477: "ENABLE.TIPWIZARD",
            478: "VBA.MAKE.ADDIN",
            480: "INSERTDATATABLE",
            481: "WORKGROUP.OPTIONS",
            482: "MAIL.SEND.MAILER",
            485: "AUTOCORRECT",
            489: "POST.DOCUMENT",
            491: "PICKLIST",
            493: "VIEW.SHOW",
            494: "VIEW.DEFINE",
            495: "VIEW.DELETE",
            509: "SHEET.BACKGROUND",
            510: "INSERT.MAP.OBJECT",
            511: "OPTIONS.MENONO",
            517: "MSOCHECKS",
            518: "NORMAL",
            519: "LAYOUT",
            520: "RM.PRINT.AREA",
            521: "CLEAR.PRINT.AREA",
            522: "ADD.PRINT.AREA",
            523: "MOVE.BRK",
            545: "HIDECURR.NOTE",
            546: "HIDEALL.NOTES",
            547: "DELETE.NOTE",
            548: "TRAVERSE.NOTES",
            549: "ACTIVATE.NOTES",
            620: "PROTECT.REVISIONS",
            621: "UNPROTECT.REVISIONS",
            647: "OPTIONS.ME",
            653: "WEB.PUBLISH",
            667: "NEWWEBQUERY",
            673: "PIVOT.TABLE.CHART",
            753: "OPTIONS.SAVE",
            755: "OPTIONS.SPELL",
            808: "HIDEALL.INKANNOTS",
          },
          sw = {
            0: "COUNT",
            1: "IF",
            2: "ISNA",
            3: "ISERROR",
            4: "SUM",
            5: "AVERAGE",
            6: "MIN",
            7: "MAX",
            8: "ROW",
            9: "COLUMN",
            10: "NA",
            11: "NPV",
            12: "STDEV",
            13: "DOLLAR",
            14: "FIXED",
            15: "SIN",
            16: "COS",
            17: "TAN",
            18: "ATAN",
            19: "PI",
            20: "SQRT",
            21: "EXP",
            22: "LN",
            23: "LOG10",
            24: "ABS",
            25: "INT",
            26: "SIGN",
            27: "ROUND",
            28: "LOOKUP",
            29: "INDEX",
            30: "REPT",
            31: "MID",
            32: "LEN",
            33: "VALUE",
            34: "TRUE",
            35: "FALSE",
            36: "AND",
            37: "OR",
            38: "NOT",
            39: "MOD",
            40: "DCOUNT",
            41: "DSUM",
            42: "DAVERAGE",
            43: "DMIN",
            44: "DMAX",
            45: "DSTDEV",
            46: "VAR",
            47: "DVAR",
            48: "TEXT",
            49: "LINEST",
            50: "TREND",
            51: "LOGEST",
            52: "GROWTH",
            53: "GOTO",
            54: "HALT",
            55: "RETURN",
            56: "PV",
            57: "FV",
            58: "NPER",
            59: "PMT",
            60: "RATE",
            61: "MIRR",
            62: "IRR",
            63: "RAND",
            64: "MATCH",
            65: "DATE",
            66: "TIME",
            67: "DAY",
            68: "MONTH",
            69: "YEAR",
            70: "WEEKDAY",
            71: "HOUR",
            72: "MINUTE",
            73: "SECOND",
            74: "NOW",
            75: "AREAS",
            76: "ROWS",
            77: "COLUMNS",
            78: "OFFSET",
            79: "ABSREF",
            80: "RELREF",
            81: "ARGUMENT",
            82: "SEARCH",
            83: "TRANSPOSE",
            84: "ERROR",
            85: "STEP",
            86: "TYPE",
            87: "ECHO",
            88: "SET.NAME",
            89: "CALLER",
            90: "DEREF",
            91: "WINDOWS",
            92: "SERIES",
            93: "DOCUMENTS",
            94: "ACTIVE.CELL",
            95: "SELECTION",
            96: "RESULT",
            97: "ATAN2",
            98: "ASIN",
            99: "ACOS",
            100: "CHOOSE",
            101: "HLOOKUP",
            102: "VLOOKUP",
            103: "LINKS",
            104: "INPUT",
            105: "ISREF",
            106: "GET.FORMULA",
            107: "GET.NAME",
            108: "SET.VALUE",
            109: "LOG",
            110: "EXEC",
            111: "CHAR",
            112: "LOWER",
            113: "UPPER",
            114: "PROPER",
            115: "LEFT",
            116: "RIGHT",
            117: "EXACT",
            118: "TRIM",
            119: "REPLACE",
            120: "SUBSTITUTE",
            121: "CODE",
            122: "NAMES",
            123: "DIRECTORY",
            124: "FIND",
            125: "CELL",
            126: "ISERR",
            127: "ISTEXT",
            128: "ISNUMBER",
            129: "ISBLANK",
            130: "T",
            131: "N",
            132: "FOPEN",
            133: "FCLOSE",
            134: "FSIZE",
            135: "FREADLN",
            136: "FREAD",
            137: "FWRITELN",
            138: "FWRITE",
            139: "FPOS",
            140: "DATEVALUE",
            141: "TIMEVALUE",
            142: "SLN",
            143: "SYD",
            144: "DDB",
            145: "GET.DEF",
            146: "REFTEXT",
            147: "TEXTREF",
            148: "INDIRECT",
            149: "REGISTER",
            150: "CALL",
            151: "ADD.BAR",
            152: "ADD.MENU",
            153: "ADD.COMMAND",
            154: "ENABLE.COMMAND",
            155: "CHECK.COMMAND",
            156: "RENAME.COMMAND",
            157: "SHOW.BAR",
            158: "DELETE.MENU",
            159: "DELETE.COMMAND",
            160: "GET.CHART.ITEM",
            161: "DIALOG.BOX",
            162: "CLEAN",
            163: "MDETERM",
            164: "MINVERSE",
            165: "MMULT",
            166: "FILES",
            167: "IPMT",
            168: "PPMT",
            169: "COUNTA",
            170: "CANCEL.KEY",
            171: "FOR",
            172: "WHILE",
            173: "BREAK",
            174: "NEXT",
            175: "INITIATE",
            176: "REQUEST",
            177: "POKE",
            178: "EXECUTE",
            179: "TERMINATE",
            180: "RESTART",
            181: "HELP",
            182: "GET.BAR",
            183: "PRODUCT",
            184: "FACT",
            185: "GET.CELL",
            186: "GET.WORKSPACE",
            187: "GET.WINDOW",
            188: "GET.DOCUMENT",
            189: "DPRODUCT",
            190: "ISNONTEXT",
            191: "GET.NOTE",
            192: "NOTE",
            193: "STDEVP",
            194: "VARP",
            195: "DSTDEVP",
            196: "DVARP",
            197: "TRUNC",
            198: "ISLOGICAL",
            199: "DCOUNTA",
            200: "DELETE.BAR",
            201: "UNREGISTER",
            204: "USDOLLAR",
            205: "FINDB",
            206: "SEARCHB",
            207: "REPLACEB",
            208: "LEFTB",
            209: "RIGHTB",
            210: "MIDB",
            211: "LENB",
            212: "ROUNDUP",
            213: "ROUNDDOWN",
            214: "ASC",
            215: "DBCS",
            216: "RANK",
            219: "ADDRESS",
            220: "DAYS360",
            221: "TODAY",
            222: "VDB",
            223: "ELSE",
            224: "ELSE.IF",
            225: "END.IF",
            226: "FOR.CELL",
            227: "MEDIAN",
            228: "SUMPRODUCT",
            229: "SINH",
            230: "COSH",
            231: "TANH",
            232: "ASINH",
            233: "ACOSH",
            234: "ATANH",
            235: "DGET",
            236: "CREATE.OBJECT",
            237: "VOLATILE",
            238: "LAST.ERROR",
            239: "CUSTOM.UNDO",
            240: "CUSTOM.REPEAT",
            241: "FORMULA.CONVERT",
            242: "GET.LINK.INFO",
            243: "TEXT.BOX",
            244: "INFO",
            245: "GROUP",
            246: "GET.OBJECT",
            247: "DB",
            248: "PAUSE",
            251: "RESUME",
            252: "FREQUENCY",
            253: "ADD.TOOLBAR",
            254: "DELETE.TOOLBAR",
            255: "User",
            256: "RESET.TOOLBAR",
            257: "EVALUATE",
            258: "GET.TOOLBAR",
            259: "GET.TOOL",
            260: "SPELLING.CHECK",
            261: "ERROR.TYPE",
            262: "APP.TITLE",
            263: "WINDOW.TITLE",
            264: "SAVE.TOOLBAR",
            265: "ENABLE.TOOL",
            266: "PRESS.TOOL",
            267: "REGISTER.ID",
            268: "GET.WORKBOOK",
            269: "AVEDEV",
            270: "BETADIST",
            271: "GAMMALN",
            272: "BETAINV",
            273: "BINOMDIST",
            274: "CHIDIST",
            275: "CHIINV",
            276: "COMBIN",
            277: "CONFIDENCE",
            278: "CRITBINOM",
            279: "EVEN",
            280: "EXPONDIST",
            281: "FDIST",
            282: "FINV",
            283: "FISHER",
            284: "FISHERINV",
            285: "FLOOR",
            286: "GAMMADIST",
            287: "GAMMAINV",
            288: "CEILING",
            289: "HYPGEOMDIST",
            290: "LOGNORMDIST",
            291: "LOGINV",
            292: "NEGBINOMDIST",
            293: "NORMDIST",
            294: "NORMSDIST",
            295: "NORMINV",
            296: "NORMSINV",
            297: "STANDARDIZE",
            298: "ODD",
            299: "PERMUT",
            300: "POISSON",
            301: "TDIST",
            302: "WEIBULL",
            303: "SUMXMY2",
            304: "SUMX2MY2",
            305: "SUMX2PY2",
            306: "CHITEST",
            307: "CORREL",
            308: "COVAR",
            309: "FORECAST",
            310: "FTEST",
            311: "INTERCEPT",
            312: "PEARSON",
            313: "RSQ",
            314: "STEYX",
            315: "SLOPE",
            316: "TTEST",
            317: "PROB",
            318: "DEVSQ",
            319: "GEOMEAN",
            320: "HARMEAN",
            321: "SUMSQ",
            322: "KURT",
            323: "SKEW",
            324: "ZTEST",
            325: "LARGE",
            326: "SMALL",
            327: "QUARTILE",
            328: "PERCENTILE",
            329: "PERCENTRANK",
            330: "MODE",
            331: "TRIMMEAN",
            332: "TINV",
            334: "MOVIE.COMMAND",
            335: "GET.MOVIE",
            336: "CONCATENATE",
            337: "POWER",
            338: "PIVOT.ADD.DATA",
            339: "GET.PIVOT.TABLE",
            340: "GET.PIVOT.FIELD",
            341: "GET.PIVOT.ITEM",
            342: "RADIANS",
            343: "DEGREES",
            344: "SUBTOTAL",
            345: "SUMIF",
            346: "COUNTIF",
            347: "COUNTBLANK",
            348: "SCENARIO.GET",
            349: "OPTIONS.LISTS.GET",
            350: "ISPMT",
            351: "DATEDIF",
            352: "DATESTRING",
            353: "NUMBERSTRING",
            354: "ROMAN",
            355: "OPEN.DIALOG",
            356: "SAVE.DIALOG",
            357: "VIEW.GET",
            358: "GETPIVOTDATA",
            359: "HYPERLINK",
            360: "PHONETIC",
            361: "AVERAGEA",
            362: "MAXA",
            363: "MINA",
            364: "STDEVPA",
            365: "VARPA",
            366: "STDEVA",
            367: "VARA",
            368: "BAHTTEXT",
            369: "THAIDAYOFWEEK",
            370: "THAIDIGIT",
            371: "THAIMONTHOFYEAR",
            372: "THAINUMSOUND",
            373: "THAINUMSTRING",
            374: "THAISTRINGLENGTH",
            375: "ISTHAIDIGIT",
            376: "ROUNDBAHTDOWN",
            377: "ROUNDBAHTUP",
            378: "THAIYEAR",
            379: "RTD",
            380: "CUBEVALUE",
            381: "CUBEMEMBER",
            382: "CUBEMEMBERPROPERTY",
            383: "CUBERANKEDMEMBER",
            384: "HEX2BIN",
            385: "HEX2DEC",
            386: "HEX2OCT",
            387: "DEC2BIN",
            388: "DEC2HEX",
            389: "DEC2OCT",
            390: "OCT2BIN",
            391: "OCT2HEX",
            392: "OCT2DEC",
            393: "BIN2DEC",
            394: "BIN2OCT",
            395: "BIN2HEX",
            396: "IMSUB",
            397: "IMDIV",
            398: "IMPOWER",
            399: "IMABS",
            400: "IMSQRT",
            401: "IMLN",
            402: "IMLOG2",
            403: "IMLOG10",
            404: "IMSIN",
            405: "IMCOS",
            406: "IMEXP",
            407: "IMARGUMENT",
            408: "IMCONJUGATE",
            409: "IMAGINARY",
            410: "IMREAL",
            411: "COMPLEX",
            412: "IMSUM",
            413: "IMPRODUCT",
            414: "SERIESSUM",
            415: "FACTDOUBLE",
            416: "SQRTPI",
            417: "QUOTIENT",
            418: "DELTA",
            419: "GESTEP",
            420: "ISEVEN",
            421: "ISODD",
            422: "MROUND",
            423: "ERF",
            424: "ERFC",
            425: "BESSELJ",
            426: "BESSELK",
            427: "BESSELY",
            428: "BESSELI",
            429: "XIRR",
            430: "XNPV",
            431: "PRICEMAT",
            432: "YIELDMAT",
            433: "INTRATE",
            434: "RECEIVED",
            435: "DISC",
            436: "PRICEDISC",
            437: "YIELDDISC",
            438: "TBILLEQ",
            439: "TBILLPRICE",
            440: "TBILLYIELD",
            441: "PRICE",
            442: "YIELD",
            443: "DOLLARDE",
            444: "DOLLARFR",
            445: "NOMINAL",
            446: "EFFECT",
            447: "CUMPRINC",
            448: "CUMIPMT",
            449: "EDATE",
            450: "EOMONTH",
            451: "YEARFRAC",
            452: "COUPDAYBS",
            453: "COUPDAYS",
            454: "COUPDAYSNC",
            455: "COUPNCD",
            456: "COUPNUM",
            457: "COUPPCD",
            458: "DURATION",
            459: "MDURATION",
            460: "ODDLPRICE",
            461: "ODDLYIELD",
            462: "ODDFPRICE",
            463: "ODDFYIELD",
            464: "RANDBETWEEN",
            465: "WEEKNUM",
            466: "AMORDEGRC",
            467: "AMORLINC",
            468: "CONVERT",
            724: "SHEETJS",
            469: "ACCRINT",
            470: "ACCRINTM",
            471: "WORKDAY",
            472: "NETWORKDAYS",
            473: "GCD",
            474: "MULTINOMIAL",
            475: "LCM",
            476: "FVSCHEDULE",
            477: "CUBEKPIMEMBER",
            478: "CUBESET",
            479: "CUBESETCOUNT",
            480: "IFERROR",
            481: "COUNTIFS",
            482: "SUMIFS",
            483: "AVERAGEIF",
            484: "AVERAGEIFS",
          },
          sC = {
            2: 1,
            3: 1,
            10: 0,
            15: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 0,
            20: 1,
            21: 1,
            22: 1,
            23: 1,
            24: 1,
            25: 1,
            26: 1,
            27: 2,
            30: 2,
            31: 3,
            32: 1,
            33: 1,
            34: 0,
            35: 0,
            38: 1,
            39: 2,
            40: 3,
            41: 3,
            42: 3,
            43: 3,
            44: 3,
            45: 3,
            47: 3,
            48: 2,
            53: 1,
            61: 3,
            63: 0,
            65: 3,
            66: 3,
            67: 1,
            68: 1,
            69: 1,
            70: 1,
            71: 1,
            72: 1,
            73: 1,
            74: 0,
            75: 1,
            76: 1,
            77: 1,
            79: 2,
            80: 2,
            83: 1,
            85: 0,
            86: 1,
            89: 0,
            90: 1,
            94: 0,
            95: 0,
            97: 2,
            98: 1,
            99: 1,
            101: 3,
            102: 3,
            105: 1,
            106: 1,
            108: 2,
            111: 1,
            112: 1,
            113: 1,
            114: 1,
            117: 2,
            118: 1,
            119: 4,
            121: 1,
            126: 1,
            127: 1,
            128: 1,
            129: 1,
            130: 1,
            131: 1,
            133: 1,
            134: 1,
            135: 1,
            136: 2,
            137: 2,
            138: 2,
            140: 1,
            141: 1,
            142: 3,
            143: 4,
            144: 4,
            161: 1,
            162: 1,
            163: 1,
            164: 1,
            165: 2,
            172: 1,
            175: 2,
            176: 2,
            177: 3,
            178: 2,
            179: 1,
            184: 1,
            186: 1,
            189: 3,
            190: 1,
            195: 3,
            196: 3,
            197: 1,
            198: 1,
            199: 3,
            201: 1,
            207: 4,
            210: 3,
            211: 1,
            212: 2,
            213: 2,
            214: 1,
            215: 1,
            225: 0,
            229: 1,
            230: 1,
            231: 1,
            232: 1,
            233: 1,
            234: 1,
            235: 3,
            244: 1,
            247: 4,
            252: 2,
            257: 1,
            261: 1,
            271: 1,
            273: 4,
            274: 2,
            275: 2,
            276: 2,
            277: 3,
            278: 3,
            279: 1,
            280: 3,
            281: 3,
            282: 3,
            283: 1,
            284: 1,
            285: 2,
            286: 4,
            287: 3,
            288: 2,
            289: 4,
            290: 3,
            291: 3,
            292: 3,
            293: 4,
            294: 1,
            295: 3,
            296: 1,
            297: 3,
            298: 1,
            299: 2,
            300: 3,
            301: 3,
            302: 4,
            303: 2,
            304: 2,
            305: 2,
            306: 2,
            307: 2,
            308: 2,
            309: 3,
            310: 2,
            311: 2,
            312: 2,
            313: 2,
            314: 2,
            315: 2,
            316: 4,
            325: 2,
            326: 2,
            327: 2,
            328: 2,
            331: 2,
            332: 2,
            337: 2,
            342: 1,
            343: 1,
            346: 2,
            347: 1,
            350: 4,
            351: 3,
            352: 1,
            353: 2,
            360: 1,
            368: 1,
            369: 1,
            370: 1,
            371: 1,
            372: 1,
            373: 1,
            374: 1,
            375: 1,
            376: 1,
            377: 1,
            378: 1,
            382: 3,
            385: 1,
            392: 1,
            393: 1,
            396: 2,
            397: 2,
            398: 2,
            399: 1,
            400: 1,
            401: 1,
            402: 1,
            403: 1,
            404: 1,
            405: 1,
            406: 1,
            407: 1,
            408: 1,
            409: 1,
            410: 1,
            414: 4,
            415: 1,
            416: 1,
            417: 2,
            420: 1,
            421: 1,
            422: 2,
            424: 1,
            425: 2,
            426: 2,
            427: 2,
            428: 2,
            430: 3,
            438: 3,
            439: 3,
            440: 3,
            443: 2,
            444: 2,
            445: 2,
            446: 2,
            447: 6,
            448: 6,
            449: 2,
            450: 2,
            464: 2,
            468: 3,
            476: 2,
            479: 1,
            480: 2,
            65535: 0,
          },
          sB = {
            "_xlfn.ACOT": "ACOT",
            "_xlfn.ACOTH": "ACOTH",
            "_xlfn.AGGREGATE": "AGGREGATE",
            "_xlfn.ARABIC": "ARABIC",
            "_xlfn.AVERAGEIF": "AVERAGEIF",
            "_xlfn.AVERAGEIFS": "AVERAGEIFS",
            "_xlfn.BASE": "BASE",
            "_xlfn.BETA.DIST": "BETA.DIST",
            "_xlfn.BETA.INV": "BETA.INV",
            "_xlfn.BINOM.DIST": "BINOM.DIST",
            "_xlfn.BINOM.DIST.RANGE": "BINOM.DIST.RANGE",
            "_xlfn.BINOM.INV": "BINOM.INV",
            "_xlfn.BITAND": "BITAND",
            "_xlfn.BITLSHIFT": "BITLSHIFT",
            "_xlfn.BITOR": "BITOR",
            "_xlfn.BITRSHIFT": "BITRSHIFT",
            "_xlfn.BITXOR": "BITXOR",
            "_xlfn.CEILING.MATH": "CEILING.MATH",
            "_xlfn.CEILING.PRECISE": "CEILING.PRECISE",
            "_xlfn.CHISQ.DIST": "CHISQ.DIST",
            "_xlfn.CHISQ.DIST.RT": "CHISQ.DIST.RT",
            "_xlfn.CHISQ.INV": "CHISQ.INV",
            "_xlfn.CHISQ.INV.RT": "CHISQ.INV.RT",
            "_xlfn.CHISQ.TEST": "CHISQ.TEST",
            "_xlfn.COMBINA": "COMBINA",
            "_xlfn.CONCAT": "CONCAT",
            "_xlfn.CONFIDENCE.NORM": "CONFIDENCE.NORM",
            "_xlfn.CONFIDENCE.T": "CONFIDENCE.T",
            "_xlfn.COT": "COT",
            "_xlfn.COTH": "COTH",
            "_xlfn.COUNTIFS": "COUNTIFS",
            "_xlfn.COVARIANCE.P": "COVARIANCE.P",
            "_xlfn.COVARIANCE.S": "COVARIANCE.S",
            "_xlfn.CSC": "CSC",
            "_xlfn.CSCH": "CSCH",
            "_xlfn.DAYS": "DAYS",
            "_xlfn.DECIMAL": "DECIMAL",
            "_xlfn.ECMA.CEILING": "ECMA.CEILING",
            "_xlfn.ERF.PRECISE": "ERF.PRECISE",
            "_xlfn.ERFC.PRECISE": "ERFC.PRECISE",
            "_xlfn.EXPON.DIST": "EXPON.DIST",
            "_xlfn.F.DIST": "F.DIST",
            "_xlfn.F.DIST.RT": "F.DIST.RT",
            "_xlfn.F.INV": "F.INV",
            "_xlfn.F.INV.RT": "F.INV.RT",
            "_xlfn.F.TEST": "F.TEST",
            "_xlfn.FILTERXML": "FILTERXML",
            "_xlfn.FLOOR.MATH": "FLOOR.MATH",
            "_xlfn.FLOOR.PRECISE": "FLOOR.PRECISE",
            "_xlfn.FORECAST.ETS": "FORECAST.ETS",
            "_xlfn.FORECAST.ETS.CONFINT": "FORECAST.ETS.CONFINT",
            "_xlfn.FORECAST.ETS.SEASONALITY": "FORECAST.ETS.SEASONALITY",
            "_xlfn.FORECAST.ETS.STAT": "FORECAST.ETS.STAT",
            "_xlfn.FORECAST.LINEAR": "FORECAST.LINEAR",
            "_xlfn.FORMULATEXT": "FORMULATEXT",
            "_xlfn.GAMMA": "GAMMA",
            "_xlfn.GAMMA.DIST": "GAMMA.DIST",
            "_xlfn.GAMMA.INV": "GAMMA.INV",
            "_xlfn.GAMMALN.PRECISE": "GAMMALN.PRECISE",
            "_xlfn.GAUSS": "GAUSS",
            "_xlfn.HYPGEOM.DIST": "HYPGEOM.DIST",
            "_xlfn.IFERROR": "IFERROR",
            "_xlfn.IFNA": "IFNA",
            "_xlfn.IFS": "IFS",
            "_xlfn.IMCOSH": "IMCOSH",
            "_xlfn.IMCOT": "IMCOT",
            "_xlfn.IMCSC": "IMCSC",
            "_xlfn.IMCSCH": "IMCSCH",
            "_xlfn.IMSEC": "IMSEC",
            "_xlfn.IMSECH": "IMSECH",
            "_xlfn.IMSINH": "IMSINH",
            "_xlfn.IMTAN": "IMTAN",
            "_xlfn.ISFORMULA": "ISFORMULA",
            "_xlfn.ISO.CEILING": "ISO.CEILING",
            "_xlfn.ISOWEEKNUM": "ISOWEEKNUM",
            "_xlfn.LOGNORM.DIST": "LOGNORM.DIST",
            "_xlfn.LOGNORM.INV": "LOGNORM.INV",
            "_xlfn.MAXIFS": "MAXIFS",
            "_xlfn.MINIFS": "MINIFS",
            "_xlfn.MODE.MULT": "MODE.MULT",
            "_xlfn.MODE.SNGL": "MODE.SNGL",
            "_xlfn.MUNIT": "MUNIT",
            "_xlfn.NEGBINOM.DIST": "NEGBINOM.DIST",
            "_xlfn.NETWORKDAYS.INTL": "NETWORKDAYS.INTL",
            "_xlfn.NIGBINOM": "NIGBINOM",
            "_xlfn.NORM.DIST": "NORM.DIST",
            "_xlfn.NORM.INV": "NORM.INV",
            "_xlfn.NORM.S.DIST": "NORM.S.DIST",
            "_xlfn.NORM.S.INV": "NORM.S.INV",
            "_xlfn.NUMBERVALUE": "NUMBERVALUE",
            "_xlfn.PDURATION": "PDURATION",
            "_xlfn.PERCENTILE.EXC": "PERCENTILE.EXC",
            "_xlfn.PERCENTILE.INC": "PERCENTILE.INC",
            "_xlfn.PERCENTRANK.EXC": "PERCENTRANK.EXC",
            "_xlfn.PERCENTRANK.INC": "PERCENTRANK.INC",
            "_xlfn.PERMUTATIONA": "PERMUTATIONA",
            "_xlfn.PHI": "PHI",
            "_xlfn.POISSON.DIST": "POISSON.DIST",
            "_xlfn.QUARTILE.EXC": "QUARTILE.EXC",
            "_xlfn.QUARTILE.INC": "QUARTILE.INC",
            "_xlfn.QUERYSTRING": "QUERYSTRING",
            "_xlfn.RANK.AVG": "RANK.AVG",
            "_xlfn.RANK.EQ": "RANK.EQ",
            "_xlfn.RRI": "RRI",
            "_xlfn.SEC": "SEC",
            "_xlfn.SECH": "SECH",
            "_xlfn.SHEET": "SHEET",
            "_xlfn.SHEETS": "SHEETS",
            "_xlfn.SKEW.P": "SKEW.P",
            "_xlfn.STDEV.P": "STDEV.P",
            "_xlfn.STDEV.S": "STDEV.S",
            "_xlfn.SUMIFS": "SUMIFS",
            "_xlfn.SWITCH": "SWITCH",
            "_xlfn.T.DIST": "T.DIST",
            "_xlfn.T.DIST.2T": "T.DIST.2T",
            "_xlfn.T.DIST.RT": "T.DIST.RT",
            "_xlfn.T.INV": "T.INV",
            "_xlfn.T.INV.2T": "T.INV.2T",
            "_xlfn.T.TEST": "T.TEST",
            "_xlfn.TEXTJOIN": "TEXTJOIN",
            "_xlfn.UNICHAR": "UNICHAR",
            "_xlfn.UNICODE": "UNICODE",
            "_xlfn.VAR.P": "VAR.P",
            "_xlfn.VAR.S": "VAR.S",
            "_xlfn.WEBSERVICE": "WEBSERVICE",
            "_xlfn.WEIBULL.DIST": "WEIBULL.DIST",
            "_xlfn.WORKDAY.INTL": "WORKDAY.INTL",
            "_xlfn.XOR": "XOR",
            "_xlfn.Z.TEST": "Z.TEST",
          };
        function sT(e) {
          return (
            "of:" == e.slice(0, 3) && (e = e.slice(3)),
            61 == e.charCodeAt(0) &&
              61 == (e = e.slice(1)).charCodeAt(0) &&
              (e = e.slice(1)),
            (e = (e = (e = e.replace(/COM\.MICROSOFT\./g, "")).replace(
              /\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,
              function (e, t) {
                return t.replace(/\./g, "");
              }
            )).replace(/\[.(#[A-Z]*[?!])\]/g, "$1"))
              .replace(/[;~]/g, ",")
              .replace(/\|/g, ";")
          );
        }
        function sx(e) {
          var t = e.split(":");
          return [
            t[0].split(".")[0],
            t[0].split(".")[1] +
              (t.length > 1
                ? ":" + (t[1].split(".")[1] || t[1].split(".")[0])
                : ""),
          ];
        }
        var s_ = {},
          sk = {};
        r$.WS = [
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
          "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet",
        ];
        var sA = "undefined" != typeof Map;
        function sI(e, t, r) {
          var n = 0,
            a = e.length;
          if (r) {
            if (sA ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
              for (var s = sA ? r.get(t) : r[t]; n < s.length; ++n)
                if (e[s[n]].t === t) return e.Count++, s[n];
            }
          } else for (; n < a; ++n) if (e[n].t === t) return e.Count++, n;
          return (
            (e[a] = { t: t }),
            e.Count++,
            e.Unique++,
            r &&
              (sA
                ? (r.has(t) || r.set(t, []), r.get(t).push(a))
                : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []),
                  r[t].push(a))),
            a
          );
        }
        function sy(e, t) {
          var r = { min: e + 1, max: e + 1 },
            n = -1;
          return (
            t.MDW && (aw = t.MDW),
            null != t.width
              ? (r.customWidth = 1)
              : null != t.wpx
                ? (n = aB(t.wpx))
                : null != t.wch && (n = t.wch),
            n > -1
              ? ((r.width = aT(n)), (r.customWidth = 1))
              : null != t.width && (r.width = t.width),
            t.hidden && (r.hidden = !0),
            r
          );
        }
        function sR(e, t) {
          if (e) {
            var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
            "xlml" == t && (r = [1, 1, 1, 1, 0.5, 0.5]),
              null == e.left && (e.left = r[0]),
              null == e.right && (e.right = r[1]),
              null == e.top && (e.top = r[2]),
              null == e.bottom && (e.bottom = r[3]),
              null == e.header && (e.header = r[4]),
              null == e.footer && (e.footer = r[5]);
          }
        }
        function sF(e, t, r) {
          var n = r.revssf[null != t.z ? t.z : "General"],
            a = 60,
            s = e.length;
          if (null == n && r.ssf) {
            for (; a < 392; ++a)
              if (null == r.ssf[a]) {
                ev.load(t.z, a), (r.ssf[a] = t.z), (r.revssf[t.z] = n = a);
                break;
              }
          }
          for (a = 0; a != s; ++a) if (e[a].numFmtId === n) return a;
          return (
            (e[s] = {
              numFmtId: n,
              fontId: 0,
              fillId: 0,
              borderId: 0,
              xfId: 0,
              applyNumberFormat: 1,
            }),
            s
          );
        }
        function sD(e, t, r, n, a, s) {
          try {
            n.cellNF && (e.z = ev._table[t]);
          } catch (e) {
            if (n.WTF) throw e;
          }
          if ("z" !== e.t || n.cellStyles) {
            if (
              ("d" === e.t && "string" == typeof e.v && (e.v = eN(e.v)),
              (!n || !1 !== n.cellText) && "z" !== e.t)
            )
              try {
                if (
                  (null == ev._table[t] && ev.load(eS[t] || "General", t),
                  "e" === e.t)
                )
                  e.w = e.w || rU[e.v];
                else if (0 === t) {
                  if ("n" === e.t)
                    (0 | e.v) === e.v
                      ? (e.w = ev._general_int(e.v))
                      : (e.w = ev._general_num(e.v));
                  else if ("d" === e.t) {
                    var i = eI(e.v);
                    (0 | i) === i
                      ? (e.w = ev._general_int(i))
                      : (e.w = ev._general_num(i));
                  } else {
                    if (void 0 === e.v) return "";
                    e.w = ev._general(e.v, sk);
                  }
                } else
                  "d" === e.t
                    ? (e.w = ev.format(t, eI(e.v), sk))
                    : (e.w = ev.format(t, e.v, sk));
              } catch (e) {
                if (n.WTF) throw e;
              }
            if (n.cellStyles && null != r)
              try {
                (e.s = s.Fills[r]),
                  e.s.fgColor &&
                    e.s.fgColor.theme &&
                    !e.s.fgColor.rgb &&
                    ((e.s.fgColor.rgb = aS(
                      a.themeElements.clrScheme[e.s.fgColor.theme].rgb,
                      e.s.fgColor.tint || 0
                    )),
                    n.WTF &&
                      (e.s.fgColor.raw_rgb =
                        a.themeElements.clrScheme[e.s.fgColor.theme].rgb)),
                  e.s.bgColor &&
                    e.s.bgColor.theme &&
                    ((e.s.bgColor.rgb = aS(
                      a.themeElements.clrScheme[e.s.bgColor.theme].rgb,
                      e.s.bgColor.tint || 0
                    )),
                    n.WTF &&
                      (e.s.bgColor.raw_rgb =
                        a.themeElements.clrScheme[e.s.bgColor.theme].rgb));
              } catch (e) {
                if (n.WTF && s.Fills) throw e;
              }
          }
        }
        var sO = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,
          sP = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/,
          sN = /<(?:\w:)?hyperlink [^>]*>/gm,
          sM = /"(\w*:\w*)"/,
          sL = /<(?:\w:)?col\b[^>]*[\/]?>/g,
          sU =
            /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,
          sH = /<(?:\w:)?pageMargins[^>]*\/>/g,
          sW = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/,
          sV =
            /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
        function sX(e, t, r, n) {
          var a = e2(e);
          r.Sheets[n] || (r.Sheets[n] = {}),
            a.codeName && (r.Sheets[n].CodeName = e6(ts(a.codeName)));
        }
        var sG = [
            "objects",
            "scenarios",
            "selectLockedCells",
            "selectUnlockedCells",
          ],
          sz = [
            "formatColumns",
            "formatRows",
            "formatCells",
            "insertColumns",
            "insertRows",
            "insertHyperlinks",
            "deleteColumns",
            "deleteRows",
            "sort",
            "autoFilter",
            "pivotTables",
          ],
          sj = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/,
          s$ =
            ((x = /<(?:\w+:)?c[ \/>]/),
            (_ = /<\/(?:\w+:)?row>/),
            (k = /r=["']([^"']*)["']/),
            (A = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/),
            (I = /ref=["']([^"']*)["']/),
            (y = tf("v")),
            (R = tf("f")),
            function (e, t, r, n, a, s) {
              for (
                var i,
                  o,
                  c,
                  l,
                  f,
                  h = 0,
                  u = "",
                  d = [],
                  p = [],
                  m = 0,
                  g = 0,
                  v = 0,
                  b = "",
                  E = 0,
                  S = 0,
                  w = 0,
                  C = 0,
                  B = Array.isArray(s.CellXf),
                  T = [],
                  F = [],
                  D = Array.isArray(t),
                  O = [],
                  P = {},
                  N = !1,
                  M = !!r.sheetStubs,
                  L = e.split(_),
                  U = 0,
                  H = L.length;
                U != H;
                ++U
              ) {
                var W = (u = L[U].trim()).length;
                if (0 !== W) {
                  for (h = 0; h < W && 62 !== u.charCodeAt(h); ++h);
                  if (
                    (++h,
                    (E =
                      null != (o = e2(u.slice(0, h), !0)).r
                        ? parseInt(o.r, 10)
                        : E + 1),
                    (S = -1),
                    !r.sheetRows || !(r.sheetRows < E))
                  ) {
                    n.s.r > E - 1 && (n.s.r = E - 1),
                      n.e.r < E - 1 && (n.e.r = E - 1),
                      r &&
                        r.cellStyles &&
                        ((P = {}),
                        (N = !1),
                        o.ht &&
                          ((N = !0),
                          (P.hpt = parseFloat(o.ht)),
                          (P.hpx = aI(P.hpt))),
                        "1" == o.hidden && ((N = !0), (P.hidden = !0)),
                        null != o.outlineLevel &&
                          ((N = !0), (P.level = +o.outlineLevel)),
                        N && (O[E - 1] = P)),
                      (d = u.slice(h).split(x));
                    for (
                      var V = 0;
                      V != d.length && "<" == d[V].trim().charAt(0);
                      ++V
                    );
                    for (h = 0, d = d.slice(V); h != d.length; ++h)
                      if (0 !== (u = d[h].trim()).length) {
                        if (
                          ((p = u.match(k)),
                          (m = h),
                          (g = 0),
                          (v = 0),
                          (u = "<c " + ("<" == u.slice(0, 1) ? ">" : "") + u),
                          null != p && 2 === p.length)
                        ) {
                          for (
                            g = 0, m = 0, b = p[1];
                            g != b.length &&
                            !((v = b.charCodeAt(g) - 64) < 1) &&
                            !(v > 26);
                            ++g
                          )
                            m = 26 * m + v;
                          S = --m;
                        } else ++S;
                        for (
                          g = 0;
                          g != u.length && 62 !== u.charCodeAt(g);
                          ++g
                        );
                        if (
                          (++g,
                          (o = e2(u.slice(0, g), !0)).r ||
                            (o.r = rn({ r: E - 1, c: S })),
                          (b = u.slice(g)),
                          (i = { t: "" }),
                          null != (p = b.match(y)) &&
                            "" !== p[1] &&
                            (i.v = e6(p[1])),
                          r.cellFormula)
                        ) {
                          if (null != (p = b.match(R)) && "" !== p[1]) {
                            if (
                              ((i.f = e6(ts(p[1])).replace(/\r\n/g, "\n")),
                              r.xlfn || (i.f = a6(i.f)),
                              p[0].indexOf('t="array"') > -1)
                            )
                              (i.F = (b.match(I) || [])[1]),
                                i.F.indexOf(":") > -1 && T.push([ri(i.F), i.F]);
                            else if (p[0].indexOf('t="shared"') > -1) {
                              l = e2(p[0]);
                              var X = e6(ts(p[1]));
                              r.xlfn || (X = a6(X)),
                                (F[parseInt(l.si, 10)] = [l, X, o.r]);
                            }
                          } else
                            (p = b.match(/<f[^>]*\/>/)) &&
                              F[(l = e2(p[0])).si] &&
                              (i.f = (function (e, t, r) {
                                var n = ra(t).s,
                                  a = rr(r);
                                return a5(e, { r: a.r - n.r, c: a.c - n.c });
                              })(F[l.si][1], F[l.si][2], o.r));
                          var G = rr(o.r);
                          for (g = 0; g < T.length; ++g)
                            G.r >= T[g][0].s.r &&
                              G.r <= T[g][0].e.r &&
                              G.c >= T[g][0].s.c &&
                              G.c <= T[g][0].e.c &&
                              (i.F = T[g][1]);
                        }
                        if (null == o.t && void 0 === i.v) {
                          if (i.f || i.F) (i.v = 0), (i.t = "n");
                          else {
                            if (!M) continue;
                            i.t = "z";
                          }
                        } else i.t = o.t || "n";
                        switch (
                          (n.s.c > S && (n.s.c = S),
                          n.e.c < S && (n.e.c = S),
                          i.t)
                        ) {
                          case "n":
                            if ("" == i.v || null == i.v) {
                              if (!M) continue;
                              i.t = "z";
                            } else i.v = parseFloat(i.v);
                            break;
                          case "s":
                            if (void 0 === i.v) {
                              if (!M) continue;
                              i.t = "z";
                            } else
                              (c = s_[parseInt(i.v, 10)]),
                                (i.v = c.t),
                                (i.r = c.r),
                                r.cellHTML && (i.h = c.h);
                            break;
                          case "str":
                            (i.t = "s"),
                              (i.v = null != i.v ? ts(i.v) : ""),
                              r.cellHTML && (i.h = tr(i.v));
                            break;
                          case "inlineStr":
                            (p = b.match(A)),
                              (i.t = "s"),
                              null != p && (c = ar(p[1]))
                                ? ((i.v = c.t), r.cellHTML && (i.h = c.h))
                                : (i.v = "");
                            break;
                          case "b":
                            i.v = ta(i.v);
                            break;
                          case "d":
                            r.cellDates
                              ? (i.v = eN(i.v, 1))
                              : ((i.v = eI(eN(i.v, 1))), (i.t = "n"));
                            break;
                          case "e":
                            (r && !1 === r.cellText) || (i.w = i.v),
                              (i.v = rH[i.v]);
                        }
                        if (
                          ((w = C = 0),
                          (f = null),
                          B &&
                            void 0 !== o.s &&
                            null != (f = s.CellXf[o.s]) &&
                            (null != f.numFmtId && (w = f.numFmtId),
                            r.cellStyles && null != f.fillId && (C = f.fillId)),
                          sD(i, w, C, r, a, s),
                          r.cellDates &&
                            B &&
                            "n" == i.t &&
                            ev.is_date(ev._table[w]) &&
                            ((i.t = "d"), (i.v = eD(i.v))),
                          D)
                        ) {
                          var z = rr(o.r);
                          t[z.r] || (t[z.r] = []), (t[z.r][z.c] = i);
                        } else t[o.r] = i;
                      }
                  }
                }
              }
              O.length > 0 && (t["!rows"] = O);
            }),
          sK = tE("worksheet", null, { xmlns: tw.main[0], "xmlns:r": tw.r });
        function sY(e, t, r, n) {
          var a,
            s = [eJ, sK],
            i = r.SheetNames[e],
            o = 0,
            c = "",
            l = r.Sheets[i];
          null == l && (l = {});
          var f = l["!ref"] || "A1",
            h = ri(f);
          if (h.e.c > 16383 || h.e.r > 1048575) {
            if (t.WTF)
              throw Error("Range " + f + " exceeds format limit A1:XFD1048576");
            (h.e.c = Math.min(h.e.c, 16383)),
              (h.e.r = Math.min(h.e.c, 1048575)),
              (f = rs(h));
          }
          n || (n = {}), (l["!comments"] = []);
          var u = [];
          !(function (e, t, r, n, a) {
            var s = !1,
              i = {},
              o = null;
            if ("xlsx" !== n.bookType && t.vbaraw) {
              var c = t.SheetNames[r];
              try {
                t.Workbook && (c = t.Workbook.Sheets[r].CodeName || c);
              } catch (e) {}
              (s = !0), (i.codeName = ti(e9(c)));
            }
            if (e && e["!outline"]) {
              var l = { summaryBelow: 1, summaryRight: 1 };
              e["!outline"].above && (l.summaryBelow = 0),
                e["!outline"].left && (l.summaryRight = 0),
                (o = (o || "") + tE("outlinePr", null, l));
            }
            (s || o) && (a[a.length] = tE("sheetPr", o, i));
          })(l, r, e, t, s),
            (s[s.length] = tE("dimension", null, { ref: f })),
            (s[s.length] =
              ((d = { workbookViewId: "0" }),
              (((r || {}).Workbook || {}).Views || [])[0] &&
                (d.rightToLeft = r.Workbook.Views[0].RTL ? "1" : "0"),
              tE("sheetViews", tE("sheetView", null, d), {}))),
            t.sheetFormat &&
              (s[s.length] = tE("sheetFormatPr", null, {
                defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
                baseColWidth: t.sheetFormat.baseColWidth || "10",
                outlineLevelRow: t.sheetFormat.outlineLevelRow || "7",
              })),
            null != l["!cols"] &&
              l["!cols"].length > 0 &&
              (s[s.length] = (function (e, t) {
                for (var r, n = ["<cols>"], a = 0; a != t.length; ++a)
                  (r = t[a]) && (n[n.length] = tE("col", null, sy(a, r)));
                return (n[n.length] = "</cols>"), n.join("");
              })(0, l["!cols"])),
            (s[(o = s.length)] = "<sheetData/>"),
            (l["!links"] = []),
            null != l["!ref"] &&
              (c = (function (e, t, r, n) {
                var a,
                  s,
                  i = [],
                  o = [],
                  c = ri(e["!ref"]),
                  l = "",
                  f = "",
                  h = [],
                  u = 0,
                  d = 0,
                  p = e["!rows"],
                  m = Array.isArray(e),
                  g = { r: f },
                  v = -1;
                for (d = c.s.c; d <= c.e.c; ++d) h[d] = rt(d);
                for (u = c.s.r; u <= c.e.r; ++u) {
                  for (o = [], f = t9(u), d = c.s.c; d <= c.e.c; ++d) {
                    a = h[d] + f;
                    var b = m ? (e[u] || [])[d] : e[a];
                    void 0 !== b &&
                      null !=
                        (l = (function (e, t, r, n) {
                          if (
                            (void 0 === e.v && "string" != typeof e.f) ||
                            "z" === e.t
                          )
                            return "";
                          var a = "",
                            s = e.t,
                            i = e.v;
                          if ("z" !== e.t)
                            switch (e.t) {
                              case "b":
                                a = e.v ? "1" : "0";
                                break;
                              case "n":
                                a = "" + e.v;
                                break;
                              case "e":
                                a = rU[e.v];
                                break;
                              case "d":
                                n && n.cellDates
                                  ? (a = eN(e.v, -1).toISOString())
                                  : (((e = eL(e)).t = "n"),
                                    (a = "" + (e.v = eI(eN(e.v))))),
                                  void 0 === e.z && (e.z = ev._table[14]);
                                break;
                              default:
                                a = e.v;
                            }
                          var o = tv("v", e9(a)),
                            c = { r: t },
                            l = sF(n.cellXfs, e, n);
                          switch ((0 !== l && (c.s = l), e.t)) {
                            case "n":
                            case "z":
                              break;
                            case "d":
                              c.t = "d";
                              break;
                            case "b":
                              c.t = "b";
                              break;
                            case "e":
                              c.t = "e";
                              break;
                            default:
                              if (null == e.v) {
                                delete e.t;
                                break;
                              }
                              if (n && n.bookSST) {
                                (o = tv(
                                  "v",
                                  "" + sI(n.Strings, e.v, n.revStrings)
                                )),
                                  (c.t = "s");
                                break;
                              }
                              c.t = "str";
                          }
                          if (
                            (e.t != s && ((e.t = s), (e.v = i)),
                            "string" == typeof e.f && e.f)
                          ) {
                            var f =
                              e.F && e.F.slice(0, t.length) == t
                                ? { t: "array", ref: e.F }
                                : null;
                            o = tE("f", e9(e.f), f) + (null != e.v ? o : "");
                          }
                          return (
                            e.l && r["!links"].push([t, e.l]),
                            e.c && r["!comments"].push([t, e.c]),
                            tE("c", o, c)
                          );
                        })(b, a, e, t, r, n)) &&
                      o.push(l);
                  }
                  (o.length > 0 || (p && p[u])) &&
                    ((g = { r: f }),
                    p &&
                      p[u] &&
                      ((s = p[u]).hidden && (g.hidden = 1),
                      (v = -1),
                      s.hpx ? (v = aA(s.hpx)) : s.hpt && (v = s.hpt),
                      v > -1 && ((g.ht = v), (g.customHeight = 1)),
                      s.level && (g.outlineLevel = s.level)),
                    (i[i.length] = tE("row", o.join(""), g)));
                }
                if (p)
                  for (; u < p.length; ++u)
                    p &&
                      p[u] &&
                      ((g = { r: u + 1 }),
                      (s = p[u]).hidden && (g.hidden = 1),
                      (v = -1),
                      s.hpx ? (v = aA(s.hpx)) : s.hpt && (v = s.hpt),
                      v > -1 && ((g.ht = v), (g.customHeight = 1)),
                      s.level && (g.outlineLevel = s.level),
                      (i[i.length] = tE("row", "", g)));
                return i.join("");
              })(l, t, e, r, n)).length > 0 &&
              (s[s.length] = c),
            s.length > o + 1 &&
              ((s[s.length] = "</sheetData>"),
              (s[o] = s[o].replace("/>", ">"))),
            null != l["!protect"] &&
              (s[s.length] =
                ((p = l["!protect"]),
                (m = { sheet: 1 }),
                sG.forEach(function (e) {
                  null != p[e] && p[e] && (m[e] = "1");
                }),
                sz.forEach(function (e) {
                  null == p[e] || p[e] || (m[e] = "0");
                }),
                p.password &&
                  (m.password = ap(p.password).toString(16).toUpperCase()),
                tE("sheetProtection", null, m))),
            null != l["!autofilter"] &&
              (s[s.length] = (function (e, t, r, n) {
                var a = "string" == typeof e.ref ? e.ref : rs(e.ref);
                r.Workbook || (r.Workbook = { Sheets: [] }),
                  r.Workbook.Names || (r.Workbook.Names = []);
                var s = r.Workbook.Names,
                  i = ra(a);
                i.s.r == i.e.r && ((i.e.r = ra(t["!ref"]).e.r), (a = rs(i)));
                for (var o = 0; o < s.length; ++o) {
                  var c = s[o];
                  if ("_xlnm._FilterDatabase" == c.Name && c.Sheet == n) {
                    c.Ref = "'" + r.SheetNames[n] + "'!" + a;
                    break;
                  }
                }
                return (
                  o == s.length &&
                    s.push({
                      Name: "_xlnm._FilterDatabase",
                      Sheet: n,
                      Ref: "'" + r.SheetNames[n] + "'!" + a,
                    }),
                  tE("autoFilter", null, { ref: a })
                );
              })(l["!autofilter"], l, r, e)),
            null != l["!merges"] &&
              l["!merges"].length > 0 &&
              (s[s.length] = (function (e) {
                if (0 === e.length) return "";
                for (
                  var t = '<mergeCells count="' + e.length + '">', r = 0;
                  r != e.length;
                  ++r
                )
                  t += '<mergeCell ref="' + rs(e[r]) + '"/>';
                return t + "</mergeCells>";
              })(l["!merges"]));
          var d,
            p,
            m,
            g,
            v = -1,
            b = -1;
          return (
            l["!links"].length > 0 &&
              ((s[s.length] = "<hyperlinks>"),
              l["!links"].forEach(function (e) {
                e[1].Target &&
                  ((g = { ref: e[0] }),
                  "#" != e[1].Target.charAt(0) &&
                    ((b = rq(
                      n,
                      -1,
                      e9(e[1].Target).replace(/#.*$/, ""),
                      r$.HLINK
                    )),
                    (g["r:id"] = "rId" + b)),
                  (v = e[1].Target.indexOf("#")) > -1 &&
                    (g.location = e9(e[1].Target.slice(v + 1))),
                  e[1].Tooltip && (g.tooltip = e9(e[1].Tooltip)),
                  (s[s.length] = tE("hyperlink", null, g)));
              }),
              (s[s.length] = "</hyperlinks>")),
            delete l["!links"],
            null != l["!margins"] &&
              (s[s.length] =
                (sR((a = l["!margins"])), tE("pageMargins", null, a))),
            (!t || t.ignoreEC || void 0 == t.ignoreEC) &&
              (s[s.length] = tv(
                "ignoredErrors",
                tE("ignoredError", null, { numberStoredAsText: 1, sqref: f })
              )),
            u.length > 0 &&
              ((b = rq(
                n,
                -1,
                "../drawings/drawing" + (e + 1) + ".xml",
                r$.DRAW
              )),
              (s[s.length] = tE("drawing", null, { "r:id": "rId" + b })),
              (l["!drawing"] = u)),
            l["!comments"].length > 0 &&
              ((b = rq(
                n,
                -1,
                "../drawings/vmlDrawing" + (e + 1) + ".vml",
                r$.VML
              )),
              (s[s.length] = tE("legacyDrawing", null, { "r:id": "rId" + b })),
              (l["!legacy"] = b)),
            s.length > 1 &&
              ((s[s.length] = "</worksheet>"),
              (s[1] = s[1].replace("/>", ">"))),
            s.join("")
          );
        }
        function sQ(e) {
          return [rb(e), r_(e), "n"];
        }
        var sJ = ["left", "right", "top", "bottom", "header", "footer"];
        function sZ(e, t, r, n) {
          var a,
            s,
            i,
            o,
            c,
            l,
            f = t2(),
            h = r.SheetNames[e],
            u = r.Sheets[h] || {},
            d = h;
          try {
            r && r.Workbook && (d = r.Workbook.Sheets[e].CodeName || d);
          } catch (e) {}
          var p = ri(u["!ref"] || "A1");
          if (p.e.c > 16383 || p.e.r > 1048575) {
            if (t.WTF)
              throw Error(
                "Range " +
                  (u["!ref"] || "A1") +
                  " exceeds format limit A1:XFD1048576"
              );
            (p.e.c = Math.min(p.e.c, 16383)),
              (p.e.r = Math.min(p.e.c, 1048575));
          }
          return (
            (u["!links"] = []),
            (u["!comments"] = []),
            t4(f, "BrtBeginSheet"),
            r.vbaraw &&
              t4(
                f,
                "BrtWsProp",
                (function (e, t) {
                  null == t && (t = t1(84 + 4 * e.length));
                  for (var r = 0; r < 3; ++r) t.write_shift(1, 0);
                  return (
                    rA({ auto: 1 }, t),
                    t.write_shift(-4, -1),
                    t.write_shift(-4, -1),
                    rp(e, t),
                    t.slice(0, t.l)
                  );
                })(d)
              ),
            t4(f, "BrtWsDim", rx(p)),
            (a = r.Workbook),
            t4(f, "BrtBeginWsViews"),
            t4(
              f,
              "BrtBeginWsView",
              (null == s && (s = t1(30)),
              (i = 924),
              (((a || {}).Views || [])[0] || {}).RTL && (i |= 32),
              s.write_shift(2, i),
              s.write_shift(4, 0),
              s.write_shift(4, 0),
              s.write_shift(4, 0),
              s.write_shift(1, 0),
              s.write_shift(1, 0),
              s.write_shift(2, 0),
              s.write_shift(2, 100),
              s.write_shift(2, 0),
              s.write_shift(2, 0),
              s.write_shift(2, 0),
              s.write_shift(4, 0),
              s)
            ),
            t4(f, "BrtEndWsView"),
            t4(f, "BrtEndWsViews"),
            u &&
              u["!cols"] &&
              (t4(f, "BrtBeginColInfos"),
              u["!cols"].forEach(function (e, t) {
                if (e) {
                  var r, n, a;
                  t4(
                    f,
                    "BrtColInfo",
                    (null == r && (r = t1(18)),
                    (n = sy(t, e)),
                    r.write_shift(-4, t),
                    r.write_shift(-4, t),
                    r.write_shift(4, 256 * (n.width || 10)),
                    r.write_shift(4, 0),
                    (a = 0),
                    e.hidden && (a |= 1),
                    "number" == typeof n.width && (a |= 2),
                    e.level && (a |= e.level << 8),
                    r.write_shift(2, a),
                    r)
                  );
                }
              }),
              t4(f, "BrtEndColInfos")),
            !(function (e, t, r, n) {
              var a,
                s = ri(t["!ref"] || "A1"),
                i = "",
                o = [];
              t4(e, "BrtBeginSheetData");
              var c = Array.isArray(t),
                l = s.e.r;
              t["!rows"] && (l = Math.max(s.e.r, t["!rows"].length - 1));
              for (var f = s.s.r; f <= l; ++f) {
                (i = t9(f)),
                  (function (e, t, r, n) {
                    var a = (function (e, t, r) {
                      var n = t1(145),
                        a = (r["!rows"] || [])[e] || {};
                      n.write_shift(4, e), n.write_shift(4, 0);
                      var s = 320;
                      a.hpx ? (s = 20 * aA(a.hpx)) : a.hpt && (s = 20 * a.hpt),
                        n.write_shift(2, s),
                        n.write_shift(1, 0);
                      var i = 0;
                      a.level && (i |= a.level),
                        a.hidden && (i |= 16),
                        (a.hpx || a.hpt) && (i |= 32),
                        n.write_shift(1, i),
                        n.write_shift(1, 0);
                      var o = 0,
                        c = n.l;
                      n.l += 4;
                      for (var l = { r: e, c: 0 }, f = 0; f < 16; ++f)
                        if (!(t.s.c > (f + 1) << 10) && !(t.e.c < f << 10)) {
                          for (
                            var h = -1, u = -1, d = f << 10;
                            d < (f + 1) << 10;
                            ++d
                          )
                            (l.c = d),
                              (Array.isArray(r)
                                ? (r[l.r] || [])[l.c]
                                : r[rn(l)]) && (h < 0 && (h = d), (u = d));
                          h < 0 ||
                            (++o, n.write_shift(4, h), n.write_shift(4, u));
                        }
                      var p = n.l;
                      return (
                        (n.l = c),
                        n.write_shift(4, o),
                        (n.l = p),
                        n.length > n.l ? n.slice(0, n.l) : n
                      );
                    })(n, r, t);
                    (a.length > 17 || (t["!rows"] || [])[n]) &&
                      t4(e, "BrtRowHdr", a);
                  })(e, t, s, f);
                var h = !1;
                if (f <= s.e.r)
                  for (var u = s.s.c; u <= s.e.c; ++u) {
                    f === s.s.r && (o[u] = rt(u)), (a = o[u] + i);
                    var d = c ? (t[f] || [])[u] : t[a];
                    if (!d) {
                      h = !1;
                      continue;
                    }
                    h = (function (e, t, r, n, a, s, i) {
                      if (void 0 === t.v) return !1;
                      var o,
                        c,
                        l,
                        f,
                        h,
                        u,
                        d,
                        p,
                        m,
                        g,
                        v,
                        b,
                        E,
                        S,
                        w,
                        C,
                        B,
                        T,
                        x,
                        _,
                        k,
                        A,
                        I,
                        y,
                        R = "";
                      switch (t.t) {
                        case "b":
                          R = t.v ? "1" : "0";
                          break;
                        case "d":
                          ((t = eL(t)).z = t.z || ev._table[14]),
                            (t.v = eI(eN(t.v))),
                            (t.t = "n");
                          break;
                        case "n":
                        case "e":
                          R = "" + t.v;
                          break;
                        default:
                          R = t.v;
                      }
                      var F = { r: r, c: n };
                      switch (
                        ((F.s = sF(a.cellXfs, t, a)),
                        t.l && s["!links"].push([rn(F), t.l]),
                        t.c && s["!comments"].push([rn(F), t.c]),
                        t.t)
                      ) {
                        case "s":
                        case "str":
                          return (
                            a.bookSST
                              ? ((R = sI(a.Strings, t.v, a.revStrings)),
                                (F.t = "s"),
                                (F.v = R),
                                i)
                                ? t4(
                                    e,
                                    "BrtShortIsst",
                                    (null == o && (o = t1(8)),
                                    rE(F, o),
                                    o.write_shift(4, F.v),
                                    o)
                                  )
                                : t4(
                                    e,
                                    "BrtCellIsst",
                                    (null == c && (c = t1(12)),
                                    rv(F, c),
                                    c.write_shift(4, F.v),
                                    c)
                                  )
                              : ((F.t = "str"), i)
                                ? t4(
                                    e,
                                    "BrtShortSt",
                                    ((l = t),
                                    null == f && (f = t1(8 + 4 * l.v.length)),
                                    rE(F, f),
                                    rp(l.v, f),
                                    f.length > f.l ? f.slice(0, f.l) : f)
                                  )
                                : t4(
                                    e,
                                    "BrtCellSt",
                                    ((h = t),
                                    null == u && (u = t1(12 + 4 * h.v.length)),
                                    rv(F, u),
                                    rp(h.v, u),
                                    u.length > u.l ? u.slice(0, u.l) : u)
                                  ),
                            !0
                          );
                        case "n":
                          return (
                            t.v == (0 | t.v) && t.v > -1e3 && t.v < 1e3
                              ? i
                                ? t4(
                                    e,
                                    "BrtShortRk",
                                    ((d = t),
                                    null == p && (p = t1(8)),
                                    rE(F, p),
                                    rB(d.v, p),
                                    p)
                                  )
                                : t4(
                                    e,
                                    "BrtCellRk",
                                    ((m = t),
                                    null == g && (g = t1(12)),
                                    rv(F, g),
                                    rB(m.v, g),
                                    g)
                                  )
                              : i
                                ? t4(
                                    e,
                                    "BrtShortReal",
                                    ((v = t),
                                    null == b && (b = t1(12)),
                                    rE(F, b),
                                    rk(v.v, b),
                                    b)
                                  )
                                : t4(
                                    e,
                                    "BrtCellReal",
                                    ((E = t),
                                    null == S && (S = t1(16)),
                                    rv(F, S),
                                    rk(E.v, S),
                                    S)
                                  ),
                            !0
                          );
                        case "b":
                          return (
                            ((F.t = "b"), i)
                              ? t4(
                                  e,
                                  "BrtShortBool",
                                  ((w = t),
                                  null == C && (C = t1(5)),
                                  rE(F, C),
                                  C.write_shift(1, w.v ? 1 : 0),
                                  C)
                                )
                              : t4(
                                  e,
                                  "BrtCellBool",
                                  ((B = t),
                                  null == T && (T = t1(9)),
                                  rv(F, T),
                                  T.write_shift(1, B.v ? 1 : 0),
                                  T)
                                ),
                            !0
                          );
                        case "e":
                          return (
                            ((F.t = "e"), i)
                              ? t4(
                                  e,
                                  "BrtShortError",
                                  ((x = t),
                                  null == _ && (_ = t1(8)),
                                  rE(F, _),
                                  _.write_shift(1, x.v),
                                  _.write_shift(2, 0),
                                  _.write_shift(1, 0),
                                  _)
                                )
                              : t4(
                                  e,
                                  "BrtCellError",
                                  ((k = t),
                                  null == A && (A = t1(9)),
                                  rv(F, A),
                                  A.write_shift(1, k.v),
                                  A)
                                ),
                            !0
                          );
                      }
                      return (
                        i
                          ? t4(
                              e,
                              "BrtShortBlank",
                              (null == I && (I = t1(4)), rE(F, I))
                            )
                          : t4(
                              e,
                              "BrtCellBlank",
                              (null == y && (y = t1(8)), rv(F, y))
                            ),
                        !0
                      );
                    })(e, d, f, u, n, t, h);
                  }
              }
              t4(e, "BrtEndSheetData");
            })(f, u, 0, t, r),
            !(function (e, t) {
              if (t["!protect"]) {
                var r, n;
                t4(
                  e,
                  "BrtSheetProtection",
                  ((r = t["!protect"]),
                  null == n && (n = t1(66)),
                  n.write_shift(2, r.password ? ap(r.password) : 0),
                  n.write_shift(4, 1),
                  [
                    ["objects", !1],
                    ["scenarios", !1],
                    ["formatCells", !0],
                    ["formatColumns", !0],
                    ["formatRows", !0],
                    ["insertColumns", !0],
                    ["insertRows", !0],
                    ["insertHyperlinks", !0],
                    ["deleteColumns", !0],
                    ["deleteRows", !0],
                    ["selectLockedCells", !1],
                    ["sort", !0],
                    ["autoFilter", !0],
                    ["pivotTables", !0],
                    ["selectUnlockedCells", !1],
                  ].forEach(function (e) {
                    e[1]
                      ? n.write_shift(4, null == r[e[0]] || r[e[0]] ? 0 : 1)
                      : n.write_shift(4, null != r[e[0]] && r[e[0]] ? 0 : 1);
                  }),
                  n)
                );
              }
            })(f, u),
            !(function (e, t, r, n) {
              if (t["!autofilter"]) {
                var a = t["!autofilter"],
                  s = "string" == typeof a.ref ? a.ref : rs(a.ref);
                r.Workbook || (r.Workbook = { Sheets: [] }),
                  r.Workbook.Names || (r.Workbook.Names = []);
                var i = r.Workbook.Names,
                  o = ra(s);
                o.s.r == o.e.r && ((o.e.r = ra(t["!ref"]).e.r), (s = rs(o)));
                for (var c = 0; c < i.length; ++c) {
                  var l = i[c];
                  if ("_xlnm._FilterDatabase" == l.Name && l.Sheet == n) {
                    l.Ref = "'" + r.SheetNames[n] + "'!" + s;
                    break;
                  }
                }
                c == i.length &&
                  i.push({
                    Name: "_xlnm._FilterDatabase",
                    Sheet: n,
                    Ref: "'" + r.SheetNames[n] + "'!" + s,
                  }),
                  t4(e, "BrtBeginAFilter", rx(ri(s))),
                  t4(e, "BrtEndAFilter");
              }
            })(f, u, r, e),
            !(function (e, t) {
              if (t && t["!merges"]) {
                var r, n;
                t4(
                  e,
                  "BrtBeginMergeCells",
                  ((r = t["!merges"].length),
                  null == n && (n = t1(4)),
                  n.write_shift(4, r),
                  n)
                ),
                  t["!merges"].forEach(function (t) {
                    t4(e, "BrtMergeCell", rx(t));
                  }),
                  t4(e, "BrtEndMergeCells");
              }
            })(f, u),
            (o = u)["!links"].forEach(function (e) {
              if (e[1].Target) {
                var t,
                  r,
                  a = rq(n, -1, e[1].Target.replace(/#.*$/, ""), r$.HLINK);
                t4(
                  f,
                  "BrtHLink",
                  ((t = t1(
                    50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length)
                  )),
                  rx({ s: rr(e[0]), e: rr(e[0]) }, t),
                  rw("rId" + a, t),
                  rp(
                    (-1 == (r = e[1].Target.indexOf("#"))
                      ? ""
                      : e[1].Target.slice(r + 1)) || "",
                    t
                  ),
                  rp(e[1].Tooltip || "", t),
                  rp("", t),
                  t.slice(0, t.l))
                );
              }
            }),
            delete o["!links"],
            u["!margins"] &&
              t4(
                f,
                "BrtMargins",
                ((c = u["!margins"]),
                null == l && (l = t1(48)),
                sR(c),
                sJ.forEach(function (e) {
                  rk(c[e], l);
                }),
                l)
              ),
            (!t || t.ignoreEC || void 0 == t.ignoreEC) &&
              (function (e, t) {
                if (t && t["!ref"]) {
                  var r, n;
                  t4(e, "BrtBeginCellIgnoreECs"),
                    t4(
                      e,
                      "BrtCellIgnoreEC",
                      ((r = ri(t["!ref"])),
                      (n = t1(24)).write_shift(4, 4),
                      n.write_shift(4, 1),
                      rx(r, n),
                      n)
                    ),
                    t4(e, "BrtEndCellIgnoreECs");
                }
              })(f, u),
            !(function (e, t, r, n) {
              if (t["!comments"].length > 0) {
                var a = rq(
                  n,
                  -1,
                  "../drawings/vmlDrawing" + (r + 1) + ".vml",
                  r$.VML
                );
                t4(e, "BrtLegacyDrawing", rw("rId" + a)), (t["!legacy"] = a);
              }
            })(f, u, e, n),
            t4(f, "BrtEndSheet"),
            f.end()
          );
        }
        (r$.CHART =
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart"),
          (r$.CHARTEX =
            "http://schemas.microsoft.com/office/2014/relationships/chartEx"),
          (r$.CS =
            "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet"),
          tE("chartsheet", null, { xmlns: tw.main[0], "xmlns:r": tw.r });
        var sq = [
            ["allowRefreshQuery", !1, "bool"],
            ["autoCompressPictures", !0, "bool"],
            ["backupFile", !1, "bool"],
            ["checkCompatibility", !1, "bool"],
            ["CodeName", ""],
            ["date1904", !1, "bool"],
            ["defaultThemeVersion", 0, "int"],
            ["filterPrivacy", !1, "bool"],
            ["hidePivotFieldList", !1, "bool"],
            ["promptedSolutions", !1, "bool"],
            ["publishItems", !1, "bool"],
            ["refreshAllConnections", !1, "bool"],
            ["saveExternalLinkValues", !0, "bool"],
            ["showBorderUnselectedTables", !0, "bool"],
            ["showInkAnnotation", !0, "bool"],
            ["showObjects", "all"],
            ["showPivotChartFilter", !1, "bool"],
            ["updateLinks", "userSet"],
          ],
          s1 = [
            ["activeTab", 0, "int"],
            ["autoFilterDateGrouping", !0, "bool"],
            ["firstSheet", 0, "int"],
            ["minimized", !1, "bool"],
            ["showHorizontalScroll", !0, "bool"],
            ["showSheetTabs", !0, "bool"],
            ["showVerticalScroll", !0, "bool"],
            ["tabRatio", 600, "int"],
            ["visibility", "visible"],
          ],
          s0 = [],
          s2 = [
            ["calcCompleted", "true"],
            ["calcMode", "auto"],
            ["calcOnSave", "true"],
            ["concurrentCalc", "true"],
            ["fullCalcOnLoad", "false"],
            ["fullPrecision", "true"],
            ["iterate", "false"],
            ["iterateCount", "100"],
            ["iterateDelta", "0.001"],
            ["refMode", "A1"],
          ];
        function s4(e, t) {
          for (var r = 0; r != e.length; ++r)
            for (var n = e[r], a = 0; a != t.length; ++a) {
              var s = t[a];
              if (null == n[s[0]]) n[s[0]] = s[1];
              else
                switch (s[2]) {
                  case "bool":
                    "string" == typeof n[s[0]] && (n[s[0]] = ta(n[s[0]]));
                    break;
                  case "int":
                    "string" == typeof n[s[0]] &&
                      (n[s[0]] = parseInt(n[s[0]], 10));
                }
            }
        }
        function s3(e, t) {
          for (var r = 0; r != t.length; ++r) {
            var n = t[r];
            if (null == e[n[0]]) e[n[0]] = n[1];
            else
              switch (n[2]) {
                case "bool":
                  "string" == typeof e[n[0]] && (e[n[0]] = ta(e[n[0]]));
                  break;
                case "int":
                  "string" == typeof e[n[0]] &&
                    (e[n[0]] = parseInt(e[n[0]], 10));
              }
          }
        }
        function s5(e) {
          s3(e.WBProps, sq),
            s3(e.CalcPr, s2),
            s4(e.WBView, s1),
            s4(e.Sheets, s0),
            (sk.date1904 = ta(e.WBProps.date1904));
        }
        var s6 = "][*?/\\".split("");
        function s8(e, t) {
          if (e.length > 31) {
            if (t) return !1;
            throw Error("Sheet names cannot exceed 31 chars");
          }
          var r = !0;
          return (
            s6.forEach(function (n) {
              if (-1 != e.indexOf(n)) {
                if (!t) throw Error("Sheet name cannot contain : \\ / ? * [ ]");
                r = !1;
              }
            }),
            r
          );
        }
        var s7 = /<\w+:workbook/,
          s9 = tE("workbook", null, { xmlns: tw.main[0], "xmlns:r": tw.r });
        function ie(e) {
          var t = [eJ];
          t[t.length] = s9;
          var r = e.Workbook && (e.Workbook.Names || []).length > 0,
            n = { codeName: "ThisWorkbook" };
          e.Workbook &&
            e.Workbook.WBProps &&
            (sq.forEach(function (t) {
              null != e.Workbook.WBProps[t[0]] &&
                e.Workbook.WBProps[t[0]] != t[1] &&
                (n[t[0]] = e.Workbook.WBProps[t[0]]);
            }),
            e.Workbook.WBProps.CodeName &&
              ((n.codeName = e.Workbook.WBProps.CodeName), delete n.CodeName)),
            (t[t.length] = tE("workbookPr", null, n));
          var a = (e.Workbook && e.Workbook.Sheets) || [],
            s = 0;
          if (a && a[0] && a[0].Hidden) {
            for (
              s = 0, t[t.length] = "<bookViews>";
              s != e.SheetNames.length && a[s] && a[s].Hidden;
              ++s
            );
            s == e.SheetNames.length && (s = 0),
              (t[t.length] =
                '<workbookView firstSheet="' + s + '" activeTab="' + s + '"/>'),
              (t[t.length] = "</bookViews>");
          }
          for (s = 0, t[t.length] = "<sheets>"; s != e.SheetNames.length; ++s) {
            var i = { name: e9(e.SheetNames[s].slice(0, 31)) };
            if (
              ((i.sheetId = "" + (s + 1)), (i["r:id"] = "rId" + (s + 1)), a[s])
            )
              switch (a[s].Hidden) {
                case 1:
                  i.state = "hidden";
                  break;
                case 2:
                  i.state = "veryHidden";
              }
            t[t.length] = tE("sheet", null, i);
          }
          return (
            (t[t.length] = "</sheets>"),
            r &&
              ((t[t.length] = "<definedNames>"),
              e.Workbook &&
                e.Workbook.Names &&
                e.Workbook.Names.forEach(function (e) {
                  var r = { name: e.Name };
                  e.Comment && (r.comment = e.Comment),
                    null != e.Sheet && (r.localSheetId = "" + e.Sheet),
                    e.Hidden && (r.hidden = "1"),
                    e.Ref && (t[t.length] = tE("definedName", e9(e.Ref), r));
                }),
              (t[t.length] = "</definedNames>")),
            t.length > 2 &&
              ((t[t.length] = "</workbook>"), (t[1] = t[1].replace("/>", ">"))),
            t.join("")
          );
        }
        function it(e, t) {
          var r = {};
          return (
            e.read_shift(4), (r.ArchID = e.read_shift(4)), (e.l += t - 8), r
          );
        }
        function ir(e, r) {
          var n,
            a,
            s,
            i = t2();
          return (
            t4(i, "BrtBeginBook"),
            t4(
              i,
              "BrtFileVersion",
              (function (e, r) {
                r || (r = t1(127));
                for (var n = 0; 4 != n; ++n) r.write_shift(4, 0);
                return (
                  rp("SheetJS", r),
                  rp(t.version, r),
                  rp(t.version, r),
                  rp("7262", r),
                  r.length > r.l ? r.slice(0, r.l) : r
                );
              })()
            ),
            t4(
              i,
              "BrtWbProp",
              ((n = (e.Workbook && e.Workbook.WBProps) || null),
              a || (a = t1(72)),
              (s = 0),
              n && n.filterPrivacy && (s |= 8),
              a.write_shift(4, s),
              a.write_shift(4, 0),
              rp((n && n.CodeName) || "ThisWorkbook", a),
              a.slice(0, a.l))
            ),
            !(function (e, t) {
              if (t.Workbook && t.Workbook.Sheets) {
                for (
                  var r, n, a = t.Workbook.Sheets, s = 0, i = -1, o = -1;
                  s < a.length;
                  ++s
                )
                  a[s] && (a[s].Hidden || -1 != i)
                    ? 1 == a[s].Hidden && -1 == o && (o = s)
                    : (i = s);
                o > i ||
                  (t4(e, "BrtBeginBookViews"),
                  t4(
                    e,
                    "BrtBookView",
                    ((r = i),
                    n || (n = t1(29)),
                    n.write_shift(-4, 0),
                    n.write_shift(-4, 460),
                    n.write_shift(4, 28800),
                    n.write_shift(4, 17600),
                    n.write_shift(4, 500),
                    n.write_shift(4, r),
                    n.write_shift(4, r),
                    n.write_shift(1, 120),
                    n.length > n.l ? n.slice(0, n.l) : n)
                  ),
                  t4(e, "BrtEndBookViews"));
              }
            })(i, e, r),
            !(function (e, t) {
              t4(e, "BrtBeginBundleShs");
              for (var r, n, a = 0; a != t.SheetNames.length; ++a)
                t4(
                  e,
                  "BrtBundleSh",
                  ((r = {
                    Hidden:
                      (t.Workbook &&
                        t.Workbook.Sheets &&
                        t.Workbook.Sheets[a] &&
                        t.Workbook.Sheets[a].Hidden) ||
                      0,
                    iTabID: a + 1,
                    strRelID: "rId" + (a + 1),
                    name: t.SheetNames[a],
                  }),
                  n || (n = t1(127)),
                  n.write_shift(4, r.Hidden),
                  n.write_shift(4, r.iTabID),
                  rw(r.strRelID, n),
                  rp(r.name.slice(0, 31), n),
                  n.length > n.l ? n.slice(0, n.l) : n)
                );
              t4(e, "BrtEndBundleShs");
            })(i, e, r),
            t4(i, "BrtEndBook"),
            i.end()
          );
        }
        var ia = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,
          is = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
        function ii(e, t) {
          var r = e.split(/\s+/),
            n = [];
          if ((t || (n[0] = r[0]), 1 === r.length)) return n;
          var a,
            s,
            i,
            o = e.match(ia);
          if (o)
            for (i = 0; i != o.length; ++i)
              -1 === (s = (a = o[i].match(is))[1].indexOf(":"))
                ? (n[a[1]] = a[2].slice(1, a[2].length - 1))
                : (n[
                    "xmlns:" === a[1].slice(0, 6)
                      ? "xmlns" + a[1].slice(6)
                      : a[1].slice(s + 1)
                  ] = a[2].slice(1, a[2].length - 1));
          return n;
        }
        function io(e) {
          if (es && n.isBuffer(e)) return e.toString("utf8");
          if ("string" == typeof e) return e;
          if ("undefined" != typeof Uint8Array && e instanceof Uint8Array)
            return ts(eu(ed(e)));
          throw Error("Bad input format: expected Buffer or string");
        }
        var ic = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/gm;
        function il(e, t) {
          var r,
            n,
            a,
            s,
            i,
            o = t || {};
          eb(ev);
          var c = et(io(e));
          ("binary" == o.type || "array" == o.type || "base64" == o.type) &&
            (c =
              "undefined" != typeof cptable
                ? cptable.utils.decode(65001, ee(c))
                : ts(c));
          var l = c.slice(0, 1024).toLowerCase(),
            f = !1;
          if (
            (-1 == l.indexOf("<?xml") &&
              [
                "html",
                "table",
                "head",
                "meta",
                "script",
                "style",
                "div",
              ].forEach(function (e) {
                l.indexOf("<" + e) >= 0 && (f = !0);
              }),
            f)
          )
            return iT.to_workbook(c, o);
          var h,
            u,
            d,
            p = [],
            m = {},
            g = [],
            v = o.dense ? [] : {},
            b = "",
            E = {},
            S = {},
            w = ii('<Data ss:Type="String">'),
            C = 0,
            B = 0,
            T = 0,
            x = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
            _ = {},
            k = {},
            A = "",
            I = 0,
            y = [],
            R = {},
            F = {},
            D = 0,
            O = [],
            P = [],
            N = {},
            M = [],
            L = !1,
            U = [],
            H = [],
            W = {},
            V = 0,
            X = 0,
            G = { Sheets: [], WBProps: { date1904: !1 } },
            z = {};
          (ic.lastIndex = 0), (c = c.replace(/<!--([\s\S]*?)-->/gm, ""));
          for (var j = ""; (h = ic.exec(c)); )
            switch ((h[3] = (j = h[3]).toLowerCase())) {
              case "data":
                if ("data" == j) {
                  if ("/" === h[1]) {
                    if ((u = p.pop())[0] !== h[3])
                      throw Error("Bad state: " + u.join("|"));
                  } else
                    "/" !== h[0].charAt(h[0].length - 2) && p.push([h[3], !0]);
                  break;
                }
                if (p[p.length - 1][1]) break;
                "/" === h[1]
                  ? (function (e, t, r, n, a, s, i, o, c, l) {
                      var f = "General",
                        h = n.StyleID,
                        u = {};
                      l = l || {};
                      var d = [],
                        p = 0;
                      for (
                        void 0 === h && o && (h = o.StyleID),
                          void 0 === h && i && (h = i.StyleID);
                        void 0 !== s[h] &&
                        (s[h].nf && (f = s[h].nf),
                        s[h].Interior && d.push(s[h].Interior),
                        s[h].Parent);
                      )
                        h = s[h].Parent;
                      switch (r.Type) {
                        case "Boolean":
                          (n.t = "b"), (n.v = ta(e));
                          break;
                        case "String":
                          (n.t = "s"),
                            (n.r = tn(e6(e))),
                            (n.v =
                              e.indexOf("<") > -1
                                ? e6(t || e).replace(/<.*?>/g, "")
                                : n.r);
                          break;
                        case "DateTime":
                          "Z" != e.slice(-1) && (e += "Z"),
                            (n.v =
                              (eN(e) - new Date(Date.UTC(1899, 11, 30))) /
                              864e5),
                            n.v != n.v
                              ? (n.v = e6(e))
                              : n.v < 60 && (n.v = n.v - 1),
                            (f && "General" != f) || (f = "yyyy-mm-dd");
                        case "Number":
                          void 0 === n.v && (n.v = +e), n.t || (n.t = "n");
                          break;
                        case "Error":
                          (n.t = "e"),
                            (n.v = rH[e]),
                            !1 !== l.cellText && (n.w = e);
                          break;
                        default:
                          "" == e && "" == t
                            ? (n.t = "z")
                            : ((n.t = "s"), (n.v = tn(t || e)));
                      }
                      if (
                        (!(function (e, t, r) {
                          if ("z" !== e.t) {
                            if (!r || !1 !== r.cellText)
                              try {
                                if ("e" === e.t) e.w = e.w || rU[e.v];
                                else if ("General" === t)
                                  "n" === e.t
                                    ? (0 | e.v) === e.v
                                      ? (e.w = ev._general_int(e.v))
                                      : (e.w = ev._general_num(e.v))
                                    : (e.w = ev._general(e.v));
                                else {
                                  var n, a, s;
                                  e.w =
                                    ((n = t || "General"),
                                    (a = e.v),
                                    (s = eE[n] || e6(n)),
                                    "General" === s
                                      ? ev._general(a)
                                      : ev.format(s, a));
                                }
                              } catch (e) {
                                if (r.WTF) throw e;
                              }
                            try {
                              var i = eE[t] || t || "General";
                              if (
                                (r.cellNF && (e.z = i),
                                r.cellDates && "n" == e.t && ev.is_date(i))
                              ) {
                                var o = ev.parse_date_code(e.v);
                                o &&
                                  ((e.t = "d"),
                                  (e.v = new Date(
                                    o.y,
                                    o.m - 1,
                                    o.d,
                                    o.H,
                                    o.M,
                                    o.S,
                                    o.u
                                  )));
                              }
                            } catch (e) {
                              if (r.WTF) throw e;
                            }
                          }
                        })(n, f, l),
                        !1 !== l.cellFormula)
                      ) {
                        if (n.Formula) {
                          var m = e6(n.Formula);
                          61 == m.charCodeAt(0) && (m = m.slice(1)),
                            (n.f = a2(m, a)),
                            delete n.Formula,
                            "RC" == n.ArrayRange
                              ? (n.F = a2("RC:RC", a))
                              : n.ArrayRange &&
                                ((n.F = a2(n.ArrayRange, a)),
                                c.push([ri(n.F), n.F]));
                        } else
                          for (p = 0; p < c.length; ++p)
                            a.r >= c[p][0].s.r &&
                              a.r <= c[p][0].e.r &&
                              a.c >= c[p][0].s.c &&
                              a.c <= c[p][0].e.c &&
                              (n.F = c[p][1]);
                      }
                      l.cellStyles &&
                        (d.forEach(function (e) {
                          !u.patternType &&
                            e.patternType &&
                            (u.patternType = e.patternType);
                        }),
                        (n.s = u)),
                        void 0 !== n.StyleID && (n.ixfe = n.StyleID);
                    })(
                      c.slice(C, h.index),
                      A,
                      w,
                      "comment" == p[p.length - 1][0] ? N : E,
                      { c: B, r: T },
                      _,
                      M[B],
                      S,
                      U,
                      o
                    )
                  : ((A = ""), (w = ii(h[0])), (C = h.index + h[0].length));
                break;
              case "cell":
                if ("/" === h[1]) {
                  if (
                    (P.length > 0 && (E.c = P),
                    (!o.sheetRows || o.sheetRows > T) &&
                      void 0 !== E.v &&
                      (o.dense
                        ? (v[T] || (v[T] = []), (v[T][B] = E))
                        : (v[rt(B) + t9(T)] = E)),
                    E.HRef &&
                      ((E.l = { Target: E.HRef }),
                      E.HRefScreenTip && (E.l.Tooltip = E.HRefScreenTip),
                      delete E.HRef,
                      delete E.HRefScreenTip),
                    (E.MergeAcross || E.MergeDown) &&
                      ((V = B + (0 | parseInt(E.MergeAcross, 10))),
                      (X = T + (0 | parseInt(E.MergeDown, 10))),
                      y.push({ s: { c: B, r: T }, e: { c: V, r: X } })),
                    o.sheetStubs)
                  ) {
                    if (E.MergeAcross || E.MergeDown) {
                      for (var K = B; K <= V; ++K)
                        for (var Y = T; Y <= X; ++Y)
                          (K > B || Y > T) &&
                            (o.dense
                              ? (v[Y] || (v[Y] = []), (v[Y][K] = { t: "z" }))
                              : (v[rt(K) + t9(Y)] = { t: "z" }));
                      B = V + 1;
                    } else ++B;
                  } else E.MergeAcross ? (B = V + 1) : ++B;
                } else
                  (E = (function (e) {
                    var t = e.split(/\s+/),
                      r = {};
                    if (1 === t.length) return r;
                    var n,
                      a,
                      s,
                      i = e.match(ia);
                    if (i)
                      for (s = 0; s != i.length; ++s)
                        -1 === (a = (n = i[s].match(is))[1].indexOf(":"))
                          ? (r[n[1]] = n[2].slice(1, n[2].length - 1))
                          : (r[
                              "xmlns:" === n[1].slice(0, 6)
                                ? "xmlns" + n[1].slice(6)
                                : n[1].slice(a + 1)
                            ] = n[2].slice(1, n[2].length - 1));
                    return r;
                  })(h[0])).Index && (B = +E.Index - 1),
                    B < x.s.c && (x.s.c = B),
                    B > x.e.c && (x.e.c = B),
                    "/>" === h[0].slice(-2) && ++B,
                    (P = []);
                break;
              case "row":
                "/" === h[1] || "/>" === h[0].slice(-2)
                  ? (T < x.s.r && (x.s.r = T),
                    T > x.e.r && (x.e.r = T),
                    "/>" === h[0].slice(-2) &&
                      (S = ii(h[0])).Index &&
                      (T = +S.Index - 1),
                    (B = 0),
                    ++T)
                  : ((S = ii(h[0])).Index && (T = +S.Index - 1),
                    (W = {}),
                    ("0" == S.AutoFitHeight || S.Height) &&
                      ((W.hpx = parseInt(S.Height, 10)),
                      (W.hpt = aA(W.hpx)),
                      (H[T] = W)),
                    "1" == S.Hidden && ((W.hidden = !0), (H[T] = W)));
                break;
              case "worksheet":
                if ("/" === h[1]) {
                  if ((u = p.pop())[0] !== h[3])
                    throw Error("Bad state: " + u.join("|"));
                  g.push(b),
                    x.s.r <= x.e.r &&
                      x.s.c <= x.e.c &&
                      ((v["!ref"] = rs(x)),
                      o.sheetRows &&
                        o.sheetRows <= x.e.r &&
                        ((v["!fullref"] = v["!ref"]),
                        (x.e.r = o.sheetRows - 1),
                        (v["!ref"] = rs(x)))),
                    y.length && (v["!merges"] = y),
                    M.length > 0 && (v["!cols"] = M),
                    H.length > 0 && (v["!rows"] = H),
                    (m[b] = v);
                } else
                  (x = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }),
                    (T = B = 0),
                    p.push([h[3], !1]),
                    (b = e6((u = ii(h[0])).Name)),
                    (v = o.dense ? [] : {}),
                    (y = []),
                    (U = []),
                    (H = []),
                    (z = { name: b, Hidden: 0 }),
                    G.Sheets.push(z);
                break;
              case "table":
                if ("/" === h[1]) {
                  if ((u = p.pop())[0] !== h[3])
                    throw Error("Bad state: " + u.join("|"));
                } else
                  "/>" == h[0].slice(-2) ||
                    (ii(h[0]), p.push([h[3], !1]), (M = []), (L = !1));
                break;
              case "style":
                "/" === h[1]
                  ? (function (e, t, r) {
                      if (r.cellStyles && t.Interior) {
                        var n = t.Interior;
                        n.Pattern &&
                          (n.patternType = ay[n.Pattern] || n.Pattern);
                      }
                      e[t.ID] = t;
                    })(_, k, o)
                  : (k = ii(h[0]));
                break;
              case "numberformat":
                (k.nf = e6(ii(h[0]).Format || "General")),
                  eE[k.nf] && (k.nf = eE[k.nf]);
                for (var Q = 0; 392 != Q && ev._table[Q] != k.nf; ++Q);
                if (392 == Q) {
                  for (Q = 57; 392 != Q; ++Q)
                    if (null == ev._table[Q]) {
                      ev.load(k.nf, Q);
                      break;
                    }
                }
                break;
              case "column":
                if ("table" !== p[p.length - 1][0]) break;
                if (
                  ((d = ii(h[0])).Hidden && ((d.hidden = !0), delete d.Hidden),
                  d.Width && (d.wpx = parseInt(d.Width, 10)),
                  !L && d.wpx > 10)
                ) {
                  (L = !0), (aw = 6);
                  for (var J = 0; J < M.length; ++J) M[J] && ak(M[J]);
                }
                L && ak(d), (M[d.Index - 1 || M.length] = d);
                for (var Z = 0; Z < +d.Span; ++Z) M[M.length] = eL(d);
                break;
              case "namedrange":
                if ("/" === h[1]) break;
                G.Names || (G.Names = []);
                var q = e2(h[0]),
                  er = {
                    Name: q.Name,
                    Ref: a2(q.RefersTo.slice(1), { r: 0, c: 0 }),
                  };
                G.Sheets.length > 0 && (er.Sheet = G.Sheets.length - 1),
                  G.Names.push(er);
                break;
              case "namedcell":
              case "b":
              case "i":
              case "u":
              case "s":
              case "em":
              case "h2":
              case "h3":
              case "sub":
              case "sup":
              case "span":
              case "alignment":
              case "borders":
              case "border":
              case "protection":
              case "paragraphs":
              case "name":
              case "pixelsperinch":
                break;
              case "font":
                "/>" === h[0].slice(-2) ||
                  ("/" === h[1]
                    ? (A += c.slice(I, h.index))
                    : (I = h.index + h[0].length));
                break;
              case "interior":
                if (!o.cellStyles) break;
                k.Interior = ii(h[0]);
                break;
              case "author":
              case "title":
              case "description":
              case "created":
              case "keywords":
              case "subject":
              case "category":
              case "company":
              case "lastauthor":
              case "lastsaved":
              case "lastprinted":
              case "version":
              case "revision":
              case "totaltime":
              case "hyperlinkbase":
              case "manager":
              case "contentstatus":
              case "identifier":
              case "language":
              case "appname":
                "/>" === h[0].slice(-2) ||
                  ("/" === h[1]
                    ? ((n = R),
                      (a = j),
                      (s = c.slice(D, h.index)),
                      (n[(a = nn[a] || a)] = s))
                    : (D = h.index + h[0].length));
                break;
              case "styles":
              case "workbook":
                if ("/" === h[1]) {
                  if ((u = p.pop())[0] !== h[3])
                    throw Error("Bad state: " + u.join("|"));
                } else p.push([h[3], !1]);
                break;
              case "comment":
                if ("/" === h[1]) {
                  if ((u = p.pop())[0] !== h[3])
                    throw Error("Bad state: " + u.join("|"));
                  ((i = N).t = i.v || ""),
                    (i.t = i.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n")),
                    (i.v = i.w = i.ixfe = void 0),
                    P.push(N);
                } else p.push([h[3], !1]), (N = { a: (u = ii(h[0])).Author });
                break;
              case "autofilter":
                if ("/" === h[1]) {
                  if ((u = p.pop())[0] !== h[3])
                    throw Error("Bad state: " + u.join("|"));
                } else if ("/" !== h[0].charAt(h[0].length - 2)) {
                  var en = ii(h[0]);
                  (v["!autofilter"] = { ref: a2(en.Range).replace(/\$/g, "") }),
                    p.push([h[3], !0]);
                }
                break;
              case "datavalidation":
              case "componentoptions":
              case "documentproperties":
              case "customdocumentproperties":
              case "officedocumentsettings":
              case "pivottable":
              case "pivotcache":
              case "names":
              case "mapinfo":
              case "pagebreaks":
              case "querytable":
              case "sorting":
              case "schema":
              case "conditionalformatting":
              case "smarttagtype":
              case "smarttags":
              case "excelworkbook":
              case "workbookoptions":
              case "worksheetoptions":
                if ("/" === h[1]) {
                  if ((u = p.pop())[0] !== h[3])
                    throw Error("Bad state: " + u.join("|"));
                } else
                  "/" !== h[0].charAt(h[0].length - 2) && p.push([h[3], !0]);
                break;
              default:
                if (
                  (0 == p.length && "document" == h[3]) ||
                  (0 == p.length && "uof" == h[3])
                )
                  return iA(c, o);
                var ea = !0;
                switch (p[p.length - 1][0]) {
                  case "officedocumentsettings":
                    switch (h[3]) {
                      case "allowpng":
                      case "removepersonalinformation":
                      case "downloadcomponents":
                      case "locationofcomponents":
                      case "colors":
                      case "color":
                      case "index":
                      case "rgb":
                      case "targetscreensize":
                      case "readonlyrecommended":
                        break;
                      default:
                        ea = !1;
                    }
                    break;
                  case "componentoptions":
                    switch (h[3]) {
                      case "toolbar":
                      case "hideofficelogo":
                      case "spreadsheetautofit":
                      case "label":
                      case "caption":
                      case "maxheight":
                      case "maxwidth":
                      case "nextsheetnumber":
                        break;
                      default:
                        ea = !1;
                    }
                    break;
                  case "excelworkbook":
                    switch (h[3]) {
                      case "date1904":
                        G.WBProps.date1904 = !0;
                        break;
                      case "windowheight":
                      case "windowwidth":
                      case "windowtopx":
                      case "windowtopy":
                      case "tabratio":
                      case "protectstructure":
                      case "protectwindow":
                      case "protectwindows":
                      case "activesheet":
                      case "displayinknotes":
                      case "firstvisiblesheet":
                      case "supbook":
                      case "sheetname":
                      case "sheetindex":
                      case "sheetindexfirst":
                      case "sheetindexlast":
                      case "dll":
                      case "acceptlabelsinformulas":
                      case "donotsavelinkvalues":
                      case "iteration":
                      case "maxiterations":
                      case "maxchange":
                      case "path":
                      case "xct":
                      case "count":
                      case "selectedsheets":
                      case "calculation":
                      case "uncalced":
                      case "startupprompt":
                      case "crn":
                      case "externname":
                      case "formula":
                      case "colfirst":
                      case "collast":
                      case "wantadvise":
                      case "boolean":
                      case "error":
                      case "text":
                      case "ole":
                      case "noautorecover":
                      case "publishobjects":
                      case "donotcalculatebeforesave":
                      case "number":
                      case "refmoder1c1":
                      case "embedsavesmarttags":
                        break;
                      default:
                        ea = !1;
                    }
                    break;
                  case "workbookoptions":
                    switch (h[3]) {
                      case "owcversion":
                      case "height":
                      case "width":
                        break;
                      default:
                        ea = !1;
                    }
                    break;
                  case "worksheetoptions":
                    switch (h[3]) {
                      case "visible":
                        if ("/>" === h[0].slice(-2));
                        else if ("/" === h[1])
                          switch (c.slice(D, h.index)) {
                            case "SheetHidden":
                              z.Hidden = 1;
                              break;
                            case "SheetVeryHidden":
                              z.Hidden = 2;
                          }
                        else D = h.index + h[0].length;
                        break;
                      case "header":
                        v["!margins"] || sR((v["!margins"] = {}), "xlml"),
                          (v["!margins"].header = e2(h[0]).Margin);
                        break;
                      case "footer":
                        v["!margins"] || sR((v["!margins"] = {}), "xlml"),
                          (v["!margins"].footer = e2(h[0]).Margin);
                        break;
                      case "pagemargins":
                        var es = e2(h[0]);
                        v["!margins"] || sR((v["!margins"] = {}), "xlml"),
                          es.Top && (v["!margins"].top = es.Top),
                          es.Left && (v["!margins"].left = es.Left),
                          es.Right && (v["!margins"].right = es.Right),
                          es.Bottom && (v["!margins"].bottom = es.Bottom);
                        break;
                      case "displayrighttoleft":
                        G.Views || (G.Views = []),
                          G.Views[0] || (G.Views[0] = {}),
                          (G.Views[0].RTL = !0);
                        break;
                      case "freezepanes":
                      case "frozennosplit":
                      case "splithorizontal":
                      case "splitvertical":
                      case "donotdisplaygridlines":
                      case "activerow":
                      case "activecol":
                      case "toprowbottompane":
                      case "leftcolumnrightpane":
                      case "unsynced":
                      case "print":
                      case "panes":
                      case "scale":
                      case "pane":
                      case "number":
                      case "layout":
                      case "pagesetup":
                      case "selected":
                      case "protectobjects":
                      case "enableselection":
                      case "protectscenarios":
                      case "validprinterinfo":
                      case "horizontalresolution":
                      case "verticalresolution":
                      case "numberofcopies":
                      case "activepane":
                      case "toprowvisible":
                      case "leftcolumnvisible":
                      case "fittopage":
                      case "rangeselection":
                      case "papersizeindex":
                      case "pagelayoutzoom":
                      case "pagebreakzoom":
                      case "filteron":
                      case "fitwidth":
                      case "fitheight":
                      case "commentslayout":
                      case "zoom":
                      case "lefttoright":
                      case "gridlines":
                      case "allowsort":
                      case "allowfilter":
                      case "allowinsertrows":
                      case "allowdeleterows":
                      case "allowinsertcols":
                      case "allowdeletecols":
                      case "allowinserthyperlinks":
                      case "allowformatcells":
                      case "allowsizecols":
                      case "allowsizerows":
                      case "nosummaryrowsbelowdetail":
                      case "tabcolorindex":
                      case "donotdisplayheadings":
                      case "showpagelayoutzoom":
                      case "nosummarycolumnsrightdetail":
                      case "blackandwhite":
                      case "donotdisplayzeros":
                      case "displaypagebreak":
                      case "rowcolheadings":
                      case "donotdisplayoutline":
                      case "noorientation":
                      case "allowusepivottables":
                      case "zeroheight":
                      case "viewablerange":
                      case "selection":
                      case "protectcontents":
                        break;
                      default:
                        ea = !1;
                    }
                    break;
                  case "pivottable":
                  case "pivotcache":
                    switch (h[3]) {
                      case "immediateitemsondrop":
                      case "showpagemultipleitemlabel":
                      case "compactrowindent":
                      case "location":
                      case "pivotfield":
                      case "orientation":
                      case "layoutform":
                      case "layoutsubtotallocation":
                      case "layoutcompactrow":
                      case "position":
                      case "pivotitem":
                      case "datatype":
                      case "datafield":
                      case "sourcename":
                      case "parentfield":
                      case "ptlineitems":
                      case "ptlineitem":
                      case "countofsameitems":
                      case "item":
                      case "itemtype":
                      case "ptsource":
                      case "cacheindex":
                      case "consolidationreference":
                      case "filename":
                      case "reference":
                      case "nocolumngrand":
                      case "norowgrand":
                      case "blanklineafteritems":
                      case "hidden":
                      case "subtotal":
                      case "basefield":
                      case "mapchilditems":
                      case "function":
                      case "refreshonfileopen":
                      case "printsettitles":
                      case "mergelabels":
                      case "defaultversion":
                      case "refreshname":
                      case "refreshdate":
                      case "refreshdatecopy":
                      case "versionlastrefresh":
                      case "versionlastupdate":
                      case "versionupdateablemin":
                      case "versionrefreshablemin":
                      case "calculation":
                        break;
                      default:
                        ea = !1;
                    }
                    break;
                  case "pagebreaks":
                    switch (h[3]) {
                      case "colbreaks":
                      case "colbreak":
                      case "rowbreaks":
                      case "rowbreak":
                      case "colstart":
                      case "colend":
                      case "rowend":
                        break;
                      default:
                        ea = !1;
                    }
                    break;
                  case "autofilter":
                    switch (h[3]) {
                      case "autofiltercolumn":
                      case "autofiltercondition":
                      case "autofilterand":
                      case "autofilteror":
                        break;
                      default:
                        ea = !1;
                    }
                    break;
                  case "querytable":
                    switch (h[3]) {
                      case "id":
                      case "autoformatfont":
                      case "autoformatpattern":
                      case "querysource":
                      case "querytype":
                      case "enableredirections":
                      case "refreshedinxl9":
                      case "urlstring":
                      case "htmltables":
                      case "connection":
                      case "commandtext":
                      case "refreshinfo":
                      case "notitles":
                      case "nextid":
                      case "columninfo":
                      case "overwritecells":
                      case "donotpromptforfile":
                      case "textwizardsettings":
                      case "source":
                      case "number":
                      case "decimal":
                      case "thousandseparator":
                      case "trailingminusnumbers":
                      case "formatsettings":
                      case "fieldtype":
                      case "delimiters":
                      case "tab":
                      case "comma":
                      case "autoformatname":
                      case "versionlastedit":
                      case "versionlastrefresh":
                        break;
                      default:
                        ea = !1;
                    }
                    break;
                  case "datavalidation":
                    switch (h[3]) {
                      case "range":
                      case "type":
                      case "min":
                      case "max":
                      case "sort":
                      case "descending":
                      case "order":
                      case "casesensitive":
                      case "value":
                      case "errorstyle":
                      case "errormessage":
                      case "errortitle":
                      case "inputmessage":
                      case "inputtitle":
                      case "combohide":
                      case "inputhide":
                      case "condition":
                      case "qualifier":
                      case "useblank":
                      case "value1":
                      case "value2":
                      case "format":
                      case "cellrangelist":
                        break;
                      default:
                        ea = !1;
                    }
                    break;
                  case "sorting":
                  case "conditionalformatting":
                    switch (h[3]) {
                      case "range":
                      case "type":
                      case "min":
                      case "max":
                      case "sort":
                      case "descending":
                      case "order":
                      case "casesensitive":
                      case "value":
                      case "errorstyle":
                      case "errormessage":
                      case "errortitle":
                      case "cellrangelist":
                      case "inputmessage":
                      case "inputtitle":
                      case "combohide":
                      case "inputhide":
                      case "condition":
                      case "qualifier":
                      case "useblank":
                      case "value1":
                      case "value2":
                      case "format":
                        break;
                      default:
                        ea = !1;
                    }
                    break;
                  case "mapinfo":
                  case "schema":
                  case "data":
                    switch (h[3]) {
                      case "map":
                      case "entry":
                      case "range":
                      case "xpath":
                      case "field":
                      case "xsdtype":
                      case "filteron":
                      case "aggregate":
                      case "elementtype":
                      case "attributetype":
                      case "schema":
                      case "element":
                      case "complextype":
                      case "datatype":
                      case "all":
                      case "attribute":
                      case "extends":
                      case "row":
                        break;
                      default:
                        ea = !1;
                    }
                    break;
                  case "smarttags":
                    break;
                  default:
                    ea = !1;
                }
                if (ea || h[3].match(/!\[CDATA/)) break;
                if (!p[p.length - 1][1])
                  throw "Unrecognized tag: " + h[3] + "|" + p.join("|");
                if ("customdocumentproperties" === p[p.length - 1][0]) {
                  "/>" === h[0].slice(-2) ||
                    ("/" === h[1]
                      ? (function (e, t, r, n) {
                          var a = n;
                          switch (
                            (r[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]
                          ) {
                            case "boolean":
                              a = ta(n);
                              break;
                            case "i2":
                            case "int":
                              a = parseInt(n, 10);
                              break;
                            case "r4":
                            case "float":
                              a = parseFloat(n);
                              break;
                            case "date":
                            case "dateTime.tz":
                              a = eN(n);
                              break;
                            case "i8":
                            case "string":
                            case "fixed":
                            case "uuid":
                            case "bin.base64":
                              break;
                            default:
                              throw Error("bad custprop:" + r[0]);
                          }
                          e[e6(t)] = a;
                        })(F, j, O, c.slice(D, h.index))
                      : ((O = h), (D = h.index + h[0].length)));
                  break;
                }
                if (o.WTF)
                  throw "Unrecognized tag: " + h[3] + "|" + p.join("|");
            }
          var ei = {};
          return (
            o.bookSheets || o.bookProps || (ei.Sheets = m),
            (ei.SheetNames = g),
            (ei.Workbook = G),
            (ei.SSF = ev.get_table()),
            (ei.Props = R),
            (ei.Custprops = F),
            ei
          );
        }
        function ih(e, t) {
          switch ((iX((t = t || {})), t.type || "base64")) {
            case "base64":
              return il(ea.decode(e), t);
            case "binary":
            case "buffer":
            case "file":
              return il(e, t);
            case "array":
              return il(eu(e), t);
          }
        }
        function iu(e) {
          return tE("NamedRange", null, {
            "ss:Name": e.Name,
            "ss:RefersTo": "=" + a3(e.Ref, { r: 0, c: 0 }),
          });
        }
        function id(e, t, r) {
          if ("z" !== e.t && e.XF) {
            var n = 0;
            try {
              (n = e.z || e.XF.numFmtId || 0), t.cellNF && (e.z = ev._table[n]);
            } catch (e) {
              if (t.WTF) throw e;
            }
            if (!t || !1 !== t.cellText)
              try {
                "e" === e.t
                  ? (e.w = e.w || rU[e.v])
                  : 0 === n || "General" == n
                    ? "n" === e.t
                      ? (0 | e.v) === e.v
                        ? (e.w = ev._general_int(e.v))
                        : (e.w = ev._general_num(e.v))
                      : (e.w = ev._general(e.v))
                    : (e.w = ev.format(n, e.v, { date1904: !!r }));
              } catch (e) {
                if (t.WTF) throw e;
              }
            if (
              t.cellDates &&
              n &&
              "n" == e.t &&
              ev.is_date(ev._table[n] || String(n))
            ) {
              var a = ev.parse_date_code(e.v);
              a &&
                ((e.t = "d"),
                (e.v = new Date(a.y, a.m - 1, a.d, a.H, a.M, a.S, a.u)));
            }
          }
        }
        function ip(e, t, r) {
          return { v: e, ixfe: t, t: r };
        }
        var im = {
          SI: "e0859ff2f94f6810ab9108002b27b3d9",
          DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
          UDI: "05d5cdd59c2e1b10939708002b2cf9ae",
        };
        function ig(e, t) {
          if (
            (t || (t = {}),
            iX(t),
            q(),
            t.codepage && J(t.codepage),
            e.FullPaths)
          ) {
            if (eC.find(e, "/encryption"))
              throw Error("File is password-protected");
            (a = eC.find(e, "!CompObj")),
              (s = eC.find(e, "/Workbook") || eC.find(e, "/Book"));
          } else {
            switch (t.type) {
              case "base64":
                e = ef(ea.decode(e));
                break;
              case "binary":
                e = ef(e);
                break;
              case "buffer":
                break;
              case "array":
                Array.isArray(e) || (e = Array.prototype.slice.call(e));
            }
            tZ(e, 0), (s = { content: e });
          }
          if (
            (a &&
              (function (e) {
                var t = {},
                  r = e.content;
                if (
                  ((r.l = 28),
                  (t.AnsiUserType = r.read_shift(0, "lpstr-ansi")),
                  (t.AnsiClipboardFormat = rI(r, 1)),
                  !(r.length - r.l <= 4))
                ) {
                  var n = r.read_shift(4);
                  0 != n &&
                    !(n > 40) &&
                    ((r.l -= 4),
                    (t.Reserved1 = r.read_shift(0, "lpstr-ansi")),
                    !(r.length - r.l <= 4) &&
                      1907505652 === (n = r.read_shift(4))) &&
                    ((t.UnicodeClipboardFormat = rI(r, 2)),
                    0 != (n = r.read_shift(4)) && !(n > 40)) &&
                    ((r.l -= 4), (t.Reserved2 = r.read_shift(0, "lpwstr")));
                }
              })(a),
            t.bookProps && !t.bookSheets)
          )
            i = {};
          else {
            var r,
              n,
              a,
              s,
              i,
              o,
              c = es ? "buffer" : "array";
            if (s && s.content)
              i = (function (e, t) {
                var r,
                  n,
                  a,
                  s,
                  i,
                  o,
                  c,
                  l,
                  f,
                  h = { opts: {} },
                  u = {},
                  d = t.dense ? [] : {},
                  p = {},
                  m = {},
                  g = null,
                  v = [],
                  b = "",
                  E = {},
                  S = "",
                  w = {},
                  C = [],
                  B = !0,
                  T = [],
                  x = [],
                  _ = { Sheets: [], WBProps: { date1904: !1 }, Views: [{}] },
                  k = {},
                  A = function (e) {
                    return e < 8 ? rL[e] : (e < 64 && x[e - 8]) || rL[e];
                  },
                  I = function (e, t, r) {
                    var n,
                      a = t.XF.data;
                    a &&
                      a.patternType &&
                      r &&
                      r.cellStyles &&
                      ((t.s = {}),
                      (t.s.patternType = a.patternType),
                      (n = aE(A(a.icvFore))) && (t.s.fgColor = { rgb: n }),
                      (n = aE(A(a.icvBack))) && (t.s.bgColor = { rgb: n }));
                  },
                  y = function (e, t, r) {
                    if (
                      !(U > 1) &&
                      (r.sheetRows && e.r >= r.sheetRows && (B = !1), B)
                    ) {
                      if (
                        (r.cellStyles && t.XF && t.XF.data && I(e, t, r),
                        delete t.ixfe,
                        delete t.XF,
                        (i = e),
                        (S = rn(e)),
                        (m && m.s && m.e) ||
                          (m = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                        e.r < m.s.r && (m.s.r = e.r),
                        e.c < m.s.c && (m.s.c = e.c),
                        e.r + 1 > m.e.r && (m.e.r = e.r + 1),
                        e.c + 1 > m.e.c && (m.e.c = e.c + 1),
                        r.cellFormula && t.f)
                      ) {
                        for (var n = 0; n < C.length; ++n)
                          if (
                            !(C[n][0].s.c > e.c) &&
                            !(C[n][0].s.r > e.r) &&
                            !(C[n][0].e.c < e.c) &&
                            !(C[n][0].e.r < e.r)
                          ) {
                            (t.F = rs(C[n][0])),
                              (C[n][0].s.c != e.c || C[n][0].s.r != e.r) &&
                                delete t.f,
                              t.f && (t.f = "" + sv(C[n][1], m, e, M, R));
                            break;
                          }
                      }
                      r.dense
                        ? (d[e.r] || (d[e.r] = []), (d[e.r][e.c] = t))
                        : (d[S] = t);
                    }
                  },
                  R = {
                    enc: !1,
                    sbcch: 0,
                    snames: [],
                    sharedf: w,
                    arrayf: C,
                    rrtabid: [],
                    lastuser: "",
                    biff: 8,
                    codepage: 0,
                    winlocked: 0,
                    cellStyles: !!t && !!t.cellStyles,
                    WTF: !!t && !!t.wtf,
                  };
                t.password && (R.password = t.password);
                var F = [],
                  D = [],
                  O = [],
                  P = [],
                  N = !1,
                  M = [];
                (M.SheetNames = R.snames),
                  (M.sharedf = R.sharedf),
                  (M.arrayf = R.arrayf),
                  (M.names = []),
                  (M.XTI = []);
                var L = "",
                  U = 0,
                  H = 0,
                  W = [],
                  V = [];
                (R.codepage = 1200), Z(1200);
                for (var X = !1; e.l < e.length - 1; ) {
                  var G = e.l,
                    z = e.read_shift(2);
                  if (0 === z && "EOF" === L) break;
                  var j = e.l === e.length ? 0 : e.read_shift(2),
                    K = iE[z];
                  if (K && K.f) {
                    if (
                      t.bookSheets &&
                      "BoundSheet8" === L &&
                      "BoundSheet8" !== K.n
                    )
                      break;
                    if (((L = K.n), 2 === K.r || 12 == K.r)) {
                      var Y = e.read_shift(2);
                      if (
                        ((j -= 2),
                        !R.enc &&
                          Y !== z &&
                          (((255 & Y) << 8) | (Y >> 8)) !== z)
                      )
                        throw Error("rt mismatch: " + Y + "!=" + z);
                      12 == K.r && ((e.l += 10), (j -= 10));
                    }
                    var Q = {};
                    Q =
                      "EOF" === K.n
                        ? K.f(e, j, R)
                        : (function (e, t, r, n) {
                            var a = r,
                              s = [],
                              i = t.slice(t.l, t.l + a);
                            if (n && n.enc && n.enc.insitu && i.length > 0)
                              switch (e.n) {
                                case "BOF":
                                case "FilePass":
                                case "FileLock":
                                case "InterfaceHdr":
                                case "RRDInfo":
                                case "RRDHead":
                                case "UsrExcl":
                                case "EOF":
                                case "BoundSheet8":
                                  break;
                                default:
                                  n.enc.insitu(i);
                              }
                            s.push(i), (t.l += a);
                            for (
                              var o = iE[tW(t, t.l)], c = 0;
                              null != o && "Continue" === o.n.slice(0, 8);
                            )
                              (a = tW(t, t.l + 2)),
                                (c = t.l + 4),
                                "ContinueFrt" == o.n
                                  ? (c += 4)
                                  : "ContinueFrt" == o.n.slice(0, 11) &&
                                    (c += 12),
                                (i = t.slice(c, t.l + 4 + a)),
                                s.push(i),
                                (t.l += 4 + a),
                                (o = iE[tW(t, t.l)]);
                            var l = ep(s);
                            tZ(l, 0);
                            var f = 0;
                            l.lens = [];
                            for (var h = 0; h < s.length; ++h)
                              l.lens.push(f), (f += s[h].length);
                            if (l.length < r)
                              throw (
                                "XLS Record " +
                                ((e && e.n) || "??") +
                                " Truncated: " +
                                l.length +
                                " < " +
                                r
                              );
                            return e.f(l, l.length, n);
                          })(K, e, j, R);
                    var J = K.n;
                    if (0 == U && "BOF" != J) continue;
                    switch (J) {
                      case "Date1904":
                        h.opts.Date1904 = _.WBProps.date1904 = Q;
                        break;
                      case "WriteProtect":
                        h.opts.WriteProtect = !0;
                        break;
                      case "FilePass":
                        if ((R.enc || (e.l = 0), (R.enc = Q), !t.password))
                          throw Error("File is password-protected");
                        if (null == Q.valid)
                          throw Error("Encryption scheme unsupported");
                        if (!Q.valid) throw Error("Password is incorrect");
                        break;
                      case "WriteAccess":
                        R.lastuser = Q;
                        break;
                      case "FileSharing":
                      case "Template":
                      case "BookBool":
                      case "UsesELFs":
                      case "MTRSettings":
                      case "Uncalced":
                      case "ExtSST":
                      case "BookExt":
                      case "RichTextStream":
                      case "BkHim":
                      case "Index":
                      case "Prot4Rev":
                      case "Prot4RevPass":
                        break;
                      case "CodePage":
                        var q = Number(Q);
                        switch (q) {
                          case 21010:
                            q = 1200;
                            break;
                          case 32768:
                            q = 1e4;
                            break;
                          case 32769:
                            q = 1252;
                        }
                        Z((R.codepage = q)), (X = !0);
                        break;
                      case "RRTabId":
                        R.rrtabid = Q;
                        break;
                      case "WinProtect":
                        R.winlocked = Q;
                        break;
                      case "RefreshAll":
                      case "CalcCount":
                      case "CalcDelta":
                      case "CalcIter":
                      case "CalcMode":
                      case "CalcPrecision":
                      case "CalcSaveRecalc":
                        h.opts[J] = Q;
                        break;
                      case "CalcRefMode":
                        R.CalcRefMode = Q;
                        break;
                      case "ForceFullCalculation":
                        h.opts.FullCalc = Q;
                        break;
                      case "WsBool":
                        Q.fDialog && (d["!type"] = "dialog");
                        break;
                      case "XF":
                        T.push(Q);
                        break;
                      case "SupBook":
                        M.push([Q]), (M[M.length - 1].XTI = []);
                        break;
                      case "ExternName":
                        M[M.length - 1].push(Q);
                        break;
                      case "Lbl":
                        (s = { Name: Q.Name, Ref: sv(Q.rgce, m, null, M, R) }),
                          Q.itab > 0 && (s.Sheet = Q.itab - 1),
                          M.names.push(s),
                          M[0] || ((M[0] = []), (M[0].XTI = [])),
                          M[M.length - 1].push(Q),
                          "_xlnm._FilterDatabase" == Q.Name &&
                            Q.itab > 0 &&
                            Q.rgce &&
                            Q.rgce[0] &&
                            Q.rgce[0][0] &&
                            "PtgArea3d" == Q.rgce[0][0][0] &&
                            (V[Q.itab - 1] = { ref: rs(Q.rgce[0][0][1][2]) });
                        break;
                      case "ExternCount":
                        R.ExternCount = Q;
                        break;
                      case "ExternSheet":
                        0 == M.length && ((M[0] = []), (M[0].XTI = [])),
                          (M[M.length - 1].XTI = M[M.length - 1].XTI.concat(Q)),
                          (M.XTI = M.XTI.concat(Q));
                        break;
                      case "NameCmt":
                        if (R.biff < 8) break;
                        null != s && (s.Comment = Q[1]);
                        break;
                      case "Protect":
                        d["!protect"] = Q;
                        break;
                      case "Password":
                        0 !== Q &&
                          R.WTF &&
                          console.error("Password verifier: " + Q);
                        break;
                      case "BoundSheet8":
                        (p[Q.pos] = Q), R.snames.push(Q.name);
                        break;
                      case "EOF":
                        if (--U) break;
                        if (m.e) {
                          if (m.e.r > 0 && m.e.c > 0) {
                            if (
                              (m.e.r--,
                              m.e.c--,
                              (d["!ref"] = rs(m)),
                              t.sheetRows && t.sheetRows <= m.e.r)
                            ) {
                              var ee = m.e.r;
                              (m.e.r = t.sheetRows - 1),
                                (d["!fullref"] = d["!ref"]),
                                (d["!ref"] = rs(m)),
                                (m.e.r = ee);
                            }
                            m.e.r++, m.e.c++;
                          }
                          F.length > 0 && (d["!merges"] = F),
                            D.length > 0 && (d["!objects"] = D),
                            O.length > 0 && (d["!cols"] = O),
                            P.length > 0 && (d["!rows"] = P),
                            _.Sheets.push(k);
                        }
                        "" === b ? (E = d) : (u[b] = d),
                          (d = t.dense ? [] : {});
                        break;
                      case "BOF":
                        if (
                          (8 === R.biff &&
                            (R.biff =
                              { 9: 2, 521: 3, 1033: 4 }[z] ||
                              {
                                512: 2,
                                768: 3,
                                1024: 4,
                                1280: 5,
                                1536: 8,
                                2: 2,
                                7: 2,
                              }[Q.BIFFVer] ||
                              8),
                          8 == R.biff &&
                            0 == Q.BIFFVer &&
                            16 == Q.dt &&
                            (R.biff = 2),
                          U++)
                        )
                          break;
                        if (
                          ((B = !0),
                          (d = t.dense ? [] : {}),
                          R.biff < 8 &&
                            !X &&
                            ((X = !0), Z((R.codepage = t.codepage || 1252))),
                          R.biff < 5)
                        ) {
                          "" === b && (b = "Sheet1"),
                            (m = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } });
                          var et = { pos: e.l - j, name: b };
                          (p[et.pos] = et), R.snames.push(b);
                        } else b = (p[G] || { name: "" }).name;
                        32 == Q.dt && (d["!type"] = "chart"),
                          64 == Q.dt && (d["!type"] = "macro"),
                          (F = []),
                          (D = []),
                          (R.arrayf = C = []),
                          (O = []),
                          (P = []),
                          (N = !1),
                          (k = { Hidden: (p[G] || { hs: 0 }).hs, name: b });
                        break;
                      case "Number":
                      case "BIFF2NUM":
                      case "BIFF2INT":
                        "chart" == d["!type"] &&
                          (t.dense
                            ? (d[Q.r] || [])[Q.c]
                            : d[rn({ c: Q.c, r: Q.r })]) &&
                          ++Q.c,
                          (r = {
                            ixfe: Q.ixfe,
                            XF: T[Q.ixfe] || {},
                            v: Q.val,
                            t: "n",
                          }),
                          H > 0 && (r.z = W[(r.ixfe >> 8) & 31]),
                          id(r, t, h.opts.Date1904),
                          y({ c: Q.c, r: Q.r }, r, t);
                        break;
                      case "BoolErr":
                        (r = { ixfe: Q.ixfe, XF: T[Q.ixfe], v: Q.val, t: Q.t }),
                          H > 0 && (r.z = W[(r.ixfe >> 8) & 31]),
                          id(r, t, h.opts.Date1904),
                          y({ c: Q.c, r: Q.r }, r, t);
                        break;
                      case "RK":
                        (r = {
                          ixfe: Q.ixfe,
                          XF: T[Q.ixfe],
                          v: Q.rknum,
                          t: "n",
                        }),
                          H > 0 && (r.z = W[(r.ixfe >> 8) & 31]),
                          id(r, t, h.opts.Date1904),
                          y({ c: Q.c, r: Q.r }, r, t);
                        break;
                      case "MulRk":
                        for (var er = Q.c; er <= Q.C; ++er) {
                          var en = Q.rkrec[er - Q.c][0];
                          (r = {
                            ixfe: en,
                            XF: T[en],
                            v: Q.rkrec[er - Q.c][1],
                            t: "n",
                          }),
                            H > 0 && (r.z = W[(r.ixfe >> 8) & 31]),
                            id(r, t, h.opts.Date1904),
                            y({ c: er, r: Q.r }, r, t);
                        }
                        break;
                      case "Formula":
                        if ("String" == Q.val) {
                          g = Q;
                          break;
                        }
                        if (
                          (((r = ip(Q.val, Q.cell.ixfe, Q.tt)).XF = T[r.ixfe]),
                          t.cellFormula)
                        ) {
                          var ea = Q.formula;
                          if (
                            ea &&
                            ea[0] &&
                            ea[0][0] &&
                            "PtgExp" == ea[0][0][0]
                          ) {
                            var es = ea[0][0][1][0],
                              ei = ea[0][0][1][1],
                              eo = rn({ r: es, c: ei });
                            w[eo]
                              ? (r.f = "" + sv(Q.formula, m, Q.cell, M, R))
                              : (r.F = (
                                  (t.dense ? (d[es] || [])[ei] : d[eo]) || {}
                                ).F);
                          } else r.f = "" + sv(Q.formula, m, Q.cell, M, R);
                        }
                        H > 0 && (r.z = W[(r.ixfe >> 8) & 31]),
                          id(r, t, h.opts.Date1904),
                          y(Q.cell, r, t),
                          (g = Q);
                        break;
                      case "String":
                        if (g)
                          (g.val = Q),
                            ((r = ip(Q, g.cell.ixfe, "s")).XF = T[r.ixfe]),
                            t.cellFormula &&
                              (r.f = "" + sv(g.formula, m, g.cell, M, R)),
                            H > 0 && (r.z = W[(r.ixfe >> 8) & 31]),
                            id(r, t, h.opts.Date1904),
                            y(g.cell, r, t),
                            (g = null);
                        else throw Error("String record expects Formula");
                        break;
                      case "Array":
                        C.push(Q);
                        var ec = rn(Q[0].s);
                        if (
                          ((o = t.dense
                            ? (d[Q[0].s.r] || [])[Q[0].s.c]
                            : d[ec]),
                          t.cellFormula && o)
                        ) {
                          if (!g || !ec || !o) break;
                          (o.f = "" + sv(Q[1], m, Q[0], M, R)),
                            (o.F = rs(Q[0]));
                        }
                        break;
                      case "ShrFmla":
                        if (!B || !t.cellFormula) break;
                        if (S) {
                          if (!g) break;
                          (w[rn(g.cell)] = Q[0]),
                            ((
                              (o = t.dense
                                ? (d[g.cell.r] || [])[g.cell.c]
                                : d[rn(g.cell)]) || {}
                            ).f = "" + sv(Q[0], m, i, M, R));
                        }
                        break;
                      case "LabelSst":
                        (r = ip(v[Q.isst].t, Q.ixfe, "s")),
                          v[Q.isst].h && (r.h = v[Q.isst].h),
                          (r.XF = T[r.ixfe]),
                          H > 0 && (r.z = W[(r.ixfe >> 8) & 31]),
                          id(r, t, h.opts.Date1904),
                          y({ c: Q.c, r: Q.r }, r, t);
                        break;
                      case "Blank":
                        t.sheetStubs &&
                          ((r = { ixfe: Q.ixfe, XF: T[Q.ixfe], t: "z" }),
                          H > 0 && (r.z = W[(r.ixfe >> 8) & 31]),
                          id(r, t, h.opts.Date1904),
                          y({ c: Q.c, r: Q.r }, r, t));
                        break;
                      case "MulBlank":
                        if (t.sheetStubs)
                          for (var el = Q.c; el <= Q.C; ++el) {
                            var ef = Q.ixfe[el - Q.c];
                            (r = { ixfe: ef, XF: T[ef], t: "z" }),
                              H > 0 && (r.z = W[(r.ixfe >> 8) & 31]),
                              id(r, t, h.opts.Date1904),
                              y({ c: el, r: Q.r }, r, t);
                          }
                        break;
                      case "RString":
                      case "Label":
                      case "BIFF2STR":
                        ((r = ip(Q.val, Q.ixfe, "s")).XF = T[r.ixfe]),
                          H > 0 && (r.z = W[(r.ixfe >> 8) & 31]),
                          id(r, t, h.opts.Date1904),
                          y({ c: Q.c, r: Q.r }, r, t);
                        break;
                      case "Dimensions":
                        1 === U && (m = Q);
                        break;
                      case "SST":
                        v = Q;
                        break;
                      case "Format":
                        if (4 == R.biff) {
                          W[H++] = Q[1];
                          for (
                            var eh = 0;
                            eh < H + 163 && ev._table[eh] != Q[1];
                            ++eh
                          );
                          eh >= 163 && ev.load(Q[1], H + 163);
                        } else ev.load(Q[1], Q[0]);
                        break;
                      case "BIFF2FORMAT":
                        W[H++] = Q;
                        for (
                          var eu = 0;
                          eu < H + 163 && ev._table[eu] != Q;
                          ++eu
                        );
                        eu >= 163 && ev.load(Q, H + 163);
                        break;
                      case "MergeCells":
                        F = F.concat(Q);
                        break;
                      case "Obj":
                        D[Q.cmo[0]] = R.lastobj = Q;
                        break;
                      case "TxO":
                        R.lastobj.TxO = Q;
                        break;
                      case "ImData":
                        R.lastobj.ImData = Q;
                        break;
                      case "HLink":
                        for (f = Q[0].s.r; f <= Q[0].e.r; ++f)
                          for (l = Q[0].s.c; l <= Q[0].e.c; ++l)
                            (o = t.dense
                              ? (d[f] || [])[l]
                              : d[rn({ c: l, r: f })]) && (o.l = Q[1]);
                        break;
                      case "HLinkTooltip":
                        for (f = Q[0].s.r; f <= Q[0].e.r; ++f)
                          for (l = Q[0].s.c; l <= Q[0].e.c; ++l)
                            (o = t.dense
                              ? (d[f] || [])[l]
                              : d[rn({ c: l, r: f })]) &&
                              o.l &&
                              (o.l.Tooltip = Q[1]);
                        break;
                      case "Note":
                        if (R.biff <= 5 && R.biff >= 2) break;
                        o = t.dense ? (d[Q[0].r] || [])[Q[0].c] : d[rn(Q[0])];
                        var ed = D[Q[2]];
                        o ||
                          (t.dense
                            ? (d[Q[0].r] || (d[Q[0].r] = []),
                              (o = d[Q[0].r][Q[0].c] = { t: "z" }))
                            : (o = d[rn(Q[0])] = { t: "z" }),
                          (m.e.r = Math.max(m.e.r, Q[0].r)),
                          (m.s.r = Math.min(m.s.r, Q[0].r)),
                          (m.e.c = Math.max(m.e.c, Q[0].c)),
                          (m.s.c = Math.min(m.s.c, Q[0].c))),
                          o.c || (o.c = []),
                          (c = { a: Q[1], t: ed.TxO.t }),
                          o.c.push(c);
                        break;
                      default:
                        switch (K.n) {
                          case "ClrtClient":
                          case "DefColWidth":
                          case "Header":
                          case "Footer":
                          case "HCenter":
                          case "VCenter":
                          case "Pls":
                          case "GCW":
                          case "LHRecord":
                          case "DBCell":
                          case "EntExU2":
                          case "SxView":
                          case "Sxvd":
                          case "SXVI":
                          case "SXVDEx":
                          case "SxIvd":
                          case "SXString":
                          case "Sync":
                          case "Addin":
                          case "SXDI":
                          case "SXLI":
                          case "SXEx":
                          case "QsiSXTag":
                          case "Selection":
                          case "Feat":
                          case "FeatHdr":
                          case "FeatHdr11":
                          case "Feature11":
                          case "Feature12":
                          case "List12":
                          case "RecalcId":
                          case "DxGCol":
                          case "Fbi":
                          case "Fbi2":
                          case "GelFrame":
                          case "Font":
                          case "XFCRC":
                          case "Style":
                          case "StyleExt":
                          case "ScenarioProtect":
                          case "ObjProtect":
                          case "CondFmt12":
                          case "Table":
                          case "TableStyles":
                          case "TableStyle":
                          case "TableStyleElement":
                          case "SXStreamID":
                          case "SXVS":
                          case "DConRef":
                          case "SXAddl":
                          case "DConBin":
                          case "DConName":
                          case "SXPI":
                          case "SxFormat":
                          case "SxSelect":
                          case "SxRule":
                          case "SxFilt":
                          case "SxItm":
                          case "SxDXF":
                          case "ScenMan":
                          case "DCon":
                          case "CellWatch":
                          case "PrintRowCol":
                          case "PrintGrid":
                          case "PrintSize":
                          case "XCT":
                          case "CRN":
                          case "Scl":
                          case "SheetExt":
                          case "SheetExtOptional":
                          case "ObNoMacros":
                          case "ObProj":
                          case "GUIDTypeLib":
                          case "WOpt":
                          case "PhoneticInfo":
                          case "OleObjectSize":
                          case "DXF":
                          case "DXFN":
                          case "DXFN12":
                          case "DXFN12List":
                          case "DXFN12NoCB":
                          case "Dv":
                          case "DVal":
                          case "BRAI":
                          case "Series":
                          case "SeriesText":
                          case "DConn":
                          case "DbOrParamQry":
                          case "DBQueryExt":
                          case "OleDbConn":
                          case "ExtString":
                          case "IFmtRecord":
                          case "CondFmt":
                          case "CF":
                          case "CF12":
                          case "CFEx":
                          case "Excel9File":
                          case "Units":
                          case "InterfaceHdr":
                          case "Mms":
                          case "InterfaceEnd":
                          case "DSF":
                          case "BuiltInFnGroupCount":
                          case "Window1":
                          case "HideObj":
                          case "GridSet":
                          case "Guts":
                          case "UserBView":
                          case "UserSViewBegin":
                          case "UserSViewEnd":
                          case "Pane":
                            break;
                          case "XFExt":
                            !(function (e, t) {
                              t.forEach(function (e) {
                                e[0];
                              });
                            })(T[Q.ixfe], Q.ext);
                            break;
                          case "DefaultRowHeight":
                            Q[1];
                            break;
                          case "ColInfo":
                            if (!R.cellStyles) break;
                            for (; Q.e >= Q.s; )
                              (O[Q.e--] = { width: Q.w / 256 }),
                                N || ((N = !0), a_(Q.w / 256)),
                                ak(O[Q.e + 1]);
                            break;
                          case "Row":
                            var em = {};
                            null != Q.level &&
                              ((P[Q.r] = em), (em.level = Q.level)),
                              Q.hidden && ((P[Q.r] = em), (em.hidden = !0)),
                              Q.hpt &&
                                ((P[Q.r] = em),
                                (em.hpt = Q.hpt),
                                (em.hpx = aI(Q.hpt)));
                            break;
                          case "LeftMargin":
                          case "RightMargin":
                          case "TopMargin":
                          case "BottomMargin":
                            d["!margins"] || sR((d["!margins"] = {})),
                              (d["!margins"][J.slice(0, -6).toLowerCase()] = Q);
                            break;
                          case "Setup":
                            d["!margins"] || sR((d["!margins"] = {})),
                              (d["!margins"].header = Q.header),
                              (d["!margins"].footer = Q.footer);
                            break;
                          case "Window2":
                            Q.RTL && (_.Views[0].RTL = !0);
                            break;
                          case "Country":
                            n = Q;
                            break;
                          case "Palette":
                            x = Q;
                            break;
                          case "Theme":
                            a = Q;
                            break;
                          case "CodeName":
                            b
                              ? (k.CodeName = Q || k.name)
                              : (_.WBProps.CodeName = Q || "ThisWorkbook");
                            break;
                          default:
                            switch (K.n) {
                              case "Dat":
                              case "Begin":
                              case "End":
                              case "StartBlock":
                              case "EndBlock":
                              case "Frame":
                              case "Area":
                              case "Axis":
                              case "AxisLine":
                              case "Tick":
                              case "AxesUsed":
                              case "CrtLayout12":
                              case "CrtLayout12A":
                              case "CrtLink":
                              case "CrtLine":
                              case "CrtMlFrt":
                              case "CrtMlFrtContinue":
                              case "LineFormat":
                              case "AreaFormat":
                              case "Chart":
                              case "Chart3d":
                              case "Chart3DBarShape":
                              case "ChartFormat":
                              case "ChartFrtInfo":
                              case "PlotArea":
                              case "PlotGrowth":
                              case "SeriesList":
                              case "SerParent":
                              case "SerAuxTrend":
                              case "DataFormat":
                              case "SerToCrt":
                              case "FontX":
                              case "CatSerRange":
                              case "AxcExt":
                              case "SerFmt":
                              case "ShtProps":
                              case "DefaultText":
                              case "Text":
                              case "CatLab":
                              case "DataLabExtContents":
                              case "Legend":
                              case "LegendException":
                              case "Pie":
                              case "Scatter":
                              case "PieFormat":
                              case "MarkerFormat":
                              case "StartObject":
                              case "EndObject":
                              case "AlRuns":
                              case "ObjectLink":
                              case "SIIndex":
                              case "AttachedLabel":
                              case "YMult":
                              case "Line":
                              case "Bar":
                              case "Surf":
                              case "AxisParent":
                              case "Pos":
                              case "ValueRange":
                              case "SXViewEx9":
                              case "SXViewLink":
                              case "PivotChartBits":
                              case "SBaseRef":
                              case "TextPropsStream":
                              case "LnExt":
                              case "MkrExt":
                              case "CrtCoopt":
                              case "Qsi":
                              case "Qsif":
                              case "Qsir":
                              case "QsiSXTag":
                              case "TxtQry":
                              case "FilterMode":
                              case "AutoFilter":
                              case "AutoFilterInfo":
                              case "AutoFilter12":
                              case "DropDownObjIds":
                              case "Sort":
                              case "SortData":
                              case "ShapePropsStream":
                              case "MsoDrawing":
                              case "MsoDrawingGroup":
                              case "MsoDrawingSelection":
                              case "WebPub":
                              case "AutoWebPub":
                              case "HeaderFooter":
                              case "HFPicture":
                              case "PLV":
                              case "HorizontalPageBreaks":
                              case "VerticalPageBreaks":
                              case "Backup":
                              case "CompressPictures":
                              case "Compat12":
                              case "Continue":
                              case "ContinueFrt12":
                              case "FrtFontList":
                              case "FrtWrapper":
                                break;
                              default:
                                switch (K.n) {
                                  case "TabIdConf":
                                  case "Radar":
                                  case "RadarArea":
                                  case "DropBar":
                                  case "Intl":
                                  case "CoordList":
                                  case "SerAuxErrBar":
                                  case "BIFF2FONTCLR":
                                  case "BIFF2FMTCNT":
                                  case "BIFF2FONTXTRA":
                                  case "BIFF2XF":
                                  case "BIFF3XF":
                                  case "BIFF4XF":
                                  case "BIFF4FMTCNT":
                                  case "BIFF2ROW":
                                  case "BIFF2WINDOW2":
                                  case "SCENARIO":
                                  case "DConBin":
                                  case "PicF":
                                  case "DataLabExt":
                                  case "Lel":
                                  case "BopPop":
                                  case "BopPopCustom":
                                  case "RealTimeData":
                                  case "Name":
                                  case "LHNGraph":
                                  case "FnGroupName":
                                  case "AddMenu":
                                  case "LPr":
                                  case "ListObj":
                                  case "ListField":
                                  case "RRSort":
                                  case "BigName":
                                  case "ToolbarHdr":
                                  case "ToolbarEnd":
                                  case "DDEObjName":
                                  case "FRTArchId$":
                                    break;
                                  default:
                                    if (t.WTF)
                                      throw "Unrecognized Record " + K.n;
                                }
                            }
                        }
                    }
                  } else e.l += j;
                }
                return (
                  (h.SheetNames = eT(p)
                    .sort(function (e, t) {
                      return Number(e) - Number(t);
                    })
                    .map(function (e) {
                      return p[e].name;
                    })),
                  t.bookSheets || (h.Sheets = u),
                  h.Sheets &&
                    V.forEach(function (e, t) {
                      h.Sheets[h.SheetNames[t]]["!autofilter"] = e;
                    }),
                  (h.Preamble = E),
                  (h.Strings = v),
                  (h.SSF = ev.get_table()),
                  R.enc && (h.Encryption = R.enc),
                  a && (h.Themes = a),
                  (h.Metadata = {}),
                  void 0 !== n && (h.Metadata.Country = n),
                  M.names.length > 0 && (_.Names = M.names),
                  (h.Workbook = _),
                  h
                );
              })(s.content, t);
            else if ((o = eC.find(e, "PerfectOffice_MAIN")) && o.content)
              i = n6.to_workbook(o.content, ((t.type = c), t));
            else if ((o = eC.find(e, "NativeContent_MAIN")) && o.content)
              i = n6.to_workbook(o.content, ((t.type = c), t));
            else throw Error("Cannot find Workbook stream");
            t.bookVBA &&
              e.FullPaths &&
              eC.find(e, "/_VBA_PROJECT_CUR/VBA/dir") &&
              (i.vbaraw =
                ((r = e),
                (n = eC.utils.cfb_new({ root: "R" })),
                r.FullPaths.forEach(function (e, t) {
                  if ("/" !== e.slice(-1) && e.match(/_VBA_PROJECT_CUR/)) {
                    var a = e
                      .replace(/^[^\/]*/, "R")
                      .replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
                    eC.utils.cfb_add(n, a, r.FileIndex[t].content);
                  }
                }),
                eC.write(n)));
          }
          var l = {};
          return (
            e.FullPaths &&
              (function (e, t, r) {
                var n = eC.find(e, "!DocumentSummaryInformation");
                if (n && n.size > 0)
                  try {
                    var a = ng(n, rR, im.DSI);
                    for (var s in a) t[s] = a[s];
                  } catch (e) {
                    if (r.WTF) throw e;
                  }
                var i = eC.find(e, "!SummaryInformation");
                if (i && i.size > 0)
                  try {
                    var o = ng(i, rF, im.SI);
                    for (var c in o) null == t[c] && (t[c] = o[c]);
                  } catch (e) {
                    if (r.WTF) throw e;
                  }
                t.HeadingPairs &&
                  t.TitlesOfParts &&
                  (r7(t.HeadingPairs, t.TitlesOfParts, t, r),
                  delete t.HeadingPairs,
                  delete t.TitlesOfParts);
              })(e, l, t),
            (i.Props = i.Custprops = l),
            t.bookFiles && (i.cfb = e),
            i
          );
        }
        var iv = {
            0: {
              n: "BrtRowHdr",
              f: function (e, t) {
                var r = {},
                  n = e.l + t;
                (r.r = e.read_shift(4)), (e.l += 4);
                var a = e.read_shift(2);
                e.l += 1;
                var s = e.read_shift(1);
                return (
                  (e.l = n),
                  7 & s && (r.level = 7 & s),
                  16 & s && (r.hidden = !0),
                  32 & s && (r.hpt = a / 20),
                  r
                );
              },
            },
            1: {
              n: "BrtCellBlank",
              f: function (e) {
                return [rg(e)];
              },
            },
            2: {
              n: "BrtCellRk",
              f: function (e) {
                return [rg(e), rC(e), "n"];
              },
            },
            3: {
              n: "BrtCellError",
              f: function (e) {
                return [rg(e), e.read_shift(1), "e"];
              },
            },
            4: {
              n: "BrtCellBool",
              f: function (e) {
                return [rg(e), e.read_shift(1), "b"];
              },
            },
            5: {
              n: "BrtCellReal",
              f: function (e) {
                return [rg(e), r_(e), "n"];
              },
            },
            6: {
              n: "BrtCellSt",
              f: function (e) {
                return [rg(e), rd(e), "str"];
              },
            },
            7: {
              n: "BrtCellIsst",
              f: function (e) {
                return [rg(e), e.read_shift(4), "s"];
              },
            },
            8: {
              n: "BrtFmlaString",
              f: function (e, t, r) {
                var n = e.l + t,
                  a = rg(e);
                a.r = r["!row"];
                var s = [a, rd(e), "str"];
                if (r.cellFormula) {
                  e.l += 2;
                  var i = sE(e, n - e.l, r);
                  s[3] = sv(i, null, a, r.supbooks, r);
                } else e.l = n;
                return s;
              },
            },
            9: {
              n: "BrtFmlaNum",
              f: function (e, t, r) {
                var n = e.l + t,
                  a = rg(e);
                a.r = r["!row"];
                var s = [a, r_(e), "n"];
                if (r.cellFormula) {
                  e.l += 2;
                  var i = sE(e, n - e.l, r);
                  s[3] = sv(i, null, a, r.supbooks, r);
                } else e.l = n;
                return s;
              },
            },
            10: {
              n: "BrtFmlaBool",
              f: function (e, t, r) {
                var n = e.l + t,
                  a = rg(e);
                a.r = r["!row"];
                var s = [a, e.read_shift(1), "b"];
                if (r.cellFormula) {
                  e.l += 2;
                  var i = sE(e, n - e.l, r);
                  s[3] = sv(i, null, a, r.supbooks, r);
                } else e.l = n;
                return s;
              },
            },
            11: {
              n: "BrtFmlaError",
              f: function (e, t, r) {
                var n = e.l + t,
                  a = rg(e);
                a.r = r["!row"];
                var s = [a, e.read_shift(1), "e"];
                if (r.cellFormula) {
                  e.l += 2;
                  var i = sE(e, n - e.l, r);
                  s[3] = sv(i, null, a, r.supbooks, r);
                } else e.l = n;
                return s;
              },
            },
            12: {
              n: "BrtShortBlank",
              f: function (e) {
                return [rb(e)];
              },
            },
            13: {
              n: "BrtShortRk",
              f: function (e) {
                return [rb(e), rC(e), "n"];
              },
            },
            14: {
              n: "BrtShortError",
              f: function (e) {
                return [rb(e), e.read_shift(1), "e"];
              },
            },
            15: {
              n: "BrtShortBool",
              f: function (e) {
                return [rb(e), e.read_shift(1), "b"];
              },
            },
            16: { n: "BrtShortReal", f: sQ },
            17: {
              n: "BrtShortSt",
              f: function (e) {
                return [rb(e), rd(e), "str"];
              },
            },
            18: {
              n: "BrtShortIsst",
              f: function (e) {
                return [rb(e), e.read_shift(4), "s"];
              },
            },
            19: { n: "BrtSSTItem", f: rm },
            20: { n: "BrtPCDIMissing" },
            21: { n: "BrtPCDINumber" },
            22: { n: "BrtPCDIBoolean" },
            23: { n: "BrtPCDIError" },
            24: { n: "BrtPCDIString" },
            25: { n: "BrtPCDIDatetime" },
            26: { n: "BrtPCDIIndex" },
            27: { n: "BrtPCDIAMissing" },
            28: { n: "BrtPCDIANumber" },
            29: { n: "BrtPCDIABoolean" },
            30: { n: "BrtPCDIAError" },
            31: { n: "BrtPCDIAString" },
            32: { n: "BrtPCDIADatetime" },
            33: { n: "BrtPCRRecord" },
            34: { n: "BrtPCRRecordDt" },
            35: { n: "BrtFRTBegin" },
            36: { n: "BrtFRTEnd" },
            37: { n: "BrtACBegin" },
            38: { n: "BrtACEnd" },
            39: {
              n: "BrtName",
              f: function (e, t, r) {
                var n = e.l + t;
                (e.l += 4), (e.l += 1);
                var a = e.read_shift(4),
                  s = rd(e),
                  i = sE(e, 0, r),
                  o = rS(e);
                e.l = n;
                var c = { Name: s, Ptg: i };
                return a < 268435455 && (c.Sheet = a), o && (c.Comment = o), c;
              },
            },
            40: { n: "BrtIndexRowBlock" },
            42: { n: "BrtIndexBlock" },
            43: {
              n: "BrtFont",
              f: function (e, t, r) {
                var n,
                  a = {};
                a.sz = e.read_shift(2) / 20;
                var s =
                  ((n = e.read_shift(1)),
                  e.l++,
                  {
                    fBold: 1 & n,
                    fItalic: 2 & n,
                    fUnderline: 4 & n,
                    fStrikeout: 8 & n,
                    fOutline: 16 & n,
                    fShadow: 32 & n,
                    fCondense: 64 & n,
                    fExtend: 128 & n,
                  });
                switch (
                  (s.fItalic && (a.italic = 1),
                  s.fCondense && (a.condense = 1),
                  s.fExtend && (a.extend = 1),
                  s.fShadow && (a.shadow = 1),
                  s.fOutline && (a.outline = 1),
                  s.fStrikeout && (a.strike = 1),
                  700 === e.read_shift(2) && (a.bold = 1),
                  e.read_shift(2))
                ) {
                  case 1:
                    a.vertAlign = "superscript";
                    break;
                  case 2:
                    a.vertAlign = "subscript";
                }
                var i = e.read_shift(1);
                0 != i && (a.underline = i);
                var o = e.read_shift(1);
                o > 0 && (a.family = o);
                var c = e.read_shift(1);
                switch (
                  (c > 0 && (a.charset = c),
                  e.l++,
                  (a.color = (function (e) {
                    var t = {},
                      r = e.read_shift(1),
                      n = e.read_shift(1),
                      a = e.read_shift(2, "i"),
                      s = e.read_shift(1),
                      i = e.read_shift(1),
                      o = e.read_shift(1);
                    switch ((e.l++, r >>> 1)) {
                      case 0:
                        t.auto = 1;
                        break;
                      case 1:
                        t.index = n;
                        var c = rL[n];
                        c && (t.rgb = aE(c));
                        break;
                      case 2:
                        t.rgb = aE([s, i, o]);
                        break;
                      case 3:
                        t.theme = n;
                    }
                    return (
                      0 != a && (t.tint = a > 0 ? a / 32767 : a / 32768), t
                    );
                  })(e, 8)),
                  e.read_shift(1))
                ) {
                  case 1:
                    a.scheme = "major";
                    break;
                  case 2:
                    a.scheme = "minor";
                }
                return (a.name = rd(e, t - 21)), a;
              },
            },
            44: {
              n: "BrtFmt",
              f: function (e, t) {
                return [e.read_shift(2), rd(e, t - 2)];
              },
            },
            45: { n: "BrtFill", f: tq },
            46: { n: "BrtBorder", f: tq },
            47: {
              n: "BrtXF",
              f: function (e, t) {
                var r = e.l + t,
                  n = e.read_shift(2),
                  a = e.read_shift(2);
                return (e.l = r), { ixfe: n, numFmtId: a };
              },
            },
            48: { n: "BrtStyle" },
            49: { n: "BrtCellMeta" },
            50: { n: "BrtValueMeta" },
            51: { n: "BrtMdb" },
            52: { n: "BrtBeginFmd" },
            53: { n: "BrtEndFmd" },
            54: { n: "BrtBeginMdx" },
            55: { n: "BrtEndMdx" },
            56: { n: "BrtBeginMdxTuple" },
            57: { n: "BrtEndMdxTuple" },
            58: { n: "BrtMdxMbrIstr" },
            59: { n: "BrtStr" },
            60: { n: "BrtColInfo", f: n1 },
            62: { n: "BrtCellRString" },
            63: {
              n: "BrtCalcChainItem$",
              f: function (e) {
                var t = {};
                t.i = e.read_shift(4);
                var r = {};
                (r.r = e.read_shift(4)), (r.c = e.read_shift(4)), (t.r = rn(r));
                var n = e.read_shift(1);
                return 2 & n && (t.l = "1"), 8 & n && (t.a = "1"), t;
              },
            },
            64: { n: "BrtDVal", f: function () {} },
            65: { n: "BrtSxvcellNum" },
            66: { n: "BrtSxvcellStr" },
            67: { n: "BrtSxvcellBool" },
            68: { n: "BrtSxvcellErr" },
            69: { n: "BrtSxvcellDate" },
            70: { n: "BrtSxvcellNil" },
            128: { n: "BrtFileVersion" },
            129: { n: "BrtBeginSheet" },
            130: { n: "BrtEndSheet" },
            131: { n: "BrtBeginBook", f: tq, p: 0 },
            132: { n: "BrtEndBook" },
            133: { n: "BrtBeginWsViews" },
            134: { n: "BrtEndWsViews" },
            135: { n: "BrtBeginBookViews" },
            136: { n: "BrtEndBookViews" },
            137: {
              n: "BrtBeginWsView",
              f: function (e) {
                var t = e.read_shift(2);
                return (e.l += 28), { RTL: 32 & t };
              },
            },
            138: { n: "BrtEndWsView" },
            139: { n: "BrtBeginCsViews" },
            140: { n: "BrtEndCsViews" },
            141: { n: "BrtBeginCsView" },
            142: { n: "BrtEndCsView" },
            143: { n: "BrtBeginBundleShs" },
            144: { n: "BrtEndBundleShs" },
            145: { n: "BrtBeginSheetData" },
            146: { n: "BrtEndSheetData" },
            147: {
              n: "BrtWsProp",
              f: function (e, t) {
                var r = {};
                return (e.l += 19), (r.name = rd(e, t - 19)), r;
              },
            },
            148: { n: "BrtWsDim", f: rT, p: 16 },
            151: { n: "BrtPane", f: function () {} },
            152: { n: "BrtSel" },
            153: {
              n: "BrtWbProp",
              f: function (e, t) {
                var r = {},
                  n = e.read_shift(4);
                r.defaultThemeVersion = e.read_shift(4);
                var a = t > 8 ? rd(e) : "";
                return (
                  a.length > 0 && (r.CodeName = a),
                  (r.autoCompressPictures = !!(65536 & n)),
                  (r.backupFile = !!(64 & n)),
                  (r.checkCompatibility = !!(4096 & n)),
                  (r.date1904 = !!(1 & n)),
                  (r.filterPrivacy = !!(8 & n)),
                  (r.hidePivotFieldList = !!(1024 & n)),
                  (r.promptedSolutions = !!(16 & n)),
                  (r.publishItems = !!(2048 & n)),
                  (r.refreshAllConnections = !!(262144 & n)),
                  (r.saveExternalLinkValues = !!(128 & n)),
                  (r.showBorderUnselectedTables = !!(4 & n)),
                  (r.showInkAnnotation = !!(32 & n)),
                  (r.showObjects = ["all", "placeholders", "none"][
                    (n >> 13) & 3
                  ]),
                  (r.showPivotChartFilter = !!(32768 & n)),
                  (r.updateLinks = ["userSet", "never", "always"][
                    (n >> 8) & 3
                  ]),
                  r
                );
              },
            },
            154: { n: "BrtWbFactoid" },
            155: { n: "BrtFileRecover" },
            156: {
              n: "BrtBundleSh",
              f: function (e, t) {
                var r = {};
                return (
                  (r.Hidden = e.read_shift(4)),
                  (r.iTabID = e.read_shift(4)),
                  (r.strRelID = rS(e, t - 8)),
                  (r.name = rd(e)),
                  r
                );
              },
            },
            157: { n: "BrtCalcProp" },
            158: { n: "BrtBookView" },
            159: {
              n: "BrtBeginSst",
              f: function (e) {
                return [e.read_shift(4), e.read_shift(4)];
              },
            },
            160: { n: "BrtEndSst" },
            161: { n: "BrtBeginAFilter", f: rT },
            162: { n: "BrtEndAFilter" },
            163: { n: "BrtBeginFilterColumn" },
            164: { n: "BrtEndFilterColumn" },
            165: { n: "BrtBeginFilters" },
            166: { n: "BrtEndFilters" },
            167: { n: "BrtFilter" },
            168: { n: "BrtColorFilter" },
            169: { n: "BrtIconFilter" },
            170: { n: "BrtTop10Filter" },
            171: { n: "BrtDynamicFilter" },
            172: { n: "BrtBeginCustomFilters" },
            173: { n: "BrtEndCustomFilters" },
            174: { n: "BrtCustomFilter" },
            175: { n: "BrtAFilterDateGroupItem" },
            176: { n: "BrtMergeCell", f: rT },
            177: { n: "BrtBeginMergeCells" },
            178: { n: "BrtEndMergeCells" },
            179: { n: "BrtBeginPivotCacheDef" },
            180: { n: "BrtEndPivotCacheDef" },
            181: { n: "BrtBeginPCDFields" },
            182: { n: "BrtEndPCDFields" },
            183: { n: "BrtBeginPCDField" },
            184: { n: "BrtEndPCDField" },
            185: { n: "BrtBeginPCDSource" },
            186: { n: "BrtEndPCDSource" },
            187: { n: "BrtBeginPCDSRange" },
            188: { n: "BrtEndPCDSRange" },
            189: { n: "BrtBeginPCDFAtbl" },
            190: { n: "BrtEndPCDFAtbl" },
            191: { n: "BrtBeginPCDIRun" },
            192: { n: "BrtEndPCDIRun" },
            193: { n: "BrtBeginPivotCacheRecords" },
            194: { n: "BrtEndPivotCacheRecords" },
            195: { n: "BrtBeginPCDHierarchies" },
            196: { n: "BrtEndPCDHierarchies" },
            197: { n: "BrtBeginPCDHierarchy" },
            198: { n: "BrtEndPCDHierarchy" },
            199: { n: "BrtBeginPCDHFieldsUsage" },
            200: { n: "BrtEndPCDHFieldsUsage" },
            201: { n: "BrtBeginExtConnection" },
            202: { n: "BrtEndExtConnection" },
            203: { n: "BrtBeginECDbProps" },
            204: { n: "BrtEndECDbProps" },
            205: { n: "BrtBeginECOlapProps" },
            206: { n: "BrtEndECOlapProps" },
            207: { n: "BrtBeginPCDSConsol" },
            208: { n: "BrtEndPCDSConsol" },
            209: { n: "BrtBeginPCDSCPages" },
            210: { n: "BrtEndPCDSCPages" },
            211: { n: "BrtBeginPCDSCPage" },
            212: { n: "BrtEndPCDSCPage" },
            213: { n: "BrtBeginPCDSCPItem" },
            214: { n: "BrtEndPCDSCPItem" },
            215: { n: "BrtBeginPCDSCSets" },
            216: { n: "BrtEndPCDSCSets" },
            217: { n: "BrtBeginPCDSCSet" },
            218: { n: "BrtEndPCDSCSet" },
            219: { n: "BrtBeginPCDFGroup" },
            220: { n: "BrtEndPCDFGroup" },
            221: { n: "BrtBeginPCDFGItems" },
            222: { n: "BrtEndPCDFGItems" },
            223: { n: "BrtBeginPCDFGRange" },
            224: { n: "BrtEndPCDFGRange" },
            225: { n: "BrtBeginPCDFGDiscrete" },
            226: { n: "BrtEndPCDFGDiscrete" },
            227: { n: "BrtBeginPCDSDTupleCache" },
            228: { n: "BrtEndPCDSDTupleCache" },
            229: { n: "BrtBeginPCDSDTCEntries" },
            230: { n: "BrtEndPCDSDTCEntries" },
            231: { n: "BrtBeginPCDSDTCEMembers" },
            232: { n: "BrtEndPCDSDTCEMembers" },
            233: { n: "BrtBeginPCDSDTCEMember" },
            234: { n: "BrtEndPCDSDTCEMember" },
            235: { n: "BrtBeginPCDSDTCQueries" },
            236: { n: "BrtEndPCDSDTCQueries" },
            237: { n: "BrtBeginPCDSDTCQuery" },
            238: { n: "BrtEndPCDSDTCQuery" },
            239: { n: "BrtBeginPCDSDTCSets" },
            240: { n: "BrtEndPCDSDTCSets" },
            241: { n: "BrtBeginPCDSDTCSet" },
            242: { n: "BrtEndPCDSDTCSet" },
            243: { n: "BrtBeginPCDCalcItems" },
            244: { n: "BrtEndPCDCalcItems" },
            245: { n: "BrtBeginPCDCalcItem" },
            246: { n: "BrtEndPCDCalcItem" },
            247: { n: "BrtBeginPRule" },
            248: { n: "BrtEndPRule" },
            249: { n: "BrtBeginPRFilters" },
            250: { n: "BrtEndPRFilters" },
            251: { n: "BrtBeginPRFilter" },
            252: { n: "BrtEndPRFilter" },
            253: { n: "BrtBeginPNames" },
            254: { n: "BrtEndPNames" },
            255: { n: "BrtBeginPName" },
            256: { n: "BrtEndPName" },
            257: { n: "BrtBeginPNPairs" },
            258: { n: "BrtEndPNPairs" },
            259: { n: "BrtBeginPNPair" },
            260: { n: "BrtEndPNPair" },
            261: { n: "BrtBeginECWebProps" },
            262: { n: "BrtEndECWebProps" },
            263: { n: "BrtBeginEcWpTables" },
            264: { n: "BrtEndECWPTables" },
            265: { n: "BrtBeginECParams" },
            266: { n: "BrtEndECParams" },
            267: { n: "BrtBeginECParam" },
            268: { n: "BrtEndECParam" },
            269: { n: "BrtBeginPCDKPIs" },
            270: { n: "BrtEndPCDKPIs" },
            271: { n: "BrtBeginPCDKPI" },
            272: { n: "BrtEndPCDKPI" },
            273: { n: "BrtBeginDims" },
            274: { n: "BrtEndDims" },
            275: { n: "BrtBeginDim" },
            276: { n: "BrtEndDim" },
            277: { n: "BrtIndexPartEnd" },
            278: { n: "BrtBeginStyleSheet" },
            279: { n: "BrtEndStyleSheet" },
            280: { n: "BrtBeginSXView" },
            281: { n: "BrtEndSXVI" },
            282: { n: "BrtBeginSXVI" },
            283: { n: "BrtBeginSXVIs" },
            284: { n: "BrtEndSXVIs" },
            285: { n: "BrtBeginSXVD" },
            286: { n: "BrtEndSXVD" },
            287: { n: "BrtBeginSXVDs" },
            288: { n: "BrtEndSXVDs" },
            289: { n: "BrtBeginSXPI" },
            290: { n: "BrtEndSXPI" },
            291: { n: "BrtBeginSXPIs" },
            292: { n: "BrtEndSXPIs" },
            293: { n: "BrtBeginSXDI" },
            294: { n: "BrtEndSXDI" },
            295: { n: "BrtBeginSXDIs" },
            296: { n: "BrtEndSXDIs" },
            297: { n: "BrtBeginSXLI" },
            298: { n: "BrtEndSXLI" },
            299: { n: "BrtBeginSXLIRws" },
            300: { n: "BrtEndSXLIRws" },
            301: { n: "BrtBeginSXLICols" },
            302: { n: "BrtEndSXLICols" },
            303: { n: "BrtBeginSXFormat" },
            304: { n: "BrtEndSXFormat" },
            305: { n: "BrtBeginSXFormats" },
            306: { n: "BrtEndSxFormats" },
            307: { n: "BrtBeginSxSelect" },
            308: { n: "BrtEndSxSelect" },
            309: { n: "BrtBeginISXVDRws" },
            310: { n: "BrtEndISXVDRws" },
            311: { n: "BrtBeginISXVDCols" },
            312: { n: "BrtEndISXVDCols" },
            313: { n: "BrtEndSXLocation" },
            314: { n: "BrtBeginSXLocation" },
            315: { n: "BrtEndSXView" },
            316: { n: "BrtBeginSXTHs" },
            317: { n: "BrtEndSXTHs" },
            318: { n: "BrtBeginSXTH" },
            319: { n: "BrtEndSXTH" },
            320: { n: "BrtBeginISXTHRws" },
            321: { n: "BrtEndISXTHRws" },
            322: { n: "BrtBeginISXTHCols" },
            323: { n: "BrtEndISXTHCols" },
            324: { n: "BrtBeginSXTDMPS" },
            325: { n: "BrtEndSXTDMPs" },
            326: { n: "BrtBeginSXTDMP" },
            327: { n: "BrtEndSXTDMP" },
            328: { n: "BrtBeginSXTHItems" },
            329: { n: "BrtEndSXTHItems" },
            330: { n: "BrtBeginSXTHItem" },
            331: { n: "BrtEndSXTHItem" },
            332: { n: "BrtBeginMetadata" },
            333: { n: "BrtEndMetadata" },
            334: { n: "BrtBeginEsmdtinfo" },
            335: { n: "BrtMdtinfo" },
            336: { n: "BrtEndEsmdtinfo" },
            337: { n: "BrtBeginEsmdb" },
            338: { n: "BrtEndEsmdb" },
            339: { n: "BrtBeginEsfmd" },
            340: { n: "BrtEndEsfmd" },
            341: { n: "BrtBeginSingleCells" },
            342: { n: "BrtEndSingleCells" },
            343: { n: "BrtBeginList" },
            344: { n: "BrtEndList" },
            345: { n: "BrtBeginListCols" },
            346: { n: "BrtEndListCols" },
            347: { n: "BrtBeginListCol" },
            348: { n: "BrtEndListCol" },
            349: { n: "BrtBeginListXmlCPr" },
            350: { n: "BrtEndListXmlCPr" },
            351: { n: "BrtListCCFmla" },
            352: { n: "BrtListTrFmla" },
            353: { n: "BrtBeginExternals" },
            354: { n: "BrtEndExternals" },
            355: { n: "BrtSupBookSrc", f: rS },
            357: { n: "BrtSupSelf" },
            358: { n: "BrtSupSame" },
            359: { n: "BrtSupTabs" },
            360: { n: "BrtBeginSupBook" },
            361: { n: "BrtPlaceholderName" },
            362: { n: "BrtExternSheet", f: nJ },
            363: { n: "BrtExternTableStart" },
            364: { n: "BrtExternTableEnd" },
            366: { n: "BrtExternRowHdr" },
            367: { n: "BrtExternCellBlank" },
            368: { n: "BrtExternCellReal" },
            369: { n: "BrtExternCellBool" },
            370: { n: "BrtExternCellError" },
            371: { n: "BrtExternCellString" },
            372: { n: "BrtBeginEsmdx" },
            373: { n: "BrtEndEsmdx" },
            374: { n: "BrtBeginMdxSet" },
            375: { n: "BrtEndMdxSet" },
            376: { n: "BrtBeginMdxMbrProp" },
            377: { n: "BrtEndMdxMbrProp" },
            378: { n: "BrtBeginMdxKPI" },
            379: { n: "BrtEndMdxKPI" },
            380: { n: "BrtBeginEsstr" },
            381: { n: "BrtEndEsstr" },
            382: { n: "BrtBeginPRFItem" },
            383: { n: "BrtEndPRFItem" },
            384: { n: "BrtBeginPivotCacheIDs" },
            385: { n: "BrtEndPivotCacheIDs" },
            386: { n: "BrtBeginPivotCacheID" },
            387: { n: "BrtEndPivotCacheID" },
            388: { n: "BrtBeginISXVIs" },
            389: { n: "BrtEndISXVIs" },
            390: { n: "BrtBeginColInfos" },
            391: { n: "BrtEndColInfos" },
            392: { n: "BrtBeginRwBrk" },
            393: { n: "BrtEndRwBrk" },
            394: { n: "BrtBeginColBrk" },
            395: { n: "BrtEndColBrk" },
            396: { n: "BrtBrk" },
            397: { n: "BrtUserBookView" },
            398: { n: "BrtInfo" },
            399: { n: "BrtCUsr" },
            400: { n: "BrtUsr" },
            401: { n: "BrtBeginUsers" },
            403: { n: "BrtEOF" },
            404: { n: "BrtUCR" },
            405: { n: "BrtRRInsDel" },
            406: { n: "BrtRREndInsDel" },
            407: { n: "BrtRRMove" },
            408: { n: "BrtRREndMove" },
            409: { n: "BrtRRChgCell" },
            410: { n: "BrtRREndChgCell" },
            411: { n: "BrtRRHeader" },
            412: { n: "BrtRRUserView" },
            413: { n: "BrtRRRenSheet" },
            414: { n: "BrtRRInsertSh" },
            415: { n: "BrtRRDefName" },
            416: { n: "BrtRRNote" },
            417: { n: "BrtRRConflict" },
            418: { n: "BrtRRTQSIF" },
            419: { n: "BrtRRFormat" },
            420: { n: "BrtRREndFormat" },
            421: { n: "BrtRRAutoFmt" },
            422: { n: "BrtBeginUserShViews" },
            423: { n: "BrtBeginUserShView" },
            424: { n: "BrtEndUserShView" },
            425: { n: "BrtEndUserShViews" },
            426: {
              n: "BrtArrFmla",
              f: function (e, t, r) {
                var n = e.l + t,
                  a = rT(e, 16),
                  s = e.read_shift(1),
                  i = [a];
                if (((i[2] = s), r.cellFormula)) {
                  var o = sE(e, n - e.l, r);
                  i[1] = o;
                } else e.l = n;
                return i;
              },
            },
            427: {
              n: "BrtShrFmla",
              f: function (e, t, r) {
                var n = e.l + t,
                  a = [rT(e, 16)];
                if (r.cellFormula) {
                  var s = sE(e, n - e.l, r);
                  (a[1] = s), (e.l = n);
                } else e.l = n;
                return a;
              },
            },
            428: { n: "BrtTable" },
            429: { n: "BrtBeginExtConnections" },
            430: { n: "BrtEndExtConnections" },
            431: { n: "BrtBeginPCDCalcMems" },
            432: { n: "BrtEndPCDCalcMems" },
            433: { n: "BrtBeginPCDCalcMem" },
            434: { n: "BrtEndPCDCalcMem" },
            435: { n: "BrtBeginPCDHGLevels" },
            436: { n: "BrtEndPCDHGLevels" },
            437: { n: "BrtBeginPCDHGLevel" },
            438: { n: "BrtEndPCDHGLevel" },
            439: { n: "BrtBeginPCDHGLGroups" },
            440: { n: "BrtEndPCDHGLGroups" },
            441: { n: "BrtBeginPCDHGLGroup" },
            442: { n: "BrtEndPCDHGLGroup" },
            443: { n: "BrtBeginPCDHGLGMembers" },
            444: { n: "BrtEndPCDHGLGMembers" },
            445: { n: "BrtBeginPCDHGLGMember" },
            446: { n: "BrtEndPCDHGLGMember" },
            447: { n: "BrtBeginQSI" },
            448: { n: "BrtEndQSI" },
            449: { n: "BrtBeginQSIR" },
            450: { n: "BrtEndQSIR" },
            451: { n: "BrtBeginDeletedNames" },
            452: { n: "BrtEndDeletedNames" },
            453: { n: "BrtBeginDeletedName" },
            454: { n: "BrtEndDeletedName" },
            455: { n: "BrtBeginQSIFs" },
            456: { n: "BrtEndQSIFs" },
            457: { n: "BrtBeginQSIF" },
            458: { n: "BrtEndQSIF" },
            459: { n: "BrtBeginAutoSortScope" },
            460: { n: "BrtEndAutoSortScope" },
            461: { n: "BrtBeginConditionalFormatting" },
            462: { n: "BrtEndConditionalFormatting" },
            463: { n: "BrtBeginCFRule" },
            464: { n: "BrtEndCFRule" },
            465: { n: "BrtBeginIconSet" },
            466: { n: "BrtEndIconSet" },
            467: { n: "BrtBeginDatabar" },
            468: { n: "BrtEndDatabar" },
            469: { n: "BrtBeginColorScale" },
            470: { n: "BrtEndColorScale" },
            471: { n: "BrtCFVO" },
            472: { n: "BrtExternValueMeta" },
            473: { n: "BrtBeginColorPalette" },
            474: { n: "BrtEndColorPalette" },
            475: { n: "BrtIndexedColor" },
            476: {
              n: "BrtMargins",
              f: function (e) {
                var t = {};
                return (
                  sJ.forEach(function (r) {
                    t[r] = r_(e, 8);
                  }),
                  t
                );
              },
            },
            477: { n: "BrtPrintOptions" },
            478: { n: "BrtPageSetup" },
            479: { n: "BrtBeginHeaderFooter" },
            480: { n: "BrtEndHeaderFooter" },
            481: { n: "BrtBeginSXCrtFormat" },
            482: { n: "BrtEndSXCrtFormat" },
            483: { n: "BrtBeginSXCrtFormats" },
            484: { n: "BrtEndSXCrtFormats" },
            485: { n: "BrtWsFmtInfo", f: function () {} },
            486: { n: "BrtBeginMgs" },
            487: { n: "BrtEndMGs" },
            488: { n: "BrtBeginMGMaps" },
            489: { n: "BrtEndMGMaps" },
            490: { n: "BrtBeginMG" },
            491: { n: "BrtEndMG" },
            492: { n: "BrtBeginMap" },
            493: { n: "BrtEndMap" },
            494: {
              n: "BrtHLink",
              f: function (e, t) {
                var r = e.l + t,
                  n = rT(e, 16),
                  a = rS(e),
                  s = rd(e),
                  i = rd(e),
                  o = rd(e);
                e.l = r;
                var c = { rfx: n, relId: a, loc: s, display: o };
                return i && (c.Tooltip = i), c;
              },
            },
            495: { n: "BrtBeginDCon" },
            496: { n: "BrtEndDCon" },
            497: { n: "BrtBeginDRefs" },
            498: { n: "BrtEndDRefs" },
            499: { n: "BrtDRef" },
            500: { n: "BrtBeginScenMan" },
            501: { n: "BrtEndScenMan" },
            502: { n: "BrtBeginSct" },
            503: { n: "BrtEndSct" },
            504: { n: "BrtSlc" },
            505: { n: "BrtBeginDXFs" },
            506: { n: "BrtEndDXFs" },
            507: { n: "BrtDXF" },
            508: { n: "BrtBeginTableStyles" },
            509: { n: "BrtEndTableStyles" },
            510: { n: "BrtBeginTableStyle" },
            511: { n: "BrtEndTableStyle" },
            512: { n: "BrtTableStyleElement" },
            513: { n: "BrtTableStyleClient" },
            514: { n: "BrtBeginVolDeps" },
            515: { n: "BrtEndVolDeps" },
            516: { n: "BrtBeginVolType" },
            517: { n: "BrtEndVolType" },
            518: { n: "BrtBeginVolMain" },
            519: { n: "BrtEndVolMain" },
            520: { n: "BrtBeginVolTopic" },
            521: { n: "BrtEndVolTopic" },
            522: { n: "BrtVolSubtopic" },
            523: { n: "BrtVolRef" },
            524: { n: "BrtVolNum" },
            525: { n: "BrtVolErr" },
            526: { n: "BrtVolStr" },
            527: { n: "BrtVolBool" },
            528: { n: "BrtBeginCalcChain$" },
            529: { n: "BrtEndCalcChain$" },
            530: { n: "BrtBeginSortState" },
            531: { n: "BrtEndSortState" },
            532: { n: "BrtBeginSortCond" },
            533: { n: "BrtEndSortCond" },
            534: { n: "BrtBookProtection" },
            535: { n: "BrtSheetProtection" },
            536: { n: "BrtRangeProtection" },
            537: { n: "BrtPhoneticInfo" },
            538: { n: "BrtBeginECTxtWiz" },
            539: { n: "BrtEndECTxtWiz" },
            540: { n: "BrtBeginECTWFldInfoLst" },
            541: { n: "BrtEndECTWFldInfoLst" },
            542: { n: "BrtBeginECTwFldInfo" },
            548: { n: "BrtFileSharing" },
            549: { n: "BrtOleSize" },
            550: { n: "BrtDrawing", f: rS },
            551: { n: "BrtLegacyDrawing" },
            552: { n: "BrtLegacyDrawingHF" },
            553: { n: "BrtWebOpt" },
            554: { n: "BrtBeginWebPubItems" },
            555: { n: "BrtEndWebPubItems" },
            556: { n: "BrtBeginWebPubItem" },
            557: { n: "BrtEndWebPubItem" },
            558: { n: "BrtBeginSXCondFmt" },
            559: { n: "BrtEndSXCondFmt" },
            560: { n: "BrtBeginSXCondFmts" },
            561: { n: "BrtEndSXCondFmts" },
            562: { n: "BrtBkHim" },
            564: { n: "BrtColor" },
            565: { n: "BrtBeginIndexedColors" },
            566: { n: "BrtEndIndexedColors" },
            569: { n: "BrtBeginMRUColors" },
            570: { n: "BrtEndMRUColors" },
            572: { n: "BrtMRUColor" },
            573: { n: "BrtBeginDVals" },
            574: { n: "BrtEndDVals" },
            577: { n: "BrtSupNameStart" },
            578: { n: "BrtSupNameValueStart" },
            579: { n: "BrtSupNameValueEnd" },
            580: { n: "BrtSupNameNum" },
            581: { n: "BrtSupNameErr" },
            582: { n: "BrtSupNameSt" },
            583: { n: "BrtSupNameNil" },
            584: { n: "BrtSupNameBool" },
            585: { n: "BrtSupNameFmla" },
            586: { n: "BrtSupNameBits" },
            587: { n: "BrtSupNameEnd" },
            588: { n: "BrtEndSupBook" },
            589: { n: "BrtCellSmartTagProperty" },
            590: { n: "BrtBeginCellSmartTag" },
            591: { n: "BrtEndCellSmartTag" },
            592: { n: "BrtBeginCellSmartTags" },
            593: { n: "BrtEndCellSmartTags" },
            594: { n: "BrtBeginSmartTags" },
            595: { n: "BrtEndSmartTags" },
            596: { n: "BrtSmartTagType" },
            597: { n: "BrtBeginSmartTagTypes" },
            598: { n: "BrtEndSmartTagTypes" },
            599: { n: "BrtBeginSXFilters" },
            600: { n: "BrtEndSXFilters" },
            601: { n: "BrtBeginSXFILTER" },
            602: { n: "BrtEndSXFilter" },
            603: { n: "BrtBeginFills" },
            604: { n: "BrtEndFills" },
            605: { n: "BrtBeginCellWatches" },
            606: { n: "BrtEndCellWatches" },
            607: { n: "BrtCellWatch" },
            608: { n: "BrtBeginCRErrs" },
            609: { n: "BrtEndCRErrs" },
            610: { n: "BrtCrashRecErr" },
            611: { n: "BrtBeginFonts" },
            612: { n: "BrtEndFonts" },
            613: { n: "BrtBeginBorders" },
            614: { n: "BrtEndBorders" },
            615: { n: "BrtBeginFmts" },
            616: { n: "BrtEndFmts" },
            617: { n: "BrtBeginCellXFs" },
            618: { n: "BrtEndCellXFs" },
            619: { n: "BrtBeginStyles" },
            620: { n: "BrtEndStyles" },
            625: { n: "BrtBigName" },
            626: { n: "BrtBeginCellStyleXFs" },
            627: { n: "BrtEndCellStyleXFs" },
            628: { n: "BrtBeginComments" },
            629: { n: "BrtEndComments" },
            630: { n: "BrtBeginCommentAuthors" },
            631: { n: "BrtEndCommentAuthors" },
            632: { n: "BrtCommentAuthor", f: rd },
            633: { n: "BrtBeginCommentList" },
            634: { n: "BrtEndCommentList" },
            635: {
              n: "BrtBeginComment",
              f: function (e) {
                var t = {};
                t.iauthor = e.read_shift(4);
                var r = rT(e, 16);
                return (t.rfx = r.s), (t.ref = rn(r.s)), (e.l += 16), t;
              },
            },
            636: { n: "BrtEndComment" },
            637: { n: "BrtCommentText", f: rm },
            638: { n: "BrtBeginOleObjects" },
            639: { n: "BrtOleObject" },
            640: { n: "BrtEndOleObjects" },
            641: { n: "BrtBeginSxrules" },
            642: { n: "BrtEndSxRules" },
            643: { n: "BrtBeginActiveXControls" },
            644: { n: "BrtActiveX" },
            645: { n: "BrtEndActiveXControls" },
            646: { n: "BrtBeginPCDSDTCEMembersSortBy" },
            648: { n: "BrtBeginCellIgnoreECs" },
            649: { n: "BrtCellIgnoreEC" },
            650: { n: "BrtEndCellIgnoreECs" },
            651: {
              n: "BrtCsProp",
              f: function (e, t) {
                return (e.l += 10), { name: rd(e, t - 10) };
              },
            },
            652: { n: "BrtCsPageSetup" },
            653: { n: "BrtBeginUserCsViews" },
            654: { n: "BrtEndUserCsViews" },
            655: { n: "BrtBeginUserCsView" },
            656: { n: "BrtEndUserCsView" },
            657: { n: "BrtBeginPcdSFCIEntries" },
            658: { n: "BrtEndPCDSFCIEntries" },
            659: { n: "BrtPCDSFCIEntry" },
            660: { n: "BrtBeginListParts" },
            661: { n: "BrtListPart" },
            662: { n: "BrtEndListParts" },
            663: { n: "BrtSheetCalcProp" },
            664: { n: "BrtBeginFnGroup" },
            665: { n: "BrtFnGroup" },
            666: { n: "BrtEndFnGroup" },
            667: { n: "BrtSupAddin" },
            668: { n: "BrtSXTDMPOrder" },
            669: { n: "BrtCsProtection" },
            671: { n: "BrtBeginWsSortMap" },
            672: { n: "BrtEndWsSortMap" },
            673: { n: "BrtBeginRRSort" },
            674: { n: "BrtEndRRSort" },
            675: { n: "BrtRRSortItem" },
            676: { n: "BrtFileSharingIso" },
            677: { n: "BrtBookProtectionIso" },
            678: { n: "BrtSheetProtectionIso" },
            679: { n: "BrtCsProtectionIso" },
            680: { n: "BrtRangeProtectionIso" },
            681: { n: "BrtDValList" },
            1024: { n: "BrtRwDescent" },
            1025: { n: "BrtKnownFonts" },
            1026: { n: "BrtBeginSXTupleSet" },
            1027: { n: "BrtEndSXTupleSet" },
            1028: { n: "BrtBeginSXTupleSetHeader" },
            1029: { n: "BrtEndSXTupleSetHeader" },
            1030: { n: "BrtSXTupleSetHeaderItem" },
            1031: { n: "BrtBeginSXTupleSetData" },
            1032: { n: "BrtEndSXTupleSetData" },
            1033: { n: "BrtBeginSXTupleSetRow" },
            1034: { n: "BrtEndSXTupleSetRow" },
            1035: { n: "BrtSXTupleSetRowItem" },
            1036: { n: "BrtNameExt" },
            1037: { n: "BrtPCDH14" },
            1038: { n: "BrtBeginPCDCalcMem14" },
            1039: { n: "BrtEndPCDCalcMem14" },
            1040: { n: "BrtSXTH14" },
            1041: { n: "BrtBeginSparklineGroup" },
            1042: { n: "BrtEndSparklineGroup" },
            1043: { n: "BrtSparkline" },
            1044: { n: "BrtSXDI14" },
            1045: { n: "BrtWsFmtInfoEx14" },
            1046: { n: "BrtBeginConditionalFormatting14" },
            1047: { n: "BrtEndConditionalFormatting14" },
            1048: { n: "BrtBeginCFRule14" },
            1049: { n: "BrtEndCFRule14" },
            1050: { n: "BrtCFVO14" },
            1051: { n: "BrtBeginDatabar14" },
            1052: { n: "BrtBeginIconSet14" },
            1053: { n: "BrtDVal14", f: function () {} },
            1054: { n: "BrtBeginDVals14" },
            1055: { n: "BrtColor14" },
            1056: { n: "BrtBeginSparklines" },
            1057: { n: "BrtEndSparklines" },
            1058: { n: "BrtBeginSparklineGroups" },
            1059: { n: "BrtEndSparklineGroups" },
            1061: { n: "BrtSXVD14" },
            1062: { n: "BrtBeginSXView14" },
            1063: { n: "BrtEndSXView14" },
            1064: { n: "BrtBeginSXView16" },
            1065: { n: "BrtEndSXView16" },
            1066: { n: "BrtBeginPCD14" },
            1067: { n: "BrtEndPCD14" },
            1068: { n: "BrtBeginExtConn14" },
            1069: { n: "BrtEndExtConn14" },
            1070: { n: "BrtBeginSlicerCacheIDs" },
            1071: { n: "BrtEndSlicerCacheIDs" },
            1072: { n: "BrtBeginSlicerCacheID" },
            1073: { n: "BrtEndSlicerCacheID" },
            1075: { n: "BrtBeginSlicerCache" },
            1076: { n: "BrtEndSlicerCache" },
            1077: { n: "BrtBeginSlicerCacheDef" },
            1078: { n: "BrtEndSlicerCacheDef" },
            1079: { n: "BrtBeginSlicersEx" },
            1080: { n: "BrtEndSlicersEx" },
            1081: { n: "BrtBeginSlicerEx" },
            1082: { n: "BrtEndSlicerEx" },
            1083: { n: "BrtBeginSlicer" },
            1084: { n: "BrtEndSlicer" },
            1085: { n: "BrtSlicerCachePivotTables" },
            1086: { n: "BrtBeginSlicerCacheOlapImpl" },
            1087: { n: "BrtEndSlicerCacheOlapImpl" },
            1088: { n: "BrtBeginSlicerCacheLevelsData" },
            1089: { n: "BrtEndSlicerCacheLevelsData" },
            1090: { n: "BrtBeginSlicerCacheLevelData" },
            1091: { n: "BrtEndSlicerCacheLevelData" },
            1092: { n: "BrtBeginSlicerCacheSiRanges" },
            1093: { n: "BrtEndSlicerCacheSiRanges" },
            1094: { n: "BrtBeginSlicerCacheSiRange" },
            1095: { n: "BrtEndSlicerCacheSiRange" },
            1096: { n: "BrtSlicerCacheOlapItem" },
            1097: { n: "BrtBeginSlicerCacheSelections" },
            1098: { n: "BrtSlicerCacheSelection" },
            1099: { n: "BrtEndSlicerCacheSelections" },
            1100: { n: "BrtBeginSlicerCacheNative" },
            1101: { n: "BrtEndSlicerCacheNative" },
            1102: { n: "BrtSlicerCacheNativeItem" },
            1103: { n: "BrtRangeProtection14" },
            1104: { n: "BrtRangeProtectionIso14" },
            1105: { n: "BrtCellIgnoreEC14" },
            1111: { n: "BrtList14" },
            1112: { n: "BrtCFIcon" },
            1113: { n: "BrtBeginSlicerCachesPivotCacheIDs" },
            1114: { n: "BrtEndSlicerCachesPivotCacheIDs" },
            1115: { n: "BrtBeginSlicers" },
            1116: { n: "BrtEndSlicers" },
            1117: { n: "BrtWbProp14" },
            1118: { n: "BrtBeginSXEdit" },
            1119: { n: "BrtEndSXEdit" },
            1120: { n: "BrtBeginSXEdits" },
            1121: { n: "BrtEndSXEdits" },
            1122: { n: "BrtBeginSXChange" },
            1123: { n: "BrtEndSXChange" },
            1124: { n: "BrtBeginSXChanges" },
            1125: { n: "BrtEndSXChanges" },
            1126: { n: "BrtSXTupleItems" },
            1128: { n: "BrtBeginSlicerStyle" },
            1129: { n: "BrtEndSlicerStyle" },
            1130: { n: "BrtSlicerStyleElement" },
            1131: { n: "BrtBeginStyleSheetExt14" },
            1132: { n: "BrtEndStyleSheetExt14" },
            1133: { n: "BrtBeginSlicerCachesPivotCacheID" },
            1134: { n: "BrtEndSlicerCachesPivotCacheID" },
            1135: { n: "BrtBeginConditionalFormattings" },
            1136: { n: "BrtEndConditionalFormattings" },
            1137: { n: "BrtBeginPCDCalcMemExt" },
            1138: { n: "BrtEndPCDCalcMemExt" },
            1139: { n: "BrtBeginPCDCalcMemsExt" },
            1140: { n: "BrtEndPCDCalcMemsExt" },
            1141: { n: "BrtPCDField14" },
            1142: { n: "BrtBeginSlicerStyles" },
            1143: { n: "BrtEndSlicerStyles" },
            1144: { n: "BrtBeginSlicerStyleElements" },
            1145: { n: "BrtEndSlicerStyleElements" },
            1146: { n: "BrtCFRuleExt" },
            1147: { n: "BrtBeginSXCondFmt14" },
            1148: { n: "BrtEndSXCondFmt14" },
            1149: { n: "BrtBeginSXCondFmts14" },
            1150: { n: "BrtEndSXCondFmts14" },
            1152: { n: "BrtBeginSortCond14" },
            1153: { n: "BrtEndSortCond14" },
            1154: { n: "BrtEndDVals14" },
            1155: { n: "BrtEndIconSet14" },
            1156: { n: "BrtEndDatabar14" },
            1157: { n: "BrtBeginColorScale14" },
            1158: { n: "BrtEndColorScale14" },
            1159: { n: "BrtBeginSxrules14" },
            1160: { n: "BrtEndSxrules14" },
            1161: { n: "BrtBeginPRule14" },
            1162: { n: "BrtEndPRule14" },
            1163: { n: "BrtBeginPRFilters14" },
            1164: { n: "BrtEndPRFilters14" },
            1165: { n: "BrtBeginPRFilter14" },
            1166: { n: "BrtEndPRFilter14" },
            1167: { n: "BrtBeginPRFItem14" },
            1168: { n: "BrtEndPRFItem14" },
            1169: { n: "BrtBeginCellIgnoreECs14" },
            1170: { n: "BrtEndCellIgnoreECs14" },
            1171: { n: "BrtDxf14" },
            1172: { n: "BrtBeginDxF14s" },
            1173: { n: "BrtEndDxf14s" },
            1177: { n: "BrtFilter14" },
            1178: { n: "BrtBeginCustomFilters14" },
            1180: { n: "BrtCustomFilter14" },
            1181: { n: "BrtIconFilter14" },
            1182: { n: "BrtPivotCacheConnectionName" },
            2048: { n: "BrtBeginDecoupledPivotCacheIDs" },
            2049: { n: "BrtEndDecoupledPivotCacheIDs" },
            2050: { n: "BrtDecoupledPivotCacheID" },
            2051: { n: "BrtBeginPivotTableRefs" },
            2052: { n: "BrtEndPivotTableRefs" },
            2053: { n: "BrtPivotTableRef" },
            2054: { n: "BrtSlicerCacheBookPivotTables" },
            2055: { n: "BrtBeginSxvcells" },
            2056: { n: "BrtEndSxvcells" },
            2057: { n: "BrtBeginSxRow" },
            2058: { n: "BrtEndSxRow" },
            2060: { n: "BrtPcdCalcMem15" },
            2067: { n: "BrtQsi15" },
            2068: { n: "BrtBeginWebExtensions" },
            2069: { n: "BrtEndWebExtensions" },
            2070: { n: "BrtWebExtension" },
            2071: { n: "BrtAbsPath15" },
            2072: { n: "BrtBeginPivotTableUISettings" },
            2073: { n: "BrtEndPivotTableUISettings" },
            2075: { n: "BrtTableSlicerCacheIDs" },
            2076: { n: "BrtTableSlicerCacheID" },
            2077: { n: "BrtBeginTableSlicerCache" },
            2078: { n: "BrtEndTableSlicerCache" },
            2079: { n: "BrtSxFilter15" },
            2080: { n: "BrtBeginTimelineCachePivotCacheIDs" },
            2081: { n: "BrtEndTimelineCachePivotCacheIDs" },
            2082: { n: "BrtTimelineCachePivotCacheID" },
            2083: { n: "BrtBeginTimelineCacheIDs" },
            2084: { n: "BrtEndTimelineCacheIDs" },
            2085: { n: "BrtBeginTimelineCacheID" },
            2086: { n: "BrtEndTimelineCacheID" },
            2087: { n: "BrtBeginTimelinesEx" },
            2088: { n: "BrtEndTimelinesEx" },
            2089: { n: "BrtBeginTimelineEx" },
            2090: { n: "BrtEndTimelineEx" },
            2091: { n: "BrtWorkBookPr15" },
            2092: { n: "BrtPCDH15" },
            2093: { n: "BrtBeginTimelineStyle" },
            2094: { n: "BrtEndTimelineStyle" },
            2095: { n: "BrtTimelineStyleElement" },
            2096: { n: "BrtBeginTimelineStylesheetExt15" },
            2097: { n: "BrtEndTimelineStylesheetExt15" },
            2098: { n: "BrtBeginTimelineStyles" },
            2099: { n: "BrtEndTimelineStyles" },
            2100: { n: "BrtBeginTimelineStyleElements" },
            2101: { n: "BrtEndTimelineStyleElements" },
            2102: { n: "BrtDxf15" },
            2103: { n: "BrtBeginDxfs15" },
            2104: { n: "brtEndDxfs15" },
            2105: { n: "BrtSlicerCacheHideItemsWithNoData" },
            2106: { n: "BrtBeginItemUniqueNames" },
            2107: { n: "BrtEndItemUniqueNames" },
            2108: { n: "BrtItemUniqueName" },
            2109: { n: "BrtBeginExtConn15" },
            2110: { n: "BrtEndExtConn15" },
            2111: { n: "BrtBeginOledbPr15" },
            2112: { n: "BrtEndOledbPr15" },
            2113: { n: "BrtBeginDataFeedPr15" },
            2114: { n: "BrtEndDataFeedPr15" },
            2115: { n: "BrtTextPr15" },
            2116: { n: "BrtRangePr15" },
            2117: { n: "BrtDbCommand15" },
            2118: { n: "BrtBeginDbTables15" },
            2119: { n: "BrtEndDbTables15" },
            2120: { n: "BrtDbTable15" },
            2121: { n: "BrtBeginDataModel" },
            2122: { n: "BrtEndDataModel" },
            2123: { n: "BrtBeginModelTables" },
            2124: { n: "BrtEndModelTables" },
            2125: { n: "BrtModelTable" },
            2126: { n: "BrtBeginModelRelationships" },
            2127: { n: "BrtEndModelRelationships" },
            2128: { n: "BrtModelRelationship" },
            2129: { n: "BrtBeginECTxtWiz15" },
            2130: { n: "BrtEndECTxtWiz15" },
            2131: { n: "BrtBeginECTWFldInfoLst15" },
            2132: { n: "BrtEndECTWFldInfoLst15" },
            2133: { n: "BrtBeginECTWFldInfo15" },
            2134: { n: "BrtFieldListActiveItem" },
            2135: { n: "BrtPivotCacheIdVersion" },
            2136: { n: "BrtSXDI15" },
            2137: { n: "BrtBeginModelTimeGroupings" },
            2138: { n: "BrtEndModelTimeGroupings" },
            2139: { n: "BrtBeginModelTimeGrouping" },
            2140: { n: "BrtEndModelTimeGrouping" },
            2141: { n: "BrtModelTimeGroupingCalcCol" },
            3072: { n: "BrtUid" },
            3073: { n: "BrtRevisionPtr" },
            5095: { n: "BrtBeginCalcFeatures" },
            5096: { n: "BrtEndCalcFeatures" },
            5097: { n: "BrtCalcFeature" },
            65535: { n: "" },
          },
          ib = ex(iv, "n");
        ib.BrtFRTArchID$ = 16;
        var iE = {
            3: {
              n: "BIFF2NUM",
              f: function (e) {
                var t = nF(e, 6);
                ++e.l;
                var r = r_(e, 8);
                return (t.t = "n"), (t.val = r), t;
              },
            },
            4: {
              n: "BIFF2STR",
              f: function (e, t, r) {
                var n = nF(e, 6);
                ++e.l;
                var a = nk(e, t - 7, r);
                return (n.t = "str"), (n.val = a), n;
              },
            },
            6: { n: "Formula", f: sb },
            9: { n: "BOF", f: nW },
            10: { n: "EOF", f: nb },
            12: { n: "CalcCount", f: nw },
            13: { n: "CalcMode", f: nw },
            14: { n: "CalcPrecision", f: nE },
            15: { n: "CalcRefMode", f: nE },
            16: { n: "CalcDelta", f: r_ },
            17: { n: "CalcIter", f: nE },
            18: { n: "Protect", f: nE },
            19: { n: "Password", f: nw },
            20: { n: "Header", f: n$ },
            21: { n: "Footer", f: n$ },
            23: { n: "ExternSheet", f: nJ },
            24: { n: "Lbl", f: nQ },
            25: { n: "WinProtect", f: nE },
            26: { n: "VerticalPageBreaks" },
            27: { n: "HorizontalPageBreaks" },
            28: {
              n: "Note",
              f: function (e, t, r) {
                return (function (e, t, r) {
                  if (!(r.biff < 8)) {
                    var n = e.read_shift(2),
                      a = e.read_shift(2),
                      s = e.read_shift(2),
                      i = e.read_shift(2),
                      o = nk(e, 0, r);
                    return (
                      r.biff < 8 && e.read_shift(1), [{ r: n, c: a }, o, i, s]
                    );
                  }
                })(e, 0, r);
              },
            },
            29: { n: "Selection" },
            34: { n: "Date1904", f: nE },
            35: { n: "ExternName", f: nK },
            36: { n: "COLWIDTH" },
            38: { n: "LeftMargin", f: r_ },
            39: { n: "RightMargin", f: r_ },
            40: { n: "TopMargin", f: r_ },
            41: { n: "BottomMargin", f: r_ },
            42: { n: "PrintRowCol", f: nE },
            43: { n: "PrintGrid", f: nE },
            47: {
              n: "FilePass",
              f: function (e, t, r) {
                var n,
                  a,
                  s,
                  i,
                  o,
                  c = { Type: r.biff >= 8 ? e.read_shift(2) : 0 };
                return (
                  c.Type
                    ? ((n = e),
                      (a = t - 2),
                      ((s = c || {}).Info = n.read_shift(2)),
                      (n.l -= 2),
                      1 === s.Info
                        ? (s.Data = (function (e) {
                            var t = {},
                              r = (t.EncryptionVersionInfo = ah(e, 4));
                            if (1 != r.Major || 1 != r.Minor)
                              throw (
                                "unrecognized version code " +
                                r.Major +
                                " : " +
                                r.Minor
                              );
                            return (
                              (t.Salt = e.read_shift(16)),
                              (t.EncryptedVerifier = e.read_shift(16)),
                              (t.EncryptedVerifierHash = e.read_shift(16)),
                              t
                            );
                          })(n, a))
                        : (s.Data = (function (e, t) {
                            var r = {},
                              n = (r.EncryptionVersionInfo = ah(e, 4));
                            if (((t -= 4), 2 != n.Minor))
                              throw Error(
                                "unrecognized minor version code: " + n.Minor
                              );
                            if (n.Major > 4 || n.Major < 2)
                              throw Error(
                                "unrecognized major version code: " + n.Major
                              );
                            (r.Flags = e.read_shift(4)), (t -= 4);
                            var a = e.read_shift(4);
                            return (
                              (t -= 4),
                              (r.EncryptionHeader = au(e, a)),
                              (t -= a),
                              (r.EncryptionVerifier = ad(e, t)),
                              r
                            );
                          })(n, a)))
                    : (r.biff,
                      (i = c),
                      (o = { key: nw(e), verificationBytes: nw(e) }),
                      r.password && (o.verifier = ap(r.password)),
                      (i.valid = o.verificationBytes === o.verifier),
                      i.valid && (i.insitu = av(r.password))),
                  c
                );
              },
            },
            49: {
              n: "Font",
              f: function (e, t, r) {
                var n = { dyHeight: e.read_shift(2), fl: e.read_shift(2) };
                switch ((r && r.biff) || 8) {
                  case 2:
                    break;
                  case 3:
                  case 4:
                    e.l += 2;
                    break;
                  default:
                    e.l += 10;
                }
                return (n.name = nT(e, 0, r)), n;
              },
            },
            51: { n: "PrintSize", f: nw },
            60: { n: "Continue" },
            61: {
              n: "Window1",
              f: function (e) {
                return {
                  Pos: [e.read_shift(2), e.read_shift(2)],
                  Dim: [e.read_shift(2), e.read_shift(2)],
                  Flags: e.read_shift(2),
                  CurTab: e.read_shift(2),
                  FirstTab: e.read_shift(2),
                  Selected: e.read_shift(2),
                  TabRatio: e.read_shift(2),
                };
              },
            },
            64: { n: "Backup", f: nE },
            65: { n: "Pane", f: function () {} },
            66: { n: "CodePage", f: nw },
            77: { n: "Pls" },
            80: { n: "DCon" },
            81: { n: "DConRef" },
            82: { n: "DConName" },
            85: { n: "DefColWidth", f: nw },
            89: { n: "XCT" },
            90: { n: "CRN" },
            91: { n: "FileSharing" },
            92: {
              n: "WriteAccess",
              f: function (e, t, r) {
                if (r.enc) return (e.l += t), "";
                var n = e.l,
                  a = nk(e, 0, r);
                return e.read_shift(t + n - e.l), a;
              },
            },
            93: {
              n: "Obj",
              f: function (e, t, r) {
                if (r && r.biff < 8) {
                  var n, a, s, i, o, c;
                  return (
                    (n = e),
                    (a = t),
                    (n.l += 4),
                    (s = n.read_shift(2)),
                    (i = n.read_shift(2)),
                    (o = n.read_shift(2)),
                    (n.l += 2),
                    (n.l += 2),
                    (n.l += 2),
                    (n.l += 2),
                    (n.l += 2),
                    (n.l += 2),
                    (n.l += 2),
                    (n.l += 2),
                    (n.l += 2),
                    (n.l += 6),
                    (a -= 36),
                    (c = []).push((nq[s] || tq)(n, a, r)),
                    { cmo: [i, s, o], ft: c }
                  );
                }
                var l = nL(e, 22),
                  f = (function (e, t) {
                    for (var r = e.l + t, n = []; e.l < r; ) {
                      var a = e.read_shift(2);
                      e.l -= 2;
                      try {
                        n.push(nH[a](e, r - e.l));
                      } catch (t) {
                        return (e.l = r), n;
                      }
                    }
                    return e.l != r && (e.l = r), n;
                  })(e, t - 22, l[1]);
                return { cmo: l, ft: f };
              },
            },
            94: { n: "Uncalced" },
            95: { n: "CalcSaveRecalc", f: nE },
            96: { n: "Template" },
            97: { n: "Intl" },
            99: { n: "ObjProtect", f: nE },
            125: { n: "ColInfo", f: n1 },
            128: {
              n: "Guts",
              f: function (e) {
                e.l += 4;
                var t = [e.read_shift(2), e.read_shift(2)];
                if (
                  (0 !== t[0] && t[0]--,
                  0 !== t[1] && t[1]--,
                  t[0] > 7 || t[1] > 7)
                )
                  throw Error("Bad Gutters: " + t.join("|"));
                return t;
              },
            },
            129: {
              n: "WsBool",
              f: function (e, t, r) {
                return {
                  fDialog:
                    16 &
                    ((r && 8 == r.biff) || 2 == t
                      ? e.read_shift(2)
                      : ((e.l += t), 0)),
                };
              },
            },
            130: { n: "GridSet", f: nw },
            131: { n: "HCenter", f: nE },
            132: { n: "VCenter", f: nE },
            133: {
              n: "BoundSheet8",
              f: function (e, t, r) {
                var n = e.read_shift(4),
                  a = 3 & e.read_shift(1),
                  s = e.read_shift(1);
                switch (s) {
                  case 0:
                    s = "Worksheet";
                    break;
                  case 1:
                    s = "Macrosheet";
                    break;
                  case 2:
                    s = "Chartsheet";
                    break;
                  case 6:
                    s = "VBAModule";
                }
                var i = nT(e, 0, r);
                return (
                  0 === i.length && (i = "Sheet1"),
                  { pos: n, hs: a, dt: s, name: i }
                );
              },
            },
            134: { n: "WriteProtect" },
            140: {
              n: "Country",
              f: function (e) {
                var t,
                  r = [0, 0];
                return (
                  (t = e.read_shift(2)),
                  (r[0] = rN[t] || t),
                  (t = e.read_shift(2)),
                  (r[1] = rN[t] || t),
                  r
                );
              },
            },
            141: { n: "HideObj", f: nw },
            144: { n: "Sort" },
            146: {
              n: "Palette",
              f: function (e) {
                for (var t = e.read_shift(2), r = []; t-- > 0; )
                  r.push(nR(e, 8));
                return r;
              },
            },
            151: { n: "Sync" },
            152: { n: "LPr" },
            153: { n: "DxGCol" },
            154: { n: "FnGroupName" },
            155: { n: "FilterMode" },
            156: { n: "BuiltInFnGroupCount", f: nw },
            157: { n: "AutoFilterInfo" },
            158: { n: "AutoFilter" },
            160: { n: "Scl", f: nB },
            161: {
              n: "Setup",
              f: function (e, t) {
                var r = {};
                return (
                  t < 32 ||
                    ((e.l += 16),
                    (r.header = r_(e, 8)),
                    (r.footer = r_(e, 8)),
                    (e.l += 2)),
                  r
                );
              },
            },
            174: { n: "ScenMan" },
            175: { n: "SCENARIO" },
            176: { n: "SxView" },
            177: { n: "Sxvd" },
            178: { n: "SXVI" },
            180: { n: "SxIvd" },
            181: { n: "SXLI" },
            182: { n: "SXPI" },
            184: { n: "DocRoute" },
            185: { n: "RecipName" },
            189: {
              n: "MulRk",
              f: function (e, t) {
                for (
                  var r = e.l + t - 2,
                    n = e.read_shift(2),
                    a = e.read_shift(2),
                    s = [];
                  e.l < r;
                )
                  s.push(nO(e));
                if (e.l !== r) throw Error("MulRK read error");
                var i = e.read_shift(2);
                if (s.length != i - a + 1) throw Error("MulRK length mismatch");
                return { r: n, c: a, C: i, rkrec: s };
              },
            },
            190: {
              n: "MulBlank",
              f: function (e, t) {
                for (
                  var r = e.l + t - 2,
                    n = e.read_shift(2),
                    a = e.read_shift(2),
                    s = [];
                  e.l < r;
                )
                  s.push(e.read_shift(2));
                if (e.l !== r) throw Error("MulBlank read error");
                var i = e.read_shift(2);
                if (s.length != i - a + 1)
                  throw Error("MulBlank length mismatch");
                return { r: n, c: a, C: i, ixfe: s };
              },
            },
            193: { n: "Mms", f: nb },
            197: { n: "SXDI" },
            198: { n: "SXDB" },
            199: { n: "SXFDB" },
            200: { n: "SXDBB" },
            201: { n: "SXNum" },
            202: { n: "SxBool", f: nE },
            203: { n: "SxErr" },
            204: { n: "SXInt" },
            205: { n: "SXString" },
            206: { n: "SXDtr" },
            207: { n: "SxNil" },
            208: { n: "SXTbl" },
            209: { n: "SXTBRGIITM" },
            210: { n: "SxTbpg" },
            211: { n: "ObProj" },
            213: { n: "SXStreamID" },
            215: { n: "DBCell" },
            216: { n: "SXRng" },
            217: { n: "SxIsxoper" },
            218: { n: "BookBool", f: nw },
            220: { n: "DbOrParamQry" },
            221: { n: "ScenarioProtect", f: nE },
            222: { n: "OleObjectSize" },
            224: {
              n: "XF",
              f: function (e, t, r) {
                var n,
                  a,
                  s,
                  i,
                  o,
                  c = {};
                return (
                  (c.ifnt = e.read_shift(2)),
                  (c.numFmtId = e.read_shift(2)),
                  (c.flags = e.read_shift(2)),
                  (c.fStyle = (c.flags >> 2) & 1),
                  (c.data =
                    (c.fStyle,
                    (n = {}),
                    (a = e.read_shift(4)),
                    (s = e.read_shift(4)),
                    (i = e.read_shift(4)),
                    (o = e.read_shift(2)),
                    (n.patternType = rM[i >> 26]),
                    r.cellStyles &&
                      ((n.alc = 7 & a),
                      (n.fWrap = (a >> 3) & 1),
                      (n.alcV = (a >> 4) & 7),
                      (n.fJustLast = (a >> 7) & 1),
                      (n.trot = (a >> 8) & 255),
                      (n.cIndent = (a >> 16) & 15),
                      (n.fShrinkToFit = (a >> 20) & 1),
                      (n.iReadOrder = (a >> 22) & 2),
                      (n.fAtrNum = (a >> 26) & 1),
                      (n.fAtrFnt = (a >> 27) & 1),
                      (n.fAtrAlc = (a >> 28) & 1),
                      (n.fAtrBdr = (a >> 29) & 1),
                      (n.fAtrPat = (a >> 30) & 1),
                      (n.fAtrProt = (a >> 31) & 1),
                      (n.dgLeft = 15 & s),
                      (n.dgRight = (s >> 4) & 15),
                      (n.dgTop = (s >> 8) & 15),
                      (n.dgBottom = (s >> 12) & 15),
                      (n.icvLeft = (s >> 16) & 127),
                      (n.icvRight = (s >> 23) & 127),
                      (n.grbitDiag = (s >> 30) & 3),
                      (n.icvTop = 127 & i),
                      (n.icvBottom = (i >> 7) & 127),
                      (n.icvDiag = (i >> 14) & 127),
                      (n.dgDiag = (i >> 21) & 15),
                      (n.icvFore = 127 & o),
                      (n.icvBack = (o >> 7) & 127),
                      (n.fsxButton = (o >> 14) & 1)),
                    n)),
                  c
                );
              },
            },
            225: {
              n: "InterfaceHdr",
              f: function (e, t) {
                return 0 === t || e.read_shift(2), 1200;
              },
            },
            226: { n: "InterfaceEnd", f: nb },
            227: { n: "SXVS" },
            229: {
              n: "MergeCells",
              f: function (e, t) {
                for (var r = [], n = e.read_shift(2); n--; ) r.push(nP(e, t));
                return r;
              },
            },
            233: { n: "BkHim" },
            235: { n: "MsoDrawingGroup" },
            236: { n: "MsoDrawing" },
            237: { n: "MsoDrawingSelection" },
            239: { n: "PhoneticInfo" },
            240: { n: "SxRule" },
            241: { n: "SXEx" },
            242: { n: "SxFilt" },
            244: { n: "SxDXF" },
            245: { n: "SxItm" },
            246: { n: "SxName" },
            247: { n: "SxSelect" },
            248: { n: "SXPair" },
            249: { n: "SxFmla" },
            251: { n: "SxFormat" },
            252: {
              n: "SST",
              f: function (e, t) {
                for (
                  var r = e.l + t,
                    n = e.read_shift(4),
                    a = e.read_shift(4),
                    s = [],
                    i = 0;
                  i != a && e.l < r;
                  ++i
                )
                  s.push(
                    (function (e) {
                      var t = z;
                      z = 1200;
                      var r,
                        n = e.read_shift(2),
                        a = e.read_shift(1),
                        s = 4 & a,
                        i = 8 & a,
                        o = 0,
                        c = {};
                      i && (o = e.read_shift(2)), s && (r = e.read_shift(4));
                      var l =
                        0 === n
                          ? ""
                          : e.read_shift(
                              n,
                              2 == 1 + (1 & a) ? "dbcs-cont" : "sbcs-cont"
                            );
                      return (
                        i && (e.l += 4 * o),
                        s && (e.l += r),
                        (c.t = l),
                        i || ((c.raw = "<t>" + c.t + "</t>"), (c.r = c.t)),
                        (z = t),
                        c
                      );
                    })(e)
                  );
                return (s.Count = n), (s.Unique = a), s;
              },
            },
            253: {
              n: "LabelSst",
              f: function (e) {
                var t = nF(e);
                return (t.isst = e.read_shift(4)), t;
              },
            },
            255: {
              n: "ExtSST",
              f: function (e, t) {
                var r = {};
                return (r.dsst = e.read_shift(2)), (e.l += t - 2), r;
              },
            },
            256: { n: "SXVDEx" },
            259: { n: "SXFormula" },
            290: { n: "SXDBEx" },
            311: { n: "RRDInsDel" },
            312: { n: "RRDHead" },
            315: { n: "RRDChgCell" },
            317: { n: "RRTabId", f: nB },
            318: { n: "RRDRenSheet" },
            319: { n: "RRSort" },
            320: { n: "RRDMove" },
            330: { n: "RRFormat" },
            331: { n: "RRAutoFmt" },
            333: { n: "RRInsertSh" },
            334: { n: "RRDMoveBegin" },
            335: { n: "RRDMoveEnd" },
            336: { n: "RRDInsDelBegin" },
            337: { n: "RRDInsDelEnd" },
            338: { n: "RRDConflict" },
            339: { n: "RRDDefName" },
            340: { n: "RRDRstEtxp" },
            351: { n: "LRng" },
            352: { n: "UsesELFs", f: nE },
            353: { n: "DSF", f: nb },
            401: { n: "CUsr" },
            402: { n: "CbUsr" },
            403: { n: "UsrInfo" },
            404: { n: "UsrExcl" },
            405: { n: "FileLock" },
            406: { n: "RRDInfo" },
            407: { n: "BCUsrs" },
            408: { n: "UsrChk" },
            425: { n: "UserBView" },
            426: { n: "UserSViewBegin" },
            427: { n: "UserSViewEnd" },
            428: { n: "RRDUserView" },
            429: { n: "Qsi" },
            430: {
              n: "SupBook",
              f: function (e, t, r) {
                var n = e.l + t,
                  a = e.read_shift(2),
                  s = e.read_shift(2);
                if (((r.sbcch = s), 1025 == s || 14849 == s)) return [s, a];
                if (s < 1 || s > 255)
                  throw Error("Unexpected SupBook type: " + s);
                for (var i = nx(e, s), o = []; n > e.l; ) o.push(n_(e));
                return [s, a, i, o];
              },
            },
            431: { n: "Prot4Rev", f: nE },
            432: { n: "CondFmt" },
            433: { n: "CF" },
            434: { n: "DVal" },
            437: { n: "DConBin" },
            438: {
              n: "TxO",
              f: function (e, t, r) {
                var n = e.l,
                  a = "";
                try {
                  e.l += 4;
                  var s,
                    i = (r.lastobj || { cmo: [0, 0] }).cmo[1];
                  -1 == [0, 5, 7, 11, 12, 14].indexOf(i)
                    ? (e.l += 6)
                    : ((s = e).read_shift(1),
                      s.l++,
                      s.read_shift(2),
                      (s.l += 2));
                  var o = e.read_shift(2);
                  e.read_shift(2), nw(e, 2);
                  var c = e.read_shift(2);
                  e.l += c;
                  for (var l = 1; l < e.lens.length - 1; ++l) {
                    if (e.l - n != e.lens[l])
                      throw Error("TxO: bad continue record");
                    var f = e[e.l],
                      h = nx(e, e.lens[l + 1] - e.lens[l] - 1);
                    if ((a += h).length >= (f ? o : 2 * o)) break;
                  }
                  if (a.length !== o && a.length !== 2 * o)
                    throw Error("cchText: " + o + " != " + a.length);
                  return (e.l = n + t), { t: a };
                } catch (r) {
                  return (e.l = n + t), { t: a };
                }
              },
            },
            439: { n: "RefreshAll", f: nE },
            440: {
              n: "HLink",
              f: function (e, t) {
                var r = nP(e, 8);
                return (
                  (e.l += 16),
                  [
                    r,
                    (function (e, t) {
                      var r = e.l + t,
                        n = e.read_shift(4);
                      if (2 !== n)
                        throw Error("Unrecognized streamVersion: " + n);
                      var a = e.read_shift(2);
                      e.l += 2;
                      var s,
                        i,
                        o,
                        c,
                        l,
                        f,
                        h = "";
                      16 & a && (s = nI(e, r - e.l)),
                        128 & a && (i = nI(e, r - e.l)),
                        (257 & a) == 257 && (o = nI(e, r - e.l)),
                        (257 & a) == 1 &&
                          (c = (function (e, t) {
                            var r,
                              n,
                              a,
                              s,
                              i,
                              o = e.read_shift(16);
                            switch (((t -= 16), o)) {
                              case "e0c9ea79f9bace118c8200aa004ba90b":
                                return (
                                  (n = (r = e).read_shift(4)),
                                  (a = r.l),
                                  (s = !1),
                                  n > 24 &&
                                    ((r.l += n - 24),
                                    "795881f43b1d7f48af2c825dc4852763" ===
                                      r.read_shift(16) && (s = !0),
                                    (r.l = a)),
                                  (i = r
                                    .read_shift(
                                      (s ? n - 24 : n) >> 1,
                                      "utf16le"
                                    )
                                    .replace(em, "")),
                                  s && (r.l += 24),
                                  i
                                );
                              case "0303000000000000c000000000000046":
                                return (function (e) {
                                  e.l += 2;
                                  var t = e.read_shift(0, "lpstr-ansi");
                                  if (((e.l += 2), 57005 != e.read_shift(2)))
                                    throw Error("Bad FileMoniker");
                                  if (0 === e.read_shift(4))
                                    return t.replace(/\\/g, "/");
                                  var r = e.read_shift(4);
                                  if (3 != e.read_shift(2))
                                    throw Error("Bad FileMoniker");
                                  return e
                                    .read_shift(r >> 1, "utf16le")
                                    .replace(em, "");
                                })(e, t);
                              default:
                                throw Error("Unsupported Moniker " + o);
                            }
                          })(e, r - e.l)),
                        8 & a && (h = nI(e, r - e.l)),
                        32 & a && (l = e.read_shift(16)),
                        64 & a && (f = na(e)),
                        (e.l = r);
                      var u = i || o || c || "";
                      u && h && (u += "#" + h), u || (u = "#" + h);
                      var d = { Target: u };
                      return (
                        l && (d.guid = l),
                        f && (d.time = f),
                        s && (d.Tooltip = s),
                        d
                      );
                    })(e, t - 24),
                  ]
                );
              },
            },
            441: { n: "Lel" },
            442: { n: "CodeName", f: n_ },
            443: { n: "SXFDBType" },
            444: { n: "Prot4RevPass", f: nw },
            445: { n: "ObNoMacros" },
            446: { n: "Dv" },
            448: { n: "Excel9File", f: nb },
            449: {
              n: "RecalcId",
              f: function (e) {
                return e.read_shift(2), e.read_shift(4);
              },
              r: 2,
            },
            450: { n: "EntExU2", f: nb },
            512: { n: "Dimensions", f: nG },
            513: { n: "Blank", f: nF },
            515: {
              n: "Number",
              f: function (e) {
                var t = nF(e, 6),
                  r = r_(e, 8);
                return (t.val = r), t;
              },
            },
            516: {
              n: "Label",
              f: function (e, t, r) {
                var n = e.l + t,
                  a = nF(e, 6);
                2 == r.biff && e.l++;
                var s = n_(e, n - e.l, r);
                return (a.val = s), a;
              },
            },
            517: { n: "BoolErr", f: nj },
            518: { n: "Formula", f: sb },
            519: { n: "String", f: n_ },
            520: {
              n: "Row",
              f: function (e) {
                var t = {};
                (t.r = e.read_shift(2)),
                  (t.c = e.read_shift(2)),
                  (t.cnt = e.read_shift(2) - t.c);
                var r = e.read_shift(2);
                e.l += 4;
                var n = e.read_shift(1);
                return (
                  (e.l += 3),
                  7 & n && (t.level = 7 & n),
                  32 & n && (t.hidden = !0),
                  64 & n && (t.hpt = r / 20),
                  t
                );
              },
            },
            523: { n: "Index" },
            545: { n: "Array", f: nZ },
            549: { n: "DefaultRowHeight", f: nX },
            566: { n: "Table" },
            574: {
              n: "Window2",
              f: function (e, t, r) {
                return r && r.biff >= 2 && r.biff < 5
                  ? {}
                  : { RTL: 64 & e.read_shift(2) };
              },
            },
            638: {
              n: "RK",
              f: function (e) {
                var t = e.read_shift(2),
                  r = e.read_shift(2),
                  n = nO(e);
                return { r: t, c: r, ixfe: n[0], rknum: n[1] };
              },
            },
            659: { n: "Style" },
            1030: { n: "Formula", f: sb },
            1048: { n: "BigName" },
            1054: {
              n: "Format",
              f: function (e, t, r) {
                return [e.read_shift(2), nk(e, 0, r)];
              },
            },
            1084: { n: "ContinueBigName" },
            1212: {
              n: "ShrFmla",
              f: function (e, t, r) {
                var n,
                  a,
                  s,
                  i,
                  o,
                  c,
                  l = nM(e, 6);
                e.l++;
                var f = e.read_shift(1);
                return [
                  ((n = t -= 8),
                  (s = e.l + n),
                  (o = e.read_shift(2)),
                  (c = su(e, o, r)),
                  65535 == o
                    ? [[], ((a = e), void (a.l += n - 2))]
                    : (n !== o + 2 && (i = sh(e, s - o - 2, c, r)), [c, i])),
                  f,
                  l,
                ];
              },
            },
            2048: {
              n: "HLinkTooltip",
              f: function (e, t) {
                e.read_shift(2);
                var r = nP(e, 8),
                  n = e.read_shift((t - 10) / 2, "dbcs-cont");
                return [r, (n = n.replace(em, ""))];
              },
            },
            2049: { n: "WebPub" },
            2050: { n: "QsiSXTag" },
            2051: { n: "DBQueryExt" },
            2052: { n: "ExtString" },
            2053: { n: "TxtQry" },
            2054: { n: "Qsir" },
            2055: { n: "Qsif" },
            2056: { n: "RRDTQSIF" },
            2057: { n: "BOF", f: nW },
            2058: { n: "OleDbConn" },
            2059: { n: "WOpt" },
            2060: { n: "SXViewEx" },
            2061: { n: "SXTH" },
            2062: { n: "SXPIEx" },
            2063: { n: "SXVDTEx" },
            2064: { n: "SXViewEx9" },
            2066: { n: "ContinueFrt" },
            2067: { n: "RealTimeData" },
            2128: { n: "ChartFrtInfo" },
            2129: { n: "FrtWrapper" },
            2130: { n: "StartBlock" },
            2131: { n: "EndBlock" },
            2132: { n: "StartObject" },
            2133: { n: "EndObject" },
            2134: { n: "CatLab" },
            2135: { n: "YMult" },
            2136: { n: "SXViewLink" },
            2137: { n: "PivotChartBits" },
            2138: { n: "FrtFontList" },
            2146: { n: "SheetExt" },
            2147: { n: "BookExt", r: 12 },
            2148: { n: "SXAddl" },
            2149: { n: "CrErr" },
            2150: { n: "HFPicture" },
            2151: { n: "FeatHdr", f: nb },
            2152: { n: "Feat" },
            2154: { n: "DataLabExt" },
            2155: { n: "DataLabExtContents" },
            2156: { n: "CellWatch" },
            2161: { n: "FeatHdr11" },
            2162: { n: "Feature11" },
            2164: { n: "DropDownObjIds" },
            2165: { n: "ContinueFrt11" },
            2166: { n: "DConn" },
            2167: { n: "List12" },
            2168: { n: "Feature12" },
            2169: { n: "CondFmt12" },
            2170: { n: "CF12" },
            2171: { n: "CFEx" },
            2172: {
              n: "XFCRC",
              f: function (e) {
                e.l += 2;
                var t = { cxfs: 0, crc: 0 };
                return (t.cxfs = e.read_shift(2)), (t.crc = e.read_shift(4)), t;
              },
              r: 12,
            },
            2173: {
              n: "XFExt",
              f: function (e, t) {
                var r = e.l + t;
                e.l += 2;
                var n = e.read_shift(2);
                e.l += 2;
                for (var a = e.read_shift(2), s = []; a-- > 0; )
                  s.push(
                    (function (e) {
                      var t,
                        r = e.read_shift(2),
                        n = e.read_shift(2) - 4,
                        a = [r];
                      switch (r) {
                        case 4:
                        case 5:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 13:
                          a[1] = (function (e) {
                            var t = {};
                            switch (
                              ((t.xclrType = e.read_shift(2)),
                              (t.nTintShade = e.read_shift(2)),
                              t.xclrType)
                            ) {
                              case 0:
                              case 4:
                                e.l += 4;
                                break;
                              case 1:
                                t.xclrValue = (function (e, t) {
                                  var r;
                                  return (r = e), void (r.l += 4);
                                })(e, 4);
                                break;
                              case 2:
                                t.xclrValue = ny(e, 4);
                                break;
                              case 3:
                                t.xclrValue = e.read_shift(4);
                            }
                            return (e.l += 8), t;
                          })(e, n);
                          break;
                        case 6:
                          a[1] = ((t = e), void (t.l += n));
                          break;
                        case 14:
                        case 15:
                          a[1] = e.read_shift(1 === n ? 1 : 2);
                          break;
                        default:
                          throw Error(
                            "Unrecognized ExtProp type: " + r + " " + n
                          );
                      }
                      return a;
                    })(e, r - e.l)
                  );
                return { ixfe: n, ext: s };
              },
              r: 12,
            },
            2174: { n: "AutoFilter12" },
            2175: { n: "ContinueFrt12" },
            2180: { n: "MDTInfo" },
            2181: { n: "MDXStr" },
            2182: { n: "MDXTuple" },
            2183: { n: "MDXSet" },
            2184: { n: "MDXProp" },
            2185: { n: "MDXKPI" },
            2186: { n: "MDB" },
            2187: { n: "PLV" },
            2188: { n: "Compat12", f: nE, r: 12 },
            2189: { n: "DXF" },
            2190: { n: "TableStyles", r: 12 },
            2191: { n: "TableStyle" },
            2192: { n: "TableStyleElement" },
            2194: { n: "StyleExt" },
            2195: { n: "NamePublish" },
            2196: {
              n: "NameCmt",
              f: function (e, t, r) {
                if (r.biff < 8) {
                  e.l += t;
                  return;
                }
                var n = e.read_shift(2),
                  a = e.read_shift(2);
                return [nx(e, n, r), nx(e, a, r)];
              },
              r: 12,
            },
            2197: { n: "SortData" },
            2198: {
              n: "Theme",
              f: function (e, t, r) {
                var n,
                  a = e.l + t;
                if (124226 !== e.read_shift(4)) {
                  if (!r.cellStyles || !H) {
                    e.l = a;
                    return;
                  }
                  var s = e.slice(e.l);
                  e.l = a;
                  try {
                    n = new H(s);
                  } catch (e) {
                    return;
                  }
                  var i = e$(n, "theme/theme/theme1.xml", !0);
                  if (i) return aY(i, r);
                }
              },
              r: 12,
            },
            2199: { n: "GUIDTypeLib" },
            2200: { n: "FnGrp12" },
            2201: { n: "NameFnGrp12" },
            2202: {
              n: "MTRSettings",
              f: function (e) {
                return [
                  0 !== e.read_shift(4),
                  0 !== e.read_shift(4),
                  e.read_shift(4),
                ];
              },
              r: 12,
            },
            2203: { n: "CompressPictures", f: nb },
            2204: { n: "HeaderFooter" },
            2205: { n: "CrtLayout12" },
            2206: { n: "CrtMlFrt" },
            2207: { n: "CrtMlFrtContinue" },
            2211: {
              n: "ForceFullCalculation",
              f: function (e) {
                var t,
                  r,
                  n,
                  a =
                    ((r = (t = e).read_shift(2)),
                    (n = t.read_shift(2)),
                    (t.l += 8),
                    { type: r, flags: n });
                if (2211 != a.type)
                  throw Error("Invalid Future Record " + a.type);
                return 0 !== e.read_shift(4);
              },
            },
            2212: { n: "ShapePropsStream" },
            2213: { n: "TextPropsStream" },
            2214: { n: "RichTextStream" },
            2215: { n: "CrtLayout12A" },
            4097: { n: "Units" },
            4098: { n: "Chart" },
            4099: { n: "Series" },
            4102: { n: "DataFormat" },
            4103: { n: "LineFormat" },
            4105: { n: "MarkerFormat" },
            4106: { n: "AreaFormat" },
            4107: { n: "PieFormat" },
            4108: { n: "AttachedLabel" },
            4109: { n: "SeriesText" },
            4116: { n: "ChartFormat" },
            4117: { n: "Legend" },
            4118: { n: "SeriesList" },
            4119: { n: "Bar" },
            4120: { n: "Line" },
            4121: { n: "Pie" },
            4122: { n: "Area" },
            4123: { n: "Scatter" },
            4124: { n: "CrtLine" },
            4125: { n: "Axis" },
            4126: { n: "Tick" },
            4127: { n: "ValueRange" },
            4128: { n: "CatSerRange" },
            4129: { n: "AxisLine" },
            4130: { n: "CrtLink" },
            4132: { n: "DefaultText" },
            4133: { n: "Text" },
            4134: { n: "FontX", f: nw },
            4135: { n: "ObjectLink" },
            4146: { n: "Frame" },
            4147: { n: "Begin" },
            4148: { n: "End" },
            4149: { n: "PlotArea" },
            4154: { n: "Chart3d" },
            4156: { n: "PicF" },
            4157: { n: "DropBar" },
            4158: { n: "Radar" },
            4159: { n: "Surf" },
            4160: { n: "RadarArea" },
            4161: { n: "AxisParent" },
            4163: { n: "LegendException" },
            4164: {
              n: "ShtProps",
              f: function (e, t, r) {
                var n = { area: !1 };
                if (5 != r.biff) return (e.l += t), n;
                var a = e.read_shift(1);
                return (e.l += 3), 16 & a && (n.area = !0), n;
              },
            },
            4165: { n: "SerToCrt" },
            4166: { n: "AxesUsed" },
            4168: { n: "SBaseRef" },
            4170: { n: "SerParent" },
            4171: { n: "SerAuxTrend" },
            4174: { n: "IFmtRecord" },
            4175: { n: "Pos" },
            4176: { n: "AlRuns" },
            4177: { n: "BRAI" },
            4187: { n: "SerAuxErrBar" },
            4188: {
              n: "ClrtClient",
              f: function (e) {
                for (var t = e.read_shift(2), r = []; t-- > 0; )
                  r.push(nR(e, 8));
                return r;
              },
            },
            4189: { n: "SerFmt" },
            4191: { n: "Chart3DBarShape" },
            4192: { n: "Fbi" },
            4193: { n: "BopPop" },
            4194: { n: "AxcExt" },
            4195: { n: "Dat" },
            4196: { n: "PlotGrowth" },
            4197: { n: "SIIndex" },
            4198: { n: "GelFrame" },
            4199: { n: "BopPopCustom" },
            4200: { n: "Fbi2" },
            0: { n: "Dimensions", f: nG },
            2: {
              n: "BIFF2INT",
              f: function (e) {
                var t = nF(e, 6);
                ++e.l;
                var r = e.read_shift(2);
                return (t.t = "n"), (t.val = r), t;
              },
            },
            5: { n: "BoolErr", f: nj },
            7: {
              n: "String",
              f: function (e) {
                var t = e.read_shift(1);
                return 0 === t ? (e.l++, "") : e.read_shift(t, "sbcs-cont");
              },
            },
            8: { n: "BIFF2ROW" },
            11: { n: "Index" },
            22: { n: "ExternCount", f: nw },
            30: { n: "BIFF2FORMAT", f: nk },
            31: { n: "BIFF2FMTCNT" },
            32: { n: "BIFF2COLINFO" },
            33: { n: "Array", f: nZ },
            37: { n: "DefaultRowHeight", f: nX },
            50: {
              n: "BIFF2FONTXTRA",
              f: function (e, t) {
                (e.l += 6),
                  (e.l += 2),
                  (e.l += 1),
                  (e.l += 3),
                  (e.l += 1),
                  (e.l += t - 13);
              },
            },
            52: { n: "DDEObjName" },
            62: { n: "BIFF2WINDOW2" },
            67: { n: "BIFF2XF" },
            69: { n: "BIFF2FONTCLR" },
            86: { n: "BIFF4FMTCNT" },
            126: { n: "RK" },
            127: {
              n: "ImData",
              f: function (e) {
                var t = e.read_shift(2),
                  r = e.read_shift(2),
                  n = e.read_shift(4),
                  a = { fmt: t, env: r, len: n, data: e.slice(e.l, e.l + n) };
                return (e.l += n), a;
              },
            },
            135: { n: "Addin" },
            136: { n: "Edg" },
            137: { n: "Pub" },
            145: { n: "Sub" },
            148: { n: "LHRecord" },
            149: { n: "LHNGraph" },
            150: { n: "Sound" },
            169: { n: "CoordList" },
            171: { n: "GCW" },
            188: { n: "ShrFmla" },
            191: { n: "ToolbarHdr" },
            192: { n: "ToolbarEnd" },
            194: { n: "AddMenu" },
            195: { n: "DelMenu" },
            214: {
              n: "RString",
              f: function (e, t, r) {
                var n = e.l + t,
                  a = nF(e, 6),
                  s = e.read_shift(2),
                  i = nx(e, s, r);
                return (e.l = n), (a.t = "str"), (a.val = i), a;
              },
            },
            223: { n: "UDDesc" },
            234: { n: "TabIdConf" },
            354: { n: "XL5Modify" },
            421: { n: "FileSharing2" },
            521: { n: "BOF", f: nW },
            536: { n: "Lbl", f: nQ },
            547: { n: "ExternName", f: nK },
            561: { n: "Font" },
            579: { n: "BIFF3XF" },
            1033: { n: "BOF", f: nW },
            1091: { n: "BIFF4XF" },
            2157: { n: "FeatInfo" },
            2163: { n: "FeatInfo11" },
            2177: { n: "SXAddl12" },
            2240: { n: "AutoWebPub" },
            2241: { n: "ListObj" },
            2242: { n: "ListField" },
            2243: { n: "ListDV" },
            2244: { n: "ListCondFmt" },
            2245: { n: "ListCF" },
            2246: { n: "FMQry" },
            2247: { n: "FMSQry" },
            2248: { n: "PLV" },
            2249: { n: "LnExt" },
            2250: { n: "MkrExt" },
            2251: { n: "CrtCoopt" },
            2262: { n: "FRTArchId$", r: 12 },
            29282: {},
          },
          iS = ex(iE, "n");
        function iw(e, t, r, n) {
          var a = +t || +iS[t];
          if (!isNaN(a)) {
            var s = n || (r || []).length || 0,
              i = e.next(4);
            i.write_shift(2, a),
              i.write_shift(2, s),
              s > 0 && tU(r) && e.push(r);
          }
        }
        function iC(e, t, r) {
          return (
            e || (e = t1(7)),
            e.write_shift(2, t),
            e.write_shift(2, r),
            e.write_shift(2, 0),
            e.write_shift(1, 0),
            e
          );
        }
        function iB(e, t) {
          var r = t || {};
          switch (r.biff || 2) {
            case 8:
            case 5:
              return (function (e, t) {
                var r = t || {},
                  n = [];
                e && !e.SSF && (e.SSF = ev.get_table()),
                  e &&
                    e.SSF &&
                    (eb(ev),
                    ev.load_table(e.SSF),
                    (r.revssf = ek(e.SSF)),
                    (r.revssf[e.SSF[65535]] = 0),
                    (r.ssf = e.SSF)),
                  (r.Strings = []),
                  (r.Strings.Count = 0),
                  (r.Strings.Unique = 0),
                  iG(r),
                  (r.cellXfs = []),
                  sF(r.cellXfs, {}, { revssf: { General: 0 } }),
                  e.Props || (e.Props = {});
                for (var a = 0; a < e.SheetNames.length; ++a)
                  n[n.length] = (function (e, t, r) {
                    var n,
                      a,
                      s,
                      i,
                      o,
                      c,
                      l,
                      f,
                      h,
                      u = t2(),
                      d = r.SheetNames[e],
                      p = r.Sheets[d] || {},
                      m = (r || {}).Workbook || {},
                      g = (m.Sheets || [])[e] || {},
                      v = Array.isArray(p),
                      b = 8 == t.biff,
                      E = "",
                      S = [],
                      w = ri(p["!ref"] || "A1"),
                      C = b ? 65536 : 16384;
                    if (w.e.c > 255 || w.e.r >= C) {
                      if (t.WTF)
                        throw Error(
                          "Range " +
                            (p["!ref"] || "A1") +
                            " exceeds format limit A1:IV16384"
                        );
                      (w.e.c = Math.min(w.e.c, 255)),
                        (w.e.r = Math.min(w.e.c, C - 1));
                    }
                    iw(u, 2057, nV(r, 16, t)),
                      iw(u, "CalcMode", nC(1)),
                      iw(u, "CalcCount", nC(100)),
                      iw(u, "CalcRefMode", nS(!0)),
                      iw(u, "CalcIter", nS(!1)),
                      iw(u, "CalcDelta", rk(0.001)),
                      iw(u, "CalcSaveRecalc", nS(!0)),
                      iw(u, "PrintRowCol", nS(!1)),
                      iw(u, "PrintGrid", nS(!1)),
                      iw(u, "GridSet", nC(1)),
                      iw(
                        u,
                        "Guts",
                        ((n = [0, 0]),
                        (a = t1(8)).write_shift(4, 0),
                        a.write_shift(2, n[0] ? n[0] + 1 : 0),
                        a.write_shift(2, n[1] ? n[1] + 1 : 0),
                        a)
                      ),
                      iw(u, "HCenter", nS(!1)),
                      iw(u, "VCenter", nS(!1)),
                      b &&
                        (function (e, t, r) {
                          if (t) {
                            var n = 0;
                            t.forEach(function (t, r) {
                              if (++n <= 256 && t) {
                                var a, s, i;
                                iw(
                                  e,
                                  "ColInfo",
                                  ((a = sy(r, t)),
                                  (s = t1(12)).write_shift(2, r),
                                  s.write_shift(2, r),
                                  s.write_shift(2, 256 * a.width),
                                  s.write_shift(2, 0),
                                  (i = 0),
                                  a.hidden && (i |= 1),
                                  s.write_shift(1, i),
                                  (i = a.level || 0),
                                  s.write_shift(1, i),
                                  s.write_shift(2, 0),
                                  s)
                                );
                              }
                            });
                          }
                        })(u, p["!cols"], 0),
                      iw(
                        u,
                        512,
                        ((i = t1(
                          2 * (s = 8 != t.biff && t.biff ? 2 : 4) + 6
                        )).write_shift(s, w.s.r),
                        i.write_shift(s, w.e.r + 1),
                        i.write_shift(2, w.s.c),
                        i.write_shift(2, w.e.c + 1),
                        i.write_shift(2, 0),
                        i)
                      ),
                      b && (p["!links"] = []);
                    for (var B = w.s.r; B <= w.e.r; ++B) {
                      E = t9(B);
                      for (var T = w.s.c; T <= w.e.c; ++T) {
                        B === w.s.r && (S[T] = rt(T)), (h = S[T] + E);
                        var x = v ? (p[B] || [])[T] : p[h];
                        x &&
                          (!(function (e, t, r, n, a) {
                            var s = 16 + sF(a.cellXfs, t, a);
                            if (null == t.v && !t.bf) {
                              iw(e, "Blank", nD(r, n, s));
                              return;
                            }
                            if (t.bf)
                              iw(
                                e,
                                "Formula",
                                (function (e, t, r, n, a) {
                                  var s = nD(t, r, a),
                                    i = (function (e) {
                                      if (null == e) {
                                        var t = t1(8);
                                        return (
                                          t.write_shift(1, 3),
                                          t.write_shift(1, 0),
                                          t.write_shift(2, 0),
                                          t.write_shift(2, 0),
                                          t.write_shift(2, 65535),
                                          t
                                        );
                                      }
                                      return "number" == typeof e
                                        ? rk(e)
                                        : rk(0);
                                    })(e.v),
                                    o = t1(6);
                                  o.write_shift(2, 33), o.write_shift(4, 0);
                                  for (
                                    var c = t1(e.bf.length), l = 0;
                                    l < e.bf.length;
                                    ++l
                                  )
                                    c[l] = e.bf[l];
                                  return ep([s, i, o, c]);
                                })(t, r, n, 0, s)
                              );
                            else
                              switch (t.t) {
                                case "d":
                                case "n":
                                  var i,
                                    o = "d" == t.t ? eI(eN(t.v)) : t.v;
                                  iw(
                                    e,
                                    "Number",
                                    (nD(r, n, s, (i = t1(14))), rk(o, i), i)
                                  );
                                  break;
                                case "b":
                                case "e":
                                  iw(
                                    e,
                                    517,
                                    ((c = t.v),
                                    (l = t.t),
                                    nD(r, n, s, (f = t1(8))),
                                    (h = f) || (h = t1(2)),
                                    h.write_shift(1, +c),
                                    h.write_shift(1, "e" == l ? 1 : 0),
                                    f)
                                  );
                                  break;
                                case "s":
                                case "str":
                                  if (a.bookSST) {
                                    var c,
                                      l,
                                      f,
                                      h,
                                      u,
                                      d,
                                      p,
                                      m,
                                      g = sI(a.Strings, t.v, a.revStrings);
                                    iw(
                                      e,
                                      "LabelSst",
                                      (nD(r, n, s, (m = t1(10))),
                                      m.write_shift(4, g),
                                      m)
                                    );
                                  } else
                                    iw(
                                      e,
                                      "Label",
                                      ((u = t.v),
                                      nD(
                                        r,
                                        n,
                                        s,
                                        (p = t1(
                                          8 +
                                            +(d = !a || 8 == a.biff) +
                                            (1 + d) * u.length
                                        ))
                                      ),
                                      p.write_shift(2, u.length),
                                      d && p.write_shift(1, 1),
                                      p.write_shift(
                                        (1 + d) * u.length,
                                        u,
                                        d ? "utf16le" : "sbcs"
                                      ),
                                      p)
                                    );
                                  break;
                                default:
                                  iw(e, "Blank", nD(r, n, s));
                              }
                          })(u, x, B, T, t),
                          b && x.l && p["!links"].push([h, x.l]));
                      }
                    }
                    var _ = g.CodeName || g.name || d;
                    return (
                      b &&
                        iw(
                          u,
                          "Window2",
                          ((o = (m.Views || [])[0]),
                          (c = t1(18)),
                          (l = 1718),
                          o && o.RTL && (l |= 64),
                          c.write_shift(2, l),
                          c.write_shift(4, 0),
                          c.write_shift(4, 64),
                          c.write_shift(4, 0),
                          c.write_shift(4, 0),
                          c)
                        ),
                      b &&
                        (p["!merges"] || []).length &&
                        iw(
                          u,
                          "MergeCells",
                          (function (e) {
                            var t = t1(2 + 8 * e.length);
                            t.write_shift(2, e.length);
                            for (var r = 0; r < e.length; ++r) nN(e[r], t);
                            return t;
                          })(p["!merges"])
                        ),
                      b &&
                        (function (e, t) {
                          for (var r = 0; r < t["!links"].length; ++r) {
                            var n = t["!links"][r];
                            iw(
                              e,
                              "HLink",
                              (function (e) {
                                var t = t1(24),
                                  r = rr(e[0]);
                                t.write_shift(2, r.r),
                                  t.write_shift(2, r.r),
                                  t.write_shift(2, r.c),
                                  t.write_shift(2, r.c);
                                for (
                                  var n =
                                      "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(
                                        " "
                                      ),
                                    a = 0;
                                  a < 16;
                                  ++a
                                )
                                  t.write_shift(1, parseInt(n[a], 16));
                                return ep([
                                  t,
                                  (function (e) {
                                    var t = t1(512),
                                      r = 0,
                                      n = e.Target,
                                      a = n.indexOf("#") > -1 ? 31 : 23;
                                    switch (n.charAt(0)) {
                                      case "#":
                                        a = 28;
                                        break;
                                      case ".":
                                        a &= -3;
                                    }
                                    t.write_shift(4, 2), t.write_shift(4, a);
                                    var s = [8, 6815827, 6619237, 4849780, 83];
                                    for (r = 0; r < s.length; ++r)
                                      t.write_shift(4, s[r]);
                                    if (28 == a) {
                                      for (
                                        n = n.slice(1),
                                          t.write_shift(4, n.length + 1),
                                          r = 0;
                                        r < n.length;
                                        ++r
                                      )
                                        t.write_shift(2, n.charCodeAt(r));
                                      t.write_shift(2, 0);
                                    } else if (2 & a) {
                                      for (
                                        r = 0,
                                          s =
                                            "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(
                                              " "
                                            );
                                        r < s.length;
                                        ++r
                                      )
                                        t.write_shift(1, parseInt(s[r], 16));
                                      for (
                                        t.write_shift(4, 2 * (n.length + 1)),
                                          r = 0;
                                        r < n.length;
                                        ++r
                                      )
                                        t.write_shift(2, n.charCodeAt(r));
                                      t.write_shift(2, 0);
                                    } else {
                                      for (
                                        r = 0,
                                          s =
                                            "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(
                                              " "
                                            );
                                        r < s.length;
                                        ++r
                                      )
                                        t.write_shift(1, parseInt(s[r], 16));
                                      for (
                                        var i = 0;
                                        "../" == n.slice(3 * i, 3 * i + 3) ||
                                        "..\\" == n.slice(3 * i, 3 * i + 3);
                                      )
                                        ++i;
                                      for (
                                        t.write_shift(2, i),
                                          t.write_shift(4, n.length + 1),
                                          r = 0;
                                        r < n.length;
                                        ++r
                                      )
                                        t.write_shift(1, 255 & n.charCodeAt(r));
                                      for (
                                        t.write_shift(1, 0),
                                          t.write_shift(2, 65535),
                                          t.write_shift(2, 57005),
                                          r = 0;
                                        r < 6;
                                        ++r
                                      )
                                        t.write_shift(4, 0);
                                    }
                                    return t.slice(0, t.l);
                                  })(e[1]),
                                ]);
                              })(n)
                            ),
                              n[1].Tooltip &&
                                iw(
                                  e,
                                  "HLinkTooltip",
                                  (function (e) {
                                    var t = e[1].Tooltip,
                                      r = t1(10 + 2 * (t.length + 1));
                                    r.write_shift(2, 2048);
                                    var n = rr(e[0]);
                                    r.write_shift(2, n.r),
                                      r.write_shift(2, n.r),
                                      r.write_shift(2, n.c),
                                      r.write_shift(2, n.c);
                                    for (var a = 0; a < t.length; ++a)
                                      r.write_shift(2, t.charCodeAt(a));
                                    return r.write_shift(2, 0), r;
                                  })(n)
                                );
                          }
                          delete t["!links"];
                        })(u, p),
                      iw(u, "CodeName", nA(_, t)),
                      b &&
                        ((f = t1(19)).write_shift(4, 2151),
                        f.write_shift(4, 0),
                        f.write_shift(4, 0),
                        f.write_shift(2, 3),
                        f.write_shift(1, 1),
                        f.write_shift(4, 0),
                        iw(u, "FeatHdr", f),
                        (f = t1(39)).write_shift(4, 2152),
                        f.write_shift(4, 0),
                        f.write_shift(4, 0),
                        f.write_shift(2, 3),
                        f.write_shift(1, 0),
                        f.write_shift(4, 0),
                        f.write_shift(2, 1),
                        f.write_shift(4, 4),
                        f.write_shift(2, 0),
                        nN(ri(p["!ref"] || "A1"), f),
                        f.write_shift(4, 4),
                        iw(u, "Feat", f)),
                      iw(u, "EOF"),
                      u.end()
                    );
                  })(a, r, e);
                return (
                  n.unshift(
                    (function (e, t, r) {
                      var n,
                        a,
                        s,
                        i,
                        o,
                        c,
                        l,
                        f = t2(),
                        h = (e || {}).Workbook || {},
                        u = h.Sheets || [],
                        d = h.WBProps || {},
                        p = 8 == r.biff,
                        m = 5 == r.biff;
                      iw(f, 2057, nV(e, 5, r)),
                        "xla" == r.bookType && iw(f, "Addin"),
                        iw(f, "InterfaceHdr", p ? nC(1200) : null),
                        iw(
                          f,
                          "Mms",
                          (function (e, t) {
                            t || (t = t1(e));
                            for (var r = 0; r < e; ++r) t.write_shift(1, 0);
                            return t;
                          })(2)
                        ),
                        m && iw(f, "ToolbarHdr"),
                        m && iw(f, "ToolbarEnd"),
                        iw(f, "InterfaceEnd"),
                        iw(
                          f,
                          "WriteAccess",
                          (function (e, t) {
                            var r = !t || 8 == t.biff,
                              n = t1(r ? 112 : 54);
                            for (
                              n.write_shift(8 == t.biff ? 2 : 1, 7),
                                r && n.write_shift(1, 0),
                                n.write_shift(4, 859007059),
                                n.write_shift(4, 5458548 | (r ? 0 : 536870912));
                              n.l < n.length;
                            )
                              n.write_shift(1, r ? 0 : 32);
                            return n;
                          })(0, r)
                        ),
                        iw(f, "CodePage", nC(p ? 1200 : 1252)),
                        p && iw(f, "DSF", nC(0)),
                        p && iw(f, "Excel9File"),
                        iw(
                          f,
                          "RRTabId",
                          (function (e) {
                            for (var t = t1(2 * e), r = 0; r < e; ++r)
                              t.write_shift(2, r + 1);
                            return t;
                          })(e.SheetNames.length)
                        ),
                        p && e.vbaraw && iw(f, "ObProj"),
                        p &&
                          e.vbaraw &&
                          iw(
                            f,
                            "CodeName",
                            nA(d.CodeName || "ThisWorkbook", r)
                          ),
                        iw(f, "BuiltInFnGroupCount", nC(17)),
                        iw(f, "WinProtect", nS(!1)),
                        iw(f, "Protect", nS(!1)),
                        iw(f, "Password", nC(0)),
                        p && iw(f, "Prot4Rev", nS(!1)),
                        p && iw(f, "Prot4RevPass", nC(0)),
                        iw(
                          f,
                          "Window1",
                          ((n = t1(18)).write_shift(2, 0),
                          n.write_shift(2, 0),
                          n.write_shift(2, 29280),
                          n.write_shift(2, 17600),
                          n.write_shift(2, 56),
                          n.write_shift(2, 0),
                          n.write_shift(2, 0),
                          n.write_shift(2, 1),
                          n.write_shift(2, 500),
                          n)
                        ),
                        iw(f, "Backup", nS(!1)),
                        iw(f, "HideObj", nC(0)),
                        iw(
                          f,
                          "Date1904",
                          nS(
                            "true" ==
                              (e.Workbook &&
                              e.Workbook.WBProps &&
                              ta(e.Workbook.WBProps.date1904)
                                ? "true"
                                : "false")
                          )
                        ),
                        iw(f, "CalcPrecision", nS(!0)),
                        p && iw(f, "RefreshAll", nS(!1)),
                        iw(f, "BookBool", nC(0)),
                        iw(
                          f,
                          "Font",
                          ((s =
                            (a = {
                              sz: 12,
                              color: { theme: 1 },
                              name: "Arial",
                              family: 2,
                              scheme: "minor",
                            }).name || "Arial"),
                          (o = t1(
                            (i = r && 5 == r.biff)
                              ? 15 + s.length
                              : 16 + 2 * s.length
                          )).write_shift(2, 20 * (a.sz || 12)),
                          o.write_shift(4, 0),
                          o.write_shift(2, 400),
                          o.write_shift(4, 0),
                          o.write_shift(2, 0),
                          o.write_shift(1, s.length),
                          i || o.write_shift(1, 1),
                          o.write_shift(
                            (i ? 1 : 2) * s.length,
                            s,
                            i ? "sbcs" : "utf16le"
                          ),
                          o)
                        ),
                        (c = e.SSF) &&
                          [
                            [5, 8],
                            [23, 26],
                            [41, 44],
                            [50, 392],
                          ].forEach(function (e) {
                            for (var t = e[0]; t <= e[1]; ++t)
                              null != c[t] &&
                                iw(
                                  f,
                                  "Format",
                                  (function (e, t, r, n) {
                                    var a = r && 5 == r.biff;
                                    n ||
                                      (n = t1(
                                        a ? 3 + t.length : 5 + 2 * t.length
                                      )),
                                      n.write_shift(2, e),
                                      n.write_shift(a ? 1 : 2, t.length),
                                      a || n.write_shift(1, 1),
                                      n.write_shift(
                                        (a ? 1 : 2) * t.length,
                                        t,
                                        a ? "sbcs" : "utf16le"
                                      );
                                    var s =
                                      n.length > n.l ? n.slice(0, n.l) : n;
                                    return null == s.l && (s.l = s.length), s;
                                  })(t, c[t], r)
                                );
                          }),
                        (function (e, t) {
                          for (var r = 0; r < 16; ++r)
                            iw(e, "XF", nz({ numFmtId: 0, style: !0 }, 0, t));
                          t.cellXfs.forEach(function (r) {
                            iw(e, "XF", nz(r, 0, t));
                          });
                        })(f, r),
                        p && iw(f, "UsesELFs", nS(!1));
                      var g = f.end(),
                        v = t2();
                      p &&
                        iw(
                          v,
                          "Country",
                          (l || (l = t1(4)),
                          l.write_shift(2, 1),
                          l.write_shift(2, 1),
                          l)
                        ),
                        p &&
                          r.Strings &&
                          (function (e, t, r, n) {
                            var a = (r || []).length || 0;
                            if (a <= 8224) return iw(e, t, r, a);
                            var s = +t || +iS[t];
                            if (!isNaN(s)) {
                              for (
                                var i = r.parts || [], o = 0, c = 0, l = 0;
                                l + (i[o] || 8224) <= 8224;
                              )
                                (l += i[o] || 8224), o++;
                              var f = e.next(4);
                              for (
                                f.write_shift(2, s),
                                  f.write_shift(2, l),
                                  e.push(r.slice(c, c + l)),
                                  c += l;
                                c < a;
                              ) {
                                for (
                                  (f = e.next(4)).write_shift(2, 60), l = 0;
                                  l + (i[o] || 8224) <= 8224;
                                )
                                  (l += i[o] || 8224), o++;
                                f.write_shift(2, l),
                                  e.push(r.slice(c, c + l)),
                                  (c += l);
                              }
                            }
                          })(
                            v,
                            "SST",
                            (function (e, t) {
                              var r = t1(8);
                              r.write_shift(4, e.Count),
                                r.write_shift(4, e.Unique);
                              for (var n = [], a = 0; a < e.length; ++a)
                                n[a] = (function (e) {
                                  var t = e.t || "",
                                    r = t1(3);
                                  r.write_shift(2, t.length),
                                    r.write_shift(1, 1);
                                  var n = t1(2 * t.length);
                                  return (
                                    n.write_shift(2 * t.length, t, "utf16le"),
                                    ep([r, n])
                                  );
                                })(e[a], t);
                              var s = ep([r].concat(n));
                              return (
                                (s.parts = [r.length].concat(
                                  n.map(function (e) {
                                    return e.length;
                                  })
                                )),
                                s
                              );
                            })(r.Strings, r)
                          ),
                        iw(v, "EOF");
                      var b = v.end(),
                        E = t2(),
                        S = 0,
                        w = 0;
                      for (w = 0; w < e.SheetNames.length; ++w)
                        S +=
                          (p ? 12 : 11) + (p ? 2 : 1) * e.SheetNames[w].length;
                      var C = g.length + S + b.length;
                      for (w = 0; w < e.SheetNames.length; ++w)
                        iw(
                          E,
                          "BoundSheet8",
                          (function (e, t) {
                            var r = !t || t.biff >= 8 ? 2 : 1,
                              n = t1(8 + r * e.name.length);
                            n.write_shift(4, e.pos),
                              n.write_shift(1, e.hs || 0),
                              n.write_shift(1, e.dt),
                              n.write_shift(1, e.name.length),
                              t.biff >= 8 && n.write_shift(1, 1),
                              n.write_shift(
                                r * e.name.length,
                                e.name,
                                t.biff < 8 ? "sbcs" : "utf16le"
                              );
                            var a = n.slice(0, n.l);
                            return (a.l = n.l), a;
                          })(
                            {
                              pos: C,
                              hs: (u[w] || {}).Hidden || 0,
                              dt: 0,
                              name: e.SheetNames[w],
                            },
                            r
                          )
                        ),
                          (C += t[w].length);
                      var B = E.end();
                      if (S != B.length)
                        throw Error("BS8 " + S + " != " + B.length);
                      var T = [];
                      return (
                        g.length && T.push(g),
                        B.length && T.push(B),
                        b.length && T.push(b),
                        tB([T])
                      );
                    })(e, n, r)
                  ),
                  tB([n])
                );
              })(e, t);
            case 4:
            case 3:
            case 2:
              return (function (e, t) {
                for (
                  var r = t || {}, n = t2(), a = 0, s = 0;
                  s < e.SheetNames.length;
                  ++s
                )
                  e.SheetNames[s] == r.sheet && (a = s);
                if (0 == a && r.sheet && e.SheetNames[0] != r.sheet)
                  throw Error("Sheet not found: " + r.sheet);
                return (
                  iw(n, 9, nV(e, 16, r)),
                  !(function (e, t, r, n) {
                    var a,
                      s = Array.isArray(t),
                      i = ri(t["!ref"] || "A1"),
                      o = "",
                      c = [];
                    if (i.e.c > 255 || i.e.r > 16383) {
                      if (n.WTF)
                        throw Error(
                          "Range " +
                            (t["!ref"] || "A1") +
                            " exceeds format limit A1:IV16384"
                        );
                      (i.e.c = Math.min(i.e.c, 255)),
                        (i.e.r = Math.min(i.e.c, 16383)),
                        (a = rs(i));
                    }
                    for (var l = i.s.r; l <= i.e.r; ++l) {
                      o = t9(l);
                      for (var f = i.s.c; f <= i.e.c; ++f) {
                        l === i.s.r && (c[f] = rt(f)), (a = c[f] + o);
                        var h = s ? (t[l] || [])[f] : t[a];
                        h &&
                          (function (e, t, r, n) {
                            if (null != t.v)
                              switch (t.t) {
                                case "d":
                                case "n":
                                  var a,
                                    s,
                                    i,
                                    o,
                                    c,
                                    l,
                                    f,
                                    h = "d" == t.t ? eI(eN(t.v)) : t.v;
                                  h == (0 | h) && h >= 0 && h < 65536
                                    ? iw(
                                        e,
                                        2,
                                        (iC((l = t1(9)), r, n),
                                        l.write_shift(2, h),
                                        l)
                                      )
                                    : iw(
                                        e,
                                        3,
                                        (iC((f = t1(15)), r, n),
                                        f.write_shift(8, h, "f"),
                                        f)
                                      );
                                  return;
                                case "b":
                                case "e":
                                  iw(
                                    e,
                                    5,
                                    ((a = t.v),
                                    (s = t.t),
                                    iC((i = t1(9)), r, n),
                                    "e" == s
                                      ? (i.write_shift(1, a),
                                        i.write_shift(1, 1))
                                      : (i.write_shift(1, a ? 1 : 0),
                                        i.write_shift(1, 0)),
                                    i)
                                  );
                                  return;
                                case "s":
                                case "str":
                                  iw(
                                    e,
                                    4,
                                    (iC(
                                      (c = t1(8 + 2 * (o = t.v).length)),
                                      r,
                                      n
                                    ),
                                    c.write_shift(1, o.length),
                                    c.write_shift(o.length, o, "sbcs"),
                                    c.l < c.length ? c.slice(0, c.l) : c)
                                  );
                                  return;
                              }
                            iw(e, 1, iC(null, r, n));
                          })(e, h, l, f, n);
                      }
                    }
                  })(n, e.Sheets[e.SheetNames[a]], 0, r, e),
                  iw(n, 10),
                  n.end()
                );
              })(e, t);
          }
          throw Error("invalid type " + r.bookType + " for BIFF");
        }
        var iT = (function () {
          function e(e, t) {
            var r = t || {},
              n = r.dense ? [] : {},
              a = (e = e.replace(/<!--.*?-->/g, "")).match(/<table/i);
            if (!a) throw Error("Invalid HTML: could not find <table>");
            var s = e.match(/<\/table/i),
              i = a.index,
              o = (s && s.index) || e.length,
              c = (function (e, t, r) {
                if (eV || "string" == typeof t) return e.split(t);
                for (var n = e.split(t), a = [n[0]], s = 1; s < n.length; ++s)
                  a.push(r), a.push(n[s]);
                return a;
              })(e.slice(i, o), /(:?<tr[^>]*>)/i, "<tr>"),
              l = -1,
              f = 0,
              h = 0,
              u = 0,
              d = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } },
              p = [];
            for (i = 0; i < c.length; ++i) {
              var m = c[i].trim(),
                g = m.slice(0, 3).toLowerCase();
              if ("<tr" == g) {
                if ((++l, r.sheetRows && r.sheetRows <= l)) {
                  --l;
                  break;
                }
                f = 0;
                continue;
              }
              if ("<td" == g || "<th" == g) {
                var v = m.split(/<\/t[dh]>/i);
                for (o = 0; o < v.length; ++o) {
                  var b = v[o].trim();
                  if (b.match(/<t[dh]/i)) {
                    for (
                      var E = b, S = 0;
                      "<" == E.charAt(0) && (S = E.indexOf(">")) > -1;
                    )
                      E = E.slice(S + 1);
                    for (var w = 0; w < p.length; ++w) {
                      var C = p[w];
                      C.s.c == f &&
                        C.s.r < l &&
                        l <= C.e.r &&
                        ((f = C.e.c + 1), (w = -1));
                    }
                    var B = e2(b.slice(0, b.indexOf(">")));
                    (u = B.colspan ? +B.colspan : 1),
                      ((h = +B.rowspan) > 1 || u > 1) &&
                        p.push({
                          s: { r: l, c: f },
                          e: { r: l + (h || 1) - 1, c: f + u - 1 },
                        });
                    var T = B.t || "";
                    if (!E.length) {
                      f += u;
                      continue;
                    }
                    if (
                      ((E = th(E)),
                      d.s.r > l && (d.s.r = l),
                      d.e.r < l && (d.e.r = l),
                      d.s.c > f && (d.s.c = f),
                      d.e.c < f && (d.e.c = f),
                      E.length)
                    ) {
                      var x = { t: "s", v: E };
                      !r.raw &&
                        E.trim().length &&
                        "s" != T &&
                        ("TRUE" === E
                          ? (x = { t: "b", v: !0 })
                          : "FALSE" === E
                            ? (x = { t: "b", v: !1 })
                            : isNaN(eH(E))
                              ? isNaN(eW(E).getDate()) ||
                                ((x = { t: "d", v: eN(E) }),
                                r.cellDates || (x = { t: "n", v: eI(x.v) }),
                                (x.z = r.dateNF || ev._table[14]))
                              : (x = { t: "n", v: eH(E) })),
                        r.dense
                          ? (n[l] || (n[l] = []), (n[l][f] = x))
                          : (n[rn({ r: l, c: f })] = x),
                        (f += u);
                    }
                  }
                }
              }
            }
            return (n["!ref"] = rs(d)), p.length && (n["!merges"] = p), n;
          }
          function t(e, t, r, n) {
            for (
              var a = e["!merges"] || [], s = [], i = t.s.c;
              i <= t.e.c;
              ++i
            ) {
              for (var o = 0, c = 0, l = 0; l < a.length; ++l)
                if (
                  !(a[l].s.r > r) &&
                  !(a[l].s.c > i) &&
                  !(a[l].e.r < r) &&
                  !(a[l].e.c < i)
                ) {
                  if (a[l].s.r < r || a[l].s.c < i) {
                    o = -1;
                    break;
                  }
                  (o = a[l].e.r - a[l].s.r + 1), (c = a[l].e.c - a[l].s.c + 1);
                  break;
                }
              if (!(o < 0)) {
                var f = rn({ r: r, c: i }),
                  h = n.dense ? (e[r] || [])[i] : e[f],
                  u =
                    (h &&
                      null != h.v &&
                      (h.h || tr(h.w || (rc(h), h.w) || ""))) ||
                    "",
                  d = {};
                o > 1 && (d.rowspan = o),
                  c > 1 && (d.colspan = c),
                  (d.t = (h && h.t) || "z"),
                  n.editable &&
                    (u = '<span contenteditable="true">' + u + "</span>"),
                  (d.id = (n.id || "sjs") + "-" + f),
                  "z" != d.t && ((d.v = h.v), null != h.z && (d.z = h.z)),
                  s.push(tE("td", u, d));
              }
            }
            return "<tr>" + s.join("") + "</tr>";
          }
          function r(e, t, r) {
            return "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
          }
          var n =
              '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
            a = "</body></html>";
          return {
            to_workbook: function (t, r) {
              return rl(e(t, r), r);
            },
            to_sheet: e,
            _row: t,
            BEGIN: n,
            END: a,
            _preamble: r,
            from_sheet: function (e, s) {
              var i = s || {},
                o = null != i.header ? i.header : n,
                c = null != i.footer ? i.footer : a,
                l = [o],
                f = ra(e["!ref"]);
              (i.dense = Array.isArray(e)), l.push(r(e, f, i));
              for (var h = f.s.r; h <= f.e.r; ++h) l.push(t(e, f, h, i));
              return l.push("</table>" + c), l.join("");
            },
          };
        })();
        function ix(e, t, r) {
          var n = r || {},
            a = 0,
            s = 0;
          if (null != n.origin) {
            if ("number" == typeof n.origin) a = n.origin;
            else {
              var i = "string" == typeof n.origin ? rr(n.origin) : n.origin;
              (a = i.r), (s = i.c);
            }
          }
          var o = t.getElementsByTagName("tr"),
            c = Math.min(n.sheetRows || 1e7, o.length),
            l = { s: { r: 0, c: 0 }, e: { r: a, c: s } };
          if (e["!ref"]) {
            var f = ra(e["!ref"]);
            (l.s.r = Math.min(l.s.r, f.s.r)),
              (l.s.c = Math.min(l.s.c, f.s.c)),
              (l.e.r = Math.max(l.e.r, f.e.r)),
              (l.e.c = Math.max(l.e.c, f.e.c)),
              -1 == a && (l.e.r = a = f.e.r + 1);
          }
          var h = [],
            u = 0,
            d = e["!rows"] || (e["!rows"] = []),
            p = 0,
            m = 0,
            g = 0,
            v = 0,
            b = 0,
            E = 0;
          for (e["!cols"] || (e["!cols"] = []); p < o.length && m < c; ++p) {
            var S = o[p];
            if (ik(S)) {
              if (n.display) continue;
              d[m] = { hidden: !0 };
            }
            var w = S.children;
            for (g = v = 0; g < w.length; ++g) {
              var C = w[g];
              if (!(n.display && ik(C))) {
                var B = C.hasAttribute("v")
                    ? C.getAttribute("v")
                    : th(C.innerHTML),
                  T = C.getAttribute("z");
                for (u = 0; u < h.length; ++u) {
                  var x = h[u];
                  x.s.c == v + s &&
                    x.s.r < m + a &&
                    m + a <= x.e.r &&
                    ((v = x.e.c + 1 - s), (u = -1));
                }
                (E = +C.getAttribute("colspan") || 1),
                  ((b = +C.getAttribute("rowspan") || 1) > 1 || E > 1) &&
                    h.push({
                      s: { r: m + a, c: v + s },
                      e: { r: m + a + (b || 1) - 1, c: v + s + (E || 1) - 1 },
                    });
                var _ = { t: "s", v: B },
                  k = C.getAttribute("t") || "";
                null != B &&
                  (0 == B.length
                    ? (_.t = k || "z")
                    : n.raw ||
                      0 == B.trim().length ||
                      "s" == k ||
                      ("TRUE" === B
                        ? (_ = { t: "b", v: !0 })
                        : "FALSE" === B
                          ? (_ = { t: "b", v: !1 })
                          : isNaN(eH(B))
                            ? isNaN(eW(B).getDate()) ||
                              ((_ = { t: "d", v: eN(B) }),
                              n.cellDates || (_ = { t: "n", v: eI(_.v) }),
                              (_.z = n.dateNF || ev._table[14]))
                            : (_ = { t: "n", v: eH(B) }))),
                  void 0 === _.z && null != T && (_.z = T),
                  n.dense
                    ? (e[m + a] || (e[m + a] = []), (e[m + a][v + s] = _))
                    : (e[rn({ c: v + s, r: m + a })] = _),
                  l.e.c < v + s && (l.e.c = v + s),
                  (v += E);
              }
            }
            ++m;
          }
          return (
            h.length && (e["!merges"] = (e["!merges"] || []).concat(h)),
            (l.e.r = Math.max(l.e.r, m - 1 + a)),
            (e["!ref"] = rs(l)),
            m >= c &&
              (e["!fullref"] = rs(((l.e.r = o.length - p + m - 1 + a), l))),
            e
          );
        }
        function i_(e, t) {
          return ix((t || {}).dense ? [] : {}, e, t);
        }
        function ik(e) {
          var t = "",
            r =
              e.ownerDocument.defaultView &&
              "function" == typeof e.ownerDocument.defaultView.getComputedStyle
                ? e.ownerDocument.defaultView.getComputedStyle
                : "function" == typeof getComputedStyle
                  ? getComputedStyle
                  : null;
          return (
            r && (t = r(e).getPropertyValue("display")),
            t || (t = e.style.display),
            "none" === t
          );
        }
        var iA =
            ((F = {
              day: ["d", "dd"],
              month: ["m", "mm"],
              year: ["y", "yy"],
              hours: ["h", "hh"],
              minutes: ["m", "mm"],
              seconds: ["s", "ss"],
              "am-pm": ["A/P", "AM/PM"],
              "day-of-week": ["ddd", "dddd"],
              era: ["e", "ee"],
              quarter: ["\\Qm", 'm\\"th quarter"'],
            }),
            function (e, t) {
              var r,
                n,
                a,
                s,
                i,
                o,
                c = t || {},
                l = io(e),
                f = [],
                h = { name: "" },
                u = "",
                d = 0,
                p = {},
                m = [],
                g = c.dense ? [] : {},
                v = { value: "" },
                b = "",
                E = 0,
                S = [],
                w = -1,
                C = -1,
                B = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } },
                T = 0,
                x = {},
                _ = [],
                k = {},
                A = 0,
                I = [],
                y = 1,
                R = 1,
                D = [],
                O = { Names: [] },
                P = {},
                N = ["", ""],
                M = [],
                L = {},
                U = "",
                H = 0,
                W = !1,
                V = !1,
                X = 0;
              for (
                ic.lastIndex = 0,
                  l = l
                    .replace(/<!--([\s\S]*?)-->/gm, "")
                    .replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
                (i = ic.exec(l));
              )
                switch ((i[3] = i[3].replace(/_.*$/, ""))) {
                  case "table":
                  case "工作表":
                    "/" === i[1]
                      ? (B.e.c >= B.s.c && B.e.r >= B.s.r
                          ? (g["!ref"] = rs(B))
                          : (g["!ref"] = "A1:A1"),
                        c.sheetRows > 0 &&
                          c.sheetRows <= B.e.r &&
                          ((g["!fullref"] = g["!ref"]),
                          (B.e.r = c.sheetRows - 1),
                          (g["!ref"] = rs(B))),
                        _.length && (g["!merges"] = _),
                        I.length && (g["!rows"] = I),
                        (a.name = a["名称"] || a.name),
                        "undefined" != typeof JSON && JSON.stringify(a),
                        m.push(a.name),
                        (p[a.name] = g),
                        (V = !1))
                      : "/" !== i[0].charAt(i[0].length - 2) &&
                        ((a = e2(i[0], !1)),
                        (w = C = -1),
                        (B.s.r = B.s.c = 1e7),
                        (B.e.r = B.e.c = 0),
                        (g = c.dense ? [] : {}),
                        (_ = []),
                        (I = []),
                        (V = !0));
                    break;
                  case "table-row-group":
                    "/" === i[1] ? --T : ++T;
                    break;
                  case "table-row":
                  case "行":
                    if ("/" === i[1]) {
                      (w += y), (y = 1);
                      break;
                    }
                    if (
                      ((s = e2(i[0], !1))["行号"]
                        ? (w = s["行号"] - 1)
                        : -1 == w && (w = 0),
                      (y = +s["number-rows-repeated"] || 1) < 10)
                    )
                      for (X = 0; X < y; ++X)
                        T > 0 && (I[w + X] = { level: T });
                    C = -1;
                    break;
                  case "covered-table-cell":
                    "/" !== i[1] && ++C,
                      c.sheetStubs &&
                        (c.dense
                          ? (g[w] || (g[w] = []), (g[w][C] = { t: "z" }))
                          : (g[rn({ r: w, c: C })] = { t: "z" })),
                      (b = ""),
                      (S = []);
                    break;
                  case "table-cell":
                  case "数据":
                    if ("/" === i[0].charAt(i[0].length - 2))
                      ++C,
                        (R = parseInt(
                          (v = e2(i[0], !1))["number-columns-repeated"] || "1",
                          10
                        )),
                        (o = { t: "z", v: null }),
                        v.formula &&
                          !1 != c.cellFormula &&
                          (o.f = sT(e6(v.formula))),
                        "string" == (v["数据类型"] || v["value-type"]) &&
                          ((o.t = "s"),
                          (o.v = e6(v["string-value"] || "")),
                          c.dense
                            ? (g[w] || (g[w] = []), (g[w][C] = o))
                            : (g[rn({ r: w, c: C })] = o)),
                        (C += R - 1);
                    else if ("/" !== i[1]) {
                      R = 1;
                      var G = y ? w + y - 1 : w;
                      if (
                        (++C > B.e.c && (B.e.c = C),
                        C < B.s.c && (B.s.c = C),
                        w < B.s.r && (B.s.r = w),
                        G > B.e.r && (B.e.r = G),
                        (v = e2(i[0], !1)),
                        (M = []),
                        (L = {}),
                        (o = { t: v["数据类型"] || v["value-type"], v: null }),
                        c.cellFormula)
                      ) {
                        if (
                          (v.formula && (v.formula = e6(v.formula)),
                          v["number-matrix-columns-spanned"] &&
                            v["number-matrix-rows-spanned"] &&
                            ((k = {
                              s: { r: w, c: C },
                              e: {
                                r:
                                  w +
                                  (parseInt(
                                    v["number-matrix-rows-spanned"],
                                    10
                                  ) || 0) -
                                  1,
                                c:
                                  C +
                                  (parseInt(
                                    v["number-matrix-columns-spanned"],
                                    10
                                  ) || 0) -
                                  1,
                              },
                            }),
                            (o.F = rs(k)),
                            D.push([k, o.F])),
                          v.formula)
                        )
                          o.f = sT(v.formula);
                        else
                          for (X = 0; X < D.length; ++X)
                            w >= D[X][0].s.r &&
                              w <= D[X][0].e.r &&
                              C >= D[X][0].s.c &&
                              C <= D[X][0].e.c &&
                              (o.F = D[X][1]);
                      }
                      switch (
                        ((v["number-columns-spanned"] ||
                          v["number-rows-spanned"]) &&
                          ((k = {
                            s: { r: w, c: C },
                            e: {
                              r:
                                w +
                                (parseInt(v["number-rows-spanned"], 10) || 0) -
                                1,
                              c:
                                C +
                                (parseInt(v["number-columns-spanned"], 10) ||
                                  0) -
                                1,
                            },
                          }),
                          _.push(k)),
                        v["number-columns-repeated"] &&
                          (R = parseInt(v["number-columns-repeated"], 10)),
                        o.t)
                      ) {
                        case "boolean":
                          (o.t = "b"), (o.v = ta(v["boolean-value"]));
                          break;
                        case "float":
                        case "percentage":
                        case "currency":
                          (o.t = "n"), (o.v = parseFloat(v.value));
                          break;
                        case "date":
                          (o.t = "d"),
                            (o.v = eN(v["date-value"])),
                            c.cellDates || ((o.t = "n"), (o.v = eI(o.v))),
                            (o.z = "m/d/yy");
                          break;
                        case "time":
                          (o.t = "n"),
                            (o.v =
                              (function (e) {
                                var t = 0,
                                  r = 0,
                                  n = !1,
                                  a = e.match(
                                    /P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/
                                  );
                                if (!a)
                                  throw Error(
                                    "|" + e + "| is not an ISO8601 Duration"
                                  );
                                for (var s = 1; s != a.length; ++s)
                                  if (a[s]) {
                                    switch (
                                      ((r = 1),
                                      s > 3 && (n = !0),
                                      a[s].slice(a[s].length - 1))
                                    ) {
                                      case "Y":
                                        throw Error(
                                          "Unsupported ISO Duration Field: " +
                                            a[s].slice(a[s].length - 1)
                                        );
                                      case "D":
                                        r *= 24;
                                      case "H":
                                        r *= 60;
                                      case "M":
                                        if (n) r *= 60;
                                        else
                                          throw Error(
                                            "Unsupported ISO Duration Field: M"
                                          );
                                    }
                                    t += r * parseInt(a[s], 10);
                                  }
                                return t;
                              })(v["time-value"]) / 86400);
                          break;
                        case "number":
                          (o.t = "n"), (o.v = parseFloat(v["数据数值"]));
                          break;
                        default:
                          if ("string" !== o.t && "text" !== o.t && o.t)
                            throw Error("Unsupported value type " + o.t);
                          (o.t = "s"),
                            null != v["string-value"] &&
                              ((b = e6(v["string-value"])), (S = []));
                      }
                    } else {
                      if (
                        ((W = !1),
                        "s" === o.t &&
                          ((o.v = b || ""),
                          S.length && (o.R = S),
                          (W = 0 == E)),
                        P.Target && (o.l = P),
                        M.length > 0 && ((o.c = M), (M = [])),
                        b && !1 !== c.cellText && (o.w = b),
                        W && ((o.t = "z"), delete o.v),
                        (!W || c.sheetStubs) &&
                          !(c.sheetRows && c.sheetRows <= w))
                      )
                        for (var z = 0; z < y; ++z) {
                          if (
                            ((R = parseInt(
                              v["number-columns-repeated"] || "1",
                              10
                            )),
                            c.dense)
                          )
                            for (
                              g[w + z] || (g[w + z] = []),
                                g[w + z][C] = 0 == z ? o : eL(o);
                              --R > 0;
                            )
                              g[w + z][C + R] = eL(o);
                          else
                            for (g[rn({ r: w + z, c: C })] = o; --R > 0; )
                              g[rn({ r: w + z, c: C + R })] = eL(o);
                          B.e.c <= C && (B.e.c = C);
                        }
                      (C +=
                        (R = parseInt(
                          v["number-columns-repeated"] || "1",
                          10
                        )) - 1),
                        (R = 0),
                        (o = {}),
                        (b = ""),
                        (S = []);
                    }
                    P = {};
                    break;
                  case "document":
                  case "document-content":
                  case "电子表格文档":
                  case "spreadsheet":
                  case "主体":
                  case "scripts":
                  case "styles":
                  case "font-face-decls":
                  case "master-styles":
                    if ("/" === i[1]) {
                      if ((r = f.pop())[0] !== i[3]) throw "Bad state: " + r;
                    } else
                      "/" !== i[0].charAt(i[0].length - 2) &&
                        f.push([i[3], !0]);
                    break;
                  case "annotation":
                    if ("/" === i[1]) {
                      if ((r = f.pop())[0] !== i[3]) throw "Bad state: " + r;
                      (L.t = b), S.length && (L.R = S), (L.a = U), M.push(L);
                    } else
                      "/" !== i[0].charAt(i[0].length - 2) &&
                        f.push([i[3], !1]);
                    (U = ""), (H = 0), (b = ""), (E = 0), (S = []);
                    break;
                  case "creator":
                    "/" === i[1]
                      ? (U = l.slice(H, i.index))
                      : (H = i.index + i[0].length);
                    break;
                  case "meta":
                  case "元数据":
                  case "settings":
                  case "config-item-set":
                  case "config-item-map-indexed":
                  case "config-item-map-entry":
                  case "config-item-map-named":
                  case "shapes":
                  case "frame":
                  case "text-box":
                  case "image":
                  case "data-pilot-tables":
                  case "list-style":
                  case "form":
                  case "dde-links":
                  case "event-listeners":
                  case "chart":
                    if ("/" === i[1]) {
                      if ((r = f.pop())[0] !== i[3]) throw "Bad state: " + r;
                    } else
                      "/" !== i[0].charAt(i[0].length - 2) &&
                        f.push([i[3], !1]);
                    (b = ""), (E = 0), (S = []);
                    break;
                  case "scientific-number":
                  case "currency-symbol":
                  case "currency-style":
                  case "script":
                  case "libraries":
                  case "automatic-styles":
                  case "default-style":
                  case "page-layout":
                  case "style":
                  case "map":
                  case "font-face":
                  case "paragraph-properties":
                  case "table-properties":
                  case "table-column-properties":
                  case "table-row-properties":
                  case "table-cell-properties":
                  case "fraction":
                  case "boolean-style":
                  case "boolean":
                  case "text-style":
                  case "text-content":
                  case "text-properties":
                  case "embedded-text":
                  case "body":
                  case "电子表格":
                  case "forms":
                  case "table-column":
                  case "table-header-rows":
                  case "table-rows":
                  case "table-column-group":
                  case "table-header-columns":
                  case "table-columns":
                  case "null-date":
                  case "graphic-properties":
                  case "calculation-settings":
                  case "named-expressions":
                  case "label-range":
                  case "label-ranges":
                  case "named-expression":
                  case "sort":
                  case "sort-by":
                  case "sort-groups":
                  case "tab":
                  case "line-break":
                  case "span":
                  case "s":
                  case "date":
                  case "object":
                  case "title":
                  case "标题":
                  case "desc":
                  case "binary-data":
                  case "table-source":
                  case "scenario":
                  case "iteration":
                  case "content-validations":
                  case "content-validation":
                  case "help-message":
                  case "error-message":
                  case "database-ranges":
                  case "filter":
                  case "filter-and":
                  case "filter-or":
                  case "filter-condition":
                  case "list-level-style-bullet":
                  case "list-level-style-number":
                  case "list-level-properties":
                  case "sender-firstname":
                  case "sender-lastname":
                  case "sender-initials":
                  case "sender-title":
                  case "sender-position":
                  case "sender-email":
                  case "sender-phone-private":
                  case "sender-fax":
                  case "sender-company":
                  case "sender-phone-work":
                  case "sender-street":
                  case "sender-city":
                  case "sender-postal-code":
                  case "sender-country":
                  case "sender-state-or-province":
                  case "author-name":
                  case "author-initials":
                  case "chapter":
                  case "file-name":
                  case "template-name":
                  case "sheet-name":
                  case "event-listener":
                  case "initial-creator":
                  case "creation-date":
                  case "print-date":
                  case "generator":
                  case "document-statistic":
                  case "user-defined":
                  case "editing-duration":
                  case "editing-cycles":
                  case "config-item":
                  case "page-number":
                  case "page-count":
                  case "time":
                  case "cell-range-source":
                  case "detective":
                  case "operation":
                  case "highlighted-range":
                  case "data-pilot-table":
                  case "source-cell-range":
                  case "source-service":
                  case "data-pilot-field":
                  case "data-pilot-level":
                  case "data-pilot-subtotals":
                  case "data-pilot-subtotal":
                  case "data-pilot-members":
                  case "data-pilot-member":
                  case "data-pilot-display-info":
                  case "data-pilot-sort-info":
                  case "data-pilot-layout-info":
                  case "data-pilot-field-reference":
                  case "data-pilot-groups":
                  case "data-pilot-group":
                  case "data-pilot-group-member":
                  case "rect":
                  case "dde-connection-decls":
                  case "dde-connection-decl":
                  case "dde-link":
                  case "dde-source":
                  case "properties":
                  case "property":
                  case "table-protection":
                  case "data-pilot-grand-total":
                  case "office-document-common-attrs":
                    break;
                  case "number-style":
                  case "percentage-style":
                  case "date-style":
                  case "time-style":
                    if ("/" === i[1]) {
                      if (((x[h.name] = u), (r = f.pop())[0] !== i[3]))
                        throw "Bad state: " + r;
                    } else
                      "/" !== i[0].charAt(i[0].length - 2) &&
                        ((u = ""), (h = e2(i[0], !1)), f.push([i[3], !0]));
                    break;
                  case "number":
                  case "day":
                  case "month":
                  case "year":
                  case "era":
                  case "day-of-week":
                  case "week-of-year":
                  case "quarter":
                  case "hours":
                  case "minutes":
                  case "seconds":
                  case "am-pm":
                    switch (f[f.length - 1][0]) {
                      case "time-style":
                      case "date-style":
                        (n = e2(i[0], !1)),
                          (u += F[i[3]]["long" === n.style ? 1 : 0]);
                    }
                    break;
                  case "text":
                    if ("/>" === i[0].slice(-2));
                    else if ("/" === i[1])
                      switch (f[f.length - 1][0]) {
                        case "number-style":
                        case "date-style":
                        case "time-style":
                          u += l.slice(d, i.index);
                      }
                    else d = i.index + i[0].length;
                    break;
                  case "named-range":
                    N = sx((n = e2(i[0], !1))["cell-range-address"]);
                    var j = { Name: n.name, Ref: N[0] + "!" + N[1] };
                    V && (j.Sheet = m.length), O.Names.push(j);
                    break;
                  case "p":
                  case "文本串":
                    if (["master-styles"].indexOf(f[f.length - 1][0]) > -1)
                      break;
                    if ("/" !== i[1] || (v && v["string-value"]))
                      e2(i[0], !1), (E = i.index + i[0].length);
                    else {
                      var K = [
                        e6(
                          l
                            .slice(E, i.index)
                            .replace(/[\t\r\n]/g, " ")
                            .trim()
                            .replace(/ +/g, " ")
                            .replace(/<text:s\/>/g, " ")
                            .replace(
                              /<text:s text:c="(\d+)"\/>/g,
                              function (e, t) {
                                return Array(parseInt(t, 10) + 1).join(" ");
                              }
                            )
                            .replace(/<text:tab[^>]*\/>/g, "	")
                            .replace(/<text:line-break\/>/g, "\n")
                            .replace(/<[^>]*>/g, "")
                        ),
                      ];
                      b = (b.length > 0 ? b + "\n" : "") + K[0];
                    }
                    break;
                  case "database-range":
                    if ("/" === i[1]) break;
                    try {
                      p[(N = sx(e2(i[0])["target-range-address"]))[0]][
                        "!autofilter"
                      ] = { ref: N[1] };
                    } catch (e) {}
                    break;
                  case "a":
                    if ("/" !== i[1]) {
                      if (!(P = e2(i[0], !1)).href) break;
                      (P.Target = P.href),
                        delete P.href,
                        "#" == P.Target.charAt(0) &&
                          P.Target.indexOf(".") > -1 &&
                          ((N = sx(P.Target.slice(1))),
                          (P.Target = "#" + N[0] + "!" + N[1]));
                    }
                    break;
                  default:
                    switch (i[2]) {
                      case "dc:":
                      case "calcext:":
                      case "loext:":
                      case "ooo:":
                      case "chartooo:":
                      case "draw:":
                      case "style:":
                      case "chart:":
                      case "form:":
                      case "uof:":
                      case "表:":
                      case "字:":
                        break;
                      default:
                        if (c.WTF) throw Error(i);
                    }
                }
              var Y = { Sheets: p, SheetNames: m, Workbook: O };
              return c.bookSheets && delete Y.Sheets, Y;
            }),
          iI =
            ((D =
              "<office:document-styles " +
              tb({
                "xmlns:office":
                  "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                "xmlns:table":
                  "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
                "xmlns:style":
                  "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
                "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
                "xmlns:draw":
                  "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
                "xmlns:fo":
                  "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                "xmlns:number":
                  "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
                "xmlns:svg":
                  "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
                "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
                "office:version": "1.2",
              }) +
              "></office:document-styles>"),
            function () {
              return eJ + D;
            }),
          iy =
            ((O = "          <table:table-cell />\n"),
            (P = function (e, t, r) {
              var n = [];
              n.push(
                '      <table:table table:name="' +
                  e9(t.SheetNames[r]) +
                  '" table:style-name="ta1">\n'
              );
              var a = 0,
                s = 0,
                i = ra(e["!ref"]),
                o = e["!merges"] || [],
                c = 0,
                l = Array.isArray(e);
              for (a = 0; a < i.s.r; ++a)
                n.push("        <table:table-row></table:table-row>\n");
              for (; a <= i.e.r; ++a) {
                for (
                  n.push("        <table:table-row>\n"), s = 0;
                  s < i.s.c;
                  ++s
                )
                  n.push(O);
                for (; s <= i.e.c; ++s) {
                  var f = !1,
                    h = {},
                    u = "";
                  for (c = 0; c != o.length; ++c)
                    if (
                      !(o[c].s.c > s) &&
                      !(o[c].s.r > a) &&
                      !(o[c].e.c < s) &&
                      !(o[c].e.r < a)
                    ) {
                      (o[c].s.c != s || o[c].s.r != a) && (f = !0),
                        (h["table:number-columns-spanned"] =
                          o[c].e.c - o[c].s.c + 1),
                        (h["table:number-rows-spanned"] =
                          o[c].e.r - o[c].s.r + 1);
                      break;
                    }
                  if (f) {
                    n.push("          <table:covered-table-cell/>\n");
                    continue;
                  }
                  var d = rn({ r: a, c: s }),
                    p = l ? (e[a] || [])[s] : e[d];
                  if (
                    p &&
                    p.f &&
                    ((h["table:formula"] = e9(
                      (
                        "of:=" +
                        p.f.replace(a4, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":")
                      )
                        .replace(/;/g, "|")
                        .replace(/,/g, ";")
                    )),
                    p.F && p.F.slice(0, d.length) == d)
                  ) {
                    var m = ra(p.F);
                    (h["table:number-matrix-columns-spanned"] =
                      m.e.c - m.s.c + 1),
                      (h["table:number-matrix-rows-spanned"] =
                        m.e.r - m.s.r + 1);
                  }
                  if (!p) {
                    n.push(O);
                    continue;
                  }
                  switch (p.t) {
                    case "b":
                      (u = p.v ? "TRUE" : "FALSE"),
                        (h["office:value-type"] = "boolean"),
                        (h["office:boolean-value"] = p.v ? "true" : "false");
                      break;
                    case "n":
                      (u = p.w || String(p.v || 0)),
                        (h["office:value-type"] = "float"),
                        (h["office:value"] = p.v || 0);
                      break;
                    case "s":
                    case "str":
                      (u = null == p.v ? "" : p.v),
                        (h["office:value-type"] = "string");
                      break;
                    case "d":
                      (u = p.w || eN(p.v).toISOString()),
                        (h["office:value-type"] = "date"),
                        (h["office:date-value"] = eN(p.v).toISOString()),
                        (h["table:style-name"] = "ce1");
                      break;
                    default:
                      n.push(O);
                      continue;
                  }
                  var g = e9(u)
                    .replace(/  +/g, function (e) {
                      return '<text:s text:c="' + e.length + '"/>';
                    })
                    .replace(/\t/g, "<text:tab/>")
                    .replace(/\n/g, "</text:p><text:p>")
                    .replace(/^ /, "<text:s/>")
                    .replace(/ $/, "<text:s/>");
                  if (p.l && p.l.Target) {
                    var v = p.l.Target;
                    g = tE("text:a", g, {
                      "xlink:href": (v =
                        "#" == v.charAt(0)
                          ? "#" + v.slice(1).replace(/\./, "!")
                          : v),
                    });
                  }
                  n.push(
                    "          " +
                      tE("table:table-cell", tE("text:p", g, {}), h) +
                      "\n"
                  );
                }
                n.push("        </table:table-row>\n");
              }
              return n.push("      </table:table>\n"), n.join("");
            }),
            (N = function (e) {
              e.push(" <office:automatic-styles>\n"),
                e.push(
                  '  <number:date-style style:name="N37" number:automatic-order="true">\n'
                ),
                e.push('   <number:month number:style="long"/>\n'),
                e.push("   <number:text>/</number:text>\n"),
                e.push('   <number:day number:style="long"/>\n'),
                e.push("   <number:text>/</number:text>\n"),
                e.push("   <number:year/>\n"),
                e.push("  </number:date-style>\n"),
                e.push(
                  '  <style:style style:name="ta1" style:family="table">\n'
                ),
                e.push(
                  '   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>\n'
                ),
                e.push("  </style:style>\n"),
                e.push(
                  '  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n'
                ),
                e.push(" </office:automatic-styles>\n");
            }),
            function (e, t) {
              var r = [eJ],
                n = tb({
                  "xmlns:office":
                    "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
                  "xmlns:table":
                    "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
                  "xmlns:style":
                    "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
                  "xmlns:text":
                    "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
                  "xmlns:draw":
                    "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
                  "xmlns:fo":
                    "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  "xmlns:dc": "http://purl.org/dc/elements/1.1/",
                  "xmlns:meta":
                    "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
                  "xmlns:number":
                    "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
                  "xmlns:presentation":
                    "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
                  "xmlns:svg":
                    "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
                  "xmlns:chart":
                    "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
                  "xmlns:dr3d":
                    "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
                  "xmlns:math": "http://www.w3.org/1998/Math/MathML",
                  "xmlns:form":
                    "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
                  "xmlns:script":
                    "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
                  "xmlns:ooo": "http://openoffice.org/2004/office",
                  "xmlns:ooow": "http://openoffice.org/2004/writer",
                  "xmlns:oooc": "http://openoffice.org/2004/calc",
                  "xmlns:dom": "http://www.w3.org/2001/xml-events",
                  "xmlns:xforms": "http://www.w3.org/2002/xforms",
                  "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
                  "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                  "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
                  "xmlns:rpt": "http://openoffice.org/2005/report",
                  "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
                  "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
                  "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
                  "xmlns:tableooo": "http://openoffice.org/2009/table",
                  "xmlns:drawooo": "http://openoffice.org/2010/draw",
                  "xmlns:calcext":
                    "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
                  "xmlns:loext":
                    "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
                  "xmlns:field":
                    "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
                  "xmlns:formx":
                    "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
                  "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
                  "office:version": "1.2",
                }),
                a = tb({
                  "xmlns:config":
                    "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
                  "office:mimetype":
                    "application/vnd.oasis.opendocument.spreadsheet",
                });
              "fods" == t.bookType
                ? r.push("<office:document" + n + a + ">\n")
                : r.push("<office:document-content" + n + ">\n"),
                N(r),
                r.push("  <office:body>\n"),
                r.push("    <office:spreadsheet>\n");
              for (var s = 0; s != e.SheetNames.length; ++s)
                r.push(P(e.Sheets[e.SheetNames[s]], e, s, t));
              return (
                r.push("    </office:spreadsheet>\n"),
                r.push("  </office:body>\n"),
                "fods" == t.bookType
                  ? r.push("</office:document>")
                  : r.push("</office:document-content>"),
                r.join("")
              );
            });
        function iR(e, t) {
          if ("fods" == t.bookType) return iy(e, t);
          var r = eY(),
            n = "",
            a = [],
            s = [];
          return (
            eK(
              r,
              (n = "mimetype"),
              "application/vnd.oasis.opendocument.spreadsheet"
            ),
            eK(r, (n = "content.xml"), iy(e, t)),
            a.push([n, "text/xml"]),
            s.push([n, "ContentFile"]),
            eK(r, (n = "styles.xml"), iI(e, t)),
            a.push([n, "text/xml"]),
            s.push([n, "StylesFile"]),
            eK(r, (n = "meta.xml"), r0()),
            a.push([n, "text/xml"]),
            s.push([n, "MetadataFile"]),
            eK(
              r,
              (n = "manifest.rdf"),
              (function (e) {
                var t = [eJ];
                t.push(
                  '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n'
                );
                for (var r = 0; r != e.length; ++r)
                  t.push(r1(e[r][0], e[r][1])),
                    t.push(
                      [
                        '  <rdf:Description rdf:about="">\n',
                        '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' +
                          e[r][0] +
                          '"/>\n',
                        "  </rdf:Description>\n",
                      ].join("")
                    );
                return (
                  t.push(r1("", "Document", "pkg")),
                  t.push("</rdf:RDF>"),
                  t.join("")
                );
              })(s)
            ),
            a.push([n, "application/rdf+xml"]),
            eK(
              r,
              (n = "META-INF/manifest.xml"),
              (function (e) {
                var t = [eJ];
                t.push(
                  '<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n'
                ),
                  t.push(
                    '  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n'
                  );
                for (var r = 0; r < e.length; ++r)
                  t.push(
                    '  <manifest:file-entry manifest:full-path="' +
                      e[r][0] +
                      '" manifest:media-type="' +
                      e[r][1] +
                      '"/>\n'
                  );
                return t.push("</manifest:manifest>"), t.join("");
              })(a)
            ),
            r
          );
        }
        function iF(e) {
          return function (t, r) {
            var n = (function (e, t) {
              if (!t) return 0;
              var r = e.SheetNames.indexOf(t);
              if (-1 == r) throw Error("Sheet not found: " + t);
              return r;
            })(t, r.sheet);
            return e.from_sheet(t.Sheets[t.SheetNames[n]], r, t);
          };
        }
        var iD = iF(iT),
          iO = iF({ from_sheet: i7 }),
          iP = iF(void 0 !== n2 ? n2 : {}),
          iN = iF(void 0 !== n4 ? n4 : {}),
          iM = iF(void 0 !== n5 ? n5 : {}),
          iL = iF(void 0 !== ab ? ab : {}),
          iU = iF({ from_sheet: i9 }),
          iH = iF(void 0 !== n0 ? n0 : {}),
          iW = iF(void 0 !== n3 ? n3 : {});
        function iV(e) {
          return function (t) {
            for (var r = 0; r != e.length; ++r) {
              var n = e[r];
              void 0 === t[n[0]] && (t[n[0]] = n[1]),
                "n" === n[2] && (t[n[0]] = Number(t[n[0]]));
            }
          };
        }
        var iX = function (e) {
            iV([
              ["cellNF", !1],
              ["cellHTML", !0],
              ["cellFormula", !0],
              ["cellStyles", !1],
              ["cellText", !0],
              ["cellDates", !1],
              ["sheetStubs", !1],
              ["sheetRows", 0, "n"],
              ["bookDeps", !1],
              ["bookSheets", !1],
              ["bookProps", !1],
              ["bookFiles", !1],
              ["bookVBA", !1],
              ["password", ""],
              ["WTF", !1],
            ])(e);
          },
          iG = iV([
            ["cellDates", !1],
            ["bookSST", !1],
            ["bookType", "xlsx"],
            ["compression", !1],
            ["WTF", !1],
          ]);
        function iz(e) {
          return "/" == e.charAt(0) ? e.slice(1) : e;
        }
        function ij(e, t) {
          if (
            (eb(ev),
            iX((t = t || {})),
            eG(e, "META-INF/manifest.xml") || eG(e, "objectdata.xml"))
          )
            return (function (e, t) {
              t = t || {};
              var r = !!eG(e, "objectdata");
              r &&
                (function (e, t) {
                  for (var r, n, a = io(e); (r = ic.exec(a)); )
                    switch (r[3]) {
                      case "manifest":
                        break;
                      case "file-entry":
                        if (
                          "/" == (n = e2(r[0], !1)).path &&
                          "application/vnd.oasis.opendocument.spreadsheet" !==
                            n.type
                        )
                          throw Error("This OpenDocument is not a spreadsheet");
                        break;
                      case "encryption-data":
                      case "algorithm":
                      case "start-key-generation":
                      case "key-derivation":
                        throw Error("Unsupported ODS Encryption");
                      default:
                        if (t && t.WTF) throw r;
                    }
                })(ej(e, "META-INF/manifest.xml"), t);
              var n = e$(e, "content.xml");
              if (!n)
                throw Error(
                  "Missing content.xml in " + (r ? "ODS" : "UOF") + " file"
                );
              var a = iA(r ? n : ts(n), t);
              return eG(e, "meta.xml") && (a.Props = r3(ej(e, "meta.xml"))), a;
            })(e, t);
          if (eG(e, "Index/Document.iwa"))
            throw Error("Unsupported NUMBERS file");
          var r,
            n,
            a,
            s,
            i,
            o,
            c,
            l,
            f,
            h,
            u,
            d,
            p,
            m = (function (e) {
              for (
                var t = e.FullPaths || eT(e.files), r = [], n = 0;
                n < t.length;
                ++n
              )
                "/" != t[n].slice(-1) && r.push(t[n]);
              return r.sort();
            })(e),
            g = (function (e) {
              var t = rG();
              if (!e || !e.match) return t;
              var r = {};
              if (
                ((e.match(eq) || []).forEach(function (e) {
                  var n = e2(e);
                  switch (n[0].replace(e1, "<")) {
                    case "<?xml":
                      break;
                    case "<Types":
                      t.xmlns =
                        n["xmlns" + (n[0].match(/<(\w+):/) || ["", ""])[1]];
                      break;
                    case "<Default":
                      r[n.Extension] = n.ContentType;
                      break;
                    case "<Override":
                      void 0 !== t[rW[n.ContentType]] &&
                        t[rW[n.ContentType]].push(n.PartName);
                  }
                }),
                t.xmlns !== tw.CT)
              )
                throw Error("Unknown Namespace: " + t.xmlns);
              return (
                (t.calcchain = t.calcchains.length > 0 ? t.calcchains[0] : ""),
                (t.sst = t.strs.length > 0 ? t.strs[0] : ""),
                (t.style = t.styles.length > 0 ? t.styles[0] : ""),
                (t.defaults = r),
                delete t.calcchains,
                t
              );
            })(e$(e, "[Content_Types].xml")),
            v = !1;
          if (
            (0 === g.workbooks.length &&
              ej(e, (u = "xl/workbook.xml"), !0) &&
              g.workbooks.push(u),
            0 === g.workbooks.length)
          ) {
            if (!ej(e, (u = "xl/workbook.bin"), !0))
              throw Error("Could not find workbook");
            g.workbooks.push(u), (v = !0);
          }
          "bin" == g.workbooks[0].slice(-3) && (v = !0);
          var b = {},
            E = {};
          if (!t.bookSheets && !t.bookProps) {
            if (((s_ = []), g.sst))
              try {
                s_ = (function (e, t, r) {
                  if (".bin" === t.slice(-4)) {
                    var n, a;
                    return (
                      (n = []),
                      (a = !1),
                      t0(e, function (e, t, s) {
                        switch (s) {
                          case 159:
                            (n.Count = e[0]), (n.Unique = e[1]);
                            break;
                          case 19:
                            n.push(e);
                            break;
                          case 160:
                            return !0;
                          case 35:
                            a = !0;
                            break;
                          case 36:
                            a = !1;
                            break;
                          default:
                            if (
                              (t.indexOf("Begin") > 0 || t.indexOf("End"),
                              !a || r.WTF)
                            )
                              throw Error("Unexpected record " + s + " " + t);
                        }
                      }),
                      n
                    );
                  }
                  return (function (e, t) {
                    var r = [],
                      n = "";
                    if (!e) return r;
                    var a = e.match(an);
                    if (a) {
                      n = a[2].replace(aa, "").split(as);
                      for (var s = 0; s != n.length; ++s) {
                        var i = ar(n[s].trim(), t);
                        null != i && (r[r.length] = i);
                      }
                      (a = e2(a[1])),
                        (r.Count = a.count),
                        (r.Unique = a.uniqueCount);
                    }
                    return r;
                  })(e, r);
                })(ej(e, iz(g.sst)), g.sst, t);
              } catch (e) {
                if (t.WTF) throw e;
              }
            t.cellStyles &&
              g.themes.length &&
              ((r = e$(e, g.themes[0].replace(/^\//, ""), !0) || ""),
              g.themes[0],
              (b = aY(r, t))),
              g.style &&
                ((n = ej(e, iz(g.style))),
                (a = g.style),
                (s = b),
                (i = t),
                (E =
                  ".bin" === a.slice(-4)
                    ? (function (e, t, r) {
                        var n = {};
                        for (var a in ((n.NumberFmt = []), ev._table))
                          n.NumberFmt[a] = ev._table[a];
                        (n.CellXf = []), (n.Fonts = []);
                        var s = [],
                          i = !1;
                        return (
                          t0(e, function (e, a, o) {
                            switch (o) {
                              case 44:
                                (n.NumberFmt[e[0]] = e[1]), ev.load(e[1], e[0]);
                                break;
                              case 43:
                                n.Fonts.push(e),
                                  null != e.color.theme &&
                                    t &&
                                    t.themeElements &&
                                    t.themeElements.clrScheme &&
                                    (e.color.rgb = aS(
                                      t.themeElements.clrScheme[e.color.theme]
                                        .rgb,
                                      e.color.tint || 0
                                    ));
                                break;
                              case 1025:
                              case 45:
                              case 46:
                              case 48:
                              case 507:
                              case 572:
                              case 475:
                              case 1171:
                              case 2102:
                              case 1130:
                              case 512:
                              case 2095:
                              case 3072:
                                break;
                              case 47:
                                "BrtBeginCellXFs" == s[s.length - 1] &&
                                  n.CellXf.push(e);
                                break;
                              case 35:
                                i = !0;
                                break;
                              case 36:
                                i = !1;
                                break;
                              case 37:
                                s.push(a), (i = !0);
                                break;
                              case 38:
                                s.pop(), (i = !1);
                                break;
                              default:
                                if ((a || "").indexOf("Begin") > 0) s.push(a);
                                else if ((a || "").indexOf("End") > 0) s.pop();
                                else if (
                                  !i ||
                                  (r.WTF && "BrtACBegin" != s[s.length - 1])
                                )
                                  throw Error(
                                    "Unexpected record " + o + " " + a
                                  );
                            }
                          }),
                          n
                        );
                      })(n, s, i)
                    : aD(n, s, i)));
          }
          g.links.map(function (r) {
            try {
              var n, a;
              return (
                rY(e$(e, rK(iz(r))), r),
                (n = ej(e, iz(r))),
                (a = t),
                ".bin" === r.slice(-4)
                  ? (function (e, t, r, n) {
                      if (!e) return e;
                      var a = n || {},
                        s = !1;
                      t0(
                        e,
                        function (e, t, r) {
                          switch (r) {
                            case 359:
                            case 363:
                            case 364:
                            case 366:
                            case 367:
                            case 368:
                            case 369:
                            case 370:
                            case 371:
                            case 472:
                            case 577:
                            case 578:
                            case 579:
                            case 580:
                            case 581:
                            case 582:
                            case 583:
                            case 584:
                            case 585:
                            case 586:
                            case 587:
                              break;
                            case 35:
                              s = !0;
                              break;
                            case 36:
                              s = !1;
                              break;
                            default:
                              if ((t || "").indexOf("Begin") > 0);
                              else if ((t || "").indexOf("End") > 0);
                              else if (!s || a.WTF)
                                throw Error(
                                  "Unexpected record " +
                                    r.toString(16) +
                                    " " +
                                    t
                                );
                          }
                        },
                        a
                      );
                    })(n, 0, 0, a)
                  : void 0
              );
            } catch (e) {}
          });
          var S = (function (e, t, r) {
              if (".bin" === t.slice(-4)) {
                var n, a, s, i, o, c;
                return (
                  (a = {
                    AppVersion: {},
                    WBProps: {},
                    WBView: [],
                    Sheets: [],
                    CalcPr: {},
                    xmlns: "",
                  }),
                  (s = []),
                  (i = !1),
                  (n = r) || (n = {}),
                  (n.biff = 12),
                  (o = []),
                  ((c = [[]]).SheetNames = []),
                  (c.XTI = []),
                  (iv[16] = { n: "BrtFRTArchID$", f: it }),
                  t0(
                    e,
                    function (e, t, r) {
                      switch (r) {
                        case 156:
                          c.SheetNames.push(e.name), a.Sheets.push(e);
                          break;
                        case 153:
                          a.WBProps = e;
                          break;
                        case 39:
                          null != e.Sheet && (n.SID = e.Sheet),
                            (e.Ref = sv(e.Ptg, null, null, c, n)),
                            delete n.SID,
                            delete e.Ptg,
                            o.push(e);
                          break;
                        case 1036:
                        case 361:
                        case 2071:
                        case 158:
                        case 143:
                        case 664:
                        case 353:
                        case 3072:
                        case 3073:
                        case 534:
                        case 677:
                        case 157:
                        case 610:
                        case 2050:
                        case 155:
                        case 548:
                        case 676:
                        case 128:
                        case 665:
                        case 2128:
                        case 2125:
                        case 549:
                        case 2053:
                        case 596:
                        case 2076:
                        case 2075:
                        case 2082:
                        case 397:
                        case 154:
                        case 1117:
                        case 553:
                        case 2091:
                        case 16:
                          break;
                        case 357:
                        case 358:
                        case 355:
                        case 667:
                          c[0].length ? c.push([r, e]) : (c[0] = [r, e]),
                            (c[c.length - 1].XTI = []);
                          break;
                        case 362:
                          0 === c.length && ((c[0] = []), (c[0].XTI = [])),
                            (c[c.length - 1].XTI =
                              c[c.length - 1].XTI.concat(e)),
                            (c.XTI = c.XTI.concat(e));
                          break;
                        case 35:
                        case 37:
                          s.push(t), (i = !0);
                          break;
                        case 36:
                        case 38:
                          s.pop(), (i = !1);
                          break;
                        default:
                          if ((t || "").indexOf("Begin") > 0);
                          else if ((t || "").indexOf("End") > 0);
                          else if (
                            !i ||
                            (n.WTF &&
                              "BrtACBegin" != s[s.length - 1] &&
                              "BrtFRTBegin" != s[s.length - 1])
                          )
                            throw Error("Unexpected record " + r + " " + t);
                      }
                    },
                    n
                  ),
                  s5(a),
                  (a.Names = o),
                  (a.supbooks = c),
                  a
                );
              }
              return (function (e, t) {
                if (!e) throw Error("Could not find file");
                var r = {
                    AppVersion: {},
                    WBProps: {},
                    WBView: [],
                    Sheets: [],
                    CalcPr: {},
                    Names: [],
                    xmlns: "",
                  },
                  n = !1,
                  a = "xmlns",
                  s = {},
                  i = 0;
                if (
                  (e.replace(eq, function (o, c) {
                    var l = e2(o);
                    switch (e4(l[0])) {
                      case "<?xml":
                      case "</workbook>":
                      case "<fileVersion/>":
                      case "</fileVersion>":
                      case "<fileSharing":
                      case "<fileSharing/>":
                      case "</workbookPr>":
                      case "<workbookProtection":
                      case "<workbookProtection/>":
                      case "<bookViews":
                      case "<bookViews>":
                      case "</bookViews>":
                      case "</workbookView>":
                      case "<sheets":
                      case "<sheets>":
                      case "</sheets>":
                      case "</sheet>":
                      case "<functionGroups":
                      case "<functionGroups/>":
                      case "<functionGroup":
                      case "<externalReferences":
                      case "</externalReferences>":
                      case "<externalReferences>":
                      case "<externalReference":
                      case "<definedNames/>":
                      case "<definedName/>":
                      case "</calcPr>":
                      case "<oleSize":
                      case "<customWorkbookViews>":
                      case "</customWorkbookViews>":
                      case "<customWorkbookViews":
                      case "<customWorkbookView":
                      case "</customWorkbookView>":
                      case "<pivotCaches>":
                      case "</pivotCaches>":
                      case "<pivotCaches":
                      case "<pivotCache":
                      case "<smartTagPr":
                      case "<smartTagPr/>":
                      case "<smartTagTypes":
                      case "<smartTagTypes>":
                      case "</smartTagTypes>":
                      case "<smartTagType":
                      case "<webPublishing":
                      case "<webPublishing/>":
                      case "<fileRecoveryPr":
                      case "<fileRecoveryPr/>":
                      case "<webPublishObjects>":
                      case "<webPublishObjects":
                      case "</webPublishObjects>":
                      case "<webPublishObject":
                      case "<extLst":
                      case "<extLst>":
                      case "</extLst>":
                      case "<extLst/>":
                      case "<ArchID":
                      case "<revisionPtr":
                        break;
                      case "<workbook":
                        o.match(s7) && (a = "xmlns" + o.match(/<(\w+):/)[1]),
                          (r.xmlns = l[a]);
                        break;
                      case "<fileVersion":
                        delete l[0], (r.AppVersion = l);
                        break;
                      case "<workbookPr":
                      case "<workbookPr/>":
                        sq.forEach(function (e) {
                          if (null != l[e[0]])
                            switch (e[2]) {
                              case "bool":
                                r.WBProps[e[0]] = ta(l[e[0]]);
                                break;
                              case "int":
                                r.WBProps[e[0]] = parseInt(l[e[0]], 10);
                                break;
                              default:
                                r.WBProps[e[0]] = l[e[0]];
                            }
                        }),
                          l.codeName && (r.WBProps.CodeName = ts(l.codeName));
                        break;
                      case "<workbookView":
                      case "<workbookView/>":
                        delete l[0], r.WBView.push(l);
                        break;
                      case "<sheet":
                        switch (l.state) {
                          case "hidden":
                            l.Hidden = 1;
                            break;
                          case "veryHidden":
                            l.Hidden = 2;
                            break;
                          default:
                            l.Hidden = 0;
                        }
                        delete l.state,
                          (l.name = e6(ts(l.name))),
                          delete l[0],
                          r.Sheets.push(l);
                        break;
                      case "<definedNames>":
                      case "<definedNames":
                      case "<ext":
                      case "<AlternateContent":
                      case "<AlternateContent>":
                        n = !0;
                        break;
                      case "</definedNames>":
                      case "</ext>":
                      case "</AlternateContent>":
                        n = !1;
                        break;
                      case "<definedName":
                        ((s = {}).Name = ts(l.name)),
                          l.comment && (s.Comment = l.comment),
                          l.localSheetId && (s.Sheet = +l.localSheetId),
                          ta(l.hidden || "0") && (s.Hidden = !0),
                          (i = c + o.length);
                        break;
                      case "</definedName>":
                        (s.Ref = e6(ts(e.slice(i, c)))), r.Names.push(s);
                        break;
                      case "<calcPr":
                      case "<calcPr/>":
                        delete l[0], (r.CalcPr = l);
                        break;
                      default:
                        if (!n && t.WTF)
                          throw Error("unrecognized " + l[0] + " in workbook");
                    }
                    return o;
                  }),
                  -1 === tw.main.indexOf(r.xmlns))
                )
                  throw Error("Unknown Namespace: " + r.xmlns);
                return s5(r), r;
              })(e, r);
            })(ej(e, iz(g.workbooks[0])), g.workbooks[0], t),
            w = {},
            C = "";
          g.coreprops.length &&
            ((C = ej(e, iz(g.coreprops[0]), !0)) && (w = r3(C)),
            0 !== g.extprops.length && (C = ej(e, iz(g.extprops[0]), !0))) &&
            ((o = C),
            (c = w),
            (l = t),
            (f = {}),
            c || (c = {}),
            (o = ts(o)),
            r8.forEach(function (e) {
              var t = (o.match(tf(e[0])) || [])[1];
              switch (e[2]) {
                case "string":
                  t && (c[e[1]] = e6(t));
                  break;
                case "bool":
                  c[e[1]] = "true" === t;
                  break;
                case "raw":
                  var r = o.match(
                    RegExp("<" + e[0] + "[^>]*>([\\s\\S]*?)</" + e[0] + ">")
                  );
                  r && r.length > 0 && (f[e[1]] = r[1]);
              }
            }),
            f.HeadingPairs &&
              f.TitlesOfParts &&
              r7(f.HeadingPairs, f.TitlesOfParts, c, l));
          var B = {};
          (!t.bookSheets || t.bookProps) &&
            0 !== g.custprops.length &&
            (C = e$(e, iz(g.custprops[0]), !0)) &&
            (B = (function (e, t) {
              var r = {},
                n = "",
                a = e.match(ne);
              if (a)
                for (var s = 0; s != a.length; ++s) {
                  var i = a[s],
                    o = e2(i);
                  switch (o[0]) {
                    case "<?xml":
                    case "<Properties":
                      break;
                    case "<property":
                      n = e6(o.name);
                      break;
                    case "</property>":
                      n = null;
                      break;
                    default:
                      if (0 === i.indexOf("<vt:")) {
                        var c = i.split(">"),
                          l = c[0].slice(4),
                          f = c[1];
                        switch (l) {
                          case "lpstr":
                          case "bstr":
                          case "lpwstr":
                          case "cy":
                          case "error":
                            r[n] = e6(f);
                            break;
                          case "bool":
                            r[n] = ta(f);
                            break;
                          case "i1":
                          case "i2":
                          case "i4":
                          case "i8":
                          case "int":
                          case "uint":
                            r[n] = parseInt(f, 10);
                            break;
                          case "r4":
                          case "r8":
                          case "decimal":
                            r[n] = parseFloat(f);
                            break;
                          case "filetime":
                          case "date":
                            r[n] = eN(f);
                            break;
                          default:
                            if ("/" == l.slice(-1)) break;
                            t.WTF &&
                              "undefined" != typeof console &&
                              console.warn("Unexpected", i, l, c);
                        }
                      } else if ("</" === i.slice(0, 2));
                      else if (t.WTF) throw Error(i);
                  }
                }
              return r;
            })(C, t));
          var T = {};
          if (
            (t.bookSheets || t.bookProps) &&
            (S.Sheets
              ? (h = S.Sheets.map(function (e) {
                  return e.name;
                }))
              : w.Worksheets && w.SheetNames.length > 0 && (h = w.SheetNames),
            t.bookProps && ((T.Props = w), (T.Custprops = B)),
            t.bookSheets && void 0 !== h && (T.SheetNames = h),
            t.bookSheets ? T.SheetNames : t.bookProps)
          )
            return T;
          h = {};
          var x = {};
          t.bookDeps &&
            g.calcchain &&
            (x = (function (e, t, r) {
              if (".bin" === t.slice(-4)) {
                var n;
                return (
                  (n = []),
                  t0(e, function (e, t, r) {
                    if (63 === r) n.push(e);
                    else if ((t || "").indexOf("Begin") > 0);
                    else if ((t || "").indexOf("End") > 0);
                    else throw Error("Unexpected record " + r + " " + t);
                  }),
                  n
                );
              }
              return (function (e) {
                var t = [];
                if (!e) return t;
                var r = 1;
                return (
                  (e.match(eq) || []).forEach(function (e) {
                    var n = e2(e);
                    switch (n[0]) {
                      case "<?xml":
                      case "<calcChain":
                      case "<calcChain>":
                      case "</calcChain>":
                        break;
                      case "<c":
                        delete n[0], n.i ? (r = n.i) : (n.i = r), t.push(n);
                    }
                  }),
                  t
                );
              })(e, t, r);
            })(ej(e, iz(g.calcchain)), g.calcchain, t));
          var _ = 0,
            k = {},
            A = S.Sheets;
          (w.Worksheets = A.length), (w.SheetNames = []);
          for (var I = 0; I != A.length; ++I) w.SheetNames[I] = A[I].name;
          var y = v ? "bin" : "xml",
            R = g.workbooks[0].lastIndexOf("/"),
            F = (
              g.workbooks[0].slice(0, R + 1) +
              "_rels/" +
              g.workbooks[0].slice(R + 1) +
              ".rels"
            ).replace(/^\//, "");
          eG(e, F) || (F = "xl/_rels/workbook." + y + ".rels");
          var D = rY(e$(e, F, !0), F);
          D &&
            (D = (function (e, t) {
              if (!e) return 0;
              try {
                e = t.map(function (t) {
                  var r;
                  return (
                    t.id || (t.id = t.strRelID),
                    [
                      t.name,
                      e["!id"][t.id].Target,
                      ((r = e["!id"][t.id].Type),
                      r$.WS.indexOf(r) > -1
                        ? "sheet"
                        : r$.CS && r == r$.CS
                          ? "chart"
                          : r$.DS && r == r$.DS
                            ? "dialog"
                            : r$.MS && r == r$.MS
                              ? "macro"
                              : r && r.length
                                ? r
                                : "sheet"),
                    ]
                  );
                });
              } catch (e) {
                return null;
              }
              return e && 0 !== e.length ? e : null;
            })(D, S.Sheets));
          var O = ej(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
          t: for (_ = 0; _ != w.Worksheets; ++_) {
            var P = "sheet";
            if (
              (D && D[_]
                ? ((d = "xl/" + D[_][1].replace(/[\/]?xl\//, "")),
                  eG(e, d) || (d = D[_][1]),
                  eG(e, d) || (d = F.replace(/_rels\/.*$/, "") + D[_][1]),
                  (P = D[_][2]))
                : (d = (d =
                    "xl/worksheets/sheet" + (_ + 1 - O) + "." + y).replace(
                    /sheet0\./,
                    "sheet."
                  )),
              (p = d.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels")),
              t && null != t.sheets)
            )
              switch (typeof t.sheets) {
                case "number":
                  if (_ != t.sheets) continue t;
                  break;
                case "string":
                  if (w.SheetNames[_].toLowerCase() != t.sheets.toLowerCase())
                    continue t;
                  break;
                default:
                  if (Array.isArray && Array.isArray(t.sheets)) {
                    for (var N = !1, M = 0; M != t.sheets.length; ++M)
                      "number" == typeof t.sheets[M] &&
                        t.sheets[M] == _ &&
                        (N = 1),
                        "string" == typeof t.sheets[M] &&
                          t.sheets[M].toLowerCase() ==
                            w.SheetNames[_].toLowerCase() &&
                          (N = 1);
                    if (!N) continue t;
                  }
              }
            !(function (e, t, r, n, a, s, i, o, c, l, f, h) {
              try {
                s[n] = rY(e$(e, r, !0), t);
                var u,
                  d,
                  p,
                  m = ej(e, t);
                switch (o) {
                  case "sheet":
                    (g = s[n]),
                      (p =
                        ".bin" === t.slice(-4)
                          ? (function (e, t, r, n, a, s, i) {
                              if (!e) return e;
                              var o,
                                c,
                                l,
                                f,
                                h,
                                u,
                                d,
                                p,
                                m,
                                g,
                                v = t || {};
                              n || (n = { "!id": {} });
                              var b = v.dense ? [] : {},
                                E = {
                                  s: { r: 2e6, c: 2e6 },
                                  e: { r: 0, c: 0 },
                                },
                                S = [],
                                w = !1,
                                C = !1,
                                B = [];
                              (v.biff = 12), (v["!row"] = 0);
                              var T = 0,
                                x = !1,
                                _ = [],
                                k = {},
                                A = v.supbooks || a.supbooks || [[]];
                              if (
                                ((A.sharedf = k),
                                (A.arrayf = _),
                                (A.SheetNames =
                                  a.SheetNames ||
                                  a.Sheets.map(function (e) {
                                    return e.name;
                                  })),
                                !v.supbooks && ((v.supbooks = A), a.Names))
                              )
                                for (var I = 0; I < a.Names.length; ++I)
                                  A[0][I + 1] = a.Names[I];
                              var y = [],
                                R = [],
                                F = !1;
                              if (
                                ((iv[16] = { n: "BrtShortReal", f: sQ }),
                                t0(
                                  e,
                                  function (e, t, I) {
                                    if (!C)
                                      switch (I) {
                                        case 148:
                                          o = e;
                                          break;
                                        case 0:
                                          (c = e),
                                            v.sheetRows &&
                                              v.sheetRows <= c.r &&
                                              (C = !0),
                                            (m = t9((h = c.r))),
                                            (v["!row"] = c.r),
                                            (e.hidden ||
                                              e.hpt ||
                                              null != e.level) &&
                                              (e.hpt && (e.hpx = aI(e.hpt)),
                                              (R[e.r] = e));
                                          break;
                                        case 2:
                                        case 3:
                                        case 4:
                                        case 5:
                                        case 6:
                                        case 7:
                                        case 8:
                                        case 9:
                                        case 10:
                                        case 11:
                                        case 13:
                                        case 14:
                                        case 15:
                                        case 16:
                                        case 17:
                                        case 18:
                                          switch (((l = { t: e[2] }), e[2])) {
                                            case "n":
                                              l.v = e[1];
                                              break;
                                            case "s":
                                              (p = s_[e[1]]),
                                                (l.v = p.t),
                                                (l.r = p.r);
                                              break;
                                            case "b":
                                              l.v = !!e[1];
                                              break;
                                            case "e":
                                              (l.v = e[1]),
                                                !1 !== v.cellText &&
                                                  (l.w = rU[l.v]);
                                              break;
                                            case "str":
                                              (l.t = "s"), (l.v = e[1]);
                                          }
                                          if (
                                            ((f = i.CellXf[e[0].iStyleRef]) &&
                                              sD(l, f.numFmtId, null, v, s, i),
                                            (u = -1 == e[0].c ? u + 1 : e[0].c),
                                            v.dense
                                              ? (b[h] || (b[h] = []),
                                                (b[h][u] = l))
                                              : (b[rt(u) + m] = l),
                                            v.cellFormula)
                                          ) {
                                            for (
                                              T = 0, x = !1;
                                              T < _.length;
                                              ++T
                                            ) {
                                              var D = _[T];
                                              c.r >= D[0].s.r &&
                                                c.r <= D[0].e.r &&
                                                u >= D[0].s.c &&
                                                u <= D[0].e.c &&
                                                ((l.F = rs(D[0])), (x = !0));
                                            }
                                            !x && e.length > 3 && (l.f = e[3]);
                                          }
                                          if (
                                            (E.s.r > c.r && (E.s.r = c.r),
                                            E.s.c > u && (E.s.c = u),
                                            E.e.r < c.r && (E.e.r = c.r),
                                            E.e.c < u && (E.e.c = u),
                                            v.cellDates &&
                                              f &&
                                              "n" == l.t &&
                                              ev.is_date(ev._table[f.numFmtId]))
                                          ) {
                                            var O = ev.parse_date_code(l.v);
                                            O &&
                                              ((l.t = "d"),
                                              (l.v = new Date(
                                                O.y,
                                                O.m - 1,
                                                O.d,
                                                O.H,
                                                O.M,
                                                O.S,
                                                O.u
                                              )));
                                          }
                                          break;
                                        case 1:
                                        case 12:
                                          if (!v.sheetStubs || w) break;
                                          (l = { t: "z", v: void 0 }),
                                            (u = -1 == e[0].c ? u + 1 : e[0].c),
                                            v.dense
                                              ? (b[h] || (b[h] = []),
                                                (b[h][u] = l))
                                              : (b[rt(u) + m] = l),
                                            E.s.r > c.r && (E.s.r = c.r),
                                            E.s.c > u && (E.s.c = u),
                                            E.e.r < c.r && (E.e.r = c.r),
                                            E.e.c < u && (E.e.c = u);
                                          break;
                                        case 176:
                                          B.push(e);
                                          break;
                                        case 494:
                                          var P = n["!id"][e.relId];
                                          for (
                                            P
                                              ? ((e.Target = P.Target),
                                                e.loc &&
                                                  (e.Target += "#" + e.loc),
                                                (e.Rel = P))
                                              : "" == e.relId &&
                                                (e.Target = "#" + e.loc),
                                              h = e.rfx.s.r;
                                            h <= e.rfx.e.r;
                                            ++h
                                          )
                                            for (
                                              u = e.rfx.s.c;
                                              u <= e.rfx.e.c;
                                              ++u
                                            )
                                              v.dense
                                                ? (b[h] || (b[h] = []),
                                                  b[h][u] ||
                                                    (b[h][u] = {
                                                      t: "z",
                                                      v: void 0,
                                                    }),
                                                  (b[h][u].l = e))
                                                : (b[
                                                    (d = rn({ c: u, r: h }))
                                                  ] ||
                                                    (b[d] = {
                                                      t: "z",
                                                      v: void 0,
                                                    }),
                                                  (b[d].l = e));
                                          break;
                                        case 426:
                                          if (!v.cellFormula) break;
                                          _.push(e),
                                            ((g = v.dense
                                              ? b[h][u]
                                              : b[rt(u) + m]).f = sv(
                                              e[1],
                                              E,
                                              { r: c.r, c: u },
                                              A,
                                              v
                                            )),
                                            (g.F = rs(e[0]));
                                          break;
                                        case 427:
                                          if (!v.cellFormula) break;
                                          (k[rn(e[0].s)] = e[1]),
                                            ((g = v.dense
                                              ? b[h][u]
                                              : b[rt(u) + m]).f = sv(
                                              e[1],
                                              E,
                                              { r: c.r, c: u },
                                              A,
                                              v
                                            ));
                                          break;
                                        case 60:
                                          if (!v.cellStyles) break;
                                          for (; e.e >= e.s; )
                                            (y[e.e--] = {
                                              width: e.w / 256,
                                              hidden: !!(1 & e.flags),
                                              level: e.level,
                                            }),
                                              F || ((F = !0), a_(e.w / 256)),
                                              ak(y[e.e + 1]);
                                          break;
                                        case 161:
                                          b["!autofilter"] = { ref: rs(e) };
                                          break;
                                        case 476:
                                          b["!margins"] = e;
                                          break;
                                        case 147:
                                          a.Sheets[r] || (a.Sheets[r] = {}),
                                            e.name &&
                                              (a.Sheets[r].CodeName = e.name);
                                          break;
                                        case 137:
                                          a.Views || (a.Views = [{}]),
                                            a.Views[0] || (a.Views[0] = {}),
                                            e.RTL && (a.Views[0].RTL = !0);
                                          break;
                                        case 485:
                                        case 64:
                                        case 1053:
                                        case 151:
                                        case 152:
                                        case 175:
                                        case 644:
                                        case 625:
                                        case 562:
                                        case 396:
                                        case 1112:
                                        case 1146:
                                        case 471:
                                        case 1050:
                                        case 649:
                                        case 1105:
                                        case 49:
                                        case 589:
                                        case 607:
                                        case 564:
                                        case 1055:
                                        case 168:
                                        case 174:
                                        case 1180:
                                        case 499:
                                        case 507:
                                        case 550:
                                        case 171:
                                        case 167:
                                        case 1177:
                                        case 169:
                                        case 1181:
                                        case 551:
                                        case 552:
                                        case 661:
                                        case 639:
                                        case 478:
                                        case 537:
                                        case 477:
                                        case 536:
                                        case 1103:
                                        case 680:
                                        case 1104:
                                        case 1024:
                                        case 663:
                                        case 535:
                                        case 678:
                                        case 504:
                                        case 1043:
                                        case 428:
                                        case 170:
                                        case 3072:
                                        case 50:
                                        case 2070:
                                        case 1045:
                                          break;
                                        case 35:
                                          w = !0;
                                          break;
                                        case 36:
                                          w = !1;
                                          break;
                                        case 37:
                                          S.push(t), (w = !0);
                                          break;
                                        case 38:
                                          S.pop(), (w = !1);
                                          break;
                                        default:
                                          if ((t || "").indexOf("Begin") > 0);
                                          else if (
                                            (t || "").indexOf("End") > 0
                                          );
                                          else if (!w || v.WTF)
                                            throw Error(
                                              "Unexpected record " + I + " " + t
                                            );
                                      }
                                  },
                                  v
                                ),
                                delete v.supbooks,
                                delete v["!row"],
                                !b["!ref"] &&
                                  (E.s.r < 2e6 ||
                                    (o &&
                                      (o.e.r > 0 ||
                                        o.e.c > 0 ||
                                        o.s.r > 0 ||
                                        o.s.c > 0))) &&
                                  (b["!ref"] = rs(o || E)),
                                v.sheetRows && b["!ref"])
                              ) {
                                var D = ri(b["!ref"]);
                                v.sheetRows <= +D.e.r &&
                                  ((D.e.r = v.sheetRows - 1),
                                  D.e.r > E.e.r && (D.e.r = E.e.r),
                                  D.e.r < D.s.r && (D.s.r = D.e.r),
                                  D.e.c > E.e.c && (D.e.c = E.e.c),
                                  D.e.c < D.s.c && (D.s.c = D.e.c),
                                  (b["!fullref"] = b["!ref"]),
                                  (b["!ref"] = rs(D)));
                              }
                              return (
                                B.length > 0 && (b["!merges"] = B),
                                y.length > 0 && (b["!cols"] = y),
                                R.length > 0 && (b["!rows"] = R),
                                b
                              );
                            })(m, c, a, g, l, f, h)
                          : (function (e, t, r, n, a, s, i) {
                              if (!e) return e;
                              n || (n = { "!id": {} });
                              var o = t.dense ? [] : {},
                                c = {
                                  s: { r: 2e6, c: 2e6 },
                                  e: { r: 0, c: 0 },
                                },
                                l = "",
                                f = "",
                                h = e.match(sP);
                              h
                                ? ((l = e.slice(0, h.index)),
                                  (f = e.slice(h.index + h[0].length)))
                                : (l = f = e);
                              var u = l.match(sW);
                              u && sX(u[0], o, a, r);
                              var d = (
                                l.match(/<(?:\w*:)?dimension/) || { index: -1 }
                              ).index;
                              if (d > 0) {
                                var p,
                                  m,
                                  g = l.slice(d, d + 50).match(sM);
                                g &&
                                  ((p = o),
                                  (m = ri(g[1])).s.r <= m.e.r &&
                                    m.s.c <= m.e.c &&
                                    m.s.r >= 0 &&
                                    m.s.c >= 0 &&
                                    (p["!ref"] = rs(m)));
                              }
                              var v = l.match(sV);
                              v &&
                                v[1] &&
                                (function (e, t) {
                                  t.Views || (t.Views = [{}]),
                                    (e.match(sj) || []).forEach(function (
                                      e,
                                      r
                                    ) {
                                      var n = e2(e);
                                      t.Views[r] || (t.Views[r] = {}),
                                        +n.zoomScale &&
                                          (t.Views[r].zoom = +n.zoomScale),
                                        ta(n.rightToLeft) &&
                                          (t.Views[r].RTL = !0);
                                    });
                                })(v[1], a);
                              var b = [];
                              if (t.cellStyles) {
                                var E = l.match(sL);
                                E &&
                                  (function (e, t) {
                                    for (
                                      var r = !1, n = 0;
                                      n != t.length;
                                      ++n
                                    ) {
                                      var a = e2(t[n], !0);
                                      a.hidden && (a.hidden = ta(a.hidden));
                                      var s = parseInt(a.min, 10) - 1,
                                        i = parseInt(a.max, 10) - 1;
                                      for (
                                        delete a.min,
                                          delete a.max,
                                          a.width = +a.width,
                                          !r &&
                                            a.width &&
                                            ((r = !0), a_(a.width)),
                                          ak(a);
                                        s <= i;
                                      )
                                        e[s++] = eL(a);
                                    }
                                  })(b, E);
                              }
                              h && s$(h[1], o, t, c, s, i);
                              var S = f.match(sU);
                              S &&
                                (o["!autofilter"] = {
                                  ref: (S[0].match(/ref="([^"]*)"/) || [])[1],
                                });
                              var w = [],
                                C = f.match(sO);
                              if (C)
                                for (d = 0; d != C.length; ++d)
                                  w[d] = ri(C[d].slice(C[d].indexOf('"') + 1));
                              var B = f.match(sN);
                              B &&
                                (function (e, t, r) {
                                  for (
                                    var n = Array.isArray(e), a = 0;
                                    a != t.length;
                                    ++a
                                  ) {
                                    var s = e2(ts(t[a]), !0);
                                    if (!s.ref) return;
                                    var i = ((r || {})["!id"] || [])[s.id];
                                    i
                                      ? ((s.Target = i.Target),
                                        s.location &&
                                          (s.Target += "#" + s.location))
                                      : ((s.Target = "#" + s.location),
                                        (i = {
                                          Target: s.Target,
                                          TargetMode: "Internal",
                                        })),
                                      (s.Rel = i),
                                      s.tooltip &&
                                        ((s.Tooltip = s.tooltip),
                                        delete s.tooltip);
                                    for (
                                      var o = ri(s.ref), c = o.s.r;
                                      c <= o.e.r;
                                      ++c
                                    )
                                      for (var l = o.s.c; l <= o.e.c; ++l) {
                                        var f = rn({ c: l, r: c });
                                        n
                                          ? (e[c] || (e[c] = []),
                                            e[c][l] ||
                                              (e[c][l] = { t: "z", v: void 0 }),
                                            (e[c][l].l = s))
                                          : (e[f] ||
                                              (e[f] = { t: "z", v: void 0 }),
                                            (e[f].l = s));
                                      }
                                  }
                                })(o, B, n);
                              var T = f.match(sH);
                              if (
                                (T &&
                                  (o["!margins"] = (function (e) {
                                    var t = {};
                                    return (
                                      [
                                        "left",
                                        "right",
                                        "top",
                                        "bottom",
                                        "header",
                                        "footer",
                                      ].forEach(function (r) {
                                        e[r] && (t[r] = parseFloat(e[r]));
                                      }),
                                      t
                                    );
                                  })(e2(T[0]))),
                                !o["!ref"] &&
                                  c.e.c >= c.s.c &&
                                  c.e.r >= c.s.r &&
                                  (o["!ref"] = rs(c)),
                                t.sheetRows > 0 && o["!ref"])
                              ) {
                                var x = ri(o["!ref"]);
                                t.sheetRows <= +x.e.r &&
                                  ((x.e.r = t.sheetRows - 1),
                                  x.e.r > c.e.r && (x.e.r = c.e.r),
                                  x.e.r < x.s.r && (x.s.r = x.e.r),
                                  x.e.c > c.e.c && (x.e.c = c.e.c),
                                  x.e.c < x.s.c && (x.s.c = x.e.c),
                                  (o["!fullref"] = o["!ref"]),
                                  (o["!ref"] = rs(x)));
                              }
                              return (
                                b.length > 0 && (o["!cols"] = b),
                                w.length > 0 && (o["!merges"] = w),
                                o
                              );
                            })(m, c, a, g, l, f, h));
                    break;
                  case "chart":
                    if (
                      ((v = s[n]),
                      !(p =
                        ".bin" === t.slice(-4)
                          ? (function (e, t, r, n, a) {
                              if (!e) return e;
                              n || (n = { "!id": {} });
                              var s = {
                                  "!type": "chart",
                                  "!drawel": null,
                                  "!rel": "",
                                },
                                i = [],
                                o = !1;
                              return (
                                t0(
                                  e,
                                  function (e, n, c) {
                                    switch (c) {
                                      case 550:
                                        s["!rel"] = e;
                                        break;
                                      case 651:
                                        a.Sheets[r] || (a.Sheets[r] = {}),
                                          e.name &&
                                            (a.Sheets[r].CodeName = e.name);
                                        break;
                                      case 562:
                                      case 652:
                                      case 669:
                                      case 679:
                                      case 551:
                                      case 552:
                                      case 476:
                                      case 3072:
                                        break;
                                      case 35:
                                        o = !0;
                                        break;
                                      case 36:
                                        o = !1;
                                        break;
                                      case 37:
                                        i.push(n);
                                        break;
                                      case 38:
                                        i.pop();
                                        break;
                                      default:
                                        if ((n || "").indexOf("Begin") > 0)
                                          i.push(n);
                                        else if ((n || "").indexOf("End") > 0)
                                          i.pop();
                                        else if (!o || t.WTF)
                                          throw Error(
                                            "Unexpected record " + c + " " + n
                                          );
                                    }
                                  },
                                  t
                                ),
                                n["!id"][s["!rel"]] &&
                                  (s["!drawel"] = n["!id"][s["!rel"]]),
                                s
                              );
                            })(m, c, a, v, l, f, h)
                          : (function (e, t, r, n, a) {
                              if (!e) return e;
                              n || (n = { "!id": {} });
                              var s,
                                i = {
                                  "!type": "chart",
                                  "!drawel": null,
                                  "!rel": "",
                                },
                                o = e.match(sW);
                              return (
                                o && sX(o[0], i, a, r),
                                (s = e.match(/drawing r:id="(.*?)"/)) &&
                                  (i["!rel"] = s[1]),
                                n["!id"][i["!rel"]] &&
                                  (i["!drawel"] = n["!id"][i["!rel"]]),
                                i
                              );
                            })(m, 0, a, v, l, f, h)) || !p["!drawel"])
                    )
                      break;
                    var g,
                      v,
                      b = eQ(p["!drawel"].Target, t),
                      E = rK(b),
                      S = (function (e, t) {
                        if (!e) return "??";
                        var r = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || [
                          "",
                          "",
                        ])[1];
                        return t["!id"][r].Target;
                      })(e$(e, b, !0), rY(e$(e, E, !0), b)),
                      w = eQ(S, b),
                      C = rK(w);
                    p = (function (e, t, r, n, a, s) {
                      var i = s || { "!type": "chart" };
                      if (!e) return s;
                      var o = 0,
                        c = 0,
                        l = "A",
                        f = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
                      return (
                        (
                          e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []
                        ).forEach(function (e) {
                          var t = (function (e) {
                            var t,
                              r = [],
                              n = e.match(/^<c:numCache>/);
                            (
                              e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm) || []
                            ).forEach(function (e) {
                              var t = e.match(
                                /<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/
                              );
                              t && (r[+t[1]] = n ? +t[2] : t[2]);
                            });
                            var a = e6(
                              (e.match(
                                /<c:formatCode>([\s\S]*?)<\/c:formatCode>/
                              ) || ["", "General"])[1]
                            );
                            return (
                              (e.match(/<c:f>(.*?)<\/c:f>/gm) || []).forEach(
                                function (e) {
                                  t = e.replace(/<.*?>/g, "");
                                }
                              ),
                              [r, a, t]
                            );
                          })(e);
                          (f.s.r = f.s.c = 0),
                            (f.e.c = o),
                            (l = rt(o)),
                            t[0].forEach(function (e, r) {
                              (i[l + t9(r)] = { t: "n", v: e, z: t[1] }),
                                (c = r);
                            }),
                            f.e.r < c && (f.e.r = c),
                            ++o;
                        }),
                        o > 0 && (i["!ref"] = rs(f)),
                        i
                      );
                    })(e$(e, w, !0), 0, 0, rY(e$(e, C, !0), w), 0, p);
                    break;
                  case "macro":
                    s[n], t.slice(-4), (p = { "!type": "macro" });
                    break;
                  case "dialog":
                    s[n], t.slice(-4), (p = { "!type": "dialog" });
                    break;
                  default:
                    throw Error("Unrecognized sheet type " + o);
                }
                i[n] = p;
                var B = [];
                s &&
                  s[n] &&
                  eT(s[n]).forEach(function (r) {
                    if (s[n][r].Type == r$.CMNT) {
                      var a = eQ(s[n][r].Target, t);
                      (B = (function (e, t, r) {
                        if (".bin" === t.slice(-4)) {
                          var n, a, s, i;
                          return (
                            (n = []),
                            (a = []),
                            (s = {}),
                            (i = !1),
                            t0(e, function (e, t, o) {
                              switch (o) {
                                case 632:
                                  a.push(e);
                                  break;
                                case 635:
                                  s = e;
                                  break;
                                case 637:
                                  (s.t = e.t), (s.h = e.h), (s.r = e.r);
                                  break;
                                case 636:
                                  if (
                                    ((s.author = a[s.iauthor]),
                                    delete s.iauthor,
                                    r.sheetRows &&
                                      s.rfx &&
                                      r.sheetRows <= s.rfx.r)
                                  )
                                    break;
                                  s.t || (s.t = ""), delete s.rfx, n.push(s);
                                  break;
                                case 3072:
                                case 37:
                                case 38:
                                  break;
                                case 35:
                                  i = !0;
                                  break;
                                case 36:
                                  i = !1;
                                  break;
                                default:
                                  if ((t || "").indexOf("Begin") > 0);
                                  else if ((t || "").indexOf("End") > 0);
                                  else if (!i || r.WTF)
                                    throw Error(
                                      "Unexpected record " + o + " " + t
                                    );
                              }
                            }),
                            n
                          );
                        }
                        return (function (e, t) {
                          if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
                          var r = [],
                            n = [],
                            a = e.match(
                              /<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/
                            );
                          a &&
                            a[1] &&
                            a[1].split(/<\/\w*:?author>/).forEach(function (e) {
                              if ("" !== e && "" !== e.trim()) {
                                var t = e.match(/<(?:\w+:)?author[^>]*>(.*)/);
                                t && r.push(t[1]);
                              }
                            });
                          var s = e.match(
                            /<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/
                          );
                          return (
                            s &&
                              s[1] &&
                              s[1].split(/<\/\w*:?comment>/).forEach(function (
                                e
                              ) {
                                if ("" !== e && "" !== e.trim()) {
                                  var a = e.match(/<(?:\w+:)?comment[^>]*>/);
                                  if (a) {
                                    var s = e2(a[0]),
                                      i = {
                                        author:
                                          (s.authorId && r[s.authorId]) ||
                                          "sheetjsghost",
                                        ref: s.ref,
                                        guid: s.guid,
                                      },
                                      o = rr(s.ref);
                                    if (!t.sheetRows || !(t.sheetRows <= o.r)) {
                                      var c = e.match(
                                          /<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/
                                        ),
                                        l = (!!c && !!c[1] && ar(c[1])) || {
                                          r: "",
                                          t: "",
                                          h: "",
                                        };
                                      (i.r = l.r),
                                        "<t></t>" == l.r && (l.t = l.h = ""),
                                        (i.t = (l.t || "")
                                          .replace(/\r\n/g, "\n")
                                          .replace(/\r/g, "\n")),
                                        t.cellHTML && (i.h = l.h),
                                        n.push(i);
                                    }
                                  }
                                }
                              }),
                            n
                          );
                        })(e, r);
                      })(ej(e, a, !0), a, c)) &&
                        B.length &&
                        (function (e, t) {
                          var r,
                            n = Array.isArray(e);
                          t.forEach(function (t) {
                            var a = rr(t.ref);
                            if (
                              (n
                                ? (e[a.r] || (e[a.r] = []), (r = e[a.r][a.c]))
                                : (r = e[t.ref]),
                              !r)
                            ) {
                              (r = { t: "z" }),
                                n ? (e[a.r][a.c] = r) : (e[t.ref] = r);
                              var s = ri(e["!ref"] || "BDWGO1000001:A1");
                              s.s.r > a.r && (s.s.r = a.r),
                                s.e.r < a.r && (s.e.r = a.r),
                                s.s.c > a.c && (s.s.c = a.c),
                                s.e.c < a.c && (s.e.c = a.c);
                              var i = rs(s);
                              i !== e["!ref"] && (e["!ref"] = i);
                            }
                            r.c || (r.c = []);
                            var o = { a: t.author, t: t.t, r: t.r };
                            t.h && (o.h = t.h), r.c.push(o);
                          });
                        })(p, B);
                    }
                  });
              } catch (e) {
                if (c.WTF) throw e;
              }
            })(e, d, p, w.SheetNames[_], _, k, h, P, t, S, b, E);
          }
          return (
            (T = {
              Directory: g,
              Workbook: S,
              Props: w,
              Custprops: B,
              Deps: x,
              Sheets: h,
              SheetNames: w.SheetNames,
              Strings: s_,
              Styles: E,
              Themes: b,
              SSF: ev.get_table(),
            }),
            t && t.bookFiles && ((T.keys = m), (T.files = e.files)),
            t &&
              t.bookVBA &&
              (g.vba.length > 0
                ? (T.vbaraw = ej(e, iz(g.vba[0]), !0))
                : g.defaults &&
                  "application/vnd.ms-office.vbaProject" === g.defaults.bin &&
                  (T.vbaraw = ej(e, "xl/vbaProject.bin", !0))),
            T
          );
        }
        function i$(e, t) {
          var r = "";
          switch ((t || {}).type || "base64") {
            case "buffer":
            case "array":
              return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
            case "base64":
              r = ea.decode(e.slice(0, 12));
              break;
            case "binary":
              r = e;
              break;
            default:
              throw Error(
                "Unrecognized type " + ((t && t.type) || "undefined")
              );
          }
          return [
            r.charCodeAt(0),
            r.charCodeAt(1),
            r.charCodeAt(2),
            r.charCodeAt(3),
            r.charCodeAt(4),
            r.charCodeAt(5),
            r.charCodeAt(6),
            r.charCodeAt(7),
          ];
        }
        function iK(e, t) {
          var r = 0;
          r: for (; r < e.length; )
            switch (e.charCodeAt(r)) {
              case 10:
              case 13:
              case 32:
                ++r;
                break;
              case 60:
                return ih(e.slice(r), t);
              default:
                break r;
            }
          return n5.to_workbook(e, t);
        }
        function iY(e, t, r, n) {
          return n
            ? ((r.type = "string"), n5.to_workbook(e, r))
            : n5.to_workbook(t, r);
        }
        function iQ(e, t) {
          if (
            (q(), "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer)
          )
            return iQ(new Uint8Array(e), t);
          var r,
            a,
            s,
            i,
            o,
            c,
            l,
            f = e,
            h = [0, 0, 0, 0],
            u = !1,
            d = t || {};
          if (
            (d.cellStyles && ((d.cellNF = !0), (d.sheetStubs = !0)),
            (sk = {}),
            d.dateNF && (sk.dateNF = d.dateNF),
            d.type || (d.type = es && n.isBuffer(e) ? "buffer" : "base64"),
            "file" == d.type &&
              ((d.type = es ? "buffer" : "binary"),
              (f = (function (e) {
                if (void 0 !== U) return U.readFileSync(e);
                if (
                  "undefined" != typeof $ &&
                  "undefined" != typeof File &&
                  "undefined" != typeof Folder
                )
                  try {
                    var t = File(e);
                    t.open("r"), (t.encoding = "binary");
                    var r = t.read();
                    return t.close(), r;
                  } catch (e) {
                    if (!e.message || !e.message.match(/onstruct/)) throw e;
                  }
                throw Error("Cannot access file " + e);
              })(e))),
            "string" == d.type &&
              ((u = !0),
              (d.type = "binary"),
              (d.codepage = 65001),
              (f = e.match(/[^\x00-\x7F]/) ? ti(e) : e)),
            "array" == d.type &&
              "undefined" != typeof Uint8Array &&
              e instanceof Uint8Array &&
              "undefined" != typeof ArrayBuffer)
          ) {
            var p = new ArrayBuffer(3),
              m = new Uint8Array(p);
            if (((m.foo = "bar"), !m.foo))
              return ((d = eL(d)).type = "array"), iQ(ed(f), d);
          }
          switch ((h = i$(f, d))[0]) {
            case 208:
              if (
                207 === h[1] &&
                17 === h[2] &&
                224 === h[3] &&
                161 === h[4] &&
                177 === h[5] &&
                26 === h[6] &&
                225 === h[7]
              )
                return (
                  (s = eC.read(f, d)),
                  (i = d),
                  eC.find(s, "EncryptedPackage")
                    ? (function (e, t) {
                        var r = t || {},
                          n = "Workbook",
                          a = eC.find(e, n);
                        try {
                          if (
                            ((n = "/!DataSpaces/Version"),
                            !(a = eC.find(e, n)) ||
                              !a.content ||
                              ((s = a.content),
                              ((i = {}).id = s.read_shift(0, "lpp4")),
                              (i.R = ah(s, 4)),
                              (i.U = ah(s, 4)),
                              (i.W = ah(s, 4)),
                              (n = "/!DataSpaces/DataSpaceMap"),
                              !(a = eC.find(e, n)) || !a.content))
                          )
                            throw Error("ECMA-376 Encrypted file missing " + n);
                          var s,
                            i,
                            o = (function (e) {
                              var t = [];
                              e.l += 4;
                              for (var r = e.read_shift(4); r-- > 0; )
                                t.push(
                                  (function (e) {
                                    for (
                                      var t = e.read_shift(4),
                                        r = e.l + t - 4,
                                        n = {},
                                        a = e.read_shift(4),
                                        s = [];
                                      a-- > 0;
                                    )
                                      s.push({
                                        t: e.read_shift(4),
                                        v: e.read_shift(0, "lpp4"),
                                      });
                                    if (
                                      ((n.name = e.read_shift(0, "lpp4")),
                                      (n.comps = s),
                                      e.l != r)
                                    )
                                      throw Error(
                                        "Bad DataSpaceMapEntry: " +
                                          e.l +
                                          " != " +
                                          r
                                      );
                                    return n;
                                  })(e)
                                );
                              return t;
                            })(a.content);
                          if (
                            1 !== o.length ||
                            1 !== o[0].comps.length ||
                            0 !== o[0].comps[0].t ||
                            "StrongEncryptionDataSpace" !== o[0].name ||
                            "EncryptedPackage" !== o[0].comps[0].v
                          )
                            throw Error("ECMA-376 Encrypted file bad " + n);
                          if (
                            ((n =
                              "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace"),
                            !(a = eC.find(e, n)) || !a.content)
                          )
                            throw Error("ECMA-376 Encrypted file missing " + n);
                          var c = (function (e) {
                            var t = [];
                            e.l += 4;
                            for (var r = e.read_shift(4); r-- > 0; )
                              t.push(e.read_shift(0, "lpp4"));
                            return t;
                          })(a.content);
                          if (
                            1 != c.length ||
                            "StrongEncryptionTransform" != c[0]
                          )
                            throw Error("ECMA-376 Encrypted file bad " + n);
                          if (
                            ((n =
                              "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary"),
                            !(a = eC.find(e, n)) || !a.content)
                          )
                            throw Error("ECMA-376 Encrypted file missing " + n);
                          !(function (e) {
                            var t,
                              r,
                              n =
                                ((r = {}),
                                (t = e).read_shift(4),
                                (t.l += 4),
                                (r.id = t.read_shift(0, "lpp4")),
                                (r.name = t.read_shift(0, "lpp4")),
                                (r.R = ah(t, 4)),
                                (r.U = ah(t, 4)),
                                (r.W = ah(t, 4)),
                                r);
                            if (
                              ((n.ename = e.read_shift(0, "8lpp4")),
                              (n.blksz = e.read_shift(4)),
                              (n.cmode = e.read_shift(4)),
                              4 != e.read_shift(4))
                            )
                              throw Error("Bad !Primary record");
                          })(a.content);
                        } catch (e) {}
                        if (
                          ((n = "/EncryptionInfo"),
                          !(a = eC.find(e, n)) || !a.content)
                        )
                          throw Error("ECMA-376 Encrypted file missing " + n);
                        var l = (function (e) {
                          var t,
                            r,
                            n,
                            a,
                            s = ah(e);
                          switch (s.Minor) {
                            case 2:
                              return [
                                s.Minor,
                                (function (e) {
                                  if ((63 & e.read_shift(4)) != 36)
                                    throw Error("EncryptionInfo mismatch");
                                  var t = e.read_shift(4);
                                  return {
                                    t: "Std",
                                    h: au(e, t),
                                    v: ad(e, e.length - e.l),
                                  };
                                })(e, s),
                              ];
                            case 3:
                              return [
                                s.Minor,
                                (function () {
                                  throw Error(
                                    "File is password-protected: ECMA-376 Extensible"
                                  );
                                })(e, s),
                              ];
                            case 4:
                              return [
                                s.Minor,
                                ((t = e),
                                (r = [
                                  "saltSize",
                                  "blockSize",
                                  "keyBits",
                                  "hashSize",
                                  "cipherAlgorithm",
                                  "cipherChaining",
                                  "hashAlgorithm",
                                  "saltValue",
                                ]),
                                (t.l += 4),
                                (n = t.read_shift(t.length - t.l, "utf8")),
                                (a = {}),
                                n.replace(eq, function (e) {
                                  var t = e2(e);
                                  switch (e4(t[0])) {
                                    case "<?xml":
                                    case "<encryption":
                                    case "</encryption>":
                                    case "</keyEncryptors>":
                                    case "</keyEncryptor>":
                                      break;
                                    case "<keyData":
                                      r.forEach(function (e) {
                                        a[e] = t[e];
                                      });
                                      break;
                                    case "<dataIntegrity":
                                      (a.encryptedHmacKey = t.encryptedHmacKey),
                                        (a.encryptedHmacValue =
                                          t.encryptedHmacValue);
                                      break;
                                    case "<keyEncryptors>":
                                    case "<keyEncryptors":
                                      a.encs = [];
                                      break;
                                    case "<keyEncryptor":
                                      a.uri = t.uri;
                                      break;
                                    case "<encryptedKey":
                                      a.encs.push(t);
                                      break;
                                    default:
                                      throw t[0];
                                  }
                                }),
                                a),
                              ];
                          }
                          throw Error(
                            "ECMA-376 Encrypted file unrecognized Version: " +
                              s.Minor
                          );
                        })(a.content);
                        if (
                          ((n = "/EncryptedPackage"),
                          !(a = eC.find(e, n)) || !a.content)
                        )
                          throw Error("ECMA-376 Encrypted file missing " + n);
                        if (4 == l[0] && "undefined" != typeof decrypt_agile)
                          return decrypt_agile(
                            l[1],
                            a.content,
                            r.password || "",
                            r
                          );
                        if (2 == l[0] && "undefined" != typeof decrypt_std76)
                          return decrypt_std76(
                            l[1],
                            a.content,
                            r.password || "",
                            r
                          );
                        throw Error("File is password-protected");
                      })(s, i)
                    : ig(s, i)
                );
              break;
            case 9:
              if (h[1] <= 4) return ig(f, d);
              break;
            case 60:
              return ih(f, d);
            case 73:
              if (73 === h[1] && 42 === h[2] && 0 === h[3])
                throw Error("TIFF Image File is not a spreadsheet");
              if (68 === h[1])
                return (function (e, t) {
                  var r = t || {},
                    n = !!r.WTF;
                  r.WTF = !0;
                  try {
                    var a = n2.to_workbook(e, r);
                    return (r.WTF = n), a;
                  } catch (a) {
                    if (
                      ((r.WTF = n), !a.message.match(/SYLK bad record ID/) && n)
                    )
                      throw a;
                    return n5.to_workbook(e, t);
                  }
                })(f, d);
              break;
            case 84:
              if (65 === h[1] && 66 === h[2] && 76 === h[3])
                return n4.to_workbook(f, d);
              break;
            case 80:
              return 75 === h[1] && h[2] < 9 && h[3] < 9
                ? ((r = f),
                  (a = d || {}).type ||
                    (a.type = es && n.isBuffer(r) ? "buffer" : "base64"),
                  ij(
                    (function (e, t) {
                      var r;
                      if (H)
                        switch (t.type) {
                          case "base64":
                            r = new H(e, { base64: !0 });
                            break;
                          case "binary":
                          case "array":
                            r = new H(e, { base64: !1 });
                            break;
                          case "buffer":
                            r = new H(e);
                            break;
                          default:
                            throw Error("Unrecognized type " + t.type);
                        }
                      else
                        switch (t.type) {
                          case "base64":
                            r = eC.read(e, { type: "base64" });
                            break;
                          case "binary":
                            r = eC.read(e, { type: "binary" });
                            break;
                          case "buffer":
                          case "array":
                            r = eC.read(e, { type: "buffer" });
                            break;
                          default:
                            throw Error("Unrecognized type " + t.type);
                        }
                      return r;
                    })(r, a),
                    a
                  ))
                : iY(e, f, d, u);
            case 239:
              return 60 === h[3] ? ih(f, d) : iY(e, f, d, u);
            case 255:
              if (254 === h[1])
                return (
                  (o = f),
                  (c = d),
                  (l = o),
                  "base64" == c.type && (l = ea.decode(l)),
                  (l = cptable.utils.decode(1200, l.slice(2), "str")),
                  (c.type = "binary"),
                  iK(l, c)
                );
              break;
            case 0:
              if (0 === h[1] && h[2] >= 2 && 0 === h[3])
                return n6.to_workbook(f, d);
              break;
            case 3:
            case 131:
            case 139:
            case 140:
              return n0.to_workbook(f, d);
            case 123:
              if (92 === h[1] && 114 === h[2] && 116 === h[3])
                return ab.to_workbook(f, d);
              break;
            case 10:
            case 13:
            case 32:
              return (function (e, t) {
                var r = "",
                  n = i$(e, t);
                switch (t.type) {
                  case "base64":
                    r = ea.decode(e);
                    break;
                  case "binary":
                    r = e;
                    break;
                  case "buffer":
                    r = e.toString("binary");
                    break;
                  case "array":
                    r = eM(e);
                    break;
                  default:
                    throw Error("Unrecognized type " + t.type);
                }
                return (
                  239 == n[0] && 187 == n[1] && 191 == n[2] && (r = ts(r)),
                  iK(r, t)
                );
              })(f, d);
          }
          return n0.versions.indexOf(h[0]) > -1 && h[2] <= 12 && h[3] <= 31
            ? n0.to_workbook(f, d)
            : iY(e, f, d, u);
        }
        function iJ(e, t) {
          var r = t || {};
          return (r.type = "file"), iQ(e, r);
        }
        function iZ(e, t) {
          switch (t.type) {
            case "base64":
            case "binary":
              break;
            case "buffer":
            case "array":
              t.type = "";
              break;
            case "file":
              return eB(t.file, eC.write(e, { type: es ? "buffer" : "" }));
            case "string":
              throw Error(
                "'string' output type invalid for '" + t.bookType + "' files"
              );
            default:
              throw Error("Unrecognized type " + t.type);
          }
          return eC.write(e, t);
        }
        function iq(e, t, r) {
          r || (r = "");
          var n = r + e;
          switch (t.type) {
            case "base64":
              return ea.encode(ti(n));
            case "binary":
              return ti(n);
            case "string":
              return e;
            case "file":
              return eB(t.file, n, "utf8");
            case "buffer":
              if (es) return ei(n, "utf8");
              return iq(n, { type: "binary" })
                .split("")
                .map(function (e) {
                  return e.charCodeAt(0);
                });
          }
          throw Error("Unrecognized type " + t.type);
        }
        function i1(e, t) {
          switch (t.type) {
            case "string":
            case "base64":
            case "binary":
              for (var r = "", n = 0; n < e.length; ++n)
                r += String.fromCharCode(e[n]);
              return "base64" == t.type
                ? ea.encode(r)
                : "string" == t.type
                  ? ts(r)
                  : r;
            case "file":
              return eB(t.file, e);
            case "buffer":
              return e;
            default:
              throw Error("Unrecognized type " + t.type);
          }
        }
        function i0(e, t) {
          q(),
            (function (e) {
              if (!e || !e.SheetNames || !e.Sheets)
                throw Error("Invalid Workbook");
              if (!e.SheetNames.length) throw Error("Workbook is empty");
              var t = (e.Workbook && e.Workbook.Sheets) || [];
              !(function (e, t, r) {
                e.forEach(function (n, a) {
                  s8(n);
                  for (var s = 0; s < a; ++s)
                    if (n == e[s]) throw Error("Duplicate Sheet Name: " + n);
                  if (r) {
                    var i = (t && t[a] && t[a].CodeName) || n;
                    if (95 == i.charCodeAt(0) && i.length > 22)
                      throw Error("Bad Code Name: Worksheet" + i);
                  }
                });
              })(e.SheetNames, t, !!e.vbaraw);
              for (var r = 0; r < e.SheetNames.length; ++r)
                !(function (e, t, r) {
                  if (e && e["!ref"]) {
                    var n = ri(e["!ref"]);
                    if (n.e.c < n.s.c || n.e.r < n.s.r)
                      throw Error("Bad range (" + r + "): " + e["!ref"]);
                  }
                })(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
            })(e);
          var r,
            n = t || {};
          if (
            (n.cellStyles && ((n.cellNF = !0), (n.sheetStubs = !0)),
            "array" == n.type)
          ) {
            n.type = "binary";
            var a = i0(e, n);
            return (n.type = "array"), eh(a);
          }
          switch (n.bookType || "xlsb") {
            case "xml":
            case "xlml":
              return iq(
                (function (e, t) {
                  t || (t = {}),
                    e.SSF || (e.SSF = ev.get_table()),
                    e.SSF &&
                      (eb(ev),
                      ev.load_table(e.SSF),
                      (t.revssf = ek(e.SSF)),
                      (t.revssf[e.SSF[65535]] = 0),
                      (t.ssf = e.SSF),
                      (t.cellXfs = []),
                      sF(t.cellXfs, {}, { revssf: { General: 0 } }));
                  var r,
                    n,
                    a,
                    s,
                    i,
                    o,
                    c,
                    l,
                    f,
                    h,
                    u,
                    d = [];
                  d.push(
                    ((r = e),
                    (n = t),
                    (h = []),
                    r.Props &&
                      h.push(
                        ((a = r.Props),
                        (s = []),
                        eT(nr)
                          .map(function (e) {
                            for (var t = 0; t < r2.length; ++t)
                              if (r2[t][1] == e) return r2[t];
                            for (t = 0; t < r8.length; ++t)
                              if (r8[t][1] == e) return r8[t];
                            throw e;
                          })
                          .forEach(function (e) {
                            if (null != a[e[1]]) {
                              var t =
                                n && n.Props && null != n.Props[e[1]]
                                  ? n.Props[e[1]]
                                  : a[e[1]];
                              "date" === e[2] &&
                                (t = new Date(t)
                                  .toISOString()
                                  .replace(/\.\d*Z/, "Z")),
                                "number" == typeof t
                                  ? (t = String(t))
                                  : !0 === t || !1 === t
                                    ? (t = t ? "1" : "0")
                                    : t instanceof Date &&
                                      (t = new Date(t)
                                        .toISOString()
                                        .replace(/\.\d*Z/, "")),
                                s.push(tv(nr[e[1]] || e[1], t));
                            }
                          }),
                        tE("DocumentProperties", s.join(""), { xmlns: tC.o }))
                      ),
                    r.Custprops &&
                      h.push(
                        ((i = r.Props),
                        (o = r.Custprops),
                        (c = ["Worksheets", "SheetNames"]),
                        (l = "CustomDocumentProperties"),
                        (f = []),
                        i &&
                          eT(i).forEach(function (e) {
                            if (Object.prototype.hasOwnProperty.call(i, e)) {
                              for (var t = 0; t < r2.length; ++t)
                                if (e == r2[t][1]) return;
                              for (t = 0; t < r8.length; ++t)
                                if (e == r8[t][1]) return;
                              for (t = 0; t < c.length; ++t)
                                if (e == c[t]) return;
                              var r = i[e],
                                n = "string";
                              "number" == typeof r
                                ? ((n = "float"), (r = String(r)))
                                : !0 === r || !1 === r
                                  ? ((n = "boolean"), (r = r ? "1" : "0"))
                                  : (r = String(r)),
                                f.push(tE(te(e), r, { "dt:dt": n }));
                            }
                          }),
                        o &&
                          eT(o).forEach(function (e) {
                            if (
                              Object.prototype.hasOwnProperty.call(o, e) &&
                              !(i && Object.prototype.hasOwnProperty.call(i, e))
                            ) {
                              var t = o[e],
                                r = "string";
                              "number" == typeof t
                                ? ((r = "float"), (t = String(t)))
                                : !0 === t || !1 === t
                                  ? ((r = "boolean"), (t = t ? "1" : "0"))
                                  : t instanceof Date
                                    ? ((r = "dateTime.tz"),
                                      (t = t.toISOString()))
                                    : (t = String(t)),
                                f.push(tE(te(e), t, { "dt:dt": r }));
                            }
                          }),
                        "<" +
                          l +
                          ' xmlns="' +
                          tC.o +
                          '">' +
                          f.join("") +
                          "</" +
                          l +
                          ">")
                      ),
                    h.join(""))
                  ),
                    d.push(""),
                    d.push(""),
                    d.push("");
                  for (var p = 0; p < e.SheetNames.length; ++p)
                    d.push(
                      tE(
                        "Worksheet",
                        (function (e, t, r) {
                          var n = [],
                            a = r.SheetNames[e],
                            s = r.Sheets[a],
                            i = s
                              ? (function (e, t, r, n) {
                                  if (!e || !((n || {}).Workbook || {}).Names)
                                    return "";
                                  for (
                                    var a = n.Workbook.Names, s = [], i = 0;
                                    i < a.length;
                                    ++i
                                  ) {
                                    var o = a[i];
                                    o.Sheet == r &&
                                      (o.Name.match(/^_xlfn\./) ||
                                        s.push(iu(o)));
                                  }
                                  return s.join("");
                                })(s, 0, e, r)
                              : "";
                          return (
                            i.length > 0 && n.push("<Names>" + i + "</Names>"),
                            (i = s
                              ? (function (e, t, r, n) {
                                  if (!e["!ref"]) return "";
                                  var a = ri(e["!ref"]),
                                    s = e["!merges"] || [],
                                    i = 0,
                                    o = [];
                                  e["!cols"] &&
                                    e["!cols"].forEach(function (e, t) {
                                      ak(e);
                                      var r = !!e.width,
                                        n = sy(t, e),
                                        a = { "ss:Index": t + 1 };
                                      r && (a["ss:Width"] = aC(n.width)),
                                        e.hidden && (a["ss:Hidden"] = "1"),
                                        o.push(tE("Column", null, a));
                                    });
                                  for (
                                    var c = Array.isArray(e), l = a.s.r;
                                    l <= a.e.r;
                                    ++l
                                  ) {
                                    for (
                                      var f = [
                                          (function (e, t) {
                                            var r =
                                              '<Row ss:Index="' + (e + 1) + '"';
                                            return (
                                              t &&
                                                (t.hpt &&
                                                  !t.hpx &&
                                                  (t.hpx = aI(t.hpt)),
                                                t.hpx &&
                                                  (r +=
                                                    ' ss:AutoFitHeight="0" ss:Height="' +
                                                    t.hpx +
                                                    '"'),
                                                t.hidden &&
                                                  (r += ' ss:Hidden="1"')),
                                              r + ">"
                                            );
                                          })(l, (e["!rows"] || [])[l]),
                                        ],
                                        h = a.s.c;
                                      h <= a.e.c;
                                      ++h
                                    ) {
                                      var u = !1;
                                      for (i = 0; i != s.length; ++i)
                                        if (
                                          !(s[i].s.c > h) &&
                                          !(s[i].s.r > l) &&
                                          !(s[i].e.c < h) &&
                                          !(s[i].e.r < l)
                                        ) {
                                          (s[i].s.c != h || s[i].s.r != l) &&
                                            (u = !0);
                                          break;
                                        }
                                      if (!u) {
                                        var d = { r: l, c: h },
                                          p = rn(d),
                                          m = c ? (e[l] || [])[h] : e[p];
                                        f.push(
                                          (function (e, t, r, n, a, s, i) {
                                            if (
                                              !e ||
                                              (void 0 == e.v && void 0 == e.f)
                                            )
                                              return "";
                                            var o = {};
                                            if (
                                              (e.f &&
                                                (o["ss:Formula"] =
                                                  "=" + e9(a3(e.f, i))),
                                              e.F &&
                                                e.F.slice(0, t.length) == t)
                                            ) {
                                              var c = rr(
                                                e.F.slice(t.length + 1)
                                              );
                                              o["ss:ArrayRange"] =
                                                "RC:R" +
                                                (c.r == i.r
                                                  ? ""
                                                  : "[" + (c.r - i.r) + "]") +
                                                "C" +
                                                (c.c == i.c
                                                  ? ""
                                                  : "[" + (c.c - i.c) + "]");
                                            }
                                            if (
                                              (e.l &&
                                                e.l.Target &&
                                                ((o["ss:HRef"] = e9(
                                                  e.l.Target
                                                )),
                                                e.l.Tooltip &&
                                                  (o["x:HRefScreenTip"] = e9(
                                                    e.l.Tooltip
                                                  ))),
                                              r["!merges"])
                                            )
                                              for (
                                                var l = r["!merges"], f = 0;
                                                f != l.length;
                                                ++f
                                              )
                                                l[f].s.c == i.c &&
                                                  l[f].s.r == i.r &&
                                                  (l[f].e.c > l[f].s.c &&
                                                    (o["ss:MergeAcross"] =
                                                      l[f].e.c - l[f].s.c),
                                                  l[f].e.r > l[f].s.r &&
                                                    (o["ss:MergeDown"] =
                                                      l[f].e.r - l[f].s.r));
                                            var h = "",
                                              u = "";
                                            switch (e.t) {
                                              case "z":
                                                if (!n.sheetStubs) return "";
                                                break;
                                              case "n":
                                                (h = "Number"),
                                                  (u = String(e.v));
                                                break;
                                              case "b":
                                                (h = "Boolean"),
                                                  (u = e.v ? "1" : "0");
                                                break;
                                              case "e":
                                                (h = "Error"), (u = rU[e.v]);
                                                break;
                                              case "d":
                                                (h = "DateTime"),
                                                  (u = new Date(
                                                    e.v
                                                  ).toISOString()),
                                                  null == e.z &&
                                                    (e.z =
                                                      e.z || ev._table[14]);
                                                break;
                                              case "s":
                                                (h = "String"),
                                                  (u = ((e.v || "") + "")
                                                    .replace(e8, function (e) {
                                                      return e5[e];
                                                    })
                                                    .replace(tt, function (e) {
                                                      return (
                                                        "&#x" +
                                                        e
                                                          .charCodeAt(0)
                                                          .toString(16)
                                                          .toUpperCase() +
                                                        ";"
                                                      );
                                                    }));
                                            }
                                            var d = sF(n.cellXfs, e, n);
                                            (o["ss:StyleID"] = "s" + (21 + d)),
                                              (o["ss:Index"] = i.c + 1);
                                            var p = null != e.v ? u : "",
                                              m =
                                                "z" == e.t
                                                  ? ""
                                                  : '<Data ss:Type="' +
                                                    h +
                                                    '">' +
                                                    p +
                                                    "</Data>";
                                            return (
                                              (e.c || []).length > 0 &&
                                                (m += e.c
                                                  .map(function (e) {
                                                    var t = tE(
                                                      "ss:Data",
                                                      (e.t || "").replace(
                                                        /(\r\n|[\r\n])/g,
                                                        "&#10;"
                                                      ),
                                                      {
                                                        xmlns:
                                                          "http://www.w3.org/TR/REC-html40",
                                                      }
                                                    );
                                                    return tE("Comment", t, {
                                                      "ss:Author": e.a,
                                                    });
                                                  })
                                                  .join("")),
                                              tE("Cell", m, o)
                                            );
                                          })(m, p, e, t, 0, 0, d)
                                        );
                                      }
                                    }
                                    f.push("</Row>"),
                                      f.length > 2 && o.push(f.join(""));
                                  }
                                  return o.join("");
                                })(s, t, 0, 0)
                              : "").length > 0 &&
                              n.push("<Table>" + i + "</Table>"),
                            n.push(
                              (function (e, t, r, n) {
                                if (!e) return "";
                                var a = [];
                                if (
                                  (e["!margins"] &&
                                    (a.push("<PageSetup>"),
                                    e["!margins"].header &&
                                      a.push(
                                        tE("Header", null, {
                                          "x:Margin": e["!margins"].header,
                                        })
                                      ),
                                    e["!margins"].footer &&
                                      a.push(
                                        tE("Footer", null, {
                                          "x:Margin": e["!margins"].footer,
                                        })
                                      ),
                                    a.push(
                                      tE("PageMargins", null, {
                                        "x:Bottom":
                                          e["!margins"].bottom || "0.75",
                                        "x:Left": e["!margins"].left || "0.7",
                                        "x:Right": e["!margins"].right || "0.7",
                                        "x:Top": e["!margins"].top || "0.75",
                                      })
                                    ),
                                    a.push("</PageSetup>")),
                                  n &&
                                    n.Workbook &&
                                    n.Workbook.Sheets &&
                                    n.Workbook.Sheets[r])
                                ) {
                                  if (n.Workbook.Sheets[r].Hidden)
                                    a.push(
                                      tE(
                                        "Visible",
                                        1 == n.Workbook.Sheets[r].Hidden
                                          ? "SheetHidden"
                                          : "SheetVeryHidden",
                                        {}
                                      )
                                    );
                                  else {
                                    for (
                                      var s = 0;
                                      s < r &&
                                      (!n.Workbook.Sheets[s] ||
                                        n.Workbook.Sheets[s].Hidden);
                                      ++s
                                    );
                                    s == r && a.push("<Selected/>");
                                  }
                                }
                                return ((
                                  (((n || {}).Workbook || {}).Views || [])[0] ||
                                  {}
                                ).RTL && a.push("<DisplayRightToLeft/>"),
                                e["!protect"] &&
                                  (a.push(tv("ProtectContents", "True")),
                                  e["!protect"].objects &&
                                    a.push(tv("ProtectObjects", "True")),
                                  e["!protect"].scenarios &&
                                    a.push(tv("ProtectScenarios", "True")),
                                  null == e["!protect"].selectLockedCells ||
                                  e["!protect"].selectLockedCells
                                    ? null ==
                                        e["!protect"].selectUnlockedCells ||
                                      e["!protect"].selectUnlockedCells ||
                                      a.push(
                                        tv("EnableSelection", "UnlockedCells")
                                      )
                                    : a.push(
                                        tv("EnableSelection", "NoSelection")
                                      ),
                                  [
                                    ["formatCells", "AllowFormatCells"],
                                    ["formatColumns", "AllowSizeCols"],
                                    ["formatRows", "AllowSizeRows"],
                                    ["insertColumns", "AllowInsertCols"],
                                    ["insertRows", "AllowInsertRows"],
                                    [
                                      "insertHyperlinks",
                                      "AllowInsertHyperlinks",
                                    ],
                                    ["deleteColumns", "AllowDeleteCols"],
                                    ["deleteRows", "AllowDeleteRows"],
                                    ["sort", "AllowSort"],
                                    ["autoFilter", "AllowFilter"],
                                    ["pivotTables", "AllowUsePivotTables"],
                                  ].forEach(function (t) {
                                    e["!protect"][t[0]] &&
                                      a.push("<" + t[1] + "/>");
                                  })),
                                0 == a.length)
                                  ? ""
                                  : tE("WorksheetOptions", a.join(""), {
                                      xmlns: tC.x,
                                    });
                              })(s, 0, e, r)
                            ),
                            n.join("")
                          );
                        })(p, t, e),
                        { "ss:Name": e9(e.SheetNames[p]) }
                      )
                    );
                  return (
                    (d[2] =
                      ((u = [
                        '<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>',
                      ]),
                      t.cellXfs.forEach(function (e, t) {
                        var r = [];
                        r.push(
                          tE("NumberFormat", null, {
                            "ss:Format": e9(ev._table[e.numFmtId]),
                          })
                        ),
                          u.push(
                            tE("Style", r.join(""), { "ss:ID": "s" + (21 + t) })
                          );
                      }),
                      tE("Styles", u.join("")))),
                    (d[3] = (function (e) {
                      if (!((e || {}).Workbook || {}).Names) return "";
                      for (
                        var t = e.Workbook.Names, r = [], n = 0;
                        n < t.length;
                        ++n
                      ) {
                        var a = t[n];
                        null == a.Sheet &&
                          (a.Name.match(/^_xlfn\./) || r.push(iu(a)));
                      }
                      return tE("Names", r.join(""));
                    })(e, t)),
                    eJ +
                      tE("Workbook", d.join(""), {
                        xmlns: tC.ss,
                        "xmlns:o": tC.o,
                        "xmlns:x": tC.x,
                        "xmlns:ss": tC.ss,
                        "xmlns:dt": tC.dt,
                        "xmlns:html": tC.html,
                      })
                  );
                })(e, n),
                n
              );
            case "slk":
            case "sylk":
              return iq(iP(e, n), n);
            case "htm":
            case "html":
              return iq(iD(e, n), n);
            case "txt":
              return (function (e, t) {
                switch (t.type) {
                  case "base64":
                    return ea.encode(e);
                  case "binary":
                  case "string":
                    return e;
                  case "file":
                    return eB(t.file, e, "binary");
                  case "buffer":
                    if (es) return ei(e, "binary");
                    return e.split("").map(function (e) {
                      return e.charCodeAt(0);
                    });
                }
                throw Error("Unrecognized type " + t.type);
              })(iU(e, n), n);
            case "csv":
              return iq(iO(e, n), n, "\uFEFF");
            case "dif":
              return iq(iN(e, n), n);
            case "dbf":
              return i1(iH(e, n), n);
            case "prn":
              return iq(iM(e, n), n);
            case "rtf":
              return iq(iL(e, n), n);
            case "eth":
              return iq(iW(e, n), n);
            case "fods":
              return iq(iR(e, n), n);
            case "biff2":
              n.biff || (n.biff = 2);
            case "biff3":
              n.biff || (n.biff = 3);
            case "biff4":
              return n.biff || (n.biff = 4), i1(iB(e, n), n);
            case "biff5":
              n.biff || (n.biff = 5);
            case "biff8":
            case "xla":
            case "xls":
              return (
                n.biff || (n.biff = 8),
                iZ(
                  (function (e, t) {
                    var r = t || {},
                      n = eC.utils.cfb_new({ root: "R" }),
                      a = "/Workbook";
                    switch (r.bookType || "xls") {
                      case "xls":
                        r.bookType = "biff8";
                      case "xla":
                        r.bookType || (r.bookType = "xla");
                      case "biff8":
                        (a = "/Workbook"), (r.biff = 8);
                        break;
                      case "biff5":
                        (a = "/Book"), (r.biff = 5);
                        break;
                      default:
                        throw Error(
                          "invalid type " + r.bookType + " for XLS CFB"
                        );
                    }
                    return (
                      eC.utils.cfb_add(n, a, iB(e, r)),
                      8 == r.biff &&
                        (e.Props || e.Custprops) &&
                        (function (e, t) {
                          var r,
                            n = [],
                            a = [],
                            s = [],
                            i = 0;
                          if (e.Props)
                            for (i = 0, r = eT(e.Props); i < r.length; ++i)
                              (Object.prototype.hasOwnProperty.call(rO, r[i])
                                ? n
                                : Object.prototype.hasOwnProperty.call(rP, r[i])
                                  ? a
                                  : s
                              ).push([r[i], e.Props[r[i]]]);
                          if (e.Custprops)
                            for (i = 0, r = eT(e.Custprops); i < r.length; ++i)
                              Object.prototype.hasOwnProperty.call(
                                e.Props || {},
                                r[i]
                              ) ||
                                (Object.prototype.hasOwnProperty.call(rO, r[i])
                                  ? n
                                  : Object.prototype.hasOwnProperty.call(
                                        rP,
                                        r[i]
                                      )
                                    ? a
                                    : s
                                ).push([r[i], e.Custprops[r[i]]]);
                          var o = [];
                          for (i = 0; i < s.length; ++i)
                            np.indexOf(s[i][0]) > -1 ||
                              null == s[i][1] ||
                              o.push(s[i]);
                          a.length &&
                            eC.utils.cfb_add(
                              t,
                              "/\x05SummaryInformation",
                              nv(a, im.SI, rP, rF)
                            ),
                            (n.length || o.length) &&
                              eC.utils.cfb_add(
                                t,
                                "/\x05DocumentSummaryInformation",
                                nv(
                                  n,
                                  im.DSI,
                                  rO,
                                  rR,
                                  o.length ? o : null,
                                  im.UDI
                                )
                              );
                        })(e, n),
                      8 == r.biff &&
                        e.vbaraw &&
                        (function (e, t) {
                          t.FullPaths.forEach(function (r, n) {
                            if (0 != n) {
                              var a = r.replace(
                                /[^\/]*[\/]/,
                                "/_VBA_PROJECT_CUR/"
                              );
                              "/" !== a.slice(-1) &&
                                eC.utils.cfb_add(e, a, t.FileIndex[n].content);
                            }
                          });
                        })(
                          n,
                          eC.read(e.vbaraw, {
                            type:
                              "string" == typeof e.vbaraw ? "binary" : "buffer",
                          })
                        ),
                      n
                    );
                  })(e, (r = n || {})),
                  r
                )
              );
            case "xlsx":
            case "xlsm":
            case "xlam":
            case "xlsb":
            case "ods":
              return (function (e, t) {
                var r = t || {},
                  n = (function (e, t) {
                    if (((aJ = 1024), "ods" == t.bookType)) return iR(e, t);
                    e && !e.SSF && (e.SSF = ev.get_table()),
                      e &&
                        e.SSF &&
                        (eb(ev),
                        ev.load_table(e.SSF),
                        (t.revssf = ek(e.SSF)),
                        (t.revssf[e.SSF[65535]] = 0),
                        (t.ssf = e.SSF)),
                      (t.rels = {}),
                      (t.wbrels = {}),
                      (t.Strings = []),
                      (t.Strings.Count = 0),
                      (t.Strings.Unique = 0),
                      sA
                        ? (t.revStrings = new Map())
                        : ((t.revStrings = {}),
                          (t.revStrings.foo = []),
                          delete t.revStrings.foo);
                    var r,
                      n,
                      a,
                      s,
                      i,
                      o,
                      c,
                      l,
                      f,
                      h,
                      u,
                      d,
                      p,
                      m = "xlsb" == t.bookType ? "bin" : "xml",
                      g = a0.indexOf(t.bookType) > -1,
                      v = rG();
                    iG((t = t || {}));
                    var b = eY(),
                      E = "",
                      S = 0;
                    if (
                      ((t.cellXfs = []),
                      sF(t.cellXfs, {}, { revssf: { General: 0 } }),
                      e.Props || (e.Props = {}),
                      eK(
                        b,
                        (E = "docProps/core.xml"),
                        (function (e, t) {
                          var r = t || {},
                            n = [eJ, r5],
                            a = {};
                          if (!e && !r.Props) return n.join("");
                          e &&
                            (null != e.CreatedDate &&
                              r6(
                                "dcterms:created",
                                "string" == typeof e.CreatedDate
                                  ? e.CreatedDate
                                  : tS(e.CreatedDate, r.WTF),
                                { "xsi:type": "dcterms:W3CDTF" },
                                n,
                                a
                              ),
                            null != e.ModifiedDate &&
                              r6(
                                "dcterms:modified",
                                "string" == typeof e.ModifiedDate
                                  ? e.ModifiedDate
                                  : tS(e.ModifiedDate, r.WTF),
                                { "xsi:type": "dcterms:W3CDTF" },
                                n,
                                a
                              ));
                          for (var s = 0; s != r2.length; ++s) {
                            var i = r2[s],
                              o =
                                r.Props && null != r.Props[i[1]]
                                  ? r.Props[i[1]]
                                  : e
                                    ? e[i[1]]
                                    : null;
                            !0 === o
                              ? (o = "1")
                              : !1 === o
                                ? (o = "0")
                                : "number" == typeof o && (o = String(o)),
                              null != o && r6(i[0], o, null, n, a);
                          }
                          return (
                            n.length > 2 &&
                              ((n[n.length] = "</cp:coreProperties>"),
                              (n[1] = n[1].replace("/>", ">"))),
                            n.join("")
                          );
                        })(e.Props, t)
                      ),
                      v.coreprops.push(E),
                      rq(t.rels, 2, E, r$.CORE_PROPS),
                      (E = "docProps/app.xml"),
                      e.Props && e.Props.SheetNames)
                    );
                    else if (e.Workbook && e.Workbook.Sheets) {
                      for (var w = [], C = 0; C < e.SheetNames.length; ++C)
                        2 != (e.Workbook.Sheets[C] || {}).Hidden &&
                          w.push(e.SheetNames[C]);
                      e.Props.SheetNames = w;
                    } else e.Props.SheetNames = e.SheetNames;
                    for (
                      e.Props.Worksheets = e.Props.SheetNames.length,
                        eK(
                          b,
                          E,
                          ((k = e.Props),
                          (A = []),
                          k || (k = {}),
                          (k.Application = "SheetJS"),
                          (A[A.length] = eJ),
                          (A[A.length] = r9),
                          r8.forEach(function (e) {
                            var t;
                            if (void 0 !== k[e[1]]) {
                              switch (e[2]) {
                                case "string":
                                  t = e9(String(k[e[1]]));
                                  break;
                                case "bool":
                                  t = k[e[1]] ? "true" : "false";
                              }
                              void 0 !== t && (A[A.length] = tE(e[0], t));
                            }
                          }),
                          (A[A.length] = tE(
                            "HeadingPairs",
                            tE(
                              "vt:vector",
                              tE(
                                "vt:variant",
                                "<vt:lpstr>Worksheets</vt:lpstr>"
                              ) +
                                tE(
                                  "vt:variant",
                                  tE("vt:i4", String(k.Worksheets))
                                ),
                              { size: 2, baseType: "variant" }
                            )
                          )),
                          (A[A.length] = tE(
                            "TitlesOfParts",
                            tE(
                              "vt:vector",
                              k.SheetNames.map(function (e) {
                                return "<vt:lpstr>" + e9(e) + "</vt:lpstr>";
                              }).join(""),
                              { size: k.Worksheets, baseType: "lpstr" }
                            )
                          )),
                          A.length > 2 &&
                            ((A[A.length] = "</Properties>"),
                            (A[1] = A[1].replace("/>", ">"))),
                          A.join(""))
                        ),
                        v.extprops.push(E),
                        rq(t.rels, 3, E, r$.EXT_PROPS),
                        e.Custprops !== e.Props &&
                          eT(e.Custprops || {}).length > 0 &&
                          (eK(
                            b,
                            (E = "docProps/custom.xml"),
                            (function (e) {
                              var t = [eJ, nt];
                              if (!e) return t.join("");
                              var r = 1;
                              return (
                                eT(e).forEach(function (n) {
                                  ++r,
                                    (t[t.length] = tE(
                                      "property",
                                      (function (e, t) {
                                        switch (typeof e) {
                                          case "string":
                                            var r = tE("vt:lpwstr", e9(e));
                                            return (
                                              t &&
                                                (r = r.replace(
                                                  /&quot;/g,
                                                  "_x0022_"
                                                )),
                                              r
                                            );
                                          case "number":
                                            return tE(
                                              (0 | e) == e ? "vt:i4" : "vt:r8",
                                              e9(String(e))
                                            );
                                          case "boolean":
                                            return tE(
                                              "vt:bool",
                                              e ? "true" : "false"
                                            );
                                        }
                                        if (e instanceof Date)
                                          return tE("vt:filetime", tS(e));
                                        throw Error("Unable to serialize " + e);
                                      })(e[n], !0),
                                      {
                                        fmtid:
                                          "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
                                        pid: r,
                                        name: e9(n),
                                      }
                                    ));
                                }),
                                t.length > 2 &&
                                  ((t[t.length] = "</Properties>"),
                                  (t[1] = t[1].replace("/>", ">"))),
                                t.join("")
                              );
                            })(e.Custprops, t)
                          ),
                          v.custprops.push(E),
                          rq(t.rels, 4, E, r$.CUST_PROPS)),
                        S = 1;
                      S <= e.SheetNames.length;
                      ++S
                    ) {
                      var B = { "!id": {} },
                        T = e.Sheets[e.SheetNames[S - 1]];
                      if (
                        ((T || {})["!type"],
                        eK(
                          b,
                          (E = "xl/worksheets/sheet" + S + "." + m),
                          ((I = S - 1),
                          (y = E),
                          (R = t),
                          (".bin" === y.slice(-4) ? sZ : sY)(I, R, e, B))
                        ),
                        v.sheets.push(E),
                        rq(
                          t.wbrels,
                          -1,
                          "worksheets/sheet" + S + "." + m,
                          r$.WS[0]
                        ),
                        T)
                      ) {
                        var x = T["!comments"],
                          _ = !1;
                        if (x && x.length > 0) {
                          var k,
                            A,
                            I,
                            y,
                            R,
                            F,
                            D = "xl/comments" + S + "." + m;
                          eK(
                            b,
                            D,
                            ((F = t), (".bin" === D.slice(-4) ? a1 : aq)(x, F))
                          ),
                            v.comments.push(D),
                            rq(B, -1, "../comments" + S + "." + m, r$.CMNT),
                            (_ = !0);
                        }
                        T["!legacy"] &&
                          _ &&
                          eK(
                            b,
                            "xl/drawings/vmlDrawing" + S + ".vml",
                            (function (e, t) {
                              for (
                                var r = [21600, 21600],
                                  n = [
                                    "m0,0l0",
                                    r[1],
                                    r[0],
                                    r[1],
                                    r[0],
                                    "0xe",
                                  ].join(","),
                                  a = [
                                    tE("xml", null, {
                                      "xmlns:v": tC.v,
                                      "xmlns:o": tC.o,
                                      "xmlns:x": tC.x,
                                      "xmlns:mv": tC.mv,
                                    }).replace(/\/>/, ">"),
                                    tE(
                                      "o:shapelayout",
                                      tE("o:idmap", null, {
                                        "v:ext": "edit",
                                        data: e,
                                      }),
                                      { "v:ext": "edit" }
                                    ),
                                    tE(
                                      "v:shapetype",
                                      [
                                        tE("v:stroke", null, {
                                          joinstyle: "miter",
                                        }),
                                        tE("v:path", null, {
                                          gradientshapeok: "t",
                                          "o:connecttype": "rect",
                                        }),
                                      ].join(""),
                                      {
                                        id: "_x0000_t202",
                                        "o:spt": 202,
                                        coordsize: r.join(","),
                                        path: n,
                                      }
                                    ),
                                  ];
                                aJ < 1e3 * e;
                              )
                                aJ += 1e3;
                              return (
                                t.forEach(function (e) {
                                  var t = rr(e[0]),
                                    r = { color2: "#BEFF82", type: "gradient" };
                                  "gradient" == r.type && (r.angle = "-180");
                                  var n =
                                      "gradient" == r.type
                                        ? tE("o:fill", null, {
                                            type: "gradientUnscaled",
                                            "v:ext": "view",
                                          })
                                        : null,
                                    s = tE("v:fill", n, r);
                                  ++aJ,
                                    (a = a.concat([
                                      "<v:shape" +
                                        tb({
                                          id: "_x0000_s" + aJ,
                                          type: "#_x0000_t202",
                                          style:
                                            "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" +
                                            (e[1].hidden
                                              ? ";visibility:hidden"
                                              : ""),
                                          fillcolor: "#ECFAD4",
                                          strokecolor: "#edeaa1",
                                        }) +
                                        ">",
                                      s,
                                      tE("v:shadow", null, {
                                        on: "t",
                                        obscured: "t",
                                      }),
                                      tE("v:path", null, {
                                        "o:connecttype": "none",
                                      }),
                                      '<v:textbox><div style="text-align:left"></div></v:textbox>',
                                      '<x:ClientData ObjectType="Note">',
                                      "<x:MoveWithCells/>",
                                      "<x:SizeWithCells/>",
                                      tv(
                                        "x:Anchor",
                                        [
                                          t.c + 1,
                                          0,
                                          t.r + 1,
                                          0,
                                          t.c + 3,
                                          20,
                                          t.r + 5,
                                          20,
                                        ].join(",")
                                      ),
                                      tv("x:AutoFill", "False"),
                                      tv("x:Row", String(t.r)),
                                      tv("x:Column", String(t.c)),
                                      e[1].hidden ? "" : "<x:Visible/>",
                                      "</x:ClientData>",
                                      "</v:shape>",
                                    ]));
                                }),
                                a.push("</xml>"),
                                a.join("")
                              );
                            })(S, T["!comments"])
                          ),
                          delete T["!comments"],
                          delete T["!legacy"];
                      }
                      B["!id"].rId1 && eK(b, rK(E), rJ(B));
                    }
                    return (
                      null != t.Strings &&
                        t.Strings.length > 0 &&
                        (eK(
                          b,
                          (E = "xl/sharedStrings." + m),
                          ((r = t.Strings),
                          (n = E),
                          (a = t),
                          (".bin" === n.slice(-4) ? al : ao)(r, a))
                        ),
                        v.strs.push(E),
                        rq(t.wbrels, -1, "sharedStrings." + m, r$.SST)),
                      eK(
                        b,
                        (E = "xl/workbook." + m),
                        ((s = E),
                        (i = t),
                        (".bin" === s.slice(-4) ? ir : ie)(e, i))
                      ),
                      v.workbooks.push(E),
                      rq(t.rels, 1, E, r$.WB),
                      eK(b, (E = "xl/theme/theme1.xml"), aQ(e.Themes, t)),
                      v.themes.push(E),
                      rq(t.wbrels, -1, "theme/theme1.xml", r$.THEME),
                      eK(
                        b,
                        (E = "xl/styles." + m),
                        ((o = E),
                        (c = t),
                        (".bin" === o.slice(-4) ? aH : aP)(e, c))
                      ),
                      v.styles.push(E),
                      rq(t.wbrels, -1, "styles." + m, r$.STY),
                      e.vbaraw &&
                        g &&
                        (eK(b, (E = "xl/vbaProject.bin"), e.vbaraw),
                        v.vba.push(E),
                        rq(t.wbrels, -1, "vbaProject.bin", r$.VBA)),
                      eK(
                        b,
                        "[Content_Types].xml",
                        ((l = t),
                        ((h = [])[h.length] = eJ),
                        (h[h.length] = rz),
                        (h = h.concat(rj)),
                        (u = function (e) {
                          v[e] &&
                            v[e].length > 0 &&
                            ((f = v[e][0]),
                            (h[h.length] = tE("Override", null, {
                              PartName: ("/" == f[0] ? "" : "/") + f,
                              ContentType: rV[e][l.bookType || "xlsx"],
                            })));
                        }),
                        (d = function (e) {
                          (v[e] || []).forEach(function (t) {
                            h[h.length] = tE("Override", null, {
                              PartName: ("/" == t[0] ? "" : "/") + t,
                              ContentType: rV[e][l.bookType || "xlsx"],
                            });
                          });
                        }),
                        (p = function (e) {
                          (v[e] || []).forEach(function (t) {
                            h[h.length] = tE("Override", null, {
                              PartName: ("/" == t[0] ? "" : "/") + t,
                              ContentType: rX[e][0],
                            });
                          });
                        }),
                        u("workbooks"),
                        d("sheets"),
                        d("charts"),
                        p("themes"),
                        ["strs", "styles"].forEach(u),
                        ["coreprops", "extprops", "custprops"].forEach(p),
                        p("vba"),
                        p("comments"),
                        p("drawings"),
                        h.length > 2 &&
                          ((h[h.length] = "</Types>"),
                          (h[1] = h[1].replace("/>", ">"))),
                        h.join(""))
                      ),
                      eK(b, "_rels/.rels", rJ(t.rels)),
                      eK(b, "xl/_rels/workbook." + m + ".rels", rJ(t.wbrels)),
                      delete t.revssf,
                      delete t.ssf,
                      b
                    );
                  })(e, r),
                  a = {};
                if ((r.compression && (a.compression = "DEFLATE"), r.password))
                  a.type = es ? "nodebuffer" : "string";
                else
                  switch (r.type) {
                    case "base64":
                      a.type = "base64";
                      break;
                    case "binary":
                      a.type = "string";
                      break;
                    case "string":
                      throw Error(
                        "'string' output type invalid for '" +
                          r.bookType +
                          "' files"
                      );
                    case "buffer":
                    case "file":
                      a.type = es ? "nodebuffer" : "string";
                      break;
                    default:
                      throw Error("Unrecognized type " + r.type);
                  }
                var s = n.FullPaths
                  ? eC.write(n, {
                      fileType: "zip",
                      type:
                        { nodebuffer: "buffer", string: "binary" }[a.type] ||
                        a.type,
                    })
                  : n.generate(a);
                return r.password && "undefined" != typeof encrypt_agile
                  ? iZ(encrypt_agile(s, r.password), r)
                  : "file" === r.type
                    ? eB(r.file, s)
                    : "string" == r.type
                      ? ts(s)
                      : s;
              })(e, n);
            default:
              throw Error("Unrecognized bookType |" + n.bookType + "|");
          }
        }
        function i2(e) {
          if (!e.bookType) {
            var t = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
            t.match(/^\.[a-z]+$/) && (e.bookType = t.slice(1)),
              (e.bookType =
                {
                  xls: "biff8",
                  htm: "html",
                  slk: "sylk",
                  socialcalc: "eth",
                  Sh33tJS: "WTF",
                }[e.bookType] || e.bookType);
          }
        }
        function i4(e, t, r) {
          var n = r || {};
          return (n.type = "file"), (n.file = t), i2(n), i0(e, n);
        }
        function i3(e, t, r, n, a, s, i, o) {
          var c = t9(r),
            l = o.defval,
            f = o.raw || !Object.prototype.hasOwnProperty.call(o, "raw"),
            h = !0,
            u = 1 === a ? [] : {};
          if (1 !== a) {
            if (Object.defineProperty)
              try {
                Object.defineProperty(u, "__rowNum__", {
                  value: r,
                  enumerable: !1,
                });
              } catch (e) {
                u.__rowNum__ = r;
              }
            else u.__rowNum__ = r;
          }
          if (!i || e[r])
            for (var d = t.s.c; d <= t.e.c; ++d) {
              var p = i ? e[r][d] : e[n[d] + c];
              if (void 0 === p || void 0 === p.t) {
                if (void 0 === l) continue;
                null != s[d] && (u[s[d]] = l);
                continue;
              }
              var m = p.v;
              switch (p.t) {
                case "z":
                  if (null == m) break;
                  continue;
                case "e":
                  m = void 0;
                  break;
                case "s":
                case "d":
                case "b":
                case "n":
                  break;
                default:
                  throw Error("unrecognized type " + p.t);
              }
              if (null != s[d]) {
                if (null == m) {
                  if (void 0 !== l) u[s[d]] = l;
                  else {
                    if (!f || null !== m) continue;
                    u[s[d]] = null;
                  }
                } else
                  u[s[d]] = f || (o.rawNumbers && "n" == p.t) ? m : rc(p, m, o);
                null != m && (h = !1);
              }
            }
          return { row: u, isempty: h };
        }
        function i5(e, t) {
          if (null == e || null == e["!ref"]) return [];
          var r = { t: "n", v: 0 },
            n = 0,
            a = 1,
            s = [],
            i = 0,
            o = "",
            c = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
            l = t || {},
            f = null != l.range ? l.range : e["!ref"];
          switch (
            (1 === l.header
              ? (n = 1)
              : "A" === l.header
                ? (n = 2)
                : Array.isArray(l.header)
                  ? (n = 3)
                  : null == l.header && (n = 0),
            typeof f)
          ) {
            case "string":
              c = ri(f);
              break;
            case "number":
              (c = ri(e["!ref"])).s.r = f;
              break;
            default:
              c = f;
          }
          n > 0 && (a = 0);
          var h = t9(c.s.r),
            u = [],
            d = [],
            p = 0,
            m = 0,
            g = Array.isArray(e),
            v = c.s.r,
            b = 0,
            E = 0;
          for (g && !e[v] && (e[v] = []), b = c.s.c; b <= c.e.c; ++b)
            switch (((u[b] = rt(b)), (r = g ? e[v][b] : e[u[b] + h]), n)) {
              case 1:
                s[b] = b - c.s.c;
                break;
              case 2:
                s[b] = u[b];
                break;
              case 3:
                s[b] = l.header[b - c.s.c];
                break;
              default:
                for (
                  null == r && (r = { w: "__EMPTY", t: "s" }),
                    o = i = rc(r, null, l),
                    m = 0,
                    E = 0;
                  E < s.length;
                  ++E
                )
                  s[E] == o && (o = i + "_" + ++m);
                s[b] = o;
            }
          for (v = c.s.r + a; v <= c.e.r; ++v) {
            var S = i3(e, c, v, u, n, s, g, l);
            (!1 === S.isempty ||
              (1 === n ? !1 !== l.blankrows : l.blankrows)) &&
              (d[p++] = S.row);
          }
          return (d.length = p), d;
        }
        var i6 = /"/g;
        function i8(e, t, r, n, a, s, i, o) {
          for (
            var c = !0, l = [], f = "", h = t9(r), u = t.s.c;
            u <= t.e.c;
            ++u
          )
            if (n[u]) {
              var d = o.dense ? (e[r] || [])[u] : e[n[u] + h];
              if (null == d) f = "";
              else if (null != d.v) {
                (c = !1),
                  (f =
                    "" + (o.rawNumbers && "n" == d.t ? d.v : rc(d, null, o)));
                for (var p = 0, m = 0; p !== f.length; ++p)
                  if (
                    (m = f.charCodeAt(p)) === a ||
                    m === s ||
                    34 === m ||
                    o.forceQuotes
                  ) {
                    f = '"' + f.replace(i6, '""') + '"';
                    break;
                  }
                "ID" == f && (f = '"ID"');
              } else
                null == d.f || d.F
                  ? (f = "")
                  : ((c = !1),
                    (f = "=" + d.f).indexOf(",") >= 0 &&
                      (f = '"' + f.replace(i6, '""') + '"'));
              l.push(f);
            }
          return !1 === o.blankrows && c ? null : l.join(i);
        }
        function i7(e, t) {
          var r = [],
            n = null == t ? {} : t;
          if (null == e || null == e["!ref"]) return "";
          var a = ri(e["!ref"]),
            s = void 0 !== n.FS ? n.FS : ",",
            i = s.charCodeAt(0),
            o = void 0 !== n.RS ? n.RS : "\n",
            c = o.charCodeAt(0),
            l = RegExp(("|" == s ? "\\|" : s) + "+$"),
            f = "",
            h = [];
          n.dense = Array.isArray(e);
          for (
            var u = (n.skipHidden && e["!cols"]) || [],
              d = (n.skipHidden && e["!rows"]) || [],
              p = a.s.c;
            p <= a.e.c;
            ++p
          )
            (u[p] || {}).hidden || (h[p] = rt(p));
          for (var m = a.s.r; m <= a.e.r; ++m)
            if (!(d[m] || {}).hidden) {
              if (null == (f = i8(e, a, m, h, i, c, s, n))) continue;
              n.strip && (f = f.replace(l, "")), r.push(f + o);
            }
          return delete n.dense, r.join("");
        }
        function i9(e, t) {
          t || (t = {}), (t.FS = "	"), (t.RS = "\n");
          var r = i7(e, t);
          if ("undefined" == typeof cptable || "string" == t.type) return r;
          var n = cptable.utils.encode(1200, r, "str");
          return String.fromCharCode(255) + String.fromCharCode(254) + n;
        }
        function oe(e) {
          var t,
            r = "",
            n = "";
          if (null == e || null == e["!ref"]) return [];
          var a,
            s = ri(e["!ref"]),
            i = "",
            o = [],
            c = [],
            l = Array.isArray(e);
          for (a = s.s.c; a <= s.e.c; ++a) o[a] = rt(a);
          for (var f = s.s.r; f <= s.e.r; ++f)
            for (i = t9(f), a = s.s.c; a <= s.e.c; ++a)
              if (
                ((r = o[a] + i),
                (t = l ? (e[f] || [])[a] : e[r]),
                (n = ""),
                void 0 !== t)
              ) {
                if (null != t.F) {
                  if (((r = t.F), !t.f)) continue;
                  (n = t.f), -1 == r.indexOf(":") && (r = r + ":" + r);
                }
                if (null != t.f) n = t.f;
                else if ("z" == t.t) continue;
                else if ("n" == t.t && null != t.v) n = "" + t.v;
                else if ("b" == t.t) n = t.v ? "TRUE" : "FALSE";
                else if (void 0 !== t.w) n = "'" + t.w;
                else {
                  if (void 0 === t.v) continue;
                  n = "s" == t.t ? "'" + t.v : "" + t.v;
                }
                c[c.length] = r + "=" + n;
              }
          return c;
        }
        function ot(e, t, r) {
          var n,
            a = r || {},
            s = +!a.skipHeader,
            i = e || {},
            o = 0,
            c = 0;
          if (i && null != a.origin) {
            if ("number" == typeof a.origin) o = a.origin;
            else {
              var l = "string" == typeof a.origin ? rr(a.origin) : a.origin;
              (o = l.r), (c = l.c);
            }
          }
          var f = { s: { c: 0, r: 0 }, e: { c: c, r: o + t.length - 1 + s } };
          if (i["!ref"]) {
            var h = ri(i["!ref"]);
            (f.e.c = Math.max(f.e.c, h.e.c)),
              (f.e.r = Math.max(f.e.r, h.e.r)),
              -1 == o && ((o = h.e.r + 1), (f.e.r = o + t.length - 1 + s));
          } else -1 == o && ((o = 0), (f.e.r = t.length - 1 + s));
          var u = a.header || [],
            d = 0;
          t.forEach(function (e, t) {
            eT(e).forEach(function (r) {
              -1 == (d = u.indexOf(r)) && (u[(d = u.length)] = r);
              var l = e[r],
                f = "z",
                h = "",
                p = rn({ c: c + d, r: o + t + s });
              (n = or.sheet_get_cell(i, p)),
                !l || "object" != typeof l || l instanceof Date
                  ? ("number" == typeof l
                      ? (f = "n")
                      : "boolean" == typeof l
                        ? (f = "b")
                        : "string" == typeof l
                          ? (f = "s")
                          : l instanceof Date &&
                            ((f = "d"),
                            a.cellDates || ((f = "n"), (l = eI(l))),
                            (h = a.dateNF || ev._table[14])),
                    n
                      ? ((n.t = f),
                        (n.v = l),
                        delete n.w,
                        delete n.R,
                        h && (n.z = h))
                      : (i[p] = n = { t: f, v: l }),
                    h && (n.z = h))
                  : (i[p] = l);
            });
          }),
            (f.e.c = Math.max(f.e.c, c + u.length - 1));
          var p = t9(o);
          if (s)
            for (d = 0; d < u.length; ++d)
              i[rt(d + c) + p] = { t: "s", v: u[d] };
          return (i["!ref"] = rs(f)), i;
        }
        var or = {
          encode_col: rt,
          encode_row: t9,
          encode_cell: rn,
          encode_range: rs,
          decode_col: re,
          decode_row: t7,
          split_cell: function (e) {
            return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
          },
          decode_cell: rr,
          decode_range: ra,
          format_cell: rc,
          get_formulae: oe,
          make_csv: i7,
          make_json: i5,
          make_formulae: oe,
          sheet_add_aoa: rf,
          sheet_add_json: ot,
          sheet_add_dom: ix,
          aoa_to_sheet: rh,
          json_to_sheet: function (e, t) {
            return ot(null, e, t);
          },
          table_to_sheet: i_,
          table_to_book: function (e, t) {
            return rl(i_(e, t), t);
          },
          sheet_to_csv: i7,
          sheet_to_txt: i9,
          sheet_to_json: i5,
          sheet_to_html: iT.from_sheet,
          sheet_to_formulae: oe,
          sheet_to_row_object_array: i5,
        };
        !(function (e) {
          function t(e, t, r) {
            return null != e[t] ? e[t] : (e[t] = r);
          }
          function r(e, t, n) {
            if ("string" == typeof t) {
              if (Array.isArray(e)) {
                var a = rr(t);
                return (
                  e[a.r] || (e[a.r] = []),
                  e[a.r][a.c] || (e[a.r][a.c] = { t: "z" })
                );
              }
              return e[t] || (e[t] = { t: "z" });
            }
            return "number" != typeof t
              ? r(e, rn(t))
              : r(e, rn({ r: t, c: n || 0 }));
          }
          (e.consts = e.consts || {}),
            (e.sheet_get_cell = r),
            (e.book_new = function () {
              return { SheetNames: [], Sheets: {} };
            }),
            (e.book_append_sheet = function (e, t, r) {
              if (!r)
                for (
                  var n = 1;
                  n <= 65535 && -1 != e.SheetNames.indexOf((r = "Sheet" + n));
                  ++n, r = void 0
                );
              if (!r || e.SheetNames.length >= 65535)
                throw Error("Too many worksheets");
              if ((s8(r), e.SheetNames.indexOf(r) >= 0))
                throw Error("Worksheet with name |" + r + "| already exists!");
              e.SheetNames.push(r), (e.Sheets[r] = t);
            }),
            (e.book_set_sheet_visibility = function (e, r, n) {
              t(e, "Workbook", {}), t(e.Workbook, "Sheets", []);
              var a = (function (e, t) {
                if ("number" == typeof t) {
                  if (t >= 0 && e.SheetNames.length > t) return t;
                  throw Error("Cannot find sheet # " + t);
                }
                if ("string" == typeof t) {
                  var r = e.SheetNames.indexOf(t);
                  if (r > -1) return r;
                  throw Error("Cannot find sheet name |" + t + "|");
                }
                throw Error("Cannot find sheet |" + t + "|");
              })(e, r);
              switch ((t(e.Workbook.Sheets, a, {}), n)) {
                case 0:
                case 1:
                case 2:
                  break;
                default:
                  throw Error("Bad sheet visibility setting " + n);
              }
              e.Workbook.Sheets[a].Hidden = n;
            }),
            (function (t) {
              t.forEach(function (t) {
                e.consts[t[0]] = t[1];
              });
            })([
              ["SHEET_VISIBLE", 0],
              ["SHEET_HIDDEN", 1],
              ["SHEET_VERY_HIDDEN", 2],
            ]),
            (e.cell_set_number_format = function (e, t) {
              return (e.z = t), e;
            }),
            (e.cell_set_hyperlink = function (e, t, r) {
              return (
                t
                  ? ((e.l = { Target: t }), r && (e.l.Tooltip = r))
                  : delete e.l,
                e
              );
            }),
            (e.cell_set_internal_link = function (t, r, n) {
              return e.cell_set_hyperlink(t, "#" + r, n);
            }),
            (e.cell_add_comment = function (e, t, r) {
              e.c || (e.c = []), e.c.push({ t: t, a: r || "SheetJS" });
            }),
            (e.sheet_set_array_formula = function (e, t, n) {
              for (
                var a = "string" != typeof t ? t : ri(t),
                  s = "string" == typeof t ? t : rs(t),
                  i = a.s.r;
                i <= a.e.r;
                ++i
              )
                for (var o = a.s.c; o <= a.e.c; ++o) {
                  var c = r(e, i, o);
                  (c.t = "n"),
                    (c.F = s),
                    delete c.v,
                    i == a.s.r && o == a.s.c && (c.f = n);
                }
              return e;
            });
        })(or),
          es &&
            ((M = r(65240).Readable),
            (t.stream = {
              to_json: function (e, t) {
                var r = M({ objectMode: !0 });
                if (null == e || null == e["!ref"]) return r.push(null), r;
                var n = { t: "n", v: 0 },
                  a = 0,
                  s = 1,
                  i = [],
                  o = 0,
                  c = "",
                  l = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
                  f = t || {},
                  h = null != f.range ? f.range : e["!ref"];
                switch (
                  (1 === f.header
                    ? (a = 1)
                    : "A" === f.header
                      ? (a = 2)
                      : Array.isArray(f.header) && (a = 3),
                  typeof h)
                ) {
                  case "string":
                    l = ri(h);
                    break;
                  case "number":
                    (l = ri(e["!ref"])).s.r = h;
                    break;
                  default:
                    l = h;
                }
                a > 0 && (s = 0);
                var u = t9(l.s.r),
                  d = [],
                  p = 0,
                  m = Array.isArray(e),
                  g = l.s.r,
                  v = 0,
                  b = 0;
                for (m && !e[g] && (e[g] = []), v = l.s.c; v <= l.e.c; ++v)
                  switch (
                    ((d[v] = rt(v)), (n = m ? e[g][v] : e[d[v] + u]), a)
                  ) {
                    case 1:
                      i[v] = v - l.s.c;
                      break;
                    case 2:
                      i[v] = d[v];
                      break;
                    case 3:
                      i[v] = f.header[v - l.s.c];
                      break;
                    default:
                      for (
                        null == n && (n = { w: "__EMPTY", t: "s" }),
                          c = o = rc(n, null, f),
                          p = 0,
                          b = 0;
                        b < i.length;
                        ++b
                      )
                        i[b] == c && (c = o + "_" + ++p);
                      i[v] = c;
                  }
                return (
                  (g = l.s.r + s),
                  (r._read = function () {
                    if (g > l.e.r) return r.push(null);
                    for (; g <= l.e.r; ) {
                      var t = i3(e, l, g, d, a, i, m, f);
                      if (
                        (++g,
                        !1 === t.isempty ||
                          (1 === a ? !1 !== f.blankrows : !!f.blankrows))
                      ) {
                        r.push(t.row);
                        break;
                      }
                    }
                  }),
                  r
                );
              },
              to_html: function (e, t) {
                var r = M(),
                  n = t || {},
                  a = null != n.header ? n.header : iT.BEGIN,
                  s = null != n.footer ? n.footer : iT.END;
                r.push(a);
                var i = ra(e["!ref"]);
                (n.dense = Array.isArray(e)), r.push(iT._preamble(e, i, n));
                var o = i.s.r,
                  c = !1;
                return (
                  (r._read = function () {
                    if (o > i.e.r)
                      return (
                        c || ((c = !0), r.push("</table>" + s)), r.push(null)
                      );
                    for (; o <= i.e.r; ) {
                      r.push(iT._row(e, i, o, n)), ++o;
                      break;
                    }
                  }),
                  r
                );
              },
              to_csv: function (e, t) {
                var r = M(),
                  n = null == t ? {} : t;
                if (null == e || null == e["!ref"]) return r.push(null), r;
                var a = ri(e["!ref"]),
                  s = void 0 !== n.FS ? n.FS : ",",
                  i = s.charCodeAt(0),
                  o = void 0 !== n.RS ? n.RS : "\n",
                  c = o.charCodeAt(0),
                  l = RegExp(("|" == s ? "\\|" : s) + "+$"),
                  f = "",
                  h = [];
                n.dense = Array.isArray(e);
                for (
                  var u = (n.skipHidden && e["!cols"]) || [],
                    d = (n.skipHidden && e["!rows"]) || [],
                    p = a.s.c;
                  p <= a.e.c;
                  ++p
                )
                  (u[p] || {}).hidden || (h[p] = rt(p));
                var m = a.s.r,
                  g = !1;
                return (
                  (r._read = function () {
                    if (!g) return (g = !0), r.push("\uFEFF");
                    for (; m <= a.e.r; )
                      if (
                        !(d[++m - 1] || {}).hidden &&
                        null != (f = i8(e, a, m - 1, h, i, c, s, n))
                      ) {
                        n.strip && (f = f.replace(l, "")), r.push(f + o);
                        break;
                      }
                    if (m > a.e.r) return r.push(null);
                  }),
                  r
                );
              },
            })),
          (t.parse_xlscfb = ig),
          (t.parse_zip = ij),
          (t.read = iQ),
          (t.readFile = iJ),
          (t.readFileSync = iJ),
          (t.write = i0),
          (t.writeFile = i4),
          (t.writeFileSync = i4),
          (t.writeFileAsync = function (e, t, r, n) {
            var a = r || {};
            (a.type = "file"), (a.file = e), i2(a), (a.type = "buffer");
            var s = n;
            return (
              s instanceof Function || (s = r), U.writeFile(e, i0(t, a), s)
            );
          }),
          (t.utils = or),
          (t.SSF = ev),
          void 0 !== eC && (t.CFB = eC);
      })(t);
    },
  },
]);
//# sourceMappingURL=9784a43c.b948fcbcc6b375c3.js.map
