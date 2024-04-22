"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8697],
  {
    25991: function (e, t, n) {
      n.d(t, {
        yt: function () {
          return em;
        },
        lX: function () {
          return ex;
        },
        hj: function () {
          return eg;
        },
        B1: function () {
          return eh;
        },
        r: function () {
          return ey;
        },
        cK: function () {
          return ew;
        },
        rv: function () {
          return ev;
        },
        sY: function () {
          return eT;
        },
      });
      var o,
        r,
        i,
        l,
        s = n(39827),
        a = n(73017),
        c = n(25660),
        d = n(16931),
        u = n(88128),
        p = n(68832),
        m = n(37493),
        f = n(99715),
        g = n(70079),
        h = n(76483),
        b = n(1454),
        v = n(9063),
        x = n(47483),
        j = n(42005),
        y = n(5278),
        P = n(28144),
        w = n(41098),
        O = n(21643),
        T = n(82429),
        k = n(87106),
        N = n(43383),
        C = n(28373),
        G = n(35250);
      function I(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : I(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function E() {
        return (0, G.jsx)("div", {
          className:
            "relative flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-token-border-medium",
          children: (0, G.jsx)(j.Z, { className: "h-1/4 w-1/4" }),
        });
      }
      function L(e) {
        let {
            gizmoEditorData: t,
            onFileChange: n,
            generateProfilePic: o,
            isGeneratingProfilePic: r,
            setIsGeneratingProfilePic: i,
          } = e,
          l = (0, v.Z)(),
          { 0: s, 1: a } = (0, g.useState)(void 0),
          d = (0, g.useRef)(n);
        async function u(e) {
          if (e.length > 0) {
            i(!1);
            let t = await (0, k.WI)(e[0], 512),
              n = (0, T.W7)(t);
            a({
              tempId: n,
              file: t,
              status: O.X.Uploading,
              progress: 1,
              fileId: null,
              cdnUrl: null,
            }),
              d.current("uploading"),
              (0, T.lU)(n, t, l, c.Ei.ProfilePicture, {
                onFileCreated(e, t, n) {
                  a((o) =>
                    "initial" !== o &&
                    (null == o ? void 0 : o.tempId) === e &&
                    o.status === O.X.Uploading
                      ? z(z({}, o), {}, { progress: 10, fileId: t, cdnUrl: n })
                      : o
                  );
                },
                onFileUploadProgress(e, t) {
                  a((n) =>
                    "initial" !== n &&
                    (null == n ? void 0 : n.tempId) === e &&
                    n.status === O.X.Uploading
                      ? z(z({}, n), {}, { progress: t })
                      : n
                  );
                },
                onFileUploaded(e, t, n) {
                  a((t) =>
                    "initial" !== t && (null == t ? void 0 : t.tempId) === e
                      ? (d.current(t),
                        z(
                          z({}, t),
                          {},
                          {
                            status: O.X.Ready,
                            progress: 100,
                            fileSpec: z(
                              {
                                name: t.file.name,
                                id: t.fileId,
                                size: t.file.size,
                              },
                              null != n ? n : {}
                            ),
                          }
                        ))
                      : t
                  );
                },
                onError(e) {
                  a((t) => {
                    if (
                      "initial" !== t &&
                      (null == t ? void 0 : t.tempId) === e
                    ) {
                      d.current(void 0);
                      return;
                    }
                    return t;
                  });
                },
              });
          }
        }
        (0, g.useEffect)(() => {
          d.current = n;
        });
        let { open: p, getInputProps: m } = (0, h.uI)(
          z(
            {
              disabled: !1,
              noClick: !0,
              onDropAccepted: u,
              onDropRejected: (e) => (0, y.UJ)(e, l, O.A.ProfilePicture),
              multiple: !0,
              maxSize: w.xC,
            },
            (0, k.Z8)(k.KL)
          )
        );
        return (0, G.jsxs)("div", {
          className: "flex w-full items-center justify-center gap-4",
          children: [
            (0, G.jsxs)(f.fC, {
              children: [
                (0, G.jsx)(f.xz, {
                  className: "h-20 w-20",
                  children: r
                    ? (0, G.jsx)(E, {})
                    : null != s && "initial" != s && s.status != O.X.Ready
                      ? (0, G.jsxs)("div", {
                          className:
                            "relative h-full w-full overflow-hidden rounded-full",
                          children: [
                            (0, G.jsx)(P.l, { file: s.file }),
                            s.status === O.X.Uploading && s.progress < 90
                              ? (0, G.jsx)("div", {
                                  className:
                                    "absolute inset-0 flex items-center justify-center bg-black/5 text-white",
                                  children: (0, G.jsx)(x.Z, {
                                    percentage: s.progress,
                                    className: "h-6 w-6",
                                  }),
                                })
                              : null,
                          ],
                        })
                      : (null == t ? void 0 : t.profilePictureUrl) != null &&
                          (null == t ? void 0 : t.profilePictureUrl) !== ""
                        ? (0, G.jsx)(N.Z, {
                            isFirstParty: !1,
                            src: t.profilePictureUrl,
                          })
                        : (0, G.jsx)("div", {
                            className:
                              "flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-token-border-medium",
                            children: (0, G.jsx)(b.OvN, {
                              className: "text-4xl",
                            }),
                          }),
                }),
                (0, G.jsx)(f.Uv, {
                  children: (0, G.jsxs)(f.VY, {
                    className:
                      "flex min-w-[100px] max-w-xs flex-col rounded-xl border border-gray-400 bg-token-main-surface-primary shadow-lg dark:border-gray-700",
                    sideOffset: 7,
                    children: [
                      (0, G.jsx)(C.UA, {
                        onClick: p,
                        children: "Upload Photo",
                      }),
                      (0, G.jsx)(C.UA, {
                        onClick: o,
                        children: "Use DALL\xb7E",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, G.jsx)("input", z({}, m())),
          ],
        });
      }
      var U = n(8402),
        D = n(7557);
      function Z(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Z(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
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
      function A(e) {
        var t, n, o;
        let { gizmoEditorData: r, updateGizmo: i } = e,
          l =
            null == r || null === (t = r.tools) || void 0 === t
              ? void 0
              : t.find((e) => e.type === c.qK.INTENT),
          { 0: s, 1: a } = (0, g.useState)(
            null !== (n = null == l ? void 0 : l.settings.intents) &&
            void 0 !== n
              ? n
              : ""
          ),
          { 0: d, 1: u } = (0, g.useState)(
            null !== (o = null == l ? void 0 : l.settings.intent_hook) &&
            void 0 !== o
              ? o
              : ""
          ),
          { 0: p, 1: m } = (0, g.useState)(!1),
          f = (0, v.Z)(),
          h = () => {
            i((e) =>
              M(
                M({}, e),
                {},
                {
                  tools: l
                    ? e.tools.map((e) =>
                        e.type === c.qK.INTENT
                          ? M(
                              M({}, e),
                              {},
                              {
                                settings: M(
                                  M({}, e.settings),
                                  {},
                                  { intents: s, intent_hook: d }
                                ),
                              }
                            )
                          : e
                      )
                    : [
                        ...e.tools,
                        {
                          type: c.qK.INTENT,
                          settings: { intents: s, intent_hook: d },
                        },
                      ],
                }
              )
            ),
              m(!1);
          };
        return (0, G.jsxs)(eg, {
          children: [
            (0, G.jsx)(ex, {
              label: "GPT Script",
              description: f.formatMessage({
                id: "gizmo.gptScriptExplanation",
                defaultMessage: "Code and Intents to save GPT state",
              }),
            }),
            p &&
              (0, G.jsxs)("div", {
                className: "mb-4",
                children: [
                  (0, G.jsx)(ex, { label: "Intent Hook" }),
                  (0, G.jsx)(eh, {
                    value: d,
                    rows: 20,
                    onChange: (e) => u(e.target.value),
                    placeholder:
                      'def f(input):\nreturn {\n  "instructions": str(input.intent),\n  "conversation_state": input.conversation_state,\n  "user_state": input.user_state,\n  "pinned": {},\n}',
                    className:
                      "h-50 mb-4 block w-full resize-none rounded-md border border-gray-300 p-2 font-mono text-xs shadow-sm focus:border-blue-500 focus:ring-blue-500",
                    spellCheck: "false",
                  }),
                  (0, G.jsx)(ex, { label: "Intents" }),
                  (0, G.jsx)(eh, {
                    value: s,
                    rows: 20,
                    onChange: (e) => a(e.target.value),
                    placeholder: "Enter Intent",
                    className: "h-50 mb-4",
                  }),
                  (0, G.jsx)(D.z, {
                    color: "dark",
                    onClick: () => {
                      h();
                    },
                    children: "Update",
                  }),
                ],
              }),
            !p &&
              (0, G.jsx)(C.cY, {
                onClick: () => m(!0),
                children: d ? "Update Script" : "Add Script",
              }),
          ],
        });
      }
      var S = n(65455),
        _ = n(23340),
        R = n(13038),
        W = n(9417),
        F = n(78e3),
        K = n(10518),
        B = n(19841),
        q = n(14623),
        X = n(83737),
        Y = n(61888),
        H = n(84261),
        J = n.n(H),
        V = n(7137),
        $ = n(84692),
        Q = n(68498),
        ee = n(21389),
        et = n(28354),
        en = n(53197);
      function eo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function er(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eo(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eo(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function ei(e) {
        var t;
        let {
            gizmoEditorData: n,
            requireGizmoId: o,
            currentModelConfig: r,
            updateGizmo: i,
          } = e,
          l = (0, v.Z)(),
          { 0: s, 1: a } = (0, g.useState)(0),
          d = (0, g.useRef)(new Map()),
          u = (0, k.Zp)(r, void 0),
          p = async (e) => {
            et.A.logEvent(en.M.uploadFile, {
              client: "web",
              eventSource: "mouse",
              intent: "gizmo",
            });
            let t = await o();
            e.length > 0 &&
              (await Promise.all(
                e.map((e) => {
                  let n = (0, T.W7)(e);
                  d.current.set(n, {
                    tempId: n,
                    gizmoId: t,
                    file: e,
                    status: O.X.Uploading,
                    progress: 1,
                    fileId: null,
                    cdnUrl: null,
                  }),
                    (0, T.cT)(
                      (0, T.W7)(e),
                      e,
                      l,
                      { kind: c.Ei.Gizmo, gizmoId: t },
                      {
                        onFileUploaded: (e, t, n, o) => {
                          let r = d.current.get(e);
                          null != r &&
                            null != r.fileId &&
                            (i((e) => {
                              var t;
                              return er(
                                er({}, e),
                                {},
                                {
                                  files: [
                                    ...(null !== (t = e.files) && void 0 !== t
                                      ? t
                                      : []),
                                    {
                                      file_id: r.fileId,
                                      name: r.file.name,
                                      size: r.file.size,
                                      type: r.file.type,
                                      last_modified: r.file.lastModified,
                                      file_size_tokens:
                                        null == o ? void 0 : o.fileTokenSize,
                                    },
                                  ],
                                }
                              );
                            }),
                            d.current.delete(e),
                            a((e) => e + 1));
                        },
                        onFileCreated: (n, o, r) => {
                          d.current.set(
                            n,
                            er(
                              er(
                                {
                                  tempId: n,
                                  gizmoId: t,
                                  file: e,
                                  status: O.X.Uploading,
                                  progress: 1,
                                },
                                d.current.get(n)
                              ),
                              {},
                              { fileId: o, cdnUrl: r }
                            )
                          ),
                            a((e) => e + 1);
                        },
                        onFileUploadProgress: (e, t) => {
                          let n = d.current.get(e);
                          (null == n ? void 0 : n.status) === O.X.Uploading &&
                            d.current.set(
                              e,
                              er(er({}, n), {}, { progress: t })
                            ),
                            a((e) => e + 1);
                        },
                        onError: (e) => {
                          d.current.delete(e);
                        },
                      },
                      {
                        usesRetrievalIndex:
                          null != r &&
                          (0, k._0)(r, e.type, e.name) === c.Cd.Retrieval,
                      }
                    );
                })
              ));
          },
          { getInputProps: m, open: f } = (0, h.uI)(
            er(
              {
                disabled: !1,
                noClick: !0,
                onDropAccepted: p,
                multiple: !0,
                maxSize: w.xC,
                maxFiles: 10,
              },
              (0, k.Z8)(u)
            )
          ),
          b =
            null !== (t = null == n ? void 0 : n.files) && void 0 !== t
              ? t
              : [];
        function x(e) {
          return (0, G.jsx)(
            P.Z,
            {
              onRemoveFileClick: () => {
                d.current.delete(e.tempId), a((e) => e + 1);
              },
              file: e.file,
              loadingPercentage:
                e.status === O.X.Uploading ? e.progress : void 0,
            },
            e.tempId
          );
        }
        function j(e) {
          return (0, G.jsx)(
            P.Z,
            {
              file: e.name,
              fileId: e.file_id,
              onRemoveFileClick: () =>
                i((t) => {
                  var n;
                  return er(
                    er({}, t),
                    {},
                    {
                      files:
                        null == t || null === (n = t.files) || void 0 === n
                          ? void 0
                          : n.filter((t) => t.file_id !== e.file_id),
                    }
                  );
                }),
              gizmoId: null == n ? void 0 : n.id,
            },
            e.file_id
          );
        }
        let y = Array.from(d.current.values()).filter((e) =>
            b.every((t) => t.file_id !== e.fileId)
          ),
          [N, I] = (0, Y.partition)(
            y,
            (e) =>
              null != r &&
              (0, k._0)(r, e.file.type, e.file.name) === c.Cd.CodeInterpreter
          ),
          [z, E] = (0, Y.partition)(
            b,
            (e) =>
              null != r &&
              null != e.type &&
              (0, k._0)(r, e.type, e.name) === c.Cd.CodeInterpreter
          ),
          L = (0, g.useRef)(z.length);
        return (
          (0, g.useEffect)(() => {
            z.length > L.current &&
              i((e) => {
                var t, n;
                return null !== (t = e.tools) &&
                  void 0 !== t &&
                  t.some((e) => e.type === c.qK.PYTHON)
                  ? e
                  : er(
                      er({}, e),
                      {},
                      {
                        tools: [
                          ...(null !== (n = e.tools) && void 0 !== n ? n : []),
                          { type: c.qK.PYTHON },
                        ],
                      }
                    );
              }),
              (L.current = z.length);
          }, [z.length]),
          (0, G.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, G.jsx)("div", {
                className: "rounded-lg text-token-text-tertiary",
                children: (0, G.jsx)($.Z, er({}, el.knowledgeWarning)),
              }),
              I.length > 0 || E.length > 0
                ? (0, G.jsxs)("div", {
                    className: "flex flex-wrap gap-2",
                    children: [I.map(x), E.map(j)],
                  })
                : null,
              N.length > 0 || z.length > 0
                ? (0, G.jsxs)("div", {
                    children: [
                      (0, G.jsx)("div", {
                        className: "mb-2 text-xs text-token-text-tertiary",
                        children:
                          "The following files are only available for Code Interpreter:",
                      }),
                      (0, G.jsxs)("div", {
                        className: "flex flex-wrap gap-2",
                        children: [N.map(x), z.map(j)],
                      }),
                    ],
                  })
                : null,
              (0, G.jsx)("div", {
                children: (0, G.jsxs)(C.cY, {
                  onClick: f,
                  children: [(0, G.jsx)("input", er({}, m())), "Upload files"],
                }),
              }),
            ],
          })
        );
      }
      let el = (0, Q.vU)({
        knowledgeWarning: {
          id: "gizmo.knowledgeWarning",
          defaultMessage:
            "If you upload files under Knowledge, conversations with your GPT may include file contents. Files can be downloaded when Code Interpreter is enabled",
        },
      });
      var es = n(16244);
      function ea(e) {
        let { placeholder: t, text: n, onChange: o, onClose: r } = e;
        return (0, G.jsx)(es.Z, {
          className: "!max-h-[100vh] !max-w-[80vw]",
          type: "success",
          isOpen: !0,
          onClose: r,
          primaryButton: (0, G.jsx)(C.cY, { onClick: r, children: "Close" }),
          children: (0, G.jsx)("textarea", {
            className:
              "h-[70vh] w-full resize-none rounded-lg bg-token-main-surface-primary dark:border-gray-700",
            value: n,
            onChange: (e) => {
              o(e.target.value);
            },
            placeholder: t,
          }),
        });
      }
      var ec = n(84297),
        ed = n(93031);
      function eu(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function ep(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eu(Object(n), !0).forEach(function (t) {
                (0, s.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eu(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      let em = ee.Z.input(
          o ||
            (o = (0, a.Z)([
              "w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary",
            ]))
        ),
        ef = ee.Z.div(r || (r = (0, a.Z)(["text-sm text-red-500"]))),
        eg = ee.Z.div(i || (i = (0, a.Z)(["mb-6"]))),
        eh = ee.Z.textarea(
          l ||
            (l = (0, a.Z)([
              "w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32",
            ]))
        );
      function eb() {
        return (0, G.jsx)("div", {
          className:
            "ml-2 flex h-3.5 w-3.5 cursor-default items-center justify-center rounded-full border border-token-border-medium text-[0.5rem] font-medium leading-none text-token-text-tertiary",
          children: "?",
        });
      }
      function ev(e) {
        let { description: t } = e;
        return (0, G.jsx)(p.u, {
          wide: !0,
          label: t,
          delayDuration: 0,
          children: (0, G.jsx)(eb, {}),
        });
      }
      function ex(e) {
        let { label: t, description: n, collapsed: o, onClick: r } = e,
          i = (0, G.jsx)("label", {
            className: "block font-medium text-token-text-primary",
            children: t,
          });
        return (0, G.jsxs)("div", {
          className: "mb-1.5 flex items-center",
          onClick: r,
          children: [
            void 0 !== o && (o ? (0, G.jsx)(V.H_v, {}) : (0, G.jsx)(V.iUH, {})),
            n
              ? (0, G.jsx)(p.u, {
                  label: n,
                  sideOffset: 4,
                  side: "top",
                  delayDuration: 0,
                  children: i,
                })
              : (0, G.jsx)(G.Fragment, { children: i }),
          ],
        });
      }
      function ej(e) {
        let { children: t, collapsed: n, initial: o } = e;
        return (0, G.jsx)(q.M, {
          initial: o,
          children:
            !n &&
            (0, G.jsx)(X.E.div, {
              initial: "collapsed",
              animate: "open",
              exit: "collapsed",
              variants: {
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              },
              children: t,
            }),
        });
      }
      function ey(e) {
        var t;
        let { actionTool: n, onShowActionsEditor: o, isDisabled: r } = e,
          i =
            "metadata" in n
              ? null === (t = n.metadata) || void 0 === t
                ? void 0
                : t.domain
              : void 0;
        return (0, G.jsxs)("div", {
          className: (0, B.default)(
            "flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",
            r ? "bg-token-main-surface-secondary" : ""
          ),
          onClick: o,
          children: [
            (0, G.jsx)("div", {
              className: "h-9 grow px-3 py-2",
              children:
                null != i
                  ? i
                  : (0, G.jsx)("span", {
                      className: "text-red-500",
                      children: "Invalid action",
                    }),
            }),
            (0, G.jsx)("div", { className: "w-px bg-token-border-medium" }),
            (0, G.jsx)("button", {
              disabled: r,
              className:
                "flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none",
              children: (0, G.jsx)(U.RR, { className: "icon-sm" }),
            }),
          ],
        });
      }
      function eP(e) {
        var t, n, o;
        let { gizmo: r, onShowActionsEditor: i, isDisabled: l } = e,
          s = (0, v.Z)(),
          a = (0, G.jsxs)("div", {
            className: "space-y-1",
            children: [
              null == r || null === (t = r.tools) || void 0 === t
                ? void 0
                : t.map((e, t) => {
                    var n;
                    return e.type !== c.qK.JIT_PLUGIN
                      ? null
                      : (0, G.jsxs)(
                          "div",
                          {
                            children: [
                              (0, G.jsx)(ey, {
                                isDisabled: l,
                                actionTool: e,
                                onShowActionsEditor: () => i(e.metadata.domain),
                              }),
                              (null === (n = e.metadata.auth) || void 0 === n
                                ? void 0
                                : n.type) === "oauth" &&
                                (0, G.jsx)(d.Z, {
                                  label: "Callback URL",
                                  value: ""
                                    .concat("https://chat.openai.com", "/aip/")
                                    .concat(
                                      e.metadata.action_id,
                                      "/oauth/callback"
                                    ),
                                  onCopied: () => {
                                    S.m.success("Copied to clipboard", {
                                      duration: 3,
                                    });
                                  },
                                }),
                            ],
                          },
                          t
                        );
                  }),
              (null !==
                (n =
                  null == r || null === (o = r.tools) || void 0 === o
                    ? void 0
                    : o.filter((e) => e.type === c.qK.JIT_PLUGIN)) &&
              void 0 !== n
                ? n
                : []
              ).length >= m.L5
                ? (0, G.jsx)("div", {
                    children: s.formatMessage(eT.maxActionsReached, {
                      number: m.L5,
                    }),
                  })
                : (0, G.jsx)(C.cY, {
                    disabled: l,
                    onClick: () => {
                      i("Unknown domain");
                    },
                    className: "mt-2",
                    children: (0, G.jsx)($.Z, ep({}, eT.createActionLabel)),
                  }),
            ],
          });
        return l
          ? (0, G.jsx)(p.u, {
              side: "top",
              label: s.formatMessage(eT.disabledCustomActionsTooltip),
              children: a,
            })
          : a;
      }
      function ew(e) {
        var t, n, o, r, i, l, s, a;
        let {
            gizmoEditorData: d,
            updateGizmo: p,
            generateProfilePic: f,
            setIsUploadingProfilePic: h,
            isGeneratingProfilePic: b,
            setIsGeneratingProfilePic: x,
            requireGizmoId: j,
            onShowActionsEditor: y,
          } = e,
          P = (0, _.B9)(),
          w = _.mx,
          O =
            null !== (t = null == d ? void 0 : d.tools) && void 0 !== t
              ? t
              : [],
          T = w ? P[w] : void 0,
          { 0: k, 1: N } = (0, g.useState)(!1),
          { 0: I, 1: z } = (0, g.useState)(!0),
          E =
            null !== (n = null == d ? void 0 : d.promptStarters) && void 0 !== n
              ? n
              : [],
          D = [...E, ...(E.length < 12 ? [""] : [])],
          Z = (0, ed.bw)(d),
          M = (0, F.ec)(F.F_.isBusinessWorkspace),
          S = (0, u.C)(W.L0.WorkspaceGPTCustomActions),
          B = (0, v.Z)(),
          { value: q } = (0, K.sB)(K.tz.GizmoContacts),
          { value: X } = (0, K.sB)(K.tz.GizmoIntents);
        return (0, G.jsxs)("div", {
          className:
            "flex h-full grow flex-col overflow-y-auto px-2 pt-6 text-sm",
          children: [
            (0, G.jsxs)("div", {
              className: "grow",
              children: [
                (0, G.jsxs)(eg, {
                  children: [
                    (0, G.jsx)(L, {
                      gizmoEditorData: d,
                      generateProfilePic: f,
                      isGeneratingProfilePic: b,
                      setIsGeneratingProfilePic: x,
                      onFileChange: async (e) => {
                        if (
                          null != e &&
                          "uploading" !== e &&
                          null != e.fileId
                        ) {
                          let t = await R.Z.getFileDownloadLink(e.fileId);
                          t.status === c.KF.Success &&
                            p({
                              profilePictureId:
                                null != e.fileId ? e.fileId : void 0,
                              profilePictureUrl: t.download_url,
                            });
                        } else
                          p({
                            profilePictureId: void 0,
                            profilePictureUrl: void 0,
                          });
                        h("uploading" === e);
                      },
                    }),
                    (0, G.jsx)(ex, {
                      label: "Name",
                      description: "The name of your GPT",
                    }),
                    (0, G.jsx)(em, {
                      type: "text",
                      placeholder: "Name your GPT",
                      value:
                        null !== (o = null == d ? void 0 : d.name) &&
                        void 0 !== o
                          ? o
                          : "",
                      onChange: (e) => {
                        p({ name: e.target.value });
                      },
                      onBlurCapture: () =>
                        p((e) => ep(ep({}, e), {}, { name: e.name.trim() })),
                    }),
                    Z.includes(ed.hs.GizmoNameTooLong)
                      ? (0, G.jsx)(ef, {
                          className: "mt-1",
                          children: (0, G.jsx)(
                            $.Z,
                            ep(
                              ep({}, eT.nameTooLong),
                              {},
                              { values: { length: m.aI } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, G.jsxs)(eg, {
                  className: "mt-4",
                  children: [
                    (0, G.jsx)(ex, {
                      label: "Description",
                      description: "Short description of what this GPT does",
                    }),
                    (0, G.jsx)(em, {
                      type: "text",
                      placeholder:
                        "Add a short description about what this GPT does",
                      value:
                        null !== (r = null == d ? void 0 : d.description) &&
                        void 0 !== r
                          ? r
                          : "",
                      onChange: (e) => p({ description: e.target.value }),
                      onBlurCapture: () =>
                        p((e) => {
                          var t, n;
                          return ep(
                            ep({}, e),
                            {},
                            {
                              description:
                                null !==
                                  (t =
                                    null === (n = e.description) || void 0 === n
                                      ? void 0
                                      : n.trim()) && void 0 !== t
                                  ? t
                                  : "",
                            }
                          );
                        }),
                    }),
                    Z.includes(ed.hs.GizmoDescriptionTooLong)
                      ? (0, G.jsx)(ef, {
                          className: "mt-1",
                          children: (0, G.jsx)(
                            $.Z,
                            ep(
                              ep({}, eT.descriptionTooLong),
                              {},
                              { values: { length: m.P_ } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, G.jsxs)(eg, {
                  children: [
                    (0, G.jsx)(ex, {
                      label: "Instructions",
                      description:
                        "What does this GPT do? How does it behave? What should it avoid doing?",
                    }),
                    (0, G.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, G.jsx)(eh, {
                          className: "resize-none",
                          rows: 8,
                          value: null == d ? void 0 : d.instructions,
                          onChange: (e) => p({ instructions: e.target.value }),
                          onBlurCapture: () =>
                            p((e) =>
                              ep(
                                ep({}, e),
                                {},
                                { instructions: e.instructions.trim() }
                              )
                            ),
                          placeholder:
                            "What does this GPT do? How does it behave? What should it avoid doing?",
                        }),
                        (0, G.jsx)("button", {
                          className:
                            "absolute bottom-3 right-2 text-token-text-tertiary",
                          onClick: () => N(!0),
                          children: (0, G.jsx)(U.j5, { className: "icon-sm" }),
                        }),
                      ],
                    }),
                    Z.includes(ed.hs.GizmoInstructionsTooLong)
                      ? (0, G.jsx)(ef, {
                          className: "mt-1",
                          children: (0, G.jsx)(
                            $.Z,
                            ep(
                              ep({}, eT.instructionsTooLong),
                              {},
                              { values: { length: m.vi } }
                            )
                          ),
                        })
                      : null,
                  ],
                }),
                (0, G.jsxs)(eg, {
                  children: [
                    (0, G.jsx)(ex, {
                      label: "Conversation starters",
                      description:
                        "Examples for the user to start the conversation",
                    }),
                    (0, G.jsx)("div", {
                      className: "flex flex-col gap-1",
                      children: D.map((e, t) =>
                        (0, G.jsxs)(
                          "div",
                          {
                            className: "flex items-center",
                            children: [
                              (0, G.jsx)(em, {
                                className: "rounded-r-none",
                                value: e,
                                type: "text",
                                onChange: (e) => {
                                  let n = e.target.value;
                                  p((e) => {
                                    var o;
                                    return ep(
                                      ep({}, e),
                                      {},
                                      {
                                        promptStarters: (0, Y.compact)(
                                          t >=
                                          (null !== (o = E.length) &&
                                          void 0 !== o
                                            ? o
                                            : 0)
                                            ? [...(null != E ? E : []), n]
                                            : E.map((e, o) => {
                                                if (o === t) {
                                                  if ("" === n) return;
                                                  return n;
                                                }
                                                return e;
                                              })
                                        ),
                                      }
                                    );
                                  });
                                },
                              }),
                              (0, G.jsx)("button", {
                                className:
                                  "flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none border border-l-0 border-token-border-medium",
                                onClick: () =>
                                  p((e) =>
                                    ep(
                                      ep({}, e),
                                      {},
                                      {
                                        promptStarters: E.filter(
                                          (e, n) => n !== t
                                        ),
                                      }
                                    )
                                  ),
                                children: (0, G.jsx)(U.v7, {
                                  className: "icon-sm",
                                }),
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                (0, G.jsxs)(eg, {
                  children: [
                    (0, G.jsx)(ex, {
                      label: "Knowledge",
                      description: B.formatMessage(eT.knowledgeExplanation),
                    }),
                    (0, G.jsx)(ei, {
                      gizmoEditorData: d,
                      requireGizmoId: j,
                      currentModelConfig: T,
                      updateGizmo: p,
                    }),
                  ],
                }),
                (0, G.jsxs)(eg, {
                  children: [
                    (0, G.jsx)(ex, {
                      label: "Capabilities",
                      description: "Functionality this GPT can use",
                    }),
                    (0, G.jsx)(ec.W, {
                      enabledTools: O,
                      onEnabledToolsChange: (e) => p({ tools: e }),
                    }),
                  ],
                }),
                (0, G.jsxs)(eg, {
                  children: [
                    (0, G.jsx)(ex, {
                      label: "Actions",
                      description: "APIs this GPT can use",
                    }),
                    (0, G.jsx)(eP, {
                      isDisabled: !!(M && !S),
                      gizmo: d,
                      onShowActionsEditor: y,
                    }),
                  ],
                }),
                !M &&
                  ((null !==
                    (l =
                      null === (s = d.files) || void 0 === s
                        ? void 0
                        : s.length) && void 0 !== l
                    ? l
                    : 0) > 0 ||
                    (null == d || null === (a = d.tools) || void 0 === a
                      ? void 0
                      : a.some((e) => e.type === c.qK.JIT_PLUGIN))) &&
                  (0, G.jsxs)(eg, {
                    children: [
                      (0, G.jsx)(ex, {
                        label: "Additional Settings",
                        collapsed: !!I,
                        onClick: () => {
                          z((e) => !e);
                        },
                      }),
                      (0, G.jsx)(ej, {
                        collapsed: I,
                        initial: !1,
                        children: (0, G.jsx)(C.f8, {
                          className: "mx-3 my-1",
                          labelClassName: "w-full cursor-pointer",
                          label:
                            "Use conversation data in your GPT to improve our models",
                          id: "improve-chatgpt",
                          checked: !d.trainingDisabled,
                          onChange: () => {
                            p({ trainingDisabled: !d.trainingDisabled });
                          },
                        }),
                      }),
                    ],
                  }),
                q && (0, G.jsx)(eO, { gizmoEditorData: d, updateGizmo: p }),
                X && (0, G.jsx)(A, { gizmoEditorData: d, updateGizmo: p }),
              ],
            }),
            k &&
              (0, G.jsx)(ea, {
                text: null !== (i = d.instructions) && void 0 !== i ? i : "",
                onChange: (e) => {
                  p({ instructions: e });
                },
                onClose: () => N(!1),
                placeholder:
                  "What does this GPT do? How does it behave? What should it avoid doing?",
              }),
          ],
        });
      }
      let eO = J()(
          () =>
            n
              .e(8682)
              .then(n.bind(n, 43459))
              .then((e) => e.GizmoContactsEditor),
          { loadableGenerated: { webpack: () => [43459] } }
        ),
        eT = (0, Q.vU)({
          nameTooLong: {
            id: "gizmo.nameTooLong",
            defaultMessage:
              "GPT names cannot be longer than {length} characters.",
          },
          knowledgeExplanation: {
            id: "gizmo.knowledgeExplanation",
            defaultMessage: "Additional files for this GPT to reference.",
          },
          descriptionTooLong: {
            id: "gizmo.descriptionTooLong",
            defaultMessage:
              "GPT descriptions cannot be longer than {length} characters.",
          },
          instructionsTooLong: {
            id: "gizmo.instructionsTooLong",
            defaultMessage:
              "GPT instructions cannot be longer than {length} characters.",
          },
          disabledCustomActionsTooltip: {
            id: "gizmo.disabledCustomActionsTooltip",
            defaultMessage:
              "Custom actions are disabled for your workspace. Contact your admin to enable them.",
          },
          createActionLabel: {
            id: "gizmo.createActionLabel",
            defaultMessage: "Create new action",
          },
          maxActionsReached: {
            id: "gizmo.maxActionsReached",
            defaultMessage: "GPTs can have a maximum of {number} actions",
          },
        });
    },
    84297: function (e, t, n) {
      n.d(t, {
        W: function () {
          return b;
        },
      });
      var o = n(39827),
        r = n(25660),
        i = n(88128),
        l = n(68832),
        s = n(25991),
        a = n(28373),
        c = n(9417),
        d = n(10518);
      n(70079);
      var u = n(9063),
        p = n(84692),
        m = n(68498),
        f = n(35250);
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function h(e) {
        let {
            label: t,
            toolType: n,
            enabledTools: o,
            onEnabledToolsChange: r,
            disabled: i,
            disabledTooltip: s,
          } = e,
          c = (e) => o.some((t) => t.type === e),
          d = (0, f.jsx)(a.f8, {
            labelClassName: "w-full cursor-pointer",
            id: n,
            label: t,
            checked: !i && c(n),
            disabled: i,
            onChange: () => {
              c(n) ? r(o.filter((e) => e.type !== n)) : r([...o, { type: n }]);
            },
          });
        return null != s
          ? (0, f.jsx)("div", {
              className: "opacity-70",
              children: (0, f.jsx)(l.u, { side: "top", label: s, children: d }),
            })
          : d;
      }
      function b(e) {
        let { enabledTools: t, onEnabledToolsChange: n } = e,
          l = (0, i.C)(c.L0.BrowseAvailable),
          { value: a } = (0, d.sB)(d.tz.GizmoMemory),
          m = (0, u.Z)();
        return (0, f.jsxs)("div", {
          className: "flex flex-col items-start gap-2",
          children: [
            (0, f.jsx)(h, {
              label: "Web Browsing",
              toolType: r.qK.BROWSER,
              enabledTools: t,
              onEnabledToolsChange: n,
              disabled: !l,
              disabledTooltip: l
                ? void 0
                : (0, f.jsx)(
                    p.Z,
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? g(Object(n), !0).forEach(function (t) {
                              (0, o.Z)(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : g(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                      }
                      return e;
                    })({}, v.disabledBrowsingToolTip)
                  ),
            }),
            (0, f.jsx)(h, {
              label: "DALL\xb7E Image Generation",
              toolType: r.qK.DALLE,
              enabledTools: t,
              onEnabledToolsChange: n,
            }),
            (0, f.jsx)(h, {
              label: (0, f.jsxs)("div", {
                className: "flex items-center",
                children: [
                  "Code Interpreter",
                  (0, f.jsx)(s.rv, {
                    description: m.formatMessage(v.codeInterpreterTooltip),
                  }),
                ],
              }),
              toolType: r.qK.PYTHON,
              enabledTools: t,
              onEnabledToolsChange: n,
            }),
            a &&
              (0, f.jsx)(h, {
                label: (0, f.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    "Memory",
                    (0, f.jsx)(s.rv, {
                      description: m.formatMessage(v.memoryTooltip),
                    }),
                  ],
                }),
                toolType: r.qK.MEMORY,
                enabledTools: t,
                onEnabledToolsChange: n,
              }),
          ],
        });
      }
      let v = (0, m.vU)({
        disabledBrowsingToolTip: {
          defaultMessage:
            "Web browsing is disabled for your workspace. Contact your admin to enable it.",
          id: "GizmoEditorModelPicker.disabledBrowsingToolTip",
        },
        codeInterpreterTooltip: {
          id: "GizmoEditorModelPicker.codeInterpreterTooltip",
          defaultMessage:
            "Allow this GPT to run code. When enabled, this GPT can analyze data, work with files you’ve uploaded, do math, and more.",
        },
        memoryTooltip: {
          id: "GizmoEditorModelPicker.memoryTooltip",
          defaultMessage:
            "Allow this GPT to pick up on users details and preferences to tailor its responses to them. When enabled, users will need to have memory on to use this GPT.",
        },
      });
    },
    93031: function (e, t, n) {
      n.d(t, {
        bw: function () {
          return f;
        },
        hs: function () {
          return p;
        },
        sw: function () {
          return m;
        },
        x$: function () {
          return u;
        },
      });
      var o,
        r = n(39827),
        i = n(25660),
        l = n(5572),
        s = n(44183),
        a = n(37493);
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : c(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function u(e, t) {
        return null == t
          ? e
          : ((t = (function e(t) {
              return "object" == typeof t && null != t
                ? Array.isArray(t)
                  ? t.map(e)
                  : Object.fromEntries(
                      Object.entries(t).map((t) => {
                        let [n, o] = t;
                        return [n, e(o)];
                      })
                    )
                : null === t
                  ? void 0
                  : t;
            })(t)),
            d(d({}, e), t));
      }
      let p =
        (((o = {})[(o.Loading = 0)] = "Loading"),
        (o[(o.UploadingProfilePic = 1)] = "UploadingProfilePic"),
        (o[(o.GeneratingProfilePic = 2)] = "GeneratingProfilePic"),
        (o[(o.GizmoNameTooLong = 3)] = "GizmoNameTooLong"),
        (o[(o.GizmoDescriptionTooLong = 4)] = "GizmoDescriptionTooLong"),
        (o[(o.GizmoInstructionsTooLong = 5)] = "GizmoInstructionsTooLong"),
        (o[(o.NameEmpty = 6)] = "NameEmpty"),
        (o[(o.MissingPublicActionPrivacyPolicyURL = 7)] =
          "MissingPublicActionPrivacyPolicyURL"),
        (o[(o.MissingCategory = 8)] = "MissingCategory"),
        o);
      function m(e) {
        switch (e) {
          case p.Loading:
            return "Loading";
          case p.UploadingProfilePic:
            return "Uploading profile picture";
          case p.GeneratingProfilePic:
            return "Generating profile picture";
          case p.GizmoNameTooLong:
            return "GPT name too long";
          case p.GizmoDescriptionTooLong:
            return "GPT description too long";
          case p.GizmoInstructionsTooLong:
            return "GPT instructions too long";
          case p.NameEmpty:
            return "GPT name cannot be empty";
          case p.MissingPublicActionPrivacyPolicyURL:
            return "Public actions require valid privacy policy URLs";
          case p.MissingCategory:
            return "Public GPTs must have a category";
          default:
            return (0, s.Z)(e), "";
        }
      }
      function f(e, t, n) {
        var o, r, s, c, d, u;
        let m = e.name.length > a.aI,
          f =
            (null !==
              (o =
                null === (r = e.description) || void 0 === r
                  ? void 0
                  : r.length) && void 0 !== o
              ? o
              : 0) > a.P_,
          g =
            (null !==
              (s =
                null === (c = e.instructions) || void 0 === c
                  ? void 0
                  : c.length) && void 0 !== s
              ? s
              : 0) > a.vi,
          h = [];
        if (
          ((null == e ? void 0 : e.name) === "" && h.push(p.NameEmpty),
          m && h.push(p.GizmoNameTooLong),
          f && h.push(p.GizmoDescriptionTooLong),
          g && h.push(p.GizmoInstructionsTooLong),
          null != t && [l.Zz.Link, l.Zz.Marketplace].includes(t))
        )
          for (let t of null === (d = e.tools) || void 0 === d
            ? void 0
            : d.filter((e) => e.type === i.qK.JIT_PLUGIN)) {
            let e =
              null === (u = t.metadata) || void 0 === u
                ? void 0
                : u.privacy_policy_url;
            if (
              null == e ||
              !(function (e) {
                try {
                  return new URL(e), !0;
                } catch (e) {
                  return !1;
                }
              })(e)
            ) {
              h.push(p.MissingPublicActionPrivacyPolicyURL);
              break;
            }
          }
        return (
          t === l.Zz.Marketplace && null == n && h.push(p.MissingCategory), h
        );
      }
    },
  },
]);
//# sourceMappingURL=8697-ebbae398669b1442.js.map
