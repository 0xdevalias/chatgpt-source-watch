"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9112],
  {
    9112: function (e, t, a) {
      a.d(t, {
        hb: function () {
          return eb;
        },
        yG: function () {
          return ex;
        },
        ZP: function () {
          return eu;
        },
      });
      var r,
        s,
        n,
        i,
        o,
        l = a(73017),
        c = a(39827),
        d = a(25660),
        u = a(65375),
        p = a(85641),
        m = a(42005),
        f = a(24605),
        x = a(26623),
        g = a(41098),
        b = a(87106),
        j = a(70079),
        v = a(76483),
        h = a(9063),
        y = a(68498),
        w = a(35250);
      function k(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(a), !0).forEach(function (t) {
                (0, c.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : k(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
        }
        return e;
      }
      function O(e) {
        let { onFileChange: t, className: a, message: r, mimeTypes: s } = e,
          n = (0, h.Z)(),
          i = null != r ? r : n.formatMessage(N.helpText),
          {
            open: o,
            getRootProps: l,
            getInputProps: c,
            isDragActive: d,
          } = (0, v.uI)(
            P(
              {
                disabled: !1,
                noClick: !0,
                onDropAccepted: (e) => {
                  if (e.length > 0) {
                    let a = e[0];
                    s && s.includes(a.type) && t(a);
                  }
                },
                onDropRejected: () => null,
                multiple: !1,
                maxSize: g.xC,
              },
              (0, b.Z8)(s)
            )
          );
        return (0, w.jsxs)(
          "div",
          P(
            P(
              {
                className:
                  "flex flex-col content-center justify-center gap-3 rounded border border-dashed px-6 py-16 text-center" +
                  (d
                    ? " border-green-600 bg-green-600 bg-opacity-10"
                    : "border-token-border-medium") +
                  " " +
                  (null != a ? a : ""),
              },
              l()
            ),
            {},
            {
              children: [
                (0, w.jsx)("input", P({}, c())),
                (0, w.jsx)("div", {
                  className: "text-center dark:text-white",
                  children: (0, w.jsx)("div", {
                    className: "inline-block",
                    children: (0, w.jsx)(p.tC, {}),
                  }),
                }),
                (0, w.jsx)("div", {
                  className: "text-center text-sm",
                  children: i,
                }),
                (0, w.jsx)("div", {
                  className:
                    "cursor-pointer text-center text-sm font-bold text-green-600",
                  onClick: () => {
                    o();
                  },
                  children: n.formatMessage(N.openFilePicker),
                }),
              ],
            }
          )
        );
      }
      let N = (0, y.vU)({
        helpText: {
          id: "FileUploadBox.helpText",
          defaultMessage: "Drop file here to upload",
        },
        openFilePicker: {
          id: "FileUploadBox.openFilePicker",
          defaultMessage: "Browse files",
        },
      });
      var M = a(47483),
        Z = a(33925),
        E = a(16244),
        D = a(21643),
        A = a(82429),
        S = a(36607),
        F = a(64085),
        C = a(65455),
        B = a(13038),
        U = a(18405),
        W = a(82473),
        _ = a(25494),
        I = a(84692);
      function R(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? R(Object(a), !0).forEach(function (t) {
                (0, c.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : R(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
        }
        return e;
      }
      function T(e) {
        var t, a;
        let { workspace: r } = e,
          { 0: s, 1: n } = (0, j.useState)(
            null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : ""
          ),
          { 0: i, 1: o } = (0, j.useState)(!1);
        !i &&
          r &&
          (o(!0),
          "" == s &&
            n(
              null !== (a = null == r ? void 0 : r.name) && void 0 !== a
                ? a
                : ""
            ));
        let { 0: l, 1: c } = (0, j.useState)(r.profilePictureUrl),
          { 0: p, 1: m } = (0, j.useState)(r.profilePictureId),
          f = (0, U.EV)(U.B.WorkspaceAppearance),
          x = (0, h.Z)(),
          { 0: g, 1: v } = (0, j.useState)(void 0);
        async function y(e) {
          let t = await (0, b.WI)(e, 2 * u.EF.workspaceAvatarPreview),
            a = (0, A.W7)(t);
          v({
            tempId: a,
            file: t,
            status: D.X.Uploading,
            progress: 1,
            fileId: null,
            cdnUrl: null,
          }),
            (0, A.lU)(a, t, x, d.Ei.ProfilePicture, {
              onFileCreated(e, t, a) {
                v((r) =>
                  "initial" !== r &&
                  (null == r ? void 0 : r.tempId) === e &&
                  r.status === D.X.Uploading
                    ? z(z({}, r), {}, { progress: 10, fileId: t, cdnUrl: a })
                    : r
                );
              },
              onFileUploadProgress(e, t) {
                v((a) =>
                  "initial" !== a &&
                  (null == a ? void 0 : a.tempId) === e &&
                  a.status === D.X.Uploading
                    ? z(z({}, a), {}, { progress: t })
                    : a
                );
              },
              onFileUploaded(e, t, a) {
                v((t) =>
                  "initial" !== t && t && t.cdnUrl && t.tempId === e
                    ? (B.Z.getFileDownloadLink(t.fileId).then((e) => {
                        e.status === d.KF.Success &&
                          (m(t.fileId), c(e.download_url));
                      }),
                      z(
                        z({}, t),
                        {},
                        {
                          status: D.X.Ready,
                          progress: 100,
                          fileSpec: z(
                            {
                              name: t.file.name,
                              id: t.fileId,
                              size: t.file.size,
                            },
                            null != a ? a : {}
                          ),
                        }
                      ))
                    : t
                );
              },
              onError(e) {
                v((t) => {
                  if (
                    "initial" !== t &&
                    (null == t ? void 0 : t.tempId) === e
                  ) {
                    m(void 0), c(void 0), T(null);
                    return;
                  }
                  return t;
                });
              },
            });
        }
        let k = (function (e) {
            let t = (0, W.NL)(),
              a = (0, h.Z)();
            return (0, _.D)({
              mutationFn: (t) => {
                let { name: r, profilePictureId: s, profilePictureUrl: n } = t;
                return B.Z.patchWorkspace({
                  workspaceId: e,
                  name: r,
                  profile_picture_id: s,
                  profile_picture_url: n,
                }).catch((e) => {
                  C.m.danger(
                    a.formatMessage(G.saveError, { error: e.message })
                  );
                });
              },
              onSuccess: () => {
                t.invalidateQueries({ queryKey: ["account-status"] });
              },
            });
          })(r.id),
          P = (0, w.jsx)(Z.ZP.Button, {
            color: "primary",
            disabled:
              ("initial" !== g && void 0 !== g && g.status !== D.X.Ready) ||
              ("initial" !== g &&
                void 0 !== g &&
                g.status === D.X.Ready &&
                !l) ||
              k.isPending ||
              0 === s.trim().length,
            onClick: async () => {
              k.mutate({ name: s, profilePictureId: p, profilePictureUrl: l }),
                U.vm.closeModal(U.B.WorkspaceAppearance);
            },
            title: x.formatMessage(G.modalSubmit),
          }),
          N = (0, w.jsx)(Z.ZP.Button, {
            onClick: () => {
              v(void 0),
                m(r.profilePictureId),
                c(r.profilePictureUrl),
                U.vm.closeModal(U.B.WorkspaceAppearance);
            },
            title: x.formatMessage(G.modalCancel),
          }),
          { 0: R, 1: T } = (0, j.useState)(null);
        return (
          (0, j.useEffect)(() => {
            if ("initial" !== g && void 0 != g && null == R) {
              let e = new FileReader();
              e.addEventListener("load", () => {
                let t = e.result;
                "string" == typeof t && T(t);
              }),
                e.readAsDataURL(g.file);
            }
          }, [g, R]),
          (0, w.jsxs)(E.Z, {
            isOpen: f,
            onClose: () => U.vm.closeModal(U.B.WorkspaceAppearance),
            showCloseButton: !0,
            primaryButton: P,
            secondaryButton: N,
            type: "danger",
            title: x.formatMessage(G.modalTitle),
            children: [
              (0, w.jsxs)("div", {
                className: "mb-4 flex-wrap",
                children: [
                  (0, w.jsx)("label", {
                    htmlFor: "workspace-name",
                    className: "block pb-1 font-medium text-token-text-primary",
                    children: (0, w.jsx)(I.Z, z({}, G.workspaceName)),
                  }),
                  (0, w.jsx)("p", {
                    className: "font-base text-sm text-token-text-secondary",
                    children: (0, w.jsx)(
                      I.Z,
                      z({}, G.workspaceNameDescription)
                    ),
                  }),
                ],
              }),
              (0, w.jsx)("div", {
                className: "mb-4",
                children: (0, w.jsx)(S.Z, {
                  type: "text",
                  name: "workspace-name",
                  value: s,
                  onChange: (e) => n(e.target.value),
                  maxLength: 64,
                }),
              }),
              (0, w.jsxs)("div", {
                className: "mb-4 flex-wrap",
                children: [
                  (0, w.jsx)("label", {
                    htmlFor: "workspace-avatar",
                    className: "block pb-1 font-medium text-token-text-primary",
                    children: (0, w.jsx)(I.Z, z({}, G.workspaceAvatar)),
                  }),
                  (0, w.jsx)("p", {
                    className: "font-base text-sm text-token-text-secondary",
                    children: x.formatMessage(G.workspaceAvatarDescription, {
                      size: 2 * u.EF.workspaceAvatarPreview,
                    }),
                  }),
                ],
              }),
              (0, w.jsxs)("div", {
                className: "mb-4 flex-wrap text-center",
                children: [
                  l
                    ? (0, w.jsxs)("div", {
                        className: "relative mb-3 inline-flex",
                        children: [
                          (0, w.jsx)(u.B0, {
                            src: l,
                            size: "workspaceAvatarPreview",
                          }),
                          (0, w.jsx)("div", {
                            className: "absolute -right-1 -top-1",
                            children: (0, w.jsx)(L, {
                              onClick: () => {
                                m(null), c(null), v(void 0), T(null);
                              },
                            }),
                          }),
                        ],
                      })
                    : void 0 != g && "initial" !== g && R
                      ? (0, w.jsx)("div", {
                          className: "flex flex-col justify-center text-center",
                          children: (0, w.jsxs)("div", {
                            className: "relative mb-3 text-center",
                            children: [
                              (0, w.jsx)(u.B0, {
                                src: URL.createObjectURL(g.file),
                                size: "workspaceAvatarPreview",
                              }),
                              (0, w.jsx)("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-center text-white",
                                children: (0, w.jsx)(M.Z, {
                                  percentage: g.progress,
                                  className: "h-6 w-6",
                                }),
                              }),
                            ],
                          }),
                        })
                      : (0, w.jsx)(O, {
                          onFileChange: (e) => {
                            y(e);
                          },
                          mimeTypes: b.KL,
                        }),
                  (0, w.jsx)(F.Z, {
                    children: x.formatMessage(G.propagationWarning),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function L(e) {
        let { onClick: t } = e;
        return (0, w.jsx)("div", {
          className:
            " flex h-6 w-6 cursor-pointer flex-row flex-wrap content-center justify-center rounded-full border-2 border-white bg-black text-white",
          onClick: t,
          children: (0, w.jsx)(p.Ls, { className: "h-3 w-3" }),
        });
      }
      let G = (0, y.vU)({
        modalTitle: {
          id: "workspaceAppearanceModal.title",
          defaultMessage: "Workspace appearance",
        },
        modalSubmit: {
          id: "workspaceAppearanceModal.submit",
          defaultMessage: "Save",
        },
        modalCancel: {
          id: "workspaceAppearanceModal.cancel",
          defaultMessage: "Cancel",
        },
        workspaceName: {
          id: "workspaceAppearanceModal.workspaceName",
          defaultMessage: "Workspace name",
        },
        workspaceNameDescription: {
          id: "workspaceAppearanceModal.workspaceNameDescription",
          defaultMessage: "Update the name of the workspace.",
        },
        workspaceAvatar: {
          id: "workspaceAppearanceModal.workspaceAvatar",
          defaultMessage: "Workspace image",
        },
        workspaceAvatarDescription: {
          id: "workspaceAppearanceModal.workspaceAvatarDescription",
          defaultMessage:
            "Upload a JPEG or PNG workspace image for your team. (Minimum {size}\xd7{size}px recommended.)",
        },
        propagationWarning: {
          id: "workspaceAppearanceModal.propagationWarning",
          defaultMessage:
            "Changes to the workspace name and image may take some time to take effect.",
        },
        saveError: {
          id: "workspaceAppearanceModal.saveError",
          defaultMessage: "Failed to save workspace appearance",
        },
      });
      var K = a(68832),
        X = a(22933),
        q = a(24668),
        Q = a(78e3),
        J = a(10518),
        $ = a(19841),
        H = a(12366),
        V = a(1454),
        Y = a(21389),
        ee = a(7557),
        et = a(82734),
        ea = a(32163);
      function er(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function es(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? er(Object(a), !0).forEach(function (t) {
                (0, c.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : er(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
        }
        return e;
      }
      function en(e) {
        let { accountId: t, subscription: a } = e,
          r = (0, h.Z)(),
          s = (0, et.wK)(t),
          { 0: n, 1: i } = (0, j.useState)(!1),
          o = (0, ea.Gk)(t),
          l = async () => {
            i(!0);
            try {
              await s.mutateAsync(t);
            } catch (e) {
              C.m.warning(r.formatMessage(ei.errorRenewingSubscription), {
                hasCloseButton: !0,
              });
            } finally {
              i(!1);
            }
          };
        return (0, w.jsx)("div", {
          className: "bg-token-main-surface-secondary",
          children: (0, w.jsxs)("div", {
            className:
              "mx-auto flex w-full max-w-5xl items-center justify-between px-2 py-4 md:px-6 lg:px-10 lg:py-6",
            children: [
              (0, w.jsxs)("div", {
                className: "mx-2 flex-grow md:mx-4",
                children: [
                  (0, w.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      (0, w.jsx)(p.FE, {
                        className: "mr-4 hidden text-orange-500 md:block",
                      }),
                      (0, w.jsx)("p", {
                        className: "text-lg font-semibold",
                        children: (0, w.jsx)(
                          I.Z,
                          es({}, ei.workspaceWillBeDeactivated)
                        ),
                      }),
                    ],
                  }),
                  null != a.active_until &&
                    (0, w.jsx)("p", {
                      className: "md:ml-8",
                      children: (0, w.jsx)(
                        I.Z,
                        es(
                          es({}, ei.retainAccessUntil),
                          {},
                          { values: { expiryDate: new Date(a.active_until) } }
                        )
                      ),
                    }),
                ],
              }),
              o &&
                (0, w.jsx)(ee.z, {
                  color: "primary",
                  onClick: l,
                  loading: n,
                  children: (0, w.jsx)(I.Z, es({}, ei.reactivateBtn)),
                }),
            ],
          }),
        });
      }
      let ei = (0, y.vU)({
        retainAccessUntil: {
          id: "adminPage.retainAccessUntil",
          defaultMessage:
            "You will retain access to the workspace until the end of your billing cycle on {expiryDate, date, long}.",
        },
        workspaceWillBeDeactivated: {
          id: "adminPage.workspaceWillBeDeactivated",
          defaultMessage: "This workspace will be deactivated.",
        },
        reactivateBtn: {
          id: "adminPage.reactivateBtn",
          defaultMessage: "Reactivate",
        },
        errorRenewingSubscription: {
          id: "adminPage.errorRenewingSubscription",
          defaultMessage: "There was an error reactivating your subscription.",
        },
      });
      function eo(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function el(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eo(Object(a), !0).forEach(function (t) {
                (0, c.Z)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : eo(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
        }
        return e;
      }
      function ec(e) {
        let { route: t, icon: a, name: r, upsellEnterprise: s = !1 } = e,
          n = (0, H.useRouter)();
        return s
          ? (0, w.jsx)(K.u, {
              label: (0, w.jsx)(I.Z, el({}, ej.availableForEnterprise)),
              side: "right",
              children: (0, w.jsxs)(X.ZB, {
                $as: "button",
                className: (0, $.default)(
                  "w-full rounded text-left",
                  "hover:bg-token-sidebar-surface-secondary"
                ),
                children: [
                  (0, w.jsx)(V.UIZ, {
                    className: "icon-sm shrink-0 text-token-text-secondary",
                  }),
                  (0, w.jsx)("span", {
                    className: "text-token-text-secondary",
                    children: (0, w.jsx)(I.Z, el({}, r)),
                  }),
                ],
              }),
            })
          : (0, w.jsxs)(X.ZB, {
              $as: "button",
              className: (0, $.default)(
                "w-full rounded text-left hover:bg-token-sidebar-surface-secondary",
                n.route === t && "bg-token-sidebar-surface-secondary"
              ),
              onClick: (e) => {
                n.push(t), e.stopPropagation();
              },
              children: [a, (0, w.jsx)(I.Z, el({}, r))],
            });
      }
      function ed(e) {
        let { workspace: t, hasAdminPrivileges: a, hasOwnerPrivileges: r } = e,
          s = (0, H.useRouter)(),
          n = (0, j.useCallback)(() => {
            s.push("/");
          }, [s]),
          i = (0, Q.ec)(Q.F_.isEnterprisePlan),
          o = (0, J.sB)(J.tz.WorkspaceGroupsSettings).value;
        return (0, w.jsxs)("nav", {
          className: "p-2",
          children: [
            (0, w.jsx)("div", {
              className: "mb-1 flex flex-row gap-2",
              children: (0, w.jsxs)(x.MP, {
                onClick: n,
                children: [
                  (0, w.jsx)(V.Ao2, { className: "icon-sm" }),
                  (0, w.jsx)(I.Z, el({}, ej.backToChat)),
                ],
              }),
            }),
            (0, w.jsxs)("div", {
              className: "flex flex-col gap-2 py-2",
              children: [
                (0, w.jsxs)("div", {
                  className: "flex flex-col gap-2 rounded px-2 py-2 ".concat(
                    r
                      ? "cursor-pointer hover:bg-token-main-surface-secondary"
                      : ""
                  ),
                  onClick: () => {
                    r && U.vm.openModal(U.B.WorkspaceAppearance);
                  },
                  children: [
                    (0, w.jsx)(u.B0, {
                      size: "large",
                      src: null == t ? void 0 : t.profilePictureUrl,
                    }),
                    (0, w.jsxs)("div", {
                      className: "align-center flex flex-row",
                      children: [
                        (0, w.jsx)("h2", {
                          className:
                            "flex-1 text-lg text-token-text-primary dark:text-white",
                          children: null == t ? void 0 : t.name,
                        }),
                        r
                          ? (0, w.jsx)("div", {
                              className:
                                "my-auto h-4 flex-initial align-middle dark:text-white",
                              children: (0, w.jsx)(p.Jo, {
                                className: "h:opacity-100 opacity-70",
                              }),
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
                (0, w.jsx)(ec, {
                  route: "/admin",
                  icon: (0, w.jsx)(p.yj, { className: "icon-sm" }),
                  name: ej.membersPageTitle,
                }),
                i &&
                  a &&
                  o &&
                  (0, w.jsx)(ec, {
                    route: "/admin/groups",
                    icon: (0, w.jsx)(p.ww, { className: "icon-sm" }),
                    upsellEnterprise: !i,
                    name: (0, y.Em)({ id: "aecR1i", defaultMessage: "Groups" }),
                  }),
                r &&
                  (0, w.jsx)(ec, {
                    route: "/admin/billing",
                    icon: (0, w.jsx)(p.L2, { className: "icon-sm" }),
                    name: ej.billing,
                  }),
                r &&
                  (0, w.jsx)(ec, {
                    route: "/admin/gpts",
                    icon: (0, w.jsx)(p.fr, { className: "icon-sm" }),
                    name: ej.gpts,
                  }),
                r &&
                  (0, w.jsx)(ec, {
                    route: "/admin/settings",
                    icon: (0, w.jsx)(p.O4, { className: "icon-sm" }),
                    name: ej.settings,
                  }),
                !i &&
                  (0, w.jsx)("span", {
                    className: "mx-3 border-t border-y-token-border-medium",
                  }),
                !i &&
                  o &&
                  (0, w.jsx)(ec, {
                    route: "/admin/groups",
                    icon: (0, w.jsx)(p.ww, { className: "icon-sm" }),
                    upsellEnterprise: !i,
                    name: (0, y.Em)({ id: "aecR1i", defaultMessage: "Groups" }),
                  }),
                a &&
                  (0, w.jsx)(ec, {
                    route: "/admin/analytics",
                    icon: (0, w.jsx)(p.Ie, { className: "icon-sm" }),
                    name: ej.analytics,
                    upsellEnterprise: !i,
                  }),
                r &&
                  (0, w.jsx)(ec, {
                    route: "/admin/identity",
                    upsellEnterprise: !i,
                    icon: (0, w.jsx)(p.Tg, { className: "icon-sm" }),
                    name: ej.identity,
                  }),
              ],
            }),
          ],
        });
      }
      function eu(e) {
        var t;
        let {
            mobilePageTitle: a,
            requireAdminPrivileges: r = !1,
            requireOwnerPrivileges: s = !1,
            children: n,
          } = e,
          i = (0, Q.ec)((e) => e.currentWorkspace),
          o = (0, H.useRouter)(),
          l =
            null != i
              ? (t = i.role) === d.r3.ADMIN || t === d.r3.OWNER
              : void 0,
          c = null != i ? i.role === d.r3.OWNER : void 0;
        return ((0, j.useEffect)(() => {
          r && !1 === l && o.push("/admin"), s && !1 === c && o.push("/admin");
        }, [r, l, o, s, c]),
        null == (0, q.t)())
          ? null
          : (0, w.jsxs)(w.Fragment, {
              children: [
                (0, w.jsx)(f.Z, {
                  mobileHeaderContent: a,
                  sidebar: (0, w.jsx)(ed, {
                    workspace: null != i ? i : void 0,
                    hasAdminPrivileges: l,
                    hasOwnerPrivileges: c,
                  }),
                  children: n,
                }),
                null == i ? null : (0, w.jsx)(T, { workspace: i }),
              ],
            });
      }
      let ep = Y.Z.div(
          r ||
            (r = (0, l.Z)([
              "border-b border-token-main-surface-tertiary hidden md:block py-6 lg:py-10",
            ]))
        ),
        em = Y.Z.h2(
          s ||
            (s = (0, l.Z)(["mx-auto w-full max-w-4xl px-2 md:px-6 lg:px-10"]))
        ),
        ef = (0, Y.Z)(em)(
          n ||
            (n = (0, l.Z)(["font-normal text-base text-token-text-secondary"]))
        );
      function ex(e) {
        let { title: t, subtitle: a } = e,
          { data: r } = (0, et.ZP)(),
          s = (0, q.t)(),
          n = s && r && r.plan_type === d.D8.TEAM && !r.will_renew;
        return (0, w.jsxs)(w.Fragment, {
          children: [
            n && (0, w.jsx)(en, { accountId: s.id, subscription: r }),
            (0, w.jsxs)(ep, {
              children: [
                (0, w.jsx)(em, { children: t }),
                a && (0, w.jsx)(ef, { children: a }),
              ],
            }),
          ],
        });
      }
      Y.Z.p(i || (i = (0, l.Z)(["text-sm text-token-text-tertiary"])));
      let eg = Y.Z.div(
        o || (o = (0, l.Z)(["max-w-4xl mx-auto w-full px-2 md:px-6 lg:px-10"]))
      );
      function eb(e) {
        let { children: t, showSpinner: a } = e,
          r = (0, q.t)(),
          s = (0, Q.ec)((e) => e.currentWorkspace),
          n = !r || a;
        return (0, w.jsxs)(eg, {
          children: [
            n &&
              (0, w.jsx)("div", {
                className: "flex min-h-[80vh] items-center justify-center",
                children: (0, w.jsx)(m.Z, {}),
              }),
            !n &&
              !s &&
              (0, w.jsx)("div", {
                className: "flex min-h-[80vh] items-center justify-center",
                children: (0, w.jsx)(I.Z, el({}, ej.workspaceNotFound)),
              }),
            !n && s && t,
          ],
        });
      }
      let ej = (0, y.vU)({
        workspaceNotFound: {
          id: "adminPage.workspaceNotFound",
          defaultMessage: "Workspace not found",
        },
        backToChat: {
          id: "adminPage.backToChat",
          defaultMessage: "Back to chat",
        },
        membersPageTitle: {
          id: "adminPage.membersPageTitle",
          defaultMessage: "Members",
        },
        analytics: { id: "adminPage.analytics", defaultMessage: "Analytics" },
        billing: { id: "adminPage.billing.1", defaultMessage: "Billing" },
        gpts: { id: "adminPage.gpts", defaultMessage: "GPTs" },
        settings: { id: "adminPage.Settings", defaultMessage: "Settings" },
        identity: {
          id: "adminPage.identity.0",
          defaultMessage: "Identity & provisioning",
        },
        availableForEnterprise: {
          id: "adminPage.availableForEnterprise",
          defaultMessage: "Available for Enterprise plan",
        },
      });
    },
    82734: function (e, t, a) {
      a.d(t, {
        St: function () {
          return p;
        },
        ZP: function () {
          return u;
        },
        wK: function () {
          return m;
        },
      });
      var r = a(13038),
        s = a(78e3),
        n = a(61236),
        i = a(25494),
        o = a(92442),
        l = a(9063),
        c = a(68498),
        d = a(65455);
      function u() {
        var e;
        let t = (0, s.ec)((e) => e.currentWorkspace),
          a = (0, s.ec)(s.F_.isEnterprisePlan),
          i = null == t ? void 0 : t.id,
          o =
            null !== (e = null == t ? void 0 : t.organizationId) && void 0 !== e
              ? e
              : void 0;
        return (function (e) {
          let t = (0, l.Z)();
          return (0, n.a)({
            queryKey: ["organization-subscription", e],
            queryFn: async () =>
              await r.Z.getSubscription(e).catch((e) => {
                d.m.danger(
                  t.formatMessage(f.subscriptionLoadError, { error: e.message })
                );
              }),
            enabled: null != e.account_id || null != e.organization_id,
          });
        })(a ? { organization_id: o } : { account_id: i });
      }
      function p(e) {
        return (0, i.D)({
          mutationFn: async (e) => r.Z.cancelSubscription(e),
          onSuccess: () => {
            o.E.invalidateQueries({
              queryKey: ["organization-subscription", { account_id: e }],
            });
          },
        });
      }
      function m(e) {
        return (0, i.D)({
          mutationFn: async (e) => r.Z.renewSubscription(e),
          onSuccess: () => {
            o.E.invalidateQueries({
              queryKey: ["organization-subscription", { account_id: e }],
            });
          },
        });
      }
      let f = (0, c.vU)({
        subscriptionLoadError: {
          id: "useSubscriptionData.subscriptionLoadError",
          defaultMessage:
            "Failed to load subscription: {error}. Contact support@openai.com if error persists.",
        },
      });
    },
  },
]);
//# sourceMappingURL=9112-1980f9b39d8fd726.js.map
