(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6737],
  {
    55871: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return g;
          },
          default: function () {
            return v;
          },
        });
      var r = n(18450),
        i = n(5586),
        a = n(51532),
        o = n(85452),
        s = n(33471),
        c = n(53362),
        u = n(63605),
        l = n(59921),
        d = n(61236),
        f = n(82473);
      async function h(e) {
        let { ids: t } = e,
          n = [];
        for (let e of t) n.push(["ids", e]);
        let r = new URLSearchParams(n),
          i = await fetch(
            ""
              .concat(
                "https://chat.openai.com/backend-api",
                "/public/plugins/by-id?"
              )
              .concat(r),
            { method: "GET", headers: { "Content-Type": "application/json" } }
          );
        if (200 === i.status) return i.json();
        throw Error("Failed to get plugins by id: " + i.status);
      }
      n(36254), n(17555);
      var p = n(70079),
        y = n(35250);
      function O(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : O(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var g = !0;
      function v(e) {
        let t = e.sharedConversationId,
          { data: n, isError: r } = (0, d.a)({
            queryKey: ["shared-conversation/".concat(t)],
            queryFn: () => c.Z.getAuthedSharedConversation(t),
          }),
          { 0: O } = (0, p.useState)(() => (0, u.OX)()),
          { 0: g, 1: v } = (0, p.useState)(!1),
          b = (0, f.NL)();
        return (
          (0, p.useEffect)(() => {
            r && (window.location.href = (0, s.M5)(s.LT.SHARE_NOT_FOUND));
          }, [r]),
          (0, p.useEffect)(() => {
            (async function () {
              if (n && O) {
                var e;
                let r = null !== (e = n.plugin_ids) && void 0 !== e ? e : [];
                if (r.length > 0) {
                  let e = await h({ ids: r });
                  b.setQueryData(
                    e.items.map((e) => e.id),
                    e
                  );
                }
                u.tQ.initThreadFromServerData(O, n, !0, t), v(!0);
              }
            })();
          }, [n, t, O, b]),
          g
            ? e.continueMode
              ? (0, y.jsx)(
                  i.ZP,
                  _(_({}, e.chatPageProps), {}, { clientThreadId: O })
                )
              : (0, y.jsx)(l.gB.Provider, {
                  value: { serverSharedThreadId: t },
                  children: (0, y.jsx)(a.Z, {
                    clientThreadId: O,
                    setClientThreadId: () => {},
                    initiallyHighlightedMessageId:
                      null == n ? void 0 : n.highlighted_message_id,
                    continueConversationUrl:
                      null == n ? void 0 : n.continue_conversation_url,
                  }),
                })
            : (0, y.jsx)("div", {
                className: "flex h-full items-center justify-center",
                children: (0, y.jsx)(o.Z, {
                  className: "text-token-text-tertiary",
                }),
              })
        );
      }
    },
    91404: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/share/e/[[...shareParams]]",
        function () {
          return n(55871);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 91404));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=[[...shareParams]]-238705e826a44985.js.map
