# Changelog

Note that while the contents within this CHANGELOG will be kept up to date with the latest changes and insights, you may also like some of the historical insights captured at the following gist:

- [Reverse engineering ChatGPT's frontend web app + deep dive explorations of the code (0xdevalias gist)](https://gist.github.com/0xdevalias/4ac297ee3f794c17d0997b4673a2f160#reverse-engineering-chatgpts-frontend-web-app--deep-dive-explorations-of-the-code)

## 2023-06-23Z (`6tvBacVQggsxEa50Su7EW`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - There seems to be a new `GET /api/content/*` endpoint
    - There is at least 1 known usage of this currently: `GET /api/content/vision`
  - References to a seemingly new feature: `visionContent`, that uses a lab beaker and crossed out face svg's (upcoming/unreleased feature?)
  - Refinement of error messages relating to `fileUpload` (another upcoming/unreleased feature?)
- `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - New chunk `882` added: `static/chunks/97c719b8-881a2d42a6930388.js`
- `unpacked/_next/static/chunks/webpack.js`
  - Despite the large amount of diff churn here, the main changes seem to be:
    - Chunk `97` hash changed to `3a8e822067f27ef6`
    - Chunk `734` hash changed to `5b153bb5492b0994`
    - Chunk `798` with name prefix `68a27ff6` hash changed to `c22fcee210a6c939`
    - New chunk added `882` with name prefix `97c719b8` hash `881a2d42a6930388`
    - CSS hash changed to `de85cdd511acf762`
- `unpacked/_next/static/chunks/pages/_app.js`
  - Added `U.getContent` function:
    - ```js
      B.fetch("/api/content/".concat(U), {
        method: "GET",
        headers: (0, Z._)({}, B.getAuthHeader()),
      }),
      ```
- `unpacked/_next/static/chunks/68a27ff6.js`
  - Added an svg of a lab beaker containing some liquid
- `unpacked/_next/static/chunks/97c719b8.js`
  - Added an svg of a face with a line crossed through it
- `unpacked/_next/static/chunks/734.js`
  - `nE = "oai/apps/hasSeenVisionOnboarding";`
    - Lots of content around this section of the diff relating to `visionContent`..
    - `var nB = { beaker: ep.uv5, face: nA.vm9 };`
      - There's the usage of the beaker (`68a27ff6.js`) and face (`97c719b8.js`) svg's included in some of the other changed chunks
    - `ea.ZP.getContent("vision").catch(function () {`
      - Looking at the definition of `getContent` above, we can see that this will access an endpoint of `GET /api/content/vision`
    - Some refinement/cleanup of error messages around file upload/download/etc to follow their standard patterns
      - ```js
        var t = o("default_create_entry_error", {
          fileName: null == i ? void 0 : i.name,
        });
        ```
      - ```js
        void 0 !== e.code && (t = o(e.code)),
          nN.m.danger(t, nI),
        ```
      - ```js
        ea.ZP.getFileDownloadLink(p).catch(function (e) {
          var t = S("default_download_link_error", {
            fileName: null == i ? void 0 : i.name,
          });
          throw (
            (void 0 !== e.code && (t = S(e.code)),
            nN.m.danger(t, nI),
            null == to || to(null == i ? void 0 : i.name),
            new ej.gK(t, void 0, e.code))
          );
        }),
        ```
      - ```js
        ea.ZP.getFileDownloadLink(G).catch(function (e) {
          var t = X("default_download_link_error", {
            fileName: null == O ? void 0 : O.name,
          });
        ```
      - etc
- `unpacked/_next/static/chunks/97.js`
  - Changes within `25094: function (e, t, n) {`
    - Added a number of error messages related to handling of `file-service://`
      - ```js
        var u = (0, n(3001).vU)({
          defaultCreateEntryError: {
            id: "fileUpload.defaultCreateEntryError",
            defaultMessage: "Unable to upload file",
            description: "Error message when file upload fails",
          },
          defaultDownloadLinkError: {
            id: "fileUpload.defaultDownloadLinkError",
            defaultMessage: "Failed to get upload status for {fileName}",
            description: "Error message when file download link fails",
          },
          unknownError: {
            id: "fileUpload.unknownError",
            defaultMessage: "Unknown error occurred",
            description: "Error message when file upload fails",
          },
          fileTooLarge: {
            id: "fileUpload.fileTooLarge",
            defaultMessage: "File is too large",
            description: "Error message when file is too large to upload",
          },
          overUserQuota: {
            id: "fileUpload.overUserQuota",
            defaultMessage: "User quota exceeded",
            description:
              "Error message when user storage space (quote) has been exceeded",
          },
          fileNotFound: {
            id: "fileUpload.fileNotFound",
            defaultMessage: "File not found",
            description: "Error message when file was not found",
          },
          fileTimedOut: {
            id: "fileUpload.fileTimedOut",
            defaultMessage: "File upload timed out. Please try again.",
            description: "Error message when file upload timed out",
          },
          codeInterpreterSessionTimeout: {
            id: "fileUpload.codeInterpreterSessionTimeout",
            defaultMessage: "Code interpreter session expired",
            description: "Error message when code interpreter session expired",
          },
        });
        ```
- The following files had nothing much of note:
  - `unpacked/_next/static/chunks/pages/index.js`
  - `unpacked/_next/static/chunks/pages/c/[chatId].js`
  - `unpacked/_next/static/chunks/pages/share/[[...shareParams]].js`
  - `unpacked/_next/static/css/miniCssF.css`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/68a27ff6-c22fcee210a6c939.js
https://chat.openai.com/_next/static/chunks/734-5b153bb5492b0994.js
https://chat.openai.com/_next/static/chunks/97-3a8e822067f27ef6.js
https://chat.openai.com/_next/static/chunks/97c719b8-881a2d42a6930388.js
https://chat.openai.com/_next/static/chunks/pages/_app-165e157a34a00cb3.js
https://chat.openai.com/_next/static/chunks/pages/index-8859e7d8d8d02e0a.js
https://chat.openai.com/_next/static/chunks/webpack-efad5f8368f3cf1b.js
https://chat.openai.com/_next/static/6tvBacVQggsxEa50Su7EW/_buildManifest.js
https://chat.openai.com/_next/static/6tvBacVQggsxEa50Su7EW/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/c/[chatId]-f8e28b466b1a7b05.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-18ed836654c46a16.js
```

### From `_next/static/chunks/webpack-efad5f8368f3cf1b.js`

#### Archived

```
https://chat.openai.com/_next/static/css/de85cdd511acf762.css
```

## 2023-06-22Z (`4OtK2GZhlDGpQWluC3GLQ`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - There seem to be updates related to custom user contexts, some disclaimers around shared links, and a new oauth redirect endpoint/flow for plugin auth
- `unpacked/_next/static/chunks/734.js`
  - `if (m.has("new_plugin_oauth_endpoint"))`
  - `if (g.has("new_plugin_oauth_endpoint"))`
  - ```js
    userContextCustomProfileDisclaimer: {
      id: "sharedConversation.userContextCustomProfileDisclaimer",
      defaultMessage:
        "The creator of this chat is using a custom profile, which can meaningfully change how the model responds.",
      description:
        "Disclaimer about our lack of support for custom profiles with shared links",
    },
    userContextCustomProfileAndCodeInterpreterSupportDisclaimer: {
      id: "sharedConversation.userContextCustomProfileAndCodeInterpreterSupportDisclaimer",
      defaultMessage:
        "The creator of this chat is using a custom profile, which can meaningfully change how the model responds. The chat contains files or images produced by Code Interpreter which are not yet visible in Shared Chats.",
      description:
        "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links and not sharing custom profile data",
    },
    ```
  - ```js
    shouldShowCodeInterpreterDisclaimer: o,
    shouldShowUserContextCustomProfileDisclaimer: s,
    ```
  - ```js
    var t = e.shouldShowCodeInterpreterDisclaimer,
    n = e.shouldShowUserContextCustomProfileDisclaimer;
    ```
  - ```js
    userContextCustomProfileDisclaimer: {
      id: "sharingModal.userContextCustomProfileDisclaimer",
      defaultMessage:
        "Your custom profile data won’t be shared with recipients.",
      description:
        "Disclaimer about our policy to not copy over custom profile data which could have PII",
    },
    userContextCustomProfileAndCodeInterpreterSupportDisclaimer: {
      id: "sharingModal.userContextCustomProfileAndCodeInterpreterSupportDisclaimer",
      defaultMessage:
        "Recipients won’t be able to view images, download files, or custom profiles.",
      description:
        "Disclaimer about our lack of support for Code Interpreter inline images and file downloads with shared links and not sharing custom profile data",
    },
    ```
  - ```js
    shouldShowCodeInterpreterDisclaimer: G,
    shouldShowUserContextCustomProfileDisclaimer: W,
    ```
  - ```js
    var t = e.shouldShowCodeInterpreterDisclaimer,
    n = e.shouldShowUserContextCustomProfileDisclaimer;
    ```
- `unpacked/_next/static/chunks/97.js`
  - ```js
    function v() {
      return (v = (0, r._)(function (e, t) {
        var n, r;
        return (0, o.Jh)(this, function (a) {
          switch (a.label) {
            case 0:
              return (
                (n = ""
                  .concat(window.location.origin, "/aip/")
                  .concat(e.id, "/oauth/callback")),
                [4, c.ZP.pluginOauthRedirect(e.id, n, t)]
              );
            case 1:
              return (
                (r = a.sent()), (window.location.href = r.redirect_uri), [2]
              );
          }
        });
      })).apply(this, arguments);
    }
    ```
  - ```js
    (null === (e = n.message.metadata) || void 0 === e
      ? void 0
      : e.is_user_system_message)
    ```
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```js
    (U.pluginOauthRedirect = function (U, B, G) {
      var Y = new URLSearchParams({ redirect_uri: B });
      return this.fetch(
        ""
          .concat(tE, "/aip/p/")
          .concat(U, "/user-settings/oauth/redirect?")
    ```
    - Changed from `/user-settings/oauth/callback?` to `/user-settings/oauth/redirect?` and added `redirect_uri` to the URL params
  - ```js
    (U.pluginOauthCallback = function (U, B, G, Y, V) {
      var J = new URLSearchParams({ code: B, redirect_uri: G });
      return (
        null != Y && J.append("state", Y),
        this.fetch(
          ""
            .concat(tE, "/aip/p/")
            .concat(U, "/user-settings/oauth/callback?")
            .concat(J),
          {
            method: "GET",
            headers: (0, Z._)(
              { "Content-Type": "application/json" },
              this.getAuthHeader(V)
            ),
          }
        )
      );
    }),
    ```
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/css/miniCssF.css`
  - `unpacked/_next/static/chunks/pages/aip/[pluginId]/oauth/callback.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/734-83a5aa60b258146b.js
https://chat.openai.com/_next/static/chunks/97-f3a02ec205a1c717.js
https://chat.openai.com/_next/static/chunks/pages/_app-c44676992fc5202a.js
https://chat.openai.com/_next/static/chunks/webpack-b5b8e60204a3dd72.js
https://chat.openai.com/_next/static/4OtK2GZhlDGpQWluC3GLQ/_buildManifest.js
https://chat.openai.com/_next/static/4OtK2GZhlDGpQWluC3GLQ/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/aip/[pluginId]/oauth/callback-46435bdb0df161ef.js
```

### From `_next/static/chunks/webpack-b5b8e60204a3dd72.js`

#### Archived

```
https://chat.openai.com/_next/static/css/f7d82a9bec741d6c.css
```

## 2023-06-22Z (`CTxpiEb45oE7hUCOWm4Jq`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- `unpacked/_next/static/chunks/97.js`
  - `W = (0, K.sN)(K.F_.isBusinessWorkspace),`
  - `k = v.has("business_seats") && C.length > 1,`
  - ```js
    (0, l.jsxs)(tp, {
      href: "/admin?workspaceId=".concat(p),
      children: [
        (0, l.jsx)(M.ZP, { icon: to.Z }),
        (0, l.jsx)(b.Z, (0, h._)({}, tC.myWorkspaceSettings)),
      ],
    }),
    ```
  - ```js
    g.has("files_list_ui") && K && (0, l.jsx)(e_, {}),
    g.has("system_message2") && (0, l.jsx)(e9, {}),
    ```
    - These weren't newly added in this release, but I hadn't called them out before
  - Added function: `870: function (e, t, n) {`
    - Not sure what this is doing, but it has keys in it like `Root`, `Trigger`, `Portal`, `Content`, `Item`, etc
- The following files had nothing much of note:
  - `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - `unpacked/_next/static/chunks/webpack.js`
  - `unpacked/_next/static/chunks/pages/_app.js`
  - `unpacked/_next/static/css/miniCssF.css`
  - `unpacked/_next/static/chunks/734.js`
  - `unpacked/_next/static/chunks/pages/account/upgrade.js`
  - `unpacked/_next/static/chunks/pages/admin.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/pages/_app-a444a84230b84b44.js
https://chat.openai.com/_next/static/chunks/webpack-56ce76d9c59bf528.js
https://chat.openai.com/_next/static/CTxpiEb45oE7hUCOWm4Jq/_buildManifest.js
https://chat.openai.com/_next/static/CTxpiEb45oE7hUCOWm4Jq/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/734-c9a43325ee64d37c.js
https://chat.openai.com/_next/static/chunks/97-46cf8196eb1aa6a0.js
https://chat.openai.com/_next/static/chunks/pages/account/upgrade-820ccb7a4eab8bde.js
https://chat.openai.com/_next/static/chunks/pages/admin-04e18953a86ba790.js
```

### From `_next/static/chunks/webpack-56ce76d9c59bf528.js`

#### Archived

```
https://chat.openai.com/_next/static/css/86fd2ba616a5af70.css
```

## 2023-06-22Z (`kwYJPc99Lx-XLUrLes-Se`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- `unpacked/_next/static/chunks/68a27ff6.js`
  - An 'info icon' svg was added
- `unpacked/_next/static/chunks/pages/_app.js`
  - Added a `markFileUploadFailed` function
    - ```js
      G.fetch(
        "".concat(tE, "/files/").concat(U, "/upload-failed"),
        {
          method: "POST",
          headers: (0, Z._)({}, G.getAuthHeader()),
          body: JSON.stringify({ error: B }),
        }
      )
      ```
- `unpacked/_next/static/chunks/734.js`
  - Text changed:
    - From: `Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send parts of your conversation and the country or state you're in to the plugin to enhance your conversation.`
    - To: `Plugins connect ChatGPT to external apps. If you enable a plugin, ChatGPT may send your conversation and the country or state you're in to the plugin.`
- `unpacked/_next/static/chunks/97.js`
  - Added:
    - ```js
      (f.TetherBrowsingDisplay = "tether_browsing_display"),
      (f.TetherQuote = "tether_quote"),
      ```
  - Added strings for:
    - `userContextModal.ok`: `"OK"`
    - `userContextModal.messageLimitError`: `"Please limit your responses to {limit} characters or less."`
    - `userContextModal.showTips`: `"Show tips"`
    - `userContextModal.hideTips`: `"Hide tips"`
  - `Z.getTree(e).getUserContext()` / `t.getUserContext = function ()`
  - ```js
    "tether_browsing_display" === n ||
    "tether_quote" === n
    ```

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/68a27ff6-276464568c486afd.js
https://chat.openai.com/_next/static/chunks/734-906e48db04732907.js
https://chat.openai.com/_next/static/chunks/97-3e768f0e33305034.js
https://chat.openai.com/_next/static/chunks/pages/_app-408f9162aa0da5db.js
https://chat.openai.com/_next/static/chunks/webpack-e726f3523118b318.js
https://chat.openai.com/_next/static/kwYJPc99Lx-XLUrLes-Se/_buildManifest.js
https://chat.openai.com/_next/static/kwYJPc99Lx-XLUrLes-Se/_ssgManifest.js
```

### From Build Manifest

N/A

### From `_next/static/chunks/webpack-e726f3523118b318.js`

#### Archived

```
https://chat.openai.com/_next/static/css/badc091b46b76790.css
```

## 2023-06-21Z (`9rHv4XACEoIItIhKMAq4_`)

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/2802bd5f-15923fb46be55b45.js
https://chat.openai.com/_next/static/chunks/webpack-4ea24703f0cd02d1.js
https://chat.openai.com/_next/static/9rHv4XACEoIItIhKMAq4_/_buildManifest.js
https://chat.openai.com/_next/static/9rHv4XACEoIItIhKMAq4_/_ssgManifest.js
```

#### Missing

```
https://chat.openai.com/_next/static/chunks/734-e4b26f97df757a42.js
https://chat.openai.com/_next/static/chunks/pages/_app-e4816c996c959118.js
```

### From Build Manifest

N/A

## 2023-06-18Z (`2zx-gqs4DHnXCij8pMcM3`)

### Notes

- Chunks added:
  - `_next/static/chunks/2802bd5f-c955b1c4ddd1fafa.js` (aka: `741`)
- Chunks renamed:
  - `_next/static/chunks/692-a1e5a91f2cd1f1d0.js` -> `_next/static/chunks/706-e33bcf27ab9ae69b.js`
  - `_next/static/chunks/434-6f11f27f549beeab.js` -> `_next/static/chunks/724-7e5ae5baa21b3987.js`
  - `_next/static/chunks/361-60e0aba55566c224.js` -> `_next/static/chunks/778-70237646364794cd.js`

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/webpack-903914f4d31f626d.js
https://chat.openai.com/_next/static/chunks/pages/_app-8a1a6cb86aab622f.js
https://chat.openai.com/_next/static/chunks/2802bd5f-c955b1c4ddd1fafa.js
https://chat.openai.com/_next/static/chunks/706-e33bcf27ab9ae69b.js
https://chat.openai.com/_next/static/chunks/724-7e5ae5baa21b3987.js
https://chat.openai.com/_next/static/chunks/97-f77b35921b7168e1.js
https://chat.openai.com/_next/static/chunks/734-33a2d229b27343b9.js
https://chat.openai.com/_next/static/chunks/pages/index-6081460d01aa4d00.js
https://chat.openai.com/_next/static/2zx-gqs4DHnXCij8pMcM3/_buildManifest.js
https://chat.openai.com/_next/static/2zx-gqs4DHnXCij8pMcM3/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/778-70237646364794cd.js
https://chat.openai.com/_next/static/chunks/pages/admin-85c2b8121aef57bc.js
https://chat.openai.com/_next/static/chunks/pages/c/[chatId]-9622de1930d02aae.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-b2e331698a452053.js
```

### From `_next/static/chunks/webpack-903914f4d31f626d.js`

#### Archived

```
https://chat.openai.com/_next/static/css/dc06f43874f6f09a.css
```

## 2023-06-16Z (`Wnd5NrsJwJ8L-68NTfmnl`)

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/Wnd5NrsJwJ8L-68NTfmnl/_buildManifest.js
https://chat.openai.com/_next/static/Wnd5NrsJwJ8L-68NTfmnl/_ssgManifest.js
```

#### Missing

```
https://chat.openai.com/_next/static/chunks/webpack-9a9034f5af46d16b.js
https://chat.openai.com/_next/static/chunks/pages/_app-81622e641d018d56.js
https://chat.openai.com/_next/static/chunks/97-f1d855e2440b1441.js
https://chat.openai.com/_next/static/chunks/734-242266db87afdbaa.js
```

### From Build Manifest

#### Missing

```
https://chat.openai.com/_next/static/chunks/734-242266db87afdbaa.js
https://chat.openai.com/_next/static/chunks/97-f1d855e2440b1441.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-f0ed420c4581aac4.js
```

## 2023-06-15Z (`OYOAZ1aqhcJ0ghEfSRnPf`)

### Not From Build Manifest

#### Missing

```
https://chat.openai.com/_next/static/chunks/webpack-811addf93867c009.js
https://chat.openai.com/_next/static/chunks/pages/_app-b505480c5fdf1ff2.js
https://chat.openai.com/_next/static/chunks/97-864d9cafbfb4c1dc.js
https://chat.openai.com/_next/static/chunks/734-03d9df820e6eda51.js
https://chat.openai.com/_next/static/OYOAZ1aqhcJ0ghEfSRnPf/_buildManifest.js
https://chat.openai.com/_next/static/OYOAZ1aqhcJ0ghEfSRnPf/_ssgManifest.js
```

## 2023-06-15 (`Sz5I5M8XqNP7c6HNKaN0U`) (or thereabouts..)

### Not From Build Manifest

```
https://chat.openai.com/_next/static/chunks/webpack-38f4f99a26e93577.js
https://chat.openai.com/_next/static/chunks/pages/_app-af7a10d1c668b26a.js
https://chat.openai.com/_next/static/Sz5I5M8XqNP7c6HNKaN0U/_buildManifest.js
https://chat.openai.com/_next/static/Sz5I5M8XqNP7c6HNKaN0U/_ssgManifest.js
```

### From Build Manifest

```
https://chat.openai.com/_next/static/chunks/734-2c7c6bff3bb729e8.js
https://chat.openai.com/_next/static/chunks/97-a81c56d0288837cb.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-669339ba2153c0d5.js
```

### From `_next/static/chunks/webpack-38f4f99a26e93577.js`

#### Missing

```
https://chat.openai.com/_next/static/css/45bab00d63da782d.css
```

## 2023-06-14 (`a3Jc7aP-UMfeR9s4-iLvW`) (or thereabouts.. might include stuff from earlier too)

### Not From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js
https://chat.openai.com/_next/static/chunks/webpack-1eeae5c7aedde088.js
https://chat.openai.com/_next/static/chunks/framework-e23f030857e925d4.js
https://chat.openai.com/_next/static/chunks/main-35ce5aa6f4f7a906.js
https://chat.openai.com/_next/static/a3Jc7aP-UMfeR9s4-iLvW/_buildManifest.js
https://chat.openai.com/_next/static/a3Jc7aP-UMfeR9s4-iLvW/_ssgManifest.js
```

#### Missing

```
https://chat.openai.com/_next/static/chunks/pages/_app-0df67bf7d9e6e732.js
```

### From Build Manifest

#### Archived

```
https://chat.openai.com/_next/static/chunks/012ff928-bcfa62e3ac82441c.js
https://chat.openai.com/_next/static/chunks/1f110208-cda4026aba1898fb.js
https://chat.openai.com/_next/static/chunks/259-c6320349d8f3ff4a.js
https://chat.openai.com/_next/static/chunks/361-60e0aba55566c224.js
https://chat.openai.com/_next/static/chunks/434-6f11f27f549beeab.js
https://chat.openai.com/_next/static/chunks/68a27ff6-a453fd719d5bf767.js
https://chat.openai.com/_next/static/chunks/692-a1e5a91f2cd1f1d0.js
https://chat.openai.com/_next/static/chunks/734-30d5c00c7bdf11c1.js
https://chat.openai.com/_next/static/chunks/bd26816a-981e1ddc27b37cc6.js
https://chat.openai.com/_next/static/chunks/pages/_error-433a1bbdb23dd341.js
https://chat.openai.com/_next/static/chunks/pages/account/cancel-63cd9f049103272b.js
https://chat.openai.com/_next/static/chunks/pages/account/manage-6ac6d4f0510ced68.js
https://chat.openai.com/_next/static/chunks/pages/account/upgrade-f8e411774c23059a.js
https://chat.openai.com/_next/static/chunks/pages/admin-5f0f6fb64c99e55b.js
https://chat.openai.com/_next/static/chunks/pages/aip/[pluginId]/oauth/callback-389963a554a230d2.js
https://chat.openai.com/_next/static/chunks/pages/auth/error-c7951a77c5f4547f.js
https://chat.openai.com/_next/static/chunks/pages/auth/ext_callback-927659025ea31258.js
https://chat.openai.com/_next/static/chunks/pages/auth/ext_callback_refresh-478ebccc4055d75b.js
https://chat.openai.com/_next/static/chunks/pages/auth/login-84359b8c2a70b29c.js
https://chat.openai.com/_next/static/chunks/pages/auth/logout-47cc26eb7b585e67.js
https://chat.openai.com/_next/static/chunks/pages/auth/mocked_login-d5fbb97bc5d39e59.js
https://chat.openai.com/_next/static/chunks/pages/bypass-338530f42d5b2105.js
https://chat.openai.com/_next/static/chunks/pages/c/[chatId]-30b3d2c0863bd449.js
https://chat.openai.com/_next/static/chunks/pages/index-b4d7c4fc4ceeb809.js
https://chat.openai.com/_next/static/chunks/pages/payments/business-ef9abcf545cb03c1.js
https://chat.openai.com/_next/static/chunks/pages/payments/success-4e552661b6a1b2bc.js
https://chat.openai.com/_next/static/chunks/pages/status-6557d60655b68492.js
```

#### Missing

```
https://chat.openai.com/_next/static/chunks/97-536ee884c863676e.js
https://chat.openai.com/_next/static/chunks/pages/share/[[...shareParams]]-44619ef92ec8f3b5.js
```

### From `_next/static/chunks/webpack-1eeae5c7aedde088.js`

#### Archived

```
https://chat.openai.com/_next/static/chunks/178.222b639d19105c6f.js
https://chat.openai.com/_next/static/chunks/187.eac7a415abe0f702.js
https://chat.openai.com/_next/static/chunks/198.cac4414a183eae93.js
https://chat.openai.com/_next/static/chunks/381.dcde9edb10ac0e56.js
https://chat.openai.com/_next/static/chunks/400.ccdbd9c0e044d3a8.js
https://chat.openai.com/_next/static/chunks/746.8d5b3a415019d67f.js
https://chat.openai.com/_next/static/chunks/826.c915ad5cbd3a254b.js
https://chat.openai.com/_next/static/chunks/875.baf2f7fc433709e3.js
https://chat.openai.com/_next/static/chunks/952.da89f65bb2251a73.js
https://chat.openai.com/_next/static/css/dad3a532a4da363e.css
```
