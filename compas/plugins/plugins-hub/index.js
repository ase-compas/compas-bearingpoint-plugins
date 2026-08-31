var Co = Object.defineProperty;
var Is = (n) => {
  throw TypeError(n);
};
var So = (n, e, t) => e in n ? Co(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var vn = (n, e, t) => So(n, typeof e != "symbol" ? e + "" : e, t), da = (n, e, t) => e.has(n) || Is("Cannot " + t);
var y = (n, e, t) => (da(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Ie = (n, e, t) => e.has(n) ? Is("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), xe = (n, e, t, i) => (da(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t), Ke = (n, e, t) => (da(n, e, "access private method"), t);
const mt = Symbol(), $s = "http://www.w3.org/1999/xhtml", xo = "http://www.w3.org/2000/svg", To = "@attach", Lo = !1;
var Xa = Array.isArray, wo = Array.prototype.indexOf, Qi = Array.prototype.includes, ta = Array.from, el = Object.defineProperty, si = Object.getOwnPropertyDescriptor, tl = Object.getOwnPropertyDescriptors, Mo = Object.prototype, Oo = Array.prototype, Wa = Object.getPrototypeOf, bs = Object.isExtensible;
function ur(n) {
  return typeof n == "function";
}
const Ae = () => {
};
function Do(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function nl() {
  var n, e, t = new Promise((i, r) => {
    n = i, e = r;
  });
  return { promise: t, resolve: n, reject: e };
}
const Rt = 2, Zi = 4, na = 8, Ka = 1 << 24, Mn = 16, yn = 32, oi = 64, Aa = 128, un = 512, It = 1024, xt = 2048, _n = 4096, Pt = 8192, Qt = 16384, Pi = 32768, Ea = 1 << 25, Yn = 65536, Ca = 1 << 17, Ro = 1 << 18, ir = 1 << 19, _o = 1 << 20, wn = 1 << 25, Di = 65536, Sa = 1 << 21, Ir = 1 << 22, li = 1 << 23, On = Symbol("$state"), il = Symbol("legacy props"), Po = Symbol(""), jn = new class extends Error {
  constructor() {
    super(...arguments);
    vn(this, "name", "StaleReactionError");
    vn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Qs;
const rl = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Qs = globalThis.document) != null && Qs.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function qa(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ko() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Fo(n, e, t) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Bo(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Uo() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function No(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ho() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Vo(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function jo() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Go() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function zo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Xo() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Wo() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ko() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function qo() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function al(n) {
  return n === this.v;
}
function Ya(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function sl(n) {
  return !Ya(n, this.v);
}
let Yo = !1, ct = null;
function Ji(n) {
  ct = n;
}
function Me(n) {
  return (
    /** @type {T} */
    ol().get(n)
  );
}
function pe(n, e) {
  return ol().set(n, e), e;
}
function Ye(n, e = !1, t) {
  ct = {
    p: ct,
    i: !1,
    c: null,
    e: null,
    s: n,
    x: null,
    r: (
      /** @type {Effect} */
      De
    ),
    l: null
  };
}
function Qe(n) {
  var e = (
    /** @type {ComponentContext} */
    ct
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var i of t)
      Rl(i);
  }
  return n !== void 0 && (e.x = n), e.i = !0, ct = e.p, n ?? /** @type {T} */
  {};
}
function ll() {
  return !0;
}
function ol(n) {
  return ct === null && qa(), ct.c ?? (ct.c = new Map(Qo(ct) || void 0));
}
function Qo(n) {
  let e = n.p;
  for (; e !== null; ) {
    const t = e.c;
    if (t !== null)
      return t;
    e = e.p;
  }
  return null;
}
let bi = [];
function ul() {
  var n = bi;
  bi = [], Do(n);
}
function qn(n) {
  if (bi.length === 0 && !mr) {
    var e = bi;
    queueMicrotask(() => {
      e === bi && ul();
    });
  }
  bi.push(n);
}
function Zo() {
  for (; bi.length > 0; )
    ul();
}
function dl(n) {
  var e = De;
  if (e === null)
    return we.f |= li, n;
  if (!(e.f & Pi) && !(e.f & Zi))
    throw n;
  ai(n, e);
}
function ai(n, e) {
  for (; e !== null; ) {
    if (e.f & Aa) {
      if (!(e.f & Pi))
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
const Jo = -7169;
function lt(n, e) {
  n.f = n.f & Jo | e;
}
function Qa(n) {
  n.f & un || n.deps === null ? lt(n, It) : lt(n, _n);
}
function cl(n) {
  if (n !== null)
    for (const e of n)
      !(e.f & Rt) || !(e.f & Di) || (e.f ^= Di, cl(
        /** @type {Derived} */
        e.deps
      ));
}
function fl(n, e, t) {
  n.f & xt ? e.add(n) : n.f & _n && t.add(n), cl(n.deps), lt(n, It);
}
function hl(n, e, t) {
  if (n == null)
    return e(void 0), Ae;
  const i = ui(
    () => n.subscribe(
      e,
      // @ts-expect-error
      t
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const Bi = [];
function xa(n, e = Ae) {
  let t = null;
  const i = /* @__PURE__ */ new Set();
  function r(u) {
    if (Ya(n, u) && (n = u, t)) {
      const o = !Bi.length;
      for (const d of i)
        d[1](), Bi.push(d, n);
      if (o) {
        for (let d = 0; d < Bi.length; d += 2)
          Bi[d][0](Bi[d + 1]);
        Bi.length = 0;
      }
    }
  }
  function a(u) {
    r(u(
      /** @type {T} */
      n
    ));
  }
  function l(u, o = Ae) {
    const d = [u, o];
    return i.add(d), i.size === 1 && (t = e(r, a) || Ae), u(
      /** @type {T} */
      n
    ), () => {
      i.delete(d), i.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: a, subscribe: l };
}
function $o(n) {
  let e;
  return hl(n, (t) => e = t)(), e;
}
let Ta = !1, Pr = !1, La = Symbol();
function Za(n, e, t) {
  const i = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ Sl(void 0),
    unsubscribe: Ae
  });
  if (i.store !== n && !(La in t))
    if (i.unsubscribe(), i.store = n ?? null, n == null)
      i.source.v = void 0, i.unsubscribe = Ae;
    else {
      var r = !0;
      i.unsubscribe = hl(n, (a) => {
        r ? i.source.v = a : W(i.source, a);
      }), r = !1;
    }
  return n && La in t ? $o(n) : s(i.source);
}
function Kr(n, e) {
  return eu(n, e), e;
}
function ia() {
  const n = {};
  function e() {
    Mr(() => {
      for (var t in n)
        n[t].unsubscribe();
      el(n, La, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function eu(n, e) {
  Ta = !0;
  try {
    n.set(e);
  } finally {
    Ta = !1;
  }
}
function tu(n) {
  var e = Pr;
  try {
    return Pr = !1, [n(), Pr];
  } finally {
    Pr = e;
  }
}
const vi = /* @__PURE__ */ new Set();
let de = null, Ct = null, wa = null, mr = !1, ca = !1, Hi = null, Hr = null;
var ys = 0;
let nu = 1;
var zi, Xi, Ei, Gn, Sn, Er, Kt, Cr, ii, zn, xn, Wi, Ki, Ci, ft, Vr, vl, jr, Ma, Gr, iu;
const Jr = class Jr {
  constructor() {
    Ie(this, ft);
    vn(this, "id", nu++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    vn(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    vn(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    Ie(this, zi, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    Ie(this, Xi, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    Ie(this, Ei, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    Ie(this, Gn, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    Ie(this, Sn, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Ie(this, Er, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    Ie(this, Kt, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    Ie(this, Cr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    Ie(this, ii, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    Ie(this, zn, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    Ie(this, xn, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    Ie(this, Wi, /* @__PURE__ */ new Set());
    vn(this, "is_fork", !1);
    Ie(this, Ki, !1);
    /** @type {Set<Batch>} */
    Ie(this, Ci, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    y(this, xn).has(e) || y(this, xn).set(e, { d: [], m: [] }), y(this, Wi).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, t = (i) => this.schedule(i)) {
    var i = y(this, xn).get(e);
    if (i) {
      y(this, xn).delete(e);
      for (var r of i.d)
        lt(r, xt), t(r);
      for (r of i.m)
        lt(r, _n), t(r);
    }
    y(this, Wi).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, t, i = !1) {
    e.v !== mt && !this.previous.has(e) && this.previous.set(e, e.v), e.f & li || (this.current.set(e, [t, i]), Ct == null || Ct.set(e, t)), this.is_fork || (e.v = t);
  }
  activate() {
    de = this;
  }
  deactivate() {
    de = null, Ct = null;
  }
  flush() {
    try {
      ca = !0, de = this, Ke(this, ft, jr).call(this);
    } finally {
      ys = 0, wa = null, Hi = null, Hr = null, ca = !1, de = null, Ct = null, Li.clear();
    }
  }
  discard() {
    for (const e of y(this, Xi)) e(this);
    y(this, Xi).clear(), y(this, Ei).clear(), vi.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    y(this, Cr).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, t) {
    let i = y(this, Gn).get(t) ?? 0;
    if (y(this, Gn).set(t, i + 1), e) {
      let r = y(this, Sn).get(t) ?? 0;
      y(this, Sn).set(t, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(e, t, i) {
    let r = y(this, Gn).get(t) ?? 0;
    if (r === 1 ? y(this, Gn).delete(t) : y(this, Gn).set(t, r - 1), e) {
      let a = y(this, Sn).get(t) ?? 0;
      a === 1 ? y(this, Sn).delete(t) : y(this, Sn).set(t, a - 1);
    }
    y(this, Ki) || i || (xe(this, Ki, !0), qn(() => {
      xe(this, Ki, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(e, t) {
    for (const i of e)
      y(this, ii).add(i);
    for (const i of t)
      y(this, zn).add(i);
    e.clear(), t.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    y(this, zi).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    y(this, Xi).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(e) {
    y(this, Ei).add(e);
  }
  run_fork_commit_callbacks() {
    for (const e of y(this, Ei)) e(this);
    y(this, Ei).clear();
  }
  settled() {
    return (y(this, Er) ?? xe(this, Er, nl())).promise;
  }
  static ensure() {
    if (de === null) {
      const e = de = new Jr();
      ca || (vi.add(de), mr || qn(() => {
        de === e && e.flush();
      }));
    }
    return de;
  }
  apply() {
    {
      Ct = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    var r;
    if (wa = e, (r = e.b) != null && r.is_pending && e.f & (Zi | na | Ka) && !(e.f & Pi)) {
      e.b.defer_effect(e);
      return;
    }
    for (var t = e; t.parent !== null; ) {
      t = t.parent;
      var i = t.f;
      if (Hi !== null && t === De && (we === null || !(we.f & Rt)) && !Ta)
        return;
      if (i & (oi | yn)) {
        if (!(i & It))
          return;
        t.f ^= It;
      }
    }
    y(this, Kt).push(t);
  }
};
zi = new WeakMap(), Xi = new WeakMap(), Ei = new WeakMap(), Gn = new WeakMap(), Sn = new WeakMap(), Er = new WeakMap(), Kt = new WeakMap(), Cr = new WeakMap(), ii = new WeakMap(), zn = new WeakMap(), xn = new WeakMap(), Wi = new WeakMap(), Ki = new WeakMap(), Ci = new WeakMap(), ft = new WeakSet(), Vr = function() {
  return this.is_fork || y(this, Sn).size > 0;
}, vl = function() {
  for (const i of y(this, Ci))
    for (const r of y(i, Sn).keys()) {
      for (var e = !1, t = r; t.parent !== null; ) {
        if (y(this, xn).has(t)) {
          e = !0;
          break;
        }
        t = t.parent;
      }
      if (!e)
        return !0;
    }
  return !1;
}, jr = function() {
  var u, o;
  if (ys++ > 1e3 && (vi.delete(this), au()), !Ke(this, ft, Vr).call(this)) {
    for (const d of y(this, ii))
      y(this, zn).delete(d), lt(d, xt), this.schedule(d);
    for (const d of y(this, zn))
      lt(d, _n), this.schedule(d);
  }
  const e = y(this, Kt);
  xe(this, Kt, []), this.apply();
  var t = Hi = [], i = [], r = Hr = [];
  for (const d of e)
    try {
      Ke(this, ft, Ma).call(this, d, t, i);
    } catch (c) {
      throw gl(d), c;
    }
  if (de = null, r.length > 0) {
    var a = Jr.ensure();
    for (const d of r)
      a.schedule(d);
  }
  if (Hi = null, Hr = null, Ke(this, ft, Vr).call(this) || Ke(this, ft, vl).call(this)) {
    Ke(this, ft, Gr).call(this, i), Ke(this, ft, Gr).call(this, t);
    for (const [d, c] of y(this, xn))
      ml(d, c);
  } else {
    y(this, Gn).size === 0 && vi.delete(this), y(this, ii).clear(), y(this, zn).clear();
    for (const d of y(this, zi)) d(this);
    y(this, zi).clear(), As(i), As(t), (u = y(this, Er)) == null || u.resolve();
  }
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    de
  );
  if (y(this, Kt).length > 0) {
    const d = l ?? (l = this);
    y(d, Kt).push(...y(this, Kt).filter((c) => !y(d, Kt).includes(c)));
  }
  l !== null && (vi.add(l), Ke(o = l, ft, jr).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ma = function(e, t, i) {
  e.f ^= It;
  for (var r = e.first; r !== null; ) {
    var a = r.f, l = (a & (yn | oi)) !== 0, u = l && (a & It) !== 0, o = u || (a & Pt) !== 0 || y(this, xn).has(r);
    if (!o && r.fn !== null) {
      l ? r.f ^= It : a & Zi ? t.push(r) : Dr(r) && (a & Mn && y(this, zn).add(r), tr(r));
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
Gr = function(e) {
  for (var t = 0; t < e.length; t += 1)
    fl(e[t], y(this, ii), y(this, zn));
}, iu = function() {
  var c, h, f;
  for (const p of vi) {
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
        for (const v of y(this, Wi))
          p.unskip_effect(v, (m) => {
            var g;
            m.f & (Mn | Ir) ? p.schedule(m) : Ke(g = p, ft, Gr).call(g, [m]);
          });
      p.activate();
      var a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
      for (var u of t)
        pl(u, r, a, l);
      l = /* @__PURE__ */ new Map();
      var o = [...p.current.keys()].filter(
        (v) => this.current.has(v) ? (
          /** @type {[any, boolean]} */
          this.current.get(v)[0] !== v
        ) : !0
      );
      for (const v of y(this, Cr))
        !(v.f & (Qt | Pt | Ca)) && Ja(v, o, l) && (v.f & (Ir | Mn) ? (lt(v, xt), p.schedule(v)) : y(p, ii).add(v));
      if (y(p, Kt).length > 0) {
        p.apply();
        for (var d of y(p, Kt))
          Ke(c = p, ft, Ma).call(c, d, [], []);
        xe(p, Kt, []);
      }
      p.deactivate();
    }
  }
  for (const p of vi)
    y(p, Ci).has(this) && (y(p, Ci).delete(this), y(p, Ci).size === 0 && !Ke(h = p, ft, Vr).call(h) && (p.activate(), Ke(f = p, ft, jr).call(f)));
};
let Ri = Jr;
function ru(n) {
  var e = mr;
  mr = !0;
  try {
    for (var t; ; ) {
      if (Zo(), de === null)
        return (
          /** @type {T} */
          t
        );
      de.flush();
    }
  } finally {
    mr = e;
  }
}
function au() {
  try {
    Ho();
  } catch (n) {
    ai(n, wa);
  }
}
let pn = null;
function As(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var i = n[t++];
      if (!(i.f & (Qt | Pt)) && Dr(i) && (pn = /* @__PURE__ */ new Set(), tr(i), i.deps === null && i.first === null && i.nodes === null && i.teardown === null && i.ac === null && kl(i), (pn == null ? void 0 : pn.size) > 0)) {
        Li.clear();
        for (const r of pn) {
          if (r.f & (Qt | Pt)) continue;
          const a = [r];
          let l = r.parent;
          for (; l !== null; )
            pn.has(l) && (pn.delete(l), a.push(l)), l = l.parent;
          for (let u = a.length - 1; u >= 0; u--) {
            const o = a[u];
            o.f & (Qt | Pt) || tr(o);
          }
        }
        pn.clear();
      }
    }
    pn = null;
  }
}
function pl(n, e, t, i) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const r of n.reactions) {
      const a = r.f;
      a & Rt ? pl(
        /** @type {Derived} */
        r,
        e,
        t,
        i
      ) : a & (Ir | Mn) && !(a & xt) && Ja(r, e, i) && (lt(r, xt), $a(
        /** @type {Effect} */
        r
      ));
    }
}
function Ja(n, e, t) {
  const i = t.get(n);
  if (i !== void 0) return i;
  if (n.deps !== null)
    for (const r of n.deps) {
      if (Qi.call(e, r))
        return !0;
      if (r.f & Rt && Ja(
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
function $a(n) {
  de.schedule(n);
}
function ml(n, e) {
  if (!(n.f & yn && n.f & It)) {
    n.f & xt ? e.d.push(n) : n.f & _n && e.m.push(n), lt(n, It);
    for (var t = n.first; t !== null; )
      ml(t, e), t = t.next;
  }
}
function gl(n) {
  lt(n, It);
  for (var e = n.first; e !== null; )
    gl(e), e = e.next;
}
function su(n) {
  let e = 0, t = _i(0), i;
  return () => {
    ts() && (s(t), sa(() => (e === 0 && (i = ui(() => n(() => gr(t)))), e += 1, () => {
      qn(() => {
        e -= 1, e === 0 && (i == null || i(), i = void 0, gr(t));
      });
    })));
  };
}
var lu = Yn | ir;
function ou(n, e, t, i) {
  new uu(n, e, t, i);
}
var sn, za, ln, Si, Vt, on, _t, qt, Xn, xi, ri, qi, Sr, xr, Wn, $r, rt, du, cu, fu, Oa, zr, Xr, Da, Ra;
class uu {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, t, i, r) {
    Ie(this, rt);
    /** @type {Boundary | null} */
    vn(this, "parent");
    vn(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    vn(this, "transform_error");
    /** @type {TemplateNode} */
    Ie(this, sn);
    /** @type {TemplateNode | null} */
    Ie(this, za, null);
    /** @type {BoundaryProps} */
    Ie(this, ln);
    /** @type {((anchor: Node) => void)} */
    Ie(this, Si);
    /** @type {Effect} */
    Ie(this, Vt);
    /** @type {Effect | null} */
    Ie(this, on, null);
    /** @type {Effect | null} */
    Ie(this, _t, null);
    /** @type {Effect | null} */
    Ie(this, qt, null);
    /** @type {DocumentFragment | null} */
    Ie(this, Xn, null);
    Ie(this, xi, 0);
    Ie(this, ri, 0);
    Ie(this, qi, !1);
    /** @type {Set<Effect>} */
    Ie(this, Sr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    Ie(this, xr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ie(this, Wn, null);
    Ie(this, $r, su(() => (xe(this, Wn, _i(y(this, xi))), () => {
      xe(this, Wn, null);
    })));
    var a;
    xe(this, sn, e), xe(this, ln, t), xe(this, Si, (l) => {
      var u = (
        /** @type {Effect} */
        De
      );
      u.b = this, u.f |= Aa, i(l);
    }), this.parent = /** @type {Effect} */
    De.b, this.transform_error = r ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((l) => l), xe(this, Vt, rr(() => {
      Ke(this, rt, Oa).call(this);
    }, lu));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    fl(e, y(this, Sr), y(this, xr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!y(this, ln).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, t) {
    Ke(this, rt, Da).call(this, e, t), xe(this, xi, y(this, xi) + e), !(!y(this, Wn) || y(this, qi)) && (xe(this, qi, !0), qn(() => {
      xe(this, qi, !1), y(this, Wn) && $i(y(this, Wn), y(this, xi));
    }));
  }
  get_effect_pending() {
    return y(this, $r).call(this), s(
      /** @type {Source<number>} */
      y(this, Wn)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!y(this, ln).onerror && !y(this, ln).failed)
      throw e;
    de != null && de.is_fork ? (y(this, on) && de.skip_effect(y(this, on)), y(this, _t) && de.skip_effect(y(this, _t)), y(this, qt) && de.skip_effect(y(this, qt)), de.on_fork_commit(() => {
      Ke(this, rt, Ra).call(this, e);
    })) : Ke(this, rt, Ra).call(this, e);
  }
}
sn = new WeakMap(), za = new WeakMap(), ln = new WeakMap(), Si = new WeakMap(), Vt = new WeakMap(), on = new WeakMap(), _t = new WeakMap(), qt = new WeakMap(), Xn = new WeakMap(), xi = new WeakMap(), ri = new WeakMap(), qi = new WeakMap(), Sr = new WeakMap(), xr = new WeakMap(), Wn = new WeakMap(), $r = new WeakMap(), rt = new WeakSet(), du = function() {
  try {
    xe(this, on, Gt(() => y(this, Si).call(this, y(this, sn))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
cu = function(e) {
  const t = y(this, ln).failed;
  t && xe(this, qt, Gt(() => {
    t(
      y(this, sn),
      () => e,
      () => () => {
      }
    );
  }));
}, fu = function() {
  const e = y(this, ln).pending;
  e && (this.is_pending = !0, xe(this, _t, Gt(() => e(y(this, sn)))), qn(() => {
    var t = xe(this, Xn, document.createDocumentFragment()), i = Dn();
    t.append(i), xe(this, on, Ke(this, rt, Xr).call(this, () => Gt(() => y(this, Si).call(this, i)))), y(this, ri) === 0 && (y(this, sn).before(t), xe(this, Xn, null), wi(
      /** @type {Effect} */
      y(this, _t),
      () => {
        xe(this, _t, null);
      }
    ), Ke(this, rt, zr).call(
      this,
      /** @type {Batch} */
      de
    ));
  }));
}, Oa = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), xe(this, ri, 0), xe(this, xi, 0), xe(this, on, Gt(() => {
      y(this, Si).call(this, y(this, sn));
    })), y(this, ri) > 0) {
      var e = xe(this, Xn, document.createDocumentFragment());
      rs(y(this, on), e);
      const t = (
        /** @type {(anchor: Node) => void} */
        y(this, ln).pending
      );
      xe(this, _t, Gt(() => t(y(this, sn))));
    } else
      Ke(this, rt, zr).call(
        this,
        /** @type {Batch} */
        de
      );
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {Batch} batch
 */
zr = function(e) {
  this.is_pending = !1, e.transfer_effects(y(this, Sr), y(this, xr));
}, /**
 * @template T
 * @param {() => T} fn
 */
Xr = function(e) {
  var t = De, i = we, r = ct;
  Pn(y(this, Vt)), cn(y(this, Vt)), Ji(y(this, Vt).ctx);
  try {
    return Ri.ensure(), e();
  } catch (a) {
    return dl(a), null;
  } finally {
    Pn(t), cn(i), Ji(r);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Da = function(e, t) {
  var i;
  if (!this.has_pending_snippet()) {
    this.parent && Ke(i = this.parent, rt, Da).call(i, e, t);
    return;
  }
  xe(this, ri, y(this, ri) + e), y(this, ri) === 0 && (Ke(this, rt, zr).call(this, t), y(this, _t) && wi(y(this, _t), () => {
    xe(this, _t, null);
  }), y(this, Xn) && (y(this, sn).before(y(this, Xn)), xe(this, Xn, null)));
}, /**
 * @param {unknown} error
 */
Ra = function(e) {
  y(this, on) && (Tt(y(this, on)), xe(this, on, null)), y(this, _t) && (Tt(y(this, _t)), xe(this, _t, null)), y(this, qt) && (Tt(y(this, qt)), xe(this, qt, null));
  var t = y(this, ln).onerror;
  let i = y(this, ln).failed;
  var r = !1, a = !1;
  const l = () => {
    if (r) {
      qo();
      return;
    }
    r = !0, a && Xo(), y(this, qt) !== null && wi(y(this, qt), () => {
      xe(this, qt, null);
    }), Ke(this, rt, Xr).call(this, () => {
      Ke(this, rt, Oa).call(this);
    });
  }, u = (o) => {
    try {
      a = !0, t == null || t(o, l), a = !1;
    } catch (d) {
      ai(d, y(this, Vt) && y(this, Vt).parent);
    }
    i && xe(this, qt, Ke(this, rt, Xr).call(this, () => {
      try {
        return Gt(() => {
          var d = (
            /** @type {Effect} */
            De
          );
          d.b = this, d.f |= Aa, i(
            y(this, sn),
            () => o,
            () => l
          );
        });
      } catch (d) {
        return ai(
          d,
          /** @type {Effect} */
          y(this, Vt).parent
        ), null;
      }
    }));
  };
  qn(() => {
    var o;
    try {
      o = this.transform_error(e);
    } catch (d) {
      ai(d, y(this, Vt) && y(this, Vt).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      u,
      /** @param {unknown} e */
      (d) => ai(d, y(this, Vt) && y(this, Vt).parent)
    ) : u(o);
  });
};
function Il(n, e, t, i) {
  const r = ra;
  var a = n.filter((f) => !f.settled);
  if (t.length === 0 && a.length === 0) {
    i(e.map(r));
    return;
  }
  var l = (
    /** @type {Effect} */
    De
  ), u = hu(), o = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((f) => f.promise)) : null;
  function d(f) {
    u();
    try {
      i(f);
    } catch (p) {
      l.f & Qt || ai(p, l);
    }
    qr();
  }
  if (t.length === 0) {
    o.then(() => d(e.map(r)));
    return;
  }
  var c = bl();
  function h() {
    Promise.all(t.map((f) => /* @__PURE__ */ vu(f))).then((f) => d([...e.map(r), ...f])).catch((f) => ai(f, l)).finally(() => c());
  }
  o ? o.then(() => {
    u(), h(), qr();
  }) : h();
}
function hu() {
  var n = (
    /** @type {Effect} */
    De
  ), e = we, t = ct, i = (
    /** @type {Batch} */
    de
  );
  return function(a = !0) {
    Pn(n), cn(e), Ji(t), a && !(n.f & Qt) && (i == null || i.activate(), i == null || i.apply());
  };
}
function qr(n = !0) {
  Pn(null), cn(null), Ji(null), n && (de == null || de.deactivate());
}
function bl() {
  var n = (
    /** @type {Effect} */
    De
  ), e = (
    /** @type {Boundary} */
    n.b
  ), t = (
    /** @type {Batch} */
    de
  ), i = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(i, n), (r = !1) => {
    e.update_pending_count(-1, t), t.decrement(i, n, r);
  };
}
// @__NO_SIDE_EFFECTS__
function ra(n) {
  var e = Rt | xt;
  return De !== null && (De.f |= ir), {
    ctx: ct,
    deps: null,
    effects: null,
    equals: al,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      mt
    ),
    wv: 0,
    parent: De,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function vu(n, e, t) {
  let i = (
    /** @type {Effect | null} */
    De
  );
  i === null && ko();
  var r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = _i(
    /** @type {V} */
    mt
  ), l = !we, u = /* @__PURE__ */ new Map();
  return Lu(() => {
    var p;
    var o = (
      /** @type {Effect} */
      De
    ), d = nl();
    r = d.promise;
    try {
      Promise.resolve(n()).then(d.resolve, d.reject).finally(qr);
    } catch (v) {
      d.reject(v), qr();
    }
    var c = (
      /** @type {Batch} */
      de
    );
    if (l) {
      if (o.f & Pi)
        var h = bl();
      if (
        /** @type {Boundary} */
        i.b.is_rendered()
      )
        (p = u.get(c)) == null || p.reject(jn), u.delete(c);
      else {
        for (const v of u.values())
          v.reject(jn);
        u.clear();
      }
      u.set(c, d);
    }
    const f = (v, m = void 0) => {
      if (h) {
        var g = m === jn;
        h(g);
      }
      if (!(m === jn || o.f & Qt)) {
        if (c.activate(), m)
          a.f |= li, $i(a, m);
        else {
          a.f & li && (a.f ^= li), $i(a, v);
          for (const [E, D] of u) {
            if (u.delete(E), E === c) break;
            D.reject(jn);
          }
        }
        c.deactivate();
      }
    };
    d.promise.then(f, (v) => f(null, v || "unknown"));
  }), Mr(() => {
    for (const o of u.values())
      o.reject(jn);
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
function se(n) {
  const e = /* @__PURE__ */ ra(n);
  return Ul(e), e;
}
// @__NO_SIDE_EFFECTS__
function yl(n) {
  const e = /* @__PURE__ */ ra(n);
  return e.equals = sl, e;
}
function pu(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      Tt(
        /** @type {Effect} */
        e[t]
      );
  }
}
function es(n) {
  var e, t = De, i = n.parent;
  if (!Qn && i !== null && i.f & (Qt | Pt))
    return Wo(), n.v;
  Pn(i);
  try {
    n.f &= ~Di, pu(n), e = jl(n);
  } finally {
    Pn(t);
  }
  return e;
}
function Al(n) {
  var e = es(n);
  if (!n.equals(e) && (n.wv = Hl(), (!(de != null && de.is_fork) || n.deps === null) && (de !== null ? de.capture(n, e, !0) : n.v = e, n.deps === null))) {
    lt(n, It);
    return;
  }
  Qn || (Ct !== null ? (ts() || de != null && de.is_fork) && Ct.set(n, e) : Qa(n));
}
function mu(n) {
  var e, t;
  if (n.effects !== null)
    for (const i of n.effects)
      (i.teardown || i.ac) && ((e = i.teardown) == null || e.call(i), (t = i.ac) == null || t.abort(jn), i.teardown = Ae, i.ac = null, br(i, 0), ns(i));
}
function El(n) {
  if (n.effects !== null)
    for (const e of n.effects)
      e.teardown && tr(e);
}
let _a = /* @__PURE__ */ new Set();
const Li = /* @__PURE__ */ new Map();
let Cl = !1;
function _i(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: al,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function fe(n, e) {
  const t = _i(n);
  return Ul(t), t;
}
// @__NO_SIDE_EFFECTS__
function Sl(n, e = !1, t = !0) {
  const i = _i(n);
  return e || (i.equals = sl), i;
}
function W(n, e, t = !1) {
  we !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!In || we.f & Ca) && ll() && we.f & (Rt | Mn | Ir | Ca) && (dn === null || !Qi.call(dn, n)) && zo();
  let i = t ? Oe(e) : e;
  return $i(n, i, Hr);
}
function $i(n, e, t = null) {
  if (!n.equals(e)) {
    Li.set(n, Qn ? e : n.v);
    var i = Ri.ensure();
    if (i.capture(n, e), n.f & Rt) {
      const r = (
        /** @type {Derived} */
        n
      );
      n.f & xt && es(r), Ct === null && Qa(r);
    }
    n.wv = Hl(), xl(n, xt, t), De !== null && De.f & It && !(De.f & (yn | oi)) && (an === null ? Ou([n]) : an.push(n)), !i.is_fork && _a.size > 0 && !Cl && gu();
  }
  return e;
}
function gu() {
  Cl = !1;
  for (const n of _a)
    n.f & It && lt(n, _n), Dr(n) && tr(n);
  _a.clear();
}
function gr(n) {
  W(n, n.v + 1);
}
function xl(n, e, t) {
  var i = n.reactions;
  if (i !== null)
    for (var r = i.length, a = 0; a < r; a++) {
      var l = i[a], u = l.f, o = (u & xt) === 0;
      if (o && lt(l, e), u & Rt) {
        var d = (
          /** @type {Derived} */
          l
        );
        Ct == null || Ct.delete(d), u & Di || (u & un && (l.f |= Di), xl(d, _n, t));
      } else if (o) {
        var c = (
          /** @type {Effect} */
          l
        );
        u & Mn && pn !== null && pn.add(c), t !== null ? t.push(c) : $a(c);
      }
    }
}
function Oe(n) {
  if (typeof n != "object" || n === null || On in n)
    return n;
  const e = Wa(n);
  if (e !== Mo && e !== Oo)
    return n;
  var t = /* @__PURE__ */ new Map(), i = Xa(n), r = /* @__PURE__ */ fe(0), a = Mi, l = (u) => {
    if (Mi === a)
      return u();
    var o = we, d = Mi;
    cn(null), Ts(a);
    var c = u();
    return cn(o), Ts(d), c;
  };
  return i && t.set("length", /* @__PURE__ */ fe(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(u, o, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && jo();
        var c = t.get(o);
        return c === void 0 ? l(() => {
          var h = /* @__PURE__ */ fe(d.value);
          return t.set(o, h), h;
        }) : W(c, d.value, !0), !0;
      },
      deleteProperty(u, o) {
        var d = t.get(o);
        if (d === void 0) {
          if (o in u) {
            const c = l(() => /* @__PURE__ */ fe(mt));
            t.set(o, c), gr(r);
          }
        } else
          W(d, mt), gr(r);
        return !0;
      },
      get(u, o, d) {
        var p;
        if (o === On)
          return n;
        var c = t.get(o), h = o in u;
        if (c === void 0 && (!h || (p = si(u, o)) != null && p.writable) && (c = l(() => {
          var v = Oe(h ? u[o] : mt), m = /* @__PURE__ */ fe(v);
          return m;
        }), t.set(o, c)), c !== void 0) {
          var f = s(c);
          return f === mt ? void 0 : f;
        }
        return Reflect.get(u, o, d);
      },
      getOwnPropertyDescriptor(u, o) {
        var d = Reflect.getOwnPropertyDescriptor(u, o);
        if (d && "value" in d) {
          var c = t.get(o);
          c && (d.value = s(c));
        } else if (d === void 0) {
          var h = t.get(o), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== mt)
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
        if (o === On)
          return !0;
        var d = t.get(o), c = d !== void 0 && d.v !== mt || Reflect.has(u, o);
        if (d !== void 0 || De !== null && (!c || (f = si(u, o)) != null && f.writable)) {
          d === void 0 && (d = l(() => {
            var p = c ? Oe(u[o]) : mt, v = /* @__PURE__ */ fe(p);
            return v;
          }), t.set(o, d));
          var h = s(d);
          if (h === mt)
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
            v !== void 0 ? W(v, mt) : p in u && (v = l(() => /* @__PURE__ */ fe(mt)), t.set(p + "", v));
          }
        if (h === void 0)
          (!f || (S = si(u, o)) != null && S.writable) && (h = l(() => /* @__PURE__ */ fe(void 0)), W(h, Oe(d)), t.set(o, h));
        else {
          f = h.v !== mt;
          var m = l(() => Oe(d));
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
          gr(r);
        }
        return !0;
      },
      ownKeys(u) {
        s(r);
        var o = Reflect.ownKeys(u).filter((h) => {
          var f = t.get(h);
          return f === void 0 || f.v !== mt;
        });
        for (var [d, c] of t)
          c.v !== mt && !(d in u) && o.push(d);
        return o;
      },
      setPrototypeOf() {
        Go();
      }
    }
  );
}
function Es(n) {
  try {
    if (n !== null && typeof n == "object" && On in n)
      return n[On];
  } catch {
  }
  return n;
}
function Iu(n, e) {
  return Object.is(Es(n), Es(e));
}
var Cs, Tl, Ll, wl, Ml;
function bu() {
  if (Cs === void 0) {
    Cs = window, Tl = document, Ll = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    wl = si(e, "firstChild").get, Ml = si(e, "nextSibling").get, bs(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), bs(t) && (t.__t = void 0);
  }
}
function Dn(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function er(n) {
  return (
    /** @type {TemplateNode | null} */
    wl.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function wr(n) {
  return (
    /** @type {TemplateNode | null} */
    Ml.call(n)
  );
}
function Q(n, e) {
  return /* @__PURE__ */ er(n);
}
function ae(n, e = !1) {
  {
    var t = /* @__PURE__ */ er(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ wr(t) : t;
  }
}
function X(n, e = 1, t = !1) {
  let i = n;
  for (; e--; )
    i = /** @type {TemplateNode} */
    /* @__PURE__ */ wr(i);
  return i;
}
function yu(n) {
  n.textContent = "";
}
function Ol() {
  return !1;
}
function Dl(n, e, t) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(e ?? $s, n, void 0)
  );
}
function Au(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, qn(() => {
      document.activeElement === t && n.focus();
    });
  }
}
let Ss = !1;
function Eu() {
  Ss || (Ss = !0, document.addEventListener(
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
function aa(n) {
  var e = we, t = De;
  cn(null), Pn(null);
  try {
    return n();
  } finally {
    cn(e), Pn(t);
  }
}
function Cu(n, e, t, i = t) {
  n.addEventListener(e, () => aa(t));
  const r = n.__on_r;
  r ? n.__on_r = () => {
    r(), i(!0);
  } : n.__on_r = () => i(!0), Eu();
}
function Su(n) {
  De === null && (we === null && No(), Uo()), Qn && Bo();
}
function xu(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function kn(n, e) {
  var t = De;
  t !== null && t.f & Pt && (n |= Pt);
  var i = {
    ctx: ct,
    deps: null,
    nodes: null,
    f: n | xt | un,
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
  de == null || de.register_created_effect(i);
  var r = i;
  if (n & Zi)
    Hi !== null ? Hi.push(i) : Ri.ensure().schedule(i);
  else if (e !== null) {
    try {
      tr(i);
    } catch (l) {
      throw Tt(i), l;
    }
    r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
    !(r.f & ir) && (r = r.first, n & Mn && n & Yn && r !== null && (r.f |= Yn));
  }
  if (r !== null && (r.parent = t, t !== null && xu(r, t), we !== null && we.f & Rt && !(n & oi))) {
    var a = (
      /** @type {Derived} */
      we
    );
    (a.effects ?? (a.effects = [])).push(r);
  }
  return i;
}
function ts() {
  return we !== null && !In;
}
function Mr(n) {
  const e = kn(na, null);
  return lt(e, It), e.teardown = n, e;
}
function Be(n) {
  Su();
  var e = (
    /** @type {Effect} */
    De.f
  ), t = !we && (e & yn) !== 0 && (e & Pi) === 0;
  if (t) {
    var i = (
      /** @type {ComponentContext} */
      ct
    );
    (i.e ?? (i.e = [])).push(n);
  } else
    return Rl(n);
}
function Rl(n) {
  return kn(Zi | _o, n);
}
function Tu(n) {
  Ri.ensure();
  const e = kn(oi | ir, n);
  return (t = {}) => new Promise((i) => {
    t.outro ? wi(e, () => {
      Tt(e), i(void 0);
    }) : (Tt(e), i(void 0));
  });
}
function Or(n) {
  return kn(Zi, n);
}
function Lu(n) {
  return kn(Ir | ir, n);
}
function sa(n, e = 0) {
  return kn(na | e, n);
}
function Fe(n, e = [], t = [], i = []) {
  Il(i, e, t, (r) => {
    kn(na, () => n(...r.map(s)));
  });
}
function rr(n, e = 0) {
  var t = kn(Mn | e, n);
  return t;
}
function _l(n, e = 0) {
  var t = kn(Ka | e, n);
  return t;
}
function Gt(n) {
  return kn(yn | ir, n);
}
function Pl(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Qn, i = we;
    xs(!0), cn(null);
    try {
      e.call(null);
    } finally {
      xs(t), cn(i);
    }
  }
}
function ns(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const r = t.ac;
    r !== null && aa(() => {
      r.abort(jn);
    });
    var i = t.next;
    t.f & oi ? t.parent = null : Tt(t, e), t = i;
  }
}
function wu(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & yn || Tt(e), e = t;
  }
}
function Tt(n, e = !0) {
  var t = !1;
  (e || n.f & Ro) && n.nodes !== null && n.nodes.end !== null && (Mu(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), lt(n, Ea), ns(n, e && !t), br(n, 0);
  var i = n.nodes && n.nodes.t;
  if (i !== null)
    for (const a of i)
      a.stop();
  Pl(n), n.f ^= Ea, n.f |= Qt;
  var r = n.parent;
  r !== null && r.first !== null && kl(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = n.b = null;
}
function Mu(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : /* @__PURE__ */ wr(n);
    n.remove(), n = t;
  }
}
function kl(n) {
  var e = n.parent, t = n.prev, i = n.next;
  t !== null && (t.next = i), i !== null && (i.prev = t), e !== null && (e.first === n && (e.first = i), e.last === n && (e.last = t));
}
function wi(n, e, t = !0) {
  var i = [];
  Fl(n, i, !0);
  var r = () => {
    t && Tt(n), e && e();
  }, a = i.length;
  if (a > 0) {
    var l = () => --a || r();
    for (var u of i)
      u.out(l);
  } else
    r();
}
function Fl(n, e, t) {
  if (!(n.f & Pt)) {
    n.f ^= Pt;
    var i = n.nodes && n.nodes.t;
    if (i !== null)
      for (const u of i)
        (u.is_global || t) && e.push(u);
    for (var r = n.first; r !== null; ) {
      var a = r.next;
      if (!(r.f & oi)) {
        var l = (r.f & Yn) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (r.f & yn) !== 0 && (n.f & Mn) !== 0;
        Fl(r, e, l ? t : !1);
      }
      r = a;
    }
  }
}
function is(n) {
  Bl(n, !0);
}
function Bl(n, e) {
  if (n.f & Pt) {
    n.f ^= Pt, n.f & It || (lt(n, xt), Ri.ensure().schedule(n));
    for (var t = n.first; t !== null; ) {
      var i = t.next, r = (t.f & Yn) !== 0 || (t.f & yn) !== 0;
      Bl(t, r ? e : !1), t = i;
    }
    var a = n.nodes && n.nodes.t;
    if (a !== null)
      for (const l of a)
        (l.is_global || e) && l.in();
  }
}
function rs(n, e) {
  if (n.nodes)
    for (var t = n.nodes.start, i = n.nodes.end; t !== null; ) {
      var r = t === i ? null : /* @__PURE__ */ wr(t);
      e.append(t), t = r;
    }
}
let Wr = !1, Qn = !1;
function xs(n) {
  Qn = n;
}
let we = null, In = !1;
function cn(n) {
  we = n;
}
let De = null;
function Pn(n) {
  De = n;
}
let dn = null;
function Ul(n) {
  we !== null && (dn === null ? dn = [n] : dn.push(n));
}
let jt = null, Wt = 0, an = null;
function Ou(n) {
  an = n;
}
let Nl = 1, yi = 0, Mi = yi;
function Ts(n) {
  Mi = n;
}
function Hl() {
  return ++Nl;
}
function Dr(n) {
  var e = n.f;
  if (e & xt)
    return !0;
  if (e & Rt && (n.f &= ~Di), e & _n) {
    for (var t = (
      /** @type {Value[]} */
      n.deps
    ), i = t.length, r = 0; r < i; r++) {
      var a = t[r];
      if (Dr(
        /** @type {Derived} */
        a
      ) && Al(
        /** @type {Derived} */
        a
      ), a.wv > n.wv)
        return !0;
    }
    e & un && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ct === null && lt(n, It);
  }
  return !1;
}
function Vl(n, e, t = !0) {
  var i = n.reactions;
  if (i !== null && !(dn !== null && Qi.call(dn, n)))
    for (var r = 0; r < i.length; r++) {
      var a = i[r];
      a.f & Rt ? Vl(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? lt(a, xt) : a.f & It && lt(a, _n), $a(
        /** @type {Effect} */
        a
      ));
    }
}
function jl(n) {
  var m;
  var e = jt, t = Wt, i = an, r = we, a = dn, l = ct, u = In, o = Mi, d = n.f;
  jt = /** @type {null | Value[]} */
  null, Wt = 0, an = null, we = d & (yn | oi) ? null : n, dn = null, Ji(n.ctx), In = !1, Mi = ++yi, n.ac !== null && (aa(() => {
    n.ac.abort(jn);
  }), n.ac = null);
  try {
    n.f |= Sa;
    var c = (
      /** @type {Function} */
      n.fn
    ), h = c();
    n.f |= Pi;
    var f = n.deps, p = de == null ? void 0 : de.is_fork;
    if (jt !== null) {
      var v;
      if (p || br(n, Wt), f !== null && Wt > 0)
        for (f.length = Wt + jt.length, v = 0; v < jt.length; v++)
          f[Wt + v] = jt[v];
      else
        n.deps = f = jt;
      if (ts() && n.f & un)
        for (v = Wt; v < f.length; v++)
          ((m = f[v]).reactions ?? (m.reactions = [])).push(n);
    } else !p && f !== null && Wt < f.length && (br(n, Wt), f.length = Wt);
    if (ll() && an !== null && !In && f !== null && !(n.f & (Rt | _n | xt)))
      for (v = 0; v < /** @type {Source[]} */
      an.length; v++)
        Vl(
          an[v],
          /** @type {Effect} */
          n
        );
    if (r !== null && r !== n) {
      if (yi++, r.deps !== null)
        for (let g = 0; g < t; g += 1)
          r.deps[g].rv = yi;
      if (e !== null)
        for (const g of e)
          g.rv = yi;
      an !== null && (i === null ? i = an : i.push(.../** @type {Source[]} */
      an));
    }
    return n.f & li && (n.f ^= li), h;
  } catch (g) {
    return dl(g);
  } finally {
    n.f ^= Sa, jt = e, Wt = t, an = i, we = r, dn = a, Ji(l), In = u, Mi = o;
  }
}
function Du(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var i = wo.call(t, n);
    if (i !== -1) {
      var r = t.length - 1;
      r === 0 ? t = e.reactions = null : (t[i] = t[r], t.pop());
    }
  }
  if (t === null && e.f & Rt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (jt === null || !Qi.call(jt, e))) {
    var a = (
      /** @type {Derived} */
      e
    );
    a.f & un && (a.f ^= un, a.f &= ~Di), a.v !== mt && Qa(a), mu(a), br(a, 0);
  }
}
function br(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var i = e; i < t.length; i++)
      Du(n, t[i]);
}
function tr(n) {
  var e = n.f;
  if (!(e & Qt)) {
    lt(n, It);
    var t = De, i = Wr;
    De = n, Wr = !0;
    try {
      e & (Mn | Ka) ? wu(n) : ns(n), Pl(n);
      var r = jl(n);
      n.teardown = typeof r == "function" ? r : null, n.wv = Nl;
      var a;
      Lo && Yo && n.f & xt && n.deps;
    } finally {
      Wr = i, De = t;
    }
  }
}
async function Gl() {
  await Promise.resolve(), ru();
}
function s(n) {
  var e = n.f, t = (e & Rt) !== 0;
  if (we !== null && !In) {
    var i = De !== null && (De.f & Qt) !== 0;
    if (!i && (dn === null || !Qi.call(dn, n))) {
      var r = we.deps;
      if (we.f & Sa)
        n.rv < yi && (n.rv = yi, jt === null && r !== null && r[Wt] === n ? Wt++ : jt === null ? jt = [n] : jt.push(n));
      else {
        (we.deps ?? (we.deps = [])).push(n);
        var a = n.reactions;
        a === null ? n.reactions = [we] : Qi.call(a, we) || a.push(we);
      }
    }
  }
  if (Qn && Li.has(n))
    return Li.get(n);
  if (t) {
    var l = (
      /** @type {Derived} */
      n
    );
    if (Qn) {
      var u = l.v;
      return (!(l.f & It) && l.reactions !== null || Xl(l)) && (u = es(l)), Li.set(l, u), u;
    }
    var o = (l.f & un) === 0 && !In && we !== null && (Wr || (we.f & un) !== 0), d = (l.f & Pi) === 0;
    Dr(l) && (o && (l.f |= un), Al(l)), o && !d && (El(l), zl(l));
  }
  if (Ct != null && Ct.has(n))
    return Ct.get(n);
  if (n.f & li)
    throw n.v;
  return n.v;
}
function zl(n) {
  if (n.f |= un, n.deps !== null)
    for (const e of n.deps)
      (e.reactions ?? (e.reactions = [])).push(n), e.f & Rt && !(e.f & un) && (El(
        /** @type {Derived} */
        e
      ), zl(
        /** @type {Derived} */
        e
      ));
}
function Xl(n) {
  if (n.v === mt) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Li.has(e) || e.f & Rt && Xl(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function ui(n) {
  var e = In;
  try {
    return In = !0, n();
  } finally {
    In = e;
  }
}
function Ru(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (On in n)
      Pa(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && On in t && Pa(t);
      }
  }
}
function Pa(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let i in n)
      try {
        Pa(n[i], e);
      } catch {
      }
    const t = Wa(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const i = tl(t);
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
const Ai = Symbol("events"), Wl = /* @__PURE__ */ new Set(), ka = /* @__PURE__ */ new Set();
function as(n, e, t, i = {}) {
  function r(a) {
    if (i.capture || Fa.call(e, a), !a.cancelBubble)
      return aa(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? qn(() => {
    e.addEventListener(n, r, i);
  }) : e.addEventListener(n, r, i), r;
}
function _u(n, e, t, i = {}) {
  var r = as(e, n, t, i);
  return () => {
    n.removeEventListener(e, r, i);
  };
}
function Kl(n, e, t, i, r) {
  var a = { capture: i, passive: r }, l = as(n, e, t, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Mr(() => {
    e.removeEventListener(n, l, a);
  });
}
function gn(n, e, t) {
  (e[Ai] ?? (e[Ai] = {}))[n] = t;
}
function ss(n) {
  for (var e = 0; e < n.length; e++)
    Wl.add(n[e]);
  for (var t of ka)
    t(n);
}
let Ls = null;
function Fa(n) {
  var g, E;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), i = n.type, r = ((g = n.composedPath) == null ? void 0 : g.call(n)) || [], a = (
    /** @type {null | Element} */
    r[0] || n.target
  );
  Ls = n;
  var l = 0, u = Ls === n && n[Ai];
  if (u) {
    var o = r.indexOf(u);
    if (o !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n[Ai] = e;
      return;
    }
    var d = r.indexOf(e);
    if (d === -1)
      return;
    o <= d && (l = o);
  }
  if (a = /** @type {Element} */
  r[l] || n.target, a !== e) {
    el(n, "currentTarget", {
      configurable: !0,
      get() {
        return a || t;
      }
    });
    var c = we, h = De;
    cn(null), Pn(null);
    try {
      for (var f, p = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var m = (E = a[Ai]) == null ? void 0 : E[i];
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
      n[Ai] = e, delete n.currentTarget, cn(c), Pn(h);
    }
  }
}
var Zs;
const fa = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Zs = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Zs.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (n) => n
  })
);
function Pu(n) {
  return (
    /** @type {string} */
    (fa == null ? void 0 : fa.createHTML(n)) ?? n
  );
}
function ql(n) {
  var e = Dl("template");
  return e.innerHTML = Pu(n.replaceAll("<!>", "<!---->")), e.content;
}
function nr(n, e) {
  var t = (
    /** @type {Effect} */
    De
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function re(n, e) {
  var t = (e & 1) !== 0, i = (e & 2) !== 0, r, a = !n.startsWith("<!>");
  return () => {
    r === void 0 && (r = ql(a ? n : "<!>" + n), t || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ er(r)));
    var l = (
      /** @type {TemplateNode} */
      i || Ll ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (t) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ er(l)
      ), o = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      nr(u, o);
    } else
      nr(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function ku(n, e, t = "svg") {
  var i = !n.startsWith("<!>"), r = `<${t}>${i ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (!a) {
      var l = (
        /** @type {DocumentFragment} */
        ql(r)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ er(l)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ er(u);
    }
    var o = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return nr(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function Fu(n, e) {
  return /* @__PURE__ */ ku(n, e, "svg");
}
function tt(n = "") {
  {
    var e = Dn(n + "");
    return nr(e, e), e;
  }
}
function ve() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = Dn();
  return n.append(e, t), nr(e, t), n;
}
function L(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function Bu(n) {
  return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
}
const Uu = [
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
function Nu(n) {
  return Uu.includes(n);
}
const Hu = {
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
function Vu(n) {
  return n = n.toLowerCase(), Hu[n] ?? n;
}
const ju = ["touchstart", "touchmove"];
function Gu(n) {
  return ju.includes(n);
}
function ye(n, e) {
  var t = e == null ? "" : typeof e == "object" ? `${e}` : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = `${t}`);
}
function zu(n, e) {
  return Xu(n, e);
}
const kr = /* @__PURE__ */ new Map();
function Xu(n, { target: e, anchor: t, props: i = {}, events: r, context: a, intro: l = !0, transformError: u }) {
  bu();
  var o = void 0, d = Tu(() => {
    var c = t ?? e.appendChild(Dn());
    ou(
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
          ct
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
          var g = Gu(m);
          for (const S of [e, document]) {
            var E = kr.get(S);
            E === void 0 && (E = /* @__PURE__ */ new Map(), kr.set(S, E));
            var D = E.get(m);
            D === void 0 ? (S.addEventListener(m, Fa, { passive: g }), E.set(m, 1)) : E.set(m, D + 1);
          }
        }
      }
    };
    return f(ta(Wl)), ka.add(f), () => {
      var g;
      for (var p of h)
        for (const E of [e, document]) {
          var v = (
            /** @type {Map<string, number>} */
            kr.get(E)
          ), m = (
            /** @type {number} */
            v.get(p)
          );
          --m == 0 ? (E.removeEventListener(p, Fa), v.delete(p), v.size === 0 && kr.delete(E)) : v.set(p, m);
        }
      ka.delete(f), c !== t && ((g = c.parentNode) == null || g.removeChild(c));
    };
  });
  return Wu.set(o, d), o;
}
let Wu = /* @__PURE__ */ new WeakMap();
var mn, Tn, Yt, Ti, Tr, Lr, ea;
class la {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    vn(this, "anchor");
    /** @type {Map<Batch, Key>} */
    Ie(this, mn, /* @__PURE__ */ new Map());
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
    Ie(this, Tn, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    Ie(this, Yt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    Ie(this, Ti, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    Ie(this, Tr, !0);
    /**
     * @param {Batch} batch
     */
    Ie(this, Lr, (e) => {
      if (y(this, mn).has(e)) {
        var t = (
          /** @type {Key} */
          y(this, mn).get(e)
        ), i = y(this, Tn).get(t);
        if (i)
          is(i), y(this, Ti).delete(t);
        else {
          var r = y(this, Yt).get(t);
          r && (y(this, Tn).set(t, r.effect), y(this, Yt).delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
        }
        for (const [a, l] of y(this, mn)) {
          if (y(this, mn).delete(a), a === e)
            break;
          const u = y(this, Yt).get(l);
          u && (Tt(u.effect), y(this, Yt).delete(l));
        }
        for (const [a, l] of y(this, Tn)) {
          if (a === t || y(this, Ti).has(a)) continue;
          const u = () => {
            if (Array.from(y(this, mn).values()).includes(a)) {
              var d = document.createDocumentFragment();
              rs(l, d), d.append(Dn()), y(this, Yt).set(a, { effect: l, fragment: d });
            } else
              Tt(l);
            y(this, Ti).delete(a), y(this, Tn).delete(a);
          };
          y(this, Tr) || !i ? (y(this, Ti).add(a), wi(l, u, !1)) : u();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    Ie(this, ea, (e) => {
      y(this, mn).delete(e);
      const t = Array.from(y(this, mn).values());
      for (const [i, r] of y(this, Yt))
        t.includes(i) || (Tt(r.effect), y(this, Yt).delete(i));
    });
    this.anchor = e, xe(this, Tr, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var i = (
      /** @type {Batch} */
      de
    ), r = Ol();
    if (t && !y(this, Tn).has(e) && !y(this, Yt).has(e))
      if (r) {
        var a = document.createDocumentFragment(), l = Dn();
        a.append(l), y(this, Yt).set(e, {
          effect: Gt(() => t(l)),
          fragment: a
        });
      } else
        y(this, Tn).set(
          e,
          Gt(() => t(this.anchor))
        );
    if (y(this, mn).set(i, e), r) {
      for (const [u, o] of y(this, Tn))
        u === e ? i.unskip_effect(o) : i.skip_effect(o);
      for (const [u, o] of y(this, Yt))
        u === e ? i.unskip_effect(o.effect) : i.skip_effect(o.effect);
      i.oncommit(y(this, Lr)), i.ondiscard(y(this, ea));
    } else
      y(this, Lr).call(this, i);
  }
}
mn = new WeakMap(), Tn = new WeakMap(), Yt = new WeakMap(), Ti = new WeakMap(), Tr = new WeakMap(), Lr = new WeakMap(), ea = new WeakMap();
function Te(n, e, ...t) {
  var i = new la(n);
  rr(() => {
    const r = e() ?? null;
    i.ensure(r, r && ((a) => r(a, ...t)));
  }, Yn);
}
function kt(n) {
  ct === null && qa(), Be(() => {
    const e = ui(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function di(n) {
  ct === null && qa(), kt(() => () => ui(n));
}
function oe(n, e, t = !1) {
  var i = new la(n), r = t ? Yn : 0;
  function a(l, u) {
    i.ensure(l, u);
  }
  rr(() => {
    var l = !1;
    e((u, o = 0) => {
      l = !0, a(o, u);
    }), l || a(-1, null);
  }, r);
}
function Fr(n, e) {
  return e;
}
function Ku(n, e, t) {
  for (var i = [], r = e.length, a, l = e.length, u = 0; u < r; u++) {
    let h = e[u];
    wi(
      h,
      () => {
        if (a) {
          if (a.pending.delete(h), a.done.add(h), a.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            Ba(n, ta(a.done)), f.delete(a), f.size === 0 && (n.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var o = i.length === 0 && t !== null;
    if (o) {
      var d = (
        /** @type {Element} */
        t
      ), c = (
        /** @type {Element} */
        d.parentNode
      );
      yu(c), c.append(d), n.items.clear();
    }
    Ba(n, e, !o);
  } else
    a = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (n.outrogroups ?? (n.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Ba(n, e, t = !0) {
  var i;
  if (n.pending.size > 0) {
    i = /* @__PURE__ */ new Set();
    for (const l of n.pending.values())
      for (const u of l)
        i.add(
          /** @type {EachItem} */
          n.items.get(u).e
        );
  }
  for (var r = 0; r < e.length; r++) {
    var a = e[r];
    if (i != null && i.has(a)) {
      a.f |= wn;
      const l = document.createDocumentFragment();
      rs(a, l);
    } else
      Tt(e[r], t);
  }
}
var ws;
function vr(n, e, t, i, r, a = null) {
  var l = n, u = /* @__PURE__ */ new Map(), o = (e & 4) !== 0;
  if (o) {
    var d = (
      /** @type {Element} */
      n
    );
    l = d.appendChild(Dn());
  }
  var c = null, h = /* @__PURE__ */ yl(() => {
    var S = t();
    return Xa(S) ? S : S == null ? [] : ta(S);
  }), f, p = /* @__PURE__ */ new Map(), v = !0;
  function m(S) {
    D.effect.f & Qt || (D.pending.delete(S), D.fallback = c, qu(D, f, l, e, i), c !== null && (f.length === 0 ? c.f & wn ? (c.f ^= wn, pr(c, null, l)) : is(c) : wi(c, () => {
      c = null;
    })));
  }
  function g(S) {
    D.pending.delete(S);
  }
  var E = rr(() => {
    f = /** @type {V[]} */
    s(h);
    for (var S = f.length, C = /* @__PURE__ */ new Set(), O = (
      /** @type {Batch} */
      de
    ), w = Ol(), M = 0; M < S; M += 1) {
      var I = f[M], x = i(I, M), G = v ? null : u.get(x);
      G ? (G.v && $i(G.v, I), G.i && $i(G.i, M), w && O.unskip_effect(G.e)) : (G = Yu(
        u,
        v ? l : ws ?? (ws = Dn()),
        I,
        x,
        M,
        r,
        e,
        t
      ), v || (G.e.f |= wn), u.set(x, G)), C.add(x);
    }
    if (S === 0 && a && !c && (v ? c = Gt(() => a(l)) : (c = Gt(() => a(ws ?? (ws = Dn()))), c.f |= wn)), S > C.size && Fo(), !v)
      if (p.set(O, C), w) {
        for (const [ne, k] of u)
          C.has(ne) || O.skip_effect(k.e);
        O.oncommit(m), O.ondiscard(g);
      } else
        m(O);
    s(h);
  }), D = { effect: E, items: u, pending: p, outrogroups: null, fallback: c };
  v = !1;
}
function dr(n) {
  for (; n !== null && !(n.f & yn); )
    n = n.next;
  return n;
}
function qu(n, e, t, i, r) {
  var G, ne, k, U, Pe, Z, F, H, $;
  var a = (i & 8) !== 0, l = e.length, u = n.items, o = dr(n.effect.first), d, c = null, h, f = [], p = [], v, m, g, E;
  if (a)
    for (E = 0; E < l; E += 1)
      v = e[E], m = r(v, E), g = /** @type {EachItem} */
      u.get(m).e, g.f & wn || ((ne = (G = g.nodes) == null ? void 0 : G.a) == null || ne.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(g));
  for (E = 0; E < l; E += 1) {
    if (v = e[E], m = r(v, E), g = /** @type {EachItem} */
    u.get(m).e, n.outrogroups !== null)
      for (const ue of n.outrogroups)
        ue.pending.delete(g), ue.done.delete(g);
    if (g.f & Pt && (is(g), a && ((U = (k = g.nodes) == null ? void 0 : k.a) == null || U.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(g))), g.f & wn)
      if (g.f ^= wn, g === o)
        pr(g, null, t);
      else {
        var D = c ? c.next : o;
        g === n.effect.last && (n.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), ei(n, c, g), ei(n, g, D), pr(g, D, t), c = g, f = [], p = [], o = dr(c.next);
        continue;
      }
    if (g !== o) {
      if (d !== void 0 && d.has(g)) {
        if (f.length < p.length) {
          var S = p[0], C;
          c = S.prev;
          var O = f[0], w = f[f.length - 1];
          for (C = 0; C < f.length; C += 1)
            pr(f[C], S, t);
          for (C = 0; C < p.length; C += 1)
            d.delete(p[C]);
          ei(n, O.prev, w.next), ei(n, c, O), ei(n, w, S), o = S, c = w, E -= 1, f = [], p = [];
        } else
          d.delete(g), pr(g, o, t), ei(n, g.prev, g.next), ei(n, g, c === null ? n.effect.first : c.next), ei(n, c, g), c = g;
        continue;
      }
      for (f = [], p = []; o !== null && o !== g; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(o), p.push(o), o = dr(o.next);
      if (o === null)
        continue;
    }
    g.f & wn || f.push(g), c = g, o = dr(g.next);
  }
  if (n.outrogroups !== null) {
    for (const ue of n.outrogroups)
      ue.pending.size === 0 && (Ba(n, ta(ue.done)), (Pe = n.outrogroups) == null || Pe.delete(ue));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (o !== null || d !== void 0) {
    var M = [];
    if (d !== void 0)
      for (g of d)
        g.f & Pt || M.push(g);
    for (; o !== null; )
      !(o.f & Pt) && o !== n.fallback && M.push(o), o = dr(o.next);
    var I = M.length;
    if (I > 0) {
      var x = i & 4 && l === 0 ? t : null;
      if (a) {
        for (E = 0; E < I; E += 1)
          (F = (Z = M[E].nodes) == null ? void 0 : Z.a) == null || F.measure();
        for (E = 0; E < I; E += 1)
          ($ = (H = M[E].nodes) == null ? void 0 : H.a) == null || $.fix();
      }
      Ku(n, M, x);
    }
  }
  a && qn(() => {
    var ue, V;
    if (h !== void 0)
      for (g of h)
        (V = (ue = g.nodes) == null ? void 0 : ue.a) == null || V.apply();
  });
}
function Yu(n, e, t, i, r, a, l, u) {
  var o = l & 1 ? l & 16 ? _i(t) : /* @__PURE__ */ Sl(t, !1, !1) : null, d = l & 2 ? _i(r) : null;
  return {
    v: o,
    i: d,
    e: Gt(() => (a(e, o ?? t, d ?? r, u), () => {
      n.delete(i);
    }))
  };
}
function pr(n, e, t) {
  if (n.nodes)
    for (var i = n.nodes.start, r = n.nodes.end, a = e && !(e.f & wn) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; i !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ wr(i)
      );
      if (a.before(i), i === r)
        return;
      i = l;
    }
}
function ei(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function ls(n, e, t) {
  var i = new la(n);
  rr(() => {
    var r = e() ?? null;
    i.ensure(r, r && ((a) => t(a, r)));
  }, Yn);
}
function Ms(n, e, t, i, r, a) {
  var l = null, u = (
    /** @type {TemplateNode} */
    n
  ), o = new la(u, !1);
  rr(() => {
    const d = e() || null;
    var c = d === "svg" ? xo : void 0;
    if (d === null) {
      o.ensure(null, null);
      return;
    }
    return o.ensure(d, (h) => {
      if (d) {
        if (l = Dl(d, c), nr(l, l), i) {
          var f = l.appendChild(Dn());
          i(l, f);
        }
        De.nodes.end = l, h.before(l);
      }
    }), () => {
    };
  }, Yn), Mr(() => {
  });
}
function $e(n, e, t) {
  Or(() => {
    var i = ui(() => e(n, t == null ? void 0 : t()) || {});
    if (t && (i != null && i.update)) {
      var r = !1, a = (
        /** @type {any} */
        {}
      );
      sa(() => {
        var l = t();
        Ru(l), r && Ya(a, l) && (a = l, i.update(l));
      }), r = !0;
    }
    if (i != null && i.destroy)
      return () => (
        /** @type {Function} */
        i.destroy()
      );
  });
}
function Qu(n, e) {
  var t = void 0, i;
  _l(() => {
    t !== (t = e()) && (i && (Tt(i), i = null), t && (i = Gt(() => {
      Or(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function Yl(n) {
  var e, t, i = "";
  if (typeof n == "string" || typeof n == "number") i += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var r = n.length;
    for (e = 0; e < r; e++) n[e] && (t = Yl(n[e])) && (i && (i += " "), i += t);
  } else for (t in n) n[t] && (i && (i += " "), i += t);
  return i;
}
function Zu() {
  for (var n, e, t = 0, i = "", r = arguments.length; t < r; t++) (n = arguments[t]) && (e = Yl(n)) && (i && (i += " "), i += e);
  return i;
}
function Ql(n) {
  return typeof n == "object" ? Zu(n) : n ?? "";
}
const Os = [...` 	
\r\f \v\uFEFF`];
function Ju(n, e, t) {
  var i = n == null ? "" : "" + n;
  if (e && (i = i ? i + " " + e : e), t) {
    for (var r of Object.keys(t))
      if (t[r])
        i = i ? i + " " + r : r;
      else if (i.length)
        for (var a = r.length, l = 0; (l = i.indexOf(r, l)) >= 0; ) {
          var u = l + a;
          (l === 0 || Os.includes(i[l - 1])) && (u === i.length || Os.includes(i[u])) ? i = (l === 0 ? "" : i.substring(0, l)) + i.substring(u + 1) : l = u;
        }
  }
  return i === "" ? null : i;
}
function Ds(n, e = !1) {
  var t = e ? " !important;" : ";", i = "";
  for (var r of Object.keys(n)) {
    var a = n[r];
    a != null && a !== "" && (i += " " + r + ": " + a + t);
  }
  return i;
}
function ha(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function $u(n, e) {
  if (e) {
    var t = "", i, r;
    if (Array.isArray(e) ? (i = e[0], r = e[1]) : i = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, l = 0, u = !1, o = [];
      i && o.push(...Object.keys(i).map(ha)), r && o.push(...Object.keys(r).map(ha));
      var d = 0, c = -1;
      const m = n.length;
      for (var h = 0; h < m; h++) {
        var f = n[h];
        if (u ? f === "/" && n[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && n[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? l++ : f === ")" && l--, !u && a === !1 && l === 0) {
          if (f === ":" && c === -1)
            c = h;
          else if (f === ";" || h === m - 1) {
            if (c !== -1) {
              var p = ha(n.substring(d, c).trim());
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
    return i && (t += Ds(i)), r && (t += Ds(r, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function Kn(n, e, t, i, r, a) {
  var l = n.__className;
  if (l !== t || l === void 0) {
    var u = Ju(t, i, a);
    u == null ? n.removeAttribute("class") : e ? n.className = u : n.setAttribute("class", u), n.__className = t;
  } else if (a && r !== a)
    for (var o in a) {
      var d = !!a[o];
      (r == null || d !== !!r[o]) && n.classList.toggle(o, d);
    }
  return a;
}
function va(n, e = {}, t, i) {
  for (var r in t) {
    var a = t[r];
    e[r] !== a && (t[r] == null ? n.style.removeProperty(r) : n.style.setProperty(r, a, i));
  }
}
function Zl(n, e, t, i) {
  var r = n.__style;
  if (r !== e) {
    var a = $u(e, i);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else i && (Array.isArray(i) ? (va(n, t == null ? void 0 : t[0], i[0]), va(n, t == null ? void 0 : t[1], i[1], "important")) : va(n, t, i));
  return i;
}
function Ua(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Xa(e))
      return Ko();
    for (var i of n.options)
      i.selected = e.includes(Rs(i));
    return;
  }
  for (i of n.options) {
    var r = Rs(i);
    if (Iu(r, e)) {
      i.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function ed(n) {
  var e = new MutationObserver(() => {
    Ua(n, n.__value);
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
  }), Mr(() => {
    e.disconnect();
  });
}
function Rs(n) {
  return "__value" in n ? n.__value : n.value;
}
const cr = Symbol("class"), fr = Symbol("style"), Jl = Symbol("is custom element"), $l = Symbol("is html"), td = rl ? "option" : "OPTION", nd = rl ? "select" : "SELECT";
function id(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function Rn(n, e, t, i) {
  var r = eo(n);
  r[e] !== (r[e] = t) && (e === "loading" && (n[Po] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && to(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function rd(n, e, t, i, r = !1, a = !1) {
  var l = eo(n), u = l[Jl], o = !l[$l], d = e || {}, c = n.nodeName === td;
  for (var h in e)
    h in t || (t[h] = null);
  t.class ? t.class = Ql(t.class) : t[cr] && (t.class = null), t[fr] && (t.style ?? (t.style = null));
  var f = to(n);
  for (const S in t) {
    let C = t[S];
    if (c && S === "value" && C == null) {
      n.value = n.__value = "", d[S] = C;
      continue;
    }
    if (S === "class") {
      var p = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      Kn(n, p, C, i, e == null ? void 0 : e[cr], t[cr]), d[S] = C, d[cr] = t[cr];
      continue;
    }
    if (S === "style") {
      Zl(n, C, e == null ? void 0 : e[fr], t[fr]), d[S] = C, d[fr] = t[fr];
      continue;
    }
    var v = d[S];
    if (!(C === v && !(C === void 0 && n.hasAttribute(S)))) {
      d[S] = C;
      var m = S[0] + S[1];
      if (m !== "$$")
        if (m === "on") {
          const O = {}, w = "$$" + S;
          let M = S.slice(2);
          var g = Nu(M);
          if (Bu(M) && (M = M.slice(0, -7), O.capture = !0), !g && v) {
            if (C != null) continue;
            n.removeEventListener(M, d[w], O), d[w] = null;
          }
          if (g)
            gn(M, n, C), ss([M]);
          else if (C != null) {
            let I = function(x) {
              d[S].call(this, x);
            };
            d[w] = as(M, n, I, O);
          }
        } else if (S === "style")
          Rn(n, S, C);
        else if (S === "autofocus")
          Au(
            /** @type {HTMLElement} */
            n,
            !!C
          );
        else if (!u && (S === "__value" || S === "value" && C != null))
          n.value = n.__value = C;
        else if (S === "selected" && c)
          id(
            /** @type {HTMLOptionElement} */
            n,
            C
          );
        else {
          var E = S;
          o || (E = Vu(E));
          var D = E === "defaultValue" || E === "defaultChecked";
          if (C == null && !u && !D)
            if (l[S] = null, E === "value" || E === "checked") {
              let O = (
                /** @type {HTMLInputElement} */
                n
              );
              const w = e === void 0;
              if (E === "value") {
                let M = O.defaultValue;
                O.removeAttribute(E), O.defaultValue = M, O.value = O.__value = w ? M : null;
              } else {
                let M = O.defaultChecked;
                O.removeAttribute(E), O.defaultChecked = M, O.checked = w ? M : !1;
              }
            } else
              n.removeAttribute(S);
          else D || f.includes(E) && (u || typeof C != "string") ? (n[E] = C, E in l && (l[E] = mt)) : typeof C != "function" && Rn(n, E, C);
        }
    }
  }
  return d;
}
function dt(n, e, t = [], i = [], r = [], a, l = !1, u = !1) {
  Il(r, t, i, (o) => {
    var d = void 0, c = {}, h = n.nodeName === nd, f = !1;
    if (_l(() => {
      var v = e(...o.map(s)), m = rd(
        n,
        d,
        v,
        a,
        l,
        u
      );
      f && h && "value" in v && Ua(
        /** @type {HTMLSelectElement} */
        n,
        v.value
      );
      for (let E of Object.getOwnPropertySymbols(c))
        v[E] || Tt(c[E]);
      for (let E of Object.getOwnPropertySymbols(v)) {
        var g = v[E];
        E.description === To && (!d || g !== d[E]) && (c[E] && Tt(c[E]), c[E] = Gt(() => Qu(n, () => g))), m[E] = g;
      }
      d = m;
    }), h) {
      var p = (
        /** @type {HTMLSelectElement} */
        n
      );
      Or(() => {
        Ua(
          p,
          /** @type {Record<string | symbol, any>} */
          d.value,
          !0
        ), ed(p);
      });
    }
    f = !0;
  });
}
function eo(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Jl]: n.nodeName.includes("-"),
      [$l]: n.namespaceURI === $s
    })
  );
}
var _s = /* @__PURE__ */ new Map();
function to(n) {
  var e = n.getAttribute("is") || n.nodeName, t = _s.get(e);
  if (t) return t;
  _s.set(e, t = []);
  for (var i, r = n, a = Element.prototype; a !== r; ) {
    i = tl(r);
    for (var l in i)
      i[l].set && t.push(l);
    r = Wa(r);
  }
  return t;
}
function ad(n, e, t = e) {
  var i = /* @__PURE__ */ new WeakSet();
  Cu(n, "input", async (r) => {
    var a = r ? n.defaultValue : n.value;
    if (a = pa(n) ? ma(a) : a, t(a), de !== null && i.add(de), await Gl(), a !== (a = e())) {
      var l = n.selectionStart, u = n.selectionEnd, o = n.value.length;
      if (n.value = a ?? "", u !== null) {
        var d = n.value.length;
        l === u && u === o && d > o ? (n.selectionStart = d, n.selectionEnd = d) : (n.selectionStart = l, n.selectionEnd = Math.min(u, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ui(e) == null && n.value && (t(pa(n) ? ma(n.value) : n.value), de !== null && i.add(de)), sa(() => {
    var r = e();
    if (n === document.activeElement) {
      var a = (
        /** @type {Batch} */
        de
      );
      if (i.has(a))
        return;
    }
    pa(n) && r === ma(n.value) || n.type === "date" && !r && !n.value || r !== n.value && (n.value = r ?? "");
  });
}
function pa(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function ma(n) {
  return n === "" ? null : +n;
}
function Ps(n, e) {
  return n === e || (n == null ? void 0 : n[On]) === e;
}
function _e(n = {}, e, t, i) {
  var r = (
    /** @type {ComponentContext} */
    ct.r
  ), a = (
    /** @type {Effect} */
    De
  );
  return Or(() => {
    var l, u;
    return sa(() => {
      l = u, u = [], ui(() => {
        n !== t(...u) && (e(n, ...u), l && Ps(t(...l), n) && e(null, ...l));
      });
    }), () => {
      let o = a;
      for (; o !== r && o.parent !== null && o.parent.f & Ea; )
        o = o.parent;
      const d = () => {
        u && Ps(t(...u), n) && e(null, ...u);
      }, c = o.teardown;
      o.teardown = () => {
        d(), c == null || c();
      };
    };
  }), n;
}
const sd = {
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
function bt(n, e, t) {
  return new Proxy(
    { props: n, exclude: e },
    sd
  );
}
const ld = {
  get(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let i = n.props[t];
      if (ur(i) && (i = i()), typeof i == "object" && i !== null && e in i) return i[e];
    }
  },
  set(n, e, t) {
    let i = n.props.length;
    for (; i--; ) {
      let r = n.props[i];
      ur(r) && (r = r());
      const a = si(r, e);
      if (a && a.set)
        return a.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let i = n.props[t];
      if (ur(i) && (i = i()), typeof i == "object" && i !== null && e in i) {
        const r = si(i, e);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(n, e) {
    if (e === On || e === il) return !1;
    for (let t of n.props)
      if (ur(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(n) {
    const e = [];
    for (let t of n.props)
      if (ur(t) && (t = t()), !!t) {
        for (const i in t)
          e.includes(i) || e.push(i);
        for (const i of Object.getOwnPropertySymbols(t))
          e.includes(i) || e.push(i);
      }
    return e;
  }
};
function nt(...n) {
  return new Proxy({ props: n }, ld);
}
function b(n, e, t, i) {
  var D;
  var r = (t & 8) !== 0, a = (t & 16) !== 0, l = (
    /** @type {V} */
    i
  ), u = !0, o = () => (u && (u = !1, l = a ? ui(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), l);
  let d;
  if (r) {
    var c = On in n || il in n;
    d = ((D = si(n, e)) == null ? void 0 : D.set) ?? (c && e in n ? (S) => n[e] = S : void 0);
  }
  var h, f = !1;
  r ? [h, f] = tu(() => (
    /** @type {V} */
    n[e]
  )) : h = /** @type {V} */
  n[e], h === void 0 && i !== void 0 && (h = o(), d && (Vo(), d(h)));
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
  var m = !1, g = (t & 1 ? ra : yl)(() => (m = !1, p()));
  r && s(g);
  var E = (
    /** @type {Effect} */
    De
  );
  return (
    /** @type {() => V} */
    function(S, C) {
      if (arguments.length > 0) {
        const O = C ? s(g) : r ? Oe(S) : S;
        return W(g, O), m = !0, l !== void 0 && (l = O), S;
      }
      return Qn && m || E.f & Qt ? g.v : s(g);
    }
  );
}
const od = "5";
var Js;
typeof window < "u" && ((Js = window.__svelte ?? (window.__svelte = {})).v ?? (Js.v = /* @__PURE__ */ new Set())).add(od);
var Na = function(n, e) {
  return Na = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  }, Na(n, e);
};
function An(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Na(n, e);
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
function bn(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], i = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ks(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var i = t.call(n), r, a = [], l;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; ) a.push(r.value);
  } catch (u) {
    l = { error: u };
  } finally {
    try {
      r && !r.done && (t = i.return) && t.call(i);
    } finally {
      if (l) throw l.error;
    }
  }
  return a;
}
function ud(n, e, t) {
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
var En = (
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
function dd(n) {
  return n === void 0 && (n = window), cd(n) ? { passive: !0 } : !1;
}
function cd(n) {
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
const no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: dd
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
function fd(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (io(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function io(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
const os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: fd,
  matches: io
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
var hd = {
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
var vd = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return hd;
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
  }(En)
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
var pi = {
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
var pd = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.transitionEndHandler = function(r) {
        i.handleTransitionEnd(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return pi;
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
      this.adapter.removeClass(pi.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(pi.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(pi.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this.adapter.hasClass(pi.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && i && (this.adapter.removeClass(pi.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(pi.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(En)
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
var md = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Fs = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, gd = {
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
var Id = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      return n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return md;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Fs;
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
      t > 0 && (t += Fs.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(En)
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
var bd = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, yd = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Bs = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
}, Br;
function Ad(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, i = Br;
  if (typeof Br == "boolean" && !e)
    return Br;
  var r = t && typeof t.supports == "function";
  if (!r)
    return !1;
  var a = t.supports("--css-vars", "yes"), l = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return i = a || l, e || (Br = i), i;
}
function Ed(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var i = e.x, r = e.y, a = i + t.left, l = r + t.top, u, o;
  if (n.type === "touchstart") {
    var d = n;
    u = d.changedTouches[0].pageX - a, o = d.changedTouches[0].pageY - l;
  } else {
    var c = n;
    u = c.pageX - a, o = c.pageY - l;
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
var Us = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ns = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ur = [], Cd = (
  /** @class */
  function(n) {
    An(e, n);
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
        return bd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return yd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Bs;
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
        var r = e.cssClasses, a = r.ROOT, l = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(a), t.adapter.isUnbounded() && (t.adapter.addClass(l), t.layoutInternal());
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
          for (var a = bn(Us), l = a.next(); !l.done; l = a.next()) {
            var u = l.value;
            this.adapter.registerInteractionHandler(u, this.activateHandler);
          }
        } catch (o) {
          i = { error: o };
        } finally {
          try {
            l && !l.done && (r = a.return) && r.call(a);
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
          for (var a = bn(Ns), l = a.next(); !l.done; l = a.next()) {
            var u = l.value;
            this.adapter.registerDocumentInteractionHandler(u, this.deactivateHandler);
          }
        } catch (o) {
          i = { error: o };
        } finally {
          try {
            l && !l.done && (r = a.return) && r.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, i;
      try {
        for (var r = bn(Us), a = r.next(); !a.done; a = r.next()) {
          var l = a.value;
          this.adapter.deregisterInteractionHandler(l, this.activateHandler);
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
        for (var r = bn(Ns), a = r.next(); !a.done; a = r.next()) {
          var l = a.value;
          this.adapter.deregisterDocumentInteractionHandler(l, this.deactivateHandler);
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
          var a = this.previousActivationEvent, l = a && t !== void 0 && a.type !== t.type;
          if (!l) {
            r.isActivated = !0, r.isProgrammatic = t === void 0, r.activationEvent = t, r.wasActivatedByPointer = r.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var u = t !== void 0 && Ur.length > 0 && Ur.some(function(o) {
              return i.adapter.containsEventTarget(o);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Ur.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ur = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(t), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, i = e.strings, r = i.VAR_FG_TRANSLATE_START, a = i.VAR_FG_TRANSLATE_END, l = e.cssClasses, u = l.FG_DEACTIVATION, o = l.FG_ACTIVATION, d = e.numbers.DEACTIVATION_TIMEOUT_MS;
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
      r ? a = Ed(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var l = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: l };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, i = e.cssClasses.FG_DEACTIVATION, r = this.activationState, a = r.hasDeactivationUXRun, l = r.isActivated, u = a || !l;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(i);
      }, Bs.FG_DEACTIVATION_MS));
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
        var l = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return l + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : r();
      var a = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, i = t.VAR_FG_SIZE, r = t.VAR_LEFT, a = t.VAR_TOP, l = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(l, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(En)
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
var ga = {
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
}, Sd = {
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
}, Hs = {
  LABEL_SCALE: 0.75
}, xd = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Td = [
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
var Vs = ["mousedown", "touchstart"], js = ["click", "keydown"], Ld = (
  /** @class */
  function(n) {
    An(e, n);
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
        return Sd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ga;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Hs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return Td.indexOf(t) >= 0;
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
        for (var l = bn(Vs), u = l.next(); !u.done; u = l.next()) {
          var o = u.value;
          this.adapter.registerInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          u && !u.done && (i = l.return) && i.call(l);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var d = bn(js), c = d.next(); !c.done; c = d.next()) {
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
        for (var l = bn(Vs), u = l.next(); !u.done; u = l.next()) {
          var o = u.value;
          this.adapter.deregisterInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          u && !u.done && (i = l.return) && i.call(l);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var d = bn(js), c = d.next(); !c.done; c = d.next()) {
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
        return xd.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var i = this.adapter.getLabelWidth() * Hs.LABEL_SCALE;
          this.adapter.notchOutline(i);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(t) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var i = t.touches, r = i ? i[0] : t, a = r.target.getBoundingClientRect(), l = r.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(l);
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
        var a = this.helperText.isVisible(), l = this.helperText.getId();
        a && l ? this.adapter.setInputAttr(ga.ARIA_DESCRIBEDBY, l) : this.adapter.removeInputAttr(ga.ARIA_DESCRIBEDBY);
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
  }(En)
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
var Gs = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, wd = {
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
var zs = ["click", "keydown"], Md = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Gs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return wd;
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
        for (var r = bn(zs), a = r.next(); !a.done; a = r.next()) {
          var l = a.value;
          this.adapter.registerInteractionHandler(l, this.interactionHandler);
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
        for (var r = bn(zs), a = r.next(); !a.done; a = r.next()) {
          var l = a.value;
          this.adapter.deregisterInteractionHandler(l, this.interactionHandler);
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
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Gs.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var i = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || i) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(En)
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
var be = {
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
}, Ft = /* @__PURE__ */ new Set();
Ft.add(be.BACKSPACE);
Ft.add(be.ENTER);
Ft.add(be.SPACEBAR);
Ft.add(be.PAGE_UP);
Ft.add(be.PAGE_DOWN);
Ft.add(be.END);
Ft.add(be.HOME);
Ft.add(be.ARROW_LEFT);
Ft.add(be.ARROW_UP);
Ft.add(be.ARROW_RIGHT);
Ft.add(be.ARROW_DOWN);
Ft.add(be.DELETE);
Ft.add(be.ESCAPE);
Ft.add(be.TAB);
var zt = {
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
}, Bt = /* @__PURE__ */ new Map();
Bt.set(zt.BACKSPACE, be.BACKSPACE);
Bt.set(zt.ENTER, be.ENTER);
Bt.set(zt.SPACEBAR, be.SPACEBAR);
Bt.set(zt.PAGE_UP, be.PAGE_UP);
Bt.set(zt.PAGE_DOWN, be.PAGE_DOWN);
Bt.set(zt.END, be.END);
Bt.set(zt.HOME, be.HOME);
Bt.set(zt.ARROW_LEFT, be.ARROW_LEFT);
Bt.set(zt.ARROW_UP, be.ARROW_UP);
Bt.set(zt.ARROW_RIGHT, be.ARROW_RIGHT);
Bt.set(zt.ARROW_DOWN, be.ARROW_DOWN);
Bt.set(zt.DELETE, be.DELETE);
Bt.set(zt.ESCAPE, be.ESCAPE);
Bt.set(zt.TAB, be.TAB);
var ci = /* @__PURE__ */ new Set();
ci.add(be.PAGE_UP);
ci.add(be.PAGE_DOWN);
ci.add(be.END);
ci.add(be.HOME);
ci.add(be.ARROW_LEFT);
ci.add(be.ARROW_UP);
ci.add(be.ARROW_RIGHT);
ci.add(be.ARROW_DOWN);
function ut(n) {
  var e = n.key;
  if (Ft.has(e))
    return e;
  var t = Bt.get(n.keyCode);
  return t || be.UNKNOWN;
}
function it(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function St(n, e, t, i = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dispatch event without element.");
  const r = new CustomEvent(e, Object.assign(Object.assign({}, i), { detail: t }));
  return n == null || n.dispatchEvent(r), r;
}
function Ha(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const a = t[r], l = a.indexOf("$");
    l !== -1 && e.indexOf(a.substring(0, l + 1)) !== -1 || e.indexOf(a) === -1 && (i[a] = n[a]);
  }
  return i;
}
function gt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    a.substring(0, e.length) === e && (i[a.substring(e.length)] = n[a]);
  }
  return i;
}
class Rr {
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
    t in a || (a[t] = /* @__PURE__ */ new Map()), a[t].set(i, _u(e, t, i, r));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, t, i) {
    const r = this.elementMap.get(e);
    if (r == null || !(t in r))
      return;
    const a = r[t], l = a.get(i);
    l != null && (l(), a.delete(i), a.size === 0 && (delete r[t], Object.keys(r).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, t) => {
      for (let [i, r] of Object.entries(e))
        r.forEach((a, l) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function te(n, e) {
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
            const l = i[r];
            Array.isArray(l) && l.length > 1 ? a.update(l[1]) : a.update();
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
var Od = /* @__PURE__ */ Fu("<svg><!></svg>");
function us(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "tag", 3, "div"), r = /* @__PURE__ */ bt(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ se(() => [
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
  let l;
  function u() {
    return l;
  }
  var o = { getElement: u }, d = ve(), c = ae(d);
  {
    var h = (v) => {
      var m = Od();
      dt(m, () => ({ ...r }));
      var g = Q(m);
      Te(g, () => e.children ?? Ae), _e(m, (E) => l = E, () => l), $e(m, (E, D) => te == null ? void 0 : te(E, D), t), L(v, m);
    }, f = (v) => {
      var m = ve(), g = ae(m);
      Ms(g, i, !1, (E, D) => {
        _e(E, (S) => l = S, () => l), $e(E, (S, C) => te == null ? void 0 : te(S, C), t), dt(E, () => ({ ...r }));
      }), L(v, m);
    }, p = (v) => {
      var m = ve(), g = ae(m);
      Ms(g, i, !1, (E, D) => {
        _e(E, (O) => l = O, () => l), $e(E, (O, w) => te == null ? void 0 : te(O, w), t), dt(E, () => ({ ...r }));
        var S = ve(), C = ae(S);
        Te(C, () => e.children ?? Ae), L(D, S);
      }), L(v, m);
    };
    oe(c, (v) => {
      i() === "svg" ? v(h) : s(a) ? v(f, 1) : v(p, -1);
    });
  }
  return L(n, d), Qe(o);
}
function Nr(n, e) {
  Ye(e, !0);
  const [t, i] = ia(), r = xa(e.value);
  pe(e.key, r), Be(() => {
    Kr(r, e.value);
  }), di(() => {
    r.set(void 0);
  });
  var a = ve(), l = ae(a);
  Te(l, () => e.children ?? Ae), L(n, a), Qe(), i();
}
const { applyPassive: Xs } = no, { matches: Dd } = os;
function Ln(n, { ripple: e = !0, surface: t = !1, unbounded: i = !1, disabled: r = !1, color: a, active: l, rippleElement: u, eventTarget: o, activeTarget: d, addClass: c = (v) => n.classList.add(v), removeClass: h = (v) => n.classList.remove(v), addStyle: f = (v, m) => n.style.setProperty(v, m), initPromise: p = Promise.resolve() } = {}) {
  let v, m = new Rr(), g = Me("SMUI:addLayoutListener"), E, D = l, S = o, C = d;
  function O() {
    t ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), v && D !== l && (D = l, l ? v.activate() : l === !1 && v.deactivate()), e && !v ? (v = new Cd({
      addClass: c,
      browserSupportsCssVars: () => Ad(window),
      computeBoundingRect: () => (u || n).getBoundingClientRect(),
      containsEventTarget: (M) => n.contains(M),
      deregisterDocumentInteractionHandler: (M, I) => m.off(document.documentElement, M, I),
      deregisterInteractionHandler: (M, I) => m.off(o || n, M, I),
      deregisterResizeHandler: (M) => window.removeEventListener("resize", M),
      getWindowPageOffset: () => {
        var M, I;
        return {
          x: (M = window.pageXOffset) !== null && M !== void 0 ? M : window.scrollX,
          y: (I = window.pageYOffset) !== null && I !== void 0 ? I : window.scrollY
        };
      },
      isSurfaceActive: () => l ?? Dd(d || n, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (M, I) => {
        const x = Xs();
        m.on(document.documentElement, M, I, typeof x == "boolean" ? { capture: x } : x);
      },
      registerInteractionHandler: (M, I) => {
        const x = Xs();
        m.on(o || n, M, I, typeof x == "boolean" ? { capture: x } : x);
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
  O(), g && (E = g(w));
  function w() {
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
        active: l,
        rippleElement: u,
        eventTarget: o,
        activeTarget: d,
        addClass: c,
        removeClass: h,
        addStyle: f,
        initPromise: p
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (I) => n.classList.add(I), removeClass: (I) => n.classList.remove(I), addStyle: (I, x) => n.style.setProperty(I, x), initPromise: Promise.resolve() }, M)), O();
    },
    destroy() {
      v && (v.destroy(), v = void 0, m.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), E && E();
    }
  };
}
var Rd = /* @__PURE__ */ re("<span><!></span>"), _d = /* @__PURE__ */ re("<label><!></label>");
function Yr(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "style", 3, ""), a = b(e, "floatAbove", 15, !1), l = b(e, "required", 15, !1), u = b(e, "wrapped", 3, !1), o = /* @__PURE__ */ bt(e, [
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
  ]), d, c = /* @__PURE__ */ fe(void 0), h = new Rr(), f = Oe({}), p = Oe({}), v = Me("SMUI:generic:input:props") ?? {}, m = a();
  Be(() => {
    s(c) && m !== a() && (m = a(), s(c).float(a()));
  });
  let g = l();
  Be(() => {
    s(c) && g !== l() && (g = l(), s(c).setRequired(l()));
  });
  const E = Me("SMUI:floating-label:mount"), D = Me("SMUI:floating-label:unmount");
  kt(() => {
    W(
      c,
      new vd({
        addClass: S,
        removeClass: C,
        getWidth: () => {
          var he, me;
          const $ = ne(), ue = $.cloneNode(!0);
          (he = $.parentNode) == null || he.appendChild(ue), ue.classList.add("smui-floating-label--remove-transition"), ue.classList.add("smui-floating-label--force-size"), ue.classList.remove("mdc-floating-label--float-above");
          const V = ue.scrollWidth;
          return (me = $.parentNode) == null || me.removeChild(ue), V;
        },
        registerInteractionHandler: ($, ue) => h.on(ne(), $, ue),
        deregisterInteractionHandler: ($, ue) => h.off(ne(), $, ue)
      }),
      !0
    );
    const H = {
      get element() {
        return ne();
      },
      addStyle: O,
      removeStyle: w
    };
    return E && E(H), s(c).init(), () => {
      var $;
      D && D(H), ($ = s(c)) == null || $.destroy(), h.clear();
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
  function w(H) {
    H in p && delete p[H];
  }
  function M(H) {
    var $;
    ($ = s(c)) == null || $.shake(H);
  }
  function I(H) {
    a(H);
  }
  function x(H) {
    l(H);
  }
  function G() {
    if (s(c) == null)
      throw new Error("Instance is undefined.");
    return s(c).getWidth();
  }
  function ne() {
    return d;
  }
  var k = { shake: M, float: I, setRequired: x, getWidth: G, getElement: ne }, U = ve(), Pe = ae(U);
  {
    var Z = (H) => {
      var $ = Rd();
      dt($, (V, he) => ({ class: V, style: he, ...o }), [
        () => it({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": l(),
          ...f,
          [i()]: !0
        }),
        () => Object.entries(p).map(([V, he]) => `${V}: ${he};`).concat([r()]).join(" ")
      ]);
      var ue = Q($);
      Te(ue, () => e.children ?? Ae), _e($, (V) => d = V, () => d), $e($, (V, he) => te == null ? void 0 : te(V, he), t), L(H, $);
    }, F = (H) => {
      var $ = _d();
      dt(
        $,
        (V, he) => ({
          class: V,
          style: he,
          for: e.for || (v ? v.id : void 0),
          ...o
        }),
        [
          () => it({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": l(),
            ...f,
            [i()]: !0
          }),
          () => Object.entries(p).map(([V, he]) => `${V}: ${he};`).concat([r()]).join(" ")
        ]
      );
      var ue = Q($);
      Te(ue, () => e.children ?? Ae), _e($, (V) => d = V, () => d), $e($, (V, he) => te == null ? void 0 : te(V, he), t), L(H, $);
    };
    oe(Pe, (H) => {
      u() ? H(Z) : H(F, -1);
    });
  }
  return L(n, U), Qe(k);
}
var Pd = /* @__PURE__ */ re("<div></div>");
function ro(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "style", 3, ""), a = b(e, "active", 3, !1), l = /* @__PURE__ */ bt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, o = /* @__PURE__ */ fe(void 0), d = new Rr(), c = Oe({}), h = Oe({});
  kt(() => (W(
    o,
    new pd({
      addClass: p,
      removeClass: v,
      hasClass: f,
      setStyle: m,
      registerEventHandler: (w, M) => d.on(S(), w, M),
      deregisterEventHandler: (w, M) => d.off(S(), w, M)
    }),
    !0
  ), s(o).init(), () => {
    var w;
    (w = s(o)) == null || w.destroy(), d.clear();
  }));
  function f(w) {
    return w in c ? c[w] : S().classList.contains(w);
  }
  function p(w) {
    c[w] || (c[w] = !0);
  }
  function v(w) {
    (!(w in c) || c[w]) && (c[w] = !1);
  }
  function m(w, M) {
    h[w] != M && (M === "" || M == null ? delete h[w] : h[w] = M);
  }
  function g() {
    var w;
    (w = s(o)) == null || w.activate();
  }
  function E() {
    var w;
    (w = s(o)) == null || w.deactivate();
  }
  function D(w) {
    var M;
    (M = s(o)) == null || M.setRippleCenter(w);
  }
  function S() {
    return u;
  }
  var C = { activate: g, deactivate: E, setRippleCenter: D, getElement: S }, O = Pd();
  return dt(O, (w, M) => ({ class: w, style: M, ...l }), [
    () => it({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...c,
      [i()]: !0
    }),
    () => Object.entries(h).map(([w, M]) => `${w}: ${M};`).concat([r()]).join(" ")
  ]), _e(O, (w) => u = w, () => u), $e(O, (w, M) => te == null ? void 0 : te(w, M), t), L(n, O), Qe(C);
}
var kd = /* @__PURE__ */ re('<div class="mdc-notched-outline__notch"><!></div>'), Fd = /* @__PURE__ */ re('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function ao(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "notched", 3, !1), a = b(e, "noLabel", 3, !1), l = /* @__PURE__ */ bt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, o = /* @__PURE__ */ fe(void 0), d = /* @__PURE__ */ fe(void 0), c = Oe({}), h = Oe({}), f;
  Be(() => {
    s(d) !== f && (s(d) ? (s(d).addStyle("transition-duration", "0s"), p("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(d) && s(d).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), f = s(d));
  }), pe("SMUI:floating-label:mount", (I) => {
    W(d, I, !0);
  }), pe("SMUI:floating-label:unmount", () => {
    W(d, void 0);
  }), kt(() => (W(
    o,
    new Id({
      addClass: p,
      removeClass: v,
      setNotchWidthProperty: (I) => m("width", I + "px"),
      removeNotchWidthProperty: () => g("width")
    }),
    !0
  ), s(o).init(), () => {
    var I;
    (I = s(o)) == null || I.destroy();
  }));
  function p(I) {
    c[I] || (c[I] = !0);
  }
  function v(I) {
    (!(I in c) || c[I]) && (c[I] = !1);
  }
  function m(I, x) {
    h[I] != x && (x === "" || x == null ? delete h[I] : h[I] = x);
  }
  function g(I) {
    I in h && delete h[I];
  }
  function E(I) {
    var x;
    (x = s(o)) == null || x.notch(I);
  }
  function D() {
    var I;
    (I = s(o)) == null || I.closeNotch();
  }
  function S() {
    return u;
  }
  var C = { notch: E, closeNotch: D, getElement: S }, O = Fd();
  dt(O, (I) => ({ class: I, ...l }), [
    () => it({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": r(),
      "mdc-notched-outline--no-label": a(),
      ...c,
      [i()]: !0
    })
  ]);
  var w = X(Q(O), 2);
  {
    var M = (I) => {
      var x = kd(), G = Q(x);
      Te(G, () => e.children ?? Ae), Fe((ne) => Zl(x, ne), [
        () => Object.entries(h).map(([ne, k]) => `${ne}: ${k};`).join(" ")
      ]), L(I, x);
    };
    oe(w, (I) => {
      a() || I(M);
    });
  }
  return _e(O, (I) => u = I, () => u), $e(O, (I, x) => te == null ? void 0 : te(I, x), t), L(n, O), Qe(C);
}
function ds(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "component", 3, us), a = b(e, "tag", 3, "div"), l = b(e, "_smuiClass", 3, ""), u = b(e, "_smuiClassMap", 23, () => ({})), o = b(e, "_smuiContexts", 19, () => ({})), d = b(e, "_smuiProps", 19, () => ({})), c = /* @__PURE__ */ bt(e, [
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
    const S = Me(D);
    S && "subscribe" in S && f.push(S.subscribe((C) => {
      u()[E] = C;
    }));
  });
  for (let E in o())
    o().hasOwnProperty(E) && pe(E, o()[E]);
  di(() => {
    for (const E of f)
      E();
  });
  function p() {
    return h.getElement();
  }
  var v = { getElement: p }, m = ve(), g = ae(m);
  {
    let E = /* @__PURE__ */ se(() => it({
      [l()]: !0,
      ...u(),
      [i()]: !0
    }));
    ls(g, r, (D, S) => {
      _e(
        S(D, nt(
          {
            get tag() {
              return a();
            },
            get use() {
              return t();
            },
            get class() {
              return s(E);
            }
          },
          d,
          () => c,
          {
            children: (C, O) => {
              var w = ve(), M = ae(w);
              Te(M, () => e.children ?? Ae), L(C, w);
            },
            $$slots: { default: !0 }
          }
        )),
        (C) => h = C,
        () => h
      );
    });
  }
  return L(n, m), Qe(v);
}
function Bd(n, e) {
  Ye(e, !0);
  let t = /* @__PURE__ */ bt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return _e(
    ds(n, nt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (l, u) => {
        var o = ve(), d = ae(o);
        Te(d, () => e.children ?? Ae), L(l, o);
      },
      $$slots: { default: !0 }
    })),
    (l) => i = l,
    () => i
  ), Qe(a);
}
function Ud(n, e) {
  Ye(e, !0);
  let t = /* @__PURE__ */ bt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return _e(
    ds(n, nt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => t,
      {
        children: (l, u) => {
          var o = ve(), d = ae(o);
          Te(d, () => e.children ?? Ae), L(l, o);
        },
        $$slots: { default: !0 }
      }
    )),
    (l) => i = l,
    () => i
  ), Qe(a);
}
function Nd(n, e) {
  Ye(e, !0);
  let t = /* @__PURE__ */ bt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return _e(
    ds(n, nt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => t,
      {
        children: (l, u) => {
          var o = ve(), d = ae(o);
          Te(d, () => e.children ?? Ae), L(l, o);
        },
        $$slots: { default: !0 }
      }
    )),
    (l) => i = l,
    () => i
  ), Qe(a);
}
var Hd = /* @__PURE__ */ re("<input/>");
function Vd(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "type", 3, "text"), a = b(e, "placeholder", 3, " "), l = b(e, "value", 15), u = b(e, "files", 15, null), o = b(e, "dirty", 15, !1), d = b(e, "invalid", 15, !1), c = b(e, "updateInvalid", 3, !0), h = b(e, "initialInvalid", 3, !1), f = b(e, "emptyValueNull", 19, () => l() === null), p = b(e, "emptyValueUndefined", 19, () => l() === void 0), v = /* @__PURE__ */ bt(e, [
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
  ]), m, g = Oe({}), E = Oe({});
  Be(() => {
    r() === "file" ? delete E.value : E.value = l() == null ? "" : l();
  }), kt(() => {
    c() && h() && d(G().matches(":invalid"));
  });
  function D(Z) {
    return Z === "" ? Number.NaN : +Z;
  }
  function S(Z) {
    if (r() === "file") {
      u(Z.currentTarget.files);
      return;
    }
    if (Z.currentTarget.value === "" && f()) {
      l(null);
      return;
    }
    if (Z.currentTarget.value === "" && p()) {
      l(void 0);
      return;
    }
    switch (r()) {
      case "number":
      case "range":
        l(D(Z.currentTarget.value));
        break;
      default:
        l(Z.currentTarget.value);
        break;
    }
  }
  function C(Z) {
    (r() === "file" || r() === "range") && S(Z), o(!0), c() && d(G().matches(":invalid"));
  }
  function O(Z) {
    return Z in g ? g[Z] ?? null : G().getAttribute(Z);
  }
  function w(Z, F) {
    g[Z] !== F && (g[Z] = F);
  }
  function M(Z) {
    (!(Z in g) || g[Z] != null) && (g[Z] = void 0);
  }
  function I() {
    G().focus();
  }
  function x() {
    G().blur();
  }
  function G() {
    return m;
  }
  var ne = { getAttr: O, addAttr: w, removeAttr: M, focus: I, blur: x, getElement: G }, k = Hd(), U = (Z) => {
    var F;
    r() !== "file" && S(Z), (F = e.oninput) == null || F.call(e, Z);
  }, Pe = (Z) => {
    var F;
    C(Z), (F = e.onchange) == null || F.call(e, Z);
  };
  return dt(
    k,
    (Z) => ({
      class: Z,
      type: r(),
      placeholder: a(),
      ...E,
      ...g,
      ...v,
      oninput: U,
      onchange: Pe
    }),
    [
      () => it({ "mdc-text-field__input": !0, [i()]: !0 })
    ],
    void 0,
    void 0,
    void 0,
    !0
  ), _e(k, (Z) => m = Z, () => m), $e(k, (Z, F) => te == null ? void 0 : te(Z, F), t), L(n, k), Qe(ne);
}
var jd = /* @__PURE__ */ re("<textarea></textarea>");
function Gd(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "style", 3, ""), a = b(e, "value", 15, ""), l = b(e, "dirty", 15, !1), u = b(e, "invalid", 15, !1), o = b(e, "updateInvalid", 3, !0), d = b(e, "initialInvalid", 3, !1), c = b(e, "resizable", 3, !0), h = /* @__PURE__ */ bt(e, [
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
  ]), f, p = Oe({});
  kt(() => {
    o() && d() && u(C().matches(":invalid"));
  });
  function v() {
    l(!0), o() && u(C().matches(":invalid"));
  }
  function m(I) {
    return I in p ? p[I] ?? null : C().getAttribute(I);
  }
  function g(I, x) {
    p[I] !== x && (p[I] = x);
  }
  function E(I) {
    (!(I in p) || p[I] != null) && (p[I] = void 0);
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
  var O = { getAttr: m, addAttr: g, removeAttr: E, focus: D, blur: S, getElement: C }, w = jd(), M = (I) => {
    var x;
    v(), (x = e.onchange) == null || x.call(e, I);
  };
  return dt(
    w,
    (I) => ({
      class: I,
      style: `${c() ? "" : "resize: none; "}${r()}`,
      ...p,
      ...h,
      onchange: M
    }),
    [
      () => it({ "mdc-text-field__input": !0, [i()]: !0 })
    ]
  ), _e(w, (I) => f = I, () => f), $e(w, (I, x) => te == null ? void 0 : te(I, x), t), Or(() => ad(w, a)), L(n, w), Qe(O);
}
var zd = /* @__PURE__ */ re('<span class="mdc-text-field__ripple"></span>'), Xd = /* @__PURE__ */ re("<!> <!>", 1), Wd = /* @__PURE__ */ re("<span><!> <!></span>"), Kd = /* @__PURE__ */ re("<!> <!> <!>", 1), qd = /* @__PURE__ */ re("<label><!> <!> <!> <!> <!> <!> <!></label>"), Yd = /* @__PURE__ */ re("<div><!> <!> <!> <!> <!></div>"), Qd = /* @__PURE__ */ re("<!> <!>", 1);
function Zd(n, e) {
  Ye(e, !0);
  const { applyPassive: t } = no;
  let i = () => {
  };
  function r(_) {
    return _ === i;
  }
  let a = b(e, "use", 19, () => []), l = b(e, "class", 3, ""), u = b(e, "style", 3, ""), o = b(e, "ripple", 3, !0), d = b(e, "disabled", 3, !1), c = b(e, "required", 3, !1), h = b(e, "textarea", 3, !1), f = b(e, "variant", 19, () => h() ? "outlined" : "standard"), p = b(e, "noLabel", 3, !1), v = b(e, "type", 3, "text"), m = b(e, "value", 15), g = b(e, "files", 15, i), E = b(e, "invalid", 15, i), D = b(e, "updateInvalid", 19, () => r(E())), S = b(e, "initialInvalid", 3, !1), C = b(e, "dirty", 15, !1), O = b(e, "validateOnValueChange", 19, D), w = b(e, "useNativeValidation", 19, D), M = b(e, "withLeadingIcon", 3, i), I = b(e, "withTrailingIcon", 3, i), x = b(e, "input", 7), G = b(e, "floatingLabel", 7), ne = b(e, "lineRipple", 7), k = b(e, "notchedOutline", 7), U = /* @__PURE__ */ bt(e, [
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
  const Pe = m() !== void 0 || m() === void 0 && e.input$emptyValueUndefined || !r(g());
  r(g()) && g(null), r(E()) && E(!1);
  let Z, F = /* @__PURE__ */ fe(void 0), H = new Rr(), $ = Oe({}), ue = Oe({}), V = /* @__PURE__ */ fe(void 0), he = /* @__PURE__ */ fe(!1), me = /* @__PURE__ */ fe(Oe(S())), le = Me("SMUI:addLayoutListener"), ce, T, K = new Promise((_) => T = _), R, z, P, j;
  const ie = /* @__PURE__ */ se(() => x() && x().getElement());
  Be(() => {
    (C() || s(me) || !D()) && s(F) && s(F).isValid() !== !E() && (D() ? E(!s(F).isValid()) : s(F).setValid(!E()));
  }), Be(() => {
    s(F) && s(F).getValidateOnValueChange() !== O() && s(F).setValidateOnValueChange(r(O()) ? !1 : O());
  }), Be(() => {
    s(F) && s(F).setUseNativeValidation(r(w()) ? !0 : w());
  }), Be(() => {
    s(F) && s(F).setDisabled(d());
  });
  let Ee = m();
  Be(() => {
    if (s(F) && Pe && Ee !== m()) {
      Ee = m();
      const _ = `${m() == null ? "" : m()}`;
      s(F).getValue() !== _ && s(F).setValue(_);
    }
  }), le && (ce = le(J)), pe("SMUI:textfield:leading-icon:mount", (_) => {
    R = _;
  }), pe("SMUI:textfield:leading-icon:unmount", () => {
    R = void 0;
  }), pe("SMUI:textfield:trailing-icon:mount", (_) => {
    z = _;
  }), pe("SMUI:textfield:trailing-icon:unmount", () => {
    z = void 0;
  }), pe("SMUI:textfield:helper-text:id", (_) => {
    W(V, _, !0);
  }), pe("SMUI:textfield:helper-text:mount", (_) => {
    P = _;
  }), pe("SMUI:textfield:helper-text:unmount", () => {
    W(V, void 0), P = void 0;
  }), pe("SMUI:textfield:character-counter:mount", (_) => {
    j = _;
  }), pe("SMUI:textfield:character-counter:unmount", () => {
    j = void 0;
  }), kt(() => {
    var _;
    if (W(
      F,
      new Ld(
        {
          // getRootAdapterMethods_
          addClass: Ue,
          removeClass: Ce,
          hasClass: Ge,
          registerTextFieldInteractionHandler: (B, ge) => H.on(ee(), B, ge),
          deregisterTextFieldInteractionHandler: (B, ge) => H.off(ee(), B, ge),
          registerValidationAttributeChangeHandler: (B) => {
            const ge = (wt) => wt.map((Ut) => Ut.attributeName).filter((Ut) => Ut), Ze = new MutationObserver((wt) => {
              w() && B(ge(wt));
            }), ot = { attributes: !0 };
            return x() && Ze.observe(x().getElement(), ot), Ze;
          },
          deregisterValidationAttributeChangeHandler: (B) => {
            B.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var B;
            return ((B = x()) == null ? void 0 : B.getElement()) ?? null;
          },
          setInputAttr: (B, ge) => {
            var Ze;
            (Ze = x()) == null || Ze.addAttr(B, ge);
          },
          removeInputAttr: (B) => {
            var ge;
            (ge = x()) == null || ge.removeAttr(B);
          },
          isFocused: () => {
            var B;
            return document.activeElement === ((B = x()) == null ? void 0 : B.getElement());
          },
          registerInputInteractionHandler: (B, ge) => {
            var ot;
            const Ze = (ot = x()) == null ? void 0 : ot.getElement();
            if (Ze) {
              const wt = t();
              H.on(Ze, B, ge, typeof wt == "boolean" ? { capture: wt } : wt);
            }
          },
          deregisterInputInteractionHandler: (B, ge) => {
            var ot;
            const Ze = (ot = x()) == null ? void 0 : ot.getElement();
            Ze && H.off(Ze, B, ge);
          },
          // getLabelAdapterMethods_
          floatLabel: (B) => G() && G().float(B),
          getLabelWidth: () => G() ? G().getWidth() : 0,
          hasLabel: () => !!G(),
          shakeLabel: (B) => G() && G().shake(B),
          setLabelRequired: (B) => G() && G().setRequired(B),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => ne() && ne().activate(),
          deactivateLineRipple: () => ne() && ne().deactivate(),
          setLineRippleTransformOrigin: (B) => ne() && ne().setRippleCenter(B),
          // getOutlineAdapterMethods_
          closeOutline: () => k() && k().closeNotch(),
          hasOutline: () => !!k(),
          notchOutline: (B) => k() && k().notch(B)
        },
        {
          get helperText() {
            return P;
          },
          get characterCounter() {
            return j;
          },
          get leadingIcon() {
            return R;
          },
          get trailingIcon() {
            return z;
          }
        }
      ),
      !0
    ), Pe) {
      if (x() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (_ = s(F)) == null || _.init();
    } else
      Gl().then(() => {
        var B;
        if (x() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (B = s(F)) == null || B.init();
      });
    return T(), () => {
      var B;
      (B = s(F)) == null || B.destroy(), H.clear();
    };
  }), di(() => {
    ce && ce();
  });
  function Ge(_) {
    return _ in $ ? $[_] ?? null : ee().classList.contains(_);
  }
  function Ue(_) {
    $[_] || ($[_] = !0);
  }
  function Ce(_) {
    (!(_ in $) || $[_]) && ($[_] = !1);
  }
  function Lt(_, B) {
    ue[_] != B && (B === "" || B == null ? delete ue[_] : ue[_] = B);
  }
  function Zt() {
    var _;
    (_ = x()) == null || _.focus();
  }
  function Jt() {
    var _;
    (_ = x()) == null || _.blur();
  }
  function J() {
    if (s(F)) {
      const _ = s(F).shouldFloat;
      s(F).notchOutline(_);
    }
  }
  function ee() {
    return Z;
  }
  var Se = { focus: Zt, blur: Jt, layout: J, getElement: ee }, ke = Qd(), yt = ae(ke);
  {
    var He = (_) => {
      var B = qd();
      dt(B, (Re, ze, je) => ({ class: Re, style: ze, for: void 0, ...je }), [
        () => it({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": d(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": p() || e.label == null,
          "mdc-text-field--label-floating": s(he) || m() != null && m() !== "",
          "mdc-text-field--with-leading-icon": r(M()) ? e.leadingIcon : M(),
          "mdc-text-field--with-trailing-icon": r(I()) ? e.trailingIcon : I(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": E(),
          ...$,
          [l()]: !0
        }),
        () => Object.entries(ue).map(([Re, ze]) => `${Re}: ${ze};`).concat([u()]).join(" "),
        () => Ha(U, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var ge = Q(B);
      {
        var Ze = (Re) => {
          var ze = Xd(), je = ae(ze);
          {
            var Ot = (ht) => {
              var At = zd();
              L(ht, At);
            };
            oe(je, (ht) => {
              f() === "filled" && ht(Ot);
            });
          }
          var fn = X(je, 2);
          {
            var Xe = (ht) => {
              {
                let At = /* @__PURE__ */ se(() => s(he) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), Ne = /* @__PURE__ */ se(() => gt(U, "label$"));
                _e(
                  Yr(ht, nt(
                    {
                      get floatAbove() {
                        return s(At);
                      },
                      get required() {
                        return c();
                      },
                      wrapped: !0
                    },
                    () => s(Ne),
                    {
                      children: (Et, Fn) => {
                        var $t = ve(), vt = ae($t);
                        {
                          var Dt = (Xt) => {
                          }, en = (Xt) => {
                            var tn = tt();
                            Fe(() => ye(tn, e.label)), L(Xt, tn);
                          }, hn = (Xt) => {
                            var tn = ve(), Ht = ae(tn);
                            Te(Ht, () => e.label), L(Xt, tn);
                          };
                          oe(vt, (Xt) => {
                            e.label == null ? Xt(Dt) : typeof e.label == "string" ? Xt(en, 1) : Xt(hn, -1);
                          });
                        }
                        L(Et, $t);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Et) => G(Et),
                  () => G()
                );
              }
            };
            oe(fn, (ht) => {
              !p() && e.label != null && ht(Xe);
            });
          }
          L(Re, ze);
        };
        oe(ge, (Re) => {
          !h() && f() !== "outlined" && Re(Ze);
        });
      }
      var ot = X(ge, 2);
      {
        var wt = (Re) => {
          {
            let ze = /* @__PURE__ */ se(() => p() || e.label == null), je = /* @__PURE__ */ se(() => gt(U, "outline$"));
            _e(
              ao(Re, nt(
                {
                  get noLabel() {
                    return s(ze);
                  }
                },
                () => s(je),
                {
                  children: (Ot, fn) => {
                    var Xe = ve(), ht = ae(Xe);
                    {
                      var At = (Ne) => {
                        {
                          let Et = /* @__PURE__ */ se(() => s(he) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), Fn = /* @__PURE__ */ se(() => gt(U, "label$"));
                          _e(
                            Yr(Ne, nt(
                              {
                                get floatAbove() {
                                  return s(Et);
                                },
                                get required() {
                                  return c();
                                },
                                wrapped: !0
                              },
                              () => s(Fn),
                              {
                                children: ($t, vt) => {
                                  var Dt = ve(), en = ae(Dt);
                                  {
                                    var hn = (Ht) => {
                                    }, Xt = (Ht) => {
                                      var fi = tt();
                                      Fe(() => ye(fi, e.label)), L(Ht, fi);
                                    }, tn = (Ht) => {
                                      var fi = ve(), sr = ae(fi);
                                      Te(sr, () => e.label), L(Ht, fi);
                                    };
                                    oe(en, (Ht) => {
                                      e.label == null ? Ht(hn) : typeof e.label == "string" ? Ht(Xt, 1) : Ht(tn, -1);
                                    });
                                  }
                                  L($t, Dt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            ($t) => G($t),
                            () => G()
                          );
                        }
                      };
                      oe(ht, (Ne) => {
                        !p() && e.label != null && Ne(At);
                      });
                    }
                    L(Ot, Xe);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ot) => k(Ot),
              () => k()
            );
          }
        };
        oe(ot, (Re) => {
          (h() || f() === "outlined") && Re(wt);
        });
      }
      var Ut = X(ot, 2);
      Nr(Ut, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Re, ze) => {
          var je = ve(), Ot = ae(je);
          Te(Ot, () => e.leadingIcon ?? Ae), L(Re, je);
        },
        $$slots: { default: !0 }
      });
      var ki = X(Ut, 2);
      Te(ki, () => e.children ?? Ae);
      var et = X(ki, 2);
      {
        var Mt = (Re) => {
          var ze = Wd(), je = Q(ze);
          {
            let fn = /* @__PURE__ */ se(() => gt(U, "input$"));
            _e(
              Gd(je, nt(
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
                    return s(me);
                  },
                  get "aria-controls"() {
                    return s(V);
                  },
                  get "aria-describedby"() {
                    return s(V);
                  }
                },
                () => s(fn),
                {
                  onblur: (Xe) => {
                    var ht;
                    W(he, !1), W(me, !0), St(ee(), "blur", Xe), (ht = e.input$onblur) == null || ht.call(e, Xe);
                  },
                  onfocus: (Xe) => {
                    var ht;
                    W(he, !0), St(ee(), "focus", Xe), (ht = e.input$onfocus) == null || ht.call(e, Xe);
                  },
                  get value() {
                    return m();
                  },
                  set value(Xe) {
                    m(Xe);
                  },
                  get dirty() {
                    return C();
                  },
                  set dirty(Xe) {
                    C(Xe);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(Xe) {
                    E(Xe);
                  }
                }
              )),
              (Xe) => x(Xe),
              () => x()
            );
          }
          var Ot = X(je, 2);
          Te(Ot, () => e.internalCounter ?? Ae), Fe((fn) => Kn(ze, 1, fn), [
            () => Ql(it({
              "mdc-text-field__resizer": !("input$resizable" in U) || e.input$resizable
            }))
          ]), L(Re, ze);
        }, Nt = (Re) => {
          var ze = Kd(), je = ae(ze);
          {
            var Ot = (At) => {
              var Ne = ve(), Et = ae(Ne);
              {
                var Fn = (vt) => {
                  Ud(vt, {
                    children: (Dt, en) => {
                      var hn = tt();
                      Fe(() => ye(hn, e.prefix)), L(Dt, hn);
                    },
                    $$slots: { default: !0 }
                  });
                }, $t = (vt) => {
                  var Dt = ve(), en = ae(Dt);
                  Te(en, () => e.prefix ?? Ae), L(vt, Dt);
                };
                oe(Et, (vt) => {
                  typeof e.prefix == "string" ? vt(Fn) : vt($t, -1);
                });
              }
              L(At, Ne);
            };
            oe(je, (At) => {
              e.prefix != null && At(Ot);
            });
          }
          var fn = X(je, 2);
          {
            let At = /* @__PURE__ */ se(() => gt(U, "input$"));
            _e(
              Vd(fn, nt(
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
                    return s(me);
                  },
                  get "aria-controls"() {
                    return s(V);
                  },
                  get "aria-describedby"() {
                    return s(V);
                  }
                },
                () => p() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(At),
                {
                  onblur: (Ne) => {
                    var Et;
                    W(he, !1), W(me, !0), St(ee(), "blur", Ne), (Et = e.input$onblur) == null || Et.call(e, Ne);
                  },
                  onfocus: (Ne) => {
                    var Et;
                    W(he, !0), St(ee(), "focus", Ne), (Et = e.input$onfocus) == null || Et.call(e, Ne);
                  },
                  get value() {
                    return m();
                  },
                  set value(Ne) {
                    m(Ne);
                  },
                  get files() {
                    return g();
                  },
                  set files(Ne) {
                    g(Ne);
                  },
                  get dirty() {
                    return C();
                  },
                  set dirty(Ne) {
                    C(Ne);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(Ne) {
                    E(Ne);
                  }
                }
              )),
              (Ne) => x(Ne),
              () => x()
            );
          }
          var Xe = X(fn, 2);
          {
            var ht = (At) => {
              var Ne = ve(), Et = ae(Ne);
              {
                var Fn = (vt) => {
                  Nd(vt, {
                    children: (Dt, en) => {
                      var hn = tt();
                      Fe(() => ye(hn, e.suffix)), L(Dt, hn);
                    },
                    $$slots: { default: !0 }
                  });
                }, $t = (vt) => {
                  var Dt = ve(), en = ae(Dt);
                  Te(en, () => e.suffix ?? Ae), L(vt, Dt);
                };
                oe(Et, (vt) => {
                  typeof e.suffix == "string" ? vt(Fn) : vt($t, -1);
                });
              }
              L(At, Ne);
            };
            oe(Xe, (At) => {
              e.suffix != null && At(ht);
            });
          }
          L(Re, ze);
        };
        oe(et, (Re) => {
          h() && typeof m() == "string" ? Re(Mt) : Re(Nt, -1);
        });
      }
      var Zn = X(et, 2);
      Nr(Zn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Re, ze) => {
          var je = ve(), Ot = ae(je);
          Te(Ot, () => e.trailingIcon ?? Ae), L(Re, je);
        },
        $$slots: { default: !0 }
      });
      var _r = X(Zn, 2);
      {
        var Jn = (Re) => {
          {
            let ze = /* @__PURE__ */ se(() => gt(U, "ripple$"));
            _e(ro(Re, nt(() => s(ze))), (je) => ne(je), () => ne());
          }
        };
        oe(_r, (Re) => {
          !h() && f() !== "outlined" && o() && Re(Jn);
        });
      }
      _e(B, (Re) => Z = Re, () => Z), $e(B, (Re, ze) => Ln == null ? void 0 : Ln(Re, ze), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Ue,
        removeClass: Ce,
        addStyle: Lt,
        eventTarget: s(ie),
        activeTarget: s(ie),
        initPromise: K
      })), $e(B, (Re, ze) => te == null ? void 0 : te(Re, ze), a), L(_, B);
    }, Ve = (_) => {
      var B = Yd();
      dt(B, (et, Mt, Nt) => ({ class: et, style: Mt, ...Nt }), [
        () => it({
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
          [l()]: !0
        }),
        () => Object.entries(ue).map(([et, Mt]) => `${et}: ${Mt};`).concat([u()]).join(" "),
        () => Ha(U, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var ge = Q(B);
      {
        var Ze = (et) => {
          var Mt = ve(), Nt = ae(Mt);
          Te(Nt, () => e.label ?? Ae), L(et, Mt);
        };
        oe(ge, (et) => {
          typeof e.label != "string" && et(Ze);
        });
      }
      var ot = X(ge, 2);
      Nr(ot, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (et, Mt) => {
          var Nt = ve(), Zn = ae(Nt);
          Te(Zn, () => e.leadingIcon ?? Ae), L(et, Nt);
        },
        $$slots: { default: !0 }
      });
      var wt = X(ot, 2);
      Te(wt, () => e.children ?? Ae);
      var Ut = X(wt, 2);
      Nr(Ut, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (et, Mt) => {
          var Nt = ve(), Zn = ae(Nt);
          Te(Zn, () => e.trailingIcon ?? Ae), L(et, Nt);
        },
        $$slots: { default: !0 }
      });
      var ki = X(Ut, 2);
      Te(ki, () => e.line ?? Ae), _e(B, (et) => Z = et, () => Z), $e(B, (et, Mt) => Ln == null ? void 0 : Ln(et, Mt), () => ({
        ripple: o(),
        unbounded: !1,
        addClass: Ue,
        removeClass: Ce,
        addStyle: Lt
      })), $e(B, (et, Mt) => te == null ? void 0 : te(et, Mt), a), L(_, B);
    };
    oe(yt, (_) => {
      Pe ? _(He) : _(Ve, -1);
    });
  }
  var N = X(yt, 2);
  {
    var q = (_) => {
      {
        let B = /* @__PURE__ */ se(() => gt(U, "helperLine$"));
        Bd(_, nt(() => s(B), {
          children: (ge, Ze) => {
            var ot = ve(), wt = ae(ot);
            Te(wt, () => e.helper ?? Ae), L(ge, ot);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    oe(N, (_) => {
      e.helper && _(q);
    });
  }
  return L(n, ke), Qe(Se);
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
var Jd = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, $d = {
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
}, hr = {
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
}, st;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(st || (st = {}));
var Oi;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 4] = "TOP_RIGHT", n[n.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", n[n.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", n[n.TOP_START = 8] = "TOP_START", n[n.TOP_END = 12] = "TOP_END", n[n.BOTTOM_START = 9] = "BOTTOM_START", n[n.BOTTOM_END = 13] = "BOTTOM_END";
})(Oi || (Oi = {}));
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
var ti, Hn, Le = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
ti = {}, ti["" + Le.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", ti["" + Le.LIST_ITEM_CLASS] = "mdc-list-item", ti["" + Le.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", ti["" + Le.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", ti["" + Le.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", ti["" + Le.ROOT] = "mdc-list";
var Ui = (Hn = {}, Hn["" + Le.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Hn["" + Le.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Hn["" + Le.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Hn["" + Le.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Hn["" + Le.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Hn["" + Le.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Hn["" + Le.ROOT] = "mdc-deprecated-list", Hn), ni = {
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
    .` + Le.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Le.LIST_ITEM_CLASS + ` a,
    .` + Ui[Le.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ui[Le.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Le.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Le.LIST_ITEM_CLASS + ` a,
    .` + Le.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Le.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ui[Le.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ui[Le.LIST_ITEM_CLASS] + ` a,
    .` + Ui[Le.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ui[Le.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, at = {
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
var ec = ["input", "button", "textarea", "select"], rn = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    ec.indexOf(t) === -1 && n.preventDefault();
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
function tc() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function nc(n, e) {
  for (var t = /* @__PURE__ */ new Map(), i = 0; i < n; i++) {
    var r = e(i).trim();
    if (r) {
      var a = r[0].toLowerCase();
      t.has(a) || t.set(a, []), t.get(a).push({ text: r.toLowerCase(), index: i });
    }
  }
  return t.forEach(function(l) {
    l.sort(function(u, o) {
      return u.index - o.index;
    });
  }), t;
}
function Va(n, e) {
  var t = n.nextChar, i = n.focusItemAtIndex, r = n.sortedIndexByFirstChar, a = n.focusedItemIndex, l = n.skipFocus, u = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    lo(e);
  }, at.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = ic(r, a, u, e) : o = rc(r, u, e), o !== -1 && !l && i(o), o;
}
function ic(n, e, t, i) {
  var r = i.typeaheadBuffer[0], a = n.get(r);
  if (!a)
    return -1;
  if (r === i.currentFirstChar && a[i.sortedIndexCursor].index === e) {
    i.sortedIndexCursor = (i.sortedIndexCursor + 1) % a.length;
    var l = a[i.sortedIndexCursor].index;
    if (!t(l))
      return l;
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
function rc(n, e, t) {
  var i = t.typeaheadBuffer[0], r = n.get(i);
  if (!r)
    return -1;
  var a = r[t.sortedIndexCursor];
  if (a.text.lastIndexOf(t.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var l = (t.sortedIndexCursor + 1) % r.length, u = -1; l !== t.sortedIndexCursor; ) {
    var o = r[l], d = o.text.lastIndexOf(t.typeaheadBuffer, 0) === 0, c = !e(o.index);
    if (d && c) {
      u = l;
      break;
    }
    l = (l + 1) % r.length;
  }
  return u !== -1 ? (t.sortedIndexCursor = u, r[t.sortedIndexCursor].index) : -1;
}
function so(n) {
  return n.typeaheadBuffer.length > 0;
}
function lo(n) {
  n.typeaheadBuffer = "";
}
function Ws(n, e) {
  var t = n.event, i = n.isTargetListItem, r = n.focusedItemIndex, a = n.focusItemAtIndex, l = n.sortedIndexByFirstChar, u = n.isItemAtIndexDisabled, o = ut(t) === "ArrowLeft", d = ut(t) === "ArrowUp", c = ut(t) === "ArrowRight", h = ut(t) === "ArrowDown", f = ut(t) === "Home", p = ut(t) === "End", v = ut(t) === "Enter", m = ut(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || o || d || c || h || f || p || v)
    return -1;
  var g = !m && t.key.length === 1;
  if (g) {
    rn(t);
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: l,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Va(E, e);
  }
  if (!m)
    return -1;
  i && rn(t);
  var D = i && so(e);
  if (D) {
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: l,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Va(E, e);
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
function ac(n) {
  return n instanceof Array;
}
var sc = ["Alt", "Control", "Meta", "Shift"];
function Ks(n) {
  var e = new Set(n ? sc.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(i) {
      return e.has(i);
    }) && t.length === e.size;
  };
}
var lc = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = at.UNSET_INDEX, i.focusedItemIndex = at.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = tc(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ni;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Le;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return at;
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
      if (t !== at.UNSET_INDEX) {
        var i = this.adapter.listItemAtIndexHasClass(t, Le.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = at.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
        var a = this.adapter.listItemAtIndexHasClass(r, Le.LIST_ITEM_SELECTED_CLASS), l = this.adapter.listItemAtIndexHasClass(r, Le.LIST_ITEM_ACTIVATED_CLASS);
        if (a || l) {
          t = r;
          break;
        }
      }
      return t;
    }, e.prototype.setHasTypeahead = function(t) {
      this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && so(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(t, Le.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, i, r) {
      var a = this, l, u = ut(t) === "ArrowLeft", o = ut(t) === "ArrowUp", d = ut(t) === "ArrowRight", c = ut(t) === "ArrowDown", h = ut(t) === "Home", f = ut(t) === "End", p = ut(t) === "Enter", v = ut(t) === "Spacebar", m = this.isVertical && c || !this.isVertical && d, g = this.isVertical && o || !this.isVertical && u, E = t.key === "A" || t.key === "a", D = Ks(t);
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
          Ws(C, this.typeaheadState);
        }
        return;
      }
      var O = this.adapter.getFocusedElementIndex();
      if (!(O === -1 && (O = r, O < 0))) {
        if (m && D([]))
          rn(t), this.focusNextElement(O);
        else if (g && D([]))
          rn(t), this.focusPrevElement(O);
        else if (m && D(["Shift"]) && this.isCheckboxList) {
          rn(t);
          var S = this.focusNextElement(O);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (g && D(["Shift"]) && this.isCheckboxList) {
          rn(t);
          var S = this.focusPrevElement(O);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (h && D([]))
          rn(t), this.focusFirstElement();
        else if (f && D([]))
          rn(t), this.focusLastElement();
        else if (h && D(["Control", "Shift"]) && this.isCheckboxList) {
          if (rn(t), this.isIndexDisabled(O))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, O, O);
        } else if (f && D(["Control", "Shift"]) && this.isCheckboxList) {
          if (rn(t), this.isIndexDisabled(O))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(O, this.adapter.getListItemCount() - 1, O);
        } else if (E && D(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === at.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((p || v) && D([])) {
          if (i) {
            var w = t.target;
            if (w && w.tagName === "A" && p || (rn(t), this.isIndexDisabled(O)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(O, !1), this.adapter.notifyAction(O));
          }
        } else if ((p || v) && D(["Shift"]) && this.isCheckboxList) {
          var w = t.target;
          if (w && w.tagName === "A" && p || (rn(t), this.isIndexDisabled(O)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((l = this.lastSelectedIndex) !== null && l !== void 0 ? l : O, O, O), this.adapter.notifyAction(O));
        }
        if (this.hasTypeahead) {
          var C = {
            event: t,
            focusItemAtIndex: function(I) {
              a.focusItemAtIndex(I);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(I) {
              return a.isIndexDisabled(I);
            }
          };
          Ws(C, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, i, r) {
      var a, l = Ks(r);
      t !== at.UNSET_INDEX && (this.isIndexDisabled(t) || (l([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, i), this.adapter.notifyAction(t)) : this.isCheckboxList && l(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : t, t, t), this.adapter.notifyAction(t))));
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
      this.isIndexValid(t, !1) && (i ? (this.adapter.removeClassForElementIndex(t, Le.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, ni.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, Le.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, ni.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === t && !i.forceUpdate)) {
        var r = Le.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = Le.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== at.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== at.UNSET_INDEX && this.adapter.addClassForElementIndex(t, r), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === at.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, ni.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, r = i ? ni.ARIA_CURRENT : ni.ARIA_SELECTED;
      if (this.selectedIndex !== at.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), t !== at.UNSET_INDEX) {
        var a = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, r, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? ni.ARIA_SELECTED : ni.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, i) {
      i === void 0 && (i = {});
      var r = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !i.forceUpdate) && (this.selectedIndex !== at.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), this.adapter.setAttributeForElementIndex(t, r, "true"), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, i) {
      i === void 0 && (i = {});
      for (var r = this.selectedIndex, a = i.isUserInteraction ? new Set(r === at.UNSET_INDEX ? [] : r) : null, l = this.getSelectionAttribute(), u = [], o = 0; o < this.adapter.getListItemCount(); o++) {
        var d = a == null ? void 0 : a.has(o), c = t.indexOf(o) >= 0;
        c !== d && u.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, c), this.adapter.setAttributeForElementIndex(o, l, c ? "true" : "false");
      }
      this.selectedIndex = t, i.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(t, i, r) {
      this.lastSelectedIndex = r;
      for (var a = new Set(this.selectedIndex === at.UNSET_INDEX ? [] : this.selectedIndex), l = !(a != null && a.has(r)), u = ks([t, i].sort(), 2), o = u[0], d = u[1], c = this.getSelectionAttribute(), h = [], f = o; f <= d; f++)
        if (!this.isIndexDisabled(f)) {
          var p = a.has(f);
          l !== p && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, l), this.adapter.setAttributeForElementIndex(f, c, "" + l), l ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = ud([], ks(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === at.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== at.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== at.UNSET_INDEX ? this.selectedIndex : ac(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, i) {
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
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === at.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(t) {
      var i = this.adapter.getListItemCount();
      return t >= 0 && t < i;
    }, e.prototype.setSelectedIndexOnAction = function(t, i) {
      this.lastSelectedIndex = t, this.isCheckboxList ? (this.toggleCheckboxAtIndex(t, i), this.adapter.notifySelectionChange([t])) : this.setSelectedIndex(t, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(t, i) {
      var r = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(t), l;
      i ? l = a : (l = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(t, l)), this.adapter.setAttributeForElementIndex(t, r, l ? "true" : "false");
      var u = this.selectedIndex === at.UNSET_INDEX ? [] : this.selectedIndex.slice();
      l ? u.push(t) : u = u.filter(function(o) {
        return o !== t;
      }), this.selectedIndex = u;
    }, e.prototype.focusItemAtIndex = function(t) {
      this.adapter.focusItemAtIndex(t), this.focusedItemIndex = t;
    }, e.prototype.checkboxListToggleAll = function(t, i) {
      var r = this.adapter.getListItemCount();
      if (t.length === r)
        this.setCheckboxAtIndex([], { isUserInteraction: i });
      else {
        for (var a = [], l = 0; l < r; l++)
          (!this.isIndexDisabled(l) || t.indexOf(l) > -1) && a.push(l);
        this.setCheckboxAtIndex(a, { isUserInteraction: i });
      }
    }, e.prototype.typeaheadMatchItem = function(t, i, r) {
      var a = this;
      r === void 0 && (r = !1);
      var l = {
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
      return Va(l, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return nc(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      lo(this.typeaheadState);
    }, e;
  }(En)
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
var oo = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = Oi.TOP_START, i.originCorner = Oi.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Jd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $d;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return hr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return Oi;
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
      this.originCorner = this.originCorner ^ st.RIGHT;
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
        }, hr.TRANSITION_OPEN_DURATION);
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
          }, hr.TRANSITION_CLOSE_DURATION);
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
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), a = this.hasBit(i, st.BOTTOM) ? "bottom" : "top", l = this.hasBit(i, st.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), d = this.measurements, c = d.anchorSize, h = d.surfaceSize, f = (t = {}, t[l] = u, t[a] = o, t);
      c.width / h.width > hr.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (l = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(l + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, st.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var t = this.originCorner, i = this.measurements, r = i.viewportDistance, a = i.anchorSize, l = i.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, st.BOTTOM), d, c;
      o ? (d = r.top - u + this.anchorMargin.bottom, c = r.bottom - u - this.anchorMargin.bottom) : (d = r.top - u + this.anchorMargin.top, c = r.bottom - u + a.height - this.anchorMargin.top);
      var h = c - l.height > 0;
      !h && d > c + this.openBottomBias && (t = this.setBit(t, st.BOTTOM));
      var f = this.adapter.isRtl(), p = this.hasBit(this.anchorCorner, st.FLIP_RTL), v = this.hasBit(this.anchorCorner, st.RIGHT) || this.hasBit(t, st.RIGHT), m = !1;
      f && p ? m = !v : m = v;
      var g, E;
      m ? (g = r.left + a.width + this.anchorMargin.right, E = r.right - this.anchorMargin.right) : (g = r.left + this.anchorMargin.left, E = r.right + a.width - this.anchorMargin.left);
      var D = g - l.width > 0, S = E - l.width > 0, C = this.hasBit(t, st.FLIP_RTL) && this.hasBit(t, st.RIGHT);
      return S && C && f || !D && C ? t = this.unsetBit(t, st.RIGHT) : (D && m && f || D && !m && v || !S && g >= E) && (t = this.setBit(t, st.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, r = 0, a = this.hasBit(t, st.BOTTOM), l = this.hasBit(this.anchorCorner, st.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (r = i.top + this.anchorMargin.top - u, l || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, l && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, st.RIGHT), a = this.hasBit(this.anchorCorner, st.RIGHT);
      if (r) {
        var l = a ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? l - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : l;
      }
      return a ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, st.BOTTOM), a = this.hasBit(this.anchorCorner, st.BOTTOM), l = 0;
      return r ? l = a ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : l = a ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, l;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var i, r, a = this.measurements, l = a.windowScroll, u = a.viewportDistance, o = a.surfaceSize, d = a.viewportSize, c = Object.keys(t);
      try {
        for (var h = bn(c), f = h.next(); !f.done; f = h.next()) {
          var p = f.value, v = t[p] || 0;
          if (this.isHorizontallyCenteredOnViewport && (p === "left" || p === "right")) {
            t[p] = (d.width - o.width) / 2;
            continue;
          }
          v += u[p], this.isFixedPosition || (p === "top" ? v += l.y : p === "bottom" ? v -= l.y : p === "left" ? v += l.x : v -= l.x), t[p] = v;
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
      }, hr.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(t, i) {
      return !!(t & i);
    }, e.prototype.setBit = function(t, i) {
      return t | i;
    }, e.prototype.unsetBit = function(t, i) {
      return t ^ i;
    }, e.prototype.isFinite = function(t) {
      return typeof t == "number" && isFinite(t);
    }, e;
  }(En)
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
var Gi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Ni = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, oc = {
  FOCUS_ROOT_INDEX: -1
}, Vi;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.LIST_ROOT = 1] = "LIST_ROOT", n[n.FIRST_ITEM = 2] = "FIRST_ITEM", n[n.LAST_ITEM = 3] = "LAST_ITEM";
})(Vi || (Vi = {}));
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
var uc = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      var i = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = Vi.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ni;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return oc;
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
        var a = this.adapter.getAttributeFromElementAtIndex(r, Ni.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var l = i.adapter.getElementIndex(t);
          l >= 0 && i.adapter.isSelectableItemAtIndex(l) && i.setSelectedIndex(l);
        }, oo.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Vi.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Vi.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Vi.NONE:
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
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, Ni.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, Gi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Gi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Ni.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, i) {
      this.validatedIndex(t), i ? (this.adapter.removeClassFromElementAtIndex(t, Le.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Ni.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, Le.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Ni.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(t) {
      var i = this.adapter.getMenuItemCount(), r = t >= 0 && t < i;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(En)
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
var Je = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Ia = {
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
}, mi = {
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
var dc = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = mi.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Je;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return mi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ia;
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
      i === void 0 && (i = !1), r === void 0 && (r = !1), !(t >= this.adapter.getMenuItemCount()) && (t === mi.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), i && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
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
      return t !== mi.UNSET_INDEX ? i[t] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(t) {
      this.disabled = t, this.disabled ? (this.adapter.addClass(Je.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(Je.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(Je.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, i = this.adapter.hasClass(Je.FOCUSED), r = t || i, a = this.adapter.hasClass(Je.REQUIRED);
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
      this.adapter.removeClass(Je.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(Je.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(Je.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(Je.FOCUSED))) {
        var i = ut(t) === be.ENTER, r = ut(t) === be.SPACEBAR, a = ut(t) === be.ARROW_UP, l = ut(t) === be.ARROW_DOWN, u = t.ctrlKey || t.metaKey;
        if (!u && (!r && t.key && t.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var o = r ? " " : t.key, d = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
          d >= 0 && this.setSelectedIndex(d), t.preventDefault();
          return;
        }
        !i && !r && !a && !l || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var i = this.adapter.hasClass(Je.FOCUSED);
        if (t) {
          var r = mi.LABEL_SCALE, a = this.adapter.getLabelWidth() * r;
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
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(Je.INVALID), this.adapter.removeMenuClass(Je.MENU_INVALID)) : (this.adapter.addClass(Je.INVALID), this.adapter.addMenuClass(Je.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(Je.REQUIRED) && !this.adapter.hasClass(Je.DISABLED) ? this.getSelectedIndex() !== mi.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(Je.REQUIRED) : this.adapter.removeClass(Je.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(Oi.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(Je.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(Je.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(Je.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(Je.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(t) {
      if (this.helperText) {
        this.helperText.setValidity(t);
        var i = this.helperText.isVisible(), r = this.helperText.getId();
        i && r ? this.adapter.setSelectAnchorAttr(Ia.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(Ia.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, mi.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(En)
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
var gi = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, Vn = {
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
var cc = (
  /** @class */
  function(n) {
    An(e, n);
    function e(t) {
      return n.call(this, qe(qe({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return gi;
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
      return this.adapter.getAttr(gi.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.setValidation = function(t) {
      t ? this.adapter.addClass(Vn.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(Vn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass(Vn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(Vn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(Vn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(Vn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var i = this.adapter.hasClass(Vn.HELPER_TEXT_VALIDATION_MSG);
      if (i) {
        var r = this.adapter.hasClass(Vn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !t || r;
        if (a) {
          this.showToScreenReader(), t ? this.adapter.removeAttr(gi.ROLE) : this.adapter.setAttr(gi.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(gi.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(gi.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(gi.ARIA_HIDDEN, "true");
    }, e;
  }(En)
), fc = /* @__PURE__ */ re("<div><!></div>");
function hc(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "style", 3, ""), a = b(e, "static", 3, !1), l = b(e, "anchor", 3, !0), u = b(e, "fixed", 3, !1), o = b(e, "open", 31, () => Oe(a())), d = b(e, "managed", 3, !1), c = b(e, "fullWidth", 3, !1), h = b(e, "quickOpen", 3, !1), f = b(e, "anchorElement", 15), p = b(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), v = b(e, "maxHeight", 3, 0), m = b(e, "horizontallyCenteredOnViewport", 3, !1), g = b(e, "openBottomBias", 3, 0), E = b(e, "neverRestoreFocus", 3, !1), D = /* @__PURE__ */ bt(e, [
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
  ]), S, C = /* @__PURE__ */ fe(void 0), O = Oe({}), w = Oe({}), M = /* @__PURE__ */ fe(void 0);
  pe("SMUI:list:role", "menu"), pe("SMUI:list:item:role", "menuitem"), Be(() => {
    var R, z;
    S && l() && !((R = S.parentElement) != null && R.classList.contains("mdc-menu-surface--anchor")) && ((z = S.parentElement) == null || z.classList.add("mdc-menu-surface--anchor"), f(S.parentElement ?? void 0));
  }), Be(() => {
    s(C) && s(C).isOpen() !== o() && (o() ? s(C).open() : s(C).close());
  }), Be(() => {
    s(C) && s(C).setQuickOpen(h());
  }), Be(() => {
    s(C) && s(C).setFixedPosition(u());
  }), Be(() => {
    s(C) && s(C).setMaxHeight(v());
  }), Be(() => {
    s(C) && s(C).setIsHorizontallyCenteredOnViewport(m());
  });
  const I = Oi;
  Be(() => {
    s(C) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(C).setAnchorCorner(I[e.anchorCorner]) : s(C).setAnchorCorner(e.anchorCorner));
  }), Be(() => {
    s(C) && s(C).setAnchorMargin(p());
  }), Be(() => {
    s(C) && s(C).setOpenBottomBias(g());
  });
  const x = Me("SMUI:menu-surface:mount"), G = Me("SMUI:menu-surface:unmount");
  kt(() => {
    W(
      C,
      new oo({
        addClass: k,
        removeClass: U,
        hasClass: ne,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          d() || o(a()), o() || St(me(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          d() || o(a()), o() || St(me(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          d() || o(!0), o() && St(me(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          o() || St(me(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (z) => me().contains(z),
        isRtl: () => getComputedStyle(me()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (z) => {
          w["transform-origin"] = z;
        },
        isFocused: () => document.activeElement === me(),
        saveFocus: () => {
          W(M, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !E() && (!S || me().contains(document.activeElement)) && s(M) && document.contains(s(M)) && "focus" in s(M) && s(M).focus();
        },
        getInnerDimensions: () => ({
          width: me().offsetWidth,
          height: me().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (z) => {
          w.left = "left" in z ? `${z.left}px` : "", w.right = "right" in z ? `${z.right}px` : "", w.top = "top" in z ? `${z.top}px` : "", w.bottom = "bottom" in z ? `${z.bottom}px` : "";
        },
        setMaxHeight: (z) => {
          w["max-height"] = z;
        }
      }),
      !0
    );
    const R = {
      get open() {
        return o();
      },
      set open(z) {
        o(z);
      },
      closeProgrammatic: Pe
    };
    return x && x(R), s(C).init(), () => {
      var P, j;
      G && G(R);
      const z = s(C).isHoistedElement;
      (P = s(C)) == null || P.destroy(), z && ((j = me().parentNode) == null || j.removeChild(me()));
    };
  }), di(() => {
    var R;
    l() && me() && ((R = me().parentElement) == null || R.classList.remove("mdc-menu-surface--anchor"));
  });
  function ne(R) {
    return R in O ? O[R] : me().classList.contains(R);
  }
  function k(R) {
    O[R] || (O[R] = !0);
  }
  function U(R) {
    (!(R in O) || O[R]) && (O[R] = !1);
  }
  function Pe(R) {
    var z;
    (z = s(C)) == null || z.close(R), o(!1);
  }
  function Z(R) {
    s(C) && o() && !d() && s(C).handleBodyClick(R);
  }
  function F() {
    return o();
  }
  function H(R) {
    o(R);
  }
  function $(R, z) {
    if (s(C) == null)
      throw new Error("Instance is not defined.");
    return s(C).setAbsolutePosition(R, z);
  }
  function ue(R) {
    if (s(C) == null)
      throw new Error("Instance is not defined.");
    return s(C).setIsHoisted(R);
  }
  function V() {
    if (s(C) == null)
      throw new Error("Instance is not defined.");
    return s(C).isFixed();
  }
  function he() {
    if (s(C) == null)
      throw new Error("Instance is not defined.");
    return s(C).flipCornerHorizontally();
  }
  function me() {
    return S;
  }
  var le = {
    isOpen: F,
    setOpen: H,
    setAbsolutePosition: $,
    setIsHoisted: ue,
    isFixed: V,
    flipCornerHorizontally: he,
    getElement: me
  }, ce = fc();
  Kl("click", Tl.body, Z, !0);
  var T = (R) => {
    var z;
    s(C) && !d() && s(C).handleKeydown(R), (z = e.onkeydown) == null || z.call(e, R);
  };
  dt(
    ce,
    (R, z) => ({
      class: R,
      style: z,
      role: "dialog",
      ...D,
      onkeydown: T
    }),
    [
      () => it({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": c(),
        ...O,
        [i()]: !0
      }),
      () => Object.entries(w).map(([R, z]) => `${R}: ${z};`).concat([r()]).join(" ")
    ]
  );
  var K = Q(ce);
  return Te(K, () => e.children ?? Ae), _e(ce, (R) => S = R, () => S), $e(ce, (R, z) => te == null ? void 0 : te(R, z), t), L(n, ce), Qe(le);
}
function ba(n, { addClass: e = (i) => n.classList.add(i), removeClass: t = (i) => n.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function vc(n, e) {
  Ye(e, !0);
  const { closest: t } = os;
  let i = b(e, "use", 19, () => []), r = b(e, "class", 3, ""), a = b(e, "open", 15, !1), l = b(e, "anchorElement", 15), u = b(e, "managed", 3, !1), o = /* @__PURE__ */ bt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), d, c = /* @__PURE__ */ fe(void 0), h = /* @__PURE__ */ fe(void 0), f = /* @__PURE__ */ fe(void 0);
  pe("SMUI:menu-surface:mount", (I) => {
    s(h) || W(h, I, !0);
  });
  const p = Me("SMUI:list:mount");
  pe("SMUI:list:mount", (I) => {
    s(f) || W(f, I, !0), p && p(I);
  });
  const v = Me("SMUI:menu:mount"), m = Me("SMUI:menu:unmount");
  kt(() => (W(
    c,
    new uc({
      addClassToElementAtIndex: (I, x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(I, x);
      },
      removeClassFromElementAtIndex: (I, x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(I, x);
      },
      addAttributeToElementAtIndex: (I, x, G) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(I, x, G);
      },
      removeAttributeFromElementAtIndex: (I, x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(I, x);
      },
      getAttributeFromElementAtIndex: (I, x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(I, x);
      },
      elementContainsClass: (I, x) => I.classList.contains(x),
      closeSurface: (I) => {
        var x;
        u() || ((x = s(h)) == null || x.closeProgrammatic(I), St(w(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (I) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((x) => x.element).indexOf(I);
      },
      notifySelected: (I) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        St(w(), "SMUIMenuSelected", {
          index: I.index,
          item: s(f).getOrderedList()[I.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (I) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(I);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (I) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!t(s(f).getOrderedList()[I].element, `.${Gi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (I) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const x = s(f).getOrderedList(), G = t(x[I].element, `.${Gi.MENU_SELECTION_GROUP}`), ne = G == null ? void 0 : G.querySelector(`.${Gi.MENU_SELECTED_LIST_ITEM}`);
        return ne ? x.map((k) => k.element).indexOf(ne) : -1;
      }
    }),
    !0
  ), v && v(s(c)), s(c).init(), () => {
    var I;
    m && s(c) && m(s(c)), (I = s(c)) == null || I.destroy();
  }));
  function g(I) {
    s(c) && s(c).handleKeydown(I);
  }
  function E() {
    return a();
  }
  function D(I) {
    a(I);
  }
  function S(I) {
    if (s(c) == null)
      throw new Error("Instance is undefined.");
    s(c).setDefaultFocusState(I);
  }
  function C() {
    if (s(c) == null)
      throw new Error("Instance is undefined.");
    return s(c).getSelectedIndex();
  }
  function O() {
    return d;
  }
  function w() {
    return d.getElement();
  }
  var M = {
    isOpen: E,
    setOpen: D,
    setDefaultFocusState: S,
    getSelectedIndex: C,
    getMenuSurface: O,
    getElement: w
  };
  {
    let I = /* @__PURE__ */ se(() => it({ "mdc-menu": !0, [r()]: !0 }));
    _e(
      hc(n, nt(
        {
          get use() {
            return i();
          },
          get class() {
            return s(I);
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
            s(c) && s(c).handleMenuSurfaceOpened(), (G = e.onSMUIMenuSurfaceOpened) == null || G.call(e, x);
          },
          onSMUIListAction: (x) => {
            var G;
            s(c) && s(f) && s(c).handleItemAction(s(f).getOrderedList()[x.detail.index].element), (G = e.onSMUIListAction) == null || G.call(e, x);
          },
          get open() {
            return a();
          },
          set open(x) {
            a(x);
          },
          get anchorElement() {
            return l();
          },
          set anchorElement(x) {
            l(x);
          },
          children: (x, G) => {
            var ne = ve(), k = ae(ne);
            Te(k, () => e.children ?? Ae), L(x, ne);
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
function pc(n, e) {
  Ye(e, !0);
  const { closest: t, matches: i } = os;
  let r = Me("SMUI:list:nav"), a = b(e, "use", 19, () => []), l = b(e, "class", 3, ""), u = b(e, "nonInteractive", 3, !1), o = b(e, "dense", 3, !1), d = b(e, "textualList", 3, !1), c = b(e, "avatarList", 3, !1), h = b(e, "iconList", 3, !1), f = b(e, "imageList", 3, !1), p = b(e, "thumbnailList", 3, !1), v = b(e, "videoList", 3, !1), m = b(e, "twoLine", 3, !1), g = b(e, "threeLine", 3, !1), E = b(e, "vertical", 3, !0), D = b(e, "wrapFocus", 19, () => Me("SMUI:list:wrapFocus") ?? !1), S = b(e, "singleSelection", 3, !1), C = b(e, "disabledItemsFocusable", 3, !1), O = b(e, "selectedIndex", 31, () => -1), w = b(e, "radioList", 3, !1), M = b(e, "checkList", 3, !1), I = b(e, "hasTypeahead", 3, !1), x = b(e, "component", 3, us), G = b(e, "tag", 3, r ? "nav" : "ul"), ne = /* @__PURE__ */ bt(e, [
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
  ]), k, U = /* @__PURE__ */ fe(void 0), Pe = [], Z = Me("SMUI:list:role");
  const F = /* @__PURE__ */ new WeakMap();
  let H = Me("SMUI:dialog:selection"), $ = Me("SMUI:addLayoutListener"), ue;
  pe("SMUI:list:nonInteractive", u()), pe("SMUI:separator:context", "list"), Z || (S() ? (Z = "listbox", pe("SMUI:list:item:role", "option")) : w() ? (Z = "radiogroup", pe("SMUI:list:item:role", "radio")) : M() ? (Z = "group", pe("SMUI:list:item:role", "checkbox")) : (Z = "list", pe("SMUI:list:item:role", void 0))), Be(() => {
    s(U) && s(U).setVerticalOrientation(E());
  }), Be(() => {
    s(U) && s(U).setWrapFocus(D());
  }), Be(() => {
    s(U) && s(U).setHasTypeahead(I());
  }), Be(() => {
    s(U) && s(U).setSingleSelection(S());
  }), Be(() => {
    s(U) && s(U).setDisabledItemsFocusable(C());
  }), Be(() => {
    s(U) && S() && J() !== O() && s(U).setSelectedIndex(O());
  }), $ && (ue = $(Lt)), pe("SMUI:list:item:mount", (N) => {
    Pe.push(N), F.set(N.element, N), S() && N.selected && O(Ce(N.element));
  }), pe("SMUI:list:item:unmount", (N) => {
    const q = (N && Pe.findIndex((_) => _ === N)) ?? -1;
    q !== -1 && (Pe.splice(q, 1), F.delete(N.element));
  });
  const V = Me("SMUI:list:mount"), he = Me("SMUI:list:unmount");
  kt(() => {
    W(
      U,
      new lc({
        addClassForElementIndex: P,
        focusItemAtIndex: Se,
        getAttributeForElementIndex: (q, _) => {
          var B;
          return ((B = R()[q]) == null ? void 0 : B.getAttr(_)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? R().map((q) => q.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => Pe.length,
        getPrimaryTextAtIndex: Ue,
        hasCheckboxAtIndex: (q) => {
          var _;
          return ((_ = R()[q]) == null ? void 0 : _.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (q) => {
          var _;
          return ((_ = R()[q]) == null ? void 0 : _.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (q) => {
          const _ = R()[q];
          return ((_ == null ? void 0 : _.hasCheckbox) && _.checked) ?? !1;
        },
        isFocusInsideList: () => k != null && ke() !== document.activeElement && ke().contains(document.activeElement),
        isRootFocused: () => k != null && document.activeElement === ke(),
        listItemAtIndexHasClass: z,
        notifyAction: (q) => {
          O(q), k != null && St(ke(), "SMUIListAction", { index: q });
        },
        notifySelectionChange: (q) => {
          k != null && St(ke(), "SMUIListSelectionChange", { changedIndices: q });
        },
        removeClassForElementIndex: j,
        setAttributeForElementIndex: ie,
        setCheckedCheckboxOrRadioAtIndex: (q, _) => {
          R()[q].checked = _;
        },
        setTabIndexForListItemChildren: (q, _) => {
          const B = R()[q];
          Array.prototype.forEach.call(B.element.querySelectorAll("button:not(:disabled), a"), (Ze) => {
            Ze.setAttribute("tabindex", _);
          });
        }
      }),
      !0
    );
    const N = {
      get element() {
        return ke();
      },
      get items() {
        return Pe;
      },
      get typeaheadInProgress() {
        if (!s(U))
          throw new Error("Instance is undefined.");
        return s(U).isTypeaheadInProgress();
      },
      typeaheadMatchItem(q, _) {
        if (!s(U))
          throw new Error("Instance is undefined.");
        return s(U).typeaheadMatchItem(
          q,
          _,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: R,
      focusItemAtIndex: Se,
      addClassForElementIndex: P,
      removeClassForElementIndex: j,
      setAttributeForElementIndex: ie,
      removeAttributeForElementIndex: Ee,
      getAttributeFromElementIndex: Ge,
      getPrimaryTextAtIndex: Ue
    };
    return V && V(N), s(U).init(), s(U).layout(), () => {
      var q;
      he && he(N), (q = s(U)) == null || q.destroy();
    };
  }), di(() => {
    ue && ue();
  });
  function me(N) {
    s(U) && N.target && s(U).handleKeydown(N, N.target.classList.contains("mdc-deprecated-list-item"), Ce(N.target));
  }
  function le(N) {
    s(U) && N.target && s(U).handleFocusIn(Ce(N.target));
  }
  function ce(N) {
    s(U) && N.target && s(U).handleFocusOut(Ce(N.target));
  }
  function T(N) {
    s(U) && N.target && s(U).handleClick(Ce(N.target), !i(N.target, 'input[type="checkbox"], input[type="radio"]'), N);
  }
  function K(N) {
    if (w() || M()) {
      const q = Ce(N.target);
      if (q !== -1) {
        const _ = R()[q];
        _ && (w() && !_.checked || M()) && (i(N.detail.target, 'input[type="checkbox"], input[type="radio"]') || (_.checked = !_.checked), _.activateRipple(), window.requestAnimationFrame(() => {
          _.deactivateRipple();
        }));
      }
    }
  }
  function R() {
    return k == null ? [] : [...ke().children].map((N) => F.get(N)).filter((N) => N && N._smui_list_item_accessor);
  }
  function z(N, q) {
    const _ = R()[N];
    return (_ && _.hasClass(q)) ?? !1;
  }
  function P(N, q) {
    const _ = R()[N];
    _ && _.addClass(q);
  }
  function j(N, q) {
    const _ = R()[N];
    _ && _.removeClass(q);
  }
  function ie(N, q, _) {
    const B = R()[N];
    B && B.addAttr(q, _);
  }
  function Ee(N, q) {
    const _ = R()[N];
    _ && _.removeAttr(q);
  }
  function Ge(N, q) {
    const _ = R()[N];
    return _ ? _.getAttr(q) : null;
  }
  function Ue(N) {
    const q = R()[N];
    return (q && q.getPrimaryText()) ?? "";
  }
  function Ce(N) {
    const q = t(N, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return q && i(q, ".mdc-deprecated-list-item") ? R().map((_) => _ == null ? void 0 : _.element).indexOf(q) : -1;
  }
  function Lt() {
    if (!s(U))
      throw new Error("Instance is undefined.");
    return s(U).layout();
  }
  function Zt(N, q) {
    if (!s(U))
      throw new Error("Instance is undefined.");
    return s(U).setEnabled(N, q);
  }
  function Jt() {
    if (!s(U))
      throw new Error("Instance is undefined.");
    return s(U).isTypeaheadInProgress();
  }
  function J() {
    if (!s(U))
      throw new Error("Instance is undefined.");
    return s(U).getSelectedIndex();
  }
  function ee() {
    if (!s(U))
      throw new Error("Instance is undefined.");
    return s(U).getFocusedItemIndex();
  }
  function Se(N) {
    const q = R()[N];
    q && "focus" in q.element && q.element.focus();
  }
  function ke() {
    return k.getElement();
  }
  var yt = {
    layout: Lt,
    setEnabled: Zt,
    getTypeaheadInProgress: Jt,
    getSelectedIndex: J,
    getFocusedItemIndex: ee,
    focusItemAtIndex: Se,
    getElement: ke
  }, He = ve(), Ve = ae(He);
  {
    let N = /* @__PURE__ */ se(() => it({
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
      [l()]: !0
    }));
    ls(Ve, x, (q, _) => {
      _e(
        _(q, nt(
          {
            get tag() {
              return G();
            },
            get use() {
              return a();
            },
            get class() {
              return s(N);
            },
            get role() {
              return Z;
            }
          },
          () => ne,
          {
            onkeydown: (B) => {
              var ge;
              me(B), (ge = e.onkeydown) == null || ge.call(e, B);
            },
            onfocusin: (B) => {
              var ge;
              le(B), (ge = e.onfocusin) == null || ge.call(e, B);
            },
            onfocusout: (B) => {
              var ge;
              ce(B), (ge = e.onfocusout) == null || ge.call(e, B);
            },
            onclick: (B) => {
              var ge;
              T(B), (ge = e.onclick) == null || ge.call(e, B);
            },
            onSMUIAction: (B) => {
              var ge;
              K(B), (ge = e.onSMUIAction) == null || ge.call(e, B);
            },
            children: (B, ge) => {
              var Ze = ve(), ot = ae(Ze);
              Te(ot, () => e.children ?? Ae), L(B, Ze);
            },
            $$slots: { default: !0 }
          }
        )),
        (B) => k = B,
        () => k
      );
    });
  }
  return L(n, He), Qe(yt);
}
let mc = 0;
var gc = /* @__PURE__ */ re('<span class="mdc-deprecated-list-item__ripple"></span>'), Ic = /* @__PURE__ */ re("<!><!>", 1);
function bc(n, e) {
  Ye(e, !0);
  let t = () => {
  };
  function i(P) {
    return P === t;
  }
  let r = Me("SMUI:list:item:nav"), a = b(e, "use", 19, () => []), l = b(e, "class", 3, ""), u = b(e, "style", 3, ""), o = b(e, "nonInteractive", 19, () => Me("SMUI:list:nonInteractive") ?? !1), d = b(e, "ripple", 19, () => !o()), c = b(e, "wrapper", 3, !1), h = b(e, "activated", 15, !1), f = b(e, "role", 19, () => c() ? "presentation" : Me("SMUI:list:item:role")), p = b(e, "selected", 15, !1), v = b(e, "disabled", 3, !1), m = b(e, "skipRestoreFocus", 3, !1), g = b(e, "tabindex", 15, t), E = b(e, "inputId", 19, () => "SMUI-form-field-list-" + mc++), D = b(e, "component", 3, us), S = b(e, "tag", 19, () => r ? e.href ? "a" : "span" : "li"), C = /* @__PURE__ */ bt(e, [
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
  let O, w = Oe({}), M = Oe({}), I = Oe({}), x = /* @__PURE__ */ fe(void 0), G = /* @__PURE__ */ fe(void 0);
  const ne = /* @__PURE__ */ se(() => i(g()) ? !o() && !v() && (p() || s(x) && s(x).checked) ? 0 : -1 : g());
  pe("SMUI:generic:input:props", { id: E() }), pe("SMUI:separator:context", void 0), pe("SMUI:generic:input:mount", (P) => {
    ("_smui_checkbox_accessor" in P || "_smui_radio_accessor" in P) && W(x, P, !0);
  }), pe("SMUI:generic:input:unmount", () => {
    W(x, void 0);
  });
  const k = Me("SMUI:list:item:mount"), U = Me("SMUI:list:item:unmount");
  kt(() => {
    if (!p() && !o()) {
      let j = !0, ie = O.getElement();
      for (; ie.previousElementSibling; )
        if (ie = ie.previousElementSibling, ie.nodeType === 1 && ie.classList.contains("mdc-deprecated-list-item") && !ie.classList.contains("mdc-deprecated-list-item--disabled")) {
          j = !1;
          break;
        }
      j && W(G, window.requestAnimationFrame(() => he(ie)), !0);
    }
    const P = {
      _smui_list_item_accessor: !0,
      get element() {
        return T();
      },
      get selected() {
        return p();
      },
      set selected(j) {
        p(j);
      },
      hasClass: Pe,
      addClass: Z,
      removeClass: F,
      getAttr: $,
      addAttr: ue,
      removeAttr: V,
      getPrimaryText: ce,
      // For inputs within item.
      get checked() {
        return (s(x) && s(x).checked) ?? !1;
      },
      set checked(j) {
        s(x) && (s(x).checked = !!j);
      },
      get hasCheckbox() {
        return !!(s(x) && "_smui_checkbox_accessor" in s(x));
      },
      get hasRadio() {
        return !!(s(x) && "_smui_radio_accessor" in s(x));
      },
      activateRipple() {
        s(x) && s(x).activateRipple();
      },
      deactivateRipple() {
        s(x) && s(x).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: le,
      get tabindex() {
        return s(ne);
      },
      set tabindex(j) {
        g(j);
      },
      get disabled() {
        return v();
      },
      get activated() {
        return h();
      },
      set activated(j) {
        h(j);
      }
    };
    return k && k(P), () => {
      U && U(P);
    };
  }), di(() => {
    s(G) && window.cancelAnimationFrame(s(G));
  });
  function Pe(P) {
    return P in w ? w[P] : T().classList.contains(P);
  }
  function Z(P) {
    w[P] || (w[P] = !0);
  }
  function F(P) {
    (!(P in w) || w[P]) && (w[P] = !1);
  }
  function H(P, j) {
    M[P] != j && (j === "" || j == null ? delete M[P] : M[P] = j);
  }
  function $(P) {
    return P in I ? I[P] ?? null : T().getAttribute(P);
  }
  function ue(P, j) {
    I[P] !== j && (I[P] = j);
  }
  function V(P) {
    (!(P in I) || I[P] != null) && (I[P] = void 0);
  }
  function he(P) {
    let j = !0;
    for (; P.nextElementSibling; )
      if (P = P.nextElementSibling, P.nodeType === 1 && P.classList.contains("mdc-deprecated-list-item")) {
        const ie = P.attributes.getNamedItem("tabindex");
        if (ie && ie.value === "0") {
          j = !1;
          break;
        }
      }
    j && g(0);
  }
  function me(P) {
    const j = P.key === "Enter", ie = P.key === "Space";
    (j || ie) && le(P);
  }
  function le(P) {
    v() || St(T(), "SMUIAction", P);
  }
  function ce() {
    const P = T(), j = P.querySelector(".mdc-deprecated-list-item__primary-text");
    if (j)
      return j.textContent ?? "";
    const ie = P.querySelector(".mdc-deprecated-list-item__text");
    return ie ? ie.textContent ?? "" : P.textContent ?? "";
  }
  function T() {
    return O.getElement();
  }
  var K = { action: le, getPrimaryText: ce, getElement: T }, R = ve(), z = ae(R);
  {
    let P = /* @__PURE__ */ se(() => [
      ...o() ? [] : [
        [
          Ln,
          {
            ripple: !s(x),
            unbounded: !1,
            color: (h() || p()) && e.color == null ? "primary" : e.color,
            disabled: v(),
            addClass: Z,
            removeClass: F,
            addStyle: H
          }
        ]
      ],
      ...a()
    ]), j = /* @__PURE__ */ se(() => it({
      "mdc-deprecated-list-item": !c(),
      "mdc-deprecated-list-item__wrapper": c(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": p(),
      "mdc-deprecated-list-item--disabled": v(),
      "mdc-menu-item--selected": !r && f() === "menuitem" && p(),
      "smui-menu-item--non-interactive": o(),
      ...w,
      [l()]: !0
    })), ie = /* @__PURE__ */ se(() => Object.entries(M).map(([Ge, Ue]) => `${Ge}: ${Ue};`).concat([u()]).join(" ")), Ee = /* @__PURE__ */ se(() => m() || void 0);
    ls(z, D, (Ge, Ue) => {
      _e(
        Ue(Ge, nt(
          {
            get tag() {
              return S();
            },
            get use() {
              return s(P);
            },
            get class() {
              return s(j);
            },
            get style() {
              return s(ie);
            }
          },
          () => r && h() ? { "aria-current": "page" } : {},
          () => !r || c() ? { role: f() } : {},
          () => !r && f() === "option" ? { "aria-selected": p() ? "true" : "false" } : {},
          () => !r && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(x) && s(x).checked ? "true" : "false"
          } : {},
          () => r ? {} : { "aria-disabled": v() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(Ee);
            },
            get tabindex() {
              return s(ne);
            },
            get href() {
              return e.href;
            }
          },
          () => I,
          () => C,
          {
            onclick: (Ce) => {
              var Lt;
              le(Ce), (Lt = e.onclick) == null || Lt.call(e, Ce);
            },
            onkeydown: (Ce) => {
              var Lt;
              me(Ce), (Lt = e.onkeydown) == null || Lt.call(e, Ce);
            },
            children: (Ce, Lt) => {
              var Zt = Ic(), Jt = ae(Zt);
              {
                var J = (Se) => {
                  var ke = gc();
                  L(Se, ke);
                };
                oe(Jt, (Se) => {
                  d() && Se(J);
                });
              }
              var ee = X(Jt);
              Te(ee, () => e.children ?? Ae), L(Ce, Zt);
            },
            $$slots: { default: !0 }
          }
        )),
        (Ce) => O = Ce,
        () => O
      );
    });
  }
  return L(n, R), Qe(K);
}
let yc = 0;
var Ac = /* @__PURE__ */ re("<div><!></div>");
function Ec(n, e) {
  Ye(e, !0);
  let t = b(e, "use", 19, () => []), i = b(e, "class", 3, ""), r = b(e, "id", 19, () => "SMUI-select-helper-text-" + yc++), a = b(e, "persistent", 3, !1), l = b(e, "validationMsg", 3, !1), u = /* @__PURE__ */ bt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), o, d = /* @__PURE__ */ fe(void 0), c = Oe({}), h = Oe({}), f = /* @__PURE__ */ fe(void 0);
  const p = Me("SMUI:select:helper-text:id"), v = Me("SMUI:select:helper-text:mount"), m = Me("SMUI:select:helper-text:unmount");
  kt(() => (W(
    d,
    new cc({
      addClass: E,
      removeClass: D,
      hasClass: g,
      getAttr: S,
      setAttr: C,
      removeAttr: O,
      setContent: (k) => {
        W(f, k, !0);
      }
    }),
    !0
  ), p && p(r()), v && v(s(d)), s(d).init(), () => {
    var k;
    m && s(d) && m(s(d)), (k = s(d)) == null || k.destroy();
  }));
  function g(k) {
    return k in c ? c[k] : w().classList.contains(k);
  }
  function E(k) {
    c[k] || (c[k] = !0);
  }
  function D(k) {
    (!(k in c) || c[k]) && (c[k] = !1);
  }
  function S(k) {
    return k in h ? h[k] ?? null : w().getAttribute(k);
  }
  function C(k, U) {
    h[k] !== U && (h[k] = U);
  }
  function O(k) {
    (!(k in h) || h[k] != null) && (h[k] = void 0);
  }
  function w() {
    return o;
  }
  var M = { getElement: w }, I = Ac();
  dt(
    I,
    (k) => ({
      class: k,
      "aria-hidden": a() ? void 0 : "true",
      id: r(),
      ...h,
      ...u
    }),
    [
      () => it({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": l(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...c,
        [i()]: !0
      })
    ]
  );
  var x = Q(I);
  {
    var G = (k) => {
      var U = ve(), Pe = ae(U);
      Te(Pe, () => e.children ?? Ae), L(k, U);
    }, ne = (k) => {
      var U = tt();
      Fe(() => ye(U, s(f))), L(k, U);
    };
    oe(x, (k) => {
      s(f) == null ? k(G) : k(ne, -1);
    });
  }
  return _e(I, (k) => o = k, () => o), $e(I, (k, U) => te == null ? void 0 : te(k, U), t), L(n, I), Qe(M);
}
let Cc = 0;
var Sc = /* @__PURE__ */ re("<input/>"), xc = /* @__PURE__ */ re('<span class="mdc-select__ripple"></span>'), Tc = /* @__PURE__ */ re('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function ya(n, e) {
  Ye(e, !0);
  const t = () => Za(ke, "$selectedTextStore", i), [i, r] = ia();
  let a = () => {
  };
  function l(A) {
    return A === a;
  }
  let u = b(e, "use", 19, () => []), o = b(e, "class", 3, ""), d = b(e, "style", 3, ""), c = b(e, "ripple", 3, !0), h = b(e, "disabled", 3, !1), f = b(e, "variant", 3, "standard"), p = b(e, "noLabel", 3, !1), v = b(e, "label", 3, void 0), m = b(e, "value", 15), g = b(e, "key", 3, (A) => A), E = b(e, "dirty", 15, !1), D = b(e, "invalid", 15, a), S = b(e, "updateInvalid", 19, () => l(D())), C = b(e, "required", 3, !1), O = b(e, "inputId", 19, () => "SMUI-select-" + Cc++), w = b(e, "hiddenInput", 3, !1), M = b(e, "withLeadingIcon", 3, a), I = b(e, "anchor$use", 19, () => []), x = b(e, "anchor$class", 3, ""), G = b(e, "selectedTextContainer$use", 19, () => []), ne = b(e, "selectedTextContainer$class", 3, ""), k = b(e, "selectedText$use", 19, () => []), U = b(e, "selectedText$class", 3, ""), Pe = b(e, "dropdownIcon$use", 19, () => []), Z = b(e, "dropdownIcon$class", 3, ""), F = b(e, "menu$class", 3, ""), H = /* @__PURE__ */ bt(e, [
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
  const $ = l(D());
  l(D()) && D(!1);
  let ue, V = /* @__PURE__ */ fe(void 0), he = Oe({}), me = Oe({}), le, ce = Oe({}), T = /* @__PURE__ */ fe(-1);
  const K = /* @__PURE__ */ se(() => H.menu$id ?? O() + "-menu");
  let R = /* @__PURE__ */ fe(void 0), z = Me("SMUI:addLayoutListener"), P, j = /* @__PURE__ */ fe(!1), ie = Oe({}), Ee = /* @__PURE__ */ fe(void 0), Ge = /* @__PURE__ */ fe(void 0), Ue = /* @__PURE__ */ fe(!1), Ce, Lt = Me("SMUI:select:context"), Zt, Jt, J, ee, Se;
  pe("SMUI:list:role", ""), pe("SMUI:list:nav", !1);
  const ke = xa("");
  pe("SMUI:select:selectedText", ke);
  const yt = xa(m());
  Be(() => {
    Kr(yt, m());
  }), pe("SMUI:select:value", yt), Be(() => {
    s(V) && s(V).getValue() !== g()(m()) && s(V).setValue(g()(m()));
  });
  let He = s(T);
  Be(() => {
    if (He !== s(T))
      if (He = s(T), s(V))
        s(V).setSelectedIndex(
          s(T),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const A = Ut();
        m() !== A[s(T)] && m(A[s(T)]);
      }
  }), Be(() => {
    s(V) && s(V).getDisabled() !== h() && s(V).setDisabled(h());
  }), Be(() => {
    s(V) && E() && s(V).isValid() !== !D() && (S() ? D(!s(V).isValid()) : s(V).setValid(!D()));
  }), Be(() => {
    s(V) && s(V).getRequired() !== C() && s(V).setRequired(C());
  }), z && (P = z(_r)), pe("SMUI:select:leading-icon:mount", (A) => {
    Zt = A;
  }), pe("SMUI:select:leading-icon:unmount", () => {
    Zt = void 0;
  }), pe("SMUI:list:mount", (A) => {
    Ce = A;
  }), pe("SMUI:select:helper-text:id", (A) => {
    W(R, A, !0);
  }), pe("SMUI:select:helper-text:mount", (A) => {
    Jt = A;
  }), pe("SMUI:select:helper-text:unmount", () => {
    W(R, void 0), Jt = void 0;
  }), kt(() => (W(
    V,
    new dc(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (A) => {
          Kr(ke, A);
        },
        isSelectAnchorFocused: () => document.activeElement === le,
        getSelectAnchorAttr: Ze,
        setSelectAnchorAttr: ot,
        removeSelectAnchorAttr: wt,
        addMenuClass: B,
        removeMenuClass: ge,
        openMenu: () => {
          W(j, !0);
        },
        closeMenu: () => {
          W(j, !1);
        },
        getAnchorElement: () => le,
        setMenuAnchorElement: (A) => {
          W(Ee, A, !0);
        },
        setMenuAnchorCorner: (A) => {
          W(Ge, A, !0);
        },
        setMenuWrapFocus: (A) => {
          W(Ue, A, !0);
        },
        getSelectedIndex: () => s(T),
        setSelectedIndex: (A) => {
          He = A, W(T, A, !0), m(Ut()[s(T)]);
        },
        focusMenuItemAtIndex: (A) => {
          Ce.focusItemAtIndex(A);
        },
        getMenuItemCount: () => Ce.items.length,
        getMenuItemValues: () => Ut().map(g()),
        getMenuItemTextAtIndex: (A) => Ce.getPrimaryTextAtIndex(A),
        isTypeaheadInProgress: () => Ce.typeaheadInProgress,
        typeaheadMatchItem: (A, Y) => Ce.typeaheadMatchItem(A, Y),
        // getCommonAdapterMethods
        addClass: N,
        removeClass: q,
        hasClass: Ve,
        setRippleCenter: (A) => ee && ee.setRippleCenter(A),
        activateBottomLine: () => ee && ee.activate(),
        deactivateBottomLine: () => ee && ee.deactivate(),
        notifyChange: (A) => {
          var Y;
          E(!0), S() && D(!((Y = s(V)) != null && Y.isValid())), St(Jn(), "SMUISelectChange", { value: m(), index: s(T) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!Se,
        notchOutline: (A) => Se && Se.notch(A),
        closeOutline: () => Se && Se.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!J,
        floatLabel: (A) => J && J.float(A),
        getLabelWidth: () => J ? J.getWidth() : 0,
        setLabelRequired: (A) => J && J.setRequired(A)
      },
      {
        get helperText() {
          return Jt;
        },
        get leadingIcon() {
          return Zt;
        }
      }
    ),
    !0
  ), W(T, Ut().indexOf(m()), !0), s(V).init(), Nt($), () => {
    var A;
    (A = s(V)) == null || A.destroy();
  })), di(() => {
    P && P();
  });
  function Ve(A) {
    return A in he ? he[A] : Jn().classList.contains(A);
  }
  function N(A) {
    he[A] || (he[A] = !0);
  }
  function q(A) {
    (!(A in he) || he[A]) && (he[A] = !1);
  }
  function _(A, Y) {
    me[A] != Y && (Y === "" || Y == null ? delete me[A] : me[A] = Y);
  }
  function B(A) {
    ie[A] || (ie[A] = !0);
  }
  function ge(A) {
    (!(A in ie) || ie[A]) && (ie[A] = !1);
  }
  function Ze(A) {
    return A in ce ? ce[A] ?? null : Jn().getAttribute(A);
  }
  function ot(A, Y) {
    ce[A] !== Y && (ce[A] = Y);
  }
  function wt(A) {
    (!(A in ce) || ce[A] != null) && (ce[A] = void 0);
  }
  function Ut() {
    return Ce.getOrderedList().map((A) => A.getValue());
  }
  function ki(A) {
    const Y = A.currentTarget.getBoundingClientRect();
    return (et(A) ? A.touches[0].clientX : A.clientX) - Y.left;
  }
  function et(A) {
    return "touches" in A;
  }
  function Mt() {
    if (s(V) == null)
      throw new Error("Instance is undefined.");
    return s(V).getUseDefaultValidation();
  }
  function Nt(A) {
    var Y;
    (Y = s(V)) == null || Y.setUseDefaultValidation(A);
  }
  function Zn() {
    le.focus();
  }
  function _r() {
    var A;
    (A = s(V)) == null || A.layout();
  }
  function Jn() {
    return ue;
  }
  var Re = {
    getUseDefaultValidation: Mt,
    setUseDefaultValidation: Nt,
    focus: Zn,
    layout: _r,
    getElement: Jn
  }, ze = Tc(), je = ae(ze);
  dt(je, (A, Y, We) => ({ class: A, style: Y, ...We }), [
    () => it({
      "mdc-select": !0,
      "mdc-select--required": C(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": l(M()) ? e.leadingIcon : M(),
      "mdc-select--no-label": p() || v() == null,
      "mdc-select--invalid": D(),
      "mdc-select--activated": s(j),
      "mdc-data-table__pagination-rows-per-page-select": Lt === "data-table:pagination",
      ...he,
      [o()]: !0
    }),
    () => Object.entries(me).map(([A, Y]) => `${A}: ${Y};`).concat([d()]).join(" "),
    () => Ha(H, [
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
  var Ot = Q(je);
  {
    var fn = (A) => {
      var Y = Sc();
      dt(
        Y,
        (We) => ({
          type: "hidden",
          required: C(),
          disabled: h(),
          value: m(),
          ...We
        }),
        [() => gt(H, "input$")],
        void 0,
        void 0,
        void 0,
        !0
      ), L(A, Y);
    };
    oe(Ot, (A) => {
      w() && A(fn);
    });
  }
  var Xe = X(Ot, 2), ht = (A) => {
    var Y;
    le.focus(), s(V) && s(V).handleClick(ki(A)), (Y = e.anchor$onclick) == null || Y.call(e, A);
  }, At = (A) => {
    var Y;
    s(V) && s(V).handleKeydown(A), (Y = e.onkeydown) == null || Y.call(e, A);
  }, Ne = (A) => {
    var Y;
    s(V) && s(V).handleBlur(), St(Jn(), "blur", A), (Y = e.anchor$onblur) == null || Y.call(e, A);
  }, Et = (A) => {
    var Y;
    s(V) && s(V).handleFocus(), St(Jn(), "focus", A), (Y = e.anchor$onfocus) == null || Y.call(e, A);
  };
  dt(
    Xe,
    (A, Y) => ({
      class: A,
      "aria-required": C() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": s(K),
      "aria-expanded": s(j) ? "true" : "false",
      "aria-describedby": s(R),
      role: "combobox",
      tabindex: "0",
      ...ce,
      ...Y,
      onclick: ht,
      onkeydown: At,
      onblur: Ne,
      onfocus: Et
    }),
    [
      () => it({ "mdc-select__anchor": !0, [x()]: !0 }),
      () => gt(H, "anchor$")
    ]
  );
  var Fn = Q(Xe);
  {
    var $t = (A) => {
      var Y = xc();
      L(A, Y);
    };
    oe(Fn, (A) => {
      f() === "filled" && A($t);
    });
  }
  var vt = X(Fn, 2);
  {
    var Dt = (A) => {
      {
        let Y = /* @__PURE__ */ se(() => O() + "-smui-label"), We = /* @__PURE__ */ se(() => t() !== ""), pt = /* @__PURE__ */ se(() => gt(H, "label$"));
        _e(
          Yr(A, nt(
            {
              get id() {
                return s(Y);
              },
              get floatAbove() {
                return s(We);
              },
              get required() {
                return C();
              }
            },
            () => s(pt),
            {
              children: (Bn, Un) => {
                var lr = ve(), Fi = ae(lr);
                {
                  var hi = (Cn) => {
                  }, oa = (Cn) => {
                    var Nn = tt();
                    Fe(() => ye(Nn, v())), L(Cn, Nn);
                  }, ua = (Cn) => {
                    var Nn = ve(), ms = ae(Nn);
                    Te(ms, v), L(Cn, Nn);
                  };
                  oe(Fi, (Cn) => {
                    v() == null ? Cn(hi) : typeof v() == "string" ? Cn(oa, 1) : Cn(ua, -1);
                  });
                }
                L(Bn, lr);
              },
              $$slots: { default: !0 }
            }
          )),
          (Bn) => J = Bn,
          () => J
        );
      }
    };
    oe(vt, (A) => {
      f() !== "outlined" && !p() && v() != null && A(Dt);
    });
  }
  var en = X(vt, 2);
  {
    var hn = (A) => {
      {
        let Y = /* @__PURE__ */ se(() => p() || v() == null), We = /* @__PURE__ */ se(() => gt(H, "outline$"));
        _e(
          ao(A, nt(
            {
              get noLabel() {
                return s(Y);
              }
            },
            () => s(We),
            {
              children: (pt, Bn) => {
                var Un = ve(), lr = ae(Un);
                {
                  var Fi = (hi) => {
                    {
                      let oa = /* @__PURE__ */ se(() => O() + "-smui-label"), ua = /* @__PURE__ */ se(() => t() !== ""), Cn = /* @__PURE__ */ se(() => gt(H, "label$"));
                      _e(
                        Yr(hi, nt(
                          {
                            get id() {
                              return s(oa);
                            },
                            get floatAbove() {
                              return s(ua);
                            },
                            get required() {
                              return C();
                            }
                          },
                          () => s(Cn),
                          {
                            children: (Nn, ms) => {
                              var gs = ve(), Io = ae(gs);
                              {
                                var bo = ($n) => {
                                }, yo = ($n) => {
                                  var or = tt();
                                  Fe(() => ye(or, v())), L($n, or);
                                }, Ao = ($n) => {
                                  var or = ve(), Eo = ae(or);
                                  Te(Eo, v), L($n, or);
                                };
                                oe(Io, ($n) => {
                                  v() == null ? $n(bo) : typeof v() == "string" ? $n(yo, 1) : $n(Ao, -1);
                                });
                              }
                              L(Nn, gs);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (Nn) => J = Nn,
                        () => J
                      );
                    }
                  };
                  oe(lr, (hi) => {
                    !p() && v() != null && hi(Fi);
                  });
                }
                L(pt, Un);
              },
              $$slots: { default: !0 }
            }
          )),
          (pt) => Se = pt,
          () => Se
        );
      }
    };
    oe(en, (A) => {
      f() === "outlined" && A(hn);
    });
  }
  var Xt = X(en, 2);
  Te(Xt, () => e.leadingIcon ?? Ae);
  var tn = X(Xt, 2);
  dt(tn, (A, Y) => ({ class: A, ...Y }), [
    () => it({
      "mdc-select__selected-text-container": !0,
      [ne()]: !0
    }),
    () => gt(H, "selectedTextContainer$")
  ]);
  var Ht = Q(tn);
  dt(
    Ht,
    (A, Y) => ({
      id: O() + "-smui-selected-text",
      class: A,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": O() + "-smui-label",
      ...Y
    }),
    [
      () => it({
        "mdc-select__selected-text": !0,
        [U()]: !0
      }),
      () => gt(H, "selectedText$")
    ]
  );
  var fi = Q(Ht);
  $e(Ht, (A, Y) => te == null ? void 0 : te(A, Y), k), $e(tn, (A, Y) => te == null ? void 0 : te(A, Y), G);
  var sr = X(tn, 2);
  dt(sr, (A, Y) => ({ class: A, ...Y }), [
    () => it({
      "mdc-select__dropdown-icon": !0,
      [Z()]: !0
    }),
    () => gt(H, "dropdownIcon$")
  ]), $e(sr, (A, Y) => te == null ? void 0 : te(A, Y), Pe);
  var fo = X(sr, 2);
  {
    var ho = (A) => {
      {
        let Y = /* @__PURE__ */ se(() => gt(H, "ripple$"));
        _e(ro(A, nt(() => s(Y))), (We) => ee = We, () => ee);
      }
    };
    oe(fo, (A) => {
      f() !== "outlined" && c() && A(ho);
    });
  }
  _e(Xe, (A) => le = A, () => le), $e(Xe, (A, Y) => te == null ? void 0 : te(A, Y), I);
  var vo = X(Xe, 2);
  {
    let A = /* @__PURE__ */ se(() => it({
      "mdc-select__menu": !0,
      ...ie,
      [F()]: !0
    })), Y = /* @__PURE__ */ se(() => gt(H, "menu$"));
    vc(vo, nt(
      {
        get class() {
          return s(A);
        },
        get id() {
          return s(K);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(Ee);
        },
        get anchorCorner() {
          return s(Ge);
        }
      },
      () => s(Y),
      {
        onSMUIMenuSelected: (We) => {
          var pt;
          s(V) && s(V).handleMenuItemAction(We.detail.index), (pt = e.onSMUIMenuSelected) == null || pt.call(e, We);
        },
        onSMUIMenuSurfaceClosing: (We) => {
          var pt;
          s(V) && s(V).handleMenuClosing(), (pt = e.onSMUIMenuSurfaceClosing) == null || pt.call(e, We);
        },
        onSMUIMenuSurfaceClosed: (We) => {
          var pt;
          s(V) && s(V).handleMenuClosed(), (pt = e.onSMUIMenuSurfaceClosed) == null || pt.call(e, We);
        },
        onSMUIMenuSurfaceOpened: (We) => {
          var pt;
          s(V) && s(V).handleMenuOpened(), (pt = e.onSMUIMenuSurfaceOpened) == null || pt.call(e, We);
        },
        get open() {
          return s(j);
        },
        set open(We) {
          W(j, We, !0);
        },
        children: (We, pt) => {
          {
            let Bn = /* @__PURE__ */ se(() => gt(H, "list$"));
            pc(We, nt(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Ue);
                }
              },
              () => s(Bn),
              {
                get selectedIndex() {
                  return s(T);
                },
                set selectedIndex(Un) {
                  W(T, Un, !0);
                },
                children: (Un, lr) => {
                  var Fi = ve(), hi = ae(Fi);
                  Te(hi, () => e.children ?? Ae), L(Un, Fi);
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
  _e(je, (A) => ue = A, () => ue), $e(je, (A, Y) => Ln == null ? void 0 : Ln(A, Y), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: N,
    removeClass: q,
    addStyle: _
  })), $e(je, (A, Y) => ba == null ? void 0 : ba(A, Y), () => ({ addClass: N, removeClass: q })), $e(je, (A, Y) => te == null ? void 0 : te(A, Y), u);
  var po = X(je, 2);
  {
    var mo = (A) => {
      {
        let Y = /* @__PURE__ */ se(() => gt(H, "helperText$"));
        Ec(A, nt(() => s(Y), {
          children: (We, pt) => {
            var Bn = ve(), Un = ae(Bn);
            Te(Un, () => e.helperText ?? Ae), L(We, Bn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    oe(po, (A) => {
      e.helperText && A(mo);
    });
  }
  Fe(() => ye(fi, t())), L(n, ze);
  var go = Qe(Re);
  return r(), go;
}
function Ii(n, e) {
  Ye(e, !0);
  const t = () => Za(c, "$selectedValue", i), [i, r] = ia();
  let a = b(e, "use", 19, () => []);
  b(e, "class", 3, "");
  let l = b(e, "value", 3, ""), u = /* @__PURE__ */ bt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), o;
  const d = Me("SMUI:select:selectedText"), c = Me("SMUI:select:value");
  pe("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ se(() => l() != null && l() !== "" && t() === l());
  kt(f), di(f);
  function f() {
    s(h) && o && Kr(d, o.getPrimaryText());
  }
  function p() {
    return o.getElement();
  }
  var v = { getElement: p };
  _e(
    bc(n, nt(
      {
        get use() {
          return a();
        },
        get "data-value"() {
          return l();
        },
        get value() {
          return l();
        },
        get selected() {
          return s(h);
        }
      },
      () => u,
      {
        children: (g, E) => {
          var D = ve(), S = ae(D);
          Te(S, () => e.children ?? Ae), L(g, D);
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
var Lc = /* @__PURE__ */ re("<i><!></i>");
function wc(n, e) {
  Ye(e, !0);
  const t = () => Za(v, "$leadingStore", i), [i, r] = ia();
  let a = b(e, "use", 19, () => []), l = b(e, "class", 3, ""), u = b(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), o = b(e, "disabled", 3, !1), d = /* @__PURE__ */ bt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), c, h = /* @__PURE__ */ fe(void 0), f = new Rr(), p = Oe({});
  const v = Me("SMUI:textfield:icon:leading"), m = t();
  let g = /* @__PURE__ */ fe(void 0);
  const E = /* @__PURE__ */ se(() => ({ role: e.role, tabindex: u() })), D = Me("SMUI:textfield:leading-icon:mount"), S = Me("SMUI:textfield:leading-icon:unmount"), C = Me("SMUI:textfield:trailing-icon:mount"), O = Me("SMUI:textfield:trailing-icon:unmount");
  kt(() => (W(
    h,
    new Md({
      getAttr: w,
      setAttr: M,
      removeAttr: I,
      setContent: (F) => {
        W(g, F, !0);
      },
      registerInteractionHandler: (F, H) => f.on(x(), F, H),
      deregisterInteractionHandler: (F, H) => f.off(x(), F, H),
      notifyIconAction: () => St(x(), "SMUITextFieldIcon")
    }),
    !0
  ), m ? D && D(s(h)) : C && C(s(h)), s(h).init(), () => {
    var F;
    s(h) && (m ? S && S(s(h)) : O && O(s(h))), (F = s(h)) == null || F.destroy(), f.clear();
  }));
  function w(F) {
    return F in p ? p[F] ?? null : x().getAttribute(F);
  }
  function M(F, H) {
    p[F] !== H && (p[F] = H);
  }
  function I(F) {
    (!(F in p) || p[F] != null) && (p[F] = void 0);
  }
  function x() {
    return c;
  }
  var G = { getElement: x }, ne = Lc();
  dt(
    ne,
    (F) => ({
      class: F,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? o() ? "true" : "false" : void 0,
      ...s(E),
      ...p,
      ...d
    }),
    [
      () => it({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": m,
        "mdc-text-field__icon--trailing": !m,
        [l()]: !0
      })
    ]
  );
  var k = Q(ne);
  {
    var U = (F) => {
      var H = ve(), $ = ae(H);
      Te($, () => e.children ?? Ae), L(F, H);
    }, Pe = (F) => {
      var H = tt();
      Fe(() => ye(H, s(g))), L(F, H);
    };
    oe(k, (F) => {
      s(g) == null ? F(U) : F(Pe, -1);
    });
  }
  _e(ne, (F) => c = F, () => c), $e(ne, (F, H) => te == null ? void 0 : te(F, H), a), L(n, ne);
  var Z = Qe(G);
  return r(), Z;
}
const cs = ["editor", "menu", "validator"], Mc = {
  editor: "Editor plugin",
  menu: "Navigation plugin",
  validator: "Validation plugin"
}, fs = {
  editor: "tab",
  menu: "play_circle",
  validator: "rule_folder"
};
function ja(n) {
  if (!Oc())
    return n;
  try {
    const e = new URL(n);
    return e.protocol !== "http:" && e.protocol !== "https:" || e.hostname === "localhost" || e.hostname === "127.0.0.1" ? n : `/proxy/${e.host}${e.pathname}${e.search}`;
  } catch {
    return n;
  }
}
function Oc() {
  if (typeof window > "u")
    return !1;
  const n = window.location.hostname;
  return n === "localhost" || n === "127.0.0.1";
}
async function Dc(n) {
  if (n.source === "builtin" || !n.pluginsUrl)
    return {
      provider: n,
      plugins: [],
      error: "Builtin providers must be loaded via loadBuiltinProviders()."
    };
  try {
    const e = await fetch(ja(n.pluginsUrl));
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
    const i = t.plugins, r = i.filter(_c), a = i.length - r.length;
    return a > 0 && console.warn(
      `[ProviderLoader] Provider "${n.name}": skipped ${a} invalid plugin entries.`
    ), { provider: n, plugins: r };
  } catch (e) {
    const t = e instanceof Error ? e.message : String(e);
    return { provider: n, plugins: [], error: t };
  }
}
async function Rc(n) {
  return Promise.all(n.map(Dc));
}
function _c(n) {
  if (!n || typeof n != "object") return !1;
  const e = n;
  return typeof e.name == "string" && (!e.author || typeof e.author == "string") && typeof e.src == "string" && (!1 || e.src.startsWith("https://") || e.src.startsWith("/")) && typeof e.kind == "string" && typeof e.icon == "string" && typeof e.description == "string" && (e.supportedCoreVersion === void 0 || typeof e.supportedCoreVersion == "object" && e.supportedCoreVersion !== null && (typeof e.supportedCoreVersion.from == "string" || typeof e.supportedCoreVersion.to == "string"));
}
function qs(n, e) {
  const t = Ys(n), i = Ys(e);
  for (let r = 0; r < 3; r++) {
    if (t[r] < i[r]) return -1;
    if (t[r] > i[r]) return 1;
  }
  return 0;
}
function Ys(n) {
  const t = n.replace(/^v/, "").split("-")[0].split(".").map((i) => parseInt(i, 10) || 0);
  return [t[0] ?? 0, t[1] ?? 0, t[2] ?? 0];
}
function Pc(n, e, t) {
  return e === void 0 || t === void 0 ? !0 : qs(n, e) >= 0 && qs(n, t) < 0;
}
function ar(n, e) {
  var i;
  const t = (i = n == null ? void 0 : n.prefix) == null ? void 0 : i.trim();
  return t ? `${t} - ${e}` : e;
}
function Qr(n, e) {
  return `${n}\0${e}`;
}
function Zr(n) {
  return Qr(
    ar(n.provider, n.name),
    n.kind
  );
}
function yr(n) {
  return `${n.provider.name}\0${Zr(n)}`;
}
function kc(n, e, t) {
  return n.name === e && n.kind === t;
}
function Ar(n, e) {
  return Zr(n) === Zr(e);
}
function nn(n, e) {
  return yr(n) === yr(e);
}
const Fc = "plugins";
function Bc(n) {
  const e = /* @__PURE__ */ new Map();
  for (const t of n) {
    if (typeof (t == null ? void 0 : t.name) != "string" || !t.name || typeof (t == null ? void 0 : t.kind) != "string" || !t.kind || typeof (t == null ? void 0 : t.src) != "string" || !t.src) continue;
    const i = `${t.name}\0${t.kind}`, r = e.get(i);
    e.set(
      i,
      r ? { ...r, ...t, active: !!(r.active || t.active) } : t
    );
  }
  return [...e.values()];
}
function Uc() {
  try {
    const n = localStorage.getItem(Fc);
    if (!n) return [];
    const e = JSON.parse(n);
    return Array.isArray(e) ? Bc(e) : [];
  } catch {
    return [];
  }
}
function Nc(n, e, t) {
  const i = ar(e, n.name);
  return t.find((r) => kc(r, i, n.kind));
}
function hs(n, e, t, i, r) {
  var h, f;
  const a = (r == null ? void 0 : r.builtin) === !0 || e.source === "builtin", l = Nc(n, e, i), u = (r == null ? void 0 : r.activeByDefault) === !0, o = a || l ? "INSTALLED" : "AVAILABLE", d = l ? l.active ? "ACTIVE" : "INACTIVE" : a && u ? "ACTIVE" : "INACTIVE", c = a ? !0 : Pc(
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
    kindText: Mc[n.kind],
    kindIcon: fs[n.kind],
    installationState: o,
    activationState: d
  };
}
function uo(n) {
  return `A built-in plugin with the name "${n}" already exists.`;
}
function Hc(n) {
  const e = n.filter(
    (i) => {
      var r;
      return i.builtin === !0 && ((r = i.provider) == null ? void 0 : r.source) === "builtin";
    }
  );
  if (e.length === 0) return n;
  const t = /* @__PURE__ */ new Map();
  for (const i of e)
    t.set(Qr(i.name, i.kind), i);
  return n.map((i) => {
    var a;
    if (((a = i.provider) == null ? void 0 : a.source) === "builtin") return i;
    const r = t.get(
      Qr(ar(i.provider, i.name), i.kind)
    );
    return r ? {
      ...i,
      shadowedByHostBuiltin: !0,
      installationState: "INSTALLED",
      activationState: r.activationState,
      activeByDefault: r.activeByDefault,
      requireDoc: r.requireDoc
    } : i;
  });
}
function Ga(n) {
  return (n == null ? void 0 : n.builtin) === !0 || (n == null ? void 0 : n.shadowedByHostBuiltin) === !0;
}
function Vc(n, e) {
  return n.map((t) => !Ar(t, e) || !t.compatible || Ga(t) ? t : {
    ...t,
    installationState: "INSTALLED",
    activationState: "INACTIVE"
  });
}
function jc(n, e) {
  const t = n.find((r) => Ar(r, e));
  return Ga(t) || Ga(e) ? { updated: n, success: !1 } : { updated: n.map(
    (r) => Ar(r, e) ? {
      ...r,
      installationState: "AVAILABLE",
      activationState: "INACTIVE"
    } : r
  ), success: !0 };
}
function Gc(n, e) {
  return e.shadowedByHostBuiltin ? n : n.map(
    (t) => Ar(t, e) && !t.shadowedByHostBuiltin ? {
      ...t,
      activationState: "ACTIVE"
    } : t
  );
}
function zc(n, e) {
  return e.shadowedByHostBuiltin ? n : n.map(
    (t) => Ar(t, e) && !t.shadowedByHostBuiltin ? {
      ...t,
      activationState: "INACTIVE"
    } : t
  );
}
function vs() {
  return document.querySelector("open-scd");
}
function ps() {
  const n = vs();
  return n != null && n.shadowRoot ? n.shadowRoot.querySelector("compas-layout") ?? n.shadowRoot.querySelector("oscd-layout") ?? null : null;
}
function Xc() {
  var t;
  const n = ps();
  if ((n == null ? void 0 : n.localName) === "compas-layout") return "compas";
  if ((n == null ? void 0 : n.localName) === "oscd-layout") return "open-scd";
  const e = vs();
  return e ? (t = e.shadowRoot) != null && t.querySelector("compas-session") ? "compas" : "open-scd" : null;
}
function Wc(n = vs) {
  var i;
  const e = n(), t = (i = e == null ? void 0 : e.getBuiltInPlugins) == null ? void 0 : i.call(e);
  return Array.isArray(t) ? t : [];
}
const Kc = "data:image/png;base64,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", qc = "data:image/png;base64,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dVv4Ul1CQGUISG4wOe8QjhT7o9s1nltK5uXlNRp/zzV44qpHt20PfD6dwUh9waP0ecqgqmpkMB3oTtxdpDamuItCEooxJOiq7Tt9+vQEzn2MctvU//ij6+IAXNSUEFA6ApJGyeL67TfRWEai0ZyDwFV1ALziSGsz0iEPkQMgck1temA6yEtVzdFQtqxWrdqfqFQlpSmGb6gVOPcxunaO4/rN5nzkx7lQLkECF31LByGgVQSkMJh6jLB/B3+bUfiCegCB9hMI7IoYIBSFL8oNBKKnSTJkMO3odjQevdEVuxWbihGFaodE9jVBw1kP123uRnfPzrfffrvAhAT4lvsmzoVuRi4s79FpHwjUihDgiQDmURYtSpZbt43GrBf+Fs/i9w342wzgKRbvatycJ74oH8BlZx14N6KKuRAgg5kLjsJP0Fj+HxqPhVjT4RR3hXOTrEbLadOmHcUfUii+1f6X5xajYott3749DF05e1GSFySThhgRAgwiIFaULM5NBuGo8k80ZotQbb7zk/YiVASXna1H4zzMXgJabifK4nY1AopGw/mHH36Yieno+qpRvzw6peC5Ef+K5imnU0JAswjMnTs3ZN68eZxnydFDN2LEiICmTZu2xSCezkispqME7Wnv5ua2FSNve+/bt++WPe212EZNoyTR+q9x48ZFZ8+evQndJG+LxoQtwpQphK3+IGnYQMDTUTEmT57cunnz5uFIp5qjtBxtn5aW1m7q1Klb0avUJDIyMtVRelpoTy7ZQnq5Xr16pefMmfObhoxlIYjQZUJAmwigy9TuaHiMUn0D5ye3oLHchujJbixz9GADHDnvfe211yghSQ5QCvpKLtmCkMFynKusiPN6e9BY+lipRpcIAUJAGwicqVOnji+qauarbmhoaDl0e67DZ4gs+9fylRPr/YWJTVpGR0ffsKGN5qqSwSygyzGjRnWcX+CCXWj/xwIwomJCQGsIHD16tG+fPn24dHRWDxxR+qChHImRtR9hRckTHlgVruCLF3/66acWGACYWHAVbV8hg2mh/z/99NOKw4YNO4qXKNG4BXyoiBDQMAIZx48f79mrV68VljDg9sD97rvvvsXMWkPwuhKnvJLOnj3bolu3bmct6af1MjKYee4AfCv0xknwjRhC/mqeS3RKCBAChMBTBPD5ELN79+4ITBeZgKNIA356hYSENMBAmqZY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";
function Yc(n) {
  return n === "compas" ? {
    name: "CoMPAS Plugins",
    icon: qc,
    description: "Built-in plugins of the CoMPAS OpenSCD host.",
    source: "builtin"
  } : {
    name: "Open-SCD Plugins",
    icon: Kc,
    description: "Built-in plugins of the OpenSCD host.",
    source: "builtin"
  };
}
function Qc(n) {
  return typeof n == "string" && cs.includes(n);
}
function Zc(n) {
  return n === "top" || n === "middle" || n === "bottom";
}
function Jc(n, e) {
  if (typeof n.name != "string" || !n.name || typeof n.src != "string" || !n.src || !Qc(n.kind)) return null;
  const t = n.kind, i = typeof n.icon == "string" && n.icon ? n.icon : fs[t];
  return {
    name: n.name,
    author: e,
    src: n.src,
    kind: t,
    icon: i,
    description: `Built-in ${t} plugin`,
    position: Zc(n.position) ? n.position : void 0
  };
}
function $c(n, e, t) {
  var d;
  const i = t == null ? void 0 : t.getHost, r = ((d = t == null ? void 0 : t.detectEdition) == null ? void 0 : d.call(t)) ?? Xc(), a = Wc(i);
  if (a.length === 0)
    return [];
  const l = r ?? "open-scd", u = Yc(l), o = [];
  for (const c of a) {
    const h = Jc(c, u.name);
    h && o.push(
      hs(h, u, e, n, {
        builtin: !0,
        activeByDefault: c.activeByDefault === !0,
        requireDoc: c.requireDoc === !0
      })
    );
  }
  return o.length === 0 ? [] : [{ provider: u, plugins: o, host: l }];
}
const ji = {
  // no prefix — host registration uses plain stored plugin name
  name: "Custom Plugins",
  icon: "extension",
  description: "Manually configured plugins (not listed by a remote provider)."
};
function ef(n) {
  const e = /* @__PURE__ */ new Set();
  for (const t of n)
    e.add(Zr(t));
  return e;
}
function co(n) {
  return typeof n == "string" && cs.includes(n);
}
function tf(n, e) {
  return typeof n.name != "string" || !n.name || !co(n.kind) ? !1 : e.has(Qr(n.name, n.kind));
}
function nf(n, e, t) {
  const i = [];
  for (const r of n) {
    if (tf(r, e) || typeof r.name != "string" || !r.name || typeof r.src != "string" || !r.src || !co(r.kind)) continue;
    const a = r.kind, l = {
      name: r.name,
      author: r.author ?? ji.name,
      src: r.src,
      kind: a,
      icon: typeof r.icon == "string" && r.icon ? r.icon : fs[a],
      // Product: description is the source URL only
      description: r.src,
      position: r.position
    }, u = hs(
      l,
      ji,
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
const rf = "appVersion";
function af() {
  return localStorage.getItem(rf) || "1.4.0";
}
const sf = [
  {
    prefix: "BP",
    name: "BearingPoint Plugins",
    icon: "https://ase-compas.github.io/compas-bearingpoint-plugins/bearingpoint.svg",
    description: "Official BearingPoint plugin provider for OpenSCD.",
    pluginsUrl: "https://ase-compas.github.io/compas-bearingpoint-plugins/plugins.json"
  },
  {
    prefix: "TBW",
    name: "TransnetBW Plugins",
    icon: "https://ase-compas.github.io/compas-transnetbw-plugins/transnetbw.svg",
    description: "Official TransnetBW plugin provider for OpenSCD.",
    pluginsUrl: "https://ase-compas.github.io/compas-transnetbw-plugins/plugins.json"
  },
  {
    prefix: "SE",
    name: "SprintEins Plugins",
    icon: "https://avatars.githubusercontent.com/u/44259540?s=200&v=4",
    description: "SprintEins plugin provider for OpenSCD.",
    pluginsUrl: "https://sprinteins.github.io/oscd-plugin-store/plugins.json"
  }
], lf = sf;
var of = /* @__PURE__ */ re('<span class="badge badge-builtin bp-typo-button">Built-in</span>'), uf = /* @__PURE__ */ re("<span> </span>"), df = /* @__PURE__ */ re("<span> </span>"), cf = /* @__PURE__ */ re('<span class="badge badge-incompatible bp-typo-button">Incompatible</span>'), ff = /* @__PURE__ */ re('<div role="button" tabindex="0"><div class="card-top svelte-1myq0bn"><div class="plugin-icon-wrapper svelte-1myq0bn"><span class="material-icons-outlined plugin-icon svelte-1myq0bn"> </span></div> <button><!></button></div> <div class="plugin-name bp-typo-16-bold svelte-1myq0bn"> </div> <div class="plugin-kind-wrapper svelte-1myq0bn"><div class="badge badge-kind bp-typo-label"><span class="material-icons-outlined badge-icon"> </span> </div></div> <div class="plugin-description bp-typo-body svelte-1myq0bn"> </div> <div class="plugin-badges svelte-1myq0bn"><!> <!> <!></div></div>');
function hf(n, e) {
  Ye(e, !0);
  const t = /* @__PURE__ */ se(() => e.plugin.builtin === !0), i = /* @__PURE__ */ se(() => e.plugin.shadowedByHostBuiltin === !0), r = /* @__PURE__ */ se(() => e.plugin.installationState === "INSTALLED" || s(t) || s(i)), a = /* @__PURE__ */ se(() => e.plugin.activationState === "ACTIVE"), l = /* @__PURE__ */ se(() => ar(e.plugin.provider, e.plugin.name)), u = /* @__PURE__ */ se(() => uo(s(l))), o = /* @__PURE__ */ se(() => s(i) || !s(r) && !e.plugin.compatible);
  function d(le) {
    if (le.stopPropagation(), !s(i))
      if (s(r))
        s(a) ? e.onDisable() : e.onEnable();
      else {
        if (!e.plugin.compatible) return;
        e.onInstall();
      }
  }
  var c = ff();
  let h;
  var f = Q(c), p = Q(f), v = Q(p), m = Q(v), g = X(p, 2);
  let E;
  var D = Q(g);
  {
    var S = (le) => {
      var ce = tt("Install");
      L(le, ce);
    }, C = (le) => {
      var ce = tt("Disable");
      L(le, ce);
    }, O = (le) => {
      var ce = tt("Enable");
      L(le, ce);
    };
    oe(D, (le) => {
      s(r) ? s(a) ? le(C, 1) : le(O, -1) : le(S);
    });
  }
  var w = X(f, 2), M = Q(w), I = X(w, 2), x = Q(I), G = Q(x), ne = Q(G), k = X(G), U = X(I, 2), Pe = Q(U), Z = X(U, 2), F = Q(Z);
  {
    var H = (le) => {
      var ce = of();
      L(le, ce);
    }, $ = (le) => {
      var ce = uf(), T = Q(ce);
      Fe(
        (K) => {
          Kn(ce, 1, `badge badge-${K ?? ""} bp-typo-button`, "svelte-1myq0bn"), ye(T, e.plugin.installationState === "INSTALLED" ? "Installed" : "Available");
        },
        [() => e.plugin.installationState.toLowerCase()]
      ), L(le, ce);
    };
    oe(F, (le) => {
      s(t) || s(i) ? le(H) : le($, -1);
    });
  }
  var ue = X(F, 2);
  {
    var V = (le) => {
      var ce = df(), T = Q(ce);
      Fe(
        (K) => {
          Kn(ce, 1, `badge badge-${K ?? ""} bp-typo-button`, "svelte-1myq0bn"), ye(T, s(a) ? "Active" : "Inactive");
        },
        [() => e.plugin.activationState.toLowerCase()]
      ), L(le, ce);
    };
    oe(ue, (le) => {
      s(r) && le(V);
    });
  }
  var he = X(ue, 2);
  {
    var me = (le) => {
      var ce = cf();
      L(le, ce);
    };
    oe(he, (le) => {
      e.plugin.compatible || le(me);
    });
  }
  Fe(() => {
    h = Kn(c, 1, "plugin-card svelte-1myq0bn", null, h, {
      selected: e.selected,
      incompatible: !e.plugin.compatible
    }), Rn(c, "aria-pressed", e.selected), ye(m, e.plugin.icon), E = Kn(g, 1, "action-btn bp-typo-button", null, E, {
      disable: s(r) && s(a),
      enable: s(r) && !s(a),
      install: !s(r) && !s(t) && !s(i)
    }), g.disabled = s(o), Rn(g, "title", s(i) ? s(u) : void 0), Rn(g, "aria-label", s(r) ? s(a) ? "Disable" : "Enable" : "Install"), ye(M, e.plugin.name), ye(ne, e.plugin.kindIcon), ye(k, ` ${e.plugin.kindText ?? ""}`), ye(Pe, e.plugin.description);
  }), gn("click", c, function(...le) {
    var ce;
    (ce = e.onSelect) == null || ce.apply(this, le);
  }), gn("keydown", c, (le) => le.key === "Enter" && e.onSelect()), gn("click", g, d), L(n, c), Qe();
}
ss(["click", "keydown"]);
var vf = /* @__PURE__ */ re('<img class="provider-icon svelte-1ttjeex"/>'), pf = /* @__PURE__ */ re('<span class="material-icons-outlined provider-icon svelte-1ttjeex"> </span>'), mf = /* @__PURE__ */ re('<section class="provider-card svelte-1ttjeex"><div class="provider-header svelte-1ttjeex"><div class="provider-info svelte-1ttjeex"><h3 class="provider-name bp-typo-h3 svelte-1ttjeex"> </h3> <span class="provider-description bp-typo-body svelte-1ttjeex"> </span></div> <!></div> <div class="plugins-grid svelte-1ttjeex"></div></section>');
function gf(n, e) {
  Ye(e, !0);
  var t = mf(), i = Q(t), r = Q(i), a = Q(r), l = Q(a), u = X(a, 2), o = Q(u), d = X(r, 2);
  {
    var c = (v) => {
      var m = vf();
      Fe(() => {
        Rn(m, "src", e.provider.icon), Rn(m, "alt", `${e.provider.name ?? ""} logo`);
      }), Kl("error", m, (g) => g.currentTarget.style.display = "none"), L(v, m);
    }, h = /* @__PURE__ */ se(() => e.provider.icon.startsWith("http") || e.provider.icon.startsWith("/") || e.provider.icon.startsWith("data:")), f = (v) => {
      var m = pf(), g = Q(m);
      Fe(() => ye(g, e.provider.icon)), L(v, m);
    };
    oe(d, (v) => {
      s(h) ? v(c) : v(f, -1);
    });
  }
  var p = X(i, 2);
  vr(p, 21, () => e.plugins, (v) => yr(v), (v, m) => {
    {
      let g = /* @__PURE__ */ se(() => e.selectedPluginKey === yr(s(m)));
      hf(v, {
        get plugin() {
          return s(m);
        },
        get selected() {
          return s(g);
        },
        onSelect: () => e.onSelectPlugin(s(m)),
        onInstall: () => e.onInstall(s(m)),
        onUninstall: () => e.onUninstall(s(m)),
        onEnable: () => e.onEnable(s(m)),
        onDisable: () => e.onDisable(s(m))
      });
    }
  }), Fe(() => {
    ye(l, e.provider.name), ye(o, e.provider.description);
  }), L(n, t), Qe();
}
var If = /* @__PURE__ */ re('<span class="badge badge-builtin bp-typo-button">Built-in</span>'), bf = /* @__PURE__ */ re("<span> </span>"), yf = /* @__PURE__ */ re("<span> </span>"), Af = /* @__PURE__ */ re('<span class="badge badge-incompatible bp-typo-button">Incompatible</span>'), Ef = /* @__PURE__ */ re('<div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Active by default</span> <span class="bp-typo-16-regular"> </span></div> <div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Requires document</span> <span class="bp-typo-16-regular"> </span></div>', 1), Cf = /* @__PURE__ */ re('<div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Supported Version</span> <span class="bp-typo-16-regular"><!></span></div>'), Sf = /* @__PURE__ */ re('<div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Current Core</span> <span class="bp-typo-16-regular"> </span></div>'), xf = /* @__PURE__ */ re('<p class="details-long-desc bp-typo-body svelte-yr5wcf"> </p>'), Tf = /* @__PURE__ */ re('<button class="action-btn disable bp-typo-button svelte-yr5wcf" disabled="" aria-label="Disable">Disable</button>'), Lf = /* @__PURE__ */ re('<button class="action-btn enable bp-typo-button svelte-yr5wcf" disabled="" aria-label="Enable">Enable</button>'), wf = /* @__PURE__ */ re('<button class="action-btn disable bp-typo-button svelte-yr5wcf">Disable</button>'), Mf = /* @__PURE__ */ re('<button class="action-btn enable bp-typo-button svelte-yr5wcf">Enable</button>'), Of = /* @__PURE__ */ re('<button class="action-btn install bp-typo-button svelte-yr5wcf">Install</button>'), Df = /* @__PURE__ */ re('<button class="action-btn disable bp-typo-button svelte-yr5wcf">Disable</button>'), Rf = /* @__PURE__ */ re('<button class="action-btn enable bp-typo-button svelte-yr5wcf">Enable</button>'), _f = /* @__PURE__ */ re('<button class="action-btn remove bp-typo-button svelte-yr5wcf">Remove</button> <!>', 1), Pf = /* @__PURE__ */ re('<aside class="plugin-details svelte-yr5wcf"><div class="details-header svelte-yr5wcf"><div class="details-title-row bp-typo-h1 svelte-yr5wcf"><span class="material-icons-outlined details-icon svelte-yr5wcf"> </span> <h3 class="details-name svelte-yr5wcf"> </h3> <button class="close-btn svelte-yr5wcf" aria-label="Close details">✕</button></div> <div class="details-kind-wrapper svelte-yr5wcf"><div class="badge badge-kind bp-typo-label"><span class="material-icons-outlined badge-icon"> </span> </div></div> <p class="details-short-desc bp-typo-body svelte-yr5wcf"> </p> <div class="details-badges svelte-yr5wcf"><!> <!> <!></div></div> <div class="details-meta svelte-yr5wcf"><div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Provider</span> <span class="bp-typo-16-regular"> </span></div> <div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Author</span> <span class="bp-typo-16-regular"> </span></div> <!> <!> <!></div> <div class="details-url svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">URL</span> <a target="_blank" rel="noopener noreferrer"> </a></div> <!> <div class="details-actions svelte-yr5wcf"><div style="flex: 1"></div> <!></div></aside>');
function kf(n, e) {
  Ye(e, !0);
  const t = /* @__PURE__ */ se(() => e.plugin.builtin === !0), i = /* @__PURE__ */ se(() => e.plugin.shadowedByHostBuiltin === !0), r = /* @__PURE__ */ se(() => e.plugin.installationState === "INSTALLED" || s(t) || s(i)), a = /* @__PURE__ */ se(() => e.plugin.activationState === "ACTIVE"), l = /* @__PURE__ */ se(() => ar(e.plugin.provider, e.plugin.name)), u = /* @__PURE__ */ se(() => uo(s(l)));
  var o = Pf(), d = Q(o), c = Q(d), h = Q(c), f = Q(h), p = X(h, 2), v = Q(p), m = X(p, 2), g = X(c, 2), E = Q(g), D = Q(E), S = Q(D), C = X(D), O = X(g, 2), w = Q(O), M = X(O, 2), I = Q(M);
  {
    var x = (J) => {
      var ee = If();
      L(J, ee);
    }, G = (J) => {
      var ee = bf(), Se = Q(ee);
      Fe(
        (ke) => {
          Kn(ee, 1, `badge badge-${ke ?? ""} bp-typo-button`, "svelte-yr5wcf"), ye(Se, e.plugin.installationState === "INSTALLED" ? "Installed" : "Available");
        },
        [() => e.plugin.installationState.toLowerCase()]
      ), L(J, ee);
    };
    oe(I, (J) => {
      s(t) || s(i) ? J(x) : J(G, -1);
    });
  }
  var ne = X(I, 2);
  {
    var k = (J) => {
      var ee = yf(), Se = Q(ee);
      Fe(
        (ke) => {
          Kn(ee, 1, `badge badge-${ke ?? ""} bp-typo-button`, "svelte-yr5wcf"), ye(Se, s(a) ? "Active" : "Inactive");
        },
        [() => e.plugin.activationState.toLowerCase()]
      ), L(J, ee);
    };
    oe(ne, (J) => {
      s(r) && J(k);
    });
  }
  var U = X(ne, 2);
  {
    var Pe = (J) => {
      var ee = Af();
      L(J, ee);
    };
    oe(U, (J) => {
      e.plugin.compatible || J(Pe);
    });
  }
  var Z = X(d, 2), F = Q(Z), H = X(Q(F), 2), $ = Q(H), ue = X(F, 2), V = X(Q(ue), 2), he = Q(V), me = X(ue, 2);
  {
    var le = (J) => {
      var ee = Ef(), Se = ae(ee), ke = X(Q(Se), 2), yt = Q(ke), He = X(Se, 2), Ve = X(Q(He), 2), N = Q(Ve);
      Fe(() => {
        ye(yt, e.plugin.activeByDefault ? "Yes" : "No"), ye(N, e.plugin.requireDoc ? "Yes" : "No");
      }), L(J, ee);
    };
    oe(me, (J) => {
      s(t) && J(le);
    });
  }
  var ce = X(me, 2);
  {
    var T = (J) => {
      var ee = Cf(), Se = X(Q(ee), 2), ke = Q(Se);
      {
        var yt = (N) => {
          var q = tt();
          Fe(() => ye(q, `${e.plugin.supportedCoreVersion.from ?? ""} – ${e.plugin.supportedCoreVersion.to ?? ""}`)), L(N, q);
        }, He = (N) => {
          var q = tt();
          Fe(() => ye(q, `≥ ${e.plugin.supportedCoreVersion.from ?? ""}`)), L(N, q);
        }, Ve = (N) => {
          var q = tt();
          Fe(() => ye(q, "< " + e.plugin.supportedCoreVersion.to)), L(N, q);
        };
        oe(ke, (N) => {
          e.plugin.supportedCoreVersion.from && e.plugin.supportedCoreVersion.to ? N(yt) : e.plugin.supportedCoreVersion.from ? N(He, 1) : e.plugin.supportedCoreVersion.to && N(Ve, 2);
        });
      }
      L(J, ee);
    };
    oe(ce, (J) => {
      e.plugin.supportedCoreVersion && (e.plugin.supportedCoreVersion.from || e.plugin.supportedCoreVersion.to) && J(T);
    });
  }
  var K = X(ce, 2);
  {
    var R = (J) => {
      var ee = Sf(), Se = X(Q(ee), 2), ke = Q(Se);
      Fe(() => ye(ke, e.coreVersion)), L(J, ee);
    };
    oe(K, (J) => {
      e.coreVersion && J(R);
    });
  }
  var z = X(Z, 2), P = X(Q(z), 2), j = Q(P), ie = X(z, 2);
  {
    var Ee = (J) => {
      var ee = xf(), Se = Q(ee);
      Fe(() => ye(Se, e.plugin.longDescription)), L(J, ee);
    };
    oe(ie, (J) => {
      e.plugin.longDescription && J(Ee);
    });
  }
  var Ge = X(ie, 2), Ue = X(Q(Ge), 2);
  {
    var Ce = (J) => {
      var ee = ve(), Se = ae(ee);
      {
        var ke = (He) => {
          var Ve = Tf();
          Fe(() => Rn(Ve, "title", s(u))), L(He, Ve);
        }, yt = (He) => {
          var Ve = Lf();
          Fe(() => Rn(Ve, "title", s(u))), L(He, Ve);
        };
        oe(Se, (He) => {
          s(a) ? He(ke) : He(yt, -1);
        });
      }
      L(J, ee);
    }, Lt = (J) => {
      var ee = ve(), Se = ae(ee);
      {
        var ke = (He) => {
          var Ve = wf();
          gn("click", Ve, () => e.onDisable(e.plugin)), L(He, Ve);
        }, yt = (He) => {
          var Ve = Mf();
          gn("click", Ve, () => e.onEnable(e.plugin)), L(He, Ve);
        };
        oe(Se, (He) => {
          s(a) ? He(ke) : He(yt, -1);
        });
      }
      L(J, ee);
    }, Zt = (J) => {
      var ee = Of();
      Fe(() => ee.disabled = !e.plugin.compatible), gn("click", ee, () => e.onInstall(e.plugin)), L(J, ee);
    }, Jt = (J) => {
      var ee = _f(), Se = ae(ee), ke = X(Se, 2);
      {
        var yt = (Ve) => {
          var N = Df();
          gn("click", N, () => e.onDisable(e.plugin)), L(Ve, N);
        }, He = (Ve) => {
          var N = Rf();
          gn("click", N, () => e.onEnable(e.plugin)), L(Ve, N);
        };
        oe(ke, (Ve) => {
          s(a) ? Ve(yt) : Ve(He, -1);
        });
      }
      gn("click", Se, () => e.onUninstall(e.plugin)), L(J, ee);
    };
    oe(Ue, (J) => {
      s(i) ? J(Ce) : s(t) ? J(Lt, 1) : s(r) ? J(Jt, -1) : J(Zt, 2);
    });
  }
  Fe(() => {
    ye(f, e.plugin.icon), ye(v, s(l)), ye(S, e.plugin.kindIcon), ye(C, ` ${e.plugin.kindText ?? ""}`), ye(w, e.plugin.description), ye($, e.plugin.provider.name), ye(he, e.plugin.author), Rn(P, "href", e.plugin.src), ye(j, e.plugin.src);
  }), gn("click", m, function(...J) {
    var ee;
    (ee = e.onClose) == null || ee.apply(this, J);
  }), L(n, o), Qe();
}
ss(["click"]);
var Ff = /* @__PURE__ */ re("<!> <!> <!>", 1), Bf = /* @__PURE__ */ re("<!> <!>", 1), Uf = /* @__PURE__ */ re("<!> <!>", 1), Nf = /* @__PURE__ */ re('<p class="error-message bp-typo-body svelte-1u53k0h"> </p>'), Hf = /* @__PURE__ */ re('<div class="load-errors svelte-1u53k0h"></div>'), Vf = /* @__PURE__ */ re('<div class="loading bp-typo-16-regular svelte-1u53k0h">Loading plugins…</div>'), jf = /* @__PURE__ */ re('<div class="empty-state bp-typo-body svelte-1u53k0h">No plugins match your search.</div>'), Gf = /* @__PURE__ */ re('<div class="plugins-hub bp-typo-body svelte-1u53k0h"><div class="hub-toolbar svelte-1u53k0h"><!> <!> <!> <!></div> <!> <div><div class="providers-list svelte-1u53k0h"><!></div> <!></div></div>');
function zf(n, e) {
  Ye(e, !0);
  let t = b(e, "coreVersion", 19, af), i = /* @__PURE__ */ fe(Oe([])), r = /* @__PURE__ */ fe(Oe([])), a = /* @__PURE__ */ fe(!0), l = /* @__PURE__ */ fe(Oe([])), u = /* @__PURE__ */ fe(null), o = /* @__PURE__ */ fe(""), d = /* @__PURE__ */ fe("all"), c = /* @__PURE__ */ fe("all"), h = /* @__PURE__ */ fe("all");
  const f = lf.map((T) => ({ ...T, icon: ja(T.icon) }));
  async function p() {
    W(a, !0), W(l, [], !0);
    const T = Uc(), K = [], R = [], z = await $c(T, t());
    for (const Ee of z)
      R.push(Ee.provider), K.push(...Ee.plugins);
    const P = await Rc(f);
    for (const Ee of P) {
      Ee.error && W(
        l,
        [
          ...s(l),
          `Error loading Provider '${Ee.provider.name}': ${Ee.error}`
        ],
        !0
      ), R.push(Ee.provider);
      for (const Ge of Ee.plugins)
        K.push(hs(Ge, Ee.provider, t(), T));
    }
    const j = ef(K), ie = nf(T, j, t());
    ie.length >= 1 && (R.push(ji), K.push(...ie)), W(r, R, !0), W(i, Hc(K), !0), W(a, !1);
  }
  function v(T) {
    var K;
    return ((K = T == null ? void 0 : T.provider) == null ? void 0 : K.name) === ji.name;
  }
  Be(() => {
    t(), p();
  });
  function m(T) {
    return s(g).filter((K) => K.provider.name === T);
  }
  const g = /* @__PURE__ */ se(() => s(i).filter((T) => {
    var j;
    const K = !s(o) || T.name.toLowerCase().includes(s(o).toLowerCase()) || T.description.toLowerCase().includes(s(o).toLowerCase()), R = s(d) === "all" || s(d) === "installed" && T.installationState === "INSTALLED" || s(d) === "available" && T.installationState === "AVAILABLE", z = s(c) === "all" || ((j = T.provider) == null ? void 0 : j.name) === s(c), P = s(h) === "all" || T.kind === s(h);
    return K && R && z && P;
  }));
  function E(T) {
    if (!T.compatible || T.builtin || T.shadowedByHostBuiltin)
      return;
    W(i, Vc(s(i), T), !0);
    const K = s(i).find((R) => nn(R, T));
    s(u) && nn(s(u), T) && W(u, K ?? null, !0), K && M(K);
  }
  function D(T) {
    const K = s(i).find((j) => nn(j, T));
    if (K != null && K.builtin || K != null && K.shadowedByHostBuiltin)
      return;
    if (v(K)) {
      W(i, s(i).filter((j) => !nn(j, T)), !0), s(i).some((j) => v(j)) || (s(c) === ji.name && W(c, "all"), setTimeout(
        () => {
          W(r, s(r).filter((j) => j.name !== ji.name), !0);
        },
        1
      )), s(u) && nn(s(u), T) && W(u, null), K && M(K, !0);
      return;
    }
    const { updated: R, success: z } = jc(s(i), T);
    W(i, R, !0);
    const P = s(i).find((j) => nn(j, T));
    s(u) && nn(s(u), T) && W(u, P ?? null, !0), K && z && M(K, !0);
  }
  function S(T) {
    if (T.shadowedByHostBuiltin)
      return;
    W(i, Gc(s(i), T), !0);
    const K = s(i).find((R) => nn(R, T));
    s(u) && nn(s(u), T) && W(u, K ?? null, !0), K && M(K);
  }
  function C(T) {
    if (T.shadowedByHostBuiltin)
      return;
    W(i, zc(s(i), T), !0);
    const K = s(i).find((R) => nn(R, T));
    s(u) && nn(s(u), T) && W(u, K ?? null, !0), K && M(K);
  }
  function O(T) {
    W(u, s(u) && nn(s(u), T) ? null : T, !0);
  }
  function w() {
    W(u, null);
  }
  function M(T, K = !1) {
    var Ee, Ge;
    const R = T.builtin === !0 ? s(i).find((Ue) => {
      var Ce;
      return ((Ce = Ue.provider) == null ? void 0 : Ce.source) === "builtin" && Ue.name === T.name && Ue.kind === T.kind;
    }) : void 0, z = T.builtin === !0 ? T.name : ar(T.provider, T.name), P = T.builtin === !0 ? (R == null ? void 0 : R.src) ?? T.src : ja(T.src), j = K ? { name: z, kind: T.kind, config: null } : {
      name: z,
      kind: T.kind,
      config: {
        name: z,
        author: T.author || ((Ee = T.provider) == null ? void 0 : Ee.name),
        src: P,
        icon: T.icon,
        kind: T.kind,
        description: T.description,
        requireDoc: T.requireDoc ?? !0,
        position: T.position || (T.kind === "menu" ? "middle" : void 0),
        active: T.activationState === "ACTIVE",
        activeByDefault: (R == null ? void 0 : R.activeByDefault) ?? T.activeByDefault,
        installed: T.installationState === "INSTALLED"
      }
    }, ie = new CustomEvent("oscd-configure-plugin", { bubbles: !0, composed: !0, detail: j });
    (Ge = ps()) == null || Ge.dispatchEvent(ie);
  }
  var I = Gf(), x = Q(I), G = Q(x);
  Zd(G, {
    label: "Search plugins",
    placeholder: "Search...",
    variant: "outlined",
    style: "flex: 1; background: var(--bearingpoint-color-surface)",
    get value() {
      return s(o);
    },
    set value(K) {
      W(o, K, !0);
    },
    leadingIcon: (K) => {
      wc(K, {
        class: "material-icons-outlined",
        children: (R, z) => {
          var P = tt("search");
          L(R, P);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { leadingIcon: !0 }
  });
  var ne = X(G, 2);
  ya(ne, {
    style: "background: var(--bearingpoint-color-surface)",
    variant: "outlined",
    get value() {
      return s(d);
    },
    set value(T) {
      W(d, T, !0);
    },
    children: (T, K) => {
      var R = Ff(), z = ae(R);
      Ii(z, {
        value: "all",
        children: (ie, Ee) => {
          var Ge = tt("All status");
          L(ie, Ge);
        },
        $$slots: { default: !0 }
      });
      var P = X(z, 2);
      Ii(P, {
        value: "installed",
        children: (ie, Ee) => {
          var Ge = tt("Installed");
          L(ie, Ge);
        },
        $$slots: { default: !0 }
      });
      var j = X(P, 2);
      Ii(j, {
        value: "available",
        children: (ie, Ee) => {
          var Ge = tt("Available");
          L(ie, Ge);
        },
        $$slots: { default: !0 }
      }), L(T, R);
    },
    $$slots: { default: !0 }
  });
  var k = X(ne, 2);
  ya(k, {
    style: "width:300px; background: var(--bearingpoint-color-surface)",
    variant: "outlined",
    get value() {
      return s(c);
    },
    set value(T) {
      W(c, T, !0);
    },
    children: (T, K) => {
      var R = Bf(), z = ae(R);
      Ii(z, {
        value: "all",
        children: (j, ie) => {
          var Ee = tt("All contributors");
          L(j, Ee);
        },
        $$slots: { default: !0 }
      });
      var P = X(z, 2);
      vr(P, 17, () => s(r), Fr, (j, ie) => {
        Ii(j, {
          get value() {
            return s(ie).name;
          },
          children: (Ee, Ge) => {
            var Ue = tt();
            Fe(() => ye(Ue, s(ie).name)), L(Ee, Ue);
          },
          $$slots: { default: !0 }
        });
      }), L(T, R);
    },
    $$slots: { default: !0 }
  });
  var U = X(k, 2);
  ya(U, {
    style: "background: var(--bearingpoint-color-surface)",
    variant: "outlined",
    get value() {
      return s(h);
    },
    set value(T) {
      W(h, T, !0);
    },
    children: (T, K) => {
      var R = Uf(), z = ae(R);
      Ii(z, {
        value: "all",
        children: (j, ie) => {
          var Ee = tt("All kinds");
          L(j, Ee);
        },
        $$slots: { default: !0 }
      });
      var P = X(z, 2);
      vr(P, 17, () => cs, Fr, (j, ie) => {
        Ii(j, {
          get value() {
            return s(ie);
          },
          children: (Ee, Ge) => {
            var Ue = tt();
            Fe((Ce) => ye(Ue, Ce), [
              () => s(ie).charAt(0).toUpperCase() + s(ie).slice(1)
            ]), L(Ee, Ue);
          },
          $$slots: { default: !0 }
        });
      }), L(T, R);
    },
    $$slots: { default: !0 }
  });
  var Pe = X(x, 2);
  {
    var Z = (T) => {
      var K = Hf();
      vr(K, 21, () => s(l), Fr, (R, z) => {
        var P = Nf(), j = Q(P);
        Fe(() => ye(j, `⚠️ ${s(z) ?? ""}`)), L(R, P);
      }), L(T, K);
    };
    oe(Pe, (T) => {
      s(l).length > 0 && T(Z);
    });
  }
  var F = X(Pe, 2);
  let H;
  var $ = Q(F), ue = Q($);
  {
    var V = (T) => {
      var K = Vf();
      L(T, K);
    }, he = (T) => {
      var K = jf();
      L(T, K);
    }, me = (T) => {
      var K = ve(), R = ae(K);
      vr(R, 17, () => s(r), Fr, (z, P) => {
        const j = /* @__PURE__ */ se(() => m(s(P).name));
        var ie = ve(), Ee = ae(ie);
        {
          var Ge = (Ue) => {
            {
              let Ce = /* @__PURE__ */ se(() => s(u) ? yr(s(u)) : null);
              gf(Ue, {
                get provider() {
                  return s(P);
                },
                get plugins() {
                  return s(j);
                },
                get selectedPluginKey() {
                  return s(Ce);
                },
                onSelectPlugin: O,
                onInstall: E,
                onUninstall: D,
                onEnable: S,
                onDisable: C
              });
            }
          };
          oe(Ee, (Ue) => {
            s(j).length > 0 && Ue(Ge);
          });
        }
        L(z, ie);
      }), L(T, K);
    };
    oe(ue, (T) => {
      s(a) ? T(V) : s(g).length === 0 ? T(he, 1) : T(me, -1);
    });
  }
  var le = X($, 2);
  {
    var ce = (T) => {
      kf(T, {
        get plugin() {
          return s(u);
        },
        onClose: w,
        onInstall: E,
        onUninstall: D,
        onEnable: S,
        onDisable: C,
        get coreVersion() {
          return t();
        }
      });
    };
    oe(le, (T) => {
      s(u) !== null && T(ce);
    });
  }
  Fe(() => H = Kn(F, 1, "hub-body svelte-1u53k0h", null, H, { "with-details": s(u) !== null })), L(n, I), Qe();
}
function Xf(n, e) {
  zf(n, {
    get coreVersion() {
      return e.coreVersion;
    }
  });
}
const Wf = "plugins-hub", Kf = "0.0.1";
var Yi;
class Jf extends HTMLElement {
  constructor() {
    super();
    Ie(this, Yi);
    this.targetDiv = null, this.originalStyles = {}, xe(this, Yi, /* @__PURE__ */ fe(Oe({ doc: void 0, editCount: void 0, coreVersion: void 0 })));
  }
  get props() {
    return s(y(this, Yi));
  }
  set props(t) {
    W(y(this, Yi), t, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this._editCount, this.props.coreVersion = this._coreVersion;
    const t = this.shadowRoot;
    if (!t)
      throw new Error("ShadowRoot not found");
    t.appendChild(Yf()), zu(Xf, { target: t, props: this.props }), requestAnimationFrame(() => this.applyLayoutHack());
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
    const t = ps();
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
Yi = new WeakMap();
const qf = ".plugin-card.svelte-1myq0bn{background:var(--bearingpoint-color-surface);border:1px solid var(--bearingpoint-color-border);border-radius:6px;padding:12px;cursor:pointer;transition:border-color .15s,box-shadow .15s;display:flex;flex-direction:column;gap:6px;-webkit-user-select:none;user-select:none}.plugin-card.svelte-1myq0bn:hover{border-color:var(--bearingpoint-color-border-hover)}.plugin-card.selected.svelte-1myq0bn{border-color:var(--bearingpoint-color-border-strong);box-shadow:0 0 0 1px var(--bearingpoint-color-border-strong)}.plugin-card.incompatible.svelte-1myq0bn{opacity:.6}.card-top.svelte-1myq0bn{display:flex;align-items:flex-start;justify-content:space-between}.plugin-icon-wrapper.svelte-1myq0bn{margin:auto 0;width:28px;height:28px;display:flex;align-items:center;justify-content:center}.plugin-icon.svelte-1myq0bn{width:28px;height:28px;object-fit:contain}.plugin-name.svelte-1myq0bn{color:var(--bearingpoint-color-text-dark)}.plugin-description.svelte-1myq0bn{display:-webkit-box;line-clamp:3;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.plugin-kind-wrapper.svelte-1myq0bn{display:flex;flex-wrap:wrap;gap:4px}.plugin-badges.svelte-1myq0bn{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px}.provider-card.svelte-1ttjeex{background:var(--bearingpoint-color-surface);border:none;border-radius:8px;padding:20px 20px 16px;box-shadow:none}.provider-header.svelte-1ttjeex{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px}.provider-info.svelte-1ttjeex{display:flex;flex-direction:column;gap:2px}.provider-name.svelte-1ttjeex{margin:0}.provider-description.svelte-1ttjeex{color:var(--bearingpoint-color-text-secondary)}.provider-icon.svelte-1ttjeex{height:40px;object-fit:contain;border-radius:4px}.plugins-grid.svelte-1ttjeex{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px}.plugin-details.svelte-yr5wcf{width:440px;min-width:280px;border-left:1px solid var(--bearingpoint-color-border);background:var(--bearingpoint-color-surface);display:flex;flex-direction:column;overflow-y:auto;padding:20px;gap:24px}.details-header.svelte-yr5wcf{display:flex;flex-direction:column;gap:4px}.details-title-row.svelte-yr5wcf{display:flex;align-items:center;gap:8px}.details-icon.svelte-yr5wcf{width:24px;height:24px;object-fit:contain}.details-name.svelte-yr5wcf{flex:1;margin:0;color:var(--bearingpoint-color-text-dark)}.close-btn.svelte-yr5wcf{background:none;border:none;font-size:var(--bearingpoint-text-h1-size);cursor:pointer;color:var(--bearingpoint-color-text-secondary);padding:0 2px;line-height:1}.close-btn.svelte-yr5wcf:hover{color:var(--bearingpoint-color-text-dark)}.details-short-desc.svelte-yr5wcf{margin:0}.details-kind-wrapper.svelte-yr5wcf{display:flex;flex-wrap:wrap;gap:4px}.details-badges.svelte-yr5wcf{display:flex;flex-wrap:wrap;gap:4px;margin-top:6px}.details-meta.svelte-yr5wcf{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0}.meta-item.svelte-yr5wcf{display:flex;flex-direction:column;gap:2px}.meta-label.svelte-yr5wcf{color:var(--bearingpoint-color-text-secondary)}.details-url.svelte-yr5wcf{display:flex;flex-direction:column;gap:4px}.details-long-desc.svelte-yr5wcf{margin:0}.details-actions.svelte-yr5wcf{display:flex;gap:8px;margin-top:auto;padding-top:16px;border-top:1px solid var(--bearingpoint-color-border)}.action-btn.svelte-yr5wcf{flex:0;padding-right:12px;padding-left:12px}.mdc-banner__graphic{color:#fff;color:var(--mdc-theme-surface, #fff)}.mdc-banner__graphic{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-banner__content,.mdc-banner__fixed{min-width:344px}@media (max-width: 480px),(max-width: 344px){.mdc-banner__content,.mdc-banner__fixed{min-width:100%}}.mdc-banner__content{max-width:720px}.mdc-banner{z-index:1;border-bottom-style:solid;box-sizing:border-box;display:none;flex-shrink:0;height:0;position:relative;width:100%}@media (max-width: 480px){.mdc-banner .mdc-banner__fixed{left:0;right:0}.mdc-banner .mdc-banner__text{margin-left:16px;margin-right:36px}[dir=rtl] .mdc-banner .mdc-banner__text,.mdc-banner .mdc-banner__text[dir=rtl]{margin-left:36px;margin-right:16px}}@media (max-width: 480px){.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__content{flex-wrap:wrap}.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__graphic{margin-bottom:12px}.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text{margin-left:16px;margin-right:8px;padding-bottom:4px}[dir=rtl] .mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text,.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__text[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-banner.mdc-banner--mobile-stacked .mdc-banner__actions{margin-left:auto}}.mdc-banner--opening,.mdc-banner--open,.mdc-banner--closing{display:flex}.mdc-banner--open{transition:height .3s ease}.mdc-banner--open .mdc-banner__content{transition:transform .3s ease;transform:translateY(0)}.mdc-banner--closing{transition:height .25s ease}.mdc-banner--closing .mdc-banner__content{transition:transform .25s ease}.mdc-banner--centered .mdc-banner__content{left:0;margin-left:auto;margin-right:auto;right:0}.mdc-banner__fixed{border-bottom-style:solid;box-sizing:border-box;height:inherit;position:fixed;width:100%}.mdc-banner__content{display:flex;min-height:52px;position:absolute;transform:translateY(-100%);width:100%}.mdc-banner__graphic-text-wrapper{display:flex;width:100%}.mdc-banner__graphic{margin:16px 0 16px 16px;flex-shrink:0;text-align:center}[dir=rtl] .mdc-banner__graphic,.mdc-banner__graphic[dir=rtl]{margin-left:0;margin-right:16px}.mdc-banner__icon{position:relative;top:50%;transform:translateY(-50%)}.mdc-banner__text{margin-left:24px;margin-right:90px;align-self:center;flex-grow:1;padding-top:16px;padding-bottom:16px}[dir=rtl] .mdc-banner__text,.mdc-banner__text[dir=rtl]{margin-left:90px;margin-right:24px}.mdc-banner__actions{padding:8px 8px 8px 0;align-self:flex-end;display:flex;flex-shrink:0}[dir=rtl] .mdc-banner__actions,.mdc-banner__actions[dir=rtl]{padding-left:8px;padding-right:0}.mdc-banner{background-color:#fff;border-bottom-color:#0000001f;border-bottom-width:1px;border-radius:0}.mdc-banner .mdc-banner__text{color:#000}.mdc-banner .mdc-banner__text{letter-spacing:.0178571429em;font-size:.875rem;font-family:Roboto,sans-serif;font-weight:400;line-height:1.25rem}.mdc-banner .mdc-banner__graphic{border-radius:50%}.mdc-banner .mdc-banner__graphic{height:40px;width:40px}.mdc-banner .mdc-banner__fixed{background-color:#fff}.mdc-banner .mdc-banner__fixed{border-bottom-color:#0000001f}.mdc-banner .mdc-banner__fixed{border-bottom-width:1px}.mdc-banner .mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-text-button-label-text-color, #6200ee)}.mdc-banner .mdc-button .mdc-button__ripple:before,.mdc-banner .mdc-button .mdc-button__ripple:after{background-color:#6200ee;background-color:var(--mdc-text-button-hover-state-layer-color, #6200ee)}.mdc-banner .mdc-button:hover .mdc-button__ripple:before,.mdc-banner .mdc-button.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.04;opacity:var(--mdc-text-button-hover-state-layer-opacity, .04)}.mdc-banner .mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.mdc-banner .mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-text-button-focus-state-layer-opacity, .12)}.mdc-banner .mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.mdc-banner .mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.1;opacity:var(--mdc-text-button-pressed-state-layer-opacity, .1)}.mdc-banner .mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-text-button-pressed-state-layer-opacity, .1)}.mdc-banner__secondary-action{margin-left:0;margin-right:8px}[dir=rtl] .mdc-banner__secondary-action,.mdc-banner__secondary-action[dir=rtl]{margin-left:8px;margin-right:0}.smui-banner--force-show{display:flex!important}.mdc-banner--closing,.mdc-banner--opening{overflow-y:hidden}.mdc-banner__actions{align-self:center}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity .28s cubic-bezier(.4,0,.2,1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-user-select:none;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:#0000}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px);display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring:after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring:after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring:after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none)}.mdc-button{padding:0 8px}.mdc-button--unelevated{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);padding:0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);padding:0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border .28s cubic-bezier(.4,0,.2,1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:#0000}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-button .mdc-button__ripple:before,.mdc-button .mdc-button__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button .mdc-button__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-button .mdc-button__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button .mdc-button__ripple:before,.mdc-button .mdc-button__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button__ripple{position:absolute;box-sizing:content-box;overflow:hidden;z-index:0;top:0;left:0;bottom:0;right:0}.mdc-button{font-family:Roboto,sans-serif;font-family:var(--mdc-text-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));font-size:.875rem;font-size:var(--mdc-text-button-label-text-size, var(--mdc-typography-button-font-size, .875rem));letter-spacing:.0892857143em;letter-spacing:var(--mdc-text-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, .0892857143em));font-weight:500;font-weight:var(--mdc-text-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:uppercase;text-transform:var(--mdc-text-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));height:36px;height:var(--mdc-text-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-text-button-label-text-color, var(--mdc-theme-primary, #6200ee))}.mdc-button:disabled{color:#00000061;color:var(--mdc-text-button-disabled-label-text-color, rgba(0, 0, 0, .38))}.mdc-button .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-text-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-text-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-text-button-with-icon-icon-size, 1.125rem)}.mdc-button .mdc-button__ripple:before,.mdc-button .mdc-button__ripple:after{background-color:#6200ee;background-color:var(--mdc-text-button-hover-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-button:hover .mdc-button__ripple:before,.mdc-button.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.04;opacity:var(--mdc-text-button-hover-state-layer-opacity, .04)}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-text-button-focus-state-layer-opacity, .12)}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-text-button-pressed-state-layer-opacity, .12)}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-text-button-pressed-state-layer-opacity, .12)}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--unelevated{font-family:Roboto,sans-serif;font-family:var(--mdc-filled-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));font-size:.875rem;font-size:var(--mdc-filled-button-label-text-size, var(--mdc-typography-button-font-size, .875rem));letter-spacing:.0892857143em;letter-spacing:var(--mdc-filled-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, .0892857143em));font-weight:500;font-weight:var(--mdc-filled-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:uppercase;text-transform:var(--mdc-filled-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));height:36px;height:var(--mdc-filled-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-filled-button-container-color, var(--mdc-theme-primary, #6200ee))}.mdc-button--unelevated:disabled{background-color:#0000001f;background-color:var(--mdc-filled-button-disabled-container-color, rgba(0, 0, 0, .12))}.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-filled-button-label-text-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--unelevated:disabled{color:#00000061;color:var(--mdc-filled-button-disabled-label-text-color, rgba(0, 0, 0, .38))}.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-filled-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-filled-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-filled-button-with-icon-icon-size, 1.125rem)}.mdc-button--unelevated .mdc-button__ripple:before,.mdc-button--unelevated .mdc-button__ripple:after{background-color:#fff;background-color:var(--mdc-filled-button-hover-state-layer-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--unelevated:hover .mdc-button__ripple:before,.mdc-button--unelevated.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.08;opacity:var(--mdc-filled-button-hover-state-layer-opacity, .08)}.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-filled-button-focus-state-layer-opacity, .24)}.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-filled-button-pressed-state-layer-opacity, .24)}.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-filled-button-pressed-state-layer-opacity, .24)}.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--raised{font-family:Roboto,sans-serif;font-family:var(--mdc-protected-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));font-size:.875rem;font-size:var(--mdc-protected-button-label-text-size, var(--mdc-typography-button-font-size, .875rem));letter-spacing:.0892857143em;letter-spacing:var(--mdc-protected-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, .0892857143em));font-weight:500;font-weight:var(--mdc-protected-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:uppercase;text-transform:var(--mdc-protected-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));height:36px;height:var(--mdc-protected-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px));--mdc-elevation-box-shadow-for-gss:0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12);box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;box-shadow:var(--mdc-protected-button-container-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-button--raised:not(:disabled){background-color:#6200ee;background-color:var(--mdc-protected-button-container-color, var(--mdc-theme-primary, #6200ee))}.mdc-button--raised:disabled{background-color:#0000001f;background-color:var(--mdc-protected-button-disabled-container-color, rgba(0, 0, 0, .12))}.mdc-button--raised:not(:disabled){color:#fff;color:var(--mdc-protected-button-label-text-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--raised:disabled{color:#00000061;color:var(--mdc-protected-button-disabled-label-text-color, rgba(0, 0, 0, .38))}.mdc-button--raised .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-protected-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-protected-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-protected-button-with-icon-icon-size, 1.125rem)}.mdc-button--raised .mdc-button__ripple:before,.mdc-button--raised .mdc-button__ripple:after{background-color:#fff;background-color:var(--mdc-protected-button-hover-state-layer-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--raised:hover .mdc-button__ripple:before,.mdc-button--raised.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.08;opacity:var(--mdc-protected-button-hover-state-layer-opacity, .08)}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-protected-button-focus-state-layer-opacity, .24)}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-protected-button-pressed-state-layer-opacity, .24)}.mdc-button--raised.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-protected-button-pressed-state-layer-opacity, .24)}.mdc-button--raised .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--raised.mdc-ripple-upgraded--background-focused,.mdc-button--raised:not(.mdc-ripple-upgraded):focus{--mdc-elevation-box-shadow-for-gss:0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12);box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;box-shadow:var(--mdc-protected-button-focus-container-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-button--raised:hover{--mdc-elevation-box-shadow-for-gss:0px 2px 4px -1px rgba(0, 0, 0, .2), 0px 4px 5px 0px rgba(0, 0, 0, .14), 0px 1px 10px 0px rgba(0, 0, 0, .12);box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;box-shadow:var(--mdc-protected-button-hover-container-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-button--raised:not(:disabled):active{--mdc-elevation-box-shadow-for-gss:0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;box-shadow:var(--mdc-protected-button-pressed-container-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-button--raised:disabled{--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f;box-shadow:var(--mdc-protected-button-disabled-container-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-button--outlined{font-family:Roboto,sans-serif;font-family:var(--mdc-outlined-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif)));font-size:.875rem;font-size:var(--mdc-outlined-button-label-text-size, var(--mdc-typography-button-font-size, .875rem));letter-spacing:.0892857143em;letter-spacing:var(--mdc-outlined-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, .0892857143em));font-weight:500;font-weight:var(--mdc-outlined-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:uppercase;text-transform:var(--mdc-outlined-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));height:36px;height:var(--mdc-outlined-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px));padding:0 15px;border-width:1px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-outlined-button-label-text-color, var(--mdc-theme-primary, #6200ee))}.mdc-button--outlined:disabled{color:#00000061;color:var(--mdc-outlined-button-disabled-label-text-color, rgba(0, 0, 0, .38))}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-outlined-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-outlined-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-outlined-button-with-icon-icon-size, 1.125rem)}.mdc-button--outlined .mdc-button__ripple:before,.mdc-button--outlined .mdc-button__ripple:after{background-color:#6200ee;background-color:var(--mdc-outlined-button-hover-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-button--outlined:hover .mdc-button__ripple:before,.mdc-button--outlined.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.04;opacity:var(--mdc-outlined-button-hover-state-layer-opacity, .04)}.mdc-button--outlined.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.mdc-button--outlined:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-outlined-button-focus-state-layer-opacity, .12)}.mdc-button--outlined:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.mdc-button--outlined:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-outlined-button-pressed-state-layer-opacity, .12)}.mdc-button--outlined.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-outlined-button-pressed-state-layer-opacity, .12)}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--outlined:not(:disabled){border-color:#0000001f;border-color:var(--mdc-outlined-button-outline-color, rgba(0, 0, 0, .12))}.mdc-button--outlined:disabled{border-color:#0000001f;border-color:var(--mdc-outlined-button-disabled-outline-color, rgba(0, 0, 0, .12))}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mdc-button--outlined .mdc-button__touch{left:-1px;left:calc(-1 * var(--mdc-outlined-button-outline-width, 1px));width:calc(100% + 2px);width:calc(100% + 2 * var(--mdc-outlined-button-outline-width, 1px))}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface:before,.mdc-ripple-surface:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface:before,.mdc-ripple-surface:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:after,.mdc-ripple-upgraded--unbounded:before,.mdc-ripple-upgraded--unbounded:after{top:0%;left:0%;width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded:before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface:before,.mdc-ripple-surface:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover:before,.mdc-ripple-surface.mdc-ripple-surface--hover:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.smui-ripple-surface--primary:before,.smui-ripple-surface--primary:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.smui-ripple-surface--primary:hover:before,.smui-ripple-surface--primary.mdc-ripple-surface--hover:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.smui-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before,.smui-ripple-surface--primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.smui-ripple-surface--primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-ripple-surface--primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.smui-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.smui-ripple-surface--secondary:before,.smui-ripple-surface--secondary:after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.smui-ripple-surface--secondary:hover:before,.smui-ripple-surface--secondary.mdc-ripple-surface--hover:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.smui-ripple-surface--secondary.mdc-ripple-upgraded--background-focused:before,.smui-ripple-surface--secondary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.smui-ripple-surface--secondary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-ripple-surface--secondary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.smui-ripple-surface--secondary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.smui-button--color-secondary:not(:disabled){color:#018786}.smui-button--color-secondary:not(:disabled) .mdc-button__icon{color:#018786}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){background-color:#018786}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.smui-button--color-secondary.mdc-button--raised .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--raised .mdc-button__ripple:after,.smui-button--color-secondary.mdc-button--unelevated .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--unelevated .mdc-button__ripple:after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-text-primary-on-dark, white))}.smui-button--color-secondary.mdc-button--raised:hover .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--raised.mdc-ripple-surface--hover .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--unelevated:hover .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.08;opacity:var(--mdc-ripple-hover-opacity, .08)}.smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple:after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.smui-button--color-secondary.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after,.smui-button--color-secondary.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}.smui-button--color-secondary.mdc-button--raised.mdc-ripple-upgraded,.smui-button--color-secondary.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}.smui-button--color-secondary.mdc-button--raised:not(:disabled),.smui-button--color-secondary.mdc-button--unelevated:not(:disabled){color:#fff}.smui-button--color-secondary.mdc-button--raised:not(:disabled) .mdc-button__icon,.smui-button--color-secondary.mdc-button--unelevated:not(:disabled) .mdc-button__icon{color:#fff}.smui-button--color-secondary.mdc-button--outlined:not(:disabled){border-color:#018786}.smui-button--color-secondary .mdc-button__ripple:before,.smui-button--color-secondary .mdc-button__ripple:after{background-color:#018786;background-color:var(--mdc-ripple-color, #018786)}.smui-button--color-secondary:hover .mdc-button__ripple:before,.smui-button--color-secondary.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.smui-button--color-secondary.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.smui-button--color-secondary:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.smui-button--color-secondary:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.smui-button--color-secondary:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.smui-button--color-secondary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.smui-button__group{display:inline-flex}.smui-button__group>.mdc-button,.smui-button__group>.smui-button__group-item>.mdc-button{margin-left:0;margin-right:0}.smui-button__group>.mdc-button:not(:last-child),.smui-button__group>.mdc-button:not(:last-child)>.mdc-button__ripple,.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button,.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button>.mdc-button__ripple{border-top-right-radius:0;border-bottom-right-radius:0}.smui-button__group>.mdc-button:not(:first-child),.smui-button__group>.mdc-button:not(:first-child)>.mdc-button__ripple,.smui-button__group>.smui-button__group-item:not(:first-child)>.mdc-button,.smui-button__group>.smui-button__group-item:not(:first-child)>.mdc-button>.mdc-button__ripple{border-top-left-radius:0;border-bottom-left-radius:0}.smui-button__group.smui-button__group--raised{border-radius:4px;border-radius:var(--mdc-shape-small, 4px);box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.smui-button__group>.mdc-button--raised,.smui-button__group>.smui-button__group-item>.mdc-button--raised{border-radius:4px;border-radius:var(--mdc-shape-small, 4px);box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.smui-button__group>.mdc-button--raised .mdc-button__ripple,.smui-button__group>.smui-button__group-item>.mdc-button--raised .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.smui-button__group>.mdc-button--raised:hover,.smui-button__group>.mdc-button--raised:focus,.smui-button__group>.smui-button__group-item>.mdc-button--raised:hover,.smui-button__group>.smui-button__group-item>.mdc-button--raised:focus{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.smui-button__group>.mdc-button--raised:active,.smui-button__group>.smui-button__group-item>.mdc-button--raised:active{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.smui-button__group>.mdc-button--raised:disabled,.smui-button__group>.smui-button__group-item>.mdc-button--raised:disabled{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.smui-button__group>.mdc-button--outlined:not(:last-child),.smui-button__group>.smui-button__group-item:not(:last-child)>.mdc-button--outlined{border-right-width:0}.mdc-card{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);position:relative;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;display:flex;flex-direction:column;box-sizing:border-box}.mdc-card .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-card:after{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-card:after{border-color:CanvasText}}.mdc-card--outlined{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f;border-width:1px;border-style:solid;border-color:#e0e0e0}.mdc-card--outlined:after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media:before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square:before{margin-top:100%}.mdc-card__media--16-9:before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:#0009;flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;-webkit-user-select:none;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:#0009}.mdc-card__primary-action{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-card__primary-action .mdc-card__ripple:before,.mdc-card__primary-action .mdc-card__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-card__primary-action .mdc-card__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-card__primary-action .mdc-card__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-card__primary-action.mdc-ripple-upgraded .mdc-card__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action.mdc-ripple-upgraded .mdc-card__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-card__primary-action.mdc-ripple-upgraded--unbounded .mdc-card__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-activation .mdc-card__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-deactivation .mdc-card__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action .mdc-card__ripple:before,.mdc-card__primary-action .mdc-card__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-card__primary-action.mdc-ripple-upgraded .mdc-card__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-card__primary-action .mdc-card__ripple:before,.mdc-card__primary-action .mdc-card__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-card__primary-action:hover .mdc-card__ripple:before,.mdc-card__primary-action.mdc-ripple-surface--hover .mdc-card__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-card__primary-action.mdc-ripple-upgraded--background-focused .mdc-card__ripple:before,.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus .mdc-card__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-card__primary-action:not(.mdc-ripple-upgraded) .mdc-card__ripple:after{transition:opacity .15s linear}.mdc-card__primary-action:not(.mdc-ripple-upgraded):active .mdc-card__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-card__primary-action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-card__primary-action .mdc-card__ripple{box-sizing:content-box;height:100%;overflow:hidden;left:0;pointer-events:none;position:absolute;top:0;width:100%}.mdc-card__primary-action.mdc-ripple-upgraded--background-focused:after,.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus:after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:5px double rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-card__primary-action.mdc-ripple-upgraded--background-focused:after,.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus:after{border-color:CanvasText}}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button:disabled{color:#00000061;color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, .38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:#0000;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on,.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-icon-button .mdc-icon-button__ripple:before,.mdc-icon-button .mdc-icon-button__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-icon-button .mdc-icon-button__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-icon-button .mdc-icon-button__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded .mdc-icon-button__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation .mdc-icon-button__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation .mdc-icon-button__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button .mdc-icon-button__ripple:before,.mdc-icon-button .mdc-icon-button__ripple:after{top:0%;left:0%;width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple:before,.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button .mdc-icon-button__ripple:before,.mdc-icon-button .mdc-icon-button__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-icon-button:hover .mdc-icon-button__ripple:before,.mdc-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple:before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple:after{transition:opacity .15s linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-icon-button .mdc-icon-button__ripple{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:-1}.mdc-icon-button.smui-icon-button--size-mini{width:48px;height:48px;font-size:24px;width:40px;height:40px;padding:8px}.mdc-icon-button.smui-icon-button--size-mini svg,.mdc-icon-button.smui-icon-button--size-mini img{width:24px;height:24px}.mdc-icon-button.smui-icon-button--size-mini .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.smui-icon-button--size-mini.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-mini:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:40px;max-width:40px}@media screen and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-mini.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-mini:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-mini.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-mini:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-mini.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-icon-button.smui-icon-button--size-mini:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-mini.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-icon-button.smui-icon-button--size-mini:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{border-color:CanvasText}}.mdc-icon-button.smui-icon-button--size-mini.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin:0}.mdc-icon-button.smui-icon-button--size-mini.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-mini.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button.smui-icon-button--size-mini .mdc-icon-button__touch{position:absolute;top:50%;height:40px;left:50%;width:40px;transform:translate(-50%,-50%)}.mdc-icon-button.smui-icon-button--size-button{font-size:18px;width:36px;height:36px;padding:6px}.mdc-icon-button.smui-icon-button--size-button svg,.mdc-icon-button.smui-icon-button--size-button img{width:18px;height:18px}.mdc-icon-button.smui-icon-button--size-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.smui-icon-button--size-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:36px;max-width:36px}@media screen and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-icon-button.smui-icon-button--size-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.smui-icon-button--size-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-icon-button.smui-icon-button--size-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{border-color:CanvasText}}.mdc-icon-button.smui-icon-button--size-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:36px;height:36px;margin:0}.mdc-icon-button.smui-icon-button--size-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.smui-icon-button--size-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:36px;max-width:36px}.mdc-icon-button.smui-icon-button--size-button .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%,-50%)}.mdc-icon-button svg{pointer-events:none}.smui-card--padded,.smui-card__content,.smui-card__primary-action--padded{padding:16px}.mdc-checkbox{padding:11px;padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:0;margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple:before,.mdc-checkbox .mdc-checkbox__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple:before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple:before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple:after{transition:opacity .15s linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple:before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple:after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple:before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple:before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple:after{transition:opacity .15s linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple:before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple:after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:11px;top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:11px;left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:0;top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:0;right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:0;left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:#0000008a;border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, .54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:#0000008a;border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, .54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}to{border-color:#0000008a;border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, .54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:#00000061;border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, .38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:#00000061;background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, .38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0,0,.2,1)}to{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}to{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{0%{animation-timing-function:cubic-bezier(.4,0,1,1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{0%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:rotate(0);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{0%{animation-timing-function:cubic-bezier(.14,0,0,1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{0%{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{0%{animation-timing-function:cubic-bezier(.14,0,0,1);transform:rotate(0);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,to{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring:after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring:after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring:after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:#0000;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(.4,0,.6,1),border-color 90ms 0ms cubic-bezier(.4,0,.6,1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity .18s 0ms cubic-bezier(.4,0,.6,1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset .18s 0ms cubic-bezier(.4,0,.6,1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(.4,0,.6,1),transform 90ms 0ms cubic-bezier(.4,0,.6,1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:.18s;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path .18s linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark .5s linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark .5s linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark .3s linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0,0,.2,1),background-color 90ms 0ms cubic-bezier(0,0,.2,1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:4px;margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:-4px;top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:-4px;right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:-4px;left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity .18s 0ms cubic-bezier(0,0,.2,1),transform .18s 0ms cubic-bezier(0,0,.2,1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(.4,0,.6,1),transform 90ms 0ms cubic-bezier(.4,0,.6,1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}.mdc-checkbox{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-checkbox .mdc-checkbox__ripple:before,.mdc-checkbox .mdc-checkbox__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-checkbox .mdc-checkbox__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-checkbox .mdc-checkbox__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation .mdc-checkbox__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation .mdc-checkbox__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox .mdc-checkbox__ripple:before,.mdc-checkbox .mdc-checkbox__ripple:after{top:0%;left:0%;width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple:before,.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox{z-index:0}.mdc-checkbox .mdc-checkbox__ripple:before,.mdc-checkbox .mdc-checkbox__ripple:after{z-index:-1;z-index:var(--mdc-ripple-z-index, -1)}.mdc-checkbox__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-unselected-icon-color, GrayText);background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:GrayText;background-color:var(--mdc-checkbox-disabled-selected-icon-color, GrayText)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:ButtonText;color:var(--mdc-checkbox-selected-checkmark-color, ButtonText)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:ButtonText;border-color:var(--mdc-checkbox-selected-checkmark-color, ButtonText)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:ButtonFace;color:var(--mdc-checkbox-disabled-selected-checkmark-color, ButtonFace)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:ButtonFace;border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, ButtonFace)}}.mdc-deprecated-chip-trailing-action__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}.mdc-deprecated-chip-trailing-action{border:none;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;padding:0;outline:none;cursor:pointer;-webkit-appearance:none;background:none}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__icon{height:18px;width:18px;font-size:18px}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__touch{width:26px}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__icon{fill:currentColor;color:inherit}.mdc-deprecated-chip-trailing-action{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:before,.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded--unbounded .mdc-deprecated-chip-trailing-action__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded--foreground-activation .mdc-deprecated-chip-trailing-action__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded--foreground-deactivation .mdc-deprecated-chip-trailing-action__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:before,.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:after{top:0%;left:0%;width:100%;height:100%}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple:before,.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded .mdc-deprecated-chip-trailing-action__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:before,.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-deprecated-chip-trailing-action:hover .mdc-deprecated-chip-trailing-action__ripple:before,.mdc-deprecated-chip-trailing-action.mdc-ripple-surface--hover .mdc-deprecated-chip-trailing-action__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded--background-focused .mdc-deprecated-chip-trailing-action__ripple:before,.mdc-deprecated-chip-trailing-action:not(.mdc-ripple-upgraded):focus .mdc-deprecated-chip-trailing-action__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-deprecated-chip-trailing-action:not(.mdc-ripple-upgraded) .mdc-deprecated-chip-trailing-action__ripple:after{transition:opacity .15s linear}.mdc-deprecated-chip-trailing-action:not(.mdc-ripple-upgraded):active .mdc-deprecated-chip-trailing-action__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-deprecated-chip-trailing-action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-deprecated-chip-trailing-action .mdc-deprecated-chip-trailing-action__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden}.mdc-chip__icon--leading{color:#0000008a}.mdc-deprecated-chip-trailing-action{color:#000}.mdc-chip__icon--trailing{color:#0000008a}.mdc-chip__icon--trailing:hover{color:#0000009e}.mdc-chip__icon--trailing:focus{color:#000000de}.mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mdc-deprecated-chip-trailing-action__icon{height:18px;width:18px;font-size:18px}.mdc-chip__icon.mdc-chip__icon--trailing{width:18px;height:18px;font-size:18px}.mdc-deprecated-chip-trailing-action{margin-left:4px;margin-right:-4px}[dir=rtl] .mdc-deprecated-chip-trailing-action,.mdc-deprecated-chip-trailing-action[dir=rtl]{margin-left:-4px;margin-right:4px}.mdc-chip__icon--trailing{margin-left:4px;margin-right:-4px}[dir=rtl] .mdc-chip__icon--trailing,.mdc-chip__icon--trailing[dir=rtl]{margin-left:-4px;margin-right:4px}.mdc-chip{border-radius:16px;background-color:#e0e0e0;color:#000000de;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);height:32px;position:relative;display:inline-flex;align-items:center;box-sizing:border-box;padding:0 12px;border-width:0;outline:none;cursor:pointer;-webkit-appearance:none}.mdc-chip .mdc-chip__ripple{border-radius:16px}.mdc-chip:hover{color:#000000de}.mdc-chip.mdc-chip--selected .mdc-chip__checkmark,.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){margin-left:-4px;margin-right:4px}[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl]{margin-left:4px;margin-right:-4px}.mdc-chip .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-chip::-moz-focus-inner{padding:0;border:0}.mdc-chip:hover{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-chip .mdc-chip__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-chip--exit{transition:opacity 75ms cubic-bezier(.4,0,.2,1),width .15s cubic-bezier(0,0,.2,1),padding .1s linear,margin .1s linear;opacity:0}.mdc-chip__overflow{text-overflow:ellipsis;overflow:hidden}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:none;vertical-align:middle}.mdc-chip__checkmark{height:20px}.mdc-chip__checkmark-path{transition:stroke-dashoffset .15s 50ms cubic-bezier(.4,0,.6,1);stroke-width:2px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-chip__primary-action:focus{outline:none}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip__icon--leading,.mdc-chip__icon--trailing{position:relative}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__icon--leading{color:#6200ee8a}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-chip-set--choice .mdc-chip .mdc-chip__checkmark-path{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-chip-set--choice .mdc-chip--selected{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-chip__checkmark-svg{width:0;height:20px;transition:width .15s cubic-bezier(.4,0,.2,1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:20px}.mdc-chip-set--filter .mdc-chip__icon--leading{transition:opacity 75ms linear;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{transition:opacity 75ms linear;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{transition:width 0ms}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:20px}.mdc-chip{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-chip .mdc-chip__ripple:before,.mdc-chip .mdc-chip__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-chip .mdc-chip__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-chip .mdc-chip__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-chip.mdc-ripple-upgraded--unbounded .mdc-chip__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-chip.mdc-ripple-upgraded--foreground-activation .mdc-chip__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-chip.mdc-ripple-upgraded--foreground-deactivation .mdc-chip__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-chip .mdc-chip__ripple:before,.mdc-chip .mdc-chip__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-chip.mdc-ripple-upgraded .mdc-chip__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-chip .mdc-chip__ripple:before,.mdc-chip .mdc-chip__ripple:after{background-color:#000000de;background-color:var(--mdc-ripple-color, rgba(0, 0, 0, .87))}.mdc-chip:hover .mdc-chip__ripple:before,.mdc-chip.mdc-ripple-surface--hover .mdc-chip__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-chip.mdc-ripple-upgraded--background-focused .mdc-chip__ripple:before,.mdc-chip.mdc-ripple-upgraded:focus-within .mdc-chip__ripple:before,.mdc-chip:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple:before,.mdc-chip:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-chip:not(.mdc-ripple-upgraded) .mdc-chip__ripple:after{transition:opacity .15s linear}.mdc-chip:not(.mdc-ripple-upgraded):active .mdc-chip__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-chip.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-chip .mdc-chip__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:before{opacity:.08;opacity:var(--mdc-ripple-selected-opacity, .08)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-surface--hover .mdc-chip__ripple:before{opacity:.12;opacity:var(--mdc-ripple-hover-opacity, .12)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded--background-focused .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded:focus-within .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus .mdc-chip__ripple:before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus-within .mdc-chip__ripple:before{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-focus-opacity, .2)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded) .mdc-chip__ripple:after{transition:opacity .15s linear}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):active .mdc-chip__ripple:after{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-press-opacity, .2)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .2)}@keyframes mdc-chip-entry{0%{transform:scale(.8);opacity:.4}to{transform:scale(1);opacity:1}}.mdc-chip-set{padding:4px;display:flex;flex-wrap:wrap;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:4px}.mdc-chip-set .mdc-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-chip-set--input .mdc-chip{animation:mdc-chip-entry .1s cubic-bezier(0,0,.2,1)}.smui-chip-set--non-interactive .mdc-chip{cursor:initial;color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-chip-trailing-action{opacity:.7}.mdc-deprecated-chip-trailing-action:focus{opacity:1}.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{0%{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{0%{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity .25s 0ms cubic-bezier(.4,0,.6,1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:#0000}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset .5s 0ms cubic-bezier(0,0,.2,1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1.5682352941176s linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.mdc-circular-progress--closed{opacity:0}.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required:after{margin-left:1px;margin-right:0;content:\"*\"}[dir=rtl] .mdc-floating-label--required:after,.mdc-floating-label--required[dir=rtl]:after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard .25s 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translate(calc(0 + -0%)) translateY(-106%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(4%) translateY(-106%) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(-4%) translateY(-106%) scale(.75)}to{transform:translate(calc(0 + -0%)) translateY(-106%) scale(.75)}}.mdc-line-ripple:before,.mdc-line-ripple:after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:\"\"}.mdc-line-ripple:before{border-bottom-width:1px}.mdc-line-ripple:before{z-index:1}.mdc-line-ripple:after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple:after{transition:transform .18s cubic-bezier(.4,0,.2,1),opacity .18s cubic-bezier(.4,0,.2,1)}.mdc-line-ripple--active:after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating:after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 24px)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:#000000de}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:#00000061}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:#0009}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#6200eede}.mdc-select.mdc-select--disabled .mdc-floating-label{color:#00000061}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#0000008a}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:#00000061}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:#0009}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:#00000061}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:#0000008a}.mdc-select.mdc-select--disabled .mdc-select__icon{color:#00000061}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple:before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item,[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity .1005s linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(.75)}.mdc-select__selected-text-container{display:flex;-webkit-appearance:none;-moz-appearance:none;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:#0000;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select__menu:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}}@media screen and (forced-colors: active)and (forced-colors: active),screen and (-ms-high-contrast: active)and (forced-colors: active){.mdc-select__menu:before{border-color:CanvasText}}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option,[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:36px;content:\"\";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-select__option-with-meta .mdc-list-item__end,[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor:before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text:before{content:\"​\"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor:before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:#f5f5f5}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple:before{border-bottom-color:#0000006b}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple:before{border-bottom-color:#000000de}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple:after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple:before{border-bottom-color:#0000000f}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100%/.75 - 64px/.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0;border-top-right-radius:0}.mdc-select--filled.mdc-select--focused.mdc-line-ripple:after{transform:scaleY(2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100%/.75 - 96px/.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple:before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple:before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple:after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px .25s 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translate(calc(0 + -0%)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(4%) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(-4%) translateY(-34.75px) scale(.75)}to{transform:translate(calc(0 + -0%)) translateY(-34.75px) scale(.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports (top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-shape-small, 4px))}}@supports (top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - (max(12px,var(--mdc-shape-small, 4px))*2))}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports (top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports (top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports (top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports (top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#00000061}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#000000de}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:#0000000f}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined .25s 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text:before{content:\"​\"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor:before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:#0000}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translate(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translate(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translate(-32px) scale(.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translate(32px) scale(.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px .25s 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translate(calc(0 - 32px)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(calc(4% - 32px)) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(calc(-4% - 32px)) translateY(-34.75px) scale(.75)}to{transform:translate(calc(0 - 32px)) translateY(-34.75px) scale(.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px .25s 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translate(calc(0 + 32px)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(calc(4% + 32px)) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(calc(-4% + 32px)) translateY(-34.75px) scale(.75)}to{transform:translate(calc(0 + 32px)) translateY(-34.75px) scale(.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple:before,.mdc-select__anchor .mdc-select__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-select__anchor .mdc-select__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple:before,.mdc-select__anchor .mdc-select__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple:before,.mdc-select__anchor .mdc-select__ripple:after{background-color:#000000de;background-color:var(--mdc-ripple-color, rgba(0, 0, 0, .87))}.mdc-select__anchor:hover .mdc-select__ripple:before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple:before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple:before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple:before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple:before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple:after{transition:opacity .15s linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple:before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple:before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple:after{transition:opacity .15s linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-select-helper-text{margin:0 16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, .75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, .0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text:before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity .18s cubic-bezier(.4,0,.2,1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none;flex-shrink:0;align-self:center;background-color:#0000;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon,[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex=\"-1\"]{cursor:default;pointer-events:none}.smui-floating-label--remove-transition{transition:unset!important}.smui-floating-label--force-size{position:absolute!important;transform:unset!important}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:#000000de;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list-item__secondary-text{color:#0000008a;color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, .54))}.mdc-deprecated-list-item__graphic{background-color:transparent}.mdc-deprecated-list-item__graphic{color:#00000061;color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, .38))}.mdc-deprecated-list-item__meta{color:#00000061;color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, .38))}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__text{opacity:.38}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__text,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__secondary-text{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item--selected,.mdc-deprecated-list-item--activated,.mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list-item__wrapper{display:block}.mdc-deprecated-list-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0 16px;height:48px}.mdc-deprecated-list-item:focus{outline:none}.mdc-deprecated-list-item:not(.mdc-deprecated-list-item--selected):focus:before,.mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-deprecated-list-item:not(.mdc-deprecated-list-item--selected):focus:before,.mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused:before{border-color:CanvasText}}.mdc-deprecated-list-item.mdc-deprecated-list-item--selected:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:3px double rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-deprecated-list-item.mdc-deprecated-list-item--selected:before{border-color:CanvasText}}[dir=rtl] .mdc-deprecated-list-item,.mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-deprecated-list--icon-list .mdc-deprecated-list-item{padding-left:16px;padding-right:16px;height:56px}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-item,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item{padding-left:16px;padding-right:16px;height:56px}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item{padding-left:16px;padding-right:16px;height:56px}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-deprecated-list--image-list .mdc-deprecated-list-item{padding-left:16px;padding-right:16px;height:72px}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-item,.mdc-deprecated-list--image-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-deprecated-list--video-list .mdc-deprecated-list-item{padding-left:0;padding-right:16px;height:72px}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-item,.mdc-deprecated-list--video-list .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:20px;height:20px}[dir=rtl] .mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;object-fit:cover;margin-left:0;margin-right:32px;width:24px;height:24px}[dir=rtl] .mdc-deprecated-list-item__graphic,.mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:32px;margin-right:0}.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:32px;width:24px;height:24px}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:32px;margin-right:0}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:40px;height:40px;border-radius:50%}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:40px;height:40px}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:56px;height:56px}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--image-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:100px;height:56px}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--video-list .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-deprecated-list .mdc-deprecated-list-item__graphic{display:inline-flex}.mdc-deprecated-list-item__meta{margin-left:auto;margin-right:0}.mdc-deprecated-list-item__meta:not(.material-icons){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, .75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, .0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}.mdc-deprecated-list-item[dir=rtl] .mdc-deprecated-list-item__meta,[dir=rtl] .mdc-deprecated-list-item .mdc-deprecated-list-item__meta{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list-item__primary-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-deprecated-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text:before,.mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text:before,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text:before,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text:before,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-deprecated-list--video-list .mdc-deprecated-list-item__primary-text:after,.mdc-deprecated-list--image-list .mdc-deprecated-list-item__primary-text:after,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item__primary-text:after,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item__primary-text:after,.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text:before{display:inline-block;width:0;height:24px;content:\"\";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal}.mdc-deprecated-list-item__secondary-text:before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}.mdc-deprecated-list--dense .mdc-deprecated-list-item{height:40px}.mdc-deprecated-list--two-line .mdc-deprecated-list-item__text{align-self:flex-start}.mdc-deprecated-list--two-line .mdc-deprecated-list-item{height:64px}.mdc-deprecated-list--two-line.mdc-deprecated-list--video-list .mdc-deprecated-list-item,.mdc-deprecated-list--two-line.mdc-deprecated-list--image-list .mdc-deprecated-list-item,.mdc-deprecated-list--two-line.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-item,.mdc-deprecated-list--two-line.mdc-deprecated-list--avatar-list .mdc-deprecated-list-item,.mdc-deprecated-list--two-line.mdc-deprecated-list--icon-list .mdc-deprecated-list-item{height:72px}.mdc-deprecated-list--two-line.mdc-deprecated-list--icon-list .mdc-deprecated-list-item__graphic{align-self:flex-start;margin-top:16px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense .mdc-deprecated-list-item,.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item{height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:16px;width:36px;height:36px}[dir=rtl] .mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic,.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item{cursor:pointer}a.mdc-deprecated-list-item{color:inherit;text-decoration:none}.mdc-deprecated-list-divider{height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid}.mdc-deprecated-list-divider{border-bottom-color:#0000001f}.mdc-deprecated-list-divider--padded{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list-divider--padded,.mdc-deprecated-list-divider--padded[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list-divider--inset{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-deprecated-list-divider--inset,.mdc-deprecated-list-divider--inset[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded,.mdc-deprecated-list-divider--inset.mdc-deprecated-list-divider--padded[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--icon-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--avatar-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:72px}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--thumbnail-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading{margin-left:88px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:88px}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:88px;margin-right:0;width:calc(100% - 104px)}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:88px}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--image-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading{margin-left:116px;margin-right:0;width:calc(100% - 116px)}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading,.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:116px}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing{margin-left:116px;margin-right:0;width:calc(100% - 132px)}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing,.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:116px}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding{margin-left:0;margin-right:0;width:calc(100% + -0px)}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding,.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--padding[dir=rtl]{margin-left:0;margin-right:0}.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding{margin-left:0;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding,.mdc-deprecated-list--video-list .mdc-deprecated-list-divider--inset-leading.mdc-deprecated-list-divider--inset-trailing.mdc-deprecated-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:0}.mdc-deprecated-list-group .mdc-deprecated-list{padding:0}.mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);margin:.75rem 16px}.mdc-list-item__primary-text{color:#000000de;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))}.mdc-list-item__secondary-text{color:#0000008a;color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, .54))}.mdc-list-item__overline-text{color:#00000061;color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, .38))}.mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--with-trailing-icon .mdc-list-item__end{background-color:transparent}.mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:#00000061;color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, .38))}.mdc-list-item__end{color:#00000061;color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, .38))}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:.38}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text,.mdc-list-item--disabled .mdc-list-item__overline-text,.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end,.mdc-list-item--disabled.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item--selected .mdc-list-item__primary-text,.mdc-list-item--activated .mdc-list-item__primary-text,.mdc-list-item--selected.mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--activated.mdc-list-item--with-leading-icon .mdc-list-item__start{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-deprecated-list-group__subheader{color:#000000de;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-list-divider:after{content:\"\";display:block;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#fff}}.mdc-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item__wrapper{display:block}.mdc-list-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer}.mdc-list-item:focus{outline:none}.mdc-list-item.mdc-list-item--with-one-line{height:48px}.mdc-list-item.mdc-list-item--with-two-lines{height:64px}.mdc-list-item.mdc-list-item--with-three-lines{height:88px}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end,.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--disabled,.mdc-list-item.mdc-list-item--non-interactive{cursor:auto}.mdc-list-item:not(.mdc-list-item--selected):focus:before,.mdc-list-item.mdc-ripple-upgraded--background-focused:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-list-item:not(.mdc-list-item--selected):focus:before,.mdc-list-item.mdc-ripple-upgraded--background-focused:before{border-color:CanvasText}}.mdc-list-item.mdc-list-item--selected:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:3px double rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-list-item.mdc-list-item--selected:before{border-color:CanvasText}}.mdc-list-item.mdc-list-item--selected:focus:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:3px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-list-item.mdc-list-item--selected:focus:before{border-color:CanvasText}}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__content[for]{pointer-events:none}.mdc-list-item__primary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal}.mdc-list-item__secondary-text:before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item__overline-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-overline-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-overline-font-size, .75rem);line-height:2rem;line-height:var(--mdc-typography-overline-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-overline-font-weight, 500);letter-spacing:.1666666667em;letter-spacing:var(--mdc-typography-overline-letter-spacing, .1666666667em);text-decoration:none;text-decoration:var(--mdc-typography-overline-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-overline-text-transform, uppercase);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:24px;content:\"\";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-three-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-three-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start,.mdc-list-item--with-leading-avatar .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:40px;height:40px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-avatar .mdc-list-item__start{border-radius:50%}.mdc-list-item--with-leading-icon .mdc-list-item__start{width:24px;height:24px}.mdc-list-item--with-leading-icon.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--with-leading-icon .mdc-list-item__start[dir=rtl]{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-thumbnail.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-thumbnail.mdc-list-item,.mdc-list-item--with-leading-thumbnail.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-thumbnail .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-thumbnail .mdc-list-item__start,.mdc-list-item--with-leading-thumbnail .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-thumbnail .mdc-list-item__start{width:40px;height:40px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-image.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-image.mdc-list-item,.mdc-list-item--with-leading-image.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-image .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-image .mdc-list-item__start,.mdc-list-item--with-leading-image .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-image .mdc-list-item__start{width:56px;height:56px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-one-line,.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-video.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-video.mdc-list-item,.mdc-list-item--with-leading-video.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-video .mdc-list-item__start{margin-left:0;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-video .mdc-list-item__start,.mdc-list-item--with-leading-video .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:0}.mdc-list-item--with-leading-video .mdc-list-item__start{width:100px;height:56px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-one-line,.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-checkbox.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start[dir=rtl]{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-checkbox .mdc-list-item__start{width:40px;height:40px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-radio.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-radio.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-radio .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-radio .mdc-list-item__start[dir=rtl]{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio .mdc-list-item__start{width:40px;height:40px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-switch.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-switch.mdc-list-item,.mdc-list-item--with-leading-switch.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-switch .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-switch .mdc-list-item__start,.mdc-list-item--with-leading-switch .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-switch .mdc-list-item__start{width:36px;height:20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end:before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item,.mdc-list-item--with-trailing-icon.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-icon .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-icon .mdc-list-item__end,.mdc-list-item--with-trailing-icon .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-icon .mdc-list-item__end{width:24px;height:24px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item,.mdc-list-item--with-trailing-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-trailing-meta .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end:before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, .75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, .0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end[dir=rtl]{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{width:40px;height:40px}.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-radio.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-radio .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-radio .mdc-list-item__end[dir=rtl]{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio .mdc-list-item__end{width:40px;height:40px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-switch.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-switch.mdc-list-item,.mdc-list-item--with-trailing-switch.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-switch .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-switch .mdc-list-item__end,.mdc-list-item--with-trailing-switch .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-switch .mdc-list-item__end{width:36px;height:20px}.mdc-list-item--with-trailing-switch.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item--with-overline.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-overline.mdc-list-item--with-two-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list-item--with-overline.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-overline.mdc-list-item--with-three-lines .mdc-list-item__primary-text:before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list-item,[dir=rtl] .mdc-list-item,.mdc-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-list-group .mdc-deprecated-list{padding:0}.mdc-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);margin:.75rem 16px}.mdc-list-divider{background-color:#0000001f}.mdc-list-divider{height:1px}.mdc-list-divider{padding:0;background-clip:content-box}.mdc-list-divider.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset{padding-left:16px;padding-right:auto}[dir=rtl] .mdc-list-divider.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset,.mdc-list-divider.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset{padding-left:auto;padding-right:16px}[dir=rtl] .mdc-list-divider.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset,.mdc-list-divider.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset[dir=rtl]{padding-left:16px;padding-right:auto}.mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset[dir=rtl]{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-divider,.mdc-list-divider[dir=rtl]{padding:0}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--unbounded .mdc-deprecated-list-item__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-activation .mdc-deprecated-list-item__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-deprecated-list-item__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:after{top:-50%;left:-50%;width:200%;height:200%}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:after{top:-50%;left:-50%;width:200%;height:200%}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded .mdc-list-item__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:hover .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:hover .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-surface--hover .mdc-list-item__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded) .mdc-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple:before{opacity:.12;opacity:var(--mdc-ripple-activated-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-deprecated-list-item__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:hover .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple:before{opacity:.16;opacity:var(--mdc-ripple-hover-opacity, .16)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple:before{opacity:.12;opacity:var(--mdc-ripple-activated-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated .mdc-list-item__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:hover .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-surface--hover .mdc-list-item__ripple:before{opacity:.16;opacity:var(--mdc-ripple-hover-opacity, .16)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded) .mdc-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple:before{opacity:.08;opacity:var(--mdc-ripple-selected-opacity, .08)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple:before{opacity:.12;opacity:var(--mdc-ripple-hover-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple:before{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-focus-opacity, .2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple:after{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-press-opacity, .2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple:before{opacity:.08;opacity:var(--mdc-ripple-selected-opacity, .08)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected .mdc-list-item__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple:before{opacity:.12;opacity:var(--mdc-ripple-hover-opacity, .12)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-focus-opacity, .2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple:after{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-press-opacity, .2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .2)}:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-deprecated-list-item__ripple,:not(.mdc-deprecated-list-item--disabled).mdc-deprecated-list-item .mdc-list-item__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-deprecated-list-item--disabled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:before,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-deprecated-list-item__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-deprecated-list-item__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-deprecated-list-item__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:before,.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:before,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-deprecated-list-item__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:before,.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:before,.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:before,.mdc-deprecated-list-item--disabled .mdc-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple:before,.mdc-deprecated-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-deprecated-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,.mdc-deprecated-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-deprecated-list-item--disabled .mdc-deprecated-list-item__ripple,.mdc-deprecated-list-item--disabled .mdc-list-item__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}:not(.mdc-list-item--disabled).mdc-list-item{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:after{top:-50%;left:-50%;width:200%;height:200%}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}:not(.mdc-list-item--disabled).mdc-list-item:hover .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-surface--hover .mdc-list-item__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded) .mdc-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple:before{opacity:.12;opacity:var(--mdc-ripple-activated-opacity, .12)}:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}:not(.mdc-list-item--disabled).mdc-list-item--activated:hover .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-surface--hover .mdc-list-item__ripple:before{opacity:.16;opacity:var(--mdc-ripple-hover-opacity, .16)}:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded) .mdc-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple:before{opacity:.08;opacity:var(--mdc-ripple-selected-opacity, .08)}:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}:not(.mdc-list-item--disabled).mdc-list-item--selected:hover .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple:before{opacity:.12;opacity:var(--mdc-ripple-hover-opacity, .12)}:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-focus-opacity, .2)}:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple:after{transition:opacity .15s linear}:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple:after{transition-duration:75ms;opacity:.2;opacity:var(--mdc-ripple-press-opacity, .2)}:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .2)}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-list-item--disabled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-list-item--disabled .mdc-list-item__ripple:before,.mdc-list-item--disabled .mdc-list-item__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-list-item--disabled .mdc-list-item__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-list-item--disabled .mdc-list-item__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-list-item--disabled .mdc-list-item__ripple:before,.mdc-list-item--disabled .mdc-list-item__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-list-item--disabled .mdc-list-item__ripple:before,.mdc-list-item--disabled .mdc-list-item__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple:before,.mdc-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-list-item--disabled .mdc-list-item__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.smui-list--three-line .mdc-deprecated-list-item__text{align-self:flex-start}.smui-list--three-line .mdc-deprecated-list-item{height:88px}.smui-list--three-line.mdc-deprecated-list--dense .mdc-deprecated-list-item{height:76px}.mdc-deprecated-list-item.smui-menu-item--non-interactive{cursor:auto}.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px) );max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px) );margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0,0,.2,1),height .25s cubic-bezier(0,0,.2,1);box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.smui-menu-surface--static{position:static;z-index:0;display:inline-block;transform:scale(1);opacity:1}.mdc-menu{min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}.mdc-menu .mdc-deprecated-list-item__meta,.mdc-menu .mdc-deprecated-list-item__graphic{color:#000000de}.mdc-menu .mdc-menu-item--submenu-open .mdc-deprecated-list-item__ripple:before{opacity:.04}.mdc-menu .mdc-menu-item--submenu-open .mdc-list-item__ripple:before{opacity:.04}.mdc-menu .mdc-deprecated-list{color:#000000de}.mdc-menu .mdc-deprecated-list,.mdc-menu .mdc-list{position:relative}.mdc-menu .mdc-deprecated-list .mdc-elevation-overlay,.mdc-menu .mdc-list .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-menu .mdc-deprecated-list-divider{margin:8px 0}.mdc-menu .mdc-deprecated-list-item{-webkit-user-select:none;user-select:none}.mdc-menu .mdc-deprecated-list-item--disabled{cursor:auto}.mdc-menu a.mdc-deprecated-list-item .mdc-deprecated-list-item__text,.mdc-menu a.mdc-deprecated-list-item .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-menu__selection-group{padding:0;fill:currentColor}.mdc-menu__selection-group .mdc-deprecated-list-item{padding-left:56px;padding-right:16px}[dir=rtl] .mdc-menu__selection-group .mdc-deprecated-list-item,.mdc-menu__selection-group .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:56px}.mdc-menu__selection-group .mdc-menu__selection-group-icon{left:16px;right:initial;display:none;position:absolute;top:50%;transform:translateY(-50%)}[dir=rtl] .mdc-menu__selection-group .mdc-menu__selection-group-icon,.mdc-menu__selection-group .mdc-menu__selection-group-icon[dir=rtl]{left:initial;right:16px}.mdc-menu-item--selected .mdc-menu__selection-group-icon{display:inline}.mdc-menu__selection-group .mdc-list-item__graphic.mdc-menu__selection-group-icon{display:none}.mdc-menu-item--selected .mdc-list-item__graphic.mdc-menu__selection-group-icon{display:inline}.mdc-select--activated{z-index:8}.smui-select--standard .mdc-select__dropdown-icon{margin-left:26px;margin-right:0}[dir=rtl] .smui-select--standard .mdc-select__dropdown-icon,.smui-select--standard .mdc-select__dropdown-icon[dir=rtl]{margin-left:0;margin-right:26px}.smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon{position:relative;margin:0 -24px 0 0;left:-36px;right:initial}[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon,.smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:-24px;margin-right:0}[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon,.smui-select--standard.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{left:initial;right:-36px}.smui-select--standard .mdc-select__anchor,[dir=rtl] .smui-select--standard .mdc-select__anchor,.smui-select--standard .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.smui-select--standard.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:36px;padding-right:0}[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-select__anchor,.smui-select--standard.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:36px}.smui-select--standard .mdc-select__anchor .mdc-select__ripple:before,.smui-select--standard .mdc-select__anchor .mdc-select__ripple:after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.smui-select--standard .mdc-select__anchor:hover .mdc-select__ripple:before,.smui-select--standard .mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.smui-select--standard .mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple:before,.smui-select--standard .mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.smui-select--standard .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.smui-select--standard .mdc-select__anchor:before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.smui-select--standard.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text:before{content:\"​\"}.smui-select--standard.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.smui-select--standard.mdc-select--no-label .mdc-select__anchor:before{display:none}.smui-select--standard:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.smui-select--standard.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.smui-select--standard:not(.mdc-select--disabled) .mdc-line-ripple:before{border-bottom-color:#0000006b}.smui-select--standard:not(.mdc-select--disabled):hover .mdc-line-ripple:before{border-bottom-color:#000000de}.smui-select--standard:not(.mdc-select--disabled) .mdc-line-ripple:after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.smui-select--standard.mdc-select--disabled .mdc-line-ripple:before{border-bottom-color:#0000000f}.smui-select--standard .mdc-floating-label{max-width:calc(100% - 52px)}.smui-select--standard .mdc-floating-label--float-above{max-width:calc(100%/.75 - 52px/.75)}.smui-select--standard .mdc-menu-surface--is-open-below{border-top-left-radius:0;border-top-right-radius:0}.smui-select--standard.mdc-select--focused.mdc-line-ripple:after{transform:scaleY(2);opacity:1}.smui-select--standard .mdc-floating-label{left:0;right:initial}[dir=rtl] .smui-select--standard .mdc-floating-label,.smui-select--standard .mdc-floating-label[dir=rtl]{left:initial;right:0}.smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label,.smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 72px)}.smui-select--standard.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100%/.75 - 72px/.75)}.smui-select--standard+.mdc-select-helper-text{margin-left:0;margin-right:0}.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-data-table{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid;border-color:#0000001f;-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__row{background-color:inherit}.mdc-data-table__header-cell{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-data-table__row--selected{background-color:#6200ee0a}.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-data-table__pagination-rows-per-page-select:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#0000001f}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-color:#0000001f}.mdc-data-table__pagination{border-top-color:#0000001f}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row:not(.mdc-data-table__row--selected):hover{background-color:#0000000a}.mdc-data-table__header-cell,.mdc-data-table__pagination-total,.mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__cell{color:#000000de}.mdc-data-table__row{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl],.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-subtitle2-font-size, .875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, .0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(.0001deg);margin-left:4px;margin-right:0;transition:transform .15s 0ms cubic-bezier(.4,0,.2,1);opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:28px;max-width:28px}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{border-color:CanvasText}}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin:0}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%,-50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl],.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table__sort-icon-button{color:#0009}.mdc-data-table__sort-icon-button .mdc-icon-button__ripple:before,.mdc-data-table__sort-icon-button .mdc-icon-button__ripple:after{background-color:#0009;background-color:var(--mdc-ripple-color, rgba(0, 0, 0, .6))}.mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple:before,.mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple:before,.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple:after{transition:opacity .15s linear}.mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{color:#000000de}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple:before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button .mdc-icon-button__ripple:after{background-color:#000000de;background-color:var(--mdc-ripple-color, rgba(0, 0, 0, .87))}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:hover .mdc-icon-button__ripple:before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple:before,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple:after{transition:opacity .15s linear}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}.mdc-data-table__pagination{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:80px;min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-36px .25s 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-36px{0%{transform:translate(calc(0 + -0%)) translateY(-24.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(4%) translateY(-24.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(-4%) translateY(-24.75px) scale(.75)}to{transform:translate(calc(0 + -0%)) translateY(-24.75px) scale(.75)}}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple:before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple:after,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple:before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple:before,.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple:before,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple:after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple:after{transition:opacity .15s linear}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple:after,.mdc-data-table__row-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-data-table__header-row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded,.mdc-data-table__row-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple:before,.mdc-data-table__header-row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple:after,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple:before,.mdc-data-table__row-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:#0000008a;border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, .54));background-color:transparent}.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-data-table__row-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}@keyframes mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE{0%{border-color:#0000008a;border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, .54));background-color:transparent}50%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE{0%,80%{border-color:#6200ee;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee));background-color:#6200ee;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #6200ee))}to{border-color:#0000008a;border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, .54));background-color:transparent}}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__header-row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-data-table__row-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF6200EE00000000FF6200EE}.mdc-data-table--sticky-header>.mdc-data-table__table-container{overflow-x:unset}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim,.mdc-dialog .mdc-dialog__surface-scrim{background-color:#00000052}.mdc-dialog .mdc-dialog__title{color:#000000de}.mdc-dialog .mdc-dialog__content{color:#0009}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple:before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple:after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple:before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple:before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple:after{transition:opacity .15s linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:#0000001f}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, .0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, .03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media (max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media (min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media (max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media (max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media (max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media (max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media (max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media (max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media (max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:-8px}}@media (max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:-8px}}@media (min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface:before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface:before{content:none}}.mdc-dialog__title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title:before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child,[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity .15s linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform .15s 0ms cubic-bezier(0,0,.2,1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity .15s linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog.smui-dialog--selection .mdc-dialog__content{padding:0}.mdc-dialog--stacked .mdc-dialog__actions.smui-dialog__actions--reversed{flex-direction:column-reverse}.mdc-dialog--stacked .mdc-dialog__actions.smui-dialog__actions--reversed .mdc-dialog__button:not(:last-child){margin-top:12px}.mdc-dialog--stacked .mdc-dialog__actions.smui-dialog__actions--reversed .mdc-dialog__button:last-child{margin-top:0}.mdc-drawer{border-color:#0000001f;background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer .mdc-drawer__title{color:#000000de}.mdc-drawer .mdc-deprecated-list-group__subheader,.mdc-drawer .mdc-drawer__subtitle,.mdc-drawer .mdc-deprecated-list-item__graphic{color:#0009}.mdc-drawer .mdc-deprecated-list-item{color:#000000de}.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-deprecated-list-item--activated{color:#6200eede}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-deprecated-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-deprecated-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-subtitle2-font-size, .875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, .0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:40px;margin:8px;padding:0 8px}.mdc-drawer .mdc-deprecated-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-deprecated-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-deprecated-list-group__subheader:before{display:inline-block;width:0;height:24px;content:\"\";vertical-align:0}.mdc-drawer .mdc-deprecated-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-deprecated-list-item__text,.mdc-drawer .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translate(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translate(100%)}.mdc-drawer--opening{transform:translate(0);transition-duration:.25s}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translate(0)}.mdc-drawer--closing{transform:translate(-100%);transition-duration:.2s}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translate(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, .0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title:before{display:inline-block;width:0;height:36px;content:\"\";vertical-align:0}.mdc-drawer__title:after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle:before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f;left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:#00000052}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:.25s;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:.2s;opacity:0}.mdc-drawer.smui-drawer__absolute,.mdc-drawer-scrim.smui-drawer-scrim__absolute{position:absolute}.mdc-fab{display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;-webkit-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow .28s cubic-bezier(.4,0,.2,1),opacity 15ms linear 30ms,transform .27s 0ms cubic-bezier(0,0,.2,1)}.mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:hover{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mdc-fab.mdc-ripple-upgraded--background-focused,.mdc-fab:not(.mdc-ripple-upgraded):focus{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mdc-fab .mdc-fab__focus-ring{position:absolute}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{border-color:CanvasText}}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring:after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring:after,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring:after{border-color:CanvasText}}.mdc-fab:active,.mdc-fab:focus:active{box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-button-font-size, .875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, .0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}.mdc-fab--extended .mdc-fab__ripple{border-radius:24px}.mdc-fab--extended .mdc-fab__icon{margin-left:-8px;margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:-8px}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:-8px}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:-8px;margin-right:12px}.mdc-fab--touch{margin:4px}.mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%,-50%)}.mdc-fab:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-fab:before{border-color:CanvasText}}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}.mdc-fab__icon{transition:transform .18s 90ms cubic-bezier(0,0,.2,1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear .15s,transform .18s 0ms cubic-bezier(.4,0,1,1)}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(.4,0,1,1)}.mdc-fab{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}.mdc-fab,.mdc-fab:not(:disabled) .mdc-fab__icon,.mdc-fab:not(:disabled) .mdc-fab__label,.mdc-fab:disabled .mdc-fab__icon,.mdc-fab:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.mdc-fab:not(.mdc-fab--extended){border-radius:50%}.mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}.mdc-fab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-fab .mdc-fab__ripple:before,.mdc-fab .mdc-fab__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-fab .mdc-fab__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-fab .mdc-fab__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-fab.mdc-ripple-upgraded--unbounded .mdc-fab__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-fab.mdc-ripple-upgraded--foreground-activation .mdc-fab__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-fab.mdc-ripple-upgraded--foreground-deactivation .mdc-fab__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab .mdc-fab__ripple:before,.mdc-fab .mdc-fab__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-fab.mdc-ripple-upgraded .mdc-fab__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-fab .mdc-fab__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden}.mdc-fab{z-index:0}.mdc-fab .mdc-fab__ripple:before,.mdc-fab .mdc-fab__ripple:after{z-index:-1;z-index:var(--mdc-ripple-z-index, -1)}.smui-fab--color-primary{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.smui-fab--color-primary,.smui-fab--color-primary:not(:disabled) .mdc-fab__icon,.smui-fab--color-primary:not(:disabled) .mdc-fab__label,.smui-fab--color-primary:disabled .mdc-fab__icon,.smui-fab--color-primary:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-primary, #fff)}a.mdc-fab,a.mdc-fab:not(:disabled) .mdc-fab__icon,a.mdc-fab:not(:disabled) .mdc-fab__label,a.mdc-fab:disabled .mdc-fab__icon,a.mdc-fab:disabled .mdc-fab__label,a.mdc-fab:visited,a.mdc-fab:visited:not(:disabled) .mdc-fab__icon,a.mdc-fab:visited:not(:disabled) .mdc-fab__label,a.mdc-fab:visited:disabled .mdc-fab__icon,a.mdc-fab:visited:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-secondary, #fff)}a.smui-fab--color-primary,a.smui-fab--color-primary:not(:disabled) .mdc-fab__icon,a.smui-fab--color-primary:not(:disabled) .mdc-fab__label,a.smui-fab--color-primary:disabled .mdc-fab__icon,a.smui-fab--color-primary:disabled .mdc-fab__label,a.smui-fab--color-primary:visited,a.smui-fab--color-primary:visited:not(:disabled) .mdc-fab__icon,a.smui-fab--color-primary:visited:not(:disabled) .mdc-fab__label,a.smui-fab--color-primary:visited:disabled .mdc-fab__icon,a.smui-fab--color-primary:visited:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-fab .mdc-fab__ripple:before,.mdc-fab .mdc-fab__ripple:after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-secondary, #fff))}.mdc-fab:hover .mdc-fab__ripple:before,.mdc-fab.mdc-ripple-surface--hover .mdc-fab__ripple:before{opacity:.08;opacity:var(--mdc-ripple-hover-opacity, .08)}.mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__ripple:before,.mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}.mdc-fab:not(.mdc-ripple-upgraded) .mdc-fab__ripple:after{transition:opacity .15s linear}.mdc-fab:not(.mdc-ripple-upgraded):active .mdc-fab__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}.mdc-fab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}.smui-fab--color-primary .mdc-fab__ripple:before,.smui-fab--color-primary .mdc-fab__ripple:after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.smui-fab--color-primary:hover .mdc-fab__ripple:before,.smui-fab--color-primary.mdc-ripple-surface--hover .mdc-fab__ripple:before{opacity:.08;opacity:var(--mdc-ripple-hover-opacity, .08)}.smui-fab--color-primary.mdc-ripple-upgraded--background-focused .mdc-fab__ripple:before,.smui-fab--color-primary:not(.mdc-ripple-upgraded):focus .mdc-fab__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}.smui-fab--color-primary:not(.mdc-ripple-upgraded) .mdc-fab__ripple:after{transition:opacity .15s linear}.smui-fab--color-primary:not(.mdc-ripple-upgraded):active .mdc-fab__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}.smui-fab--color-primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:#000000de;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-image-list{display:flex;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__item,.mdc-image-list__image-aspect-container{position:relative;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:100%}.mdc-image-list__image,.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-radius:0}.mdc-image-list__supporting{color:#000000de;color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87));display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:#0009;color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}:root{--mdc-layout-grid-margin-desktop: 24px;--mdc-layout-grid-gutter-desktop: 24px;--mdc-layout-grid-column-width-desktop: 72px;--mdc-layout-grid-margin-tablet: 16px;--mdc-layout-grid-gutter-tablet: 16px;--mdc-layout-grid-column-width-tablet: 72px;--mdc-layout-grid-margin-phone: 16px;--mdc-layout-grid-gutter-phone: 16px;--mdc-layout-grid-column-width-phone: 72px}@media (min-width: 840px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:24px;padding:var(--mdc-layout-grid-margin-desktop, 24px)}}@media (min-width: 600px)and (max-width: 839px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:16px;padding:var(--mdc-layout-grid-margin-tablet, 16px)}}@media (max-width: 599px){.mdc-layout-grid{box-sizing:border-box;margin:0 auto;padding:16px;padding:var(--mdc-layout-grid-margin-phone, 16px)}}@media (min-width: 840px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-12px;margin:calc(var(--mdc-layout-grid-gutter-desktop, 24px)/2*-1)}@supports (display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:24px;grid-gap:var(--mdc-layout-grid-gutter-desktop, 24px);grid-template-columns:repeat(12,minmax(0,1fr))}}}@media (min-width: 600px)and (max-width: 839px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-8px;margin:calc(var(--mdc-layout-grid-gutter-tablet, 16px)/2*-1)}@supports (display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter-tablet, 16px);grid-template-columns:repeat(8,minmax(0,1fr))}}}@media (max-width: 599px){.mdc-layout-grid__inner{display:flex;flex-flow:row wrap;align-items:stretch;margin:-8px;margin:calc(var(--mdc-layout-grid-gutter-phone, 16px)/2*-1)}@supports (display: grid){.mdc-layout-grid__inner{display:grid;margin:0;grid-gap:16px;grid-gap:var(--mdc-layout-grid-gutter-phone, 16px);grid-template-columns:repeat(4,minmax(0,1fr))}}}@media (min-width: 840px){.mdc-layout-grid__cell{width:calc(33.3333333333% - 24px);width:calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));box-sizing:border-box;margin:12px;margin:calc(var(--mdc-layout-grid-gutter-desktop, 24px)/2)}@supports (display: grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}@supports (display: grid){.mdc-layout-grid__cell{margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-desktop{width:calc(8.3333333333% - 24px);width:calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-desktop{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-desktop{width:calc(16.6666666667% - 24px);width:calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-desktop{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-desktop{width:calc(25% - 24px);width:calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-desktop{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-desktop{width:calc(33.3333333333% - 24px);width:calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-desktop{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-desktop{width:calc(41.6666666667% - 24px);width:calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-desktop{width:auto;grid-column-end:span 5}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-desktop{width:calc(50% - 24px);width:calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-desktop{width:auto;grid-column-end:span 6}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-desktop{width:calc(58.3333333333% - 24px);width:calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-desktop{width:auto;grid-column-end:span 7}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-desktop{width:calc(66.6666666667% - 24px);width:calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-desktop{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-desktop{width:calc(75% - 24px);width:calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-desktop{width:auto;grid-column-end:span 9}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-desktop{width:calc(83.3333333333% - 24px);width:calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-desktop{width:auto;grid-column-end:span 10}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-desktop{width:calc(91.6666666667% - 24px);width:calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-desktop{width:auto;grid-column-end:span 11}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-desktop{width:calc(100% - 24px);width:calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px))}@supports (display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-desktop{width:auto;grid-column-end:span 12}}}@media (min-width: 600px)and (max-width: 839px){.mdc-layout-grid__cell{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));box-sizing:border-box;margin:8px;margin:calc(var(--mdc-layout-grid-gutter-tablet, 16px)/2)}@supports (display: grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}@supports (display: grid){.mdc-layout-grid__cell{margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-tablet{width:calc(12.5% - 16px);width:calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-tablet{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-tablet{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-tablet{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-tablet{width:calc(37.5% - 16px);width:calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-tablet{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-tablet{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-tablet{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-tablet{width:calc(62.5% - 16px);width:calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-tablet{width:auto;grid-column-end:span 5}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-tablet{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-tablet{width:auto;grid-column-end:span 6}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-tablet{width:calc(87.5% - 16px);width:calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-tablet{width:auto;grid-column-end:span 7}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-tablet{width:auto;grid-column-end:span 8}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-tablet{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-tablet{width:auto;grid-column-end:span 8}}}@media (max-width: 599px){.mdc-layout-grid__cell{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));box-sizing:border-box;margin:8px;margin:calc(var(--mdc-layout-grid-gutter-phone, 16px)/2)}@supports (display: grid){.mdc-layout-grid__cell{width:auto;grid-column-end:span 4}}@supports (display: grid){.mdc-layout-grid__cell{margin:0}}.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-phone{width:calc(25% - 16px);width:calc(25% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-1,.mdc-layout-grid__cell--span-1-phone{width:auto;grid-column-end:span 1}}.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-phone{width:calc(50% - 16px);width:calc(50% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-2,.mdc-layout-grid__cell--span-2-phone{width:auto;grid-column-end:span 2}}.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-phone{width:calc(75% - 16px);width:calc(75% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-3,.mdc-layout-grid__cell--span-3-phone{width:auto;grid-column-end:span 3}}.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-4,.mdc-layout-grid__cell--span-4-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-5,.mdc-layout-grid__cell--span-5-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-6,.mdc-layout-grid__cell--span-6-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-7,.mdc-layout-grid__cell--span-7-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-8,.mdc-layout-grid__cell--span-8-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-9,.mdc-layout-grid__cell--span-9-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-10,.mdc-layout-grid__cell--span-10-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-11,.mdc-layout-grid__cell--span-11-phone{width:auto;grid-column-end:span 4}}.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-phone{width:calc(100% - 16px);width:calc(100% - var(--mdc-layout-grid-gutter-phone, 16px))}@supports (display: grid){.mdc-layout-grid__cell--span-12,.mdc-layout-grid__cell--span-12-phone{width:auto;grid-column-end:span 4}}}.mdc-layout-grid__cell--order-1{order:1}.mdc-layout-grid__cell--order-2{order:2}.mdc-layout-grid__cell--order-3{order:3}.mdc-layout-grid__cell--order-4{order:4}.mdc-layout-grid__cell--order-5{order:5}.mdc-layout-grid__cell--order-6{order:6}.mdc-layout-grid__cell--order-7{order:7}.mdc-layout-grid__cell--order-8{order:8}.mdc-layout-grid__cell--order-9{order:9}.mdc-layout-grid__cell--order-10{order:10}.mdc-layout-grid__cell--order-11{order:11}.mdc-layout-grid__cell--order-12{order:12}.mdc-layout-grid__cell--align-top{align-self:flex-start}@supports (display: grid){.mdc-layout-grid__cell--align-top{align-self:start}}.mdc-layout-grid__cell--align-middle{align-self:center}.mdc-layout-grid__cell--align-bottom{align-self:flex-end}@supports (display: grid){.mdc-layout-grid__cell--align-bottom{align-self:end}}@media (min-width: 840px){.mdc-layout-grid--fixed-column-width{width:1176px;width:calc(var(--mdc-layout-grid-column-width-desktop, 72px)*12 + var(--mdc-layout-grid-gutter-desktop, 24px)*11 + var(--mdc-layout-grid-margin-desktop, 24px)*2)}}@media (min-width: 600px)and (max-width: 839px){.mdc-layout-grid--fixed-column-width{width:720px;width:calc(var(--mdc-layout-grid-column-width-tablet, 72px)*8 + var(--mdc-layout-grid-gutter-tablet, 16px)*7 + var(--mdc-layout-grid-margin-tablet, 16px)*2)}}@media (max-width: 599px){.mdc-layout-grid--fixed-column-width{width:368px;width:calc(var(--mdc-layout-grid-column-width-phone, 72px)*4 + var(--mdc-layout-grid-gutter-phone, 16px)*3 + var(--mdc-layout-grid-margin-phone, 16px)*2)}}.mdc-layout-grid--align-left{margin-right:auto;margin-left:0}.mdc-layout-grid--align-right{margin-right:0;margin-left:auto}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translate(0)}20%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(0)}59.15%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(83.67142%);transform:translate(var(--mdc-linear-progress-primary-half, 83.67142%))}to{transform:translate(200.611057%);transform:translate(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.334731,.12482,.785844,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.661479)}to{transform:scaleX(.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.515058,.409685);transform:translate(0)}25%{animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);transform:translate(37.651913%);transform:translate(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);transform:translate(84.386165%);transform:translate(var(--mdc-linear-progress-secondary-half, 84.386165%))}to{transform:translate(160.277782%);transform:translate(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.205028,.057051,.57661,.453971);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.152313,.196432,.648374,1.004315);transform:scaleX(.457104)}44.15%{animation-timing-function:cubic-bezier(.257759,-.003163,.211762,1.38179);transform:scaleX(.72796)}to{transform:scaleX(.08)}}@keyframes mdc-linear-progress-buffering{0%{transform:rotate(180deg) translate(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translate(0)}20%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(0)}59.15%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(-83.67142%);transform:translate(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}to{transform:translate(-200.611057%);transform:translate(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(.15,0,.515058,.409685);transform:translate(0)}25%{animation-timing-function:cubic-bezier(.31033,.284058,.8,.733712);transform:translate(-37.651913%);transform:translate(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(.4,.627035,.6,.902026);transform:translate(-84.386165%);transform:translate(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}to{transform:translate(-160.277782%);transform:translate(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{0%{transform:translate(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow:hidden;transition:opacity .25s 0ms cubic-bezier(.4,0,.6,1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform .25s 0ms cubic-bezier(.4,0,.6,1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering .25s infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis .25s 0ms cubic-bezier(.4,0,.6,1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse .25s infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress{height:4px}.mdc-linear-progress__bar-inner{border-top-width:4px}.mdc-linear-progress__buffer-dots{background-size:10px 4px}.smui-paper{padding:24px 16px}.smui-paper.smui-paper--raised,.smui-paper.smui-paper--unelevated{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000)}.smui-paper.smui-paper--raised.smui-paper--elevation-z0{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z1{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z2{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z3{box-shadow:0 3px 3px -2px #0003,0 3px 4px #00000024,0 1px 8px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z4{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z5{box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z6{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z7{box-shadow:0 4px 5px -2px #0003,0 7px 10px 1px #00000024,0 2px 16px 1px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z8{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z9{box-shadow:0 5px 6px -3px #0003,0 9px 12px 1px #00000024,0 3px 16px 2px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z10{box-shadow:0 6px 6px -3px #0003,0 10px 14px 1px #00000024,0 4px 18px 3px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z11{box-shadow:0 6px 7px -4px #0003,0 11px 15px 1px #00000024,0 4px 20px 3px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z12{box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z13{box-shadow:0 7px 8px -4px #0003,0 13px 19px 2px #00000024,0 5px 24px 4px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z14{box-shadow:0 7px 9px -4px #0003,0 14px 21px 2px #00000024,0 5px 26px 4px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z15{box-shadow:0 8px 9px -5px #0003,0 15px 22px 2px #00000024,0 6px 28px 5px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z16{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z17{box-shadow:0 8px 11px -5px #0003,0 17px 26px 2px #00000024,0 6px 32px 5px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z18{box-shadow:0 9px 11px -5px #0003,0 18px 28px 2px #00000024,0 7px 34px 6px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z19{box-shadow:0 9px 12px -6px #0003,0 19px 29px 2px #00000024,0 7px 36px 6px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z20{box-shadow:0 10px 13px -6px #0003,0 20px 31px 3px #00000024,0 8px 38px 7px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z21{box-shadow:0 10px 13px -6px #0003,0 21px 33px 3px #00000024,0 8px 40px 7px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z22{box-shadow:0 10px 14px -6px #0003,0 22px 35px 3px #00000024,0 8px 42px 7px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z23{box-shadow:0 11px 14px -7px #0003,0 23px 36px 3px #00000024,0 9px 44px 8px #0000001f}.smui-paper.smui-paper--raised.smui-paper--elevation-z24{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}.smui-paper.smui-paper--outlined{border-width:1px;border-style:solid;border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.smui-paper.smui-paper--rounded{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.smui-paper.smui-paper-transition{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);will-change:box-shadow}.smui-paper .smui-paper__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline5-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.5rem;font-size:var(--mdc-typography-headline5-font-size, 1.5rem);line-height:2rem;line-height:var(--mdc-typography-headline5-line-height, 2rem);font-weight:400;font-weight:var(--mdc-typography-headline5-font-weight, 400);letter-spacing:normal;letter-spacing:var(--mdc-typography-headline5-letter-spacing, normal);text-decoration:inherit;text-decoration:var(--mdc-typography-headline5-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline5-text-transform, inherit);margin-top:0;margin-bottom:.4rem}.smui-paper .smui-paper__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);margin-top:-.2rem;margin-bottom:.4rem}.smui-paper .smui-paper__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, .03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.smui-paper.smui-paper--color-primary.smui-paper--raised,.smui-paper.smui-paper--color-primary.smui-paper--unelevated{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:#fff;color:var(--mdc-theme-on-primary, #fff)}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z0{box-shadow:0 0 #6200ee33,0 0 #6200ee24,0 0 #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z1{box-shadow:0 2px 1px -1px #6200ee33,0 1px 1px #6200ee24,0 1px 3px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z2{box-shadow:0 3px 1px -2px #6200ee33,0 2px 2px #6200ee24,0 1px 5px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z3{box-shadow:0 3px 3px -2px #6200ee33,0 3px 4px #6200ee24,0 1px 8px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z4{box-shadow:0 2px 4px -1px #6200ee33,0 4px 5px #6200ee24,0 1px 10px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z5{box-shadow:0 3px 5px -1px #6200ee33,0 5px 8px #6200ee24,0 1px 14px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z6{box-shadow:0 3px 5px -1px #6200ee33,0 6px 10px #6200ee24,0 1px 18px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z7{box-shadow:0 4px 5px -2px #6200ee33,0 7px 10px 1px #6200ee24,0 2px 16px 1px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z8{box-shadow:0 5px 5px -3px #6200ee33,0 8px 10px 1px #6200ee24,0 3px 14px 2px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z9{box-shadow:0 5px 6px -3px #6200ee33,0 9px 12px 1px #6200ee24,0 3px 16px 2px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z10{box-shadow:0 6px 6px -3px #6200ee33,0 10px 14px 1px #6200ee24,0 4px 18px 3px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z11{box-shadow:0 6px 7px -4px #6200ee33,0 11px 15px 1px #6200ee24,0 4px 20px 3px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z12{box-shadow:0 7px 8px -4px #6200ee33,0 12px 17px 2px #6200ee24,0 5px 22px 4px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z13{box-shadow:0 7px 8px -4px #6200ee33,0 13px 19px 2px #6200ee24,0 5px 24px 4px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z14{box-shadow:0 7px 9px -4px #6200ee33,0 14px 21px 2px #6200ee24,0 5px 26px 4px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z15{box-shadow:0 8px 9px -5px #6200ee33,0 15px 22px 2px #6200ee24,0 6px 28px 5px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z16{box-shadow:0 8px 10px -5px #6200ee33,0 16px 24px 2px #6200ee24,0 6px 30px 5px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z17{box-shadow:0 8px 11px -5px #6200ee33,0 17px 26px 2px #6200ee24,0 6px 32px 5px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z18{box-shadow:0 9px 11px -5px #6200ee33,0 18px 28px 2px #6200ee24,0 7px 34px 6px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z19{box-shadow:0 9px 12px -6px #6200ee33,0 19px 29px 2px #6200ee24,0 7px 36px 6px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z20{box-shadow:0 10px 13px -6px #6200ee33,0 20px 31px 3px #6200ee24,0 8px 38px 7px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z21{box-shadow:0 10px 13px -6px #6200ee33,0 21px 33px 3px #6200ee24,0 8px 40px 7px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z22{box-shadow:0 10px 14px -6px #6200ee33,0 22px 35px 3px #6200ee24,0 8px 42px 7px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z23{box-shadow:0 11px 14px -7px #6200ee33,0 23px 36px 3px #6200ee24,0 9px 44px 8px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--raised.smui-paper--elevation-z24{box-shadow:0 11px 15px -7px #6200ee33,0 24px 38px 3px #6200ee24,0 9px 46px 8px #6200ee1f}.smui-paper.smui-paper--color-primary.smui-paper--outlined{border-width:1px;border-style:solid;border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.smui-paper.smui-paper--color-secondary.smui-paper--raised,.smui-paper.smui-paper--color-secondary.smui-paper--unelevated{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z0{box-shadow:0 0 #01878633,0 0 #01878624,0 0 #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z1{box-shadow:0 2px 1px -1px #01878633,0 1px 1px #01878624,0 1px 3px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z2{box-shadow:0 3px 1px -2px #01878633,0 2px 2px #01878624,0 1px 5px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z3{box-shadow:0 3px 3px -2px #01878633,0 3px 4px #01878624,0 1px 8px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z4{box-shadow:0 2px 4px -1px #01878633,0 4px 5px #01878624,0 1px 10px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z5{box-shadow:0 3px 5px -1px #01878633,0 5px 8px #01878624,0 1px 14px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z6{box-shadow:0 3px 5px -1px #01878633,0 6px 10px #01878624,0 1px 18px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z7{box-shadow:0 4px 5px -2px #01878633,0 7px 10px 1px #01878624,0 2px 16px 1px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z8{box-shadow:0 5px 5px -3px #01878633,0 8px 10px 1px #01878624,0 3px 14px 2px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z9{box-shadow:0 5px 6px -3px #01878633,0 9px 12px 1px #01878624,0 3px 16px 2px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z10{box-shadow:0 6px 6px -3px #01878633,0 10px 14px 1px #01878624,0 4px 18px 3px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z11{box-shadow:0 6px 7px -4px #01878633,0 11px 15px 1px #01878624,0 4px 20px 3px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z12{box-shadow:0 7px 8px -4px #01878633,0 12px 17px 2px #01878624,0 5px 22px 4px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z13{box-shadow:0 7px 8px -4px #01878633,0 13px 19px 2px #01878624,0 5px 24px 4px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z14{box-shadow:0 7px 9px -4px #01878633,0 14px 21px 2px #01878624,0 5px 26px 4px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z15{box-shadow:0 8px 9px -5px #01878633,0 15px 22px 2px #01878624,0 6px 28px 5px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z16{box-shadow:0 8px 10px -5px #01878633,0 16px 24px 2px #01878624,0 6px 30px 5px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z17{box-shadow:0 8px 11px -5px #01878633,0 17px 26px 2px #01878624,0 6px 32px 5px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z18{box-shadow:0 9px 11px -5px #01878633,0 18px 28px 2px #01878624,0 7px 34px 6px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z19{box-shadow:0 9px 12px -6px #01878633,0 19px 29px 2px #01878624,0 7px 36px 6px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z20{box-shadow:0 10px 13px -6px #01878633,0 20px 31px 3px #01878624,0 8px 38px 7px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z21{box-shadow:0 10px 13px -6px #01878633,0 21px 33px 3px #01878624,0 8px 40px 7px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z22{box-shadow:0 10px 14px -6px #01878633,0 22px 35px 3px #01878624,0 8px 42px 7px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z23{box-shadow:0 11px 14px -7px #01878633,0 23px 36px 3px #01878624,0 9px 44px 8px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--raised.smui-paper--elevation-z24{box-shadow:0 11px 15px -7px #01878633,0 24px 38px 3px #01878624,0 9px 46px 8px #0187861f}.smui-paper.smui-paper--color-secondary.smui-paper--outlined{border-width:1px;border-style:solid;border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio{padding:10px}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:#0000008a}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:#00000061}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#00000061}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#00000061}.mdc-radio .mdc-radio__background:before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background:before{top:-10px;left:-10px;width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:0;right:0;left:0;width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background:before{position:absolute;transform:scale(0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";transition:opacity .12s 0ms cubic-bezier(.4,0,.6,1),transform .12s 0ms cubic-bezier(.4,0,.6,1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color .12s 0ms cubic-bezier(.4,0,.6,1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0);border-width:10px;border-style:solid;border-radius:50%;transition:transform .12s 0ms cubic-bezier(.4,0,.6,1),border-color .12s 0ms cubic-bezier(.4,0,.6,1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin:4px}.mdc-radio--touch .mdc-radio__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring:after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring:after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring:after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity .12s 0ms cubic-bezier(0,0,.2,1),transform .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform .12s 0ms cubic-bezier(0,0,.2,1),border-color .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(.5);transition:transform .12s 0ms cubic-bezier(0,0,.2,1),border-color .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background:before{transform:scale(1);opacity:.12;transition:opacity .12s 0ms cubic-bezier(0,0,.2,1),transform .12s 0ms cubic-bezier(0,0,.2,1)}.mdc-radio{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-radio .mdc-radio__ripple:before,.mdc-radio .mdc-radio__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-radio .mdc-radio__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-radio .mdc-radio__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-radio.mdc-ripple-upgraded--unbounded .mdc-radio__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-radio.mdc-ripple-upgraded--foreground-activation .mdc-radio__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-radio.mdc-ripple-upgraded--foreground-deactivation .mdc-radio__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio .mdc-radio__ripple:before,.mdc-radio .mdc-radio__ripple:after{top:0%;left:0%;width:100%;height:100%}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple:before,.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio .mdc-radio__ripple:before,.mdc-radio .mdc-radio__ripple:after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-radio:hover .mdc-radio__ripple:before,.mdc-radio.mdc-ripple-surface--hover .mdc-radio__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__ripple:before,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-radio:not(.mdc-ripple-upgraded) .mdc-radio__ripple:after{transition:opacity .15s linear}.mdc-radio:not(.mdc-ripple-upgraded):active .mdc-radio__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-radio.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__background:before,.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__background:before{content:none}.mdc-radio__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-segmented-button{display:inline-block;font-size:0}.mdc-segmented-button__segment{border-color:#0000001f;border-color:var(--mdc-segmented-button-outline-color, rgba(0, 0, 0, .12))}.mdc-segmented-button__segment{color:#0009;color:var(--mdc-segmented-button-unselected-ink-color, rgba(0, 0, 0, .6))}.mdc-segmented-button__segment{background-color:#fff;background-color:var(--mdc-segmented-button-unselected-container-fill-color, white)}.mdc-segmented-button__segment--selected{color:#6200ee;color:var(--mdc-segmented-button-selected-ink-color, #6200ee)}.mdc-segmented-button__segment--selected{background-color:#6200ee14;background-color:var(--mdc-segmented-button-selected-container-fill-color, rgba(98, 0, 238, .08))}.mdc-segmented-button__segment{position:relative;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-button-font-size, .875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, .0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);display:inline-flex;vertical-align:top;align-items:center;height:36px;min-width:48px;padding:0 12px;border-width:1px 0 1px 1px}.mdc-segmented-button__segment .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-segmented-button__segment:hover{cursor:pointer}.mdc-segmented-button__segment:focus{outline-width:0}.mdc-segmented-button__segment:first-child{border-radius:4px 0 0 4px}.mdc-segmented-button__segment:last-child{border-right-width:1px;border-radius:0 4px 4px 0}.mdc-segmented-button__segment .mdc-segmented-button__segment__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-segmented-button__segment .mdc-segmented-button__segment--touch{margin-top:0;margin-bottom:0}.mdc-touch-target-wrapper .mdc-segmented-button__segment{border-radius:0;border-right-width:0}.mdc-touch-target-wrapper:first-child .mdc-segmented-button__segment{border-radius:4px 0 0 4px}.mdc-touch-target-wrapper:last-child .mdc-segmented-button__segment{border-right-width:1px;border-radius:0 4px 4px 0}.mdc-segmented-button__icon{width:24px;font-size:18px}.mdc-segmented-button__icon+.mdc-segmented-button__label{padding-left:6px}.mdc-segmented-button__segment{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;overflow:hidden}.mdc-segmented-button__segment .mdc-segmented-button__ripple:before,.mdc-segmented-button__segment .mdc-segmented-button__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-segmented-button__segment .mdc-segmented-button__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-segmented-button__segment .mdc-segmented-button__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-segmented-button__segment.mdc-ripple-upgraded .mdc-segmented-button__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-segmented-button__segment.mdc-ripple-upgraded .mdc-segmented-button__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-segmented-button__segment.mdc-ripple-upgraded--unbounded .mdc-segmented-button__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-segmented-button__segment.mdc-ripple-upgraded--foreground-activation .mdc-segmented-button__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-segmented-button__segment.mdc-ripple-upgraded--foreground-deactivation .mdc-segmented-button__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-segmented-button__segment .mdc-segmented-button__ripple:before,.mdc-segmented-button__segment .mdc-segmented-button__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-segmented-button__segment.mdc-ripple-upgraded .mdc-segmented-button__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-segmented-button__segment .mdc-segmented-button__ripple:before,.mdc-segmented-button__segment .mdc-segmented-button__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, #6200ee)}.mdc-segmented-button__segment:hover .mdc-segmented-button__ripple:before,.mdc-segmented-button__segment.mdc-ripple-surface--hover .mdc-segmented-button__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-segmented-button__segment.mdc-ripple-upgraded--background-focused .mdc-segmented-button__ripple:before,.mdc-segmented-button__segment.mdc-ripple-upgraded:focus-within .mdc-segmented-button__ripple:before,.mdc-segmented-button__segment:not(.mdc-ripple-upgraded):focus .mdc-segmented-button__ripple:before,.mdc-segmented-button__segment:not(.mdc-ripple-upgraded):focus-within .mdc-segmented-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-segmented-button__segment:not(.mdc-ripple-upgraded) .mdc-segmented-button__ripple:after{transition:opacity .15s linear}.mdc-segmented-button__segment:not(.mdc-ripple-upgraded):active .mdc-segmented-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-segmented-button__segment.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-segmented-button__segment .mdc-segmented-button__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-slider__thumb{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-slider__thumb:before,.mdc-slider__thumb:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-slider__thumb:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-slider__thumb:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-slider__thumb.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-slider__thumb.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-slider__thumb.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-slider__thumb.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-slider__thumb.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-slider__thumb:before,.mdc-slider__thumb:after{top:0%;left:0%;width:100%;height:100%}.mdc-slider__thumb.mdc-ripple-upgraded:before,.mdc-slider__thumb.mdc-ripple-upgraded:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-slider__thumb.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-slider__thumb:before,.mdc-slider__thumb:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-slider__thumb:hover:before,.mdc-slider__thumb.mdc-ripple-surface--hover:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-slider__thumb.mdc-ripple-upgraded--background-focused:before,.mdc-slider__thumb:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-slider__thumb:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-slider__thumb:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-slider{cursor:pointer;height:48px;margin:0 24px;position:relative;touch-action:pan-y}.mdc-slider .mdc-slider__track{height:4px;position:absolute;top:50%;transform:translateY(-50%);width:100%}.mdc-slider .mdc-slider__track--active,.mdc-slider .mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider .mdc-slider__track--active{border-radius:3px;height:6px;overflow:hidden;top:-1px}.mdc-slider .mdc-slider__track--active_fill{border-top:6px solid;box-sizing:border-box;height:100%;width:100%;position:relative;-webkit-transform-origin:left;transform-origin:left}[dir=rtl] .mdc-slider .mdc-slider__track--active_fill,.mdc-slider .mdc-slider__track--active_fill[dir=rtl]{-webkit-transform-origin:right;transform-origin:right}.mdc-slider .mdc-slider__track--inactive{border-radius:2px;height:4px;left:0;top:0}.mdc-slider .mdc-slider__track--inactive:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-slider .mdc-slider__track--inactive:before{border-color:CanvasText}}.mdc-slider .mdc-slider__track--active_fill{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-slider.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.mdc-slider .mdc-slider__track--inactive{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);opacity:.24}.mdc-slider.mdc-slider--disabled .mdc-slider__track--inactive{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);opacity:.24}.mdc-slider .mdc-slider__value-indicator-container{bottom:44px;left:50%;left:var(--slider-value-indicator-container-left, 50%);pointer-events:none;position:absolute;right:var(--slider-value-indicator-container-right);transform:translate(-50%);transform:var(--slider-value-indicator-container-transform, translateX(-50%))}.mdc-slider .mdc-slider__value-indicator{transition:transform .1s 0ms cubic-bezier(.4,0,1,1);align-items:center;border-radius:4px;display:flex;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom}.mdc-slider .mdc-slider__value-indicator:before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:\"\";height:0;left:50%;left:var(--slider-value-indicator-caret-left, 50%);position:absolute;right:var(--slider-value-indicator-caret-right);transform:translate(-50%);transform:var(--slider-value-indicator-caret-transform, translateX(-50%));width:0}.mdc-slider .mdc-slider__value-indicator:after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-slider .mdc-slider__value-indicator:after{border-color:CanvasText}}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform .1s 0ms cubic-bezier(0,0,.2,1);transform:scale(1)}@media (prefers-reduced-motion){.mdc-slider .mdc-slider__value-indicator,.mdc-slider .mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:none}}.mdc-slider .mdc-slider__value-indicator-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-subtitle2-font-size, .875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, .0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit)}.mdc-slider .mdc-slider__value-indicator{background-color:#000;opacity:.6}.mdc-slider .mdc-slider__value-indicator:before{border-top-color:#000}.mdc-slider .mdc-slider__value-indicator{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-slider .mdc-slider__thumb{display:flex;height:48px;left:-24px;outline:none;position:absolute;-webkit-user-select:none;user-select:none;width:48px}.mdc-slider .mdc-slider__thumb--top{z-index:1}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-style:solid;border-width:1px;box-sizing:content-box}.mdc-slider .mdc-slider__thumb-knob{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;border:10px solid;border-radius:50%;box-sizing:border-box;height:20px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:20px}.mdc-slider .mdc-slider__thumb-knob{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-slider .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);border-color:#000;border-color:var(--mdc-theme-on-surface, #000)}.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider.mdc-slider--disabled .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border-color:#fff}.mdc-slider .mdc-slider__thumb:before,.mdc-slider .mdc-slider__thumb:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-slider .mdc-slider__thumb:hover:before,.mdc-slider .mdc-slider__thumb.mdc-ripple-surface--hover:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded--background-focused:before,.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-slider .mdc-slider__thumb:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-slider .mdc-slider__thumb.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-slider .mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider .mdc-slider__tick-mark--active,.mdc-slider .mdc-slider__tick-mark--inactive{border-radius:50%;height:2px;width:2px}.mdc-slider .mdc-slider__tick-mark--active,.mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--active{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff);opacity:.6}.mdc-slider .mdc-slider__tick-mark--inactive{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);opacity:.6}.mdc-slider.mdc-slider--disabled .mdc-slider__tick-mark--inactive{background-color:#000;background-color:var(--mdc-theme-on-surface, #000);opacity:.6}.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:transform 80ms ease}@media (prefers-reduced-motion){.mdc-slider--discrete .mdc-slider__thumb,.mdc-slider--discrete .mdc-slider__track--active_fill{transition:none}}.mdc-slider--disabled{opacity:.38;cursor:auto}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__input{cursor:pointer;left:0;margin:0;height:100%;opacity:0;pointer-events:none;position:absolute;top:0;width:100%}.mdc-slider{-webkit-tap-highlight-color:hsla(0,0%,100%,0)}.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:#ffffffde}.mdc-snackbar__surface{min-width:344px}@media (max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(.8);opacity:0}.mdc-snackbar__surface:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface:before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity .15s 0ms cubic-bezier(0,0,.2,1),transform .15s 0ms cubic-bezier(0,0,.2,1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(.4,0,1,1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding:14px 8px 14px 16px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label:before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#6200ee}.mdc-snackbar__action .mdc-button__ripple:before,.mdc-snackbar__action .mdc-button__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, #6200ee)}.mdc-snackbar__action:hover .mdc-button__ripple:before,.mdc-snackbar__action.mdc-ripple-surface--hover .mdc-button__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused .mdc-button__ripple:before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus .mdc-button__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-snackbar__action:not(.mdc-ripple-upgraded) .mdc-button__ripple:after{transition:opacity .15s linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active .mdc-button__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-snackbar__dismiss{color:#ffffffde}.mdc-snackbar__dismiss .mdc-icon-button__ripple:before,.mdc-snackbar__dismiss .mdc-icon-button__ripple:after{background-color:#ffffffde;background-color:var(--mdc-ripple-color, rgba(255, 255, 255, .87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple:before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple:before{opacity:.08;opacity:var(--mdc-ripple-hover-opacity, .08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple:before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple:after{transition:opacity .15s linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__focus-ring{display:none}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:36px;max-width:36px}@media screen and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring:after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring:after{border-color:CanvasText}}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:36px;height:36px;margin:0}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:36px;max-width:36px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%,-50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track:before,.mdc-switch__track:after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track:before,.mdc-switch__track:after{border-color:currentColor}}.mdc-switch__track:before{transition:transform 75ms 0ms cubic-bezier(0,0,.2,1);transform:translate(0)}.mdc-switch__track:after{transition:transform 75ms 0ms cubic-bezier(.4,0,.6,1);transform:translate(-100%)}[dir=rtl] .mdc-switch__track:after,.mdc-switch__track[dir=rtl]:after{transform:translate(100%)}.mdc-switch--selected .mdc-switch__track:before{transition:transform 75ms 0ms cubic-bezier(.4,0,.6,1);transform:translate(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track:before,.mdc-switch--selected .mdc-switch__track[dir=rtl]:before{transform:translate(-100%)}.mdc-switch--selected .mdc-switch__track:after{transition:transform 75ms 0ms cubic-bezier(0,0,.2,1);transform:translate(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(.4,0,.2,1);left:0;right:auto;transform:translate(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translate(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translate(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle:before,.mdc-switch__handle:after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:\"\";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(.4,0,.2,1),border-color 75ms 0ms cubic-bezier(.4,0,.2,1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle:before,.mdc-switch__handle:after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(.4,0,1,1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0,0,.2,1)}.mdc-switch{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-switch .mdc-switch__ripple:before,.mdc-switch .mdc-switch__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-switch .mdc-switch__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-switch .mdc-switch__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch.mdc-ripple-upgraded--unbounded .mdc-switch__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch.mdc-ripple-upgraded--foreground-activation .mdc-switch__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch.mdc-ripple-upgraded--foreground-deactivation .mdc-switch__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch .mdc-switch__ripple:before,.mdc-switch .mdc-switch__ripple:after{top:0%;left:0%;width:100%;height:100%}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple:before,.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple:after{top:var(--mdc-ripple-top, 0% );left:var(--mdc-ripple-left, 0% );width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch .mdc-switch__focus-ring-wrapper{width:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.mdc-switch.mdc-ripple-upgraded--background-focused .mdc-switch__focus-ring,.mdc-switch:not(.mdc-ripple-upgraded):focus .mdc-switch__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-switch.mdc-ripple-upgraded--background-focused .mdc-switch__focus-ring,.mdc-switch:not(.mdc-ripple-upgraded):focus .mdc-switch__focus-ring{border-color:CanvasText}}.mdc-switch.mdc-ripple-upgraded--background-focused .mdc-switch__focus-ring:after,.mdc-switch:not(.mdc-ripple-upgraded):focus .mdc-switch__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-switch.mdc-ripple-upgraded--background-focused .mdc-switch__focus-ring:after,.mdc-switch:not(.mdc-ripple-upgraded):focus .mdc-switch__focus-ring:after{border-color:CanvasText}}.mdc-switch{width:36px;width:var(--mdc-switch-track-width, 36px)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle:after{background:#6200ee;background:var(--mdc-switch-selected-handle-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle:after{background:#310077;background:var(--mdc-switch-selected-hover-handle-color, #310077)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle:after{background:#310077;background:var(--mdc-switch-selected-focus-handle-color, #310077)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle:after{background:#310077;background:var(--mdc-switch-selected-pressed-handle-color, #310077)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle:after{background:#424242;background:var(--mdc-switch-disabled-selected-handle-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle:after{background:#616161;background:var(--mdc-switch-unselected-handle-color, #616161)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle:after{background:#212121;background:var(--mdc-switch-unselected-hover-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle:after{background:#212121;background:var(--mdc-switch-unselected-focus-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle:after{background:#212121;background:var(--mdc-switch-unselected-pressed-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle:after{background:#424242;background:var(--mdc-switch-disabled-unselected-handle-color, #424242)}.mdc-switch .mdc-switch__handle:before{background:#fff;background:var(--mdc-switch-handle-surface-color, var(--mdc-theme-surface, #fff))}.mdc-switch:enabled .mdc-switch__shadow{--mdc-elevation-box-shadow-for-gss:0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;box-shadow:var(--mdc-switch-handle-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-switch:disabled .mdc-switch__shadow{--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f;box-shadow:var(--mdc-switch-disabled-handle-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-switch .mdc-switch__focus-ring-wrapper,.mdc-switch .mdc-switch__handle{height:20px;height:var(--mdc-switch-handle-height, 20px)}.mdc-switch:disabled .mdc-switch__handle:after{opacity:.38;opacity:var(--mdc-switch-disabled-handle-opacity, .38)}.mdc-switch .mdc-switch__handle{border-radius:10px;border-radius:var(--mdc-switch-handle-shape, 10px)}.mdc-switch .mdc-switch__handle{width:20px;width:var(--mdc-switch-handle-width, 20px)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - 20px);width:calc(100% - var(--mdc-switch-handle-width, 20px))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:.38;opacity:var(--mdc-switch-disabled-selected-icon-opacity, .38)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:.38;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, .38)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:18px;width:var(--mdc-switch-selected-icon-size, 18px);height:18px;height:var(--mdc-switch-selected-icon-size, 18px)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:18px;width:var(--mdc-switch-unselected-icon-size, 18px);height:18px;height:var(--mdc-switch-unselected-icon-size, 18px)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple:before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple:after{background-color:#6200ee;background-color:var(--mdc-switch-selected-hover-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple:before,.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple:after{background-color:#6200ee;background-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple:before,.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple:after{background-color:#6200ee;background-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple:before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple:after{background-color:#424242;background-color:var(--mdc-switch-unselected-hover-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple:before,.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple:after{background-color:#424242;background-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple:before,.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple:after{background-color:#424242;background-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple:before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple:before{opacity:.04;opacity:var(--mdc-switch-selected-hover-state-layer-opacity, .04)}.mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple:before,.mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-switch-selected-focus-state-layer-opacity, .12)}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple:after{transition:opacity .15s linear}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple:after{transition-duration:75ms;opacity:.1;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, .1)}.mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, .1)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple:before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple:before{opacity:.04;opacity:var(--mdc-switch-unselected-hover-state-layer-opacity, .04)}.mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple:before,.mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity, .12)}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple:after{transition:opacity .15s linear}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple:after{transition-duration:75ms;opacity:.1;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, .1)}.mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, .1)}.mdc-switch .mdc-switch__ripple{height:48px;height:var(--mdc-switch-state-layer-size, 48px);width:48px;width:var(--mdc-switch-state-layer-size, 48px)}.mdc-switch .mdc-switch__track{height:14px;height:var(--mdc-switch-track-height, 14px)}.mdc-switch:disabled .mdc-switch__track{opacity:.12;opacity:var(--mdc-switch-disabled-track-opacity, .12)}.mdc-switch:enabled .mdc-switch__track:after{background:#d7bbff;background:var(--mdc-switch-selected-track-color, #d7bbff)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track:after{background:#d7bbff;background:var(--mdc-switch-selected-hover-track-color, #d7bbff)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track:after{background:#d7bbff;background:var(--mdc-switch-selected-focus-track-color, #d7bbff)}.mdc-switch:enabled:active .mdc-switch__track:after{background:#d7bbff;background:var(--mdc-switch-selected-pressed-track-color, #d7bbff)}.mdc-switch:disabled .mdc-switch__track:after{background:#424242;background:var(--mdc-switch-disabled-selected-track-color, #424242)}.mdc-switch:enabled .mdc-switch__track:before{background:#e0e0e0;background:var(--mdc-switch-unselected-track-color, #e0e0e0)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track:before{background:#e0e0e0;background:var(--mdc-switch-unselected-hover-track-color, #e0e0e0)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track:before{background:#e0e0e0;background:var(--mdc-switch-unselected-focus-track-color, #e0e0e0)}.mdc-switch:enabled:active .mdc-switch__track:before{background:#e0e0e0;background:var(--mdc-switch-unselected-pressed-track-color, #e0e0e0)}.mdc-switch:disabled .mdc-switch__track:before{background:#424242;background:var(--mdc-switch-disabled-unselected-track-color, #424242)}.mdc-switch .mdc-switch__track{border-radius:7px;border-radius:var(--mdc-switch-track-shape, 7px)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-switch:disabled .mdc-switch__handle:after{opacity:1;opacity:var(--mdc-switch-disabled-handle-opacity, 1)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-selected-icon-color, ButtonText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-selected-icon-color, GrayText)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-unselected-icon-color, ButtonText)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-unselected-icon-color, GrayText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 1)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 1)}.mdc-switch:disabled .mdc-switch__track{opacity:1;opacity:var(--mdc-switch-disabled-track-opacity, 1)}}.mdc-switch{margin:14px}.mdc-switch.smui-switch--color-secondary{--mdc-switch-disabled-selected-icon-color:var(--mdc-theme-on-secondary, #fff);--mdc-switch-disabled-unselected-icon-color:var(--mdc-theme-on-secondary, #fff);--mdc-switch-selected-focus-handle-color:rgb(1, 67.5, 67.0037313433);--mdc-switch-selected-focus-state-layer-color:var(--mdc-theme-secondary, #018786);--mdc-switch-selected-focus-track-color:rgb(162.1875, 254.3125, 253.625);--mdc-switch-selected-handle-color:var(--mdc-theme-secondary, #018786);--mdc-switch-selected-hover-handle-color:rgb(1, 67.5, 67.0037313433);--mdc-switch-selected-hover-state-layer-color:var(--mdc-theme-secondary, #018786);--mdc-switch-selected-hover-track-color:rgb(162.1875, 254.3125, 253.625);--mdc-switch-selected-icon-color:var(--mdc-theme-on-secondary, #fff);--mdc-switch-selected-pressed-handle-color:rgb(1, 67.5, 67.0037313433);--mdc-switch-selected-pressed-state-layer-color:var(--mdc-theme-secondary, #018786);--mdc-switch-selected-pressed-track-color:rgb(162.1875, 254.3125, 253.625);--mdc-switch-selected-track-color:rgb(162.1875, 254.3125, 253.625);--mdc-switch-unselected-icon-color:var(--mdc-theme-on-secondary, #fff)}.mdc-tab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-button-font-size, .875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, .0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative}.mdc-tab .mdc-tab__text-label{color:#0009}.mdc-tab .mdc-tab__icon{color:#0000008a;fill:currentColor}.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:8px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% - 12px);width:calc(100% - 8px);margin-top:-2px;z-index:2}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring:after,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:10px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring:after,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring:after{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:8px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% - 8px);width:calc(100% - 8px);z-index:2}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring:after,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring:after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:10px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring:after,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring:after{border-color:CanvasText}}.mdc-tab__content{position:relative}.mdc-tab__icon{width:24px;height:24px;font-size:24px}.mdc-tab--active .mdc-tab__text-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tab--active .mdc-tab__icon{color:#6200ee;color:var(--mdc-theme-primary, #6200ee);fill:currentColor}.mdc-tab{background:none}.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:.15s color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:.15s color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:.1s}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-tab .mdc-tab__ripple:before,.mdc-tab .mdc-tab__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-tab .mdc-tab__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-tab .mdc-tab__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-tab.mdc-ripple-upgraded--unbounded .mdc-tab__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-tab.mdc-ripple-upgraded--foreground-activation .mdc-tab__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-tab.mdc-ripple-upgraded--foreground-deactivation .mdc-tab__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab .mdc-tab__ripple:before,.mdc-tab .mdc-tab__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-tab .mdc-tab__ripple:before,.mdc-tab .mdc-tab__ripple:after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-tab:hover .mdc-tab__ripple:before,.mdc-tab.mdc-ripple-surface--hover .mdc-tab__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__ripple:before,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-tab:not(.mdc-ripple-upgraded) .mdc-tab__ripple:after{transition:opacity .15s linear}.mdc-tab:not(.mdc-ripple-upgraded):active .mdc-tab__ripple:after{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-tab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .12)}.mdc-tab__ripple{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;will-change:transform,opacity}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#018786;color:var(--mdc-theme-secondary, #018786)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:.25s transform cubic-bezier(.4,0,.2,1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:.15s opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:.1s}.mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:.25s transform cubic-bezier(.4,0,.2,1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple:before,.mdc-text-field--filled .mdc-text-field__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-text-field--filled .mdc-text-field__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple:before,.mdc-text-field--filled .mdc-text-field__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:#0009}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:#000000de}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:#0000008a}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:#0000008a}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:#0009}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:#0009}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:#0000008a}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#0000008a}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:#0009}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:#0009}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity .15s 0ms cubic-bezier(.4,0,.2,1);width:100%;min-width:0;border:none;border-radius:0;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(.4,0,.2,1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(.4,0,.2,1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:.11s;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:.11s;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, .009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity .15s 0ms cubic-bezier(.4,0,.2,1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports (-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl],.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple:before,.mdc-text-field--filled .mdc-text-field__ripple:after{background-color:#000000de;background-color:var(--mdc-ripple-color, rgba(0, 0, 0, .87))}.mdc-text-field--filled:hover .mdc-text-field__ripple:before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple:before{opacity:.04;opacity:var(--mdc-ripple-hover-opacity, .04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple:before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple:before{transition-duration:75ms;opacity:.12;opacity:var(--mdc-ripple-focus-opacity, .12)}.mdc-text-field--filled:before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:#f5f5f5}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple:before{border-bottom-color:#0000006b}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple:before{border-bottom-color:#000000de}.mdc-text-field--filled .mdc-line-ripple:after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label:before{display:none}@supports (-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined .25s 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translate(calc(0 + -0%)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(4%) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(-4%) translateY(-34.75px) scale(.75)}to{transform:translate(calc(0 + -0%)) translateY(-34.75px) scale(.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#00000061}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#000000de}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports (top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-shape-small, 4px))}}@supports (top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - (max(12px,var(--mdc-shape-small, 4px))*2))}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports (top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports (top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px,var(--mdc-shape-small, 4px))}}@supports (top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}@supports (top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports (top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px,var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports (top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px,var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports (top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports (top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px,calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple:before,.mdc-text-field--outlined .mdc-text-field__ripple:after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none!important;background-color:#0000}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled:before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled .25s 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translate(calc(0 + -0%)) translateY(-10.25px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(4%) translateY(-10.25px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(-4%) translateY(-10.25px) scale(.75)}to{transform:translate(calc(0 + -0%)) translateY(-10.25px) scale(.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined .25s 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translate(calc(0 + -0%)) translateY(-24.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(4%) translateY(-24.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(-4%) translateY(-24.75px) scale(.75)}to{transform:translate(calc(0 + -0%)) translateY(-24.75px) scale(.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter:after{display:inline-block;width:0;height:16px;content:\"\";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter:before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translate(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translate(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translate(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translate(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/.75 - 64px/.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translate(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translate(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translate(-32px) scale(.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translate(32px) scale(.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon .25s 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translate(calc(0 - 32px)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(calc(4% - 32px)) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(calc(-4% - 32px)) translateY(-34.75px) scale(.75)}to{transform:translate(calc(0 - 32px)) translateY(-34.75px) scale(.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon .25s 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translate(calc(0 + 32px)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translate(calc(4% + 32px)) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translate(calc(-4% + 32px)) translateY(-34.75px) scale(.75)}to{transform:translate(calc(0 + 32px)) translateY(-34.75px) scale(.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/.75 - 64px/.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100%/.75 - 96px/.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:#6200eede}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple:before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple:after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple:before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:#00000061}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:#00000061}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:#00000061}}.mdc-text-field--disabled .mdc-floating-label{color:#00000061}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:#00000061}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:#00000061}.mdc-text-field--disabled .mdc-text-field__icon--leading,.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:#0000004d}.mdc-text-field--disabled .mdc-text-field__affix--prefix,.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:#00000061}.mdc-text-field--disabled .mdc-line-ripple:before{border-bottom-color:#0000000f}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:#0000000f}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}.mdc-text-field--disabled .mdc-floating-label{color:GrayText}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}.mdc-text-field--disabled .mdc-text-field__icon--leading,.mdc-text-field--disabled .mdc-text-field__icon--trailing,.mdc-text-field--disabled .mdc-text-field__affix--prefix,.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}.mdc-text-field--disabled .mdc-line-ripple:before{border-bottom-color:GrayText}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.smui-text-field--standard{height:56px;padding:0}.smui-text-field--standard:before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.smui-text-field--standard:not(.mdc-text-field--disabled){background-color:transparent}.smui-text-field--standard:not(.mdc-text-field--disabled) .mdc-line-ripple:before{border-bottom-color:#0000006b}.smui-text-field--standard:not(.mdc-text-field--disabled):hover .mdc-line-ripple:before{border-bottom-color:#000000de}.smui-text-field--standard .mdc-line-ripple:after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.smui-text-field--standard .mdc-floating-label{left:0;right:initial}[dir=rtl] .smui-text-field--standard .mdc-floating-label,.smui-text-field--standard .mdc-floating-label[dir=rtl]{left:initial;right:0}.smui-text-field--standard .mdc-floating-label--float-above{transform:translateY(-106%) scale(.75)}.smui-text-field--standard.mdc-text-field--no-label .mdc-text-field__input{height:100%}.smui-text-field--standard.mdc-text-field--no-label .mdc-floating-label{display:none}.smui-text-field--standard.mdc-text-field--no-label:before{display:none}@supports (-webkit-hyphens: none){.smui-text-field--standard.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--with-leading-icon.smui-text-field--standard .mdc-floating-label{max-width:calc(100% - 32px);left:32px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.smui-text-field--standard .mdc-floating-label,.mdc-text-field--with-leading-icon.smui-text-field--standard .mdc-floating-label[dir=rtl]{left:initial;right:32px}.mdc-text-field--with-leading-icon.smui-text-field--standard .mdc-floating-label--float-above{max-width:calc(100%/.75 - 48px/.75)}.mdc-text-field--with-trailing-icon.smui-text-field--standard .mdc-floating-label{max-width:calc(100% - 36px)}.mdc-text-field--with-trailing-icon.smui-text-field--standard .mdc-floating-label--float-above{max-width:calc(100%/.75 - 36px/.75)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.smui-text-field--standard .mdc-floating-label{max-width:calc(100% - 68px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.smui-text-field--standard .mdc-floating-label--float-above{max-width:calc(100%/.75 - 68px/.75)}.mdc-text-field+.mdc-text-field-helper-line{padding-left:0;padding-right:0}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, .75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, .0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter:before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, .75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, .0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity .15s 0ms cubic-bezier(.4,0,.2,1)}.mdc-text-field-helper-text:before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex=\"-1\"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0;margin-right:0}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0;margin-right:0}.smui-text-field--standard .mdc-text-field__icon--leading{margin-left:0;margin-right:8px}[dir=rtl] .smui-text-field--standard .mdc-text-field__icon--leading,.smui-text-field--standard .mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:0}.smui-text-field--standard .mdc-text-field__icon--trailing{padding:12px 0 12px 12px;margin-left:0;margin-right:0}[dir=rtl] .smui-text-field--standard .mdc-text-field__icon--trailing,.smui-text-field--standard .mdc-text-field__icon--trailing[dir=rtl]{padding-left:0;padding-right:12px}[dir=rtl] .smui-text-field--standard .mdc-text-field__icon--trailing,.smui-text-field--standard .mdc-text-field__icon--trailing[dir=rtl]{margin-left:0;margin-right:0}.mdc-tooltip__surface,.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-tooltip__surface{color:#fff;color:var(--mdc-theme-text-primary-on-dark, white)}.mdc-tooltip__surface{background-color:#0009}.mdc-tooltip__surface{word-break:break-all;word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip{z-index:9}.mdc-tooltip--showing-transition .mdc-tooltip__surface-animation{transition:opacity .15s 0ms cubic-bezier(0,0,.2,1),transform .15s 0ms cubic-bezier(0,0,.2,1)}.mdc-tooltip--hide-transition .mdc-tooltip__surface-animation{transition:opacity 75ms 0ms cubic-bezier(.4,0,1,1)}.mdc-tooltip__title{color:#000000de;color:var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, .87))}.mdc-tooltip__content{color:#0009}.mdc-tooltip__content-link{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tooltip{position:fixed;display:none}.mdc-tooltip.mdc-tooltip--rich .mdc-tooltip__surface,.mdc-tooltip.mdc-tooltip--rich .mdc-tooltip__caret-surface-top,.mdc-tooltip.mdc-tooltip--rich .mdc-tooltip__caret-surface-bottom{background-color:#fff}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.75rem;font-size:var(--mdc-typography-caption-font-size, .75rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, .0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface:before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface:before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;align-items:flex-start;border-radius:4px;display:flex;flex-direction:column;line-height:20px;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{display:block;line-height:20px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-subtitle2-font-size, .875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, .0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__title:before{display:inline-block;width:0;height:24px;content:\"\";vertical-align:0}.mdc-tooltip__surface .mdc-tooltip__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);max-width:184px;margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:304px;align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__title,.mdc-tooltip--rich .mdc-tooltip__content{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-tooltip--rich .mdc-tooltip__content-link{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.smui-tooltip--force-show{display:inline-flex!important}.smui-tooltip--force-show.mdc-tooltip--rich{display:inline-block!important}.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:#fff;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item:before,.mdc-top-app-bar .mdc-top-app-bar__action-item:after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover:before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover:before{opacity:.08;opacity:var(--mdc-ripple-hover-opacity, .08)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused:before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused:before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active:after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, .0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-radius:0 0 0 24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width .25s cubic-bezier(.4,0,.2,1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity .2s cubic-bezier(.4,0,.2,1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;width:56px;transition:width .3s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding .15s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow .2s linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f;transition:box-shadow .2s linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media (max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width .2s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed{transition:width .25s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}.smui-top-app-bar--static{position:static}.smui-top-app-bar--color-secondary{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-secondary, #fff))}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:hover:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item.mdc-ripple-surface--hover:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:hover:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover:before{opacity:.08;opacity:var(--mdc-ripple-hover-opacity, .08)}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused:before,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-focus-opacity, .24)}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active:after,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.24;opacity:var(--mdc-ripple-press-opacity, .24)}.smui-top-app-bar--color-secondary .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.smui-top-app-bar--color-secondary .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, .24)}.smui-accordion{display:block;position:relative;z-index:0}.smui-accordion.smui-accordion--with-open-dialog{z-index:auto}.smui-accordion .smui-accordion__panel{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;padding:0;margin-top:0;margin-bottom:0;transition:margin-top .2s 0ms cubic-bezier(.4,0,.2,1),margin-bottom .2s 0ms cubic-bezier(.4,0,.2,1)}.smui-accordion .smui-accordion__panel .smui-accordion__header__ripple:before,.smui-accordion .smui-accordion__panel .smui-accordion__header__ripple:after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.smui-accordion .smui-accordion__panel .smui-accordion__header__ripple:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.smui-accordion .smui-accordion__panel .smui-accordion__header__ripple:after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.smui-accordion .smui-accordion__panel.mdc-ripple-upgraded .smui-accordion__header__ripple:before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.smui-accordion .smui-accordion__panel.mdc-ripple-upgraded .smui-accordion__header__ripple:after{top:0;left:0;transform:scale(0);transform-origin:center center}.smui-accordion .smui-accordion__panel.mdc-ripple-upgraded--unbounded .smui-accordion__header__ripple:after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.smui-accordion .smui-accordion__panel.mdc-ripple-upgraded--foreground-activation .smui-accordion__header__ripple:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.smui-accordion .smui-accordion__panel.mdc-ripple-upgraded--foreground-deactivation .smui-accordion__header__ripple:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.smui-accordion .smui-accordion__panel .smui-accordion__header__ripple:before,.smui-accordion .smui-accordion__panel .smui-accordion__header__ripple:after{top:-50%;left:-50%;width:200%;height:200%}.smui-accordion .smui-accordion__panel.mdc-ripple-upgraded .smui-accordion__header__ripple:after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.smui-accordion .smui-accordion__panel.smui-accordion__panel--extend{transition:width .2s 0ms cubic-bezier(.4,0,.2,1),left .2s 0ms cubic-bezier(.4,0,.2,1),box-shadow .2s 0ms cubic-bezier(.4,0,.2,1),margin-top .2s 0ms cubic-bezier(.4,0,.2,1),margin-bottom .2s 0ms cubic-bezier(.4,0,.2,1);width:100%;left:0}.smui-accordion .smui-accordion__panel.smui-accordion__panel--extend.smui-accordion__panel--open{width:calc(100% + 10px);left:-5px}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised,.smui-accordion .smui-accordion__panel.smui-paper--unelevated{border-top-width:1px;border-top-style:solid;border-top-color:#0000001f}.smui-accordion .smui-accordion__panel.smui-paper.smui-accordion__panel--raised{z-index:auto;will-change:auto}.smui-accordion .smui-accordion__panel.smui-paper.smui-accordion__panel--raised:before{content:\"\";position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z0:before{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z1:before{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z2:before{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z3:before{box-shadow:0 3px 3px -2px #0003,0 3px 4px #00000024,0 1px 8px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z4:before{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z5:before{box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z6:before{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z7:before{box-shadow:0 4px 5px -2px #0003,0 7px 10px 1px #00000024,0 2px 16px 1px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z8:before{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z9:before{box-shadow:0 5px 6px -3px #0003,0 9px 12px 1px #00000024,0 3px 16px 2px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z10:before{box-shadow:0 6px 6px -3px #0003,0 10px 14px 1px #00000024,0 4px 18px 3px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z11:before{box-shadow:0 6px 7px -4px #0003,0 11px 15px 1px #00000024,0 4px 20px 3px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z12:before{box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z13:before{box-shadow:0 7px 8px -4px #0003,0 13px 19px 2px #00000024,0 5px 24px 4px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z14:before{box-shadow:0 7px 9px -4px #0003,0 14px 21px 2px #00000024,0 5px 26px 4px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z15:before{box-shadow:0 8px 9px -5px #0003,0 15px 22px 2px #00000024,0 6px 28px 5px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z16:before{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z17:before{box-shadow:0 8px 11px -5px #0003,0 17px 26px 2px #00000024,0 6px 32px 5px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z18:before{box-shadow:0 9px 11px -5px #0003,0 18px 28px 2px #00000024,0 7px 34px 6px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z19:before{box-shadow:0 9px 12px -6px #0003,0 19px 29px 2px #00000024,0 7px 36px 6px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z20:before{box-shadow:0 10px 13px -6px #0003,0 20px 31px 3px #00000024,0 8px 38px 7px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z21:before{box-shadow:0 10px 13px -6px #0003,0 21px 33px 3px #00000024,0 8px 40px 7px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z22:before{box-shadow:0 10px 14px -6px #0003,0 22px 35px 3px #00000024,0 8px 42px 7px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z23:before{box-shadow:0 11px 14px -7px #0003,0 23px 36px 3px #00000024,0 9px 44px 8px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--elevation-z24:before{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z0:before{box-shadow:0 0 #6200ee33,0 0 #6200ee24,0 0 #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z1:before{box-shadow:0 2px 1px -1px #6200ee33,0 1px 1px #6200ee24,0 1px 3px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z2:before{box-shadow:0 3px 1px -2px #6200ee33,0 2px 2px #6200ee24,0 1px 5px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z3:before{box-shadow:0 3px 3px -2px #6200ee33,0 3px 4px #6200ee24,0 1px 8px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z4:before{box-shadow:0 2px 4px -1px #6200ee33,0 4px 5px #6200ee24,0 1px 10px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z5:before{box-shadow:0 3px 5px -1px #6200ee33,0 5px 8px #6200ee24,0 1px 14px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z6:before{box-shadow:0 3px 5px -1px #6200ee33,0 6px 10px #6200ee24,0 1px 18px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z7:before{box-shadow:0 4px 5px -2px #6200ee33,0 7px 10px 1px #6200ee24,0 2px 16px 1px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z8:before{box-shadow:0 5px 5px -3px #6200ee33,0 8px 10px 1px #6200ee24,0 3px 14px 2px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z9:before{box-shadow:0 5px 6px -3px #6200ee33,0 9px 12px 1px #6200ee24,0 3px 16px 2px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z10:before{box-shadow:0 6px 6px -3px #6200ee33,0 10px 14px 1px #6200ee24,0 4px 18px 3px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z11:before{box-shadow:0 6px 7px -4px #6200ee33,0 11px 15px 1px #6200ee24,0 4px 20px 3px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z12:before{box-shadow:0 7px 8px -4px #6200ee33,0 12px 17px 2px #6200ee24,0 5px 22px 4px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z13:before{box-shadow:0 7px 8px -4px #6200ee33,0 13px 19px 2px #6200ee24,0 5px 24px 4px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z14:before{box-shadow:0 7px 9px -4px #6200ee33,0 14px 21px 2px #6200ee24,0 5px 26px 4px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z15:before{box-shadow:0 8px 9px -5px #6200ee33,0 15px 22px 2px #6200ee24,0 6px 28px 5px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z16:before{box-shadow:0 8px 10px -5px #6200ee33,0 16px 24px 2px #6200ee24,0 6px 30px 5px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z17:before{box-shadow:0 8px 11px -5px #6200ee33,0 17px 26px 2px #6200ee24,0 6px 32px 5px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z18:before{box-shadow:0 9px 11px -5px #6200ee33,0 18px 28px 2px #6200ee24,0 7px 34px 6px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z19:before{box-shadow:0 9px 12px -6px #6200ee33,0 19px 29px 2px #6200ee24,0 7px 36px 6px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z20:before{box-shadow:0 10px 13px -6px #6200ee33,0 20px 31px 3px #6200ee24,0 8px 38px 7px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z21:before{box-shadow:0 10px 13px -6px #6200ee33,0 21px 33px 3px #6200ee24,0 8px 40px 7px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z22:before{box-shadow:0 10px 14px -6px #6200ee33,0 22px 35px 3px #6200ee24,0 8px 42px 7px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z23:before{box-shadow:0 11px 14px -7px #6200ee33,0 23px 36px 3px #6200ee24,0 9px 44px 8px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-primary.smui-accordion__panel--elevation-z24:before{box-shadow:0 11px 15px -7px #6200ee33,0 24px 38px 3px #6200ee24,0 9px 46px 8px #6200ee1f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z0:before{box-shadow:0 0 #01878633,0 0 #01878624,0 0 #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z1:before{box-shadow:0 2px 1px -1px #01878633,0 1px 1px #01878624,0 1px 3px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z2:before{box-shadow:0 3px 1px -2px #01878633,0 2px 2px #01878624,0 1px 5px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z3:before{box-shadow:0 3px 3px -2px #01878633,0 3px 4px #01878624,0 1px 8px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z4:before{box-shadow:0 2px 4px -1px #01878633,0 4px 5px #01878624,0 1px 10px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z5:before{box-shadow:0 3px 5px -1px #01878633,0 5px 8px #01878624,0 1px 14px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z6:before{box-shadow:0 3px 5px -1px #01878633,0 6px 10px #01878624,0 1px 18px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z7:before{box-shadow:0 4px 5px -2px #01878633,0 7px 10px 1px #01878624,0 2px 16px 1px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z8:before{box-shadow:0 5px 5px -3px #01878633,0 8px 10px 1px #01878624,0 3px 14px 2px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z9:before{box-shadow:0 5px 6px -3px #01878633,0 9px 12px 1px #01878624,0 3px 16px 2px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z10:before{box-shadow:0 6px 6px -3px #01878633,0 10px 14px 1px #01878624,0 4px 18px 3px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z11:before{box-shadow:0 6px 7px -4px #01878633,0 11px 15px 1px #01878624,0 4px 20px 3px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z12:before{box-shadow:0 7px 8px -4px #01878633,0 12px 17px 2px #01878624,0 5px 22px 4px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z13:before{box-shadow:0 7px 8px -4px #01878633,0 13px 19px 2px #01878624,0 5px 24px 4px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z14:before{box-shadow:0 7px 9px -4px #01878633,0 14px 21px 2px #01878624,0 5px 26px 4px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z15:before{box-shadow:0 8px 9px -5px #01878633,0 15px 22px 2px #01878624,0 6px 28px 5px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z16:before{box-shadow:0 8px 10px -5px #01878633,0 16px 24px 2px #01878624,0 6px 30px 5px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z17:before{box-shadow:0 8px 11px -5px #01878633,0 17px 26px 2px #01878624,0 6px 32px 5px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z18:before{box-shadow:0 9px 11px -5px #01878633,0 18px 28px 2px #01878624,0 7px 34px 6px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z19:before{box-shadow:0 9px 12px -6px #01878633,0 19px 29px 2px #01878624,0 7px 36px 6px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z20:before{box-shadow:0 10px 13px -6px #01878633,0 20px 31px 3px #01878624,0 8px 38px 7px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z21:before{box-shadow:0 10px 13px -6px #01878633,0 21px 33px 3px #01878624,0 8px 40px 7px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z22:before{box-shadow:0 10px 14px -6px #01878633,0 22px 35px 3px #01878624,0 8px 42px 7px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z23:before{box-shadow:0 11px 14px -7px #01878633,0 23px 36px 3px #01878624,0 9px 44px 8px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-paper--color-secondary.smui-accordion__panel--elevation-z24:before{box-shadow:0 11px 15px -7px #01878633,0 24px 38px 3px #01878624,0 9px 46px 8px #0187861f}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised:first-child,.smui-accordion .smui-accordion__panel.smui-paper--unelevated:first-child{border-top-width:0}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised:last-child,.smui-accordion .smui-accordion__panel.smui-paper--unelevated:last-child{border-top-left-radius:0;border-top-right-radius:0}.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--open,.smui-accordion .smui-accordion__panel.smui-accordion__panel--raised.smui-accordion__panel--open+.smui-accordion__panel,.smui-accordion .smui-accordion__panel.smui-paper--unelevated.smui-accordion__panel--open,.smui-accordion .smui-accordion__panel.smui-paper--unelevated.smui-accordion__panel--open+.smui-accordion__panel{border-top-width:0}.smui-accordion .smui-accordion__panel.smui-paper--outlined:nth-child(n+2){border-top-width:0}.smui-accordion .smui-accordion__panel.smui-paper--outlined.smui-accordion__panel--open,.smui-accordion .smui-accordion__panel.smui-paper--outlined.smui-accordion__panel--open+.smui-accordion__panel{border-top-width:1px}.smui-accordion .smui-accordion__panel.smui-paper--rounded:before{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.smui-accordion .smui-accordion__panel:first-child:not(:last-child),.smui-accordion .smui-accordion__panel:first-child:not(:last-child):before{border-bottom-left-radius:0;border-bottom-right-radius:0}.smui-accordion .smui-accordion__panel:last-child:not(:first-child),.smui-accordion .smui-accordion__panel:last-child:not(:first-child):before{border-top-left-radius:0;border-top-right-radius:0}.smui-accordion .smui-accordion__panel:not(:first-child,:last-child),.smui-accordion .smui-accordion__panel:not(:first-child,:last-child):before{border-radius:0}.smui-accordion .smui-accordion__panel>.smui-accordion__header{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, .03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit);display:flex;flex-wrap:wrap;cursor:pointer}.smui-accordion .smui-accordion__panel>.smui-accordion__header .smui-accordion__header__title{padding:16px 24px;flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.smui-accordion .smui-accordion__panel>.smui-accordion__header .smui-accordion__header__title.smui-accordion__header__title--with-description{flex-basis:30%;max-width:280px;box-sizing:border-box;padding-inline-end:0}.smui-accordion .smui-accordion__panel>.smui-accordion__header .smui-accordion__header__description{opacity:.48;padding:16px 24px;flex-basis:0;flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.smui-accordion .smui-accordion__panel>.smui-accordion__header .smui-accordion__header__icon{align-self:center;flex-shrink:1;margin:0 24px;margin-inline-start:0}.smui-accordion .smui-accordion__panel>.smui-accordion__header .smui-accordion__header__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden;z-index:0;pointer-events:none}.smui-accordion .smui-accordion__panel.smui-accordion__panel--disabled>.smui-accordion__header,.smui-accordion .smui-accordion__panel.smui-accordion__panel--non-interactive>.smui-accordion__header{cursor:initial}.smui-accordion .smui-accordion__panel.smui-accordion__panel--disabled>.smui-accordion__header,.smui-accordion .smui-accordion__panel.smui-accordion__panel--disabled>.smui-paper__content{opacity:.38}.smui-accordion .smui-accordion__panel>.smui-paper__content{overflow:hidden;transition:height .3s 0ms cubic-bezier(.4,0,.2,1),padding .3s 0ms cubic-bezier(.4,0,.2,1);box-sizing:border-box;height:0;padding:0 24px}.smui-accordion .smui-accordion__panel>.smui-paper__content.smui-accordion__content--no-transition{transition:none}.smui-accordion .smui-accordion__panel>.smui-paper__content.smui-accordion__content--force-open{height:auto;padding:16px 24px}.smui-accordion .smui-accordion__panel.smui-accordion__panel--opened>.smui-paper__content{overflow:visible}.smui-accordion .smui-accordion__panel.smui-accordion__panel--open{margin-top:1rem;margin-bottom:1rem}.smui-accordion .smui-accordion__panel.smui-accordion__panel--open:first-child{margin-top:0}.smui-accordion .smui-accordion__panel.smui-accordion__panel--open:last-child{margin-bottom:0}.smui-accordion .smui-accordion__panel.smui-accordion__panel--open>.smui-paper__content{height:auto;padding:16px 24px}.smui-autocomplete{display:inline-block}.smui-autocomplete__menu{min-width:100%}.smui-badge{min-height:24px;min-width:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, .03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit);position:absolute;font-size:13.3333333333px;display:flex;justify-content:center;align-content:center;z-index:2;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-left:4px;padding-right:4px}.smui-badge.smui-badge--rounded{border-radius:24px}.smui-badge.smui-badge--align-top-start.smui-badge--position-inset,.smui-badge.smui-badge--align-top-start.smui-badge--position-middle,.smui-badge.smui-badge--align-top-middle.smui-badge--position-inset,.smui-badge.smui-badge--align-top-middle.smui-badge--position-middle,.smui-badge.smui-badge--align-top-end.smui-badge--position-inset,.smui-badge.smui-badge--align-top-end.smui-badge--position-middle{top:0}.smui-badge.smui-badge--align-top-start.smui-badge--position-outset,.smui-badge.smui-badge--align-top-middle.smui-badge--position-outset,.smui-badge.smui-badge--align-top-end.smui-badge--position-outset{bottom:100%}.smui-badge.smui-badge--align-bottom-start.smui-badge--position-inset,.smui-badge.smui-badge--align-bottom-start.smui-badge--position-middle,.smui-badge.smui-badge--align-bottom-middle.smui-badge--position-inset,.smui-badge.smui-badge--align-bottom-middle.smui-badge--position-middle,.smui-badge.smui-badge--align-bottom-end.smui-badge--position-inset,.smui-badge.smui-badge--align-bottom-end.smui-badge--position-middle{bottom:0}.smui-badge.smui-badge--align-bottom-start.smui-badge--position-outset,.smui-badge.smui-badge--align-bottom-middle.smui-badge--position-outset,.smui-badge.smui-badge--align-bottom-end.smui-badge--position-outset{top:100%}.smui-badge.smui-badge--align-top-end.smui-badge--position-inset,.smui-badge.smui-badge--align-middle-end.smui-badge--position-inset,.smui-badge.smui-badge--align-bottom-end.smui-badge--position-inset{left:initial;right:0}[dir=rtl] .smui-badge.smui-badge--align-top-end.smui-badge--position-inset,[dir=rtl] .smui-badge.smui-badge--align-middle-end.smui-badge--position-inset,[dir=rtl] .smui-badge.smui-badge--align-bottom-end.smui-badge--position-inset,.smui-badge.smui-badge--align-top-end.smui-badge--position-inset[dir=rtl],.smui-badge.smui-badge--align-middle-end.smui-badge--position-inset[dir=rtl],.smui-badge.smui-badge--align-bottom-end.smui-badge--position-inset[dir=rtl]{left:0;right:initial}.smui-badge.smui-badge--align-top-end.smui-badge--position-middle,.smui-badge.smui-badge--align-middle-end.smui-badge--position-middle,.smui-badge.smui-badge--align-bottom-end.smui-badge--position-middle{left:initial;right:0}[dir=rtl] .smui-badge.smui-badge--align-top-end.smui-badge--position-middle,[dir=rtl] .smui-badge.smui-badge--align-middle-end.smui-badge--position-middle,[dir=rtl] .smui-badge.smui-badge--align-bottom-end.smui-badge--position-middle,.smui-badge.smui-badge--align-top-end.smui-badge--position-middle[dir=rtl],.smui-badge.smui-badge--align-middle-end.smui-badge--position-middle[dir=rtl],.smui-badge.smui-badge--align-bottom-end.smui-badge--position-middle[dir=rtl]{left:0;right:initial}.smui-badge.smui-badge--align-top-end.smui-badge--position-outset,.smui-badge.smui-badge--align-middle-end.smui-badge--position-outset,.smui-badge.smui-badge--align-bottom-end.smui-badge--position-outset{left:100%;right:initial}[dir=rtl] .smui-badge.smui-badge--align-top-end.smui-badge--position-outset,[dir=rtl] .smui-badge.smui-badge--align-middle-end.smui-badge--position-outset,[dir=rtl] .smui-badge.smui-badge--align-bottom-end.smui-badge--position-outset,.smui-badge.smui-badge--align-top-end.smui-badge--position-outset[dir=rtl],.smui-badge.smui-badge--align-middle-end.smui-badge--position-outset[dir=rtl],.smui-badge.smui-badge--align-bottom-end.smui-badge--position-outset[dir=rtl]{left:initial;right:100%}.smui-badge.smui-badge--align-top-start.smui-badge--position-inset,.smui-badge.smui-badge--align-middle-start.smui-badge--position-inset,.smui-badge.smui-badge--align-bottom-start.smui-badge--position-inset{left:0;right:initial}[dir=rtl] .smui-badge.smui-badge--align-top-start.smui-badge--position-inset,[dir=rtl] .smui-badge.smui-badge--align-middle-start.smui-badge--position-inset,[dir=rtl] .smui-badge.smui-badge--align-bottom-start.smui-badge--position-inset,.smui-badge.smui-badge--align-top-start.smui-badge--position-inset[dir=rtl],.smui-badge.smui-badge--align-middle-start.smui-badge--position-inset[dir=rtl],.smui-badge.smui-badge--align-bottom-start.smui-badge--position-inset[dir=rtl]{left:initial;right:0}.smui-badge.smui-badge--align-top-start.smui-badge--position-middle,.smui-badge.smui-badge--align-middle-start.smui-badge--position-middle,.smui-badge.smui-badge--align-bottom-start.smui-badge--position-middle{left:0;right:initial}[dir=rtl] .smui-badge.smui-badge--align-top-start.smui-badge--position-middle,[dir=rtl] .smui-badge.smui-badge--align-middle-start.smui-badge--position-middle,[dir=rtl] .smui-badge.smui-badge--align-bottom-start.smui-badge--position-middle,.smui-badge.smui-badge--align-top-start.smui-badge--position-middle[dir=rtl],.smui-badge.smui-badge--align-middle-start.smui-badge--position-middle[dir=rtl],.smui-badge.smui-badge--align-bottom-start.smui-badge--position-middle[dir=rtl]{left:initial;right:0}.smui-badge.smui-badge--align-top-start.smui-badge--position-outset,.smui-badge.smui-badge--align-middle-start.smui-badge--position-outset,.smui-badge.smui-badge--align-bottom-start.smui-badge--position-outset{left:initial;right:100%}[dir=rtl] .smui-badge.smui-badge--align-top-start.smui-badge--position-outset,[dir=rtl] .smui-badge.smui-badge--align-middle-start.smui-badge--position-outset,[dir=rtl] .smui-badge.smui-badge--align-bottom-start.smui-badge--position-outset,.smui-badge.smui-badge--align-top-start.smui-badge--position-outset[dir=rtl],.smui-badge.smui-badge--align-middle-start.smui-badge--position-outset[dir=rtl],.smui-badge.smui-badge--align-bottom-start.smui-badge--position-outset[dir=rtl]{left:100%;right:initial}.smui-badge.smui-badge--align-top-start.smui-badge--position-middle{transform-origin:center;transform:translate(-50%) translateY(-50%)}[dir=rtl] .smui-badge.smui-badge--align-top-start.smui-badge--position-middle,.smui-badge.smui-badge--align-top-start.smui-badge--position-middle[dir=rtl]{transform:translate(50%) translateY(-50%)}.smui-badge.smui-badge--align-top-middle.smui-badge--position-middle{transform-origin:center;transform:translateY(-50%)}[dir=rtl] .smui-badge.smui-badge--align-top-middle.smui-badge--position-middle,.smui-badge.smui-badge--align-top-middle.smui-badge--position-middle[dir=rtl]{transform:translateY(-50%)}.smui-badge.smui-badge--align-top-end.smui-badge--position-middle{transform-origin:center;transform:translate(50%) translateY(-50%)}[dir=rtl] .smui-badge.smui-badge--align-top-end.smui-badge--position-middle,.smui-badge.smui-badge--align-top-end.smui-badge--position-middle[dir=rtl]{transform:translate(-50%) translateY(-50%)}.smui-badge.smui-badge--align-middle-start.smui-badge--position-middle{transform-origin:center;transform:translate(-50%)}[dir=rtl] .smui-badge.smui-badge--align-middle-start.smui-badge--position-middle,.smui-badge.smui-badge--align-middle-start.smui-badge--position-middle[dir=rtl]{transform:translate(50%)}.smui-badge.smui-badge--align-middle-end.smui-badge--position-middle{transform-origin:center;transform:translate(50%)}[dir=rtl] .smui-badge.smui-badge--align-middle-end.smui-badge--position-middle,.smui-badge.smui-badge--align-middle-end.smui-badge--position-middle[dir=rtl]{transform:translate(-50%)}.smui-badge.smui-badge--align-bottom-start.smui-badge--position-middle{transform-origin:center;transform:translate(-50%) translateY(50%)}[dir=rtl] .smui-badge.smui-badge--align-bottom-start.smui-badge--position-middle,.smui-badge.smui-badge--align-bottom-start.smui-badge--position-middle[dir=rtl]{transform:translate(50%) translateY(50%)}.smui-badge.smui-badge--align-bottom-middle.smui-badge--position-middle{transform-origin:center;transform:translateY(50%)}[dir=rtl] .smui-badge.smui-badge--align-bottom-middle.smui-badge--position-middle,.smui-badge.smui-badge--align-bottom-middle.smui-badge--position-middle[dir=rtl]{transform:translateY(50%)}.smui-badge.smui-badge--align-bottom-end.smui-badge--position-middle{transform-origin:center;transform:translate(50%) translateY(50%)}[dir=rtl] .smui-badge.smui-badge--align-bottom-end.smui-badge--position-middle,.smui-badge.smui-badge--align-bottom-end.smui-badge--position-middle[dir=rtl]{transform:translate(-50%) translateY(50%)}.smui-badge.smui-badge--color-primary{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:#fff;color:var(--mdc-theme-on-primary, #fff)}.smui-badge.smui-badge--color-secondary{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.smui-bottom-app-bar{display:flex;flex-direction:row;width:100%;--smui-bottom-app-bar--fab-offset: 0px}.smui-bottom-app-bar.smui-bottom-app-bar--fixed,.smui-bottom-app-bar.smui-bottom-app-bar--standard{position:fixed;bottom:0;left:0;right:0}.smui-bottom-app-bar>.smui-bottom-app-bar__section{display:flex;flex-direction:row;justify-content:center;position:relative;padding:16px;height:56px;box-sizing:border-box;flex-grow:1;flex-basis:0;overflow:visible}.smui-bottom-app-bar>.smui-bottom-app-bar__section .mdc-icon-button{margin-top:-12px}.smui-bottom-app-bar>.smui-bottom-app-bar__section .mdc-fab{position:relative;top:calc(var(--smui-bottom-app-bar--fab-offset, 0px) - 44px)}.smui-bottom-app-bar>.smui-bottom-app-bar__section:first-child{justify-content:start}.smui-bottom-app-bar>.smui-bottom-app-bar__section:first-child .mdc-icon-button:first-child{margin-inline-start:-12px}.smui-bottom-app-bar>.smui-bottom-app-bar__section:last-child{justify-content:end}.smui-bottom-app-bar>.smui-bottom-app-bar__section:last-child .mdc-icon-button:last-child{margin-inline-end:-12px}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset{background:radial-gradient(72px 72px at 50% var(--smui-bottom-app-bar--fab-offset, 0px),rgba(0,0,0,0) 35.64px,#6200ee 36.36px)}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset:first-child{background:radial-gradient(72px 72px at 52px var(--smui-bottom-app-bar--fab-offset, 0px),rgba(0,0,0,0) 35.64px,#6200ee 36.36px)}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset:first-child .mdc-fab{margin-inline-start:8px}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset:last-child{background:radial-gradient(72px 72px at calc(100% - 52px) var(--smui-bottom-app-bar--fab-offset, 0px),rgba(0,0,0,0) 35.64px,#6200ee 36.36px)}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset:last-child .mdc-fab{margin-inline-end:8px}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset.smui-paper--color-secondary{background:radial-gradient(72px 72px at 50% var(--smui-bottom-app-bar--fab-offset, 0px),rgba(0,0,0,0) 35.64px,#018786 36.36px)}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset.smui-paper--color-secondary:first-child{background:radial-gradient(72px 72px at 52px var(--smui-bottom-app-bar--fab-offset, 0px),rgba(0,0,0,0) 35.64px,#018786 36.36px)}.smui-bottom-app-bar>.smui-bottom-app-bar__section.smui-paper.smui-bottom-app-bar__section--fab-inset.smui-paper--color-secondary:last-child{background:radial-gradient(72px 72px at calc(100% - 52px) var(--smui-bottom-app-bar--fab-offset, 0px),rgba(0,0,0,0) 35.64px,#018786 36.36px)}.smui-bottom-app-bar--fixed-adjust{padding-bottom:56px}.smui-bottom-app-bar--fixed-adjust .mdc-snackbar,.smui-bottom-app-bar--standard-adjust .mdc-snackbar{transform:translateY(calc(-56px - var(--smui-bottom-app-bar--fab-offset, 0)))}.smui-bottom-app-bar--fixed-adjust.smui-bottom-app-bar--with-fab .mdc-snackbar,.smui-bottom-app-bar--standard-adjust.smui-bottom-app-bar--with-fab .mdc-snackbar{transform:translateY(calc(-84px - var(--smui-bottom-app-bar--fab-offset, 0)))}@supports (-webkit-appearance: none) and (not (overflow: -webkit-marquee)) and (not (-moz-appearance: none)){.smui-bottom-app-bar.smui-bottom-app-bar--standard>.smui-bottom-app-bar__section:after,.smui-bottom-app-bar.smui-bottom-app-bar--fixed>.smui-bottom-app-bar__section:after{display:block;content:\" \";position:absolute;bottom:0;right:0;height:10px;width:10px;pointer-events:none;background-color:#000;opacity:0;animation:60s linear 0s infinite chrome-fix}@keyframes chrome-fix{0%{bottom:0}50%{bottom:46px}to{bottom:0}}}.smui-chip-input{display:flex;flex-wrap:wrap;align-items:center;position:relative;gap:8px}.smui-chip-input.smui-chip-input--disabled .mdc-deprecated-chip-trailing-action{display:none}.smui-chip-input .smui-chip-input__chip-set{padding:0;gap:8px}.smui-chip-input .smui-chip-input__chip-set .mdc-chip{margin:0}.smui-chip-input .smui-chip-input__autocomplete{flex-grow:1}.smui-chip-input .smui-chip-input__textfield{width:100%}.smui-chip-input .smui-chip-input__loading{display:flex;width:100%;justify-content:center;align-items:center}*,:root,:host{--bearingpoint-color-positive: #239c5b;--bearingpoint-color-negative: #ff3d47;--bearingpoint-color-warning: #ffcc17;--bearingpoint-color-warning-text: black;--bearingpoint-color-warning-bg: color-mix(in srgb, white 40%, var(--bearingpoint-color-warning));--bearingpoint-color-bg-page: var(--oscd-base2);--bearingpoint-color-surface: var(--oscd-base3);--bearingpoint-color-text-primary: var(--oscd-base02);--bearingpoint-color-text-dark: var(--oscd-base03);--bearingpoint-color-text-secondary: var(--oscd-base01);--bearingpoint-color-link: var(--oscd-blue);--bearingpoint-color-link-visited: var(--oscd-secondary);--bearingpoint-color-border: var(--oscd-base01);--bearingpoint-color-border-strong: var(--oscd-base03);--bearingpoint-color-border-hover: var(--oscd-base02);--bearingpoint-color-divider: color-mix(in oklab, var(--oscd-base03) 12%, transparent);--bearingpoint-color-overlay: color-mix(in oklab, var(--oscd-base03) 35%, transparent);--bearingpoint-color-action-primary-text: var(--oscd-base2);--bearingpoint-color-action-primary-bg: var(--oscd-primary);--bearingpoint-color-action-primary-bg-hover: color-mix( in oklab, var(--oscd-primary) 80%, var(--bearingpoint-color-surface) );--bearingpoint-color-action-secondary-text: var(--oscd-base3);--bearingpoint-color-action-secondary-bg: var(--oscd-secondary);--bearingpoint-color-action-secondary-bg-hover: color-mix( in oklab, var(--oscd-secondary) 80%, var(--bearingpoint-color-surface) );--bearingpoint-color-action-neutral-text: var(--oscd-secondary);--bearingpoint-color-action-neutral-bg: var(--bearingpoint-color-surface);--bearingpoint-color-action-neutral-bg-hover: color-mix( in oklab, var(--bearingpoint-color-surface) 80%, var(--oscd-base2) );--bearingpoint-color-action-danger-text: var(--oscd-base2);--bearingpoint-color-action-danger-bg: var(--oscd-red);--bearingpoint-color-action-danger-bg-hover: color-mix( in oklab, var(--oscd-red) 82%, var(--bearingpoint-color-surface) );--bearingpoint-font-oscd: var(--oscd-text-font), system-ui, sans-serif}@container style(--oscd-yellow: initial){*{--oscd-yellow: var(--yellow, #b58900);--oscd-orange: var(--orange, #cb4b16);--oscd-red: var(--red, #dc322f);--oscd-magenta: var(--magenta, #d33682);--oscd-violet: var(--violet, #6c71c4);--oscd-blue: var(--blue, #268bd2);--oscd-cyan: var(--cyan, #2aa198);--oscd-green: var(--green, #859900);--oscd-primary: var(--oscd-theme-primary, var(--primary, var(--oscd-cyan, #2aa198)));--oscd-secondary: var(--oscd-theme-secondary, var(--secondary, var(--oscd-violet, #6c71c4)))}}@container style(--oscd-yellow: initial) and style(--primary: #330000) and style(--oscd-primary: var(--cyan)) and style(--oscd-base03: #002b36){*{--oscd-primary: #330000;--oscd-secondary: #990000;--oscd-base03: #5a473e;--oscd-base02: #665247;--oscd-base01: #735c50;--oscd-base00: #806659;--oscd-base0: #b2a59f;--oscd-base1: #ccc1bc;--oscd-base2: #e6deda;--oscd-base3: #faf8f7}}@container style(--oscd-yellow: initial) and style(--primary: #330000) and style(--oscd-primary: var(--cyan)) and style(--oscd-base03: #fdf6e3){*{--oscd-primary: #ffecec;--oscd-secondary: #ee8585;--oscd-base03: #faf8f7;--oscd-base02: #e6deda;--oscd-base01: #ccc1bc;--oscd-base00: #b2a59f;--oscd-base0: #806659;--oscd-base1: #735c50;--oscd-base2: #665247;--oscd-base3: #5a473e}}@container style(--oscd-yellow: initial) and style(--primary: #004552) and style(--oscd-primary: var(--cyan)) and style(--oscd-base03: #002b36){*{--oscd-primary: #004552}}@container style(--oscd-yellow: initial) and style(--primary: #004552) and style(--oscd-primary: var(--cyan)) and style(--oscd-base03: #fdf6e3){*{--oscd-primary: #81c3cf}}:root,:host{--mdc-theme-primary: var(--oscd-primary);--mdc-theme-surface: var(--oscd-base3);--mdc-theme-on-surface: var(--oscd-base03);--mdc-shape-small: 8px}.mdc-text-field--outlined,.mdc-select--outlined,.mdc-select--outlined .mdc-select__anchor{border-radius:var(--mdc-shape-small)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:color-mix(in srgb,var(--oscd-base02) 60%,transparent)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:color-mix(in srgb,var(--oscd-base02) 87%,transparent)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:color-mix(in srgb,var(--oscd-base02) 54%,transparent)}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:color-mix(in srgb,var(--oscd-base02) 87%,transparent)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:color-mix(in srgb,var(--oscd-base02) 54%,transparent)}.mdc-menu .mdc-deprecated-list{color:color-mix(in srgb,var(--oscd-base02) 87%,transparent)}.material-icons,.material-icons-outlined,.material-symbols-outlined{font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}.material-icons{font-family:var(--oscd-icon-font, \"Material Icons\")}.material-icons-outlined{font-family:Material Icons Outlined}.material-symbols-outlined{font-family:Material Symbols Outlined}a{color:var(--bearingpoint-color-link);text-decoration:none}a:hover{text-decoration:underline}a:visited{color:var(--bearingpoint-color-link-visited)}label{display:block}button{height:32px;opacity:1;border:none;border-radius:4px;gap:6px;padding:0 8px;cursor:pointer}button:disabled{opacity:.5;cursor:not-allowed}:root,:host{--bearingpoint-text-h1-size: 20px;--bearingpoint-text-h1-line: 24px;--bearingpoint-text-h1-weight: 500;--bearingpoint-text-h2-size: 16px;--bearingpoint-text-h2-line: 22px;--bearingpoint-text-h2-weight: 500;--bearingpoint-text-h3-size: 18px;--bearingpoint-text-h3-line: 24px;--bearingpoint-text-h3-weight: 500;--bearingpoint-text-16-size: 16px;--bearingpoint-text-16-line: 22px;--bearingpoint-text-16-bold-weight: 500;--bearingpoint-text-body-size: 14px;--bearingpoint-text-body-line: 22px;--bearingpoint-text-body-weight: 400;--bearingpoint-text-14-bold-size: 14px;--bearingpoint-text-14-bold-line: 20px;--bearingpoint-text-14-bold-weight: 500;--bearingpoint-text-caption-size: 12px;--bearingpoint-text-caption-line: 16px;--bearingpoint-text-caption-weight: 400;--bearingpoint-text-label-size: 12px;--bearingpoint-text-label-line: 16px;--bearingpoint-text-label-weight: 500;--bearingpoint-text-tag-size: 12px;--bearingpoint-text-tag-line: 16px;--bearingpoint-text-tag-weight: 500;--bearingpoint-text-button-size: 14px;--bearingpoint-text-button-line: 20px;--bearingpoint-text-button-weight: 500}h1,.bp-typo-h1{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-h1-size);font-weight:var(--bearingpoint-text-h1-weight);line-height:var(--bearingpoint-text-h1-line);letter-spacing:normal;font-style:normal}h2,.bp-typo-h2{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-h2-size);font-weight:var(--bearingpoint-text-h2-weight);line-height:var(--bearingpoint-text-h2-line);letter-spacing:normal;font-style:normal}h3,.bp-typo-h3{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-h3-size);font-weight:var(--bearingpoint-text-h3-weight);line-height:var(--bearingpoint-text-h3-line);letter-spacing:normal;font-style:normal}.bp-typo-body{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-body-size);font-weight:var(--bearingpoint-text-body-weight);line-height:var(--bearingpoint-text-body-line);letter-spacing:normal;font-style:normal}.bp-typo-16-regular{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-16-size);font-weight:var(--bearingpoint-text-body-weight);line-height:var(--bearingpoint-text-16-line);letter-spacing:normal;font-style:normal}.bp-typo-16-bold{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-16-size);font-weight:var(--bearingpoint-text-16-bold-weight);line-height:var(--bearingpoint-text-16-line);letter-spacing:normal;font-style:normal}.bp-typo-14-bold{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-14-bold-size);font-weight:var(--bearingpoint-text-14-bold-weight);line-height:var(--bearingpoint-text-14-bold-line);letter-spacing:normal;font-style:normal}.bp-typo-caption{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-caption-size);font-weight:var(--bearingpoint-text-caption-weight);line-height:var(--bearingpoint-text-caption-line);letter-spacing:normal;font-style:normal}.bp-typo-label{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-label-size);font-weight:var(--bearingpoint-text-label-weight);line-height:var(--bearingpoint-text-label-line);letter-spacing:normal;font-style:normal}.bp-typo-tag{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-tag-size);font-weight:var(--bearingpoint-text-tag-weight);line-height:var(--bearingpoint-text-tag-line);letter-spacing:normal;font-style:normal}button,.bp-typo-button{font-family:var(--bearingpoint-font-oscd);font-size:var(--bearingpoint-text-button-size);font-weight:var(--bearingpoint-text-button-weight);line-height:var(--bearingpoint-text-button-line);letter-spacing:normal;font-style:normal}.bp-font-oscd{font-family:var(--bearingpoint-font-oscd)}.badge{padding:2px 8px;border-radius:12px;border:1px solid currentColor;--badge-installed: #02a75d;--badge-builtin: #5b21b6;--badge-available: #1d4ed8;--badge-active: #0d3d4a;--badge-inactive: #004552;--badge-incompatible: #b45309;--badge-kind: #6b9197;color:color-mix(in oklab,var(--badge-color) 14%,#fff);border-color:color-mix(in oklab,var(--oscd-base03),var(--badge-color) 50%);background:var(--badge-color)}.badge-icon{font-size:var(--bearingpoint-text-label-size);padding:0 2px 0 0;transform:translateY(2px)}.badge.badge-installed{--badge-color: var(--badge-installed)}.badge.badge-builtin{--badge-color: var(--badge-builtin)}.badge.badge-available{--badge-color: var(--badge-available)}.badge.badge-active{--badge-color: var(--badge-active)}.badge.badge-inactive{--badge-color: var(--badge-inactive)}.badge.badge-incompatible{--badge-color: var(--badge-incompatible)}.badge.badge-kind{--badge-color: var(--badge-kind);color:color-mix(in oklab,var(--badge-color),var(--oscd-base03));border-color:color-mix(in oklab,var(--badge-color) 50%,var(--oscd-base3));background:color-mix(in oklab,var(--badge-color) 10%,var(--oscd-base3));padding:2px 6px 2px 4px;border-radius:2px}.action-btn.install{background:var(--bearingpoint-color-action-primary-bg);color:var(--bearingpoint-color-action-primary-text)}.action-btn.install:hover:not(:disabled){background:var(--bearingpoint-color-action-primary-bg-hover)}.action-btn.enable{background:var(--bearingpoint-color-action-secondary-bg);color:var(--bearingpoint-color-action-secondary-text)}.action-btn.enable:hover:not(:disabled){background:var(--bearingpoint-color-action-secondary-bg-hover)}.action-btn.disable{background:var(--bearingpoint-color-action-neutral-bg);color:var(--bearingpoint-color-action-neutral-text)}.action-btn.disable:hover:not(:disabled){background:var(--bearingpoint-color-action-neutral-bg-hover)}.action-btn:disabled{opacity:.5;cursor:not-allowed}.action-btn.remove{background:var(--bearingpoint-color-action-danger-bg);color:var(--bearingpoint-color-action-danger-text)}.action-btn.remove:hover{background:var(--bearingpoint-color-action-danger-bg-hover)}.plugins-hub.svelte-1u53k0h{display:flex;flex-direction:column;width:100%;height:100%;min-height:400px;background:var(--bearingpoint-color-bg-page);color:var(--bearingpoint-color-text-primary);overflow:hidden}.hub-toolbar.svelte-1u53k0h{display:flex;align-items:center;gap:12px;padding:16px 24px;background:var(--bearingpoint-color-bg-page);border-bottom:1px solid var(--bearingpoint-color-border);flex-wrap:wrap}.hub-toolbar.svelte-1u53k0h .mdc-select__anchor,.hub-toolbar.svelte-1u53k0h .mdc-text-field{height:42px!important}.load-errors.svelte-1u53k0h{padding:8px 24px;background:var(--bearingpoint-color-warning-bg);border-bottom:1px solid var(--bearingpoint-color-border)}.error-message.svelte-1u53k0h{margin:4px 0;color:var(--bearingpoint-color-warning-text)}.hub-body.svelte-1u53k0h{display:flex;flex:1;overflow:hidden;background:var(--bearingpoint-color-bg-page);border-bottom:1px solid var(--bearingpoint-color-border)}.hub-body.with-details.svelte-1u53k0h .providers-list:where(.svelte-1u53k0h){flex:1}.providers-list.svelte-1u53k0h{flex:1;overflow-y:auto;padding:24px;display:flex;flex-direction:column;gap:24px}.loading.svelte-1u53k0h,.empty-state.svelte-1u53k0h{text-align:center;color:var(--bearingpoint-color-text-secondary);padding:40px}:host{min-height:0;height:100%}\n";
function Yf() {
  const n = document.createElement("style");
  return n.id = `${Wf}-v${Kf}-style`, n.textContent = qf, n;
}
export {
  Jf as default
};
