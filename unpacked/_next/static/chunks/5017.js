"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5017],
  {
    35017: function (e, t, r) {
      r.d(t, {
        hb: function () {
          return ek;
        },
        yG: function () {
          return ew;
        },
        ZP: function () {
          return ev;
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
        j = r(76483),
        h = r(70671),
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
          i = (0, h.Z)(),
          s = null != n ? n : i.formatMessage(N.helpText),
          o = (0, j.uI)(
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
        E = r(21120),
        A = r(7525),
        D = r(31609),
        S = r(998),
        F = r(44247),
        C = r(4748),
        U = r(32062),
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
        var j = (0, b.useState)(s.profilePictureUrl),
          w = j[0],
          k = j[1],
          P = (0, b.useState)(s.profilePictureId),
          N = P[0],
          T = P[1],
          z = (0, B.EV)(B.B.WorkspaceAppearance),
          q = (0, h.Z)(),
          X = function () {
            return B.vm.closeModal(B.B.WorkspaceAppearance);
          },
          G = (0, b.useState)(void 0),
          Q = G[0],
          J = G[1];
        function H() {
          return (H = (0, p.Z)(
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
                        J({
                          tempId: (n = (0, D.W7)(r)),
                          file: r,
                          status: A.X.Uploading,
                          progress: 1,
                          fileId: null,
                          cdnUrl: null,
                        }),
                        (0, D.lU)(n, r, q, u.Ei.ProfilePicture, {
                          onFileCreated: function (e, t, r) {
                            J(function (n) {
                              return "initial" !== n &&
                                (null == n ? void 0 : n.tempId) === e &&
                                n.status === A.X.Uploading
                                ? R(
                                    R({}, n),
                                    {},
                                    { progress: 10, fileId: t, cdnUrl: r }
                                  )
                                : n;
                            });
                          },
                          onFileUploadProgress: function (e, t) {
                            J(function (r) {
                              return "initial" !== r &&
                                (null == r ? void 0 : r.tempId) === e &&
                                r.status === A.X.Uploading
                                ? R(R({}, r), {}, { progress: t })
                                : r;
                            });
                          },
                          onFileUploaded: function (e, t) {
                            J(function (r) {
                              return "initial" !== r &&
                                r &&
                                r.cdnUrl &&
                                r.tempId === e
                                ? (U.ZP.getFileDownloadLink(r.fileId).then(
                                    function (e) {
                                      e.status === u.KF.Success &&
                                        (T(r.fileId), k(e.download_url));
                                    }
                                  ),
                                  R(
                                    R({}, r),
                                    {},
                                    {
                                      status: A.X.Ready,
                                      progress: 100,
                                      fileSpec: R(
                                        {
                                          name: r.file.name,
                                          id: r.fileId,
                                          size: r.file.size,
                                        },
                                        null != t ? t : {}
                                      ),
                                    }
                                  ))
                                : r;
                            });
                          },
                          onError: function (e) {
                            J(function (t) {
                              if (
                                "initial" !== t &&
                                (null == t ? void 0 : t.tempId) === e
                              ) {
                                T(void 0), k(void 0), er(null);
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
        var V =
            ((t = s.id),
            (r = (0, I.NL)()),
            (n = (0, h.Z)()),
            (0, W.D)({
              mutationFn: function (e) {
                var r = e.name,
                  a = e.profilePictureId,
                  i = e.profilePictureUrl;
                return U.ZP.patchWorkspace({
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
          Y = (0, y.jsx)(M.ZP.Button, {
            color: "primary",
            disabled:
              ("initial" !== Q && void 0 !== Q && Q.status !== A.X.Ready) ||
              ("initial" !== Q &&
                void 0 !== Q &&
                Q.status === A.X.Ready &&
                !w) ||
              V.isPending ||
              0 === c.trim().length,
            onClick: (0, p.Z)(
              m().mark(function e() {
                return m().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        V.mutate({
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
          $ = (0, y.jsx)(M.ZP.Button, {
            onClick: function () {
              J(void 0),
                T(s.profilePictureId),
                k(s.profilePictureUrl),
                B.vm.closeModal(B.B.WorkspaceAppearance);
            },
            title: q.formatMessage(K.modalCancel),
          }),
          ee = (0, b.useState)(null),
          et = ee[0],
          er = ee[1];
        return (
          (0, b.useEffect)(
            function () {
              if ("initial" !== Q && void 0 != Q && null == et) {
                var e = new FileReader();
                e.addEventListener("load", function () {
                  var t = e.result;
                  "string" == typeof t && er(t);
                }),
                  e.readAsDataURL(Q.file);
              }
            },
            [Q, et]
          ),
          (0, y.jsxs)(E.Z, {
            isOpen: z,
            onClose: X,
            closeButton: (0, y.jsx)(M.ZP.CloseButton, { onClose: X }),
            primaryButton: Y,
            secondaryButton: $,
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
                                T(null), k(null), J(void 0), er(null);
                              },
                            }),
                          }),
                        ],
                      })
                    : void 0 != Q && "initial" !== Q && et
                      ? (0, y.jsx)("div", {
                          className: "flex flex-col justify-center text-center",
                          children: (0, y.jsxs)("div", {
                            className: "relative mb-3 text-center",
                            children: [
                              (0, y.jsx)(d.B0, {
                                src: URL.createObjectURL(Q.file),
                                size: "workspaceAvatarPreview",
                              }),
                              (0, y.jsx)("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-center text-white",
                                children: (0, y.jsx)(Z.Z, {
                                  percentage: Q.progress,
                                  className: "h-6 w-6",
                                }),
                              }),
                            ],
                          }),
                        })
                      : (0, y.jsx)(O, {
                          onFileChange: function (e) {
                            !(function (e) {
                              H.apply(this, arguments);
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
        H = r(7144),
        V = r(73582),
        Y = r(14765),
        $ = r(19841),
        ee = r(61888),
        et = r(10721),
        er = r(1454),
        en = r(21389),
        ea = r(86561),
        ei = r(91559),
        es = r(23232),
        eo = r(218);
      function ec(e, t) {
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
      function el(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ec(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ec(Object(r)).forEach(function (t) {
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
        var t,
          r = e.accountId,
          n = e.subscription,
          a = (0, h.Z)(),
          i = (0, es.wK)(r),
          s = (0, b.useState)(!1),
          o = s[0],
          c = s[1],
          l = (0, eo.Gk)(r),
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
                              a.formatMessage(ed.errorRenewingSubscription),
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
          className: "bg-token-surface-secondary",
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
                      (0, y.jsx)(ea.FE, {
                        className: "mr-4 hidden text-orange-500 md:block",
                      }),
                      (0, y.jsx)("p", {
                        className: "text-lg font-semibold",
                        children: (0, y.jsx)(
                          _.Z,
                          el({}, ed.workspaceWillBeDeactivated)
                        ),
                      }),
                    ],
                  }),
                  null != n.active_until &&
                    (0, y.jsx)("p", {
                      className: "md:ml-8",
                      children: (0, y.jsx)(
                        _.Z,
                        el(
                          el({}, ed.retainAccessUntil),
                          {},
                          { values: { expiryDate: new Date(n.active_until) } }
                        )
                      ),
                    }),
                ],
              }),
              l &&
                (0, y.jsx)(ei.z, {
                  color: "primary",
                  onClick: u,
                  loading: o,
                  children: (0, y.jsx)(_.Z, el({}, ed.reactivateBtn)),
                }),
            ],
          }),
        });
      }
      var ed = (0, w.vU)({
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
      function ep(e, t) {
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
      function ef(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ep(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ep(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function em(e) {
        var t = e.route,
          r = e.icon,
          n = e.name,
          a = e.upsellEnterprise,
          i = void 0 !== a && a,
          s = (0, et.useRouter)(),
          o = (0, y.jsxs)(X.ZB, {
            $as: "button",
            className: (0, $.default)(
              "rounded",
              "w-full",
              s.route !== t &&
                "hover:bg-token-surface-secondary dark:hover:bg-gray-800"
            ),
            onClick: i
              ? ee.noop
              : function () {
                  s.push(t);
                },
            children: [
              i
                ? (0, y.jsx)(er.UIZ, {
                    className: (0, $.default)(
                      "icon-sm",
                      i && "text-token-text-secondary"
                    ),
                  })
                : r,
              (0, y.jsx)("span", {
                className: (0, $.default)(i && "text-token-text-secondary"),
                children: (0, y.jsx)(_.Z, ef({}, n)),
              }),
            ],
          });
        return (0, y.jsx)(q.E, {
          label: (0, y.jsx)(_.Z, ef({}, eP.availableForEnterprise)),
          side: "right",
          disabled: !i,
          children: o,
        });
      }
      function ex() {
        return (0, Y.sB)(Y.tz.WorkspaceAllowSpecific).value
          ? (0, y.jsx)(y.Fragment, {
              children: (0, y.jsx)(em, {
                route: "/admin/gpts",
                icon: (0, y.jsx)(v.fr, { className: "icon-sm" }),
                name: eP.gpts,
              }),
            })
          : null;
      }
      function eg(e) {
        var t = e.workspace,
          r = e.hasAdminPrivileges,
          n = e.hasOwnerPrivileges,
          a = (0, et.useRouter)(),
          i = (0, b.useCallback)(
            function () {
              a.push("/");
            },
            [a]
          ),
          s = (0, V.ec)(V.F_.isEnterprisePlan);
        return (0, y.jsxs)("nav", {
          className: "p-2",
          children: [
            (0, y.jsx)("div", {
              className: "mb-1 flex flex-row gap-2",
              children: (0, y.jsxs)(J.MP, {
                onClick: i,
                children: [
                  (0, y.jsx)(er.Ao2, { className: "icon-sm" }),
                  (0, y.jsx)(_.Z, ef({}, eP.backToChat)),
                ],
              }),
            }),
            (0, y.jsxs)("div", {
              className: "flex flex-col gap-2 py-2",
              children: [
                (0, y.jsxs)("div", {
                  className: "flex flex-col gap-2 rounded px-2 py-2 ".concat(
                    n ? "cursor-pointer hover:bg-token-surface-secondary" : ""
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
                (0, y.jsx)(em, {
                  route: "/admin",
                  icon: (0, y.jsx)(v.yj, { className: "icon-sm" }),
                  name: eP.membersPageTitle,
                }),
                n &&
                  (0, y.jsx)(em, {
                    route: "/admin/billing",
                    icon: (0, y.jsx)(v.L2, { className: "icon-sm" }),
                    name: eP.billing,
                  }),
                n && (0, y.jsx)(ex, {}),
                n &&
                  (0, y.jsx)(em, {
                    route: "/admin/settings",
                    icon: (0, y.jsx)(v.O4, { className: "icon-sm" }),
                    name: eP.settings,
                  }),
                !s &&
                  (0, y.jsx)("span", {
                    className: "mx-3 border-t border-y-token-border-medium",
                  }),
                r &&
                  (0, y.jsx)(em, {
                    route: "/admin/analytics",
                    icon: (0, y.jsx)(v.Ie, { className: "icon-sm" }),
                    name: eP.analytics,
                    upsellEnterprise: !s,
                  }),
                n &&
                  (0, y.jsx)(em, {
                    route: "/admin/identity",
                    upsellEnterprise: !s,
                    icon: (0, y.jsx)(v.Tg, { className: "icon-sm" }),
                    name: eP.identity,
                  }),
              ],
            }),
          ],
        });
      }
      function ev(e) {
        var t,
          r = e.mobilePageTitle,
          n = e.requireAdminPrivileges,
          a = void 0 !== n && n,
          i = e.children,
          s = (0, V.ec)(function (e) {
            return e.currentWorkspace;
          }),
          o = (0, et.useRouter)(),
          c =
            null != s
              ? (t = s.role) === u.r3.ADMIN || t === u.r3.OWNER
              : void 0,
          l = null != s ? s.role === u.r3.OWNER : void 0;
        return ((0, b.useEffect)(
          function () {
            a && !1 === c && o.push("/admin");
          },
          [a, c, o]
        ),
        null == (0, H.t)())
          ? null
          : (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(Q.Z, {
                  mobileHeaderContent: r,
                  sidebar: (0, y.jsx)(eg, {
                    workspace: null != s ? s : void 0,
                    hasAdminPrivileges: c,
                    hasOwnerPrivileges: l,
                  }),
                  children: i,
                }),
                null == s ? null : (0, y.jsx)(z, { workspace: s }),
              ],
            });
      }
      var eb = en.Z.div(
          n ||
            (n = (0, c.Z)([
              "border-b border-token-surface-tertiary hidden md:block py-6 lg:py-10",
            ]))
        ),
        ej = en.Z.h2(
          a ||
            (a = (0, c.Z)(["mx-auto w-full max-w-4xl px-2 md:px-6 lg:px-10"]))
        ),
        eh = (0, en.Z)(ej)(
          i ||
            (i = (0, c.Z)(["font-normal text-base text-token-text-secondary"]))
        );
      function ew(e) {
        var t = e.title,
          r = e.subtitle,
          n = (0, es.ZP)().data,
          a = (0, H.t)(),
          i = a && n && n.plan_type === u.D8.TEAM && !n.will_renew;
        return (0, y.jsxs)(y.Fragment, {
          children: [
            i && (0, y.jsx)(eu, { accountId: a.id, subscription: n }),
            (0, y.jsxs)(eb, {
              children: [
                (0, y.jsx)(ej, { children: t }),
                r && (0, y.jsx)(eh, { children: r }),
              ],
            }),
          ],
        });
      }
      en.Z.p(s || (s = (0, c.Z)(["text-sm text-token-text-tertiary"])));
      var ey = en.Z.div(
        o || (o = (0, c.Z)(["max-w-4xl mx-auto w-full px-2 md:px-6 lg:px-10"]))
      );
      function ek(e) {
        var t = e.children,
          r = e.showSpinner,
          n = (0, H.t)(),
          a = (0, V.ec)(function (e) {
            return e.currentWorkspace;
          }),
          i = !n || r;
        return (0, y.jsxs)(ey, {
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
                children: (0, y.jsx)(_.Z, ef({}, eP.workspaceNotFound)),
              }),
            !i && a && t,
          ],
        });
      }
      var eP = (0, w.vU)({
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
        s = r(32062),
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
                            s.ZP.getSubscription(e).catch(function (e) {
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
                        return e.abrupt("return", s.ZP.cancelSubscription(t));
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
                        return e.abrupt("return", s.ZP.renewSubscription(t));
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
//# sourceMappingURL=5017-e8e15d8ebec0097a.js.map
