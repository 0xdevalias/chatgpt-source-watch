"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9896],
  {
    47130: function (e, t, s) {
      s.d(t, {
        QV: function () {
          return N;
        },
      });
      var i = s(99444),
        n = s(12776),
        r = s(99549),
        o = s(71544),
        l = s(38045),
        a = s(36758),
        h = s(22840),
        u = s(99043),
        p = s(62730),
        f = s(78690),
        c = s(15071),
        d = s(72541),
        g = s(33382),
        m = s(86692),
        y = s(79741),
        w = s(34191),
        b = s(1376),
        $ = s(65474),
        T = s(3678);
      function O(e) {
        return Array.isArray(e);
      }
      function z(e) {
        return !(e instanceof i.esB) && !O(e);
      }
      function A(e, t, s, i = !0, n = "") {
        let r;
        if (null == t || 0 === t.length) {
          if (null != e) {
            let t = !1;
            if (O(e) && e.length > 0) t = !0;
            else if (z(e)) {
              for (let s in e)
                if (e.hasOwnProperty(s)) {
                  t = !0;
                  break;
                }
            } else t = !0;
            if (t)
              throw new o.nu(
                `Error when checking model ${n} expected no data, but got ${e}`
              );
          }
          return [];
        }
        if (null == e) return t.map((e) => null);
        if (z(e))
          for (let s of ((r = []), t)) {
            if (null == e[s])
              throw new o.nu(
                `No data provided for "${s}". Need data for each key in: ${t}`
              );
            r.push(e[s]);
          }
        else if (O(e)) {
          if (e.length !== t.length)
            throw new o.nu(
              `Error when checking model ${n}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${e}`
            );
          r = e;
        } else {
          if (t.length > 1)
            throw new o.nu(
              `The model ${n} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${e.shape}`
            );
          r = [e];
        }
        if (((r = (0, $.YV)(r)), null != s))
          for (let e = 0; e < t.length; ++e) {
            if (null == s[e]) continue;
            let l = r[e];
            if (l.shape.length !== s[e].length)
              throw new o.nu(
                `Error when checking ${n}: expected ${t[e]} to have ${s[e].length} dimension(s). but got array with shape ${l.shape}`
              );
            for (let t = 0; t < s[e].length; ++t) {
              if (0 === t && !i) continue;
              let r = l.shape[t],
                a = s[e][t];
              if (null != a && a >= 0 && r !== a)
                throw new o.nu(
                  `${n} expected a batch of elements where each example has shape [${s[
                    e
                  ].slice(1, s[e].length)}] (i.e.,tensor shape [*,${s[e].slice(
                    1,
                    s[e].length
                  )}]) but the ${n} received an input with ${
                    l.shape[0]
                  } examples, each with shape [${l.shape.slice(
                    1,
                    l.shape.length
                  )}] (tensor shape [${l.shape}])`
                );
            }
          }
        return r;
      }
      function v(e, t, s, i = !0, n = "") {
        let r;
        if (Array.isArray(e)) {
          if (e.length !== t.length)
            throw new o.nu(
              `Error when checking model ${n}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${e.length} Tensors(s).`
            );
          r = e;
        } else {
          if (t.length > 1)
            throw new o.nu(
              `The model expects ${
                t.length
              } ${n} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(
                e.shape
              )}.`
            );
          r = [e];
        }
        if (null != s)
          for (let e = 0; e < t.length; ++e) {
            if (null == s[e]) continue;
            let l = r[e];
            if (l.shape.length !== s[e].length)
              throw new o.nu(
                `Error when checking ${n}: expected ${t[e]} to have ${
                  s[e].length
                } dimension(s), but got array with shape ${JSON.stringify(
                  l.shape
                )}`
              );
            for (let r = 0; r < s[e].length; ++r) {
              if (0 === r && !i) continue;
              let a = l.shape[r],
                h = s[e][r];
              if (null != h && h !== a)
                throw new o.nu(
                  `Error when checking ${n}: expected ${
                    t[e]
                  } to have shape ${JSON.stringify(
                    s[e]
                  )} but got array with shape ${JSON.stringify(l.shape)}.`
                );
            }
          }
      }
      class N extends y.W {
        constructor(e) {
          super(e), (this.isTraining = !1);
        }
        summary(e, t, s = console.log) {
          if (!this.built)
            throw new o.nu(
              "This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data)."
            );
          (0, c.I)(this, e, t, s);
        }
        compile(e) {
          if (
            (null == e.loss && (e.loss = []),
            (this.loss = e.loss),
            "string" == typeof e.optimizer)
          )
            (this.optimizer_ = u.j(e.optimizer)), (this.isOptimizerOwned = !0);
          else {
            if (!(e.optimizer instanceof i.gaJ))
              throw new o.nu(
                "User-defined optimizer must be an instance of tf.Optimizer."
              );
            (this.optimizer_ = e.optimizer), (this.isOptimizerOwned = !1);
          }
          let t = [];
          if (
            Array.isArray(e.loss) ||
            "string" == typeof e.loss ||
            "function" == typeof e.loss
          ) {
            if (Array.isArray(e.loss)) {
              if (e.loss.length !== this.outputs.length)
                throw new o.nu(
                  `When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${e.loss}.`
                );
              t = e.loss.map((e) => a.U2(e));
            } else {
              let s = a.U2(e.loss);
              this.outputs.forEach((e) => {
                t.push(s);
              });
            }
          } else {
            for (let t in ((e.loss = e.loss), e.loss))
              if (-1 === this.outputNames.indexOf(t))
                throw new o.nu(
                  `Unknown entry in loss dictionary: "${t}". Only expected the following keys: ${this.outputNames}`
                );
            for (let s of this.outputNames)
              null == e.loss[s] &&
                console.warn(
                  `Output "${s}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${s} during training`
                ),
                t.push(a.U2(e.loss[s]));
          }
          (this.lossFunctions = t),
            (this.feedOutputNames = []),
            (this.feedOutputShapes = []),
            (this.feedLossFns = []);
          for (let e = 0; e < this.outputs.length; ++e) {
            let t = this.internalOutputShapes[e],
              s = this.outputNames[e];
            this.feedOutputNames.push(s),
              this.feedOutputShapes.push(t),
              this.feedLossFns.push(this.lossFunctions[e]);
          }
          let s = [];
          (this.metrics = e.metrics),
            (this.metricsNames = ["loss"]),
            (this.metricsTensors = []),
            (0, r.f4)("loss", () => {
              for (let e = 0; e < this.outputs.length; ++e) {
                if (-1 !== s.indexOf(e)) continue;
                let t = this.lossFunctions[e];
                this.outputs.length > 1 &&
                  (this.metricsTensors.push([t, e]),
                  this.metricsNames.push(this.outputNames[e] + "_loss"));
              }
            });
          let n = (function (e, t) {
              let s;
              if (null == e || (Array.isArray(e) && 0 === e.length))
                return t.map((e) => []);
              if ("string" == typeof e || "function" == typeof e) s = [e];
              else if (Array.isArray(e) || "object" == typeof e) s = e;
              else
                throw TypeError(
                  `Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${e}`
                );
              if (Array.isArray(s)) return t.map((e) => s);
              {
                let e = [];
                for (let i of t) {
                  let t = s.hasOwnProperty(i) ? s[i] : [];
                  Array.isArray(t) || (t = [t]), e.push(t);
                }
                return e;
              }
            })(e.metrics, this.outputNames),
            l = (e, t, s) => {
              this.outputNames.length > 1 &&
                (t = this.outputNames[e] + "_" + t),
                this.metricsNames.push(t),
                this.metricsTensors.push([s, e]);
            };
          (0, r.f4)("metric", () => {
            for (let e = 0; e < this.outputs.length; ++e)
              -1 === s.indexOf(e) &&
                ((t) => {
                  let s, i, n;
                  for (let o of t) {
                    let t;
                    if (
                      "string" == typeof o &&
                      -1 !==
                        ["accuracy", "acc", "crossentropy", "ce"].indexOf(o)
                    ) {
                      let t;
                      let r = this.internalOutputShapes[e];
                      1 === r[r.length - 1] || this.lossFunctions[e] === a.fO
                        ? -1 !== ["accuracy", "acc"].indexOf(o)
                          ? (i = h._F)
                          : -1 !== ["crossentropy", "ce"].indexOf(o) &&
                            (i = h.fO)
                        : this.lossFunctions[e] === a.KM
                          ? -1 !== ["accuracy", "acc"].indexOf(o)
                            ? (i = h.TY)
                            : -1 !== ["crossentropy", "ce"].indexOf(o) &&
                              (i = h.KM)
                          : -1 !== ["accuracy", "acc"].indexOf(o)
                            ? (i = h.G5)
                            : -1 !== ["crossentropy", "ce"].indexOf(o) &&
                              (i = h.uq),
                        -1 !== ["accuracy", "acc"].indexOf(o)
                          ? (t = "acc")
                          : -1 !== ["crossentropy", "ce"].indexOf(o) &&
                            (t = "ce"),
                        (n = i),
                        (s = "" + t);
                    } else (n = h.U2(o)), (s = "" + h.aI(o));
                    (0, r.f4)(s, () => {
                      t = n;
                    }),
                      l(e, s, t);
                  }
                })(n[e]);
          }),
            (this.collectedTrainableWeights = this.trainableWeights);
        }
        checkTrainableWeightsConsistency() {
          null != this.collectedTrainableWeights &&
            this.trainableWeights.length !==
              this.collectedTrainableWeights.length &&
            console.warn(
              "Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?"
            );
        }
        evaluate(e, t, s = {}) {
          let i = null == s.batchSize ? 32 : s.batchSize;
          (0, $.fQ)(i);
          let n = this.standardizeUserDataXY(e, t, !0, i);
          try {
            let e = n[0].concat(n[1]);
            this.makeTestFunction();
            let t = this.testFunction,
              r = this.testLoop(t, e, i, s.verbose, s.steps);
            return (0, f.Bq)(r);
          } finally {
            (0, $.kS)(n[0], e), (0, $.kS)(n[1], t);
          }
        }
        async evaluateDataset(e, t) {
          return this.makeTestFunction(), (0, b.D)(this, e, t);
        }
        checkNumSamples(e, t, s, i = "steps") {
          let n;
          if (null != s) {
            if (((n = null), null != t))
              throw new o.nu(
                `If ${i} is set, batchSize must be null or undefined.Got batchSize = ${t}`
              );
          } else if (null != e)
            n = Array.isArray(e) ? e[0].shape[0] : e.shape[0];
          else
            throw new o.nu(
              `Either the input data should have a defined shape, or ${i} shoud be specified.`
            );
          return n;
        }
        execute(e, t) {
          if (Array.isArray(t) && 0 === t.length)
            throw new o.nu(
              "`outputs` is an empty Array, which is not allowed."
            );
          let s = Array.isArray(t),
            n = this.retrieveSymbolicTensors(s ? t : [t]),
            r = new w.l2();
          if ((e instanceof i.esB && (e = [e]), Array.isArray(e))) {
            if (e.length !== this.inputs.length)
              throw new o.nu(
                `The number of inputs provided (${e.length}) does not match the number of inputs of this model (${this.inputs.length}).`
              );
            for (let t = 0; t < this.inputs.length; ++t)
              r.add(this.inputs[t], e[t]);
          } else
            for (let t of this.inputs) {
              let s = e[t.name];
              if (null == s)
                throw new o.nu(
                  `No value is provided for the model's input ${t.name}`
                );
              r.add(t, s);
            }
          let l = (0, w.ht)(n, r);
          return s ? l : l[0];
        }
        retrieveSymbolicTensors(e) {
          let t = (0, f.JE)(null, e.length),
            s = e.length;
          for (let i of this.layers) {
            let n = Array.isArray(i.output) ? i.output : [i.output],
              r = n.map((e) => e.name);
            for (let i = 0; i < e.length; ++i) {
              let o = r.indexOf(e[i]);
              if ((-1 !== o && ((t[i] = n[o]), s--), 0 === s)) break;
            }
            if (0 === s) break;
          }
          if (s > 0) {
            let s = [];
            throw (
              (t.forEach((t, i) => {
                null == t && s.push(e[i]);
              }),
              new o.nu(
                `Cannot find SymbolicTensors for output name(s): ${JSON.stringify(
                  s
                )}`
              ))
            );
          }
          return t;
        }
        predictLoop(e, t = 32, s = !1) {
          return i.lub(() => {
            let n = this.checkNumSamples(e);
            if (s)
              throw new o.nj("Verbose predictLoop() is not implemented yet.");
            let r = (0, $.R_)(n, t),
              l = this.outputs.map((e) => []);
            for (let t = 0; t < r.length; ++t)
              i.lub(() => {
                let s = r[t][0],
                  i = r[t][1],
                  n = (0, $.sf)(e, s, i),
                  o = [];
                if (Array.isArray(n))
                  for (let e = 0; e < n.length; ++e)
                    o.push({ key: this.inputs[e], value: n[e] });
                else o.push({ key: this.inputs[0], value: n });
                let l = new w.l2(o);
                return (0, w.ht)(this.outputs, l);
              }).forEach((e, t) => l[t].push(e));
            return (0, f.Bq)(l.map((e) => i.zoF(e, 0)));
          });
        }
        predict(e, t = {}) {
          let s = (0, $.YV)(e);
          v(s, this.inputNames, this.feedInputShapes, !1);
          try {
            let e = null == t.batchSize ? 32 : t.batchSize;
            return (0, $.fQ)(e), this.predictLoop(s, e);
          } finally {
            (0, $.kS)(s, e);
          }
        }
        predictOnBatch(e) {
          v(e, this.inputNames, this.feedInputShapes, !0);
          let t = (Array.isArray(e) ? e[0] : e).shape[0];
          return this.predictLoop(e, t);
        }
        standardizeUserDataXY(e, t, s = !0, n) {
          if (null == this.optimizer_)
            throw new o.LH(
              "You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs)."
            );
          let r = [];
          for (let e = 0; e < this.feedOutputShapes.length; ++e) {
            let t = this.feedOutputShapes[e];
            this.feedLossFns[e] === a.KM
              ? r.push(t.slice(0, t.length - 1).concat([1]))
              : r.push(t);
          }
          if (
            ((e = A(e, this.feedInputNames, this.feedInputShapes, !1, "input")),
            (t = A(t, this.feedOutputNames, r, !1, "target")),
            !(function (e, t, s) {
              let n = (0, f.Tw)(e.map((e) => e.shape[0]));
              n.sort();
              let r = (0, f.Tw)(t.map((e) => e.shape[0]));
              if ((r.sort(), n.length > 1))
                throw new o.nu(
                  `All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(
                    e.map((e) => e.shape)
                  )}`
                );
              if (r.length > 1)
                throw new o.nu(
                  `All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(
                    t.map((e) => e.shape)
                  )}`
                );
              if (n.length > 0 && r.length > 0 && !i.D5U.arraysEqual(n, r))
                throw new o.nu(
                  `Input Tensors should have the same number of samples as target Tensors. Found ${n[0]} input sample(s) and ${r[0]} target sample(s).`
                );
            })(e, t, 0),
            !(function (e, t, s) {
              let i = [a.FD, a.fO, a.uq];
              for (let n = 0; n < e.length; ++n) {
                let r = e[n],
                  l = t[n],
                  h = s[n];
                if (null != l) {
                  if (l === a.uq && 1 === r.shape[r.shape.length - 1])
                    throw new o.nu(
                      `You are passing a target array of shape ${r.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`
                    );
                  if (-1 !== i.indexOf(l)) {
                    let e = r.shape.slice(1),
                      t = h.slice(1);
                    for (let s = 0; s < e.length; ++s) {
                      let i = e[s],
                        n = t[s];
                      if (null != n && i !== n)
                        throw new o.nu(
                          `A target Tensor with shape ${r.shape} was passed for an output of shape ${h}, while using a loss function that expects targets to have the same shape as the output.`
                        );
                    }
                  }
                }
              }
            })(t, this.feedLossFns, this.feedOutputShapes),
            this.stateful && null != n && n > 0 && e[0].shape[0] % n != 0)
          )
            throw new o.nu(
              `In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${n}. Found: ${e[0].shape[0]} sample(s).`
            );
          return [e, t];
        }
        async standardizeUserData(e, t, s, i, n = !0, r) {
          let [o, l] = this.standardizeUserDataXY(e, t, n, r);
          if (null != s) throw Error("sample weight is not supported yet.");
          let a = null;
          if (null != i) {
            let e = (0, T.Vf)(i, this.outputNames);
            a = [];
            for (let t = 0; t < e.length; ++t)
              a.push(await (0, T.tl)(l[t], null, e[t]));
          }
          return [o, l, a];
        }
        testLoop(e, t, s, r = 0, l) {
          return i.lub(() => {
            let a = this.checkNumSamples(t, s, l, "steps"),
              h = [];
            if (r > 0) throw new o.nj("Verbose mode is not implemented yet.");
            if (null != l)
              throw new o.nj("steps mode in testLoop() is not implemented yet");
            {
              let r = (0, $.R_)(a, s),
                o = (0, i.RRF)((0, d.w6)(0, a));
              for (let s = 0; s < r.length; ++s) {
                let l = r[s][0],
                  a = r[s][1],
                  u = n.c9(o, l, a - l),
                  p = e((0, $.YX)(t, u));
                if (0 === s)
                  for (let e = 0; e < p.length; ++e) h.push((0, i.iD$)(0));
                for (let e = 0; e < p.length; ++e) {
                  let t = p[e];
                  h[e] = i.IHx(h[e], i.dC7(a - l, t));
                }
              }
              for (let e = 0; e < h.length; ++e) h[e] = i.hiC(h[e], a);
            }
            return h;
          });
        }
        getDedupedMetricsNames() {
          let e = this.metricsNames,
            t = [];
          for (let s = 0; s < e.length; ++s) {
            let i = e[s],
              n = i;
            if ((0, f.QX)(e, i) > 1) {
              let t = (0, f.QX)(e.slice(0, s), i);
              n += `_${t}`;
            }
            t.push(n);
          }
          return t;
        }
        makeTrainFunction() {
          return (e) => {
            let t = [],
              s = e.slice(0, this.inputs.length),
              n = e.slice(
                this.inputs.length,
                this.inputs.length + this.outputs.length
              ),
              r = e.slice(
                this.inputs.length + this.outputs.length,
                this.inputs.length + 2 * this.outputs.length
              ),
              o = [],
              l = this.collectedTrainableWeights.map((e) => e.read());
            return [
              this.optimizer_.minimize(
                () => {
                  let e;
                  let l = [];
                  for (let e = 0; e < this.inputs.length; ++e)
                    l.push({ key: this.inputs[e], value: s[e] });
                  let a = new w.l2(l),
                    h = (0, w.ht)(this.outputs, a, { training: !0 });
                  for (let s = 0; s < this.lossFunctions.length; ++s) {
                    let o = (0, this.lossFunctions[s])(n[s], h[s]);
                    null != r[s] && (o = (0, T.mo)(o, r[s]));
                    let l = i.J69(o);
                    t.push(l), (e = 0 === s ? o : i.IHx(e, o));
                  }
                  for (let e = 0; e < this.metricsTensors.length; ++e) {
                    let s;
                    if (this.outputs.length > 1 && e < this.outputs.length)
                      s = t[e];
                    else {
                      let t = this.metricsTensors[e][0],
                        r = this.metricsTensors[e][1];
                      s = i.J69(t(n[r], h[r]));
                    }
                    i.CnY(s), o.push(s);
                  }
                  return (
                    (e = i.J69(e)),
                    this.calculateLosses().forEach((t) => {
                      e = i.IHx(e, t);
                    }),
                    e
                  );
                },
                !0,
                l
              ),
            ].concat(o);
          };
        }
        makeTestFunction() {
          this.testFunction = (e) =>
            i.lub(() => {
              let t;
              let s = [],
                n = e.slice(0, this.inputs.length),
                r = e.slice(
                  this.inputs.length,
                  this.inputs.length + this.outputs.length
                ),
                o = [];
              for (let e = 0; e < this.inputs.length; ++e)
                o.push({ key: this.inputs[e], value: n[e] });
              let l = new w.l2(o),
                a = (0, w.ht)(this.outputs, l);
              for (let e = 0; e < this.lossFunctions.length; ++e) {
                let n = this.lossFunctions[e],
                  o = i.J69(n(r[e], a[e]));
                (t = 0 === e ? o : i.IHx(t, o)), s.push(t);
              }
              for (let e = 0; e < this.metricsTensors.length; ++e) {
                let t = this.metricsTensors[e][0],
                  n = this.metricsTensors[e][1],
                  o = i.J69(t(r[n], a[n]));
                s.push(o);
              }
              return s;
            });
        }
        async fit(e, t, s = {}) {
          return (0, $.uU)(this, e, t, s);
        }
        async fitDataset(e, t) {
          return (0, b.y)(this, e, t);
        }
        async trainOnBatch(e, t) {
          let s = await this.standardizeUserData(e, t),
            n = s[0],
            r = s[1],
            o = this.makeTrainFunction()(n.concat(r)),
            l = [];
          for (let e of o) {
            let t = await e.data();
            l.push(t[0]);
          }
          return i.B90(o), (0, $.kS)(s[0], e), (0, $.kS)(s[1], t), (0, f.Bq)(l);
        }
        getNamedWeights(e) {
          let t = [],
            s = null != e && e.trainableOnly,
            i = s ? this.trainableWeights : this.weights,
            n = this.getWeights(s);
          for (let e = 0; e < i.length; ++e)
            (!s || i[e].trainable) &&
              t.push({ name: i[e].originalName, tensor: n[e] });
          return t;
        }
        set stopTraining(e) {
          this.stopTraining_ = e;
        }
        get stopTraining() {
          return this.stopTraining_;
        }
        get optimizer() {
          return this.optimizer_;
        }
        set optimizer(e) {
          this.optimizer_ !== e &&
            ((this.optimizer_ = e), (this.isOptimizerOwned = !1));
        }
        dispose() {
          let e = super.dispose();
          if (
            0 === e.refCountAfterDispose &&
            null != this.optimizer &&
            this.isOptimizerOwned
          ) {
            let t = i.sq6().numTensors;
            this.optimizer_.dispose(),
              (e.numDisposedVariables += t - i.sq6().numTensors);
          }
          return e;
        }
        getLossIdentifiers() {
          let e;
          if ("string" == typeof this.loss) e = (0, f.D1)(this.loss);
          else if (Array.isArray(this.loss)) {
            for (let e of this.loss)
              if ("string" != typeof e)
                throw Error(
                  "Serialization of non-string loss is not supported."
                );
            e = this.loss.map((e) => (0, f.D1)(e));
          } else {
            let t = Object.keys(this.loss);
            e = {};
            let s = this.loss;
            for (let i of t)
              if ("string" == typeof s[i]) e[i] = (0, f.D1)(s[i]);
              else
                throw Error(
                  "Serialization of non-string loss is not supported."
                );
          }
          return e;
        }
        getMetricIdentifiers() {
          if (
            "string" == typeof this.metrics ||
            "function" == typeof this.metrics
          )
            return [(0, f.D1)(h.aI(this.metrics))];
          if (Array.isArray(this.metrics))
            return this.metrics.map((e) => (0, f.D1)(h.aI(e)));
          {
            let e = {};
            for (let t in this.metrics) e[t] = (0, f.D1)(h.aI(this.metrics[t]));
            return e;
          }
        }
        getTrainingConfig() {
          return {
            loss: this.getLossIdentifiers(),
            metrics: this.getMetricIdentifiers(),
            optimizer_config: {
              class_name: this.optimizer.getClassName(),
              config: this.optimizer.getConfig(),
            },
          };
        }
        loadTrainingConfig(e) {
          let t, s;
          if (null != e.weighted_metrics)
            throw Error("Loading weight_metrics is not supported yet.");
          if (null != e.loss_weights)
            throw Error("Loading loss_weights is not supported yet.");
          if (null != e.sample_weight_mode)
            throw Error("Loading sample_weight_mode is not supported yet.");
          let i = (0, g.a)(e.optimizer_config),
            n = (0, l.v)(i);
          if ("string" == typeof e.loss) t = (0, f.zW)(e.loss);
          else if (Array.isArray(e.loss)) t = e.loss.map((e) => (0, f.zW)(e));
          else if (null != e.loss)
            for (let s in ((t = {}), e.loss)) t[s] = (0, f.zW)(e.loss[s]);
          if (Array.isArray(e.metrics)) s = e.metrics.map((e) => (0, f.zW)(e));
          else if (null != e.metrics)
            for (let t in ((s = {}), e.metrics)) s[t] = (0, f.zW)(e.metrics[t]);
          this.compile({ loss: t, metrics: s, optimizer: n });
        }
        async save(e, t) {
          if ("string" == typeof e) {
            let t = i.io.getSaveHandlers(e);
            if (0 === t.length)
              throw new o.nu(`Cannot find any save handlers for URL '${e}'`);
            if (t.length > 1)
              throw new o.nu(
                `Found more than one (${t.length}) save handlers for URL '${e}'`
              );
            e = t[0];
          }
          if (null == e.save)
            throw new o.nu(
              "LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined."
            );
          let s = await i.io.encodeWeights(this.getNamedWeights(t)),
            n = {
              modelTopology: this.toJSON(null, !1),
              format: "layers-model",
              generatedBy: `TensorFlow.js tfjs-layers v${m.i}`,
              convertedBy: null,
            };
          if (null != t && t.includeOptimizer && null != this.optimizer) {
            n.trainingConfig = this.getTrainingConfig();
            let { data: e, specs: t } = await i.io.encodeWeights(
              await this.optimizer.getWeights(),
              "optimizer"
            );
            s.specs.push(...t),
              (s.data = i.io.concatenateArrayBuffers([s.data, e]));
          }
          return (
            null != this.userDefinedMetadata &&
              ((0, p.WE)(this.userDefinedMetadata, this.name, !0),
              (n.userDefinedMetadata = this.userDefinedMetadata)),
            (n.weightData = s.data),
            (n.weightSpecs = s.specs),
            e.save(n)
          );
        }
        setUserDefinedMetadata(e) {
          (0, p.WE)(e, this.name), (this.userDefinedMetadata = e);
        }
        getUserDefinedMetadata() {
          return this.userDefinedMetadata;
        }
      }
      (N.className = "Model"), i.m7h.registerClass(N);
      class x extends N {}
      (x.className = "Functional"), i.m7h.registerClass(x);
    },
  },
]);
//# sourceMappingURL=adb5c70d.c9cf6b7f26122a2d.js.map
