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
- [2024-03-13Z \(`NrPzK0v4SXxn1uId1l2S6`\)](#2024-03-13z-nrpzk0v4sxxn1uid1l2s6)
- [2024-03-12Z \(`KLh-A6U9q2RyznO8FECPx`\)](#2024-03-12z-klh-a6u9q2ryzno8fecpx)
- [2024-03-04Z \(`XlSwjRvDx37Rtl2uQAolc`\)](#2024-03-04z-xlswjrvdx37rtl2uqaolc)
- [2024-03-02Z \(`CdVKBysnaJNkqh_-wcfYZ`\)](#2024-03-02z-cdvkbysnajnkqh_-wcfyz)
- [2024-03-01Z \(`WpoHMzPEcK3msY_nf8_gk`\)](#2024-03-01z-wpohmzpeck3msy_nf8_gk)
- [2024-02-29Z \(`c0cq_5Dd22tX-GDC3Y33A`\)](#2024-02-29z-c0cq_5dd22tx-gdc3y33a)
- [2024-02-24Z \(`6Amu0NiVNwBcqKI_tQZlu`\)](#2024-02-24z-6amu0nivnwbcqki_tqzlu)
- [2024-02-24Z \(`WRJHgIqMF1lNwSuszzsvl`\)](#2024-02-24z-wrjhgiqmf1lnwsuszzsvl)
- [2024-02-23Z \(`CDew-lPM1ewHh4qIpLQqP`\)](#2024-02-23z-cdew-lpm1ewhh4qiplqqp)
- [2024-02-22Z \(`H3Ik95CB8IbemzYEGBRet`\) `[as well as earlier missing changes]`](#2024-02-22z-h3ik95cb8ibemzyegbret-as-well-as-earlier-missing-changes)
- [2024-02-12Z \(`FVFs9JMpH-RFaOJJ6VKnB`\) `[as well as earlier missing changes]`](#2024-02-12z-fvfs9jmph-rfaojj6vknb-as-well-as-earlier-missing-changes)
- [2024-02-06Z \(`oTgm15z1w361g3mBl796W`\)](#2024-02-06z-otgm15z1w361g3mbl796w)
- [2024-02-06Z \(`8eNlznjVNElT8wapWdDOE`\)](#2024-02-06z-8enlznjvnelt8wapwddoe)
- [2024-02-03Z \(`kAMJ5uXo_RnBLFn2scds_`\)](#2024-02-03z-kamj5uxo_rnblfn2scds_)
- [2024-02-03Z \(`cUT12v7YWT4wI-mCJ_MrR`\)](#2024-02-03z-cut12v7ywt4wi-mcj_mrr)
- [2024-02-02Z \(`cJnjwmwanfzv1nD-EjrOa`\)](#2024-02-02z-cjnjwmwanfzv1nd-ejroa)
- [2024-02-01Z \(`pPcfPwRZfdrv0dCws676L`\)](#2024-02-01z-ppcfpwrzfdrv0dcws676l)
- [2024-01-31Z \(`HcJr3AWz9pJF9a2HyS6Cf`\)](#2024-01-31z-hcjr3awz9pjf9a2hys6cf)
- [2024-01-30Z \(`QOvkXTvubXtbvlZ_iHiii`\)](#2024-01-30z-qovkxtvubxtbvlz_ihiii)
- [2024-01-29Z \(`3Frj0dWPrnm3c4KeyI6Zl`\)](#2024-01-29z-3frj0dwprnm3c4keyi6zl)
- [2024-01-28Z \(`PFzTxQNocNiG6gdS1bBR-`\)](#2024-01-28z-pfztxqnocnig6gds1bbr-)
- [2024-01-26Z \(`83oSRqlSVypjfyIfupJ78`\)](#2024-01-26z-83osrqlsvypjfyifupj78)
- [2024-01-25Z \(`szrLZD3jp74fFKmcgupNh`\)](#2024-01-25z-szrlzd3jp74ffkmcgupnh)
- [2024-01-25Z \(`QmYgAUngWc_4uo62fFx_C`\)](#2024-01-25z-qmygaungwc_4uo62ffx_c)
- [2024-01-25Z \(`N5xlkLIlsItbOmqA7rcUO`\)](#2024-01-25z-n5xlklilsitbomqa7rcuo)
- [2024-01-25Z \(`Ciy2lLIu2TbOaLBCgfGi1`\)](#2024-01-25z-ciy2lliu2tboalbcgfgi1)
- [2024-01-24Z \(`IT6Bs6aT0lMIT2GMD2zGo`\)](#2024-01-24z-it6bs6at0lmit2gmd2zgo)
- [2024-01-24Z \(`sfv3TRBfIvsEV2B4_cMOk`\)](#2024-01-24z-sfv3trbfivsev2b4_cmok)
- [2024-01-23Z \(`Nhh-QuOgEGFphEueL7xal`\)](#2024-01-23z-nhh-quogegfpheuel7xal)
- [2024-01-23Z \(`wbIK0kqRaZ7Chlr6S7vCn`\)](#2024-01-23z-wbik0kqraz7chlr6s7vcn)
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

## 2024-03-13Z (`NrPzK0v4SXxn1uId1l2S6`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - NOTE: This historical build's diff was not analysed
- App release version (Git SHA?): `3e26f12440a23781f84d636ea0bf0713063f1be9`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-feb5e4c2e035899c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-28198444b17d1ca2.js
https://cdn.oaistatic.com/_next/static/chunks/vendor-509c97ab74139c17.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-3553015dcb391e55.js
https://cdn.oaistatic.com/_next/static/NrPzK0v4SXxn1uId1l2S6/_buildManifest.js
https://cdn.oaistatic.com/_next/static/NrPzK0v4SXxn1uId1l2S6/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/3a34cc27-680c4c5818883bf2.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/about-2d00d99d85925715.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-5f1c54a7a3cba31d.js
https://cdn.oaistatic.com/_next/static/chunks/2958-8710d83b305d7bff.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-28198444b17d1ca2.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/gpts-a163bafc6a8cb63b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/view-72ae4f99aee37085.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-c669e63adac8bd35.js
```

### From `orig/_next/static/chunks/webpack-3553015dcb391e55.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/3a34cc27-680c4c5818883bf2.js
https://cdn.oaistatic.com/_next/static/chunks/tsub-middleware.6800f3270c51834b.js
https://cdn.oaistatic.com/_next/static/chunks/9271.86969cdc0a48bb77.js
https://cdn.oaistatic.com/_next/static/css/aca04ce8978d150b.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/2526.4bb5afdd39a7093d.js
https://cdn.oaistatic.com/_next/static/chunks/3475.a8c3b516d56db61b.js
https://cdn.oaistatic.com/_next/static/chunks/5647.09b2eae92ea7f42d.js
https://cdn.oaistatic.com/_next/static/chunks/6332.a81efda1f9ddb24d.js
https://cdn.oaistatic.com/_next/static/chunks/6348.95b935570eff6747.js
https://cdn.oaistatic.com/_next/static/chunks/6371.3bbc8b4ce85e55fd.js
https://cdn.oaistatic.com/_next/static/chunks/sso.ece8137417eb52e0.js
```

## 2024-03-12Z (`KLh-A6U9q2RyznO8FECPx`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - NOTE: This historical build's diff was not analysed
- App release version (Git SHA?): `4802936a13b786c129fb60e5c99cabbb5d9f6823`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/main-173f4de37abd20dd.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-dc09512c08323cb5.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-2aa9a2caddc265ef.js
https://cdn.oaistatic.com/_next/static/chunks/vendor-d7c6038104ff2fa4.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-de32c8e978a2ec4e.js
https://cdn.oaistatic.com/_next/static/KLh-A6U9q2RyznO8FECPx/_buildManifest.js
https://cdn.oaistatic.com/_next/static/KLh-A6U9q2RyznO8FECPx/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_error-3318511f0e5c1b1f.js
https://cdn.oaistatic.com/_next/static/chunks/pages/account/cancel-f6fd3317314c9dea.js
https://cdn.oaistatic.com/_next/static/chunks/pages/account/manage-a3974e7c41b78191.js
https://cdn.oaistatic.com/_next/static/chunks/9112-30537590918ecbd2.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin-e20488d510ec8f38.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/analytics-93371c1f3375f528.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/billing-5fe15a26938ef6cb.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/settings-9573c8f86f788bdf.js
https://cdn.oaistatic.com/_next/static/chunks/pages/aip/[pluginId]/oauth/callback-2b19d068846deaca.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/disable_mfa-800ebe66ac079ab3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/enable/internal-ab786385aca0563c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/error-c323dfec727c3893.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/ext_callback-689b8fb324dc87e4.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/ext_callback_refresh-af5cf6f0de8c4eae.js
https://cdn.oaistatic.com/_next/static/chunks/101-58c205119f556099.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/login-f8b6f8218db2011e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/logout-907d164c60969934.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/mocked_login-839acb3ff75e4292.js
https://cdn.oaistatic.com/_next/static/chunks/pages/bypass-b627e2a7042dcc54.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-9afd2f4b5aa23ebc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-c2067874013cb8f2.js
https://cdn.oaistatic.com/_next/static/chunks/8697-ebbae398669b1442.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-924f111208a6f092.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/discovery-df7db60bac02081b.js
https://cdn.oaistatic.com/_next/static/chunks/2958-180049b30ea44386.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor/[slug]-0be5cef2c7c4a1a5.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-dcccd1718c2aad32.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/accepted-5e215bc1f354ddd7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-b198c04f6a1b6021.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-f8dbf0ae344f549d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/status-bd424b4bab5dad4e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/workspace/deactivated-37f7d004c82b32ad.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-2aa9a2caddc265ef.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/gpts-d690ba2c2a91378b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/groups-88de251df5c912ef.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/identity-312bb26352af7abf.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/about-c20a7d2146b03093.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/view-62a85138c9289a22.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor-2126f498ec93fd23.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-6aa301ba9c9f3c34.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-team-270628f955c749d3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-trial-f9311c214105edf8.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-920359f8c429cc73.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search/evals-3990969b7a1eb755.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search/feedback-1e3365456b6f8cef.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-cbfd046d60a829d9.js
```

### From `orig/_next/static/chunks/webpack-de32c8e978a2ec4e.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/676.5bb7370ffbb858d2.js
https://cdn.oaistatic.com/_next/static/chunks/718.0cdf54477bc09e56.js
https://cdn.oaistatic.com/_next/static/chunks/2178.e333d807d301608c.js
https://cdn.oaistatic.com/_next/static/chunks/bad47e52.b54ee0df819c6cf4.js
https://cdn.oaistatic.com/_next/static/chunks/4435.aecc778428f459a9.js
https://cdn.oaistatic.com/_next/static/chunks/5288.03730fe1217ad92c.js
https://cdn.oaistatic.com/_next/static/chunks/6951.3a899f8b3cbdb8ac.js
https://cdn.oaistatic.com/_next/static/chunks/6952.a1c5d2e4ea99dcf0.js
https://cdn.oaistatic.com/_next/static/chunks/8400.665331ae49ac90d1.js
https://cdn.oaistatic.com/_next/static/chunks/9111.0b856f5de33541f4.js
https://cdn.oaistatic.com/_next/static/chunks/9331.89f6aa4c9bac3546.js
https://cdn.oaistatic.com/_next/static/css/94198a96008b8261.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/132.1125e5efc8c011d3.js
https://cdn.oaistatic.com/_next/static/chunks/1141.5db425fa3239333f.js
https://cdn.oaistatic.com/_next/static/chunks/1522.c0b551d34ea54c3c.js
https://cdn.oaistatic.com/_next/static/chunks/1776.a559928822ae5e4b.js
https://cdn.oaistatic.com/_next/static/chunks/1777.d649379b6ce0e5e2.js
https://cdn.oaistatic.com/_next/static/chunks/1948.17959725a51ed9e1.js
https://cdn.oaistatic.com/_next/static/chunks/2143.147915303862c615.js
https://cdn.oaistatic.com/_next/static/chunks/2161.16285d00e55eeb87.js
https://cdn.oaistatic.com/_next/static/chunks/2212.ba787ef472691632.js
https://cdn.oaistatic.com/_next/static/chunks/2292.93c86a421c6a8790.js
https://cdn.oaistatic.com/_next/static/chunks/3032.ac138c27518c6fef.js
https://cdn.oaistatic.com/_next/static/chunks/3060.6f0e0efa15bc0198.js
https://cdn.oaistatic.com/_next/static/chunks/3332.5dc4a5b71413120c.js
https://cdn.oaistatic.com/_next/static/chunks/3432.e0d7ab435f17ac19.js
https://cdn.oaistatic.com/_next/static/chunks/3466.7c5c661e94bbfc84.js
https://cdn.oaistatic.com/_next/static/chunks/3705.20dcc782985dee78.js
https://cdn.oaistatic.com/_next/static/chunks/3842.ca1fe9b294f959ec.js
https://cdn.oaistatic.com/_next/static/chunks/4042.8fff9d960a57876f.js
https://cdn.oaistatic.com/_next/static/chunks/4505.8743dba385120b10.js
https://cdn.oaistatic.com/_next/static/chunks/4615.88e38b555dd6b9a8.js
https://cdn.oaistatic.com/_next/static/chunks/4616.fc54d503dd23adb4.js
https://cdn.oaistatic.com/_next/static/chunks/4685.9242f83ccc05bb40.js
https://cdn.oaistatic.com/_next/static/chunks/4700.e9df4e2c5e918608.js
https://cdn.oaistatic.com/_next/static/chunks/4806.6f2bd022eb96c2b9.js
https://cdn.oaistatic.com/_next/static/chunks/5187.3d69ec35655b11b4.js
https://cdn.oaistatic.com/_next/static/chunks/5632.b4fc0dfa368f08a5.js
https://cdn.oaistatic.com/_next/static/chunks/5647.af834a0ed81da471.js
https://cdn.oaistatic.com/_next/static/chunks/5883.721500bd288fb797.js
https://cdn.oaistatic.com/_next/static/chunks/5952.9eca620f30157003.js
https://cdn.oaistatic.com/_next/static/chunks/6291.ec2b2157c013a157.js
https://cdn.oaistatic.com/_next/static/chunks/6348.e1ad4a96fa6d42a0.js
https://cdn.oaistatic.com/_next/static/chunks/6371.6220f5f2965c3941.js
https://cdn.oaistatic.com/_next/static/chunks/6522.fe1e6d9778296a3c.js
https://cdn.oaistatic.com/_next/static/chunks/6550.4e7bb37daf07e7dd.js
https://cdn.oaistatic.com/_next/static/chunks/6875.c5a09aa1f4fcf613.js
https://cdn.oaistatic.com/_next/static/chunks/7198.6d147401feb5dadc.js
https://cdn.oaistatic.com/_next/static/chunks/7659.31aec60dafdedd37.js
https://cdn.oaistatic.com/_next/static/chunks/7745.f1d5fa2bd5edffc7.js
https://cdn.oaistatic.com/_next/static/chunks/7791.761b3faf5373093a.js
https://cdn.oaistatic.com/_next/static/chunks/7795.409c3d54628d01e9.js
https://cdn.oaistatic.com/_next/static/chunks/7947.5efdb0a4536f051c.js
https://cdn.oaistatic.com/_next/static/chunks/7994.0ea6a65a28e1294d.js
https://cdn.oaistatic.com/_next/static/chunks/8226.b0b621d2409d2932.js
https://cdn.oaistatic.com/_next/static/chunks/sso.3ba77506563e4506.js
https://cdn.oaistatic.com/_next/static/chunks/9087.6d6d0867c2ee5493.js
https://cdn.oaistatic.com/_next/static/chunks/9120.2133977009973086.js
https://cdn.oaistatic.com/_next/static/chunks/9271.1f2ed177ab80e67f.js
https://cdn.oaistatic.com/_next/static/chunks/9826.e983dc80308f4cff.js
```

## 2024-03-04Z (`XlSwjRvDx37Rtl2uQAolc`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - NOTE: This historical build's diff was not analysed
- App release version (Git SHA?): `17165b9b880e13d80d7d9c536292229ebb819df3`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-524498571aaf08a0.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-6c260c0e3056b799.js
https://cdn.oaistatic.com/_next/static/XlSwjRvDx37Rtl2uQAolc/_buildManifest.js
https://cdn.oaistatic.com/_next/static/XlSwjRvDx37Rtl2uQAolc/_ssgManifest.js
```

### From `orig/_next/static/chunks/webpack-6c260c0e3056b799.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/01c5d5d007a82cd2.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.f4329c2b5e3c9d47.js
```

## 2024-03-02Z (`CdVKBysnaJNkqh_-wcfYZ`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - NOTE: This historical build's diff was not analysed
- App release version (Git SHA?): `6cacd3c146c55e7b12b431f62814409e15f4eb78`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-b4436047974471b5.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-d17612b68d054dda.js
https://cdn.oaistatic.com/_next/static/CdVKBysnaJNkqh_-wcfYZ/_buildManifest.js
https://cdn.oaistatic.com/_next/static/CdVKBysnaJNkqh_-wcfYZ/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/error-72f0e29fe9def753.js
https://cdn.oaistatic.com/_next/static/chunks/8756-c3d7d1548a0f953d.js
https://cdn.oaistatic.com/_next/static/chunks/101-fc91c9ddd15d78dd.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-fadd85cfaafb9732.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-651c4f76f173d7b0.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-08c1b7553485f65c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-ba0b467cc7fcd40f.js
https://cdn.oaistatic.com/_next/static/chunks/pages/workspace/deactivated-839ace7e4fef2bf5.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/9112-19d7b893d4bd8492.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin-05fc0b0836a3f8ca.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/analytics-a1fd3629de0fb261.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/billing-67e5848be172b7d5.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/gpts-0cd84d6f40a4d716.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/groups-1af61a96607298ba.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/identity-8d5bf977783c8fc7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/settings-1e792aad6b486bd5.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/enable/internal-9eea08389270f21d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/about-14fe6ee7ed45158e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-73e9e6937b8ba1b7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-805455eeae6d706c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-team-5d6433649cd9a620.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-trial-66fb1b5e30701c83.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-eb7a0d0b14b59851.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search/feedback-de7e39c010c833db.js
```

### From `orig/_next/static/chunks/webpack-d17612b68d054dda.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/3472.d3ee6c3b89fde6d7.js
https://cdn.oaistatic.com/_next/static/chunks/3ee2da9c.aff087ffec3c699c.js
https://cdn.oaistatic.com/_next/static/chunks/8799.db2d1ede483486a5.js
https://cdn.oaistatic.com/_next/static/css/e447bcd245d72d53.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1174.bfe7b5565cffd0de.js
https://cdn.oaistatic.com/_next/static/chunks/3631.403723af629a9cee.js
https://cdn.oaistatic.com/_next/static/chunks/3842.01bc5450aaffa651.js
https://cdn.oaistatic.com/_next/static/chunks/sso.efa2ce3e29f3672a.js
```

## 2024-03-01Z (`WpoHMzPEcK3msY_nf8_gk`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - NOTE: This historical build's diff was not analysed
- App release version (Git SHA?): `f2026b48edf6d6826dbbde1e551c56f3c6e9a01a`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-c04c7ac19fb9c897.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-545d3d52ed1c95ce.js
https://cdn.oaistatic.com/_next/static/WpoHMzPEcK3msY_nf8_gk/_buildManifest.js
https://cdn.oaistatic.com/_next/static/WpoHMzPEcK3msY_nf8_gk/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/101-0e42c8a55ae613be.js
https://cdn.oaistatic.com/_next/static/chunks/874-a3f01f1e610e6fb7.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/9112-e0014c73d205c716.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-d47149262ce008f7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-e07cbacfaf6f94ca.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-team-d768efa5bcbe62f3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-trial-b6a10ddda4c70bbe.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-9e00e60ad7c1cb29.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search/feedback-2f5aa33fb5d10b17.js
```

### From `orig/_next/static/chunks/webpack-545d3d52ed1c95ce.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/447fa8a2621cc481.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/2450.22b26a6b3cbf2b99.js
https://cdn.oaistatic.com/_next/static/chunks/3472.86cd89ec30d4558b.js
https://cdn.oaistatic.com/_next/static/chunks/6419.fb786707d06e48f4.js
https://cdn.oaistatic.com/_next/static/chunks/sso.ffba3f29e6c0b9a5.js
https://cdn.oaistatic.com/_next/static/chunks/9462.537ac5c488262356.js
```

## 2024-02-29Z (`c0cq_5Dd22tX-GDC3Y33A`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - NOTE: This historical build's diff was not analysed
- App release version (Git SHA?): `1b840f87124ff8ea03172a6d4451f03921e1a08d`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-6a2ea056fd9568f7.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-20e92916726209eb.js
https://cdn.oaistatic.com/_next/static/c0cq_5Dd22tX-GDC3Y33A/_buildManifest.js
https://cdn.oaistatic.com/_next/static/c0cq_5Dd22tX-GDC3Y33A/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/101-552b881deb73b8b0.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-6beb1692f0370904.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-8cad7e919f4955bb.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor-0f91edd18f336b56.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor/[slug]-28046cb9616e020d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-9d4ee5baaeb92481.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-ce884c2e4ee9e083.js
https://cdn.oaistatic.com/_next/static/chunks/pages/workspace/deactivated-0b4681d0558bdbf5.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/groups-d7ad941b399845db.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/about-258bfd691f899119.js
https://cdn.oaistatic.com/_next/static/chunks/874-5a1849793670285d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-2fda2ea8dbf5f271.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-03a751d1f79d551a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-ec07281eb4cfcb49.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search/feedback-2a55e6f0f50b88f5.js
```

### From `orig/_next/static/chunks/webpack-20e92916726209eb.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/676.510a3da3326b532e.js
https://cdn.oaistatic.com/_next/static/chunks/718.dad393c78df4d06e.js
https://cdn.oaistatic.com/_next/static/chunks/1948.669bb95552b61f4e.js
https://cdn.oaistatic.com/_next/static/chunks/2178.658f1498a6c81c56.js
https://cdn.oaistatic.com/_next/static/chunks/30432d9c.cb3c7d6b29d577a1.js
https://cdn.oaistatic.com/_next/static/chunks/5187.7602ce6e310e8a6e.js
https://cdn.oaistatic.com/_next/static/chunks/6875.d43b1ecc915a2a9e.js
https://cdn.oaistatic.com/_next/static/chunks/6951.5f7424c6d0da7e07.js
https://cdn.oaistatic.com/_next/static/chunks/6952.21126f6c403dc85b.js
https://cdn.oaistatic.com/_next/static/chunks/7198.49ba24afa3fece08.js
https://cdn.oaistatic.com/_next/static/chunks/9826.1faa405c564f4f2a.js
https://cdn.oaistatic.com/_next/static/css/e68e8acdbd87511c.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/493.ea9a4cf1d9b0610b.js
https://cdn.oaistatic.com/_next/static/chunks/1092ac6e.4e284b6652a39aa6.js
https://cdn.oaistatic.com/_next/static/chunks/9784a43c.9d7dc7ac5f9a93e1.js
https://cdn.oaistatic.com/_next/static/chunks/1141.5792ee445721f3e4.js
https://cdn.oaistatic.com/_next/static/chunks/1777.05372c3a0ee55f92.js
https://cdn.oaistatic.com/_next/static/chunks/2588.624ccb5c7985ada3.js
https://cdn.oaistatic.com/_next/static/chunks/3032.90867708bad7285d.js
https://cdn.oaistatic.com/_next/static/chunks/3466.99c380fd6bc91813.js
https://cdn.oaistatic.com/_next/static/chunks/3472.dce1dd4d3d410f8e.js
https://cdn.oaistatic.com/_next/static/chunks/3705.dd6a1b8b5b422abd.js
https://cdn.oaistatic.com/_next/static/chunks/3842.8f16c9d6bf840abb.js
https://cdn.oaistatic.com/_next/static/chunks/4042.28042e6e71776ee7.js
https://cdn.oaistatic.com/_next/static/chunks/4615.bfb6f38ccdb38b8a.js
https://cdn.oaistatic.com/_next/static/chunks/4700.68767931f5333e59.js
https://cdn.oaistatic.com/_next/static/chunks/4806.19656f6a9151378d.js
https://cdn.oaistatic.com/_next/static/chunks/5288.0d1e3c32954c9c25.js
https://cdn.oaistatic.com/_next/static/chunks/5362.f457a0f2df4e5071.js
https://cdn.oaistatic.com/_next/static/chunks/5952.67889d74cfa04707.js
https://cdn.oaistatic.com/_next/static/chunks/303a24d8.8ad3f4cf0b433353.js
https://cdn.oaistatic.com/_next/static/chunks/6522.95e1ef2ea152a720.js
https://cdn.oaistatic.com/_next/static/chunks/7947.912bde0c5bade1a0.js
https://cdn.oaistatic.com/_next/static/chunks/8226.b1b89ba1e37dbf33.js
https://cdn.oaistatic.com/_next/static/chunks/8400.0f7b96848e433fcc.js
https://cdn.oaistatic.com/_next/static/chunks/sso.317733da596f769c.js
https://cdn.oaistatic.com/_next/static/chunks/9120.1efa55b83de243e8.js
https://cdn.oaistatic.com/_next/static/chunks/9271.068679168e6d4acf.js
https://cdn.oaistatic.com/_next/static/css/d92eaad6fd257c73.css
```

## 2024-02-24Z (`6Amu0NiVNwBcqKI_tQZlu`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Some changes to `shouldAbortQueuedPlayback`
  - Some changes to 'Share Public Chat' CTA's (including for free/paid gizmo's (aka GPTs))
  - `AnonNoAuthMobileLoginButton20240220` changed to `AnonNoAuthMobileLoginButton20240223`
  - etc
  - **Twitter thread:** https://twitter.com/_devalias/status/1761248467777916956
- App release version (Git SHA?): `95b20375cb21b774e0b89eff5297db78705b68a7`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- New Chunks:
  - `560` (`unpacked/_next/static/chunks/1092ac6e.js`)
- TODO: The CSS style files haven't been downloaded/properly captured/reviewed
- `unpacked/_next/static/chunks/1092ac6e.js`
  - SVG Image of an eye with a backslash through it
- `unpacked/_next/static/chunks/pages/share/[[...shareParams]].js`
  - ```diff
    - let r = x(
    -   x({}, e),
    -   {},
    -   {
    -     conversationData: e.serverResponse.data,
    -     isGizmoLive: e.isGizmoLive,
    -   }
    - );
    + let r = x(x({}, e), {}, { conversationData: e.serverResponse.data });
    ```
- `unpacked/_next/static/chunks/pages/_app.js` (diff: `6066` lines, minimised diff: `791` lines)
  - Lots of diff churn, making it hard to see what changed specifically
  - ```js
    shouldAbortQueuedPlayback: !1,
    ```
  - ```js
    if (o.shouldAbortQueuedPlayback) {
      o.shouldAbortQueuedPlayback = !1;
      return;
    }
    ```
  - ```diff
    - return "MediaSource" in window
    -   ? window.MediaSource
    -   : "ManagedMediaSource" in window
    -     ? window.ManagedMediaSource
    -     : null;
    + return "MediaSource" in window ? window.MediaSource : null;
    ```
  - ```diff
    - { config: d } = (0, f.mK)(f.LA.AnonNoAuthMobileLoginButton20240220),
    + { config: d } = (0, f.mK)(f.LA.AnonNoAuthMobileLoginButton20240223),
    ```
  - ```js
    return (
      n &&
        (l = n.isFree()
          ? i
            ? C.M.sharedConversationFreeGizmoClicked
            : C.M.sharedConversationFreeClicked
          : i
            ? C.M.sharedConversationPaidGizmoClicked
            : C.M.sharedConversationPaidClicked),
    ```
  - ```js
    tn = (0, F.vU)({
      loggedOutCta: {
        id: "GizmoSharedConversationCTA.loggedOutCta",
        defaultMessage: "Sign up to chat",
      },
      loggedInCtaGizmo: {
        id: "GizmoSharedConversationCTA.loggedInCtaGizmo",
        defaultMessage: "Get started with {name}",
      },
      loggedInCta: {
        id: "GizmoSharedConversationCTA.loggedInCta",
        defaultMessage: "Get started with ChatGPT",
      },
    ```
  - ```js
    (e.sharedConversationLoggedOutClicked = "Share Public Chat: Logged Out CTA Clicked"),
    (e.sharedConversationFreeClicked = "Share Public Chat: Free CTA Clicked"),
    (e.sharedConversationFreeGizmoClicked = "Share Public Chat: Free Gizmo CTA Clicked"),
    (e.sharedConversationPaidClicked = "Share Public Chat: Paid CTA Clicked"),
    (e.sharedConversationPaidGizmoClicked = "Share Public Chat: Paid Gizmo CTA Clicked"),
    ```
  - ```diff
    - (e.AnonNoAuthMobileLoginButton20240220 = "chatgpt_no_auth_mobile_login_button_20240220"),
    + (e.AnonNoAuthMobileLoginButton20240223 = "chatgpt_no_auth_mobile_login_button_20240223"),
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-0756ce44084308de.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-d7f558da1f631198.js
https://cdn.oaistatic.com/_next/static/6Amu0NiVNwBcqKI_tQZlu/_buildManifest.js
https://cdn.oaistatic.com/_next/static/6Amu0NiVNwBcqKI_tQZlu/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/search-237695cb9d35c567.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-3975b50771cff1f9.js
```

### From `orig/_next/static/chunks/webpack-d7f558da1f631198.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/1092ac6e.11bb38d51776e36c.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.cbbca09eae978a72.js
```

## 2024-02-24Z (`WRJHgIqMF1lNwSuszzsvl`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Some changes related to the English language/translation file, image generation style images, `workspaceSettings.groups`, `ReadAloud` / `AudioPlayer`, etc
  - **Twitter thread:** https://twitter.com/_devalias/status/1761226601591898372
- App release version (Git SHA?): `84ae512c2f50c9dc7d7efe027f35a294ff253535`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- Chunk IDs Changed:
  - `3453` -> `276`
- Module IDs Changed:
  - `1376` -> `14313`
  - `4713` -> `87953` (?)
  - `20079` -> `13336` (?)
  - `41064` -> `38823`
  - ?etc?
- TODO: The CSS style files haven't been downloaded/properly captured/reviewed
- The following language/translation files were updated:
  - `unpacked/_next/static/chunks/9087.js` (English)
    - <details><summary>Diff of changes to the English language chunk</summary>
        
        TODO

      </details>

- `unpacked/_next/static/chunks/276.js`
  - Renamed from `unpacked/_next/static/chunks/3453.js`
  - Various images seemingly related to image generation styles or similar.
- `unpacked/_next/static/chunks/pages/admin/groups.js`
  - ```diff
    - children: (0, h.jsx)(x.Z, {
    -   id: "workspaceSettings.groups.noMembers",
    -   defaultMessage: "No members",
    - }),
    + children:
    +   "" === p
    +     ? (0, h.jsx)(x.Z, {
    +         id: "workspaceSettings.groups.noMembers",
    +         defaultMessage: "No members",
    +       })
    +     : (0, h.jsx)(x.Z, {
    +         id: "workspaceSettings.groups.noMembersForSearch",
    +         defaultMessage:
    +           "No members matched the filter",
    +       }),
    ```
- `unpacked/_next/static/chunks/pages/_app.js` (diff: `9525` lines, minimised diff: `2866` lines)
  - Lots of diff churn, making it hard to see what changed specifically
  - Looks like a large section of updated/churned code related to the `date-fns` lib
  - ```js
    let eu = ["key"],
      ec = ["key", "onStreamingError", "onStreamingStart"];
    ```
  - ```js
    o = (0, N.useRef)({
      isMediaSourceAvailable: ex(),
      playPromise: null,
    }).current,
    ```
  - ```diff
    -   onError: (e) => {
    +   onStreamingError: (e) => {
          G.w.readAloud.error(e),
            i(!1),
            );
        },
    -   onStart: () => {
    +   onStreamingStart: () => {
          i(!1);
      },
    });
    - u.changeSource(e), (o.current = u.play());
    + u.changeSource(e), (o.playPromise = u.play());
    ```
  - ```js
    : (G.w.readAloud.click({
        isMediaSourceAvailable: o.isMediaSourceAvailable,
      }),
    ```
  - ```js
    async function eh(e) {
      var t;
      let { message_id: n, conversation_id: r, voice: i } = e,
        o = await V.Z.synthesize({
          message_id: n,
          conversation_id: r,
          voice: i,
        }),
        a =
          null !== (t = o.headers.get("content-type")) && void 0 !== t
            ? t
            : "audio/aac";
      return { response: o, format: a };
    }
    ```
  - ```js
    function ew() {
      return "MediaSource" in window
        ? window.MediaSource
        : "ManagedMediaSource" in window
          ? window.ManagedMediaSource
          : null;
    }
    let ek = (e) => ep({ id: (0, el.Z)(), segments: [], streaming: !1 }, e),
      eC = new eo({
        max: 25,
        dispose: (e) => {
          URL.revokeObjectURL(e.src);
        },
      });
    ```
  - ```js
    var s = (function (e) {
      return (
        (e.AudioPlayer = "audio-player"), (e.ReadAloud = "read-aloud"), e
      );
    })(s || {});
    ```
  - ```diff
    - "Accept-Language": this.clientLocale,
    + "OAI-Language": this.clientLocale,
    ```
  - ?etc?

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-783c9d3d0c38be69.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-2e4c364289bb4774.js
https://cdn.oaistatic.com/_next/static/WRJHgIqMF1lNwSuszzsvl/_buildManifest.js
https://cdn.oaistatic.com/_next/static/WRJHgIqMF1lNwSuszzsvl/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/groups-1e9f674f6da4d432.js
https://cdn.oaistatic.com/_next/static/chunks/2637-2b9d4453bf39911d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-0e80d04010a299e9.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search/feedback-728e447318baa8e9.js
```

### From `orig/_next/static/chunks/webpack-2e4c364289bb4774.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/276.f366c884f1a0069d.js
https://cdn.oaistatic.com/_next/static/chunks/3032.3421eea06995d5df.js
https://cdn.oaistatic.com/_next/static/chunks/3842.2fad09c9cd727ecc.js
https://cdn.oaistatic.com/_next/static/chunks/9087.16a1a63dd7d6adcb.js
https://cdn.oaistatic.com/_next/static/chunks/adb5c70d.550cbb4354158933.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.9a5a7ea024dd39d9.js
```

## 2024-02-23Z (`CDew-lPM1ewHh4qIpLQqP`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - TODO: This is only partially analysed, and somewhat messy.. can definitely be cleaned up and improved further from here..
  - **Twitter thread:** https://twitter.com/_devalias/status/1760992783274561853
- App release version (Git SHA?): `7bae0a103e062a01132694339bd4bed0fbdfd302`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- New Chunks:
  - `101` (?)
  - `469` (?)
  - `2637` (?)
  - `3032` (?)
  - `3453` (?)
  - `3472` (?)
  - `3842` (?)
  - `5200` (?)
  - `5710` (?)
  - `8756` (?)
  - `8799` (?)
  - `9111` (?)
  - `9112` (?)
  - `9578` (?)
  - `9679` (?)
- Chunk IDs Changed:
  - `5017` -> `9112` (?)
  - `3975` -> `8756`
  - `3754` -> `101`
  - `1992` -> `2637` (?)
- Module IDs Changed:
  - `TODO` -> `TODO`
  - ?etc?
- TODO: The CSS style files haven't been downloaded/properly captured/reviewed
- TODO: The following files haven't been deeply reviewed:
  - `unpacked/_next/static/chunks/webpack.js` (diff: `485` lines, minimised diff: `186` lines)
  - `unpacked/_next/static/chunks/101.js` (`931` lines)
  - `unpacked/_next/static/chunks/2637.js` (`5290` lines)
  - `unpacked/_next/static/chunks/3032.js` (`150,855` lines)
  - `unpacked/_next/static/chunks/30750f44.js` (diff: `45,368` lines, minimised diff: `17,151` lines)
  - `unpacked/_next/static/chunks/3453.js` (`403` lines)
    - Seem to be a bunch of images, likely related to image generation styling or similar.
  - `unpacked/_next/static/chunks/3472.js` (`320` lines)
    - Statsig, Feature Gates, Experimental Gates, etc
  - `unpacked/_next/static/chunks/3842.js` (`755` lines)
  - `unpacked/_next/static/chunks/3a34cc27.js` (diff: `4373` lines, minimised diff: `1633` lines)
  - `unpacked/_next/static/chunks/4114.js` (diff: `1411` lines, minimised diff: `1373` lines)
  - `unpacked/_next/static/chunks/469.js` (`505` lines)
  - `unpacked/_next/static/chunks/5200.js` (`395` lines)
  - `unpacked/_next/static/chunks/5710.js` (`75` lines)
  - `unpacked/_next/static/chunks/8756.js` (`524` lines)
  - `unpacked/_next/static/chunks/8799.js` (`510` lines)
    - `CompletionDevToolsWidget`
  - `unpacked/_next/static/chunks/9111.js` (`38` lines)
    - `JsonViewer_container__ohGTl`
  - `unpacked/_next/static/chunks/9112.js` (`1006` lines)
    - `FileUploadBox`, `workspaceAvatarPreview`, `workspaceAppearanceModal`, `adminPage`, `useSubscriptionData`
    - `/admin/*` routes
  - `unpacked/_next/static/chunks/9578.js` (`561` lines)
  - `unpacked/_next/static/chunks/9784a43c.js` (diff: `15,193` lines, minimised diff: `4442` lines)
    - `TensorFlow.js`
  - `unpacked/_next/static/chunks/b9f778a8.js` (diff: `9885` lines, minimised diff: `233` lines)
  - `unpacked/_next/static/chunks/c029043f.js` (diff: `63,174` lines, minimised diff: `41,416` lines)
  - `unpacked/_next/static/chunks/framework.js` (diff: `5652` lines, minimised diff: `1109` lines)
  - `unpacked/_next/static/chunks/main.js` (diff: `11,682` lines, minimised diff: `10,696` lines)
  - `unpacked/_next/static/chunks/pages/admin/groups.js` (`994` lines)
    - `workspaceSettings`
  - Etc..
    - Eg. all of the `unpacked/_next/static/chunks/pages/*` files
- `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - New routes:
    - `/admin/groups` (`static/chunks/pages/admin/groups-9574b97b2941ba5c.js`)
- `unpacked/_next/static/chunks/pages/_app.js`
  - Lots of diff churn, making it hard to see what changed specifically (diff: `378,330` lines, minimised diff: `125,239` lines)
  - TODO

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/framework-d69d7cd8328ac368.js
https://cdn.oaistatic.com/_next/static/chunks/main-5f963be585d6b356.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-a29284635d3e1252.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-78a702b7caedc3df.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-f04d1a1893eda441.js
https://cdn.oaistatic.com/_next/static/CDew-lPM1ewHh4qIpLQqP/_buildManifest.js
https://cdn.oaistatic.com/_next/static/CDew-lPM1ewHh4qIpLQqP/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_error-efdd213627fef025.js
https://cdn.oaistatic.com/_next/static/chunks/pages/account/cancel-bb4e2023be395e08.js
https://cdn.oaistatic.com/_next/static/chunks/pages/account/manage-e8d6d1397aca2a20.js
https://cdn.oaistatic.com/_next/static/chunks/9112-719cb76caa947b78.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin-03148c6243f033d6.js
https://cdn.oaistatic.com/_next/static/chunks/3a34cc27-e8dabfc076a26d2a.js
https://cdn.oaistatic.com/_next/static/chunks/7549-9759cffc1974280e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/analytics-e84bc29600d3ffbf.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/billing-7784f5c14f037a02.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/gpts-f5ab993f7beb3b40.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/groups-9574b97b2941ba5c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/identity-df6e3f3857210a85.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/settings-9784e5fd778c176d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/aip/[pluginId]/oauth/callback-d767522b53f0239b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/disable_mfa-b667bb9b80173d16.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/enable/internal-db99798ae2dae650.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/error-3f032281e24d4e86.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/ext_callback-a406d05e15ca33f3.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/ext_callback_refresh-4ee0bd77624d2954.js
https://cdn.oaistatic.com/_next/static/chunks/8756-07883b71cd34e727.js
https://cdn.oaistatic.com/_next/static/chunks/101-7a366fc24a0fb662.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/login-492b7885532f369a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/logout-880cef26c6bfe98b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/mocked_login-41d7182d0db9ce3d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/bypass-e0995c375deec9a5.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-092f281696c80383.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/about-1115a60e9730cc3f.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-41d37262f6639759.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-f8199af5da23ff36.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/discovery-d6059515be22e017.js
https://cdn.oaistatic.com/_next/static/chunks/2637-f1cad81fcf9ac3b0.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor-d8dcff2470f7e92c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor/[slug]-40e31aed3d85866c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-dd903b77bccf5018.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/accepted-bb8c0272663609d2.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-4f2f50423f847b13.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-1c19a8685183309a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-team-1c340d495315dccc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-trial-b5e0d4fd579cf5dd.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-571a50fc30b61dea.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search/feedback-b71d35989249581f.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-919e13140a13e17b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-f97a11b7304cf70c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/status-5b558dfe7a4b7361.js
https://cdn.oaistatic.com/_next/static/chunks/pages/workspace/deactivated-fdc88467664bc4ad.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-78a702b7caedc3df.js
```

### From `orig/_next/static/chunks/webpack-f04d1a1893eda441.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/469.5c208462c867bb6d.js
https://cdn.oaistatic.com/_next/static/chunks/9784a43c.35c9d0cb5854cadd.js
https://cdn.oaistatic.com/_next/static/chunks/1966.8596a5c250b2c4f7.js
https://cdn.oaistatic.com/_next/static/chunks/2186.415799798aaeeffc.js
https://cdn.oaistatic.com/_next/static/chunks/3032.481288d47530ca7d.js
https://cdn.oaistatic.com/_next/static/chunks/3453.776ef744e4514ca1.js
https://cdn.oaistatic.com/_next/static/chunks/3472.c63200a5c100c707.js
https://cdn.oaistatic.com/_next/static/chunks/c029043f.739643ec58c60aab.js
https://cdn.oaistatic.com/_next/static/chunks/3842.429edd67fee0e825.js
https://cdn.oaistatic.com/_next/static/chunks/4114.f0c19e9fbc4a2762.js
https://cdn.oaistatic.com/_next/static/chunks/tsub-middleware.d028af8c55d386c9.js
https://cdn.oaistatic.com/_next/static/chunks/4685.352bbad25795ea42.js
https://cdn.oaistatic.com/_next/static/chunks/5200.73ef26c15091fb86.js
https://cdn.oaistatic.com/_next/static/chunks/5710.9dc2787a40cce737.js
https://cdn.oaistatic.com/_next/static/chunks/5719.1a42259f0c3d91c1.js
https://cdn.oaistatic.com/_next/static/chunks/30750f44.6c7d9ca4e6244388.js
https://cdn.oaistatic.com/_next/static/chunks/303a24d8.270e8342cc6087e0.js
https://cdn.oaistatic.com/_next/static/chunks/420d684a.abf37f1db8be5c89.js
https://cdn.oaistatic.com/_next/static/chunks/65fd0ec4.bc4f77e47caaeac6.js
https://cdn.oaistatic.com/_next/static/chunks/8799.79c8284e0121e7e4.js
https://cdn.oaistatic.com/_next/static/chunks/5be645cc.d018f6e9a9ebea16.js
https://cdn.oaistatic.com/_next/static/chunks/9111.207481a6c8e707c7.js
https://cdn.oaistatic.com/_next/static/chunks/ajs-destination.6abd0ae9c08306a9.js
https://cdn.oaistatic.com/_next/static/chunks/0d9e9cd9.36bb6cb6e7d3b8e4.js
https://cdn.oaistatic.com/_next/static/chunks/9578.4ed8f6b71d8bfe92.js
https://cdn.oaistatic.com/_next/static/chunks/9610.aead845693cd969c.js
https://cdn.oaistatic.com/_next/static/chunks/b9f778a8.1f34ff95cbccd78d.js
https://cdn.oaistatic.com/_next/static/chunks/9679.d9cd8bc88bf780e8.js
https://cdn.oaistatic.com/_next/static/chunks/adb5c70d.c9cf6b7f26122a2d.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.fc92e3621aaa8f72.js
```

## 2024-02-22Z (`H3Ik95CB8IbemzYEGBRet`) `[as well as earlier missing changes]`

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - This is the first full build that has been archived in a while. As such, a bunch of the changes attributed to this build may have occurred in older builds.
  - TODO: This is only partially analysed, and somewhat messy.. can definitely be cleaned up and improved further from here..
  - **Twitter thread:** https://twitter.com/_devalias/status/1760637135911338067
- App release version (Git SHA?): `22c29151b7611e103642a8d59273ba76b50b392b`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- New Chunks:
  - `1393`
- Module IDs Changed:
  - `9442` -> `33156`
  - `12275` -> `31564`
  - `12374` -> `1890`
  - `19954` -> `22004`
  - `29887` -> `26565`
  - `37705` -> `38768`
  - `45754` -> `95412`
  - `53429` -> `43356`
  - `70737` -> `24343`
  - `76036` -> `38126`
  - `91928` -> `55842`
  - `93809` -> `12374`
  - `94734` -> `78076`
  - `97296` -> `83737`
  - `98083` -> `1755`
  - ?etc?
- TODO: The CSS style files haven't been downloaded/properly captured/reviewed
- TODO: The following files haven't been deeply reviewed:
  - `unpacked/_next/static/chunks/3754.js`
    - TODO: Looks like there are some interesting things in here related to the 'sso' file, and OpenAI auth/login/test features/etc?
  - `unpacked/_next/static/chunks/5017.js`
  - `unpacked/_next/static/chunks/6002.js`
  - `unpacked/_next/static/chunks/6445.js` (?new/renamed?)
  - `unpacked/_next/static/chunks/7665.js` (?new/renamed?)
  - `unpacked/_next/static/chunks/8931.js` (?new/renamed?)
  - `unpacked/_next/static/chunks/pages/auth/logout.js`
  - `unpacked/_next/static/chunks/pages/invite/[[...referralCodeParam]].js`
  - `unpacked/_next/static/chunks/pages/search/feedback.js` (new)
  - `unpacked/_next/static/chunks/pages/share/e/[[...shareParams]].js`
  - `unpacked/_next/static/chunks/pages/workspace/deactivated.js`
  - ?etc?
- A number of files have changes related to renaming a `Buffer` export from module `14984`, eg:
  - `unpacked/_next/static/chunks/2186.js`
    - ```diff
      - var ea = r(14984).Buffer;
      + var ea = r(14984).lW;
      ```
  - `unpacked/_next/static/chunks/30750f44.js`
  - `unpacked/_next/static/chunks/5104.js`
  - ?etc?
- A number of CSS/styling refinements across various chunks
- The following language/translation files were updated:
  - `unpacked/_next/static/chunks/132.js`
  - `unpacked/_next/static/chunks/676.js`
  - `unpacked/_next/static/chunks/718.js`
  - `unpacked/_next/static/chunks/987.js`
  - `unpacked/_next/static/chunks/1141.js`
  - `unpacked/_next/static/chunks/1597.js`
  - `unpacked/_next/static/chunks/1776.js`
  - `unpacked/_next/static/chunks/1777.js`
  - `unpacked/_next/static/chunks/1948.js`
  - `unpacked/_next/static/chunks/2143.js`
  - `unpacked/_next/static/chunks/2161.js`
  - `unpacked/_next/static/chunks/2178.js`
  - `unpacked/_next/static/chunks/2212.js`
  - `unpacked/_next/static/chunks/2292.js`
  - `unpacked/_next/static/chunks/3060.js`
  - `unpacked/_next/static/chunks/3332.js`
  - `unpacked/_next/static/chunks/3432.js`
  - `unpacked/_next/static/chunks/3466.js`
  - `unpacked/_next/static/chunks/3705.js`
  - `unpacked/_next/static/chunks/4042.js`
  - `unpacked/_next/static/chunks/4347.js`
  - `unpacked/_next/static/chunks/4505.js`
  - `unpacked/_next/static/chunks/4615.js`
  - `unpacked/_next/static/chunks/4616.js`
  - `unpacked/_next/static/chunks/4700.js`
  - `unpacked/_next/static/chunks/4806.js`
  - `unpacked/_next/static/chunks/5187.js`
  - `unpacked/_next/static/chunks/5288.js`
  - `unpacked/_next/static/chunks/5632.js`
  - `unpacked/_next/static/chunks/5883.js`
  - `unpacked/_next/static/chunks/5952.js`
  - `unpacked/_next/static/chunks/6291.js`
  - `unpacked/_next/static/chunks/6522.js`
  - `unpacked/_next/static/chunks/6875.js`
  - `unpacked/_next/static/chunks/6951.js`
  - `unpacked/_next/static/chunks/6952.js`
  - `unpacked/_next/static/chunks/7198.js`
  - `unpacked/_next/static/chunks/7659.js`
  - `unpacked/_next/static/chunks/7791.js`
  - `unpacked/_next/static/chunks/7795.js`
  - `unpacked/_next/static/chunks/7947.js`
  - `unpacked/_next/static/chunks/8226.js`
  - `unpacked/_next/static/chunks/8400.js`
  - `unpacked/_next/static/chunks/9087.js` (English)
    - <details><summary>Diff of changes to the English language chunk</summary>
        
        TODO

      </details>

  - `unpacked/_next/static/chunks/9120.js`
  - `unpacked/_next/static/chunks/9271.js`
  - `unpacked/_next/static/chunks/9826.js`
- `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - New routes:
    - `/search/feedback`: (`static/chunks/pages/search/feedback-03d82007df79fb50.js`)
- `unpacked/_next/static/chunks/webpack.js`
  - TODO: Looks like some new chunks in here probably, a decent bit of diff churn..
  - TODO: Need to extract and download the CSS style files manually
- `unpacked/_next/static/chunks/pages/admin/identity.js`
  - ```diff
    - return (0, I.jsx)(a.ZP, { mobilePageTitle: "Identity", children: e });
    + return (0, I.jsx)(a.ZP, {
    +   mobilePageTitle: "Identity",
    +   requireOwnerPrivileges: !0,
    +   children: e,
    + });
    ```
- `unpacked/_next/static/chunks/pages/_app.js`
  - Lots of diff churn, making it hard to see what changed specifically (pre diff noise reduction: `203,662` lines, post diff noise reduction: `60,327` lines)
  - TODO

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-121d50d4f95079be.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-6395e1f389afa57e.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-18c779c212d344ed.js
https://cdn.oaistatic.com/_next/static/H3Ik95CB8IbemzYEGBRet/_buildManifest.js
https://cdn.oaistatic.com/_next/static/H3Ik95CB8IbemzYEGBRet/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/5017-ca2c744f862d22b1.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin-0790b301e04e30ad.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/analytics-a328f77b31a63709.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/billing-8450732a6dad1f9b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/gpts-0d03f8591be64905.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/identity-aee2b2bce5345c48.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/settings-fc1b53fca10cc2c7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/aip/[pluginId]/oauth/callback-45805e25402663ec.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/enable/internal-9f6dc7f11533b721.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/ext_callback-3604bf782a1e6a47.js
https://cdn.oaistatic.com/_next/static/chunks/3975-727132bb57222b04.js
https://cdn.oaistatic.com/_next/static/chunks/3754-6dd4d99b259b6acc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/logout-68394f2869368842.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/mocked_login-c5e6b6623024195d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-3c5fcdca1d8c4f90.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/about-8ef33cf5cba566e6.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-aeb7432eb221b025.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-2c9ed3f17744c8c4.js
https://cdn.oaistatic.com/_next/static/chunks/1992-af69aabaa65d6a75.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-43a8259040031afe.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/accepted-5050e9452b9743cb.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-d288b497b9ca19cb.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-e1307aaace1f14ed.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-team-84079b9b3eebbabf.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-trial-c1d97f7edff4cf8b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-4d8f743c06f21895.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search/feedback-03d82007df79fb50.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-15cfe86e19a4388f.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-dad93816b4b19cb7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/workspace/deactivated-3ff3b16d85c87728.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-6395e1f389afa57e.js
```

### From `orig/_next/static/chunks/webpack-18c779c212d344ed.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/132.660fa56f7d9f8841.js
https://cdn.oaistatic.com/_next/static/chunks/676.1695899797a18685.js
https://cdn.oaistatic.com/_next/static/chunks/718.c39541320838d2e1.js
https://cdn.oaistatic.com/_next/static/chunks/987.7f0de228a3562cc0.js
https://cdn.oaistatic.com/_next/static/chunks/1141.1aac68555afd4d6b.js
https://cdn.oaistatic.com/_next/static/chunks/1393.035f577202ad7345.js
https://cdn.oaistatic.com/_next/static/chunks/1597.fd18bd86faeaa7b0.js
https://cdn.oaistatic.com/_next/static/chunks/1776.e9a991b898301078.js
https://cdn.oaistatic.com/_next/static/chunks/1777.361ecd58fa0ac9f5.js
https://cdn.oaistatic.com/_next/static/chunks/1948.797361ea99a892a2.js
https://cdn.oaistatic.com/_next/static/chunks/2143.b4746c7a1f512b5a.js
https://cdn.oaistatic.com/_next/static/chunks/2161.36f791c3f2dbf0ec.js
https://cdn.oaistatic.com/_next/static/chunks/2178.29104c892767faf2.js
https://cdn.oaistatic.com/_next/static/chunks/2212.04ab16a240f4ce97.js
https://cdn.oaistatic.com/_next/static/chunks/2292.32ab3d24800a1a80.js
https://cdn.oaistatic.com/_next/static/chunks/3060.0f0eee9f9d7a9a3a.js
https://cdn.oaistatic.com/_next/static/chunks/3332.c865be216348dd51.js
https://cdn.oaistatic.com/_next/static/chunks/3432.2f6ad9ce262d966a.js
https://cdn.oaistatic.com/_next/static/chunks/3466.4c4cb925af3442d0.js
https://cdn.oaistatic.com/_next/static/chunks/3705.46b523e60584f44f.js
https://cdn.oaistatic.com/_next/static/chunks/4042.a08151d3efed095c.js
https://cdn.oaistatic.com/_next/static/chunks/4347.1ce750acd0106d6e.js
https://cdn.oaistatic.com/_next/static/chunks/4505.b80d67713515dff2.js
https://cdn.oaistatic.com/_next/static/chunks/tsub-middleware.74b3f7d901b25de9.js
https://cdn.oaistatic.com/_next/static/chunks/4615.b41a5c7bc5017269.js
https://cdn.oaistatic.com/_next/static/chunks/4616.94b9b8a3298ce71f.js
https://cdn.oaistatic.com/_next/static/chunks/4700.60463b33da33b8b8.js
https://cdn.oaistatic.com/_next/static/chunks/4806.6ef5e476dad7ed16.js
https://cdn.oaistatic.com/_next/static/chunks/5104.9b28bedd347e1cfb.js
https://cdn.oaistatic.com/_next/static/chunks/5187.2ae7c3fec20da7cb.js
https://cdn.oaistatic.com/_next/static/chunks/5288.eecba8f575f628a2.js
https://cdn.oaistatic.com/_next/static/chunks/5632.0445a5d12846771b.js
https://cdn.oaistatic.com/_next/static/chunks/5883.70979731ae1a472e.js
https://cdn.oaistatic.com/_next/static/chunks/5952.c3edeef63a58e362.js
https://cdn.oaistatic.com/_next/static/chunks/6002.5d08126d9ab9c8e2.js
https://cdn.oaistatic.com/_next/static/chunks/6291.a671d3e99d9a3215.js
https://cdn.oaistatic.com/_next/static/chunks/6445.09fe8b3ac253b1b0.js
https://cdn.oaistatic.com/_next/static/chunks/6522.ee7e1452e33739e6.js
https://cdn.oaistatic.com/_next/static/chunks/6875.2177f28b937c71b0.js
https://cdn.oaistatic.com/_next/static/chunks/6951.583ec3a0c8764140.js
https://cdn.oaistatic.com/_next/static/chunks/6952.018b8b2946dc8b20.js
https://cdn.oaistatic.com/_next/static/chunks/7198.10400e67574b5a9a.js
https://cdn.oaistatic.com/_next/static/chunks/7659.c682389becf401d9.js
https://cdn.oaistatic.com/_next/static/chunks/7665.f235c81abfebf195.js
https://cdn.oaistatic.com/_next/static/chunks/7791.367b294ff3d2e4a0.js
https://cdn.oaistatic.com/_next/static/chunks/7795.5fa4b187af7d697f.js
https://cdn.oaistatic.com/_next/static/chunks/7947.42809fbb8b2f331e.js
https://cdn.oaistatic.com/_next/static/chunks/8226.84cbf69a0bf382da.js
https://cdn.oaistatic.com/_next/static/chunks/8400.edae42c864b47324.js
https://cdn.oaistatic.com/_next/static/chunks/8931.92dd97264847e42a.js
https://cdn.oaistatic.com/_next/static/chunks/9087.51416b5b42bf2771.js
https://cdn.oaistatic.com/_next/static/chunks/9120.5b368a3b1f211414.js
https://cdn.oaistatic.com/_next/static/chunks/9271.3b0e463179d66d5e.js
https://cdn.oaistatic.com/_next/static/chunks/9387.ce0e65c87a1ee0ee.js
https://cdn.oaistatic.com/_next/static/chunks/9826.92961eb1ec331066.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.0c2bdabdb162df46.js
```

## 2024-02-12Z (`FVFs9JMpH-RFaOJJ6VKnB`) `[as well as earlier missing changes]`

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - This is the first full build that has been archived in a while. As such, a bunch of the changes attributed to this build may have occurred in older builds.
  - TODO: This is only partially analysed, and somewhat messy.. can definitely be cleaned up and improved further from here..
  - **Twitter thread:** https://twitter.com/_devalias/status/1760622163751850171
- App release version (Git SHA?): `b51d8cd68e88d18ea4994f0865102f3bbe6dce2d`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- New Chunks:
  - `6008`
  - `7942`
  - ?etc?
- Chunk IDs Changed:
  - `5054` -> `1992`
  - ?etc?
- Module IDs Changed:
  - `25349` -> `98083`
  - `45054` -> `11992`
  - `67404` -> `12556`
  - ?etc?
- TODO: The CSS style files haven't been downloaded/properly captured/reviewed
- TODO: The following files haven't been deeply reviewed:
  - `unpacked/_next/static/chunks/0d9e9cd9.js` (?new?, `999` lines)
  - `unpacked/_next/static/chunks/1992.js` (?renamed from `5054`?)
  - `unpacked/_next/static/chunks/303a24d8.js` (?new?, `4894` lines)
    - ?JSZIP?
  - `unpacked/_next/static/chunks/420d684a.js` (?new?, `658` lines)
    - ?Some Google lib dealing with tensors?
  - `unpacked/_next/static/chunks/5104.js` (?new?, `151068` lines)
    - ?Some Google lib dealing with WebGL/etc?
  - `unpacked/_next/static/chunks/5be645cc.js` (?new?, `1077` lines)
    - ?Some Google lib dealing with RNN/deeplearn.js?
  - `unpacked/_next/static/chunks/65fd0ec4.js` (?new?, `1521` lines)
    - ?Some Google lib?
  - `unpacked/_next/static/chunks/9784a43c.js` (?new?, ChunkID: `1122`, `24755` lines)
    - ?`0.17.2`?
  - `unpacked/_next/static/chunks/adb5c70d.js` (?new?, ChunkID: `9896`, `833` lines)
    - ?Some lib to do with Tensors?
  - `unpacked/_next/static/chunks/b9f778a8.js` (?new?, ChunkID: `9649`, `6321` lines)
    - ?`version: "1.15.0"`?
  - `unpacked/_next/static/chunks/c029043f.js` (?new?, ChunkID: `3796`, `237301` lines)
- A number of CSS/styling refinements across various chunks
- The following language/translation files were updated:
  - `unpacked/_next/static/chunks/132.js`
  - `unpacked/_next/static/chunks/660.js`
  - `unpacked/_next/static/chunks/676.js`
  - `unpacked/_next/static/chunks/718.js`
  - `unpacked/_next/static/chunks/987.js`
  - `unpacked/_next/static/chunks/1141.js`
  - `unpacked/_next/static/chunks/1776.js`
  - `unpacked/_next/static/chunks/1777.js`
  - `unpacked/_next/static/chunks/1948.js`
  - `unpacked/_next/static/chunks/2143.js`
  - `unpacked/_next/static/chunks/2161.js`
  - `unpacked/_next/static/chunks/2178.js`
  - `unpacked/_next/static/chunks/2212.js`
  - `unpacked/_next/static/chunks/2292.js`
  - `unpacked/_next/static/chunks/3332.js`
  - `unpacked/_next/static/chunks/3432.js`
  - `unpacked/_next/static/chunks/3466.js`
  - `unpacked/_next/static/chunks/3705.js`
  - `unpacked/_next/static/chunks/4042.js`
  - `unpacked/_next/static/chunks/4347.js`
  - `unpacked/_next/static/chunks/4505.js`
  - `unpacked/_next/static/chunks/4615.js`
  - `unpacked/_next/static/chunks/4616.js`
  - `unpacked/_next/static/chunks/4700.js`
  - `unpacked/_next/static/chunks/4806.js`
  - `unpacked/_next/static/chunks/5187.js`
  - `unpacked/_next/static/chunks/5288.js`
  - `unpacked/_next/static/chunks/5632.js`
  - `unpacked/_next/static/chunks/5883.js`
  - `unpacked/_next/static/chunks/5952.js`
  - `unpacked/_next/static/chunks/6291.js`
  - `unpacked/_next/static/chunks/6522.js`
  - `unpacked/_next/static/chunks/6550.js`
  - `unpacked/_next/static/chunks/6875.js`
  - `unpacked/_next/static/chunks/6951.js`
  - `unpacked/_next/static/chunks/6952.js`
  - `unpacked/_next/static/chunks/7198.js`
  - `unpacked/_next/static/chunks/7659.js`
  - `unpacked/_next/static/chunks/7791.js`
  - `unpacked/_next/static/chunks/7795.js`
  - `unpacked/_next/static/chunks/7947.js`
  - `unpacked/_next/static/chunks/7994.js`
  - `unpacked/_next/static/chunks/8226.js`
  - `unpacked/_next/static/chunks/8400.js`
  - `unpacked/_next/static/chunks/9087.js` (English)
    - <details><summary>Diff of changes to the English language chunk</summary>
        
        TODO

      </details>

  - `unpacked/_next/static/chunks/9120.js`
  - `unpacked/_next/static/chunks/9271.js`
  - `unpacked/_next/static/chunks/9826.js`
- `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - New route: `/auth/disable_mfa` (`static/chunks/pages/auth/disable_mfa-d4488527e0a78922.js`)
- `unpacked/_next/static/chunks/webpack.js`
  - TODO: Lots of diff churn to be worked through here, need to properly analyse which are new chunks, and which are renamed, etc
  - ```diff
    + 1122: "9784a43c"
    + 3796: "c029043f"
    + 5984: "303a24d8"
    + 7414: "420d684a"
    + 8671: "65fd0ec4"
    + 8862: "5be645cc"
    + 9473: "0d9e9cd9"
    + 9649: "b9f778a8"
    + 9896: "adb5c70d"
    ```
  - ```diff
       146⋮    │          1187: "e399439fd7afe77c",   (REMOVED)
          ⋮ 154│          1122: "b948fcbcc6b375c3",   (DEFINETELY NEW BASED ON RENAMES ABOVE)
          ⋮ 176│          3796: "81bb4e02184847d4",   (DEFINETELY NEW BASED ON RENAMES ABOVE)
       172⋮    │          4534: "ada329ee1983b4db",   (REMOVED)
          ⋮ 189│          5104: "e1eba200073340ab",   (MANUALLY CONFIRMED)
       189⋮    │          6378: "85bbfb8e15956201",   (REMOVED)
          ⋮ 197│          5984: "7ddbe87cd23d1af6",   (DEFINETELY NEW BASED ON RENAMES ABOVE)
          ⋮ 199│          6008: "9baa91ec1764b34d",   (???)
          ⋮ 208│          7414: "77ed574b6550c57e",   (DEFINETELY NEW BASED ON RENAMES ABOVE)
          ⋮ 214│          7942: "8b4794c249b2310f",   (???)
          ⋮ 222│          8671: "f0a4fd236d1d0804",   (DEFINETELY NEW BASED ON RENAMES ABOVE)
          ⋮ 224│          8862: "57928d286d288f9f",   (DEFINETELY NEW BASED ON RENAMES ABOVE)
          ⋮ 232│          9473: "d91605606adc34f6",   (DEFINETELY NEW BASED ON RENAMES ABOVE)
          ⋮ 234│          9649: "971795eb8f086f09",   (DEFINETELY NEW BASED ON RENAMES ABOVE)
          ⋮ 236│          9896: "ab7964744f7828e4",   (DEFINETELY NEW BASED ON RENAMES ABOVE)

      ---

      146⋮    │          1187: "e399439fd7afe77c",   (REMOVED)
      172⋮    │          4534: "ada329ee1983b4db",   (REMOVED)
      189⋮    │          6378: "85bbfb8e15956201",   (REMOVED)

      ---

      I think these are all of the new and/or renamed chunks?
        1122
        1992 ?rename?
        3796
        5104 ?rename?
        5984
        6008 ?rename?
        7414
        7942 ?rename?
        8671
        8862
        9442 (`unpacked/_next/static/chunks/pages/auth/disable_mfa.js`)
        9473
        9649
        9896
    ```
  - ```diff
     return (
       "static/css/" +
       {
    -    1187: "944a9aa5c00c7d0e",
    -    2888: "d5b290ede491fef6",
    +    2888: "71ac0dd915183b32",
         4663: "a3516913ef4144ef",
    -    6378: "944a9aa5c00c7d0e",
    +    7942: "944a9aa5c00c7d0e",
       }[e] +
       ".css"
     );
    ```
  - ```diff
    - { 1187: 1, 4663: 1, 6378: 1 }[e] &&
    + { 4663: 1, 7942: 1 }[e] &&
    ```
  - ```diff
    - else if (/^(1187|2272|6378)$/.test(e)) i[e] = 0;
    - else {
    + else if (2272 != e) {
    ```
- `unpacked/_next/static/chunks/pages/auth/disable_mfa.js`
  - New chunk (44 lines total)
  - Seems to redirect from `/auth/disable_mfa` to `/#disable_mfa`
- `unpacked/_next/static/chunks/pages/gpts.js`
  - ```diff
    - d.A.publicEvent(f.M.pageView, {
    + d.A.logEvent(f.M.pageView, {
    ```
- `unpacked/_next/static/chunks/3754.js`
  - TODO: `publicEvent` -> `logEvent`, etc?
  - ```js
    "test" === M
      ? (0, O.jsx)("div", {
          id: "3875edf8-7e14-4776-ba0e-3f90d0a5229a",
          className: "hidden",
        })
      : null,
    ```
- `unpacked/_next/static/chunks/4663.js`
  - ```diff
      return (0, u.jsx)(r.ZP, {
        className: o().container,
        enableClipboard: !0,
        displayDataTypes: !1,
        displayObjectSize: !1,
        value: n,
        style: t ? s.$ : c.W,
    +   shortenTextAfterLength: 120,
      });
    ```
- `unpacked/_next/static/chunks/6002.js`
  - ```js
    (0, g.jsx)(m.VY, {
      className: "w-full overflow-y-scroll scroll-smooth",
      value: a.ExperimentalExperiments,
      children: Object.entries(f.LA).map(function (e) {
        var t = (0, i.Z)(e, 2),
          n = t[0],
          r = t[1];
        return (0, g.jsx)(k, { codeName: n, statsigName: r }, n);
      }),
    }),
    ```
  - ```js
    x = null != v.Statsig.getAllOverrides().gates[n];
    ```
  - ```js
    x
      ? (0, g.jsx)(h.Hov, {
          className: "text-red-500",
          title: "Local override",
        })
      : null,
    ```
  - ```js
    (0, g.jsx)(c.Z, {
      name: "override",
      type: "text",
      color: "neutral",
      placeholder: "Override",
      value: i,
      onChange: function (e) {
        o(e.currentTarget.value);
      },
      className: "mr-px w-20",
      onPressEnter: function (e) {
        (0, f.Gh)(n, "true" === e || ("false" !== e && null));
      },
    }),
    ```
  - ```js
    function k(e) {
      var t = e.codeName,
        n = e.statsigName,
        r = (0, f.mK)(n),
        s = r.isLoading,
        a = r.config;
      return (0, g.jsxs)(E, {
        children: [
          (0, g.jsx)("a", {
            href: "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/experiments/".concat(
              n
            ),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "underline",
            children: t,
          }),
          (0, g.jsxs)("div", {
            className: "flex items-center justify-between gap-2",
            children: [
              s ? (0, g.jsx)(u.Z, {}) : null,
              (0, g.jsx)("p", {
                className: "font-mono",
                children: String(a.get(d.Hy.TREATMENT, "control")),
    ```
  - ```js
    (r.ExperimentalExperiments = "Experimental Experiments");
    ```
  - ```js
    function C() {
      var e = (0, f.fW)(f.SP.NewComposerV0).value;
      return (
        (0, p.useEffect)(
          function () {
            var t = function (t) {
              t.ctrlKey && "2" === t.key && (0, f.Gh)(f.SP.NewComposerV0, !e);
            };
            return (
              window.addEventListener("keydown", t),
              function () {
                window.removeEventListener("keydown", t);
              }
            );
          },
          [e]
        ),
        null
      );
    }
    ```
- `unpacked/_next/static/chunks/6008.js`
  - New chunk (51 lines total)
  - Looks like it includes some helper functions or similar
- `unpacked/_next/static/chunks/7942.js`
  - New chunk (16 lines total)
  - Contains a bunch of empty/placeholder functions (potentially unreleased features hidden from public view?)
    - Module IDs: `32713`, `43480`, `52725`, `57553`, `58642`, `63934`, `65240`, `66486`, `92418`, `93577`, `99851`
- `unpacked/_next/static/chunks/pages/_app.js`
  - Lots of diff churn, making it hard to see what changed specifically (pre diff noise reduction: `72,268` lines, post diff noise reduction: `19,067` lines)
  - TODO

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-567fb1eeac329e89.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-93b600f4f8934c4f.js
https://cdn.oaistatic.com/_next/static/FVFs9JMpH-RFaOJJ6VKnB/_buildManifest.js
https://cdn.oaistatic.com/_next/static/FVFs9JMpH-RFaOJJ6VKnB/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/5017-bdd3eb6219fbc9e9.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin-2cb1ade3e79e149d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/analytics-17f5b583d003c529.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/billing-72b36677e657367d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/gpts-44c7d770af897d9c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/settings-32bb8c9cb300aa0e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/disable_mfa-d4488527e0a78922.js
https://cdn.oaistatic.com/_next/static/chunks/3754-163b39ce431131bc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/logout-296a1f68f894060a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-ccea76c7d2d0f4be.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/about-9ca42d7b31f42e96.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-f218063f1aa72d2c.js
https://cdn.oaistatic.com/_next/static/chunks/1992-7d89277202cd454e.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor-0c6d1961349ade9f.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor/[slug]-1ad2d17fa8dbfa79.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-13ab5f645c59dc36.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-1fd9655f95b697e5.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-team-03194700606677a0.js
https://cdn.oaistatic.com/_next/static/chunks/pages/payments/success-trial-07e11e801a5c78f7.js
```

### From `orig/_next/static/chunks/webpack-93b600f4f8934c4f.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/132.bbd125dd91e9ade9.js
https://cdn.oaistatic.com/_next/static/chunks/660.3ff460de12e80a25.js
https://cdn.oaistatic.com/_next/static/chunks/676.66025595ccbf326d.js
https://cdn.oaistatic.com/_next/static/chunks/718.34be31bb56f58206.js
https://cdn.oaistatic.com/_next/static/chunks/987.5c2a82eae95a6c79.js
https://cdn.oaistatic.com/_next/static/chunks/9784a43c.b948fcbcc6b375c3.js
https://cdn.oaistatic.com/_next/static/chunks/1141.29fa5072e9fdec3e.js
https://cdn.oaistatic.com/_next/static/chunks/1776.769455772bc1c816.js
https://cdn.oaistatic.com/_next/static/chunks/1777.741a94e106280c78.js
https://cdn.oaistatic.com/_next/static/chunks/1948.6e3b2a3b62c6f174.js
https://cdn.oaistatic.com/_next/static/chunks/2143.2b1ee99152016983.js
https://cdn.oaistatic.com/_next/static/chunks/2161.f8016a3576d3f05a.js
https://cdn.oaistatic.com/_next/static/chunks/2178.20a6faa453f0b2ce.js
https://cdn.oaistatic.com/_next/static/chunks/2212.a8c0c0dc39535aac.js
https://cdn.oaistatic.com/_next/static/chunks/2292.eac43528b3707f7a.js
https://cdn.oaistatic.com/_next/static/chunks/3332.b48f92bc1c9c40f2.js
https://cdn.oaistatic.com/_next/static/chunks/3432.37715d54737d439a.js
https://cdn.oaistatic.com/_next/static/chunks/3466.8ef30440c1e3b0be.js
https://cdn.oaistatic.com/_next/static/chunks/3705.df770067bb99d1a1.js
https://cdn.oaistatic.com/_next/static/chunks/c029043f.81bb4e02184847d4.js
https://cdn.oaistatic.com/_next/static/chunks/4042.2464a20b06bb9fd5.js
https://cdn.oaistatic.com/_next/static/chunks/4347.cd589e4354d87303.js
https://cdn.oaistatic.com/_next/static/chunks/4505.94bda2cc8da8052f.js
https://cdn.oaistatic.com/_next/static/chunks/4615.9306d3f376af2e5a.js
https://cdn.oaistatic.com/_next/static/chunks/4616.a4189908f66dfacc.js
https://cdn.oaistatic.com/_next/static/chunks/4663.925bf83197940c00.js
https://cdn.oaistatic.com/_next/static/chunks/4700.0ac76035e4e53eb9.js
https://cdn.oaistatic.com/_next/static/chunks/4806.48a1608ca4a35b94.js
https://cdn.oaistatic.com/_next/static/chunks/5104.e1eba200073340ab.js
https://cdn.oaistatic.com/_next/static/chunks/5187.ec6879a291f3a83c.js
https://cdn.oaistatic.com/_next/static/chunks/5288.7548221d48c11f70.js
https://cdn.oaistatic.com/_next/static/chunks/5632.53270a01a6661a1c.js
https://cdn.oaistatic.com/_next/static/chunks/5883.26e006e4ebd5dd52.js
https://cdn.oaistatic.com/_next/static/chunks/5952.4b84004e2d6c36e4.js
https://cdn.oaistatic.com/_next/static/chunks/303a24d8.7ddbe87cd23d1af6.js
https://cdn.oaistatic.com/_next/static/chunks/6002.169d3d308b202677.js
https://cdn.oaistatic.com/_next/static/chunks/6008.9baa91ec1764b34d.js
https://cdn.oaistatic.com/_next/static/chunks/6291.2c192226514b0e32.js
https://cdn.oaistatic.com/_next/static/chunks/6522.25737706ec155d3d.js
https://cdn.oaistatic.com/_next/static/chunks/6875.8923908aaf5818b7.js
https://cdn.oaistatic.com/_next/static/chunks/6951.fb6f1546c437acb4.js
https://cdn.oaistatic.com/_next/static/chunks/6952.a1e920c69465305d.js
https://cdn.oaistatic.com/_next/static/chunks/7198.76979709cbba9540.js
https://cdn.oaistatic.com/_next/static/chunks/420d684a.77ed574b6550c57e.js
https://cdn.oaistatic.com/_next/static/chunks/7659.925252ac7a24dcd9.js
https://cdn.oaistatic.com/_next/static/chunks/7791.478386fd39213df8.js
https://cdn.oaistatic.com/_next/static/chunks/7795.7da983f633da24a6.js
https://cdn.oaistatic.com/_next/static/chunks/7942.8b4794c249b2310f.js
https://cdn.oaistatic.com/_next/static/chunks/7947.f7a4654e4b09da88.js
https://cdn.oaistatic.com/_next/static/chunks/7994.01c9e3f110f368ae.js
https://cdn.oaistatic.com/_next/static/chunks/8226.bffbfdbe5bed6e91.js
https://cdn.oaistatic.com/_next/static/chunks/8400.f9bef3b525327fad.js
https://cdn.oaistatic.com/_next/static/chunks/65fd0ec4.f0a4fd236d1d0804.js
https://cdn.oaistatic.com/_next/static/chunks/5be645cc.57928d286d288f9f.js
https://cdn.oaistatic.com/_next/static/chunks/9087.3e1336fc6f035098.js
https://cdn.oaistatic.com/_next/static/chunks/9120.f83ec8d72c783750.js
https://cdn.oaistatic.com/_next/static/chunks/9271.07bf829940a3f8f5.js
https://cdn.oaistatic.com/_next/static/chunks/0d9e9cd9.d91605606adc34f6.js
https://cdn.oaistatic.com/_next/static/chunks/b9f778a8.971795eb8f086f09.js
https://cdn.oaistatic.com/_next/static/chunks/9826.6a21117ec9940b7f.js
https://cdn.oaistatic.com/_next/static/chunks/adb5c70d.ab7964744f7828e4.js
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.9135d26257e2dd71.js
```

## 2024-02-06Z (`oTgm15z1w361g3mBl796W`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - A few chunk IDs churned
  - Some minor tweaks to the code (including `prefers-color-scheme: dark`)
- App release version (Git SHA?): `32c032cec13c3fed67b1fb63aa81557ecb3ce8d0`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- Chunk IDs Changed:
  - `4685` -> `987`
  - `398` -> `4685`
- `unpacked/_next/static/chunks/987.js`
  - Was renamed from `unpacked/_next/static/chunks/4685.js` and basically unchanged
- `unpacked/_next/static/chunks/4685.js`
  - Was renamed from `unpacked/_next/static/chunks/398.js` and basically unchanged(?)
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```diff
    - if (0 === eu.length && null != eo.commonAncestorContainer)
    + if (
    +   0 === eu.length &&
    +   null != eo.commonAncestorContainer &&
    +   eo.commonAncestorContainer instanceof HTMLElement
    + )
    ```
  - ```js
    function ey() {
      return ed("(prefers-color-scheme: dark)");
    }
    ```
  - ```diff
    - "./_parts/human-verified/pt-PT.json": [84685, 4685],
    + "./_parts/human-verified/pt-PT.json": [84685, 987],
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-64a0da3d68e732cd.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-af471444c3e93988.js
https://cdn.oaistatic.com/_next/static/oTgm15z1w361g3mBl796W/_buildManifest.js
https://cdn.oaistatic.com/_next/static/oTgm15z1w361g3mBl796W/_ssgManifest.js
```

### From `orig/_next/static/chunks/webpack-af471444c3e93988.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/987.2e980d7b78929481.js
https://cdn.oaistatic.com/_next/static/chunks/4663.05c150cd11bd3bf1.js
https://cdn.oaistatic.com/_next/static/chunks/4685.140d3e7e712ccf43.js
```

## 2024-02-06Z (`8eNlznjVNElT8wapWdDOE`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - New: 'Experimentation DevTools' ('Feature Gates', 'Experimental Gates')
  - TODO: summarise the rest of the changes here
  - **Twitter thread:** https://twitter.com/_devalias/status/1754668960002580822
- App release version (Git SHA?): `59a67dcb4bc0938277cf0b9cc52f0742e1a4c54a`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- New Chunks:
  - `398`
  - `4663` (+ associated css chunk)
  - `6002`
- Module IDs Changed:
  - `5129` -> `64619`
  - `6511` -> `25523`
  - `12900` -> `54100`
  - `18092` -> `70621`
  - `18357` -> `87245`
  - `20520` -> `65042`
  - `20532` -> `34621`
  - `21887` -> `72058`
  - `23015` -> `21557`
  - `26867` -> `89511`
  - `27635` -> `84324`
  - `30985` -> `38526`
  - `35425` -> `13722`
  - `35676` -> `26867`
  - `36395` -> `7327`
  - `39252` -> `13832`
  - `41370` -> `18262`
  - `47477` -> `49941`
  - `48953` -> `28771`
  - `48953` -> `976`
  - `51522` -> `83218`
  - `51546` -> `92874`
  - `52923` -> `29428`
  - `59873` -> `51331`
  - `70919` -> `57324`
  - `74267` -> `88675`
  - `76316`-> `76036`
  - `85763` -> `18653`
  - `90172` -> `28234`
  - `96039` -> `1943`
  - `96055` -> `73819`
  - `96157` -> `6188`
  - ?etc?
- A bunch of little styling tweaks such as:
  - `unpacked/_next/static/chunks/3754.js`
    - ```diff
        className:
      -   "flex h-full w-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-800",
      +   "flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary",
      ```
  - `unpacked/_next/static/chunks/5017.js`
    - ```diff
        className: (0, Y.default)(
      -   "rounded",
      -   "w-full",
      -   "hover:bg-token-surface-secondary dark:hover:bg-gray-800",
      -   i.route === t && "bg-token-surface-secondary dark:bg-gray-800"
      +   "w-full rounded hover:bg-token-sidebar-surface-secondary",
      +   i.route === t && "bg-token-sidebar-surface-secondary"
      ```
  - etc
- `unpacked/_next/static/chunks/398.js`
  - New chunk (1687 lines total)
  - New `svg` images of:
    - a 'down pointing chevron'
    - a clipboard with a tick
    - a clipboard with a left pointing arrow
  - A whole bunch of new `JVR.*` components related to `JVR.JsonView`:
    - ```js
      c.displayName = "JVR.DispatchShowTools";
      p.displayName = "JVR.ShowTools";
      N.displayName = "JVR.DispatchExpands";
      x.displayName = "JVR.Expands";
      (g.displayName = "JVR.DispatchTypes"), (C.displayName = "JVR.Types");
      b.displayName = "JVR.TriangleArrow";
      B.displayName = "JVR.DispatchSymbols";
      E.displayName = "JVR.Symbols";
      I.displayName = "JVR.DispatchSection";
      A.displayName = "JVR.Section";
      P.displayName = "JVR.Context";
      U.displayName = "JVR.DispatchContext";
      _.displayName = "JVR.Provider";
      ea.displayName = "JVR.Quote";
      er.displayName = "JVR.ValueQuote";
      et.displayName = "JVR.Colon";
      el.displayName = "JVR.Arrow";
      en.displayName = "JVR.BracketsOpen";
      es.displayName = "JVR.BracketsClose";
      ei.displayName = "JVR.NestedClose";
      ev.displayName = "JVR.Copied";
      eg.displayName = "JVR.SetComp";
      eC.displayName = "JVR.MapComp";
      eb.displayName = "JVR.TypeString";
      eL.displayName = "JVR.TypeTrue";
      eJ.displayName = "JVR.TypeFalse";
      ek.displayName = "JVR.TypeFloat";
      eS.displayName = "JVR.TypeInt";
      eB.displayName = "JVR.TypeFloat";
      eE.displayName = "JVR.TypeUrl";
      eT.displayName = "JVR.TypeDate";
      eK.displayName = "JVR.TypeUndefined";
      eM.displayName = "JVR.TypeNull";
      eF.displayName = "JVR.TypeNan";
      eA.displayName = "JVR.Value";
      eO.displayName = "JVR.KeyName";
      e_.displayName = "JVR.KeyNameComp";
      eW.displayName = "JVR.Row";
      eH.displayName = "JVR.RowComp";
      eG.displayName = "JVR.KeyValues";
      eX.displayName = "JVR.KayName";
      eY.displayName = "JVR.KeyValuesItem";
      e5.displayName = "JVR.CountInfoExtra";
      e2.displayName = "JVR.CountInfoExtraComps";
      e7.displayName = "JVR.CountInfo";
      e6.displayName = "JVR.CountInfoComp";
      e4.displayName = "JVR.Ellipsis";
      e9.displayName = "JVR.EllipsisComp";
      ae.displayName = "JVR.NestedOpen";
      ar.displayName = "JVR.Container";
      at.displayName = "JVR.BraceLeft";
      al.displayName = "JVR.BraceRight";
      an.displayName = "JVR.BracketsLeft";
      as.displayName = "JVR.BracketsRight";
      ai.displayName = "JVR.Arrow";
      ao.displayName = "JVR.Colon";
      au.displayName = "JVR.Quote";
      av.displayName = "JVR.ValueQuote";
      ac.displayName = "JVR.Bigint";
      ay.displayName = "JVR.Date";
      ap.displayName = "JVR.False";
      ad.displayName = "JVR.Float";
      am.displayName = "JVR.Int";
      aj.displayName = "JVR.Map";
      af.displayName = "JVR.Nan";
      aN.displayName = "JVR.Null";
      ax.displayName = "JVR.Set";
      ah.displayName = "JVR.StringText";
      aZ.displayName = "JVR.True";
      aw.displayName = "JVR.Undefined";
      aR.displayName = "JVR.Url";
      ag.displayName = "JVR.Copied";
      (aV.displayName = "JVR.JsonView");
      ```
    - This appears to be the following lib:
      - https://github.com/uiwjs/react-json-view
        - > A React component for displaying and editing javascript arrays and JSON objects.
- `unpacked/_next/static/chunks/4663.js`
  - New chunk (32 lines total)
  - ```js
    14663: function (n, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return i;
          },
        });
      var t = a(398),
        r = a(85168),
        s = a.n(r),
        c = a(35250);
      function i(n) {
        var e = n.json;
        return (0, c.jsx)(t.ZP, {
          className: s().container,
          enableClipboard: !0,
          displayDataTypes: !1,
          displayObjectSize: !1,
          value: e,
        });
      }
    },
    85168: function (n) {
      n.exports = { container: "JsonViewer_container__wckvT" };
    },
    ```
- `unpacked/_next/static/chunks/5054.js`
  - Some minor styling changes, as well as...
  - ```diff
    - (0, ec.isEqual)(v.metadata.auth, o) ||
    + (0, ec.isEqual)(
    +   null == v ? void 0 : v.metadata.auth,
    +   o
    + ) ||
        O({
          auth: tL({ type: ef.Jv.OAuth }, n.known_auth),
        }),
    - v.metadata.privacy_policy_url !==
    + (null == v
    +   ? void 0
    +   : v.metadata.privacy_policy_url) !==
        n.known_privacy_policy &&
    ```
- `unpacked/_next/static/chunks/6002.js`
  - New chunk (211 lines total)
  - ```js
    title: "Experimentation DevTools",
    noPadding: !0,
    showCloseButton: !0,
    children: (0, p.jsxs)(x.fC, {
      defaultValue: n.FeatureGates,
    ```
  - ```js
    value: n.Features,
    children:
      null !==
        (t =
          null == a
            ? void 0
            : a.map(function (e) {
                return (0, p.jsx)(
                  N,
                  {
                    children: (0, p.jsx)("p", {
                      children: String(e),
                    }),
                  },
                  e
                );
              })) && void 0 !== t
        ? t
        : null,
    ```
  - ```js
    value: n.FeatureGates,
    children: Object.entries(d.tz).map(function (e) {
      var t = (0, i.Z)(e, 2),
        s = t[0],
        r = t[1];
      return (0, p.jsx)(v, { codeName: s, statsigName: r }, s);
    }),
    ```
  - ```js
    function v(e) {
      var t = e.codeName,
        s = e.statsigName,
        r = (0, d.sB)(s),
        a = r.isLoading,
        n = r.value;
      return (0, p.jsxs)(N, {
        children: [
          (0, p.jsx)("a", {
            href: "https://console.statsig.com/50aWbk2p4R76rNX9lN5VUw/gates/".concat(
              s
            ),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "underline",
            children: t,
          }),
    ```
  - ```js
    ((r = n || (n = {})).FeatureGates = "Feature Gates"),
      (r.Features = "Features"),
      (r.ExperimentalFeatureGates = "Experimental Gates");
    ```
- `unpacked/_next/static/chunks/pages/g/[gizmoId]/about.js`
  - ```diff
    - gizmo: t,
    + gizmoId: e.gizmoId,
    ```
- `unpacked/_next/static/chunks/pages/_app.js`
  - Lots of diff churn, making it hard to see what changed specifically
  - New `svg` image of ?settings sliders?
  - ```js
    57123: function (Y, et, en) {
      var ei,
        eo = en(44675);
      !(function () {
        "use strict";
        var et = "input is invalid type",
          ea = "object" == typeof window,
          eu = ea ? window : {};
        eu.JS_SHA256_NO_WINDOW && (ea = !1);
        var ec = !ea && "object" == typeof self,
          ed =
            !eu.JS_SHA256_NO_NODE_JS &&
            "object" == typeof eo &&
            eo.versions &&
            eo.versions.node;
        ed ? (eu = en.g) : ec && (eu = self);
        var ef = !eu.JS_SHA256_NO_COMMON_JS && Y.exports,
    ```
    - This appears to be the following lib:
      - https://github.com/emn178/js-sha256
        - > A simple SHA-256 / SHA-224 hash function for JavaScript supports UTF-8 encoding.
  - ```diff
    - (0, eV.jsx)(rB, {
    -   children: (0, eV.jsxs)(nJ.fC, {
    + (0, eV.jsx)(rF, {
    +   children: (0, eV.jsxs)(ry.Z.Root, {
        children: [
    -   (0, eV.jsx)(nJ.xz, {
    -     asChild: !0,
    -     children: (0, eV.jsx)(tK.z, {
    -       color: "neutral",
    -       className: "mb-auto mt-auto",
    -       children: (0, eV.jsx)(n4.JEI, {}),
    -     }),
    +   (0, eV.jsx)(ry.Z.Trigger, {
    +     className: "border border-token-surface-tertiary",
    +     children: (0, eV.jsx)(ez.K9M, { className: "icon-sm" }),
        }),
    -   (0, eV.jsx)(nJ.h_, {
    -     children: (0, eV.jsxs)(nJ.VY, {
    -       className:
    -         "PopoverContent rounded-sm bg-white p-2 pb-0.5 shadow-xl dark:bg-gray-800/90",
    +   (0, eV.jsx)(ry.Z.Portal, {
    +     children: (0, eV.jsxs)(ry.Z.Content, {
            side: "top",
            align: "end",
            children: [
              eN &&
    -           (0, eV.jsx)(tK.z, {
    -             color: "neutral",
    -             className: "mb-2 flex w-full border-0",
    +           (0, eV.jsx)(ry.Z.Item, {
    ```
  - ```diff
    - et !== e3.current &&
    -   (ek.vm.setActiveSidebar(!1), eT.hx.clear(), (e3.current = et));
    + et !== e3.current && (eT.hx.clear(), (e3.current = et));
    ```
  - ```diff
    - var eZ =
    -     (null === (eT = eF) || void 0 === eT
    -       ? void 0
    -       : null === (e_ = eT.metadata) || void 0 === e_
    -         ? void 0
    -         : null === (ej = e_.auth) || void 0 === ej
    -           ? void 0
    -           : ej.type) === e5.Jv.OAuth,
    -   eH = (0, t4.Wd)(null == ek ? void 0 : ek.gizmo.id, eZ),
    -   eG = eH.data,
    -   eW = eH.isLoading,
    ```
  - ```diff
    - return (
    -   et ===
    -   (null === (en = Y.message.metadata) || void 0 === en
    -     ? void 0
    -     : null === (ei = en.jit_plugin_data) || void 0 === ei
    + return (
    +   et ===
    +   (null === (en = Y.message.metadata) || void 0 === en
          ? void 0
            ? void 0
    +     : null === (eo = ei.from_server) || void 0 === eo
    +       ? void 0
            : eo.type)
    ```
  - ```diff
    - : null ===
    -       (eM = eG.settings.find(function (Y) {
    -         var et, en;
    -         return (
    -           Y.action_id ===
    -           (null === (et = eF) || void 0 === et
    -             ? void 0
    -             : null === (en = et.metadata) || void 0 === en
    -               ? void 0
    -               : en.action_id)
    -         );
    -       })) || void 0 === eM
    ```
  - ```diff
          : ei.type) === "oauth_required" &&
    - !eY
    + eu.query.oauth_success
    ```
  - ```diff
  - {
  -   key: "_getNextCharDelayMs",
  -   value: function () {
  -     var et = this.concatenatedText[this.displayedTextLength - 1],
  -       en = Y.VERY_SLOW_PUNCTUATION_CHARS.includes(et)
  -         ? Y.VERY_SLOW_PUNCTUATION_MAX_BUFFERING_LAG_MS
  -         : Y.SLOW_PUNCTUATION_CHARS.includes(et)
  -           ? Y.SLOW_PUNCTUATION_MAX_BUFFERING_LAG_MS
  -           : Y.CHAR_MAX_BUFFERING_LAG_MS,
  -       ei =
  -         this.textMessagePartsTextLength - this.displayedTextLength,
  -       eo =
  -         ei <= 0
  -           ? en
  -           : Math.round(
  -               en / Math.max(ei / Y.INVERSE_BUFFER_SCALING_FACTOR, 1)
  -             );
  -     return (
  -       this.debug &&
  -         eo > Y.CHAR_MAX_BUFFERING_LAG_MS &&
  -         console.debug(
  -           "PunctuationBuffer: [lagMs: "
  -             .concat(eo, "] [numBufferedChars: ")
  -             .concat(ei, "]")
  + {
  +   key: "_getNextCharDelayMs",
  +   value: function () {
  +     var Y,
  +       et = this.concatenatedText[this.displayedTextLength - 1],
  +       en =
  +         this.textMessagePartsTextLength -
  +         this.displayedTextLength,
  +       ei = 1 / Math.max(en * this.LAG_FACTORS.BUFFER_FACTOR, 1),
  +       eo =
  +         (null !== (Y = this.LAG_FACTORS[et]) && void 0 !== Y
  +           ? Y
  +           : this.LAG_FACTORS.DEFAULT_LAG_FACTOR) * ei,
  +       ea = this.averageMsPerChar * eo;
  +     return (
  +       this._throttledDebugLog(
  +         [
  +           "PunctuationBuffer:",
  +           "[lagMs: ".concat(ea, "]"),
  +           '[lastChar: "'.concat(et, '"]'),
  +           "[averageMsPerChar: ".concat(
  +             this.averageMsPerChar,
  +             "]"
  +           ),
  +           "[lagFactor: ".concat(eo, "]"),
  +           "[bufferLagFactor: ".concat(ei, "]"),
  +           "[numBufferedChars: ".concat(en, "]"),
  +           "===",
  +         ].join("\n")
    ```
  - ```diff
    - children: (0, tR.jsx)(eJ.Z, {
    -   id: "ConversationTurnInlineMessageFeedback.moreOptions",
    -   defaultMessage: "More options",
    - }),
    + children: (0, tL.jsx)(e0.Z, {
    +   id: "ConversationTurnInlineMessageFeedback.moreOptions.1",
    +   defaultMessage: "More...",
    + }),
    ```
  - ```diff
      placeholder: ec.formatMessage({
    -   id: "ConversationTurnInlineMessageFeedback.feedbackPlaceholder",
    +   id: "ConversationTurnInlineMessageFeedback.feedbackPlaceholder.1",
        defaultMessage:
    -     "(Optional) Let us know what you think",
    +     "(Optional) Feel free to add specific details",
      }),
    ```
  - ```diff
    - tE = function (Y) {
    -   ep({ nodeId: tg.nodeId, messageId: tg.message.id, rating: Y }),
    -     null != tf && tf.includes(eY.L0.MessageFeedbackV2) && ez(!0);
    + tT = function (Y) {
    +   ep({ nodeId: tv.nodeId, messageId: tv.message.id, rating: Y }),
    +     eJ.m9.getExperimentValue({
    +       experimentName: eJ.H6.MessageFeedbackV2,
    +       key: "show_new_ui",
    +       defaultValue: !1,
    +     }) && ez(!0);
    ```
  - ```js
    rc = eT()(
      function () {
        return en.e(6002).then(en.bind(en, 86529));
      },
      {
        ssr: !1,
        loadableGenerated: {
          webpack: function () {
            return [86529];
          },
        },
      }
    ),
    ```
  - ```diff
    - null !== (eo = (0, nS.Bv)(eu.lastModelUsed, ec)) && void 0 !== eo
    + null === (ei = (0, nE.BC)(eL, e_)) || void 0 === ei
    ```
  - ```diff
    - !(null != eM && eM.includes(ez.L0.MessageFeedbackV2)) &&
    -   (tp(et), tv(en), tu(ei), "thumbsDown" === ei && eI))
    + !tI.m9.getExperimentValue({
    +   experimentName: tI.H6.MessageFeedbackV2,
    +   key: "show_new_ui",
    +   defaultValue: !1,
    + }) && (tp(et), tv(en), tu(ei), "thumbsDown" === ei && eI))
    ```
  - ```js
    queryFn: (function () {
      var et = (0, ed.Z)(
        eh().mark(function et() {
          return eh().wrap(function (et) {
            for (;;)
              switch ((et.prev = et.next)) {
                case 0:
                  return et.abrupt("return", eL.U.getAbout(Y));
    // ..snip..
    })(),
    queryKey: ["gizmo", "about", { gizmoId: Y }],
    ```
  - ```diff
    - eB = function (Y) {
    -   var et = Y.vanityMetrics,
    -     en = (0, ep.sB)(ep.tz.GizmoReviews).value;
    -   if (null == et) return null;
    -   var ei =
    -     en && null != et.review_stats && et.review_stats.count > eN
    -       ? et.review_stats
    -       : void 0;
    -   return (0, eO.jsxs)("div", {
    // ..snip..
    + eQ = function (Y) {
    +   var et = Y.aboutBlock;
    +   switch (et.type) {
    +     case "generic_title_subtitle":
    +       return (0, eB.jsxs)(eK, {
    +         children: [
    +           (0, eB.jsx)(e$, { children: et.title }),
    +           (0, eB.jsx)(eY, { children: et.subtitle }),
    +         ],
    +       });
    +     case "rating":
    +       return (0, eB.jsxs)(eK, {
    +         children: [
    +           (0, eB.jsxs)(e$, {
    +             children: [
    +               (0, eB.jsx)(eD.p$, { className: "icon-sm" }),
    +               et.rating_str,
    +             ],
    +           }),
    +           (0, eB.jsx)(eY, {
    +             children: (0, eB.jsx)(ej.Z, {
    +               id: "gizmo.about.numReviews",
    +               defaultMessage: "{numReviews} reviews",
    +               values: { numReviews: et.rating_count_str },
    +             }),
    +           }),
    +         ],
    +       });
    +     case "category":
    +       if (null != et.category_ranking)
    +         return (0, eB.jsxs)(eK, {
    +           children: [
    +             (0, eB.jsx)(e$, { children: et.category_ranking }),
    +             (0, eB.jsx)(eY, {
    +               children: (0, eB.jsx)(ej.Z, {
    +                 id: "gizmo.about.inCategory",
    +                 defaultMessage: "in {category}",
    +                 values: { category: et.category_str },
    +               }),
    +             }),
    +           ],
    +         });
    +       return (0, eB.jsxs)(eK, {
    +         children: [
    +           (0, eB.jsx)(e$, { children: et.category_str }),
    +           (0, eB.jsx)(eY, {
    +             children: (0, eB.jsx)(ej.Z, {
    +               id: "gizmo.about.category",
    +               defaultMessage: "Category",
    +             }),
    +           }),
    +         ],
    +       });
    +     case "conversations":
    +       return (0, eB.jsxs)(eK, {
    +         children: [
    +           (0, eB.jsx)(e$, { children: et.conversation_count_str }),
    +           (0, eB.jsx)(eY, {
    +             children: (0, eB.jsx)(ej.Z, {
    +               id: "gizmo.about.numConversations",
    +               defaultMessage: "conversations",
    +             }),
    +           }),
    +         ],
    +       });
    +     default:
    +       return (0, eb.Z)(et), (0, eB.jsx)(eB.Fragment, {});
    ```
  - ```js
    children: et.map(function (Y) {
      return (0, eB.jsx)(eQ, { aboutBlock: Y }, Y.type);
    }),
    ```
  - ```diff
    - eZ = function (Y) {
    -   var et = Y.vanityMetrics,
    -     en = null == et ? void 0 : et.review_stats,
    -     ei = (0, ep.sB)(ep.tz.GizmoReviews).value;
    -   return null != et && null != en && ei
    -     ? (0, eO.jsxs)("div", {
    + e9 = function (Y) {
    +   var et = Y.reviewStats;
    +   return (0, ew.sB)(ew.tz.GizmoReviews).value
    ```
  - ```diff
      children: (0, eB.jsx)(ej.Z, {
    -   id: "gizmo.about.numReviews",
    +   id: "gizmo.about.ratings.numReviews",
        defaultMessage:
          "{numReviews, plural, one {# review} other {# reviews}}",
        values: {
          numReviews:
    -       null !==
    -         (ei =
    -           null == en
    -             ? void 0
    -             : en.by_rating[Y]) && void 0 !== ei
    +       null !== (ei = et.by_rating[Y]) &&
    +       void 0 !== ei
    ```
  - ```diff
      children: (0, eB.jsx)(ej.Z, {
    -   id: "gizmo.about.notEnoughReviews",
    +   id: "gizmo.about.ratings.notEnoughReviews",
        defaultMessage: "Not enough reviews yet",
      }),
    ```
  - ```js
    children: (0, eB.jsx)(ej.Z, {
      id: "gizmo.about.notFound",
      defaultMessage: "GPT not found",
    }),
    ```
  - ```diff
      children: [
        (0, eB.jsx)(eR.r, { gizmo: ep, isOwner: eb }),
        ea,
    -   (0, eO.jsx)(eB, { vanityMetrics: en.gizmo.vanity_metrics }),
    +   (0, eB.jsx)(eX, { blocks: ec.data.about_blocks }),
        (0, eB.jsx)(e0, { gizmo: ep, onClose: eo }),
    -   (0, eO.jsx)(eZ, { vanityMetrics: en.gizmo.vanity_metrics }),
    +   (0, eB.jsx)(e9, { reviewStats: ec.data.review_stats }),
        (0, eB.jsx)(eW, { tools: ep.tools }),
      ],
    ```
  - ```diff
    - gizmo: et,
    + gizmoId: et.gizmo.id,
    ```
  - ```diff
    - (0, eM.jsx)(tv.j4, { gizmo: eu }),
    + (0, eO.jsx)(tv.j4, { gizmoId: eu.gizmo.id }),
    ```
  - ```js
    {
      key: "getAbout",
      value: (function () {
        var Y = (0, eo.Z)(
          ed().mark(function Y(et) {
            return ed().wrap(function (Y) {
              for (;;)
                switch ((Y.prev = Y.next)) {
                  case 0:
                    return Y.abrupt(
                      "return",
                      ef.ZP.get(
                        "".concat(ef.B, "/gizmos/").concat(et, "/about")
                      )
                    );
    ```
  - ```js
    var ny = tm()(
        function () {
          return en
            .e(8682)
            .then(en.bind(en, 61544))
            .then(function (Y) {
              return Y.default;
            });
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [61544];
            },
          },
        }
      ),
    ```
  - ```js
    conversationMode: tH,
    ```
  - ```js
    eg = Y.conversationMode,
    ey = (0, ni.Z)({ clientThreadId: et, conversationMode: eg }),
    ```
  - ```diff
    - conversationMode: td.iN.getConversationMode(et),
    + conversationMode:
    +   null != eg ? eg : ta.iN.getConversationMode(et),
    ```
  - ```js
    function eZ() {
      return (0, eC.a)({
        queryKey: ["mfaInfo"],
        queryFn: function () {
          return ew.ZP.getMfaInfo();
        },
        enabled: !0,
      });
    }
    function eH() {
      var Y,
        et = eZ();
      return et.isLoading
        ? ei.LOADING
        : null !== (Y = et.data) && void 0 !== Y && Y.mfa_enabled
          ? ei.ENABLED
          : ei.DISABLED;
    }
    !(function (Y) {
      (Y.DISABLED = "DISABLED"),
        (Y.ENABLED = "ENABLED"),
        (Y.LOADING = "LOADING");
    ```
  - ```js
    e7 = e6.setupMfa,
    ta = e6.isUsernamePassword,
    tu = e6.removeMfa,
    ```
  - ```diff
    + (null == tE ? void 0 : tE.includes(eW.i)) &&
    +   (td === ei.LOADING || td === ei.DISABLED) &&
        ta &&
    -   (0, eA.jsx)(nD, {
    -     children: (0, eA.jsx)(nT, {
    -       label: et.formatMessage(nF.enable2fa),
    -       buttonLabel: et.formatMessage(nF.enable),
    -       onClick: e8,
    +   (0, eP.jsx)(nF, {
    +     children: (0, eP.jsx)(nO, {
    +       label: et.formatMessage(nU.toggleMfa),
    +       buttonLabel:
    +         td == ei.LOADING
    +           ? et.formatMessage(nU.loadingMfa)
    +           : et.formatMessage(nU.enableMfa),
    +       disabled: td == ei.LOADING,
    +       onClick: e7,
          }),
        }),
    - (null == tI
    -   ? void 0
    -   : null === (t9 = tI.user) || void 0 === t9
    -     ? void 0
    -     : t9.mfa) &&
    + td === ei.ENABLED &&
        ta &&
    -   (0, eA.jsx)(nD, {
    -     children: (0, eA.jsx)(nT, {
    -       label: et.formatMessage(nF.disable2fa),
    -       buttonLabel: et.formatMessage(nF.disable),
    -       onClick: tc,
    -       color: "danger",
    +   (0, eP.jsx)(nF, {
    +     children: (0, eP.jsx)(nO, {
    +       label: et.formatMessage(nU.toggleMfa),
    +       buttonLabel: et.formatMessage(nU.disableMfa),
    +       onClick: tu,
          }),
    ```
  - ```diff
    - enable2fa: {
    -   id: "settingsModal.enable2fa",
    -   defaultMessage: "Enable two-factor authentication",
    + toggleMfa: {
    +   id: "settingsModal.toggleMfa",
    +   defaultMessage: "Multi-factor authentication",
      },
    - enable: { id: "settingsModal.enable", defaultMessage: "Enable" },
    - disable: { id: "settingsModal.disable", defaultMessage: "Disable" },
    - disable2fa: {
    -   id: "settingsModal.disable2fa",
    -   defaultMessage: "Disable two factor authentication",
    + enableMfa: { id: "settingsModal.enable", defaultMessage: "Enable" },
    + disableMfa: {
    +   id: "settingsModal.disable",
    +   defaultMessage: "Disable",
    + },
    + loadingMfa: {
    +   id: "settingsModal.loadingMfa",
    +   defaultMessage: "Loading...",
      },
    ```
  - ```js
    var eX = eC()(
      function () {
        return Promise.all([en.e(398), en.e(4663)])
          .then(en.bind(en, 14663))
          .then(function (Y) {
            return Y.default;
          });
      },
      {
        ssr: !1,
        loadableGenerated: {
          webpack: function () {
            return [14663];
          },
        },
      }
    );
    ```
  - ```js
    eE =
      null ===
        (ei = (0, ek.get)(Y, "metadata.__internal.raw_tokens")) ||
      void 0 === ei
        ? void 0
        : ei.length,
    eS = (0, ek.get)(Y, "metadata.request_id");
    ```
  - ```js
    Y.author.role !== ep.uU.System &&
      (0, eL.jsxs)("div", {
        className: "text-xs text-token-text-tertiary",
        children: ["Req ID: ", eS || "Reload page to see ID"],
      }),
    ```
  - ```diff
          children: [
    -       (0, eI.jsx)("b", { children: "Engine:" }),
    +       (0, eL.jsx)("b", { children: "Tokens Count:" }),
            " ",
          children: [
    -       (0, eI.jsx)("b", { children: "Experiment:" }),
    +       (0, eL.jsx)("b", { children: "Engine:" }),
            " ",
            ed,
          ],
        }),
      ef &&
          children: [
    -       (0, eI.jsx)("b", { children: "Treatment:" }),
    +       (0, eL.jsx)("b", { children: "Experiment:" }),
    ```
  - ```diff
    - (0, eI.jsx)("b", { children: "Group Name:" }),
    + (0, eL.jsx)("b", { children: "Treatment:" }),
    ```
  - ```diff
    + switch (
        (eg.tQ.updateTree(this.clientThreadId, function (Y) {
          Y.updateNodeMessage(
            et.currentNodeId,
            et.activeBranchLastMessage
          ),
            Y.updateNodeMetadata(et.currentNodeId, {
              err: ei,
              errType: "danger",
              errCode: eo,
              completionSampleFinishTime: Date.now(),
            });
        }),
        eo)
      ) {
    +   case eW.qS.ContentPolicy:
    +   case eW.qS.ContentOrTos:
    +   case eP.uU:
    +   case eI.wp:
    +     break;
    +   default:
    +     void 0 !== ei &&
    +       e_.m9.logEvent("chatgpt_conversation_error_web", ei);
    }
    ```
  - ```js
    {
      key: "getMfaInfo",
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
                        this.get("".concat(tt, "/accounts/mfa_info"))
                      );
    ```
  - ```diff
    - em = "allow_url_thread_creation",
    ```
  - ```diff
    - (Y.MessageFeedbackV2 = "message_feedback_v2");
    + (Y.MessageFeedbackV2 = "chatgpt_web_message_feedback_v2");
    ```
  - ```diff
    - e3 = function (Y) {
    -   return eY(function (et) {
    -     return eJ.getConversationMode(Y, et);
    + e3 = function (Y, et) {
    +   return eY(function (en) {
    +     var ei = eJ.getConversationMode(Y, en);
    +     return (null == ei ? void 0 : ei.kind) === "gizmo_interaction" && et
    +       ? { gizmo_id: et, kind: eo.OL.GizmoInteraction }
    +       : ei;
    ```
  - ```js
    ed =
      "undefined" != typeof navigator &&
      (null === (ei = navigator.userAgent) || void 0 === ei
        ? void 0
        : ei.includes(" sidekick/"));
    ```
  - ```js
      var ei,
        eo = en(14765),
        ea = en(6020),
        eu = en(35250),
        ec = "client-e603C1J5XKDc1uGaxqjKesU5bmT1Pge1gCndOG5OdhH";
      function ed(Y) {
        var et = Y.children,
          en = Y.statsig;
        return null == en || null == en.payload
          ? (0, eu.jsx)(eu.Fragment, { children: et })
          : (0, eu.jsx)(ea.StatsigSynchronousProvider, {
              initializeValues: en.payload,
              user: en.user,
              sdkKey: ec,
              options: { environment: { tier: eo.uG } },
              children: et,
            });
      }
      function ef(Y) {
        return (0, ea.useGate)(Y);
      }
      !(function (Y) {
        (Y.Test = "keyz-test-20240201"),
          (Y.AnonTest = "keyz-test-anon-20240201");
      })(ei || (ei = {}));
    },
    ```
  - ```diff
    - return (
    -   console.error(
    -     "[Statsig] An unexpected exception occurred.",
    -     et
    -   ),
    -   this.logError(Y, et, ei),
    -   en()
    - );
    + return et instanceof ec.StatsigInitializationTimeoutError
    +   ? (console.error("[Statsig] Timeout occured.", et), en())
    +   : (console.error(
    +       "[Statsig] An unexpected exception occurred.",
    +       et
    +     ),
    +     this.logError(Y, et, ei),
    ```
  - ```diff
    - (et.StatsigInvalidArgumentError = et.StatsigUninitializedError =
    -   void 0);
    + (et.StatsigInitializationTimeoutError =
    +   et.StatsigSDKKeyMismatchError =
    +   et.StatsigInvalidArgumentError =
    +   et.StatsigUninitializedError =
    +     void 0);
    ```
  - ```diff
    et.StatsigSDKKeyMismatchError = ea;
    var eu = (function (Y) {
      function et(en) {
        var ei =
          Y.call(
            this,
            "The initialization timeout of " +
              en +
              "ms has been hit before the network request has completed."
          ) || this;
        return Object.setPrototypeOf(ei, et.prototype), ei;
      }
      return en(et, Y), et;
    })(Error);
    et.StatsigInitializationTimeoutError = eu;
    ```
  - ```diff
    - (et.version = "4.39.3");
    + (et.version = "4.45.1");
    ```
  - ```js
    Y.getSDKKey()
    ```
  - ```diff
    - return { v1: "", v2: "" };
    + return { v1: "", v2: "", v3: "" };
    ```
  - ```diff
    - "./_parts/human-corrected/ko-KR.json": [35676, 6867],
    + "./_parts/human-corrected/ko-KR.json": [26867, 6867],
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-9cd3a0f216f85167.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-42150dfadc3cd05e.js
https://cdn.oaistatic.com/_next/static/8eNlznjVNElT8wapWdDOE/_buildManifest.js
https://cdn.oaistatic.com/_next/static/8eNlznjVNElT8wapWdDOE/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/5017-b4ef70a357855319.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin-a1768f81fff6d91d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/analytics-9b1758696d2460a5.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/gpts-69a1549f68de26f0.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/identity-0907046e07350e78.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/enable/internal-caf3d8e37ce7e706.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/error-0bf38b4bd16cede0.js
https://cdn.oaistatic.com/_next/static/chunks/3754-c84775af41cb659b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/about-191f42d45191221c.js
https://cdn.oaistatic.com/_next/static/chunks/5054-dd89364b2a3ddb67.js
```

### From `orig/_next/static/chunks/webpack-42150dfadc3cd05e.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/398.1ef137792edb771e.js
https://cdn.oaistatic.com/_next/static/chunks/4534.ada329ee1983b4db.js
https://cdn.oaistatic.com/_next/static/chunks/4663.99f635e91a0dd0ad.js
https://cdn.oaistatic.com/_next/static/chunks/6002.32843a0cf3f8db12.js
https://cdn.oaistatic.com/_next/static/chunks/6867.4b3fe5232d753e7c.js
https://cdn.oaistatic.com/_next/static/chunks/9387.4d07776b2bcf19aa.js
https://cdn.oaistatic.com/_next/static/css/d5b290ede491fef6.css
https://cdn.oaistatic.com/_next/static/css/a3516913ef4144ef.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.5e703480baf20b28.js
```

## 2024-02-03Z (`kAMJ5uXo_RnBLFn2scds_`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - A super tiny build with minimal changes to some strings/labels related to `workspaceSettings`
- App release version (Git SHA?): `a94f8b65257d8f931939865d6b622f99a52cd5d0`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/pages/admin/settings.js`
  - ```diff
    - r && (0, v.jsx)(y.W8, {}),
    - (0, v.jsx)(k, {
    -   title: T.sharingSettingsTitle,
    -   upsellEnterprise: r,
    -   children: (0, v.jsx)(y.qQ, {
    -     children: (0, v.jsx)(Z, {
    + i && (0, w.jsx)(v.W8, {}),
    + (0, w.jsx)(Z, {
    +   title: _.workspaceDetails,
    +   children: (0, w.jsx)(
    +     b.Z,
    +     O(
    +       O({}, _.organizationIdLabel),
    +       {},
    +       {
    +         values: {
    +           organizationId:
    +             null == r ? void 0 : r.data.organizationId,
    +         },
    +       }
    +     )
    +   ),
    + }),
    + (0, w.jsx)(Z, {
    +   title: _.sharingSettingsTitle,
    +   upsellEnterprise: i,
    +   children: (0, w.jsx)(v.qQ, {
    +     children: (0, w.jsx)(M, {
    ```
  - ```js
    workspaceDetails: {
      id: "workspaceSettings.workspaceDetails",
      defaultMessage: "Workspace details",
    },
    organizationIdLabel: {
      id: "workspaceSettings.organizationIdLabel",
      defaultMessage: "Organization ID: {organizationId}",
    },
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-ee0b14f890279a08.js
https://cdn.oaistatic.com/_next/static/kAMJ5uXo_RnBLFn2scds_/_buildManifest.js
https://cdn.oaistatic.com/_next/static/kAMJ5uXo_RnBLFn2scds_/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/settings-65cfc8af93b61cd0.js
```

## 2024-02-03Z (`cUT12v7YWT4wI-mCJ_MrR`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - TODO high level summary of the technical changes listed below
  - **Twitter thread:** TODO
- App release version (Git SHA?): `34e26755cb77127cb70c40390ad63ad37328f79c`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- Module IDs Changed:
  - `85695` -> `35425`
  - `99023` -> `37705`
  - ?etc?
- Cleanup/refactoring related to modal close buttons
  - `unpacked/_next/static/chunks/5017.js`
    - ```diff
      - X = function () {
      -   return B.vm.closeModal(B.B.WorkspaceAppearance);
      - },
      ```
    - ```js
      onClose: function () {
        return B.vm.closeModal(B.B.WorkspaceAppearance);
      },
      showCloseButton: !0,
      ```
  - `unpacked/_next/static/chunks/5054.js`
    - ```diff
      - closeButton: (0, F.jsx)(S.ZP.CloseButton, { onClose: l }),
      + showCloseButton: !0,
      ```
    - ```diff
      - onClose: U(),
      - closeButton: (0, F.jsx)(S.ZP.CloseButton, { onClose: l }),
      + onClose: l,
      + showCloseButton: !0,
      + shouldIgnoreClickOutside: !0,
      ```
  - `unpacked/_next/static/chunks/pages/admin/billing.js`
    - ```js
      showCloseButton: !0,
      ```
    - ```diff
      - closeButton: (0, T.jsx)(N.ZP.CloseButton, { onClose: i }),
      ```
- `unpacked/_next/static/chunks/pages/auth/logout.js`
  - ```diff
    - function p(t) {
    -   var e,
    -     n,
    -     r = t.federatedLogoutUri,
    -     f =
    -       ((e = function () {
    -         o.A.reset(function () {
    -           (0, i.signOut)({ callbackUrl: r || window.location.origin });
    -         });
    -       }),
    -       (n = (0, c.useRef)(!1)),
    + function w(e) {
    +   var t,
    +     r,
    +     c = e.federatedLogoutUri,
    +     o =
    +       ((t = (0, n.Z)(
    +         u().mark(function e() {
    +           return u().wrap(
    +             function (e) {
    +               for (;;)
    +                 switch ((e.prev = e.next)) {
    +                   case 0:
    +                     return (e.prev = 0), (e.next = 3), a.A.reset();
    +                   case 3:
    +                     e.next = 8;
    +                     break;
    +                   case 5:
    +                     (e.prev = 5),
    +                       (e.t0 = e.catch(0)),
    +                       console.error(
    +                         "Failed to reset ProductEventLogger on logout"
    +                       );
    +                   case 8:
    +                     return (
    +                       (e.prev = 8),
    +                       (e.next = 11),
    +                       (0, f.signOut)({
    +                         callbackUrl:
    +                           null != c ? c : window.location.origin,
    +                       })
    +                     );
    +                   case 11:
    +                     e.next = 16;
    +                     break;
    +                   case 13:
    +                     (e.prev = 13),
    +                       (e.t1 = e.catch(8)),
    +                       console.error("Next auth signout failed", e.t1);
    +                   case 16:
    +                   case "end":
    +                     return e.stop();
    +                 }
    +             },
    +             e,
    +             null,
    +             [
    +               [0, 5],
    +               [8, 13],
    +             ]
    +           );
    ```
- `unpacked/_next/static/chunks/pages/_app.js`
  - Lots of diff churn, making it hard to see what changed specifically
  - New/updated `svg` images:
    - Thumbs up (with a section missing from the bottom of it)
    - Thumbs down
    - Something that seemed transparent/I couldn't figure the proper colours for
    - 4 circles in a square layout
  - Refactoring related to close button in modals:
    - ```js
      showCloseButton: !0,
      ```
    - ```diff
      - closeButton: (0, eG.jsx)(eI.ZP.CloseButton, { onClose: eS }),
      ```
    - ```diff
      - showCloseButton: !0,
        type: "warning",
      + closeButton: (0, eG.jsx)(eI.ZP.CloseButton, { onClose: et }),
      ```
    - ```diff
      - closeButton: (0, eV.jsx)(eR.ZP.CloseButton, {
      -   onClose: function () {
      -     tt();
      -   },
      - }),
      + showCloseButton: !0
      ```
    - etc
  - ```diff
    - morning: "in the morning",
    - afternoon: "in the afternoon",
    - evening: "in the evening",
    - night: "at night",
    + morning: "morning",
    + afternoon: "afternoon",
    + evening: "evening",
    + night: "night",
    ```
  - Large section of code related to model feedback:
    - ```js
       ⋮61020│      var lC = function (Y) {
       ⋮61021│          return Y.allGroupedMessages.some(function (Y) {
       ⋮61022│            return [
       ⋮61023│              e_.Browsing,
       ⋮61024│              e_.RetrievalBrowsing,
       ⋮61025│              e_.ParallelBrowsing,
       ⋮61026│            ].includes(Y.type);
       ⋮61027│          });
       ⋮61028│        },
       ⋮61029│        lS = function (Y) {
       ⋮61030│          return Y.allGroupedMessages.some(function (Y) {
       ⋮61031│            return Y.type === e_.CodeInterpreter;
       ⋮61032│          });
       ⋮61033│        },
       ⋮61034│        lE = [
       ⋮61035│          {
       ⋮61036│            match: lC,
       ⋮61037│            tag: "Shouldn't have searched the web",
       ⋮61038│            defaultMessage: "Shouldn't have searched the web",
       ⋮61039│            id: "ConversationTurnInlineMessageFeedback.tag.shouldntHaveUsedBrowser",
       ⋮61040│            description: "'Shouldn't have searched the web' tag",
       ⋮61041│          },
       ⋮61042│          {
       ⋮61043│            match: lC,
       ⋮61044│            tag: "Don't like the source it cited",
       ⋮61045│            defaultMessage: "Don't like the source it cited",
       ⋮61046│            id: "ConversationTurnInlineMessageFeedback.tag.dontLike",
       ⋮61047│            description: "'Don't like the source it cited' tag",
       ⋮61048│          },
       ⋮61049│          {
       ⋮61050│            match: lS,
       ⋮61051│            tag: "Shouldn't have run code",
       ⋮61052│            defaultMessage: "Shouldn't have run code",
       ⋮61053│            id: "ConversationTurnInlineMessageFeedback.tag.shouldntHaveRunCode",
       ⋮61054│            description: "'Shouldn't have run code' tag",
       ⋮61055│          },
       ⋮61056│          {
       ⋮61057│            match: lS,
       ⋮61058│            tag: "Couldn't handle my file",
       ⋮61059│            defaultMessage: "Couldn't handle my file",
       ⋮61060│            id: "ConversationTurnInlineMessageFeedback.tag.couldntHandleMyFile",
       ⋮61061│            description: "'Couldn't handle my file' tag",
       ⋮61062│          },
       ⋮61063│          {
       ⋮61064│            match: function (Y) {
       ⋮61065│              return Y.allGroupedMessages.some(function (Y) {
       ⋮61066│                return Y.type === e_.Dalle;
       ⋮61067│              });
       ⋮61068│            },
       ⋮61069│            tag: "Shouldn't have created an image",
       ⋮61070│            defaultMessage: "Shouldn't have created an image",
       ⋮61071│            id: "ConversationTurnInlineMessageFeedback.tag.shouldntHaveCreatedImage",
       ⋮61072│            description: "'Shouldn't have used code DALL\xb7E' tag",
       ⋮61073│          },
       ⋮61074│          {
       ⋮61075│            match: function (Y) {
       ⋮61076│              var et,
       ⋮61077│                en,
       ⋮61078│                ei = Y.systemContent;
       ⋮61079│              return (
       ⋮61080│                null !==
       ⋮61081│                  (et =
       ⋮61082│                    null == ei
       ⋮61083│                      ? void 0
       ⋮61084│                      : null === (en = ei.instructions) || void 0 === en
       ⋮61085│                        ? void 0
       ⋮61086│                        : en.includes("Personality")) &&
       ⋮61087│                void 0 !== et &&
       ⋮61088│                et
       ⋮61089│              );
       ⋮61090│            },
       ⋮61091│            tag: "Too chatty or casual",
       ⋮61092│            defaultMessage: "Too chatty or casual",
       ⋮61093│            id: "ConversationTurnInlineMessageFeedback.tag.tooChattyOrCasual",
       ⋮61094│            description: "'Too chatty or casual' tag",
       ⋮61095│          },
       ⋮61096│          {
       ⋮61097│            tag: "Don't like the style",
       ⋮61098│            defaultMessage: "Don't like the style",
       ⋮61099│            id: "ConversationTurnInlineMessageFeedback.tag.dontLikeStyle",
       ⋮61100│            description: "'I don't like it' tag",
       ⋮61101│          },
       ⋮61102│          {
       ⋮61103│            tag: "Not factually correct",
       ⋮61104│            defaultMessage: "Not factually correct",
       ⋮61105│            id: "ConversationTurnInlineMessageFeedback.tag.notFactuallyCorrect",
       ⋮61106│            description: "'Not factually correct' tag",
       ⋮61107│          },
       ⋮61108│          {
       ⋮61109│            match: function (Y) {
       ⋮61110│              return Y.features.includes(eY.L0.Sunshine);
       ⋮61111│            },
       ⋮61112│            tag: "Shouldn't have used Memory",
       ⋮61113│            defaultMessage: "Shouldn't have used Memory",
       ⋮61114│            id: "ConversationTurnInlineMessageFeedback.tag.shouldntUseMemory",
       ⋮61115│            description: "'Shouldn't have used Memory' tag",
       ⋮61116│          },
       ⋮61117│        ],
       ⋮61118│        lT = [
       ⋮61119│          {
       ⋮61120│            tag: "Didn't fully follow instructions",
       ⋮61121│            defaultMessage: "Didn't fully follow instructions",
       ⋮61122│            id: "ConversationTurnInlineMessageFeedback.tag.didntFullyFollowInstructions",
       ⋮61123│            description: "'Didn't fully follow instructions' tag",
       ⋮61124│          },
       ⋮61125│          {
       ⋮61126│            tag: "Refused when it shouldn't have",
       ⋮61127│            defaultMessage: "Refused when it shouldn't have",
       ⋮61128│            id: "ConversationTurnInlineMessageFeedback.tag.refusedWhenShouldntHave",
       ⋮61129│            description: "'Refused when it shouldn't have' tag",
       ⋮61130│          },
       ⋮61131│          {
       ⋮61132│            tag: "Being lazy",
       ⋮61133│            defaultMessage: "Being lazy",
       ⋮61134│            id: "ConversationTurnInlineMessageFeedback.tag.beingLazy",
       ⋮61135│            description: "'Being lazy' tag",
       ⋮61136│          },
       ⋮61137│          {
       ⋮61138│            tag: "Other",
       ⋮61139│            defaultMessage: "Other",
       ⋮61140│            id: "ConversationTurnInlineMessageFeedback.tag.other",
       ⋮61141│            description: "'Other' tag",
       ⋮61142│          },
       ⋮61143│        ];
      ```
    - ```js
       ⋮61255│                                  children: (0, tR.jsx)(eJ.Z, {
       ⋮61256│                                    id: "ConversationTurnInlineMessageFeedback.submitted",
       ⋮61257│                                    defaultMessage: "Thanks for your feedback!",
       ⋮61258│                                  }),
      ```
    - ```js
       ⋮61281│                                  children: (0, tR.jsx)(eJ.Z, {
       ⋮61282│                                    id: "ConversationTurnInlineMessageFeedback.inlineTitle",
       ⋮61283│                                    defaultMessage: "Tell us more:",
       ⋮61284│                                  }),
      ```
    - ```js
       ⋮61314│                                          id: "ConversationTurnInlineMessageFeedback.moreOptions",
       ⋮61315│                                          defaultMessage: "More options",
       ⋮61316│                                        }),
      ```
    - ```js
       ⋮61333│                    title: (0, tR.jsx)(eJ.Z, {
       ⋮61334│                      id: "ConversationTurnInlineMessageFeedback.modalTitle",
       ⋮61335│                      defaultMessage: "Provide additional feedback",
       ⋮61336│                    }),
      ```
  - ```js
     ⋮61347│                      children: (0, tR.jsx)(eJ.Z, {
     ⋮61348│                        id: "ConversationTurnInlineMessageFeedback.submit",
     ⋮61349│                        defaultMessage: "Submit",
     ⋮61350│                      }),
    ```
  - ```js
     ⋮61373│                        placeholder: ec.formatMessage({
     ⋮61374│                          id: "ConversationTurnInlineMessageFeedback.feedbackPlaceholder",
     ⋮61375│                          defaultMessage:
     ⋮61376│                            "(Optional) Let us know what you think",
     ⋮61377│                        }),
    ```
  - ```diff
      children: (0, td.jsx)(eR.Z, {
        id: "gizmo.inlineReview.reviewLeftSubtext",
        defaultMessage:
    -     'To update your rating, click "Leave Feedback" in the GPT Menu',
    +     'To update your rating, click "Send Feedback" in the GPT Menu',
      }),
    ```
  - ```js
153202⋮      │                                              : 18);
      ⋮153617│                                              : "gizmo_inline_review" === Y.t0
      ⋮153618│                                                ? 18
      ⋮153619│                                                : 20);
    ```
  - ```js
153228⋮153645│                            case 18:
      ⋮153646│                              return (
      ⋮153647│                                eb.handleGizmoInlineReview(et),
      ⋮153648│                                Y.abrupt("break", 21)
      ⋮153649│                              );
    ```
  - ```js
      ⋮153709│              {
      ⋮153710│                key: "handleGizmoInlineReview",
      ⋮153711│                value: function (Y) {
      ⋮153712│                  eg.tQ.setPromptGptRating(this.clientThreadId, Y.gizmoId);
      ⋮153713│                },
      ⋮153714│              },
    ```
  - ```js
      ⋮156517│              {
      ⋮156518│                key: "getSentinelHeaders",
      ⋮156519│                value: function (Y) {
      ⋮156520│                  var et = {},
      ⋮156521│                    en = "OpenAI-Sentinel-";
      ⋮156522│                  return (
      ⋮156523│                    "string" == typeof Y &&
      ⋮156524│                      (et["".concat(en, "Arkose-Token")] = Y),
      ⋮156525│                    et
      ⋮156526│                  );
      ⋮156527│                },
      ⋮156528│              },
    ```
  - ```js
158552⋮      │                                                      "moderation_response" in
158553⋮      │                                                      et
      ⋮158994│                                                      "type" in et &&
      ⋮158995│                                                      "gizmo_inline_review" ===
      ⋮158996│                                                        et.type
158554⋮158997│                                                        ? en({
158555⋮      │                                                            type: "moderation",
158556⋮      │                                                            conversationId:
158557⋮      │                                                              et.conversation_id,
158558⋮      │                                                            messageId:
158559⋮      │                                                              et.message_id,
158560⋮      │                                                            isCompletion:
158561⋮      │                                                              et.is_completion,
158562⋮      │                                                            flagged:
158563⋮      │                                                              et
158564⋮      │                                                                .moderation_response
158565⋮      │                                                                .flagged,
158566⋮      │                                                            blocked:
158567⋮      │                                                              et
158568⋮      │                                                                .moderation_response
158569⋮      │                                                                .blocked,
      ⋮158998│                                                            type: "gizmo_inline_review",
      ⋮158999│                                                            gizmoId:
      ⋮159000│                                                              et.gizmo_id,
158570⋮159001│                                                          })
158571⋮      │                                                        : "url_moderation_result" in
      ⋮159002│                                                        : "moderation_response" in
158572⋮159003│                                                            et
158573⋮159004│                                                          ? en({
158574⋮      │                                                              type: "url_moderation",
      ⋮159005│                                                              type: "moderation",
158575⋮159006│                                                              conversationId:
158576⋮159007│                                                                et.conversation_id,
158577⋮159008│                                                              messageId:
158578⋮159009│                                                                et.message_id,
158579⋮      │                                                              url: et
158580⋮      │                                                                .url_moderation_result
158581⋮      │                                                                .full_url,
158582⋮      │                                                              isSafe:
      ⋮159010│                                                              isCompletion:
      ⋮159011│                                                                et.is_completion,
      ⋮159012│                                                              flagged:
158583⋮159013│                                                                et
158584⋮      │                                                                  .url_moderation_result
158585⋮      │                                                                  .is_safe,
      ⋮159014│                                                                  .moderation_response
      ⋮159015│                                                                  .flagged,
      ⋮159016│                                                              blocked:
      ⋮159017│                                                                et
      ⋮159018│                                                                  .moderation_response
      ⋮159019│                                                                  .blocked,
158586⋮159020│                                                            })
158587⋮      │                                                          : "num_variants_in_stream" in
      ⋮159021│                                                          : "url_moderation_result" in
158588⋮159022│                                                              et
158589⋮159023│                                                            ? en({
158590⋮      │                                                                type: "num_variants_in_stream",
158591⋮      │                                                                num_variants_in_stream:
158592⋮      │                                                                  et.num_variants_in_stream,
158593⋮      │                                                                display_treatment:
158594⋮      │                                                                  et.display_treatment,
158595⋮      │                                                              })
158596⋮      │                                                            : (en({
158597⋮      │                                                                type: "message",
158598⋮      │                                                                message:
158599⋮      │                                                                  et.message,
      ⋮159024│                                                                type: "url_moderation",
158600⋮159025│                                                                conversationId:
158601⋮159026│                                                                  et.conversation_id,
158602⋮      │                                                              }),
158603⋮      │                                                              eS &&
158604⋮      │                                                                ((eS = !1),
158605⋮      │                                                                eO.end()));
      ⋮159027│                                                                messageId:
      ⋮159028│                                                                  et.message_id,
      ⋮159029│                                                                url: et
      ⋮159030│                                                                  .url_moderation_result
      ⋮159031│                                                                  .full_url,
      ⋮159032│                                                                isSafe:
      ⋮159033│                                                                  et
      ⋮159034│                                                                    .url_moderation_result
      ⋮159035│                                                                    .is_safe,
      ⋮159036│                                                              })
      ⋮159037│                                                            : "num_variants_in_stream" in
      ⋮159038│                                                                et
      ⋮159039│                                                              ? en({
      ⋮159040│                                                                  type: "num_variants_in_stream",
      ⋮159041│                                                                  num_variants_in_stream:
      ⋮159042│                                                                    et.num_variants_in_stream,
      ⋮159043│                                                                  display_treatment:
      ⋮159044│                                                                    et.display_treatment,
      ⋮159045│                                                                })
      ⋮159046│                                                              : (en({
      ⋮159047│                                                                  type: "message",
      ⋮159048│                                                                  message:
      ⋮159049│                                                                    et.message,
      ⋮159050│                                                                  conversationId:
      ⋮159051│                                                                    et.conversation_id,
      ⋮159052│                                                                }),
      ⋮159053│                                                                eE &&
      ⋮159054│                                                                  ((eE = !1),
      ⋮159055│                                                                  eO.end()));
    ```
  - ```js
      ⋮159176│                                            case 20:
      ⋮159177│                                              return (
      ⋮159178│                                                (Y.t4 = Y.t3),
      ⋮159179│                                                (Y.t5 = (0, Y.t1)(Y.t2, Y.t4)),
      ⋮159180│                                                (Y.t6 = ea.getSentinelHeaders(
      ⋮159181│                                                  null != em
      ⋮159182│                                                    ? em
      ⋮159183│                                                    : et.arkoseToken
      ⋮159184│                                                )),
    ```
  - ```js
      ⋮159722│                                    {
      ⋮159723│                                      additionalHeaders:
      ⋮159724│                                        this.getSentinelHeaders(en),
      ⋮159725│                                    }
    ```
  - ```js
      ⋮161759│          (Y.MessageFeedbackV2 = "message_feedback_v2");
    ```
  - ```js
      ⋮162221│          getRatingPrompt: function (Y) {
      ⋮162222│            var et,
      ⋮162223│              en =
      ⋮162224│                arguments.length > 1 && void 0 !== arguments[1]
      ⋮162225│                  ? arguments[1]
      ⋮162226│                  : eQ(),
      ⋮162227│              ei = eJ.resolveThreadId(Y, en);
      ⋮162228│            return null === (et = en.threads[ei]) || void 0 === et
      ⋮162229│              ? void 0
      ⋮162230│              : et.promptGptRating;
      ⋮162231│          },
    ```
  - ```js
      ⋮162607│          setPromptGptRating: function (Y, et) {
      ⋮162608│            var en = e0.resolveThreadId(Y);
      ⋮162609│            eX(function (Y) {
      ⋮162610│              null == et
      ⋮162611│                ? (Y.threads[en].promptGptRating = void 0)
      ⋮162612│                : (Y.threads[en].promptGptRating = { gizmoId: et });
      ⋮162613│            });
      ⋮162614│          },
    ```
  - ```js
      ⋮162973│        tI = function (Y) {
      ⋮162974│          return eY(function () {
      ⋮162975│            var et,
      ⋮162976│              en = e0.resolveThreadId(Y);
      ⋮162977│            return null === (et = eQ().threads[en]) || void 0 === et
      ⋮162978│              ? void 0
      ⋮162979│              : et.promptGptRating;
      ⋮162980│          });
      ⋮162981│        },
      ⋮162982│        tD = function (Y, et) {
      ⋮162983│          return eY(function () {
      ⋮162984│            var en = e0.resolveThreadId(Y),
      ⋮162985│              ei = e0.getTree(en).getBranchFromLeaf(et);
      ⋮162986│            return (0, eP.findLast)(ei, function (Y) {
      ⋮162987│              return (
      ⋮162988│                Y.message.author.role === eo.uU.System &&
      ⋮162989│                "system_content" === Y.message.content.content_type
      ⋮162990│              );
      ⋮162991│            });
      ⋮162992│          });
162482⋮162993│        };
    ```
  - ```js
164295⋮      │                                (eu = Y.sent).setHandler(en, ei, eo),
      ⋮164811│                                (eu = Y.sent),
      ⋮164812│                                  (ec = setTimeout(function () {
      ⋮164813│                                    tC.A.logEvent(
      ⋮164814│                                      tS.M.asyncResponseWaitTooLong,
      ⋮164815│                                      {}
      ⋮164816│                                    );
      ⋮164817│                                  }, t_)),
      ⋮164818│                                  (ed = function (Y) {
      ⋮164819│                                    return (
      ⋮164820│                                      ec && (clearTimeout(ec), (ec = null)),
      ⋮164821│                                      eo(Y)
      ⋮164822│                                    );
      ⋮164823│                                  }),
      ⋮164824│                                  eu.setHandler(en, ei, ed),
    ```
  - ```js
      ⋮175328│            (Y.asyncResponseWaitTooLong =
      ⋮175329│              "Async Response Took Too Long to Come Back");
    ```
  - ```js
178348⋮      │                value: function (Y) {
178349⋮      │                  var et = this;
178350⋮      │                  (this._userFeatures = []), (this._identified = !1);
178351⋮      │                  var en = this.getAnonymousId();
178352⋮      │                  this.getAnalytics().once("reset", function () {
178353⋮      │                    et.getAnalytics().setAnonymousId(en), null == Y || Y();
178354⋮      │                  }),
178355⋮      │                    this.getAnalytics().reset();
178356⋮      │                },
      ⋮178882│                value: (function () {
      ⋮178883│                  var Y = (0, ec.Z)(
      ⋮178884│                    eh().mark(function Y() {
      ⋮178885│                      var et;
      ⋮178886│                      return eh().wrap(
      ⋮178887│                        function (Y) {
      ⋮178888│                          for (;;)
      ⋮178889│                            switch ((Y.prev = Y.next)) {
      ⋮178890│                              case 0:
      ⋮178891│                                return (
      ⋮178892│                                  (this._userFeatures = []),
      ⋮178893│                                  (this._identified = !1),
      ⋮178894│                                  (et = this.getAnonymousId()),
      ⋮178895│                                  (Y.next = 5),
      ⋮178896│                                  this.getAnalytics().reset()
      ⋮178897│                                );
      ⋮178898│                              case 5:
      ⋮178899│                                return (
      ⋮178900│                                  (Y.next = 7),
      ⋮178901│                                  this.getAnalytics().setAnonymousId(et)
      ⋮178902│                                );
      ⋮178903│                              case 7:
      ⋮178904│                              case "end":
      ⋮178905│                                return Y.stop();
      ⋮178906│                            }
      ⋮178907│                        },
      ⋮178908│                        Y,
      ⋮178909│                        this
      ⋮178910│                      );
      ⋮178911│                    })
      ⋮178912│                  );
      ⋮178913│                  return function () {
      ⋮178914│                    return Y.apply(this, arguments);
      ⋮178915│                  };
      ⋮178916│                })(),
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-fb4aee8b03acbd7c.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-4deb970c0eb42112.js
https://cdn.oaistatic.com/_next/static/cUT12v7YWT4wI-mCJ_MrR/_buildManifest.js
https://cdn.oaistatic.com/_next/static/cUT12v7YWT4wI-mCJ_MrR/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/5017-66d7665ea648d8f4.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/billing-8914f334a8e695e8.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/logout-5d4433531d135f53.js
https://cdn.oaistatic.com/_next/static/chunks/5054-2ca8c37b713752b1.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-f969bf847681b2ce.js
```

### From `orig/_next/static/chunks/webpack-4deb970c0eb42112.js`

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.648aa56391049bfa.js
```

## 2024-02-02Z (`cJnjwmwanfzv1nD-EjrOa`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- App release version (Git SHA?): `1c1aa5355e2283e65b6af0a4668113b9ca64f6cd`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- Removed Chunks:
  - `6281`
- Module IDs Changed:
  -  `50860` -> `85695`
  -  `83562` -> `70521`
  -  ?etc?
- `unpacked/_next/static/chunks/pages/_app.js`
  - Lots of diff churn (including some pretty huge chunks), making it hard to see what changed specifically
  - Newly added `svg` image:
    - Of a white `x` within a black square with rounded corners (close? delete?)
  - ```diff
    - "DALL\xb7E ".concat(et, " - ").concat(en, ".png")
    + "DALL\xb7E ".concat(et, " - ").concat(en, ".webp")
    ```
  - Not sure if this dynamic loaded chunk was removed entirely, or just refactored/diff churn:
  - ```js
    ou = en(48099),
    oc = nf()(
      function () {
        return Promise.all([en.e(8682), en.e(4534), en.e(6378)])
          .then(en.bind(en, 53299))
          .then(function (Y) {
            return Y.default;
          });
      },
      {
        loadableGenerated: {
          webpack: function () {
            return [53299];
          },
        },
      }
    );
    ```
  - A number of changes related to removing `promptTextareaRef`
    - ```diff
      - ec = Y.promptTextareaRef,
      ```
    - ```diff
      - promptTextareaRef: ec,
      ```
    - ```diff
      - ref: eu,
      ```
    - etc
  - ```diff
    - className: (0, ef.default)(
    -   "fixed inset-0 bg-black/50 dark:bg-gray-600/70",
    + className: (0, ed.default)(
    +   "fixed inset-0 bg-black/50 dark:bg-black/80",
    ```
  - Some new code/refactor/diff churn related to user surveys:
    - ```js
      return (0, eY.a)({
        queryKey: ["userSurvey"],
        queryFn: (function () {
          var Y = (0, eR.Z)(
            eF().mark(function Y() {
              return eF().wrap(function (Y) {
                for (;;)
                  switch ((Y.prev = Y.next)) {
                    case 0:
                      return Y.abrupt(
                        "return",
                        ez.ZP.getActiveUserSurvey()
      ```
    - ```js
      mutationFn: (function () {
        var Y = (0, eR.Z)(
          eF().mark(function Y(et) {
            return eF().wrap(function (Y) {
              for (;;)
                switch ((Y.prev = Y.next)) {
                  case 0:
                    return Y.abrupt(
                      "return",
                      ez.ZP.completeUserSurvey(et)
      ```
    - ```js
      eF().mark(function Y() {
        return eF().wrap(function (Y) {
          for (;;)
            switch ((Y.prev = Y.next)) {
              case 0:
                t9.E.invalidateQueries({ queryKey: ["userSurvey"] });
      ```
    - ```js
      children: (0, eX.jsx)(ey.Z, {
        id: "navigation.survey.title",
        defaultMessage:
          "We are asking a small group of people for their opinion",
      }),
      ```
    - ```js
      children: (0, eX.jsx)(ey.Z, {
        id: "navigation.survey.description",
        defaultMessage:
          "Could you spare few minutes to take a short survey?",
      }),
      ```
    - ```js
      "aria-label": et.formatMessage({
        id: "navigation.survey.dismiss",
        defaultMessage: "Dismiss survey",
      }),
      ```
    - ```js
      (0, eX.jsx)(ey.Z, {
        id: "navigation.survey.takeSurvey",
        defaultMessage: "Take survey",
      }),
      ```
    - ```js
      {
        key: "getActiveUserSurvey",
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
                          this.get(
                            "".concat(tt, "/user_surveys/active")
                          )
                        );
      ```
    - ```js
      {
        key: "completeUserSurvey",
        value: (function () {
          var Y = (0, ef.Z)(
            eh().mark(function Y(et) {
              return eh().wrap(
                function (Y) {
                  for (;;)
                    switch ((Y.prev = Y.next)) {
                      case 0:
                        return Y.abrupt(
                          "return",
                          this.post(
                            ""
                              .concat(tt, "/user_surveys/")
                              .concat(et, "/complete")
                          )
                        );
      ```
  - ```diff
    - memories: {
    -   id: "personalizationSettings.memories",
    -   defaultMessage: "Memory",
    - },
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-502171a9cdb09c3c.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-fbdc645b411b26ed.js
https://cdn.oaistatic.com/_next/static/cJnjwmwanfzv1nD-EjrOa/_buildManifest.js
https://cdn.oaistatic.com/_next/static/cJnjwmwanfzv1nD-EjrOa/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-7fadb2946edbe409.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/about-eb0ae194b80daac5.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-dc1c030d5ab0d59e.js
https://cdn.oaistatic.com/_next/static/chunks/5054-f3f8b9683a8b7976.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-c2d7bc1da5dc7f60.js
```

### From `orig/_next/static/chunks/webpack-fbdc645b411b26ed.js`

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.b7a768b9c8c3a3f4.js
```

## 2024-02-01Z (`pPcfPwRZfdrv0dCws676L`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- App release version (Git SHA?): `38ed1383cf782f7e45561e545cda3663a2152a91`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- New Chunks:
  - Couldn't be downloaded (server rendered?):
    - `6281`
- Module IDs Changed:
  - `32062` -> `45754`
  - `35473` -> `96055`
  - ?etc?
- `unpacked/_next/static/chunks/pages/_app.js`
  - Added new `svg` images of:
    - A white rounded rectangle in the top left corner
    - A white square with rounded corners in the top left corner, connected to a white square with rounded corners in the bottom right corner
    - Four arrows pointing toward the centre of the square image (minimize/collapse?)
    - Four arrows pointing toward the outer corners of the square image (maximize/expand?)
  - ```js
    eH = ec()(
      function () {
        return Promise.all([en.e(8682), en.e(4534), en.e(1187)])
          .then(en.bind(en, 10898))
          .then(function (Y) {
            return Y.default;
          });
      },
      {
        loadableGenerated: {
          webpack: function () {
            return [10898];
          },
        },
      }
    ),
    ```
  - A bunch of changes across the codebase that seemed to remove `.metadata` from things, but one addition of it again.. perhaps some cleanup/refactoring to DRY the codebase?:
    - ```diff
      - function t7(Y, et) {
      -   if (
      -     Y.type !== tM.qK.JIT_PLUGIN ||
      -     (null === (en = Y.metadata) || void 0 === en
      -       ? void 0
      -       : en.json_schema) == null
      -   )
      -     return !1;
      + function nt(Y, et) {
      +   if (Y.type !== tA.qK.JIT_PLUGIN) return !1;
      ```
    - ```diff
      - return eo(Y.metadata.json_schema), ei;
      + try {
      +   en = JSON.parse(Y.metadata.raw_spec);
      + } catch (et) {
      +   en = tH.ZP.parse(Y.metadata.raw_spec);
      + }
      + return eo(en), ei;
      ```
    - ```diff
      - return (
      -   (ef = iT(
      -     null !==
      -       (en =
      -         null === (eo = et.metadata) || void 0 === eo
      -           ? void 0
      -           : null === (eu = eo.dalle) || void 0 === eu
      -             ? void 0
      -             : eu.prompt) && void 0 !== en
      -       ? en
      -       : ""
      -   )),
      -   (Y.next = 4),
      -   iE(et.url, ef)
      - );
      + return (eu = ij(iO(et))), (Y.next = 4), iT(et.url, eu);
      ```
    - ```diff
      - function ed() {
      -   var Y,
      -     et,
      -     en,
      -     eo =
      -       null !==
      -         (Y =
      -           null === (et = ei.metadata) || void 0 === et
      -             ? void 0
      -             : null === (en = et.dalle) || void 0 === en
      -               ? void 0
      -               : en.prompt) && void 0 !== Y
      -         ? Y
      -         : "";
      ```
    - ```diff
      - children:
      -   null === (et = ei.metadata) || void 0 === et
      -     ? void 0
      -     : null === (en = et.dalle) || void 0 === en
      -       ? void 0
      -       : en.prompt,
      + children: iO(et),
      ```
    - ```diff
      - var ij = (0, eW.vU)({
      + function iO(Y) {
      +   var et, en, ei;
      +   return null !==
      +     (et =
      +       null === (en = Y.metadata) || void 0 === en
      +         ? void 0
      +         : null === (ei = en.dalle) || void 0 === ei
      +           ? void 0
      +           : ei.prompt) && void 0 !== et
      +     ? et
      +     : "";
      + }
      ```
    - ```diff
      - (0, tt.jsx)(nd.sH, {
      -   alt: ed.formatMessage(ij.generatedImageAltText),
      -   src: ek,
      -   width: ew,
      -   height: eC,
      - }),
      - (0, tt.jsx)("div", {
      + (0, ta.jsx)(np.sH, { alt: iO(et), src: eb, width: ek, height: ew }),
      + (0, ta.jsx)("div", {
      ```
  - ```diff
    - generatedImageAltText: {
    -   id: "dalleMessage.generatedImageAltText",
    -   defaultMessage: "Generated by DALL\xb7E",
    - },
    ```
  - A fairly large chunk of new code related to `gizmo.inlineReview`:
    - ```js
      return (0, tA.a)({
        queryKey: ["gizmo", "promptReview", Y],
        queryFn: (function () {
          var en = (0, em.Z)(
            eb().mark(function en() {
              var ei;
              return eb().wrap(function (en) {
                for (;;)
                  switch ((en.prev = en.next)) {
                    case 0:
                      return (en.next = 2), nf.U.getShouldPromptReview(Y);
      ```
    - ```js
       eg = (function () {
         var Y = (0, em.Z)(
           eb().mark(function Y(et) {
             return eb().wrap(function (Y) {
               for (;;)
                 switch ((Y.prev = Y.next)) {
                   case 0:
                     return (
                       ep(!0), (Y.next = 3), eh.mutateAsync({ rating: et })
      ```
    - ```js
      ec.isLoading ||
        !(null !== (et = ec.data) && void 0 !== et && et.should_prompt))
      ```
    - ```js
      children: [
        (0, td.jsx)(eR.Z, {
          id: "gizmo.inlineReview.reviewLeft",
          defaultMessage: "Thanks for your feedback!",
        }),
      ```
    - ```js
      children: (0, td.jsx)(eR.Z, {
        id: "gizmo.inlineReview.reviewLeftSubtext",
        defaultMessage:
          'To update your rating, click "Leave Feedback" in the GPT Menu',
      }),
      ```
    - ```js
      children: [
        (0, td.jsx)(eR.Z, {
          id: "gizmo.inlineReview.prompt",
          defaultMessage: "How would you rate this GPT so far?",
        }),
      ```
  - Not sure if this dynamically loaded chunk was removed, or just moved due to diff churn:
    - ```diff
      - var rr = eS()(
      -     function () {
      -       return en
      -         .e(8682)
      -         .then(en.bind(en, 66202))
      -         .then(function (Y) {
      -           return Y.default;
      -         });
      -     },
      -     {
      -       loadableGenerated: {
      -         webpack: function () {
      -           return [66202];
      -         },
      -       },
      -     }
      -   ),
      -   ri = eS()(
      ```
  - This was removed from one section, but there are still other references to it in the code:
    - ```diff
      tw = null == eO ? void 0 : eO.includes(eB.L0.DataAnalysisV2),
      ```
  - A decent chunk of new/refactored code related to gizmo conversation starters:
    - ```js
        eo = (0, ep.sB)(ep.tz.GizmoReviews).value,
        ea =
          null === (et = en.gizmo.display.prompt_starters) || void 0 === et
            ? void 0
            : et.slice(0, eD);
      return null != ea && 0 !== ea.length && eo
        ? (0, eA.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, eA.jsx)(eR, {
                children: (0, eA.jsx)(ek.Z, {
                  id: "gizmo.about.conversationStartersHeader",
                  defaultMessage: "Conversation Starters",
                }),
              }),
      ```
  - ```js
    function eB(Y, et) {
      var en = new URLSearchParams();
      null != et && en.set("m", et);
      var ei = eL(eD(Y));
      return "" === en.toString() ? ei : "".concat(eL(eD(Y)), "?").concat(en);
    ```
  - A largeish section of removed/added code that looks like it was refactored, related to gizmo reviews:
    - ```js
      {
        key: "getShouldPromptReview",
        value: (function () {
          var Y = (0, eo.Z)(
            ed().mark(function Y(et) {
              return ed().wrap(function (Y) {
                for (;;)
                  switch ((Y.prev = Y.next)) {
                    case 0:
                      return Y.abrupt(
                        "return",
                        ef.ZP.get(
                          ""
                            .concat(ef.B, "/gizmo_reviews/")
                            .concat(et, "/should_prompt")
                        )
                      );
                    case 1:
                    case "end":
                      return Y.stop();
                  }
              }, Y);
            })
          );
          return function (et) {
            return Y.apply(this, arguments);
          };
        })(),
      },
      ```
    - ```js
      return (0, ey.a)({
        queryFn: (function () {
          var et = (0, eo.Z)(
            eu().mark(function et() {
              return eu().wrap(function (et) {
                for (;;)
                  switch ((et.prev = et.next)) {
                    case 0:
                      return et.abrupt("return", ef.U.getUserReview(Y));
                    case 1:
                    case "end":
                      return et.stop();
                  }
              }, et);
            })
          );
          return function () {
            return et.apply(this, arguments);
          };
        })(),
        queryKey: ["gizmo", "review", { gizmoId: Y }],
        enabled: null != Y,
      });
      ```
    - ```js
      eR = function (Y) {
        var et = Y.gizmo;
        return (0, em.EV)(em.B.GPTReview)
          ? (0, eO.jsx)(eL, { gizmo: et })
          : null;
      },
      ```
    - ```js
      eu().mark(function Y() {
        return eu().wrap(function (Y) {
          for (;;)
            switch ((Y.prev = Y.next)) {
              case 0:
                if (null != eZ) {
                  Y.next = 3;
                  break;
                }
                return (
                  eh.m.warning("Please select a rating"),
                  Y.abrupt("return")
                );
              case 3:
                return (
                  (Y.next = 5),
                  ez.mutateAsync({
                    rating: eZ,
                    message: ej.length > 0 ? ej : void 0,
                    includeFrom: ej.length > 0 ? eR : void 0,
                  })
                );
              case 5:
                eh.m.success(ey.formatMessage(eF.successToast), {
                  duration: 3,
                }),
                  ef();
              case 7:
      ```
    - ```js
      eF = (0, eE.vU)({
        title: {
          id: "GizmoReviewModal.title",
          defaultMessage: "Leave Feedback",
        },
        subtitle: {
          id: "GizmoReviewModal.subtitle",
          defaultMessage: "How would you rate this GPT?",
        },
        subtitleChange: {
          id: "GizmoReviewModal.subtitleChange",
          defaultMessage: "Would you like to change your rating?",
        },
        subtitleTooltip: {
          id: "GizmoReviewModal.subtitleTooltip",
          defaultMessage: "Stars will be public and anonymous",
        },
        messagePlaceholder: {
          id: "GizmoReviewModal.messagePlaceholder",
          defaultMessage: "Add an optional private email to the creator",
        },
        submit: { id: "GizmoReviewModal.submit", defaultMessage: "Submit" },
        successToast: {
          id: "GizmoReviewModal.successToast",
          defaultMessage: "Review sent",
        },
        includeFrom: {
          id: "GizmoReviewModal.includeFrom",
          defaultMessage: "Include my email address {email}",
        },
      });
      ```
  - More updates to the `PunctuationBuffer` / `INVERSE_BUFFER_SCALING_FACTOR` tweaks
    - ```js
        this.debug &&
          console.debug(
            "PunctuationBuffer: [scalingFactor: ".concat(
              Y.INVERSE_BUFFER_SCALING_FACTOR,
              "]"
            )
          ),
      ```
    - ```diff
      - : Math.round(en / (ei / Y.INVERSE_BUFFER_SCALING_FACTOR));
      + : Math.round(
      +     en / Math.max(ei / Y.INVERSE_BUFFER_SCALING_FACTOR, 1)
      +   );
      ```
    - ```diff
      - (0, ea.Z)(ep, "INVERSE_BUFFER_SCALING_FACTOR", 100);
      + (0, ea.Z)(ep, "INVERSE_BUFFER_SCALING_FACTOR", 70);
      ```
  - ```diff
    - : eo.SkippingEnterAnimation
    + : ea !== ei.Finished || ew
    +   ? eo.SkippingEnterAnimation
    +   : eo.ToolFinished
    ```
  - ```js
    customIDs: (0, ep.Z)({}, ej, (0, eg.f3)()),
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-a4c060ecbc81f5d4.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-6dbbb942552b84af.js
https://cdn.oaistatic.com/_next/static/pPcfPwRZfdrv0dCws676L/_buildManifest.js
https://cdn.oaistatic.com/_next/static/pPcfPwRZfdrv0dCws676L/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/5017-569d9ff7d165a256.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin-e19ac01dadc476e1.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/analytics-6a84f6c3316883e9.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/billing-15f5c05c635f85b2.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/gpts-386ea098f1c5b20b.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/settings-839d7c4366477c11.js
https://cdn.oaistatic.com/_next/static/chunks/pages/aip/[pluginId]/oauth/callback-62c32a26d82c6ffa.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/enable/internal-0157a9b224541f44.js
https://cdn.oaistatic.com/_next/static/chunks/3975-7f17a9769fd1a61d.js
https://cdn.oaistatic.com/_next/static/chunks/5054-1dbd7585744bc44a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/accepted-4c8bd0bf70514c24.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-e1245d1db53404c6.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-c66100d1dcf1180c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/workspace/deactivated-1ac94d1210251d31.js
```

### From `orig/_next/static/chunks/webpack-6dbbb942552b84af.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/dafd04b74869940d.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1187.142433cda70381ac.js
https://cdn.oaistatic.com/_next/static/chunks/6281.4a0babda689d4f3d.js
https://cdn.oaistatic.com/_next/static/chunks/6378.0fb19b18f331da2d.js
https://cdn.oaistatic.com/_next/static/chunks/sso.a10fc00cdd8c6075.js
```

## 2024-01-31Z (`HcJr3AWz9pJF9a2HyS6Cf`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Some updates related to `isActivelyStreaming` / `_getNextCharDelayMs` / `INVERSE_BUFFER_SCALING_FACTOR`
  - Some refinements to text labels + one of the translation files
  - Some code cleanup/refactoring
  - etc
  - **Twitter thread:** https://twitter.com/_devalias/status/1752524740366041167
- App release version (Git SHA?): `3784968e54c2bcb8aeb90452a1a5efbd63e8fc86`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- The following language/translation files were updated:
  - `unpacked/_next/static/chunks/2292.js`
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```js
    (0, ea.Z)(this, "isActivelyStreaming", void 0),
    (0, ea.Z)(this, "debug", void 0),
    ```
  - ```js
    (this.isActivelyStreaming = !1),
    (this.debug =
      null !== (eo = null == en ? void 0 : en.debug) &&
      void 0 !== eo &&
      eo),
    ```
  - ```diff
    - this._getNextCharDelayMs()
    + this.isActivelyStreaming ? this._getNextCharDelayMs() : 0
    ```
  - ```diff
    - value: function (Y) {
    -   this.textMessageParts = Y;
    + value: function (Y, et) {
    +   (this.textMessageParts = Y), (this.isActivelyStreaming = et);
        var en = (0, ec.Vh)(this.textMessageParts);
        (this.concatenatedText = en),
          (this.textMessagePartsTextLength = en.length),
    ```
  - ```diff
    -     this.textMessagePartsTextLength - this.displayedTextLength;
    - return ei <= 0 ? en : Math.round(en / ei);
    +     this.textMessagePartsTextLength - this.displayedTextLength,
    +   eo =
    +     ei <= 0
    +       ? en
    +       : Math.round(en / (ei / Y.INVERSE_BUFFER_SCALING_FACTOR));
    + return (
    +   this.debug &&
    +     en > Y.CHAR_MAX_BUFFERING_LAG_MS &&
    +     console.debug(
    +       "PunctuationBuffer: [lagMs: "
    +         .concat(eo, "] [numBufferedChars: ")
    +         .concat(ei, "]")
    +     ),
    +   eo
    + );
    ```
  - ```js
    (0, ea.Z)(ep, "INVERSE_BUFFER_SCALING_FACTOR", 100);
    ```
  - ```diff
    - return Y < eg.length ? eg[Y].resource : "create";
    + if (!ey[Y]) return Y < eg.length ? eg[Y].resource : "create";
    ```
  - ```diff
    - children: (0, eH.jsx)(eQ, { isSelected: eu === eg.length }),
    + children: (0, eH.jsx)(eJ, {
    +   gizmoResource: Y.resource,
    +   from: Y.from,
    +   showDescription: ec,
    +   isSelected: eu === et,
    +   grayedOut: ey[et],
    + }),
    ```
  - ```diff
      items: [
        {
          value: eo.Boost,
    -     label: "Boost",
    +     label: (0, eH.jsx)(na, {
    +       label: "Boost",
    +       description:
    +         "The model expands upon on your prompt to have a more detailed DALL\xb7E generation.",
    +     }),
          labelWhenSelected: "Prompt: Boost",
        },
        {
          value: eo.Strict,
    -     label: "Strict",
    +     label: (0, eH.jsx)(na, {
    +       label: "Strict",
    +       description:
    +         "The model uses your exact prompt for the DALL\xb7E generation.",
    +     }),
          labelWhenSelected: "Prompt: Strict",
        },
      ],
    ```
  - The following looks like they aren't new code, but were refactored to use a helper component to simplify the implementation:
    - ```js
      (0, eA.jsx)(nD, {
        children: (0, eA.jsx)(nO, {
          label: (0, eA.jsx)(eS.Z, tX({}, t3.customInstructions)),
          stateLabel:
            null != eh && eh.enabled
              ? ei.formatMessage(t3.on)
              : ei.formatMessage(t3.off),
      ```
    - ```js
      (0, eA.jsx)(nO, {
        onClick: function () {
          return eo(!0);
        },
        label: Y.formatMessage(nF.chatTrainingAllowedToggleLabel),
        stateLabel: ed
          ? Y.formatMessage({
              id: "settingsModal.trainingEnabled",
              defaultMessage: "On",
            })
          : Y.formatMessage({
              id: "settingsModal.trainingDisabled",
              defaultMessage: "Off",
            }),
      }),
      ```
    - etc
  - ```js
    user_prompt_settings:
      null ===
        (ep =
          et.completionMetadata) ||
      void 0 === ep
        ? void 0
        : ep.userPromptSettings,
    ```
  - ```js
    chatgpt_plan_type: et.planType,
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-dfbd5fe22b2a2375.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-c19ea191bfe97e1d.js
https://cdn.oaistatic.com/_next/static/HcJr3AWz9pJF9a2HyS6Cf/_buildManifest.js
https://cdn.oaistatic.com/_next/static/HcJr3AWz9pJF9a2HyS6Cf/_ssgManifest.js
```

### From `orig/_next/static/chunks/webpack-c19ea191bfe97e1d.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/2292.9792e24c24b4d20c.js
https://cdn.oaistatic.com/_next/static/css/1bca5ee9d7f86daa.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.0adec88adbfdfad0.js
```

## 2024-01-30Z (`QOvkXTvubXtbvlZ_iHiii`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - New `DataAnalysisV2` feature (feature flag: `graphite`, that looks like it may be related to an `InChatSpreadsheetFileView` potentially handling these file types: `"xls", "xlsx", "csv", "json"`
  - New publicly accessible `/g/:gizmoId/about` pages (and modal when logged in)
    - eg. https://chat.openai.com/g/g-2fkFE8rbu-dall-e/about
  - Updates to the translation language files (including a diff of what changed in the English language chunk)
  - **Twitter thread:** https://twitter.com/_devalias/status/1752503173825323250
- App release version (Git SHA?): `9da7fe4ed7534947837013241d3043024c267d2a`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- New Chunks
  - `4534`
  - `5719`
  - `9610`
  - Couldn't be downloaded (server rendered?) 
    - `1187`
    - `6378`
- Module IDs Changed:
  - `85695` -> `50860`
  - `24102` -> `35473`
  - `61404` -> `60934` (or `28059`?)
  - `39889` -> `38104`
  - `85695` -> `50860`
  - ?etc?
- The following language/translation files were updated:
  - `unpacked/_next/static/chunks/132.js`
  - `unpacked/_next/static/chunks/660.js`
  - `unpacked/_next/static/chunks/676.js`
  - `unpacked/_next/static/chunks/718.js`
  - `unpacked/_next/static/chunks/1141.js`
  - `unpacked/_next/static/chunks/1597.js`
  - `unpacked/_next/static/chunks/1776.js`
  - `unpacked/_next/static/chunks/1777.js`
  - `unpacked/_next/static/chunks/1948.js`
  - `unpacked/_next/static/chunks/2143.js`
  - `unpacked/_next/static/chunks/2161.js`
  - `unpacked/_next/static/chunks/2178.js`
  - `unpacked/_next/static/chunks/2212.js`
  - `unpacked/_next/static/chunks/2292.js`
  - `unpacked/_next/static/chunks/3060.js`
  - `unpacked/_next/static/chunks/3332.js`
  - `unpacked/_next/static/chunks/3432.js`
  - `unpacked/_next/static/chunks/3466.js`
  - `unpacked/_next/static/chunks/3705.js`
  - `unpacked/_next/static/chunks/4042.js`
  - `unpacked/_next/static/chunks/4347.js`
  - `unpacked/_next/static/chunks/4505.js`
  - `unpacked/_next/static/chunks/4615.js`
  - `unpacked/_next/static/chunks/4616.js`
  - `unpacked/_next/static/chunks/4685.js`
  - `unpacked/_next/static/chunks/4700.js`
  - `unpacked/_next/static/chunks/4806.js`
  - `unpacked/_next/static/chunks/5187.js`
  - `unpacked/_next/static/chunks/5288.js`
  - `unpacked/_next/static/chunks/5632.js`
  - `unpacked/_next/static/chunks/5883.js`
  - `unpacked/_next/static/chunks/5952.js`
  - `unpacked/_next/static/chunks/6291.js`
  - `unpacked/_next/static/chunks/6522.js`
  - `unpacked/_next/static/chunks/6550.js`
  - `unpacked/_next/static/chunks/6867.js`
  - `unpacked/_next/static/chunks/6875.js`
  - `unpacked/_next/static/chunks/6951.js`
  - `unpacked/_next/static/chunks/6952.js`
  - `unpacked/_next/static/chunks/7198.js`
  - `unpacked/_next/static/chunks/7659.js`
  - `unpacked/_next/static/chunks/7745.js`
  - `unpacked/_next/static/chunks/7791.js`
  - `unpacked/_next/static/chunks/7795.js`
  - `unpacked/_next/static/chunks/7947.js`
  - `unpacked/_next/static/chunks/7994.js`
  - `unpacked/_next/static/chunks/8226.js`
  - `unpacked/_next/static/chunks/8400.js`
  - `unpacked/_next/static/chunks/9087.js` (English)
    - <details><summary>Diff of changes to the English language chunk</summary>
      
      ### Added
      
      ```json
      {
        // ..snip..
      
        "announcementTooltip.beta": {
            "defaultMessage": "Beta",
            "description": "Beta badge text"
        },
      
        // ..snip..
      
        "gizmo.about.capabilitiesHeader": {
            "defaultMessage": "Capabilities",
            "description": "Header for the capabilities section of the about modal"
        },
        "gizmo.about.notEnoughReviews": {
            "defaultMessage": "Not enough reviews yet",
            "description": "Message when there are not enough reviews for a gizmo"
        },
        "gizmo.about.numConversations": {
            "defaultMessage": "conversations",
            "description": "Number of conversations for a gizmo"
        },
        "gizmo.about.numReviews": {
            "defaultMessage": "{numReviews, plural, one {# review} other {# reviews}}",
            "description": "Number of reviews for a gizmo"
        },
        "gizmo.about.ratingsHeader": {
            "defaultMessage": "Ratings",
            "description": "Header for the ratings section of the about modal"
        },
        "gizmo.about.startChat": {
            "defaultMessage": "Start Chat",
            "description": "Label for the start chat button in the about modal"
        },
        "gizmo.about.tools.browsing": {
            "defaultMessage": "Browsing",
            "description": "Title for the browsing tool in the about modal"
        },
        "gizmo.about.tools.dalle": {
            "defaultMessage": "DALL·E Images",
            "description": "Title for the dalle tool in the about modal"
        },
        "gizmo.about.tools.dataAnalysis": {
            "defaultMessage": "Data Analysis",
            "description": "Title for the data analysis tool in the about modal"
        },
        "gizmo.about.tools.memory": {
            "defaultMessage": "Memory",
            "description": "Title for the memory tool in the about modal"
        },
        "gizmo.about.tools.memoryDescription": {
            "defaultMessage": "Learns from previous chats to improve future conversations",
            "description": "Description for the memory tool in the about modal"
        },
      
        // ..snip..
      
        "gizmo.anonLandingPage.login": {
            "defaultMessage": "Sign up to chat",
            "description": "Upsell messsage for anonymous users"
        },
        "gizmo.anonLandingPage.subtext": {
            "defaultMessage": "Requires ChatGPT Plus",
            "description": "Upsell subtext for anonymous users"
        },
      
        // ..snip..
      
        "GizmoEditorModelPicker.codeInterpreterTooltip": {
            "defaultMessage": "Allow this GPT to run code. When enabled, this GPT can analyze data, work with files you’ve uploaded, do math, and more.",
            "description": "Code Interpreter tooltip"
        },
        "GizmoEditorModelPicker.memoryTooltip": {
            "defaultMessage": "Allow this GPT to pick up on users details and preferences to tailor its responses to them. When enabled, users will need to have memory on to use this GPT.",
            "description": "Memory tooltip"
        },
      
        // ..snip..
      
        "GizmoReviewModal.includeFrom": {
            "defaultMessage": "Include my email address {email}",
            "description": "Include from checkbox label"
        },
        "GizmoReviewModal.messagePlaceholder": {
            "defaultMessage": "Add an optional private email to the creator",
            "description": "Message placeholder of the GPT review modal"
        },
        "GizmoReviewModal.submit": {
            "defaultMessage": "Submit",
            "description": "Submit"
        },
        "GizmoReviewModal.subtitle": {
            "defaultMessage": "How would you rate this GPT?",
            "description": "Subtitle of the GPT review modal"
        },
        "GizmoReviewModal.subtitleChange": {
            "defaultMessage": "Would you like to change your rating?",
            "description": "Subtitle of the GPT review modal"
        },
        "GizmoReviewModal.subtitleTooltip": {
            "defaultMessage": "Stars will be public and anonymous",
            "description": "Subtitle tooltip of the GPT review modal"
        },
        "GizmoReviewModal.successToast": {
            "defaultMessage": "Review sent",
            "description": "Success toast message"
        },
        "GizmoReviewModal.title": {
            "defaultMessage": "Leave Feedback",
            "description": "Title of the GPT review modal"
        },
      
        // ..snip..
      
        "history.deleteModalMemoryDisclaimer": {
            "defaultMessage": "To clear any memories from this chat, visit your <link>settings</link>.",
            "description": "Disclaimer that memory is not cleared when chat is deleted"
        },
      
        // ..snip..
      
        "MemoriesModal.unknownGizmo": {
            "defaultMessage": "Unknown GPT",
            "description": "Label when an unknown gizmo is selected"
        },
      
        // ..snip..
      
        "mentionGptsAnnouncement.description": {
            "defaultMessage": "Type {key} to mention a GPT and add it directly into your conversation",
            "description": "Description of modal announcing Explore GPTs"
        },
        "mentionGptsAnnouncement.title": {
            "defaultMessage": "GPT mentions",
            "description": "Title of modal announcing Explore GPTs"
        },
      
        // ..snip..
      
        "PromptTextarea.noTestGizmoId": {
            "defaultMessage": "Start by defining your GPT.",
            "description": "Text that shows when input is disabled due to no gizmo id in test mode"
        },
      
        // ..snip..
      
        "settingsModal.alwaysExpandCodeOutput": {
            "defaultMessage": "Always expand code output",
            "description": "Label for the always expand python code setting"
        },
      
        // ..snip..
      
        "settingsModal.deleteHistoryModalMemoryDisclaimer": {
            "defaultMessage": "To clear any memories from your chats, visit your <link>settings</link>.",
            "description": "Disclaimer that memory is not cleared when chat history is deleted"
        },
      
        // ..snip..
      
        "settingsModal.mergeButton": {
            "defaultMessage": "Merge",
            "description": "Merge data from personal workspace button"
        },
        "settingsModal.mergePersonalData": {
            "defaultMessage": "Merge data from your personal workspace",
            "description": "Label for the settings option to merge data from personal workspace"
        },
      
        // ..snip..
      
        "workspaceSettings.stillLoadingData": {
            "defaultMessage": "Don't see what you're looking for? Some GPTs are still loading...",
            "description": "Message for loading state"
        },
      
        // ..snip..
      
        "YearlyBillingToggle.billAnnuallyToggleLabel": {
            "defaultMessage": "Toggle to change between monthly and yearly subscriptions",
            "description": "Toggle label to change between monthly and yearly subscriptions"
        },
        "YearlyBillingToggle.billedAnnually": {
            "defaultMessage": "Billed annually",
            "description": "Description for toggling between billed monthly and billed annually"
        },
        "YearlyBillingToggle.save40Dollars": {
            "defaultMessage": "Save $40",
            "description": "Discount in USD for billing annually"
        },
      }
      ```
      
      ### Modified
      
      ```diff
        "gizmo.recipientBlocked":
        {
      -     "defaultMessage": "Because this GPT previously may have violated our policies, you cannot publish it at this level.",
      +     "defaultMessage": "Because this GPT violates our policies, you will have to submit an appeal for it to be sharable.",
            "description": "Label explaining that GPT cannot be shared at the selected level"
        },
      ```
      
      ```diff
        "initialModal.billing": {
      -     "defaultMessage": "If you have a paid plan, it will be canceled upon completing this step.",
      +     "defaultMessage": "If you have a ChatGPT Plus subscription, it will be canceled and refunded upon completing this step.",
            "description": "Description for what happens to billing"
        },
      ```
      
      ```diff
        "MemoriesModal.title": {
      -     "defaultMessage": "My memories",
      +     "defaultMessage": "Memory",
            "description": "Memories modal title"
        },
      ```
      
      ```diff
      - "MemoriesModal.noMemories": {
      -     "defaultMessage": "As you chat with ChatGPT, the details and preferences it remembers will be shown here.",
      + "MemoriesModal.noMemories.1": {
      +     "defaultMessage": "As you chat with {name}, the details and preferences it remembers will be shown here.",
            "description": "No memories message"
        },
      + "MemoriesModal.noMemoriesAndDisabled": {
      +     "defaultMessage": "Memory is disabled. ChatGPT won't use or create memories.",
      +     "description": "No memories message when memory is disabled"
      + },
      - "MemoriesModal.resetModalDescription": {
      -     "defaultMessage": "ChatGPT will forget everything it has remembered from your chats. This cannot be undone.",
      -     "description": "Description for the reset memory modal"
      + "MemoriesModal.resetGizmoModalDescription": {
      +     "defaultMessage": "{name} will forget everything it has remembered from your chats. This cannot be undone.",
      +     "description": "Description for the reset memory modal for a single GPT"
        },
      ```
      
      ```diff
        "pricingPlanConstants.plusYearly.costInDollars": {
      -     "defaultMessage": "USD $199.99/year",
      +     "defaultMessage": "USD $16.67/month",
            "description": "Cost for plus yearly plan"
        },
      - "pricingPlanConstants.plus.plusPricingYearlyDisclaimer": {
      -     "defaultMessage": "* Price billed annually",
      -     "description": "Yearly Plus plan disclaimer message"
      - },
      + "pricingPlanConstants.plusYearly.costInDollarsSubtitle": {
      +     "defaultMessage": "USD $199.99/year",
      +     "description": "Cost for plus yearly plan subtitle"
      + },
      ```
      
      ```diff
      + "ResetMemoriesButton.resetChatGPT": {
      +     "defaultMessage": "Clear ChatGPT's memory",
      +     "description": "Label for clear ChatGPT memory button"
      + },
      - "ResetMemoriesButton.resetSuccessful": {
      -     "defaultMessage": "Your GPT's memory has been reset.",
      + "ResetMemoriesButton.resetSuccess": {
      +     "defaultMessage": "Memory cleared.",
            "description": "Success message for the reset memory modal"
        },
        "ResetMemoriesButton.resetFailed": {
      +     "defaultMessage": "Failed to clear memory.",
            "description": "Error message for the reset memory modal"
        },
      + "ResetMemoriesButton.resetGizmo": {
      +     "defaultMessage": "Clear this GPT's memory",
      +     "description": "Label for clear this GPT's memory button"
      + },
      ```
      
      ```diff
        "settingsModal.locale_alpha": {
      -     "defaultMessage": "Locale (Alpha)",
      +     "defaultMessage": "Language (Alpha)",
            "description": "Label for the locale setting"
        },
      ```
      
      ```diff
      - "settingsModal.myChagtGptToggleLabel.1": {
      -     "defaultMessage": "Improve responses with your chats",
      -     "description": "Label for the chat history toggle."
      - },
      + "settingsModal.myChagtGptToggleLabel.2": {
      +     "defaultMessage": "Memory",
      +     "description": "Label for the memory-enabled toggle."
      + },
      ```
      
      ```diff
        "teamAccountTransferModal.createDetail": {
      -     "defaultMessage": "Keep your personal account separate. If you’re on Plus, you will maintain your subscription until you cancel",
      -     "description": "Description for keeping personal account separate"
      +     "defaultMessage": "Keep your personal workspace separate. If you’re on Plus, you will maintain your subscription until you cancel",
      +     "description": "Description for keeping personal workspace separate"
        },
        "teamTransferModal.deleteData": {
      -     "defaultMessage": "Your Plugins and custom instructions in your personal account will be deleted.",
      +     "defaultMessage": "Your Plugins and custom instructions in your personal workspace will be deleted.",
            "description": "Description to explain what data will be deleted"
        },
        "teamTransferModal.migrateData": {
      -     "defaultMessage": "Your chat history and GPTs in your personal account will be migrated to the Team workspace.",
      +     "defaultMessage": "Your chat history and GPTs in your personal workspace will be migrated to the Team workspace.",
            "description": "Description to explain what data will be transferred"
        },
        "teamTransferModal.personalAccount": {
      -     "defaultMessage": "Personal account",
      -     "description": "Label for personal account"
      +     "defaultMessage": "Personal workspace",
      +     "description": "Label for personal workspace"
        },
      ```
      
      ### Removed
      
      ```json
      {
        // ..snip..
      
        "GizmoInformation.gpt3_5": {
            "defaultMessage": "GPT-3.5",
            "description": "Label for the GPT-3.5 category of the Gizmo model"
        },
        "GizmoInformation.gpt4": {
            "defaultMessage": "GPT-4",
            "description": "Label for the GPT-4 category of the Gizmo model"
        },
      
        // ..snip..
      
        "GizmoInformation.poweredBy": {
            "defaultMessage": "Powered by",
            "description": "Label for the powered by section of the GPT details modal"
        },
      
        // ..snip..
      
        "MemoriesModal.memoryColumn": {
            "defaultMessage": "Memory",
            "description": "Memory column name"
        },
        
        // ..snip..
      
        "workspaceSettings.allowAllOption": {
            "defaultMessage": "Allow all",
            "description": "Allow all option for third party gpts"
        },
        "workspaceSettings.anyOneSelect": {
            "defaultMessage": "Anyone",
            "description": "Select value for any one option for sharing"
        },
        "workspaceSettings.appearanceTitle": {
            "defaultMessage": "Appearance",
            "description": "Title for appearance settings"
        },
      
        // ..snip..
      
        "workspaceSettings.browseOptionTitle": {
            "defaultMessage": "Browsing with Bing",
            "description": "Browse setting title"
        },
        "workspaceSettings.browseTooltip": {
            "defaultMessage": "Allow ChatGPT and GPTs to browse the internet to answer questions about recent topics and events.",
            "description": "Tooltip message for browse setting toggle"
        },
      
        // ..snip..
      
        "workspaceSettings.customActionsTooltip": {
            "defaultMessage": "Allow GPTs to use third-party services for tasks such as finding flights. Actions are defined by GPT builders.",
            "description": "Tooltip message for custom actions toggle"
        },
      
        "workspaceSettings.dontAllowOption": {
            "defaultMessage": "Don't allow",
            "description": "Don't allow option for third party gpts"
        },
      
        // ..snip..
      
        "workspaceSettings.gptSharingTitle": {
            "defaultMessage": "GPTs can be shared with...",
            "description": "Title for gpt sharing select"
        },
      
        // ..snip..
      
        "workspaceSettings.pluginsOptionTitle": {
            "defaultMessage": "Plugins",
            "description": "Plugins setting title"
        },
        "workspaceSettings.pluginsOptionTitle.0": {
            "defaultMessage": "Custom actions",
            "description": "Custom Actions setting title"
        },
        "workspaceSettings.pluginsTooltip": {
            "defaultMessage": "Allow members to install plugins so ChatGPT can use third-party services for tasks such as finding flights.",
            "description": "Tooltip message for plugin setting toggle"
        },
      
        // ..snip..
      
        "workspaceSettings.thirdPartyGPTsDescription": {
            "defaultMessage": "Manage whether members can use GPTs created outside your workspace. These GPTs may be able to browse the internet or take custom actions.",
            "description": "Description of third GPT settings"
        },
        "workspaceSettings.thirdPartyGPTsTitle": {
            "defaultMessage": "Third-party",
            "description": "Third Party GPTs setting title"
        },
      
        // ..snip..
      
        "workspaceSettings.workspaceGPTsDescription": {
            "defaultMessage": "Manage which capabilities are available for standard ChatGPT and custom GPTs created in your workspace. These settings do not apply to third-party GPTs.",
            "description": "Workspace GPTS settings description"
        },
        "workspaceSettings.workspaceGPTsTitle": {
            "defaultMessage": "Workspace GPTs",
            "description": "Title for workspace gpts settings"
        },
      
        // ..snip..
      }
      ```
      
      </details>

  - `unpacked/_next/static/chunks/9120.js`
  - `unpacked/_next/static/chunks/9271.js`
  - `unpacked/_next/static/chunks/9826.js`
- `unpacked/_next/static/[buildHash]/_buildManifest.js`
  - Added new route: `/g/[gizmoId]/about` (`static/chunks/pages/g/[gizmoId]/about-c111b3c828beae5a.js`)
- `unpacked/_next/static/chunks/4534.js`
  - This is a newly added chunk
  - At least some parts of this chunk seem to correlate with the following libs:
    - https://github.com/leandrowd/react-easy-swipe/blob/65b9a3c5f4acc2fc8c2abf00c3c963cf52873b29/lib/react-swipe.js
    - https://github.com/leandrowd/react-responsive-carousel/blob/b8762d6627819fefbaa2c56fa3fcb8c614bcc4f0/src/components/Carousel/index.tsx
    - https://github.com/glideapps/glide-data-grid/blob/0673b91ac92210766f4d783f87c63485e9447483/packages/core/src/common/styles.ts
    - https://github.com/NoobKilla5412/Stuff/blob/3c71879b1057bf9d9eb0b1df7df8777fe4430390/js/marked.js#L1253
      - https://github.com/markedjs/marked4
    - https://github.com/adaltas/node-csv/blob/f56106dba13c2d2d91997c69341f66794e92929e/packages/csv-parse/lib/api/normalize_columns_array.js#L24
    - ?etc?
- `unpacked/_next/static/chunks/5719.js`
  - This is a newly added chunk
  - At least some parts of this chunk seem to correlate with the following libs:
    - https://github.com/glideapps/glide-data-grid/blob/0673b91ac92210766f4d783f87c63485e9447483/packages/core/src/internal/data-grid-overlay-editor/private/number-overlay-editor.tsx
    - https://github.com/s-yadav/react-number-format/blob/e2179f9e9d2c4ddd1ab714ff385412b53e9ed3e7/src/number_format_base.tsx#L297
    - ?etc?
- `unpacked/_next/static/chunks/9610.js`
  - This is a newly added chunk
  - At least some parts of this chunk seem to correlate with the following libs:
    - https://github.com/glideapps/glide-data-grid/blob/0673b91ac92210766f4d783f87c63485e9447483/packages/core/src/internal/data-grid-overlay-editor/data-grid-overlay-editor.tsx#L198
    - ?etc?
- `unpacked/_next/static/css/944a9aa5c00c7d0e.css`
  - This is a newly added CSS chunk
  - At least some parts of this chunk seem to correlate with the following libs:
    - https://github.com/glideapps/glide-data-grid
- `unpacked/_next/static/chunks/pages/g/[gizmoId].js`
  - ```js
    GizmoChatWithRedirect: function () {
      return y;
    },
    ```
- `unpacked/_next/static/chunks/pages/g/[gizmoId]/about.js`
  - This is a newly added chunk/page/route (`/g/[gizmoId]/about`)
  - ```js
    (0, u.createElement)(
      s.GizmoChatWithRedirect,
      f(f({}, e), {}, { key: e.gizmoId })
    ),
    ```
  - ```js
    function h(e) {
      var t = (0, c.useRouter)().query.gizmoId;
      return "chat_page" === e.kind
        ? (0, u.createElement)(d, f(f({}, e), {}, { key: t, gizmoId: t }))
        : (0, s.default)(e);
    }
    ```
  - ```js
    r.d(t, {
      GizmoChatWithRedirect: function () {
        return P;
      },
      __N_SSP: function () {
        return x;
      },
      default: function () {
        return v;
      },
    });
    ```
  - ```js
    function v(e) {
      var t = (0, h.useRouter)().query.gizmoId;
      switch (e.kind) {
        case "anon_gizmo":
          return (0, O.jsx)(c.X, { gizmo: e.gizmo }, t);
        case "chat_page":
          return (0, p.createElement)(
            P,
            y(y({}, e), {}, { key: t, gizmoId: t })
          );
        default:
          (0, g.Z)(e);
      }
    }
    ```
  - ```js
    children: [
      (0, O.jsx)("div", {
        className: "font-bold",
        children: (0, O.jsx)(m.Z, {
          id: "gizmo.loadError",
          defaultMessage: "We're having trouble loading this GPT.",
        }),
      }),
      (0, O.jsx)(m.Z, {
        id: "gizmo.loadErrorRefresh",
        defaultMessage: "Please refresh the page, or try again later",
      }),
    ],
    ```
  - ```js
    children: [
      (0, O.jsx)(o.p, {
        onClick: function () {
          return (0, l.MG)();
        },
        children: (0, O.jsx)(m.Z, {
          id: "gizmo.upsell",
          defaultMessage: "Sign up to chat",
        }),
      }),
      (0, O.jsx)("div", {
        className: "text-sm text-token-text-tertiary",
        children: (0, O.jsx)(m.Z, {
          id: "gizmo.upsellSubtext",
          defaultMessage: "Requires ChatGPT Plus",
        }),
      }),
    ],
    ```
  - ```js
    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/g/[gizmoId]/about",
      function () {
        return r(14320);
      },
    ]);
    ```
- `unpacked/_next/static/chunks/pages/_app.js`
  - Lots of diff churn, making it hard to see what changed specifically
  - ```js
    os = nu()(
      function () {
        return Promise.all([en.e(8682), en.e(4534), en.e(1187)])
          .then(en.bind(en, 36027))
          .then(function (Y) {
            return Y.default;
          });
      },
      {
        loadableGenerated: {
          webpack: function () {
            return [36027];
          },
        },
      }
    );
    ```
  - ```diff
    - ei.is_visually_hidden)
    + ei.is_visually_hidden_from_conversation)
    ```
  - ```js
    ek = (0, ez.FJ)(eU.L0.DataAnalysisV2) ? os : nj.ZP,
    ```
  - ```js
    var rr = eS()(
        function () {
          return en
            .e(8682)
            .then(en.bind(en, 66202))
            .then(function (Y) {
              return Y.default;
            });
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [66202];
            },
          },
        }
      ),
    ```
  - ```js
    tw = null == eO ? void 0 : eO.includes(eB.L0.DataAnalysisV2),
    ```
  - ```js
    function eL(Y) {
      var et = eD(Y);
      return null != et && ["xls", "xlsx", "csv", "json"].includes(et);
    }
    ```
  - ```js
    var eI = ew()(
        function () {
          return Promise.all([en.e(8682), en.e(4534), en.e(6378)])
            .then(en.bind(en, 40528))
            .then(function (Y) {
              return Y.InChatSpreadsheetFileView;
            });
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [40528];
            },
          },
        }
      ),
    ```
  - ```diff
    - return (0, eT.jsx)(ew.u, {
    + return (0, ep.FJ)(eh.L0.DataAnalysisV2) && (0, ed.Vm)(eT)
    +   ? (0, eM.jsx)(eI, {
    +       file: {
    +         type: "interpreter",
    +         fileName: eT,
    +         serverThreadId: eP,
    +         messageId: et,
    +       },
    +     })
    +   : (0, eM.jsx)(e_.u, {
            closeOnOutsideClick: !1,
            delayDuration: 0,
            label: (0, eM.jsxs)("span", {
              className: "flex items-center gap-1",
              children: [
                ew
                  ? eR.formatMessage(ez.startingDownload)
                  : eR.formatMessage(ez.downloadFile),
                ew && (0, eM.jsx)(ej.Z, {}),
              ],
            }),
    ```
  - ```diff
    - void 0 !== ey && en({ targetedReply: ey, messageId: Y });
    + void 0 !== ey && en({ targetedReply: { message: ey }, messageId: Y });
    ```
  - ```js
    (Y.DataAnalysisV2 = "graphite");
    ```
  - ```diff
    - parts: [
    -   "User is replying to this part in particular: [".concat(Y, "]"),
    - ],
    + parts: ["The user is referring to this in particular:\n".concat(Y)],
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-790dff08864dc0e9.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-cc5855bb7bd791cb.js
https://cdn.oaistatic.com/_next/static/QOvkXTvubXtbvlZ_iHiii/_buildManifest.js
https://cdn.oaistatic.com/_next/static/QOvkXTvubXtbvlZ_iHiii/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-8849567cbce226b6.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/about-c111b3c828beae5a.js
https://cdn.oaistatic.com/_next/static/chunks/5054-62a250586f2efcd7.js
```

### From `orig/_next/static/chunks/webpack-cc5855bb7bd791cb.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/132.a745fcb48f3f79d7.js
https://cdn.oaistatic.com/_next/static/chunks/660.863db58d9b2c4fac.js
https://cdn.oaistatic.com/_next/static/chunks/676.02ac0ffbfa8c5154.js
https://cdn.oaistatic.com/_next/static/chunks/718.9483197b3c23f16f.js
https://cdn.oaistatic.com/_next/static/chunks/1141.e12619ef20ee8dcb.js
https://cdn.oaistatic.com/_next/static/chunks/1597.452b273c1662f842.js
https://cdn.oaistatic.com/_next/static/chunks/1776.1c17d87e4be5be0d.js
https://cdn.oaistatic.com/_next/static/chunks/1777.7e475e32ffd8606a.js
https://cdn.oaistatic.com/_next/static/chunks/1948.b74b40283fc502df.js
https://cdn.oaistatic.com/_next/static/chunks/2143.e3112fc0bdc6fa12.js
https://cdn.oaistatic.com/_next/static/chunks/2161.159b4ff2174ea408.js
https://cdn.oaistatic.com/_next/static/chunks/2178.18cbce9703f1716c.js
https://cdn.oaistatic.com/_next/static/chunks/2212.18f476477f4b666d.js
https://cdn.oaistatic.com/_next/static/chunks/2292.ee193cc78b99bd50.js
https://cdn.oaistatic.com/_next/static/chunks/3060.fb83d49572672105.js
https://cdn.oaistatic.com/_next/static/chunks/3332.f2d71c59c27b82df.js
https://cdn.oaistatic.com/_next/static/chunks/3432.9ba3191923ffe5b2.js
https://cdn.oaistatic.com/_next/static/chunks/3466.f5367a2a3f0c7e0a.js
https://cdn.oaistatic.com/_next/static/chunks/3705.a652e3e05b57dc6d.js
https://cdn.oaistatic.com/_next/static/chunks/4042.9cce873b21d9d1fc.js
https://cdn.oaistatic.com/_next/static/chunks/4347.03656ba77ad8b1e2.js
https://cdn.oaistatic.com/_next/static/chunks/4505.a2a487e75de0dba5.js
https://cdn.oaistatic.com/_next/static/chunks/4534.c91227865dbd351e.js
https://cdn.oaistatic.com/_next/static/chunks/4615.f2144e58c6d3d96d.js
https://cdn.oaistatic.com/_next/static/chunks/4616.0e2523515d925276.js
https://cdn.oaistatic.com/_next/static/chunks/4685.230d3d3b676bd751.js
https://cdn.oaistatic.com/_next/static/chunks/4700.16ef54769ebe4d62.js
https://cdn.oaistatic.com/_next/static/chunks/4806.ea138c284a6d3ad8.js
https://cdn.oaistatic.com/_next/static/chunks/5187.d6f3e7be8bddb1d0.js
https://cdn.oaistatic.com/_next/static/chunks/5288.655e15d0328160bd.js
https://cdn.oaistatic.com/_next/static/chunks/5632.6eba15000e99adae.js
https://cdn.oaistatic.com/_next/static/chunks/5719.7c6ed6ab3bf446f4.js
https://cdn.oaistatic.com/_next/static/chunks/5883.f566f7bc43d433b1.js
https://cdn.oaistatic.com/_next/static/chunks/5952.372cba881ee40706.js
https://cdn.oaistatic.com/_next/static/chunks/6291.45a11795b1f677f6.js
https://cdn.oaistatic.com/_next/static/chunks/6522.65706e5da58922b6.js
https://cdn.oaistatic.com/_next/static/chunks/6550.b0eb71c1fc6253b5.js
https://cdn.oaistatic.com/_next/static/chunks/6867.ab0d66ec1a9e61c5.js
https://cdn.oaistatic.com/_next/static/chunks/6875.234da06b9a80ed0b.js
https://cdn.oaistatic.com/_next/static/chunks/6951.e7d1dd0f30b42e30.js
https://cdn.oaistatic.com/_next/static/chunks/6952.8ad3cdd527fc5245.js
https://cdn.oaistatic.com/_next/static/chunks/7198.00799d507cea0fba.js
https://cdn.oaistatic.com/_next/static/chunks/7659.d64759fc62a514e2.js
https://cdn.oaistatic.com/_next/static/chunks/7745.6d3d8ed11b0e9709.js
https://cdn.oaistatic.com/_next/static/chunks/7791.a44e46a641c46b6f.js
https://cdn.oaistatic.com/_next/static/chunks/7795.a691b8d7f9267f78.js
https://cdn.oaistatic.com/_next/static/chunks/7947.709027c1f343a12d.js
https://cdn.oaistatic.com/_next/static/chunks/7994.096269e2f8b6a1ad.js
https://cdn.oaistatic.com/_next/static/chunks/8226.319595273e51f6c9.js
https://cdn.oaistatic.com/_next/static/chunks/8400.229d5c975f2f96fb.js
https://cdn.oaistatic.com/_next/static/chunks/9087.d54d32dc67199d8a.js
https://cdn.oaistatic.com/_next/static/chunks/9120.736b0b5dcb0fd73c.js
https://cdn.oaistatic.com/_next/static/chunks/9271.3ff25034d4f49bf3.js
https://cdn.oaistatic.com/_next/static/chunks/9610.2a98c01f0e084702.js
https://cdn.oaistatic.com/_next/static/chunks/9826.be1c530080db6526.js
https://cdn.oaistatic.com/_next/static/css/944a9aa5c00c7d0e.css
https://cdn.oaistatic.com/_next/static/css/3fb8fa04c05d20fc.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/1187.e399439fd7afe77c.js
https://cdn.oaistatic.com/_next/static/chunks/6378.85bbfb8e15956201.js
https://cdn.oaistatic.com/_next/static/chunks/sso.0128006165f67fd9.js
```

## 2024-01-29Z (`3Frj0dWPrnm3c4KeyI6Zl`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Possibly nothing much of note, but hard to say for sure due to the amount of diff churn.
- App release version (Git SHA?): `a97b75ec2d006ee672072a0311d0a02b37942961`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- Module IDs Changed:
  - `21842` -> `24102`
  - `79468` -> `23920`
  - `88963` -> `99023`
  - ?etc?
- `unpacked/_next/static/chunks/pages/_app.js`
  - Huge amount of diff churn, making it hard to see what changed specifically, but I think most of it was just refactor/noise.
  - Some of it might have been changes in dependency versions or similar?
  - It looks like a bunch of old `useEffect` code might have been removed/reformatted, and replaced with this call:
    - ```diff
      - (0, eU.useEffect)(
      -   function () {
      -     if (
      -       tQ &&
      -       void 0 !== tM &&
      -       (void 0 === tM.enabledTools ||
      -         !(tM.enabledTools.length > 0)) &&
      -       null != ew &&
      -       ew.includes(eQ.Yj) &&
      -       0 !== tY.enabledModelsInCategoriesById.size &&
      -       !t$.current &&
      -       void 0 === eX.tQ.getServerThreadId(ec)
      -     ) {
      -       var Y,
      -         et = eR.query,
      -         en = et.m,
      -         ei = (0, eE.Z)(et, iZ);
      -       if (void 0 !== en) {
      -         Y = Array.isArray(en) ? en[0] : en;
      -         var eo = (0, eK.Z)();
      -         (t$.current = !0),
      -           tK(
      -             eo,
      -             { content: Y, attachments: [] },
      -             { eventSource: "url" },
      -             { conversationMode: eX.iN.getConversationMode(ec) }
      -           ),
      -           eR.replace({ pathname: eR.pathname, query: ei }, void 0, {
      -             shallow: !0,
      -           });
      -       }
      -     }
      -   },
      -   [tM, eR, tK, tQ, tY, ew, ec]
      - );
      ```
    - ```js
      iN({
        clientThreadId: ec,
        currentLeafId: eU,
        handleRequestCompletion: tH,
      });
      ```
    - ```diff
         return "gpt-4-hogwild-browsing" === ec ||
           ec.includes("maraschino") ||
      +    ec.includes("sahara") ||
           (null != eE && eE.includes("hogwild_browsing"))
           ? eA === ef.X.Running
      ```
      - I wonder of OpenAI are trolling us with this one..? 🤔

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-a58796752d470ac0.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-0bf92d30f53a218a.js
https://cdn.oaistatic.com/_next/static/3Frj0dWPrnm3c4KeyI6Zl/_buildManifest.js
https://cdn.oaistatic.com/_next/static/3Frj0dWPrnm3c4KeyI6Zl/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/5054-e2060ddbea2abdb7.js
https://cdn.oaistatic.com/_next/static/chunks/pages/search-d835393483b5432a.js
```

### From `orig/_next/static/chunks/webpack-0bf92d30f53a218a.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/b706d4182d20ff06.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.61c48d706fc289b6.js
```

## 2024-01-28Z (`PFzTxQNocNiG6gdS1bBR-`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - A new 'verified social auth' (`GizmoBuilderSocials` / `chatgpt-gizmo-builder-socials`) feature for gizmo (Custom GPT) builders to link to their social media accounts (Twitter, GitHub, LinkedIn)
  - Some parsing/display of `metadata.__internal.*` data:
    - `metadata.__internal.normalized_model_side`
    - `metadata.__internal.model_experiment_group_name` (Group Name)
    - `metadata.__internal.model_experiment_group_params` (Group Params)
    - `metadata.__internal.model_experiment_override` (Above Parmas Overrid By)
    - `metadata.__internal.model_experiment_eval_seq` (Experiment Eval Seq)
  - Some minor tweaks/refinements to the text used for some of the upcoming features
  - Updates to the translation language files (except for the english one)
    - I didn't extract/diff these individually to see what exactly changed in them, but my guess is that it's just to update them for the default english strings embedded in the code recently.
  - **Twitter thread:** https://twitter.com/_devalias/status/1751768315071271354
- App release version (Git SHA?): `8feae373829ad394bd434293b28e7fe9dd874b0c`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- The following files had large changes to embedded JSON that appears to be related to translation:
  - Of note, there didn't seem to be changes to the chunk related to english I don't think (previously was `unpacked/_next/static/chunks/9087.js`)
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
  - `unpacked/_next/static/chunks/9120.js`
  - `unpacked/_next/static/chunks/9271.js`
  - `unpacked/_next/static/chunks/9826.js`
- `unpacked/_next/static/chunks/pages/_app.js`
  - Further CSS styling refinements/standardisation such as:
    - ```diff
      - "flex w-full items-center justify-between bg-blue-950 p-3 text-white",
      + "dark flex w-full items-center justify-between bg-blue-950 p-3 text-token-text-primary",
      ```
    - ```diff
      - className: "text-white hover:text-gray-300",
      + className: "hover:text-token-text-secondary",
      ```
    - etc
  - ```diff
      case ec.qK.DALLE:
    -   return { title: eL.dalle, description: eL.memoryDescription };
    +   return { title: eL.dalle };
    ```
  - ```diff
      (0, em.jsx)(ep.p, {
        href: "/auth/login?next=".concat(en),
    -   children: "Sign up to chat",
    +   children: (0, em.jsx)(ef.Z, {
    +     id: "gizmo.anonLandingPage.login",
    +     defaultMessage: "Sign up to chat",
    +   }),
      }),
    ```
  - ```diff
      (0, em.jsx)("div", {
        className: "text-sm text-token-text-tertiary",
    -   children: "Requires ChatGPT Plus",
    +   children: (0, em.jsx)(ef.Z, {
    +     id: "gizmo.anonLandingPage.subtext",
    +     defaultMessage: "Requires ChatGPT Plus",
    +   }),
      }),
    ```
  - A bunch of changes related to 'social auth' connected to gizmo (Custom GPT) creator profiles:
    - `svg` images of:
      - the GitHub octocat logo
      - the LinkedIn logo
      - the Twitter logo
    - ```js
      {
        key: "unverifySocialAuth",
        value: function (Y) {
          return ef.ZP.delete(
            "".concat(ef.B, "/gizmo_creator_profile/socials/").concat(Y)
          );
        },
      },
      ```
    - ```js
      var eP = "#settings/BuilderProfile";
      ```
    - ```js
      function eI() {
        var Y = (0, ew.NL)();
        return (0, eC.D)({
          mutationFn: function (Y) {
            var et = Y.id;
            return em.U.unverifySocialAuth(et);
          },
          onSuccess: function () {
            Y.refetchQueries({ queryKey: ["builderProfile"] });
          },
        });
      }
      ```
    - ```js
      children: [
        en({ className: "icon-md hover:cursor-pointer" }),
        (0, eO.jsx)("span", { children: eo }),
        ea &&
          (null == eu ? void 0 : eu.username) &&
          (0, eO.jsxs)("a", {
            href: eu.link_to,
            className: "text-sm text-gray-500",
            children: ["@", null == eu ? void 0 : eu.username],
          }),
      ],
      ```
    - ```js
      ea
        ? (0, eO.jsx)(eg.cY, {
            loading: em.isPending,
            className:
              "rounded-lg bg-green-200 px-2 py-1.5 font-medium text-green-900",
            onClick: function () {
              em.mutate({ id: ei });
            },
            children: (0, eO.jsx)(e_.Z, eA({}, eR.verified)),
          })
        : (0, eO.jsx)(eg.cY, {
            loading: ep,
            onClick: (0, ec.Z)(
              ef().mark(function Y() {
                return ef().wrap(function (Y) {
                  for (;;)
                    switch ((Y.prev = Y.next)) {
                      case 0:
                        return (
                          eh(!0),
                          (Y.next = 3),
                          (0, ey.doOauthRedirect)({ id: ei }, eP)
                        );
                      case 3:
                        eh(!1);
                      case 4:
                      case "end":
                        return Y.stop();
                    }
                }, Y);
              })
            ),
            children: (0, eO.jsx)(e_.Z, eA({}, eR.verify)),
          }),
      ```
    - ```js
      ew = (0, eV.sB)(eV.tz.GizmoBuilderSocials).value,
      ```
    - ```js
      ew &&
        (0, eO.jsxs)(eO.Fragment, {
          children: [
            (0, eO.jsx)(eD, {
              socialData: eo.socials.twitter,
              icon: eW.fWC,
            }),
            (0, eO.jsx)(eD, {
              socialData: eo.socials.github,
              icon: eW.hJX,
            }),
            (0, eO.jsx)(eD, {
              socialData: eo.socials.linkedin,
              icon: eW.ltd,
            }),
          ],
        }),
      ```
    - ```js
      (Y.GizmoBuilderSocials = "chatgpt-gizmo-builder-socials");
      ```
  - ```js
    ep = (0, eb.get)(Y, "metadata.__internal.normalized_model_side"),
    eh = (0, eb.get)(
      Y,
      "metadata.__internal.model_experiment_group_name"
    ),
    eg = (0, eb.get)(
      Y,
      "metadata.__internal.model_experiment_group_params"
    ),
    ey = (0, eb.get)(
      Y,
      "metadata.__internal.model_experiment_override"
    ),
    ek = (0, eb.get)(
      Y,
      "metadata.__internal.model_experiment_eval_seq"
    );
    ```
  - ```js
    eh &&
      (0, eI.jsxs)("div", {
        children: [
          (0, eI.jsx)("b", { children: "Group Name:" }),
          " ",
          eh,
        ],
      }),
    eg &&
      (0, eI.jsxs)("div", {
        children: [
          (0, eI.jsx)("b", { children: "Group Params:" }),
          (0, eI.jsx)("div", {
            children: JSON.stringify(eg, null, 2),
          }),
        ],
      }),
    ey &&
      (0, eI.jsxs)("div", {
        children: [
          (0, eI.jsx)("b", {
            children: "Above Parmas Overrid By:",
          }),
          " ",
          ey,
        ],
      }),
    ek &&
      (0, eI.jsxs)("div", {
        children: [
          (0, eI.jsx)("b", {
            children: "Experiment Eval Seq:",
          }),
          " click to see",
        ],
      }),
    ```
  - ```diff
    - var ed = { pathname: Y.pathname, query: ec };
    + var ed = {
    +   pathname: Y.pathname,
    +   hash: Y.asPath.split("#")[1],
    +   query: ec,
    + };
    ```
- `unpacked/_next/static/chunks/5054.js`
  - ```diff
      recipientBlocked: {
        id: "gizmo.recipientBlocked",
        defaultMessage:
    -     "Because this GPT previously may have violated our policies, you cannot publish it at this level.",
    +     "Because this GPT violates our policies, you will have to submit an appeal for it to be sharable.",
      },
    ```
- `unpacked/_next/static/chunks/pages/g/[gizmoId].js`
  - ```js
    children: (0, x.jsx)(p.Z, {
      id: "gizmo.loadError",
      defaultMessage: "We're having trouble loading this GPT.",
    }),
    ```
  - ```js
    (0, x.jsx)(p.Z, {
      id: "gizmo.loadErrorRefresh",
      defaultMessage: "Please refresh the page, or try again later",
    }),
    ```
  - ```js
      children: (0, x.jsx)(p.Z, {
        id: "gizmo.upsell",
        defaultMessage: "Sign up to chat",
      }),
    }),
    (0, x.jsx)("div", {
      className: "text-sm text-token-text-tertiary",
      children: (0, x.jsx)(p.Z, {
        id: "gizmo.upsellSubtext",
        defaultMessage: "Requires ChatGPT Plus",
      }),
    }),
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-e4a1a0a39128a801.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-3bae4746a995c045.js
https://cdn.oaistatic.com/_next/static/PFzTxQNocNiG6gdS1bBR-/_buildManifest.js
https://cdn.oaistatic.com/_next/static/PFzTxQNocNiG6gdS1bBR-/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-468b117d740e6d37.js
https://cdn.oaistatic.com/_next/static/chunks/5054-8ad3d13d663a6185.js
```

### From `orig/_next/static/chunks/webpack-3bae4746a995c045.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/676.dbf1ba728fbd92b7.js
https://cdn.oaistatic.com/_next/static/chunks/718.7fd76febb795c6d1.js
https://cdn.oaistatic.com/_next/static/chunks/1141.4cb21c14f513419e.js
https://cdn.oaistatic.com/_next/static/chunks/1777.b69524f431de351e.js
https://cdn.oaistatic.com/_next/static/chunks/1948.fcbba53fff20bf3f.js
https://cdn.oaistatic.com/_next/static/chunks/2178.f04715e086de4d29.js
https://cdn.oaistatic.com/_next/static/chunks/3466.b0dfc5942fa3723e.js
https://cdn.oaistatic.com/_next/static/chunks/3705.f2833b6e8cc87512.js
https://cdn.oaistatic.com/_next/static/chunks/4042.653106b054eaf3c2.js
https://cdn.oaistatic.com/_next/static/chunks/4615.205db2b86a7ccf3d.js
https://cdn.oaistatic.com/_next/static/chunks/4700.ce0f69688dfc2ecc.js
https://cdn.oaistatic.com/_next/static/chunks/4806.9246cd6a90c74ac0.js
https://cdn.oaistatic.com/_next/static/chunks/5187.2538cbec4e04d2d2.js
https://cdn.oaistatic.com/_next/static/chunks/5288.d726dba33293502c.js
https://cdn.oaistatic.com/_next/static/chunks/5952.248c9b23bbb29423.js
https://cdn.oaistatic.com/_next/static/chunks/6522.814b2637eb5737cc.js
https://cdn.oaistatic.com/_next/static/chunks/6875.4a9d99c62d5f2a0e.js
https://cdn.oaistatic.com/_next/static/chunks/6951.823f271ea6fac0c4.js
https://cdn.oaistatic.com/_next/static/chunks/6952.9bde05acbeecdf4c.js
https://cdn.oaistatic.com/_next/static/chunks/7198.cc60a9fa4c5c5881.js
https://cdn.oaistatic.com/_next/static/chunks/7947.b853d79982179568.js
https://cdn.oaistatic.com/_next/static/chunks/8226.5bfc74b574c7cab0.js
https://cdn.oaistatic.com/_next/static/chunks/8400.7f72b6e74736cfb3.js
https://cdn.oaistatic.com/_next/static/chunks/9120.3d3747553b932a9e.js
https://cdn.oaistatic.com/_next/static/chunks/9271.08253793e606fa7c.js
https://cdn.oaistatic.com/_next/static/chunks/9826.e4559afae7a3a553.js
https://cdn.oaistatic.com/_next/static/css/8b86e27efbeac809.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.83bc6392b8f90823.js
```

## 2024-01-26Z (`83oSRqlSVypjfyIfupJ78`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - New DALLE Controls feature, allowing various settings to be selected on image generation prompts (Prompt Boost/Strict, Style Automatic/Natural/Vivid, Aspect Ratio Automatic / Square (1024x1024) / Widescreen (1792x1024) / Vertical (1024x1792))
    - Feature flag: `d3_controls`
  - Further refinements to various upcoming features including:
    - ChatGPT 'memory' (sunshine)
    - Custom GPT reviews/ratings
    - Pricing plans/payment modal (including discounted annual ChatGPT Plus subscriptions for US$199.99/year (eg. US$16.67/month))
    - Locales/language settings (Development, German, English (US), Spanish (Spain), French (France), Italian, Japanese, Korean, Polish, Portuguese (Brazil), Portuguese (Portugal), Russian, Simplified Chinese, Traditional Chinese (Taiwan))
  - Some CSS cleanup/refactoring to standardize colours/etc
  - **Twitter thread:** https://twitter.com/_devalias/status/1751746340575703473
- App release version (Git SHA?): `0bc7ea79e82fb4d24d8ded463ee920b62c85e85f`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- Chunk IDs Changed
  - `4648` -> `5054`
- Modules IDs Changed
  - `495` -> `21842`  ?
  - `4925` -> `21842` ?
  - `29861` -> `91928`
  - `8995` -> `99959`
  - `81853` -> `12275`
  - `54648` -> `45054`
  - `93193` -> `33460`
  - `61888` -> `33228` ?
  - `67404` -> `61236` ?
  - `9559` -> `90166` ?
  - ?etc?
- Styling refinements (across a number of files) such as:
  - ```diff
      className: (0, a.default)(
    -   "truncate  text-gray-500 dark:text-gray-100",
    +   "truncate text-token-text-tertiary",
    ```
  - ```diff
      className: (0, a.default)(
    -   "mt-1  text-gray-900 dark:text-blue-200",
    +   "mt-1 font-semibold text-token-text-primary",
    ```
- `unpacked/_next/static/chunks/5054.js`
  - Chunk ID changed from `4648`
  - There is lots of diff churn in this chunk, so harder to see what changed specifically, but it mostly looks like churn/noise; I didn't notice anything big/new.
- `unpacked/_next/static/chunks/pages/_app.js`
  - There is lots of diff churn in this chunk, so harder to see what changed specifically
  - Added a new `svg` image of a speech bubble
  - ```diff
    - assistantMessage: ed,
    + jitPluginData: eJ,
    ```
  - ```js
    function nS(Y) {
      var et, en, ei;
      if (
        (null === (et = Y.from_server) || void 0 === et
          ? void 0
          : et.type) === "confirm_action" ||
        (null === (en = Y.from_server) || void 0 === en
          ? void 0
          : en.type) === "oauth_required" ||
        (null === (ei = Y.from_server) || void 0 === ei
          ? void 0
          : ei.type) === "preview"
      )
        return Y.from_server.body.params;
    }
    ```
  - ```diff
    - ei = Y.assistantMessage,
    + ei = Y.jitPluginData,
    ```
  - ```js
    ec =
      null !==
        (et =
          null === (en = (0, ed.hz)()) || void 0 === en
            ? void 0
            : en.includes(ef.L0.Sunshine)) &&
      void 0 !== et &&
      et;
    ```
  - ```js
    children: (0, ta.jsx)(eR.Z, {
      id: "history.deleteModalMemoryDisclaimer",
      defaultMessage:
        "To clear any memories from this chat, visit your <link>settings</link>.",
      values: {
        link: function (Y) {
          return (0, ta.jsx)(eP(), {
            href: "#settings/Personalization",
            shallow: !0,
            className: "underline",
            children: Y,
          });
        },
      },
    }),
    ```
  - ```js
    badge: "beta",
    ```
    - I believe this is added to the custom @mentions feature.. so maybe it will release as beta soon!
  - A fairly large chunk of code related to DALLE 3 settings/etc:
    - ```js
      children: [
        (0, tC.jsx)(rk, {
          value: et,
          onValueChange: en,
          items: [
            {
              value: ed.Boost,
              label: "Boost",
              labelWhenSelected: "Prompt: Boost",
            },
            {
              value: ed.Strict,
              label: "Strict",
              labelWhenSelected: "Prompt: Strict",
            },
          ],
        }),
      ```
    - ```js
      items: [
        {
          value: ef.Automatic,
          label: "Automatic",
          labelWhenSelected: "Style: Automatic",
        },
        {
          value: ef.Natural,
          label: "Natural",
          labelWhenSelected: "Style: Natural",
        },
        {
          value: ef.Vivid,
          label: "Vivid",
          labelWhenSelected: "Style: Vivid",
        },
      ],
      ```
    - ```js
      items: [
        {
          value: ep.Automatic,
          label: "Automatic",
          labelWhenSelected: "Aspect Ratio: Automatic",
        },
        {
          value: ep.Square,
          label: "Square",
          labelWhenSelected: "Aspect Ratio: Square",
        },
        {
          value: ep.Wide,
          label: "Widescreen",
          labelWhenSelected: "Aspect Ratio: Widescreen",
        },
        {
          value: ep.Tall,
          label: "Vertical",
          labelWhenSelected: "Aspect Ratio: Vertical",
        },
      ],
      ```
    - ```js
      !(function (Y) {
        (Y.Boost = "boost"), (Y.Strict = "strict");
      })(ed || (ed = {})),
        (function (Y) {
          (Y.Automatic = "automatic"),
            (Y.Natural = "natural"),
            (Y.Vivid = "vivid");
        })(ef || (ef = {})),
        (function (Y) {
          (Y.Automatic = "automatic"),
            (Y.Square = "1024x1024"),
            (Y.Wide = "1792x1024"),
            (Y.Tall = "1024x1792");
      ```
    - ```js
      (null === (eh = tO) || void 0 === eh
        ? void 0
        : eh.gizmo.id) === nk.qL &&
        (null == tc
          ? void 0
          : tc.includes(eQ.L0.DalleControls)) &&
        (0, tC.jsx)(rb, {}),
    ```
  - I think `33228` is mostly just refactored/diff churn, but it has a fairly large chunk of seemingly new code
    - ```js
      switch (Y.type) {
        case ec.qK.BROWSER:
          return { title: eL.browsing };
        case ec.qK.PYTHON:
          return { title: eL.dataAnalysis };
        case ec.qK.DALLE:
          return { title: eL.dalle, description: eL.memoryDescription };
        case ec.qK.MEMORY:
          return { title: eL.memory, description: eL.memoryDescription };
        default:
          return null;
      }
      ```
    - ```js
      children: (0, eS.jsx)(em.Z, {
        id: "gizmo.about.capabilitiesHeader",
        defaultMessage: "Capabilities",
      }),
      ```
    - ```js
      children: (0, eS.jsx)(em.Z, {
        id: "gizmo.about.numReviews",
        defaultMessage:
          "{numReviews, plural, one {# review} other {# reviews}}",
        values: { numReviews: ei.count },
      }),
      ```
    - ```js
      children: (0, eS.jsx)(em.Z, {
        id: "gizmo.about.numConversations",
        defaultMessage: "conversations",
      }),
      ```
    - ```js
      children: (0, eS.jsx)(em.Z, {
        id: "gizmo.about.ratingsHeader",
        defaultMessage: "Ratings",
      }),
      ```
    - ```js
      children: (0, eS.jsx)(em.Z, {
        id: "gizmo.about.numReviews",
        defaultMessage:
          "{numReviews, plural, one {# review} other {# reviews}}",
        values: {
          numReviews:
            null !==
              (ei =
                null == en
                  ? void 0
                  : en.by_rating[Y]) && void 0 !== ei
              ? ei
              : 0,
        },
      ```
    - ```js
      children: (0, eS.jsx)(em.Z, {
        id: "gizmo.about.notEnoughReviews",
        defaultMessage: "Not enough reviews yet",
      }),
      ```
    - ```js
      var et = Y.gizmo,
        en = (0, ed.EV)(ed.B.GPTDetails),
        ei = function () {
          return ed.vm.closeModal(ed.B.GPTDetails);
        };
      ```
    - ```js
      children: [
        (0, eS.jsx)(eC.r, { gizmo: en, isOwner: ep }),
        eo,
        (0, eS.jsx)(eN, { vanityMetrics: en.gizmo.vanity_metrics }),
        (0, eS.jsx)(eI, { vanityMetrics: en.gizmo.vanity_metrics }),
        (0, eS.jsx)(eA, { tools: en.tools }),
      ],
      ```
    - ```js
      eL = (0, eg.vU)({
        browsing: {
          id: "gizmo.about.tools.browsing",
          defaultMessage: "Browsing",
        },
        dataAnalysis: {
          id: "gizmo.about.tools.dataAnalysis",
          defaultMessage: "Data Analysis",
        },
        dalle: {
          id: "gizmo.about.tools.dalle",
          defaultMessage: "DALL\xb7E Images",
        },
        memory: { id: "gizmo.about.tools.memory", defaultMessage: "Memory" },
        memoryDescription: {
          id: "gizmo.about.tools.memoryDescription",
          defaultMessage:
            "Learns from previous chats to improve future conversations",
        },
      });
      ```
  - Another chunk of seemingly new code:
    - ```js
      ed = (0, tm.sB)(tm.tz.GizmoReviews).value,
      ```
    - ```js
      children: [
        (0, tV.jsx)(tG.ec, { className: "icon-lg" }),
        (0, tV.jsx)(tj.Z, {
          id: "gizmo.about.startChat",
          defaultMessage: "Start Chat",
        }),
      ],
      ```
  - ```js
    ei = Y.setPopoverForceOpen,
    ```
  - ```diff
      subtitle: {
        id: "GizmoReviewModal.subtitle",
    -   defaultMessage: "How well did this GPT meet your expectations?",
    +   defaultMessage: "How would you rate this GPT?",
      },
    ```
  - ```js
      subtitleTooltip: {
        id: "GizmoReviewModal.subtitleTooltip",
    -   defaultMessage: "This will help the builder improve the quality of GPTs in the future.",
    +   defaultMessage: "Stars will be public and anonymous",
      },
    ```
  - ```diff
      ey = "g-YyyyMT9XH";
    + eb = "g-2fkFE8rbu";
    ```
  - ```js
    eS = Y.badge,
    eT = void 0 === eS ? "new" : eS,
    ```
  - ```js
    "new" === eT
      ? (0, ep.jsx)("span", {
          className: (0, ea.default)(
            "rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase leading-normal",
            "default" === eE
              ? "bg-green-500 text-white"
              : "bg-white text-black"
          ),
          children: (0, ep.jsx)(ed.Z, em({}, ey.new)),
        })
      : (0, ep.jsx)("span", {
          className:
            "rounded-full bg-blue-100 px-1.5 text-[10px] font-medium text-blue-600",
          children: (0, ep.jsx)(ed.Z, em({}, ey.beta)),
        }),
    ```
  - ```diff
      new: { id: "announcementTooltip.new", defaultMessage: "New" },
    + beta: { id: "announcementTooltip.beta", defaultMessage: "Beta" },
    ```
  - A bunch of diff churn/refactor related to subscriptions/invites/payment modal/etc:
    - ```js
      return (0, eg.a)({
        queryKey: ["updateInvites"],
        queryFn: function () {
          return em.ZP.getUpgradeInvites();
        },
      ```
    - ```js
      plusWaitlistSignupSuccess: {
        id: "pricingPlanConstants.plusWaitlistSignupSuccess",
        defaultMessage:
          "You've been added to the waitlist to upgrade to Plus",
      },
      ```
    - ```js
      teamWaitlistSignupSuccess: {
        id: "pricingPlanConstants.teamWaitlistSignupSuccess",
        defaultMessage:
          "You've been added to the waitlist to upgrade to Team",
      },
      ```
    - ```js
      (0, ef.Z)(ei, ep.D8.PLUS, {
        localStorageKeyByVersion: {
          V1: ey.F.HasSignedUpForPlusUpgradeWaitlistV1,
          V2: ey.F.HasSignedUpForPlusUpgradeWaitlistV2,
        },
        onSuccessMessage: eA.plusWaitlistSignupSuccess,
      }),
      (0, ef.Z)(ei, ep.D8.TEAM, {
        localStorageKeyByVersion: {
          V1: ey.F.HasSignedUpForTeamUpgradeWaitlistV1,
          V2: ey.F.HasSignedUpForTeamUpgradeWaitlistV2,
        },
        onSuccessMessage: eA.teamWaitlistSignupSuccess,
      }),
      ```
    - ```js
        ei = en.localStorageKeyByVersion,
        eo = en.onSuccessMessage,
        ea = ei.V1,
        eu = ei.V2,
        ec = (0, ej.useState)(!!ey.m.getItem(ea))[0],
        ed = (0, ej.useState)(!!ey.m.getItem(eu)),
        ef = ed[0],
        ep = ed[1],
        eh = eE().data,
        em = function () {
          ep(!0),
            ey.m.setItem(eu, !0),
            eS.m.success(et.formatMessage(eo), {
              hasCloseButton: !0,
              duration: 5,
            }),
            eT.A.logEvent(e_.M.upgradePlanWaitlistSignup, { plan: Y });
        };
      return {
        hasSignedUpForWaitlist: ec || ef,
        isEligibleToUpgrade: !!(null == eh ? void 0 : eh.plus) || ec,
        signUpForWaitlist: em,
      };
      ```
    - ```js
      eF = function (Y) {
        var et = Y.shouldLogExposure,
          en = (0, eI.rk)().data,
          ei = (0, eD.Sx)().initialized && en && !(0, eI.c)(en),
          eo = (0, ej.useMemo)(
            function () {
              return ei
                ? eD.m9.getLayer({
                    layerName: eD.Hk.CHATGPT_SUBSCRIPTIONS,
                    shouldLogExposure: !1,
                  })
                : null;
            },
            [ei]
          );
        if (!ei)
          return {
            isTeamEnabled: eR,
            isYearlyPlusSubscriptionEnabled: eL,
            subscriptionsLayer: null,
          };
        var ea = eD.m9.getLayerValue({
          layerName: eD.Hk.CHATGPT_SUBSCRIPTIONS,
          key: "is_yearly_plus_subscription_enabled",
          defaultValue: eL,
          shouldLogExposure: et,
        });
        return {
          isTeamEnabled: eD.m9.getLayerValue({
            layerName: eD.Hk.CHATGPT_SUBSCRIPTIONS,
            key: "is_team_enabled",
            defaultValue: eR,
            shouldLogExposure: et,
          }),
          isYearlyPlusSubscriptionEnabled: ea,
          subscriptionsLayer: eo,
        };
      },
      ```
    - ```js
      return (0, eX.jsxs)("div", {
        className: (0, eQ.default)("mb-4 flex items-center", et),
        "data-testid": "".concat(eo, "-yearly-billing-toggle"),
        children: [
          (0, eX.jsx)(eY.Z, {
            enabled: en,
            label: ea.formatMessage(e0.billAnnuallyToggleLabel),
            onChange: ei,
          }),
          (0, eX.jsx)("span", {
            className: "ml-[6px] mr-2 text-xs text-gray-600",
            children: ea.formatMessage(e0.billedAnnually),
          }),
          (0, eX.jsx)("span", {
            className:
              "rounded-[2px] bg-green-100 px-[4px] py-[2px] text-xs text-green-800",
            children: ea.formatMessage(e0.save40Dollars),
          }),
        ],
      });
      ```
    - ```js
      e0 = (0, eO.vU)({
        billedAnnually: {
          id: "YearlyBillingToggle.billedAnnually",
          defaultMessage: "Billed annually",
        },
        save40Dollars: {
          id: "YearlyBillingToggle.save40Dollars",
          defaultMessage: "Save $40",
        },
        billAnnuallyToggleLabel: {
          id: "YearlyBillingToggle.billAnnuallyToggleLabel",
          defaultMessage:
            "Toggle to change between monthly and yearly subscriptions",
        },
      }),
      ```
    - ```js
      var tt = ep.D8.FREE,
        ta = function (Y) {
          var et = Y.isYearlyPlusSubscriptionEnabled;
      ```
    - ```js
      children: [
        (0, eX.jsx)("p", {
          className:
            "text-base font-light text-token-text-tertiary",
          "data-testid": "".concat(et, "-pricing-column-cost"),
          children: (0, eX.jsx)(eW.Z, tk({}, en.costInDollars)),
        }),
        en.costInDollarsSubtitle
          ? (0, eX.jsx)("p", {
              className:
                "text-xs font-light text-token-text-tertiary",
              "data-testid": "".concat(
                et,
                "-pricing-column-cost-subtitle"
              ),
              children: (0, eX.jsx)(
                eW.Z,
                tk({}, en.costInDollarsSubtitle)
              ),
            })
          : null,
      ],
      ```
    - ```js
          en = Y.isYearlyBillingEnabled,
          ei = et.data.subscriptionStatus;
        return ei.hasPaidSubscription && ei.subscriptionPlan === ep.Y5.PLUS
          ? "yearly" === ei.billingPeriod
            ? e4.S.plusYearly
            : e4.S.plus
          : en
            ? e4.S.plusYearly
            : e4.S.plus;
      },
      ```
    - ```js
      tA = ep.D8.PLUS,
      tP = function (Y) {
        var et = Y.analyticsParams,
          en = Y.currentAccount,
          ei = Y.hasUpgradeInvite,
          eo = Y.isPlanLoading,
          ea = Y.isYearlyPlusSubscriptionEnabled,
          eu = Y.onSubmit,
          ec = Y.setIsPlanLoading,
          ed = Y.shouldShowAdditionalLinks,
          ef = void 0 === ed || ed,
          ep = Y.upgradeButtonText,
          eh = void 0 === ep ? e4.S.plus.callToAction.inactive : ep,
          eg = Y.size,
          ey = (0, eI.hz)(),
          eb = (0, eM.Z)(),
          ek = (0, eH.useRouter)(),
          ew = [],
          eC = (0, eB.KQ)(),
          eE = (0, eB.WY)(),
          eO = (0, eB.e2)(),
          eA = eN(tA),
          eP = eA.hasSignedUpForWaitlist,
          eR = eA.signUpForWaitlist,
          eL = (0, ej.useState)(!1),
          eF = eL[0],
          ez = eL[1],
          eU =
            (null == ey ? void 0 : ey.includes("disable_plus_upgrade_ui")) &&
            !(eC || eE || ei),
          eG = tO(
            tO({}, et),
            {},
            {
              planType: tA,
              isUpgradeUiDisabled: eU,
              isYearlyBillingEnabled: eF,
            }
      ```
    - ```js
      eD.m9.logEvent(
        "chatgpt_account_payment_modal_upgrade_button_click",
        tA
      ),
      (Y.prev = 3),
      (Y.next = 6),
      em.ZP.getCheckoutLink({
        plus_plan_data: {
          price_interval: eF ? "year" : "month",
        },
      })
      ```
    - ```js
      eD.m9.logEvent(
        "chatgpt_account_payment_modal_navigating_to_checkout",
        tA,
        { url: et.url }
      ),
      ```
    - ```js
      var tB = ep.D8.TEAM,
        tU = function (Y) {
          var et = Y.analyticsParams,
            en = Y.isPlanLoading,
            ei = Y.isYearlyPlusSubscriptionEnabled,
            eo = Y.size,
            ea = (0, eI.hz)(),
            eu = null == ea ? void 0 : ea.includes("disable_team_upgrade_ui"),
            ec = (0, eM.Z)(),
            ed = (0, eI.t)(),
            ef = eN(tB),
            ep = ef.hasSignedUpForWaitlist,
            eh = ef.signUpForWaitlist,
            em = ed && ed.isTeam(),
            eg = ed && ed.isPlus(),
            ey = tF(tF({}, et), {}, { planType: tB, isUpgradeUiDisabled: eu }),
            eb = function () {
              eT.A.logEvent(e_.M.clickAccountPaymentCheckout, ey),
                eD.m9.logEvent(
                  "chatgpt_account_payment_modal_upgrade_button_click",
                  tB
                ),
                tR.vm.setPurchaseWorkspaceData({ minimumSeats: tD.Y6 }),
                tW();
            },
            ek = ei
              ? (0, eX.jsx)(eJ, {
                  planType: tB,
                  isEnabled: !1,
                  onChange: e9.noop,
                  className: "invisible",
                })
              : null;
          return (0, eX.jsx)(t_, {
            planName: "team",
            pricingPlan: e4.S.teams,
            icon: (0, eX.jsx)(tI.Bj, {
              className: "icon-md text-brand-blue-800",
            }),
            size: eo,
            callToActionButton: (0, eX.jsxs)("div", {
              className: "flex gap-2",
              children: [
                em &&
                  (0, eX.jsx)(e6, {
                    planType: tB,
                    isCurrentPlan: !0,
                    disabled: en,
                    onClick: eb,
                    testId: "select-plan-button-teams-upgrade",
                    children: ec.formatMessage(e4.S.teams.callToAction.active),
                  }),
                eu
                  ? (0, eX.jsxs)("div", {
                      className: "relative w-full",
                      children: [
                        ek,
                        (0, eX.jsx)(tp.u, {
                          side: "bottom",
                          sideOffset: 20,
                          label: ec.formatMessage(
                            e4.S.disabledHighDemand.hoverText
                          ),
                          children: (0, eX.jsx)(e6, {
                            planType: tB,
                            isCurrentPlan: !1,
                            disabled: ep,
                            onClick: eh,
                            testId: "select-plan-button-teams-waitlist",
                            children: (0, eX.jsx)(
                              eW.Z,
                              tF(
                                {},
                                ep
                                  ? e4.S.signUpForWaitlist.inactive
                                  : e4.S.signUpForWaitlist.active
                              )
                            ),
                          }),
                        }),
                      ],
                    })
                  : (0, eX.jsxs)("div", {
                      className: "w-full",
                      children: [
                        ek,
                        (0, eX.jsx)(e6, {
                          planType: tB,
                          isCurrentPlan: !1,
                          disabled: en,
                          onClick: eb,
                          testId: "select-plan-button-teams-create",
                          children:
                            em || eg
                              ? ec.formatMessage(e4.S.teams.callToAction.create)
                              : ec.formatMessage(
                                  e4.S.teams.callToAction.inactive
                                ),
                        }),
                      ],
                    }),
              ],
      ```
    - ```js
      eb = !(
        null !== (en = (0, eI.t)()) &&
        void 0 !== en &&
        en.hasPaidSubscription()
      ),
      ek = eN(ep.D8.PLUS).isEligibleToUpgrade,
      ew = (0, eD.Sx)(),
      eC = ew.initialized,
      eE = ew.initTimedOut,
      eS = ed && null != em && (eC || eE),
      eO = eF({ shouldLogExposure: eS }),
      eM = eO.isTeamEnabled,
      eA = eO.subscriptionsLayer,
      eP = eO.isYearlyPlusSubscriptionEnabled,
      eR = (0, ej.useMemo)(
        function () {
          return em
            ? tH(
                tH({}, em.subscriptionAnalyticsParams),
                {},
                {
                  subscriptionsLayer: {
                    isTeamEnabled: eM,
                    isYearlyPlusSubscriptionEnabled: eP,
                    groupName: null == eA ? void 0 : eA.getGroupName(),
                    ruleId: null == eA ? void 0 : eA.getRuleID(),
                    name: null == eA ? void 0 : eA.getName(),
                  },
                }
              )
            : {};
        },
      ```
    - ```js
      (0, ej.useEffect)(function () {
        !eg.startsWith("/auth") &&
          ez.bX.getCookie(ez.cn.ShowPaymentModal) &&
          (ez.bX.deleteCookie(ez.cn.ShowPaymentModal), tV());
      }, []),
      ```
    - ```js
      children: [
        eb &&
          (0, eX.jsx)(ta, { isYearlyPlusSubscriptionEnabled: eP }),
        !ey &&
          (0, eX.jsx)(tP, {
            analyticsParams: eR,
            currentAccount: em,
            setIsPlanLoading: eu,
            isPlanLoading: ea,
            isYearlyPlusSubscriptionEnabled: eP,
            hasUpgradeInvite: ek,
            size: eb || eM ? "small" : "medium",
          }),
      ```
    - ```js
      eM &&
        (0, eX.jsx)(tU, {
          analyticsParams: eR,
          isPlanLoading: ea,
          isYearlyPlusSubscriptionEnabled: eP,
          size: ey ? "large" : "small",
        }),
      ```
    - ```js
          modalTitle: {
            id: "AccountPaymentModal.modalTitle",
            defaultMessage: "Upgrade your plan",
          },
          modalFooterCapabilities: {
            id: "AccountPaymentModal.modalFooterCapabilities",
            defaultMessage:
              "Need more capabilities? See <link> ChatGPT Enterprise </link>",
          },
      ```
  - ```diff
      plusYearlyCost: {
        id: "pricingPlanConstants.plusYearly.costInDollars",
    +   defaultMessage: "USD $16.67/month",
    + },
    + plusYearlyCostSubtitle: {
    +   id: "pricingPlanConstants.plusYearly.costInDollarsSubtitle",
        defaultMessage: "USD $199.99/year",
      },
    - plusPricingYearlyDisclaimer: {
    -   id: "pricingPlanConstants.plus.plusPricingYearlyDisclaimer",
    -   defaultMessage: "* Price billed annually",
    - },
    ```
  - ```diff
    - disclaimer: eu.plusPricingYearlyDisclaimer,
    + costInDollarsSubtitle: eu.plusYearlyCostSubtitle,
    ```
  - ```diff
      ? (0, eA.jsx)(eS.Z, {
          id: "MemoriesModal.noMemories.1",
          defaultMessage:
    -       "As you chat with ChatGPT, the details and preferences it remembers will be shown here.",
    +       "As you chat with {name}, the details and preferences it remembers will be shown here.",
    +     values: {
    +       name:
    +         null !==
    +           (ea = null == eF ? void 0 : eF.name) &&
    +         void 0 !== ea
    +           ? ea
    +           : "ChatGPT",
    +     },
    ```
  - ```js
    eu =
      null !==
        (et =
          null === (en = (0, eZ.hz)()) || void 0 === en
            ? void 0
            : en.includes(eH.L0.Sunshine)) &&
      void 0 !== et &&
      et;
    ```
  - ```js
    title: ea.formatMessage(nL.deleteHistoryModalTitle),
    description:
      eu &&
      (0, eA.jsx)(eS.Z, {
        id: "settingsModal.deleteHistoryModalMemoryDisclaimer",
        defaultMessage:
          "To clear any memories from your chats, visit your <link>settings</link>.",
        values: {
          link: function (Y) {
            return (0, eA.jsx)(e4(), {
              onClick: function () {
                return ei();
              },
              href: "#settings/Personalization",
              shallow: !0,
              className: "underline",
              children: Y,
            });
          },
        },
    ```
  - ```diff
      locale: {
        id: "settingsModal.locale_alpha",
    -   defaultMessage: "Locale (Alpha)",
    +   defaultMessage: "Language (Alpha)",
      },
    ```
  - ```js
    (Y.DalleControls = "d3_controls");
    ```
  - ```js
    ed = {
      dev: "Dev",
      "de-DE": "Deutsch",
      "en-US": "English (US)",
      "es-ES": "Espa\xf1ol (Espa\xf1a)",
      "fr-FR": "Fran\xe7ais (France)",
      "it-IT": "Italiano",
      "ja-JP": "日本語",
      "ko-KR": "한국어",
      "pl-PL": "Polski",
      "pt-BR": "Portugu\xeas (Brasil)",
      "pt-PT": "Portugu\xeas (Portugal)",
      "ru-RU": "Русский",
      "zh-Hans": "简体中文",
      "zh-TW": "繁體中文（台灣）",
    },
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-4b251c6a7b09e430.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-bc9a420e8e08747c.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-255d6b55cbc34391.js
https://cdn.oaistatic.com/_next/static/83oSRqlSVypjfyIfupJ78/_buildManifest.js
https://cdn.oaistatic.com/_next/static/83oSRqlSVypjfyIfupJ78/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/admin-3eb3f50870298330.js
https://cdn.oaistatic.com/_next/static/chunks/pages/admin/identity-f7f6e23b9ed909cf.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/enable/internal-75f1a09ab48a63c5.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/error-8ea7903eb2fe12ae.js
https://cdn.oaistatic.com/_next/static/chunks/3754-ae5dc2fb759ecfc1.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/logout-7cb4d55a75b2ec20.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-459085e513ae2a9c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]/c/[convId]-252d29e38cf1ddb8.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-44b132ed09adeb86.js
https://cdn.oaistatic.com/_next/static/chunks/5054-b9cbf3196abce4c8.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor-aa68c5a869aaf2fc.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/editor/[slug]-6e6e5debc72cd8cd.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-8b5f326b497481a5.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-8e27de70951fc99c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/e/[[...shareParams]]-899e50f90dac9ff5.js
https://cdn.oaistatic.com/_next/static/chunks/pages/share/[[...shareParams]]-d56de3ae0710acd6.js
https://cdn.oaistatic.com/_next/static/chunks/pages/[[...default]]-bc9a420e8e08747c.js
```

### From `orig/_next/static/chunks/webpack-255d6b55cbc34391.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/9387.c51e4a59408e000e.js
https://cdn.oaistatic.com/_next/static/css/da25c2237a223c81.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.99d033c76681d21e.js
```

## 2024-01-25Z (`szrLZD3jp74fFKmcgupNh`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Some refinements around gizmo (Custom GPT) memory, reviews, etc
  - Some refinements around teams/account transfers/etc
- App release version (Git SHA?): `d260c67029ed76f6b3c9004f9a5d5cd79ebde39d`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/main.js`
  - ```diff
    - (t.crossOrigin = void 0),
    + (t.crossOrigin = "anonymous"),
    ```
- `unpacked/_next/static/chunks/webpack.js`
  - ```js
    0 === a.src.indexOf(window.location.origin + "/") ||
      (a.crossOrigin = "anonymous")),
    ```
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```js
    (en = Y.sent),
      eu && eu(),
      en.success
        ? (0, em.M)()
        : ((ei = (0, eA.M5)(
            eA.LT.ACCOUNT_TRANSFER_ERROR,
            "/",
            void 0
          )),
          eC.push(ei));
    ```
  - A fairly large chunk of code (it might be some diff churn/refactoring) related to gizmos (Custom GPTs)
    - ```js
      switch (Y.type) {
        case eh.qK.BROWSER:
          return { title: tL.browsing };
        case eh.qK.PYTHON:
          return { title: tL.dataAnalysis };
        case eh.qK.DALLE:
          return { title: tL.dalle, description: tL.memoryDescription };
        case eh.qK.MEMORY:
          return { title: tL.memory, description: tL.memoryDescription };
        default:
          return null;
      }
      ```
    - ```js
      children: (0, eP.jsx)(eM.Z, {
        id: "gizmo.about.capabilitiesHeader",
        defaultMessage: "Capabilities",
      }),
      ```
    - ```js

      var et = Y.vanityMetrics,
        en = (0, tv.sB)(tv.tz.GizmoReviews).value;
      if (null == et) return null;
      var ei =
        en && null != et.review_stats && et.review_stats.count > tO
          ? et.review_stats
          : void 0;
      ```
    - ```js
      children: (0, eP.jsx)(eM.Z, {
        id: "gizmo.about.numReviews",
        defaultMessage:
          "{numReviews, plural, one {# review} other {# reviews}}",
        values: { numReviews: ei.count },
      }),
      ```
    - ```js
      children: (0, eP.jsx)(eM.Z, {
        id: "gizmo.about.numConversations",
        defaultMessage: "conversations",
      }),
      ```
    - ```js
      children: (0, eP.jsx)(eM.Z, {
        id: "gizmo.about.ratingsHeader",
        defaultMessage: "Ratings",
      }),
      ```
    - ```js
      children: (0, eP.jsx)(eM.Z, {
        id: "gizmo.about.numReviews",
        defaultMessage:
          "{numReviews, plural, one {# review} other {# reviews}}",
        values: {
          numReviews:
            null !==
              (ei =
                null == en
                  ? void 0
                  : en.by_rating[Y]) && void 0 !== ei
              ? ei
              : 0,
        },
      }),
      ```
    - ```js
      children: (0, eP.jsx)(eM.Z, {
        id: "gizmo.about.notEnoughReviews",
        defaultMessage: "Not enough reviews yet",
      }),
      ```
    - ```js
      children: [
        (0, eP.jsx)(tE.r, { gizmo: en, isOwner: ed }),
        (0, eP.jsx)(tN, { vanityMetrics: en.gizmo.vanity_metrics }),
        (0, eP.jsx)(tI, { vanityMetrics: en.gizmo.vanity_metrics }),
        (0, eP.jsx)(tA, { tools: en.tools }),
      ],
      ```
    - ```js
      tR = function (Y) {
        var et = Y.gizmo;
        return (0, eE.EV)(eE.B.GPTDetails)
          ? (0, eP.jsx)(tD, { gizmo: et })
          : null;
      },
      tL = (0, eA.vU)({
        browsing: {
          id: "gizmo.about.tools.browsing",
          defaultMessage: "Browsing",
        },
        dataAnalysis: {
          id: "gizmo.about.tools.dataAnalysis",
          defaultMessage: "Data Analysis",
        },
        dalle: {
          id: "gizmo.about.tools.dalle",
          defaultMessage: "DALL\xb7E Images",
        },
        memory: { id: "gizmo.about.tools.memory", defaultMessage: "Memory" },
        memoryDescription: {
          id: "gizmo.about.tools.memoryDescription",
          defaultMessage:
            "Learns from previous chats to improve future conversations",
        },
      }),
      ```
  - ```js
    case ei.ACCOUNT_TRANSFER_ERROR:
      en(
        {
          id: "globalToasts.accountTransferError",
          defaultMessage:
            "Error transferring account. To retry, go to Settings → Merge.",
          description:
            "Error when unable to transfer their personal account to the workspace",
        },
        ei.ACCOUNT_TRANSFER_ERROR,
        5,
        "warning"
      );
      break;
    ```
  - ```js
    (Y.ACCOUNT_TRANSFER_ERROR = "account_transfer_error");
    ```
  - ```js
    "zh-CN": "zh-Hans",
    "zh-HK": "zh-TW",
    ```
  - ```js
    var eE = [
      "The node to be removed is not a child of this node",
      "The object can not be found here.",
    ];
    function eT(Y) {
      return eE.some(function (et) {
        var en;
        return null === (en = Y.message) || void 0 === en
          ? void 0
          : en.includes(et);
      });
    }
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/webpack-25d9ee953e4f2622.js
https://cdn.oaistatic.com/_next/static/chunks/main-6da2aad3a6c32aae.js
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-0000fe89ade26a2e.js
https://cdn.oaistatic.com/_next/static/szrLZD3jp74fFKmcgupNh/_buildManifest.js
https://cdn.oaistatic.com/_next/static/szrLZD3jp74fFKmcgupNh/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/5017-f7c5e142fc7f0516.js
```

### From `orig/_next/static/chunks/webpack-25d9ee953e4f2622.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/1fdacb4b6c8717e2.css
```

## 2024-01-25Z (`QmYgAUngWc_4uo62fFx_C`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Fairly minimal tweaks/changes by the looks of things
- App release version (Git SHA?): `495fb86f5d6bcd7c04c27ecad041bc31d3adea16`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-97d72adb36911655.js
https://cdn.oaistatic.com/_next/static/QmYgAUngWc_4uo62fFx_C/_buildManifest.js
https://cdn.oaistatic.com/_next/static/QmYgAUngWc_4uo62fFx_C/_ssgManifest.js
```

## 2024-01-25Z (`N5xlkLIlsItbOmqA7rcUO`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - GPT mentions: Ability to `@mention` custom GPTs to add them to a convo (potentially implies the ability to have multiple in a single chat?)
- App release version (Git SHA?): `82c5572d985c6633c736a6c183d1aa07df9d6c8a`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- Module IDs changed:
  - `99642` -> `4925`
  - `5813` -> `10318`
- `unpacked/_next/static/chunks/pages/_app.js`
  - LOTS of diff churn, so might be hard to see what actually changed...
  - A large'ish section of code related to `MentionGPTs`
    - ```js
      var en = (0, nI.qg)(nI.pm.MentionGPTs),
      ```
    - ```js
      title: en.formatMessage({
        id: "mentionGptsAnnouncement.title",
        defaultMessage: "GPT mentions",
      }),
      ```
    - ```js
      description: (0, tv.jsx)(eZ.Z, {
        id: "mentionGptsAnnouncement.description",
        defaultMessage:
          "Type {key} to mention a GPT and add it directly into your conversation",
        values: {
          key: (0, tv.jsx)("span", {
            className: "font-bold",
            children: "@",
          }),
        },
      }),
      ```
    - ```js
      (Y.MentionGPTs = "oai/apps/hasSeenMentionGPTs");
      ```
    - ```js
      (Y.mentionsDisplayNux = "Mentions Display Nux"),
      ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-d060e2c8388d0dab.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-5c7b55a216039928.js
https://cdn.oaistatic.com/_next/static/N5xlkLIlsItbOmqA7rcUO/_buildManifest.js
https://cdn.oaistatic.com/_next/static/N5xlkLIlsItbOmqA7rcUO/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-abaf3ad85e78e649.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-d58629dff7ddda37.js
https://cdn.oaistatic.com/_next/static/chunks/4648-7bb7c20713eddfd9.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-58edb4ce6dafc746.js
```

### From `orig/_next/static/chunks/webpack-5c7b55a216039928.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/513a3d4c2705610e.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.5fe85845cb6854d4.js
```

## 2024-01-25Z (`Ciy2lLIu2TbOaLBCgfGi1`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Mostly seems to be minor tweaks/refactoring/similar
- App release version (Git SHA?): `b434a7fce6bfc72bddd32a5b55c19d76a249085e`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/3754.js`
  - ```js
    g = e.statsigShowCapacityGate,
    ```
- `unpacked/_next/static/chunks/4648.js`
  - There are some large'ish chunks of diff churn related to `GizmoMagicCreate`, it might have been refactored/similar
    - ```js
        var c = null !== (t = e.name) && void 0 !== t ? t : "",
          u = null !== (n = e.description) && void 0 !== n ? n : "",
          d = null !== (r = e.instructions) && void 0 !== r ? r : "",
          p = Array.from(a).join(","),
          m = null !== (i = e.welcomeMessage) && void 0 !== i ? i : "",
          f = null != e.profilePictureUrl;
        return "" === c && "" === u && "" === d && "" === m
          ? "The GPT you are about to has the following abilities: ".concat(
              p,
              "."
            )
          : "This is the GPT's current set of fields:\n\nname: "
              .concat(c, "\n\ndescription: ")
              .concat(u, "\n\ncontext: ")
              .concat(d, "\n\nabilities: ")
              .concat(p, "\n\nwelcome_message: ")
              .concat(m, "\n\n")
              .concat(
                f
                  ? "The GPT has a profile picture."
                  : "This GPT does not have a profile picture. You must generate a profile picture when you next update your behavior.",
                "\n"
              );
      })(P.current),
      model_slug: "unused",
      enabled_tools: [
        { tool_id: null != b ? "gizmo_editor" : "gizmo_creator" },
      ],
      ```
    - ```js
      return e
        ? 'Hi! I\'ll help you build a new GPT. You can say something like, "make a creative who helps generate visuals for new products" or "make a software engineer who helps format my code."\n\nWhat would you like to make?'
        : n
          ? "Welcome back! Is there anything ".concat(
              t.name,
              " should be doing better? Anything you'd like to change?"
            )
          : "You're back! Let's continue where we left off...";
      ```
- `unpacked/_next/static/chunks/pages/_app.js`
  - Removed an `svg` image of a person's head/shoulders
  - Added an `svg` image of what looks like a smaller person's head/shoulders, with a horizontal line above their head; all contained within a rounded box/card.
  - ```js
    eN =
      null == eO
        ? void 0
        : eO.accountItems.some(function (Y) {
            return Y.isPersonalAccount();
          }),
    ```
  - ```diff
    - ei = (0, eg.ec)(eg.F_.workspaceId),
    - ea = (0, eg.ec)(eg.F_.isEnterprisePlan),
    + ea = (0, ef.w)(null == eo ? void 0 : eo.getWorkspaceId()),
    + eu =
    +   null !== (Y = null == eo ? void 0 : eo.isEnterprise()) &&
    +   void 0 !== Y &&
    +   Y,
    ```
  - ```js
    {
      key: "getWorkspaceId",
      value: function () {
        return this.isWorkspaceAccount() ? this.id : void 0;
      },
    },
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-ffad4e2e4c61f798.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-8d9390b1dd30897f.js
https://cdn.oaistatic.com/_next/static/Ciy2lLIu2TbOaLBCgfGi1/_buildManifest.js
https://cdn.oaistatic.com/_next/static/Ciy2lLIu2TbOaLBCgfGi1/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/3754-94f297953fed6882.js
https://cdn.oaistatic.com/_next/static/chunks/4648-eff8917c0768da11.js
```

## 2024-01-24Z (`IT6Bs6aT0lMIT2GMD2zGo`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Some minor tweaks to gizmo (Custom GPT) ratings, and ChatGPT 'memory'
- App release version (Git SHA?): `4a2bcf5c657b9cb02486dbb23764f222bd8a648b`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- Module IDs changed:
  - `20225` -> `29887`
  - `1890` -> `12374`
  - `94426` -> `90393`
  - `28172` -> `45283`
  - `94146` -> `15856`
  - `55756` -> `25180`
  - `79862` -> `2222`
  - `7392` -> `40143`
  - `21559` -> `58936`
  - `94146` -> `15856`
  - `44114` -> `81639`
  - `57934` -> `25087`
  - `41176` -> `27637`
  - `65523` -> `41991`
  - `75745` -> `51373`
  - `72904` -> `81089`
  - `19108` -> `3220`
  - etc... (there seem to be MANY of these changes in this build)
- `unpacked/_next/static/chunks/4648.js`
  - ```diff
    - "Alternatively you may appeal this decision and we will get back to you in a few days. Or you can publish to “Only me” and use this GPT privately.",
    + "Alternatively you may appeal this decision and we will get back to you as soon as possible. Or you can publish to “Only me” and use this GPT privately.",
    ```
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```js
    eb &&
      (null === (en = eo.gizmo.vanity_metrics) || void 0 === en
        ? void 0
        : en.review_stats) != null &&
      (null === (ei = eo.gizmo.vanity_metrics) || void 0 === ei
        ? void 0
        : ei.review_stats.count) > 0 &&
    ```
  - ```diff
    - en.gizmo.rating.average_rating,
    + (
    +   eo.gizmo.vanity_metrics.review_stats.total /
    +   eo.gizmo.vanity_metrics.review_stats.count
    + ).toFixed(1),
    ```
  - ```js
    (0, eA.jsx)("div", {
      children: (0, eA.jsx)(
        eS.Z,
        eN({}, eL.googleDriveDesc)
    ```
  - ```diff
      toggleLabel: {
    -   id: "settingsModal.myChagtGptToggleLabel.1",
    -   defaultMessage: "Improve responses with your chats",
    +   id: "settingsModal.myChagtGptToggleLabel.2",
    +   defaultMessage: "Memory",
      },
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-e485235c03419359.js
https://cdn.oaistatic.com/_next/static/IT6Bs6aT0lMIT2GMD2zGo/_buildManifest.js
https://cdn.oaistatic.com/_next/static/IT6Bs6aT0lMIT2GMD2zGo/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/ext_callback-75fcc605a8c00f89.js
https://cdn.oaistatic.com/_next/static/chunks/3754-abb5fa69a16fc07f.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/logout-d0da5c26107ed0b9.js
https://cdn.oaistatic.com/_next/static/chunks/pages/auth/mocked_login-e3f3990046158829.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-e18de67bc28b9f7f.js
https://cdn.oaistatic.com/_next/static/chunks/4648-cd4449b1cb4e9b5d.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-9666f73de441f515.js
https://cdn.oaistatic.com/_next/static/chunks/pages/invite/[[...referralCodeParam]]-8a707a74a1020183.js
```

## 2024-01-24Z (`sfv3TRBfIvsEV2B4_cMOk`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Users will be able to leave ratings/reviews on gizmos (Custom GPTs) soon (feature flag: `gizmo_reviews`(?))
    - Including new API endpoints (`/gizmo_reviews/`) for supporting this (see `getUserReview`, `upsertUserReview` for specifics)
  - New settings to `alwaysExpandCodeOutput`
  - `isDraft` removed, and `categories` added
  - Maybe something about `ParallelBrowsing` / `ParallelBrowsingTools` / `RetrievalBrowsing`
  - Something that checks `isOrWasPaidCustomer`
  - **Twitter thread:** https://twitter.com/_devalias/status/1750270012542317022
- App release version (Git SHA?): `294820fa3d5b4822081d3d14d42de9e1fa08f12d`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- Module IDs changed:
  - `36638` -> `81853`
  - `13973` -> `33460`
  - ?etc?
- `unpacked/_next/static/chunks/4648.js`
  - ```diff
    + i = e.categories,
      o = e.moderationType,
      a = e.violationType,
    - a = e.isDraft,
    ```
  - ```diff
      (0, R.jsx)(V, {
        gizmoId: t.gizmoId,
        sharingRecipient: t.sharingRecipient,
    +   categories: t.categories,
        moderationType: t.moderationType,
        violationType: t.violationType,
    -   isDraft: t.isDraft,
        appealAvailable: i,
    ```
  - ```js
    profilePictureId: null !== (n = e.gizmo.display.profile_pic_id) && void 0 !== n
    ```
  - ```diff
    - z.profilePictureUrl != M.gizmo.display.profile_picture_url)
    + z.profilePictureUrl != M.gizmo.display.profile_picture_url ||
    + z.profilePictureId != M.gizmo.display.profile_pic_id)
    ```
  - ```js
    categories: e.gizmo.categories,
    ```
  - ```js
    categories: null == n ? void 0 : [n],
    ```
- `unpacked/_next/static/chunks/pages/_app.js`
  - A `.svg` image of a star was added
  - ```js
    (Y.ShowExpandedCodeView = "show_expanded_code_view");
    ```
  - ```diff
    -   (null == ep ? void 0 : ep.type) === eT.ParallelBrowsing
    -     ? ep.messages.push(ei)
    -     : et.push({ type: eT.ParallelBrowsing, messages: [ei] });
    - } else if (eo === e7.Cs.Plugin || eo === e7.Cs.PluginTool) {
    +   (null == ep ? void 0 : ep.type) === eT.RetrievalBrowsing
    +     ? ep.messages.push(eo)
    +     : et.push({ type: eT.RetrievalBrowsing, messages: [eo] });
    + } else if (
    +   ea === e7.Cs.ParallelBrowsing ||
    +   ea === e7.Cs.ParallelBrowsingTool
    + ) {
    ```
  - ```js
    case "noTestGizmoId":
      return [r$.noTestGizmoId, !0];
    ```
  - ```js
    noTestGizmoId: {
      id: "PromptTextarea.noTestGizmoId",
      defaultMessage: "Start by defining your GPT.",
    },
    ```
  - ```js
    var Y,
      en = e$.iN.getConversationMode(et);
    return (null == en ? void 0 : en.kind) === eV.OL.GizmoTest &&
      null == en.gizmo_id
      ? "noTestGizmoId"
      : null;
    ```
  - A largish section of new code related to gizmo (Custom GPTs) reviews:
    - ```js
      switch ((et.prev = et.next)) {
        case 0:
          return (
            (ei = en.rating),
            (eo = en.message),
            (ea = en.includeFrom),
            (et.next = 3),
            eb.U.upsertUserReview(Y, ei, eo, ea)
          );
      ```
    - ```js
      case 0:
        eH.E.invalidateQueries({
          queryKey: ["gizmo", "review", { gizmoId: Y }],
        });
      ```
    - ```js
      case 0:
        return et.abrupt("return", eb.U.getUserReview(Y));
      ```
    - ```js
      queryKey: ["gizmo", "review", { gizmoId: Y }],
      ```
    - ```js
      var et = Y.gizmo;
      return (0, eC.EV)(eC.B.GPTReview)
        ? (0, eA.jsx)(tM, { gizmo: et })
        : null;
      ```
    - ```js
      case 0:
        if (null != eI) {
          Y.next = 3;
          break;
        }
        return (
          ew.m.warning("Please select a rating"),
          Y.abrupt("return")
        );
      ```
    - ```js
      tA = (0, eM.vU)({
        title: {
          id: "GizmoReviewModal.title",
          defaultMessage: "Leave Feedback",
        },
        subtitle: {
          id: "GizmoReviewModal.subtitle",
          defaultMessage: "How well did this GPT meet your expectations?",
        },
        subtitleChange: {
          id: "GizmoReviewModal.subtitleChange",
          defaultMessage: "Would you like to change your rating?",
        },
        subtitleTooltip: {
          id: "GizmoReviewModal.subtitleTooltip",
          defaultMessage:
            "This will help the builder improve the quality of GPTs in the future.",
        },
        messagePlaceholder: {
          id: "GizmoReviewModal.messagePlaceholder",
          defaultMessage: "Add an optional private email to the creator",
        },
        submit: { id: "GizmoReviewModal.submit", defaultMessage: "Submit" },
        successToast: {
          id: "GizmoReviewModal.successToast",
          defaultMessage: "Review sent",
        },
        includeFrom: {
          id: "GizmoReviewModal.includeFrom",
          defaultMessage: "Include my email address {email}",
        },
      }),
      ```
  - ```js
    eD = (0, tg.sB)(tg.tz.GizmoReviews) && !eP,
    ```
  - ```js
    eD &&
      (0, eA.jsxs)(e7.UA, {
        onClick: function () {
          return eC.vm.openModal(eC.B.GPTReview);
        },
        children: [
          (0, eA.jsx)(e_.EQ9, { className: "icon-md" }),
          (0, eA.jsx)(eO.Z, tF({}, tW.feedbackEmail)),
        ],
      }),
    ```
  - ```js
    eg = (0, ta.hz)(),
    ey =
      (null == eg ? void 0 : eg.includes(tu.L0.GizmoReviews)) &&
      null != en.gizmo.rating &&
      en.gizmo.rating.num_ratings > 0;
    ```
  - ```js
    children: [
      (0, eA.jsx)(tw.r, { gizmo: en, isOwner: eh }),
      ey &&
        null != en.gizmo.rating &&
        (0, eA.jsxs)("div", {
          className: "flex flex-col items-center gap-2",
          children: [
            (0, eA.jsxs)("div", {
              className:
                "flex flex-row items-center gap-1.5 pt-1 text-xl font-medium",
              children: [
                (0, eA.jsx)(eF.p$, { className: "icon-sm" }),
                en.gizmo.rating.average_rating,
              ],
            }),
            (0, eA.jsx)("div", {
              className: "text-xs text-token-text-tertiary",
              children: (0, eA.jsx)(
                eO.Z,
                tF(
                  tF({}, tW.numReviews),
                  {},
                  {
                    values: {
                      numReviews: en.gizmo.rating.num_ratings,
                    },
                  }
                )
              ),
            }),
          ],
        }),
    ],
    ```
  - ```js
    numReviews: {
      defaultMessage:
        "{numReviews, plural, one {# review} other {# reviews}}",
      id: "GizmoInformation.numReviews",
    },
    ```
  - ```diff
    - { reason: en, share_recipient: ei, draft: eo }
    + {
    +   reason: en,
    +   share_recipient: ei,
    +   categories: eo,
    + }
    ```
  - ```js
    {
      key: "getUserReview",
      value: (function () {
        var Y = (0, eo.Z)(
          ed().mark(function Y(et) {
            return ed().wrap(function (Y) {
              for (;;)
                switch ((Y.prev = Y.next)) {
                  case 0:
                    return Y.abrupt(
                      "return",
                      ef.ZP.get(
                        "".concat(ef.B, "/gizmo_reviews/").concat(et)
                      )
                    );
    ```
  - ```js
    {
      key: "upsertUserReview",
      value: (function () {
        var Y = (0, eo.Z)(
          ed().mark(function Y(et, en, ei, eo) {
            return ed().wrap(function (Y) {
              for (;;)
                switch ((Y.prev = Y.next)) {
                  case 0:
                    return Y.abrupt(
                      "return",
                      ef.ZP.post(
                        "".concat(ef.B, "/gizmo_reviews/").concat(et),
                        { rating: en, message: ei, include_from: eo }
                      )
                    );
    ```
  - ```js
    ec = (0, ef.Gl)(eo.sh.ShowExpandedCodeView).data,
    ```
  - ```js
    (!!ei.isOrWasPaidCustomer() ||
      !!ep ||
      ec.m9.getLayerValue({
        layerName: ec.Hk.CHATGPT_SUBSCRIPTIONS,
        key: "is_team_enabled",
        defaultValue: !0,
      }))
    ```
  - ```js
    "data-testid": "".concat(et, "-pricing-modal-column"),
    ```
  - ```js
    { id: "memoryDeleteFailed" }
    ```
  - ```js
    { gizmoId: eg, memory: Y },
    ```
  - ```js
    (0, eM.jsx)(nM, {
      children: (0, eM.jsx)(nk, {
        label: et.formatMessage(nN.alwaysExpandCodeOutput),
        enabled: tP,
        isLoading: tM,
        onChange: function (Y) {
          tI.mutate({
            setting: ed.sh.ShowExpandedCodeView,
            value: Y,
          }),
            tN(Y);
        },
      }),
    }),
    ```
  - ```js
    alwaysExpandCodeOutput: {
      id: "settingsModal.alwaysExpandCodeOutput",
      defaultMessage: "Always expand code output",
    },
    ```
  - ```js
    {
      key: "isOrWasPaidCustomer",
      value: function () {
        return (
          this.data.subscriptionStatus.hasPaidSubscription ||
          this.data.subscriptionStatus.wasPaidCustomer
        );
      },
    },
    ```
  - ```js
    (Y.GizmoReviews = "gizmo_reviews");
    ```
  - ```js
    (Y.GPTReview = "gpt-review"),
    ```
  - ```js
    (Y.GizmoReviews = "chatgpt-gizmo-reviews"),
    ```
  - ```js
    Y.CHATGPT_SUBSCRIPTIONS = "chatgpt_subscriptions";
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-e3758382a3f71256.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-8fa26b17ac182069.js
https://cdn.oaistatic.com/_next/static/sfv3TRBfIvsEV2B4_cMOk/_buildManifest.js
https://cdn.oaistatic.com/_next/static/sfv3TRBfIvsEV2B4_cMOk/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/g/[gizmoId]-7d4ce1daa5c8048c.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts-5b6d1d348212e230.js
https://cdn.oaistatic.com/_next/static/chunks/4648-49185e0fa2d0cc0a.js
https://cdn.oaistatic.com/_next/static/chunks/pages/gpts/mine-4b9468329355752d.js
```

### From `orig/_next/static/chunks/webpack-8fa26b17ac182069.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/c49ea65a5ee37ea1.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.34f001d55c7fce16.js
```

## 2024-01-23Z (`Nhh-QuOgEGFphEueL7xal`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- App release version (Git SHA?): `9cbc7ed56e8dd631cc287e5b298556ce3460d090`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`
- `unpacked/_next/static/chunks/4648.js`
  - ```js
    (0, Q.ax)(l, { kind: ep.OL.GizmoTest, gizmo_id: i.id }),
    ```
  - ```js
    (0, Q.ax)(r, {
      kind: ep.OL.GizmoMagicCreate,
      gizmo_id: t.id,
      behavior_overrides: a,
    }),
      (0, L.useEffect)(
        function () {
          Q.tQ.updateConversationMode(r, {
            kind: ep.OL.GizmoMagicCreate,
            gizmo_id: t.id,
            behavior_overrides: a,
          });
        },
        [r, t.id, a]
      );
    ```
  - ```diff
    - (X.tQ.getOrInitThread(_),
    + (Q.tQ.initThread(_, {
    +   kind: ep.OL.GizmoMagicCreate,
    +   gizmo_id: void 0,
    +   behavior_overrides: K,
    + }),
    ```
  - ```diff
    - [g]
    + [null == g ? void 0 : g.gizmo.id]
    ```
  - ```js
    onAppealSubmitted: function () {
      return ec(nx(nx({}, el), {}, { showModal: p.AppealSent }));
    },
    ```
- `unpacked/_next/static/chunks/pages/_app.js`
  - ```js
    rs = en(11591),
    ```
  - ```diff
    - (0, eS.ax)(et);
    + (0, eS.ax)(et, { kind: rs.OL.PrimaryAssistant });
    ```
  - ```js
    (0, em.ax)(
      et,
      eU
        ? { kind: eh.OL.GizmoInteraction, gizmo_id: eU }
        : { kind: eh.OL.PrimaryAssistant }
    );
    ```
  - ```diff
    - completionMetadata: { conversationMode: ek },
    + completionMetadata: {
    +   conversationMode: e9.iN.getConversationMode(en),
    + },
    ```
  - ```js
    (0, eF.useEffect)(function () {
      eO.A.logEvent(eM.M.mentionsOpened);
    }, []);
    var em = function (Y) {
      eO.A.logEvent(eM.M.mentionsClickGizmo, {
        gizmo_id: "create" === Y ? "create" : Y.gizmo.id,
      }),
        "create" !== Y && et(Y);
    };
    ```
  - ```diff
    - eL = "magic" === eN ? "var(--brand-purple)" : eR,
    + eL =
    +   (null == eN ? void 0 : eN.kind) === ey.OL.GizmoMagicCreate
    +     ? "var(--brand-purple)"
    +     : eR,
    ```
  - ```diff
      onSettled: function (et) {
        Y.invalidateQueries({ queryKey: ["gizmos"], refetchType: "all" }),
    +     Y.invalidateQueries({
    +       queryKey: ["gizmos", "pinned"],
    +       refetchType: "none",
    +     }),
          et && Y.setQueryData(eJ(et.gizmo.id, !1).queryKey, et);
      },
    ```
  - ```js
    if (et.startsWith("gpt-4")) return eP[eu.GPT4].avatarColor;
    ```
  - ```js
    getGizmoId: function (Y) {
      var et =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : eQ(),
        en = et.threads[eJ.resolveThreadId(Y, et)];
      if (
        (null == en ? void 0 : en.mode.kind) === eo.OL.GizmoInteraction ||
        (null == en ? void 0 : en.mode.kind) === eo.OL.GizmoTest
      )
        return en.mode.gizmo_id;
    },
    ```
  - ```js
    updateConversationMode: function (Y, et) {
      var en = e0.resolveThreadId(Y);
      eX(function (Y) {
        Y.threads[en].mode = et;
      });
    },
    ```
  - ```diff
      Y.threads[ey] = {
        initialThreadData: ew,
    -   settings: {
    -     gizmoId: et.gizmo_id,
    -     pluginIds: et.plugin_ids,
    -   },
    +   mode:
    +     null != et.gizmo_id
    +       ? {
    +           kind: eo.OL.GizmoInteraction,
    +           gizmo_id: et.gizmo_id,
    +         }
    +       : {
    +           kind: eo.OL.PrimaryAssistant,
    +           plugin_ids: et.plugin_ids,
    +         },
        sharedConversationMetadata: eS,
        title: ew.title,
    ```
  - ```diff
      updateInitialThreadDataForNewThread: function (Y, et, en) {
        var ei = e0.resolveThreadId(Y);
        eX(function (Y) {
    +     var ea = Y.threads[ei];
    -     (Y.threads[ei].initialThreadData.lastModelUsed = et),
    -       (Y.threads[ei].settings.pluginIds = en);
    +     (ea.initialThreadData.lastModelUsed = et),
    +       en &&
    +         en.length > 0 &&
    +         (ea.mode.kind !== eo.OL.PrimaryAssistant &&
    +           console.error(
    +             "Unexpected conversation mode with plugins: ".concat(
    +               ea.mode.kind,
    +               "}"
    +             )
    +           ),
    +         (ea.mode = { kind: eo.OL.PrimaryAssistant, plugin_ids: en }));
        });
    ```
  - ```js
    eS.m9.getExperimentValue({
      experimentName: eS.H6.RetrievalSearchModel,
      key: eS.Hy.TREATMENT,
      defaultValue: "ba",
    })))
    ```
  - ```js
    (Y.mentionsOpened = "Mentions Opened"),
    (Y.mentionsClickGizmo = "Mentions Click Gizmo"),
    ```
  - ```diff
    - var pP = ["Fetch is aborted"];
    + var pP = [
    +   "Fetch is aborted",
    +   "Load failed",
    +   "Script error.",
    +   "Failed to execute 'insertBefore' on 'Node'",
    +   "ResizeObserver loop completed with undelivered notifications.",
    + ];
    ```

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-c761bb0350b47ce2.js
https://cdn.oaistatic.com/_next/static/chunks/webpack-b60d5c5cfa5fece3.js
https://cdn.oaistatic.com/_next/static/Nhh-QuOgEGFphEueL7xal/_buildManifest.js
https://cdn.oaistatic.com/_next/static/Nhh-QuOgEGFphEueL7xal/_ssgManifest.js
```

### From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/4648-e8bf624eabfd5571.js
```

### From `orig/_next/static/chunks/webpack-b60d5c5cfa5fece3.js`

#### Archived

```
https://cdn.oaistatic.com/_next/static/css/43ee066262cbb202.css
```

#### Missing

```
https://cdn.oaistatic.com/_next/static/chunks/sso.869d521e6227e07b.js
```

## 2024-01-23Z (`wbIK0kqRaZ7Chlr6S7vCn`)

### Notes

The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the `unpacked/` folder:

- **tl;dr**
  - Not actually sure what changed here... as best I can tell, the changes look like practically a NOOP?
- App release version (Git SHA?): `18f65fab42d45e354df3e54cb3e95093cee85c58`
  - Extracted with `grep -C 3 'service: "chatgpt-web",' unpacked/_next/static/chunks/pages/_app.js`

### Not From Build Manifest

#### Archived

```
https://cdn.oaistatic.com/_next/static/chunks/pages/_app-f50ca2e55bc60c48.js
https://cdn.oaistatic.com/_next/static/wbIK0kqRaZ7Chlr6S7vCn/_buildManifest.js
https://cdn.oaistatic.com/_next/static/wbIK0kqRaZ7Chlr6S7vCn/_ssgManifest.js
```

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
