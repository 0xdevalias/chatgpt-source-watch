"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7414],
  {
    79741: function (e, t, s) {
      s.d(t, {
        W: function () {
          return c;
        },
      });
      var n = s(99444),
        i = s(80316),
        o = s(71544),
        r = s(38045),
        a = s(78690),
        l = s(33382),
        u = s(9914),
        h = s(48030),
        p = s(86692),
        d = s(34191),
        f = s(73724),
        y = s(61475); /**
       * @license
       * Copyright 2018 Google LLC
       *
       * Use of this source code is governed by an MIT-style
       * license that can be found in the LICENSE file or at
       * https://opensource.org/licenses/MIT.
       * =============================================================================
       */
      class c extends y.mh {
        constructor(e) {
          if (
            (super({}),
            (this.containerNodes = new Set()),
            (this.name = e.name),
            null == this.name)
          ) {
            let e = this.getClassName().toLowerCase();
            this.name = (0, i.s)(e);
          }
          if (
            ((this.supportsMasking = !1),
            (this.trainable_ = !0),
            Array.isArray(e.inputs)
              ? (this.inputs = e.inputs.slice())
              : (this.inputs = [e.inputs]),
            Array.isArray(e.outputs)
              ? (this.outputs = e.outputs.slice())
              : (this.outputs = [e.outputs]),
            a.Tw(this.inputs).length !== this.inputs.length)
          )
            throw new o.nu(
              `The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(
                (e) => e.name
              )}`
            );
          for (let e of (a.Tw(this.outputs).length !== this.outputs.length &&
            console.warn(
              `The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(
                (e) => e.name
              )}`
            ),
          (this.inputLayers = []),
          (this.inputLayersNodeIndices = []),
          (this.inputLayersTensorIndices = []),
          (this.outputLayers = []),
          (this.outputLayersNodeIndices = []),
          (this.outputLayersTensorIndices = []),
          (this.layers = []),
          (this.internalContainerRefs = []),
          this.outputs)) {
            let t = e.sourceLayer,
              s = e.nodeIndex,
              n = e.tensorIndex;
            this.outputLayers.push(t),
              this.outputLayersNodeIndices.push(s),
              this.outputLayersTensorIndices.push(n);
          }
          for (let e of this.inputs) {
            let t = e.sourceLayer,
              s = e.nodeIndex,
              n = e.tensorIndex;
            a.hu(0 === s, "input layer has >1 nodes"),
              a.hu(0 === n, "input layer has >1 tensors"),
              this.inputLayers.push(t),
              this.inputLayersNodeIndices.push(s),
              this.inputLayersTensorIndices.push(n);
          }
          (this.inputNames = []),
            (this.outputNames = []),
            (this.feedInputShapes = []),
            (this.feedInputNames = []),
            (this.feedOutputNames = []);
          for (let t = 0; t < this.inputLayers.length; t++) {
            let s = this.inputLayers[t];
            if (!(s instanceof f.l))
              throw TypeError(
                `Input layers to a LayersModel must be InputLayer objects. Received inputs: ${
                  e.inputs
                }. Input ${t} (0-based) originates from layer type ${s.getClassName()}.`
              );
            this.inputNames.push(s.name),
              this.feedInputShapes.push(s.batchInputShape),
              this.feedInputNames.push(s.name);
          }
          for (let e of this.outputLayers) this.outputNames.push(e.name);
          (this.internalInputShapes = this.inputs.map((e) => e.shape)),
            (this.internalOutputShapes = this.outputs.map((e) => e.shape));
          let t = {},
            s = {},
            n = {},
            r = {},
            l = {},
            u = [],
            h = (e, t, s, n, i, r) => {
              (null == n || null == i || null == r) &&
                ((n = e.sourceLayer), (i = e.nodeIndex), (r = e.tensorIndex));
              let a = n.inboundNodes[i];
              if (-1 !== s.indexOf(a))
                throw new o.LH(
                  `The tensor ${e.name} at layer "${n.name}" is part of a cycle.`
                );
              if (-1 !== t.indexOf(a)) return;
              this.containerNodes.add(c.nodeKey(n, i)),
                n.id in l || (l[n.id] = Object.keys(l).length),
                -1 === s.indexOf(a) && s.push(a);
              let p = a.inboundLayers.length;
              for (let e = 0; e < p; e++) {
                let n = a.inputTensors[e];
                h(
                  n,
                  t,
                  s,
                  a.inboundLayers[e],
                  a.nodeIndices[e],
                  a.tensorIndices[e]
                );
              }
              for (t.push(a); s.indexOf(a) >= 0; ) s.splice(s.indexOf(a), 1);
              u.push(a);
            },
            p = [],
            d = [];
          for (let e of this.outputs) h(e, p, d);
          for (let e of u.slice().reverse()) {
            (s[e.id] = e), e.id in t || (t[e.id] = 0);
            let i = t[e.id];
            (i = Math.max(
              i,
              null == n[e.outboundLayer.id] ? 0 : n[e.outboundLayer.id]
            )),
              (n[e.outboundLayer.id] = i),
              (r[e.outboundLayer.id] = e.outboundLayer),
              (t[e.id] = i);
            for (let n = 0; n < e.inboundLayers.length; n++) {
              let o = e.inboundLayers[n],
                r = e.nodeIndices[n],
                a = o.inboundNodes[r],
                l = null == t[a.id] ? 0 : t[a.id];
              (t[a.id] = Math.max(i + 1, l)), (s[a.id] = a);
            }
          }
          let m = {};
          for (let e in t) {
            let n = t[e];
            n in m || (m[n] = []), m[n].push(s[e]);
          }
          let g = {};
          for (let e in n) {
            let t = n[e];
            t in g || (g[t] = []), g[t].push(r[e]);
          }
          let b = Object.keys(g)
            .map((e) => parseInt(e, 10))
            .sort(a.L7);
          for (let e of ((this.layers = []), b)) {
            let t = g[e];
            for (let e of (t.sort((e, t) => {
              let s = l[e.id],
                n = l[t.id];
              return s < n ? -1 : s > n ? 1 : 0;
            }),
            t))
              e instanceof c && this.internalContainerRefs.push(e),
                this.layers.push(e);
          }
          (this.layersByDepth = g),
            (b = Object.keys(m)
              .map((e) => parseInt(e, 10))
              .sort(a.L7));
          let L = this.inputs.slice(),
            w = [];
          for (let e of b)
            for (let t of m[e]) {
              let e = t.outboundLayer;
              if (null != e) {
                for (let s of t.inputTensors)
                  if (-1 === L.indexOf(s))
                    throw new o.LH(
                      `Graph disconnected: cannot obtain value for tensor ${s} at layer "${e.name}". The following previous layers were accessed without issue: ${w}`
                    );
                for (let e of t.outputTensors) L.push(e);
                w.push(e.name);
              }
            }
          this.nodesByDepth = m;
          let N = this.layers.map((e) => e.name);
          for (let e of N) {
            let t = N.filter((t) => t === e).length;
            if (1 !== t)
              throw new o.LH(
                `The name "${e}" is used ${t} times in the model. All layer names should be unique. Layer names: ` +
                  JSON.stringify(N)
              );
          }
          (this.outboundNodes = []),
            (this.inboundNodes = []),
            new y.NB({
              outboundLayer: this,
              inboundLayers: [],
              nodeIndices: [],
              tensorIndices: [],
              inputTensors: this.inputs,
              outputTensors: this.outputs,
              inputMasks: this.inputs.map((e) => null),
              outputMasks: this.outputs.map((e) => null),
              inputShapes: this.inputs.map((e) => e.shape),
              outputShapes: this.outputs.map((e) => e.shape),
            }),
            (this.built = !0),
            (this._refCount = 1);
        }
        assertNotDisposed() {
          if (0 === this._refCount)
            throw Error(`Container '${this.name}' is already disposed.`);
        }
        dispose() {
          this.assertNotDisposed();
          let e = { refCountAfterDispose: null, numDisposedVariables: 0 };
          if (0 == --this._refCount) {
            for (let t of this.layers)
              e.numDisposedVariables += t.dispose().numDisposedVariables;
            for (let t of this.internalContainerRefs)
              e.numDisposedVariables += t.dispose().numDisposedVariables;
          }
          return (e.refCountAfterDispose = this._refCount), e;
        }
        get trainable() {
          return this.trainable_;
        }
        set trainable(e) {
          this.layers.forEach((t) => {
            t._trainableWeights.forEach((t) => (t.trainable = e));
          }),
            (this.trainable_ = e);
        }
        get trainableWeights() {
          if (this._trainableWeights.length > 0)
            throw new o.nu(
              "Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array."
            );
          if (!this.trainable) return [];
          let e = [];
          for (let t of this.layers) e = e.concat(t.trainableWeights);
          return e;
        }
        get nonTrainableWeights() {
          let e = [];
          for (let t of this.layers) e.push(...t.nonTrainableWeights);
          if (!this.trainable) {
            let t = [];
            for (let e of this.layers) t.push(...e.trainableWeights);
            return t.concat(e);
          }
          return e;
        }
        get weights() {
          return this.trainableWeights.concat(this.nonTrainableWeights);
        }
        loadWeights(e, t = !0) {
          let s = {},
            n = 0;
          for (let e of this.layers)
            for (let t of e.weights) {
              if (null != s[t.originalName])
                throw new o.nu(`Duplicate weight name: ${t.originalName}`);
              (s[t.originalName] = t), n++;
            }
          let i = [];
          for (let n in e) {
            let r = n;
            if (null == s[n]) {
              let e = n.split("/");
              r = e
                .slice(0, -2)
                .concat([e[e.length - 1]])
                .join("/");
            }
            if (null != s[r]) i.push([s[r], e[n]]);
            else if (t)
              throw new o.nu(
                `Provided weight data has no target variable: ${n}`
              );
            delete s[r];
          }
          if (t) {
            let e = [];
            for (let t in s) e.push(t);
            if (e.length > 0)
              throw new o.nu(`${e.length} of ${n} weights are not set: ${e}`);
          }
          (0, h.zb)(i);
        }
        updatedConfig() {
          let e = this.getConfig(),
            t = {};
          return (
            (t.className = this.getClassName()),
            (t.config = e),
            (t.kerasVersion = `tfjs-layers ${p.i}`),
            (t.backend = "TensorFlow.js"),
            t
          );
        }
        toJSON(e, t = !0) {
          let s = (0, l.q)(this.updatedConfig());
          return t ? JSON.stringify(s) : s;
        }
        call(e, t) {
          return (0, n.lub)(() => {
            e = a.zZ(e);
            let s = new d.l2();
            for (let t = 0; t < this.inputs.length; ++t)
              s.add(this.inputs[t], e[t]);
            return (0, d.ht)(this.outputs, s, t);
          });
        }
        computeMask(e, t) {
          return (0, n.lub)(() => {
            let s;
            return (
              (e = a.zZ(e)),
              (s = null == t ? a.JE(null, e.length) : a.zZ(t)),
              this.runInternalGraph(e, s)[1]
            );
          });
        }
        computeOutputShape(e) {
          let t = u.x6(e);
          if (t.length !== this.inputLayers.length)
            throw new o.nu(
              `Invalid inputShape argument ${e}: model has ${this.inputLayers.length} tensor inputs.`
            );
          let s = {};
          for (let e = 0; e < t.length; e++) {
            let n = this.inputLayers[e],
              i = t[e];
            s[n.name + "_0_0"] = i;
          }
          let n = Object.keys(this.nodesByDepth)
            .map((e) => parseInt(e, 10))
            .sort(a.L7);
          if (n.length > 1)
            for (let e of n)
              for (let t of this.nodesByDepth[e]) {
                let e = t.outboundLayer;
                if (-1 !== this.inputLayers.map((e) => e.id).indexOf(e.id))
                  continue;
                let n = [];
                for (let e = 0; e < t.inboundLayers.length; e++) {
                  let i = t.inboundLayers[e],
                    o = t.nodeIndices[e],
                    r = t.tensorIndices[e],
                    a = s[`${i.name}_${o}_${r}`];
                  n.push(a);
                }
                let i = e.computeOutputShape(a.Bq(n)),
                  o = u.x6(i),
                  r = e.inboundNodes.indexOf(t);
                for (let t = 0; t < o.length; t++)
                  s[`${e.name}_${r}_${t}`] = o[t];
              }
          let i = [],
            r = [];
          for (let e = 0; e < this.outputLayers.length; e++) {
            let t = this.outputLayers[e],
              s = this.outputLayersNodeIndices[e],
              n = this.outputLayersTensorIndices[e],
              i = `${t.name}_${s}_${n}`;
            r.push(i);
          }
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            a.hu(t in s), i.push(s[t]);
          }
          return a.Bq(i);
        }
        runInternalGraph(e, t) {
          null == t && (t = a.JE(null, e.length));
          let s = {};
          for (let n = 0; n < this.inputs.length; ++n) {
            let i = this.inputs[n],
              o = e[n],
              r = t[n];
            s[i.id] = [o, r];
          }
          for (let e of Object.keys(this.nodesByDepth)
            .map((e) => parseInt(e, 10))
            .sort(a.L7))
            for (let t of this.nodesByDepth[e]) {
              let e = t.outboundLayer,
                n = t.inputTensors,
                i = t.outputTensors,
                r = [];
              for (let e of n) e.id in s && r.push(s[e.id]);
              if (r.length === n.length) {
                let n,
                  l,
                  u,
                  h,
                  p = {};
                if ((null != t.callArgs && (p = t.callArgs), 1 === r.length)) {
                  let [t, s] = r[0];
                  null == p.mask && (p.mask = s),
                    (u = a.zZ(e.call(t, p))),
                    (h = a.zZ(e.computeMask(t, s))),
                    (n = [t]),
                    (l = [s]);
                } else
                  (n = r.map((e) => e[0])),
                    (l = r.map((e) => e[1])),
                    null == p.mask && (p.mask = l),
                    (u = a.zZ(e.call(n, p))),
                    (h = a.zZ(e.computeMask(n, l)));
                if (e.activityRegularizer)
                  throw new o.nj(
                    "LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet."
                  );
                for (let e = 0; e < i.length; ++e) {
                  let t = i[e],
                    n = u[e],
                    o = h[e];
                  s[t.id] = [n, o];
                }
              }
            }
          let n = [],
            i = [],
            r = [];
          for (let e of this.outputs) {
            a.hu(e.id in s, `Could not compute output ${e.name} : ${e.id}`);
            let [t, o] = s[e.id];
            r.push(t.shape), n.push(t), i.push(o);
          }
          return [n, i, r];
        }
        buildNodeConversionMap(e) {
          let t;
          let s = {};
          for (let e of this.layers) {
            t = e instanceof c ? 1 : 0;
            for (let n = 0; n < e.inboundNodes.length; n++) {
              let i = c.nodeKey(e, n);
              this.containerNodes.has(i) && ((s[i] = t), (t += 1));
            }
          }
          return s;
        }
        getLayer(e, t) {
          if (null != t) {
            if (!(this.layers.length <= t)) return this.layers[t];
            throw new o.nu(
              `Was asked to retrieve layer at index ${t}, but model only has ${this.layers.length} layer(s).`
            );
          }
          if (null == e)
            throw new o.nu("Provide either a layer name or layer index");
          for (let t of this.layers) if (t.name === e) return t;
          throw new o.nu(`No such layer: ${e}`);
        }
        calculateLosses() {
          return (0, n.lub)(() => {
            let e = [];
            for (let t of this.layers)
              for (let s = 0; s < t.inboundNodes.length; ++s) {
                let n = c.nodeKey(t, s);
                this.containerNodes.has(n) && e.push(...t.calculateLosses());
              }
            return e;
          });
        }
        getConfig() {
          let e = { name: this.name },
            t = this.buildNodeConversionMap(this.layers),
            s = [];
          for (let e of this.layers) {
            let n = e.getClassName(),
              i = e.getConfig(),
              o = [];
            for (let s = 0; s < e.inboundNodes.length; s++) {
              let n = e.inboundNodes[s],
                i = c.nodeKey(e, s),
                r = {};
              if (this.containerNodes.has(i)) {
                if (n.callArgs)
                  try {
                    JSON.stringify(n.callArgs), (r = n.callArgs);
                  } catch (t) {
                    console.warn(
                      `Layer ${e.name} was passed non-serializable keyword arguments: ${n.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`
                    ),
                      (r = {});
                  }
                if (n.inboundLayers.length > 0) {
                  let e = [];
                  for (let s = 0; s < n.inboundLayers.length; s++) {
                    let i = n.inboundLayers[s],
                      o = n.nodeIndices[s],
                      a = n.tensorIndices[s],
                      l = t[c.nodeKey(i, o)];
                    null == l && (l = 0), e.push([i.name, l, a, r]);
                  }
                  o.push(e);
                }
              }
            }
            let r = {};
            (r.name = e.name),
              (r.className = n),
              (r.config = i),
              (r.inboundNodes = o),
              s.push(r);
          }
          e.layers = s;
          let n = [];
          for (let e = 0; e < this.inputLayers.length; e++) {
            let s = this.inputLayers[e],
              i = this.inputLayersNodeIndices[e],
              o = c.nodeKey(s, i);
            if (!this.containerNodes.has(o)) continue;
            let r = t[o];
            null == r && (r = 0);
            let a = this.inputLayersTensorIndices[e];
            n.push([s.name, r, a]);
          }
          e.inputLayers = n;
          let i = [];
          for (let e = 0; e < this.outputLayers.length; e++) {
            let s = this.outputLayers[e],
              n = this.outputLayersNodeIndices[e],
              o = c.nodeKey(s, n);
            if (!this.containerNodes.has(o)) continue;
            let r = t[o];
            null == r && (r = 0);
            let a = this.outputLayersTensorIndices[e];
            i.push([s.name, r, a]);
          }
          return (e.outputLayers = i), e;
        }
        static fromConfig(e, t, s = {}, n = !1) {
          let i = {},
            l = {};
          function u(e, t) {
            e.name in l ? l[e.name].push(t) : (l[e.name] = [t]);
          }
          let h = t.name,
            p = t.layers;
          for (let e of p)
            !(function (e) {
              let s = e.name,
                a = (0, r.v)(e, null != t.customObjects ? t.customObjects : {});
              a.setFastWeightInitDuringBuild(n),
                (i[s] = a),
                e.inboundNodes.forEach((e) => {
                  if (!(e instanceof Array))
                    throw new o.nu(
                      `Corrupted configuration, expected array for nodeData: ${e}`
                    );
                  u(a, e);
                });
            })(e);
          for (; !a.nK(l); )
            for (let e of p) {
              let t = i[e.name];
              if (t.name in l) {
                let e = l[t.name];
                for (let s of (delete l[t.name], e))
                  !(function (e, t) {
                    let s;
                    let n = [];
                    for (let o of t) {
                      let r = o[0],
                        a = o[1],
                        l = o[2];
                      if (((s = null == o[3] ? {} : o[3]), !(r in i))) {
                        u(e, t);
                        return;
                      }
                      let h = i[r];
                      if (h.inboundNodes.length <= a) {
                        u(e, t);
                        return;
                      }
                      let p = h.inboundNodes[a];
                      n.push(p.outputTensors[l]);
                    }
                    n.length > 0 && e.apply(a.Bq(n), s);
                  })(t, s);
              }
            }
          let d = [],
            f = [];
          for (let e of t.inputLayers) {
            let t = e[0],
              s = e[1],
              n = e[2];
            a.hu(t in i);
            let o = i[t].inboundNodes[s].outputTensors;
            d.push(o[n]);
          }
          for (let e of t.outputLayers) {
            let t = e[0],
              s = e[1],
              n = e[2];
            a.hu(t in i);
            let o = i[t].inboundNodes[s].outputTensors;
            f.push(o[n]);
          }
          return new e({ inputs: d, outputs: f, name: h });
        }
        get stateful() {
          if (this._stateful)
            throw new o.nu(
              "Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false."
            );
          for (let e of this.layers) if (e.stateful) return !0;
          return !1;
        }
        resetStates() {
          (0, n.lub)(() => {
            this.layers.forEach((e) => {
              e.stateful && e.resetStates();
            });
          });
        }
      }
    },
  },
]);
//# sourceMappingURL=420d684a.abf37f1db8be5c89.js.map
