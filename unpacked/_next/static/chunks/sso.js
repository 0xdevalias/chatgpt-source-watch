(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8682],
  {
    636: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DO_NOT_IMPORT_ContextConnectorCitationCards: function () {
            return h;
          },
          DO_NOT_IMPORT_ContextConnectorDocumentParser: function () {
            return _;
          },
          DO_NOT_IMPORT_ContextConnectorPicker: function () {
            return F;
          },
          DO_NOT_IMPORT_SyncConnectorPicker: function () {
            return K;
          },
        });
      var r = n(2946),
        s = n(61888),
        a = n(35805),
        i = n.n(a),
        l = n(93040),
        o = n(80615),
        c = n(80910),
        u = n(35250);
      function d(e) {
        let t,
          { citationMetadata: n } = e;
        switch (n.text) {
          case "Google Drive":
            t = o.Z.src;
            break;
          case "Google Docs":
            t = l.Z.src;
            break;
          case "Notion":
            t = c.Z.src;
        }
        return (0, u.jsx)("a", {
          href: n.url,
          target: "_blank",
          children: (0, u.jsxs)("div", {
            className:
              "flex flex-col gap-[2px] overflow-clip rounded-lg border border-gray-200 px-[16px] py-[12px]",
            children: [
              (0, u.jsxs)("div", {
                className: "flex items-center gap-2 pb-0.5",
                children: [
                  (0, u.jsx)(i(), {
                    className: "h-[16px] w-[16px] object-contain",
                    src: t,
                    width: 16,
                    height: 16,
                    objectFit: "contain",
                    alt: n.text,
                  }),
                  (0, u.jsx)("p", {
                    className:
                      "text-xs leading-normal text-token-text-secondary",
                    children: n.text,
                  }),
                ],
              }),
              (0, u.jsx)("p", {
                className: "text-token -text-primary line-clamp-1 text-sm",
                children: n.title,
              }),
            ],
          }),
        });
      }
      let m = ["Google Drive", "Google Docs", "Notion"];
      function p(e) {
        if (!e) return !1;
        let { type: t, text: n } = e;
        return "webpage" === t && m.includes(null != n ? n : "");
      }
      function h(e) {
        let { messages: t } = e,
          n = (0, s.compact)(
            t
              .flatMap((e) => {
                var t, n;
                return null !==
                  (t =
                    null == e ||
                    null === (n = e.message) ||
                    void 0 === n ||
                    null === (n = n.metadata) ||
                    void 0 === n
                      ? void 0
                      : n.citations) && void 0 !== t
                  ? t
                  : [];
              })
              .flatMap((e) => e.metadata)
          ),
          a = (0, s.uniqBy)(
            n.map((e) => (0, r.gP)(!0, e)).filter(p),
            (e) => e.url
          );
        return (0, u.jsx)("div", {
          className: "mt-4 grid w-full grid-cols-[50%,50%] gap-3",
          children: a.map((e) => (0, u.jsx)(d, { citationMetadata: e }, e.url)),
        });
      }
      var g = n(49305),
        f = n(70079),
        x = n(66452),
        A = n(8844);
      async function v(e) {
        let t = (0, A.Z)(),
          n = (function (e, t) {
            let n = window.open("", "Picker", "width=1080,height=680");
            if (null == n) return null;
            let r = {
                sdk: "8.0",
                entry: { oneDrive: {} },
                authentication: {},
                messaging: {
                  channelId: t,
                  origin: ""
                    .concat(window.location.protocol, "//")
                    .concat(window.location.host),
                },
                typesAndSources: {
                  mode: "files",
                  pivots: { oneDrive: !0, recent: !0 },
                },
              },
              s = new URLSearchParams({
                filePicker: JSON.stringify(r),
                locale: "en-us",
              }),
              a = "".concat("https://onedrive.live.com/picker", "?").concat(s),
              i = n.document.createElement("form");
            i.setAttribute("action", a), i.setAttribute("method", "POST");
            let l = n.document.createElement("input");
            return (
              l.setAttribute("type", "hidden"),
              l.setAttribute("name", "access_token"),
              l.setAttribute("value", e),
              i.appendChild(l),
              n.document.body.append(i),
              i.submit(),
              n
            );
          })(e, t);
        return null == n
          ? null
          : new Promise((r) => {
              window.addEventListener("message", function (s) {
                if ((null == s ? void 0 : s.source) !== n) return;
                let a = s.data;
                if ("initialize" === a.type && a.channelId === t) {
                  var i;
                  let t = s.ports[0],
                    a =
                      ((i = (e) => {
                        t.removeEventListener("message", a),
                          t.close(),
                          n.close(),
                          r(
                            e
                              ? e.map((e) => {
                                  let { id: t, name: n, webUrl: r } = e;
                                  return {
                                    connector: g.PO.O365,
                                    id: t,
                                    title: n,
                                    mimeType: (0, x.s1)(n),
                                    url: r,
                                  };
                                })
                              : null
                          );
                      }),
                      function (n) {
                        let r = n.data;
                        if ("notification" === r.type || "command" !== r.type)
                          return;
                        let s = r.data;
                        switch (
                          (t.postMessage({
                            type: "acknowledge",
                            id: n.data.id,
                          }),
                          s.command)
                        ) {
                          case "authenticate":
                            t.postMessage({
                              type: "result",
                              id: n.data.id,
                              data: { result: "token", token: e },
                            });
                            break;
                          case "close":
                            i(null);
                            break;
                          case "pick":
                            try {
                              i(s.items),
                                t.postMessage({
                                  type: "result",
                                  id: n.data.id,
                                  data: { result: "success" },
                                });
                            } catch (e) {
                              t.postMessage({
                                type: "result",
                                id: n.data.id,
                                data: {
                                  result: "error",
                                  error: {
                                    code: "unusableItem",
                                    message: e.message,
                                  },
                                },
                              });
                            }
                            break;
                          default:
                            t.postMessage({
                              type: "result",
                              id: n.data.id,
                              data: {
                                result: "error",
                                error: {
                                  code: "unsupportedCommand",
                                  message: s.command,
                                },
                              },
                            });
                        }
                      });
                  t.addEventListener("message", a),
                    t.start(),
                    t.postMessage({ type: "activate" });
                }
              });
            });
      }
      let b = "AIzaSyBjWFkxENpfA2b0Leq9VtNLumQs4u2VbkA",
        y = null;
      function j(e) {
        return (
          null == y &&
            (y = new Promise((e, t) => {
              let n = document.createElement("script");
              (n.src = "https://apis.google.com/js/api.js"),
                (n.onload = e),
                (n.onerror = t),
                document.documentElement.appendChild(n);
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
                    apiKey: b,
                    scope: "https://www.googleapis.com/auth/drive.file",
                    discoveryDocs: [
                      "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
                    ],
                  })
                )
              )),
          y
        );
      }
      async function w(e) {
        return (
          await j(e),
          new Promise((t) => {
            async function n(e) {
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
              .setDeveloperKey(b)
              .setAppId("77377267392")
              .setOAuthToken(e)
              .addView(
                new google.picker.DocsView(google.picker.ViewId.DOCS)
                  .setIncludeFolders(!0)
                  .setSelectFolderEnabled(!1)
                  .setMode(google.picker.DocsViewMode.LIST)
              )
              .setCallback(n)
              .build()
              .setVisible(!0);
          })
        );
      }
      async function O(e) {
        let t = await gapi.client.drive.files.get({
          fileId: e,
          fields: "name,mimeType,webViewLink",
        });
        if (200 !== t.status)
          return Promise.reject("HTTP ".concat(t.status, " for ").concat(e));
        let { name: n, mimeType: r, webViewLink: s } = t.result;
        return {
          connector: g.PO.GDRIVE,
          id: e,
          title: null != n ? n : "",
          mimeType: null != r ? r : "",
          url: null != s ? s : "",
        };
      }
      var k = n(53362),
        N = n(61236);
      function S() {
        let { 0: e, 1: t } = (0, f.useState)([]),
          n = (0, N.a)({ queryKey: ["fetchConnectorData"], queryFn: E });
        return (
          (0, f.useEffect)(() => {
            n.isSuccess && t(n.data);
          }, [n]),
          e
        );
      }
      function E(e) {
        let { queryKey: t } = e,
          [n] = t;
        return k.Z.checkConnectorAPI().then((e) => e.connectors.filter(P));
      }
      function P(e) {
        return e.type === g.PO.GDRIVE || e.type === g.PO.O365;
      }
      function _(e) {
        let { inputValue: t, parsedDocumentHandler: n } = e,
          r = S();
        return (
          (0, f.useEffect)(() => {
            n(
              (function (e, t) {
                let n = [];
                for (let r of t) {
                  let { type: t, access_token: s } = r;
                  if (null != s)
                    switch (t) {
                      case g.PO.GDRIVE:
                        n.push(
                          ...(function (e, t) {
                            return [...e.matchAll(C)].map((e) => ({
                              url: e[0],
                              id: e[2],
                              type: g.PO.GDRIVE,
                              tryFetch: (function (e, t) {
                                return async () => (await j(t), O(e));
                              })(e[2], t),
                            }));
                          })(e, s)
                        );
                      case g.PO.O365:
                      case g.PO.GDRIVE_SYNC_CONNECTOR:
                    }
                }
                return n;
              })(t, r)
            );
          }, [t, r, n]),
          null
        );
      }
      let C =
        /\bhttps:\/\/docs\.google\.com\/(document|spreadsheets|presentation)\/d\/([\w-]+)\//gm;
      var D = n(29287),
        M = n(58819),
        R = n(14551),
        L = n(8718),
        T = n(36180),
        z = n(7137),
        U = n(1454),
        I = n(9063),
        Z = n(84692);
      function F(e) {
        let {
            displayType: t,
            modelSupportedImageMimeTypes: r,
            attachmentsProductFeature: s,
          } = e,
          a = S(),
          i = (0, I.Z)(),
          l = (0, f.useRef)(null),
          o = (0, f.useCallback)(() => {
            l.current && l.current.click();
          }, []),
          c = (0, f.useCallback)(() => {
            var e;
            let t = null === (e = l.current) || void 0 === e ? void 0 : e.files;
            Array.from(null != t ? t : []).forEach((e) =>
              (function (e) {
                let {
                  file: t,
                  modelSupportedImageMimeTypes: n,
                  intl: r,
                  attachmentsProductFeature: s,
                } = e;
                T.Dw.uploadFile(
                  (0, L.W7)(t),
                  t,
                  R.A.Retrieval,
                  n,
                  r,
                  void 0,
                  s
                );
              })({
                file: e,
                modelSupportedImageMimeTypes: r,
                attachmentsProductFeature: s,
                intl: i,
              })
            );
          }, [r, s, i]);
        return (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsx)("input", {
              type: "file",
              ref: l,
              onChange: c,
              className: "hidden",
            }),
            (0, u.jsxs)(M.Z.Root, {
              children: [
                (0, u.jsx)(M.Z.Trigger, {
                  children:
                    "button" === t
                      ? (0, u.jsx)(D.z, {
                          size: "medium",
                          children: (0, u.jsx)(U.wzc, {}),
                        })
                      : (0, u.jsx)(U.OvN, {
                          className:
                            "icon-sm md:icon-md rounded-full bg-gray-500 text-white outline-none hover:bg-black",
                        }),
                }),
                (0, u.jsx)(M.Z.Portal, {
                  children: (0, u.jsxs)(M.Z.Content, {
                    children: [
                      a.map((e) =>
                        (0, u.jsx)(
                          M.Z.Item,
                          {
                            onClick: async () => {
                              let { access_token: t } = e;
                              if (t) {
                                let n = await (function (e, t) {
                                  switch (e) {
                                    case g.PO.GDRIVE:
                                      return w(t);
                                    case g.PO.GDRIVE_SYNC_CONNECTOR:
                                      return Promise.reject(
                                        "GDrive Sync Connector not supported"
                                      );
                                    case g.PO.O365:
                                      return v(t);
                                  }
                                })(e.type, t);
                                null != n &&
                                  n.forEach((t) => {
                                    null != t &&
                                      T.Dw.uploadConnectorFile(
                                        t.id,
                                        t.title,
                                        e.type,
                                        i
                                      );
                                  });
                              } else {
                                let { doOauthRedirect: t } =
                                  await Promise.resolve().then(
                                    n.bind(n, 42405)
                                  );
                                t({ id: e.id }, "#settings");
                              }
                            },
                            children: (0, u.jsxs)("div", {
                              className: "flex space-x-2",
                              children: [
                                e.type === g.PO.GDRIVE && (0, u.jsx)(z.dv9, {}),
                                e.type === g.PO.O365 && (0, u.jsx)(z.oV6, {}),
                                (0, u.jsx)("div", {
                                  children: e.access_token
                                    ? i.formatMessage(B.uploadFromMessage, {
                                        connector_name: e.name,
                                      })
                                    : i.formatMessage(B.signinWithMessage, {
                                        connector_name: e.name,
                                      }),
                                }),
                              ],
                            }),
                          },
                          e.id
                        )
                      ),
                      (0, u.jsx)(
                        M.Z.Item,
                        {
                          onClick: o,
                          children: (0, u.jsx)("div", {
                            className: "flex space-x-2",
                            children: (0, u.jsx)(Z.Z, {
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
      let B = (0, n(68498).vU)({
        signinWithMessage: {
          id: "ContextConnectorPicker.signInWithMessage",
          defaultMessage: "Sign in with {connector_name}",
        },
        uploadFromMessage: {
          id: "ContextConnectorPicker.uploadWithMessage",
          defaultMessage: "Upload from {connector_name}",
        },
      });
      var V = n(18450),
        q = n(20140),
        H = n(89899),
        Q = n(42405),
        W = n(99715);
      function G(e, t) {
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
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? G(Object(n), !0).forEach(function (t) {
                (0, V.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : G(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function K(e) {
        let { getInputProps: t, openFileDialog: n, gizmoId: r } = e,
          { gdrive: s, o365: a } = (0, q.X)();
        return (0, u.jsx)("div", {
          children: (0, u.jsxs)(W.fC, {
            children: [
              (0, u.jsx)(W.xz, {
                asChild: !0,
                children: (0, u.jsx)(D.z, {
                  size: "medium",
                  children: (0, u.jsx)(Z.Z, {
                    id: "aC1nyd",
                    defaultMessage: "Upload",
                  }),
                }),
              }),
              (0, u.jsxs)(W.VY, {
                side: "top",
                align: "start",
                children: [
                  (0, u.jsx)(W.ck, {
                    children: (0, u.jsxs)(H.cY, {
                      onClick: n,
                      children: [
                        (0, u.jsx)("input", X({}, t())),
                        (0, u.jsx)(Z.Z, {
                          id: "fy5xdG",
                          defaultMessage: "Upload files from desktop",
                        }),
                      ],
                    }),
                  }),
                  (0, u.jsxs)(W.ck, {
                    children: [
                      s.loaded &&
                        !s.already_oauth &&
                        (0, u.jsxs)(H.cY, {
                          onClick: () => {
                            (0, Q.doOauthRedirect)(
                              { id: s.id },
                              "gpts/editor/" + r
                            );
                          },
                          children: [
                            (0, u.jsx)("input", X({}, t())),
                            (0, u.jsx)(Z.Z, {
                              id: "MgqCv4",
                              defaultMessage: "Connect To Google Drive",
                            }),
                          ],
                        }),
                      s.loaded &&
                        s.already_oauth &&
                        (0, u.jsxs)(H.cY, {
                          onClick: () => {},
                          children: [
                            (0, u.jsx)("input", X({}, t())),
                            (0, u.jsx)(Z.Z, {
                              id: "M+wGjm",
                              defaultMessage: "Pick Folders From Google Drive",
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, u.jsxs)(W.ck, {
                    children: [
                      a.loaded &&
                        !a.already_oauth &&
                        (0, u.jsxs)(H.cY, {
                          onClick: () => {
                            (0, Q.doOauthRedirect)(
                              { id: a.id },
                              "gpts/editor/" + r
                            );
                          },
                          children: [
                            (0, u.jsx)("input", X({}, t())),
                            (0, u.jsx)(Z.Z, {
                              id: "dVKP7F",
                              defaultMessage: "Connect To One Drive",
                            }),
                          ],
                        }),
                      a.loaded &&
                        a.already_oauth &&
                        (0, u.jsxs)(H.cY, {
                          onClick: () => {},
                          children: [
                            (0, u.jsx)("input", X({}, t())),
                            (0, u.jsx)(Z.Z, {
                              id: "mADD8i",
                              defaultMessage:
                                "Pick Files/Folders From One Drive",
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    13888: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          ConversationTurnMessages: function () {
            return i;
          },
          ConversationTurnName: function () {
            return a;
          },
          ConversationTurnSender: function () {
            return s;
          },
        });
      var r = n(35250);
      function s(e) {
        let { isUserTurn: t, children: n } = e;
        return t ? null : (0, r.jsx)(r.Fragment, { children: n });
      }
      function a() {
        return null;
      }
      function i(e) {
        let { isUserTurn: t, children: n } = e;
        return t
          ? (0, r.jsx)("div", {
              className: "flex justify-end",
              children: (0, r.jsx)("div", {
                className:
                  "max-w-[90%] rounded-3xl bg-token-main-surface-secondary px-5 py-2.5",
                children: n,
              }),
            })
          : (0, r.jsx)(r.Fragment, { children: n });
      }
    },
    70173: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GizmosDropdownItems: function () {
            return M;
          },
          HistoryPopover: function () {
            return D;
          },
          ProfileDropdown: function () {
            return C;
          },
        });
      var r = n(94079),
        s = n(41922),
        a = n(55837),
        i = n(58819),
        l = n(55057),
        o = n(5427),
        c = n(99392),
        u = n(9182),
        d = n(70187),
        m = n(72207),
        p = n(74346),
        h = n(89899),
        g = n(85062),
        f = n(2343),
        x = n(27550),
        A = n(27570),
        v = n(47712),
        b = n(63605),
        y = n(78253),
        j = n(99715),
        w = n(22189),
        O = n(96056),
        k = n(38801),
        N = n(67852),
        S = n(41409),
        E = n(84692),
        P = n(35250);
      function _(e) {
        let { href: t, children: n, icon: r } = e,
          s = (0, S.useRouter)();
        return (0, P.jsx)(i.Z.Item, {
          icon: r,
          onSelect: () => s.push(t),
          children: n,
        });
      }
      function C() {
        let { data: e } = (0, v.rk)(),
          t = (0, v.t)(),
          { openSettings: n } = (0, A.Fr)();
        if (!t || !e) return null;
        let s = e.accountItems.length > 1,
          a = t.isWorkspaceAccount();
        return (0, P.jsxs)(i.Z.Root, {
          children: [
            (0, P.jsx)(i.Z.Trigger, {
              className: "px-2",
              children: (0, P.jsx)(r.zf, { iconSize: "gizmoConversation" }),
            }),
            (0, P.jsx)(i.Z.Portal, {
              children: (0, P.jsxs)(i.Z.Content, {
                collisionPadding: 20,
                children: [
                  s && (0, P.jsx)(f.S, { menuItemComponent: i.Z.Item }),
                  (0, P.jsx)(i.Z.Separator, {}),
                  a
                    ? (0, P.jsx)(x.b, {
                        menuItemComponent: i.Z.Item,
                        routedMenuItemComponent: _,
                      })
                    : (0, P.jsx)(g.W, { menuItemComponent: i.Z.Item }),
                  (0, P.jsx)(i.Z.Item, {
                    icon: d.RR,
                    onClick: () => n(),
                    children: (0, P.jsx)(E.Z, {
                      defaultMessage: "Settings",
                      id: "navigation.settings.0",
                    }),
                  }),
                  (0, P.jsx)(i.Z.Separator, {}),
                  (0, P.jsx)(i.Z.Item, {
                    onClick: () => {
                      k.A.logEvent(N.M.clickLogOut, { eventSource: "mouse" }),
                        (0, O.w7)();
                    },
                    icon: d.N_,
                    children: (0, P.jsx)(E.Z, {
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
          n = (0, s.V_)(),
          r = (0, b.XK)(t);
        return (0, P.jsxs)(w.fC, {
          children: [
            (0, P.jsx)(w.xz, {
              className: "rounded-lg p-2 hover:bg-token-main-surface-secondary",
              children: (0, P.jsx)(l.Oqj, {
                className: "icon-md text-token-text-secondary",
              }),
            }),
            (0, P.jsx)(w.h_, {
              children: (0, P.jsx)(w.VY, {
                sideOffset: 10,
                collisionPadding: 20,
                className:
                  "max-h-[600px] max-w-xs overflow-auto rounded-xl border border-token-border-light bg-token-main-surface-primary pl-2 shadow-xl",
                children: (0, P.jsx)(a.Z, {
                  activeId: n ? void 0 : r,
                  isPrimaryBackgroundColor: !0,
                }),
              }),
            }),
          ],
        });
      }
      function M(e) {
        let { clientThreadId: t } = e,
          n = (0, b.eV)(t),
          r = (0, v.t)(),
          { listItems: s } = (0, p._f)(!1),
          a = (0, S.useRouter)();
        return null != r && r.canInteractWithGizmos
          ? (0, P.jsxs)(P.Fragment, {
              children: [
                (0, P.jsx)(h.Cl, {}),
                s.map((e) => {
                  let { gizmo: r, section: s } = e;
                  return (0, P.jsx)(
                    R,
                    {
                      gizmo: r,
                      section: s,
                      clientThreadId: t,
                      isActive: r.gizmo.id === n,
                    },
                    r.gizmo.id
                  );
                }),
                (0, P.jsx)(h.UA, {
                  onSelect: () => {
                    a.push((0, y.cy)());
                  },
                  children: (0, P.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, P.jsx)(d.hk, { className: "icon-md" }),
                      (0, P.jsx)(E.Z, {
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
      function R(e) {
        let { gizmo: t, isActive: n, clientThreadId: r } = e,
          s = (0, S.useRouter)(),
          a = (0, P.jsxs)(h.tc, {
            $as: n ? j.fF : j.Xi,
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
                  n && (0, P.jsx)(l.$As, { className: "icon-md" }),
                  n &&
                    (0, P.jsx)(l.ob9, {
                      className: "icon-md text-token-text-tertiary",
                    }),
                ],
              }),
            ],
          });
        return n
          ? (0, P.jsxs)(j.Tr, {
              children: [
                a,
                (0, P.jsx)(j.Uv, {
                  children: (0, P.jsx)(j.tu, {
                    className:
                      "mt-2 max-h-[calc(100vh-300px)] min-w-[100px] max-w-xs overflow-auto rounded-lg border border-token-border-light bg-token-main-surface-primary shadow-lg",
                    sideOffset: -10,
                    alignOffset: -15,
                    children: (0, P.jsx)(m.GizmoInformationDropdownItems, {
                      gizmoResource: t,
                      clientThreadId: r,
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
    98834: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GizmoContactsEditor: function () {
            return A;
          },
        });
      var r = n(18450),
        s = n(49305),
        a = n(5427),
        i = n(9182),
        l = n(41251),
        o = n(70187),
        c = n(89899),
        u = n(32870),
        d = n(67680),
        m = n(19841),
        p = n(70079),
        h = n(9063),
        g = n(35250);
      function f(e, t) {
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
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function A(e) {
        var t, n, r;
        let { gizmoEditorData: a, updateGizmo: i } = e,
          o =
            null == a || null === (t = a.tools) || void 0 === t
              ? void 0
              : t.find((e) => e.type === s.qK.CONTACTS),
          { 0: u, 1: m } = (0, p.useState)(
            null !==
              (n =
                null == o || null === (r = o.settings) || void 0 === r
                  ? void 0
                  : r.contacts) && void 0 !== n
              ? n
              : []
          ),
          { 0: f, 1: A } = (0, p.useState)(!1),
          b = (0, h.Z)(),
          y = (e) => {
            i((t) =>
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
        return (0, g.jsxs)(l.hj, {
          children: [
            f &&
              (0, g.jsx)(d.ZP, {
                onClick: (e) => {
                  null != e &&
                    e.gizmo.id &&
                    (u.includes(e.gizmo.id)
                      ? m(u.filter((t) => t !== e.gizmo.id))
                      : m([...u, e.gizmo.id]));
                },
                onClose: () => {
                  A(!1), y(u);
                },
              }),
            (0, g.jsx)(l.lX, {
              label: "Contacts",
              description: b.formatMessage({
                id: "gizmo.contactsExplanation",
                defaultMessage: "Other GPTs that this GPT can talk to.",
              }),
            }),
            (0, g.jsx)("div", {
              className: "mb-2 space-y-1",
              children: u.map((e, t) =>
                (0, g.jsx)(
                  v,
                  {
                    gizmoId: e,
                    onRemove: () => {
                      let t = u.filter((t) => t !== e);
                      m(t), y(t);
                    },
                  },
                  t
                )
              ),
            }),
            (0, g.jsx)(c.cY, { onClick: () => A(!0), children: "Add Contact" }),
          ],
        });
      }
      function v(e) {
        var t;
        let { gizmoId: n, onRemove: r } = e,
          { data: s } = (0, i.b9)(n),
          l = !!(null == s || null === (t = s.gizmo.tags) || void 0 === t
            ? void 0
            : t.includes(u.U9.FirstParty));
        return s
          ? (0, g.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between rounded-lg bg-token-main-surface-secondary px-2",
              children: [
                (0, g.jsxs)("div", {
                  className: (0, m.default)(
                    "group flex h-10 items-center gap-2 rounded-lg px-2 font-medium"
                  ),
                  children: [
                    (0, g.jsx)(a.Z, {
                      isFirstParty: l,
                      src: s.gizmo.display.profile_picture_url,
                      className: "h-6 w-6 flex-shrink-0",
                    }),
                    (0, g.jsxs)("div", {
                      className:
                        "space-x-2 overflow-hidden text-ellipsis text-sm font-light text-token-text-secondary",
                      children: [
                        (0, g.jsx)("span", {
                          className: "font-medium text-token-text-primary",
                          children: s.gizmo.display.name,
                        }),
                        (0, g.jsx)("span", {
                          className:
                            "flex-grow truncate text-sm font-light text-token-text-secondary sm:max-w-xs lg:max-w-md",
                          children: s.gizmo.display.description,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)("button", {
                  className: "text-sm font-bold",
                  onClick: r,
                  children: (0, g.jsx)(o.v7, {
                    className:
                      "icon-md text-token-text-secondary hover:text-token-text-primary",
                  }),
                }),
              ],
            })
          : null;
      }
    },
    63577: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          GizmoRolodex: function () {
            return x;
          },
        });
      var r = n(18450),
        s = n(5427),
        a = n(94063),
        i = n(67680),
        l = n(11655),
        o = n(61236),
        c = n(19841),
        u = n(70079),
        d = n(1454),
        m = n(84692),
        p = n(35250);
      function h(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : h(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let f = () =>
        (0, o.a)({
          queryKey: ["gizmoRolodex"],
          queryFn: async () => a.U.getRolodex(),
        });
      function x() {
        let { 0: e, 1: t } = (0, u.useState)(!1),
          { 0: n, 1: r } = (0, u.useState)(null),
          { data: s } = f();
        return (0, p.jsxs)(l.ZR, {
          children: [
            (0, p.jsx)("div", {
              className: "mb-2",
              children: (0, p.jsx)(m.Z, {
                id: "personalizationSettings.rolodexLabel",
                defaultMessage: "Rolodex",
              }),
            }),
            n
              ? (0, p.jsx)("div", {
                  className: "animate-slideDownAndFadeLong",
                  children: (0, p.jsx)(
                    v,
                    g(
                      g({}, n),
                      {},
                      {
                        onBack: () => {
                          r(null);
                        },
                      }
                    )
                  ),
                })
              : e
                ? (0, p.jsx)("div", {
                    className: "animate-slideDownAndFadeLong",
                    children: (0, p.jsx)(i.ZP, {
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
                          A,
                          {
                            gizmo: e.gizmo,
                            rolodex: e.rolodex,
                            onClick: async () => {
                              r(e);
                            },
                          },
                          t
                        )
                      ),
                      (null != s ? s : []).length < 3 &&
                        (0, p.jsx)(A, {
                          onClick: () => {
                            t(!0);
                          },
                        }),
                    ],
                  }),
          ],
        });
      }
      function A(e) {
        let { gizmo: t, rolodex: n, onClick: r } = e,
          { 0: i, 1: l } = (0, u.useState)(!1),
          o = null == n ? void 0 : n.is_rolodex;
        return (0, p.jsx)("div", {
          className: (0, c.default)(
            "relative flex max-w-32 flex-col items-center space-y-1 rounded-xl font-medium",
            o ? "border border-brand-green-800" : "",
            i ? "border border-token-border-heavy" : ""
          ),
          onMouseOverCapture: () => {
            l(!0);
          },
          onMouseOutCapture: () => {
            l(!1);
          },
          children:
            i && t
              ? (0, p.jsxs)("div", {
                  className: "flex items-center space-x-6 p-7",
                  children: [
                    o &&
                      (0, p.jsx)(d.vPQ, {
                        onClick: r,
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
      function v(e) {
        var t;
        let { gizmo: n, rolodex: r, onBack: i } = e,
          { 0: l, 1: o } = (0, u.useState)(
            null !== (t = null == r ? void 0 : r.usage_description) &&
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
              src: n.display.profile_picture_url,
            }),
            (0, p.jsx)("div", {
              className: "truncate font-medium",
              children: n.display.name,
            }),
            (0, p.jsx)("div", {
              className: "w-full",
              children: (0, p.jsx)("textarea", {
                rows: 5,
                value: l,
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
                  onClick: i,
                  role: "button",
                  children: (0, p.jsx)(d.YFh, { className: "icon-md" }),
                }),
                (0, p.jsx)("div", {
                  onClick: () => {
                    a.U.upsertToRolodex({ gizmoId: n.id, usageDescription: l }),
                      i();
                  },
                  role: "button",
                  children: (0, p.jsx)(d.mW3, { className: "icon-md" }),
                }),
                (0, p.jsx)("div", {
                  onClick: async () => {
                    await a.U.upsertToRolodex({ gizmoId: n.id, remove: !0 }),
                      i();
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
    94556: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          EditorEntryButton: function () {
            return ek;
          },
          EditorModal: function () {
            return eN;
          },
          EditorPageBody: function () {
            return eS;
          },
        });
      var r,
        s = n(18450),
        a = n(99945),
        i = n(29287),
        l = n(11335),
        o = n(67217),
        c = n(70187),
        u = n(21643),
        d = n(30269),
        m = n(78103),
        p = n(51362);
      function h(e, t) {
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
      let g = {
          systemPrompt: "You are a helpful assistant.",
          userPrompt: "Make it better.",
        },
        f = (0, m.ZP)(
          (0, p.n)(() =>
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? h(Object(n), !0).forEach(function (t) {
                      (0, s.Z)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : h(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
              }
              return e;
            })({}, g)
          )
        ),
        x = {
          setSystemPrompt: (e) => {
            f.setState((t) => {
              t.systemPrompt = e;
            });
          },
          setUserPrompt: (e) => {
            f.setState((t) => {
              t.userPrompt = e;
            });
          },
          setModel: (e) => {
            f.setState((t) => {
              t.model = e;
            });
          },
        };
      var A = n(25048),
        v = n(60581),
        b = n(99715),
        y = n(61888),
        j = n(70079),
        w = n(1454),
        O = n(35250);
      function k() {
        var e;
        let { 0: t, 1: n } = (0, j.useState)(!1),
          r = f(),
          s = (0, A.NX)(),
          a = async () => {
            n(!0),
              await v.$.streamCompletion({
                completionRequest: r,
                onMessage: y.noop,
              }),
              n(!1);
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
                  value: r.userPrompt,
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
                  value: r.systemPrompt,
                }),
              ],
            }),
            (0, O.jsx)("div", {
              className: "self-start",
              children: (0, O.jsx)(N, {
                model:
                  null !== (e = r.model) && void 0 !== e ? e : "gpt-3.5-turbo",
                onChange: (e) => {
                  x.setModel(e);
                },
              }),
            }),
            (0, O.jsx)(i.z, {
              loading: t,
              color: "primary",
              onClick: a,
              className: "max-w-xs grow-0",
              children: (0, O.jsx)(w.LbG, { className: "icon-sm" }),
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
      function N(e) {
        let { model: t, onChange: n } = e;
        return (0, O.jsxs)(b.fC, {
          children: [
            (0, O.jsx)(b.xz, {
              children: (0, O.jsx)("div", {
                role: "button",
                className:
                  "rounded border-4 border-token-border-light px-4 py-2",
                children: t,
              }),
            }),
            (0, O.jsx)(b.Uv, {
              children: (0, O.jsxs)(b.VY, {
                sideOffset: 7,
                children: [
                  (0, O.jsx)(b.ck, {
                    className:
                      "border-2 bg-token-main-surface-tertiary px-4 py-2 hover:cursor-pointer hover:bg-token-main-surface-primary",
                    onClick: () => n("gpt-3.5-turbo"),
                    children: "3.5T",
                  }),
                  (0, O.jsx)(b.ck, {
                    className:
                      "border-2 bg-token-main-surface-tertiary px-4 py-2 hover:cursor-pointer hover:bg-token-main-surface-primary",
                    onClick: () => n("gpt-4-turbo-preview"),
                    children: "4T",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var S = n(55681),
        E = n(79134),
        P = n(3107),
        _ = n.n(P);
      function C(e, t) {
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
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : C(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let M = new E.V_({
        nodes: D(
          D({}, S.fK.spec.nodes.toObject()),
          {},
          {
            generatedText: {
              inline: !0,
              group: "inline",
              content: "text*",
              attrs: { class: { default: "generated-text" } },
              parseDOM: [{ tag: "span.generated-text" }],
              toDOM: () => ["span", { class: _()["generated-text"] }, 0],
            },
          }
        ),
        marks: D({}, S.fK.spec.marks.toObject()),
      });
      function R(e, t) {
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? R(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : R(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let T = new S.xj(M, S.EU.tokenizer, L({}, S.EU.tokens)),
        z = new S.nZ(L({}, S.Dm.nodes), L({}, S.Dm.marks));
      function U(e, t) {
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
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? U(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : U(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let Z = { documentGoal: "", comments: [] },
        F = (0, m.ZP)((0, p.n)(() => I({}, Z))),
        B = {
          upsertComment: (e) => {
            F.setState((t) => {
              let n = t.comments.findIndex((t) => t.id === e.id);
              -1 === n
                ? t.comments.push(e)
                : (t.comments[n] = I(I({}, t.comments[n]), e));
            });
          },
          deleteComment: (e) => {
            F.setState((t) => {
              t.comments = t.comments.filter((t) => t.id !== e);
            });
          },
          editGoal: (e) => {
            F.setState((t) => {
              t.documentGoal = e;
            });
          },
        };
      function V(e, t) {
        let { original: n } = e,
          r = null;
        return (
          t.doc.descendants((e, t) => {
            if (r) return !1;
            if (e.text) {
              let s = e.text.indexOf(n);
              if (-1 !== s) {
                let e = t + s,
                  a = e + n.length;
                return (r = { from: e, to: a }), !1;
              }
            }
          }),
          r
        );
      }
      function q(e, t) {
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
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : q(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let Q = async (e, t, n, r) => {
        let s,
          a = "",
          { from: i } = e.state.selection,
          l = e.state.selection.content(),
          o = l.content.textBetween(0, l.content.size);
        try {
          await v.$.streamCompletion({
            completionRequest: H(
              H(
                {},
                (function (e) {
                  let { fullContent: t, selectedContent: n, completion: r } = e;
                  return {
                    systemPrompt: r.systemPrompt,
                    userPrompt: "Here is the full draft:\n"
                      .concat(
                        t,
                        '\n\nThis is the text that is currently selected: "'
                      )
                      .concat(
                        n,
                        '"\n\nI want to rewrite the selected text with this guidance: '
                      )
                      .concat(
                        r.userPrompt,
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
              var n, r;
              let l = e.state.tr;
              0 === a.length && l.deleteSelection(), (a += t);
              let o =
                i +
                (null !==
                  (n =
                    null === (r = s) || void 0 === r ? void 0 : r.nodeSize) &&
                void 0 !== n
                  ? n
                  : 0);
              (s = M.nodes.generatedText.create({}, M.text(a))),
                l.replaceRangeWith(i, o, s),
                e.dispatch(l);
            },
          }),
            n(o, a);
        } catch (e) {
          r(e);
        }
      };
      var W = n(25494),
        G = n(8844);
      function X(e) {
        let { comment: t, onAccept: n, onReject: r } = e;
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
                    onClick: r,
                    children: (0, O.jsx)(w.q5L, { className: "icon-sm" }),
                  }),
                  (0, O.jsx)("div", {
                    role: "button",
                    className: "text-xs text-brand-green hover:underline",
                    onClick: n,
                    children: (0, O.jsx)(w.UgA, { className: "icon-sm" }),
                  }),
                ],
              }),
            ],
          },
          t.id
        );
      }
      function K(e, t) {
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
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : K(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function Y(e) {
        let { getCurrentView: t } = e,
          n = F(),
          r = f(),
          s = (0, W.D)({
            mutationFn: (e) => v.$.syncCompletion({ completionRequest: e }),
            onSuccess: (e) => {
              e.comments.forEach((e) =>
                B.upsertComment({
                  id: (0, G.Z)(),
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
              value: n.documentGoal,
              name: "document-goal",
              className: "rounded-md text-sm",
              onChange: (e) => {
                B.editGoal(e.target.value);
              },
            }),
            (0, O.jsx)("div", {
              className: "mb-10 w-full space-y-2",
              children: n.comments.map((e) =>
                (0, O.jsx)(
                  X,
                  {
                    comment: e,
                    onAccept: () => {
                      let n = t();
                      n &&
                        (function (e, t) {
                          B.deleteComment(e.id);
                          let n = V(e, t.state);
                          if (!n) return;
                          let r =
                            "delete" === e.type
                              ? t.state.tr.delete(n.from, n.to)
                              : t.state.tr.replaceWith(
                                  n.from,
                                  n.to,
                                  t.state.schema.text(e.completion)
                                );
                          t.dispatch(r);
                        })(e, n);
                    },
                    onReject: () => {
                      let n = t();
                      n &&
                        (function (e, t) {
                          B.deleteComment(e.id);
                          let n = V(e, t.state);
                          if (!n) return;
                          let r = t.state.tr.replaceWith(
                            n.from,
                            n.to,
                            t.state.schema.text(e.original)
                          );
                          t.dispatch(r);
                        })(e, n);
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
                  value: r.userPrompt,
                  onChange: (e) => {
                    x.setUserPrompt(e.target.value);
                  },
                  name: "prompt-jidori",
                  color: "search",
                  className:
                    "grow bg-token-sidebar-surface-tertiary py-2.5 opacity-100",
                }),
                (0, O.jsx)(i.z, {
                  color: "primary",
                  className: "my-auto grow-0",
                  loading: s.isPending,
                  onClick: async () => {
                    var e, a, i;
                    let l =
                      null === (e = t()) || void 0 === e ? void 0 : e.state.doc;
                    if (!l) return;
                    let o = r.userPrompt,
                      c =
                        ((a = n.documentGoal),
                        (i = z.serialize(l, { tightLists: !0 })),
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
                          user: i,
                        });
                    await s.mutateAsync(
                      J(
                        J({}, r),
                        {},
                        { userPrompt: c.user, systemPrompt: c.system }
                      )
                    );
                  },
                  children: (0, O.jsx)(w.LbG, { className: "icon-sm" }),
                }),
              ],
            }),
          ],
        });
      }
      var $ = n(85452),
        ee = n(95407);
      function et(e) {
        let {
            visible: t,
            style: n,
            toggleBold: r,
            toggleItalic: s,
            view: a,
            onHide: i,
          } = e,
          { 0: l, 1: o } = (0, j.useState)(!1),
          c = f();
        if (!t) return null;
        let u = (e, t) => {
          o(!1),
            i(),
            B.upsertComment({
              id: (0, G.Z)(),
              completion: t,
              original: e,
              author: "Jidori",
            });
        };
        return (0, O.jsxs)("div", {
          style: n,
          className:
            "absolute flex items-center rounded-lg border border-token-border-heavy bg-token-sidebar-surface-secondary text-sm font-medium text-token-text-primary drop-shadow-md",
          children: [
            (0, O.jsx)("div", {
              role: "button",
              onClick: r,
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
                  Q(a, c, u, (e) => {
                    ee.m.danger("Error replacing selection", e), o(!1);
                  });
              },
              className: "border-l border-token-border-light p-2",
              children: l ? (0, O.jsx)($.Z, {}) : "Replace",
            }),
          ],
        });
      }
      var en = n(71307),
        er = n(60314);
      let es = (0, en.S0)(/^\s*([-+*])\s$/, M.nodes.bullet_list),
        ea = (0, en.S0)(/^\s*>\s$/, M.nodes.blockquote),
        ei = (0, en.zK)(/^```$/, M.nodes.code_block),
        el = (0, en.zK)(/^#\s$/, M.nodes.heading, () => ({ level: 1 })),
        eo = (0, en.zK)(/^##\s$/, M.nodes.heading, () => ({ level: 2 })),
        ec = (0, en.zK)(/^###\s$/, M.nodes.heading, () => ({ level: 3 })),
        eu = new en.VK(/^---$/, (e, t, n, r) => {
          let { tr: s } = e;
          if (t) {
            let e = M.nodes.paragraph.create(),
              t = M.nodes.horizontal_rule.create();
            s.replaceWith(n - 1, r, E.HY.from([t, e]));
            let a = s.mapping.map(r + 1);
            s.setSelection(er.Bs.near(s.doc.resolve(a)));
          }
          return s;
        }),
        ed = (0, en.Hw)({ rules: [es, ea, ei, el, eo, ec, eu] });
      var em = n(12498),
        ep = n(81093);
      let eh = {
        "Mod-z": ep.Yw,
        "Mod-y": ep.KX,
        "Mod-b": (0, em.w9)(M.marks.strong),
        "Mod-i": (0, em.w9)(M.marks.em),
      };
      var eg = n(56637);
      let ef = new er.H$("highlight"),
        ex = new er.Sy({
          key: ef,
          state: {
            init: () => eg.EH.empty,
            apply: (e, t, n, r) => {
              let s = e.getMeta(ef);
              if (s && s.length > 0) {
                let e = [];
                return (
                  s.forEach((t) => {
                    let n = V(t, r);
                    if (!n) return;
                    let s = eg.p.inline(n.from, n.to, {
                      class:
                        "delete" === t.type
                          ? _()["highlighted-delete"]
                          : _()["highlighted-edit"],
                    });
                    e.push(s);
                  }),
                  eg.EH.create(r.doc, e)
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
      var eA = n(19841),
        ev = n(18004),
        eb = n(88488),
        ey = n(84692);
      function ej(e, t) {
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
      function ew(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ej(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ej(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let eO = n(21389).Z.button(
        r ||
          (r = (0, a.Z)([
            "p-1 rounded-md text-token-text-tertiary hover:text-token-text-primary md:invisible md:group-hover:visible md:group-[.final-completion]:visible",
          ]))
      );
      function ek(e) {
        let { onClick: t } = e;
        return (0, O.jsx)(l.u, {
          label: (0, O.jsx)(ey.Z, {
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
      function eN(e) {
        let { userMessage: t, assistantMessage: n, onClose: r } = e;
        if (
          !n ||
          "text" !== n.content.content_type ||
          0 === n.content.parts.length
        )
          return null;
        let s = "";
        t &&
          "text" === t.content.content_type &&
          t.content.parts.length > 0 &&
          (s = t.content.parts.join(""));
        let a = n.content.parts.join("");
        return (0, O.jsx)(o.Z, {
          type: "success",
          size: "custom",
          className: "max-w-7xl",
          isOpen: !0,
          onClose: r,
          primaryButton: (0, O.jsx)(i.z, {
            color: "primary",
            onClick: y.noop,
            children: "Save",
          }),
          secondaryButton: (0, O.jsx)(i.z, {
            color: "neutral",
            onClick: r,
            children: "Cancel",
          }),
          children: (0, O.jsx)(eS, {
            documentGoal: s,
            initialContent: a,
            classNames: "h-[80vh]",
          }),
        });
      }
      function eS(e) {
        let { documentGoal: t, initialContent: n, classNames: r } = e,
          s = (0, j.useRef)(null),
          { 0: a, 1: i } = (0, j.useState)(!1);
        return (
          (0, j.useEffect)(() => {
            let e = (e) => {
              "9" === e.key &&
                (e.metaKey || e.ctrlKey) &&
                (e.preventDefault(), i((e) => !e));
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.removeEventListener("keydown", e);
              }
            );
          }, []),
          (0, O.jsxs)("div", {
            className: (0, eA.default)(
              "relative grid grid-flow-row grid-cols-8 overflow-y-auto",
              r
            ),
            children: [
              (0, O.jsx)("div", {
                className:
                  "no-scrollbar col-span-6 overflow-y-auto rounded-lg p-8",
                children: (0, O.jsx)(eE, {
                  ref: s,
                  init: { initialContent: n, documentGoal: t },
                }),
              }),
              (0, O.jsx)("div", {
                className: "col-span-2 mt-8 flex flex-col overflow-y-auto px-2",
                children: a
                  ? (0, O.jsx)(k, {})
                  : (0, O.jsx)(Y, {
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
      let eE = (0, j.forwardRef)((e, t) => {
        let { init: n } = e,
          r = (0, j.useRef)(null),
          { 0: s, 1: a } = (0, j.useState)(null),
          { 0: i, 1: l } = (0, j.useState)(!1),
          { 0: o, 1: c } = (0, j.useState)({}),
          u = (0, j.useCallback)(() => {
            if (!s) return;
            let { anchor: e, head: t } = s.state.selection,
              n = r.current.getBoundingClientRect();
            if (e !== t) {
              let e = s.coordsAtPos(t),
                r = Math.max(0, e.top - n.top - 10),
                a = e.left - n.left;
              c({ top: "".concat(r, "px"), left: "".concat(a, "px") }), l(!0);
            } else l(!1);
          }, [s]);
        return (
          (0, j.useEffect)(() => {
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
          (0, j.useImperativeHandle)(t, () => ({
            getCurrentView: () => s || null,
          })),
          (0, j.useEffect)(() => {
            B.editGoal(n.documentGoal);
          }, []),
          (0, j.useEffect)(() => {
            if (!r.current) return;
            let e = er.yy.create({
                schema: M,
                doc: ((e) => {
                  if (e && 0 !== e.length) return T.parse(e);
                })(n.initialContent),
                plugins: [
                  (0, ep.m8)(),
                  ed,
                  (0, eb.h)(ew(ew({}, em.YR), eh)),
                  ex,
                ],
              }),
              t = new eg.tk(r.current, {
                state: e,
                attributes: { class: _()["jidori-editor"] },
              });
            return (
              (0, ev.Z)(t),
              t.focus(),
              a(t),
              () => {
                t.destroy();
              }
            );
          }, [n]),
          (window.editor = s),
          !(function (e) {
            let t = F();
            (0, j.useEffect)(() => {
              if (!e || 0 === t.comments.length) return;
              let n = e.state.tr.setMeta(ef, t.comments);
              e.dispatch(n);
            }, [e, t.comments]);
          })(s),
          (0, O.jsxs)("div", {
            className: "w-full",
            children: [
              (0, O.jsx)(et, {
                visible: i,
                style: o,
                toggleBold: () => {
                  s &&
                    ((0, em.w9)(M.marks.strong)(s.state, s.dispatch),
                    s.focus());
                },
                toggleItalic: () => {
                  s && ((0, em.w9)(M.marks.em)(s.state, s.dispatch), s.focus());
                },
                onHide: () => l(!1),
                view: s,
              }),
              (0, O.jsx)("div", {
                className: (0, eA.default)(
                  "w-full cursor-text overflow-y-auto text-token-text-primary caret-token-text-primary"
                ),
                ref: r,
              }),
            ],
          })
        );
      });
      eE.displayName = "Editor";
    },
    80928: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          JidoriPromptControls: function () {
            return j;
          },
        });
      var r,
        s = n(18450),
        a = n(99945),
        i = n(58819),
        l = n(29287),
        o = n(21643),
        c = n(30269),
        u = n(67217),
        d = n(70079),
        m = n(35250);
      function p(e) {
        let { theme: t, onSave: n, onClose: r, onDelete: s } = e,
          { 0: a, 1: i } = (0, d.useState)(t.examples),
          { 0: p, 1: h } = (0, d.useState)(t.name);
        return (0, m.jsx)(u.Z, {
          type: "success",
          size: "custom",
          className: "max-w-4xl",
          isOpen: !0,
          onClose: r,
          title: "Editing theme: ".concat(p),
          hideSeparator: !0,
          showCloseButton: !0,
          primaryButton: (0, m.jsx)(l.z, {
            color: "primary",
            onClick: () => {
              n({ id: t.id, name: p, examples: a }), r();
            },
            children: "Save",
          }),
          secondaryButton: t.id
            ? (0, m.jsx)(l.z, {
                color: "neutral",
                onClick: () => {
                  s(t.id), r();
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
                        let n = [...a];
                        (n[t] = e.target.value), i(n);
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
      var h = n(60581),
        g = n(82473),
        f = n(25494),
        x = n(61236),
        A = n(1454);
      function v(e, t) {
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
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : v(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let y = n(21389).Z.div(
        r ||
          (r = (0, a.Z)([
            "py-1 bg-token-main-surface-primary rounded-md border border-token-border-light text-xs font-medium text-token-text-tertiary hover:bg-token-main-surface-secondary hover:text-token-text-primary px-2.5 radix-state-open:bg-token-main-surface-secondary radix-state-open:text-token-text-primary",
          ]))
      );
      function j(e) {
        let { setPromptMetadataValue: t } = e,
          { data: n } = (0, x.a)({
            queryKey: ["jidoriSettings"],
            queryFn: async () => h.$.getSettings(),
          }),
          { data: r } = (0, x.a)({
            queryKey: ["jidoriThemes"],
            queryFn: async () => h.$.getThemes(),
          }),
          s = (function () {
            let e = (0, g.NL)();
            return (0, f.D)({
              mutationFn: (e) => h.$.postSettings(e),
              onSuccess: () => {
                e.refetchQueries({ queryKey: ["jidoriSettings"] });
              },
            });
          })(),
          a = (function () {
            let e = (0, g.NL)();
            return (0, f.D)({
              mutationFn: (e) => h.$.postThemes(e),
              onSuccess: () => {
                e.refetchQueries({ queryKey: ["jidoriThemes"] });
              },
            });
          })(),
          i = (function () {
            let e = (0, g.NL)();
            return (0, f.D)({
              mutationFn: (e) => h.$.deleteTheme(e),
              onSuccess: () => {
                e.refetchQueries({ queryKey: ["jidoriThemes"] });
              },
            });
          })(),
          { 0: l, 1: o } = (0, d.useState)(null);
        return (
          (0, d.useEffect)(() => {
            n &&
              t((e) =>
                b(
                  b({}, e),
                  {},
                  {
                    jidori: b(
                      b({}, e.jidori),
                      {},
                      { language: n.language.value, length: n.length.value }
                    ),
                  }
                )
              );
          }, [n, t]),
          n
            ? (0, m.jsx)("div", {
                className:
                  "flex justify-between bg-gradient-to-t from-token-main-surface-primary to-transparent px-4 pb-3.5",
                children: (0, m.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    [n.language, n.length].map((e, n) =>
                      (0, m.jsx)(
                        O,
                        {
                          setting: e,
                          onClick: async (n) => {
                            s.mutate({ [e.type]: n }),
                              t((t) =>
                                b(
                                  b({}, t),
                                  {},
                                  {
                                    jidori: b(
                                      b({}, t.jidori),
                                      {},
                                      { [e.type]: n }
                                    ),
                                  }
                                )
                              );
                          },
                        },
                        n
                      )
                    ),
                    r &&
                      (0, m.jsx)(w, {
                        themes: r,
                        currentTheme: l,
                        addTheme: (e) => {
                          a.mutate(e);
                        },
                        deleteTheme: (e) => {
                          i.mutate(e);
                        },
                        onClick: (e) => {
                          o(e),
                            t((t) =>
                              b(
                                b({}, t),
                                {},
                                {
                                  jidori: b(
                                    b({}, t.jidori),
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
      function w(e) {
        let {
            onClick: t,
            currentTheme: n,
            addTheme: r,
            deleteTheme: s,
            themes: a,
          } = e,
          { 0: l, 1: o } = (0, d.useState)(!1),
          { 0: c, 1: u } = (0, d.useState)(null);
        return (0, m.jsxs)(i.Z.Root, {
          children: [
            (0, m.jsxs)(y, {
              $as: i.Z.Trigger,
              className: "pr-1.5",
              children: [n ? n.name : "Themes", (0, m.jsx)(A.bTu, {})],
            }),
            (0, m.jsx)(i.Z.Portal, {
              children: (0, m.jsxs)(i.Z.Content, {
                side: "top",
                children: [
                  a.map((e, n) =>
                    (0, m.jsxs)(
                      i.Z.Item,
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
                            children: (0, m.jsx)(A.vPQ, {
                              className: "icon-sm",
                            }),
                          }),
                        ],
                      },
                      n
                    )
                  ),
                  (0, m.jsx)(i.Z.Item, {
                    onClick: () => {
                      o(!0);
                    },
                    className: "px-4",
                    children: "New Theme",
                  }),
                ],
              }),
            }),
            l &&
              (0, m.jsx)(p, {
                theme: null != c ? c : { examples: [], name: "" },
                onSave: (e) => {
                  r(e);
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
        let { onClick: t, setting: n } = e;
        return (0, m.jsxs)(i.Z.Root, {
          children: [
            (0, m.jsxs)(y, {
              $as: i.Z.Trigger,
              className: "pr-1.5",
              children: [
                n.value ? n.value : n.display_name,
                (0, m.jsx)(A.bTu, {}),
              ],
            }),
            (0, m.jsx)(i.Z.Portal, {
              children: (0, m.jsx)(i.Z.Content, {
                side: "top",
                children: n.options.map((e, n) =>
                  (0, m.jsx)(
                    i.Z.Item,
                    { onClick: () => t(e.value), children: e.value },
                    n
                  )
                ),
              }),
            }),
          ],
        });
      }
    },
    25048: function (e, t, n) {
      "use strict";
      n.d(t, {
        NX: function () {
          return o;
        },
        q$: function () {
          return c;
        },
      });
      var r = n(18450),
        s = n(51362),
        a = n(78103);
      function i(e, t) {
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
      let l = { lastRequest: {}, lastResponse: "" },
        o = (0, a.ZP)(
          (0, s.n)(() =>
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? i(Object(n), !0).forEach(function (t) {
                      (0, r.Z)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : i(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
              }
              return e;
            })({}, l)
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
    60581: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return u;
        },
      });
      var r = n(18450),
        s = n(25048),
        a = n(4466),
        i = n(48879);
      function l(e, t) {
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
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
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
          let { completionRequest: t, onMessage: n } = e;
          s.q$.setLastRequest(t),
            s.q$.setLastResponse(""),
            await (0, i.L)("".concat(c, "/api/completion"), {
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
                s.q$.appendToResponse(e.data), n(e.data);
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
          let n = await a.c.post("".concat(c, "/api/completion/lr"), {
            system_prompt: t.systemPrompt,
            user_prompt: t.userPrompt,
            model: t.model,
          });
          return (
            s.q$.setLastResponse(JSON.stringify(n.message, null, 2)), n.message
          );
        }
        static async postSettings(e) {
          let { language: t, length: n } = e;
          return a.c.post("".concat(c, "/api/settings"), {
            language: t,
            length: n,
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
    13188: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return ra;
        },
      });
      var r,
        s,
        a,
        i,
        l,
        o,
        c,
        u,
        d,
        m,
        p,
        h,
        g,
        f,
        x,
        A,
        v,
        b,
        y,
        j,
        w,
        O,
        k,
        N,
        S,
        E,
        P,
        _,
        C,
        D,
        M,
        R,
        L,
        T,
        z,
        U,
        I,
        Z,
        F,
        B,
        V,
        q,
        H,
        Q,
        W,
        G,
        X,
        K,
        J,
        Y,
        $,
        ee = n(99945),
        et = n(73606),
        en = n(69920),
        er = n(62014),
        es = n(19841),
        ea = n(70079),
        ei = n(21389),
        el = n(94079),
        eo = n(58819),
        ec = n(55057),
        eu = n(70187),
        ed = n(85252),
        em = n(41409),
        ep = n(1454),
        eh = n(67217),
        eg = n(35805),
        ef = n.n(eg),
        ex = {
          src: "https://cdn.oaistatic.com/_next/static/media/popup-blocked.a4e77057.png",
          height: 40,
          width: 118,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAFVBMVEXx8/nq7PL8/P+7vsS+wcfe4enV2OEVeXw2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNgZGQAQSYGZmZWFgZmNiYGRkYGBpAIAAIUACasMdr/AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        };
      function eA() {
        return (eA = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ev = (e) =>
          ea.createElement(
            "svg",
            eA(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                fill: "none",
                viewBox: "0 0 24 24",
              },
              e
            ),
            a ||
              (a = ea.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19.5 8V5.5a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2H9",
              })),
            i ||
              (i = ea.createElement("circle", {
                cx: 16,
                cy: 16,
                r: 4,
                stroke: "currentColor",
                strokeWidth: 2,
              })),
            l ||
              (l = ea.createElement("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeWidth: 2,
                d: "m19 19 2 2",
              }))
          ),
        eb = n(35250);
      function ey(e) {
        let { query: t } = e,
          n = (0, ea.useRef)({}),
          { 0: r, 1: s } = (0, ea.useState)(!1);
        function a(e, t) {
          let r = "compare_".concat(e),
            a = n.current[r];
          a && (a.close(), delete n.current[r]);
          let i = Math.max(window.outerWidth / 2, 500),
            l = Math.max(window.outerHeight - 300, 500),
            o = window.screenY + 300,
            c = window.screenX + e * i;
          (a = n.current[r] =
            window.open(
              t,
              r,
              "width="
                .concat(i, ",height=")
                .concat(l, ",top=")
                .concat(o, ",left=")
                .concat(c)
            )) || s(!0);
        }
        return (0, eb.jsxs)(eb.Fragment, {
          children: [
            (0, eb.jsx)(ew, {
              onClick: () => {
                a(0, "https://google.com/search?q=".concat(t)),
                  a(1, "https://perplexity.ai/search?q=".concat(t));
              },
              icon: (0, eb.jsx)(ev, { className: "icon-md" }),
              children: "Compare",
            }),
            r &&
              (0, eb.jsx)(eh.Z, {
                isOpen: !0,
                type: "danger",
                onClose: () => s(!1),
                title: "Popup Blocked",
                description: (0, eb.jsxs)("div", {
                  children: [
                    "Your browser is blocking popups. Please allow popups for this site and try again.",
                    (0, eb.jsxs)("div", {
                      className: "mt-3 text-xs",
                      children: [
                        (0, eb.jsx)(ef(), {
                          className: "mx-auto",
                          src: ex,
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
      var ej = n(68399);
      let ew = eo.Z.Item;
      function eO() {
        let { theme: e, setTheme: t } = (0, ed.F)();
        switch (e) {
          case "system":
            return (0, eb.jsx)(ew, {
              onClick: (e) => {
                e.preventDefault(), t("dark");
              },
              icon: (0, eb.jsx)(ep.Y1U, { className: "icon-sm" }),
              children: "System Theme",
            });
          case "dark":
            return (0, eb.jsx)(ew, {
              onClick: (e) => {
                e.preventDefault(), t("light");
              },
              icon: (0, eb.jsx)(ep.wOW, { className: "icon-sm" }),
              children: "Dark Mode",
            });
          default:
            return (0, eb.jsx)(ew, {
              onClick: (e) => {
                e.preventDefault(), t("system");
              },
              icon: (0, eb.jsx)(ep.kXG, { className: "icon-sm" }),
              children: "Light",
            });
        }
      }
      function ek(e) {
        let { className: t, iconSize: n, searchQuery: r } = e,
          s = (0, em.useRouter)();
        return (0, eb.jsxs)(eo.Z.Root, {
          children: [
            (0, eb.jsx)(eo.Z.Trigger, {
              className: "hover:bg-transparent! group border-0 p-0",
              children: (0, eb.jsx)(el.zf, { iconSize: n, className: t }),
            }),
            (0, eb.jsx)(eo.Z.Portal, {
              children: (0, eb.jsxs)(eo.Z.Content, {
                collisionPadding: 10,
                children: [
                  (0, eb.jsx)(eO, {}),
                  (0, eb.jsx)(ew, {
                    onClick: () => ej.vm.toggleDebugModalOpen(),
                    icon: (0, eb.jsx)(eu.WP, { className: "icon-sm" }),
                    children: "Debug",
                  }),
                  (0, eb.jsx)(ew, {
                    onClick: () => ej.vm.toggleSettingsModalOpen(),
                    icon: (0, eb.jsx)(ec.KAl, { className: "icon-sm" }),
                    children: "Settings",
                  }),
                  (0, eb.jsx)(ey, { query: r }),
                  (0, eb.jsx)(eo.Z.Separator, {}),
                  (0, eb.jsx)(ew, {
                    onClick: () =>
                      s.push("/auth/logout", void 0, { shallow: !0 }),
                    icon: (0, eb.jsx)(eu.N_, { className: "icon-sm" }),
                    children: "Log out",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var eN = n(75388),
        eS = n(18450),
        eE = n(61082),
        eP = n(62456),
        e_ = n(5099),
        eC = n(44260),
        eD = n(83737),
        eM = n(24343);
      function eR(e) {
        let { children: t, className: n } = e,
          r = (0, ea.useRef)(null),
          s = (0, ea.useRef)(!1),
          a = (0, ea.useRef)(0),
          i = (0, ea.useRef)(0),
          l = (0, ea.useRef)(0),
          { 0: o, 1: c } = (0, ea.useState)(!1),
          { 0: u, 1: d } = (0, ea.useState)(0),
          { 0: m, 1: p } = (0, ea.useState)(0);
        (0, ea.useEffect)(
          () => () => {
            window.cancelAnimationFrame(l.current);
          },
          []
        );
        let h = () => {
            g(),
              setTimeout(() => {
                c(!1), (s.current = !1);
              });
          },
          g = () => {
            if (!r.current || 0.5 > Math.abs(i.current)) {
              window.cancelAnimationFrame(l.current);
              return;
            }
            (r.current.scrollLeft -= i.current),
              (i.current *= 0.95),
              (l.current = window.requestAnimationFrame(g));
          };
        return (0, eb.jsx)("div", {
          className: (0, es.default)("overflow-x-auto", n, {
            "cursor-grab": !o,
            "cursor-grabbing": o,
          }),
          ref: r,
          onPointerDown: (e) => {
            r.current &&
              (e.preventDefault(),
              d(e.pageX - r.current.offsetLeft),
              p(r.current.scrollLeft),
              c(!0),
              (a.current = e.pageX),
              (i.current = 0),
              window.cancelAnimationFrame(l.current));
          },
          onPointerMove: (e) => {
            if (!r.current || !o) return;
            e.preventDefault();
            let t = e.pageX - r.current.offsetLeft;
            (r.current.scrollLeft = m - (t - u)),
              (s.current = !0),
              (i.current = e.pageX - a.current),
              (a.current = e.pageX);
          },
          onPointerUp: h,
          onPointerLeave: h,
          onClickCapture: (e) => {
            s.current && (e.stopPropagation(), e.preventDefault());
          },
          children: t,
        });
      }
      var eL = n(75138),
        eT = n(82473),
        ez = n(61236),
        eU = n(98486),
        eI = n(79208),
        eZ = n(61888),
        eF = n(35601),
        eB = n(49593);
      let eV = (0, eZ.memoize)((e, t) =>
        eI.Ue({
          fetcher: async (n) => {
            let r = new Map();
            for await (let s of (0, eB._l)(n, e))
              s && r.set(s.url, s),
                t.setQueryData(["snippet", { url: s.url, prompt: e }], s);
            return (0, eZ.compact)(n.map((e) => r.get(e)));
          },
          resolver: eI.rp("url"),
          scheduler: eI.ck(500),
        })
      );
      function eq(e, t) {
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
      function eH(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eq(Object(n), !0).forEach(function (t) {
                (0, eS.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eq(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function eQ(e) {
        let { images: t, children: n } = e;
        return t.length >= 4
          ? (0, eb.jsx)(eG, {
              images: t,
              numVisible: Math.min(4 * Math.floor(t.length / 4), 8),
              children: n,
            })
          : t.length >= 1
            ? (0, eb.jsx)(eW, { image: t[0], children: n })
            : (0, eb.jsx)(eb.Fragment, { children: n });
      }
      function eW(e) {
        let { image: t, children: n } = e;
        return (0, eb.jsxs)("div", {
          className: "w-full",
          children: [
            (0, eb.jsx)(
              eK,
              {
                image: t,
                className:
                  "relative z-10 float-right -mt-1 mb-6 ml-6 max-w-[33%] overflow-hidden rounded-xl",
              },
              t.content_url
            ),
            n,
          ],
        });
      }
      function eG(e) {
        let { images: t, numVisible: n = 8, children: r } = e,
          s = (0, ea.useRef)(new Set()),
          { 0: a, 1: i } = (0, ea.useState)(new Map()),
          { 0: l, 1: o } = (0, ea.useState)(new Set()),
          c =
            null == t
              ? void 0
              : t.map((e) =>
                  eH(
                    eH({}, e),
                    {},
                    {
                      status: a.has(e.thumbnail_url)
                        ? "done"
                        : l.has(e.thumbnail_url)
                          ? "error"
                          : "loading",
                      ratio: a.get(e.thumbnail_url),
                    }
                  )
                );
        (0, ea.useEffect)(() => {
          null == t ||
            t.forEach((e) => {
              if (!s.current.has(e.thumbnail_url)) {
                s.current.add(e.thumbnail_url);
                let t = new Image();
                (t.onload = function () {
                  i((t) =>
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
        return (0, eb.jsxs)("div", {
          className: "flex flex-col",
          children: [
            (0, eb.jsx)(eX, {
              children: u
                .slice(0, n)
                .map((e, t) =>
                  (0, eb.jsx)(
                    eK,
                    {
                      image: e,
                      className: (0, es.default)(
                        "min-w-full overflow-hidden border border-token-border-light md:w-[calc((100%-0.25rem*3)/4)] md:min-w-[inherit]",
                        0 === t && "rounded-tl-xl",
                        3 === t && "rounded-tr-xl",
                        t === n - 4 && "rounded-bl-xl",
                        t === n - 1 && "rounded-br-xl"
                      ),
                    },
                    e.thumbnail_url
                  )
                ),
            }),
            r,
          ],
        });
      }
      function eX(e) {
        let { children: t } = e;
        return (0, en.w$)()
          ? (0, eb.jsx)("div", {
              className: "mb-6 flex flex-wrap gap-1 overflow-hidden",
              children: t,
            })
          : (0, eb.jsx)(eR, {
              className:
                "no-scrollbar -mx-snc-2 mt-4 flex gap-2 px-snc-2 pb-snc-2",
              children: t,
            });
      }
      function eK(e) {
        let { image: t, className: n } = e,
          r = (0, ea.useRef)(!1),
          { 0: s, 1: a } = (0, ea.useState)(!1);
        return (
          (0, ea.useEffect)(() => {
            if (!r.current) {
              r.current = !0;
              let e = new Image();
              (e.onload = () => a(!0)), (e.src = t.thumbnail_url);
            }
          }, [t]),
          (0, eb.jsx)("button", {
            className: (0, es.default)(
              "relative aspect-square overflow-hidden",
              n
            ),
            onClick: () => {
              ej.vm.setFocusedImageCitation(t);
            },
            children: s
              ? (0, eb.jsx)(eD.E.div, {
                  animate: { opacity: 1 },
                  initial: {
                    width: "100%",
                    height: "100%",
                    translateX: 0,
                    translateY: 0,
                    opacity: 0,
                  },
                  whileHover: {
                    width: "105%",
                    height: "105%",
                    translateX: "-2.5%",
                    translateY: "-2.5%",
                  },
                  transition: { duration: 0.3, ease: "easeInOut" },
                  children: (0, eb.jsx)("img", {
                    src: t.thumbnail_url,
                    alt: t.content_url,
                    className:
                      "h-full w-full bg-token-main-surface-tertiary object-cover",
                  }),
                })
              : (0, eb.jsx)("div", {
                  className:
                    "h-full w-full animate-pulse bg-token-main-surface-tertiary",
                }),
          })
        );
      }
      let eJ = ei.Z.a(
          o ||
            (o = (0, ee.Z)([
              "w-full rounded-full border p-2.5 font-medium border border-token-border-medium flex justify-center items-center hover:opacity-70",
            ]))
        ),
        eY = (0, ei.Z)(eJ)(
          c ||
            (c = (0, ee.Z)([
              "bg-token-text-primary text-token-main-surface-primary",
            ]))
        );
      function e$() {
        var e, t, n, r;
        let s = (0, ea.useRef)(new Set()),
          { 0: a, 1: i } = (0, ea.useState)(new Map()),
          l = (0, ej.W6)(ej.bM.getFocusedImageCitation),
          o = () => {
            ej.vm.setFocusedImageCitation(void 0);
          };
        (0, ea.useEffect)(() => {
          if (l && !s.current.has(l.content_url)) {
            s.current.add(l.content_url);
            let e = new Image();
            (e.onload = () =>
              i((t) =>
                new Map(t).set(l.content_url, {
                  status: "success",
                  width: e.width,
                  height: e.height,
                })
              )),
              (e.onerror = () => {
                i((e) => new Map(e).set(l.content_url, { status: "error" }));
              }),
              (e.src = l.content_url);
          }
        }, [l]);
        let c = (0, e_.d)(
            null !== (e = null == l ? void 0 : l.url) && void 0 !== e ? e : ""
          ),
          u = (function (e) {
            let t = (0, eT.NL)(),
              n = (0, eF.A)().settings,
              r = null == n ? void 0 : n.rewrittenSnippetsPrompt,
              s = eV(r, t);
            return (0, ez.a)({
              queryKey: ["snippet", { url: e, prompt: r }],
              queryFn: async () => await s.fetch(e),
            });
          })(
            null !== (t = null == l ? void 0 : l.url) && void 0 !== t ? t : ""
          ),
          d = a.get(
            null !== (n = null == l ? void 0 : l.content_url) && void 0 !== n
              ? n
              : ""
          ),
          m = null == l ? void 0 : l.content_url.split("/").pop(),
          p = u.isLoading || c.isLoading;
        return (0, eb.jsx)(eM.M, {
          children:
            l &&
            (0, eb.jsx)(eP.ZP.Root, {
              isOpen: !0,
              onClose: o,
              children: (0, eb.jsx)(eD.E.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.1 },
                children: (0, eb.jsx)(eP.ZP.Overlay, {
                  children: (0, eb.jsx)(eD.E.div, {
                    className: "h-full",
                    initial: { translateX: "-100%" },
                    animate: { translateX: 0 },
                    transition: { duration: 0.3, ease: "easeInOut" },
                    children: (0, eb.jsxs)(eC.VY, {
                      className:
                        "relative left-0 flex h-full w-full flex-col gap-5 overflow-y-auto bg-token-main-surface-primary p-[--snc-1] sm:w-1/3 sm:min-w-[600px] sm:p-[--snc-2]",
                      children: [
                        (0, eb.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, eb.jsxs)("div", {
                              className: "overflow-hidden",
                              children: [
                                (0, eb.jsx)("a", {
                                  className:
                                    "block truncate font-medium text-token-link hover:opacity-70",
                                  href: l.content_url,
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: m,
                                }),
                                (null == d ? void 0 : d.status) === "success" &&
                                  (0, eb.jsxs)("div", {
                                    className:
                                      "truncate text-sm text-token-text-tertiary sm:text-base",
                                    children: [d.width, " x ", d.height],
                                  }),
                              ],
                            }),
                            (0, eb.jsx)("button", {
                              onClick: o,
                              className: "outline-none hover:opacity-70",
                              children: (0, eb.jsx)(eu.v7, {
                                className: "icon-lg",
                              }),
                            }),
                          ],
                        }),
                        (null == d ? void 0 : d.status) === "success"
                          ? (0, eb.jsx)("a", {
                              className:
                                "flex justify-center bg-black font-medium text-token-link hover:opacity-90",
                              href: l.content_url,
                              target: "_blank",
                              rel: "noreferrer",
                              children: (0, eb.jsx)(eD.E.img, {
                                src: l.content_url,
                                alt: l.title,
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                className:
                                  "w-full object-fill hover:opacity-90",
                                style: {
                                  maxHeight: d.height,
                                  maxWidth: d.width,
                                },
                              }),
                            })
                          : (null == d ? void 0 : d.status) === "error"
                            ? (0, eb.jsx)("div", {
                                className:
                                  "h-[400px] w-full bg-token-main-surface-tertiary",
                              })
                            : (0, eb.jsx)("div", {
                                className:
                                  "h-[400px] w-full animate-pulse bg-token-main-surface-tertiary",
                              }),
                        p
                          ? (0, eb.jsx)("div", {
                              children: (0, eb.jsx)(eL.l, {
                                lines: 4,
                                variance: 1,
                              }),
                            })
                          : (0, eb.jsxs)("div", {
                              className: "flex flex-col gap-0.5",
                              children: [
                                (0, eb.jsxs)("div", {
                                  className: "flex justify-between",
                                  children: [
                                    (0, eb.jsx)("a", {
                                      href: l.url,
                                      className: "flex-grow hover:opacity-70",
                                      target: "_blank",
                                      rel: "noreferrer",
                                      children: c.data,
                                    }),
                                    (0, eb.jsx)(eE.Z, {
                                      url: l.content_url,
                                      className: "flex-shrink-0",
                                      size: 24,
                                    }),
                                  ],
                                }),
                                (0, eb.jsx)("a", {
                                  href: l.url,
                                  className: "font-medium hover:opacity-70",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: l.title,
                                }),
                                (0, eb.jsx)("div", {
                                  className: "text-token-text-tertiary",
                                  children:
                                    null === (r = u.data) || void 0 === r
                                      ? void 0
                                      : r.snippet,
                                }),
                              ],
                            }),
                        (0, eb.jsxs)("div", {
                          className: "flex flex-col gap-2 sm:flex-row",
                          children: [
                            (0, eb.jsx)(eJ, {
                              href: l.content_url,
                              target: "_blank",
                              rel: "noreferrer",
                              children: "Open Image",
                            }),
                            (0, eb.jsx)(eY, {
                              href: l.url,
                              target: "_blank",
                              rel: "noreferrer",
                              children: "View Source",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
        });
      }
      var e0 = n(11335);
      function e1(e) {
        let {
          label: t,
          labelSide: n = "right",
          className: r,
          onClick: s,
          children: a,
        } = e;
        return (0, eb.jsx)(e0.E, {
          label: t,
          sideOffset: 0,
          side: n,
          disabled: !t,
          children: (0, eb.jsx)("button", {
            onClick: s,
            className: (0, es.default)(
              "flex items-center justify-center p-1.5 text-token-text-tertiary hover:text-token-text-primary",
              r
            ),
            children: a,
          }),
        });
      }
      function e2() {
        return (e2 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var e5 = (e) =>
        ea.createElement(
          "svg",
          e2(
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
            (u = ea.createElement(
              "g",
              { id: "map-pin", stroke: "currentcolor", strokeWidth: 2 },
              ea.createElement("path", {
                id: "Ellipse 32766",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M20 11c0 6.329-8 10.5-8 10.5S4 17.28 4 11c0-4.57 3.582-8 8-8",
              }),
              ea.createElement("circle", {
                id: "Ellipse 32767",
                cx: 12,
                cy: 11,
                r: 3,
              }),
              ea.createElement("path", {
                id: "Vector 2883",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M16.5 2 21 6.5M21 2l-4.5 4.5",
              })
            ))
        );
      function e6() {
        return (e6 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var e3 = (e) =>
          ea.createElement(
            "svg",
            e6(
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
              (d = ea.createElement(
                "g",
                { id: "map-pin", stroke: "currentcolor", strokeWidth: 2 },
                ea.createElement("path", {
                  id: "Ellipse 32766",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M20 11c0 6.329-8 10.5-8 10.5S4 17.28 4 11c0-4.57 3.582-8 8-8",
                }),
                ea.createElement("circle", {
                  id: "Ellipse 32767",
                  cx: 12,
                  cy: 11,
                  r: 3,
                }),
                ea.createElement("path", {
                  id: "Vector 2884",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M16 5.095 17.667 7 21 2",
                })
              ))
          ),
        e4 = n(90240);
      function e8(e, t) {
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
      function e9(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e8(Object(n), !0).forEach(function (t) {
                (0, eS.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e8(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function e7(e) {
        let { settings: t, onUpdateSettings: n } = e,
          { setTheme: r, resolvedTheme: s } = (0, ed.F)();
        return (0, eb.jsxs)(eb.Fragment, {
          children: [
            (0, eb.jsx)(e1, {
              label: "Debug Modal (Internal)",
              onClick: () => ej.vm.toggleDebugModalOpen(),
              children: (0, eb.jsx)(eu.WP, { className: "icon-lg-heavy" }),
            }),
            (0, eb.jsx)(e1, {
              label: t.useLocation
                ? "Disable location services"
                : "Enable location services",
              onClick: () => {
                n(e9(e9({}, t), {}, { useLocation: !t.useLocation })),
                  t.useLocation || (0, e4.XB)(!0);
              },
              children: t.useLocation
                ? (0, eb.jsx)(e3, { className: "icon-lg-heavy" })
                : (0, eb.jsx)(e5, { className: "icon-lg-heavy" }),
            }),
            (0, eb.jsxs)(e1, {
              label: "Set theme to ".concat("dark" === s ? "light" : "dark"),
              onClick: () => {
                r("dark" === s ? "light" : "dark");
              },
              children: [
                "dark" === s &&
                  (0, eb.jsx)(ec.NWY, { className: "icon-lg-heavy" }),
                "light" === s &&
                  (0, eb.jsx)(ec.kLh, { className: "icon-lg-heavy" }),
              ],
            }),
            (0, eb.jsx)(e1, {
              label: "Search Settings",
              onClick: () => ej.vm.toggleSettingsModalOpen(),
              children: (0, eb.jsx)(ec.KAl, { className: "icon-lg-heavy" }),
            }),
          ],
        });
      }
      var te = n(19216),
        tt = n(92226),
        tn = n(79864),
        tr = n(35936),
        ts = n(2946),
        ta = n(90572),
        ti = n(47567),
        tl = n(19323),
        to = n.n(tl),
        tc = n(81479),
        tu = n(83216),
        td = n(78375);
      function tm(e, t) {
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
      function tp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tm(Object(n), !0).forEach(function (t) {
                (0, eS.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tm(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let th = {
          calculator: "Calculator",
          finance: "Finance",
          news: "News",
          "sports-schedule": "Sports Schedule",
          "sports-standings": "Sports Standings",
          "time-difference": "Timezone",
          weather: "Weather",
        },
        tg = {
          turn: {
            thumbsDown: [
              { label: "Too verbose", group: "Response" },
              { label: "Too short", group: "Response" },
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
              ...Object.keys(th).map(function (e) {
                return {
                  label: "No ".concat(th[e], " widget"),
                  group: "Widget",
                  match: (t) => {
                    var n;
                    return (
                      (null === (n = (0, td.K)(t)) || void 0 === n
                        ? void 0
                        : n.type) !== e
                    );
                  },
                };
              }),
              {
                label: (e) =>
                  "Shouldn't show ".concat(th[(0, td.K)(e).type], " widget"),
                group: "Widget",
                match: (e) => !!(0, td.K)(e),
              },
              {
                label: (e) =>
                  "Issue with ".concat(th[(0, td.K)(e).type], " widget"),
                group: "Widget",
                match: (e) => !!(0, td.K)(e),
              },
            ],
            thumbsUp: [
              { label: "Accurate", value: "Accurate" },
              { label: "Up-to-date", value: "Up-to-date" },
              { label: "Good search results", value: "Good search results" },
              {
                label: (e) =>
                  "Like the ".concat(th[(0, td.K)(e).type], " widget"),
                match: (e) => !!(0, td.K)(e),
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
      async function tf(e) {
        var t;
        let n =
            null !== (t = e.element) && void 0 !== t
              ? t
              : document.getElementById("__next"),
          r = await to()(n, {
            backgroundColor: e.isDarkMode ? null : "#ffffff",
          }),
          s = document.createElement("canvas"),
          a = s.getContext("2d"),
          i = (r.height / r.width) * 1440;
        return (
          (s.width = 1440),
          (s.height = i),
          null == a || a.drawImage(r, 0, 0, 1440, i),
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
      function tx(e) {
        let {
            onSubmit: t,
            turn: n,
            thumbsUpTooltip: r,
            thumbsDownTooltip: s,
            screenshotElement: a,
            type: i,
          } = e,
          { 0: l, 1: o } = (0, ea.useState)(null),
          { 0: c, 1: u } = (0, ea.useState)(null),
          d = (0, en.Gv)();
        return (0, eb.jsxs)("div", {
          onClick: (e) => {
            e.preventDefault(), e.stopPropagation();
          },
          children: [
            (0, eb.jsx)("div", {
              className: "flex items-center gap-2",
              children: [
                {
                  tooltip: null != r ? r : "Good",
                  rating: "thumbsUp",
                  Icon: eu.ib,
                  FilledIcon: eu.go,
                },
                {
                  tooltip: null != s ? s : "Bad",
                  rating: "thumbsDown",
                  Icon: eu.Q7,
                  FilledIcon: eu.W2,
                },
              ].map((e) => {
                let { tooltip: t, rating: n, Icon: r, FilledIcon: s } = e;
                return (0, eb.jsx)(
                  e0.u,
                  {
                    label: t,
                    sideOffset: 0,
                    className: "flex",
                    children: (0, eb.jsx)("button", {
                      className:
                        "block text-token-text-secondary hover:text-token-text-primary",
                      onClick: async () => {
                        o(await tf({ element: a, isDarkMode: d })), u(n);
                      },
                      disabled: c === n,
                      children:
                        c === n
                          ? (0, eb.jsx)(s, { className: "h-4 w-4" })
                          : (0, eb.jsx)(r, { className: "h-4 w-4" }),
                    }),
                  },
                  n
                );
              }),
            }),
            c &&
              (0, eb.jsx)(
                tc.Z,
                {
                  multiple: !0,
                  onSubmit: (e) =>
                    t(tp(tp({}, e), {}, { screenshot: l, currentRating: c })),
                  onCancel: () => {
                    o(null), u(null);
                  },
                  tagOptions: (function (e) {
                    let { type: t, turn: n, rating: r } = e;
                    return tg[t][r]
                      .filter((e) => !e.match || !n || e.match(n))
                      .map((e) => {
                        var t;
                        let r = e.label;
                        if ("function" == typeof r) {
                          if (!n) return null;
                          r = r(n);
                        }
                        return tp(
                          tp({}, e),
                          {},
                          {
                            label: r,
                            value:
                              null !== (t = e.value) && void 0 !== t ? t : r,
                          }
                        );
                      })
                      .filter((e) => null !== e);
                  })({ type: i, rating: c, turn: n }),
                  modalOnly: !0,
                  modalTitle: (0, eb.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      "thumbsUp" === c
                        ? (0, eb.jsx)(eu.go, { className: "mt-[-2px]" })
                        : (0, eb.jsx)(eu.W2, { className: "mb-[-2px]" }),
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
      function tA(e) {
        let { turn: t } = e,
          n = (0, te.nn)(te.LW.threadId),
          { user: r } = (0, eF.A)();
        (0, ea.useEffect)(() => {
          if (n) {
            if (null === t.index) throw Error();
            tu.Y.logEvent(tu.M.searchTurnFeedbackButtonShown, {
              turn_index: t.index,
              thread_id: n,
            });
          }
        }, []);
        let s = async (e) => {
          if (n && e.currentRating) {
            if (null === t.index) throw Error();
            tu.Y.logEvent(tu.M.searchTurnFeedbackSubmitted, {
              turn_index: t.index,
              thread_id: n,
              rating: e.currentRating,
              tags: e.tags,
              text: e.textFeedback,
            }),
              await (0, eB.k4)({
                turnIndex: t.index,
                threadId: n,
                rating: e.currentRating,
                searchQuery: t.user_query,
                tags: e.tags,
                text: e.textFeedback,
                screenshot: e.screenshot,
                userEmail: null == r ? void 0 : r.email,
              });
          }
        };
        return (0, eb.jsx)(tx, {
          onSubmit: s,
          type: "turn",
          turn: t,
          thumbsUpTooltip: "Good response",
          thumbsDownTooltip: "Bad response",
        });
      }
      function tv(e) {
        let { url: t, title: n, snippet: r, turnIndex: s } = e,
          a = (0, te.nn)(te.LW.threadId),
          { user: i, searchQuery: l } = (0, eF.A)(),
          o = (0, eF.A)().settings,
          c = (0, eT.NL)(),
          u = o.useRewrittenSnippets
            ? c.getQueryData(["snippet", { url: t }])
            : void 0,
          d = async (e) => {
            a &&
              e.currentRating &&
              i &&
              (tu.Y.logEvent(tu.M.searchLinkFeedbackSubmitted, {
                thread_id: a,
                rating: e.currentRating,
                url: t,
                tags: e.tags,
                text: e.textFeedback,
                turn_index: s,
              }),
              await (0, eB.NK)({
                url: t,
                title: n,
                snippet: r,
                rewrittenSnippet: u,
                threadId: a,
                rating: e.currentRating,
                searchQuery: l,
                tags: e.tags,
                text: e.textFeedback,
                screenshot: e.screenshot,
                userEmail: null == i ? void 0 : i.email,
              }));
          };
        return (0, eb.jsx)(tx, {
          onSubmit: d,
          type: "link",
          thumbsUpTooltip: "Good link",
          thumbsDownTooltip: "Bad link",
        });
      }
      function tb(e) {
        let { data: t } = e;
        return t.expression && void 0 !== t.result
          ? (0, eb.jsxs)("div", {
              children: [
                (0, eb.jsx)("div", {
                  className: "tracking-wide text-token-text-tertiary",
                  children: "".concat(t.expression, "="),
                }),
                (0, eb.jsx)("div", {
                  className: "text-3xl font-medium",
                  children: t.result,
                }),
              ],
            })
          : null;
      }
      var ty = n(58734),
        tj = n(56115);
      function tw(e) {
        let { data: t } = e;
        if (null === t.articles) throw Error();
        let n = (0, e_.u)(t.articles.map((e) => e.source_url));
        return (0, eb.jsxs)("div", {
          children: [
            (0, eb.jsx)("h2", { className: "mb-4", children: "Top stories" }),
            (0, eb.jsx)("div", {
              className: "flex flex-col gap-4",
              children: t.articles.map((e) => {
                var t;
                return (0, eb.jsxs)(
                  "div",
                  {
                    className: "flex min-h-28 items-center gap-4",
                    children: [
                      (0, eb.jsxs)("div", {
                        className: "flex-grow",
                        children: [
                          (0, eb.jsxs)("div", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                              (0, eb.jsx)(eE.Z, {
                                url: e.source_url,
                                className:
                                  "flex-shrink-0 rounded-full border border-token-border-medium",
                                size: 24,
                              }),
                              (0, eb.jsx)("span", {
                                children:
                                  null !== (t = n.get(e.source_url)) &&
                                  void 0 !== t
                                    ? t
                                    : (0, ty.p)(e.source_url, "short"),
                              }),
                            ],
                          }),
                          (0, eb.jsx)("a", {
                            href: e.source_url,
                            target: "_blank",
                            className:
                              "mt-2 line-clamp-2 inline-block cursor-pointer text-base font-medium text-token-link",
                            children: e.title,
                          }),
                          e.published_on &&
                            (0, eb.jsx)("div", {
                              className: "text-sm text-token-text-tertiary",
                              children: (0, tj.Z)(
                                new Date(e.published_on),
                                "MMM d, yyyy"
                              ),
                            }),
                        ],
                      }),
                      e.image_url &&
                        (0, eb.jsx)("img", {
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
      var tO = n(11265),
        tk = n(91304);
      let tN = (
        (null ===
          (r = Intl.DateTimeFormat(void 0, {
            timeZoneName: "long",
          }).formatToParts(new Date())) ||
        void 0 === r ||
        null === (r = r.find((e) => "timeZoneName" == e.type)) ||
        void 0 === r
          ? void 0
          : r.value) || Intl.DateTimeFormat().resolvedOptions().timeZone
      ).replace(/Daylight|Standard/g, "");
      function tS(e) {
        let [t, n] = e.split(":");
        return "".concat(t.padStart(2, "0"), ":").concat(n);
      }
      let tE = { T: "Top", B: "Bot" };
      function tP(e) {
        let { data: t } = e,
          { 0: n, 1: r } = (0, ea.useState)(!0);
        if (!t.games.length) return null;
        let s = t.league.league_url;
        function a(e) {
          return (
            "live" === e.status || ("complete" === e.status && null != e.points)
          );
        }
        return (0, eb.jsxs)(eb.Fragment, {
          children: [
            (0, eb.jsxs)("h2", {
              className: "text-xl font-medium",
              children: [t.league.display_name, " Schedule"],
            }),
            s &&
              (0, eb.jsx)("a", {
                href: s,
                target: "_blank",
                rel: "noreferrer",
                className: "text-sm text-token-link",
                children: s,
              }),
            (0, eb.jsx)("hr", { className: "mt-6 border-token-border-light" }),
            (0, eb.jsx)(tO.Z.Root, {
              size: "compact",
              children: (0, eb.jsx)(tO.Z.Body, {
                children: (0, eb.jsx)(eM.M, {
                  children: t.games.slice(0, n ? 6 : void 0).map((e, n) => {
                    var r;
                    return (0, eb.jsxs)(
                      tC,
                      {
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -30 },
                        transition: { duration: 0.2 },
                        children: [
                          (0, eb.jsx)(t_, {
                            className: "w-[180px]",
                            children: (function (e) {
                              var n, r;
                              switch (e.status) {
                                case "scheduled":
                                  return (0, eb.jsxs)(eb.Fragment, {
                                    children: [
                                      (function (e) {
                                        let t = new Date(1e3 * e);
                                        return (0, tk.Z)(t)
                                          ? "Today"
                                          : (0, tj.Z)(t, "MMMM d");
                                      })(e.scheduled),
                                      (0, eb.jsx)("br", {}),
                                      ((n = e.scheduled),
                                      (0, tj.Z)(new Date(1e3 * n), "h:mm a")),
                                    ],
                                  });
                                case "live":
                                  return (0, eb.jsxs)(eb.Fragment, {
                                    children: [
                                      "Now",
                                      (0, eb.jsx)("br", {}),
                                      (function (e, t) {
                                        if (!t.live_details) return null;
                                        if ("nba" === e) {
                                          var n;
                                          let e = t.live_details;
                                          return ""
                                            .concat(
                                              5 === (n = e.quarter)
                                                ? "OT"
                                                : "Q".concat(n),
                                              " "
                                            )
                                            .concat(tS(e.time));
                                        }
                                        if ("mlb" === e) {
                                          let e = t.live_details;
                                          if (e.current_inning_half)
                                            return ""
                                              .concat(
                                                tE[e.current_inning_half],
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
                                                    n = e % 100;
                                                  return (
                                                    e +
                                                    (t[(n - 20) % 10] ||
                                                      t[n] ||
                                                      "th")
                                                  );
                                                })(e.current_inning)
                                              );
                                        } else if ("nhl" === e) {
                                          let e = t.live_details;
                                          return "P"
                                            .concat(e.period, " ")
                                            .concat(tS(e.time));
                                        }
                                        return null;
                                      })(t.league.id, e),
                                    ],
                                  });
                                case "complete":
                                  return (0, eb.jsxs)("div", {
                                    children: [
                                      "Final",
                                      (0, eb.jsx)("br", {}),
                                      (0, eb.jsx)("div", {
                                        className: "text-token-text-secondary",
                                        children:
                                          void 0 === (r = e.scheduled)
                                            ? ""
                                            : (0, tj.Z)(
                                                new Date(1e3 * r),
                                                "EEE, MMM d"
                                              ),
                                      }),
                                    ],
                                  });
                              }
                            })(e),
                          }),
                          (0, eb.jsx)(t_, {
                            children: (0, eb.jsxs)("div", {
                              className: "w-full max-w-[280px]",
                              children: [
                                (0, eb.jsxs)("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    (0, eb.jsx)("span", {
                                      children: e.away.name,
                                    }),
                                    a(e) &&
                                      (0, eb.jsx)("span", {
                                        children: e.points.away,
                                      }),
                                  ],
                                }),
                                (0, eb.jsxs)("div", {
                                  className:
                                    "mt-2 flex items-center justify-between",
                                  children: [
                                    e.home.name,
                                    a(e) &&
                                      (0, eb.jsx)("span", {
                                        children: e.points.home,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, eb.jsx)(t_, {
                            textAlign: "right",
                            className: "text-token-text-secondary",
                            children:
                              null === (r = e.broadcasts) ||
                              void 0 === r ||
                              null ===
                                (r = r.find((e) => "National" === e.locale)) ||
                              void 0 === r
                                ? void 0
                                : r.network,
                          }),
                        ],
                      },
                      n
                    );
                  }),
                }),
              }),
            }),
            (0, eb.jsx)("hr", { className: "border-token-border-light" }),
            (0, eb.jsxs)("div", {
              className: "mt-6 flex items-center justify-between",
              children: [
                t.games.length > 6 &&
                  (0, eb.jsx)("button", {
                    className: "flex items-center text-sm font-medium",
                    onClick: () => r(!n),
                    children: n
                      ? (0, eb.jsxs)(eb.Fragment, {
                          children: [
                            "Show more ",
                            (0, eb.jsx)(ec.eOB, { className: "mb-[-2px]" }),
                          ],
                        })
                      : (0, eb.jsxs)(eb.Fragment, {
                          children: [
                            "Show less ",
                            (0, eb.jsx)(ec.BZB, { className: "mb-[-2px]" }),
                          ],
                        }),
                  }),
                (0, eb.jsx)("div", {
                  className: "text-xs text-token-text-tertiary",
                  children: tN,
                }),
              ],
            }),
          ],
        });
      }
      let t_ = (0, ei.Z)(tO.Z.Cell)(
          m || (m = (0, ee.Z)(["py-5 align-middle"]))
        ),
        tC = (0, eD.E)(tO.Z.Row);
      var tD = n(28541),
        tM = n.n(tD);
      let tR = ["East", "Central", "West"];
      function tL(e) {
        let { data: t } = e,
          { 0: n, 1: r } = (0, ea.useState)(0),
          s = tM()(t.conferences[n].divisions, (e) => {
            var t;
            let n = tR.indexOf(null !== (t = e.name) && void 0 !== t ? t : "");
            return -1 === n ? 1 / 0 : n;
          }),
          a =
            t.conferences.length > 1
              ? t.conferences.map((e, t) =>
                  (0, eb.jsx)(
                    "button",
                    {
                      className: (0, es.default)(
                        n === t
                          ? "bg-token-main-surface-secondary text-token-text-primary"
                          : "bg-transparent text-token-text-tertiary",
                        "rounded-lg px-3 py-1 text-xs font-medium"
                      ),
                      onClick: () => r(t),
                      children: e.name,
                    },
                    e.name
                  )
                )
              : null;
        return (0, eb.jsxs)(eb.Fragment, {
          children: [
            (0, eb.jsxs)("h2", {
              className: "text-xl font-medium",
              children: [t.league.display_name, " Standings"],
            }),
            a &&
              (0, eb.jsx)("div", { className: "mt-5 flex gap-1", children: a }),
            (0, eb.jsx)("div", {
              className: "mt-6",
              children: s.map((e) =>
                e.name
                  ? (0, eb.jsxs)(
                      "div",
                      {
                        className: "mt-5",
                        children: [
                          (0, eb.jsx)("div", {
                            className: "text-md font-medium",
                            children: e.name,
                          }),
                          (0, eb.jsx)(tI, {
                            league: t.league.id,
                            teams: e.teams,
                          }),
                        ],
                      },
                      e.name
                    )
                  : (0, eb.jsx)(tI, { league: t.league.id, teams: e.teams })
              ),
            }),
            (0, eb.jsx)("hr", { className: "border-token-border-light" }),
          ],
        });
      }
      let tT = (0, ei.Z)(tO.Z.HeaderCell)(
          p ||
            (p = (0, ee.Z)([
              "text-token-text-secondary text-xs dark:bg-token-main-surface-tertiary",
            ]))
        ),
        tz = {
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
              var t, n;
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
                      null === (n = e.streak) || void 0 === n
                        ? void 0
                        : n.length
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
        tU = {
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
      function tI(e) {
        let { league: t, teams: n } = e,
          r = tU[t];
        return (0, eb.jsxs)(tO.Z.Root, {
          size: "compact",
          children: [
            (0, eb.jsxs)(tO.Z.Header, {
              children: [
                (0, eb.jsx)(tT, { children: "Team" }),
                (0, eb.jsx)(tT, {}),
                r.map((e) =>
                  (0, eb.jsx)(
                    tT,
                    {
                      textAlign: "center",
                      className: "px-1",
                      children: (0, eb.jsx)("span", {
                        title: tz[e].label,
                        children: tz[e].column,
                      }),
                    },
                    e
                  )
                ),
              ],
            }),
            (0, eb.jsx)(tO.Z.Body, {
              children: n.map((e, t) =>
                (0, eb.jsxs)(
                  tO.Z.Row,
                  {
                    children: [
                      (0, eb.jsxs)(tO.Z.Cell, {
                        children: [
                          (0, eb.jsx)("div", {
                            className:
                              "mr-4 w-4 tabular-nums text-token-text-secondary",
                            children: t + 1,
                          }),
                          (0, eb.jsx)("span", {
                            className: "whitespace-nowrap",
                            children: e.name,
                          }),
                        ],
                      }),
                      (0, eb.jsx)(tO.Z.Cell, { className: "w-full" }),
                      r.map((t) =>
                        (0, eb.jsx)(
                          tO.Z.Cell,
                          {
                            textAlign: "center",
                            className: "whitespace-nowrap px-1 tabular-nums",
                            children: tz[t].format(e),
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
      var tZ = n(28294),
        tF = n(87751),
        tB = n(72541);
      function tV(e) {
        let { data: t } = e,
          {
            targetTime: n,
            sourceTime: r,
            humanReadableTargetTime: s,
            humanReadableSourceTime: a,
            humanReadableTimeDifference: i,
          } = (0, ea.useMemo)(() => {
            var e;
            let n = (0, tF.Z)(t.target_time, t.target_location.timezone),
              r =
                t.source_time &&
                null !== (e = t.source_location) &&
                void 0 !== e &&
                e.timezone
                  ? (0, tF.Z)(t.source_time, t.source_location.timezone)
                  : null,
              s = (0, tB.Z)(n, "h:mmaaa", {
                timeZone: t.target_location.timezone,
              }),
              a =
                r && t.source_location
                  ? (0, tB.Z)(r, "h:mmaaa", {
                      timeZone: t.source_location.timezone,
                    })
                  : null,
              i = r ? (0, tZ.Z)(n, r) : 0,
              l = r
                ? ""
                    .concat(i > 0 ? "+" : "–", " ")
                    .concat(Math.abs(i), " hours")
                : null;
            return {
              targetTime: n,
              sourceTime: r,
              humanReadableTargetTime: s,
              humanReadableSourceTime: a,
              humanReadableTimeDifference: l,
            };
          }, [
            t.source_location,
            t.source_time,
            t.target_location.timezone,
            t.target_time,
          ]),
          l = r ? (0, td.F)(t.source_location, r) : null,
          o = (0, td.F)(t.target_location, n);
        return a
          ? (0, eb.jsxs)("div", {
              className: "flex items-center gap-9",
              children: [
                (0, eb.jsxs)("div", {
                  children: [
                    (0, eb.jsx)("div", {
                      className: "text-3xl font-medium",
                      children: a,
                    }),
                    l &&
                      (0, eb.jsx)("div", {
                        className: "text-token-text-tertiary",
                        children: l,
                      }),
                  ],
                }),
                (0, eb.jsxs)("div", {
                  className:
                    "relative flex-grow text-center text-token-text-tertiary",
                  children: [
                    (0, eb.jsx)("div", {
                      className:
                        "absolute left-0 top-1/2 z-0 h-[1px] w-full border-t border-token-border-medium before:absolute before:right-0 before:block before:h-[5px] before:w-[5px] before:translate-y-[-3px] before:rounded-full before:bg-token-text-tertiary after:block after:h-[5px] after:w-[5px] after:translate-y-[-3px] after:rounded-full after:bg-token-text-tertiary",
                    }),
                    (0, eb.jsx)("span", {
                      className:
                        "absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-token-border-medium bg-token-main-surface-primary px-3 py-0.5 text-xs",
                      children: i,
                    }),
                  ],
                }),
                (0, eb.jsxs)("div", {
                  className: "text-right",
                  children: [
                    (0, eb.jsx)("div", {
                      className: "text-3xl font-medium",
                      children: s,
                    }),
                    (0, eb.jsx)("div", {
                      className: "text-token-text-tertiary",
                      children: o,
                    }),
                  ],
                }),
              ],
            })
          : (0, eb.jsxs)("div", {
              children: [
                (0, eb.jsx)("div", {
                  className: "text-3xl font-medium",
                  children: s,
                }),
                (0, eb.jsx)("div", {
                  className: "text-token-text-tertiary",
                  children: o,
                }),
              ],
            });
      }
      var tq = n(65998),
        tH = n(95430),
        tQ = n(25771);
      function tW(e) {
        let t = new Date(e);
        return (0, tj.Z)(t, "EEE, MMM d h:mm a");
      }
      function tG(e) {
        let t = new Date(e);
        return (0, tj.Z)(t, "MMM dd, yyyy");
      }
      function tX(e) {
        let t = new Date(e);
        return (0, tj.Z)(t, "MMM yyyy");
      }
      function tK(e) {
        let t = new Date(e);
        return (0, tj.Z)(t, "MMM dd");
      }
      tq.kL.register(
        tq.qi,
        tq.uw,
        tq.f$,
        tq.ZL,
        tq.Dx,
        tq.u,
        tq.ST,
        tq.od,
        tq.jn,
        tH.ZP
      );
      let tJ = {
        "1d": {
          label: "1D",
          formatTimestampLabel: function (e) {
            let t = new Date(e);
            return (0, tj.Z)(t, "h:mm a");
          },
          formatTimestampTooltip: tW,
          maxTicksLimit: 6,
          lineTension: 0,
        },
        "5d": {
          label: "5D",
          formatTimestampLabel: tK,
          formatTimestampTooltip: tW,
          maxTicksLimit: 6,
          lineTension: 0,
        },
        "1m": {
          label: "1M",
          formatTimestampLabel: tK,
          formatTimestampTooltip: function (e) {
            let t = new Date(e);
            return (0, tj.Z)(t, "EEE, MMM dd");
          },
          maxTicksLimit: 6,
          lineTension: 0.1,
        },
        "6m": {
          label: "6M",
          formatTimestampLabel: tX,
          formatTimestampTooltip: tG,
          maxTicksLimit: 5,
          lineTension: 0.1,
        },
        ytd: {
          label: "YTD",
          formatTimestampLabel: tX,
          formatTimestampTooltip: tG,
          maxTicksLimit: 5,
          lineTension: 0.1,
        },
        "1y": {
          label: "1Y",
          formatTimestampLabel: tX,
          formatTimestampTooltip: tG,
          maxTicksLimit: 5,
          lineTension: 0.2,
        },
        "5y": {
          label: "5Y",
          formatTimestampLabel: function (e) {
            let t = new Date(e);
            return (0, tj.Z)(t, "yyyy");
          },
          formatTimestampTooltip: tG,
          maxTicksLimit: 5,
          lineTension: 0.2,
        },
      };
      function tY(e) {
        let { isUp: t, histories: n, onSelectHistoryInterval: r } = e,
          { 0: s, 1: a } = (0, ea.useState)("1d"),
          i = n.quotes[s],
          l = Object.keys(n.quotes),
          o = tJ[s],
          { formatTimestampTooltip: c, maxTicksLimit: u } = o,
          d = (0, ea.useMemo)(() => {
            let { formatTimestampLabel: e, lineTension: n } = o;
            return {
              labels: i.map((t) => e(t.timestamp)),
              datasets: [
                {
                  data: i.map((e) => e.close),
                  borderColor: t ? "#10A37F" : "#FF0000",
                  borderWidth: 2,
                  pointRadius: 0,
                  lineTension: null != n ? n : 0.4,
                },
              ],
            };
          }, [o, i, t]);
        return (0, eb.jsxs)("div", {
          className: "flex h-[280px] flex-col gap-3 pb-10",
          children: [
            (0, eb.jsx)("div", {
              className:
                "flex items-center justify-between text-xs font-medium text-token-text-tertiary",
              children: l.map((e) =>
                (0, eb.jsx)(
                  "button",
                  {
                    onClick: () => {
                      a(e), null == r || r(e);
                    },
                    className: (0, es.default)(
                      "uppercase hover:text-token-text-secondary",
                      { "font-extrabold !text-token-text-primary": s === e }
                    ),
                    children: tJ[e].label,
                  },
                  e
                )
              ),
            }),
            (0, eb.jsx)(tQ.x1, {
              options: {
                responsive: !0,
                maintainAspectRatio: !1,
                interaction: { intersect: !1, mode: "index" },
                animation: { duration: 200 },
                scales: {
                  x: {
                    afterBuildTicks: (e) => {
                      if (e.ticks.length > u) {
                        let t = Math.ceil(e.ticks.length / (u - 1));
                        e.ticks = e.ticks.filter(
                          (n, r) =>
                            r > 0 && (r % t == 0 || r === e.ticks.length - 1)
                        );
                      }
                    },
                    grid: { display: !1 },
                    ticks: { align: "end" },
                  },
                  y: {
                    ticks: { maxTicksLimit: 7, stepSize: 1 },
                    border: { display: !1 },
                  },
                },
                plugins: {
                  tooltip: {
                    animation: !1,
                    callbacks: {
                      title: function (e) {
                        let t = e[0];
                        return t ? c(i[t.dataIndex].timestamp) : "";
                      },
                      label: (e) => e.formattedValue,
                    },
                  },
                  crosshair: {
                    line: { color: "#000", width: 0.5, dashPattern: [3, 1] },
                    zoom: { enabled: !1 },
                  },
                },
              },
              data: d,
            }),
          ],
        });
      }
      let t$ = {
        "1d": "today",
        "5d": "past 5 days",
        "1m": "past month",
        "6m": "past 6 months",
        ytd: "year to date",
        "1y": "past year",
        "5y": "past 5 years",
      };
      function t0(e) {
        var t;
        let { data: n } = e,
          { 0: r, 1: s } = (0, ea.useState)();
        if (!n.price || !n.asset) return null;
        let a =
            null === (t = n.histories) ||
            void 0 === t ||
            null === (t = t.quotes) ||
            void 0 === t ||
            null === (t = t[null != r ? r : ""]) ||
            void 0 === t
              ? void 0
              : t[0],
          i = a
            ? {
                changePercentage: ((n.price.price - a.close) / a.close) * 100,
                changeAmount: n.price.price - a.close,
                changeLabel: t$[null != r ? r : ""],
                isUp: n.price.price > a.close,
              }
            : {
                changePercentage: 100 * n.price.changePercent,
                changeAmount: n.price.change,
                changeLabel: "today",
                isUp: n.price.change > 0,
              };
        return (0, eb.jsxs)(eb.Fragment, {
          children: [
            (0, eb.jsx)(t1, { data: n, priceChange: i }),
            n.histories &&
              (0, eb.jsx)("div", {
                className: "mt-6",
                children: (0, eb.jsx)(tY, {
                  isUp: i.isUp,
                  histories: n.histories,
                  onSelectHistoryInterval: (e) => s(e),
                }),
              }),
          ],
        });
      }
      function t1(e) {
        let { data: t, priceChange: n } = e;
        if (!t.price || !t.asset) return null;
        let {
          isUp: r,
          changePercentage: s,
          changeLabel: a,
          changeAmount: i,
        } = n;
        return (0, eb.jsxs)("div", {
          className: "flex justify-between",
          children: [
            (0, eb.jsxs)("div", {
              children: [
                (0, eb.jsx)("div", {
                  className: "text-3xl font-medium",
                  children: t.asset.ticker,
                }),
                (0, eb.jsx)("div", {
                  className: "text-token-text-tertiary",
                  children: t.asset.name,
                }),
              ],
            }),
            (0, eb.jsxs)("div", {
              children: [
                (0, eb.jsxs)("div", {
                  className: "text-right text-3xl font-medium",
                  children: ["$", t.price.price.toFixed(2)],
                }),
                (0, eb.jsx)("div", {
                  className: "flex items-center gap-1",
                  children: (0, eb.jsxs)("span", {
                    className: (0, es.default)(
                      "flex items-center gap-1",
                      r ? "text-green-600" : "text-red-500"
                    ),
                    children: [
                      r ? (0, eb.jsx)(ep.iRh, {}) : (0, eb.jsx)(ep.tv1, {}),
                      "$",
                      i.toFixed(2),
                      " (",
                      Math.abs(s).toFixed(2),
                      "%) ",
                      a,
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var t2 = n(29924);
      let t5 = {
          foggy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/cloud-foggy.cce9a5f0.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEVMaXHx7+/X4Onk7fPs7vHf5OrR3+jI1d7p3t7W5e/w9vjY3+vP3unO3eXI1t/u9/vY4+zs7vD+/v7o9f5W9IPqAAAAEnRSTlMARymmNW/bqAX9vhT7Z5LPwH7S+gbIAAAACXBIWXMAACxLAAAsSwGlPZapAAAAO0lEQVR4nCWLSxLAIAjFngoI/kvvf9cONZNFNgF+NEyNoqls58RAbu983AlHhpgVRedhJrNDVw3yvQF8NBwBhP52cx8AAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          cloudy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/cloudy.663b016c.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXH8/Pzn7fDs7u/j4+P19fXj4+P39/fk5+fV3uH///+xxPMrAAAACnRSTlMA+4BqEr8l2kxPaipc6QAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADBJREFUeJxFy7ERwCAAw0DZhiR4/4E50qDmK8FtJON3thN43koy+KiGTz0Flm3nzhsYzgC8rUV38QAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "heavy-snow": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/heavy-snow.f2709a7f.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEX////e3uGZnp52qeLj6+/4+vunp7fp6em9xs5MaXH09veSwPTa4eXh6emcoKDj8f/s7OyUxOnu7u5RkOxVk/fi7vWOs+4kug0OAAAAF3RSTlP+IjEjrPIKAQYA0fRGYEH+Rf5cokX6fecDTcUAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA9SURBVHicJca3AcAwDAMwWlEh7fT2/6kZgglQiVQJpb339yZ0BrZxTWgBPMf4A0SDZnf3RRBtNVNBzGSWPkvLAepx2SliAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "light-snow": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/light-snow.eb08e0be.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEXFy9ji6u7i5+np7O2qrq74+vve3uFMaXH///+NoLiXxez09vfj7/vo7vFVk/dRkOyLuviOs+7NXBiYAAAAEnRSTlMEp0ZdDvIiAP4o9NH8qkWi/X2AI/mKAAAACXBIWXMAACxLAAAsSwGlPZapAAAAPUlEQVR4nCXLQQ7AIAwDQQcS7AAt7f8/W0W9rOayIAiQlbbWewPsof2cxAhpz/lDigE2M7t6PZnpLLg7wA89NgGYdptNnQAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          sleet: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sleet.8fade61a.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEXZ2dn+/v6uyNPe6fH39/fd3+Hm6Or6+vppnN9mmtzc5Ofu7u600wyKAAAADHRSTlMB/gup0yJG8FBSYFzt9rSBAAAACXBIWXMAACxLAAAsSwGlPZapAAAANElEQVR4nCWLQRIAIQjDQkHQ9f//dWB7aQ4JgMQsI7L/llkIVpkN/VAL0t39a2mfs6eSun8WZACr86JPXwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          drizzle: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-drizzle.9b674b1d.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVMaXHp6eb6+fj5690MpPL6+vr9/vng7fLX29//mQo1k+Tb3+IAiu8vj+/o5eX4iSf/mQ/09ffgUQD206em4vn3smny9/3////9xXClYpFaAAAAF3RSTlMAL/f8UOH9sSDvE0gwEFsngMEZruHmjgB2LmoAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA9SURBVHicRYtJDoAgFMUq0wdxnh73P6khMbGbblr4GZ6zbN1RqZWVHOW8vw+yk5J2YLnMrPZ4CuHb5hF4AUAGAb26FY2ZAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-drizzle.1a496fe5.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXEOpPSjtrbr6esyken/xnv5nCL////u7u37/PsAiu/K09v4x3nr8PHk6+6n4/n2+//y7+z5vmv29vbx8fHP6vL32ab/w1vS25v///P979Xlo6R0AAAAGXRSTlMAUA6FEQ8o/nH7MB25rZvhkVPf+F26pWIJJNRGlwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAD5JREFUeJwdi0cSgDAMxBRSbNMCoQ38/6GMo8PqsgIn9923+3GryTuXzClmx9cKKo7CEOu1rJOfxhB6BCkBP0FKAaR6tM9fAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          hazy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-hazy.1212b33b.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXHugBzhWwDs///1v33qagDru4Dyum7f2M7l4+L/lAbrvoL1qlTqYwD/nAvWv7Ha6//zyY3e7v3g0cDum1Dztl3/okj9tz2HhjCLAAAAFnRSTlMAj1YO5DH9/jI7Spn6fnJ9av6WhvPtBTp/2wAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADdJREFUeJxjYEACrHxcIIpTWFRcnJuBgUOIhZ2dXZCTgUOAhZ2NjYeDgYGZX0RMjBGimJcJSS8AOAMBfzCOZQYAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-hazy.e42f94c5.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEXZ0cnd1cPmy5Xh0bPO3u/P2t/T2dzzl0LD4Pv4yHPmt3jgz7D/nSbdzrzOzsbP3/H8myXS4Or50Yz+x3L76FKQAAAAEnRSTlMBxvWgNl6hGyYr1dd2ikSCbq0qLqViAAAACXBIWXMAACxLAAAsSwGlPZapAAAAN0lEQVR4nGNgQABOTgjNx8TMwsrKwMDBKMTNzybIwsDBLMTEyMbLwcDAziUszAVWxi7Aw46kFwAneQEz/FbbXwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "mostly-cloudy": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-mostly-cloudy.a840397c.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEVMaXHu7ev+lwfURgDV3OH67eL4+frh6e38+/j8hh7lTAD/kAD22bTT29vh4eH2+f3y9vr1wY748uz////9pRz6yIS95W8zAAAAE3RSTlMATKMSN/zsh/kmCvrRHSO1ueDywr9d+QAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADhJREFUeJxjYEAGXJxgipGfR4QJRLMJc4hyczLwcQhzsLIKMjPwsgkLCwsLMDAwsLCzs7OzILQCAC9HAXOMIefaAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-mostly-cloudy.4513b8c0.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEVMaXH/xFHa4uf/rz79yGXIyL35r1rr7/H6+/rp7e/k6ur1+f/2yo7726D2xnTi6ev/////+u5gzpT1AAAAEHRSTlMAk2O7RgswcfqLYrmW6fmEa2Ed4QAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADZJREFUeJxNyzEWgCAMwNCILW0VpNz/sjxd5C+ZAjuRL3b3A0Uj05+zYunus8GVLwNKjDD91wUqGwFXywTtSwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "mostly-sunny": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-mostly-sunny.78621f10.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXH5nBrtjBzx7uvguYXrskT47d/VplzqoCzsnzv06NH07uP2uFzqzJ79xnPx3bz0fQTtj0H4s2L/+vT/lwJPWFwgAAAAE3RSTlMAslatZiz7CS41vsuwb/1Nq7z5UMCx3gAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADlJREFUeJwli0kSwCAMgHBNYqtd9P9vdVQuXABAhI2a6fJz3c4noOY2nIHoO/5egOS/3MOJYzzf3icxXQFiwQEEBwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-mostly-sunny.736077bc.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXH6tUj38+/7ulHww3ba7PHj6PL/yVHX0NDroUz29fX+7c/1yn39x2Hq7Oz5z4rdnlfqmTe9tKf7tEv++Ov///3/22z/y1DpObbjAAAAFHRSTlMAfdpIMxsyAREmn/xw6334cns66xhuD7QAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA8SURBVHicJYxJEoAgDMCCFGxxQVDg/z91Bi6ZXBIA9gURggJ2+dgScHYX7gi6fdl5m3KMVwCtT7EVzsEPMR0BgZo07vwAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          shower: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-shower.0b97732f.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVMaXF/xOvi5eL5+fnj7fL8+/fg4uSZp8VBm9kxtPL5693e5ub/mQ/4iSf09fj/kgD9oBTgUQD206fy9/3m8PT3smn68Of////9xXApPI/3AAAAF3RSTlMAICfhtPk+BxJS/F2AJ8H55Rmujq/m/PJz1pwAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA/SURBVHicHcs5EsAgDMBAATYYcpBznP+/NAMq1C2Myny8r2MFcnL9+kZIrq29J1Hd3XdgEXkkD1FrDZOaWYEfRNYB6Q9nGIEAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-shower.facfcd4c.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXHy8O/7+/T40I//xnv5nCL///86ndfu7u38/PzR2trj6/AwtfQ0r+3j6u40te+wsLD/w1tmsuX5vmrk7/MxtPD2+//l7vPl8PP////979XrmuW/AAAAGXRSTlMAWPyvDyj8EXH6HJ1eHYlTDWIK37dIka21pov5hQAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAD9JREFUeJwdikcSgDAMxDbVNh0SyvL/hzJGB+kiwMm/w5V2rxpjKhmBZvFtBcrKSgW2pd/POACYp3MVnw8R7wdBSAIQ2ljlHQAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          sunny: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-sunny.8f75dd58.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEXknjbppDztkir7jQr1egj7nBH/owD/jwAI3XxvAAAABnRSTlMCMFeutLBMu4FdAAAACXBIWXMAACxLAAAsSwGlPZapAAAAKklEQVR4nGNgQABGRkZGMM3EysoEYjEys7Exgxks7OwQBhMLC1gKrhgKAAu7AFJ7ETTdAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-sunny.f60bb6f9.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXH1v3D6ulvFgkP2uFXsmzr8t0v8xmrMfzP6rEH9yWTuvXP/xkn/1lq115VcAAAADHRSTlMAMoQabnfvVyjR6B8qesGIAAAACXBIWXMAACxLAAAsSwGlPZapAAAAK0lEQVR4nGNgQABGRgjNzcUOYbDwMkEZPGxM7CBZZk4eHjawMmZWVg4kvQASXQCSOldqFwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "rain-thunder": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/rain-thunder.8b5abb7a.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXNw9B+krL7/Pz39/fX19vm6ez6+vrj6/Lg4OPs0K4YrvLU7ff1bADTeyX29/f////Btcd9AAAAD3RSTlMBCfzTFUbwWyXYRa5SiOOynbklAAAACXBIWXMAACxLAAAsSwGlPZapAAAAOElEQVR4nB3LSRIAMAgCQcSYPcX/f5tSLsOlAcAMtXCP7OiSN2B2kfSWRxQnEOesNdLs/W4pK/4BJNQBG1L8cOMAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          rain: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/rain.6bc7337d.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXF3qdH7/PzZ7PODxeTd3+Hm6er39/fm6er5+foisPUhrfD49/cgr/D///9qKVE6AAAADnRSTlMACPmuFiJG1V3tUUXMR/A5NykAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA4SURBVHicHcu3EQAxDANBEHTSG/Rfroa65KIFADPcqrvma0sdQFIkv0BuSWIC5e6+xrz/E1eZjT8maQESAQOY8gAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          snow: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/snow.e2194b7c.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEVMaXGN1Psxp/hPs/lau/wuoucto/FexP9evvmAz/0+sfl3yfhPtPtmu/ZDtvtHt/tmvvljvfhg/tIuAAAAEnRSTlMAIJRn1QsnBlKQen6NbJ6elpekN1BtAAAACXBIWXMAACxLAAAsSwGlPZapAAAAOklEQVR4nD3LWxLAEBAF0cZwjUck+9+s4iP9e6rhT8E9CKjeu1dgvmbfBNIwG+nQau05lEuMJd9NEmwpuwE7RoxDNwAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          thunder: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/thunder.f75568ad.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEVMaXH39fP+lBDs7O7TyLv49/f19/nZx7r8+/bt6uf4+frvzrH0sWXqfi3/3rb76NDe+P+/Tw/+///8wX6n34SZAAAAEnRSTlMA6v1LOrx3HP5B89z8o/79JxDTdaDoAAAACXBIWXMAACxLAAAsSwGlPZapAAAAPElEQVR4nEWLQRKAIAzEFmhpCwq6/v+vDlzIJZcEOIRqLJdGJgMKx6SroXr+6Kx4er6apwDsFhFb9bvnHzLNAYBRzT9nAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          tornado: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/tornado.6612217c.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXGo2fSv2eqRzu+o1e2b0/Kj1/PG5/ma2P+m2PK34fa44vWR0PGq2/MewmsRAAAADnRSTlMAhxJAIFt9TAqQqGpynBOM39IAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA0SURBVHicJYxLEgAgCIV4Wtr3/tdtGtnACsAotjKzga0dPdYAv9LswHCFfoBPtYpTxv7gAR7+AMKl7nQqAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          windy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/windy.d9e0363e.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEW94POs2/Ki1/PB5/y/5fbD5fe54vay3PGx3fOq1/GRzu7K5PCn3fjA5viLAA2MAAAADnRSTlMBgGwcWHGGEpsnT2smuyrvXT0AAAAJcEhZcwAALEsAACxLAaU9lqkAAAA0SURBVHicLYs5EsAgEMPkvUIC/P+7TJh1IxUywEMv62LVMNLxlCJ24CbJPuAtjdm1qeX/HxboAJu7C/1QAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
        },
        t6 = {
          foggy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/cloud-foggy.dd7950de.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXHf4eOruL+Ypa67usTm5ubf39+VoquPn6q0vsSaqLCtuMDq6ujFztW5xtCPn6uRnabg5ObH1N3X3+Oyv8n1+PqntL7KY4WZAAAAFXRSTlMAaLyIEUc5qP0r26LDz/rca377qWRo9xTkAAAACXBIWXMAACxLAAAsSwGlPZapAAAAO0lEQVR4nGNgQABWHjYQxcnNK8rIysjAwMkkJiIoKsrGwMTFwcUnJMzCwMLMwcHBL8DCwMDMDgKccM0ANnEBkRXS2wYAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          cloudy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/cloudy.13ac82a6.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVMaXHc3NzPz8/e3t7u7u75+fnR0dHo6OjX19fe3t7x8fHk5OTm5ubo6Oj5+fnt7e0uc/DEAAAADXRSTlMA/XpcaQ77tv1Cb9MfIkBT6wAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADdJREFUeJxFyzkSwDAIxVB9wHhJcO5/28y4sZpXCW4toh373h14n5IqYH2ZqXLm0JDkMM3M/M4/IhUA6UOO2WUAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "heavy-snow": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/heavy-snow.77bb418a.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEVMaXHk4uHo6OhwpeHa29vv6eno6Oi6v8Omq6zT0tJTku3j5+zP3erE0NlVk/eOtfKEtPSMuOHs7Ove39+MvOHz8e6k8HZVAAAAE3RSTlMAVO0i9Rs9BzKgosT++UV2/OnNNeiaQQAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADxJREFUeJwdy1sWgCAIQMGrokAvK2r/W+3Q/A+AKr9xr/NQKPXdzqXRa8j+XI0uIRHSYbi7lzxmZpk0wQc9ngGuSrmKlgAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "light-snow": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/light-snow.4e32b952.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXHa29vm5ubj4uLS0tLv6emkrKzJ0tze3+CoqKhwpeHr6+tVk/eOtfKEtPTF0NmMuOHj5+xTku3P3eri4uKNvOHz8e6rhQOcAAAAFHRSTlMA8j1TnBspBPwOItpFdvz56cSi/oEGpbQAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA+SURBVHicHctJEsAgCADBQUFAs2//f2oquXeD4w7glLHPk0Mdz7kcHYuQ9d46JldEiEFRVa2fbq3l3zLT4QVAZwGodCO9+wAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          sleet: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sleet.2f675d2a.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVMaXF2napvpOvLz9Ta2trp6enq6urn5+ft7e3i4uL////r6+vb29vh4eHi4uHw8PB5K4TQAAAADnRSTlMACU6d/Bs98MxTCw3oxHQRcAcAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA5SURBVHicRYs5EsAwCMQEmMM57P//1kOabCMVWvgXVdGcuXfd4LnGWO+FPy3pEGZmsyNV1e8lIgIHKTYBDXUvtesAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          drizzle: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-drizzle.8254e660.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEVMaXH548XW0s//jVXX2dbLzcwTr//QzMjk5OEig9b/mQ/4iSfh0csAl//gWwDj1cz/lAD/oBH20Ky0y9TU09Pi5Of7p038y4yNxt/X2dr/wF3z6Nv/166B/Q6lAAAAGnRSTlMA/v4JNqFO+h0SgCdPLxm5+eX5suOF5azc01JpvPsAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA+SURBVHicHYtHEsAgEICw7ppmYnr5/zszyoETQMU1634uHeDv1zxzj25WyndMqIhYk4HhWkPwNR5jbBOkBPxIZwHXAmz+EgAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-drizzle.43491efc.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXEYt/+Qi4m2s7GinZqOiYr8qDjPuZCZmZkbg8+np6cFov//xl+IiIX8xXG4ubu7uLXlxItgm7Pzs1l6kpuyuMPkz66koqED/17FAAAAFnRSTlMATv34bIQoD/wSWi9jorn+TKHc3rGJE/oGPgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADxJREFUeJwdizcSACEMxES04XIA/v9TBm8hNVpYE+Pdnn25hqufWahDNfQvE9V7HREkvf+RrN6csxOUAkw9sgGXAUXxAAAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          hazy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-hazy.2df474ab.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEW6ssn8nCX/1m2ksbuhrbHkyJPouXiUq8f/hBGdrb3MxLLPvqHxtX/QwKDAwL/Ds6Kerr67u7DSsab60oz+yHP7bsd7AAAAE3RSTlMBci6jXvXVJh02xqAm16iKgkQXSjmzBQAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADdJREFUeJxNi7cRACAMxJ5om5z2n5XjKECNGgl4aH3dXRRrAQozN2MEFKcLpRIw/Fo+nYiV4u/dKtMBQxhFTzIAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-hazy.9cb51a20.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXGj2v7qYwDnuX7GtqTqagDugBzGuq/vdgO2vr70qFOwwM/zt16vwtPnu4X/nAvrtnLttWnvnFDpsHH0vXL/okjvwYP9tz0ATiGzAAAAFHRSTlMADn6ZgjGPO1At+pbtavty5/vz4UwJX/4AAAAJcEhZcwAALEsAACxLAaU9lqkAAAA3SURBVHicY2BAAqz8HCCKnYVHXJyZgYGTW0BEUESMnYGTV1iET4yLnYGBkUVIVJQNopgJrBgKADyPAafnOGHHAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "mostly-cloudy": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-mostly-cloudy.f8a30a6d.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXH/37nY1NL4hR7jVQD/nQ3OysXMzc7g4uXR0dL/hxb+lgnZ0s3Y2Nj80Zfi4eLh4d3yzqzZ29z6sWva2tfu28vu4dL/wm7WbrWOAAAAFXRSTlMA/v4qDf3vex36IqOwNc6tPPjm3U1ZQW0wAAAACXBIWXMAACxLAAAsSwGlPZapAAAAOUlEQVR4nE3LNxKAQAzAQF20DVwk/f+nzNCAmq0E/+Ly0ltNK3DMy90poGZ5uD2i2Zs/N6CIiOi3Pi6qAV7Z72GJAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-mostly-cloudy.372053e6.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEVMaXGpqqr0qlX3wWmJiYmxsbD9ymmVlZWYmZvRxaP/xFKzuMD/skLHwLeQkJDWpWbryIe3s6w42Ym7AAAAEXRSTlMA+zD5fXhG/V0HlLC7/miR5vutVYAAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA2SURBVHicTcsxFoAgDMDQIC1tFdTe/7I8WPQvmQJ/re3o9Z4EoZmj9gMvZiUfcFsccBG541snJrsBJDZVFUcAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "mostly-sunny": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-mostly-sunny.8818b6bb.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEXkyV/h0r3pjB36jwrvoz7awJfgzr3QpFZMaXHsqDbMycbcr2/6s07/wlzx0qzhv5D6nSPxjTj/r1L/mAH24MY3KmZcAAAAE3RSTlMBvletNFL8BwAto2Cw/vZosrr6L00b5gAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAD1JREFUeJwly0kWgCAQA9EADZ2oTOL9z+pTVrWpD4LuBAHKTF9zuFIUwd7qGuZwpXU/gaDiLOXY85l/t/kLQjkB4np/vZYAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-mostly-sunny.94f2fdd6.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXH/uk34t2Otraz3qE791ob/y129ztnwsXalp7P4njRdof/9x2Clop3GvrPuzpeMk577skj3xXaop6X/22n/zE/FsZnr06/G5/DAAAAAE3RSTlMAfGyXLTFICx0pdBPqy9j8b+n3C8VrfgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADlJREFUeJxNy8kBgCAMAMEFAkkUBcWj/059yvwHfjljClgtPhIQr7B2B93fMxQB3Z52HwKox8Wm+wEuYQFeO6Nk0AAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          shower: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-shower.adb87269.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEVMaXHYzMP548XV1tfX2dbk5OAzuPwog8HHzc/R0dHVz8//mQ/j1cz/jVXgWwD4iSfm5ub8y4z20Kz/lADi5Oetzt7Mx8b7p03/oBH/wF3/167z6NvZyNklAAAAGXRSTlMA+v7bNiFLC6b7UIC5CRknFaz5+YXJ/uXlacy84gAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAD1JREFUeJwdi8cRwDAMgHCVlOb0uv+eOZsHL4DK2Jz25e6BGD7/bIU5mFvfayKZnc4PQKeHaqyx5NwmEAF+Rh4BwPnsOpEAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-shower.87b75170.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXH8qDyrq6uClJumop5NwPuHh4eenp3bv4uzr7CPjYu6ubgeeMOPiog8uPX2slP/xWfsxIKyucixsbD/xF/nyJrj0regh7WSAAAAFXRSTlMAKEbTcBy2/hAr/f0RlW3cuZVr7mXUpzeuAAAACXBIWXMAACxLAAAsSwGlPZapAAAAPUlEQVR4nB2LNxLAMAzD6EpZSnNJ/v/UnIwBWEjAke02+vLGad8TBJGkvXdApiqZATlTqrX5qFxln4DD/QM3LwFknr/kaAAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          sunny: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/sun-sunny.8f75dd58.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEXknjbppDztkir7jQr1egj7nBH/owD/jwAI3XxvAAAABnRSTlMCMFeutLBMu4FdAAAACXBIWXMAACxLAAAsSwGlPZapAAAAKklEQVR4nGNgQABGRkZGMM3EysoEYjEys7Exgxks7OwQBhMLC1gKrhgKAAu7AFJ7ETTdAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
            night: {
              src: "https://cdn.oaistatic.com/_next/static/media/moon-sunny.622ae977.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXH3sF7zr1r9t0v82If2oj3/vV38vVfnlE39rkL/ymX/vWf80nD/xkn/1lojtAibAAAADXRSTlMAMB/uMXGCaxXO51ZWNZhLrwAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAC5JREFUeJxjYEAAFhYIzcTFA2Gw87FBGbzMbNyMDAwMHJy8vMwgBgMHKysTkl4AFcAAqJORPzcAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          "rain-thunder": {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/rain-thunder.42051352.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEXSydTh5+zgvpjD19zp6eno5+ft7e2hrsnZ2dnp6en7cwDcgSYssezi4uIAwP/c29vh4eLx8fDFpJwQAAAAEHRSTlMBUNGiPvDMC/wbUoZFxEHoL8gBPgAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADlJREFUeJxFizkSwCAMxATYXpwL+P9nM6SJGqkR/FiEbRdfKwTps/d5ixw7PMFaq7UAup7z+C5JwAsrVgFMRu2jwQAAAABJRU5ErkJggg==",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          rain: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/rain.32e741db.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEXR2uPj4eElt/vs7Ozp6enp6enn5+eUtdTG09fa2dkptPYmt//t7e3h4eHb29vi4uHw8PDOSTekAAAAD3RSTlMBUkTLGz7wCqL8H0/OxOjxNS5OAAAACXBIWXMAACxLAAAsSwGlPZapAAAAOElEQVR4nEWLORLAIAzEBNheQw74/2szpEGN1AgO3ppvl1jrFljM3ucj7N0RBp6ZWQDVeo3/kgR8KjMBQHX4xtYAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          snow: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/snow.daca4237.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEWKvv9uqfx/v/5ln/xqpvxoqftio/10sPtrr/t8tv50rv10qv9Cc1mwAAAADHRSTlMBghzIb0mRSVtbkZG9AjS5AAAACXBIWXMAACxLAAAsSwGlPZapAAAAKUlEQVR4nGNgQAAmRkYmEM3OzcLCxsrAwMDJyMzMyIHMYOeCSsEVQwEAE24AiBHVbDAAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          thunder: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/thunder.72b79dd9.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXHo5uLk5uj7kg7a1tXq6enmpmDi1M/r6ujMzc7V1dbu7u7e//+/Tw/avKHtfyvs9fzdy7bV2t/o7vbs7Ozy8/TqyqTx4NGqzpCQAAAAFXRSTlMAQv79MLT8Fjn0/m0fENOeb/z85dzw+NVjAAAACXBIWXMAACxLAAAsSwGlPZapAAAAP0lEQVR4nEWLMRaAIAzFPtDSFlFArd7/pj5cyJIlARbKrNPhcr8FCPEZZ2RBf1MuxTfUI2UzU0AaEcms93/+ADgrAZ45qbIPAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          tornado: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/tornado.d7942f85.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXGfzuGg0euJyOeZzemh0uql0umbzuq72+99ueGv1taQyuiZ0OvV4+oMlWRNAAAADnRSTlMAD4ZAjm2kfUwdA1pdJfUXBaMAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA3SURBVHicJYy3DcBADMSorA/ef11D9jUsSBxs4V9odz8gGXUqBSxV/QBiWnq/ytwXsLEYjpyDFyBvAMyVE7UXAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          windy: {
            default: {
              src: "https://cdn.oaistatic.com/_next/static/media/windy.f087e077.png",
              height: 96,
              width: 96,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEWv2eyayuGUyeWgzeO12+2x1ue21uWz2OqkzeOizuOWyuSHxOGh1vGv1ukZT1qGAAAADnRSTlMBhWx+HFhtfxKbJ08mu5/+1zIAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA0SURBVHicLYu5EcAwDMOgP4rt/df1JSc2QAECPMyyfuxqpRxPs4gTuJqJLuAV6ZxaZeT7XxoXAKuBvPgJAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
        };
      function t3(e) {
        let { weatherCode: t, isDarkMode: n, isNight: r } = e,
          s = (n ? t6 : t5)[
            (function (e) {
              if (e >= 200 && e < 300)
                return 211 === e || 212 === e || 221 === e
                  ? "thunder"
                  : "rain-thunder";
              if (e >= 300 && e < 500)
                return e >= 300 && e <= 311 ? "drizzle" : "shower";
              if (e >= 500 && e < 600)
                return e >= 500 && e <= 504
                  ? "rain"
                  : 511 === e
                    ? "heavy-snow"
                    : "shower";
              if (e >= 600 && e < 700)
                return 611 === e || 612 === e || 613 === e
                  ? "sleet"
                  : 600 === e || 615 === e || 620 === e
                    ? "light-snow"
                    : 602 === e || 622 === e
                      ? "heavy-snow"
                      : "snow";
              if (e >= 700 && e < 800)
                return 701 === e || 741 === e
                  ? "hazy"
                  : 771 === e
                    ? "windy"
                    : 781 === e
                      ? "tornado"
                      : "foggy";
              if (e >= 800 && e < 900) {
                if (800 === e) return "sunny";
                if (801 === e) return "mostly-sunny";
                if (802 === e) return "mostly-cloudy";
              }
              return "cloudy";
            })(t)
          ];
        return s.night && r ? s.night : s.default;
      }
      function t4(e, t) {
        return "fahrenheit" === e
          ? Math.round((9 * t) / 5 + 32)
          : Math.round(((t - 32) * 5) / 9);
      }
      function t8(e) {
        let { weatherResults: t } = e,
          n = (0, en.Gv)(),
          { daily: r, hourly: s } = t,
          a = r[0],
          i = r.map((e) => new Date(1e3 * (e.timestamp + t.location.timezone))),
          l =
            (1 === i.length || (0, tk.Z)(i[0])) &&
            null !== a.temperature.min &&
            null !== a.temperature.max
              ? a
              : null;
        return (0, eb.jsxs)(eb.Fragment, {
          children: [
            (0, eb.jsxs)("div", {
              className: "flex items-center gap-4",
              children: [
                (0, eb.jsxs)("div", {
                  className: "flex-grow",
                  children: [
                    (0, eb.jsx)("div", {
                      className: "text-xl font-medium",
                      children: (0, td.F)(t.location),
                    }),
                    (0, eb.jsx)("div", {
                      className: "text-token-text-tertiary",
                      children: "".concat(
                        (function (e) {
                          let t = e.daily.map(
                            (t) =>
                              new Date(
                                1e3 * (t.timestamp + e.location.timezone)
                              )
                          );
                          return 1 === t.length || e.hourly.length > 0
                            ? ne(t[0], { alwaysShowDate: !0 })
                            : (0, tk.Z)(t[0])
                              ? 7 == t.length
                                ? "This week"
                                : "Next ".concat(t.length, " days")
                              : ""
                                  .concat(ne(t[0]), " - ")
                                  .concat(ne(t[t.length - 1]));
                        })(t)
                      ),
                    }),
                  ],
                }),
                l &&
                  (0, eb.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, eb.jsxs)("div", {
                        className:
                          "grid grid-cols-2 grid-rows-2 gap-x-2 text-left",
                        children: [
                          (0, eb.jsx)("span", {
                            className: "font-medium",
                            children: "High",
                          }),
                          (0, eb.jsx)("span", {
                            children: "".concat(
                              t4("fahrenheit", l.temperature.max),
                              "\xb0F"
                            ),
                          }),
                          (0, eb.jsx)("span", {
                            className: "font-medium",
                            children: "Low",
                          }),
                          (0, eb.jsx)("span", {
                            children: "".concat(
                              t4("fahrenheit", l.temperature.min),
                              "\xb0F"
                            ),
                          }),
                        ],
                      }),
                      (0, eb.jsx)("div", {
                        children: (0, eb.jsx)(ef(), {
                          alt: l.description.description,
                          src: t3({
                            weatherCode: l.description.id,
                            isDarkMode: n,
                            isNight: l.night,
                          }).src,
                          width: 58,
                          height: 58,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            s.length > 0 &&
              (0, eb.jsx)(eR, {
                className:
                  "no-scrollbar -mx-snc-2 mt-4 flex select-none gap-2 px-snc-2",
                children: s.map((e) =>
                  (0, eb.jsx)(t9, { weatherData: e }, e.timestamp)
                ),
              }),
            r.length > 1 &&
              (0, eb.jsx)("div", {
                className: "mt-4 flex flex-col gap-3",
                children: r.map((e, n) =>
                  s.length > 0 && 0 === n
                    ? null
                    : (0, eb.jsx)(
                        t7,
                        { weatherData: e, timezone: t.location.timezone },
                        e.timestamp
                      )
                ),
              }),
          ],
        });
      }
      function t9(e) {
        let { weatherData: t } = e,
          n = (0, en.Gv)(),
          r = t.description;
        return null === t.temperature.current ||
          t.timestamp < Date.now() / 1e3 - 3600
          ? null
          : (0, eb.jsxs)("div", {
              className:
                "flex min-w-[110px] flex-col items-center rounded-lg bg-token-main-surface-secondary py-4 dark:bg-gray-700/50",
              children: [
                (0, eb.jsx)(ef(), {
                  draggable: !1,
                  alt: r.description,
                  src: t3({
                    weatherCode: r.id,
                    isDarkMode: n,
                    isNight: t.night,
                  }).src,
                  width: 58,
                  height: 58,
                }),
                (0, eb.jsx)("div", {
                  className: "mt-3 font-medium",
                  children: "".concat(
                    t4("fahrenheit", t.temperature.current),
                    "\xb0F"
                  ),
                }),
                (0, eb.jsx)("div", {
                  className: "text-sm text-token-text-secondary",
                  children: (function (e, t) {
                    let n = new Date(1e3 * e + 0);
                    return (0, tj.Z)(n, "ha");
                  })(t.timestamp, 0),
                }),
              ],
            });
      }
      function t7(e) {
        let { weatherData: t, timezone: n } = e,
          r = (0, en.Gv)(),
          s = t.description,
          a = new Date(1e3 * (t.timestamp + n));
        return null === t.temperature.min || null === t.temperature.max
          ? null
          : (0, eb.jsxs)(
              "div",
              {
                className: "flex items-center gap-6",
                children: [
                  (0, eb.jsx)(ef(), {
                    alt: s.description,
                    src: t3({
                      weatherCode: s.id,
                      isDarkMode: r,
                      isNight: t.night,
                    }).src,
                    width: 58,
                    height: 58,
                  }),
                  (0, eb.jsxs)("div", {
                    children: [
                      (0, eb.jsx)("div", {
                        className: "font-medium",
                        children: ne(a),
                      }),
                      (0, eb.jsxs)("div", {
                        children: [
                          (0, eb.jsx)("span", {
                            className: "font-medium",
                            children: "H:",
                          }),
                          " ".concat(
                            t4("fahrenheit", t.temperature.max),
                            "\xb0F"
                          ),
                          (0, eb.jsx)("span", {
                            className: "ml-2 font-medium",
                            children: "L:",
                          }),
                          " ".concat(
                            t4("fahrenheit", t.temperature.min),
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
      function ne(e) {
        let { alwaysShowDate: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ((0, tk.Z)(e)) {
          let n = "Today";
          return t ? "".concat(n, ", ").concat((0, tj.Z)(e, "MMMM do")) : n;
        }
        if ((0, t2.Z)(e)) {
          let n = "Tomorrow";
          return t ? "".concat(n, ", ").concat((0, tj.Z)(e, "MMMM do")) : n;
        }
        return e.getTime() - Date.now() < 432e6
          ? (0, tj.Z)(e, "EEEE")
          : (0, tj.Z)(e, "EEEE, MMMM do");
      }
      function nt(e) {
        let { widget: t } = e;
        switch (null == t ? void 0 : t.type) {
          case "finance":
            return (0, eb.jsx)(t0, { data: t.data });
          case "sports-standings":
            return (0, eb.jsx)(tL, { data: t.data });
          case "sports-schedule":
            return (0, eb.jsx)(tP, { data: t.data });
          case "time-difference":
            return (0, eb.jsx)(tV, { data: t.data });
          case "calculator":
            return (0, eb.jsx)(tb, { data: t.data });
          case "news":
            return (0, eb.jsx)(tw, { data: t.data });
          case "weather":
            return (0, eb.jsx)(t8, { weatherResults: t.data });
          default:
            return null;
        }
      }
      function nn(e) {
        let { tldr: t } = e;
        return (0, eb.jsx)("a", {
          href: t.url,
          target: "_blank",
          children: (0, eb.jsxs)("div", {
            className:
              "flex max-w-full shrink items-start justify-between gap-4 md:gap-2",
            children: [
              (0, eb.jsxs)("div", {
                className: "flex shrink flex-col overflow-hidden",
                children: [
                  (0, eb.jsx)("div", {
                    className:
                      "shrink font-medium leading-none md:text-xl md:leading-normal",
                    children: t.display_title,
                  }),
                  (0, eb.jsx)("div", {
                    className:
                      "truncate text-sm text-token-link [overflow-wrap:anywhere] md:text-base",
                    children: t.url,
                  }),
                ],
              }),
              (0, eb.jsx)(eE.Z, {
                url: t.url,
                size: 128,
                className:
                  "h-snc-2 w-snc-2 shrink-0 rounded md:h-snc-3 md:w-snc-3",
              }),
            ],
          }),
        });
      }
      function nr(e) {
        return "fatal_system_error" === e.execution_status;
      }
      function ns(e, t) {
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
      function na(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ns(Object(n), !0).forEach(function (t) {
                (0, eS.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ns(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let ni = (0, ea.forwardRef)(function (e, t) {
        let {
          turn: n,
          isHighlighted: r,
          onRetryQuery: s,
          onInlineSuggestionClicked: a,
        } = e;
        if (null === n.index) throw Error();
        let i = n.index > 0;
        return (0, eb.jsxs)(
          eD.E.div,
          na(
            na(
              { ref: t, className: "flex flex-col gap-snc-1" },
              i
                ? {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.66, ease: "easeIn" },
                  }
                : {}
            ),
            {},
            {
              children: [
                i && (0, eb.jsx)(nl, { text: n.user_query }),
                nr(n)
                  ? (0, eb.jsx)(no, {
                      text: "Something went wrong. Please try again.",
                      canRetry: !0,
                      onRetry: () => s(n.user_query),
                    })
                  : (0, eb.jsx)(nc, {
                      turn: n,
                      isHighlighted: r,
                      onInlineSuggestionClicked: a,
                    }),
              ],
            }
          )
        );
      });
      function nl(e) {
        let { text: t } = e;
        return (0, eb.jsx)("div", {
          className: "text-bubble inline-flex justify-end",
          children: (0, eb.jsx)("div", {
            className:
              "max-w-[calc(100%-80px)] rounded-3xl rounded-br-lg bg-token-main-surface-tertiary px-snc-1 py-3 md:bg-token-main-surface-secondary",
            children: (0, eb.jsx)(nd, { text: t }),
          }),
        });
      }
      function no(e) {
        let { text: t, onRetry: n, canRetry: r } = e;
        return (0, eb.jsx)("div", {
          children: (0, eb.jsx)(tn.Z, {
            type: "danger",
            className:
              "my-0 border border-token-border-light bg-transparent text-token-text-secondary",
            iconClassName: "text-red-500",
            children: (0, eb.jsxs)("div", {
              className:
                "flex w-full items-center justify-between text-red-500",
              children: [
                t,
                r &&
                  (0, eb.jsx)("button", {
                    onClick: () => n(),
                    className: "red-500 font-medium text-token-text-primary",
                    children: "Retry",
                  }),
              ],
            }),
          }),
        });
      }
      function nc(e) {
        var t, n, r;
        let { turn: s, isHighlighted: a, onInlineSuggestionClicked: i } = e;
        if (null === s.index) throw Error();
        let l = (0, ea.useRef)(null),
          o = (0, te.nn)(te.LW.threadId),
          c = (0, te.nn)(te.LW.lastTurn),
          u = (null == c ? void 0 : c.index) === s.index,
          d =
            null !==
              (t =
                null === (n = s.model_response) || void 0 === n
                  ? void 0
                  : n.text) && void 0 !== t
              ? t
              : "",
          {
            processedText: m,
            displayedCitations: p,
            imageCitations: h,
            tldr: g,
          } = (function (e, t) {
            var n, r;
            let s;
            let a = "",
              i = 0,
              l = [],
              o = (
                null !==
                  (n =
                    null === (r = t.model_response) || void 0 === r
                      ? void 0
                      : r.citations) && void 0 !== n
                  ? n
                  : []
              )
                .toSorted(
                  (e, t) => e.start_idx - t.start_idx || e.end_idx - t.end_idx
                )
                .map((t, n) => {
                  let r = { type: ts.Zn.Standard };
                  return (
                    "webpage" === t.type
                      ? (r.metadata = {
                          title: t.title,
                          url: t.url,
                          type: "webpage",
                        })
                      : "image" === t.type
                        ? l.push(t)
                        : "tldr" === t.type && (s = t),
                    t.start_idx > i &&
                      ((a += e.slice(i, t.start_idx)), (i = t.end_idx)),
                    "" != a && (a += "&#8203;"),
                    (a += "``【oaicite:".concat(n, "】``&#8203;")),
                    t.end_idx > i && (i = t.end_idx),
                    r
                  );
                }),
              c = e.indexOf("【", Math.max(e.lastIndexOf("】"), i));
            return {
              processedText: (a += e.slice(i, -1 == c ? void 0 : c)),
              displayedCitations: o,
              imageCitations: l,
              tldr: s,
            };
          })(d, s),
          f = 1 === s.index,
          x = (0, td.K)(s),
          A =
            "in_progress" === s.execution_status || null === s.execution_status,
          v = (0, e_.u)(
            p.reduce((e, t) => {
              var n, r;
              return t.type === ts.Zn.Standard &&
                (null === (n = t.metadata) || void 0 === n
                  ? void 0
                  : n.type) !== "file" &&
                (null === (r = t.metadata) || void 0 === r ? void 0 : r.url) !=
                  null
                ? [...e, t.metadata.url]
                : e;
            }, [])
          );
        return (
          (0, ea.useEffect)(() => {
            a &&
              l.current &&
              l.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }, [a]),
          (0, eb.jsxs)(eb.Fragment, {
            children: [
              (0, eb.jsxs)("div", {
                ref: l,
                className: (0, es.default)("group flex flex-col gap-snc-1", {
                  "-mx-2 rounded-md bg-yellow-100 px-2 py-4 dark:bg-yellow-900":
                    a,
                }),
                children: [
                  null != x &&
                    (0, eb.jsx)(nu, {
                      $hideDivider:
                        null === (r = x.displayOptions) || void 0 === r
                          ? void 0
                          : r.hideDivider,
                      children: (0, eb.jsx)(nt, { widget: x }),
                    }),
                  null != g &&
                    (0, eb.jsx)(nu, { children: (0, eb.jsx)(nn, { tldr: g }) }),
                  (0, eb.jsxs)("div", {
                    children: [
                      (0, eb.jsx)(eQ, {
                        images: h,
                        children: (0, eb.jsx)(ts.h7.Provider, {
                          value: {
                            clientThreadId: tt.Zq,
                            displayType: ts.QU.expandAll,
                            displayedCitations: p,
                            isActivelyStreaming: A,
                            message: {
                              id: "",
                              author: { role: tt.uU.Assistant, name: "Search" },
                              content: { content_type: tt.PX.Text, parts: [d] },
                            },
                            attributions: v,
                            onCitationClicked: (e) => {
                              if (null === s.index) throw Error();
                              o &&
                                "webpage" === e.type &&
                                tu.Y.logEvent(tu.M.searchCitationClicked, {
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
                                tu.Y.logEvent(tu.M.searchCitationHovered, {
                                  thread_id: o,
                                  url: e.url,
                                  title: e.title,
                                  pub_date: e.pub_date,
                                  turn_index: s.index,
                                });
                            },
                          },
                          children: (0, eb.jsx)(nd, {
                            text: m,
                            onInlineSuggestionClicked: i,
                            isActivelyStreaming: A,
                          }),
                        }),
                      }),
                      !A &&
                        (0, eb.jsx)("div", {
                          className: (0, es.default)("hidden md:block", {
                            "invisible group-hover:visible": !u,
                          }),
                          children: (0, eb.jsx)(tA, { turn: s }),
                        }),
                    ],
                  }),
                ],
              }),
              f &&
                (0, eb.jsx)(tn.Z, {
                  type: "info",
                  dismissible: !0,
                  className: "hidden border border-token-border-light md:flex",
                  children:
                    "Follow ups aren't great yet. Please rate poor responses.",
                }),
            ],
          })
        );
      }
      let nu = ei.Z.div(h || (h = (0, ee.Z)(["md:pb-snc-1\n", ""])), (e) => {
        let { $hideDivider: t } = e;
        return !t && "md:border-b-[0.5px] border-token-border-medium";
      });
      function nd(e) {
        let {
          text: t,
          onInlineSuggestionClicked: n,
          isActivelyStreaming: r = !1,
        } = e;
        return (0, eb.jsx)(nm, {
          className: (0, es.default)(
            "relative text-token-text-primary",
            "" === t && r && "result-thinking",
            r && "result-streaming"
          ),
          onInlineSuggestionClicked: n,
          children: t,
        });
      }
      function nm(e) {
        let {
            size: t = "medium",
            children: n,
            className: r,
            onInlineSuggestionClicked: s,
          } = e,
          { resolvedTheme: a } = (0, ed.F)(),
          i = (0, ea.useMemo)(
            () =>
              na(
                na({}, tr.ff),
                {},
                {
                  a: (e) => {
                    let { href: t, children: n } = e;
                    if (t && /^turn[0-9]+ifs[0-9]+$/.test(t) && null != s) {
                      if (1 !== n.length) throw Error();
                      let e = n[0];
                      if ("string" != typeof e) throw Error();
                      return (0, eb.jsx)("button", {
                        className:
                          "underline underline-offset-2 hover:opacity-50",
                        onClick: () => s(e),
                        children: n,
                      });
                    }
                    return (0, eb.jsx)("a", {
                      href: t ? (0, tr.H)(t) : void 0,
                      children: n,
                    });
                  },
                  ol: (e) => {
                    let { start: t = 1, children: n } = e;
                    return (0, eb.jsx)("ol", {
                      children: ea.Children.map(n, (e, n) => {
                        if ((0, ea.isValidElement)(e)) {
                          let r = e.props.children;
                          return (0, eb.jsxs)(
                            "li",
                            {
                              children: [
                                (0, eb.jsxs)("span", {
                                  className: "mr-2 text-token-text-secondary",
                                  children: [t + n, "."],
                                }),
                                r,
                              ],
                            },
                            n
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
        return (0, eb.jsx)(ta.S, {
          name: "formatted_text_error",
          fallback: () => (0, eb.jsx)(eb.Fragment, { children: n }),
          children: (0, eb.jsx)(ti.D, {
            rehypePlugins: tr.Yu,
            remarkPlugins: tr.Hf,
            linkTarget: "_new",
            className: (0, es.default)(
              r,
              "prose w-full break-words dark:prose-invert",
              "dark" === a ? "dark" : "light",
              "small" === t && "prose-xs"
            ),
            transformLinkUri: tr.H,
            components: i,
            children: n,
          }),
        });
      }
      function np(e) {
        var t;
        let {
            lastFollowupTurnRef: n,
            onRetryQuery: r,
            highlightTurnIndex: s,
            onInlineSuggestionClicked: a,
          } = e,
          i = (0, te.nn)(te.LW.turns),
          l = (0, te.nn)(te.LW.firstTurn);
        return null != l && nr(l)
          ? (0, eb.jsx)(ng, { onRetryClick: r })
          : (0, eb.jsx)("div", {
              className: "flex w-full flex-col gap-snc-1",
              children:
                null != l &&
                ((null === (t = l.model_response) || void 0 === t
                  ? void 0
                  : t.text) != null ||
                  null != (0, td.K)(l))
                  ? i.map((e, t) =>
                      (0, eb.jsx)(
                        ni,
                        {
                          ref: t > 0 && t === i.length - 1 ? n : void 0,
                          turn: e,
                          isHighlighted: e.index === s,
                          onRetryQuery: r,
                          onInlineSuggestionClicked: a,
                        },
                        t
                      )
                    )
                  : (0, eb.jsx)(nh, {}),
            });
      }
      function nh() {
        return (0, eb.jsx)("div", {
          children: (0, eb.jsx)(eL.H, { lines: 6, variance: 3 }),
        });
      }
      function ng(e) {
        let { onRetryClick: t } = e;
        return (0, eb.jsx)("div", {
          className: "flex h-full w-full items-center justify-center",
          children: (0, eb.jsxs)("button", {
            className:
              "flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-full hover:bg-token-main-surface-secondary",
            onClick: () => t(),
            children: [
              (0, eb.jsx)(ec.muB, { className: "flex-shrink-0" }),
              "Retry",
            ],
          }),
        });
      }
      var nf = n(15118),
        nx = n(10987);
      function nA(e) {
        let {
            readyState: t,
            hasSubmittedInitialQuery: n,
            currentQuery: r,
            onUpdateCurrentQuery: s,
            onSubmit: a,
          } = e,
          i = (0, te.nn)(te.LW.firstTurn),
          l = null != i && nr(i),
          o = t !== nf.kQ.OPEN || !r || l;
        return (0, eb.jsx)(nx.Q, {
          value: r,
          expandDirection: "up",
          className:
            "md:snc-accent-border border border-token-border-heavy bg-token-main-surface-primary has-[:focus]:border-token-text-primary md:border-0 md:bg-token-main-surface-tertiary md:dark:border",
          submitButtonIcon: (0, eb.jsx)(ec.WmV, { className: "icon-lg-heavy" }),
          onSubmit: () => !o && a(r),
          shouldFocusOnKeyEvent: (e) => "u" === e.key && e.metaKey,
          disabled: l,
          placeholder: "Ask a follow-up...",
          autoFocus: !n,
          onChange: (e) => {
            s(e.target.value);
          },
        });
      }
      var nv = n(77799);
      function nb() {
        return (nb = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var ny = (e) =>
          ea.createElement(
            "svg",
            nb(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 22,
                height: 22,
                fill: "none",
                viewBox: "0 0 22 22",
              },
              e
            ),
            g ||
              (g = ea.createElement(
                "g",
                { id: "arrow-send" },
                ea.createElement("path", {
                  id: "vector",
                  fill: "currentcolor",
                  fillRule: "evenodd",
                  d: "M16.813 10.387a.867.867 0 0 1 0 1.226l-4.333 4.333a.867.867 0 0 1-1.226-1.226l2.854-2.853H5.8a.867.867 0 1 1 0-1.734h8.308L11.254 7.28a.867.867 0 0 1 1.226-1.226z",
                  clipRule: "evenodd",
                })
              ))
          ),
        nj = n(36270);
      function nw(e) {
        let { currentQuery: t, onUpdateCurrentQuery: n, onSubmit: r } = e,
          s = (0, ea.useRef)(null),
          a = (0, en.w$)(),
          { 0: i, 1: l } = (0, ea.useState)(!1),
          o = (0, nj.o)({ query: t }).find(
            (e) => e.length > t.length && e.startsWith(t)
          ),
          c = (0, ea.useCallback)(
            (e) => {
              if ("Enter" === e.key && r) {
                var a;
                e.preventDefault(),
                  r(t),
                  null === (a = s.current) || void 0 === a || a.blur();
              }
              ("Tab" === e.key || "ArrowUp" === e.key) &&
                o &&
                (e.preventDefault(), n(o));
            },
            [r, t, o, n]
          );
        return (
          (0, ea.useEffect)(
            () =>
              (0, nv.eR)(document, {
                keydown: (e) => {
                  e.metaKey &&
                    "k" === e.key &&
                    s.current &&
                    (e.preventDefault(), s.current.focus());
                },
              }),
            [s]
          ),
          (0, eb.jsxs)("div", {
            className: "relative w-full md:w-3/5",
            children: [
              (0, eb.jsx)(nO, {
                type: "text",
                className: "pointer-events-none w-full",
                disabled: !0,
              }),
              (0, eb.jsx)(nO, {
                type: "text",
                $transparentBg: !0,
                className:
                  "pointer-events-none absolute inset-0 text-token-text-tertiary",
                value: i && o ? o : "",
                disabled: !0,
              }),
              (0, eb.jsx)(nO, {
                ref: s,
                type: "text",
                $transparentBg: !0,
                name: "query",
                className: "peer absolute inset-0",
                value: t,
                autoComplete: "off",
                spellCheck: !1,
                placeholder: "Search...",
                onKeyDown: c,
                onChange: (e) => n(e.target.value),
                onFocus: () => l(!0),
                onBlur: () => l(!1),
              }),
              r &&
                (0, eb.jsx)("button", {
                  onClick: () => (null == r ? void 0 : r(t)),
                  className: (0, es.default)(
                    "absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-300 text-token-main-surface-tertiary hover:bg-token-border-light hover:text-token-text-secondary peer-focus:bg-token-text-primary peer-focus:text-token-main-surface-primary peer-focus:hover:opacity-80 dark:bg-gray-700"
                  ),
                  children: (0, eb.jsx)(ny, { className: "icon-lg-heavy" }),
                }),
              (0, eb.jsx)("div", {
                className:
                  "absolute left-3 top-1/2 -translate-y-1/2 px-0.5 md:left-5 md:px-0",
                children: a
                  ? (0, eb.jsx)(ep.jRj, {})
                  : (0, eb.jsx)(et.nI, { className: "icon-md" }),
              }),
            ],
          })
        );
      }
      let nO = ei.Z.input(
        f ||
          (f = (0, ee.Z)([
            "text-ellipsis rounded-full py-3 pl-12 pr-14 placeholder-gray-500 outline-none transition-colors focus:border-token-text-primary focus:ring-0 md:border-0\n",
            "",
          ])),
        (e) => {
          let { $transparentBg: t } = e;
          return t
            ? "bg-transparent"
            : "bg-token-main-surface-primary md:bg-token-main-surface-tertiary";
        }
      );
      var nk = n(67739);
      function nN() {
        return (nN = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nS = (e) =>
        ea.createElement(
          "svg",
          nN(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          x ||
            (x = ea.createElement("path", {
              stroke: "currentcolor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M20 9v-.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 4 16.88 4 15.2 4H11c-3.5 0-7 3.5-7 7v4.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 20 7.12 20 8.8 20H9m1.5-15-.558 2.512c-.16.72-.24 1.08-.422 1.372a2 2 0 0 1-.636.636c-.291.182-.651.262-1.372.422L5 10.5M17.76 20.355a2.202 2.202 0 0 1-3.115-3.114m5.71.518a2.202 2.202 0 0 0-3.114-3.114",
            }))
        );
      function nE() {
        return (nE = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nP = (e) =>
        ea.createElement(
          "svg",
          nE(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          A ||
            (A = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5",
            })),
          v ||
            (v = ea.createElement("path", {
              fill: "currentColor",
              d: "M5.344 18.769c0 1.107.549 1.809 1.332 1.809.594 0 1.017-.396 1.134-1.035l1.656.549c-.396 1.215-1.332 2.016-2.781 2.016-1.818 0-3.105-1.395-3.105-3.339s1.287-3.339 3.105-3.339c1.449 0 2.385.801 2.78 2.016l-1.655.549c-.117-.639-.54-1.035-1.134-1.035-.783 0-1.332.702-1.332 1.809m4.082 2.259.963-1.278c.549.621 1.278.909 1.935.909.54 0 .9-.198.9-.567 0-.414-.46-.468-1.45-.666-.944-.189-1.98-.54-1.98-1.854 0-1.323 1.144-2.142 2.575-2.142 1.134 0 2.025.441 2.538.999l-.954 1.188a2.17 2.17 0 0 0-1.63-.738c-.476 0-.8.18-.8.513 0 .369.396.432 1.179.594 1.008.207 2.268.486 2.268 1.926 0 1.395-1.224 2.196-2.718 2.196-1.053 0-2.286-.414-2.826-1.08m5.52 0 .962-1.278c.55.621 1.278.909 1.935.909.54 0 .9-.198.9-.567 0-.414-.459-.468-1.449-.666-.945-.189-1.98-.54-1.98-1.854 0-1.323 1.143-2.142 2.574-2.142 1.134 0 2.025.441 2.538.999l-.954 1.188a2.17 2.17 0 0 0-1.629-.738c-.477 0-.8.18-.8.513 0 .369.395.432 1.178.594 1.008.207 2.268.486 2.268 1.926 0 1.395-1.224 2.196-2.718 2.196-1.053 0-2.286-.414-2.826-1.08",
            })),
          b ||
            (b = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M9 8v2",
            }))
        );
      function n_() {
        return (n_ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nC = (e) =>
        ea.createElement(
          "svg",
          n_(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          y ||
            (y = ea.createElement("path", {
              fill: "currentColor",
              d: "M9.199 22v-.576c-.252.387-.846.675-1.63.675-1.7 0-2.951-1.35-2.951-3.294 0-1.953 1.278-3.366 3.078-3.366 1.413 0 2.34.747 2.736 1.935L9 17.833c-.144-.693-.612-1.089-1.296-1.089-.936 0-1.584.81-1.584 2.043s.648 2.043 1.61 2.043c.739 0 1.234-.495 1.315-1.161H7.615v-1.233h2.916V22zm4.228-6.462V22h-1.503v-6.462zM16.331 22h-1.476v-6.462h4.527v1.287h-3.05v1.467h2.537v1.26h-2.538z",
            })),
          j ||
            (j = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5",
            })),
          w ||
            (w = ea.createElement("path", {
              fill: "currentColor",
              d: "M6 5h2l-.862 1.724A.5.5 0 0 1 6.691 7H6zM9 5h3l-.862 1.724a.5.5 0 0 1-.447.276H8.566a.35.35 0 0 1-.313-.507zM13 5h3l-.862 1.724a.5.5 0 0 1-.447.276h-2.125a.35.35 0 0 1-.313-.507zM17 5h1v2h-1.434a.35.35 0 0 1-.313-.507z",
            }))
        );
      function nD() {
        return (nD = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nM = (e) =>
        ea.createElement(
          "svg",
          nD(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          O ||
            (O = ea.createElement("path", {
              fill: "currentColor",
              d: "M4.108 21.991v-1.296c.252.036.414.054.648.054.63 0 .918-.225.918-.873v-4.338h1.503v4.563c0 1.359-.864 1.953-2.232 1.953a5 5 0 0 1-.837-.063m5.51-2.241V22H8.113v-6.462h2.727c1.521 0 2.466.72 2.466 2.106 0 1.377-.945 2.106-2.466 2.106zm0-1.26h1.142c.711 0 1.071-.315 1.071-.846s-.36-.837-1.07-.837H9.616zm8.66 3.51v-.576c-.252.387-.846.675-1.629.675-1.701 0-2.952-1.35-2.952-3.294 0-1.953 1.278-3.366 3.078-3.366 1.413 0 2.34.747 2.736 1.935l-1.431.459c-.144-.693-.612-1.089-1.296-1.089-.936 0-1.584.81-1.584 2.043s.648 2.043 1.611 2.043c.738 0 1.233-.495 1.314-1.161h-1.431v-1.233h2.916V22z",
            })),
          k ||
            (k = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h7.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 19 8.828V11m-4-6v2.5a.5.5 0 0 0 .5.5H18m-2-1 .5-.5",
            }))
        );
      function nR() {
        return (nR = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nL = (e) =>
        ea.createElement(
          "svg",
          nR(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          N ||
            (N = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M19 11a7 7 0 1 0-14 0",
            })),
          S ||
            (S = ea.createElement("path", {
              fill: "currentColor",
              d: "M6.889 22H5.71l-1.224-4.086V22H2.794v-6.462h2.475l1.053 3.708 1.053-3.708h2.448V22h-1.71v-4.086zm8.027 0H13.26v-1.467h-2.907v-1.296l2.358-3.699h2.205v3.6h.891v1.395h-.89zm-2.997-2.862h1.296V17.05zm6.336-3.6h2.034L22.62 22h-1.791l-.414-1.17h-2.34L17.67 22h-1.746zm.99 1.953-.675 1.926h1.35z",
            })),
          E ||
            (E = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M14.5 11a2.5 2.5 0 0 0-5 0",
            }))
        );
      function nT() {
        return (nT = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nz = (e) =>
        ea.createElement(
          "svg",
          nT(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          P ||
            (P = ea.createElement("path", {
              fill: "currentColor",
              d: "M6.246 22h-1.08l-1.422-4.473V22h-1.43v-6.462H4.41l1.314 4.239 1.314-4.239H9.1V22H7.67v-4.473zm3.584-3.231c0-1.953 1.287-3.33 3.096-3.33 1.818 0 3.096 1.377 3.096 3.33s-1.278 3.33-3.096 3.33c-1.81 0-3.096-1.377-3.096-3.33m4.689 0c0-1.242-.657-2.025-1.593-2.025s-1.584.783-1.584 2.025.648 2.025 1.584 2.025 1.593-.783 1.593-2.025M19.789 22H18.23l-2.367-6.462h1.602l1.566 4.527 1.566-4.527h1.548z",
            })),
          _ ||
            (_ = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5",
            })),
          C ||
            (C = ea.createElement("path", {
              fill: "currentColor",
              d: "M6 5h2l-.862 1.724A.5.5 0 0 1 6.691 7H6zM9 5h3l-.862 1.724a.5.5 0 0 1-.447.276H8.566a.35.35 0 0 1-.313-.507zM13 5h3l-.862 1.724a.5.5 0 0 1-.447.276h-2.125a.35.35 0 0 1-.313-.507zM17 5h1v2h-1.434a.35.35 0 0 1-.313-.507z",
            }))
        );
      function nU() {
        return (nU = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nI = (e) =>
        ea.createElement(
          "svg",
          nU(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          D ||
            (D = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M19 11a7 7 0 1 0-14 0",
            })),
          M ||
            (M = ea.createElement("path", {
              fill: "currentColor",
              d: "M6.952 22h-1.18L4.55 17.914V22H2.857v-6.462h2.475l1.053 3.708 1.053-3.708h2.448V22h-1.71v-4.086zm5.579-2.061V22h-1.764v-6.462h2.826c1.593 0 2.574.756 2.574 2.205 0 1.44-.981 2.196-2.574 2.196zm0-1.467h.972c.62 0 .918-.279.918-.729 0-.459-.297-.729-.918-.729h-.972zm6.437 3.636c-1.413 0-2.475-.711-2.646-2.034l1.737-.252c.054.522.414.819.882.819.414 0 .765-.198.765-.648 0-.441-.37-.594-.882-.594h-.567V18.04h.549c.477 0 .8-.162.8-.567 0-.36-.242-.576-.665-.576-.477 0-.765.342-.828.783l-1.638-.153c.144-1.143 1.044-2.097 2.547-2.097 1.43 0 2.322.819 2.322 1.917 0 .648-.396 1.152-.846 1.341.549.252.936.702.936 1.467 0 1.08-.963 1.953-2.466 1.953",
            })),
          R ||
            (R = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M14.5 11a2.5 2.5 0 0 0-5 0",
            }))
        );
      function nZ() {
        return (nZ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nF = (e) =>
        ea.createElement(
          "svg",
          nZ(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          L ||
            (L = ea.createElement("path", {
              fill: "currentColor",
              d: "M6.844 22h-1.08l-1.422-4.473V22H2.91v-6.462h2.097l1.314 4.239 1.314-4.239h2.06V22h-1.43v-4.473zm5.383-2.25V22h-1.503v-6.462h2.727c1.521 0 2.466.72 2.466 2.106 0 1.377-.945 2.106-2.466 2.106zm0-1.26h1.143c.711 0 1.071-.315 1.071-.846s-.36-.837-1.07-.837h-1.144zM20.485 22H19.09v-1.512h-2.97v-1.125l2.493-3.825h1.88v3.744h1.018v1.206h-1.026zm-2.98-2.718h1.549v-2.403z",
            })),
          T ||
            (T = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5",
            })),
          z ||
            (z = ea.createElement("path", {
              fill: "currentColor",
              d: "M6 5h2l-.862 1.724A.5.5 0 0 1 6.691 7H6zM9 5h3l-.862 1.724a.5.5 0 0 1-.447.276H8.566a.35.35 0 0 1-.313-.507zM13 5h3l-.862 1.724a.5.5 0 0 1-.447.276h-2.125a.35.35 0 0 1-.313-.507zM17 5h1v2h-1.434a.35.35 0 0 1-.313-.507z",
            }))
        );
      function nB() {
        return (nB = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nV = (e) =>
        ea.createElement(
          "svg",
          nB(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          U ||
            (U = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M19 11a7 7 0 1 0-14 0",
            })),
          I ||
            (I = ea.createElement("path", {
              fill: "currentColor",
              d: "M2.647 18.769c0-1.944 1.296-3.339 3.16-3.339 1.871 0 3.167 1.395 3.167 3.339s-1.296 3.339-3.168 3.339c-1.863 0-3.159-1.395-3.159-3.339m4.554 0c0-1.125-.567-1.809-1.395-1.809-.819 0-1.386.684-1.386 1.809s.567 1.809 1.386 1.809c.828 0 1.395-.684 1.395-1.809M13.924 22v-.513c-.26.351-.828.621-1.557.621-1.728 0-2.979-1.35-2.979-3.294s1.287-3.384 3.141-3.384c1.485 0 2.44.774 2.835 1.998l-1.683.54c-.117-.648-.522-1.008-1.143-1.008-.819 0-1.386.72-1.386 1.827 0 1.116.567 1.836 1.413 1.836.594 0 1.008-.369 1.125-.855h-1.242v-1.395h3.006V22zm6.654 0v-.513c-.261.351-.828.621-1.557.621-1.728 0-2.98-1.35-2.98-3.294s1.288-3.384 3.142-3.384c1.485 0 2.439.774 2.835 1.998l-1.683.54c-.117-.648-.522-1.008-1.143-1.008-.82 0-1.386.72-1.386 1.827 0 1.116.567 1.836 1.413 1.836.594 0 1.008-.369 1.125-.855h-1.242v-1.395h3.006V22z",
            })),
          Z ||
            (Z = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M14.5 11a2.5 2.5 0 0 0-5 0",
            }))
        );
      function nq() {
        return (nq = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nH = (e) =>
        ea.createElement(
          "svg",
          nq(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          F ||
            (F = ea.createElement("path", {
              fill: "currentColor",
              d: "M5.315 19.75V22H3.812v-6.462h2.727c1.52 0 2.466.72 2.466 2.106 0 1.377-.945 2.106-2.466 2.106zm0-1.26h1.143c.71 0 1.07-.315 1.07-.846s-.36-.837-1.07-.837H5.315zM9.63 22v-6.462h2.295c2.052 0 3.303 1.26 3.303 3.231S13.978 22 11.925 22zm1.467-1.269h.828c1.161 0 1.818-.774 1.818-1.962s-.657-1.962-1.827-1.962h-.819zM17.434 22h-1.476v-6.462h4.527v1.287h-3.05v1.467h2.537v1.26h-2.538z",
            })),
          B ||
            (B = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h7.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 19 8.828V11m-4-6v2.5a.5.5 0 0 0 .5.5H18m-2-1 .5-.5",
            }))
        );
      function nQ() {
        return (nQ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nW = (e) =>
        ea.createElement(
          "svg",
          nQ(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          V ||
            (V = ea.createElement("path", {
              fill: "currentColor",
              d: "M4.493 19.75V22H2.99v-6.462h2.727c1.521 0 2.466.72 2.466 2.106 0 1.377-.945 2.106-2.466 2.106zm0-1.26h1.143c.711 0 1.071-.315 1.071-.846s-.36-.837-1.07-.837H4.492zm9.904-2.952V22h-1.305l-2.844-4.167V22h-1.44v-6.462h1.503l2.646 3.951v-3.951zM19.711 22v-.576c-.252.387-.846.675-1.63.675-1.7 0-2.951-1.35-2.951-3.294 0-1.953 1.278-3.366 3.078-3.366 1.413 0 2.34.747 2.736 1.935l-1.431.459c-.144-.693-.612-1.089-1.296-1.089-.936 0-1.584.81-1.584 2.043s.648 2.043 1.61 2.043c.739 0 1.234-.495 1.315-1.161h-1.431v-1.233h2.916V22z",
            })),
          q ||
            (q = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h7.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 19 8.828V11m-4-6v2.5a.5.5 0 0 0 .5.5H18m-2-1 .5-.5",
            }))
        );
      function nG() {
        return (nG = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nX = (e) =>
        ea.createElement(
          "svg",
          nG(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          H ||
            (H = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h8.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 19 7.828V11",
            })),
          Q ||
            (Q = ea.createElement("path", {
              fill: "currentColor",
              d: "M4.757 19.858V22H2.993v-6.462h2.826c1.593 0 2.574.774 2.574 2.16 0 .918-.468 1.602-1.287 1.935L8.59 22H6.575l-1.27-2.142zm0-1.395h.972c.62 0 .918-.288.918-.72 0-.459-.297-.729-.918-.729h-.972zm6.217-2.925h2.034L15.34 22h-1.79l-.415-1.17h-2.34L10.39 22H8.643zm.99 1.953-.675 1.926h1.35zm5.607 2.367V22h-1.764v-6.462h2.826c1.593 0 2.574.774 2.574 2.16 0 .918-.468 1.602-1.287 1.935L21.405 22H19.39l-1.269-2.142zm0-1.395h.972c.621 0 .918-.288.918-.72 0-.459-.297-.729-.918-.729h-.972zM12 5h-2v2h1.5a.5.5 0 0 0 .5-.5zM10 7H8.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H10zM12 9.5a.5.5 0 0 0-.5-.5H10v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5z",
            }))
        );
      function nK() {
        return (nK = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var nJ = (e) =>
        ea.createElement(
          "svg",
          nK(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          W ||
            (W = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M19 11a7 7 0 1 0-14 0",
            })),
          G ||
            (G = ea.createElement("path", {
              fill: "currentColor",
              d: "M5.915 15.538h1.45l.908 3.834.9-3.834h1.791L9.264 22H7.57l-.954-3.816L5.663 22H3.971l-1.7-6.462h1.835l.91 3.834zm6.807 0h2.034L17.087 22h-1.79l-.415-1.17h-2.34L12.137 22h-1.746zm.99 1.953-.675 1.926h1.35zM20.394 22h-1.81l-2.34-6.462h1.882l1.395 4.158 1.404-4.158h1.809z",
            })),
          X ||
            (X = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M14.5 11a2.5 2.5 0 0 0-5 0",
            }))
        );
      function nY() {
        return (nY = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var n$ = (e) =>
        ea.createElement(
          "svg",
          nY(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
              viewBox: "0 0 24 24",
            },
            e
          ),
          K ||
            (K = ea.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeWidth: 2,
              d: "M5 11V6a2 2 0 0 1 2-2h8.172a2 2 0 0 1 1.414.586l1.828 1.828A2 2 0 0 1 19 7.828V11",
            })),
          J ||
            (J = ea.createElement("path", {
              fill: "currentColor",
              d: "M9.882 20.506V22H4.59v-1.314l3.006-3.654h-2.97v-1.494h5.22v1.305l-2.961 3.663zm2.96-4.968V22H11.08v-6.462zm3.146 4.401V22h-1.764v-6.462h2.826c1.593 0 2.574.756 2.574 2.205 0 1.44-.98 2.196-2.574 2.196zm0-1.467h.972c.621 0 .918-.279.918-.729 0-.459-.297-.729-.918-.729h-.972zM12 5h-2v2h1.5a.5.5 0 0 0 .5-.5zM10 7H8.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H10zM12 9.5a.5.5 0 0 0-.5-.5H10v1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5z",
            }))
        );
      function n0(e) {
        let { searchResult: t, className: n } = e;
        switch (t.content_type) {
          case "application/pdf":
            return (0, eb.jsx)(nH, { className: n });
          case "image/gif":
            return (0, eb.jsx)(nC, { className: n });
          case "image/jpeg":
            return (0, eb.jsx)(nM, { className: n });
          case "image/png":
            return (0, eb.jsx)(nW, { className: n });
          case "audio/mpeg":
            return (0, eb.jsx)(nI, { className: n });
          case "audio/m4a":
            return (0, eb.jsx)(nL, { className: n });
          case "audio/ogg":
            return (0, eb.jsx)(nV, { className: n });
          case "audio/wav":
            return (0, eb.jsx)(nJ, { className: n });
          case "video/mp4":
            return (0, eb.jsx)(nF, { className: n });
          case "video/quicktime":
            return (0, eb.jsx)(nz, { className: n });
          case "application/zip":
            return (0, eb.jsx)(n$, { className: n });
          case "application/x-rar-compressed":
            return (0, eb.jsx)(nX, { className: n });
          case "text/css":
            return (0, eb.jsx)(nP, { className: n });
        }
        switch (new URL(t.url).pathname.split(".").pop()) {
          case "pdf":
            return (0, eb.jsx)(nH, { className: n });
          case "gif":
            return (0, eb.jsx)(nC, { className: n });
          case "jpg":
          case "jpeg":
            return (0, eb.jsx)(nM, { className: n });
          case "png":
            return (0, eb.jsx)(nW, { className: n });
          case "mp3":
            return (0, eb.jsx)(nI, { className: n });
          case "m4a":
            return (0, eb.jsx)(nL, { className: n });
          case "ogg":
            return (0, eb.jsx)(nV, { className: n });
          case "wav":
            return (0, eb.jsx)(nJ, { className: n });
          case "mp4":
            return (0, eb.jsx)(nF, { className: n });
          case "mov":
            return (0, eb.jsx)(nz, { className: n });
          case "zip":
            return (0, eb.jsx)(n$, { className: n });
          case "rar":
            return (0, eb.jsx)(nX, { className: n });
          case "css":
            return (0, eb.jsx)(nP, { className: n });
          default:
            return null;
        }
      }
      function n1(e, t) {
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
      function n2(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n1(Object(n), !0).forEach(function (t) {
                (0, eS.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : n1(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function n5(e, t) {
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
      function n6(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n5(Object(n), !0).forEach(function (t) {
                (0, eS.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : n5(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let n3 = ["turnIndex", "groupPosition", "rawPosition"];
      function n4(e, t) {
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
      function n8(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n4(Object(n), !0).forEach(function (t) {
                (0, eS.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : n4(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function n9(e) {
        let { searchResult: t } = e;
        return t.pub_date
          ? (0, eb.jsxs)("span", {
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
      function n7(e) {
        return { ease: "easeOut", duration: 0.15, delay: (e + 1) * 0.09 };
      }
      function re(e) {
        var t;
        let {
            secondaryResults: n,
            rawPosition: r,
            groupPosition: s,
            turnIndex: a,
            showFeedbackButtons: i,
            highlightUrl: l,
          } = e,
          o = (0, en.w$)(),
          c = o ? 1 : 10,
          { 0: u, 1: d } = (0, ea.useState)(n.length <= c + 1),
          m = u ? n : n.slice(0, c),
          p = (0, e_.d)(n[0].url).data,
          h = n[0];
        return (0, eb.jsxs)("div", {
          className: "mt-5 flex flex-col gap-5",
          children: [
            m.map((e, t) =>
              (0, eb.jsx)(
                eD.E.div,
                {
                  className: "group relative",
                  initial: o ? { opacity: 0, translateY: 4 } : {},
                  animate: o ? { opacity: 1, translateY: 0 } : {},
                  transition: n7(t),
                  children: (0, eb.jsxs)(
                    rn,
                    {
                      href: e.url,
                      turnIndex: a,
                      groupPosition: [s[0], t],
                      rawPosition: r + t,
                      target: "_blank",
                      rel: "noreferrer",
                      className: (0, es.default)(
                        "block group-hover:text-token-link",
                        { "bg-yellow-100 dark:bg-yellow-900": l === e.url }
                      ),
                      children: [
                        (0, eb.jsxs)("div", {
                          className:
                            "relative line-clamp-1 pr-[70px] text-base font-medium group-hover:text-token-link md:text-sm",
                          children: [
                            e.title,
                            i &&
                              (0, eb.jsx)("div", {
                                className:
                                  "invisible absolute right-0 top-0 py-1 group-hover:visible",
                                children: (0, eb.jsx)(tv, {
                                  url: e.url,
                                  title: e.title,
                                  snippet: e.snippet,
                                  turnIndex: a,
                                }),
                              }),
                          ],
                        }),
                        (0, eb.jsxs)("div", {
                          className:
                            "line-clamp-1 text-base font-normal text-token-text-secondary md:text-sm",
                          children: [
                            (0, eb.jsx)(n0, {
                              searchResult: e,
                              className: "mr-2 inline",
                            }),
                            (0, eb.jsx)(n9, { searchResult: e }),
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
            !u &&
              n.length > c &&
              (0, eb.jsxs)("button", {
                className:
                  "flex text-base font-medium hover:text-token-link md:text-sm",
                onClick: () => d(!0),
                children: [
                  "More ",
                  null != p ? p : (0, ty.p)(h.url, "short"),
                  " (",
                  (null !== (t = null == n ? void 0 : n.length) && void 0 !== t
                    ? t
                    : 0) - c,
                  ")",
                ],
              }),
          ],
        });
      }
      function rt(e) {
        var t;
        let {
            searchResult: n,
            groupPosition: r,
            rawPosition: s,
            showFeedbackButtons: a,
            showUserHash: i,
            highlightUrl: l,
            turnIndex: o,
          } = e,
          [c, u] =
            "search_result_group" === n.type
              ? [n.entries[0], n.entries.slice(1)]
              : [n, []],
          d = (0, ea.useRef)(null),
          { userHash: m } = (0, eF.A)(),
          p = i
            ? (0, eb.jsx)("div", {
                className: "h-[24px] w-[24px] flex-shrink-0 rounded-full",
                style: { backgroundColor: "#" + m },
              })
            : (0, eb.jsx)(eE.Z, {
                url: c.url,
                className: "icon-lg rounded-full bg-white object-cover",
                size: 32,
              }),
          h =
            null !== (t = (0, e_.d)(c.url).data) && void 0 !== t
              ? t
              : (0, ty.p)(c.url, "short"),
          g = l === c.url;
        return (
          (0, ea.useEffect)(() => {
            g &&
              d.current &&
              d.current.scrollIntoView({ behavior: "smooth", block: "center" });
          }, [g]),
          (0, eb.jsx)("div", {
            ref: d,
            className: "link-result pl-12",
            children: (0, eb.jsxs)("div", {
              className:
                "flex w-full min-w-0 flex-col overflow-y-auto border-token-border-light md:border-b md:pb-snc-1",
              children: [
                (0, eb.jsx)("div", {
                  className: "flex flex-col",
                  children: (0, eb.jsxs)(rn, {
                    turnIndex: o,
                    href: c.url,
                    groupPosition: r,
                    rawPosition: s,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "group",
                    children: [
                      (0, eb.jsx)("div", {
                        className: "absolute left-2 md:left-0",
                        children: p,
                      }),
                      (0, eb.jsx)("div", {
                        className: "line-clamp-1 pr-snc-2 text-base md:text-sm",
                        children: h,
                      }),
                      (0, eb.jsxs)("div", {
                        className: (0, es.default)(
                          "relative line-clamp-1 text-base font-medium group-hover:pr-10 group-hover:text-token-link md:text-sm",
                          { "bg-yellow-100 dark:bg-yellow-900": g }
                        ),
                        children: [
                          c.title,
                          a &&
                            (0, eb.jsx)("div", {
                              className:
                                "invisible absolute right-0 top-0 py-1 group-hover:visible",
                              children: (0, eb.jsx)(tv, {
                                url: c.url,
                                title: c.title,
                                snippet: c.snippet,
                                turnIndex: o,
                              }),
                            }),
                        ],
                      }),
                      (0, eb.jsxs)("div", {
                        className:
                          "line-clamp-2 text-base text-token-text-secondary md:text-sm",
                        children: [
                          (0, eb.jsx)(n0, {
                            searchResult: c,
                            className: "mr-2 inline",
                          }),
                          (0, eb.jsx)(n9, { searchResult: c }),
                          c.snippet,
                        ],
                      }),
                    ],
                  }),
                }),
                u &&
                  u.length > 0 &&
                  (0, eb.jsx)(re, {
                    secondaryResults: u,
                    rawPosition: s,
                    groupPosition: r,
                    turnIndex: o,
                    showFeedbackButtons: a,
                    highlightUrl: l,
                  }),
              ],
            }),
          })
        );
      }
      let rn = (0, ea.forwardRef)(function (e, t) {
        let n = (0, te.nn)(te.LW.threadId),
          { turnIndex: r, groupPosition: s, rawPosition: a } = e,
          i = (0, nk.Z)(e, n3);
        function l(t) {
          e.href &&
            n &&
            tu.Y.logEvent(t, {
              url: e.href,
              thread_id: n,
              turn_index: r,
              group_position: s,
              raw_position: a,
            });
        }
        return (
          (0, ea.useEffect)(() => {
            l(tu.M.searchLinkShown);
          }, []),
          (0, eb.jsx)(
            "a",
            n8(
              n8({ ref: t }, i),
              {},
              {
                onClick: (t) => {
                  var n;
                  null === (n = e.onClick) || void 0 === n || n.call(e, t),
                    t.stopPropagation(),
                    l(tu.M.searchLinkClicked);
                },
              }
            )
          )
        );
      });
      function rr(e) {
        var t;
        let {
            className: n,
            highlightUrl: r,
            showFeedbackButtons: s = !0,
            animateInResults: a = !0,
          } = e,
          i = (0, en.w$)(),
          { 0: l, 1: o } = (0, ea.useState)(!i),
          { searchResults: c, numTotalSearchResults: u } = (function (e) {
            let { searchResults: t, numTotalSearchResults: n } = (function (e) {
                let t = (0, te.nn)(te.LW.turns),
                  n = (0, eZ.compact)(
                    t.toReversed().flatMap((e) => {
                      var t;
                      return null === (t = e.search_results) ||
                        void 0 === t ||
                        null === (t = t.entries) ||
                        void 0 === t
                        ? void 0
                        : t.map((t) => ({ entry: t, index: e.index }));
                    })
                  );
                return {
                  searchResults: null != e ? n.slice(0, e) : n,
                  numTotalSearchResults: n.length,
                };
              })(e),
              r = (0, eF.A)().settings,
              s = null == r ? void 0 : r.useRewrittenSnippets,
              a = (function (e) {
                let t =
                    !(arguments.length > 1) ||
                    void 0 === arguments[1] ||
                    arguments[1],
                  n = (0, eT.NL)(),
                  r = (0, eF.A)().settings,
                  s = null == r ? void 0 : r.rewrittenSnippetsPrompt,
                  a = eV(s, n);
                return (0, eU.h)({
                  queries: e.map((n) => ({
                    queryKey: ["snippet", { url: n, prompt: s }],
                    queryFn: async () => await a.fetch(n),
                    enabled: e.length > 0 && t,
                  })),
                  combine: (e) => {
                    let t = new Map();
                    for (let n of e) n.data && t.set(n.data.url, n.data);
                    return t;
                  },
                });
              })(
                t
                  .flatMap((e) =>
                    "search_result_group" === e.entry.type
                      ? e.entry.entries
                      : [e.entry]
                  )
                  .map((e) => e.url),
                s
              );
            return s
              ? {
                  searchResults: (0, eZ.compact)(
                    t.map((e) => {
                      let t = (function (e, t) {
                        if ("search_result_group" === e.type) {
                          let n = (0, eZ.compact)(e.entries.map(t));
                          return 0 === n.length
                            ? void 0
                            : n2(n2({}, e), {}, { entries: n });
                        }
                        return t(e);
                      })(e.entry, (e) => {
                        var t, n, r, s;
                        return a.has(e.url)
                          ? n6(
                              n6({}, e),
                              {},
                              {
                                title:
                                  null !==
                                    (t =
                                      null === (n = a.get(e.url)) ||
                                      void 0 === n
                                        ? void 0
                                        : n.title) && void 0 !== t
                                    ? t
                                    : e.title,
                                snippet:
                                  null !==
                                    (r =
                                      null === (s = a.get(e.url)) ||
                                      void 0 === s
                                        ? void 0
                                        : s.snippet) && void 0 !== r
                                    ? r
                                    : e.snippet,
                              }
                            )
                          : void 0;
                      });
                      if (t) return { index: e.index, entry: t };
                    })
                  ),
                  numTotalSearchResults: n,
                }
              : { searchResults: t, numTotalSearchResults: n };
          })(l ? void 0 : 3),
          d = u > 0,
          m = (0, ea.useRef)((0, eZ.random)(0, 2));
        return (0, eb.jsxs)("div", {
          className: (0, es.default)(n, "flex flex-col"),
          children: [
            (0, eb.jsx)(eD.E.div, {
              className: "flex",
              animate: a
                ? d
                  ? { opacity: 1, translateY: 0 }
                  : { opacity: 0, translateY: 20 }
                : {},
              transition: { duration: 0.15 },
              children:
                d &&
                (0, eb.jsx)(eb.Fragment, {
                  children: (0, eb.jsxs)("div", {
                    className: "source-title text-base font-medium md:text-sm",
                    children: [
                      (0, eb.jsx)(nS, { className: "icon-lg" }),
                      "Source Links",
                    ],
                  }),
                }),
            }),
            (0, eb.jsxs)("div", {
              className: "flex w-full flex-col gap-snc-1",
              children: [
                d &&
                  c.map((e, t) => {
                    var n;
                    return (0, eb.jsx)(
                      eD.E.div,
                      {
                        initial: a ? { opacity: 0, translateY: 4 } : {},
                        animate: a ? { opacity: 1, translateY: 0 } : {},
                        transition: n7(t),
                        children: (0, eb.jsx)(
                          rt,
                          {
                            groupPosition: [t, 0],
                            rawPosition:
                              0 === t
                                ? 0
                                : c
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
                            showUserHash: m.current === t,
                            showFeedbackButtons: s,
                            highlightUrl: r,
                            turnIndex:
                              null !== (n = e.index) && void 0 !== n ? n : 0,
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
                !l &&
                  (null !== (t = null == c ? void 0 : c.length) && void 0 !== t
                    ? t
                    : 0) > 3 &&
                  (0, eb.jsx)(eD.E.div, {
                    initial: { opacity: 0, translateY: 4 },
                    animate: { opacity: 1, translateY: 0 },
                    transition: n7(c.length),
                    children: (0, eb.jsxs)("button", {
                      className:
                        "more-btn mt-[calc(-1*var(--snc-1))] text-base font-medium md:text-sm",
                      onClick: () => o(!0),
                      children: [
                        (0, eb.jsx)(nS, { className: "icon-lg opacity-0 " }),
                        "Show all web results (",
                        u - 3,
                        ")",
                      ],
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      var rs = (((s = rs || {}).Answer = "answer"), (s.Sources = "sources"), s);
      function ra(e) {
        let {
            readyState: t,
            hasSubmittedInitialQuery: n,
            searchQuery: r,
            followupQuery: s,
            onUpdateSearchQuery: a,
            onUpdateFollowupQuery: i,
            onSubmitSearch: l,
            onSubmitFollowup: o,
            settings: c,
            onReset: u,
            onUpdateSetting: d,
            onRetryQuery: m,
            highlightUrl: p,
            highlightTurnIndex: h,
          } = e,
          g = (0, en.w$)(),
          { 0: f, 1: x } = (0, ea.useState)(rs.Answer),
          {
            scrollContainerRef: A,
            lastFollowupTurnRef: v,
            scrollBottomSpacing: b,
          } = (function () {
            let e = (0, ea.useRef)(null),
              t = (0, ea.useRef)(null),
              { 0: n, 1: r } = (0, ea.useState)(null),
              s = (0, te.nn)(te.LW.firstTurn),
              a = null != s && nr(s),
              i = (0, te.nn)(te.LW.numTurns),
              l = (0, en.w$)();
            function o() {
              null != e.current && null != t.current
                ? r({
                    bottomSpacing: Math.max(
                      0,
                      e.current.getBoundingClientRect().height -
                        t.current.getBoundingClientRect().height
                    ),
                    followupTurnIndex:
                      (0, er.S)(te.nn.getState().thread).turns.length - 1,
                  })
                : r(null);
            }
            (0, ea.useEffect)(() => {
              let t = new ResizeObserver(o);
              return (
                e.current && t.observe(e.current),
                () => {
                  t.disconnect();
                }
              );
            }, []),
              (0, ea.useEffect)(() => {
                o();
                let e = new ResizeObserver(o);
                return (
                  t.current && e.observe(t.current),
                  () => {
                    e.disconnect();
                  }
                );
              }, [i]),
              (0, ea.useEffect)(() => {
                (null == n ? void 0 : n.followupTurnIndex) != null &&
                  e.current &&
                  e.current.scrollTo({
                    top: e.current.scrollHeight,
                    behavior: "smooth",
                  });
              }, [null == n ? void 0 : n.followupTurnIndex]);
            let c = a ? 0 : l ? "10rem" : "2rem";
            return {
              scrollContainerRef: e,
              lastFollowupTurnRef: t,
              scrollBottomSpacing:
                null != n
                  ? "max(calc("
                      .concat(n.bottomSpacing, "px - 6rem), ")
                      .concat(c, ")")
                  : c,
            };
          })();
        return (0, eb.jsxs)("div", {
          ref: g ? void 0 : A,
          className:
            "flex h-full w-full justify-center overflow-y-auto bg-token-main-surface-primary px-3.5 dark:bg-black md:justify-start md:overflow-y-hidden md:px-snc-1 dark:md:bg-token-main-surface-primary lg:pl-0",
          children: [
            (0, eb.jsxs)(ro, {
              className: "flex flex-col",
              children: [
                (0, eb.jsxs)("header", {
                  className:
                    "flex flex-shrink-0 flex-col items-center gap-4 pb-10 pt-6 md:h-snc-header-height md:flex-row md:gap-0 md:pb-0 md:pt-0",
                  children: [
                    (0, eb.jsx)("div", {
                      className:
                        "hidden w-snc-nav-width flex-shrink-0 items-center justify-center lg:flex",
                      children: (0, eb.jsx)("button", {
                        onClick: () => u(),
                        className: "hover:text-token-text-secondary",
                        children: (0, eb.jsx)(et.nI, { className: "icon-2xl" }),
                      }),
                    }),
                    (0, eb.jsxs)("div", {
                      className:
                        "relative flex w-full max-w-full grow md:w-[65%] xl:w-[60%]",
                      children: [
                        (0, eb.jsx)(nw, {
                          currentQuery: r,
                          onUpdateCurrentQuery: a,
                          onSubmit: l,
                        }),
                        (0, eb.jsx)(eN._, { readyState: t }),
                        !g &&
                          (0, eb.jsx)("nav", {
                            className:
                              "pointer-events-none absolute left-2.5 top-1/2 flex -translate-y-1/2 items-center justify-center lg:right-snc-3",
                            children: (0, eb.jsx)(ek, {
                              iconSize: "gizmoConversation",
                              className:
                                "pointer-events-auto border-2 border-transparent group-hover:border-token-text-primary group-data-[state='open']:border-token-text-primary",
                              searchQuery: r,
                            }),
                          }),
                      ],
                    }),
                    !g &&
                      (0, eb.jsx)(ri, {
                        selected: f,
                        onChange: (e) => {
                          x(e);
                        },
                      }),
                  ],
                }),
                (0, eb.jsxs)("main", {
                  className: "flex min-h-0 grow",
                  children: [
                    (0, eb.jsx)("div", {
                      className:
                        "mb-snc-2 hidden w-snc-nav-width flex-shrink-0 flex-col items-center justify-end gap-2 pb-2 lg:flex",
                      children: (0, eb.jsx)(e7, {
                        settings: c,
                        onUpdateSettings: d,
                      }),
                    }),
                    (0, eb.jsx)("div", {
                      className: (0, es.default)(
                        "relative flex min-w-0 grow flex-col dark:shadow-none md:overflow-hidden md:rounded-t-3xl md:shadow-snc-lg md:dark:bg-token-main-surface-tertiary",
                        "px-0.5"
                      ),
                      children:
                        g || f === rs.Answer
                          ? (0, eb.jsxs)(eb.Fragment, {
                              children: [
                                (0, eb.jsx)("div", {
                                  ref: g ? A : void 0,
                                  className:
                                    "messages-body hide-scrollbar relative grow md:h-full md:overflow-y-auto md:px-snc-2 md:pt-snc-2",
                                  style: { paddingBottom: g ? b : 0 },
                                  children: (0, eb.jsx)(np, {
                                    lastFollowupTurnRef: v,
                                    onRetryQuery: m,
                                    highlightTurnIndex: h,
                                    onInlineSuggestionClicked: o,
                                  }),
                                }),
                                (0, eb.jsx)("div", {
                                  className:
                                    "bottom-0 left-0 right-0 flex grow flex-col justify-end pb-snc-2 pt-8 before:bottom-0 before:left-0 before:right-0 before:dark:bg-token-main-surface-tertiary md:absolute md:block md:px-snc-1 md:pt-0 md:before:absolute md:before:h-[calc(100%-var(--snc-1))] md:before:w-full md:before:bg-token-main-surface-primary",
                                  children: (0, eb.jsx)(nA, {
                                    readyState: t,
                                    hasSubmittedInitialQuery: n,
                                    currentQuery: s,
                                    onUpdateCurrentQuery: i,
                                    onSubmit: o,
                                  }),
                                }),
                              ],
                            })
                          : (0, eb.jsx)("aside", {
                              className: "links-body relative w-full pb-snc-2",
                              children: (0, eb.jsx)(rr, {
                                highlightUrl: p,
                                animateInResults: !1,
                              }),
                            }),
                    }),
                  ],
                }),
              ],
            }),
            g &&
              (0, eb.jsxs)(eb.Fragment, {
                children: [
                  (0, eb.jsx)("aside", {
                    className:
                      "links-body hide-scrollbar relative h-full w-[35%] min-w-0 max-w-[500px] shrink overflow-x-hidden pb-snc-2 pl-snc-2 pt-[calc(var(--snc-header-height)+var(--snc-2))] lg:min-w-[300px] lg:max-w-[420px] xl:w-[40%] xl:min-w-[340px] xl:max-w-[500px] 2xl:min-w-[390px] 2xl:max-w-[580px]",
                    children: (0, eb.jsx)(rr, { highlightUrl: p }),
                  }),
                  (0, eb.jsx)("nav", {
                    className:
                      "pointer-events-none fixed right-snc-1 flex h-snc-header-height items-center justify-center lg:right-snc-3",
                    children: (0, eb.jsx)(ek, {
                      iconSize: "gizmo",
                      className: "pointer-events-auto shadow-lg",
                      searchQuery: r,
                    }),
                  }),
                ],
              }),
            (0, eb.jsx)(e$, {}),
          ],
        });
      }
      function ri(e) {
        let { selected: t, onChange: n } = e;
        return (0, eb.jsxs)("div", {
          className: "flex w-full gap-2",
          children: [
            (0, eb.jsx)(rl, {
              $selected: t === rs.Answer,
              disabled: t === rs.Answer,
              onClick: () => n(rs.Answer),
              children: "Answer",
            }),
            (0, eb.jsx)(rl, {
              $selected: t === rs.Sources,
              disabled: t === rs.Sources,
              onClick: () => n(rs.Sources),
              children: "Sources",
            }),
          ],
        });
      }
      let rl = ei.Z.button(
          Y ||
            (Y = (0, ee.Z)([
              "w-full rounded-full p-2.5 flex justify-center items-center \n",
              "",
            ])),
          (e) => {
            let { $selected: t } = e;
            return t
              ? "font-medium bg-token-text-primary text-token-main-surface-primary pointer-events-none"
              : "bg-token-main-surface-tertiary text-token-text-secondary hover:bg-token-main-surface-secondary";
          }
        ),
        ro = ei.Z.div(
          $ ||
            ($ = (0, ee.Z)([
              "w-full relative grow md:max-w-full lg:max-w-[850px] xl:max-w-[880px] 2xl:max-w-[950px] md:w-[65%] xl:w-[60%]",
            ]))
        );
    },
    75388: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return c;
        },
      });
      var r = n(11335),
        s = n(19841),
        a = n(70079),
        i = n(15118),
        l = n(35250);
      let o = {
        [i.kQ.CONNECTING]: "Connecting",
        [i.kQ.OPEN]: "Open",
        [i.kQ.CLOSING]: "Closing",
        [i.kQ.CLOSED]: "Closed",
        [i.kQ.UNINSTANTIATED]: "Uninstantiated",
      };
      function c(e) {
        let { readyState: t, className: n } = e,
          { 0: c, 1: u } = (0, a.useState)(!0);
        return ((0, a.useEffect)(() => {
          setTimeout(() => {
            u(!0);
          }, 1e3);
        }, []),
        t !== i.kQ.OPEN && c)
          ? (0, l.jsx)("div", {
              className: (0, s.default)(
                "flex items-center gap-2 px-3 text-sm",
                n
              ),
              children: (0, l.jsx)(r.u, {
                label: o[t],
                sideOffset: 0,
                side: "right",
                children: (0, l.jsx)("div", {
                  className: (0, s.default)(
                    "h-2 w-2 rounded-full",
                    (t === i.kQ.CLOSING || t === i.kQ.CONNECTING) &&
                      "bg-yellow-500",
                    (t === i.kQ.CLOSED || t === i.kQ.UNINSTANTIATED) &&
                      "bg-red-500",
                    c ? "block" : "hidden"
                  ),
                }),
              }),
            })
          : null;
      }
    },
    25617: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return v;
        },
        q: function () {
          return b;
        },
      });
      var r = n(29287),
        s = n(8700),
        a = n(67217),
        i = n(13847),
        l = n(19841),
        o = n(51018),
        c = n.n(o),
        u = n(70079),
        d = n(1454),
        m = n(78343),
        p = n(78103),
        h = n(35601),
        g = n(19216),
        f = n(20963),
        x = n(35250);
      let A = c()(
          () =>
            Promise.all([n.e(1170), n.e(7178)])
              .then(n.bind(n, 17178))
              .then((e) => e.default),
          { ssr: !1, loadableGenerated: { webpack: () => [17178] } }
        ),
        v = (0, p.ZP)((e) => ({
          threadUserId: void 0,
          setThreadUserId: (t) => e({ threadUserId: t }),
        }));
      function b(e) {
        let { isOpen: t, onDebugClose: n } = e;
        return (0, x.jsx)(a.Z, {
          isOpen: t,
          onClose: n,
          type: "success",
          size: "fullscreen",
          className: "min-h-[50vh] max-w-[96vw]",
          rootClassName: "z-50",
          children: (0, x.jsx)(w, {}),
        });
      }
      let y = (e, t) => {
        let n = JSON.stringify(t, null, 2),
          r = new Blob([n], { type: "application/json" }),
          s = window.URL.createObjectURL(r),
          a = document.createElement("a");
        (a.href = s),
          (a.download = e),
          a.click(),
          window.URL.revokeObjectURL(s);
      };
      function j(e) {
        let { downloadFilename: t, downloadData: n } = e,
          { user: s } = (0, h.A)();
        return (0, x.jsxs)("div", {
          className: "flex justify-center gap-2",
          children: [
            s && (0, x.jsx)(k, { id: s.id }),
            (0, x.jsxs)(r.z, {
              color: "neutral",
              onClick: () => y(t, n),
              children: [
                (0, x.jsx)(d._hL, { className: "icon-sm" }),
                " Download ",
                t,
              ],
            }),
            (0, x.jsxs)(r.z, {
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
      function w() {
        let e = (0, g.nn)(g.LW.threadId),
          t = (0, g.nn)(g.LW.turns),
          { threadUserId: n } = v(),
          { data: r, isLoading: s } = (0, f.Y)({
            threadId: e,
            threadUserId: n,
            refetchOnMount: "always",
          });
        if (!r || s) return (0, x.jsx)("div", { children: "Loading..." });
        let { thread: a } = r;
        return (0, x.jsxs)("div", {
          className: "flex flex-col gap-2 break-words py-6 font-mono text-xs",
          children: [
            (0, x.jsx)(j, { downloadFilename: "thread.json", downloadData: a }),
            (0, x.jsx)("div", {
              className: "px-6 pb-6",
              children: (0, x.jsx)(O, { data: a, collapsed: 3 }),
            }),
            t.map((e, t) => {
              var n;
              return (0, x.jsxs)(
                "div",
                {
                  className: (0, l.default)(
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
                        null === (n = e.model_response) || void 0 === n
                          ? void 0
                          : n.text,
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
        let { data: t, collapsed: n } = e,
          { 0: r, 1: s } = (0, u.useState)(null == n || n);
        return (0, x.jsxs)("div", {
          className: "flex flex-col items-start gap-1",
          children: [
            (0, x.jsx)("button", {
              onClick: () => s(!r),
              className: "flex items-center gap-1",
              children: r
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
              A,
              {
                json: t,
                jsonViewProps: { collapsed: r, shortenTextAfterLength: 0 },
              },
              String(r)
            ),
          ],
        });
      }
      function k(e) {
        let { id: t } = e,
          n = (0, u.useCallback)(() => {
            (0, i.v)(t);
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
            (0, x.jsx)(s.Z, { onCopy: n }),
          ],
        });
      }
    },
    82074: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var r = n(29287),
        s = n(21643),
        a = n(26169),
        i = n.n(a),
        l = n(91530),
        o = n.n(l),
        c = n(70079),
        u = n(13188),
        d = n(20735),
        m = n(19216),
        p = n(72150),
        h = n(45456),
        g = n(35250);
      function f() {
        (0, h.e)();
        let [e, t] = (0, p.Z)("MACHINE_OUTPUT_FILE_1_PATH", "", i()),
          [n, a] = (0, p.Z)("MACHINE_OUTPUT_FILE_2_PATH", "", i()),
          { 0: l, 1: f } = (0, c.useState)([]),
          { 0: x, 1: A } = (0, c.useState)([]),
          v = async () => {
            async function t(e) {
              let t = await fetch("http://localhost:9000/read?path=".concat(e)),
                n = (await t.text()).split("\n"),
                r = [];
              for (let e of n) e && r.push(JSON.parse(e));
              return (
                console.log(
                  "fetched machine output file content from ".concat(e),
                  r
                ),
                r
              );
            }
            f(await t(e)), A(await t(n));
          },
          { 0: b, 1: y } = (0, c.useState)(1),
          j = 1 === b ? l : x,
          { 0: w, 1: O } = (0, c.useState)(0);
        (0, c.useEffect)(() => {
          let e = j[w];
          e &&
            m.P3.setThread(
              e.id,
              e.turns.map((e) => e.api_turn)
            );
        }, [j, w]);
        let k = (0, m.nn)(m.LW.turns),
          N = k.length > 0 ? k[0].user_query : "",
          S = (0, c.useCallback)(
            (e) => {
              O((t) => {
                let n = t + e;
                return 0 <= n && n < j.length ? n : t;
              });
            },
            [j.length]
          );
        return (
          (0, c.useEffect)(() => {
            let e = (e) => {
              "ArrowUp" == e.key && S(-1),
                "ArrowDown" == e.key && S(1),
                "ArrowLeft" == e.key && y(1),
                "ArrowRight" == e.key && y(2);
            };
            return (
              document.addEventListener("keydown", e),
              () => {
                document.removeEventListener("keydown", e);
              }
            );
          }, [S]),
          (0, g.jsxs)("div", {
            className: "flex h-screen w-screen flex-row",
            children: [
              (0, g.jsxs)("div", {
                className: "flex w-[400px] flex-col gap-2 border-r-[1px] p-2",
                children: [
                  (0, g.jsxs)("div", {
                    className: "flex flex-row items-baseline gap-2",
                    children: [
                      (0, g.jsx)("div", {
                        className: "whitespace-nowrap",
                        children: "file 1",
                      }),
                      (0, g.jsx)(s.Z, {
                        name: "machineOutputFile1Path",
                        className: "flex-grow",
                        value: e,
                        placeholder: "Machine output file #1",
                        onChange: (e) => t(e.target.value),
                      }),
                    ],
                  }),
                  (0, g.jsxs)("div", {
                    className: "flex flex-row items-baseline gap-2",
                    children: [
                      (0, g.jsx)("div", {
                        className: "whitespace-nowrap",
                        children: "file 2",
                      }),
                      (0, g.jsx)(s.Z, {
                        name: "machineOutputFile2Path",
                        className: "flex-grow",
                        value: n,
                        placeholder: "Machine output file #2",
                        onChange: (e) => a(e.target.value),
                      }),
                    ],
                  }),
                  (0, g.jsx)(r.z, {
                    onClick: v,
                    children: "Load/refresh files",
                  }),
                  (0, g.jsxs)("div", {
                    className: "flex flex-row items-baseline gap-2",
                    children: [
                      (0, g.jsx)("div", {
                        className: "whitespace-nowrap",
                        children: "show threads from file",
                      }),
                      (0, g.jsx)(s.Z, {
                        name: "universe",
                        className: "flex-grow",
                        value: b.toString(),
                        placeholder: "Universe",
                        type: "number",
                        onChange: (e) => {
                          let t = parseInt(e.target.value);
                          1 != t &&
                            2 != t &&
                            console.error("invalid file number", t),
                            y(t);
                        },
                      }),
                    ],
                  }),
                  (0, g.jsxs)("div", {
                    className: "flex flex-row items-baseline gap-2",
                    children: [
                      (0, g.jsx)("div", {
                        className: "whitespace-nowrap",
                        children: "thread index",
                      }),
                      (0, g.jsx)(s.Z, {
                        name: "index",
                        className: "flex-grow",
                        value: w.toString(),
                        placeholder: "Index",
                        type: "number",
                        onChange: (e) => O(parseInt(e.target.value)),
                      }),
                      (0, g.jsxs)("div", {
                        className: "whitespace-nowrap",
                        children: ["of ", j.length],
                      }),
                    ],
                  }),
                ],
              }),
              (0, g.jsx)(u.e, {
                readyState: 1,
                hasSubmittedInitialQuery: !0,
                searchQuery: N,
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
          })
        );
      }
    },
    75138: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return o;
        },
        l: function () {
          return l;
        },
      });
      var r = n(19841),
        s = n(83737),
        a = n(70079),
        i = n(35250);
      function l(e) {
        let {
            lines: t = 1,
            variance: n = 0,
            size: l = "base",
            width: o = 50,
            widthVariance: c = 50,
            className: u,
          } = e,
          { 0: d } = (0, a.useState)(
            Array.from(
              { length: t + Math.random() * (null != n ? n : 0) },
              () => o + Math.random() * c
            )
          ),
          m = "";
        switch (l) {
          case "sm":
            m = "h-3 mb-2 mt-0.5";
            break;
          case "base":
            m = "h-4 my-2";
            break;
          case "lg":
            m = "h-5 my-2";
        }
        return (0, i.jsx)(i.Fragment, {
          children: d.map((e, t) =>
            (0, i.jsx)(
              "div",
              {
                className: (0, r.default)(
                  "relative w-full overflow-hidden rounded-md bg-token-sidebar-surface-secondary",
                  m,
                  u
                ),
                style: { width: "".concat(e, "%") },
                children: (0, i.jsx)(s.E.div, {
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
      function o(e) {
        let {
            lines: t = 1,
            variance: n = 0,
            width: r = 50,
            widthVariance: l = 50,
            className: o,
          } = e,
          c = a.useMemo(
            () =>
              Array.from(
                { length: t + Math.random() * (null != n ? n : 0) },
                () => r + Math.random() * l
              ),
            [t, n, r, l]
          );
        return (0, i.jsx)("div", {
          className: "mt-2 flex flex-col items-start gap-2 ".concat(o),
          children: c.map((e, t) =>
            (0, i.jsx)(
              s.E.div,
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
    35601: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return i;
        },
        c: function () {
          return a;
        },
      });
      var r = n(70079),
        s = n(20735);
      let a = (0, r.createContext)({
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
        i = () => (0, r.useContext)(a);
    },
    20735: function (e, t, n) {
      "use strict";
      n.d(t, {
        Wt: function () {
          return N;
        },
        Z: function () {
          return k;
        },
        Zr: function () {
          return E;
        },
      });
      var r,
        s = n(99945),
        a = n(18450),
        i = n(67739),
        l = n(29287),
        o = n(21643),
        c = n(30269),
        u = n(282),
        d = n(88342),
        m = n(11335),
        p = n(67217),
        h = n(64276),
        g = n(19841),
        f = n(85252),
        x = n(70079),
        A = n(21389),
        v = n(20724),
        b = n(90240),
        y = n(35250);
      let j = ["children"];
      function w(e, t) {
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                (0, a.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : w(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let k = {
        useLocation: !1,
        suggestions: !0,
        agentSettingsOverrides: {
          model_family: v.tQ.GPT_3_5,
          eval_preset: "production",
          search_engine: v.lv.Bing,
          robots_mode: v.K1.Aggressive,
          show_image_to_model: !0,
        },
        useRewrittenSnippets: !1,
        rewrittenSnippetsPrompt:
          'The next message will be the text contents of a webpage.\nSummarize the webpage into one short English sentence, no more than 300 characters, and generate an appropriate short title.\nYour summary is a broad overview that describes the main points of the webpage.\nDo not refer to the webpage itself; your response is a drop-in summary. \nThe page\'s original title is "{title}".\nBe succinct and don\'t start the summary with "The webpage".\nReply in a JSON format with the keys "title" and "summary".',
      };
      function N(e) {
        return !!(
          "object" == typeof e &&
          "boolean" == typeof e.useLocation &&
          "boolean" == typeof e.suggestions &&
          (0, v.mX)(e.agentSettingsOverrides)
        );
      }
      function S(e) {
        let { children: t } = e,
          n = (0, i.Z)(e, j);
        return (0, y.jsx)(
          d.Z.Content,
          O(
            O({}, n),
            {},
            { className: (0, g.default)("z-50", n.className), children: t }
          )
        );
      }
      function E(e) {
        var t, n, r, s, a, i, g, A, j, w;
        let { onClose: N, settings: E, onUpdateSetting: _ } = e,
          { theme: C, setTheme: D } = (0, f.F)(),
          { 0: M, 1: R } = (0, x.useState)(E.rewrittenSnippetsPrompt);
        return (0, y.jsx)(p.Z, {
          isOpen: !0,
          onClose: () => {
            M !== E.rewrittenSnippetsPrompt &&
              _(O(O({}, E), {}, { rewrittenSnippetsPrompt: M })),
              N();
          },
          type: "success",
          rootClassName: "z-40",
          children: (0, y.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "theme",
                    className: "text-sm",
                    children: "Theme",
                  }),
                  (0, y.jsxs)(d.Z.Root, {
                    value: C,
                    onValueChange: (e) => {
                      e !== C && D(e);
                    },
                    children: [
                      (0, y.jsxs)(d.Z.Trigger, {
                        id: "theme",
                        children: [
                          (0, y.jsx)(d.Z.Value, {}),
                          (0, y.jsx)(d.Z.Icon, {}),
                        ],
                      }),
                      (0, y.jsx)(d.Z.Portal, {
                        children: (0, y.jsxs)(S, {
                          children: [
                            (0, y.jsx)(d.Z.Item, {
                              value: "light",
                              children: "Light",
                            }),
                            (0, y.jsx)(d.Z.Item, {
                              value: "dark",
                              children: "Dark",
                            }),
                            (0, y.jsx)(d.Z.Item, {
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
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "location",
                    className: "text-sm",
                    children: "Use location from browser",
                  }),
                  (0, y.jsx)(u.Z, {
                    onChange: (e) => {
                      (0, b.XB)(e), _(O(O({}, E), {}, { useLocation: e }));
                    },
                    enabled: E.useLocation,
                    label: "Use location from browser",
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "suggestions",
                    className: "text-sm",
                    children: "Enable suggestions",
                  }),
                  (0, y.jsx)(u.Z, {
                    onChange: (e) => _(O(O({}, E), {}, { suggestions: e })),
                    enabled: E.suggestions,
                    label: "Enable suggestions",
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "ranker_model",
                    className: "text-sm",
                    children: "Model family",
                  }),
                  (0, y.jsxs)(d.Z.Root, {
                    value:
                      null !==
                        (t =
                          null === (n = E.agentSettingsOverrides) ||
                          void 0 === n
                            ? void 0
                            : n.model_family) && void 0 !== t
                        ? t
                        : k.agentSettingsOverrides.model_family,
                    onValueChange: (e) => {
                      _(
                        O(
                          O({}, E),
                          {},
                          {
                            agentSettingsOverrides: O(
                              O({}, E.agentSettingsOverrides),
                              {},
                              { model_family: e }
                            ),
                          }
                        )
                      );
                    },
                    children: [
                      (0, y.jsxs)(d.Z.Trigger, {
                        id: "model_family",
                        children: [
                          (0, y.jsx)(d.Z.Value, {}),
                          (0, y.jsx)(d.Z.Icon, {}),
                        ],
                      }),
                      (0, y.jsx)(d.Z.Portal, {
                        children: (0, y.jsxs)(S, {
                          children: [
                            (0, y.jsx)(d.Z.Item, {
                              value: v.tQ.GPT_3_5,
                              children: "GPT3.5 (Sahara-V; POR)",
                            }),
                            (0, y.jsx)(d.Z.Item, {
                              value: v.tQ.GPT_4,
                              children: "GPT4",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "search_engine",
                    className: "text-sm",
                    children: "Search engine",
                  }),
                  (0, y.jsxs)(d.Z.Root, {
                    value:
                      null !==
                        (r =
                          null === (s = E.agentSettingsOverrides) ||
                          void 0 === s
                            ? void 0
                            : s.search_engine) && void 0 !== r
                        ? r
                        : k.agentSettingsOverrides.search_engine,
                    onValueChange: (e) => {
                      _(
                        O(
                          O({}, E),
                          {},
                          {
                            agentSettingsOverrides: O(
                              O({}, E.agentSettingsOverrides),
                              {},
                              { search_engine: e }
                            ),
                          }
                        )
                      );
                    },
                    children: [
                      (0, y.jsxs)(d.Z.Trigger, {
                        id: "search_engine",
                        children: [
                          (0, y.jsx)(d.Z.Value, {}),
                          (0, y.jsx)(d.Z.Icon, {}),
                        ],
                      }),
                      (0, y.jsx)(d.Z.Portal, {
                        children: (0, y.jsxs)(S, {
                          children: [
                            (0, y.jsx)(d.Z.Item, {
                              value: v.lv.Bing,
                              children: "Bing (POR)",
                            }),
                            (0, y.jsx)(d.Z.Item, {
                              value: v.lv.Sydney,
                              children: "Sydney",
                            }),
                            (0, y.jsx)(d.Z.Item, {
                              value: v.lv.Fortis,
                              children: "Fortis",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "show_image_to_model",
                    className: "text-sm",
                    children: "Image search",
                  }),
                  (0, y.jsx)(u.Z, {
                    onChange: (e) =>
                      _(
                        O(
                          O({}, E),
                          {},
                          {
                            agentSettingsOverrides: O(
                              O({}, E.agentSettingsOverrides),
                              {},
                              { show_image_to_model: e }
                            ),
                          }
                        )
                      ),
                    enabled:
                      null !==
                        (a =
                          null === (i = E.agentSettingsOverrides) ||
                          void 0 === i
                            ? void 0
                            : i.show_image_to_model) && void 0 !== a
                        ? a
                        : k.agentSettingsOverrides.show_image_to_model,
                    label: "Image search",
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "robots_mode",
                    className: "text-sm",
                    children: "Robots mode",
                  }),
                  (0, y.jsxs)(d.Z.Root, {
                    value:
                      null !==
                        (g =
                          null === (A = E.agentSettingsOverrides) ||
                          void 0 === A
                            ? void 0
                            : A.robots_mode) && void 0 !== g
                        ? g
                        : k.agentSettingsOverrides.robots_mode,
                    onValueChange: (e) => {
                      _(
                        O(
                          O({}, E),
                          {},
                          {
                            agentSettingsOverrides: O(
                              O({}, E.agentSettingsOverrides),
                              {},
                              { robots_mode: e }
                            ),
                          }
                        )
                      );
                    },
                    children: [
                      (0, y.jsxs)(d.Z.Trigger, {
                        id: "robots_mode",
                        children: [
                          (0, y.jsx)(d.Z.Value, {}),
                          (0, y.jsx)(d.Z.Icon, {}),
                        ],
                      }),
                      (0, y.jsx)(d.Z.Portal, {
                        children: (0, y.jsxs)(S, {
                          children: [
                            (0, y.jsx)(d.Z.Item, {
                              value: v.K1.Conservative,
                              children: "Conservative",
                            }),
                            (0, y.jsx)(d.Z.Item, {
                              value: v.K1.Aggressive,
                              children: "Aggressive (POR)",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "eval_preset",
                    className: "text-sm",
                    children: "Eval preset",
                  }),
                  (0, y.jsx)(o.Z, {
                    name: "eval_preset",
                    className: "w-64",
                    value:
                      null !== (j = E.agentSettingsOverrides.eval_preset) &&
                      void 0 !== j
                        ? j
                        : k.agentSettingsOverrides.eval_preset,
                    onChange: (e) =>
                      _(
                        O(
                          O({}, E),
                          {},
                          {
                            agentSettingsOverrides: O(
                              O({}, E.agentSettingsOverrides),
                              {},
                              { eval_preset: e.target.value }
                            ),
                          }
                        )
                      ),
                  }),
                ],
              }),
              (0, y.jsxs)(P, {
                children: [
                  (0, y.jsx)(h._, {
                    htmlFor: "use_rewritten_snippets",
                    className: "text-sm",
                    children: "Rewrite snippets and titles",
                  }),
                  (0, y.jsx)(u.Z, {
                    onChange: (e) =>
                      _(O(O({}, E), {}, { useRewrittenSnippets: e })),
                    enabled:
                      null !== (w = E.useRewrittenSnippets) && void 0 !== w
                        ? w
                        : k.useRewrittenSnippets,
                    label: "Rewrite snippets and titles",
                  }),
                ],
              }),
              E.useRewrittenSnippets &&
                (0, y.jsx)(P, {
                  children: (0, y.jsxs)("div", {
                    className: "w-full",
                    children: [
                      (0, y.jsx)(h._, {
                        htmlFor: "rewritten_snippets_prompt",
                        className: "text-sm",
                        children: (0, y.jsx)(m.u, {
                          label:
                            "{title} and {url} will be replaced with the original title and URL of the page. The message after the prompt will be the text of the webpage.",
                          className: "z-50",
                          side: "left",
                          children: "Rewritten snippets prompt",
                        }),
                      }),
                      (0, y.jsx)(c.Z, {
                        value: M,
                        onChange: (e) => R(e.target.value),
                        onBlur: () =>
                          _(O(O({}, E), {}, { rewrittenSnippetsPrompt: M })),
                        placeholder: "Prompt for rewriting snippets and titles",
                        className: "w-full text-xs !leading-snug",
                        rows: 8,
                      }),
                    ],
                  }),
                }),
              (0, y.jsx)(l.z, {
                onClick: () => {
                  R(k.rewrittenSnippetsPrompt), _(k);
                },
                type: "reset",
                color: "neutral",
                children: "Reset",
              }),
            ],
          }),
        });
      }
      let P = A.Z.div(
        r ||
          (r = (0, s.Z)([
            "flex justify-between items-center gap-2 min-h-[36px]",
          ]))
      );
    },
    3577: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return X;
          },
        });
      var r = n(18450),
        s = n(95407),
        a = n(43041),
        i = n(66315),
        l = n(83537),
        o = n(60309),
        c = n(68039),
        u = n.n(c),
        d = n(47247),
        m = n.n(d),
        p = n(41409),
        h = n(70079),
        g = n(15118),
        f = n(25617),
        x = n(77799),
        A = n(13188),
        v = n(35601),
        b = n(73606),
        y = n(19841),
        j = n(83737),
        w = n(75388),
        O = n(5224),
        k = n(55057),
        N = n(1454),
        S = n(36270),
        E = n(10987),
        P = n(35250);
      function _(e) {
        var t;
        let {
            currentQuery: n,
            onUpdateCurrentQuery: r,
            onTypeaheadOpenChange: s,
            onSubmit: a,
          } = e,
          l = (0, h.useRef)(""),
          { 0: o, 1: c } = (0, h.useState)(!1);
        (0, h.useEffect)(() => {
          i.U.addTiming("sonic.web.home.consolePrimarySearchInput.mounted");
        }, []);
        let { 0: u, 1: d } = (0, h.useState)(null),
          m = (0, S.o)({ query: l.current });
        (0, h.useEffect)(() => {
          0 === m.length && d(null), c(m.length > 0);
        }, [m]),
          (0, h.useEffect)(() => {
            null == s || s(o);
          }, [o, s]);
        let p = (e) => {
            r(e), a(e);
          },
          g = (e) => {
            let { value: t, delta: n, shouldUpdateQuery: s = !0 } = e;
            if (void 0 === t && void 0 === n)
              throw Error("changeSelectedIndex requires either value or delta");
            let a = null;
            void 0 !== n
              ? null === u
                ? (a = -1 === n ? m.length - 1 : 0)
                : ((a = u + n) < 0 || a >= m.length) && (a = null)
              : void 0 !== t && (a = t),
              d(a),
              s && (null === a ? r(l.current) : r(m[a]));
          };
        return (0, P.jsxs)("div", {
          className: "relative",
          children: [
            (0, P.jsx)("div", {
              className: "relative h-snc-3",
              children: (0, P.jsx)(E.Q, {
                className: "bg-token-main-surface-tertiary ",
                value: n,
                expandDirection: "down",
                submitButtonIcon: (0, P.jsx)(k.WmV, {
                  className: "rotate-90 text-token-main-surface-tertiary",
                }),
                leftIcon: (0, P.jsx)(N.jRj, {
                  className: (0, y.default)(
                    "h-5 w-5",
                    (null === (t = l.current) || void 0 === t
                      ? void 0
                      : t.trim().length) > 0
                      ? "text-token-text-primary"
                      : "text-token-text-tertiary"
                  ),
                }),
                onSubmit: a,
                autoFocus: !0,
                spellCheck: !1,
                placeholder: "Search...",
                onChange: (e) => {
                  r(e.target.value), (l.current = e.target.value);
                },
                onKeyDown: (e) => {
                  o &&
                    ("ArrowUp" === e.key
                      ? (e.preventDefault(), g({ delta: -1 }))
                      : "ArrowDown" === e.key
                        ? (e.preventDefault(), g({ delta: 1 }))
                        : "Escape" === e.key && c(!1));
                },
              }),
            }),
            o &&
              (0, P.jsx)("div", {
                className: "absolute left-0 right-0 top-full mt-[14px]",
                onMouseLeave: () => g({ value: null, shouldUpdateQuery: !1 }),
                children: m.map((e, t) =>
                  (0, P.jsx)(
                    C,
                    {
                      typeahead: e,
                      typedQuery: l.current,
                      onHover: () => g({ value: t, shouldUpdateQuery: !1 }),
                      onSubmit: p,
                      isSelected: t === u,
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
            typedQuery: n,
            onHover: r,
            onSubmit: s,
            isSelected: a,
          } = e,
          i = t.startsWith(n),
          l = i ? n : t,
          o = i ? t.slice(n.length) : "";
        return (0, P.jsx)(j.E.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "w-full",
          children: (0, P.jsxs)(
            "button",
            {
              className: (0, y.default)(
                "flex w-full items-center gap-3.5 rounded-lg px-5 py-3.5 transition-colors",
                a ? "text-token-text-primary" : "text-token-text-tertiary"
              ),
              onClick: (e) => {
                e.stopPropagation(), s(t);
              },
              onMouseEnter: () => r(t),
              children: [
                (0, P.jsx)("div", {
                  className: "flex h-5 w-5 items-center justify-center",
                  children: (0, P.jsx)(k.w9k, {}),
                }),
                (0, P.jsxs)("div", {
                  className: "flex-grow text-left",
                  children: [
                    (0, P.jsx)("span", { children: l }),
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
      function D(e) {
        let {
            readyState: t,
            currentQuery: n,
            onSubmit: r,
            onUpdateCurrentQuery: s,
          } = e,
          { 0: a, 1: i } = (0, h.useState)(!1);
        return (0, P.jsxs)("div", {
          className:
            "relative flex h-full w-full flex-col justify-between overflow-hidden bg-token-main-surface-primary p-snc-3",
          children: [
            (0, P.jsx)(j.E.div, {
              className: (0, y.default)(
                "pointer-events-none absolute left-0 right-0 top-[calc(50%-120px)] flex flex-col items-center justify-center text-2xl font-medium transition-colors duration-500"
              ),
              animate: { opacity: a ? 0 : 1 },
              transition: { duration: O.Lc },
              children: (0, P.jsx)(b.nI, { className: "h-11 w-11" }),
            }),
            (0, P.jsx)("div", {
              className: "m-auto w-full max-w-[640px] flex-shrink-0 pb-9",
              children: (0, P.jsxs)("div", {
                className: "relative",
                children: [
                  (0, P.jsx)(_, {
                    currentQuery: n,
                    onUpdateCurrentQuery: s,
                    onSubmit: (e) => {
                      0 !== e.trim().length && (r(e), i(!0));
                    },
                  }),
                  (0, P.jsx)(w._, {
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
            initialQuery: n,
            hasSubmittedInitialQuery: r,
            onSubmitSearch: s,
            onSubmitFollowup: a,
            onRetryQuery: i,
            onReset: l,
            onUpdateSetting: o,
          } = e,
          { settings: c } = (0, v.A)(),
          { 0: u, 1: d } = (0, h.useState)(null != n ? n : ""),
          { 0: m, 1: p } = (0, h.useState)(""),
          g = (0, h.useRef)(null != n ? n : "");
        (0, h.useEffect)(() => {
          n !== g.current && ((g.current = n), d(null != n ? n : ""), p(""));
        }, [n]);
        let f = (e) => {
            d(e);
          },
          b = () => {
            s(u), p("");
          },
          { 0: y, 1: j } = (0, h.useState)(!r);
        return (
          (0, h.useEffect)(() => {
            y && r
              ? setTimeout(() => {
                  j(!1);
                }, 1e3 * O.Lc)
              : r || j(!0);
          }, [r, n, y]),
          (0, h.useEffect)(
            () =>
              (0, x.eR)(document, {
                keydown: (e) => {
                  "k" === e.key &&
                    e.metaKey &&
                    e.shiftKey &&
                    (e.preventDefault(), d(""), p(""), l());
                },
              }),
            [l]
          ),
          y
            ? (0, P.jsx)(D, {
                readyState: t,
                currentQuery: u,
                onSubmit: b,
                onUpdateCurrentQuery: f,
              })
            : (0, P.jsx)(A.e, {
                readyState: t,
                hasSubmittedInitialQuery: r,
                searchQuery: u,
                followupQuery: m,
                onUpdateSearchQuery: f,
                onUpdateFollowupQuery: (e) => {
                  p(e);
                },
                onRetryQuery: i,
                onSubmitSearch: b,
                onSubmitFollowup: (e) => {
                  a(null != e ? e : m), p("");
                },
                settings: c,
                onUpdateSetting: o,
                onReset: (e) => {
                  d(null != e ? e : ""), p(""), l(e);
                },
              })
        );
      }
      var R = n(20735),
        L = n(83216),
        T = n(68399),
        z = n(19216),
        U = n(68952),
        I = n(4466),
        Z = n(49593);
      function F(e, t) {
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
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : F(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var V = n(34796),
        q = n(45456),
        H = n(90240),
        Q = n(78375);
      function W(e, t) {
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
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? W(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : W(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function X(e) {
        let { user: t, initialQuery: n, socketUrl: r, userMetadata: c } = e,
          d = (0, h.useRef)(n ? { query: n } : null),
          x = (0, h.useRef)(n ? "url_query" : "search_input"),
          A = (0, T.W6)(T.bM.isSettingsModalOpen),
          b = (0, T.W6)(T.bM.isDebugModalOpen),
          [y, j] = (0, V.r)(),
          { 0: w, 1: k } = (0, h.useState)(null),
          { 0: N, 1: S } = (0, h.useState)(),
          { 0: E, 1: _ } = (0, h.useState)(null != n),
          C = (0, z.nn)(z.LW.threadId),
          D = (0, z.nn)(z.LW.lastTurn),
          F = (0, p.useRouter)(),
          { 0: W, 1: X } = (0, h.useState)(null),
          J = (0, l.gb)({ namespace: l.dG.SonicHome, opts: { debug: !0 } });
        (0, h.useEffect)(() => {
          i.U.addTiming("sonic.web.home.mounted");
        }, []),
          (0, q.e)(),
          (0, h.useEffect)(() => {
            (async function () {
              t && X((await (0, o.FB)(t.id)).slice(0, 6));
            })();
          }, [t]);
        let { readyState: Y, postQuery: $ } = (function (e) {
            let { threadId: t, socketUrl: n, onTurnSubmitted: r } = e,
              { 0: a, 1: l } = (0, h.useState)(!1),
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
            let f = (0, h.useCallback)(async () => {
                if (m.current > 50)
                  return (
                    s.m.danger("Failed to fetch websocket url", {
                      hasCloseButton: !0,
                    }),
                    i.U.addError("Failed to fetch websocket url, giving up", {
                      attempts: m.current,
                    }),
                    ""
                  );
                try {
                  let e = await I.c.get("".concat(O.rq, "/register-websocket"));
                  return (m.current = 0), e.wss_url;
                } catch (e) {
                  throw (
                    (i.U.addError("Failed to fetch websocket url, retrying", {
                      cause: e,
                    }),
                    (m.current += 1),
                    e)
                  );
                }
              }, []),
              { readyState: x } = (0, g.ZP)(
                !a && n ? n : f,
                {
                  retryOnError: !0,
                  shouldReconnect: () => !0 === p.current && u,
                  reconnectAttempts: 50,
                  reconnectInterval: (e) =>
                    Math.min(1e3 * Math.pow(1.3, e), 5e3),
                  onMessage: (e) => {
                    !(function (e, t) {
                      if (e.thread_id !== t) return;
                      let n =
                        "append_turn" === e.delta.type ||
                        "set_turn" === e.delta.type
                          ? e.delta.turn.index
                          : e.delta.turn_index;
                      if (null === n) throw Error();
                      switch (e.delta.type) {
                        case "append_turn": {
                          let n = e.delta;
                          z.P3.appendTurn(t, n.turn);
                          break;
                        }
                        case "set_search_results": {
                          let t = e.delta;
                          z.P3.updateTurn(n, (e) => {
                            e.search_results = t.search_results;
                          });
                          break;
                        }
                        case "set_model_response": {
                          let t = e.delta;
                          z.P3.updateTurn(
                            n,
                            (e) => (e.model_response = t.model_response)
                          );
                          break;
                        }
                        case "append_model_response_text": {
                          let t = e.delta;
                          z.P3.updateTurn(n, (e) => {
                            if (!e.model_response) throw Error();
                            (e.model_response.text += t.text),
                              (e.model_response.citations = t.citations);
                          });
                          break;
                        }
                        case "set_weather_widget": {
                          let t = e.delta;
                          z.P3.updateTurn(n, (e) => {
                            e.weather_widget = t.weather_widget;
                          });
                          break;
                        }
                        case "set_calculator_widget": {
                          let t = e.delta;
                          z.P3.updateTurn(n, (e) => {
                            e.calculator_widget = t.calculator_widget;
                          });
                          break;
                        }
                        case "set_sports_widget": {
                          let t = e.delta;
                          z.P3.updateTurn(n, (e) => {
                            e.sports_widget = t.sports_widget;
                          });
                          break;
                        }
                        case "set_finance_widget": {
                          let t = e.delta;
                          z.P3.updateTurn(n, (e) => {
                            e.finance_widget = t.finance_widget;
                          });
                          break;
                        }
                        case "set_finance_widget_histories": {
                          let t = e.delta;
                          z.P3.updateTurn(n, (e) => {
                            if (null === e.finance_widget) throw Error();
                            e.finance_widget = B(
                              B({}, e.finance_widget),
                              {},
                              { histories: t.histories }
                            );
                          });
                          break;
                        }
                        case "set_timezone_widget": {
                          let t = e.delta;
                          z.P3.updateTurn(n, (e) => {
                            e.timezone_widget = t.timezone_widget;
                          });
                          break;
                        }
                        case "set_news_widget": {
                          let t = e.delta;
                          z.P3.updateTurn(n, (e) => {
                            e.news_widget = t.news_widget;
                          });
                          break;
                        }
                        case "set_turn_execution_status": {
                          let t = e.delta;
                          z.P3.updateTurn(n, (e) => {
                            (e.execution_status = t.execution_status),
                              (e.error = t.error);
                          });
                          break;
                        }
                        default:
                          i.U.addError("Unsupported delta type", {
                            delta: e.delta,
                          });
                      }
                    })(JSON.parse(e.data), t);
                  },
                  onError: (e) => {
                    i.U.addError("Websocket error", { event: e });
                  },
                  onClose: () => {
                    console.debug("[ws] Connection closed"), l(!0);
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
              A = (0, h.useCallback)(() => {
                x !== g.kQ.OPEN &&
                  (c(!1),
                  (m.current = 0),
                  setTimeout(() => {
                    c(!0);
                  }, 0));
              }, [x]);
            return (
              (0, h.useEffect)(
                () =>
                  (0, U.R)({
                    onHidden: () => {
                      console.debug("[ws] onHidden"), d(!1);
                    },
                    onVisible: () => {
                      console.debug("[ws] onVisible, set reconnect to true"),
                        d(!0),
                        A();
                    },
                  }),
                [A]
              ),
              {
                readyState: x,
                postQuery: (0, h.useCallback)(
                  async (e) => {
                    let { threadId: t } = e,
                      n = !!t;
                    return (
                      t || (t = await (0, Z.gK)()),
                      (0, Z.dN)({
                        threadId: t,
                        query: e.query,
                        agentSettingsOverrides: e.agentSettingsOverrides,
                        metadata: e.metadata,
                      })
                        .then(() => (null == r ? void 0 : r({ isFollowup: n })))
                        .catch((e) =>
                          i.U.addError("Failed to postThreadTurn", { cause: e })
                        ),
                      { threadId: t }
                    );
                  },
                  [r]
                ),
              }
            );
          })({
            socketUrl: r,
            threadId: C,
            onTurnSubmitted: (0, h.useCallback)(
              (e) => {
                let { isFollowup: t } = e;
                t ||
                  J.logTiming("search_query_submitted", {
                    context: { source: er() },
                  });
              },
              [J]
            ),
          }),
          { newQueryStarted: ee } = (function (e) {
            let { profiler: t, querySource: n } = e,
              r = (0, h.useRef)(G({}, K)),
              s = (0, z.nn)(z.LW.firstTurn);
            return (
              (0, h.useEffect)(() => {
                var e, a, i;
                if (null == s) return;
                r.current.turn ||
                  ((r.current.turn = !0),
                  t.logTiming("ttf_message", { context: { source: n } })),
                  r.current.modelResponse ||
                    u()(
                      null === (e = s.model_response) || void 0 === e
                        ? void 0
                        : e.text
                    ) ||
                    ((r.current.modelResponse = !0),
                    t.logTiming("ttf_model_response", {
                      context: { source: n },
                    })),
                  r.current.searchResults ||
                    u()(
                      null === (a = s.search_results) || void 0 === a
                        ? void 0
                        : a.entries
                    ) ||
                    ((r.current.searchResults = !0),
                    t.logTiming("ttf_search_results", {
                      context: { source: n },
                    }));
                let l = (0, Q.K)(s);
                !r.current.widget &&
                  ["in_progress", "done"].includes(
                    null !== (i = null == l ? void 0 : l.status) && void 0 !== i
                      ? i
                      : ""
                  ) &&
                  ((r.current.widget = !0),
                  t.logTiming("ttf_widget", {
                    context: {
                      source: n,
                      widgetType: null == l ? void 0 : l.type,
                    },
                  }));
              }, [s, t, n]),
              {
                newQueryStarted: (0, h.useCallback)(() => {
                  r.current = G({}, K);
                }, []),
              }
            );
          })({ profiler: J, querySource: er() }),
          et = (0, h.useMemo)(() => {
            let e = (function (e) {
              let t = a.bX.getCookie(a.cn.LastLocation);
              if (((0, H.XB)(e), t && e))
                try {
                  return JSON.parse(t);
                } catch {}
              return H.PX;
            })(y.useLocation);
            return G(G({}, c), e);
          }, [c, y.useLocation]),
          en = (0, h.useCallback)(
            async (e, t) => {
              try {
                let n = null === t ? "query" : "followup",
                  r = er();
                "query" === n && (J.reset(), ee(), k(e), S(e));
                let s = await $({
                  threadId: t,
                  query: e,
                  agentSettingsOverrides: y.agentSettingsOverrides,
                  metadata: et,
                });
                if ("query" === n) {
                  let t = s.threadId;
                  z.P3.newThread(t),
                    L.Y.logEvent(L.M.searchQuerySubmitted, {
                      thread_id: t,
                      source: r,
                      user_hash: W,
                      query: e,
                    });
                } else
                  "followup" === n &&
                    L.Y.logEvent(L.M.searchFollowupSubmitted, {
                      thread_id: t,
                      turn_index: D.index,
                    });
              } catch (e) {
                i.U.addError(Error("Error posting user action", { cause: e })),
                  s.m.danger("Failed to submit");
              }
            },
            [D, $, J, y.agentSettingsOverrides, ee, W, et]
          );
        function er() {
          return x.current;
        }
        let es = (e, t) => {
            let { isFollowup: n = !1 } = t;
            if (Y !== g.kQ.OPEN) {
              s.m.danger("Websocket connection is not open");
              return;
            }
            en(null != e ? e : "", n ? C : null), _(!0);
          },
          ea = (e) => {
            z.P3.clearThread(), (x.current = "search_input");
            let t = new URLSearchParams(window.location.search);
            e ? t.set("q", e) : t.delete("q");
            let n = "/search";
            t.size > 0 && (n += "?".concat(t.toString())),
              F.replace(n, void 0, { shallow: !0 }),
              e ? (en(e, null), _(!0)) : _(!1);
          };
        return (
          (0, h.useEffect)(() => {
            var e;
            Y === g.kQ.OPEN &&
              (null != n &&
                (null === (e = d.current) || void 0 === e
                  ? void 0
                  : e.query) !== n &&
                (z.P3.clearThread(), (d.current = { query: n })),
              null == d.current ||
                d.current.submitted ||
                ((async function () {
                  null == d.current ||
                    d.current.submitted ||
                    ((d.current.submitted = !0),
                    await en(d.current.query, null));
                })(),
                _(!0)));
          }, [Y, t.id, n, en, E]),
          (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsxs)(m(), {
                children: [
                  (0, P.jsx)("title", {
                    children:
                      E && N
                        ? "".concat(N, " - ChatGPT Search")
                        : "ChatGPT Search",
                  }),
                  (0, P.jsx)("link", {
                    rel: "icon",
                    type: "image/x-icon",
                    sizes: "48x48",
                    href: "https://cdn.oaistatic.com/_next/static/media/favicon.5712d7f1.ico",
                  }),
                  (0, P.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "https://cdn.oaistatic.com/_next/static/media/favicon-32x32.243e9a8b.png",
                  }),
                  (0, P.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "https://cdn.oaistatic.com/_next/static/media/favicon-16x16.41efb442.png",
                  }),
                ],
              }),
              (0, P.jsx)(v.c.Provider, {
                value: {
                  searchQuery: null != w ? w : "",
                  user: t,
                  userHash: W,
                  settings: y,
                  userMetadata: et,
                },
                children: (0, P.jsx)(M, {
                  initialQuery: n,
                  readyState: Y,
                  hasSubmittedInitialQuery: E,
                  onSubmitFollowup: (e) => es(e, { isFollowup: !0 }),
                  onReset: ea,
                  onSubmitSearch: (e) => {
                    ea(e);
                  },
                  onRetryQuery: (e) => {
                    if (null == N) {
                      s.m.danger("No previous query to retry");
                      return;
                    }
                    e ? es(e, { isFollowup: !0 }) : ea(N);
                  },
                  onUpdateSetting: j,
                }),
              }),
              b &&
                (0, P.jsx)(f.q, {
                  isOpen: !0,
                  onDebugClose: () => T.vm.toggleDebugModalOpen(),
                }),
              A &&
                (0, P.jsx)(R.Zr, {
                  onClose: () => T.vm.toggleSettingsModalOpen(),
                  settings: y,
                  onUpdateSetting: j,
                }),
            ],
          })
        );
      }
      let K = { turn: !1, searchResults: !1, modelResponse: !1, widget: !1 };
    },
    47072: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return eF;
          },
        });
      var r = n(51533),
        s = n(19841),
        a = n(91530),
        i = n.n(a),
        l = n(70079),
        o = n(13188),
        c = n(34796),
        u = n(45456),
        d = n(29287),
        m = n(85452),
        p = n(1454),
        h = n(18450),
        g = n(11335),
        f = n(95407),
        x = n(77799),
        A = n(61888),
        v = n(20724),
        b = n(55057),
        y = n(22189),
        j = n(67739),
        w = n(8143),
        O = n(35250);
      let k = ["minHeight", "maxHeight", "className"];
      function N(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                (0, h.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : N(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let E = (0, l.forwardRef)(function (e, t) {
        let { minHeight: n = 24, maxHeight: r, className: a } = e,
          i = (0, j.Z)(e, k),
          o = (0, l.useRef)(null),
          c = null != t ? t : o,
          [u] = (0, w.f)(c);
        return (
          (0, l.useEffect)(() => {
            let e =
              null != u
                ? u
                : "function" != typeof c && (null == c ? void 0 : c.current);
            if (e) {
              e.style.height = "0px";
              let t = e.scrollHeight;
              null != n && t < n ? (t = n) : null != r && t > r && (t = r),
                (e.style.height = "".concat(t, "px"));
            }
          }, [u, c, i.value, n, r]),
          (0, O.jsx)(
            "textarea",
            S(
              S({}, i),
              {},
              {
                className: (0, s.default)("hide-scrollbar resize-none", a),
                ref: c,
              }
            )
          )
        );
      });
      function P(e) {
        let { result: t, className: n } = e;
        switch (t) {
          case "waiting":
            return (0, O.jsx)(p.Q8x, {
              className: (0, s.default)(
                "stroke-[4] text-token-text-quaternary opacity-50",
                n
              ),
            });
          case "pending":
            return (0, O.jsx)(m.Z, { className: n });
          case "passed":
            return (0, O.jsx)(p.UgA, {
              className: (0, s.default)("stroke-[4] text-green-500", n),
            });
          case "failed":
            return (0, O.jsx)(p.q5L, {
              className: (0, s.default)("stroke-[4] text-red-500", n),
            });
        }
      }
      var _ = n(4466),
        C = n(82473),
        D = n(61236),
        M = n(25494),
        R = n(98486),
        L = n(66315),
        T = n(79208),
        z = n(8844),
        U = n(5224),
        I = n(49593);
      function Z(e, t) {
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
      function F(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                (0, h.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Z(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let B = (e) => {
          let t = (0, C.NL)(),
            n = null == e ? void 0 : e.sort();
          return (0, D.a)({
            queryKey: ["evals", { tags: n }],
            queryFn: async () => {
              let e = new URLSearchParams();
              if (n) for (let t of n) e.append("tags", t);
              return _.c
                .get("".concat(U.rq, "/evals/evals?").concat(e.toString()))
                .then((e) => {
                  for (let n of e) t.setQueryData(["eval", n.id], n);
                  return e;
                });
            },
          });
        },
        V = (e) =>
          (0, D.a)({
            queryKey: ["eval", e],
            queryFn: async () =>
              _.c.get("".concat(U.rq, "/evals/evals/").concat(e)),
          }),
        q = new Map(),
        H = (e, t) => {
          var n;
          let r = q.get(e);
          return (
            null == r &&
              ((r = (0, A.debounce)(
                (t) =>
                  _.c.post(
                    "".concat(U.rq, "/evals/evals"),
                    F(F({}, t), {}, { id: e })
                  ),
                500,
                { trailing: !0 }
              )),
              q.set(e, r)),
            null === (n = r) || void 0 === n ? void 0 : n(t)
          );
        },
        Q = (e) => {
          let t = (0, C.NL)();
          return (0, M.D)({
            mutationKey: ["eval", e],
            mutationFn: async (n) => {
              let r = F(F({}, n), {}, { id: e });
              t.setQueryData(["evals"], (t) =>
                t ? t.map((t) => (t.id === e ? r : t)) : t
              ),
                t.setQueryData(["eval", e], r),
                await H(e, n);
            },
          });
        },
        W = () => {
          let e = (0, C.NL)();
          return (0, M.D)({
            mutationFn: async (e) => {},
            onSettled: (t, n, r) => {
              var s;
              let a = "sonic_eval_".concat((0, z.Z)()),
                i = F(F({}, r), {}, { id: a }),
                l = null === (s = r.tags) || void 0 === s ? void 0 : s.sort();
              e.setQueryData(["evals", { tags: l }], (e) =>
                e ? [i, ...e] : e
              ),
                e.setQueryData(["eval", a], i);
            },
          });
        },
        G = (e) => {
          let t = (0, C.NL)();
          return (0, M.D)({
            mutationKey: ["eval", e],
            mutationFn: async () =>
              _.c.delete("".concat(U.rq, "/evals/evals/").concat(e)),
            onSettled: () => {
              t.setQueryData(["evals"], (t) =>
                t ? t.filter((t) => t.id !== e) : t
              ),
                t.setQueryData(["eval", e], void 0);
            },
          });
        },
        X = (0, A.memoize)((e) => {
          let { queryClient: t, settings: n } = e;
          return T.Ue({
            fetcher: async (e) => {
              let r = (0, A.compact)(
                  await Promise.all(e.map((e) => t.getQueryData(["eval", e])))
                ),
                s = new Date(Date.now()),
                a = n && (0, I.lw)(n.agentSettingsOverrides),
                i = _.c.streamedJsonPost(
                  "".concat(U.rq, "/evals/batched_runs"),
                  {
                    eval_ids: r.map((e) => e.id),
                    turn_template: null == a ? void 0 : a.turn,
                    base_config: null == a ? void 0 : a.base_config,
                  }
                ),
                l = [];
              try {
                for await (let e of i)
                  if (e.id && e.status && e.eval_run_ids) {
                    t.setQueryData(["batched_run", e.id], e);
                    let n = t.getQueryData(["user_batched_runs"]);
                    n &&
                      !n.includes(e.id) &&
                      t.setQueryData(["user_batched_runs"], [e.id, ...n]);
                  } else if (e.id && e.batch_id && e.eval_id) {
                    let n = t.getQueryData(["eval_run", e.eval_id, "latest"]);
                    (!n ||
                      n.batch_id === e.batch_id ||
                      null == n.created_at ||
                      new Date(n.created_at) < s) &&
                      t.setQueryData(["eval_run", e.eval_id, "latest"], e),
                      t.setQueryData(["eval_run", e.eval_id, e.batch_id], e),
                      l.push(e);
                  }
              } catch (e) {
                f.m.danger("Failed to read eval run stream"),
                  L.U.addError("Failed to read eval run stream", { cause: e });
              }
              return l;
            },
            resolver: T.rp("eval_id"),
            scheduler: T.ck(500),
          });
        }),
        K = (e, t) => {
          let n = (0, C.NL)(),
            r = X(
              (0, l.useMemo)(() => ({ queryClient: n, settings: t }), [n, t])
            );
          return () => (
            e.forEach((e) => {
              n.setQueryData(["eval_run", e, "latest"], {
                id: "",
                eval_id: e,
                batch_id: "",
                conversation_id: "",
                status: "in_progress",
                steps: [],
              });
            }),
            Promise.all(e.map((e) => r.fetch(e)))
          );
        },
        J = (e, t, n) => {
          let r = K(e ? [e] : [], n);
          return (0, D.a)({
            queryKey: ["eval_run", e, null != t ? t : "latest"],
            queryFn: async () =>
              t
                ? await _.c.get(
                    ""
                      .concat(U.rq, "/evals/eval_runs/")
                      .concat(e, "/")
                      .concat(t)
                  )
                : (await r())[0],
            enabled: !!e,
            initialData: null,
          });
        };
      function Y() {
        return (0, D.a)({
          queryKey: ["tags"],
          queryFn: async () =>
            (0, A.sortBy)(await _.c.get("".concat(U.rq, "/evals/tags"))),
        });
      }
      async function $(e) {
        try {
          let t = await _.c.get(
              "".concat(U.rq, "/evals/batched_runs/").concat(e, "/csv"),
              { skipJsonTransform: !0 }
            ),
            n = await t.blob(),
            r = window.URL.createObjectURL(n),
            s = document.createElement("a");
          (s.href = r),
            (s.download = "eval_batch_".concat(e, ".csv")),
            s.click(),
            window.URL.revokeObjectURL(r);
        } catch (e) {
          f.m.danger("Failed to download CSV: ".concat(e));
        }
      }
      function ee(e) {
        return (0, D.a)({
          queryKey: ["batched_run", e],
          queryFn: async () => {
            if (e)
              return await _.c.get(
                "".concat(U.rq, "/evals/batched_runs/").concat(e)
              );
          },
        });
      }
      function et(e, t) {
        e.setQueryData(["eval_run", t.eval_id, t.batch_id], t);
        let n = e.getQueryData(["eval_run", t.eval_id, "latest"]),
          r = (null == n ? void 0 : n.created_at) && new Date(n.created_at),
          s = t.created_at && new Date(t.created_at);
        e.setQueryData(
          ["eval_run", t.eval_id, "latest"],
          n && (!r || !s || s > r) ? t : n
        );
      }
      function en(e, t) {
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
      function er(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? en(Object(n), !0).forEach(function (t) {
                (0, h.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : en(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let es = ["model_response"];
      function ea(e) {
        var t, n;
        let {
            criterion: r,
            gradingResult: a,
            isEditing: i,
            onSetIsEditing: o,
            onUpdateCriterion: c,
            autoFocus: u,
            onBlur: d,
          } = e,
          { 0: m, 1: h } = (0, l.useState)(r);
        (0, l.useEffect)(() => {
          h(r);
        }, [r]);
        let f = (e, t) => {
            h(e), null == c || c(e, t);
          },
          x = "pending" !== a && void 0 !== a ? a.thoughts : void 0,
          { 0: v, 1: y } = (0, l.useState)(!1),
          j = (0, l.useRef)(null);
        return (0, O.jsx)(g.E, {
          label: x,
          disabled: !x || i,
          wide: !0,
          side: "right",
          sideOffset: 20,
          align: "start",
          className: "w-full",
          children: (0, O.jsx)("div", {
            className: (0, s.default)("flex w-full gap-2", i && "pl-4"),
            children: i
              ? (0, O.jsxs)(O.Fragment, {
                  children: [
                    null != m
                      ? (0, O.jsx)(g.u, {
                          label: "Remove criterion",
                          side: "top",
                          sideOffset: 4,
                          children: (0, O.jsx)("button", {
                            className:
                              "mt-2 text-token-text-tertiary hover:text-red-500",
                            onClick: (e) => {
                              e.stopPropagation(),
                                h({ prompt: "" }),
                                null == c || c(null);
                            },
                            children: (0, O.jsx)(p.Ybf, {}),
                          }),
                        })
                      : (0, O.jsx)("div", { className: "h-4 w-4" }),
                    (0, O.jsx)(E, {
                      value:
                        null !== (t = null == m ? void 0 : m.prompt) &&
                        void 0 !== t
                          ? t
                          : "",
                      onChange: (e) =>
                        f(er(er({}, m), {}, { prompt: e.target.value })),
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
                        let [t, ...n] = e.clipboardData
                            .getData("text")
                            .split("\n"),
                          r = e.target,
                          s =
                            r.value.slice(0, r.selectionStart) +
                            t +
                            r.value.slice(r.selectionEnd);
                        f(
                          er(er({}, m), {}, { prompt: s }),
                          (0, A.compact)(
                            n.map((e) => ({
                              prompt: e,
                              visible_assistant_message_fields: es,
                            }))
                          )
                        );
                        let a = r.selectionStart + t.length;
                        requestAnimationFrame(() => {
                          r.setSelectionRange(a, a);
                        });
                      },
                      autoFocus: u,
                      ref: j,
                    }),
                    (0, O.jsx)("button", {
                      className:
                        "text-token-text-tertiary hover:text-token-text-primary",
                      onClick: () => {
                        var e;
                        return null === (e = j.current) || void 0 === e
                          ? void 0
                          : e.focus();
                      },
                      children: (0, O.jsx)(b.nWS, {}),
                    }),
                    (0, O.jsx)(ei, {
                      open: v,
                      criterion: null != m ? m : { prompt: "" },
                      onUpdateCriterion: (e) => {
                        f(e);
                      },
                    }),
                  ],
                })
              : (0, O.jsxs)(O.Fragment, {
                  children: [
                    (0, O.jsx)("div", {
                      className: "flex-grow",
                      children: null == m ? void 0 : m.prompt,
                    }),
                    (0, O.jsx)(P, {
                      className: "mt-1 shrink-0",
                      result: a
                        ? "pending" === a
                          ? "pending"
                          : a.passed
                            ? "passed"
                            : "failed"
                        : "waiting",
                    }),
                    (0, O.jsx)(g.u, {
                      label:
                        null != m && m.visible_assistant_message_fields
                          ? "Visible fields: ".concat(
                              null == m ||
                              null ===
                                (n = m.visible_assistant_message_fields) ||
                              void 0 === n
                                ? void 0
                                : n.join(", ")
                            )
                          : "All fields visible",
                      align: "end",
                      children: (0, O.jsx)("button", {
                        className:
                          "text-token-text-tertiary hover:text-token-text-primary",
                        onClick: () => {
                          o(!0),
                            requestAnimationFrame(() => {
                              var e;
                              null === (e = j.current) ||
                                void 0 === e ||
                                e.focus();
                            });
                        },
                        children: (0, O.jsx)(b.nWS, {}),
                      }),
                    }),
                  ],
                }),
          }),
        });
      }
      function ei(e) {
        var t;
        let { open: n, criterion: r, onUpdateCriterion: s } = e,
          a = (0, D.a)({
            queryKey: ["grader_response_fields"],
            queryFn: async () =>
              await _.c.get("".concat(U.rq, "/evals/grader_response_fields")),
          });
        return (0, O.jsxs)(y.fC, {
          open: n,
          children: [
            (0, O.jsx)(y.ee, { className: "min-h-full" }),
            (0, O.jsx)(y.h_, {
              children: (0, O.jsxs)(y.VY, {
                side: "right",
                sideOffset: 30,
                onOpenAutoFocus: (e) => e.preventDefault(),
                className:
                  "z-10 rounded-lg bg-token-main-surface-primary p-4 text-token-text-primary shadow-md",
                onMouseDown: (e) => e.preventDefault(),
                children: [
                  (0, O.jsx)(y.Eh, {
                    className: " h-4 w-10 fill-token-main-surface-primary",
                    style: {
                      filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1))",
                    },
                  }),
                  (0, O.jsx)("div", {
                    className: "mb-4 text-sm text-token-text-secondary",
                    children:
                      "(If none are checked, all fields are visible to grader)",
                  }),
                  (0, O.jsxs)("div", {
                    className:
                      "mb-4 grid w-fit grid-cols-[auto,auto] items-center gap-x-4 gap-y-1",
                    children: [
                      a.isLoading && (0, O.jsx)(m.Z, {}),
                      null === (t = a.data) || void 0 === t
                        ? void 0
                        : t.map((e) => {
                            var t, n;
                            return (0, O.jsxs)(O.Fragment, {
                              children: [
                                (0, O.jsx)("div", {
                                  className: "text-sm font-medium",
                                  children: e,
                                }),
                                (0, O.jsx)("input", {
                                  type: "checkbox",
                                  checked:
                                    null !==
                                      (t =
                                        null ===
                                          (n =
                                            r.visible_assistant_message_fields) ||
                                        void 0 === n
                                          ? void 0
                                          : n.includes(e)) && void 0 !== t
                                      ? t
                                      : es.includes(e),
                                  onChange: (t) => {
                                    var n, a;
                                    if (t.target.checked)
                                      s(
                                        er(
                                          er({}, r),
                                          {},
                                          {
                                            visible_assistant_message_fields: [
                                              ...(null !==
                                                (n =
                                                  r.visible_assistant_message_fields) &&
                                              void 0 !== n
                                                ? n
                                                : es),
                                              e,
                                            ],
                                          }
                                        )
                                      );
                                    else {
                                      let t = (
                                        null !==
                                          (a =
                                            r.visible_assistant_message_fields) &&
                                        void 0 !== a
                                          ? a
                                          : es
                                      ).filter((t) => t !== e);
                                      s(
                                        er(
                                          er({}, r),
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
      function el(e, t) {
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
      function eo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? el(Object(n), !0).forEach(function (t) {
                (0, h.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : el(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function ec(e) {
        let {
            step: t,
            stepResult: n,
            isEditing: r,
            onSetIsEditing: s,
            onUpdateStep: a,
            showCriterion: i = !0,
            autoFocus: o,
          } = e,
          c = (e) =>
            "pending" === n
              ? "pending"
              : null == n
                ? void 0
                : n.grading_results.find(
                    (t) => t.criterion.prompt === e.prompt
                  ),
          { 0: u, 1: d } = (0, l.useState)(t.user_action.query_fragment),
          m = (e) => {
            d(e),
              a(
                eo(
                  eo({}, t),
                  {},
                  {
                    user_action: eo(
                      eo({}, t.user_action),
                      {},
                      { query_fragment: e }
                    ),
                  }
                )
              );
          },
          h = r ? [...t.criteria, null] : t.criteria,
          f = "submit" === t.user_action.type && "" === u && o,
          x = !f && o;
        return (0, O.jsxs)("div", {
          className: "relative flex flex-col",
          children: [
            (0, O.jsx)("div", {
              className: "flex font-medium",
              children: r
                ? (0, O.jsxs)("div", {
                    className: "flex w-full gap-2",
                    children: [
                      (0, O.jsx)(g.u, {
                        label: "Remove step",
                        side: "top",
                        sideOffset: 4,
                        children: (0, O.jsx)("button", {
                          className: "mt-3 text-red-500 hover:text-red-700",
                          onClick: () => {
                            a(null);
                          },
                          children: (0, O.jsx)(p.Ybf, {}),
                        }),
                      }),
                      (0, O.jsx)(E, {
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
            i &&
              (0, O.jsx)("div", {
                className: "flex flex-col gap-1",
                children:
                  null == h
                    ? void 0
                    : h.map((e, n) =>
                        (0, O.jsx)(
                          ea,
                          {
                            criterion: e,
                            gradingResult: null != e ? c(e) : void 0,
                            isEditing: r,
                            onSetIsEditing: s,
                            onUpdateCriterion: (r, s) => {
                              let i = t.criteria;
                              (i =
                                null == e && null != r
                                  ? t.criteria.concat(r)
                                  : t.criteria
                                      .map((e, t) => (t === n ? r : e))
                                      .filter((e) => null != e)),
                                s && (i = i.concat(s)),
                                a(eo(eo({}, t), {}, { criteria: i }));
                            },
                            autoFocus: x && 0 === n,
                            onBlur: (e) => {
                              (null == e || "" === e.prompt) &&
                                a(
                                  eo(
                                    eo({}, t),
                                    {},
                                    {
                                      criteria: (0, A.compact)(
                                        t.criteria.map((e, t) =>
                                          t === n ? null : e
                                        )
                                      ),
                                    }
                                  )
                                );
                            },
                          },
                          "step-".concat(n)
                        )
                      ),
              }),
          ],
        });
      }
      var eu = n(18460),
        ed = n(98825),
        em = n(82133);
      function ep(e) {
        return "hsl(".concat(
          (function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n++)
              t = (t << 5) - t + e.charCodeAt(n);
            return ((t % 360) + 360) % 360;
          })(e),
          ", 50%, 90%)"
        );
      }
      let eh = ["tag"];
      function eg(e, t) {
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
      function ef(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eg(Object(n), !0).forEach(function (t) {
                (0, h.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eg(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let ex = (e) =>
        (0, O.jsx)(
          eu.c.Input,
          ef(
            ef({}, e),
            {},
            { inputClassName: "focus:ring-0 !text-token-text-primary" }
          )
        );
      function eA(e) {
        let {
            tags: t,
            onTagsChange: n,
            placeholder: r,
            isEditable: a,
            classNames: i,
          } = e,
          { data: l, isLoading: o } = Y(),
          c = a ? em.Z : ed.ZP,
          u = (function () {
            let e = (0, C.NL)();
            return (0, M.D)({
              mutationKey: ["tags"],
              mutationFn: async (t) => {
                e.setQueryData(["tags"], (e) => (e ? [...e, t] : e));
              },
            });
          })();
        return (0, O.jsx)(c, {
          classNames: ef(
            ef({}, i),
            {},
            {
              input: (e) => {
                var t;
                return (0, s.default)(
                  "text-sm",
                  null == i || null === (t = i.input) || void 0 === t
                    ? void 0
                    : t.call(i, e)
                );
              },
              multiValue: (e) => {
                var t;
                return (0, s.default)(
                  "!rounded-lg",
                  null == i || null === (t = i.multiValue) || void 0 === t
                    ? void 0
                    : t.call(i, e)
                );
              },
              menu: (e) => {
                var t;
                return (0, s.default)(
                  "bg-token-main-surface-primary snc-accent-border",
                  null == i || null === (t = i.menu) || void 0 === t
                    ? void 0
                    : t.call(i, e)
                );
              },
              control: (e) => {
                var t;
                return (0, s.default)(
                  "snc-accent-border",
                  null == i || null === (t = i.control) || void 0 === t
                    ? void 0
                    : t.call(i, e)
                );
              },
              menuList: (e) => {
                var t;
                return (0, s.default)(
                  "bg-token-main-surface-primary",
                  null == i || null === (t = i.menuList) || void 0 === t
                    ? void 0
                    : t.call(i, e)
                );
              },
              multiValueRemove: (e) => {
                var t;
                return (0, s.default)(
                  "text-gray-600",
                  null == i || null === (t = i.multiValueRemove) || void 0 === t
                    ? void 0
                    : t.call(i, e)
                );
              },
            }
          ),
          styles: {
            control: (e) =>
              ef(
                ef({}, e),
                {},
                { backgroundColor: "var(--token-main-surface-primary)" }
              ),
            option: (e, t) =>
              ef(
                ef({}, e),
                {},
                {
                  backgroundColor: t.isFocused
                    ? "var(--snc-hover)"
                    : "transparent",
                }
              ),
            multiValue: (e, t) =>
              ef(ef({}, e), {}, { backgroundColor: ep(t.data.value) }),
          },
          components: { Input: ex },
          isClearable: !1,
          placeholder: null != r ? r : "Select tags",
          className: "select-none",
          value: t.map((e) => ({ label: e, value: e })),
          isMulti: !0,
          isLoading: o,
          allowCreateWhileLoading: !1,
          options: null == l ? void 0 : l.map((e) => ({ label: e, value: e })),
          onCreateOption: (e) => {
            let r = (0, A.snakeCase)(e).toLowerCase();
            n((0, A.sortBy)([...t, r])), u.mutate(e);
          },
          onChange: (e) => {
            n((0, A.sortBy)(e.map((e) => e.value)));
          },
        });
      }
      function ev(e) {
        let { tag: t } = e,
          n = (0, j.Z)(e, eh);
        return (0, l.createElement)(
          "div",
          ef(
            ef({}, n),
            {},
            {
              key: t,
              className: (0, s.default)(
                "select-none rounded-lg bg-token-main-surface-tertiary px-2 py-1 text-xs font-medium !leading-none text-gray-700",
                n.className
              ),
              style: ef({ backgroundColor: ep(t) }, n.style),
            }
          ),
          t
        );
      }
      var eb = n(19216);
      function ey(e) {
        let { threadId: t, threadUserId: n, refetchOnMount: r } = e;
        return (0, D.a)({
          queryKey: ["thread", t, n],
          queryFn: async () => {
            if (!t) return { thread: null, turns: null };
            let e = await (0, I.Nv)({
                threadId: t,
                threadUserId: n,
                routePrefix: "/admin/evals",
              }),
              r = e.turns;
            return { thread: e, turns: r };
          },
          enabled: !!t,
          refetchOnMount: r,
        });
      }
      function ej(e, t) {
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
      function ew(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ej(Object(n), !0).forEach(function (t) {
                (0, h.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ej(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function eO(e) {
        var t, n, r, a, i, o;
        let {
            evalId: c,
            evalRunId: u,
            settings: m,
            setSelected: h,
            isSelected: b,
            initialEditState: y,
          } = e,
          j = J(c, void 0, m),
          w = (function (e) {
            let t = (0, C.NL)();
            return (0, D.a)({
              queryKey: ["eval_run", e],
              queryFn: async () => {
                let n = await _.c.get(
                  "".concat(U.rq, "/evals/eval_runs/").concat(e)
                );
                return et(t, n), n;
              },
            });
          })(null != u ? u : ""),
          k = null != u ? w : j,
          { 0: N, 1: S } = (0, l.useState)(null != y && y),
          M = null === (t = V(c)) || void 0 === t ? void 0 : t.data,
          R = (e) => {
            if (k.data) return k.data.steps[e] || "pending";
          },
          L = Q(c),
          T = G(c),
          { 0: z, 1: I } = (0, l.useState)(null);
        (0, l.useEffect)(() => {
          I(null != M ? M : null);
        }, [M]);
        let { 0: Z, 1: F } = (0, l.useState)(!1),
          B = (e) => {
            I(e), F(!0);
          },
          q = (0, l.useCallback)(() => {
            Z &&
              (null == z
                ? (T.mutate(), f.m.info("Test case deleted"))
                : (L.mutate(z), f.m.info("Test case updated")),
              F(!1));
          }, [z, L, Z, T]),
          H = (0, l.useCallback)(
            (e) => {
              e != N && (q(), S(e));
            },
            [N, q]
          );
        (0, l.useEffect)(() => {
          b || H(!1);
        }, [b, H]),
          (0, l.useEffect)(() => {
            if (b)
              return (0, x.eR)(document, {
                keydown: (e) => {
                  "Enter" !== e.key || e.shiftKey || H(!N);
                },
              });
          }, [b, N, c, H]);
        let W =
            !b && z && z.steps.length > 0
              ? [z.steps[0]]
              : null == z
                ? void 0
                : z.steps,
          X =
            (null === (n = k.data) || void 0 === n ? void 0 : n.status) ===
            "done"
              ? k.data.steps.every((e) =>
                  null == e ? void 0 : e.grading_results.every((e) => e.passed)
                )
                ? "passed"
                : "failed"
              : (null === (r = k.data) || void 0 === r ? void 0 : r.status) ===
                  "in_progress"
                ? "pending"
                : "waiting",
          K =
            (null === (a = k.data) ||
            void 0 === a ||
            null === (a = a.steps[0]) ||
            void 0 === a
              ? void 0
              : a.conversation.id) != null,
          { refetch: Y } = ey({
            threadId:
              null === (i = k.data) ||
              void 0 === i ||
              null === (i = i.steps[0]) ||
              void 0 === i
                ? void 0
                : i.conversation.id,
          });
        return (0, O.jsxs)("div", {
          className: (0, s.default)(
            "relative flex w-full cursor-pointer items-start gap-snc-1 px-snc-1 text-left transition-colors hover:border-token-border-heavy hover:bg-[var(--snc-hover)]",
            b ? "border-y bg-token-main-surface-secondary py-snc-1" : "py-2"
          ),
          onClick: () => h(!0),
          onDoubleClick: () => H(!0),
          children: [
            (0, O.jsx)("div", {
              className: "flex flex-col gap-2 leading-none",
              children: (0, O.jsx)("button", {
                className: "text-token-text-tertiary",
                onClick: (e) => {
                  e.stopPropagation(), H(!1);
                },
                children: b
                  ? (0, O.jsx)(p.bTu, { className: "icon-lg" })
                  : (0, O.jsx)(P, { result: X, className: "icon-lg" }),
              }),
            }),
            (0, O.jsxs)("div", {
              className: "flex flex-grow flex-col gap-2",
              children: [
                null == W
                  ? void 0
                  : W.map((e, t) =>
                      (0, O.jsx)(
                        ec,
                        {
                          step: e,
                          stepResult: R(t),
                          isEditing: N,
                          onSetIsEditing: H,
                          onUpdateStep: (e) => {
                            B((n) => {
                              var r;
                              let s = (0, A.compact)(
                                (null !== (r = null == n ? void 0 : n.steps) &&
                                void 0 !== r
                                  ? r
                                  : []
                                ).map((n, r) => (r === t ? e : n))
                              );
                              return null == n || 0 === s.length
                                ? null
                                : ew(ew({}, n), {}, { steps: s });
                            });
                          },
                          showCriterion: b,
                          autoFocus: 0 === t,
                        },
                        t
                      )
                    ),
                N
                  ? (0, O.jsxs)("div", {
                      className: "flex",
                      children: [
                        (0, O.jsx)(g.u, {
                          label: "Add new step",
                          side: "right",
                          sideOffset: 4,
                          children: (0, O.jsx)(d.z, {
                            color: "neutral",
                            onClick: (e) => {
                              e.stopPropagation(),
                                B((e) => {
                                  var t;
                                  return null == e
                                    ? e
                                    : ew(
                                        ew({}, e),
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
                                                model_family: v.tQ.GPT_3_5,
                                                search_engine: v.lv.Bing,
                                                robots_mode: v.K1.Conservative,
                                                show_image_to_model: !1,
                                                eval_preset: "production",
                                              },
                                            },
                                            criteria: [],
                                          }),
                                        }
                                      );
                                });
                            },
                            children: (0, O.jsx)(p.OvN, {}),
                          }),
                        }),
                        (0, O.jsx)("div", {
                          className: "absolute bottom-snc-1 right-snc-1",
                          children: (0, O.jsx)(g.u, {
                            label: "Delete test case",
                            side: "right",
                            children: (0, O.jsx)("button", {
                              className: "text-red-500",
                              onClick: (e) => {
                                e.stopPropagation(), T.mutate();
                              },
                              children: (0, O.jsx)(p.Ybf, {}),
                            }),
                          }),
                        }),
                      ],
                    })
                  : null,
                N
                  ? (0, O.jsx)(g.u, {
                      label: "Eval Notes",
                      side: "right",
                      sideOffset: 4,
                      children: (0, O.jsx)(E, {
                        value: null == z ? void 0 : z.notes,
                        onChange: (e) => {
                          B((t) =>
                            null == t
                              ? t
                              : ew(ew({}, t), {}, { notes: e.target.value })
                          );
                        },
                        placeholder: "Eval Notes...",
                        className:
                          "w-full rounded-lg bg-token-main-surface-primary text-sm",
                      }),
                    })
                  : (null == z ? void 0 : z.notes) &&
                    b &&
                    (0, O.jsxs)("div", {
                      className: "text-sm italic",
                      children: ["Notes: ", null == z ? void 0 : z.notes],
                    }),
                (0, O.jsx)(ek, {
                  tags:
                    null !== (o = null == z ? void 0 : z.tags) && void 0 !== o
                      ? o
                      : [],
                  onUpdateTags: (e) => {
                    B((t) => (null == t ? t : ew(ew({}, t), {}, { tags: e })));
                  },
                  isEditing: N,
                }),
              ],
            }),
            (0, O.jsxs)("div", {
              className: "flex flex-col gap-2 pt-1 leading-none",
              children: [
                (0, O.jsx)(g.u, {
                  label: "Run single test case",
                  side: "right",
                  sideOffset: 4,
                  children: (0, O.jsx)("button", {
                    className: "text-green-500 hover:text-token-text-primary",
                    onClick: (e) => {
                      q(), e.stopPropagation(), h(!0), k.refetch();
                    },
                    children: (0, O.jsx)(p.KCr, { className: "stroke-[2]" }),
                  }),
                }),
                b &&
                  (0, O.jsx)(g.u, {
                    label: N
                      ? "Save test case (Enter)"
                      : "Edit test case (Enter)",
                    side: "right",
                    sideOffset: 4,
                    children: (0, O.jsx)("button", {
                      className:
                        "text-token-text-tertiary hover:text-token-text-primary",
                      onClick: (e) => {
                        e.stopPropagation(), H(!N);
                      },
                      children: N
                        ? (0, O.jsx)(p.mW3, {})
                        : (0, O.jsx)(p.vPQ, {}),
                    }),
                  }),
                b &&
                  K &&
                  (0, O.jsx)(g.u, {
                    label: "Re-fetch test run",
                    side: "right",
                    sideOffset: 4,
                    children: (0, O.jsx)("div", {
                      className:
                        "text-token-text-tertiary hover:text-token-text-primary",
                      onClick: () => Y(),
                      children: (0, O.jsx)(p.Bw1, {}),
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      function ek(e) {
        let { tags: t, onUpdateTags: n, isEditing: r } = e;
        return r
          ? (0, O.jsx)("div", {
              children: (0, O.jsx)(eA, {
                isEditable: !0,
                tags: t,
                onTagsChange: (e) => n(e),
                placeholder: "Add tags...",
              }),
            })
          : (0, O.jsx)("div", {
              className: "flex flex-wrap items-center gap-1",
              children: t.map((e) => (0, O.jsx)(ev, { tag: e }, e)),
            });
      }
      function eN(e) {
        var t, n, r, a, i;
        let {
            batchId: o,
            settings: c,
            selectedEvalId: u,
            setSelectedEvalId: h,
          } = e,
          g = ee(o),
          f = (function (e) {
            let t = (0, C.NL)();
            return (0, R.h)({
              queries: e.map((e) => ({
                queryKey: ["eval_run", e],
                queryFn: async () => {
                  let n = await _.c.get(
                    "".concat(U.rq, "/evals/eval_runs/").concat(e)
                  );
                  return et(t, n), n;
                },
              })),
              combine: (e) => ({
                runs: (0, A.compact)(e.map((e) => e.data)),
                refetch: () => {
                  e.forEach((e) => e.refetch());
                },
                isLoading: e.some((e) => e.isLoading),
              }),
            });
          })(
            null !==
              (t =
                null === (n = g.data) || void 0 === n
                  ? void 0
                  : n.eval_run_ids) && void 0 !== t
              ? t
              : []
          ),
          x = f.runs,
          v =
            ((i = x.map((e) => e.eval_id)),
            (0, R.h)({
              queries: i.map((e) => ({
                queryKey: ["eval", e],
                queryFn: async () =>
                  await _.c.get("".concat(U.rq, "/evals/evals/").concat(e)),
              })),
              combine: (e) => (0, A.compact)(e.map((e) => e.data)),
            })),
          b = new Map();
        for (let e of x) b.set(e.eval_id, e);
        (0, l.useEffect)(() => {
          var e;
          (null === (e = g.data) || void 0 === e ? void 0 : e.status) ===
            "done" &&
            x.some(
              (e) => "in_progress" === e.status || "enqueued" === e.status
            ) &&
            f.refetch();
        }, [
          g,
          null === (r = g.data) || void 0 === r ? void 0 : r.status,
          x,
          f,
        ]);
        let {
          numSuccessfulRuns: y,
          numSuccessfulCriteria: j,
          numCriteria: w,
        } = (0, l.useMemo)(() => {
          let e = 0,
            t = 0,
            n = 0;
          for (let r of x) {
            let s = !0;
            for (let e of r.steps)
              for (let r of e.grading_results) n++, r.passed ? t++ : (s = !1);
            s && e++;
          }
          return {
            numSuccessfulRuns: e,
            numSuccessfulCriteria: t,
            numCriteria: n,
          };
        }, [x]);
        return (0, O.jsxs)("div", {
          className: "flex w-full flex-col items-stretch overflow-y-auto",
          children: [
            (0, O.jsxs)("div", {
              className: "grid grid-cols-[auto,1fr] gap-2 p-snc-1",
              children: [
                (0, O.jsx)("div", {
                  className: "font-medium",
                  children: "Batch",
                }),
                (0, O.jsx)("div", {
                  className: "font-mono text-xs",
                  children: o,
                }),
                (0, O.jsx)("div", {
                  className: "font-medium",
                  children: "Status",
                }),
                (0, O.jsx)("div", {
                  className: "font-mono text-xs",
                  children:
                    null === (a = g.data) || void 0 === a ? void 0 : a.status,
                }),
                (0, O.jsx)("div", {
                  className: "font-medium",
                  children: "Evals",
                }),
                (0, O.jsxs)("div", {
                  className: (0, s.default)(
                    "flex font-mono text-xs",
                    y === v.length ? "text-green-500" : "text-red-500"
                  ),
                  children: [
                    f.isLoading && (0, O.jsx)(m.Z, {}),
                    y,
                    "/",
                    v.length,
                    " (",
                    ((y / v.length) * 100).toFixed(1),
                    "%)",
                  ],
                }),
                (0, O.jsx)("div", {
                  className: "font-medium",
                  children: "Criteria",
                }),
                (0, O.jsxs)("div", {
                  className: (0, s.default)(
                    "flex font-mono text-xs",
                    j === w ? "text-green-500" : "text-red-500"
                  ),
                  children: [
                    f.isLoading && (0, O.jsx)(m.Z, {}),
                    j,
                    "/",
                    w,
                    " (",
                    ((j / w) * 100).toFixed(1),
                    "%)",
                  ],
                }),
                (0, O.jsxs)(d.z, {
                  onClick: () => $(o),
                  className: "col-span-2",
                  children: [(0, O.jsx)(p._hL, {}), "Download Batched Run CSV"],
                }),
              ],
            }),
            v.map((e) => {
              var t;
              return (0, O.jsx)(
                eO,
                {
                  settings: c,
                  evalId: e.id,
                  evalRunId:
                    null === (t = b.get(e.id)) || void 0 === t ? void 0 : t.id,
                  setSelected: (t) => {
                    h((n) => (t ? e.id : n !== e.id ? n : void 0));
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
        let { selectedBatchId: t, setSelectedBatchId: n, className: r } = e,
          { data: a } = (0, D.a)({
            queryKey: ["user_batched_runs"],
            queryFn: async () =>
              (await _.c.get("".concat(U.rq, "/evals/batched_runs"))).items,
          });
        return (0, O.jsxs)("div", {
          className: (0, s.default)("w-24 overflow-y-auto", r),
          children: [
            (0, O.jsx)("div", {
              className: (0, s.default)(
                "cursor-pointer p-2 hover:bg-token-main-surface-secondary",
                void 0 == t && "bg-token-main-surface-tertiary font-medium"
              ),
              onClick: () => n(void 0),
              children: "All/latest",
            }),
            null == a
              ? void 0
              : a.map((e) =>
                  (0, O.jsx)(
                    eE,
                    {
                      batchId: e,
                      selected: t === e,
                      setSelected: (t) => {
                        n(t ? e : void 0);
                      },
                    },
                    e
                  )
                ),
          ],
        });
      }
      function eE(e) {
        var t;
        let { batchId: n, selected: r, setSelected: a } = e,
          i = ee(n),
          l =
            (null === (t = i.data) || void 0 === t ? void 0 : t.created_at) &&
            new Date(i.data.created_at);
        return (0, O.jsx)("div", {
          className: (0, s.default)(
            "cursor-pointer p-2 text-xs hover:bg-token-main-surface-secondary",
            r && "bg-token-main-surface-tertiary font-medium"
          ),
          onClick: () => a(!r),
          children:
            l &&
            (0, O.jsxs)("div", {
              children: [
                (0, O.jsx)("div", {
                  children: null == l ? void 0 : l.toLocaleDateString(),
                }),
                (0, O.jsx)("div", {
                  children: null == l ? void 0 : l.toLocaleTimeString(),
                }),
              ],
            }),
        });
      }
      var eP = n(17178);
      function e_(e) {
        let { evalRun: t } = e,
          n = V(t.eval_id).data;
        return (0, O.jsxs)("div", {
          className: "flex flex-col gap-10",
          children: [
            null == n
              ? void 0
              : n.steps.map((e, n) => {
                  let r = t.steps[n];
                  return (0, O.jsxs)(
                    "div",
                    {
                      children: [
                        (0, O.jsxs)("div", {
                          className:
                            "flex items-center gap-2 text-xl font-medium",
                          children: [
                            (0, O.jsx)(P, {
                              result: r.grading_results.every((e) => e.passed)
                                ? "passed"
                                : "failed",
                            }),
                            e.user_action.query_fragment,
                          ],
                        }),
                        r.grading_results.map((e, t) =>
                          (0, O.jsx)(eC, { result: e }, t)
                        ),
                      ],
                    },
                    n
                  );
                }),
            t.turn_template &&
              (0, O.jsxs)("div", {
                className: "flex flex-grow flex-col",
                children: [
                  (0, O.jsx)("div", {
                    className: "flex items-center gap-1 font-medium",
                    children: "Turn Settings",
                  }),
                  (0, O.jsx)(eP.default, { json: t.turn_template }),
                ],
              }),
            null != t.batch_id &&
              (0, O.jsxs)(d.z, {
                onClick: () => $(t.batch_id),
                children: [(0, O.jsx)(p._hL, {}), "Download Batched Run CSV"],
              }),
          ],
        });
      }
      function eC(e) {
        let { result: t } = e,
          { 0: n, 1: r } = (0, l.useState)(!1);
        return (0, O.jsxs)("div", {
          className: "ml-8",
          children: [
            (0, O.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                (0, O.jsx)(P, { result: t.passed ? "passed" : "failed" }),
                t.criterion.prompt,
                (0, O.jsx)("button", {
                  onClick: () => r((e) => !e),
                  children: n ? (0, O.jsx)(p.Tfp, {}) : (0, O.jsx)(p.bTu, {}),
                }),
              ],
            }),
            !n &&
              (0, O.jsxs)("div", {
                className: "ml-8 flex flex-col gap-2",
                children: [
                  (0, O.jsx)("div", {
                    children: (0, O.jsx)("p", {
                      className: "whitespace-pre-wrap text-sm",
                      children: t.thoughts,
                    }),
                  }),
                  (0, O.jsxs)("div", {
                    children: [
                      (0, O.jsx)("div", {
                        className: "font-medium",
                        children: "Grader Details",
                      }),
                      (0, O.jsx)("p", {
                        className: "whitespace-pre-wrap text-sm",
                        children: t.prompt,
                      }),
                      (0, O.jsx)(eP.default, { json: t.grading_object }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      function eD(e) {
        let {
            run: t,
            settings: n,
            selectedBatchId: r,
            setSelectedBatchId: s,
          } = e,
          a = (0, A.isEqual)(
            (0, I.lw)(n.agentSettingsOverrides).turn,
            t.turn_template
          );
        return (0, O.jsxs)("div", {
          className: "flex gap-4 border-t p-snc-1",
          children: [
            (0, O.jsx)("div", {
              className: "flex flex-col",
              children: (0, O.jsxs)("div", {
                className: "grid grid-cols-[auto,auto] gap-1",
                children: [
                  (0, O.jsx)("div", {
                    className: "font-medium",
                    children: "Status",
                  }),
                  (0, O.jsx)("div", {
                    className: "font-mono text-xs",
                    children: t.status,
                  }),
                  null != t.batch_id &&
                    (0, O.jsxs)(d.z, {
                      onClick: () => $(t.batch_id),
                      className: "col-span-2",
                      children: [
                        (0, O.jsx)(p._hL, {}),
                        "Download Batched Run CSV",
                      ],
                    }),
                  null != t.batch_id &&
                    t.batch_id !== r &&
                    (0, O.jsxs)(d.z, {
                      onClick: () => s(t.batch_id),
                      className: "col-span-2",
                      children: [(0, O.jsx)(p.rDJ, {}), "View Runs in Batch"],
                    }),
                ],
              }),
            }),
            !a &&
              (0, O.jsx)(g.u, {
                label: "Run settings differ from your current settings",
                children: (0, O.jsx)("span", {
                  className: "text-red-500",
                  children: (0, O.jsx)(p.bcx, {}),
                }),
              }),
          ],
        });
      }
      var eM = n(16131),
        eR = n(75138),
        eL = n(20735),
        eT = n(72150);
      let ez = "audited";
      function eU() {
        return (0, O.jsx)("div", { children: (0, O.jsx)(eR.l, { lines: 3 }) });
      }
      function eI(e) {
        return Array.isArray(e) && e.every((e) => "string" == typeof e);
      }
      function eZ(e) {
        var t, n, r, a;
        let {
            settings: i,
            onUpdateSettings: o,
            selectedEvalId: c,
            setSelectedEvalId: u,
          } = e,
          { data: m, isLoading: h } = Y(),
          f = W(),
          { 0: x, 1: A } = (0, l.useState)(""),
          [y, j] = (0, eT.Z)("SONIC_EVAL_TAGS", [ez], eI);
        (0, l.useEffect)(() => {
          !h &&
            m &&
            m.length &&
            1 === y.length &&
            y[0] === ez &&
            (m.includes(ez) ? j([ez]) : j([m[0]]));
        }, [h]);
        let w = B(y),
          k =
            null == w || null === (t = w.data) || void 0 === t
              ? void 0
              : t.filter((e) =>
                  e.steps.some(
                    (e) =>
                      !x ||
                      e.user_action.query_fragment.toLowerCase().includes(x)
                  )
                ),
          { 0: N, 1: S } = (0, l.useState)(!1),
          E = K(
            (null != k ? k : []).map((e) => e.id),
            i
          );
        function P(e) {
          return (
            1 === e.steps.length && "" === e.steps[0].user_action.query_fragment
          );
        }
        return (
          (0, l.useEffect)(() => {
            if (w.data && !c && w.data.length > 0 && P(w.data[0])) {
              var e;
              u(null === (e = w.data[0]) || void 0 === e ? void 0 : e.id);
            }
          }, [w.data, c, u]),
          (0, O.jsxs)("div", {
            className: "flex flex-col overflow-y-auto",
            children: [
              (0, O.jsxs)("div", {
                className:
                  "pb-[calc(var(--snc-1)/2] flex h-[76px] items-center p-snc-1 font-medium",
                children: [
                  "Evals",
                  (null == w ? void 0 : w.data) != null
                    ? " (".concat(w.data.length, ")")
                    : "",
                ],
              }),
              (0, O.jsxs)("div", {
                className: "flex flex-col gap-2 p-snc-1",
                children: [
                  (0, O.jsx)(eA, {
                    classNames: { control: () => "!rounded-full pl-4 pr-1" },
                    tags: y,
                    onTagsChange: j,
                    placeholder: "Find tags...",
                  }),
                  (0, O.jsx)("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children:
                      null == m
                        ? void 0
                        : m.map((e) =>
                            (0, O.jsx)(
                              ev,
                              {
                                tag: e,
                                className: (0, s.default)(
                                  "cursor-pointer px-2.5 py-1.5 text-sm",
                                  !y.includes(e) && "opacity-60"
                                ),
                                onClick: (t) => {
                                  if (t.shiftKey) {
                                    y.includes(e)
                                      ? j(y.filter((t) => t !== e))
                                      : j([...y, e]);
                                    return;
                                  }
                                  1 === y.length && y.includes(e)
                                    ? j([])
                                    : j([e]);
                                },
                              },
                              e
                            )
                          ),
                  }),
                ],
              }),
              (0, O.jsxs)("div", {
                className:
                  "flex items-center justify-between gap-2 p-snc-1 pt-0",
                children: [
                  (0, O.jsx)("div", {
                    className: "flex",
                    children: (0, O.jsx)(g.u, {
                      label: "Add new eval",
                      side: "top",
                      sideOffset: 4,
                      children: (0, O.jsx)(d.z, {
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
                                      model_family: v.tQ.GPT_3_5,
                                      search_engine: v.lv.Bing,
                                      robots_mode: v.K1.Conservative,
                                      show_image_to_model: !1,
                                      eval_preset: "production",
                                    },
                                  },
                                  criteria: [],
                                },
                              ],
                              tags: [...y],
                            }),
                            u(void 0);
                        },
                        disabled:
                          (null === (n = w.data) || void 0 === n
                            ? void 0
                            : n[0]) && P(w.data[0]),
                        children: (0, O.jsx)(p.OvN, {}),
                      }),
                    }),
                  }),
                  (0, O.jsx)("input", {
                    type: "text",
                    value: x,
                    className:
                      "snc-accent-border flex-grow rounded-lg bg-token-main-surface-primary py-1 pl-4 pr-1 focus:outline-0 focus:ring-0",
                    onChange: (e) => A(e.target.value),
                    placeholder: "Filter...",
                  }),
                  (0, O.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, O.jsx)(g.u, {
                        label: "Edit settings",
                        side: "top",
                        sideOffset: 4,
                        children: (0, O.jsx)(d.z, {
                          onClick: () => S(!0),
                          color: "neutral",
                          children: (0, O.jsx)(b.KAl, { className: "icon-sm" }),
                        }),
                      }),
                      (0, O.jsx)(g.u, {
                        label: "Run all test cases",
                        side: "top",
                        sideOffset: 4,
                        children: (0, O.jsx)(d.z, {
                          disabled: !(null != k && k.length),
                          onClick: () => {
                            if (!k) return;
                            let e = k.length;
                            (!(e > 50) ||
                              window.confirm(
                                "Are you sure you want to run ".concat(
                                  e,
                                  " evals?"
                                )
                              )) &&
                              E();
                          },
                          className:
                            "flex items-center justify-self-end py-1.5",
                          children: (0, O.jsx)(eM.Z, {
                            value:
                              null !== (r = null == k ? void 0 : k.length) &&
                              void 0 !== r
                                ? r
                                : 0,
                            one: "Run 1 eval",
                            other: "Run ".concat(
                              null !== (a = null == k ? void 0 : k.length) &&
                              void 0 !== a
                                ? a
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
              w.isLoading
                ? (0, O.jsx)("div", {
                    className: "flex flex-col gap-snc-1 px-snc-2",
                    children: Array.from({ length: 5 }).map((e, t) =>
                      (0, O.jsx)(eU, {}, t)
                    ),
                  })
                : null == k
                  ? void 0
                  : k.map((e, t) => {
                      var n;
                      return (0, O.jsx)(
                        eO,
                        {
                          settings: i,
                          evalId: e.id,
                          setSelected: (t) => {
                            u((n) => (t ? e.id : n !== e.id ? n : void 0));
                          },
                          isSelected: e.id === c || P(e),
                          initialEditState: P(e),
                        },
                        null !== (n = e.id) && void 0 !== n
                          ? n
                          : "new-".concat(t)
                      );
                    }),
              N &&
                (0, O.jsx)(eL.Zr, {
                  onClose: () => S(!1),
                  settings: i,
                  onUpdateSetting: o,
                }),
            ],
          })
        );
      }
      function eF() {
        var e, t;
        (0, u.e)();
        let { 0: n, 1: r } = (0, l.useState)(void 0),
          { 0: s, 1: a } = (0, l.useState)(void 0),
          [i, o] = (0, c.r)(),
          d = null === (e = J(n, s)) || void 0 === e ? void 0 : e.data,
          m =
            null == d || null === (t = d.steps[0]) || void 0 === t
              ? void 0
              : t.conversation.id;
        return (0, O.jsxs)("div", {
          className: "flex h-screen w-screen",
          children: [
            (0, O.jsxs)("div", {
              className: "flex w-[600px] flex-shrink-0 border-r",
              children: [
                (0, O.jsx)(eS, {
                  selectedBatchId: s,
                  setSelectedBatchId: (e) => {
                    r(void 0), a(e);
                  },
                  className: "h-full flex-shrink-0 border-r",
                }),
                null != s
                  ? (0, O.jsx)(eN, {
                      batchId: s,
                      settings: i,
                      selectedEvalId: n,
                      setSelectedEvalId: r,
                    })
                  : (0, O.jsx)(eZ, {
                      settings: i,
                      onUpdateSettings: o,
                      selectedEvalId: n,
                      setSelectedEvalId: r,
                    }),
              ],
            }),
            (0, O.jsxs)("div", {
              className: "flex flex-grow flex-col overflow-hidden",
              children: [
                (null == d ? void 0 : d.exception) &&
                  (0, O.jsxs)("div", {
                    className: "h-ful w-full flex-grow overflow-auto",
                    children: [
                      (0, O.jsx)("h2", { children: "Error in backend" }),
                      (0, O.jsx)("pre", {
                        children: d.exception.traceback.join(""),
                      }),
                    ],
                  }),
                d &&
                  m &&
                  (0, O.jsxs)(O.Fragment, {
                    children: [
                      (0, O.jsx)("div", {
                        className: "h-full w-full flex-grow overflow-auto",
                        children: (0, O.jsx)(eV, {
                          settings: i,
                          onUpdateSettings: o,
                          evalRun: d,
                          threadId: m,
                        }),
                      }),
                      (0, O.jsx)(eD, {
                        run: d,
                        settings: i,
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
      function eB(e) {
        let { value: t, children: n } = e;
        return (0, O.jsx)(r.ck, {
          value: t,
          className: (0, s.default)(
            "flex shrink-0 cursor-pointer items-center justify-center rounded-full border px-2 py-0.5",
            "border-token-border-secondary bg-token-main-surface-primary text-token-text-secondary",
            "radix-state-checked:border-token-text-tertiary radix-state-checked:bg-token-text-primary radix-state-checked:font-medium radix-state-checked:text-token-main-surface-primary"
          ),
          children: n,
        });
      }
      function eV(e) {
        let t,
          { threadId: n, evalRun: s, settings: a, onUpdateSettings: c } = e,
          { 0: u, 1: d } = (0, l.useState)("chat"),
          { refetch: m } = (function (e) {
            let { threadId: t, threadUserId: n } = e,
              r = ey({ threadId: t, threadUserId: n }),
              s = r.data;
            return (
              (0, l.useEffect)(() => {
                if (t) {
                  var e;
                  eb.P3.setThread(
                    t,
                    null !== (e = null == s ? void 0 : s.turns) && void 0 !== e
                      ? e
                      : []
                  );
                }
              }, [t, s]),
              { refetch: r.refetch, isLoading: r.isLoading, isError: r.isError }
            );
          })({ threadId: n, threadUserId: void 0 });
        switch (
          ((0, l.useEffect)(() => {
            m();
          }, [m, s.status]),
          u)
        ) {
          case "chat":
            t = (0, O.jsx)(o.e, {
              readyState: 1,
              hasSubmittedInitialQuery: !0,
              searchQuery: "",
              followupQuery: "",
              onUpdateSearchQuery: i(),
              onUpdateFollowupQuery: i(),
              onSubmitFollowup: i(),
              onSubmitSearch: i(),
              settings: a,
              onUpdateSetting: c,
              onReset: i(),
              onRetryQuery: i(),
            });
            break;
          case "details":
            t = (0, O.jsx)(e_, { evalRun: s });
        }
        return (0, O.jsxs)("div", {
          className: "relative flex flex-col",
          children: [
            (0, O.jsx)("div", {
              className: "border-b p-2",
              children: (0, O.jsxs)(r.fC, {
                value: u,
                onValueChange: (e) => d(e),
                className: "flex gap-1",
                children: [
                  (0, O.jsx)(eB, { value: "chat", children: "Chat" }),
                  (0, O.jsx)(eB, { value: "details", children: "Details" }),
                ],
              }),
            }),
            t,
          ],
        });
      }
    },
    31863: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          FeedbackPage: function () {
            return E;
          },
        });
      var r,
        s,
        a = n(99945),
        i = n(85452),
        l = n(70187),
        o = n(61236),
        c = n(2428),
        u = n.n(c),
        d = n(26169),
        m = n.n(d),
        p = n(91530),
        h = n.n(p),
        g = n(41409),
        f = n(70079),
        x = n(21389),
        A = n(13188),
        v = n(25617),
        b = n(20735),
        y = n(49593),
        j = n(68399),
        w = n(19216),
        O = n(20963),
        k = n(45456),
        N = n(35250);
      function S(e) {
        return m()(e) && ["link", "message", "turn"].includes(e)
          ? e
          : "message";
      }
      function E() {
        (0, k.e)();
        let e = S((0, g.useRouter)().query.type);
        return "turn" === e
          ? (0, N.jsx)(_, {})
          : "link" === e
            ? (0, N.jsx)(P, {})
            : (0, N.jsx)("div", { children: "Unsupported feedback type" });
      }
      function P() {
        var e, t;
        let n = (0, w.nn)(w.LW.firstTurn),
          r = (0, g.useRouter)(),
          [s, a] = u()(r.query.ids) ? r.query.ids : [],
          i = S(r.query.type),
          { data: l, isLoading: c } = (0, o.a)({
            queryKey: ["searchLinkFeedback", s, a],
            queryFn: () => (0, y.zq)(s, a),
            enabled: !!s && !!a,
          });
        return c || !l
          ? (0, N.jsx)(M, {})
          : (0, N.jsx)(C, {
              type: i,
              threadId: l.search_link.thread_id,
              threadUserId: a,
              searchQuery:
                null !== (e = null == n ? void 0 : n.user_query) && void 0 !== e
                  ? e
                  : "",
              rating: l.search_link_to_user.rating,
              tags:
                null !== (t = l.search_link_to_user.tags) && void 0 !== t
                  ? t
                  : [],
              feedbackText: l.search_link_to_user.text,
              highlightUrl: l.search_link.url,
            });
      }
      function _() {
        var e, t;
        let n = (0, w.nn)(w.LW.firstTurn),
          r = (0, g.useRouter)(),
          [s, a] = u()(r.query.ids) ? r.query.ids : [],
          i = S(r.query.type),
          { data: l, isLoading: c } = (0, o.a)({
            queryKey: ["searchTurnFeedback", s, a],
            queryFn: () => (0, y.a2)(s, a),
            enabled: !!s && !!a,
          });
        return c || !l
          ? (0, N.jsx)(M, {})
          : (0, N.jsx)(C, {
              type: i,
              threadId: l.search_turn.thread_id,
              threadUserId: a,
              searchQuery:
                null !== (e = null == n ? void 0 : n.user_query) && void 0 !== e
                  ? e
                  : "",
              highlightTurnIndex: l.search_turn.turn_index,
              rating: null == l ? void 0 : l.search_turn_to_user.rating,
              tags:
                null !==
                  (t = null == l ? void 0 : l.search_turn_to_user.tags) &&
                void 0 !== t
                  ? t
                  : [],
              feedbackText: null == l ? void 0 : l.search_turn_to_user.text,
            });
      }
      function C(e) {
        let {
            type: t,
            threadId: n,
            threadUserId: r,
            searchQuery: s,
            highlightTurnIndex: a,
            highlightUrl: i,
            rating: o,
            tags: c,
            feedbackText: u,
          } = e,
          { setThreadUserId: d } = (0, v.R)();
        (0, f.useEffect)(() => {
          d(r);
        }, [d, r]);
        let { refetch: m, isLoading: p } = (0, O.v)({
          threadId: n,
          threadUserId: r,
        });
        (0, f.useEffect)(() => {
          m();
        }, [m, n, r]);
        let g = "thumbsUp" === o ? l.go : l.W2,
          x = (0, j.W6)(j.bM.isDebugModalOpen);
        return (0, N.jsxs)("div", {
          className: "flex h-screen w-screen flex-col p-5",
          children: [
            p && (0, N.jsx)(M, {}),
            (0, N.jsxs)("div", {
              className: "flex gap-4",
              children: [
                (0, N.jsx)(D, {
                  className: "flex flex-col gap-2",
                  children: (0, N.jsxs)("div", {
                    className: "flex items-center gap-2 font-medium",
                    children: [
                      "link" === t
                        ? "\uD83D\uDD17 Link Feedback"
                        : "\uD83D\uDD0D Message Feedback",
                      ":",
                      (0, N.jsx)(g, { className: "h-5 w-5" }),
                    ],
                  }),
                }),
                (0, N.jsxs)(D, {
                  children: [
                    (0, N.jsx)("span", {
                      className: "font-medium",
                      children: "Query:",
                    }),
                    " ",
                    s,
                  ],
                }),
                (0, N.jsxs)(D, {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, N.jsxs)("div", {
                      children: [
                        (0, N.jsx)("span", {
                          className: "font-medium",
                          children: "Feedback:",
                        }),
                        " ",
                        u,
                      ],
                    }),
                    (0, N.jsx)("div", {
                      className: "flex gap-1",
                      children: c.map((e) => (0, N.jsx)(R, { children: e }, e)),
                    }),
                  ],
                }),
              ],
            }),
            (0, N.jsx)("div", {
              className: "mt-4 h-full w-full flex-grow overflow-auto",
              children: (0, N.jsx)(A.e, {
                readyState: 1,
                hasSubmittedInitialQuery: !0,
                searchQuery: s,
                followupQuery: "",
                onUpdateSearchQuery: h(),
                onUpdateFollowupQuery: h(),
                onSubmitFollowup: h(),
                onSubmitSearch: h(),
                settings: b.Z,
                onUpdateSetting: h(),
                onReset: h(),
                onRetryQuery: h(),
                highlightTurnIndex: a,
                highlightUrl: i,
              }),
            }),
            x &&
              (0, N.jsx)(v.q, {
                isOpen: !0,
                onDebugClose: () => j.vm.toggleDebugModalOpen(),
              }),
          ],
        });
      }
      let D = x.Z.div(
        r ||
          (r = (0, a.Z)([
            "rounded-md border border-token-border-medium p-3 flex-1",
          ]))
      );
      function M() {
        return (0, N.jsx)("div", {
          className: "mt-3 flex justify-center",
          children: (0, N.jsx)(i.Z, {}),
        });
      }
      let R = x.Z.div(
        s ||
          (s = (0, a.Z)([
            "rounded-md border bg-token-main-surface-tertiary px-1 text-xs text-token-text-primary",
          ]))
      );
    },
    10987: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return d;
        },
      });
      var r = n(18450),
        s = n(67739),
        a = n(77799),
        i = n(19841),
        l = n(70079),
        o = n(35250);
      let c = [
        "value",
        "expandDirection",
        "submitButtonIcon",
        "className",
        "leftIcon",
        "onSubmit",
        "shouldFocusOnKeyEvent",
        "disabled",
        "onKeyDown",
      ];
      function u(e, t) {
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
      function d(e) {
        let {
            value: t,
            expandDirection: n,
            submitButtonIcon: d,
            className: m,
            leftIcon: p,
            onSubmit: h,
            shouldFocusOnKeyEvent: g,
            disabled: f,
            onKeyDown: x,
          } = e,
          A = (0, s.Z)(e, c),
          v = (0, l.useRef)(null),
          b = (0, l.useCallback)(
            (e) => {
              null == x || x(e),
                "Enter" === e.key && h && (e.preventDefault(), h(t));
            },
            [x, h, t]
          );
        (0, l.useEffect)(() => {
          if (null != g)
            return (0, a.eR)(document, {
              keydown: (e) => {
                if (null != g && g(e)) {
                  var t, n;
                  e.preventDefault(),
                    null === (t = v.current) || void 0 === t || t.focus(),
                    null === (n = v.current) || void 0 === n || n.select();
                }
              },
            });
        }, [g]);
        let { 0: y, 1: j } = (0, l.useState)(!1),
          { 0: w, 1: O } = (0, l.useState)(0),
          { 0: k, 1: N } = (0, l.useState)(0),
          S = (0, l.useCallback)(() => {
            if (!v.current) return;
            let e = v.current.style.height,
              t = v.current.value,
              n = v.current.selectionStart,
              r = v.current.selectionEnd;
            (v.current.style.height = "0px"),
              (v.current.value = ""),
              N(v.current.scrollHeight),
              (v.current.value = t),
              (v.current.selectionStart = n),
              (v.current.selectionEnd = r),
              O(v.current.scrollHeight),
              (v.current.style.height = e);
          }, []);
        (0, l.useEffect)(() => (0, a.eR)(window, { resize: S }), [S]),
          (0, l.useEffect)(() => {
            S();
          }, [t, S]);
        let E = t.trim().length > 0;
        return (0, o.jsxs)("div", {
          className: (0, i.default)(
            "relative flex h-fit min-h-snc-3 w-full gap-3 overflow-hidden rounded-3xl px-3",
            "up" === n ? "items-end" : "items-start",
            m
          ),
          onClick: () => {
            var e;
            null === (e = v.current) || void 0 === e || e.focus(), j(!0);
          },
          children: [
            (0, o.jsx)("div", {
              className: (0, i.default)(
                "flex-grow overflow-x-hidden",
                "py-[0.66rem]"
              ),
              children: (0, o.jsx)(
                "textarea",
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? u(Object(n), !0).forEach(function (t) {
                          (0, r.Z)(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : u(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                  }
                  return e;
                })(
                  {
                    ref: v,
                    type: "text",
                    name: "query",
                    value: t,
                    className: (0, i.default)(
                      "transition-height ellipsis m-0 w-full min-w-32 flex-shrink-0 flex-grow resize-none overflow-hidden overflow-y-auto border-0 bg-transparent p-0 placeholder-gray-500 outline-none focus:ring-0",
                      (!y || w < 480) && "hide-scrollbar",
                      "up" === n ? "-mb-1" : "-mb-2 2xl:mb-[-0.4375rem]",
                      p ? "pl-11" : "pl-2"
                    ),
                    onKeyDown: b,
                    onFocus: () => {
                      j(!0);
                    },
                    onBlur: () => {
                      v.current && (v.current.scrollTop = 0), j(!1);
                    },
                    autoComplete: "off",
                    spellCheck: !1,
                    disabled: f,
                    style: {
                      height: y
                        ? "clamp("
                            .concat(k, "px, ")
                            .concat(w, "px, ")
                            .concat(480, "px)")
                        : "".concat(k, "px"),
                    },
                  },
                  A
                )
              ),
            }),
            (0, o.jsx)("div", {
              className: "flex h-snc-3 flex-shrink-0 items-center",
              children:
                E || null != h
                  ? (0, o.jsx)("div", {
                      className: "flex items-center",
                      children: (0, o.jsx)("button", {
                        disabled: f,
                        onClick: () => (null == h ? void 0 : h(t)),
                        className: (0, i.default)(
                          "flex h-7 w-7 items-center justify-center rounded-full",
                          E && !f
                            ? "bg-token-text-primary text-token-main-surface-primary hover:opacity-80"
                            : "bg-gray-300 text-token-main-surface-tertiary hover:bg-token-border-light hover:text-token-text-secondary disabled:hover:bg-token-main-surface-tertiary disabled:hover:text-token-text-tertiary dark:bg-gray-700"
                        ),
                        children: d,
                      }),
                    })
                  : null,
            }),
            p &&
              (0, o.jsx)("div", {
                className: (0, i.default)(
                  "absolute left-5 flex h-snc-3 items-center justify-center",
                  "up" === n ? "bottom-0" : "top-0"
                ),
                children: p,
              }),
          ],
        });
      }
    },
    83216: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return a;
        },
        Y: function () {
          return i;
        },
      });
      var r,
        s = n(38801);
      let a =
          (((r = {}).searchTurnFeedbackButtonShown =
            "Search Turn Feedback Button Shown"),
          (r.searchTurnFeedbackSubmitted = "Search Turn Feedback Submitted"),
          (r.searchLinkFeedbackSubmitted = "Search Link Feedback Submitted"),
          (r.searchLinkShown = "Search Link Shown"),
          (r.searchLinkClicked = "Search Link Clicked"),
          (r.searchQuerySubmitted = "Search Query Submitted"),
          (r.searchFollowupSubmitted = "Search Followup Submitted"),
          (r.searchCitationHovered = "Search Citation Hovered"),
          (r.searchCitationClicked = "Search Citation Clicked"),
          r),
        i = {
          logEvent(e, t) {
            s.A.logEvent(e, t);
          },
        };
    },
    49593: function (e, t, n) {
      "use strict";
      n.d(t, {
        LC: function () {
          return A;
        },
        NK: function () {
          return x;
        },
        Nv: function () {
          return p;
        },
        _l: function () {
          return v;
        },
        a2: function () {
          return g;
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
          return f;
        },
      });
      var r = n(18450),
        s = n(4466),
        a = n(5224),
        i = n(20724);
      function l(e, t) {
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
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let c = async (e) => {
        let { queryKey: t } = e,
          [n, r] = t;
        if (r.length < 2) return [];
        let i = new URLSearchParams({ query_fragment: r });
        return s.c
          .get("".concat(a.rq, "/suggestions?").concat(i.toString()))
          .then((e) => e.suggestions)
          .catch(() => []);
      };
      async function u() {
        return (await s.c.post("".concat(a.rq, "/threads"), {})).thread.id;
      }
      async function d(e) {
        let {
            threadId: t,
            query: n,
            agentSettingsOverrides: r,
            metadata: i,
          } = e,
          l = m(r);
        return s.c.post(
          "".concat(a.rq, "/threads/").concat(t, "/turns?blocking=false"),
          o(
            o({}, l),
            {},
            { turn: o(o({}, l.turn), {}, { user_query: n }), user_metadata: i }
          )
        );
      }
      function m(e) {
        return {
          turn: {
            search_results: {
              settings__: {
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
              case i.tQ.GPT_3_5:
                return "sahara";
              case i.tQ.GPT_4:
                return "gpt4";
            }
          })(e.model_family || i.tQ.GPT_3_5),
          eval_preset: e.eval_preset,
        };
      }
      async function p(e) {
        let { threadId: t, threadUserId: n, routePrefix: r } = e,
          i = a.rq;
        r && (i += r);
        let l = new URL("".concat(i, "/threads/").concat(t, "/with_turns"));
        return (
          n && l.searchParams.append("thread_user_id", n),
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
      async function g(e, t) {
        return s.c.get(
          "".concat(a.rq, "/feedback/turns/").concat(e, "/").concat(t)
        );
      }
      async function f(e, t) {
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
              rewritten_snippet: e.rewrittenSnippet,
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
      function A(e) {
        s.c.post("".concat(a.rq, "/pre_search"), {
          query_fragment: e.query,
          metadata: e.metadata,
          type: "text",
        });
      }
      async function* v(e, t) {
        for await (let n of s.c.streamedJsonPost("".concat(a.rq, "/snippets"), {
          urls: e,
          prompt: t,
        }))
          yield n;
      }
    },
    68399: function (e, t, n) {
      "use strict";
      n.d(t, {
        W6: function () {
          return l;
        },
        bM: function () {
          return o;
        },
        vm: function () {
          return c;
        },
      });
      var r = n(18450),
        s = n(78103);
      function a(e, t) {
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
      let i = {
          isSettingsModalOpen: !1,
          isDebugModalOpen: !1,
          focusedImageCitation: void 0,
        },
        l = (0, s.ZP)()(() =>
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? a(Object(n), !0).forEach(function (t) {
                    (0, r.Z)(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : a(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
            }
            return e;
          })({}, i)
        ),
        o = {
          isSettingsModalOpen: (e) => e.isSettingsModalOpen,
          isDebugModalOpen: (e) => e.isDebugModalOpen,
          getFocusedImageCitation: (e) => e.focusedImageCitation,
        },
        c = {
          toggleSettingsModalOpen() {
            l.setState((e) => ({
              isSettingsModalOpen: !e.isSettingsModalOpen,
            }));
          },
          toggleDebugModalOpen() {
            l.setState((e) => ({ isDebugModalOpen: !e.isDebugModalOpen }));
          },
          setFocusedImageCitation(e) {
            l.setState({ focusedImageCitation: e });
          },
        };
    },
    19216: function (e, t, n) {
      "use strict";
      n.d(t, {
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
      var r = n(18450),
        s = n(51362),
        a = n(66315),
        i = n(78103);
      function l(e, t) {
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
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let c = { thread: null },
        u = (0, i.ZP)((0, s.n)(() => o({}, c))),
        d = {
          threadId: (e) => {
            var t, n;
            return null !==
              (t = null === (n = e.thread) || void 0 === n ? void 0 : n.id) &&
              void 0 !== t
              ? t
              : null;
          },
          turns: (e) => {
            var t, n;
            return null !==
              (t =
                null === (n = e.thread) || void 0 === n ? void 0 : n.turns) &&
              void 0 !== t
              ? t
              : [];
          },
          firstTurn: (e) => (null != e.thread ? e.thread.turns[0] : void 0),
          lastTurn: (e) =>
            null != e.thread
              ? e.thread.turns[e.thread.turns.length - 1]
              : void 0,
          numTurns: (e) => {
            var t, n;
            return null !==
              (t =
                null === (n = e.thread) || void 0 === n
                  ? void 0
                  : n.turns.length) && void 0 !== t
              ? t
              : 0;
          },
        },
        m = {
          newThread(e) {
            u.setState((t) => {
              t.thread = { id: e, turns: [] };
            });
          },
          appendTurn(e, t) {
            u.setState((n) => {
              let r = n.thread;
              if (!r) {
                a.U.addError("got appendTurn with no current thread");
                return;
              }
              if (r.id !== e) {
                a.U.addError("got appendTurn for wrong thread", {
                  threadId: e,
                  newThreadId: r.id,
                });
                return;
              }
              r.turns.push(t);
            });
          },
          updateTurn(e, t) {
            u.setState((n) => {
              let r = n.thread;
              if (!r) {
                a.U.addError("got updateTurn with no current thread");
                return;
              }
              let s = r.turns[e];
              if (!s) {
                a.U.addError("turn not found", {
                  turnIndex: e,
                  turns: r.turns,
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
            u.setState((n) => {
              n.thread = { id: e, turns: t };
            });
          },
        };
    },
    20724: function (e, t, n) {
      "use strict";
      var r, s, a;
      n.d(t, {
        K1: function () {
          return o;
        },
        lv: function () {
          return l;
        },
        mX: function () {
          return c;
        },
        tQ: function () {
          return i;
        },
      });
      let i = (((r = {}).GPT_3_5 = "gpt-3.5"), (r.GPT_4 = "gpt-4"), r),
        l =
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
    72150: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(70079);
      function s(e, t, n) {
        let { 0: s, 1: a } = (0, r.useState)(() => {
          try {
            let t = JSON.parse(window.localStorage.getItem(e) || "");
            if (!n(t)) throw Error("Invalid data");
            return t;
          } catch (e) {
            return t;
          }
        });
        return (
          (0, r.useEffect)(() => {
            window.localStorage.setItem(e, JSON.stringify(s));
          }, [e, s]),
          [s, a]
        );
      }
    },
    20963: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return l;
        },
        v: function () {
          return o;
        },
      });
      var r = n(61236),
        s = n(70079),
        a = n(49593),
        i = n(19216);
      function l(e) {
        let { threadId: t, threadUserId: n, refetchOnMount: s } = e;
        return (0, r.a)({
          queryKey: ["thread", t, n],
          queryFn: async () => {
            if (!t) return { thread: null, turns: null };
            let e = await (0, a.Nv)({ threadId: t, threadUserId: n }),
              r = e.turns;
            return { thread: e, turns: r };
          },
          enabled: !!t,
          refetchOnMount: s,
        });
      }
      function o(e) {
        let { threadId: t, threadUserId: n } = e,
          r = l({ threadId: t, threadUserId: n }),
          a = r.data;
        return (
          (0, s.useEffect)(() => {
            if (t) {
              var e;
              i.P3.setThread(
                t,
                null !== (e = null == a ? void 0 : a.turns) && void 0 !== e
                  ? e
                  : []
              );
            }
          }, [t, a]),
          { refetch: r.refetch, isLoading: r.isLoading, isError: r.isError }
        );
      }
    },
    34796: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return a;
        },
      });
      var r = n(20735),
        s = n(72150);
      function a() {
        return (0, s.Z)("SONIC_SETTINGS_20240411", r.Z, r.Wt);
      }
    },
    45456: function (e, t, n) {
      "use strict";
      function r() {
        var e;
        null === (e = document.querySelector("html")) ||
          void 0 === e ||
          e.classList.add("snc");
      }
      n.d(t, {
        e: function () {
          return r;
        },
      });
    },
    36270: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return l;
        },
      });
      var r = n(61236),
        s = n(70079),
        a = n(35601),
        i = n(49593);
      function l(e) {
        let { query: t, enabled: n = !0 } = e,
          l = (0, s.useRef)([]),
          o = (0, s.useRef)(0),
          c = (0, s.useRef)(null),
          u = (0, s.useRef)(null),
          { settings: d, userMetadata: m } = (0, a.A)(),
          p = !d.suggestions || !n || !t || c.current === t,
          { data: h = [], isFetched: g } = (0, r.a)({
            queryKey: ["typeahead", t],
            queryFn: i.mO,
            enabled: !p,
            networkMode: "offlineFirst",
          });
        return (
          !p &&
            g &&
            (l.current[0] && l.current[0] === h[0]
              ? o.current++
              : (o.current = 1),
            o.current >= 3 &&
              u.current !== h[0] &&
              ((u.current = h[0]), (0, i.LC)({ query: h[0], metadata: m })),
            (c.current = t),
            (l.current = h)),
          n ? h : l.current
        );
      }
    },
    90240: function (e, t, n) {
      "use strict";
      n.d(t, {
        PX: function () {
          return s;
        },
        XB: function () {
          return a;
        },
      });
      var r = n(43041);
      let s = { latitude: null, longitude: null, locationAccuracy: null };
      function a(e) {
        if (!e) {
          i();
          return;
        }
        navigator.geolocation.getCurrentPosition(
          (e) => {
            r.bX.setCookie(
              r.cn.LastLocation,
              JSON.stringify({
                latitude: e.coords.latitude,
                longitude: e.coords.longitude,
                locationAccuracy: e.coords.accuracy,
              }),
              { maxAge: 2592e3 }
            );
          },
          () => {
            i();
          }
        );
      }
      function i() {
        r.bX.setCookie(r.cn.LastLocation, JSON.stringify(s), {
          maxAge: 2592e3,
        });
      }
    },
    78375: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return a;
        },
        K: function () {
          return s;
        },
      });
      var r = n(72541);
      function s(e) {
        var t, n, r, s, a, i, l;
        if (null !== (t = e.finance_widget) && void 0 !== t && t.price)
          return {
            type: "finance",
            status: e.finance_widget.status,
            data: e.finance_widget,
          };
        if (
          null !== (n = e.weather_widget) &&
          void 0 !== n &&
          n.forecast_response
        )
          return {
            type: "weather",
            status: e.weather_widget.status,
            data: e.weather_widget.forecast_response,
          };
        if (null !== (r = e.calculator_widget) && void 0 !== r && r.expression)
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
        if (null !== (i = e.timezone_widget) && void 0 !== i && i.time_at)
          return {
            type: "time-difference",
            status: e.timezone_widget.status,
            data: e.timezone_widget.time_at,
          };
        if (null !== (l = e.news_widget) && void 0 !== l && l.articles)
          return {
            type: "news",
            status: e.news_widget.status,
            data: e.news_widget,
          };
        return null;
      }
      function a(e, t) {
        if (!e) return null;
        let n = [];
        return (e.name && n.push(e.name),
        e.state && e.name !== e.state && n.push(e.state),
        !e.name && e.country && e.country === e.name && n.push(e.country),
        n.length > 0)
          ? n.join(", ")
          : t && e.timezone && "string" == typeof e.timezone
            ? (0, r.Z)(t, "zzz", { timeZone: e.timezone })
            : null;
      }
    },
    63667: function (e, t, n) {
      "use strict";
      let r;
      n.r(t),
        n.d(t, {
          DO_NOT_IMPORT_VoiceModeButton: function () {
            return X;
          },
          DO_NOT_IMPORT_VoiceModeLayout: function () {
            return ey;
          },
        });
      var s,
        a,
        i,
        l,
        o = n(85452),
        c = n(55057),
        u = n(89899),
        d = n(95407),
        m = n(52392),
        p = n(63605),
        h = n(34594),
        g = n(19841),
        f = n(70079),
        x = n(9063);
      let A =
          (((s = {}).StateUpdate = "state_update"),
          (s.ActionRequest = "action_request"),
          (s.ConversationUpdate = "conversation_update"),
          (s.RelayMessage = "relay_message"),
          (s.Unknown = "unknown"),
          s),
        v =
          (((a = {}).StartListeningIntently = "start_listening"),
          (a.StopListeningIntently = "stop_listening"),
          (a.HaltAllActivity = "stop_speaking"),
          (a.ResumeListening = "resume_listening"),
          (a.RelayMessage = "relay_message"),
          a),
        b =
          (((i = {}).Idle = "idle"),
          (i.Connected = "connected"),
          (i.Halted = "halted"),
          (i.Listening = "listening"),
          (i.ListeningIntently = "listening_intently"),
          (i.Thinking = "thinking"),
          (i.Speaking = "speaking"),
          i);
      var y = n(18450),
        j = n(61107),
        w = n(4466);
      class O {
        static async getVoiceToken(e) {
          return w.c.post(
            "".concat("https://chat.openai.com/voice", "/get_token"),
            e
          );
        }
      }
      var k = n(78103),
        N = n(25229),
        S = n(51362);
      class E {
        log(e) {}
        debug() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          this.log("debug", ...t);
        }
        error() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          this.log("error", ...t);
        }
      }
      let P = new E();
      function _(e, t) {
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
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? _(Object(n), !0).forEach(function (t) {
                (0, y.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : _(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
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
        M = (0, k.ZP)((0, N.XR)((0, S.n)(() => D)));
      function R() {
        return M(
          (e) =>
            !!(
              e.credentials.token &&
              e.credentials.url &&
              e.credentials.e2eeKey &&
              e.server.remoteState
            )
        );
      }
      function L(e) {
        let { voiceName: t, voiceMainLanguage: n } = (0, j.SK)(),
          r = M((e) => e.isStarting),
          s = R(),
          a = (0, f.useCallback)(() => {
            s && T(null);
          }, [s]);
        return {
          startVoiceMode: (0, f.useCallback)(
            async (r) => {
              if (!s) {
                M.setState((e) => {
                  e.isStarting = !0;
                });
                try {
                  let s = await O.getVoiceToken(
                    C({ voice: t, language_code: n }, r)
                  );
                  s &&
                    s.token &&
                    s.url &&
                    s.e2ee_key &&
                    T({
                      conversationId: e,
                      credentials: C(C({}, s), {}, { e2eeKey: s.e2ee_key }),
                    });
                } catch (e) {
                  throw (
                    (P.debug("failed to get voice token", e),
                    M.setState((e) => {
                      e.isStarting = !1;
                    }),
                    e)
                  );
                }
              }
            },
            [s, t, n, e]
          ),
          stopVoiceMode: a,
          isVoiceModeStarting: r,
          isVoiceModeActive: s,
        };
      }
      function T(e) {
        if (e) {
          let { credentials: t, conversationId: n } = e;
          P.debug("setting credentials", e),
            M.setState((e) => {
              (e.conversationId = n), (e.credentials = t);
            });
          return;
        }
        P.debug("clearing credentials"), z();
      }
      function z() {
        M.setState(D);
      }
      var U = n(67431),
        I = n(98431);
      function Z(e, t) {
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
      function F() {
        let e = (0, I.fZ)(),
          t = (0, f.useRef)({
            debug: function () {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              return P.debug("[".concat(e.name, "]"), ...n);
            },
            encoder: new TextEncoder(),
            decoder: new TextDecoder(),
          }).current;
        return (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Z(Object(n), !0).forEach(function (t) {
                  (0, y.Z)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : Z(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
          }
          return e;
        })({ room: e }, t);
      }
      function B(e, t) {
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
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                (0, y.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : B(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      var q = n(13106);
      function H(e, t) {
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
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                (0, y.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : H(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let W = (0, f.memo)(function () {
        return (
          !(function () {
            let { room: e, debug: t, decoder: n } = F(),
              r = (function () {
                let { debug: e } = F(),
                  t = M((e) => e.conversationId);
                return (0, f.useCallback)(async () => {
                  if (t) {
                    e("refetch conversationId ".concat(t));
                    try {
                      await (0, p.Um)(t, !0);
                    } catch (n) {
                      let t = "failed to update conversation";
                      e(t, n), d.m.danger(t);
                    }
                  }
                }, [t, e]);
              })();
            (0, f.useEffect)(() => {
              let s = async (n) => {
                  let { new_state: r } = n,
                    s = [b.Listening, b.ListeningIntently];
                  t("new state", r),
                    s.includes(r)
                      ? (t("unmuting microphone"),
                        await e.localParticipant.setMicrophoneEnabled(!0))
                      : (t("muting microphone"),
                        await e.localParticipant.setMicrophoneEnabled(!1)),
                    M.setState((e) => {
                      e.server.remoteState = r;
                    });
                },
                a = async (a) => {
                  let i;
                  try {
                    (i = JSON.parse(n.decode(a))), t("data recevied", i);
                  } catch (e) {
                    t("error parsing data", e);
                    return;
                  }
                  switch (
                    (M.setState(
                      (e) => (
                        e.server.messages.push(
                          V(
                            V({}, i),
                            {},
                            { timestamp: new Date(), source: "remote" }
                          )
                        ),
                        e
                      )
                    ),
                    i.type)
                  ) {
                    case A.StateUpdate:
                      t("state update", i.payload);
                      let { new_state: l, delay_s: o } = i.payload;
                      l === b.Thinking &&
                        o &&
                        (t(
                          ""
                            .concat(e.name, " delay thinking state by ")
                            .concat(o, " seconds")
                        ),
                        s({ new_state: b.ListeningIntently, delay_s: o }),
                        await new Promise((e) => setTimeout(e, 1e3 * o))),
                        s(i.payload);
                      break;
                    case A.ConversationUpdate:
                      t("conversation update", i.payload), await r();
                  }
                },
                i = (e, n) => {
                  t("track published", e, n);
                },
                l = () => {
                  t("disconnected"), z();
                };
              return (
                e.on(U.TQ.DataReceived, a),
                e.on(U.TQ.TrackPublished, i),
                e.on(U.TQ.Disconnected, l),
                () => {
                  e.off(U.TQ.DataReceived, a),
                    e.off(U.TQ.TrackPublished, i),
                    e.off(U.TQ.Disconnected, l);
                }
              );
            }, [!1, e, r, t, n]);
          })(),
          (function () {
            let { room: e } = F();
            (0, f.useEffect)(() => {
              M.setState((t) => {
                t.dev.room = e;
              });
            }, [e]);
          })(),
          (function () {
            let { room: e } = F(),
              t = (0, I.z1)(e);
            (0, f.useEffect)(() => {
              M.setState((e) => {
                e.server.connectionState = t;
              });
            }, [t]);
          })(),
          (function () {
            let { room: e, debug: t, encoder: n } = F();
            (0, f.useEffect)(() => {
              let r = !!M.getState().server.actions;
              if (e && !r) {
                let r = async (r) => {
                  t("publishing action", r);
                  let s = { type: A.ActionRequest, payload: { action: r } };
                  await e.localParticipant.publishData(
                    n.encode(JSON.stringify(s)),
                    { reliable: !0 }
                  ),
                    M.setState((e) => {
                      e.server.messages.push(
                        Q(
                          Q({}, s),
                          {},
                          { timestamp: new Date(), source: "local" }
                        )
                      );
                    });
                };
                M.setState((e) => {
                  e.server.actions = {
                    [v.StartListeningIntently]: () =>
                      r(v.StartListeningIntently),
                    [v.StopListeningIntently]: () => r(v.StopListeningIntently),
                    [v.HaltAllActivity]: () => r(v.HaltAllActivity),
                    [v.ResumeListening]: () => r(v.ResumeListening),
                    [v.RelayMessage]: () => r(v.RelayMessage),
                  };
                });
              }
            }, [e, t, n]);
          })(),
          (function () {
            let e = R();
            (0, f.useEffect)(
              () => (
                q.tN.setState({ isVoiceActive: e }),
                () => {
                  q.tN.setState({ isVoiceActive: !1 });
                }
              ),
              [e]
            );
          })(),
          !(function () {
            let { room: e, debug: t } = F(),
              n = e.getActiveDevice("audioinput"),
              r = e.getActiveDevice("audiooutput");
            (0, f.useEffect)(() => {
              t("devices: input ".concat(n, ", output ").concat(r)),
                (async function () {
                  let s = async () => {
                      "default" !== n &&
                        (t("switching audio input to default"),
                        await e.switchActiveDevice("audioinput", "default"));
                    },
                    a = async () => {
                      "default" !== r &&
                        (t("switching audio output to default"),
                        await e.switchActiveDevice("audiooutput", "default"));
                    };
                  await Promise.all([s(), a()]);
                })();
            }, [n, r, t, e]),
              (0, f.useEffect)(() => {
                async function n() {
                  t("audio devices changed"),
                    Promise.all(
                      ["audioinput", "audiooutput"].map(async (n) => {
                        let r = await U.du.getLocalDevices(n),
                          s = e.getActiveDevice(n);
                        if (!r.find((e) => e.deviceId === s)) {
                          let s = r.find((e) => "default" === e.deviceId),
                            a = null;
                          s ? (a = s.deviceId) : r[0] && (a = r[0].deviceId),
                            t("switching ".concat(n, " to ").concat(a)),
                            a && (await e.switchActiveDevice(n, a));
                        }
                      })
                    );
                }
                if (navigator)
                  return (
                    navigator.mediaDevices.addEventListener("devicechange", n),
                    () => {
                      navigator.mediaDevices.removeEventListener(
                        "devicechange",
                        n
                      );
                    }
                  );
              }, [e, t]);
          })(),
          null
        );
      });
      var G = n(35250);
      function X(e) {
        var t, n;
        let {
            iconClassName: r = "icon-sm",
            className: s,
            conversationId: a,
          } = e,
          i =
            null === (t = (0, h.sB)(h.tz.VoiceMode)) || void 0 === t
              ? void 0
              : t.value,
          l = (0, p.XK)(a),
          o = (0, m.Bv)(a),
          c =
            null === (n = p.iN.getCurrentNode(a)) || void 0 === n
              ? void 0
              : n.id;
        return l && i && o
          ? (0, G.jsx)(K, {
              conversationId: l,
              className: s,
              iconClassName: r,
              modelId: o,
              parentMessageId: c,
            })
          : null;
      }
      let K = (0, f.memo)(function (e) {
        let {
            conversationId: t,
            className: n,
            iconClassName: r,
            modelId: s,
            parentMessageId: a,
          } = e,
          {
            isVoiceModeActive: i,
            isVoiceModeStarting: l,
            toggleVoiceMode: m,
          } = (function (e, t, n) {
            let r = (0, x.Z)(),
              {
                startVoiceMode: s,
                isVoiceModeStarting: a,
                isVoiceModeActive: i,
              } = L(e);
            return {
              isVoiceModeActive: i,
              isVoiceModeStarting: a,
              toggleVoiceMode: (0, f.useCallback)(async () => {
                try {
                  await s({
                    conversation_id: e,
                    parent_message_id: n,
                    model_slug: t,
                  });
                } catch (e) {
                  d.m.danger(
                    r.formatMessage({
                      id: "useVoiceModeButtonAction.error",
                      defaultMessage: "Failed to start voice mode",
                    })
                  );
                }
              }, [s, e, n, t, r]),
            };
          })(t, s, a);
        return i
          ? null
          : (0, G.jsx)(u.y4, {
              disabled: l,
              onClick: m,
              className: (0, g.default)("w-fit", n),
              children: l
                ? (0, G.jsx)(o.Z, { className: r })
                : (0, G.jsx)(c.VWR, { className: r }),
            });
      });
      var J = n(92386),
        Y = n(24343),
        $ = n(83737),
        ee = n(29287);
      function et() {
        return (0, G.jsxs)("div", {
          className: "flex flex-row items-center gap-2",
          children: [
            (0, G.jsx)(c.uAs, { className: "icon-sm" }),
            (0, G.jsx)(en, {}),
          ],
        });
      }
      function en() {
        let e;
        let t = M((e) => e.server.remoteState);
        if (!t) return null;
        switch (t) {
          case b.Listening:
          case b.ListeningIntently:
            e = "Listening";
            break;
          case b.Thinking:
            e = "Thinking";
            break;
          case b.Speaking:
            e = "Speaking";
            break;
          default:
            e = null;
        }
        return e ? (0, G.jsx)("div", { className: "mr-2", children: e }) : null;
      }
      function er(e) {
        let { conversationId: t } = e,
          n = (0, p.XK)(t);
        return n
          ? (0, G.jsxs)("div", {
              className: "flex flex-row items-center gap-3",
              children: [
                (0, G.jsx)(et, {}),
                (0, G.jsx)(ea, {}),
                (0, G.jsx)(es, { conversationId: n }),
              ],
            })
          : null;
      }
      function es(e) {
        let { conversationId: t } = e,
          { stopVoiceMode: n } = L(t);
        return (0, G.jsx)(ei, {
          color: "none",
          onClick: n,
          className:
            "overflow-hidden rounded-full border-none p-0 text-token-text-primary",
          children: (0, G.jsx)(c.niP, { className: "icon-2xl" }),
        });
      }
      function ea() {
        let { isActivityHalted: e, toggleVoiceActivity: t } = (function () {
            let e = M((e) => e.isActivityHalted),
              t = M((e) => e.server.actions);
            return {
              toggleVoiceActivity: (0, f.useCallback)(() => {
                M.getState().isActivityHalted
                  ? (null == t || t[v.ResumeListening](),
                    M.setState((e) => {
                      e.isActivityHalted = !1;
                    }))
                  : (null == t || t[v.HaltAllActivity](),
                    M.setState((e) => {
                      e.isActivityHalted = !0;
                    }));
              }, [t]),
              isActivityHalted: e,
            };
          })(),
          n = null;
        return (
          (n = e ? c.o1U : c.STQ),
          (0, G.jsx)(ei, {
            color: "none",
            className:
              "overflow-hidden rounded-full border-none p-0 text-token-text-primary",
            onClick: t,
            children: (0, G.jsx)(n, { className: "icon-2xl" }),
          })
        );
      }
      let ei = (0, $.E)(ee.z);
      var el = n(99503),
        eo = n(56115);
      function ec() {
        let e = M((e) => e.server.messages);
        return (0, G.jsx)($.E.div, {
          className:
            "hidden h-full max-w-[400px] overflow-hidden border-l border-l-token-sidebar-surface-secondary bg-token-main-surface-secondary pt-16 shadow-inner md:block",
          initial: { opacity: 0, x: 420, width: "0px" },
          animate: { opacity: 1, x: 0, width: "400px" },
          exit: { opacity: 0, x: 420, width: "0px" },
          transition: { type: "tween" },
          children: (0, G.jsx)(Y.M, {
            children: e.length
              ? (0, G.jsxs)($.E.div, {
                  className: "flex h-full w-full flex-col",
                  initial: { opacity: 0, x: -100 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: -100 },
                  children: [
                    (0, G.jsxs)("div", {
                      children: [
                        (0, G.jsx)("h3", {
                          className:
                            "p-4 py-2 text-lg font-semibold text-token-text-secondary",
                          children: "Room Stats",
                        }),
                        (0, G.jsx)(eu, {}),
                      ],
                    }),
                    (0, G.jsx)("h3", {
                      className:
                        "p-4 py-2 text-lg font-semibold text-token-text-secondary",
                      children: "Messages",
                    }),
                    (0, G.jsx)("div", {
                      className: "grow overflow-hidden",
                      children: (0, G.jsx)(J.I, {
                        children: (0, G.jsx)($.E.ul, {
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
                            (0, G.jsx)(ef, { index: t, message: e }, t)
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
        let e = M((e) => e.dev.room);
        if (!e) return null;
        let t = e.numParticipants,
          n = e.activeSpeakers;
        return (0, G.jsx)("div", {
          className: "px-4 pb-8",
          children: (0, G.jsxs)("div", {
            className: "flex flex-col flex-nowrap gap-2",
            children: [
              (0, G.jsx)(ed, {}),
              (0, G.jsx)(eh, { text: "Attendees" }),
              (0, G.jsx)(eg, { name: "Participants", text: t }),
              (0, G.jsx)(eg, { name: "Speakers", text: n.length }),
              (0, G.jsx)(em, {}),
            ],
          }),
        });
      }
      function ed() {
        let e = M((e) => e.server.connectionState),
          t = M((e) => e.dev.room),
          { 0: n, 1: r } = (0, f.useState)("Unknown"),
          s = null == t ? void 0 : t.localParticipant;
        return (
          (0, f.useEffect)(() => {
            if (s) {
              let e = (e) => {
                r(e);
              };
              return (
                s.on("connectionQualityChanged", e),
                () => {
                  s.off("connectionQualityChanged", e);
                }
              );
            }
          }, [s]),
          (0, G.jsxs)(G.Fragment, {
            children: [
              (0, G.jsx)(eh, { text: "Connection" }),
              (0, G.jsx)(eg, { name: "Quality", text: String(n) }),
              (0, G.jsx)(eg, { name: "State", text: String(e) }),
            ],
          })
        );
      }
      function em() {
        let e = M((e) => e.dev.room),
          { 0: t, 1: n } = (0, f.useState)(null),
          { 0: r, 1: s } = (0, f.useState)(null),
          a = null == e ? void 0 : e.getActiveDevice("audioinput"),
          i = null == e ? void 0 : e.getActiveDevice("audiooutput");
        return (
          (0, f.useEffect)(() => {
            (async function () {
              var e, t;
              let r = await U.du.getLocalDevices("audioinput"),
                l = await U.du.getLocalDevices("audiooutput"),
                o = r.find((e) => e.deviceId === a),
                c = l.find((e) => e.deviceId === i);
              n(
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
          }, [a, i]),
          (0, G.jsxs)(G.Fragment, {
            children: [
              (0, G.jsx)(eh, { text: "Devices" }),
              (0, G.jsx)(eg, {
                icon: c.ZO8,
                name: "Input",
                text: null != t ? t : "Unknown",
              }),
              (0, G.jsx)(eg, {
                icon: c.VWR,
                name: "Output",
                text: null != r ? r : "Unknown",
              }),
              (0, G.jsx)(eh, { text: "Monitors" }),
              (0, G.jsx)(eg, {
                name: "Mic level",
                icon: el.Z,
                text: "unknown",
                content: (0, G.jsx)(ep, {}),
              }),
            ],
          })
        );
      }
      function ep() {
        let e = M((e) => {
          var t;
          return null === (t = e.dev.room) || void 0 === t
            ? void 0
            : t.localParticipant.audioLevel;
        });
        return (0, G.jsx)("div", {
          className: "flex flex-row flex-nowrap items-center gap-1",
          children: (0, G.jsx)("div", {
            className: "flex flex-row flex-nowrap items-center gap-1",
            children: Array.from({ length: 10 }).map((t, n) =>
              (0, G.jsx)(
                "div",
                {
                  className: "h-2 w-2 rounded-full ".concat(
                    (null != e ? e : 0) > 0.1 * n
                      ? "bg-gray-500"
                      : "bg-token-main-surface-tertiary"
                  ),
                },
                n
              )
            ),
          }),
        });
      }
      function eh(e) {
        let { text: t } = e;
        return (0, G.jsx)("h4", {
          className: "text-md font-semibold",
          children: t,
        });
      }
      function eg(e) {
        var t;
        return (0, G.jsxs)("div", {
          className: "flex flex-row flex-nowrap items-center gap-2",
          children: [
            (0, G.jsx)("span", {
              className: "opacity-85",
              children: e.icon
                ? (0, G.jsx)(e.icon, { className: "h-[0.75rem] w-[0.75rem]" })
                : "".concat(e.name, ":"),
            }),
            null !== (t = e.content) && void 0 !== t
              ? t
              : (0, G.jsx)("span", {
                  className:
                    "line-clamp-1 rounded-lg bg-token-main-surface-tertiary p-0.5 px-1 font-mono text-xs",
                  children: e.text,
                }),
          ],
        });
      }
      function ef(e) {
        let { index: t, message: n } = e,
          { 0: r, 1: s } = (0, f.useState)(!1),
          a = null;
        switch (n.source) {
          case "remote":
            a = c.veu;
            break;
          case "local":
            a = c.Hf3;
        }
        return (0, G.jsx)($.E.div, {
          className: "w-full border-t border-token-main-surface-tertiary p-4",
          variants: ex,
          children: (0, G.jsxs)("div", {
            className:
              "flex w-full flex-col gap-2 rounded-lg bg-token-main-surface-secondary",
            children: [
              (0, G.jsxs)("div", {
                className:
                  "font-mono text-[0.65rem] font-semibold text-token-text-secondary",
                children: [
                  (0, G.jsxs)("div", {
                    className:
                      "flex w-full flex-row flex-nowrap items-center justify-between",
                    children: [
                      (0, G.jsxs)("div", {
                        className:
                          "flex flex-row flex-nowrap items-center gap-1",
                        children: [
                          (0, G.jsx)(a, {
                            className: "h-3 w-3 text-token-text-secondary",
                          }),
                          (0, G.jsx)("span", {
                            children: " | "
                              .concat(t + 1, " | ")
                              .concat((0, eo.Z)(n.timestamp, "H:m:s:SS")),
                          }),
                        ],
                      }),
                      (0, G.jsx)("div", {
                        className:
                          "flex flex-row flex-nowrap items-center gap-2",
                        children: (0, G.jsx)(ee.z, {
                          className: "rounded-full p-0.5",
                          color: "none",
                          size: "xsmall",
                          onClick: () => s((e) => !e),
                          children: (0, G.jsx)(c.eOB, {
                            className: "transform transition-transform ".concat(
                              r ? "rotate-180" : ""
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, G.jsx)("div", {
                    className: "mt-1 text-xs font-bold",
                    children: n.type,
                  }),
                ],
              }),
              (0, G.jsx)(Y.M, {
                children: r
                  ? (0, G.jsx)($.E.pre, {
                      initial: { opacity: 0, transform: "blur(4px)" },
                      animate: { opacity: 1, transform: "blur(0px)" },
                      exit: { opacity: 0, transform: "blur(4px)" },
                      className:
                        "overflow-x-auto rounded-md bg-token-main-surface-tertiary p-2 text-xs text-token-text-secondary",
                      children: JSON.stringify(n.payload, null, 2),
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
      function eA(e, t) {
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
      function ev(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eA(Object(n), !0).forEach(function (t) {
                (0, y.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eA(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      (l = Worker),
        (r = class extends l {
          constructor(e, t) {
            let n = String(e);
            super(
              n.includes("://") && !n.startsWith(location.origin)
                ? URL.createObjectURL(
                    new Blob(
                      [
                        "importScripts=((i)=>(...a)=>i(...a.map((u)=>''+new URL(u,\""
                          .concat(n, '"))))(importScripts);importScripts("')
                          .concat(n, '")'),
                      ],
                      { type: "text/javascript" }
                    )
                  )
                : e,
              t
            );
          }
        });
      let eb = (0, f.memo)(function () {
        let e = (0, f.useRef)({ keyProvider: new U.P6() }).current,
          { 0: t, 1: s } = (0, f.useState)(!1),
          { token: a, url: i, e2eeKey: l } = M((e) => e.credentials),
          o = (function () {
            let e = (0, f.useCallback)(() => {
              P.debug("connected to room");
              let e = M.subscribe(
                (e) => !!e.server.remoteState,
                (t) => {
                  t &&
                    (M.setState((e) => {
                      e.isStarting = !1;
                    }),
                    e());
                }
              );
            }, []);
            return {
              onConnected: e,
              onDisconnected: (0, f.useCallback)(() => {
                P.debug("disconnected from room"), z();
              }, []),
              onError: (0, f.useCallback)((e) => {
                d.m.danger("Something went wrong"),
                  P.error("an error occured within the room", e),
                  z();
              }, []),
              onEncryptionError: (0, f.useCallback)((e) => {
                d.m.danger("Something went wrong"),
                  P.error("an encryption error occured within the room", e),
                  z();
              }, []),
            };
          })();
        return ((0, f.useEffect)(() => {
          let n = a && i && l;
          !t && n
            ? e.keyProvider.setKey(l).then(() => {
                s(!0);
              })
            : t && !n && s(!1);
        }, [a, i, l, t, e]),
        t && a && i)
          ? (0, G.jsxs)(
              I.IC,
              ev(
                ev({}, o),
                {},
                {
                  connect: !0,
                  token: a,
                  serverUrl: i,
                  audio: {
                    deviceId: { ideal: "default", exact: "default" },
                    noiseSuppression: !0,
                    echoCancellation: !0,
                  },
                  options: {
                    e2ee: {
                      keyProvider: e.keyProvider,
                      worker: new r(n.tu(new URL(n.p + n.u(1087), n.b))),
                    },
                  },
                  children: [(0, G.jsx)(W, {}), (0, G.jsx)(I.Z5, {})],
                }
              )
            )
          : null;
      });
      function ey(e) {
        let { conversationId: t, renderTurns: n } = e,
          { 0: r, 1: s } = (0, f.useState)(!1),
          a = R();
        return (0, G.jsxs)(G.Fragment, {
          children: [
            (0, G.jsx)(Y.M, {
              children: a
                ? (0, G.jsx)($.E.div, {
                    className:
                      "fixed left-0 top-0 z-50 flex h-full w-full flex-col bg-token-main-surface-primary",
                    initial: "hidden",
                    animate: "visible",
                    exit: "hidden",
                    variants: ej,
                    children: (0, G.jsxs)($.E.div, {
                      className: "relative h-full w-full",
                      variants: ej,
                      children: [
                        (0, G.jsxs)($.E.div, {
                          variants: ej,
                          className: "flex h-full w-full flex-nowrap gap-2",
                          children: [
                            (0, G.jsx)("div", {
                              className: "flex h-full w-full flex-col",
                              children: (0, G.jsx)(J.I, {
                                children: (0, G.jsx)("div", {
                                  className: "pointer-events-none pb-24 pt-9",
                                  children: n(),
                                }),
                              }),
                            }),
                            (0, G.jsx)(Y.M, {
                              children: r ? (0, G.jsx)(ec, {}) : null,
                            }),
                          ],
                        }),
                        (0, G.jsx)($.E.div, {
                          className:
                            "absolute left-0 top-0 flex w-full justify-end p-4",
                          variants: ej,
                          children: (0, G.jsx)(er, { conversationId: t }),
                        }),
                        (0, G.jsx)($.E.div, {
                          className:
                            "absolute bottom-0 right-0 flex w-full justify-end p-4",
                          variants: ej,
                          children: (0, G.jsx)(u.y4, {
                            onClick: () => s((e) => !e),
                            children: (0, G.jsx)(c.FxN, {}),
                          }),
                        }),
                      ],
                    }),
                  })
                : null,
            }),
            (0, G.jsx)(eb, {}),
          ],
        });
      }
      let ej = {
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
//# sourceMappingURL=sso.a4b6db87afdfb6d2.js.map
