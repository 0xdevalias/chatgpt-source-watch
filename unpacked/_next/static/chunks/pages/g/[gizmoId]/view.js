(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9457],
  {
    16392: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          __N_SSP: function () {
            return T;
          },
          default: function () {
            return B;
          },
        });
      var i = t(9182),
        l = t(49305),
        n = t(92226),
        a = t(29287),
        r = t(67217),
        o = t(52075),
        d = t(5427),
        c = t(41251),
        u = t(38511),
        m = t(70187),
        x = t(94063),
        g = t(89899),
        f = t(99715),
        j = t(61236),
        h = t(34594),
        y = t(41409),
        p = t(70079),
        v = t(68498),
        b = t(84692),
        z = t(35250);
      let w = (e) => {
          let { gizmoId: s, limit: t, cursor: i } = e;
          return (0, j.a)({
            queryFn: async () => x.U.listVersions({ gizmoId: s }),
            queryKey: [
              "gizmo",
              "versions",
              { gizmoId: s, limit: t, cursor: i },
            ],
          });
        },
        N = (0, p.memo)(function (e) {
          let { gizmoId: s, onSelectVersion: t } = e,
            { value: i } = (0, h.sB)(h.tz.GizmoVersionHistory);
          return s && i
            ? (0, z.jsx)(k, { gizmoId: s, onSelectVersion: t })
            : null;
        });
      function k(e) {
        let { gizmoId: s, onSelectVersion: t } = e,
          i = (0, y.useRouter)(),
          { data: l } = w({ gizmoId: s }),
          n = l
            ? l.items.reduce((e, s) => {
                let t = new Date(s.updated_at),
                  i = ""
                    .concat(t.getFullYear(), "-")
                    .concat(t.getMonth() + 1, "-")
                    .concat(t.getDate());
                return e[i] || (e[i] = []), e[i].push(s), e;
              }, {})
            : null,
          a = (e) => {
            i.push("/g/".concat(s, "/view?version=").concat(e));
          };
        return n
          ? (0, z.jsx)("div", {
              className: "relative h-full w-screen max-w-2xs",
              children: (0, z.jsx)("div", {
                className:
                  "flex h-full max-w-2xs flex-col overflow-y-scroll bg-token-sidebar-surface-primary py-6 shadow-xl",
                children: (0, z.jsx)("div", {
                  className: "relative flex-1 px-4 sm:px-6",
                  children: Object.keys(n).map((e, s) => {
                    let i = n[e];
                    return (0, z.jsx)(
                      _,
                      {
                        date: e,
                        entries: i,
                        onSelectVersion: t,
                        onRestoreVersion: a,
                      },
                      s
                    );
                  }),
                }),
              }),
            })
          : null;
      }
      function _(e) {
        let {
          date: s,
          entries: t,
          onSelectVersion: i,
          onRestoreVersion: l,
        } = e;
        return (0, z.jsxs)(z.Fragment, {
          children: [
            (0, z.jsx)("div", {
              className:
                "border-b border-token-border-medium py-2 font-medium uppercase text-token-text-secondary",
              children: (0, z.jsx)(v.Ji, { value: s, dateStyle: "medium" }),
            }),
            (0, z.jsx)("div", {
              className: "flex flex-col space-y-2",
              children: t.map((e, s) =>
                (0, z.jsxs)(
                  "div",
                  {
                    className:
                      "flex flex-row items-center justify-between border-b border-token-border-medium",
                    onClick: () => i(e.version),
                    children: [
                      (0, z.jsx)("span", {
                        className:
                          "grow p-2 hover:cursor-pointer hover:bg-token-sidebar-surface-tertiary",
                        children: (0, z.jsx)(v.Ji, {
                          value: e.updated_at,
                          timeStyle: "short",
                        }),
                      }),
                      (0, z.jsx)(C, {
                        onRestoreVersion: () => {
                          l(e.version);
                        },
                      }),
                    ],
                  },
                  s
                )
              ),
            }),
          ],
        });
      }
      function C(e) {
        let { onRestoreVersion: s } = e;
        return (0, z.jsx)(z.Fragment, {
          children: (0, z.jsxs)(f.fC, {
            children: [
              (0, z.jsx)(f.xz, {
                asChild: !0,
                children: (0, z.jsx)("button", {
                  color: "neutral",
                  className:
                    "rounded-lg px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-token-sidebar-surface-tertiary active:scale-[0.9]",
                  children: (0, z.jsx)(m.Yr, { className: "icon-md" }),
                }),
              }),
              (0, z.jsx)(f.Uv, {
                children: (0, z.jsx)(f.VY, {
                  className:
                    "flex min-w-[100px] max-w-xs flex-col rounded-xl border border-gray-400 bg-token-main-surface-primary shadow-lg dark:border-gray-700",
                  sideOffset: 7,
                  children: (0, z.jsxs)(g.UA, {
                    className: "items-center",
                    disabled: !1,
                    onClick: s,
                    children: [
                      (0, z.jsx)(m.Nt, { className: "icon-md" }),
                      (0, z.jsx)(b.Z, {
                        id: "gizmoVersionHistory.restoreVersionLabel",
                        defaultMessage: "Restore this version",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var M = t(78253),
        Z = t(61888);
      let R = (e) => {
          let { gizmoId: s, version: t } = e;
          return (0, j.a)({
            queryFn: async () => x.U.getVersion({ gizmoId: s, version: t }),
            queryKey: ["gizmo", "version", { gizmoId: s, version: t }],
          });
        },
        I = (e, s) => "/gpts/editor/".concat(e, "?version=").concat(s);
      function V(e) {
        var s;
        let { gizmoId: t } = e,
          { 0: a, 1: r } = (0, p.useState)(null),
          o = (0, y.useRouter)(),
          { data: d } = (0, i.b9)(t),
          c =
            null == d ||
            null === (s = d.gizmo.current_user_permission) ||
            void 0 === s
              ? void 0
              : s.can_write,
          u = (0, i.YR)(),
          { 0: x, 1: f } = (0, p.useState)(!1),
          j = () => {
            a ? o.push(I(t, a)) : o.push((0, M.AA)(t));
          };
        return (0, z.jsxs)("div", {
          className: "flex h-screen w-full flex-col items-center",
          children: [
            (0, z.jsx)("div", {
              className:
                "relative flex h-16 w-full items-center justify-between gap-2 border-b border-token-border-medium px-3",
              children:
                d &&
                (0, z.jsxs)(z.Fragment, {
                  children: [
                    (0, z.jsxs)("div", {
                      className: "flex cursor-pointer items-center gap-2",
                      onClick: () => o.back(),
                      children: [
                        (0, z.jsx)(m.L7, { className: "icon-lg" }),
                        (0, z.jsx)("div", {
                          className: "font-medium",
                          children: c
                            ? (0, z.jsx)(b.Z, {
                                id: "gizmoReadOnly.versionHistoryTitle",
                                defaultMessage: "Version History",
                              })
                            : (0, z.jsx)(b.Z, {
                                id: "gizmoReadOnly.configurationTitle",
                                defaultMessage: "Configuration",
                              }),
                        }),
                      ],
                    }),
                    (0, z.jsx)("div", {
                      className: "mr-4 flex items-center gap-2",
                      children: c
                        ? (0, z.jsx)(g.cY, {
                            color: "light",
                            onClick: () => {
                              a &&
                              a !== d.gizmo.live_version &&
                              d.tools.find((e) => {
                                var s;
                                return (
                                  e.type === l.qK.JIT_PLUGIN &&
                                  (null === (s = e.metadata.auth) ||
                                  void 0 === s
                                    ? void 0
                                    : s.type) !== n.Jv.None
                                );
                              })
                                ? f(!0)
                                : j();
                            },
                            children: (0, z.jsx)(b.Z, {
                              id: "gizmo.readonly.restoreVersion",
                              defaultMessage: "Restore this version",
                            }),
                          })
                        : (0, z.jsx)(g.cY, {
                            color: "light",
                            loading: u.isPending,
                            onClick: async () => {
                              let e = await u.mutateAsync({ gizmoId: t });
                              e.gizmo.id &&
                                o.push("/gpts/editor/".concat(e.gizmo.id));
                            },
                            children: (0, z.jsx)(b.Z, {
                              id: "gizmo.readonly.duplicate",
                              defaultMessage: "Duplicate",
                            }),
                          }),
                    }),
                  ],
                }),
            }),
            (0, z.jsxs)("div", {
              className: "flex h-full w-full items-center",
              children: [
                c &&
                  (0, z.jsx)(N, {
                    gizmoId: t,
                    onSelectVersion: (e) => {
                      r(e);
                    },
                  }),
                (0, z.jsx)(O, { gizmoId: t, version: a }),
              ],
            }),
            x &&
              (0, z.jsx)(S, {
                onClose: () => {
                  f(!1);
                },
                onContinue: j,
              }),
          ],
        });
      }
      function S(e) {
        let { onClose: s, onContinue: t } = e,
          { 0: i, 1: l } = (0, p.useState)(!1);
        return (0, z.jsx)(r.Z, {
          isOpen: !0,
          onClose: s,
          type: "warning",
          showCloseButton: !0,
          title: (0, z.jsx)(b.Z, {
            id: "gizmoReadOnly.authModalWarningTitle",
            defaultMessage: "Reset Authentication for Custom Actions",
          }),
          primaryButton: (0, z.jsx)(a.z, {
            onClick: () => {
              l(!0), t();
            },
            loading: i,
            color: "light",
            children: (0, z.jsx)(b.Z, {
              id: "gizmoReadOnly.authModalContinueButton",
              defaultMessage: "Continue",
            }),
          }),
          secondaryButton: (0, z.jsx)(a.z, {
            onClick: s,
            color: "neutral",
            children: (0, z.jsx)(b.Z, {
              id: "gizmoReadOnly.authModalCancelButton",
              defaultMessage: "Cancel",
            }),
          }),
          size: "normal",
          children: (0, z.jsx)(b.Z, {
            id: "gizmoReadOnly.authModalWarningBody",
            defaultMessage:
              "Restoring this version will reset authentication of your custom actions. You may need to reconfigure each custom action afterwards.",
          }),
        });
      }
      function O(e) {
        var s, t, i, n;
        let { gizmoId: a, version: r } = e,
          { data: m } = R({ gizmoId: a, version: r }),
          { 0: x, 1: g } = (0, p.useState)(null);
        if (!m) return null;
        let f = m.tools.filter((e) => e.type === l.qK.JIT_PLUGIN);
        return (0, z.jsx)("div", {
          className:
            "flex max-h-[80vh] flex-grow justify-center overflow-y-auto",
          children: (0, z.jsxs)("div", {
            className: "flex w-full max-w-2xl flex-col text-sm",
            children: [
              (0, z.jsx)(c.hj, {
                className: "self-center",
                children: (0, z.jsx)(d.Z, {
                  src: m.gizmo.display.profile_picture_url,
                  isFirstParty: !1,
                  className: "h-12 w-12",
                }),
              }),
              (0, z.jsxs)(c.hj, {
                children: [
                  (0, z.jsx)(c.lX, {
                    label: (0, z.jsx)(b.Z, {
                      id: "gizmo.readonly.nameLabel",
                      defaultMessage: "Name",
                    }),
                  }),
                  (0, z.jsx)(c.yt, {
                    type: "text",
                    value:
                      null !== (s = m.gizmo.display.name) && void 0 !== s
                        ? s
                        : "",
                    disabled: !0,
                    className: "bg-token-main-surface-secondary",
                  }),
                ],
              }),
              (0, z.jsxs)(c.hj, {
                children: [
                  (0, z.jsx)(c.lX, {
                    label: (0, z.jsx)(b.Z, {
                      id: "gizmo.readonly.descriptionLabel",
                      defaultMessage: "Description",
                    }),
                  }),
                  (0, z.jsx)(c.yt, {
                    type: "text",
                    value:
                      null !== (t = m.gizmo.display.description) && void 0 !== t
                        ? t
                        : "",
                    disabled: !0,
                    className: "bg-token-main-surface-secondary",
                  }),
                ],
              }),
              (0, z.jsxs)(c.hj, {
                children: [
                  (0, z.jsx)(c.lX, {
                    label: (0, z.jsx)(b.Z, {
                      id: "gizmo.readonly.instructionsLabel",
                      defaultMessage: "Instructions",
                    }),
                  }),
                  (0, z.jsx)(c.B1, {
                    className: "resize-none bg-token-main-surface-secondary",
                    rows: 8,
                    value:
                      null !== (i = m.gizmo.instructions) && void 0 !== i
                        ? i
                        : "",
                    disabled: !0,
                  }),
                ],
              }),
              m.gizmo.display.prompt_starters &&
                m.gizmo.display.prompt_starters.length > 0 &&
                (0, z.jsxs)(c.hj, {
                  children: [
                    (0, z.jsx)(c.lX, {
                      label: (0, z.jsx)(b.Z, {
                        id: "gizmo.readonly.conversationStartersLabel",
                        defaultMessage: "Conversation starters",
                      }),
                    }),
                    m.gizmo.display.prompt_starters.map((e, s) =>
                      (0, z.jsx)(
                        c.yt,
                        {
                          type: "text",
                          value: e,
                          disabled: !0,
                          className:
                            "resize-none bg-token-main-surface-secondary",
                        },
                        s
                      )
                    ),
                  ],
                }),
              m.files &&
                m.files.length > 0 &&
                (0, z.jsxs)(c.hj, {
                  children: [
                    (0, z.jsx)(c.lX, {
                      label: (0, z.jsx)(b.Z, {
                        id: "gizmo.readonly.knowledgeLabel",
                        defaultMessage: "Knowledge",
                      }),
                    }),
                    m.files.map((e, s) =>
                      (0, z.jsx)(o.Z, { file: e.name, fileId: e.id }, s)
                    ),
                  ],
                }),
              (0, z.jsxs)(c.hj, {
                children: [
                  (0, z.jsx)(c.lX, {
                    label: (0, z.jsx)(b.Z, {
                      id: "gizmo.readonly.capabilitiesLabel",
                      defaultMessage: "Capabilities",
                    }),
                  }),
                  (0, z.jsx)(u.W, {
                    enabledTools: m.tools,
                    onEnabledToolsChange: Z.noop,
                  }),
                ],
              }),
              f &&
                f.length > 0 &&
                (0, z.jsxs)(c.hj, {
                  children: [
                    (0, z.jsx)(c.lX, {
                      label: (0, z.jsx)(b.Z, {
                        id: "gizmo.readonly.actionsLabel",
                        defaultMessage: "Actions",
                      }),
                    }),
                    f.map((e, s) =>
                      (0, z.jsx)(
                        c.r,
                        {
                          isDisabled: !1,
                          actionTool: e,
                          onShowActionsEditor: () => {
                            (null == x ? void 0 : x.metadata.action_id) ===
                            e.metadata.action_id
                              ? g(null)
                              : g(e);
                          },
                        },
                        s
                      )
                    ),
                    x &&
                      (0, z.jsx)("textarea", {
                        readOnly: !0,
                        value:
                          null !== (n = x.metadata.raw_spec) && void 0 !== n
                            ? n
                            : "",
                        className:
                          "mb-16 block h-96 w-full border-t-0 border-token-main-surface-tertiary bg-transparent p-2 font-mono text-xs text-token-text-primary",
                      }),
                  ],
                }),
            ],
          }),
        });
      }
      var L = t(47712),
        T = !0;
      function B() {
        var e, s;
        let t = (0, L.t)(),
          l = (0, y.useRouter)(),
          n =
            null !==
              (e =
                null === (s = l.query) || void 0 === s ? void 0 : s.gizmoId) &&
            void 0 !== e
              ? e
              : "",
          a = (0, i.CR)(n),
          { value: r } = (0, h.sB)(h.tz.GizmoVersionHistory);
        return (
          (0, p.useEffect)(() => {
            null != t && t.isFree() && l.push("/");
          }, [t, l]),
          r ? (0, z.jsx)(V, { gizmoId: a }) : null
        );
      }
    },
    48103: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/g/[gizmoId]/view",
        function () {
          return t(16392);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [4736, 2888, 9774, 179], function () {
      return e((e.s = 48103));
    }),
      (_N_E = e.O());
  },
]);
//# sourceMappingURL=view-6e936cb466c00843.js.map