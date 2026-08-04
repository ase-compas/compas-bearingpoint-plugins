var po = Object.defineProperty;
var cs = (n) => {
  throw TypeError(n);
};
var mo = (n, e, t) => e in n ? po(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var fn = (n, e, t) => mo(n, typeof e != "symbol" ? e + "" : e, t), ra = (n, e, t) => e.has(n) || cs("Cannot " + t);
var A = (n, e, t) => (ra(n, e, "read from private field"), t ? t.call(n) : e.get(n)), ge = (n, e, t) => e.has(n) ? cs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), ye = (n, e, t, i) => (ra(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t), Ke = (n, e, t) => (ra(n, e, "access private method"), t);
const It = Symbol(), Ws = "http://www.w3.org/1999/xhtml", go = "http://www.w3.org/2000/svg", Io = "@attach", bo = !1;
var Ua = Array.isArray, Ao = Array.prototype.indexOf, qi = Array.prototype.includes, Yr = Array.from, Ks = Object.defineProperty, ii = Object.getOwnPropertyDescriptor, qs = Object.getOwnPropertyDescriptors, yo = Object.prototype, Eo = Array.prototype, Na = Object.getPrototypeOf, fs = Object.isExtensible;
function lr(n) {
  return typeof n == "function";
}
const Ae = () => {
};
function Co(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function Ys() {
  var n, e, t = new Promise((i, r) => {
    n = i, e = r;
  });
  return { promise: t, resolve: n, reject: e };
}
const _t = 2, Yi = 4, Qr = 8, Ha = 1 << 24, Ln = 16, In = 32, ai = 64, pa = 128, ln = 512, At = 1024, Lt = 2048, On = 4096, kt = 8192, Zt = 16384, Ri = 32768, ma = 1 << 25, Wn = 65536, ga = 1 << 17, So = 1 << 18, tr = 1 << 19, xo = 1 << 20, Tn = 1 << 25, wi = 65536, Ia = 1 << 21, mr = 1 << 22, ri = 1 << 23, wn = Symbol("$state"), Qs = Symbol("legacy props"), To = Symbol(""), Nn = new class extends Error {
  constructor() {
    super(...arguments);
    fn(this, "name", "StaleReactionError");
    fn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Gs;
const Zs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Gs = globalThis.document) != null && Gs.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Va(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Lo() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function wo(n, e, t) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Mo(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Oo() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Do(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ro() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function _o(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Po() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ko() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Bo() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Uo() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function No() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ho() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Js(n) {
  return n === this.v;
}
function ja(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function $s(n) {
  return !ja(n, this.v);
}
let Vo = !1, ht = null;
function Qi(n) {
  ht = n;
}
function xe(n) {
  return (
    /** @type {T} */
    tl().get(n)
  );
}
function pe(n, e) {
  return tl().set(n, e), e;
}
function Ye(n, e = !1, t) {
  ht = {
    p: ht,
    i: !1,
    c: null,
    e: null,
    s: n,
    x: null,
    r: (
      /** @type {Effect} */
      Le
    ),
    l: null
  };
}
function Qe(n) {
  var e = (
    /** @type {ComponentContext} */
    ht
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var i of t)
      xl(i);
  }
  return n !== void 0 && (e.x = n), e.i = !0, ht = e.p, n ?? /** @type {T} */
  {};
}
function el() {
  return !0;
}
function tl(n) {
  return ht === null && Va(), ht.c ?? (ht.c = new Map(jo(ht) || void 0));
}
function jo(n) {
  let e = n.p;
  for (; e !== null; ) {
    const t = e.c;
    if (t !== null)
      return t;
    e = e.p;
  }
  return null;
}
let mi = [];
function nl() {
  var n = mi;
  mi = [], Co(n);
}
function Xn(n) {
  if (mi.length === 0 && !vr) {
    var e = mi;
    queueMicrotask(() => {
      e === mi && nl();
    });
  }
  mi.push(n);
}
function Go() {
  for (; mi.length > 0; )
    nl();
}
function il(n) {
  var e = Le;
  if (e === null)
    return Se.f |= ri, n;
  if (!(e.f & Ri) && !(e.f & Yi))
    throw n;
  ni(n, e);
}
function ni(n, e) {
  for (; e !== null; ) {
    if (e.f & pa) {
      if (!(e.f & Ri))
        throw n;
      try {
        e.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    }
    e = e.parent;
  }
  throw n;
}
const zo = -7169;
function ut(n, e) {
  n.f = n.f & zo | e;
}
function Ga(n) {
  n.f & ln || n.deps === null ? ut(n, At) : ut(n, On);
}
function rl(n) {
  if (n !== null)
    for (const e of n)
      !(e.f & _t) || !(e.f & wi) || (e.f ^= wi, rl(
        /** @type {Derived} */
        e.deps
      ));
}
function al(n, e, t) {
  n.f & Lt ? e.add(n) : n.f & On && t.add(n), rl(n.deps), ut(n, At);
}
function sl(n, e, t) {
  if (n == null)
    return e(void 0), Ae;
  const i = si(
    () => n.subscribe(
      e,
      // @ts-expect-error
      t
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const ki = [];
function ba(n, e = Ae) {
  let t = null;
  const i = /* @__PURE__ */ new Set();
  function r(u) {
    if (ja(n, u) && (n = u, t)) {
      const o = !ki.length;
      for (const d of i)
        d[1](), ki.push(d, n);
      if (o) {
        for (let d = 0; d < ki.length; d += 2)
          ki[d][0](ki[d + 1]);
        ki.length = 0;
      }
    }
  }
  function a(u) {
    r(u(
      /** @type {T} */
      n
    ));
  }
  function s(u, o = Ae) {
    const d = [u, o];
    return i.add(d), i.size === 1 && (t = e(r, a) || Ae), u(
      /** @type {T} */
      n
    ), () => {
      i.delete(d), i.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: a, subscribe: s };
}
function Xo(n) {
  let e;
  return sl(n, (t) => e = t)(), e;
}
let Aa = !1, Or = !1, ya = Symbol();
function za(n, e, t) {
  const i = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ gl(void 0),
    unsubscribe: Ae
  });
  if (i.store !== n && !(ya in t))
    if (i.unsubscribe(), i.store = n ?? null, n == null)
      i.source.v = void 0, i.unsubscribe = Ae;
    else {
      var r = !0;
      i.unsubscribe = sl(n, (a) => {
        r ? i.source.v = a : W(i.source, a);
      }), r = !1;
    }
  return n && ya in t ? Xo(n) : l(i.source);
}
function Gr(n, e) {
  return Wo(n, e), e;
}
function Zr() {
  const n = {};
  function e() {
    xr(() => {
      for (var t in n)
        n[t].unsubscribe();
      Ks(n, ya, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function Wo(n, e) {
  Aa = !0;
  try {
    n.set(e);
  } finally {
    Aa = !1;
  }
}
function Ko(n) {
  var e = Or;
  try {
    return Or = !1, [n(), Or];
  } finally {
    Or = e;
  }
}
const ci = /* @__PURE__ */ new Set();
let le = null, xt = null, Ea = null, vr = !1, aa = !1, Ui = null, Fr = null;
var hs = 0;
let qo = 1;
var ji, Gi, bi, Hn, En, Ir, qt, br, ei, Vn, Cn, zi, Xi, Ai, vt, Br, ll, Ur, Ca, Nr, Yo;
const Wr = class Wr {
  constructor() {
    ge(this, vt);
    fn(this, "id", qo++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    fn(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    fn(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    ge(this, ji, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    ge(this, Gi, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    ge(this, bi, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    ge(this, Hn, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    ge(this, En, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    ge(this, Ir, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    ge(this, qt, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    ge(this, br, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    ge(this, ei, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    ge(this, Vn, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    ge(this, Cn, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    ge(this, zi, /* @__PURE__ */ new Set());
    fn(this, "is_fork", !1);
    ge(this, Xi, !1);
    /** @type {Set<Batch>} */
    ge(this, Ai, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    A(this, Cn).has(e) || A(this, Cn).set(e, { d: [], m: [] }), A(this, zi).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, t = (i) => this.schedule(i)) {
    var i = A(this, Cn).get(e);
    if (i) {
      A(this, Cn).delete(e);
      for (var r of i.d)
        ut(r, Lt), t(r);
      for (r of i.m)
        ut(r, On), t(r);
    }
    A(this, zi).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, t, i = !1) {
    e.v !== It && !this.previous.has(e) && this.previous.set(e, e.v), e.f & ri || (this.current.set(e, [t, i]), xt == null || xt.set(e, t)), this.is_fork || (e.v = t);
  }
  activate() {
    le = this;
  }
  deactivate() {
    le = null, xt = null;
  }
  flush() {
    try {
      aa = !0, le = this, Ke(this, vt, Ur).call(this);
    } finally {
      hs = 0, Ea = null, Ui = null, Fr = null, aa = !1, le = null, xt = null, Si.clear();
    }
  }
  discard() {
    for (const e of A(this, Gi)) e(this);
    A(this, Gi).clear(), A(this, bi).clear(), ci.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    A(this, br).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, t) {
    let i = A(this, Hn).get(t) ?? 0;
    if (A(this, Hn).set(t, i + 1), e) {
      let r = A(this, En).get(t) ?? 0;
      A(this, En).set(t, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(e, t, i) {
    let r = A(this, Hn).get(t) ?? 0;
    if (r === 1 ? A(this, Hn).delete(t) : A(this, Hn).set(t, r - 1), e) {
      let a = A(this, En).get(t) ?? 0;
      a === 1 ? A(this, En).delete(t) : A(this, En).set(t, a - 1);
    }
    A(this, Xi) || i || (ye(this, Xi, !0), Xn(() => {
      ye(this, Xi, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(e, t) {
    for (const i of e)
      A(this, ei).add(i);
    for (const i of t)
      A(this, Vn).add(i);
    e.clear(), t.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    A(this, ji).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    A(this, Gi).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(e) {
    A(this, bi).add(e);
  }
  run_fork_commit_callbacks() {
    for (const e of A(this, bi)) e(this);
    A(this, bi).clear();
  }
  settled() {
    return (A(this, Ir) ?? ye(this, Ir, Ys())).promise;
  }
  static ensure() {
    if (le === null) {
      const e = le = new Wr();
      aa || (ci.add(le), vr || Xn(() => {
        le === e && e.flush();
      }));
    }
    return le;
  }
  apply() {
    {
      xt = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    var r;
    if (Ea = e, (r = e.b) != null && r.is_pending && e.f & (Yi | Qr | Ha) && !(e.f & Ri)) {
      e.b.defer_effect(e);
      return;
    }
    for (var t = e; t.parent !== null; ) {
      t = t.parent;
      var i = t.f;
      if (Ui !== null && t === Le && (Se === null || !(Se.f & _t)) && !Aa)
        return;
      if (i & (ai | In)) {
        if (!(i & At))
          return;
        t.f ^= At;
      }
    }
    A(this, qt).push(t);
  }
};
ji = new WeakMap(), Gi = new WeakMap(), bi = new WeakMap(), Hn = new WeakMap(), En = new WeakMap(), Ir = new WeakMap(), qt = new WeakMap(), br = new WeakMap(), ei = new WeakMap(), Vn = new WeakMap(), Cn = new WeakMap(), zi = new WeakMap(), Xi = new WeakMap(), Ai = new WeakMap(), vt = new WeakSet(), Br = function() {
  return this.is_fork || A(this, En).size > 0;
}, ll = function() {
  for (const i of A(this, Ai))
    for (const r of A(i, En).keys()) {
      for (var e = !1, t = r; t.parent !== null; ) {
        if (A(this, Cn).has(t)) {
          e = !0;
          break;
        }
        t = t.parent;
      }
      if (!e)
        return !0;
    }
  return !1;
}, Ur = function() {
  var u, o;
  if (hs++ > 1e3 && (ci.delete(this), Zo()), !Ke(this, vt, Br).call(this)) {
    for (const d of A(this, ei))
      A(this, Vn).delete(d), ut(d, Lt), this.schedule(d);
    for (const d of A(this, Vn))
      ut(d, On), this.schedule(d);
  }
  const e = A(this, qt);
  ye(this, qt, []), this.apply();
  var t = Ui = [], i = [], r = Fr = [];
  for (const d of e)
    try {
      Ke(this, vt, Ca).call(this, d, t, i);
    } catch (c) {
      throw dl(d), c;
    }
  if (le = null, r.length > 0) {
    var a = Wr.ensure();
    for (const d of r)
      a.schedule(d);
  }
  if (Ui = null, Fr = null, Ke(this, vt, Br).call(this) || Ke(this, vt, ll).call(this)) {
    Ke(this, vt, Nr).call(this, i), Ke(this, vt, Nr).call(this, t);
    for (const [d, c] of A(this, Cn))
      ul(d, c);
  } else {
    A(this, Hn).size === 0 && ci.delete(this), A(this, ei).clear(), A(this, Vn).clear();
    for (const d of A(this, ji)) d(this);
    A(this, ji).clear(), vs(i), vs(t), (u = A(this, Ir)) == null || u.resolve();
  }
  var s = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    le
  );
  if (A(this, qt).length > 0) {
    const d = s ?? (s = this);
    A(d, qt).push(...A(this, qt).filter((c) => !A(d, qt).includes(c)));
  }
  s !== null && (ci.add(s), Ke(o = s, vt, Ur).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ca = function(e, t, i) {
  e.f ^= At;
  for (var r = e.first; r !== null; ) {
    var a = r.f, s = (a & (In | ai)) !== 0, u = s && (a & At) !== 0, o = u || (a & kt) !== 0 || A(this, Cn).has(r);
    if (!o && r.fn !== null) {
      s ? r.f ^= At : a & Yi ? t.push(r) : Lr(r) && (a & Ln && A(this, Vn).add(r), $i(r));
      var d = r.first;
      if (d !== null) {
        r = d;
        continue;
      }
    }
    for (; r !== null; ) {
      var c = r.next;
      if (c !== null) {
        r = c;
        break;
      }
      r = r.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
Nr = function(e) {
  for (var t = 0; t < e.length; t += 1)
    al(e[t], A(this, ei), A(this, Vn));
}, Yo = function() {
  var c, h, f;
  for (const p of ci) {
    var e = p.id < this.id, t = [];
    for (const [v, [m, g]] of this.current) {
      if (p.current.has(v)) {
        var i = (
          /** @type {[any, boolean]} */
          p.current.get(v)[0]
        );
        if (e && m !== i)
          p.current.set(v, [m, g]);
        else
          continue;
      }
      t.push(v);
    }
    var r = [...p.current.keys()].filter((v) => !this.current.has(v));
    if (r.length === 0)
      e && p.discard();
    else if (t.length > 0) {
      if (e)
        for (const v of A(this, zi))
          p.unskip_effect(v, (m) => {
            var g;
            m.f & (Ln | mr) ? p.schedule(m) : Ke(g = p, vt, Nr).call(g, [m]);
          });
      p.activate();
      var a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
      for (var u of t)
        ol(u, r, a, s);
      s = /* @__PURE__ */ new Map();
      var o = [...p.current.keys()].filter(
        (v) => this.current.has(v) ? (
          /** @type {[any, boolean]} */
          this.current.get(v)[0] !== v
        ) : !0
      );
      for (const v of A(this, br))
        !(v.f & (Zt | kt | ga)) && Xa(v, o, s) && (v.f & (mr | Ln) ? (ut(v, Lt), p.schedule(v)) : A(p, ei).add(v));
      if (A(p, qt).length > 0) {
        p.apply();
        for (var d of A(p, qt))
          Ke(c = p, vt, Ca).call(c, d, [], []);
        ye(p, qt, []);
      }
      p.deactivate();
    }
  }
  for (const p of ci)
    A(p, Ai).has(this) && (A(p, Ai).delete(this), A(p, Ai).size === 0 && !Ke(h = p, vt, Br).call(h) && (p.activate(), Ke(f = p, vt, Ur).call(f)));
};
let Mi = Wr;
function Qo(n) {
  var e = vr;
  vr = !0;
  try {
    for (var t; ; ) {
      if (Go(), le === null)
        return (
          /** @type {T} */
          t
        );
      le.flush();
    }
  } finally {
    vr = e;
  }
}
function Zo() {
  try {
    Ro();
  } catch (n) {
    ni(n, Ea);
  }
}
let hn = null;
function vs(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var i = n[t++];
      if (!(i.f & (Zt | kt)) && Lr(i) && (hn = /* @__PURE__ */ new Set(), $i(i), i.deps === null && i.first === null && i.nodes === null && i.teardown === null && i.ac === null && wl(i), (hn == null ? void 0 : hn.size) > 0)) {
        Si.clear();
        for (const r of hn) {
          if (r.f & (Zt | kt)) continue;
          const a = [r];
          let s = r.parent;
          for (; s !== null; )
            hn.has(s) && (hn.delete(s), a.push(s)), s = s.parent;
          for (let u = a.length - 1; u >= 0; u--) {
            const o = a[u];
            o.f & (Zt | kt) || $i(o);
          }
        }
        hn.clear();
      }
    }
    hn = null;
  }
}
function ol(n, e, t, i) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const r of n.reactions) {
      const a = r.f;
      a & _t ? ol(
        /** @type {Derived} */
        r,
        e,
        t,
        i
      ) : a & (mr | Ln) && !(a & Lt) && Xa(r, e, i) && (ut(r, Lt), Wa(
        /** @type {Effect} */
        r
      ));
    }
}
function Xa(n, e, t) {
  const i = t.get(n);
  if (i !== void 0) return i;
  if (n.deps !== null)
    for (const r of n.deps) {
      if (qi.call(e, r))
        return !0;
      if (r.f & _t && Xa(
        /** @type {Derived} */
        r,
        e,
        t
      ))
        return t.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return t.set(n, !1), !1;
}
function Wa(n) {
  le.schedule(n);
}
function ul(n, e) {
  if (!(n.f & In && n.f & At)) {
    n.f & Lt ? e.d.push(n) : n.f & On && e.m.push(n), ut(n, At);
    for (var t = n.first; t !== null; )
      ul(t, e), t = t.next;
  }
}
function dl(n) {
  ut(n, At);
  for (var e = n.first; e !== null; )
    dl(e), e = e.next;
}
function Jo(n) {
  let e = 0, t = Oi(0), i;
  return () => {
    qa() && (l(t), ea(() => (e === 0 && (i = si(() => n(() => pr(t)))), e += 1, () => {
      Xn(() => {
        e -= 1, e === 0 && (i == null || i(), i = void 0, pr(t));
      });
    })));
  };
}
var $o = Wn | tr;
function eu(n, e, t, i) {
  new tu(n, e, t, i);
}
var rn, Ba, an, yi, jt, sn, Pt, Yt, jn, Ei, ti, Wi, Ar, yr, Gn, Kr, st, nu, iu, ru, Sa, Hr, Vr, xa, Ta;
class tu {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, t, i, r) {
    ge(this, st);
    /** @type {Boundary | null} */
    fn(this, "parent");
    fn(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    fn(this, "transform_error");
    /** @type {TemplateNode} */
    ge(this, rn);
    /** @type {TemplateNode | null} */
    ge(this, Ba, null);
    /** @type {BoundaryProps} */
    ge(this, an);
    /** @type {((anchor: Node) => void)} */
    ge(this, yi);
    /** @type {Effect} */
    ge(this, jt);
    /** @type {Effect | null} */
    ge(this, sn, null);
    /** @type {Effect | null} */
    ge(this, Pt, null);
    /** @type {Effect | null} */
    ge(this, Yt, null);
    /** @type {DocumentFragment | null} */
    ge(this, jn, null);
    ge(this, Ei, 0);
    ge(this, ti, 0);
    ge(this, Wi, !1);
    /** @type {Set<Effect>} */
    ge(this, Ar, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    ge(this, yr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    ge(this, Gn, null);
    ge(this, Kr, Jo(() => (ye(this, Gn, Oi(A(this, Ei))), () => {
      ye(this, Gn, null);
    })));
    var a;
    ye(this, rn, e), ye(this, an, t), ye(this, yi, (s) => {
      var u = (
        /** @type {Effect} */
        Le
      );
      u.b = this, u.f |= pa, i(s);
    }), this.parent = /** @type {Effect} */
    Le.b, this.transform_error = r ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((s) => s), ye(this, jt, nr(() => {
      Ke(this, st, Sa).call(this);
    }, $o));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    al(e, A(this, Ar), A(this, yr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!A(this, an).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, t) {
    Ke(this, st, xa).call(this, e, t), ye(this, Ei, A(this, Ei) + e), !(!A(this, Gn) || A(this, Wi)) && (ye(this, Wi, !0), Xn(() => {
      ye(this, Wi, !1), A(this, Gn) && Zi(A(this, Gn), A(this, Ei));
    }));
  }
  get_effect_pending() {
    return A(this, Kr).call(this), l(
      /** @type {Source<number>} */
      A(this, Gn)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!A(this, an).onerror && !A(this, an).failed)
      throw e;
    le != null && le.is_fork ? (A(this, sn) && le.skip_effect(A(this, sn)), A(this, Pt) && le.skip_effect(A(this, Pt)), A(this, Yt) && le.skip_effect(A(this, Yt)), le.on_fork_commit(() => {
      Ke(this, st, Ta).call(this, e);
    })) : Ke(this, st, Ta).call(this, e);
  }
}
rn = new WeakMap(), Ba = new WeakMap(), an = new WeakMap(), yi = new WeakMap(), jt = new WeakMap(), sn = new WeakMap(), Pt = new WeakMap(), Yt = new WeakMap(), jn = new WeakMap(), Ei = new WeakMap(), ti = new WeakMap(), Wi = new WeakMap(), Ar = new WeakMap(), yr = new WeakMap(), Gn = new WeakMap(), Kr = new WeakMap(), st = new WeakSet(), nu = function() {
  try {
    ye(this, sn, zt(() => A(this, yi).call(this, A(this, rn))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
iu = function(e) {
  const t = A(this, an).failed;
  t && ye(this, Yt, zt(() => {
    t(
      A(this, rn),
      () => e,
      () => () => {
      }
    );
  }));
}, ru = function() {
  const e = A(this, an).pending;
  e && (this.is_pending = !0, ye(this, Pt, zt(() => e(A(this, rn)))), Xn(() => {
    var t = ye(this, jn, document.createDocumentFragment()), i = Mn();
    t.append(i), ye(this, sn, Ke(this, st, Vr).call(this, () => zt(() => A(this, yi).call(this, i)))), A(this, ti) === 0 && (A(this, rn).before(t), ye(this, jn, null), xi(
      /** @type {Effect} */
      A(this, Pt),
      () => {
        ye(this, Pt, null);
      }
    ), Ke(this, st, Hr).call(
      this,
      /** @type {Batch} */
      le
    ));
  }));
}, Sa = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), ye(this, ti, 0), ye(this, Ei, 0), ye(this, sn, zt(() => {
      A(this, yi).call(this, A(this, rn));
    })), A(this, ti) > 0) {
      var e = ye(this, jn, document.createDocumentFragment());
      Za(A(this, sn), e);
      const t = (
        /** @type {(anchor: Node) => void} */
        A(this, an).pending
      );
      ye(this, Pt, zt(() => t(A(this, rn))));
    } else
      Ke(this, st, Hr).call(
        this,
        /** @type {Batch} */
        le
      );
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {Batch} batch
 */
Hr = function(e) {
  this.is_pending = !1, e.transfer_effects(A(this, Ar), A(this, yr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Vr = function(e) {
  var t = Le, i = Se, r = ht;
  Dn(A(this, jt)), un(A(this, jt)), Qi(A(this, jt).ctx);
  try {
    return Mi.ensure(), e();
  } catch (a) {
    return il(a), null;
  } finally {
    Dn(t), un(i), Qi(r);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
xa = function(e, t) {
  var i;
  if (!this.has_pending_snippet()) {
    this.parent && Ke(i = this.parent, st, xa).call(i, e, t);
    return;
  }
  ye(this, ti, A(this, ti) + e), A(this, ti) === 0 && (Ke(this, st, Hr).call(this, t), A(this, Pt) && xi(A(this, Pt), () => {
    ye(this, Pt, null);
  }), A(this, jn) && (A(this, rn).before(A(this, jn)), ye(this, jn, null)));
}, /**
 * @param {unknown} error
 */
Ta = function(e) {
  A(this, sn) && (wt(A(this, sn)), ye(this, sn, null)), A(this, Pt) && (wt(A(this, Pt)), ye(this, Pt, null)), A(this, Yt) && (wt(A(this, Yt)), ye(this, Yt, null));
  var t = A(this, an).onerror;
  let i = A(this, an).failed;
  var r = !1, a = !1;
  const s = () => {
    if (r) {
      Ho();
      return;
    }
    r = !0, a && Bo(), A(this, Yt) !== null && xi(A(this, Yt), () => {
      ye(this, Yt, null);
    }), Ke(this, st, Vr).call(this, () => {
      Ke(this, st, Sa).call(this);
    });
  }, u = (o) => {
    try {
      a = !0, t == null || t(o, s), a = !1;
    } catch (d) {
      ni(d, A(this, jt) && A(this, jt).parent);
    }
    i && ye(this, Yt, Ke(this, st, Vr).call(this, () => {
      try {
        return zt(() => {
          var d = (
            /** @type {Effect} */
            Le
          );
          d.b = this, d.f |= pa, i(
            A(this, rn),
            () => o,
            () => s
          );
        });
      } catch (d) {
        return ni(
          d,
          /** @type {Effect} */
          A(this, jt).parent
        ), null;
      }
    }));
  };
  Xn(() => {
    var o;
    try {
      o = this.transform_error(e);
    } catch (d) {
      ni(d, A(this, jt) && A(this, jt).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      u,
      /** @param {unknown} e */
      (d) => ni(d, A(this, jt) && A(this, jt).parent)
    ) : u(o);
  });
};
function cl(n, e, t, i) {
  const r = Jr;
  var a = n.filter((f) => !f.settled);
  if (t.length === 0 && a.length === 0) {
    i(e.map(r));
    return;
  }
  var s = (
    /** @type {Effect} */
    Le
  ), u = au(), o = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((f) => f.promise)) : null;
  function d(f) {
    u();
    try {
      i(f);
    } catch (p) {
      s.f & Zt || ni(p, s);
    }
    zr();
  }
  if (t.length === 0) {
    o.then(() => d(e.map(r)));
    return;
  }
  var c = fl();
  function h() {
    Promise.all(t.map((f) => /* @__PURE__ */ su(f))).then((f) => d([...e.map(r), ...f])).catch((f) => ni(f, s)).finally(() => c());
  }
  o ? o.then(() => {
    u(), h(), zr();
  }) : h();
}
function au() {
  var n = (
    /** @type {Effect} */
    Le
  ), e = Se, t = ht, i = (
    /** @type {Batch} */
    le
  );
  return function(a = !0) {
    Dn(n), un(e), Qi(t), a && !(n.f & Zt) && (i == null || i.activate(), i == null || i.apply());
  };
}
function zr(n = !0) {
  Dn(null), un(null), Qi(null), n && (le == null || le.deactivate());
}
function fl() {
  var n = (
    /** @type {Effect} */
    Le
  ), e = (
    /** @type {Boundary} */
    n.b
  ), t = (
    /** @type {Batch} */
    le
  ), i = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(i, n), (r = !1) => {
    e.update_pending_count(-1, t), t.decrement(i, n, r);
  };
}
// @__NO_SIDE_EFFECTS__
function Jr(n) {
  var e = _t | Lt;
  return Le !== null && (Le.f |= tr), {
    ctx: ht,
    deps: null,
    effects: null,
    equals: Js,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      It
    ),
    wv: 0,
    parent: Le,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function su(n, e, t) {
  let i = (
    /** @type {Effect | null} */
    Le
  );
  i === null && Lo();
  var r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Oi(
    /** @type {V} */
    It
  ), s = !Se, u = /* @__PURE__ */ new Map();
  return bu(() => {
    var p;
    var o = (
      /** @type {Effect} */
      Le
    ), d = Ys();
    r = d.promise;
    try {
      Promise.resolve(n()).then(d.resolve, d.reject).finally(zr);
    } catch (v) {
      d.reject(v), zr();
    }
    var c = (
      /** @type {Batch} */
      le
    );
    if (s) {
      if (o.f & Ri)
        var h = fl();
      if (
        /** @type {Boundary} */
        i.b.is_rendered()
      )
        (p = u.get(c)) == null || p.reject(Nn), u.delete(c);
      else {
        for (const v of u.values())
          v.reject(Nn);
        u.clear();
      }
      u.set(c, d);
    }
    const f = (v, m = void 0) => {
      if (h) {
        var g = m === Nn;
        h(g);
      }
      if (!(m === Nn || o.f & Zt)) {
        if (c.activate(), m)
          a.f |= ri, Zi(a, m);
        else {
          a.f & ri && (a.f ^= ri), Zi(a, v);
          for (const [E, D] of u) {
            if (u.delete(E), E === c) break;
            D.reject(Nn);
          }
        }
        c.deactivate();
      }
    };
    d.promise.then(f, (v) => f(null, v || "unknown"));
  }), xr(() => {
    for (const o of u.values())
      o.reject(Nn);
  }), new Promise((o) => {
    function d(c) {
      function h() {
        c === r ? o(a) : d(r);
      }
      c.then(h, h);
    }
    d(r);
  });
}
// @__NO_SIDE_EFFECTS__
function oe(n) {
  const e = /* @__PURE__ */ Jr(n);
  return Dl(e), e;
}
// @__NO_SIDE_EFFECTS__
function hl(n) {
  const e = /* @__PURE__ */ Jr(n);
  return e.equals = $s, e;
}
function lu(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      wt(
        /** @type {Effect} */
        e[t]
      );
  }
}
function Ka(n) {
  var e, t = Le, i = n.parent;
  if (!Kn && i !== null && i.f & (Zt | kt))
    return Uo(), n.v;
  Dn(i);
  try {
    n.f &= ~wi, lu(n), e = kl(n);
  } finally {
    Dn(t);
  }
  return e;
}
function vl(n) {
  var e = Ka(n);
  if (!n.equals(e) && (n.wv = _l(), (!(le != null && le.is_fork) || n.deps === null) && (le !== null ? le.capture(n, e, !0) : n.v = e, n.deps === null))) {
    ut(n, At);
    return;
  }
  Kn || (xt !== null ? (qa() || le != null && le.is_fork) && xt.set(n, e) : Ga(n));
}
function ou(n) {
  var e, t;
  if (n.effects !== null)
    for (const i of n.effects)
      (i.teardown || i.ac) && ((e = i.teardown) == null || e.call(i), (t = i.ac) == null || t.abort(Nn), i.teardown = Ae, i.ac = null, gr(i, 0), Ya(i));
}
function pl(n) {
  if (n.effects !== null)
    for (const e of n.effects)
      e.teardown && $i(e);
}
let La = /* @__PURE__ */ new Set();
const Si = /* @__PURE__ */ new Map();
let ml = !1;
function Oi(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: Js,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function ce(n, e) {
  const t = Oi(n);
  return Dl(t), t;
}
// @__NO_SIDE_EFFECTS__
function gl(n, e = !1, t = !0) {
  const i = Oi(n);
  return e || (i.equals = $s), i;
}
function W(n, e, t = !1) {
  Se !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!mn || Se.f & ga) && el() && Se.f & (_t | Ln | mr | ga) && (on === null || !qi.call(on, n)) && Fo();
  let i = t ? Te(e) : e;
  return Zi(n, i, Fr);
}
function Zi(n, e, t = null) {
  if (!n.equals(e)) {
    Si.set(n, Kn ? e : n.v);
    var i = Mi.ensure();
    if (i.capture(n, e), n.f & _t) {
      const r = (
        /** @type {Derived} */
        n
      );
      n.f & Lt && Ka(r), xt === null && Ga(r);
    }
    n.wv = _l(), Il(n, Lt, t), Le !== null && Le.f & At && !(Le.f & (In | ai)) && (nn === null ? Eu([n]) : nn.push(n)), !i.is_fork && La.size > 0 && !ml && uu();
  }
  return e;
}
function uu() {
  ml = !1;
  for (const n of La)
    n.f & At && ut(n, On), Lr(n) && $i(n);
  La.clear();
}
function pr(n) {
  W(n, n.v + 1);
}
function Il(n, e, t) {
  var i = n.reactions;
  if (i !== null)
    for (var r = i.length, a = 0; a < r; a++) {
      var s = i[a], u = s.f, o = (u & Lt) === 0;
      if (o && ut(s, e), u & _t) {
        var d = (
          /** @type {Derived} */
          s
        );
        xt == null || xt.delete(d), u & wi || (u & ln && (s.f |= wi), Il(d, On, t));
      } else if (o) {
        var c = (
          /** @type {Effect} */
          s
        );
        u & Ln && hn !== null && hn.add(c), t !== null ? t.push(c) : Wa(c);
      }
    }
}
function Te(n) {
  if (typeof n != "object" || n === null || wn in n)
    return n;
  const e = Na(n);
  if (e !== yo && e !== Eo)
    return n;
  var t = /* @__PURE__ */ new Map(), i = Ua(n), r = /* @__PURE__ */ ce(0), a = Ti, s = (u) => {
    if (Ti === a)
      return u();
    var o = Se, d = Ti;
    un(null), bs(a);
    var c = u();
    return un(o), bs(d), c;
  };
  return i && t.set("length", /* @__PURE__ */ ce(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(u, o, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Po();
        var c = t.get(o);
        return c === void 0 ? s(() => {
          var h = /* @__PURE__ */ ce(d.value);
          return t.set(o, h), h;
        }) : W(c, d.value, !0), !0;
      },
      deleteProperty(u, o) {
        var d = t.get(o);
        if (d === void 0) {
          if (o in u) {
            const c = s(() => /* @__PURE__ */ ce(It));
            t.set(o, c), pr(r);
          }
        } else
          W(d, It), pr(r);
        return !0;
      },
      get(u, o, d) {
        var p;
        if (o === wn)
          return n;
        var c = t.get(o), h = o in u;
        if (c === void 0 && (!h || (p = ii(u, o)) != null && p.writable) && (c = s(() => {
          var v = Te(h ? u[o] : It), m = /* @__PURE__ */ ce(v);
          return m;
        }), t.set(o, c)), c !== void 0) {
          var f = l(c);
          return f === It ? void 0 : f;
        }
        return Reflect.get(u, o, d);
      },
      getOwnPropertyDescriptor(u, o) {
        var d = Reflect.getOwnPropertyDescriptor(u, o);
        if (d && "value" in d) {
          var c = t.get(o);
          c && (d.value = l(c));
        } else if (d === void 0) {
          var h = t.get(o), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== It)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return d;
      },
      has(u, o) {
        var f;
        if (o === wn)
          return !0;
        var d = t.get(o), c = d !== void 0 && d.v !== It || Reflect.has(u, o);
        if (d !== void 0 || Le !== null && (!c || (f = ii(u, o)) != null && f.writable)) {
          d === void 0 && (d = s(() => {
            var p = c ? Te(u[o]) : It, v = /* @__PURE__ */ ce(p);
            return v;
          }), t.set(o, d));
          var h = l(d);
          if (h === It)
            return !1;
        }
        return c;
      },
      set(u, o, d, c) {
        var S;
        var h = t.get(o), f = o in u;
        if (i && o === "length")
          for (var p = d; p < /** @type {Source<number>} */
          h.v; p += 1) {
            var v = t.get(p + "");
            v !== void 0 ? W(v, It) : p in u && (v = s(() => /* @__PURE__ */ ce(It)), t.set(p + "", v));
          }
        if (h === void 0)
          (!f || (S = ii(u, o)) != null && S.writable) && (h = s(() => /* @__PURE__ */ ce(void 0)), W(h, Te(d)), t.set(o, h));
        else {
          f = h.v !== It;
          var m = s(() => Te(d));
          W(h, m);
        }
        var g = Reflect.getOwnPropertyDescriptor(u, o);
        if (g != null && g.set && g.set.call(c, d), !f) {
          if (i && typeof o == "string") {
            var E = (
              /** @type {Source<number>} */
              t.get("length")
            ), D = Number(o);
            Number.isInteger(D) && D >= E.v && W(E, D + 1);
          }
          pr(r);
        }
        return !0;
      },
      ownKeys(u) {
        l(r);
        var o = Reflect.ownKeys(u).filter((h) => {
          var f = t.get(h);
          return f === void 0 || f.v !== It;
        });
        for (var [d, c] of t)
          c.v !== It && !(d in u) && o.push(d);
        return o;
      },
      setPrototypeOf() {
        ko();
      }
    }
  );
}
function ps(n) {
  try {
    if (n !== null && typeof n == "object" && wn in n)
      return n[wn];
  } catch {
  }
  return n;
}
function du(n, e) {
  return Object.is(ps(n), ps(e));
}
var ms, bl, Al, yl, El;
function cu() {
  if (ms === void 0) {
    ms = window, bl = document, Al = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    yl = ii(e, "firstChild").get, El = ii(e, "nextSibling").get, fs(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), fs(t) && (t.__t = void 0);
  }
}
function Mn(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Ji(n) {
  return (
    /** @type {TemplateNode | null} */
    yl.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function Sr(n) {
  return (
    /** @type {TemplateNode | null} */
    El.call(n)
  );
}
function Y(n, e) {
  return /* @__PURE__ */ Ji(n);
}
function re(n, e = !1) {
  {
    var t = /* @__PURE__ */ Ji(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Sr(t) : t;
  }
}
function z(n, e = 1, t = !1) {
  let i = n;
  for (; e--; )
    i = /** @type {TemplateNode} */
    /* @__PURE__ */ Sr(i);
  return i;
}
function fu(n) {
  n.textContent = "";
}
function Cl() {
  return !1;
}
function Sl(n, e, t) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(e ?? Ws, n, void 0)
  );
}
function hu(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, Xn(() => {
      document.activeElement === t && n.focus();
    });
  }
}
let gs = !1;
function vu() {
  gs || (gs = !0, document.addEventListener(
    "reset",
    (n) => {
      Promise.resolve().then(() => {
        var e;
        if (!n.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            n.target.elements
          )
            (e = t.__on_r) == null || e.call(t);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function $r(n) {
  var e = Se, t = Le;
  un(null), Dn(null);
  try {
    return n();
  } finally {
    un(e), Dn(t);
  }
}
function pu(n, e, t, i = t) {
  n.addEventListener(e, () => $r(t));
  const r = n.__on_r;
  r ? n.__on_r = () => {
    r(), i(!0);
  } : n.__on_r = () => i(!0), vu();
}
function mu(n) {
  Le === null && (Se === null && Do(), Oo()), Kn && Mo();
}
function gu(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function Rn(n, e) {
  var t = Le;
  t !== null && t.f & kt && (n |= kt);
  var i = {
    ctx: ht,
    deps: null,
    nodes: null,
    f: n | Lt | ln,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: t,
    b: t && t.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  le == null || le.register_created_effect(i);
  var r = i;
  if (n & Yi)
    Ui !== null ? Ui.push(i) : Mi.ensure().schedule(i);
  else if (e !== null) {
    try {
      $i(i);
    } catch (s) {
      throw wt(i), s;
    }
    r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
    !(r.f & tr) && (r = r.first, n & Ln && n & Wn && r !== null && (r.f |= Wn));
  }
  if (r !== null && (r.parent = t, t !== null && gu(r, t), Se !== null && Se.f & _t && !(n & ai))) {
    var a = (
      /** @type {Derived} */
      Se
    );
    (a.effects ?? (a.effects = [])).push(r);
  }
  return i;
}
function qa() {
  return Se !== null && !mn;
}
function xr(n) {
  const e = Rn(Qr, null);
  return ut(e, At), e.teardown = n, e;
}
function Pe(n) {
  mu();
  var e = (
    /** @type {Effect} */
    Le.f
  ), t = !Se && (e & In) !== 0 && (e & Ri) === 0;
  if (t) {
    var i = (
      /** @type {ComponentContext} */
      ht
    );
    (i.e ?? (i.e = [])).push(n);
  } else
    return xl(n);
}
function xl(n) {
  return Rn(Yi | xo, n);
}
function Iu(n) {
  Mi.ensure();
  const e = Rn(ai | tr, n);
  return (t = {}) => new Promise((i) => {
    t.outro ? xi(e, () => {
      wt(e), i(void 0);
    }) : (wt(e), i(void 0));
  });
}
function Tr(n) {
  return Rn(Yi, n);
}
function bu(n) {
  return Rn(mr | tr, n);
}
function ea(n, e = 0) {
  return Rn(Qr | e, n);
}
function ke(n, e = [], t = [], i = []) {
  cl(i, e, t, (r) => {
    Rn(Qr, () => n(...r.map(l)));
  });
}
function nr(n, e = 0) {
  var t = Rn(Ln | e, n);
  return t;
}
function Tl(n, e = 0) {
  var t = Rn(Ha | e, n);
  return t;
}
function zt(n) {
  return Rn(In | tr, n);
}
function Ll(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Kn, i = Se;
    Is(!0), un(null);
    try {
      e.call(null);
    } finally {
      Is(t), un(i);
    }
  }
}
function Ya(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const r = t.ac;
    r !== null && $r(() => {
      r.abort(Nn);
    });
    var i = t.next;
    t.f & ai ? t.parent = null : wt(t, e), t = i;
  }
}
function Au(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & In || wt(e), e = t;
  }
}
function wt(n, e = !0) {
  var t = !1;
  (e || n.f & So) && n.nodes !== null && n.nodes.end !== null && (yu(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), ut(n, ma), Ya(n, e && !t), gr(n, 0);
  var i = n.nodes && n.nodes.t;
  if (i !== null)
    for (const a of i)
      a.stop();
  Ll(n), n.f ^= ma, n.f |= Zt;
  var r = n.parent;
  r !== null && r.first !== null && wl(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = n.b = null;
}
function yu(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : /* @__PURE__ */ Sr(n);
    n.remove(), n = t;
  }
}
function wl(n) {
  var e = n.parent, t = n.prev, i = n.next;
  t !== null && (t.next = i), i !== null && (i.prev = t), e !== null && (e.first === n && (e.first = i), e.last === n && (e.last = t));
}
function xi(n, e, t = !0) {
  var i = [];
  Ml(n, i, !0);
  var r = () => {
    t && wt(n), e && e();
  }, a = i.length;
  if (a > 0) {
    var s = () => --a || r();
    for (var u of i)
      u.out(s);
  } else
    r();
}
function Ml(n, e, t) {
  if (!(n.f & kt)) {
    n.f ^= kt;
    var i = n.nodes && n.nodes.t;
    if (i !== null)
      for (const u of i)
        (u.is_global || t) && e.push(u);
    for (var r = n.first; r !== null; ) {
      var a = r.next;
      if (!(r.f & ai)) {
        var s = (r.f & Wn) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (r.f & In) !== 0 && (n.f & Ln) !== 0;
        Ml(r, e, s ? t : !1);
      }
      r = a;
    }
  }
}
function Qa(n) {
  Ol(n, !0);
}
function Ol(n, e) {
  if (n.f & kt) {
    n.f ^= kt, n.f & At || (ut(n, Lt), Mi.ensure().schedule(n));
    for (var t = n.first; t !== null; ) {
      var i = t.next, r = (t.f & Wn) !== 0 || (t.f & In) !== 0;
      Ol(t, r ? e : !1), t = i;
    }
    var a = n.nodes && n.nodes.t;
    if (a !== null)
      for (const s of a)
        (s.is_global || e) && s.in();
  }
}
function Za(n, e) {
  if (n.nodes)
    for (var t = n.nodes.start, i = n.nodes.end; t !== null; ) {
      var r = t === i ? null : /* @__PURE__ */ Sr(t);
      e.append(t), t = r;
    }
}
let jr = !1, Kn = !1;
function Is(n) {
  Kn = n;
}
let Se = null, mn = !1;
function un(n) {
  Se = n;
}
let Le = null;
function Dn(n) {
  Le = n;
}
let on = null;
function Dl(n) {
  Se !== null && (on === null ? on = [n] : on.push(n));
}
let Gt = null, Kt = 0, nn = null;
function Eu(n) {
  nn = n;
}
let Rl = 1, gi = 0, Ti = gi;
function bs(n) {
  Ti = n;
}
function _l() {
  return ++Rl;
}
function Lr(n) {
  var e = n.f;
  if (e & Lt)
    return !0;
  if (e & _t && (n.f &= ~wi), e & On) {
    for (var t = (
      /** @type {Value[]} */
      n.deps
    ), i = t.length, r = 0; r < i; r++) {
      var a = t[r];
      if (Lr(
        /** @type {Derived} */
        a
      ) && vl(
        /** @type {Derived} */
        a
      ), a.wv > n.wv)
        return !0;
    }
    e & ln && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    xt === null && ut(n, At);
  }
  return !1;
}
function Pl(n, e, t = !0) {
  var i = n.reactions;
  if (i !== null && !(on !== null && qi.call(on, n)))
    for (var r = 0; r < i.length; r++) {
      var a = i[r];
      a.f & _t ? Pl(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? ut(a, Lt) : a.f & At && ut(a, On), Wa(
        /** @type {Effect} */
        a
      ));
    }
}
function kl(n) {
  var m;
  var e = Gt, t = Kt, i = nn, r = Se, a = on, s = ht, u = mn, o = Ti, d = n.f;
  Gt = /** @type {null | Value[]} */
  null, Kt = 0, nn = null, Se = d & (In | ai) ? null : n, on = null, Qi(n.ctx), mn = !1, Ti = ++gi, n.ac !== null && ($r(() => {
    n.ac.abort(Nn);
  }), n.ac = null);
  try {
    n.f |= Ia;
    var c = (
      /** @type {Function} */
      n.fn
    ), h = c();
    n.f |= Ri;
    var f = n.deps, p = le == null ? void 0 : le.is_fork;
    if (Gt !== null) {
      var v;
      if (p || gr(n, Kt), f !== null && Kt > 0)
        for (f.length = Kt + Gt.length, v = 0; v < Gt.length; v++)
          f[Kt + v] = Gt[v];
      else
        n.deps = f = Gt;
      if (qa() && n.f & ln)
        for (v = Kt; v < f.length; v++)
          ((m = f[v]).reactions ?? (m.reactions = [])).push(n);
    } else !p && f !== null && Kt < f.length && (gr(n, Kt), f.length = Kt);
    if (el() && nn !== null && !mn && f !== null && !(n.f & (_t | On | Lt)))
      for (v = 0; v < /** @type {Source[]} */
      nn.length; v++)
        Pl(
          nn[v],
          /** @type {Effect} */
          n
        );
    if (r !== null && r !== n) {
      if (gi++, r.deps !== null)
        for (let g = 0; g < t; g += 1)
          r.deps[g].rv = gi;
      if (e !== null)
        for (const g of e)
          g.rv = gi;
      nn !== null && (i === null ? i = nn : i.push(.../** @type {Source[]} */
      nn));
    }
    return n.f & ri && (n.f ^= ri), h;
  } catch (g) {
    return il(g);
  } finally {
    n.f ^= Ia, Gt = e, Kt = t, nn = i, Se = r, on = a, Qi(s), mn = u, Ti = o;
  }
}
function Cu(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var i = Ao.call(t, n);
    if (i !== -1) {
      var r = t.length - 1;
      r === 0 ? t = e.reactions = null : (t[i] = t[r], t.pop());
    }
  }
  if (t === null && e.f & _t && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Gt === null || !qi.call(Gt, e))) {
    var a = (
      /** @type {Derived} */
      e
    );
    a.f & ln && (a.f ^= ln, a.f &= ~wi), a.v !== It && Ga(a), ou(a), gr(a, 0);
  }
}
function gr(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var i = e; i < t.length; i++)
      Cu(n, t[i]);
}
function $i(n) {
  var e = n.f;
  if (!(e & Zt)) {
    ut(n, At);
    var t = Le, i = jr;
    Le = n, jr = !0;
    try {
      e & (Ln | Ha) ? Au(n) : Ya(n), Ll(n);
      var r = kl(n);
      n.teardown = typeof r == "function" ? r : null, n.wv = Rl;
      var a;
      bo && Vo && n.f & Lt && n.deps;
    } finally {
      jr = i, Le = t;
    }
  }
}
async function Fl() {
  await Promise.resolve(), Qo();
}
function l(n) {
  var e = n.f, t = (e & _t) !== 0;
  if (Se !== null && !mn) {
    var i = Le !== null && (Le.f & Zt) !== 0;
    if (!i && (on === null || !qi.call(on, n))) {
      var r = Se.deps;
      if (Se.f & Ia)
        n.rv < gi && (n.rv = gi, Gt === null && r !== null && r[Kt] === n ? Kt++ : Gt === null ? Gt = [n] : Gt.push(n));
      else {
        (Se.deps ?? (Se.deps = [])).push(n);
        var a = n.reactions;
        a === null ? n.reactions = [Se] : qi.call(a, Se) || a.push(Se);
      }
    }
  }
  if (Kn && Si.has(n))
    return Si.get(n);
  if (t) {
    var s = (
      /** @type {Derived} */
      n
    );
    if (Kn) {
      var u = s.v;
      return (!(s.f & At) && s.reactions !== null || Ul(s)) && (u = Ka(s)), Si.set(s, u), u;
    }
    var o = (s.f & ln) === 0 && !mn && Se !== null && (jr || (Se.f & ln) !== 0), d = (s.f & Ri) === 0;
    Lr(s) && (o && (s.f |= ln), vl(s)), o && !d && (pl(s), Bl(s));
  }
  if (xt != null && xt.has(n))
    return xt.get(n);
  if (n.f & ri)
    throw n.v;
  return n.v;
}
function Bl(n) {
  if (n.f |= ln, n.deps !== null)
    for (const e of n.deps)
      (e.reactions ?? (e.reactions = [])).push(n), e.f & _t && !(e.f & ln) && (pl(
        /** @type {Derived} */
        e
      ), Bl(
        /** @type {Derived} */
        e
      ));
}
function Ul(n) {
  if (n.v === It) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Si.has(e) || e.f & _t && Ul(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function si(n) {
  var e = mn;
  try {
    return mn = !0, n();
  } finally {
    mn = e;
  }
}
function Su(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (wn in n)
      wa(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && wn in t && wa(t);
      }
  }
}
function wa(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let i in n)
      try {
        wa(n[i], e);
      } catch {
      }
    const t = Na(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const i = qs(t);
      for (let r in i) {
        const a = i[r].get;
        if (a)
          try {
            a.call(n);
          } catch {
          }
      }
    }
  }
}
const Ii = Symbol("events"), Nl = /* @__PURE__ */ new Set(), Ma = /* @__PURE__ */ new Set();
function Ja(n, e, t, i = {}) {
  function r(a) {
    if (i.capture || Oa.call(e, a), !a.cancelBubble)
      return $r(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Xn(() => {
    e.addEventListener(n, r, i);
  }) : e.addEventListener(n, r, i), r;
}
function xu(n, e, t, i = {}) {
  var r = Ja(e, n, t, i);
  return () => {
    n.removeEventListener(e, r, i);
  };
}
function Hl(n, e, t, i, r) {
  var a = { capture: i, passive: r }, s = Ja(n, e, t, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && xr(() => {
    e.removeEventListener(n, s, a);
  });
}
function pn(n, e, t) {
  (e[Ii] ?? (e[Ii] = {}))[n] = t;
}
function $a(n) {
  for (var e = 0; e < n.length; e++)
    Nl.add(n[e]);
  for (var t of Ma)
    t(n);
}
let As = null;
function Oa(n) {
  var g, E;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), i = n.type, r = ((g = n.composedPath) == null ? void 0 : g.call(n)) || [], a = (
    /** @type {null | Element} */
    r[0] || n.target
  );
  As = n;
  var s = 0, u = As === n && n[Ii];
  if (u) {
    var o = r.indexOf(u);
    if (o !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n[Ii] = e;
      return;
    }
    var d = r.indexOf(e);
    if (d === -1)
      return;
    o <= d && (s = o);
  }
  if (a = /** @type {Element} */
  r[s] || n.target, a !== e) {
    Ks(n, "currentTarget", {
      configurable: !0,
      get() {
        return a || t;
      }
    });
    var c = Se, h = Le;
    un(null), Dn(null);
    try {
      for (var f, p = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var m = (E = a[Ii]) == null ? void 0 : E[i];
          m != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === a) && m.call(a, n);
        } catch (D) {
          f ? p.push(D) : f = D;
        }
        if (n.cancelBubble || v === e || v === null)
          break;
        a = v;
      }
      if (f) {
        for (let D of p)
          queueMicrotask(() => {
            throw D;
          });
        throw f;
      }
    } finally {
      n[Ii] = e, delete n.currentTarget, un(c), Dn(h);
    }
  }
}
var zs;
const sa = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((zs = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : zs.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (n) => n
  })
);
function Tu(n) {
  return (
    /** @type {string} */
    (sa == null ? void 0 : sa.createHTML(n)) ?? n
  );
}
function Vl(n) {
  var e = Sl("template");
  return e.innerHTML = Tu(n.replaceAll("<!>", "<!---->")), e.content;
}
function er(n, e) {
  var t = (
    /** @type {Effect} */
    Le
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ae(n, e) {
  var t = (e & 1) !== 0, i = (e & 2) !== 0, r, a = !n.startsWith("<!>");
  return () => {
    r === void 0 && (r = Vl(a ? n : "<!>" + n), t || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ji(r)));
    var s = (
      /** @type {TemplateNode} */
      i || Al ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (t) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ji(s)
      ), o = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      er(u, o);
    } else
      er(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Lu(n, e, t = "svg") {
  var i = !n.startsWith("<!>"), r = `<${t}>${i ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Vl(r)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Ji(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ji(u);
    }
    var o = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return er(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function wu(n, e) {
  return /* @__PURE__ */ Lu(n, e, "svg");
}
function it(n = "") {
  {
    var e = Mn(n + "");
    return er(e, e), e;
  }
}
function ve() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = Mn();
  return n.append(e, t), er(e, t), n;
}
function w(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function Mu(n) {
  return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
}
const Ou = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Du(n) {
  return Ou.includes(n);
}
const Ru = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function _u(n) {
  return n = n.toLowerCase(), Ru[n] ?? n;
}
const Pu = ["touchstart", "touchmove"];
function ku(n) {
  return Pu.includes(n);
}
function be(n, e) {
  var t = e == null ? "" : typeof e == "object" ? `${e}` : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = `${t}`);
}
function Fu(n, e) {
  return Bu(n, e);
}
const Dr = /* @__PURE__ */ new Map();
function Bu(n, { target: e, anchor: t, props: i = {}, events: r, context: a, intro: s = !0, transformError: u }) {
  cu();
  var o = void 0, d = Iu(() => {
    var c = t ?? e.appendChild(Mn());
    eu(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (p) => {
        Ye({});
        var v = (
          /** @type {ComponentContext} */
          ht
        );
        a && (v.c = a), r && (i.$$events = r), o = n(p, i) || {}, Qe();
      },
      u
    );
    var h = /* @__PURE__ */ new Set(), f = (p) => {
      for (var v = 0; v < p.length; v++) {
        var m = p[v];
        if (!h.has(m)) {
          h.add(m);
          var g = ku(m);
          for (const S of [e, document]) {
            var E = Dr.get(S);
            E === void 0 && (E = /* @__PURE__ */ new Map(), Dr.set(S, E));
            var D = E.get(m);
            D === void 0 ? (S.addEventListener(m, Oa, { passive: g }), E.set(m, 1)) : E.set(m, D + 1);
          }
        }
      }
    };
    return f(Yr(Nl)), Ma.add(f), () => {
      var g;
      for (var p of h)
        for (const E of [e, document]) {
          var v = (
            /** @type {Map<string, number>} */
            Dr.get(E)
          ), m = (
            /** @type {number} */
            v.get(p)
          );
          --m == 0 ? (E.removeEventListener(p, Oa), v.delete(p), v.size === 0 && Dr.delete(E)) : v.set(p, m);
        }
      Ma.delete(f), c !== t && ((g = c.parentNode) == null || g.removeChild(c));
    };
  });
  return Uu.set(o, d), o;
}
let Uu = /* @__PURE__ */ new WeakMap();
var vn, Sn, Qt, Ci, Er, Cr, qr;
class ta {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    fn(this, "anchor");
    /** @type {Map<Batch, Key>} */
    ge(this, vn, /* @__PURE__ */ new Map());
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
    ge(this, Sn, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    ge(this, Qt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    ge(this, Ci, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    ge(this, Er, !0);
    /**
     * @param {Batch} batch
     */
    ge(this, Cr, (e) => {
      if (A(this, vn).has(e)) {
        var t = (
          /** @type {Key} */
          A(this, vn).get(e)
        ), i = A(this, Sn).get(t);
        if (i)
          Qa(i), A(this, Ci).delete(t);
        else {
          var r = A(this, Qt).get(t);
          r && (A(this, Sn).set(t, r.effect), A(this, Qt).delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
        }
        for (const [a, s] of A(this, vn)) {
          if (A(this, vn).delete(a), a === e)
            break;
          const u = A(this, Qt).get(s);
          u && (wt(u.effect), A(this, Qt).delete(s));
        }
        for (const [a, s] of A(this, Sn)) {
          if (a === t || A(this, Ci).has(a)) continue;
          const u = () => {
            if (Array.from(A(this, vn).values()).includes(a)) {
              var d = document.createDocumentFragment();
              Za(s, d), d.append(Mn()), A(this, Qt).set(a, { effect: s, fragment: d });
            } else
              wt(s);
            A(this, Ci).delete(a), A(this, Sn).delete(a);
          };
          A(this, Er) || !i ? (A(this, Ci).add(a), xi(s, u, !1)) : u();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    ge(this, qr, (e) => {
      A(this, vn).delete(e);
      const t = Array.from(A(this, vn).values());
      for (const [i, r] of A(this, Qt))
        t.includes(i) || (wt(r.effect), A(this, Qt).delete(i));
    });
    this.anchor = e, ye(this, Er, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var i = (
      /** @type {Batch} */
      le
    ), r = Cl();
    if (t && !A(this, Sn).has(e) && !A(this, Qt).has(e))
      if (r) {
        var a = document.createDocumentFragment(), s = Mn();
        a.append(s), A(this, Qt).set(e, {
          effect: zt(() => t(s)),
          fragment: a
        });
      } else
        A(this, Sn).set(
          e,
          zt(() => t(this.anchor))
        );
    if (A(this, vn).set(i, e), r) {
      for (const [u, o] of A(this, Sn))
        u === e ? i.unskip_effect(o) : i.skip_effect(o);
      for (const [u, o] of A(this, Qt))
        u === e ? i.unskip_effect(o.effect) : i.skip_effect(o.effect);
      i.oncommit(A(this, Cr)), i.ondiscard(A(this, qr));
    } else
      A(this, Cr).call(this, i);
  }
}
vn = new WeakMap(), Sn = new WeakMap(), Qt = new WeakMap(), Ci = new WeakMap(), Er = new WeakMap(), Cr = new WeakMap(), qr = new WeakMap();
function Ee(n, e, ...t) {
  var i = new ta(n);
  nr(() => {
    const r = e() ?? null;
    i.ensure(r, r && ((a) => r(a, ...t)));
  }, Wn);
}
function Ft(n) {
  ht === null && Va(), Pe(() => {
    const e = si(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function li(n) {
  ht === null && Va(), Ft(() => () => si(n));
}
function se(n, e, t = !1) {
  var i = new ta(n), r = t ? Wn : 0;
  function a(s, u) {
    i.ensure(s, u);
  }
  nr(() => {
    var s = !1;
    e((u, o = 0) => {
      s = !0, a(o, u);
    }), s || a(-1, null);
  }, r);
}
function Rr(n, e) {
  return e;
}
function Nu(n, e, t) {
  for (var i = [], r = e.length, a, s = e.length, u = 0; u < r; u++) {
    let h = e[u];
    xi(
      h,
      () => {
        if (a) {
          if (a.pending.delete(h), a.done.add(h), a.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            Da(n, Yr(a.done)), f.delete(a), f.size === 0 && (n.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var o = i.length === 0 && t !== null;
    if (o) {
      var d = (
        /** @type {Element} */
        t
      ), c = (
        /** @type {Element} */
        d.parentNode
      );
      fu(c), c.append(d), n.items.clear();
    }
    Da(n, e, !o);
  } else
    a = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (n.outrogroups ?? (n.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Da(n, e, t = !0) {
  var i;
  if (n.pending.size > 0) {
    i = /* @__PURE__ */ new Set();
    for (const s of n.pending.values())
      for (const u of s)
        i.add(
          /** @type {EachItem} */
          n.items.get(u).e
        );
  }
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    if (i != null && i.has(a)) {
      a.f |= Tn;
      const s = document.createDocumentFragment();
      Za(a, s);
    } else
      wt(e[r], t);
  }
}
var ys;
function fr(n, e, t, i, r, a = null) {
  var s = n, u = /* @__PURE__ */ new Map(), o = (e & 4) !== 0;
  if (o) {
    var d = (
      /** @type {Element} */
      n
    );
    s = d.appendChild(Mn());
  }
  var c = null, h = /* @__PURE__ */ hl(() => {
    var S = t();
    return Ua(S) ? S : S == null ? [] : Yr(S);
  }), f, p = /* @__PURE__ */ new Map(), v = !0;
  function m(S) {
    D.effect.f & Zt || (D.pending.delete(S), D.fallback = c, Hu(D, f, s, e, i), c !== null && (f.length === 0 ? c.f & Tn ? (c.f ^= Tn, hr(c, null, s)) : Qa(c) : xi(c, () => {
      c = null;
    })));
  }
  function g(S) {
    D.pending.delete(S);
  }
  var E = nr(() => {
    f = /** @type {V[]} */
    l(h);
    for (var S = f.length, C = /* @__PURE__ */ new Set(), O = (
      /** @type {Batch} */
      le
    ), L = Cl(), M = 0; M < S; M += 1) {
      var b = f[M], x = i(b, M), G = v ? null : u.get(x);
      G ? (G.v && Zi(G.v, b), G.i && Zi(G.i, M), L && O.unskip_effect(G.e)) : (G = Vu(
        u,
        v ? s : ys ?? (ys = Mn()),
        b,
        x,
        M,
        r,
        e,
        t
      ), v || (G.e.f |= Tn), u.set(x, G)), C.add(x);
    }
    if (S === 0 && a && !c && (v ? c = zt(() => a(s)) : (c = zt(() => a(ys ?? (ys = Mn()))), c.f |= Tn)), S > C.size && wo(), !v)
      if (p.set(O, C), L) {
        for (const [ie, F] of u)
          C.has(ie) || O.skip_effect(F.e);
        O.oncommit(m), O.ondiscard(g);
      } else
        m(O);
    l(h);
  }), D = { effect: E, items: u, pending: p, outrogroups: null, fallback: c };
  v = !1;
}
function or(n) {
  for (; n !== null && !(n.f & In); )
    n = n.next;
  return n;
}
function Hu(n, e, t, i, r) {
  var G, ie, F, N, we, Q, B, H, $;
  var a = (i & 8) !== 0, s = e.length, u = n.items, o = or(n.effect.first), d, c = null, h, f = [], p = [], v, m, g, E;
  if (a)
    for (E = 0; E < s; E += 1)
      v = e[E], m = r(v, E), g = /** @type {EachItem} */
      u.get(m).e, g.f & Tn || ((ie = (G = g.nodes) == null ? void 0 : G.a) == null || ie.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(g));
  for (E = 0; E < s; E += 1) {
    if (v = e[E], m = r(v, E), g = /** @type {EachItem} */
    u.get(m).e, n.outrogroups !== null)
      for (const V of n.outrogroups)
        V.pending.delete(g), V.done.delete(g);
    if (g.f & kt && (Qa(g), a && ((N = (F = g.nodes) == null ? void 0 : F.a) == null || N.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(g))), g.f & Tn)
      if (g.f ^= Tn, g === o)
        hr(g, null, t);
      else {
        var D = c ? c.next : o;
        g === n.effect.last && (n.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), Zn(n, c, g), Zn(n, g, D), hr(g, D, t), c = g, f = [], p = [], o = or(c.next);
        continue;
      }
    if (g !== o) {
      if (d !== void 0 && d.has(g)) {
        if (f.length < p.length) {
          var S = p[0], C;
          c = S.prev;
          var O = f[0], L = f[f.length - 1];
          for (C = 0; C < f.length; C += 1)
            hr(f[C], S, t);
          for (C = 0; C < p.length; C += 1)
            d.delete(p[C]);
          Zn(n, O.prev, L.next), Zn(n, c, O), Zn(n, L, S), o = S, c = L, E -= 1, f = [], p = [];
        } else
          d.delete(g), hr(g, o, t), Zn(n, g.prev, g.next), Zn(n, g, c === null ? n.effect.first : c.next), Zn(n, c, g), c = g;
        continue;
      }
      for (f = [], p = []; o !== null && o !== g; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(o), p.push(o), o = or(o.next);
      if (o === null)
        continue;
    }
    g.f & Tn || f.push(g), c = g, o = or(g.next);
  }
  if (n.outrogroups !== null) {
    for (const V of n.outrogroups)
      V.pending.size === 0 && (Da(n, Yr(V.done)), (we = n.outrogroups) == null || we.delete(V));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (o !== null || d !== void 0) {
    var M = [];
    if (d !== void 0)
      for (g of d)
        g.f & kt || M.push(g);
    for (; o !== null; )
      !(o.f & kt) && o !== n.fallback && M.push(o), o = or(o.next);
    var b = M.length;
    if (b > 0) {
      var x = i & 4 && s === 0 ? t : null;
      if (a) {
        for (E = 0; E < b; E += 1)
          (B = (Q = M[E].nodes) == null ? void 0 : Q.a) == null || B.measure();
        for (E = 0; E < b; E += 1)
          ($ = (H = M[E].nodes) == null ? void 0 : H.a) == null || $.fix();
      }
      Nu(n, M, x);
    }
  }
  a && Xn(() => {
    var V, P;
    if (h !== void 0)
      for (g of h)
        (P = (V = g.nodes) == null ? void 0 : V.a) == null || P.apply();
  });
}
function Vu(n, e, t, i, r, a, s, u) {
  var o = s & 1 ? s & 16 ? Oi(t) : /* @__PURE__ */ gl(t, !1, !1) : null, d = s & 2 ? Oi(r) : null;
  return {
    v: o,
    i: d,
    e: zt(() => (a(e, o ?? t, d ?? r, u), () => {
      n.delete(i);
    }))
  };
}
function hr(n, e, t) {
  if (n.nodes)
    for (var i = n.nodes.start, r = n.nodes.end, a = e && !(e.f & Tn) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; i !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Sr(i)
      );
      if (a.before(i), i === r)
        return;
      i = s;
    }
}
function Zn(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function es(n, e, t) {
  var i = new ta(n);
  nr(() => {
    var r = e() ?? null;
    i.ensure(r, r && ((a) => t(a, r)));
  }, Wn);
}
function Es(n, e, t, i, r, a) {
  var s = null, u = (
    /** @type {TemplateNode} */
    n
  ), o = new ta(u, !1);
  nr(() => {
    const d = e() || null;
    var c = d === "svg" ? go : void 0;
    if (d === null) {
      o.ensure(null, null);
      return;
    }
    return o.ensure(d, (h) => {
      if (d) {
        if (s = Sl(d, c), er(s, s), i) {
          var f = s.appendChild(Mn());
          i(s, f);
        }
        Le.nodes.end = s, h.before(s);
      }
    }), () => {
    };
  }, Wn), xr(() => {
  });
}
function et(n, e, t) {
  Tr(() => {
    var i = si(() => e(n, t == null ? void 0 : t()) || {});
    if (t && (i != null && i.update)) {
      var r = !1, a = (
        /** @type {any} */
        {}
      );
      ea(() => {
        var s = t();
        Su(s), r && ja(a, s) && (a = s, i.update(s));
      }), r = !0;
    }
    if (i != null && i.destroy)
      return () => (
        /** @type {Function} */
        i.destroy()
      );
  });
}
function ju(n, e) {
  var t = void 0, i;
  Tl(() => {
    t !== (t = e()) && (i && (wt(i), i = null), t && (i = zt(() => {
      Tr(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function jl(n) {
  var e, t, i = "";
  if (typeof n == "string" || typeof n == "number") i += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var r = n.length;
    for (e = 0; e < r; e++) n[e] && (t = jl(n[e])) && (i && (i += " "), i += t);
  } else for (t in n) n[t] && (i && (i += " "), i += t);
  return i;
}
function Gu() {
  for (var n, e, t = 0, i = "", r = arguments.length; t < r; t++) (n = arguments[t]) && (e = jl(n)) && (i && (i += " "), i += e);
  return i;
}
function Gl(n) {
  return typeof n == "object" ? Gu(n) : n ?? "";
}
const Cs = [...` 	
\r\f \v\uFEFF`];
function zu(n, e, t) {
  var i = n == null ? "" : "" + n;
  if (e && (i = i ? i + " " + e : e), t) {
    for (var r of Object.keys(t))
      if (t[r])
        i = i ? i + " " + r : r;
      else if (i.length)
        for (var a = r.length, s = 0; (s = i.indexOf(r, s)) >= 0; ) {
          var u = s + a;
          (s === 0 || Cs.includes(i[s - 1])) && (u === i.length || Cs.includes(i[u])) ? i = (s === 0 ? "" : i.substring(0, s)) + i.substring(u + 1) : s = u;
        }
  }
  return i === "" ? null : i;
}
function Ss(n, e = !1) {
  var t = e ? " !important;" : ";", i = "";
  for (var r of Object.keys(n)) {
    var a = n[r];
    a != null && a !== "" && (i += " " + r + ": " + a + t);
  }
  return i;
}
function la(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function Xu(n, e) {
  if (e) {
    var t = "", i, r;
    if (Array.isArray(e) ? (i = e[0], r = e[1]) : i = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, u = !1, o = [];
      i && o.push(...Object.keys(i).map(la)), r && o.push(...Object.keys(r).map(la));
      var d = 0, c = -1;
      const m = n.length;
      for (var h = 0; h < m; h++) {
        var f = n[h];
        if (u ? f === "/" && n[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && n[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !u && a === !1 && s === 0) {
          if (f === ":" && c === -1)
            c = h;
          else if (f === ";" || h === m - 1) {
            if (c !== -1) {
              var p = la(n.substring(d, c).trim());
              if (!o.includes(p)) {
                f !== ";" && h++;
                var v = n.substring(d, h).trim();
                t += " " + v + ";";
              }
            }
            d = h + 1, c = -1;
          }
        }
      }
    }
    return i && (t += Ss(i)), r && (t += Ss(r, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function zn(n, e, t, i, r, a) {
  var s = n.__className;
  if (s !== t || s === void 0) {
    var u = zu(t, i, a);
    u == null ? n.removeAttribute("class") : e ? n.className = u : n.setAttribute("class", u), n.__className = t;
  } else if (a && r !== a)
    for (var o in a) {
      var d = !!a[o];
      (r == null || d !== !!r[o]) && n.classList.toggle(o, d);
    }
  return a;
}
function oa(n, e = {}, t, i) {
  for (var r in t) {
    var a = t[r];
    e[r] !== a && (t[r] == null ? n.style.removeProperty(r) : n.style.setProperty(r, a, i));
  }
}
function zl(n, e, t, i) {
  var r = n.__style;
  if (r !== e) {
    var a = Xu(e, i);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else i && (Array.isArray(i) ? (oa(n, t == null ? void 0 : t[0], i[0]), oa(n, t == null ? void 0 : t[1], i[1], "important")) : oa(n, t, i));
  return i;
}
function Ra(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Ua(e))
      return No();
    for (var i of n.options)
      i.selected = e.includes(xs(i));
    return;
  }
  for (i of n.options) {
    var r = xs(i);
    if (du(r, e)) {
      i.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function Wu(n) {
  var e = new MutationObserver(() => {
    Ra(n, n.__value);
  });
  e.observe(n, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), xr(() => {
    e.disconnect();
  });
}
function xs(n) {
  return "__value" in n ? n.__value : n.value;
}
const ur = Symbol("class"), dr = Symbol("style"), Xl = Symbol("is custom element"), Wl = Symbol("is html"), Ku = Zs ? "option" : "OPTION", qu = Zs ? "select" : "SELECT";
function Yu(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function Di(n, e, t, i) {
  var r = Kl(n);
  r[e] !== (r[e] = t) && (e === "loading" && (n[To] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && ql(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function Qu(n, e, t, i, r = !1, a = !1) {
  var s = Kl(n), u = s[Xl], o = !s[Wl], d = e || {}, c = n.nodeName === Ku;
  for (var h in e)
    h in t || (t[h] = null);
  t.class ? t.class = Gl(t.class) : t[ur] && (t.class = null), t[dr] && (t.style ?? (t.style = null));
  var f = ql(n);
  for (const S in t) {
    let C = t[S];
    if (c && S === "value" && C == null) {
      n.value = n.__value = "", d[S] = C;
      continue;
    }
    if (S === "class") {
      var p = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      zn(n, p, C, i, e == null ? void 0 : e[ur], t[ur]), d[S] = C, d[ur] = t[ur];
      continue;
    }
    if (S === "style") {
      zl(n, C, e == null ? void 0 : e[dr], t[dr]), d[S] = C, d[dr] = t[dr];
      continue;
    }
    var v = d[S];
    if (!(C === v && !(C === void 0 && n.hasAttribute(S)))) {
      d[S] = C;
      var m = S[0] + S[1];
      if (m !== "$$")
        if (m === "on") {
          const O = {}, L = "$$" + S;
          let M = S.slice(2);
          var g = Du(M);
          if (Mu(M) && (M = M.slice(0, -7), O.capture = !0), !g && v) {
            if (C != null) continue;
            n.removeEventListener(M, d[L], O), d[L] = null;
          }
          if (g)
            pn(M, n, C), $a([M]);
          else if (C != null) {
            let b = function(x) {
              d[S].call(this, x);
            };
            d[L] = Ja(M, n, b, O);
          }
        } else if (S === "style")
          Di(n, S, C);
        else if (S === "autofocus")
          hu(
            /** @type {HTMLElement} */
            n,
            !!C
          );
        else if (!u && (S === "__value" || S === "value" && C != null))
          n.value = n.__value = C;
        else if (S === "selected" && c)
          Yu(
            /** @type {HTMLOptionElement} */
            n,
            C
          );
        else {
          var E = S;
          o || (E = _u(E));
          var D = E === "defaultValue" || E === "defaultChecked";
          if (C == null && !u && !D)
            if (s[S] = null, E === "value" || E === "checked") {
              let O = (
                /** @type {HTMLInputElement} */
                n
              );
              const L = e === void 0;
              if (E === "value") {
                let M = O.defaultValue;
                O.removeAttribute(E), O.defaultValue = M, O.value = O.__value = L ? M : null;
              } else {
                let M = O.defaultChecked;
                O.removeAttribute(E), O.defaultChecked = M, O.checked = L ? M : !1;
              }
            } else
              n.removeAttribute(S);
          else D || f.includes(E) && (u || typeof C != "string") ? (n[E] = C, E in s && (s[E] = It)) : typeof C != "function" && Di(n, E, C);
        }
    }
  }
  return d;
}
function ft(n, e, t = [], i = [], r = [], a, s = !1, u = !1) {
  cl(r, t, i, (o) => {
    var d = void 0, c = {}, h = n.nodeName === qu, f = !1;
    if (Tl(() => {
      var v = e(...o.map(l)), m = Qu(
        n,
        d,
        v,
        a,
        s,
        u
      );
      f && h && "value" in v && Ra(
        /** @type {HTMLSelectElement} */
        n,
        v.value
      );
      for (let E of Object.getOwnPropertySymbols(c))
        v[E] || wt(c[E]);
      for (let E of Object.getOwnPropertySymbols(v)) {
        var g = v[E];
        E.description === Io && (!d || g !== d[E]) && (c[E] && wt(c[E]), c[E] = zt(() => ju(n, () => g))), m[E] = g;
      }
      d = m;
    }), h) {
      var p = (
        /** @type {HTMLSelectElement} */
        n
      );
      Tr(() => {
        Ra(
          p,
          /** @type {Record<string | symbol, any>} */
          d.value,
          !0
        ), Wu(p);
      });
    }
    f = !0;
  });
}
function Kl(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Xl]: n.nodeName.includes("-"),
      [Wl]: n.namespaceURI === Ws
    })
  );
}
var Ts = /* @__PURE__ */ new Map();
function ql(n) {
  var e = n.getAttribute("is") || n.nodeName, t = Ts.get(e);
  if (t) return t;
  Ts.set(e, t = []);
  for (var i, r = n, a = Element.prototype; a !== r; ) {
    i = qs(r);
    for (var s in i)
      i[s].set && t.push(s);
    r = Na(r);
  }
  return t;
}
function Zu(n, e, t = e) {
  var i = /* @__PURE__ */ new WeakSet();
  pu(n, "input", async (r) => {
    var a = r ? n.defaultValue : n.value;
    if (a = ua(n) ? da(a) : a, t(a), le !== null && i.add(le), await Fl(), a !== (a = e())) {
      var s = n.selectionStart, u = n.selectionEnd, o = n.value.length;
      if (n.value = a ?? "", u !== null) {
        var d = n.value.length;
        s === u && u === o && d > o ? (n.selectionStart = d, n.selectionEnd = d) : (n.selectionStart = s, n.selectionEnd = Math.min(u, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  si(e) == null && n.value && (t(ua(n) ? da(n.value) : n.value), le !== null && i.add(le)), ea(() => {
    var r = e();
    if (n === document.activeElement) {
      var a = (
        /** @type {Batch} */
        le
      );
      if (i.has(a))
        return;
    }
    ua(n) && r === da(n.value) || n.type === "date" && !r && !n.value || r !== n.value && (n.value = r ?? "");
  });
}
function ua(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function da(n) {
  return n === "" ? null : +n;
}
function Ls(n, e) {
  return n === e || (n == null ? void 0 : n[wn]) === e;
}
function Re(n = {}, e, t, i) {
  var r = (
    /** @type {ComponentContext} */
    ht.r
  ), a = (
    /** @type {Effect} */
    Le
  );
  return Tr(() => {
    var s, u;
    return ea(() => {
      s = u, u = [], si(() => {
        n !== t(...u) && (e(n, ...u), s && Ls(t(...s), n) && e(null, ...s));
      });
    }), () => {
      let o = a;
      for (; o !== r && o.parent !== null && o.parent.f & ma; )
        o = o.parent;
      const d = () => {
        u && Ls(t(...u), n) && e(null, ...u);
      }, c = o.teardown;
      o.teardown = () => {
        d(), c == null || c();
      };
    };
  }), n;
}
const Ju = {
  get(n, e) {
    if (!n.exclude.includes(e))
      return n.props[e];
  },
  set(n, e) {
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    if (!n.exclude.includes(e) && e in n.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: n.props[e]
      };
  },
  has(n, e) {
    return n.exclude.includes(e) ? !1 : e in n.props;
  },
  ownKeys(n) {
    return Reflect.ownKeys(n.props).filter((e) => !n.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function yt(n, e, t) {
  return new Proxy(
    { props: n, exclude: e },
    Ju
  );
}
const $u = {
  get(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let i = n.props[t];
      if (lr(i) && (i = i()), typeof i == "object" && i !== null && e in i) return i[e];
    }
  },
  set(n, e, t) {
    let i = n.props.length;
    for (; i--; ) {
      let r = n.props[i];
      lr(r) && (r = r());
      const a = ii(r, e);
      if (a && a.set)
        return a.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let i = n.props[t];
      if (lr(i) && (i = i()), typeof i == "object" && i !== null && e in i) {
        const r = ii(i, e);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(n, e) {
    if (e === wn || e === Qs) return !1;
    for (let t of n.props)
      if (lr(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(n) {
    const e = [];
    for (let t of n.props)
      if (lr(t) && (t = t()), !!t) {
        for (const i in t)
          e.includes(i) || e.push(i);
        for (const i of Object.getOwnPropertySymbols(t))
          e.includes(i) || e.push(i);
      }
    return e;
  }
};
function rt(...n) {
  return new Proxy({ props: n }, $u);
}
function I(n, e, t, i) {
  var D;
  var r = (t & 8) !== 0, a = (t & 16) !== 0, s = (
    /** @type {V} */
    i
  ), u = !0, o = () => (u && (u = !1, s = a ? si(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), s);
  let d;
  if (r) {
    var c = wn in n || Qs in n;
    d = ((D = ii(n, e)) == null ? void 0 : D.set) ?? (c && e in n ? (S) => n[e] = S : void 0);
  }
  var h, f = !1;
  r ? [h, f] = Ko(() => (
    /** @type {V} */
    n[e]
  )) : h = /** @type {V} */
  n[e], h === void 0 && i !== void 0 && (h = o(), d && (_o(), d(h)));
  var p;
  if (p = () => {
    var S = (
      /** @type {V} */
      n[e]
    );
    return S === void 0 ? o() : (u = !0, S);
  }, !(t & 4))
    return p;
  if (d) {
    var v = n.$$legacy;
    return (
      /** @type {() => V} */
      function(S, C) {
        return arguments.length > 0 ? ((!C || v || f) && d(C ? p() : S), S) : p();
      }
    );
  }
  var m = !1, g = (t & 1 ? Jr : hl)(() => (m = !1, p()));
  r && l(g);
  var E = (
    /** @type {Effect} */
    Le
  );
  return (
    /** @type {() => V} */
    function(S, C) {
      if (arguments.length > 0) {
        const O = C ? l(g) : r ? Te(S) : S;
        return W(g, O), m = !0, s !== void 0 && (s = O), S;
      }
      return Kn && m || E.f & Zt ? g.v : l(g);
    }
  );
}
const ed = "5";
var Xs;
typeof window < "u" && ((Xs = window.__svelte ?? (window.__svelte = {})).v ?? (Xs.v = /* @__PURE__ */ new Set())).add(ed);
var _a = function(n, e) {
  return _a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  }, _a(n, e);
};
function bn(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  _a(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var qe = function() {
  return qe = Object.assign || function(e) {
    for (var t, i = 1, r = arguments.length; i < r; i++) {
      t = arguments[i];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, qe.apply(this, arguments);
};
function gn(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], i = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ws(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var i = t.call(n), r, a = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; ) a.push(r.value);
  } catch (u) {
    s = { error: u };
  } finally {
    try {
      r && !r.done && (t = i.return) && t.call(i);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}
function td(n, e, t) {
  if (t || arguments.length === 2) for (var i = 0, r = e.length, a; i < r; i++)
    (a || !(i in e)) && (a || (a = Array.prototype.slice.call(e, 0, i)), a[i] = e[i]);
  return n.concat(a || Array.prototype.slice.call(e));
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var An = (
  /** @class */
  function() {
    function n(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(n, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.init = function() {
    }, n.prototype.destroy = function() {
    }, n;
  }()
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function nd(n) {
  return n === void 0 && (n = window), id(n) ? { passive: !0 } : !1;
}
function id(n) {
  n === void 0 && (n = window);
  var e = !1;
  try {
    var t = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, i = function() {
    };
    n.document.addEventListener("test", i, t), n.document.removeEventListener("test", i, t);
  } catch {
    e = !1;
  }
  return e;
}
const Yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: nd
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function rd(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Ql(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Ql(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
const ts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: rd,
  matches: Ql
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ad = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var sd = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ad;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, e.prototype.shake = function(t) {
      var i = e.cssClasses.LABEL_SHAKE;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.float = function(t) {
      var i = e.cssClasses, r = i.LABEL_FLOAT_ABOVE, a = i.LABEL_SHAKE;
      t ? this.adapter.addClass(r) : (this.adapter.removeClass(r), this.adapter.removeClass(a));
    }, e.prototype.setRequired = function(t) {
      var i = e.cssClasses.LABEL_REQUIRED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var t = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(t);
    }, e;
  }(An)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var fi = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ld = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.transitionEndHandler = function(r) {
        i.handleTransitionEnd(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          registerEventHandler: function() {
          },
          deregisterEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.activate = function() {
      this.adapter.removeClass(fi.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(fi.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(fi.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this.adapter.hasClass(fi.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && i && (this.adapter.removeClass(fi.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(fi.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(An)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var od = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Ms = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, ud = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var dd = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t) {
      return n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return od;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ud;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ms;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNotchWidthProperty: function() {
          },
          removeNotchWidthProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.notch = function(t) {
      var i = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += Ms.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(An)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cd = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, fd = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Os = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
}, _r;
function hd(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, i = _r;
  if (typeof _r == "boolean" && !e)
    return _r;
  var r = t && typeof t.supports == "function";
  if (!r)
    return !1;
  var a = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return i = a || s, e || (_r = i), i;
}
function vd(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var i = e.x, r = e.y, a = i + t.left, s = r + t.top, u, o;
  if (n.type === "touchstart") {
    var d = n;
    u = d.changedTouches[0].pageX - a, o = d.changedTouches[0].pageY - s;
  } else {
    var c = n;
    u = c.pageX - a, o = c.pageY - s;
  }
  return { x: u, y: o };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ds = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Rs = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Pr = [], pd = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.activationAnimationHasEnded = !1, i.activationTimer = 0, i.fgDeactivationRemovalTimer = 0, i.fgScale = "0", i.frame = { width: 0, height: 0 }, i.initialSize = 0, i.layoutFrame = 0, i.maxRadius = 0, i.unboundedCoords = { left: 0, top: 0 }, i.activationState = i.defaultActivationState(), i.activationTimerCallback = function() {
        i.activationAnimationHasEnded = !0, i.runDeactivationUXLogicIfReady();
      }, i.activateHandler = function(r) {
        i.activateImpl(r);
      }, i.deactivateHandler = function() {
        i.deactivateImpl();
      }, i.focusHandler = function() {
        i.handleFocus();
      }, i.blurHandler = function() {
        i.handleBlur();
      }, i.resizeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return cd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return fd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Os;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t = this, i = this.supportsPressRipple();
      if (this.registerRootHandlers(i), i) {
        var r = e.cssClasses, a = r.ROOT, s = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(a), t.adapter.isUnbounded() && (t.adapter.addClass(s), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var i = e.cssClasses, r = i.ROOT, a = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(r), t.adapter.removeClass(a), t.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(t) {
      this.activateImpl(t);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        t.layoutInternal(), t.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(t) {
      var i = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleFocus = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers = function(t) {
      var i, r;
      if (t) {
        try {
          for (var a = gn(Ds), s = a.next(); !s.done; s = a.next()) {
            var u = s.value;
            this.adapter.registerInteractionHandler(u, this.activateHandler);
          }
        } catch (o) {
          i = { error: o };
        } finally {
          try {
            s && !s.done && (r = a.return) && r.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var i, r;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = gn(Rs), s = a.next(); !s.done; s = a.next()) {
            var u = s.value;
            this.adapter.registerDocumentInteractionHandler(u, this.deactivateHandler);
          }
        } catch (o) {
          i = { error: o };
        } finally {
          try {
            s && !s.done && (r = a.return) && r.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, i;
      try {
        for (var r = gn(Ds), a = r.next(); !a.done; a = r.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, i;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = gn(Rs), a = r.next(); !a.done; a = r.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, i = e.strings, r = Object.keys(i);
      r.forEach(function(a) {
        a.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(i[a], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var a = this.previousActivationEvent, s = a && t !== void 0 && a.type !== t.type;
          if (!s) {
            r.isActivated = !0, r.isProgrammatic = t === void 0, r.activationEvent = t, r.wasActivatedByPointer = r.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var u = t !== void 0 && Pr.length > 0 && Pr.some(function(o) {
              return i.adapter.containsEventTarget(o);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Pr.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Pr = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(t), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, i = e.strings, r = i.VAR_FG_TRANSLATE_START, a = i.VAR_FG_TRANSLATE_END, s = e.cssClasses, u = s.FG_DEACTIVATION, o = s.FG_ACTIVATION, d = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), p = f.startPoint, v = f.endPoint;
        c = p.x + "px, " + p.y + "px", h = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(r, c), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, d);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, i = t.activationEvent, r = t.wasActivatedByPointer, a;
      r ? a = vd(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var s = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, i = e.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, s = r.isActivated, u = a || !s;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(i);
      }, Os.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, i = this.activationState;
      if (i.isActivated) {
        var r = qe({}, i);
        i.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(r), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var i = t.wasActivatedByPointer, r = t.wasElementMadeActive;
      (i || r) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var i = Math.max(this.frame.height, this.frame.width), r = function() {
        var s = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : r();
      var a = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, i = t.VAR_FG_SIZE, r = t.VAR_LEFT, a = t.VAR_TOP, s = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(An)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ca = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
}, md = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
  WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
}, _s = {
  LABEL_SCALE: 0.75
}, gd = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Id = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ps = ["mousedown", "touchstart"], ks = ["click", "keydown"], bd = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return r.isFocused = !1, r.receivedUserInput = !1, r.valid = !0, r.useNativeValidation = !0, r.validateOnValueChange = !0, r.helperText = i.helperText, r.characterCounter = i.characterCounter, r.leadingIcon = i.leadingIcon, r.trailingIcon = i.trailingIcon, r.inputFocusHandler = function() {
        r.activateFocus();
      }, r.inputBlurHandler = function() {
        r.deactivateFocus();
      }, r.inputInputHandler = function() {
        r.handleInput();
      }, r.setPointerXOffset = function(a) {
        r.setTransformOrigin(a);
      }, r.textFieldInteractionHandler = function() {
        r.handleTextFieldInteraction();
      }, r.validationAttributeChangeHandler = function(a) {
        r.handleValidationAttributeChange(a);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return md;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ca;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return _s;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return Id.indexOf(t) >= 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldFloat", {
      get: function() {
        return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldShake", {
      get: function() {
        return !this.isFocused && !this.isValid() && !!this.getValue();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldAdapter} for typing information on parameters and
       * return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !0;
          },
          setInputAttr: function() {
          },
          removeInputAttr: function() {
          },
          registerTextFieldInteractionHandler: function() {
          },
          deregisterTextFieldInteractionHandler: function() {
          },
          registerInputInteractionHandler: function() {
          },
          deregisterInputInteractionHandler: function() {
          },
          registerValidationAttributeChangeHandler: function() {
            return new MutationObserver(function() {
            });
          },
          deregisterValidationAttributeChangeHandler: function() {
          },
          getNativeInput: function() {
            return null;
          },
          isFocused: function() {
            return !1;
          },
          activateLineRipple: function() {
          },
          deactivateLineRipple: function() {
          },
          setLineRippleTransformOrigin: function() {
          },
          shakeLabel: function() {
          },
          floatLabel: function() {
          },
          setLabelRequired: function() {
          },
          hasLabel: function() {
            return !1;
          },
          getLabelWidth: function() {
            return 0;
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t, i, r, a;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = gn(Ps), u = s.next(); !u.done; u = s.next()) {
          var o = u.value;
          this.adapter.registerInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          u && !u.done && (i = s.return) && i.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var d = gn(ks), c = d.next(); !c.done; c = d.next()) {
          var o = c.value;
          this.adapter.registerTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (h) {
        r = { error: h };
      } finally {
        try {
          c && !c.done && (a = d.return) && a.call(d);
        } finally {
          if (r) throw r.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var t, i, r, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = gn(Ps), u = s.next(); !u.done; u = s.next()) {
          var o = u.value;
          this.adapter.deregisterInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          u && !u.done && (i = s.return) && i.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var d = gn(ks), c = d.next(); !c.done; c = d.next()) {
          var o = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (h) {
        r = { error: h };
      } finally {
        try {
          c && !c.done && (a = d.return) && a.call(d);
        } finally {
          if (r) throw r.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var t = this.adapter.getNativeInput();
      t && t.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(t) {
      var i = this;
      t.some(function(r) {
        return gd.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var i = this.adapter.getLabelWidth() * _s.LABEL_SCALE;
          this.adapter.notchOutline(i);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(t) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var i = t.touches, r = i ? i[0] : t, a = r.target.getBoundingClientRect(), s = r.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(s);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var t = this.isValid();
      this.styleValidity(t), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(t) {
      if (this.getValue() !== t && (this.getNativeInput().value = t), this.setcharacterCounter(t.length), this.validateOnValueChange) {
        var i = this.isValid();
        this.styleValidity(i);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(t) {
      this.valid = t, this.styleValidity(t);
      var i = !t && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(i);
    }, e.prototype.setValidateOnValueChange = function(t) {
      this.validateOnValueChange = t;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(t) {
      this.useNativeValidation = t;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(t) {
      this.getNativeInput().disabled = t, this.styleDisabled(t);
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.setTrailingIconAriaLabel = function(t) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(t);
    }, e.prototype.setTrailingIconContent = function(t) {
      this.trailingIcon && this.trailingIcon.setContent(t);
    }, e.prototype.setcharacterCounter = function(t) {
      if (this.characterCounter) {
        var i = this.getNativeInput().maxLength;
        if (i === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(t, i);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(t) {
      var i = e.cssClasses.INVALID;
      if (t ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.helperText) {
        this.helperText.setValidity(t);
        var r = this.helperText.isValidation();
        if (!r)
          return;
        var a = this.helperText.isVisible(), s = this.helperText.getId();
        a && s ? this.adapter.setInputAttr(ca.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(ca.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(t) {
      var i = e.cssClasses.FOCUSED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.styleDisabled = function(t) {
      var i = e.cssClasses, r = i.DISABLED, a = i.INVALID;
      t ? (this.adapter.addClass(r), this.adapter.removeClass(a)) : this.adapter.removeClass(r), this.leadingIcon && this.leadingIcon.setDisabled(t), this.trailingIcon && this.trailingIcon.setDisabled(t);
    }, e.prototype.styleFloating = function(t) {
      var i = e.cssClasses.LABEL_FLOATING;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.getNativeInput = function() {
      var t = this.adapter ? this.adapter.getNativeInput() : null;
      return t || {
        disabled: !1,
        maxLength: -1,
        required: !1,
        type: "input",
        validity: {
          badInput: !1,
          valid: !0
        },
        value: ""
      };
    }, e;
  }(An)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Fs = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Ad = {
  ROOT: "mdc-text-field__icon"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Bs = ["click", "keydown"], yd = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Fs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ad;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          getAttr: function() {
            return null;
          },
          setAttr: function() {
          },
          removeAttr: function() {
          },
          setContent: function() {
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          notifyIconAction: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t, i;
      this.savedTabIndex = this.adapter.getAttr("tabindex");
      try {
        for (var r = gn(Bs), a = r.next(); !a.done; a = r.next()) {
          var s = a.value;
          this.adapter.registerInteractionHandler(s, this.interactionHandler);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.destroy = function() {
      var t, i;
      try {
        for (var r = gn(Bs), a = r.next(); !a.done; a = r.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.interactionHandler);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          a && !a.done && (i = r.return) && i.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.setDisabled = function(t) {
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Fs.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var i = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || i) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(An)
);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ie = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, Bt = /* @__PURE__ */ new Set();
Bt.add(Ie.BACKSPACE);
Bt.add(Ie.ENTER);
Bt.add(Ie.SPACEBAR);
Bt.add(Ie.PAGE_UP);
Bt.add(Ie.PAGE_DOWN);
Bt.add(Ie.END);
Bt.add(Ie.HOME);
Bt.add(Ie.ARROW_LEFT);
Bt.add(Ie.ARROW_UP);
Bt.add(Ie.ARROW_RIGHT);
Bt.add(Ie.ARROW_DOWN);
Bt.add(Ie.DELETE);
Bt.add(Ie.ESCAPE);
Bt.add(Ie.TAB);
var Xt = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, Ut = /* @__PURE__ */ new Map();
Ut.set(Xt.BACKSPACE, Ie.BACKSPACE);
Ut.set(Xt.ENTER, Ie.ENTER);
Ut.set(Xt.SPACEBAR, Ie.SPACEBAR);
Ut.set(Xt.PAGE_UP, Ie.PAGE_UP);
Ut.set(Xt.PAGE_DOWN, Ie.PAGE_DOWN);
Ut.set(Xt.END, Ie.END);
Ut.set(Xt.HOME, Ie.HOME);
Ut.set(Xt.ARROW_LEFT, Ie.ARROW_LEFT);
Ut.set(Xt.ARROW_UP, Ie.ARROW_UP);
Ut.set(Xt.ARROW_RIGHT, Ie.ARROW_RIGHT);
Ut.set(Xt.ARROW_DOWN, Ie.ARROW_DOWN);
Ut.set(Xt.DELETE, Ie.DELETE);
Ut.set(Xt.ESCAPE, Ie.ESCAPE);
Ut.set(Xt.TAB, Ie.TAB);
var oi = /* @__PURE__ */ new Set();
oi.add(Ie.PAGE_UP);
oi.add(Ie.PAGE_DOWN);
oi.add(Ie.END);
oi.add(Ie.HOME);
oi.add(Ie.ARROW_LEFT);
oi.add(Ie.ARROW_UP);
oi.add(Ie.ARROW_RIGHT);
oi.add(Ie.ARROW_DOWN);
function ct(n) {
  var e = n.key;
  if (Bt.has(e))
    return e;
  var t = Ut.get(n.keyCode);
  return t || Ie.UNKNOWN;
}
function at(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function Tt(n, e, t, i = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dispatch event without element.");
  const r = new CustomEvent(e, Object.assign(Object.assign({}, i), { detail: t }));
  return n == null || n.dispatchEvent(r), r;
}
function Pa(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const a = t[r], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (i[a] = n[a]);
  }
  return i;
}
function bt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    a.substring(0, e.length) === e && (i[a.substring(e.length)] = n[a]);
  }
  return i;
}
class wr {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(e, t, i, r) {
    this.elementMap.has(e) || this.elementMap.set(e, {});
    const a = this.elementMap.get(e);
    if (a == null)
      throw new Error("Event map couldn't be created.");
    t in a || (a[t] = /* @__PURE__ */ new Map()), a[t].set(i, xu(e, t, i, r));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, t, i) {
    const r = this.elementMap.get(e);
    if (r == null || !(t in r))
      return;
    const a = r[t], s = a.get(i);
    s != null && (s(), a.delete(i), a.size === 0 && (delete r[t], Object.keys(r).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, t) => {
      for (let [i, r] of Object.entries(e))
        r.forEach((a, s) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function ne(n, e) {
  let t = [];
  if (e)
    for (let i = 0; i < e.length; i++) {
      const r = e[i], a = Array.isArray(r) ? r[0] : r;
      Array.isArray(r) && r.length > 1 ? t.push(a(n, r[1])) : t.push(a(n));
    }
  return {
    update(i) {
      if ((i && i.length || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (i)
        for (let r = 0; r < i.length; r++) {
          const a = t[r];
          if (a && a.update) {
            const s = i[r];
            Array.isArray(s) && s.length > 1 ? a.update(s[1]) : a.update();
          }
        }
    },
    destroy() {
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        r && r.destroy && r.destroy();
      }
    }
  };
}
var Ed = /* @__PURE__ */ wu("<svg><!></svg>");
function ns(n, e) {
  Ye(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "tag", 3, "div"), r = /* @__PURE__ */ yt(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ oe(() => [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ].indexOf(i()) > -1);
  let s;
  function u() {
    return s;
  }
  var o = { getElement: u }, d = ve(), c = re(d);
  {
    var h = (v) => {
      var m = Ed();
      ft(m, () => ({ ...r }));
      var g = Y(m);
      Ee(g, () => e.children ?? Ae), Re(m, (E) => s = E, () => s), et(m, (E, D) => ne == null ? void 0 : ne(E, D), t), w(v, m);
    }, f = (v) => {
      var m = ve(), g = re(m);
      Es(g, i, !1, (E, D) => {
        Re(E, (S) => s = S, () => s), et(E, (S, C) => ne == null ? void 0 : ne(S, C), t), ft(E, () => ({ ...r }));
      }), w(v, m);
    }, p = (v) => {
      var m = ve(), g = re(m);
      Es(g, i, !1, (E, D) => {
        Re(E, (O) => s = O, () => s), et(E, (O, L) => ne == null ? void 0 : ne(O, L), t), ft(E, () => ({ ...r }));
        var S = ve(), C = re(S);
        Ee(C, () => e.children ?? Ae), w(D, S);
      }), w(v, m);
    };
    se(c, (v) => {
      i() === "svg" ? v(h) : l(a) ? v(f, 1) : v(p, -1);
    });
  }
  return w(n, d), Qe(o);
}
function kr(n, e) {
  Ye(e, !0);
  const [t, i] = Zr(), r = ba(e.value);
  pe(e.key, r), Pe(() => {
    Gr(r, e.value);
  }), li(() => {
    r.set(void 0);
  });
  var a = ve(), s = re(a);
  Ee(s, () => e.children ?? Ae), w(n, a), Qe(), i();
}
const { applyPassive: Us } = Yl, { matches: Cd } = ts;
function xn(n, { ripple: e = !0, surface: t = !1, unbounded: i = !1, disabled: r = !1, color: a, active: s, rippleElement: u, eventTarget: o, activeTarget: d, addClass: c = (v) => n.classList.add(v), removeClass: h = (v) => n.classList.remove(v), addStyle: f = (v, m) => n.style.setProperty(v, m), initPromise: p = Promise.resolve() } = {}) {
  let v, m = new wr(), g = xe("SMUI:addLayoutListener"), E, D = s, S = o, C = d;
  function O() {
    t ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), v && D !== s && (D = s, s ? v.activate() : s === !1 && v.deactivate()), e && !v ? (v = new pd({
      addClass: c,
      browserSupportsCssVars: () => hd(window),
      computeBoundingRect: () => (u || n).getBoundingClientRect(),
      containsEventTarget: (M) => n.contains(M),
      deregisterDocumentInteractionHandler: (M, b) => m.off(document.documentElement, M, b),
      deregisterInteractionHandler: (M, b) => m.off(o || n, M, b),
      deregisterResizeHandler: (M) => window.removeEventListener("resize", M),
      getWindowPageOffset: () => {
        var M, b;
        return {
          x: (M = window.pageXOffset) !== null && M !== void 0 ? M : window.scrollX,
          y: (b = window.pageYOffset) !== null && b !== void 0 ? b : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? Cd(d || n, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (M, b) => {
        const x = Us();
        m.on(document.documentElement, M, b, typeof x == "boolean" ? { capture: x } : x);
      },
      registerInteractionHandler: (M, b) => {
        const x = Us();
        m.on(o || n, M, b, typeof x == "boolean" ? { capture: x } : x);
      },
      registerResizeHandler: (M) => m.on(window, "resize", M),
      removeClass: h,
      updateCssVariable: f
    }), p.then(() => {
      v && (v.init(), v.setUnbounded(i));
    })) : v && !e && p.then(() => {
      v && (v.destroy(), v = void 0, m.clear());
    }), v && (S !== o || C !== d) && (S = o, C = d, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
  }
  O(), g && (E = g(L));
  function L() {
    v && v.layout();
  }
  return {
    update(M) {
      ({
        ripple: e,
        surface: t,
        unbounded: i,
        disabled: r,
        color: a,
        active: s,
        rippleElement: u,
        eventTarget: o,
        activeTarget: d,
        addClass: c,
        removeClass: h,
        addStyle: f,
        initPromise: p
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (b) => n.classList.add(b), removeClass: (b) => n.classList.remove(b), addStyle: (b, x) => n.style.setProperty(b, x), initPromise: Promise.resolve() }, M)), O();
    },
    destroy() {
      v && (v.destroy(), v = void 0, m.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), E && E();
    }
  };
}
var Sd = /* @__PURE__ */ ae("<span><!></span>"), xd = /* @__PURE__ */ ae("<label><!></label>");
function Xr(n, e) {
  Ye(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "style", 3, ""), a = I(e, "floatAbove", 15, !1), s = I(e, "required", 15, !1), u = I(e, "wrapped", 3, !1), o = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "for",
    "floatAbove",
    "required",
    "wrapped",
    "children"
  ]), d, c = /* @__PURE__ */ ce(void 0), h = new wr(), f = Te({}), p = Te({}), v = xe("SMUI:generic:input:props") ?? {}, m = a();
  Pe(() => {
    l(c) && m !== a() && (m = a(), l(c).float(a()));
  });
  let g = s();
  Pe(() => {
    l(c) && g !== s() && (g = s(), l(c).setRequired(s()));
  });
  const E = xe("SMUI:floating-label:mount"), D = xe("SMUI:floating-label:unmount");
  Ft(() => {
    W(
      c,
      new sd({
        addClass: S,
        removeClass: C,
        getWidth: () => {
          var de, he;
          const $ = ie(), V = $.cloneNode(!0);
          (de = $.parentNode) == null || de.appendChild(V), V.classList.add("smui-floating-label--remove-transition"), V.classList.add("smui-floating-label--force-size"), V.classList.remove("mdc-floating-label--float-above");
          const P = V.scrollWidth;
          return (he = $.parentNode) == null || he.removeChild(V), P;
        },
        registerInteractionHandler: ($, V) => h.on(ie(), $, V),
        deregisterInteractionHandler: ($, V) => h.off(ie(), $, V)
      }),
      !0
    );
    const H = {
      get element() {
        return ie();
      },
      addStyle: O,
      removeStyle: L
    };
    return E && E(H), l(c).init(), () => {
      var $;
      D && D(H), ($ = l(c)) == null || $.destroy(), h.clear();
    };
  });
  function S(H) {
    f[H] || (f[H] = !0);
  }
  function C(H) {
    (!(H in f) || f[H]) && (f[H] = !1);
  }
  function O(H, $) {
    p[H] != $ && ($ === "" || $ == null ? delete p[H] : p[H] = $);
  }
  function L(H) {
    H in p && delete p[H];
  }
  function M(H) {
    var $;
    ($ = l(c)) == null || $.shake(H);
  }
  function b(H) {
    a(H);
  }
  function x(H) {
    s(H);
  }
  function G() {
    if (l(c) == null)
      throw new Error("Instance is undefined.");
    return l(c).getWidth();
  }
  function ie() {
    return d;
  }
  var F = { shake: M, float: b, setRequired: x, getWidth: G, getElement: ie }, N = ve(), we = re(N);
  {
    var Q = (H) => {
      var $ = Sd();
      ft($, (P, de) => ({ class: P, style: de, ...o }), [
        () => at({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [i()]: !0
        }),
        () => Object.entries(p).map(([P, de]) => `${P}: ${de};`).concat([r()]).join(" ")
      ]);
      var V = Y($);
      Ee(V, () => e.children ?? Ae), Re($, (P) => d = P, () => d), et($, (P, de) => ne == null ? void 0 : ne(P, de), t), w(H, $);
    }, B = (H) => {
      var $ = xd();
      ft(
        $,
        (P, de) => ({
          class: P,
          style: de,
          for: e.for || (v ? v.id : void 0),
          ...o
        }),
        [
          () => at({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [i()]: !0
          }),
          () => Object.entries(p).map(([P, de]) => `${P}: ${de};`).concat([r()]).join(" ")
        ]
      );
      var V = Y($);
      Ee(V, () => e.children ?? Ae), Re($, (P) => d = P, () => d), et($, (P, de) => ne == null ? void 0 : ne(P, de), t), w(H, $);
    };
    se(we, (H) => {
      u() ? H(Q) : H(B, -1);
    });
  }
  return w(n, N), Qe(F);
}
var Td = /* @__PURE__ */ ae("<div></div>");
function Zl(n, e) {
  Ye(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "style", 3, ""), a = I(e, "active", 3, !1), s = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, o = /* @__PURE__ */ ce(void 0), d = new wr(), c = Te({}), h = Te({});
  Ft(() => (W(
    o,
    new ld({
      addClass: p,
      removeClass: v,
      hasClass: f,
      setStyle: m,
      registerEventHandler: (L, M) => d.on(S(), L, M),
      deregisterEventHandler: (L, M) => d.off(S(), L, M)
    }),
    !0
  ), l(o).init(), () => {
    var L;
    (L = l(o)) == null || L.destroy(), d.clear();
  }));
  function f(L) {
    return L in c ? c[L] : S().classList.contains(L);
  }
  function p(L) {
    c[L] || (c[L] = !0);
  }
  function v(L) {
    (!(L in c) || c[L]) && (c[L] = !1);
  }
  function m(L, M) {
    h[L] != M && (M === "" || M == null ? delete h[L] : h[L] = M);
  }
  function g() {
    var L;
    (L = l(o)) == null || L.activate();
  }
  function E() {
    var L;
    (L = l(o)) == null || L.deactivate();
  }
  function D(L) {
    var M;
    (M = l(o)) == null || M.setRippleCenter(L);
  }
  function S() {
    return u;
  }
  var C = { activate: g, deactivate: E, setRippleCenter: D, getElement: S }, O = Td();
  return ft(O, (L, M) => ({ class: L, style: M, ...s }), [
    () => at({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...c,
      [i()]: !0
    }),
    () => Object.entries(h).map(([L, M]) => `${L}: ${M};`).concat([r()]).join(" ")
  ]), Re(O, (L) => u = L, () => u), et(O, (L, M) => ne == null ? void 0 : ne(L, M), t), w(n, O), Qe(C);
}
var Ld = /* @__PURE__ */ ae('<div class="mdc-notched-outline__notch"><!></div>'), wd = /* @__PURE__ */ ae('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Jl(n, e) {
  Ye(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "notched", 3, !1), a = I(e, "noLabel", 3, !1), s = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, o = /* @__PURE__ */ ce(void 0), d = /* @__PURE__ */ ce(void 0), c = Te({}), h = Te({}), f;
  Pe(() => {
    l(d) !== f && (l(d) ? (l(d).addStyle("transition-duration", "0s"), p("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      l(d) && l(d).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), f = l(d));
  }), pe("SMUI:floating-label:mount", (b) => {
    W(d, b, !0);
  }), pe("SMUI:floating-label:unmount", () => {
    W(d, void 0);
  }), Ft(() => (W(
    o,
    new dd({
      addClass: p,
      removeClass: v,
      setNotchWidthProperty: (b) => m("width", b + "px"),
      removeNotchWidthProperty: () => g("width")
    }),
    !0
  ), l(o).init(), () => {
    var b;
    (b = l(o)) == null || b.destroy();
  }));
  function p(b) {
    c[b] || (c[b] = !0);
  }
  function v(b) {
    (!(b in c) || c[b]) && (c[b] = !1);
  }
  function m(b, x) {
    h[b] != x && (x === "" || x == null ? delete h[b] : h[b] = x);
  }
  function g(b) {
    b in h && delete h[b];
  }
  function E(b) {
    var x;
    (x = l(o)) == null || x.notch(b);
  }
  function D() {
    var b;
    (b = l(o)) == null || b.closeNotch();
  }
  function S() {
    return u;
  }
  var C = { notch: E, closeNotch: D, getElement: S }, O = wd();
  ft(O, (b) => ({ class: b, ...s }), [
    () => at({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": r(),
      "mdc-notched-outline--no-label": a(),
      ...c,
      [i()]: !0
    })
  ]);
  var L = z(Y(O), 2);
  {
    var M = (b) => {
      var x = Ld(), G = Y(x);
      Ee(G, () => e.children ?? Ae), ke((ie) => zl(x, ie), [
        () => Object.entries(h).map(([ie, F]) => `${ie}: ${F};`).join(" ")
      ]), w(b, x);
    };
    se(L, (b) => {
      a() || b(M);
    });
  }
  return Re(O, (b) => u = b, () => u), et(O, (b, x) => ne == null ? void 0 : ne(b, x), t), w(n, O), Qe(C);
}
function is(n, e) {
  Ye(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "component", 3, ns), a = I(e, "tag", 3, "div"), s = I(e, "_smuiClass", 3, ""), u = I(e, "_smuiClassMap", 23, () => ({})), o = I(e, "_smuiContexts", 19, () => ({})), d = I(e, "_smuiProps", 19, () => ({})), c = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "_smuiClass",
    "_smuiClassMap",
    "_smuiContexts",
    "_smuiProps",
    "children"
  ]), h;
  const f = [];
  Object.entries(u()).forEach(([E, D]) => {
    const S = xe(D);
    S && "subscribe" in S && f.push(S.subscribe((C) => {
      u()[E] = C;
    }));
  });
  for (let E in o())
    o().hasOwnProperty(E) && pe(E, o()[E]);
  li(() => {
    for (const E of f)
      E();
  });
  function p() {
    return h.getElement();
  }
  var v = { getElement: p }, m = ve(), g = re(m);
  {
    let E = /* @__PURE__ */ oe(() => at({
      [s()]: !0,
      ...u(),
      [i()]: !0
    }));
    es(g, r, (D, S) => {
      Re(
        S(D, rt(
          {
            get tag() {
              return a();
            },
            get use() {
              return t();
            },
            get class() {
              return l(E);
            }
          },
          d,
          () => c,
          {
            children: (C, O) => {
              var L = ve(), M = re(L);
              Ee(M, () => e.children ?? Ae), w(C, L);
            },
            $$slots: { default: !0 }
          }
        )),
        (C) => h = C,
        () => h
      );
    });
  }
  return w(n, m), Qe(v);
}
function Md(n, e) {
  Ye(e, !0);
  let t = /* @__PURE__ */ yt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return Re(
    is(n, rt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (s, u) => {
        var o = ve(), d = re(o);
        Ee(d, () => e.children ?? Ae), w(s, o);
      },
      $$slots: { default: !0 }
    })),
    (s) => i = s,
    () => i
  ), Qe(a);
}
function Od(n, e) {
  Ye(e, !0);
  let t = /* @__PURE__ */ yt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return Re(
    is(n, rt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var o = ve(), d = re(o);
          Ee(d, () => e.children ?? Ae), w(s, o);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => i = s,
    () => i
  ), Qe(a);
}
function Dd(n, e) {
  Ye(e, !0);
  let t = /* @__PURE__ */ yt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return Re(
    is(n, rt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var o = ve(), d = re(o);
          Ee(d, () => e.children ?? Ae), w(s, o);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => i = s,
    () => i
  ), Qe(a);
}
var Rd = /* @__PURE__ */ ae("<input/>");
function _d(n, e) {
  Ye(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "type", 3, "text"), a = I(e, "placeholder", 3, " "), s = I(e, "value", 15), u = I(e, "files", 15, null), o = I(e, "dirty", 15, !1), d = I(e, "invalid", 15, !1), c = I(e, "updateInvalid", 3, !0), h = I(e, "initialInvalid", 3, !1), f = I(e, "emptyValueNull", 19, () => s() === null), p = I(e, "emptyValueUndefined", 19, () => s() === void 0), v = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "type",
    "placeholder",
    "value",
    "files",
    "dirty",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "emptyValueNull",
    "emptyValueUndefined"
  ]), m, g = Te({}), E = Te({});
  Pe(() => {
    r() === "file" ? delete E.value : E.value = s() == null ? "" : s();
  }), Ft(() => {
    c() && h() && d(G().matches(":invalid"));
  });
  function D(Q) {
    return Q === "" ? Number.NaN : +Q;
  }
  function S(Q) {
    if (r() === "file") {
      u(Q.currentTarget.files);
      return;
    }
    if (Q.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (Q.currentTarget.value === "" && p()) {
      s(void 0);
      return;
    }
    switch (r()) {
      case "number":
      case "range":
        s(D(Q.currentTarget.value));
        break;
      default:
        s(Q.currentTarget.value);
        break;
    }
  }
  function C(Q) {
    (r() === "file" || r() === "range") && S(Q), o(!0), c() && d(G().matches(":invalid"));
  }
  function O(Q) {
    return Q in g ? g[Q] ?? null : G().getAttribute(Q);
  }
  function L(Q, B) {
    g[Q] !== B && (g[Q] = B);
  }
  function M(Q) {
    (!(Q in g) || g[Q] != null) && (g[Q] = void 0);
  }
  function b() {
    G().focus();
  }
  function x() {
    G().blur();
  }
  function G() {
    return m;
  }
  var ie = { getAttr: O, addAttr: L, removeAttr: M, focus: b, blur: x, getElement: G }, F = Rd(), N = (Q) => {
    var B;
    r() !== "file" && S(Q), (B = e.oninput) == null || B.call(e, Q);
  }, we = (Q) => {
    var B;
    C(Q), (B = e.onchange) == null || B.call(e, Q);
  };
  return ft(
    F,
    (Q) => ({
      class: Q,
      type: r(),
      placeholder: a(),
      ...E,
      ...g,
      ...v,
      oninput: N,
      onchange: we
    }),
    [
      () => at({ "mdc-text-field__input": !0, [i()]: !0 })
    ],
    void 0,
    void 0,
    void 0,
    !0
  ), Re(F, (Q) => m = Q, () => m), et(F, (Q, B) => ne == null ? void 0 : ne(Q, B), t), w(n, F), Qe(ie);
}
var Pd = /* @__PURE__ */ ae("<textarea></textarea>");
function kd(n, e) {
  Ye(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "style", 3, ""), a = I(e, "value", 15, ""), s = I(e, "dirty", 15, !1), u = I(e, "invalid", 15, !1), o = I(e, "updateInvalid", 3, !0), d = I(e, "initialInvalid", 3, !1), c = I(e, "resizable", 3, !0), h = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "value",
    "dirty",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "resizable"
  ]), f, p = Te({});
  Ft(() => {
    o() && d() && u(C().matches(":invalid"));
  });
  function v() {
    s(!0), o() && u(C().matches(":invalid"));
  }
  function m(b) {
    return b in p ? p[b] ?? null : C().getAttribute(b);
  }
  function g(b, x) {
    p[b] !== x && (p[b] = x);
  }
  function E(b) {
    (!(b in p) || p[b] != null) && (p[b] = void 0);
  }
  function D() {
    C().focus();
  }
  function S() {
    C().blur();
  }
  function C() {
    return f;
  }
  var O = { getAttr: m, addAttr: g, removeAttr: E, focus: D, blur: S, getElement: C }, L = Pd(), M = (b) => {
    var x;
    v(), (x = e.onchange) == null || x.call(e, b);
  };
  return ft(
    L,
    (b) => ({
      class: b,
      style: `${c() ? "" : "resize: none; "}${r()}`,
      ...p,
      ...h,
      onchange: M
    }),
    [
      () => at({ "mdc-text-field__input": !0, [i()]: !0 })
    ]
  ), Re(L, (b) => f = b, () => f), et(L, (b, x) => ne == null ? void 0 : ne(b, x), t), Tr(() => Zu(L, a)), w(n, L), Qe(O);
}
var Fd = /* @__PURE__ */ ae('<span class="mdc-text-field__ripple"></span>'), Bd = /* @__PURE__ */ ae("<!> <!>", 1), Ud = /* @__PURE__ */ ae("<span><!> <!></span>"), Nd = /* @__PURE__ */ ae("<!> <!> <!>", 1), Hd = /* @__PURE__ */ ae("<label><!> <!> <!> <!> <!> <!> <!></label>"), Vd = /* @__PURE__ */ ae("<div><!> <!> <!> <!> <!></div>"), jd = /* @__PURE__ */ ae("<!> <!>", 1);
function Gd(n, e) {
  Ye(e, !0);
  const { applyPassive: t } = Yl;
  let i = () => {
  };
  function r(_) {
    return _ === i;
  }
  let a = I(e, "use", 19, () => []), s = I(e, "class", 3, ""), u = I(e, "style", 3, ""), o = I(e, "ripple", 3, !0), d = I(e, "disabled", 3, !1), c = I(e, "required", 3, !1), h = I(e, "textarea", 3, !1), f = I(e, "variant", 19, () => h() ? "outlined" : "standard"), p = I(e, "noLabel", 3, !1), v = I(e, "type", 3, "text"), m = I(e, "value", 15), g = I(e, "files", 15, i), E = I(e, "invalid", 15, i), D = I(e, "updateInvalid", 19, () => r(E())), S = I(e, "initialInvalid", 3, !1), C = I(e, "dirty", 15, !1), O = I(e, "validateOnValueChange", 19, D), L = I(e, "useNativeValidation", 19, D), M = I(e, "withLeadingIcon", 3, i), b = I(e, "withTrailingIcon", 3, i), x = I(e, "input", 7), G = I(e, "floatingLabel", 7), ie = I(e, "lineRipple", 7), F = I(e, "notchedOutline", 7), N = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "required",
    "textarea",
    "variant",
    "noLabel",
    "label",
    "type",
    "value",
    "files",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "dirty",
    "prefix",
    "suffix",
    "validateOnValueChange",
    "useNativeValidation",
    "withLeadingIcon",
    "withTrailingIcon",
    "input",
    "floatingLabel",
    "lineRipple",
    "notchedOutline",
    "children",
    "leadingIcon",
    "trailingIcon",
    "internalCounter",
    "line",
    "helper"
  ]);
  const we = m() !== void 0 || m() === void 0 && e.input$emptyValueUndefined || !r(g());
  r(g()) && g(null), r(E()) && E(!1);
  let Q, B = /* @__PURE__ */ ce(void 0), H = new wr(), $ = Te({}), V = Te({}), P = /* @__PURE__ */ ce(void 0), de = /* @__PURE__ */ ce(!1), he = /* @__PURE__ */ ce(Te(S())), tt = xe("SMUI:addLayoutListener"), Ve, T, K = new Promise((_) => T = _), R, j, k, X;
  const te = /* @__PURE__ */ oe(() => x() && x().getElement());
  Pe(() => {
    (C() || l(he) || !D()) && l(B) && l(B).isValid() !== !E() && (D() ? E(!l(B).isValid()) : l(B).setValid(!E()));
  }), Pe(() => {
    l(B) && l(B).getValidateOnValueChange() !== O() && l(B).setValidateOnValueChange(r(O()) ? !1 : O());
  }), Pe(() => {
    l(B) && l(B).setUseNativeValidation(r(L()) ? !0 : L());
  }), Pe(() => {
    l(B) && l(B).setDisabled(d());
  });
  let fe = m();
  Pe(() => {
    if (l(B) && we && fe !== m()) {
      fe = m();
      const _ = `${m() == null ? "" : m()}`;
      l(B).getValue() !== _ && l(B).setValue(_);
    }
  }), tt && (Ve = tt(_e)), pe("SMUI:textfield:leading-icon:mount", (_) => {
    R = _;
  }), pe("SMUI:textfield:leading-icon:unmount", () => {
    R = void 0;
  }), pe("SMUI:textfield:trailing-icon:mount", (_) => {
    j = _;
  }), pe("SMUI:textfield:trailing-icon:unmount", () => {
    j = void 0;
  }), pe("SMUI:textfield:helper-text:id", (_) => {
    W(P, _, !0);
  }), pe("SMUI:textfield:helper-text:mount", (_) => {
    k = _;
  }), pe("SMUI:textfield:helper-text:unmount", () => {
    W(P, void 0), k = void 0;
  }), pe("SMUI:textfield:character-counter:mount", (_) => {
    X = _;
  }), pe("SMUI:textfield:character-counter:unmount", () => {
    X = void 0;
  }), Ft(() => {
    var _;
    if (W(
      B,
      new bd(
        {
          // getRootAdapterMethods_
          addClass: ze,
          removeClass: Me,
          hasClass: Ze,
          registerTextFieldInteractionHandler: (U, me) => H.on(Be(), U, me),
          deregisterTextFieldInteractionHandler: (U, me) => H.off(Be(), U, me),
          registerValidationAttributeChangeHandler: (U) => {
            const me = (Mt) => Mt.map((Nt) => Nt.attributeName).filter((Nt) => Nt), Je = new MutationObserver((Mt) => {
              L() && U(me(Mt));
            }), dt = { attributes: !0 };
            return x() && Je.observe(x().getElement(), dt), Je;
          },
          deregisterValidationAttributeChangeHandler: (U) => {
            U.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var U;
            return ((U = x()) == null ? void 0 : U.getElement()) ?? null;
          },
          setInputAttr: (U, me) => {
            var Je;
            (Je = x()) == null || Je.addAttr(U, me);
          },
          removeInputAttr: (U) => {
            var me;
            (me = x()) == null || me.removeAttr(U);
          },
          isFocused: () => {
            var U;
            return document.activeElement === ((U = x()) == null ? void 0 : U.getElement());
          },
          registerInputInteractionHandler: (U, me) => {
            var dt;
            const Je = (dt = x()) == null ? void 0 : dt.getElement();
            if (Je) {
              const Mt = t();
              H.on(Je, U, me, typeof Mt == "boolean" ? { capture: Mt } : Mt);
            }
          },
          deregisterInputInteractionHandler: (U, me) => {
            var dt;
            const Je = (dt = x()) == null ? void 0 : dt.getElement();
            Je && H.off(Je, U, me);
          },
          // getLabelAdapterMethods_
          floatLabel: (U) => G() && G().float(U),
          getLabelWidth: () => G() ? G().getWidth() : 0,
          hasLabel: () => !!G(),
          shakeLabel: (U) => G() && G().shake(U),
          setLabelRequired: (U) => G() && G().setRequired(U),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => ie() && ie().activate(),
          deactivateLineRipple: () => ie() && ie().deactivate(),
          setLineRippleTransformOrigin: (U) => ie() && ie().setRippleCenter(U),
          // getOutlineAdapterMethods_
          closeOutline: () => F() && F().closeNotch(),
          hasOutline: () => !!F(),
          notchOutline: (U) => F() && F().notch(U)
        },
        {
          get helperText() {
            return k;
          },
          get characterCounter() {
            return X;
          },
          get leadingIcon() {
            return R;
          },
          get trailingIcon() {
            return j;
          }
        }
      ),
      !0
    ), we) {
      if (x() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (_ = l(B)) == null || _.init();
    } else
      Fl().then(() => {
        var U;
        if (x() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (U = l(B)) == null || U.init();
      });
    return T(), () => {
      var U;
      (U = l(B)) == null || U.destroy(), H.clear();
    };
  }), li(() => {
    Ve && Ve();
  });
  function Ze(_) {
    return _ in $ ? $[_] ?? null : Be().classList.contains(_);
  }
  function ze(_) {
    $[_] || ($[_] = !0);
  }
  function Me(_) {
    (!(_ in $) || $[_]) && ($[_] = !1);
  }
  function ee(_, U) {
    V[_] != U && (U === "" || U == null ? delete V[_] : V[_] = U);
  }
  function ue() {
    var _;
    (_ = x()) == null || _.focus();
  }
  function Ne() {
    var _;
    (_ = x()) == null || _.blur();
  }
  function _e() {
    if (l(B)) {
      const _ = l(B).shouldFloat;
      l(B).notchOutline(_);
    }
  }
  function Be() {
    return Q;
  }
  var Fe = { focus: ue, blur: Ne, layout: _e, getElement: Be }, Oe = jd(), Xe = re(Oe);
  {
    var Et = (_) => {
      var U = Hd();
      ft(U, (De, je, He) => ({ class: De, style: je, for: void 0, ...He }), [
        () => at({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": d(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": p() || e.label == null,
          "mdc-text-field--label-floating": l(de) || m() != null && m() !== "",
          "mdc-text-field--with-leading-icon": r(M()) ? e.leadingIcon : M(),
          "mdc-text-field--with-trailing-icon": r(b()) ? e.trailingIcon : b(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": E(),
          ...$,
          [s()]: !0
        }),
        () => Object.entries(V).map(([De, je]) => `${De}: ${je};`).concat([u()]).join(" "),
        () => Pa(N, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var me = Y(U);
      {
        var Je = (De) => {
          var je = Bd(), He = re(je);
          {
            var Dt = (pt) => {
              var Ct = Fd();
              w(pt, Ct);
            };
            se(He, (pt) => {
              f() === "filled" && pt(Dt);
            });
          }
          var dn = z(He, 2);
          {
            var Ge = (pt) => {
              {
                let Ct = /* @__PURE__ */ oe(() => l(de) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), Ue = /* @__PURE__ */ oe(() => bt(N, "label$"));
                Re(
                  Xr(pt, rt(
                    {
                      get floatAbove() {
                        return l(Ct);
                      },
                      get required() {
                        return c();
                      },
                      wrapped: !0
                    },
                    () => l(Ue),
                    {
                      children: (St, _n) => {
                        var Jt = ve(), mt = re(Jt);
                        {
                          var Rt = (Wt) => {
                          }, $t = (Wt) => {
                            var en = it();
                            ke(() => be(en, e.label)), w(Wt, en);
                          }, cn = (Wt) => {
                            var en = ve(), Vt = re(en);
                            Ee(Vt, () => e.label), w(Wt, en);
                          };
                          se(mt, (Wt) => {
                            e.label == null ? Wt(Rt) : typeof e.label == "string" ? Wt($t, 1) : Wt(cn, -1);
                          });
                        }
                        w(St, Jt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (St) => G(St),
                  () => G()
                );
              }
            };
            se(dn, (pt) => {
              !p() && e.label != null && pt(Ge);
            });
          }
          w(De, je);
        };
        se(me, (De) => {
          !h() && f() !== "outlined" && De(Je);
        });
      }
      var dt = z(me, 2);
      {
        var Mt = (De) => {
          {
            let je = /* @__PURE__ */ oe(() => p() || e.label == null), He = /* @__PURE__ */ oe(() => bt(N, "outline$"));
            Re(
              Jl(De, rt(
                {
                  get noLabel() {
                    return l(je);
                  }
                },
                () => l(He),
                {
                  children: (Dt, dn) => {
                    var Ge = ve(), pt = re(Ge);
                    {
                      var Ct = (Ue) => {
                        {
                          let St = /* @__PURE__ */ oe(() => l(de) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), _n = /* @__PURE__ */ oe(() => bt(N, "label$"));
                          Re(
                            Xr(Ue, rt(
                              {
                                get floatAbove() {
                                  return l(St);
                                },
                                get required() {
                                  return c();
                                },
                                wrapped: !0
                              },
                              () => l(_n),
                              {
                                children: (Jt, mt) => {
                                  var Rt = ve(), $t = re(Rt);
                                  {
                                    var cn = (Vt) => {
                                    }, Wt = (Vt) => {
                                      var ui = it();
                                      ke(() => be(ui, e.label)), w(Vt, ui);
                                    }, en = (Vt) => {
                                      var ui = ve(), rr = re(ui);
                                      Ee(rr, () => e.label), w(Vt, ui);
                                    };
                                    se($t, (Vt) => {
                                      e.label == null ? Vt(cn) : typeof e.label == "string" ? Vt(Wt, 1) : Vt(en, -1);
                                    });
                                  }
                                  w(Jt, Rt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Jt) => G(Jt),
                            () => G()
                          );
                        }
                      };
                      se(pt, (Ue) => {
                        !p() && e.label != null && Ue(Ct);
                      });
                    }
                    w(Dt, Ge);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Dt) => F(Dt),
              () => F()
            );
          }
        };
        se(dt, (De) => {
          (h() || f() === "outlined") && De(Mt);
        });
      }
      var Nt = z(dt, 2);
      kr(Nt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (De, je) => {
          var He = ve(), Dt = re(He);
          Ee(Dt, () => e.leadingIcon ?? Ae), w(De, He);
        },
        $$slots: { default: !0 }
      });
      var _i = z(Nt, 2);
      Ee(_i, () => e.children ?? Ae);
      var nt = z(_i, 2);
      {
        var Ot = (De) => {
          var je = Ud(), He = Y(je);
          {
            let dn = /* @__PURE__ */ oe(() => bt(N, "input$"));
            Re(
              kd(He, rt(
                {
                  get disabled() {
                    return d();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return D();
                  },
                  get initialInvalid() {
                    return l(he);
                  },
                  get "aria-controls"() {
                    return l(P);
                  },
                  get "aria-describedby"() {
                    return l(P);
                  }
                },
                () => l(dn),
                {
                  onblur: (Ge) => {
                    var pt;
                    W(de, !1), W(he, !0), Tt(Be(), "blur", Ge), (pt = e.input$onblur) == null || pt.call(e, Ge);
                  },
                  onfocus: (Ge) => {
                    var pt;
                    W(de, !0), Tt(Be(), "focus", Ge), (pt = e.input$onfocus) == null || pt.call(e, Ge);
                  },
                  get value() {
                    return m();
                  },
                  set value(Ge) {
                    m(Ge);
                  },
                  get dirty() {
                    return C();
                  },
                  set dirty(Ge) {
                    C(Ge);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(Ge) {
                    E(Ge);
                  }
                }
              )),
              (Ge) => x(Ge),
              () => x()
            );
          }
          var Dt = z(He, 2);
          Ee(Dt, () => e.internalCounter ?? Ae), ke((dn) => zn(je, 1, dn), [
            () => Gl(at({
              "mdc-text-field__resizer": !("input$resizable" in N) || e.input$resizable
            }))
          ]), w(De, je);
        }, Ht = (De) => {
          var je = Nd(), He = re(je);
          {
            var Dt = (Ct) => {
              var Ue = ve(), St = re(Ue);
              {
                var _n = (mt) => {
                  Od(mt, {
                    children: (Rt, $t) => {
                      var cn = it();
                      ke(() => be(cn, e.prefix)), w(Rt, cn);
                    },
                    $$slots: { default: !0 }
                  });
                }, Jt = (mt) => {
                  var Rt = ve(), $t = re(Rt);
                  Ee($t, () => e.prefix ?? Ae), w(mt, Rt);
                };
                se(St, (mt) => {
                  typeof e.prefix == "string" ? mt(_n) : mt(Jt, -1);
                });
              }
              w(Ct, Ue);
            };
            se(He, (Ct) => {
              e.prefix != null && Ct(Dt);
            });
          }
          var dn = z(He, 2);
          {
            let Ct = /* @__PURE__ */ oe(() => bt(N, "input$"));
            Re(
              _d(dn, rt(
                {
                  get type() {
                    return v();
                  },
                  get disabled() {
                    return d();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return D();
                  },
                  get initialInvalid() {
                    return l(he);
                  },
                  get "aria-controls"() {
                    return l(P);
                  },
                  get "aria-describedby"() {
                    return l(P);
                  }
                },
                () => p() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => l(Ct),
                {
                  onblur: (Ue) => {
                    var St;
                    W(de, !1), W(he, !0), Tt(Be(), "blur", Ue), (St = e.input$onblur) == null || St.call(e, Ue);
                  },
                  onfocus: (Ue) => {
                    var St;
                    W(de, !0), Tt(Be(), "focus", Ue), (St = e.input$onfocus) == null || St.call(e, Ue);
                  },
                  get value() {
                    return m();
                  },
                  set value(Ue) {
                    m(Ue);
                  },
                  get files() {
                    return g();
                  },
                  set files(Ue) {
                    g(Ue);
                  },
                  get dirty() {
                    return C();
                  },
                  set dirty(Ue) {
                    C(Ue);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(Ue) {
                    E(Ue);
                  }
                }
              )),
              (Ue) => x(Ue),
              () => x()
            );
          }
          var Ge = z(dn, 2);
          {
            var pt = (Ct) => {
              var Ue = ve(), St = re(Ue);
              {
                var _n = (mt) => {
                  Dd(mt, {
                    children: (Rt, $t) => {
                      var cn = it();
                      ke(() => be(cn, e.suffix)), w(Rt, cn);
                    },
                    $$slots: { default: !0 }
                  });
                }, Jt = (mt) => {
                  var Rt = ve(), $t = re(Rt);
                  Ee($t, () => e.suffix ?? Ae), w(mt, Rt);
                };
                se(St, (mt) => {
                  typeof e.suffix == "string" ? mt(_n) : mt(Jt, -1);
                });
              }
              w(Ct, Ue);
            };
            se(Ge, (Ct) => {
              e.suffix != null && Ct(pt);
            });
          }
          w(De, je);
        };
        se(nt, (De) => {
          h() && typeof m() == "string" ? De(Ot) : De(Ht, -1);
        });
      }
      var qn = z(nt, 2);
      kr(qn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (De, je) => {
          var He = ve(), Dt = re(He);
          Ee(Dt, () => e.trailingIcon ?? Ae), w(De, He);
        },
        $$slots: { default: !0 }
      });
      var Mr = z(qn, 2);
      {
        var Yn = (De) => {
          {
            let je = /* @__PURE__ */ oe(() => bt(N, "ripple$"));
            Re(Zl(De, rt(() => l(je))), (He) => ie(He), () => ie());
          }
        };
        se(Mr, (De) => {
          !h() && f() !== "outlined" && o() && De(Yn);
        });
      }
      Re(U, (De) => Q = De, () => Q), et(U, (De, je) => xn == null ? void 0 : xn(De, je), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: ze,
        removeClass: Me,
        addStyle: ee,
        eventTarget: l(te),
        activeTarget: l(te),
        initPromise: K
      })), et(U, (De, je) => ne == null ? void 0 : ne(De, je), a), w(_, U);
    }, ir = (_) => {
      var U = Vd();
      ft(U, (nt, Ot, Ht) => ({ class: nt, style: Ot, ...Ht }), [
        () => at({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": d(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": p() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": E(),
          ...$,
          [s()]: !0
        }),
        () => Object.entries(V).map(([nt, Ot]) => `${nt}: ${Ot};`).concat([u()]).join(" "),
        () => Pa(N, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var me = Y(U);
      {
        var Je = (nt) => {
          var Ot = ve(), Ht = re(Ot);
          Ee(Ht, () => e.label ?? Ae), w(nt, Ot);
        };
        se(me, (nt) => {
          typeof e.label != "string" && nt(Je);
        });
      }
      var dt = z(me, 2);
      kr(dt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (nt, Ot) => {
          var Ht = ve(), qn = re(Ht);
          Ee(qn, () => e.leadingIcon ?? Ae), w(nt, Ht);
        },
        $$slots: { default: !0 }
      });
      var Mt = z(dt, 2);
      Ee(Mt, () => e.children ?? Ae);
      var Nt = z(Mt, 2);
      kr(Nt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (nt, Ot) => {
          var Ht = ve(), qn = re(Ht);
          Ee(qn, () => e.trailingIcon ?? Ae), w(nt, Ht);
        },
        $$slots: { default: !0 }
      });
      var _i = z(Nt, 2);
      Ee(_i, () => e.line ?? Ae), Re(U, (nt) => Q = nt, () => Q), et(U, (nt, Ot) => xn == null ? void 0 : xn(nt, Ot), () => ({
        ripple: o(),
        unbounded: !1,
        addClass: ze,
        removeClass: Me,
        addStyle: ee
      })), et(U, (nt, Ot) => ne == null ? void 0 : ne(nt, Ot), a), w(_, U);
    };
    se(Xe, (_) => {
      we ? _(Et) : _(ir, -1);
    });
  }
  var Z = z(Xe, 2);
  {
    var J = (_) => {
      {
        let U = /* @__PURE__ */ oe(() => bt(N, "helperLine$"));
        Md(_, rt(() => l(U), {
          children: (me, Je) => {
            var dt = ve(), Mt = re(dt);
            Ee(Mt, () => e.helper ?? Ae), w(me, dt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    se(Z, (_) => {
      e.helper && _(J);
    });
  }
  return w(n, Oe), Qe(Fe);
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var zd = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Xd = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  OPENING_EVENT: "MDCMenuSurface:opening",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
}, cr = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /**
   * Margin left to the edge of the viewport when menu-surface is at maximum
   * possible height. Also used as a viewport margin.
   */
  MARGIN_TO_EDGE: 32,
  /**
   * Ratio of anchor width to menu-surface width for switching from corner
   * positioning to center positioning.
   */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  /**
   * Amount of time to wait before restoring focus when closing the menu
   * surface. This is important because if a touch event triggered the menu
   * close, and the subsequent mouse event occurs after focus is restored, then
   * the restored focus would be lost.
   */
  TOUCH_EVENT_WAIT_MS: 30
}, ot;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(ot || (ot = {}));
var Li;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 4] = "TOP_RIGHT", n[n.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", n[n.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", n[n.TOP_START = 8] = "TOP_START", n[n.TOP_END = 12] = "TOP_END", n[n.BOTTOM_START = 9] = "BOTTOM_START", n[n.BOTTOM_END = 13] = "BOTTOM_END";
})(Li || (Li = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Jn, Bn, Ce = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Jn = {}, Jn["" + Ce.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Jn["" + Ce.LIST_ITEM_CLASS] = "mdc-list-item", Jn["" + Ce.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Jn["" + Ce.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Jn["" + Ce.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Jn["" + Ce.ROOT] = "mdc-list";
var Fi = (Bn = {}, Bn["" + Ce.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Bn["" + Ce.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Bn["" + Ce.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Bn["" + Ce.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Bn["" + Ce.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Bn["" + Ce.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Bn["" + Ce.ROOT] = "mdc-deprecated-list", Bn), $n = {
  ACTION_EVENT: "MDCList:action",
  SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + Ce.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ce.LIST_ITEM_CLASS + ` a,
    .` + Fi[Ce.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Fi[Ce.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Ce.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ce.LIST_ITEM_CLASS + ` a,
    .` + Ce.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Ce.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Fi[Ce.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Fi[Ce.LIST_ITEM_CLASS] + ` a,
    .` + Fi[Ce.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Fi[Ce.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, lt = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Wd = ["input", "button", "textarea", "select"], tn = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    Wd.indexOf(t) === -1 && n.preventDefault();
  }
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Kd() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function qd(n, e) {
  for (var t = /* @__PURE__ */ new Map(), i = 0; i < n; i++) {
    var r = e(i).trim();
    if (r) {
      var a = r[0].toLowerCase();
      t.has(a) || t.set(a, []), t.get(a).push({ text: r.toLowerCase(), index: i });
    }
  }
  return t.forEach(function(s) {
    s.sort(function(u, o) {
      return u.index - o.index;
    });
  }), t;
}
function ka(n, e) {
  var t = n.nextChar, i = n.focusItemAtIndex, r = n.sortedIndexByFirstChar, a = n.focusedItemIndex, s = n.skipFocus, u = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    eo(e);
  }, lt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = Yd(r, a, u, e) : o = Qd(r, u, e), o !== -1 && !s && i(o), o;
}
function Yd(n, e, t, i) {
  var r = i.typeaheadBuffer[0], a = n.get(r);
  if (!a)
    return -1;
  if (r === i.currentFirstChar && a[i.sortedIndexCursor].index === e) {
    i.sortedIndexCursor = (i.sortedIndexCursor + 1) % a.length;
    var s = a[i.sortedIndexCursor].index;
    if (!t(s))
      return s;
  }
  i.currentFirstChar = r;
  var u = -1, o;
  for (o = 0; o < a.length; o++)
    if (!t(a[o].index)) {
      u = o;
      break;
    }
  for (; o < a.length; o++)
    if (a[o].index > e && !t(a[o].index)) {
      u = o;
      break;
    }
  return u !== -1 ? (i.sortedIndexCursor = u, a[i.sortedIndexCursor].index) : -1;
}
function Qd(n, e, t) {
  var i = t.typeaheadBuffer[0], r = n.get(i);
  if (!r)
    return -1;
  var a = r[t.sortedIndexCursor];
  if (a.text.lastIndexOf(t.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var s = (t.sortedIndexCursor + 1) % r.length, u = -1; s !== t.sortedIndexCursor; ) {
    var o = r[s], d = o.text.lastIndexOf(t.typeaheadBuffer, 0) === 0, c = !e(o.index);
    if (d && c) {
      u = s;
      break;
    }
    s = (s + 1) % r.length;
  }
  return u !== -1 ? (t.sortedIndexCursor = u, r[t.sortedIndexCursor].index) : -1;
}
function $l(n) {
  return n.typeaheadBuffer.length > 0;
}
function eo(n) {
  n.typeaheadBuffer = "";
}
function Ns(n, e) {
  var t = n.event, i = n.isTargetListItem, r = n.focusedItemIndex, a = n.focusItemAtIndex, s = n.sortedIndexByFirstChar, u = n.isItemAtIndexDisabled, o = ct(t) === "ArrowLeft", d = ct(t) === "ArrowUp", c = ct(t) === "ArrowRight", h = ct(t) === "ArrowDown", f = ct(t) === "Home", p = ct(t) === "End", v = ct(t) === "Enter", m = ct(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || o || d || c || h || f || p || v)
    return -1;
  var g = !m && t.key.length === 1;
  if (g) {
    tn(t);
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return ka(E, e);
  }
  if (!m)
    return -1;
  i && tn(t);
  var D = i && $l(e);
  if (D) {
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return ka(E, e);
  }
  return -1;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Zd(n) {
  return n instanceof Array;
}
var Jd = ["Alt", "Control", "Meta", "Shift"];
function Hs(n) {
  var e = new Set(n ? Jd.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(i) {
      return e.has(i);
    }) && t.length === e.size;
  };
}
var $d = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = lt.UNSET_INDEX, i.focusedItemIndex = lt.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = Kd(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return $n;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ce;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return lt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClassForElementIndex: function() {
          },
          focusItemAtIndex: function() {
          },
          getAttributeForElementIndex: function() {
            return null;
          },
          getFocusedElementIndex: function() {
            return 0;
          },
          getListItemCount: function() {
            return 0;
          },
          hasCheckboxAtIndex: function() {
            return !1;
          },
          hasRadioAtIndex: function() {
            return !1;
          },
          isCheckboxCheckedAtIndex: function() {
            return !1;
          },
          isFocusInsideList: function() {
            return !1;
          },
          isRootFocused: function() {
            return !1;
          },
          listItemAtIndexHasClass: function() {
            return !1;
          },
          notifyAction: function() {
          },
          notifySelectionChange: function() {
          },
          removeClassForElementIndex: function() {
          },
          setAttributeForElementIndex: function() {
          },
          setCheckedCheckboxOrRadioAtIndex: function() {
          },
          setTabIndexForListItemChildren: function() {
          },
          getPrimaryTextAtIndex: function() {
            return "";
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.layout = function() {
      this.adapter.getListItemCount() !== 0 && (this.adapter.hasCheckboxAtIndex(0) ? this.isCheckboxList = !0 : this.adapter.hasRadioAtIndex(0) ? this.isRadioList = !0 : this.maybeInitializeSingleSelection(), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()));
    }, e.prototype.getFocusedItemIndex = function() {
      return this.focusedItemIndex;
    }, e.prototype.setWrapFocus = function(t) {
      this.wrapFocus = t;
    }, e.prototype.setVerticalOrientation = function(t) {
      this.isVertical = t;
    }, e.prototype.setSingleSelection = function(t) {
      this.isSingleSelectionList = t, t && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
    }, e.prototype.setDisabledItemsFocusable = function(t) {
      this.areDisabledItemsFocusable = t;
    }, e.prototype.maybeInitializeSingleSelection = function() {
      var t = this.getSelectedIndexFromDOM();
      if (t !== lt.UNSET_INDEX) {
        var i = this.adapter.listItemAtIndexHasClass(t, Ce.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = lt.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
        var a = this.adapter.listItemAtIndexHasClass(r, Ce.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(r, Ce.LIST_ITEM_ACTIVATED_CLASS);
        if (a || s) {
          t = r;
          break;
        }
      }
      return t;
    }, e.prototype.setHasTypeahead = function(t) {
      this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && $l(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(t) {
      this.useActivatedClass = t;
    }, e.prototype.setUseSelectedAttribute = function(t) {
      this.useSelectedAttr = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t, i) {
      i === void 0 && (i = {}), this.isIndexValid(t) && (this.isCheckboxList ? this.setCheckboxAtIndex(t, i) : this.isRadioList ? this.setRadioAtIndex(t, i) : this.setSingleSelectionAtIndex(t, i));
    }, e.prototype.handleFocusIn = function(t) {
      t >= 0 && (this.focusedItemIndex = t, this.adapter.setAttributeForElementIndex(t, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(t, "0"));
    }, e.prototype.handleFocusOut = function(t) {
      var i = this;
      t >= 0 && (this.adapter.setAttributeForElementIndex(t, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(t, "-1")), setTimeout(function() {
        i.adapter.isFocusInsideList() || i.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(t) {
      return this.adapter.listItemAtIndexHasClass(t, Ce.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, i, r) {
      var a = this, s, u = ct(t) === "ArrowLeft", o = ct(t) === "ArrowUp", d = ct(t) === "ArrowRight", c = ct(t) === "ArrowDown", h = ct(t) === "Home", f = ct(t) === "End", p = ct(t) === "Enter", v = ct(t) === "Spacebar", m = this.isVertical && c || !this.isVertical && d, g = this.isVertical && o || !this.isVertical && u, E = t.key === "A" || t.key === "a", D = Hs(t);
      if (this.adapter.isRootFocused()) {
        if ((g || f) && D([]))
          t.preventDefault(), this.focusLastElement();
        else if ((m || h) && D([]))
          t.preventDefault(), this.focusFirstElement();
        else if (g && D(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var S = this.focusLastElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (m && D(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var S = this.focusFirstElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        }
        if (this.hasTypeahead) {
          var C = {
            event: t,
            focusItemAtIndex: function(M) {
              a.focusItemAtIndex(M);
            },
            focusedItemIndex: -1,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(M) {
              return a.isIndexDisabled(M);
            }
          };
          Ns(C, this.typeaheadState);
        }
        return;
      }
      var O = this.adapter.getFocusedElementIndex();
      if (!(O === -1 && (O = r, O < 0))) {
        if (m && D([]))
          tn(t), this.focusNextElement(O);
        else if (g && D([]))
          tn(t), this.focusPrevElement(O);
        else if (m && D(["Shift"]) && this.isCheckboxList) {
          tn(t);
          var S = this.focusNextElement(O);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (g && D(["Shift"]) && this.isCheckboxList) {
          tn(t);
          var S = this.focusPrevElement(O);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (h && D([]))
          tn(t), this.focusFirstElement();
        else if (f && D([]))
          tn(t), this.focusLastElement();
        else if (h && D(["Control", "Shift"]) && this.isCheckboxList) {
          if (tn(t), this.isIndexDisabled(O))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, O, O);
        } else if (f && D(["Control", "Shift"]) && this.isCheckboxList) {
          if (tn(t), this.isIndexDisabled(O))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(O, this.adapter.getListItemCount() - 1, O);
        } else if (E && D(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === lt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((p || v) && D([])) {
          if (i) {
            var L = t.target;
            if (L && L.tagName === "A" && p || (tn(t), this.isIndexDisabled(O)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(O, !1), this.adapter.notifyAction(O));
          }
        } else if ((p || v) && D(["Shift"]) && this.isCheckboxList) {
          var L = t.target;
          if (L && L.tagName === "A" && p || (tn(t), this.isIndexDisabled(O)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : O, O, O), this.adapter.notifyAction(O));
        }
        if (this.hasTypeahead) {
          var C = {
            event: t,
            focusItemAtIndex: function(b) {
              a.focusItemAtIndex(b);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(b) {
              return a.isIndexDisabled(b);
            }
          };
          Ns(C, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, i, r) {
      var a, s = Hs(r);
      t !== lt.UNSET_INDEX && (this.isIndexDisabled(t) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, i), this.adapter.notifyAction(t)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : t, t, t), this.adapter.notifyAction(t))));
    }, e.prototype.focusNextElement = function(t) {
      var i = this.adapter.getListItemCount(), r = t, a = null;
      do {
        if (r++, r >= i)
          if (this.wrapFocus)
            r = 0;
          else
            return t;
        if (r === a)
          return -1;
        a = a ?? r;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(r));
      return this.focusItemAtIndex(r), r;
    }, e.prototype.focusPrevElement = function(t) {
      var i = this.adapter.getListItemCount(), r = t, a = null;
      do {
        if (r--, r < 0)
          if (this.wrapFocus)
            r = i - 1;
          else
            return t;
        if (r === a)
          return -1;
        a = a ?? r;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(r));
      return this.focusItemAtIndex(r), r;
    }, e.prototype.focusFirstElement = function() {
      return this.focusNextElement(-1);
    }, e.prototype.focusLastElement = function() {
      return this.focusPrevElement(this.adapter.getListItemCount());
    }, e.prototype.focusInitialElement = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(t), t;
    }, e.prototype.setEnabled = function(t, i) {
      this.isIndexValid(t, !1) && (i ? (this.adapter.removeClassForElementIndex(t, Ce.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, $n.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, Ce.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, $n.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === t && !i.forceUpdate)) {
        var r = Ce.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = Ce.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== lt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== lt.UNSET_INDEX && this.adapter.addClassForElementIndex(t, r), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === lt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, $n.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, r = i ? $n.ARIA_CURRENT : $n.ARIA_SELECTED;
      if (this.selectedIndex !== lt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), t !== lt.UNSET_INDEX) {
        var a = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, r, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? $n.ARIA_SELECTED : $n.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, i) {
      i === void 0 && (i = {});
      var r = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !i.forceUpdate) && (this.selectedIndex !== lt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), this.adapter.setAttributeForElementIndex(t, r, "true"), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, i) {
      i === void 0 && (i = {});
      for (var r = this.selectedIndex, a = i.isUserInteraction ? new Set(r === lt.UNSET_INDEX ? [] : r) : null, s = this.getSelectionAttribute(), u = [], o = 0; o < this.adapter.getListItemCount(); o++) {
        var d = a == null ? void 0 : a.has(o), c = t.indexOf(o) >= 0;
        c !== d && u.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, c), this.adapter.setAttributeForElementIndex(o, s, c ? "true" : "false");
      }
      this.selectedIndex = t, i.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(t, i, r) {
      this.lastSelectedIndex = r;
      for (var a = new Set(this.selectedIndex === lt.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(r)), u = ws([t, i].sort(), 2), o = u[0], d = u[1], c = this.getSelectionAttribute(), h = [], f = o; f <= d; f++)
        if (!this.isIndexDisabled(f)) {
          var p = a.has(f);
          s !== p && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, c, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = td([], ws(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === lt.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== lt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== lt.UNSET_INDEX ? this.selectedIndex : Zd(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, i) {
        return Math.min(t, i);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(t, i) {
      var r = this;
      if (i === void 0 && (i = !0), t instanceof Array) {
        if (!this.isCheckboxList && i)
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return t.length === 0 ? !0 : t.some(function(a) {
          return r.isIndexInRange(a);
        });
      } else if (typeof t == "number") {
        if (this.isCheckboxList && i)
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === lt.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(t) {
      var i = this.adapter.getListItemCount();
      return t >= 0 && t < i;
    }, e.prototype.setSelectedIndexOnAction = function(t, i) {
      this.lastSelectedIndex = t, this.isCheckboxList ? (this.toggleCheckboxAtIndex(t, i), this.adapter.notifySelectionChange([t])) : this.setSelectedIndex(t, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(t, i) {
      var r = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(t), s;
      i ? s = a : (s = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(t, s)), this.adapter.setAttributeForElementIndex(t, r, s ? "true" : "false");
      var u = this.selectedIndex === lt.UNSET_INDEX ? [] : this.selectedIndex.slice();
      s ? u.push(t) : u = u.filter(function(o) {
        return o !== t;
      }), this.selectedIndex = u;
    }, e.prototype.focusItemAtIndex = function(t) {
      this.adapter.focusItemAtIndex(t), this.focusedItemIndex = t;
    }, e.prototype.checkboxListToggleAll = function(t, i) {
      var r = this.adapter.getListItemCount();
      if (t.length === r)
        this.setCheckboxAtIndex([], { isUserInteraction: i });
      else {
        for (var a = [], s = 0; s < r; s++)
          (!this.isIndexDisabled(s) || t.indexOf(s) > -1) && a.push(s);
        this.setCheckboxAtIndex(a, { isUserInteraction: i });
      }
    }, e.prototype.typeaheadMatchItem = function(t, i, r) {
      var a = this;
      r === void 0 && (r = !1);
      var s = {
        focusItemAtIndex: function(u) {
          a.focusItemAtIndex(u);
        },
        focusedItemIndex: i || this.focusedItemIndex,
        nextChar: t,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: r,
        isItemAtIndexDisabled: function(u) {
          return a.isIndexDisabled(u);
        }
      };
      return ka(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return qd(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      eo(this.typeaheadState);
    }, e;
  }(An)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var to = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = Li.TOP_START, i.originCorner = Li.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return zd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Xd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return cr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return Li;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          hasAnchor: function() {
            return !1;
          },
          isElementInContainer: function() {
            return !1;
          },
          isFocused: function() {
            return !1;
          },
          isRtl: function() {
            return !1;
          },
          getInnerDimensions: function() {
            return { height: 0, width: 0 };
          },
          getAnchorDimensions: function() {
            return null;
          },
          getWindowDimensions: function() {
            return { height: 0, width: 0 };
          },
          getBodyDimensions: function() {
            return { height: 0, width: 0 };
          },
          getWindowScroll: function() {
            return { x: 0, y: 0 };
          },
          setPosition: function() {
          },
          setMaxHeight: function() {
          },
          setTransformOrigin: function() {
          },
          saveFocus: function() {
          },
          restoreFocus: function() {
          },
          notifyClose: function() {
          },
          notifyClosing: function() {
          },
          notifyOpen: function() {
          },
          notifyOpening: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t = e.cssClasses, i = t.ROOT, r = t.OPEN;
      if (!this.adapter.hasClass(i))
        throw new Error(i + " class required in root element.");
      this.adapter.hasClass(r) && (this.isSurfaceOpen = !0);
    }, e.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, e.prototype.setAnchorCorner = function(t) {
      this.anchorCorner = t;
    }, e.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ ot.RIGHT;
    }, e.prototype.setAnchorMargin = function(t) {
      this.anchorMargin.top = t.top || 0, this.anchorMargin.right = t.right || 0, this.anchorMargin.bottom = t.bottom || 0, this.anchorMargin.left = t.left || 0;
    }, e.prototype.setIsHoisted = function(t) {
      this.isHoistedElement = t;
    }, e.prototype.setFixedPosition = function(t) {
      this.isFixedPosition = t;
    }, e.prototype.isFixed = function() {
      return this.isFixedPosition;
    }, e.prototype.setAbsolutePosition = function(t, i) {
      this.position.x = this.isFinite(t) ? t : 0, this.position.y = this.isFinite(i) ? i : 0;
    }, e.prototype.setIsHorizontallyCenteredOnViewport = function(t) {
      this.isHorizontallyCenteredOnViewport = t;
    }, e.prototype.setQuickOpen = function(t) {
      this.isQuickOpen = t;
    }, e.prototype.setMaxHeight = function(t) {
      this.maxHeight = t;
    }, e.prototype.setOpenBottomBias = function(t) {
      this.openBottomBias = t;
    }, e.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, e.prototype.open = function() {
      var t = this;
      this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        t.dimensions = t.adapter.getInnerDimensions(), t.autoposition(), t.adapter.addClass(e.cssClasses.OPEN), t.openAnimationEndTimerId = setTimeout(function() {
          t.openAnimationEndTimerId = 0, t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), t.adapter.notifyOpen();
        }, cr.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(t) {
      var i = this;
      if (t === void 0 && (t = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, t || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          i.adapter.removeClass(e.cssClasses.OPEN), i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), i.closeAnimationEndTimerId = setTimeout(function() {
            i.closeAnimationEndTimerId = 0, i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), i.adapter.notifyClose();
          }, cr.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, t || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(t) {
      var i = t.target;
      this.adapter.isElementInContainer(i) || this.close();
    }, e.prototype.handleKeydown = function(t) {
      var i = t.keyCode, r = t.key, a = r === "Escape" || i === 27;
      a && this.close();
    }, e.prototype.autoposition = function() {
      var t;
      this.measurements = this.getAutoLayoutmeasurements();
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), a = this.hasBit(i, ot.BOTTOM) ? "bottom" : "top", s = this.hasBit(i, ot.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), d = this.measurements, c = d.anchorSize, h = d.surfaceSize, f = (t = {}, t[s] = u, t[a] = o, t);
      c.width / h.width > cr.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, ot.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var t = this.adapter.getAnchorDimensions(), i = this.adapter.getBodyDimensions(), r = this.adapter.getWindowDimensions(), a = this.adapter.getWindowScroll();
      return t || (t = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: t,
        bodySize: i,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: t.top,
          right: r.width - t.right,
          bottom: r.height - t.bottom,
          left: t.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: r,
        windowScroll: a
      };
    }, e.prototype.getoriginCorner = function() {
      var t = this.originCorner, i = this.measurements, r = i.viewportDistance, a = i.anchorSize, s = i.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, ot.BOTTOM), d, c;
      o ? (d = r.top - u + this.anchorMargin.bottom, c = r.bottom - u - this.anchorMargin.bottom) : (d = r.top - u + this.anchorMargin.top, c = r.bottom - u + a.height - this.anchorMargin.top);
      var h = c - s.height > 0;
      !h && d > c + this.openBottomBias && (t = this.setBit(t, ot.BOTTOM));
      var f = this.adapter.isRtl(), p = this.hasBit(this.anchorCorner, ot.FLIP_RTL), v = this.hasBit(this.anchorCorner, ot.RIGHT) || this.hasBit(t, ot.RIGHT), m = !1;
      f && p ? m = !v : m = v;
      var g, E;
      m ? (g = r.left + a.width + this.anchorMargin.right, E = r.right - this.anchorMargin.right) : (g = r.left + this.anchorMargin.left, E = r.right + a.width - this.anchorMargin.left);
      var D = g - s.width > 0, S = E - s.width > 0, C = this.hasBit(t, ot.FLIP_RTL) && this.hasBit(t, ot.RIGHT);
      return S && C && f || !D && C ? t = this.unsetBit(t, ot.RIGHT) : (D && m && f || D && !m && v || !S && g >= E) && (t = this.setBit(t, ot.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, r = 0, a = this.hasBit(t, ot.BOTTOM), s = this.hasBit(this.anchorCorner, ot.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (r = i.top + this.anchorMargin.top - u, s || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, s && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, ot.RIGHT), a = this.hasBit(this.anchorCorner, ot.RIGHT);
      if (r) {
        var s = a ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, ot.BOTTOM), a = this.hasBit(this.anchorCorner, ot.BOTTOM), s = 0;
      return r ? s = a ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var i, r, a = this.measurements, s = a.windowScroll, u = a.viewportDistance, o = a.surfaceSize, d = a.viewportSize, c = Object.keys(t);
      try {
        for (var h = gn(c), f = h.next(); !f.done; f = h.next()) {
          var p = f.value, v = t[p] || 0;
          if (this.isHorizontallyCenteredOnViewport && (p === "left" || p === "right")) {
            t[p] = (d.width - o.width) / 2;
            continue;
          }
          v += u[p], this.isFixedPosition || (p === "top" ? v += s.y : p === "bottom" ? v -= s.y : p === "left" ? v += s.x : v -= s.x), t[p] = v;
        }
      } catch (m) {
        i = { error: m };
      } finally {
        try {
          f && !f.done && (r = h.return) && r.call(h);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var t = this, i = this.adapter.isFocused(), r = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = r.activeElement && this.adapter.isElementInContainer(r.activeElement);
      (i || a) && setTimeout(function() {
        t.adapter.restoreFocus();
      }, cr.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(t, i) {
      return !!(t & i);
    }, e.prototype.setBit = function(t, i) {
      return t | i;
    }, e.prototype.unsetBit = function(t, i) {
      return t ^ i;
    }, e.prototype.isFinite = function(t) {
      return typeof t == "number" && isFinite(t);
    }, e;
  }(An)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Vi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Bi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, ec = {
  FOCUS_ROOT_INDEX: -1
}, Ni;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.LIST_ROOT = 1] = "LIST_ROOT", n[n.FIRST_ITEM = 2] = "FIRST_ITEM", n[n.LAST_ITEM = 3] = "LAST_ITEM";
})(Ni || (Ni = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var tc = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = Ni.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Bi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ec;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClassToElementAtIndex: function() {
          },
          removeClassFromElementAtIndex: function() {
          },
          addAttributeToElementAtIndex: function() {
          },
          removeAttributeFromElementAtIndex: function() {
          },
          getAttributeFromElementAtIndex: function() {
            return null;
          },
          elementContainsClass: function() {
            return !1;
          },
          closeSurface: function() {
          },
          getElementIndex: function() {
            return -1;
          },
          notifySelected: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          focusItemAtIndex: function() {
          },
          focusListRoot: function() {
          },
          getSelectedSiblingOfItemAtIndex: function() {
            return -1;
          },
          isSelectableItemAtIndex: function() {
            return !1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function() {
      this.closeAnimationEndTimerId && clearTimeout(this.closeAnimationEndTimerId), this.adapter.closeSurface();
    }, e.prototype.handleKeydown = function(t) {
      var i = t.key, r = t.keyCode, a = i === "Tab" || r === 9;
      a && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(t) {
      var i = this, r = this.adapter.getElementIndex(t);
      if (!(r < 0)) {
        this.adapter.notifySelected({ index: r });
        var a = this.adapter.getAttributeFromElementAtIndex(r, Bi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = i.adapter.getElementIndex(t);
          s >= 0 && i.adapter.isSelectableItemAtIndex(s) && i.setSelectedIndex(s);
        }, to.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Ni.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Ni.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Ni.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, e.prototype.setDefaultFocusState = function(t) {
      this.defaultFocusState = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t) {
      if (this.validatedIndex(t), !this.adapter.isSelectableItemAtIndex(t))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var i = this.adapter.getSelectedSiblingOfItemAtIndex(t);
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, Bi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, Vi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Vi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Bi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, i) {
      this.validatedIndex(t), i ? (this.adapter.removeClassFromElementAtIndex(t, Ce.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Bi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, Ce.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Bi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(t) {
      var i = this.adapter.getMenuItemCount(), r = t >= 0 && t < i;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(An)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var $e = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, fa = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  ARIA_SELECTED_ATTR: "aria-selected",
  CHANGE_EVENT: "MDCSelect:change",
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-select__icon",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  MENU_SELECTOR: ".mdc-select__menu",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
  SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
  VALUE_ATTR: "data-value"
}, hi = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var nc = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = hi.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return $e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return hi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return fa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          activateBottomLine: function() {
          },
          deactivateBottomLine: function() {
          },
          getSelectedIndex: function() {
            return -1;
          },
          setSelectedIndex: function() {
          },
          hasLabel: function() {
            return !1;
          },
          floatLabel: function() {
          },
          getLabelWidth: function() {
            return 0;
          },
          setLabelRequired: function() {
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          },
          setRippleCenter: function() {
          },
          notifyChange: function() {
          },
          setSelectedText: function() {
          },
          isSelectAnchorFocused: function() {
            return !1;
          },
          getSelectAnchorAttr: function() {
            return "";
          },
          setSelectAnchorAttr: function() {
          },
          removeSelectAnchorAttr: function() {
          },
          addMenuClass: function() {
          },
          removeMenuClass: function() {
          },
          openMenu: function() {
          },
          closeMenu: function() {
          },
          getAnchorElement: function() {
            return null;
          },
          setMenuAnchorElement: function() {
          },
          setMenuAnchorCorner: function() {
          },
          setMenuWrapFocus: function() {
          },
          focusMenuItemAtIndex: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          getMenuItemValues: function() {
            return [];
          },
          getMenuItemTextAtIndex: function() {
            return "";
          },
          isTypeaheadInProgress: function() {
            return !1;
          },
          typeaheadMatchItem: function() {
            return -1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getSelectedIndex = function() {
      return this.adapter.getSelectedIndex();
    }, e.prototype.setSelectedIndex = function(t, i, r) {
      i === void 0 && (i = !1), r === void 0 && (r = !1), !(t >= this.adapter.getMenuItemCount()) && (t === hi.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), i && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
    }, e.prototype.setValue = function(t, i) {
      i === void 0 && (i = !1);
      var r = this.adapter.getMenuItemValues().indexOf(t);
      this.setSelectedIndex(
        r,
        /** closeMenu */
        !1,
        i
      );
    }, e.prototype.getValue = function() {
      var t = this.adapter.getSelectedIndex(), i = this.adapter.getMenuItemValues();
      return t !== hi.UNSET_INDEX ? i[t] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(t) {
      this.disabled = t, this.disabled ? (this.adapter.addClass($e.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass($e.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass($e.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, i = this.adapter.hasClass($e.FOCUSED), r = t || i, a = this.adapter.hasClass($e.REQUIRED);
        this.notchOutline(r), this.adapter.floatLabel(r), this.adapter.setLabelRequired(a);
      }
    }, e.prototype.layoutOptions = function() {
      var t = this.adapter.getMenuItemValues(), i = t.indexOf(this.getValue());
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var t = this.getSelectedIndex(), i = t >= 0 ? t : 0;
        this.adapter.focusMenuItemAtIndex(i);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass($e.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass($e.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass($e.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, e.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, e.prototype.handleClick = function(t) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(t), this.openMenu();
      }
    }, e.prototype.handleKeydown = function(t) {
      if (!(this.isMenuOpen || !this.adapter.hasClass($e.FOCUSED))) {
        var i = ct(t) === Ie.ENTER, r = ct(t) === Ie.SPACEBAR, a = ct(t) === Ie.ARROW_UP, s = ct(t) === Ie.ARROW_DOWN, u = t.ctrlKey || t.metaKey;
        if (!u && (!r && t.key && t.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var o = r ? " " : t.key, d = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
          d >= 0 && this.setSelectedIndex(d), t.preventDefault();
          return;
        }
        !i && !r && !a && !s || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var i = this.adapter.hasClass($e.FOCUSED);
        if (t) {
          var r = hi.LABEL_SCALE, a = this.adapter.getLabelWidth() * r;
          this.adapter.notchOutline(a);
        } else i || this.adapter.closeOutline();
      }
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, e.prototype.setUseDefaultValidation = function(t) {
      this.useDefaultValidation = t;
    }, e.prototype.setValid = function(t) {
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass($e.INVALID), this.adapter.removeMenuClass($e.MENU_INVALID)) : (this.adapter.addClass($e.INVALID), this.adapter.addMenuClass($e.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass($e.REQUIRED) && !this.adapter.hasClass($e.DISABLED) ? this.getSelectedIndex() !== hi.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass($e.REQUIRED) : this.adapter.removeClass($e.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(Li.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass($e.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass($e.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass($e.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass($e.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(t) {
      if (this.helperText) {
        this.helperText.setValidity(t);
        var i = this.helperText.isVisible(), r = this.helperText.getId();
        i && r ? this.adapter.setSelectAnchorAttr(fa.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(fa.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, hi.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(An)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var vi = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, Un = {
  HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg",
  HELPER_TEXT_VALIDATION_MSG_PERSISTENT: "mdc-select-helper-text--validation-msg-persistent"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ic = (
  /** @class */
  function(n) {
    bn(e, n);
    function e(t) {
      return n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Un;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return vi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setAttr: function() {
          },
          getAttr: function() {
            return null;
          },
          removeAttr: function() {
          },
          setContent: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getId = function() {
      return this.adapter.getAttr("id");
    }, e.prototype.isVisible = function() {
      return this.adapter.getAttr(vi.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.setValidation = function(t) {
      t ? this.adapter.addClass(Un.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(Un.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass(Un.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(Un.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(Un.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(Un.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var i = this.adapter.hasClass(Un.HELPER_TEXT_VALIDATION_MSG);
      if (i) {
        var r = this.adapter.hasClass(Un.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !t || r;
        if (a) {
          this.showToScreenReader(), t ? this.adapter.removeAttr(vi.ROLE) : this.adapter.setAttr(vi.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(vi.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(vi.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(vi.ARIA_HIDDEN, "true");
    }, e;
  }(An)
), rc = /* @__PURE__ */ ae("<div><!></div>");
function ac(n, e) {
  Ye(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "style", 3, ""), a = I(e, "static", 3, !1), s = I(e, "anchor", 3, !0), u = I(e, "fixed", 3, !1), o = I(e, "open", 31, () => Te(a())), d = I(e, "managed", 3, !1), c = I(e, "fullWidth", 3, !1), h = I(e, "quickOpen", 3, !1), f = I(e, "anchorElement", 15), p = I(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), v = I(e, "maxHeight", 3, 0), m = I(e, "horizontallyCenteredOnViewport", 3, !1), g = I(e, "openBottomBias", 3, 0), E = I(e, "neverRestoreFocus", 3, !1), D = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "static",
    "anchor",
    "fixed",
    "open",
    "managed",
    "fullWidth",
    "quickOpen",
    "anchorElement",
    "anchorCorner",
    "anchorMargin",
    "maxHeight",
    "horizontallyCenteredOnViewport",
    "openBottomBias",
    "neverRestoreFocus",
    "children"
  ]), S, C = /* @__PURE__ */ ce(void 0), O = Te({}), L = Te({}), M = /* @__PURE__ */ ce(void 0);
  pe("SMUI:list:role", "menu"), pe("SMUI:list:item:role", "menuitem"), Pe(() => {
    var R, j;
    S && s() && !((R = S.parentElement) != null && R.classList.contains("mdc-menu-surface--anchor")) && ((j = S.parentElement) == null || j.classList.add("mdc-menu-surface--anchor"), f(S.parentElement ?? void 0));
  }), Pe(() => {
    l(C) && l(C).isOpen() !== o() && (o() ? l(C).open() : l(C).close());
  }), Pe(() => {
    l(C) && l(C).setQuickOpen(h());
  }), Pe(() => {
    l(C) && l(C).setFixedPosition(u());
  }), Pe(() => {
    l(C) && l(C).setMaxHeight(v());
  }), Pe(() => {
    l(C) && l(C).setIsHorizontallyCenteredOnViewport(m());
  });
  const b = Li;
  Pe(() => {
    l(C) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? l(C).setAnchorCorner(b[e.anchorCorner]) : l(C).setAnchorCorner(e.anchorCorner));
  }), Pe(() => {
    l(C) && l(C).setAnchorMargin(p());
  }), Pe(() => {
    l(C) && l(C).setOpenBottomBias(g());
  });
  const x = xe("SMUI:menu-surface:mount"), G = xe("SMUI:menu-surface:unmount");
  Ft(() => {
    W(
      C,
      new to({
        addClass: F,
        removeClass: N,
        hasClass: ie,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          d() || o(a()), o() || Tt(he(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          d() || o(a()), o() || Tt(he(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          d() || o(!0), o() && Tt(he(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          o() || Tt(he(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (j) => he().contains(j),
        isRtl: () => getComputedStyle(he()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (j) => {
          L["transform-origin"] = j;
        },
        isFocused: () => document.activeElement === he(),
        saveFocus: () => {
          W(M, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !E() && (!S || he().contains(document.activeElement)) && l(M) && document.contains(l(M)) && "focus" in l(M) && l(M).focus();
        },
        getInnerDimensions: () => ({
          width: he().offsetWidth,
          height: he().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (j) => {
          L.left = "left" in j ? `${j.left}px` : "", L.right = "right" in j ? `${j.right}px` : "", L.top = "top" in j ? `${j.top}px` : "", L.bottom = "bottom" in j ? `${j.bottom}px` : "";
        },
        setMaxHeight: (j) => {
          L["max-height"] = j;
        }
      }),
      !0
    );
    const R = {
      get open() {
        return o();
      },
      set open(j) {
        o(j);
      },
      closeProgrammatic: we
    };
    return x && x(R), l(C).init(), () => {
      var k, X;
      G && G(R);
      const j = l(C).isHoistedElement;
      (k = l(C)) == null || k.destroy(), j && ((X = he().parentNode) == null || X.removeChild(he()));
    };
  }), li(() => {
    var R;
    s() && he() && ((R = he().parentElement) == null || R.classList.remove("mdc-menu-surface--anchor"));
  });
  function ie(R) {
    return R in O ? O[R] : he().classList.contains(R);
  }
  function F(R) {
    O[R] || (O[R] = !0);
  }
  function N(R) {
    (!(R in O) || O[R]) && (O[R] = !1);
  }
  function we(R) {
    var j;
    (j = l(C)) == null || j.close(R), o(!1);
  }
  function Q(R) {
    l(C) && o() && !d() && l(C).handleBodyClick(R);
  }
  function B() {
    return o();
  }
  function H(R) {
    o(R);
  }
  function $(R, j) {
    if (l(C) == null)
      throw new Error("Instance is not defined.");
    return l(C).setAbsolutePosition(R, j);
  }
  function V(R) {
    if (l(C) == null)
      throw new Error("Instance is not defined.");
    return l(C).setIsHoisted(R);
  }
  function P() {
    if (l(C) == null)
      throw new Error("Instance is not defined.");
    return l(C).isFixed();
  }
  function de() {
    if (l(C) == null)
      throw new Error("Instance is not defined.");
    return l(C).flipCornerHorizontally();
  }
  function he() {
    return S;
  }
  var tt = {
    isOpen: B,
    setOpen: H,
    setAbsolutePosition: $,
    setIsHoisted: V,
    isFixed: P,
    flipCornerHorizontally: de,
    getElement: he
  }, Ve = rc();
  Hl("click", bl.body, Q, !0);
  var T = (R) => {
    var j;
    l(C) && !d() && l(C).handleKeydown(R), (j = e.onkeydown) == null || j.call(e, R);
  };
  ft(
    Ve,
    (R, j) => ({
      class: R,
      style: j,
      role: "dialog",
      ...D,
      onkeydown: T
    }),
    [
      () => at({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": c(),
        ...O,
        [i()]: !0
      }),
      () => Object.entries(L).map(([R, j]) => `${R}: ${j};`).concat([r()]).join(" ")
    ]
  );
  var K = Y(Ve);
  return Ee(K, () => e.children ?? Ae), Re(Ve, (R) => S = R, () => S), et(Ve, (R, j) => ne == null ? void 0 : ne(R, j), t), w(n, Ve), Qe(tt);
}
function ha(n, { addClass: e = (i) => n.classList.add(i), removeClass: t = (i) => n.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function sc(n, e) {
  Ye(e, !0);
  const { closest: t } = ts;
  let i = I(e, "use", 19, () => []), r = I(e, "class", 3, ""), a = I(e, "open", 15, !1), s = I(e, "anchorElement", 15), u = I(e, "managed", 3, !1), o = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), d, c = /* @__PURE__ */ ce(void 0), h = /* @__PURE__ */ ce(void 0), f = /* @__PURE__ */ ce(void 0);
  pe("SMUI:menu-surface:mount", (b) => {
    l(h) || W(h, b, !0);
  });
  const p = xe("SMUI:list:mount");
  pe("SMUI:list:mount", (b) => {
    l(f) || W(f, b, !0), p && p(b);
  });
  const v = xe("SMUI:menu:mount"), m = xe("SMUI:menu:unmount");
  Ft(() => (W(
    c,
    new tc({
      addClassToElementAtIndex: (b, x) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).addClassForElementIndex(b, x);
      },
      removeClassFromElementAtIndex: (b, x) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).removeClassForElementIndex(b, x);
      },
      addAttributeToElementAtIndex: (b, x, G) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).setAttributeForElementIndex(b, x, G);
      },
      removeAttributeFromElementAtIndex: (b, x) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).removeAttributeForElementIndex(b, x);
      },
      getAttributeFromElementAtIndex: (b, x) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        return l(f).getAttributeFromElementIndex(b, x);
      },
      elementContainsClass: (b, x) => b.classList.contains(x),
      closeSurface: (b) => {
        var x;
        u() || ((x = l(h)) == null || x.closeProgrammatic(b), Tt(L(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (b) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        return l(f).getOrderedList().map((x) => x.element).indexOf(b);
      },
      notifySelected: (b) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        Tt(L(), "SMUIMenuSelected", {
          index: b.index,
          item: l(f).getOrderedList()[b.index].element
        });
      },
      getMenuItemCount: () => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        return l(f).items.length;
      },
      focusItemAtIndex: (b) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).focusItemAtIndex(b);
      },
      focusListRoot: () => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in l(f).element && l(f).element.focus();
      },
      isSelectableItemAtIndex: (b) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        return !!t(l(f).getOrderedList()[b].element, `.${Vi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (b) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        const x = l(f).getOrderedList(), G = t(x[b].element, `.${Vi.MENU_SELECTION_GROUP}`), ie = G == null ? void 0 : G.querySelector(`.${Vi.MENU_SELECTED_LIST_ITEM}`);
        return ie ? x.map((F) => F.element).indexOf(ie) : -1;
      }
    }),
    !0
  ), v && v(l(c)), l(c).init(), () => {
    var b;
    m && l(c) && m(l(c)), (b = l(c)) == null || b.destroy();
  }));
  function g(b) {
    l(c) && l(c).handleKeydown(b);
  }
  function E() {
    return a();
  }
  function D(b) {
    a(b);
  }
  function S(b) {
    if (l(c) == null)
      throw new Error("Instance is undefined.");
    l(c).setDefaultFocusState(b);
  }
  function C() {
    if (l(c) == null)
      throw new Error("Instance is undefined.");
    return l(c).getSelectedIndex();
  }
  function O() {
    return d;
  }
  function L() {
    return d.getElement();
  }
  var M = {
    isOpen: E,
    setOpen: D,
    setDefaultFocusState: S,
    getSelectedIndex: C,
    getMenuSurface: O,
    getElement: L
  };
  {
    let b = /* @__PURE__ */ oe(() => at({ "mdc-menu": !0, [r()]: !0 }));
    Re(
      ac(n, rt(
        {
          get use() {
            return i();
          },
          get class() {
            return l(b);
          },
          get managed() {
            return u();
          }
        },
        () => o,
        {
          onkeydown: (x) => {
            var G;
            g(x), (G = e.onkeydown) == null || G.call(e, x);
          },
          onSMUIMenuSurfaceOpened: (x) => {
            var G;
            l(c) && l(c).handleMenuSurfaceOpened(), (G = e.onSMUIMenuSurfaceOpened) == null || G.call(e, x);
          },
          onSMUIListAction: (x) => {
            var G;
            l(c) && l(f) && l(c).handleItemAction(l(f).getOrderedList()[x.detail.index].element), (G = e.onSMUIListAction) == null || G.call(e, x);
          },
          get open() {
            return a();
          },
          set open(x) {
            a(x);
          },
          get anchorElement() {
            return s();
          },
          set anchorElement(x) {
            s(x);
          },
          children: (x, G) => {
            var ie = ve(), F = re(ie);
            Ee(F, () => e.children ?? Ae), w(x, ie);
          },
          $$slots: { default: !0 }
        }
      )),
      (x) => d = x,
      () => d
    );
  }
  return Qe(M);
}
function lc(n, e) {
  Ye(e, !0);
  const { closest: t, matches: i } = ts;
  let r = xe("SMUI:list:nav"), a = I(e, "use", 19, () => []), s = I(e, "class", 3, ""), u = I(e, "nonInteractive", 3, !1), o = I(e, "dense", 3, !1), d = I(e, "textualList", 3, !1), c = I(e, "avatarList", 3, !1), h = I(e, "iconList", 3, !1), f = I(e, "imageList", 3, !1), p = I(e, "thumbnailList", 3, !1), v = I(e, "videoList", 3, !1), m = I(e, "twoLine", 3, !1), g = I(e, "threeLine", 3, !1), E = I(e, "vertical", 3, !0), D = I(e, "wrapFocus", 19, () => xe("SMUI:list:wrapFocus") ?? !1), S = I(e, "singleSelection", 3, !1), C = I(e, "disabledItemsFocusable", 3, !1), O = I(e, "selectedIndex", 31, () => -1), L = I(e, "radioList", 3, !1), M = I(e, "checkList", 3, !1), b = I(e, "hasTypeahead", 3, !1), x = I(e, "component", 3, ns), G = I(e, "tag", 3, r ? "nav" : "ul"), ie = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "nonInteractive",
    "dense",
    "textualList",
    "avatarList",
    "iconList",
    "imageList",
    "thumbnailList",
    "videoList",
    "twoLine",
    "threeLine",
    "vertical",
    "wrapFocus",
    "singleSelection",
    "disabledItemsFocusable",
    "selectedIndex",
    "radioList",
    "checkList",
    "hasTypeahead",
    "component",
    "tag",
    "children"
  ]), F, N = /* @__PURE__ */ ce(void 0), we = [], Q = xe("SMUI:list:role");
  const B = /* @__PURE__ */ new WeakMap();
  let H = xe("SMUI:dialog:selection"), $ = xe("SMUI:addLayoutListener"), V;
  pe("SMUI:list:nonInteractive", u()), pe("SMUI:separator:context", "list"), Q || (S() ? (Q = "listbox", pe("SMUI:list:item:role", "option")) : L() ? (Q = "radiogroup", pe("SMUI:list:item:role", "radio")) : M() ? (Q = "group", pe("SMUI:list:item:role", "checkbox")) : (Q = "list", pe("SMUI:list:item:role", void 0))), Pe(() => {
    l(N) && l(N).setVerticalOrientation(E());
  }), Pe(() => {
    l(N) && l(N).setWrapFocus(D());
  }), Pe(() => {
    l(N) && l(N).setHasTypeahead(b());
  }), Pe(() => {
    l(N) && l(N).setSingleSelection(S());
  }), Pe(() => {
    l(N) && l(N).setDisabledItemsFocusable(C());
  }), Pe(() => {
    l(N) && S() && _e() !== O() && l(N).setSelectedIndex(O());
  }), $ && (V = $(ee)), pe("SMUI:list:item:mount", (Z) => {
    we.push(Z), B.set(Z.element, Z), S() && Z.selected && O(Me(Z.element));
  }), pe("SMUI:list:item:unmount", (Z) => {
    const J = (Z && we.findIndex((_) => _ === Z)) ?? -1;
    J !== -1 && (we.splice(J, 1), B.delete(Z.element));
  });
  const P = xe("SMUI:list:mount"), de = xe("SMUI:list:unmount");
  Ft(() => {
    W(
      N,
      new $d({
        addClassForElementIndex: k,
        focusItemAtIndex: Fe,
        getAttributeForElementIndex: (J, _) => {
          var U;
          return ((U = R()[J]) == null ? void 0 : U.getAttr(_)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? R().map((J) => J.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => we.length,
        getPrimaryTextAtIndex: ze,
        hasCheckboxAtIndex: (J) => {
          var _;
          return ((_ = R()[J]) == null ? void 0 : _.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (J) => {
          var _;
          return ((_ = R()[J]) == null ? void 0 : _.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (J) => {
          const _ = R()[J];
          return ((_ == null ? void 0 : _.hasCheckbox) && _.checked) ?? !1;
        },
        isFocusInsideList: () => F != null && Oe() !== document.activeElement && Oe().contains(document.activeElement),
        isRootFocused: () => F != null && document.activeElement === Oe(),
        listItemAtIndexHasClass: j,
        notifyAction: (J) => {
          O(J), F != null && Tt(Oe(), "SMUIListAction", { index: J });
        },
        notifySelectionChange: (J) => {
          F != null && Tt(Oe(), "SMUIListSelectionChange", { changedIndices: J });
        },
        removeClassForElementIndex: X,
        setAttributeForElementIndex: te,
        setCheckedCheckboxOrRadioAtIndex: (J, _) => {
          R()[J].checked = _;
        },
        setTabIndexForListItemChildren: (J, _) => {
          const U = R()[J];
          Array.prototype.forEach.call(U.element.querySelectorAll("button:not(:disabled), a"), (Je) => {
            Je.setAttribute("tabindex", _);
          });
        }
      }),
      !0
    );
    const Z = {
      get element() {
        return Oe();
      },
      get items() {
        return we;
      },
      get typeaheadInProgress() {
        if (!l(N))
          throw new Error("Instance is undefined.");
        return l(N).isTypeaheadInProgress();
      },
      typeaheadMatchItem(J, _) {
        if (!l(N))
          throw new Error("Instance is undefined.");
        return l(N).typeaheadMatchItem(
          J,
          _,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: R,
      focusItemAtIndex: Fe,
      addClassForElementIndex: k,
      removeClassForElementIndex: X,
      setAttributeForElementIndex: te,
      removeAttributeForElementIndex: fe,
      getAttributeFromElementIndex: Ze,
      getPrimaryTextAtIndex: ze
    };
    return P && P(Z), l(N).init(), l(N).layout(), () => {
      var J;
      de && de(Z), (J = l(N)) == null || J.destroy();
    };
  }), li(() => {
    V && V();
  });
  function he(Z) {
    l(N) && Z.target && l(N).handleKeydown(Z, Z.target.classList.contains("mdc-deprecated-list-item"), Me(Z.target));
  }
  function tt(Z) {
    l(N) && Z.target && l(N).handleFocusIn(Me(Z.target));
  }
  function Ve(Z) {
    l(N) && Z.target && l(N).handleFocusOut(Me(Z.target));
  }
  function T(Z) {
    l(N) && Z.target && l(N).handleClick(Me(Z.target), !i(Z.target, 'input[type="checkbox"], input[type="radio"]'), Z);
  }
  function K(Z) {
    if (L() || M()) {
      const J = Me(Z.target);
      if (J !== -1) {
        const _ = R()[J];
        _ && (L() && !_.checked || M()) && (i(Z.detail.target, 'input[type="checkbox"], input[type="radio"]') || (_.checked = !_.checked), _.activateRipple(), window.requestAnimationFrame(() => {
          _.deactivateRipple();
        }));
      }
    }
  }
  function R() {
    return F == null ? [] : [...Oe().children].map((Z) => B.get(Z)).filter((Z) => Z && Z._smui_list_item_accessor);
  }
  function j(Z, J) {
    const _ = R()[Z];
    return (_ && _.hasClass(J)) ?? !1;
  }
  function k(Z, J) {
    const _ = R()[Z];
    _ && _.addClass(J);
  }
  function X(Z, J) {
    const _ = R()[Z];
    _ && _.removeClass(J);
  }
  function te(Z, J, _) {
    const U = R()[Z];
    U && U.addAttr(J, _);
  }
  function fe(Z, J) {
    const _ = R()[Z];
    _ && _.removeAttr(J);
  }
  function Ze(Z, J) {
    const _ = R()[Z];
    return _ ? _.getAttr(J) : null;
  }
  function ze(Z) {
    const J = R()[Z];
    return (J && J.getPrimaryText()) ?? "";
  }
  function Me(Z) {
    const J = t(Z, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return J && i(J, ".mdc-deprecated-list-item") ? R().map((_) => _ == null ? void 0 : _.element).indexOf(J) : -1;
  }
  function ee() {
    if (!l(N))
      throw new Error("Instance is undefined.");
    return l(N).layout();
  }
  function ue(Z, J) {
    if (!l(N))
      throw new Error("Instance is undefined.");
    return l(N).setEnabled(Z, J);
  }
  function Ne() {
    if (!l(N))
      throw new Error("Instance is undefined.");
    return l(N).isTypeaheadInProgress();
  }
  function _e() {
    if (!l(N))
      throw new Error("Instance is undefined.");
    return l(N).getSelectedIndex();
  }
  function Be() {
    if (!l(N))
      throw new Error("Instance is undefined.");
    return l(N).getFocusedItemIndex();
  }
  function Fe(Z) {
    const J = R()[Z];
    J && "focus" in J.element && J.element.focus();
  }
  function Oe() {
    return F.getElement();
  }
  var Xe = {
    layout: ee,
    setEnabled: ue,
    getTypeaheadInProgress: Ne,
    getSelectedIndex: _e,
    getFocusedItemIndex: Be,
    focusItemAtIndex: Fe,
    getElement: Oe
  }, Et = ve(), ir = re(Et);
  {
    let Z = /* @__PURE__ */ oe(() => at({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": o(),
      "mdc-deprecated-list--textual-list": d(),
      "mdc-deprecated-list--avatar-list": c() || H,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": p(),
      "mdc-deprecated-list--video-list": v(),
      "mdc-deprecated-list--two-line": m(),
      "smui-list--three-line": g() && !m(),
      [s()]: !0
    }));
    es(ir, x, (J, _) => {
      Re(
        _(J, rt(
          {
            get tag() {
              return G();
            },
            get use() {
              return a();
            },
            get class() {
              return l(Z);
            },
            get role() {
              return Q;
            }
          },
          () => ie,
          {
            onkeydown: (U) => {
              var me;
              he(U), (me = e.onkeydown) == null || me.call(e, U);
            },
            onfocusin: (U) => {
              var me;
              tt(U), (me = e.onfocusin) == null || me.call(e, U);
            },
            onfocusout: (U) => {
              var me;
              Ve(U), (me = e.onfocusout) == null || me.call(e, U);
            },
            onclick: (U) => {
              var me;
              T(U), (me = e.onclick) == null || me.call(e, U);
            },
            onSMUIAction: (U) => {
              var me;
              K(U), (me = e.onSMUIAction) == null || me.call(e, U);
            },
            children: (U, me) => {
              var Je = ve(), dt = re(Je);
              Ee(dt, () => e.children ?? Ae), w(U, Je);
            },
            $$slots: { default: !0 }
          }
        )),
        (U) => F = U,
        () => F
      );
    });
  }
  return w(n, Et), Qe(Xe);
}
let oc = 0;
var uc = /* @__PURE__ */ ae('<span class="mdc-deprecated-list-item__ripple"></span>'), dc = /* @__PURE__ */ ae("<!><!>", 1);
function cc(n, e) {
  Ye(e, !0);
  let t = () => {
  };
  function i(k) {
    return k === t;
  }
  let r = xe("SMUI:list:item:nav"), a = I(e, "use", 19, () => []), s = I(e, "class", 3, ""), u = I(e, "style", 3, ""), o = I(e, "nonInteractive", 19, () => xe("SMUI:list:nonInteractive") ?? !1), d = I(e, "ripple", 19, () => !o()), c = I(e, "wrapper", 3, !1), h = I(e, "activated", 15, !1), f = I(e, "role", 19, () => c() ? "presentation" : xe("SMUI:list:item:role")), p = I(e, "selected", 15, !1), v = I(e, "disabled", 3, !1), m = I(e, "skipRestoreFocus", 3, !1), g = I(e, "tabindex", 15, t), E = I(e, "inputId", 19, () => "SMUI-form-field-list-" + oc++), D = I(e, "component", 3, ns), S = I(e, "tag", 19, () => r ? e.href ? "a" : "span" : "li"), C = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "color",
    "nonInteractive",
    "ripple",
    "wrapper",
    "activated",
    "role",
    "selected",
    "disabled",
    "skipRestoreFocus",
    "tabindex",
    "inputId",
    "href",
    "component",
    "tag",
    "children"
  ]);
  pe("SMUI:list:nonInteractive", void 0), pe("SMUI:list:item:role", void 0);
  let O, L = Te({}), M = Te({}), b = Te({}), x = /* @__PURE__ */ ce(void 0), G = /* @__PURE__ */ ce(void 0);
  const ie = /* @__PURE__ */ oe(() => i(g()) ? !o() && !v() && (p() || l(x) && l(x).checked) ? 0 : -1 : g());
  pe("SMUI:generic:input:props", { id: E() }), pe("SMUI:separator:context", void 0), pe("SMUI:generic:input:mount", (k) => {
    ("_smui_checkbox_accessor" in k || "_smui_radio_accessor" in k) && W(x, k, !0);
  }), pe("SMUI:generic:input:unmount", () => {
    W(x, void 0);
  });
  const F = xe("SMUI:list:item:mount"), N = xe("SMUI:list:item:unmount");
  Ft(() => {
    if (!p() && !o()) {
      let X = !0, te = O.getElement();
      for (; te.previousElementSibling; )
        if (te = te.previousElementSibling, te.nodeType === 1 && te.classList.contains("mdc-deprecated-list-item") && !te.classList.contains("mdc-deprecated-list-item--disabled")) {
          X = !1;
          break;
        }
      X && W(G, window.requestAnimationFrame(() => de(te)), !0);
    }
    const k = {
      _smui_list_item_accessor: !0,
      get element() {
        return T();
      },
      get selected() {
        return p();
      },
      set selected(X) {
        p(X);
      },
      hasClass: we,
      addClass: Q,
      removeClass: B,
      getAttr: $,
      addAttr: V,
      removeAttr: P,
      getPrimaryText: Ve,
      // For inputs within item.
      get checked() {
        return (l(x) && l(x).checked) ?? !1;
      },
      set checked(X) {
        l(x) && (l(x).checked = !!X);
      },
      get hasCheckbox() {
        return !!(l(x) && "_smui_checkbox_accessor" in l(x));
      },
      get hasRadio() {
        return !!(l(x) && "_smui_radio_accessor" in l(x));
      },
      activateRipple() {
        l(x) && l(x).activateRipple();
      },
      deactivateRipple() {
        l(x) && l(x).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: tt,
      get tabindex() {
        return l(ie);
      },
      set tabindex(X) {
        g(X);
      },
      get disabled() {
        return v();
      },
      get activated() {
        return h();
      },
      set activated(X) {
        h(X);
      }
    };
    return F && F(k), () => {
      N && N(k);
    };
  }), li(() => {
    l(G) && window.cancelAnimationFrame(l(G));
  });
  function we(k) {
    return k in L ? L[k] : T().classList.contains(k);
  }
  function Q(k) {
    L[k] || (L[k] = !0);
  }
  function B(k) {
    (!(k in L) || L[k]) && (L[k] = !1);
  }
  function H(k, X) {
    M[k] != X && (X === "" || X == null ? delete M[k] : M[k] = X);
  }
  function $(k) {
    return k in b ? b[k] ?? null : T().getAttribute(k);
  }
  function V(k, X) {
    b[k] !== X && (b[k] = X);
  }
  function P(k) {
    (!(k in b) || b[k] != null) && (b[k] = void 0);
  }
  function de(k) {
    let X = !0;
    for (; k.nextElementSibling; )
      if (k = k.nextElementSibling, k.nodeType === 1 && k.classList.contains("mdc-deprecated-list-item")) {
        const te = k.attributes.getNamedItem("tabindex");
        if (te && te.value === "0") {
          X = !1;
          break;
        }
      }
    X && g(0);
  }
  function he(k) {
    const X = k.key === "Enter", te = k.key === "Space";
    (X || te) && tt(k);
  }
  function tt(k) {
    v() || Tt(T(), "SMUIAction", k);
  }
  function Ve() {
    const k = T(), X = k.querySelector(".mdc-deprecated-list-item__primary-text");
    if (X)
      return X.textContent ?? "";
    const te = k.querySelector(".mdc-deprecated-list-item__text");
    return te ? te.textContent ?? "" : k.textContent ?? "";
  }
  function T() {
    return O.getElement();
  }
  var K = { action: tt, getPrimaryText: Ve, getElement: T }, R = ve(), j = re(R);
  {
    let k = /* @__PURE__ */ oe(() => [
      ...o() ? [] : [
        [
          xn,
          {
            ripple: !l(x),
            unbounded: !1,
            color: (h() || p()) && e.color == null ? "primary" : e.color,
            disabled: v(),
            addClass: Q,
            removeClass: B,
            addStyle: H
          }
        ]
      ],
      ...a()
    ]), X = /* @__PURE__ */ oe(() => at({
      "mdc-deprecated-list-item": !c(),
      "mdc-deprecated-list-item__wrapper": c(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": p(),
      "mdc-deprecated-list-item--disabled": v(),
      "mdc-menu-item--selected": !r && f() === "menuitem" && p(),
      "smui-menu-item--non-interactive": o(),
      ...L,
      [s()]: !0
    })), te = /* @__PURE__ */ oe(() => Object.entries(M).map(([Ze, ze]) => `${Ze}: ${ze};`).concat([u()]).join(" ")), fe = /* @__PURE__ */ oe(() => m() || void 0);
    es(j, D, (Ze, ze) => {
      Re(
        ze(Ze, rt(
          {
            get tag() {
              return S();
            },
            get use() {
              return l(k);
            },
            get class() {
              return l(X);
            },
            get style() {
              return l(te);
            }
          },
          () => r && h() ? { "aria-current": "page" } : {},
          () => !r || c() ? { role: f() } : {},
          () => !r && f() === "option" ? { "aria-selected": p() ? "true" : "false" } : {},
          () => !r && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": l(x) && l(x).checked ? "true" : "false"
          } : {},
          () => r ? {} : { "aria-disabled": v() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return l(fe);
            },
            get tabindex() {
              return l(ie);
            },
            get href() {
              return e.href;
            }
          },
          () => b,
          () => C,
          {
            onclick: (Me) => {
              var ee;
              tt(Me), (ee = e.onclick) == null || ee.call(e, Me);
            },
            onkeydown: (Me) => {
              var ee;
              he(Me), (ee = e.onkeydown) == null || ee.call(e, Me);
            },
            children: (Me, ee) => {
              var ue = dc(), Ne = re(ue);
              {
                var _e = (Fe) => {
                  var Oe = uc();
                  w(Fe, Oe);
                };
                se(Ne, (Fe) => {
                  d() && Fe(_e);
                });
              }
              var Be = z(Ne);
              Ee(Be, () => e.children ?? Ae), w(Me, ue);
            },
            $$slots: { default: !0 }
          }
        )),
        (Me) => O = Me,
        () => O
      );
    });
  }
  return w(n, R), Qe(K);
}
let fc = 0;
var hc = /* @__PURE__ */ ae("<div><!></div>");
function vc(n, e) {
  Ye(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "id", 19, () => "SMUI-select-helper-text-" + fc++), a = I(e, "persistent", 3, !1), s = I(e, "validationMsg", 3, !1), u = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), o, d = /* @__PURE__ */ ce(void 0), c = Te({}), h = Te({}), f = /* @__PURE__ */ ce(void 0);
  const p = xe("SMUI:select:helper-text:id"), v = xe("SMUI:select:helper-text:mount"), m = xe("SMUI:select:helper-text:unmount");
  Ft(() => (W(
    d,
    new ic({
      addClass: E,
      removeClass: D,
      hasClass: g,
      getAttr: S,
      setAttr: C,
      removeAttr: O,
      setContent: (F) => {
        W(f, F, !0);
      }
    }),
    !0
  ), p && p(r()), v && v(l(d)), l(d).init(), () => {
    var F;
    m && l(d) && m(l(d)), (F = l(d)) == null || F.destroy();
  }));
  function g(F) {
    return F in c ? c[F] : L().classList.contains(F);
  }
  function E(F) {
    c[F] || (c[F] = !0);
  }
  function D(F) {
    (!(F in c) || c[F]) && (c[F] = !1);
  }
  function S(F) {
    return F in h ? h[F] ?? null : L().getAttribute(F);
  }
  function C(F, N) {
    h[F] !== N && (h[F] = N);
  }
  function O(F) {
    (!(F in h) || h[F] != null) && (h[F] = void 0);
  }
  function L() {
    return o;
  }
  var M = { getElement: L }, b = hc();
  ft(
    b,
    (F) => ({
      class: F,
      "aria-hidden": a() ? void 0 : "true",
      id: r(),
      ...h,
      ...u
    }),
    [
      () => at({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...c,
        [i()]: !0
      })
    ]
  );
  var x = Y(b);
  {
    var G = (F) => {
      var N = ve(), we = re(N);
      Ee(we, () => e.children ?? Ae), w(F, N);
    }, ie = (F) => {
      var N = it();
      ke(() => be(N, l(f))), w(F, N);
    };
    se(x, (F) => {
      l(f) == null ? F(G) : F(ie, -1);
    });
  }
  return Re(b, (F) => o = F, () => o), et(b, (F, N) => ne == null ? void 0 : ne(F, N), t), w(n, b), Qe(M);
}
let pc = 0;
var mc = /* @__PURE__ */ ae("<input/>"), gc = /* @__PURE__ */ ae('<span class="mdc-select__ripple"></span>'), Ic = /* @__PURE__ */ ae('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function va(n, e) {
  Ye(e, !0);
  const t = () => za(Oe, "$selectedTextStore", i), [i, r] = Zr();
  let a = () => {
  };
  function s(y) {
    return y === a;
  }
  let u = I(e, "use", 19, () => []), o = I(e, "class", 3, ""), d = I(e, "style", 3, ""), c = I(e, "ripple", 3, !0), h = I(e, "disabled", 3, !1), f = I(e, "variant", 3, "standard"), p = I(e, "noLabel", 3, !1), v = I(e, "label", 3, void 0), m = I(e, "value", 15), g = I(e, "key", 3, (y) => y), E = I(e, "dirty", 15, !1), D = I(e, "invalid", 15, a), S = I(e, "updateInvalid", 19, () => s(D())), C = I(e, "required", 3, !1), O = I(e, "inputId", 19, () => "SMUI-select-" + pc++), L = I(e, "hiddenInput", 3, !1), M = I(e, "withLeadingIcon", 3, a), b = I(e, "anchor$use", 19, () => []), x = I(e, "anchor$class", 3, ""), G = I(e, "selectedTextContainer$use", 19, () => []), ie = I(e, "selectedTextContainer$class", 3, ""), F = I(e, "selectedText$use", 19, () => []), N = I(e, "selectedText$class", 3, ""), we = I(e, "dropdownIcon$use", 19, () => []), Q = I(e, "dropdownIcon$class", 3, ""), B = I(e, "menu$class", 3, ""), H = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "variant",
    "noLabel",
    "label",
    "value",
    "key",
    "dirty",
    "invalid",
    "updateInvalid",
    "required",
    "inputId",
    "hiddenInput",
    "withLeadingIcon",
    "anchor$use",
    "anchor$class",
    "selectedTextContainer$use",
    "selectedTextContainer$class",
    "selectedText$use",
    "selectedText$class",
    "dropdownIcon$use",
    "dropdownIcon$class",
    "menu$class",
    "children",
    "leadingIcon",
    "helperText"
  ]);
  const $ = s(D());
  s(D()) && D(!1);
  let V, P = /* @__PURE__ */ ce(void 0), de = Te({}), he = Te({}), tt, Ve = Te({}), T = /* @__PURE__ */ ce(-1);
  const K = /* @__PURE__ */ oe(() => H.menu$id ?? O() + "-menu");
  let R = /* @__PURE__ */ ce(void 0), j = xe("SMUI:addLayoutListener"), k, X = /* @__PURE__ */ ce(!1), te = Te({}), fe = /* @__PURE__ */ ce(void 0), Ze = /* @__PURE__ */ ce(void 0), ze = /* @__PURE__ */ ce(!1), Me, ee = xe("SMUI:select:context"), ue, Ne, _e, Be, Fe;
  pe("SMUI:list:role", ""), pe("SMUI:list:nav", !1);
  const Oe = ba("");
  pe("SMUI:select:selectedText", Oe);
  const Xe = ba(m());
  Pe(() => {
    Gr(Xe, m());
  }), pe("SMUI:select:value", Xe), Pe(() => {
    l(P) && l(P).getValue() !== g()(m()) && l(P).setValue(g()(m()));
  });
  let Et = l(T);
  Pe(() => {
    if (Et !== l(T))
      if (Et = l(T), l(P))
        l(P).setSelectedIndex(
          l(T),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const y = Nt();
        m() !== y[l(T)] && m(y[l(T)]);
      }
  }), Pe(() => {
    l(P) && l(P).getDisabled() !== h() && l(P).setDisabled(h());
  }), Pe(() => {
    l(P) && E() && l(P).isValid() !== !D() && (S() ? D(!l(P).isValid()) : l(P).setValid(!D()));
  }), Pe(() => {
    l(P) && l(P).getRequired() !== C() && l(P).setRequired(C());
  }), j && (k = j(Mr)), pe("SMUI:select:leading-icon:mount", (y) => {
    ue = y;
  }), pe("SMUI:select:leading-icon:unmount", () => {
    ue = void 0;
  }), pe("SMUI:list:mount", (y) => {
    Me = y;
  }), pe("SMUI:select:helper-text:id", (y) => {
    W(R, y, !0);
  }), pe("SMUI:select:helper-text:mount", (y) => {
    Ne = y;
  }), pe("SMUI:select:helper-text:unmount", () => {
    W(R, void 0), Ne = void 0;
  }), Ft(() => (W(
    P,
    new nc(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (y) => {
          Gr(Oe, y);
        },
        isSelectAnchorFocused: () => document.activeElement === tt,
        getSelectAnchorAttr: Je,
        setSelectAnchorAttr: dt,
        removeSelectAnchorAttr: Mt,
        addMenuClass: U,
        removeMenuClass: me,
        openMenu: () => {
          W(X, !0);
        },
        closeMenu: () => {
          W(X, !1);
        },
        getAnchorElement: () => tt,
        setMenuAnchorElement: (y) => {
          W(fe, y, !0);
        },
        setMenuAnchorCorner: (y) => {
          W(Ze, y, !0);
        },
        setMenuWrapFocus: (y) => {
          W(ze, y, !0);
        },
        getSelectedIndex: () => l(T),
        setSelectedIndex: (y) => {
          Et = y, W(T, y, !0), m(Nt()[l(T)]);
        },
        focusMenuItemAtIndex: (y) => {
          Me.focusItemAtIndex(y);
        },
        getMenuItemCount: () => Me.items.length,
        getMenuItemValues: () => Nt().map(g()),
        getMenuItemTextAtIndex: (y) => Me.getPrimaryTextAtIndex(y),
        isTypeaheadInProgress: () => Me.typeaheadInProgress,
        typeaheadMatchItem: (y, q) => Me.typeaheadMatchItem(y, q),
        // getCommonAdapterMethods
        addClass: Z,
        removeClass: J,
        hasClass: ir,
        setRippleCenter: (y) => Be && Be.setRippleCenter(y),
        activateBottomLine: () => Be && Be.activate(),
        deactivateBottomLine: () => Be && Be.deactivate(),
        notifyChange: (y) => {
          var q;
          E(!0), S() && D(!((q = l(P)) != null && q.isValid())), Tt(Yn(), "SMUISelectChange", { value: m(), index: l(T) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!Fe,
        notchOutline: (y) => Fe && Fe.notch(y),
        closeOutline: () => Fe && Fe.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!_e,
        floatLabel: (y) => _e && _e.float(y),
        getLabelWidth: () => _e ? _e.getWidth() : 0,
        setLabelRequired: (y) => _e && _e.setRequired(y)
      },
      {
        get helperText() {
          return Ne;
        },
        get leadingIcon() {
          return ue;
        }
      }
    ),
    !0
  ), W(T, Nt().indexOf(m()), !0), l(P).init(), Ht($), () => {
    var y;
    (y = l(P)) == null || y.destroy();
  })), li(() => {
    k && k();
  });
  function ir(y) {
    return y in de ? de[y] : Yn().classList.contains(y);
  }
  function Z(y) {
    de[y] || (de[y] = !0);
  }
  function J(y) {
    (!(y in de) || de[y]) && (de[y] = !1);
  }
  function _(y, q) {
    he[y] != q && (q === "" || q == null ? delete he[y] : he[y] = q);
  }
  function U(y) {
    te[y] || (te[y] = !0);
  }
  function me(y) {
    (!(y in te) || te[y]) && (te[y] = !1);
  }
  function Je(y) {
    return y in Ve ? Ve[y] ?? null : Yn().getAttribute(y);
  }
  function dt(y, q) {
    Ve[y] !== q && (Ve[y] = q);
  }
  function Mt(y) {
    (!(y in Ve) || Ve[y] != null) && (Ve[y] = void 0);
  }
  function Nt() {
    return Me.getOrderedList().map((y) => y.getValue());
  }
  function _i(y) {
    const q = y.currentTarget.getBoundingClientRect();
    return (nt(y) ? y.touches[0].clientX : y.clientX) - q.left;
  }
  function nt(y) {
    return "touches" in y;
  }
  function Ot() {
    if (l(P) == null)
      throw new Error("Instance is undefined.");
    return l(P).getUseDefaultValidation();
  }
  function Ht(y) {
    var q;
    (q = l(P)) == null || q.setUseDefaultValidation(y);
  }
  function qn() {
    tt.focus();
  }
  function Mr() {
    var y;
    (y = l(P)) == null || y.layout();
  }
  function Yn() {
    return V;
  }
  var De = {
    getUseDefaultValidation: Ot,
    setUseDefaultValidation: Ht,
    focus: qn,
    layout: Mr,
    getElement: Yn
  }, je = Ic(), He = re(je);
  ft(He, (y, q, We) => ({ class: y, style: q, ...We }), [
    () => at({
      "mdc-select": !0,
      "mdc-select--required": C(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(M()) ? e.leadingIcon : M(),
      "mdc-select--no-label": p() || v() == null,
      "mdc-select--invalid": D(),
      "mdc-select--activated": l(X),
      "mdc-data-table__pagination-rows-per-page-select": ee === "data-table:pagination",
      ...de,
      [o()]: !0
    }),
    () => Object.entries(he).map(([y, q]) => `${y}: ${q};`).concat([d()]).join(" "),
    () => Pa(H, [
      "input$",
      "anchor$",
      "label$",
      "outline$",
      "selectedTextContainer$",
      "selectedText$",
      "dropdownIcon$",
      "ripple$",
      "menu$",
      "list$",
      "helperText$"
    ])
  ]);
  var Dt = Y(He);
  {
    var dn = (y) => {
      var q = mc();
      ft(
        q,
        (We) => ({
          type: "hidden",
          required: C(),
          disabled: h(),
          value: m(),
          ...We
        }),
        [() => bt(H, "input$")],
        void 0,
        void 0,
        void 0,
        !0
      ), w(y, q);
    };
    se(Dt, (y) => {
      L() && y(dn);
    });
  }
  var Ge = z(Dt, 2), pt = (y) => {
    var q;
    tt.focus(), l(P) && l(P).handleClick(_i(y)), (q = e.anchor$onclick) == null || q.call(e, y);
  }, Ct = (y) => {
    var q;
    l(P) && l(P).handleKeydown(y), (q = e.onkeydown) == null || q.call(e, y);
  }, Ue = (y) => {
    var q;
    l(P) && l(P).handleBlur(), Tt(Yn(), "blur", y), (q = e.anchor$onblur) == null || q.call(e, y);
  }, St = (y) => {
    var q;
    l(P) && l(P).handleFocus(), Tt(Yn(), "focus", y), (q = e.anchor$onfocus) == null || q.call(e, y);
  };
  ft(
    Ge,
    (y, q) => ({
      class: y,
      "aria-required": C() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": l(K),
      "aria-expanded": l(X) ? "true" : "false",
      "aria-describedby": l(R),
      role: "combobox",
      tabindex: "0",
      ...Ve,
      ...q,
      onclick: pt,
      onkeydown: Ct,
      onblur: Ue,
      onfocus: St
    }),
    [
      () => at({ "mdc-select__anchor": !0, [x()]: !0 }),
      () => bt(H, "anchor$")
    ]
  );
  var _n = Y(Ge);
  {
    var Jt = (y) => {
      var q = gc();
      w(y, q);
    };
    se(_n, (y) => {
      f() === "filled" && y(Jt);
    });
  }
  var mt = z(_n, 2);
  {
    var Rt = (y) => {
      {
        let q = /* @__PURE__ */ oe(() => O() + "-smui-label"), We = /* @__PURE__ */ oe(() => t() !== ""), gt = /* @__PURE__ */ oe(() => bt(H, "label$"));
        Re(
          Xr(y, rt(
            {
              get id() {
                return l(q);
              },
              get floatAbove() {
                return l(We);
              },
              get required() {
                return C();
              }
            },
            () => l(gt),
            {
              children: (Pn, kn) => {
                var ar = ve(), Pi = re(ar);
                {
                  var di = (yn) => {
                  }, na = (yn) => {
                    var Fn = it();
                    ke(() => be(Fn, v())), w(yn, Fn);
                  }, ia = (yn) => {
                    var Fn = ve(), us = re(Fn);
                    Ee(us, v), w(yn, Fn);
                  };
                  se(Pi, (yn) => {
                    v() == null ? yn(di) : typeof v() == "string" ? yn(na, 1) : yn(ia, -1);
                  });
                }
                w(Pn, ar);
              },
              $$slots: { default: !0 }
            }
          )),
          (Pn) => _e = Pn,
          () => _e
        );
      }
    };
    se(mt, (y) => {
      f() !== "outlined" && !p() && v() != null && y(Rt);
    });
  }
  var $t = z(mt, 2);
  {
    var cn = (y) => {
      {
        let q = /* @__PURE__ */ oe(() => p() || v() == null), We = /* @__PURE__ */ oe(() => bt(H, "outline$"));
        Re(
          Jl(y, rt(
            {
              get noLabel() {
                return l(q);
              }
            },
            () => l(We),
            {
              children: (gt, Pn) => {
                var kn = ve(), ar = re(kn);
                {
                  var Pi = (di) => {
                    {
                      let na = /* @__PURE__ */ oe(() => O() + "-smui-label"), ia = /* @__PURE__ */ oe(() => t() !== ""), yn = /* @__PURE__ */ oe(() => bt(H, "label$"));
                      Re(
                        Xr(di, rt(
                          {
                            get id() {
                              return l(na);
                            },
                            get floatAbove() {
                              return l(ia);
                            },
                            get required() {
                              return C();
                            }
                          },
                          () => l(yn),
                          {
                            children: (Fn, us) => {
                              var ds = ve(), uo = re(ds);
                              {
                                var co = (Qn) => {
                                }, fo = (Qn) => {
                                  var sr = it();
                                  ke(() => be(sr, v())), w(Qn, sr);
                                }, ho = (Qn) => {
                                  var sr = ve(), vo = re(sr);
                                  Ee(vo, v), w(Qn, sr);
                                };
                                se(uo, (Qn) => {
                                  v() == null ? Qn(co) : typeof v() == "string" ? Qn(fo, 1) : Qn(ho, -1);
                                });
                              }
                              w(Fn, ds);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (Fn) => _e = Fn,
                        () => _e
                      );
                    }
                  };
                  se(ar, (di) => {
                    !p() && v() != null && di(Pi);
                  });
                }
                w(gt, kn);
              },
              $$slots: { default: !0 }
            }
          )),
          (gt) => Fe = gt,
          () => Fe
        );
      }
    };
    se($t, (y) => {
      f() === "outlined" && y(cn);
    });
  }
  var Wt = z($t, 2);
  Ee(Wt, () => e.leadingIcon ?? Ae);
  var en = z(Wt, 2);
  ft(en, (y, q) => ({ class: y, ...q }), [
    () => at({
      "mdc-select__selected-text-container": !0,
      [ie()]: !0
    }),
    () => bt(H, "selectedTextContainer$")
  ]);
  var Vt = Y(en);
  ft(
    Vt,
    (y, q) => ({
      id: O() + "-smui-selected-text",
      class: y,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": O() + "-smui-label",
      ...q
    }),
    [
      () => at({
        "mdc-select__selected-text": !0,
        [N()]: !0
      }),
      () => bt(H, "selectedText$")
    ]
  );
  var ui = Y(Vt);
  et(Vt, (y, q) => ne == null ? void 0 : ne(y, q), F), et(en, (y, q) => ne == null ? void 0 : ne(y, q), G);
  var rr = z(en, 2);
  ft(rr, (y, q) => ({ class: y, ...q }), [
    () => at({
      "mdc-select__dropdown-icon": !0,
      [Q()]: !0
    }),
    () => bt(H, "dropdownIcon$")
  ]), et(rr, (y, q) => ne == null ? void 0 : ne(y, q), we);
  var io = z(rr, 2);
  {
    var ro = (y) => {
      {
        let q = /* @__PURE__ */ oe(() => bt(H, "ripple$"));
        Re(Zl(y, rt(() => l(q))), (We) => Be = We, () => Be);
      }
    };
    se(io, (y) => {
      f() !== "outlined" && c() && y(ro);
    });
  }
  Re(Ge, (y) => tt = y, () => tt), et(Ge, (y, q) => ne == null ? void 0 : ne(y, q), b);
  var ao = z(Ge, 2);
  {
    let y = /* @__PURE__ */ oe(() => at({
      "mdc-select__menu": !0,
      ...te,
      [B()]: !0
    })), q = /* @__PURE__ */ oe(() => bt(H, "menu$"));
    sc(ao, rt(
      {
        get class() {
          return l(y);
        },
        get id() {
          return l(K);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return l(fe);
        },
        get anchorCorner() {
          return l(Ze);
        }
      },
      () => l(q),
      {
        onSMUIMenuSelected: (We) => {
          var gt;
          l(P) && l(P).handleMenuItemAction(We.detail.index), (gt = e.onSMUIMenuSelected) == null || gt.call(e, We);
        },
        onSMUIMenuSurfaceClosing: (We) => {
          var gt;
          l(P) && l(P).handleMenuClosing(), (gt = e.onSMUIMenuSurfaceClosing) == null || gt.call(e, We);
        },
        onSMUIMenuSurfaceClosed: (We) => {
          var gt;
          l(P) && l(P).handleMenuClosed(), (gt = e.onSMUIMenuSurfaceClosed) == null || gt.call(e, We);
        },
        onSMUIMenuSurfaceOpened: (We) => {
          var gt;
          l(P) && l(P).handleMenuOpened(), (gt = e.onSMUIMenuSurfaceOpened) == null || gt.call(e, We);
        },
        get open() {
          return l(X);
        },
        set open(We) {
          W(X, We, !0);
        },
        children: (We, gt) => {
          {
            let Pn = /* @__PURE__ */ oe(() => bt(H, "list$"));
            lc(We, rt(
              {
                role: "listbox",
                get wrapFocus() {
                  return l(ze);
                }
              },
              () => l(Pn),
              {
                get selectedIndex() {
                  return l(T);
                },
                set selectedIndex(kn) {
                  W(T, kn, !0);
                },
                children: (kn, ar) => {
                  var Pi = ve(), di = re(Pi);
                  Ee(di, () => e.children ?? Ae), w(kn, Pi);
                },
                $$slots: { default: !0 }
              }
            ));
          }
        },
        $$slots: { default: !0 }
      }
    ));
  }
  Re(He, (y) => V = y, () => V), et(He, (y, q) => xn == null ? void 0 : xn(y, q), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: Z,
    removeClass: J,
    addStyle: _
  })), et(He, (y, q) => ha == null ? void 0 : ha(y, q), () => ({ addClass: Z, removeClass: J })), et(He, (y, q) => ne == null ? void 0 : ne(y, q), u);
  var so = z(He, 2);
  {
    var lo = (y) => {
      {
        let q = /* @__PURE__ */ oe(() => bt(H, "helperText$"));
        vc(y, rt(() => l(q), {
          children: (We, gt) => {
            var Pn = ve(), kn = re(Pn);
            Ee(kn, () => e.helperText ?? Ae), w(We, Pn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    se(so, (y) => {
      e.helperText && y(lo);
    });
  }
  ke(() => be(ui, t())), w(n, je);
  var oo = Qe(De);
  return r(), oo;
}
function pi(n, e) {
  Ye(e, !0);
  const t = () => za(c, "$selectedValue", i), [i, r] = Zr();
  let a = I(e, "use", 19, () => []);
  I(e, "class", 3, "");
  let s = I(e, "value", 3, ""), u = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), o;
  const d = xe("SMUI:select:selectedText"), c = xe("SMUI:select:value");
  pe("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ oe(() => s() != null && s() !== "" && t() === s());
  Ft(f), li(f);
  function f() {
    l(h) && o && Gr(d, o.getPrimaryText());
  }
  function p() {
    return o.getElement();
  }
  var v = { getElement: p };
  Re(
    cc(n, rt(
      {
        get use() {
          return a();
        },
        get "data-value"() {
          return s();
        },
        get value() {
          return s();
        },
        get selected() {
          return l(h);
        }
      },
      () => u,
      {
        children: (g, E) => {
          var D = ve(), S = re(D);
          Ee(S, () => e.children ?? Ae), w(g, D);
        },
        $$slots: { default: !0 }
      }
    )),
    (g) => o = g,
    () => o
  );
  var m = Qe(v);
  return r(), m;
}
var bc = /* @__PURE__ */ ae("<i><!></i>");
function Ac(n, e) {
  Ye(e, !0);
  const t = () => za(v, "$leadingStore", i), [i, r] = Zr();
  let a = I(e, "use", 19, () => []), s = I(e, "class", 3, ""), u = I(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), o = I(e, "disabled", 3, !1), d = /* @__PURE__ */ yt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), c, h = /* @__PURE__ */ ce(void 0), f = new wr(), p = Te({});
  const v = xe("SMUI:textfield:icon:leading"), m = t();
  let g = /* @__PURE__ */ ce(void 0);
  const E = /* @__PURE__ */ oe(() => ({ role: e.role, tabindex: u() })), D = xe("SMUI:textfield:leading-icon:mount"), S = xe("SMUI:textfield:leading-icon:unmount"), C = xe("SMUI:textfield:trailing-icon:mount"), O = xe("SMUI:textfield:trailing-icon:unmount");
  Ft(() => (W(
    h,
    new yd({
      getAttr: L,
      setAttr: M,
      removeAttr: b,
      setContent: (B) => {
        W(g, B, !0);
      },
      registerInteractionHandler: (B, H) => f.on(x(), B, H),
      deregisterInteractionHandler: (B, H) => f.off(x(), B, H),
      notifyIconAction: () => Tt(x(), "SMUITextFieldIcon")
    }),
    !0
  ), m ? D && D(l(h)) : C && C(l(h)), l(h).init(), () => {
    var B;
    l(h) && (m ? S && S(l(h)) : O && O(l(h))), (B = l(h)) == null || B.destroy(), f.clear();
  }));
  function L(B) {
    return B in p ? p[B] ?? null : x().getAttribute(B);
  }
  function M(B, H) {
    p[B] !== H && (p[B] = H);
  }
  function b(B) {
    (!(B in p) || p[B] != null) && (p[B] = void 0);
  }
  function x() {
    return c;
  }
  var G = { getElement: x }, ie = bc();
  ft(
    ie,
    (B) => ({
      class: B,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? o() ? "true" : "false" : void 0,
      ...l(E),
      ...p,
      ...d
    }),
    [
      () => at({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": m,
        "mdc-text-field__icon--trailing": !m,
        [s()]: !0
      })
    ]
  );
  var F = Y(ie);
  {
    var N = (B) => {
      var H = ve(), $ = re(H);
      Ee($, () => e.children ?? Ae), w(B, H);
    }, we = (B) => {
      var H = it();
      ke(() => be(H, l(g))), w(B, H);
    };
    se(F, (B) => {
      l(g) == null ? B(N) : B(we, -1);
    });
  }
  Re(ie, (B) => c = B, () => c), et(ie, (B, H) => ne == null ? void 0 : ne(B, H), a), w(n, ie);
  var Q = Qe(G);
  return r(), Q;
}
const rs = ["editor", "menu", "validator"], yc = {
  editor: "Editor plugin",
  menu: "Navigation plugin",
  validator: "Validation plugin"
}, as = {
  editor: "tab",
  menu: "play_circle",
  validator: "rule_folder"
};
function Fa(n) {
  if (!Ec())
    return n;
  try {
    const e = new URL(n);
    return e.protocol !== "http:" && e.protocol !== "https:" || e.hostname === "localhost" || e.hostname === "127.0.0.1" ? n : `/proxy/${e.host}${e.pathname}${e.search}`;
  } catch {
    return n;
  }
}
function Ec() {
  if (typeof window > "u")
    return !1;
  const n = window.location.hostname;
  return n === "localhost" || n === "127.0.0.1";
}
async function Cc(n) {
  if (n.source === "builtin" || !n.pluginsUrl)
    return {
      provider: n,
      plugins: [],
      error: "Builtin providers must be loaded via loadBuiltinProviders()."
    };
  try {
    const e = await fetch(Fa(n.pluginsUrl));
    if (!e.ok)
      return {
        provider: n,
        plugins: [],
        error: `HTTP ${e.status}: ${e.statusText}`
      };
    const t = await e.json();
    if (!t || typeof t != "object" || !Array.isArray(t.plugins))
      return {
        provider: n,
        plugins: [],
        error: 'Provider plugins.json must be an object with a "plugins" array.'
      };
    const i = t.plugins, r = i.filter(xc), a = i.length - r.length;
    return a > 0 && console.warn(
      `[ProviderLoader] Provider "${n.name}": skipped ${a} invalid plugin entries.`
    ), { provider: n, plugins: r };
  } catch (e) {
    const t = e instanceof Error ? e.message : String(e);
    return { provider: n, plugins: [], error: t };
  }
}
async function Sc(n) {
  return Promise.all(n.map(Cc));
}
function xc(n) {
  if (!n || typeof n != "object") return !1;
  const e = n;
  return typeof e.name == "string" && (!e.author || typeof e.author == "string") && typeof e.src == "string" && (!1 || e.src.startsWith("https://") || e.src.startsWith("/")) && typeof e.kind == "string" && typeof e.icon == "string" && typeof e.description == "string" && (e.supportedCoreVersion === void 0 || typeof e.supportedCoreVersion == "object" && e.supportedCoreVersion !== null && (typeof e.supportedCoreVersion.from == "string" || typeof e.supportedCoreVersion.to == "string"));
}
function Vs(n, e) {
  const t = js(n), i = js(e);
  for (let r = 0; r < 3; r++) {
    if (t[r] < i[r]) return -1;
    if (t[r] > i[r]) return 1;
  }
  return 0;
}
function js(n) {
  const t = n.replace(/^v/, "").split("-")[0].split(".").map((i) => parseInt(i, 10) || 0);
  return [t[0] ?? 0, t[1] ?? 0, t[2] ?? 0];
}
function Tc(n, e, t) {
  return e === void 0 || t === void 0 ? !0 : Vs(n, e) >= 0 && Vs(n, t) < 0;
}
const Lc = "plugins";
function wc(n) {
  const e = /* @__PURE__ */ new Map();
  for (const t of n) {
    if (typeof (t == null ? void 0 : t.src) != "string" || !t.src) continue;
    const i = e.get(t.src);
    e.set(
      t.src,
      i ? { ...i, ...t, active: !!(i.active || t.active) } : t
    );
  }
  return [...e.values()];
}
function Mc() {
  try {
    const n = localStorage.getItem(Lc);
    if (!n) return [];
    const e = JSON.parse(n);
    return Array.isArray(e) ? wc(e) : [];
  } catch {
    return [];
  }
}
function Oc(n, e, t) {
  return e.find(
    (i) => i.src === n.src || t && i.name === n.name && i.kind === n.kind
  );
}
function ss(n, e, t, i, r) {
  var h, f;
  const a = (r == null ? void 0 : r.builtin) === !0 || e.source === "builtin", s = Oc(n, i, a), u = (r == null ? void 0 : r.activeByDefault) === !0, o = a || s ? "INSTALLED" : "AVAILABLE", d = s ? s.active ? "ACTIVE" : "INACTIVE" : a && u ? "ACTIVE" : "INACTIVE", c = a ? !0 : Tc(
    t,
    (h = n.supportedCoreVersion) == null ? void 0 : h.from,
    (f = n.supportedCoreVersion) == null ? void 0 : f.to
  );
  return {
    ...n,
    builtin: a,
    activeByDefault: r == null ? void 0 : r.activeByDefault,
    requireDoc: r == null ? void 0 : r.requireDoc,
    provider: e,
    compatible: c,
    kindText: yc[n.kind],
    kindIcon: as[n.kind],
    installationState: o,
    activationState: d
  };
}
function Dc(n, e) {
  return n.map((t) => t.src !== e || !t.compatible || t.builtin ? t : {
    ...t,
    installationState: "INSTALLED",
    activationState: "INACTIVE"
  });
}
function Rc(n, e) {
  const t = n.find((r) => r.src === e);
  return t != null && t.builtin ? { updated: n, success: !1 } : { updated: n.map(
    (r) => r.src === e ? {
      ...r,
      installationState: "AVAILABLE",
      activationState: "INACTIVE"
    } : r
  ), success: !0 };
}
function _c(n, e) {
  return n.map(
    (t) => t.src === e ? {
      ...t,
      activationState: "ACTIVE"
    } : t
  );
}
function Pc(n, e) {
  return n.map(
    (t) => t.src === e ? {
      ...t,
      activationState: "INACTIVE"
    } : t
  );
}
function ls() {
  return document.querySelector("open-scd");
}
function os() {
  const n = ls();
  return n != null && n.shadowRoot ? n.shadowRoot.querySelector("compas-layout") ?? n.shadowRoot.querySelector("oscd-layout") ?? null : null;
}
function kc() {
  var t;
  const n = os();
  if ((n == null ? void 0 : n.localName) === "compas-layout") return "compas";
  if ((n == null ? void 0 : n.localName) === "oscd-layout") return "open-scd";
  const e = ls();
  return e ? (t = e.shadowRoot) != null && t.querySelector("compas-session") ? "compas" : "open-scd" : null;
}
function Fc(n = ls) {
  var i;
  const e = n(), t = (i = e == null ? void 0 : e.getBuiltInPlugins) == null ? void 0 : i.call(e);
  return Array.isArray(t) ? t : [];
}
const Bc = "data:image/png;base64,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", Uc = "data:image/png;base64,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dVv4Ul1CQGUISG4wOe8QjhT7o9s1nltK5uXlNRp/zzV44qpHt20PfD6dwUh9waP0ecqgqmpkMB3oTtxdpDamuItCEooxJOiq7Tt9+vQEzn2MctvU//ij6+IAXNSUEFA6ApJGyeL67TfRWEai0ZyDwFV1ALziSGsz0iEPkQMgck1temA6yEtVzdFQtqxWrdqfqFQlpSmGb6gVOPcxunaO4/rN5nzkx7lQLkECF31LByGgVQSkMJh6jLB/B3+bUfiCegCB9hMI7IoYIBSFL8oNBKKnSTJkMO3odjQevdEVuxWbihGFaodE9jVBw1kP123uRnfPzrfffrvAhAT4lvsmzoVuRi4s79FpHwjUihDgiQDmURYtSpZbt43GrBf+Fs/i9w342wzgKRbvatycJ74oH8BlZx14N6KKuRAgg5kLjsJP0Fj+HxqPhVjT4RR3hXOTrEbLadOmHcUfUii+1f6X5xajYott3749DF05e1GSFySThhgRAgwiIFaULM5NBuGo8k80ZotQbb7zk/YiVASXna1H4zzMXgJabifK4nY1AopGw/mHH36Yieno+qpRvzw6peC5Ef+K5imnU0JAswjMnTs3ZN68eZxnydFDN2LEiICmTZu2xSCezkispqME7Wnv5ua2FSNve+/bt++WPe212EZNoyTR+q9x48ZFZ8+evQndJG+LxoQtwpQphK3+IGnYQMDTUTEmT57cunnz5uFIp5qjtBxtn5aW1m7q1Klb0avUJDIyMtVRelpoTy7ZQnq5Xr16pefMmfObhoxlIYjQZUJAmwigy9TuaHiMUn0D5ye3oLHchujJbixz9GADHDnvfe211yghSQ5QCvpKLtmCkMFynKusiPN6e9BY+lipRpcIAUJAGwicqVOnji+qauarbmhoaDl0e67DZ4gs+9fylRPr/YWJTVpGR0ffsKGN5qqSwSygyzGjRnWcX+CCXWj/xwIwomJCQGsIHD16tG+fPn24dHRWDxxR+qChHImRtR9hRckTHlgVruCLF3/66acWGACYWHAVbV8hg2mh/z/99NOKw4YNO4qXKNG4BXyoiBDQMAIZx48f79mrV68VljDg9sD97rvvvsXMWkPwuhKnvJLOnj3bolu3bmct6af1MjKYee4AfCv0xknwjRhC/mqeS3RKCBAChMBTBPD5ELN79+4ITBeZgKNIA356hYSENMBAmqZY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";
function Nc(n) {
  return n === "compas" ? {
    name: "CoMPAS Plugins",
    icon: Uc,
    description: "Built-in plugins of the CoMPAS OpenSCD host.",
    source: "builtin"
  } : {
    name: "Open-SCD Plugins",
    icon: Bc,
    description: "Built-in plugins of the OpenSCD host.",
    source: "builtin"
  };
}
function Hc(n) {
  return typeof n == "string" && rs.includes(n);
}
function Vc(n) {
  return n === "top" || n === "middle" || n === "bottom";
}
function jc(n, e) {
  if (typeof n.name != "string" || !n.name || typeof n.src != "string" || !n.src || !Hc(n.kind)) return null;
  const t = n.kind, i = typeof n.icon == "string" && n.icon ? n.icon : as[t];
  return {
    name: n.name,
    author: e,
    src: n.src,
    kind: t,
    icon: i,
    description: `Built-in ${t} plugin`,
    position: Vc(n.position) ? n.position : void 0
  };
}
function Gc(n, e, t) {
  var d;
  const i = t == null ? void 0 : t.getHost, r = ((d = t == null ? void 0 : t.detectEdition) == null ? void 0 : d.call(t)) ?? kc(), a = Fc(i);
  if (a.length === 0)
    return [];
  const s = r ?? "open-scd", u = Nc(s), o = [];
  for (const c of a) {
    const h = jc(c, u.name);
    h && o.push(
      ss(h, u, e, n, {
        builtin: !0,
        activeByDefault: c.activeByDefault === !0,
        requireDoc: c.requireDoc === !0
      })
    );
  }
  return o.length === 0 ? [] : [{ provider: u, plugins: o, host: s }];
}
const Hi = {
  // no prefix — host registration uses plain stored plugin name
  name: "Custom Plugins",
  icon: "extension",
  description: "Manually configured plugins (not listed by a remote provider)."
};
function zc(n) {
  const e = /* @__PURE__ */ new Set();
  for (const t of n)
    t.src && e.add(t.src);
  return e;
}
function Xc(n) {
  return typeof n == "string" && rs.includes(n);
}
function Wc(n, e) {
  return n.src ? e.has(n.src) : !1;
}
function Kc(n, e, t) {
  const i = [];
  for (const r of n) {
    if (Wc(r, e) || typeof r.name != "string" || !r.name || typeof r.src != "string" || !r.src || !Xc(r.kind)) continue;
    const a = r.kind, s = {
      name: r.name,
      author: r.author ?? Hi.name,
      src: r.src,
      kind: a,
      icon: typeof r.icon == "string" && r.icon ? r.icon : as[a],
      // Product: description is the source URL only
      description: r.src,
      position: r.position
    }, u = ss(
      s,
      Hi,
      t,
      n,
      {
        activeByDefault: r.activeByDefault === !0,
        requireDoc: r.requireDoc === !0
      }
    );
    i.push({
      ...u,
      installationState: "INSTALLED",
      activationState: r.active ? "ACTIVE" : "INACTIVE",
      compatible: !0
    });
  }
  return i;
}
function no(n, e) {
  var i;
  const t = (i = n == null ? void 0 : n.prefix) == null ? void 0 : i.trim();
  return t ? `${t} - ${e}` : e;
}
const qc = "appVersion";
function Yc() {
  return localStorage.getItem(qc) || "1.4.0";
}
const Qc = [
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
    icon: "https://ase-compas.github.io/compas-transnetbw-plugins/transnetbw.svg",
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
], Zc = Qc;
var Jc = /* @__PURE__ */ ae('<span class="badge badge-builtin bp-typo-button">Built-in</span>'), $c = /* @__PURE__ */ ae("<span> </span>"), ef = /* @__PURE__ */ ae("<span> </span>"), tf = /* @__PURE__ */ ae('<span class="badge badge-incompatible bp-typo-button">Incompatible</span>'), nf = /* @__PURE__ */ ae('<div role="button" tabindex="0"><div class="card-top svelte-1myq0bn"><div class="plugin-icon-wrapper svelte-1myq0bn"><span class="material-icons plugin-icon svelte-1myq0bn"> </span></div> <button><!></button></div> <div class="plugin-name bp-typo-16-bold svelte-1myq0bn"> </div> <div class="plugin-kind-wrapper svelte-1myq0bn"><div class="badge badge-kind bp-typo-label"><span class="material-icons badge-icon"> </span> </div></div> <div class="plugin-description bp-typo-body svelte-1myq0bn"> </div> <div class="plugin-badges svelte-1myq0bn"><!> <!> <!></div></div>');
function rf(n, e) {
  Ye(e, !0);
  const t = /* @__PURE__ */ oe(() => e.plugin.builtin === !0), i = /* @__PURE__ */ oe(() => e.plugin.installationState === "INSTALLED" || l(t)), r = /* @__PURE__ */ oe(() => e.plugin.activationState === "ACTIVE");
  function a(V) {
    if (V.stopPropagation(), l(i))
      l(r) ? e.onDisable() : e.onEnable();
    else {
      if (!e.plugin.compatible) return;
      e.onInstall();
    }
  }
  var s = nf();
  let u;
  var o = Y(s), d = Y(o), c = Y(d), h = Y(c), f = z(d, 2);
  let p;
  var v = Y(f);
  {
    var m = (V) => {
      var P = it("Install");
      w(V, P);
    }, g = (V) => {
      var P = it("Disable");
      w(V, P);
    }, E = (V) => {
      var P = it("Enable");
      w(V, P);
    };
    se(v, (V) => {
      l(i) ? l(r) ? V(g, 1) : V(E, -1) : V(m);
    });
  }
  var D = z(o, 2), S = Y(D), C = z(D, 2), O = Y(C), L = Y(O), M = Y(L), b = z(L), x = z(C, 2), G = Y(x), ie = z(x, 2), F = Y(ie);
  {
    var N = (V) => {
      var P = Jc();
      w(V, P);
    }, we = (V) => {
      var P = $c(), de = Y(P);
      ke(
        (he) => {
          zn(P, 1, `badge badge-${he ?? ""} bp-typo-button`, "svelte-1myq0bn"), be(de, e.plugin.installationState === "INSTALLED" ? "Installed" : "Available");
        },
        [() => e.plugin.installationState.toLowerCase()]
      ), w(V, P);
    };
    se(F, (V) => {
      l(t) ? V(N) : V(we, -1);
    });
  }
  var Q = z(F, 2);
  {
    var B = (V) => {
      var P = ef(), de = Y(P);
      ke(
        (he) => {
          zn(P, 1, `badge badge-${he ?? ""} bp-typo-button`, "svelte-1myq0bn"), be(de, l(r) ? "Active" : "Inactive");
        },
        [() => e.plugin.activationState.toLowerCase()]
      ), w(V, P);
    };
    se(Q, (V) => {
      l(i) && V(B);
    });
  }
  var H = z(Q, 2);
  {
    var $ = (V) => {
      var P = tf();
      w(V, P);
    };
    se(H, (V) => {
      e.plugin.compatible || V($);
    });
  }
  ke(() => {
    u = zn(s, 1, "plugin-card svelte-1myq0bn", null, u, {
      selected: e.selected,
      incompatible: !e.plugin.compatible
    }), Di(s, "aria-pressed", e.selected), be(h, e.plugin.icon), p = zn(f, 1, "action-btn bp-typo-button", null, p, {
      disable: l(i) && l(r),
      enable: l(i) && !l(r),
      install: !l(i) && !l(t)
    }), f.disabled = !l(i) && !e.plugin.compatible, Di(f, "aria-label", l(i) ? l(r) ? "Disable" : "Enable" : "Install"), be(S, e.plugin.name), be(M, e.plugin.kindIcon), be(b, ` ${e.plugin.kindText ?? ""}`), be(G, e.plugin.description);
  }), pn("click", s, function(...V) {
    var P;
    (P = e.onSelect) == null || P.apply(this, V);
  }), pn("keydown", s, (V) => V.key === "Enter" && e.onSelect()), pn("click", f, a), w(n, s), Qe();
}
$a(["click", "keydown"]);
var af = /* @__PURE__ */ ae('<img class="provider-icon svelte-1ttjeex"/>'), sf = /* @__PURE__ */ ae('<span class="material-icons provider-icon svelte-1ttjeex"> </span>'), lf = /* @__PURE__ */ ae('<section class="provider-card svelte-1ttjeex"><div class="provider-header svelte-1ttjeex"><div class="provider-info svelte-1ttjeex"><h3 class="provider-name bp-typo-h3 svelte-1ttjeex"> </h3> <span class="provider-description bp-typo-body svelte-1ttjeex"> </span></div> <!></div> <div class="plugins-grid svelte-1ttjeex"></div></section>');
function of(n, e) {
  Ye(e, !0);
  var t = lf(), i = Y(t), r = Y(i), a = Y(r), s = Y(a), u = z(a, 2), o = Y(u), d = z(r, 2);
  {
    var c = (v) => {
      var m = af();
      ke(() => {
        Di(m, "src", e.provider.icon), Di(m, "alt", `${e.provider.name ?? ""} logo`);
      }), Hl("error", m, (g) => g.currentTarget.style.display = "none"), w(v, m);
    }, h = /* @__PURE__ */ oe(() => e.provider.icon.startsWith("http") || e.provider.icon.startsWith("/") || e.provider.icon.startsWith("data:")), f = (v) => {
      var m = sf(), g = Y(m);
      ke(() => be(g, e.provider.icon)), w(v, m);
    };
    se(d, (v) => {
      l(h) ? v(c) : v(f, -1);
    });
  }
  var p = z(i, 2);
  fr(p, 21, () => e.plugins, (v) => v.src, (v, m) => {
    {
      let g = /* @__PURE__ */ oe(() => e.selectedPluginSrc === l(m).src);
      rf(v, {
        get plugin() {
          return l(m);
        },
        get selected() {
          return l(g);
        },
        onSelect: () => e.onSelectPlugin(l(m)),
        onInstall: () => e.onInstall(l(m).src),
        onUninstall: () => e.onUninstall(l(m).src),
        onEnable: () => e.onEnable(l(m).src),
        onDisable: () => e.onDisable(l(m).src)
      });
    }
  }), ke(() => {
    be(s, e.provider.name), be(o, e.provider.description);
  }), w(n, t), Qe();
}
var uf = /* @__PURE__ */ ae('<span class="badge badge-builtin bp-typo-button">Built-in</span>'), df = /* @__PURE__ */ ae("<span> </span>"), cf = /* @__PURE__ */ ae("<span> </span>"), ff = /* @__PURE__ */ ae('<span class="badge badge-incompatible bp-typo-button">Incompatible</span>'), hf = /* @__PURE__ */ ae('<div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Active by default</span> <span class="bp-typo-16-regular"> </span></div> <div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Requires document</span> <span class="bp-typo-16-regular"> </span></div>', 1), vf = /* @__PURE__ */ ae('<div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Supported Version</span> <span class="bp-typo-16-regular"><!></span></div>'), pf = /* @__PURE__ */ ae('<div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Current Core</span> <span class="bp-typo-16-regular"> </span></div>'), mf = /* @__PURE__ */ ae('<p class="details-long-desc bp-typo-body svelte-yr5wcf"> </p>'), gf = /* @__PURE__ */ ae('<button class="action-btn disable bp-typo-button svelte-yr5wcf">Disable</button>'), If = /* @__PURE__ */ ae('<button class="action-btn enable bp-typo-button svelte-yr5wcf">Enable</button>'), bf = /* @__PURE__ */ ae('<button class="action-btn install bp-typo-button svelte-yr5wcf">Install</button>'), Af = /* @__PURE__ */ ae('<button class="action-btn disable bp-typo-button svelte-yr5wcf">Disable</button>'), yf = /* @__PURE__ */ ae('<button class="action-btn enable bp-typo-button svelte-yr5wcf">Enable</button>'), Ef = /* @__PURE__ */ ae('<button class="action-btn remove bp-typo-button svelte-yr5wcf">Remove</button> <!>', 1), Cf = /* @__PURE__ */ ae('<aside class="plugin-details svelte-yr5wcf"><div class="details-header svelte-yr5wcf"><div class="details-title-row bp-typo-h1 svelte-yr5wcf"><span class="material-icons details-icon svelte-yr5wcf"> </span> <h3 class="details-name svelte-yr5wcf"> </h3> <button class="close-btn svelte-yr5wcf" aria-label="Close details">✕</button></div> <div class="details-kind-wrapper svelte-yr5wcf"><div class="badge badge-kind bp-typo-label"><span class="material-icons badge-icon"> </span> </div></div> <p class="details-short-desc bp-typo-body svelte-yr5wcf"> </p> <div class="details-badges svelte-yr5wcf"><!> <!> <!></div></div> <div class="details-meta svelte-yr5wcf"><div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Provider</span> <span class="bp-typo-16-regular"> </span></div> <div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Author</span> <span class="bp-typo-16-regular"> </span></div> <!> <!> <!></div> <div class="details-url svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">URL</span> <a target="_blank" rel="noopener noreferrer"> </a></div> <!> <div class="details-actions svelte-yr5wcf"><div style="flex: 1"></div> <!></div></aside>');
function Sf(n, e) {
  Ye(e, !0);
  const t = /* @__PURE__ */ oe(() => e.plugin.builtin === !0), i = /* @__PURE__ */ oe(() => e.plugin.installationState === "INSTALLED" || l(t)), r = /* @__PURE__ */ oe(() => e.plugin.activationState === "ACTIVE"), a = /* @__PURE__ */ oe(() => no(e.plugin.provider, e.plugin.name));
  var s = Cf(), u = Y(s), o = Y(u), d = Y(o), c = Y(d), h = z(d, 2), f = Y(h), p = z(h, 2), v = z(o, 2), m = Y(v), g = Y(m), E = Y(g), D = z(g), S = z(v, 2), C = Y(S), O = z(S, 2), L = Y(O);
  {
    var M = (ee) => {
      var ue = uf();
      w(ee, ue);
    }, b = (ee) => {
      var ue = df(), Ne = Y(ue);
      ke(
        (_e) => {
          zn(ue, 1, `badge badge-${_e ?? ""} bp-typo-button`, "svelte-yr5wcf"), be(Ne, e.plugin.installationState === "INSTALLED" ? "Installed" : "Available");
        },
        [() => e.plugin.installationState.toLowerCase()]
      ), w(ee, ue);
    };
    se(L, (ee) => {
      l(t) ? ee(M) : ee(b, -1);
    });
  }
  var x = z(L, 2);
  {
    var G = (ee) => {
      var ue = cf(), Ne = Y(ue);
      ke(
        (_e) => {
          zn(ue, 1, `badge badge-${_e ?? ""} bp-typo-button`, "svelte-yr5wcf"), be(Ne, l(r) ? "Active" : "Inactive");
        },
        [() => e.plugin.activationState.toLowerCase()]
      ), w(ee, ue);
    };
    se(x, (ee) => {
      l(i) && ee(G);
    });
  }
  var ie = z(x, 2);
  {
    var F = (ee) => {
      var ue = ff();
      w(ee, ue);
    };
    se(ie, (ee) => {
      e.plugin.compatible || ee(F);
    });
  }
  var N = z(u, 2), we = Y(N), Q = z(Y(we), 2), B = Y(Q), H = z(we, 2), $ = z(Y(H), 2), V = Y($), P = z(H, 2);
  {
    var de = (ee) => {
      var ue = hf(), Ne = re(ue), _e = z(Y(Ne), 2), Be = Y(_e), Fe = z(Ne, 2), Oe = z(Y(Fe), 2), Xe = Y(Oe);
      ke(() => {
        be(Be, e.plugin.activeByDefault ? "Yes" : "No"), be(Xe, e.plugin.requireDoc ? "Yes" : "No");
      }), w(ee, ue);
    };
    se(P, (ee) => {
      l(t) && ee(de);
    });
  }
  var he = z(P, 2);
  {
    var tt = (ee) => {
      var ue = vf(), Ne = z(Y(ue), 2), _e = Y(Ne);
      {
        var Be = (Xe) => {
          var Et = it();
          ke(() => be(Et, `${e.plugin.supportedCoreVersion.from ?? ""} – ${e.plugin.supportedCoreVersion.to ?? ""}`)), w(Xe, Et);
        }, Fe = (Xe) => {
          var Et = it();
          ke(() => be(Et, `≥ ${e.plugin.supportedCoreVersion.from ?? ""}`)), w(Xe, Et);
        }, Oe = (Xe) => {
          var Et = it();
          ke(() => be(Et, "< " + e.plugin.supportedCoreVersion.to)), w(Xe, Et);
        };
        se(_e, (Xe) => {
          e.plugin.supportedCoreVersion.from && e.plugin.supportedCoreVersion.to ? Xe(Be) : e.plugin.supportedCoreVersion.from ? Xe(Fe, 1) : e.plugin.supportedCoreVersion.to && Xe(Oe, 2);
        });
      }
      w(ee, ue);
    };
    se(he, (ee) => {
      e.plugin.supportedCoreVersion && (e.plugin.supportedCoreVersion.from || e.plugin.supportedCoreVersion.to) && ee(tt);
    });
  }
  var Ve = z(he, 2);
  {
    var T = (ee) => {
      var ue = pf(), Ne = z(Y(ue), 2), _e = Y(Ne);
      ke(() => be(_e, e.coreVersion)), w(ee, ue);
    };
    se(Ve, (ee) => {
      e.coreVersion && ee(T);
    });
  }
  var K = z(N, 2), R = z(Y(K), 2), j = Y(R), k = z(K, 2);
  {
    var X = (ee) => {
      var ue = mf(), Ne = Y(ue);
      ke(() => be(Ne, e.plugin.longDescription)), w(ee, ue);
    };
    se(k, (ee) => {
      e.plugin.longDescription && ee(X);
    });
  }
  var te = z(k, 2), fe = z(Y(te), 2);
  {
    var Ze = (ee) => {
      var ue = ve(), Ne = re(ue);
      {
        var _e = (Fe) => {
          var Oe = gf();
          pn("click", Oe, () => e.onDisable(e.plugin.src)), w(Fe, Oe);
        }, Be = (Fe) => {
          var Oe = If();
          pn("click", Oe, () => e.onEnable(e.plugin.src)), w(Fe, Oe);
        };
        se(Ne, (Fe) => {
          l(r) ? Fe(_e) : Fe(Be, -1);
        });
      }
      w(ee, ue);
    }, ze = (ee) => {
      var ue = bf();
      ke(() => ue.disabled = !e.plugin.compatible), pn("click", ue, () => e.onInstall(e.plugin.src)), w(ee, ue);
    }, Me = (ee) => {
      var ue = Ef(), Ne = re(ue), _e = z(Ne, 2);
      {
        var Be = (Oe) => {
          var Xe = Af();
          pn("click", Xe, () => e.onDisable(e.plugin.src)), w(Oe, Xe);
        }, Fe = (Oe) => {
          var Xe = yf();
          pn("click", Xe, () => e.onEnable(e.plugin.src)), w(Oe, Xe);
        };
        se(_e, (Oe) => {
          l(r) ? Oe(Be) : Oe(Fe, -1);
        });
      }
      pn("click", Ne, () => e.onUninstall(e.plugin.src)), w(ee, ue);
    };
    se(fe, (ee) => {
      l(t) ? ee(Ze) : l(i) ? ee(Me, -1) : ee(ze, 1);
    });
  }
  ke(() => {
    be(c, e.plugin.icon), be(f, l(a)), be(E, e.plugin.kindIcon), be(D, ` ${e.plugin.kindText ?? ""}`), be(C, e.plugin.description), be(B, e.plugin.provider.name), be(V, e.plugin.author), Di(R, "href", e.plugin.src), be(j, e.plugin.src);
  }), pn("click", p, function(...ee) {
    var ue;
    (ue = e.onClose) == null || ue.apply(this, ee);
  }), w(n, s), Qe();
}
$a(["click"]);
var xf = /* @__PURE__ */ ae("<!> <!> <!>", 1), Tf = /* @__PURE__ */ ae("<!> <!>", 1), Lf = /* @__PURE__ */ ae("<!> <!>", 1), wf = /* @__PURE__ */ ae('<p class="error-message bp-typo-body svelte-1u53k0h"> </p>'), Mf = /* @__PURE__ */ ae('<div class="load-errors svelte-1u53k0h"></div>'), Of = /* @__PURE__ */ ae('<div class="loading bp-typo-16-regular svelte-1u53k0h">Loading plugins…</div>'), Df = /* @__PURE__ */ ae('<div class="empty-state bp-typo-body svelte-1u53k0h">No plugins match your search.</div>'), Rf = /* @__PURE__ */ ae('<div class="plugins-hub bp-typo-body svelte-1u53k0h"><div class="hub-header svelte-1u53k0h"><h2 class="hub-title svelte-1u53k0h">Plugin Store</h2></div> <div class="hub-toolbar svelte-1u53k0h"><!> <!> <!> <!></div> <!> <div><div class="providers-list svelte-1u53k0h"><!></div> <!></div></div>');
function _f(n, e) {
  Ye(e, !0);
  let t = I(e, "coreVersion", 19, Yc), i = /* @__PURE__ */ ce(Te([])), r = /* @__PURE__ */ ce(Te([])), a = /* @__PURE__ */ ce(!0), s = /* @__PURE__ */ ce(Te([])), u = /* @__PURE__ */ ce(null), o = /* @__PURE__ */ ce(""), d = /* @__PURE__ */ ce("all"), c = /* @__PURE__ */ ce("all"), h = /* @__PURE__ */ ce("all");
  const f = Zc.map((T) => ({ ...T, icon: Fa(T.icon) }));
  async function p() {
    W(a, !0), W(s, [], !0);
    const T = Mc(), K = [], R = [], j = await Gc(T, t());
    for (const fe of j)
      R.push(fe.provider), K.push(...fe.plugins);
    const k = await Sc(f);
    for (const fe of k) {
      fe.error && W(
        s,
        [
          ...l(s),
          `Error loading Provider '${fe.provider.name}': ${fe.error}`
        ],
        !0
      ), R.push(fe.provider);
      for (const Ze of fe.plugins)
        K.push(ss(Ze, fe.provider, t(), T));
    }
    const X = zc(K), te = Kc(T, X, t());
    te.length >= 1 && (R.push(Hi), K.push(...te)), W(r, R, !0), W(i, K, !0), W(a, !1);
  }
  function v(T) {
    var K;
    return ((K = T == null ? void 0 : T.provider) == null ? void 0 : K.name) === Hi.name;
  }
  Pe(() => {
    t(), p();
  });
  function m(T) {
    return l(g).filter((K) => K.provider.name === T);
  }
  const g = /* @__PURE__ */ oe(() => l(i).filter((T) => {
    var X;
    const K = !l(o) || T.name.toLowerCase().includes(l(o).toLowerCase()) || T.description.toLowerCase().includes(l(o).toLowerCase()), R = l(d) === "all" || l(d) === "installed" && T.installationState === "INSTALLED" || l(d) === "available" && T.installationState === "AVAILABLE", j = l(c) === "all" || ((X = T.provider) == null ? void 0 : X.name) === l(c), k = l(h) === "all" || T.kind === l(h);
    return K && R && j && k;
  }));
  function E(T) {
    var j;
    const K = l(i).find((k) => k.src === T);
    if (!(K != null && K.compatible) || K.builtin)
      return;
    W(i, Dc(l(i), T), !0);
    const R = l(i).find((k) => k.src === T);
    ((j = l(u)) == null ? void 0 : j.src) === T && W(u, R ?? null, !0), R && M(R);
  }
  function D(T) {
    var X, te;
    const K = l(i).find((fe) => fe.src === T);
    if (K != null && K.builtin)
      return;
    if (v(K)) {
      W(i, l(i).filter((fe) => fe.src !== T), !0), l(i).some((fe) => v(fe)) || (l(c) === Hi.name && W(c, "all"), setTimeout(
        () => {
          W(r, l(r).filter((fe) => fe.name !== Hi.name), !0);
        },
        1
      )), ((X = l(u)) == null ? void 0 : X.src) === T && W(u, null), K && M(K, !0);
      return;
    }
    const { updated: R, success: j } = Rc(l(i), T);
    W(i, R, !0);
    const k = l(i).find((fe) => fe.src === T);
    ((te = l(u)) == null ? void 0 : te.src) === T && W(u, k ?? null, !0), K && j && M(K, !0);
  }
  function S(T) {
    var R;
    W(i, _c(l(i), T), !0);
    const K = l(i).find((j) => j.src === T);
    ((R = l(u)) == null ? void 0 : R.src) === T && W(u, K ?? null, !0), K && M(K);
  }
  function C(T) {
    var R;
    W(i, Pc(l(i), T), !0);
    const K = l(i).find((j) => j.src === T);
    ((R = l(u)) == null ? void 0 : R.src) === T && W(u, K ?? null, !0), K && M(K);
  }
  function O(T) {
    var K;
    W(u, ((K = l(u)) == null ? void 0 : K.src) === T.src ? null : T, !0);
  }
  function L() {
    W(u, null);
  }
  function M(T, K = !1) {
    var X, te;
    const R = no(T.provider, T.name), j = K ? { name: R, kind: T.kind, config: null } : {
      name: R,
      kind: T.kind,
      config: {
        name: R,
        author: T.author || ((X = T.provider) == null ? void 0 : X.name),
        src: T.builtin ? T.src : Fa(T.src),
        icon: T.icon,
        kind: T.kind,
        description: T.description,
        requireDoc: T.requireDoc ?? !0,
        position: T.position || (T.kind === "menu" ? "middle" : void 0),
        active: T.activationState === "ACTIVE",
        activeByDefault: T.activeByDefault,
        installed: T.installationState === "INSTALLED"
      }
    }, k = new CustomEvent("oscd-configure-plugin", { bubbles: !0, composed: !0, detail: j });
    (te = os()) == null || te.dispatchEvent(k);
  }
  var b = Rf(), x = z(Y(b), 2), G = Y(x);
  Gd(G, {
    label: "Search plugins",
    placeholder: "Search...",
    variant: "outlined",
    style: "flex: 1; background: var(--bearingpoint-color-surface, #fff)",
    get value() {
      return l(o);
    },
    set value(K) {
      W(o, K, !0);
    },
    leadingIcon: (K) => {
      Ac(K, {
        class: "material-icons",
        children: (R, j) => {
          var k = it("search");
          w(R, k);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { leadingIcon: !0 }
  });
  var ie = z(G, 2);
  va(ie, {
    style: "background: var(--bearingpoint-color-surface, #fff)",
    variant: "outlined",
    get value() {
      return l(d);
    },
    set value(T) {
      W(d, T, !0);
    },
    children: (T, K) => {
      var R = xf(), j = re(R);
      pi(j, {
        value: "all",
        children: (te, fe) => {
          var Ze = it("All status");
          w(te, Ze);
        },
        $$slots: { default: !0 }
      });
      var k = z(j, 2);
      pi(k, {
        value: "installed",
        children: (te, fe) => {
          var Ze = it("Installed");
          w(te, Ze);
        },
        $$slots: { default: !0 }
      });
      var X = z(k, 2);
      pi(X, {
        value: "available",
        children: (te, fe) => {
          var Ze = it("Available");
          w(te, Ze);
        },
        $$slots: { default: !0 }
      }), w(T, R);
    },
    $$slots: { default: !0 }
  });
  var F = z(ie, 2);
  va(F, {
    class: "filter-select",
    style: "width:300px; background: var(--bearingpoint-color-surface, #fff)",
    variant: "outlined",
    get value() {
      return l(c);
    },
    set value(T) {
      W(c, T, !0);
    },
    children: (T, K) => {
      var R = Tf(), j = re(R);
      pi(j, {
        value: "all",
        children: (X, te) => {
          var fe = it("All contributors");
          w(X, fe);
        },
        $$slots: { default: !0 }
      });
      var k = z(j, 2);
      fr(k, 17, () => l(r), Rr, (X, te) => {
        pi(X, {
          get value() {
            return l(te).name;
          },
          children: (fe, Ze) => {
            var ze = it();
            ke(() => be(ze, l(te).name)), w(fe, ze);
          },
          $$slots: { default: !0 }
        });
      }), w(T, R);
    },
    $$slots: { default: !0 }
  });
  var N = z(F, 2);
  va(N, {
    style: "background: var(--bearingpoint-color-surface, #fff)",
    variant: "outlined",
    get value() {
      return l(h);
    },
    set value(T) {
      W(h, T, !0);
    },
    children: (T, K) => {
      var R = Lf(), j = re(R);
      pi(j, {
        value: "all",
        children: (X, te) => {
          var fe = it("All kinds");
          w(X, fe);
        },
        $$slots: { default: !0 }
      });
      var k = z(j, 2);
      fr(k, 17, () => rs, Rr, (X, te) => {
        pi(X, {
          get value() {
            return l(te);
          },
          children: (fe, Ze) => {
            var ze = it();
            ke((Me) => be(ze, Me), [
              () => l(te).charAt(0).toUpperCase() + l(te).slice(1)
            ]), w(fe, ze);
          },
          $$slots: { default: !0 }
        });
      }), w(T, R);
    },
    $$slots: { default: !0 }
  });
  var we = z(x, 2);
  {
    var Q = (T) => {
      var K = Mf();
      fr(K, 21, () => l(s), Rr, (R, j) => {
        var k = wf(), X = Y(k);
        ke(() => be(X, `⚠️ ${l(j) ?? ""}`)), w(R, k);
      }), w(T, K);
    };
    se(we, (T) => {
      l(s).length > 0 && T(Q);
    });
  }
  var B = z(we, 2);
  let H;
  var $ = Y(B), V = Y($);
  {
    var P = (T) => {
      var K = Of();
      w(T, K);
    }, de = (T) => {
      var K = Df();
      w(T, K);
    }, he = (T) => {
      var K = ve(), R = re(K);
      fr(R, 17, () => l(r), Rr, (j, k) => {
        const X = /* @__PURE__ */ oe(() => m(l(k).name));
        var te = ve(), fe = re(te);
        {
          var Ze = (ze) => {
            {
              let Me = /* @__PURE__ */ oe(() => {
                var ee;
                return ((ee = l(u)) == null ? void 0 : ee.src) ?? null;
              });
              of(ze, {
                get provider() {
                  return l(k);
                },
                get plugins() {
                  return l(X);
                },
                get selectedPluginSrc() {
                  return l(Me);
                },
                onSelectPlugin: O,
                onInstall: E,
                onUninstall: D,
                onEnable: S,
                onDisable: C
              });
            }
          };
          se(fe, (ze) => {
            l(X).length > 0 && ze(Ze);
          });
        }
        w(j, te);
      }), w(T, K);
    };
    se(V, (T) => {
      l(a) ? T(P) : l(g).length === 0 ? T(de, 1) : T(he, -1);
    });
  }
  var tt = z($, 2);
  {
    var Ve = (T) => {
      Sf(T, {
        get plugin() {
          return l(u);
        },
        onClose: L,
        onInstall: E,
        onUninstall: D,
        onEnable: S,
        onDisable: C,
        get coreVersion() {
          return t();
        }
      });
    };
    se(tt, (T) => {
      l(u) !== null && T(Ve);
    });
  }
  ke(() => H = zn(B, 1, "hub-body svelte-1u53k0h", null, H, { "with-details": l(u) !== null })), w(n, b), Qe();
}
function Pf(n, e) {
  _f(n, {
    get coreVersion() {
      return e.coreVersion;
    }
  });
}
const kf = "plugins-hub", Ff = "0.0.1";
var Ki;
class Vf extends HTMLElement {
  constructor() {
    super();
    ge(this, Ki);
    this.targetDiv = null, this.originalStyles = {}, ye(this, Ki, /* @__PURE__ */ ce(Te({ doc: void 0, editCount: void 0, coreVersion: void 0 })));
  }
  get props() {
    return l(A(this, Ki));
  }
  set props(t) {
    W(A(this, Ki), t, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this._editCount, this.props.coreVersion = this._coreVersion;
    const t = this.shadowRoot;
    if (!t)
      throw new Error("ShadowRoot not found");
    const i = Bf();
    t.appendChild(i);
    const r = () => {
      Fu(Pf, { target: t, props: this.props }), requestAnimationFrame(() => this.applyLayoutHack());
    };
    i.addEventListener("load", r, { once: !0 }), i.addEventListener("error", r, { once: !0 });
  }
  disconnectedCallback() {
    this.restoreLayoutHack();
  }
  set doc(t) {
    this._doc = t, this.props.doc = t;
  }
  set editCount(t) {
    this._editCount = t, this.props.editCount = t;
  }
  set coreVersion(t) {
    this._coreVersion = t, this.props.coreVersion = t;
  }
  /**
   * Apply a layout hack to fix the height of the plugin-container div.
   * This is necessary because compas-oscd core doesn't limit the plugin-container height to the current window-height.
   */
  applyLayoutHack() {
    const t = os();
    t != null && t.shadowRoot && (this.targetDiv = t.shadowRoot.querySelector("div"), this.targetDiv && (this.originalStyles = {
      height: this.targetDiv.style.height,
      display: this.targetDiv.style.display,
      flexDirection: this.targetDiv.style.flexDirection
    }, this.targetDiv.style.height = "calc(100vh - 4px)", this.targetDiv.style.display = "flex", this.targetDiv.style.flexDirection = "column"));
  }
  restoreLayoutHack() {
    this.targetDiv && (this.targetDiv.style.height = this.originalStyles.height ?? "", this.targetDiv.style.display = this.originalStyles.display ?? "", this.targetDiv.style.flexDirection = this.originalStyles.flexDirection ?? "", this.targetDiv = null);
  }
}
Ki = new WeakMap();
function Bf() {
  const n = `${kf}-v${Ff}-style`, e = Uf(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function Uf() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  Vf as default
};
