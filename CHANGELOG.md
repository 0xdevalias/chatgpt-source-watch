# Changelog - 2024

Note that the contents within this CHANGELOG will be kept up to date with the latest changes and insights for 2024. See the other CHANGELOG files for other time periods:

- [`CHANGELOG-2023.md`](./CHANGELOG-2023.md)

You may also like some of the historical insights captured at the following gist:

- [Reverse engineering ChatGPT's frontend web app + deep dive explorations of the code (0xdevalias gist)](https://gist.github.com/0xdevalias/4ac297ee3f794c17d0997b4673a2f160#reverse-engineering-chatgpts-frontend-web-app--deep-dive-explorations-of-the-code)

## Table of Contents

<!--
  TODO: For now, we strip all of the non-heading content (before generating the ToC) with something like this:
    grep '^## ' CHANGELOG.md
  Once this bug is fixed, we would no longer need to do that:
    https://github.com/derlin/bitdowntoc/issues/26
  Alternately, once the following bugfix PR is merged, we could go back to using MarkdownTOC to do it automatically:
    https://github.com/naokazuterada/MarkdownTOC/pull/170
-->
<!-- TOC start (generated with https://derlin.github.io/bitdowntoc/) -->
- [2024-01-23Z \(`SV8rS7Dgwcs4Wy66AK7F-`\)](#2024-01-23z-sv8rs7dgwcs4wy66ak7f-)
- [2024-01-23Z \(`QuwWxUlwJ3R2mN9xC_kGf`\)](#2024-01-23z-quwwxulwj3r2mn9xc_kgf)
- [2024-01-22Z \(`xkpErLYv9UcK2R7KCfW2D`\)](#2024-01-22z-xkperlyv9uck2r7kcfw2d)
- [2024-01-21Z \(`MCkVH1jJi3yNLkMToVDdU`\)](#2024-01-21z-mckvh1jji3ynlkmtovddu)
- [2024-01-19Z \(`q-nwvju19I1V-kczySDcG`\)](#2024-01-19z-q-nwvju19i1v-kczysdcg)
- [2024-01-19Z \(`WxxDBH31dddvpYD-hkj3T`\)](#2024-01-19z-wxxdbh31dddvpyd-hkj3t)
- [2024-01-18Z \(`sgI7Q_wtcDQlOzRFnqIoV`\)](#2024-01-18z-sgi7q_wtcdqlozrfnqiov)
- [2024-01-18Z \(`mfRdA1mhUEbx-XW-t8HI1`\)](#2024-01-18z-mfrda1mhuebx-xw-t8hi1)
- [2024-01-12Z \(`XdWhUWo_M_wNJEE1jln84`\)](#2024-01-12z-xdwhuwo_m_wnjee1jln84)
- [2024-01-12Z \(`v78GkVQvDccUOBvZi02mN`\)](#2024-01-12z-v78gkvqvdccuobvzi02mn)
- [2024-01-12Z \(`BHrNOKMcBnyCKNWEuC-_T`\)](#2024-01-12z-bhrnokmcbnycknweuc-_t)
- [2024-01-11Z \(`oaMdM-5A0fn6tvM6jS2wq`\)](#2024-01-11z-oamdm-5a0fn6tvm6js2wq)
- [2024-01-11Z \(`_8Cj5w2Xm_cbdoV37uBTg`\)](#2024-01-11z-_8cj5w2xm_cbdov37ubtg)
- [2024-01-10Z \(`WSi1X0ArB7Vb5xbtp9NQo`\)](#2024-01-10z-wsi1x0arb7vb5xbtp9nqo)
- [2024-01-10Z \(`Qy6WgQbBtdAKO56kyE3EZ`\)](#2024-01-10z-qy6wgqbbtdako56kye3ez)
- [2024-01-10Z \(`SEKhaE-wBycAz8cr914YK`\)](#2024-01-10z-sekhae-wbycaz8cr914yk)
- [2024-01-10Z \(`DYD4ptbg3xgXFPHVvylfS`\)](#2024-01-10z-dyd4ptbg3xgxfphvvylfs)
- [2024-01-08Z \(`VLfcxq6hGipJvVKn1m8UF`\)](#2024-01-08z-vlfcxq6hgipjvvkn1m8uf)
- [2024-01-08Z \(`mXIu6W6cm_lCUo268p1XR`\)](#2024-01-08z-mxiu6w6cm_lcuo268p1xr)
- [2024-01-06Z \(`RCBswHp2o_8O-rQH0558u`\)](#2024-01-06z-rcbswhp2o_8o-rqh0558u)
- [2024-01-05Z \(`ohf0xpZm-mdSSsiYSf4si`\)](#2024-01-05z-ohf0xpzm-mdsssiysf4si)
- [2024-01-05Z \(`-ush58uailrg9NaSp6Olq`\)](#2024-01-05z--ush58uailrg9nasp6olq)
- [2024-01-05Z \(`PEO14vuOqqjOQtCs82SgS`\)](#2024-01-05z-peo14vuoqqjoqtcs82sgs)
- [2024-01-04Z \(`wvxlBkHE5usnj-32Td8Nr`\)](#2024-01-04z-wvxlbkhe5usnj-32td8nr)
- [2024-01-02Z \(`aNEO7zh0z5I01hzE5e-99`\) `[as well as earlier missing changes]`](#2024-01-02z-aneo7zh0z5i01hze5e-99-as-well-as-earlier-missing-changes)
<!-- TOC end -->
<!-- DISABLEDMarkdownTOC levels="1,2" style="unordered" bullets="-" indent="  " -->
<!-- TODO: Reinstate this after this bug is fixed: https://github.com/naokazuterada/MarkdownTOC/pull/170 -->
<!-- /MarkdownTOC -->

## 2024-01-23Z (`SV8rS7Dgwcs4Wy66AK7F-`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - It looks like a bunch of the diff churn here might be removing things added in a build from earlier today.. perhaps a commit was reverted?
    - 2024-01-22Z (`xkpErLYv9UcK2R7KCfW2D`) (SHA: `0b66576ee72010207e33131c826fc4be47449e88`)
- App release version (Git SHA?): `0e1fd5d29993a88a61b87d3a343770c296a3078d`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/4648.js`
  - ```diff
    - z.profilePictureUrl != G.gizmo.display.profile_picture_url ||
    - z.profilePictureId != G.gizmo.display.profile_pic_id)
    + z.profilePictureUrl != M.gizmo.display.profile_picture_url)
    ```    
  - ```diff
    - navigateAway: {
    -   id: "gizmo.navigateAway",
    -   defaultMessage: "Are you sure you would like to leave this page?",
    - },
    ```
  - etc

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-659abd9a08966577.js
https://cdn.oaistatic.com/_next/static/SV8rS7Dgwcs4Wy66AK7F-/_buildManifest.js
https://cdn.oaistatic.com/_next/static/SV8rS7Dgwcs4Wy66AK7F-/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/4648-04f0b01bbab45fe8.js
```

## 2024-01-23Z (`QuwWxUlwJ3R2mN9xC_kGf`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - More updates to do with gizmos (eg. Custom GPTs) getting 'memory' that persists between chats
- App release version (Git SHA?): `2730cab4966d0a966b286651d0e5858b139f42f1`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```js
    children: [
      eo
        ? (0, eM.jsxs)(eM.Fragment, {
            children: [
              ea(eo),
              (0, eM.jsx)("span", {
                className: "text-gray-600 dark:text-gray-400",
                children: null == eo ? void 0 : eo.name,
              }),
            ],
          })
        : (0, eM.jsx)(eE.Z, {
            id: "MemoriesModal.unknownGizmo",
            defaultMessage: "Unknown GPT",
          }),
      (0, eM.jsx)(eF.ud, {
        className: "text-token-text-tertiary",
      }),
    ],
    ```
  - ```js
    ec = (0, ez.Gl)(ed.sh.Sunshine),
    ```
  - ```js
    eP = (0, ek.a)({
      queryKey: ["memory_gizmos"],
      queryFn: function () {
        return eb.ZP.getGizmosWithMemory();
      },
      refetchOnMount: "always",
    }),
    ```
  - ```js
    children: ef
              ? (0, eM.jsx)(eE.Z, {
                  id: "MemoriesModal.noMemories",
                  defaultMessage:
                    "As you chat with ChatGPT, the details and preferences it remembers will be shown here.",
                })
              : (0, eM.jsx)(eE.Z, {
                  id: "MemoriesModal.noMemoriesAndDisabled",
                  defaultMessage:
                    "Memory is disabled. ChatGPT won't use or create memories.",
                }),
    ```
  - ```diff
      title: eu.formatMessage({
        id: "MemoriesModal.title",
    -   defaultMessage: "My memories",
    +   defaultMessage: "Memory",
      }),
    ```
  - ```js
    gizmoId: eg,
    memoryName:
      null !== (ei = null == eR ? void 0 : eR.name) &&
      void 0 !== ei
        ? ei
        : "ChatGPT",
    ```
  - ```js
    children: (0, eM.jsx)(tX, { memoryName: "ChatGPT" }),
    ```
  - ```diff
    - ea.formatMessage({
    -   id: "ResetMemoriesButton.resetSuccessful",
    -   defaultMessage: "Your GPT's memory has been reset.",
    + ec.formatMessage({
    +   id: "ResetMemoriesButton.resetSuccess",
    +   defaultMessage: "Memory cleared.",
      })
    ```
  - ```js
    children: en
      ? (0, eM.jsx)(eE.Z, {
          id: "ResetMemoriesButton.resetGizmo",
          defaultMessage: "Clear this GPT's memory",
        })
      : (0, eM.jsx)(eE.Z, {
          id: "ResetMemoriesButton.resetChatGPT",
          defaultMessage: "Clear ChatGPT's memory",
        }),
    ```
  - ```js
    description: ec.formatMessage(
      {
        id: "MemoriesModal.resetGizmoModalDescription",
        defaultMessage:
          "{name} will forget everything it has remembered from your chats. This cannot be undone.",
      },
    ```
  - ```js
    value: function (Y) {
      return this.deleteWithPayload(
        "".concat(tc, "/settings/clear_account_user_memory"),
        Y ? { gizmo_id: Y } : {}
      );
    ```
  - ```js
    value: function (Y) {
      var et = "";
      return (
        Y && (et = "?gizmo_id=".concat(encodeURIComponent(Y))),
        this.get("".concat(tc, "/memories").concat(et))
      );
    ```
  - ```js
    this.deleteWithPayload(
      "".concat(tc, "/memories/").concat(et),
      en ? { gizmo_id: en } : {}
    )
    ```
  - ```js
    {
      key: "getGizmosWithMemory",
      value: (function () {
        var Y = (0, ef.Z)(
          eh().mark(function Y() {
            return eh().wrap(
              function (Y) {
                for (;;)
                  switch ((Y.prev = Y.next)) {
                    case 0:
                      return Y.abrupt(
                        "return",
                        this.get("".concat(tc, "/memories/gizmos"))
                      );
                    case 1:
                    case "end":
                      return Y.stop();
                  }
              },
              Y,
              this
            );
          })
        );
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-96b29c634bb7efc2.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-38f225f425909566.js
https://cdn.oaistatic.com/_next/static/QuwWxUlwJ3R2mN9xC_kGf/_buildManifest.js
https://cdn.oaistatic.com/_next/static/QuwWxUlwJ3R2mN9xC_kGf/_ssgManifest.js
```

### From `orig/_next/static/chunks/webpack-38f225f425909566.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/665c05ae643cfce9.css
```

## 2024-01-22Z (`xkpErLYv9UcK2R7KCfW2D`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- App release version (Git SHA?): `0b66576ee72010207e33131c826fc4be47449e88`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- Modules IDs changed:
  - `74318` -> `29861`
  - ?etc?
- The following files had large changes to embedded JSON that appears to be related to translation:
  - `unpacked/_next/static/chunks/676.js`
  - `unpacked/_next/static/chunks/718.js`
  - `unpacked/_next/static/chunks/1141.js`
  - `unpacked/_next/static/chunks/1777.js`
  - `unpacked/_next/static/chunks/1948.js`
  - `unpacked/_next/static/chunks/2178.js`
  - `unpacked/_next/static/chunks/3466.js`
  - `unpacked/_next/static/chunks/3705.js`
  - `unpacked/_next/static/chunks/4042.js`
  - `unpacked/_next/static/chunks/4615.js`
  - `unpacked/_next/static/chunks/4700.js`
  - `unpacked/_next/static/chunks/4806.js`
  - `unpacked/_next/static/chunks/5187.js`
  - `unpacked/_next/static/chunks/5288.js`
  - `unpacked/_next/static/chunks/5952.js`
  - `unpacked/_next/static/chunks/6522.js`
  - `unpacked/_next/static/chunks/6875.js`
  - `unpacked/_next/static/chunks/6951.js`
  - `unpacked/_next/static/chunks/6952.js`
  - `unpacked/_next/static/chunks/7198.js`
  - `unpacked/_next/static/chunks/7947.js`
  - `unpacked/_next/static/chunks/8226.js`
  - `unpacked/_next/static/chunks/8400.js`
  - `unpacked/_next/static/chunks/9087.js` (This one looks like it's english)
    - Extracting the JSON, fixing some escape sequences, and then pretty formatting it, the old version had `6128` lines, and the new version has `7258` lines
    - I skimmed through the diff of the pretty-formatted JSON to see what has changed, but there is far too much churn to be able to include it all here; so if you're interested, I would suggest looking deeper at that yourself:
      - https://gist.github.com/0xdevalias/a4965b21dfb5aff6a15c8e0d17d9ba80#file-chatgpt-chunk-9087-diff
  - `unpacked/_next/static/chunks/9120.js`
  - `unpacked/_next/static/chunks/9271.js`
  - `unpacked/_next/static/chunks/9826.js`
- `unpacked/_next/static/chunks/pages/_app.js`
  - Added 2 new `svg` images:
    - one that looks like a star, half buried in some sand, with the handle of a spade sticking out of it
    - one that looks like a down arrow
  - Module `67425` seems to be newly added, and has a heap of code related to team account creation/transfer, including a help link:
    - https://help.openai.com/en/articles/8801890
    - `teamAccountTransferModalTransferLabel`
    - `teamAccountTransferModalCreateLabel`
    - `teamAccountTransferModalTransferDetail`
    - `teamAccountTransferModalCreateDetail`
    - `teamAccountTransferModalTitle`
    - `teamAccountTransferModalExplanation`
    - `teamTransferModalMigrateData`
    - `teamTransferModalDeleteData`
    - `teamTransferModalCancelPlus`
    - `transferAccount`
  - Module `72576` seems to be newly added (or maybe just heavily refactored/churned):
    - Links to: https://help.openai.com/en/articles/7039943-data-usage-for-consumer-services-faq
    - ```js
      eO = (0, ep.vU)({
        askAway: { id: "onboarding.askAway", defaultMessage: "Ask away" },
        askAwayBody: {
          id: "onboarding.askAwayBody",
          defaultMessage:
            "ChatGPT can answer questions, help you learn, write code, brainstorm together, and much more.",
        },
        warning: {
          id: "onboarding.warning",
          defaultMessage: "Don’t share sensitive info",
        },
        warningBody: {
          id: "onboarding.warningBody",
          defaultMessage:
            "Chat history may be reviewed or used to improve our services. Learn more about your choices in our <article>Help Center</article>.",
        },
        accuracy: {
          id: "onboarding.accuracy",
          defaultMessage: "Check your facts",
        },
        accuracyBody: {
          id: "onboarding.accuracyBody",
          defaultMessage:
            "While we have safeguards, ChatGPT may give you inaccurate information. It’s not intended to give advice.",
        },
        gettingStartedButton: {
          id: "onboarding.gettingStartedButton",
          defaultMessage: "Okay, let’s go",
        },
        workspaceWelcome: {
          id: "onboarding.workspaceWelcome",
          defaultMessage: "Welcome to the {workspaceName} Workspace",
        },
        workspaceWelcomeNoName: {
          id: "onboarding.workspaceWelcomeNoName",
          defaultMessage: "Welcome to the your Workspace",
        },
        workspaceWelcomeBody: {
          id: "onboarding.workspaceWelcomeBody",
          defaultMessage:
            "Here you can use our latest models, with more capabilities, and fewer limits.",
        },
        workUse: {
          id: "onboarding.workUse",
          defaultMessage: "Made for use at work",
        },
        workUseBody: {
          id: "onboarding.workUseBody",
          defaultMessage:
            "By default, chats in this workspace are not used to train our AI models.",
        },
      });
      ```
  - ```js
    (function (Y) {
      (Y.Personal = "chat"), (Y.Workspace = "workspace"), (Y.Team = "team");
    })(ei || (ei = {}));
    ```
  - ```diff
      initialModalBilling: {
        id: "initialModal.billing",
        defaultMessage:
    -     "If you have a paid plan, it will be canceled upon completing this step.",
    +     "If you have a ChatGPT Plus subscription, it will be canceled and refunded upon completing this step.",
      },
    ```
  - ```js
    ec = Y.turnGizmo,
    ```
  - `readOnly: !0,`
  - ```js
    var eR = (0, eE.vU)({
      teamAccountTransferModalTitle: {
        id: "teamAccountTransferModal.title",
        defaultMessage: "Your ChatGPT Team workspace is ready",
      },
      teamAccountTransferModalExplanation: {
        id: "teamAccountTransferModal.explanation",
        defaultMessage:
          "Do you want to transfer your chat history and GPTs to the Team workspace?",
      },
      teamAccountTransferModalConfirm: {
        id: "teamAccountTransferModal.confirm",
        defaultMessage: "Continue",
      },
      teamAccountTransferModalTransferLabel: {
        id: "teamAccountTransferModal.transferLabel",
        defaultMessage: "Transfer chat history and GPTs",
      },
      teamAccountTransferModalTransferDetail: {
        id: "teamAccountTransferModal.transferDetail",
        defaultMessage:
          "Carry over existing data from your personal workspace",
      },
      teamAccountTransferModalCreateLabel: {
        id: "teamAccountTransferModal.createLabel",
        defaultMessage: "Start as empty workspace",
      },
      teamAccountTransferModalCreateDetail: {
        id: "teamAccountTransferModal.createDetail",
        defaultMessage:
          "Keep your personal workspace separate. If you’re on Plus, you will maintain your subscription until you cancel",
      },
      selectedModalTitle: {
        id: "selectedModal.title",
        defaultMessage: "Are you sure?",
      },
      selectedModalBack: { id: "selectedModal.back", defaultMessage: "Back" },
      tansferModalPersonalAccount: {
        id: "teamTransferModal.personalAccount",
        defaultMessage: "Personal workspace",
      },
      teamTransferModalConfirmTitle: {
        id: "teamTransferModal.confirmTitle",
        defaultMessage:
          "Transfer of existing data is permanent and can't be undone.",
      },
      teamTransferModalMigrateData: {
        id: "teamTransferModal.migrateData",
        defaultMessage:
          "Your chat history and GPTs in your personal workspace will be migrated to the Team workspace.",
      },
      teamTransferModalDeleteData: {
        id: "teamTransferModal.deleteData",
        defaultMessage:
          "Your Plugins and custom instructions in your personal workspace will be deleted.",
      },
      teamTransferModalCancelPlus: {
        id: "teamTransferModal.cancelPlus",
        defaultMessage:
          "If you have a ChatGPT Plus subscription, it will be canceled and refunded upon merging.",
      },
      teamTransferModalWarning: {
        id: "teamTransferModal.warning",
        defaultMessage:
          "You will lose access to your data if you leave or are removed from the Team workspace, or if the workspace is deactivated. <link>Learn more</link>",
      },
      teamTransferModalConfirm: {
        id: "teamTransferModal.confirm",
        defaultMessage: "Confirm transfer",
      },
      mergeModalConfirm: {
        id: "mergerModal.confirm",
        defaultMessage: "Confirm merge",
      },
    });
    ```
  - ```diff
      noWorkspaceApprovedGPTs: {
    -   id: "workspaceSettings.noWorkspaceGPTs",
    +   id: "workspaceSettings.noWorkspaceApprovedGPTs",
        defaultMessage: "You havent approved any third-party GPTs",
      },
    ```
  - ```js
    tA = null == tm ? void 0 : tm.isTeam(),
    tP = (0, eU.rk)().data,
    tN =
      null == tP
        ? void 0
        : tP.accountItems.some(function (Y) {
            return Y.isPersonalAccount();
          }),
    ```
  - ```js
    mergePersonalData: {
      id: "settingsModal.mergePersonalData",
      defaultMessage: "Merge data from your personal workspace",
    },
    mergeButton: {
      id: "settingsModal.mergeButton",
      defaultMessage: "Merge",
    },
    ```
  - ```js
    (Y.TeamOwnerOnboarding = "oai/apps/hasSeenTeamOwnerOnboarding"),
    ```
- `unpacked/_next/static/chunks/pages/admin/gpts.js`
  - ```diff
    - var C = (0, x.vU)({
    -   title: { id: "workspaceSettings.title", defaultMessage: "GPTs" },
    + var C = (0, b.vU)({
    +   sidebarTitle: {
    +     id: "workspaceSettingsOld.sidebarTitle",
    +     defaultMessage: "GPTs",
    +   },
        allowAllOption: {
    -     id: "workspaceSettings.allowAllOption",
    +     id: "workspaceSettingsOld.allowAllOption",
          defaultMessage: "Allow all",
        },
        ownerApprovedOnlyOption: {
    -     id: "workspaceSettings.allowAllOption",
    +     id: "workspaceSettingsOld.ownerApprovedOnlyOption",
          defaultMessage: "Owner-approved only",
        },
        dontAllowOption: {
    -     id: "workspaceSettings.dontAllowOption",
    +     id: "workspaceSettingsOld.dontAllowOption",
          defaultMessage: "Don't allow",
        },
        retentionPolicyTitle: {
    -     id: "workspaceSettings.retentionPolicyTitle",
    +     id: "workspaceSettingsOld.retentionPolicyTitle",
          defaultMessage: "Retention policy",
        },
        thirdPartyGPTsTitle: {
    -     id: "workspaceSettings.thirdPartyGPTsTitle",
    +     id: "workspaceSettingsOld.thirdPartyGPTsTitle",
          defaultMessage: "Third-party",
        },
        thirdPartyGPTsDescription: {
    -     id: "workspaceSettings.thirdPartyGPTsDescription",
    +     id: "workspaceSettingsOld.thirdPartyGPTsDescription",
          defaultMessage:
            "Manage whether members can use GPTs created outside your workspace.",
        },
        customActionsTooltip: {
    -     id: "workspaceSettings.customActionsTooltip",
    +     id: "workspaceSettingsOld.customActionsTooltip",
          defaultMessage:
            "Allow GPTs to use third-party services for tasks such as finding flights. Actions are defined by GPT builders.",
        },
        browseTooltip: {
    -     id: "workspaceSettings.browseTooltip",
    +     id: "workspaceSettingsOld.browseTooltip",
          defaultMessage:
            "Allow ChatGPT and GPTs to browse the internet to answer questions about recent topics and events.",
        },
        pluginsTooltip: {
    -     id: "workspaceSettings.pluginsTooltip",
    +     id: "workspaceSettingsOld.pluginsTooltip",
          defaultMessage:
            "Allow members to install plugins so ChatGPT can use third-party services for tasks such as finding flights.",
        },
        pluginsOptionTitle: {
    -     id: "workspaceSettings.pluginsOptionTitle",
    +     id: "workspaceSettingsOld.pluginsOptionTitle",
          defaultMessage: "Plugins",
        },
        customActionsOptionTitle: {
    -     id: "workspaceSettings.pluginsOptionTitle.0",
    +     id: "workspaceSettingsOld.pluginsOptionTitle.0",
          defaultMessage: "Custom actions",
        },
        browseOptionTitle: {
    -     id: "workspaceSettings.browseOptionTitle",
    +     id: "workspaceSettingsOld.browseOptionTitle",
          defaultMessage: "Browsing with Bing",
        },
        workspaceGPTsTitle: {
    -     id: "workspaceSettings.workspaceGPTsTitle",
    +     id: "workspaceSettingsOld.workspaceGPTsTitle",
          defaultMessage: "Workspace",
        },
        appearanceTitle: {
    -     id: "workspaceSettings.appearanceTitle",
    +     id: "workspaceSettingsOld.appearanceTitle",
          defaultMessage: "Appearance",
        },
        sharingSettingsTitle: {
    -     id: "workspaceSettings.sharingSettingsTitle",
    +     id: "workspaceSettingsOld.sharingSettingsTitle",
          defaultMessage: "Sharing",
        },
        gptSharingTitle: {
    -     id: "workspaceSettings.gptSharingTitle",
    +     id: "workspaceSettingsOld.gptSharingTitle",
          defaultMessage: "GPTs can be shared with...",
        },
        chatSharingTitle: {
    -     id: "workspaceSettings.chatSharingTitle",
    +     id: "workspaceSettingsOld.chatSharingTitle",
          defaultMessage: "Chats can be shared with...",
        },
        workspaceMembersOnlySelect: {
    -     id: "workspaceSettings.workspaceMembersOnlySelect",
    +     id: "workspaceSettingsOld.workspaceMembersOnlySelect",
          defaultMessage: "Workspace members only",
        },
        anyOneSelect: {
    -     id: "workspaceSettings.anyOneSelect",
    +     id: "workspaceSettingsOld.anyOneSelect",
          defaultMessage: "Anyone",
        },
        noOneSelect: {
    -     id: "workspaceSettings.noOneSelect",
    +     id: "workspaceSettingsOld.noOneSelect",
          defaultMessage: "No one",
        },
        featureSettingsUpdateFailed: {
    -     id: "workspaceSettings.featureSettingsUpdateFailed",
    +     id: "workspaceSettingsOld.featureSettingsUpdateFailed",
          defaultMessage: "Failed to update feature setting",
        },
        conversationRetention: {
    -     id: "workspaceSettings.conversationRetention",
    +     id: "workspaceSettingsOld.conversationRetention",
          defaultMessage: "Chat retention",
        },
        retentionInfinite: {
    -     id: "workspaceSettings.retentionInfinite",
    +     id: "workspaceSettingsOld.retentionInfinite",
          defaultMessage: "Infinite",
        },
        retentionNinetyDays: {
    -     id: "workspaceSettings.retentionNinetyDays",
    +     id: "workspaceSettingsOld.retentionNinetyDays",
          defaultMessage: "90 days",
        },
        retentionOneYear: {
    -     id: "workspaceSettings.retentionOneYear",
    +     id: "workspaceSettingsOld.retentionOneYear",
          defaultMessage: "1 year",
        },
        retentionCustomDays: {
    -     id: "workspaceSettings.retentionCustomDays",
    +     id: "workspaceSettingsOld.retentionCustomDays",
          defaultMessage: "{num} days",
        },
        retentionChange: {
    -     id: "workspaceSettings.retentionChange",
    +     id: "workspaceSettingsOld.retentionChange",
          defaultMessage:
            "Contact your account manager to change this setting.",
        },
        workspaceGPTsDescription: {
    -     id: "workspaceSettings.workspaceGPTsDescription",
    +     id: "workspaceSettingsOld.workspaceGPTsDescription",
          defaultMessage:
            "Manage which capabilities are available for GPTs built in your workspace or by ChatGPT. This does not apply to third-party GPTs.",
        },
        enterpriseUpsellPill: {
    -     id: "workspaceSettings.enterpriseUpsellPill",
    +     id: "workspaceSettingsOld.enterpriseUpsellPill",
          defaultMessage: "Enterprise",
        },
        retentionSettingTooltip: {
    -     id: "workspaceSettings.retentionSettingTooltip",
    +     id: "workspaceSettingsOld.retentionSettingTooltip",
          defaultMessage: "Contact your account manager to change this setting",
        },
        enterpriseRequiredMessage: {
    -     id: "workspaceSettings.enterpriseRequiredMessage",
    +     id: "workspaceSettingsOld.enterpriseRequiredMessage",
          defaultMessage:
            "Only workspaces with the Enterprise plan can change these settings",
        },
        shareRecipientTitlePrivate: {
    -     id: "workspaceSettings.shareRecipientTitlePrivate",
    +     id: "workspaceSettingsOld.shareRecipientTitlePrivate",
          defaultMessage: "Private",
        },
        shareRecipientTitleLink: {
    -     id: "workspaceSettings.shareRecipientTitleLink",
    +     id: "workspaceSettingsOld.shareRecipientTitleLink",
          defaultMessage: "Link",
        },
        shareRecipientTitlePublic: {
    -     id: "workspaceSettings.shareRecipientTitlePublic",
    +     id: "workspaceSettingsOld.shareRecipientTitlePublic",
          defaultMessage: "Public",
        },
      });
    ```
- `unpacked/_next/static/chunks/4648.js`
  - `isDraft: !1,`
  - `isDraft: !0,`
  - ```js
    (0, L.useEffect)(
      function () {
        var e = function (e) {
          e.preventDefault(), (e.returnValue = "");
        };
        window.addEventListener("beforeunload", e);
        var t = function () {
          if (!confirm(l.formatMessage(nO.navigateAway)))
            throw (
              (r.events.emit("routeChangeError"),
              "User cancelled navigation")
            );
        };
        return (
          r.events.on("routeChangeStart", t),
          r.beforePopState(function (e) {
            var t = e.url,
              n = r.asPath;
            return (
              t === n ||
              !!confirm(l.formatMessage(nO.navigateAway)) ||
              (window.history.pushState(window.history.state, "", n), !1)
            );
          }),
          function () {
            window.removeEventListener("beforeunload", e),
              r.events.off("routeChangeStart", t),
              r.beforePopState(function () {
                return !0;
              });
          }
        );
      },
      [r, l]
    ),
    ```
  - ```js
    var nO = (0, ed.vU)({
        navigateAway: {
          id: "gizmo.navigateAway",
          defaultMessage: "Are you sure you would like to leave this page?",
        },
      }),
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-b2cc09d3e5227bc6.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-eff305ba84d715f1.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-4d7e7c9992c78ac4.js
https://cdn.oaistatic.com/_next/static/xkpErLYv9UcK2R7KCfW2D/_buildManifest.js
https://cdn.oaistatic.com/_next/static/xkpErLYv9UcK2R7KCfW2D/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/gpts-ba58d3c8c4fb842d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-a1b8b62dcf7e5de1.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-6653d61c65bf2071.js
https://cdn.oaistatic.com/_next/static/chunks/4648-57c8f5ab3cfbc4b3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-08e7adef031feae5.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-372842b7a352c62f.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-eff305ba84d715f1.js
```

### From `orig/_next/static/chunks/webpack-4d7e7c9992c78ac4.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/676.ca854ecf1128cf71.js
https://cdn.oaistatic.com/_next/static/chunks/718.a180e15747a90b6d.js
https://cdn.oaistatic.com/_next/static/chunks/1141.0e443d073ffe999c.js
https://cdn.oaistatic.com/_next/static/chunks/1777.a38d4073d27e2f15.js
https://cdn.oaistatic.com/_next/static/chunks/1948.5211fa4de462dda6.js
https://cdn.oaistatic.com/_next/static/chunks/2178.d5e19ab04b6eadbc.js
https://cdn.oaistatic.com/_next/static/chunks/3466.33ac4b56c38c4b85.js
https://cdn.oaistatic.com/_next/static/chunks/3705.8c6482c47acea5fb.js
https://cdn.oaistatic.com/_next/static/chunks/4042.f0990bc43e1a7a1e.js
https://cdn.oaistatic.com/_next/static/chunks/4615.aa5600049f07c49a.js
https://cdn.oaistatic.com/_next/static/chunks/4700.6b53bd0e52aefa43.js
https://cdn.oaistatic.com/_next/static/chunks/4806.77ecb32d58edb990.js
https://cdn.oaistatic.com/_next/static/chunks/5187.c00a1b2bf4b0e6d0.js
https://cdn.oaistatic.com/_next/static/chunks/5288.2d3d14c9d986850b.js
https://cdn.oaistatic.com/_next/static/chunks/5952.0f11f5b3ef405821.js
https://cdn.oaistatic.com/_next/static/chunks/6522.1084952457ac1c03.js
https://cdn.oaistatic.com/_next/static/chunks/6875.b01c41aafa3b40d4.js
https://cdn.oaistatic.com/_next/static/chunks/6951.7bee414b74debe35.js
https://cdn.oaistatic.com/_next/static/chunks/6952.9a58ffd2d2078c31.js
https://cdn.oaistatic.com/_next/static/chunks/7198.ee2246e72f6b2def.js
https://cdn.oaistatic.com/_next/static/chunks/7947.754d9f5e5c9265eb.js
https://cdn.oaistatic.com/_next/static/chunks/8226.266024bff9f30c2c.js
https://cdn.oaistatic.com/_next/static/chunks/8400.01cb7c2f250020dd.js
https://cdn.oaistatic.com/_next/static/chunks/9087.6e47dfa8228a44f5.js
https://cdn.oaistatic.com/_next/static/chunks/9120.c877908fafc4d172.js
https://cdn.oaistatic.com/_next/static/chunks/9271.64464c2fdca5a47e.js
https://cdn.oaistatic.com/_next/static/chunks/9826.fa332d498d191e2c.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.1f8a31d0bd35e82e.js
```

## 2024-01-21Z (`MCkVH1jJi3yNLkMToVDdU`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Looks like custom GPTs are getting 'memory' between chats (`memory_history_enabled`, `chatgpt-gizmo-memory-tool`)
    - https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq
  - There is also something about `chatgpt_browse_bing_from_fe`, though not sure specifically what it relates to.. 
- App release version (Git SHA?): `87851b0827d9db415242b03502fcff40991ff63b`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- Modules IDs changed:
  - `46001` -> `76316`
  - `63265` -> `40670`
  - ?etc?
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```js
    stillLoadingData: {
      id: "workspaceSettings.stillLoadingData",
      defaultMessage:
        "Don't see what you're looking for? Some GPTs are still loading...",
    },
    ```
  - ```diff
      bulletDescription1: {
    -   id: "TemporaryChatOnboardingModal.bulletDescription1",
    +   id: "TemporaryChatOnboardingModal.bulletDescription1.1",
        defaultMessage:
    -     "Temporary Chats won't appear in your history, and your GPT won't remember anything you talk about. We may still keep a copy for up to 30 days for safety purposes.",
    +     "Temporary chats won’t appear in your history. For safety purposes, we may keep a copy of your chat for up to 30 days.",
      },
      bulletTitle2: {
        Icon: eM.av,
    -   id: "TemporaryChatOnboardingModal.bulletTitle2",
    -   defaultMessage: "Blank slate",
    +   id: "TemporaryChatOnboardingModal.bulletTitle2.1",
    +   defaultMessage: "No memory",
      },
      bulletDescription2: {
       id: "TemporaryChatOnboardingModal.bulletDescription2.1",
        defaultMessage:
    -    "Your GPT won't be aware of previous conversations. It will still follow your custom instructions if they're enabled.",
    +    "ChatGPT won’t use or create memories in Temporary Chats. If you have Custom Instructions, they’ll still be followed.",
      },
    ```
  - ```diff
      temporaryChatDescription: {
    -  id: "GizmoLanding.temporaryChatDescription.2",
    +  id: "GizmoLanding.temporaryChatDescription.3",
        defaultMessage:
    -     "{name} won't remember anything you talk about, and this chat won't show up in your history or be used to train our models. It'll follow your custom instructions if they're enabled.",
    +     "This chat won't appear in history, use memory, or be used to train our models. For safety purposes, we may keep a copy for up to 30 days.",
        },
    ```
  - ```js
    ep = en.formatMessage({
      id: "MemoriesModal.deleteMemory",
      defaultMessage: "Delete memory",
    });
    
    // ..snip..
    
      children: (0, eM.jsx)(eE.Z, {
        id: "MemoriesModal.deleteMemoryDescription",
        defaultMessage: "This will delete the memory: {title}",
        values: {
          title: (0, eM.jsx)("strong", { children: et.content }),
        },
      }),
    ```
  - ```js
    children: (0, eM.jsx)(eE.Z, {
      id: "MemoriesModal.loading",
      defaultMessage: "Loading...",
    }),
  
    // ..snip..
  
    children: (0, eM.jsx)(eE.Z, {
      id: "MemoriesModal.somethingWentWrong",
      defaultMessage: "Something went wrong...",
    }),
  
    // ..snip..
  
    children: (0, eM.jsx)(eE.Z, {
      id: "MemoriesModal.retry",
      defaultMessage: "Retry",
    }),
  
    // ..snip..
  
    children: (0, eM.jsx)(eE.Z, {
      id: "MemoriesModal.memoryColumn",
      defaultMessage: "Memory",
    }),
  
    // ..snip..
  
    children: (0, eM.jsx)(eE.Z, {
      id: "MemoriesModal.noMemories",
      defaultMessage:
        "As you chat with ChatGPT, the details and preferences it remembers will be shown here.",
    }),
  
    // ..snip..

    title: ed.formatMessage({
      id: "MemoriesModal.title",
      defaultMessage: "My memories",
    }),
    ```
  - ```js
    title: ei.formatMessage({
      id: "MemoriesModal.resetModalTitle",
      defaultMessage: "Are you sure?",
    }),
    description: ei.formatMessage({
      id: "MemoriesModal.resetModalDescription",
      defaultMessage:
        "ChatGPT will forget everything it has remembered from your chats. This cannot be undone.",
    }),
    primaryButton: (0, eM.jsx)(e6.ZP.Button, {
      title: ei.formatMessage({
        id: "MemoriesModal.resetModalConfirm",
        defaultMessage: "Clear memory",
      }),
      color: "danger",
      onClick: en,
    }),
    secondaryButton: (0, eM.jsx)(e6.ZP.Button, {
      title: ei.formatMessage({
        id: "MemoriesModal.resetModalCancel",
        defaultMessage: "Cancel",
      }),
    });
    ```
  - ```js
    return (0, eM.jsx)("a", {
      href: "https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq",
      target: "_blank",
      className: "underline",
      rel: "noreferrer",
      children: Y,
    });
    ```
    - https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq
  - ```js
    var tK = (0, eT.vU)({
        toggleLabel: {
          id: "settingsModal.myChagtGptToggleLabel.1",
          defaultMessage: "Improve responses with your chats",
        },
        exampleDescription1: {
          id: "settingsModal.exampleDescription1.1",
          defaultMessage:
            "ChatGPT will become more helpful as you chat, picking up on details and preferences to tailor its responses to you. <link>Learn more</link>",
        },
        exampleDescription2: {
          id: "settingsModal.exampleDescription2.2",
          defaultMessage:
            "To understand what ChatGPT remembers or teach it something new, just chat with it:",
        },
        exampleMessage1: {
          id: "settingsModal.exampleMessage1.1",
          defaultMessage: "Remember that I like concise responses.",
        },
        exampleMessage2: {
          id: "settingsModal.exampleMessage2.1",
          defaultMessage: "I just got a puppy!",
        },
        exampleMessage3: {
          id: "settingsModal.exampleMessage3.2",
          defaultMessage: "What do you remember about me?",
        },
        exampleMessage4: {
          id: "settingsModal.exampleMessage4",
          defaultMessage: "Where did we leave off on my last project?",
        },
        reset: {
          id: "settingsModal.reset",
          defaultMessage: "Reset memories",
        },
        resetModalTitle: {
          id: "settingsModal.resetModalTitle",
          defaultMessage: "Are you sure?",
        },
        resetModalDescription: {
          id: "settingsModal.resetModalDescription",
          defaultMessage:
            "Your GPT will forget what it has learned from your previous chats. This can't be undone.",
        },
        resetModalConfirm: {
          id: "settingsModal.resetModalConfirm",
          defaultMessage: "Confirm reset",
        },
        resetModalCancel: {
          id: "settingsModal.resetModalCancel",
          defaultMessage: "Cancel",
        },
        resetSuccessful: {
          id: "settingsModal.resetSuccessful",
          defaultMessage: "Your GPT's memory has been reset.",
        },
        resetFailed: {
          id: "settingsModal.resetFailed",
          defaultMessage: "Failed to reset your GPT's memory.",
        },
        on: { id: "personalizationSettings.on", defaultMessage: "On" },
        off: { id: "personalizationSettings.off", defaultMessage: "Off" },
        customInstructions: {
          id: "personalizationSettings.customInstructions",
          defaultMessage: "Custom instructions",
        },
        memories: {
          id: "personalizationSettings.memories",
          defaultMessage: "Memory",
        },
        manageMemoriesButton: {
          id: "personalizationSettings.manageMemoriesButton",
          defaultMessage: "Manage",
        },
      }),
    ```
  - ```js
    {
      key: "getMemories",
      value: function () {
        return this.get("".concat(tc, "/memories"));
      },
    },
    {
      key: "deleteMemory",
      value: (function () {
        var Y = (0, ef.Z)(
          eh().mark(function Y(et) {
            return eh().wrap(
              function (Y) {
                for (;;)
                  switch ((Y.prev = Y.next)) {
                    case 0:
                      return (
                        (Y.next = 2),
                        this.delete(
                          "".concat(tc, "/memories/").concat(et)
                        )
                      );
                    case 2:
                      if (Y.sent.success) {
                        Y.next = 6;
                        break;
                      }
                      throw Error(
                        "An error occurred while deleting the memory"
                      );
                    case 6:
                    case "end":
                      return Y.stop();
                  }
              },
              Y,
              this
            );
          })
        );
        return function (et) {
          return Y.apply(this, arguments);
        };
      })(),
    },
    ```
  - ```js
    (Y.MemoryHistoryEnabled = "memory_history_enabled");
    ```
  - ```js
    (Y.GizmoMemory = "chatgpt-gizmo-memory-tool"),
    (Y.BrowsingSearchLinksFromFe = "chatgpt_browse_bing_from_fe");
    ```
- `unpacked/_next/static/chunks/4648.js`
  - ```js
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
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-6a7d6a91e94bf731.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-b423e3a015a7f4f9.js
https://cdn.oaistatic.com/_next/static/MCkVH1jJi3yNLkMToVDdU/_buildManifest.js
https://cdn.oaistatic.com/_next/static/MCkVH1jJi3yNLkMToVDdU/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/gpts-4fc940ac8c543236.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/settings-16513a05953fa44e.js
https://cdn.oaistatic.com/_next/static/chunks/4648-5b21345d26e5f4e4.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-f97349054ed94179.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-0634ac9c66590616.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-eabe060a973a762b.js
```

### From `orig/_next/static/chunks/webpack-b423e3a015a7f4f9.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/074d29967bc6ad87.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.509a94378dab66e7.js
```

## 2024-01-19Z (`q-nwvju19I1V-kczySDcG`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- App release version (Git SHA?): `17ca9964d52e12ba9866e9b465bc26177d91b28d`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```js
    invalidEmail: {
      id: "changeOwnerModal.invalidEmail",
      defaultMessage:
        "Email is invalid or does not belong to a member in this workspace",
    },
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-3b2ec867133c0e75.js
https://cdn.oaistatic.com/_next/static/q-nwvju19I1V-kczySDcG/_buildManifest.js
https://cdn.oaistatic.com/_next/static/q-nwvju19I1V-kczySDcG/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-4a72d22fdef2a77d.js
https://cdn.oaistatic.com/_next/static/chunks/4648-df1e5d7194a249d0.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-13db41e2b35edf17.js
```

## 2024-01-19Z (`WxxDBH31dddvpYD-hkj3T`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Changes related to Custom GPT's (gizmo's) getting removed from the marketplace + appealing that decision; etc.
- App release version (Git SHA?): `69f8f17225e9b9c85cfa7c4b720065e549249c3e`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- Chunk IDs changed:
  - `7893` -> `4648`
- Modules IDs changed:
  - `17893` -> `54648`
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```js
    (Y.GizmoAppeals = "chatgpt-gizmo-appeals");
    ```
- `unpacked/_next/static/chunks/4648.js`
  - ```js
    switch (e) {
      case m.PublishBlocked:
        return "Your changes couldn’t be published";
      case m.RemovedFromMarketplace:
        return "Your GPT has been removed from the marketplace";
      case m.RemovedFromPublic:
        return "Your GPT has been removed from public view";
      case m.Recategorized:
        return "Your GPT has been recategorized";
    }
    ```
  - ```js
    children: "Alternatively you may appeal this decision and we will get back to you in a few days. Or you can publish to “Only me” and use this GPT privately.",
    ```
  - ```js
    children: [
      "Your GPT’s name is restricted for public sharing. If this is your organization’s name, please verify your website via the",
      " ",
      (0, R.jsx)(B, {
        href: "/#settings/BuilderProfile",
        children: "Builder profile in Settings",
      }),
      ".",
    ],
    ```
  - ```js
    children: "Your GPT’s category is restricted for public sharing. Please select a different category.",
    ```
  - ```js
    children: "Your GPT isn’t ready for public sharing yet. Usually, it’s a quick fix.",
    ```
  - ```js
     children: [
      (0, R.jsxs)("li", {
        children: [
          (0, R.jsx)("b", {
            children: "Review your info:",
          }),
          " Check that your description, name, and profile picture meet our",
          " ",
          (0, R.jsx)(B, {
            target: "_blank",
            href: "https://openai.com/brand",
            rel: "noreferrer",
            children: "brand",
          }),
          " ",
          "and",
          " ",
          (0, R.jsx)(B, {
            target: "_blank",
            href: "https://openai.com/policies/usage-policies",
            rel: "noreferrer",
            children: "usage",
          }),
          " ",
          "guidelines.",
        ],
      }),
      (0, R.jsxs)("li", {
        children: [
          (0, R.jsx)("b", { children: "Share again:" }),
          " Once updated, go ahead and share your GPT.",
        ],
      }),
    ],
    ```
  - ```js
    children: "Feel free to use your GPT privately for now by publishing to “only me”.",
    ```
  - ```js
    children: "Please provide a reason for why you believe this GPT doesn’t violate our policies and should be published",
    ```
  - ```js
    children: "Your appeal has been submitted. We will get back to you as soon as possible.",
    ```
  - ```js
    recipientBlocked: {
      id: "gizmo.recipientBlocked",
      defaultMessage:
        "Because this GPT previously may have violated our policies, you cannot publish it at this level.",
    },
    appealNeededLabel: {
      id: "gizmo.appealNeededLabel",
      defaultMessage:
        "Because this GPT previously may have violated our policies, you will have to submit an appeal to make it available at this level.",
    },
    appealButton: { id: "gizmo.appealButton", defaultMessage: "Appeal" },
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-2fc68d310cc5b0f4.js
https://cdn.oaistatic.com/_next/static/WxxDBH31dddvpYD-hkj3T/_buildManifest.js
https://cdn.oaistatic.com/_next/static/WxxDBH31dddvpYD-hkj3T/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/4648-2c509a8042fbdd43.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor-4a9765f081cecc34.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor/[slug]-2f34c3f32b57db78.js
```

## 2024-01-18Z (`sgI7Q_wtcDQlOzRFnqIoV`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- App release version (Git SHA?): `7d8a337f50406df08636e1036030cc0cb61c2c11`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/pages/_app.js`
  - Lots of diff churn, so hard to see what else (if anything) actually changed within it
  - ```js
    archiveHistoryModalTitle: {
      id: "settingsModal.archiveHistoryModalTitle",
      defaultMessage: "Archive your chat history - are you sure?",
    },
    archiveHistoryModalConfirm: {
      id: "settingsModal.archiveHistoryModalConfirm",
      defaultMessage: "Confirm archive",
    },
    archiveHistoryModalCancel: {
      id: "settingsModal.archiveHistoryModalCancel",
      defaultMessage: "Cancel",
    },
    archiveHistorySuccess: {
      id: "settingsModal.archiveHistorySuccess",
      defaultMessage:
        "Successfully archived chats. You can view your archived chats in Settings.",
    },
    ```
  - ```js
    archiveChatsLabel: {
      id: "settingsModal.archiveChatsLabel",
      defaultMessage: "Archive all chats",
    },
    archiveChatsButton: {
      id: "settingsModal.archiveChatsButton",
      defaultMessage: "Archive all",
    },
    ```
  - ```js
    {
      key: "archiveConversations",
      value: function () {
        return this.patch("".concat(tc, "/conversations"), {
          is_archived: !0,
        });
      },
    },
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-d19491243565be98.js
https://cdn.oaistatic.com/_next/static/sgI7Q_wtcDQlOzRFnqIoV/_buildManifest.js
https://cdn.oaistatic.com/_next/static/sgI7Q_wtcDQlOzRFnqIoV/_ssgManifest.js
```

## 2024-01-18Z (`mfRdA1mhUEbx-XW-t8HI1`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- App release version (Git SHA?): `d39a41bd98d114b394c04f83fd7af47c9fa87e40`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- Chunk IDs removed:
  - `6276` was removed and seemingly split between a number of files, probably including:
    - `unpacked/_next/static/chunks/pages/_app.js`
    - `unpacked/_next/static/chunks/pages/gpts.js`
    - `unpacked/_next/static/chunks/pages/g/[gizmoId].js`
    - `unpacked/_next/static/chunks/pages/gpts/mine.js`
    - `unpacked/_next/static/chunks/7893.js`
    - ?etc?
- Chunk IDs changed:
  - `192` -> `7893`
- Module IDs changed:
  - `66027` -> `32062`
  - `47455` -> `72256`
  - `192` -> `17893`
  - `52936` -> `78116`
  - `8145` -> `88963`
- `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - New route added: `/admin/gpts` (`unpacked/_next/static/chunks/pages/admin/gpts.js`)
- `unpacked/_next/static/chunks/7893.js`
  - Seems to contain a lot of stuff related to GPTs / creating them, including what seems to be some (all?) of the prompts used behind the scenes by the GPT creator.
- `unpacked/_next/static/chunks/d7aec224.js`
  - Seems to contain a bunch of stuff related to cryptography or similar I think?
- `unpacked/_next/static/chunks/pages/_app.js`
  - Lots of diff churn, so hard to see if/what actually changed within it

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-7d6b14769f155495.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-f676425bf2920d14.js
https://cdn.oaistatic.com/_next/static/mfRdA1mhUEbx-XW-t8HI1/_buildManifest.js
https://cdn.oaistatic.com/_next/static/mfRdA1mhUEbx-XW-t8HI1/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/5017-e8e15d8ebec0097a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin-21bf33ecdd89e2bb.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/analytics-51dd97dd90e2ae2b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/billing-109060fbf829aa50.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/gpts-5a7a4ad9c0ffad2e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/settings-608051d3daa617bc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/aip/[pluginId]/oauth/callback-bed6b17cf2cad1ff.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/enable/internal-0d86cca11863da22.js
https://cdn.oaistatic.com/_next/static/chunks/3975-37a9301353b29c5d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-f12e078a06a4386b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-b75a8a81b1ff7791.js
https://cdn.oaistatic.com/_next/static/chunks/7893-22d1a9f418c004b7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor-d67e0d7a5e8ac006.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor/[slug]-65029f38793803c7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-544670a0f116527f.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/accepted-d7ba9a8c17e28e51.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-32f24149f5824618.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-4b0ce67625fcf59e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-team-e8774e9d3f7da4aa.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-trial-84597e34390c1506.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-8da35bbb0f092dc3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-080407fd516d7e1c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/workspace/deactivated-5190e0ba03fbed0b.js
```

### From `orig/_next/static/chunks/webpack-f676425bf2920d14.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/2186.cabe8d2968afacb8.js
https://cdn.oaistatic.com/_next/static/chunks/d7aec224.68e70012d9ba3ab1.js
https://cdn.oaistatic.com/_next/static/chunks/30750f44.7367fc2b279f784a.js
https://cdn.oaistatic.com/_next/static/chunks/9118.f8d764b6cd157f81.js
https://cdn.oaistatic.com/_next/static/css/132af4ac1db4a00b.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.9faebbfee625ef81.js
```

## 2024-01-12Z (`XdWhUWo_M_wNJEE1jln84`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- App release version (Git SHA?): `763875bab92d599a79f63784f6fb57ba6419ff83`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/pages/_app.js`
  - Lots of diff churn, so hard to see if/what actually changed within it

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-d0c79833829bebba.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-d35cd52f9ccd15d6.js
https://cdn.oaistatic.com/_next/static/XdWhUWo_M_wNJEE1jln84/_buildManifest.js
https://cdn.oaistatic.com/_next/static/XdWhUWo_M_wNJEE1jln84/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-fe32c547a6f2b6c2.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-team-5245675baa81a6e6.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-trial-37a897c05126a17d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-e28b421882198027.js
```

### From `orig/_next/static/chunks/webpack-d35cd52f9ccd15d6.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/02f82e43283187c3.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.9d450c509461c4a1.js
```

## 2024-01-12Z (`v78GkVQvDccUOBvZi02mN`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- App release version (Git SHA?): `ca40803be9f4a02a8a89d3a5b7d663628adab3ba`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-96c015bcc4afda84.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-373f366f3dd34e6f.js
https://cdn.oaistatic.com/_next/static/v78GkVQvDccUOBvZi02mN/_buildManifest.js
https://cdn.oaistatic.com/_next/static/v78GkVQvDccUOBvZi02mN/_ssgManifest.js
```

### From `orig/_next/static/chunks/webpack-373f366f3dd34e6f.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/fbf5130bf76bd106.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.2c9f41128fe4a6b2.js
```

## 2024-01-12Z (`BHrNOKMcBnyCKNWEuC-_T`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- App release version (Git SHA?): `dc2a17af6e06db68adbcbebfda7cd19cf12c4699`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```diff
      teamsAdvertisedFeatures3: {
        id: "pricingPlanConstants.teams.teamsAdvertisedFeatures3",
    -   defaultMessage: "No training on your data",
    +   defaultMessage:
    +     "Team data excluded from training by default. <link>Learn more</link>",
    +   link: "https://openai.com/enterprise-privacy",
      },
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-614197fb8f7a0c0f.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-9e992d55bf570f14.js
https://cdn.oaistatic.com/_next/static/BHrNOKMcBnyCKNWEuC-_T/_buildManifest.js
https://cdn.oaistatic.com/_next/static/BHrNOKMcBnyCKNWEuC-_T/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/6276-ed51c45e26182454.js
https://cdn.oaistatic.com/_next/static/chunks/192-7691c3c7b7192f4b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-6bf5df201da32f60.js
```

### From `orig/_next/static/chunks/webpack-9e992d55bf570f14.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/ad8a1177c17fd47a.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.44e3a6fb2a1c2634.js
```

## 2024-01-11Z (`oaMdM-5A0fn6tvM6jS2wq`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- App release version (Git SHA?): `a10fe62bcd123fa144cfb2450b699d4497a5dade`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- Module IDs changed:
  - `35427` -> `51533`
  - `47428` -> `99715`
  - `6013` -> `22189`
  - `20491` -> `36530`
  - `65689` -> `74318`
  - `98624` -> `16213`
  - `65689` -> `74318`
  - `68354` -> `13521`
  - `18222` -> `52936`
  - ?etc?

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-76e73a20be3e00a0.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-86e9a5eff18011bb.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-0070f1789aaa10ea.js
https://cdn.oaistatic.com/_next/static/oaMdM-5A0fn6tvM6jS2wq/_buildManifest.js
https://cdn.oaistatic.com/_next/static/oaMdM-5A0fn6tvM6jS2wq/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/admin-3701ffda3bcd9de1.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/identity-059d2fd008bcca46.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-e3d749bd503b4fc4.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-dc4955d312ac6e1c.js
https://cdn.oaistatic.com/_next/static/chunks/6276-d41d321c9ff543e0.js
https://cdn.oaistatic.com/_next/static/chunks/192-ccf21caf313384fd.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-d7dc860bfde3018b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-d9cbb58d299d6b94.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-team-759494ca250852a3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-trial-96e3c98339186440.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-1dd5706231571569.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-ab8d1f07797a1d6d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-86e9a5eff18011bb.js
```

### From `orig/_next/static/chunks/webpack-0070f1789aaa10ea.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/9989cc39b1e1b1c9.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.e8afdba97aa514d9.js
```

## 2024-01-11Z (`_8Cj5w2Xm_cbdoV37uBTg`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- App release version (Git SHA?): `992ec66ff9a30f22dd6b475ab7f8ce7c3d55d7fe`
  - Extracted with `grep -C 3 'service: "chatgpt-web"' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/webpack.js`
  - New chunk added: `unpacked/_next/static/chunks/5704.js`
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```js
    exploreGPTsTitle: {
      id: "gptExploreGPTs.title",
      defaultMessage: "Explore GPTs",
    },
    exploreGPTsDescription: {
      id: "gptExploreGPTs.description",
      defaultMessage:
        "Now you can discover GPTs created by the community",
    },
    ```
- `unpacked/_next/static/chunks/3754.js`
  - ```js
    invitedToastMessage: {
      id: "Login.invitedToastMessage",
      defaultMessage:
        "You have been invited to the {workspace_name} workspace! Login or sign up with {email} to accept the invitation.",
    },
    ```
- `unpacked/_next/static/chunks/5704.js`
  - Seems to be some code related to handling websockets from React (eg. `useWebSocket`)

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-69c3348b1896cd1e.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-dcda336ac9faabba.js
https://cdn.oaistatic.com/_next/static/_8Cj5w2Xm_cbdoV37uBTg/_buildManifest.js
https://cdn.oaistatic.com/_next/static/_8Cj5w2Xm_cbdoV37uBTg/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/3754-4b243fe67e7e8d54.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-616c2dd6411e8a9c.js
https://cdn.oaistatic.com/_next/static/chunks/6276-788aa034bc74dd94.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-08bba99d31c568aa.js
```

### From `orig/_next/static/chunks/webpack-dcda336ac9faabba.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/5704.efed3cec4e299c77.js
https://cdn.oaistatic.com/_next/static/css/36edb078e559dff3.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.0fc4cf02802ea693.js
```

## 2024-01-10Z (`WSi1X0ArB7Vb5xbtp9NQo`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- App release version (Git SHA?): `bffc6bf560eb5333ef11e2369a24dad05776b32f`
  - Extracted with `grep -C 3 'service: "chatgpt-web"' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```diff
      {
        key: "getGizmoDiscovery",
    -   value: function (Y) {
    -     var et = new URLSearchParams();
    +   value: function (Y, et) {
    +     var en = new URLSearchParams();
          return (
    -      null != Y && et.set("locale", Y),
    -       ef.ZP.get("".concat(ef.k5, "/gizmos/discovery?").concat(et), {
    -         authOption: ef.FB.SendIfAvailable,
    -       })
    +       null != Y && en.set("locale", Y),
    +       ef.ZP.get(
    +         et
    +           ? "".concat(ef.k5, "/gizmos/discovery_anon?").concat(en)
    +           : "".concat(ef.k5, "/gizmos/discovery?").concat(en),
    +         { authOption: ef.FB.SendIfAvailable }
    +       )
          );
        },
      },
    ```
  - ```diff
    - placeholder: "Set `tools_section`",
    + placeholder: ew
    +  ? "Press `Load active system message` to pre-populate this"
    +  : "Start a conversation and then press `Load active system message` to pre-populate this",
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-932960befaede682.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-fe184953cac33856.js
https://cdn.oaistatic.com/_next/static/WSi1X0ArB7Vb5xbtp9NQo/_buildManifest.js
https://cdn.oaistatic.com/_next/static/WSi1X0ArB7Vb5xbtp9NQo/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/6276-54cca8688ea2ebb8.js
https://cdn.oaistatic.com/_next/static/chunks/192-63297905761f4832.js
```

### From `orig/_next/static/chunks/webpack-fe184953cac33856.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/a11a1801860e071d.css
```

## 2024-01-10Z (`Qy6WgQbBtdAKO56kyE3EZ`)

### Notes

- App release version (Git SHA?): `697a63176099499713d7d4fc6bc85c66b9c27172`
  - Extracted with `grep -C 3 'service: "chatgpt-web"' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/6276.js`
  - ```js
    discoveryError: {
      id: "gizmo.discovery.error",
      defaultMessage: "Error loading GPTs",
    },
    // ..snip..
    discoveryLoadMoreError: {
      id: "gizmo.discovery.loadMoreError",
      defaultMessage: "Error loading more",
    },
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-d32439ca4506ae5c.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-9e2a46098c9085f2.js
https://cdn.oaistatic.com/_next/static/Qy6WgQbBtdAKO56kyE3EZ/_buildManifest.js
https://cdn.oaistatic.com/_next/static/Qy6WgQbBtdAKO56kyE3EZ/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/6276-fa322493cf9d5d19.js
```

### From `orig/_next/static/chunks/webpack-9e2a46098c9085f2.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/e91aae5513934b0f.css
```

## 2024-01-10Z (`SEKhaE-wBycAz8cr914YK`)

### Notes

- App release version (Git SHA?): `1ace54ad692c50bc656723d7a559381f5d0bbb03`
  - Extracted with `grep -C 3 'service: "chatgpt-web"' unpacked/_next/static/chunks/pages/_app.js`
- New route `/gpts` added (`static/chunks/pages/gpts-feac991ac32a51df.js`)
  - `/gpts/discovery` seems to redirect there now, so might just be a new URL for that content
  - https://cdn.oaistatic.com/_next/static/media/gpts-og.772bef1f.jpg
  - ```js
    var A = "Explore GPTs",
        e = "Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.",
    ```
- The following help URL was added: https://help.openai.com/en/articles/8792536-manage-billing-on-the-chatgpt-team-subscription-plan

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-8b7a896ce0d26c7a.js
https://cdn.oaistatic.com/_next/static/SEKhaE-wBycAz8cr914YK/_buildManifest.js
https://cdn.oaistatic.com/_next/static/SEKhaE-wBycAz8cr914YK/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/billing-dd64351362096e8e.js
https://cdn.oaistatic.com/_next/static/chunks/6276-971c7cf6048c8ae0.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-feac991ac32a51df.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/discovery-28475bf486cb7133.js
https://cdn.oaistatic.com/_next/static/chunks/192-67ddbbb4f94fb7c7.js
```

## 2024-01-10Z (`DYD4ptbg3xgXFPHVvylfS`)

### Notes

- App release version (Git SHA?): `f50c3f4315463c2f9cf7f20f2c44d3c37c36a312`
  - Extracted with `grep -C 3 'service: "chatgpt-web"' unpacked/_next/static/chunks/pages/_app.js`
- New route `/search` added (`static/chunks/pages/search-5506c0ce03a4d9c6.js`)

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-256f6a789863880e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-12836b0c1baa69d7.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-54fa77ab5c301e44.js
https://cdn.oaistatic.com/_next/static/DYD4ptbg3xgXFPHVvylfS/_buildManifest.js
https://cdn.oaistatic.com/_next/static/DYD4ptbg3xgXFPHVvylfS/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-2069eae287a82616.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-58d3c2567a3a90e4.js
https://cdn.oaistatic.com/_next/static/chunks/6276-2338ce0de8ee0b5d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/discovery-78503cb778e29802.js
https://cdn.oaistatic.com/_next/static/chunks/192-d2b71a1ca30205f8.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-5506c0ce03a4d9c6.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-0a1a61c30a1aacae.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-01e317c4d9bcac5c.js
```

### From `orig/_next/static/chunks/webpack-54fa77ab5c301e44.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/8ec7380cc25a2f80.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.088eb06a39bef157.js
```

## 2024-01-08Z (`VLfcxq6hGipJvVKn1m8UF`)

### Notes

- **tl;dr**
  - **Twitter:** https://twitter.com/_devalias/status/1744511619286331767
  - **Reddit:** https://www.reddit.com/r/ChatGPT/comments/1920mt4/chatgpt_unreleased_feature_leak_annual/
  - **Hacker News:** https://news.ycombinator.com/item?id=38920588
  - **LinkedIn:** https://www.linkedin.com/feed/update/urn:li:activity:7150280336805986305/
- App release version (Git SHA?): `e8371b5cad4c6a2f48b0e915c0a7c3fbe578b811`
  - Extracted with `grep -C 3 'service: "chatgpt-web"' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/pages/_app.js`
  - Annual ChatGPT Plus subscriptions might be coming soon:
    - ```js
       Y.features.includes("yearly_plus_subscriptions_enabled");
      ```
    - ```js
      plusYearlyCost: {
        id: "pricingPlanConstants.plusYearly.costInDollars",
        defaultMessage: "USD $16.66/month*",
      },
      // ..snip..
      plusPricingYearlyDisclaimer: {
        id: "pricingPlanConstants.plus.plusPricingYearlyDisclaimer",
        defaultMessage: "* Price billed annually",
      },
      ```
    - ```js
      plusYearly: ea(
        ea({}, ec),
        {},
        {
          costInDollars: eu.plusYearlyCost,
          disclaimer: eu.plusPricingYearlyDisclaimer,
        }
      ),
      ```
- There are no doubt other changes that I haven't called out in these notes as well.

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-f51d0fc71fba6239.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-fe2ae757f8ba03d3.js
https://cdn.oaistatic.com/_next/static/VLfcxq6hGipJvVKn1m8UF/_buildManifest.js
https://cdn.oaistatic.com/_next/static/VLfcxq6hGipJvVKn1m8UF/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/6276-a201bc43ff5fa726.js
```

### From `orig/_next/static/chunks/webpack-fe2ae757f8ba03d3.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/b32d9252cd929c53.css
```

## 2024-01-08Z (`mXIu6W6cm_lCUo268p1XR`)

### Notes

- App release version (Git SHA?): `b1693f73932bf26b80b9c407a589f7fa84db519d`
  - Extracted with `grep -C 3 'service: "chatgpt-web"' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-6db42c206e458693.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-e863b3dfca2be08d.js
https://cdn.oaistatic.com/_next/static/mXIu6W6cm_lCUo268p1XR/_buildManifest.js
https://cdn.oaistatic.com/_next/static/mXIu6W6cm_lCUo268p1XR/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/6276-7521971ea5bc4b96.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/discovery-e39da93007126323.js
```

### From `orig/_next/static/chunks/webpack-e863b3dfca2be08d.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/1033ddd3b7950a2f.css
```

## 2024-01-06Z (`RCBswHp2o_8O-rQH0558u`)

### Notes

- App release version (Git SHA?): `0e8527842a288bf87ce5b440aaeff19707d5dfed`
  - Extracted with `grep -C 3 'service: "chatgpt-web"' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-6026406c87964130.js
https://cdn.oaistatic.com/_next/static/RCBswHp2o_8O-rQH0558u/_buildManifest.js
https://cdn.oaistatic.com/_next/static/RCBswHp2o_8O-rQH0558u/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-4bdf539a55cd7638.js
```

## 2024-01-05Z (`ohf0xpZm-mdSSsiYSf4si`)

### Notes

- App release version (Git SHA?): `1fc802fbf723c3e947e7fa5f1b5635f86b20b856`
  - Extracted with `grep -C 3 'service: "chatgpt-web"' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-6ad3b7c5bcb7b4f7.js
https://cdn.oaistatic.com/_next/static/ohf0xpZm-mdSSsiYSf4si/_buildManifest.js
https://cdn.oaistatic.com/_next/static/ohf0xpZm-mdSSsiYSf4si/_ssgManifest.js
```

## 2024-01-05Z (`-ush58uailrg9NaSp6Olq`)

### Notes

- A lot of the files changed in this version only had a `sourceMappingURL` appended to them, but the sourcemap file it points to wasn't able to be downloaded. I suspect this was unintentional:
  - eg. `//# sourceMappingURL=main-abb0536823058f9d.js.map`
- App release version (Git SHA?): `852018811988005c25380d3d1b8647b695d5f0f9`
  - Extracted with `grep -C 3 'service: "chatgpt-web"' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/framework-31ffa51d236da229.js
https://cdn.oaistatic.com/_next/static/chunks/main-abb0536823058f9d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-cc9d416427190a04.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-d3a435e20d062ea2.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-c82c25c608202a42.js
https://cdn.oaistatic.com/_next/static/-ush58uailrg9NaSp6Olq/_buildManifest.js
https://cdn.oaistatic.com/_next/static/-ush58uailrg9NaSp6Olq/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_error-dfd7db9208d5bc06.js
https://cdn.oaistatic.com/_next/static/chunks/pages/account/cancel-92d8ce0316071915.js
https://cdn.oaistatic.com/_next/static/chunks/pages/account/manage-d6c22d23218f3753.js
https://cdn.oaistatic.com/_next/static/chunks/5017-0a08fd85cfa9ab00.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin-39c2ae0afab0be67.js
https://cdn.oaistatic.com/_next/static/chunks/3a34cc27-e83cff9ee2ba2afc.js
https://cdn.oaistatic.com/_next/static/chunks/7549-122f729dc49e6850.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/analytics-d2b18f0d4a4ace1d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/billing-3460394477b79220.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/identity-218afc4729fd8fe7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/settings-6f7bbe791acce9c8.js
https://cdn.oaistatic.com/_next/static/chunks/pages/aip/[pluginId]/oauth/callback-c02c08f2e2c17ef9.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/enable/internal-8b94460bec0887ad.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/error-a9f157429575d195.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/ext_callback-c7e9292cfb6c0c0b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/ext_callback_refresh-6c967c6bb3c60b1d.js
https://cdn.oaistatic.com/_next/static/chunks/3975-41d682cd3b400211.js
https://cdn.oaistatic.com/_next/static/chunks/3754-2a73b1394b439d25.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/login-001159e4899e6e7a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/logout-83b0ce66a0f7311e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/mocked_login-93f5191aa551662a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/bypass-4782eea63108c9bc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-5a880474edd89882.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-871a5686c4458639.js
https://cdn.oaistatic.com/_next/static/chunks/6276-3569bf96f185cf3c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/discovery-1adcbd1503d5106b.js
https://cdn.oaistatic.com/_next/static/chunks/192-af400bcd8b47f7a3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor-072951efa1e8a25c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor/[slug]-f65318b3e7e56625.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-0b23c86464417b3f.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/accepted-e76cf8d6bd8ad095.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-30b96390f59bab0a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-eaec433589ea05de.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-team-d006f4e1e72ce6c0.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-trial-d13a6df60456b624.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-ef6fcdc77eae779e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-d2c277e4dbba655d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/status-155fd86ce86ecc55.js
https://cdn.oaistatic.com/_next/static/chunks/pages/workspace/deactivated-8521e44b668891fc.js
```

### From `_next/static/chunks/webpack-c82c25c608202a42.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/queryString.df174924c6968fe4.js
https://cdn.oaistatic.com/_next/static/chunks/tsub-middleware.50753041151f9c21.js
https://cdn.oaistatic.com/_next/static/chunks/30750f44.d4730e5f8b65e198.js
https://cdn.oaistatic.com/_next/static/chunks/schemaFilter.3a60974229840ffd.js
https://cdn.oaistatic.com/_next/static/chunks/auto-track.fa6fc1112abad268.js
https://cdn.oaistatic.com/_next/static/chunks/legacyVideos.87e726622393959c.js
https://cdn.oaistatic.com/_next/static/chunks/remoteMiddleware.32ab39c72c4d4509.js
https://cdn.oaistatic.com/_next/static/chunks/ajs-destination.d9cd2d046a23b656.js
https://cdn.oaistatic.com/_next/static/chunks/119.0844e4df93c5188c.js
https://cdn.oaistatic.com/_next/static/chunks/1802.c8bf7a6f2417514c.js
https://cdn.oaistatic.com/_next/static/chunks/1966.63f2f6562c459b3e.js
https://cdn.oaistatic.com/_next/static/chunks/1994.9ac177279866526d.js
https://cdn.oaistatic.com/_next/static/chunks/2186.34fe7ff92a4f6a1f.js
https://cdn.oaistatic.com/_next/static/chunks/4113.0c0ee75dab4b3a1d.js
https://cdn.oaistatic.com/_next/static/chunks/4114.a1302f6d61ae32c1.js
https://cdn.oaistatic.com/_next/static/chunks/8009.c6c0f36a9a82d8dd.js
https://cdn.oaistatic.com/_next/static/chunks/9387.218c2da8808ec9c3.js
https://cdn.oaistatic.com/_next/static/css/8f2a2da44b8da8d5.css
```

## 2024-01-05Z (`PEO14vuOqqjOQtCs82SgS`)

### Notes

- App release version (Git SHA?): `ee459c90fe0bd8be3146d1b05cac633ab3c5a86b`
  - Extracted with `grep -C 3 'service: "chatgpt-web"' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-6f5714b74826d9f8.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-5646d29a9fe81c6b.js
https://cdn.oaistatic.com/_next/static/PEO14vuOqqjOQtCs82SgS/_buildManifest.js
https://cdn.oaistatic.com/_next/static/PEO14vuOqqjOQtCs82SgS/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-c5413facf22f70cb.js
https://cdn.oaistatic.com/_next/static/chunks/6276-32619f7589d1c892.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/discovery-51c1fb442a5d6a51.js
https://cdn.oaistatic.com/_next/static/chunks/192-b633a5ea9fc82ab3.js
```

### From `_next/static/chunks/webpack-5646d29a9fe81c6b.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/851ebaec58abad64.css
```

## 2024-01-04Z (`wvxlBkHE5usnj-32Td8Nr`)

### Notes

- App release version (Git SHA?): `4172b73bd5822a266abda2f7afb829f413761521`
  - Extracted with `grep -C 3 'service: "chatgpt-web"' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-c65a674674e57418.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-e3ee114076ef4ad4.js
https://cdn.oaistatic.com/_next/static/wvxlBkHE5usnj-32Td8Nr/_buildManifest.js
https://cdn.oaistatic.com/_next/static/wvxlBkHE5usnj-32Td8Nr/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/3754-a18653d9d4bfd554.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/logout-d11db11603a1a477.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-b5a277fa600c8450.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-8c7558ce5704445d.js
https://cdn.oaistatic.com/_next/static/chunks/6276-29906ee73c008f82.js
https://cdn.oaistatic.com/_next/static/chunks/192-865b00edd7c32b95.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-8ad7cd389335ca03.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-63420656fb636203.js
```

## 2024-01-02Z (`aNEO7zh0z5I01hzE5e-99`) `[as well as earlier missing changes]`

### Notes

- This is the first full build that has been archived in a long time. As such, a lot of the changes attributed to this build may have occurred in older builds.
- App release version (Git SHA?): `cbdf570d5262e3f08d96b4dacb59e25f7f1a849c`
  - Extracted with `grep -C 3 'service: "chatgpt-web"' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/main-5b2c736082034b80.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-c7bb6e9c1471fff7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-f655a2695b0d28dd.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-e9f77ccad7f872cc.js
https://cdn.oaistatic.com/_next/static/aNEO7zh0z5I01hzE5e-99/_buildManifest.js
https://cdn.oaistatic.com/_next/static/aNEO7zh0z5I01hzE5e-99/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_error-b43f54d044ec2f25.js
https://cdn.oaistatic.com/_next/static/chunks/pages/account/cancel-f8e8da26c181d170.js
https://cdn.oaistatic.com/_next/static/chunks/pages/account/manage-396e4df2072cd915.js
https://cdn.oaistatic.com/_next/static/chunks/5017-dc62820c5a35986c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin-8f957bad7cabc93f.js
https://cdn.oaistatic.com/_next/static/chunks/3a34cc27-fd0458d5c342aa61.js
https://cdn.oaistatic.com/_next/static/chunks/7549-d2a333e769651485.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/analytics-cbc0f5c446bb2eb7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/billing-2095e104a2691e45.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/identity-2aea3c696b2df83d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/settings-eb692e8b61f01e98.js
https://cdn.oaistatic.com/_next/static/chunks/pages/aip/[pluginId]/oauth/callback-65793e0a08d56e1d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/enable/internal-d991ddf2a6aaad1e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/error-25b89c24abe59fd8.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/ext_callback-5eabd2305c18a61d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/ext_callback_refresh-565d8770e52c929a.js
https://cdn.oaistatic.com/_next/static/chunks/3975-78ada888750e0be2.js
https://cdn.oaistatic.com/_next/static/chunks/3754-d4bbe2fcb49f7ccf.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/login-deef6484f170bae2.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/logout-6543c375b9d668bc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/mocked_login-1cbeed1e3f3eedd3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/bypass-71f135c5de432308.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-c865238c12b838da.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-43c9a845011460dc.js
https://cdn.oaistatic.com/_next/static/chunks/6276-daa78bdf869b1a13.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/discovery-04d6cb68d3f1d0f9.js
https://cdn.oaistatic.com/_next/static/chunks/192-ad27ef03b2f15a6c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor-066904f093c6dd65.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor/[slug]-145af87f7e35328a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-7e5560272a89fb83.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/accepted-c068cb61b8b506e3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-52636a17fdba5069.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-e1c52df5035926ea.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-team-3e97e6d92488eac1.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-trial-6f90b93d2f1db032.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-1bc2122f50a59fe6.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-85712fe02fb7f60a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/status-7535f2156b7bed72.js
https://cdn.oaistatic.com/_next/static/chunks/pages/workspace/deactivated-5693ccd6d077ee1d.js
```

### From `_next/static/chunks/webpack-e9f77ccad7f872cc.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/queryString.8adb6b5c02556ce6.js
https://cdn.oaistatic.com/_next/static/chunks/tsub-middleware.3374035675f076dc.js
https://cdn.oaistatic.com/_next/static/chunks/30750f44.a60fa59b43352d38.js
https://cdn.oaistatic.com/_next/static/chunks/ajs-destination.e1aa47a6763cf015.js
https://cdn.oaistatic.com/_next/static/chunks/schemaFilter.73b39b05e6227404.js
https://cdn.oaistatic.com/_next/static/chunks/auto-track.0fcd3f76ff2101a2.js
https://cdn.oaistatic.com/_next/static/chunks/legacyVideos.2d1b98130afed9f4.js
https://cdn.oaistatic.com/_next/static/chunks/remoteMiddleware.f7cb01c1ad1c1b5c.js
https://cdn.oaistatic.com/_next/static/chunks/119.9715f7a5d74c5dc4.js
https://cdn.oaistatic.com/_next/static/chunks/132.83d7e17c16fd8132.js
https://cdn.oaistatic.com/_next/static/chunks/660.77cef428334b8c7c.js
https://cdn.oaistatic.com/_next/static/chunks/676.1bfe8472c17a4431.js
https://cdn.oaistatic.com/_next/static/chunks/718.bfad06553a93eea2.js
https://cdn.oaistatic.com/_next/static/chunks/1141.332708630b4a231f.js
https://cdn.oaistatic.com/_next/static/chunks/1597.d4eb43476c9e150e.js
https://cdn.oaistatic.com/_next/static/chunks/1776.0eac1b1350870c2b.js
https://cdn.oaistatic.com/_next/static/chunks/1777.6b3c6b7d50f77208.js
https://cdn.oaistatic.com/_next/static/chunks/1802.ad82d470c791d926.js
https://cdn.oaistatic.com/_next/static/chunks/1948.3d58d4c87f52e48b.js
https://cdn.oaistatic.com/_next/static/chunks/1966.293545626fb83130.js
https://cdn.oaistatic.com/_next/static/chunks/1994.e65be55a70db455e.js
https://cdn.oaistatic.com/_next/static/chunks/2143.ea9e823f2bd77aef.js
https://cdn.oaistatic.com/_next/static/chunks/2161.f1027e185705266a.js
https://cdn.oaistatic.com/_next/static/chunks/2178.aaed520ab4cc644a.js
https://cdn.oaistatic.com/_next/static/chunks/2186.470cc82a65d54ead.js
https://cdn.oaistatic.com/_next/static/chunks/2212.bcacf06d94483a62.js
https://cdn.oaistatic.com/_next/static/chunks/2292.dcd90c22db8910bb.js
https://cdn.oaistatic.com/_next/static/chunks/3060.1b59381201c72ba3.js
https://cdn.oaistatic.com/_next/static/chunks/3332.6c3e47346a9886cd.js
https://cdn.oaistatic.com/_next/static/chunks/3432.5c05268a818165ff.js
https://cdn.oaistatic.com/_next/static/chunks/3466.717ff042c32afd18.js
https://cdn.oaistatic.com/_next/static/chunks/3705.358ec276a187d609.js
https://cdn.oaistatic.com/_next/static/chunks/4042.51fb1fb3fefd1323.js
https://cdn.oaistatic.com/_next/static/chunks/4113.2090375c63035897.js
https://cdn.oaistatic.com/_next/static/chunks/4114.d5b644d4ccc9b88c.js
https://cdn.oaistatic.com/_next/static/chunks/4347.aac4cf6518253b89.js
https://cdn.oaistatic.com/_next/static/chunks/4505.9b3d666e914eedaf.js
https://cdn.oaistatic.com/_next/static/chunks/4615.4da2f6655936890d.js
https://cdn.oaistatic.com/_next/static/chunks/4616.afcdcfb6100e51d2.js
https://cdn.oaistatic.com/_next/static/chunks/4685.eac6837428e47dc3.js
https://cdn.oaistatic.com/_next/static/chunks/4700.df19e8bf8e233dd5.js
https://cdn.oaistatic.com/_next/static/chunks/4806.229ecbf1fb5b1d69.js
https://cdn.oaistatic.com/_next/static/chunks/5187.e5b8658848daef14.js
https://cdn.oaistatic.com/_next/static/chunks/5288.936760e0c8693849.js
https://cdn.oaistatic.com/_next/static/chunks/5632.959c8dbfb88ae5e3.js
https://cdn.oaistatic.com/_next/static/chunks/5883.ce85f9333c551899.js
https://cdn.oaistatic.com/_next/static/chunks/5952.0d37592c4e442cd9.js
https://cdn.oaistatic.com/_next/static/chunks/6291.41f8e3c0a04b1f70.js
https://cdn.oaistatic.com/_next/static/chunks/6522.0ca47c83d87afc29.js
https://cdn.oaistatic.com/_next/static/chunks/6550.e5aff145ab8e2ca6.js
https://cdn.oaistatic.com/_next/static/chunks/6867.9a3913aafa7e7579.js
https://cdn.oaistatic.com/_next/static/chunks/6875.b12af4fa56bdc138.js
https://cdn.oaistatic.com/_next/static/chunks/6951.4dd986a792a5b15f.js
https://cdn.oaistatic.com/_next/static/chunks/6952.0c7b4a22ec3e5712.js
https://cdn.oaistatic.com/_next/static/chunks/7198.5fe99b2882f3639c.js
https://cdn.oaistatic.com/_next/static/chunks/7659.7e6c7d5c88327d54.js
https://cdn.oaistatic.com/_next/static/chunks/7745.83bc9cd090326372.js
https://cdn.oaistatic.com/_next/static/chunks/7791.4e576c83af1f1aad.js
https://cdn.oaistatic.com/_next/static/chunks/7795.c96ebb6b5ff4f335.js
https://cdn.oaistatic.com/_next/static/chunks/7947.84f4094fc3c966fd.js
https://cdn.oaistatic.com/_next/static/chunks/7994.268cec8d0c757708.js
https://cdn.oaistatic.com/_next/static/chunks/8009.948e0c30bf7906c0.js
https://cdn.oaistatic.com/_next/static/chunks/8226.6c6263b923c0c229.js
https://cdn.oaistatic.com/_next/static/chunks/8400.550d17b88dff12e2.js
https://cdn.oaistatic.com/_next/static/chunks/9087.0320e1c69857fe0f.js
https://cdn.oaistatic.com/_next/static/chunks/9120.88b2bf04dae9eeac.js
https://cdn.oaistatic.com/_next/static/chunks/9271.2f2dbd62073e36a8.js
https://cdn.oaistatic.com/_next/static/chunks/9387.d4ce6cde30024b90.js
https://cdn.oaistatic.com/_next/static/chunks/9826.d9d67e7d2c47379d.js
https://cdn.oaistatic.com/_next/static/css/73fc0a5f171c2f83.css
```
