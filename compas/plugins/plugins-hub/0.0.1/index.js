var Ci = Object.defineProperty;
var mr = (e) => {
  throw TypeError(e);
};
var xi = (e, t, n) => t in e ? Ci(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Te = (e, t, n) => xi(e, typeof t != "symbol" ? t + "" : t, n), Fn = (e, t, n) => t.has(e) || mr("Cannot " + n);
var a = (e, t, n) => (Fn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), C = (e, t, n) => t.has(e) ? mr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), T = (e, t, n, r) => (Fn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), M = (e, t, n) => (Fn(e, t, "access private method"), n);
const J = Symbol(), Fr = "http://www.w3.org/1999/xhtml", Ti = !1;
var ir = Array.isArray, Ii = Array.prototype.indexOf, Ft = Array.prototype.includes, Pn = Array.from, Li = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, Pi = Object.getOwnPropertyDescriptors, Di = Object.prototype, Ni = Array.prototype, qr = Object.getPrototypeOf, wr = Object.isExtensible;
const Ri = () => {
};
function Vi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function jr() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const ne = 2, qt = 4, Dn = 8, Ur = 1 << 24, je = 16, De = 32, lt = 64, zn = 128, Se = 512, X = 1024, $ = 2048, Ue = 4096, ae = 8192, ke = 16384, Tt = 32768, br = 1 << 25, jt = 65536, Wn = 1 << 17, Oi = 1 << 18, zt = 1 << 19, Mi = 1 << 20, qe = 1 << 25, At = 65536, Yn = 1 << 21, $t = 1 << 22, it = 1 << 23, Xt = Symbol("$state"), Fi = Symbol(""), ze = new class extends Error {
  constructor() {
    super(...arguments);
    Te(this, "name", "StaleReactionError");
    Te(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function qi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ji(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ui(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Hi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Bi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function zi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Wi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Yi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Gi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ki() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Xi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ji() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Zi() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Hr(e) {
  return e === this.v;
}
function Qi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Br(e) {
  return !Qi(e, this.v);
}
let $i = !1, Ce = null;
function Ut(e) {
  Ce = e;
}
function un(e, t = !1, n) {
  Ce = {
    p: Ce,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      P
    ),
    l: null
  };
}
function fn(e) {
  var t = (
    /** @type {ComponentContext} */
    Ce
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ui(r);
  }
  return t.i = !0, Ce = t.p, /** @type {T} */
  {};
}
function zr() {
  return !0;
}
let dt = [];
function Wr() {
  var e = dt;
  dt = [], Vi(e);
}
function st(e) {
  if (dt.length === 0 && !Jt) {
    var t = dt;
    queueMicrotask(() => {
      t === dt && Wr();
    });
  }
  dt.push(e);
}
function es() {
  for (; dt.length > 0; )
    Wr();
}
function Yr(e) {
  var t = P;
  if (t === null)
    return L.f |= it, e;
  if (!(t.f & Tt) && !(t.f & qt))
    throw e;
  nt(e, t);
}
function nt(e, t) {
  for (; t !== null; ) {
    if (t.f & zn) {
      if (!(t.f & Tt))
        throw e;
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    }
    t = t.parent;
  }
  throw e;
}
const ts = -7169;
function B(e, t) {
  e.f = e.f & ts | t;
}
function sr(e) {
  e.f & Se || e.deps === null ? B(e, X) : B(e, Ue);
}
function Gr(e) {
  if (e !== null)
    for (const t of e)
      !(t.f & ne) || !(t.f & At) || (t.f ^= At, Gr(
        /** @type {Derived} */
        t.deps
      ));
}
function Kr(e, t, n) {
  e.f & $ ? t.add(e) : e.f & Ue && n.add(e), Gr(e.deps), B(e, X);
}
const vt = /* @__PURE__ */ new Set();
let y = null, Q = null, Gn = null, Jt = !1, qn = !1, Lt = null, pn = null;
var yr = 0;
let ns = 1;
var Dt, Nt, gt, We, Oe, nn, he, rn, et, Ye, Me, Rt, Vt, mt, G, gn, Xr, mn, Kn, wn, rs;
const Tn = class Tn {
  constructor() {
    C(this, G);
    Te(this, "id", ns++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Te(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Te(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    C(this, Dt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    C(this, Nt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    C(this, gt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    C(this, We, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    C(this, Oe, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    C(this, nn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    C(this, he, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    C(this, rn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    C(this, et, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    C(this, Ye, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    C(this, Me, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    C(this, Rt, /* @__PURE__ */ new Set());
    Te(this, "is_fork", !1);
    C(this, Vt, !1);
    /** @type {Set<Batch>} */
    C(this, mt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, Me).has(t) || a(this, Me).set(t, { d: [], m: [] }), a(this, Rt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = a(this, Me).get(t);
    if (r) {
      a(this, Me).delete(t);
      for (var i of r.d)
        B(i, $), n(i);
      for (i of r.m)
        B(i, Ue), n(i);
    }
    a(this, Rt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== J && !this.previous.has(t) && this.previous.set(t, t.v), t.f & it || (this.current.set(t, [n, r]), Q == null || Q.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    y = this;
  }
  deactivate() {
    y = null, Q = null;
  }
  flush() {
    try {
      qn = !0, y = this, M(this, G, mn).call(this);
    } finally {
      yr = 0, Gn = null, Lt = null, pn = null, qn = !1, y = null, Q = null, Et.clear();
    }
  }
  discard() {
    for (const t of a(this, Nt)) t(this);
    a(this, Nt).clear(), a(this, gt).clear(), vt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    a(this, rn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = a(this, We).get(n) ?? 0;
    if (a(this, We).set(n, r + 1), t) {
      let i = a(this, Oe).get(n) ?? 0;
      a(this, Oe).set(n, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let i = a(this, We).get(n) ?? 0;
    if (i === 1 ? a(this, We).delete(n) : a(this, We).set(n, i - 1), t) {
      let s = a(this, Oe).get(n) ?? 0;
      s === 1 ? a(this, Oe).delete(n) : a(this, Oe).set(n, s - 1);
    }
    a(this, Vt) || r || (T(this, Vt, !0), st(() => {
      T(this, Vt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      a(this, et).add(r);
    for (const r of n)
      a(this, Ye).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    a(this, Dt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    a(this, Nt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    a(this, gt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of a(this, gt)) t(this);
    a(this, gt).clear();
  }
  settled() {
    return (a(this, nn) ?? T(this, nn, jr())).promise;
  }
  static ensure() {
    if (y === null) {
      const t = y = new Tn();
      qn || (vt.add(y), Jt || st(() => {
        y === t && t.flush();
      }));
    }
    return y;
  }
  apply() {
    {
      Q = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (Gn = t, (i = t.b) != null && i.is_pending && t.f & (qt | Dn | Ur) && !(t.f & Tt)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Lt !== null && n === P && (L === null || !(L.f & ne)))
        return;
      if (r & (lt | De)) {
        if (!(r & X))
          return;
        n.f ^= X;
      }
    }
    a(this, he).push(n);
  }
};
Dt = new WeakMap(), Nt = new WeakMap(), gt = new WeakMap(), We = new WeakMap(), Oe = new WeakMap(), nn = new WeakMap(), he = new WeakMap(), rn = new WeakMap(), et = new WeakMap(), Ye = new WeakMap(), Me = new WeakMap(), Rt = new WeakMap(), Vt = new WeakMap(), mt = new WeakMap(), G = new WeakSet(), gn = function() {
  return this.is_fork || a(this, Oe).size > 0;
}, Xr = function() {
  for (const r of a(this, mt))
    for (const i of a(r, Oe).keys()) {
      for (var t = !1, n = i; n.parent !== null; ) {
        if (a(this, Me).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, mn = function() {
  var u, o;
  if (yr++ > 1e3 && (vt.delete(this), ss()), !M(this, G, gn).call(this)) {
    for (const f of a(this, et))
      a(this, Ye).delete(f), B(f, $), this.schedule(f);
    for (const f of a(this, Ye))
      B(f, Ue), this.schedule(f);
  }
  const t = a(this, he);
  T(this, he, []), this.apply();
  var n = Lt = [], r = [], i = pn = [];
  for (const f of t)
    try {
      M(this, G, Kn).call(this, f, n, r);
    } catch (c) {
      throw Qr(f), c;
    }
  if (y = null, i.length > 0) {
    var s = Tn.ensure();
    for (const f of i)
      s.schedule(f);
  }
  if (Lt = null, pn = null, M(this, G, gn).call(this) || M(this, G, Xr).call(this)) {
    M(this, G, wn).call(this, r), M(this, G, wn).call(this, n);
    for (const [f, c] of a(this, Me))
      Zr(f, c);
  } else {
    a(this, We).size === 0 && vt.delete(this), a(this, et).clear(), a(this, Ye).clear();
    for (const f of a(this, Dt)) f(this);
    a(this, Dt).clear(), Er(r), Er(n), (u = a(this, nn)) == null || u.resolve();
  }
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    y
  );
  if (a(this, he).length > 0) {
    const f = l ?? (l = this);
    a(f, he).push(...a(this, he).filter((c) => !a(f, he).includes(c)));
  }
  l !== null && (vt.add(l), M(o = l, G, mn).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Kn = function(t, n, r) {
  t.f ^= X;
  for (var i = t.first; i !== null; ) {
    var s = i.f, l = (s & (De | lt)) !== 0, u = l && (s & X) !== 0, o = u || (s & ae) !== 0 || a(this, Me).has(i);
    if (!o && i.fn !== null) {
      l ? i.f ^= X : s & qt ? n.push(i) : vn(i) && (s & je && a(this, Ye).add(i), Bt(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    for (; i !== null; ) {
      var c = i.next;
      if (c !== null) {
        i = c;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
wn = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Kr(t[n], a(this, et), a(this, Ye));
}, rs = function() {
  var c, m, h;
  for (const _ of vt) {
    var t = _.id < this.id, n = [];
    for (const [v, [w, d]] of this.current) {
      if (_.current.has(v)) {
        var r = (
          /** @type {[any, boolean]} */
          _.current.get(v)[0]
        );
        if (t && w !== r)
          _.current.set(v, [w, d]);
        else
          continue;
      }
      n.push(v);
    }
    var i = [..._.current.keys()].filter((v) => !this.current.has(v));
    if (i.length === 0)
      t && _.discard();
    else if (n.length > 0) {
      if (t)
        for (const v of a(this, Rt))
          _.unskip_effect(v, (w) => {
            var d;
            w.f & (je | $t) ? _.schedule(w) : M(d = _, G, wn).call(d, [w]);
          });
      _.activate();
      var s = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
      for (var u of n)
        Jr(u, i, s, l);
      l = /* @__PURE__ */ new Map();
      var o = [..._.current.keys()].filter(
        (v) => this.current.has(v) ? (
          /** @type {[any, boolean]} */
          this.current.get(v)[0] !== v
        ) : !0
      );
      for (const v of a(this, rn))
        !(v.f & (ke | ae | Wn)) && lr(v, o, l) && (v.f & ($t | je) ? (B(v, $), _.schedule(v)) : a(_, et).add(v));
      if (a(_, he).length > 0) {
        _.apply();
        for (var f of a(_, he))
          M(c = _, G, Kn).call(c, f, [], []);
        T(_, he, []);
      }
      _.deactivate();
    }
  }
  for (const _ of vt)
    a(_, mt).has(this) && (a(_, mt).delete(this), a(_, mt).size === 0 && !M(m = _, G, gn).call(m) && (_.activate(), M(h = _, G, mn).call(h)));
};
let Ct = Tn;
function is(e) {
  var t = Jt;
  Jt = !0;
  try {
    for (var n; ; ) {
      if (es(), y === null)
        return (
          /** @type {T} */
          n
        );
      y.flush();
    }
  } finally {
    Jt = t;
  }
}
function ss() {
  try {
    zi();
  } catch (e) {
    nt(e, Gn);
  }
}
let Ie = null;
function Er(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (ke | ae)) && vn(r) && (Ie = /* @__PURE__ */ new Set(), Bt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && vi(r), (Ie == null ? void 0 : Ie.size) > 0)) {
        Et.clear();
        for (const i of Ie) {
          if (i.f & (ke | ae)) continue;
          const s = [i];
          let l = i.parent;
          for (; l !== null; )
            Ie.has(l) && (Ie.delete(l), s.push(l)), l = l.parent;
          for (let u = s.length - 1; u >= 0; u--) {
            const o = s[u];
            o.f & (ke | ae) || Bt(o);
          }
        }
        Ie.clear();
      }
    }
    Ie = null;
  }
}
function Jr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      s & ne ? Jr(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : s & ($t | je) && !(s & $) && lr(i, t, r) && (B(i, $), ar(
        /** @type {Effect} */
        i
      ));
    }
}
function lr(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Ft.call(t, i))
        return !0;
      if (i.f & ne && lr(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function ar(e) {
  y.schedule(e);
}
function Zr(e, t) {
  if (!(e.f & De && e.f & X)) {
    e.f & $ ? t.d.push(e) : e.f & Ue && t.m.push(e), B(e, X);
    for (var n = e.first; n !== null; )
      Zr(n, t), n = n.next;
  }
}
function Qr(e) {
  B(e, X);
  for (var t = e.first; t !== null; )
    Qr(t), t = t.next;
}
function ls(e) {
  let t = 0, n = xt(0), r;
  return () => {
    fr() && (p(n), fi(() => (t === 0 && (r = pr(() => e(() => Zt(n)))), t += 1, () => {
      st(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, Zt(n));
      });
    })));
  };
}
var as = jt | zt;
function os(e, t, n, r) {
  new us(e, t, n, r);
}
var we, rr, be, wt, fe, ye, ie, _e, Ge, bt, tt, Ot, sn, ln, Ke, In, U, fs, cs, vs, Xn, bn, yn, Jn, Zn;
class us {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    C(this, U);
    /** @type {Boundary | null} */
    Te(this, "parent");
    Te(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Te(this, "transform_error");
    /** @type {TemplateNode} */
    C(this, we);
    /** @type {TemplateNode | null} */
    C(this, rr, null);
    /** @type {BoundaryProps} */
    C(this, be);
    /** @type {((anchor: Node) => void)} */
    C(this, wt);
    /** @type {Effect} */
    C(this, fe);
    /** @type {Effect | null} */
    C(this, ye, null);
    /** @type {Effect | null} */
    C(this, ie, null);
    /** @type {Effect | null} */
    C(this, _e, null);
    /** @type {DocumentFragment | null} */
    C(this, Ge, null);
    C(this, bt, 0);
    C(this, tt, 0);
    C(this, Ot, !1);
    /** @type {Set<Effect>} */
    C(this, sn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    C(this, ln, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    C(this, Ke, null);
    C(this, In, ls(() => (T(this, Ke, xt(a(this, bt))), () => {
      T(this, Ke, null);
    })));
    var s;
    T(this, we, t), T(this, be, n), T(this, wt, (l) => {
      var u = (
        /** @type {Effect} */
        P
      );
      u.b = this, u.f |= zn, r(l);
    }), this.parent = /** @type {Effect} */
    P.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((l) => l), T(this, fe, vr(() => {
      M(this, U, Xn).call(this);
    }, as));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Kr(t, a(this, sn), a(this, ln));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!a(this, be).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    M(this, U, Jn).call(this, t, n), T(this, bt, a(this, bt) + t), !(!a(this, Ke) || a(this, Ot)) && (T(this, Ot, !0), st(() => {
      T(this, Ot, !1), a(this, Ke) && Ht(a(this, Ke), a(this, bt));
    }));
  }
  get_effect_pending() {
    return a(this, In).call(this), p(
      /** @type {Source<number>} */
      a(this, Ke)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!a(this, be).onerror && !a(this, be).failed)
      throw t;
    y != null && y.is_fork ? (a(this, ye) && y.skip_effect(a(this, ye)), a(this, ie) && y.skip_effect(a(this, ie)), a(this, _e) && y.skip_effect(a(this, _e)), y.on_fork_commit(() => {
      M(this, U, Zn).call(this, t);
    })) : M(this, U, Zn).call(this, t);
  }
}
we = new WeakMap(), rr = new WeakMap(), be = new WeakMap(), wt = new WeakMap(), fe = new WeakMap(), ye = new WeakMap(), ie = new WeakMap(), _e = new WeakMap(), Ge = new WeakMap(), bt = new WeakMap(), tt = new WeakMap(), Ot = new WeakMap(), sn = new WeakMap(), ln = new WeakMap(), Ke = new WeakMap(), In = new WeakMap(), U = new WeakSet(), fs = function() {
  try {
    T(this, ye, Ee(() => a(this, wt).call(this, a(this, we))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
cs = function(t) {
  const n = a(this, be).failed;
  n && T(this, _e, Ee(() => {
    n(
      a(this, we),
      () => t,
      () => () => {
      }
    );
  }));
}, vs = function() {
  const t = a(this, be).pending;
  t && (this.is_pending = !0, T(this, ie, Ee(() => t(a(this, we)))), st(() => {
    var n = T(this, Ge, document.createDocumentFragment()), r = Je();
    n.append(r), T(this, ye, M(this, U, yn).call(this, () => Ee(() => a(this, wt).call(this, r)))), a(this, tt) === 0 && (a(this, we).before(n), T(this, Ge, null), St(
      /** @type {Effect} */
      a(this, ie),
      () => {
        T(this, ie, null);
      }
    ), M(this, U, bn).call(
      this,
      /** @type {Batch} */
      y
    ));
  }));
}, Xn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), T(this, tt, 0), T(this, bt, 0), T(this, ye, Ee(() => {
      a(this, wt).call(this, a(this, we));
    })), a(this, tt) > 0) {
      var t = T(this, Ge, document.createDocumentFragment());
      _r(a(this, ye), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        a(this, be).pending
      );
      T(this, ie, Ee(() => n(a(this, we))));
    } else
      M(this, U, bn).call(
        this,
        /** @type {Batch} */
        y
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
bn = function(t) {
  this.is_pending = !1, t.transfer_effects(a(this, sn), a(this, ln));
}, /**
 * @template T
 * @param {() => T} fn
 */
yn = function(t) {
  var n = P, r = L, i = Ce;
  He(a(this, fe)), xe(a(this, fe)), Ut(a(this, fe).ctx);
  try {
    return Ct.ensure(), t();
  } catch (s) {
    return Yr(s), null;
  } finally {
    He(n), xe(r), Ut(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Jn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && M(r = this.parent, U, Jn).call(r, t, n);
    return;
  }
  T(this, tt, a(this, tt) + t), a(this, tt) === 0 && (M(this, U, bn).call(this, n), a(this, ie) && St(a(this, ie), () => {
    T(this, ie, null);
  }), a(this, Ge) && (a(this, we).before(a(this, Ge)), T(this, Ge, null)));
}, /**
 * @param {unknown} error
 */
Zn = function(t) {
  a(this, ye) && (ve(a(this, ye)), T(this, ye, null)), a(this, ie) && (ve(a(this, ie)), T(this, ie, null)), a(this, _e) && (ve(a(this, _e)), T(this, _e, null));
  var n = a(this, be).onerror;
  let r = a(this, be).failed;
  var i = !1, s = !1;
  const l = () => {
    if (i) {
      Zi();
      return;
    }
    i = !0, s && Ki(), a(this, _e) !== null && St(a(this, _e), () => {
      T(this, _e, null);
    }), M(this, U, yn).call(this, () => {
      M(this, U, Xn).call(this);
    });
  }, u = (o) => {
    try {
      s = !0, n == null || n(o, l), s = !1;
    } catch (f) {
      nt(f, a(this, fe) && a(this, fe).parent);
    }
    r && T(this, _e, M(this, U, yn).call(this, () => {
      try {
        return Ee(() => {
          var f = (
            /** @type {Effect} */
            P
          );
          f.b = this, f.f |= zn, r(
            a(this, we),
            () => o,
            () => l
          );
        });
      } catch (f) {
        return nt(
          f,
          /** @type {Effect} */
          a(this, fe).parent
        ), null;
      }
    }));
  };
  st(() => {
    var o;
    try {
      o = this.transform_error(t);
    } catch (f) {
      nt(f, a(this, fe) && a(this, fe).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      u,
      /** @param {unknown} e */
      (f) => nt(f, a(this, fe) && a(this, fe).parent)
    ) : u(o);
  });
};
function ds(e, t, n, r) {
  const i = or;
  var s = e.filter((h) => !h.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var l = (
    /** @type {Effect} */
    P
  ), u = hs(), o = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function f(h) {
    u();
    try {
      r(h);
    } catch (_) {
      l.f & ke || nt(_, l);
    }
    kn();
  }
  if (n.length === 0) {
    o.then(() => f(t.map(i)));
    return;
  }
  var c = $r();
  function m() {
    Promise.all(n.map((h) => /* @__PURE__ */ _s(h))).then((h) => f([...t.map(i), ...h])).catch((h) => nt(h, l)).finally(() => c());
  }
  o ? o.then(() => {
    u(), m(), kn();
  }) : m();
}
function hs() {
  var e = (
    /** @type {Effect} */
    P
  ), t = L, n = Ce, r = (
    /** @type {Batch} */
    y
  );
  return function(s = !0) {
    He(e), xe(t), Ut(n), s && !(e.f & ke) && (r == null || r.activate(), r == null || r.apply());
  };
}
function kn(e = !0) {
  He(null), xe(null), Ut(null), e && (y == null || y.deactivate());
}
function $r() {
  var e = (
    /** @type {Effect} */
    P
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    y
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (i = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function or(e) {
  var t = ne | $;
  return P !== null && (P.f |= zt), {
    ctx: Ce,
    deps: null,
    effects: null,
    equals: Hr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      J
    ),
    wv: 0,
    parent: P,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function _s(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    P
  );
  r === null && qi();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = xt(
    /** @type {V} */
    J
  ), l = !L, u = /* @__PURE__ */ new Map();
  return Ps(() => {
    var _;
    var o = (
      /** @type {Effect} */
      P
    ), f = jr();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(kn);
    } catch (v) {
      f.reject(v), kn();
    }
    var c = (
      /** @type {Batch} */
      y
    );
    if (l) {
      if (o.f & Tt)
        var m = $r();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        (_ = u.get(c)) == null || _.reject(ze), u.delete(c);
      else {
        for (const v of u.values())
          v.reject(ze);
        u.clear();
      }
      u.set(c, f);
    }
    const h = (v, w = void 0) => {
      if (m) {
        var d = w === ze;
        m(d);
      }
      if (!(w === ze || o.f & ke)) {
        if (c.activate(), w)
          s.f |= it, Ht(s, w);
        else {
          s.f & it && (s.f ^= it), Ht(s, v);
          for (const [E, R] of u) {
            if (u.delete(E), E === c) break;
            R.reject(ze);
          }
        }
        c.deactivate();
      }
    };
    f.promise.then(h, (v) => h(null, v || "unknown"));
  }), cr(() => {
    for (const o of u.values())
      o.reject(ze);
  }), new Promise((o) => {
    function f(c) {
      function m() {
        c === i ? o(s) : f(i);
      }
      c.then(m, m);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  const t = /* @__PURE__ */ or(e);
  return _i(t), t;
}
// @__NO_SIDE_EFFECTS__
function ps(e) {
  const t = /* @__PURE__ */ or(e);
  return t.equals = Br, t;
}
function gs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ve(
        /** @type {Effect} */
        t[n]
      );
  }
}
function ur(e) {
  var t, n = P, r = e.parent;
  if (!at && r !== null && r.f & (ke | ae))
    return Xi(), e.v;
  He(r);
  try {
    e.f &= ~At, gs(e), t = wi(e);
  } finally {
    He(n);
  }
  return t;
}
function ei(e) {
  var t = ur(e);
  if (!e.equals(t) && (e.wv = gi(), (!(y != null && y.is_fork) || e.deps === null) && (y !== null ? y.capture(e, t, !0) : e.v = t, e.deps === null))) {
    B(e, X);
    return;
  }
  at || (Q !== null ? (fr() || y != null && y.is_fork) && Q.set(e, t) : sr(e));
}
function ms(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(ze), r.teardown = Ri, r.ac = null, en(r, 0), dr(r));
}
function ti(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Bt(t);
}
let Qn = /* @__PURE__ */ new Set();
const Et = /* @__PURE__ */ new Map();
let ni = !1;
function xt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Hr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  const n = xt(e);
  return _i(n), n;
}
// @__NO_SIDE_EFFECTS__
function ws(e, t = !1, n = !0) {
  const r = xt(e);
  return t || (r.equals = Br), r;
}
function O(e, t, n = !1) {
  L !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Pe || L.f & Wn) && zr() && L.f & (ne | je | $t | Wn) && (Ae === null || !Ft.call(Ae, e)) && Gi();
  let r = n ? rt(t) : t;
  return Ht(e, r, pn);
}
function Ht(e, t, n = null) {
  if (!e.equals(t)) {
    Et.set(e, at ? t : e.v);
    var r = Ct.ensure();
    if (r.capture(e, t), e.f & ne) {
      const i = (
        /** @type {Derived} */
        e
      );
      e.f & $ && ur(i), Q === null && sr(i);
    }
    e.wv = gi(), ri(e, $, n), P !== null && P.f & X && !(P.f & (De | lt)) && (me === null ? Rs([e]) : me.push(e)), !r.is_fork && Qn.size > 0 && !ni && bs();
  }
  return t;
}
function bs() {
  ni = !1;
  for (const e of Qn)
    e.f & X && B(e, Ue), vn(e) && Bt(e);
  Qn.clear();
}
function Zt(e) {
  O(e, e.v + 1);
}
function ri(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = r.length, s = 0; s < i; s++) {
      var l = r[s], u = l.f, o = (u & $) === 0;
      if (o && B(l, t), u & ne) {
        var f = (
          /** @type {Derived} */
          l
        );
        Q == null || Q.delete(f), u & At || (u & Se && (l.f |= At), ri(f, Ue, n));
      } else if (o) {
        var c = (
          /** @type {Effect} */
          l
        );
        u & je && Ie !== null && Ie.add(c), n !== null ? n.push(c) : ar(c);
      }
    }
}
function rt(e) {
  if (typeof e != "object" || e === null || Xt in e)
    return e;
  const t = qr(e);
  if (t !== Di && t !== Ni)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ir(e), i = /* @__PURE__ */ te(0), s = kt, l = (u) => {
    if (kt === s)
      return u();
    var o = L, f = kt;
    xe(null), xr(s);
    var c = u();
    return xe(o), xr(f), c;
  };
  return r && n.set("length", /* @__PURE__ */ te(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, o, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Wi();
        var c = n.get(o);
        return c === void 0 ? l(() => {
          var m = /* @__PURE__ */ te(f.value);
          return n.set(o, m), m;
        }) : O(c, f.value, !0), !0;
      },
      deleteProperty(u, o) {
        var f = n.get(o);
        if (f === void 0) {
          if (o in u) {
            const c = l(() => /* @__PURE__ */ te(J));
            n.set(o, c), Zt(i);
          }
        } else
          O(f, J), Zt(i);
        return !0;
      },
      get(u, o, f) {
        var _;
        if (o === Xt)
          return e;
        var c = n.get(o), m = o in u;
        if (c === void 0 && (!m || (_ = Kt(u, o)) != null && _.writable) && (c = l(() => {
          var v = rt(m ? u[o] : J), w = /* @__PURE__ */ te(v);
          return w;
        }), n.set(o, c)), c !== void 0) {
          var h = p(c);
          return h === J ? void 0 : h;
        }
        return Reflect.get(u, o, f);
      },
      getOwnPropertyDescriptor(u, o) {
        var f = Reflect.getOwnPropertyDescriptor(u, o);
        if (f && "value" in f) {
          var c = n.get(o);
          c && (f.value = p(c));
        } else if (f === void 0) {
          var m = n.get(o), h = m == null ? void 0 : m.v;
          if (m !== void 0 && h !== J)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return f;
      },
      has(u, o) {
        var h;
        if (o === Xt)
          return !0;
        var f = n.get(o), c = f !== void 0 && f.v !== J || Reflect.has(u, o);
        if (f !== void 0 || P !== null && (!c || (h = Kt(u, o)) != null && h.writable)) {
          f === void 0 && (f = l(() => {
            var _ = c ? rt(u[o]) : J, v = /* @__PURE__ */ te(_);
            return v;
          }), n.set(o, f));
          var m = p(f);
          if (m === J)
            return !1;
        }
        return c;
      },
      set(u, o, f, c) {
        var D;
        var m = n.get(o), h = o in u;
        if (r && o === "length")
          for (var _ = f; _ < /** @type {Source<number>} */
          m.v; _ += 1) {
            var v = n.get(_ + "");
            v !== void 0 ? O(v, J) : _ in u && (v = l(() => /* @__PURE__ */ te(J)), n.set(_ + "", v));
          }
        if (m === void 0)
          (!h || (D = Kt(u, o)) != null && D.writable) && (m = l(() => /* @__PURE__ */ te(void 0)), O(m, rt(f)), n.set(o, m));
        else {
          h = m.v !== J;
          var w = l(() => rt(f));
          O(m, w);
        }
        var d = Reflect.getOwnPropertyDescriptor(u, o);
        if (d != null && d.set && d.set.call(c, f), !h) {
          if (r && typeof o == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), R = Number(o);
            Number.isInteger(R) && R >= E.v && O(E, R + 1);
          }
          Zt(i);
        }
        return !0;
      },
      ownKeys(u) {
        p(i);
        var o = Reflect.ownKeys(u).filter((m) => {
          var h = n.get(m);
          return h === void 0 || h.v !== J;
        });
        for (var [f, c] of n)
          c.v !== J && !(f in u) && o.push(f);
        return o;
      },
      setPrototypeOf() {
        Yi();
      }
    }
  );
}
function Sr(e) {
  try {
    if (e !== null && typeof e == "object" && Xt in e)
      return e[Xt];
  } catch {
  }
  return e;
}
function ys(e, t) {
  return Object.is(Sr(e), Sr(t));
}
var kr, ii, si, li;
function Es() {
  if (kr === void 0) {
    kr = window, ii = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    si = Kt(t, "firstChild").get, li = Kt(t, "nextSibling").get, wr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), wr(n) && (n.__t = void 0);
  }
}
function Je(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  return (
    /** @type {TemplateNode | null} */
    si.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
  return (
    /** @type {TemplateNode | null} */
    li.call(e)
  );
}
function S(e, t) {
  return /* @__PURE__ */ An(e);
}
function $n(e, t = !1) {
  {
    var n = /* @__PURE__ */ An(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ cn(n) : n;
  }
}
function x(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ cn(r);
  return r;
}
function Ss(e) {
  e.textContent = "";
}
function ai() {
  return !1;
}
function ks(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Fr, e, void 0)
  );
}
let Ar = !1;
function As() {
  Ar || (Ar = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Nn(e) {
  var t = L, n = P;
  xe(null), He(null);
  try {
    return e();
  } finally {
    xe(t), He(n);
  }
}
function oi(e, t, n, r = n) {
  e.addEventListener(t, () => Nn(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), As();
}
function Cs(e) {
  P === null && (L === null && Bi(), Hi()), at && Ui();
}
function xs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ze(e, t) {
  var n = P;
  n !== null && n.f & ae && (e |= ae);
  var r = {
    ctx: Ce,
    deps: null,
    nodes: null,
    f: e | $ | Se,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  y == null || y.register_created_effect(r);
  var i = r;
  if (e & qt)
    Lt !== null ? Lt.push(r) : Ct.ensure().schedule(r);
  else if (t !== null) {
    try {
      Bt(r);
    } catch (l) {
      throw ve(r), l;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    !(i.f & zt) && (i = i.first, e & je && e & jt && i !== null && (i.f |= jt));
  }
  if (i !== null && (i.parent = n, n !== null && xs(i, n), L !== null && L.f & ne && !(e & lt))) {
    var s = (
      /** @type {Derived} */
      L
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function fr() {
  return L !== null && !Pe;
}
function cr(e) {
  const t = Ze(Dn, null);
  return B(t, X), t.teardown = e, t;
}
function Ts(e) {
  Cs();
  var t = (
    /** @type {Effect} */
    P.f
  ), n = !L && (t & De) !== 0 && (t & Tt) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Ce
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return ui(e);
}
function ui(e) {
  return Ze(qt | Mi, e);
}
function Is(e) {
  Ct.ensure();
  const t = Ze(lt | zt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? St(t, () => {
      ve(t), r(void 0);
    }) : (ve(t), r(void 0));
  });
}
function Ls(e) {
  return Ze(qt, e);
}
function Ps(e) {
  return Ze($t | zt, e);
}
function fi(e, t = 0) {
  return Ze(Dn | t, e);
}
function se(e, t = [], n = [], r = []) {
  ds(r, t, n, (i) => {
    Ze(Dn, () => e(...i.map(p)));
  });
}
function vr(e, t = 0) {
  var n = Ze(je | t, e);
  return n;
}
function Ee(e) {
  return Ze(De | zt, e);
}
function ci(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = at, r = L;
    Cr(!0), xe(null);
    try {
      t.call(null);
    } finally {
      Cr(n), xe(r);
    }
  }
}
function dr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Nn(() => {
      i.abort(ze);
    });
    var r = n.next;
    n.f & lt ? n.parent = null : ve(n, t), n = r;
  }
}
function Ds(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & De || ve(t), t = n;
  }
}
function ve(e, t = !0) {
  var n = !1;
  (t || e.f & Oi) && e.nodes !== null && e.nodes.end !== null && (Ns(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), B(e, br), dr(e, t && !n), en(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  ci(e), e.f ^= br, e.f |= ke;
  var i = e.parent;
  i !== null && i.first !== null && vi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ns(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ cn(e);
    e.remove(), e = n;
  }
}
function vi(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function St(e, t, n = !0) {
  var r = [];
  di(e, r, !0);
  var i = () => {
    n && ve(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var l = () => --s || i();
    for (var u of r)
      u.out(l);
  } else
    i();
}
function di(e, t, n) {
  if (!(e.f & ae)) {
    e.f ^= ae;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const u of r)
        (u.is_global || n) && t.push(u);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if (!(i.f & lt)) {
        var l = (i.f & jt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & De) !== 0 && (e.f & je) !== 0;
        di(i, t, l ? n : !1);
      }
      i = s;
    }
  }
}
function hr(e) {
  hi(e, !0);
}
function hi(e, t) {
  if (e.f & ae) {
    e.f ^= ae, e.f & X || (B(e, $), Ct.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & jt) !== 0 || (n.f & De) !== 0;
      hi(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const l of s)
        (l.is_global || t) && l.in();
  }
}
function _r(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ cn(n);
      t.append(n), n = i;
    }
}
let En = !1, at = !1;
function Cr(e) {
  at = e;
}
let L = null, Pe = !1;
function xe(e) {
  L = e;
}
let P = null;
function He(e) {
  P = e;
}
let Ae = null;
function _i(e) {
  L !== null && (Ae === null ? Ae = [e] : Ae.push(e));
}
let ce = null, de = 0, me = null;
function Rs(e) {
  me = e;
}
let pi = 1, ht = 0, kt = ht;
function xr(e) {
  kt = e;
}
function gi() {
  return ++pi;
}
function vn(e) {
  var t = e.f;
  if (t & $)
    return !0;
  if (t & ne && (e.f &= ~At), t & Ue) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (vn(
        /** @type {Derived} */
        s
      ) && ei(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    t & Se && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Q === null && B(e, X);
  }
  return !1;
}
function mi(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Ae !== null && Ft.call(Ae, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      s.f & ne ? mi(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? B(s, $) : s.f & X && B(s, Ue), ar(
        /** @type {Effect} */
        s
      ));
    }
}
function wi(e) {
  var w;
  var t = ce, n = de, r = me, i = L, s = Ae, l = Ce, u = Pe, o = kt, f = e.f;
  ce = /** @type {null | Value[]} */
  null, de = 0, me = null, L = f & (De | lt) ? null : e, Ae = null, Ut(e.ctx), Pe = !1, kt = ++ht, e.ac !== null && (Nn(() => {
    e.ac.abort(ze);
  }), e.ac = null);
  try {
    e.f |= Yn;
    var c = (
      /** @type {Function} */
      e.fn
    ), m = c();
    e.f |= Tt;
    var h = e.deps, _ = y == null ? void 0 : y.is_fork;
    if (ce !== null) {
      var v;
      if (_ || en(e, de), h !== null && de > 0)
        for (h.length = de + ce.length, v = 0; v < ce.length; v++)
          h[de + v] = ce[v];
      else
        e.deps = h = ce;
      if (fr() && e.f & Se)
        for (v = de; v < h.length; v++)
          ((w = h[v]).reactions ?? (w.reactions = [])).push(e);
    } else !_ && h !== null && de < h.length && (en(e, de), h.length = de);
    if (zr() && me !== null && !Pe && h !== null && !(e.f & (ne | Ue | $)))
      for (v = 0; v < /** @type {Source[]} */
      me.length; v++)
        mi(
          me[v],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (ht++, i.deps !== null)
        for (let d = 0; d < n; d += 1)
          i.deps[d].rv = ht;
      if (t !== null)
        for (const d of t)
          d.rv = ht;
      me !== null && (r === null ? r = me : r.push(.../** @type {Source[]} */
      me));
    }
    return e.f & it && (e.f ^= it), m;
  } catch (d) {
    return Yr(d);
  } finally {
    e.f ^= Yn, ce = t, de = n, me = r, L = i, Ae = s, Ut(l), Pe = u, kt = o;
  }
}
function Vs(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ii.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && t.f & ne && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ce === null || !Ft.call(ce, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    s.f & Se && (s.f ^= Se, s.f &= ~At), s.v !== J && sr(s), ms(s), en(s, 0);
  }
}
function en(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Vs(e, n[r]);
}
function Bt(e) {
  var t = e.f;
  if (!(t & ke)) {
    B(e, X);
    var n = P, r = En;
    P = e, En = !0;
    try {
      t & (je | Ur) ? Ds(e) : dr(e), ci(e);
      var i = wi(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = pi;
      var s;
      Ti && $i && e.f & $ && e.deps;
    } finally {
      En = r, P = n;
    }
  }
}
async function Os() {
  await Promise.resolve(), is();
}
function p(e) {
  var t = e.f, n = (t & ne) !== 0;
  if (L !== null && !Pe) {
    var r = P !== null && (P.f & ke) !== 0;
    if (!r && (Ae === null || !Ft.call(Ae, e))) {
      var i = L.deps;
      if (L.f & Yn)
        e.rv < ht && (e.rv = ht, ce === null && i !== null && i[de] === e ? de++ : ce === null ? ce = [e] : ce.push(e));
      else {
        (L.deps ?? (L.deps = [])).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [L] : Ft.call(s, L) || s.push(L);
      }
    }
  }
  if (at && Et.has(e))
    return Et.get(e);
  if (n) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (at) {
      var u = l.v;
      return (!(l.f & X) && l.reactions !== null || yi(l)) && (u = ur(l)), Et.set(l, u), u;
    }
    var o = (l.f & Se) === 0 && !Pe && L !== null && (En || (L.f & Se) !== 0), f = (l.f & Tt) === 0;
    vn(l) && (o && (l.f |= Se), ei(l)), o && !f && (ti(l), bi(l));
  }
  if (Q != null && Q.has(e))
    return Q.get(e);
  if (e.f & it)
    throw e.v;
  return e.v;
}
function bi(e) {
  if (e.f |= Se, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), t.f & ne && !(t.f & Se) && (ti(
        /** @type {Derived} */
        t
      ), bi(
        /** @type {Derived} */
        t
      ));
}
function yi(e) {
  if (e.v === J) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Et.has(t) || t.f & ne && yi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function pr(e) {
  var t = Pe;
  try {
    return Pe = !0, e();
  } finally {
    Pe = t;
  }
}
const _t = Symbol("events"), Ei = /* @__PURE__ */ new Set(), er = /* @__PURE__ */ new Set();
function Ms(e, t, n, r = {}) {
  function i(s) {
    if (r.capture || tr.call(t, s), !s.cancelBubble)
      return Nn(() => n == null ? void 0 : n.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? st(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Fs(e, t, n, r, i) {
  var s = { capture: r, passive: i }, l = Ms(e, t, n, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && cr(() => {
    t.removeEventListener(e, l, s);
  });
}
function $e(e, t, n) {
  (t[_t] ?? (t[_t] = {}))[e] = n;
}
function Si(e) {
  for (var t = 0; t < e.length; t++)
    Ei.add(e[t]);
  for (var n of er)
    n(e);
}
let Tr = null;
function tr(e) {
  var d, E;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((d = e.composedPath) == null ? void 0 : d.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Tr = e;
  var l = 0, u = Tr === e && e[_t];
  if (u) {
    var o = i.indexOf(u);
    if (o !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[_t] = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    o <= f && (l = o);
  }
  if (s = /** @type {Element} */
  i[l] || e.target, s !== t) {
    Li(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var c = L, m = P;
    xe(null), He(null);
    try {
      for (var h, _ = []; s !== null; ) {
        var v = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var w = (E = s[_t]) == null ? void 0 : E[r];
          w != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && w.call(s, e);
        } catch (R) {
          h ? _.push(R) : h = R;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        s = v;
      }
      if (h) {
        for (let R of _)
          queueMicrotask(() => {
            throw R;
          });
        throw h;
      }
    } finally {
      e[_t] = t, delete e.currentTarget, xe(c), He(m);
    }
  }
}
var Or;
const jn = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Or = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Or.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function qs(e) {
  return (
    /** @type {string} */
    (jn == null ? void 0 : jn.createHTML(e)) ?? e
  );
}
function js(e) {
  var t = ks("template");
  return t.innerHTML = qs(e.replaceAll("<!>", "<!---->")), t.content;
}
function Cn(e, t) {
  var n = (
    /** @type {Effect} */
    P
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function z(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = js(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ An(i)));
    var l = (
      /** @type {TemplateNode} */
      r || ii ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ An(l)
      ), o = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Cn(u, o);
    } else
      Cn(l, l);
    return l;
  };
}
function Pt(e = "") {
  {
    var t = Je(e + "");
    return Cn(t, t), t;
  }
}
function Ir() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Je();
  return e.append(t, n), Cn(t, n), e;
}
function N(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Us = ["touchstart", "touchmove"];
function Hs(e) {
  return Us.includes(e);
}
function F(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function Bs(e, t) {
  return zs(e, t);
}
const _n = /* @__PURE__ */ new Map();
function zs(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: l = !0, transformError: u }) {
  Es();
  var o = void 0, f = Is(() => {
    var c = n ?? t.appendChild(Je());
    os(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (_) => {
        un({});
        var v = (
          /** @type {ComponentContext} */
          Ce
        );
        s && (v.c = s), i && (r.$$events = i), o = e(_, r) || {}, fn();
      },
      u
    );
    var m = /* @__PURE__ */ new Set(), h = (_) => {
      for (var v = 0; v < _.length; v++) {
        var w = _[v];
        if (!m.has(w)) {
          m.add(w);
          var d = Hs(w);
          for (const D of [t, document]) {
            var E = _n.get(D);
            E === void 0 && (E = /* @__PURE__ */ new Map(), _n.set(D, E));
            var R = E.get(w);
            R === void 0 ? (D.addEventListener(w, tr, { passive: d }), E.set(w, 1)) : E.set(w, R + 1);
          }
        }
      }
    };
    return h(Pn(Ei)), er.add(h), () => {
      var d;
      for (var _ of m)
        for (const E of [t, document]) {
          var v = (
            /** @type {Map<string, number>} */
            _n.get(E)
          ), w = (
            /** @type {number} */
            v.get(_)
          );
          --w == 0 ? (E.removeEventListener(_, tr), v.delete(_), v.size === 0 && _n.delete(E)) : v.set(_, w);
        }
      er.delete(h), c !== n && ((d = c.parentNode) == null || d.removeChild(c));
    };
  });
  return Ws.set(o, f), o;
}
let Ws = /* @__PURE__ */ new WeakMap();
var Le, Fe, pe, yt, an, on, Ln;
class Ys {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Te(this, "anchor");
    /** @type {Map<Batch, Key>} */
    C(this, Le, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    C(this, Fe, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    C(this, pe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    C(this, yt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    C(this, an, !0);
    /**
     * @param {Batch} batch
     */
    C(this, on, (t) => {
      if (a(this, Le).has(t)) {
        var n = (
          /** @type {Key} */
          a(this, Le).get(t)
        ), r = a(this, Fe).get(n);
        if (r)
          hr(r), a(this, yt).delete(n);
        else {
          var i = a(this, pe).get(n);
          i && (a(this, Fe).set(n, i.effect), a(this, pe).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, l] of a(this, Le)) {
          if (a(this, Le).delete(s), s === t)
            break;
          const u = a(this, pe).get(l);
          u && (ve(u.effect), a(this, pe).delete(l));
        }
        for (const [s, l] of a(this, Fe)) {
          if (s === n || a(this, yt).has(s)) continue;
          const u = () => {
            if (Array.from(a(this, Le).values()).includes(s)) {
              var f = document.createDocumentFragment();
              _r(l, f), f.append(Je()), a(this, pe).set(s, { effect: l, fragment: f });
            } else
              ve(l);
            a(this, yt).delete(s), a(this, Fe).delete(s);
          };
          a(this, an) || !r ? (a(this, yt).add(s), St(l, u, !1)) : u();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    C(this, Ln, (t) => {
      a(this, Le).delete(t);
      const n = Array.from(a(this, Le).values());
      for (const [r, i] of a(this, pe))
        n.includes(r) || (ve(i.effect), a(this, pe).delete(r));
    });
    this.anchor = t, T(this, an, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      y
    ), i = ai();
    if (n && !a(this, Fe).has(t) && !a(this, pe).has(t))
      if (i) {
        var s = document.createDocumentFragment(), l = Je();
        s.append(l), a(this, pe).set(t, {
          effect: Ee(() => n(l)),
          fragment: s
        });
      } else
        a(this, Fe).set(
          t,
          Ee(() => n(this.anchor))
        );
    if (a(this, Le).set(r, t), i) {
      for (const [u, o] of a(this, Fe))
        u === t ? r.unskip_effect(o) : r.skip_effect(o);
      for (const [u, o] of a(this, pe))
        u === t ? r.unskip_effect(o.effect) : r.skip_effect(o.effect);
      r.oncommit(a(this, on)), r.ondiscard(a(this, Ln));
    } else
      a(this, on).call(this, r);
  }
}
Le = new WeakMap(), Fe = new WeakMap(), pe = new WeakMap(), yt = new WeakMap(), an = new WeakMap(), on = new WeakMap(), Ln = new WeakMap();
function le(e, t, n = !1) {
  var r = new Ys(e), i = n ? jt : 0;
  function s(l, u) {
    r.ensure(l, u);
  }
  vr(() => {
    var l = !1;
    t((u, o = 0) => {
      l = !0, s(o, u);
    }), l || s(-1, null);
  }, i);
}
function Un(e, t) {
  return t;
}
function Gs(e, t, n) {
  for (var r = [], i = t.length, s, l = t.length, u = 0; u < i; u++) {
    let m = t[u];
    St(
      m,
      () => {
        if (s) {
          if (s.pending.delete(m), s.done.add(m), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            nr(e, Pn(s.done)), h.delete(s), h.size === 0 && (e.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var o = r.length === 0 && n !== null;
    if (o) {
      var f = (
        /** @type {Element} */
        n
      ), c = (
        /** @type {Element} */
        f.parentNode
      );
      Ss(c), c.append(f), e.items.clear();
    }
    nr(e, t, !o);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function nr(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const l of e.pending.values())
      for (const u of l)
        r.add(
          /** @type {EachItem} */
          e.items.get(u).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (r != null && r.has(s)) {
      s.f |= qe;
      const l = document.createDocumentFragment();
      _r(s, l);
    } else
      ve(t[i], n);
  }
}
var Lr;
function Sn(e, t, n, r, i, s = null) {
  var l = e, u = /* @__PURE__ */ new Map(), o = (t & 4) !== 0;
  if (o) {
    var f = (
      /** @type {Element} */
      e
    );
    l = f.appendChild(Je());
  }
  var c = null, m = /* @__PURE__ */ ps(() => {
    var D = n();
    return ir(D) ? D : D == null ? [] : Pn(D);
  }), h, _ = /* @__PURE__ */ new Map(), v = !0;
  function w(D) {
    R.effect.f & ke || (R.pending.delete(D), R.fallback = c, Ks(R, h, l, t, r), c !== null && (h.length === 0 ? c.f & qe ? (c.f ^= qe, Gt(c, null, l)) : hr(c) : St(c, () => {
      c = null;
    })));
  }
  function d(D) {
    R.pending.delete(D);
  }
  var E = vr(() => {
    h = /** @type {V[]} */
    p(m);
    for (var D = h.length, q = /* @__PURE__ */ new Set(), Z = (
      /** @type {Batch} */
      y
    ), ee = ai(), W = 0; W < D; W += 1) {
      var oe = h[W], re = r(oe, W), Y = v ? null : u.get(re);
      Y ? (Y.v && Ht(Y.v, oe), Y.i && Ht(Y.i, W), ee && Z.unskip_effect(Y.e)) : (Y = Xs(
        u,
        v ? l : Lr ?? (Lr = Je()),
        oe,
        re,
        W,
        i,
        t,
        n
      ), v || (Y.e.f |= qe), u.set(re, Y)), q.add(re);
    }
    if (D === 0 && s && !c && (v ? c = Ee(() => s(l)) : (c = Ee(() => s(Lr ?? (Lr = Je()))), c.f |= qe)), D > q.size && ji(), !v)
      if (_.set(Z, q), ee) {
        for (const [ge, I] of u)
          q.has(ge) || Z.skip_effect(I.e);
        Z.oncommit(w), Z.ondiscard(d);
      } else
        w(Z);
    p(m);
  }), R = { effect: E, items: u, pending: _, outrogroups: null, fallback: c };
  v = !1;
}
function Yt(e) {
  for (; e !== null && !(e.f & De); )
    e = e.next;
  return e;
}
function Ks(e, t, n, r, i) {
  var Y, ge, I, j, Ne, Be, ot, ut, ft;
  var s = (r & 8) !== 0, l = t.length, u = e.items, o = Yt(e.effect.first), f, c = null, m, h = [], _ = [], v, w, d, E;
  if (s)
    for (E = 0; E < l; E += 1)
      v = t[E], w = i(v, E), d = /** @type {EachItem} */
      u.get(w).e, d.f & qe || ((ge = (Y = d.nodes) == null ? void 0 : Y.a) == null || ge.measure(), (m ?? (m = /* @__PURE__ */ new Set())).add(d));
  for (E = 0; E < l; E += 1) {
    if (v = t[E], w = i(v, E), d = /** @type {EachItem} */
    u.get(w).e, e.outrogroups !== null)
      for (const ue of e.outrogroups)
        ue.pending.delete(d), ue.done.delete(d);
    if (d.f & ae && (hr(d), s && ((j = (I = d.nodes) == null ? void 0 : I.a) == null || j.unfix(), (m ?? (m = /* @__PURE__ */ new Set())).delete(d))), d.f & qe)
      if (d.f ^= qe, d === o)
        Gt(d, null, n);
      else {
        var R = c ? c.next : o;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), Qe(e, c, d), Qe(e, d, R), Gt(d, R, n), c = d, h = [], _ = [], o = Yt(c.next);
        continue;
      }
    if (d !== o) {
      if (f !== void 0 && f.has(d)) {
        if (h.length < _.length) {
          var D = _[0], q;
          c = D.prev;
          var Z = h[0], ee = h[h.length - 1];
          for (q = 0; q < h.length; q += 1)
            Gt(h[q], D, n);
          for (q = 0; q < _.length; q += 1)
            f.delete(_[q]);
          Qe(e, Z.prev, ee.next), Qe(e, c, Z), Qe(e, ee, D), o = D, c = ee, E -= 1, h = [], _ = [];
        } else
          f.delete(d), Gt(d, o, n), Qe(e, d.prev, d.next), Qe(e, d, c === null ? e.effect.first : c.next), Qe(e, c, d), c = d;
        continue;
      }
      for (h = [], _ = []; o !== null && o !== d; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(o), _.push(o), o = Yt(o.next);
      if (o === null)
        continue;
    }
    d.f & qe || h.push(d), c = d, o = Yt(d.next);
  }
  if (e.outrogroups !== null) {
    for (const ue of e.outrogroups)
      ue.pending.size === 0 && (nr(e, Pn(ue.done)), (Ne = e.outrogroups) == null || Ne.delete(ue));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || f !== void 0) {
    var W = [];
    if (f !== void 0)
      for (d of f)
        d.f & ae || W.push(d);
    for (; o !== null; )
      !(o.f & ae) && o !== e.fallback && W.push(o), o = Yt(o.next);
    var oe = W.length;
    if (oe > 0) {
      var re = r & 4 && l === 0 ? n : null;
      if (s) {
        for (E = 0; E < oe; E += 1)
          (ot = (Be = W[E].nodes) == null ? void 0 : Be.a) == null || ot.measure();
        for (E = 0; E < oe; E += 1)
          (ft = (ut = W[E].nodes) == null ? void 0 : ut.a) == null || ft.fix();
      }
      Gs(e, W, re);
    }
  }
  s && st(() => {
    var ue, ct;
    if (m !== void 0)
      for (d of m)
        (ct = (ue = d.nodes) == null ? void 0 : ue.a) == null || ct.apply();
  });
}
function Xs(e, t, n, r, i, s, l, u) {
  var o = l & 1 ? l & 16 ? xt(n) : /* @__PURE__ */ ws(n, !1, !1) : null, f = l & 2 ? xt(i) : null;
  return {
    v: o,
    i: f,
    e: Ee(() => (s(t, o ?? n, f ?? i, u), () => {
      e.delete(r);
    }))
  };
}
function Gt(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && !(t.f & qe) ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ cn(r)
      );
      if (s.before(r), r === i)
        return;
      r = l;
    }
}
function Qe(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const Pr = [...` 	
\r\f \v\uFEFF`];
function Js(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, l = 0; (l = r.indexOf(i, l)) >= 0; ) {
          var u = l + s;
          (l === 0 || Pr.includes(r[l - 1])) && (u === r.length || Pr.includes(r[u])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(u + 1) : l = u;
        }
  }
  return r === "" ? null : r;
}
function pt(e, t, n, r, i, s) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var u = Js(n, r, s);
    u == null ? e.removeAttribute("class") : e.className = u, e.__className = n;
  } else if (s && i !== s)
    for (var o in s) {
      var f = !!s[o];
      (i == null || f !== !!i[o]) && e.classList.toggle(o, f);
    }
  return s;
}
function ki(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!ir(t))
      return Ji();
    for (var r of e.options)
      r.selected = t.includes(Qt(r));
    return;
  }
  for (r of e.options) {
    var i = Qt(r);
    if (ys(i, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Zs(e) {
  var t = new MutationObserver(() => {
    ki(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), cr(() => {
    t.disconnect();
  });
}
function Dr(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet(), i = !0;
  oi(e, "change", (s) => {
    var l = s ? "[selected]" : ":checked", u;
    if (e.multiple)
      u = [].map.call(e.querySelectorAll(l), Qt);
    else {
      var o = e.querySelector(l) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      u = o && Qt(o);
    }
    n(u), e.__value = u, y !== null && r.add(y);
  }), Ls(() => {
    var s = t();
    if (e === document.activeElement) {
      var l = (
        /** @type {Batch} */
        y
      );
      if (r.has(l))
        return;
    }
    if (ki(e, s, i), i && s === void 0) {
      var u = e.querySelector(":checked");
      u !== null && (s = Qt(u), n(s));
    }
    e.__value = s, i = !1;
  }), Zs(e);
}
function Qt(e) {
  return "__value" in e ? e.__value : e.value;
}
const Qs = Symbol("is custom element"), $s = Symbol("is html");
function tn(e, t, n, r) {
  var i = el(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[Fi] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && tl(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function el(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Qs]: e.nodeName.includes("-"),
      [$s]: e.namespaceURI === Fr
    })
  );
}
var Nr = /* @__PURE__ */ new Map();
function tl(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Nr.get(t);
  if (n) return n;
  Nr.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = Pi(i);
    for (var l in r)
      r[l].set && n.push(l);
    i = qr(i);
  }
  return n;
}
function nl(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  oi(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = Hn(e) ? Bn(s) : s, n(s), y !== null && r.add(y), await Os(), s !== (s = t())) {
      var l = e.selectionStart, u = e.selectionEnd, o = e.value.length;
      if (e.value = s ?? "", u !== null) {
        var f = e.value.length;
        l === u && u === o && f > o ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = l, e.selectionEnd = Math.min(u, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  pr(t) == null && e.value && (n(Hn(e) ? Bn(e.value) : e.value), y !== null && r.add(y)), fi(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        y
      );
      if (r.has(s))
        return;
    }
    Hn(e) && i === Bn(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Hn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Bn(e) {
  return e === "" ? null : +e;
}
function rl(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, l = () => (s && (s = !1, i = pr(
    /** @type {() => V} */
    r
  )), i), u;
  u = /** @type {V} */
  e[t], u === void 0 && r !== void 0 && (u = l());
  var o;
  return o = () => {
    var f = (
      /** @type {V} */
      e[t]
    );
    return f === void 0 ? l() : (s = !0, f);
  }, o;
}
const il = "5";
var Mr;
typeof window < "u" && ((Mr = window.__svelte ?? (window.__svelte = {})).v ?? (Mr.v = /* @__PURE__ */ new Set())).add(il);
function xn(e) {
  if (!sl())
    return e;
  try {
    const t = new URL(e);
    return t.protocol !== "http:" && t.protocol !== "https:" || t.hostname === "localhost" || t.hostname === "127.0.0.1" ? e : `/proxy/${t.host}${t.pathname}${t.search}`;
  } catch {
    return e;
  }
}
function sl() {
  if (typeof window > "u")
    return !1;
  const e = window.location.hostname;
  return e === "localhost" || e === "127.0.0.1";
}
async function ll(e) {
  try {
    const t = await fetch(xn(e.pluginsUrl));
    if (!t.ok)
      return {
        provider: e,
        plugins: [],
        error: `HTTP ${t.status}: ${t.statusText}`
      };
    const n = await t.json();
    if (!n || typeof n != "object" || !Array.isArray(n.plugins))
      return {
        provider: e,
        plugins: [],
        error: 'Provider plugins.json must be an object with a "plugins" array.'
      };
    const r = n.plugins, i = r.filter(ol), s = r.length - i.length;
    return s > 0 && console.warn(
      `[ProviderLoader] Provider "${e.name}": skipped ${s} invalid plugin entries.`
    ), { provider: e, plugins: i };
  } catch (t) {
    const n = t instanceof Error ? t.message : String(t);
    return { provider: e, plugins: [], error: n };
  }
}
async function al(e) {
  return Promise.all(e.map(ll));
}
function ol(e) {
  if (!e || typeof e != "object") return !1;
  const t = e;
  return typeof t.name == "string" && (!t.author || typeof t.author == "string") && typeof t.src == "string" && (!1 || t.src.startsWith("https://") || t.src.startsWith("/")) && typeof t.kind == "string" && typeof t.icon == "string" && typeof t.description == "string" && (t.supportedCoreVersion === void 0 || typeof t.supportedCoreVersion == "object" && t.supportedCoreVersion !== null && (typeof t.supportedCoreVersion.from == "string" || typeof t.supportedCoreVersion.to == "string"));
}
function ul(e, t) {
  return `${e} - ${t}`;
}
function Rr(e, t) {
  const n = Vr(e), r = Vr(t);
  for (let i = 0; i < 3; i++) {
    if (n[i] < r[i]) return -1;
    if (n[i] > r[i]) return 1;
  }
  return 0;
}
function Vr(e) {
  const n = e.replace(/^v/, "").split("-")[0].split(".").map((r) => parseInt(r, 10) || 0);
  return [n[0] ?? 0, n[1] ?? 0, n[2] ?? 0];
}
function fl(e, t, n) {
  return t === void 0 || n === void 0 ? !0 : Rr(e, t) >= 0 && Rr(e, n) < 0;
}
const cl = "plugins";
function vl() {
  try {
    const e = localStorage.getItem(cl);
    return e ? JSON.parse(e) : [];
  } catch {
    return [];
  }
}
function dl(e, t, n, r) {
  var f, c;
  let i = ul(t.prefix, e.name);
  const s = r.find((m) => m.src === xn(e.src));
  s && (i = s.name);
  const l = s ? "INSTALLED" : "AVAILABLE", u = s && s.active ? "ACTIVE" : "INACTIVE", o = fl(
    n,
    (f = e.supportedCoreVersion) == null ? void 0 : f.from,
    (c = e.supportedCoreVersion) == null ? void 0 : c.to
  );
  return {
    ...e,
    id: i,
    provider: t,
    compatible: o,
    installationState: l,
    activationState: u
  };
}
function hl(e, t) {
  return e.map(
    (n) => n.id === t ? {
      ...n,
      installationState: "INSTALLED",
      activationState: "INACTIVE"
    } : n
  );
}
function _l(e, t) {
  return { updated: e.map(
    (r) => r.id === t ? {
      ...r,
      installationState: "AVAILABLE",
      activationState: "INACTIVE"
    } : r
  ), success: !0 };
}
function pl(e, t) {
  return e.map(
    (n) => n.id === t ? {
      ...n,
      activationState: "ACTIVE"
    } : n
  );
}
function gl(e, t) {
  return e.map(
    (n) => n.id === t ? {
      ...n,
      activationState: "INACTIVE"
    } : n
  );
}
const ml = "appVersion";
function wl() {
  return localStorage.getItem(ml) || "1.4.0";
}
function bl() {
  return document.querySelector("open-scd");
}
function Ai() {
  var t, n;
  const e = bl();
  return e != null && e.shadowRoot ? ((t = e.shadowRoot) == null ? void 0 : t.querySelector("compas-layout")) ?? ((n = e.shadowRoot) == null ? void 0 : n.querySelector("oscd-layout")) ?? null : null;
}
const yl = [
  {
    prefix: "BP",
    name: "BearingPoint Plugins",
    icon: "https://ase-compas.github.io/compas-bearingpoint-plugins/bearingpoint.svg",
    description: "Official BearingPoint plugin provider for OpenSCD.",
    pluginsUrl: "https://ase-compas.github.io/compas-bearingpoint-plugins/plugins.json"
  },
  {
    prefix: "TransnetBW",
    name: "TransnetBW Plugins",
    icon: "https://ase-compas.github.io/compas-transnetbw-plugins/favicon.ico",
    description: "Official TransnetBW plugin provider for OpenSCD.",
    pluginsUrl: "https://ase-compas.github.io/compas-transnetbw-plugins/plugins.json"
  },
  {
    prefix: "SprintEins",
    name: "SprintEins Plugins",
    icon: "https://avatars.githubusercontent.com/u/44259540?s=200&v=4",
    description: "SprintEins plugin provider for OpenSCD.",
    pluginsUrl: "https://sprinteins.github.io/oscd-plugin-store/plugins.json"
  }
], El = yl;
var Sl = /* @__PURE__ */ z("<span> </span>"), kl = /* @__PURE__ */ z('<span class="badge badge-incompatible svelte-1myq0bn">Incompatible</span>'), Al = /* @__PURE__ */ z('<div role="button" tabindex="0"><div class="card-top svelte-1myq0bn"><div class="plugin-icon-wrapper svelte-1myq0bn"><span class="material-icons plugin-icon svelte-1myq0bn"> </span></div> <button><!></button></div> <div class="plugin-name svelte-1myq0bn"> </div> <div class="plugin-description svelte-1myq0bn"> </div> <div class="plugin-badges svelte-1myq0bn"><span> </span> <!> <!></div></div>');
function Cl(e, t) {
  un(t, !0);
  const n = /* @__PURE__ */ Xe(() => t.plugin.installationState === "INSTALLED"), r = /* @__PURE__ */ Xe(() => t.plugin.activationState === "ACTIVE");
  function i(I) {
    I.stopPropagation(), p(n) ? p(r) ? t.onDisable() : t.onEnable() : t.onInstall();
  }
  var s = Al();
  let l;
  var u = S(s), o = S(u), f = S(o), c = S(f), m = x(o, 2);
  let h;
  var _ = S(m);
  {
    var v = (I) => {
      var j = Pt("INSTALL");
      N(I, j);
    }, w = (I) => {
      var j = Pt("DISABLE");
      N(I, j);
    }, d = (I) => {
      var j = Pt("ENABLE");
      N(I, j);
    };
    le(_, (I) => {
      p(n) ? p(r) ? I(w, 1) : I(d, -1) : I(v);
    });
  }
  var E = x(u, 2), R = S(E), D = x(E, 2), q = S(D), Z = x(D, 2), ee = S(Z), W = S(ee), oe = x(ee, 2);
  {
    var re = (I) => {
      var j = Sl(), Ne = S(j);
      se(
        (Be) => {
          pt(j, 1, `badge badge-${Be ?? ""}`, "svelte-1myq0bn"), F(Ne, t.plugin.activationState === "ACTIVE" ? "Active" : "Inactive");
        },
        [() => t.plugin.activationState.toLowerCase()]
      ), N(I, j);
    };
    le(oe, (I) => {
      t.plugin.installationState === "INSTALLED" && I(re);
    });
  }
  var Y = x(oe, 2);
  {
    var ge = (I) => {
      var j = kl();
      N(I, j);
    };
    le(Y, (I) => {
      t.plugin.compatible || I(ge);
    });
  }
  se(
    (I) => {
      l = pt(s, 1, "plugin-card svelte-1myq0bn", null, l, {
        selected: t.selected,
        incompatible: !t.plugin.compatible
      }), tn(s, "aria-pressed", t.selected), F(c, t.plugin.icon), h = pt(m, 1, "action-btn svelte-1myq0bn", null, h, {
        disable: p(n) && p(r),
        enable: p(n) && !p(r),
        install: !p(n)
      }), tn(m, "aria-label", p(n) ? p(r) ? "Disable" : "Enable" : "Install"), F(R, t.plugin.name), F(q, t.plugin.description), pt(ee, 1, `badge badge-${I ?? ""}`, "svelte-1myq0bn"), F(W, t.plugin.installationState === "INSTALLED" ? "Installed" : "Available");
    },
    [() => t.plugin.installationState.toLowerCase()]
  ), $e("click", s, function(...I) {
    var j;
    (j = t.onSelect) == null || j.apply(this, I);
  }), $e("keydown", s, (I) => I.key === "Enter" && t.onSelect()), $e("click", m, i), N(e, s), fn();
}
Si(["click", "keydown"]);
var xl = /* @__PURE__ */ z('<img class="provider-icon svelte-1ttjeex"/>'), Tl = /* @__PURE__ */ z('<span class="material-icons provider-icon svelte-1ttjeex"> </span>'), Il = /* @__PURE__ */ z('<section class="provider-card svelte-1ttjeex"><div class="provider-header svelte-1ttjeex"><div class="provider-info svelte-1ttjeex"><h3 class="provider-name svelte-1ttjeex"> </h3> <span class="provider-description svelte-1ttjeex"> </span></div> <!></div> <div class="plugins-grid svelte-1ttjeex"></div></section>');
function Ll(e, t) {
  un(t, !0);
  var n = Il(), r = S(n), i = S(r), s = S(i), l = S(s), u = x(s, 2), o = S(u), f = x(i, 2);
  {
    var c = (v) => {
      var w = xl();
      se(() => {
        tn(w, "src", t.provider.icon), tn(w, "alt", `${t.provider.name ?? ""} logo`);
      }), Fs("error", w, (d) => d.currentTarget.style.display = "none"), N(v, w);
    }, m = /* @__PURE__ */ Xe(() => t.provider.icon.startsWith("http") || t.provider.icon.startsWith("/")), h = (v) => {
      var w = Tl(), d = S(w);
      se(() => F(d, t.provider.icon)), N(v, w);
    };
    le(f, (v) => {
      p(m) ? v(c) : v(h, -1);
    });
  }
  var _ = x(r, 2);
  Sn(_, 21, () => t.plugins, (v) => v.id, (v, w) => {
    {
      let d = /* @__PURE__ */ Xe(() => t.selectedPluginId === p(w).id);
      Cl(v, {
        get plugin() {
          return p(w);
        },
        get selected() {
          return p(d);
        },
        onSelect: () => t.onSelectPlugin(p(w)),
        onInstall: () => t.onInstall(p(w).id),
        onUninstall: () => t.onUninstall(p(w).id),
        onEnable: () => t.onEnable(p(w).id),
        onDisable: () => t.onDisable(p(w).id)
      });
    }
  }), se(() => {
    F(l, t.provider.name), F(o, t.provider.description);
  }), N(e, n), fn();
}
var Pl = /* @__PURE__ */ z("<span> </span>"), Dl = /* @__PURE__ */ z('<span class="badge badge-incompatible svelte-yr5wcf">Incompatible</span>'), Nl = /* @__PURE__ */ z('<div class="meta-item svelte-yr5wcf"><span class="meta-label svelte-yr5wcf">CORE VERSION</span> <span class="meta-value svelte-yr5wcf"><!></span></div>'), Rl = /* @__PURE__ */ z('<div class="meta-item svelte-yr5wcf"><span class="meta-label svelte-yr5wcf">CURRENT CORE</span> <span class="meta-value svelte-yr5wcf"> </span></div>'), Vl = /* @__PURE__ */ z('<button class="action-btn install svelte-yr5wcf">INSTALL</button>'), Ol = /* @__PURE__ */ z('<button class="action-btn disable svelte-yr5wcf">DISABLE</button>'), Ml = /* @__PURE__ */ z('<button class="action-btn enable svelte-yr5wcf">ENABLE</button>'), Fl = /* @__PURE__ */ z('<button class="action-btn remove svelte-yr5wcf">REMOVE</button> <!>', 1), ql = /* @__PURE__ */ z('<aside class="plugin-details svelte-yr5wcf"><div class="details-header svelte-yr5wcf"><div class="details-title-row svelte-yr5wcf"><span class="material-icons details-icon svelte-yr5wcf"> </span> <h3 class="details-name svelte-yr5wcf"> </h3> <button class="close-btn svelte-yr5wcf" aria-label="Close details">✕</button></div> <p class="details-short-desc svelte-yr5wcf"> </p> <div class="details-badges svelte-yr5wcf"><span> </span> <!> <!></div></div> <div class="details-meta svelte-yr5wcf"><div class="meta-item svelte-yr5wcf"><span class="meta-label svelte-yr5wcf">PROVIDER</span> <span class="meta-value svelte-yr5wcf"> </span></div> <div class="meta-item svelte-yr5wcf"><span class="meta-label svelte-yr5wcf">AUTHOR</span> <span class="meta-value svelte-yr5wcf"> </span></div> <div class="meta-item svelte-yr5wcf"><span class="meta-label svelte-yr5wcf">KIND</span> <span class="meta-value svelte-yr5wcf"> </span></div> <!> <div class="meta-item svelte-yr5wcf"><span class="meta-label svelte-yr5wcf">PLUGIN ID</span> <span class="meta-value plugin-id svelte-yr5wcf"> </span></div> <!></div> <div class="details-url svelte-yr5wcf"><span class="meta-label svelte-yr5wcf">URL</span> <a target="_blank" rel="noopener noreferrer" class="url-link svelte-yr5wcf"> </a></div> <div class="details-actions svelte-yr5wcf"><!></div></aside>');
function jl(e, t) {
  un(t, !0);
  const n = /* @__PURE__ */ Xe(() => t.plugin.installationState === "INSTALLED"), r = /* @__PURE__ */ Xe(() => t.plugin.activationState === "ACTIVE");
  var i = ql(), s = S(i), l = S(s), u = S(l), o = S(u), f = x(u, 2), c = S(f), m = x(f, 2), h = x(l, 2), _ = S(h), v = x(h, 2), w = S(v), d = S(w), E = x(w, 2);
  {
    var R = (b) => {
      var k = Pl(), V = S(k);
      se(
        (H) => {
          pt(k, 1, `badge badge-${H ?? ""}`, "svelte-yr5wcf"), F(V, p(r) ? "Active" : "Inactive");
        },
        [() => t.plugin.activationState.toLowerCase()]
      ), N(b, k);
    };
    le(E, (b) => {
      p(n) && b(R);
    });
  }
  var D = x(E, 2);
  {
    var q = (b) => {
      var k = Dl();
      N(b, k);
    };
    le(D, (b) => {
      t.plugin.compatible || b(q);
    });
  }
  var Z = x(s, 2), ee = S(Z), W = x(S(ee), 2), oe = S(W), re = x(ee, 2), Y = x(S(re), 2), ge = S(Y), I = x(re, 2), j = x(S(I), 2), Ne = S(j), Be = x(I, 2);
  {
    var ot = (b) => {
      var k = Nl(), V = x(S(k), 2), H = S(V);
      {
        var It = (K) => {
          var Ve = Pt();
          se(() => F(Ve, `${t.plugin.supportedCoreVersion.from ?? ""} – ${t.plugin.supportedCoreVersion.to ?? ""}`)), N(K, Ve);
        }, Wt = (K) => {
          var Ve = Pt();
          se(() => F(Ve, `≥ ${t.plugin.supportedCoreVersion.from ?? ""}`)), N(K, Ve);
        }, Re = (K) => {
          var Ve = Pt();
          se(() => F(Ve, "< " + t.plugin.supportedCoreVersion.to)), N(K, Ve);
        };
        le(H, (K) => {
          t.plugin.supportedCoreVersion.from && t.plugin.supportedCoreVersion.to ? K(It) : t.plugin.supportedCoreVersion.from ? K(Wt, 1) : t.plugin.supportedCoreVersion.to && K(Re, 2);
        });
      }
      N(b, k);
    };
    le(Be, (b) => {
      t.plugin.supportedCoreVersion && (t.plugin.supportedCoreVersion.from || t.plugin.supportedCoreVersion.to) && b(ot);
    });
  }
  var ut = x(Be, 2), ft = x(S(ut), 2), ue = S(ft), ct = x(ut, 2);
  {
    var Rn = (b) => {
      var k = Rl(), V = x(S(k), 2), H = S(V);
      se(() => F(H, t.coreVersion)), N(b, k);
    };
    le(ct, (b) => {
      t.coreVersion && b(Rn);
    });
  }
  var dn = x(Z, 2), hn = x(S(dn), 2), Vn = S(hn), On = x(dn, 2), Mn = S(On);
  {
    var g = (b) => {
      var k = Vl();
      se(() => k.disabled = !t.plugin.compatible), $e("click", k, () => t.onInstall(t.plugin.id)), N(b, k);
    }, A = (b) => {
      var k = Fl(), V = $n(k), H = x(V, 2);
      {
        var It = (Re) => {
          var K = Ol();
          $e("click", K, () => t.onDisable(t.plugin.id)), N(Re, K);
        }, Wt = (Re) => {
          var K = Ml();
          $e("click", K, () => t.onEnable(t.plugin.id)), N(Re, K);
        };
        le(H, (Re) => {
          p(r) ? Re(It) : Re(Wt, -1);
        });
      }
      $e("click", V, () => t.onUninstall(t.plugin.id)), N(b, k);
    };
    le(Mn, (b) => {
      p(n) ? b(A, -1) : b(g);
    });
  }
  se(
    (b, k) => {
      F(o, t.plugin.icon), F(c, t.plugin.name), F(_, t.plugin.description), pt(w, 1, `badge badge-${b ?? ""}`, "svelte-yr5wcf"), F(d, t.plugin.installationState === "INSTALLED" ? "Installed" : "Available"), F(oe, k), F(ge, t.plugin.author), F(Ne, t.plugin.kind), F(ue, t.plugin.id), tn(hn, "href", t.plugin.src), F(Vn, t.plugin.src);
    },
    [
      () => t.plugin.installationState.toLowerCase(),
      () => t.plugin.provider.prefix.toUpperCase()
    ]
  ), $e("click", m, function(...b) {
    var k;
    (k = t.onClose) == null || k.apply(this, b);
  }), N(e, i), fn();
}
Si(["click"]);
var Ul = /* @__PURE__ */ z("<option> </option>"), Hl = /* @__PURE__ */ z('<p class="error-message svelte-1u53k0h"> </p>'), Bl = /* @__PURE__ */ z('<div class="load-errors svelte-1u53k0h"></div>'), zl = /* @__PURE__ */ z('<div class="loading svelte-1u53k0h">Loading plugins…</div>'), Wl = /* @__PURE__ */ z('<div class="empty-state svelte-1u53k0h">No plugins match your search.</div>'), Yl = /* @__PURE__ */ z('<div class="plugins-hub svelte-1u53k0h"><div class="hub-header svelte-1u53k0h"><h2 class="hub-title svelte-1u53k0h">Plugin Store</h2></div> <div class="hub-toolbar svelte-1u53k0h"><div class="search-wrapper svelte-1u53k0h"><span class="search-icon svelte-1u53k0h">🔍</span> <input class="search-input svelte-1u53k0h" type="text" placeholder="Search..." aria-label="Search plugins"/></div> <select class="filter-select svelte-1u53k0h" aria-label="Filter by status"><option>All status</option><option>Installed</option><option>Available</option></select> <select class="filter-select svelte-1u53k0h" aria-label="Filter by contributor"><option>All contributors</option><!></select></div> <!> <div><div class="providers-list svelte-1u53k0h"><!></div> <!></div></div>');
function Gl(e, t) {
  un(t, !0);
  let n = rl(t, "coreVersion", 19, wl), r = /* @__PURE__ */ te(rt([])), i = /* @__PURE__ */ te(!0), s = /* @__PURE__ */ te(rt([])), l = /* @__PURE__ */ te(null), u = /* @__PURE__ */ te(""), o = /* @__PURE__ */ te("all"), f = /* @__PURE__ */ te("all");
  const c = El.map((g) => ({ ...g, icon: xn(g.icon) }));
  async function m() {
    O(i, !0), O(s, [], !0);
    const g = vl(), A = await al(c), b = [];
    for (const k of A) {
      k.error && O(
        s,
        [
          ...p(s),
          `Error loading Provider '${k.provider.name}'': ${k.error}`
        ],
        !0
      );
      const V = k.provider;
      for (const H of k.plugins)
        b.push(dl(H, V, n(), g));
    }
    O(r, b, !0), O(i, !1);
  }
  Ts(() => {
    n(), m();
  });
  function h(g) {
    return p(_).filter((A) => A.provider.prefix === g);
  }
  const _ = /* @__PURE__ */ Xe(() => p(r).filter((g) => {
    var V;
    const A = !p(u) || g.name.toLowerCase().includes(p(u).toLowerCase()) || g.description.toLowerCase().includes(p(u).toLowerCase()), b = p(o) === "all" || p(o) === "installed" && g.installationState === "INSTALLED" || p(o) === "available" && g.installationState === "AVAILABLE", k = p(f) === "all" || ((V = g.provider) == null ? void 0 : V.prefix) === p(f);
    return A && b && k;
  }));
  function v(g) {
    var b;
    O(r, hl(p(r), g), !0);
    const A = p(r).find((k) => k.id === g);
    ((b = p(l)) == null ? void 0 : b.id) === g && O(l, A ?? null, !0), A && q(A);
  }
  function w(g) {
    var V;
    const A = p(r).find((H) => H.id === g), { updated: b } = _l(p(r), g);
    O(r, b, !0);
    const k = p(r).find((H) => H.id === g);
    ((V = p(l)) == null ? void 0 : V.id) === g && O(l, k ?? null, !0), A && q({ id: A.id, kind: A.kind }, !0);
  }
  function d(g) {
    var b;
    O(r, pl(p(r), g), !0);
    const A = p(r).find((k) => k.id === g);
    ((b = p(l)) == null ? void 0 : b.id) === g && O(l, A ?? null, !0), A && q(A);
  }
  function E(g) {
    var b;
    O(r, gl(p(r), g), !0);
    const A = p(r).find((k) => k.id === g);
    ((b = p(l)) == null ? void 0 : b.id) === g && O(l, A ?? null, !0), A && q(A);
  }
  function R(g) {
    var A;
    O(l, ((A = p(l)) == null ? void 0 : A.id) === g.id ? null : g, !0);
  }
  function D() {
    O(l, null);
  }
  function q(g, A = !1) {
    var V, H;
    const b = A ? { name: g.id, kind: g.kind, config: null } : {
      name: g.id,
      kind: g.kind,
      config: {
        name: g.id,
        // use identifier which is provider-prefix plus provider-plugin.name
        author: g.author || ((V = g.provider) == null ? void 0 : V.name),
        src: xn(g.src),
        icon: g.icon,
        kind: g.kind,
        description: g.description,
        requireDoc: !0,
        position: g.position || (g.kind === "menu" ? "middle" : void 0),
        active: g.activationState === "ACTIVE",
        installed: g.installationState === "INSTALLED"
      }
    }, k = new CustomEvent("oscd-configure-plugin", { bubbles: !0, composed: !0, detail: b });
    (H = Ai()) == null || H.dispatchEvent(k);
  }
  var Z = Yl(), ee = x(S(Z), 2), W = S(ee), oe = x(S(W), 2), re = x(W, 2), Y = S(re);
  Y.value = Y.__value = "all";
  var ge = x(Y);
  ge.value = ge.__value = "installed";
  var I = x(ge);
  I.value = I.__value = "available";
  var j = x(re, 2), Ne = S(j);
  Ne.value = Ne.__value = "all";
  var Be = x(Ne);
  Sn(Be, 17, () => c, Un, (g, A) => {
    var b = Ul(), k = S(b), V = {};
    se(() => {
      F(k, p(A).name), V !== (V = p(A).prefix) && (b.value = (b.__value = p(A).prefix) ?? "");
    }), N(g, b);
  });
  var ot = x(ee, 2);
  {
    var ut = (g) => {
      var A = Bl();
      Sn(A, 21, () => p(s), Un, (b, k) => {
        var V = Hl(), H = S(V);
        se(() => F(H, `⚠️ ${p(k) ?? ""}`)), N(b, V);
      }), N(g, A);
    };
    le(ot, (g) => {
      p(s).length > 0 && g(ut);
    });
  }
  var ft = x(ot, 2);
  let ue;
  var ct = S(ft), Rn = S(ct);
  {
    var dn = (g) => {
      var A = zl();
      N(g, A);
    }, hn = (g) => {
      var A = Wl();
      N(g, A);
    }, Vn = (g) => {
      var A = Ir(), b = $n(A);
      Sn(b, 17, () => c, Un, (k, V) => {
        const H = /* @__PURE__ */ Xe(() => h(p(V).prefix));
        var It = Ir(), Wt = $n(It);
        {
          var Re = (K) => {
            {
              let Ve = /* @__PURE__ */ Xe(() => {
                var gr;
                return ((gr = p(l)) == null ? void 0 : gr.id) ?? null;
              });
              Ll(K, {
                get provider() {
                  return p(V);
                },
                get plugins() {
                  return p(H);
                },
                get selectedPluginId() {
                  return p(Ve);
                },
                onSelectPlugin: R,
                onInstall: v,
                onUninstall: w,
                onEnable: d,
                onDisable: E
              });
            }
          };
          le(Wt, (K) => {
            p(H).length > 0 && K(Re);
          });
        }
        N(k, It);
      }), N(g, A);
    };
    le(Rn, (g) => {
      p(i) ? g(dn) : p(_).length === 0 ? g(hn, 1) : g(Vn, -1);
    });
  }
  var On = x(ct, 2);
  {
    var Mn = (g) => {
      jl(g, {
        get plugin() {
          return p(l);
        },
        onClose: D,
        onInstall: v,
        onUninstall: w,
        onEnable: d,
        onDisable: E,
        get coreVersion() {
          return n();
        }
      });
    };
    le(On, (g) => {
      p(l) !== null && g(Mn);
    });
  }
  se(() => ue = pt(ft, 1, "hub-body svelte-1u53k0h", null, ue, { "with-details": p(l) !== null })), nl(oe, () => p(u), (g) => O(u, g)), Dr(re, () => p(o), (g) => O(o, g)), Dr(j, () => p(f), (g) => O(f, g)), N(e, Z), fn();
}
function Kl(e, t) {
  Gl(e, {
    get coreVersion() {
      return t.coreVersion;
    }
  });
}
const Xl = "plugins-hub", Jl = "0.0.1";
var Mt;
class ta extends HTMLElement {
  constructor() {
    super();
    C(this, Mt);
    this.targetDiv = null, this.originalStyles = {}, T(this, Mt, /* @__PURE__ */ te(rt({ doc: void 0, editCount: void 0, coreVersion: void 0 })));
  }
  get props() {
    return p(a(this, Mt));
  }
  set props(n) {
    O(a(this, Mt), n, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this._editCount, this.props.coreVersion = this._coreVersion;
    const n = this.shadowRoot;
    if (!n)
      throw new Error("ShadowRoot not found");
    const r = Zl();
    n.appendChild(r);
    const i = () => {
      Bs(Kl, { target: n, props: this.props }), requestAnimationFrame(() => this.applyLayoutHack());
    };
    r.addEventListener("load", i, { once: !0 }), r.addEventListener("error", i, { once: !0 });
  }
  disconnectedCallback() {
    this.restoreLayoutHack();
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
  set coreVersion(n) {
    this._coreVersion = n, this.props.coreVersion = n;
  }
  /**
   * Apply a layout hack to fix the height of the plugin-container div.
   * This is necessary because compas-oscd core doesn't limit the plugin-container height to the current window-height.
   */
  applyLayoutHack() {
    const n = Ai();
    n != null && n.shadowRoot && (this.targetDiv = n.shadowRoot.querySelector("div"), this.targetDiv && (this.originalStyles = {
      height: this.targetDiv.style.height,
      display: this.targetDiv.style.display,
      flexDirection: this.targetDiv.style.flexDirection
    }, this.targetDiv.style.height = "calc(100vh - 4px)", this.targetDiv.style.display = "flex", this.targetDiv.style.flexDirection = "column"));
  }
  restoreLayoutHack() {
    this.targetDiv && (this.targetDiv.style.height = this.originalStyles.height ?? "", this.targetDiv.style.display = this.originalStyles.display ?? "", this.targetDiv.style.flexDirection = this.originalStyles.flexDirection ?? "", this.targetDiv = null);
  }
}
Mt = new WeakMap();
function Zl() {
  const e = `${Xl}-v${Jl}-style`, t = Ql(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = t, n.id = e, n;
}
function Ql() {
  const e = new URL(import.meta.url), t = e.origin, n = e.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [t, n, "style.css"].filter(Boolean).join("/");
}
export {
  ta as default
};
