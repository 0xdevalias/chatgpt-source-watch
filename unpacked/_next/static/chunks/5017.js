"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5017],
  {
    35017: function (e, t, r) {
      r.d(t, {
        hb: function () {
          return ej;
        },
        yG: function () {
          return eb;
        },
        ZP: function () {
          return em;
        },
      });
      var n,
        a,
        i,
        s,
        o,
        c = r(90038),
        l = r(36112),
        u = r(82256),
        d = r(90387),
        p = r(50134),
        f = r(4399),
        m = r.n(f),
        x = r(41845),
        g = r(55161),
        v = r(14972),
        b = r(70079),
        h = r(76483),
        j = r(70671),
        w = r(94968),
        y = r(35250);
      function k(e, t) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : k(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function O(e) {
        var t = e.onFileChange,
          r = e.className,
          n = e.message,
          a = e.mimeTypes,
          i = (0, j.Z)(),
          s = null != n ? n : i.formatMessage(N.helpText),
          o = (0, h.uI)(
            P(
              {
                disabled: !1,
                noClick: !0,
                onDropAccepted: function (e) {
                  if (e.length > 0) {
                    var r = e[0];
                    a && a.includes(r.type) && t(r);
                  }
                },
                onDropRejected: function () {
                  return null;
                },
                multiple: !1,
                maxSize: x.xC,
              },
              (0, g.Z8)(a)
            )
          ),
          c = o.open,
          l = o.getRootProps,
          u = o.getInputProps,
          d = o.isDragActive;
        return (0, y.jsxs)(
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
                  (null != r ? r : ""),
              },
              l()
            ),
            {},
            {
              children: [
                (0, y.jsx)("input", P({}, u())),
                (0, y.jsx)("div", {
                  className: "text-center dark:text-white",
                  children: (0, y.jsx)("div", {
                    className: "inline-block",
                    children: (0, y.jsx)(v.tC, {}),
                  }),
                }),
                (0, y.jsx)("div", {
                  className: "text-center text-sm",
                  children: s,
                }),
                (0, y.jsx)("div", {
                  className:
                    "cursor-pointer text-center text-sm font-bold text-green-600",
                  onClick: function () {
                    c();
                  },
                  children: i.formatMessage(N.openFilePicker),
                }),
              ],
            }
          )
        );
      }
      var N = (0, w.vU)({
          helpText: {
            id: "FileUploadBox.helpText",
            defaultMessage: "Drop file here to upload",
          },
          openFilePicker: {
            id: "FileUploadBox.openFilePicker",
            defaultMessage: "Browse files",
          },
        }),
        Z = r(68919),
        M = r(3554),
        D = r(21120),
        E = r(7525),
        A = r(31609),
        S = r(998),
        F = r(44247),
        C = r(4748),
        U = r(95412),
        B = r(18008),
        I = r(82473),
        W = r(25494),
        _ = r(32004);
      function T(e, t) {
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
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : T(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function z(e) {
        var t,
          r,
          n,
          a,
          i,
          s = e.workspace,
          o = (0, b.useState)(
            null !== (a = null == s ? void 0 : s.name) && void 0 !== a ? a : ""
          ),
          c = o[0],
          l = o[1],
          f = (0, b.useState)(!1),
          x = f[0],
          v = f[1];
        !x &&
          s &&
          (v(!0),
          "" == c &&
            l(
              null !== (i = null == s ? void 0 : s.name) && void 0 !== i
                ? i
                : ""
            ));
        var h = (0, b.useState)(s.profilePictureUrl),
          w = h[0],
          k = h[1],
          P = (0, b.useState)(s.profilePictureId),
          N = P[0],
          T = P[1],
          z = (0, B.EV)(B.B.WorkspaceAppearance),
          q = (0, j.Z)(),
          X = (0, b.useState)(void 0),
          G = X[0],
          Q = X[1];
        function J() {
          return (J = (0, p.Z)(
            m().mark(function e(t) {
              var r, n;
              return m().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        (0, g.WI)(t, 2 * d.EF.workspaceAvatarPreview)
                      );
                    case 2:
                      (r = e.sent),
                        Q({
                          tempId: (n = (0, A.W7)(r)),
                          file: r,
                          status: E.X.Uploading,
                          progress: 1,
                          fileId: null,
                          cdnUrl: null,
                        }),
                        (0, A.lU)(n, r, q, u.Ei.ProfilePicture, {
                          onFileCreated: function (e, t, r) {
                            Q(function (n) {
                              return "initial" !== n &&
                                (null == n ? void 0 : n.tempId) === e &&
                                n.status === E.X.Uploading
                                ? R(
                                    R({}, n),
                                    {},
                                    { progress: 10, fileId: t, cdnUrl: r }
                                  )
                                : n;
                            });
                          },
                          onFileUploadProgress: function (e, t) {
                            Q(function (r) {
                              return "initial" !== r &&
                                (null == r ? void 0 : r.tempId) === e &&
                                r.status === E.X.Uploading
                                ? R(R({}, r), {}, { progress: t })
                                : r;
                            });
                          },
                          onFileUploaded: function (e, t, r) {
                            Q(function (t) {
                              return "initial" !== t &&
                                t &&
                                t.cdnUrl &&
                                t.tempId === e
                                ? (U.Z.getFileDownloadLink(t.fileId).then(
                                    function (e) {
                                      e.status === u.KF.Success &&
                                        (T(t.fileId), k(e.download_url));
                                    }
                                  ),
                                  R(
                                    R({}, t),
                                    {},
                                    {
                                      status: E.X.Ready,
                                      progress: 100,
                                      fileSpec: R(
                                        {
                                          name: t.file.name,
                                          id: t.fileId,
                                          size: t.file.size,
                                        },
                                        null != r ? r : {}
                                      ),
                                    }
                                  ))
                                : t;
                            });
                          },
                          onError: function (e) {
                            Q(function (t) {
                              if (
                                "initial" !== t &&
                                (null == t ? void 0 : t.tempId) === e
                              ) {
                                T(void 0), k(void 0), et(null);
                                return;
                              }
                              return t;
                            });
                          },
                        });
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        var $ =
            ((t = s.id),
            (r = (0, I.NL)()),
            (n = (0, j.Z)()),
            (0, W.D)({
              mutationFn: function (e) {
                var r = e.name,
                  a = e.profilePictureId,
                  i = e.profilePictureUrl;
                return U.Z.patchWorkspace({
                  workspaceId: t,
                  name: r,
                  profile_picture_id: a,
                  profile_picture_url: i,
                }).catch(function (e) {
                  C.m.danger(
                    n.formatMessage(K.saveError, { error: e.message })
                  );
                });
              },
              onSuccess: function () {
                r.invalidateQueries({ queryKey: ["account-status"] });
              },
            })),
          H = (0, y.jsx)(M.ZP.Button, {
            color: "primary",
            disabled:
              ("initial" !== G && void 0 !== G && G.status !== E.X.Ready) ||
              ("initial" !== G &&
                void 0 !== G &&
                G.status === E.X.Ready &&
                !w) ||
              $.isPending ||
              0 === c.trim().length,
            onClick: (0, p.Z)(
              m().mark(function e() {
                return m().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        $.mutate({
                          name: c,
                          profilePictureId: N,
                          profilePictureUrl: w,
                        }),
                          B.vm.closeModal(B.B.WorkspaceAppearance);
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            title: q.formatMessage(K.modalSubmit),
          }),
          V = (0, y.jsx)(M.ZP.Button, {
            onClick: function () {
              Q(void 0),
                T(s.profilePictureId),
                k(s.profilePictureUrl),
                B.vm.closeModal(B.B.WorkspaceAppearance);
            },
            title: q.formatMessage(K.modalCancel),
          }),
          Y = (0, b.useState)(null),
          ee = Y[0],
          et = Y[1];
        return (
          (0, b.useEffect)(
            function () {
              if ("initial" !== G && void 0 != G && null == ee) {
                var e = new FileReader();
                e.addEventListener("load", function () {
                  var t = e.result;
                  "string" == typeof t && et(t);
                }),
                  e.readAsDataURL(G.file);
              }
            },
            [G, ee]
          ),
          (0, y.jsxs)(D.Z, {
            isOpen: z,
            onClose: function () {
              return B.vm.closeModal(B.B.WorkspaceAppearance);
            },
            showCloseButton: !0,
            primaryButton: H,
            secondaryButton: V,
            type: "danger",
            title: q.formatMessage(K.modalTitle),
            children: [
              (0, y.jsxs)("div", {
                className: "mb-4 flex-wrap",
                children: [
                  (0, y.jsx)("label", {
                    htmlFor: "workspace-name",
                    className: "block pb-1 font-medium text-token-text-primary",
                    children: (0, y.jsx)(_.Z, R({}, K.workspaceName)),
                  }),
                  (0, y.jsx)("p", {
                    className: "font-base text-sm text-token-text-secondary",
                    children: (0, y.jsx)(
                      _.Z,
                      R({}, K.workspaceNameDescription)
                    ),
                  }),
                ],
              }),
              (0, y.jsx)("div", {
                className: "mb-4",
                children: (0, y.jsx)(S.Z, {
                  type: "text",
                  name: "workspace-name",
                  value: c,
                  onChange: function (e) {
                    return l(e.target.value);
                  },
                  maxLength: 64,
                }),
              }),
              (0, y.jsxs)("div", {
                className: "mb-4 flex-wrap",
                children: [
                  (0, y.jsx)("label", {
                    htmlFor: "workspace-avatar",
                    className: "block pb-1 font-medium text-token-text-primary",
                    children: (0, y.jsx)(_.Z, R({}, K.workspaceAvatar)),
                  }),
                  (0, y.jsx)("p", {
                    className: "font-base text-sm text-token-text-secondary",
                    children: q.formatMessage(K.workspaceAvatarDescription, {
                      size: 2 * d.EF.workspaceAvatarPreview,
                    }),
                  }),
                ],
              }),
              (0, y.jsxs)("div", {
                className: "mb-4 flex-wrap text-center",
                children: [
                  w
                    ? (0, y.jsxs)("div", {
                        className: "relative mb-3 inline-flex",
                        children: [
                          (0, y.jsx)(d.B0, {
                            src: w,
                            size: "workspaceAvatarPreview",
                          }),
                          (0, y.jsx)("div", {
                            className: "absolute -right-1 -top-1",
                            children: (0, y.jsx)(L, {
                              onClick: function () {
                                T(null), k(null), Q(void 0), et(null);
                              },
                            }),
                          }),
                        ],
                      })
                    : void 0 != G && "initial" !== G && ee
                      ? (0, y.jsx)("div", {
                          className: "flex flex-col justify-center text-center",
                          children: (0, y.jsxs)("div", {
                            className: "relative mb-3 text-center",
                            children: [
                              (0, y.jsx)(d.B0, {
                                src: URL.createObjectURL(G.file),
                                size: "workspaceAvatarPreview",
                              }),
                              (0, y.jsx)("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-center text-white",
                                children: (0, y.jsx)(Z.Z, {
                                  percentage: G.progress,
                                  className: "h-6 w-6",
                                }),
                              }),
                            ],
                          }),
                        })
                      : (0, y.jsx)(O, {
                          onFileChange: function (e) {
                            !(function (e) {
                              J.apply(this, arguments);
                            })(e);
                          },
                          mimeTypes: g.KL,
                        }),
                  (0, y.jsx)(F.Z, {
                    children: q.formatMessage(K.propagationWarning),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function L(e) {
        var t = e.onClick;
        return (0, y.jsx)("div", {
          className:
            " flex h-6 w-6 cursor-pointer flex-row flex-wrap content-center justify-center rounded-full border-2 border-white bg-black text-white",
          onClick: t,
          children: (0, y.jsx)(v.Ls, { className: "h-3 w-3" }),
        });
      }
      var K = (0, w.vU)({
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
        }),
        q = r(90166),
        X = r(83071),
        G = r(63866),
        Q = r(35212),
        J = r(88140),
        $ = r(7144),
        H = r(73582),
        V = r(19841),
        Y = r(10721),
        ee = r(1454),
        et = r(21389),
        er = r(86561),
        en = r(91559),
        ea = r(23232),
        ei = r(218);
      function es(e, t) {
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
      function eo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? es(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : es(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function ec(e) {
        var t,
          r = e.accountId,
          n = e.subscription,
          a = (0, j.Z)(),
          i = (0, ea.wK)(r),
          s = (0, b.useState)(!1),
          o = s[0],
          c = s[1],
          l = (0, ei.Gk)(r),
          u =
            ((t = (0, p.Z)(
              m().mark(function e() {
                return m().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            c(!0), (e.prev = 1), (e.next = 4), i.mutateAsync(r)
                          );
                        case 4:
                          e.next = 9;
                          break;
                        case 6:
                          (e.prev = 6),
                            (e.t0 = e.catch(1)),
                            C.m.warning(
                              a.formatMessage(el.errorRenewingSubscription),
                              { hasCloseButton: !0 }
                            );
                        case 9:
                          return (e.prev = 9), c(!1), e.finish(9);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 6, 9, 12]]
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            });
        return (0, y.jsx)("div", {
          className: "bg-token-main-surface-secondary",
          children: (0, y.jsxs)("div", {
            className:
              "mx-auto flex w-full max-w-5xl items-center justify-between px-2 py-4 md:px-6 lg:px-10 lg:py-6",
            children: [
              (0, y.jsxs)("div", {
                className: "mx-2 flex-grow md:mx-4",
                children: [
                  (0, y.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      (0, y.jsx)(er.FE, {
                        className: "mr-4 hidden text-orange-500 md:block",
                      }),
                      (0, y.jsx)("p", {
                        className: "text-lg font-semibold",
                        children: (0, y.jsx)(
                          _.Z,
                          eo({}, el.workspaceWillBeDeactivated)
                        ),
                      }),
                    ],
                  }),
                  null != n.active_until &&
                    (0, y.jsx)("p", {
                      className: "md:ml-8",
                      children: (0, y.jsx)(
                        _.Z,
                        eo(
                          eo({}, el.retainAccessUntil),
                          {},
                          { values: { expiryDate: new Date(n.active_until) } }
                        )
                      ),
                    }),
                ],
              }),
              l &&
                (0, y.jsx)(en.z, {
                  color: "primary",
                  onClick: u,
                  loading: o,
                  children: (0, y.jsx)(_.Z, eo({}, el.reactivateBtn)),
                }),
            ],
          }),
        });
      }
      var el = (0, w.vU)({
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
      function eu(e, t) {
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
      function ed(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eu(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eu(Object(r)).forEach(function (t) {
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
        var t = e.route,
          r = e.icon,
          n = e.name,
          a = e.upsellEnterprise,
          i = (0, Y.useRouter)();
        return void 0 !== a && a
          ? (0, y.jsx)(q.u, {
              label: (0, y.jsx)(_.Z, ed({}, ew.availableForEnterprise)),
              side: "right",
              children: (0, y.jsxs)(X.ZB, {
                $as: "button",
                className: (0, V.default)(
                  "w-full rounded text-left",
                  "hover:bg-token-sidebar-surface-secondary"
                ),
                children: [
                  (0, y.jsx)(ee.UIZ, {
                    className: "icon-sm shrink-0 text-token-text-secondary",
                  }),
                  (0, y.jsx)("span", {
                    className: "text-token-text-secondary",
                    children: (0, y.jsx)(_.Z, ed({}, n)),
                  }),
                ],
              }),
            })
          : (0, y.jsxs)(X.ZB, {
              $as: "button",
              className: (0, V.default)(
                "w-full rounded text-left hover:bg-token-sidebar-surface-secondary",
                i.route === t && "bg-token-sidebar-surface-secondary"
              ),
              onClick: function (e) {
                i.push(t), e.stopPropagation();
              },
              children: [r, (0, y.jsx)(_.Z, ed({}, n))],
            });
      }
      function ef(e) {
        var t = e.workspace,
          r = e.hasAdminPrivileges,
          n = e.hasOwnerPrivileges,
          a = (0, Y.useRouter)(),
          i = (0, b.useCallback)(
            function () {
              a.push("/");
            },
            [a]
          ),
          s = (0, H.ec)(H.F_.isEnterprisePlan);
        return (0, y.jsxs)("nav", {
          className: "p-2",
          children: [
            (0, y.jsx)("div", {
              className: "mb-1 flex flex-row gap-2",
              children: (0, y.jsxs)(J.MP, {
                onClick: i,
                children: [
                  (0, y.jsx)(ee.Ao2, { className: "icon-sm" }),
                  (0, y.jsx)(_.Z, ed({}, ew.backToChat)),
                ],
              }),
            }),
            (0, y.jsxs)("div", {
              className: "flex flex-col gap-2 py-2",
              children: [
                (0, y.jsxs)("div", {
                  className: "flex flex-col gap-2 rounded px-2 py-2 ".concat(
                    n
                      ? "cursor-pointer hover:bg-token-main-surface-secondary"
                      : ""
                  ),
                  onClick: function () {
                    n && B.vm.openModal(B.B.WorkspaceAppearance);
                  },
                  children: [
                    (0, y.jsx)(d.B0, {
                      size: "large",
                      src: null == t ? void 0 : t.profilePictureUrl,
                    }),
                    (0, y.jsxs)("div", {
                      className: "align-center flex flex-row",
                      children: [
                        (0, y.jsx)("h2", {
                          className:
                            "flex-1 text-lg text-token-text-primary dark:text-white",
                          children: null == t ? void 0 : t.name,
                        }),
                        n
                          ? (0, y.jsx)("div", {
                              className:
                                "my-auto h-4 flex-initial align-middle dark:text-white",
                              children: (0, y.jsx)(v.Jo, {
                                className: "h:opacity-100 opacity-70",
                              }),
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
                (0, y.jsx)(ep, {
                  route: "/admin",
                  icon: (0, y.jsx)(v.yj, { className: "icon-sm" }),
                  name: ew.membersPageTitle,
                }),
                n &&
                  (0, y.jsx)(ep, {
                    route: "/admin/billing",
                    icon: (0, y.jsx)(v.L2, { className: "icon-sm" }),
                    name: ew.billing,
                  }),
                n &&
                  (0, y.jsx)(ep, {
                    route: "/admin/gpts",
                    icon: (0, y.jsx)(v.fr, { className: "icon-sm" }),
                    name: ew.gpts,
                  }),
                n &&
                  (0, y.jsx)(ep, {
                    route: "/admin/settings",
                    icon: (0, y.jsx)(v.O4, { className: "icon-sm" }),
                    name: ew.settings,
                  }),
                !s &&
                  (0, y.jsx)("span", {
                    className: "mx-3 border-t border-y-token-border-medium",
                  }),
                r &&
                  (0, y.jsx)(ep, {
                    route: "/admin/analytics",
                    icon: (0, y.jsx)(v.Ie, { className: "icon-sm" }),
                    name: ew.analytics,
                    upsellEnterprise: !s,
                  }),
                n &&
                  (0, y.jsx)(ep, {
                    route: "/admin/identity",
                    upsellEnterprise: !s,
                    icon: (0, y.jsx)(v.Tg, { className: "icon-sm" }),
                    name: ew.identity,
                  }),
              ],
            }),
          ],
        });
      }
      function em(e) {
        var t,
          r = e.mobilePageTitle,
          n = e.requireAdminPrivileges,
          a = void 0 !== n && n,
          i = e.requireOwnerPrivileges,
          s = void 0 !== i && i,
          o = e.children,
          c = (0, H.ec)(function (e) {
            return e.currentWorkspace;
          }),
          l = (0, Y.useRouter)(),
          d =
            null != c
              ? (t = c.role) === u.r3.ADMIN || t === u.r3.OWNER
              : void 0,
          p = null != c ? c.role === u.r3.OWNER : void 0;
        return ((0, b.useEffect)(
          function () {
            a && !1 === d && l.push("/admin"),
              s && !1 === p && l.push("/admin");
          },
          [a, d, l, s, p]
        ),
        null == (0, $.t)())
          ? null
          : (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(Q.Z, {
                  mobileHeaderContent: r,
                  sidebar: (0, y.jsx)(ef, {
                    workspace: null != c ? c : void 0,
                    hasAdminPrivileges: d,
                    hasOwnerPrivileges: p,
                  }),
                  children: o,
                }),
                null == c ? null : (0, y.jsx)(z, { workspace: c }),
              ],
            });
      }
      var ex = et.Z.div(
          n ||
            (n = (0, c.Z)([
              "border-b border-token-main-surface-tertiary hidden md:block py-6 lg:py-10",
            ]))
        ),
        eg = et.Z.h2(
          a ||
            (a = (0, c.Z)(["mx-auto w-full max-w-4xl px-2 md:px-6 lg:px-10"]))
        ),
        ev = (0, et.Z)(eg)(
          i ||
            (i = (0, c.Z)(["font-normal text-base text-token-text-secondary"]))
        );
      function eb(e) {
        var t = e.title,
          r = e.subtitle,
          n = (0, ea.ZP)().data,
          a = (0, $.t)(),
          i = a && n && n.plan_type === u.D8.TEAM && !n.will_renew;
        return (0, y.jsxs)(y.Fragment, {
          children: [
            i && (0, y.jsx)(ec, { accountId: a.id, subscription: n }),
            (0, y.jsxs)(ex, {
              children: [
                (0, y.jsx)(eg, { children: t }),
                r && (0, y.jsx)(ev, { children: r }),
              ],
            }),
          ],
        });
      }
      et.Z.p(s || (s = (0, c.Z)(["text-sm text-token-text-tertiary"])));
      var eh = et.Z.div(
        o || (o = (0, c.Z)(["max-w-4xl mx-auto w-full px-2 md:px-6 lg:px-10"]))
      );
      function ej(e) {
        var t = e.children,
          r = e.showSpinner,
          n = (0, $.t)(),
          a = (0, H.ec)(function (e) {
            return e.currentWorkspace;
          }),
          i = !n || r;
        return (0, y.jsxs)(eh, {
          children: [
            i &&
              (0, y.jsx)("div", {
                className: "flex min-h-[80vh] items-center justify-center",
                children: (0, y.jsx)(G.Z, {}),
              }),
            !i &&
              !a &&
              (0, y.jsx)("div", {
                className: "flex min-h-[80vh] items-center justify-center",
                children: (0, y.jsx)(_.Z, ed({}, ew.workspaceNotFound)),
              }),
            !i && a && t,
          ],
        });
      }
      var ew = (0, w.vU)({
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
    23232: function (e, t, r) {
      r.d(t, {
        St: function () {
          return x;
        },
        ZP: function () {
          return m;
        },
        wK: function () {
          return g;
        },
      });
      var n = r(50134),
        a = r(4399),
        i = r.n(a),
        s = r(95412),
        o = r(73582),
        c = r(61236),
        l = r(25494),
        u = r(13135),
        d = r(70671),
        p = r(94968),
        f = r(4748);
      function m() {
        var e,
          t,
          r,
          a,
          l = (0, o.ec)(function (e) {
            return e.currentWorkspace;
          }),
          u = (0, o.ec)(o.F_.isEnterprisePlan),
          p = null == l ? void 0 : l.id,
          m =
            null !== (a = null == l ? void 0 : l.organizationId) && void 0 !== a
              ? a
              : void 0;
        return (
          (e = u ? { organization_id: m } : { account_id: p }),
          (t = (0, d.Z)()),
          (0, c.a)({
            queryKey: ["organization-subscription", e],
            queryFn:
              ((r = (0, n.Z)(
                i().mark(function r() {
                  return i().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.next = 2),
                            s.Z.getSubscription(e).catch(function (e) {
                              f.m.danger(
                                t.formatMessage(v.subscriptionLoadError, {
                                  error: e.message,
                                })
                              );
                            })
                          );
                        case 2:
                          return r.abrupt("return", r.sent);
                        case 3:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                })
              )),
              function () {
                return r.apply(this, arguments);
              }),
            enabled: null != e.account_id || null != e.organization_id,
          })
        );
      }
      function x(e) {
        var t;
        return (0, l.D)({
          mutationFn:
            ((t = (0, n.Z)(
              i().mark(function e(t) {
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt("return", s.Z.cancelSubscription(t));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return t.apply(this, arguments);
            }),
          onSuccess: function () {
            u.E.invalidateQueries({
              queryKey: ["organization-subscription", { account_id: e }],
            });
          },
        });
      }
      function g(e) {
        var t;
        return (0, l.D)({
          mutationFn:
            ((t = (0, n.Z)(
              i().mark(function e(t) {
                return i().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt("return", s.Z.renewSubscription(t));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function (e) {
              return t.apply(this, arguments);
            }),
          onSuccess: function () {
            u.E.invalidateQueries({
              queryKey: ["organization-subscription", { account_id: e }],
            });
          },
        });
      }
      var v = (0, p.vU)({
        subscriptionLoadError: {
          id: "useSubscriptionData.subscriptionLoadError",
          defaultMessage:
            "Failed to load subscription: {error}. Contact support@openai.com if error persists.",
        },
      });
    },
  },
]);
//# sourceMappingURL=5017-ca2c744f862d22b1.js.map
