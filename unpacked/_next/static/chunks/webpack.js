!(function () {
  "use strict";
  var e,
    t,
    n,
    a,
    c,
    r,
    f,
    o,
    d,
    i,
    u,
    b,
    s = {},
    l = {};
  function p(e) {
    var t = l[e];
    if (void 0 !== t) return t.exports;
    var n = (l[e] = { id: e, loaded: !1, exports: {} }),
      a = !0;
    try {
      s[e].call(n.exports, n, n.exports, p), (a = !1);
    } finally {
      a && delete l[e];
    }
    return (n.loaded = !0), n.exports;
  }
  (p.m = s),
    (p.amdD = function () {
      throw Error("define cannot be used indirect");
    }),
    (p.amdO = {}),
    (e = []),
    (p.O = function (t, n, a, c) {
      if (n) {
        c = c || 0;
        for (var r = e.length; r > 0 && e[r - 1][2] > c; r--) e[r] = e[r - 1];
        e[r] = [n, a, c];
        return;
      }
      for (var f = 1 / 0, r = 0; r < e.length; r++) {
        for (
          var n = e[r][0], a = e[r][1], c = e[r][2], o = !0, d = 0;
          d < n.length;
          d++
        )
          f >= c &&
          Object.keys(p.O).every(function (e) {
            return p.O[e](n[d]);
          })
            ? n.splice(d--, 1)
            : ((o = !1), c < f && (f = c));
        if (o) {
          e.splice(r--, 1);
          var i = a();
          void 0 !== i && (t = i);
        }
      }
      return t;
    }),
    (p.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return p.d(t, { a: t }), t;
    }),
    (n = Object.getPrototypeOf
      ? function (e) {
          return Object.getPrototypeOf(e);
        }
      : function (e) {
          return e.__proto__;
        }),
    (p.t = function (e, a) {
      if (
        (1 & a && (e = this(e)),
        8 & a ||
          ("object" == typeof e &&
            e &&
            ((4 & a && e.__esModule) ||
              (16 & a && "function" == typeof e.then))))
      )
        return e;
      var c = Object.create(null);
      p.r(c);
      var r = {};
      t = t || [null, n({}), n([]), n(n)];
      for (var f = 2 & a && e; "object" == typeof f && !~t.indexOf(f); f = n(f))
        Object.getOwnPropertyNames(f).forEach(function (t) {
          r[t] = function () {
            return e[t];
          };
        });
      return (
        (r.default = function () {
          return e;
        }),
        p.d(c, r),
        c
      );
    }),
    (p.d = function (e, t) {
      for (var n in t)
        p.o(t, n) &&
          !p.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (p.f = {}),
    (p.e = function (e) {
      return Promise.all(
        Object.keys(p.f).reduce(function (t, n) {
          return p.f[n](e, t), t;
        }, [])
      );
    }),
    (p.u = function (e) {
      return 6835 === e
        ? "static/chunks/3a34cc27-c2cbb150a1ff478e.js"
        : "static/chunks/" +
            ({
              345: "b17906d7",
              1468: "1cc12f7f",
              3050: "bad47e52",
              3096: "queryString",
              4367: "02668ae5",
              4604: "tsub-middleware",
              5181: "30432d9c",
              5823: "30750f44",
              7493: "schemaFilter",
              7806: "5a09df74",
              8119: "auto-track",
              8150: "legacyVideos",
              8682: "sso",
              9214: "remoteMiddleware",
              9464: "ajs-destination",
            }[e] || e) +
            "." +
            {
              236: "a9581e44606a8a14",
              345: "76bb5eb05a2d9061",
              381: "d7b80fcdc0e09e98",
              468: "23bbf30f5e35853d",
              676: "fe6a652f9981888d",
              718: "cf842ebaccb6f497",
              1087: "d137f9710a9fe6c3",
              1170: "3df3cd3746f8939c",
              1199: "3489721ec825b165",
              1222: "55278888ef123327",
              1283: "38400fb374e8789e",
              1322: "6aba544f61118457",
              1351: "864a810d56ed1a32",
              1468: "273ecf7696e29f14",
              1773: "bc25d4f65267136f",
              1948: "5d0e70f5835b3229",
              1966: "8596a5c250b2c4f7",
              2144: "eeb3b67bff97205d",
              2664: "b2cf0f0507369da8",
              2774: "62aa612d4e279f8f",
              2885: "c72d65672e7cd849",
              2887: "a78a8287ed16c989",
              2967: "711fe4bc6109884f",
              3050: "b54ee0df819c6cf4",
              3096: "df174924c6968fe4",
              3263: "afe65bc6e887ca81",
              3277: "1a38e2c717d11915",
              3626: "0ded0dc4256724c3",
              3695: "bf4baee84c1eb44e",
              3785: "d5932c638f97c29b",
              4016: "65e1dd9d6156d4c4",
              4070: "ab88bff2aec4c785",
              4113: "0c0ee75dab4b3a1d",
              4114: "f0c19e9fbc4a2762",
              4367: "49384b6865f60a29",
              4426: "fc31d1edd73591f1",
              4473: "6ebdd2b0580fa70d",
              4561: "93c69b3c4ae8c3b9",
              4604: "e80aabdacec8ee14",
              4677: "1f08cb7721173304",
              4727: "46df5f0fae4d2f4e",
              4771: "ea07349ee212aba3",
              4842: "3a2ee8d17e077996",
              4918: "b90891c2d2e8d0e0",
              5169: "f44d148aee8e7891",
              5181: "cb3c7d6b29d577a1",
              5187: "a53f2b47b91f5d47",
              5288: "ebd325493b19a762",
              5434: "31a9d40a80613967",
              5502: "cfdf540aa5fc6912",
              5719: "1a42259f0c3d91c1",
              5760: "b5971dd9a8aac772",
              5795: "55e5243f166434d5",
              5823: "6c7d9ca4e6244388",
              5938: "d2fa171cd81ce785",
              6124: "d113c081a64e5d22",
              6169: "02bc1ccb11a74a80",
              6554: "cb601ef52e75ba72",
              6623: "6d3019bd58930a08",
              6729: "89d59f862c90aa9b",
              6748: "14eb1ec148ce3888",
              6867: "f87bc9a790264b4f",
              6875: "4850a4b3a756cbd5",
              6951: "9d183e36656aa648",
              6952: "be9ba0cfb994eca3",
              7007: "60d5c28f95c4e2d3",
              7178: "029f8e0a4b072ac3",
              7198: "167723c6a8d4c2ad",
              7493: "3a60974229840ffd",
              7806: "e29382a4b8aa7890",
              8009: "c6c0f36a9a82d8dd",
              8055: "4661ac45bd2aa0d4",
              8119: "fa6fc1112abad268",
              8150: "87e726622393959c",
              8221: "428132fa2ddb4362",
              8349: "0d6ff07f81bd22fe",
              8400: "2e51551af51b4d3d",
              8435: "4a358057f9240302",
              8451: "4ecc217011520dc4",
              8484: "dca456d746e23a34",
              8571: "da3f0c826c25bd0d",
              8682: "f3cb6fa051f7241b",
              8685: "3bd19e67c8f99b9e",
              8928: "f9d196cb62de6048",
              8990: "16ff72a4395e0cfb",
              9120: "4d9b93e5cf59cf8f",
              9214: "32ab39c72c4d4509",
              9271: "86969cdc0a48bb77",
              9284: "6fcceb80c2bc8f4f",
              9464: "6abd0ae9c08306a9",
              9559: "8dc6a0afa1a97e09",
              9610: "aead845693cd969c",
              9755: "aad01e04ff6aa973",
              9769: "23c3d7c22a431179",
              9789: "18139a19ece82954",
              9826: "b516b0877adce18e",
              9875: "0125dabc3dea3a4d",
              9923: "43491b4f823b2efd",
            }[e] +
            ".js";
    }),
    (p.miniCssF = function (e) {
      return (
        "static/css/" +
        {
          2888: "0fe13481c14a9df0",
          2967: "944a9aa5c00c7d0e",
          8682: "b2b5486bcec590b9",
        }[e] +
        ".css"
      );
    }),
    (p.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (p.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a = {}),
    (c = "_N_E:"),
    (p.l = function (e, t, n, r) {
      if (a[e]) {
        a[e].push(t);
        return;
      }
      if (void 0 !== n)
        for (
          var f, o, d = document.getElementsByTagName("script"), i = 0;
          i < d.length;
          i++
        ) {
          var u = d[i];
          if (
            u.getAttribute("src") == e ||
            u.getAttribute("data-webpack") == c + n
          ) {
            f = u;
            break;
          }
        }
      f ||
        ((o = !0),
        ((f = document.createElement("script")).charset = "utf-8"),
        (f.timeout = 120),
        p.nc && f.setAttribute("nonce", p.nc),
        f.setAttribute("data-webpack", c + n),
        (f.src = p.tu(e)),
        0 === f.src.indexOf(window.location.origin + "/") ||
          (f.crossOrigin = "anonymous")),
        (a[e] = [t]);
      var b = function (t, n) {
          (f.onerror = f.onload = null), clearTimeout(s);
          var c = a[e];
          if (
            (delete a[e],
            f.parentNode && f.parentNode.removeChild(f),
            c &&
              c.forEach(function (e) {
                return e(n);
              }),
            t)
          )
            return t(n);
        },
        s = setTimeout(
          b.bind(null, void 0, { type: "timeout", target: f }),
          12e4
        );
      (f.onerror = b.bind(null, f.onerror)),
        (f.onload = b.bind(null, f.onload)),
        o && document.head.appendChild(f);
    }),
    (p.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (p.nmd = function (e) {
      return (e.paths = []), e.children || (e.children = []), e;
    }),
    (p.tt = function () {
      return (
        void 0 === r &&
          ((r = {
            createScriptURL: function (e) {
              return e;
            },
          }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (r = trustedTypes.createPolicy("nextjs#bundler", r))),
        r
      );
    }),
    (p.tu = function (e) {
      return p.tt().createScriptURL(e);
    }),
    (p.p = "https://cdn.oaistatic.com/_next/"),
    (f = function (e, t, n, a) {
      var c = document.createElement("link");
      return (
        (c.rel = "stylesheet"),
        (c.type = "text/css"),
        (c.onerror = c.onload =
          function (r) {
            if (((c.onerror = c.onload = null), "load" === r.type)) n();
            else {
              var f = r && ("load" === r.type ? "missing" : r.type),
                o = (r && r.target && r.target.href) || t,
                d = Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
              (d.code = "CSS_CHUNK_LOAD_FAILED"),
                (d.type = f),
                (d.request = o),
                c.parentNode.removeChild(c),
                a(d);
            }
          }),
        (c.href = t),
        0 !== c.href.indexOf(window.location.origin + "/") &&
          (c.crossOrigin = "anonymous"),
        document.head.appendChild(c),
        c
      );
    }),
    (o = function (e, t) {
      for (
        var n = document.getElementsByTagName("link"), a = 0;
        a < n.length;
        a++
      ) {
        var c = n[a],
          r = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (r === e || r === t)) return c;
      }
      for (
        var f = document.getElementsByTagName("style"), a = 0;
        a < f.length;
        a++
      ) {
        var c = f[a],
          r = c.getAttribute("data-href");
        if (r === e || r === t) return c;
      }
    }),
    (d = { 2272: 0 }),
    (p.f.miniCss = function (e, t) {
      d[e]
        ? t.push(d[e])
        : 0 !== d[e] &&
          { 2967: 1, 8682: 1 }[e] &&
          t.push(
            (d[e] = new Promise(function (t, n) {
              var a = p.miniCssF(e),
                c = p.p + a;
              if (o(a, c)) return t();
              f(e, c, t, n);
            }).then(
              function () {
                d[e] = 0;
              },
              function (t) {
                throw (delete d[e], t);
              }
            ))
          );
    }),
    (p.b = document.baseURI || self.location.href),
    (i = { 2272: 0 }),
    (p.f.j = function (e, t) {
      var n = p.o(i, e) ? i[e] : void 0;
      if (0 !== n) {
        if (n) t.push(n[2]);
        else if (2272 != e) {
          var a = new Promise(function (t, a) {
            n = i[e] = [t, a];
          });
          t.push((n[2] = a));
          var c = p.p + p.u(e),
            r = Error();
          p.l(
            c,
            function (t) {
              if (p.o(i, e) && (0 !== (n = i[e]) && (i[e] = void 0), n)) {
                var a = t && ("load" === t.type ? "missing" : t.type),
                  c = t && t.target && t.target.src;
                (r.message =
                  "Loading chunk " + e + " failed.\n(" + a + ": " + c + ")"),
                  (r.name = "ChunkLoadError"),
                  (r.type = a),
                  (r.request = c),
                  n[1](r);
              }
            },
            "chunk-" + e,
            e
          );
        } else i[e] = 0;
      }
    }),
    (p.O.j = function (e) {
      return 0 === i[e];
    }),
    (u = function (e, t) {
      var n,
        a,
        c = t[0],
        r = t[1],
        f = t[2],
        o = 0;
      if (
        c.some(function (e) {
          return 0 !== i[e];
        })
      ) {
        for (n in r) p.o(r, n) && (p.m[n] = r[n]);
        if (f) var d = f(p);
      }
      for (e && e(t); o < c.length; o++)
        (a = c[o]), p.o(i, a) && i[a] && i[a][0](), (i[a] = 0);
      return p.O(d);
    }),
    (b = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(
      u.bind(null, 0)
    ),
    (b.push = u.bind(null, b.push.bind(b))),
    (p.nc = void 0);
})();
//# sourceMappingURL=webpack-7f1360463af1edaf.js.map
