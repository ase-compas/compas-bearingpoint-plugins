var ys = Object.defineProperty;
var vn = (e) => {
  throw TypeError(e);
};
var Es = (e, t, r) => t in e ? ys(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Pe = (e, t, r) => Es(e, typeof t != "symbol" ? t + "" : t, r), Or = (e, t, r) => t.has(e) || vn("Cannot " + r);
var i = (e, t, r) => (Or(e, t, "read from private field"), r ? r.call(e) : t.get(e)), E = (e, t, r) => t.has(e) ? vn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), k = (e, t, r, n) => (Or(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), I = (e, t, r) => (Or(e, t, "access private method"), r);
const K = Symbol(), ks = "http://www.w3.org/1999/xhtml", Ts = !1;
var Sn = Array.isArray, Ss = Array.prototype.indexOf, Bt = Array.prototype.includes, Rr = Array.from, Cs = Object.defineProperty, Qt = Object.getOwnPropertyDescriptor, As = Object.prototype, Ds = Array.prototype, Ms = Object.getPrototypeOf, dn = Object.isExtensible;
const Rs = () => {
};
function Ns(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Cn() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const ne = 2, zt = 4, Nr = 8, An = 1 << 24, Ye = 16, qe = 32, ht = 64, Hr = 128, Re = 512, V = 1024, Z = 2048, Ke = 4096, fe = 8192, Ne = 16384, Rt = 32768, $r = 1 << 25, Vt = 65536, qr = 1 << 17, Is = 1 << 18, Kt = 1 << 19, Fs = 1 << 20, Ge = 1 << 25, At = 65536, Br = 1 << 21, tr = 1 << 22, vt = 1 << 23, xr = Symbol("$state"), Qe = new class extends Error {
  constructor() {
    super(...arguments);
    Pe(this, "name", "StaleReactionError");
    Pe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Os() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ps(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ls(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Hs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function $s(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function qs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Bs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function zs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Vs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Us() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Gs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ys() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Dn(e) {
  return e === this.v;
}
function Ks(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Mn(e) {
  return !Ks(e, this.v);
}
let Ws = !1, we = null;
function Ut(e) {
  we = e;
}
function Rn(e, t = !1, r) {
  we = {
    p: we,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      C
    ),
    l: null
  };
}
function Nn(e) {
  var t = (
    /** @type {ComponentContext} */
    we
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Qn(n);
  }
  return t.i = !0, we = t.p, /** @type {T} */
  {};
}
function In() {
  return !0;
}
let It = [];
function Xs() {
  var e = It;
  It = [], Ns(e);
}
function kt(e) {
  if (It.length === 0) {
    var t = It;
    queueMicrotask(() => {
      t === It && Xs();
    });
  }
  It.push(e);
}
function Fn(e) {
  var t = C;
  if (t === null)
    return T.f |= vt, e;
  if (!(t.f & Rt) && !(t.f & zt))
    throw e;
  ct(e, t);
}
function ct(e, t) {
  for (; t !== null; ) {
    if (t.f & Hr) {
      if (!(t.f & Rt))
        throw e;
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    }
    t = t.parent;
  }
  throw e;
}
const Zs = -7169;
function q(e, t) {
  e.f = e.f & Zs | t;
}
function Qr(e) {
  e.f & Re || e.deps === null ? q(e, V) : q(e, Ke);
}
function On(e) {
  if (e !== null)
    for (const t of e)
      !(t.f & ne) || !(t.f & At) || (t.f ^= At, On(
        /** @type {Derived} */
        t.deps
      ));
}
function Pn(e, t, r) {
  e.f & Z ? t.add(e) : e.f & Ke && r.add(e), On(e.deps), q(e, V);
}
const mt = /* @__PURE__ */ new Set();
let y = null, X = null, zr = null, Pr = !1, Ft = null, wr = null;
var hn = 0;
let Js = 1;
var Ot, Pt, wt, et, ze, nr, pe, sr, ft, tt, Ve, Lt, Ht, jt, z, jr, Ln, br, Vr, yr, Qs;
const Ar = class Ar {
  constructor() {
    E(this, z);
    Pe(this, "id", Js++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Pe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Pe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Ot, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Pt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, wt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    E(this, et, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    E(this, ze, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    E(this, nr, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    E(this, pe, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    E(this, sr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    E(this, ft, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    E(this, tt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    E(this, Ve, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    E(this, Lt, /* @__PURE__ */ new Set());
    Pe(this, "is_fork", !1);
    E(this, Ht, !1);
    /** @type {Set<Batch>} */
    E(this, jt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    i(this, Ve).has(t) || i(this, Ve).set(t, { d: [], m: [] }), i(this, Lt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = i(this, Ve).get(t);
    if (n) {
      i(this, Ve).delete(t);
      for (var s of n.d)
        q(s, Z), r(s);
      for (s of n.m)
        q(s, Ke), r(s);
    }
    i(this, Lt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== K && !this.previous.has(t) && this.previous.set(t, t.v), t.f & vt || (this.current.set(t, [r, n]), X == null || X.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    y = this;
  }
  deactivate() {
    y = null, X = null;
  }
  flush() {
    try {
      Pr = !0, y = this, I(this, z, br).call(this);
    } finally {
      hn = 0, zr = null, Ft = null, wr = null, Pr = !1, y = null, X = null, Tt.clear();
    }
  }
  discard() {
    for (const t of i(this, Pt)) t(this);
    i(this, Pt).clear(), i(this, wt).clear(), mt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, sr).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = i(this, et).get(r) ?? 0;
    if (i(this, et).set(r, n + 1), t) {
      let s = i(this, ze).get(r) ?? 0;
      i(this, ze).set(r, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let s = i(this, et).get(r) ?? 0;
    if (s === 1 ? i(this, et).delete(r) : i(this, et).set(r, s - 1), t) {
      let a = i(this, ze).get(r) ?? 0;
      a === 1 ? i(this, ze).delete(r) : i(this, ze).set(r, a - 1);
    }
    i(this, Ht) || n || (k(this, Ht, !0), kt(() => {
      k(this, Ht, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      i(this, ft).add(n);
    for (const n of r)
      i(this, tt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, Ot).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, Pt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, wt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, wt)) t(this);
    i(this, wt).clear();
  }
  settled() {
    return (i(this, nr) ?? k(this, nr, Cn())).promise;
  }
  static ensure() {
    if (y === null) {
      const t = y = new Ar();
      Pr || (mt.add(y), kt(() => {
        y === t && t.flush();
      }));
    }
    return y;
  }
  apply() {
    {
      X = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var s;
    if (zr = t, (s = t.b) != null && s.is_pending && t.f & (zt | Nr | An) && !(t.f & Rt)) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Ft !== null && r === C && (T === null || !(T.f & ne)))
        return;
      if (n & (ht | qe)) {
        if (!(n & V))
          return;
        r.f ^= V;
      }
    }
    i(this, pe).push(r);
  }
};
Ot = new WeakMap(), Pt = new WeakMap(), wt = new WeakMap(), et = new WeakMap(), ze = new WeakMap(), nr = new WeakMap(), pe = new WeakMap(), sr = new WeakMap(), ft = new WeakMap(), tt = new WeakMap(), Ve = new WeakMap(), Lt = new WeakMap(), Ht = new WeakMap(), jt = new WeakMap(), z = new WeakSet(), jr = function() {
  return this.is_fork || i(this, ze).size > 0;
}, Ln = function() {
  for (const n of i(this, jt))
    for (const s of i(n, ze).keys()) {
      for (var t = !1, r = s; r.parent !== null; ) {
        if (i(this, Ve).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, br = function() {
  var u, l;
  if (hn++ > 1e3 && (mt.delete(this), ei()), !I(this, z, jr).call(this)) {
    for (const f of i(this, ft))
      i(this, tt).delete(f), q(f, Z), this.schedule(f);
    for (const f of i(this, tt))
      q(f, Ke), this.schedule(f);
  }
  const t = i(this, pe);
  k(this, pe, []), this.apply();
  var r = Ft = [], n = [], s = wr = [];
  for (const f of t)
    try {
      I(this, z, Vr).call(this, f, r, n);
    } catch (v) {
      throw qn(f), v;
    }
  if (y = null, s.length > 0) {
    var a = Ar.ensure();
    for (const f of s)
      a.schedule(f);
  }
  if (Ft = null, wr = null, I(this, z, jr).call(this) || I(this, z, Ln).call(this)) {
    I(this, z, yr).call(this, n), I(this, z, yr).call(this, r);
    for (const [f, v] of i(this, Ve))
      $n(f, v);
  } else {
    i(this, et).size === 0 && mt.delete(this), i(this, ft).clear(), i(this, tt).clear();
    for (const f of i(this, Ot)) f(this);
    i(this, Ot).clear(), _n(n), _n(r), (u = i(this, nr)) == null || u.resolve();
  }
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    y
  );
  if (i(this, pe).length > 0) {
    const f = o ?? (o = this);
    i(f, pe).push(...i(this, pe).filter((v) => !i(f, pe).includes(v)));
  }
  o !== null && (mt.add(o), I(l = o, z, br).call(l));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Vr = function(t, r, n) {
  t.f ^= V;
  for (var s = t.first; s !== null; ) {
    var a = s.f, o = (a & (qe | ht)) !== 0, u = o && (a & V) !== 0, l = u || (a & fe) !== 0 || i(this, Ve).has(s);
    if (!l && s.fn !== null) {
      o ? s.f ^= V : a & zt ? r.push(s) : ur(s) && (a & Ye && i(this, tt).add(s), Yt(s));
      var f = s.first;
      if (f !== null) {
        s = f;
        continue;
      }
    }
    for (; s !== null; ) {
      var v = s.next;
      if (v !== null) {
        s = v;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
yr = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Pn(t[r], i(this, ft), i(this, tt));
}, Qs = function() {
  var v, x, h;
  for (const _ of mt) {
    var t = _.id < this.id, r = [];
    for (const [d, [w, c]] of this.current) {
      if (_.current.has(d)) {
        var n = (
          /** @type {[any, boolean]} */
          _.current.get(d)[0]
        );
        if (t && w !== n)
          _.current.set(d, [w, c]);
        else
          continue;
      }
      r.push(d);
    }
    var s = [..._.current.keys()].filter((d) => !this.current.has(d));
    if (s.length === 0)
      t && _.discard();
    else if (r.length > 0) {
      if (t)
        for (const d of i(this, Lt))
          _.unskip_effect(d, (w) => {
            var c;
            w.f & (Ye | tr) ? _.schedule(w) : I(c = _, z, yr).call(c, [w]);
          });
      _.activate();
      var a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
      for (var u of r)
        Hn(u, s, a, o);
      o = /* @__PURE__ */ new Map();
      var l = [..._.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of i(this, sr))
        !(d.f & (Ne | fe | qr)) && en(d, l, o) && (d.f & (tr | Ye) ? (q(d, Z), _.schedule(d)) : i(_, ft).add(d));
      if (i(_, pe).length > 0) {
        _.apply();
        for (var f of i(_, pe))
          I(v = _, z, Vr).call(v, f, [], []);
        k(_, pe, []);
      }
      _.deactivate();
    }
  }
  for (const _ of mt)
    i(_, jt).has(this) && (i(_, jt).delete(this), i(_, jt).size === 0 && !I(x = _, z, jr).call(x) && (_.activate(), I(h = _, z, br).call(h)));
};
let Dt = Ar;
function ei() {
  try {
    qs();
  } catch (e) {
    ct(e, zr);
  }
}
let Le = null;
function _n(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if (!(n.f & (Ne | fe)) && ur(n) && (Le = /* @__PURE__ */ new Set(), Yt(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && rs(n), (Le == null ? void 0 : Le.size) > 0)) {
        Tt.clear();
        for (const s of Le) {
          if (s.f & (Ne | fe)) continue;
          const a = [s];
          let o = s.parent;
          for (; o !== null; )
            Le.has(o) && (Le.delete(o), a.push(o)), o = o.parent;
          for (let u = a.length - 1; u >= 0; u--) {
            const l = a[u];
            l.f & (Ne | fe) || Yt(l);
          }
        }
        Le.clear();
      }
    }
    Le = null;
  }
}
function Hn(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const a = s.f;
      a & ne ? Hn(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : a & (tr | Ye) && !(a & Z) && en(s, t, n) && (q(s, Z), tn(
        /** @type {Effect} */
        s
      ));
    }
}
function en(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Bt.call(t, s))
        return !0;
      if (s.f & ne && en(
        /** @type {Derived} */
        s,
        t,
        r
      ))
        return r.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return r.set(e, !1), !1;
}
function tn(e) {
  y.schedule(e);
}
function $n(e, t) {
  if (!(e.f & qe && e.f & V)) {
    e.f & Z ? t.d.push(e) : e.f & Ke && t.m.push(e), q(e, V);
    for (var r = e.first; r !== null; )
      $n(r, t), r = r.next;
  }
}
function qn(e) {
  q(e, V);
  for (var t = e.first; t !== null; )
    qn(t), t = t.next;
}
function ti(e) {
  let t = 0, r = Mt(0), n;
  return () => {
    nn() && (p(r), es(() => (t === 0 && (n = cs(() => e(() => er(r)))), t += 1, () => {
      kt(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, er(r));
      });
    })));
  };
}
var ri = Vt | Kt;
function ni(e, t, r, n) {
  new si(e, t, r, n);
}
var Se, Jr, Ce, bt, ce, Ae, oe, ge, rt, yt, ut, $t, ir, ar, nt, Dr, $, ii, ai, li, Ur, Er, kr, Gr, Yr;
class si {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    E(this, $);
    /** @type {Boundary | null} */
    Pe(this, "parent");
    Pe(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Pe(this, "transform_error");
    /** @type {TemplateNode} */
    E(this, Se);
    /** @type {TemplateNode | null} */
    E(this, Jr, null);
    /** @type {BoundaryProps} */
    E(this, Ce);
    /** @type {((anchor: Node) => void)} */
    E(this, bt);
    /** @type {Effect} */
    E(this, ce);
    /** @type {Effect | null} */
    E(this, Ae, null);
    /** @type {Effect | null} */
    E(this, oe, null);
    /** @type {Effect | null} */
    E(this, ge, null);
    /** @type {DocumentFragment | null} */
    E(this, rt, null);
    E(this, yt, 0);
    E(this, ut, 0);
    E(this, $t, !1);
    /** @type {Set<Effect>} */
    E(this, ir, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    E(this, ar, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    E(this, nt, null);
    E(this, Dr, ti(() => (k(this, nt, Mt(i(this, yt))), () => {
      k(this, nt, null);
    })));
    var a;
    k(this, Se, t), k(this, Ce, r), k(this, bt, (o) => {
      var u = (
        /** @type {Effect} */
        C
      );
      u.b = this, u.f |= Hr, n(o);
    }), this.parent = /** @type {Effect} */
    C.b, this.transform_error = s ?? ((a = this.parent) == null ? void 0 : a.transform_error) ?? ((o) => o), k(this, ce, sn(() => {
      I(this, $, Ur).call(this);
    }, ri));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Pn(t, i(this, ir), i(this, ar));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!i(this, Ce).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    I(this, $, Gr).call(this, t, r), k(this, yt, i(this, yt) + t), !(!i(this, nt) || i(this, $t)) && (k(this, $t, !0), kt(() => {
      k(this, $t, !1), i(this, nt) && Gt(i(this, nt), i(this, yt));
    }));
  }
  get_effect_pending() {
    return i(this, Dr).call(this), p(
      /** @type {Source<number>} */
      i(this, nt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, Ce).onerror && !i(this, Ce).failed)
      throw t;
    y != null && y.is_fork ? (i(this, Ae) && y.skip_effect(i(this, Ae)), i(this, oe) && y.skip_effect(i(this, oe)), i(this, ge) && y.skip_effect(i(this, ge)), y.on_fork_commit(() => {
      I(this, $, Yr).call(this, t);
    })) : I(this, $, Yr).call(this, t);
  }
}
Se = new WeakMap(), Jr = new WeakMap(), Ce = new WeakMap(), bt = new WeakMap(), ce = new WeakMap(), Ae = new WeakMap(), oe = new WeakMap(), ge = new WeakMap(), rt = new WeakMap(), yt = new WeakMap(), ut = new WeakMap(), $t = new WeakMap(), ir = new WeakMap(), ar = new WeakMap(), nt = new WeakMap(), Dr = new WeakMap(), $ = new WeakSet(), ii = function() {
  try {
    k(this, Ae, De(() => i(this, bt).call(this, i(this, Se))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ai = function(t) {
  const r = i(this, Ce).failed;
  r && k(this, ge, De(() => {
    r(
      i(this, Se),
      () => t,
      () => () => {
      }
    );
  }));
}, li = function() {
  const t = i(this, Ce).pending;
  t && (this.is_pending = !0, k(this, oe, De(() => t(i(this, Se)))), kt(() => {
    var r = k(this, rt, document.createDocumentFragment()), n = dt();
    r.append(n), k(this, Ae, I(this, $, kr).call(this, () => De(() => i(this, bt).call(this, n)))), i(this, ut) === 0 && (i(this, Se).before(r), k(this, rt, null), St(
      /** @type {Effect} */
      i(this, oe),
      () => {
        k(this, oe, null);
      }
    ), I(this, $, Er).call(
      this,
      /** @type {Batch} */
      y
    ));
  }));
}, Ur = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), k(this, ut, 0), k(this, yt, 0), k(this, Ae, De(() => {
      i(this, bt).call(this, i(this, Se));
    })), i(this, ut) > 0) {
      var t = k(this, rt, document.createDocumentFragment());
      on(i(this, Ae), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        i(this, Ce).pending
      );
      k(this, oe, De(() => r(i(this, Se))));
    } else
      I(this, $, Er).call(
        this,
        /** @type {Batch} */
        y
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Er = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, ir), i(this, ar));
}, /**
 * @template T
 * @param {() => T} fn
 */
kr = function(t) {
  var r = C, n = T, s = we;
  We(i(this, ce)), Fe(i(this, ce)), Ut(i(this, ce).ctx);
  try {
    return Dt.ensure(), t();
  } catch (a) {
    return Fn(a), null;
  } finally {
    We(r), Fe(n), Ut(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Gr = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && I(n = this.parent, $, Gr).call(n, t, r);
    return;
  }
  k(this, ut, i(this, ut) + t), i(this, ut) === 0 && (I(this, $, Er).call(this, r), i(this, oe) && St(i(this, oe), () => {
    k(this, oe, null);
  }), i(this, rt) && (i(this, Se).before(i(this, rt)), k(this, rt, null)));
}, /**
 * @param {unknown} error
 */
Yr = function(t) {
  i(this, Ae) && (de(i(this, Ae)), k(this, Ae, null)), i(this, oe) && (de(i(this, oe)), k(this, oe, null)), i(this, ge) && (de(i(this, ge)), k(this, ge, null));
  var r = i(this, Ce).onerror;
  let n = i(this, Ce).failed;
  var s = !1, a = !1;
  const o = () => {
    if (s) {
      Ys();
      return;
    }
    s = !0, a && Us(), i(this, ge) !== null && St(i(this, ge), () => {
      k(this, ge, null);
    }), I(this, $, kr).call(this, () => {
      I(this, $, Ur).call(this);
    });
  }, u = (l) => {
    try {
      a = !0, r == null || r(l, o), a = !1;
    } catch (f) {
      ct(f, i(this, ce) && i(this, ce).parent);
    }
    n && k(this, ge, I(this, $, kr).call(this, () => {
      try {
        return De(() => {
          var f = (
            /** @type {Effect} */
            C
          );
          f.b = this, f.f |= Hr, n(
            i(this, Se),
            () => l,
            () => o
          );
        });
      } catch (f) {
        return ct(
          f,
          /** @type {Effect} */
          i(this, ce).parent
        ), null;
      }
    }));
  };
  kt(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (f) {
      ct(f, i(this, ce) && i(this, ce).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      u,
      /** @param {unknown} e */
      (f) => ct(f, i(this, ce) && i(this, ce).parent)
    ) : u(l);
  });
};
function oi(e, t, r, n) {
  const s = zn;
  var a = e.filter((h) => !h.settled);
  if (r.length === 0 && a.length === 0) {
    n(t.map(s));
    return;
  }
  var o = (
    /** @type {Effect} */
    C
  ), u = fi(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((h) => h.promise)) : null;
  function f(h) {
    u();
    try {
      n(h);
    } catch (_) {
      o.f & Ne || ct(_, o);
    }
    Sr();
  }
  if (r.length === 0) {
    l.then(() => f(t.map(s)));
    return;
  }
  var v = Bn();
  function x() {
    Promise.all(r.map((h) => /* @__PURE__ */ ui(h))).then((h) => f([...t.map(s), ...h])).catch((h) => ct(h, o)).finally(() => v());
  }
  l ? l.then(() => {
    u(), x(), Sr();
  }) : x();
}
function fi() {
  var e = (
    /** @type {Effect} */
    C
  ), t = T, r = we, n = (
    /** @type {Batch} */
    y
  );
  return function(a = !0) {
    We(e), Fe(t), Ut(r), a && !(e.f & Ne) && (n == null || n.activate(), n == null || n.apply());
  };
}
function Sr(e = !0) {
  We(null), Fe(null), Ut(null), e && (y == null || y.deactivate());
}
function Bn() {
  var e = (
    /** @type {Effect} */
    C
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    y
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (s = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function zn(e) {
  var t = ne | Z;
  return C !== null && (C.f |= Kt), {
    ctx: we,
    deps: null,
    effects: null,
    equals: Dn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      K
    ),
    wv: 0,
    parent: C,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ui(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    C
  );
  n === null && Os();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Mt(
    /** @type {V} */
    K
  ), o = !T, u = /* @__PURE__ */ new Map();
  return ki(() => {
    var _;
    var l = (
      /** @type {Effect} */
      C
    ), f = Cn();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(Sr);
    } catch (d) {
      f.reject(d), Sr();
    }
    var v = (
      /** @type {Batch} */
      y
    );
    if (o) {
      if (l.f & Rt)
        var x = Bn();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        (_ = u.get(v)) == null || _.reject(Qe), u.delete(v);
      else {
        for (const d of u.values())
          d.reject(Qe);
        u.clear();
      }
      u.set(v, f);
    }
    const h = (d, w = void 0) => {
      if (x) {
        var c = w === Qe;
        x(c);
      }
      if (!(w === Qe || l.f & Ne)) {
        if (v.activate(), w)
          a.f |= vt, Gt(a, w);
        else {
          a.f & vt && (a.f ^= vt), Gt(a, d);
          for (const [b, N] of u) {
            if (u.delete(b), b === v) break;
            N.reject(Qe);
          }
        }
        v.deactivate();
      }
    };
    f.promise.then(h, (d) => h(null, d || "unknown"));
  }), ji(() => {
    for (const l of u.values())
      l.reject(Qe);
  }), new Promise((l) => {
    function f(v) {
      function x() {
        v === s ? l(a) : f(s);
      }
      v.then(x, x);
    }
    f(s);
  });
}
// @__NO_SIDE_EFFECTS__
function ci(e) {
  const t = /* @__PURE__ */ zn(e);
  return t.equals = Mn, t;
}
function vi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      de(
        /** @type {Effect} */
        t[r]
      );
  }
}
function rn(e) {
  var t, r = C, n = e.parent;
  if (!_t && n !== null && n.f & (Ne | fe))
    return Gs(), e.v;
  We(n);
  try {
    e.f &= ~At, vi(e), t = os(e);
  } finally {
    We(r);
  }
  return t;
}
function Vn(e) {
  var t = rn(e);
  if (!e.equals(t) && (e.wv = as(), (!(y != null && y.is_fork) || e.deps === null) && (y !== null ? y.capture(e, t, !0) : e.v = t, e.deps === null))) {
    q(e, V);
    return;
  }
  _t || (X !== null ? (nn() || y != null && y.is_fork) && X.set(e, t) : Qr(e));
}
function di(e) {
  var t, r;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), (r = n.ac) == null || r.abort(Qe), n.teardown = Rs, n.ac = null, rr(n, 0), an(n));
}
function Un(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Yt(t);
}
let Kr = /* @__PURE__ */ new Set();
const Tt = /* @__PURE__ */ new Map();
let Gn = !1;
function Mt(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Dn,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function xe(e, t) {
  const r = Mt(e);
  return Ci(r), r;
}
// @__NO_SIDE_EFFECTS__
function hi(e, t = !1, r = !0) {
  const n = Mt(e);
  return t || (n.equals = Mn), n;
}
function Me(e, t, r = !1) {
  T !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!$e || T.f & qr) && In() && T.f & (ne | Ye | tr | qr) && (Ie === null || !Bt.call(Ie, e)) && Vs();
  let n = r ? st(t) : t;
  return Gt(e, n, wr);
}
function Gt(e, t, r = null) {
  if (!e.equals(t)) {
    Tt.set(e, _t ? t : e.v);
    var n = Dt.ensure();
    if (n.capture(e, t), e.f & ne) {
      const s = (
        /** @type {Derived} */
        e
      );
      e.f & Z && rn(s), X === null && Qr(s);
    }
    e.wv = as(), Yn(e, Z, r), C !== null && C.f & V && !(C.f & (qe | ht)) && (Te === null ? Ai([e]) : Te.push(e)), !n.is_fork && Kr.size > 0 && !Gn && _i();
  }
  return t;
}
function _i() {
  Gn = !1;
  for (const e of Kr)
    e.f & V && q(e, Ke), ur(e) && Yt(e);
  Kr.clear();
}
function er(e) {
  Me(e, e.v + 1);
}
function Yn(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, a = 0; a < s; a++) {
      var o = n[a], u = o.f, l = (u & Z) === 0;
      if (l && q(o, t), u & ne) {
        var f = (
          /** @type {Derived} */
          o
        );
        X == null || X.delete(f), u & At || (u & Re && (o.f |= At), Yn(f, Ke, r));
      } else if (l) {
        var v = (
          /** @type {Effect} */
          o
        );
        u & Ye && Le !== null && Le.add(v), r !== null ? r.push(v) : tn(v);
      }
    }
}
function st(e) {
  if (typeof e != "object" || e === null || xr in e)
    return e;
  const t = Ms(e);
  if (t !== As && t !== Ds)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Sn(e), s = /* @__PURE__ */ xe(0), a = Ct, o = (u) => {
    if (Ct === a)
      return u();
    var l = T, f = Ct;
    Fe(null), mn(a);
    var v = u();
    return Fe(l), mn(f), v;
  };
  return n && r.set("length", /* @__PURE__ */ xe(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Bs();
        var v = r.get(l);
        return v === void 0 ? o(() => {
          var x = /* @__PURE__ */ xe(f.value);
          return r.set(l, x), x;
        }) : Me(v, f.value, !0), !0;
      },
      deleteProperty(u, l) {
        var f = r.get(l);
        if (f === void 0) {
          if (l in u) {
            const v = o(() => /* @__PURE__ */ xe(K));
            r.set(l, v), er(s);
          }
        } else
          Me(f, K), er(s);
        return !0;
      },
      get(u, l, f) {
        var _;
        if (l === xr)
          return e;
        var v = r.get(l), x = l in u;
        if (v === void 0 && (!x || (_ = Qt(u, l)) != null && _.writable) && (v = o(() => {
          var d = st(x ? u[l] : K), w = /* @__PURE__ */ xe(d);
          return w;
        }), r.set(l, v)), v !== void 0) {
          var h = p(v);
          return h === K ? void 0 : h;
        }
        return Reflect.get(u, l, f);
      },
      getOwnPropertyDescriptor(u, l) {
        var f = Reflect.getOwnPropertyDescriptor(u, l);
        if (f && "value" in f) {
          var v = r.get(l);
          v && (f.value = p(v));
        } else if (f === void 0) {
          var x = r.get(l), h = x == null ? void 0 : x.v;
          if (x !== void 0 && h !== K)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return f;
      },
      has(u, l) {
        var h;
        if (l === xr)
          return !0;
        var f = r.get(l), v = f !== void 0 && f.v !== K || Reflect.has(u, l);
        if (f !== void 0 || C !== null && (!v || (h = Qt(u, l)) != null && h.writable)) {
          f === void 0 && (f = o(() => {
            var _ = v ? st(u[l]) : K, d = /* @__PURE__ */ xe(_);
            return d;
          }), r.set(l, f));
          var x = p(f);
          if (x === K)
            return !1;
        }
        return v;
      },
      set(u, l, f, v) {
        var M;
        var x = r.get(l), h = l in u;
        if (n && l === "length")
          for (var _ = f; _ < /** @type {Source<number>} */
          x.v; _ += 1) {
            var d = r.get(_ + "");
            d !== void 0 ? Me(d, K) : _ in u && (d = o(() => /* @__PURE__ */ xe(K)), r.set(_ + "", d));
          }
        if (x === void 0)
          (!h || (M = Qt(u, l)) != null && M.writable) && (x = o(() => /* @__PURE__ */ xe(void 0)), Me(x, st(f)), r.set(l, x));
        else {
          h = x.v !== K;
          var w = o(() => st(f));
          Me(x, w);
        }
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c != null && c.set && c.set.call(v, f), !h) {
          if (n && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              r.get("length")
            ), N = Number(l);
            Number.isInteger(N) && N >= b.v && Me(b, N + 1);
          }
          er(s);
        }
        return !0;
      },
      ownKeys(u) {
        p(s);
        var l = Reflect.ownKeys(u).filter((x) => {
          var h = r.get(x);
          return h === void 0 || h.v !== K;
        });
        for (var [f, v] of r)
          v.v !== K && !(f in u) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        zs();
      }
    }
  );
}
var pn, Kn, Wn, Xn;
function pi() {
  if (pn === void 0) {
    pn = window, Kn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Wn = Qt(t, "firstChild").get, Xn = Qt(t, "nextSibling").get, dn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), dn(r) && (r.__t = void 0);
  }
}
function dt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Cr(e) {
  return (
    /** @type {TemplateNode | null} */
    Wn.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function fr(e) {
  return (
    /** @type {TemplateNode | null} */
    Xn.call(e)
  );
}
function g(e, t) {
  return /* @__PURE__ */ Cr(e);
}
function pr(e, t = !1) {
  {
    var r = /* @__PURE__ */ Cr(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ fr(r) : r;
  }
}
function j(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ fr(n);
  return n;
}
function gi(e) {
  e.textContent = "";
}
function Zn() {
  return !1;
}
function mi(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(ks, e, void 0)
  );
}
function Jn(e) {
  var t = T, r = C;
  Fe(null), We(null);
  try {
    return e();
  } finally {
    Fe(t), We(r);
  }
}
function xi(e) {
  C === null && (T === null && $s(), Hs()), _t && Ls();
}
function wi(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function it(e, t) {
  var r = C;
  r !== null && r.f & fe && (e |= fe);
  var n = {
    ctx: we,
    deps: null,
    nodes: null,
    f: e | Z | Re,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  y == null || y.register_created_effect(n);
  var s = n;
  if (e & zt)
    Ft !== null ? Ft.push(n) : Dt.ensure().schedule(n);
  else if (t !== null) {
    try {
      Yt(n);
    } catch (o) {
      throw de(n), o;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Kt) && (s = s.first, e & Ye && e & Vt && s !== null && (s.f |= Vt));
  }
  if (s !== null && (s.parent = r, r !== null && wi(s, r), T !== null && T.f & ne && !(e & ht))) {
    var a = (
      /** @type {Derived} */
      T
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return n;
}
function nn() {
  return T !== null && !$e;
}
function ji(e) {
  const t = it(Nr, null);
  return q(t, V), t.teardown = e, t;
}
function bi(e) {
  xi();
  var t = (
    /** @type {Effect} */
    C.f
  ), r = !T && (t & qe) !== 0 && (t & Rt) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      we
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Qn(e);
}
function Qn(e) {
  return it(zt | Fs, e);
}
function yi(e) {
  Dt.ensure();
  const t = it(ht | Kt, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? St(t, () => {
      de(t), n(void 0);
    }) : (de(t), n(void 0));
  });
}
function Ei(e) {
  return it(zt, e);
}
function ki(e) {
  return it(tr | Kt, e);
}
function es(e, t = 0) {
  return it(Nr | t, e);
}
function H(e, t = [], r = [], n = []) {
  oi(n, t, r, (s) => {
    it(Nr, () => e(...s.map(p)));
  });
}
function sn(e, t = 0) {
  var r = it(Ye | t, e);
  return r;
}
function De(e) {
  return it(qe | Kt, e);
}
function ts(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = _t, n = T;
    gn(!0), Fe(null);
    try {
      t.call(null);
    } finally {
      gn(r), Fe(n);
    }
  }
}
function an(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && Jn(() => {
      s.abort(Qe);
    });
    var n = r.next;
    r.f & ht ? r.parent = null : de(r, t), r = n;
  }
}
function Ti(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & qe || de(t), t = r;
  }
}
function de(e, t = !0) {
  var r = !1;
  (t || e.f & Is) && e.nodes !== null && e.nodes.end !== null && (Si(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), q(e, $r), an(e, t && !r), rr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const a of n)
      a.stop();
  ts(e), e.f ^= $r, e.f |= Ne;
  var s = e.parent;
  s !== null && s.first !== null && rs(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Si(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ fr(e);
    e.remove(), e = r;
  }
}
function rs(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function St(e, t, r = !0) {
  var n = [];
  ns(e, n, !0);
  var s = () => {
    r && de(e), t && t();
  }, a = n.length;
  if (a > 0) {
    var o = () => --a || s();
    for (var u of n)
      u.out(o);
  } else
    s();
}
function ns(e, t, r) {
  if (!(e.f & fe)) {
    e.f ^= fe;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const u of n)
        (u.is_global || r) && t.push(u);
    for (var s = e.first; s !== null; ) {
      var a = s.next;
      if (!(s.f & ht)) {
        var o = (s.f & Vt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & qe) !== 0 && (e.f & Ye) !== 0;
        ns(s, t, o ? r : !1);
      }
      s = a;
    }
  }
}
function ln(e) {
  ss(e, !0);
}
function ss(e, t) {
  if (e.f & fe) {
    e.f ^= fe, e.f & V || (q(e, Z), Dt.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Vt) !== 0 || (r.f & qe) !== 0;
      ss(r, s ? t : !1), r = n;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const o of a)
        (o.is_global || t) && o.in();
  }
}
function on(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ fr(r);
      t.append(r), r = s;
    }
}
let Tr = !1, _t = !1;
function gn(e) {
  _t = e;
}
let T = null, $e = !1;
function Fe(e) {
  T = e;
}
let C = null;
function We(e) {
  C = e;
}
let Ie = null;
function Ci(e) {
  T !== null && (Ie === null ? Ie = [e] : Ie.push(e));
}
let ve = null, _e = 0, Te = null;
function Ai(e) {
  Te = e;
}
let is = 1, xt = 0, Ct = xt;
function mn(e) {
  Ct = e;
}
function as() {
  return ++is;
}
function ur(e) {
  var t = e.f;
  if (t & Z)
    return !0;
  if (t & ne && (e.f &= ~At), t & Ke) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var a = r[s];
      if (ur(
        /** @type {Derived} */
        a
      ) && Vn(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    t & Re && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    X === null && q(e, V);
  }
  return !1;
}
function ls(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Ie !== null && Bt.call(Ie, e)))
    for (var s = 0; s < n.length; s++) {
      var a = n[s];
      a.f & ne ? ls(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? q(a, Z) : a.f & V && q(a, Ke), tn(
        /** @type {Effect} */
        a
      ));
    }
}
function os(e) {
  var w;
  var t = ve, r = _e, n = Te, s = T, a = Ie, o = we, u = $e, l = Ct, f = e.f;
  ve = /** @type {null | Value[]} */
  null, _e = 0, Te = null, T = f & (qe | ht) ? null : e, Ie = null, Ut(e.ctx), $e = !1, Ct = ++xt, e.ac !== null && (Jn(() => {
    e.ac.abort(Qe);
  }), e.ac = null);
  try {
    e.f |= Br;
    var v = (
      /** @type {Function} */
      e.fn
    ), x = v();
    e.f |= Rt;
    var h = e.deps, _ = y == null ? void 0 : y.is_fork;
    if (ve !== null) {
      var d;
      if (_ || rr(e, _e), h !== null && _e > 0)
        for (h.length = _e + ve.length, d = 0; d < ve.length; d++)
          h[_e + d] = ve[d];
      else
        e.deps = h = ve;
      if (nn() && e.f & Re)
        for (d = _e; d < h.length; d++)
          ((w = h[d]).reactions ?? (w.reactions = [])).push(e);
    } else !_ && h !== null && _e < h.length && (rr(e, _e), h.length = _e);
    if (In() && Te !== null && !$e && h !== null && !(e.f & (ne | Ke | Z)))
      for (d = 0; d < /** @type {Source[]} */
      Te.length; d++)
        ls(
          Te[d],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (xt++, s.deps !== null)
        for (let c = 0; c < r; c += 1)
          s.deps[c].rv = xt;
      if (t !== null)
        for (const c of t)
          c.rv = xt;
      Te !== null && (n === null ? n = Te : n.push(.../** @type {Source[]} */
      Te));
    }
    return e.f & vt && (e.f ^= vt), x;
  } catch (c) {
    return Fn(c);
  } finally {
    e.f ^= Br, ve = t, _e = r, Te = n, T = s, Ie = a, Ut(o), $e = u, Ct = l;
  }
}
function Di(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Ss.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && t.f & ne && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ve === null || !Bt.call(ve, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    a.f & Re && (a.f ^= Re, a.f &= ~At), a.v !== K && Qr(a), di(a), rr(a, 0);
  }
}
function rr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Di(e, r[n]);
}
function Yt(e) {
  var t = e.f;
  if (!(t & Ne)) {
    q(e, V);
    var r = C, n = Tr;
    C = e, Tr = !0;
    try {
      t & (Ye | An) ? Ti(e) : an(e), ts(e);
      var s = os(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = is;
      var a;
      Ts && Ws && e.f & Z && e.deps;
    } finally {
      Tr = n, C = r;
    }
  }
}
function p(e) {
  var t = e.f, r = (t & ne) !== 0;
  if (T !== null && !$e) {
    var n = C !== null && (C.f & Ne) !== 0;
    if (!n && (Ie === null || !Bt.call(Ie, e))) {
      var s = T.deps;
      if (T.f & Br)
        e.rv < xt && (e.rv = xt, ve === null && s !== null && s[_e] === e ? _e++ : ve === null ? ve = [e] : ve.push(e));
      else {
        (T.deps ?? (T.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [T] : Bt.call(a, T) || a.push(T);
      }
    }
  }
  if (_t && Tt.has(e))
    return Tt.get(e);
  if (r) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (_t) {
      var u = o.v;
      return (!(o.f & V) && o.reactions !== null || us(o)) && (u = rn(o)), Tt.set(o, u), u;
    }
    var l = (o.f & Re) === 0 && !$e && T !== null && (Tr || (T.f & Re) !== 0), f = (o.f & Rt) === 0;
    ur(o) && (l && (o.f |= Re), Vn(o)), l && !f && (Un(o), fs(o));
  }
  if (X != null && X.has(e))
    return X.get(e);
  if (e.f & vt)
    throw e.v;
  return e.v;
}
function fs(e) {
  if (e.f |= Re, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), t.f & ne && !(t.f & Re) && (Un(
        /** @type {Derived} */
        t
      ), fs(
        /** @type {Derived} */
        t
      ));
}
function us(e) {
  if (e.v === K) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Tt.has(t) || t.f & ne && us(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function cs(e) {
  var t = $e;
  try {
    return $e = !0, e();
  } finally {
    $e = t;
  }
}
const gr = Symbol("events"), Mi = /* @__PURE__ */ new Set(), xn = /* @__PURE__ */ new Set();
let wn = null;
function jn(e) {
  var c, b;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = ((c = e.composedPath) == null ? void 0 : c.call(e)) || [], a = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  wn = e;
  var o = 0, u = wn === e && e[gr];
  if (u) {
    var l = s.indexOf(u);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[gr] = t;
      return;
    }
    var f = s.indexOf(t);
    if (f === -1)
      return;
    l <= f && (o = l);
  }
  if (a = /** @type {Element} */
  s[o] || e.target, a !== t) {
    Cs(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = T, x = C;
    Fe(null), We(null);
    try {
      for (var h, _ = []; a !== null; ) {
        var d = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var w = (b = a[gr]) == null ? void 0 : b[n];
          w != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && w.call(a, e);
        } catch (N) {
          h ? _.push(N) : h = N;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        a = d;
      }
      if (h) {
        for (let N of _)
          queueMicrotask(() => {
            throw N;
          });
        throw h;
      }
    } finally {
      e[gr] = t, delete e.currentTarget, Fe(v), We(x);
    }
  }
}
var kn;
const Lr = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((kn = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : kn.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ri(e) {
  return (
    /** @type {string} */
    (Lr == null ? void 0 : Lr.createHTML(e)) ?? e
  );
}
function Ni(e) {
  var t = mi("template");
  return t.innerHTML = Ri(e.replaceAll("<!>", "<!---->")), t.content;
}
function Wr(e, t) {
  var r = (
    /** @type {Effect} */
    C
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  var r = (t & 1) !== 0, n = (t & 2) !== 0, s, a = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Ni(a ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ Cr(s)));
    var o = (
      /** @type {TemplateNode} */
      n || Kn ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Cr(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Wr(u, l);
    } else
      Wr(o, o);
    return o;
  };
}
function Ii() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = dt();
  return e.append(t, r), Wr(t, r), e;
}
function O(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Fi = ["touchstart", "touchmove"];
function Oi(e) {
  return Fi.includes(e);
}
function F(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function Pi(e, t) {
  return Li(e, t);
}
const mr = /* @__PURE__ */ new Map();
function Li(e, { target: t, anchor: r, props: n = {}, events: s, context: a, intro: o = !0, transformError: u }) {
  pi();
  var l = void 0, f = yi(() => {
    var v = r ?? t.appendChild(dt());
    ni(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (_) => {
        Rn({});
        var d = (
          /** @type {ComponentContext} */
          we
        );
        a && (d.c = a), s && (n.$$events = s), l = e(_, n) || {}, Nn();
      },
      u
    );
    var x = /* @__PURE__ */ new Set(), h = (_) => {
      for (var d = 0; d < _.length; d++) {
        var w = _[d];
        if (!x.has(w)) {
          x.add(w);
          var c = Oi(w);
          for (const M of [t, document]) {
            var b = mr.get(M);
            b === void 0 && (b = /* @__PURE__ */ new Map(), mr.set(M, b));
            var N = b.get(w);
            N === void 0 ? (M.addEventListener(w, jn, { passive: c }), b.set(w, 1)) : b.set(w, N + 1);
          }
        }
      }
    };
    return h(Rr(Mi)), xn.add(h), () => {
      var c;
      for (var _ of x)
        for (const b of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            mr.get(b)
          ), w = (
            /** @type {number} */
            d.get(_)
          );
          --w == 0 ? (b.removeEventListener(_, jn), d.delete(_), d.size === 0 && mr.delete(b)) : d.set(_, w);
        }
      xn.delete(h), v !== r && ((c = v.parentNode) == null || c.removeChild(v));
    };
  });
  return Hi.set(l, f), l;
}
let Hi = /* @__PURE__ */ new WeakMap();
var He, Ue, me, Et, lr, or, Mr;
class $i {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Pe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    E(this, He, /* @__PURE__ */ new Map());
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
    E(this, Ue, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    E(this, me, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    E(this, Et, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    E(this, lr, !0);
    /**
     * @param {Batch} batch
     */
    E(this, or, (t) => {
      if (i(this, He).has(t)) {
        var r = (
          /** @type {Key} */
          i(this, He).get(t)
        ), n = i(this, Ue).get(r);
        if (n)
          ln(n), i(this, Et).delete(r);
        else {
          var s = i(this, me).get(r);
          s && (i(this, Ue).set(r, s.effect), i(this, me).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [a, o] of i(this, He)) {
          if (i(this, He).delete(a), a === t)
            break;
          const u = i(this, me).get(o);
          u && (de(u.effect), i(this, me).delete(o));
        }
        for (const [a, o] of i(this, Ue)) {
          if (a === r || i(this, Et).has(a)) continue;
          const u = () => {
            if (Array.from(i(this, He).values()).includes(a)) {
              var f = document.createDocumentFragment();
              on(o, f), f.append(dt()), i(this, me).set(a, { effect: o, fragment: f });
            } else
              de(o);
            i(this, Et).delete(a), i(this, Ue).delete(a);
          };
          i(this, lr) || !n ? (i(this, Et).add(a), St(o, u, !1)) : u();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    E(this, Mr, (t) => {
      i(this, He).delete(t);
      const r = Array.from(i(this, He).values());
      for (const [n, s] of i(this, me))
        r.includes(n) || (de(s.effect), i(this, me).delete(n));
    });
    this.anchor = t, k(this, lr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      y
    ), s = Zn();
    if (r && !i(this, Ue).has(t) && !i(this, me).has(t))
      if (s) {
        var a = document.createDocumentFragment(), o = dt();
        a.append(o), i(this, me).set(t, {
          effect: De(() => r(o)),
          fragment: a
        });
      } else
        i(this, Ue).set(
          t,
          De(() => r(this.anchor))
        );
    if (i(this, He).set(n, t), s) {
      for (const [u, l] of i(this, Ue))
        u === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [u, l] of i(this, me))
        u === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(i(this, or)), n.ondiscard(i(this, Mr));
    } else
      i(this, or).call(this, n);
  }
}
He = new WeakMap(), Ue = new WeakMap(), me = new WeakMap(), Et = new WeakMap(), lr = new WeakMap(), or = new WeakMap(), Mr = new WeakMap();
function bn(e, t, r = !1) {
  var n = new $i(e), s = r ? Vt : 0;
  function a(o, u) {
    n.ensure(o, u);
  }
  sn(() => {
    var o = !1;
    t((u, l = 0) => {
      o = !0, a(l, u);
    }), o || a(-1, null);
  }, s);
}
function te(e, t) {
  return t;
}
function qi(e, t, r) {
  for (var n = [], s = t.length, a, o = t.length, u = 0; u < s; u++) {
    let x = t[u];
    St(
      x,
      () => {
        if (a) {
          if (a.pending.delete(x), a.done.add(x), a.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Xr(e, Rr(a.done)), h.delete(a), h.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var l = n.length === 0 && r !== null;
    if (l) {
      var f = (
        /** @type {Element} */
        r
      ), v = (
        /** @type {Element} */
        f.parentNode
      );
      gi(v), v.append(f), e.items.clear();
    }
    Xr(e, t, !l);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Xr(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const o of e.pending.values())
      for (const u of o)
        n.add(
          /** @type {EachItem} */
          e.items.get(u).e
        );
  }
  for (var s = 0; s < t.length; s++) {
    var a = t[s];
    if (n != null && n.has(a)) {
      a.f |= Ge;
      const o = document.createDocumentFragment();
      on(a, o);
    } else
      de(t[s], r);
  }
}
var yn;
function re(e, t, r, n, s, a = null) {
  var o = e, u = /* @__PURE__ */ new Map(), l = (t & 4) !== 0;
  if (l) {
    var f = (
      /** @type {Element} */
      e
    );
    o = f.appendChild(dt());
  }
  var v = null, x = /* @__PURE__ */ ci(() => {
    var M = r();
    return Sn(M) ? M : M == null ? [] : Rr(M);
  }), h, _ = /* @__PURE__ */ new Map(), d = !0;
  function w(M) {
    N.effect.f & Ne || (N.pending.delete(M), N.fallback = v, Bi(N, h, o, t, n), v !== null && (h.length === 0 ? v.f & Ge ? (v.f ^= Ge, Jt(v, null, o)) : ln(v) : St(v, () => {
      v = null;
    })));
  }
  function c(M) {
    N.pending.delete(M);
  }
  var b = sn(() => {
    h = /** @type {V[]} */
    p(x);
    for (var M = h.length, J = /* @__PURE__ */ new Set(), Oe = (
      /** @type {Batch} */
      y
    ), Xe = Zn(), se = 0; se < M; se += 1) {
      var Ze = h[se], at = n(Ze, se), ie = d ? null : u.get(at);
      ie ? (ie.v && Gt(ie.v, Ze), ie.i && Gt(ie.i, se), Xe && Oe.unskip_effect(ie.e)) : (ie = zi(
        u,
        d ? o : yn ?? (yn = dt()),
        Ze,
        at,
        se,
        s,
        t,
        r
      ), d || (ie.e.f |= Ge), u.set(at, ie)), J.add(at);
    }
    if (M === 0 && a && !v && (d ? v = De(() => a(o)) : (v = De(() => a(yn ?? (yn = dt()))), v.f |= Ge)), M > J.size && Ps(), !d)
      if (_.set(Oe, J), Xe) {
        for (const [pt, Nt] of u)
          J.has(pt) || Oe.skip_effect(Nt.e);
        Oe.oncommit(w), Oe.ondiscard(c);
      } else
        w(Oe);
    p(x);
  }), N = { effect: b, items: u, pending: _, outrogroups: null, fallback: v };
  d = !1;
}
function Zt(e) {
  for (; e !== null && !(e.f & qe); )
    e = e.next;
  return e;
}
function Bi(e, t, r, n, s) {
  var ie, pt, Nt, Wt, cr, Xt, vr, dr, hr;
  var a = (n & 8) !== 0, o = t.length, u = e.items, l = Zt(e.effect.first), f, v = null, x, h = [], _ = [], d, w, c, b;
  if (a)
    for (b = 0; b < o; b += 1)
      d = t[b], w = s(d, b), c = /** @type {EachItem} */
      u.get(w).e, c.f & Ge || ((pt = (ie = c.nodes) == null ? void 0 : ie.a) == null || pt.measure(), (x ?? (x = /* @__PURE__ */ new Set())).add(c));
  for (b = 0; b < o; b += 1) {
    if (d = t[b], w = s(d, b), c = /** @type {EachItem} */
    u.get(w).e, e.outrogroups !== null)
      for (const je of e.outrogroups)
        je.pending.delete(c), je.done.delete(c);
    if (c.f & fe && (ln(c), a && ((Wt = (Nt = c.nodes) == null ? void 0 : Nt.a) == null || Wt.unfix(), (x ?? (x = /* @__PURE__ */ new Set())).delete(c))), c.f & Ge)
      if (c.f ^= Ge, c === l)
        Jt(c, null, r);
      else {
        var N = v ? v.next : l;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), ot(e, v, c), ot(e, c, N), Jt(c, N, r), v = c, h = [], _ = [], l = Zt(v.next);
        continue;
      }
    if (c !== l) {
      if (f !== void 0 && f.has(c)) {
        if (h.length < _.length) {
          var M = _[0], J;
          v = M.prev;
          var Oe = h[0], Xe = h[h.length - 1];
          for (J = 0; J < h.length; J += 1)
            Jt(h[J], M, r);
          for (J = 0; J < _.length; J += 1)
            f.delete(_[J]);
          ot(e, Oe.prev, Xe.next), ot(e, v, Oe), ot(e, Xe, M), l = M, v = Xe, b -= 1, h = [], _ = [];
        } else
          f.delete(c), Jt(c, l, r), ot(e, c.prev, c.next), ot(e, c, v === null ? e.effect.first : v.next), ot(e, v, c), v = c;
        continue;
      }
      for (h = [], _ = []; l !== null && l !== c; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(l), _.push(l), l = Zt(l.next);
      if (l === null)
        continue;
    }
    c.f & Ge || h.push(c), v = c, l = Zt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const je of e.outrogroups)
      je.pending.size === 0 && (Xr(e, Rr(je.done)), (cr = e.outrogroups) == null || cr.delete(je));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var se = [];
    if (f !== void 0)
      for (c of f)
        c.f & fe || se.push(c);
    for (; l !== null; )
      !(l.f & fe) && l !== e.fallback && se.push(l), l = Zt(l.next);
    var Ze = se.length;
    if (Ze > 0) {
      var at = n & 4 && o === 0 ? r : null;
      if (a) {
        for (b = 0; b < Ze; b += 1)
          (vr = (Xt = se[b].nodes) == null ? void 0 : Xt.a) == null || vr.measure();
        for (b = 0; b < Ze; b += 1)
          (hr = (dr = se[b].nodes) == null ? void 0 : dr.a) == null || hr.fix();
      }
      qi(e, se, at);
    }
  }
  a && kt(() => {
    var je, _r;
    if (x !== void 0)
      for (c of x)
        (_r = (je = c.nodes) == null ? void 0 : je.a) == null || _r.apply();
  });
}
function zi(e, t, r, n, s, a, o, u) {
  var l = o & 1 ? o & 16 ? Mt(r) : /* @__PURE__ */ hi(r, !1, !1) : null, f = o & 2 ? Mt(s) : null;
  return {
    v: l,
    i: f,
    e: De(() => (a(t, l ?? r, f ?? s, u), () => {
      e.delete(n);
    }))
  };
}
function Jt(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, a = t && !(t.f & Ge) ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ fr(n)
      );
      if (a.before(n), n === s)
        return;
      n = o;
    }
}
function ot(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Vi(e, t) {
  return e == null ? null : String(e);
}
function Y(e, t, r, n) {
  var s = e.__style;
  if (s !== t) {
    var a = Vi(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  }
  return n;
}
function En(e, t) {
  return e === t || (e == null ? void 0 : e[xr]) === t;
}
function Ui(e = {}, t, r, n) {
  var s = (
    /** @type {ComponentContext} */
    we.r
  ), a = (
    /** @type {Effect} */
    C
  );
  return Ei(() => {
    var o, u;
    return es(() => {
      o = u, u = [], cs(() => {
        e !== r(...u) && (t(e, ...u), o && En(r(...o), e) && t(null, ...o));
      });
    }), () => {
      let l = a;
      for (; l !== s && l.parent !== null && l.parent.f & $r; )
        l = l.parent;
      const f = () => {
        u && En(r(...u), e) && t(null, ...u);
      }, v = l.teardown;
      l.teardown = () => {
        f(), v == null || v();
      };
    };
  }), e;
}
const Gi = "5";
var Tn;
typeof window < "u" && ((Tn = window.__svelte ?? (window.__svelte = {})).v ?? (Tn.v = /* @__PURE__ */ new Set())).add(Gi);
function Zr(e, t, r) {
  const n = document.createElement("span");
  n.style.setProperty(r, `var(${e})`), t.appendChild(n);
  const s = getComputedStyle(n).getPropertyValue(r).trim();
  return t.removeChild(n), s;
}
function Yi(e, t) {
  return Ki(Zr(e, t, "color"));
}
function Ki(e) {
  const t = e.match(/[\d.]+/g);
  return !t || t.length < 3 ? e : `#${[t[0], t[1], t[2]].map((n) => Math.round(Number(n)).toString(16).padStart(2, "0")).join("")}`;
}
var Wi = /* @__PURE__ */ L('<th class="svelte-1juuxfj"> </th>'), Xi = /* @__PURE__ */ L('<td class="svelte-1juuxfj"><button type="button" class="btn svelte-1juuxfj">Button</button></td>'), Zi = /* @__PURE__ */ L('<td class="svelte-1juuxfj"><button type="button" class="btn svelte-1juuxfj">Button</button></td>'), Ji = /* @__PURE__ */ L('<tr><td class="svelte-1juuxfj"><code class="svelte-1juuxfj"> </code></td><td class="hex svelte-1juuxfj"> </td><!></tr> <tr><td class="svelte-1juuxfj"><code class="svelte-1juuxfj"> </code></td><td class="hex svelte-1juuxfj"> </td><!></tr>', 1), Qi = /* @__PURE__ */ L('<div class="grey-item svelte-1juuxfj"><span class="swatch svelte-1juuxfj"></span> <code class="svelte-1juuxfj"> </code> <span class="hex svelte-1juuxfj"> </span> <span>The quick brown fox</span></div>'), ea = /* @__PURE__ */ L('<div class="grey-item svelte-1juuxfj"><span class="swatch svelte-1juuxfj"></span> <code class="svelte-1juuxfj"> </code> <span class="hex svelte-1juuxfj"> </span> <span>The quick brown fox</span></div>'), ta = /* @__PURE__ */ L('<th class="svelte-1juuxfj"> </th>'), ra = /* @__PURE__ */ L('<td class="svelte-1juuxfj">Packed my box with five dozen liquor jugs.</td>'), na = /* @__PURE__ */ L('<tr><td class="svelte-1juuxfj"><code class="svelte-1juuxfj"> </code></td><td class="hex svelte-1juuxfj"> </td><!></tr>'), sa = /* @__PURE__ */ L('<div class="alert svelte-1juuxfj"><div class="bar svelte-1juuxfj"></div> <div><code class="svelte-1juuxfj"> </code> <span class="hex svelte-1juuxfj"> </span> <p class="svelte-1juuxfj"> </p> <p class="on svelte-1juuxfj"> </p></div></div>'), ia = /* @__PURE__ */ L('<th class="svelte-1juuxfj"> </th>'), aa = /* @__PURE__ */ L("<span> </span>"), la = /* @__PURE__ */ L('<span class="icon-sample svelte-1juuxfj"></span>'), oa = /* @__PURE__ */ L('<span class="font-sample svelte-1juuxfj">The quick brown fox</span>'), fa = /* @__PURE__ */ L('<td class="svelte-1juuxfj"><!></td>'), ua = /* @__PURE__ */ L('<tr><td class="svelte-1juuxfj"><code class="svelte-1juuxfj"> </code></td><td class="hex svelte-1juuxfj"> </td><!></tr>'), ca = /* @__PURE__ */ L('<div class="shape-box svelte-1juuxfj"></div>'), va = /* @__PURE__ */ L('<span class="shape-chip svelte-1juuxfj">Chip</span> <span class="shape-field svelte-1juuxfj">Text field</span>', 1), da = /* @__PURE__ */ L('<button type="button" class="shape-btn svelte-1juuxfj">Button</button>'), ha = /* @__PURE__ */ L('<div class="shape-card svelte-1juuxfj"><strong>Card</strong> <span>Menu / surface</span></div>'), _a = /* @__PURE__ */ L('<div class="shape-dialog svelte-1juuxfj"><strong>Dialog</strong> <span>Modal surface</span></div> <button type="button" class="shape-fab svelte-1juuxfj" aria-label="FAB">+</button>', 1), pa = /* @__PURE__ */ L('<tr><td class="svelte-1juuxfj"><code class="svelte-1juuxfj"> </code></td><td class="hex svelte-1juuxfj"> </td><td class="hex svelte-1juuxfj"> </td><td class="svelte-1juuxfj"> </td><td class="svelte-1juuxfj"><div class="shape-preview svelte-1juuxfj"><!></div></td></tr>'), ga = /* @__PURE__ */ L('<div class="page svelte-1juuxfj"><h1 class="svelte-1juuxfj">Demo Theme</h1> <p class="lead svelte-1juuxfj">Internal tokens <code class="svelte-1juuxfj">--my-internal-*</code>, labeled with source <code class="svelte-1juuxfj">--oscd-theme-*</code>. Hex is read from the computed internal token.</p> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">1. Primary &amp; secondary buttons</h2> <table class="svelte-1juuxfj"><thead><tr><th class="svelte-1juuxfj">Token</th><th class="svelte-1juuxfj">Hex</th><!></tr></thead><tbody></tbody></table></section> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">2. Solarized greys</h2> <div class="grey-band svelte-1juuxfj" style="background: var(--my-internal-base3)"></div> <div class="grey-band svelte-1juuxfj" style="background: var(--my-internal-base03)"></div></section> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">3. Solarized colors</h2> <table class="svelte-1juuxfj"><thead><tr><th style="width: 150px" class="svelte-1juuxfj">Token</th><th class="svelte-1juuxfj">Hex</th><!></tr></thead><tbody></tbody></table></section> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">4. Error &amp; warning</h2> <div class="alerts svelte-1juuxfj"></div></section> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">5. Fonts</h2> <div class="table-wrap svelte-1juuxfj"><table class="svelte-1juuxfj"><thead><tr><th style="width: 200px" class="svelte-1juuxfj">Token</th><th class="svelte-1juuxfj">Value</th><!></tr></thead><tbody></tbody></table></div></section> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">6. Shape</h2> <p class="note svelte-1juuxfj">Host provides <code class="svelte-1juuxfj">--oscd-theme-shape</code> (<span class="hex svelte-1juuxfj"> </span> via <code class="svelte-1juuxfj">--my-internal-shape</code>). The MDC-style scale below is derived in <code class="svelte-1juuxfj">demo-theme.css</code>.</p> <div class="table-wrap svelte-1juuxfj"><table class="svelte-1juuxfj"><thead><tr><th class="svelte-1juuxfj">Token</th><th class="svelte-1juuxfj">Scale</th><th class="svelte-1juuxfj">Computed</th><th class="svelte-1juuxfj">Typical use</th><th class="svelte-1juuxfj">Preview</th></tr></thead><tbody></tbody></table></div></section></div>');
function ma(e, t) {
  Rn(t, !0);
  let r = /* @__PURE__ */ xe(void 0), n = /* @__PURE__ */ xe(st({})), s = /* @__PURE__ */ xe(st({})), a = /* @__PURE__ */ xe(st({}));
  const o = ["base03", "base02", "base01", "base00"], u = ["base3", "base2", "base1", "base0"], l = [
    "yellow",
    "orange",
    "red",
    "magenta",
    "violet",
    "blue",
    "cyan",
    "green"
  ], f = ["base03", "base02", "base2", "base3"], v = ["base3", "base2"], x = ["text-font", "text-font-mono", "icon-font"], h = [300, 400, 500, 600, 700], _ = ["home", "search", "settings"], d = [
    {
      id: "shape-none",
      scale: "×0",
      use: "Checkboxes, dense lists",
      preview: "tile"
    },
    {
      id: "shape-extra-small",
      scale: "×0.5",
      use: "Chips, text fields",
      preview: "chip"
    },
    {
      id: "shape-small",
      scale: "×1",
      use: "Buttons",
      preview: "button"
    },
    {
      id: "shape-medium",
      scale: "×1.5",
      use: "Cards, menus",
      preview: "card"
    },
    {
      id: "shape-large",
      scale: "×2",
      use: "Dialogs, FABs",
      preview: "dialog"
    }
  ];
  function w(A) {
    return `--oscd-theme-${A}`;
  }
  function c(A) {
    return `--my-internal-${A}`;
  }
  function b(A) {
    return A.replace(/^["']+|["']+$/g, "");
  }
  function N() {
    if (!p(r)) return;
    const A = [
      ...o,
      ...u,
      ...l,
      "primary",
      "secondary",
      "error",
      "warning"
    ], m = {};
    for (const D of A)
      m[D] = Yi(c(D), p(r));
    Me(n, m, !0);
    const S = {};
    for (const D of x)
      S[D] = b(Zr(c(D), p(r), "font-family")) || "…";
    Me(s, S, !0);
    const R = {};
    for (const D of ["shape", ...d.map((Q) => Q.id)])
      R[D] = Zr(c(D), p(r), "border-top-left-radius") || "…";
    Me(a, R, !0);
  }
  bi(() => {
    if (!p(r)) return;
    N();
    const A = new MutationObserver(N);
    return A.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }), () => A.disconnect();
  });
  var M = ga(), J = j(g(M), 4), Oe = j(g(J), 2), Xe = g(Oe), se = g(Xe), Ze = j(g(se), 2);
  re(Ze, 17, () => v, te, (A, m) => {
    var S = Wi(), R = g(S);
    H((D) => F(R, D), [() => w(p(m))]), O(A, S);
  });
  var at = j(Xe);
  re(at, 20, () => ["primary", "secondary"], te, (A, m) => {
    var S = Ji(), R = pr(S), D = g(R), Q = g(D), U = g(Q), ae = j(D), ue = g(ae), G = j(ae);
    re(G, 17, () => v, te, (le, Ee) => {
      var ke = Xi(), P = g(ke);
      H(
        (B, W, gt) => Y(P, `
                    background: var(${B ?? ""});
                    color: var(${W ?? ""});
                    border-color: var(${gt ?? ""});
                  `),
        [
          () => c(m),
          () => c(p(Ee)),
          () => c(p(Ee))
        ]
      ), O(le, ke);
    });
    var ee = j(R, 2), he = g(ee), Je = g(he), Be = g(Je), lt = j(he), be = g(lt), ye = j(lt);
    re(ye, 17, () => v, te, (le, Ee) => {
      var ke = Zi(), P = g(ke);
      H(
        (B, W, gt) => Y(P, `
                    background: var(${B ?? ""});
                    color: var(${W ?? ""});
                    border-color: var(${gt ?? ""});
                  `),
        [
          () => c(p(Ee)),
          () => c(m),
          () => c(m)
        ]
      ), O(le, ke);
    }), H(
      (le, Ee) => {
        F(U, le), F(ue, p(n)[m] ?? "…"), F(Be, `${Ee ?? ""} inverted`), F(be, p(n)[m] ?? "…");
      },
      [() => w(m), () => w(m)]
    ), O(A, S);
  });
  var ie = j(J, 2), pt = j(g(ie), 2);
  re(pt, 21, () => o, te, (A, m) => {
    var S = Qi(), R = g(S), D = j(R, 2), Q = g(D), U = j(D, 2), ae = g(U);
    H(
      (ue, G, ee) => {
        Y(S, `color: var(${ue ?? ""})`), Y(R, `background: var(${G ?? ""})`), F(Q, ee), F(ae, p(n)[p(m)] ?? "…");
      },
      [
        () => c(p(m)),
        () => c(p(m)),
        () => w(p(m))
      ]
    ), O(A, S);
  });
  var Nt = j(pt, 2);
  re(Nt, 21, () => u, te, (A, m) => {
    var S = ea(), R = g(S), D = j(R, 2), Q = g(D), U = j(D, 2), ae = g(U);
    H(
      (ue, G, ee) => {
        Y(S, `color: var(${ue ?? ""})`), Y(R, `background: var(${G ?? ""})`), F(Q, ee), F(ae, p(n)[p(m)] ?? "…");
      },
      [
        () => c(p(m)),
        () => c(p(m)),
        () => w(p(m))
      ]
    ), O(A, S);
  });
  var Wt = j(ie, 2), cr = j(g(Wt), 2), Xt = g(cr), vr = g(Xt), dr = j(g(vr), 2);
  re(dr, 17, () => f, te, (A, m) => {
    var S = ta(), R = g(S);
    H((D) => F(R, D), [() => w(p(m))]), O(A, S);
  });
  var hr = j(Xt);
  re(hr, 21, () => l, te, (A, m) => {
    var S = na(), R = g(S), D = g(R), Q = g(D), U = j(R), ae = g(U), ue = j(U);
    re(ue, 17, () => f, te, (G, ee) => {
      var he = ra();
      H(
        (Je, Be) => Y(he, `
                  background: var(${Je ?? ""});
                  color: var(${Be ?? ""});
                `),
        [() => c(p(ee)), () => c(p(m))]
      ), O(G, he);
    }), H(
      (G) => {
        F(Q, G), F(ae, p(n)[p(m)] ?? "…");
      },
      [() => w(p(m))]
    ), O(A, S);
  });
  var je = j(Wt, 2), _r = j(g(je), 2);
  re(_r, 20, () => ["error", "warning"], te, (A, m) => {
    var S = Ii(), R = pr(S);
    re(R, 17, () => v, te, (D, Q) => {
      var U = sa(), ae = g(U), ue = j(ae, 2), G = g(ue), ee = g(G), he = j(G, 2), Je = g(he), Be = j(he, 2), lt = g(Be), be = j(Be, 2), ye = g(be);
      H(
        (le, Ee, ke, P, B, W) => {
          Y(U, `
              background: var(${le ?? ""});
              color: var(${Ee ?? ""});
              border-color: var(${ke ?? ""});
            `), Y(ae, `background: var(${P ?? ""})`), F(ee, B), F(Je, p(n)[m] ?? "…"), F(lt, m === "error" ? "Something went wrong. Check the log." : "This setting is deprecated."), F(ye, `on ${W ?? ""}`);
        },
        [
          () => c(p(Q)),
          () => c(m),
          () => c(m),
          () => c(m),
          () => w(m),
          () => w(p(Q))
        ]
      ), O(D, U);
    }), O(A, S);
  });
  var fn = j(je, 2), vs = j(g(fn), 2), ds = g(vs), un = g(ds), hs = g(un), _s = j(g(hs), 2);
  re(_s, 17, () => h, te, (A, m) => {
    var S = ia(), R = g(S);
    H(() => F(R, p(m))), O(A, S);
  });
  var ps = j(un);
  re(ps, 21, () => x, te, (A, m) => {
    var S = ua(), R = g(S), D = g(R), Q = g(D), U = j(R), ae = g(U), ue = j(U);
    re(ue, 17, () => h, te, (G, ee) => {
      var he = fa(), Je = g(he);
      {
        var Be = (be) => {
          var ye = la();
          re(ye, 21, () => _, te, (le, Ee) => {
            var ke = aa(), P = g(ke);
            H(() => F(P, p(Ee))), O(le, ke);
          }), H(
            (le) => Y(ye, `
                        font-family: var(${le ?? ""});
                        font-weight: ${p(ee) ?? ""};
                        font-variation-settings: 'wght' ${p(ee) ?? ""};
                      `),
            [() => c(p(m))]
          ), O(be, ye);
        }, lt = (be) => {
          var ye = oa();
          H(
            (le) => Y(ye, `
                        font-family: var(${le ?? ""});
                        font-weight: ${p(ee) ?? ""};
                      `),
            [() => c(p(m))]
          ), O(be, ye);
        };
        bn(Je, (be) => {
          p(m) === "icon-font" ? be(Be) : be(lt, -1);
        });
      }
      O(G, he);
    }), H(
      (G) => {
        F(Q, G), F(ae, p(s)[p(m)] ?? "…");
      },
      [() => w(p(m))]
    ), O(A, S);
  });
  var gs = j(fn, 2), cn = j(g(gs), 2), ms = j(g(cn), 3), xs = g(ms), ws = j(cn, 2), js = g(ws), bs = j(g(js));
  re(bs, 21, () => d, te, (A, m) => {
    var S = pa(), R = g(S), D = g(R), Q = g(D), U = j(R), ae = g(U), ue = j(U), G = g(ue), ee = j(ue), he = g(ee), Je = j(ee), Be = g(Je), lt = g(Be);
    {
      var be = (P) => {
        var B = ca();
        H((W) => Y(B, `border-radius: var(${W ?? ""})`), [() => c(p(m).id)]), O(P, B);
      }, ye = (P) => {
        var B = va(), W = pr(B), gt = j(W, 2);
        H(
          (Ir, Fr) => {
            Y(W, `border-radius: var(${Ir ?? ""})`), Y(gt, `border-radius: var(${Fr ?? ""})`);
          },
          [() => c(p(m).id), () => c(p(m).id)]
        ), O(P, B);
      }, le = (P) => {
        var B = da();
        H((W) => Y(B, `border-radius: var(${W ?? ""})`), [() => c(p(m).id)]), O(P, B);
      }, Ee = (P) => {
        var B = ha();
        H((W) => Y(B, `border-radius: var(${W ?? ""})`), [() => c(p(m).id)]), O(P, B);
      }, ke = (P) => {
        var B = _a(), W = pr(B), gt = j(W, 2);
        H(
          (Ir, Fr) => {
            Y(W, `border-radius: var(${Ir ?? ""})`), Y(gt, `border-radius: var(${Fr ?? ""})`);
          },
          [() => c(p(m).id), () => c(p(m).id)]
        ), O(P, B);
      };
      bn(lt, (P) => {
        p(m).preview === "tile" ? P(be) : p(m).preview === "chip" ? P(ye, 1) : p(m).preview === "button" ? P(le, 2) : p(m).preview === "card" ? P(Ee, 3) : P(ke, -1);
      });
    }
    H(() => {
      F(Q, p(m).id), F(ae, p(m).scale), F(G, p(a)[p(m).id] ?? "…"), F(he, p(m).use);
    }), O(A, S);
  }), Ui(M, (A) => Me(r, A), () => p(r)), H(() => F(xs, p(a).shape ?? "…")), O(e, M), Nn();
}
function xa(e, t) {
  ma(e, {
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
const wa = "demo-theme", ja = "0.0.1";
function ba() {
  return document.querySelector("open-scd");
}
function ya() {
  const e = ba();
  return e != null && e.shadowRoot ? e.shadowRoot.querySelector("compas-layout") ?? e.shadowRoot.querySelector("oscd-layout") ?? null : null;
}
var qt;
class Ca extends HTMLElement {
  constructor() {
    super();
    E(this, qt);
    this.targetDiv = null, this.originalStyles = {}, k(this, qt, /* @__PURE__ */ xe(st({ doc: void 0, editCount: void 0, plugins: void 0 })));
  }
  get props() {
    return p(i(this, qt));
  }
  set props(r) {
    Me(i(this, qt), r, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this._editCount, this.props.plugins = this._plugins;
    const r = this.shadowRoot;
    if (!r)
      throw new Error("ShadowRoot not found");
    r.appendChild(ka()), Pi(xa, { target: r, props: this.props }), requestAnimationFrame(() => this.applyLayoutHack());
  }
  disconnectedCallback() {
    this.restoreLayoutHack();
  }
  set doc(r) {
    this._doc = r, this.props.doc = r;
  }
  set editCount(r) {
    this._editCount = r, this.props.editCount = r;
  }
  set plugins(r) {
    this._plugins = r, this.props.plugins = r;
  }
  /**
   * Apply a layout hack to fix the height of the plugin-container div.
   * This is necessary because compas-oscd core doesn't limit the plugin-container height to the current window-height.
   */
  applyLayoutHack() {
    const r = ya();
    r != null && r.shadowRoot && (this.targetDiv = r.shadowRoot.querySelector("div"), this.targetDiv && (this.originalStyles = {
      height: this.targetDiv.style.height,
      display: this.targetDiv.style.display,
      flexDirection: this.targetDiv.style.flexDirection
    }, this.targetDiv.style.height = "calc(100vh - 4px)", this.targetDiv.style.display = "flex", this.targetDiv.style.flexDirection = "column"));
  }
  restoreLayoutHack() {
    this.targetDiv && (this.targetDiv.style.height = this.originalStyles.height ?? "", this.targetDiv.style.display = this.originalStyles.display ?? "", this.targetDiv.style.flexDirection = this.originalStyles.flexDirection ?? "", this.targetDiv = null);
  }
}
qt = new WeakMap();
const Ea = ":root,:host{--my-internal-primary: var(--oscd-theme-primary, #2aa198);--my-internal-secondary: var(--oscd-theme-secondary, #6c71c4);--my-internal-base03: var(--oscd-theme-base03, light-dark(#002b36, #fdf6e3));--my-internal-base02: var(--oscd-theme-base02, light-dark(#073642, #eee8d5));--my-internal-base01: var(--oscd-theme-base01, light-dark(#586e75, #93a1a1));--my-internal-base00: var(--oscd-theme-base00, light-dark(#657b83, #839496));--my-internal-base0: var(--oscd-theme-base0, light-dark(#839496, #657b83));--my-internal-base1: var(--oscd-theme-base1, light-dark(#93a1a1, #586e75));--my-internal-base2: var(--oscd-theme-base2, light-dark(#eee8d5, #073642));--my-internal-base3: var(--oscd-theme-base3, light-dark(#fdf6e3, #002b36));--my-internal-yellow: var(--oscd-theme-yellow, #b58900);--my-internal-orange: var(--oscd-theme-orange, #cb4b16);--my-internal-red: var(--oscd-theme-red, #dc322f);--my-internal-magenta: var(--oscd-theme-magenta, #d33682);--my-internal-violet: var(--oscd-theme-violet, #6c71c4);--my-internal-blue: var(--oscd-theme-blue, #268bd2);--my-internal-cyan: var(--oscd-theme-cyan, #2aa198);--my-internal-green: var(--oscd-theme-green, #859900);--my-internal-error: var(--oscd-theme-error, var(--my-internal-red));--my-internal-warning: var(--oscd-theme-warning, var(--my-internal-yellow));--my-internal-text-font: var(--oscd-theme-text-font, \"Roboto\");--my-internal-text-font-mono: var(--oscd-theme-text-font-mono, \"Roboto Mono\");--my-internal-icon-font: var(--oscd-theme-icon-font, \"Material Symbols Outlined\");--my-internal-shape: var(--oscd-theme-shape, 8px);--my-internal-shape-none: 0;--my-internal-shape-extra-small: calc(.5 * var(--my-internal-shape));--my-internal-shape-small: var(--my-internal-shape);--my-internal-shape-medium: calc(1.5 * var(--my-internal-shape));--my-internal-shape-large: calc(2 * var(--my-internal-shape))}.page.svelte-1juuxfj{box-sizing:border-box;min-height:100%;padding:24px 28px 48px;font-family:var(--my-internal-text-font),system-ui,sans-serif;background:var(--my-internal-base3);color:var(--my-internal-base03);overflow:auto}h1.svelte-1juuxfj{margin:0 0 8px;font-size:1.6rem}h2.svelte-1juuxfj{margin:0 0 12px;font-size:1.15rem}.lead.svelte-1juuxfj{margin:0 0 28px;color:var(--my-internal-base01);max-width:52rem}section.svelte-1juuxfj{margin-bottom:32px}code.svelte-1juuxfj,.hex.svelte-1juuxfj{font-family:ui-monospace,Consolas,monospace;font-size:.82rem}.hex.svelte-1juuxfj{opacity:.85}.grey-band.svelte-1juuxfj{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:16px;margin-bottom:8px}.grey-item.svelte-1juuxfj{display:flex;flex-direction:column;gap:6px}.swatch.svelte-1juuxfj{display:block;height:36px;border:1px solid currentColor}.note.svelte-1juuxfj{margin:0 0 12px;color:var(--my-internal-base01);max-width:52rem}.table-wrap.svelte-1juuxfj{overflow-x:auto}table.svelte-1juuxfj{width:100%;border-collapse:collapse;font-size:.9rem}th.svelte-1juuxfj,td.svelte-1juuxfj{border:1px solid var(--my-internal-base01);padding:8px 10px;text-align:left;vertical-align:middle}th.svelte-1juuxfj{background:var(--my-internal-base2);color:var(--my-internal-base03);font-weight:600}.btn.svelte-1juuxfj{padding:6px 14px;border:2px solid;border-radius:4px;font:inherit;cursor:default}.alerts.svelte-1juuxfj{display:grid;grid-template-columns:1fr 1fr;gap:12px}.alert.svelte-1juuxfj{display:flex;gap:12px;padding:12px 14px;border:2px solid}.bar.svelte-1juuxfj{width:6px;flex-shrink:0}.alert.svelte-1juuxfj p:where(.svelte-1juuxfj){margin:6px 0 0}.on.svelte-1juuxfj{opacity:.8;font-size:.82rem}.alert.svelte-1juuxfj code:where(.svelte-1juuxfj),.alert.svelte-1juuxfj .hex:where(.svelte-1juuxfj){margin-right:8px}.font-sample.svelte-1juuxfj{font-size:.95rem}.icon-sample.svelte-1juuxfj{display:inline-flex;gap:8px;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}.shape-preview.svelte-1juuxfj{display:flex;flex-wrap:wrap;align-items:center;gap:10px}.shape-box.svelte-1juuxfj{width:48px;height:48px;background:var(--my-internal-primary)}.shape-chip.svelte-1juuxfj{padding:4px 12px;background:var(--my-internal-base2);border:1px solid var(--my-internal-base01);font-size:.82rem}.shape-field.svelte-1juuxfj{padding:8px 12px;border:1px solid var(--my-internal-base01);background:var(--my-internal-base3);font-size:.82rem}.shape-btn.svelte-1juuxfj,.shape-fab.svelte-1juuxfj{border:none;font:inherit;cursor:default}.shape-btn.svelte-1juuxfj{padding:8px 16px;background:var(--my-internal-primary);color:var(--my-internal-base3)}.shape-card.svelte-1juuxfj,.shape-dialog.svelte-1juuxfj{display:flex;flex-direction:column;gap:4px;min-width:140px;padding:12px 14px;background:var(--my-internal-base2);color:var(--my-internal-base03);font-size:.82rem}.shape-dialog.svelte-1juuxfj{background:var(--my-internal-base3);border:1px solid var(--my-internal-base01)}.shape-fab.svelte-1juuxfj{width:48px;height:48px;background:var(--my-internal-secondary);color:var(--my-internal-base3);font-size:1.4rem;line-height:1}:host{min-height:0;height:100%}\n";
function ka() {
  const e = document.createElement("style");
  return e.id = `${wa}-v${ja}-style`, e.textContent = Ea, e;
}
export {
  Ca as default
};
