var oo = Object.defineProperty;
var as = (n) => {
  throw TypeError(n);
};
var uo = (n, e, t) => e in n ? oo(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var dn = (n, e, t) => uo(n, typeof e != "symbol" ? e + "" : e, t), ra = (n, e, t) => e.has(n) || as("Cannot " + t);
var b = (n, e, t) => (ra(n, e, "read from private field"), t ? t.call(n) : e.get(n)), me = (n, e, t) => e.has(n) ? as("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Se = (n, e, t, i) => (ra(n, e, "write to private field"), i ? i.call(n, t) : e.set(n, t), t), Ge = (n, e, t) => (ra(n, e, "access private method"), t);
const vt = Symbol(), Bs = "http://www.w3.org/1999/xhtml", co = "http://www.w3.org/2000/svg", fo = "@attach", ho = !1;
var Ua = Array.isArray, vo = Array.prototype.indexOf, Xi = Array.prototype.includes, Qr = Array.from, Vs = Object.defineProperty, ni = Object.getOwnPropertyDescriptor, js = Object.getOwnPropertyDescriptors, po = Object.prototype, go = Array.prototype, Ha = Object.getPrototypeOf, ss = Object.isExtensible;
function sr(n) {
  return typeof n == "function";
}
const be = () => {
};
function mo(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function Gs() {
  var n, e, t = new Promise((i, r) => {
    n = i, e = r;
  });
  return { promise: t, resolve: n, reject: e };
}
const wt = 2, Ki = 4, Yr = 8, Na = 1 << 24, Sn = 16, pn = 32, ri = 64, pa = 128, an = 512, gt = 1024, At = 2048, Ln = 4096, Mt = 8192, Qt = 16384, Di = 32768, ga = 1 << 25, zn = 65536, ma = 1 << 17, Io = 1 << 18, er = 1 << 19, _o = 1 << 20, An = 1 << 25, Ti = 65536, Ia = 1 << 21, pr = 1 << 22, ii = 1 << 23, Cn = Symbol("$state"), zs = Symbol("legacy props"), bo = Symbol(""), kn = new class extends Error {
  constructor() {
    super(...arguments);
    dn(this, "name", "StaleReactionError");
    dn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var Us;
const qs = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((Us = globalThis.document) != null && Us.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Ba(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function yo() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Eo(n, e, t) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ao(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function So() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Co(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function xo() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Lo(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function To() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function wo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Oo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Mo() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Do() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ro() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Fo() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ws(n) {
  return n === this.v;
}
function Va(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function Xs(n) {
  return !Va(n, this.v);
}
let Po = !1, ut = null;
function Qi(n) {
  ut = n;
}
function Te(n) {
  return (
    /** @type {T} */
    Qs().get(n)
  );
}
function pe(n, e) {
  return Qs().set(n, e), e;
}
function qe(n, e = !1, t) {
  ut = {
    p: ut,
    i: !1,
    c: null,
    e: null,
    s: n,
    x: null,
    r: (
      /** @type {Effect} */
      we
    ),
    l: null
  };
}
function We(n) {
  var e = (
    /** @type {ComponentContext} */
    ut
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var i of t)
      _l(i);
  }
  return n !== void 0 && (e.x = n), e.i = !0, ut = e.p, n ?? /** @type {T} */
  {};
}
function Ks() {
  return !0;
}
function Qs(n) {
  return ut === null && Ba(), ut.c ?? (ut.c = new Map(ko(ut) || void 0));
}
function ko(n) {
  let e = n.p;
  for (; e !== null; ) {
    const t = e.c;
    if (t !== null)
      return t;
    e = e.p;
  }
  return null;
}
let gi = [];
function Ys() {
  var n = gi;
  gi = [], mo(n);
}
function Gn(n) {
  if (gi.length === 0 && !hr) {
    var e = gi;
    queueMicrotask(() => {
      e === gi && Ys();
    });
  }
  gi.push(n);
}
function Uo() {
  for (; gi.length > 0; )
    Ys();
}
function Zs(n) {
  var e = we;
  if (e === null)
    return Le.f |= ii, n;
  if (!(e.f & Di) && !(e.f & Ki))
    throw n;
  ti(n, e);
}
function ti(n, e) {
  for (; e !== null; ) {
    if (e.f & pa) {
      if (!(e.f & Di))
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
const Ho = -7169;
function at(n, e) {
  n.f = n.f & Ho | e;
}
function ja(n) {
  n.f & an || n.deps === null ? at(n, gt) : at(n, Ln);
}
function Js(n) {
  if (n !== null)
    for (const e of n)
      !(e.f & wt) || !(e.f & Ti) || (e.f ^= Ti, Js(
        /** @type {Derived} */
        e.deps
      ));
}
function $s(n, e, t) {
  n.f & At ? e.add(n) : n.f & Ln && t.add(n), Js(n.deps), at(n, gt);
}
function el(n, e, t) {
  if (n == null)
    return e(void 0), be;
  const i = ai(
    () => n.subscribe(
      e,
      // @ts-expect-error
      t
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const Pi = [];
function _a(n, e = be) {
  let t = null;
  const i = /* @__PURE__ */ new Set();
  function r(u) {
    if (Va(n, u) && (n = u, t)) {
      const o = !Pi.length;
      for (const d of i)
        d[1](), Pi.push(d, n);
      if (o) {
        for (let d = 0; d < Pi.length; d += 2)
          Pi[d][0](Pi[d + 1]);
        Pi.length = 0;
      }
    }
  }
  function a(u) {
    r(u(
      /** @type {T} */
      n
    ));
  }
  function s(u, o = be) {
    const d = [u, o];
    return i.add(d), i.size === 1 && (t = e(r, a) || be), u(
      /** @type {T} */
      n
    ), () => {
      i.delete(d), i.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: a, subscribe: s };
}
function No(n) {
  let e;
  return el(n, (t) => e = t)(), e;
}
let ba = !1, wr = !1, ya = Symbol();
function Ga(n, e, t) {
  const i = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ cl(void 0),
    unsubscribe: be
  });
  if (i.store !== n && !(ya in t))
    if (i.unsubscribe(), i.store = n ?? null, n == null)
      i.source.v = void 0, i.unsubscribe = be;
    else {
      var r = !0;
      i.unsubscribe = el(n, (a) => {
        r ? i.source.v = a : X(i.source, a);
      }), r = !1;
    }
  return n && ya in t ? No(n) : l(i.source);
}
function jr(n, e) {
  return Bo(n, e), e;
}
function Zr() {
  const n = {};
  function e() {
    Sr(() => {
      for (var t in n)
        n[t].unsubscribe();
      Vs(n, ya, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function Bo(n, e) {
  ba = !0;
  try {
    n.set(e);
  } finally {
    ba = !1;
  }
}
function Vo(n) {
  var e = wr;
  try {
    return wr = !1, [n(), wr];
  } finally {
    wr = e;
  }
}
const ci = /* @__PURE__ */ new Set();
let ie = null, yt = null, Ea = null, hr = !1, aa = !1, Hi = null, Pr = null;
var ls = 0;
let jo = 1;
var Vi, ji, _i, Un, _n, mr, Wt, Ir, $n, Hn, bn, Gi, zi, bi, dt, kr, tl, Ur, Aa, Hr, Go;
const Wr = class Wr {
  constructor() {
    me(this, dt);
    dn(this, "id", jo++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    dn(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    dn(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    me(this, Vi, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    me(this, ji, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    me(this, _i, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    me(this, Un, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    me(this, _n, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    me(this, mr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    me(this, Wt, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    me(this, Ir, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    me(this, $n, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    me(this, Hn, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    me(this, bn, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    me(this, Gi, /* @__PURE__ */ new Set());
    dn(this, "is_fork", !1);
    me(this, zi, !1);
    /** @type {Set<Batch>} */
    me(this, bi, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    b(this, bn).has(e) || b(this, bn).set(e, { d: [], m: [] }), b(this, Gi).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, t = (i) => this.schedule(i)) {
    var i = b(this, bn).get(e);
    if (i) {
      b(this, bn).delete(e);
      for (var r of i.d)
        at(r, At), t(r);
      for (r of i.m)
        at(r, Ln), t(r);
    }
    b(this, Gi).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, t, i = !1) {
    e.v !== vt && !this.previous.has(e) && this.previous.set(e, e.v), e.f & ii || (this.current.set(e, [t, i]), yt == null || yt.set(e, t)), this.is_fork || (e.v = t);
  }
  activate() {
    ie = this;
  }
  deactivate() {
    ie = null, yt = null;
  }
  flush() {
    try {
      aa = !0, ie = this, Ge(this, dt, Ur).call(this);
    } finally {
      ls = 0, Ea = null, Hi = null, Pr = null, aa = !1, ie = null, yt = null, Si.clear();
    }
  }
  discard() {
    for (const e of b(this, ji)) e(this);
    b(this, ji).clear(), b(this, _i).clear(), ci.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    b(this, Ir).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, t) {
    let i = b(this, Un).get(t) ?? 0;
    if (b(this, Un).set(t, i + 1), e) {
      let r = b(this, _n).get(t) ?? 0;
      b(this, _n).set(t, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(e, t, i) {
    let r = b(this, Un).get(t) ?? 0;
    if (r === 1 ? b(this, Un).delete(t) : b(this, Un).set(t, r - 1), e) {
      let a = b(this, _n).get(t) ?? 0;
      a === 1 ? b(this, _n).delete(t) : b(this, _n).set(t, a - 1);
    }
    b(this, zi) || i || (Se(this, zi, !0), Gn(() => {
      Se(this, zi, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(e, t) {
    for (const i of e)
      b(this, $n).add(i);
    for (const i of t)
      b(this, Hn).add(i);
    e.clear(), t.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    b(this, Vi).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    b(this, ji).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(e) {
    b(this, _i).add(e);
  }
  run_fork_commit_callbacks() {
    for (const e of b(this, _i)) e(this);
    b(this, _i).clear();
  }
  settled() {
    return (b(this, mr) ?? Se(this, mr, Gs())).promise;
  }
  static ensure() {
    if (ie === null) {
      const e = ie = new Wr();
      aa || (ci.add(ie), hr || Gn(() => {
        ie === e && e.flush();
      }));
    }
    return ie;
  }
  apply() {
    {
      yt = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    var r;
    if (Ea = e, (r = e.b) != null && r.is_pending && e.f & (Ki | Yr | Na) && !(e.f & Di)) {
      e.b.defer_effect(e);
      return;
    }
    for (var t = e; t.parent !== null; ) {
      t = t.parent;
      var i = t.f;
      if (Hi !== null && t === we && (Le === null || !(Le.f & wt)) && !ba)
        return;
      if (i & (ri | pn)) {
        if (!(i & gt))
          return;
        t.f ^= gt;
      }
    }
    b(this, Wt).push(t);
  }
};
Vi = new WeakMap(), ji = new WeakMap(), _i = new WeakMap(), Un = new WeakMap(), _n = new WeakMap(), mr = new WeakMap(), Wt = new WeakMap(), Ir = new WeakMap(), $n = new WeakMap(), Hn = new WeakMap(), bn = new WeakMap(), Gi = new WeakMap(), zi = new WeakMap(), bi = new WeakMap(), dt = new WeakSet(), kr = function() {
  return this.is_fork || b(this, _n).size > 0;
}, tl = function() {
  for (const i of b(this, bi))
    for (const r of b(i, _n).keys()) {
      for (var e = !1, t = r; t.parent !== null; ) {
        if (b(this, bn).has(t)) {
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
  if (ls++ > 1e3 && (ci.delete(this), qo()), !Ge(this, dt, kr).call(this)) {
    for (const d of b(this, $n))
      b(this, Hn).delete(d), at(d, At), this.schedule(d);
    for (const d of b(this, Hn))
      at(d, Ln), this.schedule(d);
  }
  const e = b(this, Wt);
  Se(this, Wt, []), this.apply();
  var t = Hi = [], i = [], r = Pr = [];
  for (const d of e)
    try {
      Ge(this, dt, Aa).call(this, d, t, i);
    } catch (c) {
      throw rl(d), c;
    }
  if (ie = null, r.length > 0) {
    var a = Wr.ensure();
    for (const d of r)
      a.schedule(d);
  }
  if (Hi = null, Pr = null, Ge(this, dt, kr).call(this) || Ge(this, dt, tl).call(this)) {
    Ge(this, dt, Hr).call(this, i), Ge(this, dt, Hr).call(this, t);
    for (const [d, c] of b(this, bn))
      il(d, c);
  } else {
    b(this, Un).size === 0 && ci.delete(this), b(this, $n).clear(), b(this, Hn).clear();
    for (const d of b(this, Vi)) d(this);
    b(this, Vi).clear(), os(i), os(t), (u = b(this, mr)) == null || u.resolve();
  }
  var s = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    ie
  );
  if (b(this, Wt).length > 0) {
    const d = s ?? (s = this);
    b(d, Wt).push(...b(this, Wt).filter((c) => !b(d, Wt).includes(c)));
  }
  s !== null && (ci.add(s), Ge(o = s, dt, Ur).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Aa = function(e, t, i) {
  e.f ^= gt;
  for (var r = e.first; r !== null; ) {
    var a = r.f, s = (a & (pn | ri)) !== 0, u = s && (a & gt) !== 0, o = u || (a & Mt) !== 0 || b(this, bn).has(r);
    if (!o && r.fn !== null) {
      s ? r.f ^= gt : a & Ki ? t.push(r) : xr(r) && (a & Sn && b(this, Hn).add(r), Ji(r));
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
Hr = function(e) {
  for (var t = 0; t < e.length; t += 1)
    $s(e[t], b(this, $n), b(this, Hn));
}, Go = function() {
  var c, v, f;
  for (const p of ci) {
    var e = p.id < this.id, t = [];
    for (const [h, [g, m]] of this.current) {
      if (p.current.has(h)) {
        var i = (
          /** @type {[any, boolean]} */
          p.current.get(h)[0]
        );
        if (e && g !== i)
          p.current.set(h, [g, m]);
        else
          continue;
      }
      t.push(h);
    }
    var r = [...p.current.keys()].filter((h) => !this.current.has(h));
    if (r.length === 0)
      e && p.discard();
    else if (t.length > 0) {
      if (e)
        for (const h of b(this, Gi))
          p.unskip_effect(h, (g) => {
            var m;
            g.f & (Sn | pr) ? p.schedule(g) : Ge(m = p, dt, Hr).call(m, [g]);
          });
      p.activate();
      var a = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
      for (var u of t)
        nl(u, r, a, s);
      s = /* @__PURE__ */ new Map();
      var o = [...p.current.keys()].filter(
        (h) => this.current.has(h) ? (
          /** @type {[any, boolean]} */
          this.current.get(h)[0] !== h
        ) : !0
      );
      for (const h of b(this, Ir))
        !(h.f & (Qt | Mt | ma)) && za(h, o, s) && (h.f & (pr | Sn) ? (at(h, At), p.schedule(h)) : b(p, $n).add(h));
      if (b(p, Wt).length > 0) {
        p.apply();
        for (var d of b(p, Wt))
          Ge(c = p, dt, Aa).call(c, d, [], []);
        Se(p, Wt, []);
      }
      p.deactivate();
    }
  }
  for (const p of ci)
    b(p, bi).has(this) && (b(p, bi).delete(this), b(p, bi).size === 0 && !Ge(v = p, dt, kr).call(v) && (p.activate(), Ge(f = p, dt, Ur).call(f)));
};
let wi = Wr;
function zo(n) {
  var e = hr;
  hr = !0;
  try {
    for (var t; ; ) {
      if (Uo(), ie === null)
        return (
          /** @type {T} */
          t
        );
      ie.flush();
    }
  } finally {
    hr = e;
  }
}
function qo() {
  try {
    xo();
  } catch (n) {
    ti(n, Ea);
  }
}
let cn = null;
function os(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var i = n[t++];
      if (!(i.f & (Qt | Mt)) && xr(i) && (cn = /* @__PURE__ */ new Set(), Ji(i), i.deps === null && i.first === null && i.nodes === null && i.teardown === null && i.ac === null && El(i), (cn == null ? void 0 : cn.size) > 0)) {
        Si.clear();
        for (const r of cn) {
          if (r.f & (Qt | Mt)) continue;
          const a = [r];
          let s = r.parent;
          for (; s !== null; )
            cn.has(s) && (cn.delete(s), a.push(s)), s = s.parent;
          for (let u = a.length - 1; u >= 0; u--) {
            const o = a[u];
            o.f & (Qt | Mt) || Ji(o);
          }
        }
        cn.clear();
      }
    }
    cn = null;
  }
}
function nl(n, e, t, i) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const r of n.reactions) {
      const a = r.f;
      a & wt ? nl(
        /** @type {Derived} */
        r,
        e,
        t,
        i
      ) : a & (pr | Sn) && !(a & At) && za(r, e, i) && (at(r, At), qa(
        /** @type {Effect} */
        r
      ));
    }
}
function za(n, e, t) {
  const i = t.get(n);
  if (i !== void 0) return i;
  if (n.deps !== null)
    for (const r of n.deps) {
      if (Xi.call(e, r))
        return !0;
      if (r.f & wt && za(
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
function qa(n) {
  ie.schedule(n);
}
function il(n, e) {
  if (!(n.f & pn && n.f & gt)) {
    n.f & At ? e.d.push(n) : n.f & Ln && e.m.push(n), at(n, gt);
    for (var t = n.first; t !== null; )
      il(t, e), t = t.next;
  }
}
function rl(n) {
  at(n, gt);
  for (var e = n.first; e !== null; )
    rl(e), e = e.next;
}
function Wo(n) {
  let e = 0, t = Oi(0), i;
  return () => {
    Xa() && (l(t), ea(() => (e === 0 && (i = ai(() => n(() => vr(t)))), e += 1, () => {
      Gn(() => {
        e -= 1, e === 0 && (i == null || i(), i = void 0, vr(t));
      });
    })));
  };
}
var Xo = zn | er;
function Ko(n, e, t, i) {
  new Qo(n, e, t, i);
}
var tn, ka, nn, yi, Bt, rn, Ot, Xt, Nn, Ei, ei, qi, _r, br, Bn, Xr, tt, Yo, Zo, Jo, Sa, Nr, Br, Ca, xa;
class Qo {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, t, i, r) {
    me(this, tt);
    /** @type {Boundary | null} */
    dn(this, "parent");
    dn(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    dn(this, "transform_error");
    /** @type {TemplateNode} */
    me(this, tn);
    /** @type {TemplateNode | null} */
    me(this, ka, null);
    /** @type {BoundaryProps} */
    me(this, nn);
    /** @type {((anchor: Node) => void)} */
    me(this, yi);
    /** @type {Effect} */
    me(this, Bt);
    /** @type {Effect | null} */
    me(this, rn, null);
    /** @type {Effect | null} */
    me(this, Ot, null);
    /** @type {Effect | null} */
    me(this, Xt, null);
    /** @type {DocumentFragment | null} */
    me(this, Nn, null);
    me(this, Ei, 0);
    me(this, ei, 0);
    me(this, qi, !1);
    /** @type {Set<Effect>} */
    me(this, _r, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    me(this, br, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    me(this, Bn, null);
    me(this, Xr, Wo(() => (Se(this, Bn, Oi(b(this, Ei))), () => {
      Se(this, Bn, null);
    })));
    var a;
    Se(this, tn, e), Se(this, nn, t), Se(this, yi, (s) => {
      var u = (
        /** @type {Effect} */
        we
      );
      u.b = this, u.f |= pa, i(s);
    }), this.parent = /** @type {Effect} */
    we.b, this.transform_error = r ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((s) => s), Se(this, Bt, tr(() => {
      Ge(this, tt, Sa).call(this);
    }, Xo));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    $s(e, b(this, _r), b(this, br));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!b(this, nn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, t) {
    Ge(this, tt, Ca).call(this, e, t), Se(this, Ei, b(this, Ei) + e), !(!b(this, Bn) || b(this, qi)) && (Se(this, qi, !0), Gn(() => {
      Se(this, qi, !1), b(this, Bn) && Yi(b(this, Bn), b(this, Ei));
    }));
  }
  get_effect_pending() {
    return b(this, Xr).call(this), l(
      /** @type {Source<number>} */
      b(this, Bn)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!b(this, nn).onerror && !b(this, nn).failed)
      throw e;
    ie != null && ie.is_fork ? (b(this, rn) && ie.skip_effect(b(this, rn)), b(this, Ot) && ie.skip_effect(b(this, Ot)), b(this, Xt) && ie.skip_effect(b(this, Xt)), ie.on_fork_commit(() => {
      Ge(this, tt, xa).call(this, e);
    })) : Ge(this, tt, xa).call(this, e);
  }
}
tn = new WeakMap(), ka = new WeakMap(), nn = new WeakMap(), yi = new WeakMap(), Bt = new WeakMap(), rn = new WeakMap(), Ot = new WeakMap(), Xt = new WeakMap(), Nn = new WeakMap(), Ei = new WeakMap(), ei = new WeakMap(), qi = new WeakMap(), _r = new WeakMap(), br = new WeakMap(), Bn = new WeakMap(), Xr = new WeakMap(), tt = new WeakSet(), Yo = function() {
  try {
    Se(this, rn, jt(() => b(this, yi).call(this, b(this, tn))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Zo = function(e) {
  const t = b(this, nn).failed;
  t && Se(this, Xt, jt(() => {
    t(
      b(this, tn),
      () => e,
      () => () => {
      }
    );
  }));
}, Jo = function() {
  const e = b(this, nn).pending;
  e && (this.is_pending = !0, Se(this, Ot, jt(() => e(b(this, tn)))), Gn(() => {
    var t = Se(this, Nn, document.createDocumentFragment()), i = xn();
    t.append(i), Se(this, rn, Ge(this, tt, Br).call(this, () => jt(() => b(this, yi).call(this, i)))), b(this, ei) === 0 && (b(this, tn).before(t), Se(this, Nn, null), Ci(
      /** @type {Effect} */
      b(this, Ot),
      () => {
        Se(this, Ot, null);
      }
    ), Ge(this, tt, Nr).call(
      this,
      /** @type {Batch} */
      ie
    ));
  }));
}, Sa = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), Se(this, ei, 0), Se(this, Ei, 0), Se(this, rn, jt(() => {
      b(this, yi).call(this, b(this, tn));
    })), b(this, ei) > 0) {
      var e = Se(this, Nn, document.createDocumentFragment());
      Ya(b(this, rn), e);
      const t = (
        /** @type {(anchor: Node) => void} */
        b(this, nn).pending
      );
      Se(this, Ot, jt(() => t(b(this, tn))));
    } else
      Ge(this, tt, Nr).call(
        this,
        /** @type {Batch} */
        ie
      );
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {Batch} batch
 */
Nr = function(e) {
  this.is_pending = !1, e.transfer_effects(b(this, _r), b(this, br));
}, /**
 * @template T
 * @param {() => T} fn
 */
Br = function(e) {
  var t = we, i = Le, r = ut;
  Tn(b(this, Bt)), ln(b(this, Bt)), Qi(b(this, Bt).ctx);
  try {
    return wi.ensure(), e();
  } catch (a) {
    return Zs(a), null;
  } finally {
    Tn(t), ln(i), Qi(r);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Ca = function(e, t) {
  var i;
  if (!this.has_pending_snippet()) {
    this.parent && Ge(i = this.parent, tt, Ca).call(i, e, t);
    return;
  }
  Se(this, ei, b(this, ei) + e), b(this, ei) === 0 && (Ge(this, tt, Nr).call(this, t), b(this, Ot) && Ci(b(this, Ot), () => {
    Se(this, Ot, null);
  }), b(this, Nn) && (b(this, tn).before(b(this, Nn)), Se(this, Nn, null)));
}, /**
 * @param {unknown} error
 */
xa = function(e) {
  b(this, rn) && (St(b(this, rn)), Se(this, rn, null)), b(this, Ot) && (St(b(this, Ot)), Se(this, Ot, null)), b(this, Xt) && (St(b(this, Xt)), Se(this, Xt, null));
  var t = b(this, nn).onerror;
  let i = b(this, nn).failed;
  var r = !1, a = !1;
  const s = () => {
    if (r) {
      Fo();
      return;
    }
    r = !0, a && Mo(), b(this, Xt) !== null && Ci(b(this, Xt), () => {
      Se(this, Xt, null);
    }), Ge(this, tt, Br).call(this, () => {
      Ge(this, tt, Sa).call(this);
    });
  }, u = (o) => {
    try {
      a = !0, t == null || t(o, s), a = !1;
    } catch (d) {
      ti(d, b(this, Bt) && b(this, Bt).parent);
    }
    i && Se(this, Xt, Ge(this, tt, Br).call(this, () => {
      try {
        return jt(() => {
          var d = (
            /** @type {Effect} */
            we
          );
          d.b = this, d.f |= pa, i(
            b(this, tn),
            () => o,
            () => s
          );
        });
      } catch (d) {
        return ti(
          d,
          /** @type {Effect} */
          b(this, Bt).parent
        ), null;
      }
    }));
  };
  Gn(() => {
    var o;
    try {
      o = this.transform_error(e);
    } catch (d) {
      ti(d, b(this, Bt) && b(this, Bt).parent);
      return;
    }
    o !== null && typeof o == "object" && typeof /** @type {any} */
    o.then == "function" ? o.then(
      u,
      /** @param {unknown} e */
      (d) => ti(d, b(this, Bt) && b(this, Bt).parent)
    ) : u(o);
  });
};
function al(n, e, t, i) {
  const r = Jr;
  var a = n.filter((f) => !f.settled);
  if (t.length === 0 && a.length === 0) {
    i(e.map(r));
    return;
  }
  var s = (
    /** @type {Effect} */
    we
  ), u = $o(), o = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((f) => f.promise)) : null;
  function d(f) {
    u();
    try {
      i(f);
    } catch (p) {
      s.f & Qt || ti(p, s);
    }
    Gr();
  }
  if (t.length === 0) {
    o.then(() => d(e.map(r)));
    return;
  }
  var c = sl();
  function v() {
    Promise.all(t.map((f) => /* @__PURE__ */ eu(f))).then((f) => d([...e.map(r), ...f])).catch((f) => ti(f, s)).finally(() => c());
  }
  o ? o.then(() => {
    u(), v(), Gr();
  }) : v();
}
function $o() {
  var n = (
    /** @type {Effect} */
    we
  ), e = Le, t = ut, i = (
    /** @type {Batch} */
    ie
  );
  return function(a = !0) {
    Tn(n), ln(e), Qi(t), a && !(n.f & Qt) && (i == null || i.activate(), i == null || i.apply());
  };
}
function Gr(n = !0) {
  Tn(null), ln(null), Qi(null), n && (ie == null || ie.deactivate());
}
function sl() {
  var n = (
    /** @type {Effect} */
    we
  ), e = (
    /** @type {Boundary} */
    n.b
  ), t = (
    /** @type {Batch} */
    ie
  ), i = e.is_rendered();
  return e.update_pending_count(1, t), t.increment(i, n), (r = !1) => {
    e.update_pending_count(-1, t), t.decrement(i, n, r);
  };
}
// @__NO_SIDE_EFFECTS__
function Jr(n) {
  var e = wt | At;
  return we !== null && (we.f |= er), {
    ctx: ut,
    deps: null,
    effects: null,
    equals: Ws,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      vt
    ),
    wv: 0,
    parent: we,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function eu(n, e, t) {
  let i = (
    /** @type {Effect | null} */
    we
  );
  i === null && yo();
  var r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Oi(
    /** @type {V} */
    vt
  ), s = !Le, u = /* @__PURE__ */ new Map();
  return hu(() => {
    var p;
    var o = (
      /** @type {Effect} */
      we
    ), d = Gs();
    r = d.promise;
    try {
      Promise.resolve(n()).then(d.resolve, d.reject).finally(Gr);
    } catch (h) {
      d.reject(h), Gr();
    }
    var c = (
      /** @type {Batch} */
      ie
    );
    if (s) {
      if (o.f & Di)
        var v = sl();
      if (
        /** @type {Boundary} */
        i.b.is_rendered()
      )
        (p = u.get(c)) == null || p.reject(kn), u.delete(c);
      else {
        for (const h of u.values())
          h.reject(kn);
        u.clear();
      }
      u.set(c, d);
    }
    const f = (h, g = void 0) => {
      if (v) {
        var m = g === kn;
        v(m);
      }
      if (!(g === kn || o.f & Qt)) {
        if (c.activate(), g)
          a.f |= ii, Yi(a, g);
        else {
          a.f & ii && (a.f ^= ii), Yi(a, h);
          for (const [E, w] of u) {
            if (u.delete(E), E === c) break;
            w.reject(kn);
          }
        }
        c.deactivate();
      }
    };
    d.promise.then(f, (h) => f(null, h || "unknown"));
  }), Sr(() => {
    for (const o of u.values())
      o.reject(kn);
  }), new Promise((o) => {
    function d(c) {
      function v() {
        c === r ? o(a) : d(r);
      }
      c.then(v, v);
    }
    d(r);
  });
}
// @__NO_SIDE_EFFECTS__
function ue(n) {
  const e = /* @__PURE__ */ Jr(n);
  return Cl(e), e;
}
// @__NO_SIDE_EFFECTS__
function ll(n) {
  const e = /* @__PURE__ */ Jr(n);
  return e.equals = Xs, e;
}
function tu(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      St(
        /** @type {Effect} */
        e[t]
      );
  }
}
function Wa(n) {
  var e, t = we, i = n.parent;
  if (!qn && i !== null && i.f & (Qt | Mt))
    return Do(), n.v;
  Tn(i);
  try {
    n.f &= ~Ti, tu(n), e = wl(n);
  } finally {
    Tn(t);
  }
  return e;
}
function ol(n) {
  var e = Wa(n);
  if (!n.equals(e) && (n.wv = Ll(), (!(ie != null && ie.is_fork) || n.deps === null) && (ie !== null ? ie.capture(n, e, !0) : n.v = e, n.deps === null))) {
    at(n, gt);
    return;
  }
  qn || (yt !== null ? (Xa() || ie != null && ie.is_fork) && yt.set(n, e) : ja(n));
}
function nu(n) {
  var e, t;
  if (n.effects !== null)
    for (const i of n.effects)
      (i.teardown || i.ac) && ((e = i.teardown) == null || e.call(i), (t = i.ac) == null || t.abort(kn), i.teardown = be, i.ac = null, gr(i, 0), Ka(i));
}
function ul(n) {
  if (n.effects !== null)
    for (const e of n.effects)
      e.teardown && Ji(e);
}
let La = /* @__PURE__ */ new Set();
const Si = /* @__PURE__ */ new Map();
let dl = !1;
function Oi(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: Ws,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function de(n, e) {
  const t = Oi(n);
  return Cl(t), t;
}
// @__NO_SIDE_EFFECTS__
function cl(n, e = !1, t = !0) {
  const i = Oi(n);
  return e || (i.equals = Xs), i;
}
function X(n, e, t = !1) {
  Le !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!hn || Le.f & ma) && Ks() && Le.f & (wt | Sn | pr | ma) && (sn === null || !Xi.call(sn, n)) && Oo();
  let i = t ? Re(e) : e;
  return Yi(n, i, Pr);
}
function Yi(n, e, t = null) {
  if (!n.equals(e)) {
    Si.set(n, qn ? e : n.v);
    var i = wi.ensure();
    if (i.capture(n, e), n.f & wt) {
      const r = (
        /** @type {Derived} */
        n
      );
      n.f & At && Wa(r), yt === null && ja(r);
    }
    n.wv = Ll(), fl(n, At, t), we !== null && we.f & gt && !(we.f & (pn | ri)) && (en === null ? gu([n]) : en.push(n)), !i.is_fork && La.size > 0 && !dl && iu();
  }
  return e;
}
function iu() {
  dl = !1;
  for (const n of La)
    n.f & gt && at(n, Ln), xr(n) && Ji(n);
  La.clear();
}
function vr(n) {
  X(n, n.v + 1);
}
function fl(n, e, t) {
  var i = n.reactions;
  if (i !== null)
    for (var r = i.length, a = 0; a < r; a++) {
      var s = i[a], u = s.f, o = (u & At) === 0;
      if (o && at(s, e), u & wt) {
        var d = (
          /** @type {Derived} */
          s
        );
        yt == null || yt.delete(d), u & Ti || (u & an && (s.f |= Ti), fl(d, Ln, t));
      } else if (o) {
        var c = (
          /** @type {Effect} */
          s
        );
        u & Sn && cn !== null && cn.add(c), t !== null ? t.push(c) : qa(c);
      }
    }
}
function Re(n) {
  if (typeof n != "object" || n === null || Cn in n)
    return n;
  const e = Ha(n);
  if (e !== po && e !== go)
    return n;
  var t = /* @__PURE__ */ new Map(), i = Ua(n), r = /* @__PURE__ */ de(0), a = xi, s = (u) => {
    if (xi === a)
      return u();
    var o = Le, d = xi;
    ln(null), hs(a);
    var c = u();
    return ln(o), hs(d), c;
  };
  return i && t.set("length", /* @__PURE__ */ de(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(u, o, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && To();
        var c = t.get(o);
        return c === void 0 ? s(() => {
          var v = /* @__PURE__ */ de(d.value);
          return t.set(o, v), v;
        }) : X(c, d.value, !0), !0;
      },
      deleteProperty(u, o) {
        var d = t.get(o);
        if (d === void 0) {
          if (o in u) {
            const c = s(() => /* @__PURE__ */ de(vt));
            t.set(o, c), vr(r);
          }
        } else
          X(d, vt), vr(r);
        return !0;
      },
      get(u, o, d) {
        var p;
        if (o === Cn)
          return n;
        var c = t.get(o), v = o in u;
        if (c === void 0 && (!v || (p = ni(u, o)) != null && p.writable) && (c = s(() => {
          var h = Re(v ? u[o] : vt), g = /* @__PURE__ */ de(h);
          return g;
        }), t.set(o, c)), c !== void 0) {
          var f = l(c);
          return f === vt ? void 0 : f;
        }
        return Reflect.get(u, o, d);
      },
      getOwnPropertyDescriptor(u, o) {
        var d = Reflect.getOwnPropertyDescriptor(u, o);
        if (d && "value" in d) {
          var c = t.get(o);
          c && (d.value = l(c));
        } else if (d === void 0) {
          var v = t.get(o), f = v == null ? void 0 : v.v;
          if (v !== void 0 && f !== vt)
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
        if (o === Cn)
          return !0;
        var d = t.get(o), c = d !== void 0 && d.v !== vt || Reflect.has(u, o);
        if (d !== void 0 || we !== null && (!c || (f = ni(u, o)) != null && f.writable)) {
          d === void 0 && (d = s(() => {
            var p = c ? Re(u[o]) : vt, h = /* @__PURE__ */ de(p);
            return h;
          }), t.set(o, d));
          var v = l(d);
          if (v === vt)
            return !1;
        }
        return c;
      },
      set(u, o, d, c) {
        var S;
        var v = t.get(o), f = o in u;
        if (i && o === "length")
          for (var p = d; p < /** @type {Source<number>} */
          v.v; p += 1) {
            var h = t.get(p + "");
            h !== void 0 ? X(h, vt) : p in u && (h = s(() => /* @__PURE__ */ de(vt)), t.set(p + "", h));
          }
        if (v === void 0)
          (!f || (S = ni(u, o)) != null && S.writable) && (v = s(() => /* @__PURE__ */ de(void 0)), X(v, Re(d)), t.set(o, v));
        else {
          f = v.v !== vt;
          var g = s(() => Re(d));
          X(v, g);
        }
        var m = Reflect.getOwnPropertyDescriptor(u, o);
        if (m != null && m.set && m.set.call(c, d), !f) {
          if (i && typeof o == "string") {
            var E = (
              /** @type {Source<number>} */
              t.get("length")
            ), w = Number(o);
            Number.isInteger(w) && w >= E.v && X(E, w + 1);
          }
          vr(r);
        }
        return !0;
      },
      ownKeys(u) {
        l(r);
        var o = Reflect.ownKeys(u).filter((v) => {
          var f = t.get(v);
          return f === void 0 || f.v !== vt;
        });
        for (var [d, c] of t)
          c.v !== vt && !(d in u) && o.push(d);
        return o;
      },
      setPrototypeOf() {
        wo();
      }
    }
  );
}
function us(n) {
  try {
    if (n !== null && typeof n == "object" && Cn in n)
      return n[Cn];
  } catch {
  }
  return n;
}
function ru(n, e) {
  return Object.is(us(n), us(e));
}
var ds, hl, vl, pl, gl;
function au() {
  if (ds === void 0) {
    ds = window, hl = document, vl = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    pl = ni(e, "firstChild").get, gl = ni(e, "nextSibling").get, ss(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), ss(t) && (t.__t = void 0);
  }
}
function xn(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Zi(n) {
  return (
    /** @type {TemplateNode | null} */
    pl.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function Ar(n) {
  return (
    /** @type {TemplateNode | null} */
    gl.call(n)
  );
}
function Q(n, e) {
  return /* @__PURE__ */ Zi(n);
}
function ne(n, e = !1) {
  {
    var t = /* @__PURE__ */ Zi(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Ar(t) : t;
  }
}
function z(n, e = 1, t = !1) {
  let i = n;
  for (; e--; )
    i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ar(i);
  return i;
}
function su(n) {
  n.textContent = "";
}
function ml() {
  return !1;
}
function Il(n, e, t) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(e ?? Bs, n, void 0)
  );
}
function lu(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, Gn(() => {
      document.activeElement === t && n.focus();
    });
  }
}
let cs = !1;
function ou() {
  cs || (cs = !0, document.addEventListener(
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
  var e = Le, t = we;
  ln(null), Tn(null);
  try {
    return n();
  } finally {
    ln(e), Tn(t);
  }
}
function uu(n, e, t, i = t) {
  n.addEventListener(e, () => $r(t));
  const r = n.__on_r;
  r ? n.__on_r = () => {
    r(), i(!0);
  } : n.__on_r = () => i(!0), ou();
}
function du(n) {
  we === null && (Le === null && Co(), So()), qn && Ao();
}
function cu(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function wn(n, e) {
  var t = we;
  t !== null && t.f & Mt && (n |= Mt);
  var i = {
    ctx: ut,
    deps: null,
    nodes: null,
    f: n | At | an,
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
  ie == null || ie.register_created_effect(i);
  var r = i;
  if (n & Ki)
    Hi !== null ? Hi.push(i) : wi.ensure().schedule(i);
  else if (e !== null) {
    try {
      Ji(i);
    } catch (s) {
      throw St(i), s;
    }
    r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && // either `null`, or a singular child
    !(r.f & er) && (r = r.first, n & Sn && n & zn && r !== null && (r.f |= zn));
  }
  if (r !== null && (r.parent = t, t !== null && cu(r, t), Le !== null && Le.f & wt && !(n & ri))) {
    var a = (
      /** @type {Derived} */
      Le
    );
    (a.effects ?? (a.effects = [])).push(r);
  }
  return i;
}
function Xa() {
  return Le !== null && !hn;
}
function Sr(n) {
  const e = wn(Yr, null);
  return at(e, gt), e.teardown = n, e;
}
function Fe(n) {
  du();
  var e = (
    /** @type {Effect} */
    we.f
  ), t = !Le && (e & pn) !== 0 && (e & Di) === 0;
  if (t) {
    var i = (
      /** @type {ComponentContext} */
      ut
    );
    (i.e ?? (i.e = [])).push(n);
  } else
    return _l(n);
}
function _l(n) {
  return wn(Ki | _o, n);
}
function fu(n) {
  wi.ensure();
  const e = wn(ri | er, n);
  return (t = {}) => new Promise((i) => {
    t.outro ? Ci(e, () => {
      St(e), i(void 0);
    }) : (St(e), i(void 0));
  });
}
function Cr(n) {
  return wn(Ki, n);
}
function hu(n) {
  return wn(pr | er, n);
}
function ea(n, e = 0) {
  return wn(Yr | e, n);
}
function He(n, e = [], t = [], i = []) {
  al(i, e, t, (r) => {
    wn(Yr, () => n(...r.map(l)));
  });
}
function tr(n, e = 0) {
  var t = wn(Sn | e, n);
  return t;
}
function bl(n, e = 0) {
  var t = wn(Na | e, n);
  return t;
}
function jt(n) {
  return wn(pn | er, n);
}
function yl(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = qn, i = Le;
    fs(!0), ln(null);
    try {
      e.call(null);
    } finally {
      fs(t), ln(i);
    }
  }
}
function Ka(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const r = t.ac;
    r !== null && $r(() => {
      r.abort(kn);
    });
    var i = t.next;
    t.f & ri ? t.parent = null : St(t, e), t = i;
  }
}
function vu(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & pn || St(e), e = t;
  }
}
function St(n, e = !0) {
  var t = !1;
  (e || n.f & Io) && n.nodes !== null && n.nodes.end !== null && (pu(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), at(n, ga), Ka(n, e && !t), gr(n, 0);
  var i = n.nodes && n.nodes.t;
  if (i !== null)
    for (const a of i)
      a.stop();
  yl(n), n.f ^= ga, n.f |= Qt;
  var r = n.parent;
  r !== null && r.first !== null && El(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = n.b = null;
}
function pu(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : /* @__PURE__ */ Ar(n);
    n.remove(), n = t;
  }
}
function El(n) {
  var e = n.parent, t = n.prev, i = n.next;
  t !== null && (t.next = i), i !== null && (i.prev = t), e !== null && (e.first === n && (e.first = i), e.last === n && (e.last = t));
}
function Ci(n, e, t = !0) {
  var i = [];
  Al(n, i, !0);
  var r = () => {
    t && St(n), e && e();
  }, a = i.length;
  if (a > 0) {
    var s = () => --a || r();
    for (var u of i)
      u.out(s);
  } else
    r();
}
function Al(n, e, t) {
  if (!(n.f & Mt)) {
    n.f ^= Mt;
    var i = n.nodes && n.nodes.t;
    if (i !== null)
      for (const u of i)
        (u.is_global || t) && e.push(u);
    for (var r = n.first; r !== null; ) {
      var a = r.next;
      if (!(r.f & ri)) {
        var s = (r.f & zn) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (r.f & pn) !== 0 && (n.f & Sn) !== 0;
        Al(r, e, s ? t : !1);
      }
      r = a;
    }
  }
}
function Qa(n) {
  Sl(n, !0);
}
function Sl(n, e) {
  if (n.f & Mt) {
    n.f ^= Mt, n.f & gt || (at(n, At), wi.ensure().schedule(n));
    for (var t = n.first; t !== null; ) {
      var i = t.next, r = (t.f & zn) !== 0 || (t.f & pn) !== 0;
      Sl(t, r ? e : !1), t = i;
    }
    var a = n.nodes && n.nodes.t;
    if (a !== null)
      for (const s of a)
        (s.is_global || e) && s.in();
  }
}
function Ya(n, e) {
  if (n.nodes)
    for (var t = n.nodes.start, i = n.nodes.end; t !== null; ) {
      var r = t === i ? null : /* @__PURE__ */ Ar(t);
      e.append(t), t = r;
    }
}
let Vr = !1, qn = !1;
function fs(n) {
  qn = n;
}
let Le = null, hn = !1;
function ln(n) {
  Le = n;
}
let we = null;
function Tn(n) {
  we = n;
}
let sn = null;
function Cl(n) {
  Le !== null && (sn === null ? sn = [n] : sn.push(n));
}
let Vt = null, qt = 0, en = null;
function gu(n) {
  en = n;
}
let xl = 1, mi = 0, xi = mi;
function hs(n) {
  xi = n;
}
function Ll() {
  return ++xl;
}
function xr(n) {
  var e = n.f;
  if (e & At)
    return !0;
  if (e & wt && (n.f &= ~Ti), e & Ln) {
    for (var t = (
      /** @type {Value[]} */
      n.deps
    ), i = t.length, r = 0; r < i; r++) {
      var a = t[r];
      if (xr(
        /** @type {Derived} */
        a
      ) && ol(
        /** @type {Derived} */
        a
      ), a.wv > n.wv)
        return !0;
    }
    e & an && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    yt === null && at(n, gt);
  }
  return !1;
}
function Tl(n, e, t = !0) {
  var i = n.reactions;
  if (i !== null && !(sn !== null && Xi.call(sn, n)))
    for (var r = 0; r < i.length; r++) {
      var a = i[r];
      a.f & wt ? Tl(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? at(a, At) : a.f & gt && at(a, Ln), qa(
        /** @type {Effect} */
        a
      ));
    }
}
function wl(n) {
  var g;
  var e = Vt, t = qt, i = en, r = Le, a = sn, s = ut, u = hn, o = xi, d = n.f;
  Vt = /** @type {null | Value[]} */
  null, qt = 0, en = null, Le = d & (pn | ri) ? null : n, sn = null, Qi(n.ctx), hn = !1, xi = ++mi, n.ac !== null && ($r(() => {
    n.ac.abort(kn);
  }), n.ac = null);
  try {
    n.f |= Ia;
    var c = (
      /** @type {Function} */
      n.fn
    ), v = c();
    n.f |= Di;
    var f = n.deps, p = ie == null ? void 0 : ie.is_fork;
    if (Vt !== null) {
      var h;
      if (p || gr(n, qt), f !== null && qt > 0)
        for (f.length = qt + Vt.length, h = 0; h < Vt.length; h++)
          f[qt + h] = Vt[h];
      else
        n.deps = f = Vt;
      if (Xa() && n.f & an)
        for (h = qt; h < f.length; h++)
          ((g = f[h]).reactions ?? (g.reactions = [])).push(n);
    } else !p && f !== null && qt < f.length && (gr(n, qt), f.length = qt);
    if (Ks() && en !== null && !hn && f !== null && !(n.f & (wt | Ln | At)))
      for (h = 0; h < /** @type {Source[]} */
      en.length; h++)
        Tl(
          en[h],
          /** @type {Effect} */
          n
        );
    if (r !== null && r !== n) {
      if (mi++, r.deps !== null)
        for (let m = 0; m < t; m += 1)
          r.deps[m].rv = mi;
      if (e !== null)
        for (const m of e)
          m.rv = mi;
      en !== null && (i === null ? i = en : i.push(.../** @type {Source[]} */
      en));
    }
    return n.f & ii && (n.f ^= ii), v;
  } catch (m) {
    return Zs(m);
  } finally {
    n.f ^= Ia, Vt = e, qt = t, en = i, Le = r, sn = a, Qi(s), hn = u, xi = o;
  }
}
function mu(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var i = vo.call(t, n);
    if (i !== -1) {
      var r = t.length - 1;
      r === 0 ? t = e.reactions = null : (t[i] = t[r], t.pop());
    }
  }
  if (t === null && e.f & wt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Vt === null || !Xi.call(Vt, e))) {
    var a = (
      /** @type {Derived} */
      e
    );
    a.f & an && (a.f ^= an, a.f &= ~Ti), a.v !== vt && ja(a), nu(a), gr(a, 0);
  }
}
function gr(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var i = e; i < t.length; i++)
      mu(n, t[i]);
}
function Ji(n) {
  var e = n.f;
  if (!(e & Qt)) {
    at(n, gt);
    var t = we, i = Vr;
    we = n, Vr = !0;
    try {
      e & (Sn | Na) ? vu(n) : Ka(n), yl(n);
      var r = wl(n);
      n.teardown = typeof r == "function" ? r : null, n.wv = xl;
      var a;
      ho && Po && n.f & At && n.deps;
    } finally {
      Vr = i, we = t;
    }
  }
}
async function Ol() {
  await Promise.resolve(), zo();
}
function l(n) {
  var e = n.f, t = (e & wt) !== 0;
  if (Le !== null && !hn) {
    var i = we !== null && (we.f & Qt) !== 0;
    if (!i && (sn === null || !Xi.call(sn, n))) {
      var r = Le.deps;
      if (Le.f & Ia)
        n.rv < mi && (n.rv = mi, Vt === null && r !== null && r[qt] === n ? qt++ : Vt === null ? Vt = [n] : Vt.push(n));
      else {
        (Le.deps ?? (Le.deps = [])).push(n);
        var a = n.reactions;
        a === null ? n.reactions = [Le] : Xi.call(a, Le) || a.push(Le);
      }
    }
  }
  if (qn && Si.has(n))
    return Si.get(n);
  if (t) {
    var s = (
      /** @type {Derived} */
      n
    );
    if (qn) {
      var u = s.v;
      return (!(s.f & gt) && s.reactions !== null || Dl(s)) && (u = Wa(s)), Si.set(s, u), u;
    }
    var o = (s.f & an) === 0 && !hn && Le !== null && (Vr || (Le.f & an) !== 0), d = (s.f & Di) === 0;
    xr(s) && (o && (s.f |= an), ol(s)), o && !d && (ul(s), Ml(s));
  }
  if (yt != null && yt.has(n))
    return yt.get(n);
  if (n.f & ii)
    throw n.v;
  return n.v;
}
function Ml(n) {
  if (n.f |= an, n.deps !== null)
    for (const e of n.deps)
      (e.reactions ?? (e.reactions = [])).push(n), e.f & wt && !(e.f & an) && (ul(
        /** @type {Derived} */
        e
      ), Ml(
        /** @type {Derived} */
        e
      ));
}
function Dl(n) {
  if (n.v === vt) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Si.has(e) || e.f & wt && Dl(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function ai(n) {
  var e = hn;
  try {
    return hn = !0, n();
  } finally {
    hn = e;
  }
}
function Iu(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (Cn in n)
      Ta(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && Cn in t && Ta(t);
      }
  }
}
function Ta(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let i in n)
      try {
        Ta(n[i], e);
      } catch {
      }
    const t = Ha(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const i = js(t);
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
const Ii = Symbol("events"), Rl = /* @__PURE__ */ new Set(), wa = /* @__PURE__ */ new Set();
function Za(n, e, t, i = {}) {
  function r(a) {
    if (i.capture || Oa.call(e, a), !a.cancelBubble)
      return $r(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Gn(() => {
    e.addEventListener(n, r, i);
  }) : e.addEventListener(n, r, i), r;
}
function _u(n, e, t, i = {}) {
  var r = Za(e, n, t, i);
  return () => {
    n.removeEventListener(e, r, i);
  };
}
function Fl(n, e, t, i, r) {
  var a = { capture: i, passive: r }, s = Za(n, e, t, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Sr(() => {
    e.removeEventListener(n, s, a);
  });
}
function Vn(n, e, t) {
  (e[Ii] ?? (e[Ii] = {}))[n] = t;
}
function Ja(n) {
  for (var e = 0; e < n.length; e++)
    Rl.add(n[e]);
  for (var t of wa)
    t(n);
}
let vs = null;
function Oa(n) {
  var m, E;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), i = n.type, r = ((m = n.composedPath) == null ? void 0 : m.call(n)) || [], a = (
    /** @type {null | Element} */
    r[0] || n.target
  );
  vs = n;
  var s = 0, u = vs === n && n[Ii];
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
    Vs(n, "currentTarget", {
      configurable: !0,
      get() {
        return a || t;
      }
    });
    var c = Le, v = we;
    ln(null), Tn(null);
    try {
      for (var f, p = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = (E = a[Ii]) == null ? void 0 : E[i];
          g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === a) && g.call(a, n);
        } catch (w) {
          f ? p.push(w) : f = w;
        }
        if (n.cancelBubble || h === e || h === null)
          break;
        a = h;
      }
      if (f) {
        for (let w of p)
          queueMicrotask(() => {
            throw w;
          });
        throw f;
      }
    } finally {
      n[Ii] = e, delete n.currentTarget, ln(c), Tn(v);
    }
  }
}
var Hs;
const sa = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Hs = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Hs.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (n) => n
  })
);
function bu(n) {
  return (
    /** @type {string} */
    (sa == null ? void 0 : sa.createHTML(n)) ?? n
  );
}
function Pl(n) {
  var e = Il("template");
  return e.innerHTML = bu(n.replaceAll("<!>", "<!---->")), e.content;
}
function $i(n, e) {
  var t = (
    /** @type {Effect} */
    we
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function se(n, e) {
  var t = (e & 1) !== 0, i = (e & 2) !== 0, r, a = !n.startsWith("<!>");
  return () => {
    r === void 0 && (r = Pl(a ? n : "<!>" + n), t || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ Zi(r)));
    var s = (
      /** @type {TemplateNode} */
      i || vl ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (t) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Zi(s)
      ), o = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      $i(u, o);
    } else
      $i(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function yu(n, e, t = "svg") {
  var i = !n.startsWith("<!>"), r = `<${t}>${i ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Pl(r)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Zi(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Zi(u);
    }
    var o = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return $i(o, o), o;
  };
}
// @__NO_SIDE_EFFECTS__
function Eu(n, e) {
  return /* @__PURE__ */ yu(n, e, "svg");
}
function Je(n = "") {
  {
    var e = xn(n + "");
    return $i(e, e), e;
  }
}
function ve() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = xn();
  return n.append(e, t), $i(e, t), n;
}
function O(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function Au(n) {
  return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
}
const Su = [
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
function Cu(n) {
  return Su.includes(n);
}
const xu = {
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
function Lu(n) {
  return n = n.toLowerCase(), xu[n] ?? n;
}
const Tu = ["touchstart", "touchmove"];
function wu(n) {
  return Tu.includes(n);
}
function Ee(n, e) {
  var t = e == null ? "" : typeof e == "object" ? `${e}` : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = `${t}`);
}
function Ou(n, e) {
  return Mu(n, e);
}
const Or = /* @__PURE__ */ new Map();
function Mu(n, { target: e, anchor: t, props: i = {}, events: r, context: a, intro: s = !0, transformError: u }) {
  au();
  var o = void 0, d = fu(() => {
    var c = t ?? e.appendChild(xn());
    Ko(
      /** @type {TemplateNode} */
      c,
      {
        pending: () => {
        }
      },
      (p) => {
        qe({});
        var h = (
          /** @type {ComponentContext} */
          ut
        );
        a && (h.c = a), r && (i.$$events = r), o = n(p, i) || {}, We();
      },
      u
    );
    var v = /* @__PURE__ */ new Set(), f = (p) => {
      for (var h = 0; h < p.length; h++) {
        var g = p[h];
        if (!v.has(g)) {
          v.add(g);
          var m = wu(g);
          for (const S of [e, document]) {
            var E = Or.get(S);
            E === void 0 && (E = /* @__PURE__ */ new Map(), Or.set(S, E));
            var w = E.get(g);
            w === void 0 ? (S.addEventListener(g, Oa, { passive: m }), E.set(g, 1)) : E.set(g, w + 1);
          }
        }
      }
    };
    return f(Qr(Rl)), wa.add(f), () => {
      var m;
      for (var p of v)
        for (const E of [e, document]) {
          var h = (
            /** @type {Map<string, number>} */
            Or.get(E)
          ), g = (
            /** @type {number} */
            h.get(p)
          );
          --g == 0 ? (E.removeEventListener(p, Oa), h.delete(p), h.size === 0 && Or.delete(E)) : h.set(p, g);
        }
      wa.delete(f), c !== t && ((m = c.parentNode) == null || m.removeChild(c));
    };
  });
  return Du.set(o, d), o;
}
let Du = /* @__PURE__ */ new WeakMap();
var fn, yn, Kt, Ai, yr, Er, Kr;
class ta {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    dn(this, "anchor");
    /** @type {Map<Batch, Key>} */
    me(this, fn, /* @__PURE__ */ new Map());
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
    me(this, yn, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    me(this, Kt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    me(this, Ai, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    me(this, yr, !0);
    /**
     * @param {Batch} batch
     */
    me(this, Er, (e) => {
      if (b(this, fn).has(e)) {
        var t = (
          /** @type {Key} */
          b(this, fn).get(e)
        ), i = b(this, yn).get(t);
        if (i)
          Qa(i), b(this, Ai).delete(t);
        else {
          var r = b(this, Kt).get(t);
          r && (b(this, yn).set(t, r.effect), b(this, Kt).delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
        }
        for (const [a, s] of b(this, fn)) {
          if (b(this, fn).delete(a), a === e)
            break;
          const u = b(this, Kt).get(s);
          u && (St(u.effect), b(this, Kt).delete(s));
        }
        for (const [a, s] of b(this, yn)) {
          if (a === t || b(this, Ai).has(a)) continue;
          const u = () => {
            if (Array.from(b(this, fn).values()).includes(a)) {
              var d = document.createDocumentFragment();
              Ya(s, d), d.append(xn()), b(this, Kt).set(a, { effect: s, fragment: d });
            } else
              St(s);
            b(this, Ai).delete(a), b(this, yn).delete(a);
          };
          b(this, yr) || !i ? (b(this, Ai).add(a), Ci(s, u, !1)) : u();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    me(this, Kr, (e) => {
      b(this, fn).delete(e);
      const t = Array.from(b(this, fn).values());
      for (const [i, r] of b(this, Kt))
        t.includes(i) || (St(r.effect), b(this, Kt).delete(i));
    });
    this.anchor = e, Se(this, yr, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var i = (
      /** @type {Batch} */
      ie
    ), r = ml();
    if (t && !b(this, yn).has(e) && !b(this, Kt).has(e))
      if (r) {
        var a = document.createDocumentFragment(), s = xn();
        a.append(s), b(this, Kt).set(e, {
          effect: jt(() => t(s)),
          fragment: a
        });
      } else
        b(this, yn).set(
          e,
          jt(() => t(this.anchor))
        );
    if (b(this, fn).set(i, e), r) {
      for (const [u, o] of b(this, yn))
        u === e ? i.unskip_effect(o) : i.skip_effect(o);
      for (const [u, o] of b(this, Kt))
        u === e ? i.unskip_effect(o.effect) : i.skip_effect(o.effect);
      i.oncommit(b(this, Er)), i.ondiscard(b(this, Kr));
    } else
      b(this, Er).call(this, i);
  }
}
fn = new WeakMap(), yn = new WeakMap(), Kt = new WeakMap(), Ai = new WeakMap(), yr = new WeakMap(), Er = new WeakMap(), Kr = new WeakMap();
function Ce(n, e, ...t) {
  var i = new ta(n);
  tr(() => {
    const r = e() ?? null;
    i.ensure(r, r && ((a) => r(a, ...t)));
  }, zn);
}
function Dt(n) {
  ut === null && Ba(), Fe(() => {
    const e = ai(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function si(n) {
  ut === null && Ba(), Dt(() => () => ai(n));
}
function ae(n, e, t = !1) {
  var i = new ta(n), r = t ? zn : 0;
  function a(s, u) {
    i.ensure(s, u);
  }
  tr(() => {
    var s = !1;
    e((u, o = 0) => {
      s = !0, a(o, u);
    }), s || a(-1, null);
  }, r);
}
function Mr(n, e) {
  return e;
}
function Ru(n, e, t) {
  for (var i = [], r = e.length, a, s = e.length, u = 0; u < r; u++) {
    let v = e[u];
    Ci(
      v,
      () => {
        if (a) {
          if (a.pending.delete(v), a.done.add(v), a.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            Ma(n, Qr(a.done)), f.delete(a), f.size === 0 && (n.outrogroups = null);
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
      su(c), c.append(d), n.items.clear();
    }
    Ma(n, e, !o);
  } else
    a = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (n.outrogroups ?? (n.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Ma(n, e, t = !0) {
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
      a.f |= An;
      const s = document.createDocumentFragment();
      Ya(a, s);
    } else
      St(e[r], t);
  }
}
var ps;
function cr(n, e, t, i, r, a = null) {
  var s = n, u = /* @__PURE__ */ new Map(), o = (e & 4) !== 0;
  if (o) {
    var d = (
      /** @type {Element} */
      n
    );
    s = d.appendChild(xn());
  }
  var c = null, v = /* @__PURE__ */ ll(() => {
    var S = t();
    return Ua(S) ? S : S == null ? [] : Qr(S);
  }), f, p = /* @__PURE__ */ new Map(), h = !0;
  function g(S) {
    w.effect.f & Qt || (w.pending.delete(S), w.fallback = c, Fu(w, f, s, e, i), c !== null && (f.length === 0 ? c.f & An ? (c.f ^= An, fr(c, null, s)) : Qa(c) : Ci(c, () => {
      c = null;
    })));
  }
  function m(S) {
    w.pending.delete(S);
  }
  var E = tr(() => {
    f = /** @type {V[]} */
    l(v);
    for (var S = f.length, A = /* @__PURE__ */ new Set(), L = (
      /** @type {Batch} */
      ie
    ), x = ml(), T = 0; T < S; T += 1) {
      var _ = f[T], C = i(_, T), V = h ? null : u.get(C);
      V ? (V.v && Yi(V.v, _), V.i && Yi(V.i, T), x && L.unskip_effect(V.e)) : (V = Pu(
        u,
        h ? s : ps ?? (ps = xn()),
        _,
        C,
        T,
        r,
        e,
        t
      ), h || (V.e.f |= An), u.set(C, V)), A.add(C);
    }
    if (S === 0 && a && !c && (h ? c = jt(() => a(s)) : (c = jt(() => a(ps ?? (ps = xn()))), c.f |= An)), S > A.size && Eo(), !h)
      if (p.set(L, A), x) {
        for (const [ee, P] of u)
          A.has(ee) || L.skip_effect(P.e);
        L.oncommit(g), L.ondiscard(m);
      } else
        g(L);
    l(v);
  }), w = { effect: E, items: u, pending: p, outrogroups: null, fallback: c };
  h = !1;
}
function lr(n) {
  for (; n !== null && !(n.f & pn); )
    n = n.next;
  return n;
}
function Fu(n, e, t, i, r) {
  var V, ee, P, N, Oe, K, k, D, G;
  var a = (i & 8) !== 0, s = e.length, u = n.items, o = lr(n.effect.first), d, c = null, v, f = [], p = [], h, g, m, E;
  if (a)
    for (E = 0; E < s; E += 1)
      h = e[E], g = r(h, E), m = /** @type {EachItem} */
      u.get(g).e, m.f & An || ((ee = (V = m.nodes) == null ? void 0 : V.a) == null || ee.measure(), (v ?? (v = /* @__PURE__ */ new Set())).add(m));
  for (E = 0; E < s; E += 1) {
    if (h = e[E], g = r(h, E), m = /** @type {EachItem} */
    u.get(g).e, n.outrogroups !== null)
      for (const re of n.outrogroups)
        re.pending.delete(m), re.done.delete(m);
    if (m.f & Mt && (Qa(m), a && ((N = (P = m.nodes) == null ? void 0 : P.a) == null || N.unfix(), (v ?? (v = /* @__PURE__ */ new Set())).delete(m))), m.f & An)
      if (m.f ^= An, m === o)
        fr(m, null, t);
      else {
        var w = c ? c.next : o;
        m === n.effect.last && (n.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), Yn(n, c, m), Yn(n, m, w), fr(m, w, t), c = m, f = [], p = [], o = lr(c.next);
        continue;
      }
    if (m !== o) {
      if (d !== void 0 && d.has(m)) {
        if (f.length < p.length) {
          var S = p[0], A;
          c = S.prev;
          var L = f[0], x = f[f.length - 1];
          for (A = 0; A < f.length; A += 1)
            fr(f[A], S, t);
          for (A = 0; A < p.length; A += 1)
            d.delete(p[A]);
          Yn(n, L.prev, x.next), Yn(n, c, L), Yn(n, x, S), o = S, c = x, E -= 1, f = [], p = [];
        } else
          d.delete(m), fr(m, o, t), Yn(n, m.prev, m.next), Yn(n, m, c === null ? n.effect.first : c.next), Yn(n, c, m), c = m;
        continue;
      }
      for (f = [], p = []; o !== null && o !== m; )
        (d ?? (d = /* @__PURE__ */ new Set())).add(o), p.push(o), o = lr(o.next);
      if (o === null)
        continue;
    }
    m.f & An || f.push(m), c = m, o = lr(m.next);
  }
  if (n.outrogroups !== null) {
    for (const re of n.outrogroups)
      re.pending.size === 0 && (Ma(n, Qr(re.done)), (Oe = n.outrogroups) == null || Oe.delete(re));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (o !== null || d !== void 0) {
    var T = [];
    if (d !== void 0)
      for (m of d)
        m.f & Mt || T.push(m);
    for (; o !== null; )
      !(o.f & Mt) && o !== n.fallback && T.push(o), o = lr(o.next);
    var _ = T.length;
    if (_ > 0) {
      var C = i & 4 && s === 0 ? t : null;
      if (a) {
        for (E = 0; E < _; E += 1)
          (k = (K = T[E].nodes) == null ? void 0 : K.a) == null || k.measure();
        for (E = 0; E < _; E += 1)
          (G = (D = T[E].nodes) == null ? void 0 : D.a) == null || G.fix();
      }
      Ru(n, T, C);
    }
  }
  a && Gn(() => {
    var re, B;
    if (v !== void 0)
      for (m of v)
        (B = (re = m.nodes) == null ? void 0 : re.a) == null || B.apply();
  });
}
function Pu(n, e, t, i, r, a, s, u) {
  var o = s & 1 ? s & 16 ? Oi(t) : /* @__PURE__ */ cl(t, !1, !1) : null, d = s & 2 ? Oi(r) : null;
  return {
    v: o,
    i: d,
    e: jt(() => (a(e, o ?? t, d ?? r, u), () => {
      n.delete(i);
    }))
  };
}
function fr(n, e, t) {
  if (n.nodes)
    for (var i = n.nodes.start, r = n.nodes.end, a = e && !(e.f & An) ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; i !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ar(i)
      );
      if (a.before(i), i === r)
        return;
      i = s;
    }
}
function Yn(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function $a(n, e, t) {
  var i = new ta(n);
  tr(() => {
    var r = e() ?? null;
    i.ensure(r, r && ((a) => t(a, r)));
  }, zn);
}
function gs(n, e, t, i, r, a) {
  var s = null, u = (
    /** @type {TemplateNode} */
    n
  ), o = new ta(u, !1);
  tr(() => {
    const d = e() || null;
    var c = d === "svg" ? co : void 0;
    if (d === null) {
      o.ensure(null, null);
      return;
    }
    return o.ensure(d, (v) => {
      if (d) {
        if (s = Il(d, c), $i(s, s), i) {
          var f = s.appendChild(xn());
          i(s, f);
        }
        we.nodes.end = s, v.before(s);
      }
    }), () => {
    };
  }, zn), Sr(() => {
  });
}
function Qe(n, e, t) {
  Cr(() => {
    var i = ai(() => e(n, t == null ? void 0 : t()) || {});
    if (t && (i != null && i.update)) {
      var r = !1, a = (
        /** @type {any} */
        {}
      );
      ea(() => {
        var s = t();
        Iu(s), r && Va(a, s) && (a = s, i.update(s));
      }), r = !0;
    }
    if (i != null && i.destroy)
      return () => (
        /** @type {Function} */
        i.destroy()
      );
  });
}
function ku(n, e) {
  var t = void 0, i;
  bl(() => {
    t !== (t = e()) && (i && (St(i), i = null), t && (i = jt(() => {
      Cr(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function kl(n) {
  var e, t, i = "";
  if (typeof n == "string" || typeof n == "number") i += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var r = n.length;
    for (e = 0; e < r; e++) n[e] && (t = kl(n[e])) && (i && (i += " "), i += t);
  } else for (t in n) n[t] && (i && (i += " "), i += t);
  return i;
}
function Uu() {
  for (var n, e, t = 0, i = "", r = arguments.length; t < r; t++) (n = arguments[t]) && (e = kl(n)) && (i && (i += " "), i += e);
  return i;
}
function Ul(n) {
  return typeof n == "object" ? Uu(n) : n ?? "";
}
const ms = [...` 	
\r\f \v\uFEFF`];
function Hu(n, e, t) {
  var i = n == null ? "" : "" + n;
  if (e && (i = i ? i + " " + e : e), t) {
    for (var r of Object.keys(t))
      if (t[r])
        i = i ? i + " " + r : r;
      else if (i.length)
        for (var a = r.length, s = 0; (s = i.indexOf(r, s)) >= 0; ) {
          var u = s + a;
          (s === 0 || ms.includes(i[s - 1])) && (u === i.length || ms.includes(i[u])) ? i = (s === 0 ? "" : i.substring(0, s)) + i.substring(u + 1) : s = u;
        }
  }
  return i === "" ? null : i;
}
function Is(n, e = !1) {
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
function Nu(n, e) {
  if (e) {
    var t = "", i, r;
    if (Array.isArray(e) ? (i = e[0], r = e[1]) : i = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, u = !1, o = [];
      i && o.push(...Object.keys(i).map(la)), r && o.push(...Object.keys(r).map(la));
      var d = 0, c = -1;
      const g = n.length;
      for (var v = 0; v < g; v++) {
        var f = n[v];
        if (u ? f === "/" && n[v - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && n[v + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !u && a === !1 && s === 0) {
          if (f === ":" && c === -1)
            c = v;
          else if (f === ";" || v === g - 1) {
            if (c !== -1) {
              var p = la(n.substring(d, c).trim());
              if (!o.includes(p)) {
                f !== ";" && v++;
                var h = n.substring(d, v).trim();
                t += " " + h + ";";
              }
            }
            d = v + 1, c = -1;
          }
        }
      }
    }
    return i && (t += Is(i)), r && (t += Is(r, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function jn(n, e, t, i, r, a) {
  var s = n.__className;
  if (s !== t || s === void 0) {
    var u = Hu(t, i, a);
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
function Hl(n, e, t, i) {
  var r = n.__style;
  if (r !== e) {
    var a = Nu(e, i);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else i && (Array.isArray(i) ? (oa(n, t == null ? void 0 : t[0], i[0]), oa(n, t == null ? void 0 : t[1], i[1], "important")) : oa(n, t, i));
  return i;
}
function Da(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Ua(e))
      return Ro();
    for (var i of n.options)
      i.selected = e.includes(_s(i));
    return;
  }
  for (i of n.options) {
    var r = _s(i);
    if (ru(r, e)) {
      i.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function Bu(n) {
  var e = new MutationObserver(() => {
    Da(n, n.__value);
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
  }), Sr(() => {
    e.disconnect();
  });
}
function _s(n) {
  return "__value" in n ? n.__value : n.value;
}
const or = Symbol("class"), ur = Symbol("style"), Nl = Symbol("is custom element"), Bl = Symbol("is html"), Vu = qs ? "option" : "OPTION", ju = qs ? "select" : "SELECT";
function Gu(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function Mi(n, e, t, i) {
  var r = Vl(n);
  r[e] !== (r[e] = t) && (e === "loading" && (n[bo] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && jl(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function zu(n, e, t, i, r = !1, a = !1) {
  var s = Vl(n), u = s[Nl], o = !s[Bl], d = e || {}, c = n.nodeName === Vu;
  for (var v in e)
    v in t || (t[v] = null);
  t.class ? t.class = Ul(t.class) : t[or] && (t.class = null), t[ur] && (t.style ?? (t.style = null));
  var f = jl(n);
  for (const S in t) {
    let A = t[S];
    if (c && S === "value" && A == null) {
      n.value = n.__value = "", d[S] = A;
      continue;
    }
    if (S === "class") {
      var p = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      jn(n, p, A, i, e == null ? void 0 : e[or], t[or]), d[S] = A, d[or] = t[or];
      continue;
    }
    if (S === "style") {
      Hl(n, A, e == null ? void 0 : e[ur], t[ur]), d[S] = A, d[ur] = t[ur];
      continue;
    }
    var h = d[S];
    if (!(A === h && !(A === void 0 && n.hasAttribute(S)))) {
      d[S] = A;
      var g = S[0] + S[1];
      if (g !== "$$")
        if (g === "on") {
          const L = {}, x = "$$" + S;
          let T = S.slice(2);
          var m = Cu(T);
          if (Au(T) && (T = T.slice(0, -7), L.capture = !0), !m && h) {
            if (A != null) continue;
            n.removeEventListener(T, d[x], L), d[x] = null;
          }
          if (m)
            Vn(T, n, A), Ja([T]);
          else if (A != null) {
            let _ = function(C) {
              d[S].call(this, C);
            };
            d[x] = Za(T, n, _, L);
          }
        } else if (S === "style")
          Mi(n, S, A);
        else if (S === "autofocus")
          lu(
            /** @type {HTMLElement} */
            n,
            !!A
          );
        else if (!u && (S === "__value" || S === "value" && A != null))
          n.value = n.__value = A;
        else if (S === "selected" && c)
          Gu(
            /** @type {HTMLOptionElement} */
            n,
            A
          );
        else {
          var E = S;
          o || (E = Lu(E));
          var w = E === "defaultValue" || E === "defaultChecked";
          if (A == null && !u && !w)
            if (s[S] = null, E === "value" || E === "checked") {
              let L = (
                /** @type {HTMLInputElement} */
                n
              );
              const x = e === void 0;
              if (E === "value") {
                let T = L.defaultValue;
                L.removeAttribute(E), L.defaultValue = T, L.value = L.__value = x ? T : null;
              } else {
                let T = L.defaultChecked;
                L.removeAttribute(E), L.defaultChecked = T, L.checked = x ? T : !1;
              }
            } else
              n.removeAttribute(S);
          else w || f.includes(E) && (u || typeof A != "string") ? (n[E] = A, E in s && (s[E] = vt)) : typeof A != "function" && Mi(n, E, A);
        }
    }
  }
  return d;
}
function ot(n, e, t = [], i = [], r = [], a, s = !1, u = !1) {
  al(r, t, i, (o) => {
    var d = void 0, c = {}, v = n.nodeName === ju, f = !1;
    if (bl(() => {
      var h = e(...o.map(l)), g = zu(
        n,
        d,
        h,
        a,
        s,
        u
      );
      f && v && "value" in h && Da(
        /** @type {HTMLSelectElement} */
        n,
        h.value
      );
      for (let E of Object.getOwnPropertySymbols(c))
        h[E] || St(c[E]);
      for (let E of Object.getOwnPropertySymbols(h)) {
        var m = h[E];
        E.description === fo && (!d || m !== d[E]) && (c[E] && St(c[E]), c[E] = jt(() => ku(n, () => m))), g[E] = m;
      }
      d = g;
    }), v) {
      var p = (
        /** @type {HTMLSelectElement} */
        n
      );
      Cr(() => {
        Da(
          p,
          /** @type {Record<string | symbol, any>} */
          d.value,
          !0
        ), Bu(p);
      });
    }
    f = !0;
  });
}
function Vl(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [Nl]: n.nodeName.includes("-"),
      [Bl]: n.namespaceURI === Bs
    })
  );
}
var bs = /* @__PURE__ */ new Map();
function jl(n) {
  var e = n.getAttribute("is") || n.nodeName, t = bs.get(e);
  if (t) return t;
  bs.set(e, t = []);
  for (var i, r = n, a = Element.prototype; a !== r; ) {
    i = js(r);
    for (var s in i)
      i[s].set && t.push(s);
    r = Ha(r);
  }
  return t;
}
function qu(n, e, t = e) {
  var i = /* @__PURE__ */ new WeakSet();
  uu(n, "input", async (r) => {
    var a = r ? n.defaultValue : n.value;
    if (a = ua(n) ? da(a) : a, t(a), ie !== null && i.add(ie), await Ol(), a !== (a = e())) {
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
  ai(e) == null && n.value && (t(ua(n) ? da(n.value) : n.value), ie !== null && i.add(ie)), ea(() => {
    var r = e();
    if (n === document.activeElement) {
      var a = (
        /** @type {Batch} */
        ie
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
function ys(n, e) {
  return n === e || (n == null ? void 0 : n[Cn]) === e;
}
function De(n = {}, e, t, i) {
  var r = (
    /** @type {ComponentContext} */
    ut.r
  ), a = (
    /** @type {Effect} */
    we
  );
  return Cr(() => {
    var s, u;
    return ea(() => {
      s = u, u = [], ai(() => {
        n !== t(...u) && (e(n, ...u), s && ys(t(...s), n) && e(null, ...s));
      });
    }), () => {
      let o = a;
      for (; o !== r && o.parent !== null && o.parent.f & ga; )
        o = o.parent;
      const d = () => {
        u && ys(t(...u), n) && e(null, ...u);
      }, c = o.teardown;
      o.teardown = () => {
        d(), c == null || c();
      };
    };
  }), n;
}
const Wu = {
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
function mt(n, e, t) {
  return new Proxy(
    { props: n, exclude: e },
    Wu
  );
}
const Xu = {
  get(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let i = n.props[t];
      if (sr(i) && (i = i()), typeof i == "object" && i !== null && e in i) return i[e];
    }
  },
  set(n, e, t) {
    let i = n.props.length;
    for (; i--; ) {
      let r = n.props[i];
      sr(r) && (r = r());
      const a = ni(r, e);
      if (a && a.set)
        return a.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let i = n.props[t];
      if (sr(i) && (i = i()), typeof i == "object" && i !== null && e in i) {
        const r = ni(i, e);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(n, e) {
    if (e === Cn || e === zs) return !1;
    for (let t of n.props)
      if (sr(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(n) {
    const e = [];
    for (let t of n.props)
      if (sr(t) && (t = t()), !!t) {
        for (const i in t)
          e.includes(i) || e.push(i);
        for (const i of Object.getOwnPropertySymbols(t))
          e.includes(i) || e.push(i);
      }
    return e;
  }
};
function $e(...n) {
  return new Proxy({ props: n }, Xu);
}
function I(n, e, t, i) {
  var w;
  var r = (t & 8) !== 0, a = (t & 16) !== 0, s = (
    /** @type {V} */
    i
  ), u = !0, o = () => (u && (u = !1, s = a ? ai(
    /** @type {() => V} */
    i
  ) : (
    /** @type {V} */
    i
  )), s);
  let d;
  if (r) {
    var c = Cn in n || zs in n;
    d = ((w = ni(n, e)) == null ? void 0 : w.set) ?? (c && e in n ? (S) => n[e] = S : void 0);
  }
  var v, f = !1;
  r ? [v, f] = Vo(() => (
    /** @type {V} */
    n[e]
  )) : v = /** @type {V} */
  n[e], v === void 0 && i !== void 0 && (v = o(), d && (Lo(), d(v)));
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
    var h = n.$$legacy;
    return (
      /** @type {() => V} */
      function(S, A) {
        return arguments.length > 0 ? ((!A || h || f) && d(A ? p() : S), S) : p();
      }
    );
  }
  var g = !1, m = (t & 1 ? Jr : ll)(() => (g = !1, p()));
  r && l(m);
  var E = (
    /** @type {Effect} */
    we
  );
  return (
    /** @type {() => V} */
    function(S, A) {
      if (arguments.length > 0) {
        const L = A ? l(m) : r ? Re(S) : S;
        return X(m, L), g = !0, s !== void 0 && (s = L), S;
      }
      return qn && g || E.f & Qt ? m.v : l(m);
    }
  );
}
const Ku = "5";
var Ns;
typeof window < "u" && ((Ns = window.__svelte ?? (window.__svelte = {})).v ?? (Ns.v = /* @__PURE__ */ new Set())).add(Ku);
var Ra = function(n, e) {
  return Ra = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  }, Ra(n, e);
};
function gn(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ra(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var ze = function() {
  return ze = Object.assign || function(e) {
    for (var t, i = 1, r = arguments.length; i < r; i++) {
      t = arguments[i];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ze.apply(this, arguments);
};
function vn(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], i = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Es(n, e) {
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
function Qu(n, e, t) {
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
var mn = (
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
function Yu(n) {
  return n === void 0 && (n = window), Zu(n) ? { passive: !0 } : !1;
}
function Zu(n) {
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
const Gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Yu
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
function Ju(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (zl(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function zl(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
const es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Ju,
  matches: zl
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
var $u = {
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
var ed = (
  /** @class */
  function(n) {
    gn(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return $u;
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
  }(mn)
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
var td = (
  /** @class */
  function(n) {
    gn(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
  }(mn)
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
var nd = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, As = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, id = {
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
var rd = (
  /** @class */
  function(n) {
    gn(e, n);
    function e(t) {
      return n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return nd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return id;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return As;
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
      t > 0 && (t += As.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(mn)
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
var ad = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, sd = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ss = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
}, Dr;
function ld(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, i = Dr;
  if (typeof Dr == "boolean" && !e)
    return Dr;
  var r = t && typeof t.supports == "function";
  if (!r)
    return !1;
  var a = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return i = a || s, e || (Dr = i), i;
}
function od(n, e, t) {
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
var Cs = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], xs = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Rr = [], ud = (
  /** @class */
  function(n) {
    gn(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
        return ad;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return sd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ss;
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
          for (var a = vn(Cs), s = a.next(); !s.done; s = a.next()) {
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
          for (var a = vn(xs), s = a.next(); !s.done; s = a.next()) {
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
        for (var r = vn(Cs), a = r.next(); !a.done; a = r.next()) {
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
        for (var r = vn(xs), a = r.next(); !a.done; a = r.next()) {
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
            var u = t !== void 0 && Rr.length > 0 && Rr.some(function(o) {
              return i.adapter.containsEventTarget(o);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Rr.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Rr = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(t), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, i = e.strings, r = i.VAR_FG_TRANSLATE_START, a = i.VAR_FG_TRANSLATE_END, s = e.cssClasses, u = s.FG_DEACTIVATION, o = s.FG_ACTIVATION, d = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", v = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), p = f.startPoint, h = f.endPoint;
        c = p.x + "px, " + p.y + "px", v = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(r, c), this.adapter.updateCssVariable(a, v), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, d);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, i = t.activationEvent, r = t.wasActivatedByPointer, a;
      r ? a = od(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, Ss.FG_DEACTIVATION_MS));
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
        var r = ze({}, i);
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
  }(mn)
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
}, dd = {
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
}, Ls = {
  LABEL_SCALE: 0.75
}, cd = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], fd = [
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
var Ts = ["mousedown", "touchstart"], ws = ["click", "keydown"], hd = (
  /** @class */
  function(n) {
    gn(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
        return dd;
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
        return Ls;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return fd.indexOf(t) >= 0;
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
        for (var s = vn(Ts), u = s.next(); !u.done; u = s.next()) {
          var o = u.value;
          this.adapter.registerInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (v) {
        t = { error: v };
      } finally {
        try {
          u && !u.done && (i = s.return) && i.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var d = vn(ws), c = d.next(); !c.done; c = d.next()) {
          var o = c.value;
          this.adapter.registerTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (v) {
        r = { error: v };
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
        for (var s = vn(Ts), u = s.next(); !u.done; u = s.next()) {
          var o = u.value;
          this.adapter.deregisterInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (v) {
        t = { error: v };
      } finally {
        try {
          u && !u.done && (i = s.return) && i.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var d = vn(ws), c = d.next(); !c.done; c = d.next()) {
          var o = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (v) {
        r = { error: v };
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
        return cd.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var i = this.adapter.getLabelWidth() * Ls.LABEL_SCALE;
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
  }(mn)
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
var Os = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, vd = {
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
var Ms = ["click", "keydown"], pd = (
  /** @class */
  function(n) {
    gn(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Os;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vd;
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
        for (var r = vn(Ms), a = r.next(); !a.done; a = r.next()) {
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
        for (var r = vn(Ms), a = r.next(); !a.done; a = r.next()) {
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
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Os.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var i = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || i) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(mn)
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
}, Rt = /* @__PURE__ */ new Set();
Rt.add(Ie.BACKSPACE);
Rt.add(Ie.ENTER);
Rt.add(Ie.SPACEBAR);
Rt.add(Ie.PAGE_UP);
Rt.add(Ie.PAGE_DOWN);
Rt.add(Ie.END);
Rt.add(Ie.HOME);
Rt.add(Ie.ARROW_LEFT);
Rt.add(Ie.ARROW_UP);
Rt.add(Ie.ARROW_RIGHT);
Rt.add(Ie.ARROW_DOWN);
Rt.add(Ie.DELETE);
Rt.add(Ie.ESCAPE);
Rt.add(Ie.TAB);
var Gt = {
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
}, Ft = /* @__PURE__ */ new Map();
Ft.set(Gt.BACKSPACE, Ie.BACKSPACE);
Ft.set(Gt.ENTER, Ie.ENTER);
Ft.set(Gt.SPACEBAR, Ie.SPACEBAR);
Ft.set(Gt.PAGE_UP, Ie.PAGE_UP);
Ft.set(Gt.PAGE_DOWN, Ie.PAGE_DOWN);
Ft.set(Gt.END, Ie.END);
Ft.set(Gt.HOME, Ie.HOME);
Ft.set(Gt.ARROW_LEFT, Ie.ARROW_LEFT);
Ft.set(Gt.ARROW_UP, Ie.ARROW_UP);
Ft.set(Gt.ARROW_RIGHT, Ie.ARROW_RIGHT);
Ft.set(Gt.ARROW_DOWN, Ie.ARROW_DOWN);
Ft.set(Gt.DELETE, Ie.DELETE);
Ft.set(Gt.ESCAPE, Ie.ESCAPE);
Ft.set(Gt.TAB, Ie.TAB);
var li = /* @__PURE__ */ new Set();
li.add(Ie.PAGE_UP);
li.add(Ie.PAGE_DOWN);
li.add(Ie.END);
li.add(Ie.HOME);
li.add(Ie.ARROW_LEFT);
li.add(Ie.ARROW_UP);
li.add(Ie.ARROW_RIGHT);
li.add(Ie.ARROW_DOWN);
function lt(n) {
  var e = n.key;
  if (Rt.has(e))
    return e;
  var t = Ft.get(n.keyCode);
  return t || Ie.UNKNOWN;
}
function et(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function Et(n, e, t, i = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dispatch event without element.");
  const r = new CustomEvent(e, Object.assign(Object.assign({}, i), { detail: t }));
  return n == null || n.dispatchEvent(r), r;
}
function Fa(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const a = t[r], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (i[a] = n[a]);
  }
  return i;
}
function pt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    a.substring(0, e.length) === e && (i[a.substring(e.length)] = n[a]);
  }
  return i;
}
class Lr {
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
var gd = /* @__PURE__ */ Eu("<svg><!></svg>");
function ts(n, e) {
  qe(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "tag", 3, "div"), r = /* @__PURE__ */ mt(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ue(() => [
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
  var o = { getElement: u }, d = ve(), c = ne(d);
  {
    var v = (h) => {
      var g = gd();
      ot(g, () => ({ ...r }));
      var m = Q(g);
      Ce(m, () => e.children ?? be), De(g, (E) => s = E, () => s), Qe(g, (E, w) => te == null ? void 0 : te(E, w), t), O(h, g);
    }, f = (h) => {
      var g = ve(), m = ne(g);
      gs(m, i, !1, (E, w) => {
        De(E, (S) => s = S, () => s), Qe(E, (S, A) => te == null ? void 0 : te(S, A), t), ot(E, () => ({ ...r }));
      }), O(h, g);
    }, p = (h) => {
      var g = ve(), m = ne(g);
      gs(m, i, !1, (E, w) => {
        De(E, (L) => s = L, () => s), Qe(E, (L, x) => te == null ? void 0 : te(L, x), t), ot(E, () => ({ ...r }));
        var S = ve(), A = ne(S);
        Ce(A, () => e.children ?? be), O(w, S);
      }), O(h, g);
    };
    ae(c, (h) => {
      i() === "svg" ? h(v) : l(a) ? h(f, 1) : h(p, -1);
    });
  }
  return O(n, d), We(o);
}
function Fr(n, e) {
  qe(e, !0);
  const [t, i] = Zr(), r = _a(e.value);
  pe(e.key, r), Fe(() => {
    jr(r, e.value);
  }), si(() => {
    r.set(void 0);
  });
  var a = ve(), s = ne(a);
  Ce(s, () => e.children ?? be), O(n, a), We(), i();
}
const { applyPassive: Ds } = Gl, { matches: md } = es;
function En(n, { ripple: e = !0, surface: t = !1, unbounded: i = !1, disabled: r = !1, color: a, active: s, rippleElement: u, eventTarget: o, activeTarget: d, addClass: c = (h) => n.classList.add(h), removeClass: v = (h) => n.classList.remove(h), addStyle: f = (h, g) => n.style.setProperty(h, g), initPromise: p = Promise.resolve() } = {}) {
  let h, g = new Lr(), m = Te("SMUI:addLayoutListener"), E, w = s, S = o, A = d;
  function L() {
    t ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")) : a === "secondary" ? (v("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary"))) : (v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), h && w !== s && (w = s, s ? h.activate() : s === !1 && h.deactivate()), e && !h ? (h = new ud({
      addClass: c,
      browserSupportsCssVars: () => ld(window),
      computeBoundingRect: () => (u || n).getBoundingClientRect(),
      containsEventTarget: (T) => n.contains(T),
      deregisterDocumentInteractionHandler: (T, _) => g.off(document.documentElement, T, _),
      deregisterInteractionHandler: (T, _) => g.off(o || n, T, _),
      deregisterResizeHandler: (T) => window.removeEventListener("resize", T),
      getWindowPageOffset: () => {
        var T, _;
        return {
          x: (T = window.pageXOffset) !== null && T !== void 0 ? T : window.scrollX,
          y: (_ = window.pageYOffset) !== null && _ !== void 0 ? _ : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? md(d || n, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (T, _) => {
        const C = Ds();
        g.on(document.documentElement, T, _, typeof C == "boolean" ? { capture: C } : C);
      },
      registerInteractionHandler: (T, _) => {
        const C = Ds();
        g.on(o || n, T, _, typeof C == "boolean" ? { capture: C } : C);
      },
      registerResizeHandler: (T) => g.on(window, "resize", T),
      removeClass: v,
      updateCssVariable: f
    }), p.then(() => {
      h && (h.init(), h.setUnbounded(i));
    })) : h && !e && p.then(() => {
      h && (h.destroy(), h = void 0, g.clear());
    }), h && (S !== o || A !== d) && (S = o, A = d, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
  }
  L(), m && (E = m(x));
  function x() {
    h && h.layout();
  }
  return {
    update(T) {
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
        removeClass: v,
        addStyle: f,
        initPromise: p
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (_) => n.classList.add(_), removeClass: (_) => n.classList.remove(_), addStyle: (_, C) => n.style.setProperty(_, C), initPromise: Promise.resolve() }, T)), L();
    },
    destroy() {
      h && (h.destroy(), h = void 0, g.clear(), v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), E && E();
    }
  };
}
var Id = /* @__PURE__ */ se("<span><!></span>"), _d = /* @__PURE__ */ se("<label><!></label>");
function zr(n, e) {
  qe(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "style", 3, ""), a = I(e, "floatAbove", 15, !1), s = I(e, "required", 15, !1), u = I(e, "wrapped", 3, !1), o = /* @__PURE__ */ mt(e, [
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
  ]), d, c = /* @__PURE__ */ de(void 0), v = new Lr(), f = Re({}), p = Re({}), h = Te("SMUI:generic:input:props") ?? {}, g = a();
  Fe(() => {
    l(c) && g !== a() && (g = a(), l(c).float(a()));
  });
  let m = s();
  Fe(() => {
    l(c) && m !== s() && (m = s(), l(c).setRequired(s()));
  });
  const E = Te("SMUI:floating-label:mount"), w = Te("SMUI:floating-label:unmount");
  Dt(() => {
    X(
      c,
      new ed({
        addClass: S,
        removeClass: A,
        getWidth: () => {
          var fe, ye;
          const G = ee(), re = G.cloneNode(!0);
          (fe = G.parentNode) == null || fe.appendChild(re), re.classList.add("smui-floating-label--remove-transition"), re.classList.add("smui-floating-label--force-size"), re.classList.remove("mdc-floating-label--float-above");
          const B = re.scrollWidth;
          return (ye = G.parentNode) == null || ye.removeChild(re), B;
        },
        registerInteractionHandler: (G, re) => v.on(ee(), G, re),
        deregisterInteractionHandler: (G, re) => v.off(ee(), G, re)
      }),
      !0
    );
    const D = {
      get element() {
        return ee();
      },
      addStyle: L,
      removeStyle: x
    };
    return E && E(D), l(c).init(), () => {
      var G;
      w && w(D), (G = l(c)) == null || G.destroy(), v.clear();
    };
  });
  function S(D) {
    f[D] || (f[D] = !0);
  }
  function A(D) {
    (!(D in f) || f[D]) && (f[D] = !1);
  }
  function L(D, G) {
    p[D] != G && (G === "" || G == null ? delete p[D] : p[D] = G);
  }
  function x(D) {
    D in p && delete p[D];
  }
  function T(D) {
    var G;
    (G = l(c)) == null || G.shake(D);
  }
  function _(D) {
    a(D);
  }
  function C(D) {
    s(D);
  }
  function V() {
    if (l(c) == null)
      throw new Error("Instance is undefined.");
    return l(c).getWidth();
  }
  function ee() {
    return d;
  }
  var P = { shake: T, float: _, setRequired: C, getWidth: V, getElement: ee }, N = ve(), Oe = ne(N);
  {
    var K = (D) => {
      var G = Id();
      ot(G, (B, fe) => ({ class: B, style: fe, ...o }), [
        () => et({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [i()]: !0
        }),
        () => Object.entries(p).map(([B, fe]) => `${B}: ${fe};`).concat([r()]).join(" ")
      ]);
      var re = Q(G);
      Ce(re, () => e.children ?? be), De(G, (B) => d = B, () => d), Qe(G, (B, fe) => te == null ? void 0 : te(B, fe), t), O(D, G);
    }, k = (D) => {
      var G = _d();
      ot(
        G,
        (B, fe) => ({
          class: B,
          style: fe,
          for: e.for || (h ? h.id : void 0),
          ...o
        }),
        [
          () => et({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [i()]: !0
          }),
          () => Object.entries(p).map(([B, fe]) => `${B}: ${fe};`).concat([r()]).join(" ")
        ]
      );
      var re = Q(G);
      Ce(re, () => e.children ?? be), De(G, (B) => d = B, () => d), Qe(G, (B, fe) => te == null ? void 0 : te(B, fe), t), O(D, G);
    };
    ae(Oe, (D) => {
      u() ? D(K) : D(k, -1);
    });
  }
  return O(n, N), We(P);
}
var bd = /* @__PURE__ */ se("<div></div>");
function ql(n, e) {
  qe(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "style", 3, ""), a = I(e, "active", 3, !1), s = /* @__PURE__ */ mt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, o = /* @__PURE__ */ de(void 0), d = new Lr(), c = Re({}), v = Re({});
  Dt(() => (X(
    o,
    new td({
      addClass: p,
      removeClass: h,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (x, T) => d.on(S(), x, T),
      deregisterEventHandler: (x, T) => d.off(S(), x, T)
    }),
    !0
  ), l(o).init(), () => {
    var x;
    (x = l(o)) == null || x.destroy(), d.clear();
  }));
  function f(x) {
    return x in c ? c[x] : S().classList.contains(x);
  }
  function p(x) {
    c[x] || (c[x] = !0);
  }
  function h(x) {
    (!(x in c) || c[x]) && (c[x] = !1);
  }
  function g(x, T) {
    v[x] != T && (T === "" || T == null ? delete v[x] : v[x] = T);
  }
  function m() {
    var x;
    (x = l(o)) == null || x.activate();
  }
  function E() {
    var x;
    (x = l(o)) == null || x.deactivate();
  }
  function w(x) {
    var T;
    (T = l(o)) == null || T.setRippleCenter(x);
  }
  function S() {
    return u;
  }
  var A = { activate: m, deactivate: E, setRippleCenter: w, getElement: S }, L = bd();
  return ot(L, (x, T) => ({ class: x, style: T, ...s }), [
    () => et({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...c,
      [i()]: !0
    }),
    () => Object.entries(v).map(([x, T]) => `${x}: ${T};`).concat([r()]).join(" ")
  ]), De(L, (x) => u = x, () => u), Qe(L, (x, T) => te == null ? void 0 : te(x, T), t), O(n, L), We(A);
}
var yd = /* @__PURE__ */ se('<div class="mdc-notched-outline__notch"><!></div>'), Ed = /* @__PURE__ */ se('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Wl(n, e) {
  qe(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "notched", 3, !1), a = I(e, "noLabel", 3, !1), s = /* @__PURE__ */ mt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, o = /* @__PURE__ */ de(void 0), d = /* @__PURE__ */ de(void 0), c = Re({}), v = Re({}), f;
  Fe(() => {
    l(d) !== f && (l(d) ? (l(d).addStyle("transition-duration", "0s"), p("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      l(d) && l(d).removeStyle("transition-duration");
    })) : h("mdc-notched-outline--upgraded"), f = l(d));
  }), pe("SMUI:floating-label:mount", (_) => {
    X(d, _, !0);
  }), pe("SMUI:floating-label:unmount", () => {
    X(d, void 0);
  }), Dt(() => (X(
    o,
    new rd({
      addClass: p,
      removeClass: h,
      setNotchWidthProperty: (_) => g("width", _ + "px"),
      removeNotchWidthProperty: () => m("width")
    }),
    !0
  ), l(o).init(), () => {
    var _;
    (_ = l(o)) == null || _.destroy();
  }));
  function p(_) {
    c[_] || (c[_] = !0);
  }
  function h(_) {
    (!(_ in c) || c[_]) && (c[_] = !1);
  }
  function g(_, C) {
    v[_] != C && (C === "" || C == null ? delete v[_] : v[_] = C);
  }
  function m(_) {
    _ in v && delete v[_];
  }
  function E(_) {
    var C;
    (C = l(o)) == null || C.notch(_);
  }
  function w() {
    var _;
    (_ = l(o)) == null || _.closeNotch();
  }
  function S() {
    return u;
  }
  var A = { notch: E, closeNotch: w, getElement: S }, L = Ed();
  ot(L, (_) => ({ class: _, ...s }), [
    () => et({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": r(),
      "mdc-notched-outline--no-label": a(),
      ...c,
      [i()]: !0
    })
  ]);
  var x = z(Q(L), 2);
  {
    var T = (_) => {
      var C = yd(), V = Q(C);
      Ce(V, () => e.children ?? be), He((ee) => Hl(C, ee), [
        () => Object.entries(v).map(([ee, P]) => `${ee}: ${P};`).join(" ")
      ]), O(_, C);
    };
    ae(x, (_) => {
      a() || _(T);
    });
  }
  return De(L, (_) => u = _, () => u), Qe(L, (_, C) => te == null ? void 0 : te(_, C), t), O(n, L), We(A);
}
function ns(n, e) {
  qe(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "component", 3, ts), a = I(e, "tag", 3, "div"), s = I(e, "_smuiClass", 3, ""), u = I(e, "_smuiClassMap", 23, () => ({})), o = I(e, "_smuiContexts", 19, () => ({})), d = I(e, "_smuiProps", 19, () => ({})), c = /* @__PURE__ */ mt(e, [
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
  ]), v;
  const f = [];
  Object.entries(u()).forEach(([E, w]) => {
    const S = Te(w);
    S && "subscribe" in S && f.push(S.subscribe((A) => {
      u()[E] = A;
    }));
  });
  for (let E in o())
    o().hasOwnProperty(E) && pe(E, o()[E]);
  si(() => {
    for (const E of f)
      E();
  });
  function p() {
    return v.getElement();
  }
  var h = { getElement: p }, g = ve(), m = ne(g);
  {
    let E = /* @__PURE__ */ ue(() => et({
      [s()]: !0,
      ...u(),
      [i()]: !0
    }));
    $a(m, r, (w, S) => {
      De(
        S(w, $e(
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
            children: (A, L) => {
              var x = ve(), T = ne(x);
              Ce(T, () => e.children ?? be), O(A, x);
            },
            $$slots: { default: !0 }
          }
        )),
        (A) => v = A,
        () => v
      );
    });
  }
  return O(n, g), We(h);
}
function Ad(n, e) {
  qe(e, !0);
  let t = /* @__PURE__ */ mt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return De(
    ns(n, $e({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (s, u) => {
        var o = ve(), d = ne(o);
        Ce(d, () => e.children ?? be), O(s, o);
      },
      $$slots: { default: !0 }
    })),
    (s) => i = s,
    () => i
  ), We(a);
}
function Sd(n, e) {
  qe(e, !0);
  let t = /* @__PURE__ */ mt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return De(
    ns(n, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var o = ve(), d = ne(o);
          Ce(d, () => e.children ?? be), O(s, o);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => i = s,
    () => i
  ), We(a);
}
function Cd(n, e) {
  qe(e, !0);
  let t = /* @__PURE__ */ mt(e, ["$$slots", "$$events", "$$legacy", "children"]), i;
  function r() {
    return i.getElement();
  }
  var a = { getElement: r };
  return De(
    ns(n, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var o = ve(), d = ne(o);
          Ce(d, () => e.children ?? be), O(s, o);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => i = s,
    () => i
  ), We(a);
}
var xd = /* @__PURE__ */ se("<input/>");
function Ld(n, e) {
  qe(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "type", 3, "text"), a = I(e, "placeholder", 3, " "), s = I(e, "value", 15), u = I(e, "files", 15, null), o = I(e, "dirty", 15, !1), d = I(e, "invalid", 15, !1), c = I(e, "updateInvalid", 3, !0), v = I(e, "initialInvalid", 3, !1), f = I(e, "emptyValueNull", 19, () => s() === null), p = I(e, "emptyValueUndefined", 19, () => s() === void 0), h = /* @__PURE__ */ mt(e, [
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
  ]), g, m = Re({}), E = Re({});
  Fe(() => {
    r() === "file" ? delete E.value : E.value = s() == null ? "" : s();
  }), Dt(() => {
    c() && v() && d(V().matches(":invalid"));
  });
  function w(K) {
    return K === "" ? Number.NaN : +K;
  }
  function S(K) {
    if (r() === "file") {
      u(K.currentTarget.files);
      return;
    }
    if (K.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (K.currentTarget.value === "" && p()) {
      s(void 0);
      return;
    }
    switch (r()) {
      case "number":
      case "range":
        s(w(K.currentTarget.value));
        break;
      default:
        s(K.currentTarget.value);
        break;
    }
  }
  function A(K) {
    (r() === "file" || r() === "range") && S(K), o(!0), c() && d(V().matches(":invalid"));
  }
  function L(K) {
    return K in m ? m[K] ?? null : V().getAttribute(K);
  }
  function x(K, k) {
    m[K] !== k && (m[K] = k);
  }
  function T(K) {
    (!(K in m) || m[K] != null) && (m[K] = void 0);
  }
  function _() {
    V().focus();
  }
  function C() {
    V().blur();
  }
  function V() {
    return g;
  }
  var ee = { getAttr: L, addAttr: x, removeAttr: T, focus: _, blur: C, getElement: V }, P = xd(), N = (K) => {
    var k;
    r() !== "file" && S(K), (k = e.oninput) == null || k.call(e, K);
  }, Oe = (K) => {
    var k;
    A(K), (k = e.onchange) == null || k.call(e, K);
  };
  return ot(
    P,
    (K) => ({
      class: K,
      type: r(),
      placeholder: a(),
      ...E,
      ...m,
      ...h,
      oninput: N,
      onchange: Oe
    }),
    [
      () => et({ "mdc-text-field__input": !0, [i()]: !0 })
    ],
    void 0,
    void 0,
    void 0,
    !0
  ), De(P, (K) => g = K, () => g), Qe(P, (K, k) => te == null ? void 0 : te(K, k), t), O(n, P), We(ee);
}
var Td = /* @__PURE__ */ se("<textarea></textarea>");
function wd(n, e) {
  qe(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "style", 3, ""), a = I(e, "value", 15, ""), s = I(e, "dirty", 15, !1), u = I(e, "invalid", 15, !1), o = I(e, "updateInvalid", 3, !0), d = I(e, "initialInvalid", 3, !1), c = I(e, "resizable", 3, !0), v = /* @__PURE__ */ mt(e, [
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
  ]), f, p = Re({});
  Dt(() => {
    o() && d() && u(A().matches(":invalid"));
  });
  function h() {
    s(!0), o() && u(A().matches(":invalid"));
  }
  function g(_) {
    return _ in p ? p[_] ?? null : A().getAttribute(_);
  }
  function m(_, C) {
    p[_] !== C && (p[_] = C);
  }
  function E(_) {
    (!(_ in p) || p[_] != null) && (p[_] = void 0);
  }
  function w() {
    A().focus();
  }
  function S() {
    A().blur();
  }
  function A() {
    return f;
  }
  var L = { getAttr: g, addAttr: m, removeAttr: E, focus: w, blur: S, getElement: A }, x = Td(), T = (_) => {
    var C;
    h(), (C = e.onchange) == null || C.call(e, _);
  };
  return ot(
    x,
    (_) => ({
      class: _,
      style: `${c() ? "" : "resize: none; "}${r()}`,
      ...p,
      ...v,
      onchange: T
    }),
    [
      () => et({ "mdc-text-field__input": !0, [i()]: !0 })
    ]
  ), De(x, (_) => f = _, () => f), Qe(x, (_, C) => te == null ? void 0 : te(_, C), t), Cr(() => qu(x, a)), O(n, x), We(L);
}
var Od = /* @__PURE__ */ se('<span class="mdc-text-field__ripple"></span>'), Md = /* @__PURE__ */ se("<!> <!>", 1), Dd = /* @__PURE__ */ se("<span><!> <!></span>"), Rd = /* @__PURE__ */ se("<!> <!> <!>", 1), Fd = /* @__PURE__ */ se("<label><!> <!> <!> <!> <!> <!> <!></label>"), Pd = /* @__PURE__ */ se("<div><!> <!> <!> <!> <!></div>"), kd = /* @__PURE__ */ se("<!> <!>", 1);
function Ud(n, e) {
  qe(e, !0);
  const { applyPassive: t } = Gl;
  let i = () => {
  };
  function r(M) {
    return M === i;
  }
  let a = I(e, "use", 19, () => []), s = I(e, "class", 3, ""), u = I(e, "style", 3, ""), o = I(e, "ripple", 3, !0), d = I(e, "disabled", 3, !1), c = I(e, "required", 3, !1), v = I(e, "textarea", 3, !1), f = I(e, "variant", 19, () => v() ? "outlined" : "standard"), p = I(e, "noLabel", 3, !1), h = I(e, "type", 3, "text"), g = I(e, "value", 15), m = I(e, "files", 15, i), E = I(e, "invalid", 15, i), w = I(e, "updateInvalid", 19, () => r(E())), S = I(e, "initialInvalid", 3, !1), A = I(e, "dirty", 15, !1), L = I(e, "validateOnValueChange", 19, w), x = I(e, "useNativeValidation", 19, w), T = I(e, "withLeadingIcon", 3, i), _ = I(e, "withTrailingIcon", 3, i), C = I(e, "input", 7), V = I(e, "floatingLabel", 7), ee = I(e, "lineRipple", 7), P = I(e, "notchedOutline", 7), N = /* @__PURE__ */ mt(e, [
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
  const Oe = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !r(m());
  r(m()) && m(null), r(E()) && E(!1);
  let K, k = /* @__PURE__ */ de(void 0), D = new Lr(), G = Re({}), re = Re({}), B = /* @__PURE__ */ de(void 0), fe = /* @__PURE__ */ de(!1), ye = /* @__PURE__ */ de(Re(S())), R = Te("SMUI:addLayoutListener"), q, Y, le = new Promise((M) => Y = M), F, j, U, $;
  const he = /* @__PURE__ */ ue(() => C() && C().getElement());
  Fe(() => {
    (A() || l(ye) || !w()) && l(k) && l(k).isValid() !== !E() && (w() ? E(!l(k).isValid()) : l(k).setValid(!E()));
  }), Fe(() => {
    l(k) && l(k).getValidateOnValueChange() !== L() && l(k).setValidateOnValueChange(r(L()) ? !1 : L());
  }), Fe(() => {
    l(k) && l(k).setUseNativeValidation(r(x()) ? !0 : x());
  }), Fe(() => {
    l(k) && l(k).setDisabled(d());
  });
  let nt = g();
  Fe(() => {
    if (l(k) && Oe && nt !== g()) {
      nt = g();
      const M = `${g() == null ? "" : g()}`;
      l(k).getValue() !== M && l(k).setValue(M);
    }
  }), R && (q = R(ke)), pe("SMUI:textfield:leading-icon:mount", (M) => {
    F = M;
  }), pe("SMUI:textfield:leading-icon:unmount", () => {
    F = void 0;
  }), pe("SMUI:textfield:trailing-icon:mount", (M) => {
    j = M;
  }), pe("SMUI:textfield:trailing-icon:unmount", () => {
    j = void 0;
  }), pe("SMUI:textfield:helper-text:id", (M) => {
    X(B, M, !0);
  }), pe("SMUI:textfield:helper-text:mount", (M) => {
    U = M;
  }), pe("SMUI:textfield:helper-text:unmount", () => {
    X(B, void 0), U = void 0;
  }), pe("SMUI:textfield:character-counter:mount", (M) => {
    $ = M;
  }), pe("SMUI:textfield:character-counter:unmount", () => {
    $ = void 0;
  }), Dt(() => {
    var M;
    if (X(
      k,
      new hd(
        {
          // getRootAdapterMethods_
          addClass: ce,
          removeClass: _e,
          hasClass: oe,
          registerTextFieldInteractionHandler: (H, ge) => D.on(Ae(), H, ge),
          deregisterTextFieldInteractionHandler: (H, ge) => D.off(Ae(), H, ge),
          registerValidationAttributeChangeHandler: (H) => {
            const ge = (Ct) => Ct.map((Ut) => Ut.attributeName).filter((Ut) => Ut), Xe = new MutationObserver((Ct) => {
              x() && H(ge(Ct));
            }), st = { attributes: !0 };
            return C() && Xe.observe(C().getElement(), st), Xe;
          },
          deregisterValidationAttributeChangeHandler: (H) => {
            H.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var H;
            return ((H = C()) == null ? void 0 : H.getElement()) ?? null;
          },
          setInputAttr: (H, ge) => {
            var Xe;
            (Xe = C()) == null || Xe.addAttr(H, ge);
          },
          removeInputAttr: (H) => {
            var ge;
            (ge = C()) == null || ge.removeAttr(H);
          },
          isFocused: () => {
            var H;
            return document.activeElement === ((H = C()) == null ? void 0 : H.getElement());
          },
          registerInputInteractionHandler: (H, ge) => {
            var st;
            const Xe = (st = C()) == null ? void 0 : st.getElement();
            if (Xe) {
              const Ct = t();
              D.on(Xe, H, ge, typeof Ct == "boolean" ? { capture: Ct } : Ct);
            }
          },
          deregisterInputInteractionHandler: (H, ge) => {
            var st;
            const Xe = (st = C()) == null ? void 0 : st.getElement();
            Xe && D.off(Xe, H, ge);
          },
          // getLabelAdapterMethods_
          floatLabel: (H) => V() && V().float(H),
          getLabelWidth: () => V() ? V().getWidth() : 0,
          hasLabel: () => !!V(),
          shakeLabel: (H) => V() && V().shake(H),
          setLabelRequired: (H) => V() && V().setRequired(H),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => ee() && ee().activate(),
          deactivateLineRipple: () => ee() && ee().deactivate(),
          setLineRippleTransformOrigin: (H) => ee() && ee().setRippleCenter(H),
          // getOutlineAdapterMethods_
          closeOutline: () => P() && P().closeNotch(),
          hasOutline: () => !!P(),
          notchOutline: (H) => P() && P().notch(H)
        },
        {
          get helperText() {
            return U;
          },
          get characterCounter() {
            return $;
          },
          get leadingIcon() {
            return F;
          },
          get trailingIcon() {
            return j;
          }
        }
      ),
      !0
    ), Oe) {
      if (C() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (M = l(k)) == null || M.init();
    } else
      Ol().then(() => {
        var H;
        if (C() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (H = l(k)) == null || H.init();
      });
    return Y(), () => {
      var H;
      (H = l(k)) == null || H.destroy(), D.clear();
    };
  }), si(() => {
    q && q();
  });
  function oe(M) {
    return M in G ? G[M] ?? null : Ae().classList.contains(M);
  }
  function ce(M) {
    G[M] || (G[M] = !0);
  }
  function _e(M) {
    (!(M in G) || G[M]) && (G[M] = !1);
  }
  function Ye(M, H) {
    re[M] != H && (H === "" || H == null ? delete re[M] : re[M] = H);
  }
  function Pt() {
    var M;
    (M = C()) == null || M.focus();
  }
  function kt() {
    var M;
    (M = C()) == null || M.blur();
  }
  function ke() {
    if (l(k)) {
      const M = l(k).shouldFloat;
      l(k).notchOutline(M);
    }
  }
  function Ae() {
    return K;
  }
  var Ne = { focus: Pt, blur: kt, layout: ke, getElement: Ae }, It = kd(), oi = ne(It);
  {
    var Wn = (M) => {
      var H = Fd();
      ot(H, (Me, Be, Ue) => ({ class: Me, style: Be, for: void 0, ...Ue }), [
        () => et({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": d(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": p() || e.label == null,
          "mdc-text-field--label-floating": l(fe) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": r(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": r(_()) ? e.trailingIcon : _(),
          "mdc-text-field--with-internal-counter": v() && e.internalCounter,
          "mdc-text-field--invalid": E(),
          ...G,
          [s()]: !0
        }),
        () => Object.entries(re).map(([Me, Be]) => `${Me}: ${Be};`).concat([u()]).join(" "),
        () => Fa(N, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var ge = Q(H);
      {
        var Xe = (Me) => {
          var Be = Md(), Ue = ne(Be);
          {
            var Lt = (ct) => {
              var _t = Od();
              O(ct, _t);
            };
            ae(Ue, (ct) => {
              f() === "filled" && ct(Lt);
            });
          }
          var on = z(Ue, 2);
          {
            var Ve = (ct) => {
              {
                let _t = /* @__PURE__ */ ue(() => l(fe) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Pe = /* @__PURE__ */ ue(() => pt(N, "label$"));
                De(
                  zr(ct, $e(
                    {
                      get floatAbove() {
                        return l(_t);
                      },
                      get required() {
                        return c();
                      },
                      wrapped: !0
                    },
                    () => l(Pe),
                    {
                      children: (bt, On) => {
                        var Yt = ve(), ft = ne(Yt);
                        {
                          var Tt = (zt) => {
                          }, Zt = (zt) => {
                            var Jt = Je();
                            He(() => Ee(Jt, e.label)), O(zt, Jt);
                          }, un = (zt) => {
                            var Jt = ve(), Nt = ne(Jt);
                            Ce(Nt, () => e.label), O(zt, Jt);
                          };
                          ae(ft, (zt) => {
                            e.label == null ? zt(Tt) : typeof e.label == "string" ? zt(Zt, 1) : zt(un, -1);
                          });
                        }
                        O(bt, Yt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (bt) => V(bt),
                  () => V()
                );
              }
            };
            ae(on, (ct) => {
              !p() && e.label != null && ct(Ve);
            });
          }
          O(Me, Be);
        };
        ae(ge, (Me) => {
          !v() && f() !== "outlined" && Me(Xe);
        });
      }
      var st = z(ge, 2);
      {
        var Ct = (Me) => {
          {
            let Be = /* @__PURE__ */ ue(() => p() || e.label == null), Ue = /* @__PURE__ */ ue(() => pt(N, "outline$"));
            De(
              Wl(Me, $e(
                {
                  get noLabel() {
                    return l(Be);
                  }
                },
                () => l(Ue),
                {
                  children: (Lt, on) => {
                    var Ve = ve(), ct = ne(Ve);
                    {
                      var _t = (Pe) => {
                        {
                          let bt = /* @__PURE__ */ ue(() => l(fe) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), On = /* @__PURE__ */ ue(() => pt(N, "label$"));
                          De(
                            zr(Pe, $e(
                              {
                                get floatAbove() {
                                  return l(bt);
                                },
                                get required() {
                                  return c();
                                },
                                wrapped: !0
                              },
                              () => l(On),
                              {
                                children: (Yt, ft) => {
                                  var Tt = ve(), Zt = ne(Tt);
                                  {
                                    var un = (Nt) => {
                                    }, zt = (Nt) => {
                                      var ui = Je();
                                      He(() => Ee(ui, e.label)), O(Nt, ui);
                                    }, Jt = (Nt) => {
                                      var ui = ve(), ir = ne(ui);
                                      Ce(ir, () => e.label), O(Nt, ui);
                                    };
                                    ae(Zt, (Nt) => {
                                      e.label == null ? Nt(un) : typeof e.label == "string" ? Nt(zt, 1) : Nt(Jt, -1);
                                    });
                                  }
                                  O(Yt, Tt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Yt) => V(Yt),
                            () => V()
                          );
                        }
                      };
                      ae(ct, (Pe) => {
                        !p() && e.label != null && Pe(_t);
                      });
                    }
                    O(Lt, Ve);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Lt) => P(Lt),
              () => P()
            );
          }
        };
        ae(st, (Me) => {
          (v() || f() === "outlined") && Me(Ct);
        });
      }
      var Ut = z(st, 2);
      Fr(Ut, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Me, Be) => {
          var Ue = ve(), Lt = ne(Ue);
          Ce(Lt, () => e.leadingIcon ?? be), O(Me, Ue);
        },
        $$slots: { default: !0 }
      });
      var Ri = z(Ut, 2);
      Ce(Ri, () => e.children ?? be);
      var Ze = z(Ri, 2);
      {
        var xt = (Me) => {
          var Be = Dd(), Ue = Q(Be);
          {
            let on = /* @__PURE__ */ ue(() => pt(N, "input$"));
            De(
              wd(Ue, $e(
                {
                  get disabled() {
                    return d();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return w();
                  },
                  get initialInvalid() {
                    return l(ye);
                  },
                  get "aria-controls"() {
                    return l(B);
                  },
                  get "aria-describedby"() {
                    return l(B);
                  }
                },
                () => l(on),
                {
                  onblur: (Ve) => {
                    var ct;
                    X(fe, !1), X(ye, !0), Et(Ae(), "blur", Ve), (ct = e.input$onblur) == null || ct.call(e, Ve);
                  },
                  onfocus: (Ve) => {
                    var ct;
                    X(fe, !0), Et(Ae(), "focus", Ve), (ct = e.input$onfocus) == null || ct.call(e, Ve);
                  },
                  get value() {
                    return g();
                  },
                  set value(Ve) {
                    g(Ve);
                  },
                  get dirty() {
                    return A();
                  },
                  set dirty(Ve) {
                    A(Ve);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(Ve) {
                    E(Ve);
                  }
                }
              )),
              (Ve) => C(Ve),
              () => C()
            );
          }
          var Lt = z(Ue, 2);
          Ce(Lt, () => e.internalCounter ?? be), He((on) => jn(Be, 1, on), [
            () => Ul(et({
              "mdc-text-field__resizer": !("input$resizable" in N) || e.input$resizable
            }))
          ]), O(Me, Be);
        }, Ht = (Me) => {
          var Be = Rd(), Ue = ne(Be);
          {
            var Lt = (_t) => {
              var Pe = ve(), bt = ne(Pe);
              {
                var On = (ft) => {
                  Sd(ft, {
                    children: (Tt, Zt) => {
                      var un = Je();
                      He(() => Ee(un, e.prefix)), O(Tt, un);
                    },
                    $$slots: { default: !0 }
                  });
                }, Yt = (ft) => {
                  var Tt = ve(), Zt = ne(Tt);
                  Ce(Zt, () => e.prefix ?? be), O(ft, Tt);
                };
                ae(bt, (ft) => {
                  typeof e.prefix == "string" ? ft(On) : ft(Yt, -1);
                });
              }
              O(_t, Pe);
            };
            ae(Ue, (_t) => {
              e.prefix != null && _t(Lt);
            });
          }
          var on = z(Ue, 2);
          {
            let _t = /* @__PURE__ */ ue(() => pt(N, "input$"));
            De(
              Ld(on, $e(
                {
                  get type() {
                    return h();
                  },
                  get disabled() {
                    return d();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return w();
                  },
                  get initialInvalid() {
                    return l(ye);
                  },
                  get "aria-controls"() {
                    return l(B);
                  },
                  get "aria-describedby"() {
                    return l(B);
                  }
                },
                () => p() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => l(_t),
                {
                  onblur: (Pe) => {
                    var bt;
                    X(fe, !1), X(ye, !0), Et(Ae(), "blur", Pe), (bt = e.input$onblur) == null || bt.call(e, Pe);
                  },
                  onfocus: (Pe) => {
                    var bt;
                    X(fe, !0), Et(Ae(), "focus", Pe), (bt = e.input$onfocus) == null || bt.call(e, Pe);
                  },
                  get value() {
                    return g();
                  },
                  set value(Pe) {
                    g(Pe);
                  },
                  get files() {
                    return m();
                  },
                  set files(Pe) {
                    m(Pe);
                  },
                  get dirty() {
                    return A();
                  },
                  set dirty(Pe) {
                    A(Pe);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(Pe) {
                    E(Pe);
                  }
                }
              )),
              (Pe) => C(Pe),
              () => C()
            );
          }
          var Ve = z(on, 2);
          {
            var ct = (_t) => {
              var Pe = ve(), bt = ne(Pe);
              {
                var On = (ft) => {
                  Cd(ft, {
                    children: (Tt, Zt) => {
                      var un = Je();
                      He(() => Ee(un, e.suffix)), O(Tt, un);
                    },
                    $$slots: { default: !0 }
                  });
                }, Yt = (ft) => {
                  var Tt = ve(), Zt = ne(Tt);
                  Ce(Zt, () => e.suffix ?? be), O(ft, Tt);
                };
                ae(bt, (ft) => {
                  typeof e.suffix == "string" ? ft(On) : ft(Yt, -1);
                });
              }
              O(_t, Pe);
            };
            ae(Ve, (_t) => {
              e.suffix != null && _t(ct);
            });
          }
          O(Me, Be);
        };
        ae(Ze, (Me) => {
          v() && typeof g() == "string" ? Me(xt) : Me(Ht, -1);
        });
      }
      var Xn = z(Ze, 2);
      Fr(Xn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Me, Be) => {
          var Ue = ve(), Lt = ne(Ue);
          Ce(Lt, () => e.trailingIcon ?? be), O(Me, Ue);
        },
        $$slots: { default: !0 }
      });
      var Tr = z(Xn, 2);
      {
        var Kn = (Me) => {
          {
            let Be = /* @__PURE__ */ ue(() => pt(N, "ripple$"));
            De(ql(Me, $e(() => l(Be))), (Ue) => ee(Ue), () => ee());
          }
        };
        ae(Tr, (Me) => {
          !v() && f() !== "outlined" && o() && Me(Kn);
        });
      }
      De(H, (Me) => K = Me, () => K), Qe(H, (Me, Be) => En == null ? void 0 : En(Me, Be), () => ({
        ripple: !v() && f() === "filled",
        unbounded: !1,
        addClass: ce,
        removeClass: _e,
        addStyle: Ye,
        eventTarget: l(he),
        activeTarget: l(he),
        initPromise: le
      })), Qe(H, (Me, Be) => te == null ? void 0 : te(Me, Be), a), O(M, H);
    }, nr = (M) => {
      var H = Pd();
      ot(H, (Ze, xt, Ht) => ({ class: Ze, style: xt, ...Ht }), [
        () => et({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": d(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": p() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": E(),
          ...G,
          [s()]: !0
        }),
        () => Object.entries(re).map(([Ze, xt]) => `${Ze}: ${xt};`).concat([u()]).join(" "),
        () => Fa(N, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var ge = Q(H);
      {
        var Xe = (Ze) => {
          var xt = ve(), Ht = ne(xt);
          Ce(Ht, () => e.label ?? be), O(Ze, xt);
        };
        ae(ge, (Ze) => {
          typeof e.label != "string" && Ze(Xe);
        });
      }
      var st = z(ge, 2);
      Fr(st, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ze, xt) => {
          var Ht = ve(), Xn = ne(Ht);
          Ce(Xn, () => e.leadingIcon ?? be), O(Ze, Ht);
        },
        $$slots: { default: !0 }
      });
      var Ct = z(st, 2);
      Ce(Ct, () => e.children ?? be);
      var Ut = z(Ct, 2);
      Fr(Ut, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ze, xt) => {
          var Ht = ve(), Xn = ne(Ht);
          Ce(Xn, () => e.trailingIcon ?? be), O(Ze, Ht);
        },
        $$slots: { default: !0 }
      });
      var Ri = z(Ut, 2);
      Ce(Ri, () => e.line ?? be), De(H, (Ze) => K = Ze, () => K), Qe(H, (Ze, xt) => En == null ? void 0 : En(Ze, xt), () => ({
        ripple: o(),
        unbounded: !1,
        addClass: ce,
        removeClass: _e,
        addStyle: Ye
      })), Qe(H, (Ze, xt) => te == null ? void 0 : te(Ze, xt), a), O(M, H);
    };
    ae(oi, (M) => {
      Oe ? M(Wn) : M(nr, -1);
    });
  }
  var Z = z(oi, 2);
  {
    var J = (M) => {
      {
        let H = /* @__PURE__ */ ue(() => pt(N, "helperLine$"));
        Ad(M, $e(() => l(H), {
          children: (ge, Xe) => {
            var st = ve(), Ct = ne(st);
            Ce(Ct, () => e.helper ?? be), O(ge, st);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(Z, (M) => {
      e.helper && M(J);
    });
  }
  return O(n, It), We(Ne);
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
var Hd = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Nd = {
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
}, dr = {
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
}, rt;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(rt || (rt = {}));
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
var Zn, Fn, xe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Zn = {}, Zn["" + xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Zn["" + xe.LIST_ITEM_CLASS] = "mdc-list-item", Zn["" + xe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Zn["" + xe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Zn["" + xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Zn["" + xe.ROOT] = "mdc-list";
var ki = (Fn = {}, Fn["" + xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Fn["" + xe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Fn["" + xe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Fn["" + xe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Fn["" + xe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Fn["" + xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Fn["" + xe.ROOT] = "mdc-deprecated-list", Fn), Jn = {
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
    .` + xe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + xe.LIST_ITEM_CLASS + ` a,
    .` + ki[xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ki[xe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + xe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + xe.LIST_ITEM_CLASS + ` a,
    .` + xe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + xe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + ki[xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ki[xe.LIST_ITEM_CLASS] + ` a,
    .` + ki[xe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + ki[xe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, it = {
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
var Bd = ["input", "button", "textarea", "select"], $t = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    Bd.indexOf(t) === -1 && n.preventDefault();
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
function Vd() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function jd(n, e) {
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
function Pa(n, e) {
  var t = n.nextChar, i = n.focusItemAtIndex, r = n.sortedIndexByFirstChar, a = n.focusedItemIndex, s = n.skipFocus, u = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Kl(e);
  }, it.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = Gd(r, a, u, e) : o = zd(r, u, e), o !== -1 && !s && i(o), o;
}
function Gd(n, e, t, i) {
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
function zd(n, e, t) {
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
function Xl(n) {
  return n.typeaheadBuffer.length > 0;
}
function Kl(n) {
  n.typeaheadBuffer = "";
}
function Rs(n, e) {
  var t = n.event, i = n.isTargetListItem, r = n.focusedItemIndex, a = n.focusItemAtIndex, s = n.sortedIndexByFirstChar, u = n.isItemAtIndexDisabled, o = lt(t) === "ArrowLeft", d = lt(t) === "ArrowUp", c = lt(t) === "ArrowRight", v = lt(t) === "ArrowDown", f = lt(t) === "Home", p = lt(t) === "End", h = lt(t) === "Enter", g = lt(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || o || d || c || v || f || p || h)
    return -1;
  var m = !g && t.key.length === 1;
  if (m) {
    $t(t);
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Pa(E, e);
  }
  if (!g)
    return -1;
  i && $t(t);
  var w = i && Xl(e);
  if (w) {
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Pa(E, e);
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
function qd(n) {
  return n instanceof Array;
}
var Wd = ["Alt", "Control", "Meta", "Shift"];
function Fs(n) {
  var e = new Set(n ? Wd.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(i) {
      return e.has(i);
    }) && t.length === e.size;
  };
}
var Xd = (
  /** @class */
  function(n) {
    gn(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = it.UNSET_INDEX, i.focusedItemIndex = it.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = Vd(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Jn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return xe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return it;
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
      if (t !== it.UNSET_INDEX) {
        var i = this.adapter.listItemAtIndexHasClass(t, xe.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = it.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
        var a = this.adapter.listItemAtIndexHasClass(r, xe.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(r, xe.LIST_ITEM_ACTIVATED_CLASS);
        if (a || s) {
          t = r;
          break;
        }
      }
      return t;
    }, e.prototype.setHasTypeahead = function(t) {
      this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Xl(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(t, xe.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, i, r) {
      var a = this, s, u = lt(t) === "ArrowLeft", o = lt(t) === "ArrowUp", d = lt(t) === "ArrowRight", c = lt(t) === "ArrowDown", v = lt(t) === "Home", f = lt(t) === "End", p = lt(t) === "Enter", h = lt(t) === "Spacebar", g = this.isVertical && c || !this.isVertical && d, m = this.isVertical && o || !this.isVertical && u, E = t.key === "A" || t.key === "a", w = Fs(t);
      if (this.adapter.isRootFocused()) {
        if ((m || f) && w([]))
          t.preventDefault(), this.focusLastElement();
        else if ((g || v) && w([]))
          t.preventDefault(), this.focusFirstElement();
        else if (m && w(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var S = this.focusLastElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (g && w(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var S = this.focusFirstElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        }
        if (this.hasTypeahead) {
          var A = {
            event: t,
            focusItemAtIndex: function(T) {
              a.focusItemAtIndex(T);
            },
            focusedItemIndex: -1,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(T) {
              return a.isIndexDisabled(T);
            }
          };
          Rs(A, this.typeaheadState);
        }
        return;
      }
      var L = this.adapter.getFocusedElementIndex();
      if (!(L === -1 && (L = r, L < 0))) {
        if (g && w([]))
          $t(t), this.focusNextElement(L);
        else if (m && w([]))
          $t(t), this.focusPrevElement(L);
        else if (g && w(["Shift"]) && this.isCheckboxList) {
          $t(t);
          var S = this.focusNextElement(L);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (m && w(["Shift"]) && this.isCheckboxList) {
          $t(t);
          var S = this.focusPrevElement(L);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (v && w([]))
          $t(t), this.focusFirstElement();
        else if (f && w([]))
          $t(t), this.focusLastElement();
        else if (v && w(["Control", "Shift"]) && this.isCheckboxList) {
          if ($t(t), this.isIndexDisabled(L))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, L, L);
        } else if (f && w(["Control", "Shift"]) && this.isCheckboxList) {
          if ($t(t), this.isIndexDisabled(L))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(L, this.adapter.getListItemCount() - 1, L);
        } else if (E && w(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === it.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((p || h) && w([])) {
          if (i) {
            var x = t.target;
            if (x && x.tagName === "A" && p || ($t(t), this.isIndexDisabled(L)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(L, !1), this.adapter.notifyAction(L));
          }
        } else if ((p || h) && w(["Shift"]) && this.isCheckboxList) {
          var x = t.target;
          if (x && x.tagName === "A" && p || ($t(t), this.isIndexDisabled(L)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : L, L, L), this.adapter.notifyAction(L));
        }
        if (this.hasTypeahead) {
          var A = {
            event: t,
            focusItemAtIndex: function(_) {
              a.focusItemAtIndex(_);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(_) {
              return a.isIndexDisabled(_);
            }
          };
          Rs(A, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, i, r) {
      var a, s = Fs(r);
      t !== it.UNSET_INDEX && (this.isIndexDisabled(t) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, i), this.adapter.notifyAction(t)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : t, t, t), this.adapter.notifyAction(t))));
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
      this.isIndexValid(t, !1) && (i ? (this.adapter.removeClassForElementIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Jn.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Jn.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === t && !i.forceUpdate)) {
        var r = xe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = xe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== it.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== it.UNSET_INDEX && this.adapter.addClassForElementIndex(t, r), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === it.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, Jn.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, r = i ? Jn.ARIA_CURRENT : Jn.ARIA_SELECTED;
      if (this.selectedIndex !== it.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), t !== it.UNSET_INDEX) {
        var a = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, r, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Jn.ARIA_SELECTED : Jn.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, i) {
      i === void 0 && (i = {});
      var r = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !i.forceUpdate) && (this.selectedIndex !== it.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), this.adapter.setAttributeForElementIndex(t, r, "true"), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, i) {
      i === void 0 && (i = {});
      for (var r = this.selectedIndex, a = i.isUserInteraction ? new Set(r === it.UNSET_INDEX ? [] : r) : null, s = this.getSelectionAttribute(), u = [], o = 0; o < this.adapter.getListItemCount(); o++) {
        var d = a == null ? void 0 : a.has(o), c = t.indexOf(o) >= 0;
        c !== d && u.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, c), this.adapter.setAttributeForElementIndex(o, s, c ? "true" : "false");
      }
      this.selectedIndex = t, i.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(t, i, r) {
      this.lastSelectedIndex = r;
      for (var a = new Set(this.selectedIndex === it.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(r)), u = Es([t, i].sort(), 2), o = u[0], d = u[1], c = this.getSelectionAttribute(), v = [], f = o; f <= d; f++)
        if (!this.isIndexDisabled(f)) {
          var p = a.has(f);
          s !== p && (v.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, c, "" + s), s ? a.add(f) : a.delete(f));
        }
      v.length && (this.selectedIndex = Qu([], Es(a)), this.adapter.notifySelectionChange(v));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === it.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== it.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== it.UNSET_INDEX ? this.selectedIndex : qd(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, i) {
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
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === it.UNSET_INDEX;
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
      var u = this.selectedIndex === it.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return Pa(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return jd(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Kl(this.typeaheadState);
    }, e;
  }(mn)
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
var Ql = (
  /** @class */
  function(n) {
    gn(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = Li.TOP_START, i.originCorner = Li.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Hd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Nd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return dr;
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
      this.originCorner = this.originCorner ^ rt.RIGHT;
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
        }, dr.TRANSITION_OPEN_DURATION);
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
          }, dr.TRANSITION_CLOSE_DURATION);
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
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), a = this.hasBit(i, rt.BOTTOM) ? "bottom" : "top", s = this.hasBit(i, rt.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), d = this.measurements, c = d.anchorSize, v = d.surfaceSize, f = (t = {}, t[s] = u, t[a] = o, t);
      c.width / v.width > dr.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, rt.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var t = this.originCorner, i = this.measurements, r = i.viewportDistance, a = i.anchorSize, s = i.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, rt.BOTTOM), d, c;
      o ? (d = r.top - u + this.anchorMargin.bottom, c = r.bottom - u - this.anchorMargin.bottom) : (d = r.top - u + this.anchorMargin.top, c = r.bottom - u + a.height - this.anchorMargin.top);
      var v = c - s.height > 0;
      !v && d > c + this.openBottomBias && (t = this.setBit(t, rt.BOTTOM));
      var f = this.adapter.isRtl(), p = this.hasBit(this.anchorCorner, rt.FLIP_RTL), h = this.hasBit(this.anchorCorner, rt.RIGHT) || this.hasBit(t, rt.RIGHT), g = !1;
      f && p ? g = !h : g = h;
      var m, E;
      g ? (m = r.left + a.width + this.anchorMargin.right, E = r.right - this.anchorMargin.right) : (m = r.left + this.anchorMargin.left, E = r.right + a.width - this.anchorMargin.left);
      var w = m - s.width > 0, S = E - s.width > 0, A = this.hasBit(t, rt.FLIP_RTL) && this.hasBit(t, rt.RIGHT);
      return S && A && f || !w && A ? t = this.unsetBit(t, rt.RIGHT) : (w && g && f || w && !g && h || !S && m >= E) && (t = this.setBit(t, rt.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, r = 0, a = this.hasBit(t, rt.BOTTOM), s = this.hasBit(this.anchorCorner, rt.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (r = i.top + this.anchorMargin.top - u, s || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, s && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, rt.RIGHT), a = this.hasBit(this.anchorCorner, rt.RIGHT);
      if (r) {
        var s = a ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, rt.BOTTOM), a = this.hasBit(this.anchorCorner, rt.BOTTOM), s = 0;
      return r ? s = a ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var i, r, a = this.measurements, s = a.windowScroll, u = a.viewportDistance, o = a.surfaceSize, d = a.viewportSize, c = Object.keys(t);
      try {
        for (var v = vn(c), f = v.next(); !f.done; f = v.next()) {
          var p = f.value, h = t[p] || 0;
          if (this.isHorizontallyCenteredOnViewport && (p === "left" || p === "right")) {
            t[p] = (d.width - o.width) / 2;
            continue;
          }
          h += u[p], this.isFixedPosition || (p === "top" ? h += s.y : p === "bottom" ? h -= s.y : p === "left" ? h += s.x : h -= s.x), t[p] = h;
        }
      } catch (g) {
        i = { error: g };
      } finally {
        try {
          f && !f.done && (r = v.return) && r.call(v);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var t = this, i = this.adapter.isFocused(), r = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = r.activeElement && this.adapter.isElementInContainer(r.activeElement);
      (i || a) && setTimeout(function() {
        t.adapter.restoreFocus();
      }, dr.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(t, i) {
      return !!(t & i);
    }, e.prototype.setBit = function(t, i) {
      return t | i;
    }, e.prototype.unsetBit = function(t, i) {
      return t ^ i;
    }, e.prototype.isFinite = function(t) {
      return typeof t == "number" && isFinite(t);
    }, e;
  }(mn)
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
var Bi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Ui = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Kd = {
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
var Qd = (
  /** @class */
  function(n) {
    gn(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = Ni.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Bi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ui;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Kd;
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
        var a = this.adapter.getAttributeFromElementAtIndex(r, Ui.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = i.adapter.getElementIndex(t);
          s >= 0 && i.adapter.isSelectableItemAtIndex(s) && i.setSelectedIndex(s);
        }, Ql.numbers.TRANSITION_CLOSE_DURATION);
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
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, Ui.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, Bi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Bi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Ui.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, i) {
      this.validatedIndex(t), i ? (this.adapter.removeClassFromElementAtIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Ui.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Ui.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(t) {
      var i = this.adapter.getMenuItemCount(), r = t >= 0 && t < i;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(mn)
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
var Ke = {
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
var Yd = (
  /** @class */
  function(n) {
    gn(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = hi.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ke;
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
      this.disabled = t, this.disabled ? (this.adapter.addClass(Ke.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(Ke.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(Ke.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, i = this.adapter.hasClass(Ke.FOCUSED), r = t || i, a = this.adapter.hasClass(Ke.REQUIRED);
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
      this.adapter.removeClass(Ke.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(Ke.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(Ke.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(Ke.FOCUSED))) {
        var i = lt(t) === Ie.ENTER, r = lt(t) === Ie.SPACEBAR, a = lt(t) === Ie.ARROW_UP, s = lt(t) === Ie.ARROW_DOWN, u = t.ctrlKey || t.metaKey;
        if (!u && (!r && t.key && t.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var o = r ? " " : t.key, d = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
          d >= 0 && this.setSelectedIndex(d), t.preventDefault();
          return;
        }
        !i && !r && !a && !s || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var i = this.adapter.hasClass(Ke.FOCUSED);
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
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(Ke.INVALID), this.adapter.removeMenuClass(Ke.MENU_INVALID)) : (this.adapter.addClass(Ke.INVALID), this.adapter.addMenuClass(Ke.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(Ke.REQUIRED) && !this.adapter.hasClass(Ke.DISABLED) ? this.getSelectedIndex() !== hi.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(Ke.REQUIRED) : this.adapter.removeClass(Ke.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(Li.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(Ke.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(Ke.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(Ke.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(Ke.REQUIRED);
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
  }(mn)
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
}, Pn = {
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
var Zd = (
  /** @class */
  function(n) {
    gn(e, n);
    function e(t) {
      return n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Pn;
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
      t ? this.adapter.addClass(Pn.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(Pn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass(Pn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(Pn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(Pn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(Pn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var i = this.adapter.hasClass(Pn.HELPER_TEXT_VALIDATION_MSG);
      if (i) {
        var r = this.adapter.hasClass(Pn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !t || r;
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
  }(mn)
), Jd = /* @__PURE__ */ se("<div><!></div>");
function $d(n, e) {
  qe(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "style", 3, ""), a = I(e, "static", 3, !1), s = I(e, "anchor", 3, !0), u = I(e, "fixed", 3, !1), o = I(e, "open", 31, () => Re(a())), d = I(e, "managed", 3, !1), c = I(e, "fullWidth", 3, !1), v = I(e, "quickOpen", 3, !1), f = I(e, "anchorElement", 15), p = I(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), h = I(e, "maxHeight", 3, 0), g = I(e, "horizontallyCenteredOnViewport", 3, !1), m = I(e, "openBottomBias", 3, 0), E = I(e, "neverRestoreFocus", 3, !1), w = /* @__PURE__ */ mt(e, [
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
  ]), S, A = /* @__PURE__ */ de(void 0), L = Re({}), x = Re({}), T = /* @__PURE__ */ de(void 0);
  pe("SMUI:list:role", "menu"), pe("SMUI:list:item:role", "menuitem"), Fe(() => {
    var F, j;
    S && s() && !((F = S.parentElement) != null && F.classList.contains("mdc-menu-surface--anchor")) && ((j = S.parentElement) == null || j.classList.add("mdc-menu-surface--anchor"), f(S.parentElement ?? void 0));
  }), Fe(() => {
    l(A) && l(A).isOpen() !== o() && (o() ? l(A).open() : l(A).close());
  }), Fe(() => {
    l(A) && l(A).setQuickOpen(v());
  }), Fe(() => {
    l(A) && l(A).setFixedPosition(u());
  }), Fe(() => {
    l(A) && l(A).setMaxHeight(h());
  }), Fe(() => {
    l(A) && l(A).setIsHorizontallyCenteredOnViewport(g());
  });
  const _ = Li;
  Fe(() => {
    l(A) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? l(A).setAnchorCorner(_[e.anchorCorner]) : l(A).setAnchorCorner(e.anchorCorner));
  }), Fe(() => {
    l(A) && l(A).setAnchorMargin(p());
  }), Fe(() => {
    l(A) && l(A).setOpenBottomBias(m());
  });
  const C = Te("SMUI:menu-surface:mount"), V = Te("SMUI:menu-surface:unmount");
  Dt(() => {
    X(
      A,
      new Ql({
        addClass: P,
        removeClass: N,
        hasClass: ee,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          d() || o(a()), o() || Et(ye(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          d() || o(a()), o() || Et(ye(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          d() || o(!0), o() && Et(ye(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          o() || Et(ye(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (j) => ye().contains(j),
        isRtl: () => getComputedStyle(ye()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (j) => {
          x["transform-origin"] = j;
        },
        isFocused: () => document.activeElement === ye(),
        saveFocus: () => {
          X(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !E() && (!S || ye().contains(document.activeElement)) && l(T) && document.contains(l(T)) && "focus" in l(T) && l(T).focus();
        },
        getInnerDimensions: () => ({
          width: ye().offsetWidth,
          height: ye().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (j) => {
          x.left = "left" in j ? `${j.left}px` : "", x.right = "right" in j ? `${j.right}px` : "", x.top = "top" in j ? `${j.top}px` : "", x.bottom = "bottom" in j ? `${j.bottom}px` : "";
        },
        setMaxHeight: (j) => {
          x["max-height"] = j;
        }
      }),
      !0
    );
    const F = {
      get open() {
        return o();
      },
      set open(j) {
        o(j);
      },
      closeProgrammatic: Oe
    };
    return C && C(F), l(A).init(), () => {
      var U, $;
      V && V(F);
      const j = l(A).isHoistedElement;
      (U = l(A)) == null || U.destroy(), j && (($ = ye().parentNode) == null || $.removeChild(ye()));
    };
  }), si(() => {
    var F;
    s() && ye() && ((F = ye().parentElement) == null || F.classList.remove("mdc-menu-surface--anchor"));
  });
  function ee(F) {
    return F in L ? L[F] : ye().classList.contains(F);
  }
  function P(F) {
    L[F] || (L[F] = !0);
  }
  function N(F) {
    (!(F in L) || L[F]) && (L[F] = !1);
  }
  function Oe(F) {
    var j;
    (j = l(A)) == null || j.close(F), o(!1);
  }
  function K(F) {
    l(A) && o() && !d() && l(A).handleBodyClick(F);
  }
  function k() {
    return o();
  }
  function D(F) {
    o(F);
  }
  function G(F, j) {
    if (l(A) == null)
      throw new Error("Instance is not defined.");
    return l(A).setAbsolutePosition(F, j);
  }
  function re(F) {
    if (l(A) == null)
      throw new Error("Instance is not defined.");
    return l(A).setIsHoisted(F);
  }
  function B() {
    if (l(A) == null)
      throw new Error("Instance is not defined.");
    return l(A).isFixed();
  }
  function fe() {
    if (l(A) == null)
      throw new Error("Instance is not defined.");
    return l(A).flipCornerHorizontally();
  }
  function ye() {
    return S;
  }
  var R = {
    isOpen: k,
    setOpen: D,
    setAbsolutePosition: G,
    setIsHoisted: re,
    isFixed: B,
    flipCornerHorizontally: fe,
    getElement: ye
  }, q = Jd();
  Fl("click", hl.body, K, !0);
  var Y = (F) => {
    var j;
    l(A) && !d() && l(A).handleKeydown(F), (j = e.onkeydown) == null || j.call(e, F);
  };
  ot(
    q,
    (F, j) => ({
      class: F,
      style: j,
      role: "dialog",
      ...w,
      onkeydown: Y
    }),
    [
      () => et({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": c(),
        ...L,
        [i()]: !0
      }),
      () => Object.entries(x).map(([F, j]) => `${F}: ${j};`).concat([r()]).join(" ")
    ]
  );
  var le = Q(q);
  return Ce(le, () => e.children ?? be), De(q, (F) => S = F, () => S), Qe(q, (F, j) => te == null ? void 0 : te(F, j), t), O(n, q), We(R);
}
function ha(n, { addClass: e = (i) => n.classList.add(i), removeClass: t = (i) => n.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function ec(n, e) {
  qe(e, !0);
  const { closest: t } = es;
  let i = I(e, "use", 19, () => []), r = I(e, "class", 3, ""), a = I(e, "open", 15, !1), s = I(e, "anchorElement", 15), u = I(e, "managed", 3, !1), o = /* @__PURE__ */ mt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), d, c = /* @__PURE__ */ de(void 0), v = /* @__PURE__ */ de(void 0), f = /* @__PURE__ */ de(void 0);
  pe("SMUI:menu-surface:mount", (_) => {
    l(v) || X(v, _, !0);
  });
  const p = Te("SMUI:list:mount");
  pe("SMUI:list:mount", (_) => {
    l(f) || X(f, _, !0), p && p(_);
  });
  const h = Te("SMUI:menu:mount"), g = Te("SMUI:menu:unmount");
  Dt(() => (X(
    c,
    new Qd({
      addClassToElementAtIndex: (_, C) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).addClassForElementIndex(_, C);
      },
      removeClassFromElementAtIndex: (_, C) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).removeClassForElementIndex(_, C);
      },
      addAttributeToElementAtIndex: (_, C, V) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).setAttributeForElementIndex(_, C, V);
      },
      removeAttributeFromElementAtIndex: (_, C) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).removeAttributeForElementIndex(_, C);
      },
      getAttributeFromElementAtIndex: (_, C) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        return l(f).getAttributeFromElementIndex(_, C);
      },
      elementContainsClass: (_, C) => _.classList.contains(C),
      closeSurface: (_) => {
        var C;
        u() || ((C = l(v)) == null || C.closeProgrammatic(_), Et(x(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (_) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        return l(f).getOrderedList().map((C) => C.element).indexOf(_);
      },
      notifySelected: (_) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        Et(x(), "SMUIMenuSelected", {
          index: _.index,
          item: l(f).getOrderedList()[_.index].element
        });
      },
      getMenuItemCount: () => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        return l(f).items.length;
      },
      focusItemAtIndex: (_) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        l(f).focusItemAtIndex(_);
      },
      focusListRoot: () => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in l(f).element && l(f).element.focus();
      },
      isSelectableItemAtIndex: (_) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        return !!t(l(f).getOrderedList()[_].element, `.${Bi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (_) => {
        if (l(f) == null)
          throw new Error("List accessor is undefined.");
        const C = l(f).getOrderedList(), V = t(C[_].element, `.${Bi.MENU_SELECTION_GROUP}`), ee = V == null ? void 0 : V.querySelector(`.${Bi.MENU_SELECTED_LIST_ITEM}`);
        return ee ? C.map((P) => P.element).indexOf(ee) : -1;
      }
    }),
    !0
  ), h && h(l(c)), l(c).init(), () => {
    var _;
    g && l(c) && g(l(c)), (_ = l(c)) == null || _.destroy();
  }));
  function m(_) {
    l(c) && l(c).handleKeydown(_);
  }
  function E() {
    return a();
  }
  function w(_) {
    a(_);
  }
  function S(_) {
    if (l(c) == null)
      throw new Error("Instance is undefined.");
    l(c).setDefaultFocusState(_);
  }
  function A() {
    if (l(c) == null)
      throw new Error("Instance is undefined.");
    return l(c).getSelectedIndex();
  }
  function L() {
    return d;
  }
  function x() {
    return d.getElement();
  }
  var T = {
    isOpen: E,
    setOpen: w,
    setDefaultFocusState: S,
    getSelectedIndex: A,
    getMenuSurface: L,
    getElement: x
  };
  {
    let _ = /* @__PURE__ */ ue(() => et({ "mdc-menu": !0, [r()]: !0 }));
    De(
      $d(n, $e(
        {
          get use() {
            return i();
          },
          get class() {
            return l(_);
          },
          get managed() {
            return u();
          }
        },
        () => o,
        {
          onkeydown: (C) => {
            var V;
            m(C), (V = e.onkeydown) == null || V.call(e, C);
          },
          onSMUIMenuSurfaceOpened: (C) => {
            var V;
            l(c) && l(c).handleMenuSurfaceOpened(), (V = e.onSMUIMenuSurfaceOpened) == null || V.call(e, C);
          },
          onSMUIListAction: (C) => {
            var V;
            l(c) && l(f) && l(c).handleItemAction(l(f).getOrderedList()[C.detail.index].element), (V = e.onSMUIListAction) == null || V.call(e, C);
          },
          get open() {
            return a();
          },
          set open(C) {
            a(C);
          },
          get anchorElement() {
            return s();
          },
          set anchorElement(C) {
            s(C);
          },
          children: (C, V) => {
            var ee = ve(), P = ne(ee);
            Ce(P, () => e.children ?? be), O(C, ee);
          },
          $$slots: { default: !0 }
        }
      )),
      (C) => d = C,
      () => d
    );
  }
  return We(T);
}
function tc(n, e) {
  qe(e, !0);
  const { closest: t, matches: i } = es;
  let r = Te("SMUI:list:nav"), a = I(e, "use", 19, () => []), s = I(e, "class", 3, ""), u = I(e, "nonInteractive", 3, !1), o = I(e, "dense", 3, !1), d = I(e, "textualList", 3, !1), c = I(e, "avatarList", 3, !1), v = I(e, "iconList", 3, !1), f = I(e, "imageList", 3, !1), p = I(e, "thumbnailList", 3, !1), h = I(e, "videoList", 3, !1), g = I(e, "twoLine", 3, !1), m = I(e, "threeLine", 3, !1), E = I(e, "vertical", 3, !0), w = I(e, "wrapFocus", 19, () => Te("SMUI:list:wrapFocus") ?? !1), S = I(e, "singleSelection", 3, !1), A = I(e, "disabledItemsFocusable", 3, !1), L = I(e, "selectedIndex", 31, () => -1), x = I(e, "radioList", 3, !1), T = I(e, "checkList", 3, !1), _ = I(e, "hasTypeahead", 3, !1), C = I(e, "component", 3, ts), V = I(e, "tag", 3, r ? "nav" : "ul"), ee = /* @__PURE__ */ mt(e, [
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
  ]), P, N = /* @__PURE__ */ de(void 0), Oe = [], K = Te("SMUI:list:role");
  const k = /* @__PURE__ */ new WeakMap();
  let D = Te("SMUI:dialog:selection"), G = Te("SMUI:addLayoutListener"), re;
  pe("SMUI:list:nonInteractive", u()), pe("SMUI:separator:context", "list"), K || (S() ? (K = "listbox", pe("SMUI:list:item:role", "option")) : x() ? (K = "radiogroup", pe("SMUI:list:item:role", "radio")) : T() ? (K = "group", pe("SMUI:list:item:role", "checkbox")) : (K = "list", pe("SMUI:list:item:role", void 0))), Fe(() => {
    l(N) && l(N).setVerticalOrientation(E());
  }), Fe(() => {
    l(N) && l(N).setWrapFocus(w());
  }), Fe(() => {
    l(N) && l(N).setHasTypeahead(_());
  }), Fe(() => {
    l(N) && l(N).setSingleSelection(S());
  }), Fe(() => {
    l(N) && l(N).setDisabledItemsFocusable(A());
  }), Fe(() => {
    l(N) && S() && ke() !== L() && l(N).setSelectedIndex(L());
  }), G && (re = G(Ye)), pe("SMUI:list:item:mount", (Z) => {
    Oe.push(Z), k.set(Z.element, Z), S() && Z.selected && L(_e(Z.element));
  }), pe("SMUI:list:item:unmount", (Z) => {
    const J = (Z && Oe.findIndex((M) => M === Z)) ?? -1;
    J !== -1 && (Oe.splice(J, 1), k.delete(Z.element));
  });
  const B = Te("SMUI:list:mount"), fe = Te("SMUI:list:unmount");
  Dt(() => {
    X(
      N,
      new Xd({
        addClassForElementIndex: U,
        focusItemAtIndex: Ne,
        getAttributeForElementIndex: (J, M) => {
          var H;
          return ((H = F()[J]) == null ? void 0 : H.getAttr(M)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? F().map((J) => J.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => Oe.length,
        getPrimaryTextAtIndex: ce,
        hasCheckboxAtIndex: (J) => {
          var M;
          return ((M = F()[J]) == null ? void 0 : M.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (J) => {
          var M;
          return ((M = F()[J]) == null ? void 0 : M.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (J) => {
          const M = F()[J];
          return ((M == null ? void 0 : M.hasCheckbox) && M.checked) ?? !1;
        },
        isFocusInsideList: () => P != null && It() !== document.activeElement && It().contains(document.activeElement),
        isRootFocused: () => P != null && document.activeElement === It(),
        listItemAtIndexHasClass: j,
        notifyAction: (J) => {
          L(J), P != null && Et(It(), "SMUIListAction", { index: J });
        },
        notifySelectionChange: (J) => {
          P != null && Et(It(), "SMUIListSelectionChange", { changedIndices: J });
        },
        removeClassForElementIndex: $,
        setAttributeForElementIndex: he,
        setCheckedCheckboxOrRadioAtIndex: (J, M) => {
          F()[J].checked = M;
        },
        setTabIndexForListItemChildren: (J, M) => {
          const H = F()[J];
          Array.prototype.forEach.call(H.element.querySelectorAll("button:not(:disabled), a"), (Xe) => {
            Xe.setAttribute("tabindex", M);
          });
        }
      }),
      !0
    );
    const Z = {
      get element() {
        return It();
      },
      get items() {
        return Oe;
      },
      get typeaheadInProgress() {
        if (!l(N))
          throw new Error("Instance is undefined.");
        return l(N).isTypeaheadInProgress();
      },
      typeaheadMatchItem(J, M) {
        if (!l(N))
          throw new Error("Instance is undefined.");
        return l(N).typeaheadMatchItem(
          J,
          M,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: F,
      focusItemAtIndex: Ne,
      addClassForElementIndex: U,
      removeClassForElementIndex: $,
      setAttributeForElementIndex: he,
      removeAttributeForElementIndex: nt,
      getAttributeFromElementIndex: oe,
      getPrimaryTextAtIndex: ce
    };
    return B && B(Z), l(N).init(), l(N).layout(), () => {
      var J;
      fe && fe(Z), (J = l(N)) == null || J.destroy();
    };
  }), si(() => {
    re && re();
  });
  function ye(Z) {
    l(N) && Z.target && l(N).handleKeydown(Z, Z.target.classList.contains("mdc-deprecated-list-item"), _e(Z.target));
  }
  function R(Z) {
    l(N) && Z.target && l(N).handleFocusIn(_e(Z.target));
  }
  function q(Z) {
    l(N) && Z.target && l(N).handleFocusOut(_e(Z.target));
  }
  function Y(Z) {
    l(N) && Z.target && l(N).handleClick(_e(Z.target), !i(Z.target, 'input[type="checkbox"], input[type="radio"]'), Z);
  }
  function le(Z) {
    if (x() || T()) {
      const J = _e(Z.target);
      if (J !== -1) {
        const M = F()[J];
        M && (x() && !M.checked || T()) && (i(Z.detail.target, 'input[type="checkbox"], input[type="radio"]') || (M.checked = !M.checked), M.activateRipple(), window.requestAnimationFrame(() => {
          M.deactivateRipple();
        }));
      }
    }
  }
  function F() {
    return P == null ? [] : [...It().children].map((Z) => k.get(Z)).filter((Z) => Z && Z._smui_list_item_accessor);
  }
  function j(Z, J) {
    const M = F()[Z];
    return (M && M.hasClass(J)) ?? !1;
  }
  function U(Z, J) {
    const M = F()[Z];
    M && M.addClass(J);
  }
  function $(Z, J) {
    const M = F()[Z];
    M && M.removeClass(J);
  }
  function he(Z, J, M) {
    const H = F()[Z];
    H && H.addAttr(J, M);
  }
  function nt(Z, J) {
    const M = F()[Z];
    M && M.removeAttr(J);
  }
  function oe(Z, J) {
    const M = F()[Z];
    return M ? M.getAttr(J) : null;
  }
  function ce(Z) {
    const J = F()[Z];
    return (J && J.getPrimaryText()) ?? "";
  }
  function _e(Z) {
    const J = t(Z, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return J && i(J, ".mdc-deprecated-list-item") ? F().map((M) => M == null ? void 0 : M.element).indexOf(J) : -1;
  }
  function Ye() {
    if (!l(N))
      throw new Error("Instance is undefined.");
    return l(N).layout();
  }
  function Pt(Z, J) {
    if (!l(N))
      throw new Error("Instance is undefined.");
    return l(N).setEnabled(Z, J);
  }
  function kt() {
    if (!l(N))
      throw new Error("Instance is undefined.");
    return l(N).isTypeaheadInProgress();
  }
  function ke() {
    if (!l(N))
      throw new Error("Instance is undefined.");
    return l(N).getSelectedIndex();
  }
  function Ae() {
    if (!l(N))
      throw new Error("Instance is undefined.");
    return l(N).getFocusedItemIndex();
  }
  function Ne(Z) {
    const J = F()[Z];
    J && "focus" in J.element && J.element.focus();
  }
  function It() {
    return P.getElement();
  }
  var oi = {
    layout: Ye,
    setEnabled: Pt,
    getTypeaheadInProgress: kt,
    getSelectedIndex: ke,
    getFocusedItemIndex: Ae,
    focusItemAtIndex: Ne,
    getElement: It
  }, Wn = ve(), nr = ne(Wn);
  {
    let Z = /* @__PURE__ */ ue(() => et({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": o(),
      "mdc-deprecated-list--textual-list": d(),
      "mdc-deprecated-list--avatar-list": c() || D,
      "mdc-deprecated-list--icon-list": v(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": p(),
      "mdc-deprecated-list--video-list": h(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": m() && !g(),
      [s()]: !0
    }));
    $a(nr, C, (J, M) => {
      De(
        M(J, $e(
          {
            get tag() {
              return V();
            },
            get use() {
              return a();
            },
            get class() {
              return l(Z);
            },
            get role() {
              return K;
            }
          },
          () => ee,
          {
            onkeydown: (H) => {
              var ge;
              ye(H), (ge = e.onkeydown) == null || ge.call(e, H);
            },
            onfocusin: (H) => {
              var ge;
              R(H), (ge = e.onfocusin) == null || ge.call(e, H);
            },
            onfocusout: (H) => {
              var ge;
              q(H), (ge = e.onfocusout) == null || ge.call(e, H);
            },
            onclick: (H) => {
              var ge;
              Y(H), (ge = e.onclick) == null || ge.call(e, H);
            },
            onSMUIAction: (H) => {
              var ge;
              le(H), (ge = e.onSMUIAction) == null || ge.call(e, H);
            },
            children: (H, ge) => {
              var Xe = ve(), st = ne(Xe);
              Ce(st, () => e.children ?? be), O(H, Xe);
            },
            $$slots: { default: !0 }
          }
        )),
        (H) => P = H,
        () => P
      );
    });
  }
  return O(n, Wn), We(oi);
}
let nc = 0;
var ic = /* @__PURE__ */ se('<span class="mdc-deprecated-list-item__ripple"></span>'), rc = /* @__PURE__ */ se("<!><!>", 1);
function ac(n, e) {
  qe(e, !0);
  let t = () => {
  };
  function i(U) {
    return U === t;
  }
  let r = Te("SMUI:list:item:nav"), a = I(e, "use", 19, () => []), s = I(e, "class", 3, ""), u = I(e, "style", 3, ""), o = I(e, "nonInteractive", 19, () => Te("SMUI:list:nonInteractive") ?? !1), d = I(e, "ripple", 19, () => !o()), c = I(e, "wrapper", 3, !1), v = I(e, "activated", 15, !1), f = I(e, "role", 19, () => c() ? "presentation" : Te("SMUI:list:item:role")), p = I(e, "selected", 15, !1), h = I(e, "disabled", 3, !1), g = I(e, "skipRestoreFocus", 3, !1), m = I(e, "tabindex", 15, t), E = I(e, "inputId", 19, () => "SMUI-form-field-list-" + nc++), w = I(e, "component", 3, ts), S = I(e, "tag", 19, () => r ? e.href ? "a" : "span" : "li"), A = /* @__PURE__ */ mt(e, [
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
  let L, x = Re({}), T = Re({}), _ = Re({}), C = /* @__PURE__ */ de(void 0), V = /* @__PURE__ */ de(void 0);
  const ee = /* @__PURE__ */ ue(() => i(m()) ? !o() && !h() && (p() || l(C) && l(C).checked) ? 0 : -1 : m());
  pe("SMUI:generic:input:props", { id: E() }), pe("SMUI:separator:context", void 0), pe("SMUI:generic:input:mount", (U) => {
    ("_smui_checkbox_accessor" in U || "_smui_radio_accessor" in U) && X(C, U, !0);
  }), pe("SMUI:generic:input:unmount", () => {
    X(C, void 0);
  });
  const P = Te("SMUI:list:item:mount"), N = Te("SMUI:list:item:unmount");
  Dt(() => {
    if (!p() && !o()) {
      let $ = !0, he = L.getElement();
      for (; he.previousElementSibling; )
        if (he = he.previousElementSibling, he.nodeType === 1 && he.classList.contains("mdc-deprecated-list-item") && !he.classList.contains("mdc-deprecated-list-item--disabled")) {
          $ = !1;
          break;
        }
      $ && X(V, window.requestAnimationFrame(() => fe(he)), !0);
    }
    const U = {
      _smui_list_item_accessor: !0,
      get element() {
        return Y();
      },
      get selected() {
        return p();
      },
      set selected($) {
        p($);
      },
      hasClass: Oe,
      addClass: K,
      removeClass: k,
      getAttr: G,
      addAttr: re,
      removeAttr: B,
      getPrimaryText: q,
      // For inputs within item.
      get checked() {
        return (l(C) && l(C).checked) ?? !1;
      },
      set checked($) {
        l(C) && (l(C).checked = !!$);
      },
      get hasCheckbox() {
        return !!(l(C) && "_smui_checkbox_accessor" in l(C));
      },
      get hasRadio() {
        return !!(l(C) && "_smui_radio_accessor" in l(C));
      },
      activateRipple() {
        l(C) && l(C).activateRipple();
      },
      deactivateRipple() {
        l(C) && l(C).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: R,
      get tabindex() {
        return l(ee);
      },
      set tabindex($) {
        m($);
      },
      get disabled() {
        return h();
      },
      get activated() {
        return v();
      },
      set activated($) {
        v($);
      }
    };
    return P && P(U), () => {
      N && N(U);
    };
  }), si(() => {
    l(V) && window.cancelAnimationFrame(l(V));
  });
  function Oe(U) {
    return U in x ? x[U] : Y().classList.contains(U);
  }
  function K(U) {
    x[U] || (x[U] = !0);
  }
  function k(U) {
    (!(U in x) || x[U]) && (x[U] = !1);
  }
  function D(U, $) {
    T[U] != $ && ($ === "" || $ == null ? delete T[U] : T[U] = $);
  }
  function G(U) {
    return U in _ ? _[U] ?? null : Y().getAttribute(U);
  }
  function re(U, $) {
    _[U] !== $ && (_[U] = $);
  }
  function B(U) {
    (!(U in _) || _[U] != null) && (_[U] = void 0);
  }
  function fe(U) {
    let $ = !0;
    for (; U.nextElementSibling; )
      if (U = U.nextElementSibling, U.nodeType === 1 && U.classList.contains("mdc-deprecated-list-item")) {
        const he = U.attributes.getNamedItem("tabindex");
        if (he && he.value === "0") {
          $ = !1;
          break;
        }
      }
    $ && m(0);
  }
  function ye(U) {
    const $ = U.key === "Enter", he = U.key === "Space";
    ($ || he) && R(U);
  }
  function R(U) {
    h() || Et(Y(), "SMUIAction", U);
  }
  function q() {
    const U = Y(), $ = U.querySelector(".mdc-deprecated-list-item__primary-text");
    if ($)
      return $.textContent ?? "";
    const he = U.querySelector(".mdc-deprecated-list-item__text");
    return he ? he.textContent ?? "" : U.textContent ?? "";
  }
  function Y() {
    return L.getElement();
  }
  var le = { action: R, getPrimaryText: q, getElement: Y }, F = ve(), j = ne(F);
  {
    let U = /* @__PURE__ */ ue(() => [
      ...o() ? [] : [
        [
          En,
          {
            ripple: !l(C),
            unbounded: !1,
            color: (v() || p()) && e.color == null ? "primary" : e.color,
            disabled: h(),
            addClass: K,
            removeClass: k,
            addStyle: D
          }
        ]
      ],
      ...a()
    ]), $ = /* @__PURE__ */ ue(() => et({
      "mdc-deprecated-list-item": !c(),
      "mdc-deprecated-list-item__wrapper": c(),
      "mdc-deprecated-list-item--activated": v(),
      "mdc-deprecated-list-item--selected": p(),
      "mdc-deprecated-list-item--disabled": h(),
      "mdc-menu-item--selected": !r && f() === "menuitem" && p(),
      "smui-menu-item--non-interactive": o(),
      ...x,
      [s()]: !0
    })), he = /* @__PURE__ */ ue(() => Object.entries(T).map(([oe, ce]) => `${oe}: ${ce};`).concat([u()]).join(" ")), nt = /* @__PURE__ */ ue(() => g() || void 0);
    $a(j, w, (oe, ce) => {
      De(
        ce(oe, $e(
          {
            get tag() {
              return S();
            },
            get use() {
              return l(U);
            },
            get class() {
              return l($);
            },
            get style() {
              return l(he);
            }
          },
          () => r && v() ? { "aria-current": "page" } : {},
          () => !r || c() ? { role: f() } : {},
          () => !r && f() === "option" ? { "aria-selected": p() ? "true" : "false" } : {},
          () => !r && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": l(C) && l(C).checked ? "true" : "false"
          } : {},
          () => r ? {} : { "aria-disabled": h() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return l(nt);
            },
            get tabindex() {
              return l(ee);
            },
            get href() {
              return e.href;
            }
          },
          () => _,
          () => A,
          {
            onclick: (_e) => {
              var Ye;
              R(_e), (Ye = e.onclick) == null || Ye.call(e, _e);
            },
            onkeydown: (_e) => {
              var Ye;
              ye(_e), (Ye = e.onkeydown) == null || Ye.call(e, _e);
            },
            children: (_e, Ye) => {
              var Pt = rc(), kt = ne(Pt);
              {
                var ke = (Ne) => {
                  var It = ic();
                  O(Ne, It);
                };
                ae(kt, (Ne) => {
                  d() && Ne(ke);
                });
              }
              var Ae = z(kt);
              Ce(Ae, () => e.children ?? be), O(_e, Pt);
            },
            $$slots: { default: !0 }
          }
        )),
        (_e) => L = _e,
        () => L
      );
    });
  }
  return O(n, F), We(le);
}
let sc = 0;
var lc = /* @__PURE__ */ se("<div><!></div>");
function oc(n, e) {
  qe(e, !0);
  let t = I(e, "use", 19, () => []), i = I(e, "class", 3, ""), r = I(e, "id", 19, () => "SMUI-select-helper-text-" + sc++), a = I(e, "persistent", 3, !1), s = I(e, "validationMsg", 3, !1), u = /* @__PURE__ */ mt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), o, d = /* @__PURE__ */ de(void 0), c = Re({}), v = Re({}), f = /* @__PURE__ */ de(void 0);
  const p = Te("SMUI:select:helper-text:id"), h = Te("SMUI:select:helper-text:mount"), g = Te("SMUI:select:helper-text:unmount");
  Dt(() => (X(
    d,
    new Zd({
      addClass: E,
      removeClass: w,
      hasClass: m,
      getAttr: S,
      setAttr: A,
      removeAttr: L,
      setContent: (P) => {
        X(f, P, !0);
      }
    }),
    !0
  ), p && p(r()), h && h(l(d)), l(d).init(), () => {
    var P;
    g && l(d) && g(l(d)), (P = l(d)) == null || P.destroy();
  }));
  function m(P) {
    return P in c ? c[P] : x().classList.contains(P);
  }
  function E(P) {
    c[P] || (c[P] = !0);
  }
  function w(P) {
    (!(P in c) || c[P]) && (c[P] = !1);
  }
  function S(P) {
    return P in v ? v[P] ?? null : x().getAttribute(P);
  }
  function A(P, N) {
    v[P] !== N && (v[P] = N);
  }
  function L(P) {
    (!(P in v) || v[P] != null) && (v[P] = void 0);
  }
  function x() {
    return o;
  }
  var T = { getElement: x }, _ = lc();
  ot(
    _,
    (P) => ({
      class: P,
      "aria-hidden": a() ? void 0 : "true",
      id: r(),
      ...v,
      ...u
    }),
    [
      () => et({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...c,
        [i()]: !0
      })
    ]
  );
  var C = Q(_);
  {
    var V = (P) => {
      var N = ve(), Oe = ne(N);
      Ce(Oe, () => e.children ?? be), O(P, N);
    }, ee = (P) => {
      var N = Je();
      He(() => Ee(N, l(f))), O(P, N);
    };
    ae(C, (P) => {
      l(f) == null ? P(V) : P(ee, -1);
    });
  }
  return De(_, (P) => o = P, () => o), Qe(_, (P, N) => te == null ? void 0 : te(P, N), t), O(n, _), We(T);
}
let uc = 0;
var dc = /* @__PURE__ */ se("<input/>"), cc = /* @__PURE__ */ se('<span class="mdc-select__ripple"></span>'), fc = /* @__PURE__ */ se('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function va(n, e) {
  qe(e, !0);
  const t = () => Ga(It, "$selectedTextStore", i), [i, r] = Zr();
  let a = () => {
  };
  function s(y) {
    return y === a;
  }
  let u = I(e, "use", 19, () => []), o = I(e, "class", 3, ""), d = I(e, "style", 3, ""), c = I(e, "ripple", 3, !0), v = I(e, "disabled", 3, !1), f = I(e, "variant", 3, "standard"), p = I(e, "noLabel", 3, !1), h = I(e, "label", 3, void 0), g = I(e, "value", 15), m = I(e, "key", 3, (y) => y), E = I(e, "dirty", 15, !1), w = I(e, "invalid", 15, a), S = I(e, "updateInvalid", 19, () => s(w())), A = I(e, "required", 3, !1), L = I(e, "inputId", 19, () => "SMUI-select-" + uc++), x = I(e, "hiddenInput", 3, !1), T = I(e, "withLeadingIcon", 3, a), _ = I(e, "anchor$use", 19, () => []), C = I(e, "anchor$class", 3, ""), V = I(e, "selectedTextContainer$use", 19, () => []), ee = I(e, "selectedTextContainer$class", 3, ""), P = I(e, "selectedText$use", 19, () => []), N = I(e, "selectedText$class", 3, ""), Oe = I(e, "dropdownIcon$use", 19, () => []), K = I(e, "dropdownIcon$class", 3, ""), k = I(e, "menu$class", 3, ""), D = /* @__PURE__ */ mt(e, [
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
  const G = s(w());
  s(w()) && w(!1);
  let re, B = /* @__PURE__ */ de(void 0), fe = Re({}), ye = Re({}), R, q = Re({}), Y = /* @__PURE__ */ de(-1);
  const le = /* @__PURE__ */ ue(() => D.menu$id ?? L() + "-menu");
  let F = /* @__PURE__ */ de(void 0), j = Te("SMUI:addLayoutListener"), U, $ = /* @__PURE__ */ de(!1), he = Re({}), nt = /* @__PURE__ */ de(void 0), oe = /* @__PURE__ */ de(void 0), ce = /* @__PURE__ */ de(!1), _e, Ye = Te("SMUI:select:context"), Pt, kt, ke, Ae, Ne;
  pe("SMUI:list:role", ""), pe("SMUI:list:nav", !1);
  const It = _a("");
  pe("SMUI:select:selectedText", It);
  const oi = _a(g());
  Fe(() => {
    jr(oi, g());
  }), pe("SMUI:select:value", oi), Fe(() => {
    l(B) && l(B).getValue() !== m()(g()) && l(B).setValue(m()(g()));
  });
  let Wn = l(Y);
  Fe(() => {
    if (Wn !== l(Y))
      if (Wn = l(Y), l(B))
        l(B).setSelectedIndex(
          l(Y),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const y = Ut();
        g() !== y[l(Y)] && g(y[l(Y)]);
      }
  }), Fe(() => {
    l(B) && l(B).getDisabled() !== v() && l(B).setDisabled(v());
  }), Fe(() => {
    l(B) && E() && l(B).isValid() !== !w() && (S() ? w(!l(B).isValid()) : l(B).setValid(!w()));
  }), Fe(() => {
    l(B) && l(B).getRequired() !== A() && l(B).setRequired(A());
  }), j && (U = j(Tr)), pe("SMUI:select:leading-icon:mount", (y) => {
    Pt = y;
  }), pe("SMUI:select:leading-icon:unmount", () => {
    Pt = void 0;
  }), pe("SMUI:list:mount", (y) => {
    _e = y;
  }), pe("SMUI:select:helper-text:id", (y) => {
    X(F, y, !0);
  }), pe("SMUI:select:helper-text:mount", (y) => {
    kt = y;
  }), pe("SMUI:select:helper-text:unmount", () => {
    X(F, void 0), kt = void 0;
  }), Dt(() => (X(
    B,
    new Yd(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (y) => {
          jr(It, y);
        },
        isSelectAnchorFocused: () => document.activeElement === R,
        getSelectAnchorAttr: Xe,
        setSelectAnchorAttr: st,
        removeSelectAnchorAttr: Ct,
        addMenuClass: H,
        removeMenuClass: ge,
        openMenu: () => {
          X($, !0);
        },
        closeMenu: () => {
          X($, !1);
        },
        getAnchorElement: () => R,
        setMenuAnchorElement: (y) => {
          X(nt, y, !0);
        },
        setMenuAnchorCorner: (y) => {
          X(oe, y, !0);
        },
        setMenuWrapFocus: (y) => {
          X(ce, y, !0);
        },
        getSelectedIndex: () => l(Y),
        setSelectedIndex: (y) => {
          Wn = y, X(Y, y, !0), g(Ut()[l(Y)]);
        },
        focusMenuItemAtIndex: (y) => {
          _e.focusItemAtIndex(y);
        },
        getMenuItemCount: () => _e.items.length,
        getMenuItemValues: () => Ut().map(m()),
        getMenuItemTextAtIndex: (y) => _e.getPrimaryTextAtIndex(y),
        isTypeaheadInProgress: () => _e.typeaheadInProgress,
        typeaheadMatchItem: (y, W) => _e.typeaheadMatchItem(y, W),
        // getCommonAdapterMethods
        addClass: Z,
        removeClass: J,
        hasClass: nr,
        setRippleCenter: (y) => Ae && Ae.setRippleCenter(y),
        activateBottomLine: () => Ae && Ae.activate(),
        deactivateBottomLine: () => Ae && Ae.deactivate(),
        notifyChange: (y) => {
          var W;
          E(!0), S() && w(!((W = l(B)) != null && W.isValid())), Et(Kn(), "SMUISelectChange", { value: g(), index: l(Y) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!Ne,
        notchOutline: (y) => Ne && Ne.notch(y),
        closeOutline: () => Ne && Ne.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!ke,
        floatLabel: (y) => ke && ke.float(y),
        getLabelWidth: () => ke ? ke.getWidth() : 0,
        setLabelRequired: (y) => ke && ke.setRequired(y)
      },
      {
        get helperText() {
          return kt;
        },
        get leadingIcon() {
          return Pt;
        }
      }
    ),
    !0
  ), X(Y, Ut().indexOf(g()), !0), l(B).init(), Ht(G), () => {
    var y;
    (y = l(B)) == null || y.destroy();
  })), si(() => {
    U && U();
  });
  function nr(y) {
    return y in fe ? fe[y] : Kn().classList.contains(y);
  }
  function Z(y) {
    fe[y] || (fe[y] = !0);
  }
  function J(y) {
    (!(y in fe) || fe[y]) && (fe[y] = !1);
  }
  function M(y, W) {
    ye[y] != W && (W === "" || W == null ? delete ye[y] : ye[y] = W);
  }
  function H(y) {
    he[y] || (he[y] = !0);
  }
  function ge(y) {
    (!(y in he) || he[y]) && (he[y] = !1);
  }
  function Xe(y) {
    return y in q ? q[y] ?? null : Kn().getAttribute(y);
  }
  function st(y, W) {
    q[y] !== W && (q[y] = W);
  }
  function Ct(y) {
    (!(y in q) || q[y] != null) && (q[y] = void 0);
  }
  function Ut() {
    return _e.getOrderedList().map((y) => y.getValue());
  }
  function Ri(y) {
    const W = y.currentTarget.getBoundingClientRect();
    return (Ze(y) ? y.touches[0].clientX : y.clientX) - W.left;
  }
  function Ze(y) {
    return "touches" in y;
  }
  function xt() {
    if (l(B) == null)
      throw new Error("Instance is undefined.");
    return l(B).getUseDefaultValidation();
  }
  function Ht(y) {
    var W;
    (W = l(B)) == null || W.setUseDefaultValidation(y);
  }
  function Xn() {
    R.focus();
  }
  function Tr() {
    var y;
    (y = l(B)) == null || y.layout();
  }
  function Kn() {
    return re;
  }
  var Me = {
    getUseDefaultValidation: xt,
    setUseDefaultValidation: Ht,
    focus: Xn,
    layout: Tr,
    getElement: Kn
  }, Be = fc(), Ue = ne(Be);
  ot(Ue, (y, W, je) => ({ class: y, style: W, ...je }), [
    () => et({
      "mdc-select": !0,
      "mdc-select--required": A(),
      "mdc-select--disabled": v(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": p() || h() == null,
      "mdc-select--invalid": w(),
      "mdc-select--activated": l($),
      "mdc-data-table__pagination-rows-per-page-select": Ye === "data-table:pagination",
      ...fe,
      [o()]: !0
    }),
    () => Object.entries(ye).map(([y, W]) => `${y}: ${W};`).concat([d()]).join(" "),
    () => Fa(D, [
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
  var Lt = Q(Ue);
  {
    var on = (y) => {
      var W = dc();
      ot(
        W,
        (je) => ({
          type: "hidden",
          required: A(),
          disabled: v(),
          value: g(),
          ...je
        }),
        [() => pt(D, "input$")],
        void 0,
        void 0,
        void 0,
        !0
      ), O(y, W);
    };
    ae(Lt, (y) => {
      x() && y(on);
    });
  }
  var Ve = z(Lt, 2), ct = (y) => {
    var W;
    R.focus(), l(B) && l(B).handleClick(Ri(y)), (W = e.anchor$onclick) == null || W.call(e, y);
  }, _t = (y) => {
    var W;
    l(B) && l(B).handleKeydown(y), (W = e.onkeydown) == null || W.call(e, y);
  }, Pe = (y) => {
    var W;
    l(B) && l(B).handleBlur(), Et(Kn(), "blur", y), (W = e.anchor$onblur) == null || W.call(e, y);
  }, bt = (y) => {
    var W;
    l(B) && l(B).handleFocus(), Et(Kn(), "focus", y), (W = e.anchor$onfocus) == null || W.call(e, y);
  };
  ot(
    Ve,
    (y, W) => ({
      class: y,
      "aria-required": A() ? "true" : void 0,
      "aria-disabled": v() ? "true" : void 0,
      "aria-controls": l(le),
      "aria-expanded": l($) ? "true" : "false",
      "aria-describedby": l(F),
      role: "combobox",
      tabindex: "0",
      ...q,
      ...W,
      onclick: ct,
      onkeydown: _t,
      onblur: Pe,
      onfocus: bt
    }),
    [
      () => et({ "mdc-select__anchor": !0, [C()]: !0 }),
      () => pt(D, "anchor$")
    ]
  );
  var On = Q(Ve);
  {
    var Yt = (y) => {
      var W = cc();
      O(y, W);
    };
    ae(On, (y) => {
      f() === "filled" && y(Yt);
    });
  }
  var ft = z(On, 2);
  {
    var Tt = (y) => {
      {
        let W = /* @__PURE__ */ ue(() => L() + "-smui-label"), je = /* @__PURE__ */ ue(() => t() !== ""), ht = /* @__PURE__ */ ue(() => pt(D, "label$"));
        De(
          zr(y, $e(
            {
              get id() {
                return l(W);
              },
              get floatAbove() {
                return l(je);
              },
              get required() {
                return A();
              }
            },
            () => l(ht),
            {
              children: (Mn, Dn) => {
                var rr = ve(), Fi = ne(rr);
                {
                  var di = (In) => {
                  }, na = (In) => {
                    var Rn = Je();
                    He(() => Ee(Rn, h())), O(In, Rn);
                  }, ia = (In) => {
                    var Rn = ve(), is = ne(Rn);
                    Ce(is, h), O(In, Rn);
                  };
                  ae(Fi, (In) => {
                    h() == null ? In(di) : typeof h() == "string" ? In(na, 1) : In(ia, -1);
                  });
                }
                O(Mn, rr);
              },
              $$slots: { default: !0 }
            }
          )),
          (Mn) => ke = Mn,
          () => ke
        );
      }
    };
    ae(ft, (y) => {
      f() !== "outlined" && !p() && h() != null && y(Tt);
    });
  }
  var Zt = z(ft, 2);
  {
    var un = (y) => {
      {
        let W = /* @__PURE__ */ ue(() => p() || h() == null), je = /* @__PURE__ */ ue(() => pt(D, "outline$"));
        De(
          Wl(y, $e(
            {
              get noLabel() {
                return l(W);
              }
            },
            () => l(je),
            {
              children: (ht, Mn) => {
                var Dn = ve(), rr = ne(Dn);
                {
                  var Fi = (di) => {
                    {
                      let na = /* @__PURE__ */ ue(() => L() + "-smui-label"), ia = /* @__PURE__ */ ue(() => t() !== ""), In = /* @__PURE__ */ ue(() => pt(D, "label$"));
                      De(
                        zr(di, $e(
                          {
                            get id() {
                              return l(na);
                            },
                            get floatAbove() {
                              return l(ia);
                            },
                            get required() {
                              return A();
                            }
                          },
                          () => l(In),
                          {
                            children: (Rn, is) => {
                              var rs = ve(), io = ne(rs);
                              {
                                var ro = (Qn) => {
                                }, ao = (Qn) => {
                                  var ar = Je();
                                  He(() => Ee(ar, h())), O(Qn, ar);
                                }, so = (Qn) => {
                                  var ar = ve(), lo = ne(ar);
                                  Ce(lo, h), O(Qn, ar);
                                };
                                ae(io, (Qn) => {
                                  h() == null ? Qn(ro) : typeof h() == "string" ? Qn(ao, 1) : Qn(so, -1);
                                });
                              }
                              O(Rn, rs);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (Rn) => ke = Rn,
                        () => ke
                      );
                    }
                  };
                  ae(rr, (di) => {
                    !p() && h() != null && di(Fi);
                  });
                }
                O(ht, Dn);
              },
              $$slots: { default: !0 }
            }
          )),
          (ht) => Ne = ht,
          () => Ne
        );
      }
    };
    ae(Zt, (y) => {
      f() === "outlined" && y(un);
    });
  }
  var zt = z(Zt, 2);
  Ce(zt, () => e.leadingIcon ?? be);
  var Jt = z(zt, 2);
  ot(Jt, (y, W) => ({ class: y, ...W }), [
    () => et({
      "mdc-select__selected-text-container": !0,
      [ee()]: !0
    }),
    () => pt(D, "selectedTextContainer$")
  ]);
  var Nt = Q(Jt);
  ot(
    Nt,
    (y, W) => ({
      id: L() + "-smui-selected-text",
      class: y,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": L() + "-smui-label",
      ...W
    }),
    [
      () => et({
        "mdc-select__selected-text": !0,
        [N()]: !0
      }),
      () => pt(D, "selectedText$")
    ]
  );
  var ui = Q(Nt);
  Qe(Nt, (y, W) => te == null ? void 0 : te(y, W), P), Qe(Jt, (y, W) => te == null ? void 0 : te(y, W), V);
  var ir = z(Jt, 2);
  ot(ir, (y, W) => ({ class: y, ...W }), [
    () => et({
      "mdc-select__dropdown-icon": !0,
      [K()]: !0
    }),
    () => pt(D, "dropdownIcon$")
  ]), Qe(ir, (y, W) => te == null ? void 0 : te(y, W), Oe);
  var Zl = z(ir, 2);
  {
    var Jl = (y) => {
      {
        let W = /* @__PURE__ */ ue(() => pt(D, "ripple$"));
        De(ql(y, $e(() => l(W))), (je) => Ae = je, () => Ae);
      }
    };
    ae(Zl, (y) => {
      f() !== "outlined" && c() && y(Jl);
    });
  }
  De(Ve, (y) => R = y, () => R), Qe(Ve, (y, W) => te == null ? void 0 : te(y, W), _);
  var $l = z(Ve, 2);
  {
    let y = /* @__PURE__ */ ue(() => et({
      "mdc-select__menu": !0,
      ...he,
      [k()]: !0
    })), W = /* @__PURE__ */ ue(() => pt(D, "menu$"));
    ec($l, $e(
      {
        get class() {
          return l(y);
        },
        get id() {
          return l(le);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return l(nt);
        },
        get anchorCorner() {
          return l(oe);
        }
      },
      () => l(W),
      {
        onSMUIMenuSelected: (je) => {
          var ht;
          l(B) && l(B).handleMenuItemAction(je.detail.index), (ht = e.onSMUIMenuSelected) == null || ht.call(e, je);
        },
        onSMUIMenuSurfaceClosing: (je) => {
          var ht;
          l(B) && l(B).handleMenuClosing(), (ht = e.onSMUIMenuSurfaceClosing) == null || ht.call(e, je);
        },
        onSMUIMenuSurfaceClosed: (je) => {
          var ht;
          l(B) && l(B).handleMenuClosed(), (ht = e.onSMUIMenuSurfaceClosed) == null || ht.call(e, je);
        },
        onSMUIMenuSurfaceOpened: (je) => {
          var ht;
          l(B) && l(B).handleMenuOpened(), (ht = e.onSMUIMenuSurfaceOpened) == null || ht.call(e, je);
        },
        get open() {
          return l($);
        },
        set open(je) {
          X($, je, !0);
        },
        children: (je, ht) => {
          {
            let Mn = /* @__PURE__ */ ue(() => pt(D, "list$"));
            tc(je, $e(
              {
                role: "listbox",
                get wrapFocus() {
                  return l(ce);
                }
              },
              () => l(Mn),
              {
                get selectedIndex() {
                  return l(Y);
                },
                set selectedIndex(Dn) {
                  X(Y, Dn, !0);
                },
                children: (Dn, rr) => {
                  var Fi = ve(), di = ne(Fi);
                  Ce(di, () => e.children ?? be), O(Dn, Fi);
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
  De(Ue, (y) => re = y, () => re), Qe(Ue, (y, W) => En == null ? void 0 : En(y, W), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: Z,
    removeClass: J,
    addStyle: M
  })), Qe(Ue, (y, W) => ha == null ? void 0 : ha(y, W), () => ({ addClass: Z, removeClass: J })), Qe(Ue, (y, W) => te == null ? void 0 : te(y, W), u);
  var eo = z(Ue, 2);
  {
    var to = (y) => {
      {
        let W = /* @__PURE__ */ ue(() => pt(D, "helperText$"));
        oc(y, $e(() => l(W), {
          children: (je, ht) => {
            var Mn = ve(), Dn = ne(Mn);
            Ce(Dn, () => e.helperText ?? be), O(je, Mn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(eo, (y) => {
      e.helperText && y(to);
    });
  }
  He(() => Ee(ui, t())), O(n, Be);
  var no = We(Me);
  return r(), no;
}
function pi(n, e) {
  qe(e, !0);
  const t = () => Ga(c, "$selectedValue", i), [i, r] = Zr();
  let a = I(e, "use", 19, () => []);
  I(e, "class", 3, "");
  let s = I(e, "value", 3, ""), u = /* @__PURE__ */ mt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), o;
  const d = Te("SMUI:select:selectedText"), c = Te("SMUI:select:value");
  pe("SMUI:list:item:role", "option");
  const v = /* @__PURE__ */ ue(() => s() != null && s() !== "" && t() === s());
  Dt(f), si(f);
  function f() {
    l(v) && o && jr(d, o.getPrimaryText());
  }
  function p() {
    return o.getElement();
  }
  var h = { getElement: p };
  De(
    ac(n, $e(
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
          return l(v);
        }
      },
      () => u,
      {
        children: (m, E) => {
          var w = ve(), S = ne(w);
          Ce(S, () => e.children ?? be), O(m, w);
        },
        $$slots: { default: !0 }
      }
    )),
    (m) => o = m,
    () => o
  );
  var g = We(h);
  return r(), g;
}
var hc = /* @__PURE__ */ se("<i><!></i>");
function vc(n, e) {
  qe(e, !0);
  const t = () => Ga(h, "$leadingStore", i), [i, r] = Zr();
  let a = I(e, "use", 19, () => []), s = I(e, "class", 3, ""), u = I(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), o = I(e, "disabled", 3, !1), d = /* @__PURE__ */ mt(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), c, v = /* @__PURE__ */ de(void 0), f = new Lr(), p = Re({});
  const h = Te("SMUI:textfield:icon:leading"), g = t();
  let m = /* @__PURE__ */ de(void 0);
  const E = /* @__PURE__ */ ue(() => ({ role: e.role, tabindex: u() })), w = Te("SMUI:textfield:leading-icon:mount"), S = Te("SMUI:textfield:leading-icon:unmount"), A = Te("SMUI:textfield:trailing-icon:mount"), L = Te("SMUI:textfield:trailing-icon:unmount");
  Dt(() => (X(
    v,
    new pd({
      getAttr: x,
      setAttr: T,
      removeAttr: _,
      setContent: (k) => {
        X(m, k, !0);
      },
      registerInteractionHandler: (k, D) => f.on(C(), k, D),
      deregisterInteractionHandler: (k, D) => f.off(C(), k, D),
      notifyIconAction: () => Et(C(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? w && w(l(v)) : A && A(l(v)), l(v).init(), () => {
    var k;
    l(v) && (g ? S && S(l(v)) : L && L(l(v))), (k = l(v)) == null || k.destroy(), f.clear();
  }));
  function x(k) {
    return k in p ? p[k] ?? null : C().getAttribute(k);
  }
  function T(k, D) {
    p[k] !== D && (p[k] = D);
  }
  function _(k) {
    (!(k in p) || p[k] != null) && (p[k] = void 0);
  }
  function C() {
    return c;
  }
  var V = { getElement: C }, ee = hc();
  ot(
    ee,
    (k) => ({
      class: k,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? o() ? "true" : "false" : void 0,
      ...l(E),
      ...p,
      ...d
    }),
    [
      () => et({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [s()]: !0
      })
    ]
  );
  var P = Q(ee);
  {
    var N = (k) => {
      var D = ve(), G = ne(D);
      Ce(G, () => e.children ?? be), O(k, D);
    }, Oe = (k) => {
      var D = Je();
      He(() => Ee(D, l(m))), O(k, D);
    };
    ae(P, (k) => {
      l(m) == null ? k(N) : k(Oe, -1);
    });
  }
  De(ee, (k) => c = k, () => c), Qe(ee, (k, D) => te == null ? void 0 : te(k, D), a), O(n, ee);
  var K = We(V);
  return r(), K;
}
const pc = ["editor", "menu", "validator"], gc = {
  editor: "Editor plugin",
  menu: "Navigation plugin",
  validator: "Validation plugin"
}, mc = {
  editor: "tab",
  menu: "play_circle",
  validator: "rule_folder"
};
function qr(n) {
  if (!Ic())
    return n;
  try {
    const e = new URL(n);
    return e.protocol !== "http:" && e.protocol !== "https:" || e.hostname === "localhost" || e.hostname === "127.0.0.1" ? n : `/proxy/${e.host}${e.pathname}${e.search}`;
  } catch {
    return n;
  }
}
function Ic() {
  if (typeof window > "u")
    return !1;
  const n = window.location.hostname;
  return n === "localhost" || n === "127.0.0.1";
}
async function _c(n) {
  try {
    const e = await fetch(qr(n.pluginsUrl));
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
    const i = t.plugins, r = i.filter(yc), a = i.length - r.length;
    return a > 0 && console.warn(
      `[ProviderLoader] Provider "${n.name}": skipped ${a} invalid plugin entries.`
    ), { provider: n, plugins: r };
  } catch (e) {
    const t = e instanceof Error ? e.message : String(e);
    return { provider: n, plugins: [], error: t };
  }
}
async function bc(n) {
  return Promise.all(n.map(_c));
}
function yc(n) {
  if (!n || typeof n != "object") return !1;
  const e = n;
  return typeof e.name == "string" && (!e.author || typeof e.author == "string") && typeof e.src == "string" && (!1 || e.src.startsWith("https://") || e.src.startsWith("/")) && typeof e.kind == "string" && typeof e.icon == "string" && typeof e.description == "string" && (e.supportedCoreVersion === void 0 || typeof e.supportedCoreVersion == "object" && e.supportedCoreVersion !== null && (typeof e.supportedCoreVersion.from == "string" || typeof e.supportedCoreVersion.to == "string"));
}
function Ec(n, e) {
  return `${n} - ${e}`;
}
function Ps(n, e) {
  const t = ks(n), i = ks(e);
  for (let r = 0; r < 3; r++) {
    if (t[r] < i[r]) return -1;
    if (t[r] > i[r]) return 1;
  }
  return 0;
}
function ks(n) {
  const t = n.replace(/^v/, "").split("-")[0].split(".").map((i) => parseInt(i, 10) || 0);
  return [t[0] ?? 0, t[1] ?? 0, t[2] ?? 0];
}
function Ac(n, e, t) {
  return e === void 0 || t === void 0 ? !0 : Ps(n, e) >= 0 && Ps(n, t) < 0;
}
const Sc = "plugins";
function Cc() {
  try {
    const n = localStorage.getItem(Sc);
    return n ? JSON.parse(n) : [];
  } catch {
    return [];
  }
}
function xc(n, e, t, i) {
  var d, c;
  let r = Ec(e.prefix, n.name);
  const a = i.find((v) => v.src === qr(n.src));
  a && (r = a.name);
  const s = a ? "INSTALLED" : "AVAILABLE", u = a && a.active ? "ACTIVE" : "INACTIVE", o = Ac(
    t,
    (d = n.supportedCoreVersion) == null ? void 0 : d.from,
    (c = n.supportedCoreVersion) == null ? void 0 : c.to
  );
  return {
    ...n,
    id: r,
    provider: e,
    compatible: o,
    kindText: gc[n.kind],
    kindIcon: mc[n.kind],
    installationState: s,
    activationState: u
  };
}
function Lc(n, e) {
  return n.map((t) => t.id !== e || !t.compatible ? t : {
    ...t,
    installationState: "INSTALLED",
    activationState: "INACTIVE"
  });
}
function Tc(n, e) {
  return { updated: n.map(
    (i) => i.id === e ? {
      ...i,
      installationState: "AVAILABLE",
      activationState: "INACTIVE"
    } : i
  ), success: !0 };
}
function wc(n, e) {
  return n.map(
    (t) => t.id === e ? {
      ...t,
      activationState: "ACTIVE"
    } : t
  );
}
function Oc(n, e) {
  return n.map(
    (t) => t.id === e ? {
      ...t,
      activationState: "INACTIVE"
    } : t
  );
}
const Mc = "appVersion";
function Dc() {
  return localStorage.getItem(Mc) || "1.4.0";
}
function Rc() {
  return document.querySelector("open-scd");
}
function Yl() {
  var e, t;
  const n = Rc();
  return n != null && n.shadowRoot ? ((e = n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? ((t = n.shadowRoot) == null ? void 0 : t.querySelector("oscd-layout")) ?? null : null;
}
const Fc = [
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
], Pc = Fc;
var kc = /* @__PURE__ */ se("<span> </span>"), Uc = /* @__PURE__ */ se('<span class="badge badge-incompatible bp-typo-button">Incompatible</span>'), Hc = /* @__PURE__ */ se('<div role="button" tabindex="0"><div class="card-top svelte-1myq0bn"><div class="plugin-icon-wrapper svelte-1myq0bn"><span class="material-icons plugin-icon svelte-1myq0bn"> </span></div> <button><!></button></div> <div class="plugin-name bp-typo-16-bold svelte-1myq0bn"> </div> <div class="plugin-kind-wrapper svelte-1myq0bn"><div class="badge badge-kind bp-typo-label"><span class="material-icons badge-icon"> </span> </div></div> <div class="plugin-description bp-typo-body svelte-1myq0bn"> </div> <div class="plugin-badges svelte-1myq0bn"><span> </span> <!> <!></div></div>');
function Nc(n, e) {
  qe(e, !0);
  const t = /* @__PURE__ */ ue(() => e.plugin.installationState === "INSTALLED"), i = /* @__PURE__ */ ue(() => e.plugin.activationState === "ACTIVE");
  function r(D) {
    if (D.stopPropagation(), l(t))
      l(i) ? e.onDisable() : e.onEnable();
    else {
      if (!e.plugin.compatible) return;
      e.onInstall();
    }
  }
  var a = Hc();
  let s;
  var u = Q(a), o = Q(u), d = Q(o), c = Q(d), v = z(o, 2);
  let f;
  var p = Q(v);
  {
    var h = (D) => {
      var G = Je("Install");
      O(D, G);
    }, g = (D) => {
      var G = Je("Disable");
      O(D, G);
    }, m = (D) => {
      var G = Je("Enable");
      O(D, G);
    };
    ae(p, (D) => {
      l(t) ? l(i) ? D(g, 1) : D(m, -1) : D(h);
    });
  }
  var E = z(u, 2), w = Q(E), S = z(E, 2), A = Q(S), L = Q(A), x = Q(L), T = z(L), _ = z(S, 2), C = Q(_), V = z(_, 2), ee = Q(V), P = Q(ee), N = z(ee, 2);
  {
    var Oe = (D) => {
      var G = kc(), re = Q(G);
      He(
        (B) => {
          jn(G, 1, `badge badge-${B ?? ""} bp-typo-button`, "svelte-1myq0bn"), Ee(re, l(i) ? "Active" : "Inactive");
        },
        [() => e.plugin.activationState.toLowerCase()]
      ), O(D, G);
    };
    ae(N, (D) => {
      l(t) && D(Oe);
    });
  }
  var K = z(N, 2);
  {
    var k = (D) => {
      var G = Uc();
      O(D, G);
    };
    ae(K, (D) => {
      e.plugin.compatible || D(k);
    });
  }
  He(
    (D) => {
      s = jn(a, 1, "plugin-card svelte-1myq0bn", null, s, {
        selected: e.selected,
        incompatible: !e.plugin.compatible
      }), Mi(a, "aria-pressed", e.selected), Ee(c, e.plugin.icon), f = jn(v, 1, "action-btn bp-typo-button", null, f, {
        disable: l(t) && l(i),
        enable: l(t) && !l(i),
        install: !l(t)
      }), v.disabled = !l(t) && !e.plugin.compatible, Mi(v, "aria-label", l(t) ? l(i) ? "Disable" : "Enable" : "Install"), Ee(w, e.plugin.name), Ee(x, e.plugin.kindIcon), Ee(T, ` ${e.plugin.kindText ?? ""}`), Ee(C, e.plugin.description), jn(ee, 1, `badge badge-${D ?? ""} bp-typo-button`, "svelte-1myq0bn"), Ee(P, e.plugin.installationState === "INSTALLED" ? "Installed" : "Available");
    },
    [() => e.plugin.installationState.toLowerCase()]
  ), Vn("click", a, function(...D) {
    var G;
    (G = e.onSelect) == null || G.apply(this, D);
  }), Vn("keydown", a, (D) => D.key === "Enter" && e.onSelect()), Vn("click", v, r), O(n, a), We();
}
Ja(["click", "keydown"]);
var Bc = /* @__PURE__ */ se('<img class="provider-icon svelte-1ttjeex"/>'), Vc = /* @__PURE__ */ se('<span class="material-icons provider-icon svelte-1ttjeex"> </span>'), jc = /* @__PURE__ */ se('<section class="provider-card svelte-1ttjeex"><div class="provider-header svelte-1ttjeex"><div class="provider-info svelte-1ttjeex"><h3 class="provider-name bp-typo-h3 svelte-1ttjeex"> </h3> <span class="provider-description bp-typo-body svelte-1ttjeex"> </span></div> <!></div> <div class="plugins-grid svelte-1ttjeex"></div></section>');
function Gc(n, e) {
  qe(e, !0);
  var t = jc(), i = Q(t), r = Q(i), a = Q(r), s = Q(a), u = z(a, 2), o = Q(u), d = z(r, 2);
  {
    var c = (h) => {
      var g = Bc();
      He(() => {
        Mi(g, "src", e.provider.icon), Mi(g, "alt", `${e.provider.name ?? ""} logo`);
      }), Fl("error", g, (m) => m.currentTarget.style.display = "none"), O(h, g);
    }, v = /* @__PURE__ */ ue(() => e.provider.icon.startsWith("http") || e.provider.icon.startsWith("/")), f = (h) => {
      var g = Vc(), m = Q(g);
      He(() => Ee(m, e.provider.icon)), O(h, g);
    };
    ae(d, (h) => {
      l(v) ? h(c) : h(f, -1);
    });
  }
  var p = z(i, 2);
  cr(p, 21, () => e.plugins, (h) => h.id, (h, g) => {
    {
      let m = /* @__PURE__ */ ue(() => e.selectedPluginId === l(g).id);
      Nc(h, {
        get plugin() {
          return l(g);
        },
        get selected() {
          return l(m);
        },
        onSelect: () => e.onSelectPlugin(l(g)),
        onInstall: () => e.onInstall(l(g).id),
        onUninstall: () => e.onUninstall(l(g).id),
        onEnable: () => e.onEnable(l(g).id),
        onDisable: () => e.onDisable(l(g).id)
      });
    }
  }), He(() => {
    Ee(s, e.provider.name), Ee(o, e.provider.description);
  }), O(n, t), We();
}
var zc = /* @__PURE__ */ se("<span> </span>"), qc = /* @__PURE__ */ se('<span class="badge badge-incompatible bp-typo-button">Incompatible</span>'), Wc = /* @__PURE__ */ se('<div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Supported Version</span> <span class="bp-typo-16-regular"><!></span></div>'), Xc = /* @__PURE__ */ se('<div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Current Core</span> <span class="bp-typo-16-regular"> </span></div>'), Kc = /* @__PURE__ */ se('<p class="details-long-desc bp-typo-body svelte-yr5wcf"> </p>'), Qc = /* @__PURE__ */ se('<button class="action-btn install bp-typo-button svelte-yr5wcf">Install</button>'), Yc = /* @__PURE__ */ se('<button class="action-btn disable bp-typo-button svelte-yr5wcf">Disable</button>'), Zc = /* @__PURE__ */ se('<button class="action-btn enable bp-typo-button svelte-yr5wcf">Enable</button>'), Jc = /* @__PURE__ */ se('<button class="action-btn remove bp-typo-button svelte-yr5wcf">Remove</button> <!>', 1), $c = /* @__PURE__ */ se('<aside class="plugin-details svelte-yr5wcf"><div class="details-header svelte-yr5wcf"><div class="details-title-row bp-typo-h1 svelte-yr5wcf"><span class="material-icons details-icon svelte-yr5wcf"> </span> <h3 class="details-name svelte-yr5wcf"> </h3> <button class="close-btn svelte-yr5wcf" aria-label="Close details">✕</button></div> <div class="details-kind-wrapper svelte-yr5wcf"><div class="badge badge-kind bp-typo-label"><span class="material-icons badge-icon"> </span> </div></div> <p class="details-short-desc bp-typo-body svelte-yr5wcf"> </p> <div class="details-badges svelte-yr5wcf"><span> </span> <!> <!></div></div> <div class="details-meta svelte-yr5wcf"><div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Provider</span> <span class="bp-typo-16-regular"> </span></div> <div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Author</span> <span class="bp-typo-16-regular"> </span></div> <!> <div class="meta-item svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">Plugin ID</span> <span class="bp-typo-16-regular"> </span></div> <!></div> <div class="details-url svelte-yr5wcf"><span class="meta-label bp-typo-label svelte-yr5wcf">URL</span> <a target="_blank" rel="noopener noreferrer"> </a></div> <!> <div class="details-actions svelte-yr5wcf"><div style="flex: 1"></div> <!></div></aside>');
function ef(n, e) {
  qe(e, !0);
  const t = /* @__PURE__ */ ue(() => e.plugin.installationState === "INSTALLED"), i = /* @__PURE__ */ ue(() => e.plugin.activationState === "ACTIVE");
  var r = $c(), a = Q(r), s = Q(a), u = Q(s), o = Q(u), d = z(u, 2), c = Q(d), v = z(d, 2), f = z(s, 2), p = Q(f), h = Q(p), g = Q(h), m = z(h), E = z(f, 2), w = Q(E), S = z(E, 2), A = Q(S), L = Q(A), x = z(A, 2);
  {
    var T = (oe) => {
      var ce = zc(), _e = Q(ce);
      He(
        (Ye) => {
          jn(ce, 1, `badge badge-${Ye ?? ""} bp-typo-button`, "svelte-yr5wcf"), Ee(_e, l(i) ? "Active" : "Inactive");
        },
        [() => e.plugin.activationState.toLowerCase()]
      ), O(oe, ce);
    };
    ae(x, (oe) => {
      l(t) && oe(T);
    });
  }
  var _ = z(x, 2);
  {
    var C = (oe) => {
      var ce = qc();
      O(oe, ce);
    };
    ae(_, (oe) => {
      e.plugin.compatible || oe(C);
    });
  }
  var V = z(a, 2), ee = Q(V), P = z(Q(ee), 2), N = Q(P), Oe = z(ee, 2), K = z(Q(Oe), 2), k = Q(K), D = z(Oe, 2);
  {
    var G = (oe) => {
      var ce = Wc(), _e = z(Q(ce), 2), Ye = Q(_e);
      {
        var Pt = (Ae) => {
          var Ne = Je();
          He(() => Ee(Ne, `${e.plugin.supportedCoreVersion.from ?? ""} – ${e.plugin.supportedCoreVersion.to ?? ""}`)), O(Ae, Ne);
        }, kt = (Ae) => {
          var Ne = Je();
          He(() => Ee(Ne, `≥ ${e.plugin.supportedCoreVersion.from ?? ""}`)), O(Ae, Ne);
        }, ke = (Ae) => {
          var Ne = Je();
          He(() => Ee(Ne, "< " + e.plugin.supportedCoreVersion.to)), O(Ae, Ne);
        };
        ae(Ye, (Ae) => {
          e.plugin.supportedCoreVersion.from && e.plugin.supportedCoreVersion.to ? Ae(Pt) : e.plugin.supportedCoreVersion.from ? Ae(kt, 1) : e.plugin.supportedCoreVersion.to && Ae(ke, 2);
        });
      }
      O(oe, ce);
    };
    ae(D, (oe) => {
      e.plugin.supportedCoreVersion && (e.plugin.supportedCoreVersion.from || e.plugin.supportedCoreVersion.to) && oe(G);
    });
  }
  var re = z(D, 2), B = z(Q(re), 2), fe = Q(B), ye = z(re, 2);
  {
    var R = (oe) => {
      var ce = Xc(), _e = z(Q(ce), 2), Ye = Q(_e);
      He(() => Ee(Ye, e.coreVersion)), O(oe, ce);
    };
    ae(ye, (oe) => {
      e.coreVersion && oe(R);
    });
  }
  var q = z(V, 2), Y = z(Q(q), 2), le = Q(Y), F = z(q, 2);
  {
    var j = (oe) => {
      var ce = Kc(), _e = Q(ce);
      He(() => Ee(_e, e.plugin.longDescription)), O(oe, ce);
    };
    ae(F, (oe) => {
      e.plugin.longDescription && oe(j);
    });
  }
  var U = z(F, 2), $ = z(Q(U), 2);
  {
    var he = (oe) => {
      var ce = Qc();
      He(() => ce.disabled = !e.plugin.compatible), Vn("click", ce, () => e.onInstall(e.plugin.id)), O(oe, ce);
    }, nt = (oe) => {
      var ce = Jc(), _e = ne(ce), Ye = z(_e, 2);
      {
        var Pt = (ke) => {
          var Ae = Yc();
          Vn("click", Ae, () => e.onDisable(e.plugin.id)), O(ke, Ae);
        }, kt = (ke) => {
          var Ae = Zc();
          Vn("click", Ae, () => e.onEnable(e.plugin.id)), O(ke, Ae);
        };
        ae(Ye, (ke) => {
          l(i) ? ke(Pt) : ke(kt, -1);
        });
      }
      Vn("click", _e, () => e.onUninstall(e.plugin.id)), O(oe, ce);
    };
    ae($, (oe) => {
      l(t) ? oe(nt, -1) : oe(he);
    });
  }
  He(
    (oe, ce) => {
      Ee(o, e.plugin.icon), Ee(c, e.plugin.name), Ee(g, e.plugin.kindIcon), Ee(m, ` ${e.plugin.kindText ?? ""}`), Ee(w, e.plugin.description), jn(A, 1, `badge badge-${oe ?? ""} bp-typo-button`, "svelte-yr5wcf"), Ee(L, e.plugin.installationState === "INSTALLED" ? "Installed" : "Available"), Ee(N, ce), Ee(k, e.plugin.author), Ee(fe, e.plugin.id), Mi(Y, "href", e.plugin.src), Ee(le, e.plugin.src);
    },
    [
      () => e.plugin.installationState.toLowerCase(),
      () => e.plugin.provider.prefix.toUpperCase()
    ]
  ), Vn("click", v, function(...oe) {
    var ce;
    (ce = e.onClose) == null || ce.apply(this, oe);
  }), O(n, r), We();
}
Ja(["click"]);
var tf = /* @__PURE__ */ se("<!> <!> <!>", 1), nf = /* @__PURE__ */ se("<!> <!>", 1), rf = /* @__PURE__ */ se("<!> <!>", 1), af = /* @__PURE__ */ se('<p class="error-message bp-typo-body svelte-1u53k0h"> </p>'), sf = /* @__PURE__ */ se('<div class="load-errors svelte-1u53k0h"></div>'), lf = /* @__PURE__ */ se('<div class="loading bp-typo-16-regular svelte-1u53k0h">Loading plugins…</div>'), of = /* @__PURE__ */ se('<div class="empty-state bp-typo-body svelte-1u53k0h">No plugins match your search.</div>'), uf = /* @__PURE__ */ se('<div class="plugins-hub bp-typo-body svelte-1u53k0h"><div class="hub-header svelte-1u53k0h"><h2 class="hub-title svelte-1u53k0h">Plugin Store</h2></div> <div class="hub-toolbar svelte-1u53k0h"><!> <!> <!> <!></div> <!> <div><div class="providers-list svelte-1u53k0h"><!></div> <!></div></div>');
function df(n, e) {
  qe(e, !0);
  let t = I(e, "coreVersion", 19, Dc), i = /* @__PURE__ */ de(Re([])), r = /* @__PURE__ */ de(!0), a = /* @__PURE__ */ de(Re([])), s = /* @__PURE__ */ de(null), u = /* @__PURE__ */ de(""), o = /* @__PURE__ */ de("all"), d = /* @__PURE__ */ de("all"), c = /* @__PURE__ */ de("all");
  const v = Pc.map((R) => ({ ...R, icon: qr(R.icon) }));
  async function f() {
    X(r, !0), X(a, [], !0);
    const R = Cc(), q = await bc(v), Y = [];
    for (const le of q) {
      le.error && X(
        a,
        [
          ...l(a),
          `Error loading Provider '${le.provider.name}'': ${le.error}`
        ],
        !0
      );
      const F = le.provider;
      for (const j of le.plugins)
        Y.push(xc(j, F, t(), R));
    }
    X(i, Y, !0), X(r, !1);
  }
  Fe(() => {
    t(), f();
  });
  function p(R) {
    return l(h).filter((q) => q.provider.prefix === R);
  }
  const h = /* @__PURE__ */ ue(() => l(i).filter((R) => {
    var j;
    const q = !l(u) || R.name.toLowerCase().includes(l(u).toLowerCase()) || R.description.toLowerCase().includes(l(u).toLowerCase()), Y = l(o) === "all" || l(o) === "installed" && R.installationState === "INSTALLED" || l(o) === "available" && R.installationState === "AVAILABLE", le = l(d) === "all" || ((j = R.provider) == null ? void 0 : j.prefix) === l(d), F = l(c) === "all" || R.kind === l(c);
    return q && Y && le && F;
  }));
  function g(R) {
    var le;
    const q = l(i).find((F) => F.id === R);
    if (!(q != null && q.compatible))
      return;
    X(i, Lc(l(i), R), !0);
    const Y = l(i).find((F) => F.id === R);
    ((le = l(s)) == null ? void 0 : le.id) === R && X(s, Y ?? null, !0), Y && L(Y);
  }
  function m(R) {
    var F;
    const q = l(i).find((j) => j.id === R), { updated: Y } = Tc(l(i), R);
    X(i, Y, !0);
    const le = l(i).find((j) => j.id === R);
    ((F = l(s)) == null ? void 0 : F.id) === R && X(s, le ?? null, !0), q && L({ id: q.id, kind: q.kind }, !0);
  }
  function E(R) {
    var Y;
    X(i, wc(l(i), R), !0);
    const q = l(i).find((le) => le.id === R);
    ((Y = l(s)) == null ? void 0 : Y.id) === R && X(s, q ?? null, !0), q && L(q);
  }
  function w(R) {
    var Y;
    X(i, Oc(l(i), R), !0);
    const q = l(i).find((le) => le.id === R);
    ((Y = l(s)) == null ? void 0 : Y.id) === R && X(s, q ?? null, !0), q && L(q);
  }
  function S(R) {
    var q;
    X(s, ((q = l(s)) == null ? void 0 : q.id) === R.id ? null : R, !0);
  }
  function A() {
    X(s, null);
  }
  function L(R, q = !1) {
    var F, j;
    const Y = q ? { name: R.id, kind: R.kind, config: null } : {
      name: R.id,
      kind: R.kind,
      config: {
        name: R.id,
        // use identifier which is provider-prefix plus provider-plugin.name
        author: R.author || ((F = R.provider) == null ? void 0 : F.name),
        src: qr(R.src),
        icon: R.icon,
        kind: R.kind,
        description: R.description,
        requireDoc: !0,
        position: R.position || (R.kind === "menu" ? "middle" : void 0),
        active: R.activationState === "ACTIVE",
        installed: R.installationState === "INSTALLED"
      }
    }, le = new CustomEvent("oscd-configure-plugin", { bubbles: !0, composed: !0, detail: Y });
    (j = Yl()) == null || j.dispatchEvent(le);
  }
  var x = uf(), T = z(Q(x), 2), _ = Q(T);
  Ud(_, {
    label: "Search plugins",
    placeholder: "Search...",
    variant: "outlined",
    style: "flex: 1; background: var(--bearingpoint-color-surface, #fff)",
    get value() {
      return l(u);
    },
    set value(q) {
      X(u, q, !0);
    },
    leadingIcon: (q) => {
      vc(q, {
        class: "material-icons",
        children: (Y, le) => {
          var F = Je("search");
          O(Y, F);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { leadingIcon: !0 }
  });
  var C = z(_, 2);
  va(C, {
    style: "background: var(--bearingpoint-color-surface, #fff)",
    variant: "outlined",
    get value() {
      return l(o);
    },
    set value(R) {
      X(o, R, !0);
    },
    children: (R, q) => {
      var Y = tf(), le = ne(Y);
      pi(le, {
        value: "all",
        children: (U, $) => {
          var he = Je("All status");
          O(U, he);
        },
        $$slots: { default: !0 }
      });
      var F = z(le, 2);
      pi(F, {
        value: "installed",
        children: (U, $) => {
          var he = Je("Installed");
          O(U, he);
        },
        $$slots: { default: !0 }
      });
      var j = z(F, 2);
      pi(j, {
        value: "available",
        children: (U, $) => {
          var he = Je("Available");
          O(U, he);
        },
        $$slots: { default: !0 }
      }), O(R, Y);
    },
    $$slots: { default: !0 }
  });
  var V = z(C, 2);
  va(V, {
    class: "filter-select",
    style: "width:300px; background: var(--bearingpoint-color-surface, #fff)",
    variant: "outlined",
    get value() {
      return l(d);
    },
    set value(R) {
      X(d, R, !0);
    },
    children: (R, q) => {
      var Y = nf(), le = ne(Y);
      pi(le, {
        value: "all",
        children: (j, U) => {
          var $ = Je("All contributors");
          O(j, $);
        },
        $$slots: { default: !0 }
      });
      var F = z(le, 2);
      cr(F, 17, () => v, Mr, (j, U) => {
        pi(j, {
          get value() {
            return l(U).prefix;
          },
          children: ($, he) => {
            var nt = Je();
            He(() => Ee(nt, l(U).name)), O($, nt);
          },
          $$slots: { default: !0 }
        });
      }), O(R, Y);
    },
    $$slots: { default: !0 }
  });
  var ee = z(V, 2);
  va(ee, {
    style: "background: var(--bearingpoint-color-surface, #fff)",
    variant: "outlined",
    get value() {
      return l(c);
    },
    set value(R) {
      X(c, R, !0);
    },
    children: (R, q) => {
      var Y = rf(), le = ne(Y);
      pi(le, {
        value: "all",
        children: (j, U) => {
          var $ = Je("All kinds");
          O(j, $);
        },
        $$slots: { default: !0 }
      });
      var F = z(le, 2);
      cr(F, 17, () => pc, Mr, (j, U) => {
        pi(j, {
          get value() {
            return l(U);
          },
          children: ($, he) => {
            var nt = Je();
            He((oe) => Ee(nt, oe), [
              () => l(U).charAt(0).toUpperCase() + l(U).slice(1)
            ]), O($, nt);
          },
          $$slots: { default: !0 }
        });
      }), O(R, Y);
    },
    $$slots: { default: !0 }
  });
  var P = z(T, 2);
  {
    var N = (R) => {
      var q = sf();
      cr(q, 21, () => l(a), Mr, (Y, le) => {
        var F = af(), j = Q(F);
        He(() => Ee(j, `⚠️ ${l(le) ?? ""}`)), O(Y, F);
      }), O(R, q);
    };
    ae(P, (R) => {
      l(a).length > 0 && R(N);
    });
  }
  var Oe = z(P, 2);
  let K;
  var k = Q(Oe), D = Q(k);
  {
    var G = (R) => {
      var q = lf();
      O(R, q);
    }, re = (R) => {
      var q = of();
      O(R, q);
    }, B = (R) => {
      var q = ve(), Y = ne(q);
      cr(Y, 17, () => v, Mr, (le, F) => {
        const j = /* @__PURE__ */ ue(() => p(l(F).prefix));
        var U = ve(), $ = ne(U);
        {
          var he = (nt) => {
            {
              let oe = /* @__PURE__ */ ue(() => {
                var ce;
                return ((ce = l(s)) == null ? void 0 : ce.id) ?? null;
              });
              Gc(nt, {
                get provider() {
                  return l(F);
                },
                get plugins() {
                  return l(j);
                },
                get selectedPluginId() {
                  return l(oe);
                },
                onSelectPlugin: S,
                onInstall: g,
                onUninstall: m,
                onEnable: E,
                onDisable: w
              });
            }
          };
          ae($, (nt) => {
            l(j).length > 0 && nt(he);
          });
        }
        O(le, U);
      }), O(R, q);
    };
    ae(D, (R) => {
      l(r) ? R(G) : l(h).length === 0 ? R(re, 1) : R(B, -1);
    });
  }
  var fe = z(k, 2);
  {
    var ye = (R) => {
      ef(R, {
        get plugin() {
          return l(s);
        },
        onClose: A,
        onInstall: g,
        onUninstall: m,
        onEnable: E,
        onDisable: w,
        get coreVersion() {
          return t();
        }
      });
    };
    ae(fe, (R) => {
      l(s) !== null && R(ye);
    });
  }
  He(() => K = jn(Oe, 1, "hub-body svelte-1u53k0h", null, K, { "with-details": l(s) !== null })), O(n, x), We();
}
function cf(n, e) {
  df(n, {
    get coreVersion() {
      return e.coreVersion;
    }
  });
}
const ff = "plugins-hub", hf = "0.0.1";
var Wi;
class If extends HTMLElement {
  constructor() {
    super();
    me(this, Wi);
    this.targetDiv = null, this.originalStyles = {}, Se(this, Wi, /* @__PURE__ */ de(Re({ doc: void 0, editCount: void 0, coreVersion: void 0 })));
  }
  get props() {
    return l(b(this, Wi));
  }
  set props(t) {
    X(b(this, Wi), t, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this._editCount, this.props.coreVersion = this._coreVersion;
    const t = this.shadowRoot;
    if (!t)
      throw new Error("ShadowRoot not found");
    const i = vf();
    t.appendChild(i);
    const r = () => {
      Ou(cf, { target: t, props: this.props }), requestAnimationFrame(() => this.applyLayoutHack());
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
    const t = Yl();
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
Wi = new WeakMap();
function vf() {
  const n = `${ff}-v${hf}-style`, e = pf(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function pf() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  If as default
};
