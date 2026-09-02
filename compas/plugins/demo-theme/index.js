var Vr = Object.defineProperty;
var zn = (e) => {
  throw TypeError(e);
};
var Ur = (e, t, n) => t in e ? Vr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var je = (e, t, n) => Ur(e, typeof t != "symbol" ? t + "" : t, n), yn = (e, t, n) => t.has(e) || zn("Cannot " + n);
var a = (e, t, n) => (yn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), k = (e, t, n) => t.has(e) ? zn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), E = (e, t, n, r) => (yn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), R = (e, t, n) => (yn(e, t, "access private method"), n);
const $ = Symbol(), Gr = "http://www.w3.org/1999/xhtml", Yr = !1;
var rr = Array.isArray, Kr = Array.prototype.indexOf, At = Array.prototype.includes, _n = Array.from, Wr = Object.defineProperty, qt = Object.getOwnPropertyDescriptor, Xr = Object.prototype, Zr = Array.prototype, Jr = Object.getPrototypeOf, Bn = Object.isExtensible;
const Qr = () => {
};
function es(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function sr() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const U = 2, Dt = 4, pn = 8, ir = 1 << 24, Re = 16, xe = 32, Je = 64, En = 128, fe = 512, H = 1024, z = 2048, Ne = 4096, W = 8192, ue = 16384, _t = 32768, jn = 1 << 25, Bt = 65536, kn = 1 << 17, ts = 1 << 18, It = 1 << 19, ns = 1 << 20, De = 1 << 25, vt = 65536, Tn = 1 << 21, Vt = 1 << 22, Ze = 1 << 23, nn = Symbol("$state"), Pe = new class extends Error {
  constructor() {
    super(...arguments);
    je(this, "name", "StaleReactionError");
    je(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function rs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ss(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function is(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ls() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function as(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function os() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function fs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function us() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function cs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function vs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ds() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function hs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function lr(e) {
  return e === this.v;
}
function _s(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ar(e) {
  return !_s(e, this.v);
}
let ps = !1, ne = null;
function Rt(e) {
  ne = e;
}
function or(e, t = !1, n) {
  ne = {
    p: ne,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      T
    ),
    l: null
  };
}
function fr(e) {
  var t = (
    /** @type {ComponentContext} */
    ne
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Cr(r);
  }
  return t.i = !0, ne = t.p, /** @type {T} */
  {};
}
function ur() {
  return !0;
}
let mt = [];
function gs() {
  var e = mt;
  mt = [], es(e);
}
function ft(e) {
  if (mt.length === 0) {
    var t = mt;
    queueMicrotask(() => {
      t === mt && gs();
    });
  }
  mt.push(e);
}
function cr(e) {
  var t = T;
  if (t === null)
    return j.f |= Ze, e;
  if (!(t.f & _t) && !(t.f & Dt))
    throw e;
  Xe(e, t);
}
function Xe(e, t) {
  for (; t !== null; ) {
    if (t.f & En) {
      if (!(t.f & _t))
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
const ws = -7169;
function I(e, t) {
  e.f = e.f & ws | t;
}
function Fn(e) {
  e.f & fe || e.deps === null ? I(e, H) : I(e, Ne);
}
function vr(e) {
  if (e !== null)
    for (const t of e)
      !(t.f & U) || !(t.f & vt) || (t.f ^= vt, vr(
        /** @type {Derived} */
        t.deps
      ));
}
function dr(e, t, n) {
  e.f & z ? t.add(e) : e.f & Ne && n.add(e), vr(e.deps), I(e, H);
}
const nt = /* @__PURE__ */ new Set();
let m = null, q = null, Sn = null, xn = !1, yt = null, rn = null;
var Vn = 0;
let ms = 1;
var Et, jt, it, He, Se, Gt, ee, Yt, Ke, $e, Ce, kt, Tt, lt, L, sn, hr, ln, Cn, an, ys;
const dn = class dn {
  constructor() {
    k(this, L);
    je(this, "id", ms++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    je(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    je(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    k(this, Et, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    k(this, jt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    k(this, it, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    k(this, He, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    k(this, Se, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    k(this, Gt, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    k(this, ee, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    k(this, Yt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    k(this, Ke, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    k(this, $e, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    k(this, Ce, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    k(this, kt, /* @__PURE__ */ new Set());
    je(this, "is_fork", !1);
    k(this, Tt, !1);
    /** @type {Set<Batch>} */
    k(this, lt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    a(this, Ce).has(t) || a(this, Ce).set(t, { d: [], m: [] }), a(this, kt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = a(this, Ce).get(t);
    if (r) {
      a(this, Ce).delete(t);
      for (var s of r.d)
        I(s, z), n(s);
      for (s of r.m)
        I(s, Ne), n(s);
    }
    a(this, kt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== $ && !this.previous.has(t) && this.previous.set(t, t.v), t.f & Ze || (this.current.set(t, [n, r]), q == null || q.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    m = this;
  }
  deactivate() {
    m = null, q = null;
  }
  flush() {
    try {
      xn = !0, m = this, R(this, L, ln).call(this);
    } finally {
      Vn = 0, Sn = null, yt = null, rn = null, xn = !1, m = null, q = null, ut.clear();
    }
  }
  discard() {
    for (const t of a(this, jt)) t(this);
    a(this, jt).clear(), a(this, it).clear(), nt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    a(this, Yt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = a(this, He).get(n) ?? 0;
    if (a(this, He).set(n, r + 1), t) {
      let s = a(this, Se).get(n) ?? 0;
      a(this, Se).set(n, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let s = a(this, He).get(n) ?? 0;
    if (s === 1 ? a(this, He).delete(n) : a(this, He).set(n, s - 1), t) {
      let i = a(this, Se).get(n) ?? 0;
      i === 1 ? a(this, Se).delete(n) : a(this, Se).set(n, i - 1);
    }
    a(this, Tt) || r || (E(this, Tt, !0), ft(() => {
      E(this, Tt, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      a(this, Ke).add(r);
    for (const r of n)
      a(this, $e).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    a(this, Et).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    a(this, jt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    a(this, it).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of a(this, it)) t(this);
    a(this, it).clear();
  }
  settled() {
    return (a(this, Gt) ?? E(this, Gt, sr())).promise;
  }
  static ensure() {
    if (m === null) {
      const t = m = new dn();
      xn || (nt.add(m), ft(() => {
        m === t && t.flush();
      }));
    }
    return m;
  }
  apply() {
    {
      q = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var s;
    if (Sn = t, (s = t.b) != null && s.is_pending && t.f & (Dt | pn | ir) && !(t.f & _t)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (yt !== null && n === T && (j === null || !(j.f & U)))
        return;
      if (r & (Je | xe)) {
        if (!(r & H))
          return;
        n.f ^= H;
      }
    }
    a(this, ee).push(n);
  }
};
Et = new WeakMap(), jt = new WeakMap(), it = new WeakMap(), He = new WeakMap(), Se = new WeakMap(), Gt = new WeakMap(), ee = new WeakMap(), Yt = new WeakMap(), Ke = new WeakMap(), $e = new WeakMap(), Ce = new WeakMap(), kt = new WeakMap(), Tt = new WeakMap(), lt = new WeakMap(), L = new WeakSet(), sn = function() {
  return this.is_fork || a(this, Se).size > 0;
}, hr = function() {
  for (const r of a(this, lt))
    for (const s of a(r, Se).keys()) {
      for (var t = !1, n = s; n.parent !== null; ) {
        if (a(this, Ce).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, ln = function() {
  var c, l;
  if (Vn++ > 1e3 && (nt.delete(this), xs()), !R(this, L, sn).call(this)) {
    for (const o of a(this, Ke))
      a(this, $e).delete(o), I(o, z), this.schedule(o);
    for (const o of a(this, $e))
      I(o, Ne), this.schedule(o);
  }
  const t = a(this, ee);
  E(this, ee, []), this.apply();
  var n = yt = [], r = [], s = rn = [];
  for (const o of t)
    try {
      R(this, L, Cn).call(this, o, n, r);
    } catch (f) {
      throw gr(o), f;
    }
  if (m = null, s.length > 0) {
    var i = dn.ensure();
    for (const o of s)
      i.schedule(o);
  }
  if (yt = null, rn = null, R(this, L, sn).call(this) || R(this, L, hr).call(this)) {
    R(this, L, an).call(this, r), R(this, L, an).call(this, n);
    for (const [o, f] of a(this, Ce))
      pr(o, f);
  } else {
    a(this, He).size === 0 && nt.delete(this), a(this, Ke).clear(), a(this, $e).clear();
    for (const o of a(this, Et)) o(this);
    a(this, Et).clear(), Un(r), Un(n), (c = a(this, Gt)) == null || c.resolve();
  }
  var u = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    m
  );
  if (a(this, ee).length > 0) {
    const o = u ?? (u = this);
    a(o, ee).push(...a(this, ee).filter((f) => !a(o, ee).includes(f)));
  }
  u !== null && (nt.add(u), R(l = u, L, ln).call(l));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Cn = function(t, n, r) {
  t.f ^= H;
  for (var s = t.first; s !== null; ) {
    var i = s.f, u = (i & (xe | Je)) !== 0, c = u && (i & H) !== 0, l = c || (i & W) !== 0 || a(this, Ce).has(s);
    if (!l && s.fn !== null) {
      u ? s.f ^= H : i & Dt ? n.push(s) : Zt(s) && (i & Re && a(this, $e).add(s), Mt(s));
      var o = s.first;
      if (o !== null) {
        s = o;
        continue;
      }
    }
    for (; s !== null; ) {
      var f = s.next;
      if (f !== null) {
        s = f;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
an = function(t) {
  for (var n = 0; n < t.length; n += 1)
    dr(t[n], a(this, Ke), a(this, $e));
}, ys = function() {
  var f, p, h;
  for (const _ of nt) {
    var t = _.id < this.id, n = [];
    for (const [v, [g, d]] of this.current) {
      if (_.current.has(v)) {
        var r = (
          /** @type {[any, boolean]} */
          _.current.get(v)[0]
        );
        if (t && g !== r)
          _.current.set(v, [g, d]);
        else
          continue;
      }
      n.push(v);
    }
    var s = [..._.current.keys()].filter((v) => !this.current.has(v));
    if (s.length === 0)
      t && _.discard();
    else if (n.length > 0) {
      if (t)
        for (const v of a(this, kt))
          _.unskip_effect(v, (g) => {
            var d;
            g.f & (Re | Vt) ? _.schedule(g) : R(d = _, L, an).call(d, [g]);
          });
      _.activate();
      var i = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
      for (var c of n)
        _r(c, s, i, u);
      u = /* @__PURE__ */ new Map();
      var l = [..._.current.keys()].filter(
        (v) => this.current.has(v) ? (
          /** @type {[any, boolean]} */
          this.current.get(v)[0] !== v
        ) : !0
      );
      for (const v of a(this, Yt))
        !(v.f & (ue | W | kn)) && Ln(v, l, u) && (v.f & (Vt | Re) ? (I(v, z), _.schedule(v)) : a(_, Ke).add(v));
      if (a(_, ee).length > 0) {
        _.apply();
        for (var o of a(_, ee))
          R(f = _, L, Cn).call(f, o, [], []);
        E(_, ee, []);
      }
      _.deactivate();
    }
  }
  for (const _ of nt)
    a(_, lt).has(this) && (a(_, lt).delete(this), a(_, lt).size === 0 && !R(p = _, L, sn).call(p) && (_.activate(), R(h = _, L, ln).call(h)));
};
let dt = dn;
function xs() {
  try {
    os();
  } catch (e) {
    Xe(e, Sn);
  }
}
let ge = null;
function Un(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (ue | W)) && Zt(r) && (ge = /* @__PURE__ */ new Set(), Mt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Nr(r), (ge == null ? void 0 : ge.size) > 0)) {
        ut.clear();
        for (const s of ge) {
          if (s.f & (ue | W)) continue;
          const i = [s];
          let u = s.parent;
          for (; u !== null; )
            ge.has(u) && (ge.delete(u), i.push(u)), u = u.parent;
          for (let c = i.length - 1; c >= 0; c--) {
            const l = i[c];
            l.f & (ue | W) || Mt(l);
          }
        }
        ge.clear();
      }
    }
    ge = null;
  }
}
function _r(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      i & U ? _r(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : i & (Vt | Re) && !(i & z) && Ln(s, t, r) && (I(s, z), Pn(
        /** @type {Effect} */
        s
      ));
    }
}
function Ln(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (At.call(t, s))
        return !0;
      if (s.f & U && Ln(
        /** @type {Derived} */
        s,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function Pn(e) {
  m.schedule(e);
}
function pr(e, t) {
  if (!(e.f & xe && e.f & H)) {
    e.f & z ? t.d.push(e) : e.f & Ne && t.m.push(e), I(e, H);
    for (var n = e.first; n !== null; )
      pr(n, t), n = n.next;
  }
}
function gr(e) {
  I(e, H);
  for (var t = e.first; t !== null; )
    gr(t), t = t.next;
}
function bs(e) {
  let t = 0, n = ht(0), r;
  return () => {
    $n() && (x(n), Ar(() => (t === 0 && (r = Br(() => e(() => zt(n)))), t += 1, () => {
      ft(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, zt(n));
      });
    })));
  };
}
var Es = Bt | It;
function js(e, t, n, r) {
  new ks(e, t, n, r);
}
var le, On, ae, at, Z, oe, K, te, qe, ot, We, St, Kt, Wt, ze, hn, M, Ts, Ss, Cs, An, on, fn, Dn, Rn;
class ks {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, s) {
    k(this, M);
    /** @type {Boundary | null} */
    je(this, "parent");
    je(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    je(this, "transform_error");
    /** @type {TemplateNode} */
    k(this, le);
    /** @type {TemplateNode | null} */
    k(this, On, null);
    /** @type {BoundaryProps} */
    k(this, ae);
    /** @type {((anchor: Node) => void)} */
    k(this, at);
    /** @type {Effect} */
    k(this, Z);
    /** @type {Effect | null} */
    k(this, oe, null);
    /** @type {Effect | null} */
    k(this, K, null);
    /** @type {Effect | null} */
    k(this, te, null);
    /** @type {DocumentFragment | null} */
    k(this, qe, null);
    k(this, ot, 0);
    k(this, We, 0);
    k(this, St, !1);
    /** @type {Set<Effect>} */
    k(this, Kt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    k(this, Wt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    k(this, ze, null);
    k(this, hn, bs(() => (E(this, ze, ht(a(this, ot))), () => {
      E(this, ze, null);
    })));
    var i;
    E(this, le, t), E(this, ae, n), E(this, at, (u) => {
      var c = (
        /** @type {Effect} */
        T
      );
      c.b = this, c.f |= En, r(u);
    }), this.parent = /** @type {Effect} */
    T.b, this.transform_error = s ?? ((i = this.parent) == null ? void 0 : i.transform_error) ?? ((u) => u), E(this, Z, Dr(() => {
      R(this, M, An).call(this);
    }, Es));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    dr(t, a(this, Kt), a(this, Wt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!a(this, ae).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    R(this, M, Dn).call(this, t, n), E(this, ot, a(this, ot) + t), !(!a(this, ze) || a(this, St)) && (E(this, St, !0), ft(() => {
      E(this, St, !1), a(this, ze) && Nt(a(this, ze), a(this, ot));
    }));
  }
  get_effect_pending() {
    return a(this, hn).call(this), x(
      /** @type {Source<number>} */
      a(this, ze)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!a(this, ae).onerror && !a(this, ae).failed)
      throw t;
    m != null && m.is_fork ? (a(this, oe) && m.skip_effect(a(this, oe)), a(this, K) && m.skip_effect(a(this, K)), a(this, te) && m.skip_effect(a(this, te)), m.on_fork_commit(() => {
      R(this, M, Rn).call(this, t);
    })) : R(this, M, Rn).call(this, t);
  }
}
le = new WeakMap(), On = new WeakMap(), ae = new WeakMap(), at = new WeakMap(), Z = new WeakMap(), oe = new WeakMap(), K = new WeakMap(), te = new WeakMap(), qe = new WeakMap(), ot = new WeakMap(), We = new WeakMap(), St = new WeakMap(), Kt = new WeakMap(), Wt = new WeakMap(), ze = new WeakMap(), hn = new WeakMap(), M = new WeakSet(), Ts = function() {
  try {
    E(this, oe, Te(() => a(this, at).call(this, a(this, le))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Ss = function(t) {
  const n = a(this, ae).failed;
  n && E(this, te, Te(() => {
    n(
      a(this, le),
      () => t,
      () => () => {
      }
    );
  }));
}, Cs = function() {
  const t = a(this, ae).pending;
  t && (this.is_pending = !0, E(this, K, Te(() => t(a(this, le)))), ft(() => {
    var n = E(this, qe, document.createDocumentFragment()), r = xt();
    n.append(r), E(this, oe, R(this, M, fn).call(this, () => Te(() => a(this, at).call(this, r)))), a(this, We) === 0 && (a(this, le).before(n), E(this, qe, null), bt(
      /** @type {Effect} */
      a(this, K),
      () => {
        E(this, K, null);
      }
    ), R(this, M, on).call(
      this,
      /** @type {Batch} */
      m
    ));
  }));
}, An = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), E(this, We, 0), E(this, ot, 0), E(this, oe, Te(() => {
      a(this, at).call(this, a(this, le));
    })), a(this, We) > 0) {
      var t = E(this, qe, document.createDocumentFragment());
      Fr(a(this, oe), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        a(this, ae).pending
      );
      E(this, K, Te(() => n(a(this, le))));
    } else
      R(this, M, on).call(
        this,
        /** @type {Batch} */
        m
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
on = function(t) {
  this.is_pending = !1, t.transfer_effects(a(this, Kt), a(this, Wt));
}, /**
 * @template T
 * @param {() => T} fn
 */
fn = function(t) {
  var n = T, r = j, s = ne;
  Me(a(this, Z)), ve(a(this, Z)), Rt(a(this, Z).ctx);
  try {
    return dt.ensure(), t();
  } catch (i) {
    return cr(i), null;
  } finally {
    Me(n), ve(r), Rt(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Dn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && R(r = this.parent, M, Dn).call(r, t, n);
    return;
  }
  E(this, We, a(this, We) + t), a(this, We) === 0 && (R(this, M, on).call(this, n), a(this, K) && bt(a(this, K), () => {
    E(this, K, null);
  }), a(this, qe) && (a(this, le).before(a(this, qe)), E(this, qe, null)));
}, /**
 * @param {unknown} error
 */
Rn = function(t) {
  a(this, oe) && (ye(a(this, oe)), E(this, oe, null)), a(this, K) && (ye(a(this, K)), E(this, K, null)), a(this, te) && (ye(a(this, te)), E(this, te, null));
  var n = a(this, ae).onerror;
  let r = a(this, ae).failed;
  var s = !1, i = !1;
  const u = () => {
    if (s) {
      hs();
      return;
    }
    s = !0, i && vs(), a(this, te) !== null && bt(a(this, te), () => {
      E(this, te, null);
    }), R(this, M, fn).call(this, () => {
      R(this, M, An).call(this);
    });
  }, c = (l) => {
    try {
      i = !0, n == null || n(l, u), i = !1;
    } catch (o) {
      Xe(o, a(this, Z) && a(this, Z).parent);
    }
    r && E(this, te, R(this, M, fn).call(this, () => {
      try {
        return Te(() => {
          var o = (
            /** @type {Effect} */
            T
          );
          o.b = this, o.f |= En, r(
            a(this, le),
            () => l,
            () => u
          );
        });
      } catch (o) {
        return Xe(
          o,
          /** @type {Effect} */
          a(this, Z).parent
        ), null;
      }
    }));
  };
  ft(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (o) {
      Xe(o, a(this, Z) && a(this, Z).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      c,
      /** @param {unknown} e */
      (o) => Xe(o, a(this, Z) && a(this, Z).parent)
    ) : c(l);
  });
};
function As(e, t, n, r) {
  const s = mr;
  var i = e.filter((h) => !h.settled);
  if (n.length === 0 && i.length === 0) {
    r(t.map(s));
    return;
  }
  var u = (
    /** @type {Effect} */
    T
  ), c = Ds(), l = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((h) => h.promise)) : null;
  function o(h) {
    c();
    try {
      r(h);
    } catch (_) {
      u.f & ue || Xe(_, u);
    }
    cn();
  }
  if (n.length === 0) {
    l.then(() => o(t.map(s)));
    return;
  }
  var f = wr();
  function p() {
    Promise.all(n.map((h) => /* @__PURE__ */ Rs(h))).then((h) => o([...t.map(s), ...h])).catch((h) => Xe(h, u)).finally(() => f());
  }
  l ? l.then(() => {
    c(), p(), cn();
  }) : p();
}
function Ds() {
  var e = (
    /** @type {Effect} */
    T
  ), t = j, n = ne, r = (
    /** @type {Batch} */
    m
  );
  return function(i = !0) {
    Me(e), ve(t), Rt(n), i && !(e.f & ue) && (r == null || r.activate(), r == null || r.apply());
  };
}
function cn(e = !0) {
  Me(null), ve(null), Rt(null), e && (m == null || m.deactivate());
}
function wr() {
  var e = (
    /** @type {Effect} */
    T
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    m
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function mr(e) {
  var t = U | z;
  return T !== null && (T.f |= It), {
    ctx: ne,
    deps: null,
    effects: null,
    equals: lr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      $
    ),
    wv: 0,
    parent: T,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Rs(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    T
  );
  r === null && rs();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = ht(
    /** @type {V} */
    $
  ), u = !j, c = /* @__PURE__ */ new Map();
  return Ys(() => {
    var _;
    var l = (
      /** @type {Effect} */
      T
    ), o = sr();
    s = o.promise;
    try {
      Promise.resolve(e()).then(o.resolve, o.reject).finally(cn);
    } catch (v) {
      o.reject(v), cn();
    }
    var f = (
      /** @type {Batch} */
      m
    );
    if (u) {
      if (l.f & _t)
        var p = wr();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        (_ = c.get(f)) == null || _.reject(Pe), c.delete(f);
      else {
        for (const v of c.values())
          v.reject(Pe);
        c.clear();
      }
      c.set(f, o);
    }
    const h = (v, g = void 0) => {
      if (p) {
        var d = g === Pe;
        p(d);
      }
      if (!(g === Pe || l.f & ue)) {
        if (f.activate(), g)
          i.f |= Ze, Nt(i, g);
        else {
          i.f & Ze && (i.f ^= Ze), Nt(i, v);
          for (const [w, N] of c) {
            if (c.delete(w), w === f) break;
            N.reject(Pe);
          }
        }
        f.deactivate();
      }
    };
    o.promise.then(h, (v) => h(null, v || "unknown"));
  }), Bs(() => {
    for (const l of c.values())
      l.reject(Pe);
  }), new Promise((l) => {
    function o(f) {
      function p() {
        f === s ? l(i) : o(s);
      }
      f.then(p, p);
    }
    o(s);
  });
}
// @__NO_SIDE_EFFECTS__
function Ns(e) {
  const t = /* @__PURE__ */ mr(e);
  return t.equals = ar, t;
}
function Ms(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ye(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Hn(e) {
  var t, n = T, r = e.parent;
  if (!Qe && r !== null && r.f & (ue | W))
    return ds(), e.v;
  Me(r);
  try {
    e.f &= ~vt, Ms(e), t = $r(e);
  } finally {
    Me(n);
  }
  return t;
}
function yr(e) {
  var t = Hn(e);
  if (!e.equals(t) && (e.wv = Pr(), (!(m != null && m.is_fork) || e.deps === null) && (m !== null ? m.capture(e, t, !0) : e.v = t, e.deps === null))) {
    I(e, H);
    return;
  }
  Qe || (q !== null ? ($n() || m != null && m.is_fork) && q.set(e, t) : Fn(e));
}
function Is(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(Pe), r.teardown = Qr, r.ac = null, Ut(r, 0), qn(r));
}
function xr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Mt(t);
}
let Nn = /* @__PURE__ */ new Set();
const ut = /* @__PURE__ */ new Map();
let br = !1;
function ht(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: lr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  const n = ht(e);
  return Xs(n), n;
}
// @__NO_SIDE_EFFECTS__
function Os(e, t = !1, n = !0) {
  const r = ht(e);
  return t || (r.equals = ar), r;
}
function Ae(e, t, n = !1) {
  j !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!me || j.f & kn) && ur() && j.f & (U | Re | Vt | kn) && (ce === null || !At.call(ce, e)) && cs();
  let r = n ? rt(t) : t;
  return Nt(e, r, rn);
}
function Nt(e, t, n = null) {
  if (!e.equals(t)) {
    ut.set(e, Qe ? t : e.v);
    var r = dt.ensure();
    if (r.capture(e, t), e.f & U) {
      const s = (
        /** @type {Derived} */
        e
      );
      e.f & z && Hn(s), q === null && Fn(s);
    }
    e.wv = Pr(), Er(e, z, n), T !== null && T.f & H && !(T.f & (xe | Je)) && (ie === null ? Zs([e]) : ie.push(e)), !r.is_fork && Nn.size > 0 && !br && Fs();
  }
  return t;
}
function Fs() {
  br = !1;
  for (const e of Nn)
    e.f & H && I(e, Ne), Zt(e) && Mt(e);
  Nn.clear();
}
function zt(e) {
  Ae(e, e.v + 1);
}
function Er(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = r.length, i = 0; i < s; i++) {
      var u = r[i], c = u.f, l = (c & z) === 0;
      if (l && I(u, t), c & U) {
        var o = (
          /** @type {Derived} */
          u
        );
        q == null || q.delete(o), c & vt || (c & fe && (u.f |= vt), Er(o, Ne, n));
      } else if (l) {
        var f = (
          /** @type {Effect} */
          u
        );
        c & Re && ge !== null && ge.add(f), n !== null ? n.push(f) : Pn(f);
      }
    }
}
function rt(e) {
  if (typeof e != "object" || e === null || nn in e)
    return e;
  const t = Jr(e);
  if (t !== Xr && t !== Zr)
    return e;
  var n = /* @__PURE__ */ new Map(), r = rr(e), s = /* @__PURE__ */ we(0), i = ct, u = (c) => {
    if (ct === i)
      return c();
    var l = j, o = ct;
    ve(null), Wn(i);
    var f = c();
    return ve(l), Wn(o), f;
  };
  return r && n.set("length", /* @__PURE__ */ we(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(c, l, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && fs();
        var f = n.get(l);
        return f === void 0 ? u(() => {
          var p = /* @__PURE__ */ we(o.value);
          return n.set(l, p), p;
        }) : Ae(f, o.value, !0), !0;
      },
      deleteProperty(c, l) {
        var o = n.get(l);
        if (o === void 0) {
          if (l in c) {
            const f = u(() => /* @__PURE__ */ we($));
            n.set(l, f), zt(s);
          }
        } else
          Ae(o, $), zt(s);
        return !0;
      },
      get(c, l, o) {
        var _;
        if (l === nn)
          return e;
        var f = n.get(l), p = l in c;
        if (f === void 0 && (!p || (_ = qt(c, l)) != null && _.writable) && (f = u(() => {
          var v = rt(p ? c[l] : $), g = /* @__PURE__ */ we(v);
          return g;
        }), n.set(l, f)), f !== void 0) {
          var h = x(f);
          return h === $ ? void 0 : h;
        }
        return Reflect.get(c, l, o);
      },
      getOwnPropertyDescriptor(c, l) {
        var o = Reflect.getOwnPropertyDescriptor(c, l);
        if (o && "value" in o) {
          var f = n.get(l);
          f && (o.value = x(f));
        } else if (o === void 0) {
          var p = n.get(l), h = p == null ? void 0 : p.v;
          if (p !== void 0 && h !== $)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return o;
      },
      has(c, l) {
        var h;
        if (l === nn)
          return !0;
        var o = n.get(l), f = o !== void 0 && o.v !== $ || Reflect.has(c, l);
        if (o !== void 0 || T !== null && (!f || (h = qt(c, l)) != null && h.writable)) {
          o === void 0 && (o = u(() => {
            var _ = f ? rt(c[l]) : $, v = /* @__PURE__ */ we(_);
            return v;
          }), n.set(l, o));
          var p = x(o);
          if (p === $)
            return !1;
        }
        return f;
      },
      set(c, l, o, f) {
        var A;
        var p = n.get(l), h = l in c;
        if (r && l === "length")
          for (var _ = o; _ < /** @type {Source<number>} */
          p.v; _ += 1) {
            var v = n.get(_ + "");
            v !== void 0 ? Ae(v, $) : _ in c && (v = u(() => /* @__PURE__ */ we($)), n.set(_ + "", v));
          }
        if (p === void 0)
          (!h || (A = qt(c, l)) != null && A.writable) && (p = u(() => /* @__PURE__ */ we(void 0)), Ae(p, rt(o)), n.set(l, p));
        else {
          h = p.v !== $;
          var g = u(() => rt(o));
          Ae(p, g);
        }
        var d = Reflect.getOwnPropertyDescriptor(c, l);
        if (d != null && d.set && d.set.call(f, o), !h) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), N = Number(l);
            Number.isInteger(N) && N >= w.v && Ae(w, N + 1);
          }
          zt(s);
        }
        return !0;
      },
      ownKeys(c) {
        x(s);
        var l = Reflect.ownKeys(c).filter((p) => {
          var h = n.get(p);
          return h === void 0 || h.v !== $;
        });
        for (var [o, f] of n)
          f.v !== $ && !(o in c) && l.push(o);
        return l;
      },
      setPrototypeOf() {
        us();
      }
    }
  );
}
var Gn, jr, kr, Tr;
function Ls() {
  if (Gn === void 0) {
    Gn = window, jr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    kr = qt(t, "firstChild").get, Tr = qt(t, "nextSibling").get, Bn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Bn(n) && (n.__t = void 0);
  }
}
function xt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  return (
    /** @type {TemplateNode | null} */
    kr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  return (
    /** @type {TemplateNode | null} */
    Tr.call(e)
  );
}
function y(e, t) {
  return /* @__PURE__ */ vn(e);
}
function Yn(e, t = !1) {
  {
    var n = /* @__PURE__ */ vn(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Xt(n) : n;
  }
}
function C(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Xt(r);
  return r;
}
function Ps(e) {
  e.textContent = "";
}
function Hs() {
  return !1;
}
function $s(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Gr, e, void 0)
  );
}
function Sr(e) {
  var t = j, n = T;
  ve(null), Me(null);
  try {
    return e();
  } finally {
    ve(t), Me(n);
  }
}
function qs(e) {
  T === null && (j === null && as(), ls()), Qe && is();
}
function zs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Be(e, t) {
  var n = T;
  n !== null && n.f & W && (e |= W);
  var r = {
    ctx: ne,
    deps: null,
    nodes: null,
    f: e | z | fe,
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
  m == null || m.register_created_effect(r);
  var s = r;
  if (e & Dt)
    yt !== null ? yt.push(r) : dt.ensure().schedule(r);
  else if (t !== null) {
    try {
      Mt(r);
    } catch (u) {
      throw ye(r), u;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & It) && (s = s.first, e & Re && e & Bt && s !== null && (s.f |= Bt));
  }
  if (s !== null && (s.parent = n, n !== null && zs(s, n), j !== null && j.f & U && !(e & Je))) {
    var i = (
      /** @type {Derived} */
      j
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return r;
}
function $n() {
  return j !== null && !me;
}
function Bs(e) {
  const t = Be(pn, null);
  return I(t, H), t.teardown = e, t;
}
function Vs(e) {
  qs();
  var t = (
    /** @type {Effect} */
    T.f
  ), n = !j && (t & xe) !== 0 && (t & _t) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ne
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Cr(e);
}
function Cr(e) {
  return Be(Dt | ns, e);
}
function Us(e) {
  dt.ensure();
  const t = Be(Je | It, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? bt(t, () => {
      ye(t), r(void 0);
    }) : (ye(t), r(void 0));
  });
}
function Gs(e) {
  return Be(Dt, e);
}
function Ys(e) {
  return Be(Vt | It, e);
}
function Ar(e, t = 0) {
  return Be(pn | t, e);
}
function ke(e, t = [], n = [], r = []) {
  As(r, t, n, (s) => {
    Be(pn, () => e(...s.map(x)));
  });
}
function Dr(e, t = 0) {
  var n = Be(Re | t, e);
  return n;
}
function Te(e) {
  return Be(xe | It, e);
}
function Rr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Qe, r = j;
    Kn(!0), ve(null);
    try {
      t.call(null);
    } finally {
      Kn(n), ve(r);
    }
  }
}
function qn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Sr(() => {
      s.abort(Pe);
    });
    var r = n.next;
    n.f & Je ? n.parent = null : ye(n, t), n = r;
  }
}
function Ks(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & xe || ye(t), t = n;
  }
}
function ye(e, t = !0) {
  var n = !1;
  (t || e.f & ts) && e.nodes !== null && e.nodes.end !== null && (Ws(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), I(e, jn), qn(e, t && !n), Ut(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const i of r)
      i.stop();
  Rr(e), e.f ^= jn, e.f |= ue;
  var s = e.parent;
  s !== null && s.first !== null && Nr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ws(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Xt(e);
    e.remove(), e = n;
  }
}
function Nr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function bt(e, t, n = !0) {
  var r = [];
  Mr(e, r, !0);
  var s = () => {
    n && ye(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var u = () => --i || s();
    for (var c of r)
      c.out(u);
  } else
    s();
}
function Mr(e, t, n) {
  if (!(e.f & W)) {
    e.f ^= W;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const c of r)
        (c.is_global || n) && t.push(c);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if (!(s.f & Je)) {
        var u = (s.f & Bt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & xe) !== 0 && (e.f & Re) !== 0;
        Mr(s, t, u ? n : !1);
      }
      s = i;
    }
  }
}
function Ir(e) {
  Or(e, !0);
}
function Or(e, t) {
  if (e.f & W) {
    e.f ^= W, e.f & H || (I(e, z), dt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Bt) !== 0 || (n.f & xe) !== 0;
      Or(n, s ? t : !1), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const u of i)
        (u.is_global || t) && u.in();
  }
}
function Fr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ Xt(n);
      t.append(n), n = s;
    }
}
let un = !1, Qe = !1;
function Kn(e) {
  Qe = e;
}
let j = null, me = !1;
function ve(e) {
  j = e;
}
let T = null;
function Me(e) {
  T = e;
}
let ce = null;
function Xs(e) {
  j !== null && (ce === null ? ce = [e] : ce.push(e));
}
let J = null, Q = 0, ie = null;
function Zs(e) {
  ie = e;
}
let Lr = 1, st = 0, ct = st;
function Wn(e) {
  ct = e;
}
function Pr() {
  return ++Lr;
}
function Zt(e) {
  var t = e.f;
  if (t & z)
    return !0;
  if (t & U && (e.f &= ~vt), t & Ne) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, s = 0; s < r; s++) {
      var i = n[s];
      if (Zt(
        /** @type {Derived} */
        i
      ) && yr(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    t & fe && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    q === null && I(e, H);
  }
  return !1;
}
function Hr(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(ce !== null && At.call(ce, e)))
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      i.f & U ? Hr(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? I(i, z) : i.f & H && I(i, Ne), Pn(
        /** @type {Effect} */
        i
      ));
    }
}
function $r(e) {
  var g;
  var t = J, n = Q, r = ie, s = j, i = ce, u = ne, c = me, l = ct, o = e.f;
  J = /** @type {null | Value[]} */
  null, Q = 0, ie = null, j = o & (xe | Je) ? null : e, ce = null, Rt(e.ctx), me = !1, ct = ++st, e.ac !== null && (Sr(() => {
    e.ac.abort(Pe);
  }), e.ac = null);
  try {
    e.f |= Tn;
    var f = (
      /** @type {Function} */
      e.fn
    ), p = f();
    e.f |= _t;
    var h = e.deps, _ = m == null ? void 0 : m.is_fork;
    if (J !== null) {
      var v;
      if (_ || Ut(e, Q), h !== null && Q > 0)
        for (h.length = Q + J.length, v = 0; v < J.length; v++)
          h[Q + v] = J[v];
      else
        e.deps = h = J;
      if ($n() && e.f & fe)
        for (v = Q; v < h.length; v++)
          ((g = h[v]).reactions ?? (g.reactions = [])).push(e);
    } else !_ && h !== null && Q < h.length && (Ut(e, Q), h.length = Q);
    if (ur() && ie !== null && !me && h !== null && !(e.f & (U | Ne | z)))
      for (v = 0; v < /** @type {Source[]} */
      ie.length; v++)
        Hr(
          ie[v],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (st++, s.deps !== null)
        for (let d = 0; d < n; d += 1)
          s.deps[d].rv = st;
      if (t !== null)
        for (const d of t)
          d.rv = st;
      ie !== null && (r === null ? r = ie : r.push(.../** @type {Source[]} */
      ie));
    }
    return e.f & Ze && (e.f ^= Ze), p;
  } catch (d) {
    return cr(d);
  } finally {
    e.f ^= Tn, J = t, Q = n, ie = r, j = s, ce = i, Rt(u), me = c, ct = l;
  }
}
function Js(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Kr.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && t.f & U && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (J === null || !At.call(J, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    i.f & fe && (i.f ^= fe, i.f &= ~vt), i.v !== $ && Fn(i), Is(i), Ut(i, 0);
  }
}
function Ut(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Js(e, n[r]);
}
function Mt(e) {
  var t = e.f;
  if (!(t & ue)) {
    I(e, H);
    var n = T, r = un;
    T = e, un = !0;
    try {
      t & (Re | ir) ? Ks(e) : qn(e), Rr(e);
      var s = $r(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Lr;
      var i;
      Yr && ps && e.f & z && e.deps;
    } finally {
      un = r, T = n;
    }
  }
}
function x(e) {
  var t = e.f, n = (t & U) !== 0;
  if (j !== null && !me) {
    var r = T !== null && (T.f & ue) !== 0;
    if (!r && (ce === null || !At.call(ce, e))) {
      var s = j.deps;
      if (j.f & Tn)
        e.rv < st && (e.rv = st, J === null && s !== null && s[Q] === e ? Q++ : J === null ? J = [e] : J.push(e));
      else {
        (j.deps ?? (j.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [j] : At.call(i, j) || i.push(j);
      }
    }
  }
  if (Qe && ut.has(e))
    return ut.get(e);
  if (n) {
    var u = (
      /** @type {Derived} */
      e
    );
    if (Qe) {
      var c = u.v;
      return (!(u.f & H) && u.reactions !== null || zr(u)) && (c = Hn(u)), ut.set(u, c), c;
    }
    var l = (u.f & fe) === 0 && !me && j !== null && (un || (j.f & fe) !== 0), o = (u.f & _t) === 0;
    Zt(u) && (l && (u.f |= fe), yr(u)), l && !o && (xr(u), qr(u));
  }
  if (q != null && q.has(e))
    return q.get(e);
  if (e.f & Ze)
    throw e.v;
  return e.v;
}
function qr(e) {
  if (e.f |= fe, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), t.f & U && !(t.f & fe) && (xr(
        /** @type {Derived} */
        t
      ), qr(
        /** @type {Derived} */
        t
      ));
}
function zr(e) {
  if (e.v === $) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ut.has(t) || t.f & U && zr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Br(e) {
  var t = me;
  try {
    return me = !0, e();
  } finally {
    me = t;
  }
}
const en = Symbol("events"), Qs = /* @__PURE__ */ new Set(), Xn = /* @__PURE__ */ new Set();
let Zn = null;
function Jn(e) {
  var d, w;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = ((d = e.composedPath) == null ? void 0 : d.call(e)) || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  Zn = e;
  var u = 0, c = Zn === e && e[en];
  if (c) {
    var l = s.indexOf(c);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[en] = t;
      return;
    }
    var o = s.indexOf(t);
    if (o === -1)
      return;
    l <= o && (u = l);
  }
  if (i = /** @type {Element} */
  s[u] || e.target, i !== t) {
    Wr(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var f = j, p = T;
    ve(null), Me(null);
    try {
      for (var h, _ = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var g = (w = i[en]) == null ? void 0 : w[r];
          g != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && g.call(i, e);
        } catch (N) {
          h ? _.push(N) : h = N;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (h) {
        for (let N of _)
          queueMicrotask(() => {
            throw N;
          });
        throw h;
      }
    } finally {
      e[en] = t, delete e.currentTarget, ve(f), Me(p);
    }
  }
}
var tr;
const bn = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((tr = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : tr.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ei(e) {
  return (
    /** @type {string} */
    (bn == null ? void 0 : bn.createHTML(e)) ?? e
  );
}
function ti(e) {
  var t = $s("template");
  return t.innerHTML = ei(e.replaceAll("<!>", "<!---->")), t.content;
}
function Mn(e, t) {
  var n = (
    /** @type {Effect} */
    T
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = ti(i ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ vn(s)));
    var u = (
      /** @type {TemplateNode} */
      r || jr ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ vn(u)
      ), l = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Mn(c, l);
    } else
      Mn(u, u);
    return u;
  };
}
function ni() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = xt();
  return e.append(t, n), Mn(t, n), e;
}
function se(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ri = ["touchstart", "touchmove"];
function si(e) {
  return ri.includes(e);
}
function V(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function ii(e, t) {
  return li(e, t);
}
const tn = /* @__PURE__ */ new Map();
function li(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: u = !0, transformError: c }) {
  Ls();
  var l = void 0, o = Us(() => {
    var f = n ?? t.appendChild(xt());
    js(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (_) => {
        or({});
        var v = (
          /** @type {ComponentContext} */
          ne
        );
        i && (v.c = i), s && (r.$$events = s), l = e(_, r) || {}, fr();
      },
      c
    );
    var p = /* @__PURE__ */ new Set(), h = (_) => {
      for (var v = 0; v < _.length; v++) {
        var g = _[v];
        if (!p.has(g)) {
          p.add(g);
          var d = si(g);
          for (const A of [t, document]) {
            var w = tn.get(A);
            w === void 0 && (w = /* @__PURE__ */ new Map(), tn.set(A, w));
            var N = w.get(g);
            N === void 0 ? (A.addEventListener(g, Jn, { passive: d }), w.set(g, 1)) : w.set(g, N + 1);
          }
        }
      }
    };
    return h(_n(Qs)), Xn.add(h), () => {
      var d;
      for (var _ of p)
        for (const w of [t, document]) {
          var v = (
            /** @type {Map<string, number>} */
            tn.get(w)
          ), g = (
            /** @type {number} */
            v.get(_)
          );
          --g == 0 ? (w.removeEventListener(_, Jn), v.delete(_), v.size === 0 && tn.delete(w)) : v.set(_, g);
        }
      Xn.delete(h), f !== n && ((d = f.parentNode) == null || d.removeChild(f));
    };
  });
  return ai.set(l, o), l;
}
let ai = /* @__PURE__ */ new WeakMap();
function _e(e, t) {
  return t;
}
function oi(e, t, n) {
  for (var r = [], s = t.length, i, u = t.length, c = 0; c < s; c++) {
    let p = t[c];
    bt(
      p,
      () => {
        if (i) {
          if (i.pending.delete(p), i.done.add(p), i.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            In(e, _n(i.done)), h.delete(i), h.size === 0 && (e.outrogroups = null);
          }
        } else
          u -= 1;
      },
      !1
    );
  }
  if (u === 0) {
    var l = r.length === 0 && n !== null;
    if (l) {
      var o = (
        /** @type {Element} */
        n
      ), f = (
        /** @type {Element} */
        o.parentNode
      );
      Ps(f), f.append(o), e.items.clear();
    }
    In(e, t, !l);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function In(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const u of e.pending.values())
      for (const c of u)
        r.add(
          /** @type {EachItem} */
          e.items.get(c).e
        );
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (r != null && r.has(i)) {
      i.f |= De;
      const u = document.createDocumentFragment();
      Fr(i, u);
    } else
      ye(t[s], n);
  }
}
var Qn;
function pe(e, t, n, r, s, i = null) {
  var u = e, c = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var o = (
      /** @type {Element} */
      e
    );
    u = o.appendChild(xt());
  }
  var f = null, p = /* @__PURE__ */ Ns(() => {
    var A = n();
    return rr(A) ? A : A == null ? [] : _n(A);
  }), h, _ = /* @__PURE__ */ new Map(), v = !0;
  function g(A) {
    N.effect.f & ue || (N.pending.delete(A), N.fallback = f, fi(N, h, u, t, r), f !== null && (h.length === 0 ? f.f & De ? (f.f ^= De, $t(f, null, u)) : Ir(f) : bt(f, () => {
      f = null;
    })));
  }
  function d(A) {
    N.pending.delete(A);
  }
  var w = Dr(() => {
    h = /** @type {V[]} */
    x(p);
    for (var A = h.length, B = /* @__PURE__ */ new Set(), de = (
      /** @type {Batch} */
      m
    ), Ie = Hs(), G = 0; G < A; G += 1) {
      var Ee = h[G], Ve = r(Ee, G), X = v ? null : c.get(Ve);
      X ? (X.v && Nt(X.v, Ee), X.i && Nt(X.i, G), Ie && de.unskip_effect(X.e)) : (X = ui(
        c,
        v ? u : Qn ?? (Qn = xt()),
        Ee,
        Ve,
        G,
        s,
        t,
        n
      ), v || (X.e.f |= De), c.set(Ve, X)), B.add(Ve);
    }
    if (A === 0 && i && !f && (v ? f = Te(() => i(u)) : (f = Te(() => i(Qn ?? (Qn = xt()))), f.f |= De)), A > B.size && ss(), !v)
      if (_.set(de, B), Ie) {
        for (const [pt, gt] of c)
          B.has(pt) || de.skip_effect(gt.e);
        de.oncommit(g), de.ondiscard(d);
      } else
        g(de);
    x(p);
  }), N = { effect: w, items: c, pending: _, outrogroups: null, fallback: f };
  v = !1;
}
function Ht(e) {
  for (; e !== null && !(e.f & xe); )
    e = e.next;
  return e;
}
function fi(e, t, n, r, s) {
  var X, pt, gt, Jt, D, b, S, O, P;
  var i = (r & 8) !== 0, u = t.length, c = e.items, l = Ht(e.effect.first), o, f = null, p, h = [], _ = [], v, g, d, w;
  if (i)
    for (w = 0; w < u; w += 1)
      v = t[w], g = s(v, w), d = /** @type {EachItem} */
      c.get(g).e, d.f & De || ((pt = (X = d.nodes) == null ? void 0 : X.a) == null || pt.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(d));
  for (w = 0; w < u; w += 1) {
    if (v = t[w], g = s(v, w), d = /** @type {EachItem} */
    c.get(g).e, e.outrogroups !== null)
      for (const F of e.outrogroups)
        F.pending.delete(d), F.done.delete(d);
    if (d.f & W && (Ir(d), i && ((Jt = (gt = d.nodes) == null ? void 0 : gt.a) == null || Jt.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(d))), d.f & De)
      if (d.f ^= De, d === l)
        $t(d, null, n);
      else {
        var N = f ? f.next : l;
        d === e.effect.last && (e.effect.last = d.prev), d.prev && (d.prev.next = d.next), d.next && (d.next.prev = d.prev), Ye(e, f, d), Ye(e, d, N), $t(d, N, n), f = d, h = [], _ = [], l = Ht(f.next);
        continue;
      }
    if (d !== l) {
      if (o !== void 0 && o.has(d)) {
        if (h.length < _.length) {
          var A = _[0], B;
          f = A.prev;
          var de = h[0], Ie = h[h.length - 1];
          for (B = 0; B < h.length; B += 1)
            $t(h[B], A, n);
          for (B = 0; B < _.length; B += 1)
            o.delete(_[B]);
          Ye(e, de.prev, Ie.next), Ye(e, f, de), Ye(e, Ie, A), l = A, f = Ie, w -= 1, h = [], _ = [];
        } else
          o.delete(d), $t(d, l, n), Ye(e, d.prev, d.next), Ye(e, d, f === null ? e.effect.first : f.next), Ye(e, f, d), f = d;
        continue;
      }
      for (h = [], _ = []; l !== null && l !== d; )
        (o ?? (o = /* @__PURE__ */ new Set())).add(l), _.push(l), l = Ht(l.next);
      if (l === null)
        continue;
    }
    d.f & De || h.push(d), f = d, l = Ht(d.next);
  }
  if (e.outrogroups !== null) {
    for (const F of e.outrogroups)
      F.pending.size === 0 && (In(e, _n(F.done)), (D = e.outrogroups) == null || D.delete(F));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || o !== void 0) {
    var G = [];
    if (o !== void 0)
      for (d of o)
        d.f & W || G.push(d);
    for (; l !== null; )
      !(l.f & W) && l !== e.fallback && G.push(l), l = Ht(l.next);
    var Ee = G.length;
    if (Ee > 0) {
      var Ve = r & 4 && u === 0 ? n : null;
      if (i) {
        for (w = 0; w < Ee; w += 1)
          (S = (b = G[w].nodes) == null ? void 0 : b.a) == null || S.measure();
        for (w = 0; w < Ee; w += 1)
          (P = (O = G[w].nodes) == null ? void 0 : O.a) == null || P.fix();
      }
      oi(e, G, Ve);
    }
  }
  i && ft(() => {
    var F, Y;
    if (p !== void 0)
      for (d of p)
        (Y = (F = d.nodes) == null ? void 0 : F.a) == null || Y.apply();
  });
}
function ui(e, t, n, r, s, i, u, c) {
  var l = u & 1 ? u & 16 ? ht(n) : /* @__PURE__ */ Os(n, !1, !1) : null, o = u & 2 ? ht(s) : null;
  return {
    v: l,
    i: o,
    e: Te(() => (i(t, l ?? n, o ?? s, c), () => {
      e.delete(r);
    }))
  };
}
function $t(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, s = e.nodes.end, i = t && !(t.f & De) ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Xt(r)
      );
      if (i.before(r), r === s)
        return;
      r = u;
    }
}
function Ye(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function ci(e, t) {
  return e == null ? null : String(e);
}
function Le(e, t, n, r) {
  var s = e.__style;
  if (s !== t) {
    var i = ci(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return r;
}
function er(e, t) {
  return e === t || (e == null ? void 0 : e[nn]) === t;
}
function vi(e = {}, t, n, r) {
  var s = (
    /** @type {ComponentContext} */
    ne.r
  ), i = (
    /** @type {Effect} */
    T
  );
  return Gs(() => {
    var u, c;
    return Ar(() => {
      u = c, c = [], Br(() => {
        e !== n(...c) && (t(e, ...c), u && er(n(...u), e) && t(null, ...u));
      });
    }), () => {
      let l = i;
      for (; l !== s && l.parent !== null && l.parent.f & jn; )
        l = l.parent;
      const o = () => {
        c && er(n(...c), e) && t(null, ...c);
      }, f = l.teardown;
      l.teardown = () => {
        o(), f == null || f();
      };
    };
  }), e;
}
const di = "5";
var nr;
typeof window < "u" && ((nr = window.__svelte ?? (window.__svelte = {})).v ?? (nr.v = /* @__PURE__ */ new Set())).add(di);
function hi(e, t) {
  const n = document.createElement("span");
  n.style.color = `var(${e})`, t.appendChild(n);
  const r = getComputedStyle(n).color;
  return t.removeChild(n), _i(r);
}
function _i(e) {
  const t = e.match(/[\d.]+/g);
  return !t || t.length < 3 ? e : `#${[t[0], t[1], t[2]].map((r) => Math.round(Number(r)).toString(16).padStart(2, "0")).join("")}`;
}
var pi = /* @__PURE__ */ be('<th class="svelte-1juuxfj"> </th>'), gi = /* @__PURE__ */ be('<td class="svelte-1juuxfj"><button type="button" class="btn svelte-1juuxfj">Button</button></td>'), wi = /* @__PURE__ */ be('<td class="svelte-1juuxfj"><button type="button" class="btn svelte-1juuxfj">Button</button></td>'), mi = /* @__PURE__ */ be('<tr><td class="svelte-1juuxfj"><code class="svelte-1juuxfj"> </code></td><td class="hex svelte-1juuxfj"> </td><!></tr> <tr><td class="svelte-1juuxfj"><code class="svelte-1juuxfj"> </code></td><td class="hex svelte-1juuxfj"> </td><!></tr>', 1), yi = /* @__PURE__ */ be('<div class="grey-item svelte-1juuxfj"><span class="swatch svelte-1juuxfj"></span> <code class="svelte-1juuxfj"> </code> <span class="hex svelte-1juuxfj"> </span> <span>The quick brown fox</span></div>'), xi = /* @__PURE__ */ be('<div class="grey-item svelte-1juuxfj"><span class="swatch svelte-1juuxfj"></span> <code class="svelte-1juuxfj"> </code> <span class="hex svelte-1juuxfj"> </span> <span>The quick brown fox</span></div>'), bi = /* @__PURE__ */ be('<th class="svelte-1juuxfj"> </th>'), Ei = /* @__PURE__ */ be('<td class="svelte-1juuxfj">Packed my box with five dozen liquor jugs.</td>'), ji = /* @__PURE__ */ be('<tr><td class="svelte-1juuxfj"><code class="svelte-1juuxfj"> </code></td><td class="hex svelte-1juuxfj"> </td><!></tr>'), ki = /* @__PURE__ */ be('<div class="alert svelte-1juuxfj"><div class="bar svelte-1juuxfj"></div> <div><code class="svelte-1juuxfj"> </code> <span class="hex svelte-1juuxfj"> </span> <p class="svelte-1juuxfj"> </p> <p class="on svelte-1juuxfj"> </p></div></div>'), Ti = /* @__PURE__ */ be('<div class="page svelte-1juuxfj"><h1 class="svelte-1juuxfj">Demo Theme</h1> <p class="lead svelte-1juuxfj">Internal tokens <code class="svelte-1juuxfj">--my-internal-*</code>, labeled with source <code class="svelte-1juuxfj">--oscd-theme-*</code>. Hex is read from the computed internal token.</p> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">1. Primary &amp; secondary buttons</h2> <table class="svelte-1juuxfj"><thead><tr><th class="svelte-1juuxfj">Token</th><th class="svelte-1juuxfj">Hex</th><!></tr></thead><tbody></tbody></table></section> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">2. Solarized greys</h2> <div class="grey-band svelte-1juuxfj" style="background: var(--my-internal-base3)"></div> <div class="grey-band svelte-1juuxfj" style="background: var(--my-internal-base03)"></div></section> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">3. Solarized colors</h2> <table class="svelte-1juuxfj"><thead><tr><th style="width: 150px" class="svelte-1juuxfj">Token</th><th class="svelte-1juuxfj">Hex</th><!></tr></thead><tbody></tbody></table></section> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">4. Error &amp; warning</h2> <div class="alerts svelte-1juuxfj"></div></section></div>');
function Si(e, t) {
  or(t, !0);
  let n = /* @__PURE__ */ we(void 0), r = /* @__PURE__ */ we(rt({}));
  const s = ["base03", "base02", "base01", "base00"], i = ["base3", "base2", "base1", "base0"], u = [
    "yellow",
    "orange",
    "red",
    "magenta",
    "violet",
    "blue",
    "cyan",
    "green"
  ], c = ["base03", "base02", "base2", "base3"], l = ["base3", "base2"];
  function o(D) {
    return `--oscd-theme-${D}`;
  }
  function f(D) {
    return `--my-internal-${D}`;
  }
  function p() {
    if (!x(n)) return;
    const D = [
      ...s,
      ...i,
      ...u,
      "primary",
      "secondary",
      "error",
      "warning"
    ], b = {};
    for (const S of D)
      b[S] = hi(f(S), x(n));
    Ae(r, b, !0);
  }
  Vs(() => {
    if (!x(n)) return;
    p();
    const D = new MutationObserver(p);
    return D.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }), () => D.disconnect();
  });
  var h = Ti(), _ = C(y(h), 4), v = C(y(_), 2), g = y(v), d = y(g), w = C(y(d), 2);
  pe(w, 17, () => l, _e, (D, b) => {
    var S = pi(), O = y(S);
    ke((P) => V(O, P), [() => o(x(b))]), se(D, S);
  });
  var N = C(g);
  pe(N, 20, () => ["primary", "secondary"], _e, (D, b) => {
    var S = mi(), O = Yn(S), P = y(O), F = y(P), Y = y(F), he = C(P), Oe = y(he), re = C(he);
    pe(re, 17, () => l, _e, (et, Ge) => {
      var tt = gi(), Ft = y(tt);
      ke(
        (Lt, Pt, mn) => Le(Ft, `
                    background: var(${Lt ?? ""});
                    color: var(${Pt ?? ""});
                    border-color: var(${mn ?? ""});
                  `),
        [
          () => f(b),
          () => f(x(Ge)),
          () => f(x(Ge))
        ]
      ), se(et, tt);
    });
    var Fe = C(O, 2), Ue = y(Fe), Ot = y(Ue), wt = y(Ot), Qt = C(Ue), gn = y(Qt), wn = C(Qt);
    pe(wn, 17, () => l, _e, (et, Ge) => {
      var tt = wi(), Ft = y(tt);
      ke(
        (Lt, Pt, mn) => Le(Ft, `
                    background: var(${Lt ?? ""});
                    color: var(${Pt ?? ""});
                    border-color: var(${mn ?? ""});
                  `),
        [
          () => f(x(Ge)),
          () => f(b),
          () => f(b)
        ]
      ), se(et, tt);
    }), ke(
      (et, Ge) => {
        V(Y, et), V(Oe, x(r)[b] ?? "…"), V(wt, `${Ge ?? ""} inverted`), V(gn, x(r)[b] ?? "…");
      },
      [() => o(b), () => o(b)]
    ), se(D, S);
  });
  var A = C(_, 2), B = C(y(A), 2);
  pe(B, 21, () => s, _e, (D, b) => {
    var S = yi(), O = y(S), P = C(O, 2), F = y(P), Y = C(P, 2), he = y(Y);
    ke(
      (Oe, re, Fe) => {
        Le(S, `color: var(${Oe ?? ""})`), Le(O, `background: var(${re ?? ""})`), V(F, Fe), V(he, x(r)[x(b)] ?? "…");
      },
      [
        () => f(x(b)),
        () => f(x(b)),
        () => o(x(b))
      ]
    ), se(D, S);
  });
  var de = C(B, 2);
  pe(de, 21, () => i, _e, (D, b) => {
    var S = xi(), O = y(S), P = C(O, 2), F = y(P), Y = C(P, 2), he = y(Y);
    ke(
      (Oe, re, Fe) => {
        Le(S, `color: var(${Oe ?? ""})`), Le(O, `background: var(${re ?? ""})`), V(F, Fe), V(he, x(r)[x(b)] ?? "…");
      },
      [
        () => f(x(b)),
        () => f(x(b)),
        () => o(x(b))
      ]
    ), se(D, S);
  });
  var Ie = C(A, 2), G = C(y(Ie), 2), Ee = y(G), Ve = y(Ee), X = C(y(Ve), 2);
  pe(X, 17, () => c, _e, (D, b) => {
    var S = bi(), O = y(S);
    ke((P) => V(O, P), [() => o(x(b))]), se(D, S);
  });
  var pt = C(Ee);
  pe(pt, 21, () => u, _e, (D, b) => {
    var S = ji(), O = y(S), P = y(O), F = y(P), Y = C(O), he = y(Y), Oe = C(Y);
    pe(Oe, 17, () => c, _e, (re, Fe) => {
      var Ue = Ei();
      ke(
        (Ot, wt) => Le(Ue, `
                  background: var(${Ot ?? ""});
                  color: var(${wt ?? ""});
                `),
        [() => f(x(Fe)), () => f(x(b))]
      ), se(re, Ue);
    }), ke(
      (re) => {
        V(F, re), V(he, x(r)[x(b)] ?? "…");
      },
      [() => o(x(b))]
    ), se(D, S);
  });
  var gt = C(Ie, 2), Jt = C(y(gt), 2);
  pe(Jt, 20, () => ["error", "warning"], _e, (D, b) => {
    var S = ni(), O = Yn(S);
    pe(O, 17, () => l, _e, (P, F) => {
      var Y = ki(), he = y(Y), Oe = C(he, 2), re = y(Oe), Fe = y(re), Ue = C(re, 2), Ot = y(Ue), wt = C(Ue, 2), Qt = y(wt), gn = C(wt, 2), wn = y(gn);
      ke(
        (et, Ge, tt, Ft, Lt, Pt) => {
          Le(Y, `
              background: var(${et ?? ""});
              color: var(${Ge ?? ""});
              border-color: var(${tt ?? ""});
            `), Le(he, `background: var(${Ft ?? ""})`), V(Fe, Lt), V(Ot, x(r)[b] ?? "…"), V(Qt, b === "error" ? "Something went wrong. Check the log." : "This setting is deprecated."), V(wn, `on ${Pt ?? ""}`);
        },
        [
          () => f(x(F)),
          () => f(b),
          () => f(b),
          () => f(b),
          () => o(b),
          () => o(x(F))
        ]
      ), se(P, Y);
    }), se(D, S);
  }), vi(h, (D) => Ae(n, D), () => x(n)), se(e, h), fr();
}
function Ci(e, t) {
  Si(e, {
    get doc() {
      return t.doc;
    },
    get editCount() {
      return t.editCount;
    },
    get plugins() {
      return t.plugins;
    }
  });
}
const Ai = "demo-theme", Di = "0.0.1";
function Ri() {
  return document.querySelector("open-scd");
}
function Ni() {
  const e = Ri();
  return e != null && e.shadowRoot ? e.shadowRoot.querySelector("compas-layout") ?? e.shadowRoot.querySelector("oscd-layout") ?? null : null;
}
var Ct;
class Li extends HTMLElement {
  constructor() {
    super();
    k(this, Ct);
    this.targetDiv = null, this.originalStyles = {}, E(this, Ct, /* @__PURE__ */ we(rt({ doc: void 0, editCount: void 0, plugins: void 0 })));
  }
  get props() {
    return x(a(this, Ct));
  }
  set props(n) {
    Ae(a(this, Ct), n, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this._editCount, this.props.plugins = this._plugins;
    const n = this.shadowRoot;
    if (!n)
      throw new Error("ShadowRoot not found");
    n.appendChild(Ii()), ii(Ci, { target: n, props: this.props }), requestAnimationFrame(() => this.applyLayoutHack());
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
  set plugins(n) {
    this._plugins = n, this.props.plugins = n;
  }
  /**
   * Apply a layout hack to fix the height of the plugin-container div.
   * This is necessary because compas-oscd core doesn't limit the plugin-container height to the current window-height.
   */
  applyLayoutHack() {
    const n = Ni();
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
Ct = new WeakMap();
const Mi = ":root,:host{--my-internal-primary: var(--oscd-theme-primary, #2aa198);--my-internal-secondary: var(--oscd-theme-secondary, #6c71c4);--my-internal-error: var(--oscd-theme-error, #dc322f);--my-internal-warning: var(--oscd-theme-warning, #b58900);--my-internal-base03: var(--oscd-theme-base03, light-dark(#002b36, #fdf6e3));--my-internal-base02: var(--oscd-theme-base02, light-dark(#073642, #eee8d5));--my-internal-base01: var(--oscd-theme-base01, light-dark(#586e75, #93a1a1));--my-internal-base00: var(--oscd-theme-base00, light-dark(#657b83, #839496));--my-internal-base0: var(--oscd-theme-base0, light-dark(#839496, #657b83));--my-internal-base1: var(--oscd-theme-base1, light-dark(#93a1a1, #586e75));--my-internal-base2: var(--oscd-theme-base2, light-dark(#eee8d5, #073642));--my-internal-base3: var(--oscd-theme-base3, light-dark(#fdf6e3, #002b36));--my-internal-yellow: var(--oscd-theme-yellow, #b58900);--my-internal-orange: var(--oscd-theme-orange, #cb4b16);--my-internal-red: var(--oscd-theme-red, #dc322f);--my-internal-magenta: var(--oscd-theme-magenta, #d33682);--my-internal-violet: var(--oscd-theme-violet, #6c71c4);--my-internal-blue: var(--oscd-theme-blue, #268bd2);--my-internal-cyan: var(--oscd-theme-cyan, #2aa198);--my-internal-green: var(--oscd-theme-green, #859900);--my-internal-text-font: var(--oscd-theme-text-font, \"Roboto\");--my-internal-icon-font: var(--oscd-theme-icon-font, \"Material Icons\")}.page.svelte-1juuxfj{box-sizing:border-box;min-height:100%;padding:24px 28px 48px;font-family:var(--my-internal-text-font),system-ui,sans-serif;background:var(--my-internal-base3);color:var(--my-internal-base03);overflow:auto}h1.svelte-1juuxfj{margin:0 0 8px;font-size:1.6rem}h2.svelte-1juuxfj{margin:0 0 12px;font-size:1.15rem}.lead.svelte-1juuxfj{margin:0 0 28px;color:var(--my-internal-base01);max-width:52rem}section.svelte-1juuxfj{margin-bottom:32px}code.svelte-1juuxfj,.hex.svelte-1juuxfj{font-family:ui-monospace,Consolas,monospace;font-size:.82rem}.hex.svelte-1juuxfj{opacity:.85}.grey-band.svelte-1juuxfj{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:16px;margin-bottom:8px}.grey-item.svelte-1juuxfj{display:flex;flex-direction:column;gap:6px}.swatch.svelte-1juuxfj{display:block;height:36px;border:1px solid currentColor}table.svelte-1juuxfj{width:100%;border-collapse:collapse;font-size:.9rem}th.svelte-1juuxfj,td.svelte-1juuxfj{border:1px solid var(--my-internal-base01);padding:8px 10px;text-align:left;vertical-align:middle}th.svelte-1juuxfj{background:var(--my-internal-base2);color:var(--my-internal-base03);font-weight:600}.btn.svelte-1juuxfj{padding:6px 14px;border:2px solid;border-radius:4px;font:inherit;cursor:default}.alerts.svelte-1juuxfj{display:grid;grid-template-columns:1fr 1fr;gap:12px}.alert.svelte-1juuxfj{display:flex;gap:12px;padding:12px 14px;border:2px solid}.bar.svelte-1juuxfj{width:6px;flex-shrink:0}.alert.svelte-1juuxfj p:where(.svelte-1juuxfj){margin:6px 0 0}.on.svelte-1juuxfj{opacity:.8;font-size:.82rem}.alert.svelte-1juuxfj code:where(.svelte-1juuxfj),.alert.svelte-1juuxfj .hex:where(.svelte-1juuxfj){margin-right:8px}:host{min-height:0;height:100%}\n";
function Ii() {
  const e = document.createElement("style");
  return e.id = `${Ai}-v${Di}-style`, e.textContent = Mi, e;
}
export {
  Li as default
};
