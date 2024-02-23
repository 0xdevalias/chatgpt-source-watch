"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9473],
  {
    40896: function (i, t, e) {
      e.d(t, {
        HV: function () {
          return N;
        },
        N8: function () {
          return S;
        },
        aP: function () {
          return m;
        },
        do: function () {
          return R;
        },
        fN: function () {
          return b;
        },
        jz: function () {
          return F;
        },
        lM: function () {
          return y;
        },
        mh: function () {
          return v;
        },
        nx: function () {
          return w;
        },
        wg: function () {
          return A;
        },
        x1: function () {
          return C;
        },
      });
      var n = e(99444),
        s = e(99975),
        r = e(65119),
        a = e(12776),
        l = e(99549),
        h = e(89448),
        o = e(61475),
        d = e(71544),
        u = e(76203),
        p = e(32473),
        c = e(59634),
        g = e(78690),
        f = e(9914); /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Use of this source code is governed by an MIT-style
       * license that can be found in the LICENSE file or at
       * https://opensource.org/licenses/MIT.
       * =============================================================================
       */
      function m(i, t) {
        return (0, n.lub)(() =>
          ((0, l.cj)(t), "channelsFirst" === t) ? n.p4s(i, [0, 2, 3, 1]) : i
        );
      }
      function b(i, t) {
        return (0, n.lub)(() =>
          ((0, l.cj)(t), "channelsFirst" === t) ? n.p4s(i, [0, 2, 3, 4, 1]) : i
        );
      }
      function k(i, t, e, s = [1, 1], a = "valid", h, o, u = null) {
        return (0, n.lub)(() => {
          if (
            (null == h && (h = (0, r.rf)()),
            (0, l.cj)(h),
            3 !== i.rank && 4 !== i.rank)
          )
            throw new d.nu(
              `conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${i.rank}.`
            );
          if (3 !== t.rank && 4 !== t.rank)
            throw new d.nu(
              `conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${i.rank}.`
            );
          let p = m(i, h);
          if ("causal" === a)
            throw new d.nj(
              "The support for CAUSAL padding mode in conv1dWithBias is not implemented yet."
            );
          return (
            (p = n.imm.conv2d({
              x: p,
              filter: t,
              strides: s,
              pad: "same" === a ? "same" : "valid",
              dilations: o,
              dataFormat: "NHWC",
              bias: e,
              activation: u,
            })),
            "channelsFirst" === h && (p = n.p4s(p, [0, 3, 1, 2])),
            p
          );
        });
      }
      class w extends o.mh {
        constructor(i, t) {
          if (
            (super(t),
            (this.bias = null),
            (this.DEFAULT_KERNEL_INITIALIZER = "glorotNormal"),
            (this.DEFAULT_BIAS_INITIALIZER = "zeros"),
            w.verifyArgs(t),
            (this.rank = i),
            g.iQ(this.rank, "rank"),
            1 !== this.rank && 2 !== this.rank && 3 !== this.rank)
          )
            throw new d.nj(
              `Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`
            );
          if (
            ((this.kernelSize = (0, c.AF)(t.kernelSize, i, "kernelSize")),
            (this.strides = (0, c.AF)(
              null == t.strides ? 1 : t.strides,
              i,
              "strides"
            )),
            (this.padding = null == t.padding ? "valid" : t.padding),
            (0, l.zb)(this.padding),
            (this.dataFormat =
              null == t.dataFormat ? "channelsLast" : t.dataFormat),
            (0, l.cj)(this.dataFormat),
            (this.activation = (0, s.aI)(t.activation)),
            (this.useBias = null == t.useBias || t.useBias),
            (this.biasInitializer = (0, u.L5)(
              t.biasInitializer || this.DEFAULT_BIAS_INITIALIZER
            )),
            (this.biasConstraint = (0, h.Ad)(t.biasConstraint)),
            (this.biasRegularizer = (0, p.EC)(t.biasRegularizer)),
            (this.activityRegularizer = (0, p.EC)(t.activityRegularizer)),
            (this.dilationRate = (0, c.AF)(
              null == t.dilationRate ? 1 : t.dilationRate,
              i,
              "dilationRate"
            )),
            1 === this.rank &&
              Array.isArray(this.dilationRate) &&
              1 !== this.dilationRate.length)
          )
            throw new d.nu(
              `dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(
                this.dilationRate
              )}`
            );
          if (2 === this.rank) {
            if ("number" == typeof this.dilationRate)
              this.dilationRate = [this.dilationRate, this.dilationRate];
            else if (2 !== this.dilationRate.length)
              throw new d.nu(
                `dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(
                  this.dilationRate
                )}`
              );
          } else if (3 === this.rank) {
            if ("number" == typeof this.dilationRate)
              this.dilationRate = [
                this.dilationRate,
                this.dilationRate,
                this.dilationRate,
              ];
            else if (3 !== this.dilationRate.length)
              throw new d.nu(
                `dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(
                  this.dilationRate
                )}`
              );
          }
        }
        static verifyArgs(i) {
          if (
            (g.hu("kernelSize" in i, "required key 'kernelSize' not in config"),
            "number" != typeof i.kernelSize &&
              !g.Mx(i.kernelSize, "number", 1, 3))
          )
            throw new d.nu(
              `BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(
                i.kernelSize
              )}.`
            );
        }
        getConfig() {
          let i = {
            kernelSize: this.kernelSize,
            strides: this.strides,
            padding: this.padding,
            dataFormat: this.dataFormat,
            dilationRate: this.dilationRate,
            activation: (0, s.GD)(this.activation),
            useBias: this.useBias,
            biasInitializer: (0, u.Cx)(this.biasInitializer),
            biasRegularizer: (0, p.SG)(this.biasRegularizer),
            activityRegularizer: (0, p.SG)(this.activityRegularizer),
            biasConstraint: (0, h.xF)(this.biasConstraint),
          };
          return Object.assign(i, super.getConfig()), i;
        }
      }
      class z extends w {
        constructor(i, t) {
          super(i, t),
            (this.kernel = null),
            z.verifyArgs(t),
            (this.filters = t.filters),
            g.iQ(this.filters, "filters"),
            (this.kernelInitializer = (0, u.L5)(
              t.kernelInitializer || this.DEFAULT_KERNEL_INITIALIZER
            )),
            (this.kernelConstraint = (0, h.Ad)(t.kernelConstraint)),
            (this.kernelRegularizer = (0, p.EC)(t.kernelRegularizer));
        }
        build(i) {
          i = (0, f.Wf)(i);
          let t = "channelsFirst" === this.dataFormat ? 1 : i.length - 1;
          if (null == i[t])
            throw new d.nu(
              `The channel dimension of the input should be defined. Found ${i[t]}`
            );
          let e = i[t],
            n = this.kernelSize.concat([e, this.filters]);
          (this.kernel = this.addWeight(
            "kernel",
            n,
            null,
            this.kernelInitializer,
            this.kernelRegularizer,
            !0,
            this.kernelConstraint
          )),
            this.useBias &&
              (this.bias = this.addWeight(
                "bias",
                [this.filters],
                null,
                this.biasInitializer,
                this.biasRegularizer,
                !0,
                this.biasConstraint
              )),
            (this.inputSpec = [{ ndim: this.rank + 2, axes: { [t]: e } }]),
            (this.built = !0);
        }
        call(i, t) {
          return (0, n.lub)(() => {
            let t;
            i = (0, f.nQ)(i);
            let e = null == this.bias ? null : this.bias.read(),
              s = g.WT(this.activation.getClassName());
            if (null != s && 2 === this.rank)
              t = k(
                i,
                this.kernel.read(),
                e,
                this.strides,
                this.padding,
                this.dataFormat,
                this.dilationRate,
                s
              );
            else {
              if (1 === this.rank)
                t = (function (i, t, e, s = 1, h = "valid", o, u = 1) {
                  return (0, n.lub)(() => {
                    if (
                      (null == o && (o = (0, r.rf)()),
                      (0, l.cj)(o),
                      3 !== i.shape.length)
                    )
                      throw new d.nu(
                        `The input of a conv1dWithBias operation should be 3, but is ${i.shape.length} instead.`
                      );
                    if (3 !== t.shape.length)
                      throw new d.nu(
                        `The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`
                      );
                    if (null != e && 1 !== e.shape.length)
                      throw new d.nu(
                        `The bias for a conv1dWithBias operation should be 1, but is ${t.shape.length} instead`
                      );
                    if (
                      ("channelsFirst" === o && (i = n.p4s(i, [0, 2, 1])),
                      "causal" === h)
                    )
                      throw new d.nj(
                        "The support for CAUSAL padding mode in conv1dWithBias is not implemented yet."
                      );
                    let p = n.PAt(
                      i,
                      t,
                      s,
                      "same" === h ? "same" : "valid",
                      "NWC",
                      u
                    );
                    return null != e && (p = a.a2(p, e)), p;
                  });
                })(
                  i,
                  this.kernel.read(),
                  e,
                  this.strides[0],
                  this.padding,
                  this.dataFormat,
                  this.dilationRate[0]
                );
              else if (2 === this.rank)
                t = k(
                  i,
                  this.kernel.read(),
                  e,
                  this.strides,
                  this.padding,
                  this.dataFormat,
                  this.dilationRate
                );
              else if (3 === this.rank)
                t = (function (i, t, e, s = [1, 1, 1], h = "valid", o, u) {
                  return (0, n.lub)(() => {
                    if (
                      (null == o && (o = (0, r.rf)()),
                      (0, l.cj)(o),
                      4 !== i.rank && 5 !== i.rank)
                    )
                      throw new d.nu(
                        `conv3dWithBias expects input to be of rank 4 or 5, but received ${i.rank}.`
                      );
                    if (4 !== t.rank && 5 !== t.rank)
                      throw new d.nu(
                        `conv3dWithBias expects kernel to be of rank 4 or 5, but received ${i.rank}.`
                      );
                    let p = b(i, o);
                    if ("causal" === h)
                      throw new d.nj(
                        "The support for CAUSAL padding mode in conv3dWithBias is not implemented yet."
                      );
                    return (
                      (p = n.pdZ(
                        p,
                        t,
                        s,
                        "same" === h ? "same" : "valid",
                        "NDHWC",
                        u
                      )),
                      null != e && (p = a.a2(p, e)),
                      "channelsFirst" === o && (p = n.p4s(p, [0, 4, 1, 2, 3])),
                      p
                    );
                  });
                })(
                  i,
                  this.kernel.read(),
                  e,
                  this.strides,
                  this.padding,
                  this.dataFormat,
                  this.dilationRate
                );
              else
                throw new d.nj(
                  "convolutions greater than 3D are not implemented yet."
                );
              null != this.activation && (t = this.activation.apply(t));
            }
            return t;
          });
        }
        computeOutputShape(i) {
          i = (0, f.Wf)(i);
          let t = [],
            e =
              "channelsLast" === this.dataFormat
                ? i.slice(1, i.length - 1)
                : i.slice(2);
          for (let i = 0; i < e.length; ++i) {
            let n = (0, c.kt)(
              e[i],
              this.kernelSize[i],
              this.padding,
              this.strides[i],
              "number" == typeof this.dilationRate
                ? this.dilationRate
                : this.dilationRate[i]
            );
            t.push(n);
          }
          let n = [i[0]];
          return (
            "channelsLast" === this.dataFormat
              ? (n = n.concat(t)).push(this.filters)
              : (n.push(this.filters), (n = n.concat(t))),
            n
          );
        }
        getConfig() {
          let i = {
            filters: this.filters,
            kernelInitializer: (0, u.Cx)(this.kernelInitializer),
            kernelRegularizer: (0, p.SG)(this.kernelRegularizer),
            kernelConstraint: (0, h.xF)(this.kernelConstraint),
          };
          return Object.assign(i, super.getConfig()), i;
        }
        static verifyArgs(i) {
          if (
            !("filters" in i) ||
            "number" != typeof i.filters ||
            i.filters < 1
          )
            throw new d.nu(
              `Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(
                i.filters
              )}`
            );
        }
      }
      class v extends z {
        constructor(i) {
          super(2, i), v.verifyArgs(i);
        }
        getConfig() {
          let i = super.getConfig();
          return delete i.rank, i;
        }
        static verifyArgs(i) {
          if (
            "number" != typeof i.kernelSize &&
            !g.Mx(i.kernelSize, "number", 1, 2)
          )
            throw new d.nu(
              `Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(
                i.kernelSize
              )}.`
            );
        }
      }
      (v.className = "Conv2D"), n.m7h.registerClass(v);
      class C extends z {
        constructor(i) {
          super(3, i), C.verifyArgs(i);
        }
        getConfig() {
          let i = super.getConfig();
          return delete i.rank, i;
        }
        static verifyArgs(i) {
          if (
            "number" != typeof i.kernelSize &&
            !(
              Array.isArray(i.kernelSize) &&
              (1 === i.kernelSize.length || 3 === i.kernelSize.length)
            )
          )
            throw new d.nu(
              `Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(
                i.kernelSize
              )}.`
            );
        }
      }
      (C.className = "Conv3D"), n.m7h.registerClass(C);
      class S extends v {
        constructor(i) {
          if (
            (super(i),
            (this.inputSpec = [new o.Zg({ ndim: 4 })]),
            "same" !== this.padding && "valid" !== this.padding)
          )
            throw new d.nu(
              `Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`
            );
        }
        build(i) {
          if (4 !== (i = (0, f.Wf)(i)).length)
            throw new d.nu(
              "Input should have rank 4; Received input shape: " +
                JSON.stringify(i)
            );
          let t = "channelsFirst" === this.dataFormat ? 1 : i.length - 1;
          if (null == i[t])
            throw new d.nu(
              "The channel dimension of the inputs should be defined. Found `None`."
            );
          let e = i[t],
            n = this.kernelSize.concat([this.filters, e]);
          (this.kernel = this.addWeight(
            "kernel",
            n,
            "float32",
            this.kernelInitializer,
            this.kernelRegularizer,
            !0,
            this.kernelConstraint
          )),
            this.useBias &&
              (this.bias = this.addWeight(
                "bias",
                [this.filters],
                "float32",
                this.biasInitializer,
                this.biasRegularizer,
                !0,
                this.biasConstraint
              )),
            (this.inputSpec = [new o.Zg({ ndim: 4, axes: { [t]: e } })]),
            (this.built = !0);
        }
        call(i, t) {
          return n.lub(() => {
            let t,
              e,
              s = (0, f.nQ)(i);
            if (4 !== s.shape.length)
              throw new d.nu(
                `Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${s.shape.length}`
              );
            let r = s.shape,
              l = r[0];
            "channelsFirst" === this.dataFormat
              ? ((t = 2), (e = 3))
              : ((t = 1), (e = 2));
            let h = r[t],
              o = r[e],
              u = this.kernelSize[0],
              p = this.kernelSize[1],
              g = this.strides[0],
              m = this.strides[1],
              b = [
                l,
                (0, c.$U)(h, g, u, this.padding),
                (0, c.$U)(o, m, p, this.padding),
                this.filters,
              ];
            "channelsLast" !== this.dataFormat && (s = n.p4s(s, [0, 2, 3, 1]));
            let k = n.bc(s, this.kernel.read(), b, this.strides, this.padding);
            return (
              "channelsLast" !== this.dataFormat &&
                (k = n.p4s(k, [0, 3, 1, 2])),
              null != this.bias &&
                (k = a.a2(k, this.bias.read(), this.dataFormat)),
              null != this.activation && (k = this.activation.apply(k)),
              k
            );
          });
        }
        computeOutputShape(i) {
          let t, e, n;
          let s = (i = (0, f.Wf)(i)).slice();
          "channelsFirst" === this.dataFormat
            ? ((t = 1), (e = 2), (n = 3))
            : ((t = 3), (e = 1), (n = 2));
          let r = this.kernelSize[0],
            a = this.kernelSize[1],
            l = this.strides[0],
            h = this.strides[1];
          return (
            (s[t] = this.filters),
            (s[e] = (0, c.$U)(s[e], l, r, this.padding)),
            (s[n] = (0, c.$U)(s[n], h, a, this.padding)),
            s
          );
        }
        getConfig() {
          let i = super.getConfig();
          return delete i.dilationRate, i;
        }
      }
      (S.className = "Conv2DTranspose"), n.m7h.registerClass(S);
      class F extends C {
        constructor(i) {
          if (
            (super(i),
            (this.inputSpec = [new o.Zg({ ndim: 5 })]),
            "same" !== this.padding && "valid" !== this.padding)
          )
            throw new d.nu(
              `Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`
            );
        }
        build(i) {
          if (5 !== (i = (0, f.Wf)(i)).length)
            throw new d.nu(
              "Input should have rank 5; Received input shape: " +
                JSON.stringify(i)
            );
          let t = "channelsFirst" === this.dataFormat ? 1 : i.length - 1;
          if (null == i[t])
            throw new d.nu(
              "The channel dimension of the inputs should be defined. Found `None`."
            );
          let e = i[t],
            n = this.kernelSize.concat([this.filters, e]);
          (this.kernel = this.addWeight(
            "kernel",
            n,
            "float32",
            this.kernelInitializer,
            this.kernelRegularizer,
            !0,
            this.kernelConstraint
          )),
            this.useBias &&
              (this.bias = this.addWeight(
                "bias",
                [this.filters],
                "float32",
                this.biasInitializer,
                this.biasRegularizer,
                !0,
                this.biasConstraint
              )),
            (this.inputSpec = [new o.Zg({ ndim: 5, axes: { [t]: e } })]),
            (this.built = !0);
        }
        call(i, t) {
          return n.lub(() => {
            let t,
              e,
              s,
              r = (0, f.nQ)(i);
            if (5 !== r.shape.length)
              throw new d.nu(
                `Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${r.shape.length}`
              );
            let l = r.shape,
              h = l[0];
            "channelsFirst" === this.dataFormat
              ? ((s = 2), (t = 3), (e = 4))
              : ((s = 1), (t = 2), (e = 3));
            let o = l[s],
              u = l[t],
              p = l[e],
              g = this.kernelSize[0],
              m = this.kernelSize[1],
              b = this.kernelSize[2],
              k = this.strides[0],
              w = this.strides[1],
              z = this.strides[2],
              v = [
                h,
                (0, c.$U)(o, k, g, this.padding),
                (0, c.$U)(u, w, m, this.padding),
                (0, c.$U)(p, z, b, this.padding),
                this.filters,
              ];
            "channelsLast" !== this.dataFormat &&
              (r = n.p4s(r, [0, 2, 3, 4, 1]));
            let C = n.$QV(r, this.kernel.read(), v, this.strides, this.padding);
            return (
              "channelsLast" !== this.dataFormat &&
                (C = n.p4s(C, [0, 4, 1, 2, 3])),
              null !== this.bias &&
                (C = a.a2(C, this.bias.read(), this.dataFormat)),
              null !== this.activation && (C = this.activation.apply(C)),
              C
            );
          });
        }
        computeOutputShape(i) {
          let t, e, n, s;
          let r = (i = (0, f.Wf)(i)).slice();
          "channelsFirst" === this.dataFormat
            ? ((t = 1), (e = 2), (n = 3), (s = 4))
            : ((t = 4), (e = 1), (n = 2), (s = 3));
          let a = this.kernelSize[0],
            l = this.kernelSize[1],
            h = this.kernelSize[2],
            o = this.strides[0],
            d = this.strides[1],
            u = this.strides[2];
          return (
            (r[t] = this.filters),
            (r[e] = (0, c.$U)(r[e], o, a, this.padding)),
            (r[n] = (0, c.$U)(r[n], d, l, this.padding)),
            (r[s] = (0, c.$U)(r[s], u, h, this.padding)),
            r
          );
        }
        getConfig() {
          let i = super.getConfig();
          return delete i.dilationRate, i;
        }
      }
      (F.className = "Conv3DTranspose"), n.m7h.registerClass(F);
      class I extends z {
        constructor(i, t) {
          if (
            (super(i, t),
            (this.DEFAULT_DEPTHWISE_INITIALIZER = "glorotUniform"),
            (this.DEFAULT_POINTWISE_INITIALIZER = "glorotUniform"),
            (this.depthwiseKernel = null),
            (this.pointwiseKernel = null),
            null == t.filters)
          )
            throw new d.nu(
              "The `filters` configuration field is required by SeparableConv, but is unspecified."
            );
          if (
            null != t.kernelInitializer ||
            null != t.kernelRegularizer ||
            null != t.kernelConstraint
          )
            throw new d.nu(
              "Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead."
            );
          if (
            null != t.padding &&
            "same" !== t.padding &&
            "valid" !== t.padding
          )
            throw new d.nu(
              `SeparableConv${
                this.rank
              }D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(
                t.padding
              )}`
            );
          (this.depthMultiplier =
            null == t.depthMultiplier ? 1 : t.depthMultiplier),
            (this.depthwiseInitializer = (0, u.L5)(
              t.depthwiseInitializer || this.DEFAULT_DEPTHWISE_INITIALIZER
            )),
            (this.depthwiseRegularizer = (0, p.EC)(t.depthwiseRegularizer)),
            (this.depthwiseConstraint = (0, h.Ad)(t.depthwiseConstraint)),
            (this.pointwiseInitializer = (0, u.L5)(
              t.depthwiseInitializer || this.DEFAULT_POINTWISE_INITIALIZER
            )),
            (this.pointwiseRegularizer = (0, p.EC)(t.pointwiseRegularizer)),
            (this.pointwiseConstraint = (0, h.Ad)(t.pointwiseConstraint));
        }
        build(i) {
          if ((i = (0, f.Wf)(i)).length < this.rank + 2)
            throw new d.nu(
              `Inputs to SeparableConv${this.rank}D should have rank ${
                this.rank + 2
              }, but received input shape: ${JSON.stringify(i)}`
            );
          let t = "channelsFirst" === this.dataFormat ? 1 : i.length - 1;
          if (null == i[t] || i[t] < 0)
            throw new d.nu(
              `The channel dimension of the inputs should be defined, but found ${JSON.stringify(
                i[t]
              )}`
            );
          let e = i[t],
            n = this.kernelSize.concat([e, this.depthMultiplier]),
            s = [];
          for (let i = 0; i < this.rank; ++i) s.push(1);
          s.push(e * this.depthMultiplier, this.filters),
            (this.depthwiseKernel = this.addWeight(
              "depthwise_kernel",
              n,
              "float32",
              this.depthwiseInitializer,
              this.depthwiseRegularizer,
              !0,
              this.depthwiseConstraint
            )),
            (this.pointwiseKernel = this.addWeight(
              "pointwise_kernel",
              s,
              "float32",
              this.pointwiseInitializer,
              this.pointwiseRegularizer,
              !0,
              this.pointwiseConstraint
            )),
            this.useBias
              ? (this.bias = this.addWeight(
                  "bias",
                  [this.filters],
                  "float32",
                  this.biasInitializer,
                  this.biasRegularizer,
                  !0,
                  this.biasConstraint
                ))
              : (this.bias = null),
            (this.inputSpec = [
              new o.Zg({ ndim: this.rank + 2, axes: { [t]: e } }),
            ]),
            (this.built = !0);
        }
        call(i, t) {
          return (0, n.lub)(() => {
            let t;
            if (((i = (0, f.nQ)(i)), 1 === this.rank))
              throw new d.nj(
                "1D separable convolution is not implemented yet."
              );
            return (
              2 === this.rank &&
                ("channelsFirst" === this.dataFormat &&
                  (i = n.p4s(i, [0, 2, 3, 1])),
                (t = n.U_I(
                  i,
                  this.depthwiseKernel.read(),
                  this.pointwiseKernel.read(),
                  this.strides,
                  this.padding,
                  this.dilationRate,
                  "NHWC"
                ))),
              this.useBias && (t = a.a2(t, this.bias.read(), this.dataFormat)),
              null != this.activation && (t = this.activation.apply(t)),
              "channelsFirst" === this.dataFormat &&
                (t = n.p4s(t, [0, 3, 1, 2])),
              t
            );
          });
        }
        getConfig() {
          let i = super.getConfig();
          return (
            delete i.rank,
            delete i.kernelInitializer,
            delete i.kernelRegularizer,
            delete i.kernelConstraint,
            (i.depthwiseInitializer = (0, u.Cx)(this.depthwiseInitializer)),
            (i.pointwiseInitializer = (0, u.Cx)(this.pointwiseInitializer)),
            (i.depthwiseRegularizer = (0, p.SG)(this.depthwiseRegularizer)),
            (i.pointwiseRegularizer = (0, p.SG)(this.pointwiseRegularizer)),
            (i.depthwiseConstraint = (0, h.xF)(this.depthwiseConstraint)),
            (i.pointwiseConstraint = (0, h.xF)(this.pointwiseConstraint)),
            i
          );
        }
      }
      I.className = "SeparableConv";
      class R extends I {
        constructor(i) {
          super(2, i);
        }
      }
      (R.className = "SeparableConv2D"), n.m7h.registerClass(R);
      class y extends z {
        constructor(i) {
          super(1, i), y.verifyArgs(i), (this.inputSpec = [{ ndim: 3 }]);
        }
        getConfig() {
          let i = super.getConfig();
          return delete i.rank, delete i.dataFormat, i;
        }
        static verifyArgs(i) {
          if (
            "number" != typeof i.kernelSize &&
            !g.Mx(i.kernelSize, "number", 1, 1)
          )
            throw new d.nu(
              `Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(
                i.kernelSize
              )}.`
            );
        }
      }
      (y.className = "Conv1D"), n.m7h.registerClass(y);
      class A extends o.mh {
        constructor(i) {
          super(i),
            "number" == typeof i.cropping
              ? (this.cropping = [
                  [i.cropping, i.cropping],
                  [i.cropping, i.cropping],
                ])
              : "number" == typeof i.cropping[0]
                ? (this.cropping = [
                    [i.cropping[0], i.cropping[0]],
                    [i.cropping[1], i.cropping[1]],
                  ])
                : (this.cropping = i.cropping),
            (this.dataFormat =
              void 0 === i.dataFormat ? "channelsLast" : i.dataFormat),
            (this.inputSpec = [{ ndim: 4 }]);
        }
        computeOutputShape(i) {
          return "channelsFirst" === this.dataFormat
            ? [
                i[0],
                i[1],
                i[2] - this.cropping[0][0] - this.cropping[0][1],
                i[3] - this.cropping[1][0] - this.cropping[1][1],
              ]
            : [
                i[0],
                i[1] - this.cropping[0][0] - this.cropping[0][1],
                i[2] - this.cropping[1][0] - this.cropping[1][1],
                i[3],
              ];
        }
        call(i, t) {
          return (0, n.lub)(() => {
            if (((i = (0, f.nQ)(i)), "channelsLast" === this.dataFormat)) {
              let t = a.uI(
                i,
                this.cropping[0][0],
                i.shape[1] - this.cropping[0][0] - this.cropping[0][1],
                2
              );
              return a.uI(
                t,
                this.cropping[1][0],
                i.shape[2] - this.cropping[1][1] - this.cropping[1][0],
                3
              );
            }
            {
              let t = a.uI(
                i,
                this.cropping[0][0],
                i.shape[2] - this.cropping[0][0] - this.cropping[0][1],
                3
              );
              return a.uI(
                t,
                this.cropping[1][0],
                i.shape[3] - this.cropping[1][1] - this.cropping[1][0],
                4
              );
            }
          });
        }
        getConfig() {
          let i = { cropping: this.cropping, dataFormat: this.dataFormat };
          return Object.assign(i, super.getConfig()), i;
        }
      }
      (A.className = "Cropping2D"), n.m7h.registerClass(A);
      class N extends o.mh {
        constructor(i) {
          super(i),
            (this.DEFAULT_SIZE = [2, 2]),
            (this.inputSpec = [{ ndim: 4 }]),
            (this.size = null == i.size ? this.DEFAULT_SIZE : i.size),
            (this.dataFormat =
              null == i.dataFormat ? "channelsLast" : i.dataFormat),
            (0, l.cj)(this.dataFormat),
            (this.interpolation =
              null == i.interpolation ? "nearest" : i.interpolation),
            (0, l.wU)(this.interpolation);
        }
        computeOutputShape(i) {
          if ("channelsFirst" === this.dataFormat) {
            let t = null == i[2] ? null : this.size[0] * i[2],
              e = null == i[3] ? null : this.size[1] * i[3];
            return [i[0], i[1], t, e];
          }
          {
            let t = null == i[1] ? null : this.size[0] * i[1],
              e = null == i[2] ? null : this.size[1] * i[2];
            return [i[0], t, e, i[3]];
          }
        }
        call(i, t) {
          return n.lub(() => {
            let t = (0, f.nQ)(i),
              e = t.shape;
            if ("channelsFirst" === this.dataFormat) {
              t = n.p4s(t, [0, 2, 3, 1]);
              let i = this.size[0] * e[2],
                s = this.size[1] * e[3],
                r =
                  "nearest" === this.interpolation
                    ? n.BHj.resizeNearestNeighbor(t, [i, s])
                    : n.BHj.resizeBilinear(t, [i, s]);
              return n.p4s(r, [0, 3, 1, 2]);
            }
            {
              let i = this.size[0] * e[1],
                s = this.size[1] * e[2];
              return "nearest" === this.interpolation
                ? n.BHj.resizeNearestNeighbor(t, [i, s])
                : n.BHj.resizeBilinear(t, [i, s]);
            }
          });
        }
        getConfig() {
          let i = {
            size: this.size,
            dataFormat: this.dataFormat,
            interpolation: this.interpolation,
          };
          return Object.assign(i, super.getConfig()), i;
        }
      }
      (N.className = "UpSampling2D"), n.m7h.registerClass(N);
    },
  },
]);
//# sourceMappingURL=0d9e9cd9.36bb6cb6e7d3b8e4.js.map
