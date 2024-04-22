(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8682],
  {
    54719: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          DO_NOT_IMPORT_ContextConnectorCitationCards: function () {
            return f;
          },
          DO_NOT_IMPORT_ContextConnectorDocumentParser: function () {
            return S;
          },
          DO_NOT_IMPORT_ContextConnectorPicker: function () {
            return F;
          },
        });
      var n = r(86685),
        s = r(61888),
        a = r(82920),
        l = r(35805),
        i = r.n(l),
        o = r(93040),
        c = r(80615),
        u = r(80910),
        d = r(35250);
      function m(e) {
        let t,
          { citationMetadata: r } = e;
        switch (r.text) {
          case "Google Drive":
            t = c.Z.src;
            break;
          case "Google Docs":
            t = o.Z.src;
            break;
          case "Notion":
            t = u.Z.src;
            break;
          default:
            (0, a.ZP)(r.text);
        }
        return (0, d.jsx)("a", {
          href: r.url,
          target: "_blank",
          children: (0, d.jsxs)("div", {
            className:
              "flex flex-col gap-[2px] overflow-clip rounded-lg border border-gray-200 px-[16px] py-[12px]",
            children: [
              (0, d.jsxs)("div", {
                className: "flex items-center gap-2 pb-0.5",
                children: [
                  (0, d.jsx)(i(), {
                    className: "h-[16px] w-[16px] object-contain",
                    src: t,
                    width: 16,
                    height: 16,
                    objectFit: "contain",
                    alt: r.text,
                  }),
                  (0, d.jsx)("p", {
                    className:
                      "text-xs leading-normal text-token-text-secondary",
                    children: r.text,
                  }),
                ],
              }),
              (0, d.jsx)("p", {
                className: "text-token -text-primary line-clamp-1 text-sm",
                children: r.title,
              }),
            ],
          }),
        });
      }
      let p = ["Google Drive", "Google Docs", "Notion"];
      function h(e) {
        if (!e) return !1;
        let { type: t, text: r } = e;
        return "webpage" === t && p.includes(null != r ? r : "");
      }
      function f(e) {
        let { messages: t } = e,
          r = (0, s.compact)(
            t
              .flatMap((e) => {
                var t, r;
                return null !==
                  (t =
                    null == e ||
                    null === (r = e.message) ||
                    void 0 === r ||
                    null === (r = r.metadata) ||
                    void 0 === r
                      ? void 0
                      : r.citations) && void 0 !== t
                  ? t
                  : [];
              })
              .flatMap((e) => e.metadata)
          ),
          a = (0, s.uniqBy)(
            r.map((e) => (0, n.gP)(!0, e)).filter(h),
            (e) => e.url
          );
        return (0, d.jsx)("div", {
          className: "mt-4 grid w-full grid-cols-[50%,50%] gap-3",
          children: a.map((e) => (0, d.jsx)(m, { citationMetadata: e }, e.url)),
        });
      }
      var g = r(49305),
        x = r(70079);
      let v = "AIzaSyBjWFkxENpfA2b0Leq9VtNLumQs4u2VbkA",
        b = null;
      function y(e) {
        return (
          null == b &&
            (b = new Promise((e, t) => {
              let r = document.createElement("script");
              (r.src = "https://apis.google.com/js/api.js"),
                (r.onload = e),
                (r.onerror = t),
                document.documentElement.appendChild(r);
            })
              .then(() =>
                Promise.all([
                  new Promise((e) => gapi.load("client", e)),
                  new Promise((e) => gapi.load("client:picker", e)),
                ])
              )
              .then(
                () => (
                  gapi.client.setToken({ access_token: e }),
                  gapi.client.init({
                    apiKey: v,
                    scope: "https://www.googleapis.com/auth/drive.file",
                    discoveryDocs: [
                      "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
                    ],
                  })
                )
              )),
          b
        );
      }
      async function j(e) {
        return (
          await y(e),
          new Promise((t) => {
            async function r(e) {
              switch (e.action) {
                case google.picker.Action.PICKED:
                  t(
                    e.docs.map((e) => ({
                      connector: g.PO.GDRIVE,
                      id: e.id,
                      title: e.name,
                      mimeType: e.mimeType,
                      url: e.url,
                    }))
                  );
                  break;
                case google.picker.Action.CANCEL:
                  t(null);
              }
            }
            new google.picker.PickerBuilder()
              .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
              .enableFeature(google.picker.Feature.SUPPORT_DRIVES)
              .setDeveloperKey(v)
              .setAppId("77377267392")
              .setOAuthToken(e)
              .addView(
                new google.picker.DocsView(google.picker.ViewId.DOCS)
                  .setIncludeFolders(!0)
                  .setSelectFolderEnabled(!1)
                  .setMode(google.picker.DocsViewMode.LIST)
              )
              .setCallback(r)
              .build()
              .setVisible(!0);
          })
        );
      }
      async function w(e) {
        let t = await gapi.client.drive.files.get({
          fileId: e,
          fields: "name,mimeType,webViewLink",
        });
        if (200 !== t.status)
          return Promise.reject("HTTP ".concat(t.status, " for ").concat(e));
        let { name: r, mimeType: n, webViewLink: s } = t.result;
        return {
          connector: g.PO.GDRIVE,
          id: e,
          title: null != r ? r : "",
          mimeType: null != n ? n : "",
          url: null != s ? s : "",
        };
      }
      var A = r(53362),
        O = r(61236);
      function k() {
        let { 0: e, 1: t } = (0, x.useState)([]),
          r = (0, O.a)({ queryKey: ["fetchConnectorData"], queryFn: _ });
        return (
          (0, x.useEffect)(() => {
            r.isSuccess && t(r.data);
          }, [r]),
          e
        );
      }
      function _(e) {
        let { queryKey: t } = e,
          [r] = t;
        return A.Z.checkConnectorAPI().then((e) => e.connectors.filter(N));
      }
      function N(e) {
        return e.type === g.PO.GDRIVE;
      }
      function S(e) {
        let { inputValue: t, parsedDocumentHandler: r } = e,
          n = k();
        return (
          (0, x.useEffect)(() => {
            r(
              (function (e, t) {
                let r = [];
                for (let n of t) {
                  let { type: t, access_token: s } = n;
                  if (null != s)
                    switch (t) {
                      case g.PO.GDRIVE:
                        r.push(
                          ...(function (e, t) {
                            return [...e.matchAll(P)].map((e) => ({
                              url: e[0],
                              id: e[2],
                              type: g.PO.GDRIVE,
                              tryFetch: (function (e, t) {
                                return async () => (await y(t), w(e));
                              })(e[2], t),
                            }));
                          })(e, s)
                        );
                      case g.PO.O365:
                    }
                }
                return r;
              })(t, n)
            );
          }, [t, n, r]),
          null
        );
      }
      let P =
        /\bhttps:\/\/docs\.google\.com\/(document|spreadsheets|presentation)\/d\/([\w-]+)\//gm;
      var E = r(29287),
        C = r(58819),
        D = r(14551),
        R = r(8718),
        M = r(36180),
        T = r(7137),
        Z = r(1454),
        L = r(9063),
        I = r(84692);
      function F(e) {
        let {
            displayType: t,
            modelSupportedImageMimeTypes: n,
            attachmentsProductFeature: s,
          } = e,
          a = k(),
          l = (0, L.Z)(),
          i = (0, x.useRef)(null),
          o = (0, x.useCallback)(() => {
            i.current && i.current.click();
          }, []),
          c = (0, x.useCallback)(() => {
            var e;
            let t = null === (e = i.current) || void 0 === e ? void 0 : e.files;
            Array.from(null != t ? t : []).forEach((e) =>
              (function (e) {
                let {
                  file: t,
                  modelSupportedImageMimeTypes: r,
                  intl: n,
                  attachmentsProductFeature: s,
                } = e;
                M.Dw.uploadFile(
                  (0, R.W7)(t),
                  t,
                  D.A.Retrieval,
                  r,
                  n,
                  void 0,
                  s
                );
              })({
                file: e,
                modelSupportedImageMimeTypes: n,
                attachmentsProductFeature: s,
                intl: l,
              })
            );
          }, [n, s, l]);
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)("input", {
              type: "file",
              ref: i,
              onChange: c,
              className: "hidden",
            }),
            (0, d.jsxs)(C.Z.Root, {
              children: [
                (0, d.jsx)(C.Z.Trigger, {
                  children:
                    "button" === t
                      ? (0, d.jsx)(E.z, {
                          size: "medium",
                          children: (0, d.jsx)(Z.wzc, {}),
                        })
                      : (0, d.jsx)(Z.OvN, {
                          className:
                            "icon-sm md:icon-md rounded-full bg-gray-500 text-white outline-none hover:bg-black",
                        }),
                }),
                (0, d.jsx)(C.Z.Portal, {
                  children: (0, d.jsxs)(C.Z.Content, {
                    children: [
                      a.map((e) =>
                        (0, d.jsx)(
                          C.Z.Item,
                          {
                            onClick: async () => {
                              let { access_token: t } = e;
                              if (t) {
                                let r = await (function (e, t) {
                                  switch (e) {
                                    case g.PO.GDRIVE:
                                      return j(t);
                                    case g.PO.O365:
                                      return Promise.resolve(null);
                                  }
                                })(e.type, t);
                                null != r &&
                                  r.forEach((t) => {
                                    null != t &&
                                      M.Dw.uploadConnectorFile(
                                        t.id,
                                        t.title,
                                        e.type,
                                        l
                                      );
                                  });
                              } else {
                                let { doOauthRedirect: t } =
                                  await Promise.resolve().then(
                                    r.bind(r, 42405)
                                  );
                                t({ id: e.id }, "#settings");
                              }
                            },
                            children: (0, d.jsxs)("div", {
                              className: "flex space-x-2",
                              children: [
                                e.type === g.PO.GDRIVE && (0, d.jsx)(T.dv9, {}),
                                e.type === g.PO.O365 && (0, d.jsx)(T.oV6, {}),
                                (0, d.jsx)("div", {
                                  children: e.access_token
                                    ? l.formatMessage(U.uploadFromMessage, {
                                        connector_name: e.name,
                                      })
                                    : l.formatMessage(U.signinWithMessage, {
                                        connector_name: e.name,
                                      }),
                                }),
                              ],
                            }),
                          },
                          e.id
                        )
                      ),
                      (0, d.jsx)(
                        C.Z.Item,
                        {
                          onClick: o,
                          children: (0, d.jsx)("div", {
                            className: "flex space-x-2",
                            children: (0, d.jsx)(I.Z, {
                              id: "ContextConnectorPicker.uploadFile",
                              defaultMessage: "Upload local file",
                            }),
                          }),
                        },
                        "upload"
                      ),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      let U = (0, r(68498).vU)({
        signinWithMessage: {
          id: "ContextConnectorPicker.signInWithMessage",
          defaultMessage: "Sign in with {connector_name}",
        },
        uploadFromMessage: {
          id: "ContextConnectorPicker.uploadWithMessage",
          defaultMessage: "Upload from {connector_name}",
        },
      });
    },
    13888: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ConversationTurnMessages: function () {
            return l;
          },
          ConversationTurnName: function () {
            return a;
          },
          ConversationTurnSender: function () {
            return s;
          },
        });
      var n = r(35250);
      function s(e) {
        let { isUserTurn: t, children: r } = e;
        return t ? null : (0, n.jsx)(n.Fragment, { children: r });
      }
      function a() {
        return null;
      }
      function l(e) {
        let { isUserTurn: t, children: r } = e;
        return t
          ? (0, n.jsx)("div", {
              className: "flex justify-end",
              children: (0, n.jsx)("div", {
                className:
                  "max-w-[90%] rounded-3xl bg-token-main-surface-secondary px-5 py-2.5",
                children: r,
              }),
            })
          : (0, n.jsx)(n.Fragment, { children: r });
      }
    },
    70173: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          GizmosDropdownItems: function () {
            return R;
          },
          HistoryPopover: function () {
            return D;
          },
          ProfileDropdown: function () {
            return C;
          },
        });
      var n = r(94079),
        s = r(41922),
        a = r(55837),
        l = r(58819),
        i = r(86263),
        o = r(5427),
        c = r(99392),
        u = r(9182),
        d = r(70187),
        m = r(72207),
        p = r(74346),
        h = r(89899),
        f = r(85062),
        g = r(2343),
        x = r(27550),
        v = r(27570),
        b = r(47712),
        y = r(63605),
        j = r(78253),
        w = r(99715),
        A = r(22189),
        O = r(96056),
        k = r(38801),
        _ = r(67852),
        N = r(41409),
        S = r(84692),
        P = r(35250);
      function E(e) {
        let { href: t, children: r, icon: n } = e,
          s = (0, N.useRouter)();
        return (0, P.jsx)(l.Z.Item, {
          icon: n,
          onSelect: () => s.push(t),
          children: r,
        });
      }
      function C() {
        let { data: e } = (0, b.rk)(),
          t = (0, b.t)(),
          { openSettings: r } = (0, v.Fr)();
        if (!t || !e) return null;
        let s = e.accountItems.length > 1,
          a = t.isWorkspaceAccount();
        return (0, P.jsxs)(l.Z.Root, {
          children: [
            (0, P.jsx)(l.Z.Trigger, {
              className: "px-2",
              children: (0, P.jsx)(n.zf, { iconSize: "gizmoConversation" }),
            }),
            (0, P.jsx)(l.Z.Portal, {
              children: (0, P.jsxs)(l.Z.Content, {
                collisionPadding: 20,
                children: [
                  s && (0, P.jsx)(g.S, { menuItemComponent: l.Z.Item }),
                  (0, P.jsx)(l.Z.Separator, {}),
                  a
                    ? (0, P.jsx)(x.b, {
                        menuItemComponent: l.Z.Item,
                        routedMenuItemComponent: E,
                      })
                    : (0, P.jsx)(f.W, { menuItemComponent: l.Z.Item }),
                  (0, P.jsx)(l.Z.Item, {
                    icon: d.RR,
                    onClick: () => r(),
                    children: (0, P.jsx)(S.Z, {
                      defaultMessage: "Settings",
                      id: "navigation.settings.0",
                    }),
                  }),
                  (0, P.jsx)(l.Z.Separator, {}),
                  (0, P.jsx)(l.Z.Item, {
                    onClick: () => {
                      k.A.logEvent(_.M.clickLogOut, { eventSource: "mouse" }),
                        (0, O.w7)();
                    },
                    icon: d.N_,
                    children: (0, P.jsx)(S.Z, {
                      defaultMessage: "Log out",
                      id: "navigation.logOut.0",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function D(e) {
        let { clientThreadId: t } = e,
          r = (0, s.V_)(),
          n = (0, y.XK)(t);
        return (0, P.jsxs)(A.fC, {
          children: [
            (0, P.jsx)(A.xz, {
              className: "rounded-lg p-2 hover:bg-token-main-surface-secondary",
              children: (0, P.jsx)(i.Oqj, {
                className: "icon-md text-token-text-secondary",
              }),
            }),
            (0, P.jsx)(A.h_, {
              children: (0, P.jsx)(A.VY, {
                sideOffset: 10,
                collisionPadding: 20,
                className:
                  "max-h-[600px] max-w-xs overflow-auto rounded-xl border border-token-border-light bg-token-main-surface-primary pl-2 shadow-xl",
                children: (0, P.jsx)(a.Z, {
                  activeId: r ? void 0 : n,
                  isPrimaryBackgroundColor: !0,
                }),
              }),
            }),
          ],
        });
      }
      function R(e) {
        let { clientThreadId: t } = e,
          r = (0, y.eV)(t),
          n = (0, b.t)(),
          { listItems: s } = (0, p._f)(!1),
          a = (0, N.useRouter)();
        return null != n && n.canInteractWithGizmos
          ? (0, P.jsxs)(P.Fragment, {
              children: [
                (0, P.jsx)(h.Cl, {}),
                s.map((e) => {
                  let { gizmo: n, section: s } = e;
                  return (0, P.jsx)(
                    M,
                    {
                      gizmo: n,
                      section: s,
                      clientThreadId: t,
                      isActive: n.gizmo.id === r,
                    },
                    n.gizmo.id
                  );
                }),
                (0, P.jsx)(h.UA, {
                  onSelect: () => {
                    a.push((0, j.cy)());
                  },
                  children: (0, P.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, P.jsx)(d.hk, { className: "icon-md" }),
                      (0, P.jsx)(S.Z, {
                        defaultMessage: "Explore GPTs",
                        id: "navigation.exploreGPTs.0",
                      }),
                    ],
                  }),
                }),
              ],
            })
          : null;
      }
      function M(e) {
        let { gizmo: t, isActive: r, clientThreadId: n } = e,
          s = (0, N.useRouter)(),
          a = (0, P.jsxs)(h.tc, {
            $as: r ? w.fF : w.Xi,
            className: "justify-between",
            onSelect: () => s.push((0, u.m_)(t)),
            children: [
              (0, P.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [
                  (0, P.jsx)(o.Z, {
                    src: t.gizmo.display.profile_picture_url,
                    isFirstParty: !1,
                    className: "icon-md flex-shrink-0",
                  }),
                  t.gizmo.display.name || c.zf,
                ],
              }),
              (0, P.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  r && (0, P.jsx)(i.nQG, { className: "icon-md" }),
                  r &&
                    (0, P.jsx)(i.ob9, {
                      className: "icon-md text-token-text-tertiary",
                    }),
                ],
              }),
            ],
          });
        return r
          ? (0, P.jsxs)(w.Tr, {
              children: [
                a,
                (0, P.jsx)(w.Uv, {
                  children: (0, P.jsx)(w.tu, {
                    className:
                      "mt-2 max-h-[calc(100vh-300px)] min-w-[100px] max-w-xs overflow-auto rounded-lg border border-token-border-light bg-token-main-surface-primary shadow-lg",
                    sideOffset: -10,
                    alignOffset: -15,
                    children: (0, P.jsx)(m.GizmoInformationDropdownItems, {
                      gizmoResource: t,
                      clientThreadId: n,
                      showReportModal: function () {
                        throw Error("Function not implemented.");
                      },
                    }),
                  }),
                }),
              ],
            })
          : a;
      }
    },
    98834: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          GizmoContactsEditor: function () {
            return v;
          },
        });
      var n = r(18450),
        s = r(49305),
        a = r(5427),
        l = r(9182),
        i = r(10342),
        o = r(70187),
        c = r(89899),
        u = r(32870),
        d = r(67680),
        m = r(19841),
        p = r(70079),
        h = r(9063),
        f = r(35250);
      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : g(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function v(e) {
        var t, r, n;
        let { gizmoEditorData: a, updateGizmo: l } = e,
          o =
            null == a || null === (t = a.tools) || void 0 === t
              ? void 0
              : t.find((e) => e.type === s.qK.CONTACTS),
          { 0: u, 1: m } = (0, p.useState)(
            null !==
              (r =
                null == o || null === (n = o.settings) || void 0 === n
                  ? void 0
                  : n.contacts) && void 0 !== r
              ? r
              : []
          ),
          { 0: g, 1: v } = (0, p.useState)(!1),
          y = (0, h.Z)(),
          j = (e) => {
            l((t) =>
              x(
                x({}, t),
                {},
                {
                  tools: o
                    ? t.tools.map((t) =>
                        t.type === s.qK.CONTACTS
                          ? x(
                              x({}, t),
                              {},
                              {
                                settings: x(
                                  x({}, t.settings),
                                  {},
                                  { contacts: e }
                                ),
                              }
                            )
                          : t
                      )
                    : [
                        ...t.tools,
                        { type: s.qK.CONTACTS, settings: { contacts: e } },
                      ],
                }
              )
            );
          };
        return (0, f.jsxs)(i.hj, {
          children: [
            g &&
              (0, f.jsx)(d.ZP, {
                onClick: (e) => {
                  null != e &&
                    e.gizmo.id &&
                    (u.includes(e.gizmo.id)
                      ? m(u.filter((t) => t !== e.gizmo.id))
                      : m([...u, e.gizmo.id]));
                },
                onClose: () => {
                  v(!1), j(u);
                },
              }),
            (0, f.jsx)(i.lX, {
              label: "Contacts",
              description: y.formatMessage({
                id: "gizmo.contactsExplanation",
                defaultMessage: "Other GPTs that this GPT can talk to.",
              }),
            }),
            (0, f.jsx)("div", {
              className: "mb-2 space-y-1",
              children: u.map((e, t) =>
                (0, f.jsx)(
                  b,
                  {
                    gizmoId: e,
                    onRemove: () => {
                      let t = u.filter((t) => t !== e);
                      m(t), j(t);
                    },
                  },
                  t
                )
              ),
            }),
            (0, f.jsx)(c.cY, { onClick: () => v(!0), children: "Add Contact" }),
          ],
        });
      }
      function b(e) {
        var t;
        let { gizmoId: r, onRemove: n } = e,
          { data: s } = (0, l.b9)(r),
          i = !!(null == s || null === (t = s.gizmo.tags) || void 0 === t
            ? void 0
            : t.includes(u.U9.FirstParty));
        return s
          ? (0, f.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between rounded-lg bg-token-main-surface-secondary px-2",
              children: [
                (0, f.jsxs)("div", {
                  className: (0, m.default)(
                    "group flex h-10 items-center gap-2 rounded-lg px-2 font-medium"
                  ),
                  children: [
                    (0, f.jsx)(a.Z, {
                      isFirstParty: i,
                      src: s.gizmo.display.profile_picture_url,
                      className: "h-6 w-6 flex-shrink-0",
                    }),
                    (0, f.jsxs)("div", {
                      className:
                        "space-x-2 overflow-hidden text-ellipsis text-sm font-light text-token-text-secondary",
                      children: [
                        (0, f.jsx)("span", {
                          className: "font-medium text-token-text-primary",
                          children: s.gizmo.display.name,
                        }),
                        (0, f.jsx)("span", {
                          className:
                            "flex-grow truncate text-sm font-light text-token-text-secondary sm:max-w-xs lg:max-w-md",
                          children: s.gizmo.display.description,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsx)("button", {
                  className: "text-sm font-bold",
                  onClick: n,
                  children: (0, f.jsx)(o.v7, {
                    className:
                      "icon-md text-token-text-secondary hover:text-token-text-primary",
                  }),
                }),
              ],
            })
          : null;
      }
    },
    63577: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          GizmoRolodex: function () {
            return x;
          },
        });
      var n = r(18450),
        s = r(5427),
        a = r(94063),
        l = r(67680),
        i = r(11655),
        o = r(61236),
        c = r(19841),
        u = r(70079),
        d = r(1454),
        m = r(84692),
        p = r(35250);
      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : h(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let g = () =>
        (0, o.a)({
          queryKey: ["gizmoRolodex"],
          queryFn: async () => a.U.getRolodex(),
        });
      function x() {
        let { 0: e, 1: t } = (0, u.useState)(!1),
          { 0: r, 1: n } = (0, u.useState)(null),
          { data: s } = g();
        return (0, p.jsxs)(i.ZR, {
          children: [
            (0, p.jsx)("div", {
              className: "mb-2",
              children: (0, p.jsx)(m.Z, {
                id: "personalizationSettings.rolodexLabel",
                defaultMessage: "Rolodex",
              }),
            }),
            r
              ? (0, p.jsx)("div", {
                  className: "animate-slideDownAndFadeLong",
                  children: (0, p.jsx)(
                    b,
                    f(
                      f({}, r),
                      {},
                      {
                        onBack: () => {
                          n(null);
                        },
                      }
                    )
                  ),
                })
              : e
                ? (0, p.jsx)("div", {
                    className: "animate-slideDownAndFadeLong",
                    children: (0, p.jsx)(l.ZP, {
                      onClick: async (e) => {
                        null != e &&
                          e.gizmo.id &&
                          (await a.U.upsertToRolodex({ gizmoId: e.gizmo.id }),
                          t(!1));
                      },
                      onClose: () => {
                        t(!1);
                      },
                    }),
                  })
                : (0, p.jsxs)("div", {
                    role: "button",
                    className: "grid grid-cols-3 items-center gap-1",
                    children: [
                      (null != s ? s : []).map((e, t) =>
                        (0, p.jsx)(
                          v,
                          {
                            gizmo: e.gizmo,
                            rolodex: e.rolodex,
                            onClick: async () => {
                              n(e);
                            },
                          },
                          t
                        )
                      ),
                      (null != s ? s : []).length < 3 &&
                        (0, p.jsx)(v, {
                          onClick: () => {
                            t(!0);
                          },
                        }),
                    ],
                  }),
          ],
        });
      }
      function v(e) {
        let { gizmo: t, rolodex: r, onClick: n } = e,
          { 0: l, 1: i } = (0, u.useState)(!1),
          o = null == r ? void 0 : r.is_rolodex;
        return (0, p.jsx)("div", {
          className: (0, c.default)(
            "relative flex max-w-32 flex-col items-center space-y-1 rounded-xl font-medium",
            o ? "border border-brand-green-800" : "",
            l ? "border border-token-border-heavy" : ""
          ),
          onMouseOverCapture: () => {
            i(!0);
          },
          onMouseOutCapture: () => {
            i(!1);
          },
          children:
            l && t
              ? (0, p.jsxs)("div", {
                  className: "flex items-center space-x-6 p-7",
                  children: [
                    o &&
                      (0, p.jsx)(d.vPQ, {
                        onClick: n,
                        className: "icon-xl opacity-50 hover:opacity-100",
                      }),
                    o
                      ? (0, p.jsx)(d.faY, {
                          onClick: async () => {
                            await a.U.upsertToRolodex({
                              gizmoId: t.id,
                              remove: !0,
                            });
                          },
                          className: "icon-xl opacity-50 hover:opacity-100",
                        })
                      : (0, p.jsx)(d.tUt, {
                          onClick: async () => {
                            await a.U.upsertToRolodex({ gizmoId: t.id });
                          },
                          className: "icon-xl opacity-50 hover:opacity-100",
                        }),
                  ],
                })
              : t
                ? (0, p.jsx)(p.Fragment, {
                    children: (0, p.jsxs)("div", {
                      className:
                        "flex flex-col items-center p-3 hover:opacity-50",
                      children: [
                        (0, p.jsx)(s.Z, {
                          className: "mb-2 h-10 w-10",
                          isFirstParty: !1,
                          src: t.display.profile_picture_url,
                        }),
                        (0, p.jsx)("div", {
                          className: "truncate font-medium",
                          children: t.display.name,
                        }),
                      ],
                    }),
                  })
                : (0, p.jsxs)("div", {
                    className: "flex flex-col items-center p-5",
                    children: [
                      (0, p.jsx)(d.O9D, { className: "icon-lg mb-2" }),
                      (0, p.jsx)("span", {
                        children: (0, p.jsx)(m.Z, {
                          id: "gizmoRolodex.emptyLabel",
                          defaultMessage: "GPT",
                        }),
                      }),
                    ],
                  }),
        });
      }
      function b(e) {
        var t;
        let { gizmo: r, rolodex: n, onBack: l } = e,
          { 0: i, 1: o } = (0, u.useState)(
            null !== (t = null == n ? void 0 : n.usage_description) &&
            void 0 !== t
              ? t
              : ""
          );
        return (0, p.jsxs)("div", {
          className: "flex flex-col items-center p-3",
          children: [
            (0, p.jsx)(s.Z, {
              className: "mb-2 h-10 w-10",
              isFirstParty: !1,
              src: r.display.profile_picture_url,
            }),
            (0, p.jsx)("div", {
              className: "truncate font-medium",
              children: r.display.name,
            }),
            (0, p.jsx)("div", {
              className: "w-full",
              children: (0, p.jsx)("textarea", {
                rows: 5,
                value: i,
                onChange: (e) => o(e.target.value),
                placeholder: "When should your assistant talk to this GPT?",
                className:
                  "m-2 w-full resize-none rounded bg-token-main-surface-secondary text-xs text-token-text-primary",
              }),
            }),
            (0, p.jsxs)("div", {
              className: "mt-2 flex space-x-32",
              children: [
                (0, p.jsx)("div", {
                  onClick: l,
                  role: "button",
                  children: (0, p.jsx)(d.YFh, { className: "icon-md" }),
                }),
                (0, p.jsx)("div", {
                  onClick: () => {
                    a.U.upsertToRolodex({ gizmoId: r.id, usageDescription: i }),
                      l();
                  },
                  role: "button",
                  children: (0, p.jsx)(d.mW3, { className: "icon-md" }),
                }),
                (0, p.jsx)("div", {
                  onClick: async () => {
                    await a.U.upsertToRolodex({ gizmoId: r.id, remove: !0 }),
                      l();
                  },
                  role: "button",
                  children: (0, p.jsx)(d.Ybf, { className: "icon-md" }),
                }),
              ],
            }),
          ],
        });
      }
    },
    94556: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          EditorEntryButton: function () {
            return ek;
          },
          EditorModal: function () {
            return e_;
          },
          EditorPageBody: function () {
            return eN;
          },
        });
      var n,
        s = r(18450),
        a = r(99945),
        l = r(29287),
        i = r(11335),
        o = r(67217),
        c = r(70187),
        u = r(21643),
        d = r(30269),
        m = r(78103),
        p = r(51362);
      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      let f = {
          systemPrompt: "You are a helpful assistant.",
          userPrompt: "Make it better.",
        },
        g = (0, m.ZP)(
          (0, p.n)(() =>
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? h(Object(r), !0).forEach(function (t) {
                      (0, s.Z)(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : h(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
              }
              return e;
            })({}, f)
          )
        ),
        x = {
          setSystemPrompt: (e) => {
            g.setState((t) => {
              t.systemPrompt = e;
            });
          },
          setUserPrompt: (e) => {
            g.setState((t) => {
              t.userPrompt = e;
            });
          },
          setModel: (e) => {
            g.setState((t) => {
              t.model = e;
            });
          },
        };
      var v = r(25048),
        b = r(60581),
        y = r(99715),
        j = r(61888),
        w = r(70079),
        A = r(1454),
        O = r(35250);
      function k() {
        var e;
        let { 0: t, 1: r } = (0, w.useState)(!1),
          n = g(),
          s = (0, v.NX)(),
          a = async () => {
            r(!0),
              await b.$.streamCompletion({
                completionRequest: n,
                onMessage: j.noop,
              }),
              r(!1);
          };
        return (0, O.jsxs)("div", {
          className: "flex flex-col gap-2 p-2",
          children: [
            (0, O.jsxs)("div", {
              className: "flex flex-col space-y-1",
              children: [
                (0, O.jsx)("span", { children: "User Prompt" }),
                (0, O.jsx)(u.Z, {
                  name: "userPrompt",
                  placeholder: "Your prompt...",
                  onChange: (e) => {
                    x.setUserPrompt(e.target.value);
                  },
                  value: n.userPrompt,
                }),
              ],
            }),
            (0, O.jsxs)("div", {
              className: "flex flex-col space-y-1",
              children: [
                (0, O.jsx)("span", { children: "System Prompt" }),
                (0, O.jsx)(d.Z, {
                  placeholder: "You are a helpful assistant",
                  rows: 8,
                  onChange: (e) => {
                    x.setSystemPrompt(e.target.value);
                  },
                  value: n.systemPrompt,
                }),
              ],
            }),
            (0, O.jsx)("div", {
              className: "self-start",
              children: (0, O.jsx)(_, {
                model:
                  null !== (e = n.model) && void 0 !== e ? e : "gpt-3.5-turbo",
                onChange: (e) => {
                  x.setModel(e);
                },
              }),
            }),
            (0, O.jsx)(l.z, {
              loading: t,
              color: "primary",
              onClick: a,
              className: "max-w-xs grow-0",
              children: (0, O.jsx)(A.LbG, { className: "icon-sm" }),
            }),
            (0, O.jsxs)("div", {
              className: "my-2 space-y-2 overflow-x-auto text-sm",
              children: [
                (0, O.jsx)("div", { children: "Last Request" }),
                (0, O.jsx)("pre", {
                  className: "whitespace-pre-wrap",
                  children: JSON.stringify(s.lastRequest, null, 2),
                }),
                (0, O.jsx)("div", { children: "Last Response" }),
                (0, O.jsx)("pre", {
                  className: "whitespace-pre-wrap",
                  children: s.lastResponse
                    .split("<br/>")
                    .map((e) =>
                      (0, O.jsxs)(O.Fragment, {
                        children: [e, (0, O.jsx)("br", {})],
                      })
                    ),
                }),
              ],
            }),
          ],
        });
      }
      function _(e) {
        let { model: t, onChange: r } = e;
        return (0, O.jsxs)(y.fC, {
          children: [
            (0, O.jsx)(y.xz, {
              children: (0, O.jsx)("div", {
                role: "button",
                className:
                  "rounded border-4 border-token-border-light px-4 py-2",
                children: t,
              }),
            }),
            (0, O.jsx)(y.Uv, {
              children: (0, O.jsxs)(y.VY, {
                sideOffset: 7,
                children: [
                  (0, O.jsx)(y.ck, {
                    className:
                      "border-2 bg-token-main-surface-tertiary px-4 py-2 hover:cursor-pointer hover:bg-token-main-surface-primary",
                    onClick: () => r("gpt-3.5-turbo"),
                    children: "3.5T",
                  }),
                  (0, O.jsx)(y.ck, {
                    className:
                      "border-2 bg-token-main-surface-tertiary px-4 py-2 hover:cursor-pointer hover:bg-token-main-surface-primary",
                    onClick: () => r("gpt-4-turbo-preview"),
                    children: "4T",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var N = r(55681),
        S = r(79134),
        P = r(3107),
        E = r.n(P);
      function C(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : C(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let R = new S.V_({
        nodes: D(
          D({}, N.fK.spec.nodes.toObject()),
          {},
          {
            generatedText: {
              inline: !0,
              group: "inline",
              content: "text*",
              attrs: { class: { default: "generated-text" } },
              parseDOM: [{ tag: "span.generated-text" }],
              toDOM: () => ["span", { class: E()["generated-text"] }, 0],
            },
          }
        ),
        marks: D({}, N.fK.spec.marks.toObject()),
      });
      function M(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : M(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let Z = new N.xj(R, N.EU.tokenizer, T({}, N.EU.tokens)),
        L = new N.nZ(T({}, N.Dm.nodes), T({}, N.Dm.marks));
      function I(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : I(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let U = { documentGoal: "", comments: [] },
        z = (0, m.ZP)((0, p.n)(() => F({}, U))),
        q = {
          upsertComment: (e) => {
            z.setState((t) => {
              let r = t.comments.findIndex((t) => t.id === e.id);
              -1 === r
                ? t.comments.push(e)
                : (t.comments[r] = F(F({}, t.comments[r]), e));
            });
          },
          deleteComment: (e) => {
            z.setState((t) => {
              t.comments = t.comments.filter((t) => t.id !== e);
            });
          },
          editGoal: (e) => {
            z.setState((t) => {
              t.documentGoal = e;
            });
          },
        };
      function V(e, t) {
        let { original: r } = e,
          n = null;
        return (
          t.doc.descendants((e, t) => {
            if (n) return !1;
            if (e.text) {
              let s = e.text.indexOf(r);
              if (-1 !== s) {
                let e = t + s,
                  a = e + r.length;
                return (n = { from: e, to: a }), !1;
              }
            }
          }),
          n
        );
      }
      function Q(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Q(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Q(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let G = async (e, t, r, n) => {
        let s,
          a = "",
          { from: l } = e.state.selection,
          i = e.state.selection.content(),
          o = i.content.textBetween(0, i.content.size);
        try {
          await b.$.streamCompletion({
            completionRequest: B(
              B(
                {},
                (function (e) {
                  let { fullContent: t, selectedContent: r, completion: n } = e;
                  return {
                    systemPrompt: n.systemPrompt,
                    userPrompt: "Here is the full draft:\n"
                      .concat(
                        t,
                        '\n\nThis is the text that is currently selected: "'
                      )
                      .concat(
                        r,
                        '"\n\nI want to rewrite the selected text with this guidance: '
                      )
                      .concat(
                        n.userPrompt,
                        "\n\nRespond with the plain rewritten text without quotes, nothing else."
                      ),
                  };
                })({
                  fullContent: e.state.doc.textContent,
                  selectedContent: o,
                  completion: t,
                })
              ),
              {},
              { model: t.model }
            ),
            onMessage: (t) => {
              var r, n;
              let i = e.state.tr;
              0 === a.length && i.deleteSelection(), (a += t);
              let o =
                l +
                (null !==
                  (r =
                    null === (n = s) || void 0 === n ? void 0 : n.nodeSize) &&
                void 0 !== r
                  ? r
                  : 0);
              (s = R.nodes.generatedText.create({}, R.text(a))),
                i.replaceRangeWith(l, o, s),
                e.dispatch(i);
            },
          }),
            r(o, a);
        } catch (e) {
          n(e);
        }
      };
      var H = r(25494),
        K = r(8844);
      function W(e) {
        let { comment: t, onAccept: r, onReject: n } = e;
        return (0, O.jsxs)(
          "div",
          {
            className:
              "relative flex max-w-sm flex-col space-y-2 rounded-lg border border-token-border-heavy bg-token-sidebar-surface-secondary p-4 drop-shadow-lg",
            children: [
              t.rationale &&
                (0, O.jsx)("div", {
                  className: "overflow-ellipsis break-words text-xs font-bold",
                  children: (0, O.jsxs)("span", {
                    className: "font-medium",
                    children: ["Rationale: ", t.rationale],
                  }),
                }),
              (0, O.jsxs)("div", {
                className:
                  "line-clamp-2 overflow-ellipsis break-words text-sm italic hover:line-clamp-none hover:overflow-visible",
                children: [
                  (0, O.jsx)("span", {
                    className: "font-medium",
                    children: t.author,
                  }),
                  "\xa0",
                  'replaced "'.concat(t.original, '"'),
                ],
              }),
              (0, O.jsx)("p", { className: "text-sm", children: t.completion }),
              (0, O.jsxs)("div", {
                className: "flex space-x-2",
                children: [
                  (0, O.jsx)("div", {
                    role: "button",
                    className:
                      "text-xs text-token-text-secondary hover:underline",
                    onClick: n,
                    children: (0, O.jsx)(A.q5L, { className: "icon-sm" }),
                  }),
                  (0, O.jsx)("div", {
                    role: "button",
                    className: "text-xs text-brand-green hover:underline",
                    onClick: r,
                    children: (0, O.jsx)(A.UgA, { className: "icon-sm" }),
                  }),
                ],
              }),
            ],
          },
          t.id
        );
      }
      function X(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? X(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : X(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function J(e) {
        let { getCurrentView: t } = e,
          r = z(),
          n = g(),
          s = (0, H.D)({
            mutationFn: (e) => b.$.syncCompletion({ completionRequest: e }),
            onSuccess: (e) => {
              e.comments.forEach((e) =>
                q.upsertComment({
                  id: (0, K.Z)(),
                  author: "Jidori",
                  original: e.originalText,
                  completion: e.replacementText,
                  rationale: e.rationale,
                  type: e.type,
                })
              );
            },
          });
        return (0, O.jsxs)("div", {
          className: "flex flex-col items-center gap-2",
          children: [
            (0, O.jsx)(d.Z, {
              value: r.documentGoal,
              name: "document-goal",
              className: "rounded-md text-sm",
              onChange: (e) => {
                q.editGoal(e.target.value);
              },
            }),
            (0, O.jsx)("div", {
              className: "mb-10 w-full space-y-2",
              children: r.comments.map((e) =>
                (0, O.jsx)(
                  W,
                  {
                    comment: e,
                    onAccept: () => {
                      let r = t();
                      r &&
                        (function (e, t) {
                          q.deleteComment(e.id);
                          let r = V(e, t.state);
                          if (!r) return;
                          let n =
                            "delete" === e.type
                              ? t.state.tr.delete(r.from, r.to)
                              : t.state.tr.replaceWith(
                                  r.from,
                                  r.to,
                                  t.state.schema.text(e.completion)
                                );
                          t.dispatch(n);
                        })(e, r);
                    },
                    onReject: () => {
                      let r = t();
                      r &&
                        (function (e, t) {
                          q.deleteComment(e.id);
                          let r = V(e, t.state);
                          if (!r) return;
                          let n = t.state.tr.replaceWith(
                            r.from,
                            r.to,
                            t.state.schema.text(e.original)
                          );
                          t.dispatch(n);
                        })(e, r);
                    },
                  },
                  e.id
                )
              ),
            }),
            (0, O.jsxs)("div", {
              className:
                "absolute bottom-0 z-10 flex w-1/4 space-x-2 rounded-xl px-2",
              children: [
                (0, O.jsx)(u.Z, {
                  value: n.userPrompt,
                  onChange: (e) => {
                    x.setUserPrompt(e.target.value);
                  },
                  name: "prompt-jidori",
                  color: "search",
                  className:
                    "grow bg-token-sidebar-surface-tertiary py-2.5 opacity-100",
                }),
                (0, O.jsx)(l.z, {
                  color: "primary",
                  className: "my-auto grow-0",
                  loading: s.isPending,
                  onClick: async () => {
                    var e, a, l;
                    let i =
                      null === (e = t()) || void 0 === e ? void 0 : e.state.doc;
                    if (!i) return;
                    let o = n.userPrompt,
                      c =
                        ((a = r.documentGoal),
                        (l = L.serialize(i, { tightLists: !0 })),
                        {
                          system:
                            "You are an expert writer editing a draft of a piece of writing. The goal of this document is: "
                              .concat(
                                a,
                                "\nCurrently, you are tasked with this job: "
                              )
                              .concat(
                                o,
                                '\n\nThe document is written in markdown. Do not edit the markdown formatting, only make changes to the text itself. If no changes are required in a section of the document, leave it alone.\nComments can be either edits or deletions of existing material. Your response should be a list of comments in JSON format with the following structure:\n{\n  comments: {\n    type: "delete" | "edit" (if delete, leave replacementText empty);\n    rationale: "string (explain the rationale behind the edit in a few words or short phrase)";\n    originalText: "string (the original string verbatim in plaintext)";\n    replacementText: "string (your suggested string in plaintext)";\n  }[]\n}\n\nReturn a list of comment objects in JSON as you edit the user\'s rough draft, pointing out issues and suggesting improvements. Here is the draft:'
                              ),
                          user: l,
                        });
                    await s.mutateAsync(
                      Y(
                        Y({}, n),
                        {},
                        { userPrompt: c.user, systemPrompt: c.system }
                      )
                    );
                  },
                  children: (0, O.jsx)(A.LbG, { className: "icon-sm" }),
                }),
              ],
            }),
          ],
        });
      }
      var $ = r(85452),
        ee = r(95407);
      function et(e) {
        let {
            visible: t,
            style: r,
            toggleBold: n,
            toggleItalic: s,
            view: a,
            onHide: l,
          } = e,
          { 0: i, 1: o } = (0, w.useState)(!1),
          c = g();
        if (!t) return null;
        let u = (e, t) => {
          o(!1),
            l(),
            q.upsertComment({
              id: (0, K.Z)(),
              completion: t,
              original: e,
              author: "Jidori",
            });
        };
        return (0, O.jsxs)("div", {
          style: r,
          className:
            "absolute flex items-center rounded-lg border border-token-border-heavy bg-token-sidebar-surface-secondary text-sm font-medium text-token-text-primary drop-shadow-md",
          children: [
            (0, O.jsx)("div", {
              role: "button",
              onClick: n,
              className: "border-r border-token-border-light p-2",
              children: "Bold",
            }),
            (0, O.jsx)("div", {
              role: "button",
              onClick: s,
              className: "border-l border-token-border-light p-2",
              children: "Italic",
            }),
            (0, O.jsx)("div", {
              role: "button",
              onClick: () => {
                o(!0),
                  G(a, c, u, (e) => {
                    ee.m.danger("Error replacing selection", e), o(!1);
                  });
              },
              className: "border-l border-token-border-light p-2",
              children: i ? (0, O.jsx)($.Z, {}) : "Replace",
            }),
          ],
        });
      }
      var er = r(71307),
        en = r(60314);
      let es = (0, er.S0)(/^\s*([-+*])\s$/, R.nodes.bullet_list),
        ea = (0, er.S0)(/^\s*>\s$/, R.nodes.blockquote),
        el = (0, er.zK)(/^```$/, R.nodes.code_block),
        ei = (0, er.zK)(/^#\s$/, R.nodes.heading, () => ({ level: 1 })),
        eo = (0, er.zK)(/^##\s$/, R.nodes.heading, () => ({ level: 2 })),
        ec = (0, er.zK)(/^###\s$/, R.nodes.heading, () => ({ level: 3 })),
        eu = new er.VK(/^---$/, (e, t, r, n) => {
          let { tr: s } = e;
          if (t) {
            let e = R.nodes.paragraph.create(),
              t = R.nodes.horizontal_rule.create();
            s.replaceWith(r - 1, n, S.HY.from([t, e]));
            let a = s.mapping.map(n + 1);
            s.setSelection(en.Bs.near(s.doc.resolve(a)));
          }
          return s;
        }),
        ed = (0, er.Hw)({ rules: [es, ea, el, ei, eo, ec, eu] });
      var em = r(12498),
        ep = r(81093);
      let eh = {
        "Mod-z": ep.Yw,
        "Mod-y": ep.KX,
        "Mod-b": (0, em.w9)(R.marks.strong),
        "Mod-i": (0, em.w9)(R.marks.em),
      };
      var ef = r(56637);
      let eg = new en.H$("highlight"),
        ex = new en.Sy({
          key: eg,
          state: {
            init: () => ef.EH.empty,
            apply: (e, t, r, n) => {
              let s = e.getMeta(eg);
              if (s && s.length > 0) {
                let e = [];
                return (
                  s.forEach((t) => {
                    let r = V(t, n);
                    if (!r) return;
                    let s = ef.p.inline(r.from, r.to, {
                      class:
                        "delete" === t.type
                          ? E()["highlighted-delete"]
                          : E()["highlighted-edit"],
                    });
                    e.push(s);
                  }),
                  ef.EH.create(n.doc, e)
                );
              }
              return t.map(e.mapping, e.doc);
            },
          },
          props: {
            decorations(e) {
              return this.getState(e);
            },
          },
        });
      var ev = r(19841),
        eb = r(18004),
        ey = r(88488),
        ej = r(84692);
      function ew(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eA(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ew(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ew(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let eO = r(21389).Z.button(
        n ||
          (n = (0, a.Z)([
            "p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible",
          ]))
      );
      function ek(e) {
        let { onClick: t } = e;
        return (0, O.jsx)(i.u, {
          label: (0, O.jsx)(ej.Z, {
            id: "ConversationTurn.openEditorTooltip",
            defaultMessage: "Open in Editor",
          }),
          sideOffset: 0,
          children: (0, O.jsx)(eO, {
            onClick: t,
            children: (0, O.jsx)(c.eu, { className: "icon-md" }),
          }),
        });
      }
      function e_(e) {
        let { userMessage: t, assistantMessage: r, onClose: n } = e;
        if (
          !r ||
          "text" !== r.content.content_type ||
          0 === r.content.parts.length
        )
          return null;
        let s = "";
        t &&
          "text" === t.content.content_type &&
          t.content.parts.length > 0 &&
          (s = t.content.parts.join(""));
        let a = r.content.parts.join("");
        return (0, O.jsx)(o.Z, {
          type: "success",
          size: "custom",
          className: "max-w-7xl",
          isOpen: !0,
          onClose: n,
          primaryButton: (0, O.jsx)(l.z, {
            color: "primary",
            onClick: j.noop,
            children: "Save",
          }),
          secondaryButton: (0, O.jsx)(l.z, {
            color: "neutral",
            onClick: n,
            children: "Cancel",
          }),
          children: (0, O.jsx)(eN, {
            documentGoal: s,
            initialContent: a,
            classNames: "h-[80vh]",
          }),
        });
      }
      function eN(e) {
        let { documentGoal: t, initialContent: r, classNames: n } = e,
          s = (0, w.useRef)(null),
          { 0: a, 1: l } = (0, w.useState)(!1);
        return (
          (0, w.useEffect)(() => {
            let e = (e) => {
              "9" === e.key &&
                (e.metaKey || e.ctrlKey) &&
                (e.preventDefault(), l((e) => !e));
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.removeEventListener("keydown", e);
              }
            );
          }, []),
          (0, O.jsxs)("div", {
            className: (0, ev.default)(
              "relative grid grid-flow-row grid-cols-8 overflow-y-auto",
              n
            ),
            children: [
              (0, O.jsx)("div", {
                className:
                  "no-scrollbar col-span-6 overflow-y-auto rounded-lg p-8",
                children: (0, O.jsx)(eS, {
                  ref: s,
                  init: { initialContent: r, documentGoal: t },
                }),
              }),
              (0, O.jsx)("div", {
                className: "col-span-2 mt-8 flex flex-col overflow-y-auto px-2",
                children: a
                  ? (0, O.jsx)(k, {})
                  : (0, O.jsx)(J, {
                      getCurrentView: () => {
                        var e;
                        return null === (e = s.current) || void 0 === e
                          ? void 0
                          : e.getCurrentView();
                      },
                    }),
              }),
            ],
          })
        );
      }
      let eS = (0, w.forwardRef)((e, t) => {
        let { init: r } = e,
          n = (0, w.useRef)(null),
          { 0: s, 1: a } = (0, w.useState)(null),
          { 0: l, 1: i } = (0, w.useState)(!1),
          { 0: o, 1: c } = (0, w.useState)({}),
          u = (0, w.useCallback)(() => {
            if (!s) return;
            let { anchor: e, head: t } = s.state.selection,
              r = n.current.getBoundingClientRect();
            if (e !== t) {
              let e = s.coordsAtPos(t),
                n = Math.max(0, e.top - r.top - 10),
                a = e.left - r.left;
              c({ top: "".concat(n, "px"), left: "".concat(a, "px") }), i(!0);
            } else i(!1);
          }, [s]);
        return (
          (0, w.useEffect)(() => {
            if (s)
              return (
                s.dom.addEventListener("mouseup", u),
                s.dom.addEventListener("keyup", u),
                () => {
                  s.dom.removeEventListener("mouseup", u),
                    s.dom.removeEventListener("keyup", u);
                }
              );
          }, [s, u]),
          (0, w.useImperativeHandle)(t, () => ({
            getCurrentView: () => s || null,
          })),
          (0, w.useEffect)(() => {
            q.editGoal(r.documentGoal);
          }, []),
          (0, w.useEffect)(() => {
            if (!n.current) return;
            let e = en.yy.create({
                schema: R,
                doc: ((e) => {
                  if (e && 0 !== e.length) return Z.parse(e);
                })(r.initialContent),
                plugins: [
                  (0, ep.m8)(),
                  ed,
                  (0, ey.h)(eA(eA({}, em.YR), eh)),
                  ex,
                ],
              }),
              t = new ef.tk(n.current, {
                state: e,
                attributes: { class: E()["jidori-editor"] },
              });
            return (
              (0, eb.Z)(t),
              t.focus(),
              a(t),
              () => {
                t.destroy();
              }
            );
          }, [r]),
          (window.editor = s),
          !(function (e) {
            let t = z();
            (0, w.useEffect)(() => {
              if (!e || 0 === t.comments.length) return;
              let r = e.state.tr.setMeta(eg, t.comments);
              e.dispatch(r);
            }, [e, t.comments]);
          })(s),
          (0, O.jsxs)("div", {
            className: "w-full",
            children: [
              (0, O.jsx)(et, {
                visible: l,
                style: o,
                toggleBold: () => {
                  s &&
                    ((0, em.w9)(R.marks.strong)(s.state, s.dispatch),
                    s.focus());
                },
                toggleItalic: () => {
                  s && ((0, em.w9)(R.marks.em)(s.state, s.dispatch), s.focus());
                },
                onHide: () => i(!1),
                view: s,
              }),
              (0, O.jsx)("div", {
                className: (0, ev.default)(
                  "w-full cursor-text overflow-y-auto text-token-text-primary caret-token-text-primary"
                ),
                ref: n,
              }),
            ],
          })
        );
      });
      eS.displayName = "Editor";
    },
    80928: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          JidoriPromptControls: function () {
            return w;
          },
        });
      var n,
        s = r(18450),
        a = r(99945),
        l = r(58819),
        i = r(29287),
        o = r(21643),
        c = r(30269),
        u = r(67217),
        d = r(70079),
        m = r(35250);
      function p(e) {
        let { theme: t, onSave: r, onClose: n, onDelete: s } = e,
          { 0: a, 1: l } = (0, d.useState)(t.examples),
          { 0: p, 1: h } = (0, d.useState)(t.name);
        return (0, m.jsx)(u.Z, {
          type: "success",
          size: "custom",
          className: "max-w-4xl",
          isOpen: !0,
          onClose: n,
          title: "Editing theme: ".concat(p),
          hideSeparator: !0,
          showCloseButton: !0,
          primaryButton: (0, m.jsx)(i.z, {
            color: "primary",
            onClick: () => {
              r({ id: t.id, name: p, examples: a }), n();
            },
            children: "Save",
          }),
          secondaryButton: t.id
            ? (0, m.jsx)(i.z, {
                color: "neutral",
                onClick: () => {
                  s(t.id), n();
                },
                children: "Delete",
              })
            : null,
          children: (0, m.jsxs)("div", {
            className: "m-8 mt-0 flex flex-col gap-2",
            children: [
              (0, m.jsx)("span", { children: "Name" }),
              (0, m.jsx)(o.Z, {
                name: "theme-name",
                type: "text",
                value: p,
                onChange: (e) => h(e.target.value),
              }),
              (0, m.jsx)("span", { children: "Examples" }),
              (0, m.jsx)("div", {
                className: "flex flex-col gap-4",
                children: [...a, ""].map((e, t) =>
                  (0, m.jsx)(
                    c.Z,
                    {
                      rows: 5,
                      value: e,
                      onChange: (e) => {
                        let r = [...a];
                        (r[t] = e.target.value), l(r);
                      },
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        });
      }
      var h = r(60581),
        f = r(82473),
        g = r(25494),
        x = r(61236),
        v = r(1454);
      function b(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(r), !0).forEach(function (t) {
                (0, s.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : b(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let j = r(21389).Z.div(
        n ||
          (n = (0, a.Z)([
            "py-1 bg-token-main-surface-primary rounded-md border border-token-border-light text-xs font-medium text-token-text-tertiary hover:bg-token-main-surface-secondary hover:text-token-text-primary px-2.5 radix-state-open:bg-token-main-surface-secondary radix-state-open:text-token-text-primary",
          ]))
      );
      function w(e) {
        let { setPromptMetadataValue: t } = e,
          { data: r } = (0, x.a)({
            queryKey: ["jidoriSettings"],
            queryFn: async () => h.$.getSettings(),
          }),
          { data: n } = (0, x.a)({
            queryKey: ["jidoriThemes"],
            queryFn: async () => h.$.getThemes(),
          }),
          s = (function () {
            let e = (0, f.NL)();
            return (0, g.D)({
              mutationFn: (e) => h.$.postSettings(e),
              onSuccess: () => {
                e.refetchQueries({ queryKey: ["jidoriSettings"] });
              },
            });
          })(),
          a = (function () {
            let e = (0, f.NL)();
            return (0, g.D)({
              mutationFn: (e) => h.$.postThemes(e),
              onSuccess: () => {
                e.refetchQueries({ queryKey: ["jidoriThemes"] });
              },
            });
          })(),
          l = (function () {
            let e = (0, f.NL)();
            return (0, g.D)({
              mutationFn: (e) => h.$.deleteTheme(e),
              onSuccess: () => {
                e.refetchQueries({ queryKey: ["jidoriThemes"] });
              },
            });
          })(),
          { 0: i, 1: o } = (0, d.useState)(null);
        return (
          (0, d.useEffect)(() => {
            r &&
              t((e) =>
                y(
                  y({}, e),
                  {},
                  {
                    jidori: y(
                      y({}, e.jidori),
                      {},
                      { language: r.language.value, length: r.length.value }
                    ),
                  }
                )
              );
          }, [r, t]),
          r
            ? (0, m.jsx)("div", {
                className:
                  "flex justify-between bg-gradient-to-t from-token-main-surface-primary to-transparent px-4 pb-3.5",
                children: (0, m.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    [r.language, r.length].map((e, r) =>
                      (0, m.jsx)(
                        O,
                        {
                          setting: e,
                          onClick: async (r) => {
                            s.mutate({ [e.type]: r }),
                              t((t) =>
                                y(
                                  y({}, t),
                                  {},
                                  {
                                    jidori: y(
                                      y({}, t.jidori),
                                      {},
                                      { [e.type]: r }
                                    ),
                                  }
                                )
                              );
                          },
                        },
                        r
                      )
                    ),
                    n &&
                      (0, m.jsx)(A, {
                        themes: n,
                        currentTheme: i,
                        addTheme: (e) => {
                          a.mutate(e);
                        },
                        deleteTheme: (e) => {
                          l.mutate(e);
                        },
                        onClick: (e) => {
                          o(e),
                            t((t) =>
                              y(
                                y({}, t),
                                {},
                                {
                                  jidori: y(
                                    y({}, t.jidori),
                                    {},
                                    { theme: e.examples }
                                  ),
                                }
                              )
                            );
                        },
                      }),
                  ],
                }),
              })
            : null
        );
      }
      function A(e) {
        let {
            onClick: t,
            currentTheme: r,
            addTheme: n,
            deleteTheme: s,
            themes: a,
          } = e,
          { 0: i, 1: o } = (0, d.useState)(!1),
          { 0: c, 1: u } = (0, d.useState)(null);
        return (0, m.jsxs)(l.Z.Root, {
          children: [
            (0, m.jsxs)(j, {
              $as: l.Z.Trigger,
              className: "pr-1.5",
              children: [r ? r.name : "Themes", (0, m.jsx)(v.bTu, {})],
            }),
            (0, m.jsx)(l.Z.Portal, {
              children: (0, m.jsxs)(l.Z.Content, {
                side: "top",
                children: [
                  a.map((e, r) =>
                    (0, m.jsxs)(
                      l.Z.Item,
                      {
                        className: "flex justify-between px-4",
                        children: [
                          (0, m.jsx)("div", {
                            className: "grow",
                            onClick: () => t(e),
                            children: e.name,
                          }),
                          (0, m.jsx)("span", {
                            className: "grow-0",
                            onClick: () => {
                              u(e), o(!0);
                            },
                            children: (0, m.jsx)(v.vPQ, {
                              className: "icon-sm",
                            }),
                          }),
                        ],
                      },
                      r
                    )
                  ),
                  (0, m.jsx)(l.Z.Item, {
                    onClick: () => {
                      o(!0);
                    },
                    className: "px-4",
                    children: "New Theme",
                  }),
                ],
              }),
            }),
            i &&
              (0, m.jsx)(p, {
                theme: null != c ? c : { examples: [], name: "" },
                onSave: (e) => {
                  n(e);
                },
                onClose: () => {
                  o(!1);
                },
                onDelete: (e) => {
                  s(e);
                },
              }),
          ],
        });
      }
      function O(e) {
        let { onClick: t, setting: r } = e;
        return (0, m.jsxs)(l.Z.Root, {
          children: [
            (0, m.jsxs)(j, {
              $as: l.Z.Trigger,
              className: "pr-1.5",
              children: [
                r.value ? r.value : r.display_name,
                (0, m.jsx)(v.bTu, {}),
              ],
            }),
            (0, m.jsx)(l.Z.Portal, {
              children: (0, m.jsx)(l.Z.Content, {
                side: "top",
                children: r.options.map((e, r) =>
                  (0, m.jsx)(
                    l.Z.Item,
                    { onClick: () => t(e.value), children: e.value },
                    r
                  )
                ),
              }),
            }),
          ],
        });
      }
    },
    25048: function (e, t, r) {
      "use strict";
      r.d(t, {
        NX: function () {
          return o;
        },
        q$: function () {
          return c;
        },
      });
      var n = r(18450),
        s = r(51362),
        a = r(78103);
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      let i = { lastRequest: {}, lastResponse: "" },
        o = (0, a.ZP)(
          (0, s.n)(() =>
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? l(Object(r), !0).forEach(function (t) {
                      (0, n.Z)(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : l(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
              }
              return e;
            })({}, i)
          )
        ),
        c = {
          setLastRequest: (e) => {
            o.setState((t) => {
              t.lastRequest = e;
            });
          },
          setLastResponse: (e) => {
            o.setState((t) => {
              t.lastResponse = e;
            });
          },
          appendToResponse: (e) => {
            o.setState((t) => {
              t.lastResponse += e;
            });
          },
        };
    },
    60581: function (e, t, r) {
      "use strict";
      r.d(t, {
        $: function () {
          return u;
        },
      });
      var n = r(18450),
        s = r(25048),
        a = r(4466),
        l = r(48879);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : i(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let c = "https://jidori.g1.internal.services.openai.org";
      class u {
        static healthcheck() {
          return a.c.get("".concat(c, "/api/completion"));
        }
        static async streamCompletion(e) {
          let { completionRequest: t, onMessage: r } = e;
          s.q$.setLastRequest(t),
            s.q$.setLastResponse(""),
            await (0, l.L)("".concat(c, "/api/completion"), {
              method: "POST",
              headers: o(
                {
                  "Content-Type": "application/json",
                  Accept: "text/event-stream",
                  Connection: "keep-alive",
                },
                await a.c.getAuthedHeaders()
              ),
              body: JSON.stringify({
                system_prompt: t.systemPrompt,
                user_prompt: t.userPrompt,
                model: t.model,
              }),
              credentials: "include",
              onmessage(e) {
                s.q$.appendToResponse(e.data), r(e.data);
              },
              onclose() {
                console.log("Connection closed by the server");
              },
              onerror(e) {
                throw (console.log("There was an error from server", e), e);
              },
            });
        }
        static async getSettings() {
          return a.c.get("".concat(c, "/api/settings"));
        }
        static async syncCompletion(e) {
          let { completionRequest: t } = e;
          s.q$.setLastRequest(t), s.q$.setLastResponse("");
          let r = await a.c.post("".concat(c, "/api/completion/lr"), {
            system_prompt: t.systemPrompt,
            user_prompt: t.userPrompt,
            model: t.model,
          });
          return (
            s.q$.setLastResponse(JSON.stringify(r.message, null, 2)), r.message
          );
        }
        static async postSettings(e) {
          let { language: t, length: r } = e;
          return a.c.post("".concat(c, "/api/settings"), {
            language: t,
            length: r,
          });
        }
        static async getThemes() {
          return a.c.get("".concat(c, "/api/settings/themes"));
        }
        static async postThemes(e) {
          return a.c.post("".concat(c, "/api/settings/themes"), o({}, e));
        }
        static async deleteTheme(e) {
          return a.c.delete("".concat(c, "/api/settings/themes/").concat(e));
        }
      }
    },
    70451: function (e, t, r) {
      "use strict";
      r.d(t, {
        e: function () {
          return t6;
        },
      });
      var n,
        s,
        a,
        l,
        i,
        o,
        c,
        u,
        d,
        m,
        p,
        h,
        f,
        g,
        x,
        v,
        b,
        y,
        j = r(99945),
        w = r(73606),
        A = r(19841),
        O = r(21389),
        k = r(94079),
        _ = r(58819),
        N = r(86263),
        S = r(70187),
        P = r(85252),
        E = r(41409),
        C = r(1454),
        D = r(67217),
        R = r(35805),
        M = r.n(R),
        T = r(70079),
        Z = {
          src: "https://cdn.oaistatic.com/_next/static/media/popup-blocked.a4e77057.png",
          height: 40,
          width: 118,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAFVBMVEXx8/nq7PL8/P+7vsS+wcfe4enV2OEVeXw2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNgZGQAQSYGZmZWFgZmNiYGRkYGBpAIAAIUACasMdr/AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        };
      function L() {
        return (L = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var I = (e) =>
          T.createElement(
            "svg",
            L(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                fill: "none",
                viewBox: "0 0 24 24",
              },
              e
            ),
            s ||
              (s = T.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19.5 8V5.5a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2H9",
              })),
            a ||
              (a = T.createElement("circle", {
                cx: 16,
                cy: 16,
                r: 4,
                stroke: "currentColor",
                strokeWidth: 2,
              })),
            l ||
              (l = T.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeWidth: 2,
                d: "m19 19 2 2",
              }))
          ),
        F = r(35250);
      function U(e) {
        let { query: t } = e,
          r = (0, T.useRef)({}),
          { 0: n, 1: s } = (0, T.useState)(!1);
        function a(e, t) {
          let n = "compare_".concat(e),
            a = r.current[n];
          a && (a.close(), delete r.current[n]);
          let l = Math.max(window.outerWidth / 2, 500),
            i = Math.max(window.outerHeight - 300, 500),
            o = window.screenY + 300,
            c = window.screenX + e * l;
          (a = r.current[n] =
            window.open(
              t,
              n,
              "width="
                .concat(l, ",height=")
                .concat(i, ",top=")
                .concat(o, ",left=")
                .concat(c)
            )) || s(!0);
        }
        return (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsxs)(q, {
              onClick: () => {
                a(0, "https://google.com/search?q=".concat(t)),
                  a(1, "https://perplexity.ai/search?q=".concat(t));
              },
              children: [
                (0, F.jsx)(I, { className: "icon-sm stroke-[3]" }),
                " Compare",
              ],
            }),
            n &&
              (0, F.jsx)(D.Z, {
                isOpen: !0,
                type: "danger",
                onClose: () => s(!1),
                title: "Popup Blocked",
                description: (0, F.jsxs)("div", {
                  children: [
                    "Your browser is blocking popups. Please allow popups for this site and try again.",
                    (0, F.jsxs)("div", {
                      className: "mt-3 text-xs",
                      children: [
                        (0, F.jsx)(M(), {
                          className: "mx-auto",
                          src: Z,
                          alt: "Popup blocked screenshot",
                        }),
                        "In Chrome, this setting can be accessed by clicking on the button in the locations bar (the left-most button in the image above).",
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      }
      var z = r(68399);
      let q = (0, O.Z)(_.Z.Item)(
        i || (i = (0, j.Z)(["flex items-center gap-2"]))
      );
      function V() {
        let { theme: e, setTheme: t } = (0, P.F)();
        switch (e) {
          case "system":
            return (0, F.jsxs)(q, {
              onClick: (e) => {
                e.preventDefault(), t("dark");
              },
              children: [
                (0, F.jsx)(C.Y1U, { className: "stroke-[3]" }),
                "System Theme",
              ],
            });
          case "dark":
            return (0, F.jsxs)(q, {
              onClick: (e) => {
                e.preventDefault(), t("light");
              },
              children: [
                (0, F.jsx)(C.wOW, { className: "stroke-[3]" }),
                "Dark Mode",
              ],
            });
          default:
            return (0, F.jsxs)(q, {
              onClick: (e) => {
                e.preventDefault(), t("system");
              },
              children: [
                (0, F.jsx)(C.kXG, { className: "stroke-[3]" }),
                "Light",
              ],
            });
        }
      }
      function Q(e) {
        let { className: t, iconSize: r, searchQuery: n } = e,
          s = (0, E.useRouter)();
        return (0, F.jsxs)(_.Z.Root, {
          children: [
            (0, F.jsx)(_.Z.Trigger, {
              className: "hover:bg-transparent! border-0 p-0",
              children: (0, F.jsx)(k.zf, { iconSize: r, className: t }),
            }),
            (0, F.jsx)(_.Z.Portal, {
              children: (0, F.jsxs)(_.Z.Content, {
                collisionPadding: 10,
                children: [
                  (0, F.jsx)(V, {}),
                  (0, F.jsxs)(q, {
                    onClick: () => z.vm.toggleDebugModalOpen(),
                    children: [
                      (0, F.jsx)(S.WP, { className: "icon-sm" }),
                      "Debug",
                    ],
                  }),
                  (0, F.jsxs)(q, {
                    onClick: () => z.vm.toggleSettingsModalOpen(),
                    children: [
                      (0, F.jsx)(N.KAl, { className: "icon-sm" }),
                      "Settings",
                    ],
                  }),
                  (0, F.jsx)(U, { query: n }),
                  (0, F.jsx)(_.Z.Separator, {}),
                  (0, F.jsxs)(q, {
                    onClick: () =>
                      s.push("/auth/logout", void 0, { shallow: !0 }),
                    children: [
                      (0, F.jsx)(S.N_, { className: "icon-sm" }),
                      "Log out",
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var B = r(77799),
        G = r(83737);
      function H() {
        return (H = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var K = (e) =>
        T.createElement(
          "svg",
          H(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 22,
              height: 22,
              fill: "none",
              viewBox: "0 0 22 22",
            },
            e
          ),
          o ||
            (o = T.createElement(
              "g",
              { id: "arrow-send" },
              T.createElement("path", {
                id: "vector",
                fill: "currentcolor",
                fillRule: "evenodd",
                d: "M16.813 10.387a.867.867 0 0 1 0 1.226l-4.333 4.333a.867.867 0 0 1-1.226-1.226l2.854-2.853H5.8a.867.867 0 1 1 0-1.734h8.308L11.254 7.28a.867.867 0 0 1 1.226-1.226z",
                clipRule: "evenodd",
              })
            ))
        );
      function W(e) {
        let { currentQuery: t, onUpdateCurrentQuery: r, onSubmit: n } = e,
          s = (0, T.useRef)(null),
          a = (0, T.useRef)(null),
          { 0: l, 1: i } = (0, T.useState)("60%");
        (0, T.useEffect)(() => {
          let e = s.current,
            t = a.current;
          if (!e || !t) return;
          let r = t.style.width,
            n = e.style.width;
          (t.style.width = "60%"),
            (e.style.width = "100%"),
            i(e.scrollWidth > e.clientWidth ? "100%" : "60%"),
            (t.style.width = r),
            (e.style.width = n);
        }, [t]);
        let o = (0, T.useCallback)(
          (e) => {
            "Enter" === e.key && n && (e.preventDefault(), n(t));
          },
          [n, t]
        );
        return (
          (0, T.useEffect)(
            () =>
              (0, B.eR)(document, {
                keydown: (e) => {
                  e.metaKey &&
                    "k" === e.key &&
                    s.current &&
                    (e.preventDefault(), s.current.focus());
                },
              }),
            [s]
          ),
          (0, F.jsxs)(G.E.div, {
            className: "peer relative",
            initial: { width: "60%" },
            animate: { width: l },
            transition: { duration: 0.1 },
            ref: a,
            children: [
              (0, F.jsx)("input", {
                type: "text",
                name: "query",
                id: "query",
                className:
                  "peer w-full text-ellipsis rounded-full border-0 bg-token-main-surface-tertiary py-3 pl-12 pr-14 placeholder-gray-500 outline-none focus:border-token-border-medium focus:ring-0",
                value: t,
                autoComplete: "off",
                spellCheck: !1,
                onKeyDown: o,
                placeholder: "Search...",
                ref: s,
                onChange: (e) => r(e.target.value),
              }),
              n &&
                (0, F.jsx)("button", {
                  onClick: () => (null == n ? void 0 : n(t)),
                  className: (0, A.default)(
                    "absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-300 text-token-main-surface-tertiary hover:bg-token-border-light hover:text-token-text-secondary peer-focus:bg-token-text-primary peer-focus:text-token-main-surface-primary peer-focus:hover:opacity-80 dark:bg-gray-700"
                  ),
                  children: (0, F.jsx)(K, { className: "icon-lg-heavy" }),
                }),
              (0, F.jsx)("div", {
                className: "absolute left-5 top-1/2 -translate-y-1/2",
                children: (0, F.jsx)(C.jRj, {}),
              }),
            ],
          })
        );
      }
      var X = r(75388),
        Y = r(15118),
        J = r(45062),
        $ = r(19216),
        ee = r(78375);
      function et(e) {
        return "fatal_system_error" === e.execution_status;
      }
      let er = (0, T.forwardRef)(function (e, t) {
        let {
            readyState: r,
            hasSubmittedInitialQuery: n,
            currentQuery: s,
            onUpdateCurrentQuery: a,
            onSubmit: l,
          } = e,
          i = (0, $.nn)($.LW.firstTurn),
          o = null != i && et(i),
          c = r !== Y.kQ.OPEN || !s || o;
        return (0, F.jsx)(J.X, {
          className: "snc-accent-border",
          disabled: o,
          autoFocus: !n,
          value: s,
          onChange: (e) => {
            a(e.target.value);
          },
          onSubmit: () => !c && l(s),
          ref: t,
          keyEventFilter: (e) => "u" === e.key && e.metaKey,
          hint: "⌘U",
          placeholder: "Ask a follow-up...",
          buttonIcon: (0, F.jsx)(N.WmV, { className: "icon-lg-heavy" }),
          overflowDirection: "up",
        });
      });
      var en = r(18450),
        es = r(11335);
      function ea(e) {
        let {
          label: t,
          labelSide: r = "right",
          className: n,
          onClick: s,
          children: a,
        } = e;
        return (0, F.jsx)(es.E, {
          label: t,
          sideOffset: 0,
          side: r,
          disabled: !t,
          children: (0, F.jsx)("button", {
            onClick: s,
            className: (0, A.default)(
              "flex items-center justify-center p-1.5 text-token-text-tertiary hover:text-token-text-primary",
              n
            ),
            children: a,
          }),
        });
      }
      function el() {
        return (el = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ei = (e) =>
        T.createElement(
          "svg",
          el(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          c ||
            (c = T.createElement(
              "g",
              { id: "map-pin", stroke: "currentcolor", strokeWidth: 2 },
              T.createElement("path", {
                id: "Ellipse 32766",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M20 11c0 6.329-8 10.5-8 10.5S4 17.28 4 11c0-4.57 3.582-8 8-8",
              }),
              T.createElement("circle", {
                id: "Ellipse 32767",
                cx: 12,
                cy: 11,
                r: 3,
              }),
              T.createElement("path", {
                id: "Vector 2883",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M16.5 2 21 6.5M21 2l-4.5 4.5",
              })
            ))
        );
      function eo() {
        return (eo = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ec = (e) =>
          T.createElement(
            "svg",
            eo(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                fill: "none",
                viewBox: "0 0 24 24",
              },
              e
            ),
            u ||
              (u = T.createElement(
                "g",
                { id: "map-pin", stroke: "currentcolor", strokeWidth: 2 },
                T.createElement("path", {
                  id: "Ellipse 32766",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M20 11c0 6.329-8 10.5-8 10.5S4 17.28 4 11c0-4.57 3.582-8 8-8",
                }),
                T.createElement("circle", {
                  id: "Ellipse 32767",
                  cx: 12,
                  cy: 11,
                  r: 3,
                }),
                T.createElement("path", {
                  id: "Vector 2884",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M16 5.095 17.667 7 21 2",
                })
              ))
          ),
        eu = r(90240);
      function ed(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function em(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ed(Object(r), !0).forEach(function (t) {
                (0, en.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ed(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function ep(e) {
        let { settings: t, onUpdateSettings: r } = e,
          { setTheme: n, resolvedTheme: s } = (0, P.F)();
        return (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsx)(ea, {
              label: "Debug Modal (Internal)",
              onClick: () => z.vm.toggleDebugModalOpen(),
              children: (0, F.jsx)(S.WP, { className: "icon-lg-heavy" }),
            }),
            (0, F.jsx)(ea, {
              label: t.useLocation
                ? "Disable location services"
                : "Enable location services",
              onClick: () => {
                r(em(em({}, t), {}, { useLocation: !t.useLocation })),
                  t.useLocation || (0, eu.XB)(!0);
              },
              children: t.useLocation
                ? (0, F.jsx)(ec, { className: "icon-lg-heavy" })
                : (0, F.jsx)(ei, { className: "icon-lg-heavy" }),
            }),
            (0, F.jsxs)(ea, {
              label: "Set theme to ".concat("dark" === s ? "light" : "dark"),
              onClick: () => {
                n("dark" === s ? "light" : "dark");
              },
              children: [
                "dark" === s &&
                  (0, F.jsx)(N.NWY, { className: "icon-lg-heavy" }),
                "light" === s &&
                  (0, F.jsx)(N.kLh, { className: "icon-lg-heavy" }),
              ],
            }),
            (0, F.jsx)(ea, {
              label: "Search Settings",
              onClick: () => z.vm.toggleSettingsModalOpen(),
              children: (0, F.jsx)(N.KAl, { className: "icon-lg-heavy" }),
            }),
          ],
        });
      }
      var eh = r(67739),
        ef = r(61082),
        eg = r(58734),
        ex = r(5099),
        ev = r(61888),
        eb = r(35601),
        ey = r(19323),
        ej = r.n(ey),
        ew = r(49593),
        eA = r(81479),
        eO = r(69920),
        ek = r(83216);
      function e_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eN(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e_(Object(r), !0).forEach(function (t) {
                (0, en.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : e_(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let eS = {
          calculator: "Calculator",
          finance: "Finance",
          news: "News",
          "sports-schedule": "Sports Schedule",
          "sports-standings": "Sports Standings",
          "time-difference": "Timezone",
          weather: "Weather",
        },
        eP = {
          turn: {
            thumbsDown: [
              { label: "Too verbose", group: "Response" },
              { label: "Not enough information", group: "Response" },
              { label: "Inaccurate", group: "Response" },
              { label: "Subject ambiguity", group: "Response" },
              { label: "Location issue", group: "Response" },
              { label: "Bad search results", group: "Response" },
              { label: "Bad response", group: "Response" },
              {
                label: "Issue with followup",
                group: "Response",
                match: (e) => {
                  var t;
                  return (null !== (t = e.index) && void 0 !== t ? t : 0) > 0;
                },
              },
              ...Object.keys(eS).map(function (e) {
                return {
                  label: "No ".concat(eS[e], " widget"),
                  group: "Widget",
                  match: (t) => {
                    var r;
                    return (
                      (null === (r = (0, ee.K)(t)) || void 0 === r
                        ? void 0
                        : r.type) !== e
                    );
                  },
                };
              }),
              {
                label: (e) =>
                  "Shouldn't show ".concat(eS[(0, ee.K)(e).type], " widget"),
                group: "Widget",
                match: (e) => !!(0, ee.K)(e),
              },
              {
                label: (e) =>
                  "Issue with ".concat(eS[(0, ee.K)(e).type], " widget"),
                group: "Widget",
                match: (e) => !!(0, ee.K)(e),
              },
            ],
            thumbsUp: [
              { label: "Accurate", value: "Accurate" },
              { label: "Up-to-date", value: "Up-to-date" },
              { label: "Good search results", value: "Good search results" },
              {
                label: (e) =>
                  "Like the ".concat(eS[(0, ee.K)(e).type], " widget"),
                match: (e) => !!(0, ee.K)(e),
              },
            ],
          },
          link: {
            thumbsDown: [
              { label: "Not relevant", value: "Not relevant" },
              { label: "Out-of-date", value: "Out-of-date" },
              { label: "Ranked too high", value: "Ranked too high" },
              { label: "Ranked too low", value: "Ranked too low" },
              { label: "Bad source", value: "Bad source" },
            ],
            thumbsUp: [
              { label: "Relevant", value: "Relevant" },
              { label: "Up-to-date", value: "Up-to-date" },
              { label: "Ranked appropriately", value: "Ranked appropriately" },
              { label: "Good source", value: "Good source" },
            ],
          },
        };
      async function eE(e) {
        var t;
        let r =
            null !== (t = e.element) && void 0 !== t
              ? t
              : document.getElementById("__next"),
          n = await ej()(r, {
            backgroundColor: e.isDarkMode ? null : "#ffffff",
          }),
          s = document.createElement("canvas"),
          a = s.getContext("2d"),
          l = (n.height / n.width) * 1440;
        return (
          (s.width = 1440),
          (s.height = l),
          null == a || a.drawImage(n, 0, 0, 1440, l),
          new Promise((e) => {
            s.toBlob(
              (t) => {
                e(t);
              },
              "image/jpeg",
              0.8
            );
          })
        );
      }
      function eC(e) {
        let {
            onSubmit: t,
            turn: r,
            thumbsUpTooltip: n,
            thumbsDownTooltip: s,
            screenshotElement: a,
            type: l,
          } = e,
          { 0: i, 1: o } = (0, T.useState)(null),
          { 0: c, 1: u } = (0, T.useState)(null),
          d = (0, eO.Gv)();
        return (0, F.jsxs)("div", {
          onClick: (e) => {
            e.preventDefault(), e.stopPropagation();
          },
          children: [
            (0, F.jsx)("div", {
              className: "flex items-center gap-2",
              children: [
                {
                  tooltip: null != n ? n : "Good",
                  rating: "thumbsUp",
                  Icon: S.ib,
                  FilledIcon: S.go,
                },
                {
                  tooltip: null != s ? s : "Bad",
                  rating: "thumbsDown",
                  Icon: S.Q7,
                  FilledIcon: S.W2,
                },
              ].map((e) => {
                let { tooltip: t, rating: r, Icon: n, FilledIcon: s } = e;
                return (0, F.jsx)(
                  es.u,
                  {
                    label: t,
                    sideOffset: 0,
                    className: "flex",
                    children: (0, F.jsx)("button", {
                      className:
                        "block text-token-text-secondary hover:text-token-text-primary",
                      onClick: async () => {
                        o(await eE({ element: a, isDarkMode: d })), u(r);
                      },
                      disabled: c === r,
                      children:
                        c === r
                          ? (0, F.jsx)(s, { className: "h-4 w-4" })
                          : (0, F.jsx)(n, { className: "h-4 w-4" }),
                    }),
                  },
                  r
                );
              }),
            }),
            c &&
              (0, F.jsx)(
                eA.Z,
                {
                  multiple: !0,
                  onSubmit: (e) =>
                    t(eN(eN({}, e), {}, { screenshot: i, currentRating: c })),
                  onCancel: () => {
                    o(null), u(null);
                  },
                  tagOptions: (function (e) {
                    let { type: t, turn: r, rating: n } = e;
                    return eP[t][n]
                      .filter((e) => !e.match || !r || e.match(r))
                      .map((e) => {
                        var t;
                        let n = e.label;
                        if ("function" == typeof n) {
                          if (!r) return null;
                          n = n(r);
                        }
                        return eN(
                          eN({}, e),
                          {},
                          {
                            label: n,
                            value:
                              null !== (t = e.value) && void 0 !== t ? t : n,
                          }
                        );
                      })
                      .filter((e) => null !== e);
                  })({ type: l, rating: c, turn: r }),
                  modalOnly: !0,
                  modalTitle: (0, F.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      "thumbsUp" === c
                        ? (0, F.jsx)(S.go, { className: "mt-[-2px]" })
                        : (0, F.jsx)(S.W2, { className: "mb-[-2px]" }),
                      " ",
                      "Provide feedback",
                    ],
                  }),
                },
                c
              ),
          ],
        });
      }
      function eD(e) {
        let { turn: t } = e,
          r = (0, $.nn)($.LW.threadId),
          { user: n } = (0, eb.A)();
        (0, T.useEffect)(() => {
          if (r) {
            if (null === t.index) throw Error();
            ek.Y.logEvent(ek.M.searchTurnFeedbackButtonShown, {
              turn_index: t.index,
              thread_id: r,
            });
          }
        }, []);
        let s = async (e) => {
          if (r && e.currentRating) {
            if (null === t.index) throw Error();
            ek.Y.logEvent(ek.M.searchTurnFeedbackSubmitted, {
              turn_index: t.index,
              thread_id: r,
              rating: e.currentRating,
              tags: e.tags,
              text: e.textFeedback,
            }),
              await (0, ew.k4)({
                turnIndex: t.index,
                threadId: r,
                rating: e.currentRating,
                searchQuery: t.user_query,
                tags: e.tags,
                text: e.textFeedback,
                screenshot: e.screenshot,
                userEmail: null == n ? void 0 : n.email,
              });
          }
        };
        return (0, F.jsx)(eC, {
          onSubmit: s,
          type: "turn",
          turn: t,
          thumbsUpTooltip: "Good response",
          thumbsDownTooltip: "Bad response",
        });
      }
      function eR(e) {
        let { url: t, title: r, snippet: n, turnIndex: s } = e,
          a = (0, $.nn)($.LW.threadId),
          { user: l, searchQuery: i } = (0, eb.A)(),
          o = async (e) => {
            a &&
              e.currentRating &&
              l &&
              (ek.Y.logEvent(ek.M.searchLinkFeedbackSubmitted, {
                thread_id: a,
                rating: e.currentRating,
                url: t,
                tags: e.tags,
                text: e.textFeedback,
                turn_index: s,
              }),
              await (0, ew.NK)({
                url: t,
                title: r,
                snippet: n,
                threadId: a,
                rating: e.currentRating,
                searchQuery: i,
                tags: e.tags,
                text: e.textFeedback,
                screenshot: e.screenshot,
                userEmail: null == l ? void 0 : l.email,
              }));
          };
        return (0, F.jsx)(eC, {
          onSubmit: o,
          type: "link",
          thumbsUpTooltip: "Good link",
          thumbsDownTooltip: "Bad link",
        });
      }
      function eM() {
        return (eM = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eT = (e) =>
        T.createElement(
          "svg",
          eM(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          d ||
            (d = T.createElement("path", {
              fill: "currentColor",
              d: "M9.199 22v-.576c-.252.387-.846.675-1.63.675-1.7 0-2.951-1.35-2.951-3.294 0-1.953 1.278-3.366 3.078-3.366 1.413 0 2.34.747 2.736 1.935L9 17.833c-.144-.693-.612-1.089-1.296-1.089-.936 0-1.584.81-1.584 2.043s.648 2.043 1.61 2.043c.739 0 1.234-.495 1.315-1.161H7.615v-1.233h2.916V22zm4.228-6.462V22h-1.503v-6.462zM16.331 22h-1.476v-6.462h4.527v1.287h-3.05v1.467h2.537v1.26h-2.538z",
            })),
          m ||
            (m = T.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5",
            })),
          p ||
            (p = T.createElement("path", {
              fill: "currentColor",
              d: "M6 5h2l-.862 1.724A.5.5 0 0 1 6.691 7H6zM9 5h3l-.862 1.724a.5.5 0 0 1-.447.276H8.566a.35.35 0 0 1-.313-.507zM13 5h3l-.862 1.724a.5.5 0 0 1-.447.276h-2.125a.35.35 0 0 1-.313-.507zM17 5h1v2h-1.434a.35.35 0 0 1-.313-.507z",
            }))
        );
      function eZ() {
        return (eZ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eL = (e) =>
        T.createElement(
          "svg",
          eZ(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          h ||
            (h = T.createElement("path", {
              fill: "currentColor",
              d: "M4.7 21.097c-.51 0-.808-.303-.808-.84v-4.755c0-.536.299-.843.809-.843h1.938c1.362 0 2.285.883 2.285 2.245 0 1.354-.971 2.237-2.382 2.237H5.505v1.116c0 .537-.295.84-.804.84m.805-3.169h.699c.685 0 1.09-.356 1.09-1.02 0-.659-.405-1.014-1.082-1.014h-.707zM10.449 21c-.51 0-.809-.308-.809-.844v-4.654c0-.536.299-.843.809-.843h1.766c1.916 0 3.041 1.111 3.041 3.133 0 2.026-1.129 3.208-3.04 3.208zm.804-1.3h.751c1.05 0 1.613-.638 1.613-1.904 0-1.19-.593-1.836-1.613-1.836h-.751zm5.594 1.397c-.51 0-.808-.303-.808-.84v-4.755c0-.536.298-.843.808-.843h2.874c.435 0 .716.237.716.65s-.29.65-.716.65h-2.07v1.442h1.864c.408 0 .672.228.672.62 0 .386-.255.615-.672.615H17.65v1.621c0 .537-.294.84-.804.84",
            })),
          f ||
            (f = T.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h7.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 19 8.828V11m-4-6v2.5a.5.5 0 0 0 .5.5H18m-2-1 .5-.5",
            }))
        );
      function eI() {
        return (eI = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var eF = (e) =>
        T.createElement(
          "svg",
          eI(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          g ||
            (g = T.createElement("path", {
              stroke: "currentcolor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M20 9v-.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 4 16.88 4 15.2 4H11c-3.5 0-7 3.5-7 7v4.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 20 7.12 20 8.8 20H9m1.5-15-.558 2.512c-.16.72-.24 1.08-.422 1.372a2 2 0 0 1-.636.636c-.291.182-.651.262-1.372.422L5 10.5M17.76 20.355a2.202 2.202 0 0 1-3.115-3.114m5.71.518a2.202 2.202 0 0 0-3.114-3.114",
            }))
        );
      let eU = ["turnIndex", "groupPosition", "rawPosition"];
      function ez(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eq(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ez(Object(r), !0).forEach(function (t) {
                (0, en.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ez(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function eV(e) {
        let { searchResult: t, className: r } = e,
          n = new URL(t.url).pathname.split(".").pop();
        return "application/pdf" === t.content_type || "pdf" === n
          ? (0, F.jsx)(eL, { className: r })
          : "gif" === n
            ? (0, F.jsx)(eT, { className: r })
            : null;
      }
      function eQ(e) {
        let { searchResult: t } = e;
        return t.pub_date
          ? (0, F.jsxs)("span", {
              className: "text-token-text-secondary",
              children: [
                new Date(1e3 * t.pub_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
                " — ",
              ],
            })
          : null;
      }
      function eB(e) {
        return { ease: "easeOut", duration: 0.15, delay: (e + 1) * 0.09 };
      }
      function eG(e) {
        var t;
        let {
            secondaryResults: r,
            rawPosition: n,
            groupPosition: s,
            turnIndex: a,
            showFeedbackButtons: l,
            highlightUrl: i,
          } = e,
          { 0: o, 1: c } = (0, T.useState)(r.length <= 2),
          u = o ? r : r.slice(0, 1),
          d = (0, ex.d)(r[0].url).data,
          m = r[0];
        return (0, F.jsxs)("div", {
          className: "mt-5 flex flex-col gap-5",
          children: [
            u.map((e, t) =>
              (0, F.jsx)(
                G.E.div,
                {
                  className: "group relative",
                  initial: { opacity: 0, translateY: 4 },
                  animate: { opacity: 1, translateY: 0 },
                  transition: eB(t),
                  children: (0, F.jsxs)(
                    eK,
                    {
                      href: e.url,
                      turnIndex: a,
                      groupPosition: [s[0], t],
                      rawPosition: n + t,
                      target: "_blank",
                      rel: "noreferrer",
                      className: (0, A.default)(
                        "block group-hover:text-token-link",
                        { "bg-yellow-100 dark:bg-yellow-900": i === e.url }
                      ),
                      children: [
                        (0, F.jsxs)("div", {
                          className:
                            "relative line-clamp-1 pr-[70px] text-sm font-medium group-hover:text-token-link",
                          children: [
                            e.title,
                            l &&
                              (0, F.jsx)("div", {
                                className:
                                  "invisible absolute right-0 top-0 py-1 group-hover:visible",
                                children: (0, F.jsx)(eR, {
                                  url: e.url,
                                  title: e.title,
                                  snippet: e.snippet,
                                  turnIndex: a,
                                }),
                              }),
                          ],
                        }),
                        (0, F.jsxs)("div", {
                          className:
                            "line-clamp-1 text-sm font-normal text-token-text-secondary",
                          children: [
                            (0, F.jsx)(eV, {
                              searchResult: e,
                              className: "mr-2 inline",
                            }),
                            (0, F.jsx)(eQ, { searchResult: e }),
                            e.snippet,
                          ],
                        }),
                      ],
                    },
                    t
                  ),
                },
                t
              )
            ),
            !o &&
              r.length > 1 &&
              (0, F.jsxs)("button", {
                className: "flex text-sm font-medium hover:text-token-link",
                onClick: () => c(!0),
                children: [
                  "More ",
                  null != d ? d : (0, eg.p)(m.url, "short"),
                  " (",
                  null !== (t = null == u ? void 0 : u.length) && void 0 !== t
                    ? t
                    : -3,
                  ")",
                ],
              }),
          ],
        });
      }
      function eH(e) {
        var t;
        let {
            searchResult: r,
            groupPosition: n,
            rawPosition: s,
            showFeedbackButtons: a,
            showUserHash: l,
            highlightUrl: i,
            turnIndex: o,
          } = e,
          [c, u] =
            "search_result_group" === r.type
              ? [r.entries[0], r.entries.slice(1)]
              : [r, []],
          d = (0, T.useRef)(null),
          { userHash: m } = (0, eb.A)(),
          p = l
            ? (0, F.jsx)("div", {
                className:
                  "h-[24px] w-[24px] flex-shrink-0 rounded-full border border-token-border-medium",
                style: { backgroundColor: "#" + m },
              })
            : (0, F.jsx)(ef.Z, {
                url: c.url,
                className:
                  "icon-lg rounded-full border border-token-border-medium object-cover",
                size: 32,
              }),
          h =
            null !== (t = (0, ex.d)(c.url).data) && void 0 !== t
              ? t
              : (0, eg.p)(c.url, "short"),
          f = i === c.url;
        return (
          (0, T.useEffect)(() => {
            f &&
              d.current &&
              d.current.scrollIntoView({ behavior: "smooth", block: "center" });
          }, [f]),
          (0, F.jsx)("div", {
            ref: d,
            className: "link-result pl-12",
            children: (0, F.jsxs)("div", {
              className:
                "link-text flex w-full min-w-0 flex-col overflow-y-auto",
              children: [
                (0, F.jsx)("div", {
                  className: "flex flex-col",
                  children: (0, F.jsxs)(eK, {
                    turnIndex: o,
                    href: c.url,
                    groupPosition: n,
                    rawPosition: s,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "group",
                    children: [
                      (0, F.jsx)("div", {
                        className: "absolute left-0",
                        children: p,
                      }),
                      (0, F.jsx)("div", {
                        className: "line-clamp-1 pr-[--snc-2] text-sm",
                        children: h,
                      }),
                      (0, F.jsxs)("div", {
                        className: (0, A.default)(
                          "relative line-clamp-1 text-sm font-medium group-hover:pr-10 group-hover:text-token-link",
                          { "bg-yellow-100 dark:bg-yellow-900": f }
                        ),
                        children: [
                          c.title,
                          a &&
                            (0, F.jsx)("div", {
                              className:
                                "invisible absolute right-0 top-0 py-1 group-hover:visible",
                              children: (0, F.jsx)(eR, {
                                url: c.url,
                                title: c.title,
                                snippet: c.snippet,
                                turnIndex: o,
                              }),
                            }),
                        ],
                      }),
                      (0, F.jsxs)("div", {
                        className:
                          "line-clamp-2 text-sm text-token-text-secondary",
                        children: [
                          (0, F.jsx)(eV, {
                            searchResult: c,
                            className: "mr-2 inline",
                          }),
                          (0, F.jsx)(eQ, { searchResult: c }),
                          c.snippet,
                        ],
                      }),
                    ],
                  }),
                }),
                u &&
                  u.length > 0 &&
                  (0, F.jsx)(eG, {
                    secondaryResults: u,
                    rawPosition: s,
                    groupPosition: n,
                    turnIndex: o,
                    showFeedbackButtons: a,
                    highlightUrl: i,
                  }),
              ],
            }),
          })
        );
      }
      let eK = (0, T.forwardRef)(function (e, t) {
        let r = (0, $.nn)($.LW.threadId),
          { turnIndex: n, groupPosition: s, rawPosition: a } = e,
          l = (0, eh.Z)(e, eU);
        function i(t) {
          e.href &&
            r &&
            ek.Y.logEvent(t, {
              url: e.href,
              thread_id: r,
              turn_index: n,
              group_position: s,
              raw_position: a,
            });
        }
        return (
          (0, T.useEffect)(() => {
            i(ek.M.searchLinkShown);
          }, []),
          (0, F.jsx)(
            "a",
            eq(
              eq({ ref: t }, l),
              {},
              {
                onClick: (t) => {
                  var r;
                  null === (r = e.onClick) || void 0 === r || r.call(e, t),
                    t.stopPropagation(),
                    i(ek.M.searchLinkClicked);
                },
              }
            )
          )
        );
      });
      function eW(e) {
        var t, r;
        let { className: n, highlightUrl: s, showFeedbackButtons: a = !0 } = e,
          l = (0, $.nn)($.LW.turns),
          { 0: i, 1: o } = (0, T.useState)(!1),
          c = l.findLast((e) => {
            var t;
            return null === (t = e.search_results) ||
              void 0 === t ||
              null === (t = t.entries) ||
              void 0 === t
              ? void 0
              : t.length;
          });
        (0, T.useEffect)(() => {
          o(!1);
        }, [c]);
        let u = (0, T.useRef)((0, ev.random)(0, 2)),
          d = (0, ev.compact)(
            l.toReversed().flatMap((e) => {
              var t;
              return null === (t = e.search_results) ||
                void 0 === t ||
                null === (t = t.entries) ||
                void 0 === t
                ? void 0
                : t.map((t) => ({ entry: t, index: e.index }));
            })
          ),
          m = d.length > 0,
          p = i ? d : d.slice(0, 3);
        return (0, F.jsxs)("div", {
          className: (0, A.default)(n, "flex flex-col"),
          children: [
            (0, F.jsx)(G.E.div, {
              className: "flex",
              animate: m
                ? { opacity: 1, translateY: 0 }
                : { opacity: 0, translateY: 20 },
              transition: { duration: 0.15 },
              children:
                m &&
                (0, F.jsx)(F.Fragment, {
                  children: (0, F.jsxs)("div", {
                    className: "source-title text-sm font-medium",
                    children: [
                      (0, F.jsx)(eF, { className: "icon-lg" }),
                      "Source Links",
                    ],
                  }),
                }),
            }),
            (0, F.jsxs)("div", {
              className: "flex w-full flex-col gap-[--snc-1]",
              children: [
                m &&
                  p.map((e, t) => {
                    var r;
                    return (0, F.jsx)(
                      G.E.div,
                      {
                        initial: { opacity: 0, translateY: 4 },
                        animate: { opacity: 1, translateY: 0 },
                        transition: eB(t),
                        children: (0, F.jsx)(
                          eH,
                          {
                            groupPosition: [t, 0],
                            rawPosition:
                              0 === t
                                ? 0
                                : d
                                    .slice(0, t)
                                    .reduce(
                                      (e, t) =>
                                        e +
                                        ("search_result_group" === t.entry.type
                                          ? t.entry.entries.length
                                          : 0),
                                      0
                                    ),
                            searchResult: e.entry,
                            showUserHash: u.current === t,
                            showFeedbackButtons: a,
                            highlightUrl: s,
                            turnIndex:
                              null !== (r = e.index) && void 0 !== r ? r : 0,
                          },
                          t
                        ),
                      },
                      ""
                        .concat(e.index, "-")
                        .concat(
                          "search_result_group" === e.entry.type
                            ? e.entry.domain
                            : e.entry.url
                        )
                    );
                  }),
                !i &&
                  (null !== (t = null == d ? void 0 : d.length) && void 0 !== t
                    ? t
                    : 0) > 3 &&
                  (0, F.jsx)(G.E.div, {
                    initial: { opacity: 0, translateY: 4 },
                    animate: { opacity: 1, translateY: 0 },
                    transition: eB(d.length),
                    children: (0, F.jsxs)("button", {
                      className:
                        "more-btn mt-[calc(-1*var(--snc-1))] text-sm font-medium",
                      onClick: () => o(!0),
                      children: [
                        (0, F.jsx)(eF, { className: "icon-lg opacity-0 " }),
                        "Show all web results (",
                        null !== (r = null == d ? void 0 : d.length) &&
                        void 0 !== r
                          ? r
                          : -3,
                        ")",
                      ],
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      var eX = r(75138),
        eY = r(92226),
        eJ = r(79864),
        e$ = r(35936),
        e0 = r(86685),
        e1 = r(90572),
        e2 = r(47567);
      function e5(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function e3(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e5(Object(r), !0).forEach(function (t) {
                (0, en.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : e5(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function e4(e) {
        let { images: t, children: r } = e;
        return t.length >= 4
          ? (0, F.jsx)(e6, {
              images: t,
              numVisible: Math.min(4 * Math.floor(t.length / 4), 8),
              children: r,
            })
          : t.length >= 1
            ? (0, F.jsx)(e8, { image: t[0], children: r })
            : (0, F.jsx)(F.Fragment, { children: r });
      }
      function e8(e) {
        let { image: t, children: r } = e;
        return (0, F.jsxs)("div", {
          className: "w-full",
          children: [
            (0, F.jsx)(
              e7,
              {
                image: t,
                className:
                  "relative z-10 float-right -mt-1 mb-6 ml-6 max-w-[33%] overflow-hidden rounded-xl",
              },
              t.content_url
            ),
            r,
          ],
        });
      }
      function e6(e) {
        let { images: t, numVisible: r = 8, children: n } = e,
          s = (0, T.useRef)(new Set()),
          { 0: a, 1: l } = (0, T.useState)(new Map()),
          { 0: i, 1: o } = (0, T.useState)(new Set()),
          c =
            null == t
              ? void 0
              : t.map((e) =>
                  e3(
                    e3({}, e),
                    {},
                    {
                      status: a.has(e.thumbnail_url)
                        ? "done"
                        : i.has(e.thumbnail_url)
                          ? "error"
                          : "loading",
                      ratio: a.get(e.thumbnail_url),
                    }
                  )
                );
        (0, T.useEffect)(() => {
          null == t ||
            t.forEach((e) => {
              if (!s.current.has(e.thumbnail_url)) {
                s.current.add(e.thumbnail_url);
                let t = new Image();
                (t.onload = function () {
                  l((t) =>
                    new Map(t).set(e.thumbnail_url, this.width / this.height)
                  );
                }),
                  (t.onerror = () => {
                    o((t) => new Set(t).add(e.thumbnail_url));
                  }),
                  (t.src = e.thumbnail_url);
              }
            });
        }, [t]);
        let u = c.filter((e) => "error" !== e.status);
        return (0, F.jsxs)("div", {
          className: "flex flex-col",
          children: [
            (0, F.jsx)("div", {
              className: "mb-6 flex flex-wrap gap-1 overflow-hidden",
              children: u
                .slice(0, r)
                .map((e, t) =>
                  (0, F.jsx)(
                    e7,
                    {
                      image: e,
                      className: (0, A.default)(
                        "w-[calc((100%-0.25rem*3)/4)] overflow-hidden border border-token-border-light",
                        0 === t && "rounded-tl-xl",
                        3 === t && "rounded-tr-xl",
                        t === r - 4 && "rounded-bl-xl",
                        t === r - 1 && "rounded-br-xl"
                      ),
                    },
                    e.thumbnail_url
                  )
                ),
            }),
            n,
          ],
        });
      }
      function e7(e) {
        let { image: t, className: r } = e,
          n = (0, T.useRef)(!1),
          { 0: s, 1: a } = (0, T.useState)(!1);
        return (
          (0, T.useEffect)(() => {
            if (!n.current) {
              n.current = !0;
              let e = new Image();
              (e.onload = () => a(!0)), (e.src = t.thumbnail_url);
            }
          }, [t]),
          (0, F.jsx)("div", {
            className: (0, A.default)(
              "relative aspect-square overflow-hidden",
              r
            ),
            children: s
              ? (0, F.jsx)(G.E.img, {
                  src: t.thumbnail_url,
                  alt: t.url,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.2, ease: "easeInOut" },
                  className:
                    "h-full w-full bg-token-main-surface-tertiary object-cover",
                  whileHover: { scale: 1.025 },
                })
              : (0, F.jsx)("div", {
                  className:
                    "h-full w-full animate-pulse bg-token-main-surface-tertiary",
                }),
          })
        );
      }
      function e9(e) {
        let { data: t } = e;
        return t.expression && void 0 !== t.result
          ? (0, F.jsxs)("div", {
              children: [
                (0, F.jsx)("div", {
                  className: "tracking-wide text-token-text-tertiary",
                  children: "".concat(t.expression, "="),
                }),
                (0, F.jsx)("div", {
                  className: "text-3xl font-medium",
                  children: t.result,
                }),
              ],
            })
          : null;
      }
      function te(e) {
        let { data: t } = e;
        if (!t.price || !t.asset) return null;
        let r = 100 * t.price.changePercent,
          n = r >= 0;
        return (0, F.jsxs)("div", {
          className: "flex justify-between",
          children: [
            (0, F.jsxs)("div", {
              children: [
                (0, F.jsx)("div", {
                  className: "text-3xl font-medium",
                  children: t.asset.ticker,
                }),
                (0, F.jsx)("div", {
                  className: "text-token-text-tertiary",
                  children: t.asset.name,
                }),
              ],
            }),
            (0, F.jsxs)("div", {
              children: [
                (0, F.jsxs)("div", {
                  className: "text-3xl font-medium",
                  children: ["$", t.price.price.toFixed(2)],
                }),
                (0, F.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, F.jsxs)("span", {
                      className: (0, A.default)(
                        "flex items-center gap-1",
                        n ? "text-green-400" : "text-red-500"
                      ),
                      children: [
                        n ? (0, F.jsx)(C.iRh, {}) : (0, F.jsx)(C.tv1, {}),
                        Math.abs(r).toFixed(2),
                        "%",
                      ],
                    }),
                    " ",
                    "today",
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var tt = r(56115);
      function tr(e) {
        let { data: t } = e;
        if (null === t.articles) throw Error();
        let r = (0, ex.u)(t.articles.map((e) => e.source_url));
        return (0, F.jsxs)("div", {
          children: [
            (0, F.jsx)("h2", { className: "mb-4", children: "Top stories" }),
            (0, F.jsx)("div", {
              className: "flex flex-col gap-4",
              children: t.articles.map((e) => {
                var t;
                return (0, F.jsxs)(
                  "div",
                  {
                    className: "flex min-h-28 items-center gap-4",
                    children: [
                      (0, F.jsxs)("div", {
                        className: "flex-grow",
                        children: [
                          (0, F.jsxs)("div", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                              (0, F.jsx)(ef.Z, {
                                url: e.source_url,
                                className:
                                  "flex-shrink-0 rounded-full border border-token-border-medium",
                                size: 24,
                              }),
                              (0, F.jsx)("span", {
                                children:
                                  null !== (t = r.get(e.source_url)) &&
                                  void 0 !== t
                                    ? t
                                    : (0, eg.p)(e.source_url, "short"),
                              }),
                            ],
                          }),
                          (0, F.jsx)("a", {
                            href: e.source_url,
                            target: "_blank",
                            className:
                              "mt-2 line-clamp-2 inline-block cursor-pointer text-base font-medium text-token-link",
                            children: e.title,
                          }),
                          e.published_on &&
                            (0, F.jsx)("div", {
                              className: "text-sm text-token-text-tertiary",
                              children: (0, tt.Z)(
                                new Date(e.published_on),
                                "MMM d, yyyy"
                              ),
                            }),
                        ],
                      }),
                      e.image_url &&
                        (0, F.jsx)("img", {
                          alt: e.title,
                          className:
                            "aspect-square h-28 w-28 flex-shrink-0 rounded-lg object-cover",
                          src: e.image_url,
                        }),
                    ],
                  },
                  e.source_url
                );
              }),
            }),
          ],
        });
      }
      var tn = r(11265),
        ts = r(91304),
        ta = r(24343);
      let tl = (
        (null ===
          (n = Intl.DateTimeFormat(void 0, {
            timeZoneName: "long",
          }).formatToParts(new Date())) ||
        void 0 === n ||
        null === (n = n.find((e) => "timeZoneName" == e.type)) ||
        void 0 === n
          ? void 0
          : n.value) || Intl.DateTimeFormat().resolvedOptions().timeZone
      ).replace(/Daylight|Standard/g, "");
      function ti(e) {
        let [t, r] = e.split(":");
        return "".concat(t.padStart(2, "0"), ":").concat(r);
      }
      let to = { T: "Top", B: "Bot" };
      function tc(e) {
        let { data: t } = e,
          { 0: r, 1: n } = (0, T.useState)(!0);
        if (!t.games.length) return null;
        let s = t.league.league_url;
        function a(e) {
          return (
            "live" === e.status || ("complete" === e.status && null != e.points)
          );
        }
        return (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsxs)("h2", {
              className: "text-lg font-medium",
              children: [t.league.display_name, " Schedule"],
            }),
            s &&
              (0, F.jsx)("a", {
                href: s,
                target: "_blank",
                rel: "noreferrer",
                className: "text-sm text-token-link",
                children: s,
              }),
            (0, F.jsx)("hr", { className: "mt-6 border-token-border-light" }),
            (0, F.jsx)(tn.Z.Root, {
              size: "compact",
              children: (0, F.jsx)(tn.Z.Body, {
                children: (0, F.jsx)(ta.M, {
                  children: t.games.slice(0, r ? 6 : void 0).map((e, r) => {
                    var n;
                    return (0, F.jsxs)(
                      td,
                      {
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -30 },
                        transition: { duration: 0.2 },
                        children: [
                          (0, F.jsx)(tu, {
                            className: "w-[180px]",
                            children: (function (e) {
                              var r, n;
                              switch (e.status) {
                                case "scheduled":
                                  return (0, F.jsxs)(F.Fragment, {
                                    children: [
                                      (function (e) {
                                        let t = new Date(1e3 * e);
                                        return (0, ts.Z)(t)
                                          ? "Today"
                                          : (0, tt.Z)(t, "MMMM d");
                                      })(e.scheduled),
                                      (0, F.jsx)("br", {}),
                                      ((r = e.scheduled),
                                      (0, tt.Z)(new Date(1e3 * r), "h:mm a")),
                                    ],
                                  });
                                case "live":
                                  return (0, F.jsxs)(F.Fragment, {
                                    children: [
                                      "Now",
                                      (0, F.jsx)("br", {}),
                                      (function (e, t) {
                                        if (!t.live_details) return null;
                                        if ("nba" === e) {
                                          var r;
                                          let e = t.live_details;
                                          return ""
                                            .concat(
                                              5 === (r = e.quarter)
                                                ? "OT"
                                                : "Q".concat(r),
                                              " "
                                            )
                                            .concat(ti(e.time));
                                        }
                                        if ("mlb" === e) {
                                          let e = t.live_details;
                                          if (e.current_inning_half)
                                            return ""
                                              .concat(
                                                to[e.current_inning_half],
                                                " "
                                              )
                                              .concat(
                                                (function (e) {
                                                  let t = [
                                                      "th",
                                                      "st",
                                                      "nd",
                                                      "rd",
                                                    ],
                                                    r = e % 100;
                                                  return (
                                                    e +
                                                    (t[(r - 20) % 10] ||
                                                      t[r] ||
                                                      "th")
                                                  );
                                                })(e.current_inning)
                                              );
                                        } else if ("nhl" === e) {
                                          let e = t.live_details;
                                          return "P"
                                            .concat(e.period, " ")
                                            .concat(ti(e.time));
                                        }
                                        return null;
                                      })(t.league.id, e),
                                    ],
                                  });
                                case "complete":
                                  return (0, F.jsxs)("div", {
                                    children: [
                                      "Final",
                                      (0, F.jsx)("br", {}),
                                      (0, F.jsx)("div", {
                                        className: "text-token-text-secondary",
                                        children:
                                          void 0 === (n = e.scheduled)
                                            ? ""
                                            : (0, tt.Z)(
                                                new Date(1e3 * n),
                                                "EEE, MMM d"
                                              ),
                                      }),
                                    ],
                                  });
                              }
                            })(e),
                          }),
                          (0, F.jsx)(tu, {
                            children: (0, F.jsxs)("div", {
                              className: "w-full max-w-[280px]",
                              children: [
                                (0, F.jsxs)("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    (0, F.jsx)("span", {
                                      children: e.away.name,
                                    }),
                                    a(e) &&
                                      (0, F.jsx)("span", {
                                        children: e.points.away,
                                      }),
                                  ],
                                }),
                                (0, F.jsxs)("div", {
                                  className:
                                    "mt-2 flex items-center justify-between",
                                  children: [
                                    e.home.name,
                                    a(e) &&
                                      (0, F.jsx)("span", {
                                        children: e.points.home,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, F.jsx)(tu, {
                            textAlign: "right",
                            className: "text-token-text-secondary",
                            children:
                              null === (n = e.broadcasts) ||
                              void 0 === n ||
                              null ===
                                (n = n.find((e) => "National" === e.locale)) ||
                              void 0 === n
                                ? void 0
                                : n.network,
                          }),
                        ],
                      },
                      r
                    );
                  }),
                }),
              }),
            }),
            (0, F.jsx)("hr", { className: "border-token-border-light" }),
            (0, F.jsxs)("div", {
              className: "mt-6 flex items-center justify-between",
              children: [
                t.games.length > 6 &&
                  (0, F.jsx)("button", {
                    className: "flex items-center text-sm font-medium",
                    onClick: () => n(!r),
                    children: r
                      ? (0, F.jsxs)(F.Fragment, {
                          children: [
                            "Show more ",
                            (0, F.jsx)(N.eOB, { className: "mb-[-2px]" }),
                          ],
                        })
                      : (0, F.jsxs)(F.Fragment, {
                          children: [
                            "Show less ",
                            (0, F.jsx)(N.BZB, { className: "mb-[-2px]" }),
                          ],
                        }),
                  }),
                (0, F.jsx)("div", {
                  className: "text-xs text-token-text-tertiary",
                  children: tl,
                }),
              ],
            }),
          ],
        });
      }
      let tu = (0, O.Z)(tn.Z.Cell)(x || (x = (0, j.Z)(["py-5 align-middle"]))),
        td = (0, G.E)(tn.Z.Row);
      var tm = r(28541),
        tp = r.n(tm);
      let th = ["East", "Central", "West"];
      function tf(e) {
        let { data: t } = e,
          { 0: r, 1: n } = (0, T.useState)(0),
          s = tp()(t.conferences[r].divisions, (e) => {
            var t;
            let r = th.indexOf(null !== (t = e.name) && void 0 !== t ? t : "");
            return -1 === r ? 1 / 0 : r;
          }),
          a =
            t.conferences.length > 1
              ? t.conferences.map((e, t) =>
                  (0, F.jsx)(
                    "button",
                    {
                      className: (0, A.default)(
                        r === t
                          ? "bg-token-main-surface-secondary text-token-text-primary"
                          : "bg-transparent text-token-text-tertiary",
                        "rounded-lg px-3 py-1 text-xs font-medium"
                      ),
                      onClick: () => n(t),
                      children: e.name,
                    },
                    e.name
                  )
                )
              : null;
        return (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsxs)("h2", {
              className: "text-lg font-medium",
              children: [t.league.display_name, " Standings"],
            }),
            a &&
              (0, F.jsx)("div", { className: "mt-5 flex gap-1", children: a }),
            (0, F.jsx)("div", {
              className: "mt-6",
              children: s.map((e) =>
                e.name
                  ? (0, F.jsxs)(
                      "div",
                      {
                        className: "mt-5",
                        children: [
                          (0, F.jsx)("div", {
                            className: "text-md font-medium",
                            children: e.name,
                          }),
                          (0, F.jsx)(tb, {
                            league: t.league.id,
                            teams: e.teams,
                          }),
                        ],
                      },
                      e.name
                    )
                  : (0, F.jsx)(tb, { league: t.league.id, teams: e.teams })
              ),
            }),
            (0, F.jsx)("hr", { className: "border-token-border-light" }),
          ],
        });
      }
      let tg = (0, O.Z)(tn.Z.HeaderCell)(
          v ||
            (v = (0, j.Z)([
              "text-token-text-secondary text-xs dark:bg-token-main-surface-tertiary",
            ]))
        ),
        tx = {
          wins: { column: "W", label: "Wins", format: (e) => e.wins },
          losses: { column: "L", label: "Losses", format: (e) => e.losses },
          ties: { column: "T", label: "Ties", format: (e) => e.ties },
          win_percentage: {
            column: "PCT",
            label: "Win %",
            format: (e) => e.win_percentage.toFixed(3),
          },
          games_behind: {
            column: "GB",
            label: "Games Behind",
            format: (e) =>
              e.games_behind && null !== e.games_behind.conference
                ? 0 === e.games_behind.conference
                  ? "—"
                  : Math.round(100 * e.games_behind.conference) / 100
                : "",
          },
          conference_record: {
            column: "Conf",
            label: "Conference Record",
            format: (e) => {
              let t = e.records.find((e) => "conference" === e.record_type);
              return t ? "".concat(t.wins, "-").concat(t.losses) : "";
            },
          },
          home_record: {
            column: "Home",
            label: "Home Record",
            format: (e) => {
              let t = e.records.find((e) => "home" === e.record_type);
              return t ? "".concat(t.wins, "-").concat(t.losses) : "";
            },
          },
          away_record: {
            column: "Away",
            label: "Away Record",
            format: (e) => {
              let t = e.records.find((e) => "away" === e.record_type);
              return t ? "".concat(t.wins, "-").concat(t.losses) : "";
            },
          },
          l10_record: {
            column: "L10",
            label: "Last 10 Record",
            format: (e) => {
              let t = e.records.find((e) => "last_10" === e.record_type);
              return t ? "".concat(t.wins, "-").concat(t.losses) : "";
            },
          },
          streak: {
            column: "Strk",
            label: "Streak",
            format: (e) => {
              var t, r;
              return e.streak
                ? ""
                    .concat(
                      (null === (t = e.streak) || void 0 === t
                        ? void 0
                        : t.kind) === "win"
                        ? "W"
                        : "L"
                    )
                    .concat(
                      null === (r = e.streak) || void 0 === r
                        ? void 0
                        : r.length
                    )
                : "";
            },
          },
          ot_losses: {
            column: "OTL",
            label: "Overtime Losses",
            format: (e) => e.overtime_losses,
          },
          points: { column: "PTS", label: "Points", format: (e) => e.points },
        },
        tv = {
          nba: [
            "wins",
            "losses",
            "win_percentage",
            "games_behind",
            "l10_record",
            "streak",
          ],
          wnba: [
            "wins",
            "losses",
            "win_percentage",
            "games_behind",
            "l10_record",
            "streak",
          ],
          nhl: [
            "wins",
            "losses",
            "ot_losses",
            "win_percentage",
            "points",
            "conference_record",
            "home_record",
            "l10_record",
            "streak",
          ],
          mlb: ["wins", "losses", "win_percentage", "streak", "l10_record"],
          epl: ["wins", "win_percentage", "losses", "ties"],
          nfl: [],
          ncaaf: [],
          ncaab: [],
          wncaab: [],
        };
      function tb(e) {
        let { league: t, teams: r } = e,
          n = tv[t];
        return (0, F.jsxs)(tn.Z.Root, {
          size: "compact",
          children: [
            (0, F.jsxs)(tn.Z.Header, {
              children: [
                (0, F.jsx)(tg, { children: "Team" }),
                (0, F.jsx)(tg, {}),
                n.map((e) =>
                  (0, F.jsx)(
                    tg,
                    {
                      textAlign: "center",
                      className: "px-1",
                      children: (0, F.jsx)("span", {
                        title: tx[e].label,
                        children: tx[e].column,
                      }),
                    },
                    e
                  )
                ),
              ],
            }),
            (0, F.jsx)(tn.Z.Body, {
              children: r.map((e, t) =>
                (0, F.jsxs)(
                  tn.Z.Row,
                  {
                    children: [
                      (0, F.jsxs)(tn.Z.Cell, {
                        children: [
                          (0, F.jsx)("div", {
                            className:
                              "mr-4 w-4 tabular-nums text-token-text-secondary",
                            children: t + 1,
                          }),
                          (0, F.jsx)("span", {
                            className: "whitespace-nowrap",
                            children: e.name,
                          }),
                        ],
                      }),
                      (0, F.jsx)(tn.Z.Cell, { className: "w-full" }),
                      n.map((t) =>
                        (0, F.jsx)(
                          tn.Z.Cell,
                          {
                            textAlign: "center",
                            className: "whitespace-nowrap px-1 tabular-nums",
                            children: tx[t].format(e),
                          },
                          t
                        )
                      ),
                    ],
                  },
                  e.name
                )
              ),
            }),
          ],
        });
      }
      var ty = r(28294),
        tj = r(87751),
        tw = r(72541);
      function tA(e) {
        let { data: t } = e,
          {
            targetTime: r,
            sourceTime: n,
            humanReadableTargetTime: s,
            humanReadableSourceTime: a,
            humanReadableTimeDifference: l,
          } = (0, T.useMemo)(() => {
            var e;
            let r = (0, tj.Z)(t.target_time, t.target_location.timezone),
              n =
                t.source_time &&
                null !== (e = t.source_location) &&
                void 0 !== e &&
                e.timezone
                  ? (0, tj.Z)(t.source_time, t.source_location.timezone)
                  : null,
              s = (0, tw.Z)(r, "h:mmaaa", {
                timeZone: t.target_location.timezone,
              }),
              a =
                n && t.source_location
                  ? (0, tw.Z)(n, "h:mmaaa", {
                      timeZone: t.source_location.timezone,
                    })
                  : null,
              l = n ? (0, ty.Z)(r, n) : 0,
              i = n
                ? ""
                    .concat(l > 0 ? "+" : "–", " ")
                    .concat(Math.abs(l), " hours")
                : null;
            return {
              targetTime: r,
              sourceTime: n,
              humanReadableTargetTime: s,
              humanReadableSourceTime: a,
              humanReadableTimeDifference: i,
            };
          }, [
            t.source_location,
            t.source_time,
            t.target_location.timezone,
            t.target_time,
          ]),
          i = n ? (0, ee.F)(t.source_location, n) : null,
          o = (0, ee.F)(t.target_location, r);
        return a
          ? (0, F.jsxs)("div", {
              className: "flex items-center gap-9",
              children: [
                (0, F.jsxs)("div", {
                  children: [
                    (0, F.jsx)("div", {
                      className: "text-3xl font-medium",
                      children: a,
                    }),
                    i &&
                      (0, F.jsx)("div", {
                        className: "text-token-text-tertiary",
                        children: i,
                      }),
                  ],
                }),
                (0, F.jsxs)("div", {
                  className:
                    "relative flex-grow text-center text-token-text-tertiary",
                  children: [
                    (0, F.jsx)("div", {
                      className:
                        "absolute left-0 top-1/2 z-0 h-[1px] w-full border-t border-token-border-medium before:absolute before:right-0 before:block before:h-[5px] before:w-[5px] before:translate-y-[-3px] before:rounded-full before:bg-token-text-tertiary after:block after:h-[5px] after:w-[5px] after:translate-y-[-3px] after:rounded-full after:bg-token-text-tertiary",
                    }),
                    (0, F.jsx)("span", {
                      className:
                        "absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-token-border-medium bg-token-main-surface-primary px-3 py-0.5 text-xs",
                      children: l,
                    }),
                  ],
                }),
                (0, F.jsxs)("div", {
                  className: "text-right",
                  children: [
                    (0, F.jsx)("div", {
                      className: "text-3xl font-medium",
                      children: s,
                    }),
                    (0, F.jsx)("div", {
                      className: "text-token-text-tertiary",
                      children: o,
                    }),
                  ],
                }),
              ],
            })
          : (0, F.jsxs)("div", {
              children: [
                (0, F.jsx)("div", {
                  className: "text-3xl font-medium",
                  children: s,
                }),
                (0, F.jsx)("div", {
                  className: "text-token-text-tertiary",
                  children: o,
                }),
              ],
            });
      }
      var tO = r(29924),
        tk = {
          src: "https://cdn.oaistatic.com/_next/static/media/cloudy.00382cff.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXHY2NjQ0NDLy8vb29v5+fnr6+vl5eXa2trg4ODm5ubu7u7m5ub29vbwicHnAAAADHRSTlMA/fx6XA5ptkLTH2+edEDrAAAACXBIWXMAACxLAAAsSwGlPZapAAAANklEQVR4nEXLMRLAIAzEQN3ZGJKY/383MzSo2UpwG1XjOPeewPu01AVf21Yny7KkhBURkXf+AR8vANHyV63lAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        t_ = {
          src: "https://cdn.oaistatic.com/_next/static/media/haze.7bf0628a.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVMaXHYupiUoKn/liCfwd3/nAr3vGmOnamyub6otb++vr3/kgamsLj+nxLvgxeVoaycoaKYpbCkkYb9mAz8kQ6zrafrrG+Gl6P/pwLEw727ppHkxaP8kw6coqVwxU3kAAAAGHRSTlMA+5InEsH5piuwqlLAoyF++dGY9vz+wP1uL8iLAAAACXBIWXMAACxLAAAsSwGlPZapAAAAO0lEQVR4nGNgQALcrLzMDAwcnFxsEhKsIIYkm4iMMB8Dj6AAI6O0GAMDC7+4rKiUEAsDAxM7CHDA9QIARrICEXlIYf4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        tN = {
          src: "https://cdn.oaistatic.com/_next/static/media/mist.cef57380.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXHJycmqs7y8vLu9wsSstLmqs7rN2c2QnaeJmaWotLu1vMC9w8iqtb21vsWUoKmbprCMnKeToayRn6iUoqy6wsXEyc2UiX3wAAAAFnRSTlMAPypdMbv8BKj9FP1ro8yS0tt+4mmkuOtixgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAD5JREFUeJwdi0kOwCAMxAZIMgTSffn/U6vUB0s+GEhIgCgqGbKsbysBVLUImwLd/bL5EON09+Me4NaT+t+pDzZgAaO6S7N2AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        tS = {
          src: "https://cdn.oaistatic.com/_next/static/media/partly-cloudy.4f9dbdaf.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXHKxcH4hR7/hx7jVQDT1NX/37nHycrOzMzd39/+lwnT09PWzcn/kwDyzqvg3uD5sWrd3d380ZfX19Pr28z/phj/wm6rhz7sAAAAFHRSTlMA7yoiDez+e/4dozWw+vit3TzOTdRPN9MAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA6SURBVHicY2BABizMYEqQX0iUi4GBQZhVhE2Ml4mBk5WDkY9NgIWBk5GDg0OEh4GBgZudnZ2dE6EVAC8cAWG5t2y3AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        tP = {
          src: "https://cdn.oaistatic.com/_next/static/media/partly-sunny.0ee3693e.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEXkyV/7jwvsjBz2li/voz7z3cXfu4PdrV5MaXHsqTbX0cvj07bm2cj6tVLmxJX/sFX/xmjmzqj/mALj2c11XzOkAAAAEnRSTlMBrVa2NPpeBwAto7fEsGj6/krbj3AZAAAACXBIWXMAACxLAAAsSwGlPZapAAAAPElEQVR4nCXLSRLAIAwDQQE2lsgK/P+vqcBpLtMgGEEQoMz0t59XyiJ4+zuKBUJpPH4QVC4+255rXW7zD0GCAdKVkO21AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        tE = {
          src: "https://cdn.oaistatic.com/_next/static/media/rain-drizzle.dd0eb5ff.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEVMaXHk5OTr6+vq6urR0M80t/rg3dvf398rg87Gysvf39/U1tbu7u7p6emqydfg4ODe3t7x8fHV1NT7VM1KAAAAEXRSTlMAFy6w+0tD/Qqp5GUewcrpraZWRYMAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA6SURBVHicRYvJDcAgDMAMBJJwFvYftkKqVH/8seEnphSvS917AGGpiD4Q6pGj2qH4dG83spy/zQx4AScQASnZdgAuAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        tC = {
          src: "https://cdn.oaistatic.com/_next/static/media/rain-showers.0c759a1b.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEVMaXHUyb//mQnSzMzU1Nbk4OA0uPwrg87DyMvKyMfgZgD/jVXg0sn/mQ/4iSfm5ub7p0320Kz8y4yszdr/6sLg4ubT1NfPz8/w2MTLzc//wF3w5dj/166cGUAIAAAAGHRSTlMA+u9QNiFLCqb7GQm5gCcV5fmsyPyF0+PKCVdvAAAACXBIWXMAACxLAAAsSwGlPZapAAAAPklEQVR4nB2LxxHAIAzABAFsp5He958zB3roJUGhq4774gcgHO/2+JF83m7+ppZoZu7qgUZX1VBiSalOIAL8SiYB2VyRuGAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        tD = {
          src: "https://cdn.oaistatic.com/_next/static/media/rain-thunder.9801386b.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXHc29v19fXmuoXj4+Pb29vGxcXMzMvFt9NvgJ/4cwDG0OTagycssfDJycnX19cAxP+zzd3Ozs7X19e+yszX19jX0MaT0GpmAAAAFXRSTlMAzAzRGz78+wQLUk2GRehTQZ/E56UGd/X5AAAACXBIWXMAACxLAAAsSwGlPZapAAAAPUlEQVR4nB3Lxw3AQAwEsdElrZyT3H+pBsw/QUgAopt1BPudaQWa+xh5Fdrmw19v0J+z1hmI9Vimv0WExAc50AG8kA54XAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        tR = {
          src: "https://cdn.oaistatic.com/_next/static/media/rain.1537f78c.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEXZ4uzg3t7p6ekptPbn5+fj4+Pi4uKIqci/zdHS0dEmtfsitvvq6uokuPvU1NTc3Nzc3Nzs7OzPAM+yAAAAEHRSTlMBTsgfGTvuCqD8UEPLRebB+sYJzgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADhJREFUeJxFizkSwCAMxATYXpMT/v/ZDDRRIzWCH6/Vl0vMeQksRu/jFfasCAPPzCyAzvto+5IEfCu9AVLnfqqIAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        tM = {
          src: "https://cdn.oaistatic.com/_next/static/media/snow-3.42dc282c.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXHX19qprq7T09Lp5uLGx8inra/P2eOoqKLJycnT09R7qeGLr+XU191flu+2v8eQte2Iqtdgm/e/ytja2djJysra2dZ6ZAhlAAAAFXRSTlMAPThUG/ItAwqg7SL+xKH5dulF/s1gNdKhAAAACXBIWXMAACxLAAAsSwGlPZapAAAAPklEQVR4nB3LWxaAIAhAwauigNo72v9SO/U/A4oqgJLuZT8VSn+uuQ6kR93mMZAaEVEFkrt7+XTLuf3NzAxeSrAB7pNQq0AAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        tT = {
          src: "https://cdn.oaistatic.com/_next/static/media/snow.27e603c5.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEWKvv91qe52rfR0qfZ8tPRyp/ZuoPGLvPV3rvp/yP6exva+OpWMAAAAC3RSTlMBgUmRW2/IHIIcEb3m440AAAAJcEhZcwAALEsAACxLAaU9lqkAAAAqSURBVHicY2BAAHZGRnYQzcTMysrMxMDAwMLBxsbIgsyASzFwckAUQwEAEyUAjOcS3MEAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        tZ = {
          src: "https://cdn.oaistatic.com/_next/static/media/sunny.54f7a772.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXHnoTvomSTwqz7tlCr1egj7jQr8nBH/pAH/jwA71PguAAAACHRSTlMAMwYsV7Surx5kgr8AAAAJcEhZcwAALEsAACxLAaU9lqkAAAAzSURBVHicJYtBDgAgCMO6AaL//7ARe1mTpQA2Q0gxm90ZYK29l4xV5zwhsupdIEk/m/wCFKYAjqDpHCYAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        tL = {
          src: "https://cdn.oaistatic.com/_next/static/media/thunder.8e30f80f.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXHkpF3h4+X7kg7Y1dPo5+fm5OLi1M/r6ujHyMrR0tPs7Oy/Tw/e///Yup/tfynq8fraybPS19zm7PPq6uvv8PHoyKHu3c4+VufYAAAAFXRSTlMA/P79MLRCFjn0/m0QH9Oeb/z85dwRAbFkAAAACXBIWXMAACxLAAAsSwGlPZapAAAAP0lEQVR4nEWLMRaAIAzFPtDSFlFArd7/pj5cyJIlARbKrNP5cr8FyPEZZ2RBf1MoxTfsRwpmpoA0IpJZ13/+ADkMAZ7eCPGLAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        tI = {
          src: "https://cdn.oaistatic.com/_next/static/media/tornado.bfd2622d.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEVMaXG2trK5ubm5urq0tbW7vL22ubm5ubm6u721traoqaqwsrJhMbhvAAAADHRSTlMAEF5+hj0eS3GSpi/6XL38AAAACXBIWXMAACxLAAAsSwGlPZapAAAAMklEQVR4nCWMQRIAIAiEWFez+v+Dm0YucAIQQ7i7F+jGDl9BHecJQGXnD6jMNbHH6A8eGNkAoYRlWWwAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        tF = {
          src: "https://cdn.oaistatic.com/_next/static/media/windy.5508d183.png",
          height: 96,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEVMaXHs6OXS1NT/9t7b3d52rOHe3Nnz8Oupxt/5//nH1urG1ObDyctyqd5qpt7K0tnf1Mnn4NiUuNyKsuJ3sem51/aLvPD9+fbt6OOlzPcR3mK9AAAAFXRSTlMAtFsfXfr+a/0Ot9N3j6VEeEL9+/7IYc79AAAACXBIWXMAACxLAAAsSwGlPZapAAAAPElEQVR4nGNgQABOdnZOMM0lKs7IwMDAzC0mzCHKzsDALskqxMohwcIgyCEmwsHGxsLAwM/DxyvAhNAMADqyAb96EAOJAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        };
      function tU(e, t) {
        return "fahrenheit" === e
          ? Math.round((9 * t) / 5 + 32)
          : Math.round(((t - 32) * 5) / 9);
      }
      function tz(e) {
        let { weatherResults: t } = e,
          { daily: r, hourly: n } = t,
          s = r[0],
          a = r.map((e) => new Date(1e3 * (e.timestamp + t.location.timezone))),
          l =
            (1 === a.length || (0, ts.Z)(a[0])) &&
            null !== s.temperature.min &&
            null !== s.temperature.max
              ? s
              : null;
        return (0, F.jsxs)(F.Fragment, {
          children: [
            (0, F.jsxs)("div", {
              className: "mb-[--snc-1] flex items-center gap-4",
              children: [
                (0, F.jsxs)("div", {
                  className: "flex-grow",
                  children: [
                    (0, F.jsx)("div", {
                      className: "text-xl font-medium",
                      children: (0, ee.F)(t.location),
                    }),
                    (0, F.jsx)("div", {
                      className: "text-token-text-tertiary",
                      children: "".concat(
                        (function (e) {
                          let t = e.daily.map(
                            (t) =>
                              new Date(
                                1e3 * (t.timestamp + e.location.timezone)
                              )
                          );
                          return 1 === t.length
                            ? tQ(t[0])
                            : (0, ts.Z)(t[0])
                              ? 7 == t.length
                                ? "This week"
                                : "Next ".concat(t.length, " days")
                              : ""
                                  .concat(tQ(t[0]), " - ")
                                  .concat(tQ(t[t.length - 1]));
                        })(t)
                      ),
                    }),
                  ],
                }),
                l &&
                  (0, F.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, F.jsxs)("div", {
                        className:
                          "grid grid-cols-2 grid-rows-2 gap-x-2 text-left",
                        children: [
                          (0, F.jsx)("span", {
                            className: "font-medium",
                            children: "High",
                          }),
                          (0, F.jsx)("span", {
                            children: "".concat(
                              tU("fahrenheit", l.temperature.max),
                              "\xb0F"
                            ),
                          }),
                          (0, F.jsx)("span", {
                            className: "font-medium",
                            children: "Low",
                          }),
                          (0, F.jsx)("span", {
                            children: "".concat(
                              tU("fahrenheit", l.temperature.min),
                              "\xb0F"
                            ),
                          }),
                        ],
                      }),
                      (0, F.jsx)("div", {
                        children: (0, F.jsx)(M(), {
                          alt: l.description.description,
                          src: tB(l.description.id).src,
                          width: 58,
                          height: 58,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            n.length > 0 &&
              (0, F.jsx)("div", {
                className: "no-scrollbar mb-4 flex gap-2 overflow-x-auto",
                children: n.map((e) =>
                  (0, F.jsx)(tq, { weatherData: e }, e.timestamp)
                ),
              }),
            r.length > 1 &&
              (0, F.jsx)("div", {
                className: "flex flex-col gap-3",
                children: r.map((e, r) =>
                  n.length > 0 && 0 === r
                    ? null
                    : (0, F.jsx)(
                        tV,
                        { weatherData: e, timezone: t.location.timezone },
                        e.timestamp
                      )
                ),
              }),
          ],
        });
      }
      function tq(e) {
        let { weatherData: t } = e,
          r = t.description;
        return null === t.temperature.current ||
          t.timestamp < Date.now() / 1e3 - 3600
          ? null
          : (0, F.jsxs)("div", {
              className:
                "flex min-w-[110px] flex-col items-center rounded-lg bg-token-main-surface-secondary py-2",
              children: [
                (0, F.jsx)(M(), {
                  alt: r.description,
                  src: tB(r.id).src,
                  width: 58,
                  height: 58,
                }),
                (0, F.jsx)("div", {
                  className: "mt-3 font-medium",
                  children: (function (e, t) {
                    let r = new Date(1e3 * e + 0);
                    return (0, tt.Z)(r, "ha");
                  })(t.timestamp, 0),
                }),
                (0, F.jsx)("div", {
                  className: "mt-1",
                  children: " ".concat(
                    tU("fahrenheit", t.temperature.current),
                    "\xb0F"
                  ),
                }),
              ],
            });
      }
      function tV(e) {
        let { weatherData: t, timezone: r } = e,
          n = t.description,
          s = new Date(1e3 * (t.timestamp + r));
        return null === t.temperature.min || null === t.temperature.max
          ? null
          : (0, F.jsxs)(
              "div",
              {
                className: "flex items-center gap-6",
                children: [
                  (0, F.jsx)(M(), {
                    alt: n.description,
                    src: tB(n.id).src,
                    width: 58,
                    height: 58,
                  }),
                  (0, F.jsxs)("div", {
                    children: [
                      (0, F.jsx)("div", {
                        className: "font-medium",
                        children: tQ(s),
                      }),
                      (0, F.jsxs)("div", {
                        children: [
                          (0, F.jsx)("span", {
                            className: "font-medium",
                            children: "H:",
                          }),
                          " ".concat(
                            tU("fahrenheit", t.temperature.max),
                            "\xb0F"
                          ),
                          (0, F.jsx)("span", {
                            className: "ml-2 font-medium",
                            children: "L:",
                          }),
                          " ".concat(
                            tU("fahrenheit", t.temperature.min),
                            "\xb0F"
                          ),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              t.timestamp
            );
      }
      function tQ(e) {
        return (0, ts.Z)(e)
          ? "Today"
          : (0, tO.Z)(e)
            ? "Tomorrow"
            : e.getTime() - Date.now() < 5184e5
              ? (0, tt.Z)(e, "EEEE")
              : (0, tt.Z)(e, "EEEE, MMMM do");
      }
      function tB(e) {
        if (e >= 200 && e < 300)
          return 211 === e || 212 === e || 221 === e ? tL : tD;
        if (e >= 300 && e < 500) return e >= 300 && e <= 311 ? tE : tR;
        if (e >= 500 && e < 600)
          return e >= 500 && e <= 504 ? tE : 511 === e ? tM : tC;
        if (e >= 600 && e < 700) return 612 === e || 613 === e ? tM : tT;
        if (e >= 700 && e < 800)
          return 701 === e || 741 === e
            ? tN
            : 771 === e
              ? tF
              : 781 === e
                ? tI
                : t_;
        if (e >= 800 && e < 900) {
          if (800 === e) return tZ;
          if (801 === e) return tP;
          if (802 === e) return tS;
        }
        return tk;
      }
      function tG(e) {
        let { widget: t } = e;
        switch (null == t ? void 0 : t.type) {
          case "finance":
            return (0, F.jsx)(te, { data: t.data });
          case "sports-standings":
            return (0, F.jsx)(tf, { data: t.data });
          case "sports-schedule":
            return (0, F.jsx)(tc, { data: t.data });
          case "time-difference":
            return (0, F.jsx)(tA, { data: t.data });
          case "calculator":
            return (0, F.jsx)(e9, { data: t.data });
          case "news":
            return (0, F.jsx)(tr, { data: t.data });
          case "weather":
            return (0, F.jsx)(tz, { weatherResults: t.data });
          default:
            return null;
        }
      }
      function tH(e) {
        let { tldr: t } = e;
        return (0, F.jsx)("a", {
          href: t.url,
          target: "_blank",
          children: (0, F.jsxs)("div", {
            className: "flex items-center",
            children: [
              (0, F.jsxs)("div", {
                className: "flex-1",
                children: [
                  (0, F.jsx)("div", {
                    className: "text-lg font-medium",
                    children: t.display_title,
                  }),
                  (0, F.jsx)("div", {
                    className: "text-token-link",
                    children: t.url,
                  }),
                ],
              }),
              (0, F.jsx)(ef.Z, {
                url: t.url,
                size: 128,
                className: "h-[--snc-3] w-[--snc-3] shrink-0",
              }),
            ],
          }),
        });
      }
      function tK(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function tW(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tK(Object(r), !0).forEach(function (t) {
                (0, en.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tK(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function tX(e) {
        let {
          turn: t,
          isHighlighted: r,
          onRetryQuery: n,
          onSubmitClickableFollowup: s,
        } = e;
        if (null === t.index) throw Error();
        return (0, F.jsxs)(F.Fragment, {
          children: [
            t.index > 0 && (0, F.jsx)(tY, { text: t.user_query }),
            et(t)
              ? (0, F.jsx)(tJ, {
                  text: "Something went wrong. Please try again.",
                  canRetry: !0,
                  onRetry: () => n(t.user_query),
                })
              : (0, F.jsx)(t$, {
                  turn: t,
                  isHighlighted: r,
                  onSubmitClickableFollowup: s,
                }),
          ],
        });
      }
      function tY(e) {
        let { text: t } = e;
        return (0, F.jsx)("div", {
          className:
            "text-bubble flex-end inline-flex items-end justify-end gap-4",
          children: (0, F.jsx)("div", {
            className:
              "max-w-[calc(100%-80px)] rounded-3xl rounded-br-lg bg-token-main-surface-tertiary px-5 py-2.5",
            children: (0, F.jsx)(t2, { text: t }),
          }),
        });
      }
      function tJ(e) {
        let { text: t, onRetry: r, canRetry: n } = e;
        return (0, F.jsx)("div", {
          children: (0, F.jsx)(eJ.Z, {
            type: "danger",
            className:
              "my-0 border border-token-border-light bg-transparent text-token-text-secondary",
            iconClassName: "text-red-500",
            children: (0, F.jsxs)("div", {
              className:
                "flex w-full items-center justify-between text-red-500",
              children: [
                t,
                n &&
                  (0, F.jsx)("button", {
                    onClick: () => r(),
                    className: "red-500 font-medium text-token-text-primary",
                    children: "Retry",
                  }),
              ],
            }),
          }),
        });
      }
      function t$(e) {
        var t, r, n;
        let { turn: s, isHighlighted: a, onSubmitClickableFollowup: l } = e;
        if (null === s.index) throw Error();
        let i = (0, T.useRef)(null),
          o = (0, $.nn)($.LW.threadId),
          c = (0, $.nn)($.LW.lastTurn),
          u = (null == c ? void 0 : c.index) === s.index,
          d =
            null !==
              (t =
                null === (r = s.model_response) || void 0 === r
                  ? void 0
                  : r.text) && void 0 !== t
              ? t
              : "",
          {
            processedText: m,
            displayedCitations: p,
            imageCitations: h,
            tldr: f,
          } = (function (e, t) {
            var r, n;
            let s;
            let a = "",
              l = 0,
              i = [],
              o = (
                null !==
                  (r =
                    null === (n = t.model_response) || void 0 === n
                      ? void 0
                      : n.citations) && void 0 !== r
                  ? r
                  : []
              )
                .toSorted(
                  (e, t) => e.start_idx - t.start_idx || e.end_idx - t.end_idx
                )
                .map((t, r) => {
                  let n = { type: e0.Zn.Standard };
                  return (
                    "title" in t &&
                    "string" == typeof t.title &&
                    "url" in t &&
                    "string" == typeof t.url
                      ? (n.metadata = {
                          title: t.title,
                          url: t.url,
                          type: "webpage",
                        })
                      : "url" in t &&
                          "string" == typeof t.url &&
                          "content_url" in t &&
                          "string" == typeof t.content_url
                        ? i.push(t)
                        : "display_title" in t &&
                          "string" == typeof t.display_title &&
                          "page_title" in t &&
                          "string" == typeof t.page_title &&
                          "url" in t &&
                          "string" == typeof t.url &&
                          (s = t),
                    t.start_idx > l &&
                      ((a += e.slice(l, t.start_idx)), (l = t.end_idx)),
                    "" != a && (a += "&#8203;"),
                    (a += "``【oaicite:".concat(r, "】``&#8203;")),
                    t.end_idx > l && (l = t.end_idx),
                    n
                  );
                }),
              c = e.indexOf("【", l);
            return {
              processedText: (a += e.slice(l, -1 == c ? void 0 : c)),
              displayedCitations: o,
              imageCitations: i,
              tldr: s,
            };
          })(d, s),
          g = s.index > 0,
          x = 1 === s.index,
          v = (0, ee.K)(s),
          b =
            "in_progress" === s.execution_status || null === s.execution_status,
          y = (0, ex.u)(
            p.reduce((e, t) => {
              var r, n;
              return t.type === e0.Zn.Standard &&
                (null === (r = t.metadata) || void 0 === r
                  ? void 0
                  : r.type) !== "file" &&
                (null === (n = t.metadata) || void 0 === n ? void 0 : n.url) !=
                  null
                ? [...e, t.metadata.url]
                : e;
            }, [])
          );
        return (
          (0, T.useEffect)(() => {
            a &&
              i.current &&
              i.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }, [a]),
          (0, F.jsxs)(F.Fragment, {
            children: [
              (0, F.jsxs)("div", {
                ref: i,
                className: (0, A.default)("group flex flex-col gap-[--snc-1]", {
                  "-mx-2 rounded-md bg-yellow-100 px-2 py-4 dark:bg-yellow-900":
                    a,
                }),
                children: [
                  null != v &&
                    (0, F.jsx)(t0, {
                      $hideDivider:
                        null === (n = v.displayOptions) || void 0 === n
                          ? void 0
                          : n.hideDivider,
                      children: (0, F.jsx)(tG, { widget: v }),
                    }),
                  null != f &&
                    (0, F.jsx)(t0, { children: (0, F.jsx)(tH, { tldr: f }) }),
                  (0, F.jsxs)("div", {
                    className: "inline-flex w-full gap-4",
                    children: [
                      g &&
                        (0, F.jsx)(t1, {
                          className: "mt-[1px]",
                          children: (0, F.jsx)(w.nI, {
                            className: "h-[14px] w-[14px]",
                          }),
                        }),
                      (0, F.jsxs)("div", {
                        className: "w-full",
                        children: [
                          (0, F.jsx)(e4, {
                            images: h,
                            children: (0, F.jsx)(e0.h7.Provider, {
                              value: {
                                clientThreadId: eY.Zq,
                                displayType: e0.QU.expandAll,
                                displayedCitations: p,
                                isActivelyStreaming: b,
                                message: {
                                  id: "",
                                  author: {
                                    role: eY.uU.Assistant,
                                    name: "Search",
                                  },
                                  content: {
                                    content_type: eY.PX.Text,
                                    parts: [d],
                                  },
                                },
                                attributions: y,
                                onCitationClicked: (e) => {
                                  if (null === s.index) throw Error();
                                  o &&
                                    "webpage" === e.type &&
                                    ek.Y.logEvent(ek.M.searchCitationClicked, {
                                      thread_id: o,
                                      url: e.url,
                                      title: e.title,
                                      pub_date: e.pub_date,
                                      turn_index: s.index,
                                    });
                                },
                                onCitationHovered: (e) => {
                                  if (null === s.index) throw Error();
                                  o &&
                                    "webpage" === e.type &&
                                    ek.Y.logEvent(ek.M.searchCitationHovered, {
                                      thread_id: o,
                                      url: e.url,
                                      title: e.title,
                                      pub_date: e.pub_date,
                                      turn_index: s.index,
                                    });
                                },
                              },
                              children: (0, F.jsx)(t2, {
                                text: m,
                                onSubmitClickableFollowup: l,
                                isActivelyStreaming: b,
                              }),
                            }),
                          }),
                          !b &&
                            (0, F.jsx)("div", {
                              className: (0, A.default)({
                                "invisible group-hover:visible": !u,
                              }),
                              children: (0, F.jsx)(eD, { turn: s }),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              x &&
                (0, F.jsx)(eJ.Z, {
                  type: "info",
                  dismissible: !0,
                  className: "border border-token-border-light",
                  children:
                    "Follow ups aren't great yet. Please rate poor responses.",
                }),
            ],
          })
        );
      }
      let t0 = O.Z.div(b || (b = (0, j.Z)(["pb-[--snc-1]\n", ""])), (e) => {
          let { $hideDivider: t } = e;
          return !t && "border-b-[0.5px] border-black/20";
        }),
        t1 = (e) => {
          let { children: t, className: r } = e;
          return (0, F.jsx)("div", {
            className: (0, A.default)(
              "gizmo-shadow-stroke flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full",
              r
            ),
            children: t,
          });
        };
      function t2(e) {
        let {
          text: t,
          onSubmitClickableFollowup: r,
          isActivelyStreaming: n = !1,
        } = e;
        return (0, F.jsx)(t5, {
          className: (0, A.default)(
            "relative text-token-text-primary",
            "" === t && n && "result-thinking",
            n && "result-streaming"
          ),
          onSubmitClickableFollowup: r,
          children: t,
        });
      }
      function t5(e) {
        let {
            size: t = "medium",
            children: r,
            className: n,
            onSubmitClickableFollowup: s,
          } = e,
          { resolvedTheme: a } = (0, P.F)(),
          l = (0, T.useMemo)(
            () =>
              tW(
                tW({}, e$.ff),
                {},
                {
                  a: (e) => {
                    let { href: t, children: r } = e;
                    if (void 0 === s) throw Error();
                    if (t && /^turn[0-9]+cfs[0-9]+$/.test(t)) {
                      if (1 !== r.length) throw Error();
                      let e = r[0];
                      if ("string" != typeof e) throw Error();
                      return (0, F.jsx)("button", {
                        className:
                          "-my-[999px] rounded-md border-[1px] border-blue-500 px-1 text-blue-500",
                        onClick: () => s(e),
                        children: r,
                      });
                    }
                    return (0, F.jsx)("a", {
                      href: t ? (0, e$.H)(t) : void 0,
                      className: "text-blue-500 underline",
                      children: r,
                    });
                  },
                  ol: (e) => {
                    let { start: t = 1, children: r } = e;
                    return (0, F.jsx)("ol", {
                      children: T.Children.map(r, (e, r) => {
                        if ((0, T.isValidElement)(e)) {
                          let n = e.props.children;
                          return (0, F.jsxs)(
                            "li",
                            {
                              children: [
                                (0, F.jsxs)("span", {
                                  className: "mr-2 text-token-text-secondary",
                                  children: [t + r, "."],
                                }),
                                n,
                              ],
                            },
                            r
                          );
                        }
                        return e;
                      }),
                    });
                  },
                }
              ),
            [s]
          );
        return (0, F.jsx)(e1.S, {
          name: "formatted_text_error",
          fallback: () => (0, F.jsx)(F.Fragment, { children: r }),
          children: (0, F.jsx)(e2.D, {
            rehypePlugins: e$.Yu,
            remarkPlugins: e$.Hf,
            linkTarget: "_new",
            className: (0, A.default)(
              n,
              "prose w-full break-words dark:prose-invert",
              "dark" === a ? "dark" : "light",
              "small" === t && "prose-xs"
            ),
            transformLinkUri: e$.H,
            components: l,
            children: r,
          }),
        });
      }
      function t3(e) {
        var t;
        let {
            onRetryQuery: r,
            highlightTurnIndex: n,
            onSubmitClickableFollowup: s,
          } = e,
          a = (0, $.nn)($.LW.turns),
          l = (0, $.nn)($.LW.firstTurn);
        return null != l && et(l)
          ? (0, F.jsx)(t8, { onRetryClick: r })
          : (0, F.jsx)("div", {
              className: "flex w-full flex-col gap-[--snc-1] p-[--snc-2]",
              children:
                null != l &&
                ((null === (t = l.model_response) || void 0 === t
                  ? void 0
                  : t.text) != null ||
                  null != (0, ee.K)(l))
                  ? a.map((e, t) =>
                      (0, F.jsx)(
                        tX,
                        {
                          turn: e,
                          isHighlighted: e.index === n,
                          onRetryQuery: r,
                          onSubmitClickableFollowup: s,
                        },
                        t
                      )
                    )
                  : (0, F.jsx)(t4, {}),
            });
      }
      function t4() {
        return (0, F.jsx)("div", {
          children: (0, F.jsx)(eX.H, { lines: 6, variance: 3 }),
        });
      }
      function t8(e) {
        let { onRetryClick: t } = e;
        return (0, F.jsx)("div", {
          className: "flex h-full w-full items-center justify-center",
          children: (0, F.jsxs)("button", {
            className:
              "flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-full hover:bg-token-main-surface-secondary",
            onClick: () => t(),
            children: [
              (0, F.jsx)(N.muB, { className: "flex-shrink-0" }),
              "Retry",
            ],
          }),
        });
      }
      function t6(e) {
        let {
            readyState: t,
            hasSubmittedInitialQuery: r,
            searchQuery: n,
            followupQuery: s,
            onUpdateSearchQuery: a,
            onUpdateFollowupQuery: l,
            onSubmitSearch: i,
            onSubmitFollowup: o,
            followupInputRef: c,
            settings: u,
            onReset: d,
            onUpdateSetting: m,
            onRetryQuery: p,
            highlightUrl: h,
            highlightTurnIndex: f,
          } = e,
          g = (0, $.nn)($.LW.firstTurn),
          x = null != g && et(g);
        if ((null == g ? void 0 : g.index) === null) throw Error();
        return (0, F.jsxs)("div", {
          className: "wrapper",
          children: [
            (0, F.jsxs)("div", {
              className: "content-wrapper",
              children: [
                (0, F.jsxs)("header", {
                  className:
                    "flex h-[--snc-header-height] flex-shrink-0 items-center",
                  children: [
                    (0, F.jsx)("div", {
                      className:
                        "hidden w-[--snc-4] flex-shrink-0 items-center justify-center snc-lg:flex",
                      children: (0, F.jsx)("button", {
                        onClick: () => d(),
                        className: "hover:text-token-text-secondary",
                        children: (0, F.jsx)(w.nI, { className: "icon-2xl" }),
                      }),
                    }),
                    (0, F.jsxs)(t7, {
                      className: "main-column flex",
                      children: [
                        (0, F.jsx)(W, {
                          currentQuery: n,
                          onUpdateCurrentQuery: a,
                          onSubmit: i,
                        }),
                        (0, F.jsx)(X._, { readyState: t }),
                      ],
                    }),
                  ],
                }),
                (0, F.jsxs)("main", {
                  className: "flex",
                  children: [
                    (0, F.jsx)("div", {
                      className: "platform-nav",
                      children: (0, F.jsx)(ep, {
                        settings: u,
                        onUpdateSettings: m,
                      }),
                    }),
                    (0, F.jsxs)(t7, {
                      className: "main-column",
                      children: [
                        (0, F.jsx)("div", {
                          className: (0, A.default)(
                            "messages-body hide-scrollbar shadow-snc-lg dark:bg-token-main-surface-tertiary dark:shadow-none",
                            !x && "pb-[150px]"
                          ),
                          children: (0, F.jsx)(t3, {
                            onRetryQuery: p,
                            highlightTurnIndex: f,
                            onSubmitClickableFollowup: o,
                          }),
                        }),
                        (0, F.jsx)("div", {
                          className: "followup-input",
                          children: (0, F.jsx)(er, {
                            readyState: t,
                            hasSubmittedInitialQuery: r,
                            currentQuery: s,
                            onUpdateCurrentQuery: l,
                            onSubmit: o,
                            ref: c,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, F.jsx)("aside", {
              className: "links-body hide-scrollbar",
              children: (0, F.jsx)(eW, { highlightUrl: h }),
            }),
            (0, F.jsx)("nav", {
              className:
                "pointer-events-none fixed right-[--snc-2] flex h-[--snc-header-height] items-center justify-center snc-md:right-[--snc-4] snc-lg:right-[--snc-3]",
              children: (0, F.jsx)(Q, {
                iconSize: "gizmo",
                className: "pointer-events-auto shadow-lg",
                searchQuery: n,
              }),
            }),
          ],
        });
      }
      let t7 = O.Z.div(
        y || (y = (0, j.Z)(["snc-md:ml-[--snc-4] snc-lg:ml-0"]))
      );
    },
    75388: function (e, t, r) {
      "use strict";
      r.d(t, {
        _: function () {
          return c;
        },
      });
      var n = r(11335),
        s = r(19841),
        a = r(70079),
        l = r(15118),
        i = r(35250);
      let o = {
        [l.kQ.CONNECTING]: "Connecting",
        [l.kQ.OPEN]: "Open",
        [l.kQ.CLOSING]: "Closing",
        [l.kQ.CLOSED]: "Closed",
        [l.kQ.UNINSTANTIATED]: "Uninstantiated",
      };
      function c(e) {
        let { readyState: t, className: r } = e,
          { 0: c, 1: u } = (0, a.useState)(!0);
        return ((0, a.useEffect)(() => {
          setTimeout(() => {
            u(!0);
          }, 1e3);
        }, []),
        t !== l.kQ.OPEN && c)
          ? (0, i.jsx)("div", {
              className: (0, s.default)(
                "flex items-center gap-2 px-3 text-sm",
                r
              ),
              children: (0, i.jsx)(n.u, {
                label: o[t],
                sideOffset: 0,
                side: "right",
                children: (0, i.jsx)("div", {
                  className: (0, s.default)(
                    "h-2 w-2 rounded-full",
                    (t === l.kQ.CLOSING || t === l.kQ.CONNECTING) &&
                      "bg-yellow-500",
                    (t === l.kQ.CLOSED || t === l.kQ.UNINSTANTIATED) &&
                      "bg-red-500",
                    c ? "block" : "hidden"
                  ),
                }),
              }),
            })
          : null;
      }
    },
    25617: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return b;
        },
        q: function () {
          return y;
        },
      });
      var n = r(29287),
        s = r(8700),
        a = r(67217),
        l = r(13847),
        i = r(19841),
        o = r(51018),
        c = r.n(o),
        u = r(70079),
        d = r(1454),
        m = r(78343),
        p = r(78103),
        h = r(35601),
        f = r(19216),
        g = r(20963),
        x = r(35250);
      let v = c()(
          () =>
            Promise.all([r.e(1170), r.e(7178)])
              .then(r.bind(r, 17178))
              .then((e) => e.default),
          { ssr: !1, loadableGenerated: { webpack: () => [17178] } }
        ),
        b = (0, p.ZP)((e) => ({
          threadUserId: void 0,
          setThreadUserId: (t) => e({ threadUserId: t }),
        }));
      function y(e) {
        let { isOpen: t, onDebugClose: r } = e;
        return (0, x.jsx)(a.Z, {
          isOpen: t,
          onClose: r,
          type: "success",
          size: "fullscreen",
          className: "min-h-[50vh] max-w-[96vw]",
          rootClassName: "z-50",
          children: (0, x.jsx)(A, {}),
        });
      }
      let j = (e, t) => {
        let r = JSON.stringify(t, null, 2),
          n = new Blob([r], { type: "application/json" }),
          s = window.URL.createObjectURL(n),
          a = document.createElement("a");
        (a.href = s),
          (a.download = e),
          a.click(),
          window.URL.revokeObjectURL(s);
      };
      function w(e) {
        let { downloadFilename: t, downloadData: r } = e,
          { user: s } = (0, h.A)();
        return (0, x.jsxs)("div", {
          className: "flex justify-center gap-2",
          children: [
            s && (0, x.jsx)(k, { id: s.id }),
            (0, x.jsxs)(n.z, {
              color: "neutral",
              onClick: () => j(t, r),
              children: [
                (0, x.jsx)(d._hL, { className: "icon-sm" }),
                " Download ",
                t,
              ],
            }),
            (0, x.jsxs)(n.z, {
              color: "neutral",
              as: "link",
              to: "https://openai.enterprise.slack.com/archives/C06D0FATXSQ",
              openNewTab: !0,
              children: [
                (0, x.jsx)(d.nY6, { className: "icon-sm" }),
                " Give feedback",
              ],
            }),
          ],
        });
      }
      function A() {
        let e = (0, f.nn)(f.LW.threadId),
          t = (0, f.nn)(f.LW.turns),
          { threadUserId: r } = b(),
          { data: n, isLoading: s } = (0, g.Y)({
            threadId: e,
            threadUserId: r,
            refetchOnMount: "always",
          });
        if (!n || s) return (0, x.jsx)("div", { children: "Loading..." });
        let { thread: a } = n;
        return (0, x.jsxs)("div", {
          className: "flex flex-col gap-2 break-words py-6 font-mono text-xs",
          children: [
            (0, x.jsx)(w, { downloadFilename: "thread.json", downloadData: a }),
            (0, x.jsx)("div", {
              className: "px-6 pb-6",
              children: (0, x.jsx)(O, { data: a, collapsed: 3 }),
            }),
            t.map((e, t) => {
              var r;
              return (0, x.jsxs)(
                "div",
                {
                  className: (0, i.default)(
                    "flex flex-col gap-1 p-6",
                    e.index % 2 == 0 && "bg-token-main-surface-tertiary"
                  ),
                  children: [
                    (0, x.jsxs)("div", {
                      children: [
                        (0, x.jsx)("span", {
                          className: "font-semibold",
                          children: "[user]",
                        }),
                        " ",
                        e.user_query,
                      ],
                    }),
                    (0, x.jsxs)("div", {
                      children: [
                        (0, x.jsx)("span", {
                          className: "font-semibold",
                          children: "[model]",
                        }),
                        " ",
                        null === (r = e.model_response) || void 0 === r
                          ? void 0
                          : r.text,
                      ],
                    }),
                    (0, x.jsx)("div", {
                      className: "mt-2",
                      children: (0, x.jsx)(O, { data: e }),
                    }),
                  ],
                },
                t
              );
            }),
          ],
        });
      }
      function O(e) {
        let { data: t, collapsed: r } = e,
          { 0: n, 1: s } = (0, u.useState)(null == r || r);
        return (0, x.jsxs)("div", {
          className: "flex flex-col items-start gap-1",
          children: [
            (0, x.jsx)("button", {
              onClick: () => s(!n),
              className: "flex items-center gap-1",
              children: n
                ? (0, x.jsxs)(x.Fragment, {
                    children: [(0, x.jsx)(m.rIY, { size: 14 }), " Expand all"],
                  })
                : (0, x.jsxs)(x.Fragment, {
                    children: [
                      (0, x.jsx)(m.NsE, { size: 14 }),
                      " Collapse all",
                    ],
                  }),
            }),
            (0, x.jsx)(
              v,
              {
                json: t,
                jsonViewProps: { collapsed: n, shortenTextAfterLength: 0 },
              },
              String(n)
            ),
          ],
        });
      }
      function k(e) {
        let { id: t } = e,
          r = (0, u.useCallback)(() => {
            (0, l.v)(t);
          }, [t]);
        return (0, x.jsxs)("p", {
          className: "flex items-center gap-2",
          children: [
            (0, x.jsx)("span", {
              className: "font-semibold",
              children: "User ID:",
            }),
            (0, x.jsx)("span", {
              className: "text-gray-500 dark:text-white",
              children: t,
            }),
            (0, x.jsx)(s.Z, { onCopy: r }),
          ],
        });
      }
    },
    45062: function (e, t, r) {
      "use strict";
      r.d(t, {
        X: function () {
          return p;
        },
      });
      var n = r(18450),
        s = r(67739),
        a = r(77799),
        l = r(8143),
        i = r(19841),
        o = r(70079),
        c = r(35250);
      let u = [
        "value",
        "onSubmit",
        "keyEventFilter",
        "className",
        "buttonIcon",
        "onFocus",
        "onBlur",
        "onKeyDown",
        "overflowDirection",
        "overflowFloat",
        "disabled",
        "searchIcon",
      ];
      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : d(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let p = (0, o.forwardRef)(function (e, t) {
        let {
            value: r,
            onSubmit: n,
            keyEventFilter: d,
            className: p,
            buttonIcon: h,
            onFocus: f,
            onBlur: g,
            onKeyDown: x,
            overflowDirection: v,
            overflowFloat: b,
            disabled: y,
            searchIcon: j,
          } = e,
          w = (0, s.Z)(e, u),
          A = (0, o.useRef)(null),
          O = null != t ? t : A,
          [k] = (0, l.f)(null != t ? t : A),
          _ = (0, o.useCallback)(
            (e) => {
              null == x || x(e),
                "Enter" === e.key && n && (e.preventDefault(), n(r));
            },
            [x, n, r]
          );
        (0, o.useEffect)(() => {
          if (null != d)
            return (0, a.eR)(document, {
              keydown: (e) => {
                null != d &&
                  d(e) &&
                  (e.preventDefault(),
                  null == k || k.focus(),
                  null == k || k.select());
              },
            });
        }, [d, k]);
        let { 0: N, 1: S } = (0, o.useState)(!1),
          { 0: P, 1: E } = (0, o.useState)(0),
          { 0: C, 1: D } = (0, o.useState)(0),
          R = (0, o.useCallback)(() => {
            if (!k) return;
            let e = k.style.height,
              t = k.value,
              r = k.selectionStart,
              n = k.selectionEnd;
            (k.style.height = "0px"),
              (k.value = ""),
              D(k.scrollHeight),
              (k.value = t),
              (k.selectionStart = r),
              (k.selectionEnd = n),
              E(k.scrollHeight),
              (k.style.height = e);
          }, [k]);
        (0, o.useEffect)(() => (0, a.eR)(window, { resize: R }), [R]),
          (0, o.useEffect)(() => {
            R();
          }, [k, r, R]);
        let M = r.trim().length > 0;
        return (0, c.jsx)("div", {
          className: (0, i.default)("relative", b && "h-12"),
          children: (0, c.jsxs)("div", {
            className: (0, i.default)(
              "left-0 right-0 flex h-fit min-h-[3rem] w-full gap-3 overflow-hidden rounded-[1.5rem] bg-token-main-surface-tertiary px-3",
              b ? "absolute" : "inherit",
              "up" === v
                ? "bottom-0 items-end"
                : v
                  ? "top-0 items-start"
                  : "bottom-0 top-0 items-center",
              p
            ),
            onClick: () => {
              null == k || k.focus(), S(!0), null == f || f();
            },
            children: [
              (0, c.jsx)("div", {
                className: (0, i.default)(
                  "flex-grow overflow-x-hidden",
                  "py-[0.66rem]"
                ),
                children: (0, c.jsx)(
                  "textarea",
                  m(
                    m({ type: "text", name: "query", id: "query" }, w),
                    {},
                    {
                      className: (0, i.default)(
                        "transition-height ellipsis m-0 w-full min-w-32 flex-shrink-0 flex-grow resize-none overflow-hidden overflow-y-auto border-0 bg-transparent p-0 placeholder-gray-500 outline-none focus:ring-0",
                        (!N || P < 480) && "hide-scrollbar",
                        "up" === v ? "-mb-1" : "-mb-2 snc-2xl:mb-[-0.4375rem]",
                        j ? "pl-11" : "pl-2"
                      ),
                      onKeyDown: _,
                      value: r,
                      autoComplete: "off",
                      onFocus: () => {
                        S(!0), null == f || f();
                      },
                      onBlur: () => {
                        k && (k.scrollTop = 0), S(!1), null == g || g();
                      },
                      ref: O,
                      disabled: y,
                      style: {
                        height:
                          N && null != v
                            ? "clamp("
                                .concat(C, "px, ")
                                .concat(P, "px, ")
                                .concat(480, "px)")
                            : "".concat(C, "px"),
                      },
                    }
                  )
                ),
              }),
              (0, c.jsx)("div", {
                className: "flex h-12 flex-shrink-0 items-center",
                children:
                  M || null != n
                    ? (0, c.jsx)("div", {
                        className: "flex items-center",
                        children: (0, c.jsx)("button", {
                          disabled: y,
                          onClick: () => (null == n ? void 0 : n(r)),
                          className: (0, i.default)(
                            "flex h-7 w-7 items-center justify-center rounded-full",
                            M && !y
                              ? "bg-token-text-primary text-token-main-surface-primary hover:opacity-80"
                              : "bg-gray-300 text-token-main-surface-tertiary hover:bg-token-border-light hover:text-token-text-secondary disabled:hover:bg-token-main-surface-tertiary disabled:hover:text-token-text-tertiary dark:bg-gray-700"
                          ),
                          children: h,
                        }),
                      })
                    : null,
              }),
              j &&
                (0, c.jsx)("div", {
                  className: (0, i.default)(
                    "absolute left-5 flex h-12 items-center justify-center",
                    "up" === v ? "bottom-0" : "top-0"
                  ),
                  children: j,
                }),
            ],
          }),
        });
      });
    },
    82074: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return g;
          },
        });
      var n = r(29287),
        s = r(21643),
        a = r(26169),
        l = r.n(a),
        i = r(91530),
        o = r.n(i),
        c = r(70079),
        u = r(70451),
        d = r(20735),
        m = r(19216),
        p = r(72150),
        h = r(45456),
        f = r(35250);
      function g() {
        (0, h.e)();
        let [e, t] = (0, p.Z)("MACHINE_OUTPUT_PATH", "", l()),
          { 0: r, 1: a } = (0, c.useState)({}),
          i = async () => {
            let t = await fetch(
                "http://localhost:9000/scandir?path=".concat(e)
              ),
              r = await t.json();
            console.log("fetched machine outputs", r), a(r);
          },
          [g, x] = (0, p.Z)("MACHINE_OUTPUT_FILE_PATH", "", l()),
          { 0: v, 1: b } = (0, c.useState)([]),
          y = async () => {
            let e = await fetch("http://localhost:9000/read?path=".concat(g)),
              t = await e.text();
            console.log("fetched machine output file content", t);
            let r = t.split("\n"),
              n = [];
            for (let e of r) e && n.push(JSON.parse(e));
            console.log("fetched machine output file content", n), b(n);
          },
          { 0: j, 1: w } = (0, c.useState)(0);
        (0, c.useEffect)(() => {
          let e = v[j];
          if (!e) return;
          let t = e.api_thread,
            r = e.turns.map((e) => e.api_turn);
          m.P3.setThread(t.id, r);
        }, [v, j]);
        let A = (0, m.nn)(m.LW.turns),
          O = A.length > 0 ? A[0].user_query : "";
        return (0, f.jsxs)("div", {
          className: "flex h-screen w-screen flex-row",
          children: [
            (0, f.jsxs)("div", {
              className: "flex w-[400px] flex-col gap-2 border-r-[1px] p-2",
              children: [
                (0, f.jsx)(s.Z, {
                  name: "machineOutputPath",
                  value: e,
                  placeholder: "Machine output path",
                  onChange: (e) => t(e.target.value),
                  className: "hidden",
                }),
                (0, f.jsx)(n.z, {
                  onClick: i,
                  className: "hidden",
                  children: "Refresh machine outputs",
                }),
                (0, f.jsx)(s.Z, {
                  name: "machineOutputFilePath",
                  value: g,
                  placeholder: "Machine output file path",
                  onChange: (e) => x(e.target.value),
                }),
                (0, f.jsx)(n.z, {
                  onClick: y,
                  children: "Refresh machine output file",
                }),
                (0, f.jsxs)("div", {
                  className: "flex flex-row items-baseline gap-2",
                  children: [
                    (0, f.jsx)(s.Z, {
                      name: "index",
                      value: j.toString(),
                      placeholder: "Index",
                      type: "number",
                      onChange: (e) => w(parseInt(e.target.value)),
                    }),
                    (0, f.jsxs)("div", { children: ["of ", v.length] }),
                  ],
                }),
              ],
            }),
            (0, f.jsx)(u.e, {
              readyState: 1,
              hasSubmittedInitialQuery: !0,
              searchQuery: O,
              followupQuery: "",
              onUpdateSearchQuery: o(),
              onUpdateFollowupQuery: o(),
              onSubmitFollowup: o(),
              onSubmitSearch: o(),
              settings: d.Z,
              onUpdateSetting: o(),
              onReset: o(),
              onRetryQuery: o(),
            }),
          ],
        });
      }
    },
    75138: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return c;
        },
        l: function () {
          return o;
        },
      });
      var n = r(42607),
        s = r(19841),
        a = r(83737),
        l = r(70079),
        i = r(35250);
      function o(e) {
        let {
            lines: t = 1,
            variance: r = 0,
            size: o = "base",
            width: c = 50,
            widthVariance: u = 50,
            className: d,
          } = e,
          { 0: m } = (0, l.useState)(
            Array.from(
              { length: t + Math.random() * (null != r ? r : 0) },
              () => c + Math.random() * u
            )
          ),
          p = "";
        switch (o) {
          case "sm":
            p = "h-3 mb-2 mt-0.5";
            break;
          case "base":
            p = "h-[18px] my-2";
            break;
          case "lg":
            p = "h-5 my-2";
            break;
          default:
            (0, n.Z)(o);
        }
        return (0, i.jsx)(i.Fragment, {
          children: m.map((e, t) =>
            (0, i.jsx)(
              "div",
              {
                className: (0, s.default)(
                  "relative w-full overflow-hidden rounded-md bg-token-sidebar-surface-secondary",
                  p,
                  d
                ),
                style: { width: "".concat(e, "%") },
                children: (0, i.jsx)(a.E.div, {
                  className:
                    "absolute left-0 top-0 h-full w-full rotate-45 bg-gradient-to-r from-transparent via-black/20 to-transparent opacity-50 dark:via-white/5",
                  animate: {
                    x: ["-100%", "100%"],
                    opacity: [1, 0, 1],
                    transition: {
                      repeat: 1 / 0,
                      repeatType: "loop",
                      duration: 1.5 + t,
                    },
                  },
                }),
              },
              t
            )
          ),
        });
      }
      function c(e) {
        let {
            lines: t = 1,
            variance: r = 0,
            width: n = 50,
            widthVariance: s = 50,
            className: o,
          } = e,
          c = l.useMemo(
            () =>
              Array.from(
                { length: t + Math.random() * (null != r ? r : 0) },
                () => n + Math.random() * s
              ),
            [t, r, n, s]
          );
        return (0, i.jsx)("div", {
          className: "mt-2 flex flex-col items-start gap-2 ".concat(o),
          children: c.map((e, t) =>
            (0, i.jsx)(
              a.E.div,
              {
                className: "h-[18px] rounded-md bg-token-border-light",
                style: { width: "".concat(e, "%") },
                initial: { opacity: 1 },
                animate: { opacity: [1, 0.4] },
                transition: {
                  repeat: 1 / 0,
                  repeatType: "reverse",
                  duration: 0.85,
                  ease: "easeInOut",
                  delay: 0.07 * t,
                },
              },
              t
            )
          ),
        });
      }
    },
    35601: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return l;
        },
        c: function () {
          return a;
        },
      });
      var n = r(70079),
        s = r(20735);
      let a = (0, n.createContext)({
          searchQuery: "",
          user: null,
          userHash: null,
          settings: s.Z,
          userMetadata: {
            cf_connecting_ip: null,
            ip_city: null,
            time_zone: null,
            user_country: null,
            user_locale: null,
            user_region: null,
            user_region_code: null,
            latitude: null,
            longitude: null,
            locationAccuracy: null,
          },
        }),
        l = () => (0, n.useContext)(a);
    },
    20735: function (e, t, r) {
      "use strict";
      r.d(t, {
        Wt: function () {
          return A;
        },
        Z: function () {
          return w;
        },
        Zr: function () {
          return _;
        },
      });
      var n,
        s = r(99945),
        a = r(18450),
        l = r(67739),
        i = r(29287),
        o = r(21643),
        c = r(282),
        u = r(88342),
        d = r(67217),
        m = r(64276),
        p = r(19841),
        h = r(85252),
        f = r(21389),
        g = r(20724),
        x = r(90240),
        v = r(35250);
      let b = ["children"];
      function y(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(r), !0).forEach(function (t) {
                (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : y(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let w = {
        useLocation: !1,
        suggestions: !0,
        agentSettingsOverrides: {
          model_family: g.tQ.GPT_3_5,
          rerank_labrador: "none",
          rerank_bing_boost: 0,
          rerank_quality_threshold: 4.5,
          search_engine: g.lv.Bing,
          robots_mode: g.K1.Aggressive,
          show_image_to_model: !0,
        },
      };
      function A(e) {
        return !!(
          "object" == typeof e &&
          "boolean" == typeof e.useLocation &&
          "boolean" == typeof e.suggestions &&
          (0, g.mX)(e.agentSettingsOverrides)
        );
      }
      function O(e) {
        if ("" !== e) return parseFloat(e);
      }
      function k(e) {
        let { children: t } = e,
          r = (0, l.Z)(e, b);
        return (0, v.jsx)(
          u.Z.Content,
          j(
            j({}, r),
            {},
            { className: (0, p.default)("z-50", r.className), children: t }
          )
        );
      }
      function _(e) {
        var t, r, n, s, a, l, p, f, b, y, A, _, S, P;
        let { onClose: E, settings: C, onUpdateSetting: D } = e,
          { theme: R, setTheme: M } = (0, h.F)();
        return (0, v.jsx)(d.Z, {
          isOpen: !0,
          onClose: E,
          type: "success",
          rootClassName: "z-40",
          children: (0, v.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [
              (0, v.jsxs)(N, {
                children: [
                  (0, v.jsx)(m._, {
                    htmlFor: "theme",
                    className: "text-sm",
                    children: "Theme",
                  }),
                  (0, v.jsxs)(u.Z.Root, {
                    value: R,
                    onValueChange: (e) => {
                      e !== R && M(e);
                    },
                    children: [
                      (0, v.jsxs)(u.Z.Trigger, {
                        id: "theme",
                        children: [
                          (0, v.jsx)(u.Z.Value, {}),
                          (0, v.jsx)(u.Z.Icon, {}),
                        ],
                      }),
                      (0, v.jsx)(u.Z.Portal, {
                        children: (0, v.jsxs)(k, {
                          children: [
                            (0, v.jsx)(u.Z.Item, {
                              value: "light",
                              children: "Light",
                            }),
                            (0, v.jsx)(u.Z.Item, {
                              value: "dark",
                              children: "Dark",
                            }),
                            (0, v.jsx)(u.Z.Item, {
                              value: "system",
                              children: "System",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, v.jsxs)(N, {
                children: [
                  (0, v.jsx)(m._, {
                    htmlFor: "location",
                    className: "text-sm",
                    children: "Use location from browser",
                  }),
                  (0, v.jsx)(c.Z, {
                    onChange: (e) => {
                      (0, x.XB)(e), D(j(j({}, C), {}, { useLocation: e }));
                    },
                    enabled: C.useLocation,
                    label: "Use location from browser",
                  }),
                ],
              }),
              (0, v.jsxs)(N, {
                children: [
                  (0, v.jsx)(m._, {
                    htmlFor: "suggestions",
                    className: "text-sm",
                    children: "Enable suggestions",
                  }),
                  (0, v.jsx)(c.Z, {
                    onChange: (e) => D(j(j({}, C), {}, { suggestions: e })),
                    enabled: C.suggestions,
                    label: "Enable suggestions",
                  }),
                ],
              }),
              (0, v.jsxs)(N, {
                children: [
                  (0, v.jsx)(m._, {
                    htmlFor: "ranker_model",
                    className: "text-sm",
                    children: "Model family",
                  }),
                  (0, v.jsxs)(u.Z.Root, {
                    value:
                      null !==
                        (t =
                          null === (r = C.agentSettingsOverrides) ||
                          void 0 === r
                            ? void 0
                            : r.model_family) && void 0 !== t
                        ? t
                        : w.agentSettingsOverrides.model_family,
                    onValueChange: (e) => {
                      D(
                        j(
                          j({}, C),
                          {},
                          {
                            agentSettingsOverrides: j(
                              j({}, C.agentSettingsOverrides),
                              {},
                              { model_family: e }
                            ),
                          }
                        )
                      );
                    },
                    children: [
                      (0, v.jsxs)(u.Z.Trigger, {
                        id: "model_family",
                        children: [
                          (0, v.jsx)(u.Z.Value, {}),
                          (0, v.jsx)(u.Z.Icon, {}),
                        ],
                      }),
                      (0, v.jsx)(u.Z.Portal, {
                        children: (0, v.jsxs)(k, {
                          children: [
                            (0, v.jsx)(u.Z.Item, {
                              value: g.tQ.GPT_3_5,
                              children: "GPT3.5 (Sahara-V; POR)",
                            }),
                            (0, v.jsx)(u.Z.Item, {
                              value: g.tQ.GPT_4,
                              children: "GPT4",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, v.jsxs)(N, {
                children: [
                  (0, v.jsx)(m._, {
                    htmlFor: "search_engine",
                    className: "text-sm",
                    children: "Search engine",
                  }),
                  (0, v.jsxs)(u.Z.Root, {
                    value:
                      null !==
                        (n =
                          null === (s = C.agentSettingsOverrides) ||
                          void 0 === s
                            ? void 0
                            : s.search_engine) && void 0 !== n
                        ? n
                        : w.agentSettingsOverrides.search_engine,
                    onValueChange: (e) => {
                      D(
                        j(
                          j({}, C),
                          {},
                          {
                            agentSettingsOverrides: j(
                              j({}, C.agentSettingsOverrides),
                              {},
                              { search_engine: e }
                            ),
                          }
                        )
                      );
                    },
                    children: [
                      (0, v.jsxs)(u.Z.Trigger, {
                        id: "search_engine",
                        children: [
                          (0, v.jsx)(u.Z.Value, {}),
                          (0, v.jsx)(u.Z.Icon, {}),
                        ],
                      }),
                      (0, v.jsx)(u.Z.Portal, {
                        children: (0, v.jsxs)(k, {
                          children: [
                            (0, v.jsx)(u.Z.Item, {
                              value: g.lv.Bing,
                              children: "Bing (POR)",
                            }),
                            (0, v.jsx)(u.Z.Item, {
                              value: g.lv.Sydney,
                              children: "Sydney",
                            }),
                            (0, v.jsx)(u.Z.Item, {
                              value: g.lv.Fortis,
                              children: "Fortis",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, v.jsxs)(N, {
                children: [
                  (0, v.jsx)(m._, {
                    htmlFor: "show_image_to_model",
                    className: "text-sm",
                    children: "Image search",
                  }),
                  (0, v.jsx)(c.Z, {
                    onChange: (e) =>
                      D(
                        j(
                          j({}, C),
                          {},
                          {
                            agentSettingsOverrides: j(
                              j({}, C.agentSettingsOverrides),
                              {},
                              { show_image_to_model: e }
                            ),
                          }
                        )
                      ),
                    enabled:
                      null !==
                        (a =
                          null === (l = C.agentSettingsOverrides) ||
                          void 0 === l
                            ? void 0
                            : l.show_image_to_model) && void 0 !== a
                        ? a
                        : w.agentSettingsOverrides.show_image_to_model,
                    label: "Image search",
                  }),
                ],
              }),
              (0, v.jsxs)(N, {
                children: [
                  (0, v.jsx)(m._, {
                    htmlFor: "robots_mode",
                    className: "text-sm",
                    children: "Robots mode",
                  }),
                  (0, v.jsxs)(u.Z.Root, {
                    value:
                      null !==
                        (p =
                          null === (f = C.agentSettingsOverrides) ||
                          void 0 === f
                            ? void 0
                            : f.robots_mode) && void 0 !== p
                        ? p
                        : w.agentSettingsOverrides.robots_mode,
                    onValueChange: (e) => {
                      D(
                        j(
                          j({}, C),
                          {},
                          {
                            agentSettingsOverrides: j(
                              j({}, C.agentSettingsOverrides),
                              {},
                              { robots_mode: e }
                            ),
                          }
                        )
                      );
                    },
                    children: [
                      (0, v.jsxs)(u.Z.Trigger, {
                        id: "robots_mode",
                        children: [
                          (0, v.jsx)(u.Z.Value, {}),
                          (0, v.jsx)(u.Z.Icon, {}),
                        ],
                      }),
                      (0, v.jsx)(u.Z.Portal, {
                        children: (0, v.jsxs)(k, {
                          children: [
                            (0, v.jsx)(u.Z.Item, {
                              value: g.K1.Conservative,
                              children: "Conservative",
                            }),
                            (0, v.jsx)(u.Z.Item, {
                              value: g.K1.Aggressive,
                              children: "Aggressive (POR)",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, v.jsxs)(N, {
                children: [
                  (0, v.jsx)(m._, {
                    htmlFor: "ranker_model",
                    className: "text-sm",
                    children: "Ranker model",
                  }),
                  (0, v.jsxs)(u.Z.Root, {
                    value:
                      null !==
                        (b =
                          null === (y = C.agentSettingsOverrides) ||
                          void 0 === y
                            ? void 0
                            : y.rerank_labrador) && void 0 !== b
                        ? b
                        : "none",
                    onValueChange: (e) => {
                      D(
                        j(
                          j({}, C),
                          {},
                          {
                            agentSettingsOverrides: j(
                              j({}, C.agentSettingsOverrides),
                              {},
                              { rerank_labrador: e }
                            ),
                          }
                        )
                      );
                    },
                    children: [
                      (0, v.jsxs)(u.Z.Trigger, {
                        id: "ranker_model",
                        children: [
                          (0, v.jsx)(u.Z.Value, {}),
                          (0, v.jsx)(u.Z.Icon, {}),
                        ],
                      }),
                      (0, v.jsx)(u.Z.Portal, {
                        children: (0, v.jsxs)(k, {
                          children: [
                            (0, v.jsx)(u.Z.Item, {
                              value: "none",
                              children: "Disabled (POR)",
                            }),
                            (0, v.jsx)(u.Z.Item, {
                              value: "maraschino-rr-d32-latest",
                              children: "d32ult (latest)",
                            }),
                            (0, v.jsx)(u.Z.Item, {
                              value: "maraschino-rr-d32-rc",
                              children: "d32ult (release candidate)",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, v.jsxs)(N, {
                className: "".concat(
                  "none" === C.agentSettingsOverrides.rerank_labrador
                    ? "text-gray-400"
                    : ""
                ),
                children: [
                  (0, v.jsx)(m._, {
                    htmlFor: "rerank_bing_boost",
                    className: "text-sm",
                    children: "Ranker Bing boost",
                  }),
                  (0, v.jsx)(o.Z, {
                    name: "rerank_bing_boost",
                    className: "w-16",
                    disabled:
                      "none" === C.agentSettingsOverrides.rerank_labrador,
                    value:
                      null !==
                        (A =
                          null ===
                            (_ = C.agentSettingsOverrides.rerank_bing_boost) ||
                          void 0 === _
                            ? void 0
                            : _.toString()) && void 0 !== A
                        ? A
                        : "",
                    onChange: (e) =>
                      D(
                        j(
                          j({}, C),
                          {},
                          {
                            agentSettingsOverrides: j(
                              j({}, C.agentSettingsOverrides),
                              {},
                              { rerank_bing_boost: O(e.target.value) }
                            ),
                          }
                        )
                      ),
                    placeholder: "0.0",
                    type: "number",
                  }),
                ],
              }),
              (0, v.jsxs)(N, {
                className: "".concat(
                  "none" === C.agentSettingsOverrides.rerank_labrador
                    ? "text-gray-400"
                    : ""
                ),
                children: [
                  (0, v.jsx)(m._, {
                    htmlFor: "rerank_quality_threshold",
                    className: "text-sm",
                    children: "Minimum ranker model score",
                  }),
                  (0, v.jsx)(o.Z, {
                    name: "rerank_quality_threshold",
                    className: "w-16",
                    disabled:
                      "none" === C.agentSettingsOverrides.rerank_labrador,
                    value:
                      null !==
                        (S =
                          null ===
                            (P =
                              C.agentSettingsOverrides
                                .rerank_quality_threshold) || void 0 === P
                            ? void 0
                            : P.toString()) && void 0 !== S
                        ? S
                        : "",
                    onChange: (e) =>
                      D(
                        j(
                          j({}, C),
                          {},
                          {
                            agentSettingsOverrides: j(
                              j({}, C.agentSettingsOverrides),
                              {},
                              { rerank_quality_threshold: O(e.target.value) }
                            ),
                          }
                        )
                      ),
                    placeholder: "0.0",
                    type: "number",
                  }),
                ],
              }),
              (0, v.jsx)(i.z, {
                onClick: () => D(w),
                type: "reset",
                color: "neutral",
                children: "Reset",
              }),
            ],
          }),
        });
      }
      let N = f.Z.div(
        n ||
          (n = (0, s.Z)([
            "flex justify-between items-center gap-2 min-h-[36px]",
          ]))
      );
    },
    78276: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return W;
          },
        });
      var n = r(18450),
        s = r(95407),
        a = r(43041),
        l = r(66315),
        i = r(83537),
        o = r(60309),
        c = r(68039),
        u = r.n(c),
        d = r(47247),
        m = r.n(d),
        p = r(41409),
        h = r(70079),
        f = r(15118),
        g = r(25617),
        x = r(77799),
        v = r(70451),
        b = r(35601),
        y = r(73606),
        j = r(19841),
        w = r(83737),
        A = r(75388),
        O = r(86263),
        k = r(1454),
        _ = r(45062),
        N = r(61236),
        S = r(49593),
        P = r(35250);
      function E(e) {
        var t;
        let {
            currentQuery: r,
            onUpdateCurrentQuery: n,
            onTypeaheadOpenChange: s,
            onSubmit: a,
          } = e,
          i = (0, h.useRef)(null),
          o = (0, h.useRef)(""),
          { 0: c, 1: u } = (0, h.useState)(!1);
        (0, h.useEffect)(() => {
          l.U.addTiming("sonic.web.home.consolePrimarySearchInput.mounted");
        }, []);
        let { 0: d, 1: m } = (0, h.useState)(null),
          p = (function (e) {
            let { query: t, enabled: r = !0 } = e,
              n = (0, h.useRef)([]),
              s = (0, h.useRef)(0),
              a = (0, h.useRef)(null),
              l = (0, h.useRef)(null),
              { settings: i, userMetadata: o } = (0, b.A)(),
              c = !i.suggestions || !r || !t || a.current === t,
              { data: u = [], isFetched: d } = (0, N.a)({
                queryKey: ["typeahead", t],
                queryFn: S.mO,
                enabled: !c,
                networkMode: "offlineFirst",
              });
            return (
              !c &&
                d &&
                (n.current[0] && n.current[0] === u[0]
                  ? s.current++
                  : (s.current = 1),
                s.current >= 3 &&
                  l.current !== u[0] &&
                  ((l.current = u[0]), (0, S.LC)({ query: u[0], metadata: o })),
                (a.current = t),
                (n.current = u)),
              r ? u : n.current
            );
          })({ query: o.current }),
          f = (0, h.useMemo)(() => p.slice(), [p]);
        (0, h.useEffect)(() => {
          0 === f.length && m(null), u(f.length > 0);
        }, [f]),
          (0, h.useEffect)(() => {
            null == s || s(c);
          }, [c, s]);
        let g = (e) => {
            n(e), a(e);
          },
          x = (e) => {
            let { value: t, delta: r, shouldUpdateQuery: s = !0 } = e;
            if (void 0 === t && void 0 === r)
              throw Error("changeSelectedIndex requires either value or delta");
            let a = null;
            void 0 !== r
              ? null === d
                ? (a = -1 === r ? f.length - 1 : 0)
                : ((a = d + r) < 0 || a >= f.length) && (a = null)
              : void 0 !== t && (a = t),
              m(a),
              s && (null === a ? n(o.current) : n(f[a]));
          };
        return (0, P.jsxs)("div", {
          className: "relative",
          children: [
            (0, P.jsx)(_.X, {
              value: r,
              onChange: (e) => {
                n(e.target.value), (o.current = e.target.value);
              },
              onSubmit: a,
              placeholder: "Search...",
              buttonIcon: (0, P.jsx)(O.WmV, {
                className: "rotate-90 text-token-main-surface-tertiary",
              }),
              ref: i,
              overflowDirection: "down",
              overflowFloat: !0,
              onKeyDown: (e) => {
                c &&
                  ("ArrowUp" === e.key
                    ? (e.preventDefault(), x({ delta: -1 }))
                    : "ArrowDown" === e.key
                      ? (e.preventDefault(), x({ delta: 1 }))
                      : "Escape" === e.key && u(!1));
              },
              autoFocus: !0,
              spellCheck: !1,
              searchIcon: (0, P.jsx)(k.jRj, {
                className: (0, j.default)(
                  "h-5 w-5",
                  (null === (t = o.current) || void 0 === t
                    ? void 0
                    : t.trim().length) > 0
                    ? "text-token-text-primary"
                    : "text-token-text-tertiary"
                ),
              }),
            }),
            c &&
              (0, P.jsx)("div", {
                className: "absolute left-0 right-0 top-full mt-[14px]",
                onMouseLeave: () => x({ value: null, shouldUpdateQuery: !1 }),
                children: f.map((e, t) =>
                  (0, P.jsx)(
                    C,
                    {
                      typeahead: e,
                      typedQuery: o.current,
                      onHover: () => x({ value: t, shouldUpdateQuery: !1 }),
                      onSubmit: g,
                      isSelected: t === d,
                    },
                    t
                  )
                ),
              }),
          ],
        });
      }
      function C(e) {
        let {
            typeahead: t,
            typedQuery: r,
            onHover: n,
            onSubmit: s,
            isSelected: a,
          } = e,
          l = t.startsWith(r),
          i = l ? r : t,
          o = l ? t.slice(r.length) : "";
        return (0, P.jsx)(w.E.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "w-full",
          children: (0, P.jsxs)(
            "button",
            {
              className: (0, j.default)(
                "flex w-full items-center gap-3.5 rounded-lg px-5 py-3.5 transition-colors",
                a ? "text-token-text-primary" : "text-token-text-tertiary"
              ),
              onClick: (e) => {
                e.stopPropagation(), s(t);
              },
              onMouseEnter: () => n(t),
              children: [
                (0, P.jsx)("div", {
                  className: "flex h-5 w-5 items-center justify-center",
                  children: (0, P.jsx)(O.w9k, {}),
                }),
                (0, P.jsxs)("div", {
                  className: "flex-grow text-left",
                  children: [
                    (0, P.jsx)("span", { children: i }),
                    (0, P.jsx)("span", {
                      className: "font-semibold",
                      children: o,
                    }),
                  ],
                }),
              ],
            },
            t
          ),
        });
      }
      var D = r(5224);
      function R(e) {
        let {
            readyState: t,
            currentQuery: r,
            onSubmit: n,
            onUpdateCurrentQuery: s,
          } = e,
          { 0: a, 1: l } = (0, h.useState)(!1);
        return (0, P.jsxs)("div", {
          className:
            "relative flex h-full w-full flex-col justify-between overflow-hidden bg-token-main-surface-primary p-[--snc-3]",
          children: [
            (0, P.jsx)(w.E.div, {
              className: (0, j.default)(
                "pointer-events-none absolute left-0 right-0 top-[calc(50%-120px)] flex flex-col items-center justify-center text-2xl font-medium transition-colors duration-500"
              ),
              animate: { opacity: a ? 0 : 1 },
              transition: { duration: D.Lc },
              children: (0, P.jsx)(y.nI, { className: "h-11 w-11" }),
            }),
            (0, P.jsx)("div", {
              className: "m-auto w-full max-w-[640px] flex-shrink-0 pb-9",
              children: (0, P.jsxs)("div", {
                className: "relative",
                children: [
                  (0, P.jsx)(E, {
                    currentQuery: r,
                    onUpdateCurrentQuery: s,
                    onSubmit: (e) => {
                      0 !== e.trim().length && (n(e), l(!0));
                    },
                  }),
                  (0, P.jsx)(A._, {
                    className: "absolute -right-8 top-[50%] -translate-y-1/2",
                    readyState: t,
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function M(e) {
        let {
            readyState: t,
            initialQuery: r,
            hasSubmittedInitialQuery: n,
            onSubmitSearch: s,
            onSubmitFollowup: a,
            onRetryQuery: l,
            onReset: i,
            onUpdateSetting: o,
          } = e,
          { settings: c } = (0, b.A)(),
          { 0: u, 1: d } = (0, h.useState)(null != r ? r : ""),
          { 0: m, 1: p } = (0, h.useState)(""),
          f = (0, h.useRef)(null),
          g = (0, h.useRef)(null != r ? r : "");
        (0, h.useEffect)(() => {
          r !== g.current && ((g.current = r), d(null != r ? r : ""), p(""));
        }, [r]);
        let y = (e) => {
            d(e);
          },
          j = () => {
            s(u), p("");
          },
          { 0: w, 1: A } = (0, h.useState)(!n);
        return (
          (0, h.useEffect)(() => {
            w && n
              ? setTimeout(() => {
                  A(!1);
                }, 1e3 * D.Lc)
              : n || A(!0);
          }, [n, r, w]),
          (0, h.useEffect)(
            () =>
              (0, x.eR)(document, {
                keydown: (e) => {
                  "k" === e.key &&
                    e.metaKey &&
                    e.shiftKey &&
                    (e.preventDefault(), d(""), p(""), i());
                },
              }),
            [i]
          ),
          w
            ? (0, P.jsx)(R, {
                readyState: t,
                currentQuery: u,
                onSubmit: j,
                onUpdateCurrentQuery: y,
              })
            : (0, P.jsx)(v.e, {
                readyState: t,
                hasSubmittedInitialQuery: n,
                searchQuery: u,
                followupQuery: m,
                onUpdateSearchQuery: y,
                onUpdateFollowupQuery: (e) => {
                  p(e);
                },
                onRetryQuery: l,
                onSubmitSearch: j,
                onSubmitFollowup: (e) => {
                  a(null != e ? e : m), p("");
                },
                followupInputRef: f,
                settings: c,
                onUpdateSetting: o,
                onReset: (e) => {
                  d(null != e ? e : ""), p(""), i(e);
                },
              })
        );
      }
      var T = r(20735),
        Z = r(83216),
        L = r(68399),
        I = r(19216),
        F = r(68952),
        U = r(4466);
      function z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : z(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      var V = r(34796),
        Q = r(45456),
        B = r(90240),
        G = r(78375);
      function H(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : H(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function W(e) {
        let { user: t, initialQuery: r, socketUrl: n, userMetadata: c } = e,
          d = (0, h.useRef)(r ? { query: r } : null),
          x = (0, h.useRef)(r ? "url_query" : "search_input"),
          v = (0, L.W6)(L.bM.isSettingsModalOpen),
          y = (0, L.W6)(L.bM.isDebugModalOpen),
          [j, w] = (0, V.r)(),
          { 0: A, 1: O } = (0, h.useState)(null),
          { 0: k, 1: _ } = (0, h.useState)(),
          { 0: N, 1: E } = (0, h.useState)(null != r),
          C = (0, I.nn)(I.LW.threadId),
          R = (0, I.nn)(I.LW.lastTurn),
          z = (0, p.useRouter)(),
          { 0: H, 1: W } = (0, h.useState)(null),
          Y = (0, i.gb)({ namespace: i.dG.SonicHome, opts: { debug: !0 } });
        (0, h.useEffect)(() => {
          l.U.addTiming("sonic.web.home.mounted");
        }, []),
          (0, Q.e)(),
          (0, h.useEffect)(() => {
            (async function () {
              t && W((await (0, o.FB)(t.id)).slice(0, 6));
            })();
          }, [t]);
        let { readyState: J, postQuery: $ } = (function (e) {
            let { threadId: t, socketUrl: r, onTurnSubmitted: n } = e,
              { 0: a, 1: i } = (0, h.useState)(!1),
              { 0: o, 1: c } = (0, h.useState)(!0),
              { 0: u, 1: d } = (0, h.useState)(!0),
              m = (0, h.useRef)(0),
              p = (0, h.useRef)(!1);
            (0, h.useEffect)(
              () => (
                (p.current = !0),
                () => {
                  p.current = !1;
                }
              ),
              []
            );
            let g = (0, h.useCallback)(async () => {
                if (m.current > 50)
                  return (
                    s.m.danger("Failed to fetch websocket url", {
                      hasCloseButton: !0,
                    }),
                    l.U.addError("Failed to fetch websocket url, giving up", {
                      attempts: m.current,
                    }),
                    ""
                  );
                try {
                  let e = await U.c.get("".concat(D.rq, "/register-websocket"));
                  return (m.current = 0), e.wss_url;
                } catch (e) {
                  throw (
                    (l.U.addError("Failed to fetch websocket url, retrying", {
                      cause: e,
                    }),
                    (m.current += 1),
                    e)
                  );
                }
              }, []),
              { readyState: x } = (0, f.ZP)(
                !a && r ? r : g,
                {
                  retryOnError: !0,
                  shouldReconnect: () => !0 === p.current && u,
                  reconnectAttempts: 50,
                  reconnectInterval: (e) =>
                    Math.min(1e3 * Math.pow(1.3, e), 5e3),
                  onMessage: (e) => {
                    !(function (e, t) {
                      if (e.thread_id !== t) return;
                      let r =
                        "append_turn" === e.delta.type ||
                        "set_turn" === e.delta.type
                          ? e.delta.turn.index
                          : e.delta.turn_index;
                      if (null === r) throw Error();
                      switch (e.delta.type) {
                        case "append_turn": {
                          let r = e.delta;
                          I.P3.appendTurn(t, r.turn);
                          break;
                        }
                        case "set_search_results": {
                          let t = e.delta;
                          I.P3.updateTurn(r, (e) => {
                            e.search_results = t.search_results;
                          });
                          break;
                        }
                        case "set_model_response": {
                          let t = e.delta;
                          I.P3.updateTurn(
                            r,
                            (e) => (e.model_response = t.model_response)
                          );
                          break;
                        }
                        case "append_model_response_text": {
                          let t = e.delta;
                          I.P3.updateTurn(r, (e) => {
                            if (!e.model_response) throw Error();
                            (e.model_response.text += t.text),
                              (e.model_response.citations = t.citations);
                          });
                          break;
                        }
                        case "set_weather_widget": {
                          let t = e.delta;
                          I.P3.updateTurn(r, (e) => {
                            e.weather_widget = t.weather_widget;
                          });
                          break;
                        }
                        case "set_calculator_widget": {
                          let t = e.delta;
                          I.P3.updateTurn(r, (e) => {
                            e.calculator_widget = t.calculator_widget;
                          });
                          break;
                        }
                        case "set_sports_widget": {
                          let t = e.delta;
                          I.P3.updateTurn(r, (e) => {
                            e.sports_widget = t.sports_widget;
                          });
                          break;
                        }
                        case "set_finance_widget": {
                          let t = e.delta;
                          I.P3.updateTurn(r, (e) => {
                            e.finance_widget = t.finance_widget;
                          });
                          break;
                        }
                        case "set_finance_widget_histories": {
                          let t = e.delta;
                          I.P3.updateTurn(r, (e) => {
                            if (null === e.finance_widget) throw Error();
                            e.finance_widget = q(
                              q({}, e.finance_widget),
                              {},
                              { histories: t.histories }
                            );
                          });
                          break;
                        }
                        case "set_timezone_widget": {
                          let t = e.delta;
                          I.P3.updateTurn(r, (e) => {
                            e.timezone_widget = t.timezone_widget;
                          });
                          break;
                        }
                        case "set_news_widget": {
                          let t = e.delta;
                          I.P3.updateTurn(r, (e) => {
                            e.news_widget = t.news_widget;
                          });
                          break;
                        }
                        case "set_turn_execution_status": {
                          let t = e.delta;
                          I.P3.updateTurn(r, (e) => {
                            (e.execution_status = t.execution_status),
                              (e.error = t.error);
                          });
                          break;
                        }
                        default:
                          l.U.addError("Unsupported delta type", {
                            delta: e.delta,
                          });
                      }
                    })(JSON.parse(e.data), t);
                  },
                  onError: (e) => {
                    l.U.addError("Websocket error", { event: e });
                  },
                  onClose: () => {
                    console.debug("[ws] Connection closed"), i(!0);
                  },
                  onReconnectStop: () => {
                    s.m.danger(
                      "Websocket connection attempts failed, pausing reconnects",
                      { hasCloseButton: !0 }
                    );
                  },
                },
                o
              ),
              v = (0, h.useCallback)(() => {
                x !== f.kQ.OPEN &&
                  (c(!1),
                  (m.current = 0),
                  setTimeout(() => {
                    c(!0);
                  }, 0));
              }, [x]);
            return (
              (0, h.useEffect)(
                () =>
                  (0, F.R)({
                    onHidden: () => {
                      console.debug("[ws] onHidden"), d(!1);
                    },
                    onVisible: () => {
                      console.debug("[ws] onVisible, set reconnect to true"),
                        d(!0),
                        v();
                    },
                  }),
                [v]
              ),
              {
                readyState: x,
                postQuery: (0, h.useCallback)(
                  async (e) => {
                    let { threadId: t } = e,
                      r = !!t;
                    return (
                      t || (t = await (0, S.gK)()),
                      (0, S.dN)({
                        threadId: t,
                        query: e.query,
                        agentSettingsOverrides: e.agentSettingsOverrides,
                        metadata: e.metadata,
                      })
                        .then(() => (null == n ? void 0 : n({ isFollowup: r })))
                        .catch((e) =>
                          l.U.addError("Failed to postThreadTurn", { cause: e })
                        ),
                      { threadId: t }
                    );
                  },
                  [n]
                ),
              }
            );
          })({
            socketUrl: n,
            threadId: C,
            onTurnSubmitted: (0, h.useCallback)(
              (e) => {
                let { isFollowup: t } = e;
                t ||
                  Y.logTiming("search_query_submitted", {
                    context: { source: en() },
                  });
              },
              [Y]
            ),
          }),
          { newQueryStarted: ee } = (function (e) {
            let { profiler: t, querySource: r } = e,
              n = (0, h.useRef)(K({}, X)),
              s = (0, I.nn)(I.LW.firstTurn);
            return (
              (0, h.useEffect)(() => {
                var e, a, l;
                if (null == s) return;
                n.current.turn ||
                  ((n.current.turn = !0),
                  t.logTiming("ttf_message", { context: { source: r } })),
                  n.current.modelResponse ||
                    u()(
                      null === (e = s.model_response) || void 0 === e
                        ? void 0
                        : e.text
                    ) ||
                    ((n.current.modelResponse = !0),
                    t.logTiming("ttf_model_response", {
                      context: { source: r },
                    })),
                  n.current.searchResults ||
                    u()(
                      null === (a = s.search_results) || void 0 === a
                        ? void 0
                        : a.entries
                    ) ||
                    ((n.current.searchResults = !0),
                    t.logTiming("ttf_search_results", {
                      context: { source: r },
                    }));
                let i = (0, G.K)(s);
                !n.current.widget &&
                  ["in_progress", "done"].includes(
                    null !== (l = null == i ? void 0 : i.status) && void 0 !== l
                      ? l
                      : ""
                  ) &&
                  ((n.current.widget = !0),
                  t.logTiming("ttf_widget", {
                    context: {
                      source: r,
                      widgetType: null == i ? void 0 : i.type,
                    },
                  }));
              }, [s, t, r]),
              {
                newQueryStarted: (0, h.useCallback)(() => {
                  n.current = K({}, X);
                }, []),
              }
            );
          })({ profiler: Y, querySource: en() }),
          et = (0, h.useMemo)(() => {
            let e = (function (e) {
              let t = a.bX.getCookie(a.cn.LastLocation);
              if (((0, B.XB)(e), t && e))
                try {
                  return JSON.parse(t);
                } catch {}
              return B.PX;
            })(j.useLocation);
            return K(K({}, c), e);
          }, [c, j.useLocation]),
          er = (0, h.useCallback)(
            async (e, t) => {
              try {
                let r = null === t ? "query" : "followup",
                  n = en();
                "query" === r && (Y.reset(), ee(), O(e), _(e));
                let s = await $({
                  threadId: t,
                  query: e,
                  agentSettingsOverrides: j.agentSettingsOverrides,
                  metadata: et,
                });
                if ("query" === r) {
                  let t = s.threadId;
                  I.P3.newThread(t),
                    Z.Y.logEvent(Z.M.searchQuerySubmitted, {
                      thread_id: t,
                      source: n,
                      user_hash: H,
                      query: e,
                    });
                } else
                  "followup" === r &&
                    Z.Y.logEvent(Z.M.searchFollowupSubmitted, {
                      thread_id: t,
                      turn_index: R.index,
                    });
              } catch (e) {
                l.U.addError(Error("Error posting user action", { cause: e })),
                  s.m.danger("Failed to submit");
              }
            },
            [R, $, Y, j.agentSettingsOverrides, ee, H, et]
          );
        function en() {
          return x.current;
        }
        let es = (e, t) => {
            let { isFollowup: r = !1 } = t;
            if (J !== f.kQ.OPEN) {
              s.m.danger("Websocket connection is not open");
              return;
            }
            er(null != e ? e : "", r ? C : null), E(!0);
          },
          ea = (e) => {
            I.P3.clearThread(), (x.current = "search_input");
            let t = new URLSearchParams(window.location.search);
            e ? t.set("q", e) : t.delete("q");
            let r = "/search";
            t.size > 0 && (r += "?".concat(t.toString())),
              z.replace(r, void 0, { shallow: !0 }),
              e ? (er(e, null), E(!0)) : E(!1);
          };
        return (
          (0, h.useEffect)(() => {
            var e;
            J === f.kQ.OPEN &&
              (null != r &&
                (null === (e = d.current) || void 0 === e
                  ? void 0
                  : e.query) !== r &&
                (I.P3.clearThread(), (d.current = { query: r })),
              null == d.current ||
                d.current.submitted ||
                ((async function () {
                  null == d.current ||
                    d.current.submitted ||
                    ((d.current.submitted = !0),
                    await er(d.current.query, null));
                })(),
                E(!0)));
          }, [J, t.id, r, er, N]),
          (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsx)(m(), {
                children: (0, P.jsx)("title", {
                  children:
                    N && k
                      ? "".concat(k, " - ChatGPT Search")
                      : "ChatGPT Search",
                }),
              }),
              (0, P.jsx)(b.c.Provider, {
                value: {
                  searchQuery: null != A ? A : "",
                  user: t,
                  userHash: H,
                  settings: j,
                  userMetadata: et,
                },
                children: (0, P.jsx)(M, {
                  initialQuery: r,
                  readyState: J,
                  hasSubmittedInitialQuery: N,
                  onSubmitFollowup: (e) => es(e, { isFollowup: !0 }),
                  onReset: ea,
                  onSubmitSearch: (e) => {
                    ea(e);
                  },
                  onRetryQuery: (e) => {
                    if (null == k) {
                      s.m.danger("No previous query to retry");
                      return;
                    }
                    e ? es(e, { isFollowup: !0 }) : ea(k);
                  },
                  onUpdateSetting: w,
                }),
              }),
              y &&
                (0, P.jsx)(g.q, {
                  isOpen: !0,
                  onDebugClose: () => L.vm.toggleDebugModalOpen(),
                }),
              v &&
                (0, P.jsx)(T.Zr, {
                  onClose: () => L.vm.toggleSettingsModalOpen(),
                  settings: j,
                  onUpdateSetting: w,
                }),
            ],
          })
        );
      }
      let X = { turn: !1, searchResults: !1, modelResponse: !1, widget: !1 };
    },
    47072: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return eq;
          },
        });
      var n = r(42607),
        s = r(51533),
        a = r(19841),
        l = r(91530),
        i = r.n(l),
        o = r(70079),
        c = r(70451),
        u = r(34796),
        d = r(45456),
        m = r(29287),
        p = r(85452),
        h = r(1454),
        f = r(18450),
        g = r(11335),
        x = r(95407),
        v = r(77799),
        b = r(61888),
        y = r(20724),
        j = r(86263),
        w = r(22189),
        A = r(67739),
        O = r(8143),
        k = r(35250);
      let _ = ["minHeight", "maxHeight", "className"];
      function N(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : N(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let P = (0, o.forwardRef)(function (e, t) {
        let { minHeight: r = 24, maxHeight: n, className: s } = e,
          l = (0, A.Z)(e, _),
          i = (0, o.useRef)(null),
          c = null != t ? t : i,
          [u] = (0, O.f)(c);
        return (
          (0, o.useEffect)(() => {
            let e =
              null != u
                ? u
                : "function" != typeof c && (null == c ? void 0 : c.current);
            if (e) {
              e.style.height = "0px";
              let t = e.scrollHeight;
              null != r && t < r ? (t = r) : null != n && t > n && (t = n),
                (e.style.height = "".concat(t, "px"));
            }
          }, [u, c, l.value, r, n]),
          (0, k.jsx)(
            "textarea",
            S(
              S({}, l),
              {},
              {
                className: (0, a.default)("hide-scrollbar resize-none", s),
                ref: c,
              }
            )
          )
        );
      });
      function E(e) {
        let { result: t, className: r } = e;
        switch (t) {
          case "waiting":
            return (0, k.jsx)(h.Q8x, {
              className: (0, a.default)(
                "stroke-[4] text-token-text-quaternary opacity-50",
                r
              ),
            });
          case "pending":
            return (0, k.jsx)(p.Z, { className: r });
          case "passed":
            return (0, k.jsx)(h.UgA, {
              className: (0, a.default)("stroke-[4] text-green-500", r),
            });
          case "failed":
            return (0, k.jsx)(h.q5L, {
              className: (0, a.default)("stroke-[4] text-red-500", r),
            });
        }
      }
      var C = r(4466),
        D = r(82473),
        R = r(61236),
        M = r(25494),
        T = r(98486),
        Z = r(66315),
        L = r(79208),
        I = r(8844),
        F = r(5224),
        U = r(49593);
      function z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : z(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let V = (e) => {
          let t = (0, D.NL)(),
            r = null == e ? void 0 : e.sort();
          return (0, R.a)({
            queryKey: ["evals", { tags: r }],
            queryFn: async () => {
              let e = new URLSearchParams();
              if (r) for (let t of r) e.append("tags", t);
              return C.c
                .get("".concat(F.rq, "/evals/evals?").concat(e.toString()))
                .then((e) => {
                  for (let r of e) t.setQueryData(["eval", r.id], r);
                  return e;
                });
            },
          });
        },
        Q = (e) =>
          (0, R.a)({
            queryKey: ["eval", e],
            queryFn: async () =>
              C.c.get("".concat(F.rq, "/evals/evals/").concat(e)),
          }),
        B = new Map(),
        G = (e, t) => {
          var r;
          let n = B.get(e);
          return (
            null == n &&
              ((n = (0, b.debounce)(
                (t) =>
                  C.c.post(
                    "".concat(F.rq, "/evals/evals"),
                    q(q({}, t), {}, { id: e })
                  ),
                500,
                { trailing: !0 }
              )),
              B.set(e, n)),
            null === (r = n) || void 0 === r ? void 0 : r(t)
          );
        },
        H = (e) => {
          let t = (0, D.NL)();
          return (0, M.D)({
            mutationKey: ["eval", e],
            mutationFn: async (r) => {
              let n = q(q({}, r), {}, { id: e });
              t.setQueryData(["evals"], (t) =>
                t ? t.map((t) => (t.id === e ? n : t)) : t
              ),
                t.setQueryData(["eval", e], n),
                await G(e, r);
            },
          });
        },
        K = () => {
          let e = (0, D.NL)();
          return (0, M.D)({
            mutationFn: async (e) => {},
            onSettled: (t, r, n) => {
              var s;
              let a = "sonic_eval_".concat((0, I.Z)()),
                l = q(q({}, n), {}, { id: a }),
                i = null === (s = n.tags) || void 0 === s ? void 0 : s.sort();
              e.setQueryData(["evals", { tags: i }], (e) =>
                e ? [l, ...e] : e
              ),
                e.setQueryData(["eval", a], l);
            },
          });
        },
        W = (e) => {
          let t = (0, D.NL)();
          return (0, M.D)({
            mutationKey: ["eval", e],
            mutationFn: async () =>
              C.c.delete("".concat(F.rq, "/evals/evals/").concat(e)),
            onSettled: () => {
              t.setQueryData(["evals"], (t) =>
                t ? t.filter((t) => t.id !== e) : t
              ),
                t.setQueryData(["eval", e], void 0);
            },
          });
        },
        X = (0, b.memoize)((e) => {
          let { queryClient: t, settings: r } = e;
          return L.Ue({
            fetcher: async (e) => {
              let n = (0, b.compact)(
                  await Promise.all(e.map((e) => t.getQueryData(["eval", e])))
                ),
                s = new Date(Date.now()),
                a = r && (0, U.lw)(r.agentSettingsOverrides),
                l = await C.c
                  .post(
                    "".concat(F.rq, "/evals/batched_runs"),
                    {
                      eval_ids: n.map((e) => e.id),
                      turn_template: null == a ? void 0 : a.turn,
                      base_config: null == a ? void 0 : a.base_config,
                    },
                    { skipJsonTransform: !0 }
                  )
                  .catch(
                    (e) => (
                      Z.U.addError(
                        Error("Failed to start eval run", { cause: e })
                      ),
                      []
                    )
                  );
              if (!(null != l && l.body)) return [];
              let i = l.body.getReader(),
                o = new TextDecoder(),
                c = !1,
                u = [],
                d = "";
              try {
                for (; !c; ) {
                  let e = await i.read();
                  if ((c = e.done)) break;
                  let r = d + o.decode(e.value, { stream: !0 });
                  d = "";
                  let n = r.split("\n").filter((e) => !!e.trim()),
                    a = [],
                    l = null;
                  for (let e = 0; e < n.length; e++)
                    try {
                      let t = JSON.parse(n[e].trim());
                      t.id && t.status && t.eval_run_ids
                        ? (l = t)
                        : t.id && t.batch_id && t.eval_id && a.push(t);
                    } catch (t) {
                      d = n.splice(e, 1).join("\n");
                      break;
                    }
                  if (l) {
                    t.setQueryData(["batched_run", l.id], l);
                    let e = t.getQueryData(["user_batched_runs"]);
                    e &&
                      !e.includes(l.id) &&
                      t.setQueryData(["user_batched_runs"], [l.id, ...e]);
                  }
                  for (let e of a) {
                    let r = t.getQueryData(["eval_run", e.eval_id, "latest"]);
                    (!r ||
                      r.batch_id === e.batch_id ||
                      null == r.created_at ||
                      new Date(r.created_at) < s) &&
                      t.setQueryData(["eval_run", e.eval_id, "latest"], e),
                      t.setQueryData(["eval_run", e.eval_id, e.batch_id], e);
                  }
                  u.push(...a);
                }
                "" !== d &&
                  (x.m.danger("Failed to parse JSON from eval run stream"),
                  Z.U.addError("Failed to parse JSON from eval run stream", {
                    data: d,
                  }));
              } catch (e) {
                x.m.danger("Failed to read eval run stream"),
                  Z.U.addError("Failed to read eval run stream", { cause: e });
              }
              return u;
            },
            resolver: L.rp("eval_id"),
            scheduler: L.ck(500),
          });
        }),
        Y = (e, t) => {
          let r = (0, D.NL)(),
            n = X(
              (0, o.useMemo)(() => ({ queryClient: r, settings: t }), [r, t])
            );
          return () => (
            e.forEach((e) => {
              r.setQueryData(["eval_run", e, "latest"], {
                id: "",
                eval_id: e,
                batch_id: "",
                conversation_id: "",
                status: "in_progress",
                steps: [],
              });
            }),
            Promise.all(e.map((e) => n.fetch(e)))
          );
        },
        J = (e, t, r) => {
          let n = Y(e ? [e] : [], r);
          return (0, R.a)({
            queryKey: ["eval_run", e, null != t ? t : "latest"],
            queryFn: async () =>
              t
                ? await C.c.get(
                    ""
                      .concat(F.rq, "/evals/eval_runs/")
                      .concat(e, "/")
                      .concat(t)
                  )
                : (await n())[0],
            enabled: !!e,
            initialData: null,
          });
        };
      function $() {
        return (0, R.a)({
          queryKey: ["tags"],
          queryFn: async () =>
            (0, b.sortBy)(await C.c.get("".concat(F.rq, "/evals/tags"))),
        });
      }
      async function ee(e) {
        try {
          let t = await C.c.get(
              "".concat(F.rq, "/evals/batched_runs/").concat(e, "/csv"),
              { skipJsonTransform: !0 }
            ),
            r = await t.blob(),
            n = window.URL.createObjectURL(r),
            s = document.createElement("a");
          (s.href = n),
            (s.download = "eval_batch_".concat(e, ".csv")),
            s.click(),
            window.URL.revokeObjectURL(n);
        } catch (e) {
          x.m.danger("Failed to download CSV: ".concat(e));
        }
      }
      function et(e) {
        return (0, R.a)({
          queryKey: ["batched_run", e],
          queryFn: async () => {
            if (e)
              return await C.c.get(
                "".concat(F.rq, "/evals/batched_runs/").concat(e)
              );
          },
        });
      }
      function er(e, t) {
        e.setQueryData(["eval_run", t.eval_id, t.batch_id], t);
        let r = e.getQueryData(["eval_run", t.eval_id, "latest"]),
          n = (null == r ? void 0 : r.created_at) && new Date(r.created_at),
          s = t.created_at && new Date(t.created_at);
        e.setQueryData(
          ["eval_run", t.eval_id, "latest"],
          r && (!n || !s || s > n) ? t : r
        );
      }
      function en(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function es(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? en(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : en(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let ea = ["model_response"];
      function el(e) {
        var t, r;
        let {
            criterion: n,
            gradingResult: s,
            isEditing: l,
            onSetIsEditing: i,
            onUpdateCriterion: c,
            autoFocus: u,
            onBlur: d,
          } = e,
          { 0: m, 1: p } = (0, o.useState)(n);
        (0, o.useEffect)(() => {
          p(n);
        }, [n]);
        let f = (e, t) => {
            p(e), null == c || c(e, t);
          },
          x = "pending" !== s && void 0 !== s ? s.thoughts : void 0,
          { 0: v, 1: y } = (0, o.useState)(!1),
          w = (0, o.useRef)(null);
        return (0, k.jsx)(g.E, {
          label: x,
          disabled: !x || l,
          wide: !0,
          side: "right",
          sideOffset: 20,
          align: "start",
          className: "w-full",
          children: (0, k.jsx)("div", {
            className: (0, a.default)("flex w-full gap-2", l && "pl-4"),
            children: l
              ? (0, k.jsxs)(k.Fragment, {
                  children: [
                    null != m
                      ? (0, k.jsx)(g.u, {
                          label: "Remove criterion",
                          side: "top",
                          sideOffset: 4,
                          children: (0, k.jsx)("button", {
                            className:
                              "mt-2 text-token-text-tertiary hover:text-red-500",
                            onClick: (e) => {
                              e.stopPropagation(),
                                p({ prompt: "" }),
                                null == c || c(null);
                            },
                            children: (0, k.jsx)(h.Ybf, {}),
                          }),
                        })
                      : (0, k.jsx)("div", { className: "h-4 w-4" }),
                    (0, k.jsx)(P, {
                      value:
                        null !== (t = null == m ? void 0 : m.prompt) &&
                        void 0 !== t
                          ? t
                          : "",
                      onChange: (e) =>
                        f(es(es({}, m), {}, { prompt: e.target.value })),
                      className:
                        "peer w-full rounded-xl bg-token-main-surface-primary text-sm",
                      placeholder: "Evaluation criterion...",
                      onFocus: () => y(!0),
                      onBlur: () => {
                        y(!1), null == d || d(m);
                      },
                      onKeyDown: (e) => {
                        "Enter" === e.key &&
                          (e.preventDefault(), e.currentTarget.blur());
                      },
                      onClick: (e) => e.stopPropagation(),
                      onPaste: (e) => {
                        e.preventDefault();
                        let [t, ...r] = e.clipboardData
                            .getData("text")
                            .split("\n"),
                          n = e.target,
                          s =
                            n.value.slice(0, n.selectionStart) +
                            t +
                            n.value.slice(n.selectionEnd);
                        f(
                          es(es({}, m), {}, { prompt: s }),
                          (0, b.compact)(
                            r.map((e) => ({
                              prompt: e,
                              visible_assistant_message_fields: ea,
                            }))
                          )
                        );
                        let a = n.selectionStart + t.length;
                        requestAnimationFrame(() => {
                          n.setSelectionRange(a, a);
                        });
                      },
                      autoFocus: u,
                      ref: w,
                    }),
                    (0, k.jsx)("button", {
                      className:
                        "text-token-text-tertiary hover:text-token-text-primary",
                      onClick: () => {
                        var e;
                        return null === (e = w.current) || void 0 === e
                          ? void 0
                          : e.focus();
                      },
                      children: (0, k.jsx)(j.nWS, {}),
                    }),
                    (0, k.jsx)(ei, {
                      open: v,
                      criterion: null != m ? m : { prompt: "" },
                      onUpdateCriterion: (e) => {
                        f(e);
                      },
                    }),
                  ],
                })
              : (0, k.jsxs)(k.Fragment, {
                  children: [
                    (0, k.jsx)("div", {
                      className: "flex-grow",
                      children: null == m ? void 0 : m.prompt,
                    }),
                    (0, k.jsx)(E, {
                      className: "mt-1 shrink-0",
                      result: s
                        ? "pending" === s
                          ? "pending"
                          : s.passed
                            ? "passed"
                            : "failed"
                        : "waiting",
                    }),
                    (0, k.jsx)(g.u, {
                      label:
                        null != m && m.visible_assistant_message_fields
                          ? "Visible fields: ".concat(
                              null == m ||
                              null ===
                                (r = m.visible_assistant_message_fields) ||
                              void 0 === r
                                ? void 0
                                : r.join(", ")
                            )
                          : "All fields visible",
                      align: "end",
                      children: (0, k.jsx)("button", {
                        className:
                          "text-token-text-tertiary hover:text-token-text-primary",
                        onClick: () => {
                          i(!0),
                            requestAnimationFrame(() => {
                              var e;
                              null === (e = w.current) ||
                                void 0 === e ||
                                e.focus();
                            });
                        },
                        children: (0, k.jsx)(j.nWS, {}),
                      }),
                    }),
                  ],
                }),
          }),
        });
      }
      function ei(e) {
        var t;
        let { open: r, criterion: n, onUpdateCriterion: s } = e,
          a = (0, R.a)({
            queryKey: ["grader_response_fields"],
            queryFn: async () =>
              await C.c.get("".concat(F.rq, "/evals/grader_response_fields")),
          });
        return (0, k.jsxs)(w.fC, {
          open: r,
          children: [
            (0, k.jsx)(w.ee, { className: "min-h-full" }),
            (0, k.jsx)(w.h_, {
              children: (0, k.jsxs)(w.VY, {
                side: "right",
                sideOffset: 30,
                onOpenAutoFocus: (e) => e.preventDefault(),
                className:
                  "z-10 rounded-lg bg-token-main-surface-primary p-4 text-token-text-primary shadow-md",
                onMouseDown: (e) => e.preventDefault(),
                children: [
                  (0, k.jsx)(w.Eh, {
                    className: " h-4 w-10 fill-token-main-surface-primary",
                    style: {
                      filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1))",
                    },
                  }),
                  (0, k.jsx)("div", {
                    className: "mb-4 text-sm text-token-text-secondary",
                    children:
                      "(If none are checked, all fields are visible to grader)",
                  }),
                  (0, k.jsxs)("div", {
                    className:
                      "mb-4 grid w-fit grid-cols-[auto,auto] items-center gap-x-4 gap-y-1",
                    children: [
                      a.isLoading && (0, k.jsx)(p.Z, {}),
                      null === (t = a.data) || void 0 === t
                        ? void 0
                        : t.map((e) => {
                            var t, r;
                            return (0, k.jsxs)(k.Fragment, {
                              children: [
                                (0, k.jsx)("div", {
                                  className: "text-sm font-medium",
                                  children: e,
                                }),
                                (0, k.jsx)("input", {
                                  type: "checkbox",
                                  checked:
                                    null !==
                                      (t =
                                        null ===
                                          (r =
                                            n.visible_assistant_message_fields) ||
                                        void 0 === r
                                          ? void 0
                                          : r.includes(e)) && void 0 !== t
                                      ? t
                                      : ea.includes(e),
                                  onChange: (t) => {
                                    var r, a;
                                    if (t.target.checked)
                                      s(
                                        es(
                                          es({}, n),
                                          {},
                                          {
                                            visible_assistant_message_fields: [
                                              ...(null !==
                                                (r =
                                                  n.visible_assistant_message_fields) &&
                                              void 0 !== r
                                                ? r
                                                : ea),
                                              e,
                                            ],
                                          }
                                        )
                                      );
                                    else {
                                      let t = (
                                        null !==
                                          (a =
                                            n.visible_assistant_message_fields) &&
                                        void 0 !== a
                                          ? a
                                          : ea
                                      ).filter((t) => t !== e);
                                      s(
                                        es(
                                          es({}, n),
                                          {},
                                          {
                                            visible_assistant_message_fields: t,
                                          }
                                        )
                                      );
                                    }
                                  },
                                }),
                              ],
                            });
                          }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function eo(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ec(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eo(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eo(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function eu(e) {
        let {
            step: t,
            stepResult: r,
            isEditing: n,
            onSetIsEditing: s,
            onUpdateStep: a,
            showCriterion: l = !0,
            autoFocus: i,
          } = e,
          c = (e) =>
            "pending" === r
              ? "pending"
              : null == r
                ? void 0
                : r.grading_results.find(
                    (t) => t.criterion.prompt === e.prompt
                  ),
          { 0: u, 1: d } = (0, o.useState)(t.user_action.query_fragment),
          m = (e) => {
            d(e),
              a(
                ec(
                  ec({}, t),
                  {},
                  {
                    user_action: ec(
                      ec({}, t.user_action),
                      {},
                      { query_fragment: e }
                    ),
                  }
                )
              );
          },
          p = n ? [...t.criteria, null] : t.criteria,
          f = "submit" === t.user_action.type && "" === u && i,
          x = !f && i;
        return (0, k.jsxs)("div", {
          className: "relative flex flex-col",
          children: [
            (0, k.jsx)("div", {
              className: "flex font-medium",
              children: n
                ? (0, k.jsxs)("div", {
                    className: "flex w-full gap-2",
                    children: [
                      (0, k.jsx)(g.u, {
                        label: "Remove step",
                        side: "top",
                        sideOffset: 4,
                        children: (0, k.jsx)("button", {
                          className: "mt-3 text-red-500 hover:text-red-700",
                          onClick: () => {
                            a(null);
                          },
                          children: (0, k.jsx)(h.Ybf, {}),
                        }),
                      }),
                      (0, k.jsx)(P, {
                        value: u,
                        onChange: (e) => m(e.target.value),
                        className:
                          "mb-2 w-full rounded-lg bg-token-main-surface-primary text-base",
                        placeholder:
                          "submit" === t.user_action.type
                            ? "Search prompt..."
                            : "Followup prompt...",
                        onClick: (e) => e.stopPropagation(),
                        autoFocus: f,
                      }),
                    ],
                  })
                : t.user_action.query_fragment,
            }),
            l &&
              (0, k.jsx)("div", {
                className: "flex flex-col gap-1",
                children:
                  null == p
                    ? void 0
                    : p.map((e, r) =>
                        (0, k.jsx)(
                          el,
                          {
                            criterion: e,
                            gradingResult: null != e ? c(e) : void 0,
                            isEditing: n,
                            onSetIsEditing: s,
                            onUpdateCriterion: (n, s) => {
                              let l = t.criteria;
                              (l =
                                null == e && null != n
                                  ? t.criteria.concat(n)
                                  : t.criteria
                                      .map((e, t) => (t === r ? n : e))
                                      .filter((e) => null != e)),
                                s && (l = l.concat(s)),
                                a(ec(ec({}, t), {}, { criteria: l }));
                            },
                            autoFocus: x && 0 === r,
                            onBlur: (e) => {
                              (null == e || "" === e.prompt) &&
                                a(
                                  ec(
                                    ec({}, t),
                                    {},
                                    {
                                      criteria: (0, b.compact)(
                                        t.criteria.map((e, t) =>
                                          t === r ? null : e
                                        )
                                      ),
                                    }
                                  )
                                );
                            },
                          },
                          "step-".concat(r)
                        )
                      ),
              }),
          ],
        });
      }
      var ed = r(18460),
        em = r(98825),
        ep = r(82133);
      function eh(e) {
        return "hsl(".concat(
          (function (e) {
            let t = 0;
            for (let r = 0; r < e.length; r++)
              t = (t << 5) - t + e.charCodeAt(r);
            return ((t % 360) + 360) % 360;
          })(e),
          ", 50%, 90%)"
        );
      }
      let ef = ["tag"];
      function eg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ex(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eg(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eg(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let ev = (e) =>
        (0, k.jsx)(
          ed.c.Input,
          ex(
            ex({}, e),
            {},
            { inputClassName: "focus:ring-0 !text-token-text-primary" }
          )
        );
      function eb(e) {
        let {
            tags: t,
            onTagsChange: r,
            placeholder: n,
            isEditable: s,
            classNames: l,
          } = e,
          { data: i, isLoading: o } = $(),
          c = s ? ep.Z : em.ZP,
          u = (function () {
            let e = (0, D.NL)();
            return (0, M.D)({
              mutationKey: ["tags"],
              mutationFn: async (t) => {
                e.setQueryData(["tags"], (e) => (e ? [...e, t] : e));
              },
            });
          })();
        return (0, k.jsx)(c, {
          classNames: ex(
            ex({}, l),
            {},
            {
              input: (e) => {
                var t;
                return (0, a.default)(
                  "text-sm",
                  null == l || null === (t = l.input) || void 0 === t
                    ? void 0
                    : t.call(l, e)
                );
              },
              multiValue: (e) => {
                var t;
                return (0, a.default)(
                  "!rounded-lg",
                  null == l || null === (t = l.multiValue) || void 0 === t
                    ? void 0
                    : t.call(l, e)
                );
              },
              menu: (e) => {
                var t;
                return (0, a.default)(
                  "bg-token-main-surface-primary snc-accent-border",
                  null == l || null === (t = l.menu) || void 0 === t
                    ? void 0
                    : t.call(l, e)
                );
              },
              control: (e) => {
                var t;
                return (0, a.default)(
                  "snc-accent-border",
                  null == l || null === (t = l.control) || void 0 === t
                    ? void 0
                    : t.call(l, e)
                );
              },
              menuList: (e) => {
                var t;
                return (0, a.default)(
                  "bg-token-main-surface-primary",
                  null == l || null === (t = l.menuList) || void 0 === t
                    ? void 0
                    : t.call(l, e)
                );
              },
              multiValueRemove: (e) => {
                var t;
                return (0, a.default)(
                  "text-gray-600",
                  null == l || null === (t = l.multiValueRemove) || void 0 === t
                    ? void 0
                    : t.call(l, e)
                );
              },
            }
          ),
          styles: {
            control: (e) =>
              ex(
                ex({}, e),
                {},
                { backgroundColor: "var(--token-main-surface-primary)" }
              ),
            option: (e, t) =>
              ex(
                ex({}, e),
                {},
                {
                  backgroundColor: t.isFocused
                    ? "var(--snc-hover)"
                    : "transparent",
                }
              ),
            multiValue: (e, t) =>
              ex(ex({}, e), {}, { backgroundColor: eh(t.data.value) }),
          },
          components: { Input: ev },
          isClearable: !1,
          placeholder: null != n ? n : "Select tags",
          className: "select-none",
          value: t.map((e) => ({ label: e, value: e })),
          isMulti: !0,
          isLoading: o,
          allowCreateWhileLoading: !1,
          options: null == i ? void 0 : i.map((e) => ({ label: e, value: e })),
          onCreateOption: (e) => {
            let n = (0, b.snakeCase)(e).toLowerCase();
            r((0, b.sortBy)([...t, n])), u.mutate(e);
          },
          onChange: (e) => {
            r((0, b.sortBy)(e.map((e) => e.value)));
          },
        });
      }
      function ey(e) {
        let { tag: t } = e,
          r = (0, A.Z)(e, ef);
        return (0, o.createElement)(
          "div",
          ex(
            ex({}, r),
            {},
            {
              key: t,
              className: (0, a.default)(
                "select-none rounded-lg bg-token-main-surface-tertiary px-2 py-1 text-xs font-medium !leading-none text-gray-700",
                r.className
              ),
              style: ex({ backgroundColor: eh(t) }, r.style),
            }
          ),
          t
        );
      }
      var ej = r(19216);
      function ew(e) {
        let { threadId: t, threadUserId: r, refetchOnMount: n } = e;
        return (0, R.a)({
          queryKey: ["thread", t, r],
          queryFn: async () => {
            if (!t) return { thread: null, turns: null };
            let e = await (0, U.Nv)({
                threadId: t,
                threadUserId: r,
                isEval: !0,
              }),
              n = e.turns;
            return { thread: e, turns: n };
          },
          enabled: !!t,
          refetchOnMount: n,
        });
      }
      function eA(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eA(Object(r), !0).forEach(function (t) {
                (0, f.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eA(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function ek(e) {
        var t, r, n, s, l, i;
        let {
            evalId: c,
            evalRunId: u,
            settings: d,
            setSelected: p,
            isSelected: f,
            initialEditState: j,
          } = e,
          w = J(c, void 0, d),
          A = (function (e) {
            let t = (0, D.NL)();
            return (0, R.a)({
              queryKey: ["eval_run", e],
              queryFn: async () => {
                let r = await C.c.get(
                  "".concat(F.rq, "/evals/eval_runs/").concat(e)
                );
                return er(t, r), r;
              },
            });
          })(null != u ? u : ""),
          O = null != u ? A : w,
          { 0: _, 1: N } = (0, o.useState)(null != j && j),
          S = null === (t = Q(c)) || void 0 === t ? void 0 : t.data,
          M = (e) => {
            if (O.data) return O.data.steps[e] || "pending";
          },
          T = H(c),
          Z = W(c),
          { 0: L, 1: I } = (0, o.useState)(null);
        (0, o.useEffect)(() => {
          I(null != S ? S : null);
        }, [S]);
        let { 0: U, 1: z } = (0, o.useState)(!1),
          q = (e) => {
            I(e), z(!0);
          },
          V = (0, o.useCallback)(() => {
            U &&
              (null == L
                ? (Z.mutate(), x.m.info("Test case deleted"))
                : (T.mutate(L), x.m.info("Test case updated")),
              z(!1));
          }, [L, T, U, Z]),
          B = (0, o.useCallback)(
            (e) => {
              e != _ && (V(), N(e));
            },
            [_, V]
          );
        (0, o.useEffect)(() => {
          f || B(!1);
        }, [f, B]),
          (0, o.useEffect)(() => {
            if (f)
              return (0, v.eR)(document, {
                keydown: (e) => {
                  "Enter" !== e.key || e.shiftKey || B(!_);
                },
              });
          }, [f, _, c, B]);
        let G =
            !f && L && L.steps.length > 0
              ? [L.steps[0]]
              : null == L
                ? void 0
                : L.steps,
          K =
            (null === (r = O.data) || void 0 === r ? void 0 : r.status) ===
            "done"
              ? O.data.steps.every((e) =>
                  null == e ? void 0 : e.grading_results.every((e) => e.passed)
                )
                ? "passed"
                : "failed"
              : (null === (n = O.data) || void 0 === n ? void 0 : n.status) ===
                  "in_progress"
                ? "pending"
                : "waiting",
          X =
            (null === (s = O.data) ||
            void 0 === s ||
            null === (s = s.steps[0]) ||
            void 0 === s
              ? void 0
              : s.conversation.id) != null,
          { refetch: Y } = ew({
            threadId:
              null === (l = O.data) ||
              void 0 === l ||
              null === (l = l.steps[0]) ||
              void 0 === l
                ? void 0
                : l.conversation.id,
          });
        return (0, k.jsxs)("div", {
          className: (0, a.default)(
            "relative flex w-full cursor-pointer items-start gap-[--snc-1] px-[--snc-1] text-left transition-colors hover:border-token-border-heavy hover:bg-[var(--snc-hover)]",
            f ? "border-y bg-token-main-surface-secondary py-[--snc-1]" : "py-2"
          ),
          onClick: () => p(!0),
          onDoubleClick: () => B(!0),
          children: [
            (0, k.jsx)("div", {
              className: "flex flex-col gap-2 leading-none",
              children: (0, k.jsx)("button", {
                className: "text-token-text-tertiary",
                onClick: (e) => {
                  e.stopPropagation(), B(!1);
                },
                children: f
                  ? (0, k.jsx)(h.bTu, { className: "icon-lg" })
                  : (0, k.jsx)(E, { result: K, className: "icon-lg" }),
              }),
            }),
            (0, k.jsxs)("div", {
              className: "flex flex-grow flex-col gap-2",
              children: [
                null == G
                  ? void 0
                  : G.map((e, t) =>
                      (0, k.jsx)(
                        eu,
                        {
                          step: e,
                          stepResult: M(t),
                          isEditing: _,
                          onSetIsEditing: B,
                          onUpdateStep: (e) => {
                            q((r) => {
                              var n;
                              let s = (0, b.compact)(
                                (null !== (n = null == r ? void 0 : r.steps) &&
                                void 0 !== n
                                  ? n
                                  : []
                                ).map((r, n) => (n === t ? e : r))
                              );
                              return null == r || 0 === s.length
                                ? null
                                : eO(eO({}, r), {}, { steps: s });
                            });
                          },
                          showCriterion: f,
                          autoFocus: 0 === t,
                        },
                        t
                      )
                    ),
                _
                  ? (0, k.jsxs)("div", {
                      className: "flex",
                      children: [
                        (0, k.jsx)(g.u, {
                          label: "Add new step",
                          side: "right",
                          sideOffset: 4,
                          children: (0, k.jsx)(m.z, {
                            color: "neutral",
                            onClick: (e) => {
                              e.stopPropagation(),
                                q((e) => {
                                  var t;
                                  return null == e
                                    ? e
                                    : eO(
                                        eO({}, e),
                                        {},
                                        {
                                          steps: (null !==
                                            (t =
                                              null == e ? void 0 : e.steps) &&
                                          void 0 !== t
                                            ? t
                                            : []
                                          ).concat({
                                            user_action: {
                                              query_fragment: "",
                                              type: "text",
                                              conversation_id: null,
                                              metadata: {},
                                              agent_settings_overrides: {
                                                model_family: y.tQ.GPT_3_5,
                                                search_engine: y.lv.Bing,
                                                robots_mode: y.K1.Conservative,
                                                show_image_to_model: !1,
                                                rerank_labrador:
                                                  "maraschino-rr-d32-latest",
                                              },
                                            },
                                            criteria: [],
                                          }),
                                        }
                                      );
                                });
                            },
                            children: (0, k.jsx)(h.OvN, {}),
                          }),
                        }),
                        (0, k.jsx)("div", {
                          className:
                            "absolute bottom-[--snc-1] right-[--snc-1]",
                          children: (0, k.jsx)(g.u, {
                            label: "Delete test case",
                            side: "right",
                            children: (0, k.jsx)("button", {
                              className: "text-red-500",
                              onClick: (e) => {
                                e.stopPropagation(), Z.mutate();
                              },
                              children: (0, k.jsx)(h.Ybf, {}),
                            }),
                          }),
                        }),
                      ],
                    })
                  : null,
                _
                  ? (0, k.jsx)(g.u, {
                      label: "Eval Notes",
                      side: "right",
                      sideOffset: 4,
                      children: (0, k.jsx)(P, {
                        value: null == L ? void 0 : L.notes,
                        onChange: (e) => {
                          q((t) =>
                            null == t
                              ? t
                              : eO(eO({}, t), {}, { notes: e.target.value })
                          );
                        },
                        placeholder: "Eval Notes...",
                        className:
                          "w-full rounded-lg bg-token-main-surface-primary text-sm",
                      }),
                    })
                  : (null == L ? void 0 : L.notes) &&
                    f &&
                    (0, k.jsxs)("div", {
                      className: "text-sm italic",
                      children: ["Notes: ", null == L ? void 0 : L.notes],
                    }),
                (0, k.jsx)(e_, {
                  tags:
                    null !== (i = null == L ? void 0 : L.tags) && void 0 !== i
                      ? i
                      : [],
                  onUpdateTags: (e) => {
                    q((t) => (null == t ? t : eO(eO({}, t), {}, { tags: e })));
                  },
                  isEditing: _,
                }),
              ],
            }),
            (0, k.jsxs)("div", {
              className: "flex flex-col gap-2 pt-1 leading-none",
              children: [
                (0, k.jsx)(g.u, {
                  label: "Run single test case",
                  side: "right",
                  sideOffset: 4,
                  children: (0, k.jsx)("button", {
                    className: "text-green-500 hover:text-token-text-primary",
                    onClick: (e) => {
                      V(), e.stopPropagation(), p(!0), O.refetch();
                    },
                    children: (0, k.jsx)(h.KCr, { className: "stroke-[2]" }),
                  }),
                }),
                f &&
                  (0, k.jsx)(g.u, {
                    label: _
                      ? "Save test case (Enter)"
                      : "Edit test case (Enter)",
                    side: "right",
                    sideOffset: 4,
                    children: (0, k.jsx)("button", {
                      className:
                        "text-token-text-tertiary hover:text-token-text-primary",
                      onClick: (e) => {
                        e.stopPropagation(), B(!_);
                      },
                      children: _
                        ? (0, k.jsx)(h.mW3, {})
                        : (0, k.jsx)(h.vPQ, {}),
                    }),
                  }),
                f &&
                  X &&
                  (0, k.jsx)(g.u, {
                    label: "Re-fetch test run",
                    side: "right",
                    sideOffset: 4,
                    children: (0, k.jsx)("div", {
                      className:
                        "text-token-text-tertiary hover:text-token-text-primary",
                      onClick: () => Y(),
                      children: (0, k.jsx)(h.Bw1, {}),
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      function e_(e) {
        let { tags: t, onUpdateTags: r, isEditing: n } = e;
        return n
          ? (0, k.jsx)("div", {
              children: (0, k.jsx)(eb, {
                isEditable: !0,
                tags: t,
                onTagsChange: (e) => r(e),
                placeholder: "Add tags...",
              }),
            })
          : (0, k.jsx)("div", {
              className: "flex flex-wrap items-center gap-1",
              children: t.map((e) => (0, k.jsx)(ey, { tag: e }, e)),
            });
      }
      function eN(e) {
        var t, r, n, s, l;
        let {
            batchId: i,
            settings: c,
            selectedEvalId: u,
            setSelectedEvalId: d,
          } = e,
          f = et(i),
          g = (function (e) {
            let t = (0, D.NL)();
            return (0, T.h)({
              queries: e.map((e) => ({
                queryKey: ["eval_run", e],
                queryFn: async () => {
                  let r = await C.c.get(
                    "".concat(F.rq, "/evals/eval_runs/").concat(e)
                  );
                  return er(t, r), r;
                },
              })),
              combine: (e) => ({
                runs: (0, b.compact)(e.map((e) => e.data)),
                refetch: () => {
                  e.forEach((e) => e.refetch());
                },
                isLoading: e.some((e) => e.isLoading),
              }),
            });
          })(
            null !==
              (t =
                null === (r = f.data) || void 0 === r
                  ? void 0
                  : r.eval_run_ids) && void 0 !== t
              ? t
              : []
          ),
          x = g.runs,
          v =
            ((l = x.map((e) => e.eval_id)),
            (0, T.h)({
              queries: l.map((e) => ({
                queryKey: ["eval", e],
                queryFn: async () =>
                  await C.c.get("".concat(F.rq, "/evals/evals/").concat(e)),
              })),
              combine: (e) => (0, b.compact)(e.map((e) => e.data)),
            })),
          y = new Map();
        for (let e of x) y.set(e.eval_id, e);
        (0, o.useEffect)(() => {
          var e;
          (null === (e = f.data) || void 0 === e ? void 0 : e.status) ===
            "done" &&
            x.some(
              (e) => "in_progress" === e.status || "enqueued" === e.status
            ) &&
            g.refetch();
        }, [
          f,
          null === (n = f.data) || void 0 === n ? void 0 : n.status,
          x,
          g,
        ]);
        let {
          numSuccessfulRuns: j,
          numSuccessfulCriteria: w,
          numCriteria: A,
        } = (0, o.useMemo)(() => {
          let e = 0,
            t = 0,
            r = 0;
          for (let n of x) {
            let s = !0;
            for (let e of n.steps)
              for (let n of e.grading_results) r++, n.passed ? t++ : (s = !1);
            s && e++;
          }
          return {
            numSuccessfulRuns: e,
            numSuccessfulCriteria: t,
            numCriteria: r,
          };
        }, [x]);
        return (0, k.jsxs)("div", {
          className: "flex w-full flex-col items-stretch overflow-y-auto",
          children: [
            (0, k.jsxs)("div", {
              className: "grid grid-cols-[auto,1fr] gap-2 p-[--snc-1]",
              children: [
                (0, k.jsx)("div", {
                  className: "font-medium",
                  children: "Batch",
                }),
                (0, k.jsx)("div", {
                  className: "font-mono text-xs",
                  children: i,
                }),
                (0, k.jsx)("div", {
                  className: "font-medium",
                  children: "Status",
                }),
                (0, k.jsx)("div", {
                  className: "font-mono text-xs",
                  children:
                    null === (s = f.data) || void 0 === s ? void 0 : s.status,
                }),
                (0, k.jsx)("div", {
                  className: "font-medium",
                  children: "Evals",
                }),
                (0, k.jsxs)("div", {
                  className: (0, a.default)(
                    "flex font-mono text-xs",
                    j === v.length ? "text-green-500" : "text-red-500"
                  ),
                  children: [
                    g.isLoading && (0, k.jsx)(p.Z, {}),
                    j,
                    "/",
                    v.length,
                    " (",
                    ((j / v.length) * 100).toFixed(1),
                    "%)",
                  ],
                }),
                (0, k.jsx)("div", {
                  className: "font-medium",
                  children: "Criteria",
                }),
                (0, k.jsxs)("div", {
                  className: (0, a.default)(
                    "flex font-mono text-xs",
                    w === A ? "text-green-500" : "text-red-500"
                  ),
                  children: [
                    g.isLoading && (0, k.jsx)(p.Z, {}),
                    w,
                    "/",
                    A,
                    " (",
                    ((w / A) * 100).toFixed(1),
                    "%)",
                  ],
                }),
                (0, k.jsxs)(m.z, {
                  onClick: () => ee(i),
                  className: "col-span-2",
                  children: [(0, k.jsx)(h._hL, {}), "Download Batched Run CSV"],
                }),
              ],
            }),
            v.map((e) => {
              var t;
              return (0, k.jsx)(
                ek,
                {
                  settings: c,
                  evalId: e.id,
                  evalRunId:
                    null === (t = y.get(e.id)) || void 0 === t ? void 0 : t.id,
                  setSelected: (t) => {
                    d((r) => (t ? e.id : r !== e.id ? r : void 0));
                  },
                  isSelected: e.id === u,
                },
                e.id
              );
            }),
          ],
        });
      }
      function eS(e) {
        let { selectedBatchId: t, setSelectedBatchId: r, className: n } = e,
          { data: s } = (0, R.a)({
            queryKey: ["user_batched_runs"],
            queryFn: async () =>
              (await C.c.get("".concat(F.rq, "/evals/batched_runs"))).items,
          });
        return (0, k.jsxs)("div", {
          className: (0, a.default)("w-24 overflow-y-auto", n),
          children: [
            (0, k.jsx)("div", {
              className: (0, a.default)(
                "cursor-pointer p-2 hover:bg-token-main-surface-secondary",
                void 0 == t && "bg-token-main-surface-tertiary font-medium"
              ),
              onClick: () => r(void 0),
              children: "All/latest",
            }),
            null == s
              ? void 0
              : s.map((e) =>
                  (0, k.jsx)(
                    eP,
                    {
                      batchId: e,
                      selected: t === e,
                      setSelected: (t) => {
                        r(t ? e : void 0);
                      },
                    },
                    e
                  )
                ),
          ],
        });
      }
      function eP(e) {
        var t;
        let { batchId: r, selected: n, setSelected: s } = e,
          l = et(r),
          i =
            (null === (t = l.data) || void 0 === t ? void 0 : t.created_at) &&
            new Date(l.data.created_at);
        return (0, k.jsx)("div", {
          className: (0, a.default)(
            "cursor-pointer p-2 text-xs hover:bg-token-main-surface-secondary",
            n && "bg-token-main-surface-tertiary font-medium"
          ),
          onClick: () => s(!n),
          children:
            i &&
            (0, k.jsxs)("div", {
              children: [
                (0, k.jsx)("div", {
                  children: null == i ? void 0 : i.toLocaleDateString(),
                }),
                (0, k.jsx)("div", {
                  children: null == i ? void 0 : i.toLocaleTimeString(),
                }),
              ],
            }),
        });
      }
      var eE = r(17178);
      function eC(e) {
        let { evalRun: t } = e,
          r = Q(t.eval_id).data;
        return (0, k.jsxs)("div", {
          className: "flex flex-col gap-10",
          children: [
            null == r
              ? void 0
              : r.steps.map((e, r) => {
                  let n = t.steps[r];
                  return (0, k.jsxs)(
                    "div",
                    {
                      children: [
                        (0, k.jsxs)("div", {
                          className:
                            "flex items-center gap-2 text-lg font-medium",
                          children: [
                            (0, k.jsx)(E, {
                              result: n.grading_results.every((e) => e.passed)
                                ? "passed"
                                : "failed",
                            }),
                            e.user_action.query_fragment,
                          ],
                        }),
                        n.grading_results.map((e, t) =>
                          (0, k.jsx)(eD, { result: e }, t)
                        ),
                      ],
                    },
                    r
                  );
                }),
            t.turn_template &&
              (0, k.jsxs)("div", {
                className: "flex flex-grow flex-col",
                children: [
                  (0, k.jsx)("div", {
                    className: "flex items-center gap-1 font-medium",
                    children: "Turn Settings",
                  }),
                  (0, k.jsx)(eE.default, { json: t.turn_template }),
                ],
              }),
            null != t.batch_id &&
              (0, k.jsxs)(m.z, {
                onClick: () => ee(t.batch_id),
                children: [(0, k.jsx)(h._hL, {}), "Download Batched Run CSV"],
              }),
          ],
        });
      }
      function eD(e) {
        let { result: t } = e,
          { 0: r, 1: n } = (0, o.useState)(!1);
        return (0, k.jsxs)("div", {
          className: "ml-8",
          children: [
            (0, k.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                (0, k.jsx)(E, { result: t.passed ? "passed" : "failed" }),
                t.criterion.prompt,
                (0, k.jsx)("button", {
                  onClick: () => n((e) => !e),
                  children: r ? (0, k.jsx)(h.Tfp, {}) : (0, k.jsx)(h.bTu, {}),
                }),
              ],
            }),
            !r &&
              (0, k.jsxs)("div", {
                className: "ml-8 flex flex-col gap-2",
                children: [
                  (0, k.jsx)("div", {
                    children: (0, k.jsx)("p", {
                      className: "whitespace-pre-wrap text-sm",
                      children: t.thoughts,
                    }),
                  }),
                  (0, k.jsxs)("div", {
                    children: [
                      (0, k.jsx)("div", {
                        className: "font-medium",
                        children: "Grader Details",
                      }),
                      (0, k.jsx)("p", {
                        className: "whitespace-pre-wrap text-sm",
                        children: t.prompt,
                      }),
                      (0, k.jsx)(eE.default, { json: t.grading_object }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      function eR(e) {
        let {
            run: t,
            settings: r,
            selectedBatchId: n,
            setSelectedBatchId: s,
          } = e,
          a = (0, b.isEqual)(
            (0, U.lw)(r.agentSettingsOverrides).turn,
            t.turn_template
          );
        return (0, k.jsxs)("div", {
          className: "flex gap-4 border-t p-[--snc-1]",
          children: [
            (0, k.jsx)("div", {
              className: "flex flex-col",
              children: (0, k.jsxs)("div", {
                className: "grid grid-cols-[auto,auto] gap-1",
                children: [
                  (0, k.jsx)("div", {
                    className: "font-medium",
                    children: "Status",
                  }),
                  (0, k.jsx)("div", {
                    className: "font-mono text-xs",
                    children: t.status,
                  }),
                  null != t.batch_id &&
                    (0, k.jsxs)(m.z, {
                      onClick: () => ee(t.batch_id),
                      className: "col-span-2",
                      children: [
                        (0, k.jsx)(h._hL, {}),
                        "Download Batched Run CSV",
                      ],
                    }),
                  null != t.batch_id &&
                    t.batch_id !== n &&
                    (0, k.jsxs)(m.z, {
                      onClick: () => s(t.batch_id),
                      className: "col-span-2",
                      children: [(0, k.jsx)(h.rDJ, {}), "View Runs in Batch"],
                    }),
                ],
              }),
            }),
            !a &&
              (0, k.jsx)(g.u, {
                label: "Run settings differ from your current settings",
                children: (0, k.jsx)("span", {
                  className: "text-red-500",
                  children: (0, k.jsx)(h.bcx, {}),
                }),
              }),
          ],
        });
      }
      var eM = r(16131),
        eT = r(75138),
        eZ = r(20735),
        eL = r(72150);
      let eI = "audited";
      function eF() {
        return (0, k.jsx)("div", { children: (0, k.jsx)(eT.l, { lines: 3 }) });
      }
      function eU(e) {
        return Array.isArray(e) && e.every((e) => "string" == typeof e);
      }
      function ez(e) {
        var t, r, n, s;
        let {
            settings: l,
            onUpdateSettings: i,
            selectedEvalId: c,
            setSelectedEvalId: u,
          } = e,
          { data: d, isLoading: p } = $(),
          f = K(),
          { 0: x, 1: v } = (0, o.useState)(""),
          [b, w] = (0, eL.Z)("SONIC_EVAL_TAGS", [eI], eU);
        (0, o.useEffect)(() => {
          !p &&
            d &&
            d.length &&
            1 === b.length &&
            b[0] === eI &&
            (d.includes(eI) ? w([eI]) : w([d[0]]));
        }, [p]);
        let A = V(b),
          O =
            null == A || null === (t = A.data) || void 0 === t
              ? void 0
              : t.filter((e) =>
                  e.steps.some(
                    (e) =>
                      !x ||
                      e.user_action.query_fragment.toLowerCase().includes(x)
                  )
                ),
          { 0: _, 1: N } = (0, o.useState)(!1),
          S = Y(
            (null != O ? O : []).map((e) => e.id),
            l
          );
        function P(e) {
          return (
            1 === e.steps.length && "" === e.steps[0].user_action.query_fragment
          );
        }
        return (
          (0, o.useEffect)(() => {
            if (A.data && !c && A.data.length > 0 && P(A.data[0])) {
              var e;
              u(null === (e = A.data[0]) || void 0 === e ? void 0 : e.id);
            }
          }, [A.data, c, u]),
          (0, k.jsxs)("div", {
            className: "flex flex-col overflow-y-auto",
            children: [
              (0, k.jsxs)("div", {
                className:
                  "pb-[calc(var(--snc-1)/2] flex h-[76px] items-center p-[--snc-1] font-medium",
                children: [
                  "Evals",
                  (null == A ? void 0 : A.data) != null
                    ? " (".concat(A.data.length, ")")
                    : "",
                ],
              }),
              (0, k.jsxs)("div", {
                className: "flex flex-col gap-2 p-[--snc-1]",
                children: [
                  (0, k.jsx)(eb, {
                    classNames: { control: () => "!rounded-full pl-4 pr-1" },
                    tags: b,
                    onTagsChange: w,
                    placeholder: "Find tags...",
                  }),
                  (0, k.jsx)("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children:
                      null == d
                        ? void 0
                        : d.map((e) =>
                            (0, k.jsx)(
                              ey,
                              {
                                tag: e,
                                className: (0, a.default)(
                                  "cursor-pointer px-2.5 py-1.5 text-sm",
                                  !b.includes(e) && "opacity-60"
                                ),
                                onClick: (t) => {
                                  if (t.shiftKey) {
                                    b.includes(e)
                                      ? w(b.filter((t) => t !== e))
                                      : w([...b, e]);
                                    return;
                                  }
                                  1 === b.length && b.includes(e)
                                    ? w([])
                                    : w([e]);
                                },
                              },
                              e
                            )
                          ),
                  }),
                ],
              }),
              (0, k.jsxs)("div", {
                className:
                  "flex items-center justify-between gap-2 p-[--snc-1] pt-0",
                children: [
                  (0, k.jsx)("div", {
                    className: "flex",
                    children: (0, k.jsx)(g.u, {
                      label: "Add new eval",
                      side: "top",
                      sideOffset: 4,
                      children: (0, k.jsx)(m.z, {
                        color: "neutral",
                        onClick: (e) => {
                          e.stopPropagation(),
                            f.mutate({
                              steps: [
                                {
                                  user_action: {
                                    query_fragment: "",
                                    type: "submit",
                                    conversation_id: null,
                                    metadata: {},
                                    agent_settings_overrides: {
                                      model_family: y.tQ.GPT_3_5,
                                      search_engine: y.lv.Bing,
                                      robots_mode: y.K1.Conservative,
                                      show_image_to_model: !1,
                                      rerank_labrador:
                                        "maraschino-rr-d32-latest",
                                    },
                                  },
                                  criteria: [],
                                },
                              ],
                              tags: [...b],
                            }),
                            u(void 0);
                        },
                        disabled:
                          (null === (r = A.data) || void 0 === r
                            ? void 0
                            : r[0]) && P(A.data[0]),
                        children: (0, k.jsx)(h.OvN, {}),
                      }),
                    }),
                  }),
                  (0, k.jsx)("input", {
                    type: "text",
                    value: x,
                    className:
                      "snc-accent-border flex-grow rounded-lg bg-token-main-surface-primary py-1 pl-4 pr-1 focus:outline-0 focus:ring-0",
                    onChange: (e) => v(e.target.value),
                    placeholder: "Filter...",
                  }),
                  (0, k.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, k.jsx)(g.u, {
                        label: "Edit settings",
                        side: "top",
                        sideOffset: 4,
                        children: (0, k.jsx)(m.z, {
                          onClick: () => N(!0),
                          color: "neutral",
                          children: (0, k.jsx)(j.KAl, { className: "icon-sm" }),
                        }),
                      }),
                      (0, k.jsx)(g.u, {
                        label: "Run all test cases",
                        side: "top",
                        sideOffset: 4,
                        children: (0, k.jsx)(m.z, {
                          disabled: !(null != O && O.length),
                          onClick: () => {
                            if (!O) return;
                            let e = O.length;
                            (!(e > 50) ||
                              window.confirm(
                                "Are you sure you want to run ".concat(
                                  e,
                                  " evals?"
                                )
                              )) &&
                              S();
                          },
                          className:
                            "flex items-center justify-self-end py-1.5",
                          children: (0, k.jsx)(eM.Z, {
                            value:
                              null !== (n = null == O ? void 0 : O.length) &&
                              void 0 !== n
                                ? n
                                : 0,
                            one: "Run 1 eval",
                            other: "Run ".concat(
                              null !== (s = null == O ? void 0 : O.length) &&
                              void 0 !== s
                                ? s
                                : 0,
                              " evals"
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              A.isLoading
                ? (0, k.jsx)("div", {
                    className: "flex flex-col gap-[--snc-1] px-[--snc-2]",
                    children: Array.from({ length: 5 }).map((e, t) =>
                      (0, k.jsx)(eF, {}, t)
                    ),
                  })
                : null == O
                  ? void 0
                  : O.map((e, t) => {
                      var r;
                      return (0, k.jsx)(
                        ek,
                        {
                          settings: l,
                          evalId: e.id,
                          setSelected: (t) => {
                            u((r) => (t ? e.id : r !== e.id ? r : void 0));
                          },
                          isSelected: e.id === c || P(e),
                          initialEditState: P(e),
                        },
                        null !== (r = e.id) && void 0 !== r
                          ? r
                          : "new-".concat(t)
                      );
                    }),
              _ &&
                (0, k.jsx)(eZ.Zr, {
                  onClose: () => N(!1),
                  settings: l,
                  onUpdateSetting: i,
                }),
            ],
          })
        );
      }
      function eq() {
        var e, t;
        (0, d.e)();
        let { 0: r, 1: n } = (0, o.useState)(void 0),
          { 0: s, 1: a } = (0, o.useState)(void 0),
          [l, i] = (0, u.r)(),
          c = null === (e = J(r, s)) || void 0 === e ? void 0 : e.data,
          m =
            null == c || null === (t = c.steps[0]) || void 0 === t
              ? void 0
              : t.conversation.id;
        return (0, k.jsxs)("div", {
          className: "flex h-screen w-screen",
          children: [
            (0, k.jsxs)("div", {
              className: "flex w-[600px] flex-shrink-0 border-r",
              children: [
                (0, k.jsx)(eS, {
                  selectedBatchId: s,
                  setSelectedBatchId: (e) => {
                    n(void 0), a(e);
                  },
                  className: "h-full flex-shrink-0 border-r",
                }),
                null != s
                  ? (0, k.jsx)(eN, {
                      batchId: s,
                      settings: l,
                      selectedEvalId: r,
                      setSelectedEvalId: n,
                    })
                  : (0, k.jsx)(ez, {
                      settings: l,
                      onUpdateSettings: i,
                      selectedEvalId: r,
                      setSelectedEvalId: n,
                    }),
              ],
            }),
            (0, k.jsxs)("div", {
              className: "flex flex-grow flex-col overflow-hidden",
              children: [
                (null == c ? void 0 : c.exception) &&
                  (0, k.jsxs)("div", {
                    className: "h-ful w-full flex-grow overflow-auto",
                    children: [
                      (0, k.jsx)("h2", { children: "Error in backend" }),
                      (0, k.jsx)("pre", {
                        children: c.exception.traceback.join(""),
                      }),
                    ],
                  }),
                c &&
                  m &&
                  (0, k.jsxs)(k.Fragment, {
                    children: [
                      (0, k.jsx)("div", {
                        className: "h-full w-full flex-grow overflow-auto",
                        children: (0, k.jsx)(eQ, {
                          settings: l,
                          onUpdateSettings: i,
                          evalRun: c,
                          threadId: m,
                        }),
                      }),
                      (0, k.jsx)(eR, {
                        run: c,
                        settings: l,
                        selectedBatchId: s,
                        setSelectedBatchId: a,
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function eV(e) {
        let { value: t, children: r } = e;
        return (0, k.jsx)(s.ck, {
          value: t,
          className: (0, a.default)(
            "flex shrink-0 cursor-pointer items-center justify-center rounded-full border px-2 py-0.5",
            "border-token-border-secondary bg-token-main-surface-primary text-token-text-secondary",
            "radix-state-checked:border-token-text-tertiary radix-state-checked:bg-token-text-primary radix-state-checked:font-medium radix-state-checked:text-token-main-surface-primary"
          ),
          children: r,
        });
      }
      function eQ(e) {
        let { threadId: t, evalRun: r, settings: a, onUpdateSettings: l } = e,
          { 0: u, 1: d } = (0, o.useState)("chat"),
          { refetch: m } = (function (e) {
            let { threadId: t, threadUserId: r } = e,
              n = ew({ threadId: t, threadUserId: r }),
              s = n.data;
            return (
              (0, o.useEffect)(() => {
                if (t) {
                  var e;
                  ej.P3.setThread(
                    t,
                    null !== (e = null == s ? void 0 : s.turns) && void 0 !== e
                      ? e
                      : []
                  );
                }
              }, [t, s]),
              { refetch: n.refetch, isLoading: n.isLoading, isError: n.isError }
            );
          })({ threadId: t, threadUserId: void 0 });
        (0, o.useEffect)(() => {
          m();
        }, [m, r.status]);
        let p = (0, k.jsx)(k.Fragment, {});
        switch (u) {
          case "chat":
            p = (0, k.jsx)(c.e, {
              readyState: 1,
              hasSubmittedInitialQuery: !0,
              searchQuery: "",
              followupQuery: "",
              onUpdateSearchQuery: i(),
              onUpdateFollowupQuery: i(),
              onSubmitFollowup: i(),
              onSubmitSearch: i(),
              settings: a,
              onUpdateSetting: l,
              onReset: i(),
              onRetryQuery: i(),
            });
            break;
          case "details":
            p = (0, k.jsx)(eC, { evalRun: r });
            break;
          default:
            (0, n.Z)(u);
        }
        return (0, k.jsxs)("div", {
          className: "relative flex flex-col",
          children: [
            (0, k.jsx)("div", {
              className: "border-b p-2",
              children: (0, k.jsxs)(s.fC, {
                value: u,
                onValueChange: (e) => d(e),
                className: "flex gap-1",
                children: [
                  (0, k.jsx)(eV, { value: "chat", children: "Chat" }),
                  (0, k.jsx)(eV, { value: "details", children: "Details" }),
                ],
              }),
            }),
            p,
          ],
        });
      }
    },
    31863: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          FeedbackPage: function () {
            return N;
          },
        });
      var n,
        s,
        a = r(99945),
        l = r(85452),
        i = r(70187),
        o = r(61236),
        c = r(2428),
        u = r.n(c),
        d = r(26169),
        m = r.n(d),
        p = r(91530),
        h = r.n(p),
        f = r(41409),
        g = r(70079),
        x = r(21389),
        v = r(70451),
        b = r(25617),
        y = r(20735),
        j = r(49593),
        w = r(19216),
        A = r(20963),
        O = r(45456),
        k = r(35250);
      function _(e) {
        return m()(e) && ["link", "message", "turn"].includes(e)
          ? e
          : "message";
      }
      function N() {
        (0, O.e)();
        let e = _((0, f.useRouter)().query.type);
        return "turn" === e
          ? (0, k.jsx)(P, {})
          : "link" === e
            ? (0, k.jsx)(S, {})
            : (0, k.jsx)("div", { children: "Unsupported feedback type" });
      }
      function S() {
        var e, t;
        let r = (0, w.nn)(w.LW.firstTurn),
          n = (0, f.useRouter)(),
          [s, a] = u()(n.query.ids) ? n.query.ids : [],
          l = _(n.query.type),
          { data: i, isLoading: c } = (0, o.a)({
            queryKey: ["searchLinkFeedback", s, a],
            queryFn: () => (0, j.zq)(s, a),
            enabled: !!s && !!a,
          });
        return c || !i
          ? (0, k.jsx)(D, {})
          : (0, k.jsx)(E, {
              type: l,
              threadId: i.search_link.thread_id,
              threadUserId: a,
              searchQuery:
                null !== (e = null == r ? void 0 : r.user_query) && void 0 !== e
                  ? e
                  : "",
              rating: i.search_link_to_user.rating,
              tags:
                null !== (t = i.search_link_to_user.tags) && void 0 !== t
                  ? t
                  : [],
              feedbackText: i.search_link_to_user.text,
              highlightUrl: i.search_link.url,
            });
      }
      function P() {
        var e, t;
        let r = (0, w.nn)(w.LW.firstTurn),
          n = (0, f.useRouter)(),
          [s, a] = u()(n.query.ids) ? n.query.ids : [],
          l = _(n.query.type),
          { data: i, isLoading: c } = (0, o.a)({
            queryKey: ["searchTurnFeedback", s, a],
            queryFn: () => (0, j.a2)(s, a),
            enabled: !!s && !!a,
          });
        return c || !i
          ? (0, k.jsx)(D, {})
          : (0, k.jsx)(E, {
              type: l,
              threadId: i.search_turn.thread_id,
              threadUserId: a,
              searchQuery:
                null !== (e = null == r ? void 0 : r.user_query) && void 0 !== e
                  ? e
                  : "",
              highlightTurnIndex: i.search_turn.turn_index,
              rating: null == i ? void 0 : i.search_turn_to_user.rating,
              tags:
                null !==
                  (t = null == i ? void 0 : i.search_turn_to_user.tags) &&
                void 0 !== t
                  ? t
                  : [],
              feedbackText: null == i ? void 0 : i.search_turn_to_user.text,
            });
      }
      function E(e) {
        let {
            type: t,
            threadId: r,
            threadUserId: n,
            searchQuery: s,
            highlightTurnIndex: a,
            highlightUrl: l,
            rating: o,
            tags: c,
            feedbackText: u,
          } = e,
          { setThreadUserId: d } = (0, b.R)();
        (0, g.useEffect)(() => {
          d(n);
        }, [d, n]);
        let { refetch: m, isLoading: p } = (0, A.v)({
          threadId: r,
          threadUserId: n,
        });
        (0, g.useEffect)(() => {
          m();
        }, [m, r, n]);
        let f = "thumbsUp" === o ? i.go : i.W2;
        return (0, k.jsxs)("div", {
          className: "flex h-screen w-screen flex-col p-5",
          children: [
            p && (0, k.jsx)(D, {}),
            (0, k.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, k.jsx)(C, {
                  className: "flex flex-col gap-2",
                  children: (0, k.jsxs)("div", {
                    className: "flex items-center gap-2 font-medium",
                    children: [
                      "link" === t
                        ? "\uD83D\uDD17 Link Feedback"
                        : "\uD83D\uDD0D Message Feedback",
                      ":",
                      (0, k.jsx)(f, { className: "h-5 w-5" }),
                    ],
                  }),
                }),
                (0, k.jsxs)(C, {
                  children: [
                    (0, k.jsx)("span", {
                      className: "font-medium",
                      children: "Query:",
                    }),
                    " ",
                    s,
                  ],
                }),
                (0, k.jsxs)(C, {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, k.jsxs)("div", {
                      children: [
                        (0, k.jsx)("span", {
                          className: "font-medium",
                          children: "Feedback:",
                        }),
                        " ",
                        u,
                      ],
                    }),
                    (0, k.jsx)("div", {
                      className: "flex gap-1",
                      children: c.map((e) => (0, k.jsx)(R, { children: e }, e)),
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsx)("div", {
              className: "mt-4 h-full w-full flex-grow overflow-auto",
              children: (0, k.jsx)(v.e, {
                readyState: 1,
                hasSubmittedInitialQuery: !0,
                searchQuery: s,
                followupQuery: "",
                onUpdateSearchQuery: h(),
                onUpdateFollowupQuery: h(),
                onSubmitFollowup: h(),
                onSubmitSearch: h(),
                settings: y.Z,
                onUpdateSetting: h(),
                onReset: h(),
                onRetryQuery: h(),
                highlightTurnIndex: a,
                highlightUrl: l,
              }),
            }),
          ],
        });
      }
      let C = x.Z.div(
        n ||
          (n = (0, a.Z)([
            "rounded-md border border-token-border-medium p-3 flex-1",
          ]))
      );
      function D() {
        return (0, k.jsx)("div", {
          className: "mt-3 flex justify-center",
          children: (0, k.jsx)(l.Z, {}),
        });
      }
      let R = x.Z.div(
        s ||
          (s = (0, a.Z)([
            "rounded-md border bg-token-main-surface-tertiary px-1 text-xs text-token-text-primary",
          ]))
      );
    },
    83216: function (e, t, r) {
      "use strict";
      r.d(t, {
        M: function () {
          return a;
        },
        Y: function () {
          return l;
        },
      });
      var n,
        s = r(38801);
      let a =
          (((n = {}).searchTurnFeedbackButtonShown =
            "Search Turn Feedback Button Shown"),
          (n.searchTurnFeedbackSubmitted = "Search Turn Feedback Submitted"),
          (n.searchLinkFeedbackSubmitted = "Search Link Feedback Submitted"),
          (n.searchLinkShown = "Search Link Shown"),
          (n.searchLinkClicked = "Search Link Clicked"),
          (n.searchQuerySubmitted = "Search Query Submitted"),
          (n.searchFollowupSubmitted = "Search Followup Submitted"),
          (n.searchCitationHovered = "Search Citation Hovered"),
          (n.searchCitationClicked = "Search Citation Clicked"),
          n),
        l = {
          logEvent(e, t) {
            s.A.logEvent(e, t);
          },
        };
    },
    49593: function (e, t, r) {
      "use strict";
      r.d(t, {
        LC: function () {
          return v;
        },
        NK: function () {
          return x;
        },
        Nv: function () {
          return p;
        },
        a2: function () {
          return f;
        },
        dN: function () {
          return d;
        },
        gK: function () {
          return u;
        },
        k4: function () {
          return h;
        },
        lw: function () {
          return m;
        },
        mO: function () {
          return c;
        },
        zq: function () {
          return g;
        },
      });
      var n = r(18450),
        s = r(4466),
        a = r(5224),
        l = r(20724);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : i(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let c = async (e) => {
        let { queryKey: t } = e,
          [r, n] = t;
        if (n.length < 2) return [];
        let l = new URLSearchParams({ query_fragment: n });
        return s.c
          .get("".concat(a.rq, "/suggestions?").concat(l.toString()))
          .then((e) => e.suggestions)
          .catch(() => []);
      };
      async function u() {
        return (await s.c.post("".concat(a.rq, "/threads"), {})).thread.id;
      }
      async function d(e) {
        let {
            threadId: t,
            query: r,
            agentSettingsOverrides: n,
            metadata: l,
          } = e,
          i = m(n);
        return s.c.post(
          "".concat(a.rq, "/threads/").concat(t, "/turns?blocking=false"),
          o(
            o({}, i),
            {},
            { turn: o(o({}, i.turn), {}, { user_query: r }), user_metadata: l }
          )
        );
      }
      function m(e) {
        let t = {};
        return (
          e.rerank_labrador &&
            ("none" === e.rerank_labrador
              ? (t.rerank_labrador = null)
              : (t.rerank_labrador = e.rerank_labrador)),
          e.rerank_bing_boost && (t.rerank_bing_boost = e.rerank_bing_boost),
          e.rerank_quality_threshold &&
            (t.rerank_quality_threshold = e.rerank_quality_threshold),
          {
            turn: {
              search_results: {
                settings__: {
                  labrador_rerank_settings: t,
                  external_search_engine: e.search_engine,
                  robots_mode: e.robots_mode,
                },
              },
              image_search_results: {
                settings__: { robots_mode: e.robots_mode },
              },
              model_response: {
                settings__: { enable_multimodal: e.show_image_to_model },
              },
            },
            base_config: (function (e) {
              switch (e) {
                case "gpt-3.5":
                  return "sahara";
                case "gpt-4":
                  return "gpt4";
              }
              throw Error("Unknown model family: ".concat(e));
            })(e.model_family || l.tQ.GPT_3_5),
          }
        );
      }
      async function p(e) {
        let { threadId: t, threadUserId: r, isEval: n = !1 } = e,
          l = new URL(
            "".concat(a.rq, "/admin/threads/").concat(t, "/with_turns")
          );
        return (
          r && l.searchParams.append("thread_user_id", r),
          !0 === n && l.searchParams.append("is_eval", "true"),
          await s.c.get(l.toString())
        );
      }
      async function h(e) {
        let t = new FormData();
        return (
          t.append(
            "feedback",
            JSON.stringify({
              thread_id: e.threadId,
              turn_index: e.turnIndex,
              rating: e.rating,
              search_query: e.searchQuery,
              text: e.text,
              tags: e.tags,
              user_email: e.userEmail,
            })
          ),
          e.screenshot &&
            t.append(
              "file",
              new File([e.screenshot], "screenshot.jpeg", {
                type: "image/jpeg",
              })
            ),
          s.c.post("".concat(a.rq, "/feedback/turns"), t)
        );
      }
      async function f(e, t) {
        return s.c.get(
          "".concat(a.rq, "/feedback/turns/").concat(e, "/").concat(t)
        );
      }
      async function g(e, t) {
        return s.c.get(
          "".concat(a.rq, "/feedback/links/").concat(e, "/").concat(t)
        );
      }
      async function x(e) {
        let t = new FormData();
        return (
          e.screenshot &&
            t.append(
              "file",
              new File([e.screenshot], "screenshot.jpeg", {
                type: "image/jpeg",
              })
            ),
          t.append(
            "feedback",
            JSON.stringify({
              thread_id: e.threadId,
              url: e.url,
              title: e.title,
              snippet: e.snippet,
              rating: e.rating,
              search_query: e.searchQuery,
              text: e.text,
              tags: e.tags,
              user_email: e.userEmail,
            })
          ),
          s.c.post("".concat(a.rq, "/feedback/links"), t)
        );
      }
      function v(e) {
        s.c.post("".concat(a.rq, "/pre_search"), {
          query_fragment: e.query,
          metadata: e.metadata,
          type: "text",
        });
      }
    },
    68399: function (e, t, r) {
      "use strict";
      r.d(t, {
        W6: function () {
          return i;
        },
        bM: function () {
          return o;
        },
        vm: function () {
          return c;
        },
      });
      var n = r(18450),
        s = r(78103);
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      let l = { isSettingsModalOpen: !1, isDebugModalOpen: !1 },
        i = (0, s.ZP)()(() =>
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? a(Object(r), !0).forEach(function (t) {
                    (0, n.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : a(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
            }
            return e;
          })({}, l)
        ),
        o = {
          isSettingsModalOpen: (e) => e.isSettingsModalOpen,
          isDebugModalOpen: (e) => e.isDebugModalOpen,
        },
        c = {
          toggleSettingsModalOpen() {
            i.setState((e) => ({
              isSettingsModalOpen: !e.isSettingsModalOpen,
            }));
          },
          toggleDebugModalOpen() {
            i.setState((e) => ({ isDebugModalOpen: !e.isDebugModalOpen }));
          },
        };
    },
    19216: function (e, t, r) {
      "use strict";
      r.d(t, {
        LW: function () {
          return d;
        },
        P3: function () {
          return m;
        },
        nn: function () {
          return u;
        },
      });
      var n = r(18450),
        s = r(51362),
        a = r(66315),
        l = r(78103);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : i(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let c = { thread: null },
        u = (0, l.ZP)((0, s.n)(() => o({}, c))),
        d = {
          threadId: (e) => {
            var t, r;
            return null !==
              (t = null === (r = e.thread) || void 0 === r ? void 0 : r.id) &&
              void 0 !== t
              ? t
              : null;
          },
          turns: (e) => {
            var t, r;
            return null !==
              (t =
                null === (r = e.thread) || void 0 === r ? void 0 : r.turns) &&
              void 0 !== t
              ? t
              : [];
          },
          firstTurn: (e) => (null != e.thread ? e.thread.turns[0] : void 0),
          lastTurn: (e) =>
            null != e.thread
              ? e.thread.turns[e.thread.turns.length - 1]
              : void 0,
        },
        m = {
          newThread(e) {
            u.setState((t) => {
              t.thread = { id: e, turns: [] };
            });
          },
          appendTurn(e, t) {
            u.setState((r) => {
              let n = r.thread;
              if (!n) {
                a.U.addError("got appendTurn with no current thread");
                return;
              }
              if (n.id !== e) {
                a.U.addError("got appendTurn for wrong thread", {
                  threadId: e,
                  newThreadId: n.id,
                });
                return;
              }
              n.turns.push(t);
            });
          },
          updateTurn(e, t) {
            u.setState((r) => {
              let n = r.thread;
              if (!n) {
                a.U.addError("got updateTurn with no current thread");
                return;
              }
              let s = n.turns[e];
              if (!s) {
                a.U.addError("turn not found", {
                  turnIndex: e,
                  turns: n.turns,
                });
                return;
              }
              t(s);
            });
          },
          clearThread() {
            u.setState(() => o({}, c));
          },
          setThread(e, t) {
            u.setState((r) => {
              r.thread = { id: e, turns: t };
            });
          },
        };
    },
    20724: function (e, t, r) {
      "use strict";
      var n, s, a;
      r.d(t, {
        K1: function () {
          return o;
        },
        lv: function () {
          return i;
        },
        mX: function () {
          return c;
        },
        tQ: function () {
          return l;
        },
      });
      let l = (((n = {}).GPT_3_5 = "gpt-3.5"), (n.GPT_4 = "gpt-4"), n),
        i =
          (((s = {}).Bing = "bing"),
          (s.Sydney = "sydney"),
          (s.Fortis = "fortis"),
          s),
        o =
          (((a = {}).Conservative = "conservative"),
          (a.Aggressive = "aggressive"),
          a);
      function c(e) {
        return (
          "object" == typeof e &&
          (!e.rerank_labrador || "string" == typeof e.rerank_labrador)
        );
      }
    },
    72150: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(70079);
      function s(e, t, r) {
        let { 0: s, 1: a } = (0, n.useState)(() => {
          try {
            let t = JSON.parse(window.localStorage.getItem(e) || "");
            if (!r(t)) throw Error("Invalid data");
            return t;
          } catch (e) {
            return t;
          }
        });
        return (
          (0, n.useEffect)(() => {
            window.localStorage.setItem(e, JSON.stringify(s));
          }, [e, s]),
          [s, a]
        );
      }
    },
    20963: function (e, t, r) {
      "use strict";
      r.d(t, {
        Y: function () {
          return i;
        },
        v: function () {
          return o;
        },
      });
      var n = r(61236),
        s = r(70079),
        a = r(49593),
        l = r(19216);
      function i(e) {
        let { threadId: t, threadUserId: r, refetchOnMount: s } = e;
        return (0, n.a)({
          queryKey: ["thread", t, r],
          queryFn: async () => {
            if (!t) return { thread: null, turns: null };
            let e = await (0, a.Nv)({ threadId: t, threadUserId: r }),
              n = e.turns;
            return { thread: e, turns: n };
          },
          enabled: !!t,
          refetchOnMount: s,
        });
      }
      function o(e) {
        let { threadId: t, threadUserId: r } = e,
          n = i({ threadId: t, threadUserId: r }),
          a = n.data;
        return (
          (0, s.useEffect)(() => {
            if (t) {
              var e;
              l.P3.setThread(
                t,
                null !== (e = null == a ? void 0 : a.turns) && void 0 !== e
                  ? e
                  : []
              );
            }
          }, [t, a]),
          { refetch: n.refetch, isLoading: n.isLoading, isError: n.isError }
        );
      }
    },
    34796: function (e, t, r) {
      "use strict";
      r.d(t, {
        r: function () {
          return a;
        },
      });
      var n = r(20735),
        s = r(72150);
      function a() {
        return (0, s.Z)("SONIC_SETTINGS_20240404", n.Z, n.Wt);
      }
    },
    45456: function (e, t, r) {
      "use strict";
      function n() {
        var e;
        null === (e = document.querySelector("html")) ||
          void 0 === e ||
          e.classList.add("snc");
      }
      r.d(t, {
        e: function () {
          return n;
        },
      });
    },
    90240: function (e, t, r) {
      "use strict";
      r.d(t, {
        PX: function () {
          return s;
        },
        XB: function () {
          return a;
        },
      });
      var n = r(43041);
      let s = { latitude: null, longitude: null, locationAccuracy: null };
      function a(e) {
        if (!e) {
          l();
          return;
        }
        navigator.geolocation.getCurrentPosition(
          (e) => {
            n.bX.setCookie(
              n.cn.LastLocation,
              JSON.stringify({
                latitude: e.coords.latitude,
                longitude: e.coords.longitude,
                locationAccuracy: e.coords.accuracy,
              }),
              { maxAge: 2592e3 }
            );
          },
          () => {
            l();
          }
        );
      }
      function l() {
        n.bX.setCookie(n.cn.LastLocation, JSON.stringify(s), {
          maxAge: 2592e3,
        });
      }
    },
    78375: function (e, t, r) {
      "use strict";
      r.d(t, {
        F: function () {
          return a;
        },
        K: function () {
          return s;
        },
      });
      var n = r(72541);
      function s(e) {
        var t, r, n, s, a, l, i;
        if (null !== (t = e.finance_widget) && void 0 !== t && t.price)
          return {
            type: "finance",
            status: e.finance_widget.status,
            data: e.finance_widget,
          };
        if (
          null !== (r = e.weather_widget) &&
          void 0 !== r &&
          r.forecast_response
        )
          return {
            type: "weather",
            status: e.weather_widget.status,
            data: e.weather_widget.forecast_response,
          };
        if (null !== (n = e.calculator_widget) && void 0 !== n && n.expression)
          return {
            type: "calculator",
            status: "done",
            data: {
              expression: e.calculator_widget.expression,
              status: e.calculator_widget.status,
              result: e.calculator_widget.result,
            },
          };
        if (null !== (s = e.sports_widget) && void 0 !== s && s.standings)
          return {
            type: "sports-standings",
            status: e.sports_widget.status,
            data: e.sports_widget.standings,
            displayOptions: { hideDivider: !0 },
          };
        if (
          null !== (a = e.sports_widget) &&
          void 0 !== a &&
          a.schedule &&
          e.sports_widget.schedule.games.length > 0
        )
          return {
            type: "sports-schedule",
            status: e.sports_widget.status,
            data: e.sports_widget.schedule,
            displayOptions: { hideDivider: !0 },
          };
        if (null !== (l = e.timezone_widget) && void 0 !== l && l.time_at)
          return {
            type: "time-difference",
            status: e.timezone_widget.status,
            data: e.timezone_widget.time_at,
          };
        if (null !== (i = e.news_widget) && void 0 !== i && i.articles)
          return {
            type: "news",
            status: e.news_widget.status,
            data: e.news_widget,
          };
        return null;
      }
      function a(e, t) {
        if (!e) return null;
        let r = [];
        return (e.name && r.push(e.name),
        e.state && e.name !== e.state && r.push(e.state),
        !e.name && e.country && e.country === e.name && r.push(e.country),
        r.length > 0)
          ? r.join(", ")
          : t && e.timezone && "string" == typeof e.timezone
            ? (0, n.Z)(t, "zzz", { timeZone: e.timezone })
            : null;
      }
    },
    63667: function (e, t, r) {
      "use strict";
      let n;
      r.r(t),
        r.d(t, {
          DO_NOT_IMPORT_VoiceModeButton: function () {
            return W;
          },
          DO_NOT_IMPORT_VoiceModeLayout: function () {
            return ej;
          },
        });
      var s,
        a,
        l,
        i,
        o = r(85452),
        c = r(86263),
        u = r(89899),
        d = r(95407),
        m = r(52392),
        p = r(63605),
        h = r(34594),
        f = r(19841),
        g = r(70079),
        x = r(9063);
      let v =
          (((s = {}).StateUpdate = "state_update"),
          (s.ActionRequest = "action_request"),
          (s.ConversationUpdate = "conversation_update"),
          (s.RelayMessage = "relay_message"),
          (s.Unknown = "unknown"),
          s),
        b =
          (((a = {}).StartListeningIntently = "start_listening"),
          (a.StopListeningIntently = "stop_listening"),
          (a.HaltAllActivity = "stop_speaking"),
          (a.ResumeListening = "resume_listening"),
          (a.RelayMessage = "relay_message"),
          a),
        y =
          (((l = {}).Idle = "idle"),
          (l.Connected = "connected"),
          (l.Halted = "halted"),
          (l.Listening = "listening"),
          (l.ListeningIntently = "listening_intently"),
          (l.Thinking = "thinking"),
          (l.Speaking = "speaking"),
          l);
      var j = r(18450),
        w = r(61107),
        A = r(4466);
      class O {
        static async getVoiceToken(e) {
          return A.c.post(
            "".concat("https://chat.openai.com/voice", "/get_token"),
            e
          );
        }
      }
      var k = r(78103),
        _ = r(25229),
        N = r(51362);
      class S {
        log(e) {}
        debug() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          this.log("debug", ...t);
        }
        error() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          this.log("error", ...t);
        }
      }
      let P = new S();
      function E(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(r), !0).forEach(function (t) {
                (0, j.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : E(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let D = {
          conversationId: null,
          isActivityHalted: !1,
          isStarting: !1,
          dev: { room: null },
          credentials: { token: null, url: null, e2eeKey: null },
          server: {
            actions: null,
            connectionState: null,
            remoteState: null,
            messages: [],
          },
        },
        R = (0, k.ZP)((0, _.XR)((0, N.n)(() => D)));
      function M() {
        return R(
          (e) =>
            !!(
              e.credentials.token &&
              e.credentials.url &&
              e.credentials.e2eeKey &&
              e.server.remoteState
            )
        );
      }
      function T(e) {
        let { voiceName: t, voiceMainLanguage: r } = (0, w.SK)(),
          n = R((e) => e.isStarting),
          s = M(),
          a = (0, g.useCallback)(() => {
            s && Z(null);
          }, [s]);
        return {
          startVoiceMode: (0, g.useCallback)(
            async (n) => {
              if (!s) {
                R.setState((e) => {
                  e.isStarting = !0;
                });
                try {
                  let s = await O.getVoiceToken(
                    C({ voice: t, language_code: r }, n)
                  );
                  s &&
                    s.token &&
                    s.url &&
                    s.e2ee_key &&
                    Z({
                      conversationId: e,
                      credentials: C(C({}, s), {}, { e2eeKey: s.e2ee_key }),
                    });
                } catch (e) {
                  throw (
                    (P.debug("failed to get voice token", e),
                    R.setState((e) => {
                      e.isStarting = !1;
                    }),
                    e)
                  );
                }
              }
            },
            [s, t, r, e]
          ),
          stopVoiceMode: a,
          isVoiceModeStarting: n,
          isVoiceModeActive: s,
        };
      }
      function Z(e) {
        if (e) {
          let { credentials: t, conversationId: r } = e;
          P.debug("setting credentials", e),
            R.setState((e) => {
              (e.conversationId = r), (e.credentials = t);
            });
          return;
        }
        P.debug("clearing credentials"), L();
      }
      function L() {
        R.setState(D);
      }
      var I = r(67431),
        F = r(98431);
      function U(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function z() {
        let e = (0, F.fZ)(),
          t = (0, g.useRef)({
            debug: function () {
              for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                r[n] = arguments[n];
              return P.debug("[".concat(e.name, "]"), ...r);
            },
            encoder: new TextEncoder(),
            decoder: new TextDecoder(),
          }).current;
        return (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? U(Object(r), !0).forEach(function (t) {
                  (0, j.Z)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : U(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
          }
          return e;
        })({ room: e }, t);
      }
      function q(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(r), !0).forEach(function (t) {
                (0, j.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : q(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      var Q = r(13106);
      function B(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? B(Object(r), !0).forEach(function (t) {
                (0, j.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : B(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      let H = (0, g.memo)(function () {
        return (
          !(function () {
            let { room: e, debug: t, decoder: r } = z(),
              n = (function () {
                let { debug: e } = z(),
                  t = R((e) => e.conversationId);
                return (0, g.useCallback)(async () => {
                  if (t) {
                    e("refetch conversationId ".concat(t));
                    try {
                      await (0, p.Um)(t, !0);
                    } catch (r) {
                      let t = "failed to update conversation";
                      e(t, r), d.m.danger(t);
                    }
                  }
                }, [t, e]);
              })();
            (0, g.useEffect)(() => {
              let s = async (r) => {
                  let { new_state: n } = r,
                    s = [y.Listening, y.ListeningIntently];
                  t("new state", n),
                    s.includes(n)
                      ? (t("unmuting microphone"),
                        await e.localParticipant.setMicrophoneEnabled(!0))
                      : (t("muting microphone"),
                        await e.localParticipant.setMicrophoneEnabled(!1)),
                    R.setState((e) => {
                      e.server.remoteState = n;
                    });
                },
                a = async (a) => {
                  let l;
                  try {
                    (l = JSON.parse(r.decode(a))), t("data recevied", l);
                  } catch (e) {
                    t("error parsing data", e);
                    return;
                  }
                  switch (
                    (R.setState(
                      (e) => (
                        e.server.messages.push(
                          V(
                            V({}, l),
                            {},
                            { timestamp: new Date(), source: "remote" }
                          )
                        ),
                        e
                      )
                    ),
                    l.type)
                  ) {
                    case v.StateUpdate:
                      t("state update", l.payload);
                      let { new_state: i, delay_s: o } = l.payload;
                      i === y.Thinking &&
                        o &&
                        (t(
                          ""
                            .concat(e.name, " delay thinking state by ")
                            .concat(o, " seconds")
                        ),
                        s({ new_state: y.ListeningIntently, delay_s: o }),
                        await new Promise((e) => setTimeout(e, 1e3 * o))),
                        s(l.payload);
                      break;
                    case v.ConversationUpdate:
                      t("conversation update", l.payload), await n();
                  }
                },
                l = (e, r) => {
                  t("track published", e, r);
                },
                i = () => {
                  t("disconnected"), L();
                };
              return (
                e.on(I.TQ.DataReceived, a),
                e.on(I.TQ.TrackPublished, l),
                e.on(I.TQ.Disconnected, i),
                () => {
                  e.off(I.TQ.DataReceived, a),
                    e.off(I.TQ.TrackPublished, l),
                    e.off(I.TQ.Disconnected, i);
                }
              );
            }, [!1, e, n, t, r]);
          })(),
          (function () {
            let { room: e } = z();
            (0, g.useEffect)(() => {
              R.setState((t) => {
                t.dev.room = e;
              });
            }, [e]);
          })(),
          (function () {
            let { room: e } = z(),
              t = (0, F.z1)(e);
            (0, g.useEffect)(() => {
              R.setState((e) => {
                e.server.connectionState = t;
              });
            }, [t]);
          })(),
          (function () {
            let { room: e, debug: t, encoder: r } = z();
            (0, g.useEffect)(() => {
              let n = !!R.getState().server.actions;
              if (e && !n) {
                let n = async (n) => {
                  t("publishing action", n);
                  let s = { type: v.ActionRequest, payload: { action: n } };
                  await e.localParticipant.publishData(
                    r.encode(JSON.stringify(s)),
                    { reliable: !0 }
                  ),
                    R.setState((e) => {
                      e.server.messages.push(
                        G(
                          G({}, s),
                          {},
                          { timestamp: new Date(), source: "local" }
                        )
                      );
                    });
                };
                R.setState((e) => {
                  e.server.actions = {
                    [b.StartListeningIntently]: () =>
                      n(b.StartListeningIntently),
                    [b.StopListeningIntently]: () => n(b.StopListeningIntently),
                    [b.HaltAllActivity]: () => n(b.HaltAllActivity),
                    [b.ResumeListening]: () => n(b.ResumeListening),
                    [b.RelayMessage]: () => n(b.RelayMessage),
                  };
                });
              }
            }, [e, t, r]);
          })(),
          (function () {
            let e = M();
            (0, g.useEffect)(
              () => (
                Q.tN.setState({ isVoiceActive: e }),
                () => {
                  Q.tN.setState({ isVoiceActive: !1 });
                }
              ),
              [e]
            );
          })(),
          !(function () {
            let { room: e, debug: t } = z(),
              r = e.getActiveDevice("audioinput"),
              n = e.getActiveDevice("audiooutput");
            (0, g.useEffect)(() => {
              t("devices: input ".concat(r, ", output ").concat(n)),
                (async function () {
                  let s = async () => {
                      "default" !== r &&
                        (t("switching audio input to default"),
                        await e.switchActiveDevice("audioinput", "default"));
                    },
                    a = async () => {
                      "default" !== n &&
                        (t("switching audio output to default"),
                        await e.switchActiveDevice("audiooutput", "default"));
                    };
                  await Promise.all([s(), a()]);
                })();
            }, [r, n, t, e]),
              (0, g.useEffect)(() => {
                async function r() {
                  t("audio devices changed"),
                    Promise.all(
                      ["audioinput", "audiooutput"].map(async (r) => {
                        let n = await I.du.getLocalDevices(r),
                          s = e.getActiveDevice(r);
                        if (!n.find((e) => e.deviceId === s)) {
                          let s = n.find((e) => "default" === e.deviceId),
                            a = null;
                          s ? (a = s.deviceId) : n[0] && (a = n[0].deviceId),
                            t("switching ".concat(r, " to ").concat(a)),
                            a && (await e.switchActiveDevice(r, a));
                        }
                      })
                    );
                }
                if (navigator)
                  return (
                    navigator.mediaDevices.addEventListener("devicechange", r),
                    () => {
                      navigator.mediaDevices.removeEventListener(
                        "devicechange",
                        r
                      );
                    }
                  );
              }, [e, t]);
          })(),
          null
        );
      });
      var K = r(35250);
      function W(e) {
        var t, r;
        let {
            iconClassName: n = "icon-sm",
            className: s,
            conversationId: a,
          } = e,
          l =
            null === (t = (0, h.sB)(h.tz.VoiceMode)) || void 0 === t
              ? void 0
              : t.value,
          i = (0, p.XK)(a),
          o = (0, m.Bv)(a),
          c =
            null === (r = p.iN.getCurrentNode(a)) || void 0 === r
              ? void 0
              : r.id;
        return i && l && o
          ? (0, K.jsx)(X, {
              conversationId: i,
              className: s,
              iconClassName: n,
              modelId: o,
              parentMessageId: c,
            })
          : null;
      }
      let X = (0, g.memo)(function (e) {
        let {
            conversationId: t,
            className: r,
            iconClassName: n,
            modelId: s,
            parentMessageId: a,
          } = e,
          {
            isVoiceModeActive: l,
            isVoiceModeStarting: i,
            toggleVoiceMode: m,
          } = (function (e, t, r) {
            let n = (0, x.Z)(),
              {
                startVoiceMode: s,
                isVoiceModeStarting: a,
                isVoiceModeActive: l,
              } = T(e);
            return {
              isVoiceModeActive: l,
              isVoiceModeStarting: a,
              toggleVoiceMode: (0, g.useCallback)(async () => {
                try {
                  await s({
                    conversation_id: e,
                    parent_message_id: r,
                    model_slug: t,
                  });
                } catch (e) {
                  d.m.danger(
                    n.formatMessage({
                      id: "useVoiceModeButtonAction.error",
                      defaultMessage: "Failed to start voice mode",
                    })
                  );
                }
              }, [s, e, r, t, n]),
            };
          })(t, s, a);
        return l
          ? null
          : (0, K.jsx)(u.y4, {
              disabled: i,
              onClick: m,
              className: (0, f.default)("w-fit", r),
              children: i
                ? (0, K.jsx)(o.Z, { className: n })
                : (0, K.jsx)(c.VWR, { className: n }),
            });
      });
      var Y = r(92386),
        J = r(24343),
        $ = r(83737),
        ee = r(29287);
      function et() {
        return (0, K.jsxs)("div", {
          className: "flex flex-row items-center gap-2",
          children: [
            (0, K.jsx)(c.uAs, { className: "icon-sm" }),
            (0, K.jsx)(er, {}),
          ],
        });
      }
      function er() {
        let e;
        let t = R((e) => e.server.remoteState);
        if (!t) return null;
        switch (t) {
          case y.Listening:
          case y.ListeningIntently:
            e = "Listening";
            break;
          case y.Thinking:
            e = "Thinking";
            break;
          case y.Speaking:
            e = "Speaking";
            break;
          default:
            e = null;
        }
        return e ? (0, K.jsx)("div", { className: "mr-2", children: e }) : null;
      }
      function en(e) {
        let { conversationId: t } = e,
          r = (0, p.XK)(t);
        return r
          ? (0, K.jsxs)("div", {
              className: "flex flex-row items-center gap-3",
              children: [
                (0, K.jsx)(et, {}),
                (0, K.jsx)(ea, {}),
                (0, K.jsx)(es, { conversationId: r }),
              ],
            })
          : null;
      }
      function es(e) {
        let { conversationId: t } = e,
          { stopVoiceMode: r } = T(t);
        return (0, K.jsx)(el, {
          color: "none",
          onClick: r,
          className:
            "overflow-hidden rounded-full border-none p-0 text-token-text-primary",
          children: (0, K.jsx)(c.niP, { className: "icon-2xl" }),
        });
      }
      function ea() {
        let { isActivityHalted: e, toggleVoiceActivity: t } = (function () {
            let e = R((e) => e.isActivityHalted),
              t = R((e) => e.server.actions);
            return {
              toggleVoiceActivity: (0, g.useCallback)(() => {
                R.getState().isActivityHalted
                  ? (null == t || t[b.ResumeListening](),
                    R.setState((e) => {
                      e.isActivityHalted = !1;
                    }))
                  : (null == t || t[b.HaltAllActivity](),
                    R.setState((e) => {
                      e.isActivityHalted = !0;
                    }));
              }, [t]),
              isActivityHalted: e,
            };
          })(),
          r = null;
        return (
          (r = e ? c.o1U : c.STQ),
          (0, K.jsx)(el, {
            color: "none",
            className:
              "overflow-hidden rounded-full border-none p-0 text-token-text-primary",
            onClick: t,
            children: (0, K.jsx)(r, { className: "icon-2xl" }),
          })
        );
      }
      let el = (0, $.E)(ee.z);
      var ei = r(99503),
        eo = r(56115);
      function ec() {
        let e = R((e) => e.server.messages);
        return (0, K.jsx)($.E.div, {
          className:
            "hidden h-full max-w-[400px] overflow-hidden border-l border-l-token-sidebar-surface-secondary bg-token-main-surface-secondary pt-16 shadow-inner md:block",
          initial: { opacity: 0, x: 420, width: "0px" },
          animate: { opacity: 1, x: 0, width: "400px" },
          exit: { opacity: 0, x: 420, width: "0px" },
          transition: { type: "tween" },
          children: (0, K.jsx)(J.M, {
            children: e.length
              ? (0, K.jsxs)($.E.div, {
                  className: "flex h-full w-full flex-col",
                  initial: { opacity: 0, x: -100 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: -100 },
                  children: [
                    (0, K.jsxs)("div", {
                      children: [
                        (0, K.jsx)("h3", {
                          className:
                            "p-4 py-2 text-lg font-semibold text-token-text-secondary",
                          children: "Room Stats",
                        }),
                        (0, K.jsx)(eu, {}),
                      ],
                    }),
                    (0, K.jsx)("h3", {
                      className:
                        "p-4 py-2 text-lg font-semibold text-token-text-secondary",
                      children: "Messages",
                    }),
                    (0, K.jsx)("div", {
                      className: "grow overflow-hidden",
                      children: (0, K.jsx)(Y.I, {
                        children: (0, K.jsx)($.E.ul, {
                          className:
                            "pointer-events-none flex w-full flex-col gap-4 pb-24 pt-4",
                          initial: "initial",
                          animate: "animate",
                          exit: "exit",
                          variants: ex,
                          transition: {
                            delayChildren: 0.25,
                            staggerChildren: 0.05,
                          },
                          children: e.map((e, t) =>
                            (0, K.jsx)(eg, { index: t, message: e }, t)
                          ),
                        }),
                      }),
                    }),
                  ],
                })
              : null,
          }),
        });
      }
      function eu() {
        let e = R((e) => e.dev.room);
        if (!e) return null;
        let t = e.numParticipants,
          r = e.activeSpeakers;
        return (0, K.jsx)("div", {
          className: "px-4 pb-8",
          children: (0, K.jsxs)("div", {
            className: "flex flex-col flex-nowrap gap-2",
            children: [
              (0, K.jsx)(ed, {}),
              (0, K.jsx)(eh, { text: "Attendees" }),
              (0, K.jsx)(ef, { name: "Participants", text: t }),
              (0, K.jsx)(ef, { name: "Speakers", text: r.length }),
              (0, K.jsx)(em, {}),
            ],
          }),
        });
      }
      function ed() {
        let e = R((e) => e.server.connectionState),
          t = R((e) => e.dev.room),
          { 0: r, 1: n } = (0, g.useState)("Unknown"),
          s = null == t ? void 0 : t.localParticipant;
        return (
          (0, g.useEffect)(() => {
            if (s) {
              let e = (e) => {
                n(e);
              };
              return (
                s.on("connectionQualityChanged", e),
                () => {
                  s.off("connectionQualityChanged", e);
                }
              );
            }
          }, [s]),
          (0, K.jsxs)(K.Fragment, {
            children: [
              (0, K.jsx)(eh, { text: "Connection" }),
              (0, K.jsx)(ef, { name: "Quality", text: String(r) }),
              (0, K.jsx)(ef, { name: "State", text: String(e) }),
            ],
          })
        );
      }
      function em() {
        let e = R((e) => e.dev.room),
          { 0: t, 1: r } = (0, g.useState)(null),
          { 0: n, 1: s } = (0, g.useState)(null),
          a = null == e ? void 0 : e.getActiveDevice("audioinput"),
          l = null == e ? void 0 : e.getActiveDevice("audiooutput");
        return (
          (0, g.useEffect)(() => {
            (async function () {
              var e, t;
              let n = await I.du.getLocalDevices("audioinput"),
                i = await I.du.getLocalDevices("audiooutput"),
                o = n.find((e) => e.deviceId === a),
                c = i.find((e) => e.deviceId === l);
              r(
                null !== (e = null == o ? void 0 : o.label) && void 0 !== e
                  ? e
                  : "Unknown"
              ),
                s(
                  null !== (t = null == c ? void 0 : c.label) && void 0 !== t
                    ? t
                    : "Unknown"
                );
            })();
          }, [a, l]),
          (0, K.jsxs)(K.Fragment, {
            children: [
              (0, K.jsx)(eh, { text: "Devices" }),
              (0, K.jsx)(ef, {
                icon: c.ZO8,
                name: "Input",
                text: null != t ? t : "Unknown",
              }),
              (0, K.jsx)(ef, {
                icon: c.VWR,
                name: "Output",
                text: null != n ? n : "Unknown",
              }),
              (0, K.jsx)(eh, { text: "Monitors" }),
              (0, K.jsx)(ef, {
                name: "Mic level",
                icon: ei.Z,
                text: "unknown",
                content: (0, K.jsx)(ep, {}),
              }),
            ],
          })
        );
      }
      function ep() {
        let e = R((e) => {
          var t;
          return null === (t = e.dev.room) || void 0 === t
            ? void 0
            : t.localParticipant.audioLevel;
        });
        return (0, K.jsx)("div", {
          className: "flex flex-row flex-nowrap items-center gap-1",
          children: (0, K.jsx)("div", {
            className: "flex flex-row flex-nowrap items-center gap-1",
            children: Array.from({ length: 10 }).map((t, r) =>
              (0, K.jsx)(
                "div",
                {
                  className: "h-2 w-2 rounded-full ".concat(
                    (null != e ? e : 0) > 0.1 * r
                      ? "bg-gray-500"
                      : "bg-token-main-surface-tertiary"
                  ),
                },
                r
              )
            ),
          }),
        });
      }
      function eh(e) {
        let { text: t } = e;
        return (0, K.jsx)("h4", {
          className: "text-md font-semibold",
          children: t,
        });
      }
      function ef(e) {
        var t;
        return (0, K.jsxs)("div", {
          className: "flex flex-row flex-nowrap items-center gap-2",
          children: [
            (0, K.jsx)("span", {
              className: "opacity-85",
              children: e.icon
                ? (0, K.jsx)(e.icon, { className: "h-[0.75rem] w-[0.75rem]" })
                : "".concat(e.name, ":"),
            }),
            null !== (t = e.content) && void 0 !== t
              ? t
              : (0, K.jsx)("span", {
                  className:
                    "line-clamp-1 rounded-lg bg-token-main-surface-tertiary p-0.5 px-1 font-mono text-xs",
                  children: e.text,
                }),
          ],
        });
      }
      function eg(e) {
        let { index: t, message: r } = e,
          { 0: n, 1: s } = (0, g.useState)(!1),
          a = null;
        switch (r.source) {
          case "remote":
            a = c.veu;
            break;
          case "local":
            a = c.Hf3;
        }
        return (0, K.jsx)($.E.div, {
          className: "w-full border-t border-token-main-surface-tertiary p-4",
          variants: ex,
          children: (0, K.jsxs)("div", {
            className:
              "flex w-full flex-col gap-2 rounded-lg bg-token-main-surface-secondary",
            children: [
              (0, K.jsxs)("div", {
                className:
                  "font-mono text-[0.65rem] font-semibold text-token-text-secondary",
                children: [
                  (0, K.jsxs)("div", {
                    className:
                      "flex w-full flex-row flex-nowrap items-center justify-between",
                    children: [
                      (0, K.jsxs)("div", {
                        className:
                          "flex flex-row flex-nowrap items-center gap-1",
                        children: [
                          (0, K.jsx)(a, {
                            className: "h-3 w-3 text-token-text-secondary",
                          }),
                          (0, K.jsx)("span", {
                            children: " | "
                              .concat(t + 1, " | ")
                              .concat((0, eo.Z)(r.timestamp, "H:m:s:SS")),
                          }),
                        ],
                      }),
                      (0, K.jsx)("div", {
                        className:
                          "flex flex-row flex-nowrap items-center gap-2",
                        children: (0, K.jsx)(ee.z, {
                          className: "rounded-full p-0.5",
                          color: "none",
                          size: "xsmall",
                          onClick: () => s((e) => !e),
                          children: (0, K.jsx)(c.eOB, {
                            className: "transform transition-transform ".concat(
                              n ? "rotate-180" : ""
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, K.jsx)("div", {
                    className: "mt-1 text-xs font-bold",
                    children: r.type,
                  }),
                ],
              }),
              (0, K.jsx)(J.M, {
                children: n
                  ? (0, K.jsx)($.E.pre, {
                      initial: { opacity: 0, transform: "blur(4px)" },
                      animate: { opacity: 1, transform: "blur(0px)" },
                      exit: { opacity: 0, transform: "blur(4px)" },
                      className:
                        "overflow-x-auto rounded-md bg-token-main-surface-tertiary p-2 text-xs text-token-text-secondary",
                      children: JSON.stringify(r.payload, null, 2),
                    })
                  : null,
              }),
            ],
          }),
        });
      }
      let ex = {
        hidden: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
      };
      function ev(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ev(Object(r), !0).forEach(function (t) {
                (0, j.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ev(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      (i = Worker),
        (n = class extends i {
          constructor(e, t) {
            let r = String(e);
            super(
              r.includes("://") && !r.startsWith(location.origin)
                ? URL.createObjectURL(
                    new Blob(
                      [
                        "importScripts=((i)=>(...a)=>i(...a.map((u)=>''+new URL(u,\""
                          .concat(r, '"))))(importScripts);importScripts("')
                          .concat(r, '")'),
                      ],
                      { type: "text/javascript" }
                    )
                  )
                : e,
              t
            );
          }
        });
      let ey = (0, g.memo)(function () {
        let e = (0, g.useRef)({ keyProvider: new I.P6() }).current,
          { 0: t, 1: s } = (0, g.useState)(!1),
          { token: a, url: l, e2eeKey: i } = R((e) => e.credentials),
          o = (function () {
            let e = (0, g.useCallback)(() => {
              P.debug("connected to room");
              let e = R.subscribe(
                (e) => !!e.server.remoteState,
                (t) => {
                  t &&
                    (R.setState((e) => {
                      e.isStarting = !1;
                    }),
                    e());
                }
              );
            }, []);
            return {
              onConnected: e,
              onDisconnected: (0, g.useCallback)(() => {
                P.debug("disconnected from room"), L();
              }, []),
              onError: (0, g.useCallback)((e) => {
                d.m.danger("Something went wrong"),
                  P.error("an error occured within the room", e),
                  L();
              }, []),
              onEncryptionError: (0, g.useCallback)((e) => {
                d.m.danger("Something went wrong"),
                  P.error("an encryption error occured within the room", e),
                  L();
              }, []),
            };
          })();
        return ((0, g.useEffect)(() => {
          let r = a && l && i;
          !t && r
            ? e.keyProvider.setKey(i).then(() => {
                s(!0);
              })
            : t && !r && s(!1);
        }, [a, l, i, t, e]),
        t && a && l)
          ? (0, K.jsxs)(
              F.IC,
              eb(
                eb({}, o),
                {},
                {
                  connect: !0,
                  token: a,
                  serverUrl: l,
                  audio: {
                    deviceId: { ideal: "default", exact: "default" },
                    noiseSuppression: !0,
                    echoCancellation: !0,
                  },
                  options: {
                    e2ee: {
                      keyProvider: e.keyProvider,
                      worker: new n(r.tu(new URL(r.p + r.u(1087), r.b))),
                    },
                  },
                  children: [(0, K.jsx)(H, {}), (0, K.jsx)(F.Z5, {})],
                }
              )
            )
          : null;
      });
      function ej(e) {
        let { conversationId: t, renderTurns: r } = e,
          { 0: n, 1: s } = (0, g.useState)(!1),
          a = M();
        return (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsx)(J.M, {
              children: a
                ? (0, K.jsx)($.E.div, {
                    className:
                      "fixed left-0 top-0 z-50 flex h-full w-full flex-col bg-token-main-surface-primary",
                    initial: "hidden",
                    animate: "visible",
                    exit: "hidden",
                    variants: ew,
                    children: (0, K.jsxs)($.E.div, {
                      className: "relative h-full w-full",
                      variants: ew,
                      children: [
                        (0, K.jsxs)($.E.div, {
                          variants: ew,
                          className: "flex h-full w-full flex-nowrap gap-2",
                          children: [
                            (0, K.jsx)("div", {
                              className: "flex h-full w-full flex-col",
                              children: (0, K.jsx)(Y.I, {
                                children: (0, K.jsx)("div", {
                                  className: "pointer-events-none pb-24 pt-9",
                                  children: r(),
                                }),
                              }),
                            }),
                            (0, K.jsx)(J.M, {
                              children: n ? (0, K.jsx)(ec, {}) : null,
                            }),
                          ],
                        }),
                        (0, K.jsx)($.E.div, {
                          className:
                            "absolute left-0 top-0 flex w-full justify-end p-4",
                          variants: ew,
                          children: (0, K.jsx)(en, { conversationId: t }),
                        }),
                        (0, K.jsx)($.E.div, {
                          className:
                            "absolute bottom-0 right-0 flex w-full justify-end p-4",
                          variants: ew,
                          children: (0, K.jsx)(u.y4, {
                            onClick: () => s((e) => !e),
                            children: (0, K.jsx)(c.FxN, {}),
                          }),
                        }),
                      ],
                    }),
                  })
                : null,
            }),
            (0, K.jsx)(ey, {}),
          ],
        });
      }
      let ew = {
        hidden: { opacity: 0, transform: "blur(4px)" },
        visible: { transform: "blur(0px)", opacity: 1 },
      };
    },
    3107: function (e) {
      e.exports = {
        "jidori-editor": "ProseMirror_jidori-editor__qe4qb",
        "generated-text": "ProseMirror_generated-text___vj5n",
        "highlighted-edit": "ProseMirror_highlighted-edit__XlnRz",
        dark: "ProseMirror_dark__iBd2U",
        "highlighted-delete": "ProseMirror_highlighted-delete__p_chl",
      };
    },
  },
]);
//# sourceMappingURL=sso.02ead3e18117caed.js.map
